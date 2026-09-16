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
import SectionList from '../../components/UI/SectionList';

export const HomePageManager = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [homeData, setHomeData] = useState(INITIAL_HOME_PAGE_DATA);
  const [savedSections, setSavedSections] = useState(INITIAL_HOME_PAGE_DATA.sections);
  const [loading, setLoading] = useState(true);
  const [savingSection, setSavingSection] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // Active section key state
  const [activeKey, setActiveKey] = useState(params.sectionKey || 'hero');
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [resetVersion, setResetVersion] = useState(0);

  // Modals
  const [isResetAllModalOpen, setIsResetAllModalOpen] = useState(false);

  const initialSyncDone = useRef(false);

  // Fetch full homepage data from backend API
  const fetchHomePage = async () => {
    setLoading(true);
    try {
      const res = await adminService.getHomePageAdmin();
      if (res && res.data) {
        setHomeData(res.data);
        const incomingSections = res.data.sections || {};
        const mergedSections = {
          ...INITIAL_HOME_PAGE_DATA.sections,
          ...incomingSections
        };
        const clonedIncoming = JSON.parse(JSON.stringify(mergedSections));
        setSavedSections(clonedIncoming);

        const currentKey = params.sectionKey || activeKey || 'hero';
        const targetSaved = clonedIncoming[currentKey] || INITIAL_HOME_PAGE_DATA.sections[currentKey] || {};
        setActiveSectionData(JSON.parse(JSON.stringify(targetSaved)));
        setResetVersion((v) => v + 1);
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

  // Dynamically guarantee every section from initialSectionsOrder is present
  const sectionsOrder = (() => {
    const rawOrder = homeData?.sectionsOrder && Array.isArray(homeData.sectionsOrder) && homeData.sectionsOrder.length > 0
      ? homeData.sectionsOrder
      : initialSectionsOrder;
    const merged = [...rawOrder];
    initialSectionsOrder.forEach((key) => {
      if (!merged.includes(key)) {
        merged.push(key);
      }
    });
    return merged;
  })();

  const sections = {
    ...INITIAL_HOME_PAGE_DATA.sections,
    ...(homeData?.sections || {})
  };

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

  // When activeKey changes, load and deep clone its saved section data for editing
  useEffect(() => {
    if (!activeKey) return;
    const targetSaved = savedSections[activeKey]
      || sections[activeKey]
      || INITIAL_HOME_PAGE_DATA.sections[activeKey]
      || {};
    const cloned = JSON.parse(JSON.stringify(targetSaved));
    setActiveSectionData(cloned);
    setResetVersion((v) => v + 1);
  }, [activeKey]);

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
      const clonedSaved = JSON.parse(JSON.stringify(savedData));

      setSavedSections((prev) => ({
        ...prev,
        [activeKey]: clonedSaved
      }));
      setHomeData((prev) => ({
        ...prev,
        sections: {
          ...prev.sections,
          [activeKey]: clonedSaved
        }
      }));
      setActiveSectionData(JSON.parse(JSON.stringify(clonedSaved)));
      setResetVersion((v) => v + 1);
      addToast(`"${meta.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Failed to save: ${err.message}`, 'error');
    } finally {
      setSavingSection(false);
    }
  };

  // Reset active section handler: restores the original Main Website content before Admin customization
  const handleResetActiveSection = async () => {
    if (!activeKey) return;
    setSavingSection(true);
    try {
      // 1. Retrieve the original Main Website baseline content for this section
      const originalBaseline = INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
      const clonedOriginal = JSON.parse(JSON.stringify(originalBaseline));

      // 2. Persist the restored original content to the database via existing Home Page API
      const res = await adminService.updateHomePageSection(activeKey, clonedOriginal);
      const savedData = res?.data?.sections?.[activeKey] || clonedOriginal;
      const finalRestored = JSON.parse(JSON.stringify(savedData));

      // 3. Update saved baseline, homeData state, and activeSectionData
      setSavedSections((prev) => ({
        ...prev,
        [activeKey]: finalRestored
      }));
      setHomeData((prev) => ({
        ...prev,
        sections: {
          ...prev.sections,
          [activeKey]: finalRestored
        }
      }));
      setActiveSectionData(JSON.parse(JSON.stringify(finalRestored)));
      setResetVersion((v) => v + 1);

      // 4. Show success toast only after successful restore & database update
      addToast(`${meta.title} reset successfully`, 'success');
    } catch (err) {
      addToast(`Failed to reset section: ${err.message}`, 'error');
    } finally {
      setSavingSection(false);
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

  return (
    <div className="page-container">
      {/* Top Header matching Firevy Admin Design System Header Architecture */}
      <div className="page-top-bar" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="page-title-group" style={{ flex: '1 1 300px', minWidth: 0 }}>
          <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Home size={24} style={{ color: '#006B8F' }} />
            <span>Home Page Management</span>
          </h1>
          <p style={{ margin: '6px 0 0 0', fontSize: '0.875rem', color: '#64748B' }}>
            Manage all 22 public sections, content, cards, media assets, and drag-and-drop display order in real time.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', flexShrink: 0 }}>
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
            onClick={handleResetActiveSection}
            className="btn btn-secondary btn-sm"
            style={{
              color: '#475569',
              borderColor: 'var(--border-color, #E2E8F0)',
              backgroundColor: '#FFFFFF',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Restore this section to original Main Website content"
            disabled={savingSection || loading}
          >
            <RotateCcw size={14} />
            <span>Reset Section</span>
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
          <SectionList
            title="Page Sections"
            badgeCount={sectionsOrder.length}
            sectionsOrder={sectionsOrder}
            sectionsMetadata={SECTION_METADATA}
            sectionsState={sections}
            activeKey={activeKey}
            onSelectSection={handleSelectSection}
            onReorderSections={async (newOrder) => {
              setHomeData((prev) => ({
                ...prev,
                sectionsOrder: newOrder
              }));
              try {
                await adminService.reorderHomePageSections(newOrder);
                addToast('Section order reordered successfully via Drag & Drop!', 'success');
              } catch (err) {
                addToast(`Order update error: ${err.message}`, 'error');
              }
            }}
          />

          {/* ========================================================= */}
          {/* RIGHT PANE: Selected Section Edit Form / Detail Editor    */}
          {/* ========================================================= */}
          <main className="cms-editor-pane">
            {/* Section Header Bar matching Company Sub-Page Editor Layout */}
            <div className="cms-editor-header" style={{ marginBottom: '16px', paddingBottom: '14px' }}>
              <div className="cms-editor-header-left">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h2 className="cms-editor-title" style={{ textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '15px' }}>
                      <span>{meta.title}</span>
                    </h2>
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 700,
                        padding: '1px 7px',
                        borderRadius: '4px',
                        backgroundColor: '#E0F2FE',
                        color: '#0369A1',
                        border: '1px solid #BAE6FD'
                      }}
                    >
                      {meta.category}
                    </span>
                  </div>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12.5px', color: '#64748B', lineHeight: 1.35 }}>
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
                  <span>Preview Public Section</span>
                </a>
              </div>
            </div>

            {/* Dynamic Active Section Editor */}
            {ActiveEditor && activeSectionData ? (
              <div>
                <ErrorBoundary
                  key={`${activeKey}-${resetVersion}`}
                  title={`${meta.title} Editor`}
                  onReset={handleResetActiveSection}
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
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={handleResetActiveSection}
                  className="btn btn-secondary btn-sm"
                  style={{
                    color: '#475569',
                    borderColor: 'var(--border-color, #E2E8F0)',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  title="Restore this section to original Main Website content"
                  disabled={savingSection || loading}
                >
                  <RotateCcw size={14} />
                  <span>Reset Section</span>
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
