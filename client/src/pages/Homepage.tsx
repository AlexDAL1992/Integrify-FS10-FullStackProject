import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Can from "../components/Can";
import loginService from "../services/login";
import { setUser } from "../redux/reducers/user";
import {setAllProducts} from '../redux/reducers/product'

const Homepage = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: any) => state.user.user.role);
  const token = useSelector((state: any) => state.user.token);
  const product = useSelector((state: any) => state.product);

  const getProducts = async (event: any) => {
    event.preventDefault();
    dispatch(setAllProducts(token) as any);
  };

  const handleLogin = async (res: any) => {
    const tokenId = res.credential;
    const response = await axios.post(
      "http://localhost:5000/google-login",
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    const token = await response.data.token;
    const decodedToken = jwt_decode(token) as { [key: string]: any };
    dispatch(setUser({ token, user: decodedToken }));
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={loginService.clientId}>
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
