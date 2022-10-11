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

      <div>
        <select name="select" id="select" className="select">
          <option value="Asia">Filter By Region</option>
          <option value="Africa">Filter By Region</option>
          <option value="America">Filter By Region</option>
          <option value="Europa">Filter By Region</option>
          <option value="Oceania">Filter By Region</option>
        </select>
      </div>
    </section>
  );
};
