import React, { useEffect, useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem, Select, TablePagination } from "@mui/material";
import _ from "lodash";

import ProductCard from "../ProductCard/ProductCard";
import ProductPagination from "../ProductPagination/ProductPagination";
import { setAllProducts } from "../../redux/reducers/product";
import "./productlist.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  // loading the login credential in order to see products
  const token = useSelector((state: any) => state.user.token);
  useEffect(() => {
    dispatch(setAllProducts(token) as any);
  }, [dispatch, token]);

  const productList = useSelector((state: any) => state.product);

  // searching products by name
  const keyword = useSelector((state: any) => state.search);
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    setFilteredProducts(
      productList.filter((product: any) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [keyword, productList]);

  // sorting products by names and descriptions
  const [sortByValue, setSortByValue] = useState("name-asc");
  const [sortedProducts, setSortedProduct] = useState(filteredProducts);

  useEffect(() => {
    const sortField = sortByValue.includes("name") ? "name" : "description";
    const sortOrder = sortByValue.includes("asc") ? "asc" : "desc";

    const sorted = _.orderBy(filteredProducts, [sortField], [sortOrder]) as [];
    setSortedProduct(sorted);
  }, [sortByValue, filteredProducts]);

  const handleSort = (event: any) => {
    setSortByValue(event.target.value);
  };

  // making pagination of product list
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paginatedProducts, setPaginatedProducts] = useState(sortedProducts);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const paginated = sortedProducts.slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
    setPaginatedProducts(paginated);
  }, [page, rowsPerPage, sortedProducts]);

  return (
    <div className="product-list background text">
      <div className="product-list__title">PRODUCT LIST</div>

      <div className="product-list__sort">
        <p>Sort by</p>
        <Select
          labelId="product-sort-label"
          id="product-sort"
          defaultValue="name-asc"
          onChange={handleSort}
        >
          <MenuItem value="name-asc">Name - Ascending order</MenuItem>
          <MenuItem value="name-desc">Name - Descending order</MenuItem>
          <MenuItem value="des-asc">Description - Ascending order</MenuItem>
          <MenuItem value="des-desc">Description - Descending order</MenuItem>
        </Select>
      </div>

      {productList &&
        paginatedProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}

      <div className="product-list__pagination">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={sortedProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={ProductPagination}
        />
      </div>
    </div>
  );
};

export default ProductList;
