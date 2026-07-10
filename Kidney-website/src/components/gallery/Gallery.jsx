import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './Gallery.css';
import ScrollReveal from "../../ScrollReveal";

const Gallery = () => {
  ScrollReveal('.reveal-on-scroll', 0.15);
  const [selectedImage, setSelectedImage] = useState(null);

  const clinicImages = [
    { id: 1, title: "Advanced Dialysis Wing", category: "Equipment", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Main Clinic Entrance", category: "Lobby", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" },
    { id: 3, title: "Dr. Shashi Kumar Consultation Suite", category: "Doctor Room", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" },
    { id: 4, title: "Intensive Kidney Care Station", category: "ICU Unit", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" },
    { id: 5, title: "Patient Recovery Lounge", category: "Ward", url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" },
    { id: 6, title: "High-Tech Diagnostics Lab Room", category: "Laboratory", url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600" },
    { id: 7, title: "Premium Operation Theater", category: "OT", url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600" },
    { id: 8, title: "Sterilization & Safety Zone", category: "Lab", url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="pinterest-gallery-wrapper reveal-on-scroll">
      
      {/* Clinic Header Section */}
      <motion.div 
        className="clinic-top-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="branding-badge">Premium Facility Tour</div>
        <h1 className="doctor-main-title">DR. SHASHI KUMAR</h1>
        <p className="clinic-sub-tag">Kidney Care Clinic Gallery</p>
        <div className="glowing-line-divider"></div>
      </motion.div>

      {/* Pure Pinterest Style Vertical Fluid Columns Grid */}
      <div className="pinterest-grid">
        {clinicImages.map((image) => (
          <motion.div 
            key={image.id} 
            className="pinterest-item"
            onClick={() => setSelectedImage(image)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.01 }} // प्रीमियम लिफ्ट और होवर स्केल इफ़ेक्ट
          >
            <div className="card-media-box">
              <img src={image.url} alt={image.title} className="pinterest-img" />
              
              {/* Info Overlay */}
              <div className="media-text-info">
                <span className="media-tag">{image.category}</span>
                <h4 className="media-title">{image.title}</h4>
              </div>

              {/* Glowing Green Eye Icon Overlay */}
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
      </div>

      {/* --- CENTER FULL SIZE POPUP MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="center-popup-overlay" 
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="center-popup-box" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              
              {/* Close Button */}
              <button className="popup-close-btn" onClick={() => setSelectedImage(null)}>✕</button>
              
              <div className="popup-image-container">
                <img src={selectedImage.url} alt={selectedImage.title} className="popup-full-img" />
              </div>

              <div className="popup-details-footer">
                <div>
                  <span className="popup-badge-tag">{selectedImage.category}</span>
                  <h3 className="popup-display-title">{selectedImage.title}</h3>
                </div>
                <p className="popup-brand-text">Dr. Shashi Kumar Kidney Care</p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;