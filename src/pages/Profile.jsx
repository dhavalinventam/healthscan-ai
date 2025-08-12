import React from 'react';
import { getUser } from '../utils/auth';

const Profile = () => {
  const user = getUser();

  return (
    <div className="dashboard-page">
      <div className="container" style={{ paddingTop: '1.5rem' }}>
        <section className="dashboard-section" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title">Your <span className="gradient-text">Profile</span></h2>
          <p className="security-text">Manage your account details.</p>
        </section>

        <section className="dashboard-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Avatar name={user?.name} />
            <div>
              <div style={{ fontWeight: 600 }}>{user?.name || 'User'}</div>
              <div style={{ color: '#6B7280', fontSize: 14 }}>{user?.email}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function Avatar({ name }) {
  const initials = (name || 'User')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');

  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: '#E8F1FF',
        color: '#0054D1',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
      }}
      aria-label={`${name || 'User'} avatar`}
    >
      {initials}
    </div>
  );
}

export default Profile;


