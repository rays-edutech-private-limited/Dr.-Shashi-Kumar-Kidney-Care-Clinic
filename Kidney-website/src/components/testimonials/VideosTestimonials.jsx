import React, { useState, useEffect, useRef } from 'react';
import './VideosTestimonials.css';

const testimonialsData = [
  {
    id: 1,
    caseCode: "PATIENT ID #4012",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  {
    id: 2,
    caseCode: "PATIENT ID #8921",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    caseCode: "PATIENT ID #5504",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    caseCode: "PATIENT ID #7712",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 5,
    caseCode: "PATIENT ID #3390",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

function VideosTestimonials({onBookClick}) {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isPaused, setIsPaused] = useState(false); 
  const [activeVideo, setActiveVideo] = useState(null); 
  const autoPlayRef = useRef(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    if (isPaused || activeVideo) return; 

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); 
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, isPaused, activeVideo]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
  };

  const openVideoPopup = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const closeVideoPopup = () => {
    setActiveVideo(null);
  };

  const getPositionClass = (index) => {
    const total = testimonialsData.length;
    
    if (index === currentIndex) return "vt-slot-active";
    
    if (index === (currentIndex - 1 + total) % total) return "vt-slot-left";
    if (index === (currentIndex - 2 + total) % total) return "vt-slot-far-left";
    
    if (index === (currentIndex + 1) % total) return "vt-slot-right";
    if (index === (currentIndex + 2) % total) return "vt-slot-far-right";
    
    return "vt-slot-hidden";
  };

  return (
    <div className="vt-prime-container">
      {/* Background patterns simplified for clean medical feel */}
      <div className="vt-grid-overlay"></div>
      <div className="vt-plasma-orb-1"></div>

      <div className="vt-cinematic-header">
        <h1 className="vt-glowing-title">Stories of Recovery & Hope</h1>
        <div className="vt-cyber-subbar">
          <span className="vt-text-cyan">HEAR FROM OUR PATIENTS</span>
          <span className="vt-gold-dot">•</span>
          <span className="vt-text-gold">TRUE TRANSFORMATIONS</span>
        </div>
      </div>

      <div className="vt-slider-viewport">
        <div className="vt-cards-wrapper">
          {testimonialsData.map((item, index) => {
            const positionClass = getPositionClass(index);
            const isActive = positionClass === "vt-slot-active";

            return (
              <div 
                key={item.id} 
                className={`vt-video-card ${positionClass}`}
                onClick={() => !isActive ? handleDotClick(index) : openVideoPopup(item.videoUrl)}
                onMouseEnter={() => isActive && setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                
                {isActive && (
                  <div className="vt-active-mesh-glow">
                    <div className="vt-mesh-left"></div>
                    <div className="vt-mesh-right"></div>
                  </div>
                )}

                <div className="vt-card-top-bar">
                  <span className="vt-badge-pill">{item.caseCode}</span>
                  <div className="vt-live-pulse">
                    <span className="vt-pulse-core"></span>
                    <span className="vt-pulse-wave"></span>
                  </div>
                </div>

                <div className="vt-video-frame">
                  <img src={item.image} alt="Patient Testimonial" className="vt-thumbnail-img" />
                  <div className="vt-laser-scanner"></div>
                  
                  <div className="vt-play-overlay">
                    <div className="vt-play-sphere">
                      <span className="vt-play-icon"></span>
                    </div>
                    <span className="vt-play-text">Watch Journey</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      <div className="vt-control-dashboard">
        <div className="vt-dots-row">
          {testimonialsData.map((_, idx) => (
            <span 
              key={idx} 
              className={`vt-dot-node ${idx === currentIndex ? 'vt-dot-active' : ''}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>

        <div className="vt-orb-group">
          <span className="vt-orb-label">PREV</span>
          <button className="vt-orb-btn vt-gold-gradient" onClick={prevSlide}>‹</button>
          <button className="vt-orb-btn vt-cyan-gradient" onClick={nextSlide}>›</button>
          <span className="vt-orb-label">NEXT</span>
        </div>
      </div>

      <div className="vt-trust-horizontal-strip">
        <div className="vt-strip-item"><span className="vt-strip-icon">🫁</span> Advanced Kidney Care</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🩺</span> Expert Medical Team</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🛡️</span> Personalized Treatment</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🤝</span> Compassionate Support</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">📈</span> Better Outcomes, Healthier Lives</div>
      </div>

      <div className="vt-footer-action-panel">
        <div className="vt-footer-badge-item">
          <div className="vt-f-icon">🛡️</div>
          <div className="vt-f-labels">
            <h4>Trusted by Thousands</h4>
            <p>Expert care you can rely on</p>
          </div>
        </div>

        <button className="vt-main-cta-glow-pill" onClick={onBookClick}>
          <div className="vt-cta-calendar-box">📅</div>
          <div className="vt-cta-text-bundle">
            <h4>BOOK APPOINTMENT</h4>
            <p>Consult Dr. Shashi Kumar</p>
          </div>
        </button>

        <div className="vt-footer-badge-item">
          <div className="vt-f-icon">👥</div>
          <div className="vt-f-labels">
            <h4>Your Health, Our Priority</h4>
            <p>We are here for you, always</p>
          </div>
        </div>
      </div>
         
      {activeVideo && (
        <div className="vt-popup-overlay" onClick={closeVideoPopup}>
          <div className="vt-popup-window" onClick={(e) => e.stopPropagation()}>
            <button className="vt-popup-close" onClick={closeVideoPopup}>&times;</button>
            <div className="vt-video-responsive">
              <iframe 
                src={`${activeVideo}?autoplay=1`}
                title="Patient Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideosTestimonials;