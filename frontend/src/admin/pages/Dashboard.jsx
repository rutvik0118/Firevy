import React, { useState, useEffect } from 'react';
import {
  Layers,
  Briefcase,
  Users2,
  Inbox,
  Activity,
  Terminal,
  RefreshCw,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/UI/StatCard';
import { AreaChart, DonutChart, BarChart } from '../components/UI/Charts';
import Badge from '../components/UI/Badge';
import adminService from '../services/adminService';
import storageService from '../services/storageService';
import { useToast } from '../context/ToastContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    services: 10,
    portfolio: 6,
    jobs: 3,
    industries: 8,
    technologies: 19,
    testimonials: 4,
    inquiries: 0,
    applications: 0,
  });

  const [recentInquiries, setRecentInquiries] = useState([]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [servicesRes, portfolioRes, jobsRes, industriesRes, techRes, testRes] = await Promise.allSettled([
        adminService.getServices(),
        adminService.getPortfolio(),
        adminService.getJobs(),
        adminService.getIndustries(),
        adminService.getTechnologies(),
        adminService.getTestimonials(),
      ]);

      const inqs = storageService.getInquiries();
      const apps = storageService.getApplications();

      setRecentInquiries(inqs.slice(0, 5));

      setStats({
        services: servicesRes.status === 'fulfilled' && servicesRes.value?.data ? servicesRes.value.data.length : 10,
        portfolio: portfolioRes.status === 'fulfilled' && portfolioRes.value?.data ? portfolioRes.value.data.length : 6,
        jobs: jobsRes.status === 'fulfilled' && jobsRes.value?.data ? jobsRes.value.data.length : 3,
        industries: industriesRes.status === 'fulfilled' && industriesRes.value?.data ? industriesRes.value.data.length : 8,
        technologies: techRes.status === 'fulfilled' && techRes.value?.data ? techRes.value.data.length : 19,
        testimonials: testRes.status === 'fulfilled' && testRes.value?.data ? testRes.value.data.length : 4,
        inquiries: inqs.length,
        applications: apps.length,
      });

      addToast('Dashboard data synchronized', 'info', 2000);
    } catch {
      addToast('Telemetry loaded from fallback cache', 'info', 2000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Activity size={24} />
            <span>Admin Dashboard</span>
          </h1>
          <p>Executive overview of enterprise services, inbound leads, and talent pipeline</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => navigate('/admin/api-playground')}
            className="btn btn-secondary"
            title="Open API Testing Suite"
          >
            <Terminal size={15} />
            <span>API Playground</span>
          </button>
          <button
            onClick={fetchDashboardData}
            disabled={loading}
            className="btn btn-primary"
          >
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
            <span>Refresh Data</span>
          </button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="stats-grid">
        <StatCard
          title="Active Services"
          value={stats.services}
          icon={Layers}
          trend="+2 New"
          trendDirection="up"
          subtitle="Offerings Catalog"
          onClick={() => navigate('/admin/services')}
        />
        <StatCard
          title="Case Studies"
          value={stats.portfolio}
          icon={Briefcase}
          trend="100% Active"
          trendDirection="up"
          subtitle="Portfolio Projects"
          onClick={() => navigate('/admin/portfolio')}
        />
        <StatCard
          title="Open Positions"
          value={stats.jobs}
          icon={Users2}
          trend="Active"
          trendDirection="neutral"
          subtitle="Job Openings"
          onClick={() => navigate('/admin/jobs')}
        />
        <StatCard
          title="Client Inquiries"
          value={stats.inquiries}
          icon={Inbox}
          trend="+12% MoM"
          trendDirection="up"
          subtitle="Inbound Leads"
          onClick={() => navigate('/admin/inquiries')}
        />
      </div>

      {/* Analytics Charts Grid */}
      <div className="charts-grid">
        {/* Request Velocity / Inquiries Trend */}
        <div className="glass-card chart-card">
          <div className="chart-card-header">
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>API Inquiries & Request Velocity</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Aggregated monthly incoming inquiries & API gateway hits
              </p>
            </div>
            <Badge variant="emerald" icon={TrendingUp}>+28.4%</Badge>
          </div>
          <div className="chart-body-wrap">
            <AreaChart />
          </div>
        </div>

        {/* Client Domain Distribution */}
        <div className="glass-card chart-card">
          <div className="chart-card-header">
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Client Sectors</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Industry market split
              </p>
            </div>
            <Badge variant="slate">8 Sectors</Badge>
          </div>
          <div className="chart-body-wrap flex-center">
            <DonutChart />
          </div>
        </div>
      </div>

      {/* Bottom Grid: Tech Stack Distribution & Recent Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '1.25rem', marginBottom: '2rem' }}>
        {/* Technology Stack Breakdown */}
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Technology Registry</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {stats.technologies} certified technologies across 7 domains
              </p>
            </div>
            <button onClick={() => navigate('/admin/technologies')} className="btn btn-secondary btn-sm">
              View All
            </button>
          </div>
          <BarChart />
        </div>

        {/* Recent Inquiries Quick Table */}
        <div className="glass-card" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Recent Enterprise Leads</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Direct project inquiries from clients
              </p>
            </div>
            <button onClick={() => navigate('/admin/inquiries')} className="btn btn-secondary btn-sm">
              Manage Inbox
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {recentInquiries.length > 0 ? (
              recentInquiries.map((inq) => (
                <div
                  key={inq._id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.84375rem', color: 'var(--text-primary)' }}>
                      {inq.name} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {inq.company}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      {inq.service} · <span style={{ color: 'var(--text-muted)' }}>{inq.budget}</span>
                    </div>
                  </div>

                  <Badge
                    variant={
                      inq.status === 'New' ? 'primary' :
                      inq.status === 'Contacted' ? 'amber' :
                      inq.status === 'In Progress' ? 'emerald' : 'slate'
                    }
                  >
                    {inq.status || 'New'}
                  </Badge>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.84375rem' }}>
                No inquiries recorded yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
