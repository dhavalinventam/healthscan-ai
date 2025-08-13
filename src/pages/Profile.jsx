import React, { useMemo, useState } from "react";
import { getUser } from "../utils/auth";
import "./Profile.scss";
import { Form, Row, Col } from "react-bootstrap";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Profile = () => {
  const user = getUser();

  // Profile Information state
  const [fullName, setFullName] = useState(user?.name || "");
  const [email] = useState(user?.email || ""); // read-only
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [profileSaved, setProfileSaved] = useState(false);
  const profileErrors = useMemo(
    () => ({
      fullName: !fullName ? "Full name is required" : "",
      email: !email
        ? "Email is required"
        : !emailPattern.test(email)
        ? "Enter a valid email"
        : "",
    }),
    [fullName, email]
  );

  // Security state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurr, setShowCurr] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  // Billing state
  const [autoRenew, setAutoRenew] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("card"); // card | upi
  const [plan] = useState({
    name: "Pro",
    price: "₹499/mo",
    renewal: "2025-09-01",
  });
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [billingSaved, setBillingSaved] = useState(false);
  const invoices = [
    { id: "INV-2042", date: "2025-08-01", amount: "₹499", url: "#" },
    { id: "INV-2001", date: "2025-07-01", amount: "₹499", url: "#" },
    { id: "INV-1960", date: "2025-06-01", amount: "₹499", url: "#" },
  ];

  // Handlers
  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (profileErrors.fullName || profileErrors.email) return;
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPasswordSaved(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 2500);
  };

  const handleSaveBilling = (e) => {
    e.preventDefault();
    setBillingSaved(true);
    setTimeout(() => setBillingSaved(false), 2500);
  };

  return (
    <main className="profile-page">
      <div className="container">
        <header className="page-header">
          <h2 className="section-title">
            Account <span className="gradient-text">Settings</span>
          </h2>
          <p className="page-subtitle">
            Manage your profile, security, billing, and support from one place.
          </p>
        </header>

        {/* Hero summary */}
        <section className="profile-hero" aria-label="Profile summary">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-avatar">
                <Avatar name={fullName || user?.name} />
              </div>
              <div className="hero-info">
                <div className="hero-title">Hi, {fullName || user?.name || "User"}</div>
                <div className="hero-subtitle">{email}</div>
              </div>
            </div>
            <div className="hero-right">
              <span className="plan-badge">{plan.name} plan</span>
              <span className="renewal-text">Renews {plan.renewal}</span>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <div className="quick-actions" aria-label="Quick actions">
          <a href="#profile" className="action-card">
            <div className="icon-circle"><IconUser /></div>
            <div className="content">
              <div className="title">Edit Profile</div>
              <div className="subtitle">Name, contact, details</div>
            </div>
          </a>
          <a href="#security" className="action-card">
            <div className="icon-circle"><IconShield /></div>
            <div className="content">
              <div className="title">Change Password</div>
              <div className="subtitle">Keep your account secure</div>
            </div>
          </a>
          <a href="#billing" className="action-card">
            <div className="icon-circle"><IconCard /></div>
            <div className="content">
              <div className="title">Manage Billing</div>
              <div className="subtitle">Plan, payment, invoices</div>
            </div>
          </a>
        </div>

        <div className="sections-grid">
        {/* Profile Information */}
        <section
          id="profile"
          className="card-section"
          aria-labelledby="profile-title"
        >
          <div className="card-header">
            <h3 id="profile-title" className="card-title">
              <IconUser /> Profile Information
            </h3>
          </div>
          <div className="card-body">
            <div className="profile-top">
              <Avatar name={fullName || user?.name} />
              <div className="profile-identity">
                <div className="name">{fullName || user?.name || "User"}</div>
                <div className="email">{email}</div>
                <button type="button" className="button button--outline with-icon">
                  <IconCamera /> <span>Change Photo</span>
                </button>
              </div>
            </div>

            <Form onSubmit={handleSaveProfile} noValidate>
              <Row className="g-3">
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="profileFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      aria-invalid={Boolean(profileErrors.fullName)}
                    />
                    {profileErrors.fullName && (
                      <div className="error-text">{profileErrors.fullName}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="profileEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      readOnly
                      aria-readonly="true"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="profilePhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="profileDob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="profileGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                      <option value="prefer_not">Prefer not to say</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <div className="form-actions">
                    <button type="submit" className="button button--fill">
                      Save Changes
                    </button>
                  </div>
                </Col>
                {profileSaved && (
                  <Col xs={12}>
                    <div className="alert success" role="status">
                      Profile updated successfully.
                    </div>
                  </Col>
                )}
              </Row>
            </Form>
          </div>
        </section>

        {/* Security Settings */}
        <section
          id="security"
          className="card-section"
          aria-labelledby="security-title"
        >
          <div className="card-header">
            <h3 id="security-title" className="card-title">
              <IconShield /> Security Settings
            </h3>
          </div>
          <div className="card-body">
            <Form onSubmit={handleChangePassword} noValidate>
              <Row className="g-3">
                <Col xs={12} md={12} lg={12}>
                  <Form.Group className="mb-3" controlId="secCurrentPassword">
                    <Form.Label>Current Password</Form.Label>
                    <div className="field-with-toggle">
                      <Form.Control
                        type={showCurr ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowCurr((v) => !v)}
                      >
                        {showCurr ? "Hide" : "Show"}
                      </button>
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="secNewPassword">
                    <Form.Label>New Password</Form.Label>
                    <div className="field-with-toggle">
                      <Form.Control
                        type={showNew ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowNew((v) => !v)}
                      >
                        {showNew ? "Hide" : "Show"}
                      </button>
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <Form.Group className="mb-3" controlId="secConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className="field-with-toggle">
                      <Form.Control
                        type={showConf ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="toggle-visibility"
                        onClick={() => setShowConf((v) => !v)}
                      >
                        {showConf ? "Hide" : "Show"}
                      </button>
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <div className="form-actions">
                    <button type="submit" className="button button--fill">
                      Change Password
                    </button>
                  </div>
                </Col>
                {passwordSaved && (
                  <Col xs={12}>
                    <div className="alert success" role="status">
                      Password updated successfully.
                    </div>
                  </Col>
                )}
              </Row>
            </Form>
          </div>
        </section>
        </div>

        {/* Billing & Subscription */}
        <section
          id="billing"
          className="card-section"
          aria-labelledby="billing-title"
        >
          <div className="card-header">
            <h3 id="billing-title" className="card-title">
              <IconCard /> Billing & Subscription
            </h3>
          </div>
          <div className="card-body">
            <div className="plan-card">
              <div className="plan">
                <div className="plan-name">
                  Current Plan: <strong>{plan.name}</strong>
                </div>
                <div className="plan-meta">
                  {plan.price} • Renews on {plan.renewal}
                </div>
              </div>
              <button type="button" className="button button--outline">
                Upgrade / Downgrade Plan
              </button>
            </div>

            <Form onSubmit={handleSaveBilling} noValidate>
              <Row className="g-3">
                <Col xs={12}>
                  <div className="label">Auto-Renewal</div>
                  <div className="toggle-row">
                    <div className="hint">
                      Automatically renew your subscription each cycle.
                    </div>
                    <button
                      type="button"
                      className={`switch ${autoRenew ? "on" : ""}`}
                      aria-pressed={autoRenew}
                      onClick={() => setAutoRenew((v) => !v)}
                    >
                      <span className="thumb" />
                    </button>
                  </div>
                </Col>

                <Col xs={12}>
                  <Form.Group className="mb-2" controlId="billingPaymentMethod">
                    <Form.Label>Payment Method</Form.Label>
                    <div className="payment-methods ms-3">
                      <button
                        type="button"
                        className={`pm-chip ${paymentMethod === 'card' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        Card
                      </button>
                      <button
                        type="button"
                        className={`pm-chip ${paymentMethod === 'upi' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('upi')}
                      >
                        UPI
                      </button>
                    </div>
                  </Form.Group>
                </Col>

                {paymentMethod === "card" && (
                  <>
                    <Col xs={12}>
                      <Form.Group className="mb-3" controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" controlId="cardExpiry">
                        <Form.Label>Expiry</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mb-3" controlId="cardCvc">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="123"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </>
                )}

                {paymentMethod === "upi" && (
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="upiId">
                      <Form.Label>UPI ID</Form.Label>
                      <Form.Control type="text" placeholder="yourname@bank" />
                    </Form.Group>
                  </Col>
                )}

                <Col xs={12}>
                  <div className="form-actions">
                    <button type="submit" className="button button--fill">
                      Save Billing
                    </button>
                  </div>
                </Col>
                {billingSaved && (
                  <Col xs={12}>
                    <div className="alert success" role="status">
                      Billing updated.
                    </div>
                  </Col>
                )}
              </Row>
            </Form>

            <div className="billing-history">
              <div className="label mb-3">Billing History</div>
              <div className="table-wrap">
                <table className="billing-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Invoice</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv) => (
                      <tr key={inv.id}>
                        <td>{inv.date}</td>
                        <td>{inv.id}</td>
                        <td>{inv.amount}</td>
                        <td>
                          <a href={inv.url} className="link-btn" download>
                            Download
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

function Avatar({ name }) {
  const initials = (name || "User")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  return (
    <div className="avatar" aria-label={`${name || "User"} avatar`}>
      {initials}
    </div>
  );
}

// Lightweight inline icons for portability
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 22a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const IconCard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect
      x="2"
      y="5"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M2 9h20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconCamera = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M20 19a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2.586a1 1 0 0 1-.707-.293l-1.414-1.414A2 2 0 0 0 13.172 4h-2.344a2 2 0 0 0-1.414.586L7.999 6.707A1 1 0 0 1 7.292 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default Profile;
