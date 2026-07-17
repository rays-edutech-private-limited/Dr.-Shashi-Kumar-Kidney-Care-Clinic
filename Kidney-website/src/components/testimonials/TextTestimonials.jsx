import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './TextTestimonials.css';
import ScrollReveal from "../../ScrollReveal"

const textData = [
  {
    id: 1,
    caseId: "PATIENT ID #9082",
    recoveryTime: "3 MONTHS RECOVERY",
    conditionTag: "DIALYSIS SUPPORT",
    quote: "“Mujhe lagta tha ki yeh kabhi theek nahi hoga. Lekin sahi guidance aur up-to-date technique se meri life poori tarah badal gayi. Staff aur care ka level ekdum top-notch tha!”",
    verifiedStatus: "Verified Patient"
  },
  {
    id: 2,
    caseId: "PATIENT ID #4419",
    recoveryTime: "6 WEEKS RECOVERY",
    conditionTag: "CKD MANAGEMENT",
    quote: "“Sabse achhi baat yeh thi ki privacy ka poora dhyan rakha gaya. Shuruat se lekar aakhiri tak har cheez transparent thi. Highly professional experience.”",
    verifiedStatus: "Verified Patient"
  },
  {
    id: 3,
    caseId: "PATIENT ID #7204",
    recoveryTime: "5 MONTHS RECOVERY",
    conditionTag: "KIDNEY TRANSPLANT CARE",
    quote: "“Treatment ke dauran jo confidence mujhe mila, woh bemisaal hai. Modern equipment aur world-class infrastructure ne mera poora bharosa jeet liya.”",
    verifiedStatus: "Verified Patient"
  },
  {
    id: 4,
    caseId: "PATIENT ID #3122",
    recoveryTime: "2 MONTHS RECOVERY",
    conditionTag: "NEPHROLOGY CARE",
    quote: "“Maine bohot jagah consult kiya tha, par jo clinical excellence aur customized plan mujhe yahan mila, woh kahin nahi mila. Truly international standards!”",
    verifiedStatus: "Verified Patient"
  }
];

function TextTestimonials() {
  ScrollReveal('.reveal-on-scroll', 0.15)
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Drag and Swipe Refs
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === textData.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % textData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + textData.length) % textData.length);
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

  // कॉमन एनीमेशन ऑब्जेक्ट - once: false करने से यह स्क्रॉल डाउन और स्क्रॉल अप दोनों पर दोबारा ट्रिगर होगा
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.15 }, // 15% एलिमेंट दिखाई देने पर एनिमेट होगा
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    // मेन कंटेनर को साधारण div रखा है ताकि लेआउट या ओर्ब्स का बैकग्राउंड न हिले
    <div className="tt-premium-section reveal-on-scroll">
      {/* Background Lights */}
      <div className="tt-glow-orb-top"></div>
      <div className="tt-glow-orb-bottom"></div>
      
      {/* 1. सेक्शन हेडर एनीमेशन */}
      <motion.div className="tt-header-area" {...fadeInUp}>
        <div className="tt-badge-top">CLINICAL EXCELLENCE</div>
        <h2 className="tt-main-title">Words of Gratitude</h2>
        <p className="tt-subtitle">Real recovery experiences from our verified kidney care patients</p>
      </motion.div>

      {/* 2. मुख्य डिस्प्ले एरीना (कार्ड्स) एनीमेशन */}
      <motion.div 
        className="tt-display-arena"
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} // हल्का सा डिले ताकि हेडर के बाद लोड हो
      >
        <div className="tt-cards-container">
          {textData.map((item, index) => {
            let cardClass = "tt-card tt-card-hidden";
            if (index === activeIndex) cardClass = "tt-card tt-card-active";
            else if (index === (activeIndex - 1 + textData.length) % textData.length) cardClass = "tt-card tt-card-prev";
            else if (index === (activeIndex + 1) % textData.length) cardClass = "tt-card tt-card-next";

            return (
              <div key={item.id} className={cardClass} onClick={() => index !== activeIndex && setActiveIndex(index)}>
                {/* Cyber Matrix Corner Lines */}
                <div className="tt-corner-line tl"></div>
                <div className="tt-corner-line tr"></div>
                <div className="tt-corner-line bl"></div>
                <div className="tt-corner-line br"></div>

                {/* Top Meta info */}
                <div className="tt-card-meta">
                  <span className="tt-case-code">{item.caseId}</span>
                  <span className="tt-tag-condition">{item.conditionTag}</span>
                </div>

                {/* Big Luxury Quote Icon */}
                <div className="tt-quote-symbol">“</div>

                {/* Patient Message */}
                <p className="tt-patient-speech">{item.quote}</p>

                {/* Bottom Status bar */}
                <div className="tt-card-footer">
                  <div className="tt-timeline-badge">
                    <span className="tt-clock-icon">⚡</span> {item.recoveryTime}
                  </div>
                  <div className="tt-verified-stamp">
                    <span className="tt-shield-icon">✓</span> {item.verifiedStatus}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* 3. नेविगेटर डैशबोर्ड एनीमेशन */}
      <motion.div className="tt-navigator-dashboard" {...fadeInUp} transition={{ duration: 0.6, delay: 0.15 }}>
        {textData.map((_, idx) => (
          <div 
            key={idx} 
            className={`tt-nav-bar-line ${idx === activeIndex ? 'tt-bar-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {idx === activeIndex && <div className="tt-progress-fill"></div>}
          </div>
        ))}
      </motion.div>

      {/* 4. ट्रस्ट फुटर बार एनीमेशन */}
      <motion.div className="tt-trust-footer-bar" {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="tt-trust-item">
          <div className="tt-trust-icon-box blue-bg">🏅</div>
          <div>
            <h4>Verified Patients</h4>
            <p>Real & Authentic Reviews</p>
          </div>
        </div>
        <div className="tt-trust-item">
          <div className="tt-trust-icon-box light-blue-bg">💙</div>
          <div>
            <h4>Compassionate Care</h4>
            <p>You're in Safe Hands</p>
          </div>
        </div>
        <div className="tt-trust-item">
          <div className="tt-trust-icon-box navy-bg">🛡️</div>
          <div>
            <h4>Clinical Excellence</h4>
            <p>International Standards</p>
          </div>
        </div>
        <div className="tt-trust-item">
          <div className="tt-trust-icon-box lock-bg">🔒</div>
          <div>
            <h4>Privacy First</h4>
            <p>Your Health, Our Priority</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TextTestimonials;