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
  isExpanded = false,
  onToggleExpand,
  onCloseMobile
}) => {
  const location = useLocation();
  const Icon = item.icon;

  if (item.isExpandable && item.subItems) {
    const isGroupActive = item.subItems.some((sub) => location.pathname === sub.path);

    return (
      <div className={`sidebar-menu-group ${isGroupActive ? 'has-active-child' : ''} ${isExpanded ? 'is-expanded' : ''}`}>
        {/* Parent Header Item */}
        <div
          className={`nav-item ${isGroupActive ? 'has-active' : ''} ${isExpanded ? 'expanded' : ''}`}
          title={isCollapsed ? item.label : undefined}
          onClick={() => onToggleExpand(item.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggleExpand(item.id);
            }
          }}
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

          {!isCollapsed && (
            <span className={`nav-item-arrow ${isExpanded ? 'rotated' : ''}`}>
              <ChevronDown size={14} />
            </span>
          )}
        </div>

        {/* Indented Submenu for Child Sub-Pages */}
        {!isCollapsed && isExpanded && (
          <div className="sidebar-submenu-container animate-fade-in">
            <div className="sidebar-submenu-list">
              {item.subItems.map((sub, sIdx) => {
                if (sub.isHeader) {
                  return (
                    <div
                      key={sIdx}
                      className="sidebar-submenu-header"
                    >
                      {sub.label}
                    </div>
                  );
                }

                const isSubActive = location.pathname === sub.path;

                return (
                  <NavLink
                    key={sIdx}
                    to={sub.path}
                    onClick={onCloseMobile}
                    className={`sidebar-submenu-link ${isSubActive ? 'active' : ''}`}
                    title={sub.label}
                  >
                    <span className="sidebar-submenu-bullet" />
                    <span className="sidebar-submenu-text">{sub.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Direct Non-Expandable Nav Link (e.g. Dashboard, Home Page)
  const isDirectActive =
    item.id === 'home-page'
      ? location.pathname.startsWith('/admin/home-page')
      : location.pathname === item.path;

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
