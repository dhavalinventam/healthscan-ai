import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.scss';

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [touched, setTouched] = useState({ password: false, confirm: false });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const passwordErrors = useMemo(() => ({
    password: !password ? 'Password is required' : password.length < 6 ? 'Must be at least 6 characters' : '',
    confirm: !confirm ? 'Please confirm your password' : confirm !== password ? 'Passwords do not match' : '',
  }), [password, confirm]);

  const isValid = !passwordErrors.password && !passwordErrors.confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ password: true, confirm: true });
    if (!isValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const IconLock = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <main className="reset-page fade-in" aria-labelledby="reset-title">
      <section className="reset-container">
        <div className="brand-top" aria-hidden>
          <div className="brand-logo">HealthScan AI</div>
        </div>

        <div className="form-card">
          {!submitted ? (
            <>
              <header className="form-header">
                <h1 id="reset-title" className="form-title">Reset Password</h1>
                <p className="form-subtitle">Enter your new password below.</p>
              </header>

              <form className="reset-form" onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <label htmlFor="reset-password">New Password</label>
                  <div className={`input-field ${touched.password && passwordErrors.password ? 'has-error' : ''}`}>
                    <span className="icon" aria-hidden><IconLock /></span>
                    <input
                      id="reset-password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                      aria-invalid={Boolean(touched.password && passwordErrors.password)}
                      aria-describedby={touched.password && passwordErrors.password ? 'reset-password-error' : undefined}
                      required
                    />
                    <button type="button" className="toggle-visibility" onClick={() => setShowPassword((v) => !v)}>
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {touched.password && passwordErrors.password && (
                    <div id="reset-password-error" className="error-text">{passwordErrors.password}</div>
                  )}
                </div>

                <div className="input-group">
                  <label htmlFor="reset-confirm">Confirm Password</label>
                  <div className={`input-field ${touched.confirm && passwordErrors.confirm ? 'has-error' : ''}`}>
                    <span className="icon" aria-hidden><IconLock /></span>
                    <input
                      id="reset-confirm"
                      name="confirm"
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, confirm: true }))}
                      aria-invalid={Boolean(touched.confirm && passwordErrors.confirm)}
                      aria-describedby={touched.confirm && passwordErrors.confirm ? 'reset-confirm-error' : undefined}
                      required
                    />
                    <button type="button" className="toggle-visibility" onClick={() => setShowConfirm((v) => !v)}>
                      {showConfirm ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {touched.confirm && passwordErrors.confirm && (
                    <div id="reset-confirm-error" className="error-text">{passwordErrors.confirm}</div>
                  )}
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="primary-btn"
                    aria-label="Reset password"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? 'Saving…' : 'Save New Password'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="success-state" role="status" aria-live="polite">
              <div className="success-icon" aria-hidden>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="success-title">Password updated</h2>
              <p className="success-text">Your password has been reset successfully.</p>
              <div className="form-actions">
                <button type="button" className="primary-btn" onClick={() => navigate('/login')}>Go to Login</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;


