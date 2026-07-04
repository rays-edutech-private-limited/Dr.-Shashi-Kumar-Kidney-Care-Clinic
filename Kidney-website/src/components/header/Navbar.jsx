import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../assets/image/logo.png"

const Navbar = ({onBookClick}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="luxury-navbar">
      <div className="navbar-wrapper">
        
        {/* Futuristic Aesthetic Medical Logo */}
        <a href="#home" className="luxury-logo">
          <div className="logo-icon-wrap">
            <img className='' src={logo} alt="" />
            {/* <span className="pulse-glow"></span>
            <span className="main-icon"></span> */}
          </div>
          <div className="logo-brand">
            <span className="logo-main-title">Dr.<span className="thin">Shashi Kumar </span></span>
            <span className="logo-tag">Kidney Hospital & Research Institute</span>
          </div>
        </a>

        {/* Hamburger Menu button for Mobile view */}
        <div className={`lux-hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="h-line"></span>
          <span className="h-line"></span>
          <span className="h-line"></span>
        </div>

        {/* Dynamic Nav Menu Links */}
        <ul className={`lux-nav-links ${isOpen ? 'show-menu' : ''}`}>
          <li><a href="#home" className="active-link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Doctor</a></li>
           <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
           <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a></li>
          
          <li className="mobile-only-action">
            <button className="mobile-cta-glow" onClick={onBookClick}>Book Appointment</button>
          </li>
        </ul>

        {/* Premium Call to Action Button */}
        <div className="lux-cta-zone">
          <button className="btn-glow-effect" onClick={onBookClick}>
            <span>Book Appointment</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;