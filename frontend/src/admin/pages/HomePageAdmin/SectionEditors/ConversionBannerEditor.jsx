import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const ConversionBannerEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Light Conversion Banner Configuration"
        subtitle="Manage the clean white/cyan collaboration section headline and get in touch trigger button."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.badge || 'COLLABORATE WITH EXPERTS'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Banner Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || "Let's Start Something Big Together"}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Banner Description" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Action Button Label">
            <input
              type="text"
              className="form-control"
              value={data.buttonText || 'Get In Touch'}
              onChange={(e) => updateField('buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Action Button Link">
            <input
              type="text"
              className="form-control"
              value={data.buttonLink || '/contact'}
              onChange={(e) => updateField('buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default ConversionBannerEditor;
