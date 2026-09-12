import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
  Headphones,
  Users,
  Layers,
  Star,
  ExternalLink,
  Code2,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Globe,
  Database,
  Terminal,
  Smartphone,
  RefreshCw,
  LayoutGrid,
  FileCode2,
  CheckCircle,
  Laptop
} from 'lucide-react';

export const ReactJsDevelopmentService = () => {
  const heroMetrics = [
    { number: '80+', label: 'Web Developers' },
    { number: '20+', label: 'Fortunes 500 Companies' },
    { number: '600+', label: 'Project Completed in Web Technology' },
    { number: '320+', label: '5-Star Clutch Reviews' }
  ];

  const reactServices = [
    {
      id: 1,
      title: 'Custom React Web App Development',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Engineering custom, scalable, and responsive React web applications engineered for speed, enterprise security, and intuitive user experiences.',
      bullets: [
        'Single Page Applications (SPAs)',
        'Enterprise Web Portals',
        'Custom React Component Kits',
        'Micro-Frontend Architecture'
      ]
    },
    {
      id: 2,
      title: 'Next.js SSR & Server Components',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Harness the power of Next.js for Server-Side Rendering (SSR), Static Site Generation (SSG), and React Server Components for peak Google SEO ranking.',
      bullets: [
        'Next.js 14/15 App Router',
        'Server-Side Rendering (SSR)',
        'Core Web Vitals Optimization',
        'Edge Middleware & Caching'
      ]
    },
    {
      id: 3,
      title: 'React Native Cross-Platform Apps',
      icon: <Smartphone className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build native iOS and Android mobile apps from a single shared React codebase with near-native performance and 40% faster time-to-market.',
      bullets: [
        'iOS & Android Cross-Platform',
        'Native Hardware API Access',
        'Offline Synchronization',
        'App Store & Play Store Release'
      ]
    },
    {
      id: 4,
      title: 'React Component Library & Design Systems',
      icon: <LayoutGrid className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Develop standardized, modular, and accessible UI component libraries utilizing Tailwind CSS, Storybook, Shadcn UI, and Radix UI primitives.',
      bullets: [
        'Storybook Documentation',
        'Tailwind CSS & Shadcn UI',
        'WCAG Accessibility (a11y)',
        'Figma to React Pixel-Perfect UI'
      ]
    },
    {
      id: 5,
      title: 'State Management & Real-Time APIs',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Architect predictable global state architectures using Redux Toolkit, Zustand, TanStack Query (React Query), and real-time WebSockets.',
      bullets: [
        'Redux Toolkit & Zustand',
        'TanStack React Query',
        'WebSockets & Server-Sent Events',
        'Optimistic UI State Updates'
      ]
    },
    {
      id: 6,
      title: 'Legacy Web App Migration to React',
      icon: <RefreshCw className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Seamlessly modernize legacy jQuery, AngularJS, PHP, or older frontend stacks to a modern React / TypeScript architecture with zero data loss.',
      bullets: [
        'Legacy Architecture Audit',
        'Incremental Strangler Migration',
        'TypeScript Refactoring',
        'Performance & Security Upgrade'
      ]
    },
    {
      id: 7,
      title: 'React API Integration & Microservices',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Connect your React frontend with RESTful and GraphQL backend microservices built on Node.js, Python, Java Spring Boot, or .NET Core.',
      bullets: [
        'REST & GraphQL Client Pipelines',
        'OAuth2, JWT & SSO Integration',
        'High-Throughput API Gateways',
        'Third-Party Payment Gateways'
      ]
    },
    {
      id: 8,
      title: 'React Maintenance & 24/7 SLA Support',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Comprehensive 24/7 production monitoring, automated security patch rollouts, package dependency updates, and guaranteed SLA responses.',
      bullets: [
        '24/7 SLA Uptime Guarantee',
        'Performance Auditing & Profiling',
        'Security Vulnerability Patches',
        'Dedicated On-Demand Squads'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Virtual DOM for Blazing Speed',
      desc: 'React’s Virtual DOM minimizes direct browser DOM manipulation, ensuring lightning-fast UI updates and seamless high-throughput rendering.',
      icon: <Zap className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Component Reusability & Modularity',
      desc: 'Encapsulated component architecture allows developers to build self-contained units that can be reused across pages and enterprise platforms.',
      icon: <Layers className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Unidirectional Data Flow',
      desc: 'One-way data binding guarantees predictable code behavior, simplified debugging, and easier scaling across large engineering organizations.',
      icon: <FileCode2 className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'SEO-Friendly with SSR / Next.js',
      desc: 'Eliminate single-page app indexing limitations with Next.js server-side rendering and static pre-rendering for top Google organic rankings.',
      icon: <Globe className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Backed by Meta & Vast Ecosystem',
      desc: 'Maintained by Meta (Facebook) with millions of developers, extensive open-source npm packages, and guaranteed long-term enterprise adoption.',
      icon: <Cpu className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Easy Cross-Platform Expansion',
      desc: 'Shared logic and component abstractions allow teams to easily transition or expand web applications into iOS and Android apps with React Native.',
      icon: <Smartphone className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Top 1% Vetted Senior React Developers',
      desc: 'Access certified React & TypeScript engineers with an average of 6+ years building mission-critical enterprise applications.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Source Code & IP Ownership',
      desc: 'You retain complete ownership of all intellectual property, source code, repositories, and architectural documentation.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Security',
      desc: 'We enforce enterprise-grade data security with strict NDAs, OWASP Top-10 compliance, and SOC-2 / GDPR security standards.',
      icon: <CheckCircle2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Transparent Bi-Weekly Agile Sprints',
      desc: 'Collaborate directly with our engineering team via Slack, Teams, and Jira with bi-weekly sprint demos and transparent reporting.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Choose between Dedicated Full-Time Teams, Time & Material hourly contracts, or Fixed Milestone budgets tailored to your scale.',
      icon: <DollarSign className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Guaranteed 99.9% On-Time Delivery',
      desc: 'Our battle-tested blueprints, automated CI/CD pipelines, and rigorous QA ensure on-budget, on-time project launches.',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery & Scoping',
      desc: 'We analyze your business goals, user personas, third-party integrations, and technical requirements to create an architectural roadmap.'
    },
    {
      step: '02',
      title: 'UI/UX & Design System',
      desc: 'Our design squad crafts intuitive, high-fidelity Figma prototypes, interactive wireframes, and design system tokens.'
    },
    {
      step: '03',
      title: 'Agile React Sprints',
      desc: 'Senior developers build modular React components, clean TypeScript services, global state, and secure API integrations in 2-week sprints.'
    },
    {
      step: '04',
      title: 'Automated QA & Testing',
      desc: 'Comprehensive unit tests (Jest / React Testing Library), end-to-end testing (Cypress / Playwright), and security vulnerability audits.'
    },
    {
      step: '05',
      title: 'CI/CD Cloud Deployment',
      desc: 'Automated bundle optimization, code splitting, containerization with Docker, and zero-downtime deployment to AWS, Vercel, or Azure.'
    },
    {
      step: '06',
      title: '24/7 SLA & Maintenance',
      desc: 'Continuous real-time error tracking, security updates, version upgrades, and dedicated engineering support to ensure peak performance.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Enterprise FinTech Trading & Analytics Dashboard',
      category: 'FinTech Platform',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'AI-Powered Smart Traffic & Video Analytics Portal',
      category: 'Computer Vision & React',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Real Estate Interactive Map & Property Explorer',
      category: 'PropTech Web App',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'On-Demand Talent Recruitment SaaS Platform',
      category: 'HR Tech Solution',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Car Rental & Fleet Mobility Booking Portal',
      category: 'Automotive Web App',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Smart Travel Itinerary & Flight Booking System',
      category: 'Travel Tech',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    }
  ];

  const reactFaqList = [
    {
      id: 1,
      question: '1. Why should I choose React JS for web application development?',
      answer: 'React JS is the world’s most popular front-end library backed by Meta. Its Virtual DOM, component-based modularity, vast open-source ecosystem, and seamless support for Server-Side Rendering (via Next.js) make it the prime choice for building high-performance, scalable web apps.'
    },
    {
      id: 2,
      question: '2. What is the difference between React JS and React Native?',
      answer: 'React JS is designed for building dynamic, responsive web applications that run in web browsers. React Native compiles React code into native iOS and Android mobile applications using native platform UI components and device APIs.'
    },
    {
      id: 3,
      question: '3. Can React applications be optimized for SEO?',
      answer: 'Yes! By leveraging frameworks like Next.js for Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR), React apps achieve instant First Contentful Paint and full search engine indexing.'
    },
    {
      id: 4,
      question: '4. How do you handle state management in complex React apps?',
      answer: 'We tailor the state management approach to your project needs—utilizing Redux Toolkit for complex global state, Zustand for lightweight modularity, TanStack React Query for asynchronous server state and caching, or React Context for localized state.'
    },
    {
      id: 5,
      question: '5. Can you migrate our existing web application to React JS?',
      answer: 'Yes. We specialize in legacy application modernization (from AngularJS, jQuery, PHP, or older monolithic systems). We use proven incremental migration techniques like the Strangler Fig pattern to ensure continuous business operations with zero downtime.'
    },
    {
      id: 6,
      question: '6. How much does custom React JS web development cost?',
      answer: 'Development cost depends on the scope, UI/UX complexity, API integrations, and backend requirements. We offer transparent Fixed-Price milestone contracts as well as flexible Dedicated Developer engagement models tailored to your budget.'
    },
    {
      id: 7,
      question: '7. What post-launch maintenance and SLA support do you provide?',
      answer: 'We provide 24/7/365 infrastructure monitoring, automated security patch rollouts, package upgrades, performance tuning, and guaranteed < 15-minute response times for critical production incidents.'
    },
    {
      id: 8,
      question: '8. Why choose Firevy / Sapphire Solutions as your React JS development partner?',
      answer: 'With 23+ years of IT excellence, 320+ 5-star Clutch reviews, 1500+ successful projects, top 1% vetted React developers, 100% source code ownership, strict NDA agreements, and guaranteed timezone alignment, we ensure world-class software delivery.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top React JS Development Company | ReactJS Web Development Services"
        description="Sapphire is a top React JS development company. We create robust, high performance, scalable and powerful ReactJS web applications and enterprise portals."
        canonical="/services/react"
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-0 top-1/4 z-40 flex flex-col items-end gap-1.5 pointer-events-auto">
        <a
          href="tel:+15551234567"
          title="Call Us Directly"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919429709662"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Floating Brand Bubble */}
      <div className="fixed right-4 bottom-5 z-40">
        <Link
          to="/contact"
          title={`Contact ${BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name}`}
          className="w-13 h-13 rounded-full bg-[#0086C6] hover:bg-[#0070A6] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <span className="font-[900] text-3xl font-serif select-none leading-none">S</span>
        </Link>
      </div>

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Screenshot)
          ========================================================================= */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, Metrics & 2 CTA Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[900] text-[#0B0F19] tracking-tight leading-[1.12] font-sans">
                Top React JS Development Company
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal font-sans max-w-2xl">
                We create robust, high performance, scalable and powerful ReactJS framework for React js web development and react js application development. As a reputable AI-powered ReactJS development company, we offer a wide range of reliable ReactJS development services and solutions at affordable prices.
              </p>

              {/* 4 Counter Metrics (80+, 20+, 600+, 320+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[26px] sm:text-[30px] font-[900] text-[#005F96] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[11.5px] sm:text-[12.5px] font-[600] text-[#475569] leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 CTA Buttons (Discuss Your Project & Hire Reactjs Developers) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] bg-[#00456E] hover:bg-[#003454] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Hire Reactjs Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Laptop Mockup Displaying Analytics Dashboard */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                {/* Mockup Frame */}
                <div className="bg-slate-900 p-2.5 sm:p-3.5 rounded-[18px] shadow-[0_20px_50px_rgba(0,95,150,0.22)] border border-slate-700">
                  <div className="bg-white rounded-[12px] overflow-hidden border border-slate-200">
                    {/* Mock Browser Header */}
                    <div className="bg-slate-100 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">React Dashboard v18.3</div>
                      <div className="w-3" />
                    </div>

                    {/* Dashboard Visual UI */}
                    <div className="p-4 space-y-3 text-left">
                      {/* Top Metric Pills */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-[#EBF5FB] p-2 rounded-lg border border-blue-100 text-center">
                          <div className="text-[10px] text-slate-500 font-medium">Active Users</div>
                          <div className="text-[15px] font-[800] text-[#005F96]">48.5K</div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100 text-center">
                          <div className="text-[10px] text-slate-500 font-medium">Conversion</div>
                          <div className="text-[15px] font-[800] text-emerald-600">+24.8%</div>
                        </div>
                        <div className="bg-amber-50 p-2 rounded-lg border border-amber-100 text-center">
                          <div className="text-[10px] text-slate-500 font-medium">Render Speed</div>
                          <div className="text-[15px] font-[800] text-amber-600">0.12s</div>
                        </div>
                      </div>

                      {/* Mock Chart / Graph Bar */}
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-2">
                        <div className="flex justify-between items-center text-[11px] font-bold text-slate-700">
                          <span>Component Performance Throughput</span>
                          <span className="text-emerald-600 font-mono">100% Total</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden flex">
                          <div className="bg-[#005F96] h-full w-[45%]" />
                          <div className="bg-[#38BDF8] h-full w-[30%]" />
                          <div className="bg-emerald-500 h-full w-[25%]" />
                        </div>
                      </div>

                      {/* Mock Table Rows */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between items-center text-[11px] font-semibold text-slate-600 pb-1 border-b border-slate-100">
                          <span>Module</span>
                          <span>Framework</span>
                          <span>Status</span>
                        </div>
                        <div className="flex justify-between items-center text-[10.5px] text-slate-700">
                          <span>Virtual DOM Hydration</span>
                          <span className="text-[#005F96] font-semibold">React 18</span>
                          <span className="text-emerald-600 font-bold">● Active</span>
                        </div>
                        <div className="flex justify-between items-center text-[10.5px] text-slate-700">
                          <span>Next.js Server Actions</span>
                          <span className="text-[#005F96] font-semibold">Next.js 14</span>
                          <span className="text-emerald-600 font-bold">● Active</span>
                        </div>
                        <div className="flex justify-between items-center text-[10.5px] text-slate-700">
                          <span>TanStack Query Caching</span>
                          <span className="text-[#005F96] font-semibold">Zustand</span>
                          <span className="text-emerald-600 font-bold">● Synced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="w-full h-3 bg-slate-400 rounded-b-xl mx-auto opacity-70 shadow-md" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BRAND RECOGNITION MARQUEE BANNER
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. LEADING REACT JS DEVELOPMENT COMPANY (Matching Screenshot Lower Section)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Visual: Code Window / React Architecture */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F172A] rounded-[20px] p-6 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-cyan-400 font-mono">ReactComponent.tsx</span>
                </div>
                <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed text-slate-300 space-y-1">
                  <p className="text-purple-400">import <span className="text-white">&#123; useState, useEffect &#125;</span> from <span className="text-amber-300">'react'</span>;</p>
                  <p className="text-purple-400">import <span className="text-white">&#123; useQuery &#125;</span> from <span className="text-amber-300">'@tanstack/react-query'</span>;</p>
                  <p className="pt-2 text-blue-400">export const <span className="text-yellow-300">EnterprisePortal</span> = () =&gt; &#123;</p>
                  <p className="pl-4 text-slate-400">// High throughput reactive rendering</p>
                  <p className="pl-4 text-white">const &#123; data, isLoading &#125; = useQuery(&#123; ... &#125;);</p>
                  <p className="pl-4 text-purple-400">return (</p>
                  <p className="pl-8 text-cyan-300">&lt;<span className="text-rose-400">Dashboard</span> data=&#123;data&#125; /&gt;</p>
                  <p className="pl-4 text-purple-400">);</p>
                  <p className="text-blue-400">&#125;;</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
                Leading React Js Development Company With High Rating
              </h2>

              <p className="text-[14.5px] text-[#475569] leading-relaxed font-normal">
                Affordable AI ReactJS development services from Sapphire, a well-known global company, enable developers to create complex, scalable, and dynamic web applications with optimal efficiency. Our certified React engineers construct enterprise-grade single page applications, SaaS platforms, and customer portals tailored to your specific business requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Virtual DOM High-Speed Execution</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Next.js SSR & Server Actions</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>TypeScript-Powered Code Reliability</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>100% Source Code & IP Ownership</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Request Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE REACT JS DEVELOPMENT SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our React JS Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              From dynamic single-page web applications to enterprise cloud SaaS solutions, we offer full-spectrum React JS development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reactServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-[16.5px] font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#475569] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2 text-[12px] font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#005F96] shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. KEY BENEFITS OF REACT (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose React JS for Your Enterprise?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              React delivers unparalleled rendering performance, rich ecosystem support, and exceptional developer velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR AGILE WORK PROCESS (Step-by-Step)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-white tracking-tight">
              Our React JS Development Lifecycle
            </h2>
            <p className="text-[14.5px] text-slate-300 leading-relaxed">
              Agile 2-week sprint workflows with continuous integration, automated testing, and transparent progress demos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workProcess.map((proc, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-[16px] p-6 border border-slate-700/80 space-y-3 hover:border-sky-500/50 transition-colors"
              >
                <div className="text-[26px] font-[900] text-[#38BDF8]">
                  {proc.step}
                </div>
                <h3 className="text-[18px] font-[800] text-white">
                  {proc.title}
                </h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. WHY CHOOSE US (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Firevy for React JS Development?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              A trusted global technology partner with proven technical excellence and deep full-stack proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. OUR RECENT PROJECTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent React JS Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore custom React JS applications and enterprise web solutions successfully engineered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {recentProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#006B8F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="text-[16px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-4">
                    {proj.title}
                  </h4>
                  <Link
                    to={proj.link}
                    className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          10. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (Signature 2-Column Sapphire Section)
          ========================================================================= */}
      <SapphireFaqSection faqList={reactFaqList} />

      {/* =========================================================================
          12. WE HAVE BEEN FEATURED IN (18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          13. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} React JS Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire React JS Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ReactJsDevelopmentService;
