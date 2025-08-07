import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        consent: false
      });
    }, 2000);
  };

  return (
    <main className="contact-page">
      {/* Page Header Section */}
      <section className="contact-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1 className="page-title">Get in Touch with Us</h1>
              <p className="page-subtitle">
                We're here to help you understand your reports or answer your questions.
              </p>
            </div>
            <div className="header-illustration">
              <div className="support-icon">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="url(#gradient1)"/>
                  <path d="M25 35C25 29.4772 29.4772 25 35 25H45C50.5228 25 55 29.4772 55 35V45C55 50.5228 50.5228 55 45 55H35C29.4772 55 25 50.5228 25 45V35Z" fill="white" fillOpacity="0.9"/>
                  <circle cx="35" cy="40" r="2" fill="#0056D2"/>
                  <circle cx="45" cy="40" r="2" fill="#0056D2"/>
                  <path d="M30 45C30 42.2386 32.2386 40 35 40H45C47.7614 40 50 42.2386 50 45" stroke="#0056D2" strokeWidth="2" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0056D2"/>
                      <stop offset="100%" stopColor="#1D8BFF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="header-background">
          <div className="wave-shape"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form Section */}
            <div className="contact-form-section">
              <div className="form-card">
                <h2 className="form-title">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="checkbox-input"
                        required
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-text">
                        I agree to the <a href="/privacy" className="link">privacy policy</a>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M2.5 10L17.5 10M17.5 10L12.5 5M17.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="contact-info-section">
              <div className="info-card">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">We're here to help you 24/7</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Email</h3>
                      <p className="method-value">support@healthscan.ai</p>
                      <p className="method-description">Get a response within 24 hours</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Phone</h3>
                      <p className="method-value">1-800-HEALTHSCAN</p>
                      <p className="method-description">Mon–Fri, 9am–6pm IST</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Address</h3>
                      <p className="method-value">123 Medical Center Dr<br />San Francisco, CA 94102</p>
                      <p className="method-description">Visit us during business hours</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Interactive Map Section */}
       <section className="map-section">
         <div className="container">
           <div className="map-card">
             <h2 className="map-title">Find Us</h2>
             <div className="map-container">
               <div className="map-wrapper">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d72.8319!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0x3b0b5b5b5b5b5b5b!2sInventam%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1234567890"
                   width="100%"
                   height="400"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Inventam Tech Solution Location"
                   className="google-map"
                 ></iframe>
                 <div className="map-overlay">
                   <div className="location-info">
                     <h3 className="location-title">Inventam Tech Solution</h3>
                     <p className="location-address">Surat, Gujarat, India</p>
                     <div className="location-actions">
                       <a 
                         href="https://maps.google.com/?q=Inventam+Tech+Solution+Surat" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="map-link"
                       >
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                           <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                         Open in Maps
                       </a>
                       <a 
                         href="https://maps.google.com/directions?daddr=Inventam+Tech+Solution+Surat" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="directions-link"
                       >
                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                           <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                         Get Directions
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>


    </main>
  );
};

export default Contact;