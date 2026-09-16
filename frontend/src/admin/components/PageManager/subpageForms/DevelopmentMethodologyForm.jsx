import React from 'react';
import { Plus, Trash2, Cpu, CheckCircle2 } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * DevelopmentMethodologyForm
 * 
 * Page-Specific CMS Form for "Development Methodology"
 */
export const DevelopmentMethodologyForm = ({
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
  const steps = Array.isArray(formData.steps) ? formData.steps : (formData.items || []);
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddStep = () => {
    const updated = [
      ...steps,
      {
        step: steps.length + 1,
        title: 'New Agile Phase',
        desc: 'Describe sprint deliverables, testing cadence, and milestones...'
      }
    ];
    updateRootField('steps', updated);
  };

  const handleUpdateStep = (idx, field, val) => {
    const updated = [...steps];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('steps', updated);
  };

  const handleDeleteStep = (idx) => {
    const updated = steps.filter((_, i) => i !== idx);
    updateRootField('steps', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Development Methodology'}
        slug={subPageMeta?.slug || 'development-methodology'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/development-methodology'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Agile sprint methodology headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. AGILE METHODOLOGY"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Our Agile Development Methodology"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter methodology overview..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. AGILE LIFECYCLE STAGES */}
      <AdminFormSection
        title="2. Agile Lifecycle Stages & Delivery Sprints"
        subtitle="Ordered lifecycle stages from requirements architecture to CI/CD automated release."
        badge={`${steps.length} Stages`}
        action={
          <button type="button" onClick={handleAddStep} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Stage</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {steps.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No lifecycle stages configured. Click "Add Stage" above.
            </div>
          ) : (
            steps.map((st, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: '#E0F2FE',
                    color: '#006B8F',
                    fontWeight: 800,
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '4px'
                  }}
                >
                  {idx + 1}
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phase Title (e.g. Discovery & Sprint Architecture)"
                    value={st.title || ''}
                    onChange={(e) => handleUpdateStep(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Phase deliverables, review gates, and sprint tasks..."
                    value={st.desc || st.description || ''}
                    onChange={(e) => handleUpdateStep(idx, 'desc', e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteStep(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444', flexShrink: 0, marginTop: '4px' }}
                  title="Delete stage"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 3. CTA BANNER */}
      <AdminFormSection
        title="3. Consultation CTA Banner"
        subtitle="Callout encouraging discovery calls."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Experience Enterprise Agile Delivery'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our Scrum Masters and Lead Architects to plan your product roadmap.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Schedule Sprint Planning'}
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

      {/* 5. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default DevelopmentMethodologyForm;
