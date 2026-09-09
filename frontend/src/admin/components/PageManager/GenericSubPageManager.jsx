import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  RotateCcw,
  ExternalLink,
  Loader2,
  GripVertical,
  Search,
  ChevronRight,
  ChevronDown,
  Save,
  Layers,
  CheckCircle2,
  Sparkles,
  Plus,
  Trash2,
  Upload,
  Eye,
  Globe,
  Layout,
  HelpCircle
} from 'lucide-react';
import Badge from '../UI/Badge';
import ErrorBoundary from '../UI/ErrorBoundary';
import companyService from '../../services/companyService';
import { useToast } from '../../context/ToastContext';
import CompanyCrudManager from '../CompanyAdmin/CompanyCrudManager';
import CareersAdminPage from '../../pages/CareersAdminPage';
import { PAGE_HIERARCHY_REGISTRY } from '../../constants/pageHierarchyRegistry';
import SectionList from '../UI/SectionList';

/**
 * GenericSubPageManager
 * 
 * Reusable Page Management & Section CMS Editor for all Sub-Pages across:
 * - Company (20 Sub-Pages)
 * - Product (12 Sub-Pages)
 * - Services (10 Sub-Pages)
 * - Hire Developers (10 Sub-Pages)
 * - Technology (8 Sub-Pages)
 * - Our Work (7 Sub-Pages)
 * 
 * Implements the exact same 2-panel master-detail layout as Home Page Management:
 * Left: "PAGE SECTIONS" (reorderable list with search, drag/drop, toggle, active highlight)
 * Right: "EDIT SECTION" (custom editor for active section with Save, Reset, Preview)
 */
export const GenericSubPageManager = ({
  mainPageId = 'company',
  subPageSlug = null,
  overrideConfig = null
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  // Resolve Main Page Group Configuration
  const mainGroup = useMemo(() => {
    return PAGE_HIERARCHY_REGISTRY[mainPageId] || {
      id: mainPageId,
      title: mainPageId.charAt(0).toUpperCase() + mainPageId.slice(1),
      basePath: `/admin/${mainPageId}`,
      subPages: []
    };
  }, [mainPageId]);

  // Resolve active Sub-Page slug
  const activeSubPageSlug = useMemo(() => {
    if (subPageSlug) return subPageSlug;
    if (params.subPage) return params.subPage;
    if (params.slug) return params.slug;
    return mainGroup.subPages[0]?.slug || mainGroup.subPages[0]?.key || '';
  }, [subPageSlug, params.subPage, params.slug, mainGroup]);

  // Active Sub-Page Configuration
  const currentSubPage = useMemo(() => {
    if (overrideConfig) return overrideConfig;
    return (
      mainGroup.subPages.find(
        (sp) => sp.slug === activeSubPageSlug || sp.key === activeSubPageSlug
      ) || mainGroup.subPages[0] || null
    );
  }, [mainGroup, activeSubPageSlug, overrideConfig]);

  const defaultSectionsList = useMemo(() => {
    if (currentSubPage?.sections && currentSubPage.sections.length > 0) {
      return currentSubPage.sections;
    }
    // Fallback standard 4-section architecture if not explicitly defined
    return [
      { key: 'hero', title: 'Hero Banner', category: 'Hero', type: 'hero', description: 'Headline, badge, subtitle, and primary button.' },
      { key: 'features', title: 'Core Features & Offerings', category: 'Cards Grid', type: 'cards', description: 'Feature cards with titles and descriptions.' },
      { key: 'stats', title: 'Performance Metrics', category: 'Metrics', type: 'stats', description: 'Key performance statistics and highlights.' },
      { key: 'cta', title: 'Call to Action Banner', category: 'CTA', type: 'cta', description: 'Engagement banner and consultation button.' }
    ];
  }, [currentSubPage]);

  const sectionsMetadataMap = useMemo(() => {
    return defaultSectionsList.reduce((acc, s) => {
      acc[s.key] = s;
      return acc;
    }, {});
  }, [defaultSectionsList]);

  // State Management
  const [pageData, setPageData] = useState(null);
  const [sectionsOrder, setSectionsOrder] = useState(() => defaultSectionsList.map((s) => s.key));
  const [sectionsState, setSectionsState] = useState({});
  const [loading, setLoading] = useState(true);
  const [savingSection, setSavingSection] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [isSubPageDropdownOpen, setIsSubPageDropdownOpen] = useState(false);

  // Active Section Key
  const [activeSectionKey, setActiveSectionKey] = useState(
    params.sectionKey || defaultSectionsList[0]?.key || 'hero'
  );
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [resetVersion, setResetVersion] = useState(0);

  const initialSyncRef = useRef(false);

  // Reset state when sub-page slug changes
  useEffect(() => {
    setSectionsOrder(defaultSectionsList.map((s) => s.key));
    setActiveSectionKey(params.sectionKey || defaultSectionsList[0]?.key || 'hero');
    initialSyncRef.current = false;
  }, [activeSubPageSlug, defaultSectionsList]);

  // Fetch sub-page section data from API
  const fetchSubPageData = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setLoading(true);
    try {
      const res = await companyService.getSection(targetSlug, true); // admin=true
      if (res && res.data) {
        setPageData(res.data);
        
        // Initialize section blocks
        const initialBlocks = {
          hero: {
            title: res.data.title || currentSubPage.title,
            subtitle: res.data.subtitle || currentSubPage.description,
            badge: res.data.badge || currentSubPage.category,
            ctaText: res.data.ctaText || 'Get Started',
            ctaLink: res.data.ctaLink || '/contact',
            secondaryCtaText: res.data.secondaryCtaText || '',
            secondaryCtaLink: res.data.secondaryCtaLink || '',
            heroImage: res.data.heroImage || '',
            isEnabled: true,
            isVisible: true
          },
          features: {
            title: res.data.contentSections?.[0]?.heading || 'Key Capabilities & Features',
            subtitle: res.data.contentSections?.[0]?.subheading || '',
            description: res.data.contentSections?.[0]?.text || '',
            cards: res.data.cards || res.data.items || [],
            isEnabled: true,
            isVisible: true
          },
          overview: {
            title: res.data.contentSections?.[0]?.heading || 'Company Overview',
            subtitle: res.data.contentSections?.[0]?.subheading || '',
            text: res.data.contentSections?.[0]?.text || '',
            isEnabled: true,
            isVisible: true
          },
          stats: {
            title: 'Key Metrics & Numbers',
            stats: res.data.stats || [],
            isEnabled: true,
            isVisible: true
          },
          values: {
            title: 'Core Values',
            cards: res.data.cards || res.data.items || [],
            isEnabled: true,
            isVisible: true
          },
          missionVision: {
            title: 'Mission & Vision',
            content: res.data.content || {},
            isEnabled: true,
            isVisible: true
          },
          process: {
            title: 'Process Workflow',
            steps: res.data.steps || res.data.items || [],
            isEnabled: true,
            isVisible: true
          },
          cta: {
            title: 'Ready to Transform Your Business?',
            subtitle: 'Schedule a free architecture consultation with our engineering leads.',
            buttonText: 'Contact Us',
            buttonLink: '/contact',
            isEnabled: true,
            isVisible: true
          },
          seo: {
            metaTitle: res.data.seo?.metaTitle || `${currentSubPage.title} | Firevy.co`,
            metaDescription: res.data.seo?.metaDescription || currentSubPage.description,
            metaKeywords: res.data.seo?.metaKeywords || '',
            canonical: res.data.seo?.canonical || currentSubPage.publicRoute
          }
        };

        // Merge any custom content sections
        if (res.data.contentSections && Array.isArray(res.data.contentSections)) {
          res.data.contentSections.forEach((sec, idx) => {
            const secKey = sec.key || `customSection_${idx}`;
            initialBlocks[secKey] = {
              title: sec.heading || sec.title || `Section ${idx + 1}`,
              subtitle: sec.subheading || '',
              description: sec.text || sec.description || '',
              cards: sec.cards || [],
              isEnabled: true,
              isVisible: true
            };
          });
        }

        setSectionsState(initialBlocks);
        
        // Set active section data
        const currKey = activeSectionKey || defaultSectionsList[0]?.key || 'hero';
        setActiveSectionData(initialBlocks[currKey] || initialBlocks.hero || {});
      }
    } catch (err) {
      console.warn('Using baseline sub-page structure:', err.message);
      // Construct fallback baseline
      const fallbackBlocks = {
        hero: {
          title: currentSubPage.title,
          subtitle: currentSubPage.description,
          badge: currentSubPage.category,
          ctaText: 'Get Started',
          ctaLink: '/contact',
          heroImage: '',
          isEnabled: true,
          isVisible: true
        },
        features: {
          title: 'Capabilities & Core Modules',
          cards: [],
          isEnabled: true,
          isVisible: true
        },
        stats: {
          title: 'Performance Stats',
          stats: [],
          isEnabled: true,
          isVisible: true
        },
        cta: {
          title: 'Partner With Firevy',
          subtitle: 'Experience enterprise digital innovation.',
          buttonText: 'Contact Us',
          buttonLink: '/contact',
          isEnabled: true,
          isVisible: true
        },
        seo: {
          metaTitle: `${currentSubPage.title} | Firevy.co`,
          metaDescription: currentSubPage.description,
          metaKeywords: '',
          canonical: currentSubPage.publicRoute
        }
      };
      setSectionsState(fallbackBlocks);
      setActiveSectionData(fallbackBlocks[activeSectionKey] || fallbackBlocks.hero);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubPageData();
  }, [activeSubPageSlug]);

  // Sync active section when activeSectionKey changes
  useEffect(() => {
    if (!activeSectionKey) return;
    const data = sectionsState[activeSectionKey] || {
      title: activeSectionKey,
      isEnabled: true,
      isVisible: true
    };
    setActiveSectionData(JSON.parse(JSON.stringify(data)));
    setResetVersion((v) => v + 1);
  }, [activeSectionKey]);

  // Current active section metadata
  const activeSectionMeta = useMemo(() => {
    return (
      defaultSectionsList.find((s) => s.key === activeSectionKey) || {
        key: activeSectionKey,
        title: activeSectionKey,
        category: 'Page Section',
        type: 'content',
        description: 'Manage section layout and content.'
      }
    );
  }, [activeSectionKey, defaultSectionsList]);

  // Select section handler
  const handleSelectSection = (key) => {
    setActiveSectionKey(key);
  };

  // Toggle Section Visibility
  const handleToggleVisibility = (sectionKey, e) => {
    if (e) e.stopPropagation();
    const currentVal = sectionsState[sectionKey]?.isVisible !== false && sectionsState[sectionKey]?.isEnabled !== false;
    const updated = {
      ...(sectionsState[sectionKey] || {}),
      isVisible: !currentVal,
      isEnabled: !currentVal
    };

    setSectionsState((prev) => ({
      ...prev,
      [sectionKey]: updated
    }));

    if (sectionKey === activeSectionKey) {
      setActiveSectionData((prev) => ({
        ...prev,
        isVisible: !currentVal,
        isEnabled: !currentVal
      }));
    }

    addToast(`Section "${sectionKey}" ${!currentVal ? 'enabled' : 'hidden'}`, 'info');
  };

  // Drag & Drop Reordering
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

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newOrder = [...sectionsOrder];
    const [moved] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, moved);

    setSectionsOrder(newOrder);
    setDraggedIndex(null);
    setDragOverIndex(null);
    addToast('Section order reordered successfully via Drag & Drop!', 'success');
  };

  // Save active section changes (Draft mode)
  const handleSaveActiveSection = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setSavingSection(true);

    try {
      // Prepare comprehensive draft payload
      const updatedSections = {
        ...sectionsState,
        [activeSectionKey]: activeSectionData
      };

      const heroData = updatedSections.hero || {};
      const payload = {
        title: heroData.title || currentSubPage.title,
        subtitle: heroData.subtitle || currentSubPage.description,
        badge: heroData.badge || currentSubPage.category,
        ctaText: heroData.ctaText || 'Get Started',
        ctaLink: heroData.ctaLink || '/contact',
        secondaryCtaText: heroData.secondaryCtaText || '',
        secondaryCtaLink: heroData.secondaryCtaLink || '',
        heroImage: heroData.heroImage || '',
        stats: updatedSections.stats?.stats || pageData?.stats || [],
        cards: updatedSections.features?.cards || updatedSections.values?.cards || pageData?.cards || [],
        items: updatedSections.features?.cards || updatedSections.values?.cards || pageData?.items || [],
        steps: updatedSections.process?.steps || [],
        seo: updatedSections.seo || pageData?.seo || {},
        sectionsOrder: sectionsOrder,
        content: updatedSections
      };

      const res = await companyService.saveDraft(targetSlug, payload);
      if (res && res.data) {
        setPageData(res.data);
      }
      setSectionsState(updatedSections);
      addToast(`"${activeSectionMeta.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Save error: ${err.message}`, 'error');
    } finally {
      setSavingSection(false);
    }
  };

  // Publish Sub-Page to Live Website
  const handlePublishPage = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setPublishing(true);
    try {
      // First save current active section
      await handleSaveActiveSection();
      // Then publish
      const res = await companyService.publishSection(targetSlug);
      if (res && res.data) {
        setPageData(res.data);
      }
      addToast(`"${currentSubPage.title}" published to live website!`, 'success');
    } catch (err) {
      addToast(`Publish error: ${err.message}`, 'error');
    } finally {
      setPublishing(false);
    }
  };

  // Reset active section to original baseline
  const handleResetActiveSection = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setSavingSection(true);
    try {
      const res = await companyService.resetSection(targetSlug);
      if (res && res.data) {
        setPageData(res.data);
        await fetchSubPageData();
      }
      setResetVersion((v) => v + 1);
      addToast(`${activeSectionMeta.title} reset successfully`, 'success');
    } catch (err) {
      addToast(`Reset error: ${err.message}`, 'error');
    } finally {
      setSavingSection(false);
    }
  };

  const MainIcon = mainGroup.icon || Layers;
  const SubIcon = currentSubPage?.icon || Layers;
  const isPublished = pageData?.status === 'published';

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header matching Firevy Admin Design System */}
      <div className="page-top-bar" style={{ marginBottom: '20px' }}>
        <div className="page-title-group">
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#64748B', marginBottom: '6px', fontWeight: 600 }}>
            <Link to={mainGroup.basePath} style={{ color: '#006B8F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MainIcon size={14} />
              <span>{mainGroup.title}</span>
            </Link>
            <ChevronRight size={12} />
            
            {/* Sub-Page Quick Hop Dropdown */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                type="button"
                onClick={() => setIsSubPageDropdownOpen(!isSubPageDropdownOpen)}
                style={{
                  background: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '2px 8px',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{currentSubPage?.title}</span>
                <ChevronDown size={13} />
              </button>

              {isSubPageDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    marginTop: '4px',
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    zIndex: 100,
                    minWidth: '240px',
                    maxHeight: '320px',
                    overflowY: 'auto',
                    padding: '4px'
                  }}
                >
                  <div style={{ padding: '6px 10px', fontSize: '0.6875rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>
                    {mainGroup.title} Sub-Pages
                  </div>
                  {mainGroup.subPages.map((sp) => {
                    const isSelected = sp.slug === currentSubPage?.slug || sp.key === currentSubPage?.key;
                    return (
                      <button
                        key={sp.slug || sp.key}
                        type="button"
                        onClick={() => {
                          setIsSubPageDropdownOpen(false);
                          navigate(`${mainGroup.basePath}/${sp.slug || sp.key}`);
                        }}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 12px',
                          border: 'none',
                          background: isSelected ? '#E0F2FE' : 'transparent',
                          color: isSelected ? '#0369A1' : '#1E293B',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.8125rem',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <span>{sp.title}</span>
                        {isSelected && <CheckCircle2 size={14} style={{ color: '#0369A1' }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <Badge variant={isPublished ? 'emerald' : 'amber'} size="sm">
              {isPublished ? '● Published' : '○ Draft'}
            </Badge>
          </div>

          <h1>
            <SubIcon size={24} />
            <span>{currentSubPage?.title} Management</span>
          </h1>
          <p>{currentSubPage?.description}</p>
        </div>

        {/* Action Buttons Top Bar */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {currentSubPage?.publicRoute && (
            <a
              href={currentSubPage.publicRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Preview live public page"
            >
              <ExternalLink size={14} />
              <span>Preview Public Page</span>
            </a>
          )}

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
            title="Restore this section to original baseline content"
            disabled={savingSection || loading}
          >
            <RotateCcw size={14} />
            <span>Reset Section</span>
          </button>

          <button
            type="button"
            onClick={handleSaveActiveSection}
            className="btn btn-secondary btn-sm"
            style={{ fontWeight: 600 }}
            disabled={savingSection || loading}
          >
            {savingSection ? (
              <>
                <Loader2 className="animate-spin" size={14} />
                <span>Saving Draft...</span>
              </>
            ) : (
              <>
                <Save size={14} />
                <span>Save Draft</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePublishPage}
            className="btn btn-primary btn-sm"
            disabled={publishing || loading}
          >
            {publishing ? (
              <>
                <Loader2 className="animate-spin" size={14} />
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <Globe size={14} />
                <span>Publish Live</span>
              </>
            )}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="card" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
          <Loader2 className="animate-spin" size={36} style={{ margin: '0 auto 14px auto', color: '#006B8F' }} />
          <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>Loading Page Sections & Content...</p>
        </div>
      ) : (
        /* Master-Detail 2-Panel Split Workspace */
        <div className="cms-builder-workspace">
          {/* ========================================================= */}
          {/* LEFT RAIL: Page Sections Navigator                        */}
          {/* ========================================================= */}
          <SectionList
            title="Page Sections"
            badgeCount={sectionsOrder.length}
            sectionsOrder={sectionsOrder}
            sectionsMetadata={sectionsMetadataMap}
            sectionsState={sectionsState}
            activeKey={activeSectionKey}
            onSelectSection={handleSelectSection}
            onToggleVisibility={handleToggleVisibility}
            onReorderSections={(newOrder) => setSectionsOrder(newOrder)}
          />

          {/* ========================================================= */}
          {/* RIGHT PANEL: Active Section Edit Form                     */}
          {/* ========================================================= */}
          <main className="cms-editor-panel" key={`${activeSectionKey}-${resetVersion}`}>
            {/* Active Section Header */}
            <div className="cms-editor-header">
              <div className="cms-editor-title-wrap">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Badge variant="cyan" size="sm">
                    Position #{sectionsOrder.indexOf(activeSectionKey) + 1}
                  </Badge>
                  <Badge variant="slate" size="sm">{activeSectionMeta.category}</Badge>
                </div>
                <h2>{activeSectionMeta.title}</h2>
                <p>{activeSectionMeta.description}</p>
              </div>

              <div className="cms-editor-actions">
                <button
                  type="button"
                  onClick={handleResetActiveSection}
                  className="btn btn-secondary btn-sm"
                  style={{ fontWeight: 600 }}
                  disabled={savingSection}
                >
                  <RotateCcw size={14} />
                  <span>Reset Section</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveActiveSection}
                  className="btn btn-primary btn-sm"
                  disabled={savingSection}
                >
                  {savingSection ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>Save Section Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Dynamic Form Editor by Section Type */}
            <div className="cms-editor-form-wrap">
              <ErrorBoundary>
                {/* 1. COLLECTION CRUD (e.g. Team, Events, Awards, Videos, Podcasts, Blogs) */}
                {activeSectionMeta.type === 'collection' ? (
                  <CollectionSectionEditor
                    collectionType={activeSectionMeta.collectionType}
                    subPageTitle={currentSubPage.title}
                    publicRoute={currentSubPage.publicRoute}
                  />
                ) : activeSectionMeta.type === 'jobs' ? (
                  <CareersAdminPage />
                ) : activeSectionMeta.type === 'hero' ? (
                  /* 2. HERO SECTION EDITOR */
                  <HeroSectionForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                ) : activeSectionMeta.type === 'stats' ? (
                  /* 3. STATS & METRICS EDITOR */
                  <StatsSectionForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                ) : activeSectionMeta.type === 'cards' ? (
                  /* 4. CARDS & FEATURES GRID EDITOR */
                  <CardsSectionForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                ) : activeSectionMeta.type === 'process' ? (
                  /* 5. PROCESS STEPS EDITOR */
                  <ProcessSectionForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                ) : activeSectionMeta.type === 'seo' ? (
                  /* 6. SEO & METADATA EDITOR */
                  <SeoSectionForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                ) : (
                  /* 7. STANDARD CONTENT / CTA EDITOR */
                  <StandardContentForm
                    data={activeSectionData}
                    onChange={(updated) => setActiveSectionData(updated)}
                  />
                )}
              </ErrorBoundary>
            </div>

            {/* Bottom Save Footer */}
            <div className="cms-editor-footer">
              <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Editing section <strong>{activeSectionMeta.title}</strong> of <em>{currentSubPage.title}</em>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handleResetActiveSection}
                  className="btn btn-secondary btn-sm"
                  disabled={savingSection}
                >
                  <RotateCcw size={14} />
                  <span>Reset Section</span>
                </button>
                <button
                  type="button"
                  onClick={handleSaveActiveSection}
                  className="btn btn-primary btn-sm"
                  disabled={savingSection}
                >
                  {savingSection ? (
                    <>
                      <Loader2 className="animate-spin" size={14} />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>Save Section Changes</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

// =========================================================================
// SUB-FORM EDITORS
// =========================================================================

/** Hero Section Form */
const HeroSectionForm = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Hero Badge / Category Tag</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. Enterprise Engineering"
          value={data?.badge || ''}
          onChange={(e) => updateField('badge', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Hero Title / Heading <span className="text-danger">*</span></label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter primary hero title..."
          value={data?.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Hero Subtitle / Description</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Enter supporting hero narrative..."
          value={data?.subtitle || ''}
          onChange={(e) => updateField('subtitle', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label">Primary Button Text</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Get Started"
            value={data?.ctaText || ''}
            onChange={(e) => updateField('ctaText', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Primary Button Link</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. /contact"
            value={data?.ctaLink || ''}
            onChange={(e) => updateField('ctaLink', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label">Secondary Button Text (Optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. View Case Studies"
            value={data?.secondaryCtaText || ''}
            onChange={(e) => updateField('secondaryCtaText', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Secondary Button Link (Optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. /portfolio"
            value={data?.secondaryCtaLink || ''}
            onChange={(e) => updateField('secondaryCtaLink', e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Hero Image URL / Media Asset</label>
        <input
          type="text"
          className="form-control"
          placeholder="https://images.unsplash.com/..."
          value={data?.heroImage || ''}
          onChange={(e) => updateField('heroImage', e.target.value)}
        />
        {data?.heroImage && (
          <div style={{ marginTop: '10px' }}>
            <img
              src={data.heroImage}
              alt="Hero Preview"
              style={{ maxHeight: '180px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #E2E8F0' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

/** Stats & Metrics Form */
const StatsSectionForm = ({ data = {}, onChange }) => {
  const statsList = Array.isArray(data?.stats) ? data.stats : [];

  const handleAddStat = () => {
    const newStats = [...statsList, { label: 'New Metric', value: '100+' }];
    onChange({ ...data, stats: newStats });
  };

  const handleUpdateStat = (idx, field, val) => {
    const updated = [...statsList];
    updated[idx] = { ...updated[idx], [field]: val };
    onChange({ ...data, stats: updated });
  };

  const handleDeleteStat = (idx) => {
    const updated = statsList.filter((_, i) => i !== idx);
    onChange({ ...data, stats: updated });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Section Title</label>
        <input
          type="text"
          className="form-control"
          value={data?.title || 'Key Metrics & Numbers'}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, margin: 0 }}>Stat Items ({statsList.length})</h4>
        <button type="button" onClick={handleAddStat} className="btn btn-secondary btn-sm">
          <Plus size={14} />
          <span>Add Metric</span>
        </button>
      </div>

      <div className="space-y-3">
        {statsList.map((st, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              padding: '12px',
              background: '#F8FAFC',
              borderRadius: '8px',
              border: '1px solid #E2E8F0'
            }}
          >
            <div style={{ flex: 1 }}>
              <input
                type="text"
                className="form-control"
                placeholder="Value (e.g. 99.9%)"
                value={st.value || ''}
                onChange={(e) => handleUpdateStat(idx, 'value', e.target.value)}
              />
            </div>
            <div style={{ flex: 2 }}>
              <input
                type="text"
                className="form-control"
                placeholder="Label (e.g. Uptime SLA)"
                value={st.label || ''}
                onChange={(e) => handleUpdateStat(idx, 'label', e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => handleDeleteStat(idx)}
              className="btn btn-ghost btn-icon-sm"
              style={{ color: '#EF4444' }}
              title="Delete stat"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Cards & Features Grid Form */
const CardsSectionForm = ({ data = {}, onChange }) => {
  const cardsList = Array.isArray(data?.cards) ? data.cards : [];

  const handleAddCard = () => {
    const newCards = [
      ...cardsList,
      {
        title: 'New Feature / Card',
        desc: 'Describe functionality, workflows, and benefits...',
        icon: 'Sparkles',
        link: ''
      }
    ];
    onChange({ ...data, cards: newCards });
  };

  const handleUpdateCard = (idx, field, val) => {
    const updated = [...cardsList];
    updated[idx] = { ...updated[idx], [field]: val };
    onChange({ ...data, cards: updated });
  };

  const handleDeleteCard = (idx) => {
    const updated = cardsList.filter((_, i) => i !== idx);
    onChange({ ...data, cards: updated });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Section Heading</label>
        <input
          type="text"
          className="form-control"
          value={data?.title || 'Core Capabilities'}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Section Description (Optional)</label>
        <textarea
          className="form-control"
          rows={2}
          value={data?.description || ''}
          onChange={(e) => onChange({ ...data, description: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, margin: 0 }}>Cards & Items ({cardsList.length})</h4>
        <button type="button" onClick={handleAddCard} className="btn btn-secondary btn-sm">
          <Plus size={14} />
          <span>Add Card</span>
        </button>
      </div>

      <div className="space-y-4">
        {cardsList.map((cd, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px',
              background: '#F8FAFC',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369A1' }}>CARD #{idx + 1}</span>
              <button
                type="button"
                onClick={() => handleDeleteCard(idx)}
                className="btn btn-ghost btn-icon-sm"
                style={{ color: '#EF4444' }}
                title="Remove Card"
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Card Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={cd.title || ''}
                  onChange={(e) => handleUpdateCard(idx, 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Icon / Tag</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. ShieldCheck, Zap, Sparkles"
                  value={cd.icon || ''}
                  onChange={(e) => handleUpdateCard(idx, 'icon', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group mb-0">
              <label className="form-label" style={{ fontSize: '0.75rem' }}>Card Description</label>
              <textarea
                className="form-control"
                rows={2}
                value={cd.desc || cd.description || ''}
                onChange={(e) => handleUpdateCard(idx, 'desc', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Process Steps Form */
const ProcessSectionForm = ({ data = {}, onChange }) => {
  const stepsList = Array.isArray(data?.steps) ? data.steps : [];

  const handleAddStep = () => {
    const newSteps = [
      ...stepsList,
      {
        step: stepsList.length + 1,
        title: 'New Step',
        desc: 'Step description...'
      }
    ];
    onChange({ ...data, steps: newSteps });
  };

  const handleUpdateStep = (idx, field, val) => {
    const updated = [...stepsList];
    updated[idx] = { ...updated[idx], [field]: val };
    onChange({ ...data, steps: updated });
  };

  const handleDeleteStep = (idx) => {
    const updated = stepsList.filter((_, i) => i !== idx);
    onChange({ ...data, steps: updated });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Process Section Title</label>
        <input
          type="text"
          className="form-control"
          value={data?.title || 'Execution Process'}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: 700, margin: 0 }}>Process Steps ({stepsList.length})</h4>
        <button type="button" onClick={handleAddStep} className="btn btn-secondary btn-sm">
          <Plus size={14} />
          <span>Add Step</span>
        </button>
      </div>

      <div className="space-y-3">
        {stepsList.map((st, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '12px',
              padding: '12px',
              background: '#F8FAFC',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              alignItems: 'flex-start'
            }}
          >
            <div style={{ width: '40px', fontWeight: 700, color: '#006B8F', fontSize: '1rem', paddingTop: '8px' }}>
              #{idx + 1}
            </div>
            <div style={{ flex: 1 }} className="space-y-2">
              <input
                type="text"
                className="form-control"
                placeholder="Step Title"
                value={st.title || ''}
                onChange={(e) => handleUpdateStep(idx, 'title', e.target.value)}
              />
              <textarea
                className="form-control"
                rows={2}
                placeholder="Step Description..."
                value={st.desc || st.description || ''}
                onChange={(e) => handleUpdateStep(idx, 'desc', e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => handleDeleteStep(idx)}
              className="btn btn-ghost btn-icon-sm"
              style={{ color: '#EF4444' }}
              title="Delete step"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

/** SEO & Metadata Form */
const SeoSectionForm = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Page Meta Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. About Firevy | Digital Transformation & Enterprise Software"
          value={data?.metaTitle || ''}
          onChange={(e) => updateField('metaTitle', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Meta Description</label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Enter Google search snippet meta description..."
          value={data?.metaDescription || ''}
          onChange={(e) => updateField('metaDescription', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Meta Keywords (Comma separated)</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. software development, react, mobile apps, enterprise cloud"
          value={data?.metaKeywords || ''}
          onChange={(e) => updateField('metaKeywords', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Canonical URL</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. /company/about-firevy"
          value={data?.canonical || ''}
          onChange={(e) => updateField('canonical', e.target.value)}
        />
      </div>
    </div>
  );
};

/** Standard Content / CTA Form */
const StandardContentForm = ({ data = {}, onChange }) => {
  const updateField = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="form-group">
        <label className="form-label">Section Heading / Title</label>
        <input
          type="text"
          className="form-control"
          value={data?.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Section Subheading / Tagline</label>
        <input
          type="text"
          className="form-control"
          value={data?.subtitle || ''}
          onChange={(e) => updateField('subtitle', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Narrative Text / Content Body</label>
        <textarea
          className="form-control"
          rows={5}
          value={data?.text || data?.description || ''}
          onChange={(e) => updateField('text', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label">CTA Button Label</label>
          <input
            type="text"
            className="form-control"
            value={data?.buttonText || data?.ctaText || ''}
            onChange={(e) => updateField('buttonText', e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">CTA Button Target Link</label>
          <input
            type="text"
            className="form-control"
            value={data?.buttonLink || data?.ctaLink || ''}
            onChange={(e) => updateField('buttonLink', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

/** Collection Section Editor Wrapper */
const CollectionSectionEditor = ({ collectionType, subPageTitle, publicRoute }) => {
  return (
    <CompanyCrudManager
      pageTitle={`${subPageTitle} Directory`}
      pageSubtitle={`Manage, add, edit, reorder, and toggle items for ${subPageTitle}.`}
      collectionType={collectionType}
      publicRoute={publicRoute}
      itemTitle={subPageTitle}
    />
  );
};

export default GenericSubPageManager;
