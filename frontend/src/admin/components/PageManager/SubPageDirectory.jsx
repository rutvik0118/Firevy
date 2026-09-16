import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Badge from '../UI/Badge';
import { PAGE_HIERARCHY_REGISTRY } from '../../constants/pageHierarchyRegistry';

/**
 * SubPageDirectory
 * 
 * Directory / Hub view for a Main Page Group (e.g. /admin/company, /admin/product, etc.)
 * Shows all sub-pages organized by category with search, section count, and direct link to Manage Sections.
 */
export const SubPageDirectory = ({ mainPageId = 'company' }) => {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState('');

  const groupConfig = useMemo(() => {
    return (
      PAGE_HIERARCHY_REGISTRY[mainPageId] || {
        id: mainPageId,
        title: mainPageId.charAt(0).toUpperCase() + mainPageId.slice(1),
        description: `Manage all sub-pages and page sections for ${mainPageId}.`,
        icon: Layers,
        basePath: `/admin/${mainPageId}`,
        subPages: []
      }
    );
  }, [mainPageId]);

  const MainIcon = groupConfig.icon || Layers;

  // Filter sub-pages
  const filteredSubPages = useMemo(() => {
    if (!searchFilter.trim()) return groupConfig.subPages;
    const q = searchFilter.toLowerCase();
    return groupConfig.subPages.filter((sp) => {
      return (
        sp.title?.toLowerCase().includes(q) ||
        sp.category?.toLowerCase().includes(q) ||
        sp.group?.toLowerCase().includes(q) ||
        sp.description?.toLowerCase().includes(q) ||
        sp.slug?.toLowerCase().includes(q)
      );
    });
  }, [groupConfig, searchFilter]);

  // Group sub-pages by group tag (e.g. ABOUT US, MODELS, TESTIMONIAL)
  const groupedSubPages = useMemo(() => {
    const hasGroups = groupConfig.subPages.some((sp) => !!sp.group);
    if (!hasGroups) {
      return [{ groupTitle: null, list: filteredSubPages }];
    }

    const groupsMap = new Map();
    filteredSubPages.forEach((sp) => {
      const g = sp.group || 'GENERAL';
      if (!groupsMap.has(g)) {
        groupsMap.set(g, []);
      }
      groupsMap.get(g).push(sp);
    });

    return Array.from(groupsMap.entries()).map(([groupTitle, list]) => ({
      groupTitle,
      list
    }));
  }, [groupConfig, filteredSubPages]);

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header */}
      <div className="page-top-bar" style={{ marginBottom: '24px' }}>
        <div className="page-title-group">
          <h1>
            <MainIcon size={24} />
            <span>{groupConfig.title} Management</span>
          </h1>
          <p>{groupConfig.description}</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Badge variant="cyan" size="lg">
            {groupConfig.subPages.length} Sub-Pages Available
          </Badge>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '24px', maxWidth: '480px' }}>
        <div style={{ position: 'relative' }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#94A3B8'
            }}
          />
          <input
            type="text"
            className="form-control"
            style={{ paddingLeft: '38px', borderRadius: '8px', background: '#FFFFFF' }}
            placeholder={`Search ${groupConfig.title} sub-pages...`}
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Categorized Sub-Pages Grid */}
      <div className="space-y-8">
        {groupedSubPages.map(({ groupTitle, list }, gIdx) => (
          <div key={gIdx} className="space-y-4">
            {groupTitle && (
              <div
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid #E2E8F0',
                  paddingBottom: '6px'
                }}
              >
                <span>{groupTitle}</span>
                <span style={{ fontSize: '0.6875rem', color: '#94A3B8' }}>({list.length})</span>
              </div>
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '16px'
              }}
            >
              {list.map((subPage) => {
                const SubIcon = subPage.icon || Layers;
                const sectionsCount = subPage.sections?.length || 4;

                return (
                  <div
                    key={subPage.slug || subPage.key}
                    className="card"
                    style={{
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      background: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      cursor: 'pointer'
                    }}
                    onClick={() => navigate(`${groupConfig.basePath}/${subPage.slug || subPage.key}`)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#006B8F';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 107, 143, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '12px'
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: '#E0F2FE',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0369A1'
                          }}
                        >
                          <SubIcon size={20} />
                        </div>
                        <Badge variant="cyan" size="sm">
                          {sectionsCount} Sections
                        </Badge>
                      </div>

                      <h3
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#0F172A',
                          margin: '0 0 6px 0'
                        }}
                      >
                        {subPage.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.8125rem',
                          color: '#64748B',
                          lineHeight: '1.4',
                          margin: '0 0 16px 0',
                          minHeight: '36px'
                        }}
                      >
                        {subPage.description}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '12px',
                        borderTop: '1px solid #F1F5F9'
                      }}
                    >
                      {subPage.publicRoute ? (
                        <a
                          href={subPage.publicRoute}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            fontSize: '0.75rem',
                            color: '#64748B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            textDecoration: 'none',
                            fontWeight: 600
                          }}
                          title="Preview public page"
                        >
                          <ExternalLink size={12} />
                          <span>Preview</span>
                        </a>
                      ) : (
                        <div />
                      )}

                      <span
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: '#006B8F',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Manage Sections</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubPageDirectory;
