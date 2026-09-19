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

export const HireFastApiDevelopersService = () => {
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
        'Hire Dedicated FastAPI Developers that exclusively works for you'
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

  // 10 FastAPI FAQs
  const fastApiFaqs = [
    {
      q: '1. What is FastAPI used for in modern web application development?',
      a: "FastAPI is a high-performance, asynchronous Python web framework designed for building RESTful and GraphQL APIs with automatic OpenAPI documentation, automatic data validation using Pydantic, and native async/await support."
    },
    {
      q: '2. Why should I hire dedicated FastAPI developers?',
      a: 'Hiring dedicated FastAPI developers gives you access to Python backend architects who specialize in building asynchronous microservices, high-throughput REST APIs, machine learning model serving, real-time WebSockets, and secure OAuth2/JWT authentication.'
    },
    {
      q: '3. How much does it cost to hire a FastAPI developer?',
      a: 'Our FastAPI developer hiring rates start at $21/hour for dedicated full-time engagement. We also offer flexible hourly, monthly, and project-based pricing models.'
    },
    {
      q: '4. How do your FastAPI developers ensure API performance and concurrency?',
      a: 'We leverage ASGI servers like Uvicorn and Gunicorn, AsyncIO coroutines, async ORMs (SQLAlchemy 2.0 / Tortoise ORM), Redis caching, and connection pooling to achieve high throughput and low-latency responses.'
    },
    {
      q: '5. Can your FastAPI developers integrate AI/ML models into APIs?',
      a: 'Yes, FastAPI is the preferred framework for serving PyTorch, TensorFlow, Scikit-Learn, and LLM inference pipelines due to its non-blocking asynchronous architecture and Pydantic schema validation.'
    },
    {
      q: '6. How long does it take to onboard a FastAPI developer?',
      a: 'We can match and onboard pre-vetted senior FastAPI developers to join your project within 24 to 48 hours.'
    },
    {
      q: '7. What database and cloud technologies do your FastAPI developers use?',
      a: 'Our engineers work with PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS (Lambda, ECS), GCP, Azure, and CI/CD pipelines.'
    },
    {
      q: '8. Do you sign NDAs to protect our IP and project idea?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) before discussing any project details to ensure full security and IP ownership.'
    },
    {
      q: '9. Can your developers migrate legacy Flask or Django apps to FastAPI?',
      a: 'Yes, we perform complete architectural migrations from synchronous frameworks (Flask, Django) to FastAPI for 10x throughput gains.'
    },
    {
      q: '10. What timezone overlap do your developers provide?',
      a: 'Our developers offer 4 to 5 hours of daily timezone overlap for teams in the US, Europe, Asia, and Australia.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire FastAPI Developer | Dedicated Python API Engineers at $21/Hr"
        description="Hire dedicated FastAPI developers from Firevy.co. Seasoned Python async API programmers for high-performance microservices, REST APIs, and AI integrations starting at $21/hour."
        canonical="/services/hire-fastapi-developers"
      />

      {/* ============================================================
          HERO SECTION (1:1 Exact Match with Sapphire Reference)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire FastAPI Developer
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Hire FastAPI developer from Firevy.co to build ultra-fast, secure, and scalable APIs that power modern web and mobile applications. Our experienced developers specialize in building production-ready backend solutions using Python's FastAPI framework.
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

            {/* Right Column Illustration - FastAPI Laptop & API Hub Banner */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Floating Code Badge top-center */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-[#F97316] text-white px-3 py-1.5 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white space-x-1">
                  <span>&lt;/&gt;</span>
                </div>

                {/* Floating Lock Badge top-right */}
                <div className="absolute top-4 -right-3 z-20 bg-[#38BDF8] text-white p-2.5 px-3 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  <Lock className="w-4 h-4 stroke-[2.5]" />
                </div>

                {/* Server Rack on Left Side */}
                <div className="absolute top-1/4 -left-6 z-20 bg-[#1E293B] text-emerald-400 p-3 rounded-xl shadow-xl border-2 border-slate-700 flex flex-col space-y-1.5">
                  <div className="w-8 h-2 bg-slate-700 rounded-full flex items-center px-1 justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </div>
                  <div className="w-8 h-2 bg-slate-700 rounded-full flex items-center px-1 justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <div className="w-8 h-2 bg-slate-700 rounded-full flex items-center px-1 justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  </div>
                </div>

                {/* Laptop Display SVG */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 360" className="w-full h-auto">
                    <defs>
                      <linearGradient id="fastapiBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    <rect x="50" y="20" width="440" height="260" rx="12" fill="url(#fastapiBezel)" stroke="#334155" strokeWidth="2" />
                    <rect x="62" y="32" width="416" height="236" rx="4" fill="#FFFFFF" />

                    {/* Central Large Gear & API Badge */}
                    <circle cx="270" cy="140" r="48" fill="none" stroke="#38BDF8" strokeWidth="6" strokeDasharray="12 6" />
                    <circle cx="270" cy="140" r="34" fill="#38BDF8" />
                    <text x="270" y="146" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif">API</text>

                    {/* Mobile phone mockup on right of screen */}
                    <rect x="360" y="70" width="90" height="140" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
                    <circle cx="405" cy="140" r="18" fill="none" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />
                    <circle cx="405" cy="140" r="10" fill="#94A3B8" />

                    {/* Left image thumbnail box */}
                    <rect x="90" y="160" width="70" height="70" rx="8" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
                    <polygon points="105,210 125,185 145,210" fill="#CBD5E1" />
                    <circle cx="140" cy="178" r="6" fill="#F59E0B" />

                    {/* Laptop Keyboard Base */}
                    <rect x="20" y="280" width="500" height="18" rx="6" fill="#94A3B8" />
                    <rect x="210" y="282" width="120" height="6" rx="3" fill="#64748B" />
                    <path d="M 10 298 L 530 298 L 490 310 L 50 310 Z" fill="#CBD5E1" />
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
          FAST, GLOBAL ACCESS TO VETTED FASTAPI DEVELOPERS (Matching Image 1)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image Illustration - Sapphire API Diagram */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 500 380" className="w-full h-auto drop-shadow-md" fill="none">
                  {/* Soft Background Cloud Shape */}
                  <path d="M 80 180 C 60 120, 140 70, 220 80 C 270 40, 390 60, 440 120 C 490 180, 460 280, 390 320 C 310 360, 140 350, 90 300 C 50 250, 70 200, 80 180 Z" fill="#EBF6FC" />

                  {/* Main API Card Window */}
                  <rect x="150" y="90" width="280" height="200" rx="14" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="3" />

                  {/* Curved Orange Arrow */}
                  <path d="M 230 80 A 110 70 0 0 1 380 130" stroke="#F97316" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 6" />
                  <polygon points="385,135 375,125 370,138" fill="#F97316" />

                  {/* API Central Circle */}
                  <circle cx="280" cy="180" r="45" fill="#38BDF8" />
                  <circle cx="280" cy="180" r="54" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 4" />
                  <text x="280" y="188" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="sans-serif">API</text>

                  {/* Floating UI cards around API Circle */}
                  {/* Top Left Checklist Card */}
                  <rect x="110" y="120" width="80" height="45" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="125" y1="135" x2="175" y2="135" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="125" y1="148" x2="160" y2="148" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />

                  {/* Top Right Code Card */}
                  <rect x="340" y="110" width="90" height="50" rx="6" fill="#0F172A" />
                  <line x1="355" y1="125" x2="415" y2="125" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="355" y1="138" x2="395" y2="138" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                  <line x1="355" y1="148" x2="405" y2="148" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

                  {/* Bottom Image Thumbnail Card */}
                  <rect x="180" y="240" width="80" height="50" rx="6" fill="#38BDF8" />
                  <polygon points="195,280 215,255 235,280" fill="#FFFFFF" opacity="0.8" />
                  <circle cx="230" cy="255" r="5" fill="#FFFFFF" />

                  {/* Bottom Right Check Card */}
                  <rect x="330" y="240" width="80" height="45" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                  <circle cx="348" cy="262" r="8" fill="#10B981" />
                  <path d="M 344 262 L 347 265 L 352 259" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                  <line x1="362" y1="262" x2="395" y2="262" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

                  {/* Standing Developer Vector */}
                  <circle cx="75" cy="170" r="14" fill="#F43F5E" />
                  <path d="M 60 190 L 90 190 L 85 270 L 65 270 Z" fill="#1E293B" />
                  <rect x="63" y="270" width="9" height="50" fill="#0F172A" />
                  <rect x="76" y="270" width="9" height="50" fill="#0F172A" />
                  <path d="M 85 200 L 125 180" stroke="#F43F5E" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-black tracking-tight leading-[1.15]">
                Fast, Global Access To Vetted FastAPI Developers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-[1.7] font-[400] max-w-xl">
                Connect with our worldwide network of pre-screened FastAPI developers with hands-on experience with Python, asynchronous programming, RESTful APIs, and microservices. Whether you are building an MVP, moving to cloud-native platforms, or building a data-heavy back end, our Fast API development experts help you deliver high quality at scale. FastAPI is part of our backend architecture strategy which integrates technologies to meet the demands of our clients in varying circumstances. The asynchronous nature of FastAPI, along with Pydantic data validation and auto-generated documentation make it a great choice for building scalable APIs in modern event-driven applications. Our Fast API Development Services utilize best practices, including security, testing, and CI/CD, to help your team move fast and work smart to make your business better.
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
              Hire FastAPI Developers from Firevy.co Starts from,
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
              Hire FastAPI Developers to meet your business perks by leveraging our technical elegance.
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
          BRIEF ABOUT FASTAPI DEVELOPMENT SERVICES (Matching Image 1)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Brief About FastAPI Development Services
              </h2>
              <p className="text-slate-600 font-[400] text-sm sm:text-base leading-relaxed">
                Our flexible engagement models include full-time, part-time and hourly hiring, which gives you the flexibility to add and scale your team based on your live project needs. We focus on being quick and reliable while enabling startups and enterprises alike to innovate rapidly and reduce time-to-market.
              </p>
              <p className="text-slate-600 font-[400] text-sm sm:text-base leading-relaxed">
                You can hire FastAPI expert developers from India, USA, UK, Canada, Australia, and the UAE. We believe in true global delivery, providing anywhere expertise with round-the-clock productivity and cost-effective development. By deciding to work with us, there are no compromises, the only option is excellence at all phases of the project from discovery to deployment.
              </p>
            </div>

            {/* Right SVG Illustration Column */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[460px]">
                <svg viewBox="0 0 500 360" className="w-full h-auto drop-shadow-md" fill="none">
                  {/* Soft Background Cloud Artwork */}
                  <path d="M 50 180 C 30 110, 110 50, 200 65 C 250 25, 380 45, 430 110 C 480 170, 450 280, 370 320 C 290 355, 120 345, 65 295 C 25 245, 40 195, 50 180 Z" fill="#EBF6FC" />

                  {/* Standing Mobile Screen Mockup */}
                  <rect x="210" y="65" width="105" height="190" rx="14" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="4" />
                  <circle cx="262" cy="110" r="22" fill="#38BDF8" />
                  <text x="262" y="117" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif">API</text>
                  <line x1="228" y1="148" x2="296" y2="148" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                  <line x1="228" y1="160" x2="278" y2="160" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="228" y1="172" x2="288" y2="172" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

                  {/* Monitor Screen behind Developer */}
                  <rect x="285" y="145" width="165" height="105" rx="8" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" />
                  <circle cx="367" cy="188" r="24" fill="none" stroke="#94A3B8" strokeWidth="4" strokeDasharray="8 4" />
                  <circle cx="367" cy="188" r="14" fill="none" stroke="#64748B" strokeWidth="3" />
                  <rect x="347" y="250" width="40" height="18" fill="#94A3B8" />
                  <ellipse cx="367" cy="268" rx="45" ry="6" fill="#CBD5E1" />

                  {/* Server Stack on Right */}
                  <rect x="355" y="205" width="75" height="60" rx="6" fill="#1E293B" />
                  <circle cx="372" cy="220" r="3" fill="#10B981" />
                  <circle cx="382" cy="220" r="3" fill="#38BDF8" />
                  <circle cx="372" cy="240" r="3" fill="#10B981" />
                  <circle cx="382" cy="240" r="3" fill="#10B981" />

                  {/* Floating Orange Code Badge */}
                  <rect x="365" y="170" width="50" height="28" rx="6" fill="#F97316" />
                  <text x="390" y="189" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">&lt;/&gt;</text>

                  {/* Developer Vector holding laptop */}
                  <g transform="translate(15, 10)">
                    {/* Hair */}
                    <path d="M 120 100 C 105 85, 130 75, 140 85 C 145 90, 140 105, 130 110 Z" fill="#0F172A" />
                    {/* Face */}
                    <circle cx="130" cy="100" r="11" fill="#FDBA74" />
                    {/* Body Suit */}
                    <path d="M 110 120 L 150 120 L 145 185 L 115 185 Z" fill="#2563EB" />
                    {/* Legs */}
                    <rect x="118" y="185" width="10" height="85" fill="#1E293B" />
                    <rect x="132" y="185" width="10" height="85" fill="#1E293B" />
                    {/* Shoes */}
                    <rect x="114" y="265" width="16" height="7" rx="3" fill="#0F172A" />
                    <rect x="130" y="265" width="16" height="7" rx="3" fill="#0F172A" />
                    {/* Laptop in hands */}
                    <rect x="135" y="135" width="45" height="30" rx="3" transform="rotate(-15 135 135)" fill="#64748B" stroke="#475569" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clutch Top Rated Banner (Matching Home Page) */}
      <ClutchTopRatedBanner title="World Wide Top Rated FastAPI Development Company on Clutch" />

      {/* ============================================================
          WHO EXACTLY IS A FASTAPI DEVELOPER? (Matching Image 1)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Who Exactly Is a FastAPI Developer?
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
                A FastAPI developer is a Python backend developer who is specifically skilled at writing a high-throughput and performant web API using the FastAPI framework. Their responsibilities include defining API endpoints, implementing business logic, building security layers, managing asynchronous requests, interfacing with databases, and deploying cloud-native solutions. Core skills include Python 3+, FastAPI, async/await, Pydantic, SQLAlchemy, and having experience writing REST or GraphQL APIs.
              </p>
              <p>
                FastAPI developers work in close coordination with frontend developers, DevOps engineers, data engineers, and quality assurance teams to provide holistic solutions for the stakeholders they serve. Hire FastAPI Developers Online that are familiar with and resilient in remote and hybrid work situations and can work collaboratively to build the best products with a group of people from multiple time zones using modern collaboration tools, such as GitHub, Jira, Zoom, or Slack, to remain transparent and agile in every sprint.
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

      {/* Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
              </p>
            </div>

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

      {/* How We Divide Your Project Responsibilities ? */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

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

      {/* Tech Stack Proficient Grid */}
      <TechStackProficientGrid />

      {/* The Expertise Of Our FastAPI Development Services */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our FastAPI Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Our Certified FastAPI Developers Have Years Of Expertise In This Field. Some Of Their Expertise Includes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'RESTful API & Microservices',
                  desc: 'We help you design, build, test, and implement asynchronous REST APIs and microservices using FastAPI and Pydantic validation for maximum speed and type safety.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Code2
                },
                {
                  title: 'AI & ML Model Serving',
                  desc: 'Deploy machine learning models, PyTorch pipelines, and LLM inference endpoints asynchronously with low latency and automatic OpenAPI documentation generation.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Cpu
                },
                {
                  title: 'Real-time WebSockets',
                  desc: 'Construct real-time notification servers, live chat systems, and streaming data feeds using FastAPI native async WebSockets and Redis pub/sub channels.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: Zap
                },
                {
                  title: 'Database & ORM Integration',
                  desc: 'Seamlessly integrate SQLAlchemy 2.0, Tortoise ORM, PostgreSQL, and MongoDB for asynchronous database queries with connection pooling and migrations.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Database
                },
                {
                  title: 'Security & OAuth2 Authentication',
                  desc: 'Implement OAuth2 with Password hashing, JWT tokens, RBAC permissions, and CORS security layers to protect your enterprise backend infrastructure.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Lock
                },
                {
                  title: 'Cloud & Serverless Deployment',
                  desc: 'Containerize and deploy FastAPI applications on AWS Lambda, ECS, Docker, Kubernetes, GCP Cloud Run, and Azure App Service with automated CI/CD pipelines.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: Cloud
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

      {/* Clutch Top Rated Banner */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* Benefits of Hiring Dedicated Developers */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

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

      {/* Hire Developer 4 Steps Ribbon */}
      <HireDeveloper4Steps title="Hire FastAPI Developers In 4 Easy Steps" />

      {/* Video Testimonials / Our Story, Their Words */}
      <VideoTestimonialsStory />

      {/* Business Friendly Hiring Models */}
      <EngagementModelsSection
        title="Business Friendly Hiring Models : Building Greater Futures Through Innovation"
        subtitle="We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:"
      />

      {/* Success Matrix */}
      <SuccessMatrixGrid />

      {/* Unveiling Our Innovative Solution */}
      <InnovativeSolutionVideo />

      {/* Process We Follow */}
      <ProcessWeFollow />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection faqs={fastApiFaqs} />

      {/* Additional Footer Sections */}
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireFastApiDevelopersService;
