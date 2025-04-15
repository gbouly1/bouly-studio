import React from "react";
import "./about.css";
import Hobbies from "./Hobbies";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-title">
          <h2>About me</h2>
          <p>
            Hey, I'm Guillaume, a 24 year-old frontend developer who love
            design. Based in Paris, I'm looking for freelance opportunities to
            work on exciting projects.
          </p>
        </div>
        <div className="about-title">
          <h2>My journey</h2>
          <p>
            After switching careers two years ago, I gradually stepped into the
            world of web development before discovering a true passion for
            crafting experiences through websites. With a passion for design,
            I'd be thrilled to bring your project to life with a unique
            indentity and a smooth, well-designed user-journey.
          </p>
        </div>
        <div className="about-title">
          <h2>Experience</h2>
          <p>
            After training myself online and independently, I worked on many
            projects, including personal projects and for courses. I am always
            eager to learn new technologies and improve my skills.
          </p>
        </div>
        <div className="about-title">
          <h2>Skills</h2>
          <p>
            HTML - CSS - JavaScript - React - Figma <br />I can also work on
            Wordpress and Shopify projects.
          </p>
        </div>
      </div>
      <Hobbies />
    </div>
  );
};

export default About;
