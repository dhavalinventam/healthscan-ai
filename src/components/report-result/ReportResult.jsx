import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import './ReportResult.scss';

const ReportResult = () => {
  // const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({
    redBloodCells: true,
    whiteBloodCells: true
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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

  // Removed back-to-upload action per request

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here you would implement actual PDF generation and download
      console.log('Downloading report...');
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = async () => {
    setIsPrinting(true);
    try {
      // Simulate print process
      await new Promise(resolve => setTimeout(resolve, 500));
      window.print();
    } catch (error) {
      console.error('Print failed:', error);
    } finally {
      setIsPrinting(false);
    }
  };

  // Removed read-aloud, language change, and analyze-another actions as actions-section is removed

  const summaryCards = [
    {
      id: 'hemoglobin',
      title: 'Hemoglobin',
      value: '9.2 g/dL',
      status: 'Low',
      statusColor: 'red',
      icon: '🩸',
      trend: 'decreasing',
      description: 'Oxygen-carrying protein in red blood cells',
      priority: 'high'
    },
    {
      id: 'whiteBloodCells',
      title: 'White Blood Cells',
      value: '7.5 K/µL',
      status: 'Normal',
      statusColor: 'green',
      icon: '🛡️',
      trend: 'stable',
      description: 'Immune system cells that fight infection',
      priority: 'normal'
    },
    {
      id: 'platelets',
      title: 'Platelets',
      value: '250 K/µL',
      status: 'Slightly High',
      statusColor: 'yellow',
      icon: '🩹',
      trend: 'increasing',
      description: 'Blood cells that help with clotting',
      priority: 'medium'
    },
    {
      id: 'hematocrit',
      title: 'Hematocrit',
      value: '30 %',
      status: 'Low',
      statusColor: 'red',
      icon: '📊',
      trend: 'decreasing',
      description: 'Percentage of blood volume occupied by red cells',
      priority: 'high'
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
        aiInsight: 'AI detected a pattern consistent with iron deficiency. Consider dietary changes and consult your healthcare provider.',
        severity: 'moderate',
        recommendations: ['Increase iron-rich foods', 'Consider iron supplements', 'Follow up with doctor']
      },
      {
        parameter: 'Hematocrit',
        value: '30 %',
        normalRange: '35-45',
        status: 'Low',
        statusColor: 'red',
        question: 'What are the causes of low hematocrit?',
        explanation: 'Low hematocrit can indicate reduced oxygen-carrying capacity.',
        aiInsight: 'Low hematocrit often correlates with hemoglobin levels. This combination suggests a systemic blood disorder.',
        severity: 'moderate',
        recommendations: ['Monitor symptoms', 'Check for underlying causes', 'Consider dietary changes']
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
        aiInsight: 'Your white blood cell count is healthy and indicates good immune system function.',
        severity: 'normal',
        recommendations: ['Maintain healthy lifestyle', 'Continue regular checkups']
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

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return '🔴';
      case 'moderate':
        return '🟡';
      case 'normal':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div className={`report-result ${isLoaded ? 'loaded' : ''}`}>
      <div className="container">
        {/* Header */}
        <div className="report-header">
          <div className="header-left">
            <div className="title-section">
              <div className="title-wrap">
                <h1>
                  Report <span className="gradient-text">Result</span>
                </h1>
                <span className="title-glow" aria-hidden="true" />
              </div>
              {/* AI-Powered Analysis badge removed per request */}
            </div>
          </div>
          <div className="header-actions">
            <button 
              className="action-btn secondary"
              onClick={handleDownload}
              disabled={isDownloading}
              aria-label="Download report"
            >
              <span className="icon" aria-hidden="true">⬇</span>
              <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
            </button>
            <button 
              className="action-btn secondary"
              onClick={handlePrint}
              disabled={isPrinting}
              aria-label="Print report"
            >
              <span className="icon" aria-hidden="true">🖨</span>
              <span>{isPrinting ? 'Printing...' : 'Print'}</span>
            </button>
          </div>
        </div>

        {/* Report Title & Metadata */}
        <div className="report-meta">
          <div className="meta-header">
            <h2>Complete Blood Count – July 2025</h2>
          <div className="meta-badges">
            <span className="badge cbc">CBC</span>
            <span className="badge recent">Recent</span>
            <span className="badge priority">Priority</span>
            </div>
          </div>
          <div className="meta-info">
            <div className="info-item">
              <div className="info-top">
                <span className="meta-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="label">Analyzed on</span>
              </div>
              <span className="value">July 15, 2025</span>
            </div>
            <div className="info-item">
              <div className="info-top">
                <span className="meta-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="label">Patient ID</span>
              </div>
              <span className="value">#12345</span>
            </div>
            <div className="info-item">
              <div className="info-top">
                <span className="meta-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M13 2v6h6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </span>
                <span className="label">Report Type</span>
              </div>
              <span className="value">Blood Test</span>
            </div>
            <div className="info-item">
              <div className="info-top">
                <span className="meta-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="label">Analysis Time</span>
              </div>
              <span className="value">2.3 seconds</span>
            </div>
          </div>
          <div className="ai-explanation">
            <div className="explanation-icon" aria-hidden="true">💡</div>
            <div className="explanation-content">
              <h4>AI Analysis Summary</h4>
              <p>AI has analyzed your report and explained the results in simple terms below. Key findings have been highlighted for your attention.</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="report-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon">📊</span>
            <span>Overview</span>
          </button>
          <button 
            className={`tab-button ${activeTab === 'detailed' ? 'active' : ''}`}
            onClick={() => setActiveTab('detailed')}
          >
            <span className="tab-icon">🔍</span>
            <span>Detailed Analysis</span>
          </button>
          <button 
            className={`tab-button ${activeTab === 'risk' ? 'active' : ''}`}
            onClick={() => setActiveTab('risk')}
          >
            <span className="tab-icon">⚠️</span>
            <span>Risk Assessment</span>
          </button>
        </div>

        {/* Summary Cards */}
        {activeTab === 'overview' && (
          <div className="summary-section">
            <div className="section-header">
              <h3>Key Findings</h3>
              <p>Overview of your most important health parameters</p>
            </div>
            <div className="summary-cards">
              {summaryCards.map((card) => (
                <div key={card.id} className={`summary-card ${card.statusColor} ${card.trend} priority-${card.priority}`}>
                  <div className="card-header">
                    <div className="card-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div className="trend-indicator" aria-hidden="true">
                      {card.trend === 'increasing' && '↗️'}
                      {card.trend === 'decreasing' && '↘️'}
                      {card.trend === 'stable' && '→'}
                    </div>
                    {card.priority === 'high' && (
                      <div className="priority-badge" aria-hidden="true">
                        <span className="priority-icon">🔴</span>
                      </div>
                    )}
                  </div>
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <div className="card-value">{card.value}</div>
                    <div className="card-description">{card.description}</div>
                    <div className={`card-status ${card.statusColor}`}>
                      <span className="status-icon" aria-hidden="true">{getStatusIcon(card.status)}</span>
                      <span className="status-text">{card.status}</span>
                    </div>
                  </div>
                  <div className="card-glow"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Results */}
        {activeTab === 'detailed' && (
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSection('redBloodCells');
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedSections.redBloodCells}
                aria-controls="red-blood-cells-content"
              >
                <div className="header-content">
                  <h4>Red Blood Cells</h4>
                  <span className="parameter-count">2 parameters</span>
                </div>
                <div className="header-actions">
                  <span 
                    className={`expand-icon ${expandedSections.redBloodCells ? 'expanded' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </div>
              </div>
              {expandedSections.redBloodCells && (
                <div id="red-blood-cells-content" className="section-content">
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
                          <span className="status-icon" aria-hidden="true">{getStatusIcon(result.status)}</span>
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
                        <div className="detail-row">
                          <span className="label">Severity</span>
                          <span className="value severity">
                            <span className="severity-icon" aria-hidden="true">{getSeverityIcon(result.severity)}</span>
                            <span className="severity-text">{result.severity}</span>
                          </span>
                        </div>
                      </div>

                      <div className="ai-insight">
                        <div className="insight-header">
                          <span className="ai-icon" aria-hidden="true">🤖</span>
                          <span>AI Insight</span>
                        </div>
                        <p>{result.aiInsight}</p>
                      </div>

                      <div className="recommendations">
                        <div className="recommendations-header">
                          <span className="recommendations-icon" aria-hidden="true">💡</span>
                          <span>Recommendations</span>
                        </div>
                        <ul className="recommendations-list">
                          {result.recommendations.map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="doctor-question">
                        <div className="question-header">
                          <span className="question-icon" aria-hidden="true">❓</span>
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSection('whiteBloodCells');
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={expandedSections.whiteBloodCells}
                aria-controls="white-blood-cells-content"
              >
                <div className="header-content">
                  <h4>White Blood Cells</h4>
                  <span className="parameter-count">1 parameter</span>
                </div>
                <div className="header-actions">
                  <span 
                    className={`expand-icon ${expandedSections.whiteBloodCells ? 'expanded' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </div>
              </div>
              {expandedSections.whiteBloodCells && (
                <div id="white-blood-cells-content" className="section-content">
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
                          <span className="status-icon" aria-hidden="true">{getStatusIcon(result.status)}</span>
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
                        <div className="detail-row">
                          <span className="label">Severity</span>
                          <span className="value severity">
                            <span className="severity-icon" aria-hidden="true">{getSeverityIcon(result.severity)}</span>
                            <span className="severity-text">{result.severity}</span>
                          </span>
                        </div>
                      </div>

                      <div className="ai-insight">
                        <div className="insight-header">
                          <span className="ai-icon" aria-hidden="true">🤖</span>
                          <span>AI Insight</span>
                        </div>
                        <p>{result.aiInsight}</p>
                      </div>

                      <div className="recommendations">
                        <div className="recommendations-header">
                          <span className="recommendations-icon" aria-hidden="true">💡</span>
                          <span>Recommendations</span>
                        </div>
                        <ul className="recommendations-list">
                          {result.recommendations.map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="doctor-question">
                        <div className="question-header">
                          <span className="question-icon" aria-hidden="true">❓</span>
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
        )}

        {/* Risk Assessment */}
        {activeTab === 'risk' && (
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
                      <svg width="120" height="120" viewBox="0 0 120 120" aria-labelledby="risk-score-title">
                        <title id="risk-score-title">Risk Score: {riskAssessment.riskScore}%</title>
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
                          <span className={`category-dot ${category.color}`} aria-hidden="true">●</span>
                          <span className="category-label">{category.label}</span>
                          <span className="category-percentage">{category.percentage}%</span>
                        </div>
                        <div className="category-bar">
                          <div 
                            className={`bar-fill ${category.color}`} 
                            style={{ width: `${category.percentage}%` }}
                            role="progressbar"
                            aria-valuenow={category.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
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
        )}

        

        {/* Disclaimer */}
        <div className="disclaimer">
          <div className="disclaimer-content">
            <div className="disclaimer-icon">
              <span className="lock-icon" aria-hidden="true">🔒</span>
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
