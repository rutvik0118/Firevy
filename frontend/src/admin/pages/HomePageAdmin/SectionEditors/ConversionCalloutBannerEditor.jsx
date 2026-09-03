import React from 'react';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const ConversionCalloutBannerEditor = ({ data, onChange }) => {
  const handleFieldChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Conversion Callout Banner (Teal CTA Ribbon)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          High-converting CTA ribbon with headline, subtext, action button, and dual decorative images.
        </p>
      </div>

      {/* 1. Content & Text */}
      <AdminFormSection title="Content & Messaging">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Top Tag / Badge">
            <input
              type="text"
              className="form-control"
              value={data?.badge || "LET'S START SOMETHING TOGETHER"}
              onChange={(e) => handleFieldChange('badge', e.target.value)}
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

          <AdminFormField label="Main Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Let’s Start Something Together'}
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

          <AdminFormField label="Supporting Sub-title / Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'Book a meeting with our specialists today to learn more about how Firevy can help you unlock technology visions.'}
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

      {/* 2. Call to Action & Contact */}
      <AdminFormSection title="Call To Action & Contact Links">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Button Label Text" required>
            <input
              type="text"
              className="form-control"
              value={data?.buttonText || 'Get In Touch'}
              onChange={(e) => handleFieldChange('buttonText', e.target.value)}
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

          <AdminFormField label="Button Link Target" required>
            <input
              type="text"
              className="form-control"
              value={data?.buttonLink || '/contact'}
              onChange={(e) => handleFieldChange('buttonLink', e.target.value)}
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

          <AdminFormField label="Contact Direct Phone">
            <input
              type="text"
              className="form-control"
              value={data?.phone || '+1 (800) 123-4567'}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
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

          <AdminFormField label="Contact Direct Email">
            <input
              type="text"
              className="form-control"
              value={data?.email || 'contact@firevy.co'}
              onChange={(e) => handleFieldChange('email', e.target.value)}
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

      {/* 3. Media & Visuals */}
      <AdminFormSection title="Decorative Visual Assets">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Left Decorative Visual">
            <MediaUploadInput
              label="Left Visual Asset"
              type="image"
              value={data?.leftImage || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'}
              onChange={(val) => handleFieldChange('leftImage', val)}
              helperText="Image displayed on left side of banner"
            />
          </AdminFormField>

          <AdminFormField label="Right Decorative Visual">
            <MediaUploadInput
              label="Right Visual Asset"
              type="image"
              value={data?.rightImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'}
              onChange={(val) => handleFieldChange('rightImage', val)}
              helperText="Image displayed on right side of banner"
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default ConversionCalloutBannerEditor;
