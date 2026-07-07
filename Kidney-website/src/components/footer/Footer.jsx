import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";

const Footer = ({ onBookClick }) => {
  return (
    <footer className="sk-premium-footer">
      <div className="sk-footer-container">
        
        {/* Main Grid Wrapper */}
        <div className="sk-footer-main-grid">
          
          {/* Column 1: Brand Info & Appointment */}
          <div className="sk-footer-col sk-brand-col">
            <div className="sk-logo-section">
              <img src={logo} className="sk-clinic-logo" alt="Dr. Shashi Kumar Kidney Care Logo" />
              <h2 className="sk-brand-title">Dr. Shashi Kumar</h2>
              <h3 className="sk-brand-subtitle">Kidney Care Clinic</h3>
              <p className="sk-brand-tagline">Advanced Kidney Care & Dialysis Solutions</p>
            </div>
            {/* Appointment Button */}
            <button className="sk-appointment-btn" onClick={onBookClick}>
              <i className="fa-solid fa-calendar-days"></i> Book Appointment
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sk-footer-col sk-links-col">
            <h4 className="sk-menu-heading">Quick Links</h4>
            <ul className="sk-menu-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Doctor</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="sk-footer-col sk-contact-col">
            <h4 className="sk-menu-heading">Contact Info</h4>
            <div className="sk-contact-details">
              <div className="sk-contact-item">
                <i className="fa-solid fa-user-doctor sk-icon-gold"></i>
                <span>Director & HOD, Nephrology<br />Paras Health, Patna</span>
              </div>
              <div className="sk-contact-item">
                <i className="fa-solid fa-location-dot sk-icon-gold"></i>
                <span>Patel Path, Raja Bazar, Bailey Road, Patna, Bihar</span>
              </div>
              <div className="sk-contact-item">
                <i className="fa-solid fa-envelope sk-icon-gold"></i>
                <span className="sk-email-text">dr.kumar.kidney@care.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="sk-footer-col sk-social-col">
            <h4 className="sk-menu-heading">Connect With Us</h4>
            <p className="sk-social-text">Follow us on social media for health tips and clinic updates.</p>
            <div className="sk-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Gold Divider Line */}
        <div className="sk-horizontal-gold-divider"></div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="sk-footer-bottom-bar">
          <p className="sk-copyright-text">
            © 2026 Dr. Shashi Kumar Kidney Care Clinic. All rights reserved. 
            <span className="sk-tag-highlight"> Expert Kidney Care, Compassionate Treatment.</span>
          </p>
          <div className="sk-developer-credits">
            <span>Developed by <Link to="https://raysonline.in/" target="_blank" className="sk-developer-link">Rays Edutech Pvt. Ltd.</Link></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;