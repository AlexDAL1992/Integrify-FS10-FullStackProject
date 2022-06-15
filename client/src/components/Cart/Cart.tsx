import React from "react";
import { useDispatch } from "react-redux";
import { Menu, Fade } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { Product } from "../../redux/reducers/product";
import { removeFromCart } from "../../redux/reducers/cart";
import "./cart.scss";

type CartProps = {
  cart: Product[];
  onClick: Function;
  open: boolean;
  anchorElement: null | HTMLElement;
};

const Cart = ({ cart, onClick, open, anchorElement }: CartProps) => {
  const dispatch = useDispatch();
  return (
    <div className="cart background text">
      <Menu
        className="cart__menu"
        id="fade-menu"
        anchorEl={anchorElement}
        keepMounted
        open={open}
        onClose={() => onClick()}
        TransitionComponent={Fade}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          <h3 className="cart__list">Cart List</h3>
          {cart.length === 0 && (
            <div>
              <h3>Cart is empty</h3>
            </div>
          )}
          {cart &&
            cart.map((product) => (
              <div key={product.id} className="cart__item">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <Delete
                  className="cart__delete"
                  onClick={() => dispatch(removeFromCart(product))}
                />
              </div>
            ))}
        </div>
      </Menu>
    </div>
  );
};

export default Cart;
