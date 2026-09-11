import React from 'react';
import { Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField, AdminMediaField } from '../../../components/UI/AdminEditLayout';

export const AboutPreviewEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const points = Array.isArray(data.points) ? data.points : [
    'Digital Transformation & Legacy System Modernization',
    'Enterprise Cloud-Native Microservices Architecture',
    'Custom RAG Generative AI & Autonomous Agent Engineering',
    'Agile Product Delivery with 2-Week Sprint Cadence',
    'Strict SOC2 & ISO-27001 Security Standards'
  ];

  const handlePointChange = (idx, val) => {
    const updated = [...points];
    updated[idx] = val;
    updateField('points', updated);
  };

  const addPoint = () => {
    updateField('points', [...points, 'New capability feature point']);
  };

  const removePoint = (idx) => {
    const updated = points.filter((_, i) => i !== idx);
    updateField('points', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* 1. Header & Text Content */}
      <AdminFormSection
        title="About Preview Text & Headings"
        subtitle="Manage the company introduction overview headline, badge, and description text."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag" helperText="Small uppercase tag displayed above the main heading.">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'WHO WE ARE'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Text" helperText="Text for the main learn more action button.">
            <input
              type="text"
              className="form-control"
              value={data.buttonText || 'Learn More About Us'}
              onChange={(e) => updateField('buttonText', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title Heading" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Technology Expertise. Business Thinking. Real Results.'}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Sub-heading Narrative" fullWidth>
            <textarea
              className="form-control"
              rows={3}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Primary Button Link">
            <input
              type="text"
              className="form-control"
              value={data.buttonLink || '/about'}
              onChange={(e) => updateField('buttonLink', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 2. Visual Image & Floating Card */}
      <AdminFormSection
        title="Visual Asset & Floating Stat Card"
        subtitle="Configure the team showcase image and bottom floating achievement badge."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminMediaField
            label="Section Feature Image"
            fullWidth
            type="image"
            value={data.imageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'}
            onChange={(url) => updateField('imageUrl', url)}
          />

          <AdminFormField label="Floating Card Title">
            <input
              type="text"
              className="form-control"
              value={data.floatingTitle || 'Engineering Excellence'}
              onChange={(e) => updateField('floatingTitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Floating Card Subtitle">
            <input
              type="text"
              className="form-control"
              value={data.floatingSubtitle || '95% Long-term Client Retention Rate'}
              onChange={(e) => updateField('floatingSubtitle', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Floating Card Badge">
            <input
              type="text"
              className="form-control"
              value={data.floatingBadge || 'TOP 1% TALENT'}
              onChange={(e) => updateField('floatingBadge', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      {/* 3. Capability Checklist */}
      <AdminFormSection
        title="Key Capability Points Checklist"
        subtitle="Manage the checklist points highlighting corporate strengths."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {points.map((pt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <div style={{ color: '#006B8F', flexShrink: 0 }}>
                <CheckCircle2 size={18} />
              </div>
              <input
                type="text"
                className="form-control"
                style={{ flex: 1 }}
                value={pt}
                onChange={(e) => handlePointChange(idx, e.target.value)}
              />
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                onClick={() => removePoint(idx)}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
          <div style={{ marginTop: '6px' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addPoint}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Checklist Point</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default AboutPreviewEditor;
