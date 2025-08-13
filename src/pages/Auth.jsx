import React, { useEffect, useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { setAuth, makeUserFromLogin } from '../utils/auth';
import './Auth.scss';

// Simple email regex for client-side validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current mode from route
  const mode = useMemo(() => {
    const path = location.pathname.toLowerCase();
    return path.includes('signup') ? 'signup' : 'login';
  }, [location.pathname]);

  // Track signup success message coming from redirect
  const initialSignupSuccess = Boolean(location.state && location.state.signupSuccess);
  const [signupSuccess, setSignupSuccess] = useState(initialSignupSuccess);

  useEffect(() => {
    // Clear the history state so the message doesn't persist on refresh/navigation
    if (initialSignupSuccess) {
      navigate('/login', { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Login form state and validation
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginTouched, setLoginTouched] = useState({ email: false, password: false });

  const loginErrors = useMemo(() => ({
    email: !loginEmail ? 'Email is required' : !emailPattern.test(loginEmail) ? 'Enter a valid email' : '',
    password: !loginPassword ? 'Password is required' : '',
  }), [loginEmail, loginPassword]);

  const isLoginValid = !loginErrors.email && !loginErrors.password;

  // Signup form state and validation
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirm, setShowSignupConfirm] = useState(false);
  const [signupTouched, setSignupTouched] = useState({ username: false, email: false, password: false, confirm: false });

  const signupErrors = useMemo(() => ({
    username: !signupUsername ? 'Username is required' : signupUsername.trim().length < 3 ? 'Username must be at least 3 characters' : '',
    email: !signupEmail ? 'Email is required' : !emailPattern.test(signupEmail) ? 'Enter a valid email' : '',
    password: !signupPassword ? 'Password is required' : signupPassword.length < 6 ? 'Password must be at least 6 characters' : '',
    confirm: !signupConfirm ? 'Please confirm your password' : signupConfirm !== signupPassword ? 'Passwords do not match' : '',
  }), [signupUsername, signupEmail, signupPassword, signupConfirm]);

  const isSignupValid = !signupErrors.username && !signupErrors.email && !signupErrors.password && !signupErrors.confirm;

  // Handlers
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setLoginTouched({ email: true, password: true });
    if (!isLoginValid) return;
    // Persist simple auth state and redirect
    const user = makeUserFromLogin(loginEmail);
    setAuth({ isAuthenticated: true, user });
    navigate('/dashboard');
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    setSignupTouched({ username: true, email: true, password: true, confirm: true });
    if (!isSignupValid) return;
    // Simulate account creation success and redirect to login with a success message
    setSignupSuccess(true);
    navigate('/login', { state: { signupSuccess: true } });
  };

  // Small icon components for inputs (inline SVG for portability)
  const IconMail = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
      <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  const IconUser = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 22a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  const IconLock = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  return (
    <main className="auth-page fade-in" aria-labelledby="auth-title">
      <div className="auth-container">
        <div className="auth-card">
          <section className="branding slide-in-left" aria-hidden>
            <div className="brand-overlay" />
            <div className="brand-top">
              <div className="brand-logo">HealthScan AI</div>
            </div>
            <div className="brand-content">
              <h2 className="brand-tagline">Your Health, Simplified with AI</h2>
              <p className="brand-subtitle">Understand your medical reports in simple, human language.</p>
              <div className="brand-illustration" aria-hidden>
                <img src="/src/assets/hero-banner-img.png" alt="AI-powered healthcare" />
              </div>
            </div>
          </section>

          <section className="form-section slide-in-right">
            <div className="form-card">
            <nav className="auth-tabs" role="tablist" aria-label="Authentication tabs">
              <button
                role="tab"
                aria-selected={mode === 'login'}
                className={`tab ${mode === 'login' ? 'active' : ''}`}
                onClick={() => navigate('/login')}
                type="button"
              >
                Login
              </button>
              <button
                role="tab"
                aria-selected={mode === 'signup'}
                className={`tab ${mode === 'signup' ? 'active' : ''}`}
                onClick={() => navigate('/signup')}
                type="button"
              >
                Signup
              </button>
            </nav>

            {mode === 'login' ? (
              <>
                <header className="form-header">
                  <h1 id="auth-title" className="form-title">Welcome Back</h1>
                  <p className="form-subtitle">Sign in to HealthScan AI</p>
                </header>

                {signupSuccess && (
                  <div className="alert success" role="status" aria-live="polite">
                    <span className="dot" aria-hidden />
                    <span>Account created successfully. You can log in now.</span>
                    <button className="close" type="button" aria-label="Dismiss" onClick={() => setSignupSuccess(false)}>×</button>
                  </div>
                )}

                <form className="auth-form" onSubmit={handleLoginSubmit} noValidate>
                  <div className="input-group">
                    <Form.Label htmlFor="login-email">Email</Form.Label>
                    <div className={`input-field ${loginTouched.email && loginErrors.email ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconMail /></span>
                      <Form.Control
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        onBlur={() => setLoginTouched((t) => ({ ...t, email: true }))}
                        aria-invalid={Boolean(loginTouched.email && loginErrors.email)}
                        aria-describedby={loginTouched.email && loginErrors.email ? 'login-email-error' : undefined}
                        required
                      />
                    </div>
                    {loginTouched.email && loginErrors.email && (
                      <div id="login-email-error" className="error-text">{loginErrors.email}</div>
                    )}
                  </div>

                  <div className="input-group">
                    <Form.Label htmlFor="login-password">Password</Form.Label>
                    <div className={`input-field ${loginTouched.password && loginErrors.password ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconLock /></span>
                      <Form.Control
                        id="login-password"
                        name="password"
                        type={showLoginPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        onBlur={() => setLoginTouched((t) => ({ ...t, password: true }))}
                        aria-invalid={Boolean(loginTouched.password && loginErrors.password)}
                        aria-describedby={loginTouched.password && loginErrors.password ? 'login-password-error' : undefined}
                        required
                      />
                      <button
                        type="button"
                        className="toggle-visibility"
                        aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                        onClick={() => setShowLoginPassword((v) => !v)}
                      >
                        {showLoginPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    {loginTouched.password && loginErrors.password && (
                      <div id="login-password-error" className="error-text">{loginErrors.password}</div>
                    )}
                  </div>

                  <div className="meta-row">
                    <Link to="/forgot-password" className="link">Forgot Password?</Link>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="primary-btn" aria-label="Login" disabled={!isLoginValid}>
                      <span className="btn-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      </span>
                      Login
                    </button>
                    <button type="button" className="google-btn" aria-label="Sign in with Google">
                      <span className="g-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.827 32.332 29.284 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.676 6.053 29.614 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c10.493 0 19.127-7.879 19.127-20 0-1.341-.138-2.651-.516-3.917z"/>
                          <path fill="#FF3D00" d="M6.306 14.691l6.571 4.815C14.406 16.226 18.86 12 24 12c3.059 0 5.842 1.154 7.957 3.043l5.657-5.657C34.676 6.053 29.614 4 24 4 16.318 4 9.594 8.337 6.306 14.691z"/>
                          <path fill="#4CAF50" d="M24 44c5.214 0 9.936-1.997 13.523-5.243l-6.241-5.27C29.196 35.091 26.755 36 24 36c-5.259 0-9.812-3.686-11.287-8.67l-6.482 5.002C8.449 39.556 15.635 44 24 44z"/>
                          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.093 3.19-3.641 5.694-6.78 6.987l6.241 5.27C36.241 40.203 40 34.667 40 27c0-2.326-.389-3.917-.389-3.917z"/>
                        </svg>
                      </span>
                      Sign in with Google
                    </button>
                  </div>
                </form>

                <p className="toggle-text">
                  Don’t have an account? <button type="button" className="link inline" onClick={() => navigate('/signup')}> Sign up</button>
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
                    <Form.Label htmlFor="signup-username">Username</Form.Label>
                    <div className={`input-field ${signupTouched.username && signupErrors.username ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconUser /></span>
                      <Form.Control
                        id="signup-username"
                        name="username"
                        type="text"
                        placeholder="yourname"
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        onBlur={() => setSignupTouched((t) => ({ ...t, username: true }))}
                        aria-invalid={Boolean(signupTouched.username && signupErrors.username)}
                        aria-describedby={signupTouched.username && signupErrors.username ? 'signup-username-error' : undefined}
                        required
                      />
                    </div>
                    {signupTouched.username && signupErrors.username && (
                      <div id="signup-username-error" className="error-text">{signupErrors.username}</div>
                    )}
                  </div>

                  <div className="input-group">
                    <Form.Label htmlFor="signup-email">Email</Form.Label>
                    <div className={`input-field ${signupTouched.email && signupErrors.email ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconMail /></span>
                      <Form.Control
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        onBlur={() => setSignupTouched((t) => ({ ...t, email: true }))}
                        aria-invalid={Boolean(signupTouched.email && signupErrors.email)}
                        aria-describedby={signupTouched.email && signupErrors.email ? 'signup-email-error' : undefined}
                        required
                      />
                    </div>
                    {signupTouched.email && signupErrors.email && (
                      <div id="signup-email-error" className="error-text">{signupErrors.email}</div>
                    )}
                  </div>

                  <div className="grid-2">
                    <div className="input-group">
                      <Form.Label htmlFor="signup-password">Password</Form.Label>
                      <div className={`input-field ${signupTouched.password && signupErrors.password ? 'has-error' : ''}`}>
                        <span className="icon" aria-hidden><IconLock /></span>
                        <Form.Control
                          id="signup-password"
                          name="password"
                          type={showSignupPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          onBlur={() => setSignupTouched((t) => ({ ...t, password: true }))}
                          aria-invalid={Boolean(signupTouched.password && signupErrors.password)}
                          aria-describedby={signupTouched.password && signupErrors.password ? 'signup-password-error' : undefined}
                          required
                        />
                        <button type="button" className="toggle-visibility" onClick={() => setShowSignupPassword((v) => !v)}>{showSignupPassword ? 'Hide' : 'Show'}</button>
                      </div>
                      {signupTouched.password && signupErrors.password && (
                        <div id="signup-password-error" className="error-text">{signupErrors.password}</div>
                      )}
                    </div>

                    <div className="input-group">
                      <Form.Label htmlFor="signup-confirm">Confirm Password</Form.Label>
                      <div className={`input-field ${signupTouched.confirm && signupErrors.confirm ? 'has-error' : ''}`}>
                        <span className="icon" aria-hidden><IconLock /></span>
                        <Form.Control
                          id="signup-confirm"
                          name="confirm"
                          type={showSignupConfirm ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={signupConfirm}
                          onChange={(e) => setSignupConfirm(e.target.value)}
                          onBlur={() => setSignupTouched((t) => ({ ...t, confirm: true }))}
                          aria-invalid={Boolean(signupTouched.confirm && signupErrors.confirm)}
                          aria-describedby={signupTouched.confirm && signupErrors.confirm ? 'signup-confirm-error' : undefined}
                          required
                        />
                        <button type="button" className="toggle-visibility" onClick={() => setShowSignupConfirm((v) => !v)}>{showSignupConfirm ? 'Hide' : 'Show'}</button>
                      </div>
                      {signupTouched.confirm && signupErrors.confirm && (
                        <div id="signup-confirm-error" className="error-text">{signupErrors.confirm}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="primary-btn" aria-label="Signup" disabled={!isSignupValid}>
                      Signup
                    </button>
                  </div>
                </form>

                <p className="toggle-text">
                  Already have an account? <button type="button" className="link inline" onClick={() => navigate('/login')}>Log in</button>
                </p>
              </>
            )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Auth;


