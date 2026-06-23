import React from 'react';
import './About.css';
import kidney from "../../assets/image/aboutkideny.png";

const About = ({ onBookClick }) => {
  return (
    <section className="cinematic-about-section">
      {/* Cinematic Glowing Background Aura Grid */}
  

      <div className="cine-wrapper">
        
        {/* LEFT PANEL: The Showstopper 3D Levitating Bio-Pod */}
        <div className="cine-visual-container">
          <div className="cine-canvas-stage">
            
            {/* The Floating Medical Hologram Pod */}
            <div className="cine-hologram-pod">
              <div className="cine-scanner-beam"></div>
              <div className="pod-internal-core"></div>
              <img src={kidney} alt="Kidney Bio Architecture" className="cine-main-kidney-img" />
              
              {/* Audio / Pulse Wave Grid inside Pod */}
              <div className="pod-wave-grid">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            {/* Float Badge 1: Realtime Stats Tracker */}
            <div className="cine-glass-card card-top-right">
              <div className="cine-badge-glow"></div>
              <div className="cine-card-header">
                <span className="pulse-dot-red"></span>
                <p className="cine-label-gold">DIRECTOR & DEPT. HEAD</p>
              </div>
              <div className="cine-live-counter">
                <h3>11+ <span className="cine-mini-unit">Years of Trust</span></h3>
              </div>
              <span className="cine-hospital-tag">🏢 Paras Health, Patna</span>
            </div>

            {/* Float Badge 2: Legacy Education Badge */}
            <div className="cine-glass-card card-bottom-left">
              <div className="cine-badge-glow"></div>
              <div className="cine-alumni-row">
                <div className="cine-gold-crest">SG</div>
                <div className="cine-alumni-meta">
                  <h5>SGPGIMS Lucknow Alumnus</h5>
                  <h4>Dr. Shashi Kumar</h4>
                  <p className="cine-sub-txt">Top Tier Renowned Nephrologist</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: The High-Converting Masterclass Content */}
        <div className="cine-content-container">
          <div className="cine-super-badge">
            <span className="cine-sparkle-icon">✨</span> Bihar's Leading Kidney Care Destination
          </div>
          
          <h2 className="cine-main-headline">
            Restoring Health. <br />
            <span className="text-gradient-cyan-blue">Renewing Hope.</span>
          </h2>
          
          <blockquote className="cine-luxury-quote">
            "Every patient deserves world-class renal care. We combine advanced global science with absolute precision to give your life a fresh start."
          </blockquote>
          
          <p className="cine-narrative">
            Dr. Shashi Kumar is a distinguished pioneer in Nephrology, widely recognized for his unmatched clinical expertise and breakthrough treatments. As the <strong>Director & Head of Department at Paras Health, Patna</strong>, he has engineered state-of-the-art dialysis units and spearheaded highly successful kidney transplant systems, saving thousands of critical renal patients across Eastern India.
          </p>

          {/* THE 4-COLUMN ILLUMINATED MATRIX GRID */}
          <div className="cine-stats-matrix">
            
            <div className="cine-stat-item border-cyan">
              <div className="item-bg-glow"></div>
              <span className="stat-emoji">🩺</span>
              <h2>11+</h2>
              <p>Years Clinical Leadership</p>
            </div>

            <div className="cine-stat-item border-purple">
              <div className="item-bg-glow"></div>
              <span className="stat-emoji">👥</span>
              <h2>10K+</h2>
              <p>Satisfied Healed Patients</p>
            </div>

            <div className="cine-stat-item border-emerald">
              <div className="item-bg-glow"></div>
              <span className="stat-emoji">⚡</span>
              <h2>5K+</h2>
              <p>Advanced Dialysis Sessions</p>
            </div>

            <div className="cine-stat-item border-gold">
              <div className="item-bg-glow"></div>
              <span className="stat-emoji">🫁</span>
              <h2>500+</h2>
              <p>Successful Transplants</p>
            </div>

          </div>

        </div>
      </div>

      {/* LOWER LEVEL: Advanced Medical Dashboard Blocks */}
      <div className="cine-dashboard-wrapper">
        
        {/* ROW 1: 3 Column Interactive Panels */}
        <div className="cine-layout-3col">
          
          {/* Panel 1 */}
          <div className="cine-dashboard-block glow-accent-cyan">
            <div className="block-header">
              <div className="block-icon accent-cyan">🎓</div>
              <h3>ACADEMIC PEDIGREE</h3>
            </div>
            <ul className="cine-list list-type-star">
              <li><strong>MBBS</strong> — Premier Medical Institution</li>
              <li><strong>MD (Internal Medicine)</strong> — Clinical Excellence</li>
              <li><strong>DM (Nephrology)</strong> — SGPGIMS, Lucknow</li>
              <li>Specialized Fellowship in Interventional Nephrology</li>
              <li>Advanced Expert Training in Peritoneal Dialysis (CAPD)</li>
            </ul>
          </div>

          {/* Panel 2 */}
          <div className="cine-dashboard-block glow-accent-blue">
            <div className="block-header">
              <div className="block-icon accent-blue">🧬</div>
              <h3>CLINICAL CORE SPECIALTIES</h3>
            </div>
            <ul className="cine-list list-type-check">
              <li>Chronic Kidney Disease (CKD) Management</li>
              <li>End-to-End Kidney Transplant Protocols</li>
              <li>Acute Kidney Injury (AKI) Intensive Care</li>
              <li>Diabetic Nephrology & Hypertension Care</li>
              <li>Precision Renal Biopsy & Critical Care Nephrology</li>
              <li>Advanced Maintenance Hemodialysis Networks</li>
            </ul>
          </div>

          {/* Panel 3 */}
          <div className="cine-dashboard-block glow-accent-gold">
            <div className="block-header">
              <div className="block-icon accent-gold">🏆</div>
              <h3>NATIONAL LAURELS</h3>
            </div>
            <div className="cine-awards-flex">
              <ul className="cine-list list-type-medal">
                <li>Excellence in Kidney Care National Award</li>
                <li>Distinguished Service Award in Nephrology</li>
                <li>Keynote Speaker at National Renal Conclaves</li>
                <li>Pioneer in Advanced Dialysis Ecosystems</li>
              </ul>
              <div className="cine-animated-trophy">🏆</div>
            </div>
          </div>

        </div>

        {/* ROW 2: 2 Column Wide Institutional Panels */}
        <div className="cine-layout-2col">
          
          {/* Panel 4 */}
          <div className="cine-dashboard-block">
            <div className="block-header">
              <div className="block-icon accent-gray">🤝</div>
              <h3>ELITE INSTITUTIONAL AFFILIATIONS</h3>
            </div>
            <div className="cine-logos-grid">
              <div className="cine-logo-node">
                <div className="node-circle">ISN</div>
                <p>Indian Society of Nephrology</p>
              </div>
              <div className="cine-logo-node">
                <div className="node-circle">IMA</div>
                <p>Indian Medical Association</p>
              </div>
              <div className="cine-logo-node">
                <div className="node-circle">API</div>
                <p>Association of Physicians of India</p>
              </div>
              <div className="cine-logo-node">
                <div className="node-circle">INT</div>
                <p>International Society of Nephrology</p>
              </div>
            </div>
          </div>

          {/* Panel 5 */}
          <div className="cine-dashboard-block glow-accent-purple">
            <div className="block-header">
              <div className="block-icon accent-purple">⭐</div>
              <h3>MAJOR CAREER MILESTONES</h3>
            </div>
            <ul className="cine-list list-type-spark">
              <li>Successfully managed thousands of complex dialysis cycles</li>
              <li>Pioneered low-cost high-efficiency renal frameworks</li>
              <li>Organized mega-awareness programs for rural kidney health</li>
              <li>Active investigator in global nephrology clinical trials</li>
            </ul>
          </div>

        </div>

        {/* THE HYPNOTIC CALL TO ACTION BUTTON */}
        <div className="cine-cta-container">
          <button className="cine-btn-luxury" onClick={onBookClick}>
            <span className="cine-btn-shimmer"></span>
            <span className="cine-btn-text">REQUEST A PRIORITY APPOINTMENT WITH DR. SHASHI KUMAR</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;