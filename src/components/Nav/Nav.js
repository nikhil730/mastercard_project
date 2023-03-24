import React from "react";
import { AppBar, Toolbar, Typography, Box, Select,MenuItem } from "@material-ui/core";
import Names from "../Data/Names";
import "./Nav.css";
import { Link } from "react-router-dom";

const Header = () => {

  const handleChange = (i) => {
    <DescriptionPage index={i}/>
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Navbar</Typography>
        <Box display="flex">
          <Select onChange={handleChange}>
            {Names.map((name, i) => {
              return <Link to="/description"><MenuItem value={name.name}>{name.name}</MenuItem></Link>;
            })}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
