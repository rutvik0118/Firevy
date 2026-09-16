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
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import MobileAppExpertiseServices from './MobileAppExpertiseServices';
import AndroidTechStackSection from './AndroidTechStackSection';
import ReactNativeExpertiseServices from './ReactNativeExpertiseServices';
import ProudAwardsBanner from './ProudAwardsBanner';
import ReactNativeReasonsChoose from './ReactNativeReasonsChoose';
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
  Boxes,
  Brain,
  Cloud,
  Radio
} from 'lucide-react';

export const ReactNativeAppDevelopmentService = () => {
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
        title="Top React Native App Development Company in USA | Firevy"
        description="We are the #1 Reactive Native App Development company building highly interactive, versatile React Native applications for Android and iOS platforms."
        canonical="/services/react-native"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED REACT NATIVE HERO SECTION (MATCHING REFERENCE IMAGE 1:1)
          ========================================================================= */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-[#EDF5F9] text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column: Heading, Paragraph, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[30px] sm:text-[36px] lg:text-[40px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Top React Native App<br />Development Company in USA
              </h1>

              {/* Subtitle / Paragraph matching screenshot 1:1 */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal max-w-[560px]">
                We are the #1 Reactive Native App Development company; we use React Native to build highly interactive, versatile React native applications for Android and iOS platforms. We are an established React native mobile app development company with decade-long experience and follow us <span className="font-[700] text-[#005F96]">Hire react native developers in USA</span> to deliver the best-in-quality services. With decade-long experience, we follow agile methodologies and strive to provide the best-in-class React Native Development services to our clients. Are you looking for developers or exploring React Native app development cost, we ensure transparency and cost-effectiveness in our approach.
              </p>

              {/* Two CTA Buttons Directly Below Description */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>

                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group cursor-pointer"
                >
                  <span>Hire React Native Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: React Native Dual Mobile Device Mockup (Matching Screenshot 1:1) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] flex items-center justify-center">

                {/* Back Smartphone (Left, Social App Congratulation Screen) */}
                <div
                  className="w-[155px] sm:w-[170px] lg:w-[185px] h-[310px] sm:h-[340px] lg:h-[365px] rounded-[26px] bg-slate-900 border-[3.5px] border-slate-700 p-1.5 shadow-xl relative overflow-hidden -rotate-6 translate-y-3 -mr-12 z-0 shrink-0"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="bg-white w-full h-full rounded-[20px] p-2.5 flex flex-col justify-between text-slate-800 text-center overflow-hidden select-none">
                    {/* Top Status Bar & Header */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[9px] font-bold text-slate-800 block">Congratulations!</span>
                      <p className="text-[6.5px] text-slate-400 leading-tight">You matched with someone new</p>
                    </div>

                    {/* Dual Mini Profile Photos */}
                    <div className="flex items-center justify-center -space-x-3 my-auto py-2">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                        alt="Match 1"
                        className="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-md -rotate-6"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Match 2"
                        className="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-md rotate-6"
                      />
                    </div>

                    {/* Purple CTA Button */}
                    <div className="pb-2">
                      <div className="w-full py-1.5 rounded-[8px] bg-gradient-to-r from-[#9333EA] to-[#A855F7] text-white text-[7.5px] font-bold shadow-sm">
                        Send a Message
                      </div>
                      <span className="text-[6px] text-slate-400 mt-1 block">Keep Browsing</span>
                    </div>
                  </div>
                </div>

                {/* Front Smartphone (Right, Foreground React Native Dating / Social App UI) */}
                <div
                  className="w-[175px] sm:w-[195px] lg:w-[210px] h-[345px] sm:h-[375px] lg:h-[400px] rounded-[30px] bg-slate-900 border-[4px] border-slate-800 p-1.5 shadow-2xl relative overflow-hidden z-10 shrink-0"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  {/* Top Notch Speaker Ear Piece & Camera */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                    <div className="w-6 h-1 rounded-full bg-slate-700/80" />
                  </div>

                  {/* App Screen Container */}
                  <div className="relative w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col justify-between select-none">

                    {/* Top App Header Icons */}
                    <div className="pt-4 pb-2 px-3 flex items-center justify-between z-20 bg-white/90 backdrop-blur-xs">
                      {/* Profile Icon */}
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>

                      {/* Flame / Match Icon */}
                      <div className="w-5 h-5 flex items-center justify-center text-purple-600">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                          <path d="M12 23c-4.97 0-9-4.03-9-9 0-3.64 2.18-6.78 5.34-8.19.46-.2.98.11 1.05.61.16 1.15.65 2.19 1.41 3.01.27.29.74.22.92-.12.56-1.07 1.44-2.73 1.44-4.81 0-.5.44-.9.94-.85 4.35.45 7.9 4.05 7.9 8.35 0 4.97-4.03 9-9 9z" />
                        </svg>
                      </div>

                      {/* Chat Messages Icon */}
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Main Dating Profile Card with Portrait Image */}
                    <div className="relative flex-1 mx-2 mb-2 rounded-[18px] overflow-hidden shadow-inner flex flex-col justify-end p-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                        alt="Marlene - React Native Social App"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Profile Details */}
                      <div className="relative z-10 text-left text-white space-y-0.5">
                        <div className="flex items-center space-x-1">
                          <span className="font-[800] text-[12px] sm:text-[13px] text-white leading-tight">Marlene, 21</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <p className="text-[7.5px] text-slate-200 leading-tight line-clamp-1">
                          Fashion design student • West Bay
                        </p>
                      </div>

                      {/* Floating Bottom Right Purple Chat Bubble */}
                      <div className="absolute bottom-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-gradient-to-br from-[#9333EA] to-[#7E22CE] text-white flex items-center justify-center shadow-lg border border-white/40">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="pb-1 flex justify-center">
                      <div className="w-16 h-0.5 rounded-full bg-slate-300" />
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
          QUALITY REACT NATIVE APPLICATION DEVELOPMENT SERVICES SECTION (1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Exact React Native App Development & Code Illustration (1:1 from Reference Image) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[440px] flex items-center justify-center select-none">
                <img
                  src="/react_native_service_illustration.png"
                  alt="Quality React Native Application Development Services"
                  className="w-full h-auto object-contain select-none drop-shadow-xs"
                />
              </div>
            </div>

            {/* Right Column: Heading & Description Paragraph matching reference 1:1 */}
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Heading */}
              <h2
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.2]"
                style={{ fontSize: '32px' }}
              >
                Quality React Native<br className="hidden sm:inline" /> Application Development<br className="hidden sm:inline" /> Services
              </h2>

              {/* Description Paragraph */}
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                We provide a variety of React Native mobile application development services tailored to your unique development goals and challenges, whether you're a startup, SMB, or corporate enterprise. As a best React Native app development Agency, we help businesses across industries grow by leveraging the power of React Native to create dynamic, scalable web products that meet their unique needs. We deliver seamless cross-platform applications using a single codebase, cutting development time and costs significantly. Our services include everything from UI/UX design to backend integrations, ensuring that each project is custom-tailored to your requirements.
              </p>
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
          GET TOP-NOTCH REACT NATIVE DEVELOPMENT SERVICES SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered Top Heading */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Get Top-Notch React Native Development Services.
            </h2>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Light-Blue Patterned Quote Panel with Pointer */}
            <div className="lg:col-span-4 bg-[#F0F7FC] rounded-[3px] p-8 sm:p-10 flex flex-col justify-start relative overflow-hidden shadow-xs min-h-[300px]">
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

              {/* Right Speech Bubble Arrow / Notch */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#F0F7FC] z-20" />

              {/* Solid Large Blue Double Quotation Mark */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Quote Heading in Deep Sapphire Blue */}
              <h3
                className="font-[800] text-[#005F96] tracking-tight leading-[1.25] relative z-10"
                style={{ fontSize: '26px' }}
              >
                React Native<br />Development<br />Services Tailored<br />For Your Needs
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                We are the #1 react native development company; we use React Native to build highly interactive, versatile React Native applications for Android and iOS platforms. As an established react native development agency with decade-long experience, we follow an agile system to deliver the best-in-quality services.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                We take a step-by-step approach to ensure smooth and on-time delivery of React native app development services. Once we start working together, our React Native Web Development will work closely with you and keep you updated on each development process step.{' '}
                <a href="#quote-form" className="text-[#005F96] font-bold hover:underline">
                  Top reactjs development company
                </a>{' '}
                leverage all the great features of React Native to help you develop intuitive cross-platform mobile applications. In our React-native cross-platform development process, we use a single codebase shared between different platforms to enable faster time to market and shorter development cycles.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          CUTTING EDGE TECHNOLOGY CAROUSEL SECTION (FIREVY - WIDER & COMPACT HEIGHT)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans overflow-hidden text-left w-full">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
            style={{ fontSize: '32px' }}
          >
            Cutting Edge Technologies Firevy Use For Mobile App Development
          </h2>
        </div>

        {/* Full-Width Carousel Track with Edge-to-Edge Bleed & Hover Pause */}
        <div
          className="relative overflow-hidden w-full py-2 select-none"
          onMouseEnter={() => setIsTechHovered(true)}
          onMouseLeave={() => setIsTechHovered(false)}
        >
          <div
            className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${techCarouselIndex * 550}px)`
            }}
          >
            {[
              {
                title: 'Cross-Platform Frameworks',
                desc: 'Leverage modern React Native and cross-platform frameworks to build high-performance mobile applications with a single codebase and execute it on all mobile platforms seamlessly.',
                icon: <Smartphone className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              },
              {
                title: 'Machine Learning Development Service',
                desc: 'From custom AI applications to enterprise-scale automation, our developers leverage the latest machine learning Development Service and deep learning technologies to solve complex business challenges.',
                icon: <Brain className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              },
              {
                title: 'Augmented Reality Development Service',
                desc: 'Engage your audience with Augmented Reality Development Services overlay digital content into real world, creating interactive experiences that boost engagement and learning enhancing customer engagement.',
                icon: <Boxes className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              },
              {
                title: 'Low-Code No-Code Development Service',
                desc: 'Accelerate app development with Low-Code No-Code Development Services a platform that empowers businesses to create and deploy robust applications quickly without extensive manual coding.',
                icon: <Code2 className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              },
              {
                title: 'Cloud & API Integration Service',
                desc: 'Connect your React Native mobile app with resilient cloud infrastructure, GraphQL and REST APIs, microservices, and automated CI/CD deployment pipelines.',
                icon: <Cloud className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              },
              {
                title: 'IoT & Real-Time Sync Development',
                desc: 'Build connected mobile experiences communicating with IoT sensors, smart wearables, and smart appliances using Bluetooth Low Energy (BLE) and WebSockets.',
                icon: <Radio className="w-8 h-8 text-[#0084D1]" strokeWidth={1.8} />
              }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="w-[440px] sm:w-[500px] lg:w-[530px] shrink-0 rounded-[14px] bg-[#E3F2FD] p-6 sm:p-7 min-h-[200px] sm:min-h-[210px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#DBEEFA] border border-[#CCE5F7]"
              >
                {/* Top Icon */}
                <div className="mb-4">
                  {tech.icon}
                </div>

                {/* Tech Title */}
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-2.5 leading-snug tracking-tight">
                  {tech.title}
                </h3>

                {/* Tech Description */}
                <p
                  className="font-normal text-[#334155] text-[13px] sm:text-[13.5px] leading-[1.65]"
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
            onClick={() => setTechCarouselIndex((prev) => Math.min(prev + 1, 4))}
            disabled={techCarouselIndex >= 4}
            aria-label="Next Slide"
            className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
          >
            →
          </button>
        </div>
      </section>

      {/* Premium Services Grid Section (Placed immediately after Cutting Edge Technology) */}
      <PremiumServicesGrid />

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
                  onClick={() => setExpertActiveCategory(category)}
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
                        className={`text-xs font-[800] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${currentTab === 'tech'
                          ? 'bg-[#005F96] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                      >
                        Technologies
                      </button>
                      <button
                        onClick={() => setExpertTabs((prev) => ({ ...prev, [idx]: 'team' }))}
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

      {/* Success Stories, Sectors, Key Reasons & Showcase Sections */}
      <SuccessStories />
      <TransformativeImpactSection />
      <AboutUsStats />
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke React Native App Development Services" />
      <SuccessStoriesSection />
      <MobileAppExpertiseServices />
      <AndroidTechStackSection />
      <ReactNativeExpertiseServices />
      <ProudAwardsBanner />
      <ReactNativeReasonsChoose />
      <AndroidHiringModels />
      <AndroidComparativeAnalysis />
      <InnovativeSolutionsVideoSection />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile Android development sprints from Figma wireframes to CI/CD automated builds and Play Store release." />
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <WhatOurClientsSaySection />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* Signature 2-Column FAQ Section (1:1 Reference Match) */}
      <SapphireFaqSection />

      {/* Our Recent Blogs Section (1:1 Reference Match) */}
      <AndroidRecentBlogsSection />

      {/* What Sets Us Apart As Android App Development Company Section (1:1 Reference Match) */}
      <AndroidWhatSetsUsApartSection />

      {/* Have Android App Development Challenge To Address CTA Banner (1:1 Reference Match) */}
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default ReactNativeAppDevelopmentService;
