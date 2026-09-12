import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ProudAwardsBanner from './ProudAwardsBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock,
  Calendar,
  ArrowLeft,
  PieChart,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Server,
  Cloud,
  Database,
  Users,
  LayoutGrid,
  Car,
  Landmark,
  HeartPulse,
  Sprout,
  GraduationCap,
  ShoppingBag,
  Scale,
  LineChart,
  Globe,
  Coins,
  Award,
  RotateCw,
  Sliders,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Lock,
  MessageSquare,
  Flag,
  FileText,
  Rocket,
  Milestone,
  RefreshCw
} from 'lucide-react';

export const HireCSharpDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [expertCategory, setExpertCategory] = useState(0);
  const [cardSubTabs, setCardSubTabs] = useState({});
  const [leverageTab, setLeverageTab] = useState(0);
  const [industryTab, setIndustryTab] = useState(0);
  const [sectorSlideIndex, setSectorSlideIndex] = useState(0);
  const [isSectorHovered, setIsSectorHovered] = useState(false);
  const [enableSectorTransition, setEnableSectorTransition] = useState(true);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // Truly infinite seamless loop (no backward jump) for Sectors Thriving Carousel
  useEffect(() => {
    if (isSectorHovered) return;
    const interval = setInterval(() => {
      setSectorSlideIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= 14) {
          setTimeout(() => {
            setEnableSectorTransition(false);
            setSectorSlideIndex(7);
            setTimeout(() => {
              setEnableSectorTransition(true);
            }, 50);
          }, 700);
        }
        return nextIndex;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, [isSectorHovered]);

  // 6 Flexible Hiring Model Cards
  const hiringModelCards = [
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '8 hours a day, 5 days a week',
      price: '160 hours/month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months',
        'Hire Dedicated C# Developers that exclusively works for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 22.00/Hour',
      IconComp: Clock,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Payment based on hours worked',
        'checked-engagement 4 hours a day, 5 days a week',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2750.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: 'Starting From',
      price: '$ 8100.00/ Month',
      IconComp: PieChart,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: 'Starting From',
      price: '$24999.0',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Save Up TO 20%',
      badgeText: 'Best Deal',
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    },
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '4 hours a day, 5 days a week',
      price: '80 hours/month',
      IconComp: Briefcase,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'hecked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    }
  ];

  // Automatic 1-by-1 continuous card scrolling (2s interval speed)
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setCardSlideIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(cardSlideIndex % hiringModelCards.length);
    }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team ($21/hr)',
    appType: 'C# .NET Enterprise Software',
    budget: '$10,000 - $25,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // C# Development Capabilities
  const csharpCapabilities = [
    {
      title: 'Enterprise .NET Core & C# Apps',
      desc: 'Architect high-throughput, cross-platform microservices and backend API engines using modern .NET 8 / C#.',
      icon: Server
    },
    {
      title: 'C# Cloud Native & Azure Solutions',
      desc: 'Build secure, auto-scaling cloud microservices, Azure Functions, App Services, and Kubernetes workloads.',
      icon: Cloud
    },
    {
      title: 'ASP.NET Core Web API Development',
      desc: 'Develop sub-10ms RESTful APIs and GraphQL endpoints for web portals, mobile backends, and IoT systems.',
      icon: Code2
    },
    {
      title: 'Legacy .NET Migration & Refactoring',
      desc: 'Upgrade legacy .NET Framework 4.x apps to high-performance .NET 8 with zero business logic downtime.',
      icon: Zap
    },
    {
      title: 'Entity Framework & SQL Server Ops',
      desc: 'Optimize database schemas, LINQ queries, stored procedures, and high-concurrency SQL Server clusters.',
      icon: Database
    },
    {
      title: 'Desktop WPF & WinUI Applications',
      desc: 'Engineer responsive desktop applications for Windows enterprise environments with modern UI controls.',
      icon: Cpu
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: 'C# & .NET 8', desc: 'Modern cross-platform runtime for enterprise microservices, APIs, and cloud services.' },
      { name: 'ASP.NET Core', desc: 'High-performance web API framework handling thousands of requests per second.' },
      { name: 'Entity Framework Core', desc: 'ORM engine for robust object-relational mapping and LINQ database operations.' }
    ],
    frontend: [
      { name: 'Blazor & React.js', desc: 'Modern web UIs powered by Blazor WebAssembly or React frontend integrations.' },
      { name: 'WPF & WinUI 3', desc: 'Windows desktop user interface framework for high-performance enterprise tools.' }
    ],
    database: [
      { name: 'Microsoft SQL Server', desc: 'Enterprise relational database with high availability and columnstore indexing.' },
      { name: 'PostgreSQL & Redis', desc: 'Distributed caching and open-source database clusters for sub-millisecond lookups.' }
    ],
    devops: [
      { name: 'Azure DevOps & AWS', desc: 'Automated CI/CD pipelines, Docker container deployments, and ARM/Terraform templates.' }
    ],
    testing: [
      { name: 'xUnit & Moq', desc: 'Automated unit testing, integration tests, and mock frameworks maintaining >90% code coverage.' }
    ],
    pm: [
      { name: 'Jira & Azure Boards', desc: 'Agile sprint planning, bi-weekly reviews, and transparent developer daily reporting.' }
    ]
  };

  // C# FAQs
  const csharpFaqs = [
    {
      q: '1. What hiring models do you offer for hiring C# developers?',
      a: 'We offer flexible hiring models including Dedicated Developer Squads (Full-Time @ $21/hr), Hourly Rate, and Fixed-Price Project Sprint Sprints depending on your project scope and roadmap.'
    },
    {
      q: '2. How quickly can I onboard a C# programmer?',
      a: 'We can match and onboard pre-screened senior C# developers within 24 to 48 hours to start work on your sprint immediately.'
    },
    {
      q: '3. Do your C# developers work in my local timezone?',
      a: 'Yes, our developers offer minimum 4-5 hours of daily timezone overlap across EST, CST, PST, GMT, and AEST business hours.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before sharing any project files or IP to guarantee complete data security and source code ownership.'
    },
    {
      q: '5. Can your developers upgrade our legacy .NET Framework app to .NET 8?',
      a: 'Absolutey. Our senior .NET architects specialize in refactoring legacy ASP.NET WebForms/MVC applications to modern cross-platform .NET 8 Core microservices.'
    },
    {
      q: '6. What is the experience level of your C# developers?',
      a: 'Our C# engineers have an average of 5+ years of experience in enterprise C#, Azure, SQL Server, microservices, and design patterns.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire C# Developers | Dedicated C Sharp Programmers at $21/Hr"
        description="Hire dedicated C# developers from Firevy. Seasoned C Sharp & .NET Core programmers for enterprise web apps, microservices, and cloud solutions starting at $21/hour."
        canonical="/services/hire-c-sharp-developers"
      />

      {/* ============================================================
          HERO SECTION (Matching Exact User Provided Mockup Design)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire C Sharp Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                We have a dedicated team of seasoned and qualified C# developers. You can choose and hire c sharp programmer from our range of hiring models according to our needs and budget. Get your quote today!
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 pb-2">
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">200+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">20+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">2800+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">320+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box */}
              <div className="space-y-3 pt-3">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[16px] p-2 pl-3.5 pr-2 w-full max-w-[410px] shadow-lg shadow-[#0089a8]/25">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-[#0089a8] stroke-[2.5]" />
                    </div>
                    <span className="text-xl sm:text-[22px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Background translucent soft blue geometric cards */}
              <div className="absolute -top-6 -left-2 w-28 h-28 bg-[#D4E8F5]/50 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-2 w-36 h-36 bg-[#D4E8F5]/60 rounded-2xl pointer-events-none" />

              {/* Laptop & Floating Badges */}
              <div className="relative w-full max-w-[480px]">
                {/* Green Code Badge floating top-right */}
                <div className="absolute -top-5 -right-3 z-20 bg-[#00BFA5] text-white p-2.5 px-3.5 rounded-xl shadow-lg font-mono font-bold text-sm flex items-center justify-center space-x-1 border-2 border-white">
                  <span className="text-base">&lt;/&gt;</span>
                </div>

                {/* Yellow Diamond Badge floating bottom-left */}
                <div className="absolute bottom-6 -left-6 z-20 bg-[#F5A623] text-white w-12 h-12 rounded-xl rotate-12 shadow-lg flex items-center justify-center font-mono font-bold text-base border-2 border-white">
                  <span className="-rotate-12">{'{ }'}</span>
                </div>

                {/* Soft cyan circle accent */}
                <div className="absolute bottom-2 -left-12 z-10 w-4 h-4 rounded-full border-2 border-cyan-300 opacity-60" />

                {/* Vector Laptop Component */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 340" className="w-full h-auto">
                    <defs>
                      <linearGradient id="laptopBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                      <linearGradient id="laptopBase" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#E2E8F0" />
                        <stop offset="100%" stopColor="#CBD5E1" />
                      </linearGradient>
                      <linearGradient id="csharpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7B1FA2" />
                        <stop offset="100%" stopColor="#512DA8" />
                      </linearGradient>
                    </defs>

                    {/* Screen Bezel */}
                    <rect x="50" y="20" width="440" height="265" rx="12" fill="url(#laptopBezel)" stroke="#334155" strokeWidth="2" />
                    {/* Webcam */}
                    <circle cx="270" cy="30" r="3" fill="#64748B" />

                    {/* Display Screen */}
                    <rect x="60" y="38" width="420" height="236" rx="4" fill="#FFFFFF" />

                    {/* Code Lines on Screen */}
                    <rect x="76" y="58" width="80" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="164" y="58" width="140" height="7" rx="3" fill="#E2E8F0" />
                    
                    <rect x="76" y="80" width="200" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="76" y="102" width="150" height="7" rx="3" fill="#E2E8F0" />
                    
                    <rect x="76" y="124" width="180" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="76" y="146" width="120" height="7" rx="3" fill="#E2E8F0" />

                    <rect x="76" y="168" width="160" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="76" y="190" width="190" height="7" rx="3" fill="#E2E8F0" />

                    <rect x="76" y="212" width="220" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="76" y="234" width="110" height="7" rx="3" fill="#E2E8F0" />

                    {/* C# Purple Hexagon Badge on Right Side of Display */}
                    <g transform="translate(360, 155)">
                      <polygon points="0,-52 45,-26 45,26 0,52 -45,26 -45,-26" fill="url(#csharpGrad)" />
                      <text x="-2" y="14" fill="#FFFFFF" fontSize="38" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">C#</text>
                    </g>

                    {/* Laptop Base Stand / Hinge */}
                    <path d="M25 285 L515 285 C525 285 530 290 525 295 L500 305 C495 307 45 307 40 305 L15 295 C10 290 15 285 25 285 Z" fill="url(#laptopBase)" stroke="#94A3B8" strokeWidth="1" />
                    {/* Trackpad Notch */}
                    <path d="M230 286 L310 286 L305 290 L235 290 Z" fill="#94A3B8" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* ============================================================
          HIRE LEADING C SHARP DEVELOPERS SECTION (Exact Match To Mockup)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image Illustration (Exact Match To User Uploaded Reference) */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/c_sharp_developer_illustration.png"
                  alt="Hire Leading C Sharp Developers"
                  className="w-full h-auto max-w-[480px] object-contain mx-auto drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Column Text (Exact Match To Image 2 Reference) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-black tracking-tight leading-[1.15]">
                Hire Leading C Sharp<br />Developers
              </h2>
              <p className="text-base sm:text-[17px] text-slate-600 leading-[1.65] font-[400] max-w-xl">
                It's time to hire c sharp development company for your next project. The team uses their years of experience and knowledge to provide unique solutions for startups, SMEs, and large enterprises. Choose the finest engagement model and get hire from a team of C# developers that best fits your business objectives.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          OUR FLEXIBLE HIRING MODELS SECTION (Infinite 1-by-1 Carousel)
          ============================================================ */}
      <section className="py-20 bg-[#F0F6FB] text-slate-900 font-sans overflow-hidden">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-[400]">
              Hire C Sharp Developers from Sapphire Software Solutions Starts from,
            </p>
          </div>

          {/* 1-by-1 Infinite Carousel Container (Exactly 3 Cards Visible) */}
          <div
            className="relative overflow-hidden w-full py-4"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex gap-8 ${enableTransition ? 'transition-transform duration-300 ease-in-out' : ''}`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(-${cardSlideIndex} * (100% + 32px) / 3))`
              }}
            >
              {[...hiringModelCards, ...hiringModelCards].map((item, idx) => {
                const IconComponent = item.IconComp;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`w-full md:w-[calc((100%-64px)/3)] shrink-0 bg-white rounded-[22px] p-8 transition-all flex flex-col justify-between text-center relative group ${
                      item.isFeatured
                        ? 'border-[3px] border-[#005F96] shadow-xl'
                        : 'border border-slate-200/90 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {item.saveText && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 text-[11px] font-bold text-[#005F96] tracking-wide whitespace-nowrap">
                        {item.saveText}
                      </div>
                    )}
                    <div>
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-[#006095] border border-blue-100 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <h3 className="text-xl font-[800] text-slate-900">{item.title}</h3>
                        {item.badgeText && (
                          <span className="bg-blue-50 text-[#005F96] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200/80">
                            {item.badgeText}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-xs text-slate-500 font-semibold mb-3">{item.subtitle}</div>
                      <div className={`text-xl sm:text-2xl font-[900] mb-6 ${item.isFeatured ? 'text-[#005F96]' : 'text-slate-900'}`}>
                        {item.price}
                      </div>

                      <ul className="space-y-3 text-xs text-slate-700 text-left font-medium mb-8">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <a
                        href="#quote-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-3.5 rounded-[10px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-sm text-center transition-colors shadow-md block"
                      >
                        Hire Now
                      </a>
                      <div className="mt-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200/80">
                          We sign NDA for all our projects.
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows at bottom center (No dots, just arrows) */}
          <div className="flex items-center justify-center space-x-3 mt-10">
            <button
              onClick={() => {
                setEnableTransition(true);
                setCardSlideIndex((prev) => (prev > 0 ? prev - 1 : hiringModelCards.length - 1));
              }}
              aria-label="Previous Model"
              className="text-[#005F96] hover:text-[#004A75] p-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-8 h-8 stroke-[2.5]" />
            </button>
            <button
              onClick={() => {
                setEnableTransition(true);
                setCardSlideIndex((prev) => prev + 1);
              }}
              aria-label="Next Model"
              className="text-[#005F96] hover:text-[#004A75] p-2 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-8 h-8 stroke-[2.5]" />
            </button>
          </div>
        </Container>
      </section>

      {/* ============================================================
          DEVELOPER PROFICIENCY COMPARISON TABLE
          ============================================================ */}
      <section className="py-20 bg-white text-slate-900 font-sans">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-[400]">
              Hire C Sharp Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-[16px] border border-slate-300 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#005F96] text-white border-b-2 border-white">
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Range of Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Junior Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Mid-Level Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base w-1/4">
                      Senior Developers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm font-[600]">
                  {/* Row 1: Approx Cost */}
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Approx Cost
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$17</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$22</td>
                    <td className="py-3.5 px-6 text-slate-800">$29</td>
                  </tr>

                  {/* Row 2: Years of Experience */}
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Years of Experience
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">1-3 Years</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">3-5 Years</td>
                    <td className="py-3.5 px-6 text-slate-800">5+ Years</td>
                  </tr>

                  {/* Row 3: Project Manager */}
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Project Manager
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  {/* Row 4: Time Zone Flexibility */}
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Time Zone Flexibility
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  {/* Row 5: Quality Guarantee */}
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Quality Guarantee
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  {/* Row 6: Working Hours */}
                  <tr>
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white">
                      Working Hours
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6 text-slate-800">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          EXPERTISE OF OUR C SHARP DEVELOPERS
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-[1.2]">
                Expertise Of Our C Sharp Developers
              </h2>
              <p className="text-slate-500 font-[400] text-sm sm:text-[15px] leading-relaxed">
                You can hire the best and most experienced C# ASP.Net resources from us for customized solutions that ensure corporate growth, unique development solutions and receive 24-hour technical assistance. Our Developers Use C# To Development.
              </p>
              <p className="text-slate-500 font-[400] text-sm sm:text-[15px] leading-relaxed">
                Hire professional C# software developers and consultants to create modern applications that work on any platform, including the web, cellphones, and desktops.
              </p>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <img
                  src="/images/c_sharp_expertise_illustration.png"
                  alt="Expertise Of Our C Sharp Developers"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          CLUTCH TOP RATED C# DEVELOPMENT COMPANY BANNER (Exact Reference Layout & No-Gap Marquee)
          ============================================================ */}
      <section className="py-7 bg-[#005F96] text-white font-sans overflow-hidden">
        <Container className="max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            {/* Left Header & Golden 3D Trophy Laurel Wreath */}
            <div className="flex items-center space-x-4 text-left shrink-0">
              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-[900] text-white tracking-tight leading-[1.15]">
                World Wide Top Rated C#<br />
                Development Company on<br />
                Clutch
              </h2>
              {/* Golden 3D Trophy Laurel Wreath Icon with Diamond */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="gold3DGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF176" />
                      <stop offset="40%" stopColor="#FFD700" />
                      <stop offset="75%" stopColor="#FFA000" />
                      <stop offset="100%" stopColor="#FF8F00" />
                    </linearGradient>
                    <linearGradient id="goldCupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF9C4" />
                      <stop offset="50%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#E65100" />
                    </linearGradient>
                  </defs>

                  {/* Laurel Wreath Stems */}
                  <path d="M50 80 C32 78 18 64 18 45 C18 30 28 18 42 14" stroke="url(#gold3DGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M50 80 C68 78 82 64 82 45 C82 30 72 18 58 14" stroke="url(#gold3DGrad)" strokeWidth="3" strokeLinecap="round" fill="none" />

                  {/* Laurel Leaves Left */}
                  <ellipse cx="40" cy="15" rx="3.5" ry="7" transform="rotate(-40 40 15)" fill="url(#gold3DGrad)" />
                  <ellipse cx="32" cy="22" rx="3.5" ry="7" transform="rotate(-30 32 22)" fill="url(#gold3DGrad)" />
                  <ellipse cx="25" cy="32" rx="3.5" ry="7" transform="rotate(-15 25 32)" fill="url(#gold3DGrad)" />
                  <ellipse cx="21" cy="44" rx="3.5" ry="7" transform="rotate(0 21 44)" fill="url(#gold3DGrad)" />
                  <ellipse cx="22" cy="56" rx="3.5" ry="7" transform="rotate(15 22 56)" fill="url(#gold3DGrad)" />
                  <ellipse cx="28" cy="67" rx="3.5" ry="7" transform="rotate(30 28 67)" fill="url(#gold3DGrad)" />
                  <ellipse cx="36" cy="75" rx="3.5" ry="7" transform="rotate(45 36 75)" fill="url(#gold3DGrad)" />

                  {/* Laurel Leaves Right */}
                  <ellipse cx="60" cy="15" rx="3.5" ry="7" transform="rotate(40 60 15)" fill="url(#gold3DGrad)" />
                  <ellipse cx="68" cy="22" rx="3.5" ry="7" transform="rotate(30 68 22)" fill="url(#gold3DGrad)" />
                  <ellipse cx="75" cy="32" rx="3.5" ry="7" transform="rotate(15 75 32)" fill="url(#gold3DGrad)" />
                  <ellipse cx="79" cy="44" rx="3.5" ry="7" transform="rotate(0 79 44)" fill="url(#gold3DGrad)" />
                  <ellipse cx="78" cy="56" rx="3.5" ry="7" transform="rotate(-15 78 56)" fill="url(#gold3DGrad)" />
                  <ellipse cx="72" cy="67" rx="3.5" ry="7" transform="rotate(-30 72 67)" fill="url(#gold3DGrad)" />
                  <ellipse cx="64" cy="75" rx="3.5" ry="7" transform="rotate(-45 64 75)" fill="url(#gold3DGrad)" />

                  {/* Bottom Diamond Accent */}
                  <polygon points="50,77 54,81 50,85 46,81" fill="url(#gold3DGrad)" />

                  {/* Center Trophy Cup */}
                  <path d="M38 67 H62 L60 72 H40 Z" fill="url(#goldCupGrad)" />
                  <rect x="42" y="64" width="16" height="3" fill="url(#gold3DGrad)" />
                  <rect x="47" y="55" width="6" height="9" fill="url(#gold3DGrad)" />
                  <path d="M35 28 H65 V46 C65 53 57 58 50 58 C43 58 35 53 35 46 Z" fill="url(#goldCupGrad)" />
                  <ellipse cx="50" cy="28" rx="15" ry="3" fill="#FFFDE7" />
                  <path d="M35 32 C26 32 26 44 35 46" stroke="url(#gold3DGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M65 32 C74 32 74 44 65 46" stroke="url(#gold3DGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Award Ribbon Badges (Starting Immediately Next To Trophy With Zero Blank Gap) */}
            <div className="relative overflow-hidden flex-1 min-w-0 w-full">
              <div
                className="flex space-x-3.5 w-max py-1 hover:[animation-play-state:paused]"
                style={{ animation: 'marquee 13s linear infinite' }}
              >
                {[
                  { title: 'SOFTWARE DEVELOPERS COMPANIES' },
                  { title: 'WEB DEVELOPERS COMPANIES' },
                  { title: 'APP DEVELOPMENT COMPANY' },
                  { title: 'BLOCKCHAIN COMPANY' },
                  { title: 'DESIGN COMPANY' },
                  { title: 'E-COMMERCE DEVELOPERS' },
                  { title: 'SOFTWARE DEVELOPERS COMPANIES' },
                  { title: 'WEB DEVELOPERS COMPANIES' },
                  { title: 'APP DEVELOPMENT COMPANY' },
                  { title: 'BLOCKCHAIN COMPANY' },
                  { title: 'DESIGN COMPANY' },
                  { title: 'E-COMMERCE DEVELOPERS' }
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-slate-900 shadow-xl overflow-hidden w-[105px] sm:w-[115px] shrink-0 border-t-[5px] border-[#8C1D40] flex flex-col justify-between p-2.5 pb-4 text-center relative group hover:-translate-y-1 transition-all cursor-pointer"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)' }}
                  >
                    <div className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tight">MOST REVIEWED</div>
                    <div className="text-[8.5px] font-black text-[#8C1D40] leading-tight my-1.5 uppercase min-h-[26px] flex items-center justify-center">
                      {badge.title}
                    </div>
                    <div className="flex items-center justify-center space-x-0.5 my-1 text-[#8C1D40]">
                      <span className="text-[7px]">★</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#8C1D40] text-white flex items-center justify-center text-[7px] font-bold">
                        ★
                      </div>
                      <span className="text-[7px]">★</span>
                    </div>
                    <div className="text-[7px] font-extrabold text-slate-400 tracking-tighter uppercase mt-1">
                      THE MANIFEST
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          WE HAVE POOL OF TALENTED C# DEVELOPERS (Exact 2-Column Speech Bubble Layout)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-6xl">
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              We Have Pool Of Talented C# Developers
            </h2>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Speech-Bubble Quote Card (Text Perfectly Fitted) */}
            <div className="md:col-span-5 flex justify-center md:justify-start relative">
              <div className="w-full max-w-[350px] bg-[#F2F9FD] p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-sm border border-blue-50/60 md:after:content-[''] md:after:absolute md:after:-right-[12px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:border-[12px] md:after:border-transparent md:after:border-l-[#F2F9FD]">
                {/* SVG Topographic Contour Lines Background */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="none">
                  <path fill="none" stroke="#005F96" strokeWidth="1.2" d="M -50 30 Q 75 130 350 30 M -50 80 Q 75 180 350 80 M -50 130 Q 75 230 350 130 M -50 180 Q 75 280 350 180 M -50 230 Q 75 330 350 230 M -50 280 Q 75 380 350 280" />
                </svg>

                {/* Double Quote Icon */}
                <div className="text-[#005F96] relative z-10 pt-1">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Big Quote Heading (Perfect Fit Vertical Layout) */}
                <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[900] text-[#005F96] leading-[1.25] tracking-tight relative z-10 pt-4 pb-2">
                  We Offer The Best<br />
                  C# Talent<br />
                  Available For Hire
                </h3>
              </div>
            </div>

            {/* Right Text Column & CTA Button */}
            <div className="md:col-span-7 space-y-5 text-left pl-0 md:pl-4">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                Our hiring methodology for C# developers offers the highest degree of openness, security, and scalability. With our adaptable services, you may employ C# expertise from our vast pool of resources for a set amount of time or on an as-needed basis.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-[400]">
                Hoping to push your product project forward? Hire skilled .NET developers proficient at making custom-made to your necessities. Our capable .NET engineers acquire broad experience C#, ASP.NET, and .NET Center, guaranteeing top execution applications across different spaces.{' '}
                <a href="#quote-form" className="font-bold text-[#005F96] hover:underline">
                  Hire Dot net Developers
                </a>{' '}
                upgrade existing frameworks, or offering progressing help, our committed experts convey greatness to accomplish your business goals
              </p>
              <div className="pt-3">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-sm tracking-wide transition-all shadow-md"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Services Grid (Directly Below Pool of C# Developers) */}
      <PremiumServicesGrid />

      {/* ============================================================
          MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Meet Sapphire’s Exceptional Team of Seasoned Experts
            </h2>
          </div>

          {/* Tab Navigation Bar (Pills Bar) */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto py-2 scrollbar-none">
            <div className="bg-[#EBF4FA] p-1.5 rounded-full inline-flex space-x-1 sm:space-x-2 shrink-0 border border-blue-100/60">
              {[
                'Trending',
                'Product Development',
                'SaaS',
                'AI/ML',
                'Data Engineering',
                'Design',
                'Marketing',
                'IoT App Dev',
                'Blockchain Dev'
              ].map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setExpertCategory(idx)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-[700] transition-all cursor-pointer whitespace-nowrap ${
                    expertCategory === idx
                      ? 'bg-[#005F96] text-white shadow-md'
                      : 'text-slate-700 hover:text-[#005F96] hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic 3 Team Cards Grid based on Active Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {(() => {
              const categoryNames = [
                'Trending',
                'Product Development',
                'SaaS',
                'AI/ML',
                'Data Engineering',
                'Design',
                'Marketing',
                'IoT App Dev',
                'Blockchain Dev'
              ];

              const categoryTeams = {
                'Trending': [
                  {
                    id: 'trending-1',
                    title: 'Mobile Application Team',
                    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
                    techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                    composition: ['1 Tech Lead', '3 Senior Mobile Devs', '2 QA Testers', '1 UI Designer']
                  },
                  {
                    id: 'trending-2',
                    title: 'Microsoft Dev. Team',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
                    techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                    composition: ['1 C# Lead Architect', '5 Senior .NET Engineers', '2 Azure Cloud Specialist']
                  },
                  {
                    id: 'trending-3',
                    title: 'Vue.JS Team',
                    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
                    techs: ['Custom App Development', 'Consulting', 'Migration & Upgradation Services', 'Support & Maintenance Services'],
                    composition: ['1 Lead Frontend Engineer', '3 Vue.JS Devs', '1 UI/UX Specialist']
                  }
                ],
                'Product Development': [
                  {
                    id: 'prod-1',
                    title: 'Vidyalaya School Software',
                    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
                    techs: ['.Net Core', '.Net Core MVC Development', '.Net Core IOT Development', '.Net Core Web API Development', 'Angular', 'SQL Server', 'Flutter', 'Laravel', 'React', 'Node JS'],
                    composition: ['1 Project Manager', '4 .NET Core Engineers', '2 Angular Devs', '2 QA Testers']
                  },
                  {
                    id: 'prod-2',
                    title: 'OccuCare Software',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
                    techs: ['Flutter', 'Laravel', 'SQL Server', 'React', 'Node JS', '.Net Core MVC Development', '.Net Core IOT Development', '.Net Core Web API Development'],
                    composition: ['1 Product Lead', '3 Full Stack Devs', '1 DB Administrator', '1 DevOps Specialist']
                  },
                  {
                    id: 'prod-3',
                    title: 'Health Tech',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
                    techs: ['Jenkins', 'Nodejs', 'Reactjs', 'GCP', 'New Relic', 'Docker', 'Cloudflare', 'MongoDB', 'Asana'],
                    composition: ['1 Healthcare Domain Expert', '4 Backend Devs', '2 React Engineers', '1 Cloud Architect']
                  }
                ],
                'SaaS': [
                  {
                    id: 'saas-1',
                    title: 'Mobile Application Team',
                    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
                    techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                    composition: ['1 Mobile Architect', '3 Senior App Engineers', '2 Automation QA', '1 UI/UX Specialist']
                  },
                  {
                    id: 'saas-2',
                    title: 'Microsoft Dev. Team',
                    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
                    techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                    composition: ['1 Microsoft MVP Lead', '4 Senior C# Engineers', '2 Azure Cloud Architects']
                  },
                  {
                    id: 'saas-3',
                    title: 'Vue.JS Team',
                    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
                    techs: ['Custom App Development', 'Consulting', 'Migration & Upgradation Services', 'Support & Maintenance Services'],
                    composition: ['1 Frontend Architect', '3 Senior Vue.JS Devs', '1 Product Designer']
                  }
                ],
                'AI/ML': [
                  {
                    id: 'aiml-1',
                    title: 'Artificial Intelligence Dev.',
                    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
                    techs: ['Health Care', 'Generative AI', 'Chatbot', 'Python'],
                    composition: ['1 AI Research Scientist', '3 Python/PyTorch Devs', '1 MLOps Engineer']
                  },
                  {
                    id: 'aiml-2',
                    title: 'Machine Learning Dev. Team',
                    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
                    techs: ['Artificial intelligence', 'Generative AI', 'Heth care', 'Metaverse', 'Augmentation'],
                    composition: ['1 Lead ML Engineer', '4 Data Scientists', '1 Computer Vision Specialist']
                  },
                  {
                    id: 'aiml-3',
                    title: 'Chatbot Development Team',
                    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
                    techs: ['Artificial intelligence', 'Chatbot', 'Hybrid', 'Machine Learning', 'Microsoft Azure'],
                    composition: ['1 NLP Specialist', '3 Conversational AI Devs', '1 Azure Bot Architect']
                  }
                ],
                'Data Engineering': [
                  {
                    id: 'data-1',
                    title: 'Data Analytics Services Team',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                    techs: ['Big Data Analytics', 'Predictive Analytics', 'Data Management', 'Visualization And Reporting'],
                    composition: ['1 Lead Analytics Architect', '3 Data Engineers', '2 BI Analysts']
                  },
                  {
                    id: 'data-2',
                    title: 'Data Migration Services Team',
                    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
                    techs: ['Data Science', 'Data Warehousing', 'Data Analytics', 'Big Data Implementation'],
                    composition: ['1 Data Migration Lead', '3 ETL Developers', '1 Database Administrator']
                  },
                  {
                    id: 'data-3',
                    title: 'Data Science Team',
                    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
                    techs: ['Data Science Team', 'Data Visualization', 'Machin Learning', 'Data Analysis', 'Data Science', 'AI', 'Business Intelligence', 'AWS', 'Data Mining'],
                    composition: ['1 Principal Data Scientist', '4 Data Analysts', '2 Machine Learning Engineers']
                  }
                ],
                'Design': [
                  {
                    id: 'design-1',
                    title: 'Mobile Design Team',
                    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
                    techs: ['UI/UX Design', 'HTML', 'CSS', 'SCSS', 'Figma', 'Web Flow'],
                    composition: ['1 Lead Mobile Designer', '2 UI/UX Specialists', '1 Interactive Prototyper']
                  },
                  {
                    id: 'design-2',
                    title: 'Web Design Team',
                    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
                    techs: ['UI/UX Design', 'HTML', 'CSS', 'SCSS', 'Figma', 'Web Flow'],
                    composition: ['1 Web Design Lead', '3 Frontend Designers', '1 Design System Specialist']
                  },
                  {
                    id: 'design-3',
                    title: 'UI/UX Team',
                    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
                    techs: ['HTML', 'CSS', 'Figma', 'Adobe XD', 'InVision', 'Sketch'],
                    composition: ['1 Principal UI/UX Architect', '3 UX Researchers', '2 Wireframing Experts']
                  }
                ],
                'Marketing': [
                  {
                    id: 'mkt-1',
                    title: 'Digital Marketing Team',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                    techs: ['Mobile Marketing', 'Pay-per-click', 'SEO', 'Content Marketing'],
                    composition: ['1 Digital Marketing Lead', '3 PPC Specialists', '2 Content Strategists']
                  },
                  {
                    id: 'mkt-2',
                    title: 'SEO Team',
                    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80',
                    techs: ['Google Analytics', 'Google Search Console', 'GTM', 'SEMrush'],
                    composition: ['1 Technical SEO Lead', '3 On-Page/Off-Page Specialists', '1 Analytics Expert']
                  },
                  {
                    id: 'mkt-3',
                    title: 'Social Media Team',
                    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
                    techs: ['Canva', 'Buffer', 'HootSuit', 'Buzzsumo'],
                    composition: ['1 SMM Lead', '3 Social Content Creators', '1 Community Manager']
                  }
                ],
                'IoT App Dev': [
                  {
                    id: 'iot-1',
                    title: 'IoT App Development Team',
                    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
                    techs: ['Device Hardware', 'Device software', 'Communications', 'Cloud Platform', 'Cloud Applications'],
                    composition: ['1 IoT Systems Architect', '3 Firmware/Embedded Devs', '2 Cloud IoT Engineers']
                  },
                  {
                    id: 'iot-2',
                    title: 'Smart Home & Industrial IoT Team',
                    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80',
                    techs: ['MQTT', 'Zigbee', 'Raspberry Pi', 'Arduino', 'AWS IoT Core', 'Azure IoT Hub'],
                    composition: ['1 Hardware Lead', '2 Embedded C Developers', '1 Protocols Engineer']
                  },
                  {
                    id: 'iot-3',
                    title: 'Connected Devices Team',
                    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
                    techs: ['Bluetooth LE', 'LoRaWAN', 'Edge Computing', 'Sensor Networks', 'Real-Time Data'],
                    composition: ['1 Edge Compute Architect', '2 Firmware Devs', '1 QA Hardware Specialist']
                  }
                ],
                'Blockchain Dev': [
                  {
                    id: 'bc-1',
                    title: 'Blockchain Development Team',
                    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
                    techs: ['Protocol', 'Consensus', 'Data Storage', 'Application'],
                    composition: ['1 Blockchain Architect', '3 Smart Contract Devs', '2 Web3 Integration Engineers']
                  },
                  {
                    id: 'bc-2',
                    title: 'Smart Contract Development Team',
                    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800&q=80',
                    techs: ['Solidity', 'Rust', 'Ethereum', 'Hardhat', 'Truffle', 'Chainlink'],
                    composition: ['1 Lead Smart Contract Auditor', '3 Solidity Engineers', '1 Security Tester']
                  },
                  {
                    id: 'bc-3',
                    title: 'Decentralized App (DApp) Team',
                    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80',
                    techs: ['Ethers.js', 'Web3.js', 'IPFS', 'Polygon', 'Hyperledger', 'Zero Knowledge'],
                    composition: ['1 DApp Lead Engineer', '3 Full Stack Web3 Devs', '1 Crypto Economist']
                  }
                ]
              };

              const currentCategoryName = categoryNames[expertCategory] || 'Trending';
              const teamsToRender = categoryTeams[currentCategoryName] || categoryTeams['Trending'];

              return teamsToRender.map((team) => {
                const currentSubTab = cardSubTabs[team.id] || 'technologies';
                return (
                  <div
                    key={team.id}
                    className="bg-[#EBF4FA] rounded-[24px] p-5 border border-blue-100/80 shadow-sm flex flex-col justify-between text-left group hover:shadow-lg transition-all"
                  >
                    {/* Top Image with Fallback Handler */}
                    <div className="rounded-[16px] overflow-hidden h-[180px] mb-4 bg-slate-900 relative">
                      <img
                        src={team.image}
                        alt={team.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>

                    {/* Team Title */}
                    <h3 className="text-lg font-[900] text-slate-900 mb-4 tracking-tight">
                      {team.title}
                    </h3>

                    {/* Inner Sub-tab Pills (Technologies vs Team Composition) */}
                    <div className="bg-white/80 p-1 rounded-xl inline-flex space-x-1 mb-4 border border-blue-100/60 self-start">
                      <button
                        onClick={() => setCardSubTabs((prev) => ({ ...prev, [team.id]: 'technologies' }))}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-[800] transition-all cursor-pointer ${
                          currentSubTab === 'technologies'
                            ? 'bg-[#005F96] text-white shadow-sm'
                            : 'text-slate-600 hover:text-[#005F96]'
                        }`}
                      >
                        Technologies
                      </button>
                      <button
                        onClick={() => setCardSubTabs((prev) => ({ ...prev, [team.id]: 'composition' }))}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-[800] transition-all cursor-pointer ${
                          currentSubTab === 'composition'
                            ? 'bg-[#005F96] text-white shadow-sm'
                            : 'text-slate-600 hover:text-[#005F96]'
                        }`}
                      >
                        Team Composition
                      </button>
                    </div>

                    {/* Skill / Member Pills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[90px] items-start">
                      {(currentSubTab === 'technologies' ? team.techs : team.composition).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white text-slate-800 text-xs font-[700] px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA Button */}
                    <div>
                      <a
                        href="#quote-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-xs tracking-wide transition-all space-x-1.5 shadow-sm"
                      >
                        <span>Get Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          {/* Carousel Controls at Bottom Center */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => setExpertCategory((prev) => (prev > 0 ? prev - 1 : 8))}
              className="p-2 text-slate-500 hover:text-[#005F96] transition-colors cursor-pointer"
              aria-label="Previous Category"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setExpertCategory((prev) => (prev < 8 ? prev + 1 : 0))}
              className="p-2 text-slate-500 hover:text-[#005F96] transition-colors cursor-pointer"
              aria-label="Next Category"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </section>

      {/* ============================================================
          LEVERAGE THE EXPERTISE OF SAPPHIRE DEDICATED DEVELOPERS
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Leverage The Expertise of Sapphire Dedicated Developers
            </h2>
          </div>

          {/* Tab Pill Navigation Bar */}
          <div className="flex items-center justify-center mb-8 overflow-x-auto py-1 scrollbar-none">
            <div className="bg-[#EBF4FA] p-1.5 rounded-full inline-flex space-x-2 shrink-0 border border-blue-100/60">
              {['In Demand', 'Mobile', 'Web', 'AI'].map((tabName, idx) => (
                <button
                  key={idx}
                  onClick={() => setLeverageTab(idx)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-[800] transition-all cursor-pointer whitespace-nowrap ${
                    leverageTab === idx
                      ? 'bg-[#005F96] text-white shadow-md'
                      : 'text-slate-700 hover:text-[#005F96] hover:bg-white/60'
                  }`}
                >
                  {tabName}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Featured Hero Banner Card per Active Tab */}
          <div className="max-w-6xl mx-auto mb-6">
            {(() => {
              const heroBanners = [
                {
                  title: 'In Demand ↗',
                  desc: 'Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.',
                  bgClass: 'bg-[#FFDEE9]/80 border-pink-200/80'
                },
                {
                  title: 'Mobile ↗',
                  desc: 'Hire our team of mobile app developers to create applications for Android and iOS platforms. We have experience in developing apps using cutting-edge technologies like Flutter, React Native, Kotlin, SWIFT, and ARKit.',
                  bgClass: 'bg-[#D1FAD7]/80 border-emerald-200/80'
                },
                {
                  title: 'Web ↗',
                  desc: 'You can hire .NET developers to build all kinds of software applications using the same programming languages or enhance your team\'s capability. We have vetted developers who have years of experience with .NET framework and create apps that are unique and offer the best UI.',
                  bgClass: 'bg-[#FFEDD5]/80 border-amber-200/80'
                },
                {
                  title: 'AI ↗',
                  desc: 'We have qualified developers for every area, whether you need to create intelligent apps, put machine learning algorithms into practice, create cutting-edge generative AI solutions, or automate corporate procedures. We have data scientists, computer vision experts, generative AI professionals, and AI/ML engineers on our team. Engage our AI and advanced data specialists right now!',
                  bgClass: 'bg-[#E9D5FF]/80 border-purple-200/80'
                }
              ];

              const currentHero = heroBanners[leverageTab] || heroBanners[0];

              return (
                <div className={`${currentHero.bgClass} rounded-2xl p-6 sm:p-8 border text-left shadow-2xs transition-all duration-300`}>
                  <h3 className="text-lg sm:text-xl font-[900] text-slate-900 mb-2 flex items-center space-x-1.5">
                    <span>{currentHero.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-[400]">
                    {currentHero.desc}
                  </p>
                </div>
              );
            })()}
          </div>

          {/* Grid Cards (Dynamic 6 or 8 cards per active tab) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
            {(() => {
              const leverageTabsData = [
                // 0: In Demand (6 cards)
                [
                  {
                    title: 'AI Developers ↗',
                    desc: 'Employ our team\'s best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!'
                  },
                  {
                    title: 'UI/UX Designers ↗',
                    desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!'
                  },
                  {
                    title: 'API Developers ↗',
                    desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.'
                  },
                  {
                    title: 'Next JS Developers ↗',
                    desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
                  },
                  {
                    title: 'Machine Learning Developers ↗',
                    desc: 'Employ our team\'s best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!'
                  },
                  {
                    title: 'Data Scientists ↗',
                    desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                  }
                ],
                // 1: Mobile (6 cards)
                [
                  {
                    title: 'Android Developers ↗',
                    desc: 'Employ our team\'s most skilled Android developers to create user-friendly, aesthetically pleasing apps that adhere to Google\'s coding and design standards. They have extensive knowledge and real-world experience with frameworks like TensorFlow, Android Jetpack, and Kotlin.'
                  },
                  {
                    title: 'iOS Developers ↗',
                    desc: 'Hire our team\'s best iOS developers; they have a wealth of expertise and practical experience with frameworks like Core ML, Swift, and SwiftUI. Because our iOS engineers adhere to Apple\'s requirements to ensure that your iOS app is made correctly, they have produced applications that are distinctive, entertaining, and simple for people to use.'
                  },
                  {
                    title: 'Flutter App Developers ↗',
                    desc: 'Our team includes some of the best Flutter App developers who have created several cross-platform mobile apps using the Flutter framework. They have considerable knowledge and practical expertise in this area. Their area of expertise is in creating aesthetically captivating and remarkably efficient applications that function flawlessly on both iOS and Android smartphones.'
                  },
                  {
                    title: 'React Native Developers ↗',
                    desc: 'Employ our team of top React Native developers in India for your next project. They have extensive understanding and real-world experience building cross-platform mobile apps using React Native technology. They are skilled in React Navigation for smooth routing, Firebase for integrating back-end services, and Redux for state management.'
                  },
                  {
                    title: 'Swift Developers ↗',
                    desc: 'Collaborate with our elite Swift developers, who have a wealth of knowledge and expertise in developing iOS apps using the Swift programming language. They also know how to integrate Firebase, Alamofire, Core Data, and CocoaPods, among other things. Work together with our skilled Swift developers to improve your iOS app projects right now!'
                  },
                  {
                    title: 'Kotlin Developers ↗',
                    desc: 'Use the abilities of our best Kotlin developers, who have more than six years of average experience, a solid grasp of Kotlin for Android app development, and familiarity with technologies and frameworks such as Retrofit, SQLite, Dagger, etc. Engage with some of India\'s top Kotlin developers'
                  }
                ],
                // 2: Web (8 cards)
                [
                  {
                    title: '.Net Developer ↗',
                    desc: 'You can hire .NET developers to build all kinds of software applications using the same programming languages or enhance your team\'s capability. We have vetted developers who have years of experience with .NET framework and create apps that are unique and offer the best UI.'
                  },
                  {
                    title: 'Laravel Developer ↗',
                    desc: 'You can hire our dedicated Laravel developers & dedicated programmers for custom Laravel web/website development services. Hire our Laravel developers on a weekly/hourly basis or as per your project requirement and budget. We have a team of developers with varied years of experience to help you with your project.'
                  },
                  {
                    title: 'Next Js Developers ↗',
                    desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
                  },
                  {
                    title: 'Full Stack Developers (MERN/MEAN/Custom) ↗',
                    desc: 'Utilize the expertise of our full-stack developers, who are skilled in creating end-to-end projects, including front-end and back-end technology. Our full-stack developers satisfy your company goals and user demands by providing complete and seamless applications with their skills in a variety of programming languages, frameworks, and databases.'
                  },
                  {
                    title: 'React js Developers ↗',
                    desc: 'Please speak with our React.js developers, who thrive at leveraging the React.js toolkit to create creative solutions. Their proficiency with technologies such as Redux and React Router enables them to create interactive web apps that guarantee maximum user engagement and user-friendly design. Work together with our React.js experts to improve your online projects.'
                  },
                  {
                    title: 'Python Developers ↗',
                    desc: 'Dive into the experience of our Python developers, who are adept at utilizing the flexible Python programming language to create dependable apps and solutions. Every project benefit from the extensive expertise and knowledge that our Python experts contribute, ranging from web development and automation to data analysis and machine learning.'
                  },
                  {
                    title: 'Vue js Developers ↗',
                    desc: 'Examine the knowledge of our knowledgeable Vue.js developers, who specialize in frontend development with the help of Vue.js technology. Skillfully using Vuex and Vue Router, they create aesthetically pleasing online apps that put the user experience and interaction first. Work together with our Vue.js engineers to improve your web applications.'
                  },
                  {
                    title: 'Golang Developers ↗',
                    desc: 'Join forces with our skilled Golang developers who have a comprehensive grasp of Golang technology. With proficiency in Gorilla Mux and Go Modules, among other technologies, they develop scalable, effective apps that provide outstanding user experiences and creative solutions. Work with our Golang developers to improve your projects right now.'
                  }
                ],
                // 3: AI (6 cards)
                [
                  {
                    title: 'Artificial Intelligence Developer ↗',
                    desc: 'Employ our team\'s best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!'
                  },
                  {
                    title: 'Machine Learning Developer ↗',
                    desc: 'Employ our team\'s best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!'
                  },
                  {
                    title: 'Data Scientist ↗',
                    desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                  },
                  {
                    title: 'Data Analysts ↗',
                    desc: 'Hire the best data analysts who have shown success in creating custom data insights and strategies, improving data visualization, and implementing analytics-driven solutions. Our data analysts are prepared to help you discover significant patterns, predict trends, or optimize your operational operations. With only a click, hire them!'
                  },
                  {
                    title: 'Generative AI Developer ↗',
                    desc: 'Employ elite generative AI developers with a track record of producing cutting-edge AI-generated content, text-to-speech models, smart agent systems, custom LLM to text-to-lip movement avatars, and generative AI applications that are tailored to your specific needs. With only one click, you may employ the perfect generative AI development specialists!'
                  },
                  {
                    title: 'Computer Vision Developer ↗',
                    desc: 'Hire our Computer Vision Developers to create bespoke AI-driven visual solutions, deploy cutting-edge image processing methods, and create visual recognition systems. We have the perfect programmers to employ with just one click, whether your goals are to improve object identification, automate picture analysis, or include special visual skills in your applications!'
                  }
                ]
              ];

              const currentCards = leverageTabsData[leverageTab] || leverageTabsData[0];

              return currentCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F6FB] rounded-2xl p-6 text-left border border-blue-50/80 hover:shadow-md hover:bg-[#EBF4FA] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-[900] text-slate-900 tracking-tight flex items-center justify-between">
                      <span>{card.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-[400]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center">
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-sm tracking-wide transition-all shadow-md"
            >
              View All Portfolio
            </a>
          </div>
        </Container>
      </section>

      {/* ============================================================
          INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          {/* Section Header & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-8 space-y-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Industry-Focused Insights To Elevate Your Business
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-[500]">
              Trending Industries that Use Dedicated Developers
            </p>
          </div>

          {/* 11 Industry Tabs Pill Bar (Structured exactly like reference screenshot: 2 rows of rounded light cyan container) */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="bg-[#EBF4FA] p-3 rounded-2xl border border-blue-100/60 shadow-2xs flex flex-col gap-2.5 items-center">
              {/* Row 1 Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Automotive',
                  'Ecommerce',
                  'Education',
                  'Entertainment',
                  'Finance',
                  'Food and Beverage',
                  'Healthcare'
                ].map((name, idx) => (
                  <button
                    key={idx}
                    onClick={() => setIndustryTab(idx)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-[700] transition-all cursor-pointer whitespace-nowrap ${
                      industryTab === idx
                        ? 'bg-[#005F96] text-white shadow-sm'
                        : 'bg-white/80 text-slate-700 hover:text-[#005F96] hover:bg-white border border-slate-200/50'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              {/* Row 2 Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'Information Technology',
                  'Logistics',
                  'Travel & Tourism',
                  'Utility Services'
                ].map((name, row2Idx) => {
                  const actualIdx = row2Idx + 7;
                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setIndustryTab(actualIdx)}
                      className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-[700] transition-all cursor-pointer whitespace-nowrap ${
                        industryTab === actualIdx
                          ? 'bg-[#005F96] text-white shadow-sm'
                          : 'bg-white/80 text-slate-700 hover:text-[#005F96] hover:bg-white border border-slate-200/50'
                      }`}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3 Portfolio Card Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {(() => {
              const industryShowcases = [
                // 0: Automotive
                [
                  {
                    title: 'Vehicle Data Logging Software',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Car Wash App Development',
                    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Taxi Booking-App Development',
                    image: 'https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 1: Ecommerce
                [
                  {
                    title: 'Multi-Vendor E-Commerce Platform',
                    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'B2B Marketplace Portal',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Online Grocery Shopping App',
                    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 2: Education
                [
                  {
                    title: 'E-Learning LMS Platform',
                    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'School Management System',
                    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Interactive Quiz & Exam Portal',
                    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 3: Entertainment
                [
                  {
                    title: 'Video Streaming OTT Platform',
                    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Live Music & Audio Streaming App',
                    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Esports Gaming Community Portal',
                    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 4: Finance
                [
                  {
                    title: 'Fintech Mobile Banking App',
                    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Crypto Wallet & Exchange Portal',
                    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Personal Finance & Investment Tracker',
                    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 5: Food and Beverage
                [
                  {
                    title: 'Food Delivery Marketplace App',
                    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Restaurant POS & Management System',
                    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Cloud Kitchen Order Manager',
                    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 6: Healthcare
                [
                  {
                    title: 'Telemedicine & Doctor Appointment App',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Hospital EMR & Management System',
                    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Pharmacy E-Commerce Portal',
                    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 7: Information Technology
                [
                  {
                    title: 'Cloud Infrastructure Management Dashboard',
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Cyber Security Monitoring System',
                    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'DevOps CI/CD Automation Suite',
                    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 8: Logistics
                [
                  {
                    title: 'Fleet Management & Real-Time Tracking',
                    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Warehouse Management System (WMS)',
                    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Supply Chain Logistics Portal',
                    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 9: Travel & Tourism
                [
                  {
                    title: 'Flight & Hotel Booking Engine',
                    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Tour Operator ERP Software',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Travel Itinerary Planner App',
                    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'
                  }
                ],
                // 10: Utility Services
                [
                  {
                    title: 'Smart Energy Metering Portal',
                    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Home Services Booking Platform',
                    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
                  },
                  {
                    title: 'Water & Waste Management Dashboard',
                    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
                  }
                ]
              ];

              const currentShowcase = industryShowcases[industryTab] || industryShowcases[0];

              return currentShowcase.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center group text-center space-y-3">
                  <div className="w-full h-[220px] rounded-[20px] overflow-hidden bg-slate-900 shadow-sm border border-slate-200/80 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-[900] text-slate-900 tracking-tight group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>
                </div>
              ));
            })()}
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center">
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-sm tracking-wide transition-all shadow-md"
            >
              View All Portfolio
            </a>
          </div>
        </Container>
      </section>

      {/* ============================================================
          ABOUT US (8 STAT CARDS GRID ON DEEP BLUE BACKGROUND)
          ============================================================ */}
      <section className="py-16 bg-[#005F96] text-white font-sans">
        <Container className="max-w-7xl">
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-[900] text-white tracking-tight">
              About Us
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-[400] leading-relaxed">
              Sapphire delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
            </p>
          </div>

          {/* 8 Stat Cards (4 columns x 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              {
                number: '23+',
                label: 'Years of Experience',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '320+',
                label: '5-Star Clutch Reviews',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '20+',
                label: 'Fortunes 500 Companies',
                image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '200+',
                label: 'IT Professional',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '95%',
                label: 'Client Retention',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '18+',
                label: 'Industry Served',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '2800+',
                label: 'Satisfied Clients',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80'
              },
              {
                number: '1500+',
                label: 'Completed Projects',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80'
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 flex items-center space-x-4 text-left shadow-md border border-white/20 hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </div>

                {/* Number & Text */}
                <div className="space-y-0.5 min-w-0">
                  <div className="text-2xl sm:text-3xl font-[900] text-[#005F96] tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-[600] text-slate-700 leading-snug">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE DEDICATED DEVELOPERS (AUTO-SCROLLING PEEKING CAROUSEL)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200 overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Sectors Thriving Through Sapphire’s Bespoke Dedicated Developers
            </h2>
          </div>

          {/* Carousel Track Container (Full display 3 cards + partial peeking on left & right) */}
          <div
            className="relative overflow-hidden py-4"
            onMouseEnter={() => setIsSectorHovered(true)}
            onMouseLeave={() => setIsSectorHovered(false)}
          >
            <div
              className={`flex ${enableSectorTransition ? 'transition-transform duration-700 ease-in-out' : ''} gap-6`}
              style={{
                transform: `translateX(calc(-${sectorSlideIndex * (100 / 3)}% - ${sectorSlideIndex * 8}px))`
              }}
            >
              {(() => {
                const baseSectors = [
                  {
                    title: 'Automotive App Development',
                    IconComponent: Car,
                    desc: 'We are an industry-leading automotive software development firm offering digital solutions of the highest quality at reasonable operating expenses.',
                    subItems: [
                      { label: 'Vehicle Interior Apps', bg: 'bg-purple-100 text-purple-600', icon: '🚗' },
                      { label: 'Automotive Dealership', bg: 'bg-emerald-100 text-emerald-600', icon: '🏎️' },
                      { label: 'Chatbot Development', bg: 'bg-orange-100 text-orange-600', icon: '💬' },
                      { label: 'Big Data Solution', bg: 'bg-amber-100 text-amber-600', icon: '📊' },
                      { label: 'AR And VR Apps', bg: 'bg-pink-100 text-pink-600', icon: '🥽' },
                      { label: 'IoT Solution For Roads', bg: 'bg-cyan-100 text-cyan-600', icon: '🌐' }
                    ]
                  },
                  {
                    title: 'Fintech App Development Company',
                    IconComponent: Landmark,
                    desc: 'Our cutting-edge fintech app development and forward-thinking online solutions have helped us become one of the most successful FinTech app development firms.',
                    subItems: [
                      { label: 'Portfolio Management', bg: 'bg-purple-100 text-purple-600', icon: '📈' },
                      { label: 'Fintech Integration', bg: 'bg-emerald-100 text-emerald-600', icon: '🔄' },
                      { label: 'Fintech Software Development', bg: 'bg-orange-100 text-orange-600', icon: '💻' },
                      { label: 'Financial Management', bg: 'bg-amber-100 text-amber-600', icon: '🏦' },
                      { label: 'Fintech Accounting', bg: 'bg-pink-100 text-pink-600', icon: '🧾' },
                      { label: 'Fraud And Credit Risk Mitigation', bg: 'bg-cyan-100 text-cyan-600', icon: '🛡️' }
                    ]
                  },
                  {
                    title: 'Healthcare App Development Services',
                    IconComponent: HeartPulse,
                    desc: 'Rapidly becoming an important component of the business, Health Care Mobile App Development is now a vital industry element. The development of mobile applications is now...',
                    subItems: [
                      { label: 'Fitness App', bg: 'bg-purple-100 text-purple-600', icon: '🏋️' },
                      { label: 'Meditation Healthcare App', bg: 'bg-emerald-100 text-emerald-600', icon: '🧘' },
                      { label: 'Exercise App', bg: 'bg-orange-100 text-orange-600', icon: '🏃' },
                      { label: 'Quick Care App', bg: 'bg-amber-100 text-amber-600', icon: '🏥' },
                      { label: 'Monitoring Patients', bg: 'bg-pink-100 text-pink-600', icon: '🩺' },
                      { label: 'Diagnostic Test Apps', bg: 'bg-cyan-100 text-cyan-600', icon: '🔬' }
                    ]
                  },
                  {
                    title: 'Agriculture App Development Company',
                    IconComponent: Sprout,
                    desc: 'The progression of technology has made life a little bit simpler in recent years. Regardless of the goods or services you seek, there is almost nothing that cannot be acquired at the tip of...',
                    subItems: [
                      { label: 'Analytics', bg: 'bg-purple-100 text-purple-600', icon: '🌾' },
                      { label: 'Payment Gateway', bg: 'bg-emerald-100 text-emerald-600', icon: '💳' },
                      { label: 'List Of Diseases And Treatments', bg: 'bg-orange-100 text-orange-600', icon: '🩺' },
                      { label: 'Broadcast And Video Calls', bg: 'bg-amber-100 text-amber-600', icon: '📹' },
                      { label: 'Camera And Machine Vision', bg: 'bg-pink-100 text-pink-600', icon: '📷' },
                      { label: 'GPS Services', bg: 'bg-cyan-100 text-cyan-600', icon: '📍' }
                    ]
                  },
                  {
                    title: 'Education App Development Services in USA',
                    IconComponent: GraduationCap,
                    desc: 'As an Education App Development Service Provider, we deliver unmatched Education App Development Services. We are an experienced Education App Development Agency with a...',
                    subItems: [
                      { label: 'Interactive eBooks', bg: 'bg-purple-100 text-purple-600', icon: '📚' },
                      { label: 'Puzzle-Solving Apps', bg: 'bg-emerald-100 text-emerald-600', icon: '🧩' },
                      { label: 'Worksheet Apps', bg: 'bg-orange-100 text-orange-600', icon: '📝' },
                      { label: 'Classroom Apps', bg: 'bg-amber-100 text-amber-600', icon: '🏫' },
                      { label: 'Skill Boosting Applications', bg: 'bg-pink-100 text-pink-600', icon: '💡' },
                      { label: 'Educational Application', bg: 'bg-cyan-100 text-cyan-600', icon: '🎓' }
                    ]
                  },
                  {
                    title: 'Retail App Development Company',
                    IconComponent: ShoppingBag,
                    desc: 'The Retail App Development Market For Mobile Devices Is Growing Far More Quickly Than Anybody Could Have Anticipated. The Retail Industry Is Seeing A Meteoric Rise In Terms Of...',
                    subItems: [
                      { label: 'Integrations', bg: 'bg-purple-100 text-purple-600', icon: '🔌' },
                      { label: 'Marketplace Solutions', bg: 'bg-emerald-100 text-emerald-600', icon: '🛍️' },
                      { label: 'Product Personalization', bg: 'bg-orange-100 text-orange-600', icon: '🎁' },
                      { label: 'Vendor Management System', bg: 'bg-amber-100 text-amber-600', icon: '🏬' },
                      { label: 'ECommerce Solutions', bg: 'bg-pink-100 text-pink-600', icon: '🛒' },
                      { label: 'VR Shopping', bg: 'bg-cyan-100 text-cyan-600', icon: '🥽' }
                    ]
                  },
                  {
                    title: 'Legal Website Development',
                    IconComponent: Scale,
                    desc: 'Several businesses are operating at varying levels within the legal sector. To have a solid online presence, you must need a website.',
                    subItems: [
                      { label: 'Search Engine Optimization', bg: 'bg-purple-100 text-purple-600', icon: '🔍' },
                      { label: 'Web Design And Development', bg: 'bg-emerald-100 text-emerald-600', icon: '💻' },
                      { label: 'Content Writing', bg: 'bg-orange-100 text-orange-600', icon: '✍️' },
                      { label: 'Wordpress Experts', bg: 'bg-amber-100 text-amber-600', icon: '🌐' },
                      { label: 'Responsive Web Design', bg: 'bg-pink-100 text-pink-600', icon: '📱' },
                      { label: 'Custom Web Design', bg: 'bg-cyan-100 text-cyan-600', icon: '🎨' }
                    ]
                  }
                ];

                const triplicatedSectors = [...baseSectors, ...baseSectors, ...baseSectors];

                return triplicatedSectors.map((sector, sIdx) => {
                  const SectorIcon = sector.IconComponent || LayoutGrid;
                  return (
                    <div
                      key={sIdx}
                      className="w-[calc(100%/1.1)] sm:w-[calc(100%/2.2)] md:w-[calc(100%/3.2)] shrink-0 bg-[#EBF4FA] rounded-[24px] p-6 border border-blue-100/80 shadow-xs flex flex-col justify-between text-left group hover:shadow-md transition-all"
                    >
                      <div>
                        {/* Top Header Row with Custom Industry Icon Badge */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#005F96] text-white flex items-center justify-center shrink-0 shadow-sm">
                            <SectorIcon className="w-6 h-6" />
                          </div>
                          <h3 className="text-base sm:text-lg font-[900] text-slate-900 tracking-tight leading-snug">
                            {sector.title}
                          </h3>
                        </div>

                      {/* Concise Description */}
                      <p className="text-xs sm:text-sm text-slate-600 font-[400] leading-relaxed mb-6 line-clamp-3">
                        {sector.desc}
                      </p>
                    </div>

                    {/* 6 Sub-Feature Items (2 cols x 3 rows) */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-blue-100/60">
                      {sector.subItems.map((sub, itemIdx) => (
                        <div key={itemIdx} className="flex items-center space-x-2">
                          <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${sub.bg} flex items-center justify-center shrink-0 text-xs font-bold`}>
                            {sub.icon}
                          </div>
                          <span className="text-[11px] sm:text-xs font-[700] text-slate-800 leading-tight">
                            {sub.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              });
            })()}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          EMPLOY THE ADVANCED PROFICIENCY OF SAPPHIRE'S DEDICATED DEVELOPMENT TEAM (10 CARDS GRID - COMPACT & SMALL)
          ============================================================ */}
      <section className="py-6 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-200/80">
        <Container className="max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-5 space-y-1">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-[900] text-slate-900 tracking-tight leading-tight">
              Employ the Advanced Proficiency of Sapphire’s Dedicated Development Team
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-600 font-[400] max-w-2xl mx-auto">
              At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
            </p>
          </div>

          {/* 10 Feature Cards (5 Columns x 2 Rows) - Extra Compact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { title: 'On-Time Progress Monitoring', IconComp: LineChart },
              { title: 'Time-Zone Compatibility', IconComp: Globe },
              { title: 'Cost-Effective Development', IconComp: Coins },
              { title: 'World Class Expertise', IconComp: Award },
              { title: 'Least Turnaround Time', IconComp: RotateCw },
              { title: 'Best Management Standards', IconComp: Sliders },
              { title: '500+ Seasons Experts', IconComp: Lightbulb },
              { title: '24x7 Support Team', IconComp: Headphones },
              { title: 'Efficient Project Management', IconComp: Handshake },
              { title: 'Dedicated Delivery Management', IconComp: UserCheck }
            ].map((item, idx) => {
              const Icon = item.IconComp;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] py-3 px-3 border border-blue-100/50 shadow-xs flex flex-col items-center justify-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all h-[110px] sm:h-[120px]"
                >
                  <div className="w-8 h-8 text-[#005F96] flex items-center justify-center mb-1.5 shrink-0">
                    <Icon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <h3 className="text-[11px] sm:text-xs font-[800] text-slate-800 leading-snug group-hover:text-[#005F96] transition-colors max-w-[130px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ? (INTERACTIVE TABS SECTION - COMPACT)
          ============================================================ */}
      <section className="py-10 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-[900] text-slate-900 tracking-tight leading-tight">
              How We Divide Your Project Responsibilities ?
            </h2>

            {/* Toggle Pills (Sapphire | Client) */}
            <div className="inline-flex items-center bg-[#EBF4FA] rounded-xl p-1 border border-blue-100 shadow-xs">
              <button
                onClick={() => setResponsibilityTab('sapphire')}
                className={`px-6 py-1.5 rounded-lg font-[800] text-xs sm:text-sm transition-all cursor-pointer ${
                  responsibilityTab === 'sapphire'
                    ? 'bg-[#005F96] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sapphire
              </button>
              <button
                onClick={() => setResponsibilityTab('client')}
                className={`px-6 py-1.5 rounded-lg font-[800] text-xs sm:text-sm transition-all cursor-pointer ${
                  responsibilityTab === 'client'
                    ? 'bg-[#005F96] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Client
              </button>
            </div>
          </div>

          {/* Tab Content Cards (3 Columns x 2 Rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {(responsibilityTab === 'sapphire'
              ? [
                  { title: 'Create a dedicated team', IconComp: Users },
                  { title: 'Gather required access', IconComp: Lock },
                  { title: 'Plan project resources', IconComp: Sliders },
                  { title: 'Create a standard delivery practice', IconComp: Clock },
                  { title: 'Regular communication between stakeholders', IconComp: MessageSquare },
                  { title: 'Research on competitors', IconComp: Flag }
                ]
              : [
                  { title: 'End-to-end ownership', IconComp: Handshake },
                  { title: 'Manage the project roadmap', IconComp: Milestone },
                  { title: 'Streamline feedback & review', IconComp: Star },
                  { title: 'System for feedback & changes', IconComp: RefreshCw },
                  { title: 'Project life cycle tracking', IconComp: RotateCw },
                  { title: 'Ensure on-time delivery', IconComp: Calendar }
                ]
            ).map((card, cIdx) => {
              const CardIcon = card.IconComp;
              return (
                <div
                  key={cIdx}
                  className="bg-[#F0F6FB] rounded-[20px] py-5 px-6 border border-blue-100/60 shadow-xs flex flex-col items-center justify-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all h-[125px] sm:h-[135px]"
                >
                  <div className="w-10 h-10 text-[#005F96] flex items-center justify-center mb-2 shrink-0">
                    <CardIcon className="w-9 h-9 stroke-[1.6]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-[800] text-slate-800 leading-snug max-w-[240px]">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SUCCESS STORIES & PORTFOLIO STATS MATRIX SECTION (COMPACT)
          ============================================================ */}
      <section className="py-8 bg-[#DDF1FA] text-slate-900 font-sans border-b border-blue-200/60">
        <Container className="max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-6 space-y-1.5">
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-[900] text-slate-900 tracking-tight leading-tight">
              Success Stories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-[400] max-w-3xl mx-auto">
              Know Sapphire journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Portfolio Cards - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-6">
            {[
              {
                title: 'Employee Health Tracker App Development',
                img: '/c_sharp_portfolio_health_tracker_1788428574881.png'
              },
              {
                title: 'Navigation App Development',
                img: '/c_sharp_portfolio_navigation_app_1788428595590.png'
              },
              {
                title: 'Claim Management App',
                img: '/c_sharp_portfolio_claim_app_1788428618905.png'
              }
            ].map((item, pIdx) => (
              <div
                key={pIdx}
                className="group cursor-pointer flex flex-col text-left space-y-2"
              >
                <div className="rounded-[16px] overflow-hidden bg-white shadow-xs border border-blue-100/60 group-hover:shadow-md transition-all h-[160px] sm:h-[180px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* View All Portfolio Button - Compact */}
          <div className="text-center mb-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Block Stat Matrix - Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-[#D8C7FB] rounded-[16px] p-4 flex flex-col items-center justify-center text-center h-[90px] sm:h-[100px] shadow-xs">
              <span className="text-xl sm:text-2xl font-[900] text-slate-900 mb-0.5">23+</span>
              <span className="text-xs font-[700] text-slate-800">Years Experience</span>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#A2F3D9] rounded-[16px] p-4 flex flex-col items-center justify-center text-center h-[90px] sm:h-[100px] shadow-xs">
              <span className="text-xl sm:text-2xl font-[900] text-slate-900 mb-0.5">320+</span>
              <span className="text-xs font-[700] text-slate-800">5-Star Clutch Reviews</span>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#FFB7B7] rounded-[16px] p-4 flex flex-col items-center justify-center text-center h-[90px] sm:h-[100px] shadow-xs">
              <span className="text-xl sm:text-2xl font-[900] text-slate-900 mb-0.5">2800+</span>
              <span className="text-xs font-[700] text-slate-800">Satisfied Clients</span>
            </div>

            {/* Stat 4 (CTA Card) */}
            <div className="bg-[#005F96] rounded-[16px] p-3 flex flex-col items-center justify-center text-center text-white h-[90px] sm:h-[100px] shadow-sm space-y-1.5">
              <span className="text-xs sm:text-sm font-[800] tracking-tight">Want to start Projects</span>
              <Link
                to="/contact"
                className="bg-white hover:bg-slate-100 text-[#005F96] font-[900] text-[11px] px-4 py-1.5 rounded-md transition-all shadow-xs"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack That Sapphire Dedicated Developers Use Proficiently (Inserted Exactly Between Success Stories & Get The Right C# Developers) */}
      <TechStackProficientGrid />

      {/* ============================================================
          GET THE RIGHT C# DEVELOPERS (9 ROLE CARDS GRID)
          ============================================================ */}
      <section className="py-20 bg-[#F0F6FB] text-slate-900 font-sans">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight">
              Get The Right C# Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-[400]">
              We offer a wide range of C# developers to our clients. Have a look at some of our talented C# developers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Hire C# Programmers',
                desc: 'Now you can hire our c# programmers with years of technical capabilities in C# to acquire a robust and business-oriented solution as per your needs.'
              },
              {
                title: 'Hire C# DESKTOP Programmers',
                desc: 'Look no further than us for C# DESKTOP Programmers for your following online or desktop software. We provide low-cost C# Programmers tailored to your specific company requirements.'
              },
              {
                title: 'Hire C# ASP.NET Developers',
                desc: 'Hire the best and most experienced C# ASP.Net resources from us for customized solutions that ensure corporate growth, unique development solutions and receive 24-hour technical assistance.'
              },
              {
                title: 'Hire Custom C# Application Developer',
                desc: 'Hire C# application developers to satisfy all of your company software and online application needs for agility. Our c# application developers have decade long expertise in c# programming.'
              },
              {
                title: 'Hire Full-Stack C# Developers',
                desc: 'Our full-stack C# developers have experience designing industry-specific desktop apps as well as complicated online apps. Hire the best full-stack C# developers and start implementing tech-driven solutions.'
              },
              {
                title: 'Hire C# Azure Cloud Developer',
                desc: 'Our C# Azure Cloud Developer can develop an IaaS model, similar to Rackspace and Amazon EC2 to track, access, and manage remote storage, data center infrastructures, and networking services.'
              },
              {
                title: 'Hire C# Consultant',
                desc: 'Hire professional C# software developers and consultants to create modern applications that work on any platform, including the web, cellphones, and desktops.'
              },
              {
                title: 'Hire C# Migration Expert',
                desc: 'Microsoft C# professionals are available for hire to provide an efficient migration procedure to C# to upgrade outdated software and applications for maximum performance.'
              },
              {
                title: 'Hire C# Support & Maintenance Expert',
                desc: 'Hire skilled developers to provide continuous and consistent C# support and maintenance services to ensure that applications run smoothly and efficiently.'
              }
            ].map((role, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[22px] border-y-4 border-y-transparent shadow-xs hover:bg-gradient-to-b hover:from-[#E3F5FF] hover:to-[#CBEFFF] hover:border-t-[#005F96] hover:border-b-[#38BDF8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Lavender Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-purple-100/90 text-purple-600 flex items-center justify-center font-bold shadow-xs">
                    <Code2 className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-[900] text-[#005F96] tracking-tight leading-snug">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-[400]">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button matching Image 1 */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('quote-form');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="inline-block bg-[#005F96] hover:bg-[#004B77] text-white font-[800] text-sm sm:text-base px-8 sm:px-10 py-3.5 rounded-lg shadow-md transition-all hover:scale-105"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* ============================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY (PROUD AWARDS BANNER)
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          BENEFITS OF HIRING DEDICATED DEVELOPERS
          ============================================================ */}
      <section className="py-20 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight">
              Benefits Of Hiring Dedicated Developers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-[400]">
              Hiring dedicated developers can help you save time and money so that you can focus more on core business activities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Cost Efficiency',
                desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool, lowering labor costs without sacrificing quality.'
              },
              {
                title: 'Access to Specialized Skills',
                desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time.'
              },
              {
                title: 'Scalability and Flexibility',
                desc: 'Dedicated developers allow team size and composition changes without full-time employment. They swiftly adapt to project needs and market circumstances.'
              },
              {
                title: 'Focused and Committed Effort',
                desc: 'Dedicated developers are more productive and committed since they only work on your tasks, improving code quality and turnaround times.'
              },
              {
                title: 'Reduced Time to Market',
                desc: 'Dedicated developers speed up project development by using their experience and focus. Businesses optimize operations and finish projects quickly.'
              },
              {
                title: 'Enhanced Innovation and Creativity',
                desc: 'Dedicated developers offer new ideas and insights to projects, fostering a collaborative atmosphere where internal and external talent merge.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[18px] bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-[400]">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hire C# Developer In 4 Easy Steps */}
      <HireDeveloper4Steps />

      {/* Home Page: Video Testimonials Story ("Our Story, Their Words") */}
      <VideoTestimonialsStory />

      {/* Home Page: Business Friendly Engagement Models */}
      <EngagementModelsSection />

      {/* Home Page: Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Home Page: Unveiling Our Innovative Solution Video Carousel */}
      <InnovativeSolutionVideo />

      {/* Home Page: Work Process Grid */}
      <WorkProcessGrid />

      {/* Home Page: Client Reviews Dark Section ("What Our Clients Say") */}
      <ClientReviewsDarkSection />

      {/* Digital Transformation Case Studies (Screenshot 1) */}
      <DigitalTransformationCaseStudies />

      {/* Sapphire FAQ Section (Deep Blue Background + Left 8 Stat Badges + Right FAQ Accordion - Screenshot 2) */}
      <SapphireFaqSection
        faqList={csharpFaqs.map((f, i) => ({ id: i + 1, question: f.q, answer: f.a }))}
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* Social Media Section (Screenshot 3 top) */}
      <SocialMediaSection />

      {/* Recent Blogs Section (Screenshot 3 bottom) */}
      <RecentBlogsSection />

      {/* What Sets Us Apart As C# Development Company? (Screenshot 4) */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As C# Development Company?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* Conversion Callout Banner (Screenshot 5 top - Full width deep blue banner matching reference) */}
      <ConversionCalloutBanner
        hideSideImages={true}
        data={{
          title: "Have C# Development Challenge To Address ?",
          description: "Get access to top C# developers to transform your ideas into a robust application.",
          buttonText: "Hire Now",
          buttonLink: "#quote-form",
          hideImages: true
        }}
      />

      {/* Subscribe Newsletter Section (Screenshot 5 bottom) */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireCSharpDevelopersService;
