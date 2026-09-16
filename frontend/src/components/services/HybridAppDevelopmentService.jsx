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
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import {
  Code,
  Smartphone,
  ShieldCheck,
  Cpu,
  Zap,
  Layers,
  Award,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Check,
  Sparkles,
  Globe,
  Settings,
  RefreshCw,
  Bug,
  Layout,
  Lock,
  Boxes
} from 'lucide-react';

export const HybridAppDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Hybrid Squad',
    appType: 'Custom Hybrid App Development',
    budget: '$20,000 - $45,000',
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

  // 6 Expertise Items for Hybrid App Development (1:1 Reference Match)
  const expertiseItems = [
    {
      title: 'Custom Hybrid App Development',
      desc: 'Brands can optimize their return on investment and reach broader audiences with bespoke hybrid application development. We engineer high-performance cross-platform apps tailored to your specific business workflow.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          <path d="M8 6h8M8 10h5" />
        </svg>
      )
    },
    {
      title: 'Hybrid App Support & Maintenance',
      desc: 'We not only develop top-tier hybrid applications, but we also provide comprehensive 24/7 technical support, code refactoring, continuous OS compatibility updates, and proactive performance tuning.',
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
      title: 'Hybrid UI/UX Design',
      desc: 'Our primary goal is to provide fluid, interactive, and platform-adaptive user interfaces. Our designs keep customers actively engaged and ensure consistent look and feel across iOS and Android.',
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
      title: 'Enterprise Hybrid Security',
      desc: 'We enforce enterprise-grade data encryption, biometric authentication, secure keystore storage, and zero-trust backend communication to safeguard user data across all mobile operating systems.',
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
      title: 'Hybrid App Modernization & Migration',
      desc: 'App upgrades and modernization bring immense agility. Our team of senior hybrid specialists seamlessly modernizes legacy web apps into progressive hybrid mobile apps with zero downtime.',
      badgeBg: 'bg-[#fce7f3]',
      badgeColor: 'text-[#db2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      )
    },
    {
      title: 'Hybrid Performance Tuning & QA',
      desc: 'We execute exhaustive unit, automated, and cross-device testing across 100+ physical devices to ensure zero lag, instant startup times, and smooth 60fps animations.',
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

  // 6 Benefits of Hybrid App Development (1:1 Reference Match)
  const benefitsItems = [
    {
      title: 'Single Codebase for iOS & Android',
      desc: 'Build once and deploy simultaneously on Apple App Store and Google Play Store, reducing upfront development time and engineering overhead by up to 50%.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Accelerated Time-to-Market',
      desc: 'Rapid iteration, live code reloads, and reusable UI components ensure your MVP hits the market weeks faster than separate native builds.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Cost-Effective Engineering',
      desc: 'Maintain a single dedicated team instead of separate iOS and Android departments, drastically cutting continuous maintenance and QA expenditure.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: 'Seamless Native Hardware Access',
      desc: 'Access camera, GPS, biometric sensors, Bluetooth, and push notifications with full platform capability using modern bridge architecture.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      )
    },
    {
      title: 'Offline Data Synchronization',
      desc: 'Local SQLite and encrypted client storage ensure high app responsiveness and smooth offline usability even in low-connectivity environments.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    },
    {
      title: 'Effortless Cloud & Web Integration',
      desc: 'Unified RESTful and GraphQL APIs seamlessly connect hybrid mobile apps with existing enterprise cloud services and web dashboards.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models (1:1 Reference Match)
  const hiringModels = [
    {
      title: 'Full-Time Hiring',
      desc: 'Dedicated full-time hybrid mobile developers working 100% on your product with direct daily communication and sprint management.',
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      points: [
        'Direct developer communication',
        '160 hours guaranteed per month',
        'Daily standups & Agile sprints',
        'Dedicated senior QA review'
      ]
    },
    {
      title: 'Part-Time Hiring',
      desc: 'Ideal for mid-scale feature rollouts and continuous enhancements requiring dedicated senior engineering hours without full-time commitment.',
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      ),
      points: [
        'Flexible 80 hours monthly',
        'Bi-weekly milestone delivery',
        'Direct project manager access',
        'Cost-effective scaling'
      ]
    },
    {
      title: 'Fixed Price Model',
      desc: 'Perfect for clearly defined hybrid MVPs and enterprise turn-key projects with defined milestones, scope, and fixed delivery timelines.',
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      points: [
        'Strict milestone guarantees',
        'Pre-agreed budget & timeline',
        'End-to-end design to deploy',
        'Post-launch warranty included'
      ]
    },
    {
      title: 'Bucket Model',
      desc: 'On-demand bucket of hours for sporadic bug fixes, OS compliance upgrades, third-party API integrations, and maintenance support.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
      points: [
        'Flexible rollover hours',
        'Zero long-term lock-in',
        'Priority SLA response',
        'Pay only for active hours'
      ]
    }
  ];

  // Tech Categories for Hybrid App Development
  const techCategories = {
    backend: [
      { name: 'React Native & Flutter', desc: 'Industry-standard cross-platform frameworks for high-performance 60fps interfaces.' },
      { name: 'Ionic & Capacitor', desc: 'Modern web-based hybrid runtime with extensive native plugin ecosystems.' },
      { name: 'Node.js & GraphQL', desc: 'High-speed asynchronous backend APIs and microservices architectures.' }
    ],
    frontend: [
      { name: 'TypeScript & JavaScript', desc: 'Type-safe frontend development with reusable cross-platform business logic.' },
      { name: 'Tailwind & Styled Components', desc: 'Adaptive responsive design systems matching native iOS and Android guidelines.' },
      { name: 'Redux Toolkit & Zustand', desc: 'Predictable, centralized state management with offline persistence.' }
    ],
    database: [
      { name: 'SQLite & WatermelonDB', desc: 'Ultra-fast local encrypted databases with automatic remote cloud synchronization.' },
      { name: 'Firebase & Realm', desc: 'Real-time database triggers, remote configuration, and live analytics.' }
    ],
    devops: [
      { name: 'GitHub Actions & Fastlane', desc: 'Automated CI/CD pipelines building iOS IPAs and Android APKs simultaneously.' },
      { name: 'App Store & Google Play', desc: 'Complete deployment orchestration, store optimization, and compliance audits.' }
    ],
    testing: [
      { name: 'Jest & React Native Testing Lib', desc: 'Comprehensive unit testing ensuring cross-platform code reliability.' },
      { name: 'Detox & Appium', desc: 'Automated end-to-end UI testing across real iOS and Android physical devices.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent bi-weekly sprint reviews and direct communication with senior engineers.' }
    ]
  };

  // Official Hybrid App FAQs
  const hybridFaqs = [
    {
      q: '1. What is hybrid mobile app development?',
      a: 'Hybrid mobile app development involves creating applications using web and cross-platform technologies (such as React Native, Flutter, or Ionic) that run seamlessly across both iOS and Android platforms from a single codebase.'
    },
    {
      q: '2. Are hybrid apps as fast as native apps?',
      a: 'Yes! Modern hybrid frameworks like React Native and Flutter compile directly to native arm64 code or utilize high-speed native bridges, providing fluid 60fps performance indistinguishable from native apps.'
    },
    {
      q: '3. Can hybrid apps access native device features?',
      a: 'Absolutely. Hybrid applications have complete access to native device APIs including camera, GPS location, push notifications, biometric FaceID/fingerprint sensors, Bluetooth, and offline storage.'
    },
    {
      q: '4. How much cost does hybrid development save?',
      a: 'By sharing business logic and UI components across iOS and Android from a single codebase, businesses typically save between 35% and 50% compared to developing two distinct native applications.'
    },
    {
      q: '5. Do you handle App Store and Google Play Store submission?',
      a: 'Yes! We manage the entire deployment process from signing certificates, privacy policy compliance, and review guidelines to successful publication on both Apple App Store and Google Play.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before any project discussion to ensure 100% data confidentiality and complete source code intellectual property ownership for your business.'
    }
  ];

  // Exact Stats for Hybrid App Development matching reference screenshot
  const hybridStats = [
    { value: '72+', label: 'Mobile App Developers' },
    { value: '18+', label: 'Fortunes 500 Companies' },
    { value: '725+', label: 'Project Completed in Mobile Technology' },
    { value: '290+', label: '5-Star Clutch Reviews' }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hybrid App Development Company in USA | Custom Cross-Platform Apps | Firevy.co"
        description="Leading Hybrid App Development Company. We engineer fast, scalable, and cross-platform mobile apps for iOS and Android using modern hybrid technologies."
        canonical="/services/hybrid-app-development"
      />

      {/* 1. Sapphire Light Hero Banner (1:1 Screenshot Match) */}
      <SapphireLightHeroBanner
        title="Hybrid App Development Company in USA"
        subtitle="We are your one-stop shop for Affordable Hybrid App Development Service needs. We incorporate the best features of native programs to create robust cross-platform mobile applications that function identically to native applications on Android, iOS, and Windows."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="hybrid"
        stats={hybridStats}
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* 3. SECTION: The Reliable Hybrid App Development Company (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Reliable Hybrid App Development Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/hybrid_reliable_company.jpg"
                  alt="The Reliable Hybrid App Development Company"
                  className="w-full h-auto max-w-[460px] object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                The Reliable Hybrid App Development Company
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our revolutionary hybrid app development services are equipped to handle all of your cross-platform app development difficulties. We provide custom hybrid app development solutions that are compatible with numerous devices. With our hybrid mobile app development services, you can rapidly construct a high-quality hybrid app that suits your business's particular needs. Our Hybrid Mobile App Developers team comprises UX designers, graphic designers, and software engineers with extensive experience in mobile web development technologies. Their significant expertise in Hybrid Mobile App Development assists you in designing robust, scalable, and dependable hybrid mobile apps quickly and effectively.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Brief About Hybrid App Development Services (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Hybrid App Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                We offer Enterprise Hybrid App Development Services to help you create hybrid apps with the latest features. Our design specialists ensure the ergonomic development of a hybrid application's user interface to enhance the user experience. Hire Dedicated Hybrid App Development Team of highly qualified and experienced developers with unmatched competency and originality makes us a reliable partner for developing exceptional hybrid applications for your company.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Best Hybrid App Development Company adept Integrating new features into your existing app and enhancing its overall performance.
              </p>
            </div>

            {/* Right Column: Brief Solutions Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/hybrid_brief_wireframe.jpg"
                  alt="Brief About Hybrid App Development Services"
                  className="w-full h-auto max-w-[460px] object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. SECTION: World Wide Top Rated IT Company on Clutch (Award Badges Marquee Banner) */}
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

                  {/* Badge 2: GoodFirms Top Mobile App */}
                  <img
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Mobile App Goodfirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 3: The Manifest - Most Reviewed Dedicated Software Development Company */}
                  <img
                    src="/images/awards/most_review_softwarecompany_manifest.svg"
                    alt="Most Reviewed Software Development Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 4: Clutch Top Dedicated Software Company Hexagon */}
                  <img
                    src="/images/awards/top_mobile_clutchn.svg"
                    alt="Top Clutch Dedicated Software Company"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 5: The Manifest - Most Reviewed Dedicated Software Development Company */}
                  <img
                    src="/images/awards/most_mobile_review_manifest.svg"
                    alt="The Manifest Most Reviewed"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 6: The Manifest - Most Reviewed Software Developers */}
                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  {/* Badge 7: GoodFirms Top Web Dedicated */}
                  <img
                    src="/images/awards/top_web_dev_goodfirm.svg"
                    alt="Top Web Dev GoodFirms"
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
                    src="/images/awards/top_mobile_app_goodfirm.svg"
                    alt="Top Mobile App Goodfirms"
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

                  <img
                    src="/images/awards/most_mobile_review_manifest.svg"
                    alt="The Manifest Most Reviewed"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/most_web_review_manifest.svg"
                    alt="Most Reviewed Software Developers"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />

                  <img
                    src="/images/awards/top_web_dev_goodfirm.svg"
                    alt="Top Web Dev GoodFirms"
                    className="h-16 sm:h-20 w-auto object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SECTION: Get A 100% Customizable Hybrid App Development By Experts (1:1 Reference Match) */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Hybrid App Development By Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              {/* Subtle Topographic Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              {/* Quote Icon */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Scalable And Robust Hybrid Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We are a leading hybrid mobile application development company backed by experienced software architects and certified developers. Our team engineers high-velocity hybrid mobile applications that combine native performance with seamless cross-platform adaptability.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We know that applications designed for modern enterprises must deliver dependable offline caching, instant load times, and fluid touch interactions. We ensure every deliverable matches your business goals without compromising code maintainability or security.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6.5 SECTION: Cutting Edge Technologies Sapphire Use For Hybrid App Development */}
      <HybridAppCuttingEdgeTechnologiesSection />

      {/* 7. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 8. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* 9. SECTION: The Expertise Of Our Hybrid App Development Services (1:1 Reference Match) */}
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
              The Expertise Of Our Hybrid App Development Services
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Our hybrid mobile engineers have years of deep experience in cross-platform software development. Our key areas of expertise are:
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

      {/* 10. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits Of Hybrid App Development (1:1 Reference Match) */}
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
              Benefits Of Hybrid App Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can improve user experience, reduce time-to-market, and optimize development expenditure by choosing hybrid mobile engineering. Six significant advantages are:
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
              We offer flexible engagement models that are tailored to your product scope, timeline, and budgetary goals:
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
                className="bg-white rounded-[18px] p-7 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center space-y-6 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Circle Badge Icon */}
                  <div className={`w-14 h-14 rounded-full ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 mx-auto transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-[20px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#0b5072] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 font-[400] leading-relaxed font-sans text-center">
                    {item.desc}
                  </p>

                  {/* Bullet Points List with Blue Checkmarks */}
                  <ul className="space-y-2 pt-2 text-left font-sans text-xs sm:text-[13px] text-slate-700 font-[600]">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center space-x-2">
                        <span className="text-[#0284c7] font-bold text-sm">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Hire Now' Dark Blue Button */}
                <a
                  href="#quote-form"
                  className="w-full py-3 rounded-[8px] bg-[#0b5072] hover:bg-[#084260] text-white font-[800] text-sm transition-all shadow-md hover:shadow-lg font-sans inline-block mt-4"
                >
                  Hire Now
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 13. SECTION: Unveiling Our Innovative Solution */}
      <InnovativeSolutionsVideoSection />

      {/* 14. SECTION: Process We Follow */}
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from hybrid UI wireframes to framework compilation, QA testing, and App Store deployment." />

      {/* 15. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 16. SECTION: Trusted Brands Grid */}
      <TrustedBrandsGrid />

      {/* 17. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 18. SECTION: Tech Stack Grid */}
      <SapphireTechStackGrid domainName="hybrid app" richTechCategories={techCategories} />

      {/* 19. SECTION: Featured In Brands Section */}
      <FeaturedInBrandsSection />

      {/* 20. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 21. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={hybridFaqs} />

      {/* 22. SECTION: Our Recent Blogs */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Our Recent Blogs
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Read our latest engineering insights, architecture breakdowns, and cross-platform mobile best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_1.png"
                  alt="Hybrid vs Native: Choosing the Right Strategy in 2024"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Hybrid vs Native: Choosing the Right Strategy in 2024
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  How modern cross-platform architectures optimize total cost of ownership while delivering native-grade responsiveness.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_2.png"
                  alt="Optimizing Performance in React Native & Flutter Apps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Optimizing Performance in React Native &amp; Flutter Apps
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Techniques for zero-jank frame rendering, memory profiling, and smooth multi-threaded JS bridges.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_3.png"
                  alt="Enterprise Security Standards for Hybrid Mobile Apps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Enterprise Security Standards for Hybrid Mobile Apps
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Implementing cryptographic keystores, biometrics, and zero-trust API communications across iOS and Android.
                </p>
                <div className="text-[#005F96] font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read More →
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 23. SECTION: What Sets Us Apart */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              What Sets Us Apart
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Our engineering excellence, transparent communication, and client-first delivery methodologies distinguish Firevy as a premier development partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-[16px] bg-[#f8fafc] border border-slate-100 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#005F96] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-xl font-[800] text-slate-950">Top 1% Vetted Hybrid Developers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work directly with senior cross-platform architects and developers with an average of 7+ years of mobile production experience.
              </p>
            </div>

            <div className="p-8 rounded-[16px] bg-[#f8fafc] border border-slate-100 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-xl font-[800] text-slate-950">Agile Sprint Transparency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive weekly sprint demos, live test builds, Jira backlog tracking, and direct Slack/Teams collaboration with your development squad.
              </p>
            </div>

            <div className="p-8 rounded-[16px] bg-[#f8fafc] border border-slate-100 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="text-xl font-[800] text-slate-950">Full Source Code Ownership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                You retain 100% intellectual property, full Git repository access, patent rights, and custom deployment documentation from day one.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 24. SECTION: Challenge CTA Banner */}
      <section className="py-14 sm:py-16 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[900] tracking-tight text-white leading-tight">
              Got A Challenge? Let's Talk!
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed">
              Schedule a 30-minute free consultation with our senior hybrid mobile architects to scope your architecture, timeline, and budget.
            </p>
            <div className="pt-2">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-[#005F96] hover:bg-slate-100 font-[800] text-base transition-all shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HybridAppDevelopmentService;
