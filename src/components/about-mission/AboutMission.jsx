import React, { useEffect, useRef } from "react";
import "./AboutMission.scss";

const AboutMission = () => {
  const missionRef = useRef(null);

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

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      key: 'mission',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Our Mission",
      description:
        "To make complex medical information simple, clear, and actionable for everyone. We combine clinical expertise with AI to translate reports into everyday language—preserving accuracy, protecting privacy, and empowering confident decisions.",
    },
    {
      key: 'vision',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Our Vision",
      description:
        "A world where every person instantly understands their health data and feels supported to act. We envision healthcare conversations grounded in clarity, trust, and shared understanding—powered by responsible AI.",
    },
  ];

  return (
    <section className="about-mission" id="mission" ref={missionRef}>
      <div className="container">
        <div className="mission-content">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Mission & Vision</span></h2>
          </div>

          <div className="mv-grid">
            {cards.map((card, index) => (
              <article key={card.key} className="mv-card" style={{ '--mv-index': index }}>
                <div className="mv-icon" aria-hidden="true">{card.icon}</div>
                <h3 className="mv-subtitle">{card.title}</h3>
                <p className="mv-description">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
