import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@material-ui/core";
import Names from "../Data/Names";
import "./Nav.css";
import DescriptionPage from "../DescriptionPage/DescriptionPage";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);
  const handleClick = (event) => {
    console.log(event);
    <DescriptionPage text={event} />;
  };

  return (
    <AppBar style={{ backgroundColor: "#696D66" }} position="static">
      <Toolbar>
        <Typography variant="h5">Financial Literacy Data Analytics</Typography>
      </Toolbar>
      <Toolbar style={{ position: "absolute", right: "0%" }}>
        <Box>
          {/* <Select onChange={handleChange}> */}
          <Select>
            {Names.map((name) => {
              // return <Link to="/description"><MenuItem onClick={handleClick} value={name.name}>{name.name}</MenuItem></Link>;
              return (
                <Link
                  to={{
                    pathname: "/description",
                    state: { name: name.name },
                  }}

                  // onClick={() => handleClick(name.name)}
                >
                  <MenuItem value={name.name}>{name.name}</MenuItem>
                </Link>
              );
            })}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
