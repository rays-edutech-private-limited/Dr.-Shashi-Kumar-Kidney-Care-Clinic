import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Jab user 300px niche scroll karega, tabhi "Scroll to Top" button dikhega
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Upar jaane ke liye function
 const scrollToTop = (e) => {
  if (e) e.preventDefault(); // Kisi bhi default event ko rokne ke liye
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Yeh makhkhan jaisa smooth scroll karega
  });
};

  return (
    <div className="floating-container">
      {/* 1. WhatsApp Button (Apna Number '91XXXXXXXXXX' ki jagah dalein) */}
      <a 
        href="https://wa.me/91XXXXXXXXXX?text=Hello%20Dr.%20Shashi%20Kumar,%20I%20want%20to%20book%20an%20appointment." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* 2. Phone Call Button (Apna Phone Number dalein) */}
      <a 
        href="tel:+91XXXXXXXXXX" 
        className="floating-btn phone"
        title="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* 3. Scroll to Top Button (Sirf scroll karne par dikhega) */}
      {/* Scroll to Top Button (Sirf button tag use karein, <a> tag nahi) */}
{showScrollTop && (
  <button 
    onClick={scrollToTop} 
    className="floating-btn scroll-top"
    title="Scroll to Top"
    type="button"  /* Isse form submit jaisa behavior nahi hoga */
  >
    <FaArrowUp size={20} />
  </button>
)}
    </div>
  );
};

export default FloatingButtons;