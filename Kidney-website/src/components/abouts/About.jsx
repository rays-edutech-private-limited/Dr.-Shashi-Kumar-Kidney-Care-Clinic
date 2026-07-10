import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './About.css';
import kidneyImg from "../../assets/image/about-img.png"; 
import doctor from "../../assets/image/heroImage.png"; 
import ScrollReveal from "../../ScrollReveal";

const About = ({ onBookClick }) => {
  ScrollReveal('.reveal-on-scroll', 0.15);

  // नीचे से ऊपर आने वाले एलिमेंट्स के लिए कॉन्फ़िगरेशन
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // ग्रिड के अंदर छोटे ब्लॉक्स एक के बाद एक (Stagger) आने के लिए
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="cinematic-about-section reveal-on-scroll">
      <div className="cine-wrapper">
        
        {/* --- LEFT PANEL: IMAGE 1 ARCHITECTURE --- */}
        <div className="cine-visual-container">
          <motion.div 
            className="cine-canvas-stage"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }}
          >
            
            {/* The main glowing capsule frame */}
            <div className="cine-hologram-pod">
              <div className="cine-scanner-beam"></div>
              <div className="pod-internal-core"></div>
              <img src={kidneyImg} alt="Kidney Blueprint" className="cine-main-kidney-img" />
              
              <div className="pod-wave-grid">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            {/* Floating Badge: Top Right */}
            <motion.div 
              className="cine-glass-card card-top-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="card-badge-header">
                <span className="badge-star-icon"><i className="fas fa-star"></i></span>
                <span className="badge-title-text">DIRECTOR & DEPT. HEAD</span>
              </div>
              <div className="card-counter-value">
                11+ <span className="counter-label-sub">Years of Trust</span>
              </div>
              <div className="card-location-pill">
                <span className="loc-icon">📍</span> Paras Health, Patna
              </div>
            </motion.div>

            {/* Doctor Profile Card Frame: Bottom Left */}
            <motion.div 
              className="cine-doctor-profile-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="doc-avatar-wrapper">
                <img className='doc-avatar-fallback' src={doctor} alt="Dr. Shashi Kumar" />
              </div>
              <div className="doc-profile-details">
                <h4>Dr. Shashi Kumar</h4>
                <h5>Director & Head, Nephrology</h5>
                <span className="doc-status-tag">🛡️ Top Tier Nephrologist</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* --- RIGHT PANEL: TYPOGRAPHY & STATS --- */}
        <div className="cine-content-container">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div className="cine-super-badge" variants={fadeInUp}>
              <span className="badge-star-icon"><i className="fas fa-star"></i></span> BIHAR'S LEADING KIDNEY CARE DESTINATION
            </motion.div>
            
            <motion.h2 className="cine-main-headline" variants={fadeInUp}>
              Protecting Kidneys<br />
              <span className="text-gradient-cyan-blue">Changing Lives.</span>
            </motion.h2>
            
            <motion.blockquote className="cine-luxury-quote" variants={fadeInUp}>
              <span className="quote-mark">“</span>
              "Every patient deserves world-class renal care. We combine advanced global science with absolute precision to give your life a fresh start:- Dr. Shashi Kumar"
            </motion.blockquote>
            
            <motion.p className="cine-narrative" variants={fadeInUp}>
              Dr. Shashi Kumar is a distinguished pioneer in Nephrology, widely recognized for his unmatched clinical expertise and breakthrough treatments. As the <strong>Director & Head of Department at Paras Health, Patna</strong>, he has engineered state-of-the-art dialysis units and spearheaded highly successful kidney transplant systems, saving thousands of critical renal patients across Eastern India.
            </motion.p>
          </motion.div>

          {/* 4 Colored Pillar Stats Grid */}
          <motion.div 
            className="cine-stats-matrix"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div className="cine-stat-item border-cyan" variants={fadeInUp}>
              <div className="stat-icon-circle cyan-bg"><i className="fa-solid fa-stethoscope"></i></div>
              <div className="stat-num cyan-text">11+</div>
              <div className="stat-p">Years Clinical Leadership</div>
              <div className="stat-bottom-line bg-cyan"></div>
            </motion.div>

            <motion.div className="cine-stat-item border-purple" variants={fadeInUp}>
              <div className="stat-icon-circle purple-bg"><i className="fa-solid fa-users"></i></div>
              <div className="stat-num purple-text">10K+</div>
              <div className="stat-p">Satisfied Healed Patients</div>
              <div className="stat-bottom-line bg-purple"></div>
            </motion.div>

            <motion.div className="cine-stat-item border-orange" variants={fadeInUp}>
              <div className="stat-icon-circle orange-bg"><i className="fa-solid fa-bolt"></i></div>
              <div className="stat-num orange-text">5K+</div>
              <div className="stat-p">Advanced Dialysis Sessions</div>
              <div className="stat-bottom-line bg-orange"></div>
            </motion.div>

            <motion.div className="cine-stat-item border-red" variants={fadeInUp}>
              <div className="stat-icon-circle red-bg"><i className="fa-solid fa-shield-heart"></i></div>
              <div className="stat-num red-text">500+</div>
              <div className="stat-p">Successful Transplants</div>
              <div className="stat-bottom-line bg-red"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* --- Professional Dashboard Grid --- */}
      <div className="cine-dashboard-wrapper">
        
        {/* ROW 1: 3 Segmented Presentation Blocks */}
        <motion.div 
          className="cine-layout-3col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Block 1: Academic Pedigree */}
          <motion.div className="cine-dashboard-block bg-image-about1" variants={fadeInUp}>
            <div className="block-header-row">
              <div className="header-icon-box b-blue"><i className="fas fa-user-graduate"></i></div>
              <h3>ACADEMIC EXCELLENCE & QUALIFICATIONS</h3>
            </div>
            <ul className="cine-list list-type-blue-diamond">
              <li><strong>MBBS</strong> — Premier Medical Institution</li>
              <li><strong>MD (Internal Medicine)</strong> — Clinical Excellence</li>
              <li><strong>DM (Nephrology)</strong> — SGPGIMS, Lucknow</li>
              <li>Specialized Fellowship in Interventional Nephrology</li>
              <li>Advanced Expert Training in Peritoneal Dialysis (CAPD)</li>
            </ul>
          </motion.div>

          {/* Block 2: Clinical Core Specialties */}
          <motion.div className="cine-dashboard-block bg-image-about2" variants={fadeInUp}>
            <div className="block-header-row">
              <div className="header-icon-box b-green"><i className="fas fa-stethoscope"></i></div>
              <h3>ADVANCED KIDNEY CARE SPECIALTIES</h3>
            </div>
            <ul className="cine-list list-type-green-check">
              <li>Chronic Kidney Disease (CKD) Management</li>
              <li>End-to-End Kidney Transplant Protocols</li>
              <li>Acute Kidney Injury (AKI) Intensive Care</li>
              <li>Diabetic Nephrology & Hypertension Care</li>
              <li>Precision Renal Biopsy & Critical Care Nephrology</li>
              <li>Advanced Maintenance Hemodialysis Networks</li>
            </ul>
          </motion.div>

          {/* Block 3: National Laurels */}
          <motion.div className="cine-dashboard-block bg-image-about3" variants={fadeInUp}>
            <div className="block-header-row">
              <div className="header-icon-box b-gold"><i className="fas fa-trophy"></i></div>
              <h3>CLINICAL EXCELLENCE & ACHIEVEMENTS</h3>
            </div>
            <div className="laurels-content-wrapper">
              <ul className="cine-list list-type-gold-star">
                <li>Excellence in Kidney Care National Award</li>
                <li>Distinguished Service Award in Nephrology</li>
                <li>Keynote Speaker at National Renal Conclaves</li>
                <li>Pioneer in Advanced Dialysis Ecosystems</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* ROW 2: Double Grid Dynamic Blocks */}
        <motion.div 
          className="cine-layout-2col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Block 4: Elite Institutional Affiliations */}
          <motion.div className="cine-dashboard-block bg-image-about4" variants={fadeInUp}>
            <div className="block-header-row">
              <div className="header-icon-box b-purple"><i className="fas fa-university"></i></div>
              <h3>PROFESSIONAL MEMBERSHIPS & AFFILIATIONS</h3>
            </div>
            <div className="cine-logos-grid">
              <div className="logo-node node-isn">
                <span className="node-initial">ISN</span>
                <p>Indian Society of Nephrology</p>
              </div>
              <div className="logo-node node-ima">
                <span className="node-initial">IMA</span>
                <p>Indian Medical Association</p>
              </div>
              <div className="logo-node node-api">
                <span className="node-initial">API</span>
                <p>Association of Physicians of India</p>
              </div>
              <div className="logo-node node-int">
                <span className="node-initial">INT</span>
                <p>International Society of Nephrology</p>
              </div>
            </div>
          </motion.div>

          {/* Block 5: Major Career Milestones */}
          <motion.div className="cine-dashboard-block bg-image-about5" variants={fadeInUp}>
            <div className="block-header-row">
              <div className="header-icon-box b-teal"><i className="fas fa-mountain"></i></div>
              <h3>CLINICAL LEADERSHIP & CAREER MILESTONES</h3>
            </div>
            
            <div className="timeline-node-container">
              <div className="timeline-vertical-line"></div>
              
              <div className="timeline-row-node">
                <div className="node-indicator-circle"><i className="fas fa-award i1"></i></div>
                <p>Successfully managed thousands of complex dialysis cycles</p>
              </div>
              <div className="timeline-row-node">
                <div className="node-indicator-circle"><i className="fas fa-flask i2"></i></div>
                <p>Pioneered low-cost high-efficiency renal frameworks</p>
              </div>
              <div className="timeline-row-node">
                <div className="node-indicator-circle"><i className="fas fa-bullhorn i3"></i></div>
                <p>Organized mega-awareness programs for rural kidney health</p>
              </div>
              <div className="timeline-row-node">
                <div className="node-indicator-circle"><i className="fas fa-microscope i4"></i></div>
                <p>Active investigator in global nephrology clinical trials</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- FOOTER ACTION BAR --- */}
        <motion.div 
          className="cine-cta-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="cine-btn-luxury" onClick={onBookClick}>
            <div className="action-left-icon">
              <span><i className="fas fa-book-open"></i></span>
            </div>
            <span className="action-center-text">REQUEST A PRIORITY APPOINTMENT WITH DR. SHASHI KUMAR</span>
            <div className="action-right-icon-arrow">
              <span>➔</span>
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;