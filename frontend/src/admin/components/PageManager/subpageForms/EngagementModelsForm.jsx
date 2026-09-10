import React from 'react';
import { Plus, Trash2, Layers, CheckCircle2 } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * EngagementModelsForm
 * 
 * Page-Specific CMS Form for "Engagement Models"
 */
export const EngagementModelsForm = ({
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
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  const handleAddModel = () => {
    const updated = [
      ...models,
      {
        id: Date.now(),
        title: 'New Engagement Model',
        desc: 'Describe pricing structure, scope predictability, and team allocation...',
        icon: 'Layers'
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

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Engagement Models'}
        slug={subPageMeta?.slug || 'engagement-models'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/engagement-models'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Commercial engagement models headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. ENGAGEMENT MODELS"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Flexible Engagement Models"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter engagement models narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. ENGAGEMENT MODELS CARDS */}
      <AdminFormSection
        title="2. Engagement Models (Fixed Price / Time & Material / Dedicated Squads)"
        subtitle="Repeatable cards detailing pricing flexibility and commitment terms."
        badge={`${models.length} Models`}
        action={
          <button type="button" onClick={handleAddModel} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Model</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {models.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No models configured. Click "Add Model" above.
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
                      placeholder="e.g. Dedicated Development Team"
                      value={mod.title || ''}
                      onChange={(e) => handleUpdateModel(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Icon Key" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Users, Clock, ShieldCheck"
                      value={mod.icon || ''}
                      onChange={(e) => handleUpdateModel(idx, 'icon', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Description Narrative" fullWidth>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Explain how this model functions and ideal client use-cases..."
                      value={mod.desc || mod.description || ''}
                      onChange={(e) => handleUpdateModel(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 3. CTA BANNER */}
      <AdminFormSection
        title="3. Engagement Consultation CTA Banner"
        subtitle="Callout helping clients choose the most cost-effective engagement tier."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Need Guidance on the Best Model?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Our enterprise consultants help you evaluate project scope, timelines, and budget.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Schedule Consultation'}
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

      {/* 4. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default EngagementModelsForm;
