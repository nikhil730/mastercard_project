import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav"
import Map from "./components/Map/Map";
import List from "./components/List/List";


function App() {
  return (
    <div className="App">

     <Nav/>
     <Map/>
     <List/>
    </div>
  );
}

export default App;
