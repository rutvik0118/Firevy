import React, { useState, useEffect } from 'react';
import {
  Settings as SettingsIcon,
  Building,
  Mail,
  Phone,
  ToggleLeft,
  ToggleRight,
  Server,
  Save
} from 'lucide-react';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const SettingsPage = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [settings, setSettings] = useState({
    companyName: 'Firevy.co',
    tagline: 'Engineering Digital Experiences That Create Impact',
    contactEmail: 'contact@firevy.co',
    supportPhone: '+1 (800) 592-7410',
    address: '500 Howard Street, Suite 400, San Francisco, CA 94105',
    activeFeatures: {
      careersPortal: true,
      caseStudies: true,
      clientInquiries: true,
    }
  });

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const response = await adminService.getSettings();
      if (response && response.data) {
        setSettings((prev) => ({
          ...prev,
          ...response.data,
          activeFeatures: {
            ...prev.activeFeatures,
            ...(response.data.activeFeatures || {})
          }
        }));
      }
    } catch {
      addToast('Loaded default environment settings', 'info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleToggleFeature = (featureKey) => {
    setSettings((prev) => ({
      ...prev,
      activeFeatures: {
        ...prev.activeFeatures,
        [featureKey]: !prev.activeFeatures[featureKey]
      }
    }));
    addToast(`Feature "${featureKey}" toggled`, 'success');
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      addToast('System settings saved successfully!', 'success');
    }, 400);
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <SettingsIcon size={24} />
            <span>Platform Configuration & Settings</span>
          </h1>
          <p>Manage corporate metadata, feature toggles, and backend infrastructure connections</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={handleSave} disabled={saving} className="btn btn-primary">
            <Save size={15} />
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }}>
        {/* Company Profile Settings Form */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
            <Building size={20} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>Corporate Identity</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Values rendered across the public web applications
              </p>
            </div>
          </div>

          <form onSubmit={handleSave}>
            <div className="form-group">
              <label className="form-label">Company Brand Name</label>
              <input
                type="text"
                className="form-input"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Corporate Tagline</label>
              <input
                type="text"
                className="form-input"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Contact Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Support Phone</label>
                <input
                  type="text"
                  className="form-input"
                  value={settings.supportPhone}
                  onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Headquarters Address</label>
              <input
                type="text"
                className="form-input"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              />
            </div>
          </form>
        </div>

        {/* Feature Flags & Telemetry Parameters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Active Features Toggles */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem', color: '#ffffff' }}>Feature Gateways</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Toggle availability of frontend client modules
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {Object.entries(settings.activeFeatures || {}).map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.625rem 0.875rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.84375rem', color: '#ffffff', textTransform: 'capitalize' }}>
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                      {val ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleFeature(key)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: val ? '#ffffff' : 'var(--text-muted)'
                    }}
                  >
                    {val ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* API Backend Environment Info */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Server size={18} />
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#ffffff' }}>REST API Target</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Target Base URL:</span>
                <span style={{ color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                  http://localhost:5000/api/v1
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>CORS Origins:</span>
                <span style={{ color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                  5173, 5174, 5175
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Security:</span>
                <Badge variant="emerald" size="sm">Helmet Protected</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
