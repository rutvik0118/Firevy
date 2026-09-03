import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const ServicesSectionEditor = ({ data, onChange }) => {
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
      name: 'titleLine1',
      label: 'Title Line 1',
      type: 'text',
      placeholder: 'e.g. Web, Mobile App, UI/UX',
      required: true
    },
    {
      name: 'titleLine2',
      label: 'Title Line 2',
      type: 'text',
      placeholder: 'e.g. Development, Design, Engineering',
      required: true
    },
    {
      name: 'slug',
      label: 'Service URL Slug',
      type: 'text',
      placeholder: 'web-development',
      required: true
    },
    {
      name: 'icon',
      label: 'Icon Key / Keyword',
      type: 'text',
      placeholder: 'e.g. web, mobile, design, product, testing, users, api, cloud'
    },
    {
      name: 'ctaText',
      label: 'CTA Button Text',
      type: 'text',
      placeholder: 'Explore Service'
    },
    {
      name: 'ctaLink',
      label: 'CTA Button Link',
      type: 'text',
      placeholder: '/services/web-development'
    },
    {
      name: 'image',
      label: 'Service Featured Image / Icon Graphic',
      type: 'image',
      helperText: 'Upload high-resolution service illustration or cover image.'
    },
    {
      name: 'description',
      label: 'Service Capability Description',
      type: 'textarea',
      placeholder: 'Describe the core capabilities, deliverables, and architecture...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Services Grid (Interactive Vertical Cards)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Core software engineering offerings presented in interactive cards with detailed links.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Services'}
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

          <AdminFormField label="Section Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'We offer comprehensive services to develop digital solutions & manage complete product lifecycle.'}
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

      <AdminFormSection title="Service Offerings Cards">
        <ItemListEditor
          items={services}
          onChange={handleServicesChange}
          itemTitle="Service Card"
          fields={fields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.titleLine1 || item.title} {item.titleLine2 || ''}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.description || item.desc}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default ServicesSectionEditor;
