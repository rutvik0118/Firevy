import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Home,
  RotateCcw,
  ExternalLink,
  Loader2,
  GripVertical,
  AlertTriangle,
  Search,
  ChevronRight,
  Save,
  Layers,
  CheckCircle2
} from 'lucide-react';
import Modal from '../../components/UI/Modal';
import Badge from '../../components/UI/Badge';
import ErrorBoundary from '../../components/UI/ErrorBoundary';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { INITIAL_HOME_PAGE_DATA, initialSectionsOrder } from '../../../constants/initialHomePageData';
import { SECTION_METADATA } from '../../constants/sectionMetadata';

export const HomePageManager = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [homeData, setHomeData] = useState(INITIAL_HOME_PAGE_DATA);
  const [loading, setLoading] = useState(true);
  const [savingSection, setSavingSection] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // Active section key state
  const [activeKey, setActiveKey] = useState(params.sectionKey || 'hero');
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [originalActiveData, setOriginalActiveData] = useState(null);
  const [resetVersion, setResetVersion] = useState(0);

  // Modals
  const [isResetAllModalOpen, setIsResetAllModalOpen] = useState(false);
  const [isResetSectionModalOpen, setIsResetSectionModalOpen] = useState(false);

  const initialSyncDone = useRef(false);

  // Fetch full homepage data from backend API
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

  // Resolve active section key from URL params or default to first ordered section
  useEffect(() => {
    if (params.sectionKey && SECTION_METADATA[params.sectionKey]) {
      const canonical = SECTION_METADATA[params.sectionKey]?.key || params.sectionKey;
      setActiveKey(canonical);
    } else if (!initialSyncDone.current && sectionsOrder.length > 0) {
      setActiveKey(sectionsOrder[0]);
      initialSyncDone.current = true;
    }
  }, [params.sectionKey, sectionsOrder]);

  // When activeKey or homeData changes, clone active section data for editing
  useEffect(() => {
    if (!activeKey) return;
    const rawData = sections[activeKey] || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
    const cloned = JSON.parse(JSON.stringify(rawData));
    setActiveSectionData(cloned);
    setOriginalActiveData(JSON.parse(JSON.stringify(rawData)));
    setResetVersion((v) => v + 1);
  }, [activeKey, homeData]);

  // Active section metadata & dynamic editor component
  const meta = SECTION_METADATA[activeKey] || {
    title: activeKey,
    category: 'Home Section',
    description: 'Customize layout, content, and media for this section.',
    slug: `/#${activeKey}`,
    editor: null
  };
  const ActiveEditor = meta.editor;

  // Handler to switch active section in workspace without full page reload
  const handleSelectSection = (sectionKey) => {
    const canonical = SECTION_METADATA[sectionKey]?.key || sectionKey;
    setActiveKey(canonical);
    navigate(`/admin/home-page/${canonical}`, { replace: true });
  };

  // Toggle Section Visibility via Toggle Switch
  const handleToggleVisibility = async (sectionKey, e) => {
    if (e) {
      e.stopPropagation();
    }
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

      // If toggling the active section, also update activeSectionData
      if (sectionKey === activeKey && activeSectionData) {
        setActiveSectionData((prev) => ({
          ...prev,
          isVisible: !currentVal,
          isEnabled: !currentVal
        }));
      }

      await adminService.toggleHomePageSection(sectionKey);
      addToast(
        `Section "${SECTION_METADATA[sectionKey]?.title || sectionKey}" is now ${!currentVal ? 'enabled' : 'hidden'}`,
        'success'
      );
    } catch (err) {
      addToast(`Visibility update error: ${err.message}`, 'error');
    }
  };

  // Drag & Drop Reorder Handlers for Section Positioning
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

  // Section editor change handler
  const handleActiveSectionChange = (updated) => {
    setActiveSectionData(updated);
  };

  // Save active section content
  const handleSaveActiveSection = async () => {
    if (!activeKey || !activeSectionData) return;
    setSavingSection(true);
    try {
      const res = await adminService.updateHomePageSection(activeKey, activeSectionData);
      const savedData = res?.data?.sections?.[activeKey] || activeSectionData;
      
      setHomeData((prev) => ({
        ...prev,
        sections: {
          ...prev.sections,
          [activeKey]: savedData
        }
      }));
      setOriginalActiveData(JSON.parse(JSON.stringify(savedData)));
      addToast(`"${meta.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Failed to save: ${err.message}`, 'error');
    } finally {
      setSavingSection(false);
    }
  };

  // Reset active section handler
  const handleResetActiveSection = (toFactoryDefaults = false) => {
    let sourceData = null;
    if (toFactoryDefaults) {
      sourceData = INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
    } else {
      sourceData = originalActiveData || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
    }

    const resetSnapshot = JSON.parse(JSON.stringify(sourceData));
    setActiveSectionData(resetSnapshot);
    setResetVersion((v) => v + 1);
    setIsResetSectionModalOpen(false);

    if (toFactoryDefaults) {
      addToast(`"${meta.title}" restored to factory defaults! Click 'Save Changes' to apply.`, 'info');
    } else {
      addToast(`"${meta.title}" reset to original saved values!`, 'info');
    }
  };

  // Reset all 22 sections handler
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

  // Active section visibility boolean
  const isActiveSectionVisible =
    activeSectionData?.isVisible !== false && activeSectionData?.isEnabled !== false;

  // Active section index number (1-based position in homepage order)
  const activePositionIndex = sectionsOrder.indexOf(activeKey) + 1;

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header matching Firevy Admin Design System */}
      <div className="page-top-bar" style={{ marginBottom: '20px' }}>
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

          <button
            type="button"
            onClick={handleSaveActiveSection}
            className="btn btn-primary btn-sm"
            disabled={savingSection || loading}
          >
            {savingSection ? (
              <>
                <Loader2 className="animate-spin" size={15} />
                <span>Saving Changes...</span>
              </>
            ) : (
              <>
                <Save size={15} />
                <span>Save Section Changes</span>
              </>
            )}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="card" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <Loader2 className="animate-spin" size={36} style={{ margin: '0 auto 14px auto', color: '#006B8F' }} />
          <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Loading Home Page Sections...</p>
        </div>
      ) : (
        /* Master-Detail 2-Panel Split Workspace */
        <div className="cms-builder-workspace">
          {/* ========================================================= */}
          {/* LEFT RAIL: Page & Section Navigator + Positioning         */}
          {/* ========================================================= */}
          <aside className="cms-section-rail">
            {/* Rail Header */}
            <div className="cms-rail-header">
              <h3 className="cms-rail-title">
                <Layers size={15} style={{ color: 'var(--primary)' }} />
                <span>Page Sections</span>
              </h3>
            </div>

            {/* Quick Search Filter */}
            <div className="cms-rail-search">
              <Search size={14} className="cms-rail-search-icon" />
              <input
                type="text"
                className="cms-rail-search-input"
                placeholder="Search sections..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
            </div>

            {/* Scrollable Reorderable Section List */}
            <div className="cms-rail-list">
              {sectionsOrder
                .filter((key) => {
                  if (!searchFilter) return true;
                  const itemMeta = SECTION_METADATA[key] || { title: key, category: '', description: '', slug: '' };
                  const query = searchFilter.toLowerCase();
                  return (
                    itemMeta.title?.toLowerCase().includes(query) ||
                    itemMeta.category?.toLowerCase().includes(query) ||
                    itemMeta.slug?.toLowerCase().includes(query) ||
                    key.toLowerCase().includes(query)
                  );
                })
                .map((sectionKey) => {
                  const actualIdx = sectionsOrder.indexOf(sectionKey);
                  const sectionData = sections[sectionKey] || INITIAL_HOME_PAGE_DATA.sections[sectionKey] || {};
                  const isVisible = sectionData.isVisible !== false && sectionData.isEnabled !== false;
                  const itemMeta = SECTION_METADATA[sectionKey] || {
                    title: sectionKey,
                    category: 'General',
                    slug: `/#${sectionKey}`
                  };
                  const isSelected = activeKey === sectionKey;
                  const isDragging = draggedIndex === actualIdx;
                  const isDragOver = dragOverIndex === actualIdx;

                  return (
                    <div
                      key={sectionKey}
                      draggable={true}
                      onDragStart={(e) => handleDragStart(e, actualIdx)}
                      onDragOver={(e) => handleDragOver(e, actualIdx)}
                      onDragEnd={handleDragEnd}
                      onDrop={(e) => handleDrop(e, actualIdx)}
                      onClick={() => handleSelectSection(sectionKey)}
                      className={`cms-section-card ${isSelected ? 'active' : ''} ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
                      title="Click to edit section content. Drag grip icon to reposition."
                    >
                      {/* Left: Drag Grip + Position Number + Title & Slug */}
                      <div className="cms-card-left">
                        <div
                          className="cms-card-grip"
                          onClick={(e) => e.stopPropagation()}
                          title="Drag to change section position on homepage"
                        >
                          <GripVertical size={16} />
                        </div>

                        <div className="cms-card-number">
                          {actualIdx + 1}
                        </div>

                        <div className="cms-card-details">
                          <div className="cms-card-title">
                            {itemMeta.title}
                          </div>
                          <div className="cms-card-slug">
                            {`/#${sectionKey}`}
                          </div>
                        </div>
                      </div>

                      {/* Right: Toggle Switch + Chevron Indicator */}
                      <div className="cms-card-right">
                        <label
                          className="cms-switch-wrap"
                          onClick={(e) => e.stopPropagation()}
                          title={isVisible ? 'Click to hide from public home' : 'Click to show on public home'}
                        >
                          <input
                            type="checkbox"
                            className="cms-switch-input"
                            checked={isVisible}
                            onChange={(e) => handleToggleVisibility(sectionKey, e)}
                          />
                          <span className="cms-switch-slider" />
                        </label>

                        {isSelected && (
                          <div className="cms-card-arrow">
                            <ChevronRight size={15} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT PANE: Selected Section Edit Form / Detail Editor    */}
          {/* ========================================================= */}
          <main className="cms-editor-pane">
            {/* Section Header Bar */}
            <div className="cms-editor-header">
              <div className="cms-editor-header-left">
                <div className="cms-editor-badge">
                  {activePositionIndex || 1}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h2 className="cms-editor-title">
                      <span>{meta.title}</span>
                    </h2>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: '#E2E8F0',
                        color: '#334155'
                      }}
                    >
                      {meta.category}
                    </span>
                  </div>
                  <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: '#64748B' }}>
                    {meta.description || `Manage and customize the content displayed on this live section (/#${activeKey}).`}
                  </p>
                </div>
              </div>

              <div className="cms-editor-header-actions">
                <a
                  href={`/#${activeKey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <ExternalLink size={14} />
                  <span>Preview Public Home</span>
                </a>
              </div>
            </div>

            {/* Dynamic Active Section Editor */}
            {ActiveEditor && activeSectionData ? (
              <div>
                <ErrorBoundary
                  key={`${activeKey}-${resetVersion}`}
                  title={`${meta.title} Editor`}
                  onReset={() => handleResetActiveSection(false)}
                >
                  <ActiveEditor
                    key={`${activeKey}-${resetVersion}`}
                    data={activeSectionData}
                    onChange={handleActiveSectionChange}
                  />
                </ErrorBoundary>
              </div>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', color: '#64748B', backgroundColor: '#F8FAFC', borderRadius: '10px' }}>
                <p>No editor component registered for section "{activeKey}".</p>
              </div>
            )}

            {/* Sticky Action Bar at Bottom of Editor Pane */}
            <div className="cms-sticky-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    id="pageSectionVisible"
                    checked={isActiveSectionVisible}
                    onChange={(e) =>
                      setActiveSectionData((prev) => ({
                        ...prev,
                        isVisible: e.target.checked,
                        isEnabled: e.target.checked
                      }))
                    }
                    style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
                  />
                  <label htmlFor="pageSectionVisible" style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', userSelect: 'none' }}>
                    Visible on Public Home
                  </label>
                </div>

                <button
                  type="button"
                  onClick={() => setIsResetSectionModalOpen(true)}
                  className="btn btn-danger btn-sm"
                  title="Reset this section to original saved values"
                  disabled={savingSection || loading}
                >
                  <RotateCcw size={13} />
                  <span>Reset Section</span>
                </button>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => handleResetActiveSection(false)}
                  className="btn btn-secondary btn-sm"
                  disabled={savingSection}
                >
                  Revert Unsaved
                </button>

                <button
                  type="button"
                  onClick={handleSaveActiveSection}
                  className="btn btn-primary btn-sm"
                  disabled={savingSection || loading}
                >
                  {savingSection ? (
                    <>
                      <Loader2 className="animate-spin" size={15} />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 size={14} />
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* Reset Section Confirmation Modal */}
      <Modal
        isOpen={isResetSectionModalOpen}
        onClose={() => setIsResetSectionModalOpen(false)}
        title="Reset Section"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setIsResetSectionModalOpen(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleResetActiveSection(false)}
              className="btn btn-primary"
              style={{ backgroundColor: '#006B8F', borderColor: '#006B8F', color: '#FFFFFF' }}
            >
              Reset Unsaved Edits
            </button>
            <button
              type="button"
              onClick={() => handleResetActiveSection(true)}
              className="btn btn-danger"
              style={{ backgroundColor: '#DC2626', borderColor: '#DC2626', color: '#FFFFFF' }}
            >
              Restore Factory Defaults
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
              Reset "{meta.title}"?
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#64748B', lineHeight: '1.5' }}>
              Choose <strong>Reset Unsaved Edits</strong> to revert this form back to its last saved values, or <strong>Restore Factory Defaults</strong> to reload original template values.
            </p>
          </div>
        </div>
      </Modal>

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
