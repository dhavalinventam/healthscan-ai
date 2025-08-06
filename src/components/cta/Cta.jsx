import React from 'react';
import './Cta.scss';

const Cta = () => {
  const securityFeatures = [
    {
      id: 1,
      icon: "🔒",
      text: "Data Encrypted"
    },
    {
      id: 2,
      icon: "🏥",
      text: "HIPAA Compliant"
    },
    {
      id: 3,
      icon: "🤖",
      text: "AI-Powered"
    }
  ];

  const handleUploadClick = () => {
    // Handle upload button click
    console.log('Upload button clicked');
    // You can add your upload logic here
  };

  return (
    <section className="cta" role="region" aria-label="Call to action">
      <div className="container">
        <div className="cta-content">
          <div className="cta-header">
            <h2 className="cta-title">
              Ready to understand your medical reports?
            </h2>
          </div>
          
          <div className="cta-action">
            <button 
              className="cta-button"
              onClick={handleUploadClick}
              aria-label="Upload medical report"
            >
              <span className="button-text">Upload Now</span>
              <span className="button-icon">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 5V19M5 12L12 5L19 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="security-features">
            {securityFeatures.map((feature) => (
              <div key={feature.id} className="security-item">
                <span className="security-icon">{feature.icon}</span>
                <span className="security-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta; 