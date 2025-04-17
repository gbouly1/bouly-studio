import React from "react";
import Button from "../items/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact-title">
        B<span className="o-contact">O</span>U
        <span className="under-button">LY</span>
      </p>
      <Button />
      <p className="contact-studio">
        STUDI<span className="o-contact">O</span>
      </p>
    </div>
  );
};

export default Contact;
