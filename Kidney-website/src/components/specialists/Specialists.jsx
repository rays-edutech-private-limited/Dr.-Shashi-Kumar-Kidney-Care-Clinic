import React, { useState, useEffect, useRef } from 'react';
import './Specialists.css';

const doctorsData = [
  {
    id: 1,
    badge: "TEAM LEADERS",
    name: "Dr. Amit Patel, MD",
    title: "Renal Nutrition Lead",
    hindiTitle: "नेफ्रोलॉजी प्रमुख",
    desc: "Specialist in Renal Dietetics and high-precision metabolic chart mapping for kidney wellness.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    rating: "4.9/5 Rating",
    experience: "12+ Yrs Exp",
    status: "Available"
  },
  {
    id: 2,
    badge: "HEAD OF NEPHROLOGY",
    name: "Dr. Meera Sharma, MBBS, DNB",
    title: "Chronic Kidney Disease Expert",
    hindiTitle: "मुख्य चिकित्सा अधिकारी",
    desc: "Over 15+ years of premium clinical excellence leading advanced renal transplantations and critical care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    rating: "5.0/5 Star",
    experience: "15+ Yrs Exp",
    status: "Active Now"
  },
  {
    id: 3,
    badge: "KIDNEY CARE FOCUS",
    name: "Dr. Rahul Singh, MBBS",
    title: "Dialysis & Interventionist",
    hindiTitle: "नेफ्रोलॉजी प्रमुख",
    desc: "Expert in complex vascular access management, fistulas, and premium high-flux dialysis protocols.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    rating: "4.8/5 Rating",
    experience: "10+ Yrs Exp",
    status: "Available"
  }
];

 function Specialists() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false); // Hover state tracking
  const autoPlayRef = useRef(null);

  // Auto-Slide core mechanism
  const startAutoPlay = () => {
    stopAutoPlay();
    if (isPaused) return; // Agar pause hai toh naya timer start nahi hoga

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % doctorsData.length);
    }, 5000); // 5 Seconds Interval
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Jab bhi isPaused ya currentIndex change ho, timer re-evaluate hoga
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, isPaused]);

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctorsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctorsData.length) % doctorsData.length);
  };

  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <div className="ultra-medical-container">
      {/* Premium Cinematic Background Effects */}
      <div className="cyber-grid-overlay"></div>
      <div className="glowing-plasma-ball-1"></div>
      <div className="glowing-plasma-ball-2"></div>

      {/* Main Header Text */}
      <div className="cinematic-header">
        <h1 className="gold-glowing-text">Our Distinguished Kidney Health Team</h1>
        <div className="cyber-sub-bar">
          <span className="neon-cyan-text">COMMUNITY-LED RENAL CARE</span>
          <span className="gold-dot">•</span>
          <span className="neon-gold-text">TRUSTED IN PATNA</span>
        </div>
      </div>

      {/* 3D Slidable Card Deck */}
      <div className="deck-slider-viewport">
        <div className="deck-cards-wrapper">
          {doctorsData.map((doc, index) => {
            let positionClass = "slot-hidden";
            if (index === currentIndex) positionClass = "slot-active-center";
            else if (index === (currentIndex - 1 + doctorsData.length) % doctorsData.length) positionClass = "slot-left-wing";
            else if (index === (currentIndex + 1) % doctorsData.length) positionClass = "slot-right-wing";

            return (
              <div 
                key={doc.id} 
                className={`biomedical-card ${positionClass}`}
                onClick={() => index !== currentIndex && handleDotClick(index)}
                // 🔥 HOVER SE AUTO-SLIDE PAUSE KARNE KE EVENTS
                onMouseEnter={() => index === currentIndex && setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                
                {/* Neon Kidney Artery Graphics for Active Center Card */}
                {index === currentIndex && (
                  <div className="active-card-glowing-mesh">
                    <div className="artery-left"></div>
                    <div className="artery-right"></div>
                  </div>
                )}

                {/* Card Top Pill Badge */}
                <div className="card-top-row">
                  <span className="badge-pill-cyan">{doc.badge}</span>
                  <div className="live-pulse-container">
                    <span className="live-pulse-core"></span>
                    <span className="live-pulse-wave"></span>
                  </div>
                </div>

                {/* Cyber Frame Portrait */}
                <div className="portrait-hex-frame">
                  <img src={doc.image} alt={doc.name} className="doctor-img" />
                  <div className="laser-scanner-beam"></div>
                </div>

                {/* Doctor Text Profile */}
                <div className="doctor-info-block">
                  <h3 className="doctor-name-text">{doc.name}</h3>
                  <p className="doctor-title-text">{doc.title}</p>
                  <p className="doctor-hindi-text">{doc.hindiTitle}</p>
                  <div className="animated-neon-divider"></div>
                  <p className="doctor-description">{doc.desc}</p>
                </div>

                {/* Hidden Stats Menu - Pops up automatically on Center Active Card */}
                <div className="revealed-dashboard-metrics">
                  <div className="metrics-grid-layout">
                    <div className="metric-cell">
                      <span className="cell-icon">⭐</span>
                      <span className="cell-val">{doc.rating}</span>
                    </div>
                    <div className="metric-cell center-gold-cell">
                      <span className="cell-icon">🩺</span>
                      <span className="cell-val">{doc.experience}</span>
                    </div>
                    <div className="metric-cell">
                      <span className="cell-icon">🛡️</span>
                      <span className="cell-val">{doc.status}</span>
                    </div>
                  </div>
                  <button className="premium-gold-pill-button" onClick={(e) => { e.stopPropagation(); }}>
                    View Profile <span className="btn-arrow-icon">→</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Control Panel Footer */}
      <div className="slider-control-dashboard">
        {/* Navigation Dots Indicator */}
        <div className="modern-dots-row">
          {doctorsData.map((_, idx) => (
            <span 
              key={idx} 
              className={`indicator-dot-node ${idx === currentIndex ? 'node-active' : ''}`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>

        {/* 3D Orb Metallic Navigation Buttons */}
        <div className="orb-buttons-group">
          <span className="orb-label">PREVIOUS</span>
          <button className="orb-sphere orb-gold-style" onClick={prevSlide}>‹</button>
          <button className="orb-sphere orb-cyan-style" onClick={nextSlide}>›</button>
          <span className="orb-label">NEXT</span>
        </div>
      </div>
    </div>
  );
}

export default Specialists;