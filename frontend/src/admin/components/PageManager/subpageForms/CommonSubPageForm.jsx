import React from 'react';
import { Plus, Trash2, Layers, Sparkles } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * CommonSubPageForm
 * 
 * Versatile Page-Specific CMS Form for all standard sub-pages
 */
export const CommonSubPageForm = ({
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
  const overview = formData.overview || {};
  const features = Array.isArray(formData.features?.cards)
    ? formData.features.cards
    : Array.isArray(formData.cards)
      ? formData.cards
      : (formData.items || []);
  const stats = Array.isArray(formData.stats?.stats)
    ? formData.stats.stats
    : Array.isArray(formData.stats)
      ? formData.stats
      : [];
  const steps = Array.isArray(formData.process?.steps)
    ? formData.process.steps
    : Array.isArray(formData.steps)
      ? formData.steps
      : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddCard = () => {
    const updated = [
      ...features,
      {
        id: Date.now(),
        title: 'New Capability / Feature',
        desc: 'Describe functionality, technical specifications, and benefits...',
        icon: 'Sparkles'
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  const handleUpdateCard = (idx, field, val) => {
    const updated = [...features];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  const handleDeleteCard = (idx) => {
    const updated = features.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Performance Metric', value: '100+' }];
    updateSection('stats', 'stats', updated);
    updateRootField('stats', updated);
  };

  const handleUpdateStat = (idx, field, val) => {
    const updated = [...stats];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('stats', 'stats', updated);
    updateRootField('stats', updated);
  };

  const handleDeleteStat = (idx) => {
    const updated = stats.filter((_, i) => i !== idx);
    updateSection('stats', 'stats', updated);
    updateRootField('stats', updated);
  };

  const handleAddStep = () => {
    const updated = [
      ...steps,
      {
        step: steps.length + 1,
        title: 'New Process Phase',
        desc: 'Phase deliverables and outcomes...'
      }
    ];
    updateSection('process', 'steps', updated);
    updateRootField('steps', updated);
  };

  const handleUpdateStep = (idx, field, val) => {
    const updated = [...steps];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('process', 'steps', updated);
    updateRootField('steps', updated);
  };

  const handleDeleteStep = (idx) => {
    const updated = steps.filter((_, i) => i !== idx);
    updateSection('process', 'steps', updated);
    updateRootField('steps', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* 1. PAGE INFORMATION */}
      <AdminPageInfoSection
        title={subPageMeta?.title || 'Page Management'}
        slug={subPageMeta?.slug || 'page'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/`}
        number={pageNumber}
      />

      {/* 2. HERO BANNER */}
      <AdminFormSection
        title="Hero Section & Introduction"
        subtitle="Primary headline, category badge tag, narrative description, and hero visual."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. ENTERPRISE SOLUTIONS"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Page / Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="Enter hero title..."
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter supporting narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Text" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Get Started"
              value={hero.ctaText || ''}
              onChange={(e) => updateSection('hero', 'ctaText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Link" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={hero.ctaLink || ''}
              onChange={(e) => updateSection('hero', 'ctaLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px' }}>
          <AdminMediaField
            label="Hero Cover Image"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="subpages/hero"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 3. OVERVIEW */}
      <AdminFormSection
        title="Overview & Background Narrative"
        subtitle="Detailed story, strategic background, and descriptive content."
        badge="Overview"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Section Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Overview & Scope"
              value={overview.title || ''}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Detailed Narrative Body" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write detailed background and operational copy..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 4. CORE CAPABILITIES */}
      <AdminFormSection
        title="Core Capabilities & Features Grid"
        subtitle="Repeatable cards detailing offerings, features, and technical competencies."
        badge={`${features.length} Cards`}
        action={
          <button type="button" onClick={handleAddCard} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Card</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {features.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No cards added yet. Click "Add Card" above.
            </div>
          ) : (
            features.map((cd, idx) => (
              <div
                key={cd.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    CARD #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteCard(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Card Title">
                    <input
                      type="text"
                      className="form-control"
                      value={cd.title || ''}
                      onChange={(e) => handleUpdateCard(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Sparkles, Layers, ShieldCheck"
                      value={cd.icon || ''}
                      onChange={(e) => handleUpdateCard(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Description" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      value={cd.desc || cd.description || ''}
                      onChange={(e) => handleUpdateCard(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 5. METRICS & STATS */}
      {stats.length > 0 && (
        <AdminFormSection
          title="Performance Numbers & Stats"
          subtitle="Quantifiable milestone statistics."
          badge={`${stats.length} Stats`}
          action={
            <button type="button" onClick={handleAddStat} className="btn btn-secondary btn-sm">
              <Plus size={14} />
              <span>Add Metric</span>
            </button>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label"
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
          </div>
        </AdminFormSection>
      )}

      {/* 6. CTA BANNER */}
      <AdminFormSection
        title="Call-to-Action (CTA) Banner"
        subtitle="Conversion banner at the bottom of the page."
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
              value={cta.subtitle || 'Connect with our team to start your digital transformation journey.'}
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

export default CommonSubPageForm;
