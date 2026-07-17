import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/image/logo.png";

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // इस फंक्शन से हम हैंडल करेंगे कि क्लिक करने पर क्या होना चाहिए
  const handleNavClick = (e, targetHash) => {
    e.preventDefault(); // डिफ़ॉल्ट # बिहेवियर को रोकें
    setIsOpen(false);   // मोबाइल मेनू बंद करें

    if (location.pathname !== '/') {
      // अगर यूजर होमपेज (/) पर नहीं है, तो पहले होमपेज पर भेजें
      navigate('/');
      // थोड़ा रुककर स्क्रॉल करें ताकि होमपेज लोड हो जाए
      setTimeout(() => {
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // अगर यूजर पहले से होमपेज पर है, तो सीधे स्मूथ स्क्रॉल करें
      const element = document.getElementById(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="luxury-navbar">
      <div className="navbar-wrapper">
        
        {/* Futuristic Aesthetic Medical Logo */}
        <a href="#home" className="luxury-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <div className="logo-icon-wrap">
            <img className='' src={logo} alt="Logo" />
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
          <li><a href="#home" className="active-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Doctor</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a></li>
          <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
          
          <li className="mobile-only-action">
            <button className="mobile-cta-glow" onClick={() => { setIsOpen(false); onBookClick(); }}>Book Appointment</button>
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