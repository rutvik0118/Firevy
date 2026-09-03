import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const PremiumServicesEditor = ({ data, onChange }) => {
  const services = data?.services || [];

  const handleServicesChange = (newServices) => {
    onChange({
      ...data,
      services: newServices
    });
  };

  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const fields = [
    {
      name: 'name',
      label: 'Service Name',
      type: 'text',
      placeholder: 'e.g. Mobile App Development, .NET Development, Cloud Engineering',
      required: true
    },
    {
      name: 'link',
      label: 'Redirect Target Link',
      type: 'text',
      placeholder: '/services/mobile-app-development',
      required: true
    },
    {
      name: 'tag',
      label: 'Badge / Highlight Tag (Optional)',
      type: 'text',
      placeholder: 'e.g. Enterprise, High Demand'
    },
    {
      name: 'icon',
      label: 'Icon Identifier / Keyword',
      type: 'text',
      placeholder: 'smartphone, server, cloud, code'
    },
    {
      name: 'image',
      label: 'Service Icon / Illustration Graphic',
      type: 'image',
      helperText: 'Upload icon vector or custom badge graphic.'
    },
    {
      name: 'desc',
      label: 'Brief Overview Description',
      type: 'textarea',
      placeholder: 'Summary of the premium service capability...',
      rows: 2,
      fullWidth: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Premium Services (Pill Grid)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          10 specialized service buttons displayed in a 5x2 solid card grid.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Premium Services'}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              style={{
                width: '100%',
                padding: '7px 10px',
                borderRadius: '5px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Description Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'As a certified IT company, firevy.co helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.'}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              style={{
                width: '100%',
                padding: '7px 10px',
                borderRadius: '5px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                fontFamily: 'inherit'
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection title="Premium Services List">
        <ItemListEditor
          items={services}
          onChange={handleServicesChange}
          itemTitle="Premium Service"
          fields={fields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.name}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                {item.link || '/services'}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default PremiumServicesEditor;
