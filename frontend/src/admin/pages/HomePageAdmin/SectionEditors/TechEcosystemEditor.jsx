import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const TechEcosystemEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Technology Ecosystem Section Headings"
        subtitle="Manage the tech stack ecosystem section title, badge, and descriptive subtitle."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'OUR TECHNOLOGY ECOSYSTEM'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Battle-Tested Tech Stack & Modern Frameworks'}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Subtitle Description" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default TechEcosystemEditor;
