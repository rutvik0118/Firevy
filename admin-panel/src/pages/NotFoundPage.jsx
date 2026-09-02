import React from 'react';
import { ShieldAlert, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="page-container flex-center"
      style={{ minHeight: '70vh', flexDirection: 'column', textAlign: 'center' }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-medium)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          marginBottom: '1.25rem'
        }}
      >
        <ShieldAlert size={32} />
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
        Admin Route Not Found
      </h2>
      <p style={{ maxWidth: '400px', color: 'var(--text-muted)', fontSize: '0.84375rem', marginBottom: '1.75rem' }}>
        The requested admin control module or endpoint does not exist.
      </p>

      <button onClick={() => navigate('/admin/dashboard')} className="btn btn-primary">
        <Home size={15} />
        <span>Return to Dashboard</span>
      </button>
    </div>
  );
};

export default NotFoundPage;
