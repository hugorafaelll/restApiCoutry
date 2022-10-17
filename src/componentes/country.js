import React from "react";
import { Link } from "react-router-dom";

const Country = () => {
  return (
    <>
      <Link to="/">
        <i className="fas fa-arrow-left"></i> Return
      </Link>
      <br />
      <h1>Nome do pais</h1>
    </>
  );
};

export default Country;
