import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v2/all";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  const [Filtered, setFiltered] = useState([]);
  const [Search, setSearchInput] = useState("");
  const [isLoading, setLoading] = useState(true);

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
                  População: <span> {population}</span>{" "}
                </h4>
                <h4>
                  Região: <span>{region}</span>{" "}
                </h4>
                <h4>Capital: {capital}</h4>
                <Link to={`/countries/${name}`} className="btn">
                  {" "}
                  Learn More{" "}
                </Link>
                <button
                  className="btn"
                  onClick={() => removeCountry(numericCode)}
                >
                  {" "}
                  Remove Country{" "}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  </div>;
};

export default AllCountries;
