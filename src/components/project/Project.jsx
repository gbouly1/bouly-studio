import React from "react";
import "./project.css";

const Project = ({ title, date, about }) => {
  return (
    <div className="project-wrapper">
      <a href="#">
        <div className="info-project">
          <h2 className="title-project">{title}</h2>
          <p className="date-project"> , {date}</p>
        </div>
        <p className="about-project">{about}</p>
      </a>
    </div>
  );
};

export default Project;
