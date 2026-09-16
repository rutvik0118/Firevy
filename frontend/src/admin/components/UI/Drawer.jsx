import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export const Drawer = ({ isOpen, onClose, title, subtitle, children, footer, width = '820px' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div
        className="drawer-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: `min(${width}, 95vw)`,
          height: '100%',
          maxHeight: '100%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 1001,
          boxShadow: '-4px 0 25px rgba(0, 0, 0, 0.12)',
          boxSizing: 'border-box'
        }}
      >
        <div
          className="drawer-header"
          style={{
            padding: '14px 20px',
            borderBottom: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            flexShrink: 0,
            flexGrow: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h3>
            {subtitle && (
              <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#64748B' }}>
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '6px',
              border: '1px solid #E2E8F0',
              backgroundColor: 'transparent',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#64748B';
            }}
            title="Close Drawer"
          >
            <X size={16} />
          </button>
        </div>

        <div
          className="drawer-body"
          style={{
            padding: '16px 20px',
            flex: '1 1 auto',
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: '#F8FAFC',
            boxSizing: 'border-box'
          }}
        >
          {children}
        </div>

        {footer && (
          <div
            className="drawer-footer"
            style={{
              padding: '14px 20px',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              flexShrink: 0,
              flexGrow: 0,
              width: '100%',
              boxSizing: 'border-box',
              zIndex: 10
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </>,
    document.body
  );
};

export default Drawer;
