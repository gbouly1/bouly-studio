import React, { useEffect, useRef } from "react";
import "./about.css";

const About = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    if (firstRef.current) {
      observer.observe(firstRef.current);
      console.log(observer);
    }
    if (secondRef.current) {
      observer.observe(secondRef.current);
    }
    if (thirdRef.current) {
      observer.observe(thirdRef.current);
    }
    if (fourthRef.current) {
      observer.observe(fourthRef.current);
    }
    if (fifthRef.current) {
      observer.observe(fifthRef.current);
    }
  }, []);

  return (
    <div className="about-wrapper">
      <p className="about-inter first-line" ref={firstRef}>
        Hey, Im Guillaume <span className="about-italic">!</span>
      </p>
      <p className="about-inter second-line" ref={secondRef}>
        a twenty-four years old
      </p>
      <p className="about-italic third-line " ref={thirdRef}>
        front-end developer
      </p>
      <p className="about-inter fourth-line" ref={fourthRef}>
        from Paris<span className="dot"></span>
      </p>
      <div>
        <p className="description" ref={fifthRef}>
          After switching careers two years ago, I gradually stepped into the
          world of web development before discovering a true passion for
          crafting experiences through websites. I'd be thrilled to bring your
          project to life with a unique indentity and a smooth, well-designed
          user-journey.
        </p>
      </div>
    </div>
  );
};

export default About;
