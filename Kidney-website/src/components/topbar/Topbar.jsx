import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css'; 

const Topbar = () => {
  return (
    <div className="premium-topbar">
      <div className="topbar-wrapper">
        
        {/* Left Section: Call */}
        <div className="topbar-left">
          <a href="tel:+919876543210" className="topbar-item topbar-phone">
            <span className="icon"><i class="fa-solid fa-phone" ></i></span> 
            <span className="text">+91 98765 43210</span>
          </a>
        </div>

        {/* Middle Section: OPD Hours */}
        <div className="topbar-middle">
          <div className="topbar-item opd-hours">
            <span className="icon">🕒</span> 
            <span className="text">
              <span className="dim-text">OPD Hours:</span> 8:00 AM - 8:00 PM (Mon-Sat)
            </span>
          </div>
        </div>
        
        <div className="topbar-right">
          <div className="topbar-actions">
            <p>Follow Us</p>
            <Link to="#" className="sm-icon-link instagram" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="sm-icon-link facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="sm-icon-link youtube" aria-label="Youtube">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="#" className="sm-icon-link twitter" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Topbar;