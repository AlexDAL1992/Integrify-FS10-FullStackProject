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
    <div>
      <DrawerButton anchor="left" open={state}>
        <div>
          <Close onClick={onDrawerClick} />
          <h3>THEMES</h3>
        </div>
        <div>
          <ul>
            <li>
              <Button>Light</Button>
            </li>
            <li>
              <Button>Dark</Button>
            </li>
          </ul>
        </div>
      </DrawerButton>
    </div>
  );
};

export default Drawer;
