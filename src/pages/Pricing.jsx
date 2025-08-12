import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.scss';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const isYearly = billingPeriod === 'yearly';

  const prices = useMemo(
    () => ({
      free: { monthly: 0, yearly: 0 },
      pro: { monthly: 299, yearly: 2999 },
      family: { monthly: 499, yearly: 4999 },
    }),
    []
  );

  const planFeatures = {
    free: [
      { text: '2 reports per month', icon: '📊' },
      { text: 'Basic reports only', icon: '📋' },
      { text: 'Basic AI explanation', icon: '🤖' },
      { text: '7-day storage', icon: '💾' },
      { text: 'Email support', icon: '📧' },
    ],
    pro: [
      { text: '20 reports per month', icon: '📊' },
      { text: 'All supported reports', icon: '📋' },
      { text: 'Full medical insights', icon: '🔍' },
      { text: 'Unlimited history', icon: '📚' },
      { text: 'Priority support', icon: '⭐' },
      { text: 'Advanced analytics', icon: '📈' },
    ],
    family: [
      { text: '50 shared reports', icon: '👨‍👩‍👧‍👦' },
      { text: 'All reports + family access', icon: '🏠' },
      { text: 'Doctor-friendly summary', icon: '👨‍⚕️' },
      { text: 'Unlimited family folders', icon: '📁' },
      { text: 'Dedicated support', icon: '🎯' },
      { text: 'Family health insights', icon: '💡' },
    ],
  };

  const formatPrice = (value) => (value === 0 ? '₹0' : `₹${value}`);

  const compareRows = [
    { feature: 'Monthly Reports', free: '2', pro: '20', family: '50' },
    { feature: 'Report Types', free: 'Basic', pro: 'All', family: 'All' },
    { feature: 'AI Insights', free: 'Basic', pro: 'Full', family: 'Full' },
    { feature: 'Storage Duration', free: '7 days', pro: 'Unlimited', family: 'Unlimited' },
    { feature: 'History Access', free: 'Basic', pro: 'Full', family: 'Family' },
    { feature: 'Support Level', free: 'Email', pro: 'Priority', family: 'Dedicated' },
    { feature: 'Family Access', free: 'No', pro: 'No', family: 'Yes' },
  ];

  const faqItems = [
    {
      icon: '❓',
      q: 'Is the free plan really free?',
      a: 'Yes, the free plan is completely free to use with no hidden charges. You can upgrade anytime.',
    },
    {
      icon: '🔁',
      q: 'Can I cancel anytime?',
      a: 'Absolutely! You can cancel your subscription at any time with no questions asked.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      q: 'Can I add family members later?',
      a: 'Yes, you can upgrade to the Family Plan at any time to add family members.',
    },
    {
      icon: '💳',
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards, debit cards, and digital wallets.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <main className="pricing-page" role="main">
      {/* Modern Hero Section */}
      <section className="pricing-hero" aria-label="Pricing header">
        <div className="hero-background">
          <div className="hero-bg-elements">
            <div className="bg-circle bg-circle-1" />
            <div className="bg-circle bg-circle-2" />
            <div className="bg-circle bg-circle-3" />
          </div>
          <div className="bg-pattern" />
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="badge-container">
              <span className="hero-badge">✨ AI-Powered Health Analysis</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Choose Your</span>
              <span className="title-line highlight">Health Journey</span>
            </h1>
            
            <p className="hero-subtitle">
              Experience the future of medical report analysis with our intelligent AI platform. 
              Start free, upgrade anytime, and unlock unlimited health insights.
            </p>

            {/* Modern Billing Toggle */}
            <div className="billing-toggle-container">
              <div className="toggle-wrapper">
                <button
                  type="button"
                  className={`toggle-option ${!isYearly ? 'active' : ''}`}
                  onClick={() => setBillingPeriod('monthly')}
                  aria-pressed={!isYearly}
                >
                  <span className="toggle-text">Monthly</span>
                </button>
                
                <div className="toggle-switch">
                  <button
                    type="button"
                    className={`toggle-knob ${isYearly ? 'yearly' : 'monthly'}`}
                    onClick={() => setBillingPeriod(isYearly ? 'monthly' : 'yearly')}
                    aria-label="Toggle billing period"
                  >
                    <div className="knob-inner" />
                  </button>
                </div>
                
                <button
                  type="button"
                  className={`toggle-option ${isYearly ? 'active' : ''}`}
                  onClick={() => setBillingPeriod('yearly')}
                  aria-pressed={isYearly}
                >
                  <span className="toggle-text">Yearly</span>
                  <span className="toggle-badge">Save 20%</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Heading: How It Works */}
      <section className="pricing-how-it-works" aria-label="How it works heading">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">A clear, simple process to get value fast — upload your report, let our AI analyze it, and receive easy‑to‑understand insights.</p>
          </div>
        </div>
      </section>

      {/* Modern Pricing Plans */}
      <section className="pricing-plans" aria-label="Pricing plans">
        <div className="container">
          <div className="plans-grid">
            {/* Free Plan */}
            <article className={`plan-card plan-free ${isVisible ? 'visible' : ''}`}>
              <div className="plan-header">
                <div className="plan-icon">🚀</div>
                <h3 className="plan-name">Starter</h3>
                <div className="plan-price">
                  <span className="price-amount">{formatPrice(prices.free[billingPeriod])}</span>
                  <span className="price-period">/month</span>
                </div>
                <p className="plan-description">Perfect for trying out our AI analysis</p>
              </div>
              
              <ul className="plan-features" aria-label="Free plan features">
                {planFeatures.free.map((feature, index) => (
                  <li key={feature.text} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="plan-action">
                <Link to="/signup" className="plan-button plan-button-free">
                  <span className="button-text">Start Free Trial</span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </article>

            {/* Pro Plan */}
            <article className={`plan-card plan-pro popular ${isVisible ? 'visible' : ''}`}>
              <div className="popular-badge">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">Most Popular</span>
              </div>
              
              <div className="plan-header">
                <div className="plan-icon">⚡</div>
                <h3 className="plan-name">Professional</h3>
                <div className="plan-price">
                  <span className="price-amount">{formatPrice(prices.pro[billingPeriod])}</span>
                  <span className="price-period">/month</span>
                </div>
                {isYearly && (
                  <div className="yearly-savings">
                    <span className="savings-text">or ₹2,999/year</span>
                    <span className="savings-amount">Save ₹588</span>
                  </div>
                )}
                <p className="plan-description">For healthcare professionals and power users</p>
              </div>
              
              <ul className="plan-features" aria-label="Pro plan features">
                {planFeatures.pro.map((feature, index) => (
                  <li key={feature.text} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="plan-action">
                <Link to="/signup" className="plan-button plan-button-pro">
                  <span className="button-text">Get Pro Plan</span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </article>

            {/* Family Plan */}
            <article className={`plan-card plan-family ${isVisible ? 'visible' : ''}`}>
              <div className="plan-header">
                <div className="plan-icon">🏠</div>
                <h3 className="plan-name">Family</h3>
                <div className="plan-price">
                  <span className="price-amount">{formatPrice(prices.family[billingPeriod])}</span>
                  <span className="price-period">/month</span>
                </div>
                {isYearly && (
                  <div className="yearly-savings">
                    <span className="savings-text">or ₹4,999/year</span>
                    <span className="savings-amount">Save ₹988</span>
                  </div>
                )}
                <p className="plan-description">Complete family health management</p>
              </div>
              
              <ul className="plan-features" aria-label="Family plan features">
                {planFeatures.family.map((feature, index) => (
                  <li key={feature.text} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="plan-action">
                <Link to="/signup" className="plan-button plan-button-family">
                  <span className="button-text">Start Family Plan</span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Modern Comparison Table */}
      <section className="pricing-compare" aria-label="Compare plans">
        <div className="container">
          <div className="compare-header">
            <h2 className="section-title">Feature <span className="gradient-text">Comparison</span></h2>
            <p className="section-subtitle">See how our plans stack up against each other</p>
          </div>
          
          <div className="compare-table-wrapper">
            <table className="compare-table" role="table">
              <thead>
                <tr>
                  <th scope="col" className="feature-column">Features</th>
                  <th scope="col" className="plan-column">
                    <div className="plan-header-compare">
                      <span className="plan-name-compare">Starter</span>
                      <span className="plan-price-compare">Free</span>
                    </div>
                  </th>
                  <th scope="col" className="plan-column popular">
                    <div className="plan-header-compare">
                      <span className="plan-name-compare">Professional</span>
                      <span className="plan-price-compare">₹299</span>
                    </div>
                  </th>
                  <th scope="col" className="plan-column">
                    <div className="plan-header-compare">
                      <span className="plan-name-compare">Family</span>
                      <span className="plan-price-compare">₹499</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, index) => (
                  <tr key={row.feature} className="compare-row" style={{ animationDelay: `${index * 0.05}s` }}>
                    <th scope="row" className="feature-name">{row.feature}</th>
                    <td className="feature-value free">{row.free}</td>
                    <td className="feature-value pro">{row.pro}</td>
                    <td className="feature-value family">{row.family}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison */}
          <div className="compare-mobile">
            {compareRows.map((row, index) => (
              <div key={row.feature} className="compare-mobile-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mobile-feature-name">{row.feature}</div>
                <div className="mobile-feature-values">
                  <div className="mobile-value">
                    <span className="mobile-plan-label">Starter</span>
                    <span className="mobile-plan-value">{row.free}</span>
                  </div>
                  <div className="mobile-value">
                    <span className="mobile-plan-label">Professional</span>
                    <span className="mobile-plan-value">{row.pro}</span>
                  </div>
                  <div className="mobile-value">
                    <span className="mobile-plan-label">Family</span>
                    <span className="mobile-plan-value">{row.family}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern FAQ Section */}
      <section className="pricing-faq" aria-label="Pricing FAQ">
        <div className="container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="section-subtitle">Everything you need to know about our pricing</p>
          </div>
          
          <div className="faq-grid">
            {faqItems.map((item, idx) => {
              const expanded = openFaq === idx;
              return (
                <div key={item.q} className={`faq-item ${expanded ? 'expanded' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(expanded ? -1 : idx)}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <div className="faq-question-content">
                      <span className="faq-icon" aria-hidden="true">{item.icon}</span>
                      <span className="faq-text">{item.q}</span>
                    </div>
                    <span className="faq-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  <div 
                    id={`faq-panel-${idx}`} 
                    className="faq-answer" 
                    role="region" 
                    aria-hidden={!expanded}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


    </main>
  );
};

export default Pricing;