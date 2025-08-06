import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import './Header.scss';

const Header = () => (
  <nav className="navbar navbar-expand-md bg-white border-bottom py-2" role="navigation" aria-label="Main navigation">
    <div className="container">
      <Link to="/" className="navbar-brand d-flex align-items-center gap-2 py-2" aria-label="HealthScan AI Home">
        <span className="logo-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="8" fill="#0078D4"/>
            <path d="M16 8L24 11V16C24 21 16 24 16 24C16 24 8 21 8 16V11L16 8Z" fill="white"/>
            <rect x="14" y="13" width="4" height="6" rx="1" fill="#0078D4"/>
            <rect x="13" y="15" width="6" height="2" rx="1" fill="#0078D4"/>
          </svg>
        </span>
        <span className="brand-name">HealthScan AI</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse w-100" id="mainNavbar">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center gap-2 gap-md-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item ms-md-3 mt-2 mt-md-0">
            <Button 
              variant="fill" 
              size="small" 
              aria-label="Upload Report"
            >
              Upload Report
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header; 