import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // URL नेविगेशन के लिए Link इम्पोर्ट किया
import './Services.css';
import ScrollReveal from "../../ScrollReveal";

const Services = () => {
  ScrollReveal('.reveal-on-scroll', 0.15);

  // सभी कार्ड्स में 'id' जोड़ी गई है ताकि पहचान आसान हो सके
  const serviceCards = [
    { 
      id: "chronic-kidney-disease",
      title: "Chronic Kidney Disease (CKD)", 
      icon: "fas fa-stethoscope", 
      badge: "MANAGEMENT", 
      themeColor: "#6d28d9",
      bgColor: "#f3e8ff",
      desc: "Long-term care & management to protect kidney function and improve quality of life." 
    },
    { 
      id: "kidney-failure-treatment",
      title: "Kidney Failure Treatment", 
      icon: "fa-solid fa-bolt", 
      badge: "CARE & TREATMENT", 
      themeColor: "#ea580c",
      bgColor: "#ffedd5",
      desc: "Personalized treatment plans for kidney failure with advanced medical support." 
    },
    { 
      id: "hemodialysis",
      title: "Hemodialysis", 
      icon: "fa-solid fa-droplet", 
      badge: "DIALYSIS SUPPORT", 
      themeColor: "#0284c7",
      bgColor: "#e0f2fe",
      desc: "State-of-the-art dialysis facilities ensuring safety, comfort, and better outcomes." 
    },
    { 
      id: "peritoneal-dialysis",
      title: "Peritoneal Dialysis (CAPD)", 
      icon: "fa-solid fa-house", 
      badge: "HOME THERAPY", 
      themeColor: "#16a34a",
      bgColor: "#dcfce7",
      desc: "Gentle, effective dialysis you can do at home for a more flexible life." 
    },
    { 
      id: "kidney-transplant-consultation",
      title: "Kidney Transplant Consultation", 
      icon: "fa-solid fa-user-doctor", 
      badge: "ADVANCED CARE", 
      themeColor: "#d97706",
      bgColor: "#fef3c7",
      desc: "Expert guidance for kidney transplant evaluation, preparation, and post-transplant care." 
    },
    { 
      id: "acute-kidney-injury",
      title: "Acute Kidney Injury Treatment", 
      icon: "fa-solid fa-triangle-exclamation", 
      badge: "EMERGENCY CARE", 
      themeColor: "#dc2626",
      bgColor: "#fee2e2",
      desc: "Rapid diagnosis and treatment for sudden loss of kidney function." 
    },
    { 
      id: "diabetic-kidney-disease",
      title: "Diabetic Kidney Disease", 
      icon: "fa-solid fa-chart-line", 
      badge: "DIABETIC CARE", 
      themeColor: "#0891b2",
      bgColor: "#cffafe",
      desc: "Specialized monitoring and treatment to prevent diabetes-related kidney damage." 
    },
    { 
      id: "hypertension-kidney-disorders",
      title: "Hypertension Kidney Disorders", 
      icon: "fa-solid fa-heart-pulse", 
      badge: "BLOOD PRESSURE CARE", 
      themeColor: "#db2777",
      bgColor: "#fce7f3",
      desc: "Managing kidney complications caused by high blood pressure and vascular disorders." 
    },
  ];

  const features = [
    {
      title: "Expert Nephrologists",
      desc: "Highly experienced care team",
      icon: "fa-solid fa-user-doctor",
      bgColor: "#eff6ff",
      textColor: "#2563eb"
    },
    {
      title: "Patient First Approach",
      desc: "Compassionate & personalized care",
      icon: "fa-solid fa-heart-pulse",
      bgColor: "#fdf2f8",
      textColor: "#db2777"
    },
    {
      title: "Advanced Technology",
      desc: "Modern equipment & facilities",
      icon: "fa-solid fa-microscope",
      bgColor: "#ecfeff",
      textColor: "#0891b2"
    },
    {
      title: "Complete Kidney Care",
      desc: "From prevention to recovery",
      icon: "fas fa-stethoscope",
      bgColor: "#f0fdf4",
      textColor: "#16a34a"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 13, duration: 0.6 } 
    }
  };

  return (
    <section className="services-hybrid-section reveal-on-scroll">
      <div className="hybrid-container">
        
        {/* 1. हेडर ब्लॉक */}
        <motion.div 
          className="hybrid-header-block central-mode"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hybrid-tag">
            <span className="tag-icon"><i className='fas fa-stethoscope'></i></span> DEPARTMENT OF NEPHROLOGY
          </span>
          <h2 className="hybrid-title">Kidney Specialities, <span>Services.</span></h2>
          <p className="hybrid-subtitle">
            Advanced care. Expert nephrologists. Better outcomes.<br/>
            Compassionate kidney care for a healthier tomorrow.
          </p>
        </motion.div>

        {/* 2. सर्विसेज ग्रिड */}
        <motion.div 
          className="hybrid-services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {serviceCards.map((service, index) => (
            <motion.div 
              key={index} 
              className="hybrid-pro-card"
              style={{ '--theme-color': service.themeColor, '--bg-color': service.bgColor }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
            >
              <div className="card-top-flex-row">
                <div className="hybrid-icon-box" style={{ backgroundColor: service.bgColor, color: service.themeColor }}>
                  <span className="card-icon-render"><i className={service.icon}></i></span>
                </div>
                <span className="card-hybrid-badge" style={{ backgroundColor: service.bgColor, color: service.themeColor }}>
                  {service.badge}
                </span>
              </div>
              
              <div className="card-body-flex-row">
                <h3 className="card-heading-title">{service.title}</h3>
                <p className="card-heading-desc">{service.desc}</p>
              </div>

              <div className="card-footer-flex-row">
                {/* Explore Details को Router Link से बदला गया है ताकि सही id पर जा सके */}
                <Link 
                  to={`/services/${service.id}`} 
                  className="explore-action-txt" 
                  style={{ color: service.themeColor, textDecoration: 'none', display: 'inline-block' }}
                >
                  Explore Details <span className="transition-arrow">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. नीचे का फीचर रिबन */}
        <motion.div 
          className="hybrid-feature-ribbon"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              className="feature-item" 
              key={index}
              variants={cardVariants}
            >
              <div className="feature-icon" style={{ backgroundColor: feature.bgColor, color: feature.textColor }}>
                <i className={feature.icon}></i>
              </div>
              <div className="feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;