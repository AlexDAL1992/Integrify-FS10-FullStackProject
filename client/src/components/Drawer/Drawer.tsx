import React, { useContext } from "react";
import { Button, Drawer as DrawerButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import { ThemeContext } from "../Context/ThemeContext";
import "./drawer.scss";

interface DrawerProps {
  state: boolean;
  onClick: Function;
}

const Drawer = ({ state, onClick }: DrawerProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const onDrawerClick = () => {
    onClick(!state);
  };
  return (
    <div className="themedrawer text background">
      <DrawerButton anchor="left" open={state} className="themedrawer__drawer">
        <div className="themedrawer__drawer-content">
          <div className="themedrawer__drawer-title">
            <Close onClick={onDrawerClick} />
            <h3>THEMES</h3>
          </div>
          <div className="themedrawer__drawer-menu">
            <ul>
              <li>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
              </li>
              <li>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </DrawerButton>
    </div>
  );
};

export default Drawer;
