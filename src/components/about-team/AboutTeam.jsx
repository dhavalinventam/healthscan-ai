import React, { useEffect, useRef } from 'react';
import './AboutTeam.scss';

const teamMembers = [
  {
    initials: 'SC',
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    quote: 'Making healthcare accessible to everyone',
  },
  {
    initials: 'MP',
    name: 'Dr. Michael Park',
    role: 'Chief Medical Officer',
    quote: 'Bridging the gap between medicine and technology',
  },
  {
    initials: 'ER',
    name: 'Dr. Emily Rodriguez',
    role: 'AI Research Lead',
    quote: 'Advancing healthcare through AI innovation',
  },
  {
    initials: 'JW',
    name: 'James Wilson',
    role: 'Head of Engineering',
    quote: 'Building the future of healthcare technology',
  },
  {
    initials: 'LT',
    name: 'Dr. Lisa Thompson',
    role: 'Medical Director',
    quote: 'Ensuring medical accuracy and quality',
  },
  {
    initials: 'AC',
    name: 'Alex Chen',
    role: 'Product Lead',
    quote: 'Creating user‑centered healthcare solutions',
  },
];

const AboutTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-team" ref={sectionRef} aria-label="Meet the team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet the Experts Behind <span className="gradient-text">HealthScan AI</span></h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="team-card" style={{ '--card-index': index }}>
              <div className="avatar" aria-hidden="true">
                <span className="avatar-initials">{member.initials}</span>
              </div>
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <div className="member-quote">“{member.quote}”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;


