import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const TrustRecognitionBannerEditor = ({ data, onChange }) => {
  const badges = data?.badges || [];

  const handleBadgesChange = (newBadges) => {
    onChange({
      ...data,
      badges: newBadges
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
      label: 'Badge Title / Organization',
      type: 'text',
      placeholder: 'e.g. Clutch - We Deliver On, Upwork Top Rated',
      required: true
    },
    {
      name: 'sub',
      label: 'Rating / Sub-label',
      type: 'text',
      placeholder: 'e.g. Verified 5.0 Rating, Top 1% Engineering',
      required: true
    },
    {
      name: 'reviews',
      label: 'Review Count / Meta Text',
      type: 'text',
      placeholder: 'e.g. 50+ Verified Reviews'
    },
    {
      name: 'link',
      label: 'External Profile Link',
      type: 'text',
      placeholder: 'https://clutch.co/profile/firevy'
    },
    {
      name: 'image',
      label: 'Badge Logo Image / Icon',
      type: 'image',
      helperText: 'Upload high-resolution badge logo or icon.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Trust & Recognition Banner
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Display verified Clutch, Upwork, and enterprise engineering badges.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Banner Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Recognized as a Market Leader in Digital Transformation'}
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
              value={data?.description || 'Recognized globally for delivering top tier software engineering and digital transformation.'}
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

      <AdminFormSection title="Recognition Badges">
        <ItemListEditor
          items={badges}
          onChange={handleBadgesChange}
          itemTitle="Trust Badge"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.title}
              </div>
              {(item.sub || item.description) && (
                <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  {item.sub || item.description}
                </div>
              )}
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default TrustRecognitionBannerEditor;
