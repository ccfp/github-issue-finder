import React from "react";
import Home from "views/Home";
import Results from "views/Results";
import { Router } from "@reach/router";

import "./App.scss";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Results path="/results" />
    </Router>
  );
}

export default App;
