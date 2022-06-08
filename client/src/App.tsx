import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Button } from "@mui/material";
import "./App.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "7367156687-ci6cn59gllt698sjpklf2c8v7a6lh4ji.apps.googleusercontent.com";
  const [token, setToken] = useState("");

  const handleSuccess = async (res: any) => {
    const tokenId = res.credential;
    console.log(tokenId);
    const response = await axios.post(
      "http://localhost:5000/google-login",
      {},
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    console.log(response.data.token);
    setToken(response.data.token);
  };

  const handleGetAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
        {token !== "" && (
          <Button variant="contained" onClick={handleGetAllProducts}>
            GET ALL PRODUCTS
          </Button>
        )}
      </header>
    </div>
  );
}

export default App;
