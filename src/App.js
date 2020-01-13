import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
