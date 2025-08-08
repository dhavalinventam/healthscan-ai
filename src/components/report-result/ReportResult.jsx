import React, { useState, useEffect } from 'react';
import './ReportResult.scss';

const ReportResult = () => {
  const [expandedSections, setExpandedSections] = useState({
    redBloodCells: true,
    whiteBloodCells: true
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading animation
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const summaryCards = [
    {
      id: 'hemoglobin',
      title: 'Hemoglobin',
      value: '9.2 g/dL',
      status: 'Low',
      statusColor: 'red',
      icon: '⚠️',
      trend: 'decreasing'
    },
    {
      id: 'whiteBloodCells',
      title: 'White Blood Cells',
      value: '7.5 K/µL',
      status: 'Normal',
      statusColor: 'green',
      icon: '✅',
      trend: 'stable'
    },
    {
      id: 'platelets',
      title: 'Platelets',
      value: '250 K/µL',
      status: 'Slightly High',
      statusColor: 'yellow',
      icon: '⚠️',
      trend: 'increasing'
    },
    {
      id: 'hematocrit',
      title: 'Hematocrit',
      value: '30 %',
      status: 'Low',
      statusColor: 'red',
      icon: '⚠️',
      trend: 'decreasing'
    }
  ];

  const detailedResults = {
    redBloodCells: [
      {
        parameter: 'Hemoglobin',
        value: '9.2 g/dL',
        normalRange: '12-16',
        status: 'Low',
        statusColor: 'red',
        question: 'Should I consider an iron supplement?',
        explanation: 'This may suggest iron deficiency or anemia. Talk to your doctor.',
        aiInsight: 'AI detected a pattern consistent with iron deficiency. Consider dietary changes and consult your healthcare provider.'
      },
      {
        parameter: 'Hematocrit',
        value: '30 %',
        normalRange: '35-45',
        status: 'Low',
        statusColor: 'red',
        question: 'What are the causes of low hematocrit?',
        explanation: 'Low hematocrit can indicate reduced oxygen-carrying capacity.',
        aiInsight: 'Low hematocrit often correlates with hemoglobin levels. This combination suggests a systemic blood disorder.'
      }
    ],
    whiteBloodCells: [
      {
        parameter: 'WBC Count',
        value: '7.5 K/µL',
        normalRange: '4.5-11',
        status: 'Normal',
        statusColor: 'green',
        question: 'What factors can affect WBC count?',
        explanation: 'Your white blood cell count is within the normal range.',
        aiInsight: 'Your white blood cell count is healthy and indicates good immune system function.'
      }
    ]
  };

  const riskAssessment = {
    overallRisk: 'Moderate Risk',
    riskColor: 'orange',
    riskScore: 65,
    categories: [
      { label: 'Normal (40%)', color: 'green', description: 'Values within normal range', percentage: 40 },
      { label: 'Warning (30%)', color: 'orange', description: 'Slightly abnormal values', percentage: 30 },
      { label: 'Alert (30%)', color: 'red', description: 'Values requiring attention', percentage: 30 }
    ]
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Low':
        return '📉';
      case 'Normal':
        return '✅';
      case 'Slightly High':
        return '📈';
      default:
        return '⚠️';
    }
  };

  return (
    <div className={`report-result ${isLoaded ? 'loaded' : ''}`}>
              <div className="container">
          {/* Header */}
        <div className="report-header">
          <div className="header-left">
            <button className="back-button">
              <span className="back-icon">←</span>
              <span>Back to Upload</span>
            </button>
            <div className="title-section">
              <h1>Report Result</h1>
              <div className="ai-badge">
                <span className="ai-icon">🤖</span>
                <span>AI-Powered Analysis</span>
              </div>
            </div>
          </div>
          <div className="header-actions">
            <button className="action-btn secondary">
              <span className="icon">⬇</span>
              <span>Download</span>
            </button>
            <button className="action-btn secondary">
              <span className="icon">🖨</span>
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Report Title & Metadata */}
        <div className="report-meta">
          <div className="meta-header">
            <h2>Complete Blood Count – July 2025</h2>
            <div className="meta-badges">
              <span className="badge">CBC</span>
              <span className="badge">Recent</span>
            </div>
          </div>
          <div className="meta-info">
            <div className="info-item">
              <span className="label">Analyzed on</span>
              <span className="value">July 15, 2025</span>
            </div>
            <div className="info-item">
              <span className="label">Patient ID</span>
              <span className="value">#12345</span>
            </div>
            <div className="info-item">
              <span className="label">Report Type</span>
              <span className="value">Blood Test</span>
            </div>
          </div>
          <div className="ai-explanation">
            <div className="explanation-icon">💡</div>
            <div className="explanation-content">
              <h4>AI Analysis Summary</h4>
              <p>AI has analyzed your report and explained the results in simple terms below. Key findings have been highlighted for your attention.</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-section">
          <div className="section-header">
            <h3>Key Findings</h3>
            <p>Overview of your most important health parameters</p>
          </div>
          <div className="summary-cards">
            {summaryCards.map((card) => (
              <div key={card.id} className={`summary-card ${card.statusColor} ${card.trend}`}>
                <div className="card-header">
                  <div className="card-icon">
                    {getStatusIcon(card.status)}
                  </div>
                  <div className="trend-indicator">
                    {card.trend === 'increasing' && '↗️'}
                    {card.trend === 'decreasing' && '↘️'}
                    {card.trend === 'stable' && '→'}
                  </div>
                </div>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <div className="card-value">{card.value}</div>
                  <div className={`card-status ${card.statusColor}`}>
                    <span className="status-icon">{card.icon}</span>
                    <span className="status-text">{card.status}</span>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Results */}
        <div className="detailed-section">
          <div className="section-header">
            <h3>Detailed Analysis</h3>
            <p>Comprehensive breakdown of each parameter with AI insights</p>
          </div>
          
          {/* Red Blood Cells Section */}
          <div className="result-section">
            <div 
              className="section-header-collapsible" 
              onClick={() => toggleSection('redBloodCells')}
            >
              <div className="header-content">
                <h4>Red Blood Cells</h4>
                <span className="parameter-count">2 parameters</span>
              </div>
              <div className="header-actions">
                <span className={`expand-icon ${expandedSections.redBloodCells ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
            </div>
            {expandedSections.redBloodCells && (
              <div className="section-content">
                {detailedResults.redBloodCells.map((result, index) => (
                  <div key={index} className="result-card">
                    <div className="result-header">
                      <div className="parameter-info">
                        <h5>{result.parameter}</h5>
                        <div className="value-display">
                          <span className="current-value">{result.value}</span>
                          <span className="normal-range">Normal: {result.normalRange}</span>
                        </div>
                      </div>
                      <div className={`status-badge ${result.statusColor}`}>
                        <span className="status-icon">{getStatusIcon(result.status)}</span>
                        <span>{result.status}</span>
                      </div>
                    </div>
                    
                    <div className="result-details">
                      <div className="detail-row">
                        <span className="label">Current Value</span>
                        <span className="value">{result.value}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Normal Range</span>
                        <span className="value">{result.normalRange}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Status</span>
                        <span className={`value status ${result.statusColor}`}>{result.status}</span>
                      </div>
                    </div>

                    <div className="ai-insight">
                      <div className="insight-header">
                        <span className="ai-icon">🤖</span>
                        <span>AI Insight</span>
                      </div>
                      <p>{result.aiInsight}</p>
                    </div>

                    <div className="doctor-question">
                      <div className="question-header">
                        <span className="question-icon">❓</span>
                        <span>Question for Doctor</span>
                      </div>
                      <p>{result.question}</p>
                    </div>

                    <div className="explanation">
                      <p>{result.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* White Blood Cells Section */}
          <div className="result-section">
            <div 
              className="section-header-collapsible" 
              onClick={() => toggleSection('whiteBloodCells')}
            >
              <div className="header-content">
                <h4>White Blood Cells</h4>
                <span className="parameter-count">1 parameter</span>
              </div>
              <div className="header-actions">
                <span className={`expand-icon ${expandedSections.whiteBloodCells ? 'expanded' : ''}`}>
                  ▼
                </span>
              </div>
            </div>
            {expandedSections.whiteBloodCells && (
              <div className="section-content">
                {detailedResults.whiteBloodCells.map((result, index) => (
                  <div key={index} className="result-card">
                    <div className="result-header">
                      <div className="parameter-info">
                        <h5>{result.parameter}</h5>
                        <div className="value-display">
                          <span className="current-value">{result.value}</span>
                          <span className="normal-range">Normal: {result.normalRange}</span>
                        </div>
                      </div>
                      <div className={`status-badge ${result.statusColor}`}>
                        <span className="status-icon">{getStatusIcon(result.status)}</span>
                        <span>{result.status}</span>
                      </div>
                    </div>
                    
                    <div className="result-details">
                      <div className="detail-row">
                        <span className="label">Current Value</span>
                        <span className="value">{result.value}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Normal Range</span>
                        <span className="value">{result.normalRange}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Status</span>
                        <span className={`value status ${result.statusColor}`}>{result.status}</span>
                      </div>
                    </div>

                    <div className="ai-insight">
                      <div className="insight-header">
                        <span className="ai-icon">🤖</span>
                        <span>AI Insight</span>
                      </div>
                      <p>{result.aiInsight}</p>
                    </div>

                    <div className="doctor-question">
                      <div className="question-header">
                        <span className="question-icon">❓</span>
                        <span>Question for Doctor</span>
                      </div>
                      <p>{result.question}</p>
                    </div>

                    <div className="explanation">
                      <p>{result.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="risk-section">
          <div className="section-header">
            <h3>Risk Assessment</h3>
            <p>AI-powered risk analysis based on your results</p>
          </div>
          <div className="risk-assessment">
            <div className="risk-overview">
              <div className="overall-risk">
                <div className="risk-info">
                  <span className="risk-label">Overall Risk Level</span>
                  <span className={`risk-level ${riskAssessment.riskColor}`}>
                    {riskAssessment.overallRisk}
                  </span>
                </div>
                <div className="risk-score">
                  <div className="score-circle">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                      <circle 
                        cx="60" 
                        cy="60" 
                        r="54" 
                        fill="none" 
                        stroke="url(#gradient)" 
                        strokeWidth="8"
                        strokeDasharray={`${(riskAssessment.riskScore / 100) * 339.292} 339.292`}
                        strokeDashoffset="0"
                        transform="rotate(-90 60 60)"
                      />
                    </svg>
                    <div className="score-text">
                      <span className="score-number">{riskAssessment.riskScore}</span>
                      <span className="score-label">Risk Score</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="risk-breakdown">
                <h4>Risk Breakdown</h4>
                <div className="risk-categories">
                  {riskAssessment.categories.map((category, index) => (
                    <div key={index} className="risk-category">
                      <div className="category-header">
                        <span className={`category-dot ${category.color}`}>●</span>
                        <span className="category-label">{category.label}</span>
                        <span className="category-percentage">{category.percentage}%</span>
                      </div>
                      <div className="category-bar">
                        <div 
                          className={`bar-fill ${category.color}`} 
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <span className="category-desc">{category.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="actions-section">
          <div className="section-header">
            <h3>Next Steps</h3>
            <p>Actions you can take based on your results</p>
          </div>
          <div className="action-buttons">
            <button className="action-btn secondary">
              <span className="icon">🔊</span>
              <span>Read Aloud</span>
            </button>
            <button className="action-btn secondary">
              <span className="icon">🌐</span>
              <span>Change Language</span>
            </button>
            <button className="action-btn primary">
              <span className="icon">+</span>
              <span>Analyze Another Report</span>
            </button>
            <button className="action-btn secondary">
              <span className="icon">⬇</span>
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="disclaimer-content">
            <div className="disclaimer-icon">
              <span className="lock-icon">🔒</span>
            </div>
            <div className="disclaimer-text">
              <h4>Your Privacy is Protected</h4>
              <p>This report is not stored on our servers. Your data is encrypted and automatically deleted after your session ends. We never share your health information with third parties.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Definitions for gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0054D1" />
            <stop offset="100%" stopColor="#1E8BFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ReportResult;
