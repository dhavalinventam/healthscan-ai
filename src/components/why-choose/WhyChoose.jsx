import React, { useEffect, useRef } from 'react';
import './WhyChoose.scss';
import simpleLanguageIcon from '../../assets/Simple-Language-icon.png';
import bankLevelSecurityIcon from '../../assets/Bank-Level-Security-icon.png';
import voiceSupportIcon from '../../assets/Voice-Support-icon.png';
import multiLanguageIcon from '../../assets/Multi-Language-icon.png';

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      icon: simpleLanguageIcon,
      title: "Simple Language",
      description: "Medical terms explained in everyday words that anyone can understand",
      color: "#0056D2",
      gradient: "linear-gradient(135deg, #0056D2, #1D8BFF)"
    },
    {
      id: 2,
      icon: bankLevelSecurityIcon,
      title: "Bank-Level Security",
      description: "Your data is encrypted with military-grade security protocols",
      color: "#26A69A",
      gradient: "linear-gradient(135deg, #26A69A, #4DB6AC)"
    },
    {
      id: 3,
      icon: voiceSupportIcon,
      title: "Voice Support",
      description: "Get your reports read aloud with natural-sounding AI voice",
      color: "#1D8BFF",
      gradient: "linear-gradient(135deg, #1D8BFF, #4DB6AC)"
    },
    {
      id: 4,
      icon: multiLanguageIcon,
      title: "Multi-Language",
      description: "Available in 50+ languages for global accessibility",
      color: "#4DB6AC",
      gradient: "linear-gradient(135deg, #4DB6AC, #26A69A)"
    }
  ];

  return (
    <section className="why-choose" role="region" aria-label="Why choose HealthScan AI" ref={sectionRef}>
      {/* Background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        <div className="why-choose-content">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">✨ What Makes Us Different</span>
            </div>
            <h2 className="section-title">
              Why Choose 
              <span className="gradient-text"> HealthScan AI</span>
            </h2>
            <p className="section-subtitle">
              Experience the future of medical report analysis with cutting-edge AI technology
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card" style={{ '--feature-color': feature.color, '--feature-gradient': feature.gradient }}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg">
                    <img 
                      src={feature.icon} 
                      alt={`${feature.title} icon`}
                      className="feature-icon-image"
                    />
                  </div>
                  <div className="feature-glow"></div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
                
                <div className="feature-hover-effect">
                  <div className="hover-bg"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <div className="trust-content">
                <div className="trust-title">Industry Leader</div>
                <div className="trust-subtitle">Trusted by 100K+ healthcare professionals</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🔬</div>
              <div className="trust-content">
                <div className="trust-title">Medical Grade</div>
                <div className="trust-subtitle">FDA-compliant & HIPAA certified</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⚡</div>
              <div className="trust-content">
                <div className="trust-title">Lightning Fast</div>
                <div className="trust-subtitle">AI analysis in under 30 seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 