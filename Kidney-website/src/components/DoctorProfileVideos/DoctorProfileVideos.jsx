import React, { useState } from 'react';
import './DoctorProfileVideos.css';

const DoctorCyberHub = () => {
  // Dr. Shashi Kumar ke informative segments data with full YouTube link capabilities
  const profileSegments = [
    {
      id: "intro",
      tabTitle: "01. MEDICAL LEGACY",
      title: "Introduction & Medical Philosophy",
      subtitle: "The Vision of Dr. Shashi Kumar",
      desc: "An overview of Dr. Shashi Kumar's clinical background, his patient-centric healthcare philosophy, and his dedication to introducing advanced clinical standards.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarProfile", // Replace with actual youtube video link
      stat: "15+ Yrs Experience"
    },
    {
      id: "kidney",
      tabTitle: "02. ADVANCED NEPHROLOGY",
      title: "Comprehensive Kidney & Dialysis Care",
      subtitle: "Critical Care Specialization",
      desc: "Deep-dive into advanced therapies for chronic kidney diseases (CKD), modern automated dialysis setups, and personalized treatment frameworks.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarKidneyCare", // Replace with actual youtube video link
      stat: "10k+ Happy Patients"
    },
    {
      id: "lab",
      tabTitle: "03. PATHOLOGY & LABS",
      title: "Precision Diagnostic Infrastructure",
      subtitle: "High-Tech Diagnostics",
      desc: "Exploring our fully automated testing systems that ensure zero manual errors, super-fast turn-around time, and accurate healthcare reporting.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-with-a-microscope-in-a-laboratory-40552-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarLabTour", // Replace with actual youtube video link
      stat: "99.9% Lab Accuracy"
    },
    {
      id: "facility",
      tabTitle: "04. CLINICAL INFRA",
      title: "Premium Patient Ward & Recovery Wards",
      subtitle: "World Class Architecture",
      desc: "A presentation of our high-hygiene recovery beds, centralized oxygen supply systems, and fully responsive nursing units optimized for rapid recovery.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hospital-ward-with-empty-beds-and-medical-equipment-40548-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarClinicTour", // Replace with actual youtube video link
      stat: "24/7 ICU Support"
    }
  ];

  const [activeSegment, setActiveSegment] = useState(profileSegments[0]);

  return (
    <div className="cyber-showcase-wrapper">
      
      {/* Background Matrix/Tech Grid Lines */}
      <div className="cyber-mesh-grid"></div>

      {/* Main Responsive Header */}
      <div className="cyber-profile-header">
        <div className="cyber-status-badge">
          <span className="live-pulse-dot"></span> INFORMATION HUB
        </div>
        <h1 className="cyber-main-title">DR. SHASHI KUMAR</h1>
        <p className="cyber-main-subtitle">Interactive Presentation of Medical Expertise, Facilities & Care Standards</p>
      </div>

      {/* Core Split Flexbox/Grid Layout */}
      <div className="cyber-grid-layout">
        
        {/* LEFT COMPONENT: Navigational Sidebar Tabs */}
        <div className="cyber-sidebar-tabs">
          {profileSegments.map((segment) => {
            const isSelected = activeSegment.id === segment.id;
            return (
              <div 
                key={segment.id}
                className={`cyber-tab-row ${isSelected ? 'cyber-tab-active' : ''}`}
                onMouseEnter={() => setActiveSegment(segment)}
                onClick={() => setActiveSegment(segment)}
              >
                <div className="glowing-border-indicator"></div>
                <div className="cyber-tab-body">
                  <span className="cyber-tab-index">{segment.tabTitle}</span>
                  <h4 className="cyber-tab-heading">{segment.title.split('&')[0]}</h4>
                </div>
                <span className="cyber-tab-arrow">➔</span>
              </div>
            );
          })}
        </div>

        {/* RIGHT COMPONENT: Cinema Player Viewport & Details Panel */}
        <div className="cyber-display-panel">
          
          {/* Video Player Box */}
          <div className="cyber-cinema-box">
            <video 
              key={activeSegment.id}
              src={activeSegment.url} 
              className="cyber-native-player"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            
            {/* Stat Tag Overlaid on Video */}
            <div className="cyber-floating-stat">
              <span>{activeSegment.stat}</span>
            </div>

            <div className="cyber-hd-tag">PREVIEW MODE</div>
          </div>

          {/* Descriptive Information Card below video */}
          <div className="cyber-info-card">
            <div className="info-card-header">
              <span className="info-card-tag">{activeSegment.subtitle}</span>
              <span className="verified-badge-seal">✓ OFFICIAL DESK</span>
            </div>
            
            <h2 className="info-card-main-title">{activeSegment.title}</h2>
            <p className="info-card-description">{activeSegment.desc}</p>
            
            {/* Footer with custom YouTube Action Redirection Button */}
            <div className="info-card-footer">
              <div className="footer-notice-text">
                <strong>Full Length Video Available:</strong> Watch step-by-step case studies and detailed video walkthroughs on our official channel.
              </div>
              
              {/* YouTube Redirect Link Button */}
              <a 
                href={activeSegment.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="youtube-neon-btn"
              >
                <svg className="yt-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Full Video on YouTube
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default DoctorCyberHub;