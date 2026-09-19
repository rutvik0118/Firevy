import {
  Home,
  Building2,
  Package,
  Layers,
  Users2,
  Cpu,
  Briefcase,
  Users,
  Calendar,
  FileText,
  Award,
  Video,
  BookOpen,
  Mic,
  Quote,
  ShieldCheck,
  Globe,
  Heart,
  Star,
  Play,
  Code,
  Smartphone,
  Server,
  Sparkles,
  Database,
  Cloud,
  CheckCircle2,
  HelpCircle,
  FolderKanban,
  TrendingUp,
  Newspaper,
  Compass,
  Rocket,
  Palette
} from 'lucide-react';

/**
 * Global Page Hierarchy Registry
 * Defines Main Page Groups -> Sub-Pages -> Page Sections
 */
export const PAGE_HIERARCHY_REGISTRY = {
  // =========================================================================
  // 1. COMPANY MAIN PAGE GROUP
  // =========================================================================
  company: {
    id: 'company',
    title: 'Company',
    description: 'Manage corporate profile, leadership, culture, models, and testimonials across 20 sub-pages.',
    icon: Building2,
    basePath: '/admin/company',
    subPages: [
      // --- Group: ABOUT US ---
      {
        key: 'about-firevy',
        title: 'About firevy.co',
        category: 'Company Profile',
        description: 'Manage corporate profile, vision, mission statements, core values, and milestones.',
        group: 'ABOUT US',
        icon: Building2,
        slug: 'about-firevy',
        publicRoute: '/company/about-firevy',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Main introduction headline, badge, subtitle, and primary call-to-action button.',
            type: 'hero'
          },
          {
            key: 'overview',
            title: 'Company Overview & Story',
            category: 'Content',
            description: 'Narrative overview, brand story, and corporate background copy.',
            type: 'content'
          },
          {
            key: 'stats',
            title: 'Key Metrics & Growth Stats',
            category: 'Metrics',
            description: 'Global reach, client satisfaction rate, and enterprise project statistics.',
            type: 'stats'
          },
          {
            key: 'values',
            title: 'Core Values & Cultural Pillars',
            category: 'Cards Grid',
            description: 'Innovation, integrity, excellence, and customer obsession value cards.',
            type: 'cards'
          },
          {
            key: 'missionVision',
            title: 'Mission & Vision Statements',
            category: 'Content Block',
            description: 'Corporate mission statement, long-term strategic vision, and goals.',
            type: 'content'
          },
          {
            key: 'cta',
            title: 'Partner With Us CTA',
            category: 'Call to Action',
            description: 'Bottom callout banner encouraging enterprise partnerships and inquiries.',
            type: 'cta'
          },
          {
            key: 'seo',
            title: 'SEO & Metadata',
            category: 'SEO',
            description: 'Meta titles, descriptions, open graph tags, and search keywords.',
            type: 'seo'
          }
        ]
      },
      {
        key: 'ceo-message',
        title: 'CEO Message & Vision',
        category: 'Leadership Insight',
        description: 'Manage executive leadership vision, core message quotes, and spotlight video.',
        group: 'ABOUT US',
        icon: Quote,
        slug: 'ceo-message',
        publicRoute: '/company/ceo-message',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Executive spotlight headline, badge, and intro copy.',
            type: 'hero'
          },
          {
            key: 'quoteVision',
            title: 'Executive Vision & Keynote Quote',
            category: 'Content Block',
            description: 'Inspirational message from the CEO on digital innovation and future strategy.',
            type: 'content'
          },
          {
            key: 'imperatives',
            title: 'Strategic Priorities & Pillars',
            category: 'Cards Grid',
            description: 'Key strategic pillars driving enterprise digital transformation.',
            type: 'cards'
          },
          {
            key: 'videoSpotlight',
            title: 'Leadership Video Spotlight',
            category: 'Media',
            description: 'Embedded video keynote and executive address.',
            type: 'media'
          },
          {
            key: 'cta',
            title: 'Leadership Contact CTA',
            category: 'Call to Action',
            description: 'Call-to-action to connect with our executive advisory team.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'our-team',
        title: 'Our Team & Leadership',
        category: 'Team Directory',
        description: 'Manage executive board members, leadership bios, photos, and team profiles.',
        group: 'ABOUT US',
        icon: Users,
        slug: 'our-team',
        publicRoute: '/company/our-team',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Team directory headline, subheading, and connect action.',
            type: 'hero'
          },
          {
            key: 'management',
            title: 'Management Team',
            category: 'Executive',
            description: 'CEO message, CTO message, and Business Heads profiles.',
            type: 'composite'
          },
          {
            key: 'leadership',
            title: 'Leadership Team',
            category: 'Leadership',
            description: '15 team lead designations and profiles.',
            type: 'repeater'
          },
          {
            key: 'teamwork',
            title: 'Teamwork Mosaic',
            category: 'Culture',
            description: 'Teamwork headline and interactive 24-column photo mosaic wall.',
            type: 'mosaic'
          },
          {
            key: 'firevianSay',
            title: 'What Our Firevian Says',
            category: 'Testimonial',
            description: 'Employee testimonial and quote spotlight.',
            type: 'testimonial'
          },
          {
            key: 'learningGrowth',
            title: 'Learning & Growth',
            category: 'Culture',
            description: 'Training narrative, join button, and 3 ceremony photos.',
            type: 'gallery'
          },
          {
            key: 'lifeAtFirevy',
            title: 'Team @ firevy.co',
            category: 'Gallery',
            description: 'Culture narrative and 4 team moments photos.',
            type: 'gallery'
          },
          {
            key: 'cta',
            title: 'Ready To Take The Challenge CTA',
            category: 'Call to Action',
            description: 'Bottom recruitment banner linking to open career opportunities.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'events-activities',
        title: 'Events & Activities',
        category: 'Company Culture',
        description: 'Manage hackathons, cultural festivals, annual retreats, and team photo galleries.',
        group: 'ABOUT US',
        icon: Calendar,
        slug: 'events-activities',
        publicRoute: '/company/events-activities',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Events & culture headline, banner image, and intro.',
            type: 'hero'
          },
          {
            key: 'eventsList',
            title: 'Events & Activities Gallery',
            category: 'Collection CRUD',
            description: 'Manage hackathons, cultural festivals, tech summits, and retreat events.',
            type: 'collection',
            collectionType: 'events'
          },
          {
            key: 'cultureCta',
            title: 'Experience Our Culture CTA',
            category: 'Call to Action',
            description: 'Call-to-action inviting talent to participate in our vibrant company culture.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'download-brochure',
        title: 'Corporate Brochure',
        category: 'Sales Collateral',
        description: 'Manage downloadable corporate brochure PDF, highlight stats, and sales overview.',
        group: 'ABOUT US',
        icon: FileText,
        slug: 'download-brochure',
        publicRoute: '/company/download-brochure',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Brochure download headline, subtitle, and instant download button.',
            type: 'hero'
          },
          {
            key: 'brochuresList',
            title: 'Downloadable Brochure Assets',
            category: 'Collection CRUD',
            description: 'Manage downloadable PDF decks, capabilities overview, and case study decks.',
            type: 'collection',
            collectionType: 'brochures'
          },
          {
            key: 'capabilitiesOverview',
            title: 'Enterprise Capabilities Overview',
            category: 'Cards Grid',
            description: 'High-level summary cards of services, platforms, and industry solutions.',
            type: 'cards'
          },
          {
            key: 'inquiryCta',
            title: 'Request Custom Deck CTA',
            category: 'Call to Action',
            description: 'Contact form and inquiry callout for tailored enterprise presentations.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'why-choose-us',
        title: 'Why Choose Us',
        category: 'Value Proposition',
        description: 'Manage strategic advantages, delivery guarantees, SLA metrics, and value pillars.',
        group: 'ABOUT US',
        icon: ShieldCheck,
        slug: 'why-choose-us',
        publicRoute: '/company/why-choose-us',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Value proposition headline, badge, and introductory overview.',
            type: 'hero'
          },
          {
            key: 'differentiators',
            title: 'Core Differentiators & Advantages',
            category: 'Cards Grid',
            description: 'Fast onboarding, IP protection, dedicated talent, and transparent pricing.',
            type: 'cards'
          },
          {
            key: 'guarantees',
            title: 'Quality & Delivery Guarantees',
            category: 'Content Block',
            description: 'ISO-certified workflows, SLA guarantees, and enterprise security compliance.',
            type: 'content'
          },
          {
            key: 'stats',
            title: 'Proven Track Record Stats',
            category: 'Metrics',
            description: 'On-time delivery rate, client retention, and enterprise satisfaction scores.',
            type: 'stats'
          },
          {
            key: 'cta',
            title: 'Partner With Us CTA',
            category: 'Call to Action',
            description: 'Consultation callout to kickstart your enterprise digital journey.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'great-place-to-work',
        title: 'Great Place To Work',
        category: 'Workplace Culture',
        description: 'Manage workplace culture certification, employee satisfaction ratings, and perks.',
        group: 'ABOUT US',
        icon: Heart,
        slug: 'great-place-to-work',
        publicRoute: '/company/great-place-to-work',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Certification badge, headline, and workplace culture philosophy.',
            type: 'hero'
          },
          {
            key: 'certifications',
            title: 'Certification Badges & Trust Ratings',
            category: 'Cards Grid',
            description: 'Great Place to Work certification badge, Trust Index score, and awards.',
            type: 'cards'
          },
          {
            key: 'culturePillars',
            title: 'Workplace Culture Pillars',
            category: 'Cards Grid',
            description: 'Work-life harmony, continuous learning, empowerment, and inclusivity.',
            type: 'cards'
          },
          {
            key: 'perksBenefits',
            title: 'Employee Perks & Benefits',
            category: 'Cards Grid',
            description: 'Health insurance, flexible working, wellness stipends, and stock options.',
            type: 'cards'
          },
          {
            key: 'joinCta',
            title: 'Work With Us CTA',
            category: 'Call to Action',
            description: 'Banner inviting top talent to join our certified high-trust team.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'women-empowerment',
        title: 'Women Empowerment',
        category: 'Diversity & Inclusion',
        description: 'Manage women in tech initiatives, mentorship programs, leadership ratio, and spotlights.',
        group: 'ABOUT US',
        icon: Sparkles,
        slug: 'women-empowerment',
        publicRoute: '/company/women-empowerment',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Diversity headline, empowering women in engineering statement, and badge.',
            type: 'hero'
          },
          {
            key: 'initiatives',
            title: 'Women in Tech Programs',
            category: 'Cards Grid',
            description: 'Leadership mentorship circles, STEM scholarships, and career accelerator paths.',
            type: 'cards'
          },
          {
            key: 'impactMetrics',
            title: 'Diversity & Leadership Numbers',
            category: 'Metrics',
            description: 'Percentage of female leaders, pay parity compliance, and mentorship stats.',
            type: 'stats'
          },
          {
            key: 'leadershipSpotlight',
            title: 'Female Leadership Spotlight',
            category: 'Cards Grid',
            description: 'Spotlight profiles of inspiring women leading technology at Firevy.',
            type: 'cards'
          },
          {
            key: 'cta',
            title: 'Join Our Diverse Team CTA',
            category: 'Call to Action',
            description: 'Recruitment callout for passionate female developers, designers, and managers.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'awards-recognition',
        title: 'Awards & Recognition',
        category: 'Industry Accolades',
        description: 'Manage global tech awards, Clutch leader badges, ISO certifications, and honors.',
        group: 'ABOUT US',
        icon: Award,
        slug: 'awards-recognition',
        publicRoute: '/company/awards-recognition',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Accolades headline, recognition badge, and industry honors intro.',
            type: 'hero'
          },
          {
            key: 'awardsList',
            title: 'Global Awards & Accolades',
            category: 'Collection CRUD',
            description: 'Manage Clutch Top Developer, GoodFirms Top Agency, ISO, and Deloitte Fast 500 awards.',
            type: 'collection',
            collectionType: 'awards'
          },
          {
            key: 'badgeHighlights',
            title: 'Verified Badges & Trust Seals',
            category: 'Cards Grid',
            description: 'High-res trust seals and certification badges.',
            type: 'cards'
          }
        ]
      },
      {
        key: 'insightful-videos',
        title: 'Insightful Videos',
        category: 'Video Library',
        description: 'Manage engineering webinars, keynote speeches, architecture deep dives, and demos.',
        group: 'ABOUT US',
        icon: Video,
        slug: 'insightful-videos',
        publicRoute: '/company/insightful-videos',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Video library headline, spotlight tech talk, and category badges.',
            type: 'hero'
          },
          {
            key: 'videosList',
            title: 'Video Library & Tech Talks',
            category: 'Collection CRUD',
            description: 'Manage YouTube/Vimeo embed URLs, tech topics, speakers, and durations.',
            type: 'collection',
            collectionType: 'videos'
          },
          {
            key: 'speakers',
            title: 'Featured Keynote Speakers',
            category: 'Cards Grid',
            description: 'Speaker cards highlighting enterprise architects and thought leaders.',
            type: 'cards'
          }
        ]
      },
      {
        key: 'blog',
        title: 'Blog & Articles',
        category: 'Thought Leadership',
        description: 'Manage software engineering articles, cloud computing insights, and AI trends.',
        group: 'ABOUT US',
        icon: BookOpen,
        slug: 'blog',
        publicRoute: '/company/blog',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Blog header headline, newsletter subscription prompt, and category tags.',
            type: 'hero'
          },
          {
            key: 'blogsList',
            title: 'Blog Articles & Case Studies',
            category: 'Collection CRUD',
            description: 'Manage published blog posts, author details, cover images, and markdown content.',
            type: 'collection',
            collectionType: 'blogs'
          },
          {
            key: 'newsletter',
            title: 'Newsletter Subscription Banner',
            category: 'Call to Action',
            description: 'Email capture callout for weekly technology and architecture newsletters.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'careers',
        title: 'Careers (Jobs)',
        category: 'Talent & Openings',
        description: 'Manage job openings, departments, requirements, culture highlights, and applications.',
        group: 'ABOUT US',
        icon: Briefcase,
        slug: 'careers',
        publicRoute: '/careers',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Career page headline, "Build Your Future" statement, and culture badge.',
            type: 'hero'
          },
          {
            key: 'cultureHighlights',
            title: 'Life at Firevy & Culture Pillars',
            category: 'Cards Grid',
            description: 'Autonomous teams, hackathons, continuous learning, and global projects.',
            type: 'cards'
          },
          {
            key: 'benefits',
            title: 'Comprehensive Benefits & Perks',
            category: 'Cards Grid',
            description: 'Competitive salary, wellness stipends, remote flexibility, and equity.',
            type: 'cards'
          },
          {
            key: 'jobOpenings',
            title: 'Job Openings & Positions',
            category: 'Jobs Management',
            description: 'Manage active job postings, departments, experience levels, and application links.',
            type: 'jobs'
          }
        ]
      },
      {
        key: 'csr',
        title: 'CSR (Social Responsibility)',
        category: 'Sustainability & Impact',
        description: 'Manage sustainability initiatives, community STEM education, and eco programs.',
        group: 'ABOUT US',
        icon: Globe,
        slug: 'csr',
        publicRoute: '/company/csr',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'CSR headline, sustainability badge, and social commitment statement.',
            type: 'hero'
          },
          {
            key: 'impactMetrics',
            title: 'Social & Environmental Impact Stats',
            category: 'Metrics',
            description: 'Trees planted, students mentored, open source contributions, and green energy.',
            type: 'stats'
          },
          {
            key: 'initiatives',
            title: 'Green Tech & Community Programs',
            category: 'Cards Grid',
            description: 'Code for Good hackathons, carbon offset initiatives, and STEM youth labs.',
            type: 'cards'
          },
          {
            key: 'cta',
            title: 'Collaborate on CSR CTA',
            category: 'Call to Action',
            description: 'Callout banner for NGO partnerships and community initiatives.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'podcast',
        title: 'firevy.co Podcast',
        category: 'Audio Series',
        description: 'Manage podcast episodes, audio player, guest speaker bios, and Spotify/Apple links.',
        group: 'ABOUT US',
        icon: Mic,
        slug: 'podcast',
        publicRoute: '/company/podcast',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Podcast headline, featured episode spotlight, and listening badges.',
            type: 'hero'
          },
          {
            key: 'podcastsList',
            title: 'Podcast Episodes Library',
            category: 'Collection CRUD',
            description: 'Manage episode audio links, titles, guests, season/episode numbers, and notes.',
            type: 'collection',
            collectionType: 'podcasts'
          },
          {
            key: 'streamingPlatforms',
            title: 'Streaming Platforms & Distribution',
            category: 'Cards Grid',
            description: 'Direct links to Apple Podcasts, Spotify, YouTube Music, and Amazon Music.',
            type: 'cards'
          }
        ]
      },

      // --- Group: MODELS ---
      {
        key: 'delivery-models',
        title: 'Delivery Models',
        category: 'Execution Framework',
        description: 'Manage onshore, offshore, and hybrid delivery framework cards, SLA tiers, and process.',
        group: 'MODELS',
        icon: Layers,
        slug: 'delivery-models',
        publicRoute: '/company/delivery-models',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Delivery models headline, framework badge, and value proposition.',
            type: 'hero'
          },
          {
            key: 'modelsGrid',
            title: 'Delivery Frameworks & Options',
            category: 'Cards Grid',
            description: 'Onshore, Offshore, and Hybrid global delivery model cards with SLAs.',
            type: 'cards'
          },
          {
            key: 'comparisonMatrix',
            title: 'Model Comparison Matrix',
            category: 'Content Block',
            description: 'Side-by-side comparison of timezone overlap, cost efficiency, and communication.',
            type: 'content'
          },
          {
            key: 'processSteps',
            title: 'Engagement & Onboarding Steps',
            category: 'Process Steps',
            description: '4-step onboarding flow from initial scoping to team alignment and kickoff.',
            type: 'process'
          },
          {
            key: 'cta',
            title: 'Select Your Delivery Model CTA',
            category: 'Call to Action',
            description: 'Consultation callout to tailor the optimal delivery model for your enterprise.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'engagement-models',
        title: 'Engagement Models',
        category: 'Commercial Contracts',
        description: 'Manage Dedicated Team, Time & Material, and Fixed Price commercial engagement cards.',
        group: 'MODELS',
        icon: Briefcase,
        slug: 'engagement-models',
        publicRoute: '/company/engagement-models',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Engagement models headline, pricing transparency badge, and introduction.',
            type: 'hero'
          },
          {
            key: 'modelsGrid',
            title: 'Commercial Engagement Tiers',
            category: 'Cards Grid',
            description: 'Dedicated Engineering Pods, Time & Material (T&M), and Fixed Scope contracts.',
            type: 'cards'
          },
          {
            key: 'pricingTiers',
            title: 'Flexibility & Pricing Structure',
            category: 'Cards Grid',
            description: 'Billing cycles, sprint estimations, resource scaling, and cost guarantees.',
            type: 'cards'
          },
          {
            key: 'cta',
            title: 'Request a Custom Estimate CTA',
            category: 'Call to Action',
            description: 'Callout for customized cost modeling and team scoping.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'development-methodology',
        title: 'Development Methodology',
        category: 'Engineering Process',
        description: 'Manage Agile Scrum, Kanban, DevOps CI/CD pipelines, and QA automation workflows.',
        group: 'MODELS',
        icon: Code,
        slug: 'development-methodology',
        publicRoute: '/company/development-methodology',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Methodology headline, Agile badge, and engineering excellence overview.',
            type: 'hero'
          },
          {
            key: 'agileProcess',
            title: 'Agile Sprint & Scrum Workflow',
            category: 'Process Steps',
            description: 'Sprint planning, daily standups, backlog refinement, and sprint retrospectives.',
            type: 'process'
          },
          {
            key: 'qaPipeline',
            title: 'QA Testing & Automated Quality Gates',
            category: 'Cards Grid',
            description: 'Unit testing, end-to-end Cypress tests, load testing, and security scans.',
            type: 'cards'
          },
          {
            key: 'devOpsCI',
            title: 'DevOps & CI/CD Deployment Pipeline',
            category: 'Content Block',
            description: 'Automated GitHub Actions, Dockerized containers, and Kubernetes deployment.',
            type: 'content'
          },
          {
            key: 'cta',
            title: 'Start Agile Development CTA',
            category: 'Call to Action',
            description: 'Banner inviting clients to experience our rapid 2-week delivery cadence.',
            type: 'cta'
          }
        ]
      },

      // --- Group: TESTIMONIAL ---
      {
        key: 'client-testimonials',
        title: 'Client Testimonials',
        category: 'Customer Reviews',
        description: 'Manage verified client testimonials, ratings, enterprise logos, and recommendations.',
        group: 'TESTIMONIAL',
        icon: Star,
        slug: 'client-testimonials',
        publicRoute: '/company/client-testimonials',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Client reviews headline, star rating badge, and satisfaction intro.',
            type: 'hero'
          },
          {
            key: 'featuredReviews',
            title: 'Featured Enterprise Client Reviews',
            category: 'Cards Grid',
            description: 'High-impact testimonial quotes from CTOs, product managers, and founders.',
            type: 'cards'
          },
          {
            key: 'ratingsBadges',
            title: 'Platform Ratings & Scorecards',
            category: 'Cards Grid',
            description: 'Clutch (4.9/5.0), GoodFirms (5.0/5.0), and Google Reviews scorecards.',
            type: 'cards'
          },
          {
            key: 'cta',
            title: 'Share Your Story CTA',
            category: 'Call to Action',
            description: 'Callout inviting new clients to join our roster of satisfied enterprises.',
            type: 'cta'
          }
        ]
      },
      {
        key: 'video-testimonial',
        title: 'Video Testimonial',
        category: 'Video Stories',
        description: 'Manage client video case studies, interviews, project impact, and playback embeds.',
        group: 'TESTIMONIAL',
        icon: Play,
        slug: 'video-testimonial',
        publicRoute: '/company/video-testimonial',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Video stories headline, client spotlight badge, and introduction.',
            type: 'hero'
          },
          {
            key: 'videoTestimonialsList',
            title: 'Client Video Testimonials Library',
            category: 'Collection CRUD',
            description: 'Manage video embeds, client names, designations, company names, and quotes.',
            type: 'collection',
            collectionType: 'video-testimonials'
          },
          {
            key: 'impactStats',
            title: 'Project Outcome Metrics',
            category: 'Metrics',
            description: 'Average ROI increase, time-to-market reduction, and user adoption rates.',
            type: 'stats'
          }
        ]
      },
      {
        key: 'clutch-testimonial',
        title: 'Clutch Testimonial',
        category: 'Verified Reviews',
        description: 'Manage verified Clutch scorecard ratings, reviewer quotes, badges, and project scopes.',
        group: 'TESTIMONIAL',
        icon: Award,
        slug: 'clutch-testimonial',
        publicRoute: '/company/clutch-testimonial',
        sections: [
          {
            key: 'hero',
            title: 'Hero Banner',
            category: 'Hero',
            description: 'Clutch verified reviews headline, 4.9/5.0 rating badge, and overview.',
            type: 'hero'
          },
          {
            key: 'clutchReviewsList',
            title: 'Verified Clutch Reviews',
            category: 'Collection CRUD',
            description: 'Manage verified Clutch reviews with overall score, quality, schedule, and cost.',
            type: 'collection',
            collectionType: 'clutch-reviews'
          },
          {
            key: 'clutchScorecard',
            title: 'Clutch Scorecard Breakdown',
            category: 'Metrics',
            description: 'Quality 5.0, Schedule 4.9, Cost 4.8, Willingness to Refer 100%.',
            type: 'stats'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. PRODUCT SOLUTIONS MAIN PAGE GROUP
  // =========================================================================
  product: {
    id: 'product',
    title: 'Product',
    description: 'Manage 12 industry software products, SaaS solutions, and mobile application platforms.',
    icon: Package,
    basePath: '/admin/product',
    subPages: [
      {
        key: 'vidyalaya-school-management-software',
        title: 'Vidyalaya School Software',
        category: 'EdTech ERP',
        description: 'School ERP suite, attendance modules, grade books, fees, and parent portals.',
        icon: Package,
        slug: 'vidyalaya-school-management-software',
        publicRoute: '/services/vidyalaya-school-management-software',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Product title, badge, hero image, and demo CTA.', type: 'hero' },
          { key: 'features', title: 'Core ERP Modules & Features', category: 'Cards Grid', description: 'Student admission, fees, timetable, examination, and transport modules.', type: 'cards' },
          { key: 'architecture', title: 'Security & Cloud Architecture', category: 'Content Block', description: 'Role-based access, automated backups, and mobile sync.', type: 'content' },
          { key: 'stats', title: 'Product Impact Metrics', category: 'Metrics', description: 'Schools deployed, students served, parent satisfaction rate.', type: 'stats' },
          { key: 'cta', title: 'Request Live Demo CTA', category: 'Call to Action', description: 'Book a free product walkthrough and trial.', type: 'cta' }
        ]
      },
      {
        key: 'vidyalaya-learning-management-system',
        title: 'Vidyalaya LMS Platform',
        category: 'E-Learning',
        description: 'Online course delivery, live video classrooms, assessments, and certifications.',
        icon: BookOpen,
        slug: 'vidyalaya-learning-management-system',
        publicRoute: '/services/vidyalaya-learning-management-system',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'LMS platform headline, features badge, and trial CTA.', type: 'hero' },
          { key: 'features', title: 'Interactive Learning Capabilities', category: 'Cards Grid', description: 'Live video classes, interactive quizzes, video library, and badges.', type: 'cards' },
          { key: 'stats', title: 'Learner Engagement Stats', category: 'Metrics', description: 'Active learners, course completion rate, test scores improvement.', type: 'stats' },
          { key: 'cta', title: 'Launch LMS Portal CTA', category: 'Call to Action', description: 'Get started with digital classroom automation.', type: 'cta' }
        ]
      },
      {
        key: 'occupational-health-safety-software',
        title: 'Occupational Health & Safety',
        category: 'Enterprise Compliance',
        description: 'Workplace safety compliance, incident reporting, hazard analysis, and audit logs.',
        icon: ShieldCheck,
        slug: 'occupational-health-safety-software',
        publicRoute: '/services/occupational-health-safety-software',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Safety software headline, OSHA compliance badge, and intro.', type: 'hero' },
          { key: 'features', title: 'Incident & Audit Modules', category: 'Cards Grid', description: 'Real-time incident reporting, hazard inspection, compliance checklists.', type: 'cards' },
          { key: 'stats', title: 'Compliance & Safety Metrics', category: 'Metrics', description: 'Incident reduction rate, audit compliance score, risk alerts handled.', type: 'stats' },
          { key: 'cta', title: 'Schedule Safety Audit CTA', category: 'Call to Action', description: 'Book an OSHA compliance demo.', type: 'cta' }
        ]
      },
      {
        key: 'health-care-app-development',
        title: 'Healthcare Solutions & Telehealth',
        category: 'HealthTech',
        description: 'HIPAA-compliant patient management, doctor appointments, and EHR portals.',
        icon: Heart,
        slug: 'health-care-app-development',
        publicRoute: '/services/health-care-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'HealthTech platform headline, HIPAA badge, and appointment booking.', type: 'hero' },
          { key: 'features', title: 'Telehealth & Clinical Features', category: 'Cards Grid', description: 'Video consultations, e-prescriptions, lab report sync, and billing.', type: 'cards' },
          { key: 'stats', title: 'Patient & Clinic Metrics', category: 'Metrics', description: 'Telehealth consultations completed, clinic wait time reduction.', type: 'stats' },
          { key: 'cta', title: 'Build Telehealth App CTA', category: 'Call to Action', description: 'Connect with our healthcare software architects.', type: 'cta' }
        ]
      },
      {
        key: 'education-app-development',
        title: 'Education App Platform',
        category: 'EdTech Mobile',
        description: 'Interactive student learning mobile apps, quizzes, and gamified study modules.',
        icon: Sparkles,
        slug: 'education-app-development',
        publicRoute: '/services/education-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'EdTech mobile app headline, gamified learning badge, and preview.', type: 'hero' },
          { key: 'features', title: 'Mobile Learning Modules', category: 'Cards Grid', description: 'Bite-sized video lessons, gamified quiz leaderboards, offline downloads.', type: 'cards' },
          { key: 'stats', title: 'App Store Ratings & Users', category: 'Metrics', description: 'Downloads count, daily active users, App Store rating.', type: 'stats' },
          { key: 'cta', title: 'Develop EdTech App CTA', category: 'Call to Action', description: 'Build your custom mobile learning app.', type: 'cta' }
        ]
      },
      {
        key: 'uber-like-app-development',
        title: 'Uber-Like Mobility App',
        category: 'On-Demand Mobility',
        description: 'Passenger booking app, driver partner portal, live GPS dispatch, and fares.',
        icon: Smartphone,
        slug: 'uber-like-app-development',
        publicRoute: '/services/uber-like-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'On-demand taxi app headline, real-time GPS badge, and booking CTA.', type: 'hero' },
          { key: 'features', title: 'Passenger & Driver Modules', category: 'Cards Grid', description: 'Live tracking, automated dispatch, wallet payments, surge pricing.', type: 'cards' },
          { key: 'stats', title: 'Rides & Dispatch Stats', category: 'Metrics', description: 'Completed rides, driver onboarding speed, dispatch latency.', type: 'stats' },
          { key: 'cta', title: 'Launch Taxi Solution CTA', category: 'Call to Action', description: 'Deploy your white-label ride-hailing platform.', type: 'cta' }
        ]
      },
      {
        key: 'spotify-like-app-development',
        title: 'Spotify-Like Audio Streaming',
        category: 'Media & Streaming',
        description: 'Audio streaming engine, personalized playlists, offline caching, and artist analytics.',
        icon: Mic,
        slug: 'spotify-like-app-development',
        publicRoute: '/services/spotify-like-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Audio streaming headline, lossless audio badge, and player preview.', type: 'hero' },
          { key: 'features', title: 'Streaming Engine & Features', category: 'Cards Grid', description: 'HLS streaming, smart recommendation AI, lyrics sync, podcast support.', type: 'cards' },
          { key: 'stats', title: 'Streaming Metrics', category: 'Metrics', description: 'Concurrent listeners, streaming bitrate, catalog capacity.', type: 'stats' },
          { key: 'cta', title: 'Build Music App CTA', category: 'Call to Action', description: 'Create your audio streaming mobile and web platform.', type: 'cta' }
        ]
      },
      {
        key: 'zomato-like-app-development',
        title: 'Zomato-Like Food Delivery',
        category: 'FoodTech & Logistics',
        description: 'Multi-restaurant ordering, delivery tracking, restaurant POS, and payments.',
        icon: Briefcase,
        slug: 'zomato-like-app-development',
        publicRoute: '/services/zomato-like-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Food delivery headline, live tracking badge, and ordering UI.', type: 'hero' },
          { key: 'features', title: 'Restaurant & Rider Modules', category: 'Cards Grid', description: 'Menu management, live order dispatch, contactless delivery, offers.', type: 'cards' },
          { key: 'stats', title: 'Orders & Delivery Stats', category: 'Metrics', description: 'Average delivery time, merchant retention, order success rate.', type: 'stats' },
          { key: 'cta', title: 'Launch Food App CTA', category: 'Call to Action', description: 'Build your on-demand multi-vendor food delivery platform.', type: 'cta' }
        ]
      },
      {
        key: 'amazon-like-app-development',
        title: 'Amazon-Like E-Commerce',
        category: 'Marketplace E-Commerce',
        description: 'Multi-vendor marketplace, cart, secure Stripe/PayPal checkout, and orders.',
        icon: Globe,
        slug: 'amazon-like-app-development',
        publicRoute: '/services/amazon-like-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'E-commerce marketplace headline, 1-click checkout badge, and store.', type: 'hero' },
          { key: 'features', title: 'Marketplace & Cart Capabilities', category: 'Cards Grid', description: 'Vendor dashboards, inventory sync, product reviews, payment gateways.', type: 'cards' },
          { key: 'stats', title: 'E-Commerce GMV Metrics', category: 'Metrics', description: 'GMV processed, checkout conversion rate, catalog SKU scale.', type: 'stats' },
          { key: 'cta', title: 'Build Marketplace CTA', category: 'Call to Action', description: 'Deploy your scalable multi-vendor e-commerce marketplace.', type: 'cta' }
        ]
      },
      {
        key: 'visitor-management-system',
        title: 'Visitor Management (VMS)',
        category: 'Enterprise Workplace',
        description: 'Contactless QR check-in, host alerts, NDA e-signatures, and security badges.',
        icon: Users,
        slug: 'visitor-management-system',
        publicRoute: '/services/visitor-management-system',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Visitor check-in headline, security badge, and kiosk UI.', type: 'hero' },
          { key: 'features', title: 'Kiosk & Security Capabilities', category: 'Cards Grid', description: 'QR contactless pass, thermal scan, automated host SMS, audit trail.', type: 'cards' },
          { key: 'stats', title: 'Visitor Safety Stats', category: 'Metrics', description: 'Visitor check-ins processed, check-in time reduction, facilities secured.', type: 'stats' },
          { key: 'cta', title: 'Deploy VMS Kiosk CTA', category: 'Call to Action', description: 'Digitize your enterprise front desk and security.', type: 'cta' }
        ]
      },
      {
        key: 'warehouse-management-system',
        title: 'Warehouse Management (WMS)',
        category: 'Supply Chain Logistics',
        description: 'Barcode scanning, bin location tracking, pick-pack workflows, and automated restock.',
        icon: Layers,
        slug: 'warehouse-management-system',
        publicRoute: '/services/warehouse-management-system',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'WMS logistics headline, real-time inventory badge, and dashboard.', type: 'hero' },
          { key: 'features', title: 'Inventory & Dispatch Modules', category: 'Cards Grid', description: 'Barcode RFID scanner, batch picking, automated re-ordering, EDI sync.', type: 'cards' },
          { key: 'stats', title: 'Fulfillment Metrics', category: 'Metrics', description: 'Inventory accuracy rate, order fulfillment speed, shipping errors reduction.', type: 'stats' },
          { key: 'cta', title: 'Automate Warehouse CTA', category: 'Call to Action', description: 'Optimize your supply chain with intelligent WMS software.', type: 'cta' }
        ]
      },
      {
        key: 'clover-app-development',
        title: 'Clover POS App Solution',
        category: 'FinTech POS',
        description: 'Clover point-of-sale integration, custom payment apps, merchant inventory, and sync.',
        icon: Award,
        slug: 'clover-app-development',
        publicRoute: '/services/clover-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Clover POS app headline, certified developer badge, and POS screen.', type: 'hero' },
          { key: 'features', title: 'POS Integration Features', category: 'Cards Grid', description: 'EMV card reader sync, loyalty programs, tip management, inventory sync.', type: 'cards' },
          { key: 'stats', title: 'POS Transaction Scale', category: 'Metrics', description: 'Transactions processed, merchant locations, checkout speed.', type: 'stats' },
          { key: 'cta', title: 'Develop Clover App CTA', category: 'Call to Action', description: 'Build certified apps for Clover App Market.', type: 'cta' }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. SERVICES MAIN PAGE GROUP
  // =========================================================================
  services: {
    id: 'services',
    title: 'Services',
    description: 'Manage 10 core software engineering services, mobile apps, AI/ML, and cloud capabilities.',
    icon: Layers,
    basePath: '/admin/services',
    subPages: [
      {
        key: 'services-overview',
        title: 'Services Overview',
        category: 'Services Directory',
        description: 'Master service pillars, engineering capabilities, cross-functional teams, and delivery overview.',
        icon: Layers,
        slug: 'services-overview',
        publicRoute: '/services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Services overview headline, enterprise badge, and consultation CTA.', type: 'hero' },
          { key: 'servicesGrid', title: 'Core Engineering Pillars', category: 'Cards Grid', description: 'Mobile, Backend, Frontend, Cloud, AI/ML, and Blockchain service cards.', type: 'cards' },
          { key: 'processSteps', title: 'End-to-End Delivery Lifecycle', category: 'Process Steps', description: 'Discovery, Architecture, Agile Sprints, QA, and Cloud Deployment.', type: 'process' },
          { key: 'stats', title: 'Global Delivery Numbers', category: 'Metrics', description: 'Projects delivered, engineer headcount, global enterprise clients.', type: 'stats' },
          { key: 'cta', title: 'Consult With Our Engineers CTA', category: 'Call to Action', description: 'Get a free technical architecture consultation.', type: 'cta' }
        ]
      },
      {
        key: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'Native & Hybrid Apps',
        description: 'Native iOS Swift, Android Kotlin, and cross-platform React Native / Flutter apps.',
        icon: Smartphone,
        slug: 'mobile-app-development',
        publicRoute: '/services/mobile-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Mobile app engineering headline, App Store excellence badge, and demo.', type: 'hero' },
          { key: 'capabilities', title: 'iOS, Android & Flutter Capabilities', category: 'Cards Grid', description: 'Native Swift/Kotlin, Flutter cross-platform, offline caching, push notifications.', type: 'cards' },
          { key: 'techStack', title: 'Mobile Tech Stack', category: 'Cards Grid', description: 'Swift, Kotlin, Flutter, React Native, Firebase, Realm, GraphQL.', type: 'cards' },
          { key: 'stats', title: 'Mobile Apps Track Record', category: 'Metrics', description: 'Apps published, active users scale, average store rating.', type: 'stats' },
          { key: 'cta', title: 'Build Your Mobile App CTA', category: 'Call to Action', description: 'Kickstart your mobile application development.', type: 'cta' }
        ]
      },
      {
        key: 'back-end-development',
        title: 'Back End Development',
        category: 'Microservices & APIs',
        description: 'High-concurrency Node.js, Python, Java, and Go microservices, APIs, and databases.',
        icon: Server,
        slug: 'back-end-development',
        publicRoute: '/services/back-end-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Backend architecture headline, 99.99% uptime badge, and tech specs.', type: 'hero' },
          { key: 'capabilities', title: 'Microservices & Distributed Systems', category: 'Cards Grid', description: 'RESTful/GraphQL APIs, event-driven Kafka, Redis caching, SQL/NoSQL.', type: 'cards' },
          { key: 'techStack', title: 'Backend Frameworks & DBs', category: 'Cards Grid', description: 'Node.js, Python FastAPI, Go, PostgreSQL, MongoDB, Redis, Docker.', type: 'cards' },
          { key: 'stats', title: 'System Throughput & Scalability', category: 'Metrics', description: 'Queries per second, API latency (ms), system uptime SLA.', type: 'stats' },
          { key: 'cta', title: 'Architect Your Backend CTA', category: 'Call to Action', description: 'Consult our principal backend architects.', type: 'cta' }
        ]
      },
      {
        key: 'ai-ml-development',
        title: 'AI & ML Development',
        category: 'Generative AI & LLMs',
        description: 'Custom LLM fine-tuning, RAG enterprise search, computer vision, and predictive analytics.',
        icon: Sparkles,
        slug: 'ai-ml-development',
        publicRoute: '/services/ai-ml-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'AI & Machine Learning headline, Generative AI badge, and capabilities.', type: 'hero' },
          { key: 'capabilities', title: 'AI Solutions & LLM Workflows', category: 'Cards Grid', description: 'RAG search, conversational AI agents, predictive models, vector databases.', type: 'cards' },
          { key: 'techStack', title: 'AI Frameworks & Models', category: 'Cards Grid', description: 'OpenAI, Anthropic Claude, LangChain, LlamaIndex, PyTorch, Pinecone.', type: 'cards' },
          { key: 'stats', title: 'AI Accuracy & Speedup Metrics', category: 'Metrics', description: 'Model inference speed, classification accuracy, workflow automation %.', type: 'stats' },
          { key: 'cta', title: 'Deploy Enterprise AI CTA', category: 'Call to Action', description: 'Integrate custom AI into your enterprise products.', type: 'cta' }
        ]
      },
      {
        key: 'front-end-development',
        title: 'Front End Development',
        category: 'Web Apps & UI/UX',
        description: 'High-performance React, Next.js, and Vue.js web applications with modern UX and animations.',
        icon: Code,
        slug: 'front-end-development',
        publicRoute: '/services/front-end-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Frontend engineering headline, sub-second load badge, and UI preview.', type: 'hero' },
          { key: 'capabilities', title: 'Next.js & Modern UI Architecture', category: 'Cards Grid', description: 'SSR/SSG performance, design systems, WebGL animations, accessibility.', type: 'cards' },
          { key: 'techStack', title: 'Frontend Frameworks & Tooling', category: 'Cards Grid', description: 'React 19, Next.js 15, TypeScript, Tailwind CSS, Vite, Framer Motion.', type: 'cards' },
          { key: 'stats', title: 'Lighthouse & Performance Scores', category: 'Metrics', description: 'Lighthouse 100 score, First Contentful Paint, Core Web Vitals.', type: 'stats' },
          { key: 'cta', title: 'Build Fast Web App CTA', category: 'Call to Action', description: 'Transform your web application user experience.', type: 'cta' }
        ]
      },
      {
        key: 'microsoft-development',
        title: 'Microsoft Development',
        category: '.NET & Azure',
        description: 'Enterprise .NET Core, C#, Azure cloud migration, SQL Server, and Microsoft Power Apps.',
        icon: Globe,
        slug: 'microsoft-development',
        publicRoute: '/services/microsoft-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Microsoft engineering headline, Certified Gold Partner badge, and overview.', type: 'hero' },
          { key: 'capabilities', title: '.NET & Azure Enterprise Solutions', category: 'Cards Grid', description: '.NET 8 Core Web APIs, Azure Microservices, SQL Server optimization.', type: 'cards' },
          { key: 'techStack', title: 'Microsoft Stack', category: 'Cards Grid', description: 'C#, ASP.NET Core, Azure DevOps, Entity Framework, Blazor, Power Platform.', type: 'cards' },
          { key: 'stats', title: 'Enterprise Migration Metrics', category: 'Metrics', description: 'Legacy systems modernized, Azure cost optimization %, SLA guarantee.', type: 'stats' },
          { key: 'cta', title: 'Hire .NET Developers CTA', category: 'Call to Action', description: 'Scale your Microsoft enterprise applications.', type: 'cta' }
        ]
      },
      {
        key: 'blockchain-development',
        title: 'Blockchain Development',
        category: 'Web3 & Smart Contracts',
        description: 'Solidity smart contracts, DeFi protocols, NFT marketplaces, and tokenomics security audits.',
        icon: ShieldCheck,
        slug: 'blockchain-development',
        publicRoute: '/services/blockchain-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Web3 blockchain headline, zero-vulnerability audit badge, and demo.', type: 'hero' },
          { key: 'capabilities', title: 'Smart Contracts & DApp Solutions', category: 'Cards Grid', description: 'EVM smart contracts, decentralized exchanges, wallet integrations, auditing.', type: 'cards' },
          { key: 'techStack', title: 'Web3 Protocol Stack', category: 'Cards Grid', description: 'Ethereum, Polygon, Solana, Solidity, Hardhat, Ethers.js, IPFS.', type: 'cards' },
          { key: 'stats', title: 'Total Value Locked & Audits', category: 'Metrics', description: 'Smart contracts audited, TVL secured, transaction throughput.', type: 'stats' },
          { key: 'cta', title: 'Launch Web3 DApp CTA', category: 'Call to Action', description: 'Build audited, enterprise-grade blockchain applications.', type: 'cta' }
        ]
      },
      {
        key: 'software-development-service',
        title: 'Custom Software Development',
        category: 'Enterprise Engineering',
        description: 'End-to-end bespoke software architecture, system modernization, and custom platforms.',
        icon: Code,
        slug: 'software-development-service',
        publicRoute: '/services/software-development-service',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Custom software headline, 100% IP ownership badge, and overview.', type: 'hero' },
          { key: 'capabilities', title: 'Bespoke Enterprise Capabilities', category: 'Cards Grid', description: 'Enterprise ERPs, CRM integrations, workflow automation, legacy rewrite.', type: 'cards' },
          { key: 'processSteps', title: 'Custom Engineering Process', category: 'Process Steps', description: 'Scoping, Architecture Design, Sprint Execution, QA, Deployment.', type: 'process' },
          { key: 'stats', title: 'Enterprise Delivery Stats', category: 'Metrics', description: 'Enterprise systems deployed, user adoption %, uptime SLA.', type: 'stats' },
          { key: 'cta', title: 'Scope Your Software CTA', category: 'Call to Action', description: 'Schedule a discovery call with our solutions team.', type: 'cta' }
        ]
      },
      {
        key: 'iwatch-app-development',
        title: 'iWatch App Development',
        category: 'watchOS Wearables',
        description: 'Apple Watch companion apps, HealthKit biometric sensors, and real-time watchOS widgets.',
        icon: Smartphone,
        slug: 'iwatch-app-development',
        publicRoute: '/services/iwatch-app-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'watchOS app development headline, HealthKit badge, and watch UI.', type: 'hero' },
          { key: 'capabilities', title: 'Wearable & Sensor Features', category: 'Cards Grid', description: 'Heart rate & HealthKit sync, Complications widgets, standalone watch apps.', type: 'cards' },
          { key: 'techStack', title: 'watchOS Technology', category: 'Cards Grid', description: 'SwiftUI for watchOS, CoreBluetooth, HealthKit, WatchConnectivity.', type: 'cards' },
          { key: 'stats', title: 'Wearable Engagement Metrics', category: 'Metrics', description: 'Daily active wearable sessions, sensor sync accuracy, battery optimization.', type: 'stats' },
          { key: 'cta', title: 'Build watchOS App CTA', category: 'Call to Action', description: 'Extend your iOS app ecosystem to Apple Watch.', type: 'cta' }
        ]
      },
      {
        key: 'premium-services-grid',
        title: 'Premium Services Grid',
        category: 'Spotlight Grid',
        description: 'Comprehensive high-level grid highlighting all premium technology services.',
        icon: Star,
        slug: 'premium-services-grid',
        publicRoute: '/services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Spotlight services headline, full-stack badge, and grid intro.', type: 'hero' },
          { key: 'servicesCards', title: 'Services Showcase Cards', category: 'Cards Grid', description: 'Feature cards with icons, descriptions, and deep-dive links for all services.', type: 'cards' },
          { key: 'cta', title: 'Get Started CTA', category: 'Call to Action', description: 'Partner with Firevy engineering pods.', type: 'cta' }
        ]
      },
      {
        key: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'Other Services',
        description: 'Comprehensive UI/UX design, user research, wireframing, high-fidelity Figma prototyping, and design systems.',
        icon: Palette,
        slug: 'ui-ux-design',
        publicRoute: '/services/ui-ux-design',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'UI/UX design headline, design excellence badge, and discovery call CTA.', type: 'hero' },
          { key: 'overview', title: 'Design Advisory Overview', category: 'Overview', description: 'User-centric product design, interactive prototypes, and collaborative illustrations.', type: 'cards' },
          { key: 'expertiseCards', title: 'UI/UX Practice Domains', category: 'Cards Grid', description: 'User research, wireframing, UI prototyping, design systems, usability testing, accessibility.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: 'Higher conversion rates, lower dev costs, brand loyalty, frictionless journeys, cross-platform consistency.', type: 'cards' },
          { key: 'techStack', title: 'Design Ecosystem & Tooling', category: 'Tech Grid', description: 'Figma, Adobe XD, Sketch, Miro, InVision, Zeplin, Framer, Principle.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering UI vs UX, design tools, responsiveness, and deliverables.', type: 'faq' },
          { key: 'ctaForm', title: 'Design Consultation Booking Form', category: 'Form', description: 'Interactive 30-min product design strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'Other Services',
        description: 'Comprehensive digital marketing, performance marketing, SEO, PPC, social media management, and conversion rate optimization.',
        icon: TrendingUp,
        slug: 'digital-marketing',
        publicRoute: '/services/digital-marketing',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Digital Marketing headline, AI-powered strategy description, and consultation CTA.', type: 'hero' },
          { key: 'ecommerceMarketing', title: '360-Degree Ecommerce Marketing', category: 'Overview', description: 'PPC, keyword research, competitive analysis, and sponsored listings.', type: 'cards' },
          { key: 'customSolutions', title: 'Custom Digital Marketing Solutions', category: 'Overview', description: 'Organic reach, consumer interaction, and social media marketing.', type: 'cards' },
          { key: 'benefits', title: 'Key Benefits of Digital Marketing', category: 'Cards Grid', description: 'Online visibility, brand recognition, cost effectiveness, targeted traffic, marketing ROI.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'techStack', title: 'Technology & Marketing Tooling Stack', category: 'Tech Grid', description: 'Google Analytics, SEMrush, Ahrefs, Meta Ads, HubSpot, GA4.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering digital marketing ROI, services, and strategies.', type: 'faq' },
          { key: 'ctaForm', title: 'Marketing Consultation Booking Form', category: 'Form', description: 'Interactive performance marketing consultation booking form.', type: 'form' }
        ]
      },
      {
        key: 'prototype-development-services',
        title: 'Prototype Development Services',
        category: 'Other Services',
        description: 'End-to-end prototype development, interactive prototyping, rapid prototyping, wireframes, and scalable proof-of-concept solutions.',
        icon: Layers,
        slug: 'prototype-development-services',
        publicRoute: '/services/prototype-development-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Prototype development headline, market validation intro, and consultation CTA.', type: 'hero' },
          { key: 'offeringOverview', title: 'Prototype Software Development Offering', category: 'Overview', description: 'Interactive software prototyping, pre-built components, and scalable architecture.', type: 'cards' },
          { key: 'briefOverview', title: 'Agile Prototyping Methodology', category: 'Overview', description: 'High-velocity delivery methodology, Agile sprints, and startup prototyping squads.', type: 'cards' },
          { key: 'customizableExperts', title: '100% Customizable Prototyping', category: 'Highlight', description: 'Reliable and user-friendly prototyping solutions tailored to unique inventor needs.', type: 'cards' },
          { key: 'expertiseCards', title: 'Prototyping Practice Domains', category: 'Cards Grid', description: 'Prototype App Development, Interactive Prototyping, Rapid, Product, Incremental, Extreme Prototyping.', type: 'cards' },
          { key: 'benefits', title: 'Business Prototyping Benefits', category: 'Cards Grid', description: 'Risk reduction, better communication, user feedback, fast market entry, cost-effectiveness, innovation.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'techStack', title: 'Technology Stack', category: 'Tech Grid', description: 'Backend, Frontend, Databases, DevOps, Testing, and Project Management tools.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: '10 comprehensive FAQs on prototyping costs, validation, functional docs, and deliverables.', type: 'faq' },
          { key: 'ctaForm', title: 'Prototyping Consultation Form', category: 'Form', description: 'Interactive product scoping and prototype consultation booking form.', type: 'form' }
        ]
      },
      {
        key: 'cloud-development',
        title: 'Cloud Development',
        category: 'Cloud & DevOps',
        description: 'Enterprise cloud application development, cloud-native architecture, multi-cloud migration, AWS, Azure, GCP, and 24/7 cloud monitoring.',
        icon: Cloud,
        slug: 'cloud-development',
        publicRoute: '/services/cloud-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Cloud application development headline, stats counter, and consultation CTA.', type: 'hero' },
          { key: 'topServices', title: 'Top Cloud App Development Services', category: 'Overview', description: 'AWS, Azure, and GCP scalability and workload migration services.', type: 'cards' },
          { key: 'longTermValue', title: 'Cloud Solutions for Long-Term Value', category: 'Overview', description: 'Browser-agnostic, future-proof, and highly scalable cloud applications.', type: 'cards' },
          { key: 'customizableExperts', title: '100% Customizable Cloud Development', category: 'Highlight', description: 'Scalable, high-performance & secure cloud architecture.', type: 'cards' },
          { key: 'expertiseCards', title: 'Cloud Computing Practice Domains', category: 'Cards Grid', description: 'Cloud App Dev, Cloud-Native, Consulting, Migration, Integration, Monitoring.', type: 'cards' },
          { key: 'benefits', title: 'Benefits of Cloud-Based Solutions', category: 'Cards Grid', description: 'Increased efficiency, high flexibility, cost reduction, disaster recovery, high availability.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'techStack', title: 'Technology Stack', category: 'Tech Grid', description: 'AWS, Azure, GCP, Docker, Kubernetes, microservices, databases, and CI/CD tools.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: '8 comprehensive FAQs on cloud application development, languages, security, and migration.', type: 'faq' },
          { key: 'ctaForm', title: 'Cloud Strategy Consultation Form', category: 'Form', description: 'Interactive cloud consultation booking form.', type: 'form' }
        ]
      },
      {
        key: 'cloud-computing-service',
        title: 'Cloud Computing Service',
        category: 'Cloud & DevOps',
        description: 'Comprehensive cloud computing services, multi-cloud infrastructure, DevOps CI/CD automation, FinOps, and cloud security governance.',
        icon: Cloud,
        slug: 'cloud-computing-service',
        publicRoute: '/services/cloud-computing-service',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Cloud computing headline, value propositions, and consultation CTA.', type: 'hero' },
          { key: 'offerings', title: 'Core Cloud Computing Offerings', category: 'Cards Grid', description: 'Infrastructure management, cloud migration, cloud-native apps, CI/CD, security, FinOps.', type: 'cards' },
          { key: 'premiumServices', title: 'Our Premium Services', category: 'Services Grid', description: 'Comprehensive enterprise web, mobile, cloud, and digital services.', type: 'cards' },
          { key: 'experts', title: 'Seasoned Cloud Architects', category: 'Team', description: 'Principal cloud specialists and DevOps squads.', type: 'team' },
          { key: 'stats', title: 'About Us Metrics', category: 'Metrics', description: '8 key performance metrics and global credentials.', type: 'stats' },
          { key: 'sectors', title: 'Sectors Thriving in Cloud', category: 'Industries', description: 'Fintech, Healthcare, Retail, and Logistics domain applications.', type: 'industries' },
          { key: 'techStack', title: 'Cloud & DevOps Stack', category: 'Tech Grid', description: 'AWS, Azure, GCP, Kubernetes, Docker, Terraform, Prometheus.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'process', title: 'Cloud Deployment Methodology', category: 'Process', description: 'Step-by-step cloud strategy, architecture, migration, and governance.', type: 'process' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Comprehensive FAQs on cloud computing SLAs, costs, and multi-cloud strategy.', type: 'faq' }
        ]
      },
      {
        key: 'devops-development-services',
        title: 'DevOps Development Services',
        category: 'Cloud & DevOps',
        description: 'Automated CI/CD pipelines, Kubernetes container orchestration, Infrastructure as Code (Terraform), DevSecOps, and SRE continuous monitoring.',
        icon: Cloud,
        slug: 'devops-development-services',
        publicRoute: '/services/devops-development-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'DevOps development headline, value propositions, and consultation CTA.', type: 'hero' },
          { key: 'marquee', title: 'Brand Logo Marquee', category: 'Social Proof', description: 'Enterprise technology clients marquee.', type: 'marquee' },
          { key: 'dynamicDevops', title: 'Explore Dynamic DevOps Services', category: 'Overview', description: 'Breakthrough DevOps methodologies, release velocity, and downtime prevention.', type: 'overview' },
          { key: 'awards', title: 'Awards Ribbon', category: 'Badges', description: 'Top rated Clutch & GoodFirms recognitions.', type: 'badges' },
          { key: 'narrative', title: 'Creating Excellent DevOps Solutions', category: 'Narrative', description: 'Enterprise DevOps architecture and delivery framework.', type: 'overview' },
          { key: 'techCards', title: 'Cutting-Edge Technologies', category: 'Cards Carousel', description: 'CI/CD, Kubernetes, Terraform, Ansible, DevSecOps, Prometheus, GitOps.', type: 'cards' },
          { key: 'premiumServices', title: 'Our Premium Services', category: 'Services Grid', description: 'Comprehensive enterprise web, mobile, cloud, and digital services.', type: 'cards' },
          { key: 'experts', title: 'Seasoned DevOps Engineers', category: 'Team', description: 'Principal DevOps architects and SRE specialists.', type: 'team' },
          { key: 'stats', title: 'About Us Metrics', category: 'Metrics', description: '8 key performance metrics and global credentials.', type: 'stats' },
          { key: 'transformativeImpact', title: 'Transformative Impact of DevOps', category: 'Highlight', description: '4 strategic pillars of enterprise DevOps acceleration.', type: 'cards' },
          { key: 'blueBanner', title: 'Expertise of Our Services', category: 'Banner Grid', description: '6 core service pillars on blue background.', type: 'cards' },
          { key: 'sectors', title: 'Sectors Thriving in DevOps', category: 'Industries', description: 'Fintech, Healthcare, Retail, and Logistics domain applications.', type: 'industries' },
          { key: 'portfolio', title: 'Success Stories', category: 'Case Studies', description: 'Enterprise case studies and impact metrics.', type: 'portfolio' },
          { key: 'techStackRows', title: 'Technology Stack Proficiently Used', category: 'Tech Grid', description: 'Curated matrix of languages, cloud platforms, and DevOps tools.', type: 'cards' },
          { key: 'trendsVideo', title: 'DevOps in 2025 Video Showcase', category: 'Video Showcase', description: '3D isometric cover with interactive video player.', type: 'video' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'process', title: 'DevOps Methodology', category: 'Process', description: 'Discovery, IaC Provisioning, CI/CD Automation, and SRE Monitoring.', type: 'process' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Comprehensive FAQs on DevOps pipeline SLAs, Kubernetes, and DevSecOps.', type: 'faq' }
        ]
      },
      {
        key: 'aws-cloud-services',
        title: 'AWS Cloud Services',
        category: 'Cloud & DevOps',
        description: 'Amazon Web Services consulting, cloud migration, serverless Lambda architecture, AWS Well-Architected Framework, containerization (EKS/ECS), and FinOps cost optimization.',
        icon: Cloud,
        slug: 'aws-cloud-services',
        publicRoute: '/services/aws-cloud-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'AWS cloud services headline, value propositions, and consultation CTA.', type: 'hero' },
          { key: 'marquee', title: 'Brand Logo Marquee', category: 'Social Proof', description: 'Enterprise technology clients marquee.', type: 'marquee' },
          { key: 'leadingAws', title: 'Leading AWS Cloud Services Company', category: 'Overview', description: 'AWS cloud strategy, architecture, and high availability.', type: 'overview' },
          { key: 'startupsBrief', title: 'AWS Cloud Engineers For Startups', category: 'Overview', description: 'Serverless scaling, auto-scaling groups, and 99.99% uptime.', type: 'overview' },
          { key: 'awards', title: 'Awards Ribbon', category: 'Badges', description: 'Top rated Clutch & GoodFirms recognitions.', type: 'badges' },
          { key: 'customizableExperts', title: 'Get 100% Customizable AWS Experts', category: 'Narrative', description: 'AWS infrastructure, containerization, and serverless modernization.', type: 'overview' },
          { key: 'premiumServices', title: 'Our Premium Services', category: 'Services Grid', description: 'Comprehensive enterprise web, mobile, cloud, and digital services.', type: 'cards' },
          { key: 'expertiseCards', title: 'Expertise In Our AWS Cloud Services', category: 'Cards Grid', description: 'Migration, Serverless Lambda, Managed Databases, Containers, IAM DevSecOps, FinOps.', type: 'cards' },
          { key: 'trustRecognition', title: 'Trust Recognition Banner', category: 'Badges', description: 'Proud to have picked these up along the way.', type: 'badges' },
          { key: 'benefitsCards', title: 'Benefits of AWS Cloud Services', category: 'Cards Grid', description: 'Roadmap, Multi-AZ High Availability, Serverless Agility, Security, CI/CD, FinOps.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'innovativeSlider', title: 'Unveiling Our Innovative Solution', category: 'Video Showcase', description: 'Interactive video slider showcase.', type: 'video' },
          { key: 'process', title: 'Process We Follow', category: 'Process', description: 'Agile AWS lifecycle from discovery to multi-region deployment and 24/7 monitoring.', type: 'process' },
          { key: 'storyWords', title: 'Our Story, Their Words', category: 'Testimonials', description: 'Client video testimonials.', type: 'testimonials' },
          { key: 'trustedBrands', title: 'Trusted Brands Grid', category: 'Social Proof', description: 'World leading brands trusted partners.', type: 'social' },
          { key: 'successMatrix', title: 'Success Matrix', category: 'Metrics', description: 'Delivery metrics and enterprise impact.', type: 'stats' },
          { key: 'techStack', title: 'Technology Stack', category: 'Tech Grid', description: 'AWS services, cloud tooling, languages, and databases.', type: 'cards' },
          { key: 'featuredIn', title: 'We Have Been Featured In', category: 'Social Proof', description: 'Industry publication mentions and media features.', type: 'social' },
          { key: 'digitalTransformation', title: 'Digital Transformation Slider', category: 'Cards Carousel', description: 'Digital transformation through innovation slider.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Comprehensive FAQs on AWS migration, costs, serverless, and compliance.', type: 'faq' },
          { key: 'blogs', title: 'Our Recent Blogs', category: 'Articles', description: 'Recent tech articles and thought leadership.', type: 'cards' },
          { key: 'whatSetsUsApart', title: 'What Sets Us Apart As AWS Cloud Services Provider', category: 'Highlight', description: 'Core differentiators and engineering principles.', type: 'cards' },
          { key: 'ctaBanner', title: 'AWS Cloud Challenge CTA Banner', category: 'Call to Action', description: 'Discuss project and hire AWS architects.', type: 'cta' },
          { key: 'newsletter', title: 'Newsletter Subscribe Banner', category: 'Call to Action', description: 'Subscribe for the latest updates and news.', type: 'cta' }
        ]
      },
      {
        key: 'google-cloud-development',
        title: 'Google Cloud Development',
        category: 'Cloud & DevOps',
        description: 'Google Cloud Platform (GCP) development, GKE Kubernetes containerization, BigQuery data analytics, serverless Cloud Run, and Vertex AI solutions.',
        icon: Cloud,
        slug: 'google-cloud-development',
        publicRoute: '/services/google-cloud-development',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Google Cloud development headline, 4 stat boxes, and consultation CTA.', type: 'hero' },
          { key: 'marquee', title: 'Brand Logo Marquee', category: 'Social Proof', description: 'Enterprise technology clients marquee.', type: 'marquee' },
          { key: 'safestBest', title: 'Safest Best Google Cloud Development Company', category: 'Overview', description: 'GCP architecture, GKE clustering, and high uptime.', type: 'overview' },
          { key: 'brief', title: 'Brief About Google Cloud Development', category: 'Overview', description: 'BigQuery, Vertex AI, and multi-zone VPC networks.', type: 'overview' },
          { key: 'awards', title: 'Awards Ribbon', category: 'Badges', description: 'Top rated Clutch & GoodFirms recognitions.', type: 'badges' },
          { key: 'customizableExperts', title: 'Get 100% Customizable Google Cloud Services', category: 'Narrative', description: 'Quote card and enterprise cloud transformation.', type: 'overview' },
          { key: 'techCards', title: 'Cutting-Edge Technologies We Use', category: 'Cards Carousel', description: 'GKE, BigQuery, Cloud Run, Vertex AI, Cloud Spanner, Terraform.', type: 'cards' },
          { key: 'premiumServices', title: 'Our Premium Services', category: 'Services Grid', description: 'Comprehensive enterprise web, mobile, cloud, and digital services.', type: 'cards' },
          { key: 'portfolio', title: 'Success Stories', category: 'Case Studies', description: 'Enterprise case studies and impact metrics.', type: 'portfolio' },
          { key: 'proudAwards', title: 'Proud Awards Banner', category: 'Badges', description: 'Proud to have picked these up along the way.', type: 'badges' },
          { key: 'benefitsCards', title: 'Benefits of Our Google Cloud Services', category: 'Cards Grid', description: '6 core pillars of Google Cloud reliability.', type: 'cards' },
          { key: 'expertiseCarousel', title: 'Our Expertise in Dedicated Google Cloud Development', category: 'Cards Carousel', description: 'Edge-to-edge carousel of GCP capabilities.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'innovativeVideo', title: 'Innovative Video Solutions Section', category: 'Video Showcase', description: 'Interactive video solutions showcase.', type: 'video' },
          { key: 'process', title: 'Process We Follow', category: 'Process', description: 'Agile GCP lifecycle from audit to GKE deployment and 24/7 monitoring.', type: 'process' },
          { key: 'storyWords', title: 'Our Story, Their Words', category: 'Testimonials', description: 'Client video testimonials.', type: 'testimonials' },
          { key: 'trustedBrands', title: 'Trusted Brands Grid', category: 'Social Proof', description: 'World leading brands trusted partners.', type: 'social' },
          { key: 'successMatrix', title: 'Success Matrix', category: 'Metrics', description: 'Delivery metrics and enterprise impact.', type: 'stats' },
          { key: 'featuredIn', title: 'We Have Been Featured In', category: 'Social Proof', description: 'Industry publication mentions and media features.', type: 'social' },
          { key: 'digitalTransformation', title: 'Digital Transformation Slider', category: 'Cards Carousel', description: 'Digital transformation through innovation slider.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: '9 comprehensive FAQs on Google Cloud, GKE, BigQuery, and costs.', type: 'faq' },
          { key: 'blogs', title: 'Our Recent Blogs', category: 'Articles', description: 'Recent tech articles and thought leadership.', type: 'cards' },
          { key: 'whatSetsUsApart', title: 'What Sets Us Apart', category: 'Highlight', description: 'Core differentiators and engineering principles.', type: 'cards' },
          { key: 'ctaBanner', title: 'Google Cloud Challenge CTA Banner', category: 'Call to Action', description: 'Discuss project and hire GCP architects.', type: 'cta' }
        ]
      },
      {
        key: 'cloud-devops',
        title: 'Cloud & DevOps',
        category: 'Cloud & DevOps',
        description: 'Unified multi-cloud computing infrastructure, automated CI/CD pipelines, Kubernetes container orchestration, and 24/7 site reliability engineering.',
        icon: Cloud,
        slug: 'cloud-devops',
        publicRoute: '/services/cloud-devops',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Cloud & DevOps headline, 4 stat boxes, and consultation CTA.', type: 'hero' },
          { key: 'marquee', title: 'Brand Logo Marquee', category: 'Social Proof', description: 'Enterprise technology clients marquee.', type: 'marquee' },
          { key: 'safestBest', title: 'Safest Best Cloud & DevOps Company', category: 'Overview', description: 'Multi-cloud architecture, automated delivery, and uptime.', type: 'overview' },
          { key: 'brief', title: 'Brief About Cloud & DevOps Services', category: 'Overview', description: 'CI/CD pipelines, Kubernetes clusters, and SRE.', type: 'overview' },
          { key: 'awards', title: 'Awards Ribbon', category: 'Badges', description: 'Top rated Clutch & GoodFirms recognitions.', type: 'badges' },
          { key: 'customizableExperts', title: 'Get 100% Customizable Cloud & DevOps Services', category: 'Narrative', description: 'Quote card and enterprise cloud transformation.', type: 'overview' },
          { key: 'techCards', title: 'Cutting-Edge Technologies We Use', category: 'Cards Carousel', description: 'CI/CD, Kubernetes, Terraform, Multi-Cloud, DevSecOps, SRE.', type: 'cards' },
          { key: 'premiumServices', title: 'Our Premium Services', category: 'Services Grid', description: 'Comprehensive enterprise web, mobile, cloud, and digital services.', type: 'cards' },
          { key: 'portfolio', title: 'Success Stories', category: 'Case Studies', description: 'Enterprise case studies and impact metrics.', type: 'portfolio' },
          { key: 'proudAwards', title: 'Proud Awards Banner', category: 'Badges', description: 'Proud to have picked these up along the way.', type: 'badges' },
          { key: 'benefitsCards', title: 'Benefits of Our Cloud & DevOps Services', category: 'Cards Grid', description: '6 core pillars of Cloud & DevOps excellence.', type: 'cards' },
          { key: 'expertiseCarousel', title: 'Our Expertise in Dedicated Cloud & DevOps Services', category: 'Cards Carousel', description: 'Edge-to-edge carousel of Cloud & DevOps capabilities.', type: 'cards' },
          { key: 'hiringModels', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fixed Price, Time & Material, Dedicated Team, Buckets Approach.', type: 'cards' },
          { key: 'innovativeVideo', title: 'Innovative Video Solutions Section', category: 'Video Showcase', description: 'Interactive video solutions showcase.', type: 'video' },
          { key: 'process', title: 'Process We Follow', category: 'Process', description: 'Agile lifecycle from audit to multi-cloud deployment and 24/7 monitoring.', type: 'process' },
          { key: 'storyWords', title: 'Our Story, Their Words', category: 'Testimonials', description: 'Client video testimonials.', type: 'testimonials' },
          { key: 'trustedBrands', title: 'Trusted Brands Grid', category: 'Social Proof', description: 'World leading brands trusted partners.', type: 'social' },
          { key: 'successMatrix', title: 'Success Matrix', category: 'Metrics', description: 'Delivery metrics and enterprise impact.', type: 'stats' },
          { key: 'featuredIn', title: 'We Have Been Featured In', category: 'Social Proof', description: 'Industry publication mentions and media features.', type: 'social' },
          { key: 'digitalTransformation', title: 'Digital Transformation Slider', category: 'Cards Carousel', description: 'Digital transformation through innovation slider.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: '9 comprehensive FAQs on Cloud & DevOps, CI/CD, and multi-cloud.', type: 'faq' },
          { key: 'blogs', title: 'Our Recent Blogs', category: 'Articles', description: 'Recent tech articles and thought leadership.', type: 'cards' },
          { key: 'whatSetsUsApart', title: 'What Sets Us Apart', category: 'Highlight', description: 'Core differentiators and engineering principles.', type: 'cards' },
          { key: 'ctaBanner', title: 'Cloud & DevOps Challenge CTA Banner', category: 'Call to Action', description: 'Discuss project and hire Cloud & DevOps architects.', type: 'cta' }
        ]
      },
      {
        key: 'it-consulting-services',
        title: 'IT Consulting Services',
        category: 'Tech Consulting Services',
        description: 'Strategic IT advisory, cloud migration, enterprise architecture, cybersecurity, and digital transformation.',
        icon: Compass,
        slug: 'it-consulting-services',
        publicRoute: '/services/it-consulting-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'IT Consulting headline, stats counter, and free consultation CTA.', type: 'hero' },
          { key: 'overview', title: 'Advisory Overview', category: 'Overview', description: 'Digital transformation highlights, checklist, and collaborative illustrations.', type: 'cards' },
          { key: 'coreServices', title: 'Core IT Consulting Offerings', category: 'Cards Grid', description: 'Digital transformation, Cloud strategy, Enterprise architecture, DevOps, Cybersecurity, TCO.', type: 'cards' },
          { key: 'whyChooseUs', title: 'Why Choose Firevy IT Advisory', category: 'Cards Grid', description: '23+ years experience, certified principal architects, vendor-agnostic advice.', type: 'cards' },
          { key: 'domains', title: 'Specialized Practice Domains', category: 'Tabs', description: 'Cloud, Architecture, Security, DevOps, Data & AI, Enterprise Systems.', type: 'cards' },
          { key: 'caseStudies', title: 'Real-World Transformation Case Studies', category: 'Case Studies', description: 'FinTech cloud migration, healthcare EHR, logistics IoT architecture.', type: 'cards' },
          { key: 'benefits', title: 'Business Benefits', category: 'Metrics Grid', description: 'Faster time-to-market, cost reduction, security hardening, scalability.', type: 'cards' },
          { key: 'techStack', title: 'Technology & Cloud Ecosystem', category: 'Tech Grid', description: 'AWS, Azure, GCP, Kubernetes, Docker, Node.js, Python, PostgreSQL.', type: 'cards' },
          { key: 'models', title: 'Agile Engagement Models', category: 'Cards Grid', description: 'Fractional CTO, Project-Based, Dedicated Squad, SME Augmentation.', type: 'cards' },
          { key: 'process', title: '6-Step IT Consulting Methodology', category: 'Process Steps', description: 'Discovery, Gap Analysis, Blueprint, PoC, Execution, Governance.', type: 'process' },
          { key: 'comparison', title: 'Comparative Analysis Matrix', category: 'Table', description: 'Firevy vs Generic Agencies vs In-House IT.', type: 'table' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion on timelines, IP, NDAs, and deliverables.', type: 'faq' },
          { key: 'ctaForm', title: 'Discovery Call Request Form', category: 'Form', description: 'Interactive 30-min discovery session booking form.', type: 'form' }
        ]
      },
      {
        key: 'app-development-consulting',
        title: 'App Development Consulting',
        category: 'Tech Consulting Services',
        description: 'Strategic mobile advisory, native iOS/Android, Flutter, React Native, UI/UX audits, and mobile cloud backends.',
        icon: Smartphone,
        slug: 'app-development-consulting',
        publicRoute: '/services/app-development-consulting',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'App Consulting headline, stats counter, and discovery call CTA.', type: 'hero' },
          { key: 'overview', title: 'Mobile Consulting Overview', category: 'Overview', description: 'Mobile strategy, tech stack evaluation, and collaborative illustrations.', type: 'cards' },
          { key: 'customAppServices', title: 'Custom Mobile App Consulting', category: 'Cards Grid', description: 'iOS, Android, Cross-platform, Enterprise mobility, UI/UX, and legacy modernization.', type: 'cards' },
          { key: 'cuttingEdgeTech', title: 'Cutting-Edge Mobile Technologies', category: 'Slider', description: 'Swift, Kotlin, Flutter, React Native, GraphQL, Firebase slider.', type: 'slider' },
          { key: 'expertiseCards', title: 'Key Practice Domains', category: 'Cards Grid', description: 'Discovery, architecture advisory, security & compliance, ASO strategy.', type: 'cards' },
          { key: 'techStack', title: 'Mobile Ecosystem & Tools', category: 'Tech Grid', description: 'iOS, Android, Cross-platform, Cloud, DevOps, and QA tools.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering native vs cross-platform, security, and PRD.', type: 'faq' },
          { key: 'ctaForm', title: 'Consultation Booking Form', category: 'Form', description: 'Interactive 30-min strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'startup-consulting-services',
        title: 'Startup Consulting Services',
        category: 'Tech Consulting Services',
        description: 'Strategic startup tech advisory, rapid MVP scoping, cloud architecture, fractional CTO, and investor due diligence.',
        icon: Rocket,
        slug: 'startup-consulting-services',
        publicRoute: '/services/startup-consulting-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Startup Consulting headline, stats counter, and discovery call CTA.', type: 'hero' },
          { key: 'overview', title: 'Startup Consulting Overview', category: 'Overview', description: 'Lean startup strategy, product-market fit, and rapid validation sprints.', type: 'cards' },
          { key: 'expertiseCards', title: 'Startup Practice Domains', category: 'Cards Grid', description: 'Idea validation, competitor analysis, scalable tech stack, fractional CTO, runway management.', type: 'cards' },
          { key: 'benefits', title: 'Startup Business Benefits', category: 'Cards Grid', description: 'De-risked capital, 8-12 week MVP, investor-ready diligence, human-centered UI/UX.', type: 'cards' },
          { key: 'techStack', title: 'Startup Cloud & Tech Ecosystem', category: 'Tech Grid', description: 'Modern scalable frameworks, cloud infrastructure, and DevOps pipelines.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering MVP timeline, fractional CTO, and IP ownership.', type: 'faq' },
          { key: 'ctaForm', title: 'Discovery Session Booking Form', category: 'Form', description: 'Interactive 30-min strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'epicor-erp-consulting-services',
        title: 'Epicor ERP Consulting Services',
        category: 'Tech Consulting Services',
        description: 'Strategic Epicor Kinetic and Prophet 21 implementation, custom BPM workflows, REST API integration, and cloud migrations.',
        icon: Database,
        slug: 'epicor-erp-consulting-services',
        publicRoute: '/services/epicor-erp-consulting-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Epicor ERP headline, operational stats, and discovery call CTA.', type: 'hero' },
          { key: 'overview', title: 'Epicor Advisory Overview', category: 'Overview', description: 'Manufacturing & distribution ERP strategy and kinetic modernization.', type: 'cards' },
          { key: 'expertiseCards', title: 'Epicor Practice Domains', category: 'Cards Grid', description: 'Kinetic upgrades, Prophet 21, BPM customization, REST APIs, MES telemetry.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: 'Lower TCO, automated shop floor workflows, clean data migration, ISO compliance.', type: 'cards' },
          { key: 'techStack', title: 'Epicor Ecosystem & Integrations', category: 'Tech Grid', description: 'Kinetic, P21, EDA/EDD, REST v2, C#, SQL Server, Azure cloud.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering Kinetic vs P21, version upgrades, and ongoing SLAs.', type: 'faq' },
          { key: 'ctaForm', title: 'ERP Consultation Booking Form', category: 'Form', description: 'Interactive 30-min ERP architecture session booking form.', type: 'form' }
        ]
      },
      {
        key: 'devops-consulting-service',
        title: 'DevOps Consulting Service',
        category: 'Tech Consulting Services',
        description: 'Enterprise DevOps consulting, CI/CD pipeline automation, Kubernetes container orchestration, Infrastructure as Code, and 24/7 SRE monitoring.',
        icon: Cloud,
        slug: 'devops-consulting-service',
        publicRoute: '/services/devops-consulting-service',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'DevOps headline, reliability stats, and project discussion CTA.', type: 'hero' },
          { key: 'overview', title: 'DevOps & Cloud Advisory Overview', category: 'Overview', description: 'Enterprise CI/CD automation, cloud infrastructure, and collaborative illustrations.', type: 'cards' },
          { key: 'expertiseCards', title: 'DevOps Practice Domains', category: 'Cards Grid', description: 'Kubernetes orchestration, Terraform IaC, multi-cloud strategy, DevSecOps compliance.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: 'Faster time-to-market, zero-downtime releases, cloud cost optimization, SRE observability.', type: 'cards' },
          { key: 'techStack', title: 'DevOps Ecosystem & Tools', category: 'Tech Grid', description: 'Kubernetes, Docker, Terraform, AWS, Azure, GCP, Prometheus, Grafana.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering zero-downtime deployments, cloud migration, and SLAs.', type: 'faq' },
          { key: 'ctaForm', title: 'DevOps Consultation Booking Form', category: 'Form', description: 'Interactive 30-min cloud & DevOps strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'generative-ai-consulting-company',
        title: 'Generative AI Consulting Company',
        category: 'Tech Consulting Services',
        description: 'Enterprise Generative AI consulting, LLM fine-tuning, RAG architecture, autonomous AI agents, and secure AI governance.',
        icon: Sparkles,
        slug: 'generative-ai-consulting-company',
        publicRoute: '/services/generative-ai-consulting-company',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Generative AI headline, model deployment stats, and discovery call CTA.', type: 'hero' },
          { key: 'overview', title: 'Generative AI Advisory Overview', category: 'Overview', description: 'Enterprise LLM strategy, multimodal models, and collaborative illustrations.', type: 'cards' },
          { key: 'expertiseCards', title: 'Generative AI Practice Domains', category: 'Cards Grid', description: 'Custom model fine-tuning, RAG, multi-agent swarms, AI security & red-teaming.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: '10x velocity, zero-hallucination accuracy, data sovereignty, compute optimization.', type: 'cards' },
          { key: 'techStack', title: 'AI Ecosystem & Foundation Models', category: 'Tech Grid', description: 'OpenAI, Claude, Gemini, Llama 3, LangChain, Pinecone, vLLM.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering data privacy, RAG vs fine-tuning, and model safety.', type: 'faq' },
          { key: 'ctaForm', title: 'AI Consultation Booking Form', category: 'Form', description: 'Interactive 30-min AI transformation strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'microservices-consulting-services',
        title: 'Microservices Consulting Services',
        category: 'Tech Consulting Services',
        description: 'Enterprise Microservices consulting, monolith-to-microservices migration, Kubernetes orchestration, Docker, Domain-Driven Design, and API Gateways.',
        icon: Server,
        slug: 'microservices-consulting-services',
        publicRoute: '/services/microservices-consulting-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Microservices headline, elasticity stats, and project discussion CTA.', type: 'hero' },
          { key: 'overview', title: 'Microservices Advisory Overview', category: 'Overview', description: 'Monolith decomposition, container orchestration, and collaborative illustrations.', type: 'cards' },
          { key: 'expertiseCards', title: 'Microservices Practice Domains', category: 'Cards Grid', description: 'Monolith decomposition, DDD, API gateway, event-driven messaging, Kubernetes, observability.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: 'Independent scalability, fault isolation, CI/CD velocity, polyglot flexibility, zero-trust security.', type: 'cards' },
          { key: 'techStack', title: 'Microservices Ecosystem & Cloud Tools', category: 'Tech Grid', description: 'Kubernetes, Docker, Kafka, Istio, Kong, RabbitMQ, OpenTelemetry, AWS, GCP.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering monolith decomposition, data consistency, and service mesh.', type: 'faq' },
          { key: 'ctaForm', title: 'Microservices Consultation Booking Form', category: 'Form', description: 'Interactive 30-min distributed systems strategy session booking form.', type: 'form' }
        ]
      },
      {
        key: 'ai-consulting-services',
        title: 'AI Consulting Services',
        category: 'Tech Consulting Services',
        description: 'Strategic AI advisory, machine learning model engineering, predictive analytics, computer vision, NLP, and enterprise MLOps.',
        icon: Cpu,
        slug: 'ai-consulting-services',
        publicRoute: '/services/ai-consulting-services',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'AI consulting headline, operational stats, and project discussion CTA.', type: 'hero' },
          { key: 'overview', title: 'AI Advisory Overview', category: 'Overview', description: 'Cognitive systems, machine learning strategy, and collaborative illustrations.', type: 'cards' },
          { key: 'expertiseCards', title: 'AI Practice Domains', category: 'Cards Grid', description: 'Machine learning, predictive forecasting, computer vision, NLP, AI strategy, MLOps.', type: 'cards' },
          { key: 'benefits', title: 'Enterprise Business Benefits', category: 'Cards Grid', description: 'Data-driven forecasting, automation, hyper-personalization, scalable MLOps, security & governance.', type: 'cards' },
          { key: 'techStack', title: 'AI Ecosystem & ML Frameworks', category: 'Tech Grid', description: 'PyTorch, TensorFlow, Scikit-Learn, OpenCV, Hugging Face, SageMaker, Vertex AI.', type: 'cards' },
          { key: 'faqs', title: 'Frequently Asked Questions', category: 'Accordion', description: 'Interactive FAQ accordion covering feasibility, legacy integration, data privacy, and PoC timelines.', type: 'faq' },
          { key: 'ctaForm', title: 'AI Consultation Booking Form', category: 'Form', description: 'Interactive 30-min AI strategy session booking form.', type: 'form' }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. HIRE DEVELOPERS MAIN PAGE GROUP
  // =========================================================================
  hireDevelopers: {
    id: 'hireDevelopers',
    title: 'Hire Developers',
    description: 'Manage dedicated developers, mobile engineers, React/Node full-stack devs, and pricing tiers.',
    icon: Users2,
    basePath: '/admin/hire',
    subPages: [
      {
        key: 'dedicated-developers',
        title: 'Dedicated Developers',
        category: 'Staff Augmentation',
        description: 'Pre-vetted senior software engineers on-demand, flexible billing, and zero hiring fees.',
        icon: Users2,
        slug: 'dedicated-developers',
        publicRoute: '/services/dedicated-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire dedicated engineers headline, top 1% talent badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Developer Talent & Skill Matrix', category: 'Cards Grid', description: 'Full-stack, Mobile, DevOps, AI, and Cloud engineering profiles.', type: 'cards' },
          { key: 'hiringProcess', title: '4-Step Fast Hiring Process', category: 'Process Steps', description: 'Share Requirements, Review Resumes, Interview Candidates, 48-hour Onboard.', type: 'process' },
          { key: 'engagementModels', title: 'Pricing & Engagement Tiers', category: 'Cards Grid', description: 'Full-Time Dedicated, Part-Time Dedicated, and Hourly sprint billing.', type: 'cards' },
          { key: 'stats', title: 'Hiring Speed & Retention Stats', category: 'Metrics', description: '48hr placement speed, 96% retention rate, 15+ days risk-free trial.', type: 'stats' },
          { key: 'cta', title: 'Hire Dedicated Developers CTA', category: 'Call to Action', description: 'Schedule developer interviews today.', type: 'cta' }
        ]
      },
      {
        key: 'hire-mobile-app-developers',
        title: 'Hire Mobile App Developers',
        category: 'iOS & Android Devs',
        description: 'Hire senior Swift, Kotlin, React Native, and Flutter mobile developers.',
        icon: Smartphone,
        slug: 'hire-mobile-app-developers',
        publicRoute: '/services/hire-mobile-app-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire mobile devs headline, certified app engineer badge, and resume CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Mobile Framework Expertise', category: 'Cards Grid', description: 'iOS Swift/SwiftUI, Android Kotlin/Jetpack, Flutter, React Native.', type: 'cards' },
          { key: 'hiringProcess', title: 'Interview & Onboarding Flow', category: 'Process Steps', description: 'Candidate screening, live coding test, project matching, kickoff.', type: 'process' },
          { key: 'stats', title: 'Mobile Talent Pool Stats', category: 'Metrics', description: 'Vetted mobile engineers, apps published, client satisfaction.', type: 'stats' },
          { key: 'cta', title: 'Interview Mobile Engineers CTA', category: 'Call to Action', description: 'Get candidate resumes in 24 hours.', type: 'cta' }
        ]
      },
      {
        key: 'hire-react-nextjs-developers',
        title: 'Hire React & Next.js Devs',
        category: 'Frontend Specialists',
        description: 'Hire expert React, Next.js, and TypeScript frontend engineers for fast web apps.',
        icon: Code,
        slug: 'hire-react-nextjs-developers',
        publicRoute: '/services/hire-react-nextjs-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire React developers headline, modern UI/UX badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'React & Next.js Skillset', category: 'Cards Grid', description: 'Server Components, Redux/Zustand, Tailwind CSS, WebGL, TypeScript.', type: 'cards' },
          { key: 'hiringProcess', title: 'Hiring Steps', category: 'Process Steps', description: 'Requirement review, technical evaluation, direct interview, sprint start.', type: 'process' },
          { key: 'stats', title: 'Developer Experience Metrics', category: 'Metrics', description: 'Average years experience (5+ yrs), Lighthouse score delivery.', type: 'stats' },
          { key: 'cta', title: 'Hire React Experts CTA', category: 'Call to Action', description: 'Build fast, responsive interfaces with our engineers.', type: 'cta' }
        ]
      },
      {
        key: 'hire-nodejs-developers',
        title: 'Hire Node.js Back End Devs',
        category: 'Backend Specialists',
        description: 'Hire Node.js, Express, NestJS, and microservices backend architects.',
        icon: Server,
        slug: 'hire-nodejs-developers',
        publicRoute: '/services/hire-nodejs-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire Node.js backend devs headline, high concurrency badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Backend & DB Competencies', category: 'Cards Grid', description: 'NestJS microservices, Redis caching, MongoDB/Postgres, Kafka messaging.', type: 'cards' },
          { key: 'hiringProcess', title: 'Hiring Process', category: 'Process Steps', description: 'Scoping, architectural assessment, team integration, SLA signoff.', type: 'process' },
          { key: 'stats', title: 'Backend Scale Numbers', category: 'Metrics', description: 'TPS handled, uptime guarantee, API response speedup.', type: 'stats' },
          { key: 'cta', title: 'Hire Node.js Developers CTA', category: 'Call to Action', description: 'Scale your backend architecture.', type: 'cta' }
        ]
      },
      {
        key: 'hire-python-developers',
        title: 'Hire Python & AI Devs',
        category: 'Python & Data Science',
        description: 'Hire Python, Django, FastAPI, PyTorch, and generative AI engineers.',
        icon: Sparkles,
        slug: 'hire-python-developers',
        publicRoute: '/services/hire-python-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire Python & AI engineers headline, LLM & Data badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Python & AI Skillset', category: 'Cards Grid', description: 'FastAPI, Django, LangChain, PyTorch, Pandas, Scikit-learn, Pinecone.', type: 'cards' },
          { key: 'hiringProcess', title: 'Onboarding Flow', category: 'Process Steps', description: 'AI use-case review, technical screening, model testing, project kickoff.', type: 'process' },
          { key: 'stats', title: 'AI Engineering Metrics', category: 'Metrics', description: 'AI pipelines built, model accuracy scores, latency reduction.', type: 'stats' },
          { key: 'cta', title: 'Hire Python Engineers CTA', category: 'Call to Action', description: 'Supercharge your AI development.', type: 'cta' }
        ]
      },
      {
        key: 'hire-c-sharp-developers',
        title: 'Hire C# & .NET Developers',
        category: 'Enterprise .NET',
        description: 'Hire senior C#, ASP.NET Core, Azure cloud, and SQL Server enterprise devs.',
        icon: Globe,
        slug: 'hire-c-sharp-developers',
        publicRoute: '/services/hire-c-sharp-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire .NET developers headline, Microsoft Gold badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: '.NET & Cloud Capabilities', category: 'Cards Grid', description: 'ASP.NET Core 8, Azure microservices, Entity Framework, Blazor, SQL.', type: 'cards' },
          { key: 'hiringProcess', title: '4-Step Hiring Process', category: 'Process Steps', description: 'Share requirements, candidate matching, interview, NDA & kickoff.', type: 'process' },
          { key: 'stats', title: '.NET Enterprise Stats', category: 'Metrics', description: 'Years experience (6+ yrs), enterprise migrations delivered.', type: 'stats' },
          { key: 'cta', title: 'Hire .NET Engineers CTA', category: 'Call to Action', description: 'Scale enterprise Microsoft development.', type: 'cta' }
        ]
      },
      {
        key: 'hire-full-stack-developers',
        title: 'Hire Full Stack JS Devs',
        category: 'MERN & Full Stack',
        description: 'Hire full-stack engineers experienced in React, Node.js, databases, and DevOps.',
        icon: Layers,
        slug: 'hire-full-stack-developers',
        publicRoute: '/services/hire-full-stack-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire full stack devs headline, end-to-end delivery badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Full Stack Tech Stack', category: 'Cards Grid', description: 'Frontend UI, Backend APIs, Cloud deployment, DB architecture, CI/CD.', type: 'cards' },
          { key: 'hiringProcess', title: 'Hiring Steps', category: 'Process Steps', description: 'Role definition, candidate shortlisting, direct interview, sprint 1.', type: 'process' },
          { key: 'stats', title: 'Full Stack Delivery Stats', category: 'Metrics', description: 'Full-stack apps deployed, sprint velocity, team satisfaction.', type: 'stats' },
          { key: 'cta', title: 'Hire Full Stack Engineers CTA', category: 'Call to Action', description: 'Get dedicated full-stack developers.', type: 'cta' }
        ]
      },
      {
        key: 'hire-blockchain-engineers',
        title: 'Hire Blockchain Engineers',
        category: 'Web3 & Solidity',
        description: 'Hire Solidity, smart contract, Ethereum, and Rust Solana blockchain engineers.',
        icon: ShieldCheck,
        slug: 'hire-blockchain-engineers',
        publicRoute: '/services/hire-blockchain-engineers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire Web3 blockchain engineers headline, zero-hack badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Blockchain & Smart Contract Skills', category: 'Cards Grid', description: 'Solidity, Rust, Hardhat, DeFi protocols, NFT minting, security auditing.', type: 'cards' },
          { key: 'hiringProcess', title: 'Hiring Process', category: 'Process Steps', description: 'Protocol assessment, smart contract testing, interview, kickoff.', type: 'process' },
          { key: 'stats', title: 'Web3 Track Record', category: 'Metrics', description: 'Smart contracts deployed, audits passed, TVL managed.', type: 'stats' },
          { key: 'cta', title: 'Hire Web3 Developers CTA', category: 'Call to Action', description: 'Build secure decentralized platforms.', type: 'cta' }
        ]
      },
      {
        key: 'hire-ecommerce-developers',
        title: 'Hire CMS & Shopify Devs',
        category: 'E-Commerce Devs',
        description: 'Hire Shopify Plus, WooCommerce, Magento, and headless commerce developers.',
        icon: Briefcase,
        slug: 'hire-ecommerce-developers',
        publicRoute: '/services/hire-ecommerce-developers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire e-commerce devs headline, conversion optimization badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'E-Commerce Platforms & Tools', category: 'Cards Grid', description: 'Shopify Liquid, Headless Storefronts, Payment Gateways, ERP sync.', type: 'cards' },
          { key: 'hiringProcess', title: 'Hiring Process', category: 'Process Steps', description: 'Store requirement review, developer matching, technical test, launch.', type: 'process' },
          { key: 'stats', title: 'E-Commerce GMV Growth', category: 'Metrics', description: 'Stores launched, checkout speedup, GMV scale.', type: 'stats' },
          { key: 'cta', title: 'Hire E-Commerce Devs CTA', category: 'Call to Action', description: 'Grow your digital retail storefront.', type: 'cta' }
        ]
      },
      {
        key: 'hire-devops-engineers',
        title: 'Hire DevOps & Cloud Engineers',
        category: 'Cloud & Infrastructure',
        description: 'Hire AWS, Google Cloud, Docker, Kubernetes, and CI/CD automated engineers.',
        icon: Cloud,
        slug: 'hire-devops-engineers',
        publicRoute: '/services/hire-devops-engineers',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Hire DevOps engineers headline, 99.99% uptime SLA badge, and CTA.', type: 'hero' },
          { key: 'skillsMatrix', title: 'Cloud & Automation Competencies', category: 'Cards Grid', description: 'Kubernetes, Terraform, AWS/GCP, GitHub Actions, Prometheus, Docker.', type: 'cards' },
          { key: 'hiringProcess', title: 'DevOps Onboarding', category: 'Process Steps', description: 'Infrastructure audit, security check, candidate review, integration.', type: 'process' },
          { key: 'stats', title: 'Deployment & Uptime Stats', category: 'Metrics', description: 'Deployment frequency increase, MTTR reduction, cloud savings %.', type: 'stats' },
          { key: 'cta', title: 'Hire DevOps Architects CTA', category: 'Call to Action', description: 'Automate and scale your cloud infrastructure.', type: 'cta' }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. TECHNOLOGY MAIN PAGE GROUP
  // =========================================================================
  technology: {
    id: 'technology',
    title: 'Technology',
    description: 'Manage technology domains, programming languages, databases, cloud, and AI frameworks.',
    icon: Cpu,
    basePath: '/admin/technologies',
    subPages: [
      {
        key: 'tech-showcase',
        title: 'Tech Stack Showcase',
        category: 'Master Showcase',
        description: 'Interactive tabbed tech stack showcase across Mobile, Frontend, Backend, Cloud, and AI.',
        icon: Cpu,
        slug: 'tech-showcase',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Technology stack headline, modern architecture badge, and intro.', type: 'hero' },
          { key: 'techGrid', title: 'Frameworks & Languages Grid', category: 'Cards Grid', description: 'Categorized technology icons, versions, and capability badges.', type: 'cards' },
          { key: 'architecture', title: 'Enterprise Architectural Principles', category: 'Content Block', description: 'Microservices, event-driven, zero-trust security, and cloud scalability.', type: 'content' },
          { key: 'stats', title: 'Technology Mastery Metrics', category: 'Metrics', description: 'Languages mastered, libraries maintained, enterprise integrations.', type: 'stats' },
          { key: 'cta', title: 'Consult With Our Tech Leads CTA', category: 'Call to Action', description: 'Choose the optimal stack for your enterprise.', type: 'cta' }
        ]
      },
      {
        key: 'mobile',
        title: 'Mobile Technologies',
        category: 'Mobile Stack',
        description: 'Swift, Kotlin, React Native, Flutter, and watchOS wearable architectures.',
        icon: Smartphone,
        slug: 'mobile',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Mobile technologies headline, native & cross-platform badge.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Mobile Frameworks & SDKs', category: 'Cards Grid', description: 'SwiftUI, Jetpack Compose, Flutter, React Native, Firebase, Realm.', type: 'cards' },
          { key: 'benchmarks', title: 'Performance Benchmarks', category: 'Metrics', description: '60fps rendering, memory footprint, startup latency (ms).', type: 'stats' },
          { key: 'cta', title: 'Build Mobile Solution CTA', category: 'Call to Action', description: 'Kickstart your mobile app development.', type: 'cta' }
        ]
      },
      {
        key: 'frontend',
        title: 'Front End Frameworks',
        category: 'Frontend Stack',
        description: 'React, Next.js, Vue, TypeScript, Tailwind CSS, and WebGL rendering engines.',
        icon: Code,
        slug: 'frontend',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Frontend tech headline, high performance badge, and overview.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Frontend UI Tooling & Libraries', category: 'Cards Grid', description: 'React 19, Next.js 15, TypeScript, Tailwind CSS, Redux, Three.js.', type: 'cards' },
          { key: 'benchmarks', title: 'Core Web Vitals & Load Speed', category: 'Metrics', description: 'Lighthouse score, DOM load time, TTFB latency.', type: 'stats' },
          { key: 'cta', title: 'Build With React & Next.js CTA', category: 'Call to Action', description: 'Transform your web application frontend.', type: 'cta' }
        ]
      },
      {
        key: 'backend',
        title: 'Back End & APIs',
        category: 'Backend Stack',
        description: 'Node.js, Python, Go, Java, GraphQL, REST, and gRPC microservices engines.',
        icon: Server,
        slug: 'backend',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Backend technologies headline, distributed systems badge, and overview.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Backend Frameworks & Runtime', category: 'Cards Grid', description: 'Node.js Express/NestJS, Python FastAPI, Go Fiber, Spring Boot.', type: 'cards' },
          { key: 'benchmarks', title: 'Throughput & Scalability Benchmarks', category: 'Metrics', description: 'Requests per second, API latency (ms), 99.99% uptime.', type: 'stats' },
          { key: 'cta', title: 'Architect Backend CTA', category: 'Call to Action', description: 'Consult our principal backend architects.', type: 'cta' }
        ]
      },
      {
        key: 'microsoft',
        title: 'Microsoft Ecosystem',
        category: '.NET & Azure Stack',
        description: '.NET Core, C#, Azure Cloud, SQL Server, Power Apps, and Microsoft Dynamics.',
        icon: Globe,
        slug: 'microsoft',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Microsoft ecosystem headline, certified partner badge, and overview.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Microsoft Tools & Technologies', category: 'Cards Grid', description: 'C#, ASP.NET Core 8, Azure App Service, Entity Framework, Power Apps.', type: 'cards' },
          { key: 'benchmarks', title: 'Azure Reliability & Enterprise SLAs', category: 'Metrics', description: 'Disaster recovery time, Azure cost optimization %, uptime.', type: 'stats' },
          { key: 'cta', title: 'Build On Microsoft Azure CTA', category: 'Call to Action', description: 'Scale enterprise Microsoft applications.', type: 'cta' }
        ]
      },
      {
        key: 'databases',
        title: 'Databases & In-Memory',
        category: 'Data Storage Stack',
        description: 'PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB, and distributed caching.',
        icon: Database,
        slug: 'databases',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Databases & Storage headline, ACID compliance badge, and overview.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Databases & In-Memory Caches', category: 'Cards Grid', description: 'PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB, Cassandra.', type: 'cards' },
          { key: 'benchmarks', title: 'Query & Caching Latency', category: 'Metrics', description: 'Sub-millisecond cache latency, replication lag, storage scale.', type: 'stats' },
          { key: 'cta', title: 'Optimize Your Databases CTA', category: 'Call to Action', description: 'Scale high-throughput data architecture.', type: 'cta' }
        ]
      },
      {
        key: 'ai-ml',
        title: 'AI, LLMs & Generative Tech',
        category: 'AI & Data Science',
        description: 'OpenAI, Anthropic Claude, LangChain, PyTorch, TensorFlow, and vector databases.',
        icon: Sparkles,
        slug: 'ai-ml',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'AI & Machine Learning headline, Generative AI badge, and capabilities.', type: 'hero' },
          { key: 'frameworksGrid', title: 'AI Frameworks & Vector DBs', category: 'Cards Grid', description: 'OpenAI GPT-4, Claude 3.5, LangChain, PyTorch, Pinecone, Chroma.', type: 'cards' },
          { key: 'benchmarks', title: 'AI Inference Speed & Accuracy', category: 'Metrics', description: 'Tokens per second, classification accuracy %, pipeline speedup.', type: 'stats' },
          { key: 'cta', title: 'Deploy AI Architecture CTA', category: 'Call to Action', description: 'Integrate intelligent models into your tech stack.', type: 'cta' }
        ]
      },
      {
        key: 'devops',
        title: 'Cloud Infrastructure & DevOps',
        category: 'Cloud & CI/CD',
        description: 'AWS, Google Cloud, Docker, Kubernetes, Terraform, and automated pipelines.',
        icon: Cloud,
        slug: 'devops',
        publicRoute: '/technologies',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Cloud & DevOps headline, automated CI/CD badge, and infrastructure.', type: 'hero' },
          { key: 'frameworksGrid', title: 'Cloud & DevOps Tooling', category: 'Cards Grid', description: 'AWS, Google Cloud, Kubernetes, Docker, Terraform, GitHub Actions.', type: 'cards' },
          { key: 'benchmarks', title: 'Deployment Velocity & Uptime', category: 'Metrics', description: 'Daily deployments, automated rollback speed, 99.99% availability.', type: 'stats' },
          { key: 'cta', title: 'Automate Cloud DevOps CTA', category: 'Call to Action', description: 'Scale high-availability cloud infrastructure.', type: 'cta' }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. OUR WORK MAIN PAGE GROUP
  // =========================================================================
  ourWork: {
    id: 'ourWork',
    title: 'Our Work',
    description: 'Manage portfolio showcase, case studies, success matrix, brand logos, and client reviews.',
    icon: Briefcase,
    basePath: '/admin/our-work',
    subPages: [
      {
        key: 'portfolio-showcase',
        title: 'Portfolio Showcase',
        category: 'Project Gallery',
        description: 'Filterable case studies showcase, live project links, screenshots, and tech tags.',
        icon: FolderKanban,
        slug: 'portfolio-showcase',
        publicRoute: '/portfolio',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Portfolio headline, project gallery badge, and filter categories.', type: 'hero' },
          { key: 'projectsGrid', title: 'Featured Project Showcase Cards', category: 'Cards Grid', description: 'Case study title, category, screenshot image, live URL, and results.', type: 'cards' },
          { key: 'stats', title: 'Global Delivery Track Record', category: 'Metrics', description: 'Projects delivered, enterprise apps in production, global awards.', type: 'stats' },
          { key: 'cta', title: 'Start Your Project CTA', category: 'Call to Action', description: 'Turn your vision into high-impact digital products.', type: 'cta' }
        ]
      },
      {
        key: 'case-studies-metrics',
        title: 'Case Studies & Metrics',
        category: 'Impact Stories',
        description: 'Deep-dive client transformation case studies, ROI outcomes, and technical breakdowns.',
        icon: TrendingUp,
        slug: 'case-studies-metrics',
        publicRoute: '/portfolio',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Case studies headline, measurable impact badge, and overview.', type: 'hero' },
          { key: 'transformationCases', title: 'Digital Transformation Stories', category: 'Cards Grid', description: 'Problem statement, technical solution, architectural diagram, and ROI.', type: 'cards' },
          { key: 'impactStats', title: 'Verified Impact Numbers', category: 'Metrics', description: 'Revenue growth generated, operational cost savings %, user scale.', type: 'stats' },
          { key: 'cta', title: 'Request Case Study Presentation CTA', category: 'Call to Action', description: 'Get a tailored enterprise architecture deck.', type: 'cta' }
        ]
      },
      {
        key: 'success-matrix',
        title: 'Success Matrix & ROI',
        category: 'Performance Benchmarks',
        description: 'Key performance indicators, speed metrics, delivery acceleration, and business growth.',
        icon: Award,
        slug: 'success-matrix',
        publicRoute: '/portfolio',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Success matrix headline, ROI guarantee badge, and metrics intro.', type: 'hero' },
          { key: 'matrixGrid', title: 'Performance & Velocity Matrix', category: 'Cards Grid', description: 'Time-to-market reduction, sprint velocity increase, zero defect SLA.', type: 'cards' },
          { key: 'stats', title: 'Enterprise Performance Benchmarks', category: 'Metrics', description: 'Sprint velocity speedup %, defect density, customer retention %.', type: 'stats' },
          { key: 'cta', title: 'Accelerate Your Delivery CTA', category: 'Call to Action', description: 'Experience high-velocity engineering pods.', type: 'cta' }
        ]
      },
      {
        key: 'brand-logos',
        title: 'Brand Logos & Clients',
        category: 'Client Trust Grid',
        description: 'Global enterprise client logos, trust marquee, partner brands, and industries.',
        icon: Globe,
        slug: 'brand-logos',
        publicRoute: '/portfolio',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Client trust headline, Fortune 500 partner badge, and intro.', type: 'hero' },
          { key: 'logosGrid', title: 'Client Brand Logos Grid', category: 'Cards Grid', description: 'Manage brand logos, company names, industry tags, and case study links.', type: 'cards' },
          { key: 'stats', title: 'Client Trust Metrics', category: 'Metrics', description: 'Enterprise partners, multi-year client relationships, countries served.', type: 'stats' },
          { key: 'cta', title: 'Join Our Client Roster CTA', category: 'Call to Action', description: 'Partner with top engineering talent.', type: 'cta' }
        ]
      },
      {
        key: 'featured-in',
        title: 'Featured In & Media',
        category: 'Press & Media',
        description: 'TechCrunch, Forbes, Bloomberg, and tech publication features and press releases.',
        icon: Newspaper,
        slug: 'featured-in',
        publicRoute: '/portfolio',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Media coverage headline, press spotlight badge, and intro.', type: 'hero' },
          { key: 'mediaGrid', title: 'Press Articles & Media Outlets', category: 'Cards Grid', description: 'Publication name, article title, cover logo, quote snippet, and link.', type: 'cards' },
          { key: 'cta', title: 'Media Inquiries CTA', category: 'Call to Action', description: 'Contact our corporate communications team.', type: 'cta' }
        ]
      },
      {
        key: 'client-reviews',
        title: 'Client Reviews & Ratings',
        category: 'Verified Testimonials',
        description: 'GoodFirms, Clutch, Trustpilot, and Google verified client reviews and ratings.',
        icon: Star,
        slug: 'client-reviews',
        publicRoute: '/company/client-testimonials',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Verified reviews headline, 5.0 star badge, and overview.', type: 'hero' },
          { key: 'reviewsGrid', title: 'Verified Client Reviews Cards', category: 'Cards Grid', description: 'Client quote, reviewer name, company, star rating, and review date.', type: 'cards' },
          { key: 'ratingsBadges', title: 'Review Platform Badges', category: 'Cards Grid', description: 'Clutch 4.9/5.0, GoodFirms 5.0/5.0, Google 5.0 badges.', type: 'cards' },
          { key: 'cta', title: 'Read Full Reviews CTA', category: 'Call to Action', description: 'Explore all verified client ratings on Clutch.', type: 'cta' }
        ]
      },
      {
        key: 'video-stories',
        title: 'Video Testimonial Stories',
        category: 'Video Case Studies',
        description: 'Full video interviews with CTOs and founders discussing project success.',
        icon: Play,
        slug: 'video-stories',
        publicRoute: '/company/video-testimonial',
        sections: [
          { key: 'hero', title: 'Hero Banner', category: 'Hero', description: 'Video stories headline, founder interview badge, and intro.', type: 'hero' },
          { key: 'videoGrid', title: 'Video Case Study Grid', category: 'Cards Grid', description: 'Video embed URL, client photo, project title, impact summary, and quote.', type: 'cards' },
          { key: 'cta', title: 'Watch More Case Studies CTA', category: 'Call to Action', description: 'Schedule a call to discuss similar project outcomes.', type: 'cta' }
        ]
      }
    ]
  }
};

export default PAGE_HIERARCHY_REGISTRY;
