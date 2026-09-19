import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import ProcessWeFollow from '../common/ProcessWeFollow';
import { TechStackProficientGrid } from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import { SuccessMatrixGrid } from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import { RecentBlogsSection } from '../common/RecentBlogsSection';
import { WhatSetsUsApartSection } from '../common/WhatSetsUsApartSection';
import { SubscribeNewsletterSection } from '../home/SubscribeNewsletterSection';
import { ProudAwardsBanner } from './ProudAwardsBanner';
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
  Globe,
  Coins,
  Award,
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
  RefreshCw,
  Wallet,
  Activity,
  Fingerprint,
  LineChart,
  Terminal,
  FileCode
} from 'lucide-react';

export const HireApiDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

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
        'Hire Dedicated API Developers that exclusively works for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 21.00/Hour',
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
      price: '$ 2850.00/ Month',
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
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    }
  ];

  // Automatic 1-by-1 continuous card scrolling
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

  // 10 API FAQs
  const apiFaqs = [
    {
      q: '1. What are API developers responsible for?',
      a: 'API developers design, build, secure, document, and maintain RESTful, GraphQL, and gRPC application programming interfaces to enable seamless integration between backends, frontends, third-party software, and microservices.'
    },
    {
      q: '2. Why should I hire dedicated API developers from Firevy.co?',
      a: 'Hiring dedicated API developers from Firevy.co gives you access to top 1% pre-vetted engineers proficient in high-throughput microservices, OAuth2/JWT security, OpenAPI documentation, and low-latency database connectivity starting at $21/hour.'
    },
    {
      q: '3. How much does it cost to hire an API developer?',
      a: 'Our API developer hiring rates start at $21/hour. We also offer flexible hourly, monthly, and project-based pricing models.'
    },
    {
      q: '4. Which API protocols and architectural styles do your developers support?',
      a: 'Our developers are experienced in RESTful APIs, GraphQL, gRPC, WebSockets, SOAP (legacy), Webhooks, and Event-Driven Kafka/RabbitMQ architectures.'
    },
    {
      q: '5. How do your API developers handle API security and compliance?',
      a: 'We implement industry standards including OAuth2, OpenID Connect, JWT, API Keys, SSL/TLS encryption, rate-limiting, CORS, OWASP top 10 protection, and automated threat mitigation.'
    },
    {
      q: '6. How quickly can I onboard an API developer to my existing team?',
      a: 'We can match and onboard pre-vetted senior API developers to join your project within 24 to 48 hours.'
    },
    {
      q: '7. What languages and frameworks do your API developers use?',
      a: 'Our engineers specialize in Node.js (Express, NestJS), Python (FastAPI, Django, Flask), Java (Spring Boot), Go, C# (.NET Core), PHP (Laravel), and Ruby on Rails.'
    },
    {
      q: '8. Do you sign NDAs to protect our IP and project details?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) before discussing any project details to ensure full security and IP ownership.'
    },
    {
      q: '9. Can your developers help document our APIs?',
      a: 'Yes, we provide complete, interactive API documentation using OpenAPI 3.0, Swagger UI, Postman Collections, and Redoc for effortless developer integration.'
    },
    {
      q: '10. What timezone overlap do your developers offer?',
      a: 'Our developers provide 4 to 5 hours of daily timezone overlap for teams in the US, Europe, Asia, and Australia.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire API Developers | Dedicated RESTful & GraphQL API Engineers at $21/Hr"
        description="Hire dedicated API developers from Firevy.co. Expert API programmers for high-performance microservices, REST, GraphQL, and third-party integrations starting at $21/hour."
        canonical="/services/hire-api-developers"
      />

      {/* ============================================================
          HERO SECTION (Exact Match with Sapphire Reference Screenshot)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire API Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Employ Firevy.co API developers to develop high-quality, scalable, and secure APIs that are customized for your business logic, third-party integrations, or internal microservices architecture. Be it the development of a mobile app backend, SaaS interoperability enablement, or enterprise system scaling, our developers facilitate seamless API communication with high performance and less downtime. Employ dedicated API app developers to provide fast, well-documented, and RESTful or GraphQL-driven APIs that power your digital ecosystem.
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

            {/* Right Column Illustration - API Hub Monitor Vector Matching Sapphire */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px]">
                
                {/* Floating Cloud Upload Badge top-left */}
                <div className="absolute top-2 left-6 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-sky-100 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                    <Cloud className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                {/* Floating Settings Gear Icon top-middle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[#38BDF8] text-white p-2.5 rounded-xl shadow-lg border-2 border-white">
                  <Sliders className="w-5 h-5 stroke-[2.5]" />
                </div>

                {/* Floating Red Code Badge top-right */}
                <div className="absolute top-8 right-6 z-20 bg-[#EF4444] text-white px-4 py-2 rounded-xl shadow-xl font-extrabold text-sm flex items-center justify-center border-2 border-white space-x-1">
                  <span>&lt;/&gt;</span>
                </div>

                {/* Left Server Rack with CODE Badge */}
                <div className="absolute top-1/3 -left-4 z-20 bg-[#1E293B] text-white p-3.5 rounded-xl shadow-xl border-2 border-slate-700 flex flex-col space-y-2">
                  <div className="w-12 h-2.5 bg-slate-700 rounded-full flex items-center px-1 justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </div>
                  <div className="w-12 h-2.5 bg-slate-700 rounded-full flex items-center px-1 justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="bg-[#10B981] text-white text-[11px] font-[900] px-2 py-0.5 rounded text-center tracking-wider">
                    CODE
                  </div>
                </div>

                {/* Monitor & Code Laptop Illustration SVG */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 380" className="w-full h-auto">
                    <defs>
                      <linearGradient id="apiMonitorBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    {/* Outer Monitor Frame */}
                    <rect x="70" y="60" width="400" height="250" rx="14" fill="url(#apiMonitorBezel)" stroke="#334155" strokeWidth="3" />
                    <rect x="82" y="72" width="376" height="226" rx="6" fill="#FFFFFF" />

                    {/* Central Large Gear & API Badge */}
                    <circle cx="270" cy="180" r="48" fill="none" stroke="#006095" strokeWidth="7" strokeDasharray="12 6" />
                    <circle cx="270" cy="180" r="34" fill="#006095" />
                    <text x="270" y="186" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">API</text>

                    {/* Floating Code Editor Overlay Window on Right */}
                    <g transform="translate(300, 160)">
                      <rect x="0" y="0" width="140" height="100" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" fill="#EF4444" />
                      <circle cx="22" cy="12" r="3" fill="#F59E0B" />
                      <circle cx="32" cy="12" r="3" fill="#10B981" />
                      <line x1="12" y1="28" x2="90" y2="28" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                      <line x1="12" y1="40" x2="120" y2="40" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                      <line x1="12" y1="52" x2="75" y2="52" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                      <line x1="12" y1="64" x2="110" y2="64" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
                      <line x1="12" y1="76" x2="60" y2="76" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                    </g>

                    {/* Monitor Stand Base */}
                    <rect x="240" y="310" width="60" height="25" fill="#94A3B8" />
                    <ellipse cx="270" cy="335" rx="75" ry="10" fill="#CBD5E1" />
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
          HIRE API DEVELOPERS REMOTELY (Matching Sapphire Reference)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image Illustration - Sapphire Exact Artwork */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 520 360" className="w-full h-auto drop-shadow-md" fill="none">
                  {/* Soft Background Cloud Shape */}
                  <path d="M 60 170 C 40 100, 120 40, 210 55 C 270 20, 400 40, 450 100 C 500 160, 470 270, 390 310 C 310 345, 120 335, 65 285 C 25 235, 40 185, 60 170 Z" fill="#EBF6FC" />

                  {/* Main Window Browser Frame */}
                  <rect x="120" y="80" width="340" height="210" rx="12" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="3" />
                  
                  {/* Server Tower Rack on Left */}
                  <rect x="180" y="125" width="80" height="150" rx="8" fill="#2E3A59" />
                  {/* Server Front LED Grids */}
                  <g fill="#FFFFFF" opacity="0.85">
                    <circle cx="195" cy="140" r="2.5" /><circle cx="205" cy="140" r="2.5" /><circle cx="215" cy="140" r="2.5" /><circle cx="225" cy="140" r="2.5" /><circle cx="235" cy="140" r="2.5" /><circle cx="245" cy="140" r="2.5" />
                    <circle cx="195" cy="155" r="2.5" /><circle cx="205" cy="155" r="2.5" /><circle cx="215" cy="155" r="2.5" /><circle cx="225" cy="155" r="2.5" /><circle cx="235" cy="155" r="2.5" /><circle cx="245" cy="155" r="2.5" />
                    <circle cx="195" cy="170" r="2.5" /><circle cx="205" cy="170" r="2.5" /><circle cx="215" cy="170" r="2.5" /><circle cx="225" cy="170" r="2.5" /><circle cx="235" cy="170" r="2.5" /><circle cx="245" cy="170" r="2.5" />
                    <circle cx="195" cy="185" r="2.5" /><circle cx="205" cy="185" r="2.5" /><circle cx="215" cy="185" r="2.5" /><circle cx="225" cy="185" r="2.5" /><circle cx="235" cy="185" r="2.5" /><circle cx="245" cy="185" r="2.5" />
                    <circle cx="195" cy="200" r="2.5" /><circle cx="205" cy="200" r="2.5" /><circle cx="215" cy="200" r="2.5" /><circle cx="225" cy="200" r="2.5" /><circle cx="235" cy="200" r="2.5" /><circle cx="245" cy="200" r="2.5" />
                    <circle cx="195" cy="215" r="2.5" /><circle cx="205" cy="215" r="2.5" /><circle cx="215" cy="215" r="2.5" /><circle cx="225" cy="215" r="2.5" /><circle cx="235" cy="215" r="2.5" /><circle cx="245" cy="215" r="2.5" />
                    <circle cx="195" cy="230" r="2.5" /><circle cx="205" cy="230" r="2.5" /><circle cx="215" cy="230" r="2.5" /><circle cx="225" cy="230" r="2.5" /><circle cx="235" cy="230" r="2.5" /><circle cx="245" cy="230" r="2.5" />
                    <circle cx="195" cy="245" r="2.5" /><circle cx="205" cy="245" r="2.5" /><circle cx="215" cy="245" r="2.5" /><circle cx="225" cy="245" r="2.5" /><circle cx="235" cy="245" r="2.5" /><circle cx="245" cy="245" r="2.5" />
                    <circle cx="195" cy="260" r="2.5" /><circle cx="205" cy="260" r="2.5" /><circle cx="215" cy="260" r="2.5" /><circle cx="225" cy="260" r="2.5" /><circle cx="235" cy="260" r="2.5" /><circle cx="245" cy="260" r="2.5" />
                  </g>

                  {/* Code Line Bars in Center Window */}
                  <g strokeLinecap="round" strokeWidth="6">
                    <line x1="280" y1="110" x2="315" y2="110" stroke="#38BDF8" />
                    <line x1="280" y1="125" x2="335" y2="125" stroke="#F43F5E" />
                    <line x1="280" y1="140" x2="360" y2="140" stroke="#005F96" />
                    <line x1="280" y1="155" x2="320" y2="155" stroke="#38BDF8" />
                    <line x1="280" y1="170" x2="375" y2="170" stroke="#38BDF8" />
                    <line x1="280" y1="185" x2="345" y2="185" stroke="#F43F5E" />
                    <line x1="280" y1="200" x2="310" y2="200" stroke="#38BDF8" />
                  </g>

                  {/* Floating Cloud Upload White Card on Right */}
                  <rect x="385" y="140" width="65" height="55" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <path d="M 402 165 C 397 165, 393 160, 396 154 C 398 148, 407 146, 412 150 C 416 145, 427 148, 427 155 C 432 155, 434 162, 429 165 Z" fill="#38BDF8" />
                  <path d="M 417 167 L 417 156 M 413 160 L 417 156 L 421 160" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Floating Orange Gear on Left Server */}
                  <g transform="translate(165, 215)">
                    <circle cx="16" cy="16" r="16" fill="#F97316" />
                    <circle cx="16" cy="16" r="6" fill="#FFFFFF" />
                  </g>

                  {/* Floating Red Code Badge top-center */}
                  <rect x="280" y="60" width="60" height="34" rx="8" fill="#EF4444" />
                  <text x="310" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">&lt;/&gt;</text>

                  {/* Floating Blue Gear bottom-center */}
                  <g transform="translate(295, 225)">
                    <circle cx="16" cy="16" r="16" fill="#38BDF8" />
                    <circle cx="16" cy="16" r="6" fill="#FFFFFF" />
                  </g>

                  {/* Floating Green API Badge bottom-right */}
                  <rect x="375" y="225" width="55" height="28" rx="6" fill="#10B981" />
                  <text x="402.5" y="244" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">API</text>

                  {/* Soft Gear Backdrop top-right */}
                  <g transform="translate(370, 30)" opacity="0.4">
                    <circle cx="24" cy="24" r="24" fill="none" stroke="#38BDF8" strokeWidth="5" strokeDasharray="8 6" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-black tracking-tight leading-[1.15]">
                Hire API Developers Remotely
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-[1.7] font-[400] max-w-xl">
                Need API professionals without the lengthy recruitment process? Hire Dedicated API App Developers remotely from Firevy.co who are qualified, experienced, and ready to work. Select flexible engagement options—hourly, monthly, or project-based—and be up and running right now with our cost-effective API developers for hire. We enable startups, enterprises, and SaaS companies to reach top-rated API developers to deliver or scale integrations quickly and accurately.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          OUR FLEXIBLE HIRING MODELS SECTION
          ============================================================ */}
      <section className="py-20 bg-[#F0F6FB] text-slate-900 font-sans overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-[400]">
              Hire API Developers from Firevy.co Starts from,
            </p>
          </div>

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
      <section className="py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-[400]">
              Hire API Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

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
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Approx Cost
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$17</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$22</td>
                    <td className="py-3.5 px-6 text-slate-800">$29</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Years of Experience
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">1-3 Years</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">3-5 Years</td>
                    <td className="py-3.5 px-6 text-slate-800">5+ Years</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Project Manager
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Time Zone Flexibility
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Quality Guarantee
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

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
          HIRE PROFESSIONAL API DEVELOPERS FOR YOUR PROJECT (Matching Sapphire)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Hire Professional API Developers For Your Project
              </h2>
              <p className="text-slate-600 font-[400] text-sm sm:text-base leading-relaxed">
                From the USA, UK, UAE, and Australia to India and Canada—our team assists businesses worldwide in hiring expert API developers for REST API development, third-party API integration, custom API development, and backend optimization. If you are an early-stage startup or an enterprise that's revamping legacy systems, our skilled API developers for hire API Experts for scalable, maintainable, and future-proof code you can rely on.
              </p>
            </div>

            {/* Right SVG Illustration Column - Exact Sapphire Match */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 520 380" className="w-full h-auto drop-shadow-md" fill="none">
                  {/* Soft Background Cloud Shape */}
                  <path d="M 60 180 C 40 100, 130 30, 240 50 C 300 15, 430 40, 470 110 C 510 180, 480 290, 400 330 C 310 365, 130 355, 75 305 C 30 255, 45 200, 60 180 Z" fill="#EBF6FC" />

                  {/* Globe Wireframe top-right */}
                  <g transform="translate(390, 45)" stroke="#38BDF8" strokeWidth="2" fill="none">
                    <circle cx="20" cy="20" r="18" />
                    <ellipse cx="20" cy="20" rx="9" ry="18" />
                    <line x1="2" y1="20" x2="38" y2="20" />
                    <line x1="6" y1="10" x2="34" y2="10" />
                    <line x1="6" y1="30" x2="34" y2="30" />
                  </g>

                  {/* Top-Center Large API Dark Navy Badge */}
                  <rect x="220" y="45" width="80" height="38" rx="10" fill="#1E293B" />
                  <text x="260" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">API</text>

                  {/* Floating Orange Code Badge top-right */}
                  <rect x="335" y="60" width="50" height="28" rx="6" fill="#F97316" />
                  <text x="360" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">&lt;/&gt;</text>

                  {/* Laptop Display in Center */}
                  <rect x="200" y="105" width="220" height="135" rx="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
                  {/* Laptop Header Bar */}
                  <rect x="200" y="105" width="220" height="22" rx="6" fill="#006095" />
                  <circle cx="215" cy="116" r="3" fill="#EF4444" />
                  <circle cx="225" cy="116" r="3" fill="#F59E0B" />
                  <circle cx="235" cy="116" r="3" fill="#10B981" />

                  {/* Website Layout inside Laptop */}
                  <rect x="215" y="138" width="85" height="40" fill="#E2E8F0" rx="4" />
                  <rect x="310" y="138" width="95" height="8" fill="#38BDF8" rx="2" />
                  <rect x="310" y="152" width="80" height="6" fill="#94A3B8" rx="2" />
                  <rect x="310" y="164" width="70" height="6" fill="#CBD5E1" rx="2" />

                  {/* Wave pattern inside left box */}
                  <path d="M 220 160 Q 235 150 250 160 T 280 160" stroke="#006095" strokeWidth="2" fill="none" />
                  <path d="M 220 168 Q 235 158 250 168 T 280 168" stroke="#38BDF8" strokeWidth="2" fill="none" />

                  {/* Laptop Keyboard Base */}
                  <path d="M 170 240 L 450 240 L 430 252 L 190 252 Z" fill="#94A3B8" />

                  {/* Mobile Smartphone on Left */}
                  <rect x="135" y="125" width="70" height="120" rx="10" fill="#1E293B" stroke="#006095" strokeWidth="3" />
                  <rect x="142" y="138" width="56" height="94" rx="4" fill="#FFFFFF" />
                  <circle cx="170" cy="175" r="16" fill="#10B981" />
                  <path d="M 162 175 L 167 180 L 178 169" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                  {/* Server Tower Rack on Right */}
                  <rect x="388" y="160" width="60" height="80" rx="6" fill="#1E293B" />
                  <rect x="396" y="172" width="44" height="12" rx="3" fill="#334155" />
                  <rect x="396" y="192" width="44" height="12" rx="3" fill="#334155" />
                  <rect x="396" y="212" width="44" height="12" rx="3" fill="#334155" />
                  <circle cx="430" cy="178" r="2.5" fill="#10B981" />
                  <circle cx="430" cy="198" r="2.5" fill="#10B981" />
                  <circle cx="430" cy="218" r="2.5" fill="#38BDF8" />

                  {/* Floating Yellow JSON Badge bottom-right with cable */}
                  <path d="M 390 240 Q 370 290 360 295" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                  <rect x="360" y="275" width="50" height="30" rx="8" fill="#F59E0B" />
                  <text x="385" y="295" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif font-mono">{`{...}`}</text>

                  {/* Floating Blue Gear bottom-left */}
                  <g transform="translate(138, 260)">
                    <circle cx="18" cy="18" r="18" fill="none" stroke="#38BDF8" strokeWidth="4" strokeDasharray="6 4" />
                    <circle cx="18" cy="18" r="10" fill="none" stroke="#38BDF8" strokeWidth="3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clutch Top Rated Banner */}
      <ClutchTopRatedBanner title="World Wide Top Rated API Development Company on Clutch" />

      {/* ============================================================
          WHAT DOES AN API DEVELOPER DO FOR YOUR SOFTWARE STACK? (Matching Sapphire)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              What Does an API Developer Do for Your Software Stack?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Speech Bubble Card */}
            <div className="md:col-span-5 flex justify-center md:justify-start relative">
              <div className="w-full max-w-[350px] bg-[#F2F9FD] p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-sm border border-blue-50/60 md:after:content-[''] md:after:absolute md:after:-right-[12px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:border-[12px] md:after:border-transparent md:after:border-l-[#F2F9FD]">
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="none">
                  <path fill="none" stroke="#005F96" strokeWidth="1.2" d="M -50 30 Q 75 130 350 30 M -50 80 Q 75 180 350 80 M -50 130 Q 75 230 350 130 M -50 180 Q 75 280 350 180 M -50 230 Q 75 330 350 230 M -50 280 Q 75 380 350 280" />
                </svg>

                <div className="text-[#005F96] relative z-10 pt-1">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <h3 className="text-[26px] sm:text-[28px] lg:text-[30px] font-[900] text-[#005F96] leading-[1.25] tracking-tight relative z-10 pt-4 pb-2">
                  Instant Access To<br />
                  Top Talent With<br />
                  Hard-To-Find Skills
                </h3>
              </div>
            </div>

            {/* Right Column Content & Button */}
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                An API developer constructs and supports the glue for your software systems—enabling smooth data transfer, secure access, and speed. Get API specialists from Firevy.co to develop authentication APIs, payment gateways, social integrations, or real-time data sync features based on REST, GraphQL, gRPC, or WebSockets. Hire API Developers for Custom API development that provide API versioning, adequate documentation, token-based authentication, and high-traffic scalability.
              </p>
              <div className="pt-3">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block bg-[#005F96] hover:bg-[#004A75] text-white font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition-colors shadow-sm"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Services Grid */}
      <PremiumServicesGrid />

      {/* Meet Exceptional Team of Seasoned Experts */}
      <SapphireSeasonedExpertsSection />

      {/* Leverage The Expertise of Firevy.co Dedicated Developers */}
      <LeverageExpertiseGridSection brandName="Firevy.co" />

      {/* Industry-Focused Insights To Elevate Your Business */}
      <IndustryFocusedInsightsSection
        title="Industry-Focused Insights To Elevate Your Business"
        subtitle="Trending Industries that Use Dedicated Developers"
      />

      {/* About Us Stats */}
      <AboutUsStats />

      {/* Sectors Thriving */}
      <SectorsThrivingSection />

      {/* ============================================================
          EMPLOY THE ADVANCED PROFICIENCY OF FIREVY.CO'S DEDICATED DEVELOPMENT TEAM (Matching Image 1)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
              </p>
            </div>

            {/* 10 White Cards Grid (2 rows of 5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: 'On-Time Progress Monitoring', IconComp: Clock },
                { title: 'Time-Zone Compatibility', IconComp: Globe },
                { title: 'Cost-Effective Development', IconComp: Coins },
                { title: 'World Class Expertise', IconComp: Award },
                { title: 'Least Turnaround Time', IconComp: Zap },
                { title: 'Best Management Standards', IconComp: ShieldCheck },
                { title: '500+ Seasons Experts', IconComp: Lightbulb },
                { title: '24x7 Support Team', IconComp: Headphones },
                { title: 'Efficient Project Management', IconComp: Handshake },
                { title: 'Dedicated Delivery Management', IconComp: UserCheck }
              ].map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-md border border-slate-100/80 transition-all flex flex-col justify-center items-center space-y-3 h-40"
                  >
                    <div className="w-10 h-10 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ? (Matching Image 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Firevy.co / Client Filter Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Firevy.co
                </button>
                <button
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'client'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>

            {/* 6 Responsibilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
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
                    { title: 'Define project scope & vision', IconComp: Milestone },
                    { title: 'Provide domain context & access', IconComp: Database },
                    { title: 'Review sprint deliverables', IconComp: CheckCircle2 },
                    { title: 'Provide timely feedback & approvals', IconComp: RefreshCw },
                    { title: 'Align business priorities with roadmap', IconComp: LineChart },
                    { title: 'Co-evaluate key performance indicators', IconComp: PieChart }
                  ]
              ).map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#EBF4FA] rounded-2xl p-8 text-center border border-cyan-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-center items-center space-y-4 min-h-[160px]"
                  >
                    <div className="w-12 h-12 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-9 h-9 stroke-[1.8]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Proficient Grid (Moved directly after How We Divide Your Project Responsibilities) */}
      <TechStackProficientGrid />

      {/* ============================================================
          OUR API DEVELOPMENT EXPERTISE INCLUDES (Matching Image 1)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Our API Development Expertise Includes
              </h2>
            </div>

            {/* 6 Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom API Development',
                  desc: 'Develop secure and scalable APIs following the business logic and architecture of your product.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Code2
                },
                {
                  title: 'Third-Party API Integration',
                  desc: 'Integrate your platform with Stripe, PayPal, Twilio, Salesforce, or any custom service seamlessly.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Server
                },
                {
                  title: 'REST & GraphQL API Development',
                  desc: 'Leverage dedicated API developers with expertise in RESTful APIs and GraphQL schemas to optimize data queries.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: FileCode
                },
                {
                  title: 'OAuth, JWT & Token-Based Security',
                  desc: 'Implement secure data access through industry-standard API authentication protocols and user-level permissions.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Lock
                },
                {
                  title: 'API for SaaS, Mobile & Web Applications',
                  desc: 'Develop APIs that drive your SaaS application, native mobile applications, or web frontend with real-time data flow.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Globe
                },
                {
                  title: 'Microservices & Serverless API Architecture',
                  desc: 'Use modern backend architectures with containerized microservices and serverless APIs with AWS Lambda, Azure, or Google Cloud.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: Cpu
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100 transition-all flex flex-col justify-start space-y-4"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                      <CardIcon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Get A Free Quote Button */}
            <div className="text-center pt-2">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#005F96] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-sm"
              >
                Get A Free Quote For Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Proud To Have Picked These Up Along The Way (Matching Image 2) */}
      <ProudAwardsBanner />

      {/* ============================================================
          BENEFITS OF HIRING DEDICATED DEVELOPERS (Matching Image 3)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            {/* 6 White Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cost Efficiency',
                  desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool. We provide access to global talent, frequently from low-cost locations, lowering labour costs without sacrificing quality.',
                  IconComp: Coins
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time and without errors.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time employment. They can swiftly adapt to project needs and market circumstances, assuring timely delivery and resource optimisation.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated developers are more productive and committed since they only work on their tasks. This dedication generally improves code quality, turnaround times, and development process cohesion.',
                  IconComp: ShieldCheck
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers can speed up project development by using their experience and attention. Businesses can optimize operations, eliminate bottlenecks, and finish projects quickly by hiring dedicated developers.',
                  IconComp: Zap
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and remote teams exchange ideas.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100/90 transition-all flex flex-col justify-start space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4 Step Hiring Process */}
      <HireDeveloper4Steps
        title="4 Step Easy Process To Hire API Developers From Firevy.co"
        subtitle="Simple, fast, and transparent hiring workflow."
      />

      {/* Video Testimonials Story (Moved directly after 4 Step Hiring Process) */}
      <VideoTestimonialsStory />

      {/* Engagement Models (Moved directly after Video Testimonials Story) */}
      <EngagementModelsSection />

      {/* Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Innovative Solution Video */}
      <InnovativeSolutionVideo />

      {/* Process We Follow */}
      <ProcessWeFollow />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection
        title="Hire API Developers FAQ's"
        faqs={apiFaqs}
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />

      {/* Recent Blogs */}
      <RecentBlogsSection />

      {/* What Sets Us Apart */}
      <WhatSetsUsApartSection />

      {/* Subscribe Newsletter Section */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireApiDevelopersService;
