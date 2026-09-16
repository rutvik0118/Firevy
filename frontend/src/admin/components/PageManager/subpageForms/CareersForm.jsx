import React from 'react';
import CareersAdminPage from '../../../pages/CareersAdminPage';
import {
  AdminFormSection,
  AdminFormGrid,
  AdminFormField,
  AdminPageInfoSection,
  AdminSeoSection
} from '../../UI/AdminEditLayout';

/**
 * CareersForm
 * 
 * Page-Specific CMS Form for "Careers & Job Openings"
 */
export const CareersForm = ({
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
        title={subPageMeta?.title || 'Careers & Open Positions'}
        slug={subPageMeta?.slug || 'careers'}
        status={formData.status || 'published'}
        onChangeStatus={(st) => updateRootField('status', st)}
        publicRoute={subPageMeta?.publicRoute || '/company/careers'}
      />

      {/* 1. HERO BANNER */}
      <AdminFormSection
        title="1. Hero Section & Introduction"
        subtitle="Careers portal headline, badge, and recruitment introduction."
        badge="Hero Banner"
      >
        <AdminFormGrid columns={2}>
          <AdminFormField label="Badge / Category Tag" optional>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. WORK WITH US"
              value={hero.badge || ''}
              onChange={(e) => updateSection('hero', 'badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Hero Heading" required>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Join Our Engineering Team & Build the Future"
              value={hero.title || ''}
              onChange={(e) => updateSection('hero', 'title', e.target.value)}
              required
            />
          </AdminFormField>

          <AdminFormField label="Hero Subtitle & Introduction" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              placeholder="Enter careers portal overview..."
              value={hero.subtitle || ''}
              onChange={(e) => updateSection('hero', 'subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. OPEN CAREER POSITIONS CRUD */}
      <AdminFormSection
        title="2. Open Positions & Job Postings Directory"
        subtitle="Create, edit, manage, and toggle active job openings across engineering, product design, and QA."
        badge="Jobs CRUD"
      >
        <CareersAdminPage />
      </AdminFormSection>

      {/* 3. SEO & METADATA */}
      <AdminSeoSection data={seo} onChange={(updated) => updateRootField('seo', updated)} />
    </div>
  );
};

export default CareersForm;
