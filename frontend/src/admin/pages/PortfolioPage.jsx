import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  ExternalLink,
  Eye,
  Star,
  Plus,
  TrendingUp
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Modal from '../components/UI/Modal';
import Badge from '../components/UI/Badge';
import { AdminEditModal, AdminFormSection, AdminFormGrid, AdminFormField } from '../components/UI/AdminEditLayout';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const CATEGORIES = ['All', 'AI', 'Web', 'Mobile', 'Cloud', 'E-commerce'];

export const PortfolioPage = () => {
  const { addToast } = useToast();
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    industry: 'Healthcare',
    category: 'AI',
    shortDescription: '',
    challenge: '',
    solution: '',
    technologies: 'React, Node.js, Python',
    isFeatured: true,
  });

  const fetchPortfolio = async () => {
    try {
      const params = activeCategory !== 'All' ? { category: activeCategory } : {};
      const response = await adminService.getPortfolio(params);
      if (response && response.data) {
        setProjects(response.data);
      }
    } catch {
      addToast('Could not fetch portfolio projects', 'error');
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, [activeCategory]);

  const handleInspect = (project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!form.title || !form.slug) {
      addToast('Title and Slug are required', 'warning');
      return;
    }
    const newProj = {
      ...form,
      _id: `proj_${Date.now()}`,
      technologies: form.technologies.split(',').map((t) => t.trim()),
      results: ['+45% Operational Speed', '99.9% System Uptime'],
      features: ['Automated Data Pipeline', 'Role-Based Access Control'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      isActive: true,
    };
    setProjects([newProj, ...projects]);
    setIsCreateModalOpen(false);
    addToast(`Case study "${form.title}" registered!`, 'success');
  };

  const columns = [
    {
      header: 'Project / Case Study',
      field: 'title',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <img
            src={row.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80'}
            alt={row.title}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              objectFit: 'cover',
              border: '1px solid var(--border-subtle)'
            }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{row.title}</span>
              {row.isFeatured && (
                <span title="Featured Case Study">
                  <Star size={12} fill="var(--primary)" color="var(--primary)" />
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {row.industry} · <span style={{ color: 'var(--text-secondary)' }}>{row.category}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      header: 'Technologies',
      field: 'technologies',
      render: (row) => (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', maxWidth: '280px' }}>
          {(row.technologies || []).slice(0, 3).map((t, idx) => (
            <Badge key={idx} variant="slate" size="sm">
              {t}
            </Badge>
          ))}
          {(row.technologies || []).length > 3 && (
            <Badge variant="primary" size="sm">
              +{(row.technologies || []).length - 3}
            </Badge>
          )}
        </div>
      )
    },
    {
      header: 'Impact Metrics',
      field: 'results',
      render: (row) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 600 }}>
          {row.results && row.results[0] ? row.results[0] : 'Measured Impact'}
        </span>
      )
    },
    {
      header: 'Status',
      field: 'isFeatured',
      render: (row) => (
        <Badge variant={row.isFeatured ? 'primary' : 'slate'}>
          {row.isFeatured ? 'Featured' : 'Published'}
        </Badge>
      )
    },
    {
      header: 'Actions',
      align: 'right',
      render: (row) => (
        <button
          onClick={() => handleInspect(row)}
          className="btn btn-secondary btn-sm"
        >
          <Eye size={14} />
          <span>Inspect</span>
        </button>
      )
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Top Bar */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Briefcase size={24} />
            <span>Case Studies & Portfolio</span>
          </h1>
          <p>Inspect engineering achievements, client metrics, and delivered enterprise software</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => setIsCreateModalOpen(true)} className="btn btn-primary">
            <Plus size={16} />
            <span>Add Case Study</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={projects}
        searchKey="title"
        searchPlaceholder="Filter case studies by title or industry..."
        pageSize={10}
      />

      {/* Case Study Inspector Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedProject?.title || 'Case Study Details'}
        subtitle={`${selectedProject?.industry} · ${selectedProject?.category}`}
        width="680px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a
              href={`http://localhost:5000/api/v1/portfolio/${selectedProject?.slug}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={14} />
              <span>Test API Route</span>
            </a>
            <button onClick={() => setIsDrawerOpen(false)} className="btn btn-secondary btn-sm">
              Close
            </button>
          </div>
        }
      >
        {selectedProject && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Cover Image */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '200px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.90) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Badge variant="primary">{selectedProject.category}</Badge>
                    <Badge variant="slate">{selectedProject.industry}</Badge>
                    {selectedProject.isFeatured && <Badge variant="primary">Featured</Badge>}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Executive Summary</h5>
              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedProject.description || selectedProject.shortDescription}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#DC2626', marginBottom: '0.375rem', textTransform: 'uppercase' }}>
                  The Challenge
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedProject.challenge || 'High latency and manual processing bottlenecked operations.'}
                </p>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', marginBottom: '0.375rem', textTransform: 'uppercase' }}>
                  The Solution
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {selectedProject.solution || 'Engineered scalable microservices and real-time data sync.'}
                </p>
              </div>
            </div>

            {/* Key Deliverable Results */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Impact & Verified Metrics</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {selectedProject.results?.map((res, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                    <TrendingUp size={15} style={{ color: '#059669' }} />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Technologies Used</h5>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {selectedProject.technologies?.map((tech, idx) => (
                  <Badge key={idx} variant="slate">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* Create Case Study Professional Modal */}
      <AdminEditModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Add New Case Study"
        subtitle="Register an enterprise digital product case study and client solution"
        isActive={form.isFeatured !== false}
        onToggleStatus={() => setForm({ ...form, isFeatured: !form.isFeatured })}
        onSave={handleCreate}
        saveLabel="Publish Case Study"
        cancelLabel="Cancel"
        maxWidth="860px"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <AdminFormSection title="Case Study Core Information">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Project Title" required fullWidth>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Next-Gen Autonomous Drone Fleet Platform"
                  value={form.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    setForm({ ...form, title, slug });
                  }}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                  required
                />
              </AdminFormField>

              <AdminFormField label="URL Slug" required>
                <input
                  type="text"
                  className="form-control"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                  required
                />
              </AdminFormField>

              <AdminFormField label="Industry">
                <select
                  className="form-control"
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
              </AdminFormField>

              <AdminFormField label="Technology Category">
                <select
                  className="form-control"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <option value="AI">AI & Machine Learning</option>
                  <option value="Web">Web Engineering</option>
                  <option value="Mobile">Mobile Application</option>
                  <option value="Cloud">Cloud & DevOps</option>
                  <option value="E-commerce">Enterprise E-commerce</option>
                </select>
              </AdminFormField>

              <AdminFormField label="Technologies Used (comma separated)" fullWidth>
                <input
                  type="text"
                  className="form-control"
                  placeholder="React, Python, AWS, Docker"
                  value={form.technologies}
                  onChange={(e) => setForm({ ...form, technologies: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF'
                  }}
                />
              </AdminFormField>
            </AdminFormGrid>
          </AdminFormSection>

          <AdminFormSection title="Narrative & Solution Details">
            <AdminFormGrid columns={2}>
              <AdminFormField label="Client Challenge" fullWidth>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="What operational bottleneck or business obstacle did the client face?"
                  value={form.challenge}
                  onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #CBD5E1',
                    fontSize: '13px',
                    color: '#0F172A',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'inherit'
                  }}
                />
              </AdminFormField>

              <AdminFormField label="Delivered Engineering Solution" fullWidth>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="How did our engineering pod architect and deploy the solution?"
                  value={form.solution}
                  onChange={(e) => setForm({ ...form, solution: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
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
        </div>
      </AdminEditModal>
    </div>
  );
};

export default PortfolioPage;
