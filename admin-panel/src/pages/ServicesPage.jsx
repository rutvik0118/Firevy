import React, { useState, useEffect } from 'react';
import {
  Layers,
  Search,
  ExternalLink,
  Eye,
  CheckCircle2,
  Plus,
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Terminal,
  Shield,
  Users,
  Layout
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Modal from '../components/UI/Modal';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Globe': return <Globe size={18} />;
    case 'Smartphone': return <Smartphone size={18} />;
    case 'Code2': return <Code2 size={18} />;
    case 'Layout': return <Layout size={18} />;
    case 'Cpu': return <Cpu size={18} />;
    case 'Cloud': return <Cloud size={18} />;
    case 'Terminal': return <Terminal size={18} />;
    case 'ShieldCheck': return <Shield size={18} />;
    case 'Users': return <Users size={18} />;
    default: return <Layers size={18} />;
  }
};

const ServicesPage = () => {
  const { addToast } = useToast();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);

  const [draftForm, setDraftForm] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    description: '',
    icon: 'Code2',
    technologies: 'React, Node.js, AWS',
    features: 'Enterprise SLA, High-Availability Cloud',
  });

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await adminService.getServices();
      if (response && response.data) {
        setServices(response.data);
      }
    } catch {
      addToast('Could not fetch services from live API', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleViewService = (service) => {
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    if (!draftForm.title || !draftForm.slug) {
      addToast('Title and Slug are required', 'warning');
      return;
    }
    const newService = {
      ...draftForm,
      _id: `srv_${Date.now()}`,
      technologies: draftForm.technologies.split(',').map((t) => t.trim()),
      features: draftForm.features.split(',').map((f) => f.trim()),
      benefits: ['Accelerated time to market', 'Enterprise grade security'],
      process: [
        { step: 1, title: 'Discovery', description: 'Analyze requirements' },
        { step: 2, title: 'Engineering', description: 'Build microservices' }
      ],
      faq: [
        { question: 'What is the delivery timeline?', answer: '4 to 8 weeks agile sprints.' }
      ],
      isActive: true,
    };
    setServices([newService, ...services]);
    setIsDraftModalOpen(false);
    addToast(`Service "${draftForm.title}" registered locally`, 'success');
  };

  const columns = [
    {
      header: 'Service Offering',
      accessor: 'title',
      render: (val, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff'
            }}
          >
            {getServiceIcon(row.icon)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: '#ffffff' }}>{val}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              /services/{row.slug}
            </div>
          </div>
        </div>
      )
    },
    {
      header: 'Key Technologies',
      accessor: 'technologies',
      render: (techs) => (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', maxWidth: '300px' }}>
          {(techs || []).slice(0, 3).map((t, idx) => (
            <Badge key={idx} variant="slate" size="sm">
              {t}
            </Badge>
          ))}
          {(techs || []).length > 3 && (
            <Badge variant="white" size="sm">
              +{(techs || []).length - 3}
            </Badge>
          )}
        </div>
      )
    },
    {
      header: 'Delivery Process',
      accessor: 'process',
      render: (proc) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          {proc ? `${proc.length} Agile Steps` : '4 Steps'}
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'isActive',
      render: (active) => (
        <Badge variant={active !== false ? 'emerald' : 'rose'}>
          {active !== false ? 'Active' : 'Draft'}
        </Badge>
      )
    },
    {
      header: 'Actions',
      accessor: '_id',
      sortable: false,
      render: (_, row) => (
        <button
          onClick={() => handleViewService(row)}
          className="btn btn-secondary btn-sm"
          title="Inspect Service Spec"
        >
          <Eye size={14} />
          <span>Inspect</span>
        </button>
      )
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Layers size={24} />
            <span>Service Architecture Registry</span>
          </h1>
          <p>Manage enterprise engineering capabilities, tech stacks, and delivery processes</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => setIsDraftModalOpen(true)}
            className="btn btn-primary"
          >
            <Plus size={16} />
            <span>Add Service Spec</span>
          </button>
        </div>
      </div>

      {/* Services Table */}
      <DataTable
        title="Services"
        columns={columns}
        data={services}
        searchKey="title"
        searchPlaceholder="Filter services by title or slug..."
        pageSize={10}
      />

      {/* Service Detail Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedService?.title || 'Service Architecture'}
        subtitle={`Slug: /services/${selectedService?.slug}`}
        width="660px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a
              href={`http://localhost:5000/api/v1/services/${selectedService?.slug}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={14} />
              <span>Test API Endpoint</span>
            </a>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="btn btn-secondary btn-sm"
            >
              Close
            </button>
          </div>
        }
      >
        {selectedService && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Hero Summary */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b0f19' }}>
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff' }}>{selectedService.title}</h4>
                  <Badge variant="emerald" size="sm">Active</Badge>
                </div>
              </div>
              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedService.shortDescription}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Detailed Specification</h5>
              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedService.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Technology Stack</h5>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {selectedService.technologies?.map((tech, idx) => (
                  <Badge key={idx} variant="slate">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enterprise Features */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Enterprise Features</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedService.features?.map((f, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84375rem', color: '#ffffff' }}>
                    <CheckCircle2 size={15} style={{ color: '#34d399' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Agile Process Steps */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Engineering Lifecycle</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedService.process?.map((step) => (
                  <div
                    key={step.step}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: 'var(--radius-xs)',
                        background: 'var(--bg-secondary)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.84375rem', color: '#ffffff' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Create Service Draft Modal */}
      <Modal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        title="Register New Service Offering"
        subtitle="Create a new engineering service blueprint"
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsDraftModalOpen(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveDraft}
              className="btn btn-primary"
            >
              Save Service Spec
            </button>
          </>
        }
      >
        <form onSubmit={handleSaveDraft}>
          <div className="form-group">
            <label className="form-label">Service Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Blockchain & Smart Contract Audit"
              value={draftForm.title}
              onChange={(e) => {
                const title = e.target.value;
                const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                setDraftForm({ ...draftForm, title, slug });
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">URL Slug</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. blockchain-smart-contract-audit"
              value={draftForm.slug}
              onChange={(e) => setDraftForm({ ...draftForm, slug: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Short Description</label>
            <input
              type="text"
              className="form-input"
              placeholder="Brief value proposition"
              value={draftForm.shortDescription}
              onChange={(e) => setDraftForm({ ...draftForm, shortDescription: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Full Technical Description</label>
            <textarea
              className="form-textarea"
              placeholder="Detailed architecture and workflow description"
              value={draftForm.description}
              onChange={(e) => setDraftForm({ ...draftForm, description: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Technologies (comma separated)</label>
            <input
              type="text"
              className="form-input"
              placeholder="React, Solidity, Rust, Docker"
              value={draftForm.technologies}
              onChange={(e) => setDraftForm({ ...draftForm, technologies: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Features (comma separated)</label>
            <input
              type="text"
              className="form-input"
              placeholder="Automated auditing, 100% test coverage"
              value={draftForm.features}
              onChange={(e) => setDraftForm({ ...draftForm, features: e.target.value })}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ServicesPage;
