import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './Herosection.css';
import hero from "../../assets/image/heroImage.png";

const Herosection = ({ onBookClick }) => {
  
  // कॉमन व्यूपोर्ट कॉन्फ़िगरेशन - once: false से यह स्क्रॉल डाउन और अप दोनों पर काम करेगा
  const scrollViewportSettings = { once: false, amount: 0.15 };

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
          
          {/* 1. Premium Tag Animation */}
          <motion.div 
            className="premium-tag"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportSettings}
            transition={{ duration: 0.5 }}
          >
            <span className="sparkle-gold"><i className="fa-solid fa-user-doctor"></i></span> Center for Advanced Nephrology
          </motion.div>
          
          {/* 2. Main Title Animation */}
          <motion.h1 
            className="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportSettings}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert <span className="neon-teal-text">Kidney Care</span> <br />
            By <span style={{color:"#26dfc0"}}>Dr. Shashi Kumar</span>
          </motion.h1>
          
          {/* 3. Description Text Animation */}
          <motion.p 
            className="hero-description-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportSettings}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Director & HOD, Nephrology | 18+ Years of Experience <br />
            Kidney Disease, Dialysis & Transplant Specialist.
          </motion.p>

          {/* 4. Buttons Animation */}
          <motion.div 
            className="hero-cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportSettings}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button 
              className="btn-neon-glow" 
              onClick={onBookClick}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fa-solid fa-calendar-days"></i> Book Appointment
            </motion.button>
            <motion.button 
              className="btn-outline-glass"
              whileHover={{ scale: 1.03, x: 3 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Facility <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </motion.div>

          {/* 5. Bottom Stats Board Animation */}
          <motion.div 
            className="glass-stats-board"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportSettings}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
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
          </motion.div>
        </div>

        {/* Right Side: Fixed Doctor Image Frame & Vector Layout */}
        <div className="hero-right-panel">
          <div className="artwork-wrapper">
            
            {/* 6. Doctor Image Frame Animation */}
            <motion.div 
              className="biomedical-glow-shape"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={scrollViewportSettings}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src={hero} 
                alt="Dr. Shashi Kumar" 
                className="family-hero-img"
              />
            </motion.div>

            {/* 7. Floating Glass Pill Animation (Scroll Triggered + Continuous Float) */}
            <motion.div 
              className="floating-glass-pill pill-patients"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: [0, -8, 0] // स्क्रीन में आने के बाद लगातार हवा में तैरता रहेगा
              }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                x: { duration: 0.6, delay: 0.4 },
                opacity: { duration: 0.6, delay: 0.4 },
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="pill-avatar-icon-blue">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="pill-info">
                <h5>3L+</h5>
                <p>Happy Patients</p>
                <p className="sub-text-p">Trusted Care Since Years</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosection;