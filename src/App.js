import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Filter from "./componentes/Filter";
import AllCountries from "./componentes/AllCountries";
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
