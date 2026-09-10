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
 * ClutchReviewsForm
 * 
 * Page-Specific CMS Form for "Client Testimonials / Clutch Reviews"
 */
export const ClutchReviewsForm = ({
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
        title={subPageMeta?.title || 'Client Reviews & Ratings'}
        slug={subPageMeta?.slug || 'clutch-reviews'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/client-testimonials'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Verified client reviews headline, badge, and rating overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. 5.0 STAR RATED"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Verified Client Reviews & Ratings"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter client reviews overview narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. CLUTCH REVIEWS CRUD */}
      <AdminFormSection
        title="2. Verified Client Reviews Directory Collection"
        subtitle="Manage client review quotes, reviewer name, company, rating, and sub-scores."
        badge="Clutch Reviews CRUD"
      >
        <CompanyCrudManager
          pageTitle="Client Reviews"
          pageSubtitle="Manage verified client reviews, ratings, scores, and reviewer avatars."
          collectionType="clutchReviews"
          publicRoute="/company/client-testimonials"
          itemTitle="Client Review"
        />
      </AdminFormSection>

      {/* 3. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default ClutchReviewsForm;
