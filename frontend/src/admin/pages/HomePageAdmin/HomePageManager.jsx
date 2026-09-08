import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Home,
  Sliders,
  Layers,
  Briefcase,
  Users2,
  Inbox,
  Building2,
  Cpu,
  Star,
  Eye,
  EyeOff,
  Edit2,
  RotateCcw,
  ExternalLink,
  Save,
  CheckCircle2,
  Sparkles,
  Loader2,
  GripVertical,
  AlertTriangle,
  Search,
  Check
} from 'lucide-react';
import Drawer from '../../components/UI/Drawer';
import Modal from '../../components/UI/Modal';
import Badge from '../../components/UI/Badge';
import ErrorBoundary from '../../components/UI/ErrorBoundary';
import adminService from '../../services/adminService';
import { useToast } from '../../context/ToastContext';
import { INITIAL_HOME_PAGE_DATA, initialSectionsOrder } from '../../../constants/initialHomePageData';

// Import all 22 Section Editors safely
import HeroEditor from './SectionEditors/HeroEditor';
import TrustMarqueeEditor from './SectionEditors/TrustMarqueeEditor';
import AboutKeyMetricsEditor from './SectionEditors/AboutKeyMetricsEditor';
import BrandLogoGridEditor from './SectionEditors/BrandLogoGridEditor';
import ServicesSectionEditor from './SectionEditors/ServicesSectionEditor';
import ConversionCalloutBannerEditor from './SectionEditors/ConversionCalloutBannerEditor';
import PortfolioShowcaseEditor from './SectionEditors/PortfolioShowcaseEditor';
import TrustRecognitionBannerEditor from './SectionEditors/TrustRecognitionBannerEditor';
import WorkProcessGridEditor from './SectionEditors/WorkProcessGridEditor';
import EngagementModelsEditor from './SectionEditors/EngagementModelsEditor';
import TechShowcaseEditor from './SectionEditors/TechShowcaseEditor';
import PremiumServicesEditor from './SectionEditors/PremiumServicesEditor';
import SuccessMatrixEditor from './SectionEditors/SuccessMatrixEditor';
import InnovativeSolutionVideoEditor from './SectionEditors/InnovativeSolutionVideoEditor';
import RecentPodcastsEditor from './SectionEditors/RecentPodcastsEditor';
import DownloadBrochureEditor from './SectionEditors/DownloadBrochureEditor';
import DigitalTransformationCaseStudiesEditor from './SectionEditors/DigitalTransformationCaseStudiesEditor';
import VideoTestimonialsStoryEditor from './SectionEditors/VideoTestimonialsStoryEditor';
import RecentBlogsEditor from './SectionEditors/RecentBlogsEditor';
import ClientReviewsDarkEditor from './SectionEditors/ClientReviewsDarkEditor';
import FeaturedInLogosEditor from './SectionEditors/FeaturedInLogosEditor';
import WorkTogetherNewsletterEditor from './SectionEditors/WorkTogetherNewsletterEditor';

const SECTION_METADATA = {
  hero: {
    title: 'Hero Banner',
    category: 'Hero & Ribbon',
    actionLabel: 'Edit',
    description: 'Top interactive carousel with headings, bullet points, CTA actions, and video background.',
    editor: HeroEditor
  },
  trustMarquee: {
    title: 'Trust Marquee',
    category: 'Social Proof',
    actionLabel: 'Edit',
    description: 'Auto-scrolling infinite brand partner logo ribbon.',
    editor: TrustMarqueeEditor
  },
  aboutKeyMetrics: {
    title: 'About & Key Metrics',
    category: 'About & Metrics',
    actionLabel: 'Edit',
    description: 'About us intro, high-res background texture, and 8 key milestone statistics cards.',
    editor: AboutKeyMetricsEditor
  },
  brandLogoGrid: {
    title: 'Brand Logo Grid',
    category: 'Social Proof',
    actionLabel: 'Edit',
    description: 'Enterprise partner and Fortune 500 company logo wall.',
    editor: BrandLogoGridEditor
  },
  servicesSection: {
    title: 'Services Section',
    category: 'Offerings',
    actionLabel: 'Edit',
    description: 'Interactive vertical cards showcasing full engineering capabilities.',
    editor: ServicesSectionEditor
  },
  conversionCalloutBanner: {
    title: 'Conversion Callout Banner',
    category: 'CTA & Action',
    actionLabel: 'Edit',
    description: 'Dark teal high-converting CTA section with dual decorative visuals.',
    editor: ConversionCalloutBannerEditor
  },
  portfolioShowcase: {
    title: 'Portfolio Showcase',
    category: 'Case Studies',
    actionLabel: 'Edit',
    description: 'Recent project case study cards with screenshots and details link.',
    editor: PortfolioShowcaseEditor
  },
  trustRecognitionBanner: {
    title: 'Trust Recognition Banner',
    category: 'Social Proof',
    actionLabel: 'Edit',
    description: 'Quality badges, ISO certifications, and industry recognitions.',
    editor: TrustRecognitionBannerEditor
  },
  workProcessGrid: {
    title: 'Work Process Grid',
    category: 'Process',
    actionLabel: 'Edit',
    description: '8-step milestone-driven engineering lifecycle with connective timeline.',
    editor: WorkProcessGridEditor
  },
  engagementModelsSection: {
    title: 'Engagement Models',
    category: 'Business Models',
    actionLabel: 'Edit',
    description: '4 flexible hiring and partnership frameworks tailored for budgets.',
    editor: EngagementModelsEditor
  },
  engagementModels: {
    title: 'Engagement Models',
    category: 'Business Models',
    actionLabel: 'Edit',
    description: '4 flexible hiring and partnership frameworks tailored for budgets.',
    editor: EngagementModelsEditor
  },
  techShowcaseTabbed: {
    title: 'Tech Showcase',
    category: 'Tech Stack',
    actionLabel: 'Edit',
    description: 'Horizontal tabbed showcase of technologies and tools.',
    editor: TechShowcaseEditor
  },
  techShowcase: {
    title: 'Tech Showcase',
    category: 'Tech Stack',
    actionLabel: 'Edit',
    description: 'Horizontal tabbed showcase of technologies and tools.',
    editor: TechShowcaseEditor
  },
  premiumServicesGrid: {
    title: 'Premium Services',
    category: 'Offerings',
    actionLabel: 'Edit',
    description: '10 specialized software engineering service pill cards in a 5x2 grid.',
    editor: PremiumServicesEditor
  },
  premiumServices: {
    title: 'Premium Services',
    category: 'Offerings',
    actionLabel: 'Edit',
    description: '10 specialized software engineering service pill cards in a 5x2 grid.',
    editor: PremiumServicesEditor
  },
  successMatrixGrid: {
    title: 'Success Matrix',
    category: 'Capabilities',
    actionLabel: 'Edit',
    description: '12 key value proposition and differentiator benefit cards.',
    editor: SuccessMatrixEditor
  },
  successMatrix: {
    title: 'Success Matrix',
    category: 'Capabilities',
    actionLabel: 'Edit',
    description: '12 key value proposition and differentiator benefit cards.',
    editor: SuccessMatrixEditor
  },
  innovativeSolutionVideo: {
    title: 'Innovative Solution Video',
    category: 'Video Showcase',
    actionLabel: 'Edit',
    description: 'Horizontal video showcase track with play video overlays.',
    editor: InnovativeSolutionVideoEditor
  },
  recentPodcastsSection: {
    title: 'Recent Podcasts',
    category: 'Media',
    actionLabel: 'Edit',
    description: '3-column podcast cards with cover art, synopsis, and play trigger.',
    editor: RecentPodcastsEditor
  },
  recentPodcasts: {
    title: 'Recent Podcasts',
    category: 'Media',
    actionLabel: 'Edit',
    description: '3-column podcast cards with cover art, synopsis, and play trigger.',
    editor: RecentPodcastsEditor
  },
  downloadBrochureSection: {
    title: 'Download Brochure',
    category: 'Lead Gen',
    actionLabel: 'Edit',
    description: 'Lead capture brochure download bar with PDF attachment.',
    editor: DownloadBrochureEditor
  },
  downloadBrochure: {
    title: 'Download Brochure',
    category: 'Lead Gen',
    actionLabel: 'Edit',
    description: 'Lead capture brochure download bar with PDF attachment.',
    editor: DownloadBrochureEditor
  },
  digitalTransformationCaseStudies: {
    title: 'Digital Transformation Case Studies',
    category: 'Case Studies',
    actionLabel: 'Edit',
    description: 'Heroic peek slider case studies with mockups and bullet points.',
    editor: DigitalTransformationCaseStudiesEditor
  },
  caseStudies: {
    title: 'Digital Transformation Case Studies',
    category: 'Case Studies',
    actionLabel: 'Edit',
    description: 'Heroic peek slider case studies with mockups and bullet points.',
    editor: DigitalTransformationCaseStudiesEditor
  },
  videoTestimonialsStory: {
    title: 'Video Testimonials',
    category: 'Testimonials',
    actionLabel: 'Edit',
    description: 'Client story cards with ocean gradient and video links.',
    editor: VideoTestimonialsStoryEditor
  },
  videoTestimonials: {
    title: 'Video Testimonials',
    category: 'Testimonials',
    actionLabel: 'Edit',
    description: 'Client story cards with ocean gradient and video links.',
    editor: VideoTestimonialsStoryEditor
  },
  recentBlogsSection: {
    title: 'Recent Blogs',
    category: 'Articles',
    actionLabel: 'Edit',
    description: '3-column thought leadership articles with dates and excerpts.',
    editor: RecentBlogsEditor
  },
  recentBlogs: {
    title: 'Recent Blogs',
    category: 'Articles',
    actionLabel: 'Edit',
    description: '3-column thought leadership articles with dates and excerpts.',
    editor: RecentBlogsEditor
  },
  clientReviewsDarkSection: {
    title: 'Client Reviews',
    category: 'Testimonials',
    actionLabel: 'Edit',
    description: 'Clutch 5.0 rating breakdown and verified client testimonials.',
    editor: ClientReviewsDarkEditor
  },
  clientReviews: {
    title: 'Client Reviews',
    category: 'Testimonials',
    actionLabel: 'Edit',
    description: 'Clutch 5.0 rating breakdown and verified client testimonials.',
    editor: ClientReviewsDarkEditor
  },
  featuredInLogosGrid: {
    title: 'Featured In',
    category: 'Media PR',
    actionLabel: 'Edit',
    description: '6x3 grid of 18 media publications, app stores, and industry portal logos.',
    editor: FeaturedInLogosEditor
  },
  featuredInLogos: {
    title: 'Featured In',
    category: 'Media PR',
    actionLabel: 'Edit',
    description: '6x3 grid of 18 media publications, app stores, and industry portal logos.',
    editor: FeaturedInLogosEditor
  },
  workTogetherNewsletterSection: {
    title: 'Work Together & Newsletter',
    category: 'Footer CTA',
    actionLabel: 'Edit',
    description: 'Footer-preceding sapphire CTA ribbon and newsletter subscription bar.',
    editor: WorkTogetherNewsletterEditor
  },
  workTogetherNewsletter: {
    title: 'Work Together & Newsletter',
    category: 'Footer CTA',
    actionLabel: 'Edit',
    description: 'Footer-preceding sapphire CTA ribbon and newsletter subscription bar.',
    editor: WorkTogetherNewsletterEditor
  }
};

export const HomePageManager = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [homeData, setHomeData] = useState(INITIAL_HOME_PAGE_DATA);
  const [loading, setLoading] = useState(true);
  const [activeSectionKey, setActiveSectionKey] = useState(null);
  const [activeSectionData, setActiveSectionData] = useState(null);
  const [originalSectionData, setOriginalSectionData] = useState(null);
  const [resetVersion, setResetVersion] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [resettingSection, setResettingSection] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // Modal confirmation states
  const [isResetAllModalOpen, setIsResetAllModalOpen] = useState(false);
  const [isResetSectionModalOpen, setIsResetSectionModalOpen] = useState(false);

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

  // Open Section Editor Drawer with saved snapshot
  const handleOpenEdit = (sectionKey) => {
    setActiveSectionKey(sectionKey);
    const existing = sections[sectionKey] || INITIAL_HOME_PAGE_DATA.sections[sectionKey] || {};
    const cloned = JSON.parse(JSON.stringify(existing));
    setActiveSectionData(cloned);
    setOriginalSectionData(JSON.parse(JSON.stringify(existing)));
    setResetVersion(0);
    setIsDrawerOpen(true);
  };

  // Save Section Changes
  const handleSaveSection = async () => {
    if (!activeSectionKey || !activeSectionData) return;
    setSaving(true);
    try {
      const res = await adminService.updateHomePageSection(activeSectionKey, activeSectionData);
      if (res && res.data) {
        setHomeData(res.data);
      } else {
        setHomeData((prev) => ({
          ...prev,
          sections: {
            ...prev.sections,
            [activeSectionKey]: activeSectionData
          }
        }));
      }
      setOriginalSectionData(JSON.parse(JSON.stringify(activeSectionData)));
      addToast(`Section "${SECTION_METADATA[activeSectionKey]?.title || activeSectionKey}" saved successfully!`, 'success');
      setIsDrawerOpen(false);
    } catch (err) {
      addToast(`Failed to save section: ${err.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  // Reset Current Section Handler (Restores clean saved state or factory default immediately)
  const handleResetCurrentSection = (toFactoryDefaults = false) => {
    if (!activeSectionKey) return;
    const title = SECTION_METADATA[activeSectionKey]?.title || activeSectionKey;
    
    let sourceData = null;
    if (toFactoryDefaults) {
      sourceData = INITIAL_HOME_PAGE_DATA.sections[activeSectionKey] || {};
    } else {
      sourceData = originalSectionData || sections[activeSectionKey] || INITIAL_HOME_PAGE_DATA.sections[activeSectionKey] || {};
    }

    const resetSnapshot = JSON.parse(JSON.stringify(sourceData));
    setActiveSectionData(resetSnapshot);
    setResetVersion((v) => v + 1);
    setIsResetSectionModalOpen(false);

    if (toFactoryDefaults) {
      addToast(`Section "${title}" restored to factory defaults! Click 'Save Changes' to apply.`, 'info');
    } else {
      addToast(`Section "${title}" reset to original saved values!`, 'info');
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

  // Active Editor Component
  const ActiveEditor = activeSectionKey ? SECTION_METADATA[activeSectionKey]?.editor : null;

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
              Drag and drop sections to rearrange the layout order. Click <strong>Edit</strong> or <strong>Manage</strong> to customize content and media.
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

                      {/* Quick Edit in Drawer */}
                      <button
                        type="button"
                        onClick={() => handleOpenEdit(sectionKey)}
                        className="btn btn-xs btn-secondary"
                        style={{
                          padding: '6px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: '#F8FAFC',
                          borderColor: '#CBD5E1',
                          color: '#334155',
                          borderRadius: '6px'
                        }}
                        title="Quick edit section in slide-out drawer"
                      >
                        <Sliders size={13} /> Quick Edit
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

      {/* Slide-out Section Editor Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={activeSectionKey ? SECTION_METADATA[activeSectionKey]?.title || 'Edit Section' : 'Edit Section'}
        subtitle={activeSectionKey ? SECTION_METADATA[activeSectionKey]?.description || 'Update texts, cards, and media assets.' : ''}
        width="960px"
        footer={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '12px' }}>
            {/* LEFT: Visible on Public Home + Reset Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="drawerSectionVisible"
                  checked={activeSectionData?.isVisible !== false && activeSectionData?.isEnabled !== false}
                  onChange={(e) => setActiveSectionData({ ...activeSectionData, isVisible: e.target.checked, isEnabled: e.target.checked })}
                  style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: '#006B8F' }}
                />
                <label htmlFor="drawerSectionVisible" style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', userSelect: 'none' }}>
                  Visible on Public Home
                </label>
              </div>

              <button
                type="button"
                onClick={() => handleResetCurrentSection(false)}
                className="btn btn-danger btn-sm"
                title="Reset this section to original saved values"
                disabled={saving}
              >
                <RotateCcw size={13} /> Reset Section
              </button>
            </div>

            {/* RIGHT: Cancel + Save Changes */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="btn btn-secondary btn-sm"
                disabled={saving}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveSection}
                className="btn btn-primary btn-sm"
                disabled={saving}
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
        }
      >
        {ActiveEditor && activeSectionData ? (
          <ErrorBoundary
            key={`${activeSectionKey}-${resetVersion}`}
            title={`${SECTION_METADATA[activeSectionKey]?.title || activeSectionKey} Editor`}
            onReset={() => handleResetCurrentSection(false)}
          >
            <ActiveEditor
              key={`${activeSectionKey}-${resetVersion}`}
              data={activeSectionData}
              onChange={(updated) => setActiveSectionData(updated)}
            />
          </ErrorBoundary>
        ) : (
          <div style={{ padding: '32px', textAlign: 'center', color: '#64748B' }}>
            No editor component found for section key "{activeSectionKey}".
          </div>
        )}
      </Drawer>

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
              onClick={() => handleResetCurrentSection(false)}
              className="btn btn-primary"
              style={{ backgroundColor: '#006B8F', borderColor: '#006B8F', color: '#FFFFFF' }}
            >
              Reset Unsaved Edits
            </button>
            <button
              type="button"
              onClick={() => handleResetCurrentSection(true)}
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
              Reset "{activeSectionKey ? SECTION_METADATA[activeSectionKey]?.title || activeSectionKey : 'Section'}"?
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
