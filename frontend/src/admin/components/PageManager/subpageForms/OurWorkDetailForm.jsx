import React from 'react';
import { Plus, Trash2, Briefcase, ExternalLink, Sparkles } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * OurWorkDetailForm
 * 
 * Dedicated Page-Specific CMS Form for "Our Work / Portfolio / Case Studies"
 */
export const OurWorkDetailForm = ({
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
  const caseStudies = Array.isArray(formData.features?.cards)
    ? formData.features.cards
    : Array.isArray(formData.cards)
      ? formData.cards
      : (formData.items || []);
  const stats = Array.isArray(formData.stats?.stats)
    ? formData.stats.stats
    : Array.isArray(formData.stats)
      ? formData.stats
      : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddCaseStudy = () => {
    const updated = [
      ...caseStudies,
      {
        id: Date.now(),
        title: 'New Case Study Project',
        client: 'Enterprise Client',
        category: 'FinTech / SaaS',
        desc: 'Built a scalable microservices cloud platform handling millions of daily transactions...',
        metrics: '300% ROI, 99.99% Uptime',
        link: '',
        image: ''
      }
    ];
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  const handleUpdateCaseStudy = (idx, field, val) => {
    const updated = [...caseStudies];
    updated[idx] = { ...updated[idx], [field]: val };
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  const handleDeleteCaseStudy = (idx) => {
    const updated = caseStudies.filter((_, i) => i !== idx);
    updateSection('features', 'cards', updated);
    updateRootField('cards', updated);
    updateRootField('items', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Our Work & Portfolio'}
        slug={subPageMeta?.slug || 'our-work'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || `/our-work/${subPageMeta?.slug}`}
        badge="Case Studies Portfolio"
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Showcase Headline"
        subtitle="Portfolio category badge, headline, and project showcase introduction."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. PROVEN TRACK RECORD"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Portfolio Title / Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Enterprise Case Studies & Delivered Products"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter portfolio introduction narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. CASE STUDIES GRID */}
      <AdminFormSection
        title="2. Featured Projects & Case Studies Collection"
        subtitle="Cards with project title, client industry, challenge, solution outcome, and screenshot."
        badge={`${caseStudies.length} Case Studies`}
        action={
          <button type="button" onClick={handleAddCaseStudy} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Case Study</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {caseStudies.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No case studies configured. Click "Add Case Study" above.
            </div>
          ) : (
            caseStudies.map((cs, idx) => (
              <div
                key={cs.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    CASE STUDY #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteCaseStudy(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Project Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. AI-Powered FinTech Core Banking Platform"
                      value={cs.title || ''}
                      onChange={(e) => handleUpdateCaseStudy(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Client / Industry Category" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. FinTech / Global Payments Provider"
                      value={cs.category || cs.client || ''}
                      onChange={(e) => handleUpdateCaseStudy(idx, 'category', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Highlight Metrics & Outcome" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. 99.999% SLA, 4.8M Daily Users"
                      value={cs.metrics || ''}
                      onChange={(e) => handleUpdateCaseStudy(idx, 'metrics', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Live Demo / Website Link" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. https://..."
                      value={cs.link || ''}
                      onChange={(e) => handleUpdateCaseStudy(idx, 'link', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Project Narrative (Challenge & Solution)" fullWidth>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Describe the client requirements, engineering solution, and impact..."
                      value={cs.desc || cs.description || ''}
                      onChange={(e) => handleUpdateCaseStudy(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>

                <div style={{ marginTop: '12px' }}>
                  <AdminMediaField
                    label="Project Screenshot / Device Mockup"
                    value={cs.image || cs.img || ''}
                    onChange={(val) => handleUpdateCaseStudy(idx, 'image', val)}
                    folder="portfolio/screenshots"
                    placeholder="https://... or /images/..."
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 3. CTA BANNER */}
      <AdminFormSection
        title="3. Portfolio Consultation CTA Banner"
        subtitle="Callout driving project inquiry discussions."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Have a Similar Project in Mind?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our solution architects to discuss your technical architecture and receive a tailored quote.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Request Case Study Presentation'}
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

export default OurWorkDetailForm;
