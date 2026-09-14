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
import TransformativeImpactSection from './TransformativeImpactSection';
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

export const DotNetDevelopmentService = () => {
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
      setTechCarouselIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isTechHovered]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Custom .NET Application',
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

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Top .NET Development Company | Custom .NET Solutions | Firevy"
        description="We help businesses create enterprise-grade, high-performance .NET applications and microservices. Scalable .NET Core development services to build secure, robust software."
        canonical="/services/net"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING .NET REFERENCE SCREENSHOT)
          ========================================================================= */}
      <section className="pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 bg-white text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Column: Heading, Paragraph, 4 Stats, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[800] text-[#0B0F19] leading-[1.15] tracking-tight">
                .Net Application Development<br className="hidden sm:inline" /> Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.68] font-normal max-w-[580px]">
                We excel in delivering the best-suited DOT Net development solutions as per the custom needs of businesses. Our team of DOT Net developers is well-trained and holds rich expertise in developing such apps. Contact us now! As an experienced .NET Development Company we ensure you get tailored solutions for your specific requirements.
              </p>

              {/* 4 Statistics Blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 max-w-[580px]">
                {/* Stat 1 */}
                <div className="space-y-0.5">
                  <div className="text-[26px] sm:text-[28px] font-[800] text-[#005F96] leading-none">
                    80+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Web<br />Developers
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
                    600+
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] font-[600] text-[#1E293B] leading-tight">
                    Project Completed in<br />Web Technology
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
                  <span>Hire .Net Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Open Laptop Mockup matching screenshot 1:1 */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px] flex flex-col items-center justify-center select-none">

                {/* Laptop Screen Lid */}
                <div className="w-full bg-[#111827] rounded-t-[14px] sm:rounded-t-[18px] p-2.5 sm:p-3 pb-0 border-[3px] border-[#374151] shadow-2xl relative">

                  {/* Top Center Camera WebCam Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-1.5" />

                  {/* Inner Screen Display (Yellow App Showcase) */}
                  <div className="w-full bg-white rounded-t-[6px] overflow-hidden flex flex-col">

                    {/* Yellow App Section */}
                    <div className="bg-[#FFCC00] p-4 sm:p-5 relative min-h-[175px] sm:min-h-[200px] flex items-center justify-between overflow-hidden">

                      {/* Top Bar Header on Screen */}
                      <div className="absolute top-2 left-3 right-3 flex justify-between items-center text-[7.5px] text-black font-semibold">
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-[9px] tracking-tight">m</span>
                          <span className="text-[7px] font-bold">MAPDOOR</span>
                        </div>
                        <span className="text-[6.5px] font-medium bg-black/10 px-1.5 py-0.5 rounded">HELP</span>
                      </div>

                      {/* Left App Details */}
                      <div className="space-y-1.5 max-w-[150px] sm:max-w-[170px] pt-3 text-left">
                        <h4 className="text-[10px] sm:text-[11.5px] font-[800] text-black leading-tight">
                          Yeh Kahan Say Milay Ga
                        </h4>
                        <p className="text-[5.5px] sm:text-[6.5px] text-black/80 leading-[1.3] font-medium">
                          Welcome to Pakistan's first-ever mobile app that allows users to find products or services and buy/hire from vendors.
                        </p>
                        <div>
                          <span className="inline-block bg-black text-white text-[5.5px] font-bold px-2 py-0.5 rounded-[3px]">
                            Coming Soon
                          </span>
                        </div>
                      </div>

                      {/* Right Smartphone Screen Mockup in Yellow Container */}
                      <div className="w-[85px] sm:w-[98px] h-[135px] sm:h-[155px] bg-white rounded-[12px] border-[2px] border-slate-200 p-1 shadow-lg flex flex-col justify-between shrink-0 relative mr-1">
                        {/* Phone Top Speaker */}
                        <div className="w-4 h-0.5 bg-slate-400 rounded-full mx-auto" />

                        {/* Phone Yellow Screen with 'm' logo */}
                        <div className="bg-[#FFCC00] w-full flex-1 rounded-[8px] my-0.5 flex flex-col items-center justify-center relative p-1">
                          <div className="w-7 h-7 rounded-full bg-transparent flex items-center justify-center">
                            {/* Pinpoint Location Marker with 'm' */}
                            <div className="relative flex flex-col items-center">
                              <span className="font-extrabold text-[16px] text-black leading-none">m</span>
                              <div className="w-1.5 h-1.5 bg-black rotate-45 -mt-0.5 rounded-2xs" />
                            </div>
                          </div>
                        </div>

                        {/* Phone Bottom Home Button */}
                        <div className="w-2.5 h-2.5 rounded-full border border-slate-300 mx-auto" />
                      </div>

                    </div>

                    {/* Bottom White Chin text under yellow area */}
                    <div className="bg-white py-1.5 text-center text-[7.5px] sm:text-[8.5px] font-bold text-slate-700 tracking-wide border-t border-slate-100">
                      Haleem Kara Hai Ke Nahi
                    </div>
                  </div>

                </div>

                {/* Laptop Base / Keyboard Deck Bottom Plate */}
                <div className="w-[108%] h-3 sm:h-3.5 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[8px] relative shadow-md flex items-start justify-center">
                  {/* Center Notch for screen opening */}
                  <div className="w-12 sm:w-16 h-1.5 bg-[#64748B] rounded-b-[4px]" />
                </div>

                {/* Realistic Floor Reflection & Shadow */}
                <div className="w-[85%] h-3 bg-slate-900/20 rounded-full blur-sm -mt-0.5" />

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* =========================================================================
          WEB DEVELOPMENT MARKET STATS & AWARD WINNING .NET COMPANY SHOWCASE (1:1 MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container>
          <div className="space-y-16 sm:space-y-20">

            {/* ROW 1: Web Development Market Stats (Chart Left + Content Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Premium Interactive Bar Chart Graphic matching screenshot 1:1 */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[520px] rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-7 shadow-[0_4px_25px_rgba(0,120,215,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,120,215,0.12)] cursor-pointer group">
                  {/* Chart Title */}
                  <h4 className="text-[13px] sm:text-[14.5px] font-[800] text-[#0F172A] text-left mb-6 pl-1 tracking-tight">
                    Global web development market size from 2020 to 2031
                  </h4>

                  {/* SVG Bar Chart Visualization */}
                  <div className="w-full h-48 sm:h-52 relative flex items-end justify-between px-2 pt-4 pb-6 border-b border-[#E2E8F0]">
                    {/* Y-Axis Label (Vertical text on left) */}
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[7.5px] text-[#94A3B8] font-medium select-none pointer-events-none origin-center tracking-wider">
                      in million USD
                    </div>

                    {/* Y-Axis Grid Lines & Labels */}
                    <div className="absolute inset-0 pl-6 flex flex-col justify-between pointer-events-none text-[8px] text-[#94A3B8] font-medium select-none pb-6">
                      <div className="flex items-center space-x-2 w-full"><span className="w-5 text-right">100</span><div className="w-full border-b border-[#F1F5F9]" /></div>
                      <div className="flex items-center space-x-2 w-full"><span className="w-5 text-right">75</span><div className="w-full border-b border-[#F1F5F9]" /></div>
                      <div className="flex items-center space-x-2 w-full"><span className="w-5 text-right">50</span><div className="w-full border-b border-[#F1F5F9]" /></div>
                      <div className="flex items-center space-x-2 w-full"><span className="w-5 text-right">25</span><div className="w-full border-b border-[#F1F5F9]" /></div>
                      <div className="flex items-center space-x-2 w-full"><span className="w-5 text-right">0</span><div className="w-full border-b border-[#E2E8F0]" /></div>
                    </div>

                    {/* 12 Bars Container from 2020 to 2031 */}
                    <div className="relative z-10 w-full flex items-end justify-between pl-8 pr-1 space-x-1 sm:space-x-2">
                      {[
                        { year: '2020', val: null, h: '38%' },
                        { year: '2021', val: '55500.0', h: '46%' },
                        { year: '2022', val: null, h: '52%' },
                        { year: '2023', val: null, h: '58%' },
                        { year: '2024', val: null, h: '64%' },
                        { year: '2025', val: null, h: '70%' },
                        { year: '2026', val: null, h: '76%' },
                        { year: '2027', val: '89015.19', h: '82%' },
                        { year: '2028', val: null, h: '88%' },
                        { year: '2029', val: null, h: '93%' },
                        { year: '2030', val: null, h: '97%' },
                        { year: '2031', val: null, h: '100%' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center group/bar relative transition-transform duration-200 hover:-translate-y-1">
                          {/* Value above specific bars */}
                          {item.val && (
                            <span className="text-[6px] sm:text-[7px] font-[800] text-[#1E293B] leading-none mb-1 absolute -top-4 whitespace-nowrap bg-white/90 px-1 py-0.5 rounded shadow-2xs group-hover/bar:text-[#005F96]">
                              {item.val}
                            </span>
                          )}
                          {/* Solid Blue Bar */}
                          <div
                            className="w-full max-w-[16px] sm:max-w-[20px] rounded-t-[2px] bg-[#005F96] group-hover/bar:bg-[#004A75] shadow-xs transition-all duration-200 group-hover/bar:brightness-110"
                            style={{ height: item.h }}
                          />
                          {/* Year label below */}
                          <span className="text-[7px] sm:text-[8px] font-medium text-[#64748B] mt-2 leading-none group-hover/bar:text-[#0F172A] group-hover/bar:font-bold">
                            {item.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Heading + Paragraph + Button */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.15]">
                  Web Development Market<br />Stats
                </h2>

                <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.7] font-normal max-w-lg">
                  The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period.
                </p>

                <div className="pt-2">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] transition-all shadow-sm hover:shadow"
                  >
                    Connect With An Expert
                  </a>
                </div>
              </div>
            </div>

            {/* ROW 2: Award Winning .NET Development Company (Text Left + Vector Illustration Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-7 space-y-3.5 text-left">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                  Award Winning .NET<br />Development Company
                </h2>
                <p className="font-normal text-[#475569] text-[13px] sm:text-[14px] leading-[1.7]">
                  Using a robust .NET programming architecture, you can develop industry-specific, high-performing .NET-based applications to advance your business's demands. Using Microsoft technology stacks, our team of tech enthusiasts creates high-performing .NET-based software, web and mobile applications, BI tools, chatbots, and other .NET development solutions for many industry verticals. Sapphire is a Leading .NET Web Developers for Enterprise that provides many cooperation models that precisely match the requirements of your .NET project. We also excel as a .NET software development company delivering cutting-edge solutions for diverse industries.
                </p>
              </div>

              {/* Right Column: Custom Vector Illustration matching screenshot 1:1 */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/3] flex items-center justify-center select-none">
                  <svg viewBox="0 0 460 340" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                    {/* Floating Cyan { } Code Badge on upper-left */}
                    <g transform="translate(40, 30)">
                      <rect x="0" y="0" width="52" height="38" rx="8" fill="#00B5E2" />
                      {/* Code symbols inside badge */}
                      <path d="M 12 12 L 18 12 M 12 19 L 26 19 M 12 26 L 20 26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                      <text x="32" y="25" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="monospace">{"}"}</text>
                      <text x="5" y="25" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="monospace">{"{"}</text>
                    </g>

                    {/* Central Large Smartphone */}
                    <g transform="translate(180, 40)">
                      {/* Outer Frame */}
                      <rect x="0" y="0" width="115" height="225" rx="16" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
                      <rect x="5" y="5" width="105" height="215" rx="12" fill="#E0F2FE" />

                      {/* Top Speaker Bar */}
                      <rect x="42" y="10" width="30" height="3" rx="1.5" fill="#94A3B8" />

                      {/* Screen Code Lines */}
                      <g transform="translate(12, 24)">
                        {Array.from({ length: 17 }).map((_, i) => (
                          <rect
                            key={i}
                            x="0"
                            y={i * 10}
                            width={i % 4 === 0 ? 55 : i % 3 === 0 ? 80 : i % 2 === 0 ? 68 : 48}
                            height="4"
                            rx="2"
                            fill="#0284C7"
                            opacity={0.75}
                          />
                        ))}
                      </g>

                      {/* Magnifying Glass Search Icon on Screen */}
                      <g transform="translate(52, 95)">
                        <circle cx="20" cy="20" r="18" fill="#0369A1" stroke="#FFFFFF" strokeWidth="3.5" />
                        <circle cx="20" cy="20" r="10" fill="#E0F2FE" />
                        <line x1="33" y1="33" x2="46" y2="46" stroke="#0369A1" strokeWidth="6" strokeLinecap="round" />
                        <line x1="33" y1="33" x2="46" y2="46" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      </g>
                    </g>

                    {/* Mechanical Gears at Phone Base */}
                    <g transform="translate(140, 205)">
                      {/* Large Dark Blue / Navy Gear */}
                      <circle cx="38" cy="38" r="30" fill="#0F172A" />
                      <circle cx="38" cy="38" r="12" fill="#E0F2FE" />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <rect
                          key={i}
                          x="33"
                          y="2"
                          width="10"
                          height="9"
                          rx="2"
                          fill="#0F172A"
                          transform={`rotate(${i * 45} 38 38)`}
                        />
                      ))}
                    </g>
                    <g transform="translate(215, 235)">
                      {/* Smaller Bright Blue Gear */}
                      <circle cx="24" cy="24" r="20" fill="#00B5E2" />
                      <circle cx="24" cy="24" r="8" fill="#E0F2FE" />
                      {Array.from({ length: 6 }).map((_, i) => (
                        <rect
                          key={i}
                          x="20.5"
                          y="1"
                          width="7"
                          height="7"
                          rx="1.5"
                          fill="#00B5E2"
                          transform={`rotate(${i * 60} 24 24)`}
                        />
                      ))}
                    </g>

                    {/* Developer on Left Sitting on Tall Stool with Laptop */}
                    <g transform="translate(65, 140)">
                      {/* Cyan Plant Leaves on Far Left */}
                      <g transform="translate(-25, 40)">
                        <path d="M 12 55 C 0 35, -5 12, 6 0 C 18 18, 18 40, 12 55 Z" fill="#00B5E2" />
                        <path d="M 14 55 C 24 38, 35 15, 26 5 C 18 22, 18 42, 14 55 Z" fill="#0284C7" />
                        <path d="M 10 55 C -10 40, -16 22, -8 12 C 3 28, 6 45, 10 55 Z" fill="#0369A1" />
                      </g>

                      {/* Tall Stool Legs & Seat */}
                      <rect x="20" y="72" width="34" height="4" rx="2" fill="#94A3B8" />
                      <line x1="26" y1="76" x2="20" y2="135" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
                      <line x1="48" y1="76" x2="54" y2="135" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />

                      {/* Head & Hair */}
                      <circle cx="38" cy="18" r="8.5" fill="#FBBF99" />
                      <path d="M 30 16 C 30 7, 40 5, 46 11 C 48 17, 46 25, 34 25 C 30 25, 30 19, 30 16 Z" fill="#0F172A" />

                      {/* Torso / Blue Sweater */}
                      <path d="M 28 30 C 28 25, 44 25, 46 30 L 48 68 L 26 68 Z" fill="#0284C7" />

                      {/* Legs (Sitting crossed) */}
                      <path d="M 28 68 L 56 68 L 64 100 L 55 100 L 49 76 L 28 76 Z" fill="#0F172A" />
                      <path d="M 50 76 L 64 76 L 70 110 L 61 110 L 55 84 L 50 84 Z" fill="#1E293B" />
                      {/* Shoes */}
                      <ellipse cx="66" cy="102" rx="6" ry="3.5" fill="#00B5E2" />
                      <ellipse cx="72" cy="112" rx="6" ry="3.5" fill="#00B5E2" />

                      {/* Laptop on Lap */}
                      <polygon points="48,58 74,58 78,44 56,44" fill="#00B5E2" />
                      <rect x="46" y="58" width="30" height="3" rx="1.5" fill="#CBD5E1" />
                    </g>

                    {/* Developer Man on Right Standing holding Chat Bubble */}
                    <g transform="translate(285, 110)">
                      {/* Cyan Potted Plant on Far Right */}
                      <g transform="translate(68, 80)">
                        <path d="M 10 70 L 26 70 L 23 96 L 13 96 Z" fill="#00B5E2" />
                        <path d="M 18 70 C 8 45, 2 20, 18 5 C 28 20, 24 45, 18 70 Z" fill="#0284C7" />
                        <path d="M 18 70 C 24 50, 38 30, 30 15 C 20 30, 18 50, 18 70 Z" fill="#00B5E2" />
                      </g>

                      {/* Head & Hair */}
                      <circle cx="36" cy="18" r="9" fill="#FBBF99" />
                      <path d="M 26 15 C 26 7, 38 5, 46 9 C 46 15, 42 17, 36 17 Z" fill="#0F172A" />

                      {/* Shirt / Torso (Cyan Blue) */}
                      <path d="M 22 32 C 22 26, 48 26, 50 32 L 48 82 L 24 82 Z" fill="#38BDF8" />
                      {/* Belt */}
                      <rect x="24" y="82" width="24" height="4" fill="#0F172A" />
                      <rect x="33" y="82.5" width="6" height="3" fill="#FFFFFF" />

                      {/* Pants (Dark Navy) */}
                      <path d="M 25 86 L 35 86 L 35 160 L 26 160 Z" fill="#0F172A" />
                      <path d="M 37 86 L 47 86 L 46 160 L 37 160 Z" fill="#0F172A" />
                      {/* Shoes */}
                      <ellipse cx="29" cy="162" rx="7" ry="3.5" fill="#00B5E2" />
                      <ellipse cx="43" cy="162" rx="7" ry="3.5" fill="#00B5E2" />

                      {/* Arm holding Chat Bubble */}
                      <path d="M 48 36 L 66 54 L 70 60 L 60 60 L 44 42 Z" fill="#38BDF8" />
                      {/* Blue Chat Bubble Pill */}
                      <g transform="translate(64, 52)">
                        <rect x="0" y="0" width="32" height="26" rx="6" fill="#0078D7" />
                        <rect x="7" y="7" width="18" height="3" rx="1.5" fill="#FFFFFF" />
                        <rect x="7" y="13" width="12" height="3" rx="1.5" fill="#FFFFFF" />
                        <polygon points="12,25 18,25 15,30" fill="#0078D7" />
                      </g>
                    </g>

                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          HIRE HIGHLY RATED .NET AGENCY & BRIEF ABOUT .NET SERVICES (1:1 MATCH)
          ========================================================================= */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white text-slate-900 font-sans text-left overflow-hidden border-t border-slate-100">
        <Container>
          <div className="space-y-16 sm:space-y-20">

            {/* BLOCK 1: Hire Highly Rated .NET Agency For Your Projects (Illustration Left + Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: High-Precision Vector Illustration 1:1 (Female Developer + ASP.NET Dashboard) */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[430px] sm:max-w-[470px] aspect-[4/3] flex items-center justify-center select-none">
                  <svg viewBox="0 0 480 360" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                    <defs>
                      <linearGradient id="blobGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#E1F5FE" stopOpacity="0.7" />
                      </linearGradient>
                      <linearGradient id="aspNetGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0078D7" />
                        <stop offset="50%" stopColor="#00BCF2" />
                        <stop offset="100%" stopColor="#0078D7" />
                      </linearGradient>
                      <linearGradient id="screenTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>

                    {/* Organic Backdrop Light Blue Blob */}
                    <path
                      d="M 60 160 C 40 90, 110 30, 210 30 C 320 30, 440 60, 450 150 C 460 250, 390 320, 260 330 C 120 340, 75 250, 60 160 Z"
                      fill="url(#blobGrad1)"
                    />

                    {/* Dot Grid Accents */}
                    {/* Top Center Dots */}
                    <g transform="translate(180, 45)" fill="#67E8F9" opacity="0.6">
                      <circle cx="0" cy="0" r="2.5" /><circle cx="10" cy="0" r="2.5" /><circle cx="20" cy="0" r="2.5" />
                      <circle cx="0" cy="8" r="2.5" /><circle cx="10" cy="8" r="2.5" /><circle cx="20" cy="8" r="2.5" />
                      <circle cx="0" cy="16" r="2.5" /><circle cx="10" cy="16" r="2.5" /><circle cx="20" cy="16" r="2.5" />
                    </g>
                    {/* Mid Left Dots */}
                    <g transform="translate(85, 140)" fill="#67E8F9" opacity="0.6">
                      <circle cx="0" cy="0" r="2.5" /><circle cx="10" cy="0" r="2.5" /><circle cx="20" cy="0" r="2.5" />
                      <circle cx="0" cy="8" r="2.5" /><circle cx="10" cy="8" r="2.5" /><circle cx="20" cy="8" r="2.5" />
                    </g>

                    {/* Floating Document Icon (Top Left) */}
                    <g transform="translate(75, 90)">
                      <rect x="0" y="0" width="18" height="24" rx="2" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
                      <line x1="4" y1="6" x2="12" y2="6" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="4" y1="11" x2="14" y2="11" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="4" y1="16" x2="10" y2="16" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />
                    </g>

                    {/* Floating Speech / Thought Bubbles (Top Left) */}
                    <g transform="translate(100, 55)">
                      <rect x="0" y="0" width="48" height="28" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
                      <circle cx="12" cy="14" r="3" fill="#60A5FA" />
                      <circle cx="24" cy="14" r="3" fill="#60A5FA" />
                      <circle cx="36" cy="14" r="3" fill="#60A5FA" />
                      <path d="M 12 28 L 8 36 L 20 28 Z" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
                      <polygon points="11,26 19,26 9,34" fill="#FFFFFF" />
                    </g>
                    <g transform="translate(90, 80)">
                      <rect x="0" y="0" width="40" height="24" rx="8" fill="#60A5FA" />
                      <circle cx="10" cy="12" r="2.5" fill="#FFFFFF" />
                      <circle cx="20" cy="12" r="2.5" fill="#FFFFFF" />
                      <circle cx="30" cy="12" r="2.5" fill="#FFFFFF" />
                      <polygon points="8,22 15,22 10,28" fill="#60A5FA" />
                    </g>

                    {/* Ground Baseline / Horizon */}
                    <path d="M 60 320 L 440 320" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />

                    {/* Central Large Desktop Browser Window */}
                    <g transform="translate(145, 65)">
                      {/* Outer Monitor Frame */}
                      <rect x="0" y="0" width="235" height="165" rx="8" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                      {/* Window Header Bar */}
                      <rect x="0" y="0" width="235" height="24" rx="8" fill="url(#screenTopGrad)" />

                      {/* Window Controls (Left 3 dots) */}
                      <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" opacity="0.9" />
                      <circle cx="20" cy="12" r="2.5" fill="#FFFFFF" opacity="0.9" />
                      <circle cx="28" cy="12" r="2.5" fill="#FFFFFF" opacity="0.9" />

                      {/* Window Controls (Right: minimize, maximize, close) */}
                      <g transform="translate(195, 8)">
                        <line x1="0" y1="6" x2="6" y2="6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                        <rect x="10" y="3" width="6" height="6" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
                        <line x1="20" y1="3" x2="26" y2="9" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                        <line x1="26" y1="3" x2="20" y2="9" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                      </g>

                      {/* Screen Interior Background */}
                      <rect x="2" y="24" width="231" height="139" fill="#F0F9FF" />

                      {/* Left Sidebar on Screen */}
                      <g transform="translate(12, 34)">
                        {/* Search / Nav bar pill */}
                        <rect x="0" y="0" width="55" height="12" rx="3" fill="#0284C7" />
                        <rect x="4" y="4" width="25" height="4" rx="1.5" fill="#FFFFFF" />

                        {/* Sidebar Menu Lines */}
                        <rect x="0" y="18" width="48" height="4" rx="2" fill="#BAE6FD" />
                        <rect x="0" y="26" width="38" height="4" rx="2" fill="#BAE6FD" />
                        <rect x="0" y="34" width="44" height="4" rx="2" fill="#BAE6FD" />
                        <rect x="0" y="42" width="32" height="4" rx="2" fill="#BAE6FD" />

                        {/* ASP.NET Official Branding Box */}
                        <g transform="translate(0, 56)">
                          <rect x="0" y="0" width="54" height="42" rx="4" fill="#FFFFFF" stroke="#E0F2FE" strokeWidth="1" />
                          {/* 3D N Ribbon */}
                          <path d="M 6 22 C 12 6, 20 30, 26 12" fill="none" stroke="url(#aspNetGrad1)" strokeWidth="4.5" strokeLinecap="round" />
                          <path d="M 24 14 C 30 28, 38 4, 44 20" fill="none" stroke="#0078D7" strokeWidth="4.5" strokeLinecap="round" />
                          <text x="5" y="36" fill="#0078D7" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">ASP.NET</text>
                        </g>
                      </g>

                      {/* Right Main Analytics Dashboard Card */}
                      <g transform="translate(75, 34)">
                        <rect x="0" y="0" width="148" height="118" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

                        {/* Top Code Lines Block */}
                        <rect x="8" y="8" width="65" height="42" rx="4" fill="#0284C7" />
                        <rect x="12" y="13" width="40" height="2.5" rx="1" fill="#FFFFFF" />
                        <rect x="12" y="18" width="32" height="2.5" rx="1" fill="#BAE6FD" />
                        <rect x="12" y="23" width="52" height="2.5" rx="1" fill="#FFFFFF" />
                        <rect x="12" y="28" width="28" height="2.5" rx="1" fill="#BAE6FD" />
                        <rect x="12" y="33" width="45" height="2.5" rx="1" fill="#FFFFFF" />
                        <rect x="12" y="38" width="36" height="2.5" rx="1" fill="#BAE6FD" />

                        {/* Circular Donut Charts (Top Right) */}
                        <circle cx="95" cy="28" r="14" fill="none" stroke="#E2E8F0" strokeWidth="4.5" />
                        <circle cx="95" cy="28" r="14" fill="none" stroke="#38BDF8" strokeWidth="4.5" strokeDasharray="60 30" strokeLinecap="round" />

                        <circle cx="128" cy="28" r="14" fill="none" stroke="#E2E8F0" strokeWidth="4.5" />
                        <circle cx="128" cy="28" r="14" fill="none" stroke="#0284C7" strokeWidth="4.5" strokeDasharray="75 20" strokeLinecap="round" />

                        {/* Horizontal Progress Bars with Bullet Dots */}
                        <g transform="translate(8, 58)">
                          <circle cx="4" cy="6" r="3" fill="#0284C7" />
                          <rect x="14" y="3" width="118" height="6" rx="3" fill="#F1F5F9" />
                          <rect x="14" y="3" width="75" height="6" rx="3" fill="#38BDF8" />

                          <circle cx="4" cy="18" r="3" fill="#38BDF8" />
                          <rect x="14" y="15" width="118" height="6" rx="3" fill="#F1F5F9" />
                          <rect x="14" y="15" width="98" height="6" rx="3" fill="#0284C7" />

                          <circle cx="4" cy="30" r="3" fill="#0284C7" />
                          <rect x="14" y="27" width="118" height="6" rx="3" fill="#F1F5F9" />
                          <rect x="14" y="27" width="55" height="6" rx="3" fill="#38BDF8" />

                          <circle cx="4" cy="42" r="3" fill="#38BDF8" />
                          <rect x="14" y="39" width="118" height="6" rx="3" fill="#F1F5F9" />
                          <rect x="14" y="39" width="108" height="6" rx="3" fill="#0284C7" />
                        </g>
                      </g>

                      {/* Floating Blue Message Bubble in Center */}
                      <g transform="translate(95, 140)">
                        <rect x="0" y="0" width="76" height="34" rx="10" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />
                        <line x1="12" y1="12" x2="64" y2="12" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                        <line x1="12" y1="22" x2="48" y2="22" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                      </g>
                    </g>

                    {/* Monitor Stand */}
                    <path d="M 240 230 L 232 270 L 290 270 L 282 230 Z" fill="#1D4ED8" />
                    <ellipse cx="261" cy="272" rx="44" ry="7" fill="#2563EB" />

                    {/* Female Developer on Left Pointing at Screen */}
                    <g transform="translate(80, 115)">
                      {/* Hair Bun */}
                      <circle cx="34" cy="22" r="13" fill="#291811" />
                      <circle cx="44" cy="30" r="14" fill="#3D2314" />

                      {/* Face / Profile */}
                      <circle cx="50" cy="36" r="11" fill="#F9A066" />
                      <path d="M 38 28 C 38 18, 54 18, 58 28 C 60 34, 56 44, 46 44 C 40 44, 38 36, 38 28 Z" fill="#3D2314" />

                      {/* Neck & Shoulder */}
                      <path d="M 44 45 L 52 45 L 54 58 L 42 58 Z" fill="#F9A066" />

                      {/* Blouse / Top (Periwinkle Blue) */}
                      <path d="M 28 58 C 28 50, 68 50, 72 58 L 88 160 L 12 160 Z" fill="#7AA2E3" />

                      {/* Left Arm Pointing Up at Screen */}
                      <path d="M 64 62 L 98 94 L 108 88 L 76 56 Z" fill="#7AA2E3" />
                      {/* Hand Pointing Index Finger */}
                      <path d="M 98 94 L 116 76 L 120 80 L 104 100 Z" fill="#F9A066" />
                      <circle cx="116" cy="76" r="3.5" fill="#F9A066" />

                      {/* Trousers (Dark Navy Blue) */}
                      <path d="M 12 160 L 88 160 L 78 205 L 18 205 Z" fill="#1E293B" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Right Column: Heading & Detailed Description */}
              <div className="lg:col-span-7 space-y-3.5 text-left">
                <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                  Hire Highly Rated .NET Agency<br className="hidden sm:inline" /> For Your Projects
                </h2>
                <p className="font-normal text-[#475569] text-[12.8px] sm:text-[13.5px] leading-[1.68]">
                  As a part of .NET software development services, we offer design, implementation, testing, evolution, integration, and modernization of applications built on the .NET platform. We provide enterprise-grade apps with great performance for a range of platforms and technologies. With a team of extremely knowledgeable and experienced developers, we specialize in developing custom software solutions that are made to match each client's needs. From creating feature-rich mobile and desktop apps to designing prototypes, we provide Full-Stack dotnet development services at the best price. If you are planning to Hire .NET developers, our experts can fulfill your project requirements with utmost precision.
                </p>
              </div>
            </div>

            {/* BLOCK 2: Brief About Our .Net Development Services (Text Left + Illustration Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-7 space-y-3.5 text-left order-2 lg:order-1">
                <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                  Brief About Our .Net<br className="hidden sm:inline" /> Development Services
                </h2>
                <p className="font-normal text-[#475569] text-[12.8px] sm:text-[13.5px] leading-[1.68]">
                  Our dedicated .NET team is capable of working with many different methodologies, including XP, Agile, Lean, Waterfall, Scrum, and RAD. As a leading .NET web development services provider and Best .NET development company, we create scalable, secure, and interactive .NET web applications for startups, companies, and entrepreneurs. We are an experienced organization that offers ASP.NET web development services, along with integration and migration services at the most competitive rates. We also specialize in .NET migration from legacy systems, ensuring a seamless transition to modern architecture.
                </p>
              </div>

              {/* Right Column: High-Precision Vector Illustration 1:1 (Male Developer with Blue Monitor & Code) */}
              <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                <div className="relative w-full max-w-[430px] sm:max-w-[470px] aspect-[4/3] flex items-center justify-center select-none">
                  <svg viewBox="0 0 480 360" className="w-full h-full drop-shadow-sm overflow-visible" fill="none">
                    <defs>
                      <linearGradient id="blobGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E0F7FA" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#E1F5FE" stopOpacity="0.7" />
                      </linearGradient>
                      <linearGradient id="codeScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E3A8A" />
                        <stop offset="100%" stopColor="#172554" />
                      </linearGradient>
                    </defs>

                    {/* Organic Backdrop Light Blue Blob */}
                    <path
                      d="M 50 170 C 40 80, 130 40, 240 40 C 350 40, 440 80, 450 170 C 460 260, 370 330, 250 330 C 130 330, 60 260, 50 170 Z"
                      fill="url(#blobGrad2)"
                    />

                    {/* Floating Code Badge (Bottom Left) */}
                    <g transform="translate(45, 235)">
                      <circle cx="18" cy="18" r="18" fill="#38BDF8" />
                      <text x="7" y="23" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
                    </g>

                    {/* Ground Baseline / Horizon */}
                    <path d="M 60 320 L 440 320" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />

                    {/* Central Large Desktop Coding Monitor */}
                    <g transform="translate(85, 60)">
                      {/* Outer Bezel */}
                      <rect x="0" y="0" width="235" height="165" rx="12" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                      <rect x="5" y="5" width="225" height="155" rx="9" fill="url(#codeScreenGrad)" />

                      {/* Screen Left Sidebar (White Container) */}
                      <g transform="translate(16, 16)">
                        <rect x="0" y="0" width="48" height="132" rx="4" fill="#F0F9FF" />

                        {/* Top Gears / Cogs Graphic */}
                        <g transform="translate(10, 12)">
                          {/* Large Cyan Gear */}
                          <circle cx="14" cy="14" r="10" fill="#0284C7" />
                          <circle cx="14" cy="14" r="4" fill="#F0F9FF" />
                          {Array.from({ length: 6 }).map((_, i) => (
                            <rect
                              key={i}
                              x="12"
                              y="1"
                              width="4"
                              height="4"
                              fill="#0284C7"
                              transform={`rotate(${i * 60} 14 14)`}
                            />
                          ))}

                          {/* Small Sky Blue Gear */}
                          <circle cx="25" cy="24" r="7" fill="#38BDF8" />
                          <circle cx="25" cy="24" r="2.5" fill="#F0F9FF" />
                          {Array.from({ length: 6 }).map((_, i) => (
                            <rect
                              key={i}
                              x="23.5"
                              y="15"
                              width="3"
                              height="3"
                              fill="#38BDF8"
                              transform={`rotate(${i * 60} 25 24)`}
                            />
                          ))}
                        </g>

                        {/* Code snippet lines inside card */}
                        <g transform="translate(6, 60)">
                          <rect x="0" y="0" width="36" height="3" rx="1.5" fill="#0284C7" />
                          <rect x="0" y="6" width="28" height="3" rx="1.5" fill="#38BDF8" />
                          <rect x="0" y="12" width="32" height="3" rx="1.5" fill="#0284C7" />
                          <rect x="0" y="18" width="22" height="3" rx="1.5" fill="#38BDF8" />
                        </g>

                        {/* Official ASP.NET Branding in sidebar */}
                        <g transform="translate(4, 98)">
                          <rect x="0" y="0" width="40" height="26" rx="3" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1" />
                          <path d="M 4 12 C 8 2, 14 18, 18 8 C 22 18, 28 2, 32 12" fill="none" stroke="#0078D7" strokeWidth="2.5" strokeLinecap="round" />
                          <text x="3" y="21" fill="#0078D7" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">ASP.NET</text>
                        </g>
                      </g>

                      {/* Divider Dots in Center */}
                      <g transform="translate(76, 25)">
                        {Array.from({ length: 13 }).map((_, i) => (
                          <circle key={i} cx="0" cy={i * 9} r="1.5" fill="#38BDF8" opacity="0.8" />
                        ))}
                      </g>

                      {/* Right Code Area (Indented code syntax) */}
                      <g transform="translate(88, 20)">
                        <rect x="0" y="0" width="95" height="4.5" rx="2" fill="#FFFFFF" />
                        <rect x="16" y="9" width="105" height="4.5" rx="2" fill="#38BDF8" />
                        <rect x="16" y="18" width="75" height="4.5" rx="2" fill="#93C5FD" />
                        <rect x="32" y="27" width="90" height="4.5" rx="2" fill="#FFFFFF" />
                        <rect x="32" y="36" width="65" height="4.5" rx="2" fill="#38BDF8" />
                        <rect x="16" y="45" width="100" height="4.5" rx="2" fill="#93C5FD" />
                        <rect x="0" y="54" width="85" height="4.5" rx="2" fill="#FFFFFF" />
                        <rect x="16" y="63" width="95" height="4.5" rx="2" fill="#38BDF8" />
                        <rect x="32" y="72" width="70" height="4.5" rx="2" fill="#FFFFFF" />
                        <rect x="32" y="81" width="85" height="4.5" rx="2" fill="#93C5FD" />
                        <rect x="16" y="90" width="105" height="4.5" rx="2" fill="#38BDF8" />
                        <rect x="0" y="99" width="68" height="4.5" rx="2" fill="#FFFFFF" />
                        <rect x="0" y="108" width="90" height="4.5" rx="2" fill="#93C5FD" />
                      </g>

                      {/* WebCam dot at bottom frame */}
                      <circle cx="117" cy="158" r="2.5" fill="#93C5FD" />
                    </g>

                    {/* Coding Monitor Stand */}
                    <path d="M 180 225 L 170 268 L 245 268 L 235 225 Z" fill="#1D4ED8" />
                    <ellipse cx="207" cy="270" rx="46" ry="7" fill="#2563EB" />

                    {/* Developer Sitting at Desk (Right) */}
                    <g transform="translate(280, 175)">
                      {/* Desk Table */}
                      <rect x="0" y="70" width="105" height="6" rx="3" fill="#E2E8F0" />
                      <rect x="12" y="76" width="5" height="44" fill="#94A3B8" />
                      <rect x="88" y="76" width="5" height="44" fill="#94A3B8" />

                      {/* Stack of 3 Books Under Table */}
                      <g transform="translate(34, 88)">
                        <rect x="0" y="0" width="35" height="9" rx="2" fill="#1E3A8A" />
                        <rect x="3" y="10" width="32" height="9" rx="2" fill="#0284C7" />
                        <rect x="6" y="20" width="28" height="9" rx="2" fill="#38BDF8" />
                      </g>

                      {/* Chair */}
                      <rect x="42" y="82" width="40" height="5" rx="2.5" fill="#93C5FD" />
                      <rect x="56" y="87" width="5" height="33" fill="#64748B" />
                      <line x1="40" y1="120" x2="74" y2="120" stroke="#64748B" strokeWidth="4.5" strokeLinecap="round" />

                      {/* Male Person Body */}
                      {/* Head & Hair */}
                      <circle cx="48" cy="20" r="10" fill="#FBBF99" />
                      <path d="M 38 16 C 38 7, 56 7, 58 16 C 58 21, 52 23, 45 23 Z" fill="#1E293B" />

                      {/* White Shirt Collar */}
                      <polygon points="43,28 53,28 48,34" fill="#FFFFFF" />

                      {/* Torso / Blue Sweater */}
                      <path d="M 34 32 C 34 26, 62 26, 64 32 L 66 76 L 36 76 Z" fill="#3B82F6" />

                      {/* Arm Typing on Laptop */}
                      <path d="M 50 38 L 18 64 L 24 70 L 58 48 Z" fill="#3B82F6" />
                      <circle cx="18" cy="65" r="4.5" fill="#FBBF99" />

                      {/* Open Laptop on Desk */}
                      <polygon points="6,70 34,70 38,50 16,50" fill="#7DD3FC" />
                      <rect x="4" y="70" width="32" height="3.5" rx="1.5" fill="#CBD5E1" />

                      {/* Pants */}
                      <path d="M 45 74 L 70 74 L 70 120 L 60 120 L 60 88 L 45 88 Z" fill="#1E3A8A" />
                      <ellipse cx="65" cy="120" rx="8" ry="3.5" fill="#0F172A" />
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
                World Wide Top Rated .NET App Development Company on Clutch
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
                      <path d="M33 26 L57 26 L54 50 C54 56, 36 56, 36 50 Z" fill="url(#goldGradNet)" stroke="#D97706" strokeWidth="1" />
                      <rect x="42" y="52" width="6" height="10" fill="#F59E0B" />
                      <rect x="36" y="62" width="18" height="4" rx="1.5" fill="#D97706" />
                      <rect x="33" y="66" width="24" height="4.5" rx="1.5" fill="#FBBF24" />
                      <polygon points="45,33 46.8,38.5 52.5,38.5 48,42 49.5,47.5 45,44 40.5,47.5 42,42 37.5,38.5 43.2,38.5" fill="#FFFFFF" />
                      <defs>
                        <linearGradient id="goldGradNet" x1="0" y1="0" x2="1" y2="1">
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

                  {/* 4. The Manifest - Most Reviewed .NET App Development Company */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">.NET APP</text>
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
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP .NET APP</text>
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
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">.NET APP</text>
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
                      <path d="M33 26 L57 26 L54 50 C54 56, 36 56, 36 50 Z" fill="url(#goldGradNet2)" stroke="#D97706" strokeWidth="1" />
                      <rect x="42" y="52" width="6" height="10" fill="#F59E0B" />
                      <rect x="36" y="62" width="18" height="4" rx="1.5" fill="#D97706" />
                      <rect x="33" y="66" width="24" height="4.5" rx="1.5" fill="#FBBF24" />
                      <polygon points="45,33 46.8,38.5 52.5,38.5 48,42 49.5,47.5 45,44 40.5,47.5 42,42 37.5,38.5 43.2,38.5" fill="#FFFFFF" />
                      <defs>
                        <linearGradient id="goldGradNet2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FEF08A" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* 2. The Manifest */}
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

                  {/* 3. The Manifest */}
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

                  {/* 4. The Manifest */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 65 85" className="w-12 h-16 sm:w-14 sm:h-[72px] drop-shadow-sm">
                      <path d="M2 2 L63 2 L63 68 L32.5 83 L2 68 Z" fill="#FFFFFF" stroke="#881337" strokeWidth="1.5" />
                      <path d="M2 2 L63 2 L63 20 L2 20 Z" fill="#881337" />
                      <text x="32.5" y="10" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">MOST REVIEWED</text>
                      <text x="32.5" y="16.5" fill="#FFFFFF" fontSize="4.2" fontWeight="700" textAnchor="middle">2026</text>
                      <text x="32.5" y="29" fill="#881337" fontSize="5" fontWeight="900" textAnchor="middle">.NET APP</text>
                      <text x="32.5" y="36" fill="#881337" fontSize="4.2" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <line x1="8" y1="48" x2="57" y2="48" stroke="#881337" strokeWidth="0.8" />
                      <circle cx="32.5" cy="54" r="6" fill="#881337" />
                      <polygon points="32.5,50.5 34,53 36.5,53.5 34.5,55.5 35,58 32.5,56.5 30,58 30.5,55.5 28.5,53.5 31,53" fill="#FFFFFF" />
                      <text x="32.5" y="66" fill="#6B7280" fontSize="3.5" fontWeight="700" textAnchor="middle">THE MANIFEST</text>
                    </svg>
                  </div>

                  {/* 5. GoodFirms */}
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
                      <text x="42.5" y="54" fill="#FFFFFF" fontSize="3.8" fontWeight="900" textAnchor="middle">TOP .NET APP</text>
                      <text x="42.5" y="59" fill="#FFFFFF" fontSize="3.4" fontWeight="800" textAnchor="middle">DEVELOPMENT COMPANY</text>
                      <text x="42.5" y="72" fill="#0072CE" fontSize="5" fontWeight="700" textAnchor="middle">goodfirms.co</text>
                    </svg>
                  </div>

                  {/* 6. Clutch */}
                  <div className="shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 80 85" className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-md">
                      <polygon points="40,3 77,22 77,63 40,82 3,63 3,22" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2.5" />
                      <polygon points="40,7 73,24 73,61 40,78 7,61 7,24" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                      <text x="40" y="17" fill="#64748B" fontSize="4.2" fontWeight="800" textAnchor="middle">TOP</text>
                      <text x="40" y="23" fill="#334155" fontSize="4.5" fontWeight="900" textAnchor="middle">.NET APP</text>
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
          COUNT ON US FOR RELIABLE .NET APP DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 bg-white text-slate-900 font-sans text-left">
        <Container>
          {/* Centered Top Heading */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '32px' }}
            >
              Count On Us for Reliable .NET App Development Services
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
                Get Highly<br />Scalable And<br />Securely<br />Architected .NET<br />Applications.
              </h3>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                We deliver .NET app development services to build highly interactive and functional applications with enterprise performance and flexible cloud architectures. As a top .NET app development company, we know how to turn your idea into a profitable and full-fledged application using .NET. As a .NET app development company with rich experience and global footprints, our <strong className="font-bold text-[#00669E]">custom mobile app development company in USA</strong> has vast .NET Core architecture experience to build apps with interactive UI, high and agile performance. Our AI and Machine Learning .NET App Development process includes everything from planning, prototyping, and development to testing and deployment for flawless execution.
              </p>

              <p
                className="font-normal text-[#475569]"
                style={{ fontSize: '14px', lineHeight: '1.68' }}
              >
                Our engineers code C# and use .NET Core runtime to ensure high concurrency and sub-millisecond execution across cloud platforms. We have been delivering .NET cross-platform development services for mobile, web, and desktop. Our development team consists of highly skilled .NET architects, testing & QA specialists, and cloud engineering experts with rich knowledge who can deliver .NET mobile and enterprise app development services for various platforms. We follow industry-best practices for .NET app deployment to ensure smooth containerized orchestration across Microsoft Azure, AWS, and GCP. Additionally, we provide Custom AI-Powered .NET App Development using ML.NET and OpenAI to enhance performance, personalize user experience, and automate complex functions.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          CUTTING EDGE TECHNOLOGIES FOR .NET DEVELOPMENT SERVICES (EXACT 1:1 MATCH)
          ========================================================================= */}
      <section className="py-9 sm:py-12 bg-white text-slate-900 font-sans overflow-hidden text-left w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">

          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-6xl mx-auto mb-8 sm:mb-11">
            <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight text-[22px] sm:text-[28px] lg:text-[32px] lg:whitespace-nowrap">
              Cutting Edge Technologies For .Net Development Services
            </h2>
            <p className="font-normal text-[#475569] text-[13.5px] sm:text-[14.5px] leading-[1.65] mt-2.5 max-w-3xl mx-auto">
              Explore the many reasons why .NET Core is the ideal choice for modern application development.
            </p>
          </div>

          {/* Carousel Track Container with Auto-Scroll & Hover Pause */}
          <div
            className="relative overflow-hidden w-full py-2"
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
          >
            <div
              className="flex space-x-5 sm:space-x-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${techCarouselIndex * 484}px)`
              }}
            >
              {[
                {
                  title: 'Blazor',
                  desc: 'NET: We utilize the Blazor framework to create interactive client-side web user interfaces. Use C# to create rich, interactive user interfaces.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="10" y="4" width="20" height="32" rx="3" />
                      <circle cx="20" cy="8" r="0.8" fill="currentColor" />
                      <line x1="17" y1="32" x2="23" y2="32" />
                      <circle cx="20" cy="19" r="4.5" />
                      <circle cx="20" cy="19" r="1.5" fill="currentColor" />
                      <path d="M20 12.5V14.5M20 23.5V25.5M13.5 19H15.5M24.5 19H26.5" />
                    </svg>
                  )
                },
                {
                  title: 'MAUI (Multi-platform App UI)',
                  desc: 'NET: We utilize the Blazor framework to create interactive client-side web user interfaces. Use C# to create rich, interactive user interfaces.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="6" width="18" height="14" rx="2" />
                      <line x1="10" y1="20" x2="18" y2="20" />
                      <line x1="14" y1="20" x2="14" y2="24" />
                      <rect x="18" y="16" width="16" height="18" rx="2" />
                      <circle cx="26" cy="30" r="0.8" fill="currentColor" />
                      <circle cx="26" cy="22" r="3" />
                      <path d="M26 17V19 M26 25V27 M21 22H23 M29 22H31" />
                    </svg>
                  )
                },
                {
                  title: 'Minimal APIs',
                  desc: 'In .NET 6, we employ the Minimal API technique to build REST APIs that put an emphasis on simplicity and minimize code verbosity, configuration, and formalities.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 24C7 24 5 21.5 5 18.5C5 15.8 7.2 13.6 9.9 13.5C10.7 9.2 14.5 6 19 6C24 6 28 9.5 28.8 14.2C31.7 14.8 34 17.3 34 20.3C34 23.5 31.4 26 28.2 26H10" />
                      <text x="19" y="19" textAnchor="middle" fill="#0084D1" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">API</text>
                      <line x1="13" y1="29" x2="13" y2="33" />
                      <line x1="19" y1="29" x2="19" y2="34" />
                      <line x1="25" y1="29" x2="25" y2="33" />
                    </svg>
                  )
                },
                {
                  title: 'Azure Cloud & Microservices',
                  desc: 'Our cloud architecture leverages serverless Azure functions and microservices to streamline workflows, scale effortlessly, and manage enterprise workloads.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="10" y="10" width="20" height="20" rx="3" />
                      <circle cx="20" cy="20" r="4" />
                      <line x1="10" y1="15" x2="4" y2="15" /><circle cx="3" cy="15" r="1" fill="currentColor" />
                      <line x1="10" y1="25" x2="4" y2="25" /><circle cx="3" cy="25" r="1" fill="currentColor" />
                      <line x1="30" y1="15" x2="36" y2="15" /><circle cx="37" cy="15" r="1" fill="currentColor" />
                      <line x1="30" y1="25" x2="36" y2="25" /><circle cx="37" cy="25" r="1" fill="currentColor" />
                      <line x1="15" y1="10" x2="15" y2="4" /><circle cx="15" cy="3" r="1" fill="currentColor" />
                      <line x1="25" y1="10" x2="25" y2="4" /><circle cx="25" cy="3" r="1" fill="currentColor" />
                      <line x1="15" y1="30" x2="15" y2="36" /><circle cx="15" cy="37" r="1" fill="currentColor" />
                      <line x1="25" y1="30" x2="25" y2="36" /><circle cx="25" cy="37" r="1" fill="currentColor" />
                    </svg>
                  )
                },
                {
                  title: 'Entity Framework Core',
                  desc: 'We leverage EF Core for robust, object-relational mapping to build highly performant database queries, connection pooling, and automated schema migrations.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="20" cy="10" rx="14" ry="5" />
                      <path d="M6 10V18C6 20.8 12.3 23 20 23C27.7 23 34 20.8 34 18V10" />
                      <path d="M6 18V26C6 28.8 12.3 31 20 31C27.7 31 34 28.8 34 26V18" />
                      <line x1="20" y1="15" x2="20" y2="18" />
                      <line x1="20" y1="23" x2="20" y2="26" />
                    </svg>
                  )
                },
                {
                  title: 'ASP.NET Core Web APIs',
                  desc: 'We build high-throughput, low-latency RESTful and GraphQL endpoints that handle millions of concurrent requests seamlessly with C# and .NET runtime.',
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1] fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="7" width="30" height="26" rx="3.5" />
                      <line x1="5" y1="15" x2="35" y2="15" />
                      <circle cx="9" cy="11" r="1.2" fill="currentColor" />
                      <circle cx="13" cy="11" r="1.2" fill="currentColor" />
                      <circle cx="17" cy="11" r="1.2" fill="currentColor" />
                      <path d="M14 22L11 25L14 28" />
                      <path d="M26 22L29 25L26 28" />
                      <line x1="21" y1="20" x2="19" y2="30" />
                    </svg>
                  )
                }
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[380px] sm:w-[430px] lg:w-[460px] shrink-0 rounded-[10px] bg-[#DDF1FC] p-6 sm:p-7 min-h-[190px] sm:min-h-[200px] flex flex-col justify-start text-left select-none transition-all hover:shadow-xs"
                >
                  {/* Top Real SVG Icon */}
                  <div className="mb-3.5">
                    {tech.icon}
                  </div>

                  {/* Tech Title */}
                  <h3 className="font-[800] text-[16.5px] sm:text-[17.5px] text-[#0B0F19] mb-2 leading-snug">
                    {tech.title}
                  </h3>

                  {/* Tech Description */}
                  <p
                    className="font-normal text-[#2D3748]"
                    style={{ fontSize: '12.5px', lineHeight: '1.6' }}
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

      {/* .NET Technologies We Use Section (Exact 1:1 Match from Screenshot) */}
      <KeyReasonsChooseFlutter
        title=".NET Technologies Sapphire Use for .NET Development Services"
        subtitle="Sapphire is well known for creating custom .NET applications, and our developers use state-of-the-art technology to develop amazing solutions. We implement your ideas using the .NET technologies listed below."
        items={[
          {
            id: 1,
            title: 'Core ASP.NET',
            desc: 'We assist you in developing cutting-edge online applications, mobile backends, and cloud-based Internet of Things applications using the open-source, cross-platform ASP.NET Core framework.'
          },
          {
            id: 2,
            title: 'ASP.NET',
            desc: 'You can create dynamic websites, apps, and services with this open-source, server-side web application framework if you have a strong understanding of ASP.NET.'
          },
          {
            id: 3,
            title: 'ASP.NET MVC',
            desc: 'We assist you in creating a lightweight development model by combining ASP.NET features and master pages with an ASP.NET MVC web application framework.'
          },
          {
            id: 4,
            title: 'SharePoint',
            desc: 'To categorize, locate, and distribute the appropriate information needed for the creation of your business application, make the most of the SharePoint platform.'
          },
          {
            id: 5,
            title: 'SQL Server',
            desc: 'Microsoft SQL database server is what we use to store and retrieve data when other software asks for it. This software can run on a different network or an already-existing machine.'
          },
          {
            id: 6,
            title: 'Visual Studio',
            desc: 'We create feature-rich C# or .NET apps utilizing the IDE with the assistance of Visual Studio. It enables the editing of code, interface design, performance analysis, and other tasks.'
          }
        ]}
      />

      {/* Success Stories Section Matching Screenshot 1:1 */}
      <SuccessStoriesSection />

      {/* Sectors, Showcase & Other Service Sections */}
      {/* .NET Application Development Services Carousel (Exact 1:1 Match from Screenshot) */}
      <FlutterExpertiseServices
        title=".NET Application Development Services"
        subtitle="We combine technology expertise to provide custom .NET Application development services to accomplish business objectives."
        cards={[
          {
            title: 'Enterprise .NET Development',
            desc: 'Build performant, secure, scalable Enterprise-grade applications with our experienced .Net Team.'
          },
          {
            title: 'App Development',
            desc: 'Our .Net experts develop Windows desktop apps and cross-platform mobile apps that ensure engagement, interactivity and easy scalability.'
          },
          {
            title: 'Third-Party Integration',
            desc: 'Our .Net specialists will take care of your integration needs with other Microsoft and non-Microsoft platforms.'
          },
          {
            title: 'Custom ASP.NET Development',
            desc: 'Our ASP.NET development team follow best coding practices to create full-featured backends for web, mobile, desktop and IoT applications'
          },
          {
            title: '.NET Migration & Upgrade',
            desc: 'Upgrade your legacy software to high-performance modern .NET Core architecture with zero downtime and seamless data migration.'
          },
          {
            title: 'Maintenance & Support',
            desc: 'Continuous 24/7 monitoring, security updates, bug fixes, and SLA-backed support for all your .NET web and enterprise applications.'
          }
        ]}
      />
      {/* Growing Popularity of DotNet Development Video Showcase (1:1 Screenshot Match) */}
      <TopRatedFlutterShowcase
        type="dotnet"
        title="Growing Popularity of DotNet Development"
        videoTitle="Empower Your Business with .NET Development"
      />
      <AndroidHiringModels />
      <WhatOurClientsSaySection />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile .NET development sprints from architecture wireframes to CI/CD automated builds and enterprise release." />
      <ProudAwardsBanner />
      <FlutterTechStackSection />
      <DigitalTransformationSlider />
      <TrustedBrandsGrid />
      <TransformativeImpactSection title="Explore The Transformative Impact Of Web App On Your Business Success" />
      <AboutUsStats />
      <FeaturedInBrandsSection />
      <SuccessMatrix />
      <InnovativeSolutionsVideoSection />
      <OurStoryTheirWordsSection />

      {/* Signature 2-Column FAQ Section (1:1 Reference Match) */}
      <SapphireFaqSection />

      {/* What Sets Us Apart Section (1:1 Reference Match) */}
      <AndroidWhatSetsUsApartSection />

      {/* Our Recent Blogs Section (1:1 Reference Match) */}
      <AndroidRecentBlogsSection />

      {/* Have App Development Challenge To Address CTA Banner (1:1 Reference Match) */}
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default DotNetDevelopmentService;
