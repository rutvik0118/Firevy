import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const WorkProcessGridEditor = ({ data, onChange }) => {
  const steps = data?.steps || [];

  const handleStepsChange = (newSteps) => {
    onChange({
      ...data,
      steps: newSteps
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
      name: 'step',
      label: 'Step Number',
      type: 'text',
      placeholder: 'e.g. 01, 02, 03',
      required: true
    },
    {
      name: 'titleLine1',
      label: 'Title Line 1',
      type: 'text',
      placeholder: 'e.g. Requirement, Prototype Demo, Deployment',
      required: true
    },
    {
      name: 'titleLine2',
      label: 'Title Line 2 (Optional)',
      type: 'text',
      placeholder: 'e.g. Gathering, Mockups, Testing'
    },
    {
      name: 'duration',
      label: 'Estimated Phase Duration',
      type: 'text',
      placeholder: 'e.g. Week 1 - 2'
    },
    {
      name: 'deliverables',
      label: 'Key Deliverables Tag',
      type: 'text',
      placeholder: 'e.g. SRS & System Architecture Blueprint'
    },
    {
      name: 'bg',
      label: 'Card Tint Color / Style',
      type: 'text',
      placeholder: 'e.g. #EEECFE, #EAF4FD, #FDF4E7'
    },
    {
      name: 'image',
      label: 'Step Icon / Illustration Graphic',
      type: 'image',
      helperText: 'Upload step illustration or vector icon.'
    },
    {
      name: 'desc',
      label: 'Step Phase Description',
      type: 'textarea',
      placeholder: 'Focus would be on documentation first for clarity...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Work Process (8-Step Milestone Grid)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          8-step structured engineering lifecycle from Requirement Gathering to SEO and Post-Launch Support.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Work Process'}
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
              value={data?.description || 'A systematic, milestone-driven development process engineered to maximize delivery speed, quality, and business value.'}
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

      <AdminFormSection title="Process Step Cards">
        <ItemListEditor
          items={steps}
          onChange={handleStepsChange}
          itemTitle="Process Step"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.titleLine1 || item.title} {item.titleLine2 || ''}
              </div>
              {(item.desc || item.description) && (
                <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.desc || item.description}
                </div>
              )}
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default WorkProcessGridEditor;
