import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const CTASectionEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Primary Call To Action (CTA) Banner Content"
        subtitle="Manage the primary high-converting gradient callout banner headline and action buttons."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.badge || 'TRANSFORM YOUR VISION INTO SOFTWARE'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Banner Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || "Have an Idea? Let's Build It Together."}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Banner Subtitle & Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Text">
            <input
              type="text"
              className="form-control"
              value={data.primaryButtonText || 'Start a Project'}
              onChange={(e) => updateField('primaryButtonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Link">
            <input
              type="text"
              className="form-control"
              value={data.primaryButtonLink || '/contact'}
              onChange={(e) => updateField('primaryButtonLink', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Secondary Button Text">
            <input
              type="text"
              className="form-control"
              value={data.secondaryButtonText || 'Book a Consultation'}
              onChange={(e) => updateField('secondaryButtonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Secondary Button Link">
            <input
              type="text"
              className="form-control"
              value={data.secondaryButtonLink || '/contact'}
              onChange={(e) => updateField('secondaryButtonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default CTASectionEditor;
