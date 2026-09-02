import React, { useState, useEffect } from 'react';
import {
  FileText,
  UserCheck,
  Send,
  ExternalLink,
  Plus,
  Clock,
  Briefcase
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Modal from '../components/UI/Modal';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import storageService from '../services/storageService';
import { useToast } from '../context/ToastContext';

const STAGES = ['Applied', 'Screening', 'Interview', 'Offer', 'Rejected'];

const ApplicationsPage = () => {
  const { addToast } = useToast();
  const [candidates, setCandidates] = useState([]);
  const [isTestAppModalOpen, setIsTestAppModalOpen] = useState(false);
  const [submittingApp, setSubmittingApp] = useState(false);

  const [appForm, setAppForm] = useState({
    name: 'Alexander Wright',
    email: 'alex.wright@devmail.com',
    phone: '+1 (555) 234-5678',
    position: 'Senior Full-Stack MERN Engineer',
    resume: 'https://linkedin.com/in/alexander-wright-fullstack',
    message: 'Over 6 years of production experience architecting React frontends and Node.js microservices.'
  });

  const loadCandidates = () => {
    const list = storageService.getApplications();
    setCandidates(list);
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  const handleStageChange = (candidateId, newStage) => {
    const updated = storageService.updateApplicationStage(candidateId, newStage);
    setCandidates(updated);
    addToast(`Candidate moved to ${newStage}`, 'success');
  };

  const handleTestApplicationSubmit = async (e) => {
    e.preventDefault();
    setSubmittingApp(true);
    try {
      const result = await adminService.submitApplication(appForm);
      const updated = storageService.saveApplication({
        ...appForm,
        _id: result.data?._id || `app_${Date.now()}`,
        stage: 'Applied'
      });
      setCandidates(updated);
      setIsTestAppModalOpen(false);
      addToast('Application submitted to live backend API!', 'success');
    } catch (err) {
      addToast(`API submission error: ${err.message || 'Check server connection'}`, 'error');
    } finally {
      setSubmittingApp(false);
    }
  };

  const candidateColumns = [
    {
      header: 'Applicant Name',
      accessor: 'name',
      render: (val, row) => (
        <div>
          <div style={{ fontWeight: 700, color: '#ffffff' }}>{val}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.email} · {row.phone}</div>
        </div>
      )
    },
    {
      header: 'Applied Position',
      accessor: 'position',
      render: (pos) => <span style={{ fontWeight: 600, color: '#ffffff' }}>{pos}</span>
    },
    {
      header: 'Profile / Resume',
      accessor: 'resume',
      render: (res) => (
        <a
          href={res}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-sm"
          style={{ gap: '0.25rem', color: '#ffffff' }}
        >
          <span>View Profile</span>
          <ExternalLink size={12} />
        </a>
      )
    },
    {
      header: 'Applied Date',
      accessor: 'appliedAt',
      render: (date) => (
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {date ? new Date(date).toLocaleDateString() : 'Recent'}
        </span>
      )
    },
    {
      header: 'Hiring Stage',
      accessor: 'stage',
      render: (stage, row) => (
        <select
          className="form-select"
          style={{ padding: '0.25rem 0.5rem', fontSize: '0.8125rem', width: '130px' }}
          value={stage || 'Applied'}
          onChange={(e) => handleStageChange(row._id, e.target.value)}
        >
          {STAGES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <UserCheck size={26} />
            <span>Job Applications & Talent Pipeline</span>
          </h1>
          <p>Review candidate applications and test applicant submissions to the backend API</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setIsTestAppModalOpen(true)} className="btn btn-primary">
            <Send size={16} />
            <span>Submit Test Application</span>
          </button>
        </div>
      </div>

      <DataTable
        title="Talent Applications"
        columns={candidateColumns}
        data={candidates}
        searchKey="name"
        searchPlaceholder="Search candidates by name, position or email..."
        pageSize={10}
      />

      <Modal
        isOpen={isTestAppModalOpen}
        onClose={() => setIsTestAppModalOpen(false)}
        title="Submit Candidate Application (Live API Test)"
        subtitle="Sends real HTTP POST payload to /api/v1/applications"
        footer={
          <>
            <button onClick={() => setIsTestAppModalOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button
              onClick={handleTestApplicationSubmit}
              disabled={submittingApp}
              className="btn btn-primary"
            >
              {submittingApp ? 'Submitting...' : 'Execute POST /applications'}
            </button>
          </>
        }
      >
        <form onSubmit={handleTestApplicationSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={appForm.name}
              onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={appForm.email}
                onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-input"
                value={appForm.phone}
                onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-input"
              value={appForm.position}
              onChange={(e) => setAppForm({ ...appForm, position: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Resume / LinkedIn URL</label>
            <input
              type="url"
              className="form-input"
              value={appForm.resume}
              onChange={(e) => setAppForm({ ...appForm, resume: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Cover Message</label>
            <textarea
              className="form-textarea"
              value={appForm.message}
              onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ApplicationsPage;
