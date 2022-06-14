import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, Menu } from "@mui/icons-material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { clientId } from "../../services/login";
import { handleLoginSuccess } from "../../redux/reducers/user";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import "./AppBar.scss";

interface AppBarProps {
  drawerState: boolean;
  onClick: Function;
}

const AppBar = ({ drawerState, onClick }: AppBarProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const role = useSelector((state: any) => state.user.user.role);

  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = async (res: any) => {
    dispatch(handleLoginSuccess(res) as any);
  };

  return (
    <div className="appbar">
      <div className="appbar__content container">
        <div className="appbar__content-theme">
          <Menu onClick={onDrawerClick} />
        </div>
        <div>
          <Link to={"/"}>{role === "admin" ? "DASHBOARD" : "HOMEPAGE"}</Link>
        </div>
        {role === "admin" && (
          <div>
            <Link to={"/form"}>FORM</Link>
          </div>
        )}
        {role === "admin" && (
          <div>
            <Link to={"/user"}>USERS</Link>
          </div>
        )}
        <div>
          <Search />
        </div>
        <button className="appbar__content-cart" onClick={handleClick}>
          <ShoppingCart />
          <div className="appbar__content-cart-count">{cart && cart.length}</div>
        </button>
        <Cart
          cart={cart}
          open={open}
          anchorElement={anchorEl}
          onClick={handleClose}
        />
        <div>
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin onSuccess={handleLogin} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
