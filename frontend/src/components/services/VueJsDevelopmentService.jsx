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

export const VueJsDevelopmentService = () => {
  const heroMetrics = [
    { number: '23+', label: 'Years of Experience' },
    { number: '1500+', label: 'Successful Projects' },
    { number: '320+', label: '5-Star Clutch Reviews' },
    { number: '95%', label: 'Client Retention Rate' }
  ];

  const vueServices = [
    {
      id: 1,
      title: 'Custom Vue.js Web App Development',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Engineering ultra-fast, reactive, and responsive custom Vue 3 applications with Vite and modern Composition API architecture.',
      bullets: [
        'Single Page Applications (SPAs)',
        'Enterprise Web Portals',
        'Custom Vue UI Component Kits',
        'Micro-Frontend Integration'
      ]
    },
    {
      id: 2,
      title: 'Nuxt.js SSR & Static Site Solutions',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Leverage Nuxt 3 for high-performance Server-Side Rendering (SSR), static pre-rendering (SSG), and superior Google SEO rankings.',
      bullets: [
        'Nuxt 3 Hybrid Rendering',
        'Server-Side Rendering (SSR)',
        'Core Web Vitals Optimization',
        'Universal State Management'
      ]
    },
    {
      id: 3,
      title: 'Vue.js Component Library & Design Systems',
      icon: <LayoutGrid className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Craft modular, testable, and accessible Vue UI design systems using Tailwind CSS, Vuetify, PrimeVue, and Pinia store modules.',
      bullets: [
        'Tailwind CSS & Vuetify',
        'PrimeVue & Element Plus',
        'WCAG Accessibility (a11y)',
        'Figma to Vue Pixel-Perfect UI'
      ]
    },
    {
      id: 4,
      title: 'Vue 2 to Vue 3 / Nuxt 3 Migration',
      icon: <RefreshCw className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Smooth modernization from legacy Vue 2 Options API to Vue 3 Composition API, TypeScript, and Pinia with zero business downtime.',
      bullets: [
        'Legacy Codebase Audit',
        'Composition API Refactoring',
        'Pinia State Migration',
        'Performance & Security Upgrade'
      ]
    },
    {
      id: 5,
      title: 'Pinia & Real-Time State Management',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Architect predictable, modular state management using Pinia with TypeScript support and real-time WebSocket data synchronization.',
      bullets: [
        'Pinia Store Architecture',
        'WebSockets & Live Event Feeds',
        'Reactive Data Caching',
        'Optimistic UI State Updates'
      ]
    },
    {
      id: 6,
      title: 'Cross-Platform Mobile Apps (Capacitor & Vue)',
      icon: <Smartphone className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build performant, native-like iOS and Android mobile apps from a single shared Vue codebase with Capacitor or Ionic Framework.',
      bullets: [
        'Ionic & Capacitor Integration',
        'Native Hardware API Access',
        'Offline Local Storage Sync',
        'App Store & Play Store Release'
      ]
    },
    {
      id: 7,
      title: 'Vue.js API Integration & Microservices',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Connect your Vue frontend with high-throughput RESTful and GraphQL backend microservices built on Node.js, Python, or Laravel.',
      bullets: [
        'REST & GraphQL Pipelines',
        'JWT & OAuth2 Secure Auth',
        'High-Throughput API Gateways',
        'Payment Gateway Integration'
      ]
    },
    {
      id: 8,
      title: 'Vue.js Maintenance & 24/7 SLA Support',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Comprehensive production monitoring, automated security patch rollouts, package upgrades, and guaranteed SLA incident support.',
      bullets: [
        '24/7 SLA Uptime Guarantee',
        'Performance Auditing & Profiling',
        'Security Vulnerability Patches',
        'Dedicated On-Demand Engineers'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Lightweight & Blazing Fast',
      desc: 'With a tiny core bundle size (~20KB) and optimized Virtual DOM diffing, Vue 3 delivers instantaneous page loads and lightning responsiveness.',
      icon: <Zap className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Flexible Composition API',
      desc: 'Clean code organization, enhanced TypeScript type inference, and logic reusability make complex enterprise features easier to scale.',
      icon: <Layers className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'SEO-Optimized with Nuxt 3',
      desc: 'Nuxt 3 server-side rendering and automatic static route generation ensure top search engine indexing and zero content flicker.',
      icon: <Globe className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Gentle Learning Curve & Velocity',
      desc: 'Intuitive single-file components (.vue) combining HTML, CSS, and JS enable developers to ship production features up to 35% faster.',
      icon: <FileCode2 className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Vibrant Global Community',
      desc: 'Backed by a vast global ecosystem, battle-tested tooling (Vite, Pinia, Vue Router), and active open-source enterprise adoption.',
      icon: <Cpu className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Seamless Incremental Integration',
      desc: 'Vue can be effortlessly embedded as a lightweight widget into existing multi-page apps or scaled into a full enterprise SPA.',
      icon: <ShieldCheck className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Top 1% Vetted Senior Vue Developers',
      desc: 'Access certified Vue.js & TypeScript engineers with an average of 6+ years building mission-critical enterprise applications.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Source Code & IP Ownership',
      desc: 'You retain complete ownership of all intellectual property, source code, repositories, and architectural documentation.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Protection',
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
      desc: 'We analyze your business goals, user journeys, third-party integrations, and technical requirements to create an architectural blueprint.'
    },
    {
      step: '02',
      title: 'UI/UX & Design System',
      desc: 'Our design squad crafts intuitive, high-fidelity Figma prototypes, interactive wireframes, and design system tokens.'
    },
    {
      step: '03',
      title: 'Agile Vue Sprints',
      desc: 'Senior developers build modular Vue 3 components, clean TypeScript services, Pinia state, and secure API integrations in 2-week sprints.'
    },
    {
      step: '04',
      title: 'Automated QA & Testing',
      desc: 'Comprehensive unit tests (Vitest / Vue Test Utils), end-to-end testing (Cypress / Playwright), and security vulnerability audits.'
    },
    {
      step: '05',
      title: 'CI/CD Cloud Deployment',
      desc: 'Automated bundle optimization, code splitting, containerization with Docker, and zero-downtime deployment to AWS, Vercel, or Netlify.'
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
      category: 'Computer Vision & Vue.js',
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

  const vueFaqList = [
    {
      id: 1,
      question: '1. Why should I choose Vue.js for enterprise web development?',
      answer: 'Vue.js offers an optimal balance of lightweight bundle size, high execution speed, simple reactivity, and modular Composition API. It allows fast developer onboarding, seamless incremental adoption, and enterprise scalability with Nuxt.js.'
    },
    {
      id: 2,
      question: '2. Can you migrate our existing Vue 2 application to Vue 3 / Nuxt 3?',
      answer: 'Yes! We specialize in migrating legacy Vue 2 (Options API / Vuex) applications to Vue 3 (Composition API / Pinia) and Nuxt 3. We ensure zero data loss, updated package dependencies, and significant performance boosts.'
    },
    {
      id: 3,
      question: '3. What is the difference between Vue.js and React?',
      answer: 'Vue.js features an intuitive Single-File Component structure with built-in directives (v-if, v-for), two-way binding capabilities, and officially supported routing and state libraries. React relies heavily on JSX and community libraries. Both are exceptionally fast, but Vue is often faster to develop and maintain.'
    },
    {
      id: 4,
      question: '4. How do you ensure SEO optimization for Vue applications?',
      answer: 'We leverage Nuxt 3 for Server-Side Rendering (SSR) and Static Site Generation (SSG). This pre-renders dynamic content on the server so that search engine crawlers can index all pages with top Core Web Vitals performance.'
    },
    {
      id: 5,
      question: '5. How much does custom Vue.js web development cost?',
      answer: 'Cost depends on project complexity, UI/UX designs, backend APIs, and scalability requirements. We provide flexible engagement models including Fixed-Price milestone delivery and Dedicated Full-Time Developer teams starting at competitive rates.'
    },
    {
      id: 6,
      question: '6. What is the typical development timeline for a Vue.js project?',
      answer: 'An MVP or mid-size web portal usually takes 6 to 10 weeks. Enterprise SaaS systems with multiple integrations and complex role-based access generally take 3 to 6 months delivered via bi-weekly Agile sprints.'
    },
    {
      id: 7,
      question: '7. Do you provide ongoing maintenance and SLA support after launch?',
      answer: 'Yes, we provide 24/7 SLA maintenance, continuous monitoring, performance tuning, version updates, and rapid bug fix turnaround to ensure uninterrupted uptime.'
    },
    {
      id: 8,
      question: '8. Why choose Firevy / Sapphire Solutions as your Vue.js development partner?',
      answer: 'With 23+ years of IT excellence, 320+ 5-star Clutch reviews, 1500+ completed projects, certified Vue & TypeScript engineers, 100% source code ownership, and strict NDA agreements, we guarantee world-class software delivery.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Vue js Development Company in USA | VueJS Web Development Services"
        description="Sapphire is a leading VueJS development company in USA. We create robust, high performance, scalable and powerful VueJS web applications and enterprise portals."
        canonical="/services/vuejs"
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
          1. HERO SECTION (1:1 Exact Match with User Screenshot)
          ========================================================================= */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & Let's Talk CTA Button */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[900] text-[#0B0F19] tracking-tight leading-[1.12] font-sans">
                Vue js Development Company in USA
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal font-sans max-w-2xl">
                We are a leading VueJS development company providing robust VueJS Development Services at the best price. Get in touch with us for customized Vue Js development services delivered by experts. Get your free quote today!
              </p>

              {/* 4 Counter Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[24px] sm:text-[28px] font-[900] text-[#005F96] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#475569] leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Let's Talk CTA Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Vue.js Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200/90 rounded-[20px] p-6 sm:p-8 shadow-xl relative overflow-hidden text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center p-2">
                      <img
                        src="/images/vue.png"
                        alt="Vue.js"
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-[800] text-slate-900 leading-tight">
                        Vue 3 + Nuxt 3 Stack
                      </h3>
                      <p className="text-[12px] font-semibold text-[#005F96]">
                        Composition API • Vite • Pinia • SSR
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                    Active Stack
                  </span>
                </div>

                <div className="space-y-3 text-[13px] text-[#475569]">
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Composition API & TypeScript-powered reactive state</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Nuxt 3 Hybrid Server-Side Rendering (SSR) for peak SEO</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Zero-downtime Vue 2 to Vue 3 migration with Pinia</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom reusable UI component design systems</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-[12px] text-slate-500 font-medium">Ready to start?</div>
                      <div className="text-[14px] font-[800] text-slate-900">Get Free Architecture Review</div>
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
          3. #1 VUE JS DEVELOPMENT COMPANY (Matching Screenshot Lower Section)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Visual: Code Window */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F172A] rounded-[20px] p-6 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">App.vue</span>
                </div>
                <div className="font-mono text-[12px] sm:text-[13px] leading-relaxed text-slate-300 space-y-1">
                  <p className="text-purple-400">&lt;<span className="text-emerald-400">script</span> setup lang="ts"&gt;</p>
                  <p className="pl-4 text-purple-400">import <span className="text-white">&#123; ref, onMounted &#125;</span> from <span className="text-amber-300">'vue'</span>;</p>
                  <p className="pl-4 text-purple-400">import <span className="text-white">&#123; useAnalyticsStore &#125;</span> from <span className="text-amber-300">'@/stores'</span>;</p>
                  <p className="pl-4 text-slate-400 pt-2">// Reactive Vue 3 Composition API</p>
                  <p className="pl-4 text-white">const store = useAnalyticsStore();</p>
                  <p className="text-purple-400">&lt;/<span className="text-emerald-400">script</span>&gt;</p>
                  <p className="pt-2 text-purple-400">&lt;<span className="text-blue-400">template</span>&gt;</p>
                  <p className="pl-4 text-cyan-300">&lt;<span className="text-rose-400">EnterpriseDashboard</span> :data="store.metrics" /&gt;</p>
                  <p className="text-purple-400">&lt;/<span className="text-blue-400">template</span>&gt;</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
                #1 Vue JS Development Company
              </h2>

              <p className="text-[14.5px] text-[#475569] leading-relaxed font-normal">
                With extensive knowledge of the Vue .js Framework, our team of skilled developers crafts high-performing, scalable, and secure web applications. We utilize the progressive nature of Vue.js to engineer bespoke enterprise platforms, real-time dashboards, and custom customer portals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Vue 3 Composition API & TypeScript</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Nuxt 3 Hybrid SSR & Edge Caching</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Pinia Modular Global State Management</span>
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
                  <span>Hire Dedicated Vue.js Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE VUE JS SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Vue.js Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We deliver full-spectrum Vue.js development solutions to power responsive web apps and cloud SaaS products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {vueServices.map((service) => (
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
          5. KEY BENEFITS OF VUE.JS (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Vue.js for Your Web Application?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Vue.js offers extraordinary rendering speeds, elegant syntax, and modern developer tooling.
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
              Our Vue.js Development Lifecycle
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
              Why Choose Firevy for Vue.js Development?
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
              Our Recent Vue.js Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore custom Vue.js applications and enterprise web solutions successfully engineered for our clients.
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
      <SapphireFaqSection faqList={vueFaqList} />

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
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Vue js Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Vue JS Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default VueJsDevelopmentService;
