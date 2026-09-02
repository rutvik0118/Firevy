import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

const ICONS = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

export const Toast = ({ message, type = 'info', duration = 3500, onClose }) => {
  const Icon = ICONS[type] || Info;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`toast-item toast-${type} animate-fade-in`}>
      <Icon size={18} style={{ minWidth: 18, marginTop: '2px' }} />
      <div style={{ flex: 1, fontSize: '0.8125rem', lineHeight: 1.4 }}>{message}</div>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'inherit',
          opacity: 0.7,
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
