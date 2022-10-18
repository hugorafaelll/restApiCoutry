import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch("https://randomfox.ca/?i=49");
      const country = await response.json();
      setCountry(country);
    };
    console.log(country);

    fetchCountryData();
  }, [name]);

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Return
      </Link>
      <br />
      <h1>Nome do pais</h1>
    </>
  );
};

export default Country;
