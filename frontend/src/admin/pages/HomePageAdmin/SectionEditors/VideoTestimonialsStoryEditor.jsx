import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const VideoTestimonialsStoryEditor = ({ data, onChange }) => {
  const testimonials = data?.testimonials || [];

  const handleTestimonialsChange = (newTestimonials) => {
    onChange({
      ...data,
      testimonials: newTestimonials
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
      label: 'Client / Speaker Name',
      type: 'text',
      placeholder: 'e.g. Derrick Surratt, Hamidah Nalwoga',
      required: true
    },
    {
      name: 'title',
      label: 'Story Headline / Video Title',
      type: 'text',
      placeholder: "e.g. From Idea to Reality | Client's Success Story",
      required: true
    },
    {
      name: 'designation',
      label: 'Job Designation / Role',
      type: 'text',
      placeholder: 'e.g. Chief Technology Officer, VP Product'
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      placeholder: 'e.g. Bee Car Care Inc.'
    },
    {
      name: 'rating',
      label: 'Client Rating Score',
      type: 'text',
      placeholder: '5.0'
    },
    {
      name: 'avatar',
      label: 'Client Portrait Avatar / Cover Image',
      type: 'image',
      helperText: 'Upload client photo portrait.'
    },
    {
      name: 'videoUrl',
      label: 'Video Testimonial File (MP4)',
      type: 'video',
      helperText: 'Upload MP4 video testimonial file.'
    },
    {
      name: 'quote',
      label: 'Quote Transcript / Summary',
      type: 'textarea',
      placeholder: 'Key quote or transcription of client feedback...',
      rows: 2,
      fullWidth: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          What Our Clients Have To Say (Video Testimonials)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Client story cards with video play triggers, client portraits, and authentic testimonial accounts.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'What Our Clients Have To Say'}
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
              value={data?.description || "Hear how our clients share their positive experiences of working with firevy.co team."}
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

      <AdminFormSection title="Video Testimonial Stories">
        <ItemListEditor
          items={testimonials}
          onChange={handleTestimonialsChange}
          itemTitle="Video Testimonial"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {item.avatar && (
                <img
                  src={item.avatar}
                  alt={item.name}
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
                  {item.name} {item.company && <span style={{ fontWeight: 400, color: '#64748B' }}>({item.company})</span>}
                </div>
                <div style={{ fontSize: '11px', color: '#64748B' }}>
                  {item.title}
                </div>
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default VideoTestimonialsStoryEditor;
