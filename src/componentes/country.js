import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../coutry.css";
const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {country.map((c) => {
          const {
            area,
            flags,
            capital,
            population,
            region,
            subregion,
            currencies,
            languages,
            nativeName,
          } = c;

          return (
            <article key={area}>
              <div className="country-inner">
                <div className="flag">
                  <h2>
                    Name:<span> {name}</span>
                  </h2>
                  <img src={flags.svg} />
                </div>

                <div className="country-details">
                  <div>
                    <h5>
                      Native Name :<span> {nativeName}</span>
                    </h5>
                    <h5>
                      Capital :<span> {capital}</span>
                    </h5>
                    <h5>
                      Region:<span> {region}</span>
                    </h5>
                    <h5>
                      Sub-region:<span> {subregion}</span>
                    </h5>
                    <h5>
                      Pupulation:<span> {population}</span>
                    </h5>
                    <h5>
                      Language:<span> {languages[0].name}</span>
                    </h5>
                    <h5>
                      Currencies: <span>{currencies[0].name}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
