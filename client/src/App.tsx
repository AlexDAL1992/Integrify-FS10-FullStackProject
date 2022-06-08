import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const cliendId =
    "7367156687-ci6cn59gllt698sjpklf2c8v7a6lh4ji.apps.googleusercontent.com";

  const handleSuccess = async (res: any) => {
    console.log("response", res);
    // const tokenId = res.credential;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GoogleOAuthProvider clientId={cliendId}>
          <GoogleLogin onSuccess={handleSuccess} />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
