import React from 'react';
import { Plus, Trash2, Users2, Code, CheckCircle2 } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * HireDeveloperForm
 * 
 * Dedicated Page-Specific CMS Form for "Hire Developers"
 * (Hire React, Node.js, Python, Mobile, DevOps, Full-Stack Developers)
 */
export const HireDeveloperForm = ({
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
  const skills = Array.isArray(formData.features?.cards)
    ? formData.features.cards
    : Array.isArray(formData.cards)
      ? formData.cards
      : [];
  const steps = Array.isArray(formData.process?.steps)
    ? formData.process.steps
    : Array.isArray(formData.steps)
      ? formData.steps
      : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddSkill = () => {
    const updated = [
      ...skills,
      {
        id: Date.now(),
        title: 'New Skill / Competency',
        desc: 'Proficiency in state management, testing frameworks, and cloud architecture...'
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateSkill = (idx, field, val) => {
    const updated = [...skills];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteSkill = (idx) => {
    const updated = skills.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleAddStep = () => {
    const updated = [
      ...steps,
      {
        step: steps.length + 1,
        title: 'Hiring Step',
        desc: 'Review resumes, conduct technical interviews, and start trial sprint...'
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
        title={subPageMeta?.title || 'Hire Developers'}
        slug={subPageMeta?.slug || 'hire'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/hire/${subPageMeta?.slug}`}
        badge="Developer Hiring"
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Hiring Proposition"
        subtitle="Role title, recruitment badge, and developer squad introduction."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. HIRE TOP 3% TALENT"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Role Title / Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Hire Dedicated React & Frontend Developers"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter developer hiring introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Text">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Hire Developers Now"
              value={hero.ctaText || ''}
              onChange={(e) => updateSection('hero', 'ctaText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Button Link">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. /contact"
              value={hero.ctaLink || ''}
              onChange={(e) => updateSection('hero', 'ctaLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. ROLE OVERVIEW */}
      <AdminFormSection
        title="2. Developer Expertise & Role Overview"
        subtitle="Detailed narrative explaining developer screening, time-zone overlap, and technical mastery."
        badge="Expertise"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Overview Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Elite Engineers Ready to Scale Your Roadmap"
              value={overview.title || ''}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Expertise Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Describe technical screening, English proficiency, and agile squad collaboration..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. SKILLS & COMPETENCIES */}
      <AdminFormSection
        title="3. Skills Matrix & Core Competencies"
        subtitle="Individual competency cards detailing frameworks, libraries, and architecture capabilities."
        badge={`${skills.length} Skills`}
        action={
          <button type="button" onClick={handleAddSkill} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Skill</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {skills.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No skills configured. Click "Add Skill" above.
            </div>
          ) : (
            skills.map((sk, idx) => (
              <div
                key={sk.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    SKILL #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(idx)}
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
                    placeholder="Skill Title (e.g. Next.js & Server Components)"
                    value={sk.title || ''}
                    onChange={(e) => handleUpdateSkill(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Skill description..."
                    value={sk.desc || sk.description || ''}
                    onChange={(e) => handleUpdateSkill(idx, 'desc', e.target.value)}
                  />
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. 4-STEP HIRING PROCESS */}
      <AdminFormSection
        title="4. 4-Step Developer Hiring Process"
        subtitle="From candidate screening and technical interviews to onboarding."
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
                  placeholder="Step Title"
                  value={st.title || ''}
                  onChange={(e) => handleUpdateStep(idx, 'title', e.target.value)}
                />
                <textarea
                  className="form-control"
                  rows={2}
                  placeholder="Step description..."
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
        title="5. Hire Talent CTA Banner"
        subtitle="Callout encouraging clients to onboard developers in 48 hours."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Hire Senior Developers in Under 48 Hours'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our talent leads to review pre-vetted developer profiles and schedule interviews.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Schedule Developer Interviews'}
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

export default HireDeveloperForm;
