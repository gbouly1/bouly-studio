import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <p className="about-inter first-line">
        Hey, Im Guillaume <span className="about-italic">!</span>
      </p>
      <p className="about-inter second-line">a twenty-four years old</p>
      <p className="about-italic third-line ">front-end developer</p>
      <p className="about-inter fourth-line">
        from Paris<span className="dot"></span>
      </p>
      <div>
        <p className="description">
          After switching careers two years ago, I gradually stepped into the
          world of web development before discovering a true passion for
          crafting experiences through websites. With a passion for design, I'd
          be thrilled to bring your project to life with a unique indentity and
          a smooth, well-designed user-journey.
        </p>
      </div>
    </div>
  );
};

export default About;
