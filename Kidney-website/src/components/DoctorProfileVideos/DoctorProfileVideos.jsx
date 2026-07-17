import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion इम्पोर्टेड
import './DoctorProfileVideos.css';
import featureVideos from "../../assets/image/dr.shashi-kumar-feature-videos.mp4";
import featurethumbnal from "../../assets/image/feature-thumbnal.png";


const DoctorCyberHub = () => {
  
  const profileSegments = [
    {
      id: "intro",
      tabTitle: "01. LEGACY",
      title: "How to Protect Your Kidneys Naturally | Expert Tips",
      subtitle: "Expert Medical Insights",
      tagline: "Trusted by thousands",
      desc: "Evidence-based knowledge, advanced treatments, and patient-first care.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://youtu.be/l2XqrmeMcg8?si=O6asNTpYS0FvJTqH",
      stat: "25+",
      statLabel: "Years Experience",
      iconType: "experience",
      duration: "8:45",
      views: "3.2K views",
      timeAgo: "3 days ago"
    },
    {
      id: "kidney",
      tabTitle: "02. NEPHROLOGY",
      title: "Dialysis Explained Step by Step | Patient Guide",
      subtitle: "Advanced Treatment",
      tagline: "Latest & safest care",
      desc: "Deep-dive into advanced therapies for chronic kidney diseases (CKD).",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://youtu.be/RoRzsGnhl2g?si=h2v4tYeSsTrLI0UQ",
      stat: "10K+",
      statLabel: "Patients Treated",
      iconType: "patients",
      duration: "10:12",
      views: "5.6K views",
      timeAgo: "1 week ago"
    },
    {
      id: "lab",
      tabTitle: "03. DIAGNOSTICS",
      title: "Inside Our Advanced ICU Infrastructure",
      subtitle: "Patient Education",
      tagline: "Empowering better health",
      desc: "Exploring our fully automated testing systems.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-with-a-microscope-in-a-laboratory-40552-large.mp4",
      youtubeUrl: "https://youtu.be/Vhne9yfYp2U?si=vVD-462ObX7d9_OI",
      stat: "1M+",
      statLabel: "YouTube Views",
      iconType: "views",
      duration: "9:18",
      views: "4.7K views",
      timeAgo: "2 weeks ago"
    },
    {
      id: "facility",
      tabTitle: "04. INFRASTRUCTURE",
      title: "Best Diet for Kidney Patients | Dr. Shashi Kumar",
      subtitle: "Compassionate Care",
      tagline: "Patients come first",
      desc: "A presentation of our high-hygiene recovery beds.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hospital-ward-with-empty-beds-and-medical-equipment-40548-large.mp4",
      youtubeUrl: "https://youtu.be/eJpgmry4fHk?si=8T7auIsKd9Gk1iP5",
      stat: "15+",
      statLabel: "Awards & Honors",
      iconType: "awards",
      duration: "7:36",
      views: "6.1K views",
      timeAgo: "3 weeks ago"
    },
    {
      id: "extra1",
      tabTitle: "05. DIET",
      title: "Kidney Detox Drinks Myths vs Facts",
      subtitle: "Healthy Nutrition",
      tagline: "Eat clean, live long",
      desc: "The truth behind popular kidney detox juices.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://youtu.be/Ht0QPM17y54?si=eUtVwj_8EPPtTkNZ",
      stat: "50+",
      statLabel: "Health Seminars",
      iconType: "experience",
      duration: "5:20",
      views: "1.8K views",
      timeAgo: "1 month ago"
    },
    {
      id: "extra2",
      tabTitle: "06. CARE",
      title: "Early Signs of Kidney Issues You Shouldn't Ignore",
      subtitle: "Symptoms Awareness",
      tagline: "Early detection saves lives",
      desc: "Understand critical warning signs of early kidney diseases.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://youtu.be/QbPxBK9iwNM?si=wOkFYdmd9rAgzUQN",
      stat: "500+",
      statLabel: "Successful Transplants",
      iconType: "patients",
      duration: "12:40",
      views: "9.3K views",
      timeAgo: "1 month ago"
    },
    {
      id: "extra3",
      tabTitle: "07. HEALTH",
      title: "Kidney Disease Prevention Guide",
      subtitle: "Medical Guidance",
      tagline: "Stay safe, stay healthy",
      desc: "Important medical guidelines for kidney care.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-scientist-working-with-a-microscope-in-a-laboratory-40552-large.mp4",
      youtubeUrl: "https://youtu.be/2fs0uBS0Umw?si=e1-BwpItND-zBm62",
      stat: "300+",
      statLabel: "Consultations",
      iconType: "experience",
      duration: "11:15",
      views: "2.5K views",
      timeAgo: "1 month ago"
    },
    {
      id: "extra4",
      tabTitle: "08. LIVE",
      title: "Kidney Care Live Q&A Session",
      subtitle: "Live Stream",
      tagline: "Interact with experts live",
      desc: "Answering critical questions about kidney health live.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-in-a-clinic-41617-large.mp4",
      youtubeUrl: "https://www.youtube.com/live/0d9-L3azrP8?si=x4JM5a3ZL0nI0fbU",
      stat: "5K+",
      statLabel: "Live Viewers",
      iconType: "views",
      duration: "45:00",
      views: "12K views",
      timeAgo: "2 months ago"
    },
    {
      id: "extra5",
      tabTitle: "09. TREATMENT",
      title: "Chronic Kidney Disease Management",
      subtitle: "Advanced Care",
      tagline: "Better life through care",
      desc: "How to manage CKD effectively.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-medical-equipment-in-a-surgical-room-40544-large.mp4",
      youtubeUrl: "https://youtu.be/NlPxrWKrbmU?si=Mzt2mpw_LK03aKO7",
      stat: "40+",
      statLabel: "Expert Doctors",
      iconType: "experience",
      duration: "14:20",
      views: "7.1K views",
      timeAgo: "2 months ago"
    },
    {
      id: "extra6",
      tabTitle: "10. NUTRITION",
      title: "Superfoods for Kidney Health",
      subtitle: "Dietary Routine",
      tagline: "Fuel your body right",
      desc: "Top recommended superfoods for a healthy kidney.",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hospital-ward-with-empty-beds-and-medical-equipment-40548-large.mp4",
      youtubeUrl: "https://youtu.be/mdukTArrmH0?si=qJQilTKhcMjn4erg",
      stat: "80+",
      statLabel: "Diet Plans Created",
      iconType: "awards",
      duration: "8:05",
      views: "4.2K views",
      timeAgo: "3 months ago"
    }
  ];

  const featuredVideo = profileSegments[0];
  const [isMainPlaying, setIsMainPlaying] = useState(false);
  const [popupVideo, setPopupVideo] = useState(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const visibleVideos = showAllVideos ? profileSegments : profileSegments.slice(0, 4);

  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/live/')) {
      videoId = url.split('youtube.com/live/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getYoutubeThumbnail = (url) => {
    if (!url) return '';
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/live/')) {
      videoId = url.split('youtube.com/live/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; 
  };

  // नीचे से ऊपर आने का एनीमेशन वेरिएंट जो स्क्रॉल-बैक करने पर वापस नीचे चला जाएगा
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // पैरेंट स्टैगर इफ़ेक्ट - जो अपने अंदर के बच्चों को एक-एक करके एनिमेट करेगा
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const renderIcon = (type) => {
    switch (type) {
      case 'experience':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'patients':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case 'views':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
          </svg>
        );
      case 'awards':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className="dark-kiosk-wrapper reveal-on-scroll">
      
      {/* 1. हीरो सेक्शन */}
      <div className="dark-kiosk-hero">
        <div className="dark-kiosk-hero-left">
          
          <motion.h1 
            className="dark-kiosk-headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} // once: false से यह ऊपर स्क्रॉल करने पर दोबारा ट्रिगर होगा
            transition={{ duration: 0.6 }}
          >
            EXPERT INSIGHTS.<br />
            BETTER KIDNEY CARE.<br />
            <span className="accent-teal">HEALTHIER LIVES.</span>
          </motion.h1>
          
          <motion.div 
            className="accent-bar-teal"
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="dark-kiosk-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Evidence-based knowledge, advanced treatments, and patient-first care.<br />
            Watch, Learn & Stay Healthy.
          </motion.p>

          <motion.div 
            className="dark-kiosk-cta-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button onClick={() => setIsMainPlaying(true)} className="btn-solid-teal" style={{ border: 'none', cursor: 'pointer' }}>
              <svg className="icon-play" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Latest Video
            </button>
            <button className="btn-outline-dark">Subscribe</button>
          </motion.div>

          {/* स्टेट्स बॉक्स एनीमेशन जो स्क्रॉल होने पर एक के बाद एक (Staggered) नीचे से ऊपर आएँगे */}
          <motion.div 
            className="dark-kiosk-stats-row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // viewport से बाहर जाने पर रीसेट हो जाएगा
          >
            {profileSegments.slice(0, 4).map((seg) => (
              <motion.div key={seg.id} className="stat-item-box" variants={fadeInUp}>
                <div className="stat-icon-wrapper">
                  {renderIcon(seg.iconType)}
                </div>
                <div className="stat-text-group">
                  <span className="stat-number-text">{seg.stat}</span>
                  <span className="stat-label-text">{seg.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* राइट साइड का सिनेमा थंबनेल व्यू-पोर्ट */}
        <div className="dark-kiosk-hero-right">
          <motion.div 
            className="cinema-viewport-card" 
            style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isMainPlaying ? (
              <video
                key={featuredVideo.id}
                src={featureVideos}
                title={featuredVideo.title}
                className="viewport-video-element"
                style={{ width: '100%', height: '100%', border: 'none', objectFit: 'cover' }}
                controls
                autoPlay
              />
            ) : (
              <div 
                className="video-thumbnail-placeholder" 
                onClick={() => setIsMainPlaying(true)} 
                style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
              >
                <img 
                  src={featurethumbnal} 
                  alt={featuredVideo.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="video-play-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <motion.div 
                    className="play-circle" 
                    style={{
                      width: '70px', height: '70px', backgroundColor: '#008080',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', 
                      justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* 2. मिडल फीचर्स रिबन */}
      <motion.div 
        className="dark-kiosk-features-ribbon"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {profileSegments.slice(0, 4).map((seg) => (
          <motion.div key={seg.id} className="ribbon-feature-card" variants={fadeInUp}>
            <div className="feature-icon-wrapper">
              {renderIcon(seg.iconType)}
            </div>
            <div className="feature-card-text">
              <h4 className="feature-main-title">{seg.subtitle}</h4>
              <p className="feature-sub-tagline">{seg.tagline}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. नीचे का वीडियो गैलरी सेक्शन */}
      <div className="dark-kiosk-gallery-section">
        
        {/* गैलरी हेडर */}
        <motion.div 
          className="gallery-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gallery-section-title">LATEST VIDEOS</h2>
          
          {profileSegments.length > 4 && (
            <span 
              className="gallery-view-all-link" 
              onClick={() => setShowAllVideos(!showAllVideos)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {showAllVideos ? "View less videos" : "View more videos"} 
              <svg 
                className="icon-arrow-right" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ 
                  transform: showAllVideos ? 'rotate(-90deg)' : 'rotate(90deg)', 
                  transition: 'transform 0.3s ease',
                  marginLeft: '5px'
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          )}
        </motion.div>

        {/* ग्रिड के अंदर के थंबनेल कार्ड्स स्क्रॉल करने पर एक-एक करके पॉप होंगे */}
        <motion.div 
          className="gallery-thumbnails-grid" 
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {visibleVideos.map((seg) => {
            return (
              <motion.div 
                key={seg.id} 
                className="thumbnail-video-card"
                onClick={() => setPopupVideo(seg)} 
                style={{ cursor: 'pointer' }}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="thumbnail-preview-frame" >
                  <img 
                    src={getYoutubeThumbnail(seg.youtubeUrl)} 
                    alt={seg.title} 
                    className="thumbnail-bg-video" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="thumbnail-duration-badge">{seg.duration}</div>
                </div>
                <div className="thumbnail-card-body">
                  <h3 className="thumbnail-video-title">{seg.title}</h3>
                  <div className="thumbnail-meta-row">
                    <span>{seg.views}</span>
                    <span className="meta-separator">•</span>
                    <span>{seg.timeAgo}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* वीडियो पॉपअप मोडल */}
      <AnimatePresence>
        {popupVideo && (
          <motion.div 
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', zIndex: 9999
            }} 
            onClick={() => setPopupVideo(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              style={{
                position: 'relative', width: '90%', maxWidth: '800px', 
                backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }} 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <button 
                onClick={() => setPopupVideo(null)} 
                style={{
                  position: 'absolute', top: '15px', right: '15px', 
                  background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', 
                  fontSize: '18px', padding: '5px 12px', borderRadius: '50%', 
                  cursor: 'pointer', zIndex: 10
                }}
              >
                ✕
              </button>

              <div style={{ aspectRatio: '16/9', width: '100%' }}>
                <iframe 
                  src={`${getYoutubeEmbedUrl(popupVideo.youtubeUrl)}?autoplay=1`}
                  title={popupVideo.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div style={{ padding: '20px', color: '#fff' }}>
                <span style={{ color: '#008080', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>{popupVideo.subtitle}</span>
                <h3 style={{ margin: '10px 0', fontSize: '20px' }}>{popupVideo.title}</h3>
                <p style={{ color: '#aaa', fontSize: '14px', margin: 0 }}>{popupVideo.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorCyberHub;