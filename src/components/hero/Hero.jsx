import React, { useEffect, useRef } from "react";
import Button from "../button";
import "./Hero.scss";

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" role="banner" aria-label="Main hero section" ref={heroRef}>
      {/* AI-themed background elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">🤖 AI-Powered Medical Analysis</span>
              </div>
              
              <h1 className="hero-title">
                Understand Your Medical Reports in 
                <span className="gradient-text"> Seconds</span>
              </h1>
              
              <p className="hero-description">
                Let AI explain your medical reports in simple language. Get
                clear insights and expert recommendations with bank-level security.
              </p>
              
              <div className="hero-cta">
                <Button
                  variant="fill"
                  size="large"
                  className="hero-btn primary-btn"
                  aria-label="Try HealthScan AI for free"
                >
                  <span className="btn-text">Try It Free</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  size="large"
                  className="hero-btn secondary-btn"
                  aria-label="Watch demo video"
                >
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <span className="btn-text">Watch Demo</span>
                </Button>
              </div>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Reports Analyzed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Accuracy Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">AI Support</div>
                </div>
              </div>
              
              <div className="hero-badges">
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text">Bank-Level Security</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 11H15M9 15H15M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text">HIPAA Compliant</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="badge-text">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 col-xl-6">
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                <img
                  src="../../../src/assets/hero-banner-img.png"
                  alt="AI-powered medical report analysis interface"
                  className="hero-banner-img"
                />
                <div className="image-overlay">
                  <div className="floating-card card-1">
                    <div className="card-icon">⚡</div>
                    <div className="card-text">30s Analysis</div>
                  </div>
                  <div className="floating-card card-2">
                    <div className="card-icon">🔒</div>
                    <div className="card-text">100% Secure</div>
                  </div>
                  <div className="floating-card card-3">
                    <div className="card-icon">🎯</div>
                    <div className="card-text">99.9% Accurate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
