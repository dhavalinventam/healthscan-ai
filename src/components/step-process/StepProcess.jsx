import React, { useEffect, useRef } from 'react';
import './StepProcess.scss';
import uploadReportIcon from '../../assets/Upload-Report-icon.png';
import aiAnalysisIcon from '../../assets/AI-Analysis-icon.png';
import simpleExplanationIcon from '../../assets/Simple-Explanation-icon.png';
import getRecommendationsIcon from '../../assets/Get-Recommendations-icon.png';

const StepProcess = () => {
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

  const steps = [
    {
      id: 1,
      icon: uploadReportIcon,
      title: "Upload Report",
      description: "Simply upload your medical report in any format - PDF, image, or document",
      color: "#0056D2"
    },
    {
      id: 2,
      icon: aiAnalysisIcon,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your results with 99.9% accuracy",
      color: "#1D8BFF"
    },
    {
      id: 3,
      icon: simpleExplanationIcon,
      title: "Simple Explanation",
      description: "Get clear, easy-to-understand results in plain language",
      color: "#26A69A"
    },
    {
      id: 4,
      icon: getRecommendationsIcon,
      title: "Get Recommendations",
      description: "Receive expert suggestions and actionable insights",
      color: "#4DB6AC"
    }
  ];

  return (
    <section className="step-process" role="region" aria-label="How it works process" ref={sectionRef}>
      <div className="container">
        <div className="step-process-content">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">📋 Simple Process</span>
            </div>
            <h2 className="section-title">
              Get Your Medical Report Analysis in 
              <span className="gradient-text"> 4 Easy Steps</span>
            </h2>
            <p className="section-subtitle">
              Our AI-powered platform makes understanding your health reports simple and secure
            </p>
          </div>
          
          <div className="steps-container">
            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <div key={step.id} className="step-card" style={{ '--step-color': step.color }}>
                  <div className="step-number">
                    <span className="number">{step.id}</span>
                  </div>
                  
                  <div className="step-icon-wrapper">
                    <div className="step-icon-bg" style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)` }}>
                      <img 
                        src={step.icon} 
                        alt={`${step.title} icon`}
                        className="step-icon-image"
                      />
                    </div>
                  </div>
                  
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="step-connector">
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
          
          <div className="process-stats">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">30s</div>
                <div className="stat-label">Average Analysis Time</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">AI Accuracy Rate</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔒</div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-label">Data Security & Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepProcess; 