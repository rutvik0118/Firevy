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
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
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
  ChevronLeft,
  ChevronRight,
  Laptop,
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
  Milestone,
  RefreshCw,
  Building2,
  Sprout,
  GraduationCap,
  ShoppingBag,
  Scale
} from 'lucide-react';

export const HireLaravelDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);
  const [leverageTab, setLeverageTab] = useState(0);
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 6 Flexible Hiring Model Cards matching Sapphire reference (Part-time, Full-time, Hourly, Monthly, Quarterly, Yearly)
  const hiringModelCards = [
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
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
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
        '4 hours a day, 5 days a week',
        'Minimum: 2 months',
        'Hire Dedicated Laravel Developers that exclusively works for you'
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
        '4 hours a day, 5 days a week',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2550.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: 'Starting From',
      price: '$ 7500.00/ Month',
      IconComp: PieChart,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: 'Starting From',
      price: '$24000',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Save Up TO 20%',
      badgeText: 'Best Deal',
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    }
  ];

  // Automatic 1-by-1 continuous card scrolling
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setCardSlideIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(0);
    }
  };

  const handlePrevCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev === 0 ? hiringModelCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => prev + 1);
  };

  // Team of Seasoned Experts Data
  const teamCategories = ['Trending', 'Hire Developer', 'Web Development', 'App Development', 'Cross Platform', 'Ecommerce & CMS'];
  const teamMembers = [
    {
      id: 1,
      name: 'Nikhil V.',
      role: 'Senior Lead Laravel Architect',
      exp: '9+ Years Experience',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      description: 'Senior Laravel architect specializing in enterprise microservices, Eloquent ORM tuning, Livewire, Inertia.js, and RESTful API engineering.',
      techs: ['Laravel 11', 'PHP 8.3', 'Livewire', 'Eloquent ORM', 'Inertia.js', 'MySQL', 'Redis', 'Docker'],
      stats: { projects: '65+', clientRating: '4.95/5', codeQuality: '99.8%' }
    },
    {
      id: 2,
      name: 'Rajesh K.',
      role: 'Full-Stack Laravel & Vue Specialist',
      exp: '7+ Years Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      description: 'Expert full-stack developer skilled in Laravel, Livewire 3, Inertia.js + Vue.js 3, Filament admin panels, and payment gateway integrations.',
      techs: ['Laravel', 'Vue.js 3', 'Livewire', 'Inertia.js', 'Filament', 'Stripe', 'Redis', 'AWS'],
      stats: { projects: '48+', clientRating: '4.92/5', codeQuality: '99.5%' }
    },
    {
      id: 3,
      name: 'Ananya S.',
      role: 'Laravel API & Microservices Lead',
      exp: '6+ Years Experience',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      description: 'Specializes in high-concurrency Laravel Passport/Sanctum APIs, queue optimization with Horizon, Pest testing, and CI/CD pipelines.',
      techs: ['Laravel Sanctum', 'Horizon', 'Pest PHP', 'Docker', 'GraphQL', 'PostgreSQL', 'Redis'],
      stats: { projects: '42+', clientRating: '4.96/5', codeQuality: '99.9%' }
    }
  ];

  // 10 Employ Advanced Proficiency Cards
  const proficiencyCards = [
    {
      id: 1,
      title: 'Custom Laravel Web App Development',
      desc: 'Tailored enterprise portals, SaaS platforms, and backend systems engineered with Laravel 11 clean MVC design patterns.',
      icon: Code2
    },
    {
      id: 2,
      title: 'Full-Stack Livewire & Inertia.js Apps',
      desc: 'Dynamic single-page experiences built seamlessly with Laravel Livewire 3 and Inertia.js with Vue/React without API complexity.',
      icon: Cpu
    },
    {
      id: 3,
      title: 'Laravel RESTful & GraphQL API Engineering',
      desc: 'Secure, high-throughput backend APIs for web and mobile apps powered by Laravel Sanctum, Passport, and GraphQL.',
      icon: Layers
    },
    {
      id: 4,
      title: 'Filament & Custom Admin Panels',
      desc: 'Feature-rich, high-security admin dashboards, CMS platforms, and internal operational portals built with Filament and Blade.',
      icon: LayoutGrid
    },
    {
      id: 5,
      title: 'Legacy Code Migration to Laravel 11',
      desc: 'Seamless refactoring of legacy PHP, CodeIgniter, or older Laravel versions to modern Laravel 11 with zero data loss.',
      icon: RefreshCw
    },
    {
      id: 6,
      title: 'Laravel E-commerce Solutions',
      desc: 'High-converting online storefronts, marketplace systems, and payment gateways engineered with Bagisto and Laravel.',
      icon: ShoppingBag
    },
    {
      id: 7,
      title: 'Database Optimization & Queue Scaling',
      desc: 'High-performance database indexing, Redis caching, and async job queues managed with Laravel Horizon and Octane.',
      icon: Database
    },
    {
      id: 8,
      title: 'Multi-Tenant SaaS Application Architecture',
      desc: 'Scalable multi-tenant SaaS solutions with isolated databases, domain mapping, subscription management, and tenant routing.',
      icon: Server
    },
    {
      id: 9,
      title: 'Automated Testing with Pest & PHPUnit',
      desc: 'Comprehensive unit, feature, and integration test coverage using Pest PHP to guarantee bug-free production rollouts.',
      icon: ShieldCheck
    },
    {
      id: 10,
      title: '24/7 SLA Maintenance & DevOps Tuning',
      desc: 'Continuous security patch rollouts, cloud server deployment with Laravel Forge/Envoyer, and 99.99% uptime monitoring.',
      icon: Zap
    }
  ];

  // Specialized Expertise Services (6 Cards)
  const specializedServices = [
    {
      title: 'Laravel Enterprise Solutions',
      desc: 'Scalable, enterprise-grade web applications designed for high load, complex business logic, and bank-grade security standards.',
      icon: Server
    },
    {
      title: 'Laravel Livewire 3 & Inertia.js',
      desc: 'Reactive, real-time user interfaces created using Laravel Livewire and Inertia.js for modern SPA user experiences.',
      icon: Layers
    },
    {
      title: 'Laravel API & Microservices',
      desc: 'High-performance microservices architecture with lightweight API endpoints, rate limiting, and Sanctum authentication.',
      icon: Cpu
    },
    {
      title: 'Filament Admin & Dashboard Development',
      desc: 'Sleek, intuitive, and secure management control panels built with Filament PHP for rapid backend administration.',
      icon: LayoutGrid
    },
    {
      title: 'Laravel E-commerce & Marketplaces',
      desc: 'Robust multi-vendor e-commerce solutions with Stripe/PayPal integration, inventory sync, and real-time order tracking.',
      icon: ShoppingBag
    },
    {
      title: 'CodeIgniter/PHP to Laravel Migration',
      desc: 'Smooth structural migration from legacy PHP codebases to Laravel 11 with modernized database schemas and unit tests.',
      icon: RotateCw
    }
  ];

  // Benefits of Hiring (6 Cards)
  const benefits = [
    {
      title: 'Top 1% Vetted Laravel Talent',
      desc: 'Access senior Laravel engineers with average 6+ years of production experience in building complex web applications.',
      icon: Award
    },
    {
      title: 'Rapid Sprint Delivery',
      desc: 'Accelerate feature deployment by up to 40% with agile bi-weekly sprints, CI/CD automation, and Laravel Octane speed.',
      icon: Zap
    },
    {
      title: 'Strict IP & NDA Protection',
      desc: 'Complete IP ownership, strict Non-Disclosure Agreements, and enterprise-grade data privacy protocols from day one.',
      icon: Lock
    },
    {
      title: 'Direct Engineer Communication',
      desc: 'Collaborate directly with your dedicated Laravel developers via Slack, Jira, GitHub, and daily standup calls.',
      icon: MessageSquare
    },
    {
      title: 'Transparent Flat Pricing',
      desc: 'Flexible hiring packages with zero hidden fees, clear monthly/hourly rates, and easy scaling up or down.',
      icon: Coins
    },
    {
      title: '100% Risk-Free Trial',
      desc: 'Evaluate developer performance with a 15-day risk-free trial period to ensure complete alignment with your team.',
      icon: UserCheck
    }
  ];

  // FAQs matching Sapphire reference page
  const faqs = [
    {
      q: 'How much does it cost to hire a Laravel developer?',
      a: 'Our pricing is straightforward to understand. You may hire a Laravel developer in Canada from us and they have an average of four to six years of expertise.'
    },
    {
      q: 'Which is better: Django or Laravel?',
      a: 'Both Django and Laravel are powerful frameworks. Laravel is ideal for rapid PHP development with elegant syntax, built-in ORM, and rich ecosystem like Livewire and Inertia.js, whereas Django is Python-based. Choice depends on your technology stack preferences.'
    },
    {
      q: 'Which company is best for Laravel development?',
      a: 'Firevy.co is a top-rated Laravel development company with 20+ years of experience, a team of dedicated Laravel experts, and a track record of delivering high-performing web applications globally.'
    },
    {
      q: 'Do you give support and maintenance services after Development?',
      a: 'Yes, we offer comprehensive post-launch support and SLA maintenance packages including security patch rollouts, server scaling, performance tuning, and 24/7 incident monitoring.'
    },
    {
      q: 'Is Laravel in high demand?',
      a: 'Yes, Laravel is the most widely used PHP framework globally, powering high-throughput web applications for startups and enterprise platforms alike.'
    },
    {
      q: 'Why is Laravel the best for web application development?',
      a: 'Laravel offers elegant syntax, built-in authentication, ORM (Eloquent), robust migration tools, queue management, and an expansive ecosystem.'
    },
    {
      q: 'Why should I hire Laravel developers from Firevy.co?',
      a: 'Our dedicated Laravel developers bring deep domain expertise, bi-weekly agile velocity, 100% IP & code ownership, direct communication, and 15-day risk-free trials to guarantee project success.'
    },
    {
      q: 'Do you offer Laravel development services for global clients like the USA, UK, Canada, and Australia?',
      a: 'Yes, we serve clients globally across the USA, UK, Canada, Australia, UAE, and Europe, adapting seamlessly to your time zone and workflow requirements.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Dedicated Laravel Developers | Expert Laravel 11 Engineers | Firevy.co"
        description="Hire top 1% vetted dedicated Laravel developers from Firevy.co. Expert Laravel 11, Livewire, Inertia.js, Eloquent, and Filament specialists. Flexible hiring models, zero onboarding overhead, and 100% IP ownership."
      />

      {/* ============================================================
          HERO SECTION (Matching Sapphire Reference Screenshot 1)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Laravel Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Create web applications that are reliable, up-to-date, scalable, and robust with the help of our specialized Laravel developers for hire. You can also Hire AI Laravel Developers to build intelligent, scalable, and future-ready Laravel web solutions tailored to your business needs.
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

            {/* Right Column Image Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/react_hero_illustration.jpg"
                  alt="Hire Laravel Developers Illustration"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-slate-200/80 hover:shadow-indigo-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 2: Experienced Laravel Developers Available For Hire
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Graphic Illustration Image */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[550px]">
                <img
                  src="/images/react_section2_illustration.jpg"
                  alt="Experienced Laravel Developers Available For Hire"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-cyan-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Experienced Laravel Developers Available For Hire
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Hire Dedicated Laravel Developers with extensive expertise in the Laravel framework. We assist you in developing scalable applications that promote growth. Our team of Laravel developers can create attractive web and mobile apps regardless of the kind of company or sector. With us, adaptation and flexibility will never be a concern since the applications developed by our Laravel web developer are highly configurable. Using a single codebase, Laravel reduces development time and costs, assuring the implementation of scalable business solutions. In addition, the framework includes templates that may be used to construct site components such as forms and buttons.
              </p>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 bg-[#0083B0] hover:bg-[#006095] text-white font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  <span>Hire Dedicated Laravel Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: Flexible Hiring Models (Carousel)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Laravel Developers from Firevy.co Starts from,
            </p>
          </div>

          {/* Cards Carousel Container */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!enableTransition ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${cardSlideIndex * (100 / 3)}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...hiringModelCards, ...hiringModelCards, ...hiringModelCards].map((card, index) => {
                const IconComp = card.IconComp;
                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 py-4"
                  >
                    <div
                      className={`h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${card.isFeatured
                          ? 'border-2 border-[#0083B0] shadow-xl ring-4 ring-[#0083B0]/10 scale-[1.02]'
                          : 'border border-slate-200/80 shadow-md hover:shadow-xl'
                        }`}
                    >
                      {/* Top Save text or badge */}
                      {card.saveText && (
                        <div className="text-center font-bold text-xs text-[#0083B0] tracking-wider uppercase mb-2">
                          {card.saveText}
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Header Icon Circle */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0083B0] mx-auto shadow-xs">
                          <IconComp className="w-6 h-6 stroke-[2]" />
                        </div>

                        {/* Title & Badge */}
                        <div className="text-center space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <h3 className="text-xl font-[800] text-slate-900">{card.title}</h3>
                            {card.badgeText && (
                              <span className="bg-cyan-100 text-[#0083B0] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                {card.badgeText}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{card.subtitle}</div>
                          <div className="text-2xl font-[900] text-slate-900 pt-1">{card.price}</div>
                        </div>

                        {/* Feature Bullets */}
                        <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                          {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#0083B0] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer Button */}
                      <div className="pt-6 mt-6 border-t border-slate-100 text-center space-y-2">
                        <a
                          href="#quote-form"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all shadow-sm ${card.isFeatured
                              ? 'bg-[#0083B0] hover:bg-[#006095] text-white shadow-md'
                              : 'bg-[#006095] hover:bg-[#0083B0] text-white'
                            }`}
                        >
                          Hire Now
                        </a>
                        <div className="text-[11px] text-slate-500 font-medium pt-1">
                          We sign NDA for all our projects.
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Center Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 pt-8">
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
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: Comparison Table
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Laravel Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005C8A] text-white font-bold text-sm sm:text-base">
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4">Range of Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Junior Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Mid-Level Developers</th>
                    <th className="py-4 px-6 w-1/4 text-center">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Approx Cost</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$17</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$22</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0]">$29</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Years of Experience</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">1-3 Years</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">3-5 Years</td>
                    <td className="py-4 px-6 text-center">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Project Manager</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Time Zone Flexibility</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Quality Guarantee</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Working Hours</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: BRIEF ABOUT OUR LARAVEL DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Brief About Our Laravel Development Services
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Hire Our Laravel Developers To Get App and Web Development Services. Benefits of Hiring them include: Our developers will produce your Laravel project in real-time and with 100 percent correctness. Our Laravel developers have a proven history of completing all project deadlines on time with complete client satisfaction.
                </p>
                <p>
                  Experience well-structured code and construct a next-generation solution with our safe, scalable, dependable, and high-quality software development services at an accessible price. Our Laravel developers possess extraordinary communication abilities, ensuring seamless daily coordination.
                </p>
              </div>
            </div>

            {/* Right Column: Graphic Illustration Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/react_section8_illustration.jpg"
                  alt="Who Exactly Is A Laravel Developer & Why Hire Them"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-blue-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Laravel Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: WHO EXACTLY IS A LARAVEL DEVELOPER? (Screenshot 1 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Who Exactly Is A Laravel Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

            {/* Left Box with Quote & Bold Text */}
            <div className="lg:col-span-5 bg-[#F0F7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              {/* Background Wavy Subtle Pattern */}
              <svg className="absolute inset-0 w-full h-full text-cyan-200/20 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M 0 100 C 100 50, 200 150, 300 100 C 400 50, 500 150, 600 100" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 200 C 100 150, 200 250, 300 200 C 400 150, 500 250, 600 200" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 300 C 100 250, 200 350, 300 300 C 400 250, 500 350, 600 300" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="relative z-10 space-y-6">
                {/* Large Quote Icon */}
                <div className="text-[#0083B0]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-[#006095] leading-[1.2] tracking-tight">
                  Fast, Scalable And<br />
                  Simple<br />
                  Applications
                </h3>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  You can hire Laravel developer India as they have capability to work in a variety of settings, together with a feeling of confidence gained from that experience. Hire Laravel developers in UK with knowledge of how to code, including a solid grasp of front-end technologies and programming languages such as CSS, JS, HTML, and PHP. Hire Laravel Consultants with familiarity with both the best coding methods used by Laravel and those used in the industry. Our Laravel experts have a fundamental comprehension of standard design guidelines and OOP is required to develop scalable web applications. As Laravel OpenAI Integration Experts, they can also help integrate AI-powered features into modern Laravel applications.
                </p>
                <p>
                  Hire Skilled Laravel Developer to find solutions to problems with PHP and gain command over versioning systems such as GIT. Our developers are capable of working with API, RESTful, OOP, SOAP, and MVC. They have skills like management strategies such as SCRUM, AGILE, and WATERFALL, among others. Hire Laravel developers in India who have people skills and a strong knowledge of the English language. When you hire laravel developer in USA from a trusted, reputed, and credible Laravel development company like ours, you get access to the top 1% of Laravel talent with proven expertise. We also deliver Custom AI Solutions with Laravel to help businesses build smarter, scalable, and future-ready web applications.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 8: OUR PREMIUM SERVICES (Screenshot 1 Match)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SECTION 9: MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (Screenshot 2 Match)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            {/* Section Header */}
            <div className="text-center max-w-6xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                Meet Firevy.co's Exceptional Team of Seasoned Experts
              </h2>
            </div>

            {/* Filter Pills Bar Capsule */}
            <div className="flex justify-center w-full overflow-x-auto py-1">
              <div className="bg-[#DDECF5] p-1 rounded-full inline-flex items-center justify-center gap-1 md:gap-1.5 lg:gap-2 max-w-6xl border border-cyan-100/60 shadow-2xs">
                {[
                  'Trending',
                  'Product Development',
                  'Saas',
                  'AI/ML',
                  'Data Engineering',
                  'Design',
                  'Marketing',
                  'IoT App Dev',
                  'Blockchain Dev'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setExpertActiveCategory(cat);
                      setExpertCarouselIndex(0);
                    }}
                    className={`px-3.5 py-1.5 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${expertActiveCategory === cat
                        ? 'bg-[#006095] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 font-semibold'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
              {[
                {
                  id: 1,
                  category: 'Trending',
                  title: 'Mobile Application Team',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                  composition: ['1 Tech Lead', '3 Senior Mobile Devs', '1 UI/UX Specialist', '1 QA Engineer'],
                  summary: 'High-performing mobile development squad building native and cross-platform mobile apps.'
                },
                {
                  id: 2,
                  category: 'Product Development',
                  title: 'Saas Product Dev. Team',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                  composition: ['1 Product Manager', '4 Full-Stack Engineers', '1 DevOps Specialist', '1 UI/UX Lead'],
                  summary: 'Specialized SaaS product squad engineering cloud-native microservices.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Microsoft Dev. Team',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                  composition: ['1 Solution Architect', '3 Senior .NET Engineers', '1 Power Platform Lead'],
                  summary: 'Certified Microsoft developers delivering robust .NET Core APIs and Azure infrastructure.'
                }
              ].map((team) => {
                const currentTab = expertTabs[team.id] || 'tech';
                return (
                  <div
                    key={team.id}
                    className="bg-[#EBF4FA] rounded-2xl p-6 border border-cyan-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative">
                        <img src={team.image} alt={team.title} className="w-full h-full object-cover" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">{team.title}</h3>

                      {/* Pill Capsule sub-tabs */}
                      <div className="bg-white rounded-full p-1 inline-flex items-center space-x-1 mb-4 shadow-2xs border border-slate-100">
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'tech' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${currentTab === 'tech' ? 'bg-[#006095] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                            }`}
                        >
                          Technologies
                        </button>
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'composition' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${currentTab === 'composition' ? 'bg-[#006095] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                            }`}
                        >
                          Team Composition
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 min-h-[70px]">
                        {currentTab === 'tech'
                          ? team.techs.map((t, idx) => (
                            <span key={idx} className="bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                              {t}
                            </span>
                          ))
                          : team.composition.map((c, idx) => (
                            <span key={idx} className="bg-white text-[#006095] text-xs font-bold px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                              • {c}
                            </span>
                          ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedTeamModal(team)}
                      className="bg-[#006095] hover:bg-[#0083B0] text-white px-4 py-2.5 rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-all shadow-xs cursor-pointer w-fit"
                    >
                      <span>Get Details</span>
                      <span>→</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Carousel Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <button className="text-slate-400 hover:text-slate-700 transition-colors text-2xl font-light px-2 cursor-pointer">
                ←
              </button>
              <button className="text-slate-800 hover:text-black transition-colors text-2xl font-light px-2 cursor-pointer">
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8A: LEVERAGE THE EXPERTISE OF SAPPHIRE DEDICATED DEVELOPERS (Screenshots 1 & 2)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Leverage The Expertise of Firevy.co Dedicated Developers
              </h2>
            </div>

            {/* Filter Pills Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 border border-cyan-100/60 shadow-xs">
                {['In Demand', 'Mobile', 'Web', 'AI'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setLeverageTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${(leverageTab === tab || (leverageTab === 0 && tab === 'In Demand'))
                        ? 'bg-[#006095] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 font-semibold'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Highlight Banner (Pink/Rose card) */}
            <div className="bg-[#FCE4EC] rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-1.5">
                <span>In Demand</span>
                <span className="text-base">↗</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.
              </p>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {[
                {
                  title: 'AI Developers',
                  desc: "Employ our team's best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!"
                },
                {
                  title: 'UI/UX Designers',
                  desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!'
                },
                {
                  title: 'API Developers',
                  desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.'
                },
                {
                  title: 'Next JS Developers',
                  desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
                },
                {
                  title: 'Machine Learning Developers',
                  desc: "Employ our team's best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!"
                },
                {
                  title: 'Data Scientists',
                  desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F7FC] rounded-2xl p-6 sm:p-7 border border-blue-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-1">
                      <span>{item.title}</span>
                      <span className="text-base text-slate-700">↗</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <div className="text-center pt-4">
              <button className="bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer">
                View All Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8B: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (Screenshot 3)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Title Header */}
            <div className="text-center space-y-2 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Industry-Focused Insights To Elevate Your Business
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Trending Industries that Use Dedicated Developers
              </p>
            </div>

            {/* Industry Filter Pills Container (Rounded Rectangular Box with 2 Rows) */}
            <div className="flex justify-center">
              <div className="bg-[#EBF4FA] p-5 rounded-2xl max-w-5xl w-full border border-cyan-100/70 shadow-2xs space-y-3">
                {/* Row 1: 7 Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    'Automotive',
                    'Ecommerce',
                    'Education',
                    'Entertainment',
                    'Finance',
                    'Food and Beverage',
                    'Healthcare'
                  ].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${activeInsightIndustry === ind
                          ? 'bg-[#006095] text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 font-semibold hover:text-slate-900 border border-slate-100 shadow-2xs'
                        }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>

                {/* Row 2: 4 Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    'Information Technology',
                    'Logistics',
                    'Travel & Tourism',
                    'Utility Services'
                  ].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${activeInsightIndustry === ind
                          ? 'bg-[#006095] text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 font-semibold hover:text-slate-900 border border-slate-100 shadow-2xs'
                        }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Industry Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                {
                  title: 'Vehicle Data Logging Software',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
                },
                {
                  title: 'Car Wash App Development',
                  image: '/images/car_wash_app_mockup.jpg'
                },
                {
                  title: 'Taxi Booking-App Development',
                  image: '/images/taxi_booking_app_mockup.jpg'
                }
              ].map((card, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="bg-[#EBF4FA] rounded-2xl p-4 border border-cyan-100/60 shadow-xs hover:shadow-md transition-all overflow-hidden h-64 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center font-bold text-slate-900 text-sm md:text-base">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <div className="text-center pt-4">
              <button className="bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-7 py-2.5 rounded-lg text-xs sm:text-sm transition-all shadow-xs cursor-pointer">
                View All Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8C: ABOUT US (8 STATS CARDS) (Screenshot 4)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#006095] text-white font-sans border-b border-cyan-800">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-[900] text-white tracking-tight leading-tight">
                About Us
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-cyan-100 font-medium">
                Firevy.co delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
              </p>
            </div>

            {/* 8 Metric Cards Grid (2 rows of 4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  number: '23+',
                  label: 'Years of Experience',
                  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '320+',
                  label: '5-Star Clutch Reviews',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '20+',
                  label: 'Fortunes 500 Companies',
                  image: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '200+',
                  label: 'IT Professional',
                  image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '95%',
                  label: 'Client Retention',
                  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '18+',
                  label: 'Industry Served',
                  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '2800+',
                  label: 'Satisfied Clients',
                  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '1500+',
                  label: 'Completed Projects',
                  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80'
                }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white text-slate-900 rounded-2xl p-4 shadow-md flex items-center space-x-4 border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#006095] leading-none mb-1">
                      {stat.number}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8D: SECTORS THRIVING (Screenshot 1)
          ========================================================================= */}
      <SectorsThrivingSection />

      {/* =========================================================================
          SECTION 8E: EMPLOY THE ADVANCED PROFICIENCY OF SAPPHIRE'S DEDICATED DEV TEAM (Screenshot 2)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
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

      {/* =========================================================================
          SECTION 8F: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ? (Screenshot 3)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Sapphire / Client Filter Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                >
                  Firevy.co
                </button>
                <button
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${responsibilityTab === 'client'
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
                      <CardIcon className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8G: SUCCESS STORIES & 4 BOTTOM STAT BOXES (Screenshot 4)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#EBF4FA] text-slate-900 font-sans border-b border-slate-200/60">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Success Stories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
              </p>
            </div>

            {/* 3 Portfolio Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Safety Improvement Application Development',
                  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
                },
                {
                  title: 'Motivational Speaker Website',
                  image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80'
                },
                {
                  title: 'Performance Appraisal System Website',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
                }
              ].map((card, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs hover:shadow-md transition-all overflow-hidden h-64 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center font-bold text-slate-900 text-sm md:text-base">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <div className="text-center pt-2">
              <button className="bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-7 py-2.5 rounded-lg text-xs sm:text-sm transition-all shadow-xs cursor-pointer">
                View All Portfolio
              </button>
            </div>

            {/* 4 Bottom Colored Stat Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              <div className="bg-[#E8DDFB] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-2xs h-36">
                <h4 className="text-3xl font-black text-slate-900 mb-1">23+</h4>
                <p className="text-xs font-bold text-slate-700">Years Experience</p>
              </div>

              <div className="bg-[#D1F2D9] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-2xs h-36">
                <h4 className="text-3xl font-black text-slate-900 mb-1">320+</h4>
                <p className="text-xs font-bold text-slate-700">5-Star Clutch Reviews</p>
              </div>

              <div className="bg-[#FFD7D7] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-2xs h-36">
                <h4 className="text-3xl font-black text-slate-900 mb-1">2800+</h4>
                <p className="text-xs font-bold text-slate-700">Satisfied Clients</p>
              </div>

              <div className="bg-[#006095] text-white rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-xs h-36">
                <h4 className="text-base font-bold text-white">Want to start Projects</h4>
                <button className="bg-white text-[#006095] font-bold px-5 py-2 rounded-lg text-xs hover:bg-slate-50 transition-all cursor-pointer">
                  Get Estimation
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 9: TECH STACK PROFICIENT GRID
          ============================================================ */}
      <TechStackProficientGrid />

      {/* =========================================================================
          SECTION 9B: THE EXPERTISE OF OUR LARAVEL DEVELOPERS SERVICES (Screenshot Match)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our Laravel Developers Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                We have a pool of dedicated Laravel developers available for hire. Take a look at the expertise of our developers:
              </p>
            </div>

            {/* 6 White Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom Laravel Development',
                  desc: 'Your concept may be brought to life by the power of Laravel, which can be unlocked by our devoted Laravel developers, who are up to speed on the fundamentals and the most recent advancements in the CMS.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Code2
                },
                {
                  title: 'Laravel API Development',
                  desc: 'Hire our Laravel developers to construct and modify web portals and design bespoke APIs for companies of any size.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Server
                },
                {
                  title: 'Enterprise Laravel Solutions',
                  desc: 'You can now hire Laravel developers in UAE or anywhere else in the world to create scalable apps for large-scale businesses.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: Building2
                },
                {
                  title: 'Laravel Module Development',
                  desc: 'Are you looking for efficient solutions for the creation of modules? Hire Laravel developer in Australia to construct it for you to maximize your investment return.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Layers
                },
                {
                  title: 'Laravel Management & Maintenance',
                  desc: 'Employing our remote Laravel developers will ensure that your web applications are handled and maintained according to industry standards.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Sliders
                },
                {
                  title: 'Laravel Integration & Upgradation',
                  desc: 'Are you interested in updating the app you already have? We combine the most recent technologies, originating from various platforms such as Python, .Net, etc.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: Cpu
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100/90 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                        <CardIcon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 10: PROUD AWARDS BANNER & BENEFITS OF HIRING DEDICATED DEVELOPERS (Screenshot 1 Match)
          ============================================================ */}
      <ProudAwardsBanner />

      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and external talent merge their expertise.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#F0F7FC] rounded-2xl p-7 border border-blue-100/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 text-[#005F96] flex items-center justify-center shrink-0">
                        <CardIcon className="w-8 h-8 stroke-[1.6]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 11: HIRE DEVELOPER 4 STEPS
          ============================================================ */}
      <HireDeveloper4Steps
        title="Hire Laravel Developer In 4 Easy Steps"
        subtitle="Laravel Developer offers a number of advantages over another platform. Some of them are:"
      />

      {/* ============================================================
          SECTION 12: VIDEO TESTIMONIALS & ENGAGEMENT MODELS
          ============================================================ */}
      <VideoTestimonialsStory />
      <EngagementModelsSection />

      {/* ============================================================
          SECTION 13: SUCCESS MATRIX & WORK PROCESS GRID
          ============================================================ */}
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />
      <WorkProcessGrid />
      <ClientReviewsDarkSection />

      {/* ============================================================
          SECTION 14: DIGITAL TRANSFORMATION CASE STUDIES
          ============================================================ */}
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          SECTION 15: SAPPHIRE FAQ SECTION & FOOTER SECTIONS
          ============================================================ */}
      <SapphireFaqSection faqs={faqs} />
      <SocialMediaSection />
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireLaravelDevelopersService;
