import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import RecentBlogsSection from '../common/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AndroidChallengeCtaBanner from './AndroidChallengeCtaBanner';

export const PwaDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated PWA Squad',
    appType: 'Custom Progressive Web App Development',
    budget: '$20,000 - $45,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 6 Expertise Items for Progressive Web App Development (1:1 Match)
  const expertiseItems = [
    {
      title: 'Custom Progressive Web App Development',
      desc: 'Brands can optimize user engagement and maximize online conversions with bespoke Progressive Web App development. We engineer tailored PWAs matching your exact business workflows and high-concurrency traffic demands.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'PWA Support And Maintenance',
      desc: 'We provide round-the-clock technical monitoring, service worker cache management, performance profiling, and continuous security patches for uninterrupted application uptime.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M15 11a3 3 0 0 0-6 0" />
        </svg>
      )
    },
    {
      title: 'Responsive PWA UI/UX Design',
      desc: 'Our creative UI/UX design team crafts fluid, responsive, and app-like user interfaces that adapt seamlessly across smartphones, tablets, and desktop workstations.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Enterprise-Grade PWA Security',
      desc: 'End-to-end HTTPS encryption, rigorous Cross-Site Scripting (XSS) prevention, and secure client-side storage architectures ensure robust data protection across all user sessions.',
      badgeBg: 'bg-[#fef9c3]',
      badgeColor: 'text-[#ca8a04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10 11V9a2 2 0 1 1 4 0v2" />
        </svg>
      )
    },
    {
      title: 'PWA Upgrades & Modernization',
      desc: 'Seamlessly transform legacy web portals or native applications into ultra-lightweight, SEO-discoverable progressive web applications with zero downtime or data loss.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Offline Caching & Background Sync',
      desc: 'Implement intelligent service workers and indexedDB data persistence, enabling end-users to browse catalogs, manage carts, and execute core tasks without internet access.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Progressive Web App Development
  const benefitsItems = [
    {
      title: 'Zero App Store Friction',
      desc: 'Users install and access your app directly via web browser URLs with zero download wait times, eliminating store commissions and 100MB download barriers.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Lightning-Fast Load Speeds',
      desc: 'Sub-second page speeds and instant offline caching significantly reduce bounce rates, boost user retention, and increase conversion rates by up to 50%.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      title: 'Cost-Effective Unified Codebase',
      desc: 'Build once and deploy universally across iOS, Android, Windows, and macOS, drastically slashing multi-platform development and maintenance overhead.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="12" height="16" rx="3" />
          <path d="M10 10h4M12 8v4" />
        </svg>
      )
    },
    {
      title: 'Drastically Reduced Data Usage',
      desc: 'PWAs consume up to 90% less data and storage space than conventional native mobile apps, making them ultra-responsive even on low-bandwidth networks.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Web Push Notifications',
      desc: 'Directly re-engage active and lapsed customers on both desktop and mobile devices with personalized, real-time push alerts and promotional notifications.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Full Search Engine Discoverability',
      desc: 'Unlike closed-ecosystem native apps, PWAs are fully indexable by Google and search engines, driving high-volume organic inbound web traffic and brand reach.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12 C19 9 20.8 7 24 7 C27.2 7 29 9 29 12 Z" />
          <ellipse cx="24" cy="13" rx="7" ry="2" />
          <path d="M17 13 C12 18 10 24 10 32 C10 40 16 43 24 43 C32 43 38 40 38 32 C38 24 36 18 31 13 Z" />
          <text x="24" y="32" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">$</text>
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Agile team',
        'Small projects',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time Material',
      desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="27" r="14" />
          <path d="M24 13 V8" />
          <path d="M20 8 H28" />
          <path d="M34 17 L37 14" />
          <path d="M24 27 L24 20" />
          <path d="M24 27 L29 30" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Working based hours',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="15" r="4.5" />
          <path d="M17 29 C17 24.5 20 22.5 24 22.5 C28 22.5 31 24.5 31 29" />
          <circle cx="14" cy="19" r="3.5" />
          <path d="M8 31 C8 27 11 25.5 14 25.5 C15.2 25.5 16.3 25.9 17.2 26.6" />
          <circle cx="34" cy="19" r="3.5" />
          <path d="M30.8 26.6 C31.7 25.9 32.8 25.5 34 25.5 C37 25.5 40 27 40 31" />
        </svg>
      ),
      points: [
        'No hidden costs',
        '160 hours of assured work',
        'Monthly billing',
        'Pay only for measurable work'
      ]
    },
    {
      title: 'Buckets Approach',
      desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#06B6D4]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Cog */}
          <circle cx="19" cy="27" r="7" />
          <path d="M19 18 V20 M19 34 V36 M10 27 H12 M26 27 H28 M12.5 20.5 L14 22 M24 32 L25.5 33.5 M12.5 33.5 L14 32 M24 22 L25.5 20.5" strokeWidth="2.2" />
          {/* Small Cog */}
          <circle cx="31" cy="17" r="4.5" />
          <path d="M31 11 V12.5 M31 21.5 V23 M25 17 H26.5 M35.5 17 H37 M26.8 12.8 L28 14 M34 20 L35.2 21.2 M26.8 21.2 L28 20 M34 14 L35.2 12.8" strokeWidth="1.8" />
        </svg>
      ),
      points: [
        'Direct Resource Monitoring',
        'Less Risk',
        'Less budget',
        'Pay only for measurable work'
      ]
    }
  ];

  // Tech Categories for Progressive Web App Development
  const techCategories = {
    backend: [
      { name: 'Node.js & Express', desc: 'High-performance event-driven backend microservices for lightning-fast PWA data processing.' },
      { name: 'GraphQL & REST APIs', desc: 'Optimized API payload schemas ensuring minimal payload sizes and instant response times.' },
      { name: 'Serverless & Edge Functions', desc: 'Sub-millisecond dynamic compute distributed across worldwide edge CDN locations.' }
    ],
    frontend: [
      { name: 'React.js & Next.js', desc: 'Component-based architectures with Server-Side Rendering (SSR) and Incremental Static Regeneration.' },
      { name: 'Vue.js & Nuxt', desc: 'Lightweight progressive JavaScript framework for reactive, modular user interfaces.' },
      { name: 'Service Workers & Workbox', desc: 'Production-grade caching strategies and background sync management.' }
    ],
    database: [
      { name: 'IndexedDB & Dexie.js', desc: 'High-capacity client-side structured offline storage for instant local queries.' },
      { name: 'PostgreSQL & MongoDB', desc: 'Scalable cloud databases powering enterprise user management and realtime catalogs.' }
    ],
    devops: [
      { name: 'Vercel & AWS CloudFront', desc: 'Global low-latency CDN edge delivery with automatic asset compression.' },
      { name: 'GitHub Actions CI/CD', desc: 'Automated Lighthouse scoring, unit testing, and continuous zero-downtime deployments.' }
    ],
    testing: [
      { name: 'Google Lighthouse CI', desc: 'Automated audit suites guaranteeing 95+ scores across PWA, Performance, and SEO.' },
      { name: 'Cypress & Playwright', desc: 'End-to-end browser automation validating offline transitions and push alerts.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent bi-weekly sprint reviews and direct communication with senior PWA engineers.' }
    ]
  };

  // Official PWA FAQs
  const pwaFaqs = [
    {
      q: '1. What is a Progressive Web App (PWA)?',
      a: 'A Progressive Web App (PWA) is an advanced web application engineered using modern web APIs and progressive enhancement techniques. It delivers an app-like user experience directly in web browsers, complete with offline functionality, home screen installation, and push notifications.'
    },
    {
      q: '2. How do Progressive Web Apps differ from native mobile apps?',
      a: 'Unlike native applications that require app store downloads, updates, and separate codebases for iOS and Android, PWAs operate from a single cross-platform codebase, update instantly over the web, and take up 90% less device storage.'
    },
    {
      q: '3. Do PWAs work completely offline?',
      a: 'Yes! By leveraging Service Workers, Cache Storage API, and IndexedDB, PWAs cache essential app assets and data, allowing users to browse content, submit forms, and interact with the application even when disconnected from the internet.'
    },
    {
      q: '4. Can Progressive Web Apps send Push Notifications?',
      a: 'Yes, PWAs utilize the Web Push API and Notification API to deliver real-time, personalized push notifications to users on desktop and Android devices, as well as iOS (from iOS 16.4 onwards).'
    },
    {
      q: '5. Are Progressive Web Apps SEO friendly?',
      a: 'Absolutely. Because PWAs are built on standard web URLs and support Server-Side Rendering (SSR), search engines like Google can crawl, index, and rank every page seamlessly, driving organic traffic directly into your app.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we execute strict Non-Disclosure Agreements (NDAs) before discussing project architecture or proprietary ideas to ensure 100% confidentiality and complete intellectual property ownership.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Progressive Web App Development Company USA | Custom PWA Solutions | Firevy.co"
        description="Top Progressive Web App Development Company in USA. Build offline-first, high-performance, and installable Progressive Web Apps (PWAs) with Firevy.co."
        canonical="/services/progressive-web-app-development"
      />

      {/* 1. Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Progressive Web App Development Company in USA"
        subtitle="Our PWA developers encourage small and medium-sized organizations and new companies to use progressive web apps for their operations."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="pwa"
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* 3. SECTION: Leading Progressive Web App Development Company (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Leading PWA Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/pwa_leading_company_illustration.jpg"
                  alt="Leading Progressive Web App Development Company"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm rounded-xl"
                />
              </div>
            </div>

            {/* Right Column: Leading PWA Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Leading Progressive Web App Development Company
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                PWAs, which have specific properties inherent to native apps and websites, need less time and effort to create, resulting in less time to bring the product to market. In addition, Top PWA Development Services for Businesses may have their home screens added to a smartphone, desktop computer, or tablet and immediately begin functioning as native apps. This can be done without sacrificing the functionality or speed of the app. As a progressive web application development company, Affordable PWA Development Company PROMISE that when you use our progressive web application development services, you will only encounter progressive apps of the highest possible quality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Brief About Progressive Web App Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Progressive Web App Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We have a staff with imagination, invention, and years of industry expertise. Because of this, we can develop a Custom Progressive Web App Solutions that is lightning-fast, leaner, and more responsive than its competitors, and it rips the industry apart with its next-generation capabilities.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Fast and Secure PWA Development Agency provide safe navigation in the same way that native mobile apps do for mobile devices. Best Progressive Web App Development Company makes the app practically indistinguishable from a typical app and easier to use.
              </p>
            </div>

            {/* Right Column: Brief Solutions Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/pwa_brief_services_illustration.jpg"
                  alt="Brief About Progressive Web App Development Services"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SECTION: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner - 1:1 Screenshot Match) */}
      <section className="py-6 sm:py-8 bg-[#005F96] text-white border-y border-blue-900/30 overflow-hidden text-left font-sans select-none">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Title */}
            <div className="lg:col-span-4 shrink-0 pr-4 border-r-0 lg:border-r border-white/20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-[900] text-white tracking-tight leading-tight">
                World Wide Top Rated IT Company on Clutch
              </h2>
            </div>

            {/* Right Column: Animated Scrolling Award Badges Marquee */}
            <div className="lg:col-span-8 overflow-hidden">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 Badges */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0">
                  {/* Badge 1: Golden Trophy with Laurel Wreath */}
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  {/* Badge 2: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3: The Manifest - Most Reviewed Software Developers */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4: GoodFirms Top Dedicated Software Development Company */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5: The Manifest - Most Reviewed Dedicated Software Development Companies */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6: Clutch Top Dedicated Software Company Hexagon */}
                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>

                {/* Track 2 Badges (Duplicate for Seamless Loop) */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <g fill="#F59E0B">
                        <path d="M 18 72 C 10 50 14 26 30 14 C 24 24 24 42 31 56 C 28 48 24 30 33 20 C 34 34 38 46 44 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 82 72 C 90 50 86 26 70 14 C 76 24 76 42 69 56 C 72 48 76 30 67 20 C 66 34 62 46 56 58" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                        <path d="M 18 64 Q 10 54 22 48 Q 26 58 18 64 Z" />
                        <path d="M 22 48 Q 13 38 26 32 Q 30 42 22 48 Z" />
                        <path d="M 28 32 Q 20 22 34 18 Q 36 28 28 32 Z" />
                        <path d="M 82 64 Q 90 54 78 48 Q 74 58 82 64 Z" />
                        <path d="M 78 48 Q 87 38 74 32 Q 70 42 78 48 Z" />
                        <path d="M 72 32 Q 80 22 66 18 Q 64 28 72 32 Z" />
                      </g>
                      <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                      <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                      <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                      <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                      <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                    </svg>
                  </div>

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Dedicated Software Development Company GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SECTION: Get 100% Customizable Progressive Web Apps (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
              Get 100% Customizable Progressive Web Apps
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Quote Card Box */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-2xl bg-[#EFF7FC] border border-blue-100 shadow-sm overflow-hidden flex flex-col justify-between min-h-[300px]">
                {/* Topographical Vector Pattern Overlay */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path d="M0 100 C100 50, 200 150, 400 100 M0 200 C150 150, 250 250, 400 200 M0 300 C100 250, 300 350, 400 300" stroke="#005F96" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Big Quote Marks Icon */}
                <div className="relative z-10 text-[#005F96] mb-4">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Headline Inside Card */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-[800] text-[#005F96] leading-tight">
                    Scalable And Robust Progressive Web Apps
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                As a leading Progressive Web App development company, our expert PWA developers are always at the leading edge of modern browser APIs and progressive caching architectures. Our software engineers leverage Service Workers, Web App Manifests, and Google Workbox to create robust, app-like experiences delivered instantly across all web browsers.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We understand that applications designed for modern enterprises must deliver dependable offline caching, instant load times, and fluid touch interactions. In addition to our <strong className="text-[#005F96] font-bold">custom web application development services</strong>, we provide end-to-end architecture design, service worker lifecycle optimization, and automated Lighthouse performance audits to ensure peak conversion.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 8. SECTION: Success Stories (Placed Directly Below Premium Services) */}
      <SuccessStoriesSection category="general" />

      {/* 9. SECTION: The Expertise Of Our Progressive Web App Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              The Expertise Of Our Progressive Web App Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our PWA developers have years of experience in modern web engineering and mobile browser optimization. Other expertise are:
            </p>
          </motion.div>

          {/* 6 White Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10 sm:mb-12"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Color Badge Icon */}
                  <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered 'Get A Free Quote For Your Project' Dark Blue Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </motion.div>
        </Container>
      </section>

      {/* 10. SECTION: Proud To Have Picked These Up Along The Way (1:1 Reference Match) */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits Of Progressive Web App Development (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Benefits Of Progressive Web App Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can improve user retention, slash development costs, and maximize conversion rates with Progressive Web Apps. Six significant advantages of PWA development are:
            </p>
          </motion.div>

          {/* 6 White Benefit Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[12px] bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 font-[400] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 12. SECTION: Business Friendly Hiring Models (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </motion.div>

          {/* 4 White Hiring Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {hiringModels.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[18px] p-6 sm:p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-3">
                  {/* Clean Vector Icon */}
                  <div className="w-14 h-14 flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[12.8px] text-slate-600 font-[400] leading-relaxed font-sans text-center min-h-[60px]">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-3 text-left font-sans text-xs sm:text-[12.8px] text-slate-700 font-[500]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0078D7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Blue Button */}
                <a
                  href="#quote-form"
                  className="w-full py-2.5 rounded-[6px] bg-[#005F96] hover:bg-[#004a75] text-white font-[700] text-sm transition-all shadow-xs hover:shadow-md font-sans inline-block mt-4 text-center cursor-pointer"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 13. SECTION: Unveiling Our Innovative Solution (1:1 Reference Match) */}
      <InnovativeSolutionsVideoSection />

      {/* 14. SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from PWA architecture wireframes to Service Worker caching, offline sync, QA, and cloud deployment." />

      {/* 15. SECTION: Our Story, Their Words (1:1 Reference Match) */}
      <OurStoryTheirWordsSection />

      {/* 16. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 17. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 18. SECTION: Tech Stack Grid */}
      <SapphireTechStackGrid domainName="progressive web app" richTechCategories={techCategories} />

      {/* 19. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 20. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 21. SECTION: Frequently Asked Questions (1:1 Reference Match) */}
      <SapphireFaqSection faqList={pwaFaqs} />

      {/* 22. SECTION: Our Recent Blogs */}
      <RecentBlogsSection title="Our Recent Blogs" subtitle="Read our latest engineering insights, PWA architectural breakdowns, and modern web application trends." />

      {/* 23. SECTION: What Sets Us Apart (1:1 Reference Match) */}
      <WhatSetsUsApartSection title="What Sets Us Apart As Progressive Web App Development Company?" />

      {/* 24. SECTION: Challenge CTA Banner (1:1 Reference Match) */}
      <AndroidChallengeCtaBanner
        title="Have Progressive Web App Development Challenge To Address ??"
        subtitle="Get access to top Progressive Web App developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />
    </div>
  );
};

export default PwaDevelopmentService;
