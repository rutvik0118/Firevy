import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const SubscribeNewsletterEditor = ({ data, onChange }) => {
  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ paddingBottom: '14px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Subscribe Us / Newsletter Lead Capture Banner
        </h4>
        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Manage the standalone newsletter subscription banner headline, button text, and field placeholders.
        </p>
      </div>

      <AdminFormSection title="1. Newsletter Subscription Banner Settings">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Newsletter Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.newsletterTitle || 'Subscribe us and Get the latest updates and news'}
              onChange={(e) => handleFieldChange('newsletterTitle', e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Subscribe Button Text">
            <input
              type="text"
              className="form-control"
              value={data?.newsletterButtonText || 'Subscribe'}
              onChange={(e) => handleFieldChange('newsletterButtonText', e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection title="2. Input Field Placeholders">
        <AdminFormGrid columns={3}>
          <AdminFormField label="Name Input Placeholder">
            <input
              type="text"
              className="form-control"
              value={data?.namePlaceholder || 'Your name *'}
              onChange={(e) => handleFieldChange('namePlaceholder', e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Email Input Placeholder">
            <input
              type="text"
              className="form-control"
              value={data?.emailPlaceholder || 'Your Email ID *'}
              onChange={(e) => handleFieldChange('emailPlaceholder', e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Phone Input Placeholder">
            <input
              type="text"
              className="form-control"
              value={data?.phonePlaceholder || 'Mobile Number *'}
              onChange={(e) => handleFieldChange('phonePlaceholder', e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF'
              }}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default SubscribeNewsletterEditor;
