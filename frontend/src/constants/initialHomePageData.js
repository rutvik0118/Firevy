/**
 * Complete Initial Default Data for all 22 Home Page Sections
 * Exactly matches current production content, texts, logos, icons, and media references.
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
      title: 'About Us',
      description: 'Sapphire delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success',
      cards: [
        { metric: '23+', label: 'Years of Experience', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '320+', label: '5-Star Clutch Reviews', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '20+', label: 'Fortunes 500 Companies', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '200+', label: 'IT Professional', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '95%', label: 'Client Retention', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '18+', label: 'Industry Served', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '2800+', label: 'Satisfied Clients', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&q=80', isActive: true },
        { metric: '1500+', label: 'Completed Projects', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80', isActive: true }
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
          image: '',
          isActive: true
        },
        {
          id: 2,
          titleLine1: 'AI Traffic Management',
          titleLine2: 'System',
          slug: 'ai-traffic-management-system',
          cardBg: 'bg-[#EBF3FB]',
          image: '',
          isActive: true
        },
        {
          id: 3,
          titleLine1: 'Real Estate App',
          titleLine2: 'Development',
          slug: 'real-estate-app-development',
          cardBg: 'bg-[#0D2B45]',
          image: '',
          isActive: true
        },
        {
          id: 4,
          titleLine1: 'Bee Car Care -',
          titleLine2: 'Car Services App',
          slug: 'bee-car-care-app',
          cardBg: 'bg-[#FFF9E6]',
          image: '',
          isActive: true
        },
        {
          id: 5,
          titleLine1: 'Doctor & Patient App',
          titleLine2: 'Development',
          slug: 'doctor-patient-app-development',
          cardBg: 'bg-[#E8F8F5]',
          image: '',
          isActive: true
        },
        {
          id: 6,
          titleLine1: 'Fintech & Investment',
          titleLine2: 'Banking Platform',
          slug: 'fintech-investment-banking-platform',
          cardBg: 'bg-[#181D27]',
          image: '',
          isActive: true
        }
      ]
    },

    // 8. Trust & Recognition Banner
    trustRecognitionBanner: {
      isVisible: true,
      order: 8,
      title: 'Proud To Have Picked These Up Along The Way',
      badges: [
        { id: 1, title: 'Clutch - We Deliver On', image: '/images/clutch.png', isActive: true },
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
      description: 'A systematic, milestone-driven development process engineered to maximize delivery speed, quality, and business value.',
      steps: [
        {
          step: '01',
          title: 'Requirement Gathering',
          desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
          bg: 'bg-[#ECE7FE] border-[#DDD8FE]',
          isActive: true
        },
        {
          step: '02',
          title: 'Designs, Wireframes, & Mockups',
          desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
          bg: 'bg-[#E5F7E8] border-[#C8EED0]',
          isActive: true
        },
        {
          step: '03',
          title: 'Prototype Demo',
          desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
          bg: 'bg-[#FDF0E7] border-[#FADCD0]',
          isActive: true
        },
        {
          step: '04',
          title: 'Changes And Confirmation',
          desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
          bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
          isActive: true
        },
        {
          step: '05',
          title: 'Development',
          desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.',
          bg: 'bg-[#FDE7EE] border-[#FBCFE8]',
          isActive: true
        },
        {
          step: '06',
          title: 'Deployment',
          desc: "We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.",
          bg: 'bg-[#E2F7F8] border-[#BAE6FD]',
          isActive: true
        },
        {
          step: '07',
          title: 'Support And Maintenance',
          desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement',
          bg: 'bg-[#F6E8FD] border-[#E9D5FF]',
          isActive: true
        },
        {
          step: '08',
          title: 'SEO',
          desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.',
          bg: 'bg-[#F6FBDD] border-[#E5F2A8]',
          isActive: true
        }
      ]
    },

    // 10. Engagement Models Section
    engagementModelsSection: {
      isVisible: true,
      order: 10,
      title: 'Our Engagement Models',
      description: 'At Sapphire, we provide full-cycle custom software development services to meet your financial requirements. Our software development team leverages their expertise in delivering process-oriented and high-performance software products for Cloud, Mobile, and Web.',
      buttonText: 'Get In Touch',
      buttonLink: '/contact',
      models: [
        {
          id: 1,
          title: 'Fixed Price',
          description: 'This model is for projects with well-defined scope and requirements. When Clients know what they want and have fixed requirements, it works the best for small businesses and medium projects with limited or fixed budgets.',
          isActive: true
        },
        {
          id: 2,
          title: 'Dedicated Hiring',
          description: 'For projects when clients want to have a full-time, dedicated team working on their projects. Works best for projects which require fast scaling or require expert developers to work on a long-term basis.',
          isActive: true
        },
        {
          id: 3,
          title: 'Time Material',
          description: 'For projects where requirements are dynamic and constantly changing, and scope is not clearly defined. Works the best for When clients need short-term consulting or want to build a proof of concepts.',
          isActive: true
        },
        {
          id: 4,
          title: 'Buckets Approach',
          description: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
          isActive: true
        }
      ]
    },

    // 11. Technologies We Work With (Tabbed Showcase)
    techShowcaseTabbed: {
      isVisible: true,
      order: 11,
      title: 'Technologies We Work With',
      description: 'We work on wide range of tools and technologies to cater client business requirement for existing project or new application.'
    },

    // 12. Our Premium Services (Pill Grid)
    premiumServicesGrid: {
      isVisible: true,
      order: 12,
      title: 'Our Premium Services',
      description: 'As a certified IT company, firevy.co helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.'
    },

    // 13. Success Matrix Section
    successMatrixGrid: {
      isVisible: true,
      order: 13,
      title: 'Success Matrix',
      description: 'We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.'
    },

    // 14. Innovative Solution Video Carousel
    innovativeSolutionVideo: {
      isVisible: true,
      order: 14,
      title: 'Unveiling Our Innovative Solution',
      description: 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.',
      buttonText: 'View Insightful Videos',
      buttonLink: '/portfolio'
    },

    // 15. Our Recent Podcasts
    recentPodcastsSection: {
      isVisible: true,
      order: 15,
      title: 'Our Recent Podcasts',
      description: "Listen to our series of podcasts that expose you to a broad array of concepts. Whether you're looking for the latest trends or want to hear customer experience, our podcasts will be a treat for your ears."
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
      title: 'Driving Digital Transformation',
      description: 'Learn how we are empowering leading companies to achieve their transformation goals with our industry expertise and deep tech.'
    },

    // 18. Our Story, Their Words (Video Testimonials)
    videoTestimonialsStory: {
      isVisible: true,
      order: 18,
      title: 'What Our Clients Have To Say',
      description: 'Hear how our clients share their positive experiences of working with firevy.co team. How we’ve helped them to achieve business goals and deliver successful projects.'
    },

    // 19. Our Recent Blogs Section
    recentBlogsSection: {
      isVisible: true,
      order: 19,
      title: 'Our Recent Blogs',
      description: 'Read through our latest blog posts that cover everything from technology trends to business insights. Expand your knowledge and stay ahead of the curve.',
      buttonText: 'View All Blogs',
      buttonLink: '/about'
    },

    // 20. What Our Clients Say (Dark Client Reviews Section)
    clientReviewsDarkSection: {
      isVisible: true,
      order: 20,
      title: 'What Clients Say About Us',
      description: 'Read unfiltered reviews directly from Clutch, Upwork, and verified client testimonials worldwide.',
      clutchScore: '4.9',
      clutchReviewCount: '32 REVIEWS'
    },

    // 21. We Have Been Featured In (Logo Grid)
    featuredInLogosGrid: {
      isVisible: true,
      order: 21,
      title: 'Featured In',
      description: 'Our technological innovations and digital achievements featured across premier global publications.'
    },

    // 22. Let's Work Together & Newsletter Subscription
    workTogetherNewsletterSection: {
      isVisible: true,
      order: 22,
      bannerTitle: "Let's Work Together On Your Next Digital Project",
      bannerDescription: "Book a meeting with our specialists today to learn more about how firevy.co can help you unlock technology visions and drive your product strategy.",
      bannerButtonText: "Request A Free Quote",
      bannerButtonLink: "/contact",
      newsletterTitle: "Subscribe us and Get the latest updates and news",
      newsletterButtonText: "Subscribe"
    }
  }
};

export const INITIAL_HOME_PAGE_DATA = initialHomePageData;
export default initialHomePageData;
