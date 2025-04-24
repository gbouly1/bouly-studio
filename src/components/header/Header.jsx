import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1060);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1060);
      if (window.innerWidth >= 1060) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header">
      <a href="#hero">
        <img src={logo} alt="" />
      </a>

      {isMobile && (
        <div
          className={`burger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      <nav className={menuOpen ? "open" : ""}>
        <ul>
          <a href="#works" onClick={() => isMobile && setMenuOpen(false)}>
            <li className="li-nav-bar">{"{works}"}</li>
          </a>
          <a href="#about" onClick={() => isMobile && setMenuOpen(false)}>
            <li className="li-nav-bar">{"{me}"}</li>
          </a>
          <a href="#contact" onClick={() => isMobile && setMenuOpen(false)}>
            <li className="li-nav-bar">{"{contact}"}</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
