import React, { useState, useEffect } from 'react';
import {
  Sliders,
  Sparkles,
  Plus,
  Edit2,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Video,
  ListPlus,
  X,
  Layers,
  Check
} from 'lucide-react';
import DataTable from '../components/UI/DataTable';
import Modal from '../components/UI/Modal';
import Drawer from '../components/UI/Drawer';
import Badge from '../components/UI/Badge';
import StatCard from '../components/UI/StatCard';
import adminService from '../services/adminService';
import { useToast } from '../context/ToastContext';

const DEFAULT_FORM_STATE = {
  tag: '',
  titleLine1: '',
  titleLine2: '',
  subTag: '',
  bullets: [
    'Recognized as #1 Web Development Company in India and USA.',
    'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
    "We've been Redefining Excellence for over Two Decades."
  ],
  rightBoxTitle: 'Redefined Learning Experiences',
  rightBoxSub: 'With Intelligent AI Innovation',
  primaryCtaText: "Let's Talk",
  primaryCtaLink: '/contact',
  secondaryCtaText: 'Get in Touch',
  secondaryCtaLink: '/contact',
  backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
  order: 1,
  isActive: true
};

export const HeroSlidesPage = () => {
  const { addToast } = useToast();
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);
  const [newBulletInput, setNewBulletInput] = useState('');

  // Fetch all slides from API
  const fetchSlides = async () => {
    setLoading(true);
    try {
      const response = await adminService.getAllHeroSlides();
      if (response && response.data) {
        setSlides(response.data);
      }
    } catch {
      addToast('Could not load hero slides from API. Using local cache.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const handleOpenCreateModal = () => {
    setIsEditing(false);
    setEditId(null);
    setFormData({
      ...DEFAULT_FORM_STATE,
      order: slides.length + 1
    });
    setNewBulletInput('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (slide) => {
    setIsEditing(true);
    setEditId(slide._id);
    setFormData({
      tag: slide.tag || '',
      titleLine1: slide.titleLine1 || '',
      titleLine2: slide.titleLine2 || '',
      subTag: slide.subTag || '',
      bullets: Array.isArray(slide.bullets) ? [...slide.bullets] : [],
      rightBoxTitle: slide.rightBoxTitle || '',
      rightBoxSub: slide.rightBoxSub || '',
      primaryCtaText: slide.primaryCtaText || "Let's Talk",
      primaryCtaLink: slide.primaryCtaLink || '/contact',
      secondaryCtaText: slide.secondaryCtaText || 'Get in Touch',
      secondaryCtaLink: slide.secondaryCtaLink || '/contact',
      backgroundVideoUrl: slide.backgroundVideoUrl || '',
      order: slide.order || 1,
      isActive: slide.isActive !== false
    });
    setNewBulletInput('');
    setIsModalOpen(true);
  };

  const handleViewSlide = (slide) => {
    setSelectedSlide(slide);
    setIsDrawerOpen(true);
  };

  const handleAddBullet = () => {
    if (!newBulletInput.trim()) return;
    setFormData((prev) => ({
      ...prev,
      bullets: [...prev.bullets, newBulletInput.trim()]
    }));
    setNewBulletInput('');
  };

  const handleRemoveBullet = (index) => {
    setFormData((prev) => ({
      ...prev,
      bullets: prev.bullets.filter((_, i) => i !== index)
    }));
  };

  const handleToggleStatus = async (slide) => {
    try {
      const response = await adminService.toggleHeroSlide(slide._id);
      if (response && response.success) {
        setSlides((prev) =>
          prev.map((s) =>
            s._id === slide._id ? { ...s, isActive: !s.isActive } : s
          )
        );
        addToast(`Slide ${slide.isActive ? 'deactivated' : 'activated'}`, 'success');
      }
    } catch {
      // Local fallback toggle
      setSlides((prev) =>
        prev.map((s) =>
          s._id === slide._id ? { ...s, isActive: !s.isActive } : s
        )
      );
      addToast(`Slide status toggled locally`, 'info');
    }
  };

  const handleDeleteSlide = async (id) => {
    if (!window.confirm('Are you sure you want to delete this Hero Slide?')) return;

    try {
      await adminService.deleteHeroSlide(id);
      setSlides((prev) => prev.filter((s) => s._id !== id));
      addToast('Hero slide deleted successfully', 'success');
    } catch {
      setSlides((prev) => prev.filter((s) => s._id !== id));
      addToast('Hero slide removed from local list', 'info');
    }
  };

  const handleResetDefaults = async () => {
    if (!window.confirm('Reset all Hero Slides to standard defaults?')) return;

    try {
      const response = await adminService.resetHeroSlides();
      if (response && response.data) {
        setSlides(response.data);
      }
      addToast('Hero slides restored to initial defaults', 'success');
    } catch {
      addToast('Failed to reset defaults', 'error');
    }
  };

  const handleSaveForm = async (e) => {
    e.preventDefault();

    if (!formData.tag.trim() || !formData.titleLine1.trim() || !formData.titleLine2.trim()) {
      addToast('Tag, Title Line 1, and Title Line 2 are required fields', 'warning');
      return;
    }

    try {
      if (isEditing) {
        const response = await adminService.updateHeroSlide(editId, formData);
        if (response && response.data) {
          setSlides((prev) =>
            prev.map((s) => (s._id === editId ? { ...s, ...response.data } : s))
          );
        } else {
          setSlides((prev) =>
            prev.map((s) => (s._id === editId ? { ...s, ...formData } : s))
          );
        }
        addToast(`Hero slide "${formData.tag}" updated successfully`, 'success');
      } else {
        const response = await adminService.createHeroSlide(formData);
        if (response && response.data) {
          setSlides((prev) => [...prev, response.data]);
        } else {
          const newMock = {
            _id: `hero_${Date.now()}`,
            ...formData
          };
          setSlides((prev) => [...prev, newMock]);
        }
        addToast(`Hero slide "${formData.tag}" created successfully`, 'success');
      }
      setIsModalOpen(false);
    } catch {
      addToast('Error saving hero slide. Please check network connection.', 'error');
    }
  };

  const activeCount = slides.filter((s) => s.isActive !== false).length;
  const inactiveCount = slides.length - activeCount;

  // Table columns definition
  const columns = [
    {
      header: 'Order',
      field: 'order',
      sortable: true,
      render: (row) => (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '0.8125rem'
          }}
        >
          #{row.order || 1}
        </span>
      )
    },
    {
      header: 'Category & Headlines',
      field: 'tag',
      sortable: true,
      render: (row) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--primary)',
                letterSpacing: '0.05em'
              }}
            >
              {row.tag}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row.subTag}</span>
          </div>
          <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
            {row.titleLine1} <span style={{ color: '#0284C7' }}>{row.titleLine2}</span>
          </div>
        </div>
      )
    },
    {
      header: 'Bullet Highlights',
      field: 'bullets',
      render: (row) => {
        const count = Array.isArray(row.bullets) ? row.bullets.length : 0;
        return (
          <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: 600 }}>{count} Highlights</span>
            {count > 0 && (
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '220px'
                }}
              >
                • {row.bullets[0]}
              </div>
            )}
          </div>
        );
      }
    },
    {
      header: 'Right Feature Box',
      field: 'rightBoxTitle',
      render: (row) => (
        <div style={{ fontSize: '0.8125rem' }}>
          <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{row.rightBoxTitle}</div>
          <div style={{ fontSize: '0.75rem', color: '#EC4899', fontWeight: 600 }}>{row.rightBoxSub}</div>
        </div>
      )
    },
    {
      header: 'Status',
      field: 'isActive',
      sortable: true,
      render: (row) => (
        <button
          onClick={() => handleToggleStatus(row)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          title="Click to toggle status"
        >
          {row.isActive !== false ? (
            <Badge variant="emerald">
              <CheckCircle2 size={12} style={{ marginRight: '4px' }} /> Active
            </Badge>
          ) : (
            <Badge variant="rose">
              <XCircle size={12} style={{ marginRight: '4px' }} /> Inactive
            </Badge>
          )}
        </button>
      )
    },
    {
      header: 'Actions',
      field: '_id',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => handleViewSlide(row)}
            className="btn btn-ghost btn-icon-sm"
            title="Preview Slide"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => handleOpenEditModal(row)}
            className="btn btn-ghost btn-icon-sm"
            title="Edit Slide"
          >
            <Edit2 size={15} />
          </button>
          <button
            onClick={() => handleDeleteSlide(row._id)}
            className="btn btn-ghost btn-icon-sm"
            style={{ color: 'var(--accent-rose)' }}
            title="Delete Slide"
          >
            <Trash2 size={15} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header Bar */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Sliders size={24} />
            <span>Hero Banner & Slides Manager</span>
          </h1>
          <p>Configure homepage hero carousel slides, headlines, dynamic bullet points, and CTA links</p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={handleResetDefaults}
            className="btn btn-secondary"
            title="Restore initial 3 slides"
          >
            <RotateCcw size={15} />
            <span>Reset Defaults</span>
          </button>
          <button onClick={handleOpenCreateModal} className="btn btn-primary">
            <Plus size={16} />
            <span>Add Hero Slide</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="stats-grid" style={{ marginBottom: '1.5rem' }}>
        <StatCard
          label="Total Hero Slides"
          value={slides.length}
          icon={Layers}
          trend={`${activeCount} active in rotation`}
        />
        <StatCard
          label="Active Slides"
          value={activeCount}
          icon={CheckCircle2}
          trend="Live on Homepage"
        />
        <StatCard
          label="Inactive / Draft"
          value={inactiveCount}
          icon={XCircle}
          trend="Hidden from public"
        />
        <StatCard
          label="Rotation Cycle"
          value="7.0s"
          icon={Sparkles}
          trend="Auto-scroll interval"
        />
      </div>

      {/* Visual Slide Showcase Preview Cards */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}
        >
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
            Live Slide Carousel Visualizer
          </h2>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            Real-time preview of active slides on homepage
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={slide._id || idx}
              style={{
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, #031120 0%, #071D35 50%, #0A071E 100%)',
                border: slide.isActive !== false ? '1px solid #0284C7' : '1px solid #334155',
                padding: '1.5rem',
                color: '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: slide.isActive !== false ? 1 : 0.6
              }}
            >
              {/* Background ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'rgba(236, 72, 153, 0.15)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none'
                }}
              />

              {/* Header Badges */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {slide.tag}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      backgroundColor: slide.isActive !== false ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      color: slide.isActive !== false ? '#34D399' : '#F87171',
                      fontWeight: 700
                    }}
                  >
                    {slide.isActive !== false ? `Slide #${slide.order || idx + 1} Active` : 'Inactive'}
                  </span>
                </div>

                {/* Main Headline */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    lineHeight: 1.3,
                    margin: '0 0 0.25rem 0',
                    color: '#FFFFFF'
                  }}
                >
                  {slide.titleLine1} <br />
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #60A5FA, #22D3EE, #F472B6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {slide.titleLine2}
                  </span>
                </h3>

                <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: '0 0 1rem 0' }}>
                  {slide.subTag}
                </p>

                {/* Bullets List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {(slide.bullets || []).slice(0, 3).map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.75rem',
                        color: '#CBD5E1',
                        marginBottom: '0.35rem',
                        lineHeight: 1.4
                      }}
                    >
                      <span style={{ color: '#22D3EE', fontWeight: 800 }}>•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA & Actions */}
              <div>
                <div
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {slide.rightBoxTitle}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#F472B6', fontWeight: 600 }}>
                    {slide.rightBoxSub}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => handleViewSlide(slide)}
                    className="btn btn-secondary btn-sm"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', border: 'none' }}
                  >
                    <Eye size={13} />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => handleOpenEditModal(slide)}
                    className="btn btn-primary btn-sm"
                  >
                    <Edit2 size={13} />
                    <span>Edit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Table */}
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
          All Slide Configurations
        </h2>
        <DataTable
          columns={columns}
          data={slides}
          searchKey="tag"
          searchPlaceholder="Search slides by tag or title..."
        />
      </div>

      {/* Slide Detail Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={selectedSlide ? `Slide: ${selectedSlide.tag}` : 'Slide Details'}
        width="550px"
      >
        {selectedSlide && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Visual Header Box */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #031120 0%, #071D35 100%)',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontSize: '0.8125rem', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase' }}>
                {selectedSlide.tag}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0.5rem 0' }}>
                {selectedSlide.titleLine1} <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #60A5FA, #22D3EE, #F472B6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {selectedSlide.titleLine2}
                </span>
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#94A3B8' }}>{selectedSlide.subTag}</p>
            </div>

            {/* Bullets List */}
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Key Highlights
              </h4>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {(selectedSlide.bullets || []).map((b, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Primary CTA</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{selectedSlide.primaryCtaText}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>{selectedSlide.primaryCtaLink}</div>
              </div>
              <div
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Secondary CTA</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{selectedSlide.secondaryCtaText}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>{selectedSlide.secondaryCtaLink}</div>
              </div>
            </div>

            {/* Floating Highlight Box */}
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Right Floating Highlight Box</div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{selectedSlide.rightBoxTitle}</div>
              <div style={{ fontSize: '0.8125rem', color: '#EC4899', fontWeight: 600 }}>{selectedSlide.rightBoxSub}</div>
            </div>

            {/* Video Background */}
            <div
              style={{
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Video size={13} /> Background Video Asset
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', wordBreak: 'break-all', marginTop: '4px' }}>
                {selectedSlide.backgroundVideoUrl}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  handleOpenEditModal(selectedSlide);
                }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Edit2 size={16} />
                <span>Edit This Slide</span>
              </button>
            </div>
          </div>
        )}
      </Drawer>

      {/* Create / Edit Slide Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? `Edit Slide: ${formData.tag}` : 'Create New Hero Slide'}
        maxWidth="750px"
      >
        <form onSubmit={handleSaveForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Row 1: Category Tag & Order */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Slide Category Tag *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. AI Innovation, Cloud Engineering"
                value={formData.tag}
                onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Display Order</label>
              <input
                type="number"
                className="form-input"
                min="1"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value, 10) || 1 })}
              />
            </div>
          </div>

          {/* Row 2: Headline Lines 1 & 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Headline Line 1 (Solid White) *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Your Vision,"
                value={formData.titleLine1}
                onChange={(e) => setFormData({ ...formData, titleLine1: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Headline Line 2 (Gradient Highlight) *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Our Technology"
                value={formData.titleLine2}
                onChange={(e) => setFormData({ ...formData, titleLine2: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Row 3: Subtag */}
          <div className="form-group">
            <label className="form-label">Sub-Tag / Bracket Tagline</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. (Limitless Possibilities)"
              value={formData.subTag}
              onChange={(e) => setFormData({ ...formData, subTag: e.target.value })}
            />
          </div>

          {/* Row 4: Bullet Highlights Manager */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Bullet Highlight Statements</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {formData.bullets.length} bullets added
              </span>
            </label>

            {/* List of current bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {formData.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8125rem'
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>•</span>
                  <span style={{ flex: 1, color: 'var(--text-primary)' }}>{bullet}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveBullet(idx)}
                    style={{ background: 'none', border: 'none', color: 'var(--accent-rose)', cursor: 'pointer', padding: 0 }}
                    title="Remove bullet"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Add new bullet input */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Type a new highlight bullet point..."
                value={newBulletInput}
                onChange={(e) => setNewBulletInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddBullet();
                  }
                }}
              />
              <button type="button" onClick={handleAddBullet} className="btn btn-secondary">
                <ListPlus size={15} />
                <span>Add</span>
              </button>
            </div>
          </div>

          {/* Row 5: Right Floating Highlight Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Right Highlight Box Title</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Redefined Learning Experiences"
                value={formData.rightBoxTitle}
                onChange={(e) => setFormData({ ...formData, rightBoxTitle: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Right Highlight Box Subtitle</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. With Intelligent AI Innovation"
                value={formData.rightBoxSub}
                onChange={(e) => setFormData({ ...formData, rightBoxSub: e.target.value })}
              />
            </div>
          </div>

          {/* Row 6: CTAs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.75rem' }}>
            <div className="form-group">
              <label className="form-label">Primary CTA Text</label>
              <input
                type="text"
                className="form-input"
                value={formData.primaryCtaText}
                onChange={(e) => setFormData({ ...formData, primaryCtaText: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Primary CTA Link</label>
              <input
                type="text"
                className="form-input"
                value={formData.primaryCtaLink}
                onChange={(e) => setFormData({ ...formData, primaryCtaLink: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Secondary CTA Text</label>
              <input
                type="text"
                className="form-input"
                value={formData.secondaryCtaText}
                onChange={(e) => setFormData({ ...formData, secondaryCtaText: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Secondary CTA Link</label>
              <input
                type="text"
                className="form-input"
                value={formData.secondaryCtaLink}
                onChange={(e) => setFormData({ ...formData, secondaryCtaLink: e.target.value })}
              />
            </div>
          </div>

          {/* Row 7: Background Video & Active Status */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', alignItems: 'center' }}>
            <div className="form-group">
              <label className="form-label">Background Video Asset URL</label>
              <input
                type="text"
                className="form-input"
                value={formData.backgroundVideoUrl}
                onChange={(e) => setFormData({ ...formData, backgroundVideoUrl: e.target.value })}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
              <input
                type="checkbox"
                id="slide-active-checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
              />
              <label htmlFor="slide-active-checkbox" style={{ fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                Active in Rotation
              </label>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
            <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Check size={16} />
              <span>{isEditing ? 'Update Hero Slide' : 'Create Hero Slide'}</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default HeroSlidesPage;
