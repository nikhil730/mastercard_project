import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav"
import Map from "./components/Map/Map";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DescriptionPage from "./components/DescriptionPage/DescriptionPage";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Map/>
        </Route>
        <Route exact path="/description">
          <DescriptionPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
