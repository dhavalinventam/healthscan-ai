import React, { useMemo, useState } from 'react';
import { getUser } from '../utils/auth';
import './Dashboard.scss';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const user = getUser();

  const reportRows = useMemo(
    () => [
      { id: 1, name: 'Blood Test - Jan', date: 'Jan 10, 2025', status: 'Complete' },
      { id: 2, name: 'MRI Brain Scan', date: 'Feb 02, 2025', status: 'Complete' },
      { id: 3, name: 'X-Ray Chest', date: 'Feb 05, 2025', status: 'In Progress' },
    ],
    []
  );

  const filteredRows = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery) return reportRows;
    return reportRows.filter(row => row.name.toLowerCase().includes(normalizedQuery));
  }, [reportRows, searchQuery]);

  return (
    <main className="dashboard-page">
      <div className="container">
        {/* Header / Greeting */}
        <section className="dashboard-header">
          <div className="greeting">
            <h1 className="title">Hi, {user?.name || 'User'}</h1>
            <p className="subtitle">
              Here’s your health report history
              <span className="muted"> · Your last report was analyzed 3 days ago</span>
            </p>
          </div>
        </section>

        {/* Quick actions */}
        <section className="quick-actions">
          <div className="action-card">
            <div className="icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content">
              <h3 className="card-title">Upload New Report</h3>
              <p className="card-subtitle">Drag & drop or click to upload</p>
            </div>
          </div>

          <div className="action-card">
            <div className="icon success">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="content">
              <h3 className="card-title">Download Last Report</h3>
              <p className="card-subtitle">Blood Test - Jan 10, 2025</p>
            </div>
          </div>

          <div className="action-card">
            <div className="icon clock">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="content">
              <h3 className="card-title">View Health Summary</h3>
              <p className="card-subtitle">2 items need attention</p>
            </div>
          </div>
        </section>

        {/* Report History */}
        <section className="dashboard-section">
          <div className="section-header">
            <h2 className="section-title">Report <span className="gradient-text">History</span></h2>
            <div className="section-actions">
              <button className="btn-filter" type="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 5h18M6 12h12M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Filter
              </button>
              <div className="search">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search reports"
                />
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="report-table" role="table">
              <thead>
                <tr>
                  <th scope="col">Report Name</th>
                  <th scope="col">Upload Date</th>
                  <th scope="col">Status</th>
                  <th scope="col" className="actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr key={row.id}>
                    <td className="report-cell">
                      <span className="file-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M13 2v6h6" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </span>
                      <span className="report-name">{row.name}</span>
                    </td>
                    <td>{row.date}</td>
                    <td>
                      {row.status === 'Complete' ? (
                        <span className="status complete">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Complete
                        </span>
                      ) : (
                        <span className="status progress">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          In Progress
                        </span>
                      )}
                    </td>
                    <td className="row-actions">
                      <button className="link-btn" type="button">View</button>
                      <button className="link-btn" type="button">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          <div className="card overview-card">
            <h3 className="card-title">Health Overview</h3>
            <div className="overview-stats">
              <div className="stat">
                <div className="value">15</div>
                <div className="label">Total Reports</div>
              </div>
              <div className="stat">
                <div className="value">3</div>
                <div className="label">This Month</div>
              </div>
              <div className="stat">
                <div className="value warning">2</div>
                <div className="label">Flagged Items</div>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '72%' }} aria-label="Completion 72%" />
            </div>
          </div>

          <div className="card trends-card">
            <h3 className="card-title">Health Trends</h3>
            <ul className="legend">
              <li><span className="dot normal" /> Normal Values</li>
              <li><span className="dot abnormal" /> Abnormal Values</li>
            </ul>
            <div className="trend-placeholder" aria-hidden>
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
                <path d="M10 90 C 40 60, 80 70, 110 50 S 180 30, 210 40" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <path d="M10 95 H210" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </svg>
            </div>
          </div>
        </section>

        {/* Banners */}
        <div className="alert-bar">
          <div className="icon" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>2 values in your last report need attention</p>
        </div>

        <div className="promo-bar">
          <div className="icon" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p>Try our new Smart Summary feature!</p>
        </div>

        {/* Security & Privacy */}
        <section className="security-section">
          <h3 className="section-title">Security & Privacy</h3>
          <p className="security-text">
            Your data is securely encrypted and private. We use industry-standard security measures to protect your information.
          </p>
          <div className="links">
            <a href="#" className="link">Privacy Policy</a>
            <a href="#" className="link">Terms of Service</a>
            <a href="#" className="link">Data Security</a>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Dashboard;


