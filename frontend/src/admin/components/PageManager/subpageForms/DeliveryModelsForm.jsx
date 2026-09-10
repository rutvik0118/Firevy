import React from 'react';
import { Plus, Trash2, Globe, Layers } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * DeliveryModelsForm
 * 
 * Page-Specific CMS Form for "Delivery Models"
 */
export const DeliveryModelsForm = ({
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
  const models = Array.isArray(formData.items) ? formData.items : (formData.cards || []);
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddModel = () => {
    const updated = [
      ...models,
      {
        id: Date.now(),
        title: 'New Delivery Model',
        shortDesc: 'Summary of delivery model advantages...',
        detailedContent: 'Detailed operational cadence and engineer collaboration workflow...',
        icon: 'Globe',
        features: ['Dedicated engineering squads', 'Agile 2-week sprints']
      }
    ];
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateModel = (idx, field, val) => {
    const updated = [...models];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteModel = (idx) => {
    const updated = models.filter((_, i) => i !== idx);
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Delivery SLA', value: '99%' }];
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
        title={subPageMeta?.title || 'Delivery Models'}
        slug={subPageMeta?.slug || 'delivery-models'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/delivery-models'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Global delivery framework headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. DELIVERY FRAMEWORK"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Delivery Models"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter delivery framework overview..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. FRAMEWORK OVERVIEW */}
      <AdminFormSection
        title="2. Delivery Framework Overview"
        subtitle="Headline and narrative explaining engagement flexibility."
        badge="Framework Intro"
      >
        <AdminFormGrid columns={1}>
          <AdminFormField label="Headline">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Scalable Delivery Frameworks Aligned to Your Business Goals"
              value={content.headline || ''}
              onChange={(e) => updateSection('content', 'headline', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Framework Description" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Describe offshore, onsite, and hybrid squad delivery..."
              value={content.description || ''}
              onChange={(e) => updateSection('content', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. DELIVERY MODELS CARDS */}
      <AdminFormSection
        title="3. Delivery Models & Engagement Cards"
        subtitle="Cards detailing Offshore, Onsite, Hybrid, and Dedicated Development Squads."
        badge={`${models.length} Models`}
        action={
          <button type="button" onClick={handleAddModel} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Delivery Model</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {models.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No delivery models added yet. Click "Add Delivery Model" above.
            </div>
          ) : (
            models.map((mod, idx) => (
              <div
                key={mod.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    MODEL #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteModel(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Model Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Offshore Delivery Model"
                      value={mod.title || ''}
                      onChange={(e) => handleUpdateModel(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Globe, Server, Users"
                      value={mod.icon || ''}
                      onChange={(e) => handleUpdateModel(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Short Summary" fullWidth>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Concise summary snippet..."
                      value={mod.shortDesc || ''}
                      onChange={(e) => handleUpdateModel(idx, 'shortDesc', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Detailed Operational Narrative" fullWidth>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Detailed narrative regarding team setup, overlap hours, and workflows..."
                      value={mod.detailedContent || ''}
                      onChange={(e) => handleUpdateModel(idx, 'detailedContent', e.target.value)}
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
        title="4. Delivery Metrics & Highlights"
        subtitle="Sprint accuracy numbers and code quality standards."
        badge={`${stats.length} Stats`}
        collapsible
      >
        <AdminFormField label="Performance Metrics" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 98.5%)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. Sprint Accuracy)"
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
              <span>Add Metric</span>
            </button>
          </div>
        </AdminFormField>
      </AdminFormSection>

      {/* 5. CTA BANNER */}
      <AdminFormSection
        title="5. Delivery Consultation CTA Banner"
        subtitle="Callout encouraging clients to discuss optimal delivery models."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Ready to Structure Your Delivery Model?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Connect with our solution leads to choose between onsite, offshore, or hybrid delivery.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Consult Our Architects'}
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

export default DeliveryModelsForm;
