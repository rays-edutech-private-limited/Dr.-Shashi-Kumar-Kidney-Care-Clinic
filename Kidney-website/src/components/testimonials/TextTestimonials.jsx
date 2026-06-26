import React, { useState, useEffect, useRef } from 'react';
import './TextTestimonials.css';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

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
      6000 // Every 6 seconds change testimonial
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  return (
    <div className="tt-premium-section">
      {/* Background Lights */}
      <div className="tt-glow-orb-top"></div>
      <div className="tt-glow-orb-bottom"></div>
      
      {/* Section Header */}
      <div className="tt-header-area">
        <div className="tt-badge-top">CLINICAL EXCELLENCE</div>
        <h2 className="tt-main-title">Words of Gratitude</h2>
        <p className="tt-subtitle">Real recovery experiences from our verified kidney care patients</p>
      </div>

      {/* Main Testimonial Showcase Arena */}
      <div className="tt-display-arena">
        <div className="tt-cards-container">
          {textData.map((item, index) => {
            let cardClass = "tt-card tt-card-hidden";
            if (index === activeIndex) cardClass = "tt-card tt-card-active";
            else if (index === (activeIndex - 1 + textData.length) % textData.length) cardClass = "tt-card tt-card-prev";
            else if (index === (activeIndex + 1) % textData.length) cardClass = "tt-card tt-card-next";

            return (
              <div key={item.id} className={cardClass} onClick={() => setActiveIndex(index)}>
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
      </div>

      {/* Modern Sleek Navigation Line Controller */}
      <div className="tt-navigator-dashboard">
        {textData.map((_, idx) => (
          <div 
            key={idx} 
            className={`tt-nav-bar-line ${idx === activeIndex ? 'tt-bar-active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {idx === activeIndex && <div className="tt-progress-fill"></div>}
          </div>
        ))}
      </div>
       <div className="tt-trust-footer-bar">
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
      </div>
    </div>
  );
}

export default TextTestimonials;