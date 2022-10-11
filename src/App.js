import React from "react";
import AllCountries from "./componentes/allCountries";
import Filter from "./componentes/filter";
import Header from "./componentes/header";

const url = "https://restcountries.com/";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <AllCountries />
    </>
  );
}

export default App;
