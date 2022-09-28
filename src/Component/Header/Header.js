import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <h2>
          <FontAwesomeIcon icon={faSchool} /> Study Routine
        </h2>
      </div>
      <div>
        <a href="Main">Home</a>
        <a href="Blog">Blog</a>
      </div>
    </nav>
  );
};

export default Header;
