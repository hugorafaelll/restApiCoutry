import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./componentes/header";
import Filter from "./componentes/filter";
import AllCountries from "./componentes/allCountries";
import Country from "./componentes/country";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Filter />
        <AllCountries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
