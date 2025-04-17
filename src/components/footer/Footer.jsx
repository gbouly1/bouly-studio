import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="socials">
      <ul className="ul-socials">
        <li className="li-socials">
          <a href="#">instagram</a>
        </li>
        <li className="li-socials">
          <a href="#">linkdin</a>
        </li>
        <li className="li-socials">
          <a href="#">twitter</a>
        </li>
      </ul>
      <p className="status">
        available <span className="dot"></span>
        for <span className="dot"></span>work
      </p>
    </div>
  );
};

export default Footer;
