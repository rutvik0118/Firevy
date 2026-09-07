import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const AboutKeyMetricsEditor = ({ data, onChange }) => {
  const cards = data?.cards || [];

  const handleCardsChange = (newCards) => {
    onChange({
      ...data,
      cards: newCards
    });
  };

  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const cardFields = [
    {
      name: 'metric',
      label: 'Metric Value (e.g. 23+, 2800+, 95%)',
      type: 'text',
      placeholder: '23+'
    },
    {
      name: 'label',
      label: 'Label / Description',
      type: 'text',
      placeholder: 'e.g. Years Experience, Work at your time zone',
      required: true
    },
    {
      name: 'type',
      label: 'Card Type',
      type: 'select',
      options: [
        { value: 'stat', label: 'Statistic Counter (e.g. 23+)' },
        { value: 'feature', label: 'Feature Highlight (e.g. Hire in 48 Hours)' }
      ]
    },
    {
      name: 'icon',
      label: 'Feature Icon Key',
      type: 'text',
      placeholder: 'e.g. globe, chat, badge, handshake'
    },
    {
      name: 'image',
      label: 'Custom Icon Graphic',
      type: 'image',
      helperText: 'Upload optional custom icon or graphic.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          About Us & Key Metrics (12 Milestone & Feature Cards)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Manage section headline, company description paragraph, background texture, and key metrics.
        </p>
      </div>

      {/* 1. Section Header & Background */}
      <AdminFormSection title="Section Header & Background">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Glance through our creations and presence'}
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
              value={data?.description || "We are a team of qualified Salesforce & Enterprise Development Professionals adept at expanding your current system's capabilities via the development and integration of Salesforce CRM and cloud architectures."}
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

          <AdminFormField label="Background Texture Asset" fullWidth>
            <MediaUploadInput
              label="Background Texture / Graphic"
              type="image"
              value={data?.backgroundImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'}
              onChange={(val) => handleFieldChange('backgroundImage', val)}
              helperText="High-resolution background image for metrics banner"
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. Metric Cards */}
      <AdminFormSection title="Metric Statistics & Feature Cards (12 Milestone & Feature Cards)">
        <ItemListEditor
          items={cards}
          onChange={handleCardsChange}
          itemTitle="Metric Card"
          fields={cardFields}
          renderItemSummary={(item) => {
            const isStat = item.type === 'stat' || (item.metric && !item.icon);
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                {isStat ? (
                  <>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#006B8F', lineHeight: 1.2 }}>
                      {item.metric || '0+'}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#334155', lineHeight: 1.35, wordBreak: 'break-word' }}>
                      {item.label || item.title || 'Metric Description'}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', lineHeight: 1.3, wordBreak: 'break-word' }}>
                      {item.label || item.title || 'Feature Highlight'}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.3 }}>
                      {item.description || (item.icon ? `Feature Highlight (${item.icon})` : 'Feature Highlight')}
                    </div>
                  </>
                )}
              </div>
            );
          }}
        />
      </AdminFormSection>
    </div>
  );
};

export default AboutKeyMetricsEditor;
