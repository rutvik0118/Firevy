import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Layers,
  Briefcase,
  Users2,
  Inbox,
  Building2,
  Cpu,
  Star,
  Settings,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Shield,
  LogOut,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

const NAV_ITEMS = [
  {
    section: 'Core Management',
    items: [
      { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { path: '/admin/services', label: 'Services', icon: Layers, badge: '10' },
      { path: '/admin/portfolio', label: 'Portfolio', icon: Briefcase, badge: '6' },
      { path: '/admin/jobs', label: 'Jobs', icon: Users2, badge: '3' },
      { path: '/admin/applications', label: 'Applications', icon: UserCheck },
      { path: '/admin/inquiries', label: 'Inquiries', icon: Inbox },
    ]
  },
  {
    section: 'Domain Content',
    items: [
      { path: '/admin/industries', label: 'Industries', icon: Building2, badge: '8' },
      { path: '/admin/technologies', label: 'Tech Stack', icon: Cpu, badge: '19' },
      { path: '/admin/testimonials', label: 'Testimonials', icon: Star, badge: '4' },
    ]
  },
  {
    section: 'System & Developer',
    items: [
      { path: '/admin/api-playground', label: 'API Playground', icon: Terminal },
      { path: '/admin/settings', label: 'Settings', icon: Settings },
    ]
  }
];

export const Sidebar = ({ isCollapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { addToast } = useToast();

  const handleLogout = () => {
    logout();
    addToast('Signed out of Admin Panel', 'info');
    navigate('/admin', { replace: true });
  };

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      aria-label="Sidebar Navigation"
    >
      {/* Brand Header */}
      <div className="sidebar-header">
        <NavLink to="/admin/dashboard" className="brand-logo-wrap" onClick={onCloseMobile}>
          <div className="brand-icon-box">
            <Shield size={20} />
          </div>
          {!isCollapsed && (
            <div className="brand-text-col">
              <span className="brand-name">FIREVY</span>
              <span className="brand-badge">Admin Panel</span>
            </div>
          )}
        </NavLink>

        <button
          onClick={onToggleCollapse}
          className="btn btn-ghost btn-icon-sm"
          style={{ display: isMobileOpen ? 'none' : 'flex' }}
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Nav List */}
      <div className="sidebar-nav-container">
        {NAV_ITEMS.map((group, gIdx) => (
          <div key={gIdx}>
            {!isCollapsed && <div className="nav-section-title">{group.section}</div>}
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={onCloseMobile}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div className="nav-item-content">
                    <div className="nav-item-icon">
                      <Icon size={18} />
                    </div>
                    {!isCollapsed && <span className="nav-item-text">{item.label}</span>}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className="nav-item-count">{item.badge}</span>
                  )}
                </NavLink>
              );
            })}
          </div>
        ))}
      </div>

      {/* Sidebar Footer / User Profile */}
      <div className="sidebar-footer">
        {!isCollapsed && user && (
          <div className="admin-user-card">
            <div className="admin-avatar">{user.avatar || 'AD'}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.role}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-ghost btn-icon-sm"
              style={{ color: 'var(--text-muted)' }}
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
