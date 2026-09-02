import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  ExternalLink
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const TestimonialsPage = () => {
  const { addToast } = useToast();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await adminService.getTestimonials();
      if (response && response.data) {
        setTestimonials(response.data);
      }
    } catch {
      addToast('Could not fetch testimonials from live API', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const columns = [
    {
      header: 'Client / Executive',
      accessor: 'name',
      render: (val, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src={row.image}
            alt={val}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid var(--border-medium)'
            }}
          />
          <div>
            <div style={{ fontWeight: 700, color: '#ffffff' }}>{val}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {row.designation} · <span style={{ color: 'var(--text-secondary)' }}>{row.company}</span>
            </div>
          </div>
        </div>
      )
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (rating) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < (rating || 5) ? '#ffffff' : 'none'}
              color={i < (rating || 5) ? '#ffffff' : '#6b7280'}
            />
          ))}
        </div>
      )
    },
    {
      header: 'Review Excerpt',
      accessor: 'review',
      render: (rev) => (
        <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          "{rev}"
        </span>
      )
    },
    {
      header: 'Status',
      accessor: 'isActive',
      render: () => <Badge variant="emerald">Verified</Badge>
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Star size={24} />
            <span>Client Testimonials & Feedback</span>
          </h1>
          <p>Verified executive reviews, enterprise client NPS scores, and customer sentiment</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="http://localhost:5000/api/v1/testimonials"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            <span>API Route: /testimonials</span>
          </a>
        </div>
      </div>

      {/* Grid of Testimonial Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        {testimonials.map((test, idx) => (
          <div key={idx} className="glass-card glass-card-hover" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < (test.rating || 5) ? '#ffffff' : 'none'}
                      color={i < (test.rating || 5) ? '#ffffff' : '#6b7280'}
                    />
                  ))}
                </div>
                <Quote size={16} style={{ color: 'var(--text-muted)' }} />
              </div>

              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>
                "{test.review}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
              <img
                src={test.image}
                alt={test.name}
                style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.84375rem', color: '#ffffff' }}>{test.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {test.designation} · <span style={{ color: 'var(--text-secondary)' }}>{test.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DataTable
        title="Testimonials Catalog"
        columns={columns}
        data={testimonials}
        searchKey="name"
        searchPlaceholder="Filter testimonials..."
      />
    </div>
  );
};

export default TestimonialsPage;
