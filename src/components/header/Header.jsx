import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <a href="#works"></a>
            {"{works}"}
          </li>
          <li>
            <a href="#me"></a>
            {"{me}"}
          </li>
          <li>
            <a href="#contact"></a>
            {"{contact}"}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
