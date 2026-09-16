import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
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
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
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

export const PhpDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);

  const [comboCarouselIndex, setComboCarouselIndex] = useState(0);
  const [isComboHovered, setIsComboHovered] = useState(false);
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');

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
      setComboCarouselIndex((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isComboHovered]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Custom PHP Web Application',
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
        title="Top PHP Development Company | Custom PHP Web Solutions | Firevy"
        description="We help businesses create enterprise-grade, high-performance PHP web applications, APIs, and portals. Scalable PHP & Laravel development services to build secure, robust software."
        canonical="/services/php"
      />

      {/* =========================================================================
          EXACT 1:1 RECREATED HERO SECTION (MATCHING PHP REFERENCE SCREENSHOT)
          ========================================================================= */}
      <section className="pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-10 bg-white text-slate-900 relative overflow-hidden text-left font-sans">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

            {/* Left Column: Heading, Paragraph, 4 Stats, 2 CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Heading */}
              <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[800] text-[#0B0F19] leading-[1.15] tracking-tight">
                Leading PHP Development<br className="hidden sm:inline" /> Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[13px] sm:text-[14px] text-[#475569] leading-[1.68] font-normal max-w-[580px]">
                We offer customized, robust, and complex PHP web application development services for your business needs. We have PHP development experts who have decade long expertise in this field. Call us now to get your quote today! Whether you're looking to Hire PHP developer for a short-term task or a long-term project, we've got the right talent for you.
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
                  className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] sm:text-[14px] transition-all shadow-sm group"
                >
                  <span>Hire PHP Developers</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Realistic Open Laptop Mockup with Jood Palace Hotel Dubai Web App (1:1 Screenshot Match) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-2 pb-2">
              <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex flex-col items-center justify-center select-none">

                {/* Laptop Screen Lid */}
                <div className="w-full bg-[#111827] rounded-t-[14px] sm:rounded-t-[18px] p-2.5 sm:p-3 pb-0 border-[3px] border-[#374151] shadow-2xl relative">

                  {/* Top Center Camera WebCam Dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-1.5" />

                  {/* Inner Screen Display */}
                  <div className="w-full bg-[#1A1512] rounded-t-[6px] overflow-hidden flex flex-col relative text-white">

                    {/* Top Website Navigation Bar */}
                    <div className="bg-black/60 backdrop-blur-xs px-3 py-1 flex items-center justify-between text-[6px] sm:text-[7px] text-slate-300 border-b border-white/10 z-20">
                      <div className="flex items-center gap-1">
                        <span className="font-extrabold text-amber-300 tracking-wider text-[7px] sm:text-[8px]">JOOD</span>
                        <span className="text-[5.5px] text-white/70">PALACE</span>
                      </div>
                      <div className="hidden sm:flex items-center space-x-2 text-[5.5px] text-slate-300">
                        <span>OVERVIEW</span>
                        <span>STAY</span>
                        <span>SPA</span>
                        <span>OFFERS</span>
                        <span>MEET</span>
                        <span>DINING</span>
                        <span>GALLERY</span>
                        <span>CONTACT</span>
                      </div>
                      <div className="bg-amber-600/80 text-white text-[5px] px-1.5 py-0.5 rounded-[2px] font-bold">
                        EN
                      </div>
                    </div>

                    {/* Main Hero Banner: Luxury Hotel Hospitality Scene */}
                    <div className="relative h-[135px] sm:h-[155px] w-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=80"
                        alt="Jood Palace Hotel Dubai"
                        className="w-full h-full object-cover brightness-90"
                      />

                      {/* Right Vertical 'BOOK NOW' Ribbon */}
                      <div className="absolute right-0 top-3 bottom-3 w-4 sm:w-5 bg-gradient-to-b from-[#1E293B]/90 to-[#0F172A]/90 border-l border-white/20 flex items-center justify-center text-[5.5px] sm:text-[6.5px] font-bold tracking-widest text-slate-300 -rotate-180 [writing-mode:vertical-rl] z-10">
                        BOOK NOW
                      </div>

                      {/* Center Bottom Banner Caption */}
                      <div className="absolute inset-x-0 bottom-0 py-1.5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-center">
                        <div className="text-[8px] sm:text-[9.5px] font-extrabold text-amber-200 tracking-wider">
                          JOOD PALACE HOTEL DUBAI
                        </div>
                        <div className="text-[6px] text-amber-400 tracking-widest">
                          ★★★★★
                        </div>
                      </div>
                    </div>

                    {/* Bottom 4 Thumbnail Gallery Cards Strip */}
                    <div className="grid grid-cols-4 gap-1 p-1.5 bg-[#140F0C] border-t border-white/10">
                      <div className="h-8 sm:h-9 rounded-[3px] overflow-hidden border border-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=200&auto=format&fit=crop&q=80"
                          alt="Luxury Room"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-8 sm:h-9 rounded-[3px] overflow-hidden border border-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&auto=format&fit=crop&q=80"
                          alt="Fine Dining"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-8 sm:h-9 rounded-[3px] overflow-hidden border border-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&auto=format&fit=crop&q=80"
                          alt="Luxury Spa"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-8 sm:h-9 rounded-[3px] overflow-hidden border border-white/20">
                        <img
                          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&auto=format&fit=crop&q=80"
                          alt="Pool Lounge"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Laptop Base / Keyboard Deck Bottom Plate */}
                <div className="w-[108%] h-3 sm:h-3.5 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[8px] relative shadow-md flex items-start justify-center">
                  <div className="w-12 sm:w-16 h-1.5 bg-[#64748B] rounded-b-[4px]" />
                </div>

                {/* Realistic Floor Reflection & Shadow */}
                <div className="w-[85%] h-3 bg-slate-900/20 rounded-full blur-sm -mt-0.5" />

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* =========================================================================
          WEB DEVELOPMENT MARKET STATS & AWARD WINNING PHP COMPANY SHOWCASE (1:1 MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">

            {/* ROW 1: Web Development Market Stats (Chart Left + Content Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Premium High-Definition Market Graph Image matching screenshot 1:1 */}
              <div className="lg:col-span-6 flex justify-center items-center">
                <div className="w-full max-w-[520px] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,120,215,0.08)] border border-[#E2E8F0] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,120,215,0.14)] select-none">
                  <img
                    src="/images/web_development_market_graph.jpg"
                    alt="Global web development market size from 2020 to 2031"
                    className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
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

            {/* ROW 2: Award Winning PHP Development Company (Text Left + Custom Vector Illustration Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
              {/* Left Column: Heading & Detailed Description (Exact Match with Reference Screenshot) */}
              <div className="lg:col-span-7 space-y-3.5 text-left">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                  Award Winning PHP<br />Development Company
                </h2>
                <p className="font-normal text-[#475569] text-[13px] sm:text-[14px] leading-[1.75]">
                  Boost your development project using PHP’s capability and handle any business requirements with quick, adaptable, and useful web solutions. Generative AI PHP Development Services use server-side programming languages such as HTML, CSS, and JavaScript to create dynamic, feature-rich websites and applications. Improve corporate performance and quicken expansion, efficiency, and production with PHP web development services that are always changing. We also provide PHP API development and integration services to enhance the functionality of your applications.
                </p>
              </div>

              {/* Right Column: High-Fidelity Illustration matching PHP screenshot 1:1 */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-center justify-center select-none">
                  <img
                    src="/images/php_award_winning_illustration.jpg"
                    alt="Award Winning PHP Development Company"
                    className="w-full h-auto object-contain drop-shadow-sm rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* ROW 3: Leverage Sapphire PHP Development Expertise (Illustration Left + Text Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
              {/* Left Column: High-Fidelity Collaboration Illustration matching PHP screenshot 1:1 */}
              <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
                <div className="relative w-full max-w-[460px] sm:max-w-[500px] flex items-center justify-center select-none">
                  <img
                    src="/images/php_leverage_expertise_illustration.jpg"
                    alt="Leverage Sapphire PHP Development Expertise"
                    className="w-full h-auto object-contain drop-shadow-sm rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Heading & Detailed Description (Exact Match with Reference Screenshot) */}
              <div className="lg:col-span-7 space-y-3.5 text-left order-1 lg:order-2">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                  Leverage Sapphire PHP<br />Development Expertise
                </h2>
                <p className="font-normal text-[#475569] text-[13px] sm:text-[14px] leading-[1.75]">
                  As an AI-Powered PHP Development Company, we use database management systems like MySQL and MongoDB together with PHP back-end and front-end JavaScript frameworks like Vue.js and React.js to create dozens of dynamic, user-friendly websites. As a top PHP development firm, we've used database management systems like MySQL and MongoDB together with PHP back-end and front-end JavaScript frameworks like Vue.js and React.js to create dozens of dynamic, user-friendly websites. We are recognized as Reliable PHP Development Company for Businesses with a Limited Budget for best outcome. Our portfolio also includes Laravel PHP development services tailored for performance and scalability.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* World Wide Top Rated IT Company on Clutch (Auto-scroll Marquee Awards Banner) */}
      <ClutchTopRatedBanner />

      {/* =========================================================================
          OFFERING UNMATCHED PHP DEVELOPMENT SERVICES (1:1 SCREENSHOT MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container>
          {/* Main Centered Section Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] text-center tracking-tight mb-6 sm:mb-8">
            Offering Unmatched PHP Development Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
            {/* Left Column: Subtle Light-Blue Contoured Card with Large Quote & Bold Blue Heading */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full relative bg-[#F0F8FD] rounded-2xl p-8 sm:p-10 lg:p-11 flex flex-col justify-start border border-[#D5E8F7] shadow-xs overflow-hidden select-none">
                {/* Subtle Background Topography Contours (Vector Curves) */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <path d="M-50 100 C 50 80, 150 160, 250 120 C 350 80, 400 180, 450 160" stroke="#005F96" strokeWidth="1.2" strokeOpacity="0.25" />
                  <path d="M-30 200 C 70 180, 170 260, 270 220 C 370 180, 420 280, 470 260" stroke="#005F96" strokeWidth="1.2" strokeOpacity="0.25" />
                  <path d="M-20 300 C 80 280, 180 360, 280 320 C 380 280, 430 380, 480 360" stroke="#005F96" strokeWidth="1.2" strokeOpacity="0.25" />
                  <path d="M50 0 C 150 100, 120 250, 220 350" stroke="#005F96" strokeWidth="1" strokeOpacity="0.18" />
                  <path d="M200 0 C 300 100, 270 250, 370 350" stroke="#005F96" strokeWidth="1" strokeOpacity="0.18" />
                </svg>

                {/* Bold Double Quote Icon (Exact Reference Match) */}
                <div className="relative z-10 mb-6 sm:mb-8">
                  <svg className="w-11 h-11 sm:w-12 sm:h-12 text-[#005F96]" viewBox="0 0 40 32" fill="currentColor">
                    <path d="M0 18.667C0 8.36 6.276 0 17.067 0v7.467c-5.59 0-8.534 3.733-8.534 8.533H16v16H0V18.667zm24 0C24 8.36 30.276 0 41.067 0v7.467c-5.59 0-8.534 3.733-8.534 8.533H40v16H24V18.667z" />
                  </svg>
                </div>

                {/* Big Blue Heading (Exact 5-line break and sizing matching screenshot) */}
                <h3 className="relative z-10 text-[24px] sm:text-[28px] lg:text-[31px] font-[800] text-[#005F96] leading-[1.32] tracking-tight">
                  We Have Extensive<br />
                  Expertise In<br />
                  Building Robust<br />
                  PHP Websites For<br />
                  Several Businesses
                </h3>
              </div>
            </div>

            {/* Right Column: Two Detailed Paragraphs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-[#475569] text-[13.5px] sm:text-[14.5px] leading-[1.78] font-normal">
              <p>
                Sapphire Software Solutions is a leading PHP web development company that offers advanced, custom PHP development services to cater to your ever-changing business requirements. Our PHP software development team can develop dynamic and powerful PHP solutions to facilitate your business and lead in the market. If you are hunting for a PHP application development company, then your search ends at Sapphire Solutions. As a PHP app development company, we have expertise in creating attractive and scalable web and mobile solutions ranging from simple web pages to complex enterprise-level applications. Our Custom PHP web application development services are crafted to fit any business model.
              </p>
              <p>
                We are a team of expert PHP web developers and seasoned project managers, designers who work to deliver result-oriented PHP web development services. From simple PHP-based websites and apps to advanced domain-specific solutions, we have expertise in doing it all. We understand our clients’ absolute needs and have a proven work record in delivering social networking sites, Web calendars, Payment gateways, and more. Sapphire Solutions is a reliable Enterprise PHP development company USA serving businesses across industries. Whether you're planning a complete overhaul or need PHP migration services from legacy systems, we ensure a smooth transition. Looking to build a scalable online store? Our PHP eCommerce website development expertise guarantees a seamless experience. Also, as a trusted WordPress PHP development company, we build flexible, content-rich websites that drive results.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          CUTTING EDGE TOOLS AND FRAMEWORKS (1:1 SCREENSHOT FULL-WIDTH CAROUSEL)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left overflow-hidden select-none w-full">
        {/* Centered Heading with Container */}
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Cutting Edge Tools and Frameworks That Sapphire Uses For PHP Development
            </h2>
          </div>
        </Container>

        {/* Full-Width Carousel Track Container */}
        <div
          className="w-full relative overflow-hidden py-2 px-4 sm:px-8"
          onMouseEnter={() => setIsTechHovered(true)}
          onMouseLeave={() => setIsTechHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-5 sm:gap-6"
            style={{
              transform: `translateX(-${techCarouselIndex * 360}px)`
            }}
          >
            {[
              {
                id: 1,
                title: 'Serverless PHP Computing',
                desc: 'Using serverless computing paradigm, we handle backend management, scaling, and execution without server maintenance.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 38h32a8 8 0 0 0 0-16 11 11 0 0 0-21.5-3A8 8 0 0 0 10 38z" />
                    <path d="M26 24v10m-5-5l5-5 5 5" />
                  </svg>
                )
              },
              {
                id: 2,
                title: 'Enhanced Development Tools',
                desc: 'To ensure error-free development, we use upgraded development tools for program creation, editing, maintenance, and debugging.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Box/Crate */}
                    <rect x="6" y="20" width="22" height="22" rx="3" stroke="#0095D9" />
                    <path d="M12 20v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" stroke="#0095D9" />
                    {/* Small Gear */}
                    <circle cx="17" cy="31" r="5" stroke="#0095D9" />
                    <path d="M17 23v2m0 12v2m-6-8h2m10 0h2" stroke="#0095D9" />
                    {/* Bar chart rising on the right */}
                    <rect x="34" y="24" width="4" height="18" rx="1" fill="#0095D9" opacity="0.85" />
                    <rect x="41" y="16" width="4" height="26" rx="1" fill="#0095D9" opacity="0.85" />
                    <rect x="48" y="10" width="4" height="32" rx="1" fill="#0095D9" opacity="0.85" />
                    {/* Trendline */}
                    <path d="M30 20l8-8 12-4" stroke="#0095D9" strokeWidth="2" />
                    <polyline points="46,8 50,8 50,12" stroke="#0095D9" strokeWidth="2" />
                  </svg>
                )
              },
              {
                id: 3,
                title: 'GraphQL Integration',
                desc: 'We make use of GraphQL, which lets you request only the information you require and nothing more, by giving a thorough and intelligible description of the data in your API.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Top Gear */}
                    <circle cx="20" cy="18" r="8" stroke="#0095D9" />
                    <circle cx="20" cy="18" r="3" stroke="#0095D9" fill="#0095D9" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <rect key={i} x="18.5" y="6" width="3" height="3.5" rx="1" fill="#0095D9" transform={`rotate(${i * 45} 20 18)`} />
                    ))}
                    {/* Bottom Right Gear */}
                    <circle cx="36" cy="34" r="9" stroke="#0095D9" />
                    <circle cx="36" cy="34" r="3.5" stroke="#0095D9" fill="#0095D9" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <rect key={i} x="34.5" y="21.5" width="3" height="4" rx="1" fill="#0095D9" transform={`rotate(${i * 45} 36 34)`} />
                    ))}
                    {/* Nodes / Link */}
                    <path d="M14 36h10v10" stroke="#0095D9" strokeWidth="2.2" />
                    <circle cx="14" cy="36" r="2.5" fill="#0095D9" />
                    <circle cx="24" cy="46" r="2.5" fill="#0095D9" />
                  </svg>
                )
              },
              {
                id: 4,
                title: 'Asynchronous Programming',
                desc: 'Callbacks, async/await, and promises are some of the characteristics that we employ in asynchronous programming to build more responsive and effective apps.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Code Window */}
                    <rect x="6" y="10" width="42" height="34" rx="5" stroke="#0095D9" />
                    <line x1="6" y1="20" x2="48" y2="20" stroke="#0095D9" />
                    <circle cx="12" cy="15" r="1.5" fill="#0095D9" />
                    <circle cx="18" cy="15" r="1.5" fill="#0095D9" />
                    <circle cx="24" cy="15" r="1.5" fill="#0095D9" />
                    {/* Center Code Symbol </> */}
                    <path d="M19 33l-5-5 5-5" stroke="#0095D9" strokeWidth="2.5" />
                    <path d="M35 23l5 5-5 5" stroke="#0095D9" strokeWidth="2.5" />
                    <line x1="29" y1="23" x2="25" y2="33" stroke="#0095D9" strokeWidth="2.5" />
                  </svg>
                )
              },
              {
                id: 5,
                title: 'Microservices & REST APIs',
                desc: 'Decoupled PHP microservices with RESTful APIs, enabling rapid third-party integrations, resilient data streams, and independent service deployment.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="6" width="16" height="16" rx="4" stroke="#0095D9" />
                    <rect x="32" y="6" width="16" height="16" rx="4" stroke="#0095D9" />
                    <rect x="6" y="32" width="16" height="16" rx="4" stroke="#0095D9" />
                    <rect x="32" y="32" width="16" height="16" rx="4" stroke="#0095D9" />
                    <path d="M22 14h10M14 22v10M40 22v10M22 40h10" stroke="#0095D9" strokeWidth="2.2" />
                  </svg>
                )
              },
              {
                id: 6,
                title: 'Modern PHP 8.3 & Laravel',
                desc: 'Leveraging JIT compilation, fibers, typed properties, and enum match expressions to build lightning-fast, secure, and modern enterprise applications.',
                icon: (
                  <svg viewBox="0 0 54 54" className="w-10 h-10 text-[#0095D9]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 36L8 27l6-9h12l6 9-6 9H14z" stroke="#0095D9" />
                    <path d="M28 36l6-9-6-9h12l6 9-6 9H28z" stroke="#0095D9" />
                    <circle cx="27" cy="27" r="2.5" fill="#0095D9" />
                  </svg>
                )
              }
            ].map((card) => (
              <div
                key={card.id}
                className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[450px] shrink-0"
              >
                <div className="bg-[#E5F3FC] hover:bg-[#DCF0FC] transition-all duration-300 rounded-2xl p-5 sm:p-6 flex flex-col justify-start border border-[#CEE7F8] shadow-2xs hover:shadow-md cursor-pointer group">
                  {/* Top Proper Vector Icon */}
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0F172A] tracking-tight mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.6] font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered Arrow Controls (← →) */}
        <div className="flex items-center justify-center space-x-6 pt-4 sm:pt-6">
          <button
            onClick={() => setTechCarouselIndex((prev) => (prev <= 0 ? 3 : prev - 1))}
            className="p-2 rounded-full text-slate-700 hover:text-[#005F96] hover:bg-slate-100 transition-all text-2xl font-bold select-none cursor-pointer"
            aria-label="Previous tools slide"
          >
            ←
          </button>
          <button
            onClick={() => setTechCarouselIndex((prev) => (prev >= 3 ? 0 : prev + 1))}
            className="p-2 rounded-full text-slate-700 hover:text-[#005F96] hover:bg-slate-100 transition-all text-2xl font-bold select-none cursor-pointer"
            aria-label="Next tools slide"
          >
            →
          </button>
        </div>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES (10 White Rounded Cards on Deep Blue - 1:1 Match)
          ========================================================================= */}
      <PremiumServicesGrid
        title="Our Premium Services"
        companyName="Sapphire"
      />

      {/* =========================================================================
          COMBINING TECHNOLOGY FOR CROSS-PLATFORM PHP DEVELOPMENT (1:1 COPY TO COPY)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left overflow-hidden select-none w-full">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Combining Technology for Cross-Platform PHP<br className="hidden sm:inline" /> Development
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] mt-3.5 max-w-2xl mx-auto font-normal leading-relaxed">
              As a leading organization with a team of PHP developers, we combine PHP with several other languages to create robust applications.
            </p>
          </div>
        </Container>

        {/* Full-Width Carousel Track */}
        <div
          className="w-full relative overflow-hidden py-2 px-4 sm:px-8"
          onMouseEnter={() => setIsComboHovered(true)}
          onMouseLeave={() => setIsComboHovered(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-5 sm:gap-6"
            style={{
              transform: `translateX(-${comboCarouselIndex * 370}px)`
            }}
          >
            {[
              {
                id: 1,
                title: 'Core PHP + AngularJS',
                desc: 'Combined with PHP, AngularJS allows for the creation of interactive user interfaces and real-time data changes when developing dynamic web applications.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    {/* Angular Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2L2 5.5l1.5 13.5L12 22l8.5-3L22 5.5 12 2zm0 2.8l6.1 2.2-1 9.4L12 18.7l-5.1-2.3-1-9.4L12 4.8zm-1 3.7l-3.3 7.5h1.7l.7-1.8h3.8l.7 1.8h1.7L13 8.5h-2zm1 2.3l1.3 3.4h-2.6l1.3-3.4z" />
                    </svg>
                    <span className="text-white font-bold text-xs">+</span>
                    {/* PHP Browser Icon */}
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              },
              {
                id: 2,
                title: 'Vue.js + Core PHP',
                desc: 'We guarantee improved responsiveness, interactivity, and overall user engagement with Vue.js running the UI and PHP powering the server.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    {/* Vue Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M2 3h3.5L12 14.5 18.5 3H22L12 20.5 2 3zm4.5 0h3.5L12 6.5 14 3h3.5L12 12.5 6.5 3z" />
                    </svg>
                    <span className="text-white font-bold text-xs">+</span>
                    {/* PHP Browser Icon */}
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              },
              {
                id: 3,
                title: 'React JS + Core PHP',
                desc: 'We guarantee a smooth and dynamic user experience that enthralls and engages users by effortlessly integrating React JS components within PHP-driven apps.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    {/* React Atom Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="2.2" />
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" opacity="0.3" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" fill="none" stroke="white" strokeWidth="1.2" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" fill="none" stroke="white" strokeWidth="1.2" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" fill="none" stroke="white" strokeWidth="1.2" />
                    </svg>
                    <span className="text-white font-bold text-xs">+</span>
                    {/* PHP Browser Icon */}
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              },
              {
                id: 4,
                title: 'Lumen + Laravel',
                desc: "Lumen's speed and ease of use combined with Laravel's adaptability allows us to build high-performance API backends or fully functional web applications.",
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    {/* Lumen Lightbulb Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                    </svg>
                    <span className="text-white font-bold text-xs">+</span>
                    {/* Laravel Layered Box Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )
              },
              {
                id: 5,
                title: 'Node.js + Core PHP',
                desc: 'We combine Node.js for real-time event streaming, WebSockets, and rapid concurrency with PHP powering secure data management and transactions.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    <span className="text-[11px] font-black tracking-tighter">JS</span>
                    <span className="text-white font-bold text-xs">+</span>
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              },
              {
                id: 6,
                title: 'Python AI + Core PHP',
                desc: 'Integrate Python machine learning models and predictive AI pipelines seamlessly into high-performance PHP enterprise platforms.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    <span className="text-[11px] font-bold">Py</span>
                    <span className="text-white font-bold text-xs">+</span>
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              },
              {
                id: 7,
                title: 'Docker & AWS + PHP',
                desc: 'Containerized PHP-FPM execution with automated CI/CD deployment pipelines, AWS Aurora clustering, and Elastic Load Balancing.',
                pillBadge: (
                  <div className="inline-flex items-center space-x-2 bg-[#54A0D6] px-3.5 py-1.5 rounded-full mb-4 w-max text-white shadow-xs">
                    {/* Docker Whale Icon */}
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M4 10h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-9-3h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-3-3h2v2h-2zM2 13c.5 3.5 3.5 6 7.5 6 6 0 9.5-4 10.5-8.5-1-.5-2.5-.5-3.5.5-1.5-1-4-1-6 0-.5-.5-1.5-1-2.5-.5-1-.5-2.5-.5-3.5.5-1-.5-2-.5-2.5 2z" />
                    </svg>
                    <span className="text-white font-bold text-xs">+</span>
                    <div className="border border-white/80 rounded px-1 py-0.2 text-[9px] font-mono font-bold leading-tight">
                      &lt;?php&gt;
                    </div>
                  </div>
                )
              }
            ].map((card) => (
              <div
                key={card.id}
                className="w-[290px] sm:w-[350px] md:w-[380px] lg:w-[410px] shrink-0"
              >
                <div className="bg-[#E5F3FC] hover:bg-[#DDF0FC] transition-all duration-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-start border border-[#CEE7F8]/70 shadow-2xs hover:shadow-md cursor-pointer group min-h-[220px]">
                  {/* Technology Combination Badge Pill */}
                  {card.pillBadge}

                  {/* Card Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0F172A] tracking-tight mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.65] font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (1:1 COPY TO COPY)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left overflow-hidden select-none w-full">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Meet Sapphire&apos;s Exceptional Team of Seasoned Experts
            </h2>
          </div>

          {/* Category Tabs Pill Filter Bar (1:1 Copy to Copy Match) */}
          <div className="flex justify-center w-full mb-6 sm:mb-8">
            <div className="bg-[#E5F3FC] p-1.5 sm:p-2 rounded-full inline-flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 max-w-full shadow-2xs">
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
              ].map((cat) => {
                const isActive = expertActiveCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setExpertActiveCategory(cat);
                      setExpertCarouselIndex(0);
                    }}
                    className={`px-3.5 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                      ? 'bg-[#005F96] text-white shadow-xs font-bold'
                      : 'text-[#334155] hover:text-[#005F96] hover:bg-white/50'
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Team Cards Grid / Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {[
                {
                  id: 1,
                  category: 'Trending',
                  title: 'Mobile Application Team',
                  image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
                  techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                  composition: ['1 Mobile Architect', '2 iOS Experts', '2 Android Devs', '1 QA Engineer'],
                  experience: '7+ Years Avg. Experience',
                  summary: 'Specialized mobile squad engineering cross-platform Flutter/React Native & native iOS/Android applications with real-time sync, high FPS animations, and offline-first architectures.'
                },
                {
                  id: 2,
                  category: 'Trending',
                  title: 'Saas Product Dev. Team',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                  composition: ['1 SaaS Architect', '3 Full-Stack Devs', '1 DevOps Eng', '1 UI/UX Lead'],
                  experience: '8+ Years Avg. Experience',
                  summary: 'Multi-tenant cloud SaaS specialists building scalable subscription platforms, automated billing workflows, micro-frontends, and high-performance serverless backends.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Microsoft Dev. Team',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
                  techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                  composition: ['1 MS Lead Architect', '2 .NET Core Devs', '1 PowerApps Dev', '1 Azure Lead'],
                  experience: '9+ Years Avg. Experience',
                  summary: 'Certified Microsoft developers delivering robust .NET Core APIs, enterprise SharePoint intranets, low-code Power Platform automations, and resilient Azure infrastructure.'
                },
                {
                  id: 4,
                  category: 'Product Development',
                  title: 'Full-Stack PHP & Laravel Team',
                  image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80',
                  techs: ['Core PHP', 'Laravel', 'Symfony', 'MySQL', 'Redis', 'AWS'],
                  composition: ['1 Principal Architect', '3 Laravel Devs', '1 Database Specialist', '1 QA Lead'],
                  experience: '7+ Years Avg. Experience',
                  summary: 'High-throughput PHP artisans building secure web applications, headless architectures, microservices, and large-scale e-commerce backends.'
                },
                {
                  id: 5,
                  category: 'AI/ML',
                  title: 'AI & Data Engineering Team',
                  image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
                  techs: ['Python', 'TensorFlow', 'PyTorch', 'FastAPI', 'LangChain', 'Snowflake'],
                  composition: ['1 AI Research Lead', '2 ML Engineers', '1 Data Engineer', '1 MLOps Eng'],
                  experience: '6+ Years Avg. Experience',
                  summary: 'Generative AI and data engineering team developing customized LLM agents, predictive machine learning models, and real-time ETL streaming pipelines.'
                },
                {
                  id: 6,
                  category: 'Saas',
                  title: 'Cloud & DevOps Squad',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
                  techs: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Linux'],
                  composition: ['1 Cloud Solution Architect', '2 Senior DevOps Devs', '1 SecOps Specialist'],
                  experience: '8+ Years Avg. Experience',
                  summary: 'DevOps engineers orchestrating Kubernetes clusters, infrastructure-as-code with Terraform, automated blue-green deployments, and 24/7 observability.'
                }
              ]
                .filter((team) => {
                  if (expertActiveCategory === 'Trending') return true;
                  if (expertActiveCategory === 'Product Development') return team.id === 1 || team.id === 2 || team.id === 4;
                  if (expertActiveCategory === 'Saas') return team.id === 2 || team.id === 4 || team.id === 6;
                  if (expertActiveCategory === 'AI/ML') return team.id === 5 || team.id === 2;
                  if (expertActiveCategory === 'Data Engineering') return team.id === 5 || team.id === 3;
                  if (expertActiveCategory === 'Design') return team.id === 1 || team.id === 2;
                  if (expertActiveCategory === 'Marketing') return team.id === 2 || team.id === 4;
                  if (expertActiveCategory === 'IoT App Dev') return team.id === 1 || team.id === 5;
                  if (expertActiveCategory === 'Blockchain Dev') return team.id === 2 || team.id === 6;
                  return true;
                })
                .slice(expertCarouselIndex * 3, expertCarouselIndex * 3 + 3)
                .map((team) => {
                  const currentTab = expertTabs[team.id] || 'tech';
                  return (
                    <div
                      key={team.id}
                      className="bg-[#E5F3FC] rounded-2xl p-5 sm:p-6 border border-[#CEE7F8] flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300"
                    >
                      <div>
                        {/* Team Banner Image */}
                        <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-200 relative group">
                          <img
                            src={team.image}
                            alt={team.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 right-3 bg-[#005F96]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                            {team.experience}
                          </div>
                        </div>

                        {/* Team Title */}
                        <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] tracking-tight mb-3">
                          {team.title}
                        </h3>

                        {/* Inner Switcher Tabs (Technologies vs Team Composition) */}
                        <div className="flex items-center space-x-2 mb-4">
                          <button
                            onClick={() =>
                              setExpertTabs((prev) => ({ ...prev, [team.id]: 'tech' }))
                            }
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${currentTab === 'tech'
                              ? 'bg-[#005F96] text-white shadow-xs'
                              : 'bg-white text-[#475569] hover:bg-slate-50 border border-slate-200/60'
                              }`}
                          >
                            Technologies
                          </button>
                          <button
                            onClick={() =>
                              setExpertTabs((prev) => ({ ...prev, [team.id]: 'composition' }))
                            }
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${currentTab === 'composition'
                              ? 'bg-[#005F96] text-white shadow-xs'
                              : 'bg-white text-[#475569] hover:bg-slate-50 border border-slate-200/60'
                              }`}
                          >
                            Team Composition
                          </button>
                        </div>

                        {/* Pills Badges Container */}
                        <div className="flex flex-wrap gap-2 mb-6 min-h-[72px]">
                          {currentTab === 'tech' ? (
                            team.techs.map((t, idx) => (
                              <span
                                key={idx}
                                className="bg-white text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-2xs border border-white/60"
                              >
                                {t}
                              </span>
                            ))
                          ) : (
                            team.composition.map((c, idx) => (
                              <span
                                key={idx}
                                className="bg-white text-[#005F96] text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs border border-white/60 flex items-center space-x-1"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#005F96]"></span>
                                <span>{c}</span>
                              </span>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Get Details Button */}
                      <div>
                        <button
                          onClick={() => setSelectedTeamModal(team)}
                          className="bg-[#005F96] hover:bg-[#004B77] active:scale-95 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
                        >
                          <span>Get Details</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Bottom Centered Arrow Controls (← →) */}
            <div className="flex items-center justify-center space-x-6 pt-4 sm:pt-6">
              <button
                onClick={() => setExpertCarouselIndex((prev) => (prev <= 0 ? 1 : prev - 1))}
                className="p-2 rounded-full text-slate-700 hover:text-[#005F96] hover:bg-slate-100 transition-all text-2xl font-bold select-none cursor-pointer"
                aria-label="Previous team slide"
              >
                ←
              </button>
              <button
                onClick={() => setExpertCarouselIndex((prev) => (prev >= 1 ? 0 : prev + 1))}
                className="p-2 rounded-full text-slate-700 hover:text-[#005F96] hover:bg-slate-100 transition-all text-2xl font-bold select-none cursor-pointer"
                aria-label="Next team slide"
              >
                →
              </button>
            </div>
          </div>
        </Container>

        {/* Selected Team Interactive Detail Modal */}
        {selectedTeamModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
              {/* Modal Header with Image */}
              <div className="relative h-44 sm:h-48 w-full bg-slate-900">
                <img
                  src={selectedTeamModal.image}
                  alt={selectedTeamModal.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#00D8FF] text-[11px] font-extrabold uppercase tracking-widest mb-1">
                    Verified Sapphire Squad • {selectedTeamModal.experience}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedTeamModal.title}
                  </h3>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTeamModal(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 text-sm backdrop-blur-xs cursor-pointer transition-all"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Squad Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedTeamModal.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeamModal.techs.map((t, i) => (
                      <span
                        key={i}
                        className="bg-[#E5F3FC] text-[#005F96] text-xs font-bold px-3 py-1.5 rounded-full border border-[#CEE7F8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Team Composition & Key Roles
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTeamModal.composition.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs font-semibold text-slate-800"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#005F96]"></span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center space-x-3 text-xs text-emerald-800">
                  <span className="text-base">⚡</span>
                  <span><strong>Guaranteed Onboarding:</strong> Seamless sprint kickoff in under 48 hours with dedicated PM & agile tracking.</span>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedTeamModal(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/70 transition-all cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  onClick={() => setSelectedTeamModal(null)}
                  className="bg-[#005F96] hover:bg-[#004B77] text-white px-5 py-2.5 rounded-xl text-xs font-extrabold shadow-md flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <span>Hire This Squad</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          WHY CHOOSE PHP FOR WEB DEVELOPMENT? (1:1 COPY TO COPY MATCH)
          ========================================================================= */}
      <KeyReasonsChooseFlutter
        title="Why Choose PHP for Web Development?"
        subtitle="As one of the best server-side scripting languages, we use PHP to create robust and scalable web applications. Some of the major reasons to choose PHP are:"
        items={[
          {
            id: 1,
            title: 'Adaptable',
            desc: 'PHP is very scalable and can manage big traffic levels without experiencing performance issues. A PHP application can easily scale up or down based on the number of servers added.'
          },
          {
            id: 2,
            title: 'Safety',
            desc: 'PHP is protected against typical online vulnerabilities like SQL injection and cross-site scripting (XSS) by built-in security mechanisms. Furthermore, there is a sizable PHP development community that consistently releases security fixes and other upgrades for the language.'
          },
          {
            id: 3,
            title: 'Easy Integration',
            desc: 'Many databases and third-party apps, such as MySQL, PostgreSQL, and MongoDB, can be integrated with PHP. This facilitates the process for developers to create apps that interface with current systems.'
          },
          {
            id: 4,
            title: 'Open-source',
            desc: 'Hypertext Preprocessor, or PHP, is an open-source technology with freely accessible source code. Anyone can use it without needing to pay for a license or incur any costs because it is free.'
          },
          {
            id: 5,
            title: 'PHP CMSs',
            desc: 'PHP is a great choice for web development because it is used in leading CMSs (Content Management Systems). It is the primary programming language used by WordPress, Drupal, Joomla, Magento etc.'
          },
          {
            id: 6,
            title: 'Program',
            desc: 'Since PHP is an open-source program, it provides developers with a great deal of flexibility in creating solutions that are tailored to the specific demands of their clients.'
          }
        ]}
      />

      {/* Success Stories Section */}
      <SuccessStoriesSection />

      {/* =========================================================================
          SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE WEB DEVELOPMENT SERVICES (1:1 COPY TO COPY)
          ========================================================================= */}
      <SectorsThrivingSection
        title="Sectors Thriving Through Sapphire's Bespoke Web Development Services"
      />

      {/* =========================================================================
          INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (1:1 COPY TO COPY MATCH)
          ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left select-none w-full">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-snug">
              Industry-Focused Insights To Elevate Your Business
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] mt-2 font-normal">
              Trending Industries that Use Web Development
            </p>
          </div>

          {/* 2-Row Category Filter Pill Bar (1:1 Match) */}
          <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
            <div className="bg-[#F0F8FD] p-2.5 sm:p-3.5 rounded-2xl border border-[#D9EFF9] flex flex-col gap-2.5 shadow-2xs">
              {/* Row 1 */}
              <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
                {[
                  'Automotive',
                  'Ecommerce',
                  'Education',
                  'Entertainment',
                  'Finance',
                  'Food and Beverage',
                  'Healthcare'
                ].map((ind) => {
                  const isActive = activeInsightIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-3.5 sm:px-4.5 py-2 rounded-lg text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${isActive
                          ? 'bg-[#005F96] text-white font-bold shadow-xs'
                          : 'bg-white text-[#475569] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/60 shadow-2xs'
                        }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
                {[
                  'Information Technology',
                  'Logistics',
                  'Travel & Tourism',
                  'Utility Services'
                ].map((ind) => {
                  const isActive = activeInsightIndustry === ind;
                  return (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-3.5 sm:px-4.5 py-2 rounded-lg text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${isActive
                          ? 'bg-[#005F96] text-white font-bold shadow-xs'
                          : 'bg-white text-[#475569] hover:text-[#005F96] hover:bg-slate-50 border border-slate-200/60 shadow-2xs'
                        }`}
                    >
                      {ind}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Industry Project Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-6">
            {(() => {
              const industryProjects = {
                Automotive: [
                  {
                    id: 1,
                    title: 'Vehicle Data Logging Software',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Car Wash App Development',
                    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Taxi Booking-App Development',
                    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Ecommerce: [
                  {
                    id: 1,
                    title: 'Multi-Vendor Marketplace Platform',
                    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Luxury Fashion Storefront & POS',
                    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'B2B Wholesale Ordering Portal',
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Education: [
                  {
                    id: 1,
                    title: 'Interactive E-Learning Platform',
                    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Virtual Classroom Video App',
                    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Online Examination & LMS Portal',
                    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Entertainment: [
                  {
                    id: 1,
                    title: 'On-Demand OTT Video Streaming App',
                    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Music & Podcast Discovery Platform',
                    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Live Event Ticketing & QR Pass Hub',
                    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Finance: [
                  {
                    id: 1,
                    title: 'Fintech Mobile Banking Wallet',
                    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Crypto Portfolio & Trading Tracker',
                    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Automated Invoice & Tax Engine',
                    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                'Food and Beverage': [
                  {
                    id: 1,
                    title: 'On-Demand Food Delivery Ecosystem',
                    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Restaurant Table Booking & POS System',
                    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Cloud Kitchen Order Management App',
                    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Healthcare: [
                  {
                    id: 1,
                    title: 'Telemedicine Consultation Platform',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Patient Electronic Health Records (EHR)',
                    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Diagnostic Lab Sample Tracking App',
                    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                'Information Technology': [
                  {
                    id: 1,
                    title: 'Enterprise Cloud Infrastructure Monitor',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'DevOps CI/CD Deployment Pipeline Portal',
                    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'SaaS Multi-Tenant User Management Hub',
                    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                Logistics: [
                  {
                    id: 1,
                    title: 'Fleet Real-Time GPS Tracking Dashboard',
                    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'Last-Mile Courier Dispatch Application',
                    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Warehouse Automated Inventory Scanner',
                    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                'Travel & Tourism': [
                  {
                    id: 1,
                    title: 'Flight & Luxury Hotel Booking Engine',
                    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'City Tour Guide & GPS Landmark Map App',
                    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Car & Yacht Rental Reservation System',
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80'
                  }
                ],
                'Utility Services': [
                  {
                    id: 1,
                    title: 'Smart Solar & Home Energy Management',
                    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 2,
                    title: 'On-Demand Home Services Booking App',
                    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80'
                  },
                  {
                    id: 3,
                    title: 'Municipal Waste & Water Utility Portal',
                    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80'
                  }
                ]
              };

              const currentProjects =
                industryProjects[activeInsightIndustry] || industryProjects.Automotive;

              return currentProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs group-hover:shadow-lg transition-all duration-300 mb-3.5 relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-[800] text-[#0B0F19] text-center group-hover:text-[#005F96] transition-colors">
                    {proj.title}
                  </h3>
                </div>
              ));
            })()}
          </div>

          {/* View All Portfolio Button */}
          <div className="text-center pt-2">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center bg-[#005F96] hover:bg-[#004B77] active:scale-95 text-white font-bold text-sm px-7 py-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              View All Portfolio
            </Link>
          </div>
        </Container>
      </section>

      {/* PHP Application Development Services Carousel */}
      <FlutterExpertiseServices
        title="PHP Application Development Services"
        subtitle="We combine technology expertise to provide custom PHP Application development services to accomplish business objectives."
        cards={[
          {
            title: 'Custom PHP Web Development',
            desc: 'Build performant, secure, scalable Enterprise-grade web applications with our experienced PHP and Laravel team.'
          },
          {
            title: 'E-Commerce & Portals',
            desc: 'Our PHP specialists develop high-converting multi-vendor marketplaces, B2B portals, and custom WooCommerce ecosystems.'
          },
          {
            title: 'REST API & Microservices',
            desc: 'Seamless integration with third-party payment gateways, CRM systems, and mobile application backend services.'
          },
          {
            title: 'Legacy PHP Migration & Upgrades',
            desc: 'Upgrade your legacy PHP 5.x / 7.x software to high-performance modern PHP 8.3 architecture with zero downtime.'
          },
          {
            title: 'Cloud Optimization & Caching',
            desc: 'Fine-tune OPcache, Redis caching, queue workers, and load balancing for millions of monthly active users.'
          },
          {
            title: 'Maintenance & 24/7 Support',
            desc: 'Continuous SLA monitoring, security patches, automated backups, and bug fixes for all your PHP web applications.'
          }
        ]}
      />

      {/* PHP Development Company Video Showcase (1:1 Copy to Copy) */}
      <TopRatedFlutterShowcase
        type="php"
        title="PHP Development Company"
      />

      {/* All Remaining Sections Matching services/net 1:1 */}
      <AndroidHiringModels />
      <WhatOurClientsSaySection />
      <ProcessWeFollow title="Process We Follow" subtitle="Agile PHP development sprints from architecture wireframes to CI/CD automated builds and production release." />
      {/* =========================================================================
          TECHNOLOGY STACK WE USE FOR PHP WEB DEVELOPMENT (1:1 COPY TO COPY MATCH)
          ========================================================================= */}
      <FlutterTechStackSection
        title="Technology Stack We Use For PHP Web Development"
        data={[
          {
            category: 'Frameworks',
            items: ['CodeIgniter', 'Laravel']
          },
          {
            category: 'Libraries',
            items: [
              'Requests',
              'Carbon',
              'Faker',
              'Validation',
              'Upload',
              'Doctrine',
              'jQuery UI',
              'DataTables',
              'FusionCharts'
            ]
          },
          {
            category: 'CMS',
            items: ['WordPress', 'Magento', 'Drupal']
          },
          {
            category: 'Web Services',
            items: ['Ajax', 'JSON-hpd', 'SOAP', 'XML']
          },
          {
            category: 'Database',
            items: ['MySQL', 'Maria DB', 'SQLite', 'MongoDB', 'PostgreSQL', 'MS SQL']
          },
          {
            category: '3rd Party API Integrations',
            items: [
              'Stripe',
              'PayPal API',
              'WooCommerce API',
              'YouTube API',
              'Amazon API',
              'Google Maps API',
              'Google Chart API',
              'FedEx API',
              'Facebook APIs',
              'WordPress API',
              'WordPress REST API'
            ]
          }
        ]}
      />
      <TrustedBrandsGrid />
      <TransformativeImpactSection title="Explore The Transformative Impact Of Web App On Your Business Success" />
      <AboutUsStats />
      <FeaturedInBrandsSection />
      <SuccessMatrix />
      <InnovativeSolutionsVideoSection />
      <OurStoryTheirWordsSection />

      {/* Signature 2-Column FAQ Section */}
      <SapphireFaqSection />

      {/* What Sets Us Apart Section */}
      <AndroidWhatSetsUsApartSection />

      {/* Our Recent Blogs Section */}
      <AndroidRecentBlogsSection />

      {/* Have App Development Challenge To Address CTA Banner */}
      <AndroidChallengeCtaBanner />
    </div>
  );
};

export default PhpDevelopmentService;
