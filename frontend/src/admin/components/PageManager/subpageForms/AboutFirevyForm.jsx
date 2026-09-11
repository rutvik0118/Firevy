import React from 'react';
import { Plus, Trash2, GripVertical, Sparkles, Building2 } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * AboutFirevyForm
 * 
 * Page-Specific CMS Form for "About firevy.co"
 * Features:
 * - Page Information (Title, Slug, Status)
 * - Hero Banner (Badge, Title, Subtitle, CTA buttons, Hero Image)
 * - Company Overview & Brand Story (Heading, Detailed narrative)
 * - Mission & Vision Statements
 * - Core Values Repeater (Interactive cards with title, description, icon, add/delete/reorder)
 * - Key Metrics & Growth Statistics
 * - Workplace & Culture Photo Gallery
 * - Corporate Highlights
 * - Partner With Us CTA Banner
 * - Full SEO & Metadata with character counters
 */
export const AboutFirevyForm = ({
  formData,
  onChange,
  subPageMeta,
  pageNumber = 1,
  onReset,
  onSave,
  onPublish,
  saving,
  publishing
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

  const hero = formData.hero || {};
  const overview = formData.overview || {};
  const missionVision = formData.missionVision || {};
  const values = Array.isArray(formData.values) ? formData.values : (formData.cards || []);
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const gallery = Array.isArray(formData.gallery) ? formData.gallery : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  // Handlers for Core Values Repeater
  const handleAddValue = () => {
    const newValues = [
      ...values,
      {
        id: Date.now(),
        title: 'New Core Value',
        desc: 'Describe what this principle means in practice...',
        icon: 'Sparkles'
      }
    ];
    updateRootField('values', newValues);
    updateRootField('cards', newValues);
  };

  const handleUpdateValue = (idx, field, val) => {
    const updated = [...values];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('values', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteValue = (idx) => {
    const updated = values.filter((_, i) => i !== idx);
    updateRootField('values', updated);
    updateRootField('cards', updated);
  };

  // Handlers for Key Metrics Repeater
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

  // Handlers for Gallery Images
  const handleAddGalleryImage = () => {
    const newGallery = [...gallery, ''];
    updateRootField('gallery', newGallery);
  };

  const handleUpdateGalleryImage = (idx, val) => {
    const updated = [...gallery];
    updated[idx] = val;
    updateRootField('gallery', updated);
  };

  const handleDeleteGalleryImage = (idx) => {
    const updated = gallery.filter((_, i) => i !== idx);
    updateRootField('gallery', updated);
  };

  // Handlers for Highlights
  const handleAddHighlight = () => {
    const newHighlights = [...highlights, 'New corporate certification or highlight'];
    updateRootField('highlights', newHighlights);
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
        title={subPageMeta?.title || 'About firevy.co'}
        slug={subPageMeta?.slug || 'about-firevy'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/about-firevy'}
        number={pageNumber}
      />

      {/* 2. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Banner & Core Introduction"
        subtitle="Primary headline, category badge tag, narrative description, action buttons, and hero visual."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMPANY PROFILE"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Page / Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. About firevy.co"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter supporting narrative introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary CTA Button Text" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Get Started"
              value={hero.ctaText || ''}
              onChange={(e) => updateSection('hero', 'ctaText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary CTA Target Link" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={hero.ctaLink || ''}
              onChange={(e) => updateSection('hero', 'ctaLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '14px' }}>
          <AdminMediaField
            label="Hero Cover Image / Illustration"
            value={hero.heroImage || ''}
            onChange={(val) => updateSection('hero', 'heroImage', val)}
            folder="company/about"
            placeholder="https://... or /images/..."
            helperText="Upload or enter image URL for the main hero banner."
          />
        </div>
      </AdminFormSection>

      {/* 3. COMPANY OVERVIEW */}
      <AdminFormSection
        title="2. Company Overview & Brand Story"
        subtitle="Detailed background, establishment history, and corporate narrative."
        badge="Story & Narrative"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Overview Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. About firevy.co"
              value={overview.title || 'About firevy.co'}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Company Overview Narrative (Detailed Body Text)" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write detailed corporate background, company history, and expertise..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 4. MISSION & VISION */}
      <AdminFormSection
        title="3. Mission & Vision Statements"
        subtitle="Corporate mission, long-term strategic vision, and guiding ambitions."
        badge="Mission & Vision"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Vision Heading">
            <input
              type="text"
              className="form-control"
              value={missionVision.visionTitle || 'Our Vision'}
              onChange={(e) => updateSection('missionVision', 'visionTitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Mission Heading">
            <input
              type="text"
              className="form-control"
              value={missionVision.missionTitle || 'Our Mission'}
              onChange={(e) => updateSection('missionVision', 'missionTitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Vision Statement Narrative">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter strategic vision statement..."
              value={missionVision.visionText || ''}
              onChange={(e) => updateSection('missionVision', 'visionText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Mission Statement Narrative">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter corporate mission statement..."
              value={missionVision.missionText || ''}
              onChange={(e) => updateSection('missionVision', 'missionText', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 5. CORE VALUES REPEATER */}
      <AdminFormSection
        title="4. Core Cultural Values & Pillars"
        subtitle="Repeatable value cards detailing cultural principles and commitments."
        badge={`${values.length} Values`}
        action={
          <button type="button" onClick={handleAddValue} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Core Value</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {values.length === 0 ? (
            <div
              style={{
                padding: '20px',
                textAlign: 'center',
                color: '#94A3B8',
                fontSize: '13px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px dashed #CBD5E1'
              }}
            >
              No core values added yet. Click "Add Core Value" above to create one.
            </div>
          ) : (
            values.map((val, idx) => (
              <div
                key={val.id || idx}
                style={{
                  padding: '14px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#006B8F',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    VALUE #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteValue(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                    title="Delete Value"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Value Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Transparency & Integrity"
                      value={val.title || ''}
                      onChange={(e) => handleUpdateValue(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key / Tag" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. ShieldCheck, Heart, Sparkles, Star"
                      value={val.icon || ''}
                      onChange={(e) => handleUpdateValue(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Description Narrative" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Describe what this value represents..."
                      value={val.desc || val.description || ''}
                      onChange={(e) => handleUpdateValue(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 6. KEY METRICS & STATISTICS */}
      <AdminFormSection
        title="5. Key Performance Metrics & Numbers"
        subtitle="Quantifiable milestones and corporate statistics."
        badge={`${stats.length} Stats`}
        action={
          <button type="button" onClick={handleAddStat} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Metric</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {stats.length === 0 ? (
            <div
              style={{
                padding: '16px',
                textAlign: 'center',
                color: '#94A3B8',
                fontSize: '13px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px dashed #CBD5E1'
              }}
            >
              No metrics configured. Click "Add Metric" to add numbers.
            </div>
          ) : (
            stats.map((st, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  padding: '10px 12px',
                  background: '#F8FAFC',
                  borderRadius: '6px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ width: '130px', flexShrink: 0 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Value (e.g. 23+)"
                    value={st.value || ''}
                    onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Label (e.g. Years Experience)"
                    value={st.label || ''}
                    onChange={(e) => handleUpdateStat(idx, 'label', e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteStat(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444', flexShrink: 0 }}
                  title="Delete Metric"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 7. GALLERY & HIGHLIGHTS */}
      <AdminFormSection
        title="6. Culture Gallery & Workplace Highlights"
        subtitle="Workplace photos and key corporate highlights."
        badge="Media & Badges"
        collapsible
      >
        <AdminFormField
          label="Corporate Highlights / Bullet Points"
          fullWidth
          helperText="Key highlights displayed on the page."
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {highlights.map((hl, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  value={hl}
                  onChange={(e) => handleUpdateHighlight(idx, e.target.value)}
                  placeholder="e.g. ISO 27001:2013 Certified"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteHighlight(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444', flexShrink: 0 }}
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
              <span>Add Highlight</span>
            </button>
          </div>
        </AdminFormField>

        <AdminFormField label="Workplace Photo Gallery" fullWidth helperText="Photo URLs showing office culture and teams.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {gallery.map((imgUrl, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  value={imgUrl}
                  onChange={(e) => handleUpdateGalleryImage(idx, e.target.value)}
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={() => handleDeleteGalleryImage(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444', flexShrink: 0 }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddGalleryImage}
              className="btn btn-secondary btn-sm"
              style={{ alignSelf: 'flex-start' }}
            >
              <Plus size={13} />
              <span>Add Gallery Photo</span>
            </button>
          </div>
        </AdminFormField>
      </AdminFormSection>

      {/* 8. CALL TO ACTION (CTA) BANNER */}
      <AdminFormSection
        title="7. Partner With Us CTA Banner"
        subtitle="Conversion banner encouraging enterprise partnerships and inquiries."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Ready to Transform Your Business?"
              value={cta.title || ''}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Enter supporting narrative..."
              value={cta.subtitle || ''}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Contact Us"
              value={cta.buttonText || ''}
              onChange={(e) => updateSection('cta', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={cta.buttonLink || ''}
              onChange={(e) => updateSection('cta', 'buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 9. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default AboutFirevyForm;
