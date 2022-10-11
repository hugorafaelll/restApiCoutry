import React from "react";

const Filter = () => {
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a Country"
        />
      </form>

      <div className="region-filter">
        <select name="select" id="select" className="select">
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
