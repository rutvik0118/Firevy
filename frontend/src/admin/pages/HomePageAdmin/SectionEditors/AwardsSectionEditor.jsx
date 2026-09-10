import React from 'react';
import { Plus, Trash2, Award } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const AwardsSectionEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const defaultAwards = [
    { title: 'Clutch Top AI & Software Developer 2026', badge: 'CLUTCH LEADER', year: '2026', desc: 'Ranked #1 Global AI & Custom Software Engineering Firm.' },
    { title: 'ISO 9001:2015 & SOC2 Type II Certified', badge: 'ENTERPRISE COMPLIANT', year: 'Certified', desc: 'Bank-grade cybersecurity & quality management standards.' },
    { title: 'GoodFirms Top App Development Agency', badge: 'TOP DEVELOPER', year: '2025-2026', desc: 'Recognized for high-impact mobile & web product delivery.' },
    { title: 'G2 High Performer Enterprise Software', badge: '5-STAR RATED', year: 'Top 1%', desc: 'Highest customer satisfaction rating across 300+ reviews.' }
  ];

  const awards = Array.isArray(data.awards) ? data.awards : defaultAwards;

  const handleAwardChange = (idx, field, val) => {
    const updated = [...awards];
    updated[idx] = { ...updated[idx], [field]: val };
    updateField('awards', updated);
  };

  const addAward = () => {
    updateField('awards', [
      ...awards,
      { title: 'New Industry Accolade', badge: 'AWARD WINNER', year: '2026', desc: 'Award description text.' }
    ]);
  };

  const removeAward = (idx) => {
    const updated = awards.filter((_, i) => i !== idx);
    updateField('awards', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Awards & Recognition Section Headings"
        subtitle="Manage the section title, badge, and descriptive subtitle."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'RECOGNITION & EXCELLENCE'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Proud To Have Picked These Up Along The Way'}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Sub-heading Description" fullWidth>
            <textarea
              className="form-control"
              rows={2}
              value={data.subtitle || ''}
              onChange={(e) => updateField('subtitle', e.target.value)}
            />
          </AdminFormField>
        </AdminFormGrid>
      </AdminFormSection>

      <AdminFormSection
        title="Award Badges & Recognition Cards"
        subtitle="Manage individual award title, badge tag, year, and description."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {awards.map((award, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                backgroundColor: '#F8FAFC'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={15} style={{ color: '#006B8F' }} />
                  <span>Award Card #{idx + 1}</span>
                </span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                  onClick={() => removeAward(idx)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Award Title">
                  <input
                    type="text"
                    className="form-control"
                    value={award.title || ''}
                    onChange={(e) => handleAwardChange(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Badge Label">
                  <input
                    type="text"
                    className="form-control"
                    value={award.badge || ''}
                    onChange={(e) => handleAwardChange(idx, 'badge', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Year / Rating">
                  <input
                    type="text"
                    className="form-control"
                    value={award.year || ''}
                    onChange={(e) => handleAwardChange(idx, 'year', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Short Description">
                  <input
                    type="text"
                    className="form-control"
                    value={award.desc || ''}
                    onChange={(e) => handleAwardChange(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addAward}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Award Card</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default AwardsSectionEditor;
