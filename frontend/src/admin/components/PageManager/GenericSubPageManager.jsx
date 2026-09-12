import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  RotateCcw,
  ExternalLink,
  Loader2,
  Search,
  ChevronRight,
  Save,
  Layers,
  CheckCircle2,
  Globe,
  Layout,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import Badge from '../UI/Badge';
import ErrorBoundary from '../UI/ErrorBoundary';
import companyService from '../../services/companyService';
import { useToast } from '../../context/ToastContext';
import { PAGE_HIERARCHY_REGISTRY } from '../../constants/pageHierarchyRegistry';

// Import Page-Specific Sub-Forms
import {
  AboutFirevyForm,
  CeoMessageForm,
  OurTeamForm,
  EventsActivitiesForm,
  BrochureForm,
  WhyChooseUsForm,
  GreatPlaceToWorkForm,
  WomenEmpowermentForm,
  CsrForm,
  DeliveryModelsForm,
  EngagementModelsForm,
  DevelopmentMethodologyForm,
  AwardsRecognitionForm,
  InsightfulVideosForm,
  BlogsForm,
  PodcastsForm,
  VideoTestimonialsForm,
  ClutchReviewsForm,
  CareersForm,
  ProductSolutionForm,
  ServiceDetailForm,
  HireDeveloperForm,
  TechnologyDetailForm,
  OurWorkDetailForm,
  CommonSubPageForm
} from './subpageForms';

/**
 * GenericSubPageManager
 * 
 * Direct Master-Detail CMS Workspace for:
 * 1. Company (20 Sub-Pages)
 * 2. Product (12 Sub-Pages)
 * 3. Services (10 Sub-Pages)
 * 4. Hire Developers (10 Sub-Pages)
 * 5. Technology (8 Sub-Pages)
 * 6. Our Work (7 Sub-Pages)
 * 
 * UI Architecture:
 * - Left Rail: Direct visible Sub-Pages list with search, category dividers, count badge, and active teal highlighting.
 * - Right Panel: Complete Page-Specific Edit Form tailored to the active sub-page's actual data structure.
 * - Unified Header / Bottom Action Bar: Single-click [Save Draft], [Publish Live], and [Reset Page].
 */
export const GenericSubPageManager = ({
  mainPageId = 'company',
  subPageSlug = null,
  overrideConfig = null
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToast } = useToast();

  // 1. Resolve Main Module Registry
  const mainGroup = useMemo(() => {
    return (
      PAGE_HIERARCHY_REGISTRY[mainPageId] || {
        id: mainPageId,
        title: mainPageId.charAt(0).toUpperCase() + mainPageId.slice(1),
        description: `Manage ${mainPageId} sub-pages and content.`,
        basePath: `/admin/${mainPageId}`,
        subPages: []
      }
    );
  }, [mainPageId]);

  // 2. Resolve Active Sub-Page Slug
  const activeSubPageSlug = useMemo(() => {
    if (subPageSlug) return subPageSlug;
    if (params.subPage) return params.subPage;
    if (params.slug) return params.slug;
    return mainGroup.subPages[0]?.slug || mainGroup.subPages[0]?.key || '';
  }, [subPageSlug, params.subPage, params.slug, mainGroup]);

  // 3. Resolve Active Sub-Page Metadata Object
  const currentSubPage = useMemo(() => {
    if (overrideConfig) return overrideConfig;
    return (
      mainGroup.subPages.find(
        (sp) => sp.slug === activeSubPageSlug || sp.key === activeSubPageSlug
      ) ||
      mainGroup.subPages[0] ||
      null
    );
  }, [mainGroup, activeSubPageSlug, overrideConfig]);

  // Sub-Pages search query state
  const [subPageSearch, setSubPageSearch] = useState('');

  // 4. Filtered Sub-Pages for Left Rail
  const filteredSubPages = useMemo(() => {
    if (!subPageSearch.trim()) return mainGroup.subPages;
    const q = subPageSearch.toLowerCase();
    return mainGroup.subPages.filter(
      (sp) =>
        sp.title?.toLowerCase().includes(q) ||
        sp.category?.toLowerCase().includes(q) ||
        sp.group?.toLowerCase().includes(q) ||
        sp.slug?.toLowerCase().includes(q) ||
        sp.description?.toLowerCase().includes(q)
    );
  }, [mainGroup.subPages, subPageSearch]);

  // Group sub-pages by category if available
  const groupedSubPages = useMemo(() => {
    const groups = {};
    filteredSubPages.forEach((sp) => {
      const groupName = sp.group || 'GENERAL PAGES';
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(sp);
    });
    return groups;
  }, [filteredSubPages]);

  // 5. State Management
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [pageData, setPageData] = useState(null);

  // Unified Form State for Active Sub-Page
  const [formData, setFormData] = useState({
    hero: {
      title: '',
      subtitle: '',
      badge: '',
      ctaText: 'Get Started',
      ctaLink: '/contact',
      secondaryCtaText: '',
      secondaryCtaLink: '',
      heroImage: ''
    },
    overview: {
      title: '',
      subtitle: '',
      text: ''
    },
    missionVision: {
      missionTitle: 'Our Mission',
      missionText: '',
      visionTitle: 'Our Vision',
      visionText: ''
    },
    features: {
      title: 'Core Capabilities & Features',
      description: '',
      cards: []
    },
    stats: [],
    steps: [],
    gallery: [],
    highlights: [],
    items: [],
    cards: [],
    content: {},
    cta: {
      title: 'Ready to Accelerate Your Digital Transformation?',
      subtitle: 'Schedule a free consultation with our senior engineering architects.',
      buttonText: 'Get Started Today',
      buttonLink: '/contact'
    },
    seo: {
      metaTitle: '',
      metaDescription: '',
      metaKeywords: '',
      canonical: ''
    },
    status: 'published'
  });

  // 6. Fetch Sub-Page Data from Backend API
  const fetchSubPageData = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setLoading(true);

    try {
      const res = await companyService.getSection(targetSlug, true); // admin=true
      if (res && res.data) {
        setPageData(res.data);
        const data = res.data;

        setFormData({
          hero: {
            title: data.title || currentSubPage.title,
            subtitle: data.subtitle || currentSubPage.description || '',
            badge: data.badge || currentSubPage.category || '',
            ctaText: data.ctaText || 'Get Started',
            ctaLink: data.ctaLink || '/contact',
            secondaryCtaText: data.secondaryCtaText || '',
            secondaryCtaLink: data.secondaryCtaLink || '',
            heroImage: data.heroImage || ''
          },
          overview: {
            title: data.content?.aboutHeading || data.content?.overview?.title || data.contentSections?.[0]?.heading || 'Company Overview',
            subtitle: data.content?.overview?.subtitle || data.contentSections?.[0]?.subheading || '',
            text: data.content?.aboutText || data.content?.overview?.text || data.contentSections?.[0]?.text || data.description || ''
          },
          missionVision: {
            missionTitle: data.content?.missionHeading || data.content?.missionVision?.missionTitle || 'Our Mission',
            missionText: data.content?.missionText || data.content?.missionVision?.missionText || '',
            visionTitle: data.content?.visionHeading || data.content?.missionVision?.visionTitle || 'Our Vision',
            visionText: data.content?.visionText || data.content?.missionVision?.visionText || ''
          },
          features: {
            title: data.content?.features?.title || data.contentSections?.[1]?.heading || 'Core Capabilities',
            description: data.content?.features?.description || '',
            cards: data.cards || data.items || data.content?.features?.cards || []
          },
          stats: data.stats || [],
          steps: data.steps || data.content?.process?.steps || [],
          gallery: data.gallery || [],
          highlights: data.highlights || [],
          items: data.items || data.cards || [],
          cards: data.cards || data.items || [],
          content: data.content || {},
          aboutCompany: data.content?.aboutCompany || null,
          culture: data.content?.culture || null,
          leadership: data.content?.leadership || null,
          products: data.content?.products || null,
          trustedBrands: data.content?.trustedBrands || null,
          insights: data.content?.insights || null,
          csr: data.content?.csr || null,
          teamBanner: data.content?.teamBanner || null,
          metricsSection: data.content?.metricsSection || null,
          coreValues: data.content?.coreValues || null,
          reviewsSection: data.content?.reviewsSection || null,
          heroImage: data.heroImage || '',
          heroVideo: data.heroVideo || '',
          cta: {
            title: data.content?.cta?.title || data.ctaHeading || 'Ready to Partner With Us?',
            subtitle: data.content?.cta?.subtitle || data.ctaSubheading || 'Schedule an introductory consultation.',
            buttonText: data.content?.cta?.buttonText || data.ctaBtnText || 'Contact Us',
            buttonLink: data.content?.cta?.buttonLink || data.ctaBtnLink || '/contact'
          },
          seo: {
            metaTitle: data.seo?.metaTitle || `${currentSubPage.title} | Firevy.co`,
            metaDescription: data.seo?.metaDescription || currentSubPage.description || '',
            metaKeywords: data.seo?.metaKeywords || '',
            canonical: data.seo?.canonical || currentSubPage.publicRoute || ''
          },
          status: data.status || 'published'
        });
      }
    } catch (err) {
      console.warn('Using fallback data structure:', err.message);
      // Construct clean baseline
      setFormData({
        hero: {
          title: currentSubPage.title,
          subtitle: currentSubPage.description || '',
          badge: currentSubPage.category || '',
          ctaText: 'Get Started',
          ctaLink: '/contact',
          secondaryCtaText: '',
          secondaryCtaLink: '',
          heroImage: ''
        },
        overview: {
          title: `${currentSubPage.title} Overview`,
          subtitle: 'Enterprise Solutions & Innovations',
          text: currentSubPage.description || ''
        },
        missionVision: {
          missionTitle: 'Our Mission',
          missionText: '',
          visionTitle: 'Our Vision',
          visionText: ''
        },
        features: {
          title: 'Capabilities & Core Modules',
          description: 'Explore the key pillars driving our digital solutions.',
          cards: []
        },
        stats: [],
        steps: [],
        gallery: [],
        highlights: [],
        items: [],
        cards: [],
        content: {},
        heroImage: '',
        heroVideo: '',
        cta: {
          title: 'Ready to Transform Your Business?',
          subtitle: 'Experience enterprise-grade digital innovation with Firevy.',
          buttonText: 'Contact Us',
          buttonLink: '/contact'
        },
        seo: {
          metaTitle: `${currentSubPage.title} | Firevy.co`,
          metaDescription: currentSubPage.description || '',
          metaKeywords: '',
          canonical: currentSubPage.publicRoute || ''
        },
        status: 'published'
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubPageData();
  }, [activeSubPageSlug]);

  // 7. Save Draft Action
  const handleSaveDraft = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setSaving(true);

    try {
      const payload = {
        title: formData.hero.title || currentSubPage.title,
        subtitle: formData.hero.subtitle || currentSubPage.description,
        badge: formData.hero.badge || currentSubPage.category,
        ctaText: formData.hero.ctaText || 'Get Started',
        ctaLink: formData.hero.ctaLink || '/contact',
        secondaryCtaText: formData.hero.secondaryCtaText || '',
        secondaryCtaLink: formData.hero.secondaryCtaLink || '',
        heroImage: formData.heroImage || formData.hero.heroImage || '',
        heroVideo: formData.heroVideo || '',
        stats: Array.isArray(formData.stats) ? formData.stats : (formData.stats?.stats || []),
        cards: Array.isArray(formData.cards) ? formData.cards : (formData.features?.cards || []),
        items: Array.isArray(formData.items) ? formData.items : (formData.cards || []),
        steps: Array.isArray(formData.steps) ? formData.steps : (formData.process?.steps || []),
        gallery: formData.gallery || [],
        highlights: formData.highlights || [],
        seo: formData.seo || {},
        status: formData.status || 'published',
        content: {
          ...formData.content,
          overview: formData.overview,
          missionVision: formData.missionVision,
          aboutHeading: formData.overview?.title || formData.aboutCompany?.heading,
          aboutText: formData.overview?.text || formData.aboutCompany?.description,
          aboutCompany: formData.aboutCompany || formData.content?.aboutCompany,
          culture: formData.culture || formData.content?.culture,
          leadership: formData.leadership || formData.content?.leadership,
          products: formData.products || formData.content?.products,
          trustedBrands: formData.trustedBrands || formData.content?.trustedBrands,
          insights: formData.insights || formData.content?.insights,
          csr: formData.csr || formData.content?.csr,
          teamBanner: formData.teamBanner || formData.content?.teamBanner,
          metricsSection: formData.metricsSection || formData.content?.metricsSection,
          coreValues: formData.coreValues || formData.content?.coreValues,
          reviewsSection: formData.reviewsSection || formData.content?.reviewsSection,
          missionHeading: formData.missionVision?.missionTitle,
          missionText: formData.missionVision?.missionText,
          visionHeading: formData.missionVision?.visionTitle,
          visionText: formData.missionVision?.visionText,
          features: formData.features,
          cta: formData.cta
        }
      };

      const res = await companyService.saveDraftSection(targetSlug, payload);
      if (res && res.data) {
        setPageData(res.data);
      }
      addToast(`"${currentSubPage.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Save error: ${err.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  // 8. Publish Live Action
  const handlePublishPage = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;
    setPublishing(true);

    try {
      const payload = {
        title: formData.hero.title || currentSubPage.title,
        subtitle: formData.hero.subtitle || currentSubPage.description,
        badge: formData.hero.badge || currentSubPage.category,
        ctaText: formData.hero.ctaText || 'Get Started',
        ctaLink: formData.hero.ctaLink || '/contact',
        secondaryCtaText: formData.hero.secondaryCtaText || '',
        secondaryCtaLink: formData.hero.secondaryCtaLink || '',
        heroImage: formData.heroImage || formData.hero.heroImage || '',
        heroVideo: formData.heroVideo || '',
        stats: Array.isArray(formData.stats) ? formData.stats : (formData.stats?.stats || []),
        cards: Array.isArray(formData.cards) ? formData.cards : (formData.features?.cards || []),
        items: Array.isArray(formData.items) ? formData.items : (formData.cards || []),
        steps: Array.isArray(formData.steps) ? formData.steps : (formData.process?.steps || []),
        gallery: formData.gallery || [],
        highlights: formData.highlights || [],
        seo: formData.seo || {},
        status: formData.status || 'published',
        content: {
          ...formData.content,
          overview: formData.overview,
          missionVision: formData.missionVision,
          aboutHeading: formData.overview?.title || formData.aboutCompany?.heading,
          aboutText: formData.overview?.text || formData.aboutCompany?.description,
          aboutCompany: formData.aboutCompany || formData.content?.aboutCompany,
          culture: formData.culture || formData.content?.culture,
          leadership: formData.leadership || formData.content?.leadership,
          products: formData.products || formData.content?.products,
          trustedBrands: formData.trustedBrands || formData.content?.trustedBrands,
          insights: formData.insights || formData.content?.insights,
          csr: formData.csr || formData.content?.csr,
          teamBanner: formData.teamBanner || formData.content?.teamBanner,
          metricsSection: formData.metricsSection || formData.content?.metricsSection,
          coreValues: formData.coreValues || formData.content?.coreValues,
          reviewsSection: formData.reviewsSection || formData.content?.reviewsSection,
          missionHeading: formData.missionVision?.missionTitle,
          missionText: formData.missionVision?.missionText,
          visionHeading: formData.missionVision?.visionTitle,
          visionText: formData.missionVision?.visionText,
          features: formData.features,
          cta: formData.cta
        }
      };

      const res = await companyService.saveDraftSection(targetSlug, payload);
      await companyService.publishSection(targetSlug, payload);
      if (res && res.data) {
        setPageData(res.data);
      }
      addToast(`"${currentSubPage.title}" saved successfully!`, 'success');
    } catch (err) {
      addToast(`Save error: ${err.message}`, 'error');
    } finally {
      setPublishing(false);
    }
  };

  // 9. Reset Page Action
  const handleResetPage = async () => {
    if (!currentSubPage?.slug && !currentSubPage?.key) return;
    const targetSlug = currentSubPage.slug || currentSubPage.key;

    setSaving(true);
    try {
      const res = await companyService.resetSection(targetSlug);
      if (res && res.data) {
        setPageData(res.data);
      }
      await fetchSubPageData();
      addToast(`${currentSubPage.title} reset successfully`, 'success');
    } catch (err) {
      addToast(`Failed to reset page: ${err.message}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  // 10. Select Page-Specific Sub-Form based on active slug and mainPageId
  const renderPageSpecificForm = () => {
    const slug = activeSubPageSlug;

    // Module-specific overrides
    if (mainPageId === 'product') {
      return (
        <ProductSolutionForm
          formData={formData}
          onChange={setFormData}
          subPageMeta={currentSubPage}
          pageNumber={activePageIndex}
        />
      );
    }

    if (mainPageId === 'services') {
      return (
        <ServiceDetailForm
          formData={formData}
          onChange={setFormData}
          subPageMeta={currentSubPage}
          pageNumber={activePageIndex}
        />
      );
    }

    if (mainPageId === 'hireDevelopers') {
      return (
        <HireDeveloperForm
          formData={formData}
          onChange={setFormData}
          subPageMeta={currentSubPage}
          pageNumber={activePageIndex}
        />
      );
    }

    if (mainPageId === 'technology') {
      return (
        <TechnologyDetailForm
          formData={formData}
          onChange={setFormData}
          subPageMeta={currentSubPage}
          pageNumber={activePageIndex}
        />
      );
    }

    if (mainPageId === 'ourWork') {
      return (
        <OurWorkDetailForm
          formData={formData}
          onChange={setFormData}
          subPageMeta={currentSubPage}
          pageNumber={activePageIndex}
        />
      );
    }

    // Company sub-pages specific forms
    switch (slug) {
      case 'about-firevy':
      case 'about':
        return (
          <AboutFirevyForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'ceo-message':
        return (
          <CeoMessageForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'our-team':
        return (
          <OurTeamForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'events-activities':
        return (
          <EventsActivitiesForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'download-brochure':
        return (
          <BrochureForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'why-choose-us':
        return (
          <WhyChooseUsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'great-place-to-work':
        return (
          <GreatPlaceToWorkForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'women-empowerment':
        return (
          <WomenEmpowermentForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'csr':
        return (
          <CsrForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'delivery-models':
        return (
          <DeliveryModelsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'engagement-models':
        return (
          <EngagementModelsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'development-methodology':
        return (
          <DevelopmentMethodologyForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'awards-recognition':
        return (
          <AwardsRecognitionForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'insightful-videos':
        return (
          <InsightfulVideosForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'blogs':
      case 'blog':
        return (
          <BlogsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'podcast':
      case 'podcasts':
        return (
          <PodcastsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'video-testimonials':
        return (
          <VideoTestimonialsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'clutch-reviews':
      case 'client-testimonials':
        return (
          <ClutchReviewsForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      case 'careers':
      case 'jobs':
        return (
          <CareersForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
      default:
        return (
          <CommonSubPageForm
            formData={formData}
            onChange={setFormData}
            subPageMeta={currentSubPage}
            pageNumber={activePageIndex}
          />
        );
    }
  };

  // Calculate 1-based sequential page index for active sub-page
  const activePageIndex = useMemo(() => {
    const idx = mainGroup.subPages.findIndex(
      (sp) => sp.slug === activeSubPageSlug || sp.key === activeSubPageSlug
    );
    return idx >= 0 ? idx + 1 : 1;
  }, [mainGroup.subPages, activeSubPageSlug]);

  const MainIcon = mainGroup.icon || Layers;
  const SubIcon = currentSubPage?.icon || Layers;
  const isPublished = formData.status === 'published';

  return (
    <div className="page-container animate-fade-in">
      {/* Top Header Bar */}
      <div className="page-top-bar" style={{ marginBottom: '16px' }}>
        <div className="page-title-group">
          {/* Breadcrumb Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.8125rem',
              color: '#64748B',
              marginBottom: '4px',
              fontWeight: 600
            }}
          >
            <Link
              to={mainGroup.basePath}
              style={{
                color: '#006B8F',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <MainIcon size={14} />
              <span>{mainGroup.title}</span>
            </Link>
            <ChevronRight size={12} />
            <span style={{ color: '#0F172A', fontWeight: 700 }}>
              {currentSubPage?.title}
            </span>
            <Badge variant={isPublished ? 'emerald' : 'amber'} size="sm">
              {isPublished ? '● Published' : '○ Draft'}
            </Badge>
          </div>

          <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SubIcon size={24} style={{ color: '#006B8F' }} />
            <span>{currentSubPage?.title}</span>
          </h1>
          <p>{currentSubPage?.description || mainGroup.description}</p>
        </div>

        {/* Action Buttons Top Bar */}
        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {currentSubPage?.publicRoute && (
            <a
              href={currentSubPage.publicRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="Preview live public page"
            >
              <ExternalLink size={14} />
              <span>View Live Page</span>
            </a>
          )}

          <button
            type="button"
            onClick={handleResetPage}
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
            title="Restore this page to baseline content"
            disabled={saving || loading}
          >
            <RotateCcw size={14} />
            <span>Reset Page</span>
          </button>

          <button
            type="button"
            onClick={handlePublishPage}
            className="btn btn-primary btn-sm"
            disabled={publishing || loading}
            style={{ backgroundColor: '#006B8F', borderColor: '#006B8F' }}
          >
            {publishing ? (
              <>
                <Loader2 className="animate-spin" size={14} />
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

      {/* Direct 2-Panel Master-Detail Workspace */}
      <div className="cms-builder-workspace">
        {/* ========================================================================= */}
        {/* LEFT RAIL: Direct Visible Sub-Pages List (PAGE SECTIONS)                  */}
        {/* ========================================================================= */}
        <aside className="cms-section-rail" aria-label="Sub-Pages Directory Rail">
          {/* Rail Header with "Click to edit" badge */}
          <div
            className="cms-rail-header"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px'
            }}
          >
            <h3
              className="cms-rail-title"
              style={{
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#475569',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <MainIcon size={14} style={{ color: '#006B8F' }} />
              <span>PAGE SECTIONS</span>
            </h3>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#64748B',
                backgroundColor: '#F1F5F9',
                border: '1px solid #E2E8F0',
                padding: '2px 8px',
                borderRadius: '12px'
              }}
            >
              Click to edit
            </span>
          </div>

          {/* Search Filter Input */}
          <div className="cms-rail-search">
            <Search size={14} className="cms-rail-search-icon" />
            <input
              type="text"
              className="cms-rail-search-input"
              placeholder={`Search ${mainGroup.title.toLowerCase()} pages...`}
              value={subPageSearch}
              onChange={(e) => setSubPageSearch(e.target.value)}
              aria-label={`Search ${mainGroup.title} sub-pages`}
            />
          </div>

          {/* Visible Sub-Pages List */}
          <div className="cms-rail-list">
            {filteredSubPages.length === 0 ? (
              <div
                style={{
                  padding: '24px 16px',
                  textAlign: 'center',
                  color: '#94A3B8',
                  fontSize: '0.8125rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <AlertCircle size={20} />
                <span>No matching pages found</span>
              </div>
            ) : (
              filteredSubPages.map((sp, idx) => {
                const isSelected =
                  sp.slug === currentSubPage?.slug || sp.key === currentSubPage?.key;
                const pageNum = idx + 1;
                const finalSlug = (sp.slug || sp.key || (sp.publicRoute ? sp.publicRoute.split('/').filter(Boolean).pop() : '')).split('/').filter(Boolean).pop();
                const displaySlug = `/${finalSlug}`;

                return (
                  <div
                    key={sp.slug || sp.key}
                    onClick={() => {
                      navigate(`${mainGroup.basePath}/${sp.slug || sp.key}`);
                    }}
                    className={`cms-section-card ${isSelected ? 'active' : ''}`}
                    title={sp.description || sp.title}
                  >
                    {/* Number Circle Badge */}
                    <div className="cms-card-number">
                      {pageNum}
                    </div>

                    {/* Sub-Page Title & Route Slug */}
                    <div className="cms-card-details">
                      <div className="cms-card-title">
                        {sp.title}
                      </div>
                      <div className="cms-card-slug">
                        {displaySlug}
                      </div>
                    </div>

                    {/* Chevron Arrow */}
                    <div className="cms-card-arrow-wrap">
                      <ChevronRight
                        size={15}
                        className="cms-card-arrow"
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* ========================================================================= */}
        {/* RIGHT PANEL: Complete Page-Specific Form Editor                           */}
        {/* ========================================================================= */}
        <main className="cms-editor-pane" key={currentSubPage?.slug || currentSubPage?.key}>
          {loading ? (
            <div
              style={{
                padding: '80px 20px',
                textAlign: 'center',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px'
              }}
            >
              <Loader2
                className="animate-spin"
                size={36}
                style={{ margin: '0 auto 14px auto', color: '#006B8F' }}
              />
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                Loading {currentSubPage?.title} CMS Form...
              </p>
            </div>
          ) : (
            <ErrorBoundary>
              {/* Dynamic Page-Specific Sub-Form */}
              {renderPageSpecificForm()}

              {/* Sticky Action Bar at Bottom */}
              <div className="cms-sticky-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(0, 107, 143, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#006B8F',
                      flexShrink: 0
                    }}
                  >
                    <SubIcon size={13} />
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                    Editing <strong style={{ color: '#0F172A' }}>{currentSubPage?.title}</strong> in <em>{mainGroup.title}</em>
                  </div>
                  <Badge variant={isPublished ? 'emerald' : 'amber'} size="sm">
                    {isPublished ? '● Published' : '○ Draft'}
                  </Badge>
                </div>

                <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleResetPage}
                    className="btn btn-secondary btn-sm"
                    disabled={saving || loading}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #CBD5E1',
                      color: '#475569'
                    }}
                  >
                    <RotateCcw size={13} />
                    <span>Reset Page</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePublishPage}
                    className="btn btn-primary btn-sm"
                    disabled={publishing || saving || loading}
                    style={{
                      backgroundColor: '#006B8F',
                      borderColor: '#006B8F'
                    }}
                  >
                    {publishing ? (
                      <>
                        <Loader2 className="animate-spin" size={13} />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={13} />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </ErrorBoundary>
          )}
        </main>
      </div>
    </div>
  );
};

export default GenericSubPageManager;
