import React from "react";
import Button from "../button";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" role="banner" aria-label="Main hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-xl-6">
            <div className="hero-content">
              <h1 className="hero-title">
                Understand Your Medical Reports in Seconds
              </h1>
              <p className="hero-description">
                Let AI explain your medical reports in simple language. Get
                clear insights and expert recommendations.
              </p>
              <div className="hero-cta">
                <Button
                  variant="fill"
                  size="large"
                  className="hero-btn"
                  aria-label="Try HealthScan AI for free"
                >
                  Try It Free
                </Button>
              </div>
              <div className="hero-badges">
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="badge-text">Data Encrypted</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 11H15M9 15H15M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="badge-text">HIPAA Compliant</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="badge-text">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6">
            <img
              src="../../../src/assets/hero-banner-img.png"
              alt="hero-banner-img"
              className="hero-banner-img"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
