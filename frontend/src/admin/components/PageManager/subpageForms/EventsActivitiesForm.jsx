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
 * EventsActivitiesForm
 * 
 * Page-Specific CMS Form for "Events & Activities"
 */
export const EventsActivitiesForm = ({
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
  const cta = formData.cta || {};
  const seo = formData.seo || {};

  return (
    <div className="cms-form-stack">
      {/* PAGE INFORMATION */}
      <AdminPageInfoSection
        number={pageNumber}
        title={subPageMeta?.title || 'Events & Activities'}
        slug={subPageMeta?.slug || 'events-activities'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/events-activities'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Events & culture headline, banner title, and narrative introduction."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. COMPANY CULTURE"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Events, Hackathons & Team Activities"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter events and culture narrative introduction..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. EVENTS & ACTIVITIES GALLERY CRUD */}
      <AdminFormSection
        title="2. Events & Activities Gallery Collection"
        subtitle="Manage cultural festivals, hackathons, annual retreats, and tech summits."
        badge="Events Collection"
      >
        <CompanyCrudManager
          pageTitle="Events & Activities"
          pageSubtitle="Manage events, dates, locations, cover photos, and gallery images."
          collectionType="events"
          publicRoute="/company/events-activities"
          itemTitle="Event"
        />
      </AdminFormSection>

      {/* 3. CULTURE CTA */}
      <AdminFormSection
        title="3. Experience Our Culture CTA Banner"
        subtitle="Callout inviting talent and visitors to connect with our vibrant community."
        badge="CTA Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="CTA Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={cta.title || 'Want to Experience Our Vibrant Workplace?'}
              onChange={(e) => updateSection('cta', 'title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="CTA Subtitle" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={cta.subtitle || 'Discover how we foster innovation, teamwork, and personal growth.'}
              onChange={(e) => updateSection('cta', 'subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Label">
            <input
              type="text"
              className="form-control"
              value={cta.buttonText || 'Join Our Team'}
              onChange={(e) => updateSection('cta', 'buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Button Link">
            <input
              type="text"
              className="form-control"
              value={cta.buttonLink || '/company/careers'}
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

export default EventsActivitiesForm;
