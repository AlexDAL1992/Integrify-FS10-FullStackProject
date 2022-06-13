import React, { useState } from "react";
import Homepage from "./pages/Homepage";

import Can from "./components/Can";
import logo from "./logo.svg";
import loginService from './services/login'
import "./App.css";

function App() {
  
  /* const [token, setToken] = useState("");
  const [decodedToken, setDecodedToken] = useState<{ [key: string]: any }>({});

  const clientId =
    (process.env.GOOGLE_CLIENT_ID as string) ||
    "7367156687-ci6cn59gllt698sjpklf2c8v7a6lh4ji.apps.googleusercontent.com";

  const handleSuccess = async (res: any) => {
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
    setToken(token);
    const decodedToken = jwt_decode(token) as { [key: string]: any };
    setDecodedToken(decodedToken);
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
  }; */

  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>

        <Can
          role={decodedToken.role}
          perform="products:get"
          yes={() => (
            <Button variant="contained" onClick={handleGetAllProducts}>
              GET ALL PRODUCTS
            </Button>
          )}
          no={() => <p>PERMISSION DENIED!</p>}
        />
      </header>
    </div> */

  return (
    
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
