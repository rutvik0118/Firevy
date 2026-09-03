import React from 'react';
import MediaUploadInput from '../../../components/UI/MediaUploadInput';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const DownloadBrochureEditor = ({ data, onChange }) => {
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
          Download Our Brochure Form Section
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Lead capture brochure download bar with direct PDF download integration.
        </p>
      </div>

      <AdminFormSection title="Brochure Bar Text & Button">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Heading" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Download Our Brochure To Take A Glimpse Of Our Offerings'}
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

          <AdminFormField label="Supporting Description Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'Get complete insights on our technology stack, client case studies, and enterprise engagement models.'}
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

          <AdminFormField label="Download Button Text" required>
            <input
              type="text"
              className="form-control"
              value={data?.buttonText || 'Download'}
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

          <AdminFormField label="Badge / Guarantee Text">
            <input
              type="text"
              className="form-control"
              value={data?.badge || 'Instant PDF Delivery • 100% Free'}
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
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection title="PDF & Visual Assets">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Brochure PDF Document" fullWidth>
            <MediaUploadInput
              label="Company Brochure PDF Document"
              type="pdf"
              value={data?.brochurePdf || data?.brochureFile || data?.brochureUrl || ''}
              onChange={(val) => {
                handleFieldChange('brochurePdf', val);
                handleFieldChange('brochureFile', val);
                handleFieldChange('brochureUrl', val);
              }}
              helperText="Upload official company brochure PDF file."
            />
          </AdminFormField>

          <AdminFormField label="Brochure Cover / Preview Image">
            <MediaUploadInput
              label="Brochure Cover Graphic"
              type="image"
              value={data?.previewImage || ''}
              onChange={(val) => handleFieldChange('previewImage', val)}
              helperText="Optional 3D brochure cover graphic"
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>
    </div>
  );
};

export default DownloadBrochureEditor;
