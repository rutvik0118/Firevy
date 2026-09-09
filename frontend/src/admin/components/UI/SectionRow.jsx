import React from 'react';
import { GripVertical, ChevronRight, Check } from 'lucide-react';

/**
 * SectionRow Component
 * 
 * Reusable, robust row component for Page Sections across Home Page and all Sub-Pages.
 * Layout strategy:
 * [Drag Handle: 20px] [Number: 24px] [Content: flex: 1, min-width: 0] [Visibility Toggle: 28px] [Chevron: 16px]
 * 
 * Prevents text overflow, ensures perfect vertical and horizontal alignment,
 * and isolates the visibility toggle click from row selection.
 */
export const SectionRow = ({
  index,
  sectionKey,
  title,
  subtitle,
  category,
  isSelected = false,
  isVisible = true,
  isDragging = false,
  isDragOver = false,
  onSelect,
  onToggleVisibility,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop
}) => {
  const handleToggleClick = (e) => {
    e.stopPropagation();
    if (onToggleVisibility) {
      onToggleVisibility(sectionKey, e);
    }
  };

  const handleRowClick = () => {
    if (onSelect) {
      onSelect(sectionKey);
    }
  };

  const displaySubtitle = subtitle || category || (sectionKey ? `/${sectionKey}` : '');

  return (
    <div
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
      onClick={handleRowClick}
      className={`cms-section-card ${isSelected ? 'active' : ''} ${!isVisible ? 'is-hidden-section' : ''} ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
      title={isVisible ? 'Click to edit section. Drag grip to reorder.' : 'Section is hidden on website. Click to edit.'}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleRowClick();
        }
      }}
    >
      {/* 1. Drag Grip Handle (Fixed Width) */}
      <div
        className="cms-card-grip"
        onClick={(e) => e.stopPropagation()}
        title="Drag to reposition section"
      >
        <GripVertical size={16} />
      </div>

      {/* 2. Number Badge (Fixed Width) */}
      <div className="cms-card-number">
        {index + 1}
      </div>

      {/* 3. Section Title & Subtitle (Flex 1, min-width: 0 with Ellipsis) */}
      <div className="cms-card-details">
        <div className="cms-card-title" title={title}>
          {title}
        </div>
        {displaySubtitle && (
          <div className="cms-card-slug" title={displaySubtitle}>
            {displaySubtitle}
          </div>
        )}
      </div>

      {/* 4. Visibility Toggle / Checkbox (Fixed Width, Isolated Event) */}
      <div className="cms-card-controls" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={handleToggleClick}
          className={`cms-visibility-btn ${isVisible ? 'checked' : 'unchecked'}`}
          title={isVisible ? 'Visible on website (Click to hide)' : 'Hidden on website (Click to show)'}
          aria-label={isVisible ? `Hide ${title}` : `Show ${title}`}
        >
          <div className="cms-checkbox-box">
            {isVisible && <Check size={13} strokeWidth={3} className="cms-check-icon" />}
          </div>
        </button>
      </div>

      {/* 5. Chevron Arrow (Fixed Width) */}
      <div className="cms-card-arrow-wrap">
        <ChevronRight
          size={15}
          className="cms-card-arrow"
        />
      </div>
    </div>
  );
};

export default SectionRow;
