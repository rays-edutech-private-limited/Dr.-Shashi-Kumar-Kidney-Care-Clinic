import React from 'react';
import './About.css';
import kidney from "../../assets/image/aboutkideny.png";

const About = ({onBookClick}) => {
  return (
    <section className="about-kidney-section-pro">
      {/* Background Cinematic Aura Lights */}
      <div className="pro-bg-blur light-cyan"></div>
      <div className="pro-bg-blur light-purple"></div>

      <div className="about-container-pro">
        
        {/* LEFT PANEL: 3D Capsule & Glowing Kidney Simulation */}
        <div className="about-visual-panel-pro">
          <div className="biomedical-art-frame">
            
            {/* The Main 3D Glossy Capsule Glass */}
            <div className="kidney-3d-capsule">
              <img src={kidney} alt="Kidney Bio Art" />
              <div className="radar-scanner-line"></div>
            </div>

            {/* Float Card 1: EXPERT EXPERIENCE */}
            <div className="pro-glass-card card-top">
              <div className="card-header-flex">
                <span className="live-badge-pulse">● CLINICAL EXPERIENCE</span>
              </div>
              <div className="mini-graph-simulation">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
                <div className="bar bar-5"></div>
                <div className="bar bar-6"></div>
                <div className="bar bar-7"></div>
              </div>
              <div className="stats-footer">
                <div>
                  <p className="graph-stats-value">11+ <span className="unit-txt">Years</span></p>
                  <span className="sub-status-txt">Senior Specialist</span>
                </div>
                <span className="vital-node-indicator">⚡ Paras Health</span>
              </div>
            </div>

            {/* Float Card 2: LEADERSHIP TRUST SEAL */}
            <div className="pro-glass-card card-bottom">
              <div className="icon-seal-gold">🏆 DEPT. HEAD & DIRECTOR</div>
              <div className="seal-flex-inner">
                <div className="gold-medal-svg">
                  <div className="inner-medal-star">✦</div>
                </div>
                <div className="seal-details">
                  <h5>SGPGIMS Alumni</h5>
                  <h4>Dr. Shashi Kumar</h4>
                  <p>Top Nephrologist</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL: Matches Screenshot 2026-06-20 173533.jpg Header & Snapshot */}
        <div className="about-content-panel-pro">
          <div className="premium-neon-pill">
            <span className="earth-icon">🌐</span> MEET DR. SHASHI KUMAR
          </div>
          
          <h2 className="about-section-title-pro">
            Director & Head, <span className="cyber-text-gradient-cyan">Nephrology</span>
          </h2>
          
          <p className="about-quote-pro">
            "Dedicated to transforming kidney care through advanced treatment, compassionate patient management, and clinical excellence."
          </p>

          <p className="about-description-pro">
            Dr. Shashi Kumar is one of Bihar's leading nephrologists with more than 11 years of clinical experience in diagnosing and managing complex kidney diseases. He currently serves as Director & Head of Department (Nephrology) at Paras Health, Patna. Throughout his career, he has successfully treated thousands of patients suffering from chronic kidney disease, kidney failure, and dialysis-related complications while contributing significantly to kidney transplant programs.
          </p>

          {/* PROFESSIONAL SNAPSHOT MATRIX */}
          <div className="snapshot-container">
            <h4 className="panel-sub-title">📊 PROFESSIONAL SNAPSHOT</h4>
            <div className="snapshot-grid">
              <div className="snapshot-card snapshot-cyan">
                <span className="snap-icon">🩺</span>
                <h3>11+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="snapshot-card snapshot-purple">
                <span className="snap-icon">👥</span>
                <h3>10,000+</h3>
                <p>Patients Treated</p>
              </div>
              <div className="snapshot-card snapshot-green">
                <span className="snap-icon">⚡</span>
                <h3>5,000+</h3>
                <p>Dialysis Cases</p>
              </div>
              <div className="snapshot-card snapshot-gold">
                <span className="snap-icon">🫁</span>
                <h3>500+</h3>
                <p>Kidney Transplants</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* LOWER DASHBOARD: Grid layout from Screenshot 2026-06-20 173533.jpg */}
      <div className="dashboard-container-pro">
        
        {/* ROW 1: Qualifications, Expertise, Awards */}
        <div className="dashboard-row-three-col">
          
          {/* Box 1: Qualifications */}
          <div className="dashboard-box Box-glow-cyan">
            <h4 className="box-title-flex"><span>🎓</span> QUALIFICATIONS</h4>
            <ul className="bullet-list-style">
              <li>MBBS</li>
              <li>MD (Internal Medicine)</li>
              <li>DM (Nephrology) – SGPGIMS, Lucknow</li>
              <li>Specialized Training in Interventional Nephrology</li>
              <li>Specialized Training in Peritoneal Dialysis (CAPD)</li>
            </ul>
          </div>

          {/* Box 2: Areas of Expertise */}
          <div className="dashboard-box Box-glow-blue">
            <h4 className="box-title-flex"><span>🧬</span> AREAS OF EXPERTISE</h4>
            <ul className="check-list-style">
              <li>Chronic Kidney Disease (CKD)</li>
              <li>Kidney Transplant Care</li>
              <li>Acute Kidney Injury (AKI)</li>
              <li>Diabetic Kidney Disease</li>
              <li>Kidney Failure Management</li>
              <li>Renal Biopsy</li>
              <li>Hemodialysis</li>
              <li>Critical Care Nephrology</li>
              <li>Peritoneal Dialysis (CAPD)</li>
            </ul>
          </div>

          {/* Box 3: Awards & Recognition */}
          <div className="dashboard-box Box-glow-gold">
            <h4 className="box-title-flex"><span>🏆</span> AWARDS & RECOGNITION</h4>
            <div className="awards-flex-layout">
              <ul className="award-list-style">
                <li>Excellence in Kidney Care Award</li>
                <li>Outstanding Nephrology Service Recognition</li>
                <li>Distinguished Speaker at National Nephrology Conferences</li>
                <li>Recognition for Advanced Dialysis & Transplant Management</li>
              </ul>
              <div className="gold-trophy-illustration">🏆</div>
            </div>
          </div>

        </div>

        {/* ROW 2: Memberships & Achievements */}
        <div className="dashboard-row-two-col">
          
          {/* Box 4: Professional Memberships */}
          <div className="dashboard-box">
            <h4 className="box-title-flex"><span>🤝</span> PROFESSIONAL MEMBERSHIPS</h4>
            <div className="memberships-grid">
              <div className="member-logo-card">
                <div className="logo-placeholder">ISN</div>
                <p>Indian Society of Nephrology (ISN)</p>
              </div>
              <div className="member-logo-card">
                <div className="logo-placeholder">IMA</div>
                <p>Indian Medical Association (IMA)</p>
              </div>
              <div className="member-logo-card">
                <div className="logo-placeholder">API</div>
                <p>Association of Physicians of India (API)</p>
              </div>
              <div className="member-logo-card">
                <div className="logo-placeholder">ISN</div>
                <p>International Society of Nephrology</p>
              </div>
            </div>
          </div>

          {/* Box 5: Professional Achievements */}
          <div className="dashboard-box Box-glow-purple">
            <h4 className="box-title-flex"><span>⭐</span> PROFESSIONAL ACHIEVEMENTS</h4>
            <div className="achievements-flex-layout">
              <ul className="check-list-style colored-check">
                <li>Successfully managed thousands of dialysis patients.</li>
                <li>Participated in numerous kidney transplant procedures.</li>
                <li>Expertise in advanced nephrology interventions.</li>
                <li>Active contributor to kidney disease awareness programs.</li>
                <li>Speaker and participant in national medical conferences.</li>
                <li>Mentor for young nephrology professionals.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Core CTA Action Button */}
        <div className="pro-btn-wrapper-center">
          <button className="btn-ultra-premium" onClick={onBookClick}>
            BOOK AN APPOINTMENT WITH DR. SHASHI KUMAR
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;