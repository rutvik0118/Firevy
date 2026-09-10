import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  ExternalLink,
  ChevronRight,
  Layers
} from 'lucide-react';
import Badge from '../UI/Badge';
import ErrorBoundary from '../UI/ErrorBoundary';

/**
 * Reusable Master-Detail 2-Panel Split Workspace
 * 
 * @param {Object} props
 * @param {string} props.moduleId - Unique identifier (e.g. 'company', 'product', 'services')
 * @param {string} props.title - Top title (e.g. 'Company Management')
 * @param {string} props.description - Top subtitle description
 * @param {React.ElementType} props.icon - Lucide icon component
 * @param {string} props.basePath - Base path prefix (e.g. '/admin/company')
 * @param {Array} props.items - Array of item definitions:
 *   [{
 *      key: 'about-firevy',
 *      title: 'About firevy.co',
 *      category: 'Company Profile',
 *      description: '...',
 *      slug: '/company/about-firevy',
 *      publicRoute: '/company/about-firevy',
 *      group: 'ABOUT US',
 *      component: ReactComponent
 *   }]
 * @param {React.ReactNode} props.headerActions - Optional extra header buttons
 */
export const ModuleMasterDetailManager = ({
  moduleId,
  title,
  description,
  icon: ModuleIcon = Layers,
  basePath,
  items = [],
  headerActions = null
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchFilter, setSearchFilter] = useState('');

  // Extract active slug from params or path
  const activeSlug = useMemo(() => {
    // 1. check params (sectionKey, slug, subPage)
    const paramKey = params.sectionKey || params.slug || params.subPage;
    if (paramKey) {
      const match = items.find(
        (it) => it.key === paramKey || it.key?.toLowerCase() === paramKey.toLowerCase()
      );
      if (match) return match.key;
    }

    // 2. check location pathname suffix
    const suffix = location.pathname.replace(basePath, '').replace(/^\//, '');
    if (suffix) {
      const match = items.find(
        (it) => it.key === suffix || it.key?.toLowerCase() === suffix.toLowerCase()
      );
      if (match) return match.key;
    }

    // 3. default to first non-header item
    return items[0]?.key || '';
  }, [params, location.pathname, basePath, items]);

  const activeItem = useMemo(() => {
    return items.find((it) => it.key === activeSlug) || items[0] || null;
  }, [activeSlug, items]);

  const handleSelectItem = (itemKey) => {
    if (itemKey === activeSlug) return;
    navigate(`${basePath}/${itemKey}`);
  };

  // Filtered items based on search input
  const filteredItems = useMemo(() => {
    if (!searchFilter.trim()) return items;
    const q = searchFilter.toLowerCase();
    return items.filter((it) => {
      return (
        it.title?.toLowerCase().includes(q) ||
        it.key?.toLowerCase().includes(q) ||
        it.category?.toLowerCase().includes(q) ||
        it.group?.toLowerCase().includes(q) ||
        it.description?.toLowerCase().includes(q)
      );
    });
  }, [items, searchFilter]);

  // Group items if groups exist
  const groupedItems = useMemo(() => {
    const hasGroups = items.some((it) => !!it.group);
    if (!hasGroups) return [{ groupTitle: null, list: filteredItems }];

    const groupsMap = new Map();
    filteredItems.forEach((it) => {
      const g = it.group || 'GENERAL';
      if (!groupsMap.has(g)) {
        groupsMap.set(g, []);
      }
      groupsMap.get(g).push(it);
    });

    return Array.from(groupsMap.entries()).map(([groupTitle, list]) => ({
      groupTitle,
      list
    }));
  }, [items, filteredItems]);

  const ActiveComponent = activeItem?.component;

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header matching Firevy Admin Design System */}
      <div className="page-top-bar" style={{ marginBottom: '20px' }}>
        <div className="page-title-group">
          <h1>
            <ModuleIcon size={24} />
            <span>{title}</span>
          </h1>
          <p>{description}</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {activeItem?.publicRoute && (
            <a
              href={activeItem.publicRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Preview public page in new tab"
            >
              <ExternalLink size={14} />
              <span>Preview Page</span>
            </a>
          )}
          {headerActions}
        </div>
      </div>

      {/* Master-Detail 2-Panel Workspace */}
      <div className="cms-builder-workspace">
        {/* ========================================================= */}
        {/* LEFT RAIL: Sub-Pages / Sections Navigator                 */}
        {/* ========================================================= */}
        <aside className="cms-section-rail">
          {/* Rail Header */}
          <div className="cms-rail-header">
            <h3 className="cms-rail-title">
              <Layers size={15} style={{ color: 'var(--primary)' }} />
              <span>Sub-Pages ({items.length})</span>
            </h3>
          </div>

          {/* Quick Search Filter */}
          <div className="cms-rail-search">
            <Search size={14} className="cms-rail-search-icon" />
            <input
              type="text"
              className="cms-rail-search-input"
              placeholder={`Search in ${title}...`}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>

          {/* Scrollable Sub-Pages List */}
          <div className="cms-rail-list">
            {groupedItems.map((group, gIdx) => (
              <React.Fragment key={group.groupTitle || `group_${gIdx}`}>
                {group.groupTitle && (
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: '#94A3B8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      padding: gIdx === 0 ? '4px 8px 6px' : '12px 8px 6px',
                      userSelect: 'none'
                    }}
                  >
                    {group.groupTitle}
                  </div>
                )}

                {group.list.map((it) => {
                  const globalIdx = items.findIndex((orig) => orig.key === it.key);
                  const isSelected = activeSlug === it.key;

                  return (
                    <div
                      key={it.key}
                      onClick={() => handleSelectItem(it.key)}
                      className={`cms-section-card ${isSelected ? 'active' : ''}`}
                      title={`Click to edit ${it.title}`}
                    >
                      {/* Left: Position Number + Title & Slug */}
                      <div className="cms-card-left">
                        <div className="cms-card-number">
                          {globalIdx + 1}
                        </div>

                        <div className="cms-card-details">
                          <div className="cms-card-title">
                            {it.title}
                          </div>
                          <div className="cms-card-slug">
                            {`/${(it.slug || it.key).split('/').filter(Boolean).pop()}`}
                          </div>
                        </div>
                      </div>

                      {/* Right: Category badge or Chevron Indicator */}
                      <div className="cms-card-right">
                        {it.badge && (
                          <Badge variant={it.badgeVariant || 'slate'} style={{ fontSize: '0.65rem' }}>
                            {it.badge}
                          </Badge>
                        )}

                        {isSelected && (
                          <div className="cms-card-active-indicator" title="Currently Editing">
                            <ChevronRight size={16} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}

            {filteredItems.length === 0 && (
              <div style={{ padding: '24px 12px', textAlign: 'center', color: '#94A3B8', fontSize: '0.8125rem' }}>
                No sub-pages match "{searchFilter}"
              </div>
            )}
          </div>
        </aside>

        {/* ========================================================= */}
        {/* RIGHT PANE: Dynamic Active Editor / CRUD Manager          */}
        {/* ========================================================= */}
        <main className="cms-editor-pane">
          {activeItem ? (
            <ErrorBoundary>
              {/* Dynamic Sub-Page Header */}
              <div
                style={{
                  padding: '16px 20px',
                  backgroundColor: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: '#E0F2FE',
                        color: '#006B8F',
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      #{items.findIndex((orig) => orig.key === activeItem.key) + 1}
                    </span>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      {activeItem.title}
                    </h2>
                    {activeItem.category && (
                      <Badge variant="cyan" style={{ fontSize: '0.75rem' }}>
                        {activeItem.category}
                      </Badge>
                    )}
                  </div>
                  {activeItem.description && (
                    <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                      {activeItem.description}
                    </p>
                  )}
                </div>

                {activeItem.publicRoute && (
                  <a
                    href={activeItem.publicRoute}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                    style={{ color: '#006B8F', fontSize: '0.8125rem' }}
                  >
                    <span>View Public URL</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Mounted Component */}
              <div style={{ padding: '20px' }}>
                {ActiveComponent ? (
                  typeof ActiveComponent === 'function' ? (
                    <ActiveComponent item={activeItem} />
                  ) : (
                    ActiveComponent
                  )
                ) : (
                  <div style={{ padding: '60px 20px', textAlign: 'center', color: '#94A3B8' }}>
                    No editor component registered for this sub-page.
                  </div>
                )}
              </div>
            </ErrorBoundary>
          ) : (
            <div style={{ padding: '80px 20px', textAlign: 'center', color: '#94A3B8' }}>
              Select a sub-page from the left rail to view and edit its content.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ModuleMasterDetailManager;
