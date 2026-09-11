import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import CompanyCrudManager from '../../CompanyAdmin/CompanyCrudManager';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * BrochureForm
 * 
 * Page-Specific CMS Form for "Corporate Brochure / Download Brochure"
 */
export const BrochureForm = ({
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
  const capabilities = Array.isArray(formData.capabilities) ? formData.capabilities : (formData.cards || []);
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddCapability = () => {
    const updated = [
      ...capabilities,
      {
        title: 'New Service Capability',
        desc: 'Overview of enterprise services and delivery competencies...'
      }
    ];
    updateRootField('capabilities', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateCapability = (idx, field, val) => {
    const updated = [...capabilities];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('capabilities', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteCapability = (idx) => {
    const updated = capabilities.filter((_, i) => i !== idx);
    updateRootField('capabilities', updated);
    updateRootField('cards', updated);
  };

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Corporate Brochure'}
        slug={subPageMeta?.slug || 'download-brochure'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/download-brochure'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Brochure download headline, subtitle, and primary action."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. SALES COLLATERAL"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Download firevy.co Corporate Brochure"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter brochure download narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. DOWNLOADABLE BROCHURE ASSETS */}
      <AdminFormSection
        title="2. Corporate Brochure PDF Assets & Decks"
        subtitle="Manage downloadable PDF presentations, capability decks, and sales collateral."
        badge="Brochures CRUD"
      >
        <CompanyCrudManager
          pageTitle="Brochures & Decks"
          pageSubtitle="Manage downloadable corporate PDFs, category decks, and cover thumbnails."
          collectionType="brochures"
          publicRoute="/company/download-brochure"
          itemTitle="Brochure"
        />
      </AdminFormSection>

      {/* 3. CAPABILITIES OVERVIEW */}
      <AdminFormSection
        title="3. Enterprise Capabilities Overview"
        subtitle="Summary highlights of services and technical specializations featured in the brochure."
        badge={`${capabilities.length} Capabilities`}
        action={
          <button type="button" onClick={handleAddCapability} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Capability</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {capabilities.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No capabilities added yet. Click "Add Capability" above.
            </div>
          ) : (
            capabilities.map((cap, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    CAPABILITY #{idx + 1}
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
                <AdminFormGrid columns={1} gap="10px">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Capability Title"
                    value={cap.title || ''}
                    onChange={(e) => handleUpdateCapability(idx, 'title', e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Description..."
                    value={cap.desc || cap.description || ''}
                    onChange={(e) => handleUpdateCapability(idx, 'desc', e.target.value)}
                  />
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. REQUEST CUSTOM DECK CTA */}
      <AdminFormSection
        title="4. Request Custom Presentation CTA Banner"
        subtitle="Callout encouraging customized enterprise capability decks."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Need a Customized Enterprise Deck?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Reach out to our solution architects for tailored architecture case studies.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Request Presentation'}
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

export default BrochureForm;
