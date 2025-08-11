import React, { useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Auth.scss';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const mode = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('signup')) return 'signup';
    return 'login';
  }, [location.pathname]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Placeholder for signup behavior
    // Remain on page; could add actual signup logic later
  };

  return (
    <main className="auth-page fade-in" aria-labelledby="auth-title">
      <div className="auth-container">
        <div className="auth-card">
          <section className="branding" aria-hidden>
            <div className="brand-gradient" />
            <div className="brand-content">
              <h2 className="brand-title">HealthScan AI</h2>
              <p className="brand-subtitle">Secure. Simple. Smart insights from your medical reports.</p>
            </div>
          </section>

          <section className="form-section">
            {mode === 'login' ? (
              <>
                <header className="form-header">
                  <h1 id="auth-title" className="form-title">Welcome back</h1>
                  <p className="form-subtitle">Log in to continue to your dashboard</p>
                </header>

                <form className="auth-form" onSubmit={handleLoginSubmit} noValidate>
                  <div className="input-group">
                    <label htmlFor="login-identifier">Email or Username</label>
                    <input id="login-identifier" name="identifier" type="text" placeholder="you@example.com" required />
                  </div>

                  <div className="input-group">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" name="password" type="password" placeholder="••••••••" required />
                  </div>

                  <div className="meta-row">
                    <Link to="#" className="link">Forgot Password?</Link>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="primary-btn" aria-label="Log in">Log In</button>
                  </div>
                </form>

                <p className="toggle-text">
                  Don’t have an account?
                  <button type="button" className="link inline" onClick={() => navigate('/signup')}>Sign up</button>
                </p>
              </>
            ) : (
              <>
                <header className="form-header">
                  <h1 id="auth-title" className="form-title">Create your account</h1>
                  <p className="form-subtitle">Start analyzing your reports in minutes</p>
                </header>

                <form className="auth-form" onSubmit={handleSignupSubmit} noValidate>
                  <div className="input-group">
                    <label htmlFor="signup-name">Full Name</label>
                    <input id="signup-name" name="name" type="text" placeholder="John Doe" required />
                  </div>

                  <div className="input-group">
                    <label htmlFor="signup-email">Email</label>
                    <input id="signup-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>

                  <div className="grid-2">
                    <div className="input-group">
                      <label htmlFor="signup-password">Password</label>
                      <input id="signup-password" name="password" type="password" placeholder="••••••••" required />
                    </div>
                    <div className="input-group">
                      <label htmlFor="signup-confirm">Confirm Password</label>
                      <input id="signup-confirm" name="confirm" type="password" placeholder="••••••••" required />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="primary-btn" aria-label="Sign up">Create Account</button>
                  </div>
                </form>

                <p className="toggle-text">
                  Already have an account?
                  <button type="button" className="link inline" onClick={() => navigate('/login')}>Log in</button>
                </p>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Auth;


