import React, { useEffect, useRef } from "react";
import "./works.css";
import Project from "../project/Project";

const Works = () => {
  const recentWorksRef = useRef(); // Ref pour recent-works
  const projectsRef = useRef(); // Ref pour projects-container

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe 'active' aux deux éléments
          if (recentWorksRef.current) {
            recentWorksRef.current.classList.add("active");
          }
          if (projectsRef.current) {
            projectsRef.current.classList.add("active");
          }
        }
      });
    });

    // Observer recentWorksRef
    if (recentWorksRef.current) {
      observer.observe(recentWorksRef.current);
    }

    // Observer projectsRef
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    // Cleanup
    return () => {
      if (recentWorksRef.current) observer.unobserve(recentWorksRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <div className="container works-wrapper">
      {/* Ref pour l'élément recent-works */}
      <p ref={recentWorksRef} className="recent-works">
        Welcome to my recents <span className="span-works">{"{works}"}</span>
      </p>
      {/* Ref pour l'élément projects-container */}
      <div ref={projectsRef} className="projects-container">
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
