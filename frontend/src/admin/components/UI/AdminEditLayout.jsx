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
  Info,
  Search,
  Globe,
  Monitor,
  Smartphone,
  MoreVertical
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
  style = {},
  rightLabel
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
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
          {rightLabel ? (
            rightLabel
          ) : optional && !required ? (
            <span style={{ fontSize: '10.5px', color: '#94A3B8', fontWeight: 500 }}>
              (Optional)
            </span>
          ) : null}
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
  isTitleEditable = false,
  hideFields = true
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
      <p style={{ margin: hideFields ? '0' : '0 0 16px 0', fontSize: '12.5px', color: '#64748B', lineHeight: 1.4 }}>
        Manage and customize the content displayed on this live page (
        <span style={{ color: '#006B8F', fontFamily: 'monospace' }}>{publicRoute || `/${slug}`}</span>
        ).
      </p>

      {/* 2-Column Metadata Grid */}
      {!hideFields && (isTitleEditable || onSlugChange) && (
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

        <AdminFormField
          label="SLUG (URL PATH)"
          helperText={onSlugChange ? "URL slug identifier" : "Fixed system route (locked to protect website navigation)."}
        >
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
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-control"
                value={publicRoute || `/${slug}`}
                readOnly
                style={{ backgroundColor: '#F8FAFC', color: '#475569', cursor: 'default', fontFamily: 'monospace', paddingRight: '30px' }}
              />
              <span
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94A3B8',
                  fontSize: '11px'
                }}
                title="Fixed system route (Read-only)"
              >
                🔒
              </span>
            </div>
          )}
        </AdminFormField>
      </AdminFormGrid>
      )}
    </div>
  );
};

/**
 * Standard Search Engine Optimization (SEO) & Metadata Card with Character Counters & Live Preview
 */
export const AdminSeoSection = ({ data = {}, onChange }) => {
  const [previewMode, setPreviewMode] = useState('desktop');

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
    if (len === 0) return { label: 'Empty', color: '#64748B', bg: '#F1F5F9', border: '#E2E8F0', barColor: '#CBD5E1', pct: 0 };
    if (len > 60) return { label: `${len - 60} chars too long`, color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', barColor: '#EF4444', pct: 100 };
    if (len < 40) return { label: 'Slightly short', color: '#D97706', bg: '#FEF3C7', border: '#FDE68A', barColor: '#F59E0B', pct: Math.round((len / 60) * 100) };
    if (len >= 50 && len <= 60) return { label: 'Optimal length', color: '#059669', bg: '#ECFDF5', border: '#A7F3D0', barColor: '#10B981', pct: 100 };
    return { label: 'Good length', color: '#0284C7', bg: '#F0F9FF', border: '#BAE6FD', barColor: '#0EA5E9', pct: Math.round((len / 60) * 100) };
  };

  // Description Status Helper
  const getDescStatus = (len) => {
    if (len === 0) return { label: 'Empty', color: '#64748B', bg: '#F1F5F9', border: '#E2E8F0', barColor: '#CBD5E1', pct: 0 };
    if (len > 160) return { label: `${len - 160} chars too long`, color: '#DC2626', bg: '#FEF2F2', border: '#FECACA', barColor: '#EF4444', pct: 100 };
    if (len < 100) return { label: 'Slightly short', color: '#D97706', bg: '#FEF3C7', border: '#FDE68A', barColor: '#F59E0B', pct: Math.round((len / 160) * 100) };
    if (len >= 120 && len <= 160) return { label: 'Optimal length', color: '#059669', bg: '#ECFDF5', border: '#A7F3D0', barColor: '#10B981', pct: 100 };
    return { label: 'Good length', color: '#0284C7', bg: '#F0F9FF', border: '#BAE6FD', barColor: '#0EA5E9', pct: Math.round((len / 160) * 100) };
  };

  const titleStatus = getTitleStatus(metaTitleLength);
  const descStatus = getDescStatus(metaDescLength);

  // Format display breadcrumb for preview
  const rawCanonical = canonical.trim();
  const cleanCanonicalSlug = rawCanonical.replace(/^https?:\/\/[^/]+/, '');
  const displayUrl = rawCanonical
    ? (rawCanonical.startsWith('http') ? rawCanonical : `https://firevy.co${cleanCanonicalSlug.startsWith('/') ? '' : '/'}${cleanCanonicalSlug}`)
    : 'https://firevy.co/company/blog';

  const breadcrumbDisplay = displayUrl
    .replace(/^https?:\/\//, '')
    .split('/')
    .filter(Boolean)
    .join(' › ');

  return (
    <AdminFormSection
      title="Search Engine Optimization (SEO) & Metadata"
      subtitle="Configure how this page appears in Google search results and social media shares."
      icon={Search}
      badge="SEO & Social"
      badgeVariant="sky"
      collapsible
      defaultOpen={true}
    >
      <AdminFormGrid columns={2} gap="20px">
        {/* Meta Title Field */}
        <AdminFormField
          label="Page Meta Title"
          rightLabel={
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: titleStatus.color,
                backgroundColor: titleStatus.bg,
                border: `1px solid ${titleStatus.border}`,
                borderRadius: '999px',
                padding: '2px 8px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>{metaTitleLength} / 60</span>
              {titleStatus.label && <span style={{ opacity: 0.85 }}>• {titleStatus.label}</span>}
            </span>
          }
          helperText={
            <div>
              <div style={{ width: '100%', height: '3px', backgroundColor: '#F1F5F9', borderRadius: '3px', overflow: 'hidden', marginTop: '4px', marginBottom: '4px' }}>
                <div style={{ width: `${Math.min(100, titleStatus.pct)}%`, height: '100%', backgroundColor: titleStatus.barColor, transition: 'width 0.2s ease, background-color 0.2s ease' }} />
              </div>
              <span style={{ color: '#64748B', fontSize: '11px' }}>
                Recommended: 50–60 characters for optimal display in search engines.
              </span>
            </div>
          }
        >
          <input
            type="text"
            className="form-control"
            style={{
              height: '38px',
              fontSize: '13px',
              borderColor: metaTitleLength > 60 ? '#FCA5A5' : metaTitleLength >= 50 ? '#86EFAC' : undefined,
              boxShadow: metaTitleLength > 60 ? '0 0 0 2px rgba(220, 38, 38, 0.1)' : undefined
            }}
            placeholder="e.g. About Us | We Shape Digital Solutions | firevy.co"
            value={metaTitle}
            onChange={(e) => updateField('metaTitle', e.target.value)}
          />
        </AdminFormField>

        {/* Canonical URL Slug Field */}
        <AdminFormField
          label="Canonical URL Slug"
          rightLabel={
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#64748B',
                backgroundColor: '#F1F5F9',
                border: '1px solid #E2E8F0',
                borderRadius: '999px',
                padding: '2px 8px',
                whiteSpace: 'nowrap'
              }}
            >
              Indexing URL
            </span>
          }
          helperText={
            <div>
              <div style={{ height: '3px', marginTop: '4px', marginBottom: '4px' }} />
              <span style={{ color: '#64748B', fontSize: '11px' }}>
                Preferred indexing URL slug for search engine crawlers (e.g. /company/blog).
              </span>
            </div>
          }
        >
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0 10px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRight: 'none',
                borderRadius: '6px 0 0 6px',
                color: '#64748B',
                fontSize: '12px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              <Globe size={12} style={{ marginRight: '5px', color: '#006B8F' }} />
              firevy.co
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="/company/blog"
              style={{
                height: '38px',
                fontSize: '13px',
                fontFamily: 'monospace',
                borderRadius: '0 6px 6px 0'
              }}
              value={canonical}
              onChange={(e) => updateField('canonical', e.target.value)}
            />
          </div>
        </AdminFormField>

        {/* Meta Description Field */}
        <AdminFormField
          label="Meta Description"
          fullWidth
          rightLabel={
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: descStatus.color,
                backgroundColor: descStatus.bg,
                border: `1px solid ${descStatus.border}`,
                borderRadius: '999px',
                padding: '2px 8px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>{metaDescLength} / 160</span>
              {descStatus.label && <span style={{ opacity: 0.85 }}>• {descStatus.label}</span>}
            </span>
          }
          helperText={
            <div>
              <div style={{ width: '100%', height: '3px', backgroundColor: '#F1F5F9', borderRadius: '3px', overflow: 'hidden', marginTop: '4px', marginBottom: '4px' }}>
                <div style={{ width: `${Math.min(100, descStatus.pct)}%`, height: '100%', backgroundColor: descStatus.barColor, transition: 'width 0.2s ease, background-color 0.2s ease' }} />
              </div>
              <span style={{ color: '#64748B', fontSize: '11px' }}>
                Recommended: 120–160 characters. A compelling snippet increases search click-through rates.
              </span>
            </div>
          }
        >
          <textarea
            className="form-control"
            rows={3}
            style={{
              fontSize: '13px',
              lineHeight: 1.5,
              borderColor: metaDescLength > 160 ? '#FCA5A5' : metaDescLength >= 120 ? '#86EFAC' : undefined,
              boxShadow: metaDescLength > 160 ? '0 0 0 2px rgba(220, 38, 38, 0.1)' : undefined,
              resize: 'vertical'
            }}
            placeholder="Enter concise search summary snippet for Google..."
            value={metaDescription}
            onChange={(e) => updateField('metaDescription', e.target.value)}
          />
        </AdminFormField>

        {/* Meta Keywords Field */}
        <AdminFormField
          label="Meta Keywords"
          optional
          fullWidth
          helperText="Comma-separated keywords for internal tagging and search engine metadata."
        >
          <input
            type="text"
            className="form-control"
            style={{ height: '38px', fontSize: '13px' }}
            placeholder="e.g. software development, custom web app, mobile engineering, agile squads"
            value={metaKeywords}
            onChange={(e) => updateField('metaKeywords', e.target.value)}
          />
        </AdminFormField>
      </AdminFormGrid>

      {/* Google Search Result Live Preview Card */}
      <div
        style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '10px'
        }}
      >
        {/* Preview Card Header with Desktop / Mobile Toggle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: '#4285F4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 900
              }}
            >
              G
            </div>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 800,
                color: '#334155',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Google Search Result Preview
            </span>
          </div>

          {/* View Mode Switcher */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#E2E8F0',
              borderRadius: '6px',
              padding: '2px',
              gap: '2px'
            }}
          >
            <button
              type="button"
              onClick={() => setPreviewMode('desktop')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 600,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: previewMode === 'desktop' ? '#FFFFFF' : 'transparent',
                color: previewMode === 'desktop' ? '#0F172A' : '#64748B',
                boxShadow: previewMode === 'desktop' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <Monitor size={12} />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode('mobile')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 600,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: previewMode === 'mobile' ? '#FFFFFF' : 'transparent',
                color: previewMode === 'mobile' ? '#0F172A' : '#64748B',
                boxShadow: previewMode === 'mobile' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <Smartphone size={12} />
              Mobile
            </button>
          </div>
        </div>

        {/* Realistic Google Search Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            padding: previewMode === 'mobile' ? '12px 14px' : '14px 18px',
            maxWidth: previewMode === 'mobile' ? '380px' : '650px',
            margin: previewMode === 'mobile' ? '0 auto' : '0',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          {/* Favicon & Site Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 800,
                flexShrink: 0
              }}
            >
              F
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#202124', lineHeight: 1.2 }}>
                firevy.co
              </div>
              <div
                style={{
                  fontSize: '11.5px',
                  color: '#4D5156',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  lineHeight: 1.2
                }}
              >
                {breadcrumbDisplay || 'firevy.co › company › blog'}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', color: '#70757A' }}>
              <MoreVertical size={14} />
            </div>
          </div>

          {/* Title Link */}
          <div
            style={{
              fontSize: previewMode === 'mobile' ? '16px' : '18px',
              fontWeight: 400,
              color: '#1A0DAB',
              lineHeight: 1.3,
              cursor: 'pointer',
              marginTop: '3px',
              marginBottom: '4px',
              wordBreak: 'break-word'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            {metaTitle || 'Page Meta Title | firevy.co'}
          </div>

          {/* Meta Description */}
          <div
            style={{
              fontSize: '13px',
              color: '#4D5156',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: previewMode === 'mobile' ? 3 : 2,
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

