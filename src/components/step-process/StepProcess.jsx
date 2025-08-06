import React from 'react';
import './StepProcess.scss';
import uploadReportIcon from '../../assets/Upload-Report-icon.png';
import aiAnalysisIcon from '../../assets/AI-Analysis-icon.png';
import simpleExplanationIcon from '../../assets/Simple-Explanation-icon.png';
import getRecommendationsIcon from '../../assets/Get-Recommendations-icon.png';

const StepProcess = () => {
  const steps = [
    {
      id: 1,
      icon: uploadReportIcon,
      title: "Upload Report",
      description: "Simply upload your medical report"
    },
    {
      id: 2,
      icon: aiAnalysisIcon,
      title: "AI Analysis",
      description: "Our AI analyzes your results"
    },
    {
      id: 3,
      icon: simpleExplanationIcon,
      title: "Simple Explanation",
      description: "Get clear, easy-to-understand results"
    },
    {
      id: 4,
      icon: getRecommendationsIcon,
      title: "Get Recommendations",
      description: "Receive expert suggestions"
    }
  ];

  return (
    <section className="step-process" role="region" aria-label="How it works process">
      <div className="container">
        <div className="step-process-content">
          <div className="section-header">
            <h2 className="section-title">Simple 4-Step Process</h2>
          </div>
          <div className="row">
            {steps.map((step) => (
              <div key={step.id} className="col-lg-3 col-md-6 col-sm-6">
                <div className="step-card">
                  <div className="step-icon">
                    <img 
                      src={step.icon} 
                      alt={`${step.title} icon`}
                      className="step-icon-image"
                    />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepProcess; 