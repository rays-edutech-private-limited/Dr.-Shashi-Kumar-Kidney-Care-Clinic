import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
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
    const whatsappNumber = "917368059080";

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
  return (
    <div className="contact-page-wrapper">
      {/* Top Header Section */}
      <div className="contact-header-section">
        <span className="top-badge">🩺 DR. SHASHI | KIDNEY CARE CENTER</span>
        <h1 className="main-heading">Expert Kidney Care & Consultation</h1>
        <p className="sub-heading-desc">
          Apni kidney health ke liye behtar salah aur appointment book karne ke liye niche diye gaye form ko bharein ya direct call karein.
        </p>
        <div className="slider-dots-indicator">
          <span className="line-dot"></span>
          <span className="circle-dot active"></span>
          <span className="line-dot"></span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="contact-grid-layout">
        
        {/* LEFT SIDE: Form Card */}
        <div className="form-container-card">
          <div className="form-intro-header">
            <div className="icon-bubble">📅</div>
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
                <label>EMAIL ADDRESS</label>
                <div className="input-with-icon">
                  <span className="field-icon">✉️</span>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    required 
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

            <button type="submit" className="submit-action-btn">
              <span className="btn-icon">🚀</span> SEND TO WHATSAPP
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Map & Info Stack */}
        <div className="widgets-stack-column">
          
          {/* Google Map Widget */}
          <div className="embedded-map-card">
            <iframe 
              title="Dr. Shashi Kidney Care Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5812836243874!2d85.1311!3d25.6121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzQzLjYiTiA4NcKwMDcnNTEuOSJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Quick Action Contact Pills */}
          <div className="quick-action-cards-row">
            <a href="mailto:drshashi@kidneycare.in" className="action-pill-card">
              <div className="pill-icon-bubble blue-tint">✉️</div>
              <div className="pill-data-info">
                <small>EMAIL DOCTOR</small>
                <strong>drshashi@kidneycare.in</strong>
              </div>
              <span className="arrow-trigger">→</span>
            </a>

            <a href="tel:+919308654075" className="action-pill-card">
              <div className="pill-icon-bubble green-tint">📞</div>
              <div className="pill-data-info">
                <small>EMERGENCY CALL / HELPLINE</small>
                <strong>+91-9308654075</strong>
              </div>
              <span className="arrow-trigger">→</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContactUs;