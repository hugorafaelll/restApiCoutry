import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Country from "./Country";

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

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountry);
  };

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
                  <div className="btn1">
                    <Link
                      to={`/countries/${name}`}
                      className="btn"
                      children={<Country />}
                    >
                      Learn More
                    </Link>
                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
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
