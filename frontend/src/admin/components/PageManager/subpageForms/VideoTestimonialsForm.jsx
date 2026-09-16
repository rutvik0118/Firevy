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
 * VideoTestimonialsForm
 * 
 * Page-Specific CMS Form for "Video Testimonials"
 */
export const VideoTestimonialsForm = ({
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
        title={subPageMeta?.title || 'Video Testimonials'}
        slug={subPageMeta?.slug || 'video-testimonials'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/video-testimonials'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Client video testimonials headline, badge, and hero overview."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. CLIENT STORIES"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Client Video Testimonials & Success Stories"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter video testimonials narrative..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. VIDEO TESTIMONIALS COLLECTION CRUD */}
      <AdminFormSection
        title="2. Video Testimonials Directory Collection"
        subtitle="Manage client video reviews, client names, designations, video URLs, and quotes."
        badge="Video Reviews CRUD"
      >
        <CompanyCrudManager
          pageTitle="Video Testimonials"
          pageSubtitle="Manage client video reviews, companies, video URLs, and testimonial quotes."
          collectionType="videoTestimonials"
          publicRoute="/company/video-testimonials"
          itemTitle="Video Testimonial"
        />
      </AdminFormSection>

      {/* 3. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default VideoTestimonialsForm;
