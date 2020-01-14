import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Show_Question from "./pages/Show_Question";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact component={Home} />

        <Route path="/questions/:id" exact component={Show_Question} />
      </Container>
    </div>
  );
}

export default App;
