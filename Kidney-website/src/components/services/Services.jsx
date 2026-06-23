import React from 'react';
import './Services.css';

const Services = ({ onBookClick }) => {
  const serviceCards = [
    { 
      title: "Chronic Kidney Disease (CKD)", 
      icon: "🩺", 
      badge: "MANAGEMENT", 
      borderColor: "#0284c7",
      desc: "Long-term tracking, slowing disease progression, and therapeutic mapping." 
    },
    { 
      title: "Kidney Failure Treatment", 
      icon: "⚡", 
      badge: "CRITICAL CARE", 
      borderColor: "#dc2626",
      desc: "Immediate protocol management and full evaluation for advanced uremia." 
    },
    { 
      title: "Hemodialysis", 
      icon: "💧", 
      badge: "24/7 LIVE SUPPORT", 
      borderColor: "#0d9488",
      desc: "Ultra-pure state-of-the-art blood filtration setup with infection control." 
    },
    { 
      title: "Peritoneal Dialysis (CAPD)", 
      icon: "🏠", 
      badge: "HOME THERAPY", 
      borderColor: "#7c3aed",
      desc: "Continuous Ambulatory training and expert surgical line placement." 
    },
    { 
      title: "Kidney Transplant Consultation", 
      icon: "👥", 
      badge: "ADVANCED PROGRAM", 
      borderColor: "#d97706",
      desc: "Pre-transplant cross-matching evaluation and post-operative follow-up." 
    },
    { 
      title: "Acute Kidney Injury Treatment", 
      icon: "⚠️", 
      badge: "EMERGENCY INDEX", 
      borderColor: "#ea580c",
      desc: "Rapid reversal therapies for sudden renal shutdown in ICU environments." 
    },
    { 
      title: "Diabetic Kidney Disease", 
      icon: "📈", 
      badge: "METABOLIC FOCUS", 
      borderColor: "#16a34a",
      desc: "Monitoring of microalbuminuria and intensive nephropathy shield." 
    },
    { 
      title: "Hypertension Kidney Disorders", 
      icon: "❤️", 
      badge: "HYPERTENSION HUB", 
      borderColor: "#db2777",
      desc: "Managing secondary hypertension related to narrowing of renovascular channels." 
    },
    { 
      title: "Interventional Nephrology", 
      icon: "💉", 
      badge: "VASCULAR ACCESS", 
      borderColor: "#0891b2",
      desc: "Expert creation, salvage, and management of AV fistulas and catheters." 
    },
    { 
      title: "Renal Biopsy & Advanced Access", 
      icon: "🔬", 
      badge: "DIAGNOSTIC MATRIX", 
      borderColor: "#4f46e5",
      desc: "Ultrasound-guided precision tissue sampling to evaluate glomerular diseases." 
    }
  ];

  return (
    <section className="services-hybrid-section">
      <div className="hybrid-container">
        
      {/* Symmetric Centered Header Block */}
<div className="hybrid-header-block central-mode">
  <span className="hybrid-tag">DEPARTMENT OF NEPHROLOGY</span>
  <h2 className="hybrid-title">Renal Specialities, <span>Redefined.</span></h2>
  <div className="title-divider-line"></div>
  <p className="hybrid-subtitle">
    Dr. Shashi Kumar's elite clinical architecture framework optimized for total kidney rejuvenation.
  </p>
</div>

        {/* 4-Column Original Grid Structure */}
        <div className="hybrid-services-grid">
          {serviceCards.map((service, index) => (
            <div 
              key={index} 
              className="hybrid-pro-card"
              style={{ '--accent-glow-line': service.borderColor }}
            >
              {/* ORIGINAL DESIGN TOP BAR: Left Icon & Right Badge */}
              <div className="card-top-flex-row">
                <div className="hybrid-icon-box">
                  <span className="card-icon-render">{service.icon}</span>
                </div>
                <span className="card-hybrid-badge">{service.badge}</span>
              </div>
              
              {/* CORE CONTENT: Clean Structured Typography */}
              <div className="card-body-flex-row">
                <h3 className="card-heading-title">{service.title}</h3>
                <p className="card-heading-desc">{service.desc}</p>
              </div>

              {/* CARD FOOTER */}
              <div className="card-footer-flex-row">
                <span className="explore-action-txt">
                  Explore Details <i className="fa-solid fa-arrow-right-long transition-arrow"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Crisp White Theme CTA Ribbon */}
        <div className="hybrid-cta-ribbon">
          <div className="cta-left-stack">
            <div className="live-status">
              <span className="pulse-circle"></span>
              <span>24/7 Immediate Emergency Support Active</span>
            </div>
            <h4>Need Executive Medical Guidance for Kidney Care?</h4>
          </div>
          <button className="cta-primary-btn" onClick={onBookClick}>
            Book Appointment <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;