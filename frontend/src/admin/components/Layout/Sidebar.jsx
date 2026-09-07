import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Home,
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
  ChevronDown,
  LogOut,
  UserCheck,
  Search
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { HOME_PAGE_SECTIONS_LIST } from '../../constants/sectionMetadata';

const NAV_ITEMS = [
  {
    section: 'Core Management',
    items: [
      { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { path: '/admin/home-page', label: 'Home Page', icon: Home, isExpandable: true },
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

  const isCurrentHomeRoute = location.pathname.startsWith('/admin/home-page');
  const [isHomeExpanded, setIsHomeExpanded] = useState(isCurrentHomeRoute);
  const [sectionFilter, setSectionFilter] = useState('');

  // Auto-expand Home Page submenu if navigating to any home-page route
  useEffect(() => {
    if (location.pathname.startsWith('/admin/home-page')) {
      setIsHomeExpanded(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    addToast('Signed out of Admin Panel', 'info');
    navigate('/admin', { replace: true });
  };

  const filteredSections = HOME_PAGE_SECTIONS_LIST.filter((sec) =>
    sec.title.toLowerCase().includes(sectionFilter.toLowerCase()) ||
    sec.category.toLowerCase().includes(sectionFilter.toLowerCase())
  );

  return (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      aria-label="Sidebar Navigation"
    >
      {/* Brand Header */}
      <div className="sidebar-header">
        <NavLink
          to="/admin/dashboard"
          className="brand-logo-wrap"
          onClick={onCloseMobile}
          title="firevy.co Admin Panel"
        >
          {!isCollapsed ? (
            <div className="brand-logo-text">
              <span className="brand-logo-name">firevy</span>
              <span className="brand-logo-domain">.co</span>
            </div>
          ) : (
            <div className="brand-logo-collapsed">
              <span className="brand-logo-name">f</span>
              <span className="brand-logo-domain">.co</span>
            </div>
          )}
        </NavLink>

        <button
          onClick={onToggleCollapse}
          className="btn btn-ghost btn-icon-sm sidebar-collapse-btn"
          style={{ display: isMobileOpen ? 'none' : 'flex' }}
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
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
              const isDirectActive = location.pathname === item.path;
              const isGroupActive = item.isExpandable && location.pathname.startsWith(item.path);

              if (item.isExpandable) {
                return (
                  <div key={item.path} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                      className={`nav-item ${isGroupActive ? 'active' : ''}`}
                      style={{ cursor: 'pointer', userSelect: 'none' }}
                      title={isCollapsed ? item.label : undefined}
                      onClick={() => {
                        if (isCollapsed) {
                          navigate('/admin/home-page');
                          if (onCloseMobile) onCloseMobile();
                        } else {
                          setIsHomeExpanded(!isHomeExpanded);
                        }
                      }}
                    >
                      <div className="nav-item-content" style={{ flex: 1 }}>
                        <div className="nav-item-icon">
                          <Icon size={18} />
                        </div>
                        {!isCollapsed && <span className="nav-item-text">{item.label}</span>}
                      </div>

                      {!isCollapsed && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {item.badge && <span className="nav-item-count">{item.badge}</span>}
                          <span
                            style={{
                              color: '#94A3B8',
                              display: 'flex',
                              alignItems: 'center',
                              transform: isHomeExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease'
                            }}
                          >
                            <ChevronDown size={14} />
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Expandable Submenu for Sections */}
                    {!isCollapsed && isHomeExpanded && (
                      <div
                        style={{
                          margin: '2px 0 6px 16px',
                          paddingLeft: '10px',
                          borderLeft: '2px solid #E2E8F0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px'
                        }}
                      >
                        {/* Main Overview Link */}
                        <NavLink
                          to="/admin/home-page"
                          end
                          className={({ isActive }) =>
                            `sidebar-submenu-item ${isActive ? 'active' : ''}`
                          }
                          onClick={onCloseMobile}
                          style={({ isActive }) => ({
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px 10px',
                            borderRadius: '5px',
                            fontSize: '12px',
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? '#006B8F' : '#334155',
                            backgroundColor: isActive ? '#F0F9FF' : 'transparent',
                            textDecoration: 'none',
                            transition: 'all 0.15s ease'
                          })}
                        >
                          <span>Overview (All 22)</span>
                        </NavLink>

                        {/* Search Filter for 22 Sections */}
                        <div style={{ position: 'relative', margin: '4px 0 2px 0' }}>
                          <Search size={11} style={{ position: 'absolute', left: '7px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                          <input
                            type="text"
                            placeholder="Find section..."
                            value={sectionFilter}
                            onChange={(e) => setSectionFilter(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '3px 6px 3px 22px',
                              borderRadius: '4px',
                              border: '1px solid #E2E8F0',
                              fontSize: '11px',
                              backgroundColor: '#F8FAFC',
                              color: '#0F172A',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        {/* Scrollable Submenu Items List */}
                        <div
                          style={{
                            maxHeight: '260px',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1px',
                            paddingRight: '2px'
                          }}
                        >
                          {filteredSections.map((sec) => {
                            const secPath = `/admin/home-page/${sec.key}`;
                            const isSecActive = location.pathname === secPath;

                            return (
                              <NavLink
                                key={sec.key}
                                to={secPath}
                                onClick={onCloseMobile}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  padding: '5px 8px',
                                  borderRadius: '5px',
                                  fontSize: '11.5px',
                                  fontWeight: isSecActive ? 700 : 500,
                                  color: isSecActive ? '#006B8F' : '#475569',
                                  backgroundColor: isSecActive ? '#E0F2FE' : 'transparent',
                                  textDecoration: 'none',
                                  transition: 'all 0.12s ease'
                                }}
                                title={`${sec.title} (${sec.category})`}
                              >
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }}>
                                  {sec.title}
                                </span>
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${isDirectActive ? 'active' : ''}`}
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

