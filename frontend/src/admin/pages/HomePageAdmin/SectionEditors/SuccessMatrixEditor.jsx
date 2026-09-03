import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const SuccessMatrixEditor = ({ data, onChange }) => {
  const items = data?.items || [];

  const handleItemsChange = (newItems) => {
    onChange({
      ...data,
      items: newItems
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
      label: 'Matrix Benefit / Title',
      type: 'text',
      placeholder: 'e.g. SEO and Digital Marketing, Free Post Launch Support',
      required: true
    },
    {
      name: 'stat',
      label: 'Metric / Highlight Tag',
      type: 'text',
      placeholder: 'e.g. 4 Months+, 100% Guaranteed, 24/7'
    },
    {
      name: 'icon',
      label: 'Icon Identifier / Keyword',
      type: 'text',
      placeholder: 'seo, support, lock, money, git, payment, chart, amc, qa, shield, analytics, video'
    },
    {
      name: 'image',
      label: 'Custom Icon Graphic',
      type: 'image',
      helperText: 'Upload icon vector or custom benefit illustration.'
    },
    {
      name: 'desc',
      label: 'Benefit Detailed Explanation',
      type: 'textarea',
      placeholder: 'Explain the business assurance and service commitment...',
      rows: 2,
      fullWidth: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Success Matrix Section (12 Benefit Cards)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          6x2 grid of key value propositions, quality guarantees, and business differentiators.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Success Matrix'}
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

      <AdminFormSection title="Success Matrix Items">
        <ItemListEditor
          items={items}
          onChange={handleItemsChange}
          itemTitle="Matrix Card"
          fields={fields}
          renderItemSummary={(item) => (
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                {item.title} {item.stat && <span style={{ fontSize: '11px', color: '#006B8F' }}>({item.stat})</span>}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>
                {item.desc || `Icon: ${item.icon || 'default'}`}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default SuccessMatrixEditor;
