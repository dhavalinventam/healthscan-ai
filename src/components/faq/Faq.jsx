import React, { useState } from 'react';
import './Faq.scss';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      title: "How secure is my medical data?",
      description: "We use bank-level encryption and follow HIPAA guidelines to ensure your data is completely secure.",
      icon: "🔒"
    },
    {
      id: 2,
      title: "What types of reports can you analyze?",
      description: "We can analyze blood tests, X-rays, MRIs, pathology reports, and various other medical reports.",
      icon: "📋"
    },
    {
      id: 3,
      title: "How accurate is the AI analysis?",
      description: "Our AI is trained on millions of medical reports and maintains high accuracy rates, but always consult with your healthcare provider.",
      icon: "🤖"
    },
    {
      id: 4,
      title: "Is there a free trial available?",
      description: "Yes, you can try HealthScan AI free for 14 days with full features.",
      icon: "🎁"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" role="region" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq-content">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="section-subtitle">
              Get answers to common questions about HealthScan AI
            </p>
          </div>
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div 
                key={item.id} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="question-content">
                    <span className="question-icon">{item.icon}</span>
                    <h3 className="question-title">{item.title}</h3>
                  </div>
                  <span className="accordion-icon">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div 
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="answer-content">
                    <p className="answer-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-footer">
            <p className="faq-footer-text">
              Still have questions? 
              <a href="/contact" className="contact-link"> Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq; 