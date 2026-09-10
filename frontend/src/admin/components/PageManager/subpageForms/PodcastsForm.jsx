import React from 'react';
import CompanyCrudManager from '../../CompanyAdmin/CompanyCrudManager';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * PodcastsForm
 * 
 * Page-Specific CMS Form for "Podcasts"
 */
export const PodcastsForm = ({
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
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Podcasts'}
        slug={subPageMeta?.slug || 'podcast'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/podcast'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Podcast show headline, badge, and host overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. AUDIO EPISODES"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. The Firevy Tech Leadership Podcast"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter podcast introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. PODCAST EPISODES COLLECTION CRUD */}
      <AdminFormSection
        title="2. Podcast Episodes Directory Collection"
        subtitle="Manage audio episodes, guests, cover artwork, durations, and show notes."
        badge="Podcast CRUD"
      >
        <CompanyCrudManager
          pageTitle="Podcast Episodes"
          pageSubtitle="Manage podcast episodes, audio URLs, hosts, and show notes."
          collectionType="podcasts"
          publicRoute="/company/podcast"
          itemTitle="Podcast Episode"
        />
      </AdminFormSection>

      {/* 3. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default PodcastsForm;
