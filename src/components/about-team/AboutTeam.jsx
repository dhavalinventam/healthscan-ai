import React, { useEffect, useRef } from 'react';
import './AboutTeam.scss';

const teamMembers = [
  {
    initials: 'SC',
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Leads our mission to make healthcare information accessible with compassion and clarity.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initials: 'MP',
    name: 'Dr. Michael Park',
    role: 'Chief Medical Officer',
    bio: 'Brings deep clinical expertise to ensure accuracy and real‑world medical relevance.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initials: 'ER',
    name: 'Dr. Emily Rodriguez',
    role: 'AI Research Lead',
    bio: 'Focuses on responsible AI that explains complex insights in simple, human language.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initials: 'JW',
    name: 'James Wilson',
    role: 'Head of Engineering',
    bio: 'Builds reliable, secure systems that scale while protecting user privacy end‑to‑end.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initials: 'LT',
    name: 'Dr. Lisa Thompson',
    role: 'Medical Director',
    bio: 'Guides medical standards and quality so every explanation is trustworthy and clear.',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    initials: 'AC',
    name: 'Alex Chen',
    role: 'Product Lead',
    bio: 'Designs simple user experiences that help people understand and act on their health.',
    social: { linkedin: '#', twitter: '#' },
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
    <section className="about-team" id="team" ref={sectionRef} aria-label="Meet the team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our <span className="gradient-text">Team</span></h2>
          <p className="section-subtitle">A cross‑functional team of clinicians, engineers, and designers building clear, human‑centered healthcare experiences.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article key={member.name} className="team-card" style={{ '--card-index': index }}>
              <div className="profile" aria-hidden="true">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="profile-img" />
                ) : (
                  <div className="profile-fallback">{member.initials}</div>
                )}
              </div>
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <p className="member-bio">{member.bio}</p>
              <div className="member-social" aria-label="social links">
                {member.social?.linkedin && (
                  <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`} className="social-link" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" fill="currentColor"/><rect x="2" y="9" width="4" height="12" fill="currentColor"/><circle cx="4" cy="4" r="2" fill="currentColor"/></svg>
                  </a>
                )}
                {member.social?.twitter && (
                  <a href={member.social.twitter} aria-label={`${member.name} on Twitter`} className="social-link" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 00-7.15 3.83A11.9 11.9 0 013 5.16s-3 9 6 13a12.9 12.9 0 01-7 2c9 5 20 0 20-11.5 0-.18 0-.36-.02-.54A7.7 7.7 0 0024 6.5a8 8 0 01-2.3.63A4.1 4.1 0 0022.46 6z" fill="currentColor"/></svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;


