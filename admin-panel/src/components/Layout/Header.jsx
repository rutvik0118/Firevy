import React, { useState, useEffect } from 'react';
import { Menu, Bell, RefreshCw, ExternalLink, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { adminService } from '../../services/adminService';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import storageService from '../../services/storageService';

const Header = ({ onOpenMobileMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [healthStatus, setHealthStatus] = useState({ online: true, latency: 24, loading: false });
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [logs, setLogs] = useState([]);

  const checkHealth = async () => {
    setHealthStatus((prev) => ({ ...prev, loading: true }));
    const startTime = performance.now();
    try {
      await adminService.getHealth();
      const latency = Math.round(performance.now() - startTime);
      setHealthStatus({ online: true, latency, loading: false });
    } catch {
      setHealthStatus({ online: false, latency: 0, loading: false });
    }
  };

  useEffect(() => {
    checkHealth();
    setLogs(storageService.getActivityLogs());
    const interval = setInterval(checkHealth, 25000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    addToast('Logged out successfully', 'info');
    navigate('/admin', { replace: true });
  };

  return (
    <header className="top-header">
      {/* Left controls */}
      <div className="header-left-tools">
        <button
          onClick={onOpenMobileMenu}
          className="btn btn-ghost btn-icon md:hidden"
          style={{ display: 'flex' }}
          aria-label="Toggle Mobile Menu"
        >
          <Menu size={20} />
        </button>

        {/* Live Backend Health Indicator */}
        <div
          className={`api-health-pill ${!healthStatus.online ? 'offline' : ''}`}
          title="Live REST API Gateway Status"
          onClick={checkHealth}
          style={{ cursor: 'pointer' }}
        >
          <span className={`pulse-dot ${healthStatus.online ? 'pulse-green' : 'pulse-red'}`} />
          <span>
            {healthStatus.loading
              ? 'Checking...'
              : healthStatus.online
              ? `API Online (${healthStatus.latency}ms)`
              : 'Backend Offline'}
          </span>
          <RefreshCw
            size={12}
            className={healthStatus.loading ? 'animate-spin' : ''}
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>

      {/* Right controls */}
      <div className="header-right-tools">
        {/* Frontend Main Site Link */}
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          style={{ gap: '0.375rem' }}
        >
          <span>Main Site</span>
          <ExternalLink size={13} />
        </a>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="btn btn-secondary btn-icon"
            title="System Activity & Alerts"
          >
            <Bell size={17} />
            {logs.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '7px',
                  right: '7px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}
              />
            )}
          </button>

          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '320px',
                zIndex: 50,
                padding: '1rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>System Activity</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => setLogs([])}>
                  Clear
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '240px', overflowY: 'auto' }}>
                {logs.length > 0 ? (
                  logs.map((log) => (
                    <div
                      key={log.id}
                      style={{
                        padding: '0.5rem 0.625rem',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--bg-tertiary)',
                        fontSize: '0.75rem'
                      }}
                    >
                      <div style={{ fontWeight: 600, color: '#ffffff' }}>{log.action}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginTop: '2px' }}>
                        <span>{log.user}</span>
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>
                    No new activity alerts
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="btn btn-secondary"
            style={{ padding: '0.35rem 0.75rem', gap: '0.5rem' }}
          >
            <div className="admin-avatar" style={{ width: '24px', height: '24px', fontSize: '0.6875rem' }}>
              {user?.avatar || 'AD'}
            </div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#ffffff' }}>{user?.name || 'Admin'}</span>
          </button>

          {showUserMenu && (
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '210px',
                zIndex: 50,
                padding: '0.5rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ padding: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#ffffff' }}>{user?.name}</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{user?.email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-sm"
                style={{ width: '100%', justifyContent: 'flex-start', color: '#fca5a5', marginTop: '0.375rem', gap: '0.5rem' }}
              >
                <LogOut size={14} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
