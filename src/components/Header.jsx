import React from "react";
import { useState } from "react";
import "./style/header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  const [classActive, setClassActive] = useState();

  const handleNavigation = () => {
    if (active) {
      setClassActive("active");
      setActive(false);
    } else {
      setActive(true);
      setClassActive("inactive");
    }
  };

  return (
    <div className="header-container">
      <h2 className="header__title">AngelR.Dev</h2>
      <div className={`navigation ${classActive}`}>
        <div onClick={handleNavigation} className={`toggle ${classActive}`}>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#tech">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
