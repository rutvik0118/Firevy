import React from 'react';
import ItemListEditor from '../../../components/UI/ItemListEditor';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const DigitalTransformationCaseStudiesEditor = ({ data, onChange }) => {
  const rawCaseStudies = data?.caseStudies || [];

  // Prepare items for ItemListEditor with bulletsText for multiline editing
  const preparedItems = rawCaseStudies.map((cs) => ({
    ...cs,
    mainImg: cs.mainImg || cs.mockup || cs.image || '',
    logo: cs.logo || cs.logoImg || '',
    desc: cs.desc || cs.description || '',
    bulletsText: Array.isArray(cs.bullets)
      ? cs.bullets.join('\n')
      : Array.isArray(cs.points)
      ? cs.points.join('\n')
      : typeof cs.bulletsText === 'string'
      ? cs.bulletsText
      : typeof cs.bullets === 'string'
      ? cs.bullets
      : ''
  }));

  const handleCaseStudiesChange = (newItems) => {
    const formatted = newItems.map((item, idx) => {
      const bullets = typeof item.bulletsText === 'string'
        ? item.bulletsText.split('\n').map((b) => b.trim()).filter(Boolean)
        : Array.isArray(item.bullets)
        ? item.bullets
        : [];

      return {
        id: item.id || `cs_${idx + 1}`,
        company: item.company || `Case Study ${idx + 1}`,
        bgColor: item.bgColor || '#E6F4FA',
        logo: item.logo || '',
        desc: item.desc || '',
        bullets: bullets,
        points: bullets, // backward compatibility
        caseStudyLink: item.caseStudyLink || '/portfolio',
        portfolioLink: item.portfolioLink || '/portfolio',
        mainImg: item.mainImg || '',
        mockup: item.mainImg || '', // backward compatibility
        isActive: item.isActive !== false
      };
    });

    onChange({
      ...data,
      caseStudies: formatted
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
      name: 'company',
      label: 'Client / Company Name',
      type: 'text',
      placeholder: "e.g. Larsen & Toubro, Morris Garages, Adani Group, L'Oreal, Waymark Maps, Bee Car Care",
      required: true
    },
    {
      name: 'bgColor',
      label: 'Card Tint Hex Color',
      type: 'text',
      placeholder: 'e.g. #E6F4FA, #FFEAEA, #EDEDF6, #F3F2EF, #F9E5F7, #F4F2EC'
    },
    {
      name: 'caseStudyLink',
      label: 'Case Study Button Link',
      type: 'text',
      placeholder: '/portfolio',
      defaultValue: '/portfolio'
    },
    {
      name: 'portfolioLink',
      label: 'Portfolio Button Link',
      type: 'text',
      placeholder: '/portfolio',
      defaultValue: '/portfolio'
    },
    {
      name: 'logo',
      label: 'Brand / Company Logo',
      type: 'image',
      helperText: 'Upload brand logo (e.g. /images/case_study_images/Images/new/finallogos_1/lt.png).'
    },
    {
      name: 'mainImg',
      label: 'Case Study Overview Graphic / Mockup',
      type: 'image',
      helperText: 'Upload high-resolution case study showcase graphic (e.g. /images/case_study_images/Images/new/l&t.webp).'
    },
    {
      name: 'desc',
      label: 'Case Study Overview Description',
      type: 'textarea',
      placeholder: 'Enter detailed company background and delivered software solutions...',
      rows: 4,
      fullWidth: true,
      required: true
    },
    {
      name: 'bulletsText',
      label: 'Key Results & Metrics (One bullet point per line)',
      type: 'textarea',
      placeholder: 'Automated safety audits and inspections\n24/7 access to safety training resources\nCustomizable dashboards and reporting tools\n99% compliance with health and safety regulations',
      rows: 5,
      fullWidth: true,
      helperText: 'Each line appears as a distinct bullet point with a chevron indicator on the main website.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ paddingBottom: '10px', borderBottom: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 800, color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
          Digital Transformation Case Studies
        </h4>
        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748B' }}>
          Manage all 6 full-width enterprise transformation cards with brand logos, highlight metrics, delivered software solutions, and device graphics.
        </p>
      </div>

      {/* Section Header & Subtitle */}
      <AdminFormSection title="Section Header & Text">
        <AdminFormGrid columns={2}>
          <AdminFormField label="Section Title" required fullWidth>
            <input
              type="text"
              className="form-control"
              value={data?.title || 'Digital Transformation Case Studies'}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              placeholder="Digital Transformation Case Studies"
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

          <AdminFormField label="Section Description Paragraph" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data?.description || 'Discover how we partner with industry pioneers to deliver bespoke web, mobile, and cloud software engineering.'}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              placeholder="Discover how we partner with industry pioneers..."
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

      {/* Case Studies List Editor */}
      <AdminFormSection title={`Enterprise Case Studies (${preparedItems.length})`}>
        <ItemListEditor
          items={preparedItems}
          onChange={handleCaseStudiesChange}
          itemTitle="Case Study"
          fields={fields}
          renderItemSummary={(item) => (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {item.company}
              </div>
              <div style={{ fontSize: '11px', color: '#64748B', lineHeight: 1.35, wordBreak: 'break-word', overflowWrap: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.desc || 'No description provided'}
              </div>
            </div>
          )}
        />
      </AdminFormSection>
    </div>
  );
};

export default DigitalTransformationCaseStudiesEditor;
