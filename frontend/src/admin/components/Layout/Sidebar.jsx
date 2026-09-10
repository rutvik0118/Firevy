import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Home,
  Building2,
  Package,
  Layers,
  Users2,
  Cpu,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import SidebarMenuItem from './SidebarMenuItem';
import { useToast } from '../../context/ToastContext';

const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin/dashboard'
  },
  {
    id: 'home-page',
    label: 'Home Page',
    icon: Home,
    path: '/admin/home-page'
  },
  {
    id: 'company',
    label: 'Company',
    icon: Building2,
    path: '/admin/company'
  },
  {
    id: 'product',
    label: 'Product',
    icon: Package,
    path: '/admin/product'
  },
  {
    id: 'services',
    label: 'Services',
    icon: Layers,
    path: '/admin/services'
  },
  {
    id: 'hireDevelopers',
    label: 'Hire Developers',
    icon: Users2,
    path: '/admin/hire'
  },
  {
    id: 'technology',
    label: 'Technology',
    icon: Cpu,
    path: '/admin/technologies'
  },
  {
    id: 'ourWork',
    label: 'Our Work',
    icon: Briefcase,
    path: '/admin/our-work'
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
        <NavLink
          to="/admin/dashboard"
          className="brand-logo-wrap flex items-center"
          onClick={onCloseMobile}
          title="Firevy.co Admin Panel"
        >
          {!isCollapsed ? (
            <div className="brand-logo-full">
              <img
                src="/firevy_logo_dark.png"
                alt="Firevy.co"
                className="brand-logo-img brand-logo-img-light"
              />
              <img
                src="/firevy_logo_white.png"
                alt="Firevy.co"
                className="brand-logo-img brand-logo-img-dark"
              />
            </div>
          ) : (
            <div className="brand-icon-wrap">
              <img
                src="/firevy_icon_dark.png"
                alt="Firevy.co"
                className="brand-icon-img brand-icon-img-light"
              />
              <img
                src="/firevy_icon_white.png"
                alt="Firevy.co"
                className="brand-icon-img brand-icon-img-dark"
              />
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
        <div className="nav-section-title">Navigation</div>

        {NAV_ITEMS.map((item) => (
          <SidebarMenuItem
            key={item.id}
            item={item}
            isCollapsed={isCollapsed}
            onCloseMobile={onCloseMobile}
          />
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

