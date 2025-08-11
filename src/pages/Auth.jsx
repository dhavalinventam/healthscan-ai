import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { setAuth, makeUserFromLogin } from '../utils/auth';
import './Auth.scss';

// Simple email regex for client-side validation
const emailPattern = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

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
          <section className="branding" aria-hidden>
            <div className="brand-gradient" />
            <div className="brand-content">
              <h2 className="brand-title">HealthScan AI</h2>
              <p className="brand-subtitle">Secure. Simple. Smart insights from your medical reports.</p>
            </div>
          </section>

          <section className="form-section">
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
                  <h1 id="auth-title" className="form-title">Welcome back</h1>
                  <p className="form-subtitle">Log in to continue to your dashboard</p>
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
                    <label htmlFor="login-email">Email</label>
                    <div className={`input-field ${loginTouched.email && loginErrors.email ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconMail /></span>
                      <input
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
                    <label htmlFor="login-password">Password</label>
                    <div className={`input-field ${loginTouched.password && loginErrors.password ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconLock /></span>
                      <input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        onBlur={() => setLoginTouched((t) => ({ ...t, password: true }))}
                        aria-invalid={Boolean(loginTouched.password && loginErrors.password)}
                        aria-describedby={loginTouched.password && loginErrors.password ? 'login-password-error' : undefined}
                        required
                      />
                    </div>
                    {loginTouched.password && loginErrors.password && (
                      <div id="login-password-error" className="error-text">{loginErrors.password}</div>
                    )}
                  </div>

                  <div className="meta-row">
                    <Link to="#" className="link">Forgot Password?</Link>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="primary-btn" aria-label="Login" disabled={!isLoginValid}>
                      Login
                    </button>
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
                    <label htmlFor="signup-username">Username</label>
                    <div className={`input-field ${signupTouched.username && signupErrors.username ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconUser /></span>
                      <input
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
                    <label htmlFor="signup-email">Email</label>
                    <div className={`input-field ${signupTouched.email && signupErrors.email ? 'has-error' : ''}`}>
                      <span className="icon" aria-hidden><IconMail /></span>
                      <input
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
                      <label htmlFor="signup-password">Password</label>
                      <div className={`input-field ${signupTouched.password && signupErrors.password ? 'has-error' : ''}`}>
                        <span className="icon" aria-hidden><IconLock /></span>
                        <input
                          id="signup-password"
                          name="password"
                          type="password"
                          placeholder="••••••••"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          onBlur={() => setSignupTouched((t) => ({ ...t, password: true }))}
                          aria-invalid={Boolean(signupTouched.password && signupErrors.password)}
                          aria-describedby={signupTouched.password && signupErrors.password ? 'signup-password-error' : undefined}
                          required
                        />
                      </div>
                      {signupTouched.password && signupErrors.password && (
                        <div id="signup-password-error" className="error-text">{signupErrors.password}</div>
                      )}
                    </div>

                    <div className="input-group">
                      <label htmlFor="signup-confirm">Confirm Password</label>
                      <div className={`input-field ${signupTouched.confirm && signupErrors.confirm ? 'has-error' : ''}`}>
                        <span className="icon" aria-hidden><IconLock /></span>
                        <input
                          id="signup-confirm"
                          name="confirm"
                          type="password"
                          placeholder="••••••••"
                          value={signupConfirm}
                          onChange={(e) => setSignupConfirm(e.target.value)}
                          onBlur={() => setSignupTouched((t) => ({ ...t, confirm: true }))}
                          aria-invalid={Boolean(signupTouched.confirm && signupErrors.confirm)}
                          aria-describedby={signupTouched.confirm && signupErrors.confirm ? 'signup-confirm-error' : undefined}
                          required
                        />
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


