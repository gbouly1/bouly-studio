import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import "./shootingStars.css"; // Créez ce fichier CSS séparé pour les animations

const ParticlesComponent = (props) => {
  const [, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0b1215",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: false,
            mode: "grab",
          },
        },
        modes: {
          bounce: {
            distance: 200,
          },
          repulse: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 75,
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 700,
        },
        opacity: {
          value: { min: 0.5, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="particles-container">
      <Particles id={props.id} init={particlesLoaded} options={options} />

      {/* Étoiles filantes */}
      <div className="shooting-stars-container">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>
    </div>
  );
};

export default ParticlesComponent;
