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
  Check
} from 'lucide-react';

export const KotlinAppDevelopmentService = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Kotlin Squad',
    appType: 'Custom Kotlin App Development',
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

  // 6 Expertise Items for Kotlin App Development
  const expertiseItems = [
    {
      title: 'Custom Kotlin App Development',
      desc: 'Brands can optimize their return on investment and improve their mobile engagement with bespoke Kotlin application development. We engineer high-performance, native Android and multiplatform solutions tailored to your particular business specifications.',
      badgeBg: 'bg-[#F3E8FF]',
      badgeColor: 'text-[#9333EA]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          <path d="M8 6h8M8 10h5" />
        </svg>
      )
    },
    {
      title: 'Kotlin App Support & Maintenance',
      desc: 'We not only develop top-tier Kotlin applications, but we also provide comprehensive 24/7 technical support, code refactoring, continuous OS compatibility updates, and proactive performance tuning.',
      badgeBg: 'bg-[#DCFCE7]',
      badgeColor: 'text-[#16A34A]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M15 11a3 3 0 0 0-6 0" />
        </svg>
      )
    },
    {
      title: 'Jetpack Compose UI/UX Design',
      desc: 'Our primary goal is delivering fluid, modern, declarative Android interfaces using Jetpack Compose and Material 3 design systems that keep users captivated, engaged, and loyal to your brand.',
      badgeBg: 'bg-[#FFEDD5]',
      badgeColor: 'text-[#EA580C]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security & Clean Architecture',
      desc: 'We enforce enterprise-grade data encryption, biometric authentication, secure keystore storage, and zero-trust backend communication adhering to MVVM/MVI Clean Architecture standards.',
      badgeBg: 'bg-[#FEF9C3]',
      badgeColor: 'text-[#CA8A04]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M10 11V9a2 2 0 1 1 4 0v2" />
        </svg>
      )
    },
    {
      title: 'Java to Kotlin Migration & Modernization',
      desc: 'App modernization brings immense agility and reliability. Our team of senior Kotlin specialists seamlessly migrates legacy Java codebases to idiomatic Kotlin with zero downtime and improved performance.',
      badgeBg: 'bg-[#FCE7F3]',
      badgeColor: 'text-[#DB2777]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      )
    },
    {
      title: 'Kotlin Multiplatform (KMM) Solutions',
      desc: 'Share common business logic across Android, iOS, and Web seamlessly using Kotlin Multiplatform while retaining 100% native UI performance and platform-specific hardware access.',
      badgeBg: 'bg-[#E0F2FE]',
      badgeColor: 'text-[#0284C7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Kotlin App Development
  const benefitsItems = [
    {
      title: 'Concise & Expressive Code',
      desc: 'Kotlin reduces boilerplate by up to 40% compared to standard Java, allowing developers to build features faster, maintain cleaner architecture, and accelerate time-to-market.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Null Safety & Crash Prevention',
      desc: "Kotlin's built-in type system eliminates NullPointerExceptions, drastically increasing application stability and ensuring a smooth, crash-free experience for end users.",
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Seamless Java Interoperability',
      desc: 'Kotlin is 100% interoperable with Java, allowing businesses to leverage existing libraries, backend frameworks, and tools without rewriting legacy code from scratch.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'High-Performance Coroutines',
      desc: 'Coroutines provide lightweight, non-blocking asynchronous programming for effortless background task management, API calls, and smooth 60fps/120fps animations.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform Code Sharing (KMM)',
      desc: 'Kotlin Multiplatform Mobile empowers your team to write single business logic once and deploy across Android and iOS, reducing overall development cost and QA overhead.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'Google Official Recommended Language',
      desc: 'As Google’s preferred language for Android, Kotlin enjoys first-class support in Android Studio, Jetpack libraries, and continuous future-proof framework enhancements.',
      icon: (
        <svg className="w-7 h-7 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    }
  ];

  // 4 Business Friendly Hiring Models
  const hiringModels = [
    {
      title: 'Fixed Price',
      desc: "If you represent a company with a well-defined project scope and clear roadmap, our fixed-price model ensures transparent delivery within guaranteed timelines and budget.",
      badgeBg: 'bg-[#f3e8ff]',
      badgeColor: 'text-[#7c3aed]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      points: [
        'Optimal flexibility',
        'Milestone-based delivery',
        'Clearly defined scope',
        'Complete control over budget'
      ]
    },
    {
      title: 'Time & Material',
      desc: "If you represent an evolving business with dynamic feature requirements, our hourly time and material model offers maximum agile flexibility.",
      badgeBg: 'bg-[#dcfce7]',
      badgeColor: 'text-[#16a34a]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      points: [
        'No hidden costs',
        'Pay per tracked hour',
        'Bi-weekly sprint reviews',
        'High adaptability to change'
      ]
    },
    {
      title: 'Dedicated Team',
      desc: "Hire dedicated senior Kotlin architects and developers focused 100% on your digital product as an integrated extension of your internal tech squad.",
      badgeBg: 'bg-[#ffedd5]',
      badgeColor: 'text-[#ea580c]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      points: [
        'Direct resource management',
        '160 hours monthly per developer',
        'Transparent daily standups',
        'Dedicated senior tech lead'
      ]
    },
    {
      title: 'Bucket Model',
      desc: 'Ideal for continuous maintenance, incremental bug fixes, and sporadic updates. Pre-purchase a flexible block of hours that rollover across months.',
      badgeBg: 'bg-[#e0f2fe]',
      badgeColor: 'text-[#0284c7]',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      points: [
        'Direct resource monitoring',
        'Zero long-term commitment',
        'Flexible rollover hours',
        'Rapid SLA response'
      ]
    }
  ];

  // Tech Categories for Kotlin App Development
  const techCategories = {
    backend: [
      { name: 'Ktor & Spring Boot', desc: 'Asynchronous microservices and lightweight RESTful APIs built with Kotlin.' },
      { name: 'Kotlin Coroutines & Flow', desc: 'Modern reactive streaming architecture and structured concurrency.' },
      { name: 'GraphQL & gRPC', desc: 'High-speed data fetching protocols minimizing network latency.' }
    ],
    frontend: [
      { name: 'Jetpack Compose', desc: 'Modern declarative UI toolkit accelerating Android screen development.' },
      { name: 'Kotlin Multiplatform (KMM)', desc: 'Shared cross-platform logic across Android and iOS ecosystems.' },
      { name: 'Material Design 3', desc: 'Google dynamic theming, responsive typography, and fluid gestures.' }
    ],
    database: [
      { name: 'Room & SQLite', desc: 'Type-safe Android ORM abstraction providing robust offline persistence.' },
      { name: 'DataStore & Realm', desc: 'Modern reactive preferences storage and encrypted client databases.' }
    ],
    devops: [
      { name: 'GitHub Actions & Bitrise', desc: 'Automated CI/CD pipelines building APKs, AABs, and running unit tests.' },
      { name: 'Firebase & Play Console', desc: 'Real-time crashlytics, remote config, and staged production rollouts.' }
    ],
    testing: [
      { name: 'JUnit 5 & MockK', desc: 'Comprehensive unit testing and idiomatic Kotlin mocking frameworks.' },
      { name: 'Espresso & Compose UI Test', desc: 'Automated on-device UI testing ensuring flawless user interactions.' }
    ],
    pm: [
      { name: 'Jira & Agile Sprints', desc: 'Transparent two-week sprint cycles with direct architect collaboration.' }
    ]
  };

  // Official Kotlin FAQs
  const kotlinFaqs = [
    {
      q: '1. Why is Kotlin preferred for Android app development?',
      a: 'Kotlin is Google’s officially preferred language for Android. It offers concise syntax, null safety to prevent runtime crashes, seamless Java interoperability, and modern coroutines for smooth asynchronous performance.'
    },
    {
      q: '2. What is Kotlin Multiplatform Mobile (KMM)?',
      a: 'Kotlin Multiplatform Mobile (KMM) allows developers to share unified business logic, networking, and data storage across Android and iOS while writing native UI layers (Jetpack Compose for Android and SwiftUI for iOS).'
    },
    {
      q: '3. Can you migrate an existing Java Android application to Kotlin?',
      a: 'Yes! Due to 100% Java-Kotlin interoperability, we can migrate your application progressively module-by-module without disrupting production stability or requiring a full rewrite.'
    },
    {
      q: '4. How long does it take to develop a custom Kotlin app?',
      a: 'A standard MVP or mid-level application typically takes 6 to 12 weeks. Large-scale enterprise applications with multi-tier backend microservices usually require 3 to 6 months.'
    },
    {
      q: '5. Do you handle Google Play Store submission and review compliance?',
      a: 'Yes! We handle the end-to-end Google Play Store release process, including Play Console setup, App Bundle optimization, privacy policy compliance, and ongoing store updates.'
    },
    {
      q: '6. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict non-disclosure agreements before commencing any project to guarantee 100% intellectual property ownership and data confidentiality.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Kotlin App Development Services | Top Kotlin Developers USA | Firevy.co"
        description="Top-rated Kotlin App Development Company. Build scalable Android apps, Jetpack Compose UIs, and Kotlin Multiplatform Mobile (KMM) solutions with Firevy.co."
        canonical="/services/kotlin-app-development"
      />

      {/* 1. Sapphire Light Hero Banner (Exact 1:1 Match) */}
      <SapphireLightHeroBanner
        title="Kotlin App Development Company in USA"
        subtitle="Kotlin is Google’s official language for developing Android apps because it is a brilliantly designed and fully developed programming language that will make the development of Android native apps more efficient and more enjoyable."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="kotlin"
      />

      {/* 2. Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* 3. SECTION: Providing Kotlin Development Services Globally (Exact 1:1 Match) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Providing Services Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/kotlin_globally_services.jpg"
                  alt="Providing Kotlin Development Services Globally"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Providing Kotlin Development Services Globally
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                It is undoubtedly a leading-edge programming language suitable for developing server-side web apps. It is capable of building Android applications that are both inspirational and ready for the future. We have a strong team of Kotlin developers proficient in Kotlin development services and have a wealth of knowledge and expertise in creating specialized applications that are pleasant to users.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION: Brief About Our Kotlin Development Services (Exact 1:1 Match) */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Brief Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-slate-900 tracking-tight leading-[1.25]">
                Brief About Our Kotlin Development Services
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our passionate and committed Kotlin developers are experts in creating cutting-edge Kotlin apps using various development environments and tools. They are here to help you transform your ideas into a successful company. You may design dependable native apps that are simple to keep up with <strong className="text-[#005F96] font-bold">cross platform app development services</strong> of our skilled Kotlin developers. We have the expertise to advance the development of your Android app one step further using Kotlin, an integrated development environment.
              </p>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Have experience working with payment gateways in various countries and rigorously test all modules to guarantee that end users will not experience payment failure. We have a staff of java development in charge of supervising the development of all application app areas.
              </p>
            </div>

            {/* Right Column: Brief Solutions Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] p-2 flex items-center justify-center">
                <img
                  src="/images/kotlin_brief_services.jpg"
                  alt="Brief About Our Kotlin Development Services"
                  className="w-full h-auto max-w-[460px] object-contain drop-shadow-sm mix-blend-multiply"
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

                {/* Track 2 Badges (Duplicate for Seamless Infinite Loop) */}
                <div className="flex items-center space-x-8 sm:space-x-10 pr-8 sm:pr-10 shrink-0" aria-hidden="true">
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
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. SECTION: Get A 100% Customizable Kotlin App Development By Experts */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get A 100% Customizable Kotlin App Development By Experts
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
                Building Scalable, Secure Android &amp; Kotlin Apps
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                We are a leading Kotlin app development company supported by a team of experienced and certified Kotlin architects. Our consultants deliver robust native Android and Kotlin Multiplatform services across all screen sizes and device types. To elevate your application to an enterprise standard, we leverage cutting-edge capabilities including Jetpack Compose, Coroutines, Flow, Dagger-Hilt, and KMM.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                The applications we engineer fulfill all your business objectives while maintaining top-notch performance, security, and fluid usability without sacrificing any architectural elegance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. SECTION: Our Premium Services */}
      <PremiumServicesGrid />

      {/* 8. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* 9. SECTION: The Expertise Of Our Kotlin App Developers */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-[#0F172A] tracking-tight mb-3 font-sans">
              The Expertise Of Our Kotlin App Developers
            </h2>
            <p className="text-sm sm:text-[15.5px] font-[400] text-[#475569] leading-relaxed font-sans max-w-3xl mx-auto">
              Maximize your business efficiency and speed-to-market by leveraging our cutting-edge Kotlin application engineering services.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto mb-10 sm:mb-12"
          >
            {expertiseItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start text-left space-y-4 group cursor-default min-h-[320px]"
              >
                {/* Color Badge Icon */}
                <div className={`w-12 h-12 rounded-[12px] ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-[18px] sm:text-[19px] font-[900] text-[#0F172A] font-sans leading-snug group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] sm:text-[14px] text-[#475569] font-[400] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Centered 'Get A Free Quote For Your Project' Sapphire Blue Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004d7a] text-white font-[800] text-[15px] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </motion.div>
        </Container>
      </section>

      {/* 10. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits Of Kotlin App Development */}
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
              Benefits Of Kotlin App Development
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
              Businesses can achieve faster feature rollouts, superior code stability, and enhanced user engagement by developing applications in Kotlin. Six significant advantages are:
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

      {/* 12. SECTION: Business Friendly Hiring Models */}
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
              We offer four flexible hiring models designed to suit your project scope, timeline, and budgetary goals.
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
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from Kotlin architecture wireframes to Jetpack Compose UI development, automated unit testing, and Google Play Store deployment." />

      {/* 15. SECTION: Our Story, Their Words */}
      <OurStoryTheirWordsSection />

      {/* 16. SECTION: Trusted Brands */}
      <TrustedBrandsGrid />

      {/* 17. SECTION: Success Matrix */}
      <SuccessMatrix />

      {/* 18. SECTION: Sapphire Tech Stack Grid */}
      <SapphireTechStackGrid domainName="kotlin app" richTechCategories={techCategories} />

      {/* 19. SECTION: Featured In Media */}
      <FeaturedInBrandsSection />

      {/* 20. SECTION: Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* 21. SECTION: Frequently Asked Questions */}
      <SapphireFaqSection faqList={kotlinFaqs} />

      {/* 22. SECTION: Our Recent Blogs */}
      <section className="py-16 sm:py-20 bg-[#f4f9fd] text-slate-900 font-sans text-left border-b border-slate-200/80 overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-slate-950 tracking-tight mb-3 font-sans">
              Our Recent Blogs
            </h2>
            <p className="text-base sm:text-[17.5px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Stay ahead with curated technical insights, architecture patterns, and industry trends from our senior engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-[16px] overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src="/images/iwatch_blog_1.png"
                  alt="Kotlin Coroutines & Jetpack Compose in Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Kotlin Coroutines &amp; Jetpack Compose in Production
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  How modern declarative UI and non-blocking asynchronous coroutines optimize battery life and deliver fluid 120Hz frame rates.
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
                  alt="Kotlin Multiplatform Mobile (KMM) Architecture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Kotlin Multiplatform Mobile (KMM) Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  A comprehensive guide to sharing cross-platform networking, domain logic, and offline storage between Android and iOS.
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
                  alt="Migrating Enterprise Java Codebases to Kotlin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <h3 className="text-lg font-[800] text-slate-950 group-hover:text-[#005F96] transition-colors leading-snug">
                  Migrating Enterprise Java Codebases to Kotlin
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Step-by-step strategies for seamless Java-to-Kotlin modernization with zero regression and improved memory footprints.
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
              <h3 className="text-xl font-[800] text-slate-950">Top 1% Vetted Engineers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work directly with senior Google-certified Kotlin architects and Android engineers with average 7+ years of mobile production experience.
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
              Schedule a 30-minute free consultation with our senior Kotlin architects to scope your architecture, timeline, and budget.
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

export default KotlinAppDevelopmentService;
