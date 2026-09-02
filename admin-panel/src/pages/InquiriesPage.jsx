import React, { useState, useEffect } from 'react';
import {
  Inbox,
  Send,
  Mail,
  Phone,
  Eye,
  CheckCircle2
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Modal from '../components/UI/Modal';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import storageService from '../services/storageService';
import { useToast } from '../context/ToastContext';

const STATUS_LIST = ['New', 'Contacted', 'In Progress', 'Closed', 'Won'];

const InquiriesPage = () => {
  const { addToast } = useToast();
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: 'Harrison Sterling',
    email: 'hsterling@quantumlogix.com',
    phone: '+1 (212) 555-8833',
    company: 'QuantumLogix AI',
    service: 'AI & Machine Learning',
    budget: '$50,000 - $100,000',
    message: 'We require a custom RAG architecture and LLM reasoning engine to process high-volume legal contracts.'
  });

  const loadInquiries = () => {
    const list = storageService.getInquiries();
    setInquiries(list);
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = storageService.updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    addToast(`Inquiry status updated to ${newStatus}`, 'success');
  };

  const handleInspect = (inq) => {
    setSelectedInquiry(inq);
    setIsDrawerOpen(true);
  };

  const handleTestInquirySubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await adminService.submitContactInquiry(contactForm);
      const newInquiry = {
        ...contactForm,
        _id: response.data?._id || `inq_${Date.now()}`,
        status: 'New'
      };
      const updated = storageService.saveInquiry(newInquiry);
      setInquiries(updated);
      setIsTestModalOpen(false);
      addToast(response.message || 'Inquiry submitted to live backend API!', 'success');
    } catch (err) {
      addToast(`API submission error: ${err.message || 'Check server connection'}`, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const columns = [
    {
      header: 'Client / Company',
      accessor: 'name',
      render: (val, row) => (
        <div>
          <div style={{ fontWeight: 700, color: '#ffffff' }}>{val}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {row.company || 'Private Client'} · {row.email}
          </div>
        </div>
      )
    },
    {
      header: 'Service Interested',
      accessor: 'service',
      render: (srv) => <Badge variant="white">{srv}</Badge>
    },
    {
      header: 'Project Budget',
      accessor: 'budget',
      render: (b) => (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>
          {b}
        </span>
      )
    },
    {
      header: 'Received',
      accessor: 'createdAt',
      render: (date) => (
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {date ? new Date(date).toLocaleDateString() : 'Recent'}
        </span>
      )
    },
    {
      header: 'Lead Status',
      accessor: 'status',
      render: (status, row) => (
        <select
          className="form-select"
          style={{ padding: '0.25rem 0.5rem', fontSize: '0.8125rem', width: '130px' }}
          value={status || 'New'}
          onChange={(e) => handleStatusChange(row._id, e.target.value)}
        >
          {STATUS_LIST.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      )
    },
    {
      header: 'Actions',
      accessor: '_id',
      sortable: false,
      render: (_, row) => (
        <button onClick={() => handleInspect(row)} className="btn btn-secondary btn-sm">
          <Eye size={14} />
          <span>Inspect</span>
        </button>
      )
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Inbox size={24} />
            <span>Inquiries & Enterprise Leads</span>
          </h1>
          <p>Review inbound customer requests, manage pipeline stages, and test live contact endpoints</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setIsTestModalOpen(true)} className="btn btn-primary">
            <Send size={15} />
            <span>Submit Test Inquiry (API)</span>
          </button>
        </div>
      </div>

      <DataTable
        title="Inquiries"
        columns={columns}
        data={inquiries}
        searchKey="name"
        searchPlaceholder="Search leads by client name, email, or company..."
        pageSize={10}
      />

      {/* Inquiry Detail Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedInquiry?.company || selectedInquiry?.name || 'Inquiry Spec'}
        subtitle={`Submitted by ${selectedInquiry?.name}`}
        width="620px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a
              href={`mailto:${selectedInquiry?.email}`}
              className="btn btn-primary btn-sm"
            >
              <Mail size={14} />
              <span>Send Direct Email</span>
            </a>
            <button onClick={() => setIsDrawerOpen(false)} className="btn btn-secondary btn-sm">
              Close
            </button>
          </div>
        }
      >
        {selectedInquiry && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Lead Meta Box */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Client Name</span>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9375rem' }}>{selectedInquiry.name}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Company / Org</span>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.9375rem' }}>{selectedInquiry.company || 'N/A'}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</span>
                  <div style={{ color: '#ffffff', fontSize: '0.84375rem' }}>{selectedInquiry.email}</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</span>
                  <div style={{ color: '#ffffff', fontSize: '0.84375rem' }}>{selectedInquiry.phone || 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Service & Budget Breakdown */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Target Service</span>
                <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {selectedInquiry.service}
                </div>
              </div>

              <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Estimated Budget</span>
                <div style={{ fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {selectedInquiry.budget}
                </div>
              </div>
            </div>

            {/* Client Message */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Project Scope / Client Message</h5>
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  fontSize: '0.875rem'
                }}
              >
                {selectedInquiry.message}
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Test Lead Submission Modal */}
      <Modal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        title="Submit Lead via Live API (POST /contact)"
        subtitle="Tests backend mailer notification and database storage"
        footer={
          <>
            <button onClick={() => setIsTestModalOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button
              onClick={handleTestInquirySubmit}
              disabled={submitting}
              className="btn btn-primary"
            >
              {submitting ? 'Submitting...' : 'Execute POST /contact'}
            </button>
          </>
        }
      >
        <form onSubmit={handleTestInquirySubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input
                type="email"
                className="form-input"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-input"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-input"
                value={contactForm.company}
                onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Budget Tier</label>
              <select
                className="form-select"
                value={contactForm.budget}
                onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
              >
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000+">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Service Required</label>
            <select
              className="form-select"
              value={contactForm.service}
              onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="AI & Machine Learning">AI & Machine Learning</option>
              <option value="Cloud Solutions">Cloud Solutions</option>
              <option value="API Development">API Development</option>
              <option value="Dedicated Developers">Dedicated Developers</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Requirements</label>
            <textarea
              className="form-textarea"
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              required
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default InquiriesPage;
