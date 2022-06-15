import React, { useState, useContext } from "react";

import Router from "./Router";
import Drawer from "./components/Drawer/Drawer";
import AppBar from "./components/AppBar/AppBar";
import { ThemeContext } from "./components/Context/ThemeContext";
import "./App.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  const [drawerState, setDrawerState] = useState(false);
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  return (
    <div className={`App ${theme}`}>
      <AppBar drawerState={drawerState} onClick={handleDrawerState} />
      <Drawer state={drawerState} onClick={handleDrawerState} />
      <Router />
    </div>
  );
}

export default App;
