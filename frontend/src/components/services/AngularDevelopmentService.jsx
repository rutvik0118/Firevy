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
  CheckCircle
} from 'lucide-react';

export const AngularDevelopmentService = () => {
  const [activeTab, setActiveTab] = useState(0);

  const heroMetrics = [
    { number: '23+', label: 'Years of Experience' },
    { number: '1500+', label: 'Successful Projects' },
    { number: '320+', label: '5-Star Clutch Reviews' },
    { number: '95%', label: 'Client Retention Rate' }
  ];

  const angularServices = [
    {
      id: 1,
      title: 'Custom Angular Web App Development',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'End-to-end custom Angular web applications engineered for speed, high scalability, and seamless user experiences across devices.',
      bullets: [
        'Single Page Applications (SPAs)',
        'Enterprise Web Portals',
        'Custom Angular UI Components',
        'Micro-Frontend Architecture'
      ]
    },
    {
      id: 2,
      title: 'AngularJS to Angular 18+ Migration',
      icon: <RefreshCw className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Seamless modernization from legacy AngularJS (1.x) or older Angular versions to the latest Angular 18+ with zero downtime and data integrity.',
      bullets: [
        'Legacy Codebase Audit',
        'Incremental ngUpgrade Migration',
        'TypeScript Refactoring',
        'Performance & Security Boosting'
      ]
    },
    {
      id: 3,
      title: 'Enterprise Single Page Applications (SPA)',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'High-throughput, reactive single page applications utilizing RxJS observables, NgRx state management, and modern Angular Signals.',
      bullets: [
        'NgRx & Signals State Management',
        'Real-Time WebSocket Streams',
        'Dynamic Data Visualization',
        'Role-Based Secure Access'
      ]
    },
    {
      id: 4,
      title: 'Angular Universal & SSR Solutions',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Server-Side Rendering (SSR) and pre-rendering using Angular Universal for ultra-fast first contentful paint and superior Google SEO rankings.',
      bullets: [
        'Server-Side Rendering (SSR)',
        'Search Engine Optimization (SEO)',
        'Core Web Vitals Optimization',
        'Edge Caching & CDN Rollouts'
      ]
    },
    {
      id: 5,
      title: 'Cross-Platform Mobile Apps (Ionic & Angular)',
      icon: <Smartphone className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Leverage Angular with Ionic and Capacitor to build native-like, performant cross-platform mobile apps for iOS and Android from a single codebase.',
      bullets: [
        'Ionic Framework & Capacitor',
        'Native Hardware API Integrations',
        'Offline Synchronization',
        'App Store & Play Store Deployment'
      ]
    },
    {
      id: 6,
      title: 'Angular API Integration & Microservices',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Connect your Angular frontend to high-speed RESTful and GraphQL backend microservices built on Node.js, .NET Core, Java, or Python.',
      bullets: [
        'REST & GraphQL Client Architecture',
        'JWT & OAuth2 Secure Authentication',
        'Third-Party API Gateways',
        'Fault-Tolerant Microservices'
      ]
    },
    {
      id: 7,
      title: 'Custom UI/UX & Angular Material',
      icon: <LayoutGrid className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Craft pixel-perfect, accessible, and responsive user interfaces utilizing Angular Material, Tailwind CSS, PrimeNG, and custom Figma designs.',
      bullets: [
        'Angular Material & PrimeNG',
        'Tailwind CSS & SCSS Architecture',
        'WCAG Accessibility Compliance',
        'Custom Design System Kits'
      ]
    },
    {
      id: 8,
      title: 'Angular Maintenance & 24/7 SLA Support',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Continuous infrastructure monitoring, automated security patches, version upgrades, and dedicated SLA support to ensure 99.99% uptime.',
      bullets: [
        '24/7 Proactive Monitoring',
        'Performance Profiling & Tuning',
        'Security Vulnerability Patches',
        'Dedicated On-Demand Engineers'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Two-Way Data Binding',
      desc: 'Automatic synchronization between model and view layers eliminates tedious DOM manipulation code and ensures real-time UI updates.',
      icon: <Zap className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Component-Based Architecture',
      desc: 'Highly modular, reusable, and testable components enable clean codebase maintenance, seamless scaling, and faster agile development cycles.',
      icon: <Layers className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'TypeScript-Powered Safety',
      desc: 'Static typing, advanced autocompletion, and compile-time error detection ensure enterprise-grade reliability and drastically reduce production bugs.',
      icon: <FileCode2 className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Hierarchical Dependency Injection',
      desc: 'Built-in IoC and modular DI services increase code reusability, testability, and decoupling across complex enterprise software architectures.',
      icon: <Cpu className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Google Backing & LTS Support',
      desc: 'Developed and backed by Google with predictable 6-month release cadences, extensive documentation, and dedicated enterprise Long-Term Support (LTS).',
      icon: <Globe className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Built-in Enterprise Security',
      desc: 'Out-of-the-box DOM sanitization, Cross-Site Scripting (XSS) prevention, and CSRF token management safeguard sensitive enterprise data.',
      icon: <ShieldCheck className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Top 1% Vetted Angular Experts',
      desc: 'Access senior Angular architects and certified TypeScript developers with an average of 6+ years building mission-critical enterprise platforms.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Code & IP Ownership',
      desc: 'You receive complete source code ownership, intellectual property rights, and comprehensive architectural documentation from day one.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Protection',
      desc: 'We sign comprehensive Non-Disclosure Agreements (NDA) and comply with SOC-2, GDPR, and HIPAA data security guidelines.',
      icon: <CheckCircle2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Transparent Agile Sprints',
      desc: 'Collaborate directly with our engineering team via Slack, Teams, and Jira with bi-weekly sprint demos and real-time project visibility.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Choose between Dedicated Full-Time Teams, Time & Material hourly contracts, or Fixed Milestone budgets tailored to your scale.',
      icon: <DollarSign className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Guaranteed 99.9% On-Time Delivery',
      desc: 'Our proven engineering blueprints, automated CI/CD pipelines, and rigorous QA ensure on-budget, on-time project launches.',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery & Scoping',
      desc: 'We analyze your business objectives, user workflows, system integrations, and technical requirements to create an architectural blueprint.'
    },
    {
      step: '02',
      title: 'UI/UX Prototyping',
      desc: 'Our designers craft intuitive, high-fidelity Figma wireframes, interactive prototypes, and design system components compliant with WCAG.'
    },
    {
      step: '03',
      title: 'Agile Angular Sprints',
      desc: 'Senior developers engineer modular Angular components, clean TypeScript services, NgRx/Signals state, and API integration in 2-week sprints.'
    },
    {
      step: '04',
      title: 'QA & Automated Testing',
      desc: 'Comprehensive unit tests (Jasmine/Karma), end-to-end testing (Cypress/Playwright), vulnerability scans, and Core Web Vitals profiling.'
    },
    {
      step: '05',
      title: 'CI/CD Cloud Deployment',
      desc: 'Automated build optimization, bundle splitting, containerization with Docker, and zero-downtime deployment to AWS, Azure, or GCP.'
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
      title: 'Enterprise FinTech Trading & Analytics Portal',
      category: 'FinTech & Real-Time Charts',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Healthcare Patient Management & EMR System',
      category: 'HealthTech Platform',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Smart Fleet Logistics & Real-Time Tracking',
      category: 'Logistics & IoT Telemetry',
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
      title: 'Automotive Car Sharing & Rental Portal',
      category: 'Mobility & Booking',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Smart City Public Transit Schedule Web App',
      category: 'Smart Mobility',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    }
  ];

  const angularFaqList = [
    {
      id: 1,
      question: '1. Why should I choose Angular for enterprise web application development?',
      answer: 'Angular is a full-featured framework developed by Google that provides built-in TypeScript support, hierarchical dependency injection, modular component architecture, robust CLI tools, and enterprise-grade security. It is ideally suited for large-scale, high-concurrency web applications.'
    },
    {
      id: 2,
      question: '2. Can you migrate our legacy AngularJS application to the latest Angular version?',
      answer: 'Yes! We specialize in migrating legacy AngularJS (1.x) and older Angular applications to the latest Angular 18+. We utilize incremental migration strategies (such as ngUpgrade) to ensure zero business downtime, complete data integrity, and modernized TypeScript architectures.'
    },
    {
      id: 3,
      question: '3. How do you manage application state in complex Angular projects?',
      answer: 'Depending on application scale, we leverage NgRx (Redux pattern for Angular), Akita, or modern Angular Signals with RxJS reactive streams to ensure predictable, high-performance, and maintainable state management across complex enterprise dashboards.'
    },
    {
      id: 4,
      question: '4. What is the difference between Angular and React?',
      answer: 'Angular is a comprehensive, complete framework with built-in routing, forms, HTTP clients, and dependency injection maintained by Google. React is a UI library by Meta that requires choosing third-party libraries for routing and state. Angular offers standardized architectural conventions that excel in enterprise development.'
    },
    {
      id: 5,
      question: '5. How much does custom Angular web app development cost?',
      answer: 'Development cost depends on application scope, UI/UX complexity, backend integrations, third-party APIs, and security compliance needs. We offer transparent Fixed-Price milestone projects as well as Dedicated Developer engagement models starting from flexible hourly/monthly rates.'
    },
    {
      id: 6,
      question: '6. What is the typical development timeline for an Angular project?',
      answer: 'A standard MVP or mid-scale Angular application typically takes 6 to 10 weeks. Large enterprise portals with custom microservices, complex role-based permissions, and third-party integrations usually take 3 to 6 months delivered through bi-weekly Agile sprints.'
    },
    {
      id: 7,
      question: '7. Do you provide ongoing maintenance and support after launch?',
      answer: 'Yes, we provide comprehensive SLA-backed 24/7 maintenance, performance monitoring, version upgrades, security patches, and on-demand feature development to keep your Angular web application running at peak efficiency.'
    },
    {
      id: 8,
      question: '8. Why hire Angular developers from Firevy / Sapphire Solutions?',
      answer: 'We bring 23+ years of IT leadership, 320+ 5-star Clutch reviews, 1500+ successful projects, top 1% vetted Angular engineers, 100% code ownership, strict NDA protection, and guaranteed timezone alignment with USA, UK, and global clients.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top Angular Development Company | Angular Web App Development Services"
        description="Sapphire is a premier Angular development company. We build high-speed, scalable, and secure enterprise Angular single-page applications, web portals, and cross-platform apps."
        canonical="/services/angular"
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
          1. HERO SECTION
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, Metrics & CTA Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EBF5FB] border border-[#BCE1F5] text-[#005F96] text-[12px] font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Angular Development Company</span>
              </div>

              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Trusted Angular Development Company
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Build high-performance, scalable, and secure enterprise single-page web applications (SPAs) and cross-platform solutions with our vetted senior Angular developers. From real-time dashboards to complex customer portals, we engineer future-ready web applications.
              </p>

              {/* 4 Counter Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[24px] sm:text-[28px] font-[900] text-[#0B0F19] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[11px] sm:text-[12px] font-[600] text-[#64748B] leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Talk to Consultant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] border-2 border-[#005F96] text-[#005F96] hover:bg-[#EBF5FB] font-[700] text-[14.5px] transition-all inline-flex items-center space-x-2"
                >
                  <span>Hire Angular Developers</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Angular Visual Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[20px] p-6 sm:p-8 shadow-xl relative overflow-hidden text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center p-2">
                      <img
                        src="/images/angular.png"
                        alt="Angular"
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-[800] text-slate-900 leading-tight">
                        Angular 18+ Enterprise Stack
                      </h3>
                      <p className="text-[12px] font-semibold text-[#005F96]">
                        TypeScript • RxJS • Signals • SSR
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    High Performance
                  </span>
                </div>

                <div className="space-y-3 text-[13px] text-[#475569]">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Reactive state management with modern Angular Signals & NgRx</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Server-Side Rendering (SSR) via Angular Universal for peak SEO</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero-downtime AngularJS to modern Angular migration strategies</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Strict OWASP security, DOM sanitization & XSS defenses</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-white rounded-xl p-4 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-[12px] text-slate-500 font-medium">Ready to start?</div>
                      <div className="text-[14px] font-[800] text-slate-900">Get Free Architectural Review</div>
                    </div>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-[#005F96] hover:bg-[#004A75] text-white text-[12px] font-bold rounded-[6px] transition-all"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
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
          3. COMPREHENSIVE ANGULAR SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Angular App Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We provide end-to-end Angular development services to engineer secure, high-throughput, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {angularServices.map((service) => (
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
          4. KEY BENEFITS OF ANGULAR (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Angular for Your Enterprise?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Angular delivers unmatched performance, architectural discipline, and enterprise longevity for complex web systems.
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
          5. OUR AGILE WORK PROCESS (Step-by-Step)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-white tracking-tight">
              Our Angular Development Lifecycle
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
          6. WHY CHOOSE US (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Firevy for Angular Development?
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
          7. OUR RECENT PROJECTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Angular Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore custom Angular applications and enterprise web solutions successfully engineered for our clients.
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
          8. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          9. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (Signature 2-Column Sapphire Section)
          ========================================================================= */}
      <SapphireFaqSection faqList={angularFaqList} />

      {/* =========================================================================
          11. WE HAVE BEEN FEATURED IN (18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          12. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Angular Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Angular Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AngularDevelopmentService;
