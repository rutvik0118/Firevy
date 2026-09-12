import React, { useState } from 'react';
import {
  X,
  Trash2,
  CheckCircle2,
  ChevronUp,
  ChevronDown,
  Image as ImageIcon,
  Link as LinkIcon,
  ExternalLink,
  Eye,
  FileText,
  UploadCloud,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import MediaUploadInput from './MediaUploadInput';

/**
 * Standard Header for Edit Screens and Item Modals
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
    <div className="cms-editor-modal-header">
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
 * Structured Section Card for Grouping Form Content (Reference 1 Layout with Firevy Theme)
 */
export const AdminFormSection = ({
  title,
  subtitle,
  icon: Icon,
  badge,
  badgeVariant = 'slate',
  collapsible = false,
  defaultOpen = true,
  children,
  action,
  style = {}
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="cms-form-section-card"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)',
        marginBottom: '0',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        ...style
      }}
    >
      {/* Card Group Header */}
      {title && (
        <div
          onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 16px',
            backgroundColor: '#F8FAFC',
            borderBottom: isOpen || !collapsible ? '1px solid #E2E8F0' : 'none',
            cursor: collapsible ? 'pointer' : 'default',
            userSelect: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {Icon && (
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(0, 107, 143, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#006B8F',
                  flexShrink: 0
                }}
              >
                <Icon size={13} strokeWidth={2.5} />
              </div>
            )}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: '#0F172A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {title}
                </span>
                {badge && (
                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      padding: '1px 6px',
                      borderRadius: '4px',
                      backgroundColor: badgeVariant === 'cyan' ? '#E0F2FE' : '#F1F5F9',
                      color: badgeVariant === 'cyan' ? '#0369A1' : '#475569',
                      border: '1px solid',
                      borderColor: badgeVariant === 'cyan' ? '#BAE6FD' : '#E2E8F0'
                    }}
                  >
                    {badge}
                  </span>
                )}
              </div>
              {subtitle && (
                <p style={{ margin: '1px 0 0 0', fontSize: '11px', color: '#64748B', fontWeight: 400, lineHeight: 1.3 }}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {action}
            {collapsible && (
              <div style={{ color: '#64748B', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Card Group Body */}
      {(!collapsible || isOpen) && (
        <div style={{ padding: '14px 16px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

/**
 * 2-Column or 3-Column Responsive Grid Container for Compact Form Fields
 */
export const AdminFormGrid = ({ children, columns = 2, gap = '12px', style = {} }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns === 1
          ? '1fr'
          : columns === 3
            ? 'repeat(auto-fit, minmax(200px, 1fr))'
            : 'repeat(auto-fit, minmax(260px, 1fr))',
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
 * Form Field Wrapper with Consistent Firevy Typography & Labeling
 */
export const AdminFormField = ({
  label,
  required = false,
  optional = false,
  fullWidth = false,
  helperText,
  error,
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
        minWidth: 0,
        ...style
      }}
    >
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#0F172A',
              letterSpacing: '-0.01em',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {label} {required && <span style={{ color: '#DC2626' }}>*</span>}
          </label>
          {optional && !required && (
            <span style={{ fontSize: '10.5px', color: '#94A3B8', fontWeight: 500 }}>
              (Optional)
            </span>
          )}
        </div>
      )}
      {children}
      {helperText && !error && (
        <span style={{ fontSize: '11px', color: '#64748B', lineHeight: '1.3' }}>
          {helperText}
        </span>
      )}
      {error && (
        <span style={{ fontSize: '11px', color: '#DC2626', fontWeight: 600 }}>
          {error}
        </span>
      )}
    </div>
  );
};

/**
 * Dedicated Media Field Group with integrated compact MediaUploadInput
 */
export const AdminMediaField = ({
  label = 'Media Asset / Image',
  value = '',
  onChange,
  onUploadSuccess,
  folder = 'sections',
  placeholder = 'https://... or /images/...',
  helperText = 'Upload a high-resolution JPG, PNG, WEBP, or SVG image asset.',
  required = false,
  type = 'image',
  fullWidth = true
}) => {
  return (
    <div style={{ gridColumn: fullWidth ? '1 / -1' : 'auto', minWidth: 0 }}>
      <MediaUploadInput
        value={value}
        onChange={onChange}
        label={label}
        type={type}
        helperText={helperText}
      />
    </div>
  );
};

/**
 * Action Footer (Save Changes / Cancel / Reset)
 */
export const AdminEditFooter = ({
  onSave,
  onCancel,
  onReset,
  saveLabel = 'Save Changes',
  cancelLabel = 'Cancel',
  resetLabel = 'Reset',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {extraActions}
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '7px 14px',
              fontSize: '12px',
              fontWeight: 600,
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              color: '#64748B',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            {resetLabel}
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary btn-sm"
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
            className="btn btn-primary btn-sm"
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
  maxWidth = '860px',
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
            padding: '18px 22px',
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

/**
 * Standard Page Information Card (Title, Slug, Status, Public Link)
 * Layout matches Reference Screenshot: Solid circle number badge + Uppercase Title + Edit icon + View Live Link + 2-Column Grid
 */
export const AdminPageInfoSection = ({
  title,
  slug,
  status = 'published',
  onChangeStatus,
  publicRoute,
  badge,
  number = 1,
  onTitleChange,
  onSlugChange,
  isTitleEditable = false
}) => {
  const isPub = status === 'published';

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '10px',
        padding: '18px 22px',
        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)'
      }}
    >
      {/* Top Row: Number Badge + Title + Action Link */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '6px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2
            style={{
              margin: 0,
              fontSize: '15px',
              fontWeight: 800,
              color: '#0F172A',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontFamily: 'Poppins, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{title || 'PAGE MANAGEMENT'}</span>
            <span style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 400 }}>✎</span>
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {publicRoute && (
            <a
              href={publicRoute}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 12px',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
                e.currentTarget.style.borderColor = '#006B8F';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.borderColor = '#CBD5E1';
              }}
              title="View live public page"
            >
              <ExternalLink size={13} />
              <span>View Live Page</span>
            </a>
          )}

          {onChangeStatus && (
            <select
              value={status}
              onChange={(e) => onChangeStatus(e.target.value)}
              style={{
                padding: '4px 8px',
                fontSize: '11.5px',
                fontWeight: 700,
                borderRadius: '6px',
                border: '1px solid',
                borderColor: isPub ? '#BBF7D0' : '#CBD5E1',
                backgroundColor: isPub ? '#DCFCE7' : '#F1F5F9',
                color: isPub ? '#15803D' : '#64748B',
                cursor: 'pointer'
              }}
            >
              <option value="published">● Published</option>
              <option value="draft">○ Draft</option>
            </select>
          )}
        </div>
      </div>

      {/* Subtitle Description */}
      <p style={{ margin: '0 0 16px 0', fontSize: '12.5px', color: '#64748B', lineHeight: 1.4 }}>
        Manage and customize the content displayed on this live page (
        <span style={{ color: '#006B8F', fontFamily: 'monospace' }}>{publicRoute || `/${slug}`}</span>
        ).
      </p>

      {/* 2-Column Metadata Grid */}
      <AdminFormGrid columns={2} gap="14px">
        <AdminFormField label="PAGE TITLE" required>
          {isTitleEditable ? (
            <input
              type="text"
              className="form-control"
              value={title || ''}
              onChange={(e) => onTitleChange && onTitleChange(e.target.value)}
              placeholder="Page title..."
            />
          ) : (
            <input
              type="text"
              className="form-control"
              value={title || ''}
              readOnly
              style={{ backgroundColor: '#F8FAFC', color: '#0F172A', cursor: 'default', fontWeight: 600 }}
            />
          )}
        </AdminFormField>

        <AdminFormField label="SLUG (URL PATH)">
          {onSlugChange ? (
            <input
              type="text"
              className="form-control"
              value={slug || ''}
              onChange={(e) => onSlugChange(e.target.value)}
              placeholder="e.g. about-firevy"
              style={{ fontFamily: 'monospace' }}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              value={publicRoute || `/${slug}`}
              readOnly
              style={{ backgroundColor: '#F8FAFC', color: '#475569', cursor: 'default', fontFamily: 'monospace' }}
            />
          )}
        </AdminFormField>
      </AdminFormGrid>
    </div>
  );
};

/**
 * Standard Search Engine Optimization (SEO) & Metadata Card with Character Counters & Live Preview
 */
export const AdminSeoSection = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const metaTitle = data?.metaTitle || '';
  const metaDescription = data?.metaDescription || '';
  const canonical = data?.canonical || '';
  const metaKeywords = data?.metaKeywords || '';

  const metaTitleLength = metaTitle.length;
  const metaDescLength = metaDescription.length;

  // Title Status Helper
  const getTitleStatus = (len) => {
    if (len === 0) return { color: '#64748B', status: 'empty' };
    if (len > 60) return { color: '#DC2626', status: 'error', text: 'Exceeds recommended 60 chars' };
    if (len < 40) return { color: '#D97706', status: 'warning', text: 'Slightly short (recommended 50-60)' };
    if (len >= 50 && len <= 60) return { color: '#16A34A', status: 'optimal', text: 'Optimal title length' };
    return { color: '#006B8F', status: 'good', text: 'Good length' };
  };

  // Description Status Helper
  const getDescStatus = (len) => {
    if (len === 0) return { color: '#64748B', status: 'empty' };
    if (len > 160) return { color: '#DC2626', status: 'error', text: 'Exceeds recommended 160 chars' };
    if (len < 100) return { color: '#D97706', status: 'warning', text: 'Slightly short (recommended 120-160)' };
    if (len >= 120 && len <= 160) return { color: '#16A34A', status: 'optimal', text: 'Optimal description length' };
    return { color: '#006B8F', status: 'good', text: 'Good length' };
  };

  const titleStatus = getTitleStatus(metaTitleLength);
  const descStatus = getDescStatus(metaDescLength);

  const displayCanonical = canonical ? (canonical.startsWith('http') ? canonical : `firevy.co${canonical.startsWith('/') ? '' : '/'}${canonical}`) : 'firevy.co/company/about-firevy';

  return (
    <AdminFormSection
      title="Search Engine Optimization (SEO) & Metadata"
      subtitle="Configure how this page appears in Google search results and social media shares."
      badge="SEO & Social"
      collapsible
      defaultOpen={true}
    >
      <AdminFormGrid columns={2} gap="16px">
        {/* Meta Title Field */}
        <AdminFormField
          label="Page Meta Title"
          helperText={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
              <span>Recommended: 50–60 characters</span>
              {titleStatus.text && <span style={{ color: titleStatus.color, fontWeight: 600 }}>{titleStatus.text}</span>}
            </div>
          }
        >
          <input
            type="text"
            className="form-control"
            style={{
              borderColor: metaTitleLength > 60 ? '#FCA5A5' : metaTitleLength >= 50 ? '#86EFAC' : undefined,
              boxShadow: metaTitleLength > 60 ? '0 0 0 2px rgba(220, 38, 38, 0.1)' : undefined
            }}
            placeholder="e.g. About Us | We Shape Digital Solutions | firevy.co"
            value={metaTitle}
            onChange={(e) => updateField('metaTitle', e.target.value)}
          />
        </AdminFormField>

        {/* Canonical URL Slug Field */}
        <AdminFormField label="Canonical URL Slug" helperText="Preferred indexing URL slug for search engine robots (e.g. /company/about-firevy).">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. /company/about-firevy"
            style={{ fontFamily: 'monospace' }}
            value={canonical}
            onChange={(e) => updateField('canonical', e.target.value)}
          />
        </AdminFormField>

        {/* Meta Description Field */}
        <AdminFormField
          label="Meta Description"
          fullWidth
          helperText={
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
              <span>Recommended: 120–160 characters</span>
              {descStatus.text && <span style={{ color: descStatus.color, fontWeight: 600 }}>{descStatus.text}</span>}
            </div>
          }
        >
          <textarea
            className="form-control"
            rows={3}
            style={{
              borderColor: metaDescLength > 160 ? '#FCA5A5' : metaDescLength >= 120 ? '#86EFAC' : undefined,
              boxShadow: metaDescLength > 160 ? '0 0 0 2px rgba(220, 38, 38, 0.1)' : undefined,
              resize: 'vertical'
            }}
            placeholder="Enter concise search summary snippet..."
            value={metaDescription}
            onChange={(e) => updateField('metaDescription', e.target.value)}
          />
        </AdminFormField>

        {/* Meta Keywords Field */}
        <AdminFormField label="Meta Keywords" optional fullWidth helperText="Comma-separated keywords for internal tagging and search engine metadata.">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. software development, custom web app, mobile engineering, agile squads"
            value={metaKeywords}
            onChange={(e) => updateField('metaKeywords', e.target.value)}
          />
        </AdminFormField>
      </AdminFormGrid>

      {/* Google Search Result Live Preview Card */}
      <div
        style={{
          marginTop: '16px',
          padding: '14px 16px',
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px'
        }}
      >
        <div
          style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>Search Result Preview</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1A0DAB',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              lineHeight: 1.3
            }}
          >
            {metaTitle || 'Page Meta Title | firevy.co'}
          </div>
          <div
            style={{
              fontSize: '12px',
              color: '#4D5156',
              fontFamily: 'monospace',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {displayCanonical}
          </div>
          <div
            style={{
              fontSize: '12.5px',
              color: '#4D5156',
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {metaDescription || 'firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company.'}
          </div>
        </div>
      </div>
    </AdminFormSection>
  );
};

export default {
  AdminEditHeader,
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection,
  AdminEditFooter,
  AdminEditModal
};

