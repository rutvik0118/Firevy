import React from 'react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const WorkTogetherNewsletterEditor = ({ data, onChange }) => {
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
          Let's Work Together & Newsletter Banners
        </h4>
        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Footer-preceding sapphire CTA ribbon and newsletter subscription lead capture banner.
        </p>
      </div>

      {/* 1. Work Together Banner */}
      <AdminFormSection title="1. Work Together CTA Banner">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.bannerTitle || data?.title || "Let's Work Together On Your Next Digital Project"}
              onChange={(e) => {
                handleFieldChange('bannerTitle', e.target.value);
                handleFieldChange('title', e.target.value);
              }}
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

          <AdminFormField label="Description Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.bannerDescription || data?.description || 'Book a meeting with our specialists today to learn more about how firevy.co can help you unlock technology visions.'}
              onChange={(e) => {
                handleFieldChange('bannerDescription', e.target.value);
                handleFieldChange('description', e.target.value);
              }}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#0F172A',
                backgroundColor: '#FFFFFF',
                fontFamily: 'inherit'
              }}
            />
          </AdminFormField>

          <AdminFormField label="Quote CTA Button Text">
            <input
              type="text"
              className="form-control"
              value={data?.bannerButtonText || data?.buttonText || 'Request A Free Quote'}
              onChange={(e) => {
                handleFieldChange('bannerButtonText', e.target.value);
                handleFieldChange('buttonText', e.target.value);
              }}
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

          <AdminFormField label="Quote CTA Button Link">
            <input
              type="text"
              className="form-control"
              value={data?.bannerButtonLink || data?.buttonLink || '/contact'}
              onChange={(e) => {
                handleFieldChange('bannerButtonLink', e.target.value);
                handleFieldChange('buttonLink', e.target.value);
              }}
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

      {/* 2. Newsletter Subscription Banner */}
      <AdminFormSection title="2. Newsletter Subscription Banner">
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
    </div>
  );
};

export default WorkTogetherNewsletterEditor;