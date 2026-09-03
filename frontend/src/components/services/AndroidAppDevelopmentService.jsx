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

export const AndroidAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);

  // Auto-scroll technology cards every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      setTechCarouselIndex((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

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
        title="Best Android App Development Company | AI-Powered Android Solutions"
        description="Top AI-Powered Android App Development Company. We design and build high-quality, user-friendly Android mobile apps to help businesses scale across devices and markets."
        canonical="/services/android"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING REFERENCE IMAGE COPY-TO-COPY)
          ========================================================================= */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-[#EDF5F9] text-slate-900 relative overflow-hidden text-left font-sans border-b border-slate-200/50">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column: Heading, Paragraph, 4 Stats, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4">
              {/* Heading */}
              <h1 className="text-[30px] sm:text-[36px] lg:text-[40px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Best Android App<br />Development Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal max-w-[520px]">
                As a top AI-Powered Android App Development Company, we design Android apps by implementing your original ideas! We build high-quality, user-friendly Android apps to match your demands as a leading bespoke app developer. We specialize in Android mobile app development to help businesses scale efficiently across devices and markets. Contact us for a quote!
              </p>

              {/* 4 Statistics Blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 pt-1 max-w-[580px]">
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
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Hire Android App Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Android Dual Mobile Device Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[360px] sm:max-w-[390px] flex items-center justify-center">

                {/* Back Smartphone (Left, Food Product Listing App Screen) */}
                <div
                  className="w-[150px] sm:w-[165px] lg:w-[175px] h-[295px] sm:h-[325px] lg:h-[345px] rounded-[24px] bg-slate-900 border-[3px] border-slate-700 p-1.5 shadow-lg relative overflow-hidden -rotate-6 translate-y-3 -mr-12 z-0 shrink-0"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.25)'
                  }}
                >
                  {/* Screen Content */}
                  <div className="bg-[#FAFAFC] w-full h-full rounded-[18px] p-2 flex flex-col justify-between text-slate-800 text-[8.5px] overflow-hidden select-none">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[7.5px] font-bold text-slate-400 border-b border-slate-100 pb-0.5">
                      <span>9:41</span>
                      <div className="flex space-x-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="py-0.5">
                      <div className="text-[9.5px] font-extrabold text-slate-900 leading-tight">Products</div>
                      <div className="text-[7px] text-slate-400">Popular dishes around you</div>
                    </div>

                    {/* Food Items List */}
                    <div className="space-y-1 flex-1 overflow-hidden py-0.5">
                      <div className="p-1 rounded-md bg-white border border-slate-100 shadow-sm flex items-center space-x-1.5">
                        <div className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-[10px] shrink-0">
                          🍕
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-[7.5px] text-slate-800 truncate">Margherita Pizza</div>
                          <div className="text-[6.5px] text-amber-500 font-semibold">★ 4.9 • $14.99</div>
                        </div>
                      </div>

                      <div className="p-1 rounded-md bg-white border border-slate-100 shadow-sm flex items-center space-x-1.5">
                        <div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-[10px] shrink-0">
                          🍔
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-[7.5px] text-slate-800 truncate">Smash Burger</div>
                          <div className="text-[6.5px] text-amber-500 font-semibold">★ 4.8 • $11.50</div>
                        </div>
                      </div>

                      <div className="p-1 rounded-md bg-white border border-slate-100 shadow-sm flex items-center space-x-1.5">
                        <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center text-[10px] shrink-0">
                          🥗
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-bold text-[7.5px] text-slate-800 truncate">Healthy Salad</div>
                          <div className="text-[6.5px] text-amber-500 font-semibold">★ 4.7 • $9.99</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="pt-0.5 border-t border-slate-100 flex justify-around text-[8px] text-slate-400">
                      <span className="text-[#005F96] font-bold">🏠</span>
                      <span>🔍</span>
                      <span>🛒</span>
                      <span>👤</span>
                    </div>
                  </div>
                </div>

                {/* Front Smartphone (Right, Foreground Android Device with "Easy Eat" Logo over Food Wallpaper) */}
                <div
                  className="w-[170px] sm:w-[185px] lg:w-[195px] h-[330px] sm:h-[355px] lg:h-[375px] rounded-[26px] bg-[#1E293B] border-[3.5px] border-[#334155] p-1.5 shadow-2xl relative overflow-hidden z-10 shrink-0"
                  style={{
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Top Android Speaker Ear Piece & Camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-slate-600/80 z-20" />
                  <div className="absolute top-2 right-5 w-1 h-1 rounded-full bg-slate-600/80 z-20" />

                  {/* Android Screen Container */}
                  <div className="relative w-full h-full rounded-[18px] overflow-hidden flex flex-col items-center justify-center select-none">

                    {/* High-Resolution Food Table Wallpaper */}
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                      alt="Easy Eat Android App Mockup"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark/Warm Tint Overlay matching reference */}
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-90" />

                    {/* Centered App Logo Card: Orange Icon + "Easy Eat" */}
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                      {/* Orange Rounded Square App Icon with Pizza SVG */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] bg-[#F97316] shadow-lg flex items-center justify-center border border-white/20">
                        {/* Crisp White Pizza Slice Icon */}
                        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 11h.01" />
                          <path d="M11 15h.01" />
                          <path d="M16 16h.01" />
                          <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16Z" fill="currentColor" fillOpacity="0.2" />
                          <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                        </svg>
                      </div>

                      {/* App Name Text: Easy Eat */}
                      <div className="text-white font-[800] text-[14px] sm:text-[15px] tracking-wide drop-shadow-md">
                        Easy Eat
                      </div>
                    </div>

                    {/* Subtle Android Bottom Navigation Bar */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-white/60 z-20" />
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
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans border-b border-slate-200/80 text-left">
        <Container>
          <div className="space-y-6 sm:space-y-8">

            {/* ROW 1: Chart Left + Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Bar Chart Graphic */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[480px] rounded-xl bg-[#F4F8FA] border border-slate-200/90 p-3.5 sm:p-4 shadow-xs">
                  {/* Chart Title */}
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-slate-800 text-center mb-2">
                    Mobile App Market Stats, By Industry IN($Bn), From 2017 To 2025
                  </h4>

                  {/* SVG Bar Chart Visualization */}
                  <div className="w-full h-32 sm:h-36 relative flex items-end justify-between px-1 pt-2 pb-4 border-b border-slate-200">
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
                        <div key={idx} className="flex-1 flex flex-col items-center group relative">
                          {/* Value above bar */}
                          <span className="text-[6px] sm:text-[6.5px] font-semibold text-slate-700 leading-none mb-0.5">
                            {item.val}
                          </span>
                          {/* Stacked Bar */}
                          <div
                            className="w-full max-w-[22px] rounded-t-xs overflow-hidden flex flex-col justify-end shadow-xs"
                            style={{ height: item.h }}
                          >
                            <div className="w-full h-[12%] bg-[#F59E0B]" />
                            <div className="w-full h-[14%] bg-[#EC4899]" />
                            <div className="w-full h-[18%] bg-[#8B5CF6]" />
                            <div className="w-full h-[22%] bg-[#3B82F6]" />
                            <div className="w-full h-[34%] bg-[#004A75]" />
                          </div>
                          {/* Year label below */}
                          <span className="text-[6.5px] sm:text-[7.5px] font-medium text-slate-500 mt-1 leading-none">
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
                <div className="w-full max-w-[480px] rounded-xl bg-[#F4F8FA] border border-slate-200/90 p-3.5 sm:p-4 shadow-xs flex flex-col items-center">
                  {/* Chart Title */}
                  <h4 className="text-[11px] sm:text-[12px] font-bold text-slate-800 text-center mb-2 w-full">
                    Number of Global Smartphone Users From 2020 To 2025
                  </h4>

                  {/* Semicircular Ring Donut Graphic */}
                  <div className="relative w-56 h-28 sm:w-64 sm:h-32 flex items-end justify-center my-1">
                    <svg viewBox="0 0 200 110" className="w-full h-full overflow-visible">
                      {/* Cyan Outer Base Accent */}
                      <path d="M 20 100 A 80 80 0 0 1 40 50" fill="none" stroke="#06B6D4" strokeWidth="24" strokeLinecap="butt" />

                      {/* Orange 2020 Segment (6.95) */}
                      <path d="M 38 52 A 80 80 0 0 1 75 25" fill="none" stroke="#F97316" strokeWidth="24" strokeLinecap="butt" />

                      {/* Pink 2021 Segment (7.1) */}
                      <path d="M 73 26 A 80 80 0 0 1 125 25" fill="none" stroke="#F472B6" strokeWidth="24" strokeLinecap="butt" />

                      {/* Yellow 2022 Segment (7.26) */}
                      <path d="M 123 26 A 80 80 0 0 1 162 52" fill="none" stroke="#FBBF24" strokeWidth="24" strokeLinecap="butt" />

                      {/* Purple 2023-2025 Segment (7.33) */}
                      <path d="M 160 50 A 80 80 0 0 1 180 100" fill="none" stroke="#8B5CF6" strokeWidth="24" strokeLinecap="butt" />

                      {/* Data Labels inside arcs */}
                      <text x="56" y="58" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle">6.95</text>
                      <text x="100" y="42" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle">7.1</text>
                      <text x="144" y="58" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle">7.26</text>
                      <text x="168" y="85" fill="#1E293B" fontSize="8" fontWeight="800" textAnchor="middle">7.33</text>

                      {/* Year callout pointers */}
                      {/* 2020 Label */}
                      <line x1="28" y1="62" x2="10" y2="62" stroke="#64748B" strokeWidth="1" />
                      <text x="6" y="65" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="end">2020</text>

                      {/* 2021 Label */}
                      <line x1="88" y1="20" x2="88" y2="6" stroke="#64748B" strokeWidth="1" />
                      <text x="88" y="2" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="middle">2021</text>

                      {/* 2022 Label */}
                      <line x1="152" y1="26" x2="162" y2="12" stroke="#64748B" strokeWidth="1" />
                      <text x="166" y="10" fill="#475569" fontSize="7.5" fontWeight="600" textAnchor="start">2022</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          BRIEF ABOUT ANDROID APP DEVELOPERS SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans border-b border-slate-200/80 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Android App Development & Programmer Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3.2] flex items-center justify-center select-none">

                {/* Soft Pale Blue Ambient Blob Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/80 to-sky-100/60 rounded-full blur-2xl transform scale-90 -z-10" />

                {/* Main Vector Illustration Composition */}
                <svg viewBox="0 0 460 380" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                  {/* Soft Background Cloud/Floor Shadow */}
                  <ellipse cx="230" cy="355" rx="190" ry="18" fill="#E2EDF8" />

                  {/* LEFT: Floating Dark Code Editor Window */}
                  <g transform="translate(40, 60)">
                    {/* Window Frame */}
                    <rect x="0" y="0" width="135" height="150" rx="6" fill="#1E293B" />
                    {/* Left Sidebar */}
                    <rect x="0" y="0" width="26" height="150" rx="6" fill="#0F172A" />
                    {/* Editor icons */}
                    <rect x="7" y="14" width="12" height="2" rx="1" fill="#64748B" />
                    <rect x="7" y="24" width="12" height="2" rx="1" fill="#64748B" />
                    <rect x="7" y="34" width="12" height="2" rx="1" fill="#64748B" />
                    <rect x="7" y="44" width="12" height="2" rx="1" fill="#64748B" />
                    <rect x="7" y="54" width="12" height="2" rx="1" fill="#64748B" />
                    <rect x="7" y="64" width="12" height="2" rx="1" fill="#64748B" />

                    {/* Colored Code Lines */}
                    <g transform="translate(34, 14)">
                      <rect x="0" y="0" width="38" height="3.5" rx="1" fill="#38BDF8" />
                      <rect x="42" y="0" width="22" height="3.5" rx="1" fill="#F472B6" />

                      <rect x="6" y="8" width="55" height="3.5" rx="1" fill="#94A3B8" />
                      <rect x="6" y="16" width="40" height="3.5" rx="1" fill="#818CF8" />

                      <rect x="12" y="24" width="48" height="3.5" rx="1" fill="#FBBF24" />
                      <rect x="12" y="32" width="62" height="3.5" rx="1" fill="#38BDF8" />
                      <rect x="12" y="40" width="35" height="3.5" rx="1" fill="#34D399" />

                      <rect x="6" y="48" width="50" height="3.5" rx="1" fill="#F472B6" />
                      <rect x="12" y="56" width="42" height="3.5" rx="1" fill="#94A3B8" />
                      <rect x="12" y="64" width="58" height="3.5" rx="1" fill="#FBBF24" />
                      <rect x="12" y="72" width="30" height="3.5" rx="1" fill="#38BDF8" />

                      <rect x="6" y="80" width="45" height="3.5" rx="1" fill="#34D399" />
                      <rect x="0" y="88" width="16" height="3.5" rx="1" fill="#818CF8" />
                    </g>
                  </g>

                  {/* CENTER-RIGHT: Large White Smartphone Wireframe Display */}
                  <g transform="translate(150, 40)">
                    {/* Phone Outer Shadow / Bezel */}
                    <rect x="0" y="0" width="170" height="295" rx="22" fill="#60A5FA" />
                    <rect x="3" y="3" width="164" height="289" rx="19" fill="#93C5FD" />
                    {/* Screen White Interior */}
                    <rect x="7" y="7" width="156" height="281" rx="15" fill="#FFFFFF" />

                    {/* Top Notch Speaker */}
                    <rect x="58" y="12" width="40" height="3.5" rx="1.5" fill="#CBD5E1" />
                    <circle cx="106" cy="14" r="2" fill="#CBD5E1" />

                    {/* App Screen Grid Tiles (6 Colorful App Widgets) */}
                    <g transform="translate(16, 28)">
                      {/* Tile 1: Coral Play Button */}
                      <rect x="0" y="0" width="64" height="48" rx="4" fill="#FDA4AF" />
                      <polygon points="28,18 40,24 28,30" fill="#FFFFFF" />

                      {/* Tile 2: Blue Music Note */}
                      <rect x="74" y="0" width="64" height="48" rx="4" fill="#BAE6FD" />
                      <path d="M102 18 L114 15 L114 26 A 4 4 0 1 1 110 23 L110 20 L102 22 L102 29 A 4 4 0 1 1 98 26 L98 18 Z" fill="#FFFFFF" />

                      {/* Tile 3: Wireframe Box */}
                      <rect x="0" y="56" width="64" height="48" rx="4" fill="#E0F2FE" />
                      <line x1="0" y1="56" x2="64" y2="104" stroke="#93C5FD" strokeWidth="1.5" />
                      <line x1="64" y1="56" x2="0" y2="104" stroke="#93C5FD" strokeWidth="1.5" />

                      {/* Tile 4: Image Landscape */}
                      <rect x="74" y="56" width="64" height="48" rx="4" fill="#BAE6FD" />
                      <circle cx="88" cy="68" r="4" fill="#FFFFFF" />
                      <polygon points="78,98 94,80 106,92 118,74 134,98" fill="#FFFFFF" />

                      {/* Tile 5: Yellow Folder */}
                      <rect x="0" y="112" width="64" height="48" rx="4" fill="#F8FAFC" />
                      <path d="M12 124 L24 124 L28 128 L52 128 A 2 2 0 0 1 54 130 L54 148 A 2 2 0 0 1 52 150 L12 150 A 2 2 0 0 1 10 148 L10 126 A 2 2 0 0 1 12 124 Z" fill="#FBBF24" />

                      {/* Tile 6: Settings Gear */}
                      <rect x="74" y="112" width="64" height="48" rx="4" fill="#E0F2FE" />
                      <circle cx="106" cy="136" r="8" fill="#FFFFFF" />
                      <circle cx="106" cy="136" r="4" fill="#BAE6FD" />
                    </g>
                  </g>

                  {/* BOTTOM RIGHT: Gear Settings Floating Widget */}
                  <g transform="translate(270, 270)">
                    <rect x="0" y="0" width="62" height="62" rx="4" fill="#93C5FD" />
                    {/* White Cog/Gear in Center */}
                    <circle cx="31" cy="31" r="14" fill="#FFFFFF" />
                    <circle cx="31" cy="31" r="7" fill="#93C5FD" />
                    <rect x="29" y="11" width="4" height="40" fill="#FFFFFF" rx="1" />
                    <rect x="11" y="29" width="40" height="4" fill="#FFFFFF" rx="1" />
                    <rect x="15" y="15" width="4" height="32" fill="#FFFFFF" rx="1" transform="rotate(45 31 31)" />
                    <rect x="15" y="15" width="4" height="32" fill="#FFFFFF" rx="1" transform="rotate(-45 31 31)" />
                  </g>

                  {/* FOREGROUND: Developer Sitting in Beanbag Working on Laptop */}
                  <g transform="translate(45, 170)">
                    {/* Soft Sky-Blue Beanbag Chair */}
                    <path
                      d="M 60 165 C 10 160, -10 110, 5 60 C 15 20, 50 10, 85 20 C 115 28, 125 70, 120 120 C 115 155, 95 168, 60 165 Z"
                      fill="#93C5FD"
                    />
                    <path
                      d="M 65 155 C 25 150, 10 110, 22 70 C 30 35, 60 25, 85 35 C 108 42, 115 75, 110 120 C 105 148, 90 158, 65 155 Z"
                      fill="#BFDBFE"
                    />

                    {/* Developer Legs (Navy Blue Pants) */}
                    {/* Right Leg */}
                    <path d="M 85 105 L 115 110 L 140 165 L 155 165 L 155 172 L 132 172 L 105 118 Z" fill="#1E3A8A" />
                    {/* Right Shoe */}
                    <ellipse cx="145" cy="172" rx="12" ry="4.5" fill="#0F172A" />

                    {/* Left Leg */}
                    <path d="M 68 100 L 95 105 L 108 170 L 125 170 L 125 176 L 100 176 L 85 112 Z" fill="#2563EB" />
                    {/* Left Shoe */}
                    <ellipse cx="115" cy="176" rx="12" ry="4.5" fill="#0F172A" />

                    {/* Developer Body / Torso (Bright Orange T-Shirt) */}
                    <path d="M 62 42 C 60 35, 78 30, 92 35 C 100 38, 105 50, 98 75 L 85 102 L 60 98 L 62 42 Z" fill="#F97316" />

                    {/* Developer Head & Hair */}
                    {/* Neck */}
                    <rect x="80" y="28" width="8" height="9" fill="#FBCFE8" />
                    {/* Face / Head */}
                    <circle cx="84" cy="22" r="10" fill="#FBCFE8" />
                    {/* Dark Hair */}
                    <path d="M 74 20 C 74 12, 85 8, 92 12 C 95 14, 96 18, 94 22 C 90 20, 85 20, 82 23 C 78 22, 74 23, 74 20 Z" fill="#1E293B" />

                    {/* Developer Arms & Laptop */}
                    {/* Left Arm holding laptop */}
                    <path d="M 68 45 L 85 75 L 115 72 L 110 80 L 80 82 L 62 50 Z" fill="#F97316" />
                    <circle cx="112" cy="74" r="4" fill="#FBCFE8" />

                    {/* White Modern Slim Laptop */}
                    <g transform="translate(98, 62) rotate(-10)">
                      {/* Laptop Screen */}
                      <rect x="0" y="0" width="3" height="24" rx="1" fill="#CBD5E1" />
                      <rect x="2" y="1" width="22" height="22" rx="2" fill="#F8FAFC" stroke="#E2E8F0" />
                      {/* Laptop Base */}
                      <rect x="-4" y="21" width="30" height="3" rx="1.5" fill="#E2E8F0" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Heading & 2 Detailed Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Heading */}
              <h2
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.2]"
                style={{ fontSize: '32px' }}
              >
                Brief About Android App<br className="hidden sm:inline" /> Developers
              </h2>

              {/* Paragraph 1 */}
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                Our app development company for industry are passionate specialists who produce perfection every time. Their expertise and enthusiasm for innovation allow them to solve any problem and implement your ideas when delivering custom android app development services. Our AI Android App Development Services ensures that your app is not only functional but also highly scalable and user-friendly, offering the best user experience across all Secure Real-Time Android Device Management Platform. Whether you're a startup, Top Android developers for custom business apps or an enterprise Mobile App Development Agency for Android is the key to unlocking digital success.
              </p>

              {/* Paragraph 2 */}
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                Our designers and developers collaborate to build beautiful, intuitive user interfaces. They focus on user experience, making your software simple to use and seamless. Our programmers strive to write well-tested, error-free code. As the Best Android app development company for startups, we follow strict quality assurance standards to ensure your software works across devices and platforms. We provide a wide range of Android application development services, from custom app development to ongoing support and maintenance. If you're concerned about AI-Integrated Android App Development cost, we offer flexible engagement models that suit your budget and business goals.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS & RECOGNITIONS BAR (ANIMATED MARQUEE)
          ========================================================================= */}
      <section className="bg-[#005F96] text-white py-8 sm:py-9 lg:py-10 overflow-hidden select-none border-b border-blue-900/40 text-left">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 overflow-hidden">

            {/* Left Fixed Heading */}
            <div className="shrink-0 z-10 bg-[#005F96] lg:pr-6 text-center lg:text-left w-full lg:w-auto">
              <h3 className="text-white font-[800] text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.22] tracking-tight max-w-[340px] mx-auto lg:mx-0">
                World Wide Top Rated Android App Development Company on Clutch
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

                  {/* 4. The Manifest - Most Reviewed Android App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">ANDROID APP</text>
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
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP ANDROID APP</text>
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
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">ANDROID APP</text>
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

                  {/* 4. The Manifest - Most Reviewed Android App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">ANDROID APP</text>
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
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP ANDROID APP</text>
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
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">ANDROID APP</text>
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
          LEADING ANDROID APP DEVELOPMENT AGENCY SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans border-b border-slate-200/80 text-left">
        <Container>
          {/* Centered Top Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Leading Android App Development Agency
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
                className="font-[800] text-[#00669E] tracking-tight leading-[1.2] relative z-10"
                style={{ fontSize: '28px' }}
              >
                Not Just Another<br />Android App<br />Development<br />Company
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                As one of the leading Award-winning Generative AI Android App Development Firms, we thrive on creating high-quality Android applications that stand out in the market with our skilled developers, designers, and project managers. Android application development company help startups and established businesses make a strong entry or develop their digital presence with Affordable Android App Development Company. We also offer Enterprise Android app development services to empower large-scale organizations with robust and secure mobile solutions. From idea to implementation, we collaborate with customers to ensure the app meets their goals.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                You can Hire Android App Developer for Startup who provides unmatched support and maintenance. Our talented engineers and designers help you build a mobile app that matches your brand, works effortlessly, and provides a great user experience. As the Experienced Android App Development Company, we have the skills to create your Android business app, e-commerce solution, social networking platform, or other software. Our top Android app development services maximize its potential. With Android app development outsourcing capabilities, global clients rely on us for cost-effective and scalable solutions. Contact us now to design a unique, compelling mobile solution that sets you apart from the competition. Explore our Android app development solutions to turn your ideas into a real, functional application with measurable results.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          CUTTING EDGE TECHNOLOGY CAROUSEL SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-14 sm:py-18 lg:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80 overflow-hidden text-left">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
              style={{ fontSize: '32px' }}
            >
              Cutting Edge Technology Sapphire Use For Android App Development
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
                transform: `translateX(-${techCarouselIndex * 410}px)`
              }}
            >
              {[
                {
                  title: 'Android Studio',
                  desc: "Android Studio's sophisticated debugging, testing, and code-refactoring features speed development. We use Android Studio to create high-quality, responsive, and optimized apps for numerous Android devices.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Phone frame */}
                      <rect x="8" y="4" width="22" height="34" rx="3.5" />
                      <circle cx="19" cy="8" r="1" fill="currentColor" />
                      <line x1="14" y1="34" x2="24" y2="34" />
                      {/* Developer badge on right */}
                      <circle cx="28" cy="22" r="8" fill="#DDF1FC" stroke="currentColor" strokeWidth="1.8" />
                      <circle cx="28" cy="20" r="2.8" />
                      <path d="M23 27 C23 24.5, 25.5 24, 28 24 C30.5 24, 33 24.5, 33 27" />
                      {/* Gear notches on badge */}
                      <path d="M28 12.5 L28 14 M28 30 L28 31.5 M18.5 22 L20 22 M36 22 L37.5 22" />
                    </svg>
                  )
                },
                {
                  title: 'Firebase',
                  desc: "Firebase is a robust Backend-as-a-Service (BaaS) platform that provides real-time databases, authentication, analytics, and cloud messaging for app development. Our Firebase integration adds push alerts, user engagement tracking, and data storage to your app.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Server box left */}
                      <rect x="4" y="8" width="16" height="12" rx="2" />
                      <circle cx="8" cy="12" r="1" fill="currentColor" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <line x1="8" y1="16" x2="16" y2="16" />
                      {/* Stacked database disks right */}
                      <ellipse cx="28" cy="12" rx="10" ry="4.5" />
                      <path d="M18 12 L18 19 C18 22.5, 38 22.5, 38 19 L38 12" />
                      <path d="M18 19 L18 26 C18 29.5, 38 29.5, 38 26 L38 19" />
                      <path d="M18 26 L18 33 C18 36.5, 38 36.5, 38 33 L38 26" />
                    </svg>
                  )
                },
                {
                  title: 'XML',
                  desc: "XML is needed to develop Android app layouts and UI components. Our team creates attractive, intuitive layouts that work across screen sizes and resolutions. We optimize XML files to make your app's UI lightweight, quick, and user-friendly.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Document outline */}
                      <path d="M10 6 L26 6 L34 14 L34 38 L10 38 Z" />
                      <path d="M26 6 L26 14 L34 14" />
                      <line x1="15" y1="12" x2="21" y2="12" />
                      {/* XML Badge */}
                      <rect x="14" y="21" width="16" height="11" rx="2" />
                      <text x="22" y="29.2" fill="#0084D1" fontSize="6.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="sans-serif">XML</text>
                    </svg>
                  )
                },
                {
                  title: 'Retrofit',
                  desc: "Our team optimizes Retrofit for data processing, error handling, and API call management to keep your app responsive under pressure. Optimizing network performance gives apps smooth data synchronization and real-time updates.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Crossed Wrench and Screwdriver */}
                      <path d="M11 31 L23 19 M20 16 L24 12 C26 10, 29 10, 31 12 C33 14, 33 17, 31 19 L27 23 L24 20" />
                      <path d="M11 31 L8 34 C7 35, 6 36, 7 37 C8 38, 9 37, 10 36 L13 33" />
                      {/* Screwdriver */}
                      <path d="M31 31 L19 19 M16 16 L12 12 C10 10, 10 7, 12 5 C14 3, 17 3, 19 5 L23 9 L20 12" />
                      <path d="M31 31 L34 34 C35 35, 36 36, 37 35 C38 34, 37 33, 36 32 L33 29" />
                    </svg>
                  )
                },
                {
                  title: 'Kotlin',
                  desc: "Modern features, concise syntax, and seamless Java interoperability make Kotlin our team's preferred language for Android development. We build Kotlin-based solutions to improve code quality, developer productivity, and app performance.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      {/* Document outline */}
                      <path d="M10 6 L26 6 L34 14 L34 38 L10 38 Z" />
                      <path d="M26 6 L26 14 L34 14" />
                      <line x1="15" y1="12" x2="21" y2="12" />
                      {/* KT Badge */}
                      <rect x="15" y="21" width="14" height="11" rx="2" />
                      <text x="22" y="29.2" fill="#0084D1" fontSize="7" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="sans-serif">KT</text>
                    </svg>
                  )
                },
                {
                  title: 'Java',
                  desc: "Android app development has relied on Java's reliability and community support for years. Java's numerous libraries and tools let us build apps with smooth functionality and broad device compatibility.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      <rect x="6" y="7" width="32" height="23" rx="3" />
                      <path d="M15 30 L29 30" />
                      <path d="M22 30 L22 37" />
                      <path d="M14 37 L30 37" />
                      <rect x="11" y="12" width="22" height="12" rx="1.5" />
                      <text x="22" y="21" fill="#0084D1" fontSize="6.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="sans-serif">&lt;JAVA&gt;</text>
                    </svg>
                  )
                },
                {
                  title: 'Jetpack Compose',
                  desc: "Jetpack Compose simplifies and accelerates UI development on Android. Our developers use its declarative approach and intuitive Kotlin APIs to build reactive, robust, and visually stunning Android apps.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      <polygon points="22,5 36,13 36,29 22,37 8,29 8,13" />
                      <polyline points="22,5 22,37" />
                      <polyline points="8,13 22,21 36,13" />
                    </svg>
                  )
                },
                {
                  title: 'Room & SQLite',
                  desc: "Room provides an abstraction layer over SQLite to allow fluent database access while harnessing the full power of SQLite. We build robust offline-first Android apps with persistent caching.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
                      <ellipse cx="22" cy="11" rx="15" ry="5.5" />
                      <path d="M7 11 L7 21 C7 26.5, 37 26.5, 37 21 L37 11" />
                      <path d="M7 21 L7 31 C7 36.5, 37 36.5, 37 31 L37 21" />
                    </svg>
                  )
                }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[330px] sm:w-[370px] lg:w-[390px] shrink-0 rounded-[8px] bg-[#DDF1FC] p-8 sm:p-9 min-h-[300px] flex flex-col justify-start text-left select-none transition-all hover:shadow-sm"
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
              onClick={() => setTechCarouselIndex((prev) => Math.min(prev + 1, 5))}
              disabled={techCarouselIndex >= 5}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>

        </div>
      </section>

      {/* Premium Services Grid Section (Placed immediately after Cutting Edge Technology) */}
      <PremiumServicesGrid />

      {/* =========================================================================
          MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans border-b border-slate-200/80 text-left">
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
                  onClick={() => setExpertActiveCategory(category)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${
                    expertActiveCategory === category
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1340px] mx-auto">
            {[
              {
                id: 0,
                title: 'Mobile Application Team',
                image: '/assets/team/mobile_app_team.jpg',
                techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                team: ['Tech Lead (1)', 'Sr. Android Dev (2)', 'Sr. iOS Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
              },
              {
                id: 1,
                title: 'Saas Product Dev. Team',
                image: '/assets/team/saas_dev_team.jpg',
                techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
              },
              {
                id: 2,
                title: 'Microsoft Dev. Team',
                image: '/assets/team/microsoft_dev_team.jpg',
                techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
              }
            ].map((card, idx) => {
              const currentTab = expertTabs[idx] || 'tech';
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
                        onClick={() => setExpertTabs((prev) => ({ ...prev, [idx]: 'tech' }))}
                        className={`text-xs font-[800] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${
                          currentTab === 'tech'
                            ? 'bg-[#005F96] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        Technologies
                      </button>
                      <button
                        onClick={() => setExpertTabs((prev) => ({ ...prev, [idx]: 'team' }))}
                        className={`text-xs font-[700] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${
                          currentTab === 'team'
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
              onClick={() => setExpertCarouselIndex((prev) => Math.min(prev + 1, 3))}
              disabled={expertCarouselIndex >= 3}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>

        </Container>
      </section>

      {/* Android Services Capabilities Grid */}
      <section id="features-section" className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              ENTERPRISE ANDROID CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              End-to-End Android App Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              We engineer mission-critical Android mobile applications tailored for rapid customer acquisition, seamless hardware integration, and enterprise scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {androidFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold mb-4 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>100% Native & Clean Architecture</span>
                    <span className="text-[#005F96] font-bold">Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Success Stories & About Us Statistics Sections (Exact 1:1 Match) */}
      <SuccessStories />
      <AboutUsStats />
      <SapphireTechStackGrid domainName="android" richTechCategories={techCategories} />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile Android development sprints from Figma wireframes to CI/CD automated builds and Play Store release." />
      <TrustedBrandsGrid />

      {/* FAQs Section */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Android App Development FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#005F96]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <Smartphone className="w-3.5 h-3.5 text-cyan-300" />
                <span>START YOUR ANDROID PROJECT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Hire Dedicated Android App Developers
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Consult with our senior Android engineers and technical architects today to build your bespoke Android mobile solution.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <button onClick={() => setFormSubmitted(false)} className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief</label>
                      <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Describe your Android app idea, target features, timelines..." className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>Submit Project Brief & Get Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AndroidAppDevelopmentService;
