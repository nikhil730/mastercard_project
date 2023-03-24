import React from "react";
import { AppBar, Toolbar, Typography, Box, Select,MenuItem } from "@material-ui/core";
import Names from "../Data/Names";
import "./Nav.css";
import DescriptionPage from "../DescriptionPage/DescriptionPage";

const Header = () => {

  const handleChange = (i) => {
    <DescriptionPage index={i}/>
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Navbar</Typography>
        <Box display="flex">
          {/* <Select onChange={handleChange}> */}
          <Select>
            {Names.map((name, i) => {
              return <MenuItem value={name.name}>{name.name}</MenuItem>;
            })}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
