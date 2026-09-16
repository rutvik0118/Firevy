import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const FeaturedInLogosEditor = ({ data, onChange }) => {
  const logos = data?.logos || [];

  const handleLogosChange = (newLogos) => {
    onChange({
      ...data,
      logos: newLogos
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
      label: 'Publication / Platform Name',
      type: 'text',
      placeholder: 'e.g. Forbes, TechCrunch, The New York Times, Entrepreneur',
      required: true
    },
    {
      name: 'category',
      label: 'Media Category Tag',
      type: 'text',
      placeholder: 'e.g. Global Tech Press, Industry Journal'
    },
    {
      name: 'url',
      label: 'Feature / Press Release URL',
      type: 'text',
      placeholder: 'https://forbes.com/...'
    },
    {
      name: 'image',
      label: 'Publication Logo Image',
      type: 'image',
      helperText: 'Upload publication or platform logo image.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          We Have Been Featured In (Media Logo Wall)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Grid of media publications, tech portals, and industry recognitions.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Featured In'}
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
              value={data?.description || 'Recognized across top technology publications and news outlets worldwide.'}
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

      <AdminFormSection title="Featured Publication Badges">
        <ItemListEditor
          items={logos}
          onChange={handleLogosChange}
          itemTitle="Media Logo"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.name || 'Media Logo'}
              </div>
              {item.source && (
                <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35 }}>
                  {item.source}
                </div>
              )}
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default FeaturedInLogosEditor;
