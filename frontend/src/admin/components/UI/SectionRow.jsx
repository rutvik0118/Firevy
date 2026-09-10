import React from 'react';
import { GripVertical, ChevronRight } from 'lucide-react';

/**
 * SectionRow Component
 * 
 * Reusable, robust row component for Page Sections across Home Page and all Sub-Pages.
 * Layout strategy:
 * [Drag Handle: 18px] [Number: 22px] [Content: flex: 1, min-width: 0] [Chevron: 16px]
 * 
 * Prevents text overflow, ensures perfect vertical and horizontal alignment.
 */
export const SectionRow = ({
  index,
  sectionKey,
  title,
  subtitle,
  category,
  isSelected = false,
  isDragging = false,
  isDragOver = false,
  onSelect,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop
}) => {
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
      className={`cms-section-card ${isSelected ? 'active' : ''} ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
      title="Click to edit section. Drag grip to reorder."
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

      {/* 4. Chevron Arrow (Fixed Width) */}
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
