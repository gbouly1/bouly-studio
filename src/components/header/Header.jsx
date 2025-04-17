import React from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="#hero">
        <img src={logo} alt="" />
      </a>
      <nav>
        <ul>
          <a href="#works">
            <li className="li-nav-bar">{"{works}"}</li>
          </a>
          <a href="#about">
            <li className="li-nav-bar">{"{me}"}</li>
          </a>
          <a href="#contact">
            <li className="li-nav-bar">{"{contact}"}</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
