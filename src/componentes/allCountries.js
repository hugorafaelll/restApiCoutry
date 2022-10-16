import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v2/all";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  const fetcCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetcCountries();
  }, []);

  return (
    <div>
      <section className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flag, numericCode } =
            country;

          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt="name" />
                <div className="details">
                  <h3>{name}</h3>
                  <h4>
                    População: <span> {population}</span>
                  </h4>
                  <h4>
                    Região: <span>{region}</span>
                  </h4>
                  <h4>Capital: {capital}</h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default AllCountries;
