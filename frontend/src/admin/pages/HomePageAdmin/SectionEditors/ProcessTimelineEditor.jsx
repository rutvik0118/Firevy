import React from 'react';
import { Plus, Trash2, GitCommit } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const ProcessTimelineEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const defaultSteps = [
    { number: '01', title: 'Requirement Gathering', desc: 'In-depth discovery, business goals audit, and technical specification definition.' },
    { number: '02', title: 'Designs, Wireframes, & Mockups', desc: 'Crafting responsive UI layout wireframes, design systems, and visual mockups.' },
    { number: '03', title: 'Prototype Demo', desc: 'Interactive clickable prototype demonstration for early stakeholder feedback.' },
    { number: '04', title: 'Changes And Confirmation', desc: 'Incorporating feedback, refining architecture scope, and locking design signoff.' },
    { number: '05', title: 'Development', desc: 'Agile frontend & backend code engineering with clean modular architecture.' },
    { number: '06', title: 'Deployment', desc: 'Automated CI/CD pipeline deployment to production cloud infrastructure.' },
    { number: '07', title: 'Support And Maintenance', desc: '24/7 proactive monitoring, security updates, and performance optimizations.' },
    { number: '08', title: 'SEO', desc: 'Search engine optimization, schema structured tags, and performance tuning.' }
  ];

  const steps = Array.isArray(data.steps) ? data.steps : defaultSteps;

  const handleStepChange = (idx, field, val) => {
    const updated = [...steps];
    updated[idx] = { ...updated[idx], [field]: val };
    updateField('steps', updated);
  };

  const addStep = () => {
    const nextNum = (steps.length + 1).toString().padStart(2, '0');
    updateField('steps', [
      ...steps,
      { number: nextNum, title: 'New Lifecycle Step', desc: 'Lifecycle phase description.' }
    ]);
  };

  const removeStep = (idx) => {
    const updated = steps.filter((_, i) => i !== idx);
    updateField('steps', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Process Timeline Headings"
        subtitle="Manage the 8-step engineering lifecycle section title, badge, and description."
      >
        <AdminFormGrid columns={2} gap="16px">
          <AdminFormField label="Section Badge Tag">
            <input
              type="text"
              className="form-control"
              value={data.badge || 'HOW WE WORK'}
              onChange={(e) => updateField('badge', e.target.value)}
            />
          </AdminFormField>

          <AdminFormField label="Main Title" fullWidth>
            <input
              type="text"
              className="form-control"
              value={data.title || 'Process We Follow'}
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
        title="Process Lifecycle Steps"
        subtitle="Manage process step numbers, titles, and descriptive summaries."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {steps.map((step, idx) => (
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
                  <GitCommit size={15} style={{ color: '#006B8F' }} />
                  <span>Step #{step.number || idx + 1}</span>
                </span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                  onClick={() => removeStep(idx)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Step Number Badge">
                  <input
                    type="text"
                    className="form-control"
                    value={step.number || ''}
                    onChange={(e) => handleStepChange(idx, 'number', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Step Title">
                  <input
                    type="text"
                    className="form-control"
                    value={step.title || ''}
                    onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Step Description" fullWidth>
                  <input
                    type="text"
                    className="form-control"
                    value={step.desc || ''}
                    onChange={(e) => handleStepChange(idx, 'desc', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addStep}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Process Step</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default ProcessTimelineEditor;
