import React from 'react';
import { useAuth } from '../context/AuthContext';

export const AdminPublicRoute = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div
        className="admin-scope"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
          <div
            className="animate-spin"
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid rgba(0, 107, 143, 0.2)',
              borderTopColor: 'var(--primary)',
              borderRadius: '50%'
            }}
          />
          <span>Loading Admin Portal...</span>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminPublicRoute;
