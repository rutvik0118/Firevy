import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import SuccessStories from './SuccessStories';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import KeyReasonsChooseFlutter from './KeyReasonsChooseFlutter';
import TopRatedFlutterShowcase from './TopRatedFlutterShowcase';
import FlutterTechStackSection from './FlutterTechStackSection';
import FlutterExpertiseServices from './FlutterExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidCompanyBenefits from './AndroidCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import AndroidComparativeAnalysis from './AndroidComparativeAnalysis';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import AndroidRecentBlogsSection from './AndroidRecentBlogsSection';
import AndroidWhatSetsUsApartSection from './AndroidWhatSetsUsApartSection';
import AndroidChallengeCtaBanner from './AndroidChallengeCtaBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import {
  Smartphone,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Tv,
  Tablet,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Bot,
  Sparkles,
  Search,
  Globe,
  Lock,
  Boxes
} from 'lucide-react';

export const FlutterAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [comboCarouselIndex, setComboCarouselIndex] = useState(0);
  const [isComboHovered, setIsComboHovered] = useState(false);
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);

  // Auto-scroll technology cards every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      setTechCarouselIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  // Auto-scroll technology combination cards every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isComboHovered) return;
    const interval = setInterval(() => {
      setComboCarouselIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isComboHovered]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Custom Android Application',
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
  };

  // 6 Core Android App Development Capabilities
  const androidFeatures = [
    {
      title: 'Custom Android App Development',
      desc: 'Bespoke Android apps designed from the ground up for high performance, smooth 60fps animations, and enterprise scalability.',
      icon: Smartphone
    },
    {
      title: 'Native Kotlin & Java Architecture',
      desc: 'Engineered using modern Android Jetpack libraries, Clean Architecture (MVVM/MVI), Coroutines, and Room database.',
      icon: Code2
    },
    {
      title: 'AI-Powered Smart Android Apps',
      desc: 'Integration of Google ML Kit, on-device AI inference, voice assistants, and computer vision models for smart user experiences.',
      icon: Bot
    },
    {
      title: 'Tablet, TV & Wearable Integration',
      desc: 'Multi-screen responsive apps optimized for Android Tablets, Android TV, Wear OS smartwatches, and foldable hardware.',
      icon: Tv
    },
    {
      title: 'Enterprise Mobility & Security',
      desc: 'End-to-end data encryption, biometric authentication, secure OAuth token storage, and Android Enterprise (MDM/EMM) integration.',
      icon: ShieldCheck
    },
    {
      title: 'Google Play Store Optimization & SLA',
      desc: 'Complete deployment assistance, compliance with Google Play Store policies, ASO, and 24/7 SLA maintenance support.',
      icon: Layers
    }
  ];

  // Android Tech Stack Grid
  const techCategories = {
    backend: [
      { name: 'Kotlin', desc: 'Google-preferred modern language for expressive, null-safe, and high-speed Android development.' },
      { name: 'Java', desc: 'Robust enterprise-grade language for legacy and large-scale Android SDK integrations.' },
      { name: 'Android Jetpack', desc: 'Suite of modern libraries including Navigation, ViewModel, LiveData, and Compose.' },
      { name: 'Jetpack Compose', desc: 'Modern declarative UI toolkit accelerating UI development with reactive state management.' },
      { name: 'Coroutines & Flow', desc: 'Asynchronous reactive programming managing smooth background threads and data streams.' }
    ],
    frontend: [
      { name: 'Retrofit & OkHttp', desc: 'Type-safe HTTP client with connection pooling, caching, and interceptors for API calls.' },
      { name: 'Dagger-Hilt', desc: 'Standard dependency injection framework for decoupled and highly testable Android architecture.' },
      { name: 'Room Database', desc: 'Robust SQLite abstraction layer providing offline data persistence and reactive Flow queries.' },
      { name: 'Google ML Kit', desc: 'On-device machine learning APIs for text recognition, barcode scanning, and face detection.' }
    ],
    database: [
      { name: 'Firebase', desc: 'Real-time database, Cloud Firestore, Cloud Messaging (FCM), and Crashlytics analytics.' },
      { name: 'Room DB (SQLite)', desc: 'Compile-time verified local database with fast caching and encrypted SQLCipher support.' },
      { name: 'Realm', desc: 'Ultra-fast reactive mobile database providing real-time data sync across devices.' },
      { name: 'DataStore', desc: 'Modern data storage solution replacing SharedPreferences with transactional safety.' }
    ],
    devops: [
      { name: 'Fastlane', desc: 'Automated build pipeline toolchain handling automated screenshots, signing, and beta distribution.' },
      { name: 'GitHub Actions', desc: 'Continuous integration running unit tests, lint checks, and automated APK/AAB builds.' },
      { name: 'Google Play Console', desc: 'Production deployment, staged rollouts, in-app updates, and crash diagnostics.' }
    ],
    testing: [
      { name: 'Espresso', desc: 'Native Android UI test framework verifying user flows, clicks, and transitions.' },
      { name: 'JUnit & Mockito', desc: 'Unit testing suite mocking dependencies and verifying ViewModel business logic.' },
      { name: 'Firebase Test Lab', desc: 'Cloud-based device matrix executing tests on hundreds of real physical Android devices.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management and user story tracking for sprint delivery.' },
      { name: 'Slack', desc: 'Direct real-time collaboration with dedicated Android engineers and project managers.' },
      { name: 'Figma', desc: 'Interactive Material You 3 UI/UX wireframes and prototype collaboration.' }
    ]
  };

  // Android FAQs
  const sapphireFaqs = [
    {
      q: '1. What technologies do you use for Android app development?',
      a: 'We leverage Kotlin, Java, Jetpack Compose, Android Jetpack components, Coroutines, Flow, Dagger-Hilt, Room, Retrofit, and Firebase. We adhere strictly to Clean Architecture and Google Material Design 3 guidelines.'
    },
    {
      q: '2. Will you help publish our app to the Google Play Store?',
      a: 'Yes! We handle the complete Google Play Store submission process, including metadata optimization, app signing, store listing assets, privacy policy compliance, and resolution of any review feedback.'
    },
    {
      q: '3. Do we get 100% source code ownership and intellectual property?',
      a: 'Absolutely. Upon project completion and milestone handover, you receive full, unencumbered ownership of the complete source code, repositories, assets, and intellectual property.'
    },
    {
      q: '4. Do you build apps compatible with all Android device versions and screen sizes?',
      a: 'Yes, our applications are engineered with responsive layouts using Jetpack Compose and ConstraintLayout, ensuring seamless experiences across various Android OS versions, screen densities, tablets, and foldables.'
    },
    {
      q: '5. Can you integrate AI and machine learning features into our Android app?',
      a: 'Yes! We integrate Google ML Kit, Gemini Nano on-device models, OpenAI APIs, voice recognition, custom vision models, and predictive analytics tailored to your business needs.'
    },
    {
      q: '6. What post-launch support and SLA maintenance do you provide?',
      a: 'We offer comprehensive SLA support packages including OS upgrade compatibility (Android 14/15+), security patches, bug fixes, third-party API updates, and performance monitoring.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top Flutter App Development Company | Custom Flutter Solutions"
        description="We help businesses create native apps on a smaller budget and launch them on Android and iOS operating systems. Affordable flutter app development services to build high-quality Android and iOS apps."
        canonical="/services/flutter"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING FLUTTER REFERENCE SCREENSHOT)
          ========================================================================= */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-14 bg-[#EDF5F9] text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column: Heading, Paragraph, 4 Stats, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[800] text-[#0B0F19] leading-[1.15] tracking-tight">
                Top Flutter App Development<br className="hidden sm:inline" /> Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.68] font-normal max-w-[560px]">
                We help businesses create native apps on a smaller budget and launch them on Android and iOS operating systems. Our team delivers Affordable flutter app development services to build high-quality Android and iOS apps. As a Highly Experienced Flutter app development company, we offer scalable and high-performance app solutions for every business need.
              </p>

              {/* 4 Statistics Blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 max-w-[580px]">
                {/* Stat 1 */}
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    80+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Mobile App<br />Developers
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    20+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Fortunes 500<br />Companies
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    800+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Project Completed in<br />Mobile Technology
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    320+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Two CTA Buttons Directly Below Statistics */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Discuss Your Project</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#0A3D62] hover:bg-[#072B45] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Hire Flutter Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dual Flutter Device Mockup matching screenshot */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] flex items-center justify-center">

                {/* Back Smartphone (Left, Tilted Flutter Profile/App Screen) */}
                <div
                  className="w-[155px] sm:w-[170px] lg:w-[180px] h-[300px] sm:h-[330px] lg:h-[355px] rounded-[24px] bg-[#1E293B] border-[3px] border-slate-700 p-1.5 shadow-lg relative overflow-hidden -rotate-6 translate-y-4 -mr-10 z-0 shrink-0 select-none"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.25)'
                  }}
                >
                  <div className="bg-[#0099DA] w-full h-[65px] p-2 text-white">
                    <div className="flex justify-between items-center text-[7.5px] font-bold text-white/80 border-b border-white/20 pb-0.5">
                      <span>9:41</span>
                      <span>100%</span>
                    </div>
                    <div className="text-[10px] font-bold mt-1.5">Flutter App</div>
                    <div className="text-[7px] text-white/80">Cross-Platform UI</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-2 space-y-1.5 h-[calc(100%-65px)]">
                    <div className="h-6 bg-white rounded border border-slate-100 p-1 flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[8px]">👤</div>
                      <div className="w-16 h-1.5 bg-slate-200 rounded" />
                    </div>
                    <div className="h-6 bg-white rounded border border-slate-100 p-1 flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-[8px]">📊</div>
                      <div className="w-20 h-1.5 bg-slate-200 rounded" />
                    </div>
                    <div className="h-6 bg-white rounded border border-slate-100 p-1 flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-[8px]">⚙️</div>
                      <div className="w-14 h-1.5 bg-slate-200 rounded" />
                    </div>
                  </div>
                </div>

                {/* Front Smartphone (Right, Foreground Flutter Health/Activity App with cyan header) */}
                <div
                  className="w-[175px] sm:w-[195px] lg:w-[210px] h-[340px] sm:h-[370px] lg:h-[395px] rounded-[26px] bg-[#111827] border-[3.5px] border-[#374151] p-1.5 shadow-2xl relative overflow-hidden z-10 shrink-0 select-none"
                  style={{
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Top Android Speaker Ear Piece & Camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-slate-600/80 z-20" />
                  <div className="absolute top-2 right-6 w-1 h-1 rounded-full bg-slate-600/80 z-20" />

                  {/* Flutter App Screen Content */}
                  <div className="relative w-full h-full rounded-[18px] bg-[#F1F5F9] overflow-hidden flex flex-col justify-between text-slate-800 text-[8.5px]">

                    {/* Cyan Top Bar & Header */}
                    <div className="bg-[#0099DA] text-white p-2.5 pt-3">
                      <div className="flex justify-between items-center text-[7px] font-bold text-white/90 mb-1">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <span>📶</span>
                          <span>🔋</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-[11px]">Home</span>
                        <span className="text-[10px]">🔍</span>
                      </div>
                    </div>

                    {/* App Body Content */}
                    <div className="p-2 space-y-2 flex-1 overflow-hidden">
                      {/* Category Pills */}
                      <div>
                        <div className="text-[7.5px] font-bold text-slate-500 mb-1">Category</div>
                        <div className="flex gap-1">
                          <span className="bg-[#0099DA] text-white px-2 py-0.5 rounded-full text-[6.5px] font-semibold">Breakfast Health</span>
                          <span className="bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded-full text-[6.5px] font-semibold">Routine Health</span>
                        </div>
                      </div>

                      {/* Analysis Header */}
                      <div>
                        <div className="text-[7.5px] font-bold text-slate-500 mb-1">Analysis</div>
                        {/* 4 Cards Grid */}
                        <div className="grid grid-cols-2 gap-1.5">
                          {/* Weight */}
                          <div className="bg-[#F8E8F8] p-1.5 rounded-lg border border-purple-100">
                            <div className="text-[6.5px] text-slate-500">Weight</div>
                            <div className="text-[10px] font-extrabold text-[#7C3AED]">72 <span className="text-[6px] font-normal">kg</span></div>
                            <div className="text-[5.5px] text-purple-400">Goal: 65kg</div>
                          </div>
                          {/* Steps Ring */}
                          <div className="bg-[#FFEFEF] p-1.5 rounded-lg border border-red-100 flex items-center justify-between">
                            <div>
                              <div className="text-[6.5px] text-slate-500">Steps</div>
                              <div className="text-[9px] font-extrabold text-[#EF4444]">10457</div>
                              <div className="text-[5.5px] text-red-400">Goal: 10000</div>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-[#EF4444] border-t-transparent flex items-center justify-center text-[5px] font-bold text-[#EF4444]">
                              85%
                            </div>
                          </div>
                          {/* Distance */}
                          <div className="bg-[#FFF6E5] p-1.5 rounded-lg border border-amber-100">
                            <div className="text-[6.5px] text-slate-500">Distance</div>
                            <div className="text-[10px] font-extrabold text-[#F59E0B]">1.2 <span className="text-[6px] font-normal">km</span></div>
                            <div className="text-[5.5px] text-amber-500">Goal: 3km</div>
                          </div>
                          {/* BMI */}
                          <div className="bg-[#E8F8F5] p-1.5 rounded-lg border border-emerald-100">
                            <div className="text-[6.5px] text-slate-500">BMI</div>
                            <div className="text-[10px] font-extrabold text-[#10B981]">27</div>
                            <div className="text-[5.5px] text-emerald-600">Goal: 19.2 - 24.9</div>
                          </div>
                        </div>
                      </div>

                      {/* Appointments Section */}
                      <div className="pt-0.5">
                        <div className="flex justify-between items-center text-[7.5px] font-bold mb-1">
                          <span className="text-slate-500">Appointments</span>
                          <span className="text-[#0099DA] text-[6.5px]">View all</span>
                        </div>
                        <div className="bg-white p-1.5 rounded-lg border border-slate-200 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#0099DA] flex items-center justify-center text-[8px]">🩺</div>
                            <div>
                              <div className="font-bold text-[7px] text-slate-800">Cardiology Clinic</div>
                              <div className="text-[6px] text-slate-400">Dr. Sarah Jenkins</div>
                            </div>
                          </div>
                          <span className="text-[6px] font-semibold bg-emerald-50 text-emerald-600 px-1 py-0.5 rounded">Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="py-1 bg-white border-t border-slate-200 flex justify-center">
                      <div className="w-12 h-0.5 rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Realistic Floor Contact Shadow */}
              <div className="w-48 sm:w-56 h-3 bg-slate-900/15 rounded-full blur-sm mx-auto -mt-1" />
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          MOBILE APP MARKET STATS & MARKET SIZE SECTION (COMPACT 1-SCREEN VIEWPORT)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="space-y-6 sm:space-y-8">

            {/* ROW 1: Chart Left + Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Bar Chart Graphic */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[480px] rounded-xl bg-[#F4F8FA] border border-slate-200/90 p-3.5 sm:p-4 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-[#005F96]/15 hover:border-[#005F96]/50 cursor-pointer group">
                  {/* Chart Title */}
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-slate-800 text-center mb-2 group-hover:text-[#005F96] transition-colors">
                    Mobile App Market Stats, By Industry IN($Bn), From 2017 To 2025
                  </h4>

                  {/* SVG Bar Chart Visualization */}
                  <div className="w-full h-32 sm:h-36 relative flex items-end justify-between px-1 pt-2 pb-4 border-b border-slate-200 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                    {/* Y-Axis Grid Lines & Labels */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[7px] text-slate-400 select-none pb-4">
                      <div className="flex items-center space-x-1.5 w-full"><span className="w-5 text-right">700</span><div className="w-full border-b border-slate-200/60" /></div>
                      <div className="flex items-center space-x-1.5 w-full"><span className="w-5 text-right">500</span><div className="w-full border-b border-slate-200/60" /></div>
                      <div className="flex items-center space-x-1.5 w-full"><span className="w-5 text-right">300</span><div className="w-full border-b border-slate-200/60" /></div>
                      <div className="flex items-center space-x-1.5 w-full"><span className="w-5 text-right">100</span><div className="w-full border-b border-slate-200/60" /></div>
                      <div className="flex items-center space-x-1.5 w-full"><span className="w-5 text-right">0</span><div className="w-full border-b border-slate-200/60" /></div>
                    </div>

                    {/* Bars Container */}
                    <div className="relative z-10 w-full flex items-end justify-between pl-6 pr-1 space-x-1">
                      {[
                        { year: '2017', val: '174.53', h: '28%' },
                        { year: '2018', val: '218.14', h: '35%' },
                        { year: '2019', val: '253.14', h: '41%' },
                        { year: '2020', val: '318.02', h: '51%' },
                        { year: '2021', val: '387.65', h: '62%' },
                        { year: '2022', val: '435.19', h: '70%' },
                        { year: '2023', val: '497.58', h: '80%' },
                        { year: '2024', val: '563.13', h: '90%' },
                        { year: '2025', val: '610.40', h: '98%' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center group/bar relative transition-transform duration-200 hover:-translate-y-1">
                          {/* Value above bar */}
                          <span className="text-[6px] sm:text-[6.5px] font-semibold text-slate-700 leading-none mb-0.5 group-hover/bar:text-[#005F96] group-hover/bar:font-bold">
                            {item.val}
                          </span>
                          {/* Stacked Bar */}
                          <div
                            className="w-full max-w-[22px] rounded-t-xs overflow-hidden flex flex-col justify-end shadow-xs transition-all duration-200 group-hover/bar:brightness-110 group-hover/bar:shadow-md"
                            style={{ height: item.h }}
                          >
                            <div className="w-full h-[12%] bg-[#F59E0B]" />
                            <div className="w-full h-[14%] bg-[#EC4899]" />
                            <div className="w-full h-[18%] bg-[#8B5CF6]" />
                            <div className="w-full h-[22%] bg-[#3B82F6]" />
                            <div className="w-full h-[34%] bg-[#004A75]" />
                          </div>
                          {/* Year label below */}
                          <span className="text-[6.5px] sm:text-[7.5px] font-medium text-slate-500 mt-1 leading-none group-hover/bar:text-slate-900 group-hover/bar:font-bold">
                            {item.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart Legend Grid */}
                  <div className="grid grid-cols-5 gap-x-1.5 gap-y-1 pt-2.5 text-[6.5px] sm:text-[7.5px] text-slate-600">
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#004A75]" /><span>Total</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#3B82F6]" /><span className="truncate">Photo & Video</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#8B5CF6]" /><span>Medical</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#EC4899]" /><span className="truncate">Productivity</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#F59E0B]" /><span>Utilities</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#10B981]" /><span>Games</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#06B6D4]" /><span className="truncate">Food & Drink</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#6366F1]" /><span>Shopping</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#F43F5E]" /><span>Education</span></div>
                    <div className="flex items-center space-x-1"><span className="w-1.5 h-1.5 rounded-xs bg-[#84CC16]" /><span>Lifestyle</span></div>
                  </div>
                </div>
              </div>

              {/* Right Column: Heading + Paragraph + Button */}
              <div className="lg:col-span-6 space-y-2.5">
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                  Mobile App Market Stats
                </h2>

                <p className="text-[12.5px] sm:text-[13.5px] text-[#475569] leading-[1.55] font-normal max-w-md">
                  The global mobile app market is expected to generate $610.40 billion in sales by 2025. With such enormous potential wealth comes a great deal of responsibility to adapt to changing.
                </p>

                <div className="pt-1">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] transition-all shadow-xs"
                  >
                    Connect With An Expert
                  </a>
                </div>
              </div>
            </div>

            {/* ROW 2: Content Left + Donut Chart Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Heading + Paragraph + Button */}
              <div className="lg:col-span-6 space-y-2.5 order-2 lg:order-1">
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                  The Mobile Application<br />Development Market Size
                </h2>

                <p className="text-[12.5px] sm:text-[13.5px] text-[#475569] leading-[1.55] font-normal max-w-md">
                  According to one study, there will be 4.74 billion smartphone users by the end of 2024, growing at a rate of 2.2% each year. When examining the rise in smartphone users between 2020 to 2025 , we find that the average yearly growth rate is 6.2%.
                </p>

                <div className="pt-1">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] transition-all shadow-xs"
                  >
                    Connect With An Expert
                  </a>
                </div>
              </div>

              {/* Right Column: Donut Semicircle Chart Graphic */}
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
                <div className="w-full max-w-[480px] rounded-xl bg-[#F4F8FA] border border-slate-200/90 p-3.5 sm:p-4 shadow-sm flex flex-col items-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-[#005F96]/15 hover:border-[#005F96]/50 cursor-pointer group">
                  {/* Chart Title */}
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-slate-800 text-center mb-2 w-full group-hover:text-[#005F96] transition-colors">
                    Number of Global Smartphone Users From 2020 To 2025
                  </h4>

                  {/* Semicircular Ring Donut Graphic */}
                  <div className="relative w-56 h-28 sm:w-64 sm:h-32 flex items-end justify-center my-1 transition-transform duration-300 ease-out group-hover:scale-110">
                    <svg viewBox="0 0 200 110" className="w-full h-full overflow-visible">
                      {/* Cyan Outer Base Accent */}
                      <path d="M 20 100 A 80 80 0 0 1 40 50" fill="none" stroke="#06B6D4" strokeWidth="24" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[27px] hover:brightness-110 cursor-pointer" />

                      {/* Orange 2020 Segment (6.95) */}
                      <path d="M 38 52 A 80 80 0 0 1 75 25" fill="none" stroke="#F97316" strokeWidth="24" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[27px] hover:brightness-110 cursor-pointer" />

                      {/* Pink 2021 Segment (7.1) */}
                      <path d="M 73 26 A 80 80 0 0 1 125 25" fill="none" stroke="#F472B6" strokeWidth="24" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[27px] hover:brightness-110 cursor-pointer" />

                      {/* Yellow 2022 Segment (7.26) */}
                      <path d="M 123 26 A 80 80 0 0 1 162 52" fill="none" stroke="#FBBF24" strokeWidth="24" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[27px] hover:brightness-110 cursor-pointer" />

                      {/* Purple 2023-2025 Segment (7.33) */}
                      <path d="M 160 50 A 80 80 0 0 1 180 100" fill="none" stroke="#8B5CF6" strokeWidth="24" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[27px] hover:brightness-110 cursor-pointer" />

                      {/* Data Labels inside arcs */}
                      <text x="56" y="58" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">6.95</text>
                      <text x="100" y="42" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.1</text>
                      <text x="144" y="58" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.26</text>
                      <text x="168" y="85" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.33</text>

                      {/* Year callout pointers */}
                      {/* 2020 Label */}
                      <line x1="28" y1="62" x2="10" y2="62" stroke="#64748B" strokeWidth="1" />
                      <text x="6" y="65" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="end" className="pointer-events-none select-none">2020</text>

                      {/* 2021 Label */}
                      <line x1="88" y1="20" x2="88" y2="6" stroke="#64748B" strokeWidth="1" />
                      <text x="88" y="2" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="middle" className="pointer-events-none select-none">2021</text>

                      {/* 2022 Label */}
                      <line x1="152" y1="26" x2="162" y2="12" stroke="#64748B" strokeWidth="1" />
                      <text x="166" y="10" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="start" className="pointer-events-none select-none">2022</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          FLUTTER COMPANY & SERVICES 2-ROW SHOWCASE SECTION (COMPACT SINGLE-SCREEN VIEWPORT)
          ========================================================================= */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {/* BLOCK 1: Meet The Reputable Flutter App Development Company (Illustration Left + Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Column: Vector Illustration */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/2.9] flex items-center justify-center select-none">
                  {/* Soft Pale Blue Ambient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-blue-50/70 rounded-full blur-2xl transform scale-90 -z-10" />

                  <svg viewBox="0 0 480 360" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                    {/* Background Cloud */}
                    <path
                      d="M 140 180 C 120 140, 150 90, 200 85 C 220 55, 270 50, 305 75 C 335 60, 380 75, 385 115 C 415 130, 420 175, 395 205 C 390 230, 340 240, 290 235 C 240 245, 170 240, 145 210 C 135 200, 135 190, 140 180 Z"
                      fill="#E0F2FE"
                      opacity="0.85"
                    />

                    {/* Gear Cog on Upper Right */}
                    <g transform="translate(370, 75)" fill="#BAE6FD">
                      <circle cx="16" cy="16" r="14" />
                      <circle cx="16" cy="16" r="6" fill="#E0F2FE" />
                      <rect x="14" y="0" width="4" height="32" rx="1" />
                      <rect x="0" y="14" width="32" height="4" rx="1" />
                      <rect x="3" y="3" width="4" height="26" rx="1" transform="rotate(45 16 16)" />
                      <rect x="3" y="3" width="4" height="26" rx="1" transform="rotate(-45 16 16)" />
                    </g>

                    {/* Code Editor on Left */}
                    <g transform="translate(145, 105)">
                      <rect x="0" y="0" width="85" height="110" rx="6" fill="#38BDF8" opacity="0.9" />
                      <rect x="0" y="0" width="85" height="18" rx="6" fill="#0284C7" />
                      <text x="12" y="13" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
                      <circle cx="68" cy="9" r="2.5" fill="#BAE6FD" />
                      <circle cx="76" cy="9" r="2.5" fill="#BAE6FD" />
                      {/* Code lines */}
                      <rect x="8" y="26" width="32" height="3" rx="1" fill="#FFFFFF" opacity="0.9" />
                      <rect x="44" y="26" width="26" height="3" rx="1" fill="#BAE6FD" />
                      <rect x="8" y="34" width="48" height="3" rx="1" fill="#FFFFFF" opacity="0.85" />
                      <rect x="8" y="42" width="28" height="3" rx="1" fill="#BAE6FD" />
                      <rect x="14" y="50" width="42" height="3" rx="1" fill="#FFFFFF" opacity="0.9" />
                      <rect x="14" y="58" width="56" height="3" rx="1" fill="#BAE6FD" />
                      <rect x="14" y="66" width="34" height="3" rx="1" fill="#FFFFFF" opacity="0.85" />
                      <rect x="8" y="74" width="46" height="3" rx="1" fill="#FFFFFF" opacity="0.9" />
                      <rect x="8" y="82" width="22" height="3" rx="1" fill="#BAE6FD" />
                      <rect x="8" y="90" width="38" height="3" rx="1" fill="#FFFFFF" opacity="0.85" />
                    </g>

                    {/* Central Large Smartphone */}
                    <g transform="translate(205, 80)">
                      {/* Outer Bezel */}
                      <rect x="0" y="0" width="135" height="235" rx="18" fill="#0284C7" />
                      <rect x="3" y="3" width="129" height="229" rx="15" fill="#0369A1" />
                      <rect x="5" y="5" width="125" height="225" rx="13" fill="#FFFFFF" />

                      {/* Top Notch Speaker */}
                      <rect x="48" y="9" width="30" height="2.5" rx="1" fill="#94A3B8" />

                      {/* Screen Content */}
                      <g transform="translate(10, 20)">
                        {/* Profile header */}
                        <circle cx="16" cy="16" r="12" fill="#0284C7" />
                        <circle cx="16" cy="13" r="4.5" fill="#FFFFFF" />
                        <path d="M 8 23 C 8 19, 24 19, 24 23 Z" fill="#FFFFFF" />

                        {/* Mountain Photo Tile */}
                        <rect x="36" y="4" width="68" height="24" rx="4" fill="#7DD3FC" />
                        <polygon points="42,24 54,12 64,20 74,10 88,24" fill="#FFFFFF" />
                        <circle cx="46" cy="10" r="2.5" fill="#FFFFFF" />

                        {/* Middle Row Tiles */}
                        {/* Blue Folder Widget */}
                        <rect x="4" y="36" width="48" height="32" rx="4" fill="#0369A1" />
                        <path d="M 12 44 L 20 44 L 23 47 L 38 47 A 2 2 0 0 1 40 49 L 40 58 A 2 2 0 0 1 38 60 L 12 60 A 2 2 0 0 1 10 58 L 10 46 A 2 2 0 0 1 12 44 Z" fill="#FFFFFF" />

                        {/* List widgets right */}
                        <rect x="58" y="36" width="46" height="8" rx="2" fill="#BAE6FD" />
                        <rect x="58" y="48" width="46" height="8" rx="2" fill="#BAE6FD" />
                        <rect x="58" y="60" width="46" height="8" rx="2" fill="#BAE6FD" />

                        {/* Bottom Row Tiles */}
                        {/* Play button */}
                        <rect x="4" y="76" width="48" height="32" rx="4" fill="#38BDF8" />
                        <polygon points="24,86 34,92 24,98" fill="#FFFFFF" />

                        {/* Music Note */}
                        <rect x="58" y="76" width="48" height="32" rx="4" fill="#0284C7" />
                        <path d="M 76 86 L 86 83 L 86 92 A 3 3 0 1 1 83 90 L 83 87 L 76 89 L 76 95 A 3 3 0 1 1 73 93 L 73 86 Z" fill="#FFFFFF" />

                        {/* Dark Bottom Flutter Banner */}
                        <rect x="0" y="118" width="105" height="74" rx="6" fill="#0F172A" />

                        {/* Official Flutter Logo & Name */}
                        <g transform="translate(14, 142)">
                          {/* Flutter Logo Ribbon */}
                          <path d="M 16 0 L 0 16 L 5 21 L 26 0 Z" fill="#42A5F5" />
                          <path d="M 16 11 L 5 22 L 10 27 L 21 16 Z" fill="#42A5F5" />
                          <path d="M 21 16 L 16 21 L 21 26 L 26 21 Z" fill="#0D47A1" />
                          <path d="M 21 26 L 16 21 L 21 16 L 26 21 Z" fill="#29B6F6" />
                          {/* Text "Flutter" */}
                          <text x="32" y="20" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Flutter</text>
                        </g>
                      </g>
                    </g>

                    {/* Developer Sitting at Desk */}
                    <g transform="translate(130, 220)">
                      {/* Desk Table */}
                      <rect x="20" y="65" width="85" height="5" rx="2" fill="#CBD5E1" />
                      <rect x="25" y="70" width="4" height="40" fill="#94A3B8" />
                      <rect x="95" y="70" width="4" height="40" fill="#94A3B8" />

                      {/* Chair */}
                      <path d="M 20 85 C 10 85, 8 60, 16 45 C 22 35, 30 35, 30 50 L 30 85 Z" fill="#0284C7" />
                      <rect x="18" y="85" width="6" height="25" fill="#64748B" />
                      <line x1="8" y1="110" x2="34" y2="110" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />

                      {/* Person Body */}
                      {/* Pants */}
                      <path d="M 22 75 L 45 75 L 50 110 L 42 110 L 36 85 L 22 85 Z" fill="#1E293B" />
                      <ellipse cx="48" cy="110" rx="7" ry="3" fill="#0F172A" />

                      {/* Suit Jacket / Shirt */}
                      <path d="M 18 40 C 18 32, 38 30, 44 40 L 42 75 L 20 75 Z" fill="#0284C7" />
                      {/* Tie */}
                      <polygon points="31,42 33,42 34,58 32,62 30,58" fill="#1E293B" />
                      {/* Head */}
                      <circle cx="31" cy="22" r="8" fill="#FBCFE8" />
                      <path d="M 23 20 C 23 12, 34 8, 39 14 C 39 18, 37 20, 31 20 Z" fill="#1E293B" />

                      {/* Arms & Laptop */}
                      <path d="M 32 44 L 55 60 L 58 65 L 48 65 L 28 50 Z" fill="#0284C7" />
                      {/* Open Laptop */}
                      <polygon points="50,65 72,65 76,50 56,50" fill="#38BDF8" />
                      <rect x="48" y="65" width="26" height="3" rx="1.5" fill="#E2E8F0" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Right Column: Heading & Detailed Description */}
              <div className="lg:col-span-7 space-y-2.5 text-left">
                <h2 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[800] text-[#0B0F19] tracking-tight leading-[1.22]">
                  Meet The Reputable Flutter<br className="hidden sm:inline" /> App Development Company
                </h2>
                <p className="font-normal text-[#475569] text-[12.5px] sm:text-[13px] leading-[1.62]">
                  With Flutter, we assist contemporary businesses in creating dynamic, feature-rich apps for the web, desktop, and mobile platforms all from a single codebase. Sapphire has a long history of generating Flutter apps, and our developers are skilled at making unique apps. When developing apps, we focus on getting things done quickly and are dedicated to meeting deadlines. Being a AI-Powered Flutter App Development Company, we are experts at providing creative and superior Affordable Flutter App Development Services. As a Flutter app development agency, we streamline development workflows to ensure fast, flexible, and feature-rich app delivery.
                </p>
              </div>
            </div>

            {/* BLOCK 2: Result-Oriented Flutter App Development Services (Text Left + Illustration Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-7 space-y-2.5 text-left order-2 lg:order-1">
                <h2 className="text-[20px] sm:text-[23px] lg:text-[26px] font-[800] text-[#0B0F19] tracking-tight leading-[1.22]">
                  Result-Oriented Flutter App<br className="hidden sm:inline" /> Development Services
                </h2>
                <p className="font-normal text-[#475569] text-[12.5px] sm:text-[13px] leading-[1.62]">
                  With a single codebase, our Flutter app development services let businesses build high-quality, cross-platform mobile apps. As an AI-Enabled Flutter App Development Company, we use the comprehensive widget library, hot reload capability, and robust performance of Flutter for designing visually beautiful, responsive, and speedy apps. We use the versatile, scalable, and efficient Flutter platform to build or improve apps. Our Flutter backend development services ensure robust server-side performance to support seamless functionality. Our Flutter app development services let organizations reach more customers with uniform user experience. Your app gets the latest features and security updates thanks to the expanding community and Google support. We also integrate advanced Flutter API integration techniques to extend app functionality with third-party services and internal systems. Startups and large companies can quickly and efficiently implement ideas with Flutter.
                </p>
              </div>

              {/* Right Column: Vector Illustration */}
              <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                <div className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/2.9] flex items-center justify-center select-none">
                  {/* Soft Ambient Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-sky-50 to-blue-50/70 rounded-full blur-2xl transform scale-90 -z-10" />

                  <svg viewBox="0 0 480 360" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                    {/* Floating </ > badge top left */}
                    <g transform="translate(60, 65)">
                      <rect x="0" y="0" width="34" height="22" rx="4" fill="#93C5FD" />
                      <text x="6" y="15" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
                    </g>

                    {/* Central Large Desktop Computer Display */}
                    <g transform="translate(110, 80)">
                      {/* Outer Monitor Frame */}
                      <rect x="0" y="0" width="240" height="150" rx="10" fill="#3B82F6" />
                      <rect x="4" y="4" width="232" height="142" rx="8" fill="#1D4ED8" />
                      <rect x="7" y="7" width="226" height="136" rx="6" fill="#1E293B" />

                      {/* Monitor Stand Base */}
                      <rect x="105" y="150" width="30" height="35" fill="#93C5FD" />
                      <ellipse cx="120" cy="188" rx="45" ry="7" fill="#BFDBFE" />

                      {/* Inside Monitor: Split View (Left: Mountain photo, Right: Code editor) */}
                      {/* Left Photo Box */}
                      <g transform="translate(15, 16)">
                        <rect x="0" y="0" width="90" height="118" rx="6" fill="#93C5FD" />
                        <circle cx="28" cy="28" r="10" fill="#FFFFFF" />
                        <polygon points="6,118 42,65 62,90 76,72 90,118" fill="#FFFFFF" />
                      </g>

                      {/* Right Code Lines Panel */}
                      <g transform="translate(115, 18)">
                        {/* Dotted separator or code bars */}
                        <rect x="0" y="0" width="100" height="4" rx="1.5" fill="#38BDF8" />
                        <rect x="0" y="8" width="85" height="4" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                        <rect x="0" y="16" width="95" height="4" rx="1.5" fill="#FBBF24" />
                        <rect x="0" y="24" width="70" height="4" rx="1.5" fill="#F472B6" />
                        <rect x="0" y="32" width="90" height="4" rx="1.5" fill="#FFFFFF" opacity="0.85" />
                        <rect x="0" y="40" width="60" height="4" rx="1.5" fill="#38BDF8" />
                        <rect x="0" y="48" width="85" height="4" rx="1.5" fill="#34D399" />
                        <rect x="0" y="56" width="95" height="4" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                        <rect x="0" y="64" width="75" height="4" rx="1.5" fill="#FBBF24" />
                        <rect x="0" y="72" width="90" height="4" rx="1.5" fill="#38BDF8" />
                        <rect x="0" y="80" width="55" height="4" rx="1.5" fill="#F472B6" />
                        <rect x="0" y="88" width="80" height="4" rx="1.5" fill="#FFFFFF" opacity="0.85" />
                        <rect x="0" y="96" width="68" height="4" rx="1.5" fill="#34D399" />
                        <rect x="0" y="104" width="90" height="4" rx="1.5" fill="#38BDF8" />
                      </g>
                    </g>

                    {/* Smartphone Overlay on Right Side of Screen */}
                    <g transform="translate(300, 140)">
                      <rect x="0" y="0" width="72" height="135" rx="10" fill="#60A5FA" />
                      <rect x="2" y="2" width="68" height="131" rx="8" fill="#1E3A8A" />
                      <rect x="4" y="4" width="64" height="127" rx="7" fill="#FFFFFF" />

                      {/* Official Flutter Logo on Smartphone Screen */}
                      <g transform="translate(18, 14)">
                        <path d="M 18 0 L 0 18 L 6 24 L 30 0 Z" fill="#42A5F5" />
                        <path d="M 18 12 L 6 24 L 12 30 L 24 18 Z" fill="#42A5F5" />
                        <path d="M 24 18 L 18 24 L 24 30 L 30 24 Z" fill="#0D47A1" />
                        <path d="M 24 30 L 18 24 L 24 18 L 30 24 Z" fill="#29B6F6" />
                      </g>

                      {/* App wireframe widgets below logo */}
                      <g transform="translate(8, 55)">
                        <rect x="0" y="0" width="48" height="6" rx="1.5" fill="#0369A1" />
                        <rect x="0" y="10" width="48" height="6" rx="1.5" fill="#0284C7" />
                        <rect x="0" y="20" width="48" height="6" rx="1.5" fill="#38BDF8" />
                        <rect x="0" y="30" width="48" height="6" rx="1.5" fill="#BAE6FD" />
                        <rect x="0" y="40" width="48" height="6" rx="1.5" fill="#E0F2FE" />
                        <rect x="0" y="50" width="48" height="6" rx="1.5" fill="#0284C7" />
                        <rect x="0" y="60" width="48" height="6" rx="1.5" fill="#0369A1" />
                      </g>
                    </g>

                    {/* Standing Developer on Left holding Laptop */}
                    <g transform="translate(75, 160)">
                      {/* Head */}
                      <circle cx="28" cy="22" r="8" fill="#FBCFE8" />
                      <path d="M 20 20 C 20 12, 31 8, 36 14 C 36 18, 34 20, 28 20 Z" fill="#1E293B" />

                      {/* Body / Shirt */}
                      <path d="M 18 36 C 18 28, 38 28, 38 36 L 36 72 L 20 72 Z" fill="#0284C7" />

                      {/* Pants */}
                      <path d="M 20 72 L 28 72 L 28 120 L 22 120 Z" fill="#1E293B" />
                      <path d="M 28 72 L 36 72 L 36 120 L 30 120 Z" fill="#1E3A8A" />

                      {/* Shoes */}
                      <ellipse cx="25" cy="122" rx="6" ry="2.5" fill="#0F172A" />
                      <ellipse cx="33" cy="122" rx="6" ry="2.5" fill="#0F172A" />

                      {/* Arms & Laptop */}
                      <path d="M 24 38 L 42 54 L 50 54 L 46 62 L 24 48 Z" fill="#0284C7" />
                      {/* Laptop in hand */}
                      <rect x="36" y="48" width="22" height="14" rx="2" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS & RECOGNITIONS BAR (ANIMATED MARQUEE)
          ========================================================================= */}
      <section className="bg-[#005F96] text-white py-8 sm:py-9 lg:py-10 overflow-hidden select-none text-left">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 overflow-hidden">

            {/* Left Fixed Heading */}
            <div className="shrink-0 z-10 bg-[#005F96] lg:pr-6 text-center lg:text-left w-full lg:w-auto">
              <h3 className="text-white font-[800] text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.22] tracking-tight max-w-[340px] mx-auto lg:mx-0">
                World Wide Top Rated Flutter App Development Company on Clutch
              </h3>
            </div>

            {/* Right Infinite Scrolling Badges Track */}
            <div className="flex-1 w-full overflow-hidden relative flex items-center">
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">

                {/* Track 1 */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  {/* 1. Golden Trophy with Laurel Wreath */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 90 90" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <path d="M28 22 C22 30, 20 48, 30 65 C26 55, 26 38, 32 26 Z" fill="#FBBF24" />
                      <circle cx="23" cy="32" r="3.5" fill="#F59E0B" />
                      <circle cx="20" cy="44" r="3.5" fill="#F59E0B" />
                      <circle cx="23" cy="56" r="3.5" fill="#F59E0B" />
                      <circle cx="30" cy="65" r="3.5" fill="#F59E0B" />
                      <path d="M62 22 C68 30, 70 48, 60 65 C64 55, 64 38, 58 26 Z" fill="#FBBF24" />
                      <circle cx="67" cy="32" r="3.5" fill="#F59E0B" />
                      <circle cx="70" cy="44" r="3.5" fill="#F59E0B" />
                      <circle cx="67" cy="56" r="3.5" fill="#F59E0B" />
                      <circle cx="60" cy="65" r="3.5" fill="#F59E0B" />
                      <path d="M32 30 C24 30, 24 46, 35 48" fill="none" stroke="#FDE68A" strokeWidth="2.5" />
                      <path d="M58 30 C66 30, 66 46, 55 48" fill="none" stroke="#FDE68A" strokeWidth="2.5" />
                      <path d="M33 26 L57 26 L54 50 C54 56, 36 56, 36 50 Z" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="1" />
                      <rect x="42" y="52" width="6" height="10" fill="#F59E0B" />
                      <rect x="36" y="62" width="18" height="4" rx="1.5" fill="#D97706" />
                      <rect x="33" y="66" width="24" height="4.5" rx="1.5" fill="#FBBF24" />
                      <polygon points="45,33 46.8,38.5 52.5,38.5 48,42 49.5,47.5 45,44 40.5,47.5 42,42 37.5,38.5 43.2,38.5" fill="#FFFFFF" />
                      <defs>
                        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FEF08A" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* 2. The Manifest - Most Reviewed Mobile App Dev Companies */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">MOBILE APP</text>
                      <text x="32.5" y="36" fill="#881337" fontSize="4.5" fontWeight="800" textAnchor="middle">DEVELOPMENT</text>
                      <text x="32.5" y="42" fill="#881337" fontSize="4.5" fontWeight="800" textAnchor="middle">COMPANIES</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 3. The Manifest - Most Reviewed App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="32" fill="#881337" fontSize="5.2" fontWeight="900" textAnchor="middle">APP DEVELOPMENT</text>
                      <text x="32.5" y="39" fill="#881337" fontSize="5" fontWeight="800" textAnchor="middle">COMPANY</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 4. The Manifest - Most Reviewed Flutter App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">FLUTTER APP</text>
                      <text x="32.5" y="36" fill="#881337" fontSize="4.2" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 5. GoodFirms Circular Laurel Badge */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 85 85" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <circle cx="42.5" cy="42.5" r="39" fill="#FFFFFF" stroke="#0072CE" strokeWidth="2.5" />
                      <circle cx="42.5" cy="42.5" r="35" fill="none" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 2" />
                      <polygon points="26,17 27.2,19.5 30,19.8 28,21.5 28.5,24 26,22.6 23.5,24 24,21.5 22,19.8 24.8,19.5" fill="#F59E0B" />
                      <polygon points="34,13 35.2,15.5 38,15.8 36,17.5 36.5,20 34,18.6 31.5,20 32,17.5 30,15.8 32.8,15.5" fill="#F59E0B" />
                      <polygon points="42.5,11 43.8,13.8 47,14.2 44.5,16.2 45.2,19.2 42.5,17.6 39.8,19.2 40.5,16.2 38,14.2 41.2,13.8" fill="#F59E0B" />
                      <polygon points="51,13 52.2,15.5 55,15.8 53,17.5 53.5,20 51,18.6 48.5,20 49,17.5 47,15.8 49.8,15.5" fill="#F59E0B" />
                      <polygon points="59,17 60.2,19.5 63,19.8 61,21.5 61.5,24 59,22.6 56.5,24 57,21.5 55,19.8 57.8,19.5" fill="#F59E0B" />
                      <rect x="36" y="27" width="13" height="13" rx="2" fill="#F59E0B" />
                      <text x="42.5" y="36.5" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">G</text>
                      <path d="M12 48 L73 48 L69 62 L16 62 Z" fill="#0072CE" />
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP FLUTTER APP</text>
                      <text x="42.5" y="59" fill="#FFFFFF" fontSize="3.4" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <text x="42.5" y="72" fill="#0072CE" fontSize="5" fontWeight="700" textAnchor="middle">goodfirms.co</text>
                    </svg>
                  </div>

                  {/* 6. Clutch Hexagonal Badge */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 80 85" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <polygon points="40,3 77,22 77,63 40,82 3,63 3,22" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
                      <polygon points="40,7 73,24 73,61 40,78 7,61 7,24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="40" y="17" fill="#64748B" fontSize="4.2" fontWeight="800" textAnchor="middle">TOP</text>
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">FLUTTER APP</text>
                      <rect x="10" y="28" width="60" height="26" fill="#1E293B" />
                      <text x="40" y="46" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                        Clutch
                      </text>
                      <circle cx="58" cy="37" r="2.2" fill="#EF4444" />
                      <text x="40" y="66" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">DEVELOPERS</text>
                      <text x="40" y="73" fill="#64748B" fontSize="4" fontWeight="700" textAnchor="middle">2026</text>
                    </svg>
                  </div>
                </div>

                {/* Track 2 (Seamless Infinite Duplicate) */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  {/* 1. Golden Trophy with Laurel Wreath */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 90 90" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <path d="M28 22 C22 30, 20 48, 30 65 C26 55, 26 38, 32 26 Z" fill="#FBBF24" />
                      <circle cx="23" cy="32" r="3.5" fill="#F59E0B" />
                      <circle cx="20" cy="44" r="3.5" fill="#F59E0B" />
                      <circle cx="23" cy="56" r="3.5" fill="#F59E0B" />
                      <circle cx="30" cy="65" r="3.5" fill="#F59E0B" />
                      <path d="M62 22 C68 30, 70 48, 60 65 C64 55, 64 38, 58 26 Z" fill="#FBBF24" />
                      <circle cx="67" cy="32" r="3.5" fill="#F59E0B" />
                      <circle cx="70" cy="44" r="3.5" fill="#F59E0B" />
                      <circle cx="67" cy="56" r="3.5" fill="#F59E0B" />
                      <circle cx="60" cy="65" r="3.5" fill="#F59E0B" />
                      <path d="M32 30 C24 30, 24 46, 35 48" fill="none" stroke="#FDE68A" strokeWidth="2.5" />
                      <path d="M58 30 C66 30, 66 46, 55 48" fill="none" stroke="#FDE68A" strokeWidth="2.5" />
                      <path d="M33 26 L57 26 L54 50 C54 56, 36 56, 36 50 Z" fill="url(#goldGrad)" stroke="#D97706" strokeWidth="1" />
                      <rect x="42" y="52" width="6" height="10" fill="#F59E0B" />
                      <rect x="36" y="62" width="18" height="4" rx="1.5" fill="#D97706" />
                      <rect x="33" y="66" width="24" height="4.5" rx="1.5" fill="#FBBF24" />
                      <polygon points="45,33 46.8,38.5 52.5,38.5 48,42 49.5,47.5 45,44 40.5,47.5 42,42 37.5,38.5 43.2,38.5" fill="#FFFFFF" />
                    </svg>
                  </div>

                  {/* 2. The Manifest - Most Reviewed Mobile App Dev Companies */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">MOBILE APP</text>
                      <text x="32.5" y="36" fill="#881337" fontSize="4.5" fontWeight="800" textAnchor="middle">DEVELOPMENT</text>
                      <text x="32.5" y="42" fill="#881337" fontSize="4.5" fontWeight="800" textAnchor="middle">COMPANIES</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 3. The Manifest - Most Reviewed App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="32" fill="#881337" fontSize="5.2" fontWeight="900" textAnchor="middle">APP DEVELOPMENT</text>
                      <text x="32.5" y="39" fill="#881337" fontSize="5" fontWeight="800" textAnchor="middle">COMPANY</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 4. The Manifest - Most Reviewed Flutter App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">FLUTTER APP</text>
                      <text x="32.5" y="36" fill="#881337" fontSize="4.2" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 5. GoodFirms Circular Laurel Badge */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 85 85" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <circle cx="42.5" cy="42.5" r="39" fill="#FFFFFF" stroke="#0072CE" strokeWidth="2.5" />
                      <circle cx="42.5" cy="42.5" r="35" fill="none" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 2" />
                      <polygon points="26,17 27.2,19.5 30,19.8 28,21.5 28.5,24 26,22.6 23.5,24 24,21.5 22,19.8 24.8,19.5" fill="#F59E0B" />
                      <polygon points="34,13 35.2,15.5 38,15.8 36,17.5 36.5,20 34,18.6 31.5,20 32,17.5 30,15.8 32.8,15.5" fill="#F59E0B" />
                      <polygon points="42.5,11 43.8,13.8 47,14.2 44.5,16.2 45.2,19.2 42.5,17.6 39.8,19.2 40.5,16.2 38,14.2 41.2,13.8" fill="#F59E0B" />
                      <polygon points="51,13 52.2,15.5 55,15.8 53,17.5 53.5,20 51,18.6 48.5,20 49,17.5 47,15.8 49.8,15.5" fill="#F59E0B" />
                      <polygon points="59,17 60.2,19.5 63,19.8 61,21.5 61.5,24 59,22.6 56.5,24 57,21.5 55,19.8 57.8,19.5" fill="#F59E0B" />
                      <rect x="36" y="27" width="13" height="13" rx="2" fill="#F59E0B" />
                      <text x="42.5" y="36.5" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle">G</text>
                      <path d="M12 48 L73 48 L69 62 L16 62 Z" fill="#0072CE" />
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP FLUTTER APP</text>
                      <text x="42.5" y="59" fill="#FFFFFF" fontSize="3.4" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <text x="42.5" y="72" fill="#0072CE" fontSize="5" fontWeight="700" textAnchor="middle">goodfirms.co</text>
                    </svg>
                  </div>

                  {/* 6. Clutch Hexagonal Badge */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 80 85" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <polygon points="40,3 77,22 77,63 40,82 3,63 3,22" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
                      <polygon points="40,7 73,24 73,61 40,78 7,61 7,24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="40" y="17" fill="#64748B" fontSize="4.2" fontWeight="800" textAnchor="middle">TOP</text>
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">FLUTTER APP</text>
                      <rect x="10" y="28" width="60" height="26" fill="#1E293B" />
                      <text x="40" y="46" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                        Clutch
                      </text>
                      <circle cx="58" cy="37" r="2.2" fill="#EF4444" />
                      <text x="40" y="66" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">DEVELOPERS</text>
                      <text x="40" y="73" fill="#64748B" fontSize="4" fontWeight="700" textAnchor="middle">2026</text>
                    </svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          COUNT ON US FOR RELIABLE FLUTTER APP DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered Top Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Count On Us for Reliable Flutter App Development Services
            </h2>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Light-Blue Patterned Quote Panel */}
            <div className="lg:col-span-4 bg-[#EBF5FA] rounded-[3px] p-8 sm:p-10 flex flex-col justify-start relative overflow-hidden shadow-xs min-h-[340px]">
              {/* Authentic Topographical Contour Curves Background */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 400 400" fill="none" stroke="#CBE4F3" strokeWidth="1.2">
                <path d="M-40 60 C 50 20, 140 130, 220 70 C 300 10, 370 110, 440 80" />
                <path d="M-40 120 C 60 70, 160 180, 250 120 C 330 60, 390 170, 440 140" />
                <path d="M-40 180 C 80 130, 180 240, 280 170 C 360 110, 400 230, 440 200" />
                <path d="M-40 240 C 100 190, 200 300, 300 230 C 380 170, 420 290, 440 260" />
                <path d="M-40 300 C 120 250, 220 360, 320 290 C 400 230, 430 350, 440 320" />
                <ellipse cx="120" cy="180" rx="55" ry="40" stroke="#CBE4F3" strokeWidth="1" />
                <ellipse cx="280" cy="240" rx="80" ry="60" stroke="#CBE4F3" strokeWidth="1" />
              </svg>

              {/* Solid Large Blue Double Quotation Mark */}
              <div className="text-[#00669E] mb-5 relative z-10">
                <svg viewBox="0 0 44 34" className="w-11 h-8.5 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Quote Heading in Deep Sapphire Blue */}
              <h3
                className="font-[800] text-[#00669E] tracking-tight leading-[1.25] relative z-10"
                style={{ fontSize: '26px' }}
              >
                Get Natively<br />Compiled And<br />Beautifully<br />Designed Flutter<br />Applications.
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                We deliver Flutter app development services to build highly interactive and functional applications with native performance and flexible UI designs. As a top flutter app development company, we know how to turn your idea into a profitable and full-fledged application using Flutter. As a flutter app development company with rich experience and global footprints, our <strong className="font-bold text-[#00669E]">custom mobile app development company in USA</strong> has vast Flutter architecture experience to build apps with interactive UI, high and agile performance. Our AI and Machine Learning Flutter App Development process includes everything from planning, prototyping, and development to testing and deployment for flawless execution.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                Our app developers code Dart and use Flutter's widgets to ensure cross-platform compatibility of applications on both iOS and Android platforms. We have been delivering flutter cross-platform development services for mobile, web, and desktop. Our development team consists of highly skilled Flutter developers, testing & QA specialists, and UI/UX design experts with rich knowledge of Dart language who can deliver flutter mobile app development services for various platforms. We follow industry-best practices for Flutter app deployment to ensure smooth publishing across Google Play Store and Apple App Store. Additionally, we provide Custom AI-Powered Flutter App Development using AI to enhance performance, personalize user experience, and automate complex functions.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          LATEST TECHNOLOGY WE USE FOR FLUTTER APP DEVELOPMENT (FULL WIDTH)
          ========================================================================= */}
      <section className="py-9 sm:py-12 bg-white text-slate-900 font-sans overflow-hidden text-left w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">

          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
              style={{ fontSize: '32px' }}
            >
              Latest Technology We Use for Flutter App Development
            </h2>
          </div>

          {/* Carousel Track Container with Auto-Scroll & Hover Pause */}
          <div
            className="relative overflow-hidden w-full py-2"
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
          >
            <div
              className="flex space-x-6 sm:space-x-7 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${techCarouselIndex * 460}px)`
              }}
            >
              {[
                {
                  title: 'Flutter DevTools',
                  desc: 'Sapphire makes use of Flutter DevTools to enhance the dependability and performance of Flutter apps. This robust suite offers deep insights into app activity, including memory utilization, rendering performance, and diagnostics.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Browser Window frame */}
                      <rect x="5" y="7" width="34" height="28" rx="3.5" />
                      {/* Header bar line */}
                      <line x1="5" y1="16" x2="39" y2="16" />
                      {/* Header dots */}
                      <circle cx="10" cy="11.5" r="1.2" fill="currentColor" />
                      <circle cx="14" cy="11.5" r="1.2" fill="currentColor" />
                      <circle cx="18" cy="11.5" r="1.2" fill="currentColor" />
                      {/* < / > code icon inside window */}
                      <path d="M15 23 L11 26 L15 29" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29 23 L33 26 L29 29" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="24" y1="21" x2="20" y2="31" strokeLinecap="round" />
                    </svg>
                  )
                },
                {
                  title: 'Flutter FFI (Foreign Function Interface)',
                  desc: 'Sapphire leverages Framework-Level Interface (FFI) to provide high-performance applications with native-level capabilities and cross-platform framework savings.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Computer / Hardware Processor board */}
                      <rect x="8" y="6" width="28" height="24" rx="3" />
                      {/* Screen stand */}
                      <path d="M16 30 L16 36 L28 36 L28 30" />
                      <line x1="12" y1="36" x2="32" y2="36" strokeLinecap="round" />
                      {/* Native Gear cog inside monitor */}
                      <circle cx="22" cy="18" r="5" />
                      <circle cx="22" cy="18" r="2.2" fill="currentColor" />
                      <path d="M22 11 L22 13 M22 23 L22 25 M15 18 L17 18 M27 18 L29 18" strokeLinecap="round" />
                      <path d="M17 13 L18.5 14.5 M25.5 21.5 L27 23 M17 23 L18.5 21.5 M25.5 14.5 L27 13" strokeLinecap="round" />
                    </svg>
                  )
                },
                {
                  title: 'State Management',
                  desc: 'Sapphire uses cutting-edge state management tools like Riverpod, Bloc, and Provider to maintain a tidy and organized application logic. This strategy makes sure that the app is simple to update and expand.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Smartphone Frame */}
                      <rect x="8" y="4" width="28" height="36" rx="3.5" />
                      <circle cx="22" cy="8" r="1" fill="currentColor" />
                      <line x1="18" y1="36" x2="26" y2="36" strokeLinecap="round" />
                      {/* State / Architecture Component Nodes Diagram */}
                      <rect x="13" y="13" width="18" height="5" rx="1" />
                      <rect x="13" y="21" width="8" height="5" rx="1" />
                      <rect x="23" y="21" width="8" height="5" rx="1" />
                      <rect x="13" y="29" width="18" height="4" rx="1" />
                      {/* Connecting flow lines */}
                      <line x1="17" y1="18" x2="17" y2="21" />
                      <line x1="27" y1="18" x2="27" y2="21" />
                    </svg>
                  )
                },
                {
                  title: 'Flutter for Firebase',
                  desc: 'Sapphire offers backend integration by connecting Flutter with Firebase for real-time databases, authentication, cloud messaging, and serverless functions to create scalable applications.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Mobile device frame */}
                      <rect x="6" y="5" width="22" height="34" rx="3" />
                      <circle cx="17" cy="9" r="1" fill="currentColor" />
                      <line x1="13" y1="35" x2="21" y2="35" strokeLinecap="round" />
                      {/* Cloud & Database badge overlapping right */}
                      <path d="M22 22 C22 19, 25 17, 28 17 C31 17, 33 19, 34 21 C36 21, 38 23, 38 25 C38 28, 36 30, 33 30 L23 30 C20.5 30, 19 28, 19 26 C19 23.5, 20.5 22, 22 22 Z" />
                      <circle cx="28" cy="24" r="1.5" fill="currentColor" />
                      <path d="M25 34 L31 34 M28 30 L28 34" strokeLinecap="round" />
                    </svg>
                  )
                },
                {
                  title: 'Dart 3.x & Sound Null Safety',
                  desc: 'We utilize modern Dart features including patterns, records, and sound null safety to construct rock-solid, bug-free, and high-velocity applications.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Document outline */}
                      <path d="M9 5 L25 5 L33 13 L33 39 L9 39 Z" />
                      <path d="M25 5 L25 13 L33 13" />
                      {/* Shield icon in center representing sound null safety */}
                      <path d="M21 19 L28 22 L28 28 C28 32, 21 35, 21 35 C21 35, 14 32, 14 28 L14 22 Z" fill="#DDF1FC" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M18 27 L20 29 L25 24" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                },
                {
                  title: 'Flutter Web & Desktop',
                  desc: 'Deploy your Flutter apps seamlessly across web browsers, Windows, macOS, and Linux with WebAssembly compilation and native rendering performance.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Desktop Monitor Screen */}
                      <rect x="4" y="6" width="28" height="20" rx="2.5" />
                      <line x1="12" y1="26" x2="24" y2="26" />
                      <line x1="18" y1="26" x2="18" y2="32" />
                      <line x1="11" y1="32" x2="25" y2="32" strokeLinecap="round" />
                      {/* Smartphone device overlapping bottom-right */}
                      <rect x="26" y="16" width="14" height="22" rx="2.5" fill="#DDF1FC" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="33" cy="35" r="0.9" fill="currentColor" />
                      <line x1="29" y1="20" x2="37" y2="20" />
                    </svg>
                  )
                }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[360px] sm:w-[410px] lg:w-[440px] shrink-0 rounded-[8px] bg-[#DDF1FC] p-8 sm:p-9 min-h-[300px] flex flex-col justify-start text-left select-none transition-all hover:shadow-sm"
                >
                  {/* Top Icon */}
                  <div className="mb-6">
                    {tech.icon}
                  </div>

                  {/* Tech Title */}
                  <h3 className="font-[800] text-[19px] sm:text-[20px] text-[#0B0F19] mb-3">
                    {tech.title}
                  </h3>

                  {/* Tech Description */}
                  <p
                    className="font-normal text-[#2D3748]"
                    style={{ fontSize: '13.5px', lineHeight: '1.68' }}
                  >
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Center Arrow Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
            <button
              onClick={() => setTechCarouselIndex((prev) => Math.max(0, prev - 1))}
              disabled={techCarouselIndex === 0}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => setTechCarouselIndex((prev) => Math.min(prev + 1, 3))}
              disabled={techCarouselIndex >= 3}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>

        </div>
      </section>

      {/* Our Premium Services Section (Exact Reference Screenshot Match) */}
      <PremiumServicesGrid />

      {/* =========================================================================
          TECHNOLOGY COMBINATIONS USED BY SAPPHIRE FOR FLUTTER APP DEVELOPMENT (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-9 sm:py-12 bg-white text-slate-900 font-sans overflow-hidden text-left w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">

          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
              style={{ fontSize: '32px' }}
            >
              Technology Combinations Used By Sapphire For Flutter App Development
            </h2>
            <p className="font-normal text-[#475569] text-[14px] sm:text-[15px] leading-[1.65] mt-3.5 max-w-3xl mx-auto">
              We use a smooth integration process between Flutter and other backend technologies and databases to augment the functionality and capabilities of our mobile apps.
            </p>
          </div>

          {/* Carousel Track Container with Auto-Scroll & Hover Pause */}
          <div
            className="relative overflow-hidden w-full py-2"
            onMouseEnter={() => setIsComboHovered(true)}
            onMouseLeave={() => setIsComboHovered(false)}
          >
            <div
              className="flex space-x-5 sm:space-x-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${comboCarouselIndex * 434}px)`
              }}
            >
              {[
                {
                  title: 'Flutter + Firebase',
                  desc: 'The ideal combo for developing applications that will enable you to launch your MVP more quickly and create feature-rich, scalable, performant, and easily maintainable apps is a comprehensive toolset.',
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* Firebase Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.28l2.943 5.538-6.323 9.854zm16.793 2.484L18.42 5.09a.543.543 0 00-.974-.216l-3.235 6.096 6.472 7.186zM4.693 17.51l6.732 3.784a1.218 1.218 0 001.15 0l6.733-3.784L13.12 10.63a.542.542 0 00-.907.034L4.693 17.51z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: 'Flutter + Node.js',
                  desc: 'The best backend to utilize with Flutter is Node.js for creating backend applications that are fully written in JavaScript and RESTful APIs, which makes app development easier and promotes coherence in architecture.',
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* Node.js Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M12 0a1.73 1.73 0 0 0-.87.23L1.54 5.76a1.75 1.75 0 0 0-.87 1.51v11.46c0 .62.33 1.2.87 1.51l9.59 5.53a1.73 1.73 0 0 0 1.74 0l9.59-5.53c.54-.31.87-.89.87-1.51V7.27c0-.62-.33-1.2-.87-1.51L12.87.23A1.73 1.73 0 0 0 12 0zm.01 2.76 8.5 4.91v9.66l-8.5 4.91-8.5-4.91V7.67l8.5-4.91zM7.74 8.79a.88.88 0 0 0-.88.88v6.66a.88.88 0 0 0 1.76 0V9.67a.88.88 0 0 0-.88-.88zm4.26 0c-2.4 0-4 1.4-4 3.75s1.6 3.75 4 3.75 4-1.4 4-3.75-1.6-3.75-4-3.75zm0 1.75c1.25 0 2.25.8 2.25 2s-1 2-2.25 2-2.25-.8-2.25-2 1-2 2.25-2zm4.26-1.75a.88.88 0 0 0-.88.88v6.66a.88.88 0 0 0 1.76 0V9.67a.88.88 0 0 0-.88-.88z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: 'Flutter + MongoDB',
                  desc: 'Our developers create robust, scalable, feature-rich apps that provide a flawless user experience across all platforms by combining Flutter with MongoDB.',
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* MongoDB Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M11.996 0a9.056 9.056 0 00-1.127.098c-.464.07-.923.181-1.37.332-2.82 1.025-4.81 3.52-5.187 6.495-.365 2.875.717 5.767 2.88 7.747 1.258 1.152 2.793 1.947 4.45 2.316.108.024.218.044.354.072v6.94s.467-.323.754-.537c1.39-1.037 2.493-2.392 3.208-3.952.92-2.008 1.156-4.27.674-6.442-.486-2.193-1.745-4.14-3.522-5.46-.867-.645-1.85-1.12-2.894-1.39-.425-.11-.861-.18-1.299-.219zm-.254 2.146c.197.026.394.062.588.113.82.213 1.593.585 2.274 1.09 1.401 1.042 2.393 2.576 2.776 4.303.38 1.71.194 3.491-.53 5.072-.562 1.228-1.43 2.295-2.52 3.111l-.588.435v-14.124z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: 'Flutter + Python',
                  desc: "Python is the accepted language for jobs involving data science and machine learning. Our developers use Flutter's extensive ecosystem in conjunction with Python to build applications that facilitate automation and data-intensive operations.",
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* Python Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.812v.826H3.92S0 5.766 0 11.874c0 6.107 3.42 5.895 3.42 5.895h2.04v-2.88c0-3.324 2.87-3.218 2.87-3.218h5.56s2.72-.03 2.72-2.69V3.125s.4-3.125-4.7-3.125zm-2.6 1.625c.578 0 1.05.472 1.05 1.05s-.472 1.05-1.05 1.05c-.58 0-1.05-.472-1.05-1.05s.47-1.05 1.05-1.05zm5.372 7.234v2.88c0 3.324-2.87 3.218-2.87 3.218H6.26s-2.72.03-2.72 2.69v5.748s-.4 3.125 4.7 3.125c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752H8.136v-.826h8.098s3.92.468 3.92-5.64c0-6.107-3.42-5.895-3.42-5.895h-2.04zm2.6 13.516c-.578 0-1.05-.472-1.05-1.05s.472-1.05 1.05-1.05c.58 0 1.05.472 1.05 1.05s-.47 1.05-1.05 1.05z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: 'Flutter + FastAPI',
                  desc: "Our developers use Flutter's modern capabilities to integrate FastAPI and build quick, high-performance APIs that are safe, secure, and able to handle heavy server loads.",
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* FastAPI Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.92 4.25l5.67 6.94h-4.25l2.83 8.56-7.08-8.56h4.25l-1.42-6.94z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: 'Flutter + PostgreSQL',
                  desc: 'We integrate Flutter with PostgreSQL relational database architecture for mission-critical enterprise applications requiring ACID compliance, complex data modeling, and zero downtime.',
                  badge: (
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#52A7D9] text-white space-x-2 mb-4 shadow-none">
                      {/* Flutter Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M14.314 0L2.3 12l3.7 3.7L21.686 0h-7.372zm0 9.771L7.257 16.828l3.7 3.7 7.057-7.057 3.7 3.7L14.314 24h7.372L24 21.686l-5.986-5.986L24 9.771h-7.372z" />
                      </svg>
                      <span className="text-white font-semibold text-[13px] leading-none select-none">+</span>
                      {/* PostgreSQL Official Logo */}
                      <svg viewBox="0 0 24 24" className="w-[19px] h-[19px] fill-white shrink-0">
                        <path d="M12.012 0c-3.167 0-5.836 1.152-7.854 3.39-1.848 2.05-2.88 4.792-2.906 7.721v.054c0 1.265.203 2.457.602 3.542.44 1.195 1.084 2.195 1.918 2.973v3.743a2.58 2.58 0 002.578 2.577h3.868a2.58 2.58 0 002.578-2.577v-.812c.389.043.784.066 1.184.066 3.167 0 5.836-1.152 7.854-3.39 1.848-2.05 2.88-4.792 2.906-7.721v-.054c0-1.265-.203-2.457-.602-3.542-.44-1.195-1.084-2.195-1.918-2.973V2.577A2.58 2.58 0 0019.608 0h-7.596z" />
                      </svg>
                    </div>
                  )
                }
              ].map((combo, idx) => (
                <div
                  key={idx}
                  className="w-[330px] sm:w-[375px] lg:w-[410px] shrink-0 rounded-[6px] bg-[#DDF1FC] p-6 sm:p-7 min-h-[240px] flex flex-col justify-start text-left select-none transition-all hover:shadow-sm"
                >
                  {/* Top Badge */}
                  <div>
                    {combo.badge}
                  </div>

                  {/* Combo Title */}
                  <h3 className="font-[800] text-[16px] sm:text-[17px] text-[#0B0F19] mb-2.5 leading-snug">
                    {combo.title}
                  </h3>

                  {/* Combo Description */}
                  <p
                    className="font-normal text-[#2D3748]"
                    style={{ fontSize: '12.5px', lineHeight: '1.6' }}
                  >
                    {combo.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Center Arrow Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
            <button
              onClick={() => setComboCarouselIndex((prev) => Math.max(0, prev - 1))}
              disabled={comboCarouselIndex === 0}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => setComboCarouselIndex((prev) => Math.min(prev + 1, 3))}
              disabled={comboCarouselIndex >= 3}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Meet Firevy’s Exceptional Team of Seasoned Experts
            </h2>
          </div>

          {/* Top Category Filter Pills Bar */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="bg-[#D9EFF9] rounded-full p-1 sm:p-1.5 inline-flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 shadow-xs">
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
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setExpertActiveCategory(category);
                    setExpertCarouselIndex(0);
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${expertActiveCategory === category
                    ? 'bg-[#005F96] text-white shadow-xs'
                    : 'text-[#334155] hover:text-[#005F96] hover:bg-white/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Team Cards Grid (3 Cards on Desktop) */}
          {(() => {
            const expertTeamData = {
              'Trending': [
                {
                  id: 'trend-1',
                  title: 'Mobile Application Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                  team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
                },
                {
                  id: 'trend-2',
                  title: 'Saas Product Dev. Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                  team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
                },
                {
                  id: 'trend-3',
                  title: 'Microsoft Dev. Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                  team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
                },
                {
                  id: 'trend-4',
                  title: 'Vidyalaya School Software',
                  image: '/images/edu_case_study_lms.jpg',
                  techs: ['.Net Core', '.Net Core MVC Development', '.Net Core IOT Development', '.Net Core Web API Development', 'Angular', 'SQL Server', 'Flutter', 'Laravel', 'React', 'Node JS'],
                  team: ['Project Manager (1)', 'Sr. Full Stack Dev (2)', 'Database Admin (1)', 'Frontend Engineer (2)', 'QA Specialist (1)']
                },
                {
                  id: 'trend-5',
                  title: 'Data Science Team',
                  image: '/images/traffic_mgt_ai.png',
                  techs: ['Data Science Team', 'Data Visualization', 'Machin Learning', 'Data Analysis', 'Data Science', 'AI', 'Business Intelligence', 'AWS', 'Data Mining'],
                  team: ['Principal Data Scientist (1)', 'ML Engineer (3)', 'AI Researcher (1)', 'Data Ops Lead (1)']
                }
              ],
              'Product Development': [
                {
                  id: 'prod-1',
                  title: 'Vidyalaya School Software',
                  image: '/images/edu_case_study_lms.jpg',
                  techs: ['.Net Core', '.Net Core MVC Development', '.Net Core IOT Development', '.Net Core Web API Development', 'Angular', 'SQL Server', 'Flutter', 'Laravel', 'React', 'Node JS'],
                  team: ['Project Manager (1)', 'Sr. Full Stack Dev (2)', 'Database Admin (1)', 'Frontend Engineer (2)', 'QA Specialist (1)']
                },
                {
                  id: 'prod-2',
                  title: 'OccuCare Software',
                  image: '/images/brief-healthcare-app-development.png',
                  techs: ['Flutter', 'Laravel', 'SQL Server', 'React', 'Node JS', '.Net Core MVC Development', '.Net Core IOT Development', '.Net Core Web API Development'],
                  team: ['Healthcare Architect (1)', 'Full Stack Dev (3)', 'Mobile Developer (2)', 'Security Specialist (1)', 'QA Tester (1)']
                },
                {
                  id: 'prod-3',
                  title: 'Health Tech',
                  image: '/images/ai_chatbot.png',
                  techs: ['Jenkins', 'Nodejs', 'Reactjs', 'GCP', 'New Relic', 'Docker', 'Cloudflare', 'MongoDB', 'Asana'],
                  team: ['Lead Healthcare Dev (1)', 'Cloud DevOps Eng (2)', 'React Specialist (2)', 'Compliance Auditor (1)', 'Senior QA (1)']
                }
              ],
              'Saas': [
                {
                  id: 'saas-1',
                  title: 'Mobile Application Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                  team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
                },
                {
                  id: 'saas-2',
                  title: 'Saas Product Dev. Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                  team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
                },
                {
                  id: 'saas-3',
                  title: 'Microsoft Dev. Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                  team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
                }
              ],
              'AI/ML': [
                {
                  id: 'aiml-1',
                  title: 'AI & NLP Engineering Team',
                  image: '/images/ai_chatbot.png',
                  techs: ['PyTorch', 'TensorFlow', 'HuggingFace', 'OpenAI', 'Python', 'FastAPI', 'LangChain'],
                  team: ['AI Lead (1)', 'NLP Engineer (2)', 'MLOps Specialist (1)', 'Data Annotator (1)']
                },
                {
                  id: 'aiml-2',
                  title: 'Computer Vision Team',
                  image: '/images/traffic_mgt_ai.png',
                  techs: ['OpenCV', 'YOLOv8', 'CUDA', 'Python', 'TensorRT', 'AWS Bedrock'],
                  team: ['CV Architect (1)', 'Deep Learning Dev (2)', 'Edge AI Eng (1)', 'QA (1)']
                },
                {
                  id: 'aiml-3',
                  title: 'GenAI & LLM Solutions Team',
                  image: '/images/ai_travel_app.png',
                  techs: ['LLaMA 3', 'Claude API', 'LangGraph', 'Pinecone', 'Vector DB', 'Next.js'],
                  team: ['GenAI Lead (1)', 'Prompt Engineer (2)', 'Fullstack AI Dev (2)', 'QA (1)']
                }
              ],
              'Data Engineering': [
                {
                  id: 'data-1',
                  title: 'Data Analytics Services Team',
                  image: '/images/ai_in_software_development.webp',
                  techs: ['Big Data Analytics', 'Predictive Analytics', 'Data Management', 'Visualization And Reporting'],
                  team: ['Lead Data Analyst (1)', 'BI Engineer (2)', 'Data Pipeline Dev (2)', 'Analytics QA (1)']
                },
                {
                  id: 'data-2',
                  title: 'Data Migration Services Team',
                  image: '/images/ai_in_mobile_app_development_tools.webp',
                  techs: ['Data Science', 'Data Warehousing', 'Data Analytics', 'Big Data Implementation'],
                  team: ['Migration Architect (1)', 'ETL Pipeline Lead (2)', 'Database Migration Eng (2)', 'Data QA (1)']
                },
                {
                  id: 'data-3',
                  title: 'Data Science Team',
                  image: '/images/traffic_mgt_ai.png',
                  techs: ['Data Science Team', 'Data Visualization', 'Machin Learning', 'Data Analysis', 'Data Science', 'AI', 'Business Intelligence', 'AWS', 'Data Mining'],
                  team: ['Principal Data Scientist (1)', 'ML Engineer (3)', 'AI Researcher (1)', 'Data Ops Lead (1)']
                }
              ],
              'Design': [
                {
                  id: 'design-1',
                  title: 'UI/UX Design Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Figma', 'Adobe XD', 'Sketch', 'Protopie', 'Wireframing', 'User Research'],
                  team: ['Design Lead (1)', 'Sr UI Designer (2)', 'UX Researcher (1)', 'Motion Designer (1)']
                },
                {
                  id: 'design-2',
                  title: 'Brand & Product Identity Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Illustrator', 'Photoshop', 'Brand Guidelines', 'Typography', '3D Blender'],
                  team: ['Creative Director (1)', 'Brand Strategist (1)', 'Visual Designer (2)']
                },
                {
                  id: 'design-3',
                  title: 'Design System & Prototyping Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['Design Tokens', 'Storybook', 'Figma Variants', 'Accessibility (a11y)', 'CSS'],
                  team: ['Design System Lead (1)', 'UI Engineer (2)', 'Accessibility QA (1)']
                }
              ],
              'Marketing': [
                {
                  id: 'mkt-1',
                  title: 'Growth & Digital Marketing Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Google Analytics 4', 'HubSpot', 'SEMrush', 'Meta Ads', 'A/B Testing'],
                  team: ['Growth Lead (1)', 'Performance Marketer (2)', 'Content Strategist (1)']
                },
                {
                  id: 'mkt-2',
                  title: 'SEO & Performance Analytics Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['Technical SEO', 'Ahrefs', 'Search Console', 'Schema Markup', 'Core Web Vitals'],
                  team: ['SEO Architect (1)', 'Analytics Specialist (1)', 'Technical Writer (2)']
                },
                {
                  id: 'mkt-3',
                  title: 'Content & Campaign Strategy Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Copywriting', 'Email Automation', 'Klaviyo', 'LinkedIn Ads', 'Video Marketing'],
                  team: ['Campaign Lead (1)', 'Copywriter (2)', 'Social Media Manager (1)']
                }
              ],
              'IoT App Dev': [
                {
                  id: 'iot-1',
                  title: 'Smart Hardware & IoT Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['MQTT', 'BLE / Bluetooth', 'ESP32', 'Raspberry Pi', 'AWS IoT Core', 'C++'],
                  team: ['IoT Architect (1)', 'Embedded Firmware Dev (2)', 'Hardware QA (1)']
                },
                {
                  id: 'iot-2',
                  title: 'Connected Devices & Sensors Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Zigbee', 'LoRaWAN', 'Modbus', 'Telemetry Pipelines', 'Grafana', 'InfluxDB'],
                  team: ['Sensor Network Lead (1)', 'Firmware Eng (2)', 'Cloud Integrator (1)']
                },
                {
                  id: 'iot-3',
                  title: 'Industrial IoT & Edge Computing Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Edge AI', 'OPC-UA', 'SCADA', 'Time-Series DB', 'Docker Edge', 'Linux Embedded'],
                  team: ['IIoT Lead (1)', 'Edge Computing Dev (2)', 'Industrial QA (1)']
                }
              ],
              'Blockchain Dev': [
                {
                  id: 'bc-1',
                  title: 'Smart Contract & dApp Team',
                  image: '/assets/team/mobile_app_team.jpg',
                  techs: ['Solidity', 'Rust', 'Hardhat', 'Ethers.js', 'Web3.js', 'Ethereum', 'Polygon'],
                  team: ['Blockchain Architect (1)', 'Smart Contract Dev (2)', 'Security Auditor (1)']
                },
                {
                  id: 'bc-2',
                  title: 'Web3 & DeFi Architecture Team',
                  image: '/assets/team/saas_dev_team.jpg',
                  techs: ['Solana', 'Anchor', 'IPFS', 'The Graph', 'MetaMask', 'Subgraphs'],
                  team: ['DeFi Lead (1)', 'Rust Blockchain Eng (2)', 'Cryptographer (1)']
                },
                {
                  id: 'bc-3',
                  title: 'Crypto & Tokenomics Team',
                  image: '/assets/team/microsoft_dev_team.jpg',
                  techs: ['ERC-20 / ERC-721', 'Staking Protocols', 'Zero Knowledge Proofs', 'Chainlink Oracles'],
                  team: ['Tokenomics Strategist (1)', 'Protocol Engineer (2)', 'Audit QA (1)']
                }
              ]
            };

            const currentList = expertTeamData[expertActiveCategory] || expertTeamData['Trending'];
            const maxIdx = Math.max(0, currentList.length - 3);
            const visibleCards = currentList.slice(expertCarouselIndex, expertCarouselIndex + 3);

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1340px] mx-auto">
                  {visibleCards.map((card) => {
                    const currentTab = expertTabs[card.id] || 'tech';
                    const activePills = currentTab === 'tech' ? card.techs : card.team;

                    return (
                      <div
                        key={card.id}
                        className="bg-[#DDF1FC] rounded-[18px] p-5 sm:p-6 border border-[#CCE8F7] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
                      >
                        <div>
                          {/* Top Image Box */}
                          <div className="w-full h-[180px] sm:h-[190px] rounded-[14px] overflow-hidden shadow-xs mb-4.5 bg-slate-900">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-full object-cover select-none"
                            />
                          </div>

                          {/* Team Title */}
                          <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3.5 text-left">
                            {card.title}
                          </h3>

                          {/* Sub-Tabs Switch (Technologies / Team Composition) */}
                          <div className="flex items-center space-x-2 mb-3.5 text-left">
                            <button
                              onClick={() => setExpertTabs((prev) => ({ ...prev, [card.id]: 'tech' }))}
                              className={`text-xs font-[800] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${currentTab === 'tech'
                                ? 'bg-[#005F96] text-white shadow-xs'
                                : 'bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                            >
                              Technologies
                            </button>
                            <button
                              onClick={() => setExpertTabs((prev) => ({ ...prev, [card.id]: 'team' }))}
                              className={`text-xs font-[700] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${currentTab === 'team'
                                ? 'bg-[#005F96] text-white shadow-xs'
                                : 'bg-white text-slate-700 hover:bg-slate-50'
                                }`}
                            >
                              Team Composition
                            </button>
                          </div>

                          {/* Tag Pills Grid */}
                          <div className="flex flex-wrap gap-2 min-h-[66px] text-left items-start">
                            {activePills.map((pill, pillIdx) => (
                              <span
                                key={pillIdx}
                                className="bg-white text-[#1E293B] font-[600] text-xs px-3.5 py-1.5 rounded-full shadow-2xs"
                              >
                                {pill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom CTA Button */}
                        <div className="pt-3.5 text-left">
                          <Link
                            to="/contact"
                            className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs font-[800] rounded-[6px] px-4 py-2.5 inline-flex items-center space-x-2 transition-all shadow-xs"
                          >
                            <span>Get Details</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Center Arrow Controls */}
                <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
                  <button
                    onClick={() => setExpertCarouselIndex((prev) => Math.max(0, prev - 1))}
                    disabled={expertCarouselIndex === 0}
                    aria-label="Previous Slide"
                    className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setExpertCarouselIndex((prev) => Math.min(prev + 1, maxIdx))}
                    disabled={expertCarouselIndex >= maxIdx}
                    aria-label="Next Slide"
                    className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
                  >
                    →
                  </button>
                </div>
              </>
            );
          })()}

        </Container>
      </section>

      {/* Key Reasons to Choose Section (Exact Order 1:1 Match) */}
      <KeyReasonsChooseFlutter />

      {/* Success Stories Section Matching Screenshot 1:1 */}
      <SuccessStoriesSection />

      {/* Sectors, Showcase & Other Service Sections */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke Flutter App Development Services" />
      <SuccessStories />
      <FlutterExpertiseServices />
      <TopRatedFlutterShowcase />
      <AndroidHiringModels />
      <WhatOurClientsSaySection />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile Android development sprints from Figma wireframes to CI/CD automated builds and Play Store release." />
      <ProudAwardsBanner />
      <FlutterTechStackSection />
      <DigitalTransformationSlider />
      <TrustedBrandsGrid />
      <AboutUsStats />
      <FeaturedInBrandsSection />
      <SuccessMatrix />
      <InnovativeSolutionsVideoSection />
      <OurStoryTheirWordsSection />

      {/* Signature 2-Column FAQ Section (1:1 Reference Match) */}
      <SapphireFaqSection />

      {/* What Sets Us Apart Section (1:1 Reference Match) */}
      <AndroidWhatSetsUsApartSection />

      {/* Premium Services Grid (1:1 Reference Match) */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* Our Recent Blogs Section (1:1 Reference Match) */}
      <AndroidRecentBlogsSection />

      {/* Have Android App Development Challenge To Address CTA Banner (1:1 Reference Match) */}
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default FlutterAppDevelopmentService;
