import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Save,
  RotateCcw,
  Loader2,
  AlertTriangle,
  Layers,
  Check
} from 'lucide-react';
import Modal from '../../components/UI/Modal';
import ErrorBoundary from '../../components/UI/ErrorBoundary';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { INITIAL_HOME_PAGE_DATA } from '../../../constants/initialHomePageData';
import { SECTION_METADATA } from '../../constants/sectionMetadata';

export const SectionEditorPage = () => {
  const { sectionKey } = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  const activeKey = sectionKey || 'aboutKeyMetrics';
  const meta = SECTION_METADATA[activeKey] || {
    title: activeKey || 'Section Editor',
    category: 'Home Section',
    description: 'Manage content, media assets, and settings for this section.'
  };

  const canonicalKey = meta.key || activeKey;
  const ActiveEditor = meta.editor;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [originalSectionData, setOriginalSectionData] = useState(null);
  const [resetVersion, setResetVersion] = useState(0);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Fetch Section Data on Mount or Route Change
  useEffect(() => {
    let isMounted = true;
    const loadSectionData = async () => {
      setLoading(true);
      try {
        const res = await adminService.getHomePageAdmin();
        if (isMounted) {
          const fetchedSections = res?.data?.sections || {};
          const existing = fetchedSections[canonicalKey] || fetchedSections[activeKey] || INITIAL_HOME_PAGE_DATA.sections[canonicalKey] || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
          const cloned = JSON.parse(JSON.stringify(existing));
          setSectionData(cloned);
          setOriginalSectionData(JSON.parse(JSON.stringify(existing)));
          setResetVersion(0);
        }
      } catch {
        if (isMounted) {
          const fallback = INITIAL_HOME_PAGE_DATA.sections[canonicalKey] || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
          setSectionData(JSON.parse(JSON.stringify(fallback)));
          setOriginalSectionData(JSON.parse(JSON.stringify(fallback)));
          addToast(`Loaded local default template for "${meta.title}".`, 'info');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadSectionData();
    return () => {
      isMounted = false;
    };
  }, [activeKey, canonicalKey]);

  // Save Handler
  const handleSave = async () => {
    if (!canonicalKey || !sectionData) return;
    setSaving(true);
    try {
      const res = await adminService.updateHomePageSection(canonicalKey, sectionData);
      const savedData = res?.data?.sections?.[canonicalKey] || sectionData;
      setSectionData(JSON.parse(JSON.stringify(savedData)));
      setOriginalSectionData(JSON.parse(JSON.stringify(savedData)));
      addToast(`"${meta.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Failed to save: ${err.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  // Reset Handler
  const handleReset = (toFactoryDefaults = false) => {
    let sourceData = null;
    if (toFactoryDefaults) {
      sourceData = INITIAL_HOME_PAGE_DATA.sections[canonicalKey] || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
    } else {
      sourceData = originalSectionData || INITIAL_HOME_PAGE_DATA.sections[canonicalKey] || INITIAL_HOME_PAGE_DATA.sections[activeKey] || {};
    }

    const resetSnapshot = JSON.parse(JSON.stringify(sourceData));
    setSectionData(resetSnapshot);
    setResetVersion((v) => v + 1);
    setIsResetModalOpen(false);

    if (toFactoryDefaults) {
      addToast(`"${meta.title}" restored to factory defaults! Click 'Save Changes' to apply.`, 'info');
    } else {
      addToast(`"${meta.title}" reset to original saved values!`, 'info');
    }
  };

  const isVisible = sectionData?.isVisible !== false && sectionData?.isEnabled !== false;

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header */}
      <div className="page-top-bar" style={{ marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Link
              to="/admin/home-page"
              className="btn btn-ghost btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#006B8F',
                backgroundColor: '#F0F9FF',
                borderRadius: '6px'
              }}
            >
              <ArrowLeft size={14} /> Back to Overview
            </Link>
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

          <div className="page-title-group">
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
              <Layers size={24} style={{ color: '#006B8F' }} />
              <span>{meta.title}</span>
            </h1>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748B' }}>
              {meta.description}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="/"
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

      {/* Main Content Area */}
      {loading ? (
        <div className="card" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <Loader2 className="animate-spin" size={36} style={{ margin: '0 auto 14px auto', color: '#006B8F' }} />
          <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Loading {meta.title} content...</p>
        </div>
      ) : ActiveEditor && sectionData ? (
        <div className="card" style={{ padding: '24px', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <ErrorBoundary
            key={`${canonicalKey}-${resetVersion}`}
            title={`${meta.title} Editor`}
            onReset={() => handleReset(false)}
          >
            <ActiveEditor
              key={`${canonicalKey}-${resetVersion}`}
              data={sectionData}
              onChange={(updated) => setSectionData(updated)}
            />
          </ErrorBoundary>
        </div>
      ) : (
        <div className="card" style={{ padding: '40px', textAlign: 'center', color: '#64748B', backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
          No editor component found for section key "{activeKey}".
        </div>
      )}

      {/* Pinned Bottom Sticky Action Bar */}
      <div
        style={{
          position: 'sticky',
          bottom: '16px',
          backgroundColor: '#FFFFFF',
          border: '1.5px solid #E2E8F0',
          borderRadius: '10px',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          zIndex: 40,
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '20px'
        }}
      >
        {/* LEFT: Visible on Public Home + Reset Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              id="pageSectionVisible"
              checked={isVisible}
              onChange={(e) => setSectionData({ ...sectionData, isVisible: e.target.checked, isEnabled: e.target.checked })}
              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
            />
            <label htmlFor="pageSectionVisible" style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', userSelect: 'none' }}>
              Visible on Public Home
            </label>
          </div>

          <button
            type="button"
            onClick={() => handleReset(false)}
            className="btn btn-danger btn-sm"
            title="Reset this section to original saved values"
            disabled={saving || loading}
          >
            <RotateCcw size={13} /> Reset Section
          </button>
        </div>

        {/* RIGHT: Cancel + Save Changes */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => navigate('/admin/home-page')}
            className="btn btn-secondary btn-sm"
            disabled={saving}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="btn btn-primary btn-sm"
            disabled={saving || loading}
          >
            {saving ? (
              <>
                <Loader2 className="animate-spin" size={15} /> Saving...
              </>
            ) : (
              <>
                <Save size={15} /> Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Reset Section Confirmation Modal */}
      <Modal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        title="Reset Section"
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setIsResetModalOpen(false)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleReset(false)}
              className="btn btn-primary"
              style={{ backgroundColor: '#006B8F', borderColor: '#006B8F', color: '#FFFFFF' }}
            >
              Reset Unsaved Edits
            </button>
            <button
              type="button"
              onClick={() => handleReset(true)}
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
    </div>
  );
};

export default SectionEditorPage;
