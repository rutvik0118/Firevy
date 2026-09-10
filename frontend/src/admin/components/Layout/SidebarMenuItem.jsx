import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

/**
 * SidebarMenuItem Component
 * 
 * Renders parent expandable navigation groups and child sub-pages with:
 * - Proper visual hierarchy and indentation
 * - Active route indicators
 * - Graceful text truncation with ellipsis
 * - Smooth chevron toggle state
 */
export const SidebarMenuItem = ({
  item,
  isCollapsed = false,
  onCloseMobile
}) => {
  const location = useLocation();
  const Icon = item.icon;

  // Direct Nav Link with active matching on route prefixes
  const isDirectActive =
    item.path === '/admin/dashboard'
      ? location.pathname === '/admin/dashboard'
      : location.pathname.startsWith(item.path);

  return (
    <NavLink
      to={item.path}
      className={`nav-item ${isDirectActive ? 'active' : ''}`}
      onClick={onCloseMobile}
      title={isCollapsed ? item.label : undefined}
    >
      <div className="nav-item-content">
        <div className="nav-item-icon">
          <Icon size={18} />
        </div>
        {!isCollapsed && (
          <span className="nav-item-text" title={item.label}>
            {item.label}
          </span>
        )}
      </div>
    </NavLink>
  );
};

export default SidebarMenuItem;
