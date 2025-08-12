import React, { useEffect, useRef } from 'react';
import './AboutStory.scss';
import heroImage from '../../assets/hero-banner-img.png';

const AboutStory = () => {
  const storyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (storyRef.current) observer.observe(storyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-story" ref={storyRef} aria-label="Our story">
      <div className="container">
        <div className="story-grid">
          {/* Media */}
          <div className="story-media">
            <div className="story-image-wrapper">
              <img src={heroImage} alt="Our journey at HealthScan AI" className="story-image" />
            </div>
          </div>

          {/* Content */}
          <div className="story-content">
            <div className="section-header">
              <h2 className="section-title">Our <span className="gradient-text">Story</span></h2>
              <p className="section-subtitle">From a simple question to a mission-driven healthcare platform</p>
            </div>

            <div className="story-text">
              <p>
                HealthScan AI began with a shared realization among clinicians and engineers: medical
                information is often complex, technical, and overwhelming for patients and families.
              </p>
              <p>
                We set out to translate that complexity into clarity—using artificial intelligence
                to turn reports into plain, human language while preserving accuracy and context.
              </p>
              <ul className="story-points">
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Built by healthcare experts and AI researchers working together
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Focused on accessibility, privacy, and real-world impact
                </li>
                <li>
                  <span className="icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  Designed to help you understand, act, and feel confident about your health
                </li>
              </ul>
            </div>

            <div className="quote-card" role="note" aria-label="Founder quote">
              <div className="quote-body">
                <p className="quote-text">
                  “Healthcare should be accessible to everyone, not just medical professionals.”
                </p>
              </div>
              <div className="quote-footer">
                <div className="author">
                  <div className="author-avatar" aria-hidden="true">SC</div>
                  <div className="author-meta">
                    <div className="author-name">Dr. Sarah Chen</div>
                    <div className="author-title">Founder & CEO</div>
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

export default AboutStory;


