import React, { useEffect, useRef, useState } from 'react';
import './SupportedReports.scss';
import labResultsIcon from '../../assets/Lab-Results-icon.png';
import ctScansIcon from '../../assets/CT-Scans-icon.png';
import pathologyReportsIcon from '../../assets/Pathology-Reports-icon.png';
import mriScansIcon from '../../assets/MRI-Scans-icon.png';
import xRayReportsIcon from '../../assets/X-Ray-Reports-icon.png';
import bloodTestsIcon from '../../assets/Blood-Tests-icon.png';

const SupportedReports = () => {
  const sectionRef = useRef(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

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

  const reportTypes = [
    {
      id: 1,
      icon: labResultsIcon,
      title: "Lab Results",
      description: "Comprehensive laboratory test reports with detailed analysis",
      category: "Laboratory",
      color: "#0056D2",
      gradient: "linear-gradient(135deg, #0056D2, #1D8BFF)"
    },
    {
      id: 2,
      icon: bloodTestsIcon,
      title: "Blood Tests",
      description: "Complete blood count and chemistry panels with trend analysis",
      category: "Laboratory",
      color: "#1D8BFF",
      gradient: "linear-gradient(135deg, #1D8BFF, #4DB6AC)"
    },
    {
      id: 3,
      icon: pathologyReportsIcon,
      title: "Pathology Reports",
      description: "Tissue analysis and biopsy results with microscopic findings",
      category: "Pathology",
      color: "#26A69A",
      gradient: "linear-gradient(135deg, #26A69A, #4DB6AC)"
    },
    {
      id: 4,
      icon: xRayReportsIcon,
      title: "X-Ray Reports",
      description: "Radiographic imaging analysis with bone and chest findings",
      category: "Imaging",
      color: "#4DB6AC",
      gradient: "linear-gradient(135deg, #4DB6AC, #26A69A)"
    },
    {
      id: 5,
      icon: ctScansIcon,
      title: "CT Scans",
      description: "Computed tomography scan results with 3D reconstruction",
      category: "Imaging",
      color: "#1D8BFF",
      gradient: "linear-gradient(135deg, #1D8BFF, #0056D2)"
    },
    {
      id: 6,
      icon: mriScansIcon,
      title: "MRI Scans",
      description: "Magnetic resonance imaging reports with detailed anatomy",
      category: "Imaging",
      color: "#0056D2",
      gradient: "linear-gradient(135deg, #0056D2, #26A69A)"
    }
  ];

  const categories = [...new Set(reportTypes.map(report => report.category))];

  return (
    <section className="supported-reports" role="region" aria-label="Supported medical reports" ref={sectionRef}>
      <div className="container">
        <div className="supported-reports-content">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">📋 Comprehensive Coverage</span>
            </div>
            <h2 className="section-title">
              Supported 
              <span className="gradient-text"> Medical Reports</span>
            </h2>
            <p className="section-subtitle mb-4">
              Our AI can analyze and explain various types of medical reports in simple, understandable language
            </p>
            
            {/* View toggle */}
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Grid View
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <line x1="8" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="6" x2="3.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="12" x2="3.01" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="18" x2="3.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                List View
              </button>
            </div>
          </div>
          
          <div className={`reports-container ${viewMode}`}>
            {viewMode === 'grid' ? (
              <div className="reports-grid">
                {reportTypes.map((report) => (
                  <div key={report.id} className="report-card" style={{ '--report-color': report.color, '--report-gradient': report.gradient }}>
                    <div className="card-category">
                      <span className="category-badge">{report.category}</span>
                    </div>
                    
                    <div className="report-icon-wrapper">
                      <div className="report-icon-bg">
                        <img 
                          src={report.icon} 
                          alt={`${report.title} icon`}
                          className="report-icon-image"
                        />
                      </div>
                      <div className="icon-glow"></div>
                    </div>
                    
                    <div className="report-content">
                      <h3 className="report-title">{report.title}</h3>
                      <p className="report-description">{report.description}</p>
                    </div>
                    
                    <div className="card-hover-effect">
                      <div className="hover-bg"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="reports-list">
                {categories.map((category) => (
                  <div key={category} className="category-group">
                    <h3 className="category-title">{category}</h3>
                    <div className="category-reports">
                      {reportTypes
                        .filter(report => report.category === category)
                        .map((report) => (
                          <div key={report.id} className="list-report-item">
                            <div className="item-icon">
                              <img src={report.icon} alt={`${report.title} icon`} />
                            </div>
                            <div className="item-content">
                              <h4 className="item-title">{report.title}</h4>
                              <p className="item-description">{report.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="coverage-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Medical Report Types</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Specialized Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">AI-Powered Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedReports; 