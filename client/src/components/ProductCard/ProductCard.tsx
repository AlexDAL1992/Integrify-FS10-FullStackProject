import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../redux/reducers/cart";
import "./productcard.scss";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);

  return (
    <div className="product-card background text">
      <div className="product-card__wrapper">
        <img
          className="product-card__left"
          src={product.img}
          alt={product.name}
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        />
        <div className="product-card__right">
          <h3
            className="product-card__name"
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            {product.name}
          </h3>

          <p className="product-card__description">{product.description}</p>

          <Button
            color="inherit"
            variant="outlined"
            className="product-card__button"
            disabled={cart.includes(product)}
            onClick={() => dispatch(addToCart(product) as any)}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
