import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './Gallery.css';
import ScrollReveal from "../../ScrollReveal";
import g1 from "../../assets/image/g-1.jpeg"
import g2 from "../../assets/image/g-2.jpeg"
import g3 from "../../assets/image/g-3.jpeg"
import g4 from "../../assets/image/g-4.jpeg"
import g5 from "../../assets/image/g-5.jpeg"




const Gallery = () => {
  ScrollReveal('.reveal-on-scroll', 0.15);
  const [selectedImage, setSelectedImage] = useState(null);

  const clinicImages = [
  {
    id: 1,
    title: "Dr. Shashi Kumar Kidney Care Centre",
    category: "Clinic Exterior",
    url: g1
  },
  {
    id: 2,
    title: "Comfortable Patient Waiting Area",
    category: "Reception",
    url: g2
  },
  {
    id: 3,
    title: "Modern Patient Lounge & Registration",
    category: "Patient Lounge",
    url: g3
  },
  {
    id: 4,
    title: "Spacious Patient Waiting Hall",
    category: "Waiting Area",
    url: g4
  },
  {
    id: 5,
    title: "Expert Consultation with Dr. Shashi Kumar",
    category: "Consultation",
    url: g5
  }
];

  // ग्रिड आइटम्स के लिए स्टैगर एनीमेशन पैरेंट कॉन्फ़िगरेशन
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08 // हर इमेज कार्ड के बीच हल्का सा डिले
      }
    }
  };

  // सिंगल इमेज कार्ड का एनीमेशन वेरिएंट
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 12, duration: 0.5 } 
    }
  };

  return (
    <div className="pinterest-gallery-wrapper reveal-on-scroll">
      
      {/* 1. क्लीनिक हेडर सेक्शन - scroll down / up दोनों पर रिएक्ट करेगा */}
      <motion.div 
        className="clinic-top-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // once: false से यह ऊपर स्क्रॉल करने पर भी वापस एनिमेट होगा
        transition={{ duration: 0.6 }}
      >
        <div className="branding-badge">Premium Facility Tour</div>
        <h1 className="doctor-main-title">DR. SHASHI KUMAR</h1>
        <p className="clinic-sub-tag">Kidney Care Clinic Gallery</p>
        <div className="glowing-line-divider"></div>
      </motion.div>

      {/* 2. पिंटरेस्ट स्टाइल ग्रिड - इसमें सभी कार्ड्स सिस्टेमैटिक तरीके से पॉप होंगे */}
      <motion.div 
        className="pinterest-grid"
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // 10% ग्रिड एरिया दिखते ही एनीमेशन ट्रिगर होगा
      >
        {clinicImages.map((image) => (
          <motion.div 
            key={image.id} 
            className="pinterest-item"
            onClick={() => setSelectedImage(image)}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.015, transition: { duration: 0.2 } }} // प्रीमियम होवर और लिफ्ट इफ़ेक्ट
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
      </motion.div>

      {/* 3. सेंटर पॉपअप मोडल (स्मूथ पॉप-अप एनीमेशन) */}
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