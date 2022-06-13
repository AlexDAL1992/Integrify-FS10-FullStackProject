import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Can from "../../components/Can";
import { handleLoginSuccess } from "../../redux/reducers/user";
import { setAllProducts } from "../../redux/reducers/product";
import { clientId } from "../../services/login";
import './homepage.scss'

const Homepage = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: any) => state.user.user.role);
  const token = useSelector((state: any) => state.user.token);

  const getProducts = async (event: any) => {
    event.preventDefault();
    dispatch(setAllProducts(token) as any);
  };

  const handleLogin = async (res: any) => {
    dispatch(handleLoginSuccess(res)as any);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin onSuccess={handleLogin} />
      </GoogleOAuthProvider>

      <Can
        role={role}
        perform="products:get"
        yes={() => (
          <Button variant="contained" onClick={getProducts}>
            GET ALL PRODUCTS
          </Button>
        )}
        no={() => <p>PERMISSION DENIED!</p>}
      />
    </div>
  );
};

export default Homepage;
