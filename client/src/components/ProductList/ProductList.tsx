import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import { setAllProducts } from "../../redux/reducers/product";
import "./productlist.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.user.token);
  const productList = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(setAllProducts(token) as any);
  }, [dispatch, token]);

  return (
    <div>
      <div>Product List</div>
      {productList &&
        productList.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
