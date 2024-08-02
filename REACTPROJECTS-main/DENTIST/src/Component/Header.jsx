
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1>57<span style={{ color: "lightgreen" }}>D</span>entcare</h1>
        <nav>
          <ul className={menuOpen ? 'show' : ''}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#why-choose-us">Why Choose Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
        <a href="#contact" className="contact-btn">
          Contact Us
          <img src="https://cdn-icons-png.flaticon.com/512/15991/15991677.png" alt="" />
        </a>&nbsp;&nbsp;
        <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
