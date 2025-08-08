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
              <img src={heroImage} alt="HealthScan AI story" className="story-image" />
            </div>
          </div>

          {/* Content */}
          <div className="story-content">
            <h2 className="story-title">
              It started with a question: Why are medical reports so confusing?
            </h2>

            <div className="story-text">
              <p>
                Founded by a team of healthcare professionals and AI experts, HealthScan AI
                emerged from our shared frustration with the complexity of medical information.
                We recognized the need for a solution that could make healthcare accessible to
                everyone.
              </p>
              <p>
                Our journey began with a simple idea: what if we could use artificial
                intelligence to translate medical jargon into everyday language? Today, we’re
                proud to be making that vision a reality.
              </p>
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


