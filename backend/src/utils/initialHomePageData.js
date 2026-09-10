/**
 * Complete Initial Default Data for all 22 Home Page Sections
 * Exactly matches current production Main Website content, texts, logos, icons, and media references.
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
          backgroundImageUrl: '',
          bgType: 'video',
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
          backgroundImageUrl: '',
          bgType: 'video',
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
          backgroundImageUrl: '',
          bgType: 'video',
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
      title: 'About Us',
      description: 'Sapphire delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success',
      backgroundImage: '',
      cards: [
        { metric: '23+', label: 'Years of Experience', image: '/images/first.webp', isActive: true },
        { metric: '320+', label: '5-Star Clutch Reviews', image: '/images/homeinnovation/second.webp', isActive: true },
        { metric: '20+', label: 'Fortunes 500 Companies', image: '/images/third.webp', isActive: true },
        { metric: '200+', label: 'IT Professional', image: '/images/fourth.webp', isActive: true },
        { metric: '95%', label: 'Client Retention', image: '/images/fifth.webp', isActive: true },
        { metric: '18+', label: 'Industry Served', image: '/images/sixth.webp', isActive: true },
        { metric: '2800+', label: 'Satisfied Clients', image: '/images/awards/hdimages/client_seven.png', isActive: true },
        { metric: '1500+', label: 'Completed Projects', image: '/images/awards/hdimages/clienttestimonial3.png', isActive: true }
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
          title: 'Web Development',
          slug: 'web-development',
          description: 'We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.',
          iconKey: 'web',
          isActive: true
        },
        {
          title: 'Mobile App Development',
          slug: 'mobile-app-development',
          description: 'End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.',
          iconKey: 'mobile',
          isActive: true
        },
        {
          title: 'UI/UX Design',
          slug: 'ui-ux-design',
          description: 'Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.',
          iconKey: 'design',
          isActive: true
        },
        {
          title: 'Product Development',
          slug: 'product-development',
          description: 'Full-spectrum product development ideation to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.',
          iconKey: 'product',
          isActive: true
        },
        {
          title: 'Software Testing',
          slug: 'software-testing-qa',
          description: 'Quality Assurance (QA) and software testing services ensuring top-notch stability, automated validation, and zero-defect performance.',
          iconKey: 'testing',
          isActive: true
        },
        {
          title: 'Hire Dedicated Developers',
          slug: 'dedicated-developers',
          description: 'Hire a dedicated developer team to scale your tech capabilities with flexible engagement models and proven senior engineers.',
          iconKey: 'users',
          isActive: true
        },
        {
          title: 'API Integration & Development',
          slug: 'api-integration-development',
          description: 'Integrate third-party APIs and build robust custom microservices for seamless enterprise interoperability and data sync.',
          iconKey: 'api',
          isActive: true
        },
        {
          title: 'Cloud Development',
          slug: 'cloud-solutions',
          description: 'Cloud development and infrastructure management on AWS, Azure, and Google Cloud with high availability architectures.',
          iconKey: 'cloud',
          isActive: true
        }
      ]
    },

    // 6. Conversion Callout Banner
    conversionCalloutBanner: {
      isVisible: true,
      order: 6,
      title: "Let's Start Something Great Together",
      description: 'Book a meeting with our specialists today to learn more about how Firevy can help you unlock technology visions and drive your product strategy.',
      leftImage: '/images/together_left.e9ba331b.webp',
      rightImage: '/images/together_right.5ad10a97.webp',
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
          slug: 'ai-chatbot-app-development',
          cardBg: 'bg-[#351475]',
          isActive: true
        },
        {
          id: 2,
          titleLine1: 'AI Traffic Management',
          titleLine2: 'System',
          slug: 'ai-traffic-management-system',
          cardBg: 'bg-[#EBF3FB]',
          isActive: true
        },
        {
          id: 3,
          titleLine1: 'Real Estate App',
          titleLine2: 'Development',
          slug: 'real-estate-app-development',
          cardBg: 'bg-[#0D2B45]',
          isActive: true
        },
        {
          id: 4,
          titleLine1: 'Health & Fitness',
          titleLine2: 'App Development',
          slug: 'health-fitness-app-development',
          cardBg: 'bg-[#064E3B]',
          isActive: true
        },
        {
          id: 5,
          titleLine1: 'Multi-Store',
          titleLine2: 'E-Commerce App',
          slug: 'multi-store-ecommerce-application',
          cardBg: 'bg-[#701A75]',
          isActive: true
        },
        {
          id: 6,
          titleLine1: 'Fintech & Investment',
          titleLine2: 'Banking Platform',
          slug: 'fintech-investment-banking-platform',
          cardBg: 'bg-[#181D27]',
          isActive: true
        }
      ]
    },

    // 8. Trust & Recognition Banner
    trustRecognitionBanner: {
      isVisible: true,
      order: 8,
      title: 'Recognized as a Market Leader in Digital Transformation',
      badges: [
        { id: 1, title: 'Clutch - Clients Say We Deliver On Clutch', image: '/images/clutch.png', isActive: true },
        { id: 2, title: 'Upwork Top Rated', image: '/images/9_upwork.png', isActive: true },
        { id: 3, title: 'Freelancer Preferred', image: '/images/10_freelancer.png', isActive: true },
        { id: 4, title: 'GoodFirms Top Developer', image: '/images/goodfirms.png', isActive: true }
      ]
    },

    // 9. Process We Follow
    workProcessGrid: {
      isVisible: true,
      order: 9,
      title: 'Process We Follow',
      steps: [
        {
          step: '01',
          title: 'Discovery & Strategy',
          desc: 'Detailed requirements gathering, feasibility studies, stakeholder alignment, and project roadmap architecture.',
          bg: 'bg-[#EEECFE] border-[#DDD8FE]',
          isActive: true
        },
        {
          step: '02',
          title: 'UI/UX & Wireframing',
          desc: 'Interactive wireframes, user personas, responsive design systems, and rapid clickable prototyping.',
          bg: 'bg-[#E3F6E7] border-[#C8EED0]',
          isActive: true
        },
        {
          step: '03',
          title: 'Architecture & DevOps',
          desc: 'Microservices blueprints, database schema design, containerization, CI/CD pipelines, and cloud setup.',
          bg: 'bg-[#FDF0E8] border-[#FADCD0]',
          isActive: true
        },
        {
          step: '04',
          title: 'Agile Development',
          desc: '2-week sprint cycles with clean modular code, continuous integration, and transparent weekly progress demos.',
          bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
          isActive: true
        },
        {
          step: '05',
          title: 'Testing & QA Assurance',
          desc: 'Comprehensive automated test suites, performance benchmarking, security vulnerability scans, and UAT.',
          bg: 'bg-[#FBE4EC] border-[#F8BBD0]',
          isActive: true
        },
        {
          step: '06',
          title: 'Deployment & Launch',
          desc: 'Zero-downtime production deployment, CDN configuration, real-time APM monitoring, and rollback safeguards.',
          bg: 'bg-[#E1F7F9] border-[#BBEFF3]',
          isActive: true
        },
        {
          step: '07',
          title: 'Maintenance & SLA',
          desc: '24/7 infrastructure monitoring, critical security patching, performance optimization, and SLA response.',
          bg: 'bg-[#F2E4F9] border-[#E6CDFA]',
          isActive: true
        },
        {
          step: '08',
          title: 'Continuous Innovation',
          desc: 'Feature iteration, analytics-driven UX enhancement, scaling advisory, and AI automation integration.',
          bg: 'bg-[#EFF6CD] border-[#E2EEA5]',
          isActive: true
        }
      ]
    },

    // 10. Engagement Models Section
    engagementModelsSection: {
      isVisible: true,
      order: 10,
      title: 'Engagement Models',
      description: 'We offer variety of models to engage with us for your business requirement',
      buttonText: 'Get In Touch',
      buttonLink: '/contact',
      models: [
        {
          id: 1,
          title: 'Fixed Price',
          desc: 'This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.',
          isActive: true
        },
        {
          id: 2,
          title: 'Dedicated Hiring',
          desc: 'For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.',
          isActive: true
        },
        {
          id: 3,
          title: 'Time Material',
          desc: 'For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for When clients need short-term consulting or want to build a proof of concepts.',
          isActive: true
        },
        {
          id: 4,
          title: 'Buckets Approach',
          desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
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
      techData: {
        'Cloud & Devops': {
          title: 'Cloud & Devops',
          desc: 'Both cloud and DevOps engineers are essential and complementary components of contemporary infrastructure management and software development. To enhance your cloud experience and help you create more quickly, we provide dependable cloud and DevOps services on cloud platforms. DevOps enables almost instantaneous cloud product and service deployment, going beyond continuous integration and delivery (CI/CD).',
          logos: [
            { name: 'AWS', image: '/images/aws.png', isActive: true },
            { name: 'Google Cloud', image: '/images/google_cloud.png', isActive: true },
            { name: 'Docker', image: '/images/docker.png', isActive: true },
            { name: 'Kubernets', image: '/images/kubernetes.png', isActive: true },
            { name: 'Jenkins', image: '/images/jenkins.png', isActive: true },
            { name: 'Azure', image: '/images/azure.png', isActive: true }
          ]
        },
        'Frontend': {
          title: 'Frontend',
          desc: 'Our frontend engineering creates stunning, ultra-responsive, and modern interactive user interfaces with seamless accessibility and 60fps performance across desktop, tablet, and mobile devices.',
          logos: [
            { name: 'React', image: '/images/react.png', isActive: true },
            { name: 'Angular', image: '/images/angular.png', isActive: true },
            { name: 'Vue.js', image: '/images/vue.png', isActive: true },
            { name: 'JavaScript', image: '/images/javascript.png', isActive: true },
            { name: 'Ionic', image: '/images/Ionic.png', isActive: true },
            { name: 'Knockout.js', image: '/images/knockout_js.png', isActive: true }
          ]
        },
        'Backend': {
          title: 'Backend',
          desc: 'We design and build scalable, secure, and distributed microservices architectures and robust enterprise APIs capable of handling millions of real-time transactions with minimal latency.',
          logos: [
            { name: 'Node.js', image: '/images/node.png', isActive: true },
            { name: 'Python', image: '/images/python.png', isActive: true },
            { name: 'Java', image: '/images/java.png', isActive: true },
            { name: 'PHP', image: '/images/php.png', isActive: true },
            { name: '.NET', image: '/images/dot_net.png', isActive: true },
            { name: 'Ruby', image: '/images/ruby.png', isActive: true }
          ]
        },
        'Mobile': {
          title: 'Mobile',
          desc: 'We engineer state-of-the-art native iOS, Android, and cross-platform mobile apps with native fluid performance, secure biometric authentication, and offline capability.',
          logos: [
            { name: 'Flutter', image: '/images/flutter.png', isActive: true },
            { name: 'iOS', image: '/images/apple.png', isActive: true },
            { name: 'Android', image: '/images/android.png', isActive: true },
            { name: 'Ionic', image: '/images/Ionic.png', isActive: true },
            { name: 'Xamarin', image: '/images/xamarin.png', isActive: true },
            { name: 'React Native', image: '/images/react.png', isActive: true }
          ]
        },
        'Microsoft': {
          title: 'Microsoft',
          desc: 'As Microsoft solution partners, we build enterprise-grade SharePoint solutions, Power Platform automated workflows, Power BI dashboards, and custom .NET cloud applications.',
          logos: [
            { name: '.NET', image: '/images/dot_net.png', isActive: true },
            { name: 'SharePoint', image: '/images/sharepoint.png', isActive: true },
            { name: 'Office 365', image: '/images/office365.png', isActive: true },
            { name: 'Power BI', image: '/images/power_bi.png', isActive: true },
            { name: 'Power Automate', image: '/images/power_automate.png', isActive: true },
            { name: 'Power Apps', image: '/images/powerapp.png', isActive: true }
          ]
        },
        'Database': {
          title: 'Database',
          desc: 'High-availability relational and NoSQL databases optimized for ultra-low read/write latency, automatic failover clustering, sharding, and enterprise-grade data encryption.',
          logos: [
            { name: 'PostgreSQL', image: '/images/postgresql.png', isActive: true },
            { name: 'MongoDB', image: '/images/mongo.png', isActive: true },
            { name: 'MySQL', image: '/images/mysql.png', isActive: true },
            { name: 'Microsoft SQL', image: '/images/microsoft_sql.png', isActive: true },
            { name: 'Oracle', image: '/images/oracle.png', isActive: true },
            { name: 'Cassandra', image: '/images/cassandra.png', isActive: true }
          ]
        },
        'Testing': {
          title: 'Testing',
          desc: 'We implement end-to-end automated testing pipelines, stress testing, security audits, and regression verification to guarantee bug-free software that performs reliably under extreme demand.',
          logos: [
            { name: 'Selenium', image: '/images/selenium.png', isActive: true },
            { name: 'Postman', image: '/images/postman.png', isActive: true },
            { name: 'BrowserStack', image: '/images/browserstack.png', isActive: true },
            { name: 'Apache JMeter', image: '/images/apache_jmeter.png', isActive: true },
            { name: 'Katalon', image: '/images/katalon.png', isActive: true },
            { name: 'Jira', image: '/images/jira.png', isActive: true }
          ]
        }
      }
    },

    // 12. Our Premium Services (Pill Grid)
    premiumServicesGrid: {
      isVisible: true,
      order: 12,
      title: 'Our Premium Services',
      description: "We are a team of qualified Salesforce & Enterprise Development Professionals adept at expanding your current system's capabilities via the development and integration of Salesforce CRM.",
      services: [
        { name: 'Mobile App Development', link: '/services/mobile-app-development', isActive: true },
        { name: 'Software Development', link: '/services/software-development', isActive: true },
        { name: 'Web Development', link: '/services/web-development', isActive: true },
        { name: '.NET Development', link: '/services/dot-net-development', isActive: true },
        { name: 'PHP Development', link: '/services/php-development', isActive: true },
        { name: 'Laravel Development', link: '/services/laravel-development', isActive: true },
        { name: 'Node.js Development', link: '/services/node-js-development', isActive: true },
        { name: 'React Native App Development', link: '/services/react-native-development', isActive: true },
        { name: 'Flutter App Development', link: '/services/flutter-development', isActive: true },
        { name: 'Cross Platform App Development', link: '/services/cross-platform-development', isActive: true }
      ]
    },

    // 13. Success Matrix Section
    successMatrixGrid: {
      isVisible: true,
      order: 13,
      title: 'Success Matrix',
      description: 'We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.',
      cards: [
        { title: 'SEO and Digital Marketing', isActive: true },
        { title: '4 months + Free Post Launch Support', isActive: true },
        { title: 'Non-Disclosure', isActive: true },
        { title: '100% value for the money', isActive: true },
        { title: 'Professional coding and version controls', isActive: true },
        { title: 'Flexible Payment Term', isActive: true },
        { title: 'Hire dedicated team on hourly or fix price basis', isActive: true },
        { title: 'Dedicated Team for Project Discussion', isActive: true },
        { title: 'Penalty clause against late delivery', isActive: true },
        { title: '18+ Years of Experience', isActive: true },
        { title: 'Experienced Team', isActive: true },
        { title: 'Explainer Videos', isActive: true }
      ]
    },

    // 14. Innovative Solution Video Carousel
    innovativeSolutionVideo: {
      isVisible: true,
      order: 14,
      title: 'Unveiling Our Innovative Solution',
      description: 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.',
      buttonText: 'View Insightful Videos',
      buttonLink: '/company/insightful-videos',
      videos: [
        {
          title: 'National Water Supply Corporation :...',
          image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'NutriPlan: Your Ultimate Meal Planning...',
          image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'Terraform Timesheet App with Microsoft...',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'AI-Powered Language Learning App...',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'Challenges of AI in Recruitment...',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'Leading Trading App Development...',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'Top React JS Development Company I...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          title: 'Top AI Avatar Generator App...',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
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
          desc: "In today's fast-paced digital world, mobile applications have become an integral part of our daily lives. From communication to...",
          isActive: true
        },
        {
          title: 'Why Does Your Business Needs Software Applications?',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
          desc: "In today's fast-paced and digitally-driven world, businesses of all sizes and industries are recognizing the importance of integratin...",
          isActive: true
        },
        {
          title: 'A Chat with a Client: Why They Chose firevy.co',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
          desc: 'There are several mobile app development companies worldwide. While searching for a reliable IT services provider, I came across...',
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
      brochureUrl: ''
    },

    // 17. Digital Transformation & Case Studies
    digitalTransformationCaseStudies: {
      isVisible: true,
      order: 17,
      title: 'Digital Transformation Case Studies',
      description: 'Discover how we partner with industry pioneers to deliver bespoke web, mobile, and cloud software engineering.',
      caseStudies: [
        {
          id: 'lt',
          company: 'Larsen & Toubro',
          bgColor: '#E6F4FA',
          logo: '/images/case_study_images/Images/new/finallogos_1/lt.png',
          desc: "Larsen & Toubro Limited is one of India's largest and most well-known private corporations. L&T offers unrivaled capabilities across Technology, Engineering, Construction, and Manufacturing, and retains leadership in all of its primary lines of business, almost 80 years of a strong, customer-focused strategy and a never-ending search for world-class quality. The Hazira campus produce extra-large..",
          bullets: [
            'Automated safety audits and inspections',
            '24/7 access to safety training resources',
            'Customizable dashboards and reporting tools',
            'Real-time incident reporting and tracking',
            '99% compliance with health and safety regulations'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/l&t.webp',
          isActive: true
        },
        {
          id: 'mg',
          company: 'Morris Garages',
          bgColor: '#FFEAEA',
          logo: '/images/case_study_images/Images/new/finallogos_1/mg.png',
          desc: "MG Motor is a well-known firm that have large number of employee. It is their major responsibility to keep track of employees' health and records. The system from their end was to have one secure locker for the protection of all the papers in order to keep track of employee Examination and OPD records for audit purpose.",
          bullets: [
            'Real-time health data analytics',
            'HIPAA-compliant data security',
            '24/7 access to health resources and support',
            'Personalized health recommendations',
            '98% improvement in employee health monitoring'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/mg.webp',
          isActive: true
        },
        {
          id: 'adani',
          company: 'Adani Group',
          bgColor: '#EDEDF6',
          logo: '/images/case_study_images/Images/new/finallogos_1/adani.png',
          desc: "Adani EmCare is a Web + Mobile App used by Adani Group’s medical officer to capture, analyze and manage the health data of the employees and workers. And this data is used by medical officer to provide preventive healthcare to the employees.",
          bullets: [
            '98% Employee satisfaction ratio',
            '91% reduction in appointment scheduling time',
            '24/7 real-time health monitoring',
            'Serving over 60,000 healthcare professionals',
            'Generating over USD 30 billion in revenue'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/adani.webp',
          isActive: true
        },
        {
          id: 'loreal',
          company: "L'Oreal",
          bgColor: '#F3F2EF',
          logo: '/images/case_study_images/Images/new/finallogos_1/loreal.png',
          desc: "This safety improvement application collects observations from organizational Staff and non-staff, and the respective department head will take care of closure observation, and some observation categories will be verified by top management.",
          bullets: [
            '97% reduction in safety incidents',
            'Scalable solution for large enterprises',
            'Recognized for excellence in safety innovation',
            'Automated safety reminders and alerts',
            'Real-time hazard identification and reporting'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/loreal.webp',
          isActive: true
        },
        {
          id: 'waymark',
          company: 'Waymark Maps',
          bgColor: '#F9E5F7',
          logo: '/images/case_study_images/Images/new/finallogos_1/waymarkmaps.png',
          desc: "A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, and metro routes, Waymark offers an interactive map.",
          bullets: [
            'Turn-by-turn voice navigation',
            'Points of interest (POI) recommendations',
            'Real-time traffic updates and route optimization',
            'Offline map access for remote areas',
            'Augmented reality (AR) navigation features'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/waymark_map_app.webp',
          isActive: true
        },
        {
          id: 'beecar',
          company: 'Bee Car Care',
          bgColor: '#F4F2EC',
          logo: '/images/case_study_images/Images/new/finallogos_1/beecar.png',
          desc: "If you provide car washing services and need to reach a wide range of customers, the car wash app is your best bet. Firevy.co has built a car wash application that allows people to book car wash services in a few clicks.",
          bullets: [
            '96% customer retention rate',
            '92% increase in service bookings',
            'Over 1,10,000 satisfied users',
            'Operating in 90+ locations',
            'User-friendly & Efficient interface for easy booking'
          ],
          caseStudyLink: '/portfolio',
          portfolioLink: '/portfolio',
          mainImg: '/images/case_study_images/Images/new/beecar.webp',
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
      description: "Read through our latest blog posts that cover everything from technology trends to business insights. Expand your knowledge and stay ahead of the curve.",
      buttonText: 'View All Blogs',
      buttonLink: '/about',
      blogs: [
        {
          id: 1,
          date: 'March 6, 2026',
          title: 'AI in Mobile App Development: Tools That Save Time and Money',
          desc: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development,...',
          slug: 'ai-in-mobile-app-development',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          id: 2,
          date: 'March 3, 2026',
          title: 'Hire Dedicated Developers: Ultimate Guide for 2026',
          desc: 'Hiring dedicated remote developers is the fastest way to scale software delivery while maintaining engineering quality...',
          slug: 'hire-dedicated-developers-guide-2026',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
          isActive: true
        },
        {
          id: 3,
          date: 'February 28, 2026',
          title: 'Microservices vs Monolithic Architecture in Modern Cloud',
          desc: 'Discover key architectural trade-offs, scalability metrics, and cost implications when modernizing legacy systems...',
          slug: 'microservices-vs-monolithic-cloud-architecture',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
          isActive: true
        }
      ]
    },

    // 20. What Our Clients Say (Dark Client Reviews Section)
    clientReviewsDarkSection: {
      isVisible: true,
      order: 20,
      title: 'What Clients Say About Us',
      description: 'Read unfiltered reviews directly from Clutch, Upwork, and verified client testimonials worldwide.',
      clutchScore: '4.9',
      clutchReviewCount: '32 REVIEWS',
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
      title: 'Featured In Leading Global Publications',
      description: 'Our insights, architectures, and client achievements have been recognized across prominent media outlets worldwide.',
      logos: [
        { id: 'microsoft', name: 'Microsoft', isActive: true },
        { id: 'inc', name: 'Inc.', isActive: true },
        { id: 'google-play', name: 'Google Play', isActive: true },
        { id: 'app-store', name: 'App Store', isActive: true },
        { id: 'forbes', name: 'Forbes', isActive: true },
        { id: 'techcrunch', name: 'TechCrunch', isActive: true },
        { id: 'bloomberg', name: 'Bloomberg', isActive: true },
        { id: 'producthunt', name: 'Product Hunt', isActive: true },
        { id: 'theverge', name: 'The Verge', isActive: true },
        { id: 'reuters', name: 'Reuters', isActive: true },
        { id: 'wired', name: 'Wired', isActive: true },
        { id: 'venturebeat', name: 'VentureBeat', isActive: true }
      ]
    },

    // 22. Let's Work Together & Newsletter Subscription
    workTogetherNewsletterSection: {
      isVisible: true,
      order: 22,
      bannerTitle: "Let's Work Together On Your Next Digital Project",
      bannerDescription: 'Book a meeting with our specialists today to learn more about how firevy.co can help you unlock technology visions and drive your product strategy.',
      bannerButtonText: 'Request A Free Quote',
      bannerButtonLink: '/contact',
      newsletterTitle: 'Subscribe us and Get the latest updates and news',
      newsletterButtonText: 'Subscribe'
    },

    // 23. About Preview
    aboutPreview: {
      isVisible: true,
      order: 23,
      badge: 'WHO WE ARE',
      title: 'Technology Expertise. Business Thinking. Real Results.',
      subtitle: 'At firevy.co, we bridge the gap between complex software engineering and strategic business growth. We help enterprises and high-growth scale-ups turn technological vision into high-throughput realities.',
      points: [
        'Digital Transformation & Legacy System Modernization',
        'Enterprise Cloud-Native Microservices Architecture',
        'Custom RAG Generative AI & Autonomous Agent Engineering',
        'Agile Product Delivery with 2-Week Sprint Cadence',
        'Strict SOC2 & ISO-27001 Security Standards'
      ],
      buttonText: 'Learn More About Us',
      buttonLink: '/about',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      floatingTitle: 'Engineering Excellence',
      floatingSubtitle: '95% Long-term Client Retention Rate',
      floatingBadge: 'TOP 1% TALENT'
    },

    // 24. Awards & Accolades
    awardsSection: {
      isVisible: true,
      order: 24,
      badge: 'RECOGNITION & EXCELLENCE',
      title: 'Proud To Have Picked These Up Along The Way',
      subtitle: 'Our commitment to technical rigor, innovation, and client success has earned top industry accolades.',
      awards: [
        { title: 'Clutch Top AI & Software Developer 2026', badge: 'CLUTCH LEADER', year: '2026', desc: 'Ranked #1 Global AI & Custom Software Engineering Firm.' },
        { title: 'ISO 9001:2015 & SOC2 Type II Certified', badge: 'ENTERPRISE COMPLIANT', year: 'Certified', desc: 'Bank-grade cybersecurity & quality management standards.' },
        { title: 'GoodFirms Top App Development Agency', badge: 'TOP DEVELOPER', year: '2025-2026', desc: 'Recognized for high-impact mobile & web product delivery.' },
        { title: 'G2 High Performer Enterprise Software', badge: '5-STAR RATED', year: 'Top 1%', desc: 'Highest customer satisfaction rating across 300+ reviews.' }
      ]
    },

    // 25. Primary CTA Section
    ctaSection: {
      isVisible: true,
      order: 25,
      badge: 'TRANSFORM YOUR VISION INTO SOFTWARE',
      title: "Have an Idea? Let's Build It Together.",
      subtitle: 'Whether you need to launch a new SaaS MVP, scale legacy microservices, or integrate private enterprise AI, our engineering team is ready.',
      primaryButtonText: 'Start a Project',
      primaryButtonLink: '/contact',
      secondaryButtonText: 'Book a Consultation',
      secondaryButtonLink: '/contact'
    },

    // 26. Light Conversion Banner
    conversionBanner: {
      isVisible: true,
      order: 26,
      badge: 'COLLABORATE WITH EXPERTS',
      title: "Let's Start Something Big Together",
      subtitle: 'Have an ambitious digital product in mind or scaling an enterprise platform? Partner with our engineers for custom product strategy, technical roadmap design, and rapid execution.',
      buttonText: 'Get In Touch',
      buttonLink: '/contact'
    },

    // 27. FAQ Accordion
    faqAccordion: {
      isVisible: true,
      order: 27,
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Everything You Need to Know Before Starting',
      subtitle: 'Clear, honest answers to key technical and operational questions.',
      faqs: [
        { question: 'How much does a typical software development project cost?', answer: 'Project pricing depends on scope, complexity, tech stack, and timeline. Small-to-medium enterprise MVPs typically range from $15,000 to $45,000, while complex multi-platform platforms with custom AI microservices are scoped under fixed milestones or dedicated monthly retainers.' },
        { question: 'What is your standard development timeline?', answer: 'Most custom web or mobile MVP applications are delivered within 6 to 12 weeks following 2-week agile sprint iterations. We provide a detailed sprint roadmap during our initial discovery phase.' },
        { question: 'How do you select the right technology stack for our product?', answer: 'We analyze your target user concurrency, performance SLAs, security requirements, and long-term scalability needs. We typically recommend React/Next.js for frontend, Node.js or Python for APIs, and MongoDB or PostgreSQL for persistent databases.' },
        { question: 'How quickly can dedicated developers join our project?', answer: 'Our pre-vetted senior full-stack engineers, cloud architects, and UI/UX designers can onboard into your Slack, GitHub, and daily standups within 48 to 72 hours.' },
        { question: 'Are your AI & Machine Learning solutions secure for private enterprise data?', answer: 'Yes, 100%. We deploy private model instances with vector database isolation so your proprietary enterprise data is encrypted and never shared or trained publicly.' },
        { question: 'Do you offer post-launch maintenance and 24/7 cloud support?', answer: 'Yes, we offer dedicated post-launch SLAs covering continuous infrastructure monitoring, automated security patch updates, feature enhancements, and 24/7 incident response.' }
      ]
    },

    // 28. Industries Verticals
    industriesGrid: {
      isVisible: true,
      order: 28,
      badge: 'INDUSTRIES WE TRANSFORM',
      title: 'Tailored Solutions for Diverse Domain Verticals',
      subtitle: 'We bring deep domain expertise and compliance understanding across key industries worldwide.'
    },

    // 29. Process Timeline
    processTimeline: {
      isVisible: true,
      order: 29,
      badge: 'HOW WE WORK',
      title: 'Process We Follow',
      subtitle: 'A structured 8-step software engineering process designed to ensure transparent delivery and high quality outcomes.',
      steps: [
        { number: '01', title: 'Requirement Gathering', desc: 'In-depth discovery, business goals audit, and technical specification definition.' },
        { number: '02', title: 'Designs, Wireframes, & Mockups', desc: 'Crafting responsive UI layout wireframes, design systems, and visual mockups.' },
        { number: '03', title: 'Prototype Demo', desc: 'Interactive clickable prototype demonstration for early stakeholder feedback.' },
        { number: '04', title: 'Changes And Confirmation', desc: 'Incorporating feedback, refining architecture scope, and locking design signoff.' },
        { number: '05', title: 'Development', desc: 'Agile frontend & backend code engineering with clean modular architecture.' },
        { number: '06', title: 'Deployment', desc: 'Automated CI/CD pipeline deployment to production cloud infrastructure.' },
        { number: '07', title: 'Support And Maintenance', desc: '24/7 proactive monitoring, security updates, and performance optimizations.' },
        { number: '08', title: 'SEO', desc: 'Search engine optimization, schema structured tags, and performance tuning.' }
      ]
    },

    // 30. Animated Key Stats
    statsSection: {
      isVisible: true,
      order: 30,
      statsList: [
        { value: '95%', label: 'Client Retention', numeric: 95, suffix: '%' },
        { value: '18+', label: 'Industries Served', numeric: 18, suffix: '+' },
        { value: '2800+', label: 'Satisfied Clients', numeric: 2800, suffix: '+' },
        { value: '1500+', label: 'Projects Completed', numeric: 1500, suffix: '+' },
        { value: '23+', label: 'Years of Experience', numeric: 23, suffix: '+' },
        { value: '320+', label: '5-Star Reviews', numeric: 320, suffix: '+' }
      ]
    },

    // 31. Tech Ecosystem Grid
    techEcosystem: {
      isVisible: true,
      order: 31,
      badge: 'OUR TECHNOLOGY ECOSYSTEM',
      title: 'Battle-Tested Tech Stack & Modern Frameworks',
      subtitle: 'We leverage enterprise-proven technologies and cutting-edge frameworks to build high-performance software systems that scale with confidence.'
    },

    // 32. Why Choose Us
    whyChooseUs: {
      isVisible: true,
      order: 32,
      badge: 'WHY FIREVY',
      title: 'The Engineering Partner Built for Long-Term Growth',
      subtitle: "We don't just write code—we design resilient digital infrastructure that accelerates business outcomes.",
      pillars: [
        { title: 'Experienced Developers', desc: 'Top 1% pre-vetted engineers with deep expertise in modern tech stacks.' },
        { title: 'Agile Development', desc: 'Iterative 2-week sprints with full client visibility into code progress.' },
        { title: 'Transparent Communication', desc: 'Direct Slack, Jira, and weekly video standups with zero middleman friction.' },
        { title: 'Quality Assurance', desc: 'Automated E2E testing, code reviews, and zero-defect deployment standards.' },
        { title: 'Scalable Architecture', desc: 'Microservices designed to handle millions of queries with zero downtime.' },
        { title: 'Security First', desc: 'Bank-grade encryption, OWASP audits, and SOC2 / HIPAA compliance readiness.' },
        { title: 'On-Time Delivery', desc: 'Strict milestone tracking and 99.4% on-time project completion record.' },
        { title: 'Post-Launch Support', desc: 'Dedicated SLAs, 24/7 cloud monitoring, and continuous product updates.' }
      ]
    }
  }
};

export const INITIAL_HOME_PAGE_DATA = initialHomePageData;
export default initialHomePageData;
