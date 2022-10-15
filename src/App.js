import React from "react";
import AllCountries from "./componentes/AllCountries";
import Filter from "./componentes/Filter";
import Header from "./componentes/Header";
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
