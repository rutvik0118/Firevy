import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const JsonViewer = ({ data, maxHeight = '380px' }) => {
  const [copied, setCopied] = useState(false);

  const formattedJson = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleCopy}
        className="btn btn-secondary btn-sm"
        style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          zIndex: 5,
          padding: '0.25rem 0.5rem',
          fontSize: '0.75rem'
        }}
        title="Copy JSON to clipboard"
      >
        {copied ? (
          <>
            <Check size={14} className="text-emerald-400" />
            <span style={{ color: '#34d399' }}>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>Copy</span>
          </>
        )}
      </button>

      <pre
        className="json-box"
        style={{
          maxHeight,
          overflowY: 'auto',
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        <code>{formattedJson}</code>
      </pre>
    </div>
  );
};

export default JsonViewer;
