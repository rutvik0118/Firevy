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
  successMatrixGrid: {
    key: 'successMatrixGrid',
    title: 'Success Matrix',
    category: 'Capabilities',
    description: '12 key value proposition and differentiator benefit cards.',
    editor: SuccessMatrixEditor
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
  recentPodcastsSection: {
    key: 'recentPodcastsSection',
    title: 'Recent Podcasts',
    category: 'Media & Audio',
    description: '3-column podcast cards with cover art, synopsis, and play trigger.',
    editor: RecentPodcastsEditor
  },
  recentPodcasts: {
    key: 'recentPodcasts',
    title: 'Recent Podcasts',
    category: 'Media & Audio',
    description: '3-column podcast cards with cover art, synopsis, and play trigger.',
    editor: RecentPodcastsEditor
  },
  downloadBrochureSection: {
    key: 'downloadBrochureSection',
    title: 'Download Brochure',
    category: 'Lead Capture',
    description: 'Dark teal gradient CTA card with instant brochure download trigger.',
    editor: DownloadBrochureEditor
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
  caseStudies: {
    key: 'caseStudies',
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
  recentBlogsSection: {
    key: 'recentBlogsSection',
    title: 'Recent Blogs',
    category: 'Articles',
    description: '3-column thought leadership articles with dates and excerpts.',
    editor: RecentBlogsEditor
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
  },

  // Aliases for Company sub-page slugs
  'about-firevy': {
    key: 'aboutKeyMetrics',
    title: 'About firevy.co & Key Metrics',
    category: 'Company Profile',
    description: 'Manage About firevy.co content, vision, mission, and milestone cards.',
    editor: AboutKeyMetricsEditor
  },
  about: {
    key: 'aboutKeyMetrics',
    title: 'About firevy.co & Key Metrics',
    category: 'Company Profile',
    description: 'Manage About firevy.co content, vision, mission, and milestone cards.',
    editor: AboutKeyMetricsEditor
  },
  'ceo-message': {
    key: 'innovativeSolutionVideo',
    title: 'CEO Message & Leadership Spotlight',
    category: 'Leadership Insight',
    description: 'Manage CEO message, leadership vision, and video spotlight assets.',
    editor: InnovativeSolutionVideoEditor
  },
  'our-team': {
    key: 'aboutKeyMetrics',
    title: 'Our Team & Engineering Talent',
    category: 'Team & Talent',
    description: 'Manage team highlights, key metrics, and engineering squad details.',
    editor: AboutKeyMetricsEditor
  },
  'why-choose-us': {
    key: 'successMatrix',
    title: 'Why Choose Us & Success Matrix',
    category: 'Value Proposition',
    description: 'Manage 12 differentiator benefit cards and value propositions.',
    editor: SuccessMatrixEditor
  },
  'events-activities': {
    key: 'recentPodcasts',
    title: 'Events, Media & Activities',
    category: 'Culture & Media',
    description: 'Manage hackathons, tech summits, podcasts, and company activities.',
    editor: RecentPodcastsEditor
  },
  brochure: {
    key: 'downloadBrochure',
    title: 'Download Brochure',
    category: 'Lead Capture',
    description: 'Dark teal gradient CTA card with instant brochure download trigger.',
    editor: DownloadBrochureEditor
  },
  'awards-recognition': {
    key: 'trustRecognitionBanner',
    title: 'Awards & Recognition',
    category: 'Social Proof',
    description: 'Quality badges, ISO certifications, and industry recognitions.',
    editor: TrustRecognitionBannerEditor
  },
  'great-place-to-work': {
    key: 'featuredInLogos',
    title: 'Great Place To Work & Accolades',
    category: 'Culture & Recognition',
    description: 'Manage company workplace badges and media publications.',
    editor: FeaturedInLogosEditor
  },
  'women-empowerment': {
    key: 'workTogetherNewsletter',
    title: 'Women Empowerment & Workplace Culture',
    category: 'Diversity & Culture',
    description: 'Manage diversity, inclusion, and cultural initiative banners.',
    editor: WorkTogetherNewsletterEditor
  },
  'delivery-models': {
    key: 'engagementModels',
    title: 'Delivery & Engagement Models',
    category: 'Business Models',
    description: 'Manage project delivery frameworks and flexible client engagement options.',
    editor: EngagementModelsEditor
  },
  'development-methodology': {
    key: 'workProcessGrid',
    title: 'Development Methodology & Process',
    category: 'Process',
    description: '8-step milestone-driven engineering lifecycle with connective timeline.',
    editor: WorkProcessGridEditor
  },
  'client-testimonials': {
    key: 'clientReviews',
    title: 'Client Reviews & Testimonials',
    category: 'Testimonials',
    description: 'Clutch 5.0 rating breakdown and verified client testimonials.',
    editor: ClientReviewsDarkEditor
  },
  blog: {
    key: 'recentBlogs',
    title: 'Recent Blogs & Thought Leadership',
    category: 'Articles',
    description: '3-column thought leadership articles with dates and excerpts.',
    editor: RecentBlogsEditor
  },

  // Product Solutions
  'vidyalaya-school-management-software': {
    key: 'servicesSection',
    title: 'Vidyalaya School Software',
    category: 'Product Solution',
    description: 'Manage school management ERP features, modules, and specifications.',
    editor: ServicesSectionEditor
  },
  'vidyalaya-learning-management-system': {
    key: 'servicesSection',
    title: 'Vidyalaya LMS Platform',
    category: 'Product Solution',
    description: 'Manage online learning, assessment, and course delivery modules.',
    editor: ServicesSectionEditor
  },
  'occupational-health-safety-software': {
    key: 'servicesSection',
    title: 'Occupational Health & Safety',
    category: 'Product Solution',
    description: 'Manage EHS compliance, safety tracking, and audit workflows.',
    editor: ServicesSectionEditor
  },
  'health-care-app-development': {
    key: 'servicesSection',
    title: 'Healthcare Solutions',
    category: 'Product Solution',
    description: 'Manage telemedicine, HIPAA-compliant patient portals, and EHR integrations.',
    editor: ServicesSectionEditor
  },
  'education-app-development': {
    key: 'servicesSection',
    title: 'Education App Platform',
    category: 'Product Solution',
    description: 'Manage virtual classrooms, tutoring portals, and educational app features.',
    editor: ServicesSectionEditor
  },
  'uber-like-app-development': {
    key: 'servicesSection',
    title: 'Uber-Like Mobility App',
    category: 'Product Solution',
    description: 'Manage taxi dispatch, live fleet tracking, and passenger app modules.',
    editor: ServicesSectionEditor
  },
  'spotify-like-app-development': {
    key: 'servicesSection',
    title: 'Spotify-Like Audio Streaming',
    category: 'Product Solution',
    description: 'Manage audio streaming, playlist curation, and subscription architectures.',
    editor: ServicesSectionEditor
  },
  'zomato-like-app-development': {
    key: 'servicesSection',
    title: 'Zomato-Like Food Delivery',
    category: 'Product Solution',
    description: 'Manage multi-vendor food ordering, restaurant dashboards, and delivery routing.',
    editor: ServicesSectionEditor
  },
  'amazon-like-app-development': {
    key: 'servicesSection',
    title: 'Amazon-Like E-Commerce',
    category: 'Product Solution',
    description: 'Manage marketplace catalog, cart checkout, and vendor management.',
    editor: ServicesSectionEditor
  },
  'visitor-management-system': {
    key: 'servicesSection',
    title: 'Visitor Management System',
    category: 'Product Solution',
    description: 'Manage lobby check-in, contactless badge printing, and visitor security logs.',
    editor: ServicesSectionEditor
  },
  'warehouse-management-system': {
    key: 'servicesSection',
    title: 'Warehouse Management (WMS)',
    category: 'Product Solution',
    description: 'Manage inventory barcode scanning, picking/packing, and order fulfillment.',
    editor: ServicesSectionEditor
  },
  'clover-app-development': {
    key: 'servicesSection',
    title: 'Clover POS App Solution',
    category: 'Product Solution',
    description: 'Manage point-of-sale integrations, payment processing, and merchant workflows.',
    editor: ServicesSectionEditor
  },

  // Service Offerings Sub-pages
  'mobile-app-development': {
    key: 'servicesSection',
    title: 'Mobile App Development',
    category: 'Service Offering',
    description: 'Manage iOS, Android, and cross-platform Flutter/React Native offerings.',
    editor: ServicesSectionEditor
  },
  'back-end-development': {
    key: 'servicesSection',
    title: 'Back End Development',
    category: 'Service Offering',
    description: 'Manage microservices, scalable APIs, and cloud architecture capabilities.',
    editor: ServicesSectionEditor
  },
  'ai-ml-development': {
    key: 'servicesSection',
    title: 'AI & ML Development',
    category: 'Service Offering',
    description: 'Manage machine learning, LLM fine-tuning, and intelligent automation services.',
    editor: ServicesSectionEditor
  },
  'front-end-development': {
    key: 'servicesSection',
    title: 'Front End Development',
    category: 'Service Offering',
    description: 'Manage responsive React, Vue, Next.js, and web application UI services.',
    editor: ServicesSectionEditor
  },
  'microsoft-development': {
    key: 'servicesSection',
    title: 'Microsoft Development',
    category: 'Service Offering',
    description: 'Manage .NET Core, Azure Cloud, and Microsoft enterprise development solutions.',
    editor: ServicesSectionEditor
  },
  'blockchain-development': {
    key: 'servicesSection',
    title: 'Blockchain Development',
    category: 'Service Offering',
    description: 'Manage smart contracts, Web3 dApps, and decentralized network engineering.',
    editor: ServicesSectionEditor
  },
  'software-development-service': {
    key: 'servicesSection',
    title: 'Software Development Service',
    category: 'Service Offering',
    description: 'Manage custom software engineering and enterprise digital transformation.',
    editor: ServicesSectionEditor
  },
  'iwatch-app-development': {
    key: 'servicesSection',
    title: 'iWatch App Development',
    category: 'Service Offering',
    description: 'Manage watchOS, wearable applications, and IoT companion apps.',
    editor: ServicesSectionEditor
  },

  // Hire Developers Sub-pages
  'dedicated-developers': {
    key: 'engagementModels',
    title: 'Dedicated Developers',
    category: 'Hiring Framework',
    description: 'Manage dedicated developer hiring tiers, skills, and engagement options.',
    editor: EngagementModelsEditor
  },
  'hire-mobile-app-developers': {
    key: 'engagementModels',
    title: 'Hire Mobile App Developers',
    category: 'Hiring Framework',
    description: 'Manage hiring options for iOS, Android, and hybrid app engineers.',
    editor: EngagementModelsEditor
  },
  'hire-react-nextjs-developers': {
    key: 'engagementModels',
    title: 'Hire React & Next.js Devs',
    category: 'Hiring Framework',
    description: 'Manage frontend React/Next.js senior developer hiring tiers.',
    editor: EngagementModelsEditor
  },
  'hire-nodejs-developers': {
    key: 'engagementModels',
    title: 'Hire Node.js Back End Devs',
    category: 'Hiring Framework',
    description: 'Manage Node.js and API backend engineer hiring models.',
    editor: EngagementModelsEditor
  },
  'hire-python-developers': {
    key: 'engagementModels',
    title: 'Hire Python & AI Devs',
    category: 'Hiring Framework',
    description: 'Manage Python, AI, and data engineering talent pools.',
    editor: EngagementModelsEditor
  },
  'hire-c-sharp-developers': {
    key: 'engagementModels',
    title: 'Hire C# & .NET Developers',
    category: 'Hiring Framework',
    description: 'Manage Microsoft .NET and enterprise C# developer hiring.',
    editor: EngagementModelsEditor
  },
  'hire-full-stack-developers': {
    key: 'engagementModels',
    title: 'Hire Full Stack JS Devs',
    category: 'Hiring Framework',
    description: 'Manage full stack JavaScript, MERN, and TypeScript developers.',
    editor: EngagementModelsEditor
  },
  'hire-blockchain-engineers': {
    key: 'engagementModels',
    title: 'Hire Blockchain Engineers',
    category: 'Hiring Framework',
    description: 'Manage Solidity, Rust, and Web3 protocol engineers.',
    editor: EngagementModelsEditor
  },
  'hire-ecommerce-developers': {
    key: 'engagementModels',
    title: 'Hire CMS & Shopify Devs',
    category: 'Hiring Framework',
    description: 'Manage Shopify, Magento, and Headless e-commerce engineers.',
    editor: EngagementModelsEditor
  },
  'hire-devops-engineers': {
    key: 'engagementModels',
    title: 'Hire DevOps & Cloud Engineers',
    category: 'Hiring Framework',
    description: 'Manage AWS, Azure, CI/CD, and Kubernetes cloud architects.',
    editor: EngagementModelsEditor
  },

  // Technology sub-pages
  mobile: {
    key: 'techShowcase',
    title: 'Mobile Technologies',
    category: 'Tech Stack',
    description: 'Manage Flutter, React Native, Swift, Kotlin, and mobile tools.',
    editor: TechShowcaseEditor
  },
  frontend: {
    key: 'techShowcase',
    title: 'Front End Frameworks',
    category: 'Tech Stack',
    description: 'Manage React, Next.js, Vue, Angular, and UI libraries.',
    editor: TechShowcaseEditor
  },
  backend: {
    key: 'techShowcase',
    title: 'Back End & APIs',
    category: 'Tech Stack',
    description: 'Manage Node.js, Python, Go, Java, and GraphQL engines.',
    editor: TechShowcaseEditor
  },
  microsoft: {
    key: 'techShowcase',
    title: 'Microsoft Ecosystem',
    category: 'Tech Stack',
    description: 'Manage .NET Core, C#, Azure Cloud, and MS enterprise stacks.',
    editor: TechShowcaseEditor
  },
  databases: {
    key: 'techShowcase',
    title: 'Databases & In-Memory',
    category: 'Tech Stack',
    description: 'Manage PostgreSQL, MongoDB, Redis, and data storage.',
    editor: TechShowcaseEditor
  },
  'ai-ml': {
    key: 'techShowcase',
    title: 'AI, LLMs & Generative Tech',
    category: 'Tech Stack',
    description: 'Manage PyTorch, TensorFlow, OpenAI, LangChain, and vector DBs.',
    editor: TechShowcaseEditor
  },
  devops: {
    key: 'techShowcase',
    title: 'Cloud Infrastructure & DevOps',
    category: 'Tech Stack',
    description: 'Manage Docker, Kubernetes, Terraform, AWS, and GCP.',
    editor: TechShowcaseEditor
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
