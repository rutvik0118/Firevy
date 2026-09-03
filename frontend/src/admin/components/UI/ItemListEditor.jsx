import React, { useState, useEffect } from 'react';
import {
  Plus,
  Trash2,
  GripVertical,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Sliders,
  AlignLeft,
  Check,
  X
} from 'lucide-react';
import MediaUploadInput from './MediaUploadInput';

export const ItemListEditor = ({
  items = [],
  onChange,
  itemTitle = 'Item',
  fields = [],
  renderItemSummary,
  emptyMessage = 'No items added yet. Click "+ Add" to create one.'
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // Sync selected index if items list changes
  useEffect(() => {
    if (items.length > 0 && selectedIndex >= items.length) {
      setSelectedIndex(0);
    }
  }, [items.length, selectedIndex]);

  // Selected Item
  const currentItem = (items.length > 0 && items[selectedIndex]) ? items[selectedIndex] : null;

  // Add a new item
  const handleAddNewItem = () => {
    const initial = {};
    fields.forEach((f) => {
      initial[f.name] = f.defaultValue !== undefined
        ? f.defaultValue
        : (f.type === 'number' ? 0 : (f.type === 'checkbox' ? false : ''));
    });
    initial.isActive = true;

    // Set a default title if field exists
    const titleField = fields.find((f) => ['title', 'name', 'heading', 'company', 'author'].includes(f.name));
    if (titleField && !initial[titleField.name]) {
      initial[titleField.name] = `New ${itemTitle} 0${items.length + 1}`;
    }

    const newItems = [...items, initial];
    onChange(newItems);
    setSelectedIndex(newItems.length - 1);
  };

  // Delete an item
  const handleDeleteItem = (indexToDelete, e) => {
    if (e) e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete this ${itemTitle.toLowerCase()}?`)) {
      const newItems = items.filter((_, i) => i !== indexToDelete);
      onChange(newItems);
      if (selectedIndex >= newItems.length) {
        setSelectedIndex(Math.max(0, newItems.length - 1));
      } else if (selectedIndex === indexToDelete && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
  };

  // Update a single field in the currently selected item
  const handleFieldChange = (fieldName, value) => {
    if (selectedIndex < 0 || selectedIndex >= items.length) return;
    const newItems = [...items];
    newItems[selectedIndex] = {
      ...newItems[selectedIndex],
      [fieldName]: value
    };
    onChange(newItems);
  };

  // Toggle active status of current item
  const handleToggleActive = (indexToToggle, e) => {
    if (e) e.stopPropagation();
    const newItems = [...items];
    const targetIdx = indexToToggle !== undefined ? indexToToggle : selectedIndex;
    if (targetIdx < 0 || targetIdx >= items.length) return;

    newItems[targetIdx] = {
      ...newItems[targetIdx],
      isActive: newItems[targetIdx].isActive === false ? true : false
    };
    onChange(newItems);
  };

  // Drag and Drop reordering
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newItems = [...items];
    const [moved] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, moved);

    setDraggedIndex(null);
    setSelectedIndex(targetIndex);
    onChange(newItems);
  };

  // Separate fields by category
  const isMediaField = (f) => ['image', 'video', 'pdf', 'media'].includes(f.type) || f.section === 'media';
  const isDescField = (f) => f.type === 'textarea' || f.section === 'description';
  const isSettingField = (f) => f.type === 'checkbox' && f.name !== 'isActive';

  const regularFields = fields.filter((f) => !isMediaField(f) && !isDescField(f) && !isSettingField(f));
  const descFields = fields.filter((f) => isDescField(f) && !isMediaField(f));
  const mediaFields = fields.filter((f) => isMediaField(f));
  const settingFields = fields.filter((f) => isSettingField(f));

  // If no items exist
  if (items.length === 0) {
    return (
      <div
        style={{
          padding: '32px 20px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          border: '1.5px dashed #CBD5E1',
          borderRadius: '8px'
        }}
      >
        <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#64748B' }}>{emptyMessage}</p>
        <button
          type="button"
          onClick={handleAddNewItem}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 16px',
            borderRadius: '6px',
            backgroundColor: '#006B8F',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Plus size={14} /> Add First {itemTitle}
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(260px, 320px) 1fr',
        gap: '16px',
        alignItems: 'start',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* ========================================================
          LEFT COLUMN: ITEMS LIST
          ======================================================== */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '14px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid #F1F5F9' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>
              {itemTitle}s ({items.length})
            </h3>
            <p style={{ margin: '1px 0 0 0', fontSize: '11px', color: '#64748B' }}>
              Drag to reorder {itemTitle.toLowerCase()}s
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddNewItem}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '5px',
              backgroundColor: '#006B8F',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Plus size={13} /> Add {itemTitle}
          </button>
        </div>

        {/* List of Item Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {items.map((item, idx) => {
            const isSelected = idx === selectedIndex;
            const isActive = item.isActive !== false;
            const itemNumber = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;
            const itemDisplayName = item.title || item.name || item.heading || item.label || item.company || item.tabName || `${itemTitle} ${itemNumber}`;
            const itemSub = item.tag || item.category || item.sub || item.desc || item.slug || item.role || item.metric;
            const itemMedia = item.image || item.icon || item.avatar || item.mockup;

            return (
              <div
                key={idx}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                onClick={() => setSelectedIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  backgroundColor: isSelected ? '#F0F9FF' : '#F8FAFC',
                  border: isSelected ? '1.5px solid #006B8F' : '1px solid #E2E8F0',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0, paddingRight: '6px' }}>
                  <div style={{ color: '#94A3B8', cursor: 'grab', display: 'flex', alignItems: 'center' }}>
                    <GripVertical size={14} />
                  </div>

                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '4px',
                      backgroundColor: isSelected ? '#006B8F' : '#E2E8F0',
                      color: isSelected ? '#FFFFFF' : '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 800,
                      flexShrink: 0
                    }}
                  >
                    {itemNumber}
                  </div>

                  {/* Thumbnail if present */}
                  {typeof itemMedia === 'string' && itemMedia.trim() !== '' && (
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img src={itemMedia} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  )}

                  <div style={{ flex: 1, minWidth: 0 }}>
                    {renderItemSummary ? (
                      renderItemSummary(item, idx)
                    ) : (
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {itemDisplayName}
                        </div>
                        {itemSub && (
                          <div style={{ fontSize: '10px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {itemSub}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                  <span
                    onClick={(e) => handleToggleActive(idx, e)}
                    style={{
                      fontSize: '9px',
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? '#DCFCE7' : '#F1F5F9',
                      color: isActive ? '#15803D' : '#64748B',
                      cursor: 'pointer'
                    }}
                    title={isActive ? 'Click to hide' : 'Click to activate'}
                  >
                    {isActive ? 'Active' : 'Hidden'}
                  </span>
                  <ChevronRight size={14} style={{ color: isSelected ? '#006B8F' : '#94A3B8' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          RIGHT COLUMN: INLINE EDIT FORM (Matches Reference)
          ======================================================== */}
      {currentItem && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {/* Header with Status & Delete */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '10px',
              borderBottom: '1px solid #E2E8F0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#0F172A' }}>
                Edit {itemTitle} ({itemTitle} 0{selectedIndex + 1})
              </h3>
              <button
                type="button"
                onClick={() => handleToggleActive(selectedIndex)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: currentItem.isActive !== false ? '#DCFCE7' : '#F1F5F9',
                  color: currentItem.isActive !== false ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: currentItem.isActive !== false ? '#BBF7D0' : '#E2E8F0',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: currentItem.isActive !== false ? '#16A34A' : '#94A3B8'
                  }}
                />
                {currentItem.isActive !== false ? 'Active' : 'Inactive'}
              </button>
            </div>

            <button
              type="button"
              onClick={(e) => handleDeleteItem(selectedIndex, e)}
              disabled={items.length <= 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 8px',
                borderRadius: '5px',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FEE2E2',
                color: '#DC2626',
                fontSize: '11px',
                fontWeight: 600,
                cursor: items.length <= 1 ? 'not-allowed' : 'pointer',
                opacity: items.length <= 1 ? 0.5 : 1
              }}
            >
              <Trash2 size={12} /> Delete {itemTitle}
            </button>
          </div>

          {/* Regular Inputs Grid */}
          {regularFields.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px 14px' }}>
              {regularFields.map((field) => (
                <div key={field.name} style={{ gridColumn: field.fullWidth ? '1 / -1' : 'auto' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                    {field.label} {field.required && <span style={{ color: '#DC2626' }}>*</span>}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      className="form-control"
                      value={currentItem[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                    >
                      {field.options?.map((opt) => (
                        <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
                          {typeof opt === 'string' ? opt : opt.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'number' ? (
                    <input
                      type="number"
                      className="form-control"
                      value={currentItem[field.name] !== undefined ? currentItem[field.name] : 0}
                      onChange={(e) => handleFieldChange(field.name, Number(e.target.value))}
                      placeholder={field.placeholder || '0'}
                      style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      value={currentItem[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                      style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF' }}
                    />
                  )}
                  {field.helperText && (
                    <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#64748B' }}>{field.helperText}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Description Textareas (Full Width) */}
          {descFields.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {descFields.map((field) => (
                <div key={field.name}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                    {field.label} {field.required && <span style={{ color: '#DC2626' }}>*</span>}
                  </label>
                  <textarea
                    className="form-control"
                    rows={field.rows || 3}
                    value={currentItem[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}...`}
                    style={{ width: '100%', padding: '7px 10px', borderRadius: '5px', border: '1px solid #CBD5E1', fontSize: '12px', color: '#0F172A', backgroundColor: '#FFFFFF', fontFamily: 'inherit' }}
                  />
                  {field.helperText && (
                    <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#64748B' }}>{field.helperText}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Media Assets */}
          {mediaFields.length > 0 && (
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '10px' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Media & Visual Assets
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: mediaFields.length > 1 ? '1fr 1fr' : '1fr', gap: '12px' }}>
                {mediaFields.map((field) => (
                  <MediaUploadInput
                    key={field.name}
                    label={field.label}
                    type={field.type}
                    value={currentItem[field.name] || ''}
                    onChange={(val) => handleFieldChange(field.name, val)}
                    helperText={field.helperText}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Setting Checkboxes */}
          {settingFields.length > 0 && (
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {settingFields.map((field) => (
                <label key={field.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', color: '#0F172A', fontWeight: 600 }}>
                  <input
                    type="checkbox"
                    checked={!!currentItem[field.name]}
                    onChange={(e) => handleFieldChange(field.name, e.target.checked)}
                    style={{ width: '15px', height: '15px', cursor: 'pointer', accentColor: '#006B8F' }}
                  />
                  <span>{field.checkboxLabel || field.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListEditor;
