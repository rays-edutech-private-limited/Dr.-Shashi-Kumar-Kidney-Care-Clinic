import React, { useState } from 'react';
import './DoctorModal.css';

const DoctorModal = ({ isOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    issue: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917368059080"; 

    const message = `*New Appointment Request*%0A%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Date:* ${formData.date}%0A` +
                    `*Problem:* ${formData.issue}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    toggleModal();
    setFormData({ name: '', phone: '', date: '', issue: '' });
  };

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge">Specialist Care</span>
            <h2>Kidney Care Consultation</h2>
          </div>
          <button className="close-btn" onClick={toggleModal} aria-label="Close modal">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {/* 1. Full Name */}
          <div className="form-group">
            <label>Patient's Full Name</label>
            <input 
              type="text" 
              name="name"
              placeholder="Enter full name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* 2. Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              placeholder="Enter phone number" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* 3. Preferred Date */}
          <div className="form-group">
            <label>Preferred Date</label>
            <input 
              type="date" 
              name="date"
              required 
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* 4. Problem Description */}
          <div className="form-group">
            <label>Describe the Problem / Symptoms</label>
            <textarea 
              name="issue"
              placeholder="E.g., Kidney pain, swelling, routine checkup..." 
              required 
              rows="3"
              value={formData.issue}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            📩 Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorModal;