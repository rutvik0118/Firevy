import React, { useState, useEffect } from 'react';
import {
  Building2,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Plane,
  Factory,
  ExternalLink,
  Eye
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const getIndustryIcon = (iconName) => {
  switch (iconName) {
    case 'HeartPulse': return <HeartPulse size={18} />;
    case 'Landmark': return <Landmark size={18} />;
    case 'GraduationCap': return <GraduationCap size={18} />;
    case 'Building2': return <Building2 size={18} />;
    case 'ShoppingBag': return <ShoppingBag size={18} />;
    case 'Truck': return <Truck size={18} />;
    case 'Plane': return <Plane size={18} />;
    case 'Factory': return <Factory size={18} />;
    default: return <Building2 size={18} />;
  }
};

export const IndustriesPage = () => {
  const { addToast } = useToast();
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchIndustries = async () => {
    try {
      const response = await adminService.getIndustries();
      if (response && response.data) {
        setIndustries(response.data);
      }
    } catch {
      addToast('Could not fetch industries from live API', 'error');
    }
  };

  useEffect(() => {
    fetchIndustries();
  }, []);

  const handleInspect = (ind) => {
    setSelectedIndustry(ind);
    setIsDrawerOpen(true);
  };

  const columns = [
    {
      header: 'Industry Sector',
      field: 'name',
      sortable: true,
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image}
            alt={row.name}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              objectFit: 'cover',
              border: '1px solid var(--border-subtle)'
            }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{row.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/industries/{row.slug}</div>
          </div>
        </div>
      )
    },
    {
      header: 'Tailored Services',
      field: 'services',
      render: (row) => (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', maxWidth: '300px' }}>
          {(row.services || []).map((s, idx) => (
            <Badge key={idx} variant="slate" size="sm">
              {s}
            </Badge>
          ))}
        </div>
      )
    },
    {
      header: 'Sector Scope',
      field: 'description',
      render: (row) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {row.description}
        </span>
      )
    },
    {
      header: 'Actions',
      align: 'right',
      render: (row) => (
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
            <Building2 size={24} />
            <span>Vertical Industry Domains</span>
          </h1>
          <p>Enterprise industry solutions mapped to specialized software capabilities</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="http://localhost:5000/api/v1/industries"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            <span>API Route: /industries</span>
          </a>
        </div>
      </div>

      {/* Grid of Sector Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="glass-card glass-card-hover"
            style={{ overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => handleInspect(ind)}
          >
            <div style={{ height: '110px', position: 'relative' }}>
              <img
                src={ind.image}
                alt={ind.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.90) 0%, transparent 60%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ padding: '0.35rem', borderRadius: 'var(--radius-xs)', background: 'var(--primary)', color: '#FFFFFF' }}>
                  {getIndustryIcon(ind.icon)}
                </div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#FFFFFF' }}>{ind.name}</h4>
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {ind.description}
              </p>
              <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                {ind.services?.slice(0, 3).map((s, idx) => (
                  <Badge key={idx} variant="slate" size="sm">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <DataTable
        columns={columns}
        data={industries}
        searchKey="name"
        searchPlaceholder="Filter industries..."
      />

      {/* Industry Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedIndustry?.name || 'Industry Sector'}
        subtitle={`Domain Slug: /industries/${selectedIndustry?.slug}`}
        width="600px"
      >
        {selectedIndustry && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '180px' }}>
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Sector Description</h5>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedIndustry.description}
              </p>
            </div>

            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Associated Services</h5>
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {selectedIndustry.services?.map((s, idx) => (
                  <Badge key={idx} variant="slate">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default IndustriesPage;
