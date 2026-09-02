import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="admin-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ShieldCheck size={14} style={{ color: '#10b981' }} />
        <span>Enterprise Security Policy: STRICT TLS / JWT HMAC-SHA256</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span>Build v1.0.0-PROD</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <Cpu size={13} />
          <span>Firevy.co Core Engine</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
