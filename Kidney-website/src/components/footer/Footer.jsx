import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './Footer.css'; 
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";

const Footer = ({ onBookClick }) => {
  return (
    <footer className="sk-premium-footer">
      {/* फुटर कंटेनर को स्क्रॉल करते ही व्यू में आने पर स्मूथली लोड करने के लिए motion.div बनाया */}
      <motion.div 
        className="sk-footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6 }}
      >
        
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
            {/* Appointment Button with hover and tap scale */}
            <motion.button 
              className="sk-appointment-btn" 
              onClick={onBookClick}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fa-solid fa-calendar-days"></i> Book Appointment
            </motion.button>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sk-footer-col sk-links-col">
            <h4 className="sk-menu-heading">Quick Links</h4>
            <ul className="sk-menu-list">
              {/* हर लिंक पर होवर करने पर थोड़ा सा राइट साइड (x: 5) खिसकने का प्रीमियम इफ़ेक्ट */}
              <motion.li whileHover={{ x: 5 }}><a href="#home">Home</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#about">About Doctor</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#services">Our Services</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#gallery">Gallery</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#testimonials">Testimonials</a></motion.li>
              <motion.li whileHover={{ x: 5 }}><a href="#contact">Contact Us</a></motion.li>
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
              {/* सोशल लिंक्स पर होवर करने पर हल्का सा ऊपर उठने (y: -4) का एनिमेशन */}
              <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://facebook.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-facebook-f"></i>
              </motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://instagram.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-instagram"></i>
              </motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://twitter.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-x-twitter"></i>
              </motion.a>
              <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://youtube.com" target="_blank" rel="noreferrer" className="sk-social-link">
                <i className="fa-brands fa-youtube"></i>
              </motion.a>
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

      </motion.div>
    </footer>
  );
};

export default Footer;