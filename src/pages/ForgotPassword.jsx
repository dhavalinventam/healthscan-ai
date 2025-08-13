import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Row, Col } from 'react-bootstrap';
import './ForgotPassword.scss';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const error = useMemo(() => {
    if (!touched) return '';
    if (!email) return 'Email is required';
    if (!emailPattern.test(email)) return 'Enter a valid email';
    return '';
  }, [email, touched]);

  const isValid = Boolean(email) && emailPattern.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    setIsSubmitting(true);
    // Simulate request latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const IconMail = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
      <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <main className="forgot-page fade-in" aria-labelledby="forgot-title">
      <section className="forgot-container">
        <div className="brand-top" aria-hidden>
          <div className="brand-logo">HealthScan AI</div>
        </div>

        <div className="form-card" role="region" aria-label="Forgot password form">
          <header className="form-header">
            <h1 id="forgot-title" className="form-title">Forgot Password</h1>
            <p className="form-subtitle">Enter your email and we’ll send you a reset link.</p>
          </header>

            {!submitted ? (
            <Form className="forgot-form" onSubmit={handleSubmit} noValidate>
              <Row className="g-3">
                <Col xs={12}>
                  <div className="input-group" controlId="forgotEmail">
                    <Form.Label>Email</Form.Label>
                    <div className={`input-field ${touched && error ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconMail /></span>
                      <Form.Control
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched(true)}
                        aria-invalid={Boolean(touched && error)}
                        aria-describedby={touched && error ? 'forgot-email-error' : undefined}
                        required
                      />
                    </div>
                    {touched && error && (
                      <div id="forgot-email-error" className="error-text">{error}</div>
                    )}
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="form-actions">
                    <button
                      type="submit"
                      className="primary-btn"
                      aria-label="Send reset link"
                      disabled={!isValid || isSubmitting}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Reset Link'}
                    </button>
                  </div>
                </Col>

                <Col xs={12}>
                  <p className="meta-text text-center">
                    Remembered your password?{' '}
                    <button type="button" className="link inline" onClick={() => navigate('/login')}>Login</button>
                  </p>
                </Col>
              </Row>
            </Form>
          ) : (
            <div className="success-state" role="status" aria-live="polite">
              <div className="success-icon" aria-hidden>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="success-title">Check your email</h2>
              <p className="success-text">If an account exists for {email}, you’ll receive a link to reset your password.</p>
              <div className="form-actions">
                <Link to="/reset-password" className="secondary-btn" aria-label="I have a code">I have a reset link</Link>
              </div>
              <p className="meta-text">
                Didn’t get the email? Check spam or{' '}
                <button type="button" className="link inline" onClick={() => setSubmitted(false)}>try again</button>.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;


