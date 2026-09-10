import React from 'react';
import { Plus, Trash2, Heart, Sparkles } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * WomenEmpowermentForm
 * 
 * Page-Specific CMS Form for "Women Empowerment"
 */
export const WomenEmpowermentForm = ({
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

  const hero = formData.hero || {};
  const content = formData.content || {};
  const programs = Array.isArray(formData.items) ? formData.items : (formData.cards || []);
  const gallery = Array.isArray(formData.gallery) ? formData.gallery : [];
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddProgram = () => {
    const updated = [
      ...programs,
      {
        id: Date.now(),
        title: 'New Diversity Program',
        desc: 'Describe mentorship, equal opportunity, or leadership development initiative...'
      }
    ];
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateProgram = (idx, field, val) => {
    const updated = [...programs];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteProgram = (idx) => {
    const updated = programs.filter((_, i) => i !== idx);
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleAddGalleryImage = () => {
    const updated = [...gallery, ''];
    updateRootField('gallery', updated);
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

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Diversity Metric', value: '42%' }];
    updateRootField('stats', updated);
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

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Empowering Women At firevy.co'}
        slug={subPageMeta?.slug || 'women-empowerment'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/women-empowerment'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Diversity & inclusion headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. DIVERSITY & INCLUSION"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Empowering Women At firevy.co"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter diversity and inclusion overview..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px' }}>
          <AdminMediaField
            label="Cover Image"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="company/diversity"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 2. DIVERSITY NARRATIVE */}
      <AdminFormSection
        title="2. Inclusion & Equality Statement"
        subtitle="Main headline and detailed narrative of women leadership in engineering."
        badge="Inclusion Statement"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Headline">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Championing Women in Tech & Engineering Leadership"
              value={content.headline || ''}
              onChange={(e) => updateSection('content', 'headline', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Diversity Narrative Description" fullWidth>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Enter detailed narrative..."
              value={content.description || ''}
              onChange={(e) => updateSection('content', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. INITIATIVES & MENTORSHIP */}
      <AdminFormSection
        title="3. Mentorship Programs & Diversity Initiatives"
        subtitle="Repeatable program cards detailing leadership grooming, equal pay, and returnships."
        badge={`${programs.length} Programs`}
        action={
          <button type="button" onClick={handleAddProgram} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Program</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {programs.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No programs configured. Click "Add Program" above.
            </div>
          ) : (
            programs.map((prg, idx) => (
              <div
                key={prg.id || idx}
                style={{
                  padding: '14px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    PROGRAM #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteProgram(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={1} gap="10px">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Program Title (e.g. Women In Tech Mentorship)"
                    value={prg.title || ''}
                    onChange={(e) => handleUpdateProgram(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Description..."
                    value={prg.desc || prg.description || ''}
                    onChange={(e) => handleUpdateProgram(idx, 'desc', e.target.value)}
                  />
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. DIVERSITY STATS & GALLERY */}
      <AdminFormSection
        title="4. Diversity Metrics & Photo Gallery"
        subtitle="Women in tech representation statistics and workplace gallery."
        badge="Stats & Media"
        collapsible
      >
        <AdminFormField label="Diversity & Leadership Metrics" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 42%)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. Women in Tech Roles)"
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

        <AdminFormField label="Initiatives Photo Gallery" fullWidth helperText="Photo URLs highlighting team events and celebrations.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                  style={{ color: '#EF4444' }}
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

      {/* 5. CTA BANNER */}
      <AdminFormSection
        title="5. Careers CTA Banner"
        subtitle="Callout encouraging women engineers to apply."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Join Our Inclusive Engineering Team'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Build cutting-edge enterprise software with mentorship and equal growth.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'View Open Positions'}
              onChange={(e) => updateSection('cta', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink || '/company/careers'}
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

export default WomenEmpowermentForm;
