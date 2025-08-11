import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../button';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-md ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 py-2" aria-label="HealthScan AI Home">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <rect width="32" height="32" rx="8" fill="#0056D2"/>
              <path d="M16 8L24 11V16C24 21 16 24 16 24C16 24 8 21 8 16V11L16 8Z" fill="white"/>
              <rect x="14" y="13" width="4" height="6" rx="1" fill="#0056D2"/>
              <rect x="13" y="15" width="6" height="2" rx="1" fill="#0056D2"/>
            </svg>
          </span>
          <span className="brand-name">HealthScan AI</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar" 
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse w-100" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                aria-current={isActiveLink('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                aria-current={isActiveLink('/about') ? 'page' : undefined}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/pricing" 
                className={`nav-link ${isActiveLink('/pricing') ? 'active' : ''}`}
                aria-current={isActiveLink('/pricing') ? 'page' : undefined}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActiveLink('/dashboard') ? 'active' : ''}`}
                aria-current={isActiveLink('/dashboard') ? 'page' : undefined}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                aria-current={isActiveLink('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item ms-md-3 mt-2 mt-md-0">
              <Link to="/upload">
                <Button 
                  variant="fill" 
                  size="small" 
                  aria-label="Upload Report"
                  className="upload-btn"
                >
                  <span className="btn-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="btn-text">Upload Report</span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header; 