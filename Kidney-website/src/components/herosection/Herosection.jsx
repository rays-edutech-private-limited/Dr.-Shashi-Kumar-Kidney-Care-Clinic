import React from 'react';
import './Herosection.css';
import hero from "../../assets/image/hero5.png"

const Herosection = ({onBookClick}) => {
  return (
    <section className="premium-hero-section">
      {/* Background Abstract Glowing Orbs & Lines */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>
      <div className="bg-organic-line"></div>

      <div className="hero-grid-container">
        
        {/* Left Side: Premium Copywriting & Glowing CTAs */}
        <div className="hero-left-panel">
          <div className="premium-tag">
            <span className="sparkle-gold"><i class="fa-solid fa-stethoscope"></i></span> Center for Advanced Nephrology
          </div>
          
          <h1 className="hero-main-title">
            Expert <span className="neon-teal-text">Kidney Care</span> <br />
             By Dr. Shashi Kumar
          </h1>
          
          <p className="hero-description-text">
           Director & HOD, Nephrology | 11+ Years of Experience | Kidney Disease, Dialysis & Transplant Specialist.

          </p>

          <div className="hero-cta-buttons">
            <button className="btn-neon-glow" onClick={onBookClick}><i class="fa-solid fa-calendar-days"></i> Book Appointment</button>
            <button className="btn-outline-glass">Explore Our Facility <i class="fa-solid fa-arrow-right-long"></i></button>
          </div>

          {/* Glassmorphism Stats Counter Panel */}
          <div className="glass-stats-board">
  
  {/* Advanced Nephrology */}
  <div className="stat-card-box">
    <div className="hero-icon">
      <i class="fa-solid fa-stethoscope"></i>
    </div>
    <div className="text-hero">
      <h3>Advanced Nephrology</h3>
      <p>Comprehensive care for all kidney-related conditions.</p>
    </div>
  </div>

  <div className="board-divider"></div>

  {/* Dialysis Care */}
  <div className="stat-card-box">
    <div className="hero-icon">
      <i className="fa-solid fa-bed-pulse"></i>
    </div>
    <div className="text-hero">
      <h3>Dialysis Care</h3>
      <p>State-of-the-art dialysis with expert monitoring.</p>
    </div>
  </div>

  <div className="board-divider"></div>

  {/* Transplant Services */}
  <div className="stat-card-box">
    <div className="hero-icon">
      <i className="fa-solid fa-heart-circle-check"></i>
    </div>
    <div className="text-hero">
      <h3>Transplant Services</h3>
      <p>End-to-end kidney transplant care & support.</p>
    </div>
  </div>

</div>
        </div>

        {/* Right Side: Glowing Medical Family & Specialist Cards */}
        <div className="hero-right-panel">
          <div className="artwork-wrapper">
            
            {/* The Main Glowing Kidney Core Graphics Shape */}
            <div className="biomedical-glow-shape">
              <div className="inner-family-art">
                {/* Embedded Original Concept Image */}
                <img 
                  src={hero} 
                  alt="Comprehensive Renal Care" 
                  className="family-hero-img"
                />
                <div className="image-overlay-tint"></div>
              </div>
            </div>

            {/* Top Left Floating Glass Card (Specialists) */}
            <div className="floating-glass-pill pill-specialist">
              <div className="pill-avatar-row">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop" alt="Doctor" className="avatar-img" />
                <img src="https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" alt="Doctor" className="avatar-img" />
              </div>
              <div className="pill-info">
                <h5>Top Specialists</h5>
                <p>Stethetislops doctors</p>
              </div>
            </div>

            {/* Top Right Floating Glass Card (ISO Lab) */}
            <div className="floating-glass-pill pill-lab">
              <div className="pill-avatar-icon">🔬</div>
              <div className="pill-info">
                <h5>ISO Certified Lab</h5>
                <p>Automated testing <span className="green-pulse-dot"></span></p>
              </div>
            </div>

            {/* Neon Accent Elements Matching Image */}
            <div className="neon-spark-star">✦</div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosection;