import React from 'react';
import { Plus, Trash2, Quote, Video } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * CeoMessageForm
 * 
 * Page-Specific CMS Form for "CEO Message & Vision"
 */
export const CeoMessageForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 1
}) => {
  const updateSection = (section, field, value) => {
    onChange({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: value
      }
    });
  };

  const updateRootField = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const updateContentField = (field, value) => {
    onChange({
      ...formData,
      content: {
        ...formData.content,
        [field]: value
      }
    });
  };

  const hero = formData.hero || {};
  const content = formData.content || {};
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  // Paragraphs in message
  const paragraphs = Array.isArray(content.messageParagraphs)
    ? content.messageParagraphs
    : typeof content.message === 'string'
      ? [content.message]
      : [];

  const handleAddParagraph = () => {
    const updated = [...paragraphs, ''];
    updateContentField('messageParagraphs', updated);
  };

  const handleUpdateParagraph = (idx, val) => {
    const updated = [...paragraphs];
    updated[idx] = val;
    updateContentField('messageParagraphs', updated);
  };

  const handleDeleteParagraph = (idx) => {
    const updated = paragraphs.filter((_, i) => i !== idx);
    updateContentField('messageParagraphs', updated);
  };

  // Stats handlers
  const handleAddStat = () => {
    const newStats = [...stats, { label: 'New Metric', value: '100+' }];
    updateRootField('stats', newStats);
  };

  const handleUpdateStat = (idx, field, val) => {
    const updated = [...stats];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('stats', updated);
  };

  const handleDeleteStat = (idx) => {
    const updated = stats.filter((_, i) => i !== idx);
    updateRootField('stats', updated);
  };

  // Highlights handlers
  const handleAddHighlight = () => {
    const updated = [...highlights, 'New strategic priority'];
    updateRootField('highlights', updated);
  };

  const handleUpdateHighlight = (idx, val) => {
    const updated = [...highlights];
    updated[idx] = val;
    updateRootField('highlights', updated);
  };

  const handleDeleteHighlight = (idx) => {
    const updated = highlights.filter((_, i) => i !== idx);
    updateRootField('highlights', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* 1. PAGE INFORMATION */}
      <AdminPageInfoSection
        title={subPageMeta?.title || 'CEO Message & Vision'}
        slug={subPageMeta?.slug || 'ceo-message'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/ceo-message'}
        number={pageNumber}
      />

      {/* 2. HERO BANNER */}
      <AdminFormSection
        title="Hero Section & Introduction"
        subtitle="Executive spotlight headline, badge, and hero intro banner."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. LEADERSHIP INSIGHT"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. CEO Message & Vision"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter executive introduction copy..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. CEO PROFILE & SPOTLIGHT */}
      <AdminFormSection
        title="CEO Profile & Executive Information"
        subtitle="Name, designation, and official portrait photo of the Chief Executive Officer."
        badge="Executive Profile"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CEO Full Name" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Mr. Kumaril Patel"
              value={content.ceoName || ''}
              onChange={(e) => updateContentField('ceoName', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CEO Designation / Title" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Founder & Chief Executive Officer"
              value={content.ceoDesignation || ''}
              onChange={(e) => updateContentField('ceoDesignation', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px' }}>
          <AdminMediaField
            label="CEO Portrait Photo / Media Asset"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="company/leadership"
            placeholder="https://... or /images/..."
            helperText="Upload official high-resolution executive portrait image."
          />
        </div>
      </AdminFormSection>

      {/* 4. EXECUTIVE MESSAGE CONTENT */}
      <AdminFormSection
        title="Executive Message & Vision Narrative"
        subtitle="Main headline, keynote quote, detailed message paragraphs, and spotlight video."
        badge="Keynote & Message"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Message Main Headline">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Pioneering The Future Of Software Engineering With Integrity"
              value={content.headline || ''}
              onChange={(e) => updateContentField('headline', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Keynote Quote / Executive Philosophy" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="e.g. True innovation begins when technical rigor meets genuine empathy for the user's journey."
              value={content.quote || ''}
              onChange={(e) => updateContentField('quote', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Video Spotlight URL / Embedded Keynote" optional fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. https://www.youtube.com/watch?v=..."
              value={formData.heroVideo || content.videoUrl || ''}
              onChange={(e) => {
                updateRootField('heroVideo', e.target.value);
                updateContentField('videoUrl', e.target.value);
              }}
            />
          </AdminFormField>

          <AdminFormField label="Executive Message Paragraphs" fullWidth>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {paragraphs.map((pText, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#E0F2FE', color: '#006B8F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0, marginTop: '8px' }}>
                    {idx + 1}
                  </div>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder={`Paragraph ${idx + 1}...`}
                    value={pText}
                    onChange={(e) => handleUpdateParagraph(idx, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteParagraph(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444', marginTop: '8px' }}
                    title="Remove paragraph"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddParagraph}
                className="btn btn-secondary btn-sm"
                style={{ alignSelf: 'flex-start' }}
              >
                <Plus size={13} />
                <span>Add Message Paragraph</span>
              </button>
            </div>
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. STRATEGIC PRIORITIES & STATS */}
      <AdminFormSection
        title="Strategic Priorities & Retention Metrics"
        subtitle="Core focus areas and performance milestones."
        badge={`${stats.length} Stats`}
        collapsible
      >
        <AdminFormField label="Key Strategic Priorities / Highlights" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {highlights.map((hl, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  value={hl}
                  onChange={(e) => handleUpdateHighlight(idx, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteHighlight(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddHighlight}
              className="btn btn-secondary btn-sm"
              style={{ alignSelf: 'flex-start' }}
            >
              <Plus size={13} />
              <span>Add Priority</span>
            </button>
          </div>
        </AdminFormField>

        <AdminFormField label="Performance & Leadership Stats" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 96%)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. Client Retention Rate)"
                  value={st.label || ''}
                  onChange={(e) => handleUpdateStat(idx, 'label', e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleDeleteStat(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddStat}
              className="btn btn-secondary btn-sm"
              style={{ alignSelf: 'flex-start' }}
            >
              <Plus size={13} />
              <span>Add Stat</span>
            </button>
          </div>
        </AdminFormField>
      </AdminFormSection>

      {/* 6. CTA BANNER */}
      <AdminFormSection
        title="Leadership Contact CTA Banner"
        subtitle="Callout encouraging executive strategy consultations."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Connect With Our Leadership Team'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Schedule a strategic architecture session with our engineering directors.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Contact Us'}
              onChange={(e) => updateSection('cta', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink || '/contact'}
              onChange={(e) => updateSection('cta', 'buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 7. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default CeoMessageForm;
