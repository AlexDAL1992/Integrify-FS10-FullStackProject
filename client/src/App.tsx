import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Router from "./Router";
import Drawer from "./components/Drawer/Drawer";
import AppBar from "./components/AppBar/AppBar";
import { setAllProducts } from "./redux/reducers/product";
import "./App.css";

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  return (
    <div className="App">
      <AppBar drawerState={drawerState} onClick={handleDrawerState} />
      <Drawer state={drawerState} onClick={handleDrawerState} />
      <Router />
    </div>
  );
}

export default App;
