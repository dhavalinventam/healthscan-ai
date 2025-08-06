import React from 'react';
import './WhyChoose.scss';
import simpleLanguageIcon from '../../assets/Simple-Language-icon.png';
import bankLevelSecurityIcon from '../../assets/Bank-Level-Security-icon.png';
import voiceSupportIcon from '../../assets/Voice-Support-icon.png';
import multiLanguageIcon from '../../assets/Multi-Language-icon.png';

const WhyChoose = () => {
  const features = [
    {
      id: 1,
      icon: simpleLanguageIcon,
      title: "Simple Language",
      description: "Medical terms explained in everyday words"
    },
    {
      id: 2,
      icon: bankLevelSecurityIcon,
      title: "Bank-Level Security",
      description: "Your data is encrypted and protected"
    },
    {
      id: 3,
      icon: voiceSupportIcon,
      title: "Voice Support",
      description: "Get your reports read aloud"
    },
    {
      id: 4,
      icon: multiLanguageIcon,
      title: "Multi-Language",
      description: "Available in multiple languages"
    }
  ];

  return (
    <section className="why-choose" role="region" aria-label="Why choose HealthScan AI">
      <div className="container">
        <div className="why-choose-content">
          <div className="section-header">
            <h2 className="section-title">Why Choose HealthScan AI</h2>
          </div>
          <div className="row" style={{ rowGap: '24px' }}>
            {features.map((feature) => (
              <div key={feature.id} className="col-lg-6 col-md-6 col-sm-12">
                <div className="feature-card">
                  <div className="feature-icon">
                    <img 
                      src={feature.icon} 
                      alt={`${feature.title} icon`}
                      className="feature-icon-image"
                    />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 