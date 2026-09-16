import React from 'react';
import { Plus, Trash2, Layers, CheckCircle2, Code } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * ServiceDetailForm
 * 
 * Dedicated Page-Specific CMS Form for Services
 * (Custom Software Development, Mobile Apps, Cloud & DevOps, Web Apps, QA, UI/UX, etc.)
 */
export const ServiceDetailForm = ({
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
  const capabilities = Array.isArray(formData.features?.cards)
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

  const handleAddCapability = () => {
    const updated = [
      ...capabilities,
      {
        id: Date.now(),
        title: 'New Service Capability / Workstream',
        desc: 'Describe technical scope, deliverables, and architecture...',
        icon: 'Layers'
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateCapability = (idx, field, val) => {
    const updated = [...capabilities];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteCapability = (idx) => {
    const updated = capabilities.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Service Metric', value: '100%' }];
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
        title: 'New Delivery Phase',
        desc: 'Phase activities and technical milestones...'
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
        title={subPageMeta?.title || 'Service Offering'}
        slug={subPageMeta?.slug || 'services'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/services/${subPageMeta?.slug}`}
        badge="Engineering Service"
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Service Overview"
        subtitle="Primary service headline, category badge, value proposition, and hero media."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Service Badge / Category" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. CORE ENGINEERING"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Service Title / Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Custom Software Development Services"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Service Narrative & Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter comprehensive service scope overview..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Text" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Consult Our Architects"
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
            label="Service Hero Illustration / Graphic Asset"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="services/hero"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 2. SERVICE OVERVIEW */}
      <AdminFormSection
        title="2. Service Scope & Technical Narrative"
        subtitle="Detailed explanation of technical capabilities, compliance, and engineering methodology."
        badge="Scope & Narrative"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Overview Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Enterprise-Grade Software Built for Scalability"
              value={overview.title || ''}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Detailed Scope Description" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write detailed service scope and technical architecture..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. CORE DELIVERABLES */}
      <AdminFormSection
        title="3. Core Deliverables & Capabilities"
        subtitle="Individual capability cards with title, icon, and technical description."
        badge={`${capabilities.length} Capabilities`}
        action={
          <button type="button" onClick={handleAddCapability} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Deliverable</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {capabilities.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No deliverables configured. Click "Add Deliverable" above.
            </div>
          ) : (
            capabilities.map((cap, idx) => (
              <div
                key={cap.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    DELIVERABLE #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteCapability(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Deliverable Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Cloud-Native Microservices Architecture"
                      value={cap.title || ''}
                      onChange={(e) => handleUpdateCapability(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Layers, Cpu, Server, ShieldCheck"
                      value={cap.icon || ''}
                      onChange={(e) => handleUpdateCapability(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Deliverable Description" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Explain deliverables and tech stack..."
                      value={cap.desc || cap.description || ''}
                      onChange={(e) => handleUpdateCapability(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. PROCESS LIFECYCLE */}
      <AdminFormSection
        title="4. Delivery Lifecycle & Process Stages"
        subtitle="Ordered execution stages from requirements discovery to production release."
        badge={`${steps.length} Stages`}
        action={
          <button type="button" onClick={handleAddStep} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Phase</span>
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

      {/* 5. CTA BANNER */}
      <AdminFormSection
        title="5. Service Consultation CTA Banner"
        subtitle="Conversion banner for scheduling technical discovery sessions."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Ready to Build Your Custom Software Solution?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our solution architects for a free technical consultation.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Schedule Architecture Call'}
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

export default ServiceDetailForm;
