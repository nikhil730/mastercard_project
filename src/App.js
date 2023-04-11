import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Map from "./components/Map/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DescriptionPage from "./components/DescriptionPage/DescriptionPage";
import Start from "./components/Start/Start";
import SecondPage from "./components/SecondPage/SecondPage";
import Pages from "./components/Pages/Pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start/>
        </Route>
        <Route exact path="/map">
          <div style={{width: "100%",  backgroundColor: "rgba(68, 144, 144, 0.108)" }}>
          <Nav />
          <center>
            <Map />
          </center>
          </div>
        </Route>
        <Route exact path="/description">
          <DescriptionPage />
        </Route>
        <Route exact path="/secondPage">
          <SecondPage/>
        </Route>
        <Route exact path="/pages">
          <Pages/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
