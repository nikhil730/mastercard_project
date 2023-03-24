import React from "react";
import { AppBar, Toolbar, Typography, Box, Select,MenuItem } from "@material-ui/core";
import Names from "../Data/Names";

import "./Nav.css";

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Navbar</Typography>
        <Box display="flex">
          <Select>
            {Names.map((name) => {
              return <MenuItem value={name.name}>{name.name}</MenuItem>;
            })}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
