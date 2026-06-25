import React, { useState } from 'react';
import './DoctorProfileVideos.css';

const DoctorCyberHub = () => {
  const profileSegments = [
    {
      id: "intro",
      tabTitle: "01. LEGACY",
      title: "How to Protect Your Kidneys Naturally | Expert Tips",
      subtitle: "Expert Medical Insights",
      tagline: "Trusted by thousands",
      desc: "Evidence-based knowledge, advanced treatments, and patient-first care.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFMOQA4BcK6kVvtW7MoBvJy7ViGBJGvnEEUYr3ovR3vw&s=10",
      stat: "25+",
      statLabel: "Years Experience",
      iconType: "experience",
      duration: "8:45",
      views: "3.2K views",
      timeAgo: "3 days ago"
    },
    {
      id: "kidney",
      tabTitle: "02. NEPHROLOGY",
      title: "Dialysis Explained Step by Step | Patient Guide",
      subtitle: "Advanced Treatment",
      tagline: "Latest & safest care",
      desc: "Deep-dive into advanced therapies for chronic kidney diseases (CKD).",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjVr2V6frloB97B49uDzOD8VFeOcE-wcFhMa5XE4H4g&s=10",
      stat: "10K+",
      statLabel: "Patients Treated",
      iconType: "patients",
      duration: "10:12",
      views: "5.6K views",
      timeAgo: "1 week ago"
    },
    {
      id: "lab",
      tabTitle: "03. DIAGNOSTICS",
      title: "Inside Our Advanced ICU Infrastructure",
      subtitle: "Patient Education",
      tagline: "Empowering better health",
      desc: "Exploring our fully automated testing systems.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-with-a-microscope-in-a-laboratory-40552-large.mp4",
      youtubeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluZB_x1DzYAAD-uzoU3KRGcOt6FXDvp5Tt6E88YxXzw&s=10",
      stat: "1M+",
      statLabel: "YouTube Views",
      iconType: "views",
      duration: "9:18",
      views: "4.7K views",
      timeAgo: "2 weeks ago"
    },
    {
      id: "facility",
      tabTitle: "04. INFRASTRUCTURE",
      title: "Best Diet for Kidney Patients | Dr. Shashi Kumar",
      subtitle: "Compassionate Care",
      tagline: "Patients come first",
      desc: "A presentation of our high-hygiene recovery beds.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hospital-ward-with-empty-beds-and-medical-equipment-40548-large.mp4",
      youtubeUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdf5PXy2gargIR4HPrx63eE0ZfKsvvSJk00yr970q4A&s=10",
      stat: "15+",
      statLabel: "Awards & Honors",
      iconType: "awards",
      duration: "7:36",
      views: "6.1K views",
      timeAgo: "3 weeks ago"
    }
  ];

  const [activeSegment, setActiveSegment] = useState(profileSegments[0]);
  const [isPlaying, setIsPlaying] = useState(false); // Bada video play ho raha hai ya nahi

  // Icons Helper function
  const renderIcon = (type) => {
    switch (type) {
      case 'experience':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'patients':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'views':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
          </svg>
        );
      case 'awards':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className="dark-kiosk-wrapper">
      {/* Top Split Hero Section */}
      <div className="dark-kiosk-hero">
        
        {/* Left Side Info Panel */}
        <div className="dark-kiosk-hero-left">
          <h1 className="dark-kiosk-headline">
            EXPERT INSIGHTS.<br />
            BETTER KIDNEY CARE.<br />
            <span className="accent-teal">HEALTHIER LIVES.</span>
          </h1>
          <div className="accent-bar-teal"></div>
          
          <p className="dark-kiosk-description">
            Evidence-based knowledge, advanced treatments, and patient-first care.<br />
            Watch, Learn & Stay Healthy.
          </p>

          <div className="dark-kiosk-cta-row">
            <button onClick={() => setIsPlaying(true)} className="btn-solid-teal" style={{ border: 'none', cursor: 'pointer' }}>
              <svg className="icon-play" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Latest Video
            </button>
            <button className="btn-outline-dark">Subscribe</button>
          </div>

          {/* Quick Stats Grid Row */}
          <div className="dark-kiosk-stats-row">
            {profileSegments.map((seg) => (
              <div key={seg.id} className="stat-item-box">
                <div className="stat-icon-wrapper">
                  {renderIcon(seg.iconType)}
                </div>
                <div className="stat-text-group">
                  <span className="stat-number-text">{seg.stat}</span>
                  <span className="stat-label-text">{seg.statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Immersive Video Player Window (MAIN PLAYER) */}
        <div className="dark-kiosk-hero-right">
          <div className="cinema-viewport-card" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            
            {isPlaying ? (
              /* Play karne par asli video load hogi bina muted tag ke (Full Audio) */
              <video
                key={activeSegment.id}
                src={activeSegment.url}
                className="viewport-video-element"
                autoPlay
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              /* Default State: Pehle Thumbnail image aur play button dikhega */
              <div 
                className="video-thumbnail-placeholder" 
                onClick={() => setIsPlaying(true)} 
                style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
              >
                <img 
                  src={activeSegment.youtubeUrl} 
                  alt={activeSegment.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Custom Circular Play Button Overlay */}
                <div className="video-play-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.4)'
                }}>
                  <div className="play-circle" style={{
                    width: '70px', height: '70px', backgroundColor: '#008080',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', 
                    justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                  }}>
                    <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Middle Core Features Horizontal Ribbon Bar */}
      <div className="dark-kiosk-features-ribbon">
        {profileSegments.map((seg) => (
          <div key={seg.id} className="ribbon-feature-card">
            <div className="feature-icon-wrapper">
              {renderIcon(seg.iconType)}
            </div>
            <div className="feature-card-text">
              <h4 className="feature-main-title">{seg.subtitle}</h4>
              <p className="feature-sub-tagline">{seg.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Layout Gallery View Grid */}
      <div className="dark-kiosk-gallery-section">
        <div className="gallery-header-row">
          <h2 className="gallery-section-title">LATEST VIDEOS</h2>
          <span className="gallery-view-all-link">
            View all videos 
            <svg className="icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>

        <div className="gallery-thumbnails-grid">
          {profileSegments.map((seg) => {
            const isCardActive = activeSegment.id === seg.id;
            return (
              <div 
                key={seg.id} 
                className={`thumbnail-video-card ${isCardActive ? 'thumbnail-card-active' : ''}`}
                onClick={() => {
                  setActiveSegment(seg);
                  setIsPlaying(false); // Naya video select hote hi use pehle thumbnail state me lao
                }}
              >
                <div className="thumbnail-preview-frame" style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                  {/* Niche sirf static thumbnails photo dikhenge */}
                  <img 
                    src={seg.youtubeUrl} 
                    alt={seg.title} 
                    className="thumbnail-bg-video" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="thumbnail-duration-badge">{seg.duration}</div>
                </div>
                <div className="thumbnail-card-body">
                  <h3 className="thumbnail-video-title">{seg.title}</h3>
                  <div className="thumbnail-meta-row">
                    <span>{seg.views}</span>
                    <span className="meta-separator">•</span>
                    <span>{seg.timeAgo}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default DoctorCyberHub;