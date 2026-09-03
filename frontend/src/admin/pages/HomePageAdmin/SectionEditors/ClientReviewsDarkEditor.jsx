import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const ClientReviewsDarkEditor = ({ data, onChange }) => {
  const reviews = data?.reviews || [];

  const handleReviewsChange = (newReviews) => {
    onChange({
      ...data,
      reviews: newReviews
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
      name: 'author',
      label: 'Client / Reviewer Name',
      type: 'text',
      placeholder: 'e.g. Derrick Surratt, Hamidah Nalwoga',
      required: true
    },
    {
      name: 'role',
      label: 'Job Title / Role',
      type: 'text',
      placeholder: 'e.g. Founder & CEO, Operations Director'
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      placeholder: 'e.g. Solace Health, FleetIQ'
    },
    {
      name: 'location',
      label: 'Location (City, State / Country)',
      type: 'text',
      placeholder: 'e.g. Arkansas, Austin, Texas, London UK'
    },
    {
      name: 'title',
      label: 'Review Headline',
      type: 'text',
      placeholder: "e.g. firevy.co's team communicated effectively...",
      required: true
    },
    {
      name: 'score',
      label: 'Overall Score (e.g. 5.0, 4.9)',
      type: 'text',
      placeholder: '5.0',
      defaultValue: '5.0'
    },
    {
      name: 'verified',
      label: 'Clutch Verified Review',
      type: 'checkbox',
      checkboxLabel: 'Mark as Verified Clutch Review'
    },
    {
      name: 'avatar',
      label: 'Reviewer Portrait / Avatar Image',
      type: 'image',
      helperText: 'Upload client photo or company avatar.'
    },
    {
      name: 'comment',
      label: 'Full Review Comment & Testimonial',
      type: 'textarea',
      placeholder: 'Detailed testimonial text and client feedback...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          What Our Clients Say (Clutch Verified Reviews)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Sapphire dark review carousel with verified Clutch rating score and reviewer details.
        </p>
      </div>

      <AdminFormSection title="Section Header & Rating Summary">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'What Our Clients Say'}
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

          <AdminFormField label="Clutch Overall Score">
            <input
              type="text"
              className="form-control"
              value={data?.clutchScore || '4.9'}
              onChange={(e) => handleFieldChange('clutchScore', e.target.value)}
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

          <AdminFormField label="Clutch Review Count Label">
            <input
              type="text"
              className="form-control"
              value={data?.clutchReviewCount || '32 REVIEWS'}
              onChange={(e) => handleFieldChange('clutchReviewCount', e.target.value)}
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

      <AdminFormSection title="Verified Client Reviews">
        <ItemListEditor
          items={reviews}
          onChange={handleReviewsChange}
          itemTitle="Client Review"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '1px solid #E2E8F0'
                  }}
                />
              )}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>
                  {item.author} <span style={{ fontSize: '11px', color: '#D97706', fontWeight: 700 }}>★ {item.score || '5.0'}</span>
                </div>
                <div style={{ fontSize: '11px', color: '#64748B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  "{item.title}" {item.company ? `— ${item.company}` : item.location ? `— ${item.location}` : ''}
                </div>
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default ClientReviewsDarkEditor;
