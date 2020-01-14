import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Show_Question from "./pages/Show_Question";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App h-100">
      <Route path="/" exact component={Home} />
      <Route path="/questions" exact component={Show_Question} />
    </div>
  );
}

export default App;
