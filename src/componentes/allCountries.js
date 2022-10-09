import React, { useState, useEffect } from "react";
import { apiURL } from "../util/api";

import SearchInput from "../Search/SearchInput";
import FilterCountry from "../FilterCountry/FilterCountry";

import { Link } from "react-router-dom";

const url = "https://restcountries.com/v2/all";

const AllCountries = () => {

  const [countries, setCountries] = useState([])
  const [Filtered, setFiltered] = useState([])
  const [Search, setSearchInput] = useState("")
    const [isLoading, setLoading] =useState(true)
    
  useEffect(() => {
    const fetcCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
      setIsloading(false)
    }
    
    fetchCountries()
      },[])

    return (
  <>
      {AllCountries.map((country) => {
        const { numericCode, name, population, region, capital, flag } =
          country;

        return (
          <>
          <article article key={numericCode}>
            <div>
              <img src={flag} alt={name}></img>
              <h3>{name}</h3>
              <h4>
                Population:<span>{population}</span>
              </h4>
              <h4>
                Região:<span>{region}</span>
              </h4>
              <h4>
                Capital:<span>{capital}</span>
              </h4>
            </div>
          </article>
        })}
    </>
  );
};

export default AllCountries;
