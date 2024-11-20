import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container">
      <h1>
        Freelance <br />
        Fr<span className="o-title">o</span>ntend <br />
        Web devel<span className="o-title">o</span>per
      </h1>
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
    </div>
  );
};

export default Hero;
