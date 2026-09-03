import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const TechShowcaseEditor = ({ data, onChange }) => {
  const categories = data?.categories || [];

  const handleCategoriesChange = (newCats) => {
    onChange({
      ...data,
      categories: newCats
    });
  };

  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const categoryFields = [
    {
      name: 'tabName',
      label: 'Tab Display Label',
      type: 'text',
      placeholder: 'e.g. Cloud & Devops, Frontend, Backend, Mobile, Database',
      required: true
    },
    {
      name: 'title',
      label: 'Category Heading',
      type: 'text',
      placeholder: 'e.g. Cloud & DevOps Engineering',
      required: true
    },
    {
      name: 'tools',
      label: 'Technologies & Frameworks (comma separated)',
      type: 'text',
      placeholder: 'e.g. AWS, Docker, Kubernetes, Terraform, GitHub Actions',
      fullWidth: true
    },
    {
      name: 'image',
      label: 'Category Stack Illustration / Cover',
      type: 'image',
      helperText: 'Upload illustration graphic or tech stack diagram.'
    },
    {
      name: 'description',
      label: 'Category Overview & Philosophy',
      type: 'textarea',
      placeholder: 'Detailed summary of this technology domain...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Technologies We Work With (Tabbed Showcase)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Horizontal tabbed layout showing technology stacks with description and interactive tools.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Technologies We Work With'}
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
              value={data?.description || 'We work on wide range of tools and technologies to cater client business requirement for existing project or new application.'}
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

      <AdminFormSection title="Technology Category Tabs">
        <ItemListEditor
          items={categories}
          onChange={handleCategoriesChange}
          itemTitle="Tech Tab"
          fields={categoryFields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.tabName || item.title}
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

export default TechShowcaseEditor;
