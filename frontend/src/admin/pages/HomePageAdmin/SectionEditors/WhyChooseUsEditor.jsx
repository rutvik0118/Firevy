import React from 'react';
import { Plus, Trash2, ShieldCheck } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const WhyChooseUsEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const defaultPillars = [
    { title: 'Experienced Developers', desc: 'Top 1% pre-vetted engineers with deep expertise in modern tech stacks.' },
    { title: 'Agile Development', desc: 'Iterative 2-week sprints with full client visibility into code progress.' },
    { title: 'Transparent Communication', desc: 'Direct Slack, Jira, and weekly video standups with zero middleman friction.' },
    { title: 'Quality Assurance', desc: 'Automated E2E testing, code reviews, and zero-defect deployment standards.' },
    { title: 'Scalable Architecture', desc: 'Microservices designed to handle millions of queries with zero downtime.' },
    { title: 'Security First', desc: 'Bank-grade encryption, OWASP audits, and SOC2 / HIPAA compliance readiness.' },
    { title: 'On-Time Delivery', desc: 'Strict milestone tracking and 99.4% on-time project completion record.' },
    { title: 'Post-Launch Support', desc: 'Dedicated SLAs, 24/7 cloud monitoring, and continuous product updates.' }
  ];

  const pillars = Array.isArray(data.pillars) ? data.pillars : defaultPillars;

  const handlePillarChange = (idx, field, val) => {
    const updated = [...pillars];
    updated[idx] = { ...updated[idx], [field]: val };
    updateField('pillars', updated);
  };

  const addPillar = () => {
    updateField('pillars', [
      ...pillars,
      { title: 'New Engineering Pillar', desc: 'Description of value proposition or strength.' }
    ]);
  };

  const removePillar = (idx) => {
    const updated = pillars.filter((_, i) => i !== idx);
    updateField('pillars', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Why Choose Us Headings"
        subtitle="Manage the section title, badge, and descriptive subtitle."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'WHY FIREVY'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'The Engineering Partner Built for Long-Term Growth'}
              onChange={(e) => updateField('title', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Subtitle Description" fullWidth>
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
        title="Engineering Pillar Cards"
        subtitle="Manage individual pillar titles and value proposition descriptions."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {pillars.map((pillar, idx) => (
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
                  <ShieldCheck size={15} style={{ color: '#006B8F' }} />
                  <span>Pillar Card #{idx + 1}</span>
                </span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                  onClick={() => removePillar(idx)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Pillar Title">
                  <input
                    type="text"
                    className="form-control"
                    value={pillar.title || ''}
                    onChange={(e) => handlePillarChange(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Description">
                  <input
                    type="text"
                    className="form-control"
                    value={pillar.desc || ''}
                    onChange={(e) => handlePillarChange(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addPillar}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Pillar Card</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default WhyChooseUsEditor;
