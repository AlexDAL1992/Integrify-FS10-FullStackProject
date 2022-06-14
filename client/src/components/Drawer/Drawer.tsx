import React from "react";

import { Button, Drawer as DrawerButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./drawer.scss";

interface DrawerProps {
  state: boolean;
  onClick: Function;
}

const Drawer = ({ state, onClick }: DrawerProps) => {
  const onDrawerClick = () => {
    onClick(!state);
  };
  return (
    <div className="themedrawer">
      <DrawerButton anchor="left" open={state} className="themedrawer__drawer">
        <div className="themedrawer__drawer-content">
          <div className="themedrawer__drawer-title">
            <Close onClick={onDrawerClick} />
            <h3>THEMES</h3>
          </div>
          <div className="themedrawer__drawer-menu">
            <ul>
              <li>
                <Button>Light</Button>
              </li>
              <li>
                <Button>Dark</Button>
              </li>
            </ul>
          </div>
        </div>
      </DrawerButton>
    </div>
  );
};

export default Drawer;
