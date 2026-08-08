import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

// Import images
import g1 from "../../assets/image/g-1.jpeg";
import g2 from "../../assets/image/g-2.jpeg";
import g3 from "../../assets/image/g-3.jpeg";
import g4 from "../../assets/image/g-4.jpeg";
import g5 from "../../assets/image/g-5.jpeg";
import g6 from "../../assets/image/g-6.jpeg";
import g7 from "../../assets/image/g-7.jpeg";
import g8 from "../../assets/image/g-8.jpeg";
import g9 from "../../assets/image/g-9.jpeg";
import g10 from "../../assets/image/g-10.jpeg";
import g11 from "../../assets/image/g-11.jpeg";
import g12 from "../../assets/image/g-12.jpeg";
import g13 from "../../assets/image/g-13.jpeg";
import g14 from "../../assets/image/g-14.jpeg";
import g15 from "../../assets/image/g-15.jpeg";
import g16 from "../../assets/image/g-16.jpeg";
import g17 from "../../assets/image/g-17.jpeg";
import g18 from "../../assets/image/g-18.jpeg";
import g19 from "../../assets/image/g-19.jpeg";
import g20 from "../../assets/image/g-20.jpeg";
import g21 from "../../assets/image/g-21.jpeg";
import g22 from "../../assets/image/g-22.jpeg";
import g23 from "../../assets/image/g-23.jpeg";
import g24 from "../../assets/image/g-24.jpeg";
import g25 from "../../assets/image/g-25.jpeg";
import g26 from "../../assets/image/g-26.jpeg";
import g27 from "../../assets/image/g-27.jpeg";
import g28 from "../../assets/image/g-28.jpeg";
import g29 from "../../assets/image/g-29.jpeg";
import g30 from "../../assets/image/g-30.jpeg";
import g31 from "../../assets/image/g-31.jpeg";
import g32 from "../../assets/image/g-32.jpeg";
import g33 from "../../assets/image/g-33.jpeg";
import g34 from "../../assets/image/g-34.jpeg";
import g35 from "../../assets/image/g-35.jpeg";
import g36 from "../../assets/image/g-36.jpeg";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(15);
  const galleryRef = useRef(null);

  const clinicImages = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, 
    g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, 
    g21, g22, g23, g24, g25, g26, g27, g28, g29, g30, 
    g31, g32, g33, g34, g35, g36
  ];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 15);
  };

  const handleShowLess = () => {
    setVisibleCount(15);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? clinicImages.length - 1 : prevIndex - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === clinicImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const visibleImages = clinicImages.slice(0, visibleCount);

  return (
    <div className="pinterest-gallery-wrapper" ref={galleryRef}>
      
      {/* 1. Header Section */}
      <motion.div 
        className="clinic-top-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="branding-badge">Premium Facility Tour</div>
        <h1 className="doctor-main-title">DR. SHASHI KUMAR</h1>
        <p className="clinic-sub-tag">Kidney Care Clinic Gallery</p>
        <div className="glowing-line-divider"></div>
      </motion.div>

      {/* 2. Gallery Grid with AnimatePresence */}
      <div className="pinterest-grid">
        <AnimatePresence>
          {visibleImages.map((imgUrl, index) => (
            <motion.div 
              key={`img-${index}`} 
              className="pinterest-item"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              layout // layout prop ensure karta hai ki bakhi cards position correctly change karein
            >
              <div className="card-media-box">
                <img src={imgUrl} alt={`Gallery Image ${index + 1}`} className="pinterest-img" />
                <div className="eye-hover-overlay">
                  <div className="eye-icon-glow-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 3. View More / View Less Toggle Button */}
      <div className="view-more-container">
        {visibleCount < clinicImages.length ? (
          <motion.button 
            className="view-more-btn"
            onClick={handleLoadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Images <i className="fa-solid fa-arrow-down-long"></i>
          </motion.button>
        ) : (
          <motion.button 
            className="view-more-btn view-less-btn"
            onClick={handleShowLess}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Less <i className="fa-solid fa-arrow-up-long"></i>
          </motion.button>
        )}
      </div>

      {/* 4. Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            className="center-popup-overlay" 
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="center-popup-box clean-lightbox-box" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button className="popup-close-btn" onClick={() => setSelectedIndex(null)}>✕</button>
              <button className="popup-nav-btn prev-btn" onClick={handlePrev}>❮</button>

              <div className="popup-image-container">
                <img 
                  src={clinicImages[selectedIndex]} 
                  alt={`Selected Image ${selectedIndex + 1}`} 
                  className="popup-full-img" 
                />
              </div>

              <button className="popup-nav-btn next-btn" onClick={handleNext}>❯</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;