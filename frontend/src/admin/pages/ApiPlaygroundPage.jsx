import React, { useState } from 'react';
import {
  Terminal,
  Play,
  Clock,
  Send
} from 'lucide-react';
import Badge from '../components/UI/Badge';
import JsonViewer from '../components/UI/JsonViewer';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const PRESET_ENDPOINTS = [
  { method: 'GET', endpoint: '/health', label: 'System Health Check', body: '' },
  { method: 'GET', endpoint: '/admin/me', label: 'Verify Admin Token (/admin/me)', body: '' },
  { method: 'GET', endpoint: '/services', label: 'List All Services', body: '' },
  { method: 'GET', endpoint: '/services/web-development', label: 'Get Service by Slug', body: '' },
  { method: 'GET', endpoint: '/portfolio', label: 'List All Case Studies', body: '' },
  { method: 'GET', endpoint: '/portfolio?category=AI', label: 'Filter Portfolio (AI)', body: '' },
  { method: 'GET', endpoint: '/jobs', label: 'List Open Job Positions', body: '' },
  { method: 'GET', endpoint: '/industries', label: 'List Industry Sectors', body: '' },
  { method: 'GET', endpoint: '/technologies', label: 'List Tech Registry', body: '' },
  { method: 'GET', endpoint: '/testimonials', label: 'List Testimonials', body: '' },
  { method: 'GET', endpoint: '/settings', label: 'Get System Settings', body: '' },
  {
    method: 'POST',
    endpoint: '/contact',
    label: 'Submit Contact Lead',
    body: JSON.stringify(
      {
        name: 'Jordan Belfort',
        email: 'jordan@strattonglobal.com',
        phone: '+1 (555) 902-1200',
        company: 'Stratton Global Capital',
        service: 'Software Development',
        budget: '$100,000+',
        message: 'Looking for a dedicated engineering pod to build an automated asset management platform.'
      },
      null,
      2
    )
  },
  {
    method: 'POST',
    endpoint: '/applications',
    label: 'Submit Job Application',
    body: JSON.stringify(
      {
        name: 'Samantha Ray',
        email: 'sray@devopslead.io',
        phone: '+1 (555) 304-9876',
        position: 'Senior Full-Stack MERN Engineer',
        resume: 'https://github.com/samantharays',
        message: 'Experienced senior full-stack engineer passionate about cloud-native distributed apps.'
      },
      null,
      2
    )
  }
];

export const ApiPlaygroundPage = () => {
  const { addToast } = useToast();
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('/health');
  const [requestBody, setRequestBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSelectPreset = (preset) => {
    setMethod(preset.method);
    setEndpoint(preset.endpoint);
    setRequestBody(preset.body || '');
  };

  const handleExecuteRequest = async () => {
    setLoading(true);
    setResponse(null);

    let parsedData = null;
    if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && requestBody.trim()) {
      try {
        parsedData = JSON.parse(requestBody);
      } catch {
        setLoading(false);
        addToast('Invalid JSON in request payload', 'error');
        return;
      }
    }

    try {
      const res = await adminService.executeRawRequest({
        method,
        endpoint,
        data: parsedData
      });
      setResponse(res);
      if (res.success) {
        addToast(`Executed ${method} ${endpoint} successfully`, 'success', 2000);
      } else {
        addToast(`Response status ${res.status}: ${res.statusText}`, 'warning', 2500);
      }
    } catch (err) {
      setResponse({
        success: false,
        status: 500,
        statusText: 'Network / Connection Error',
        durationMs: 0,
        error: err.message || 'Failed to communicate with API server'
      });
      addToast('Request execution failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Terminal size={24} />
            <span>Interactive REST API Playground</span>
          </h1>
          <p>Live endpoint inspection, payload tester, and telemetry latency monitor</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={handleExecuteRequest}
            disabled={loading}
            className="btn btn-primary"
          >
            <Play size={15} fill="#FFFFFF" />
            <span>{loading ? 'Executing...' : 'Execute Request'}</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.25rem' }}>
        {/* Preset Endpoints Sidebar */}
        <div className="glass-card" style={{ padding: '1.25rem', height: 'fit-content' }}>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Pre-Configured Routes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {PRESET_ENDPOINTS.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(preset)}
                className="btn btn-ghost"
                style={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  padding: '0.5rem 0.625rem',
                  fontSize: '0.8125rem',
                  backgroundColor: endpoint === preset.endpoint && method === preset.method ? 'var(--primary-light)' : 'transparent',
                  border: endpoint === preset.endpoint && method === preset.method ? '1px solid var(--border-focus)' : '1px solid transparent'
                }}
              >
                <Badge
                  variant={preset.method === 'GET' ? 'primary' : 'slate'}
                  size="sm"
                  style={{ minWidth: '42px', justifyContent: 'center' }}
                >
                  {preset.method}
                </Badge>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--text-primary)' }}>
                  {preset.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* API Request & Response Builder */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Request Header Bar */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <select
                className="form-select"
                style={{ width: '100px', fontWeight: 700, color: 'var(--text-primary)' }}
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>

              <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '240px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '0.625rem 0.875rem',
                    border: '1px solid var(--border-medium)',
                    borderRight: 'none',
                    borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem'
                  }}
                >
                  http://localhost:5000/api/v1
                </span>
                <input
                  type="text"
                  className="form-input"
                  style={{ borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontFamily: 'var(--font-mono)' }}
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  placeholder="/health"
                />
              </div>

              <button
                onClick={handleExecuteRequest}
                disabled={loading}
                className="btn btn-primary"
              >
                <Send size={15} />
                <span>Send</span>
              </button>
            </div>

            {/* Request Body Editor */}
            {['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) && (
              <div style={{ marginTop: '1rem' }}>
                <label className="form-label">Request JSON Payload</label>
                <textarea
                  className="form-textarea"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', minHeight: '120px' }}
                  value={requestBody}
                  onChange={(e) => setRequestBody(e.target.value)}
                  placeholder="{ 'key': 'value' }"
                />
              </div>
            )}
          </div>

          {/* Response Payload Viewer */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>Live Response Payload</h3>
                {response && (
                  <>
                    <Badge variant={response.status >= 200 && response.status < 300 ? 'emerald' : 'rose'}>
                      Status: {response.status} {response.statusText}
                    </Badge>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} />
                      {response.durationMs}ms
                    </span>
                  </>
                )}
              </div>
            </div>

            {response ? (
              <JsonViewer data={response.data || response.error || response} />
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                <Terminal size={28} style={{ margin: '0 auto 0.5rem', opacity: 0.4 }} />
                <p style={{ fontSize: '0.84375rem' }}>
                  Select an endpoint and click <strong>Execute Request</strong> to test live responses
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPlaygroundPage;
