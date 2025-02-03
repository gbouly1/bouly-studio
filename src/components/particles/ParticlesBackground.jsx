import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#0b1215" }, // Couleur du fond
        },
        particles: {
          number: { value: 200 }, // Augmente le nombre de particules
          color: { value: "#ff0000" }, // Particules rouges
          size: { value: 20 }, // Particules très grandes
          opacity: {
            value: 1, // Opacité maximale
          },
          move: {
            enable: true,
            speed: 3, // Augmente la vitesse
            direction: "none",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
