import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="socials">
      <ul className="ul-socials">
        <li className="li-socials">instagram</li>
        <li className="li-socials">linkdin</li>
        <li className="li-socials">twitter</li>
      </ul>
      <p className="status">
        available <span className="dot"></span>
        for <span className="dot"></span>work
      </p>
    </div>
  );
};

export default Footer;
