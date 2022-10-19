import React from "react";
import AllCountries from "./componentes/allCountries";
import Filter from "./componentes/filter";
import Header from "./componentes/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./componentes/Country";

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
