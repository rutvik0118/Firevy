import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const EngagementModelsEditor = ({ data, onChange }) => {
  const models = data?.models || [];

  const handleModelsChange = (newModels) => {
    onChange({
      ...data,
      models: newModels
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
      name: 'title',
      label: 'Model Title',
      type: 'text',
      placeholder: 'e.g. Fixed Price, Dedicated Hiring, Time Material, Buckets Approach',
      required: true
    },
    {
      name: 'tag',
      label: 'Badge / Highlight Tag',
      type: 'text',
      placeholder: 'e.g. Most Flexible, Dedicated Pod'
    },
    {
      name: 'idealFor',
      label: 'Best Suited For',
      type: 'text',
      placeholder: 'e.g. Startups with well-defined MVP scopes'
    },
    {
      name: 'icon',
      label: 'Icon Identifier / Keyword',
      type: 'text',
      placeholder: 'tag, users, clock, layers'
    },
    {
      name: 'buttonText',
      label: 'Card Action Button Text',
      type: 'text',
      placeholder: 'Choose Model'
    },
    {
      name: 'buttonLink',
      label: 'Card Action Button Link',
      type: 'text',
      placeholder: '/contact'
    },
    {
      name: 'isPopular',
      label: 'Highlight as Featured / Popular',
      type: 'checkbox',
      checkboxLabel: 'Highlight this model with popular badge and accent border'
    },
    {
      name: 'image',
      label: 'Custom Model Graphic / Icon',
      type: 'image',
      helperText: 'Upload model illustration graphic or vector icon.'
    },
    {
      name: 'description',
      label: 'Model Description & Deliverables',
      type: 'textarea',
      placeholder: 'Explain the delivery mechanics, sprint billing, and resource commitments...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Engagement Models Section
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          4 flexible hiring and partnership frameworks tailored for client budgets and team scales.
        </p>
      </div>

      <AdminFormSection title="Section Header & CTA Link">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Engagement Models'}
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
              value={data?.description || 'At firevy.co, we provide full-cycle custom software development services to meet your financial requirements.'}
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

          <AdminFormField label="CTA Button Text">
            <input
              type="text"
              className="form-control"
              value={data?.buttonText || 'Get In Touch'}
              onChange={(e) => handleFieldChange('buttonText', e.target.value)}
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

          <AdminFormField label="CTA Button Link">
            <input
              type="text"
              className="form-control"
              value={data?.buttonLink || '/contact'}
              onChange={(e) => handleFieldChange('buttonLink', e.target.value)}
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
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection title="Engagement Model Cards">
        <ItemListEditor
          items={models}
          onChange={handleModelsChange}
          itemTitle="Engagement Model"
          fields={fields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.title} {item.tag && <span style={{ fontSize: '10px', color: '#006B8F', fontWeight: 600 }}>({item.tag})</span>}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.description || item.desc}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default EngagementModelsEditor;
