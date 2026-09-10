import React from 'react';
import { Plus, Trash2, ShieldCheck } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * WhyChooseUsForm
 * 
 * Page-Specific CMS Form for "Why Choose Us"
 */
export const WhyChooseUsForm = ({
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
  const differentiators = Array.isArray(formData.items) ? formData.items : (formData.cards || []);
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddDifferentiator = () => {
    const updated = [
      ...differentiators,
      {
        id: Date.now(),
        title: 'New Differentiator',
        desc: 'Explain what makes our engineering squads stand out...'
      }
    ];
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateDifferentiator = (idx, field, val) => {
    const updated = [...differentiators];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteDifferentiator = (idx) => {
    const updated = differentiators.filter((_, i) => i !== idx);
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'New Guarantee / Stat', value: '99.9%' }];
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

  const handleAddHighlight = () => {
    const updated = [...highlights, 'New compliance guarantee'];
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
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Why Choose firevy.co'}
        slug={subPageMeta?.slug || 'why-choose-us'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/why-choose-us'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Value Statement"
        subtitle="Value proposition headline, badge, and introductory overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. VALUE PROPOSITION"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Why Choose firevy.co"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter value proposition introduction..."
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
            folder="company/why-choose-us"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 2. VALUE PROPOSITION INTRO */}
      <AdminFormSection
        title="2. Value Proposition Statement"
        subtitle="Executive summary statement of engineering rigor."
        badge="Narrative"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Engineered for Scale, Built for Long-Term Value"
              value={content.heading || ''}
              onChange={(e) => updateSection('content', 'heading', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Value Introduction Body" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter executive value narrative..."
              value={content.intro || ''}
              onChange={(e) => updateSection('content', 'intro', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. CORE DIFFERENTIATORS */}
      <AdminFormSection
        title="3. Core Differentiators & Competitive Advantages"
        subtitle="Interactive capability cards explaining our unfair engineering advantages."
        badge={`${differentiators.length} Pillars`}
        action={
          <button type="button" onClick={handleAddDifferentiator} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Pillar</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {differentiators.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No differentiators added yet. Click "Add Pillar" above.
            </div>
          ) : (
            differentiators.map((diff, idx) => (
              <div
                key={diff.id || idx}
                style={{
                  padding: '14px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    PILLAR #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteDifferentiator(idx)}
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
                    placeholder="Pillar Title (e.g. Top 3% Vetted Talent)"
                    value={diff.title || ''}
                    onChange={(e) => handleUpdateDifferentiator(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Description..."
                    value={diff.desc || diff.description || ''}
                    onChange={(e) => handleUpdateDifferentiator(idx, 'desc', e.target.value)}
                  />
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. GUARANTEES & STATS */}
      <AdminFormSection
        title="4. Delivery Guarantees & Performance Stats"
        subtitle="Security standards, SLA guarantees, and quantifiable metrics."
        badge={`${stats.length} Stats`}
      >
        <AdminFormField label="Quality & Security Guarantees" fullWidth>
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
              <span>Add Guarantee</span>
            </button>
          </div>
        </AdminFormField>

        <AdminFormField label="Performance Metrics" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 99.4%)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. On-Time Delivery)"
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
        title="5. Partner With Us CTA Banner"
        subtitle="Callout encouraging client onboarding."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Ready to Partner With Us?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Experience agile software engineering with zero compromises.'}
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

export default WhyChooseUsForm;
