import React from "react";
import AllCountries from "./componentes/allCountries";
import Filter from "./componentes/filter";
import Header from "./componentes/header";
import { browserRouter as Router, Route } from "reac-router-dom";

const url = "https://restcountries.com/";

function App() {
  return (
    <Router>
      <Header />
      <Filter />

      <Route>
        <AllCountries />
      </Route>
    </Router>
  );
}

export default App;
