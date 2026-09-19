import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import SeasonedExpertsTeamSection from '../common/SeasonedExpertsTeamSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutKeyMetrics from '../home/AboutKeyMetrics';
import WorkProcessGrid from '../home/WorkProcessGrid';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Layers,
  Zap,
  CheckCircle,
  Building2,
  Check
} from 'lucide-react';

// Dedicated configurations for the 9 backend & specialized developer categories
export const techConfigurations = {
  'hire-backend-developers': {
    techKey: 'hire-backend-developers',
    title: 'Hire Backend Developers',
    techName: 'Backend',
    metaTitle: 'Hire Dedicated Backend Developers | Senior Backend Engineers at $21/Hr',
    metaDesc: 'Hire dedicated backend developers from Firevy.co for high-concurrency microservices, cloud APIs, database optimization, and distributed architectures. Instant onboarding at $21/hr.',
    canonical: '/services/hire-backend-developers',
    heroDesc: 'We are one of the leading backend web development companies. Hire backend developers in USA that quickly achieve business objectives.',
    brandColor: '#006095',
    accentColor: '#00ADD8',
    logoText: 'Backend',
    isBackendCustomGraphic: true,
    section2Title: 'Remote Backend Developers Available For Hire',
    section2Desc: 'The backend programmers working on our backend are experienced in creating complicated functional protocols. In addition, web backend developers have an outstanding amount of hands-on knowledge in using the most recent technologies, which allows them to provide you with individualized, secure, and robust backend layers for your website and apps. Hiring Backend Programmers to create cloud-based, scalable backend solutions for mobile and web-based systems to cater to the demands of the expanding business community. Hire nodejs developers to create high-quality code that is error-free and general in nature, ensuring that it may be used during migration to any of the most recent technologies.',
    badges: [
      { text: 'JS', sub: 'JavaScript', color: '#006095' },
      { text: 'A', sub: 'Angular', color: '#DD0031' },
      { text: 'Android', sub: 'Mobile', color: '#3DDC84' },
      { text: 'iOS', sub: 'Apple', color: '#000000' }
    ],
    briefP1: 'When developing mission-critical server-side architectures, take advantage of modern backend practices: event-driven microservices, distributed caching, database sharding, and high-throughput API gateways.',
    briefP2: 'Our backend developers engineer enterprise backends with Go, Python, Node.js, Java, .NET, PostgreSQL, Redis, Kafka, and Kubernetes. Benefit from scalable server architectures with sub-millisecond response times and 99.99% uptime.',
    faqs: [
      { q: '1. Why should I hire dedicated backend developers from Firevy.co?', a: 'Our backend engineers are vetted distributed systems specialists with mastery over microservices, API architecture, database performance tuning, and cloud-native deployments.' },
      { q: '2. What technologies do your backend developers specialize in?', a: 'Our backend developers cover Golang, Python, Node.js, Java Spring Boot, .NET Core, PHP Laravel, PostgreSQL, MongoDB, Redis, and Apache Kafka.' },
      { q: '3. What is the hourly rate to hire dedicated backend developers?', a: 'Our dedicated backend developer rates start from $21/Hourly* on flexible part-time, full-time, or hourly engagement models.' },
      { q: '4. How quickly can a backend developer start on our project?', a: 'We can match and onboard seasoned backend engineers within 24 to 48 hours.' }
    ]
  },
  'hire-python-developers': {
    techKey: 'hire-python-developers',
    title: 'Hire Python Developers',
    techName: 'Python',
    metaTitle: 'Hire Dedicated Python Developers | Senior Python Programmers at $21/Hr',
    metaDesc: 'Hire skilled Python developers from Firevy.co for AI/ML, Django, FastAPI, data pipelines, and scalable cloud backends. Fast onboarding and flexible engagement models.',
    canonical: '/services/hire-python-developers',
    heroDesc: 'We are the top Python development company and have drawn up web portals that are feature-rich and versatile. These web portals are unique and will bring success to your organization.',
    brandColor: '#3776AB',
    accentColor: '#FFD438',
    logoText: 'Python',
    isPythonCustomGraphic: true,
    section2Title: 'Hire Well-Vetted Python Developers For Your Next Project',
    section2Desc: 'Our Python developers ensure that your online platform is configurable, scalable, and responsive by using the best frameworks and packages. We have a sizable Python development team experienced in using all of the well-known Python development frameworks and tools, including Pylons, Flask, Web2py, Turbogears, Pyramid, and Django. You can hire python developers to create database-driven and encrypted web applications more efficiently. Our dedicated Python Programmers help establish long-term relationships with our customers around the clock. Once you Hire Dedicated Python Developers from us, the result will be of the highest possible standard.',
    badges: [
      { text: 'django', sub: 'Django', color: '#092E20', isCustom: true },
      { text: 'CherryPy', sub: 'CherryPy', color: '#DC2626', isCustom: true },
      { text: 'Flask', sub: 'Flask', color: '#000000', isCustom: true },
      { text: 'ZOPE', sub: 'ZOPE', color: '#0284C7', isCustom: true }
    ],
    briefP1: 'When developing next-generation AI-driven systems and scalable web applications, take advantage of world-class Python development practices. Gain unmatched speed in prototyping, machine learning modeling, and clean backend APIs that scale effortlessly.',
    briefP2: 'Our Python developers engineer enterprise solutions with Django, FastAPI, Flask, PostgreSQL, Celery, and Docker. Benefit from clean, maintainable, and high-performance Python codebases running smoothly across AWS, GCP, and Azure.',
    faqs: [
      { q: '1. Why should I hire Python developers from Firevy.co?', a: 'Our Python developers are top 1% vetted engineers with expertise in modern Python, AI/ML integrations, async FastAPI, Django architectures, and robust cloud deployments.' },
      { q: '2. What engagement models are available for hiring Python developers?', a: 'We offer full-time dedicated, part-time, and hourly ($21/hr) hiring models tailored to your roadmap.' },
      { q: '3. Can your Python engineers integrate AI and Large Language Models (LLMs)?', a: 'Yes! Our developers have hands-on experience integrating OpenAI, LangChain, PyTorch, LlamaIndex, and HuggingFace into enterprise workflows.' },
      { q: '4. How fast can a Python developer join my existing sprint?', a: 'We can onboard matched senior Python developers within 24 to 48 hours after assessing your requirements.' },
      { q: '5. Do I get 100% intellectual property (IP) and code ownership?', a: 'Yes. You receive complete NDA protection, and 100% ownership of source code, repositories, and assets.' }
    ]
  },
  'hire-java-developers': {
    techKey: 'hire-java-developers',
    title: 'Hire Java Developers',
    techName: 'Java',
    metaTitle: 'Hire Dedicated Java Developers | Senior Java Programmers at $21/Hr',
    metaDesc: 'Hire enterprise Java developers from Firevy.co for robust microservices, Spring Boot backends, and cloud-native systems. Vetted engineers starting at $21/hr.',
    canonical: '/services/hire-java-developers',
    heroDesc: 'When you employ skilled Java developers from us, we will collaborate with you throughout all phases to create high-performance enterprise applications.',
    brandColor: '#EA2D2E',
    accentColor: '#5382A1',
    logoText: 'Java',
    badges: [
      { text: 'Spring', sub: 'Boot 3', color: '#6DB33F' },
      { text: 'Hibernate', sub: 'ORM', color: '#59666C' },
      { text: 'Kafka', sub: 'Events', color: '#231F20' },
      { text: 'K8s', sub: 'Cloud', color: '#326CE5' }
    ],
    briefP1: 'When developing enterprise-grade systems, take advantage of proven Java architectures, multi-threading capabilities, and secure JVM ecosystems that power Fortune 500 workflows globally.',
    briefP2: 'Our Java developers engineer high-throughput microservices using Spring Boot, Hibernate, Apache Kafka, Docker, and Kubernetes with 99.99% uptime guarantees.',
    faqs: [
      { q: '1. Why choose Firevy.co for hiring Java developers?', a: 'Our Java developers bring 5+ years of enterprise experience in microservices, secure transaction processing, and legacy JVM modernization.' },
      { q: '2. What is the hourly rate for Java programmers?', a: 'Our dedicated Java developer rates start from $21/Hourly* on flexible full-time, part-time, or hourly contracts.' },
      { q: '3. Can your Java developers modernize legacy Java 8 code to Java 17/21?', a: 'Yes. We execute zero-downtime refactoring, dependency upgrades, and cloud containerization.' }
    ]
  },
  'hire-spring-boot-developers': {
    techKey: 'hire-spring-boot-developers',
    title: 'Hire Spring Boot Developers',
    techName: 'Spring Boot',
    metaTitle: 'Hire Dedicated Spring Boot Developers | Microservices Experts at $21/Hr',
    metaDesc: 'Hire certified Spring Boot developers from Firevy.co for high-concurrency microservices, REST/gRPC APIs, and cloud-native Java backends. Instant onboarding.',
    canonical: '/services/hire-spring-boot-developers',
    heroDesc: 'When you employ skilled Spring Boot developers from us, we will collaborate with you throughout all phases to create high-performance microservices architecture.',
    brandColor: '#6DB33F',
    accentColor: '#1A4D2E',
    logoText: 'Spring',
    badges: [
      { text: 'Micro', sub: 'Services', color: '#6DB33F' },
      { text: 'Security', sub: 'OAuth2', color: '#38BDF8' },
      { text: 'Docker', sub: 'Images', color: '#2496ED' },
      { text: 'gRPC', sub: 'Fast API', color: '#005F96' }
    ],
    briefP1: 'Spring Boot is the gold standard for enterprise microservices. Our engineers implement automated dependency injection, declarative security, and cloud-native discovery.',
    briefP2: 'Benefit from production-ready Spring Boot microservices with Spring Cloud, Eureka, Zipkin distributed tracing, and automated CI/CD pipelines.',
    faqs: [
      { q: '1. Why hire Spring Boot specialists?', a: 'Dedicated Spring Boot engineers optimize thread pools, caching, and database queries for maximum throughput.' },
      { q: '2. What are the hiring costs?', a: 'Our dedicated Spring Boot developers start at $21/hr with complete project management support.' }
    ]
  },
  'hire-django-developers': {
    techKey: 'hire-django-developers',
    title: 'Hire Django Developers',
    techName: 'Django',
    metaTitle: 'Hire Dedicated Django Developers | Expert Python Django Programmers at $21/Hr',
    metaDesc: 'Hire experienced Django developers for rapid web app development, secure REST APIs, and scalable Python platforms. Get senior Django talent at $21/hr.',
    canonical: '/services/hire-django-developers',
    heroDesc: 'When you employ skilled Django developers from us, we will collaborate with you throughout all phases to create high-performance web platforms.',
    brandColor: '#092E20',
    accentColor: '#44B78B',
    logoText: 'django',
    badges: [
      { text: 'DRF', sub: 'REST', color: '#A30000' },
      { text: 'Celery', sub: 'Tasks', color: '#37814A' },
      { text: 'Postgres', sub: 'RDBMS', color: '#336791' },
      { text: 'Redis', sub: 'Cache', color: '#DC382D' }
    ],
    briefP1: 'Django enables rapid time-to-market with its batteries-included philosophy, robust ORM, and enterprise-grade security against SQL injections and CSRF.',
    briefP2: 'Our Django programmers engineer custom web platforms, scalable REST APIs using Django Rest Framework (DRF), and asynchronous queue processing with Celery and Redis.',
    faqs: [
      { q: '1. What makes your Django developers exceptional?', a: 'Our developers adhere strictly to clean architectural patterns, comprehensive unit testing, and performant database indexing.' }
    ]
  },
  'hire-net-developers': {
    techKey: 'hire-net-developers',
    title: 'Hire .NET Developers',
    techName: '.NET',
    metaTitle: 'Hire Dedicated .NET Developers | ASP.NET Core & C# Programmers at $21/Hr',
    metaDesc: 'Hire senior .NET Core & C# developers for cloud-native microservices, enterprise SaaS, and Azure architectures. Hire dedicated .NET engineers starting at $21/hr.',
    canonical: '/services/hire-net-developers',
    heroDesc: 'When you employ skilled .NET developers from us, we will collaborate with you throughout all phases to create high-performance enterprise applications.',
    brandColor: '#512BD4',
    accentColor: '#8C68CD',
    logoText: '.NET',
    badges: [
      { text: 'C#', sub: 'v12', color: '#239120' },
      { text: 'ASP.NET', sub: 'Core 8', color: '#512BD4' },
      { text: 'Azure', sub: 'Cloud', color: '#0089D6' },
      { text: 'EF Core', sub: 'ORM', color: '#68217A' }
    ],
    briefP1: 'Modern cross-platform .NET 8 / C# delivers extraordinary performance, memory efficiency, and seamless Azure integration for mission-critical enterprise workloads.',
    briefP2: 'Our .NET developers engineer cloud-native microservices, Blazor interactive web frontends, and secure Web APIs backed by SQL Server and Azure Cosmos DB.',
    faqs: [
      { q: '1. Can your .NET developers migrate legacy .NET Framework to .NET 8?', a: 'Yes, we specialize in migrating legacy ASP.NET systems to modern, containerized .NET Core.' }
    ]
  },
  'hire-node-js-developers': {
    techKey: 'hire-node-js-developers',
    title: 'Hire Node JS Developers',
    techName: 'Node JS',
    metaTitle: 'Hire Dedicated Node.js Developers | Expert Backend Engineers at $21/Hr',
    metaDesc: 'Hire skilled Node.js developers for event-driven backend systems, real-time WebSocket APIs, and microservices. Dedicated programmers starting at $21/hr.',
    canonical: '/services/hire-node-js-developers',
    heroDesc: 'When you employ skilled Node JS developers from us, we will collaborate with you throughout all phases to create high-performance real-time backends.',
    brandColor: '#5FA04E',
    accentColor: '#333333',
    logoText: 'Node.js',
    badges: [
      { text: 'Express', sub: 'REST', color: '#000000' },
      { text: 'NestJS', sub: 'Modular', color: '#E0234E' },
      { text: 'Mongo', sub: 'NoSQL', color: '#47A248' },
      { text: 'Socket', sub: 'IO', color: '#010101' }
    ],
    briefP1: 'Node.js non-blocking, event-driven I/O engine is ideal for building high-concurrency real-time chat, video streaming, collaborative tools, and IoT gateways.',
    briefP2: 'Our Node.js developers build scalable TypeScript-first microservices with NestJS, Express.js, GraphQL, Redis, and serverless AWS Lambda architectures.',
    faqs: [
      { q: '1. Why hire Node.js engineers from Firevy.co?', a: 'Our Node.js specialists have deep expertise in asynchronous event loops, memory leak prevention, and microservices orchestration.' }
    ]
  },
  'hire-php-developers': {
    techKey: 'hire-php-developers',
    title: 'Hire PHP Developers',
    techName: 'PHP',
    metaTitle: 'Hire Dedicated PHP Developers | Expert Laravel & Symfony Programmers at $21/Hr',
    metaDesc: 'Hire dedicated PHP developers from Firevy.co. Expert Laravel, Symfony, and full-stack PHP engineers for custom web apps and enterprise portals. Instant onboarding.',
    canonical: '/services/hire-php-developers',
    heroDesc: 'When you employ skilled PHP developers from us, we will collaborate with you throughout all phases to create high-performance web applications.',
    brandColor: '#777BB4',
    accentColor: '#4F5B93',
    logoText: 'PHP',
    badges: [
      { text: 'Laravel', sub: 'v11', color: '#FF2D20' },
      { text: 'Symfony', sub: 'Enterprise', color: '#000000' },
      { text: 'MySQL', sub: 'Database', color: '#4479A1' },
      { text: 'REST', sub: 'API', color: '#005F96' }
    ],
    briefP1: 'Modern PHP 8.3 powers over 75% of the dynamic web with Just-In-Time (JIT) compilation, strong typing, and industry-leading frameworks like Laravel and Symfony.',
    briefP2: 'Our PHP developers craft custom SaaS platforms, multi-vendor marketplaces, API gateways, and enterprise portals with robust security and automated testing.',
    faqs: [
      { q: '1. What frameworks do your PHP developers support?', a: 'We specialize in modern Laravel, Symfony, CodeIgniter, Yii2, and custom PHP MVC architectures.' }
    ]
  },
  'hire-express-js-developers': {
    techKey: 'hire-express-js-developers',
    title: 'Hire Express JS Developers',
    techName: 'Express JS',
    metaTitle: 'Hire Dedicated Express.js Developers | Fast REST API Engineers at $21/Hr',
    metaDesc: 'Hire dedicated Express.js developers from Firevy.co for minimalist, high-speed RESTful APIs and microservices backends. Vetted developers at $21/hr.',
    canonical: '/services/hire-express-js-developers',
    heroDesc: 'When you employ skilled Express JS developers from us, we will collaborate with you throughout all phases to create high-performance API backends.',
    brandColor: '#000000',
    accentColor: '#00ADD8',
    logoText: 'Express',
    badges: [
      { text: 'JWT', sub: 'Auth', color: '#D63AFF' },
      { text: 'Mongo', sub: 'Mongoose', color: '#47A248' },
      { text: 'gRPC', sub: 'RPC', color: '#244c5a' },
      { text: 'AWS', sub: 'Lambda', color: '#FF9900' }
    ],
    briefP1: 'Express.js is the minimalist, unopinionated web framework for Node.js, providing robust tooling for building lightning-fast RESTful APIs and microservices.',
    briefP2: 'Our Express.js developers design secure middleware pipelines, rate limiting, JWT/OAuth2 authentication, and cloud-native containerized deployments.',
    faqs: [
      { q: '1. Why choose Express.js for our backend?', a: 'Express provides minimal overhead, flexible middleware chains, and rapid time-to-market for modern APIs.' }
    ]
  },
  'hire-fintech-developers': {
    techKey: 'hire-fintech-developers',
    title: 'Hire Fintech Developers',
    techName: 'Fintech',
    metaTitle: 'Hire Dedicated Fintech Developers | Banking & Payment Software Engineers at $21/Hr',
    metaDesc: 'Hire certified Fintech developers for payment gateways, digital banking, crypto/blockchain wallets, and PCI-DSS compliant software. Starting at $21/hr.',
    canonical: '/services/hire-fintech-developers',
    heroDesc: 'When you employ skilled Fintech developers from us, we will collaborate with you throughout all phases to create high-performance financial technology platforms.',
    brandColor: '#059669',
    accentColor: '#D97706',
    logoText: 'FinTech',
    badges: [
      { text: 'PCI-DSS', sub: 'Secure', color: '#059669' },
      { text: 'Stripe', sub: 'Payments', color: '#635BFF' },
      { text: 'Plaid', sub: 'OpenBank', color: '#000000' },
      { text: 'KYC/AML', sub: 'Compliance', color: '#2563EB' }
    ],
    briefP1: 'Fintech systems require zero-tolerance for errors, sub-millisecond transaction speeds, automated fraud detection, and stringent regulatory compliance.',
    briefP2: 'Our Fintech engineers build digital banking portals, multi-currency crypto wallets, lending engines, algorithmic trading systems, and payment gateways with end-to-end encryption.',
    faqs: [
      { q: '1. How do your Fintech developers ensure compliance and security?', a: 'Our developers implement PCI-DSS Level 1 standards, AES-256 data encryption at rest and in transit, multi-factor authentication, and automated KYC/AML checks.' },
      { q: '2. Have your developers integrated payment gateways before?', a: 'Yes. We have integrated Stripe, PayPal, Adyen, Plaid, Authorize.Net, and local banking APIs across the USA, UK, Europe, and Asia.' }
    ]
  }
};

export const HireDedicatedTechDevelopersService = ({ techKey }) => {
  const location = useLocation();
  const pathSegments = location.pathname.toLowerCase().split('/').filter(Boolean);
  const pathSlug = pathSegments.length > 1 ? pathSegments[pathSegments.length - 1] : pathSegments[0] || '';
  const currentKey = techKey || pathSlug;

  // Resolve config or fallback to python
  const matchedKey = Object.keys(techConfigurations).find((k) =>
    currentKey.includes(k) || k.includes(currentKey)
  ) || 'hire-python-developers';

  const config = techConfigurations[matchedKey] || techConfigurations['hire-python-developers'];

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [leverageTab, setLeverageTab] = useState('Frameworks');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10,000 - $25,000',
    model: `Dedicated ${config.title} ($21/hr)`,
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$10,000 - $25,000',
        model: `Dedicated ${config.title} ($21/hr)`,
        message: ''
      });
    }, 4000);
  };

  // 6 Flexible Hiring Model Cards
  const hiringModelCards = [
    {
      id: 'dedicated',
      title: `Dedicated ${config.techName} Team`,
      subtitle: 'Exclusive squad for your project roadmap',
      price: '$21/Hourly* ($3,360/Mo)',
      IconComp: Layers,
      isFeatured: true,
      saveText: 'Save 20%',
      badgeText: 'BEST VALUE',
      features: [
        `Dedicated senior ${config.techName} engineers`,
        '100% IP & source code ownership',
        'Direct Slack / Jira / GitHub integration',
        'Flexible scale-up / scale-down',
        'Transparent daily work tracking',
        'Dedicated technical lead'
      ]
    },
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '160 hours / month dedicated focus',
      price: '$21/Hourly*',
      IconComp: Calendar,
      isFeatured: false,
      saveText: 'Most Popular',
      badgeText: 'POPULAR',
      features: [
        'Billing cycle: Monthly',
        '40 hours per week dedicated',
        'Zero recruitment or overhead costs',
        'Daily standups & real-time sync',
        'Timezone aligned collaboration',
        'Instant developer replacement SLA'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Hiring Model',
      subtitle: 'On-demand time & material billing',
      price: 'Pay as you go',
      IconComp: Clock,
      isFeatured: false,
      saveText: 'Max Flexibility',
      badgeText: 'FLEXIBLE',
      features: [
        'Pay strictly for tracked billable hours',
        'Ideal for ongoing feature iteration',
        'Detailed timesheet reports',
        'No long-term commitments',
        'Expert bug fixing & code audits',
        'Scale hours up or down anytime'
      ]
    },
    {
      id: 'milestone',
      title: 'Milestone-Based Squad',
      subtitle: 'Pay per deliverable milestone',
      price: 'Custom Scope Pricing',
      IconComp: Zap,
      isFeatured: false,
      saveText: 'Predictable Cost',
      badgeText: 'MILESTONES',
      features: [
        'Clearly defined sprint deliverables',
        'Payment tied directly to approvals',
        'Fixed timelines & scope control',
        'Rigorous QA acceptance testing',
        'End-to-end project management',
        'Post-delivery warranty period'
      ]
    },
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '80 hours / month targeted boost',
      price: 'Flexible part-time',
      IconComp: Calendar,
      isFeatured: false,
      saveText: 'Save 15%',
      badgeText: 'PART-TIME',
      features: [
        '4 hours a day, 5 days a week',
        'Great for maintenance & small features',
        'Direct developer communication',
        'Bi-weekly code reviews',
        'Transparent time logs',
        'Cost-efficient engineering support'
      ]
    },
    {
      id: 'enterprise',
      title: 'Annual Enterprise Hub',
      subtitle: 'Strategic offshore tech division',
      price: 'Tailored enterprise rates',
      IconComp: Building2,
      isFeatured: false,
      saveText: 'Save 25%',
      badgeText: 'ENTERPRISE',
      features: [
        'Dedicated Offshore Development Center (ODC)',
        'Fully dedicated cross-functional squad',
        'Comprehensive SLA with custom KPIs',
        'On-demand domain specialist scaling',
        'Direct IP handover with zero lock-in',
        'Quarterly executive reviews'
      ]
    }
  ];

  // Infinite Seamless Loop Carousel
  const extendedCards = [...hiringModelCards, ...hiringModelCards, ...hiringModelCards];

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setCardSlideIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= hiringModelCards.length * 2) {
          setTimeout(() => {
            setEnableTransition(false);
            setCardSlideIndex(hiringModelCards.length);
            setTimeout(() => {
              setEnableTransition(true);
            }, 50);
          }, 600);
        }
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isCarouselHovered, hiringModelCards.length]);

  const handlePrevCard = () => {
    setCardSlideIndex((prev) => (prev <= 0 ? hiringModelCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setCardSlideIndex((prev) => (prev + 1) % hiringModelCards.length);
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title={config.metaTitle}
        description={config.metaDesc}
        canonical={config.canonical}
      />

      {/* ============================================================
          HERO SECTION (Matching Reference Design 100%)
          ============================================================ */}
      <section className="pt-28 pb-16 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column Text & Action */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                {config.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {config.heroDesc}
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">200+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">20+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">2800+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">320+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box */}
              <div className="space-y-2.5 pt-2">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[14px] p-2 pl-4 pr-2 w-full max-w-[390px] shadow-md shadow-[#0089a8]/20">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-5 h-5 text-white stroke-[2.5]" />
                    <span className="text-lg sm:text-[20px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-slate-800 hover:bg-slate-50 font-[700] px-5 py-2.5 rounded-[10px] text-sm transition-all shadow-sm flex items-center justify-center font-sans"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Custom Technology Monitor Vector Graphic */}
            <div className="lg:col-span-6 relative flex items-center justify-center p-2">
              <div className="relative w-full max-w-[540px] select-none">
                <svg viewBox="0 0 600 480" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Delicate Cyan Gears & Dashed Rings */}
                  <g opacity="0.35">
                    <circle cx="410" cy="90" r="48" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M410 32v14M410 134v14M352 90h14M454 90h14" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="110" cy="320" r="42" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="525" cy="200" r="32" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>

                  {/* Monitor Stand */}
                  <path d="M300 340 L 300 375" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
                  <path d="M250 375 L 350 375" stroke="#64748B" strokeWidth="7" strokeLinecap="round" />
                  <ellipse cx="300" cy="377" rx="55" ry="6" fill="#94A3B8" />

                  {/* Desktop Monitor Outer Bezel */}
                  <rect x="155" y="105" width="345" height="235" rx="14" fill="#0F172A" />
                  <rect x="160" y="110" width="335" height="220" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                  <rect x="160" y="110" width="335" height="24" rx="10" fill="#006095" />
                  <rect x="160" y="122" width="335" height="12" fill="#006095" />

                  {/* Window Control Dots */}
                  <circle cx="174" cy="122" r="3.5" fill="#FFFFFF" />
                  <circle cx="186" cy="122" r="3.5" fill="#FEF08A" />
                  <circle cx="198" cy="122" r="3.5" fill="#FFFFFF" />

                  {/* Code Lines on Left Screen */}
                  <g opacity="0.65">
                    <rect x="175" y="146" width="90" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="156" width="130" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="166" width="70" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="176" width="110" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="175" y="196" width="120" height="4" rx="2" fill="#94A3B8" />
                    <rect x="185" y="206" width="80" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="216" width="100" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="226" width="60" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="175" y="246" width="140" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="256" width="95" height="4" rx="2" fill="#CBD5E1" />
                  </g>

                  {/* Custom Tech Badge on Right Screen */}
                  {config.isBackendCustomGraphic ? (
                    <g transform="translate(340, 155)">
                      <rect x="0" y="0" width="130" height="75" rx="8" fill="#FFFFFF" stroke="#0089a8" strokeWidth="2" />
                      <rect x="0" y="0" width="130" height="16" rx="8" fill="#F1F5F9" />
                      <circle cx="12" cy="8" r="2.5" fill="#EF4444" />
                      <circle cx="20" cy="8" r="2.5" fill="#F59E0B" />
                      <circle cx="28" cy="8" r="2.5" fill="#10B981" />
                      <text x="35" y="48" fill="#0089a8" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="monospace">&lt; / &gt;</text>
                      <g transform="translate(85, 38)">
                        <circle cx="12" cy="12" r="10" stroke="#0089a8" strokeWidth="3" fill="none" />
                        <circle cx="12" cy="12" r="4" fill="#0089a8" />
                      </g>
                    </g>
                  ) : config.isPythonCustomGraphic ? (
                    <g transform="translate(355, 140)">
                      {/* Python Dual Snake Logo inside Monitor */}
                      <g transform="scale(1.1)">
                        {/* Blue Top Snake */}
                        <path d="M26 4 C14 4 6 12 6 22 L6 28 L24 28 L24 32 L3 32 C-3 32 -6 38 -6 48 C-6 58 1 64 12 64 L16 64 L16 54 C16 44 24 38 34 38 L48 38 C56 38 62 32 62 24 L62 14 C62 4 54 4 44 4 Z" fill="#387EB8" />
                        <circle cx="16" cy="12" r="3" fill="#FFFFFF" />
                        {/* Yellow Bottom Snake */}
                        <path d="M38 68 C50 68 58 60 58 50 L58 44 L40 44 L40 40 L61 40 C67 40 70 34 70 24 C70 14 63 8 52 8 L48 8 L48 18 C48 28 40 34 30 34 L16 34 C8 34 2 40 2 48 L2 58 C2 68 10 68 20 68 Z" fill="#FFE052" />
                        <circle cx="48" cy="60" r="3" fill="#000000" />
                      </g>
                    </g>
                  ) : (
                    <g transform="translate(345, 160)">
                      <rect x="0" y="0" width="120" height="70" rx="12" fill="#F8FAFC" stroke="#006095" strokeWidth="2.5" />
                      <circle cx="28" cy="35" r="16" fill="#006095" />
                      <text x="28" y="41" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle">{config.techName[0]}</text>
                      <text x="54" y="42" fill="#006095" fontSize="16" fontWeight="900" fontFamily="sans-serif">{config.logoText}</text>
                    </g>
                  )}

                  {/* 4 Surrounding Tech Badges */}
                  {config.isPythonCustomGraphic ? (
                    <g>
                      {/* Django Badge - Top Left */}
                      <g transform="translate(75, 155)">
                        <rect x="0" y="0" width="75" height="34" rx="8" fill="#BAE6FD" opacity="0.9" />
                        <rect x="3" y="3" width="69" height="28" rx="6" fill="#092E20" />
                        <text x="37" y="21" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">django</text>
                      </g>
                      {/* CherryPy Badge - Top Right */}
                      <g transform="translate(470, 78)">
                        <rect x="0" y="0" width="85" height="34" rx="8" fill="#BAE6FD" opacity="0.9" />
                        <rect x="3" y="3" width="79" height="28" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
                        <circle cx="16" cy="18" r="3.5" fill="#DC2626" />
                        <circle cx="21" cy="20" r="3.5" fill="#DC2626" />
                        <text x="50" y="21" fill="#0F172A" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">CherryPy</text>
                      </g>
                      {/* Flask Badge - Bottom Left */}
                      <g transform="translate(110, 290)">
                        <rect x="0" y="0" width="75" height="34" rx="8" fill="#BAE6FD" opacity="0.9" />
                        <rect x="3" y="3" width="69" height="28" rx="6" fill="#FFFFFF" stroke="#E2E8F0" />
                        <text x="37" y="21" fill="#0F172A" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Flask</text>
                      </g>
                      {/* ZOPE Badge - Bottom Right */}
                      <g transform="translate(470, 245)">
                        <rect x="0" y="0" width="80" height="34" rx="8" fill="#BAE6FD" opacity="0.9" />
                        <rect x="3" y="3" width="74" height="28" rx="6" fill="#BAE6FD" />
                        <circle cx="16" cy="17" r="7" fill="#0284C7" />
                        <text x="16" y="21" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">Z</text>
                        <text x="46" y="21" fill="#0369A1" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">ZOPE</text>
                      </g>
                    </g>
                  ) : (
                    config.badges.map((b, idx) => {
                      const coords = [
                        { x: 488, y: 82 },
                        { x: 85, y: 160 },
                        { x: 118, y: 300 },
                        { x: 485, y: 252 }
                      ][idx] || { x: 488, y: 82 };

                      return (
                        <g key={idx} transform={`translate(${coords.x}, ${coords.y})`}>
                          <rect x="0" y="0" width="52" height="52" rx="12" fill="#BAE6FD" opacity="0.85" />
                          <rect x="6" y="6" width="40" height="40" rx="8" fill={b.color || "#0284C7"} />
                          <text x="26" y="26" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">{b.text}</text>
                          <text x="26" y="36" fill="#FFFFFF" fontSize="6" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">{b.sub}</text>
                        </g>
                      );
                    })
                  )}
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          BRAND LOGO MARQUEE (Row 2)
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 2: Well-Vetted Developers Available With Us
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Graphic */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[540px] select-none">
                {config.isBackendCustomGraphic ? (
                  <div className="flex items-center justify-center w-full">
                    <img
                      src="/images/services/backend_developer_remote.png"
                      alt="Remote Backend Developers Available For Hire"
                      className="w-full max-w-[500px] h-auto object-contain mix-blend-multiply select-none"
                    />
                  </div>
                ) : config.isPythonCustomGraphic ? (
                  <svg viewBox="0 0 580 440" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Floor Line */}
                    <line x1="30" y1="410" x2="550" y2="410" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />

                    {/* Wall Clock on Top Left */}
                    <g transform="translate(60, 45)">
                      <circle cx="28" cy="28" r="26" fill="#BAE6FD" opacity="0.6" />
                      <circle cx="28" cy="28" r="23" stroke="#38BDF8" strokeWidth="2" fill="#FFFFFF" />
                      <line x1="28" y1="28" x2="28" y2="14" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                      <line x1="28" y1="28" x2="38" y2="28" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="28" cy="28" r="2.5" fill="#0F172A" />
                    </g>

                    {/* Sparkle Stars */}
                    <g transform="translate(130, 45)" fill="#7DD3FC">
                      <polygon points="10,0 12,7 19,10 12,13 10,20 8,13 1,10 8,7" />
                    </g>
                    <g transform="translate(145, 80)" fill="#7DD3FC">
                      <polygon points="6,0 7,4 11,6 7,8 6,12 5,8 1,6 5,4" />
                    </g>

                    {/* Floating Python Logo */}
                    <g transform="translate(260, 40) scale(0.65)">
                      <path d="M26 4 C14 4 6 12 6 22 L6 28 L24 28 L24 32 L3 32 C-3 32 -6 38 -6 48 C-6 58 1 64 12 64 L16 64 L16 54 C16 44 24 38 34 38 L48 38 C56 38 62 32 62 24 L62 14 C62 4 54 4 44 4 Z" fill="#387EB8" />
                      <circle cx="16" cy="12" r="3" fill="#FFFFFF" />
                      <path d="M38 68 C50 68 58 60 58 50 L58 44 L40 44 L40 40 L61 40 C67 40 70 34 70 24 C70 14 63 8 52 8 L48 8 L48 18 C48 28 40 34 30 34 L16 34 C8 34 2 40 2 48 L2 58 C2 68 10 68 20 68 Z" fill="#FFE052" />
                      <circle cx="48" cy="60" r="3" fill="#000000" />
                    </g>

                    {/* Standing Team Lead / Manager */}
                    <g transform="translate(150, 105)">
                      {/* Head & Hair */}
                      <circle cx="35" cy="20" r="13" fill="#FDBA74" />
                      <path d="M22 16 C22 4, 46 2, 48 16 C48 10, 40 8, 30 9 Z" fill="#0F172A" />
                      {/* Light Blue Shirt */}
                      <path d="M18 36 L 52 36 L 46 135 L 14 135 Z" fill="#7DD3FC" />
                      {/* Black Tie */}
                      <polygon points="33,36 37,36 38,75 35,82 32,75" fill="#0F172A" />
                      {/* Left Arm holding Tablet */}
                      <path d="M20 40 L -2 95 L 12 105 L 26 55 Z" fill="#7DD3FC" />
                      <rect x="-15" y="90" width="30" height="20" rx="3" fill="#0284C7" />
                      {/* Right Arm gesturing towards developer */}
                      <path d="M48 42 L 78 80 L 70 88 L 42 55 Z" fill="#7DD3FC" />
                      <ellipse cx="80" cy="85" rx="6" ry="4" fill="#FDBA74" />
                      {/* Navy Blue Pants */}
                      <path d="M14 135 L 46 135 L 50 300 L 36 300 L 32 190 L 26 300 L 12 300 Z" fill="#0F172A" />
                      {/* Shoes */}
                      <ellipse cx="10" cy="303" rx="14" ry="5" fill="#0284C7" />
                      <ellipse cx="48" cy="303" rx="14" ry="5" fill="#0284C7" />
                    </g>

                    {/* Modern Desk */}
                    <g transform="translate(110, 270)">
                      <rect x="0" y="0" width="220" height="8" rx="4" fill="#64748B" />
                      <line x1="20" y1="8" x2="10" y2="140" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
                      <line x1="200" y1="8" x2="210" y2="140" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />

                      {/* Stack of Books on left of desk */}
                      <g transform="translate(8, -24)">
                        <rect x="0" y="16" width="38" height="8" rx="2" fill="#0F172A" />
                        <rect x="2" y="8" width="34" height="8" rx="2" fill="#0284C7" />
                        <rect x="4" y="0" width="30" height="8" rx="2" fill="#38BDF8" />
                      </g>

                      {/* Laptop on desk */}
                      <g transform="translate(100, -35)">
                        <path d="M5 0 L 15 -35 L 55 -35 L 60 0 Z" fill="#0F172A" />
                        <rect x="0" y="0" width="68" height="5" rx="2" fill="#94A3B8" />
                      </g>
                    </g>

                    {/* Sitting Developer */}
                    <g transform="translate(235, 175)">
                      {/* Head & Hair */}
                      <circle cx="60" cy="20" r="12" fill="#FDBA74" />
                      <path d="M48 16 C48 6, 72 4, 74 16 C74 12, 66 8, 58 10 Z" fill="#0F172A" />
                      {/* Yellow Sweater */}
                      <path d="M46 34 L 74 34 L 68 100 L 40 100 Z" fill="#FBBF24" />
                      {/* Arms typing on laptop */}
                      <path d="M46 38 L 10 75 L 24 82 L 58 50 Z" fill="#FDBA74" />
                      {/* Blue Office Chair */}
                      <rect x="78" y="32" width="10" height="65" rx="5" fill="#38BDF8" />
                      <rect x="48" y="95" width="45" height="10" rx="5" fill="#38BDF8" />
                      <line x1="70" y1="105" x2="70" y2="175" stroke="#0F172A" strokeWidth="4" />
                      <line x1="45" y1="175" x2="95" y2="175" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
                      {/* Legs in Navy Pants */}
                      <path d="M40 100 L 68 100 L 52 170 L 32 170 Z" fill="#0F172A" />
                      <path d="M32 170 L -15 210 L 5 215 L 45 178 Z" fill="#0F172A" />
                      {/* Bright Blue Shoes */}
                      <ellipse cx="-20" cy="212" rx="12" ry="5" fill="#38BDF8" />
                      <ellipse cx="20" cy="220" rx="12" ry="5" fill="#38BDF8" />
                    </g>

                    {/* Modern Potted Plant on bottom left floor */}
                    <g transform="translate(45, 335)">
                      <polygon points="12,35 38,35 32,75 18,75" fill="#1E293B" />
                      <path d="M25 35 C15 15, 20 -10, 30 -5 C28 15, 27 28, 25 35 Z" fill="#0284C7" />
                      <path d="M18 35 C4 20, 8 5, 18 12 C19 22, 19 28, 18 35 Z" fill="#38BDF8" />
                      <path d="M32 35 C46 20, 42 5, 32 12 C31 22, 31 28, 32 35 Z" fill="#0369A1" />
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 580 440" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 260 C50 140 160 80 290 80 C420 80 530 140 530 260 C530 370 420 400 290 400 C160 400 50 370 50 260 Z" fill="#E0F2FE" opacity="0.55" />
                    <line x1="45" y1="410" x2="535" y2="410" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                    <g transform="translate(285, 125)">
                      <circle cx="0" cy="0" r="36" stroke="#0284C7" strokeWidth="12" fill="none" opacity="0.8" />
                      <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(230, 280)">
                      <rect x="0" y="55" width="130" height="7" rx="3" fill="#334155" />
                      <line x1="15" y1="62" x2="5" y2="130" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                      <line x1="115" y1="62" x2="125" y2="130" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                      <rect x="58" y="42" width="14" height="14" fill="#64748B" />
                      <rect x="50" y="53" width="30" height="3" rx="1.5" fill="#475569" />
                      <rect x="25" y="0" width="80" height="44" rx="4" fill="#0F172A" />
                      <rect x="27" y="2" width="76" height="40" rx="3" fill="#FFFFFF" />
                      <text x="65" y="27" fill="#006095" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">{config.techName}</text>
                    </g>
                    <g transform="translate(90, 205)">
                      <circle cx="45" cy="22" r="10" fill="#FDBA74" />
                      <path d="M37 18 C37 10, 53 10, 54 18 C54 16, 50 13, 44 14 Z" fill="#0F172A" />
                      <path d="M33 34 L 57 34 L 54 90 L 30 90 Z" fill="#93C5FD" />
                      <path d="M30 90 L 54 90 L 58 185 L 47 185 L 43 120 L 35 185 L 24 185 Z" fill="#1E293B" />
                      <ellipse cx="23" cy="186" rx="10" ry="4" fill="#0F172A" />
                      <ellipse cx="60" cy="186" rx="10" ry="4" fill="#0F172A" />
                    </g>
                    <g transform="translate(165, 195)">
                      <circle cx="45" cy="22" r="10" fill="#FDBA74" />
                      <path d="M36 17 C36 8, 54 8, 55 17 C55 14, 49 12, 43 13 Z" fill="#0F172A" />
                      <path d="M32 34 L 58 34 L 55 95 L 29 95 Z" fill="#0284C7" />
                      <path d="M29 95 L 55 95 L 58 195 L 46 195 L 42 125 L 32 195 L 20 195 Z" fill="#1E293B" />
                      <ellipse cx="18" cy="196" rx="11" ry="4" fill="#0F172A" />
                      <ellipse cx="60" cy="196" rx="11" ry="4" fill="#0F172A" />
                    </g>
                    <g transform="translate(365, 215)">
                      <circle cx="45" cy="22" r="9.5" fill="#FDBA74" />
                      <path d="M34 33 L 56 33 L 54 88 L 32 88 Z" fill="#FBBF24" />
                      <path d="M32 88 L 54 88 L 56 175 L 45 175 L 42 120 L 32 175 L 22 175 Z" fill="#1E293B" />
                      <ellipse cx="20" cy="176" rx="10" ry="3.5" fill="#0F172A" />
                      <ellipse cx="58" cy="176" rx="10" ry="3.5" fill="#0F172A" />
                    </g>
                    <g transform="translate(470, 355)">
                      <polygon points="12,22 36,22 30,55 18,55" fill="#1E293B" />
                      <path d="M24 22 C14 5, 20 -8, 28 -5 C27 8, 26 15, 24 22 Z" fill="#0284C7" />
                    </g>
                  </svg>
                )}
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                {config.section2Title || `Well-Vetted ${config.techName} Developers Available With Us`}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {config.section2Desc || `You may hire ${config.techName} developers hourly or full time (dedicated monthly). In addition to receiving their undivided attention for your projects, you can save up to sixty percent on their development cost when you hire Dedicated ${config.techName} Web Developers from us. Our strength is in the fact that we have on staff a team of in-house senior ${config.techName.toLowerCase()} developers that are highly skilled, knowledgeable, devoted, and professional and who consistently provide outcomes that meet your expectations.`}
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: Developer Proficiency Comparison Table
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire {config.techName} Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Hire dedicated {config.techName} developers to meet your enterprise throughput requirements by leveraging our technical excellence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="min-w-[640px] rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005F96] text-white">
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">Range of Developers</th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">Junior Developers</th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">Mid-Level Developers</th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base w-1/4">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-[15px] font-[600] text-slate-800">
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Approx Cost</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">$18 / hr</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">$24 / hr</td>
                    <td className="py-4 px-6 bg-white font-[700] text-slate-900">$32 / hr</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Years of Experience</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">1-3 Years</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">3-5 Years</td>
                    <td className="py-4 px-6 bg-white">5+ Years</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Project Manager</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 bg-white">Yes</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Time Zone Flexibility</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 bg-white">Yes</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Quality Guarantee</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">Yes</td>
                    <td className="py-4 px-6 bg-white">Yes</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">Working Hours</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">40 hours / Week</td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">40 hours / Week</td>
                    <td className="py-4 px-6 bg-white">40 hours / Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: Brief About Our Services
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our {config.techName}<br className="hidden sm:inline" /> Development Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {config.briefP1}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {config.briefP2}
              </p>
            </div>

            {/* Right: Workstation Graphic */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[560px] select-none">
                <svg viewBox="0 0 600 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="40" y1="440" x2="560" y2="440" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
                  <g transform="translate(60, 360)">
                    <polygon points="12,40 38,40 32,76 18,76" fill="#1E3A8A" />
                    <path d="M12 40 C 0 20, 5 0, 16 2 C 18 18, 16 35, 12 40 Z" fill="#38BDF8" />
                    <path d="M25 40 C 20 15, 26 -5, 36 0 C 34 18, 30 35, 25 40 Z" fill="#0284C7" />
                  </g>
                  <g transform="translate(230, 365)">
                    <rect x="0" y="0" width="200" height="10" rx="3" fill="#1E293B" />
                    <rect x="15" y="10" width="6" height="65" fill="#334155" />
                    <rect x="120" y="10" width="70" height="55" rx="3" fill="#334155" />
                  </g>
                  <g transform="translate(260, 275)">
                    <rect x="0" y="0" width="140" height="90" rx="6" fill="#0F172A" />
                    <rect x="3" y="3" width="134" height="84" rx="4" fill="#FFFFFF" />
                    <rect x="3" y="3" width="134" height="12" fill="#005F96" />
                    <text x="70" y="52" fill="#005F96" fontSize="16" fontWeight="900" textAnchor="middle">{config.techName}</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: Flexible Hiring Models Carousel
          ============================================================ */}
      <section className="py-20 bg-white font-sans border-b border-slate-100 overflow-hidden select-none">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire {config.techName} Developers from Firevy.co Starts from,
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Select from our range of engagement models to build and scale your engineering team.
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div className="overflow-hidden py-4 px-2">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${cardSlideIndex * (100 / 3)}%)`,
                  transition: enableTransition ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {extendedCards.map((card, idx) => {
                  const IconC = card.IconComp;
                  return (
                    <div
                      key={`card-${idx}`}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3.5"
                    >
                      <div
                        className={`h-full rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between relative bg-white border ${
                          card.isFeatured
                            ? 'border-[#0083B0] shadow-xl shadow-[#0083B0]/10 ring-2 ring-[#0083B0]/20'
                            : 'border-slate-200/90 shadow-md hover:shadow-xl hover:border-[#0083B0]/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[11px] font-[800] uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-[#0083B0] border border-cyan-100">
                              {card.badgeText}
                            </span>
                            <span className="text-xs font-[700] text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                              {card.saveText}
                            </span>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-[#0083B0] flex items-center justify-center mb-4">
                            <IconC className="w-6 h-6 stroke-[2.2]" />
                          </div>
                          <h3 className="text-xl font-[800] text-slate-900 tracking-tight mb-1">
                            {card.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-normal mb-4">
                            {card.subtitle}
                          </p>
                          <div className="py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-5">
                            <span className="text-base font-[900] text-[#006095] tracking-tight">{card.price}</span>
                          </div>
                          <div className="space-y-2.5">
                            {card.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start space-x-2 text-xs sm:text-[13px] text-slate-600 font-normal">
                                <Check className="w-4 h-4 text-[#0083B0] shrink-0 mt-0.5 stroke-[2.5]" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="pt-6 mt-6 border-t border-slate-100">
                          <a
                            href="#quote-form"
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-[800] transition-all flex items-center justify-center space-x-2 ${
                              card.isFeatured
                                ? 'bg-[#0083B0] hover:bg-[#006095] text-white shadow-md shadow-[#0083B0]/25'
                                : 'bg-slate-100 hover:bg-[#0083B0] hover:text-white text-slate-700'
                            }`}
                          >
                            <span>Choose Plan</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center justify-center space-x-3 mt-8">
              <button
                onClick={handlePrevCard}
                className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
                aria-label="Previous card"
              >
                <ArrowLeft className="w-7 h-7 stroke-[2.5] group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNextCard}
                className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
                aria-label="Next card"
              >
                <ArrowRight className="w-7 h-7 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Steps Hiring Process */}
      <HireDeveloper4Steps
        title={`Hire ${config.techName} Developers in 4 Easy Steps`}
        subtitle={`Follow our streamlined onboarding process to bring senior ${config.techName} engineers onto your team within 48 hours.`}
      />

      {/* Seasoned Experts Team */}
      <SeasonedExpertsTeamSection />

      {/* Tech Stack Proficient Grid */}
      <TechStackProficientGrid />

      {/* Leverage Expertise Grid */}
      <LeverageExpertiseGridSection
        activeTab={leverageTab}
        setActiveTab={setLeverageTab}
      />

      {/* Innovative Solution Video Section */}
      <InnovativeSolutionVideo />

      {/* Digital Transformation Case Studies */}
      <DigitalTransformationCaseStudies />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Video Testimonials Story */}
      <VideoTestimonialsStory />

      {/* Industry Focused Insights */}
      <IndustryFocusedInsightsSection />

      {/* Key Metrics / Numbers */}
      <AboutKeyMetrics />

      {/* Work Process Grid */}
      <WorkProcessGrid />

      {/* Engagement Models Section */}
      <EngagementModelsSection />

      {/* Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection
        title={`Frequently Asked Questions: Hire ${config.techName} Developers`}
        faqList={config.faqs}
      />

      {/* Recent Blogs */}
      <RecentBlogsSection />

      {/* Premium Services Grid */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* ============================================================
          SECTION: What Sets Us Apart As [Tech] Development? (Matching Image 1 Exact Design)
          ============================================================ */}
      <section id="quote-form" className="py-20 bg-[#f8fbfe] font-sans text-slate-900 border-t border-slate-200">
        <Container>
          <div className="text-center max-w-5xl mx-auto space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              What Sets Us Apart As {config.techName} Development?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column: 5 Feature Items */}
            <div className="lg:col-span-6 space-y-7">
              {/* Item 1: Flexible-Engagement-Models */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="14" r="5" />
                    <circle cx="14" cy="18" r="4" />
                    <circle cx="34" cy="18" r="4" />
                    <path d="M16 30c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    <path d="M6 34c0-3.3 2.7-6 6-6" />
                    <path d="M42 34c0-3.3-2.7-6-6-6" />
                    <path d="M8 38h32l-4 6H12z" fill="#E2E8F0" fillOpacity="0.4" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Flexible-Engagement-Models
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.
                  </p>
                </div>
              </div>

              {/* Item 2: 100% Transparency */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="20" cy="24" r="14" />
                    <circle cx="28" cy="24" r="14" strokeDasharray="3 3" />
                    <line x1="20" y1="12" x2="28" y2="36" stroke="#94A3B8" strokeWidth="1.5" />
                    <line x1="24" y1="10" x2="24" y2="38" stroke="#94A3B8" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    100% Transparency
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    100% transparency policy to keep our client and our team on the same page.
                  </p>
                </div>
              </div>

              {/* Item 3: Experienced Developers */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="16" r="6" />
                    <path d="M16 14h16M18 10h12" />
                    <path d="M12 36v-6c0-4 3-6 7-6h10c4 0 7 2 7 6v6" />
                    <rect x="18" y="32" width="12" height="8" rx="1.5" fill="#E2E8F0" fillOpacity="0.4" />
                    <path d="M21 36l-2 2 2 2M27 36l2 2-2 2" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Experienced Developers
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.
                  </p>
                </div>
              </div>

              {/* Item 4: Timely Delivery */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="24" r="16" />
                    <polyline points="24 14 24 24 30 28" />
                    <path d="M24 4v4M40 8l-3 3M8 8l3 3" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Timely Delivery
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    We value the time and are particular about timely deliveries by following the highest quality standards.
                  </p>
                </div>
              </div>

              {/* Item 5: Technical Support */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="28" cy="18" r="8" strokeDasharray="3 3" />
                    <path d="M28 14v8M24 18h8" />
                    <path d="M12 36l8-8 4 4-8 8H12z" fill="#E2E8F0" fillOpacity="0.4" />
                    <path d="M18 30l10-10 4 4-10 10" />
                    <path d="M30 12l4-4 4 4-4 4" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Technical Support
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: "Let's Discuss" Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-xl border border-slate-300 shadow-lg p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[32px] border-t-[#00709E] border-r-[32px] border-r-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[32px] border-b-[#00709E] border-l-[32px] border-l-transparent"></div>

                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-[800] text-slate-900 tracking-tight">
                    Let's Discuss
                  </h3>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold">Thank You!</h4>
                    <p className="text-sm">We have received your message. Our {config.techName} expert will get in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your name *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Email ID *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors"
                      />
                    </div>
                    <div>
                      <div className="flex rounded-md border border-slate-300 overflow-hidden focus-within:border-[#005F96] focus-within:ring-1 focus-within:ring-[#005F96]">
                        <div className="bg-slate-50 border-r border-slate-300 px-3 py-3 text-sm text-slate-700 font-semibold flex items-center space-x-1 shrink-0">
                          <span>+91</span>
                          <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="Mobile Number *"
                          className="w-full bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us more about your project *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors resize-none"
                      />
                    </div>

                    <div className="border border-slate-200 bg-slate-50/70 rounded-md p-2.5 px-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Success!</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          </svg>
                          <span className="text-[10px] font-bold text-slate-800 tracking-wider">CLOUDFLARE</span>
                        </div>
                        <span className="text-[8px] text-slate-400">Privacy • Terms</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#005F96] hover:bg-[#004e7c] text-white font-[800] py-3.5 px-6 rounded-md text-base transition-all shadow-md active:scale-[0.99] tracking-wide"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Subscribe Newsletter Section */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireDedicatedTechDevelopersService;
