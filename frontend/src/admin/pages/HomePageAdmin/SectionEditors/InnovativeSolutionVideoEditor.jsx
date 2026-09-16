import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const InnovativeSolutionVideoEditor = ({ data, onChange }) => {
  const videos = data?.videos || [];

  const handleVideosChange = (newVideos) => {
    onChange({
      ...data,
      videos: newVideos
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
      label: 'Video Showcase Title',
      type: 'text',
      placeholder: 'e.g. AI-Powered Language Learning App, NutriPlan',
      required: true
    },
    {
      name: 'category',
      label: 'Category / Domain Tag',
      type: 'text',
      placeholder: 'e.g. AI & EdTech, Health & Fitness'
    },
    {
      name: 'duration',
      label: 'Video Duration (e.g. 02:45)',
      type: 'text',
      placeholder: '02:30'
    },
    {
      name: 'image',
      label: 'Video Thumbnail Cover Image',
      type: 'image',
      helperText: 'Upload 16:9 thumbnail cover image for video slider.'
    },
    {
      name: 'videoUrl',
      label: 'Video File Asset',
      type: 'video',
      helperText: 'Upload or replace MP4 video file.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Unveiling Our Innovative Solution (Video Showcase Slider)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Full-bleed horizontal auto-scroll slider track with play video overlays and direct modal previews.
        </p>
      </div>

      <AdminFormSection title="Section Header & CTA Button">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Unveiling Our Innovative Solution'}
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
              value={data?.description || 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued.'}
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

          <AdminFormField label="CTA Button Text">
            <input
              type="text"
              className="form-control"
              value={data?.buttonText || 'View Insightful Videos'}
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

          <AdminFormField label="CTA Button Link">
            <input
              type="text"
              className="form-control"
              value={data?.buttonLink || '/portfolio'}
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
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection title="Video Showcase Carousel Items">
        <ItemListEditor
          items={videos}
          onChange={handleVideosChange}
          itemTitle="Video Showcase"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.title || 'Video Showcase'}
              </div>
              {item.videoUrl && (
                <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  {item.videoUrl}
                </div>
              )}
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default InnovativeSolutionVideoEditor;
