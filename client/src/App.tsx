import React, { useState } from "react";
import Router from "./Router";

import "./App.css";
import AppBar from "./components/AppBar/AppBar";

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };

  return (
    <div className="App">
      <AppBar drawerState={drawerState} onClick={handleDrawerState} />
      <Router />
    </div>
  );
}

export default App;
