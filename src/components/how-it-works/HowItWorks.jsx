import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Start the demo sequence
            startDemoSequence();
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

  const startDemoSequence = () => {
    // Step 1: Show timeline animation
    setTimeout(() => {
      setActiveStep(1);
    }, 1000);

    // Step 2: Start analysis
    setTimeout(() => {
      setIsAnalyzing(true);
      setActiveStep(2);
    }, 3000);

    // Step 3: Show results
    setTimeout(() => {
      setIsAnalyzing(false);
      setActiveStep(3);
      setAnimatedValues({
        hemoglobin: 14.2,
        wbc: 11.5,
        platelets: 150
      });
    }, 5000);
  };

  const bloodTestData = [
    {
      parameter: "Hemoglobin",
      value: 14.2,
      unit: "g/dL",
      status: "normal",
      range: "13.5-17.5 g/dL",
      tip: "Hemoglobin carries oxygen in your blood. Normal levels indicate good oxygen delivery to tissues.",
      color: "#10B981"
    },
    {
      parameter: "White Blood Cells",
      value: 11.5,
      unit: "K/µL",
      status: "elevated",
      range: "4.5-11.0 K/µL",
      tip: "Elevated WBC count may indicate infection, inflammation, or stress response.",
      color: "#F59E0B"
    },
    {
      parameter: "Platelets",
      value: 150,
      unit: "K/µL",
      status: "normal",
      range: "150-450 K/µL",
      tip: "Platelets help with blood clotting. Your levels are within normal range.",
      color: "#10B981"
    }
  ];

  const timelineSteps = [
    {
      step: 1,
      title: "Upload Report",
      description: "Upload your medical report in any format",
      icon: "📄",
      status: "completed"
    },
    {
      step: 2,
      title: "AI Analysis",
      description: "Our AI analyzes every detail of your report",
      icon: "🤖",
      status: isAnalyzing ? "active" : "pending"
    },
    {
      step: 3,
      title: "Get Results",
      description: "Receive clear, actionable insights instantly",
      icon: "✨",
      status: activeStep >= 3 ? "completed" : "pending"
    }
  ];

  return (
    <section className="how-it-works" role="region" aria-label="How it works demonstration" ref={sectionRef}>
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-pattern"></div>
      </div>

      <div className="container">
        <div className="how-it-works-content">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">🔬 Live Demo</span>
            </div>
            <h2 className="section-title">
              See How It 
              <span className="gradient-text"> Works</span>
            </h2>
            <p className="section-subtitle">
              Watch our AI transform complex medical data into clear, actionable insights
            </p>
          </div>
          
          {/* Enhanced Timeline */}
          <div className="timeline-section">
            <div className="timeline">
              {timelineSteps.map((step, index) => (
                <div key={step.step} className={`timeline-item ${step.status}`}>
                  <div className="timeline-marker">
                    <div className="marker-number">{step.step}</div>
                    <div className="marker-icon">{step.icon}</div>
                    {step.status === 'active' && (
                      <div className="marker-pulse"></div>
                    )}
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-description">{step.description}</p>
                    {step.status === 'active' && (
                      <div className="timeline-status">
                        <span className="status-dot"></span>
                        <span className="status-text">Processing...</span>
                      </div>
                    )}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className={`timeline-connector ${step.status}`}>
                      <div className="connector-line"></div>
                      <div className="connector-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Demo Section */}
          <div className="demo-section">
            <div className="demo-container">
              <div className="report-panel">
                <div className="panel-header">
                  <h3 className="panel-title">
                    <span className="title-icon">📊</span>
                    Sample Blood Test Report
                  </h3>
                  <div className="panel-status">
                    <span className={`status-indicator ${isAnalyzing ? 'analyzing' : 'ready'}`}></span>
                    <span className="status-text">
                      {isAnalyzing ? 'AI Analyzing...' : 'Ready'}
                    </span>
                  </div>
                </div>
                
                <div className="report-data">
                  {bloodTestData.map((item, index) => (
                    <div 
                      key={index} 
                      className={`data-row ${item.status} ${isAnalyzing ? 'analyzing' : ''}`} 
                      title={item.tip}
                      style={{ '--status-color': item.color }}
                    >
                      <div className="parameter-info">
                        <div className="parameter-name">{item.parameter}</div>
                        <div className="parameter-range">{item.range}</div>
                      </div>
                      <div className={`value-display ${item.status}`}>
                        <div className="value-number">
                          {animatedValues[item.parameter.toLowerCase().replace(/\s+/g, '')] || 0}
                        </div>
                        <div className="value-unit">{item.unit}</div>
                        <div className="status-indicator">
                          {item.status === 'normal' ? '✓' : '⚠'}
                        </div>
                      </div>
                      {isAnalyzing && (
                        <div className="analysis-progress">
                          <div className="progress-bar">
                            <div className="progress-fill"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="explanation-panel">
                <div className="panel-header">
                  <h3 className="panel-title">
                    <span className="title-icon">🤖</span>
                    AI Explanation
                  </h3>
                  <div className="ai-status">
                    <span className="ai-indicator"></span>
                    <span className="ai-text">AI Powered</span>
                  </div>
                </div>
                
                <div className="explanation-content">
                  {activeStep >= 3 ? (
                    <>
                      <div className="explanation-summary">
                        <div className="summary-header">
                          <span className="summary-icon">📋</span>
                          <span className="summary-title">Report Summary</span>
                        </div>
                        <p className="summary-text">
                          Your blood test shows mostly normal results with one elevated value that may need attention.
                        </p>
                      </div>
                      
                      <div className="explanation-details">
                        <div className="detail-item normal">
                          <div className="detail-icon">✅</div>
                          <div className="detail-content">
                            <div className="detail-title">Hemoglobin - Normal</div>
                            <div className="detail-text">Good oxygen-carrying capacity</div>
                          </div>
                        </div>
                        
                        <div className="detail-item warning">
                          <div className="detail-icon">⚠️</div>
                          <div className="detail-content">
                            <div className="detail-title">WBC - Elevated</div>
                            <div className="detail-text">May indicate infection or inflammation</div>
                          </div>
                        </div>
                        
                        <div className="detail-item normal">
                          <div className="detail-icon">✅</div>
                          <div className="detail-content">
                            <div className="detail-title">Platelets - Normal</div>
                            <div className="detail-text">Healthy blood clotting function</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="recommendation">
                        <div className="recommendation-header">
                          <span className="recommendation-icon">💡</span>
                          <span className="recommendation-title">Recommendation</span>
                        </div>
                        <p className="recommendation-text">
                          Discuss the elevated white blood cell count with your doctor. Consider follow-up testing if symptoms persist.
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="loading-state">
                      <div className="loading-animation">
                        <div className="loading-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <p className="loading-text">
                        {isAnalyzing ? 'Analyzing your medical report...' : 'Waiting for analysis to begin...'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats */}
          <div className="demo-stats">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">30s</div>
                <div className="stat-label">Analysis Time</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Accuracy</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔒</div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Secure</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="demo-cta">
            <p className="cta-text">Ready to analyze your own medical reports?</p>
            <button className="cta-button">
              <span className="button-text">Try It Free</span>
              <span className="button-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 