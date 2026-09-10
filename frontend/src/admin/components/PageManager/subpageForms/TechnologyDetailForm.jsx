import React from 'react';
import { Plus, Trash2, Cpu, Code, Server, Sparkles } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * TechnologyDetailForm
 * 
 * Dedicated Page-Specific CMS Form for "Technology Stacks"
 * (Frontend, Backend, Mobile, Cloud & DevOps, Database, AI/ML, Blockchain)
 */
export const TechnologyDetailForm = ({
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
  const frameworks = Array.isArray(formData.features?.cards)
    ? formData.features.cards
    : Array.isArray(formData.cards)
      ? formData.cards
      : [];
  const stats = Array.isArray(formData.stats?.stats)
    ? formData.stats.stats
    : Array.isArray(formData.stats)
      ? formData.stats
      : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddFramework = () => {
    const updated = [
      ...frameworks,
      {
        id: Date.now(),
        title: 'New Framework / Tool',
        desc: 'Describe framework capabilities, architecture advantages, and version support...',
        icon: 'Code'
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateFramework = (idx, field, val) => {
    const updated = [...frameworks];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteFramework = (idx) => {
    const updated = frameworks.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Technology Stack'}
        slug={subPageMeta?.slug || 'technologies'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/technologies/${subPageMeta?.slug}`}
        badge="Technology Stack"
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Technology Positioning"
        subtitle="Technology category badge, headline, and framework ecosystem overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Category Badge" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. TECHNOLOGY ECOSYSTEM"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Technology Title / Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Modern Frontend & Web Architecture"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Technology Narrative & Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter ecosystem narrative and technical positioning..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. TECHNOLOGY OVERVIEW */}
      <AdminFormSection
        title="2. Technology Ecosystem & Standards"
        subtitle="Detailed explanation of design patterns, security protocols, and CI/CD pipelines."
        badge="Architecture"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Overview Heading">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Battle-Tested Frameworks Engineered for High-Throughput"
              value={overview.title || ''}
              onChange={(e) => updateSection('overview', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Detailed Technical Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Describe performance benchmarks, code quality metrics, and best practices..."
              value={overview.text || ''}
              onChange={(e) => updateSection('overview', 'text', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. SUPPORTED FRAMEWORKS & LIBRARIES */}
      <AdminFormSection
        title="3. Supported Frameworks, Libraries & Tools"
        subtitle="Individual technology cards detailing frameworks, versions, and specialized tooling."
        badge={`${frameworks.length} Frameworks`}
        action={
          <button type="button" onClick={handleAddFramework} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Framework</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {frameworks.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No frameworks configured. Click "Add Framework" above.
            </div>
          ) : (
            frameworks.map((fw, idx) => (
              <div
                key={fw.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    FRAMEWORK #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteFramework(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Framework / Tool Name">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. React & Next.js"
                      value={fw.title || ''}
                      onChange={(e) => handleUpdateFramework(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key / Tag" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Code, Server, Cpu, Database"
                      value={fw.icon || ''}
                      onChange={(e) => handleUpdateFramework(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Framework Description" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Describe architectural capabilities and version standards..."
                      value={fw.desc || fw.description || ''}
                      onChange={(e) => handleUpdateFramework(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. CTA BANNER */}
      <AdminFormSection
        title="4. Technology Consultation CTA Banner"
        subtitle="Callout driving technical stack consultations."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Want to Modernize Your Technology Stack?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our lead architects to evaluate stack migration and microservices design.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Schedule Tech Consultation'}
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

      {/* 6. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default TechnologyDetailForm;
