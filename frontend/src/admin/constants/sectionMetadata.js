import HeroEditor from '../pages/HomePageAdmin/SectionEditors/HeroEditor';
import TrustMarqueeEditor from '../pages/HomePageAdmin/SectionEditors/TrustMarqueeEditor';
import AboutKeyMetricsEditor from '../pages/HomePageAdmin/SectionEditors/AboutKeyMetricsEditor';
import BrandLogoGridEditor from '../pages/HomePageAdmin/SectionEditors/BrandLogoGridEditor';
import ServicesSectionEditor from '../pages/HomePageAdmin/SectionEditors/ServicesSectionEditor';
import ConversionCalloutBannerEditor from '../pages/HomePageAdmin/SectionEditors/ConversionCalloutBannerEditor';
import PortfolioShowcaseEditor from '../pages/HomePageAdmin/SectionEditors/PortfolioShowcaseEditor';
import TrustRecognitionBannerEditor from '../pages/HomePageAdmin/SectionEditors/TrustRecognitionBannerEditor';
import WorkProcessGridEditor from '../pages/HomePageAdmin/SectionEditors/WorkProcessGridEditor';
import EngagementModelsEditor from '../pages/HomePageAdmin/SectionEditors/EngagementModelsEditor';
import TechShowcaseEditor from '../pages/HomePageAdmin/SectionEditors/TechShowcaseEditor';
import PremiumServicesEditor from '../pages/HomePageAdmin/SectionEditors/PremiumServicesEditor';
import SuccessMatrixEditor from '../pages/HomePageAdmin/SectionEditors/SuccessMatrixEditor';
import InnovativeSolutionVideoEditor from '../pages/HomePageAdmin/SectionEditors/InnovativeSolutionVideoEditor';
import RecentPodcastsEditor from '../pages/HomePageAdmin/SectionEditors/RecentPodcastsEditor';
import DownloadBrochureEditor from '../pages/HomePageAdmin/SectionEditors/DownloadBrochureEditor';
import DigitalTransformationCaseStudiesEditor from '../pages/HomePageAdmin/SectionEditors/DigitalTransformationCaseStudiesEditor';
import VideoTestimonialsStoryEditor from '../pages/HomePageAdmin/SectionEditors/VideoTestimonialsStoryEditor';
import RecentBlogsEditor from '../pages/HomePageAdmin/SectionEditors/RecentBlogsEditor';
import ClientReviewsDarkEditor from '../pages/HomePageAdmin/SectionEditors/ClientReviewsDarkEditor';
import FeaturedInLogosEditor from '../pages/HomePageAdmin/SectionEditors/FeaturedInLogosEditor';
import WorkTogetherNewsletterEditor from '../pages/HomePageAdmin/SectionEditors/WorkTogetherNewsletterEditor';

export const SECTION_METADATA = {
  hero: {
    key: 'hero',
    title: 'Hero Banner',
    category: 'Hero & Ribbon',
    description: 'Top interactive carousel with headings, bullet points, CTA actions, and video background.',
    editor: HeroEditor
  },
  trustMarquee: {
    key: 'trustMarquee',
    title: 'Trust Marquee',
    category: 'Social Proof',
    description: 'Auto-scrolling infinite brand partner logo ribbon.',
    editor: TrustMarqueeEditor
  },
  aboutKeyMetrics: {
    key: 'aboutKeyMetrics',
    title: 'About & Key Metrics',
    category: 'About & Metrics',
    description: 'About us intro, high-res background texture, and 12 milestone & feature cards.',
    editor: AboutKeyMetricsEditor
  },
  brandLogoGrid: {
    key: 'brandLogoGrid',
    title: 'Brand Logo Grid',
    category: 'Social Proof',
    description: 'Enterprise partner and Fortune 500 company logo wall.',
    editor: BrandLogoGridEditor
  },
  servicesSection: {
    key: 'servicesSection',
    title: 'Services Section',
    category: 'Offerings',
    description: 'Interactive vertical cards showcasing full engineering capabilities.',
    editor: ServicesSectionEditor
  },
  conversionCalloutBanner: {
    key: 'conversionCalloutBanner',
    title: 'Conversion Callout Banner',
    category: 'CTA & Action',
    description: 'Dark teal high-converting CTA section with dual decorative visuals.',
    editor: ConversionCalloutBannerEditor
  },
  portfolioShowcase: {
    key: 'portfolioShowcase',
    title: 'Portfolio Showcase',
    category: 'Case Studies',
    description: 'Recent project case study cards with screenshots and details link.',
    editor: PortfolioShowcaseEditor
  },
  trustRecognitionBanner: {
    key: 'trustRecognitionBanner',
    title: 'Trust Recognition Banner',
    category: 'Social Proof',
    description: 'Quality badges, ISO certifications, and industry recognitions.',
    editor: TrustRecognitionBannerEditor
  },
  workProcessGrid: {
    key: 'workProcessGrid',
    title: 'Work Process Grid',
    category: 'Process',
    description: '8-step milestone-driven engineering lifecycle with connective timeline.',
    editor: WorkProcessGridEditor
  },
  engagementModelsSection: {
    key: 'engagementModelsSection',
    title: 'Engagement Models',
    category: 'Business Models',
    description: '4 flexible hiring and partnership frameworks tailored for budgets.',
    editor: EngagementModelsEditor
  },
  engagementModels: {
    key: 'engagementModels',
    title: 'Engagement Models',
    category: 'Business Models',
    description: '4 flexible hiring and partnership frameworks tailored for budgets.',
    editor: EngagementModelsEditor
  },
  techShowcaseTabbed: {
    key: 'techShowcaseTabbed',
    title: 'Tech Showcase',
    category: 'Tech Stack',
    description: 'Horizontal tabbed showcase of technologies and tools.',
    editor: TechShowcaseEditor
  },
  techShowcase: {
    key: 'techShowcase',
    title: 'Tech Showcase',
    category: 'Tech Stack',
    description: 'Horizontal tabbed showcase of technologies and tools.',
    editor: TechShowcaseEditor
  },
  premiumServicesGrid: {
    key: 'premiumServicesGrid',
    title: 'Premium Services',
    category: 'Offerings',
    description: '10 specialized software engineering service pill cards in a 5x2 grid.',
    editor: PremiumServicesEditor
  },
  premiumServices: {
    key: 'premiumServices',
    title: 'Premium Services',
    category: 'Offerings',
    description: '10 specialized software engineering service pill cards in a 5x2 grid.',
    editor: PremiumServicesEditor
  },
  successMatrix: {
    key: 'successMatrix',
    title: 'Success Matrix',
    category: 'Differentiators',
    description: '12 key value proposition and differentiator benefit cards.',
    editor: SuccessMatrixEditor
  },
  innovativeSolutionVideo: {
    key: 'innovativeSolutionVideo',
    title: 'Innovative Solution Video',
    category: 'Video Spotlight',
    description: 'Interactive company showcase video player with glowing play button.',
    editor: InnovativeSolutionVideoEditor
  },
  recentPodcasts: {
    key: 'recentPodcasts',
    title: 'Recent Podcasts',
    category: 'Media & Audio',
    description: '3-column podcast cards with cover art, synopsis, and play trigger.',
    editor: RecentPodcastsEditor
  },
  downloadBrochure: {
    key: 'downloadBrochure',
    title: 'Download Brochure',
    category: 'Lead Capture',
    description: 'Dark teal gradient CTA card with instant brochure download trigger.',
    editor: DownloadBrochureEditor
  },
  digitalTransformationCaseStudies: {
    key: 'digitalTransformationCaseStudies',
    title: 'Transformation Case Studies',
    category: 'Case Studies',
    description: 'Heroic ~80% width case study cards with brand logo and metrics.',
    editor: DigitalTransformationCaseStudiesEditor
  },
  videoTestimonialsStory: {
    key: 'videoTestimonialsStory',
    title: 'Video Testimonials',
    category: 'Social Proof',
    description: 'Client story cards with video play triggers and client portraits.',
    editor: VideoTestimonialsStoryEditor
  },
  videoTestimonials: {
    key: 'videoTestimonials',
    title: 'Video Testimonials',
    category: 'Social Proof',
    description: 'Client story cards with video play triggers and client portraits.',
    editor: VideoTestimonialsStoryEditor
  },
  recentBlogs: {
    key: 'recentBlogs',
    title: 'Recent Blogs',
    category: 'Articles',
    description: '3-column thought leadership articles with dates and excerpts.',
    editor: RecentBlogsEditor
  },
  clientReviewsDarkSection: {
    key: 'clientReviewsDarkSection',
    title: 'Client Reviews',
    category: 'Testimonials',
    description: 'Clutch 5.0 rating breakdown and verified client testimonials.',
    editor: ClientReviewsDarkEditor
  },
  clientReviews: {
    key: 'clientReviews',
    title: 'Client Reviews',
    category: 'Testimonials',
    description: 'Clutch 5.0 rating breakdown and verified client testimonials.',
    editor: ClientReviewsDarkEditor
  },
  featuredInLogosGrid: {
    key: 'featuredInLogosGrid',
    title: 'Featured In',
    category: 'Media PR',
    description: '6x3 grid of 18 media publications, app stores, and industry portal logos.',
    editor: FeaturedInLogosEditor
  },
  featuredInLogos: {
    key: 'featuredInLogos',
    title: 'Featured In',
    category: 'Media PR',
    description: '6x3 grid of 18 media publications, app stores, and industry portal logos.',
    editor: FeaturedInLogosEditor
  },
  workTogetherNewsletterSection: {
    key: 'workTogetherNewsletterSection',
    title: 'Work Together & Newsletter',
    category: 'Footer CTA',
    description: 'Footer-preceding sapphire CTA ribbon and newsletter subscription bar.',
    editor: WorkTogetherNewsletterEditor
  },
  workTogetherNewsletter: {
    key: 'workTogetherNewsletter',
    title: 'Work Together & Newsletter',
    category: 'Footer CTA',
    description: 'Footer-preceding sapphire CTA ribbon and newsletter subscription bar.',
    editor: WorkTogetherNewsletterEditor
  }
};

// Distinct 22 canonical home page section list for navigation
export const HOME_PAGE_SECTIONS_LIST = [
  { key: 'hero', title: 'Hero Banner', category: 'Hero & Ribbon' },
  { key: 'trustMarquee', title: 'Trust Marquee', category: 'Social Proof' },
  { key: 'aboutKeyMetrics', title: 'About & Key Metrics', category: 'About & Metrics' },
  { key: 'brandLogoGrid', title: 'Brand Logo Grid', category: 'Social Proof' },
  { key: 'servicesSection', title: 'Services Section', category: 'Offerings' },
  { key: 'conversionCalloutBanner', title: 'Conversion Callout Banner', category: 'CTA & Action' },
  { key: 'portfolioShowcase', title: 'Portfolio Showcase', category: 'Case Studies' },
  { key: 'trustRecognitionBanner', title: 'Trust Recognition Banner', category: 'Social Proof' },
  { key: 'workProcessGrid', title: 'Work Process Grid', category: 'Process' },
  { key: 'engagementModels', title: 'Engagement Models', category: 'Business Models' },
  { key: 'techShowcase', title: 'Tech Showcase', category: 'Tech Stack' },
  { key: 'premiumServices', title: 'Premium Services', category: 'Offerings' },
  { key: 'successMatrix', title: 'Success Matrix', category: 'Differentiators' },
  { key: 'innovativeSolutionVideo', title: 'Innovative Solution Video', category: 'Video Spotlight' },
  { key: 'recentPodcasts', title: 'Recent Podcasts', category: 'Media & Audio' },
  { key: 'downloadBrochure', title: 'Download Brochure', category: 'Lead Capture' },
  { key: 'digitalTransformationCaseStudies', title: 'Transformation Case Studies', category: 'Case Studies' },
  { key: 'videoTestimonialsStory', title: 'Video Testimonials', category: 'Social Proof' },
  { key: 'recentBlogs', title: 'Recent Blogs', category: 'Articles' },
  { key: 'clientReviews', title: 'Client Reviews', category: 'Testimonials' },
  { key: 'featuredInLogos', title: 'Featured In Logos', category: 'Media PR' },
  { key: 'workTogetherNewsletter', title: 'Work Together & Newsletter', category: 'Footer CTA' }
];

export default SECTION_METADATA;
