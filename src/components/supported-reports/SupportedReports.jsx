import React from 'react';
import './SupportedReports.scss';
import labResultsIcon from '../../assets/Lab-Results-icon.png';
import ctScansIcon from '../../assets/CT-Scans-icon.png';
import pathologyReportsIcon from '../../assets/Pathology-Reports-icon.png';
import mriScansIcon from '../../assets/MRI-Scans-icon.png';
import xRayReportsIcon from '../../assets/X-Ray-Reports-icon.png';
import bloodTestsIcon from '../../assets/Blood-Tests-icon.png';

const SupportedReports = () => {
  const reportTypes = [
    {
      id: 1,
      icon: labResultsIcon,
      title: "Lab Results",
      description: "Comprehensive laboratory test reports"
    },
    {
      id: 2,
      icon: bloodTestsIcon,
      title: "Blood Tests",
      description: "Complete blood count and chemistry panels"
    },
    {
      id: 3,
      icon: pathologyReportsIcon,
      title: "Pathology Reports",
      description: "Tissue analysis and biopsy results"
    },
    {
      id: 4,
      icon: xRayReportsIcon,
      title: "X-Ray Reports",
      description: "Radiographic imaging analysis"
    },
    {
      id: 5,
      icon: ctScansIcon,
      title: "CT Scans",
      description: "Computed tomography scan results"
    },
    {
      id: 6,
      icon: mriScansIcon,
      title: "MRI Scans",
      description: "Magnetic resonance imaging reports"
    }
  ];

  return (
    <section className="supported-reports" role="region" aria-label="Supported medical reports">
      <div className="container">
        <div className="supported-reports-content">
          <div className="section-header">
            <h2 className="section-title">Supported Medical Reports</h2>
            <p className="section-subtitle">
              Our AI can analyze and explain various types of medical reports in simple, understandable language
            </p>
          </div>
          <div className="row" style={{ rowGap: '24px' }}>
            {reportTypes.map((report) => (
              <div key={report.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="report-card">
                  <div className="report-icon">
                    <img 
                      src={report.icon} 
                      alt={`${report.title} icon`}
                      className="report-icon-image"
                    />
                  </div>
                  <div className="report-content">
                    <h3 className="report-title">{report.title}</h3>
                    <p className="report-description">{report.description}</p>
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

export default SupportedReports; 