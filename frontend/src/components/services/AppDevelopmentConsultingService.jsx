import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import CustomItServicesSection from './CustomItServicesSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import ExpertiseItConsultingSection from './ExpertiseItConsultingSection';
import AndroidHiringModels from './AndroidHiringModels';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import FeaturedStoryVideoSection from './FeaturedStoryVideoSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowLeft,
  Smartphone,
  Layers,
  Sparkles,
  Code2,
  Cloud,
  Lock,
  Cpu,
  RefreshCw,
  Compass,
  Award,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  Globe
} from 'lucide-react';

export const AppDevelopmentConsultingService = () => {
  const [cuttingEdgeIndex, setCuttingEdgeIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Mobile App Strategy & Discovery',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: 'Mobile App Strategy & Discovery',
        budget: '$25,000 - $50,000',
        message: ''
      });
    }, 4000);
  };

  // 1. Cutting-Edge Technologies for Mobile App Consulting
  const cuttingEdgeMobileTech = [
    {
      title: 'React Native Cross-Platform Engineering',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" />
        </svg>
      ),
      desc: 'Build high-performance cross-platform apps with near-native responsiveness. Leverage modular architectures, dynamic live reloading, and smooth native bridges across iOS and Android.'
    },
    {
      title: 'Flutter High-Performance Framework',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 28 L26 14 L38 14 L18 34 Z" fill="currentColor" opacity="0.2" />
          <path d="M18 34 L28 44 L40 44 L24 28 Z" fill="currentColor" />
          <path d="M10 24 L24 10 L36 10 L16 30 Z" />
        </svg>
      ),
      desc: "Harness Google's UI toolkit to deliver natively compiled, visually stunning mobile apps with 60/120fps Skia and Impeller graphics rendering from a unified codebase."
    },
    {
      title: 'Native iOS & Swift Architecture',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26 C16 18 24 12 32 10 C28 16 26 24 30 30 C32 32 36 34 38 34 C34 38 28 40 22 38 C16 36 12 32 14 26 Z" fill="currentColor" opacity="0.15" />
          <path d="M30 10 C30 10 26 16 30 22 C34 28 40 30 40 30 C36 34 30 36 24 34 C16 32 12 24 14 18 C16 12 24 8 30 10 Z" />
        </svg>
      ),
      desc: 'Engineered for uncompromising speed, memory safety, and seamless Apple ecosystem integration (Apple Pay, WidgetKit, ARKit, HealthKit) using modern Swift and SwiftUI.'
    },
    {
      title: 'Native Android & Kotlin Solutions',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="14" width="28" height="26" rx="6" />
          <circle cx="18" cy="22" r="2" fill="currentColor" />
          <circle cx="30" cy="22" r="2" fill="currentColor" />
          <line x1="16" y1="8" x2="20" y2="14" />
          <line x1="32" y1="8" x2="28" y2="14" />
        </svg>
      ),
      desc: 'Unlock optimal Android performance with Kotlin, Jetpack Compose, and coroutines. Modular MVVM/MVI architectures designed to seamlessly support thousands of distinct screen sizes.'
    },
    {
      title: 'Node.js & GraphQL Mobile Backends',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
          <path d="M 24 6 V 42 M 8 15 L 24 24 L 40 15" />
        </svg>
      ),
      desc: 'High-throughput, event-driven REST and GraphQL backends optimized for low-latency mobile device requests, battery efficiency, and offline-first cache synchronization.'
    },
    {
      title: 'Firebase & Cloud Push Infrastructure',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 36 L18 12 L24 22 L20 30 Z" fill="currentColor" opacity="0.2" />
          <path d="M36 36 L24 10 L20 18 L26 28 Z" />
          <path d="M12 36 L24 42 L36 36 Z" fill="currentColor" />
        </svg>
      ),
      desc: 'Scalable cloud backends providing instant real-time data sync, secure OAuth social logins, analytics telemetry, crash reporting, and targeted push notification workflows.'
    }
  ];

  // 2. Custom Mobile App Services Cards (6 cards matching reference)
  const customAppServicesData = [
    {
      title: 'iOS App Development Consulting',
      desc: 'Our iOS specialists evaluate your product idea, determine the optimal architectural paradigm (SwiftUI vs. UIKit), maximize Apple ecosystem integrations (Apple Pay, HealthKit, Siri Shortcuts), and guide you past stringent App Store compliance hurdles.'
    },
    {
      title: 'Android App Development Consulting',
      desc: 'Formulate high-performance Android mobile strategies utilizing modern Kotlin and Jetpack Compose architectures, ensuring seamless responsiveness and zero battery drain across thousands of distinct Android devices and OS versions.'
    },
    {
      title: 'Cross-Platform App Consulting',
      desc: 'Maximize code reusability and accelerate your time-to-market with Flutter or React Native. Our consultants evaluate when a unified cross-platform codebase makes technical, performance, and budgetary sense over separate native apps.'
    },
    {
      title: 'Enterprise Mobility & MDM Advisory',
      desc: 'Empower enterprise workforces with secure mobile workflows, Mobile Device Management (MDM), enterprise Single Sign-On (SSO), granular role-based access, and banking-grade end-to-end data encryption protocols.'
    },
    {
      title: 'Mobile UI/UX Strategy & Prototyping',
      desc: 'Transform complex user requirements into elegant, intuitive mobile user interfaces. We conduct interactive wireframing, clickable design prototypes, user journey mapping, and usability testing before code implementation begins.'
    },
    {
      title: 'App Modernization & Legacy Migration',
      desc: 'Refactor brittle legacy mobile codebases, eliminate technical debt, migrate from deprecated architectures (such as Objective-C to modern Swift or Java to Kotlin), and drastically enhance app startup time, stability, and retention.'
    }
  ];

  // 3. 4 Light Blue Expertise Cards (matching reference layout)
  const appConsultingExpertiseCards = [
    {
      title: 'Mobile Discovery & Product Roadmapping',
      desc: 'Deep-dive discovery workshops to validate market viability, define feature hierarchies (MVP vs. Phase 2), user personas, and a realistic development timetable.',
      link: '/services/mobile-app-discovery'
    },
    {
      title: 'Tech Stack & Architecture Advisory',
      desc: 'Unbiased strategic recommendations on whether Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native) best satisfies your performance and scalability needs.',
      link: '/services/mobile-architecture-consulting'
    },
    {
      title: 'Mobile Security & Regulatory Compliance',
      desc: 'Exhaustive security audits guarding against OWASP Mobile Top 10 vulnerabilities, API tampering, data leakage, and compliance with HIPAA, GDPR, and PCI-DSS.',
      link: '/services/mobile-security-audits'
    },
    {
      title: 'App Store Launch & ASO Strategy',
      desc: 'End-to-end guidance for App Store and Google Play submissions, keyword indexing, conversion rate optimization, and automated crash telemetry.',
      link: '/services/aso-launch-strategy'
    }
  ];

  // 4. Technology Stack Rows
  const appServiceTechStack = [
    {
      category: 'iOS Ecosystem',
      pills: ['Swift', 'SwiftUI', 'Objective-C', 'Xcode', 'CocoaPods', 'Combine', 'CoreData', 'TestFlight', 'ARKit']
    },
    {
      category: 'Android Ecosystem',
      pills: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Room DB', 'Coroutines', 'Gradle', 'Retrofit', 'Dagger Hilt']
    },
    {
      category: 'Cross-Platform Frameworks',
      pills: ['Flutter', 'React Native', 'Dart', 'Ionic', 'Capacitor', 'Expo', 'Xamarin']
    },
    {
      category: 'Mobile Cloud & Backend',
      pills: ['Firebase', 'AWS Amplify', 'Node.js', 'GraphQL', 'Supabase', 'Express.js', 'Google Cloud', 'RESTful APIs']
    },
    {
      category: 'Mobile DevOps & Automation',
      pills: ['Fastlane', 'Bitrise', 'GitHub Actions', 'App Center', 'Jenkins', 'SonarQube', 'Docker']
    },
    {
      category: 'Testing & Quality Assurance',
      pills: ['Appium', 'XCTest', 'Espresso', 'BrowserStack', 'Postman', 'Katalon Studio']
    }
  ];

  // 5. FAQ List tailored specifically for Mobile App Development Consulting
  const appConsultingFaqList = [
    {
      id: 1,
      question: 'Why should businesses hire a mobile app development consultant before building?',
      answer: 'Mobile app consulting de-risks your investment by validating market feasibility, defining an optimal tech stack, architecting scalable backend systems, and establishing an accurate budget and roadmap before costly development begins.'
    },
    {
      id: 2,
      question: 'How do your consultants help choose between Native and Cross-Platform development?',
      answer: 'We analyze your required device integrations, performance needs, launch timeline, and budget. If your app requires heavy hardware access or intensive 3D/AR graphics, we recommend Native (Swift/Kotlin). For faster time-to-market and shared codebases, we evaluate Flutter or React Native.'
    },
    {
      id: 3,
      question: 'How do app consultants ensure mobile application security and compliance?',
      answer: 'We perform end-to-end security audits following OWASP Mobile Security standards, verify API authentication tokens, secure local data storage, and ensure full compliance with GDPR, HIPAA, and PCI-DSS requirements.'
    },
    {
      id: 4,
      question: 'Can you assess and modernize our existing, underperforming mobile app?',
      answer: 'Yes. We conduct complete code audits, latency and crash diagnostics, UI/UX usability assessments, and formulate step-by-step refactoring roadmaps to elevate app performance and user retention.'
    },
    {
      id: 5,
      question: 'What deliverables will we receive from a mobile app consulting engagement?',
      answer: 'Deliverables include a Product Requirement Document (PRD), Architecture Blueprint, Wireframes and Clickable Prototypes, Tech Stack Recommendations, Security & Compliance Audit, and a Phased Development Roadmap.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="App Development Consulting Services | Mobile App Strategy | Firevy.co"
        description="Accelerate your mobile product journey with Firevy's App Development Consulting Services. Native iOS, Android, Flutter, React Native, UI/UX audits, and scalable cloud architecture."
        keywords="app development consulting, mobile app consulting, mobile app strategy, iOS consulting, Android consulting, Flutter consulting, React Native advisory, mobile product roadmap"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT 1:1 REFERENCE IMAGE 1) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-14 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15]">
                App Development Consulting <br className="hidden sm:inline" />
                Services in USA
              </h1>

              <p className="text-slate-600 max-w-xl text-sm sm:text-[15px] leading-relaxed font-normal">
                Our app development consulting is geared toward the business needs of startups, small and medium-sized businesses, and large, well-established Best app consultants for startups companies.
              </p>

              {/* CTA Button matching reference */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-sm hover:shadow-md transform active:scale-95 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Hero Meeting Vector Illustration (Exact 1:1 Image_1.svg from reference) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[580px] flex justify-center">
                <img
                  src="/images/sapphire_mobile_app_development_company_in_usa/Image_1.svg"
                  alt="App Development Consulting Services Team"
                  className="w-full h-auto object-contain max-h-[360px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO) */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP-NOTCH MOBILE APP SERVICES AND CONSULTING COMPANY (1:1 REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[580px] rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/app_consulting_office.jpg"
                  alt="Mobile App Development Strategy Meeting"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200/60 bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/c_sharp_expertise_illustration.png";
                  }}
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-wider border border-blue-200/60">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Strategy & Engineering</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Top-Notch Mobile App Development Consulting Company
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                In today's fast-moving mobile landscape, having an intuitive, lightning-fast mobile application is the definitive cornerstone of consumer engagement and business agility. As a premier app development consulting firm, Firevy partners with ambitious startups and Fortune 500 enterprises to conceptualize, design, and architect custom mobile solutions that drive market growth.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Our seasoned mobile strategists bridge the divide between innovative business visions and robust technical realities. From selecting the ideal tech stack to optimizing App Store performance and cloud backend architecture, we safeguard your product investments against costly dead-ends.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Product Discovery & Market Feasibility',
                  'Native (Swift/Kotlin) vs. Cross-Platform Evaluation',
                  'UI/UX User Journey Mapping & Audits',
                  'Enterprise Security, OWASP & Compliance',
                  'High-Concurrency Microservices Backends',
                  'App Store Optimization (ASO) & Telemetry'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. CUSTOM MOBILE APP STRATEGY ENGINEERED FOR ROI (1:1 REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-wider border border-blue-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Mobile Architecture</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Custom Mobile App Development Consulting for Modern Businesses
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Building a truly viral, revenue-generating mobile application requires much more than just code. It demands comprehensive market analysis, rigorous user persona mapping, and high-resilience architecture that scales effortlessly during high-volume spikes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#005F96]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Native & Hybrid Guidance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Unbiased advice on Swift, Kotlin, Flutter, and React Native to balance performance with speed-to-market.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#005F96]">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Cloud & API Synchronization</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Event-driven GraphQL and REST pipelines engineered for battery efficiency and offline data sync.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#005F96]">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">OWASP Mobile Security</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero-Trust token security, biometric encryption, and HIPAA/GDPR regulatory compliance auditing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#005F96]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">ASO & User Retention</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Conversion-optimized App Store positioning, user onboarding funnels, and real-time crash monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Mobile Feature Highlight */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[480px] bg-gradient-to-br from-[#005F96] to-[#003859] rounded-2xl p-8 text-white shadow-xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-blue-200 font-bold">Firevy Mobile Blueprint</span>
                  <h3 className="text-2xl font-black">99.9% Crash-Free Rate & Sub-1s Launch Time</h3>
                  <p className="text-xs text-blue-100/90 leading-relaxed">
                    Our consulting methodology guarantees production apps built to enterprise benchmarks with seamless UX.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between border border-white/10">
                    <span className="text-xs font-semibold">Discovery & Architecture Blueprint</span>
                    <span className="text-xs font-bold text-emerald-300">Phase 1</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between border border-white/10">
                    <span className="text-xs font-semibold">Interactive UI/UX Clickable Prototypes</span>
                    <span className="text-xs font-bold text-emerald-300">Phase 2</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between border border-white/10">
                    <span className="text-xs font-semibold">CI/CD Pipeline & Automated Test Harness</span>
                    <span className="text-xs font-bold text-emerald-300">Phase 3</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between border border-white/10">
                    <span className="text-xs font-semibold">App Store & Play Store Global Launch</span>
                    <span className="text-xs font-bold text-emerald-300">Phase 4</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/15 text-xs text-blue-100">
                  <span>Average Time-to-Market Reduction</span>
                  <span className="font-extrabold text-white text-base">Up to 45%</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER (AWARDS RIBBON) */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. BRIEF INTRODUCTION (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Brief Introduction
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Card: 100% Tailored Advisory */}
            <div className="lg:col-span-5">
              <div className="bg-[#EDF6FC] rounded-2xl p-8 border border-blue-100/90 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#005F96] shadow-xs border border-blue-200/50">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Custom App Development Strategy
                  </h3>
                </div>

                <div className="relative z-10 pt-6 border-t border-blue-200/50 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Firevy Mobile Framework</span>
                  <span className="text-[#005F96]">100% Tailored</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Copy */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                As a leading App Development Consulting Firm, our endeavor assists customers in selecting both cost- and time-efficient mobile solutions while avoiding the pitfalls associated with fleeting technological hypes. Because we base every architectural recommendation on our deep understanding of the global app marketplace, you can launch with absolute confidence knowing our Mobile Business Consultants have vetted every line of your roadmap.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Our Mobile Consulting team continually monitors emerging SDKs, security benchmarks, and platform guidelines across Apple iOS, Google Android, and cross-platform ecosystems. Because our Mobile Engineers hold certifications across all major mobile frameworks, you can be assured the caliber of our App Consulting delivers measurable business outcomes and high user retention.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING-EDGE TECHNOLOGIES WE USE (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Cutting-Edge Technologies Firevy Use for Mobile App Development
            </h2>
          </div>

          {/* Slider Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cuttingEdgeMobileTech
              .slice(cuttingEdgeIndex, cuttingEdgeIndex + 3)
              .concat(
                cuttingEdgeIndex + 3 > cuttingEdgeMobileTech.length
                  ? cuttingEdgeMobileTech.slice(0, (cuttingEdgeIndex + 3) % cuttingEdgeMobileTech.length)
                  : []
              )
              .slice(0, 3)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#EBF5FB] p-7 sm:p-8 rounded-2xl border border-blue-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-blue-200/60">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Arrows (← →) */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <button
              onClick={() =>
                setCuttingEdgeIndex((prev) =>
                  prev === 0 ? cuttingEdgeMobileTech.length - 1 : prev - 1
                )
              }
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-[#005F96] hover:bg-[#005F96] hover:text-white flex items-center justify-center transition-all text-slate-700 shadow-sm active:scale-95"
              aria-label="Previous Technology"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCuttingEdgeIndex((prev) =>
                  prev >= cuttingEdgeMobileTech.length - 1 ? 0 : prev + 1
                )
              }
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-[#005F96] hover:bg-[#005F96] hover:text-white flex items-center justify-center transition-all text-slate-700 shadow-sm active:scale-95"
              aria-label="Next Technology"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 8. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 9. CUSTOM MOBILE APP SERVICE (IMAGE 2) */}
      {/* ========================================================================= */}
      <CustomItServicesSection
        companyName="Firevy"
        title="Firevy Custom Mobile App Consulting Services"
        subtitle="Firevy developers thrive at engineering compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Firevy provides complete customized Mobile App Services to meet your business requirements."
        services={customAppServicesData}
      />

      {/* ========================================================================= */}
      {/* 10. SECTORS THRIVING THROUGH BESPOKE MOBILE APP DEVELOPMENT (IMAGE 3) */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke Mobile App Development" />

      {/* ========================================================================= */}
      {/* 11. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (IMAGE 4) */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Leverage Mobile App Development" />

      {/* ========================================================================= */}
      {/* 12. EXPERTISE IN OUR APP CONSULTING SERVICES (IMAGE 5) */}
      {/* ========================================================================= */}
      <ExpertiseItConsultingSection
        title="Expertise In Our Mobile App Consulting Services"
        subtitle="Our Mobile App Development Consulting Services are top-notch in quality. Some of our key practice domains include:"
        cards={appConsultingExpertiseCards}
      />

      {/* ========================================================================= */}
      {/* 13. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 14. WHAT OUR CLIENTS SAY */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 15. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 16. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK THAT MOBILE APP DEVELOPERS USE PROFICIENTLY */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Firevy Mobile App Consultants Use Proficiently"
        rows={appServiceTechStack}
      />

      {/* ========================================================================= */}
      {/* 18. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 19. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 20. EXPLORE THE TRANSFORMATIVE IMPACT OF MOBILE APP DEVELOPMENT */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Explore The Transformative Impact Of Mobile App Development On Your Business Success"
      />

      {/* ========================================================================= */}
      {/* 21. ABOUT US */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 22. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 23. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 24. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 25. OUR STORY, THEIR WORDS */}
      {/* ========================================================================= */}
      <FeaturedStoryVideoSection companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 26. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={appConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We Listen To Your App Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mentioned Below"
      />

      {/* ========================================================================= */}
      {/* 27. WHAT SETS US APART AS APP DEVELOPMENT CONSULTING? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As App Development Consulting Company?"
        subtitle="Being unique is our quality! Firevy Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 28. OUR RECENT BLOGS (TAILORED MOBILE APP INSIGHTS) */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 29. CONSULTATION BOOKING & DISCOVERY FORM SECTION */}
      {/* ========================================================================= */}
      <section id="consultation-form" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(0,95,150,0.4),rgba(0,0,0,0))] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Schedule Your Free 30-Minute Mobile App Consultation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Discuss your product vision with our Principal Mobile Strategists. We'll evaluate your feasibility, outline architectural options, and provide actionable next steps under a mutual NDA.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Your request has been received. One of our Senior Mobile Solution Architects will review your inquiry and reach out within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Corp"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Consulting Focus</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    >
                      <option>Mobile App Strategy & Discovery</option>
                      <option>Native vs Cross-Platform Evaluation</option>
                      <option>iOS & Android Codebase Audit</option>
                      <option>UI/UX Design & Prototyping</option>
                      <option>Enterprise Mobility & Security</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Estimated Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                    >
                      <option>&lt; $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Overview & Objectives *</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your app concept, target platforms, timeline, and current architectural bottlenecks..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#005F96]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
                >
                  Book 30-Minute Strategy Session
                </button>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 30. HAVE MOBILE APP CONSULTING CHALLENGE TO ADDRESS (CTA BANNER) */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Mobile App Development Consulting Challenge To Address ?"
        subtitle="Get access to top Mobile App Development consultants to transform your ideas into a high-performing application."
        buttonText="Hire Now"
      />

      {/* ========================================================================= */}
      {/* 31. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default AppDevelopmentConsultingService;
