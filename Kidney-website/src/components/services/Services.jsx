import React from 'react';
import './Services.css';

const Services = ({onBookClick}) => {
  // Top 3 Header Medical Divisions
  const topCategories = [
    { title: "Clinical Nephrology", subtitle: "Advanced Kidney Management", count: "01" },
    { title: "Dialysis & Renal Replacement", subtitle: "24/7 Hemodialysis Protocols", count: "02" },
    { title: "Transplant & Surgical Care", subtitle: "Pre & Post Operative Care", count: "03" }
  ];

  // Exact 10 Core Services with unique medical details & glowing colors
  const serviceCards = [
    { 
      title: "Chronic Kidney Disease (CKD)", 
      icon: "🩺", 
      badge: "MANAGEMENT", 
      borderColor: "rgba(0, 242, 254, 0.4)",
      desc: "Long-term tracking, slowing disease progression, and advanced therapeutic mapping." 
    },
    { 
      title: "Kidney Failure Treatment", 
      icon: "⚡", 
      badge: "CRITICAL CARE", 
      borderColor: "rgba(0, 119, 255, 0.4)",
      desc: "Comprehensive evaluation and immediate protocol management for advanced uremia." 
    },
    { 
      title: "Hemodialysis", 
      icon: "💧", 
      badge: "24/7 LIVE SUPPORT", 
      borderColor: "rgba(235, 208, 156, 0.4)",
      desc: "Ultra-pure state-of-the-art blood filtration setup with rigorous infection control." 
    },
    { 
      title: "Peritoneal Dialysis (CAPD)", 
      icon: "🏠", 
      badge: "HOME THERAPY", 
      borderColor: "rgba(168, 85, 247, 0.4)",
      desc: "Continuous Ambulatory Peritoneal Dialysis training and expert surgical line placement." 
    },
    { 
      title: "Kidney Transplant Consultation", 
      icon: "👥", 
      badge: "ADVANCED PROGRAM", 
      borderColor: "rgba(234, 179, 8, 0.4)",
      desc: "Complete pre-transplant cross-matching evaluation and post-transplant follow-up setup." 
    },
    { 
      title: "Acute Kidney Injury Treatment", 
      icon: "⚠️", 
      badge: "EMERGENCY INDEX", 
      borderColor: "rgba(239, 68, 68, 0.4)",
      desc: "Rapid reversal therapies for sudden renal shutdown in ICU or critical environments." 
    },
    { 
      title: "Diabetic Kidney Disease", 
      icon: "📈", 
      badge: "METABOLIC FOCUS", 
      borderColor: "rgba(16, 185, 129, 0.4)",
      desc: "Specialized monitoring of microalbuminuria and intensive diabetic nephropathy shield." 
    },
    { 
      title: "Hypertension-related Kidney Disorders", 
      icon: "❤️", 
      badge: "HYPERTENSION HUB", 
      borderColor: "rgba(236, 72, 153, 0.4)",
      desc: "Managing secondary hypertension related to systemic narrowing of renovascular channels." 
    },
    { 
      title: "Interventional Nephrology", 
      icon: "💉", 
      badge: "VASCULAR ACCESS", 
      borderColor: "rgba(20, 184, 166, 0.4)",
      desc: "Expert creation, salvage, and management of AV fistulas, grafts, and tunneled catheters." 
    },
    { 
      title: "Renal Biopsy & Advanced Access", 
      icon: "🔬", 
      badge: "DIAGNOSTIC MATRIX", 
      borderColor: "rgba(99, 102, 241, 0.4)",
      desc: "Ultrasound-guided precision tissue sampling to accurately evaluate complex glomerular diseases." 
    }
  ];

  return (
    <section className="services-cyber-section">
      {/* Background Decorative Kidney Overlays */}
      {/* <div className="kidney-bg-left"></div>
      <div className="kidney-bg-right"></div> */}

      <div className="services-container-pro">
        
        {/* Section Header */}
        <div className="pro-section-intro">
          <span className="premium-tag">DEPARTMENT OF NEPHROLOGY</span>
          <h2 className="pro-main-heading">Renal Specialities, <br /><span>Redefined.</span></h2>
          <p className="pro-sub-heading">Dr. Shashi Kumar's elite clinical architecture framework for total kidney rejuvenation.</p>
        </div>
        
        {/* Top 3 Header Categories */}
        <div className="top-categories-grid">
          {topCategories.map((cat, index) => (
            <div key={index} className="category-header-box">
              <div className="cat-left-side">
                <span className="cat-index">{cat.count}</span>
                <div className="cat-text">
                  <h4>{cat.title}</h4>
                  <p>{cat.subtitle}</p>
                </div>
              </div>
              <div className="arrow-circle-btn">
                <span className="arrow-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
          ))}
        </div>

        {/* 10 Kidney Services Grid */}
        <div className="services-main-grid">
          {serviceCards.map((service, index) => (
            <div 
              key={index} 
              className="cyber-service-card"
              style={{ '--card-glow-color': service.borderColor }}
            >
              <div className="card-top-flex">
                <div className="icon-wrapper-glow">
                  <span className="service-icon-glow">{service.icon}</span>
                </div>
                <span className="service-mini-badge">{service.badge}</span>
              </div>
              
              <div className="card-body-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
              
              <div className="card-footer-interactive">
                <span className="learn-more-text">Learn More <i class="fa-solid fa-arrow-right-long"></i></span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar & CTA Section */}
        <div className="bottom-interactive-banner">
          <div className="features-inline-list">
            <div className="feature-inline-item">
              <div className="f-icon-circle">👥</div>
              <div className="f-text-stack">
                <h5>Patient-Centric Care</h5>
                <p>Personalized treatment for better outcomes.</p>
              </div>
            </div>
            <div className="feature-inline-item">
              <div className="f-icon-circle">🛡️</div>
              <div className="f-text-stack">
                <h5>Advanced Technology</h5>
                <p>State-of-the-art equipment and evidence-based care.</p>
              </div>
            </div>
            <div className="feature-inline-item">
              <div className="f-icon-circle">👨‍⚕️</div>
              <div className="f-text-stack">
                <h5>Expert Team</h5>
                <p>Highly experienced nephrology specialists.</p>
              </div>
            </div>
          </div>

          <div className="cta-action-block">
            <div className="cta-info-text">
              <h5>Need Expert Care?</h5>
              <p>We're here for you, 24/7.</p>
            </div>
            <button className="cta-glow-btn" onClick={onBookClick}>
              Book Appointment <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;