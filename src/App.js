import React from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;
