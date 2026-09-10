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
import XamarinApplicationServicesSection from './XamarinApplicationServicesSection';
import XamarinBenefitsSection from './XamarinBenefitsSection';
import XamarinTechStackSection from './XamarinTechStackSection';
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

export const XamarinAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);

  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      setTechCarouselIndex((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  const xamarinFaqs = [
    {
      q: '1. Why choose Xamarin for mobile application development?',
      a: 'Xamarin enables building native Android and iOS applications with a single shared C# codebase, delivering 100% native API access, near-native performance, and up to 40% reduction in development time and maintenance cost.'
    },
    {
      q: '2. What is the typical development timeline for a custom Xamarin mobile app?',
      a: 'A standard MVP app takes approximately 6 to 10 weeks. Complex enterprise Xamarin systems involving custom API integrations, IoT connectivity, or multi-role permission engines typically span 12 to 20 weeks.'
    },
    {
      q: '3. Can Firevy assist in migrating legacy Xamarin.Forms apps to .NET MAUI?',
      a: 'Yes, Firevy specializes in modernizing legacy Xamarin.Forms codebases to Microsoft .NET MAUI, ensuring seamless performance upgrades, modern UI rendering, and future-proof enterprise support.'
    },
    {
      q: '4. How do you protect intellectual property and ensure app security?',
      a: 'We sign strict non-disclosure agreements (NDA) before initiating discussions. All source code is owned 100% by you upon project completion, backed by static vulnerability audits and AES-256 encrypted local caching.'
    },
    {
      q: '5. What hiring engagement models are available for Xamarin developers?',
      a: 'We offer flexible engagement models: Dedicated Full-Time Developers (Monthly Retainer), Time & Material (T&M) Sprints, and Fixed-Price Milestones with strict SLA guarantees.'
    },
    {
      q: '6. What post-launch support and SLA maintenance do you provide?',
      a: 'We offer comprehensive SLA support packages including OS upgrade compatibility (Android 14/15+, iOS 17/18+), security patches, bug fixes, third-party API updates, and 24/7 performance monitoring.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Xamarin App Development Company in USA | Firevy"
        description="Avail our AI integrated Xamarin app development services to build full-featured, cross-platform mobile apps offering native user experience."
        canonical="/services/xamarin"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED XAMARIN HERO SECTION (MATCHING REFERENCE IMAGE 1:1)
          ========================================================================= */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 bg-[#F3F8FC] text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Column: Heading, Paragraph, Single CTA */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Xamarin App Development<br />Company in USA
              </h1>

              {/* Subtitle / Paragraph matching screenshot 1:1 */}
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.7] font-normal max-w-[580px]">
                Avail our AI integrated Xamarin app development services to build full-featured, cross-platform mobile apps offering native user experience. Our developers know the process of seamless integration of impressive animations with visual effects.
              </p>

              {/* Single CTA Button Directly Below Description */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] sm:text-[15px] transition-all shadow-sm group cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Dual Mobile Mockup Matching Screenshot 1:1 */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[400px] sm:max-w-[440px] flex items-center justify-center select-none">

                {/* Back Smartphone (Left, Standing behind, Teal App Screen) */}
                <div
                  className="w-[165px] sm:w-[185px] h-[345px] sm:h-[385px] rounded-[30px] bg-slate-950 border-[4px] border-slate-800 p-1 shadow-2xl relative overflow-hidden -rotate-6 translate-y-4 -mr-12 z-0 shrink-0"
                  style={{
                    boxShadow: '0 20px 40px -15px rgba(0,0,0,0.35)'
                  }}
                >
                  <div className="w-full h-full bg-[#EBF7F6] rounded-[24px] overflow-hidden flex flex-col justify-between p-2.5 text-slate-800 text-left">
                    {/* Teal Header */}
                    <div className="bg-[#187A82] -mx-2.5 -mt-2.5 p-2.5 text-white rounded-t-[24px] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[8.5px] font-bold">Home</span>
                        <div className="w-2 h-2 rounded-full bg-white/30" />
                      </div>
                      <div className="text-[7.5px] font-medium opacity-90 leading-tight">
                        Welcome to Cards<br />Let's Start
                      </div>
                    </div>

                    {/* Middle Illustration Cards */}
                    <div className="my-auto space-y-2 py-1">
                      <div className="bg-white rounded-[10px] p-2 shadow-xs border border-slate-100 flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#187A82]/10 flex items-center justify-center shrink-0">
                          <Bot className="w-4 h-4 text-[#187A82]" />
                        </div>
                        <div className="space-y-0.5 flex-1">
                          <div className="w-12 h-1.5 bg-slate-200 rounded" />
                          <div className="w-16 h-1 bg-slate-100 rounded" />
                        </div>
                      </div>

                      <div className="bg-white rounded-[10px] p-2 shadow-xs border border-slate-100 text-center space-y-1">
                        <span className="text-[7px] font-bold text-slate-700 block">Thank You !</span>
                        <p className="text-[6px] text-slate-400 leading-tight">
                          Thank you for sharing your valuable feedback
                        </p>
                      </div>
                    </div>

                    {/* Bottom Teal Button */}
                    <div className="pt-1">
                      <div className="w-full py-1.5 rounded-full bg-[#187A82] text-white text-[7.5px] font-bold text-center shadow-xs">
                        Back to Home
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Smartphone (Right, Foreground, Detailed Interactive Feedback UI) */}
                <div
                  className="w-[195px] sm:w-[220px] h-[385px] sm:h-[430px] rounded-[34px] bg-slate-950 border-[4.5px] border-slate-850 p-1.5 shadow-2xl relative overflow-hidden z-10 shrink-0"
                  style={{
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  {/* Top Notch Ear Speaker & Front Camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-slate-950 rounded-b-xl z-30 flex items-center justify-center space-x-1">
                    <div className="w-5 h-1 rounded-full bg-slate-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700/50" />
                  </div>

                  {/* App Screen */}
                  <div className="relative w-full h-full bg-[#EBF7F6] rounded-[26px] overflow-hidden flex flex-col justify-between text-left">
                    {/* Top Teal App Header */}
                    <div className="bg-[#187A82] pt-4 pb-2.5 px-3 text-white">
                      <div className="flex items-center justify-between pb-1.5">
                        <span className="text-[9px] font-bold tracking-tight">Home</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-white" />
                        </div>
                      </div>

                      {/* Welcome to Cards Subcard */}
                      <div className="bg-[#208D96] rounded-[8px] p-2 flex items-center justify-between shadow-xs">
                        <div className="space-y-0.5">
                          <span className="text-[8px] font-bold leading-tight block">Welcome To Cards</span>
                          <span className="text-[6.5px] text-teal-100 block">Let's Start Feedback</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Main White Feedback Form Container */}
                    <div className="flex-1 mx-2 -mt-1 mb-2 bg-white rounded-[12px] p-2.5 shadow-md border border-slate-100 flex flex-col justify-between space-y-1.5">
                      <div className="space-y-0.5">
                        <h4 className="text-[9.5px] font-[800] text-slate-800 tracking-tight leading-tight">
                          We want your feedback
                        </h4>
                        <p className="text-[6px] text-slate-400 leading-tight">
                          Please select a category & write feedback to let us know about your experience
                        </p>
                      </div>

                      {/* Dropdown 1: Select reason */}
                      <div className="h-5 rounded-[4px] border border-slate-200 bg-slate-50/50 px-2 flex items-center justify-between text-[6.8px] text-slate-500">
                        <span>Select reason</span>
                        <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                      </div>

                      {/* Dropdown 2: Select topic */}
                      <div className="h-5 rounded-[4px] border border-slate-200 bg-slate-50/50 px-2 flex items-center justify-between text-[6.8px] text-slate-500">
                        <span>Select topic</span>
                        <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                      </div>

                      {/* Text Input */}
                      <div className="h-7 rounded-[4px] border border-slate-200 bg-slate-50/50 px-2 py-1 text-[6.8px] text-slate-400 leading-tight">
                        <span>Write a something...</span>
                      </div>

                      {/* Happy with our service? */}
                      <div className="space-y-1 pt-0.5">
                        <span className="text-[7.5px] font-bold text-slate-800 block text-center">
                          Happy with our service ?
                        </span>

                        {/* Rating Pills Row 1 */}
                        <div className="flex items-center justify-center gap-1">
                          <span className="px-1.5 py-0.5 rounded-full border border-slate-200 text-[5.8px] text-slate-600 font-medium">
                            Recommended
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#187A82] text-white text-[5.8px] font-bold shadow-xs">
                            Good
                          </span>
                          <span className="px-2 py-0.5 rounded-full border border-slate-200 text-[5.8px] text-slate-600 font-medium">
                            Average
                          </span>
                        </div>

                        {/* Rating Pills Row 2 */}
                        <div className="flex items-center justify-center gap-1">
                          <span className="px-1.5 py-0.5 rounded-full border border-slate-200 text-[5.8px] text-slate-600 font-medium">
                            Friendly
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full border border-slate-200 text-[5.8px] text-slate-600 font-medium">
                            Responsive
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full border border-slate-200 text-[5.8px] text-slate-600 font-medium">
                            Helpful
                          </span>
                        </div>
                      </div>

                      {/* Continue CTA Button */}
                      <div className="pt-0.5">
                        <div className="w-full py-1.5 rounded-full bg-[#187A82] text-white text-[7.5px] font-bold text-center shadow-xs">
                          Continue
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Bar */}
                    <div className="pb-1 flex justify-center">
                      <div className="w-12 h-0.5 rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Realistic Floor Contact Shadow */}
              <div className="w-56 sm:w-64 h-3.5 bg-slate-900/15 rounded-full blur-md mx-auto -mt-1.5" />
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          SCALABLE XAMARIN APP DEVELOPMENT SERVICES SECTION (1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Exact 1:1 Matching Scalable Xamarin Woman & Analytics Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] flex items-center justify-center select-none">
                <svg
                  viewBox="0 0 540 420"
                  className="w-full h-auto drop-shadow-sm select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Soft Background Organic Blue Backdrop */}
                  <ellipse cx="280" cy="230" rx="210" ry="160" fill="#E8F4FB" />
                  <circle cx="210" cy="150" r="45" fill="#DEF0F8" opacity="0.6" />
                  <circle cx="430" cy="270" r="30" fill="#DEF0F8" opacity="0.5" />

                  {/* Faint Background Line-Art Tech Icons */}
                  <g stroke="#A8D4EB" strokeWidth="1.2" fill="none" opacity="0.75">
                    {/* Speech Bubble with Bar Chart */}
                    <g transform="translate(110, 110)">
                      <rect width="45" height="30" rx="8" fill="#88B8DE" opacity="0.85" stroke="none" />
                      <path d="M15 30 L10 38 L22 30 Z" fill="#88B8DE" stroke="none" />
                      <circle cx="15" cy="20" r="2.5" fill="#FFFFFF" />
                      <circle cx="23" cy="20" r="2.5" fill="#FFFFFF" />
                      <circle cx="31" cy="20" r="2.5" fill="#FFFFFF" />
                    </g>
                    {/* Small Bar Chart Board */}
                    <g transform="translate(170, 115)">
                      <rect width="28" height="22" rx="3" stroke="#A8D4EB" />
                      <line x1="174" y1="133" x2="174" y2="128" stroke="#A8D4EB" strokeWidth="2" />
                      <line x1="179" y1="133" x2="179" y2="123" stroke="#A8D4EB" strokeWidth="2" />
                      <line x1="184" y1="133" x2="184" y2="120" stroke="#A8D4EB" strokeWidth="2" />
                      <line x1="189" y1="133" x2="189" y2="125" stroke="#A8D4EB" strokeWidth="2" />
                    </g>
                    {/* Document Icon Top Right */}
                    <g transform="translate(365, 75)">
                      <path d="M0 0 L10 0 L15 5 L15 18 L0 18 Z" stroke="#A8D4EB" />
                      <line x1="3" y1="6" x2="9" y2="6" stroke="#A8D4EB" />
                      <line x1="3" y1="10" x2="12" y2="10" stroke="#A8D4EB" />
                      <line x1="3" y1="14" x2="10" y2="14" stroke="#A8D4EB" />
                    </g>
                    {/* Globe Icon */}
                    <circle cx="120" cy="215" r="10" stroke="#A8D4EB" />
                    <ellipse cx="120" cy="215" rx="4" ry="10" stroke="#A8D4EB" />
                    <line x1="110" y1="215" x2="130" y2="215" stroke="#A8D4EB" />
                    {/* Pie Chart Icon Left */}
                    <circle cx="185" cy="275" r="9" stroke="#A8D4EB" />
                    <path d="M185 266 L185 275 L194 275" stroke="#A8D4EB" />
                    {/* Pie Chart Icon Right */}
                    <circle cx="510" cy="305" r="9" stroke="#A8D4EB" />
                    <path d="M510 296 L510 305 L519 305" stroke="#A8D4EB" />
                  </g>

                  {/* Dot Matrix Patterns */}
                  <g fill="#9BCDEC" opacity="0.8">
                    <circle cx="385" cy="115" r="2" />
                    <circle cx="395" cy="115" r="2" />
                    <circle cx="405" cy="115" r="2" />
                    <circle cx="385" cy="125" r="2" />
                    <circle cx="395" cy="125" r="2" />
                    <circle cx="405" cy="125" r="2" />
                    <circle cx="230" cy="285" r="2" />
                    <circle cx="230" cy="295" r="2" />
                    <circle cx="230" cy="305" r="2" />
                    <circle cx="240" cy="285" r="2" />
                    <circle cx="240" cy="295" r="2" />
                    <circle cx="240" cy="305" r="2" />
                    <circle cx="265" cy="405" r="2" />
                    <circle cx="275" cy="405" r="2" />
                    <circle cx="285" cy="405" r="2" />
                  </g>

                  {/* Top Looping Blue Sync Arrow */}
                  <path
                    d="M272 142 C272 108, 335 98, 370 128"
                    stroke="#2D82B7"
                    strokeWidth="11"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon points="360,110 378,132 345,135" fill="#2D82B7" />

                  {/* Main Laptop Stand Base */}
                  <path d="M298 395 L472 395 L462 410 L308 410 Z" fill="#1C3B6C" />
                  <rect x="314" y="385" width="142" height="10" rx="3" fill="#3D72B4" />

                  {/* Main Screen Glass Panel */}
                  <rect x="250" y="145" width="200" height="175" rx="8" fill="#BBE2F8" opacity="0.85" />
                  <rect x="250" y="320" width="200" height="2" fill="#93C7E8" />

                  {/* Connection Leader Lines */}
                  <polyline points="265,225 295,242" stroke="#C4BAE5" strokeWidth="2.5" fill="none" />
                  <polyline points="370,195 390,175 415,175" stroke="#C4BAE5" strokeWidth="2.5" fill="none" />
                  <polyline points="355,275 375,295 400,295" stroke="#C4BAE5" strokeWidth="2.5" fill="none" />

                  {/* Central Donut Analytics Chart */}
                  <g transform="translate(340, 235)">
                    <circle cx="0" cy="0" r="46" stroke="#FFFFFF" strokeWidth="18" fill="none" />
                    {/* Dark Navy Segment */}
                    <circle
                      cx="0"
                      cy="0"
                      r="46"
                      stroke="#1C3B6C"
                      strokeWidth="18"
                      strokeDasharray="289"
                      strokeDashoffset="170"
                      strokeLinecap="butt"
                      fill="none"
                    />
                    {/* Cyan Segment */}
                    <circle
                      cx="0"
                      cy="0"
                      r="46"
                      stroke="#2E86AB"
                      strokeWidth="18"
                      strokeDasharray="289"
                      strokeDashoffset="220"
                      strokeLinecap="butt"
                      fill="none"
                    />
                  </g>

                  {/* Floating Metric 1: Top Left Mini Donut Card */}
                  <g transform="translate(245, 160)">
                    <rect width="36" height="36" rx="6" fill="#80B8E8" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="18" cy="18" r="9" stroke="#EBF5FB" strokeWidth="4.5" fill="none" />
                    <circle
                      cx="18"
                      cy="18"
                      r="9"
                      stroke="#1C3B6C"
                      strokeWidth="4.5"
                      strokeDasharray="56"
                      strokeDashoffset="28"
                      fill="none"
                    />
                  </g>

                  {/* Floating Metric 2: Left Checklist Badge */}
                  <g transform="translate(188, 175)">
                    <rect width="70" height="42" rx="6" fill="#84A7D0" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="6" y="8" width="16" height="14" rx="2" fill="#BFE3F7" />
                    <path d="M8 14 L12 19 L20 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <rect x="26" y="11" width="36" height="3" rx="1.5" fill="#FFFFFF" />
                    <rect x="26" y="18" width="28" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
                    <rect x="6" y="27" width="56" height="4" rx="2" fill="#6B91BE" />
                  </g>

                  {/* Floating Metric 3: Top Right Checklist Card */}
                  <g transform="translate(415, 135)">
                    <rect width="76" height="44" rx="6" fill="#789EC8" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="6" y="8" width="18" height="16" rx="2" fill="#9FC3E7" />
                    <path d="M9 15 L13 20 L21 11" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <rect x="28" y="12" width="40" height="3" rx="1.5" fill="#FFFFFF" />
                    <rect x="28" y="20" width="32" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
                    <rect x="6" y="30" width="62" height="4" rx="2" fill="#5F86B2" />
                  </g>

                  {/* Floating Metric 4: Middle Right Checklist Card */}
                  <g transform="translate(398, 280)">
                    <rect width="78" height="42" rx="6" fill="#80B0E4" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="6" y="8" width="18" height="15" rx="2" fill="#1C3B6C" />
                    <path d="M9 14 L13 19 L21 10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <rect x="28" y="12" width="42" height="3" rx="1.5" fill="#FFFFFF" />
                    <rect x="28" y="20" width="30" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
                    <rect x="6" y="29" width="64" height="4" rx="2" fill="#5B90C8" />
                  </g>

                  {/* Lower Pagination Slider Card */}
                  <g transform="translate(200, 335)">
                    <rect width="94" height="68" rx="6" fill="#9EC4EE" stroke="#FFFFFF" strokeWidth="2" />
                    <polygon points="206,370 212,364 212,376" fill="#1C3B6C" />
                    <polygon points="288,370 282,364 282,376" fill="#1C3B6C" />
                  </g>

                  {/* Right Sidebar Multi-Row Card */}
                  <g transform="translate(385, 325)">
                    <rect width="90" height="105" rx="6" fill="#81A6D4" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="8" y="10" width="16" height="16" rx="2" fill="#CDE7FB" />
                    <rect x="28" y="12" width="52" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="28" y="20" width="42" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />
                    
                    <rect x="8" y="32" width="16" height="16" rx="2" fill="#CDE7FB" />
                    <rect x="28" y="34" width="52" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="28" y="42" width="36" height="3" rx="1.5" fill="#FFFFFF" opacity="0.8" />

                    <rect x="8" y="55" width="12" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="24" y="55" width="44" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="8" y="65" width="12" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="24" y="65" width="48" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="8" y="75" width="12" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="24" y="75" width="40" height="4" rx="2" fill="#FFFFFF" />
                  </g>

                  {/* Character (Professional Woman in Royal Blue Suit) */}
                  <g transform="translate(108, 140)">
                    {/* Dark Curly Hair (Back) */}
                    <path
                      d="M26 38 C14 38, 4 58, 8 78 C11 88, 18 95, 25 95 C18 75, 30 52, 26 38 Z"
                      fill="#3A231C"
                    />
                    <path
                      d="M48 38 C60 38, 70 58, 66 78 C63 88, 56 95, 49 95 C56 75, 44 52, 48 38 Z"
                      fill="#3A231C"
                    />

                    {/* Neck & Face */}
                    <rect x="33" y="62" width="8" height="14" fill="#FAD7BD" />
                    <ellipse cx="37" cy="48" rx="14" ry="16" fill="#FAD7BD" />

                    {/* Happy Facial Features */}
                    <circle cx="41" cy="46" r="1.5" fill="#3A231C" />
                    <path d="M38 52 Q42 56 46 52" stroke="#3A231C" strokeWidth="1.4" strokeLinecap="round" fill="none" />

                    {/* Front Styled Hair */}
                    <path d="M24 42 C28 28, 48 28, 52 42 C54 36, 42 32, 32 36 C27 38, 25 42, 24 42 Z" fill="#2E1C17" />

                    {/* White Shirt Collar */}
                    <polygon points="33,74 41,74 37,84" fill="#FFFFFF" />

                    {/* Royal Blue Blazer Jacket */}
                    <path
                      d="M22 76 C14 90, 8 130, 12 158 L62 158 C66 130, 60 90, 52 76 C48 72, 26 72, 22 76 Z"
                      fill="#4285F4"
                    />
                    <polygon points="26,76 37,112 24,136 16,88" fill="#3367D6" />
                    <polygon points="48,76 37,112 50,136 58,88" fill="#3367D6" />
                    {/* Button */}
                    <circle cx="37" cy="125" r="2" fill="#1C3B6C" />

                    {/* Right Arm: Outstretched & Pointing toward dashboard */}
                    <path
                      d="M54 84 C68 92, 92 88, 110 72 C113 70, 115 73, 111 77 C94 95, 70 102, 50 96 Z"
                      fill="#4285F4"
                    />
                    {/* Hand with pointing finger */}
                    <path d="M110 72 L120 64 C122 62, 124 65, 121 68 L112 77 Z" fill="#FAD7BD" />

                    {/* Left Arm: Hand Resting on Hip */}
                    <path
                      d="M18 84 C10 96, 8 122, 12 140 C14 144, 20 144, 18 138 C14 122, 16 100, 24 88 Z"
                      fill="#3367D6"
                    />
                    <ellipse cx="14" cy="144" rx="4.5" ry="5" fill="#FAD7BD" />

                    {/* Dark Navy Trousers */}
                    <path d="M15 158 L59 158 L55 275 L41 275 L38 185 L36 185 L33 275 L19 275 Z" fill="#1C3B6C" />

                    {/* Brown Formal Shoes */}
                    <path d="M16 275 C16 270, 25 270, 35 275 L35 280 L16 280 Z" fill="#5C3A21" />
                    <path d="M41 275 C41 270, 50 270, 60 275 L60 280 L41 280 Z" fill="#5C3A21" />
                  </g>

                  {/* Crisp Bottom Baseline Bar */}
                  <rect x="85" y="420" width="420" height="7" rx="3.5" fill="#BFE3F7" />
                </svg>
              </div>
            </div>

            {/* Right Column: Copy matching reference 1:1 */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] leading-[1.25] tracking-tight">
                Scalable Xamarin App<br className="hidden sm:inline" /> Development Services
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                Our team makes use of native data structures and Xamarin's scalable tech stack, which gives them complete access to the iOS and Android APIs. We can assist you with integrating Xamarin apps with the cloud, IoT, or developing other pertinent custom technology-centric solutions. We provide affordable AI Xamarin app development services covering migrations, upgrades, app support & maintenance, Xamarin.Forms, iOS & Android app development, and cross-platform code reusability.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS & RECOGNITIONS BAR (ANIMATED MARQUEE 1:1)
          ========================================================================= */}
      <section className="w-full bg-[#005F96] text-white py-5 sm:py-7 border-y border-blue-900/30 overflow-hidden select-none font-sans text-left">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            
            {/* Left Block: Heading + FIXED Golden Trophy Badge */}
            <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
              <h3 className="text-lg sm:text-xl lg:text-[23px] font-[800] tracking-tight text-white leading-[1.25] max-w-[260px] sm:max-w-[300px]">
                World Wide Top Rated IT Company on Clutch
              </h3>

              {/* Fixed Golden Trophy with Laurel Wreath Badge */}
              <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  {/* Laurel Wreath */}
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
                  {/* Golden Trophy Cup */}
                  <path d="M 36 28 L 64 28 L 60 52 C 58 60 42 60 40 52 Z" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                  <path d="M 36 32 C 26 32 26 44 37 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 64 32 C 74 32 74 44 63 44" fill="none" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
                  <rect x="47" y="58" width="6" height="12" fill="#F59E0B" />
                  <rect x="38" y="70" width="24" height="6" rx="1" fill="#D97706" />
                  <polygon points="50,22 53,27 58,28 54,32 55,37 50,34 45,37 46,32 42,28 47,27" fill="#FDE047" />
                </svg>
              </div>
            </div>

            {/* Right Block: CONTINUOUS INFINITE AUTO-SCROLLING MARQUEE FOR OTHER BADGES */}
            <div className="w-full lg:flex-1 overflow-hidden relative">
              {/* Soft gradient edge fade for seamless scroll */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#005F96] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#005F96] to-transparent z-10 pointer-events-none" />

              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
                {/* Track 1 */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0">
                  {/* Badge 1: Red Ribbon - Dedicated Software Development */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900" fontFamily="sans-serif">DEDICATED</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
                      <g fill="#B91C1C" transform="translate(0, -2)">
                        <polygon points="38,58 39.5,61 43,61 40,63 41,66 38,64 35,66 36,63 33,61 36.5,61" />
                        <polygon points="50,56 51.5,59 55,59 52,61 53,64 50,62 47,64 48,61 45,59 48.5,59" />
                        <polygon points="62,58 63.5,61 67,61 64,63 65,66 62,64 59,66 60,63 57,61 60.5,61" />
                      </g>
                      <rect x="42" y="68" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 72 L 54 72 L 50 78 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 2: Clutch Hexagon Badge - Top Developers 2022 */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
                      <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                      <polygon points="50,9 88,30 88,80 50,101 12,80 12,30" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="50" y="25" textAnchor="middle" fill="#64748B" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
                      <text x="50" y="33" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="900">SOFTWARE COMPANY</text>
                      <rect x="18" y="38" width="64" height="25" fill="#1E293B" rx="2" />
                      <text x="47" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">Clutch</text>
                      <circle cx="68" cy="46" r="2.2" fill="#EF4444" />
                      <text x="50" y="74" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">DEVELOPERS</text>
                      <text x="50" y="86" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="900">2022</text>
                    </svg>
                  </div>

                  {/* Badge 3: Red Ribbon - Top Rated Software Dev Company */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900">SOFTWARE DEV</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800">COMPANY</text>
                      <g fill="#B91C1C">
                        <polygon points="50,60 51.5,63 55,63 52,65 53,68 50,66 47,68 48,65 45,63 48.5,63" />
                      </g>
                      <rect x="42" y="70" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 74 L 54 74 L 50 80 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 4: Red Ribbon - Software Developers */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="6.2" fontWeight="900">SOFTWARE DEVELOPERS</text>
                      <text x="50" y="55" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900">USA</text>
                      <g fill="#B91C1C">
                        <polygon points="50,64 51.5,67 55,67 52,69 53,72 50,70 47,72 48,69 45,67 48.5,67" />
                      </g>
                      <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 5: GoodFirms Blue Scalloped Badge */}
                  <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
                      <circle cx="50" cy="46" r="34" fill="#2563EB" />
                      <g fill="#FBBF24">
                        <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
                      </g>
                      <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
                      <rect x="48" y="48" width="4" height="6" fill="#D97706" />
                      <rect x="44" y="54" width="12" height="3" rx="1" fill="#B45309" />
                      <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900">G</text>
                      <rect x="12" y="60" width="76" height="20" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
                      <text x="50" y="74" textAnchor="middle" fill="#93C5FD" fontSize="4.8" fontWeight="800">SOFTWARE COMPANY</text>
                      <text x="50" y="86" textAnchor="middle" fill="#FDE047" fontSize="4.2" fontWeight="800">goodfirms.co</text>
                    </svg>
                  </div>
                </div>

                {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
                <div className="flex items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8 shrink-0" aria-hidden="true">
                  {/* Badge 1: Red Ribbon - Dedicated Software Development */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900" fontFamily="sans-serif">DEDICATED</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800" fontFamily="sans-serif">SOFTWARE COMPANY</text>
                      <g fill="#B91C1C" transform="translate(0, -2)">
                        <polygon points="38,58 39.5,61 43,61 40,63 41,66 38,64 35,66 36,63 33,61 36.5,61" />
                        <polygon points="50,56 51.5,59 55,59 52,61 53,64 50,62 47,64 48,61 45,59 48.5,59" />
                        <polygon points="62,58 63.5,61 67,61 64,63 65,66 62,64 59,66 60,63 57,61 60.5,61" />
                      </g>
                      <rect x="42" y="68" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 72 L 54 72 L 50 78 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 2: Clutch Hexagon Badge - Top Developers 2022 */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 110" className="w-full h-full drop-shadow-md">
                      <polygon points="50,5 92,28 92,82 50,105 8,82 8,28" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                      <polygon points="50,9 88,30 88,80 50,101 12,80 12,30" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" strokeDasharray="2,2" />
                      <text x="50" y="25" textAnchor="middle" fill="#64748B" fontSize="5.5" fontWeight="800">TOP DEDICATED</text>
                      <text x="50" y="33" textAnchor="middle" fill="#1E293B" fontSize="5.5" fontWeight="900">SOFTWARE COMPANY</text>
                      <rect x="18" y="38" width="64" height="25" fill="#1E293B" rx="2" />
                      <text x="47" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="900">Clutch</text>
                      <circle cx="68" cy="46" r="2.2" fill="#EF4444" />
                      <text x="50" y="74" textAnchor="middle" fill="#1E293B" fontSize="6" fontWeight="900">DEVELOPERS</text>
                      <text x="50" y="86" textAnchor="middle" fill="#64748B" fontSize="7" fontWeight="900">2022</text>
                    </svg>
                  </div>

                  {/* Badge 3: Red Ribbon - Top Rated Software Dev Company */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="44" textAnchor="middle" fill="#991B1B" fontSize="6" fontWeight="900">SOFTWARE DEV</text>
                      <text x="50" y="51" textAnchor="middle" fill="#111827" fontSize="4.8" fontWeight="800">COMPANY</text>
                      <g fill="#B91C1C">
                        <polygon points="50,60 51.5,63 55,63 52,65 53,68 50,66 47,68 48,65 45,63 48.5,63" />
                      </g>
                      <rect x="42" y="70" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 74 L 54 74 L 50 80 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 4: Red Ribbon - Software Developers */}
                  <div className="w-18 sm:w-20 md:w-22 h-20 sm:h-22 md:h-24 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 115" className="w-full h-full drop-shadow-md">
                      <path d="M 12 10 L 88 10 L 88 95 L 50 112 L 12 95 Z" fill="#FFFFFF" stroke="#991B1B" strokeWidth="2" />
                      <path d="M 12 10 L 88 10 L 88 32 L 12 32 Z" fill="#B91C1C" />
                      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900">MOST REVIEWED</text>
                      <text x="50" y="46" textAnchor="middle" fill="#991B1B" fontSize="6.2" fontWeight="900">SOFTWARE DEVELOPERS</text>
                      <text x="50" y="55" textAnchor="middle" fill="#111827" fontSize="5.5" fontWeight="900">USA</text>
                      <g fill="#B91C1C">
                        <polygon points="50,64 51.5,67 55,67 52,69 53,72 50,70 47,72 48,69 45,67 48.5,67" />
                      </g>
                      <rect x="42" y="74" width="16" height="14" rx="2" fill="none" stroke="#B91C1C" strokeWidth="1.5" />
                      <path d="M 46 78 L 54 78 L 50 84 Z" fill="#B91C1C" />
                    </svg>
                  </div>

                  {/* Badge 5: GoodFirms Blue Scalloped Badge */}
                  <div className="w-18 sm:w-20 md:w-22 h-18 sm:h-20 md:h-22 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <circle cx="50" cy="46" r="38" fill="#1E40AF" stroke="#60A5FA" strokeWidth="2.5" strokeDasharray="3,2" />
                      <circle cx="50" cy="46" r="34" fill="#2563EB" />
                      <g fill="#FBBF24">
                        <polygon points="50,18 51.5,22 55,22 52,24 53,28 50,25.5 47,28 48,24 45,22 48.5,22" />
                      </g>
                      <path d="M 42 32 L 58 32 L 55 46 C 54 50 46 50 45 46 Z" fill="#F59E0B" />
                      <rect x="48" y="48" width="4" height="6" fill="#D97706" />
                      <rect x="44" y="54" width="12" height="3" rx="1" fill="#B45309" />
                      <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900">G</text>
                      <rect x="12" y="60" width="76" height="20" rx="3" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.2" />
                      <text x="50" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900">TOP DEDICATED</text>
                      <text x="50" y="74" textAnchor="middle" fill="#93C5FD" fontSize="4.8" fontWeight="800">SOFTWARE COMPANY</text>
                      <text x="50" y="86" textAnchor="middle" fill="#FDE047" fontSize="4.2" fontWeight="800">goodfirms.co</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          GET CUTTING-EDGE XAMARIN APP DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered H2 Title (Single Line) */}
          <div className="text-center w-full max-w-5xl mx-auto mb-7 sm:mb-9">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
              Get Cutting-Edge Xamarin App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Light-Blue Patterned Quote Panel with Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[10px] p-8 sm:p-10 flex flex-col justify-start relative overflow-hidden shadow-xs min-h-[340px]">
              {/* Topographic Watermark Contour Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 400 400" fill="none" stroke="#D2E8F6" strokeWidth="1.2">
                <path d="M-40 60 C 50 20, 140 130, 220 70 C 300 10, 370 110, 440 80" />
                <path d="M-40 120 C 60 70, 160 180, 250 120 C 330 60, 390 170, 440 140" />
                <path d="M-40 180 C 80 130, 180 240, 280 170 C 360 110, 400 230, 440 200" />
                <path d="M-40 240 C 100 190, 200 300, 300 230 C 380 170, 420 290, 440 260" />
                <path d="M-40 300 C 120 250, 220 360, 320 290 C 400 230, 430 350, 440 320" />
                <ellipse cx="120" cy="180" rx="55" ry="40" stroke="#D2E8F6" strokeWidth="1" />
                <ellipse cx="280" cy="240" rx="80" ry="60" stroke="#D2E8F6" strokeWidth="1" />
              </svg>

              {/* Right Speech Bubble Arrow Pointer */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-[#F0F8FC] z-20" />

              {/* Big Teal Quote Icon */}
              <div className="text-[#005F96] mb-5 relative z-10">
                <svg viewBox="0 0 44 34" className="w-11 h-8.5 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Quote Headline */}
              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] tracking-tight leading-[1.25] relative z-10">
                Get Custom Applications That Take Your Business To The Next Level.
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs matching reference 1:1 */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                It's time to take your mobile app strategy to the next level with our Xamarin app development services. Firevy is a reliable AI-powered Xamarin app development company with a team of experts who develop faster yet cost-efficient Xamarin apps. As a leading Xamarin mobile app development company, we offer the best Xamarin cross-platform development services using C#, Visual Studio, many Xamarin forms and frameworks.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.75] font-normal">
                During every stage of the Xamarin android development process, our Xamarin mobile developer optimizes your apps for high value and usability for your end-users. We have delivered our Xamarin app development services to large enterprises, small & medium-sized businesses, as well as early-stage start-ups. Get in touch with Firevy to know more about our services tailored right for you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          XAMARIN APPLICATION DEVELOPMENT SERVICES (EXACT 1:1 MATCH WITH HOVER)
          ========================================================================= */}
      <XamarinApplicationServicesSection />

      {/* =========================================================================
          PROUD TO HAVE PICKED THESE UP ALONG THE WAY (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProudAwardsBanner />

      {/* =========================================================================
          XAMARIN BENEFITS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <XamarinBenefitsSection />

      {/* =========================================================================
          BUSINESS FRIENDLY HIRING MODELS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <AndroidHiringModels />

      {/* =========================================================================
          UNVEILING OUR INNOVATIVE SOLUTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* =========================================================================
          PROCESS WE FOLLOW (EXACT 1:1 MATCH)
          ========================================================================= */}
      <ProcessWeFollow />

      {/* =========================================================================
          OUR STORY, THEIR WORDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* =========================================================================
          TRUSTED BY THE WORLD'S LEADING BRANDS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <TrustedBrandsGrid />

      {/* =========================================================================
          SUCCESS MATRIX (EXACT 1:1 MATCH)
          ========================================================================= */}
      <SuccessMatrix />

      {/* =========================================================================
          TECHNOLOGY STACK (EXACT 1:1 MATCH)
          ========================================================================= */}
      <XamarinTechStackSection />

      {/* =========================================================================
          WE HAVE BEEN FEATURED IN (EXACT 1:1 MATCH WITH HOVER COLOR)
          ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* =========================================================================
          DIGITAL TRANSFORMATION (CASE STUDIES SLIDER 1:1 MATCH)
          ========================================================================= */}
      <DigitalTransformationSlider />

      {/* Remaining Service Components */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our Xamarin mobile application development services."
        faqs={xamarinFaqs}
      />
      <AndroidRecentBlogsSection />
      <AndroidWhatSetsUsApartSection />
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default XamarinAppDevelopmentService;
