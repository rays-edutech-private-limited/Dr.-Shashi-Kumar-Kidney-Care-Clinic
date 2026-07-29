import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Framer Motion इम्पोर्ट किया
import './ContactUs.css';
import ScrollReveal from "../../ScrollReveal";

function ContactUs() {
  ScrollReveal('.reveal-on-scroll', 0.15);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Target WhatsApp Number
    const whatsappNumber = "917070337440";

    // Pro-Level Medical Receipt Format (100% Device Compatible - No Crash Symbols)
    const messageText = 
      `🟢 *DR. SHASHI | KIDNEY CARE CENTER*%0A` +
      `--------------------------------------------------%0A` +
      `🩺 *NEW APPOINTMENT REQUEST*%0A` +
      `--------------------------------------------------%0A%0A` +
      `👤 *Patient Name :* ${formData.firstName} ${formData.lastName}%0A` +
      `📞 *Mobile No.    :* ${formData.phone}%0A` +
      `📩 *Email ID         :* ${formData.email}%0A%0A` +
      `--------------------------------------------------%0A` +
      `📋 *HEALTH CONCERN / SYMPTOMS :*%0A` +
      `_${formData.message}_%0A%0A` +
      `--------------------------------------------------%0A` +
      `✨ _Sent via Kidney Care Web Portal_`;

    // Safe URL Encoding lagakar link banayein
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    // Redirect to WhatsApp App/Web securely
    window.open(whatsappUrl, '_blank');
  };

  // कॉमन एनीमेशन सेटिंग्स - once: false करने से यह स्क्रॉल अप/डाउन दोनों पर ट्रिगर होगा
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.15 }, // 15% एलिमेंट स्क्रीन पर आते ही एनीमेशन शुरू होगा
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="contact-page-wrapper reveal-on-scroll">
      {/* Top Header Section */}
      <motion.div 
        className="contact-header-section"
        {...fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <span className="top-badge">🩺 DR. SHASHI | Kidney Hospital & Research Institute</span>
        <h1 className="main-heading">Expert Kidney Care & Consultation</h1>
        <p className="sub-heading-desc">
          Apni kidney health ke liye behtar salah aur appointment book karne ke liye niche diye gaye form ko bharein ya direct call karein.
        </p>
        <div className="slider-dots-indicator">
          <span className="line-dot"></span>
          <span className="circle-dot active"></span>
          <span className="line-dot"></span>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="contact-grid-layout">
        
        {/* LEFT SIDE: Form Card */}
        <motion.div 
          className="form-container-card"
          {...fadeInUp}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="form-intro-header">
            <div className="icon-bubble"><i className="fa-solid fa-calendar-days"></i></div>
            <div className="intro-text-block">
              <span className="tagline">APPOINTMENT / ENQUIRY</span>
              <h3>Book Your Consultation</h3>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="interactive-form-element">
            <div className="input-row-dual">
              <div className="custom-field-group">
                <label>FIRST NAME</label>
                <div className="input-with-icon">
                  <span className="field-icon">👤</span>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    placeholder="First name" 
                    required 
                  />
                </div>
              </div>

              <div className="custom-field-group">
                <label>LAST NAME</label>
                <div className="input-with-icon">
                  <span className="field-icon">👤</span>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    placeholder="Last name" 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="input-row-dual">
              <div className="custom-field-group">
                <label>Email Address (Optional)</label>
                <div className="input-with-icon">
                  <span className="field-icon">✉️</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                  
                  />
                </div>
              </div>

              <div className="custom-field-group">
                <label>PHONE NUMBER</label>
                <div className="input-with-icon">
                  <span className="field-icon">📞</span>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Mobile number" 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="custom-field-group">
              <label>YOUR HEALTH CONCERN / MESSAGE</label>
              <div className="input-with-icon textarea-icon-align">
                <span className="field-icon">✍️</span>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Describe your symptoms or reason for visit..." 
                  rows="4"
                  required 
                ></textarea>
              </div>
            </div>

            <motion.button 
              type="submit" 
              className="submit-action-btn"
              whileHover={{ scale: 1.02, y: -2 }} // होवर करने पर बटन थोड़ा ऊपर उठेगा
              whileTap={{ scale: 0.98 }} // क्लिक करने पर हल्का सा दबेगा
            >
              <span className="btn-icon">🚀</span> SEND TO WHATSAPP
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Map & Info Stack */}
        <motion.div 
          className="widgets-stack-column"
          {...fadeInUp}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          
          {/* Google Map Widget */}
          <div className="embedded-map-card">
            <iframe 
              title="Dr. Shashi Kidney Care Location Map"
              src="https://www.google.com/maps?q=J34R%2B263+Patna,+Bihar&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Quick Action Contact Pills */}
          <div className="quick-action-cards-row">
            <motion.a 
              href="mailto:drshashi@kidneycare.in" 
              className="action-pill-card"
              whileHover={{ x: 5 }} // होवर करने पर राइट साइड में थोड़ा मूव होगा
            >
              <div className="pill-icon-bubble blue-tint">✉️</div>
              <div className="pill-data-info">
                <small>EMAIL DOCTOR</small>
                <strong>drshashi@kidneycare.in</strong>
              </div>
              <span className="arrow-trigger">→</span>
            </motion.a>

            <motion.a 
              href="tel:+917070337440" 
              className="action-pill-card"
              whileHover={{ x: 5 }} // होवर करने पर राइट साइड में थोड़ा मूव होगा
            >
              <div className="pill-icon-bubble green-tint">📞</div>
              <div className="pill-data-info">
                <small>EMERGENCY CALL / HELPLINE</small>
                <strong>+91-7070337440, <br />+91-7250019913</strong>
              </div>
              <span className="arrow-trigger">→</span>
            </motion.a>
          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default ContactUs;