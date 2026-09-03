import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const PortfolioShowcaseEditor = ({ data, onChange }) => {
  const projects = data?.projects || [];

  const handleProjectsChange = (newProjects) => {
    onChange({
      ...data,
      projects: newProjects
    });
  };

  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const projectFields = [
    {
      name: 'titleLine1',
      label: 'Title Line 1',
      type: 'text',
      placeholder: 'e.g. AI Chatbot App',
      required: true
    },
    {
      name: 'titleLine2',
      label: 'Title Line 2',
      type: 'text',
      placeholder: 'e.g. Development'
    },
    {
      name: 'slug',
      label: 'Case Study URL Slug',
      type: 'text',
      placeholder: 'ai-chatbot-app-development',
      required: true
    },
    {
      name: 'client',
      label: 'Client / Company Name',
      type: 'text',
      placeholder: 'e.g. Global Retail Corp'
    },
    {
      name: 'category',
      label: 'Category (AI, Mobile, Web, Cloud)',
      type: 'text',
      placeholder: 'AI & Mobile'
    },
    {
      name: 'cardBg',
      label: 'Card Background Style / Hex',
      type: 'text',
      placeholder: 'e.g. #351475, #0D2B45, #1E293B'
    },
    {
      name: 'metrics',
      label: 'Key Metric / Result Tag',
      type: 'text',
      placeholder: 'e.g. +45% Operational Speed'
    },
    {
      name: 'image',
      label: 'Project Mockup / Screenshot Image',
      type: 'image',
      helperText: 'Upload high-resolution screenshot or mockup device graphic.'
    },
    {
      name: 'desc',
      label: 'Project Summary / Highlights',
      type: 'textarea',
      placeholder: 'Brief summary of delivered engineering and business impact...',
      rows: 3,
      fullWidth: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Recent Projects (Portfolio Showcase)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Showcase top case studies with interactive mockup preview cards and direct case study links.
        </p>
      </div>

      <AdminFormSection title="Section Header & CTA Link">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Recent Projects'}
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
              value={data?.description || 'Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard'}
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

          <AdminFormField label="View All Button Text">
            <input
              type="text"
              className="form-control"
              value={data?.viewAllText || 'View All'}
              onChange={(e) => handleFieldChange('viewAllText', e.target.value)}
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

          <AdminFormField label="View All Button Link">
            <input
              type="text"
              className="form-control"
              value={data?.viewAllLink || '/portfolio'}
              onChange={(e) => handleFieldChange('viewAllLink', e.target.value)}
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

      <AdminFormSection title="Featured Project Cards">
        <ItemListEditor
          items={projects}
          onChange={handleProjectsChange}
          itemTitle="Project Card"
          fields={projectFields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.titleLine1 || item.title} {item.titleLine2 || ''}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                {item.slug ? `/portfolio/${item.slug}` : 'No slug configured'}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default PortfolioShowcaseEditor;
