import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutUsStats from './AboutUsStats';
import TransformativeImpactSection from './TransformativeImpactSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import MobileAppProficientTechStackSection from './MobileAppProficientTechStackSection';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import HybridAppCuttingEdgeTechnologiesSection from './HybridAppCuttingEdgeTechnologiesSection';
import ProudAwardsBanner from './ProudAwardsBanner';
import HybridAppExpertiseServices from './HybridAppExpertiseServices';
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

  // 6 Benefits of Hybrid App Development (1:1 Reference Match)
  const benefitsItems = [
    {
      title: 'Cross-Platform Support',
      desc: 'Hybrid applications use a single codebase to operate on iOS, Android, and Windows. Instead of designing native applications, hybrid app development services guarantee a consistent user experience across platforms, saving time and money.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="13" height="11" rx="2" />
          <rect x="9" y="8" width="13" height="13" rx="2" />
          <path d="M13 15l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Cost-effective Development',
      desc: 'Hybrid app development minimizes development and maintenance resources by employing a single codebase for multiple platforms. This reduces the need for platform-specific development teams, saving money.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Quicker Market Entry',
      desc: 'Hybrid app development lets developers build code once and distribute it across platforms, speeding up launch. Your application can reach the market faster with this expedited development cycle, enabling you to maximize possibilities and meet market expectations.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
          <path d="M16 3l5 5M21 3v5h-5" />
        </svg>
      )
    },
    {
      title: 'Access Native Features',
      desc: 'Plugins and APIs let hybrid applications use cameras, GPS and push notifications. Using hybrid app development services, your app may fully use these inherent features, improving functionality and user pleasure.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <circle cx="12" cy="10" r="3" />
          <path d="M14.5 12.5L17 15" />
        </svg>
      )
    },
    {
      title: 'Easier Maintenance',
      desc: 'Hybrid apps are easier to maintain since updates and bug fixes are pushed to one codebase and delivered across multiple platforms. This single approach streamlines maintenance, lowers costs, and gives all users the newest features and upgrades.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <path d="M14.7 9.3a2 2 0 0 0-2.8-2.8l-4 4 2.8 2.8 4-4z" />
        </svg>
      )
    },
    {
      title: 'User Experience Consistency',
      desc: 'HTML5, CSS, and JavaScript allow developers to construct a uniform, user-friendly interface. Hybrid App Development Services improve client happiness and retention by providing a smooth and engaging user experience.',
      icon: (
        <svg className="w-6 h-6 text-[#0084D1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h4" />
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

      {/* 7.5 SECTION: Meet Sapphire's Exceptional Team of Seasoned Experts */}
      <SapphireSeasonedExpertsSection />

      {/* 7.6 SECTION: Industry-Focused Insights To Elevate Your Business */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Mobile App Development" />

      {/* 7.7 SECTION: About Us Stats */}
      <AboutUsStats companyName="Sapphire" />

      {/* 7.8 SECTION: Explore The Transformative Impact Of Hybrid App On Your Business Success */}
      <TransformativeImpactSection title="Explore The Transformative Impact Of Hybrid App On Your Business Success" />

      {/* 7.9 SECTION: Sapphire's Comprehensive Suite of Mobile App Development Services */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
              Sapphire’s Comprehensive Suite of Mobile App Development Services
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
              Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Mobile App UI/UX Design',
                desc: 'By considering market trends and creating best practices that provide an enhanced app user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
              },
              {
                title: 'MVP Development',
                desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
              },
              {
                title: 'Custom App Development',
                desc: "Whether you're developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd."
              },
              {
                title: 'Startup App Development',
                desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
              },
              {
                title: 'Enterprise App Development',
                desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
              },
              {
                title: 'Embedded IoT App Development',
                desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-start text-left shadow-md hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <h3 className="font-extrabold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug font-sans">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7.10 SECTION: Sectors Thriving Through Sapphire’s Bespoke Hybrid App Development Services */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke Hybrid App Development Services" />

      {/* 8. SECTION: Success Stories */}
      <SuccessStoriesSection category="general" />

      {/* 8.5 SECTION: Technology Stack That Sapphire Mobile Developers Use Proficiently */}
      <MobileAppProficientTechStackSection />



      {/* 10. SECTION: Proud To Have Picked These Up Along The Way */}
      <ProudAwardsBanner />

      {/* 11. SECTION: Benefits of Hybrid App Development (1:1 Reference Match) */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100 overflow-hidden">
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
              Benefits of Hybrid App Development
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
              Hybrid App Development Services combine the best of online and native apps to create cross-platform solutions. Benefits of Hybrid App Development Services:
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto"
          >
            {benefitsItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left space-y-4 group cursor-default"
              >
                <div className="space-y-4">
                  {/* Icon with light cyan/blue rounded square container */}
                  <div className="w-12 h-12 rounded-[12px] bg-[#EBF6FC] text-[#0084D1] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-[800] text-slate-950 font-sans leading-snug group-hover:text-[#005F96] transition-colors">
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

      {/* 11.5 SECTION: The Expertise In Our Hybrid App Development Services (1:1 Reference Match) */}
      <HybridAppExpertiseServices />

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
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto font-normal">
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



      {/* 24. SECTION: Have Hybrid App Development Challenge To Address ?? (1:1 Reference Match) */}
      <section className="relative w-full max-w-full py-10 sm:py-12 lg:py-14 bg-[#005F96] text-white text-center font-sans overflow-hidden">
        {/* Background Floating Geometric Rounded Squares / Rectangles Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
          <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
          <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
          <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3.5">
          <h2 className="text-white tracking-tight font-[800] text-2xl sm:text-3xl lg:text-[34px] leading-tight">
            Have Hybrid App Development Challenge To Address ??
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
            Get access to top Hybrid App development to transform your ideas into a robust application.
          </p>

          <div className="pt-3">
            <a
              href="#quote-form"
              className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-bold text-xs sm:text-sm px-8 py-2.5 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HybridAppDevelopmentService;
