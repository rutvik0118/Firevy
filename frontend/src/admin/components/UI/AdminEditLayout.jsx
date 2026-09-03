import React, { useState } from 'react';
import { X, Trash2, CheckCircle2, Sliders, ChevronUp, ChevronDown } from 'lucide-react';

/**
 * Standard Header for Edit Screens and Item Modals
 * Features Title, Status Badge (● Active / ○ Inactive), Delete Button, and Close Button.
 */
export const AdminEditHeader = ({
  title = 'Edit Item',
  subtitle,
  isActive = true,
  onToggleStatus,
  onDelete,
  deleteLabel = 'Delete',
  onClose,
  badgeText
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px 12px 0 0',
        flexWrap: 'wrap',
        gap: '10px'
      }}
    >
      {/* Title & Status Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em', fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h3>

            {/* Status Badge */}
            {onToggleStatus ? (
              <button
                type="button"
                onClick={onToggleStatus}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 9px',
                  borderRadius: '16px',
                  backgroundColor: isActive ? '#DCFCE7' : '#F1F5F9',
                  color: isActive ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: isActive ? '#BBF7D0' : '#CBD5E1',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                title={isActive ? 'Click to set Inactive' : 'Click to set Active'}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#16A34A' : '#94A3B8'
                  }}
                />
                {isActive ? '● Active' : '○ Inactive'}
              </button>
            ) : (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '3px 9px',
                  borderRadius: '16px',
                  backgroundColor: isActive ? '#DCFCE7' : '#F1F5F9',
                  color: isActive ? '#15803D' : '#64748B',
                  border: '1px solid',
                  borderColor: isActive ? '#BBF7D0' : '#CBD5E1',
                  fontSize: '11px',
                  fontWeight: 700
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#16A34A' : '#94A3B8'
                  }}
                />
                {badgeText || (isActive ? '● Active' : '○ Inactive')}
              </span>
            )}
          </div>
          {subtitle && (
            <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#64748B' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Actions on Right: Delete & Close */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 12px',
              borderRadius: '6px',
              backgroundColor: '#FEF2F2',
              border: '1px solid #FEE2E2',
              color: '#DC2626',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FEE2E2';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FEF2F2';
            }}
            title={deleteLabel}
          >
            <Trash2 size={13} /> {deleteLabel}
          </button>
        )}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px',
              borderRadius: '6px',
              backgroundColor: 'transparent',
              border: '1px solid #E2E8F0',
              color: '#64748B',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#64748B';
            }}
            title="Close editor"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Structured Section Card for Grouping Form Content (CONTENT, DESCRIPTION, MEDIA, SETTINGS, CTA)
 */
export const AdminFormSection = ({
  title,
  subtitle,
  icon: Icon,
  collapsible = false,
  defaultOpen = true,
  children,
  style = {}
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
        marginBottom: '12px',
        ...style
      }}
    >
      {/* Section Header */}
      {title && (
        <div
          onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            backgroundColor: '#F8FAFC',
            borderBottom: isOpen || !collapsible ? '1px solid #E2E8F0' : 'none',
            cursor: collapsible ? 'pointer' : 'default',
            userSelect: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            {Icon && <Icon size={14} style={{ color: '#006B8F' }} />}
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Poppins, sans-serif' }}>
                {title}
              </span>
              {subtitle && (
                <p style={{ margin: '1px 0 0 0', fontSize: '11px', color: '#64748B', fontWeight: 400 }}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {collapsible && (
            <div>
              {isOpen ? <ChevronUp size={14} color="#64748B" /> : <ChevronDown size={14} color="#64748B" />}
            </div>
          )}
        </div>
      )}

      {/* Section Body */}
      {(!collapsible || isOpen) && (
        <div style={{ padding: '14px 16px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * 2-Column Responsive Grid Container for Compact Form Fields
 */
export const AdminFormGrid = ({ children, columns = 2, gap = '12px', style = {} }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns === 1 ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))',
        gap,
        alignItems: 'start',
        ...style
      }}
    >
      {children}
    </div>
  );
};

/**
 * Form Field Wrapper with Compact Clean Typography
 */
export const AdminFormField = ({
  label,
  required = false,
  fullWidth = false,
  helperText,
  children,
  style = {}
}) => {
  return (
    <div
      style={{
        gridColumn: fullWidth ? '1 / -1' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        ...style
      }}
    >
      {label && (
        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.01em', fontFamily: 'Poppins, sans-serif' }}>
          {label} {required && <span style={{ color: '#DC2626' }}>*</span>}
        </label>
      )}
      {children}
      {helperText && (
        <span style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.2' }}>
          {helperText}
        </span>
      )}
    </div>
  );
};

/**
 * Action Footer (Save Changes / Cancel)
 */
export const AdminEditFooter = ({
  onSave,
  onCancel,
  saveLabel = 'Save Changes',
  cancelLabel = 'Cancel',
  isSaving = false,
  extraActions
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderRadius: '0 0 12px 12px',
        flexWrap: 'wrap',
        gap: '10px'
      }}
    >
      <div>{extraActions}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
            style={{
              padding: '7px 16px',
              fontSize: '12px',
              fontWeight: 600,
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              color: '#475569',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {cancelLabel}
          </button>
        )}

        {onSave && (
          <button
            type="button"
            onClick={onSave}
            disabled={isSaving}
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 20px',
              fontSize: '12px',
              fontWeight: 700,
              backgroundColor: '#006B8F',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              cursor: isSaving ? 'wait' : 'pointer',
              boxShadow: '0 2px 6px rgba(0, 107, 143, 0.25)',
              opacity: isSaving ? 0.7 : 1
            }}
          >
            <CheckCircle2 size={14} />
            {isSaving ? 'Saving...' : saveLabel}
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Large Professional Edit Modal / Panel
 */
export const AdminEditModal = ({
  isOpen,
  onClose,
  title = 'Edit Item',
  subtitle,
  isActive = true,
  onToggleStatus,
  onDelete,
  deleteLabel = 'Delete',
  onSave,
  saveLabel = 'Save Changes',
  cancelLabel = 'Cancel',
  isSaving = false,
  maxWidth = '840px',
  children
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth,
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(226, 232, 240, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          overflow: 'hidden',
          animation: 'modalSlideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <AdminEditHeader
          title={title}
          subtitle={subtitle}
          isActive={isActive}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
          deleteLabel={deleteLabel}
          onClose={onClose}
        />

        {/* Scrollable Form Body */}
        <div
          style={{
            padding: '16px 20px',
            overflowY: 'auto',
            flex: 1,
            backgroundColor: '#F8FAFC'
          }}
        >
          {children}
        </div>

        {/* Footer Actions */}
        <AdminEditFooter
          onSave={onSave}
          onCancel={onClose}
          saveLabel={saveLabel}
          cancelLabel={cancelLabel}
          isSaving={isSaving}
        />
      </div>
    </div>
  );
};

export default {
  AdminEditHeader,
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminEditFooter,
  AdminEditModal
};
