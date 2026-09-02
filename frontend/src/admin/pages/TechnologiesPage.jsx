import React, { useState, useEffect } from 'react';
import {
  Cpu,
  ExternalLink
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'DevOps', 'AI'];

export const TechnologiesPage = () => {
  const { addToast } = useToast();
  const [technologies, setTechnologies] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const fetchTechnologies = async () => {
    try {
      const response = await adminService.getTechnologies();
      if (response && response.data) {
        setTechnologies(response.data);
      }
    } catch {
      addToast('Could not fetch technologies from live API', 'error');
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  const columns = [
    {
      header: 'Technology',
      field: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--primary-light)',
              border: '1px solid rgba(0, 107, 143, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: 'var(--primary)'
            }}
          >
            {row.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.category}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Domain Category',
      field: 'category',
      render: (row) => <Badge variant="slate">{row.category}</Badge>
    },
    {
      header: 'Description & Capabilities',
      field: 'description',
      render: (row) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          {row.description}
        </span>
      )
    },
    {
      header: 'Status',
      field: 'isActive',
      render: () => <Badge variant="emerald">Certified</Badge>
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Cpu size={24} />
            <span>Enterprise Technology Registry</span>
          </h1>
          <p>Core language runtimes, cloud platforms, AI libraries, and DevOps tooling</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="http://localhost:5000/api/v1/technologies"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            <span>API Route: /technologies</span>
          </a>
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

      {/* Grid of Tech Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        {filteredTechnologies.map((tech) => (
          <div key={tech.name} className="glass-card glass-card-hover" style={{ padding: '1.125rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.625rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-xs)',
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.75rem'
                  }}
                >
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{tech.name}</h4>
                  <Badge variant="slate" size="sm">
                    {tech.category}
                  </Badge>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={filteredTechnologies}
        searchKey="name"
        searchPlaceholder="Filter technologies..."
      />
    </div>
  );
};

export default TechnologiesPage;
