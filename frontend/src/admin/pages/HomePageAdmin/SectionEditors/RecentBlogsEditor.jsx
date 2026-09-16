import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const RecentBlogsEditor = ({ data, onChange }) => {
  const blogs = data?.blogs || [];

  const handleBlogsChange = (newBlogs) => {
    onChange({
      ...data,
      blogs: newBlogs
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
      label: 'Blog Article Title',
      type: 'text',
      placeholder: 'e.g. AI in Mobile App Development: Tools That Save Time...',
      required: true
    },
    {
      name: 'category',
      label: 'Blog Category / Tag',
      type: 'text',
      placeholder: 'e.g. AI & Mobile Development, Cloud Architecture'
    },
    {
      name: 'date',
      label: 'Publication Date',
      type: 'text',
      placeholder: 'e.g. March 6, 2026',
      required: true
    },
    {
      name: 'readTime',
      label: 'Reading Time (e.g. 5 min read)',
      type: 'text',
      placeholder: '4 min read'
    },
    {
      name: 'author',
      label: 'Author Name',
      type: 'text',
      placeholder: 'e.g. Firevy Tech Editorial'
    },
    {
      name: 'slug',
      label: 'Article URL Slug',
      type: 'text',
      placeholder: 'e.g. ai-in-mobile-app-development',
      required: true
    },
    {
      name: 'image',
      label: 'Blog Cover Banner Image',
      type: 'image',
      helperText: 'Upload 16:9 featured blog article cover banner.'
    },
    {
      name: 'description',
      label: 'Excerpt / Summary',
      type: 'textarea',
      placeholder: 'Brief summary of the article...',
      rows: 3,
      fullWidth: true,
      required: true
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Our Recent Blogs Section
        </h4>
        <p style={{ margin: '1px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          3-column thought leadership articles with dates, summaries, cover banners, and detail links.
        </p>
      </div>

      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Main Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Our Recent Blogs'}
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
              value={data?.description || 'Read through our latest blog posts that cover everything from technology trends to business insights.'}
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

      <AdminFormSection title="Blog Articles">
        <ItemListEditor
          items={blogs}
          onChange={handleBlogsChange}
          itemTitle="Blog Post"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.date ? <span style={{ color: '#006B8F', fontWeight: 600 }}>{item.date} — </span> : null}
                {item.description || item.desc || ''}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default RecentBlogsEditor;
