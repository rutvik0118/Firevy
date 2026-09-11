import React from 'react';
import { Plus, Trash2, Heart, Globe } from 'lucide-react';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminMediaField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * CsrForm
 * 
 * Page-Specific CMS Form for "Corporate Social Responsibility (CSR)"
 */
export const CsrForm = ({
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
  const initiatives = Array.isArray(formData.items) ? formData.items : (formData.cards || []);
  const gallery = Array.isArray(formData.gallery) ? formData.gallery : [];
  const stats = Array.isArray(formData.stats) ? formData.stats : [];
  const highlights = Array.isArray(formData.highlights) ? formData.highlights : [];
  const seo = formData.seo || {};

  const handleAddInitiative = () => {
    const updated = [
      ...initiatives,
      {
        id: Date.now(),
        title: 'New CSR Initiative',
        desc: 'Describe the community outreach, student donation, or environmental drive...',
        img: ''
      }
    ];
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleUpdateInitiative = (idx, field, val) => {
    const updated = [...initiatives];
    updated[idx] = { ...updated[idx], [field]: val };
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleDeleteInitiative = (idx) => {
    const updated = initiatives.filter((_, i) => i !== idx);
    updateRootField('items', updated);
    updateRootField('cards', updated);
  };

  const handleAddGalleryImage = () => {
    const updated = [...gallery, ''];
    updateRootField('gallery', updated);
  };

  const handleUpdateGalleryImage = (idx, val) => {
    const updated = [...gallery];
    updated[idx] = val;
    updateRootField('gallery', updated);
  };

  const handleDeleteGalleryImage = (idx) => {
    const updated = gallery.filter((_, i) => i !== idx);
    updateRootField('gallery', updated);
  };

  const handleAddStat = () => {
    const updated = [...stats, { label: 'Impact Metric', value: '1,000+' }];
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
        title={subPageMeta?.title || 'Corporate Social Responsibility (CSR)'}
        slug={subPageMeta?.slug || 'csr'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/csr'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="CSR motto, badge, and community commitment introduction."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMMUNITY & IMPACT"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Corporate Social Responsibility (CSR)"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Motto Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter CSR narrative introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>

        <div style={{ marginTop: '16px' }}>
          <AdminMediaField
            label="Cover Image"
            value={formData.heroImage || hero.heroImage || ''}
            onChange={(val) => {
              updateRootField('heroImage', val);
              updateSection('hero', 'heroImage', val);
            }}
            folder="company/csr"
            placeholder="https://... or /images/..."
          />
        </div>
      </AdminFormSection>

      {/* 2. CSR PHILOSOPHY & MOTTO */}
      <AdminFormSection
        title="2. CSR Philosophy & Guiding Theme"
        subtitle="Sanskrit theme motto (e.g. 'संकल्प') and responsibility narrative."
        badge="Philosophy"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Sanskrit Word / Guiding Motto" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. संकल्प"
              value={content.sanskritWord || ''}
              onChange={(e) => updateSection('content', 'sanskritWord', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Impact Headline">
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Meaningful Change for Our People & Planet"
              value={content.headline || ''}
              onChange={(e) => updateSection('content', 'headline', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CSR Statement & Accountability Description" fullWidth>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Enter detailed CSR statement..."
              value={content.description || ''}
              onChange={(e) => updateSection('content', 'description', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. COMMUNITY INITIATIVES */}
      <AdminFormSection
        title="3. Community Initiatives & Outreach Programs"
        subtitle="Cards with title, description, and event photo."
        badge={`${initiatives.length} Initiatives`}
        action={
          <button type="button" onClick={handleAddInitiative} className="btn btn-secondary btn-sm">
            <Plus size={14} />
            <span>Add Initiative</span>
          </button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {initiatives.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#94A3B8', fontSize: '13px' }}>
              No initiatives added yet. Click "Add Initiative" above.
            </div>
          ) : (
            initiatives.map((init, idx) => (
              <div
                key={init.id || idx}
                style={{
                  padding: '16px',
                  background: '#F8FAFC',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#006B8F', textTransform: 'uppercase' }}>
                    INITIATIVE #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteInitiative(idx)}
                    className="btn btn-ghost btn-icon-sm"
                    style={{ color: '#EF4444' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <AdminFormGrid columns={2} gap="12px">
                  <AdminFormField label="Initiative Title">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Donations to students as part of our CSR"
                      value={init.title || ''}
                      onChange={(e) => handleUpdateInitiative(idx, 'title', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Initiative Image URL" optional>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://..."
                      value={init.img || init.image || ''}
                      onChange={(e) => handleUpdateInitiative(idx, 'img', e.target.value)}
                    />
                  </AdminFormField>

                  <AdminFormField label="Description Narrative" fullWidth>
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Describe the initiative and community impact..."
                      value={init.desc || init.description || ''}
                      onChange={(e) => handleUpdateInitiative(idx, 'desc', e.target.value)}
                    />
                  </AdminFormField>
                </AdminFormGrid>
              </div>
            ))
          )}
        </div>
      </AdminFormSection>

      {/* 4. IMPACT STATS & GALLERY */}
      <AdminFormSection
        title="4. Impact Statistics & Activity Photos"
        subtitle="Quantifiable social impact numbers and activity gallery."
        badge="Impact & Photos"
        collapsible
      >
        <AdminFormField label="Impact Numbers" fullWidth>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            {stats.map((st, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: '130px' }}
                  placeholder="Value (e.g. 3,500+)"
                  value={st.value || ''}
                  onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ flex: 1 }}
                  placeholder="Label (e.g. Students Supported)"
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
              <span>Add Impact Number</span>
            </button>
          </div>
        </AdminFormField>

        <AdminFormField label="CSR Activity Photos" fullWidth helperText="Photo URLs showing community drives.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {gallery.map((imgUrl, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  className="form-control"
                  value={imgUrl}
                  onChange={(e) => handleUpdateGalleryImage(idx, e.target.value)}
                  placeholder="https://..."
                />
                <button
                  type="button"
                  onClick={() => handleDeleteGalleryImage(idx)}
                  className="btn btn-ghost btn-icon-sm"
                  style={{ color: '#EF4444' }}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddGalleryImage}
              className="btn btn-secondary btn-sm"
              style={{ alignSelf: 'flex-start' }}
            >
              <Plus size={13} />
              <span>Add Photo</span>
            </button>
          </div>
        </AdminFormField>
      </AdminFormSection>

      {/* 6. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default CsrForm;
