/**
 * Initial Company Section Seed Data extracted directly from Firevy.co / Sapphire Web Pages
 */

export const initialTeamMembers = [
  {
    name: 'Mr. Kumaril Patel',
    designation: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    department: 'Executive Leadership',
    bio: 'Pioneering strategic tech consulting and enterprise software engineering for over 23+ years.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'kumaril@firevy.co'
    },
    order: 1,
    isActive: true
  },
  {
    name: 'Mr. Rajendra Patel',
    designation: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    department: 'Technology & Architecture',
    bio: 'Leading high-concurrency cloud architecture, AI engineering squads, and enterprise security frameworks.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'rajendra@firevy.co'
    },
    order: 2,
    isActive: true
  },
  {
    name: 'Aarav Sharma',
    designation: 'Head of Mobile Engineering',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    department: 'Mobile App Development',
    bio: 'Over a decade leading cross-platform and native iOS/Android development for Fortune 500 brands.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'aarav@firevy.co'
    },
    order: 3,
    isActive: true
  },
  {
    name: 'Priya Mehta',
    designation: 'VP of Product & AI Solutions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    department: 'Artificial Intelligence & Product',
    bio: 'Specializing in Generative AI, RAG architectures, and enterprise SaaS product development.',
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      email: 'priya@firevy.co'
    },
    order: 4,
    isActive: true
  }
];

export const initialCompanyEvents = [
  {
    title: 'Annual Global Tech Summit & Hackathon 2026',
    category: 'Engineering & Innovation',
    eventDate: 'February 15, 2026',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    ],
    shortDescription: '3-day global innovation sprint prototyping cutting-edge AI agents and high-throughput architectures.',
    content: 'Our engineering squads assembled for 72 hours of uninterrupted creativity, building autonomous AI workflows and intelligent automation solutions for enterprise operations.',
    location: 'Headquarters Innovation Hub',
    order: 1,
    isActive: true
  },
  {
    title: 'Community Upliftment & Code for Good Workshop',
    category: 'CSR & Education',
    eventDate: 'January 20, 2026',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80'
    ],
    shortDescription: 'Mentoring young tech students and donating laptops and coding materials to underprivileged schools.',
    content: 'Empowering future generations through foundational STEM education, open-source workshops, and comprehensive student mentorship.',
    location: 'Ahmedabad Community Center',
    order: 2,
    isActive: true
  }
];

export const initialBrochures = [
  {
    title: 'firevy.co Corporate Digital Overview Brochure 2026',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://firevy.co/downloads/firevy-corporate-brochure-2026.pdf',
    fileSize: '4.8 MB',
    description: 'Comprehensive overview of firevy.co engineering capabilities, client case studies, technology stacks, and engagement frameworks.',
    category: 'Corporate Overview',
    downloadCount: 1420,
    order: 1,
    isActive: true
  },
  {
    title: 'Enterprise AI & Cloud Architecture Solutions Catalog',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    pdfUrl: 'https://firevy.co/downloads/firevy-ai-cloud-solutions-catalog.pdf',
    fileSize: '6.2 MB',
    description: 'Deep dive into our generative AI pipelines, LLM fine-tuning methodologies, and multi-cloud Kubernetes deployment blueprints.',
    category: 'Solutions Guide',
    downloadCount: 890,
    order: 2,
    isActive: true
  }
];

export const initialAwards = [
  {
    title: 'Top Web Developers 2026',
    organization: 'GoodFirms',
    year: '2026',
    image: '/images/awards/top_web_dev_goodfirm.svg',
    category: 'Web Development',
    description: 'Recognized as leading web engineering powerhouse across North America and Europe.',
    order: 1,
    isActive: true
  },
  {
    title: 'Top Mobile App Developers 2026',
    organization: 'Clutch',
    year: '2026',
    image: '/images/awards/top_mobile_clutchn.svg',
    category: 'Mobile App Development',
    description: 'Ranked top 1% globally on Clutch with verified 5.0 client satisfaction rating.',
    order: 2,
    isActive: true
  },
  {
    title: 'Most Reviewed Software Company',
    organization: 'The Manifest',
    year: '2025',
    image: '/images/awards/most_review_softwarecompany_manifest.svg',
    category: 'Software Solutions',
    description: 'Honored for exceptional delivery rigor and over 300+ verified enterprise client reviews.',
    order: 3,
    isActive: true
  },
  {
    title: 'Top Rated Plus Agency',
    organization: 'Upwork',
    year: '2026',
    image: '/images/awards/9_upwork.svg',
    category: 'Global Consulting',
    description: 'Maintaining 100% Job Success Score and verified enterprise delivery milestones.',
    order: 4,
    isActive: true
  }
];

export const initialInsightfulVideos = [
  {
    title: 'Revolutionizing Diet & Nutrition App Development with AI',
    thumbnail: '/images/homeinnovation/eleventh.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    industry: 'HealthCare',
    duration: '4:20 Min',
    tag: 'HealthCare & AI',
    description: 'Explore how AI-powered calorie scanning, real-time diet adjustment algorithms, and personalized wellness coaching transform modern health mobile apps.',
    order: 1,
    isActive: true
  },
  {
    title: 'Revolutionizing Water Distribution System: IoT App Case Study',
    thumbnail: '/images/homeinnovation/tenth.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    industry: 'Utilities',
    duration: '5:15 Min',
    tag: 'Utilities & IoT',
    description: 'Discover our cutting-edge IoT and mobile monitoring ecosystem digitizing water supply networks, leak detections, and billing automation.',
    order: 2,
    isActive: true
  },
  {
    title: 'Unlock Innovation with firevy.co Software Solutions',
    thumbnail: '/images/homeinnovation/second.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeId: 'dQw4w9WgXcQ',
    industry: 'Technology',
    duration: '3:45 Min',
    tag: 'Technology',
    description: 'Scale your engineering squads with pre-vetted senior mobile app engineers delivering high-performance iOS and Android architectures.',
    order: 3,
    isActive: true
  }
];

export const initialBlogPosts = [
  {
    title: 'AI in Mobile App Development: Tools That Save Time and Money',
    slug: 'ai-in-mobile-app-development-tools-that-save-time-and-money',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    gradientBg: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
    shortDescription: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
    content: 'Full article discussing modern generative coding, automated screenshot tests, and AI-driven predictive caching for mobile applications.',
    tags: ['AI', 'Mobile Development', 'React Native', 'Flutter', 'Automation'],
    readTime: '6 min read',
    publishDate: 'March 6, 2026',
    isFeatured: true,
    seoTitle: 'AI in Mobile App Development | firevy.co',
    seoDescription: 'Discover top AI tools and architectures accelerating mobile app development.',
    seoKeywords: 'AI mobile app development, AI tools, flutter, react native',
    status: 'published',
    order: 1,
    isActive: true
  },
  {
    title: 'What Happens When AI Agents Start Negotiating with Your Customers?',
    slug: 'what-happens-when-ai-agents-start-negotiating-with-your-customers',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900',
    shortDescription: '"If I increase the order to 500 units, can you give me 15% off?" That question used to go to a sales representative. Now it might go to a chatbot. But what happens when tha...',
    content: 'Autonomous commerce agents are shifting customer interactions from static scripts to dynamic value negotiation.',
    tags: ['AI Agents', 'Commerce', 'Customer Experience'],
    readTime: '5 min read',
    publishDate: 'August 31, 2026',
    isFeatured: false,
    seoTitle: 'AI Agents in Customer Negotiation | firevy.co',
    seoDescription: 'How autonomous AI agents are revolutionizing B2B and B2C commerce negotiation.',
    seoKeywords: 'AI agents, automated negotiation, generative AI',
    status: 'published',
    order: 2,
    isActive: true
  },
  {
    title: 'How Composable AI Can Reduce the Cost of AI Development for Smart Businesses?',
    slug: 'how-composable-ai-can-reduce-the-cost-of-ai-development',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900',
    shortDescription: "mid-sized company adds AI to its product. The pilot is doing well. Everyone is happy. Six months later, someone asks for a second AI feature. The team realizes they're...",
    content: 'Composable AI architectures empower organizations to swap LLM backends and orchestration pipelines with zero friction.',
    tags: ['Composable AI', 'Architecture', 'Cost Optimization'],
    readTime: '5 min read',
    publishDate: 'August 27, 2026',
    isFeatured: false,
    seoTitle: 'Composable AI Architecture for Business | firevy.co',
    seoDescription: 'Learn how composable AI patterns slash maintenance costs and future-proof AI apps.',
    seoKeywords: 'composable AI, enterprise LLM, AI architecture',
    status: 'published',
    order: 3,
    isActive: true
  },
  {
    title: 'Why the Best Business Leaders Need to Stay Ahead of Technology and How They Can Do It',
    slug: 'why-best-business-leaders-stay-ahead-of-technology',
    author: 'Kumaril Patel',
    category: 'Software Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900',
    shortDescription: "A founder can spend a decade learning how customers think, how to build a team that doesn't fall apart under pressure, how to read a balance sheet, how to time a...",
    content: 'Technology leadership requires constant adaptation, architectural vigilance, and embracing emerging computing primitives before market commoditization.',
    tags: ['Leadership', 'Technology Strategy', 'CTO Insights'],
    readTime: '5 min read',
    publishDate: 'August 25, 2026',
    isFeatured: false,
    seoTitle: 'Why Business Leaders Must Stay Ahead of Tech | firevy.co',
    seoDescription: 'Strategic guidance for founders and executives navigating technological shifts.',
    seoKeywords: 'tech leadership, strategy, software trends',
    status: 'published',
    order: 4,
    isActive: true
  },
  {
    title: 'Beyond Chatbots and Copilots: What Happens When AI Agents Start Running Business Processes?',
    slug: 'beyond-chatbots-and-copilots-ai-agents-business-processes',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-cyan-600 via-blue-800 to-slate-950',
    shortDescription: 'Imagine a customer issue that normally passes through three employees, four systems, and several manual checks before it is resolved. Now imagine an AI system handling...',
    content: 'Agentic workflows combine perception, planning, and tool execution to automate multi-stage enterprise operations end-to-end.',
    tags: ['AI Agents', 'Automation', 'Enterprise AI'],
    readTime: '5 min read',
    publishDate: 'August 21, 2026',
    isFeatured: false,
    seoTitle: 'AI Agents Running Business Processes | firevy.co',
    seoDescription: 'Moving beyond conversational LLMs to autonomous process orchestration.',
    seoKeywords: 'autonomous agents, process automation, AI workflow',
    status: 'published',
    order: 5,
    isActive: true
  },
  {
    title: 'What 23 Years of Web Development Can Teach Us About Building App for the Next Decade?',
    slug: 'what-23-years-of-web-development-can-teach-us',
    author: 'Kumaril Patel',
    category: 'Web Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950',
    shortDescription: 'The Web We Build Today Is Not the Web We Started With. Twenty-three years ago, building the web simply meant writing HTML and hoping the browser would cooperate...',
    content: 'Historical perspective on frontend tooling, distributed systems, edge runtimes, and building enduring digital architectures.',
    tags: ['Web Development', 'Architecture', 'Engineering History'],
    readTime: '5 min read',
    publishDate: 'August 19, 2026',
    isFeatured: false,
    seoTitle: '23 Years of Web Development | Lessons Learned | firevy.co',
    seoDescription: 'Key engineering lessons from over two decades of full-stack web development.',
    seoKeywords: 'web development, software history, modern frontend',
    status: 'published',
    order: 6,
    isActive: true
  },
  {
    title: 'Why Two Software Products with the Same Requirements Can Have Completely Different Development Costs?',
    slug: 'why-two-software-products-have-different-development-costs',
    author: 'Kumaril Patel',
    category: 'Software Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-sky-700 via-indigo-900 to-slate-900',
    shortDescription: "You've probably seen this happen, maybe even to you. Two agencies get the same requirements doc, and somehow one comes back at $60,000 and the other at $150,000....",
    content: 'Detailed cost breakdown explaining the hidden trade-offs between scalable architecture, security hardening, automated testing, and technical debt.',
    tags: ['Software Costs', 'Estimates', 'Architecture'],
    readTime: '5 min read',
    publishDate: 'August 14, 2026',
    isFeatured: false,
    seoTitle: 'Software Development Cost Discrepancies Explained | firevy.co',
    seoDescription: 'Why quotes vary drastically for identical software requirement specifications.',
    seoKeywords: 'software pricing, development estimates, architecture costs',
    status: 'published',
    order: 7,
    isActive: true
  },
  {
    title: 'Why Businesses Are Investing in AI-Driven Business Intelligence Development Services?',
    slug: 'why-businesses-are-investing-in-ai-driven-bi-services',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900',
    shortDescription: 'There is no denying the fact that modern enterprises are creating unprecedented volumes of data. However, making sense of all that data is not easy and requires special skill...',
    content: 'Transforming legacy dashboard metrics into predictive decision-support intelligence engines using modern semantic layers and generative insights.',
    tags: ['Business Intelligence', 'Data Analytics', 'Predictive AI'],
    readTime: '5 min read',
    publishDate: 'August 5, 2026',
    isFeatured: false,
    seoTitle: 'AI-Driven Business Intelligence Services | firevy.co',
    seoDescription: 'How next-generation BI turns raw enterprise data into automated tactical decisions.',
    seoKeywords: 'business intelligence, data analytics, predictive AI, BI solutions',
    status: 'published',
    order: 8,
    isActive: true
  },
  {
    title: 'Why Every Business Needs a Smart Enterprise Strategy in the Age of AI?',
    slug: 'why-every-business-needs-smart-enterprise-strategy-in-age-of-ai',
    author: 'Kumaril Patel',
    category: 'Artificial Intelligence Development',
    featuredImage: '',
    gradientBg: 'bg-gradient-to-br from-teal-700 via-cyan-900 to-slate-950',
    shortDescription: 'AI is no longer something that we see in the far-off future and belongs to only the largest corporations. Rather, it is a technology which can help businesses become more...',
    content: 'Constructing pragmatic roadmap for adopting AI across legacy workflows, customer touchpoints, and internal tooling.',
    tags: ['Enterprise Strategy', 'AI Roadmap', 'Digital Transformation'],
    readTime: '5 min read',
    publishDate: 'July 31, 2026',
    isFeatured: false,
    seoTitle: 'Smart Enterprise Strategy in the Age of AI | firevy.co',
    seoDescription: 'Pragmatic AI strategy frameworks for mid-market and enterprise organizations.',
    seoKeywords: 'enterprise AI strategy, AI roadmap, digital transformation',
    status: 'published',
    order: 9,
    isActive: true
  }
];

export const initialPodcasts = [
  {
    title: 'Episode 01: The Future of Autonomous AI Squads & Cloud Native Scale',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    episodeNumber: 1,
    audioUrl: 'https://firevy.co/podcasts/episode-01.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '42:15 Min',
    description: 'In-depth discussion with Chief Technology Officers on transitioning from standard microservices to self-healing event-driven architectures.',
    host: 'Kumaril Patel & Guest CTOs',
    publishDate: 'February 28, 2026',
    order: 1,
    isActive: true
  },
  {
    title: 'Episode 02: Building Zero-Trust Security for Enterprise Mobile Applications',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
    episodeNumber: 2,
    audioUrl: 'https://firevy.co/podcasts/episode-02.mp3',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '38:40 Min',
    description: 'Demystifying biometric authentication, dynamic payload encryption, and SOC2 / HIPAA compliance in modern React Native & Flutter builds.',
    host: 'firevy.co Security Lab',
    publishDate: 'January 15, 2026',
    order: 2,
    isActive: true
  }
];

export const initialVideoTestimonials = [
  {
    clientName: 'David H. Mitchell',
    designation: 'Chief Information Officer',
    company: 'FinTech Global Ventures',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'firevy.co re-architected our legacy transaction portal with zero downtime, cutting server latency by 65% across 2 million active users.',
    rating: 5,
    order: 1,
    isActive: true
  },
  {
    clientName: 'Elena Rostova',
    designation: 'VP of Product Innovation',
    company: 'OmniHealth Technologies',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Their engineering rigor and agile communication were unmatched. Delivered our iOS & Android healthcare apps two weeks ahead of schedule.',
    rating: 5,
    order: 2,
    isActive: true
  }
];

export const initialClutchReviews = [
  {
    clientName: 'AMR ELATTAR',
    company: 'Enterprise Logistics Corp',
    designation: 'Director of Technology',
    location: 'Saudi Arabia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 4.5,
    headline: 'Technical support was extremely responsive and agile.',
    review: 'firevy.co delivered the software in a timely manner. The team was responsive to requests and feedback, adhering to all strict enterprise compliance criteria.',
    clutchUrl: 'https://clutch.co/profile/firevy',
    scores: { quality: '4.5', schedule: '4.5', cost: '4.5', refer: '5.0' },
    order: 1,
    isActive: true
  },
  {
    clientName: 'Nick Henderson',
    company: 'SaaS Scale-Up Solutions',
    designation: 'Chief Executive Officer',
    location: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    headline: 'I was impressed by their ability to communicate effectively and ship code on time.',
    review: 'firevy.co delivered a user-friendly application that looked great. The client received positive feedback from end users and stakeholders alike.',
    clutchUrl: 'https://clutch.co/profile/firevy',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
    order: 2,
    isActive: true
  },
  {
    clientName: 'Vid Randjelovic',
    company: 'Global Travel & Hospitality',
    designation: 'Head of Engineering',
    location: 'Phuket, Thailand',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    headline: 'Their mobile app skills and overall problem-solving blew me away.',
    review: 'firevy.co created a platform that the client was thrilled with. They were easy to talk to, proactive in architecture reviews, and attentive to edge cases.',
    clutchUrl: 'https://clutch.co/profile/firevy',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
    order: 3,
    isActive: true
  },
  {
    clientName: 'Christine Ine',
    company: 'MedTech Diagnostics',
    designation: 'Product Owner',
    location: 'Rockville, Maryland',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    headline: 'They were excellent at providing the right level of detail in implementation.',
    review: 'firevy.co impressed the client with the quality of their deliverables. They provided consistent designs, achieved milestone goals, and showed deep care.',
    clutchUrl: 'https://clutch.co/profile/firevy',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' },
    order: 4,
    isActive: true
  }
];

export const initialCompanySections = {
  'about-firevy': {
    slug: 'about-firevy',
    title: 'About firevy.co',
    badge: 'COMPANY PROFILE',
    subtitle: 'firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.',
    ctaText: 'Connect Now',
    ctaLink: '/contact',
    heroImage: '/images/about-hero-laptop.svg',
    heroVideo: '',
    content: {
      aboutHeading: 'About firevy.co',
      aboutText: 'firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.',
      visionHeading: 'Our Vision',
      visionText: "It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.",
      missionHeading: 'Our Mission',
      missionText: 'To provide our customers with the precise services and solutions the lowest possible cost.',
      aboutCompany: {
        heading: 'About firevy.co',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
        description: 'firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.',
        buttonText: 'Get In Touch',
        buttonLink: '/contact'
      },
      missionVision: {
        heading: 'We Create, We Enhance, We Deliver',
        subheading: "More Than Expected – That's firevy.co",
        visionTitle: 'Our Vision',
        visionText: "It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.",
        missionTitle: 'Our Mission',
        missionText: 'To provide our customers with the precise services and solutions the lowest possible cost.'
      },
      metricsSection: {
        title: 'ABOUT US',
        description: 'Glance through our creations and presence across industries and borders',
        cards: [
          { metric: '23+', label: 'Years of Experience', image: '/images/first.webp' },
          { metric: '1600+', label: 'Schools Digitalized Globally', image: '/images/homeinnovation/second.webp' },
          { metric: '750+', label: 'Software & Mobile Apps Developed', image: '/images/third.webp' },
          { metric: '100+', label: 'Countries Served Worldwide', image: '/images/fourth.webp' },
          { metric: '2800+', label: 'Satisfied Enterprise Clients', image: '/images/fifth.webp' },
          { metric: '95%', label: 'Client Retention Rate', image: '/images/sixth.webp' },
          { metric: '200+', label: 'Skilled IT Professionals', image: '/images/awards/hdimages/client_seven.webp' },
          { metric: '1500+', label: 'Completed Digital Projects', image: '/images/awards/hdimages/clienttestimonial3.webp' }
        ]
      },
      coreValues: {
        heading: 'Our Core Values',
        subheading: 'Our values are the guiding ethics upon which we have founded and how we strive to conduct our business on a day-to-day basis.',
        values: [
          {
            id: 1,
            title: 'Transparency & Integrity',
            desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.',
            icon: 'ShieldCheck'
          },
          {
            id: 2,
            title: 'Professional Excellence',
            desc: 'We strive to contribute our best to our customers while evoking others to do the same.',
            icon: 'Star'
          },
          {
            id: 3,
            title: 'Customer Centricity',
            desc: 'We closely work with our customer to deliver better solutions with added values.',
            icon: 'Heart'
          },
          {
            id: 4,
            title: 'Quality & Cost Effectiveness',
            desc: 'We set standards in our business and transactions, and be a model for the industry.',
            icon: 'Award'
          },
          {
            id: 5,
            title: 'Global Exposure',
            desc: 'Enabling enterprises worldwide with scalable, compliant digital engineering.',
            icon: 'Globe'
          },
          {
            id: 6,
            title: 'We Accelerate Hiring',
            desc: 'Dedicated engineering teams and agile talent to fast-track your roadmap.',
            icon: 'Users'
          }
        ]
      },
      culture: {
        heading: 'Our Culture',
        paragraphs: [
          'At firevy.co, we have nurtured a culture that inspires innovation and creativity. We believe that success of our company is directly relational to the success of each and every employee. We strive to create a young, fun-loving, open yet professional and hardworking environment.',
          'We empower our team members to move forward professionally by taking ownership and learning from every project they work on. Coming to work and building amazing digital solutions should be fun.'
        ],
        buttonText: 'Explore Careers (Jobs)',
        buttonLink: '/careers',
        images: [
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
        ]
      },
      leadership: {
        heading: 'Our Leadership',
        subheading: 'The outlook, passion and experience of our leaders guides firevy.co.',
        leaders: [
          {
            name: 'Mr. Kumaril Patel',
            designation: 'CEO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            linkedin: 'https://linkedin.com'
          },
          {
            name: 'Mr. Rajendra Patel',
            designation: 'CTO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
            linkedin: 'https://linkedin.com'
          }
        ]
      },
      products: {
        heading: 'Our World Class Products',
        subheading: 'Our proven excellence for product development',
        items: [
          {
            name: 'Vidyalaya',
            tagline: 'Digitizing Schools',
            description: 'Efficient & Innovative School ERP known for its unmatched service since 22+ years. We digitalized 1600+ Schools globally.',
            link: '/products'
          },
          {
            name: 'OccuCare',
            tagline: 'a healthier, more productive workforce',
            description: 'OccuCare empower organizations to protect, maintain and promote the well-being of workers.',
            link: '/products'
          }
        ]
      },
      trustedBrands: {
        heading: 'Trusted By The World’s Leading Brands',
        subheading: 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'
      },
      reviewsSection: {
        title: 'What Our Clients Say'
      },
      insights: {
        heading: 'Insights',
        subheading: 'Based on boundless enthusiasm and challenging spirit, firevy.co is committed to deliver excellence.',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            caption: 'Corporate Headquarters'
          },
          {
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
            caption: 'Occucon Event'
          },
          {
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
            caption: 'Exhibition Booth'
          },
          {
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
            caption: 'Our Team Banquet'
          },
          {
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
            caption: 'Tech Showcase'
          }
        ]
      },
      csr: {
        heading: 'Corporate Social Responsibility',
        subheading: 'Business is an opportunity to help humanity',
        quote: 'Our CSR Programs Accelerate Human Empowerment Among Underserved People And Their Communities Via Three Pillars: Education, Society And Conservation.',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80'
      },
      teamBanner: {
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80'
      },
      cta: {
        title: "Let's Work Together on Your Next Digital Project",
        subtitle: 'We provide custom software development and technology solutions tailored to your brand goals.',
        buttonText: 'Get In Touch',
        buttonLink: '/contact'
      }
    },
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    ],
    highlights: [
      'ISO 27001:2013 Certified Information Security',
      '500+ Digital Products Shipped Globally',
      'Dedicated Agile Engineering Squads',
      '24/7 Global Client Support & SLAs'
    ],
    stats: [
      { label: 'Years of Experience', value: '23+' },
      { label: 'Schools Digitalized Globally', value: '1600+' },
      { label: 'Software & Mobile Apps Developed', value: '750+' },
      { label: 'Countries Served Worldwide', value: '100+' },
      { label: 'Satisfied Enterprise Clients', value: '2800+' },
      { label: 'Client Retention Rate', value: '95%' },
      { label: 'Skilled IT Professionals', value: '200+' },
      { label: 'Completed Digital Projects', value: '1500+' }
    ],
    items: [
      {
        id: 1,
        title: 'Transparency & Integrity',
        desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.'
      },
      {
        id: 2,
        title: 'Professional Excellence',
        desc: 'We strive to contribute our best to our customers while evoking others to do the same.'
      },
      {
        id: 3,
        title: 'Customer Centricity',
        desc: 'We closely work with our customer to deliver better solutions with added values.'
      },
      {
        id: 4,
        title: 'Quality & Cost Effectiveness',
        desc: 'We set standards in our business and transactions, and be a model for the industry.'
      },
      {
        id: 5,
        title: 'Global Exposure',
        desc: 'Enabling enterprises worldwide with scalable, compliant digital engineering.'
      },
      {
        id: 6,
        title: 'We Accelerate Hiring',
        desc: 'Dedicated engineering teams and agile talent to fast-track your roadmap.'
      }
    ],
    seo: {
      metaTitle: 'About Us | We Shape Digital Solutions | firevy.co',
      metaDescription: 'firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise.',
      metaKeywords: 'about firevy, software development company, mobile app development, web engineering',
      canonical: '/company/about-firevy'
    },
    isActive: true
  },
  'ceo-message': {
    slug: 'ceo-message',
    title: 'CEO Message & Vision',
    badge: 'LEADERSHIP INSIGHT',
    subtitle: 'A Message From Our Chief Executive Officer on Engineering Trust, Quality, and Client Partnership.',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    heroVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    content: {
      ceoName: 'Mr. Kumaril Patel',
      ceoDesignation: 'Founder & Chief Executive Officer',
      headline: 'Pioneering The Future Of Software Engineering With Integrity',
      messageParagraphs: [
        'Welcome to firevy.co. When we founded this company in 2002, our philosophy was clear: software engineering is not merely about writing lines of code; it is about building dependable digital solutions that transform businesses and empower human lives.',
        'Over the last 23+ years, the technology landscape has evolved dramatically—from early desktop systems to cloud-native microservices, mobile ubiquity, and now autonomous generative AI. Through all these paradigm shifts, our core commitment has never wavered: zero compromise on quality, relentless technical curiosity, and absolute transparency with our clients.',
        'Every project we build is treated as our own intellectual property. We design resilient architectures that scale seamlessly to millions of users, we deliver on time, and we cultivate lasting relationships built on mutual trust. Thank you for making firevy.co your technology partner.'
      ],
      quote: "True innovation begins when technical rigor meets genuine empathy for the user's journey."
    },
    gallery: [],
    highlights: [
      'Focus on long-term client partnerships',
      'Investing in cutting-edge AI and RAG architectures',
      'Building sustainable, high-impact digital experiences'
    ],
    stats: [
      { label: 'Client Retention Rate', value: '96%' },
      { label: 'Years Leading firevy.co', value: '23+' }
    ],
    items: [],
    seo: {
      metaTitle: 'CEO Message & Leadership Vision | firevy.co',
      metaDescription: 'Read the official message from firevy.co CEO on software engineering excellence and client partnerships.',
      metaKeywords: 'ceo message, firevy leadership, software engineering excellence',
      canonical: '/company/ceo-message'
    },
    isActive: true
  },
  'why-choose-us': {
    slug: 'why-choose-us',
    title: 'Why Choose firevy.co',
    badge: 'VALUE PROPOSITION',
    subtitle: 'We understand the seriousness of your project, and here are the few reasons that why should you join the firevy.co club and get added to the list of 1500+ clients who have been trusting us since 2 decades.',
    ctaText: 'Connect Us',
    ctaLink: '/contact',
    heroImage: '/images/why-choose-hero.svg',
    heroVideo: '',
    content: {
      sectionHeading: 'Why firevy.co?',
      sectionSubtitle: 'Reasons why our clients keep coming back to us',
      ctaBanner: {
        title: 'Ready To Get Started?',
        subtitle: 'Learn how firevy.co can help you build better relationships with your customers. Start a conversation today.',
        buttonText: 'TALK TO TECH EXPERT',
        buttonLink: '/contact'
      },
      newsletter: {
        title: 'Subscribe us and Get the latest updates and news'
      }
    },
    gallery: [],
    highlights: [],
    stats: [],
    items: [
      { id: 1, title: 'Fortune 100 clientele', desc: 'Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 100-1000 clients to list.', iconName: 'Award', iconImage: '' },
      { id: 2, title: 'ISO Certified 27001', desc: 'We are an ISO certified company, hence you can expect genuinity with no frauds or misery.', iconName: 'Globe', iconImage: '' },
      { id: 3, title: '1500+ Success Stories', desc: 'Covered 1500+ satisfied clients for the product (education domain) across the globe.', iconName: 'Star', iconImage: '' },
      { id: 4, title: 'Clients Presence', desc: 'Clients in more than 25 countries across the globe are advocates of firevy.co\'s deliverability, quality, and production.', iconName: 'Users', iconImage: '' },
      { id: 5, title: 'Since', desc: '2002! Yes, having presence in market from more than 20 years and still counting. Choosing us benefits you to get your product deployed under expert technicians as per your expectations.', iconName: 'Calendar', iconImage: '' },
      { id: 6, title: 'Awards & Achievements', desc: 'firevy.co is an award winning and well known name in education domain with amazing ranking on google (SEO) and holding more than 15+ awards for the product.', iconName: 'Award', iconImage: '' },
      { id: 7, title: 'No Hidden Costs', desc: 'Pay for what service you get and nothing else. firevy.co has a strict policy of avoiding any additional charges and taking payments once the work is completely done (in freelancing portals).', iconName: 'FileText', iconImage: '' },
      { id: 8, title: 'Recommendations', desc: '127+ verified reviews on clutch platform, top-rated profile on Upwork (100% client retention and satisfaction noted), amongst top 1% players on freelancer portal (Preferred freelancer badge), and some other recommendation on Good firms, cafeteria , and other review platforms.', iconName: 'Sparkles', iconImage: '' },
      { id: 9, title: 'Free Guidance', desc: 'New to web development or app development? please feel free for any guidance or consultation, firevy.co provides it completely free of charge and keeps no charge for guiding or communicating with new clients in the market.', iconName: 'MessageSquare', iconImage: '' },
      { id: 10, title: 'One Stop Shop', desc: 'Tired of finding & paying for individuals with different skills? firevy.co comes up with a one roof solution, enabling you to get everything from designs to QA and support at a single stop. Allow firevy.co to minimize your efforts.', iconName: 'Briefcase', iconImage: '' },
      { id: 11, title: 'Trust', desc: 'Hire firevy.co and get secured. Handover all your worries and concerns to a 23+ years + 270001 ISO-Certified firm and get rid of any frauds or worries. Not only this, Our reputation is our shadow, hence we cannot at all afford ruining our reputation because of any fraud or misbehaves.', iconName: 'ShieldCheck', iconImage: '' },
      { id: 12, title: 'Enterprise Solutions', desc: 'Enterprise solutions quality guaranteed; covered clients with employee strength more than 500000, and their branches spread in more than 300 locations.', iconName: 'Target', iconImage: '' },
      { id: 13, title: 'Customer Retention', desc: 'Adani group has been part of firevy.co\'s client library since 2012.', iconName: 'Heart', iconImage: '' },
      { id: 14, title: 'Proud To Have', desc: '2 decades of experience in education domain and 10+ of experience in Healthcare domain.', iconName: 'Award', iconImage: '' },
      { id: 15, title: 'Diversified Portfolio', desc: 'We provide diversified services in domain industries like: Cement, power, refinery, logistics, engineering, Finance, Automotive, steel, energy, chemicals.', iconName: 'BookOpen', iconImage: '' },
      { id: 16, title: 'Dedicated', desc: 'Facing issues of unavailability from freelancers? firevy.co comes with full time availability with multiple options of developers incase the one gets unavailable.', iconName: 'Users', iconImage: '' },
      { id: 17, title: 'Cost And ROI', desc: 'firevy.co takes care of your budget and helps you to workout even in low budgets, the idea of going for a MVP comes into picture under such scenarios and we proceed with helping you with a model that helps you to generate ROI first.', iconName: 'FileText', iconImage: '' },
      { id: 18, title: 'Boutique Agency', desc: 'Services that firevy.co provides from a single roof includes: Web Development, Mobile App Development, Cloud & DevOps, Product Development, Software Testing & QA, Digital Marketing, Software Maintenance & Support.', iconName: 'Briefcase', iconImage: '' },
      { id: 19, title: 'Domain Expertise', desc: 'firevy.co comes up with attitude of learning though it has been providing its services from last 2 decades. With time we have evolved to latest technologies and languages like flutter, react-native, ML, react JS, Node JS, etc. Making it easy for you to find all under a single roof.', iconName: 'Globe', iconImage: '' },
      { id: 20, title: 'Secured & Safe', desc: 'firevy.co is bound to keep all your data private by signing NDAs We understand sensitivity of project information, and insured to work on high-security/high-safety systems. In this way we will implement essential steps to protect proprietary and personal data.', iconName: 'ShieldCheck', iconImage: '' },
      { id: 21, title: 'Easy Handover', desc: 'Honest enough to say \'Sorry, not good fit for you\'. Need to switch your preference? please don\'t hesitate at all. firevy.co provides the complete KT (Knowledge Transfer) to next party keep you updated of everything with an easy exit process.', iconName: 'CheckCircle2', iconImage: '' },
      { id: 22, title: 'Enterprise Apps', desc: 'firevy.co is not only focused on on-demand services apps development. But, also have an expert eye on providing enterprise apps and solution like ERP development, CRM development, CRMS, SaaS product development, and Sharepoint/Ninetex solutions too.', iconName: 'Target', iconImage: '' },
      { id: 23, title: 'Problem Solving', desc: 'firevy.co believes in client satisfaction, hence enables you to work or communicate with techie who would not only provide problem solving approaches, but will also help to make a road map and fulfill your requirement in best possible manner.', iconName: 'Sparkles', iconImage: '' },
      { id: 24, title: 'Strategy Development', desc: 'As we follow agile methodology you\'ll find precise and accurate development strategies, but it is not limited to development strategies, we also focus on after development and client retention strategy which has helped us alot to maintain 100% client retention in past.', iconName: 'CheckCircle2', iconImage: '' },
      { id: 25, title: 'Flexible Availability', desc: '40 hours/week, 8 hours/day. -Available on weekends as well (in case of urgent deliveries) would need to be informed before a day. -Would be working dedicatedly on your projects, reporting to you daily with updates and progress.', iconName: 'Users', iconImage: '' },
      { id: 26, title: 'Cost Optimization', desc: 'Choosing firevy.co might be beneficial for you has you can hire a team at a cost of single individual. firevy.co\'s hourly rate are having wide ranges depending upon what developers you choose. Making you comfortable to choose developers according to the complexity of your task.', iconName: 'FileText', iconImage: '' },
      { id: 27, title: 'Focused On UI/UX', desc: 'User experience is quite important and firevy.co pressures it more. We offer clients to go with an initial milestone of designs only. Finalizing it first, and then proceeding it with the final development after complete satisfaction of your on the designs.', iconName: 'Sparkles', iconImage: '' },
      { id: 28, title: 'Timely Delivery', desc: 'A proven track record of on-time delivery. We decide the deadline of the applications in the initial negotiation phases. Setting the timeframe by considering the time to be taken for debugging and training - Enabling you a get a complete road view of your project before you award.', iconName: 'Calendar', iconImage: '' },
      { id: 29, title: 'Digitization', desc: 'Expanding and working on providing modern tech solutions that can involved with help of Artificial intelligence, Machine learning, Virtual reality, and IoT as well - helping us to transform digitally and be a keen competition in the market.', iconName: 'Globe', iconImage: '' },
      { id: 30, title: 'Cloud Computing', desc: 'World is switching to cloud! Everyone is getting rid of online servers and offline storage stuff. firevy.co comes up with an updated support in cloud technologies as well like AWS, Docker, Jenkins, Oracle, DevOps, and many more.', iconName: 'Target', iconImage: '' },
      { id: 31, title: 'Testing Prototypes', desc: 'We know and understand the importance of testing, hence the testing does not come at the end of the project, but we offer you multiple testing levels like unit testing, prototype testing, UI/UX testing, and deployment testing.', iconName: 'ShieldCheck', iconImage: '' },
      { id: 32, title: 'English Proficiency', desc: 'No miscommunication or language barrier. firevy.co comes up with the best and energetic team completely trained and quoted with proficiency in English from Sales to support. Giving you a very homely feel via easy means of communication.', iconName: 'MessageSquare', iconImage: '' },
      { id: 33, title: 'The BRD Policy', desc: 'firevy.co comes up with a policy, where everything would be freezed and pre-written in a BRD (Business requirement document) Work starts only after client\'s approval on the BRD. Let\'s avoid the possible communication gaps and any possible future disputes.', iconName: 'FileText', iconImage: '' },
      { id: 34, title: 'Initial Design Milestone', desc: 'Facing trust issues? Worried about your project budgets? Start with firevy.co at just a short milestone for the rough wireframes and mockups! Essure the quality and decide, wanna proceed with us or not. Release the milestone only if satisfied by the work. No need to pay big amounts in name of advance.', iconName: 'CheckCircle2', iconImage: '' },
      { id: 35, title: 'On-Demand POCs', desc: 'Looking for someone who can provide you quickest solution for a on-demand service app (MVPs)? firevy.co is a perfect place to help you with such POCs at cost efficient rates + quickest delivery through white labeling.', iconName: 'Briefcase', iconImage: '' },
      { id: 36, title: 'Always In Touch', desc: 'Weather it\'s clients, partners, people, or prospects, firevy.co believes in staying touch with everyone and look forward for a better and strong relationship.', iconName: 'Heart', iconImage: '' },
      { id: 37, title: 'Innovation', desc: 'Innovation is birth of new Invention . firevy.co comes up with innovative techniques making your projects/products more precise and up to date with adding modern touches.', iconName: 'Sparkles', iconImage: '' },
      { id: 38, title: 'Support Help', desc: 'We do not believe in keeping relations with clients till development only. We believe in maintaining long term and positive relations with clients by providing them the support and maintenance module as well.', iconName: 'ShieldCheck', iconImage: '' },
      { id: 39, title: 'Flexibility', desc: 'firevy.co also offers to work in different timezone , hence making you comfortable by offering our flexibility.', iconName: 'Globe', iconImage: '' },
      { id: 40, title: 'Support & Maintenance', desc: 'We commit (in writing) to provide software configuration, software orientation, software customization, software maintenance and software backup services', iconName: 'Briefcase', iconImage: '' },
      { id: 41, title: 'Application Ownership', desc: 'We are a white-label service provider where we commit our clients to provide all Graphics, Source code, and related content as it\'s their property. They can utilize it even when they plan to scale or need some upgrades etc.', iconName: 'FileText', iconImage: '' },
      { id: 42, title: 'Clear Communication', desc: 'Our team does not believe in siting in a room and keeps on coding endlessly. Every developer is confident enough in his/her speech, suggestions and solutions. They are not only limited to answer to your query, but also you\'ll find a problem solving approach.', iconName: 'MessageSquare', iconImage: '' },
      { id: 43, title: 'Enthusiasm & Passion', desc: 'Good interpersonal relationship between business partners directly influences the success of both parties. So when a vendor shows genuine care about the client\'s success, it\'s a game-changer.', iconName: 'Users', iconImage: '' },
      { id: 44, title: 'Training Acceptance', desc: 'Always a yes from firevy.co side regarding any challenges that come as an hurdle in the development and other phases. Giving you a complete easy to work with environment where every detailed study would be done by firevy.co team. It\'s an honor to learn new things daily.', iconName: 'CheckCircle2', iconImage: '' },
      { id: 45, title: 'Platform Selection', desc: 'firevy.co helps you to understand the importance of using a particular technology stack with its pros and cons. Letting you to leave all your worries to us and just provide you end results as per your expectations.', iconName: 'Target', iconImage: '' },
      { id: 46, title: 'Quality Assurance', desc: 'QA personnel often perform software testing as soon as developers produce executable code, rather than waiting for the application to be completely coded.', iconName: 'ShieldCheck', iconImage: '' },
      { id: 47, title: 'Evolving Ideas', desc: 'It\'s not always limited to scope or a BRD, No scope document can bound a limit for evolution of new phases in the app. firevy.co helps you to add +1 to your visions, keeping and developing things in a realistic manner.', iconName: 'Sparkles', iconImage: '' },
      { id: 48, title: 'Thought Process', desc: 'Your project is our Responsibility; we do it with integrity; and deliver it with honesty - thought process followed by firevy.co since it\'s existence in the market.', iconName: 'Award', iconImage: '' },
      { id: 49, title: 'Flexible Models', desc: 'We offer clients 3 different models as per their comfort. They can hire developers hourly, dedicatedly, and fixed costs models', iconName: 'Users', iconImage: '' },
      { id: 50, title: 'Result Oriented', desc: 'firevy.co works behind your vision, and makes your vision as its mission and thrive hard to get the results as expected by you.', iconName: 'Target', iconImage: '' },
      { id: 51, title: 'Agility', desc: 'No need to worry of any miscommunication or communication gaps as your project is safe - divided in phases, allocated in sprints, and acknowledged to you via daily reports.', iconName: 'CheckCircle2', iconImage: '' }
    ],
    seo: {
      metaTitle: 'Why Choose Us? | Reasons Why Clients Trust Us | firevy.co',
      metaDescription: 'Discover why leading enterprises and startups trust firevy.co as their primary tech partner. Explore our 51 reasons for client excellence.',
      metaKeywords: 'why choose us, firevy tech partner, software engineering excellence',
      canonical: '/company/why-choose-us'
    },
    isActive: true
  },
  'great-place-to-work': {
    slug: 'great-place-to-work',
    title: 'Great Place To Work',
    badge: 'COMPANY CULTURE',
    subtitle: 'What Makes firevy.co An Inspiring, Fun, and Rewarding Workplace?',
    ctaText: 'Discuss Your Project',
    ctaLink: '/contact',
    heroImage: '/images/great-place-hero.svg',
    heroVideo: '',
    hero: {
      title: 'Great Place To Work',
      subtitle: 'What Makes firevy.co An Inspiring, Fun, and Rewarding Workplace?',
      badge: 'COMPANY CULTURE',
      ctaText: 'Discuss Your Project',
      ctaLink: '/contact',
      heroImage: '/images/great-place-hero.svg'
    },
    content: {
      headline: 'A Culture of Innovation, Ownership, and Mutual Respect',
      description: 'At firevy.co, we nurture talent and encourage ambitious thinking. We believe that great software is crafted by empowered engineers working in an inclusive, transparent environment with continuous growth opportunities.',
      howWeDidIt: {
        heading: 'How We Did It?',
        description: 'It was the first time we tried to offer 360-degree IT services, so getting here took a lot of work. A few years ago, we worked hard for our first client before receiving our first lead. At that very moment, firevy.co chose to group its IT services under a single umbrella. We were fortunate to receive further leads over the following few months, and they were gracious enough to provide us with as much input as we could reasonably process. Additionally, several of our clients began requesting digital marketing solutions. We started a small team for digital marketing from there and have yet to look back. All due to our incredible partners, clients, and, of course, our extraordinarily bright personnel who put in a lot of effort for us.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
      },
      videoBanner: {
        heading: 'What Makes firevy.co Great Place To Work',
        subtitle: 'What Makes firevy.co Great Place to work',
        coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      benefits: [
        {
          id: 1,
          title: 'Sustainability',
          desc: 'For us, responsible entrepreneurship and scientific advancement go hand in hand. Because of this, a large portion of our magic is used to develop sustainable solutions.',
          iconName: 'Globe',
          iconImage: ''
        },
        {
          id: 2,
          title: 'Equal Opportunity Employer',
          desc: 'firevy.co promises not to discriminate against employees because of their race, color, religion, sex, national origin, age, disability, or genetic information.',
          iconName: 'Users',
          iconImage: ''
        },
        {
          id: 3,
          title: 'Are You Ready To Lead?',
          desc: 'Through our dedication to lifelong learning, we will support, encourage, and direct you to achieve your career goals.',
          iconName: 'Award',
          iconImage: ''
        }
      ],
      heroes: {
        heading: 'Meet Our Heroes',
        subtitle: 'The brilliant minds driving innovation, engineering excellence, and creative growth across all client missions.',
        image1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        image2: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        image3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      workplace: {
        heading: 'Life & Workplace At firevy.co',
        subtitle: 'A glimpse into our collaborative workspaces, team celebrations, and vibrant tech culture.',
        gallery: [
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
        ]
      },
      culture: {
        heading: 'Our Culture',
        subtitle: 'Our culture is built on trust, innovation, freedom to explore, and delivering meaningful real-world impact.',
        backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
        pillars: [
          {
            id: 1,
            title: 'Flexibility And Freedom',
            desc: 'We work hard to allow you the freedom to advance your career while maintaining a healthy work-life balance. You can reshape the job to fit your personality.',
            iconName: 'Sparkles',
            iconImage: ''
          },
          {
            id: 2,
            title: 'Innovation Everyday',
            desc: 'We have people, strategy, leadership, management, culture and tools & processes to make sure we innovate every day and keep on improving our services.',
            iconName: 'Globe',
            iconImage: ''
          },
          {
            id: 3,
            title: 'People First',
            desc: 'Meaningful employment, or a job in which one feels effective and has the potential to change the business, is one factor for hiring personnel. They ought to be moving forward, capable of expanding, growing, and advancing their career inside the organization.',
            iconName: 'Users',
            iconImage: ''
          },
          {
            id: 4,
            title: 'Making Impact',
            desc: 'We aim to give you a chance to advance your career and alter the course of history. Our work at firevy.co significantly impacts the world we live in.',
            iconName: 'Target',
            iconImage: ''
          }
        ]
      },
      clutchReviews: {
        heading: 'What Our Clients Say',
        reviews: [
          {
            id: 1,
            name: 'Christine Ine',
            location: 'Rockville, Maryland',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            title: '"They are very professional, respectful, competent, and approachable."',
            quote: "The client was highly pleased with firevy.co's software development work. The team met all timeline goals and kept the cost within budget...",
            rating: '4.5',
            quality: '4.0',
            schedule: '4.5',
            cost: '5.0',
            willingToRefer: '5.0'
          },
          {
            id: 2,
            name: 'Derrick Surratt',
            location: 'Arkansas',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            title: '"firevy.co\'s team communicated effectively..."',
            quote: 'firevy.co successfully implemented all UX and design features on the app. The team has consistently delivered on schedule...',
            rating: '5.0',
            quality: '5.0',
            schedule: '5.0',
            cost: '5.0',
            willingToRefer: '5.0'
          },
          {
            id: 3,
            name: 'Hamidah Nalwoga',
            location: 'Massachusetts',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
            title: '"They\'re able to listen to customer requests and attend..."',
            quote: "firevy.co's updates improved a product's UX per the end customer's requests. The team is personable, reaches their goals...",
            rating: '5.0',
            quality: '5.0',
            schedule: '5.0',
            cost: '5.0',
            willingToRefer: '5.0'
          },
          {
            id: 4,
            name: 'Michael Vance',
            location: 'Austin, Texas',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            title: '"The code is very clean and the architecture is scalable..."',
            quote: 'Working with firevy.co was seamless. They understood requirements, suggested architecture improvements, and exceeded deadlines...',
            rating: '5.0',
            quality: '5.0',
            schedule: '5.0',
            cost: '5.0',
            willingToRefer: '5.0'
          }
        ]
      },
      ctaBanner: {
        title: "Let's work together to make something big happen",
        subtitle: 'We provide custom software development and technology solutions tailored to your brand goals.',
        buttonText: 'CONNECT WITH US',
        buttonLink: '/contact'
      },
      newsletter: {
        title: 'Subscribe us and Get the latest updates and news',
        subtitle: 'Join over 25,000+ engineers, product managers, and leaders getting our weekly innovation digests.',
        buttonText: 'Subscribe Now'
      }
    },
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    ],
    items: [
      {
        id: 1,
        title: 'Sustainability',
        desc: 'For us, responsible entrepreneurship and scientific advancement go hand in hand. Because of this, a large portion of our magic is used to develop sustainable solutions.',
        iconName: 'Globe'
      },
      {
        id: 2,
        title: 'Equal Opportunity Employer',
        desc: 'firevy.co promises not to discriminate against employees because of their race, color, religion, sex, national origin, age, disability, or genetic information.',
        iconName: 'Users'
      },
      {
        id: 3,
        title: 'Are You Ready To Lead?',
        desc: 'Through our dedication to lifelong learning, we will support, encourage, and direct you to achieve your career goals.',
        iconName: 'Award'
      }
    ],
    seo: {
      metaTitle: 'Great Place To Work | Life & Culture at firevy.co',
      metaDescription: 'What makes firevy.co an exciting place to work? Discover our culture, values, team benefits, and awards.',
      metaKeywords: 'great place to work, firevy culture, careers, employee benefits, software company culture',
      canonical: '/company/great-place-to-work'
    },
    isActive: true
  },
  'women-empowerment': {
    slug: 'women-empowerment',
    title: 'Empowering Women At firevy.co',
    badge: 'DIVERSITY & INCLUSION',
    subtitle: 'At firevy.co, We Firmly Believe in Equality of Opportunity, Leadership Inclusion, and Non-Discrimination.',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      headline: 'Championing Women in Tech & Engineering Leadership',
      description: 'We actively foster an ecosystem where women engineers, product leads, and architects excel. From mentorship circles to equal pay guarantees, our diversity initiatives ensure every voice drives meaningful impact.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
    ],
    highlights: [
      '42% Women representation across technical squads',
      'Leadership mentorship program for emerging women leads',
      'Equal pay and equal opportunity commitment',
      'Maternity wellness and flexible return-to-work frameworks'
    ],
    stats: [
      { label: 'Women in Tech Roles', value: '42%' },
      { label: 'Leadership Roles Held by Women', value: '38%' }
    ],
    items: [
      { id: 1, title: 'Women In Tech Mentorship', desc: 'Pairing junior engineers with senior women architects for technical growth.' },
      { id: 2, title: 'Flexible Work Policies', desc: 'Customized hybrid work schedules supporting family and professional goals.' },
      { id: 3, title: 'Equal Growth Opportunities', desc: 'Unbiased performance reviews and leadership grooming paths.' }
    ],
    seo: {
      metaTitle: 'Women Empowerment in Tech | firevy.co',
      metaDescription: 'Learn about our initiatives supporting women in software engineering and leadership.',
      metaKeywords: 'women in tech, diversity and inclusion, women empowerment firevy',
      canonical: '/company/women-empowerment'
    },
    isActive: true
  },
  csr: {
    slug: 'csr',
    title: 'Corporate Social Responsibility (CSR)',
    badge: 'COMMUNITY & IMPACT',
    subtitle: 'संकल्प — Excellence and Responsibility Are the Foundation of Everything We Do.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      sanskritWord: 'संकल्प',
      headline: 'Meaningful Change for Our People, Our Planet, and Future Generations',
      description: "Excellence and responsibility aren't just values we uphold, they're the foundation of everything we do. Our CSR initiatives reflect our unwavering commitment for creating meaningful impact, not as an obligation, but as a core expression of who we are. We believe that real change begins with accountability for our people, our planet, and future generations. Because for us, making a difference isn't just an ambition, it's a responsibility we proudly embrace."
    },
    gallery: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80'
    ],
    highlights: [
      'Donations to local schools and students',
      'Summer heat relief and nutrition drives',
      'Tech literacy and code education workshops',
      'Tree planting and green campus drives'
    ],
    stats: [
      { label: 'Students Supported', value: '3,500+' },
      { label: 'Trees Planted', value: '5,000+' }
    ],
    items: [
      {
        id: 1,
        title: 'Donations to students as a part of our CSR',
        desc: 'We donated supplies to our local schools to support children in education.',
        img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        title: 'We believe in giving back to the community',
        desc: 'Our CSR efforts are focused on helping more children feel happy and stay healthy.',
        img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        title: "Together, we're cooling the summer heat and spreading joy",
        desc: 'We reached out to our community by distributing refreshing buttermilk sachets and supplies.',
        img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
      }
    ],
    seo: {
      metaTitle: 'Corporate Social Responsibility (CSR) | firevy.co',
      metaDescription: 'Discover how firevy.co gives back through meaningful Corporate Social Responsibility (CSR) initiatives.',
      metaKeywords: 'firevy csr, corporate social responsibility, community outreach',
      canonical: '/company/csr'
    },
    isActive: true
  },
  'delivery-models': {
    slug: 'delivery-models',
    title: 'Delivery Models',
    badge: 'DELIVERY FRAMEWORK',
    subtitle: 'Proven Global Delivery Frameworks Engineered for Speed, Quality, and Predictable Results.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      headline: 'Scalable Delivery Frameworks Aligned to Your Business Goals',
      description: 'Whether you require an onsite engineering lead, an agile offshore squad, or a hybrid 24/7 delivery cadence, firevy.co adapts our methodology to your technical and operational requirements.'
    },
    gallery: [],
    highlights: [
      '2-week agile sprint cycles with continuous integration',
      'Complete intellectual property protection',
      'Daily standups, weekly demos, and transparent Jira boards',
      'SOC2 and ISO certified security protocols'
    ],
    stats: [
      { label: 'Sprint Delivery Accuracy', value: '98.5%' },
      { label: 'Code Coverage Requirement', value: '> 85%' }
    ],
    items: [
      {
        id: 1,
        title: 'Offshore Delivery Model',
        shortDesc: 'Cost-effective high-throughput engineering from our dedicated development centers.',
        detailedContent: 'Our offshore centers in India offer senior engineering squads operating across specialized tech stacks, providing 24/7 cycle overlap and major cost savings.',
        icon: 'Globe',
        features: ['Up to 60% cost efficiency', 'Dedicated full-time squads', 'Complete IP protection']
      },
      {
        id: 2,
        title: 'Hybrid / Blended Delivery',
        shortDesc: 'Local tech leadership paired with offshore development execution.',
        detailedContent: 'Combines an onsite/nearshore solutions architect with offshore developers, giving you local accountability and offshore scaling power.',
        icon: 'Layers',
        features: ['Local project management', 'Real-time timezone collaboration', 'Scalable offshore execution']
      },
      {
        id: 3,
        title: 'Dedicated Agile Pods',
        shortDesc: 'Autonomous cross-functional pods with tech lead, QA, and DevOps.',
        detailedContent: 'Self-contained squads that integrate directly into your Jira workflows, managing backlog grooming, implementation, and automated deployment.',
        icon: 'Users',
        features: ['Turnkey squad setup in 5 days', 'Continuous deployment pipelines', 'Scalable pod sizing']
      }
    ],
    seo: {
      metaTitle: 'Software Delivery Models | firevy.co',
      metaDescription: 'Explore our agile software delivery models: offshore, hybrid, and dedicated engineering pods.',
      metaKeywords: 'software delivery models, offshore development, agile delivery',
      canonical: '/company/delivery-models'
    },
    isActive: true
  },
  'engagement-models': {
    slug: 'engagement-models',
    title: 'Engagement Models',
    badge: 'BUSINESS COLLABORATION',
    subtitle: 'Flexible Partnership Models Designed to Match Your Project Scope, Budget, and Timeline.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      headline: 'Transparent, Predictable, and Value-Driven Pricing Structures',
      description: 'Choose from fixed price milestones for well-defined scopes, time & material for dynamic iterative products, or dedicated developer retainers for continuous engineering scaling.'
    },
    gallery: [],
    highlights: [
      'Zero hidden costs with detailed itemized invoicing',
      'Flexible month-to-month contracts with 2-week notice period',
      'Risk-free 2-week pilot evaluation',
      'Direct developer communication via Slack/Teams'
    ],
    stats: [
      { label: 'Client Satisfaction', value: '100%' },
      { label: 'Contract Flexibility', value: 'High' }
    ],
    items: [
      {
        id: 1,
        title: 'Dedicated Team Model',
        shortDesc: 'Full-time dedicated developers working exclusively for your product.',
        detailedContent: 'Best for long-term projects, scale-ups, and enterprise roadmap execution. Developers operate as a direct extension of your in-house engineering team.',
        icon: 'Users',
        pricing: 'Monthly Retainer'
      },
      {
        id: 2,
        title: 'Time & Material (T&M)',
        shortDesc: 'Pay only for actual hours worked on evolving product requirements.',
        detailedContent: 'Ideal for early-stage MVPs and dynamic agile iterations where features evolve based on live user feedback.',
        icon: 'Zap',
        pricing: 'Hourly / Bi-weekly Invoicing'
      },
      {
        id: 3,
        title: 'Fixed Price / Milestone Model',
        shortDesc: 'Pre-defined scope, fixed timeline, and guaranteed budget delivery.',
        detailedContent: 'Ideal for well-documented scopes, RFP tenders, and compliance deliverables with strict milestone sign-offs.',
        icon: 'ShieldCheck',
        pricing: 'Milestone-based Payments'
      }
    ],
    seo: {
      metaTitle: 'Client Engagement Models | firevy.co',
      metaDescription: 'Explore our flexible engagement models: Dedicated Developers, Time & Material, and Fixed Price.',
      metaKeywords: 'engagement models, hire developers, fixed price software development',
      canonical: '/company/engagement-models'
    },
    isActive: true
  },
  'development-methodology': {
    slug: 'development-methodology',
    title: 'Development Methodology',
    badge: 'ENGINEERING PROCESS',
    subtitle: 'Our 8-Step Milestone-Driven Lifecycle Ensuring Clean Architecture, High Velocity, and Defect-Free Releases.',
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      headline: 'Engineering Rigor Meets Agile Velocity',
      description: 'We follow a battle-tested 8-stage software development lifecycle (SDLC) combining Scrum ceremonies, automated CI/CD testing, and multi-tier security audits to deliver resilient digital systems.'
    },
    gallery: [],
    highlights: [
      'Automated SonarQube static code analysis',
      'Continuous integration and automated regression suites',
      'Dual-tier peer review on every pull request',
      'Zero-downtime blue/green cloud deployments'
    ],
    stats: [
      { label: 'Defect Free Rate', value: '99.2%' },
      { label: 'Sprint Velocity Stability', value: '96%' }
    ],
    items: [
      { step: 1, title: 'Discovery & Requirements Gathering', desc: 'Deep dive into business goals, user personas, architecture constraints, and API contracts.' },
      { step: 2, title: 'UI/UX Design & Interactive Prototypes', desc: 'Design systems, accessible component tokens, and high-fidelity Figma prototypes.' },
      { step: 3, title: 'Architecture & Tech Stack Blueprinting', desc: 'Designing database schemas, microservice boundaries, caching, and cloud infrastructure.' },
      { step: 4, title: 'Iterative Agile Development', desc: '2-week sprint cadences, clean modular code, and daily standups.' },
      { step: 5, title: 'Comprehensive Quality Assurance', desc: 'Automated unit, integration, performance, and multi-device matrix testing.' },
      { step: 6, title: 'Security & Compliance Auditing', desc: 'Vulnerability assessments, penetration testing, and SOC2/HIPAA compliance validation.' },
      { step: 7, title: 'Deployment & Go-Live Staging', desc: 'Zero-downtime deployment pipelines with rollback protections and CDN caching.' },
      { step: 8, title: 'Post-Launch Support & Optimization', desc: '24/7 monitoring, performance tuning, and SLA-backed maintenance.' }
    ],
    seo: {
      metaTitle: 'Software Development Methodology & Process | firevy.co',
      metaDescription: 'Discover our 8-step agile software engineering process from discovery to automated cloud deployment.',
      metaKeywords: 'software development methodology, agile process, SDLC, sprint planning',
      canonical: '/company/development-methodology'
    },
    isActive: true
  },
  'our-team': {
    slug: 'our-team',
    title: 'Our Team',
    badge: 'ENGINEERING TALENT',
    subtitle: 'Meet the team of innovative, driven and passionate individuals. We cultivate the diverse talents of our team and leverage their extraordinary perspectives and innovative ideas to make firevy.co the industry leader.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    ctaText: 'Connect Now',
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Management Team',
        content: 'The outlook, passion and experience of our leaders guides firevy.co.'
      }
    ],
    seo: {
      metaTitle: 'Our Team | Innovative & Passionate Minds | firevy.co',
      metaDescription: 'Meet the team of innovative, driven and passionate individuals at firevy.co. We cultivate diverse talents to make firevy.co the industry leader.',
      canonical: '/company/our-team'
    },
    isActive: true
  },
  'events-activities': {
    slug: 'events-activities',
    title: 'Events & Celebrations',
    badge: 'CULTURE & LIFE',
    subtitle: 'At firevy.co, we believe that celebrating success is just as important as achieving it. Our culture thrives on a balanced blend of dedication and joyful celebration.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    ctaText: "Let's Talk",
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Life @firevy.co',
        content: 'At firevy.co, we constantly try new ways to make our work environment, enjoyable and inspiring. From company outings to birthdays, we just need a reason to celebrate. Have a glimpse at life and culture @firevy.co!'
      }
    ],
    seo: {
      metaTitle: 'Events & Celebrations | Life @ firevy.co | firevy.co',
      metaDescription: 'At firevy.co, we believe that celebrating success is just as important as achieving it. Have a glimpse at life and culture @ firevy.co!',
      canonical: '/company/events-activities'
    },
    isActive: true
  },
  'download-brochure': {
    slug: 'download-brochure',
    title: "Let's create something big together!",
    badge: 'CORPORATE OVERVIEW',
    subtitle: 'firevy.co is a Leading software and app development company with offices worldwide. If you want to know more about our business.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Connect Us',
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Easily & Quickly Downloadable Information',
        content: 'As a global leader in the software development market, we have 2800+ satisfied clients in 30+ countries. Established in 2002, we are a leading Mobile App Development Company in the USA with ISO 27001:2013 certification.'
      }
    ],
    seo: {
      metaTitle: 'Download Brochure | Easily & Quickly Downloadable Information | firevy.co',
      metaDescription: 'Download firevy.co corporate digital brochure. firevy.co is a leading software and app development company with offices worldwide.',
      canonical: '/company/download-brochure'
    },
    isActive: true
  },
  brochure: {
    slug: 'brochure',
    title: "Let's create something big together!",
    badge: 'CORPORATE OVERVIEW',
    subtitle: 'firevy.co is a Leading software and app development company with offices worldwide. If you want to know more about our business.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Connect Us',
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Easily & Quickly Downloadable Information',
        content: 'As a global leader in the software development market, we have 2800+ satisfied clients in 30+ countries. Established in 2002, we are a leading Mobile App Development Company in the USA with ISO 27001:2013 certification.'
      }
    ],
    seo: {
      metaTitle: 'Download Brochure | Easily & Quickly Downloadable Information | firevy.co',
      metaDescription: 'Download firevy.co corporate digital brochure. firevy.co is a leading software and app development company with offices worldwide.',
      canonical: '/company/download-brochure'
    },
    isActive: true
  },
  'awards-recognition': {
    slug: 'awards-recognition',
    title: 'Recognized for Excellence',
    badge: 'AWARDS & RECOGNITION',
    subtitle: 'Celebrating our journey of innovation, excellence, and the prestigious recognitions we have earned along the way.',
    heroImage: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'View Our Accolades',
    ctaLink: '/company/awards-recognition',
    contentSections: [
      {
        title: 'Proud To Have Picked These Up Along The Way',
        content: 'Over two decades of engineering rigor recognized by leading global technology review councils, enterprise platforms, and industry associations.'
      }
    ],
    seo: {
      metaTitle: 'Awards & Recognition | firevy.co',
      metaDescription: 'Explore our prestigious industry honors, Clutch awards, and GoodFirms recognitions.',
      canonical: '/company/awards-recognition'
    },
    isActive: true
  },
  'insightful-videos': {
    slug: 'insightful-videos',
    title: 'Insightful Videos',
    badge: 'VIDEO SHOWCASE',
    subtitle: "Now unleash the power of new ideas with our award-winning mobile app development company in USA. It's time to convert your ideas to life, whether you want solutions that work on iOS, Android, or both. Contact us now!",
    heroImage: '/images/homeinnovation/eleventh.webp',
    ctaText: "Let's Talk",
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Unveiling Our Innovative Solution',
        content: "From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation."
      }
    ],
    seo: {
      metaTitle: 'Insightful Videos | Unveiling Our Innovative Solutions | firevy.co',
      metaDescription: 'Explore insightful video showcases, technology demos, and client success stories from firevy.co.',
      canonical: '/company/insightful-videos'
    },
    isActive: true
  },
  blog: {
    slug: 'blog',
    title: 'AI in Mobile App Development: Tools That Save Time and Money',
    badge: 'FEATURED ARTICLE',
    subtitle: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Read the full blog',
    ctaLink: '/company/blog',
    content: {
      heroFeatured: {
        brandText: 'firevy.co',
        badge: 'FEATURED ARTICLE',
        tag: '</> AI TOOLS',
        title: 'AI in Mobile App Development: Tools That Save Time and Money',
        subtext: 'Next-Gen Engineering Insights',
        category: 'Artificial Intelligence Development',
        author: 'Kumaril Patel',
        date: 'March 6, 2026',
        readTime: '6 min read',
        excerpt: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
        buttonText: 'Read the full blog',
        image: '',
        gradientBg: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'
      },
      secondaryFeatured: [
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> STARTUP",
          title: "Trending Tech Startup Ideas for Entrepreneurs Looking to Scale Fast",
          subtext: "Fast-Growth Scale Strategy",
          category: "IT Companies",
          date: "November 6, 2025",
          readTime: "5 min read",
          excerpt: "Discover high-growth technology startup concepts and execution roadmaps designed to help modern founders move from validation to market leadership.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> MOBILE",
          title: "Why Investing in Legacy Modernization Services is Critical for Business Success?",
          subtext: "Enterprise Architecture Evolution",
          category: "Mobile App Development",
          date: "November 4, 2025",
          readTime: "6 min read",
          excerpt: "Legacy modernization unlocks unprecedented operational agility, system security, and scalability for forward-thinking modern enterprises.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-sky-700 via-cyan-800 to-slate-900",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> DESIGN",
          title: "Why Software Design Principles Matter for Successful IT Solutions?",
          subtext: "Clean Architecture Principles",
          category: "Software Development",
          date: "October 30, 2025",
          readTime: "6 min read",
          excerpt: "Adhering to proven software design patterns ensures long-term maintainability, defect reduction, and accelerated feature velocity.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> WEB TECH",
          title: "How to Scale Your IT Business with White Label Web Development Solutions?",
          subtext: "Partner Growth Solutions",
          category: "Web Development",
          date: "October 31, 2025",
          readTime: "5 min read",
          excerpt: "Leverage dedicated white-label engineering capabilities to expand your service portfolio, increase client retention, and maximize margins.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900",
          image: "",
          link: ""
        }
      ],
      sidebar: {
        getInTouchTitle: 'Get in Touch',
        buttonText: 'Talk to expert',
        topCategoryTitle: 'Top Category',
        categories: [
          { name: "Mobile App Development", count: 184 },
          { name: "Software Development", count: 134 },
          { name: "Web Development", count: 195 },
          { name: "IT Companies", count: 77 },
          { name: "Android Development", count: 64 },
          { name: ".Net Development", count: 19 },
          { name: "Hire Developers", count: 34 },
          { name: "iOS Development", count: 67 },
          { name: "Blockchain Development", count: 4 },
          { name: "Artificial Intelligence Development", count: 37 }
        ]
      },
      ctaBanner: {
        title: "Let's Work Together On Your Next Digital Project",
        subtitle: "Got a project in mind? We'd love to talk about how we can help you build high performance scalable products.",
        buttonText: "Request A Proposal",
        buttonLink: "/contact"
      },
      newsletter: {
        title: "Subscribe us and Get the latest updates and news",
        subtitle: "Stay updated with our latest insights, innovations, and engineering breakthroughs."
      }
    },
    seo: {
      metaTitle: 'Tech Insights & Blog | firevy.co',
      metaDescription: 'Read top tech articles, mobile app development guides, AI trends, and software strategy by firevy.co experts.',
      canonical: '/company/blog'
    },
    isActive: true
  },
  blogs: {
    slug: 'blogs',
    title: 'AI in Mobile App Development: Tools That Save Time and Money',
    badge: 'FEATURED ARTICLE',
    subtitle: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Read the full blog',
    ctaLink: '/company/blog',
    content: {
      heroFeatured: {
        brandText: 'firevy.co',
        badge: 'FEATURED ARTICLE',
        tag: '</> AI TOOLS',
        title: 'AI in Mobile App Development: Tools That Save Time and Money',
        subtext: 'Next-Gen Engineering Insights',
        category: 'Artificial Intelligence Development',
        author: 'Kumaril Patel',
        date: 'March 6, 2026',
        readTime: '6 min read',
        excerpt: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization.',
        buttonText: 'Read the full blog',
        image: '',
        gradientBg: 'bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]'
      },
      secondaryFeatured: [
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> STARTUP",
          title: "Trending Tech Startup Ideas for Entrepreneurs Looking to Scale Fast",
          subtext: "Fast-Growth Scale Strategy",
          category: "IT Companies",
          date: "November 6, 2025",
          readTime: "5 min read",
          excerpt: "Discover high-growth technology startup concepts and execution roadmaps designed to help modern founders move from validation to market leadership.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> MOBILE",
          title: "Why Investing in Legacy Modernization Services is Critical for Business Success?",
          subtext: "Enterprise Architecture Evolution",
          category: "Mobile App Development",
          date: "November 4, 2025",
          readTime: "6 min read",
          excerpt: "Legacy modernization unlocks unprecedented operational agility, system security, and scalability for forward-thinking modern enterprises.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-sky-700 via-cyan-800 to-slate-900",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> DESIGN",
          title: "Why Software Design Principles Matter for Successful IT Solutions?",
          subtext: "Clean Architecture Principles",
          category: "Software Development",
          date: "October 30, 2025",
          readTime: "6 min read",
          excerpt: "Adhering to proven software design patterns ensures long-term maintainability, defect reduction, and accelerated feature velocity.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950",
          image: "",
          link: ""
        },
        {
          brandText: "firevy.co",
          badge: "FEATURED ARTICLE",
          tag: "</> WEB TECH",
          title: "How to Scale Your IT Business with White Label Web Development Solutions?",
          subtext: "Partner Growth Solutions",
          category: "Web Development",
          date: "October 31, 2025",
          readTime: "5 min read",
          excerpt: "Leverage dedicated white-label engineering capabilities to expand your service portfolio, increase client retention, and maximize margins.",
          buttonText: "Read the full blog",
          bg: "bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900",
          image: "",
          link: ""
        }
      ],
      sidebar: {
        getInTouchTitle: 'Get in Touch',
        buttonText: 'Talk to expert',
        topCategoryTitle: 'Top Category',
        categories: [
          { name: "Mobile App Development", count: 184 },
          { name: "Software Development", count: 134 },
          { name: "Web Development", count: 195 },
          { name: "IT Companies", count: 77 },
          { name: "Android Development", count: 64 },
          { name: ".Net Development", count: 19 },
          { name: "Hire Developers", count: 34 },
          { name: "iOS Development", count: 67 },
          { name: "Blockchain Development", count: 4 },
          { name: "Artificial Intelligence Development", count: 37 }
        ]
      },
      ctaBanner: {
        title: "Let's Work Together On Your Next Digital Project",
        subtitle: "Got a project in mind? We'd love to talk about how we can help you build high performance scalable products.",
        buttonText: "Request A Proposal",
        buttonLink: "/contact"
      },
      newsletter: {
        title: "Subscribe us and Get the latest updates and news",
        subtitle: "Stay updated with our latest insights, innovations, and engineering breakthroughs."
      }
    },
    seo: {
      metaTitle: 'Tech Insights & Blog | firevy.co',
      metaDescription: 'Read top tech articles, mobile app development guides, AI trends, and software strategy by firevy.co experts.',
      canonical: '/company/blog'
    },
    isActive: true
  },
  careers: {
    slug: 'careers',
    title: 'Build your Future with us',
    badge: 'JOIN OUR TEAM',
    subtitle: 'Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Explore Openings',
    ctaLink: '/careers',
    contentSections: [
      {
        title: 'Life at firevy.co',
        content: 'A collaborative culture, flexible environment, continuous upskilling allowances, and global enterprise projects.'
      }
    ],
    seo: {
      metaTitle: 'Build your Future with us | Careers at firevy.co',
      metaDescription: 'Explore open software engineering, mobile development, and UI/UX design positions at firevy.co.',
      canonical: '/careers'
    },
    isActive: true
  },
  podcast: {
    slug: 'podcast',
    title: 'Welcome To firevy.co Podcast',
    badge: 'TECH DIALOGUE',
    subtitle: 'Tune in to insightful discussions with engineering leads, CTOs, and founders on scaling digital architectures, Generative AI in enterprise, and modern software leadership.',
    heroImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Listen on Spotify',
    ctaLink: 'https://spotify.com',
    contentSections: [
      {
        title: 'Latest Episodes',
        content: 'Conversations with global industry leaders unraveling architecture patterns, cloud transformations, and AI workflows.'
      }
    ],
    seo: {
      metaTitle: 'Podcast | Tech Discussions & Leadership Insights | firevy.co',
      metaDescription: 'Listen to the firevy.co tech podcast covering software engineering, cloud architecture, and AI.',
      canonical: '/company/podcast'
    },
    isActive: true
  },
  'client-testimonials': {
    slug: 'client-testimonials',
    title: 'Client Testimonials',
    badge: 'CLIENT SUCCESS',
    subtitle: 'Hear firsthand from global founders, CTOs, and directors how firevy.co engineered robust software solutions to accelerate their growth.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Work With Us',
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'What Our Clients Say',
        content: 'Verified reviews and ratings from our valued partners across North America, Europe, Australia, and Asia.'
      }
    ],
    seo: {
      metaTitle: 'Client Testimonials & Reviews | firevy.co',
      metaDescription: 'Read authentic client testimonials and reviews from founders, CEOs, and CTOs who partnered with firevy.co.',
      canonical: '/company/client-testimonials'
    },
    isActive: true
  },
  'video-testimonial': {
    slug: 'video-testimonial',
    title: 'Stories From Our Clients!',
    badge: 'VIDEO TESTIMONIALS',
    subtitle: "Voice of our Customers, Their trust transformed into words. You'll find excerpts from our clients, reflecting their views on client service, creativity, process, communication style, and more.",
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Get In Touch',
    ctaLink: '/contact',
    contentSections: [
      {
        title: 'Video Testimonials',
        content: 'Watch video success stories from satisfied clients around the world.'
      }
    ],
    seo: {
      metaTitle: 'Video Testimonials | Client Video Reviews | firevy.co',
      metaDescription: 'Watch authentic video testimonials from our global clients. Hear directly from founders and CTOs.',
      canonical: '/company/video-testimonial'
    },
    isActive: true
  },
  'clutch-testimonial': {
    slug: 'clutch-testimonial',
    title: 'Our Clients Do The Talking!',
    badge: 'CLUTCH REVIEWS',
    subtitle: 'Visit Clutch to read our 100% genuine and authentic testimonials given by customers after availing our services. These testimonials from our happy clients prove that we deliver nothing but only the best to our customers regardless of the project type and size.',
    heroImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    ctaText: 'Get In Touch',
    ctaLink: '/contact',
    contentSections: [
      {
        title: "Don't Take Our Word For It, Take Our Clients'",
        content: 'Positive Clutch reviews are a clear sign of teamwork, good service, and improved project management. Our team takes pride in our ability to think beyond the box when it comes to producing cutting-edge digital solutions'
      }
    ],
    seo: {
      metaTitle: 'Clutch Testimonials & Reviews | Verified 5.0 Star Ratings | firevy.co',
      metaDescription: 'Read verified Clutch reviews for firevy.co. Discover 100% authentic client feedback and project summaries.',
      canonical: '/company/clutch-testimonial'
    },
    isActive: true
  }
};

