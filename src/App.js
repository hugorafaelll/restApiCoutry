import React from "react";
import AllCountries from "./componentes/allCountries";
import Header from "./componentes/header";

const url = "https://restcountries.com/";

function App() {
  return (
    <>
      <Header />
      <AllCountries />
    </>
  );
}

export default App;
