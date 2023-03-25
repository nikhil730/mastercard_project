import React from "react";
import { AppBar, Toolbar, Typography, Box, Select, MenuItem } from "@material-ui/core";
import Names from "../Data/Names";
import "./Nav.css";
import DescriptionPage from "../DescriptionPage/DescriptionPage";
import { Link } from "react-router-dom";

const Header = () => {



  return (
    <AppBar style={{backgroundColor: "#696D66"}} position="static">
      <Toolbar>
        <Typography variant="h5">Financial Literacy Data Analytics</Typography>
      </Toolbar>
      <Toolbar style={{position: "absolute", right: "0%"}}>
        <Box>
          {/* <Select onChange={handleChange}> */}
          <Select>
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
