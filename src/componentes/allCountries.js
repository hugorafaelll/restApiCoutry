import React, { useState, useEffect } from "react";

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

  return (
    <>
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
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default AllCountries;
