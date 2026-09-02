import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const JsonViewer = ({ data, title = 'JSON Payload' }) => {
  const [copied, setCopied] = useState(false);

  const jsonString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}
      >
        <span>{title}</span>
        <button
          onClick={handleCopy}
          className="btn btn-secondary btn-sm"
          style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
        >
          {copied ? <Check size={12} style={{ color: '#10b981' }} /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="json-box">{jsonString}</pre>
    </div>
  );
};

export default JsonViewer;
