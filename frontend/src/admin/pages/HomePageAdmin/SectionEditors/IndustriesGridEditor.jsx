import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const IndustriesGridEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Industries We Transform Headings"
        subtitle="Manage the domain vertical showcase section badge, main title, and description."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'INDUSTRIES WE TRANSFORM'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Tailored Solutions for Diverse Domain Verticals'}
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

export default IndustriesGridEditor;
