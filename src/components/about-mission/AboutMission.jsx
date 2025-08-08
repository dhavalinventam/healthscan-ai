import React, { useEffect, useRef } from "react";
import "./AboutMission.scss";

const AboutMission = () => {
  const missionRef = useRef(null);

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

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Easy to Understand",
      description: "Complex medical terms explained in simple language"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Secure & Private",
      description: "Your health data is protected with end-to-end encryption"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "AI-Powered Analysis",
      description: "Advanced technology for accurate interpretations"
    }
  ];

  return (
    <section className="about-mission" ref={missionRef}>
      <div className="container">
        <div className="mission-content">
          {/* Main Heading */}
          <div className="mission-header">
            <h2 className="mission-title">
              "We believe that understanding your health should not require a medical degree."
            </h2>
          </div>

          {/* Mission Statement */}
          <div className="mission-description">
            <p className="mission-text">
              At HealthScan AI, we're on a mission to bridge the gap between complex medical information and everyday understanding. Our innovative AI technology makes healthcare information accessible to everyone.
            </p>
            <p className="mission-text">
              By combining advanced artificial intelligence with healthcare expertise, we're creating a world where understanding your health is simple and straightforward.
            </p>
          </div>

                     {/* Feature Blocks */}
           <div className="mission-features">
             <div className="mission-features-grid">
               {features.map((feature, index) => (
                 <div key={index} className="mission-feature-card">
                   <div className="mission-feature-icon">
                     {feature.icon}
                   </div>
                   <h3 className="mission-feature-title">{feature.title}</h3>
                   <p className="mission-feature-description">{feature.description}</p>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
