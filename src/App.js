import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Show_Question from "./pages/Show_Question";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App h-100">
      <Route path="/project-3/" exact component={Home} />
      <Route path="/project-3/questions" exact component={Show_Question} />
      <Route path="/project-3/results" exact component={Results} />
    </div>
  );
}

export default App;
