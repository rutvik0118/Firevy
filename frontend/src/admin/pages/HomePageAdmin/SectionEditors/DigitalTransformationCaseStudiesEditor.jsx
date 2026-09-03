import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const DigitalTransformationCaseStudiesEditor = ({ data, onChange }) => {
  const caseStudies = data?.caseStudies || [];

  const handleCaseStudiesChange = (newCS) => {
    onChange({
      ...data,
      caseStudies: newCS
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
      name: 'company',
      label: 'Company / Client Name',
      type: 'text',
      placeholder: 'e.g. Bee Car Care, Morris Garages, Adani EmCare, L\'OREAL',
      required: true
    },
    {
      name: 'title',
      label: 'Case Study Project Title',
      type: 'text',
      placeholder: 'e.g. Intelligent Vehicle Telemetry & Fleet Management'
    },
    {
      name: 'slug',
      label: 'Case Study URL Slug',
      type: 'text',
      placeholder: 'e.g. bee-car-care, adani-emcare',
      required: true
    },
    {
      name: 'category',
      label: 'Industry / Domain Tag',
      type: 'text',
      placeholder: 'e.g. Automotive & IoT, Healthcare & AI'
    },
    {
      name: 'bgColor',
      label: 'Card Tint Color Hex',
      type: 'text',
      placeholder: 'e.g. #FFFBE8, #FDE8E8, #EAF4FD, #F8F8F8'
    },
    {
      name: 'results',
      label: 'Key Results & Metric Highlights',
      type: 'text',
      placeholder: 'e.g. +65% Driver Safety • 99.9% Uptime'
    },
    {
      name: 'mockup',
      label: 'App Mockup / Screenshot Image',
      type: 'image',
      helperText: 'Upload high-resolution screenshot or mockup device graphic.',
      required: true
    },
    {
      name: 'desc',
      label: 'Case Study Summary & Solution Delivered',
      type: 'textarea',
      placeholder: 'Problem statement and digital solution delivered...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Digital Transformation & Case Studies (Peek Slider)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Heroic ~80% width case study cards with brand logo, key metric bullet points, and app mockup visuals.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Driving Digital Transformation'}
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
              value={data?.description || 'Learn how we are empowering leading companies to achieve their transformation goals with our industry expertise and deep tech.'}
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

      <AdminFormSection title="Featured Enterprise Case Studies">
        <ItemListEditor
          items={caseStudies}
          onChange={handleCaseStudiesChange}
          itemTitle="Case Study"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.mockup && (
                <img
                  src={item.mockup}
                  alt={item.company}
                  style={{
                    width: '36px',
                    height: '24px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    border: '1px solid #E2E8F0'
                  }}
                />
              )}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                  {item.company} {item.title && <span style={{ fontWeight: 400, color: '#64748B' }}>— {item.title}</span>}
                </div>
                <div style={{ fontSize: '11px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.desc || item.description}
                </div>
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default DigitalTransformationCaseStudiesEditor;
