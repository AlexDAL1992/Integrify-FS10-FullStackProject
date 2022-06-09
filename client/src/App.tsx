import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";

import Can from "./components/Can";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const clientId =
    (process.env.GOOGLE_CLIENT_ID as string) ||
    "7367156687-ci6cn59gllt698sjpklf2c8v7a6lh4ji.apps.googleusercontent.com";

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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>

        <Can
          role="admin"
          perform="products:get"
          yes={() => (
            <Button variant="contained" onClick={handleGetAllProducts}>
              GET ALL PRODUCTS
            </Button>
          )}
          no={() => <p>PERMISSION DENIED!</p>}
        />
      </header>
    </div>
  );
}

export default App;
