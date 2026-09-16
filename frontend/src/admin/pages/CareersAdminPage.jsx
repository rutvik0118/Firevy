import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Save,
  RotateCcw,
  ExternalLink,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  XCircle,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Users,
  Award,
  Heart,
  Calendar,
  BookOpen,
  Globe,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
  PartyPopper,
  Play,
  ArrowUp,
  ArrowDown,
  Layers,
  FileText,
  AlertCircle
} from 'lucide-react';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';
import Modal from '../../components/common/Modal';

const AVAILABLE_ICONS = [
  { name: 'Users', icon: Users },
  { name: 'TrendingUp', icon: TrendingUp },
  { name: 'Sparkles', icon: Sparkles },
  { name: 'Heart', icon: Heart },
  { name: 'PartyPopper', icon: PartyPopper },
  { name: 'Award', icon: Award },
  { name: 'Calendar', icon: Calendar },
  { name: 'BookOpen', icon: BookOpen },
  { name: 'Globe', icon: Globe },
  { name: 'Briefcase', icon: Briefcase },
  { name: 'ShieldCheck', icon: ShieldCheck },
  { name: 'HeartPulse', icon: HeartPulse }
];

export const CareersAdminPage = () => {
  const { addToast } = useToast();

  const [activeTab, setActiveTab] = useState('hero');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Careers Page CMS State
  const [pageData, setPageData] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  // Jobs State
  const [jobs, setJobs] = useState([]);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobFormData, setJobFormData] = useState({
    title: '',
    department: 'Engineering',
    location: 'Ahmedabad, India / Hybrid',
    type: 'Full-time',
    experience: '1 - 3 Years',
    openings: 1,
    urgent: false,
    status: 'published',
    isActive: true,
    description: '',
    requirements: [''],
    responsibilities: ['']
  });

  // Media Upload State
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch Careers CMS & Jobs Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [cmsRes, jobsRes] = await Promise.all([
        adminService.getCareerPageAdmin(),
        adminService.getAdminJobs()
      ]);

      if (cmsRes && cmsRes.data) {
        setPageData(cmsRes.data);
        setOriginalData(JSON.parse(JSON.stringify(cmsRes.data)));
      }
      if (jobsRes && jobsRes.data) {
        setJobs(jobsRes.data);
      }
    } catch (err) {
      console.error('[Careers Admin Error]', err);
      addToast('Loaded Careers configuration with defaults', 'info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFieldChange = (section, field, value) => {
    setPageData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setHasUnsavedChanges(true);
  };

  const handleArrayItemChange = (arrayKey, index, field, value) => {
    setPageData((prev) => {
      const updatedArray = [...prev[arrayKey]];
      updatedArray[index] = {
        ...updatedArray[index],
        [field]: value
      };
      return {
        ...prev,
        [arrayKey]: updatedArray
      };
    });
    setHasUnsavedChanges(true);
  };

  const handleSaveCMS = async () => {
    setSaving(true);
    try {
      const res = await adminService.updateCareerPage(pageData);
      if (res && res.data) {
        setPageData(res.data);
        setOriginalData(JSON.parse(JSON.stringify(res.data)));
        setHasUnsavedChanges(false);
        addToast('Careers Page content saved successfully!', 'success');
      }
    } catch (err) {
      console.error('[Save Error]', err);
      addToast(err.message || 'Failed to save changes', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleResetUnsaved = () => {
    if (originalData) {
      setPageData(JSON.parse(JSON.stringify(originalData)));
      setHasUnsavedChanges(false);
      addToast('Unsaved changes discarded', 'info');
    }
  };

  const handleImageUpload = async (e, onUploadSuccess) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const res = await adminService.uploadMedia(file, 'image');
      if (res && res.data && res.data.fileUrl) {
        onUploadSuccess(res.data.fileUrl);
        setHasUnsavedChanges(true);
        addToast('Image uploaded successfully', 'success');
      }
    } catch (err) {
      console.error('[Upload Error]', err);
      addToast('Failed to upload image', 'error');
    } finally {
      setUploadingImage(false);
    }
  };

  // Job Modal Handlers
  const handleOpenAddJob = () => {
    setEditingJob(null);
    setJobFormData({
      title: '',
      department: 'Engineering',
      location: 'Ahmedabad, India / Hybrid',
      type: 'Full-time',
      experience: '1 - 3 Years',
      openings: 1,
      urgent: false,
      status: 'published',
      isActive: true,
      description: '',
      requirements: [''],
      responsibilities: ['']
    });
    setIsJobModalOpen(true);
  };

  const handleOpenEditJob = (job) => {
    setEditingJob(job);
    setJobFormData({
      title: job.title || '',
      department: job.department || 'Engineering',
      location: job.location || '',
      type: job.type || 'Full-time',
      experience: job.experience || '',
      openings: job.openings || 1,
      urgent: !!job.urgent,
      status: job.status || 'published',
      isActive: job.isActive !== undefined ? job.isActive : true,
      description: job.description || '',
      requirements: job.requirements?.length ? [...job.requirements] : [''],
      responsibilities: job.responsibilities?.length ? [...job.responsibilities] : ['']
    });
    setIsJobModalOpen(true);
  };

  const handleSaveJob = async (e) => {
    e.preventDefault();
    if (!jobFormData.title.trim()) {
      addToast('Position title is required', 'error');
      return;
    }

    const payload = {
      ...jobFormData,
      requirements: jobFormData.requirements.filter((r) => r.trim()),
      responsibilities: jobFormData.responsibilities.filter((r) => r.trim())
    };

    try {
      if (editingJob) {
        await adminService.updateJob(editingJob._id, payload);
        addToast('Job opening updated successfully', 'success');
      } else {
        await adminService.createJob(payload);
        addToast('New job opening created successfully', 'success');
      }
      setIsJobModalOpen(false);
      const jobsRes = await adminService.getAdminJobs();
      if (jobsRes && jobsRes.data) {
        setJobs(jobsRes.data);
      }
    } catch (err) {
      console.error('[Save Job Error]', err);
      addToast(err.message || 'Failed to save job opening', 'error');
    }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job opening?')) return;

    try {
      await adminService.deleteJob(id);
      setJobs((prev) => prev.filter((j) => j._id !== id));
      addToast('Job position deleted', 'info');
    } catch (err) {
      console.error('[Delete Job Error]', err);
      addToast('Failed to delete job', 'error');
    }
  };

  const handleToggleJobStatus = async (job) => {
    try {
      await adminService.toggleJobStatus(job._id);
      setJobs((prev) =>
        prev.map((j) => (j._id === job._id ? { ...j, isActive: !j.isActive } : j))
      );
      addToast(`Job is now ${!job.isActive ? 'Active' : 'Inactive'}`, 'success');
    } catch (err) {
      console.error('[Toggle Job Error]', err);
      addToast('Failed to update status', 'error');
    }
  };

  if (loading || !pageData) {
    return (
      <div className="page-container flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#006B8F] border-t-transparent rounded-full animate-spin" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Loading Careers CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      {/* Top Action Bar */}
      <div className="page-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="page-title-group">
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
            <Briefcase size={22} style={{ color: 'var(--primary)' }} />
            <span>Company → Careers (Jobs) Management</span>
          </h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Manage Hero, Tabs, Value Pillars, Benefits, Photo Gallery, Hiring Stages, Open Positions, Stats, and Testimonials
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
          <a
            href="http://localhost:5173/careers"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
            title="Preview Live Careers Page"
          >
            <ExternalLink size={14} />
            <span>Preview Website</span>
          </a>

          {hasUnsavedChanges && (
            <button
              onClick={handleResetUnsaved}
              className="btn btn-ghost btn-sm"
              style={{ color: '#EF4444' }}
              title="Discard unsaved edits"
            >
              <RotateCcw size={14} />
              <span>Reset Unsaved</span>
            </button>
          )}

          <button
            onClick={handleSaveCMS}
            disabled={saving}
            className="btn btn-primary btn-sm"
            style={{ minWidth: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem' }}
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Save size={15} />
            )}
            <span>{saving ? 'Saving...' : 'Save Changes'}</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.375rem',
          padding: '0.375rem',
          backgroundColor: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          overflowX: 'auto',
          marginBottom: '1.25rem'
        }}
      >
        {[
          { id: 'hero', label: '1. Hero & Overview' },
          { id: 'whoWeAre', label: '2. Who We Are' },
          { id: 'whyFirevy', label: '3. Why Firevy (4 Pillars)' },
          { id: 'benefits', label: `4. Benefits (${pageData.benefits?.length || 12})` },
          { id: 'lifeAtFirevy', label: `5. Life Gallery (${pageData.lifeAtFirevy?.length || 7})` },
          { id: 'hiringProcess', label: `6. Hiring Steps (${pageData.hiringProcess?.length || 5})` },
          { id: 'jobs', label: `7. Current Openings (${jobs.length})` },
          { id: 'visionStats', label: '8. Vision & Stats' },
          { id: 'people', label: `9. Our People (${pageData.peopleTestimonials?.length || 6})` },
          { id: 'ctaSocial', label: '10. Social Media & CTA' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '0.8125rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#006B8F' : 'var(--text-secondary)',
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                border: 'none',
                boxShadow: isActive ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 180ms ease'
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ============================================================
          TAB 1: HERO SECTION & META
          ============================================================ */}
      {activeTab === 'hero' && (
        <div className="card space-y-5" style={{ padding: '1.5rem' }}>
          <div className="card-header" style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Hero Banner Content</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Configure the primary headline, introduction paragraph, and visual artwork.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label">Hero Title *</label>
              <input
                type="text"
                className="form-input"
                value={pageData.hero?.title || ''}
                onChange={(e) => handleFieldChange('hero', 'title', e.target.value)}
                placeholder="Build your Future with us"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Hero Badge / Sub-label</label>
              <input
                type="text"
                className="form-input"
                value={pageData.hero?.badge || ''}
                onChange={(e) => handleFieldChange('hero', 'badge', e.target.value)}
                placeholder="e.g. Careers at firevy.co"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Hero Description *</label>
            <textarea
              className="form-textarea"
              rows={4}
              value={pageData.hero?.description || ''}
              onChange={(e) => handleFieldChange('hero', 'description', e.target.value)}
              placeholder="Our team is the heart of everything we do..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Hero Custom Image / Illustration URL</label>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                className="form-input"
                style={{ flex: 1 }}
                value={pageData.hero?.image || ''}
                onChange={(e) => handleFieldChange('hero', 'image', e.target.value)}
                placeholder="Leave blank to use default 3D vector illustration"
              />
              <label className="btn btn-secondary btn-sm" style={{ cursor: 'pointer', margin: 0, whiteSpace: 'nowrap' }}>
                <Upload size={14} />
                <span>Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageUpload(e, (url) => handleFieldChange('hero', 'image', url))}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 2: WHO WE ARE (2 Content Blocks)
          ============================================================ */}
      {activeTab === 'whoWeAre' && (
        <div className="space-y-4">
          {pageData.whoWeAre?.map((block, idx) => (
            <div key={block.id || idx} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Block {idx + 1}: {block.title || `Content Block ${idx + 1}`}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={block.isActive}
                      onChange={(e) => handleArrayItemChange('whoWeAre', idx, 'isActive', e.target.checked)}
                    />
                    <span>Active</span>
                  </label>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Block Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={block.title || ''}
                  onChange={(e) => handleArrayItemChange('whoWeAre', idx, 'title', e.target.value)}
                  placeholder="Block Title..."
                />
              </div>

              {block.paragraphs?.map((p, pIdx) => (
                <div key={pIdx} className="form-group" style={{ marginBottom: '0.75rem' }}>
                  <label className="form-label">Paragraph {pIdx + 1}</label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    value={p}
                    onChange={(e) => {
                      const newParagraphs = [...block.paragraphs];
                      newParagraphs[pIdx] = e.target.value;
                      handleArrayItemChange('whoWeAre', idx, 'paragraphs', newParagraphs);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ============================================================
          TAB 3: WHY FIREVY (4 Value Pillars)
          ============================================================ */}
      {activeTab === 'whyFirevy' && (
        <div className="space-y-4">
          {pageData.whyFirevy?.map((pillar, idx) => (
            <div key={pillar.id || idx} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Pillar {idx + 1}: {pillar.title}
                </h4>
                <label style={{ fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={pillar.isActive}
                    onChange={(e) => handleArrayItemChange('whyFirevy', idx, 'isActive', e.target.checked)}
                  />
                  <span>Active</span>
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Title (e.g. Impact:)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={pillar.title}
                    onChange={(e) => handleArrayItemChange('whyFirevy', idx, 'title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subtitle (e.g. Driving success through innovation)</label>
                  <input
                    type="text"
                    className="form-input"
                    value={pillar.subtitle || ''}
                    onChange={(e) => handleArrayItemChange('whyFirevy', idx, 'subtitle', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Quote / Core Message</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  value={pillar.quote}
                  onChange={(e) => handleArrayItemChange('whyFirevy', idx, 'quote', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================
          TAB 4: BENEFITS (12 Items)
          ============================================================ */}
      {activeTab === 'benefits' && (
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Company Benefits & Perks</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Manage the 12 benefit cards displayed on the Careers page.</p>
            </div>
            <button
              onClick={() => {
                const newBenefit = {
                  id: `b_${Date.now()}`,
                  title: 'New Benefit Perk',
                  icon: 'Sparkles',
                  description: 'Employee wellness initiative',
                  order: pageData.benefits?.length || 0,
                  isActive: true
                };
                setPageData((prev) => ({
                  ...prev,
                  benefits: [...prev.benefits, newBenefit]
                }));
                setHasUnsavedChanges(true);
              }}
              className="btn btn-secondary btn-sm"
            >
              <Plus size={14} />
              <span>Add Benefit</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {pageData.benefits?.map((benefit, idx) => (
              <div
                key={benefit.id || idx}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <select
                    className="form-input"
                    style={{ width: 'auto', padding: '4px 8px', fontSize: '0.75rem' }}
                    value={benefit.icon}
                    onChange={(e) => handleArrayItemChange('benefits', idx, 'icon', e.target.value)}
                  >
                    {AVAILABLE_ICONS.map((ic) => (
                      <option key={ic.name} value={ic.name}>{ic.name}</option>
                    ))}
                  </select>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={benefit.isActive}
                        onChange={(e) => handleArrayItemChange('benefits', idx, 'isActive', e.target.checked)}
                      />
                      <span>Active</span>
                    </label>
                    <button
                      onClick={() => {
                        setPageData((prev) => ({
                          ...prev,
                          benefits: prev.benefits.filter((_, i) => i !== idx)
                        }));
                        setHasUnsavedChanges(true);
                      }}
                      className="btn btn-ghost btn-icon-sm"
                      style={{ color: '#EF4444' }}
                      title="Delete Benefit"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  className="form-input"
                  style={{ fontWeight: 700 }}
                  value={benefit.title}
                  onChange={(e) => handleArrayItemChange('benefits', idx, 'title', e.target.value)}
                  placeholder="Benefit Title"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 5: LIFE AT FIREVY (Photo Gallery)
          ============================================================ */}
      {activeTab === 'lifeAtFirevy' && (
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Life at firevy.co Photo Collage</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Upload, replace, and reorder company culture and event celebration photos.</p>
            </div>
            <button
              onClick={() => {
                const newPhoto = {
                  id: `life_${Date.now()}`,
                  title: 'Team Event Photo',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                  isFeatured: false,
                  order: pageData.lifeAtFirevy?.length || 0,
                  isActive: true
                };
                setPageData((prev) => ({
                  ...prev,
                  lifeAtFirevy: [...prev.lifeAtFirevy, newPhoto]
                }));
                setHasUnsavedChanges(true);
              }}
              className="btn btn-secondary btn-sm"
            >
              <Plus size={14} />
              <span>Add Photo</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {pageData.lifeAtFirevy?.map((photo, idx) => (
              <div
                key={photo.id || idx}
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {photo.isFeatured && (
                    <span style={{ position: 'absolute', top: '8px', left: '8px', backgroundColor: '#006B8F', color: '#FFF', fontSize: '10px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px' }}>
                      FEATURED CENTER
                    </span>
                  )}
                </div>

                <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <input
                    type="text"
                    className="form-input"
                    style={{ fontSize: '0.75rem' }}
                    value={photo.title}
                    onChange={(e) => handleArrayItemChange('lifeAtFirevy', idx, 'title', e.target.value)}
                    placeholder="Photo Title / Event"
                  />

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontSize: '0.6875rem', flex: 1 }}
                      value={photo.image}
                      onChange={(e) => handleArrayItemChange('lifeAtFirevy', idx, 'image', e.target.value)}
                      placeholder="Image URL"
                    />
                    <label className="btn btn-secondary btn-sm" style={{ padding: '4px 8px', fontSize: '0.6875rem', cursor: 'pointer', margin: 0 }}>
                      <Upload size={12} />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageUpload(e, (url) => handleArrayItemChange('lifeAtFirevy', idx, 'image', url))}
                      />
                    </label>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
                    <label style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={photo.isFeatured}
                        onChange={(e) => handleArrayItemChange('lifeAtFirevy', idx, 'isFeatured', e.target.checked)}
                      />
                      <span>Featured (Tall)</span>
                    </label>

                    <button
                      onClick={() => {
                        setPageData((prev) => ({
                          ...prev,
                          lifeAtFirevy: prev.lifeAtFirevy.filter((_, i) => i !== idx)
                        }));
                        setHasUnsavedChanges(true);
                      }}
                      className="btn btn-ghost btn-icon-sm"
                      style={{ color: '#EF4444' }}
                      title="Remove Photo"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 6: HIRING PROCESS (5 Steps)
          ============================================================ */}
      {activeTab === 'hiringProcess' && (
        <div className="space-y-4">
          {pageData.hiringProcess?.map((step, idx) => (
            <div key={step.id || idx} className="card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Step {idx + 1}: {step.title}
                </h4>
                <label style={{ fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={step.isActive}
                    onChange={(e) => handleArrayItemChange('hiringProcess', idx, 'isActive', e.target.checked)}
                  />
                  <span>Active</span>
                </label>
              </div>

              <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                <label className="form-label">Step Header</label>
                <input
                  type="text"
                  className="form-input"
                  value={step.title}
                  onChange={(e) => handleArrayItemChange('hiringProcess', idx, 'title', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Step Description</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  value={step.description}
                  onChange={(e) => handleArrayItemChange('hiringProcess', idx, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================
          TAB 7: CURRENT OPENINGS (Jobs Full CRUD)
          ============================================================ */}
      {activeTab === 'jobs' && (
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Job Positions & Vacancies</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Publish, manage, and edit engineering, sales, and design job openings.</p>
            </div>
            <button onClick={handleOpenAddJob} className="btn btn-primary btn-sm">
              <Plus size={14} />
              <span>Add New Job Opening</span>
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-subtle)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '8px 12px' }}>Position Title</th>
                  <th style={{ padding: '8px 12px' }}>Department</th>
                  <th style={{ padding: '8px 12px' }}>Experience</th>
                  <th style={{ padding: '8px 12px' }}>Openings</th>
                  <th style={{ padding: '8px 12px' }}>Status</th>
                  <th style={{ padding: '8px 12px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job._id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{job.title}</span>
                        {job.urgent && (
                          <span style={{ backgroundColor: '#EF4444', color: '#FFF', fontSize: '9px', fontWeight: 800, padding: '1px 5px', borderRadius: '4px', textTransform: 'uppercase' }}>
                            URGENT
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)' }}>
                        {job.location} · {job.type}
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ padding: '3px 8px', borderRadius: '4px', backgroundColor: 'var(--bg-tertiary)', fontSize: '0.75rem' }}>
                        {job.department}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{job.experience}</td>
                    <td style={{ padding: '12px', fontWeight: 700, color: '#006B8F' }}>{job.openings || 1}</td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => handleToggleJobStatus(job)}
                        style={{
                          border: 'none',
                          background: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          color: job.isActive ? '#059669' : '#94A3B8',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      >
                        {job.isActive ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                        <span>{job.isActive ? 'Published' : 'Draft'}</span>
                      </button>
                    </td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.375rem' }}>
                        <button
                          onClick={() => handleOpenEditJob(job)}
                          className="btn btn-secondary btn-icon-sm"
                          title="Edit Job"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job._id)}
                          className="btn btn-ghost btn-icon-sm"
                          style={{ color: '#EF4444' }}
                          title="Delete Job"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 8: VISION & STATS
          ============================================================ */}
      {activeTab === 'visionStats' && (
        <div className="space-y-6">
          {/* Vision Slides */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Vision Carousel Slides (3 Slides)
            </h3>
            <div className="space-y-4">
              {pageData.visionSection?.slides?.map((slide, idx) => (
                <div key={slide.id || idx} style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-tertiary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h5 style={{ fontWeight: 700, fontSize: '0.875rem' }}>Slide {idx + 1}: {slide.title}</h5>
                  </div>
                  <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                    <label className="form-label">Slide Title</label>
                    <input
                      type="text"
                      className="form-input"
                      value={slide.title}
                      onChange={(e) => {
                        const newSlides = [...pageData.visionSection.slides];
                        newSlides[idx].title = e.target.value;
                        setPageData((prev) => ({
                          ...prev,
                          visionSection: { ...prev.visionSection, slides: newSlides }
                        }));
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Slide Quote / Paragraph</label>
                    <textarea
                      className="form-textarea"
                      rows={3}
                      value={slide.quote}
                      onChange={(e) => {
                        const newSlides = [...pageData.visionSection.slides];
                        newSlides[idx].quote = e.target.value;
                        setPageData((prev) => ({
                          ...prev,
                          visionSection: { ...prev.visionSection, slides: newSlides }
                        }));
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Statistics Highlights (5 Metrics)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {pageData.stats?.map((stat, idx) => (
                <div key={stat.id || idx} style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-tertiary)' }}>
                  <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                    <label className="form-label">Metric Value</label>
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontWeight: 800, color: '#006B8F', fontSize: '1.125rem' }}
                      value={stat.value}
                      onChange={(e) => handleArrayItemChange('stats', idx, 'value', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Metric Label</label>
                    <input
                      type="text"
                      className="form-input"
                      value={stat.label}
                      onChange={(e) => handleArrayItemChange('stats', idx, 'label', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 9: OUR PEOPLE (6 Video Stories)
          ============================================================ */}
      {activeTab === 'people' && (
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>Our People Our Pride Testimonials</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Manage employee testimonial cards and story video links.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {pageData.peopleTestimonials?.map((person, idx) => (
              <div
                key={person.id || idx}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--bg-tertiary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img
                    src={person.avatar}
                    alt={person.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontWeight: 700, fontSize: '0.8125rem', marginBottom: '4px' }}
                      value={person.name}
                      onChange={(e) => handleArrayItemChange('peopleTestimonials', idx, 'name', e.target.value)}
                      placeholder="Associate Name"
                    />
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontSize: '0.75rem' }}
                      value={person.role}
                      onChange={(e) => handleArrayItemChange('peopleTestimonials', idx, 'role', e.target.value)}
                      placeholder="Designation / Role"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.6875rem' }}>Photo Avatar URL</label>
                  <div style={{ display: 'flex', gap: '0.375rem' }}>
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontSize: '0.6875rem' }}
                      value={person.avatar}
                      onChange={(e) => handleArrayItemChange('peopleTestimonials', idx, 'avatar', e.target.value)}
                    />
                    <label className="btn btn-secondary btn-sm" style={{ padding: '4px 8px', fontSize: '0.6875rem', cursor: 'pointer', margin: 0 }}>
                      <Upload size={12} />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageUpload(e, (url) => handleArrayItemChange('peopleTestimonials', idx, 'avatar', url))}
                      />
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.6875rem' }}>Video URL (YouTube / MP4)</label>
                  <input
                    type="text"
                    className="form-input"
                    style={{ fontSize: '0.6875rem' }}
                    value={person.videoUrl || ''}
                    onChange={(e) => handleArrayItemChange('peopleTestimonials', idx, 'videoUrl', e.target.value)}
                    placeholder="https://youtube.com/..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          TAB 10: SOCIAL MEDIA & CTA BANNER
          ============================================================ */}
      {activeTab === 'ctaSocial' && (
        <div className="space-y-6">
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Final Call to Action Banner ("Ready To Take Challenge?")
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label className="form-label">CTA Banner Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={pageData.ctaBanner?.title || ''}
                  onChange={(e) => handleFieldChange('ctaBanner', 'title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Resume Recipient Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={pageData.ctaBanner?.email || ''}
                  onChange={(e) => handleFieldChange('ctaBanner', 'email', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">CTA Description</label>
              <textarea
                className="form-textarea"
                rows={3}
                value={pageData.ctaBanner?.description || ''}
                onChange={(e) => handleFieldChange('ctaBanner', 'description', e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          JOB OPENING ADD / EDIT MODAL
          ============================================================ */}
      {isJobModalOpen && (
        <Modal
          isOpen={isJobModalOpen}
          onClose={() => setIsJobModalOpen(false)}
          title={editingJob ? `Edit Job: ${editingJob.title}` : 'Add New Job Vacancy'}
        >
          <form onSubmit={handleSaveJob} className="space-y-4 text-left" style={{ maxHeight: '75vh', overflowY: 'auto', padding: '4px' }}>
            <div className="form-group">
              <label className="form-label">Position Title *</label>
              <input
                type="text"
                required
                className="form-input"
                value={jobFormData.title}
                onChange={(e) => setJobFormData({ ...jobFormData, title: e.target.value })}
                placeholder="e.g. Senior MERN Stack Developer"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">Department *</label>
                <select
                  className="form-input"
                  value={jobFormData.department}
                  onChange={(e) => setJobFormData({ ...jobFormData, department: e.target.value })}
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Sales & Marketing">Sales & Marketing</option>
                  <option value="Finance & Accounts">Finance & Accounts</option>
                  <option value="Design">Design</option>
                  <option value="AI & Innovation">AI & Innovation</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Human Resources">Human Resources</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Experience Required *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={jobFormData.experience}
                  onChange={(e) => setJobFormData({ ...jobFormData, experience: e.target.value })}
                  placeholder="e.g. 1 - 4 Years"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
              <div className="form-group">
                <label className="form-label">No. of Openings *</label>
                <input
                  type="number"
                  min="1"
                  className="form-input"
                  value={jobFormData.openings}
                  onChange={(e) => setJobFormData({ ...jobFormData, openings: parseInt(e.target.value, 10) || 1 })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Employment Type</label>
                <select
                  className="form-input"
                  value={jobFormData.type}
                  onChange={(e) => setJobFormData({ ...jobFormData, type: e.target.value })}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Part-time">Part-time</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Urgent Tag</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', height: '38px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={jobFormData.urgent}
                    onChange={(e) => setJobFormData({ ...jobFormData, urgent: e.target.checked })}
                  />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: jobFormData.urgent ? '#EF4444' : 'inherit' }}>
                    Mark Urgent
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-input"
                value={jobFormData.location}
                onChange={(e) => setJobFormData({ ...jobFormData, location: e.target.value })}
                placeholder="Ahmedabad, India / Remote"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Job Overview / Description</label>
              <textarea
                className="form-textarea"
                rows={3}
                value={jobFormData.description}
                onChange={(e) => setJobFormData({ ...jobFormData, description: e.target.value })}
                placeholder="Brief summary of the role and scope..."
              />
            </div>

            {/* Key Responsibilities */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                <label className="form-label" style={{ margin: 0 }}>Key Responsibilities</label>
                <button
                  type="button"
                  onClick={() => setJobFormData({ ...jobFormData, responsibilities: [...jobFormData.responsibilities, ''] })}
                  className="btn btn-ghost btn-sm"
                  style={{ fontSize: '0.75rem', padding: '2px 6px' }}
                >
                  + Add Point
                </button>
              </div>
              {jobFormData.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.375rem' }}>
                  <input
                    type="text"
                    className="form-input"
                    value={resp}
                    onChange={(e) => {
                      const updated = [...jobFormData.responsibilities];
                      updated[rIdx] = e.target.value;
                      setJobFormData({ ...jobFormData, responsibilities: updated });
                    }}
                    placeholder={`Responsibility #${rIdx + 1}`}
                  />
                  {jobFormData.responsibilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setJobFormData({
                          ...jobFormData,
                          responsibilities: jobFormData.responsibilities.filter((_, i) => i !== rIdx)
                        });
                      }}
                      className="btn btn-ghost btn-icon-sm"
                      style={{ color: '#EF4444' }}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Qualifications & Requirements */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.375rem' }}>
                <label className="form-label" style={{ margin: 0 }}>Qualifications & Requirements</label>
                <button
                  type="button"
                  onClick={() => setJobFormData({ ...jobFormData, requirements: [...jobFormData.requirements, ''] })}
                  className="btn btn-ghost btn-sm"
                  style={{ fontSize: '0.75rem', padding: '2px 6px' }}
                >
                  + Add Requirement
                </button>
              </div>
              {jobFormData.requirements.map((req, qIdx) => (
                <div key={qIdx} style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.375rem' }}>
                  <input
                    type="text"
                    className="form-input"
                    value={req}
                    onChange={(e) => {
                      const updated = [...jobFormData.requirements];
                      updated[qIdx] = e.target.value;
                      setJobFormData({ ...jobFormData, requirements: updated });
                    }}
                    placeholder={`Requirement #${qIdx + 1}`}
                  />
                  {jobFormData.requirements.length > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setJobFormData({
                          ...jobFormData,
                          requirements: jobFormData.requirements.filter((_, i) => i !== qIdx)
                        });
                      }}
                      className="btn btn-ghost btn-icon-sm"
                      style={{ color: '#EF4444' }}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                type="button"
                onClick={() => setIsJobModalOpen(false)}
                className="btn btn-secondary btn-sm"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                {editingJob ? 'Save Job Changes' : 'Publish Job Position'}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default CareersAdminPage;
