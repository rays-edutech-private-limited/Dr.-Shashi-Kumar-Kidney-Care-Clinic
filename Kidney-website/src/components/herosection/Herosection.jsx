import React from 'react';
import './Herosection.css';
import hero from "../../assets/image/hero-image1.png";

const Herosection = ({ onBookClick }) => {
  return (
    <section className="premium-hero-section">
      {/* Background Abstract Glowing Orbs & Lines */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="bg-organic-line"></div>

      <div className="hero-grid-container">
        
        {/* Left Side: Content, CTAs & Stats */}
        <div className="hero-left-panel">
          <div className="premium-tag">
            <span className="sparkle-gold"><i className="fa-solid fa-user-doctor"></i></span> Center for Advanced Nephrology
          </div>
          
          <h1 className="hero-main-title">
            Expert <span className="neon-teal-text">Kidney Care</span> <br />
            By Dr. Shashi Kumar
          </h1>
          
          <p className="hero-description-text">
            Director & HOD, Nephrology | 11+ Years of Experience <br />
            Kidney Disease, Dialysis & Transplant Specialist.
          </p>

          <div className="hero-cta-buttons">
            <button className="btn-neon-glow" onClick={onBookClick}>
              <i className="fa-solid fa-calendar-days"></i> Book Appointment
            </button>
            <button className="btn-outline-glass">
              Explore Our Facility <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* White Bottom Stats Board */}
          <div className="glass-stats-board">
            <div className="stat-card-box">
              <div className="hero-icon">
                <i className="fa-solid fa-stethoscope"></i>
              </div>
              <div className="text-hero">
                <h3>Advanced Nephrology</h3>
                <p>Comprehensive care for all kidney-related conditions.</p>
              </div>
            </div>

            <div className="board-divider"></div>

            <div className="stat-card-box">
              <div className="hero-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="text-hero">
                <h3>Dialysis Care</h3>
                <p>State-of-the-art dialysis with expert monitoring.</p>
              </div>
            </div>

            <div className="board-divider"></div>

            <div className="stat-card-box">
              <div className="hero-icon">
                <i className="fa-solid fa-hand-holding-medical"></i>
              </div>
              <div className="text-hero">
                <h3>Transplant Services</h3>
                <p>End-to-end kidney transplant care & support.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Fixed Doctor Image Frame & Vector Layout */}
        <div className="hero-right-panel">
          <div className="artwork-wrapper">
            
            {/* Inner Ring Vector Shape with explicit sizing */}
            <div className="biomedical-glow-shape">
              <img 
                src={hero} 
                alt="Dr. Shashi Kumar" 
                className="family-hero-img"
              />
            </div>

            {/* Bottom Right Happy Patients Counter */}
            <div className="floating-glass-pill pill-patients">
              <div className="pill-avatar-icon-blue">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="pill-info">
                <h5>5000+</h5>
                <p>Happy Patients</p>
                <p className="sub-text-p">Trusted Care Since Years</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosection;