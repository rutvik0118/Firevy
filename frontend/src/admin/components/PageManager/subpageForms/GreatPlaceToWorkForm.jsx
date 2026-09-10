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
 * GreatPlaceToWorkForm
 * 
 * Page-Specific CMS Form for "Great Place To Work"
 */
export const GreatPlaceToWorkForm = ({
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
  const benefits = Array.isArray(formData.items) ? formData.items : (formData.cards || []);
  const gallery = Array.isArray(formData.gallery) ? formData.gallery : [];
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddBenefit = () => {
    const updated = [
      ...benefits,
      {
        id: Date.now(),
        title: 'New Benefit / Perk',
        desc: 'Describe the employee wellness or growth perk...'
      }
    ];
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateBenefit = (idx, field, val) => {
    const updated = [...benefits];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteBenefit = (idx) => {
    const updated = benefits.filter((_, i) => i !== idx);
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
    const updated = [...stats, { label: 'New Metric', value: '4.8 / 5' }];
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
        title={subPageMeta?.title || 'Great Place To Work'}
        slug={subPageMeta?.slug || 'great-place-to-work'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/great-place-to-work'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Workplace culture headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMPANY CULTURE"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Great Place To Work"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter culture intro..."
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
            folder="company/culture"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 2. CULTURE NARRATIVE */}
      <AdminFormSection
        title="2. Culture & Workplace Philosophy"
        subtitle="Main headline and detailed narrative of life at firevy.co."
        badge="Culture Philosophy"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Headline">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. A Culture of Innovation, Ownership, and Mutual Respect"
              value={content.headline || ''}
              onChange={(e) => updateSection('content', 'headline', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Culture Narrative Description" fullWidth>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Enter detailed culture narrative..."
              value={content.description || ''}
              onChange={(e) => updateSection('content', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. BENEFITS & PERKS */}
      <AdminFormSection
        title="3. Employee Benefits & Workplace Perks"
        subtitle="Repeatable perks cards detailing healthcare, upskilling, and work-life balance."
        badge={`${benefits.length} Perks`}
        action={
          <button type="button" onClick={handleAddBenefit} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Perk</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {benefits.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No perks added yet. Click "Add Perk" above.
            </div>
          ) : (
            benefits.map((bn, idx) => (
              <div
                key={bn.id || idx}
                style={{
                  padding: '14px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    PERK #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteBenefit(idx)}
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
                    placeholder="Perk Title (e.g. Continuous Learning)"
                    value={bn.title || ''}
                    onChange={(e) => handleUpdateBenefit(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Description..."
                    value={bn.desc || bn.description || ''}
                    onChange={(e) => handleUpdateBenefit(idx, 'desc', e.target.value)}
                  />
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. OFFICE PHOTO GALLERY & STATS */}
      <AdminFormSection
        title="4. Office Gallery & Retention Statistics"
        subtitle="Workplace atmosphere photo gallery and satisfaction metrics."
        badge="Gallery & Stats"
        collapsible
      >
        <AdminFormField label="Workplace Photo Gallery" fullWidth helperText="Photo URLs of office space, team events, and retreats.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
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

        <AdminFormField label="Retention & Satisfaction Metrics" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 4.8 / 5)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. Employee Satisfaction Score)"
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

      {/* 5. CTA BANNER */}
      <AdminFormSection
        title="5. Careers CTA Banner"
        subtitle="Callout linking to open roles."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Ready to Build the Future With Us?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Explore open engineering and design positions across our global squads.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Explore Careers'}
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

export default GreatPlaceToWorkForm;
