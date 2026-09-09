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
    shortDescription: '"If I increase the order to 500 units, can you give me 15% off?" That question used to go to a sales representative. Now it might go to an autonomous AI agent.',
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
    shortDescription: 'A mid-sized company adds AI to its product. The pilot is doing well. Six months later, someone asks for a second AI feature. The team realizes they need composable architectures.',
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
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    heroVideo: '',
    content: {
      aboutHeading: 'About firevy.co',
      aboutText: 'firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.',
      visionHeading: 'Our Vision',
      visionText: "It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.",
      missionHeading: 'Our Mission',
      missionText: 'To provide our customers with the precise services and solutions at the lowest possible cost with highest engineering standards.'
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
      { label: 'Years Experience', value: '23+' },
      { label: 'Satisfied Clients', value: '2800+' },
      { label: 'Projects Completed', value: '1500+' },
      { label: 'IT Professionals', value: '200+' }
    ],
    items: [
      {
        id: 1,
        title: 'Transparency & Integrity',
        desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.'
      },
      {
        id: 2,
        title: 'Passion For Excellence',
        desc: 'We strive to contribute our best to our customers while evoking others to do the same.'
      },
      {
        id: 3,
        title: 'Customer Sovereignty',
        desc: 'We closely work with our customer to deliver better solutions with added values.'
      },
      {
        id: 4,
        title: 'Leadership By Examples',
        desc: 'We set standards in our business and transactions, and be a model for the industry.'
      },
      {
        id: 5,
        title: 'Responsibility',
        desc: 'We take personal responsibility for our actions and we strive to exceed your expectations.'
      },
      {
        id: 6,
        title: 'Continuous Learning',
        desc: 'We always upgrade our skills to successfully adapt to the changing technologies.'
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
    subtitle: 'Discover Why Leading Enterprises, ISVs, and Startups Trust firevy.co as Their Primary Tech Partner.',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      heading: 'Engineered for Scale, Built for Long-Term Value',
      intro: 'We combine 23+ years of domain expertise with top 3% engineering talent to build software solutions that perform flawlessly under peak loads.'
    },
    gallery: [],
    highlights: [
      '99.4% On-time and within budget project delivery',
      'Direct communication with senior engineers and architects',
      'Full IP and source code ownership from day one',
      'Strict SOC2 & ISO 27001 data security compliance'
    ],
    stats: [
      { label: 'On-Time Delivery', value: '99.4%' },
      { label: 'Enterprise NPS', value: '88+' }
    ],
    items: [
      { id: 1, title: 'Top 3% Vetted Talent', desc: 'Our developers pass rigorous technical screenings and architecture challenges.' },
      { id: 2, title: 'Agile 2-Week Sprints', desc: 'Predictable deliverables, weekly demos, and transparent Jira task tracking.' },
      { id: 3, title: 'Battle-Tested Security', desc: 'ISO 27001:2013 certified processes with end-to-end data encryption.' },
      { id: 4, title: 'Scalable Cloud blueprinted', desc: 'AWS, Azure, and GCP certified engineers designing resilient microservices.' },
      { id: 5, title: 'Zero Vendor Lock-in', desc: 'You own 100% of the intellectual property, repositories, and CI/CD pipelines.' },
      { id: 6, title: '24/7 Global Support SLAs', desc: 'Dedicated site reliability engineers ensuring 99.99% system uptime.' }
    ],
    seo: {
      metaTitle: 'Why Choose firevy.co | Enterprise Software Partner',
      metaDescription: 'Discover the firevy.co advantages: senior engineering squads, agile delivery, and enterprise security.',
      metaKeywords: 'why choose firevy, custom software partner, top software developers',
      canonical: '/company/why-choose-us'
    },
    isActive: true
  },
  'great-place-to-work': {
    slug: 'great-place-to-work',
    title: 'Great Place To Work',
    badge: 'COMPANY CULTURE',
    subtitle: 'What Makes firevy.co An Inspiring, Fun, and Rewarding Workplace?',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    heroVideo: '',
    content: {
      headline: 'A Culture of Innovation, Ownership, and Mutual Respect',
      description: 'At firevy.co, we nurture talent and encourage ambitious thinking. We believe that great software is crafted by empowered engineers working in an inclusive, transparent environment with continuous growth opportunities.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    ],
    highlights: [
      'Certified Great Place to Work organization',
      'Comprehensive wellness and medical coverage',
      'Annual tech upskilling and certification allowances',
      'Hybrid flexible work culture'
    ],
    stats: [
      { label: 'Employee Satisfaction Score', value: '4.8 / 5' },
      { label: 'Average Team Retention', value: '4.5 Yrs' }
    ],
    items: [
      { id: 1, title: 'Continuous Learning', desc: 'Full sponsorship for cloud certifications and technical conferences.' },
      { id: 2, title: 'Work-Life Balance', desc: 'Flexible working hours, remote-friendly policies, and wellness sabbaticals.' },
      { id: 3, title: 'Merit-Driven Growth', desc: 'Fast-track career advancements based on contributions, not seniority.' },
      { id: 4, title: 'Camaraderie & Fun', desc: 'Quarterly team retreats, hackathons, gaming tournaments, and celebrations.' }
    ],
    seo: {
      metaTitle: 'Great Place To Work | firevy.co Careers & Culture',
      metaDescription: 'Discover our work culture, values, and why tech talent chooses firevy.co.',
      metaKeywords: 'great place to work, firevy culture, software engineering careers',
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
  }
};
