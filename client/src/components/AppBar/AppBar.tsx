import React, { useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, Menu } from '@mui/icons-material'

import Cart from "../Cart/Cart";
import Search from '../Search/Search'
import "./AppBar.scss";

interface AppBarProps {
  drawerState: boolean;
  onClick: Function;
}

const AppBar = ({ drawerState, onClick }: AppBarProps) => {
  const onDrawerClick = () => {
    onClick(!drawerState);
  };

  const cart = useSelector((state: any) => state.cart);
  const role = useSelector((state: any) => state.user.user.role)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div>
      <div>
      <Menu onClick={onDrawerClick} />
      </div>
      <div>
          {role === 'admin' ? 'Dashboard' : 'Homepage'}
      </div>
      <div><Search /></div>
      <button onClick={handleClick}>
        <ShoppingCart />
        <div>
            {cart && cart.length}
        </div>
      </button>
      <Cart
          cart={cart}
          open={open}
          anchorElement={anchorEl}
          onClick={handleClose}
        />

  </div>;
};

export default AppBar;
