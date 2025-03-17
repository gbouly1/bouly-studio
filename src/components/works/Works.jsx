import React from "react";
import Project from "../project/Project";
import "./works.css";

const Works = () => {
  return (
    <div className="container works-wrapper">
      <p className="recent-works">
        Welcome to my recents <span className="span-works">{"{works}"}</span>
      </p>
      <div className="projects-container">
        <Project
          key="l'épi se rit"
          title="L'épi se rit"
          date="november 2024"
          about="caterer"
        />
        <Project
          key="nathalie"
          title="Nathalie Mota"
          date="november 2024"
          about="photographer"
        />
        <Project
          key="planty"
          title="Planty"
          date="october 2024"
          about="energy drink"
        />
        <Project
          key="kasa"
          title="Kasa"
          date="august 2024"
          about="home location"
        />
      </div>
    </div>
  );
};

export default Works;
