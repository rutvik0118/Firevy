import React, { useState, useEffect } from 'react';
import {
  Users2,
  Briefcase,
  MapPin,
  Clock,
  Eye,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Drawer from '../components/UI/Drawer';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const JobsPage = () => {
  const { addToast } = useToast();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await adminService.getJobs();
      if (response && response.data) {
        setJobs(response.data);
      }
    } catch {
      addToast('Error fetching jobs, loaded from fallback', 'info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInspectJob = (job) => {
    setSelectedJob(job);
    setIsDrawerOpen(true);
  };

  const jobColumns = [
    {
      header: 'Position Title',
      accessor: 'title',
      render: (val, row) => (
        <div>
          <div style={{ fontWeight: 700, color: '#ffffff' }}>{val}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {row.department} · {row.experience}
          </div>
        </div>
      )
    },
    {
      header: 'Department',
      accessor: 'department',
      render: (dept) => (
        <Badge variant={dept === 'AI & Innovation' ? 'white' : 'slate'}>
          {dept}
        </Badge>
      )
    },
    {
      header: 'Location & Type',
      accessor: 'location',
      render: (loc) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          <MapPin size={13} style={{ color: '#ffffff' }} />
          <span>{loc}</span>
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'isActive',
      render: () => <Badge variant="emerald">Active</Badge>
    },
    {
      header: 'Actions',
      accessor: '_id',
      sortable: false,
      render: (_, row) => (
        <button onClick={() => handleInspectJob(row)} className="btn btn-secondary btn-sm">
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
            <Briefcase size={24} />
            <span>Job Positions & Careers</span>
          </h1>
          <p>Manage open engineering, AI, and design positions</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href="http://localhost:5000/api/v1/jobs"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            <span>API Route: /jobs</span>
          </a>
        </div>
      </div>

      <DataTable
        title="Open Positions"
        columns={jobColumns}
        data={jobs}
        searchKey="title"
        searchPlaceholder="Search jobs by title or department..."
      />

      {/* Job Details Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedJob?.title || 'Job Opening Spec'}
        subtitle={`${selectedJob?.department} · ${selectedJob?.location}`}
        width="640px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a
              href={`http://localhost:5000/api/v1/jobs/${selectedJob?._id || selectedJob?.slug}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={14} />
              <span>Test API Endpoint</span>
            </a>
            <button onClick={() => setIsDrawerOpen(false)} className="btn btn-secondary btn-sm">
              Close
            </button>
          </div>
        }
      >
        {selectedJob && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Badge variant="white">{selectedJob.department}</Badge>
                <Badge variant="slate">{selectedJob.type || 'Full-time'}</Badge>
                <Badge variant="slate">{selectedJob.experience}</Badge>
              </div>
              <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {selectedJob.description}
              </p>
            </div>

            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Key Responsibilities</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {selectedJob.responsibilities?.map((resp, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84375rem', color: '#ffffff' }}>
                    <CheckCircle2 size={15} style={{ color: '#ffffff', marginTop: '2px' }} />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="form-label" style={{ marginBottom: '0.5rem' }}>Qualifications & Requirements</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {selectedJob.requirements?.map((req, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84375rem', color: '#ffffff' }}>
                    <CheckCircle2 size={15} style={{ color: '#34d399', marginTop: '2px' }} />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default JobsPage;
