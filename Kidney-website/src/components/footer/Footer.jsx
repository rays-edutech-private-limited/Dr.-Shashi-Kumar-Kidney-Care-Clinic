import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";

const Footer = ({onBookClick}) => {
  return (
    <footer className="sk-premium-footer">
      <div className="sk-footer-container">
        
        {/* Row Blocks Wrapper */}
        <div className="sk-footer-main-grid">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="sk-footer-col sk-brand-col">
            <div className="sk-logo-section">
              <img src={logo} className="sk-clinic-logo" alt="Dr. Shashi Kumar Kidney Care Logo" />
              <h2 className="sk-brand-title">Dr. Shashi Kumar</h2>
              <h3 className="sk-brand-subtitle">Kidney Care Clinic</h3>
              <p className="sk-brand-tagline">Advanced Kidney Care & Dialysis Solutions</p>
            </div>

            {/* Glowing Book Appointment Button */}
            <button className="sk-appointment-btn"  onClick={onBookClick}>
              <i className="fa-solid fa-calendar-days"></i> [Book Appointment]
            </button>

            {/* Contact Information Details */}
            <div className="sk-contact-details">
              <div className="sk-contact-item">
                <i className="fa-solid fa-phone-flip sk-icon-gold"></i>
                <span>Director & HOD, Nephrology<br />Paras Health, Patna</span>
              </div>
              <div className="sk-contact-item">
                <i className="fa-solid fa-location-dot sk-icon-gold"></i>
                <span>Plot 10, Main Street,<br />Patna, Bihar</span>
              </div>
              <div className="sk-contact-item">
                <i className="fa-solid fa-envelope sk-icon-gold"></i>
                <span>dr.kumar.kidney@care.com</span>
              </div>
            </div>
          </div>

          {/* Vertical Separator Divider Line */}
          <div className="sk-vertical-divider"></div>

          {/* Column 2: Center Menu & Links */}
          <div className="sk-footer-col sk-menu-center-col">
            
            {/* Top Half Section: About Doctor Biography */}
            <div className="sk-top-menus">
              <div className="sk-menu-block">
                <h4 className="sk-menu-heading">About Dr. Shashi Kumar</h4>
                <p className="sk-footer-bio-text" style={{ fontSize: '13px', lineHeight: '1.6', color: '#b0b3b8', marginBottom: '15px' }}>
                  One of the leading Nephrologists in Bihar with 11+ years of experience. Currently serving as Director & Head of Department (Nephrology) at Paras Health, Patna. Expert in managing thousands of dialysis and kidney transplant cases.
                </p>
              </div>
            </div>

            {/* Bottom Half Section with 3 Grid Columns */}
            <div className="sk-bottom-services-grid">
              
              {/* Qualifications Column */}
              <div className="sk-sub-menu-block">
                <h4 className="sk-menu-heading">Qualifications</h4>
                <ul className="sk-menu-list">
                  <li><a href="#mbbs">MBBS</a></li>
                  <li><a href="#md">MD (Internal Medicine)</a></li>
                  <li><a href="#dm">DM (Nephrology) - SGPGIMS</a></li>
                  <li><a href="#training">Interventional Nephrology</a></li>
                  <li><a href="#capd-train">Peritoneal Dialysis (CAPD)</a></li>
                </ul>
              </div>

              {/* Core Services Column */}
              <div className="sk-sub-menu-block">
                <h4 className="sk-menu-heading">Key Services</h4>
                <ul className="sk-menu-list">
                  <li className="active-tick"><a href="#ckd">CKD Management</a></li>
                  <li><a href="#hemodialysis">Hemodialysis Unit</a></li>
                  <li><a href="#transplant">Transplant Support</a></li>
                  <li><a href="#failure">Kidney Failure Treatment</a></li>
                  <li><a href="#aki">Acute Kidney Injury (AKI)</a></li>
                </ul>
              </div>

              {/* Diagnostics & Areas Column */}
              <div className="sk-sub-menu-block">
                <h4 className="sk-menu-heading">Specialized Care</h4>
                <ul className="sk-menu-list">
                  <li><a href="#diabetic">Diabetic Kidney Disease</a></li>
                  <li><a href="#hypertension">Hypertension Disorders</a></li>
                  <li><a href="#biopsy">Renal Biopsy</a></li>
                  <li><a href="#access">Dialysis Access Procedures</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Vertical Separator Divider Line */}
          <div className="sk-vertical-divider"></div>

          {/* Column 3: Website Navigation / Quick Links */}
          <div className="sk-footer-col sk-portal-side-col">
            <h4 className="sk-menu-heading">Quick Links</h4>
            <ul className="sk-menu-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Doctor</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Vertical Separator Divider Line */}
          <div className="sk-vertical-divider"></div>

          {/* Column 4: Patient Resources & Info */}
          <div className="sk-footer-col sk-portal-side-col">
            <h4 className="sk-menu-heading">Patient Portal</h4>
            <ul className="sk-menu-list">
              <li><a href="#register">Registration Forms</a></li>
              <li><a href="#records">Health Records</a></li>
              <li><a href="#billing">Insurance & Billing</a></li>
              <li><a href="#policy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        {/* Decorative Divider Line */}
        <div className="sk-horizontal-gold-divider"></div>

        {/* Copyright & Developer Credits Bar */}
        <div className="sk-footer-bottom-bar">
          <p className="sk-copyright-text">
            © 2026 Dr. Shashi Kumar Kidney Care Clinic. All rights reserved. | <span className="sk-tag-highlight">Expert Kidney Care, Compassionate Treatment.</span>
          </p>
          <div className="sk-developer-credits">
            <div className="sk-rays-logo-placeholder"></div>
            <span>Developed by <Link to="https://raysonline.in/" target="_blank" className="sk-developer-link">Rays Edutech Pvt. Ltd.</Link></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;