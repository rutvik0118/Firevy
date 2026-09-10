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
import IOSTechnologyCombinationsSection from './IOSTechnologyCombinationsSection';
import AboutUsStats from './AboutUsStats';
import IOSTransformativeImpactSection from './IOSTransformativeImpactSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import IOSBenefitsSection from './IOSBenefitsSection';
import BestAndroidAppCompanyShowcase from './BestAndroidAppCompanyShowcase';
import AndroidTechStackSection from './AndroidTechStackSection';
import IOSExpertiseServices from './IOSExpertiseServices';
import IOSAwardsMarqueeBanner from './IOSAwardsMarqueeBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidCompanyBenefits from './AndroidCompanyBenefits';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
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

export const IOSAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);

  // Auto-scroll technology cards every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isTechHovered) return;
    const interval = setInterval(() => {
      setTechCarouselIndex((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated iOS Team',
    appType: 'Custom iOS Application',
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

  // iOS FAQs
  const sapphireFaqs = [
    {
      q: '1. What technologies do you use for iOS app development?',
      a: 'We leverage Swift, SwiftUI, Objective-C, UIKit, Combine, CoreData, Realm, Core ML, ARKit, and Metal to build cutting-edge iOS applications that run seamlessly on iPhone, iPad, Apple Watch, and macOS.'
    },
    {
      q: '2. Will you help publish our app to the Apple App Store?',
      a: 'Yes! We handle the complete Apple App Store submission process, including provisioning profiles, certificates, TestFlight beta distribution, Human Interface Guidelines compliance, and metadata optimization.'
    },
    {
      q: '3. Do we get 100% source code ownership and intellectual property?',
      a: 'Absolutely. Upon project completion and milestone handover, you receive full, unencumbered ownership of the complete source code repository, design assets, and intellectual property rights.'
    },
    {
      q: '4. Do you build apps compatible with all iOS versions and devices?',
      a: 'Yes, our iOS applications are engineered using responsive Auto Layout and SwiftUI declarative UI frameworks, ensuring pixel-perfect experiences across all iPhone and iPad models.'
    },
    {
      q: '5. Can you integrate Apple Intelligence & Core ML into our app?',
      a: 'Yes! We integrate on-device Core ML models, Apple Intelligence APIs, Vision framework, Siri Shortcuts, and NLP capabilities tailored to your specific business requirements.'
    },
    {
      q: '6. What post-launch maintenance and SLA support do you provide?',
      a: 'We offer comprehensive SLA support packages including new iOS version compatibility updates (iOS 18+), security patches, bug fixes, third-party SDK upgrades, and real-time crash monitoring.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top iOS App Development Company | Custom iPhone App Solutions"
        description="Top iOS App Development Company. We specialize in custom iPhone & iPad app development, bringing your ideas to life on the lively iOS platform."
        canonical="/services/ios"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING REFERENCE IMAGE COPY-TO-COPY)
          ========================================================================= */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 bg-[#EDF5F9] text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left Column: Heading, Paragraph, 4 Stats, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4">
              {/* Heading */}
              <h1 className="text-[30px] sm:text-[36px] lg:text-[40px] font-[800] text-[#0B0F19] leading-[1.18] tracking-tight">
                Top iOS App Development<br />Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal max-w-[520px]">
                We specialize in iOS app development services, bringing your app ideas to life on the lively iOS platform. As a highly experienced ios app development company, we have the skills and ability to assist startups and existing businesses in making an impact or extending their digital services with custom iOS app development. If you are looking for a reliable iOS app development company USA that delivers top-notch solutions, you're in the right place!
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
                    5 Star Clutch Reviews
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
                  <span>Hire IOS Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dual iPhone Mobile Device Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[400px] flex items-center justify-center">

                {/* Left iPhone: PetDirect Pet Store Home Screen */}
                <div
                  className="w-[170px] sm:w-[185px] lg:w-[195px] h-[340px] sm:h-[370px] lg:h-[390px] rounded-[28px] bg-[#0F172A] border-[3.5px] border-[#334155] p-1.5 shadow-2xl relative overflow-hidden z-10 shrink-0"
                  style={{
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {/* Top Notch Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 rounded-full bg-black z-30 flex items-center justify-end px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E293B]" />
                  </div>

                  {/* Screen Interior */}
                  <div className="bg-[#FAFAFC] w-full h-full rounded-[22px] p-2 flex flex-col justify-between text-slate-800 text-[8.5px] overflow-hidden select-none relative pt-5">

                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[7.5px] font-bold text-slate-500 pb-1">
                      <span>9:41</span>
                      <div className="flex space-x-1 items-center">
                        <span className="text-[7px]">5G</span>
                        <span className="w-2.5 h-1.5 rounded-xs border border-slate-500 flex items-center p-0.2"><span className="w-full h-full bg-slate-700 rounded-2xs" /></span>
                      </div>
                    </div>

                    {/* Location & User Profile */}
                    <div className="flex justify-between items-center py-0.5">
                      <div>
                        <div className="text-[6.5px] text-slate-400 font-semibold flex items-center">
                          <span className="text-red-500 mr-0.5">📍</span> Colorado (USA)
                        </div>
                        <div className="text-[9.5px] font-extrabold text-slate-900 leading-tight">Hi, Jason Roy</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-amber-200 border border-amber-300 overflow-hidden flex items-center justify-center text-[9px] font-bold text-amber-800">
                        👨
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="my-1 py-1 px-2 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center space-x-1 text-[7px] text-slate-400">
                      <span>🔍</span>
                      <span>What're you looking for?</span>
                    </div>

                    {/* Promo Banner: "Want Wet Food Now Available" */}
                    <div className="rounded-lg bg-[#FDE047] p-1.5 flex items-center justify-between shadow-xs relative overflow-hidden">
                      <div className="space-y-0.5 z-10">
                        <div className="text-[8px] font-extrabold text-slate-900 leading-tight">Want Wet Food</div>
                        <div className="text-[7px] font-bold text-amber-900">Now Available</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-amber-300/80 flex items-center justify-center text-[16px]">
                        🐶
                      </div>
                    </div>

                    {/* Deal of the day section */}
                    <div className="py-0.5">
                      <div className="flex justify-between items-center text-[7.5px] font-bold text-slate-900 mb-1">
                        <span>Deal of the day</span>
                        <span className="text-[6.5px] text-[#005F96] cursor-pointer">See All</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        {/* Card 1 */}
                        <div className="p-1 rounded-md bg-white border border-slate-100 shadow-xs flex flex-col items-center text-center">
                          <div className="w-6 h-6 rounded bg-orange-50 flex items-center justify-center text-[10px] mb-0.5">🥫</div>
                          <div className="text-[5.5px] font-semibold text-slate-700 truncate w-full">Grandorf Can</div>
                          <div className="text-[6px] font-bold text-[#005F96]">$75</div>
                        </div>
                        {/* Card 2 */}
                        <div className="p-1 rounded-md bg-white border border-slate-100 shadow-xs flex flex-col items-center text-center">
                          <div className="w-6 h-6 rounded bg-amber-50 flex items-center justify-center text-[10px] mb-0.5">🥩</div>
                          <div className="text-[5.5px] font-semibold text-slate-700 truncate w-full">Pedigree Pouch</div>
                          <div className="text-[6px] font-bold text-[#005F96]">$65</div>
                        </div>
                        {/* Card 3 */}
                        <div className="p-1 rounded-md bg-white border border-slate-100 shadow-xs flex flex-col items-center text-center">
                          <div className="w-6 h-6 rounded bg-emerald-50 flex items-center justify-center text-[10px] mb-0.5">🍖</div>
                          <div className="text-[5.5px] font-semibold text-slate-700 truncate w-full">Fresh Treats</div>
                          <div className="text-[6px] font-bold text-[#005F96]">$120</div>
                        </div>
                      </div>
                    </div>

                    {/* Explore more on PetDirect */}
                    <div className="py-0.5">
                      <div className="text-[7.5px] font-bold text-slate-900 mb-0.5">Explore more on PetDirect</div>
                      <div className="flex space-x-1 overflow-hidden">
                        <div className="flex-1 p-1 rounded-md bg-white border border-slate-100 text-[6px] flex items-center space-x-1">
                          <span className="text-[8px]">🥣</span>
                          <span className="truncate text-slate-700">Stainless Dog Bowl</span>
                        </div>
                        <div className="flex-1 p-1 rounded-md bg-white border border-slate-100 text-[6px] flex items-center space-x-1">
                          <span className="text-[8px]">🦴</span>
                          <span className="truncate text-slate-700">Flamingo Chewing</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="pt-1 border-t border-slate-100 flex justify-around text-[7.5px] text-slate-400">
                      <span className="text-[#F97316] font-bold flex flex-col items-center"><span>🏠</span><span className="text-[5.5px]">Home</span></span>
                      <span className="flex flex-col items-center"><span>📑</span><span className="text-[5.5px]">Category</span></span>
                      <span className="flex flex-col items-center"><span>🛒</span><span className="text-[5.5px]">Cart</span></span>
                      <span className="flex flex-col items-center"><span>👤</span><span className="text-[5.5px]">Profile</span></span>
                    </div>

                    {/* Home Indicator */}
                    <div className="w-12 h-0.5 rounded-full bg-slate-400 mx-auto -mb-0.5" />
                  </div>
                </div>

                {/* Right iPhone: Product Details Screen */}
                <div
                  className="w-[155px] sm:w-[170px] lg:w-[180px] h-[320px] sm:h-[350px] lg:h-[370px] rounded-[26px] bg-[#0F172A] border-[3px] border-[#334155] p-1.5 shadow-xl relative overflow-hidden z-0 -ml-8 sm:-ml-10 shrink-0"
                  style={{
                    boxShadow: '0 15px 30px -10px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Top Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black z-30" />

                  {/* Screen Content */}
                  <div className="bg-white w-full h-full rounded-[20px] p-2 flex flex-col justify-between text-slate-800 text-[8px] overflow-hidden select-none pt-4">

                    {/* Top Bar (Back & Favorite) */}
                    <div className="flex justify-between items-center text-[8px] text-slate-600 pb-0.5">
                      <span>←</span>
                      <span className="text-red-500 font-bold">♥</span>
                    </div>

                    {/* Product Image Mockup (ND Food Bag) */}
                    <div className="h-24 rounded-lg bg-gradient-to-b from-amber-50 to-orange-50/50 flex flex-col items-center justify-center p-1 relative border border-slate-100">
                      <div className="w-12 h-16 rounded-md bg-white border-2 border-amber-400 shadow-sm flex flex-col items-center justify-center p-1 text-center">
                        <span className="text-[8px] font-black text-red-600 leading-none">N&D</span>
                        <span className="text-[5px] font-bold text-slate-800 leading-tight">Grain-Free</span>
                        <span className="text-[10px] my-0.5">🍗</span>
                        <span className="text-[4.5px] text-slate-500">Chicken & Pomegranate</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="py-0.5">
                      <div className="text-[7.5px] font-extrabold text-slate-900 leading-tight line-clamp-2">
                        Genuine dry food - Real seasoned grain free chicken & Pomegranate Senior Adult
                      </div>
                    </div>

                    {/* Price & Quantity Selector */}
                    <div className="flex justify-between items-center py-0.5">
                      <div className="text-[10px] font-black text-[#005F96]">$75</div>
                      <div className="flex items-center space-x-1.5 bg-slate-100 px-1.5 py-0.5 rounded-full text-[7px] font-bold">
                        <span className="text-slate-500 cursor-pointer">-</span>
                        <span>01</span>
                        <span className="text-slate-900 cursor-pointer">+</span>
                      </div>
                    </div>

                    {/* Size Selector */}
                    <div className="flex space-x-1 py-0.5">
                      <span className="px-1.5 py-0.5 rounded bg-[#F97316] text-white text-[6px] font-bold">400gm</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[6px] font-medium">2kg</span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[6px] font-medium">6kg</span>
                    </div>

                    {/* Description Snippet */}
                    <p className="text-[5.5px] text-slate-400 leading-[1.3] line-clamp-2">
                      Delicious Chicken Recipe is The First Ingredient That's Fuel For All-day Running And Playing. High-Protein Kibble.
                    </p>

                    {/* Add to Cart Button */}
                    <div className="pt-1">
                      <div className="w-full py-1.5 rounded-md bg-[#F97316] text-white font-bold text-[7.5px] text-center shadow-xs">
                        Add to cart
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="w-10 h-0.5 rounded-full bg-slate-300 mx-auto" />
                  </div>
                </div>

              </div>

              {/* Floor Contact Shadow */}
              <div className="w-48 sm:w-56 h-3 bg-slate-900/15 rounded-full blur-sm mx-auto -mt-1" />
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          BRIEF ABOUT OUR IOS APP DEVELOPERS SECTION (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: iOS App Development & Programmer Illustration */}
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
                    <path d="M 85 105 L 115 110 L 140 165 L 155 165 L 155 172 L 132 172 L 105 118 Z" fill="#1E3A8A" />
                    <ellipse cx="145" cy="172" rx="12" ry="4.5" fill="#0F172A" />

                    <path d="M 68 100 L 95 105 L 108 170 L 125 170 L 125 176 L 100 176 L 85 112 Z" fill="#2563EB" />
                    <ellipse cx="115" cy="176" rx="12" ry="4.5" fill="#0F172A" />

                    {/* Developer Body / Torso */}
                    <path d="M 62 42 C 60 35, 78 30, 92 35 C 100 38, 105 50, 98 75 L 85 102 L 60 98 L 62 42 Z" fill="#F97316" />

                    {/* Developer Head & Hair */}
                    <rect x="80" y="28" width="8" height="9" fill="#FBCFE8" />
                    <circle cx="84" cy="22" r="10" fill="#FBCFE8" />
                    <path d="M 74 20 C 74 12, 85 8, 92 12 C 95 14, 96 18, 94 22 C 90 20, 85 20, 82 23 C 78 22, 74 23, 74 20 Z" fill="#1E293B" />

                    {/* Developer Arms & Laptop */}
                    <path d="M 68 45 L 85 75 L 115 72 L 110 80 L 80 82 L 62 50 Z" fill="#F97316" />
                    <circle cx="112" cy="74" r="4" fill="#FBCFE8" />

                    {/* White Modern Slim Laptop */}
                    <g transform="translate(98, 62) rotate(-10)">
                      <rect x="0" y="0" width="3" height="24" rx="1" fill="#CBD5E1" />
                      <rect x="2" y="1" width="22" height="22" rx="2" fill="#F8FAFC" stroke="#E2E8F0" />
                      <rect x="-4" y="21" width="30" height="3" rx="1.5" fill="#E2E8F0" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Heading & 2 Detailed Paragraphs */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2
                className="font-[800] text-[#0B0F19] tracking-tight leading-[1.2]"
                style={{ fontSize: '32px' }}
              >
                Brief About Our IOS App<br className="hidden sm:inline" /> Developers
              </h2>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                Hire iOS app developer who knows Swift and Objective-C, the main programming languages. They excel in writing clean, efficient code and troubleshooting complicated situations. As an iPhone app development company, our developers are innovative problem-solvers who love challenges. From brainstorming creative concepts to integrating cutting-edge features, we are the reputable iOS app development company for the best project results.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                As a leading iOS mobile app development company, we guarantee your app meets the highest quality and performance requirements, they test and provide quality assurance using industry best practices. Overall, our iOS app developers are talented, collaborative, and dedicated to quality. They can implement your app ideas and help you reach your company goals with their experience and devotion.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          MOBILE APP MARKET STATS & MARKET SIZE SECTION (COMPACT & SLEEK GRAPHS)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="space-y-10 sm:space-y-14">

            {/* ROW 1: Content Left + Compact Bar Chart Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading + Paragraph + Button */}
              <div className="lg:col-span-7 space-y-3.5">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                  Mobile App Market Stats
                </h2>

                <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal max-w-lg">
                  The global mobile application market size was valued at nearly USD 250.75 billion in 2023 and is projected to grow at a CAGR of 15% from 2024 to 2030.
                </p>

                <div className="pt-1.5">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[13.5px] transition-all shadow-xs"
                  >
                    Connect With An Expert
                  </a>
                </div>
              </div>

              {/* Right Column: Compact & Premium 100% SVG Bar Chart Graphic */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
                <div className="w-full max-w-[420px] rounded-xl bg-[#F4F8FA] border border-slate-200/80 p-4 shadow-sm transition-all duration-300 ease-out hover:scale-[1.12] sm:hover:scale-[1.16] hover:shadow-2xl hover:shadow-slate-500/25 hover:border-[#005F96]/40 hover:z-30 cursor-pointer group bg-opacity-100">
                  {/* Chart Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[11.5px] font-bold text-slate-800 group-hover:text-[#005F96] transition-colors">
                      Mobile Application Market Size
                    </h4>
                    <span className="text-[9px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200/60 shadow-2xs">2020-2030</span>
                  </div>

                  {/* 100% SVG Stacked Bar Chart Visualization */}
                  <div className="w-full relative flex items-center justify-center pt-1 pb-1">
                    <svg viewBox="0 0 400 170" className="w-full h-auto overflow-visible select-none">
                      <defs>
                        {/* Gradient Fills */}
                        <linearGradient id="googleGrad" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#1E3A8A" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                        <linearGradient id="appleGrad" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#0284C7" />
                          <stop offset="100%" stopColor="#38BDF8" />
                        </linearGradient>
                        <linearGradient id="othersGrad" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#67E8F9" />
                        </linearGradient>
                        <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
                        </filter>
                      </defs>

                      {/* Horizontal Gridlines */}
                      <line x1="25" y1="30" x2="395" y2="30" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="25" y1="65" x2="395" y2="65" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="25" y1="100" x2="395" y2="100" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                      <line x1="25" y1="135" x2="395" y2="135" stroke="#94A3B8" strokeWidth="1" />

                      {/* Y-Axis Reference Markers */}
                      <text x="20" y="33" fill="#94A3B8" fontSize="6.5" fontWeight="600" textAnchor="end">$600B</text>
                      <text x="20" y="68" fill="#94A3B8" fontSize="6.5" fontWeight="600" textAnchor="end">$400B</text>
                      <text x="20" y="103" fill="#94A3B8" fontSize="6.5" fontWeight="600" textAnchor="end">$200B</text>
                      <text x="20" y="137" fill="#94A3B8" fontSize="6.5" fontWeight="600" textAnchor="end">$0</text>

                      {/* Stacked Bars (11 Years: 2020 to 2030) */}
                      {[
                        { year: '2020', x: 48, g: 12, a: 11, o: 6, tag: false },
                        { year: '2021', x: 81, g: 15, a: 14, o: 8, tag: false },
                        { year: '2022', x: 114, g: 19, a: 18, o: 9, tag: false },
                        { year: '2023', x: 147, g: 24, a: 23, o: 11, tag: true },
                        { year: '2024', x: 180, g: 29, a: 28, o: 13, tag: false },
                        { year: '2025', x: 213, g: 35, a: 34, o: 15, tag: false },
                        { year: '2026', x: 246, g: 41, a: 40, o: 17, tag: false },
                        { year: '2027', x: 279, g: 47, a: 45, o: 19, tag: false },
                        { year: '2028', x: 312, g: 52, a: 50, o: 21, tag: false },
                        { year: '2029', x: 345, g: 56, a: 54, o: 23, tag: false },
                        { year: '2030', x: 378, g: 60, a: 57, o: 25, tag: false }
                      ].map((bar, i) => {
                        const totalH = bar.g + bar.a + bar.o;
                        const barW = 15;
                        const xLeft = bar.x - barW / 2;
                        const baseY = 135;

                        const googleY = baseY - bar.g;
                        const appleY = googleY - bar.a;
                        const othersY = appleY - bar.o;

                        return (
                          <g key={i} className="transition-all duration-200 hover:opacity-90 cursor-pointer">
                            {/* Google Store (Bottom segment) */}
                            <rect
                              x={xLeft}
                              y={googleY}
                              width={barW}
                              height={bar.g}
                              fill="url(#googleGrad)"
                            />

                            {/* Apple Store (Middle segment) */}
                            <rect
                              x={xLeft}
                              y={appleY}
                              width={barW}
                              height={bar.a}
                              fill="url(#appleGrad)"
                            />

                            {/* Others (Top segment with rounded cap) */}
                            <rect
                              x={xLeft}
                              y={othersY}
                              width={barW}
                              height={bar.o}
                              rx="2.5"
                              fill="url(#othersGrad)"
                            />

                            {/* Year Label */}
                            <text
                              x={bar.x}
                              y="146"
                              fill="#64748B"
                              fontSize="7"
                              fontWeight="600"
                              textAnchor="middle"
                            >
                              {bar.year}
                            </text>

                            {/* 2023 $250.75 B Floating Callout Badge */}
                            {bar.tag && (
                              <g transform={`translate(${bar.x}, ${othersY - 14})`} filter="url(#badgeShadow)">
                                <rect
                                  x="-23"
                                  y="-8"
                                  width="46"
                                  height="13"
                                  rx="3"
                                  fill="#005F96"
                                />
                                <polygon points="-3,5 3,5 0,8" fill="#005F96" />
                                <text
                                  x="0"
                                  y="1"
                                  fill="#FFFFFF"
                                  fontSize="6.5"
                                  fontWeight="800"
                                  textAnchor="middle"
                                >
                                  $250.75 B
                                </text>
                              </g>
                            )}
                          </g>
                        );
                      })}

                      {/* Bottom Legend */}
                      <g transform="translate(115, 164)">
                        {/* Google Store */}
                        <rect x="0" y="-5" width="7" height="7" rx="1.5" fill="#1E3A8A" />
                        <text x="10" y="1" fill="#475569" fontSize="7" fontWeight="600">Google Store</text>

                        {/* Apple Store */}
                        <rect x="68" y="-5" width="7" height="7" rx="1.5" fill="#0284C7" />
                        <text x="78" y="1" fill="#475569" fontSize="7" fontWeight="600">Apple Store</text>

                        {/* Others */}
                        <rect x="135" y="-5" width="7" height="7" rx="1.5" fill="#06B6D4" />
                        <text x="145" y="1" fill="#475569" fontSize="7" fontWeight="600">Others</text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Compact Donut Chart Left + Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Compact & Premium Donut Chart Graphic */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start relative z-10">
                <div className="w-full max-w-[420px] rounded-xl bg-[#F4F8FA] border border-slate-200/80 p-4 shadow-sm flex flex-col items-center transition-all duration-300 ease-out hover:scale-[1.12] sm:hover:scale-[1.16] hover:shadow-2xl hover:shadow-slate-500/25 hover:border-[#005F96]/40 hover:z-30 cursor-pointer group bg-opacity-100">
                  {/* Chart Title */}
                  <h4 className="text-[11px] sm:text-[11.5px] font-bold text-slate-800 text-left mb-1 w-full group-hover:text-[#005F96] transition-colors">
                    Number of Global Smartphone Users From 2020 To 2025(In Billions)
                  </h4>

                  {/* 360-Degree Circular Donut Graphic */}
                  <div className="relative w-48 h-40 sm:w-52 sm:h-44 flex items-center justify-center transition-transform duration-300 ease-out">
                    <svg viewBox="0 0 200 170" className="w-full h-full overflow-visible">
                      {/* Defs for Arc Gradients */}
                      <defs>
                        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1" />
                        </filter>
                      </defs>

                      {/* Donut Center Shadow/Hole */}
                      <circle cx="100" cy="85" r="28" fill="#FFFFFF" filter="url(#softGlow)" />

                      {/* Arc 1: 2021 (Top Pink #F472B6) */}
                      <path d="M 76 48.8 A 42 42 0 0 1 124 48.8" fill="none" stroke="#F472B6" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Arc 2: 2022 (Top-Right Yellow #FBBF24) */}
                      <path d="M 124 48.8 A 42 42 0 0 1 142 85" fill="none" stroke="#FBBF24" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Arc 3: 2023 (Right/Bottom-Right Purple #8B5CF6) */}
                      <path d="M 142 85 A 42 42 0 0 1 124 121.2" fill="none" stroke="#8B5CF6" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Arc 4: 2024 (Bottom Light Coral #FB7185) */}
                      <path d="M 124 121.2 A 42 42 0 0 1 76 121.2" fill="none" stroke="#FB7185" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Arc 5: 2025 (Bottom-Left Cyan #06B6D4) */}
                      <path d="M 76 121.2 A 42 42 0 0 1 58 85" fill="none" stroke="#06B6D4" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Arc 6: 2020 (Left Orange #F97316) */}
                      <path d="M 58 85 A 42 42 0 0 1 76 48.8" fill="none" stroke="#F97316" strokeWidth="21" strokeLinecap="butt" className="transition-all duration-200 hover:stroke-[24px] hover:brightness-110 cursor-pointer" />

                      {/* Thin Separator Rings */}
                      <circle cx="100" cy="85" r="31.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
                      <circle cx="100" cy="85" r="52.5" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />

                      {/* Data Labels inside Donut Segments */}
                      <text x="100" y="46" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.1</text>
                      <text x="129" y="65" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.26</text>
                      <text x="129" y="110" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.33</text>
                      <text x="100" y="128" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.41</text>
                      <text x="71" y="110" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">7.67</text>
                      <text x="71" y="65" fill="#1E293B" fontSize="7" fontWeight="800" textAnchor="middle" className="pointer-events-none select-none">6.95</text>

                      {/* Year Callout Labels & Pointers */}
                      {/* 2021 Top */}
                      <line x1="100" y1="33" x2="100" y2="19" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="100" cy="33" r="1.5" fill="#64748B" />
                      <text x="100" y="15" fill="#334155" fontSize="7" fontWeight="700" textAnchor="middle">2021</text>

                      {/* 2022 Top-Right */}
                      <line x1="136" y1="50" x2="149" y2="35" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="136" cy="50" r="1.5" fill="#64748B" />
                      <text x="153" y="33" fill="#334155" fontSize="7" fontWeight="700" textAnchor="start">2022</text>

                      {/* 2023 Right */}
                      <line x1="147" y1="85" x2="162" y2="85" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="147" cy="85" r="1.5" fill="#64748B" />
                      <text x="166" y="87.5" fill="#334155" fontSize="7" fontWeight="700" textAnchor="start">2023</text>

                      {/* 2024 Bottom-Right */}
                      <line x1="136" y1="120" x2="149" y2="135" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="136" cy="120" r="1.5" fill="#64748B" />
                      <text x="153" y="139" fill="#334155" fontSize="7" fontWeight="700" textAnchor="start">2024</text>

                      {/* 2025 Bottom-Left */}
                      <line x1="64" y1="120" x2="51" y2="135" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="64" cy="120" r="1.5" fill="#64748B" />
                      <text x="47" y="139" fill="#334155" fontSize="7" fontWeight="700" textAnchor="end">2025</text>

                      {/* 2020 Left */}
                      <line x1="53" y1="85" x2="38" y2="85" stroke="#94A3B8" strokeWidth="1" strokeDasharray="1.5 1.5" />
                      <circle cx="53" cy="85" r="1.5" fill="#64748B" />
                      <text x="34" y="87.5" fill="#334155" fontSize="7" fontWeight="700" textAnchor="end">2020</text>
                    </svg>
                  </div>

                  {/* Donut Bottom Label */}
                  <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wide -mt-1">
                    Mobile Users in Billions
                  </span>
                </div>
              </div>

              {/* Right Column: Heading + Paragraph + Button */}
              <div className="lg:col-span-7 space-y-3.5">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                  The Mobile Application<br />Development Market Size
                </h2>

                <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal max-w-lg">
                  According to one study, there will be 4.74 billion smartphone users by the end of 2024, growing at a rate of 2.2% each year. When examining the rise in smartphone users between 2020 to 2025 , we find that the average yearly growth rate is 6.2%.
                </p>

                <div className="pt-1.5">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[13.5px] transition-all shadow-xs"
                  >
                    Connect With An Expert
                  </a>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED CLUTCH AWARDS & RECOGNITIONS BAR (ANIMATED MARQUEE)
          ========================================================================= */}
      <IOSAwardsMarqueeBanner />

      {/* =========================================================================
          GET 100% CUSTOMIZABLE IOS APP DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Get 100% Customizable iOS App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Light-Blue Patterned Quote Panel */}
            <div className="lg:col-span-4 bg-[#EBF5FA] rounded-[6px] p-8 sm:p-10 flex flex-col justify-start relative overflow-hidden shadow-xs min-h-[340px]">
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" viewBox="0 0 400 400" fill="none" stroke="#CBE4F3" strokeWidth="1.2">
                <path d="M-40 60 C 50 20, 140 130, 220 70 C 300 10, 370 110, 440 80" />
                <path d="M-40 120 C 60 70, 160 180, 250 120 C 330 60, 390 170, 440 140" />
                <path d="M-40 180 C 80 130, 180 240, 280 170 C 360 110, 400 230, 440 200" />
                <path d="M-40 240 C 100 190, 200 300, 300 230 C 380 170, 420 290, 440 260" />
                <path d="M-40 300 C 120 250, 220 360, 320 290 C 400 230, 430 350, 440 320" />
                <ellipse cx="120" cy="180" rx="55" ry="40" stroke="#CBE4F3" strokeWidth="1" />
                <ellipse cx="280" cy="240" rx="80" ry="60" stroke="#CBE4F3" strokeWidth="1" />
              </svg>

              <div className="text-[#00669E] mb-5 relative z-10">
                <svg viewBox="0 0 44 34" className="w-11 h-8.5 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              <h3
                className="font-[800] text-[#00669E] tracking-tight leading-[1.2] relative z-10"
                style={{ fontSize: '28px' }}
              >
                Not Just Another<br />iOS App<br />Development<br />Company
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                As an iOS app development agency, our organization prides itself on providing customized solutions that match your vision and objectives. Our experienced iOS developers offer years of experience and skill. From ideation to coding, every stage of the iOS mobile application development services process is tailored to your needs.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                As a Top-Rated iOS app development company, we collaborate with you to understand your goals and design an innovative app or improve an existing one. We want to turn your ideas into a fully working iOS app that surpasses your expectations. We make your app stand out in the crowded market with creativity and excellence. From user interface design to backend operations, your app is meticulously created through expert iOS mobile app design and development processes. Utilize our custom iOS application development services for full customization and innovative solutions. Contact us immediately to discuss your app concept and start realizing it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          TECHNOLOGY FIREVY USE FOR IOS APP DEVELOPMENT (1:1 REFERENCE MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans overflow-hidden text-left">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Technology Firevy Use For iOS App Development
            </h2>
          </div>

          <div
            className="relative overflow-hidden w-full py-2 select-none"
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
          >
            <div
              className="flex space-x-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${techCarouselIndex * 394}px)`
              }}
            >
              {[
                {
                  title: 'Vision Framework',
                  desc: 'Use the Vision Framework to add advanced picture and video analysis to your iOS app. Our developers enable object identification, facial recognition, word recognition, and more to help your app interact with visual content.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Face outline / Scanning frame */}
                      <path d="M 8 14 L 8 10 C 8 7.8 9.8 6 12 6 L 16 6" />
                      <path d="M 28 6 L 32 6 C 34.2 6 36 7.8 36 10 L 36 14" />
                      <path d="M 8 30 L 8 34 C 8 36.2 9.8 38 12 38 L 16 38" />
                      <path d="M 28 38 L 32 38 C 34.2 38 36 36.2 36 34 L 36 30" />
                      {/* Stylized Face Contour */}
                      <path d="M 15 17 C 15 13, 29 13, 29 17 C 29 25, 25 31, 22 33 C 19 31, 15 25, 15 17 Z" strokeWidth="1.6" />
                      {/* Neural Eye Dots & Focus Crosshair */}
                      <circle cx="18.5" cy="19" r="1.5" fill="#0099DA" stroke="none" />
                      <circle cx="25.5" cy="19" r="1.5" fill="#0099DA" stroke="none" />
                      <line x1="22" y1="21" x2="22" y2="25" strokeWidth="1.5" />
                      <circle cx="22" cy="28" r="1" fill="#0099DA" stroke="none" />
                    </svg>
                  )
                },
                {
                  title: 'Reality Composer',
                  desc: "Our specialty is dynamic 3D scenes that work with your app. Apple's powerful tools for intuitive and engaging experiences let us bring your AR thoughts to life for product demos, educational tools, and games.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.7] stroke-linecap-round stroke-linejoin-round">
                      {/* Browser Window Frame */}
                      <rect x="5" y="6" width="34" height="32" rx="3" strokeWidth="1.8" />
                      <line x1="5" y1="13" x2="39" y2="13" strokeWidth="1.5" />
                      <circle cx="9.5" cy="9.5" r="1" fill="#0099DA" stroke="none" />
                      <circle cx="13.5" cy="9.5" r="1" fill="#0099DA" stroke="none" />
                      <circle cx="17.5" cy="9.5" r="1" fill="#0099DA" stroke="none" />

                      {/* Left: 3D Badge with mini text lines */}
                      <text x="9" y="22" fill="#0099DA" fontSize="6.5" fontWeight="900" stroke="none" fontFamily="sans-serif">3D</text>
                      <line x1="9" y1="26" x2="16" y2="26" strokeWidth="1.3" />
                      <line x1="9" y1="29" x2="14" y2="29" strokeWidth="1.3" />
                      <line x1="9" y1="32" x2="17" y2="32" strokeWidth="1.3" />

                      {/* Right: 3D Isometric Cube Scene */}
                      <polygon points="28,17 35,21 28,25 21,21" strokeWidth="1.6" fill="#0099DA" fillOpacity="0.1" />
                      <polygon points="21,21 28,25 28,33 21,29" strokeWidth="1.6" fill="#0099DA" fillOpacity="0.2" />
                      <polygon points="35,21 28,25 28,33 35,29" strokeWidth="1.6" fill="#0099DA" fillOpacity="0.3" />
                    </svg>
                  )
                },
                {
                  title: 'iCloud and CloudKit',
                  desc: 'Use iCloud and CloudKit to sync and store data across devices. Our iOS apps give users reliable data access for backups, document sharing, and cross-device continuity. We build cloud solutions with security, scalability, and a great user experience.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Cloud Shape on Left */}
                      <path d="M 9 24 C 7.5 24 6 22.5 6 20.5 C 6 18.8 7.2 17.3 8.8 17.1 C 9.4 13.6 12.4 11 16 11 C 19.1 11 21.8 13 22.8 16 C 23.2 15.9 23.6 15.8 24 15.8 C 26.2 15.8 28 17.6 28 19.8 C 28 20.2 27.9 20.6 27.8 21 L 28 21 C 29.7 21 31 22.3 31 24 C 31 25.7 29.7 27 28 27 L 9 27 C 7.3 27 6 25.7 6 24" strokeWidth="1.7" />

                      {/* Vertical Data Sync Arrows */}
                      <path d="M 13 17 L 13 23 M 11 19 L 13 17 L 15 19" strokeWidth="1.6" />
                      <path d="M 21 23 L 21 17 M 19 21 L 21 23 L 23 21" strokeWidth="1.6" />

                      {/* Server Tower on Right */}
                      <rect x="23" y="15" width="16" height="23" rx="2.5" strokeWidth="1.8" />
                      <line x1="23" y1="22" x2="39" y2="22" strokeWidth="1.5" />
                      <line x1="23" y1="29" x2="39" y2="29" strokeWidth="1.5" />
                      <circle cx="27" cy="18.5" r="1" fill="#0099DA" stroke="none" />
                      <circle cx="27" cy="25.5" r="1" fill="#0099DA" stroke="none" />
                      <circle cx="27" cy="32.5" r="1" fill="#0099DA" stroke="none" />
                      <line x1="31" y1="18.5" x2="35" y2="18.5" strokeWidth="1.4" />
                      <line x1="31" y1="25.5" x2="35" y2="25.5" strokeWidth="1.4" />
                      <line x1="31" y1="32.5" x2="35" y2="32.5" strokeWidth="1.4" />
                    </svg>
                  )
                },
                {
                  title: 'ARKit',
                  desc: 'Our ARKit developers create immersive and engaging augmented reality experiences. We use ARKit to blend digital items into the physical world, making your app more engaging, responsive, and innovative.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Smartphone Body */}
                      <rect x="7" y="6" width="20" height="32" rx="3" strokeWidth="1.8" />
                      <circle cx="17" cy="34" r="1" fill="#0099DA" stroke="none" />

                      {/* AR Badge in Top Right of Screen */}
                      <rect x="13" y="9" width="11" height="7" rx="1.5" fill="#0099DA" stroke="none" />
                      <text x="18.5" y="14.2" fill="#FFFFFF" fontSize="4.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="sans-serif">AR</text>

                      {/* 3D Isometric Cube Floating / Projecting */}
                      <polygon points="28,15 36,19 28,23 20,19" strokeWidth="1.7" fill="#0099DA" fillOpacity="0.1" />
                      <polygon points="20,19 28,23 28,32 20,28" strokeWidth="1.7" fill="#0099DA" fillOpacity="0.2" />
                      <polygon points="36,19 28,23 28,32 36,28" strokeWidth="1.7" fill="#0099DA" fillOpacity="0.3" />
                    </svg>
                  )
                },
                {
                  title: 'Core Data & Realm',
                  desc: 'High-performance object persistence engines providing encrypted local database storage, transactional safety, and rapid offline sync.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* 3-Tier Database Cylinder Stack */}
                      <ellipse cx="22" cy="11" rx="15" ry="5.5" strokeWidth="1.8" fill="#0099DA" fillOpacity="0.1" />
                      <path d="M 7 11 L 7 20 C 7 24 37 24 37 20 L 37 11" strokeWidth="1.8" />
                      <path d="M 7 20 L 7 29 C 7 33 37 33 37 29 L 37 20" strokeWidth="1.8" />
                      <path d="M 7 29 L 7 35 C 7 39 37 39 37 35 L 37 29" strokeWidth="1.8" />
                      <line x1="22" y1="16.5" x2="22" y2="17" strokeWidth="2" />
                      <line x1="22" y1="25.5" x2="22" y2="26" strokeWidth="2" />
                    </svg>
                  )
                },
                {
                  title: 'CocoaPods & SPM',
                  desc: 'Seamless Swift Package Manager and CocoaPods integration for automated dependency versioning, modular build targets, and CI/CD pipelines.',
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Code Document with Folded Corner */}
                      <path d="M 10 6 L 26 6 L 34 14 L 34 38 L 10 38 Z" strokeWidth="1.8" />
                      <path d="M 26 6 L 26 14 L 34 14" strokeWidth="1.8" />
                      {/* SPM Package Box inside */}
                      <rect x="15" y="21" width="14" height="11" rx="2" fill="#0099DA" stroke="none" />
                      <text x="22" y="29.2" fill="#FFFFFF" fontSize="6.5" fontWeight="900" textAnchor="middle" stroke="none" fontFamily="sans-serif">SPM</text>
                    </svg>
                  )
                },
                {
                  title: 'Swift & SwiftUI',
                  desc: "Modern declarative UI framework and type-safe language built by Apple for high performance, smooth 120Hz animations, and reactive state management.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Swift Bird Wings / Silhouette */}
                      <path d="M 10 32 C 14 36, 26 38, 34 30 C 26 31, 20 26, 17 21 C 24 24, 32 23, 37 16 C 30 18, 24 16, 21 12 C 26 14, 33 13, 37 8 C 29 10, 20 7, 14 13 C 10 17, 8 25, 10 32 Z" strokeWidth="1.8" fill="#0099DA" fillOpacity="0.1" />
                    </svg>
                  )
                },
                {
                  title: 'Xcode & Instruments',
                  desc: "Apple's flagship IDE and diagnostic suite for high-performance profiling, memory leak detection, CPU optimization, and rapid Swift compilation.",
                  icon: (
                    <svg viewBox="0 0 44 44" className="w-10 h-10 text-[#0099DA] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                      {/* Blueprint Hammer & Compass */}
                      <rect x="7" y="6" width="30" height="32" rx="3" strokeWidth="1.8" />
                      <circle cx="14" cy="13" r="1.5" fill="#0099DA" stroke="none" />
                      <line x1="7" y1="18" x2="37" y2="18" strokeWidth="1.5" />
                      {/* Hammer */}
                      <path d="M 18 31 L 27 22 M 25 20 L 30 25 L 32 23 L 27 18 Z" strokeWidth="1.8" fill="#0099DA" fillOpacity="0.2" />
                    </svg>
                  )
                }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[350px] lg:w-[370px] shrink-0 rounded-[14px] bg-[#E4F2FA] p-6 sm:p-7 min-h-[240px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-md hover:bg-[#DDF0FA]"
                >
                  <div className="mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-tight">
                    {tech.title}
                  </h3>
                  <p className="font-normal text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.62]">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Left & Right Navigation Arrows (Centered at bottom) */}
          <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
            <button
              onClick={() => setTechCarouselIndex((prev) => (prev > 0 ? prev - 1 : 5))}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] hover:scale-110 active:scale-95 transition-all text-2xl font-bold cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => setTechCarouselIndex((prev) => (prev < 5 ? prev + 1 : 0))}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] hover:scale-110 active:scale-95 transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Premium Services Grid Section */}
      <PremiumServicesGrid />

      {/* =========================================================================
          MEET FIREVY'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Meet Firevy’s Exceptional Team of Seasoned Experts
            </h2>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1340px] mx-auto">
            {[
              {
                id: 0,
                title: 'Mobile Application Team',
                image: '/assets/team/mobile_app_team.jpg',
                techs: ['iOS', 'Swift', 'SwiftUI', 'Android', 'Flutter', 'React Native'],
                team: ['Tech Lead (1)', 'Sr. iOS Dev (2)', 'Sr. Android Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
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
                    <div className="w-full h-[180px] sm:h-[190px] rounded-[14px] overflow-hidden shadow-xs mb-4.5 bg-slate-900">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>

                    <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3.5 text-left">
                      {card.title}
                    </h3>

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

      {/* Reused Existing Components in Identical Order */}
      <SuccessStories />
      <IOSTechnologyCombinationsSection />
      <AboutUsStats />
      <IOSTransformativeImpactSection />
      <IOSBenefitsSection />
      <SectorsThrivingSection />
      <SuccessStoriesSection />
      <AndroidTechStackSection />
      <BestAndroidAppCompanyShowcase />
      <ProudAwardsBanner />
      <AndroidCompanyBenefits />
      <IOSExpertiseServices />
      <AndroidHiringModels />
      <InnovativeSolutionsVideoSection />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile iOS development sprints from Figma wireframes to CI/CD automated builds and App Store release." />
      <OurStoryTheirWordsSection />
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* Signature 2-Column FAQ Section */}
      <SapphireFaqSection faqs={sapphireFaqs} />

      {/* Our Recent Blogs Section */}
      <AndroidRecentBlogsSection />

      {/* What Sets Us Apart As App Development Company Section */}
      <AndroidWhatSetsUsApartSection />

      {/* Have App Development Challenge To Address CTA Banner */}
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default IOSAppDevelopmentService;
