import React, { useState, useEffect } from 'react';
import {
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  Image as ImageIcon,
  CheckCircle2,
  RefreshCw,
  Globe,
  FileText,
  Layers,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import MediaUploadInput from '../UI/MediaUploadInput';
import ItemListEditor from '../UI/ItemListEditor';
import { useToast } from '../../context/ToastContext';
import companyService from '../../services/companyService';

export const CompanySectionEditor = ({
  slug,
  title,
  category = 'Company CMS',
  description = 'Manage rich content, hero assets, value pillars, and SEO settings for this public page.',
  publicRoute,
  itemFields = [],
  itemTitle = 'Item',
  hasGallery = true,
  hasStats = true,
  hasHighlights = true,
  hasItems = true
}) => {
  const { addToast } = useToast();

  const [activeTab, setActiveTab] = useState('hero'); // 'hero' | 'content' | 'items' | 'gallery' | 'seo'
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [sectionData, setSectionData] = useState({
    slug,
    title: '',
    subtitle: '',
    badge: '',
    heroImage: '',
    heroVideo: '',
    content: {},
    gallery: [],
    highlights: [],
    stats: [],
    items: [],
    seo: {
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      canonical: ''
    }
  });

  // Fetch Section Data from MongoDB
  const fetchSection = async () => {
    setLoading(true);
    try {
      const res = await companyService.getSection(slug);
      if (res && res.data) {
        setSectionData(res.data);
        setHasUnsavedChanges(false);
      }
    } catch (err) {
      console.error(`[Error loading section ${slug}]`, err);
      addToast(`Could not fetch section ${slug} from API`, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSection();
  }, [slug]);

  // Handle Root and Nested Field Changes
  const handleFieldChange = (field, value) => {
    setSectionData((prev) => ({
      ...prev,
      [field]: value
    }));
    setHasUnsavedChanges(true);
  };

  const handleContentFieldChange = (key, value) => {
    setSectionData((prev) => ({
      ...prev,
      content: {
        ...(prev.content || {}),
        [key]: value
      }
    }));
    setHasUnsavedChanges(true);
  };

  const handleSeoFieldChange = (key, value) => {
    setSectionData((prev) => ({
      ...prev,
      seo: {
        ...(prev.seo || {}),
        [key]: value
      }
    }));
    setHasUnsavedChanges(true);
  };

  // Highlights Management
  const handleAddHighlight = () => {
    setSectionData((prev) => ({
      ...prev,
      highlights: [...(prev.highlights || []), '']
    }));
    setHasUnsavedChanges(true);
  };

  const handleHighlightChange = (index, value) => {
    setSectionData((prev) => {
      const updated = [...(prev.highlights || [])];
      updated[index] = value;
      return { ...prev, highlights: updated };
    });
    setHasUnsavedChanges(true);
  };

  const handleDeleteHighlight = (index) => {
    setSectionData((prev) => ({
      ...prev,
      highlights: (prev.highlights || []).filter((_, i) => i !== index)
    }));
    setHasUnsavedChanges(true);
  };

  // Stats Management
  const handleAddStat = () => {
    setSectionData((prev) => ({
      ...prev,
      stats: [...(prev.stats || []), { label: 'New Metric', value: '100+' }]
    }));
    setHasUnsavedChanges(true);
  };

  const handleStatChange = (index, field, value) => {
    setSectionData((prev) => {
      const updated = [...(prev.stats || [])];
      updated[index] = {
        ...updated[index],
        [field]: value
      };
      return { ...prev, stats: updated };
    });
    setHasUnsavedChanges(true);
  };

  const handleDeleteStat = (index) => {
    setSectionData((prev) => ({
      ...prev,
      stats: (prev.stats || []).filter((_, i) => i !== index)
    }));
    setHasUnsavedChanges(true);
  };

  // Gallery Management
  const handleAddGalleryImage = (url) => {
    if (!url) return;
    setSectionData((prev) => ({
      ...prev,
      gallery: [...(prev.gallery || []), url]
    }));
    setHasUnsavedChanges(true);
  };

  const handleDeleteGalleryImage = (index) => {
    setSectionData((prev) => ({
      ...prev,
      gallery: (prev.gallery || []).filter((_, i) => i !== index)
    }));
    setHasUnsavedChanges(true);
  };

  // Save Draft (Live site remains unchanged)
  const handleSaveDraft = async () => {
    setSaving(true);
    try {
      const res = await companyService.saveDraftSection(slug, sectionData);
      if (res && res.data) {
        setSectionData(res.data);
        setHasUnsavedChanges(false);
        addToast(`Draft for "${title || sectionData.title}" saved successfully! Live website remains unchanged.`, 'info');
      }
    } catch (err) {
      console.error('[Save Draft Error]', err);
      addToast(err.message || 'Failed to save draft', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Publish Draft (Live site updates)
  const handlePublish = async () => {
    setSaving(true);
    try {
      const res = await companyService.publishSection(slug, sectionData);
      if (res && res.data) {
        setSectionData(res.data);
        setHasUnsavedChanges(false);
        addToast(`"${title || sectionData.title}" published successfully! Live website is now updated.`, 'success');
      }
    } catch (err) {
      console.error('[Publish Error]', err);
      addToast(err.message || 'Failed to publish section', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Unpublish Section (Set to Draft)
  const handleUnpublish = async () => {
    setSaving(true);
    try {
      const res = await companyService.unpublishSection(slug);
      if (res && res.data) {
        setSectionData(res.data);
        setHasUnsavedChanges(false);
        addToast(`"${title || sectionData.title}" set to Draft mode.`, 'info');
      }
    } catch (err) {
      console.error('[Unpublish Error]', err);
      addToast(err.message || 'Failed to unpublish', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Reset to Original Website Content
  const handleReset = async () => {
    setResetting(true);
    try {
      const res = await companyService.resetSection(slug);
      if (res && res.data) {
        setSectionData(res.data);
        setHasUnsavedChanges(false);
        addToast(`"${title || sectionData.title}" reset to original website content`, 'success');
      }
    } catch (err) {
      console.error('[Reset Error]', err);
      addToast('Failed to reset section', 'error');
    } finally {
      setResetting(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container" style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 1rem auto' }} />
        <p>Loading {title || 'Company Section'} configuration from MongoDB...</p>
      </div>
    );
  }

  const isPublished = sectionData.status === 'published';
  const previewUrl = `${publicRoute || `/company/${slug}`}?preview=true`;
  const liveUrl = publicRoute || `/company/${slug}`;

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header Bar */}
      <div className="page-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="page-title-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
            <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={24} />
              <span>{title || sectionData.title}</span>
            </h1>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: isPublished ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                color: isPublished ? '#059669' : '#D97706',
                border: `1px solid ${isPublished ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
              }}
            >
              {isPublished ? '● Published' : '○ Draft'}
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>{description}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          {/* Preview Draft */}
          <a
            href={previewUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
            title="Preview Draft on website with draft data"
          >
            <ExternalLink size={14} />
            <span>Preview Draft</span>
          </a>

          {/* Reset Template */}
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-secondary btn-sm"
            disabled={resetting || saving}
            title="Revert to original website content"
          >
            <RotateCcw size={14} className={resetting ? 'animate-spin' : ''} />
            <span>Reset Section</span>
          </button>

          {/* Publish Button */}
          <button
            type="button"
            onClick={handlePublish}
            className={`btn btn-primary btn-sm ${hasUnsavedChanges ? 'pulse-glow' : ''}`}
            disabled={saving}
            style={{ backgroundColor: '#006B8F', borderColor: '#006B8F' }}
            title="Publish changes to the live website"
          >
            {saving ? (
              <>
                <RefreshCw size={14} className="animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <CheckCircle2 size={14} />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border-medium)',
          marginBottom: '1.5rem',
          overflowX: 'auto',
          paddingBottom: '2px'
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('hero')}
          className={`btn btn-ghost btn-sm ${activeTab === 'hero' ? 'active' : ''}`}
          style={{
            borderBottom: activeTab === 'hero' ? '2px solid var(--primary)' : '2px solid transparent',
            borderRadius: '6px 6px 0 0',
            color: activeTab === 'hero' ? 'var(--primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === 'hero' ? 700 : 500
          }}
        >
          <span>Hero & Header</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('content')}
          className={`btn btn-ghost btn-sm ${activeTab === 'content' ? 'active' : ''}`}
          style={{
            borderBottom: activeTab === 'content' ? '2px solid var(--primary)' : '2px solid transparent',
            borderRadius: '6px 6px 0 0',
            color: activeTab === 'content' ? 'var(--primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === 'content' ? 700 : 500
          }}
        >
          <span>Main Content</span>
        </button>

        {hasItems && (
          <button
            type="button"
            onClick={() => setActiveTab('items')}
            className={`btn btn-ghost btn-sm ${activeTab === 'items' ? 'active' : ''}`}
            style={{
              borderBottom: activeTab === 'items' ? '2px solid var(--primary)' : '2px solid transparent',
              borderRadius: '6px 6px 0 0',
              color: activeTab === 'items' ? 'var(--primary)' : 'var(--text-secondary)',
              fontWeight: activeTab === 'items' ? 700 : 500
            }}
          >
            <span>{itemTitle} Cards ({sectionData.items?.length || 0})</span>
          </button>
        )}

        {hasGallery && (
          <button
            type="button"
            onClick={() => setActiveTab('gallery')}
            className={`btn btn-ghost btn-sm ${activeTab === 'gallery' ? 'active' : ''}`}
            style={{
              borderBottom: activeTab === 'gallery' ? '2px solid var(--primary)' : '2px solid transparent',
              borderRadius: '6px 6px 0 0',
              color: activeTab === 'gallery' ? 'var(--primary)' : 'var(--text-secondary)',
              fontWeight: activeTab === 'gallery' ? 700 : 500
            }}
          >
            <span>Photo Gallery ({sectionData.gallery?.length || 0})</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setActiveTab('seo')}
          className={`btn btn-ghost btn-sm ${activeTab === 'seo' ? 'active' : ''}`}
          style={{
            borderBottom: activeTab === 'seo' ? '2px solid var(--primary)' : '2px solid transparent',
            borderRadius: '6px 6px 0 0',
            color: activeTab === 'seo' ? 'var(--primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === 'seo' ? 700 : 500
          }}
        >
          <span>SEO & Metadata</span>
        </button>
      </div>

      {/* ============================================================
          TAB 1: HERO & HEADER
          ============================================================ */}
      {activeTab === 'hero' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.625rem' }}>
              Header Text & Badge
            </h3>

            <div className="form-group">
              <label className="form-label">Page Headline / Title</label>
              <input
                type="text"
                value={sectionData.title || ''}
                onChange={(e) => handleFieldChange('title', e.target.value)}
                placeholder="e.g. About firevy.co"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category Badge Text</label>
              <input
                type="text"
                value={sectionData.badge || ''}
                onChange={(e) => handleFieldChange('badge', e.target.value)}
                placeholder="e.g. COMPANY PROFILE, DIVERSITY & INCLUSION"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subtitle / Hook Statement</label>
              <textarea
                rows={3}
                value={sectionData.subtitle || ''}
                onChange={(e) => handleFieldChange('subtitle', e.target.value)}
                placeholder="Brief introductory synopsis..."
                className="form-textarea"
              />
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.625rem' }}>
              Featured Media & Visuals
            </h3>

            <div className="form-group">
              <label className="form-label">Hero Featured Image</label>
              <MediaUploadInput
                value={sectionData.heroImage || ''}
                onChange={(url) => handleFieldChange('heroImage', url)}
                label="Hero Image"
                previewType="image"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Optional Video / Embed URL</label>
              <input
                type="text"
                value={sectionData.heroVideo || ''}
                onChange={(e) => handleFieldChange('heroVideo', e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="form-input"
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: MAIN CONTENT & STATS
          ============================================================ */}
      {activeTab === 'content' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Dynamic Content Fields (Vision, Mission, Story, Paragraphs) */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.625rem' }}>
              Structured Body Content
            </h3>

            {Object.keys(sectionData.content || {}).map((key) => {
              const val = sectionData.content[key];
              const isLong = typeof val === 'string' && val.length > 80;

              if (Array.isArray(val)) {
                return (
                  <div key={key} className="form-group">
                    <label className="form-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                    <textarea
                      rows={5}
                      value={val.join('\n\n')}
                      onChange={(e) => handleContentFieldChange(key, e.target.value.split('\n\n'))}
                      className="form-textarea"
                    />
                  </div>
                );
              }

              return (
                <div key={key} className="form-group">
                  <label className="form-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</label>
                  {isLong ? (
                    <textarea
                      rows={4}
                      value={val || ''}
                      onChange={(e) => handleContentFieldChange(key, e.target.value)}
                      className="form-textarea"
                    />
                  ) : (
                    <input
                      type="text"
                      value={val || ''}
                      onChange={(e) => handleContentFieldChange(key, e.target.value)}
                      className="form-input"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Key Highlights List */}
          {hasHighlights && (
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Key Highlights & Standards
                </h3>
                <button type="button" onClick={handleAddHighlight} className="btn btn-secondary btn-sm">
                  <Plus size={14} />
                  <span>Add Highlight</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {(sectionData.highlights || []).map((highlight, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--primary)', shrink: 0 }} />
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => handleHighlightChange(idx, e.target.value)}
                      placeholder="e.g. ISO 27001:2013 Certified Security"
                      className="form-input"
                      style={{ flex: 1 }}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteHighlight(idx)}
                      className="btn btn-ghost btn-icon-sm"
                      style={{ color: 'var(--color-rose-500)' }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Metrics / Stats */}
          {hasStats && (
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Metric Counters & Numbers
                </h3>
                <button type="button" onClick={handleAddStat} className="btn btn-secondary btn-sm">
                  <Plus size={14} />
                  <span>Add Counter</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '0.875rem' }}>
                {(sectionData.stats || []).map((stat, sIdx) => (
                  <div key={sIdx} style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Counter #{sIdx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteStat(sIdx)}
                        className="btn btn-ghost btn-icon-sm"
                        style={{ color: 'var(--color-rose-500)' }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={stat.value || ''}
                      onChange={(e) => handleStatChange(sIdx, 'value', e.target.value)}
                      placeholder="e.g. 23+, 500+, 99.4%"
                      className="form-input"
                      style={{ fontWeight: 800, fontSize: '1.125rem' }}
                    />
                    <input
                      type="text"
                      value={stat.label || ''}
                      onChange={(e) => handleStatChange(sIdx, 'label', e.target.value)}
                      placeholder="e.g. Years Experience"
                      className="form-input"
                      style={{ fontSize: '0.8125rem' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================
          TAB 3: DYNAMIC ITEMS / PILLARS / METHODOLOGY CARDS
          ============================================================ */}
      {activeTab === 'items' && hasItems && (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <ItemListEditor
            items={sectionData.items || []}
            onChange={(updatedItems) => {
              setSectionData((prev) => ({ ...prev, items: updatedItems }));
              setHasUnsavedChanges(true);
            }}
            itemTitle={itemTitle}
            fields={
              itemFields.length > 0
                ? itemFields
                : [
                    { name: 'title', label: 'Title / Headline', type: 'text', required: true },
                    { name: 'desc', label: 'Description', type: 'textarea', required: true },
                    { name: 'icon', label: 'Icon Name / Key', type: 'text' }
                  ]
            }
          />
        </div>
      )}

      {/* ============================================================
          TAB 4: PHOTO GALLERY
          ============================================================ */}
      {activeTab === 'gallery' && hasGallery && (
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Page Photo Gallery
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Upload or link high-resolution images showcased on the public page.
              </p>
            </div>
          </div>

          <MediaUploadInput
            label="Upload New Gallery Photo"
            onChange={handleAddGalleryImage}
            previewType="image"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
            {(sectionData.gallery || []).map((imgUrl, gIdx) => (
              <div
                key={gIdx}
                style={{
                  position: 'relative',
                  height: '140px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-tertiary)'
                }}
              >
                <img src={imgUrl} alt={`Gallery ${gIdx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button
                  type="button"
                  onClick={() => handleDeleteGalleryImage(gIdx)}
                  className="btn btn-danger btn-icon-sm"
                  style={{ position: 'absolute', top: '6px', right: '6px', padding: '4px', height: '26px', width: '26px' }}
                  title="Remove Image"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: SEO & METADATA
          ============================================================ */}
      {activeTab === 'seo' && (
        <div className="glass-card" style={{ padding: '1.5rem', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.625rem' }}>
            Search Engine Optimization (SEO)
          </h3>

          <div className="form-group">
            <label className="form-label">SEO Meta Title</label>
            <input
              type="text"
              value={sectionData.seo?.metaTitle || ''}
              onChange={(e) => handleSeoFieldChange('metaTitle', e.target.value)}
              placeholder="e.g. About Us | We Shape Digital Solutions | firevy.co"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">SEO Meta Description</label>
            <textarea
              rows={3}
              value={sectionData.seo?.metaDescription || ''}
              onChange={(e) => handleSeoFieldChange('metaDescription', e.target.value)}
              placeholder="Brief description for Google search snippet results..."
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label className="form-label">SEO Meta Keywords</label>
            <input
              type="text"
              value={sectionData.seo?.metaKeywords || ''}
              onChange={(e) => handleSeoFieldChange('metaKeywords', e.target.value)}
              placeholder="e.g. about firevy, software development company, mobile app developers"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Canonical URL Slug</label>
            <input
              type="text"
              value={sectionData.seo?.canonical || ''}
              onChange={(e) => handleSeoFieldChange('canonical', e.target.value)}
              placeholder="e.g. /company/about-firevy"
              className="form-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySectionEditor;
