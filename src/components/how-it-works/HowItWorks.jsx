import React from 'react';
import './HowItWorks.scss';

const HowItWorks = () => {
  const bloodTestData = [
    {
      parameter: "Hemoglobin",
      value: "14.2 g/dL",
      status: "normal",
      range: "13.5-17.5 g/dL"
    },
    {
      parameter: "White Blood Cells",
      value: "11.5 K/µL",
      status: "elevated",
      range: "4.5-11.0 K/µL"
    },
    {
      parameter: "Platelets",
      value: "150 K/µL",
      status: "normal",
      range: "150-450 K/µL"
    }
  ];

  return (
    <section className="how-it-works" role="region" aria-label="How it works demonstration">
      <div className="container">
        <div className="how-it-works-content">
          <div className="section-header">
            <h2 className="section-title">See How It Works</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="report-card">
                <h3 className="card-title">Sample Blood Test Report</h3>
                <div className="report-data">
                  {bloodTestData.map((item, index) => (
                    <div key={index} className="data-row">
                      <div className="parameter">{item.parameter}</div>
                      <div className={`value ${item.status}`}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="explanation-card">
                <h3 className="card-title">AI Explanation</h3>
                <div className="explanation-content">
                  <p className="explanation-text">
                    Your hemoglobin levels are normal, indicating good oxygen-carrying capacity. 
                    However, your white blood cell count is slightly elevated, which may indicate 
                    an infection or inflammation. We recommend discussing this with your doctor.
                  </p>
                  <div className="normal-range">
                    <span className="check-icon">✓</span>
                    <span className="range-text">Normal Range: 13.5-17.5 g/dL</span>
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

export default HowItWorks; 