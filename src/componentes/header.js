import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>
        <div>
          <i className="fa-solid fa-moon"></i>
        </div>
      </header>
    </>
  );
};

export default Header;
