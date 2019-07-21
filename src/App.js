import React from "react";
import { Router } from "@reach/router";

import Home from "views/Home";
import Results from "views/Results";
import createStore from "store";
import { search, results } from "store/reducer";

import "./App.scss";

export const [SearchProvider, useSearch] = createStore(search);
export const [ResultsProvider, useResults] = createStore(results);

function App() {
  return (
    <Router>
      <SearchProvider path="/">
        <Home default />
      </SearchProvider>
      <ResultsProvider path="/results">
        <Results default />
      </ResultsProvider>
    </Router>
  );
}

export default App;
