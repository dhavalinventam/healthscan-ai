import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import './NotFound.scss';

const NotFound = () => {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <section className="not-found-container">
        <div className="not-found-illustration fade-in-quick" aria-hidden="true">
          {/* Lightweight inline illustration: magnifying glass searching */}
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nf-grad" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A5B6D9" stopOpacity="0.5"/>
                <stop offset="1" stopColor="#DCE3F2" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="40" fill="url(#nf-grad)"/>
            <circle cx="60" cy="60" r="26" stroke="#133E87" strokeWidth="4" fill="#FFFFFF"/>
            <circle cx="60" cy="60" r="16" fill="#EAF0FF" stroke="#133E87" strokeWidth="2"/>
            <rect x="88" y="88" width="40" height="10" rx="5" transform="rotate(45 88 88)" fill="#133E87"/>
            <path d="M20 116 C40 96, 80 100, 120 120" stroke="#133E87" strokeWidth="2" strokeDasharray="6 8" fill="none" opacity="0.4"/>
          </svg>
        </div>

        <h1 id="not-found-title" className="not-found-code fade-in-quick">404</h1>
        <h2 className="not-found-heading fade-in-quick">Oops! Page not found</h2>
        <p className="not-found-description fade-in-quick">
          It seems you’ve wandered off the path. Let’s get you back on track.
        </p>

        <div className="not-found-actions fade-in-quick">
          <Link to="/" className="action-link">
            <Button className="nf-btn nf-btn--primary" size="medium" variant="fill">
              Go Back Home
            </Button>
          </Link>
         
        </div>
      </section>
    </main>
  );
};

export default NotFound;


