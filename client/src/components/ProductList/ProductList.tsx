import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import { setAllProducts } from "../../redux/reducers/product";
import "./productlist.scss";

const ProductList = () => {
  const dispatch = useDispatch();

  const token = useSelector((state: any) => state.user.token);
  useEffect(() => {
    dispatch(setAllProducts(token) as any);
  }, [dispatch, token]);

  const productList = useSelector((state: any) => state.product);

  const keyword = useSelector((state: any) => state.search);
  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    setFilteredProducts(
      productList.filter((product: any) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }, [keyword, productList]);

  return (
    <div className="product-list background text">
      <div className="product-list__title">PRODUCT LIST</div>
      {productList &&
        filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
