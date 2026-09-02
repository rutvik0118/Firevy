import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  ExternalLink,
  Eye,
  Star,
  Plus,
  TrendingUp,
  Image as ImageIcon
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Modal from '../components/UI/Modal';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const CATEGORIES = ['All', 'AI', 'Web', 'Mobile', 'Cloud', 'E-commerce'];

const PortfolioPage = () => {
  const { addToast } = useToast();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    try {
      const params = activeCategory !== 'All' ? { category: activeCategory } : {};
      const response = await adminService.getPortfolio(params);
      if (response && response.data) {
        setProjects(response.data);
      }
    } catch {
      addToast('Could not fetch portfolio projects', 'error');
    } finally {
      setLoading(false);
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
      accessor: 'title',
      render: (val, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <img
            src={row.image || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80'}
            alt={val}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              objectFit: 'cover',
              border: '1px solid var(--border-subtle)'
            }}
          />
          <div>
            <div style={{ fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{val}</span>
              {row.isFeatured && (
                <span title="Featured Case Study">
                  <Star size={12} fill="#ffffff" color="#ffffff" />
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
      accessor: 'technologies',
      render: (techs) => (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', maxWidth: '280px' }}>
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
      header: 'Impact Metrics',
      accessor: 'results',
      render: (results) => (
        <span style={{ fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>
          {results && results[0] ? results[0] : 'Measured Impact'}
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'isFeatured',
      render: (featured) => (
        <Badge variant={featured ? 'white' : 'slate'}>
          {featured ? 'Featured' : 'Published'}
        </Badge>
      )
    },
    {
      header: 'Actions',
      accessor: '_id',
      sortable: false,
      render: (_, row) => (
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
        title="Portfolio Projects"
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
                  background: 'linear-gradient(to top, rgba(11, 15, 25, 0.95) 0%, transparent 60%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <Badge variant="white">{selectedProject.category}</Badge>
                    <Badge variant="slate">{selectedProject.industry}</Badge>
                    {selectedProject.isFeatured && <Badge variant="white">Featured</Badge>}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#ffffff' }}>
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fca5a5', marginBottom: '0.375rem', textTransform: 'uppercase' }}>
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', marginBottom: '0.375rem', textTransform: 'uppercase' }}>
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
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84375rem', color: '#ffffff' }}>
                    <TrendingUp size={15} style={{ color: '#34d399' }} />
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

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Add New Case Study"
        subtitle="Publish a new client engineering project"
        footer={
          <>
            <button onClick={() => setIsCreateModalOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button onClick={handleCreate} className="btn btn-primary">
              Publish Case Study
            </button>
          </>
        }
      >
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Next-Gen Autonomous Drone Fleet Platform"
              value={form.title}
              onChange={(e) => {
                const title = e.target.value;
                const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                setForm({ ...form, title, slug });
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Slug</label>
            <input
              type="text"
              className="form-input"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Industry</label>
              <select
                className="form-select"
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Logistics">Logistics</option>
                <option value="Real Estate">Real Estate</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="AI">AI</option>
                <option value="Web">Web</option>
                <option value="Mobile">Mobile</option>
                <option value="Cloud">Cloud</option>
                <option value="E-commerce">E-commerce</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Client Challenge</label>
            <textarea
              className="form-textarea"
              placeholder="What obstacle did the client face?"
              value={form.challenge}
              onChange={(e) => setForm({ ...form, challenge: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Delivered Solution</label>
            <textarea
              className="form-textarea"
              placeholder="How did the engineering team solve it?"
              value={form.solution}
              onChange={(e) => setForm({ ...form, solution: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Technologies (comma separated)</label>
            <input
              type="text"
              className="form-input"
              placeholder="React, Python, AWS, Docker"
              value={form.technologies}
              onChange={(e) => setForm({ ...form, technologies: e.target.value })}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PortfolioPage;
