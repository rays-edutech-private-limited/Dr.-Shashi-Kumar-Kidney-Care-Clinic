import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './VideosTestimonials.css';
import ScrollReveal from "../../ScrollReveal"

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
  ScrollReveal('.reveal-on-scroll', 0.15)
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isPaused, setIsPaused] = useState(false); 
  const [activeVideo, setActiveVideo] = useState(null); 
  const autoPlayRef = useRef(null);

  // Drag and Swipe Refs
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

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

  // Drag / Swipe Handlers
  const handleDragStart = (clientX) => {
    dragStartX.current = clientX;
    isDragging.current = true;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging.current) return;
    const diff = clientX - dragStartX.current;

    if (diff > 50) {
      prevSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      nextSlide();
      isDragging.current = false;
    }
  };

  const handleDragEnd = () => {
    isDragging.current = false;
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

  // कॉमन एनीमेशन सेटिंग्स - once: false करने से यह स्क्रॉल डाउन और स्क्रॉल अप दोनों पर बार-बार ट्रिगर होगा
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.15 }, // 15% एलिमेंट दिखते ही एनीमेशन शुरू हो जाएगा
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="vt-prime-container reveal-on-scroll">
      <div className="vt-grid-overlay"></div>
      <div className="vt-plasma-orb-1"></div>

      {/* 1. हेडर एनीमेशन */}
      <motion.div className="vt-cinematic-header" {...fadeInUp}>
        <h1 className="vt-glowing-title">Stories of Recovery & Hope</h1>
        <div className="vt-cyber-subbar">
          <span className="vt-text-cyan">HEAR FROM OUR PATIENTS</span>
          <span className="vt-gold-dot">•</span>
          <span className="vt-text-gold">TRUE TRANSFORMATIONS</span>
        </div>
      </motion.div>

      {/* 2. मुख्य स्लाइडर और कार्ड्स एनीमेशन */}
      <motion.div 
        className="vt-slider-viewport"
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => { handleDragEnd(); setIsPaused(false); }}
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} // हल्का सा डिले ताकि हेडर के बाद लोड हो
      >
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
                  <img 
                    src={item.image} 
                    alt="Patient Testimonial" 
                    className="vt-thumbnail-img" 
                    draggable="false" 
                  />
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
      </motion.div>

      {/* 3. कंट्रोल्स और डॉट्स एनीमेशन */}
      <motion.div className="vt-control-dashboard" {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
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
      </motion.div>

      {/* 4. हॉरिजॉन्टल स्ट्रिप एनीमेशन */}
      <motion.div className="vt-trust-horizontal-strip" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="vt-strip-item"><span className="vt-strip-icon">🫁</span> Advanced Kidney Care</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🩺</span> Expert Medical Team</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🛡️</span> Personalized Treatment</div>
        <div className="vt-strip-item"><span className="vt-strip-icon">🤝</span> Compassionate Support</div>
      </motion.div>

      {/* 5. फुटर एक्शन पैनल (नियुक्ति बटन) एनीमेशन */}
      <motion.div className="vt-footer-action-panel" {...fadeInUp} transition={{ duration: 0.6, delay: 0.25 }}>
        <div className="vt-footer-badge-item">
          <div className="vt-f-icon">🛡️</div>
          <div className="vt-f-labels">
            <h4>Trusted by Thousands</h4>
            <p>Expert care you can rely on</p>
          </div>
        </div>

        <div className="vt-footer-badge-item">
          <div className="vt-f-icon">👥</div>
          <div className="vt-f-labels">
            <h4>Your Health, Our Priority</h4>
            <p>We are here for you, always</p>
          </div>
        </div>

        <button className="vt-main-cta-glow-pill" onClick={onBookClick}>
          <div className="vt-cta-calendar-box">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="vt-cta-text-bundle">
            <h4>BOOK APPOINTMENT</h4>
            <p>Consult Dr. Shashi Kumar</p>
          </div>
        </button>
      </motion.div>
          
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