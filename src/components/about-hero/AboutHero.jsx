import React, { useEffect, useRef } from "react";
import Button from "../button";
import "./AboutHero.scss";

const AboutHero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (selector) => () => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="about-hero" role="banner" aria-label="About us hero section" ref={heroRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section - Text Content */}
          <div className="col-lg-6 col-xl-6">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Making <span className="gradient-text">Health Reports</span> Easy to Understand
              </h1>

              <p className="about-hero-description">
                Our mission is to simplify healthcare by making medical information accessible for everyone.
              </p>

              <div className="about-hero-cta">
                <Button
                  variant="fill"
                  className="button about-hero-btn about-hero-btn--primary"
                  aria-label="Our Mission"
                  onClick={handleScrollTo('#mission')}
                >
                  <span className="btn-text">Our Mission</span>
                </Button>
               
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-lg-6 col-xl-6">
            <div className="about-hero-image-container">
              <div className="about-hero-image-wrapper">
                <img
                  src="/src/assets/hero-banner-img.png"
                  alt="Healthcare professional working with medical technology"
                  className="about-hero-image"
                />
                <div className="about-hero-abstract" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
