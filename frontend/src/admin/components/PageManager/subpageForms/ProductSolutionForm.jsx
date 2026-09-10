import React from 'react';
import { Plus, Trash2, Package, Sparkles, Layers } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * ProductSolutionForm
 * 
 * Dedicated Page-Specific CMS Form for Product Solutions
 * (ERP, CRM, Cloud Platforms, AI Systems, FinTech, Healthcare, SaaS Platforms)
 */
export const ProductSolutionForm = ({
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
  const modules = Array.isArray(formData.features?.cards)
    ? formData.features.cards
    : Array.isArray(formData.cards)
      ? formData.cards
      : [];
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

  const handleAddModule = () => {
    const updated = [
      ...modules,
      {
        id: Date.now(),
        title: 'New Product Module / Feature',
        desc: 'Describe functionality, workflows, and enterprise value...',
        icon: 'Sparkles'
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateModule = (idx, field, val) => {
    const updated = [...modules];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteModule = (idx) => {
    const updated = modules.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Performance Metric', value: '10x' }];
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
        title: 'New Implementation Phase',
        desc: 'Phase activities and rollout milestones...'
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
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Product Solution'}
        slug={subPageMeta?.slug || 'product'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/product/${subPageMeta?.slug}`}
        badge="Product Solution"
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Product Positioning"
        subtitle="Primary product headline, category badge, value proposition, and product visual."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Product Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. ENTERPRISE PLATFORM"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Product Title / Headline" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Enterprise Cloud & ERP Automation Platform"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Product Narrative & Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter comprehensive product value narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary CTA Label" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Request Demo"
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

        <div style={{ marginTop: '16px' }}>
          <AdminMediaField
            label="Product Hero Mockup / Graphic Illustration"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="products/hero"
            placeholder="https://... or /images/..."
            helperText="Upload UI screenshot or 3D product render asset."
          />
        </div>
      </AdminFormSection>

      {/* 2. PRODUCT OVERVIEW */}
      <AdminFormSection
        title="2. Product Architecture & Strategic Overview"
        subtitle="In-depth explanation of system capabilities, domain architecture, and use cases."
        badge="Architecture"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Overview Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Next-Generation Architecture Designed for Scale"
              value={overview.title || ''}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Detailed Product Overview Body" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write detailed architecture overview and operational workflows..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. CORE MODULES & FEATURES */}
      <AdminFormSection
        title="3. Core Feature Modules & Capabilities"
        subtitle="Individual module cards detailing platform components and features."
        badge={`${modules.length} Modules`}
        action={
          <button type="button" onClick={handleAddModule} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Module</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {modules.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No product modules configured. Click "Add Module" above.
            </div>
          ) : (
            modules.map((mod, idx) => (
              <div
                key={mod.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    MODULE #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteModule(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Module Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Automated Workflow Engine"
                      value={mod.title || ''}
                      onChange={(e) => handleUpdateModule(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Sparkles, Cpu, Layers, ShieldCheck"
                      value={mod.icon || ''}
                      onChange={(e) => handleUpdateModule(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Module Narrative" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Describe functionality, workflows, and benefits..."
                      value={mod.desc || mod.description || ''}
                      onChange={(e) => handleUpdateModule(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. METRICS & STATS */}
      <AdminFormSection
        title="4. Impact Numbers & Scalability Metrics"
        subtitle="Throughput, latency benchmarks, and efficiency metrics."
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
                placeholder="Value (e.g. 10x)"
                value={st.value || ''}
                onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                style={{ flex: 1 }}
                placeholder="Label (e.g. Faster Deployment Velocity)"
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

      {/* 5. IMPLEMENTATION STEPS */}
      <AdminFormSection
        title="5. Rollout & Implementation Steps"
        subtitle="Onboarding lifecycle from architecture discovery to production cutover."
        badge={`${steps.length} Steps`}
        action={
          <button type="button" onClick={handleAddStep} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Step</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {steps.map((st, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '14px',
                padding: '14px 16px',
                background: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#E0F2FE', color: '#006B8F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0, marginTop: '4px' }}>
                {idx + 1}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phase Title"
                  value={st.title || ''}
                  onChange={(e) => handleUpdateStep(idx, 'title', e.target.value)}
                />
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Phase deliverables..."
                  value={st.desc || st.description || ''}
                  onChange={(e) => handleUpdateStep(idx, 'desc', e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={() => handleDeleteStep(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444', marginTop: '4px' }}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </AdminFormSection>

      {/* 6. CTA BANNER */}
      <AdminFormSection
        title="6. Product Demo CTA Banner"
        subtitle="Callout driving product demo requests."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Ready to Experience This Solution Live?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Schedule a customized product demonstration with our engineering architects.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Request Live Demo'}
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

      {/* 8. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default ProductSolutionForm;
