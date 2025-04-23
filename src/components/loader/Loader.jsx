import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Commence l'animation de fondu

      // Retire le composant du DOM après la fin de l'animation
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 1000); // Durée de l'animation de fondu

      return () => clearTimeout(removeTimer);
    }, 4300);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <span className="animated-letter" style={{ animationDelay: "1.0s" }}>
        W
      </span>
      <span className="animated-letter" style={{ animationDelay: "1.1s" }}>
        e
      </span>
      <span className="animated-letter" style={{ animationDelay: "1.2s" }}>
        l
      </span>
      <span className="animated-letter" style={{ animationDelay: "1.3s" }}>
        c
      </span>
      <span
        className="animated-letter o-loader"
        style={{ animationDelay: "1.4s" }}
      >
        o
      </span>
      <span className="animated-letter" style={{ animationDelay: "1.5s" }}>
        m
      </span>
      <span className="animated-letter" style={{ animationDelay: "1.6s" }}>
        e
      </span>
      <span className="space-letter">&nbsp;</span>
      <span className="animated-letter" style={{ animationDelay: "1.7s" }}>
        t
      </span>
      <span
        className="animated-letter o-loader"
        style={{ animationDelay: "1.8s" }}
      >
        o
      </span>
      <span className="space-letter">&nbsp;</span>
      <span className="animated-letter" style={{ animationDelay: "1.9s" }}>
        m
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.0s" }}>
        y
      </span>
      <span className="space-letter">&nbsp;</span>
      <span className="animated-letter" style={{ animationDelay: "2.1s" }}>
        p
      </span>
      <span
        className="animated-letter o-loader"
        style={{ animationDelay: "2.2s" }}
      >
        o
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.3s" }}>
        r
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.4s" }}>
        t
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.5s" }}>
        f
      </span>
      <span
        className="animated-letter o-loader"
        style={{ animationDelay: "2.6s" }}
      >
        o
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.7s" }}>
        l
      </span>
      <span className="animated-letter" style={{ animationDelay: "2.8s" }}>
        i
      </span>
      <span
        className="animated-letter o-loader"
        style={{ animationDelay: "2.9s" }}
      >
        o
      </span>
    </div>
  );
};

export default Loader;
