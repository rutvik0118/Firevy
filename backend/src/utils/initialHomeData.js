/**
 * Complete Initial Default Data for all 22 Home Page Sections (Backend Fallback & Seeder)
 * 100% matches frontend production structure and content.
 */

export const initialSectionsOrder = [
  'hero',
  'trustMarquee',
  'aboutKeyMetrics',
  'brandLogoGrid',
  'servicesSection',
  'conversionCalloutBanner',
  'portfolioShowcase',
  'trustRecognitionBanner',
  'workProcessGrid',
  'engagementModelsSection',
  'techShowcaseTabbed',
  'premiumServicesGrid',
  'successMatrixGrid',
  'innovativeSolutionVideo',
  'recentPodcastsSection',
  'downloadBrochureSection',
  'digitalTransformationCaseStudies',
  'videoTestimonialsStory',
  'recentBlogsSection',
  'clientReviewsDarkSection',
  'featuredInLogosGrid',
  'workTogetherNewsletterSection'
];

export const initialHomePageData = {
  sectionsOrder: initialSectionsOrder,
  sections: {
    // 1. Hero Banner
    hero: {
      isVisible: true,
      order: 1,
      slides: [
        {
          _id: 'hero_slide_1',
          tag: 'AI Innovation',
          titleLine1: 'Your Vision,',
          titleLine2: 'Our Technology',
          subTag: '(Limitless Possibilities)',
          bullets: [
            'Recognized as #1 Web Development Company in India and USA.',
            'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
            "We've been Redefining Excellence for over Two Decades."
          ],
          rightBoxTitle: 'Redefined Learning Experiences',
          rightBoxSub: 'With Intelligent AI Innovation',
          primaryCtaText: "Let's Talk",
          primaryCtaLink: '/contact',
          secondaryCtaText: 'Get in Touch',
          secondaryCtaLink: '/contact',
          backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
          isActive: true
        },
        {
          _id: 'hero_slide_2',
          tag: 'Enterprise Engineering',
          titleLine1: 'Scalable Systems,',
          titleLine2: 'Global Performance',
          subTag: '(Engineered for Growth)',
          bullets: [
            'Top 1% Senior React, Node & Cloud Architects.',
            'ISO 9001:2015 & Enterprise SOC2 Ready Infrastructure.',
            'Sub-50ms API Latency with 99.99% Guaranteed Uptime.'
          ],
          rightBoxTitle: 'Cloud & AI Microservices',
          rightBoxSub: 'Driven by Next-Gen Innovation',
          primaryCtaText: "Let's Talk",
          primaryCtaLink: '/contact',
          secondaryCtaText: 'Get in Touch',
          secondaryCtaLink: '/contact',
          backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
          isActive: true
        },
        {
          _id: 'hero_slide_3',
          tag: 'Custom App Solutions',
          titleLine1: 'Transforming Ideas,',
          titleLine2: 'Empowering Brands',
          subTag: '(Native & Cross-Platform)',
          bullets: [
            '500+ High-Impact Digital Products Delivered Worldwide.',
            'Seamless Multi-Device Web & Mobile UX Engineering.',
            'Agile 2-Week Sprint Delivery with Full Transparency.'
          ],
          rightBoxTitle: 'Immersive Product Design',
          rightBoxSub: 'Crafted for Modern Enterprise',
          primaryCtaText: "Let's Talk",
          primaryCtaLink: '/contact',
          secondaryCtaText: 'Get in Touch',
          secondaryCtaLink: '/contact',
          backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
          isActive: true
        }
      ]
    },

    // 2. Auto-Scrolling Brand Logos Marquee
    trustMarquee: {
      isVisible: true,
      order: 2,
      logos: [
        { name: 'TOYOTA', color: 'text-red-600', symbol: '🚗', isActive: true },
        { name: 'Almarai', color: 'text-blue-700', symbol: '🌾', isActive: true },
        { name: 'ORIENT CEMENT', color: 'text-slate-800', symbol: '🏗️', isActive: true },
        { name: 'AMERICAN EXPRESS', color: 'text-blue-600', symbol: '💳', isActive: true },
        { name: 'Alembic', color: 'text-cyan-700', symbol: '🧪', isActive: true },
        { name: 'HONDA', color: 'text-red-600', symbol: '🏎️', isActive: true },
        { name: 'LafargeHolcim', color: 'text-slate-700', symbol: '🏢', isActive: true },
        { name: 'Cummins', color: 'text-[#006B8F]', symbol: '⚙️', isActive: true },
        { name: "L'ORÉAL", color: 'text-slate-900', symbol: '✨', isActive: true },
        { name: 'TDSG', color: 'text-red-700', symbol: '🛡️', isActive: true }
      ]
    },

    // 3. About Us & Key Metrics
    aboutKeyMetrics: {
      isVisible: true,
      order: 3,
      title: 'Glance through our creations and presence',
      description: "We are a team of qualified Salesforce & Enterprise Development Professionals adept at expanding your current system's capabilities via the development and integration of Salesforce CRM and cloud architectures.",
      backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      cards: [
        { type: 'stat', metric: '23+', label: 'Years Experience', isActive: true },
        { type: 'stat', metric: '2800+', label: 'Satisfied Clients', isActive: true },
        { type: 'stat', metric: '1500+', label: 'Projects Completed', isActive: true },
        { type: 'stat', metric: '200+', label: 'IT Professional', isActive: true },
        { type: 'stat', metric: '95%', label: 'Client Retention', isActive: true },
        { type: 'stat', metric: '18+', label: 'Industry Served', isActive: true },
        { type: 'stat', metric: '30+', label: 'Countries Active Customers', isActive: true },
        { type: 'stat', metric: '6+', label: 'Global Offices', isActive: true },
        { type: 'feature', label: 'Work at your time zone', icon: 'globe', isActive: true },
        { type: 'feature', label: 'Easy communication', icon: 'chat', isActive: true },
        { type: 'feature', label: 'Hire in 48 Hours', icon: 'badge', isActive: true },
        { type: 'feature', label: 'In Business since 2002', icon: 'handshake', isActive: true }
      ]
    },

    // 4. World's Leading Brands (Logo Wall Grid)
    brandLogoGrid: {
      isVisible: true,
      order: 4,
      title: "Trusted By The World’s Leading Brands",
      description: "We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.",
      brands: [
        { name: 'AMERICAN EXPRESS', color: 'text-[#006B8F]', font: 'font-black tracking-tighter text-sm sm:text-base', symbol: '💳', isActive: true },
        { name: 'LARSEN & TOUBRO', color: 'text-blue-900', font: 'font-extrabold italic text-xs sm:text-sm', symbol: '⚙️', isActive: true },
        { name: 'LafargeHolcim', color: 'text-slate-800', font: 'font-black text-xs sm:text-sm', symbol: '🏢', isActive: true },
        { name: 'CLP INDIA', color: 'text-amber-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '⚡', isActive: true },
        { name: 'adani', color: 'text-blue-600', font: 'font-extrabold text-base sm:text-lg', symbol: '🌱', isActive: true },
        { name: 'GFL', color: 'text-cyan-700', font: 'font-black text-base sm:text-lg', symbol: '🧪', isActive: true },
        { name: 'TOYOTA', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '🚗', isActive: true },
        { name: 'ACC LIMITED', color: 'text-red-700', font: 'font-black italic text-xs sm:text-sm', symbol: '🏗️', isActive: true },
        { name: 'Ambuja Cement', color: 'text-blue-900', font: 'font-black text-xs sm:text-sm', symbol: '🏛️', isActive: true },
        { name: 'MORRIS GARAGES', color: 'text-red-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '🚘', isActive: true },
        { name: 'JSW Energy', color: 'text-blue-800', font: 'font-black text-xs sm:text-sm', symbol: '⚡', isActive: true },
        { name: 'vedanta', color: 'text-emerald-700', font: 'font-extrabold text-xs sm:text-sm', symbol: '⛏️', isActive: true },
        { name: 'HONDA', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '🏎️', isActive: true },
        { name: "Dr.Reddy's", color: 'text-purple-700', font: 'font-black text-xs sm:text-sm', symbol: '💊', isActive: true },
        { name: 'Chevron Oronite', color: 'text-blue-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '🛢️', isActive: true },
        { name: 'ORIENT CEMENT', color: 'text-slate-800', font: 'font-black text-xs sm:text-sm', symbol: '🏗️', isActive: true },
        { name: 'Almarai', color: 'text-blue-800', font: 'font-extrabold text-xs sm:text-sm', symbol: '🌾', isActive: true },
        { name: 'Cummins', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '⚙️', isActive: true },
        { name: 'TDSG', color: 'text-red-700 border-2 border-red-600 px-2 py-0.5 rounded', font: 'font-black text-xs sm:text-sm', symbol: '🛡️', isActive: true },
        { name: "L'ORÉAL", color: 'text-slate-900', font: 'font-black text-sm sm:text-base tracking-widest', symbol: '✨', isActive: true },
        { name: 'ASTRAL PIPES', color: 'text-amber-700', font: 'font-black text-xs sm:text-sm', symbol: '🔧', isActive: true },
        { name: 'TITAN COMPANY', color: 'text-teal-700', font: 'font-extrabold text-xs sm:text-sm', symbol: '⌚', isActive: true },
        { name: 'BANK NOTE PAPER MILL', color: 'text-emerald-800', font: 'font-black text-[10px] sm:text-xs', symbol: '💵', isActive: true },
        { name: 'Alembic', color: 'text-blue-700', font: 'font-black text-xs sm:text-sm', symbol: '🧪', isActive: true }
      ]
    },

    // 5. Our Services Grid
    servicesSection: {
      isVisible: true,
      order: 5,
      title: 'Our Services',
      description: "We offer comprehensive services to develop digital solutions & manage complete product lifecycle.\nWe’ve robust work history with diverse business services.",
      services: [
        {
          titleLine1: 'Web',
          titleLine2: 'Development',
          slug: 'web-development',
          description: 'We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.',
          icon: 'web',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'Mobile App',
          titleLine2: 'Development',
          slug: 'mobile-app-development',
          description: 'End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.',
          icon: 'mobile',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'UI/UX',
          titleLine2: 'Design',
          slug: 'ui-ux-design',
          description: 'Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.',
          icon: 'design',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'Product',
          titleLine2: 'Development',
          slug: 'product-development',
          description: 'Full-spectrum product development ideation to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.',
          icon: 'product',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'Software',
          titleLine2: 'Testing',
          slug: 'software-testing-qa',
          description: 'End-to-end software testing services including automated QA, security audits, performance testing, and bug tracking to ensure zero-defect releases.',
          icon: 'testing',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'Hire Dedicated',
          titleLine2: 'Developers',
          slug: 'dedicated-developers',
          description: 'Hire dedicated top 1% senior full-stack developers and software engineers on-demand to scale your engineering team dynamically.',
          icon: 'users',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'API Integration',
          titleLine2: '& Development',
          slug: 'api-integration-development',
          description: 'Custom microservice API development, GraphQL implementation, and seamless third-party enterprise integrations.',
          icon: 'api',
          ctaText: 'Explore Service',
          isActive: true
        },
        {
          titleLine1: 'Cloud',
          titleLine2: 'Development',
          slug: 'cloud-solutions',
          description: 'Enterprise AWS, Azure, and GCP cloud architecture, Kubernetes containerization, and automated CI/CD DevOps pipelines.',
          icon: 'cloud',
          ctaText: 'Explore Service',
          isActive: true
        }
      ]
    },

    // 6. Conversion Callout Banner
    conversionCalloutBanner: {
      isVisible: true,
      order: 6,
      title: 'Let’s Start Something Together',
      description: 'Book a meeting with our specialists today to learn more about how Firevy can help you unlock technology visions and drive your product strategy.',
      leftImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      rightImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      buttonText: 'Get In Touch',
      buttonLink: '/contact'
    },

    // 7. Our Recent Projects (Portfolio Showcase)
    portfolioShowcase: {
      isVisible: true,
      order: 7,
      title: 'Our Recent Projects',
      description: 'Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard',
      viewAllText: 'View All',
      viewAllLink: '/portfolio',
      projects: [
        {
          id: 1,
          titleLine1: 'AI Chatbot App',
          titleLine2: 'Development',
          slug: 'ai-recruitment-platform',
          cardBg: 'bg-[#351475]',
          image: '',
          isActive: true
        },
        {
          id: 2,
          titleLine1: 'AI Traffic Management',
          titleLine2: 'System',
          slug: 'healthcare-management-system',
          cardBg: 'bg-[#EBF3FB]',
          image: '',
          isActive: true
        },
        {
          id: 3,
          titleLine1: 'Real Estate App',
          titleLine2: 'Development',
          slug: 'real-estate-platform',
          cardBg: 'bg-[#E5E9FC]',
          image: '',
          isActive: true
        },
        {
          id: 4,
          titleLine1: 'AI Travel App',
          titleLine2: 'Development',
          slug: 'ai-travel-assistant',
          cardBg: 'bg-[#1C3A39]',
          image: '',
          isActive: true
        },
        {
          id: 5,
          titleLine1: 'On Demand AI',
          titleLine2: 'Recruitment',
          slug: 'ecommerce-platform',
          cardBg: 'bg-[#EEF1FE]',
          image: '',
          isActive: true
        },
        {
          id: 6,
          titleLine1: 'Car Rental App',
          titleLine2: 'Development',
          slug: 'logistics-management-system',
          cardBg: 'bg-[#E3F7F6]',
          image: '',
          isActive: true
        }
      ]
    },

    // 8. Trust & Recognition Banner
    trustRecognitionBanner: {
      isVisible: true,
      order: 8,
      title: 'Proud To Have\nPicked These Up\nAlong The Way',
      badges: [
        { alt: 'Clutch - We Deliver On', type: 'clutch', link: 'https://clutch.co', isActive: true },
        { alt: 'Upwork Top Rated', type: 'upwork', link: 'https://upwork.com', isActive: true },
        { alt: 'Freelancer Preferred Freelancer', type: 'freelancer', link: 'https://freelancer.com', isActive: true },
        { alt: 'Top Profile Badge', type: 'top-rated', link: '', isActive: true }
      ]
    },

    // 9. Process We Follow
    workProcessGrid: {
      isVisible: true,
      order: 9,
      title: 'Process We Follow',
      steps: [
        {
          stepNumber: '01',
          titleLine1: 'Requirement',
          titleLine2: 'Gathering',
          description: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
          bg: 'bg-[#EEECFE] border-[#DDD8FE]',
          icon: 'bulb',
          isActive: true
        },
        {
          stepNumber: '02',
          titleLine1: 'Designs, Wireframes, &',
          titleLine2: 'Mockups',
          description: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
          bg: 'bg-[#E3F6E7] border-[#C8EED0]',
          icon: 'design',
          isActive: true
        },
        {
          stepNumber: '03',
          titleLine1: 'Prototype Demo',
          titleLine2: '',
          description: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
          bg: 'bg-[#FDF0E8] border-[#FADCD0]',
          icon: 'prototype',
          isActive: true
        },
        {
          stepNumber: '04',
          titleLine1: 'Changes And',
          titleLine2: 'Confirmation',
          description: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
          bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
          icon: 'sync',
          isActive: true
        },
        {
          stepNumber: '05',
          titleLine1: 'Development',
          titleLine2: '',
          description: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as...',
          bg: 'bg-[#FBE4EC] border-[#F8BBD0]',
          icon: 'code',
          isActive: true
        },
        {
          stepNumber: '06',
          titleLine1: 'Deployment',
          titleLine2: '',
          description: 'We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in...',
          bg: 'bg-[#E1F7F9] border-[#BBEFF3]',
          icon: 'rocket',
          isActive: true
        },
        {
          stepNumber: '07',
          titleLine1: 'Support And',
          titleLine2: 'Maintenance',
          description: 'We provide free service and support as per decided terms in our agreement. We also provide packages for maintenance...',
          bg: 'bg-[#F2E4F9] border-[#E6CDFA]',
          icon: 'support',
          isActive: true
        },
        {
          stepNumber: '08',
          titleLine1: 'SEO',
          titleLine2: '',
          description: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing keyword strategy...',
          bg: 'bg-[#EFF6CD] border-[#E2EEA5]',
          icon: 'seo',
          isActive: true
        }
      ]
    },

    // 10. Engagement Models Section
    engagementModelsSection: {
      isVisible: true,
      order: 10,
      title: 'Our Engagement Models',
      description: 'At firevy.co, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.',
      buttonText: 'Get In Touch',
      buttonLink: '/contact',
      models: [
        {
          title: 'Fixed Price',
          description: 'This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.',
          icon: 'tag',
          isActive: true
        },
        {
          title: 'Dedicated Hiring',
          description: 'For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.',
          icon: 'users',
          isActive: true
        },
        {
          title: 'Time Material',
          description: 'For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for When clients need short-term consulting or want to build a proof of concepts.',
          icon: 'clock',
          isActive: true
        },
        {
          title: 'Buckets Approach',
          description: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
          icon: 'layers',
          isActive: true
        }
      ]
    },

    // 11. Technologies We Work With (Tabbed Showcase)
    techShowcaseTabbed: {
      isVisible: true,
      order: 11,
      title: 'Technologies We Work With',
      description: 'We work on wide range of tools and technologies to cater client business requirement for existing project or new application.',
      categories: [
        {
          tabName: 'Cloud & Devops',
          title: 'Cloud & Devops',
          description: 'Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).',
          logos: [
            { name: 'AWS', icon: 'aws', isActive: true },
            { name: 'Google Cloud', icon: 'google-cloud', isActive: true },
            { name: 'Docker', icon: 'docker', isActive: true },
            { name: 'Kubernets', icon: 'kubernetes', isActive: true },
            { name: 'Jenkins', icon: 'jenkins', isActive: true },
            { name: 'Azure', icon: 'azure', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Frontend',
          title: 'Frontend',
          description: 'Our frontend developers craft intuitive, highly responsive, and user-centric web applications using modern Javascript frameworks and responsive CSS engines designed for maximum speed and conversion.',
          logos: [
            { name: 'React.js', icon: 'react', isActive: true },
            { name: 'Next.js', icon: 'nextjs', isActive: true },
            { name: 'TypeScript', icon: 'typescript', isActive: true },
            { name: 'Vue.js', icon: 'vue', isActive: true },
            { name: 'Tailwind', icon: 'tailwind', isActive: true },
            { name: 'HTML5', icon: 'html5', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Backend',
          title: 'Backend',
          description: 'Robust, scalable, and secure backend architectures designed for high throughput, seamless API integration, database management, and sub-millisecond execution times.',
          logos: [
            { name: 'Node.js', icon: 'nodejs', isActive: true },
            { name: 'Python', icon: 'python', isActive: true },
            { name: 'Java', icon: 'java', isActive: true },
            { name: 'Go', icon: 'go', isActive: true },
            { name: 'PHP', icon: 'php', isActive: true },
            { name: 'Laravel', icon: 'laravel', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Mobile',
          title: 'Mobile',
          description: 'Cross-platform and native mobile applications tailored for iOS and Android devices with smooth 60fps UI animations, offline data sync, and hardware integration.',
          logos: [
            { name: 'Flutter', icon: 'flutter', isActive: true },
            { name: 'React Native', icon: 'react-native', isActive: true },
            { name: 'Swift', icon: 'swift', isActive: true },
            { name: 'Kotlin', icon: 'kotlin', isActive: true },
            { name: 'iOS', icon: 'ios', isActive: true },
            { name: 'Android', icon: 'android', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Microsoft',
          title: 'Microsoft',
          description: 'Enterprise Microsoft solutions leveraging .NET Core microservices, Azure cloud hosting infrastructure, C# ecosystems, and business intelligence dashboards.',
          logos: [
            { name: '.NET Core', icon: 'dotnet', isActive: true },
            { name: 'C#', icon: 'csharp', isActive: true },
            { name: 'Azure', icon: 'azure', isActive: true },
            { name: 'SQL Server', icon: 'sql-server', isActive: true },
            { name: 'Power BI', icon: 'power-bi', isActive: true },
            { name: 'SharePoint', icon: 'sharepoint', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Database',
          title: 'Database',
          description: 'High-performance relational and NoSQL database management systems engineered for heavy read/write throughput, automatic scaling, indexing, and data encryption.',
          logos: [
            { name: 'PostgreSQL', icon: 'postgresql', isActive: true },
            { name: 'MongoDB', icon: 'mongodb', isActive: true },
            { name: 'MySQL', icon: 'mysql', isActive: true },
            { name: 'Redis', icon: 'redis', isActive: true },
            { name: 'Firebase', icon: 'firebase', isActive: true },
            { name: 'Cassandra', icon: 'cassandra', isActive: true }
          ],
          isActive: true
        },
        {
          tabName: 'Testing',
          title: 'Testing',
          description: 'Automated quality assurance, end-to-end regression testing suites, load stress testing, and continuous security vulnerability audits.',
          logos: [
            { name: 'Selenium', icon: 'selenium', isActive: true },
            { name: 'Cypress', icon: 'cypress', isActive: true },
            { name: 'Jest', icon: 'jest', isActive: true },
            { name: 'Postman', icon: 'postman', isActive: true },
            { name: 'JMeter', icon: 'jmeter', isActive: true },
            { name: 'Appium', icon: 'appium', isActive: true }
          ],
          isActive: true
        }
      ]
    },

    // 12. Our Premium Services (Pill Grid)
    premiumServicesGrid: {
      isVisible: true,
      order: 12,
      title: 'Our Premium Services',
      description: 'As a certified IT company, firevy.co helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!',
      services: [
        { name: 'Mobile App Development', icon: 'mobile', link: '/services/mobile-app-development', isActive: true },
        { name: 'Software Development', icon: 'software', link: '/services/software-development', isActive: true },
        { name: 'Web Development', icon: 'web', link: '/services/web-development', isActive: true },
        { name: '.NET Development', icon: 'dotnet', link: '/services/software-development', isActive: true },
        { name: 'Flutter App Development', icon: 'flutter', link: '/services/mobile-app-development', isActive: true },
        { name: 'PHP Development', icon: 'php', link: '/services/web-development', isActive: true },
        { name: 'Hire Dedicated Developers', icon: 'users', link: '/services/dedicated-developers', isActive: true },
        { name: 'Mern Stack Development', icon: 'mern', link: '/services/web-development', isActive: true },
        { name: 'Full Stack Development', icon: 'fullstack', link: '/services/web-development', isActive: true },
        { name: 'Laravel Development', icon: 'laravel', link: '/services/web-development', isActive: true }
      ]
    },

    // 13. Success Matrix Section
    successMatrixGrid: {
      isVisible: true,
      order: 13,
      title: 'Success Matrix',
      description: 'We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.',
      items: [
        { title: 'SEO and Digital Marketing', icon: 'seo', isActive: true },
        { title: '4 months + Free Post Launch Support', icon: 'support', isActive: true },
        { title: 'Non-Disclosure', icon: 'lock', isActive: true },
        { title: '100% value for the money', icon: 'money', isActive: true },
        { title: 'Professional coding and version controls', icon: 'git', isActive: true },
        { title: 'Flexible payment plans', icon: 'payment', isActive: true },
        { title: 'Real-time project tracking tools', icon: 'chart', isActive: true },
        { title: 'Custom Tailored support | AMC Plans', icon: 'amc', isActive: true },
        { title: 'Quality Asssurance and Unit Test Cases', icon: 'qa', isActive: true },
        { title: 'Penalty enforce-ment in case of Delivery Delay', icon: 'shield', isActive: true },
        { title: 'In-dept analysis of revenuo business Models', icon: 'analytics', isActive: true },
        { title: 'Mind Maps and video demos', icon: 'video', isActive: true }
      ]
    },

    // 14. Innovative Solution Video Carousel
    innovativeSolutionVideo: {
      isVisible: true,
      order: 14,
      title: 'Unveiling Our Innovative Solution',
      description: 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.',
      buttonText: 'View Insightful Videos',
      buttonLink: '/portfolio',
      videos: [
        {
          title: 'National Water Supply Corporation :...',
          image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'NutriPlan: Your Ultimate Meal Planning...',
          image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'Terraform Timesheet App with Microsoft...',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'AI-Powered Language Learning App...',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'Challenges of AI in Recruitment...',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'Leading Trading App Development...',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'Top React JS Development Company I...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        },
        {
          title: 'Top AI Avatar Generator App...',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
          videoUrl: 'https://www.youtube.com',
          isActive: true
        }
      ]
    },

    // 15. Our Recent Podcasts
    recentPodcastsSection: {
      isVisible: true,
      order: 15,
      title: 'Our Recent Podcasts',
      description: "Listen to our series of podcasts that expose you to a broad array of concepts. Whether you're looking for the latest trends or want to hear customer experience, our podcasts will be a treat for your ears.",
      podcasts: [
        {
          title: 'Mobile App Testing and Quality Assurance: Ensuring a Seamless Use...',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
          description: "In today's fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to...",
          audioUrl: '',
          exploreLink: '/about',
          isActive: true
        },
        {
          title: 'Why Does Your Business Needs Software Applications?',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
          description: "In today's fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integratin...",
          audioUrl: '',
          exploreLink: '/about',
          isActive: true
        },
        {
          title: 'A Chat with a Client: Why They Chose firevy.co',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
          description: 'There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across...',
          audioUrl: '',
          exploreLink: '/about',
          isActive: true
        }
      ]
    },

    // 16. Download Our Brochure Form Section
    downloadBrochureSection: {
      isVisible: true,
      order: 16,
      title: 'Download Our Brochure To Take A Glimpse Of Our Offerings',
      buttonText: 'Download',
      brochureFileUrl: '/Firevy-Enterprise-Capabilities-Brochure.pdf',
      successMessage: 'Thank you! Your brochure download will start shortly.'
    },

    // 17. Digital Transformation & Case Studies
    digitalTransformationCaseStudies: {
      isVisible: true,
      order: 17,
      title: 'Digital Transformation Through Innovation and Collective Knowledge',
      description: 'At firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.',
      caseStudies: [
        {
          id: 0,
          company: 'Bee Car Care',
          bgColor: '#FFFBE8',
          logoType: 'beecar',
          description: 'If you provide car washing services and need to reach a wide range of customers, the car wash app development is your best bet. firevy.co has built a car wash application that allows people to book car wash services in few clicks',
          points: [
            '96% customer retention rate',
            '92% increase in service bookings',
            'Over 1,10,000 satisfied users',
            'Operating in 90+ locations',
            'User-friendly & Efficient interface for easy booking'
          ],
          mockup: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
          slug: 'bee-car-care',
          isActive: true
        },
        {
          id: 1,
          company: 'Morris Garages',
          bgColor: '#FDE8E8',
          logoType: 'mg',
          description: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
          points: [
            'Real-time health data analytics',
            'HIPAA-compliant data security',
            '24/7 access to health resources and support',
            'Personalized health recommendations',
            '98% improvement in employee health monitoring'
          ],
          mockup: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
          slug: 'morris-garages',
          isActive: true
        },
        {
          id: 2,
          company: 'Adani EmCare',
          bgColor: '#EAF4FD',
          logoType: 'adani',
          description: "Adani EmCare is a Web + Mobile App used by Adani Group's medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide the preventive healthcare to the employees.",
          points: [
            '98% Employee satisfaction ratio',
            '91% reduction in appointment scheduling time',
            '24/7 real-time health monitoring',
            'Serving over 60,000 healthcare professionals',
            'Generating over USD 30 billion in revenue'
          ],
          mockup: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=700&q=80',
          slug: 'adani-emcare',
          isActive: true
        },
        {
          id: 3,
          company: "L'OREAL",
          bgColor: '#F8F8F8',
          logoType: 'loreal',
          description: 'This safety improvement application collects the observations from the organizational Staff and non-staff, and the respective department head will take care of the closure observation, and some observation categories will be verified by the top management.',
          points: [
            '97% reduction in safety incidents',
            'Scalable solution for large enterprises',
            'Recognized for excellence in safety innovation',
            'Automated safety reminders and alerts',
            'Real-time hazard identification and reporting'
          ],
          mockup: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=700&q=80',
          slug: 'loreal',
          isActive: true
        }
      ]
    },

    // 18. Our Story, Their Words (Video Testimonials)
    videoTestimonialsStory: {
      isVisible: true,
      order: 18,
      title: 'What Our Clients Have To Say',
      description: "From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.",
      testimonials: [
        {
          id: 1,
          clientName: 'Andrew',
          company: 'Mobile Digital Diary',
          title: "Discover why Andrew trusted firevy.co with his mobile digital diary project : A Client's Honest Experience.",
          img: '/images/awards/hdimages/client_shay.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 2,
          clientName: 'Bruno',
          company: 'Healthcare Innovation Brazil',
          title: 'From Vision to Healthcare Innovation | Client Success With firevy.co - Top IT Company in Brazil',
          img: '/images/awards/hdimages/bruno.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 3,
          clientName: 'Enterprise Client',
          company: 'Mobile App Development',
          title: "From Idea to Reality | Client's Success Story with firevy.co - Best Mobile App Development Company",
          img: '/images/awards/hdimages/client_seven.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 4,
          clientName: 'Wellness Founder',
          company: 'Digital Wellness App',
          title: "From Vision to Wellness | Client's Success Story with firevy.co - Top Mobile App Development Company",
          img: '/images/awards/hdimages/client_eight.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 5,
          clientName: 'Tim',
          company: 'Complex Web Application',
          title: 'Hear out Tim got to say about working with Team firevy.co on building a complex and unique web application.',
          img: '/images/awards/hdimages/clienttestimonial3.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 6,
          clientName: 'Business Expansion Client',
          company: 'Global Enterprise Services',
          title: 'Testimonial from client who has expanded their business using firevy.co Services',
          img: '/images/awards/hdimages/clienttestimonial2.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 7,
          clientName: 'Pravin',
          company: 'Software Solutions Partner',
          title: 'Hear what Pravin has got to say about working with firevy.co',
          img: '/images/awards/hdimages/clienttestimonial1.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 8,
          clientName: 'Canadian Enterprise Partner',
          company: 'Web & Mobile Solutions Canada',
          title: 'firevy.co Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada',
          img: '/images/awards/hdimages/img_client2.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 9,
          clientName: 'Christina',
          company: 'Zetteli',
          title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
          img: '/images/awards/hdimages/zetteli_client.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        },
        {
          id: 10,
          clientName: 'Education Client',
          company: 'Vision Education Platform',
          title: "From Vision to Education | Client's Success Story with firevy.co Solutions",
          img: '/images/awards/hdimages/vision_client.webp',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          isActive: true
        }
      ]
    },

    // 19. Our Recent Blogs Section
    recentBlogsSection: {
      isVisible: true,
      order: 19,
      title: 'Our Recent Blogs',
      description: 'Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.',
      blogs: [
        {
          id: 1,
          date: 'March 6, 2026',
          title: 'AI in Mobile App Development: Tools That Save Time and Money',
          description: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development,...',
          slug: 'ai-in-mobile-app-development',
          bannerImage: '',
          linkText: 'Get more details',
          link: '/about',
          isActive: true
        },
        {
          id: 2,
          date: 'March 25, 2026',
          title: 'AI in Software Development: Scale Operations Faster with...',
          description: 'Software development has always been solving problems efficiently, but the expectations today are higher than ever...',
          slug: 'ai-in-software-development',
          bannerImage: '',
          linkText: 'Get more details',
          link: '/about',
          isActive: true
        },
        {
          id: 3,
          date: 'March 18, 2026',
          title: 'Why Startups Choose firevy.co Over TCS, Infosys, and Wipro for...',
          description: 'Businesses evaluate software development partners, often comparing large global IT firms with agile,...',
          slug: 'why-startups-choose-firevy',
          bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
          linkText: 'Get more details',
          link: '/about',
          isActive: true
        }
      ]
    },

    // 20. What Our Clients Say (Dark Client Reviews Section)
    clientReviewsDarkSection: {
      isVisible: true,
      order: 20,
      title: 'What Our Clients Say',
      reviews: [
        {
          id: 1,
          title: "firevy.co's team communicated effectively...",
          comment: 'firevy.co successfully implemented all UX and design features on the app. The team has consistently delivered on milestones with remarkable technical agility.',
          author: 'Derrick Surratt',
          location: 'Arkansas',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          score: '5.0',
          stars: 5,
          ratings: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
          isActive: true
        },
        {
          id: 2,
          title: 'The team maintained excellent communication throughout...',
          comment: "firevy.co's updates improved a product's UX per the end customer's requests. The team is personable, reaches their deliverables ahead of schedule, and maintains excellent communication.",
          author: 'Hamidah Nalwoga',
          location: 'Massachusetts',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
          score: '5.0',
          stars: 5,
          ratings: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
          isActive: true
        },
        {
          id: 3,
          title: 'Intuitive, sleek, and high performing solution...',
          comment: "The client was highly pleased with firevy.co's development work. The team met expectations, and the interface design was intuitive, sleek, and high performing.",
          author: 'Christine Ine',
          location: 'Rockville, Maryland',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          score: '4.5',
          stars: 5,
          ratings: { quality: '4.0', schedule: '4.5', cost: '5.0', refer: '5.0' },
          isActive: true
        },
        {
          id: 4,
          title: 'Exceptional mobile architecture and seamless cross-platform delivery...',
          comment: 'Their engineers built an enterprise-grade mobile application that scaled seamlessly to over 350k active users in the first quarter post launch.',
          author: 'David Vance',
          location: 'Austin, Texas',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
          score: '5.0',
          stars: 5,
          ratings: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
          isActive: true
        }
      ]
    },

    // 21. We Have Been Featured In (Logo Grid)
    featuredInLogosGrid: {
      isVisible: true,
      order: 21,
      title: 'We Have Been Featured In',
      logos: [
        { id: 'microsoft', name: 'Microsoft', isActive: true },
        { id: 'inc', name: 'Inc.', isActive: true },
        { id: 'google-play', name: 'Google Play', isActive: true },
        { id: 'app-store', name: 'App Store', isActive: true },
        { id: 'forbes', name: 'Forbes', isActive: true },
        { id: 'bbb', name: 'BBB', isActive: true },
        { id: 'yourstory', name: 'YOURSTORY', isActive: true },
        { id: 'wikipedia', name: 'Wikipedia', isActive: true },
        { id: 'entrepreneur', name: 'Entrepreneur', isActive: true },
        { id: 'mashable', name: 'Mashable', isActive: true },
        { id: 'capterra', name: 'Capterra', isActive: true },
        { id: 'cnet', name: 'c|net', isActive: true },
        { id: 'nytimes', name: 'The New York Times', isActive: true },
        { id: 'techcrunch', name: 'TechCrunch', isActive: true },
        { id: 'clutch', name: 'Clutch', isActive: true },
        { id: 'pcmag', name: 'PCMag', isActive: true },
        { id: 'g2crowd', name: 'G2 CROWD', isActive: true },
        { id: 'telegraph', name: 'The Telegraph', isActive: true }
      ]
    },

    // 22. Let's Work Together & Newsletter Subscription
    workTogetherNewsletterSection: {
      isVisible: true,
      order: 22,
      ctaBanner: {
        title: "Let's Work Together On Your Next Digital Project",
        description: 'Book a meeting with our specialists today to learn more about how firevy.co can help you unlock technology visions and drive your product strategy.',
        buttonText: 'Request A Free Quote',
        buttonLink: '/contact',
        isVisible: true
      },
      newsletterBanner: {
        title: 'Subscribe us and Get the latest updates and news',
        successMessage: 'Thank you for subscribing to our tech updates!',
        buttonText: 'Subscribe',
        isVisible: true
      }
    }
  }
};

export const INITIAL_HOME_PAGE_DATA = initialHomePageData;
export default initialHomePageData;
