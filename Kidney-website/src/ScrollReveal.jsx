import { useEffect } from 'react';

const ScrollReveal = (selector = '.reveal-on-scroll', threshold = 0.15) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // एक बार एनिमेशन होने के बाद ट्रैक करना बंद
        }
      });
    }, observerOptions);

    // टारगेट एलिमेंट्स को ढूंढें और ऑब्जर्व करें
    const revealElements = document.querySelectorAll(selector);
    revealElements.forEach(el => observer.observe(el));

    // क्लीनअप फंक्शन (मेमोरी लीक से बचने के लिए)
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [selector, threshold]); // अगर सेलेक्टर या थ्रेशोल्ड बदलेगा तो दोबारा चलेगा
};

export default ScrollReveal;