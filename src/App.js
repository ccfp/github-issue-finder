import React from "react";
import { Route } from "react-router-dom";
import Home from "views/Home";
import Results from "views/Results";

import "./App.scss";

function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/results" component={Results} />
    </>
  );
}

export default App;
