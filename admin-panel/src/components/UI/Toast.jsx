import React from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';

const Toast = ({ toasts = [], onDismiss }) => {
  if (toasts.length === 0) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={20} className="text-emerald-400" />;
      case 'error':
        return <AlertCircle size={20} className="text-red-400" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-amber-400" />;
      case 'info':
      default:
        return <Info size={20} className="text-cyan-400" />;
    }
  };

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast-item toast-${t.type}`}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
            {getIcon(t.type)}
          </div>
          <div style={{ flex: 1, fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.4 }}>
            {t.message}
          </div>
          <button
            onClick={() => onDismiss(t.id)}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              opacity: 0.7,
              padding: '2px',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Dismiss notification"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
