import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const RecentPodcastsEditor = ({ data, onChange }) => {
  const podcasts = data?.podcasts || [];

  const handlePodcastsChange = (newPods) => {
    onChange({
      ...data,
      podcasts: newPods
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
      label: 'Podcast Episode Title',
      type: 'text',
      placeholder: 'e.g. Mobile App Testing and Quality Assurance in Modern Agile...',
      required: true
    },
    {
      name: 'episode',
      label: 'Episode Tag (e.g. Episode 01)',
      type: 'text',
      placeholder: 'Episode 01'
    },
    {
      name: 'duration',
      label: 'Duration (e.g. 28 Mins)',
      type: 'text',
      placeholder: '32 Mins'
    },
    {
      name: 'host',
      label: 'Host / Guest Names',
      type: 'text',
      placeholder: 'e.g. Sapphire Engineering Pod'
    },
    {
      name: 'exploreLink',
      label: 'Details / Redirect Link',
      type: 'text',
      placeholder: '/podcasts/mobile-app-testing'
    },
    {
      name: 'spotifyUrl',
      label: 'Spotify Stream URL',
      type: 'text',
      placeholder: 'https://open.spotify.com/episode/...'
    },
    {
      name: 'youtubeUrl',
      label: 'YouTube Video Podcast URL',
      type: 'text',
      placeholder: 'https://youtube.com/watch?v=...'
    },
    {
      name: 'image',
      label: 'Episode Cover Artwork Image',
      type: 'image',
      helperText: 'Upload square or 16:9 podcast episode cover art.'
    },
    {
      name: 'desc',
      label: 'Podcast Episode Summary',
      type: 'textarea',
      placeholder: 'Summary excerpt and key takeaways from the episode...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Recent Podcasts Section
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          3-column podcast cards with cover art, synopsis, and interactive play triggers.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Recent Podcasts'}
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
              value={data?.description || "Listen to our series of podcasts that expose you to a broad array of concepts."}
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

      <AdminFormSection title="Podcast Episodes">
        <ItemListEditor
          items={podcasts}
          onChange={handlePodcastsChange}
          itemTitle="Podcast Episode"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.title}
              </div>
              {(item.desc || item.description || item.host) && (
                <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  {item.host ? <span style={{ color: '#006B8F', fontWeight: 600 }}>{item.host} — </span> : null}
                  {item.desc || item.description || ''}
                </div>
              )}
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default RecentPodcastsEditor;
