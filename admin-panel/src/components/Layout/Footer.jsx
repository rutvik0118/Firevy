import React from 'react';
import { Shield, Server, Terminal, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="admin-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Shield size={14} className="text-cyan-400" />
          <span>Firevy.co Cloud Operations Center</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Server size={14} />
          <span>API v1.0.0</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Clock size={14} />
          <span>{new Date().toUTCString()}</span>
        </span>
        <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
          Environment: Production
        </span>
      </div>
    </footer>
  );
};

export default Footer;
