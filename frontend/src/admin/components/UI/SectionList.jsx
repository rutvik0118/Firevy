import React, { useState, useMemo } from 'react';
import { Search, Layers, AlertCircle } from 'lucide-react';
import Badge from './Badge';
import SectionRow from './SectionRow';

/**
 * SectionList Component
 * 
 * Reusable container for the left "PAGE SECTIONS" rail.
 * Manages search filtering, drag & drop event handling, selection, and visibility toggles.
 */
export const SectionList = ({
  title = 'Page Sections',
  badgeCount = null,
  sectionsOrder = [],
  sectionsMetadata = {},
  sectionsState = {},
  activeKey = '',
  onSelectSection,
  onToggleVisibility,
  onReorderSections,
  searchPlaceholder = 'Search sections...'
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // Filter sections by search query
  const filteredSectionKeys = useMemo(() => {
    if (!searchFilter.trim()) return sectionsOrder;
    const q = searchFilter.toLowerCase();
    return sectionsOrder.filter((key) => {
      const meta = sectionsMetadata[key] || {};
      const secTitle = meta.title || key;
      const secCat = meta.category || '';
      const secSlug = meta.slug || '';
      return (
        secTitle.toLowerCase().includes(q) ||
        secCat.toLowerCase().includes(q) ||
        secSlug.toLowerCase().includes(q) ||
        key.toLowerCase().includes(q)
      );
    });
  }, [sectionsOrder, sectionsMetadata, searchFilter]);

  // Drag & drop handlers
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    if (onReorderSections) {
      const newOrder = [...sectionsOrder];
      const [moved] = newOrder.splice(draggedIndex, 1);
      newOrder.splice(targetIndex, 0, moved);
      onReorderSections(newOrder);
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <aside className="cms-section-rail" aria-label="Page Sections Navigator">
      {/* Rail Header */}
      <div className="cms-rail-header">
        <h3 className="cms-rail-title">
          <Layers size={15} style={{ color: 'var(--primary, #006B8F)' }} />
          <span>{title}</span>
        </h3>
        <Badge variant="cyan" size="sm">
          {badgeCount !== null ? badgeCount : sectionsOrder.length}
        </Badge>
      </div>

      {/* Quick Search Filter */}
      <div className="cms-rail-search">
        <Search size={14} className="cms-rail-search-icon" />
        <input
          type="text"
          className="cms-rail-search-input"
          placeholder={searchPlaceholder}
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          aria-label="Filter page sections"
        />
      </div>

      {/* Scrollable Reorderable List */}
      <div className="cms-rail-list">
        {filteredSectionKeys.length === 0 ? (
          <div
            style={{
              padding: '24px 16px',
              textAlign: 'center',
              color: '#94A3B8',
              fontSize: '0.8125rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AlertCircle size={20} />
            <span>No matching sections found</span>
          </div>
        ) : (
          filteredSectionKeys.map((secKey) => {
            const actualIdx = sectionsOrder.indexOf(secKey);
            const meta = sectionsMetadata[secKey] || {
              title: secKey,
              category: 'Section'
            };
            const secData = sectionsState[secKey] || {};
            const isVisible = secData.isVisible !== false && secData.isEnabled !== false;
            const isSelected = activeKey === secKey;
            const isDragging = draggedIndex === actualIdx;
            const isDragOver = dragOverIndex === actualIdx;

            return (
              <SectionRow
                key={secKey}
                index={actualIdx}
                sectionKey={secKey}
                title={meta.title || secKey}
                subtitle={meta.subtitle || meta.slug || meta.description}
                category={meta.category}
                isSelected={isSelected}
                isVisible={isVisible}
                isDragging={isDragging}
                isDragOver={isDragOver}
                onSelect={onSelectSection}
                onToggleVisibility={onToggleVisibility}
                onDragStart={(e) => handleDragStart(e, actualIdx)}
                onDragOver={(e) => handleDragOver(e, actualIdx)}
                onDragEnd={handleDragEnd}
                onDrop={(e) => handleDrop(e, actualIdx)}
              />
            );
          })
        )}
      </div>
    </aside>
  );
};

export default SectionList;
