import React from "react";
import "./items.css";

const Button = ({
  email = "boulyguillaume@orange.fr",
  subject = "Contact depuis Bouly Studio",
}) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="email-button-container">
      <button className="email-button">
        <a href={mailtoLink}>Get in touch</a>
      </button>
    </div>
  );
};

export default Button;
