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
      name: 'title',
      label: 'Story Headline / Video Title',
      type: 'textarea',
      rows: 2,
      fullWidth: true,
      placeholder: "e.g. Discover why Andrew trusted firevy.co with his mobile digital diary project...",
      required: true
    },
    {
      name: 'img',
      label: 'Video Thumbnail / Cover Image',
      type: 'image',
      helperText: 'Upload or choose client video cover/thumbnail image.'
    },
    {
      name: 'clientName',
      label: 'Client / Speaker Name',
      type: 'text',
      placeholder: 'e.g. Andrew, Bruno, Tim, Christina'
    },
    {
      name: 'company',
      label: 'Company / Project Context',
      type: 'text',
      placeholder: 'e.g. Mobile Digital Diary, Healthcare Innovation Brazil'
    },
    {
      name: 'videoUrl',
      label: 'Video URL (YouTube / MP4 / Vimeo)',
      type: 'text',
      placeholder: 'e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          What Our Clients Have To Say (Video Testimonials)
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Client story cards with video play triggers, client portraits/thumbnails, and authentic testimonial accounts.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title ?? 'What Our Clients Have To Say'}
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
              value={data?.description ?? "From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact."}
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.clientName || item.name || 'Client Testimonial'} {item.company && <span style={{ color: '#006B8F', fontWeight: 600 }}>({item.company})</span>}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default VideoTestimonialsStoryEditor;
