import React, { useState } from 'react';
import './DoctorProfileVideos.css';

const DoctorCyberHub = () => {
  const profileSegments = [
    {
      id: "intro",
      tabTitle: "01. LEGACY",
      title: "Medical Legacy & Philosophy",
      subtitle: "The Vision of Dr. Shashi Kumar",
      desc: "An overview of Dr. Shashi Kumar's clinical background, his patient-centric healthcare philosophy, and his dedication to introducing advanced clinical standards.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarProfile",
      stat: "15+ Yrs Experience"
    },
    {
      id: "kidney",
      tabTitle: "02. NEPHROLOGY",
      title: "Advanced Kidney & Dialysis Care",
      subtitle: "Critical Care Specialization",
      desc: "Deep-dive into advanced therapies for chronic kidney diseases (CKD), modern automated dialysis setups, and personalized treatment frameworks.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarKidneyCare",
      stat: "10k+ Happy Patients"
    },
    {
      id: "lab",
      tabTitle: "03. DIAGNOSTICS",
      title: "Precision Diagnostic Labs",
      subtitle: "High-Tech Diagnostics",
      desc: "Exploring our fully automated testing systems that ensure zero manual errors, super-fast turn-around time, and accurate healthcare reporting.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-with-a-microscope-in-a-laboratory-40552-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarLabTour",
      stat: "99.9% Lab Accuracy"
    },
    {
      id: "facility",
      tabTitle: "04. INFRASTRUCTURE",
      title: "Premium Patient & Recovery Wards",
      subtitle: "World Class Architecture",
      desc: "A presentation of our high-hygiene recovery beds, centralized oxygen supply systems, and fully responsive nursing units optimized for rapid recovery.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hospital-ward-with-empty-beds-and-medical-equipment-40548-large.mp4",
      youtubeUrl: "https://youtube.com/c/DrShashiKumarClinicTour",
      stat: "24/7 ICU Support"
    }
  ];

  const [activeSegment, setActiveSegment] = useState(profileSegments[0]);

  return (
    <div className="kiosk-layout-container">
      {/* Background Soft Gradients */}
      <div className="kiosk-blur-bg-emerald"></div>
      <div className="kiosk-blur-bg-cyan"></div>

      <header className="kiosk-header-section">
        <div className="kiosk-badge">
          <span className="badge-pulse"></span>
          <span>EXCELLENCE CENTRE PRESENTATION</span>
        </div>
        <h1 className="kiosk-title">DR. SHASHI KUMAR</h1>
        <p className="kiosk-subtitle">Interactive clinical showcase of premium hospital infrastructure, data benchmarks, and core specialties.</p>
      </header>

      <main className="kiosk-workspace-grid">
        {/* Left Side: Large Immersive Cinema Viewport & Data Deck */}
        <div className="kiosk-left-panel">
          <div className="kiosk-cinema-viewport">
            <video
              key={activeSegment.id}
              src={activeSegment.url}
              className="kiosk-video-element"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
            <div className="kiosk-floating-stat-card">
              <span className="stat-subtext">Verified Benchmark</span>
              <span className="stat-main-text">{activeSegment.stat}</span>
            </div>
            <div className="kiosk-hd-indicator">LIVE HD BROADCAST</div>
          </div>

          <div className="kiosk-info-details">
            <div className="kiosk-meta-row">
              <span className="kiosk-meta-tag">{activeSegment.subtitle}</span>
              <span className="kiosk-official-seal">✓ OFFICIAL RECORDS</span>
            </div>
            <h2 className="kiosk-info-title">{activeSegment.title}</h2>
            <p className="kiosk-info-desc">{activeSegment.desc}</p>

            <div className="kiosk-footer-strip">
              <div className="kiosk-notice-block">
                <strong>Patient Information:</strong> You can play full visual walk-throughs or choose chapters instantly from the menu.
              </div>
              <a href={activeSegment.youtubeUrl} target="_blank" rel="noopener noreferrer" className="kiosk-action-btn">
                <svg className="kiosk-yt-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Watch Full Video</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Structural Segment Menu */}
        <div className="kiosk-right-menu">
          <div className="menu-header-hint">SELECT DEPT. CHANNELS</div>
          {profileSegments.map((segment) => {
            const isActive = activeSegment.id === segment.id;
            return (
              <div
                key={segment.id}
                className={`kiosk-menu-item ${isActive ? 'kiosk-menu-item-active' : ''}`}
                onMouseEnter={() => setActiveSegment(segment)}
                onClick={() => setActiveSegment(segment)}
              >
                <div className="kiosk-indicator-dot"></div>
                <div className="kiosk-menu-body">
                  <div className="kiosk-menu-top-meta">
                    <span className="kiosk-menu-index">{segment.tabTitle}</span>
                    <span className="kiosk-menu-inline-stat">{segment.stat.split(' ')[0]}</span>
                  </div>
                  <h3 className="kiosk-menu-title">{segment.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default DoctorCyberHub;