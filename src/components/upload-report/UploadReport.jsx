import React, { useState, useRef } from "react";
import Button from "../button";
import "./UploadReport.scss";

// Import icons
import uploadIcon from "../../assets/upload-icon.png";
import secureUploadIcon from "../../assets/Secure-Upload-icon.png";
import hipaaCompliantIcon from "../../assets/HIPAA-Compliant-icon.png";
import aiPoweredAnalysisIcon from "../../assets/AI-Powered-Analysis-icon.png";
import clearImagesIcon from "../../assets/Clear-Images-icon.png";
import originalPdfsIcon from "../../assets/Original-PDFs-icon.png";
import completeReportsIcon from "../../assets/Complete-Reports-icon.png";

const UploadReport = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file) => {
    // Clear any previous errors
    setError(null);
    
    // Validate file type and size
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid file type (PDF, JPG, PNG)');
      return;
    }

    if (file.size > maxSize) {
      setError('File size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      setUploadProgress(0);
      setError(null);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            // Here you would typically handle the successful upload
            console.log('Upload completed:', selectedFile.name);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      // In a real application, you would use FormData and fetch/axios here
      // Example:
      // const formData = new FormData();
      // formData.append('file', selectedFile);
      // 
      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(response => response.json())
      // .then(data => {
      //   setIsUploading(false);
      //   // Handle success
      // })
      // .catch(error => {
      //   setIsUploading(false);
      //   setError('Upload failed. Please try again.');
      // });
    }
  };

  return (
    <section className="upload-report" role="main" aria-label="Upload medical report">
      {/* Floating decorative elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
      
      <div className="container">
        {/* Page Header */}
        <div className="upload-header">
          <h1 className="upload-title">Upload Your Medical Report</h1>
          <p className="upload-subtitle">
            We'll explain your lab results in simple language - instantly and securely.
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="error-message">
            <div className="error-icon">⚠️</div>
            <p>{error}</p>
          </div>
        )}

        {/* File Upload Area */}
        <div className="upload-area-container">
          <div
            className={`upload-area ${isDragOver ? 'upload-area--drag-over' : ''} ${selectedFile ? 'upload-area--has-file' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-icon">
              <img src={uploadIcon} alt="Upload" />
            </div>
            
            {!selectedFile ? (
              <>
                <p className="upload-instruction">Drag and drop your file here</p>
                <div className="upload-separator">or</div>
                <Button
                  variant="fill"
                  className="button browse-btn"
                  onClick={handleBrowseClick}
                >
                  Browse Files
                </Button>
                <p className="upload-formats">Supported formats: PDF, JPG, PNG (up to 5MB)</p>
              </>
            ) : (
              <div className="file-selected">
                <div className="file-info">
                  <div className="file-icon">📄</div>
                  <div className="file-details">
                    <p className="file-name">{selectedFile.name}</p>
                    <p className="file-size">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                                 {isUploading ? (
                   <div className="upload-progress">
                     <div className="progress-bar">
                       <div 
                         className="progress-fill" 
                         style={{ width: `${uploadProgress}%` }}
                       ></div>
                     </div>
                     <p className="progress-text">Uploading... {uploadProgress}%</p>
                   </div>
                 ) : (
                   <Button
                     variant="fill"
                     className="button upload-btn"
                     onClick={handleUpload}
                   >
                     Upload Report
                   </Button>
                 )}
                <button
                  className="change-file-btn"
                  onClick={() => setSelectedFile(null)}
                >
                  Choose Different File
                </button>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileInputChange}
            className="file-input"
            aria-label="Select file to upload"
          />
        </div>

        {/* Key Benefits Section */}
        <div className="benefits-section">
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={secureUploadIcon} alt="Secure Upload" />
              </div>
              <h3 className="benefit-title">100% Secure Upload</h3>
              <p className="benefit-description">Your data is encrypted and never stored</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={hipaaCompliantIcon} alt="HIPAA Compliant" />
              </div>
              <h3 className="benefit-title">HIPAA Compliant</h3>
              <p className="benefit-description">Meets healthcare privacy standards</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <img src={aiPoweredAnalysisIcon} alt="AI Powered Analysis" />
              </div>
              <h3 className="benefit-title">AI-Powered Analysis</h3>
              <p className="benefit-description">Advanced medical report processing</p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h2 className="tips-title">Tips for Best Results</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">
                <img src={clearImagesIcon} alt="Clear Images" />
              </div>
              <h3 className="tip-title">Clear Images</h3>
              <p className="tip-description">Ensure your report is well-lit and readable</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <img src={originalPdfsIcon} alt="Original PDFs" />
              </div>
              <h3 className="tip-title">Original PDFs</h3>
              <p className="tip-description">Upload the original lab report PDF</p>
            </div>
            
            <div className="tip-card">
              <div className="tip-icon">
                <img src={completeReportsIcon} alt="Complete Reports" />
              </div>
              <h3 className="tip-title">Complete Reports</h3>
              <p className="tip-description">Include all pages of your report</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default UploadReport;
