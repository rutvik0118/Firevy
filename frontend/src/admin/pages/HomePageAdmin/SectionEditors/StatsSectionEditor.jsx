import React from 'react';
import { Plus, Trash2, TrendingUp } from 'lucide-react';
import { AdminFormSection, AdminFormGrid, AdminFormField } from '../../../components/UI/AdminEditLayout';

export const StatsSectionEditor = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    if (onChange) {
      onChange({ ...data, [field]: value });
    }
  };

  const defaultStats = [
    { value: '95%', label: 'Client Retention', numeric: 95, suffix: '%' },
    { value: '18+', label: 'Industries Served', numeric: 18, suffix: '+' },
    { value: '2800+', label: 'Satisfied Clients', numeric: 2800, suffix: '+' },
    { value: '1500+', label: 'Projects Completed', numeric: 1500, suffix: '+' },
    { value: '23+', label: 'Years of Experience', numeric: 23, suffix: '+' },
    { value: '320+', label: '5-Star Reviews', numeric: 320, suffix: '+' }
  ];

  const statsList = Array.isArray(data.statsList) ? data.statsList : defaultStats;

  const handleStatChange = (idx, field, val) => {
    const updated = [...statsList];
    updated[idx] = { ...updated[idx], [field]: val };
    updateField('statsList', updated);
  };

  const addStat = () => {
    updateField('statsList', [
      ...statsList,
      { value: '100+', label: 'New Milestone Metric', numeric: 100, suffix: '+' }
    ]);
  };

  const removeStat = (idx) => {
    const updated = statsList.filter((_, i) => i !== idx);
    updateField('statsList', updated);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <AdminFormSection
        title="Animated Key Stats & Growth Metrics"
        subtitle="Manage numerical statistics, metric labels, values, and suffix indicators."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {statsList.map((stat, idx) => (
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
                  <TrendingUp size={15} style={{ color: '#006B8F' }} />
                  <span>Stat Metric #{idx + 1}</span>
                </span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#DC2626', borderColor: '#FCA5A5' }}
                  onClick={() => removeStat(idx)}
                >
                  <Trash2 size={13} />
                  <span>Remove</span>
                </button>
              </div>

              <AdminFormGrid columns={2} gap="12px">
                <AdminFormField label="Display Value String">
                  <input
                    type="text"
                    className="form-control"
                    value={stat.value || ''}
                    onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Metric Label">
                  <input
                    type="text"
                    className="form-control"
                    value={stat.label || ''}
                    onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                  />
                </AdminFormField>

                <AdminFormField label="Numeric Target (for Animation)">
                  <input
                    type="number"
                    className="form-control"
                    value={stat.numeric ?? 0}
                    onChange={(e) => handleStatChange(idx, 'numeric', parseFloat(e.target.value) || 0)}
                  />
                </AdminFormField>

                <AdminFormField label="Suffix Symbol">
                  <input
                    type="text"
                    className="form-control"
                    value={stat.suffix || ''}
                    onChange={(e) => handleStatChange(idx, 'suffix', e.target.value)}
                  />
                </AdminFormField>
              </AdminFormGrid>
            </div>
          ))}

          <div>
            <button type="button" className="btn btn-secondary btn-sm" onClick={addStat}>
              <Plus size={14} style={{ marginRight: '4px' }} />
              <span>Add Metric Stat</span>
            </button>
          </div>
        </div>
      </AdminFormSection>
    </div>
  );
};

export default StatsSectionEditor;
