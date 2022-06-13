import React, { useState } from "react";
import Router from "./Router";

import Drawer from "./components/Drawer/Drawer";
import AppBar from "./components/AppBar/AppBar";
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
