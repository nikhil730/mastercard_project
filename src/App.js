import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav"
import Map from "./components/Map/Map";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Map/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
