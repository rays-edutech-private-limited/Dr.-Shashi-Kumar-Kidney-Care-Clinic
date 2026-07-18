import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiChevronDown, FiCalendar, FiAward, FiClock, FiActivity, 
  FiMapPin, FiPhone, FiCheckCircle, FiShield, FiUser, FiMessageSquare 
} from 'react-icons/fi';
import './ServiceDetail.css';

const servicesDetailedData = {
  "chronic-kidney-disease": {
    title: "Chronic Kidney Disease (CKD) Management",
    tag: "MANAGEMENT",
    themeColor: "#6d28d9",
    bgColor: "#f3e8ff",
    icon: <FiActivity />,
    description: "Long-term care and management to slow the progression of kidney disease and maintain a healthy life.",
    accordions: [
      {
        title: "Understanding CKD",
        content: ["Chronic Kidney Disease (CKD) implies that your kidneys are damaged and can't filter blood as they should. Early diagnosis and timely treatment are critical to prevent further damage."]
      },
      {
        title: "Key Symptoms to Watch For",
        content: [
          "• Persistent swelling (legs, ankles, eyes)",
          "• Unusual fatigue and weakness",
          "• Shortness of breath",
          "• Persistent itching",
          "• Changes in frequency and quantity of urination"
        ]
      },
      {
        title: "Our Treatment Approach",
        content: ["We focus on controlling underlying causes like blood pressure and diabetes, medication management, specific diet modifications, and regular monitoring to preserve kidney function."]
      }
    ]
  },
  "kidney-failure-treatment": {
    title: "End-Stage Kidney Disease & Failure Treatment",
    tag: "CARE & TREATMENT",
    themeColor: "#ea580c",
    bgColor: "#ffedd5",
    icon: <FiActivity />,
    description: "Personalized medical care and dialysis for advanced kidney failure.",
    accordions: [
      {
        title: "About Kidney Failure",
        content: ["ESKD occurs when kidney function falls below 15% and is no longer sufficient to sustain life. Treatment aims to reduce symptoms and improve quality of life."]
      },
      {
        title: "Common Symptoms",
        content: [
          "• Severe nausea and vomiting",
          "• Loss of appetite",
          "• Extreme fatigue",
          "• Significantly reduced urine output",
          "• Shortness of breath"
        ]
      },
      {
        title: "Management Options",
        content: ["We offer comprehensive guidance on medical management, Hemodialysis, Peritoneal Dialysis, and evaluate patients for Kidney Transplantation."]
      }
    ]
  },
  "hemodialysis": {
    title: "Hemodialysis Services",
    tag: "DIALYSIS SUPPORT",
    themeColor: "#0284c7",
    bgColor: "#e0f2fe",
    icon: <FiClock />,
    description: "State-of-the-art dialysis therapy in a safe and comfortable environment.",
    accordions: [
      {
        title: "What is Hemodialysis?",
        content: ["Hemodialysis uses a special machine (dialyzer) to filter waste products, toxins, and excess fluid from your blood when your kidneys are unable to do so."]
      },
      {
        title: "Benefits of Hemodialysis",
        content: [
          "• Efficiently removes waste and toxins",
          "• Helps control blood pressure",
          "• Restores electrolyte balance",
          "• Improves energy levels and overall well-being"
        ]
      },
      {
        title: "Our Dialysis Unit Highlights",
        content: ["Our unit features advanced dialysis technology, highly-trained nursing staff, and strict infection control measures for a safe treatment experience."]
      }
    ]
  },
  "peritoneal-dialysis": {
    title: "Peritoneal Dialysis (CAPD)",
    tag: "HOME THERAPY",
    themeColor: "#16a34a",
    bgColor: "#dcfce7",
    icon: <FiMapPin />,
    description: "A flexible and convenient dialysis treatment done at home.",
    accordions: [
      {
        title: "Understanding Peritoneal Dialysis",
        content: ["CAPD involves a sterile fluid placed into your abdominal cavity. The lining of your abdomen filters waste from your blood, which is later drained and replaced."]
      },
      {
        title: "Advantages of CAPD",
        content: [
          "• Treatment can be performed at home, school, or work",
          "• Offers flexibility in daily activities",
          "• Consistent and continuous filtration reduces dietary restrictions"
        ]
      }
    ]
  },
  "kidney-transplant-consultation": {
    title: "Kidney Transplant Physician & Consultation",
    tag: "ADVANCED CARE",
    themeColor: "#d97706",
    bgColor: "#fef3c7",
    icon: <FiAward />,
    description: "Expert evaluation and comprehensive care throughout the transplant journey.",
    accordions: [
      {
        title: "The Transplant Journey",
        content: ["Kidney transplant is often the best treatment for ESRD. We guide you through evaluation, waitlisting, and post-transplant care to ensure optimal outcomes."]
      },
      {
        title: "Our Transplant Services",
        content: [
          "• Recipient pre-transplant evaluation",
          "• Living donor evaluation coordination",
          "• Long-term post-transplant follow-up and medication monitoring"
        ]
      }
    ]
  },
  "acute-kidney-injury": {
    title: "Acute Kidney Injury (AKI) Treatment",
    tag: "EMERGENCY CARE",
    themeColor: "#dc2626",
    bgColor: "#fee2e2",
    icon: <FiActivity />,
    description: "Rapid diagnosis and treatment for sudden and temporary kidney damage.",
    accordions: [
      {
        title: "What is AKI?",
        content: ["Acute Kidney Injury is a sudden episode of kidney failure or kidney damage that happens within a few hours or a few days. Prompt medical care is essential."]
      },
      {
        title: "Common Symptoms",
        content: [
          "• Decreased urine output (oliguria)",
          "• Fluid retention causing swelling",
          "• Shortness of breath",
          "• Confusion and fatigue"
        ]
      },
      {
        title: "Our AKI Management Protocol",
        content: ["We focus on quick diagnosis of the underlying cause, fluid and electrolyte management, adjusting medications, and providing acute dialysis support if required."]
      }
    ]
  },
  "diabetic-kidney-disease": {
    title: "Diabetic Kidney Disease Care",
    tag: "DIABETIC CARE",
    themeColor: "#0891b2",
    bgColor: "#cffafe",
    icon: <FiActivity />,
    description: "Specialized monitoring and prevention of kidney damage caused by diabetes.",
    accordions: [
      {
        title: "The Diabetes Connection",
        content: ["High blood sugar levels over time can damage the kidneys' filtering system. Early identification and management are crucial to prevent progression to ESKD."]
      },
      {
        title: "Our Diabetic Care Program",
        content: [
          "• Intensive blood sugar control and medical monitoring",
          "• Dedicated blood pressure management with targeted therapies",
          "• Regular urine microalbuminuria, protein, and GFR tracking",
          "• Personalized nutritional and dietary counseling plans"
        ]
      }
    ]
  },
  "hypertension-kidney-disorders": {
    title: "Hypertension & Kidney Disorders",
    tag: "BLOOD PRESSURE CARE",
    themeColor: "#db2777",
    bgColor: "#fce7f3",
    icon: <FiActivity />,
    description: "Comprehensive management of high blood pressure to safeguard kidney health.",
    accordions: [
      {
        title: "Hypertension and Your Kidneys",
        content: ["High blood pressure can be both a cause and a result of kidney disease. Controlling hypertension is essential for preventing kidney function decline."]
      },
      {
        title: "Our Hypertension Care Includes",
        content: [
          "• Advanced diagnostic evaluations to determine structural/hormonal root causes",
          "• Personalized anti-hypertensive medication strategies",
          "• Progressive lifestyle adjustment frameworks (dietary, sodium restriction, exercise)",
          "• Long-term systematic monitoring of vascular and renal health"
        ]
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // WhatsApp फॉर्म डेटा के लिए स्टेट मैनेजमेंट
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    caseType: serviceId || 'chronic-kidney-disease'
  });

  // जब भी URL का serviceId बदलेगा, फॉर्म का केस टाइप अपने आप अपडेट हो जाएगा
  useEffect(() => {
    window.scrollTo(0, 0);
    if (serviceId) {
      setFormData(prev => ({ ...prev, caseType: serviceId }));
    }
  }, [serviceId]);

  const service = servicesDetailedData[serviceId];

  // फॉर्म इनपुट चेंज हैंडलर
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, name: value }));
  };

  // WhatsApp पर रीडायरेक्ट करने वाला फंक्शन
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const targetNumber = "917070337440"; // आपका नंबर इंटरनेशनल फॉर्मेट में

    // केस टाइप की सुंदर मैपिंग
    const serviceNames = {
      "chronic-kidney-disease": "CKD Management",
      "kidney-failure-treatment": "Kidney Failure Care",
      "hemodialysis": "Hemodialysis Unit",
      "peritoneal-dialysis": "Peritoneal Dialysis (CAPD)",
      "kidney-transplant-consultation": "Transplant Evaluation",
      "acute-kidney-injury": "Acute Kidney Injury (AKI)",
      "diabetic-kidney-disease": "Diabetic Kidney Disease",
      "hypertension-kidney-disorders": "Hypertension Disorders"
    };

    const readableCase = serviceNames[formData.caseType] || formData.caseType;

    // प्रोफेशनल मैसेज फॉर्मेटिंग
    const textMessage = `*New Consultation Request*\n\n` +
                        `👤 *Name:* ${formData.name}\n` +
                        `📞 *Contact:* ${formData.phone}\n` +
                        `🏥 *Nature of Case:* ${readableCase}`;

    // सुरक्षित URL एन्कोडिंग
    const whatsappLink = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodeURIComponent(textMessage)}`;
    
    // नए टैब में ओपन करना
    window.open(whatsappLink, '_blank');
  };

  if (!service) {
    return (
      <div className="pro-error-container">
        <FiAward className="pro-error-icon" />
        <h2>Service Profile Unavailable</h2>
        <p>The specialized medical service you are attempting to access could not be retrieved.</p>
        <button className="pro-back-btn" onClick={() => navigate('/services')}>
          Return to Department Services
        </button>
      </div>
    );
  }

  return (
    <div className="pro-service-detail-wrapper">
      <div className="pro-detail-main-container">
        {/* Dynamic Split Layout */}
        <div className="pro-layout-grid">
          
          {/* Left Column: Core Medical Content (Takes 65% width) */}
          <main className="pro-content-column">
            <header className="pro-hero-card" style={{ '--service-theme': service.themeColor, '--service-bg': service.bgColor }}>
              <div className="pro-badge-row">
                <span className="pro-tag" style={{ backgroundColor: service.themeColor }}>
                  {service.tag}
                </span>
              </div>
              <h1 className="pro-hero-title">{service.title}</h1>
              <p className="pro-hero-desc">{service.description}</p>
            </header>

            <section className="pro-medical-accordions">
              <div className="pro-section-header">
                <div className="pro-indicator" style={{ backgroundColor: service.themeColor }}></div>
                <h2>Clinical Overview & Patient Protocol</h2>
              </div>

              <div className="pro-accordion-stack">
                {service.accordions.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`pro-accordion-card ${isOpen ? 'is-open' : ''}`}
                      style={{ '--service-theme': service.themeColor }}
                    >
                      <button 
                        className="pro-accordion-header" 
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                      >
                        <span className="pro-accordion-title-text">{item.title}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="pro-accordion-arrow"
                        >
                          <FiChevronDown />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="pro-accordion-body-wrapper"
                          >
                            <div className="pro-accordion-body-content">
                              {item.content.map((paragraph, idx) => (
                                <p key={idx} className="pro-accordion-text-line">{paragraph}</p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Premium Doctor Bio Card */}
            <section className="pro-physician-profile-card">
              <div className="pro-physician-meta">
                <div className="pro-physician-icon-box">
                  <FiShield />
                </div>
                <div>
                  <h3>Department Head Insights</h3>
                  <p className="pro-sub">Evidence-Based Treatment Plans</p>
                </div>
              </div>
              <p className="pro-bio-text">
                All diagnostic procedures and therapeutic protocols for <strong>{service.title}</strong> are directly supervised by <strong>Dr. Shashi Kumar</strong>, delivering clinical excellence in nephrology and cutting-edge renal transplant operations.
              </p>
              <div className="pro-bullets-grid">
                <div className="pro-bullet-item"><FiCheckCircle style={{color: service.themeColor}} /> 16+ Years Academic & Clinical Excellence</div>
                <div className="pro-bullet-item"><FiCheckCircle style={{color: service.themeColor}} /> Modern Infection-Controlled Dialysis Ecosystem</div>
                <div className="pro-bullet-item"><FiCheckCircle style={{color: service.themeColor}} /> Dedicated Post-Transplant Immunosuppressive Monitoring</div>
              </div>
            </section>
          </main>

          {/* Right Column: Sticky Consultation Form & Info (Takes 35% width) */}
          <aside className="pro-sidebar-column">
            <div className="pro-sticky-sidebar-card">
              <div className="pro-sidebar-header" >
                <h3>Quick Consultation</h3>
                <p>Submit your details for a priority scheduling appointment.</p>
              </div>

              {/* Form Capture Elements */}
              <form className="pro-sidebar-form" onSubmit={handleWhatsAppSubmit}>
                <div className="pro-input-group">
                  <label><FiUser /> Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter Full Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="pro-input-group">
                  <label><FiPhone /> Contact Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter Phone Number" 
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required 
                  />
                </div>
                <div className="pro-input-group">
                  <label><FiMessageSquare /> Nature of Case / Query</label>
                  <select 
                    name="caseType"
                    value={formData.caseType}
                    onChange={(e) => setFormData(prev => ({ ...prev, caseType: e.target.value }))}
                  >
                    <option value="chronic-kidney-disease">CKD Management</option>
                    <option value="kidney-failure-treatment">Kidney Failure Care</option>
                    <option value="hemodialysis">Hemodialysis Unit</option>
                    <option value="peritoneal-dialysis">Peritoneal Dialysis (CAPD)</option>
                    <option value="kidney-transplant-consultation">Transplant Evaluation</option>
                    <option value="acute-kidney-injury">Acute Kidney Injury (AKI)</option>
                    <option value="diabetic-kidney-disease">Diabetic Kidney Disease</option>
                    <option value="hypertension-kidney-disorders">Hypertension Disorders</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="pro-submit-btn"
                  style={{ backgroundColor: service.themeColor }}
                >
                  <FiCalendar /> Send to WhatsApp
                </button>
              </form>

              <div className="pro-sidebar-divider"><span>OR CALL DIRECTLY</span></div>

              <div className="pro-sidebar-hotlines">
                <a href="tel:+917070337440" className="pro-hotline-anchor">
                  <div className="pro-hotline-icon"><FiPhone /></div>
                  <div>
                    <span className="pro-label">Emergency Helpline</span>
                    <span className="pro-number">+91 7070337440</span>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;