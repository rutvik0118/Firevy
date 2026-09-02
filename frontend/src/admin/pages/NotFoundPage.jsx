import React from 'react';
import { ShieldAlert, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="page-container flex-center animate-fade-in"
      style={{ minHeight: '70vh', flexDirection: 'column', textAlign: 'center' }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--primary-light)',
          border: '1px solid rgba(0, 107, 143, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          marginBottom: '1.25rem'
        }}
      >
        <ShieldAlert size={32} />
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
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
