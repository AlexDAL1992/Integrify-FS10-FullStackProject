import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { deleteProduct } from "../../redux/reducers/product";
import { addToCart } from "../../redux/reducers/cart";
import Can from "../Can";
import "./productcard.scss";

const ProductCard = ({ product }: any) => {
  const dispatch = useDispatch();
  const role = useSelector((state: any) => state.user.user.role);
  const cart = useSelector((state: any) => state.cart);

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <img src={product.img} />
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <div>
        <Button
          disabled={cart.includes(product)}
          onClick={() => dispatch(addToCart(product) as any)}
        >
          ADD TO CART
        </Button>
      </div>
      <Can
        role={role}
        perform="product:delete"
        yes={() => (
          <div>
            <Button onClick={() => dispatch(deleteProduct(product.id) as any)}>
              DELETE THIS PRODUCT
            </Button>
          </div>
        )}
        no={() => <div></div>}
      />
    </div>
  );
};

export default ProductCard;
