import React from "react";
import Button from "../items/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <p className="contact-title">GUILLAUME</p> */}
      <Button />
      <p className="contact-studio">
        B<span className="o-contact">O</span>ULY
      </p>
    </div>
  );
};

export default Contact;
