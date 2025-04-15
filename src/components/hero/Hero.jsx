import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container hero-wrapper">
      <h1>
        Guillaume B<span className="o-title">o</span>uly <br />
        Fr<span className="o-title">o</span>ntend <br />
        Web devel<span className="o-title">o</span>per <br />
      </h1>
      <p className="title-location">Based in Paris</p>
    </div>
  );
};

export default Hero;
