import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  Eye,
  EyeOff,
  Edit2,
  RotateCcw,
  ExternalLink,
  Loader2,
  GripVertical,
  AlertTriangle,
  Search
} from 'lucide-react';
import Modal from '../../components/UI/Modal';
import Badge from '../../components/UI/Badge';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { INITIAL_HOME_PAGE_DATA, initialSectionsOrder } from '../../../constants/initialHomePageData';
import { SECTION_METADATA } from '../../constants/sectionMetadata';

export const HomePageManager = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [homeData, setHomeData] = useState(INITIAL_HOME_PAGE_DATA);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // Modal confirmation states
  const [isResetAllModalOpen, setIsResetAllModalOpen] = useState(false);

  const fetchHomePage = async () => {
    setLoading(true);
    try {
      const res = await adminService.getHomePageAdmin();
      if (res && res.data) {
        setHomeData(res.data);
      }
    } catch {
      addToast('Using local default Home Page structure.', 'info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePage();
  }, []);

  const sectionsOrder =
    homeData?.sectionsOrder && Array.isArray(homeData.sectionsOrder) && homeData.sectionsOrder.length > 0
      ? homeData.sectionsOrder
      : initialSectionsOrder;

  const sections = homeData?.sections || INITIAL_HOME_PAGE_DATA.sections;

  // Toggle Section Visibility
  const handleToggleVisibility = async (sectionKey) => {
    try {
      const currentVal = sections[sectionKey]?.isVisible !== false && sections[sectionKey]?.isEnabled !== false;
      const updatedSection = {
        ...(sections[sectionKey] || INITIAL_HOME_PAGE_DATA.sections[sectionKey] || {}),
        isVisible: !currentVal,
        isEnabled: !currentVal
      };

      setHomeData((prev) => ({
        ...prev,
        sections: {
          ...prev.sections,
          [sectionKey]: updatedSection
        }
      }));

      await adminService.toggleHomePageSection(sectionKey);
      addToast(`Section "${SECTION_METADATA[sectionKey]?.title || sectionKey}" is now ${!currentVal ? 'enabled' : 'hidden'}`, 'success');
    } catch (err) {
      addToast(`Visibility update error: ${err.message}`, 'error');
    }
  };

  // Drag & Drop Reorder Handlers (Pure Drag and Drop)
  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDrop = async (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newOrder = [...sectionsOrder];
    const [moved] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, moved);

    setHomeData((prev) => ({
      ...prev,
      sectionsOrder: newOrder
    }));
    setDraggedIndex(null);
    setDragOverIndex(null);

    try {
      await adminService.reorderHomePageSections(newOrder);
      addToast('Section order reordered successfully via Drag & Drop!', 'success');
    } catch (err) {
      addToast(`Order update error: ${err.message}`, 'error');
    }
  };

  // Reset All Sections Confirmation Handlers
  const handleConfirmResetAll = async () => {
    setLoading(true);
    try {
      const res = await adminService.resetHomePage();
      if (res && res.data) {
        setHomeData(res.data);
      } else {
        setHomeData(INITIAL_HOME_PAGE_DATA);
      }
      addToast('All 22 Home Page sections restored to factory defaults!', 'success');
      setIsResetAllModalOpen(false);
    } catch (err) {
      addToast(`Reset error: ${err.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header matching Admin Design System */}
      <div className="page-top-bar">
        <div className="page-title-group">
          <h1>
            <Home size={24} />
            <span>Home Page Management</span>
          </h1>
          <p>
            Manage all 22 public sections, content, cards, media assets, and drag-and-drop display order in real time.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <ExternalLink size={14} />
            <span>Preview Public Home</span>
          </a>

          <button
            type="button"
            onClick={() => setIsResetAllModalOpen(true)}
            className="btn btn-secondary btn-sm"
            style={{
              color: 'var(--primary)',
              borderColor: 'var(--primary)',
              backgroundColor: '#FFFFFF',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Reset All 22 Sections to Factory Production Defaults"
          >
            <RotateCcw size={14} />
            <span>Reset Entire Home Page</span>
          </button>
        </div>
      </div>

      {/* Main Sections Directory Card */}
      <div className="card" style={{ padding: '24px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
              All 22 Home Page Sections
            </h3>
            <p style={{ fontSize: '13px', color: '#64748B', margin: '4px 0 0 0' }}>
              Drag and drop sections to rearrange the layout order. Click <strong>Edit Section</strong> to customize content and media.
            </p>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search sections..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              style={{ fontSize: '13px', padding: '8px 12px 8px 34px', borderRadius: '8px' }}
            />
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '60px 20px', textAlign: 'center' }}>
            <Loader2 className="animate-spin" size={36} style={{ margin: '0 auto', color: '#006B8F' }} />
            <p style={{ marginTop: '14px', fontSize: '14px', color: '#64748B' }}>Loading Home Page Sections...</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sectionsOrder
              .filter((key) => {
                if (!searchFilter) return true;
                const meta = SECTION_METADATA[key] || { title: key, category: '', description: '' };
                return (
                  meta.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                  meta.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
                  (meta.description && meta.description.toLowerCase().includes(searchFilter.toLowerCase())) ||
                  key.toLowerCase().includes(searchFilter.toLowerCase())
                );
              })
              .map((sectionKey, idx) => {
                const sectionData = sections[sectionKey] || INITIAL_HOME_PAGE_DATA.sections[sectionKey] || {};
                const isVisible = sectionData.isVisible !== false && sectionData.isEnabled !== false;
                const meta = SECTION_METADATA[sectionKey] || { title: sectionKey, category: 'General', actionLabel: 'Edit', description: '' };
                const isDragging = draggedIndex === idx;
                const isDragOver = dragOverIndex === idx;

                return (
                  <div
                    key={sectionKey}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDragEnd={handleDragEnd}
                    onDrop={(e) => handleDrop(e, idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      backgroundColor: isVisible ? '#FFFFFF' : '#F8FAFC',
                      border: isDragOver ? '2px dashed #006B8F' : isDragging ? '1px dashed #94A3B8' : '1px solid #E2E8F0',
                      borderRadius: '10px',
                      transition: 'all 0.15s ease',
                      opacity: isDragging ? 0.4 : isVisible ? 1 : 0.7,
                      boxShadow: isVisible ? '0 1px 2px rgba(0,0,0,0.03)' : 'none',
                      cursor: 'grab'
                    }}
                  >
                    {/* Left Details */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0, paddingRight: '16px' }}>
                      <div
                        style={{ color: '#94A3B8', cursor: 'grab', display: 'flex', alignItems: 'center' }}
                        title="Drag to reorder section"
                      >
                        <GripVertical size={20} />
                      </div>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'rgba(0, 107, 143, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, color: '#006B8F', flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>
                            {meta.title}
                          </span>
                          <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '6px', backgroundColor: '#F1F5F9', color: '#475569', fontWeight: 600 }}>
                            {meta.category}
                          </span>
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748B', marginTop: '3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {meta.description || sectionData.title || 'Dynamic section configured with production content'}
                        </div>
                      </div>
                    </div>

                    {/* Right Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                      {/* Visibility Status Badge */}
                      <Badge variant={isVisible ? 'success' : 'secondary'}>
                        {isVisible ? 'Live' : 'Hidden'}
                      </Badge>

                      {/* Visibility Toggle Button */}
                      <button
                        type="button"
                        onClick={() => handleToggleVisibility(sectionKey)}
                        className={`btn btn-xs ${isVisible ? 'btn-ghost' : 'btn-secondary'}`}
                        style={{ padding: '6px 8px' }}
                        title={isVisible ? 'Click to hide from public home' : 'Click to show on public home'}
                      >
                        {isVisible ? <EyeOff size={15} style={{ color: '#DC2626' }} /> : <Eye size={15} style={{ color: '#16A34A' }} />}
                      </button>

                      {/* Full Page Section Editor */}
                      <button
                        type="button"
                        onClick={() => navigate(`/admin/home-page/${sectionKey}`)}
                        className="btn btn-xs btn-primary"
                        style={{
                          padding: '6px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          backgroundColor: '#006B8F',
                          borderColor: '#006B8F',
                          color: '#FFFFFF',
                          borderRadius: '6px'
                        }}
                      >
                        <Edit2 size={13} /> Edit Section
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* Reset All 22 Sections Confirmation Modal */}
      <Modal
        isOpen={isResetAllModalOpen}
        onClose={() => setIsResetAllModalOpen(false)}
        title="Confirm Reset Entire Home Page"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setIsResetAllModalOpen(false)}
              className="btn btn-secondary"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmResetAll}
              className="btn btn-primary"
              style={{ backgroundColor: '#DC2626', borderColor: '#DC2626', color: '#FFFFFF' }}
              disabled={loading}
            >
              {loading ? 'Resetting All...' : 'Yes, Reset All 22 Sections'}
            </button>
          </div>
        }
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '8px 0' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', flexShrink: 0 }}>
            <AlertTriangle size={22} />
          </div>
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>
              Reset All 22 Home Page Sections?
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}>
              Are you sure you want to reset <strong>ALL 22 Home Page sections</strong> to their original factory defaults? All custom text modifications, card orderings, and media uploads will be restored to original defaults.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePageManager;
