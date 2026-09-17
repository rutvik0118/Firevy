import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { DigitalTransformationCaseStudies } from '../home/DigitalTransformationCaseStudies';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import UnveilingInnovativeSolutionsVideoSlider from '../home/UnveilingInnovativeSolutionsVideoSlider';
import WhatOurClientsSayClutchSlider from '../home/WhatOurClientsSayClutchSlider';
import OurStoryTheirWordsVideoTestimonialsSlider from '../home/OurStoryTheirWordsVideoTestimonialsSlider';
import SapphireFaqWithStatBadges from '../home/SapphireFaqWithStatBadges';
import WeHaveBeenFeaturedInGrid from '../home/WeHaveBeenFeaturedInGrid';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Search,
  Zap,
  ShoppingBag,
  Sliders,
  Filter,
  Layers,
  Database,
  Smartphone,
  BarChart3,
  Sparkles,
  Lock,
  Globe,
  Tag,
  CheckCircle2,
  Phone,
  MessageCircle
} from 'lucide-react';

export const ProductFinderAppDevelopmentService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const principalSectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start end', 'end start']
  });

  const phoneY = useTransform(scrollYProgress, [0.2, 0.85], [0, 110]);

  const faqs = [
    {
      q: "1. What is a Product Finder App and how does it help eCommerce businesses?",
      a: "A Product Finder App helps shoppers quickly discover products through intelligent filtering, visual search, AI-guided questionnaires, and real-time inventory matching, boosting conversion rates and reducing bounce rates."
    },
    {
      q: "2. Can the Product Finder App integrate with WooCommerce, Shopify, or Magento?",
      a: "Yes! Our product finder applications seamlessly integrate via REST & GraphQL APIs with WooCommerce, Shopify, Magento, Salesforce Commerce Cloud, and custom headless backends."
    },
    {
      q: "3. How long does it take to develop a custom Product Finder Application?",
      a: "An MVP version can be delivered in 4 to 8 weeks, while an enterprise-grade solution featuring AI recommendations, augmented reality preview, and multi-store synchronization takes 10 to 14 weeks."
    },
    {
      q: "4. Does Firevy provide source code ownership and NDA?",
      a: "Absolutely. You receive 100% source code ownership, intellectual property rights, and a signed non-disclosure agreement (NDA) before project commencement."
    }
  ];

  const leftFeatures = [
    {
      title: 'Real-time AI Search Filter',
      desc: 'Instant keyword, category, and parametric filtering with ultra-low latency API search results.',
      icon: Search
    },
    {
      title: 'Interactive Guided Quiz',
      desc: 'Smart step-by-step decision trees that guide customers to their ideal product recommendation.',
      icon: Sliders
    },
    {
      title: 'WooCommerce & Platform Sync',
      desc: 'Bi-directional live inventory, pricing, and stock status integration with major eCommerce engines.',
      icon: ShoppingBag
    },
    {
      title: 'Visual & Image Search',
      desc: 'Users can upload or snap a product photo to discover exact or similar matching items instantly.',
      icon: Filter
    },
    {
      title: 'Personalized Wishlists',
      desc: 'Allow buyers to save recommendations, compare product specs side-by-side, and track price drops.',
      icon: Layers
    },
    {
      title: 'Multi-Store Catalog Sync',
      desc: 'Unify inventory across regional warehouses, retail outlets, and multi-vendor marketplaces.',
      icon: Database
    }
  ];

  const rightFeatures = [
    {
      title: 'Fast Loading Speeds',
      desc: 'Optimized response times under 100ms for seamless user engagement and SEO excellence.',
      icon: Zap
    },
    {
      title: 'High Security & Encryption',
      desc: 'PCI-DSS and OWASP compliant architecture to protect customer search data and transaction logs.',
      icon: ShieldCheck
    },
    {
      title: 'Cross-Platform Mobile App',
      desc: 'Built natively for iOS and Android using Flutter or React Native for uniform user experiences.',
      icon: Smartphone
    },
    {
      title: 'Conversion & Funnel Analytics',
      desc: 'Detailed admin dashboards analyzing search query trends, dropped carts, and top-searched tags.',
      icon: BarChart3
    },
    {
      title: 'Smart Barcode & QR Scanner',
      desc: 'In-store scanning feature allowing physical shoppers to look up detailed online specs and reviews.',
      icon: Tag
    },
    {
      title: 'Global Currency & Multilingual',
      desc: 'Support for global currencies, multi-language localization, and geo-targeted product availability.',
      icon: Globe
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Product Finder App Development Services | Firevy.co"
        description="Build custom Product Finder Apps & WooCommerce Product Search solutions. Enhance eCommerce customer buying experience with AI-powered search, guided quizzes & live inventory matching."
        keywords="Product Finder App Development, Product Search App, eCommerce Product Finder, WooCommerce Product Finder, Custom Product Recommender App, Smart Product Discovery"
        url="https://firevy.co/services/product-finder-app-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (EXACT 1:1 MATCH TO USER SCREENSHOT)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-14 sm:py-18 lg:py-22 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-950 tracking-tight leading-[1.15] font-sans">
                Product Finder App <br />
                Development
              </h1>

              <p className="text-sm sm:text-base lg:text-[15.5px] text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                Product finder apps enable eCommerce enterprises to provide clients with a hassle-free and interactive online buying experience. By linking companies to consumers in the market in real-time, our product finder app and product search woocommerce helps address the challenge of discovering a product or service
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-7 py-3 rounded-md bg-[#005D95] hover:bg-[#004A75] text-white font-[700] text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg font-sans group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Exact 1:1 Vector Illustration & Maloom Smartphone Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-lg flex items-center justify-center py-4">
                
                {/* Background Floating UI Window Mockup 1 (Top Left behind character) */}
                <div className="absolute top-4 left-2 sm:left-6 w-32 sm:w-40 h-20 bg-white/90 border border-slate-300/80 rounded-md shadow-xs p-2 z-0 hidden sm:block">
                  <div className="flex items-center space-x-1.5 mb-2">
                    <div className="w-4 h-4 bg-slate-800 rounded-xs" />
                    <div className="w-16 h-1.5 bg-slate-300 rounded" />
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-200 rounded" />
                    <div className="w-4/5 h-1 bg-slate-200 rounded" />
                    <div className="w-3/5 h-1 bg-slate-200 rounded" />
                  </div>
                </div>

                {/* Background Floating UI Window Mockup 2 (Top Right behind phone) */}
                <div className="absolute top-8 right-6 sm:right-12 w-28 sm:w-32 h-16 bg-white/90 border border-slate-300/80 rounded-md shadow-xs p-2 z-0 hidden sm:block">
                  <div className="flex items-center space-x-1 mb-1.5">
                    <div className="w-3 h-3 bg-slate-800 rounded-xs" />
                    <div className="w-12 h-1.5 bg-slate-300 rounded" />
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-slate-200 rounded" />
                    <div className="w-2/3 h-1 bg-slate-200 rounded" />
                  </div>
                </div>

                {/* Floating Yellow Gears (Top Right of Phone) */}
                <div className="absolute top-2 right-16 sm:right-24 z-10">
                  <svg className="w-12 sm:w-16 h-12 sm:h-16 text-[#F59E0B]" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="14" stroke="#F59E0B" strokeWidth="4" strokeDasharray="6 3" />
                    <circle cx="48" cy="18" r="8" stroke="#F59E0B" strokeWidth="3" strokeDasharray="4 2" />
                    <circle cx="16" cy="14" r="6" stroke="#F59E0B" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Left Vector Character (Developer/Man with shirt holding window and pointing to phone) */}
                <div className="relative z-20 flex flex-col items-center -mr-6 sm:-mr-8">
                  
                  {/* Floating Window in Developer's Left Hand */}
                  <div className="w-28 sm:w-32 h-16 bg-white border border-slate-300 rounded-sm shadow-md p-1.5 mb-1 z-30 transform -rotate-1">
                    <div className="flex items-center space-x-1 border-b border-slate-200 pb-1 mb-1">
                      <div className="w-3.5 h-3.5 bg-slate-800 rounded-xs" />
                      <div className="w-12 h-1 bg-slate-300 rounded" />
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-slate-200 rounded" />
                      <div className="w-3/4 h-1 bg-slate-200 rounded" />
                    </div>
                  </div>

                  {/* Character Figure */}
                  <svg className="w-24 sm:w-28 h-56 sm:h-64" viewBox="0 0 100 220" fill="none">
                    {/* Head */}
                    <circle cx="50" cy="28" r="14" fill="#FED7AA" />
                    {/* Hair */}
                    <path d="M36 24 C36 12 44 10 54 10 C64 10 64 20 64 24 Z" fill="#1E293B" />
                    {/* Ear */}
                    <circle cx="36" cy="28" r="3" fill="#FED7AA" />
                    {/* Torso Shirt (Dark Slate) */}
                    <path d="M30 46 L70 46 L66 120 L34 120 Z" fill="#334E58" />
                    {/* Left Arm holding window */}
                    <path d="M30 48 L14 75 L22 80 L36 56 Z" fill="#334E58" />
                    <circle cx="14" cy="78" r="4" fill="#FED7AA" />
                    {/* Right Arm pointing finger right toward phone */}
                    <path d="M70 48 L96 46 L96 52 L68 56 Z" fill="#334E58" />
                    <path d="M96 46 L104 46 L104 50 L96 50 Z" fill="#FED7AA" />
                    {/* Legs / Trousers */}
                    <path d="M34 120 L48 120 L46 200 L32 200 Z" fill="#1E293B" />
                    <path d="M52 120 L66 120 L64 200 L50 200 Z" fill="#1E293B" />
                    {/* Shoes */}
                    <path d="M28 200 L46 200 L44 206 L26 206 Z" fill="#0F172A" />
                    <path d="M48 200 L66 200 L64 206 L46 206 Z" fill="#0F172A" />
                  </svg>
                </div>

                {/* Maloom Smartphone Mockup (Center Right) */}
                <div className="relative z-30 w-[190px] sm:w-[215px] h-[340px] sm:h-[380px] bg-slate-950 p-2 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] border-4 border-slate-900">
                  
                  {/* Phone Screen Container */}
                  <div className="w-full h-full bg-white rounded-[24px] overflow-hidden relative flex flex-col justify-between text-center border border-slate-200">
                    
                    {/* Phone Notch */}
                    <div className="w-16 h-3.5 bg-slate-950 rounded-b-md mx-auto absolute top-0 inset-x-0 z-20" />

                    {/* Yellow Header Background Wave */}
                    <div className="w-full h-[58%] bg-gradient-to-b from-[#FFC107] via-[#F59E0B] to-[#F59E0B] relative flex flex-col items-center justify-center p-4">
                      
                      {/* Logo text: "maloom." */}
                      <div className="mt-4">
                        <span className="text-3xl sm:text-4xl font-[900] text-[#7A1A1A] font-serif tracking-tight drop-shadow-2xs">
                          maloom<span className="text-[#7A1A1A] font-sans">.</span>
                        </span>
                      </div>

                      {/* Smooth Bottom Wave Cutout */}
                      <div className="absolute bottom-0 inset-x-0">
                        <svg viewBox="0 0 200 40" className="w-full h-auto fill-white">
                          <path d="M0 20 Q 100 45 200 15 L200 40 L0 40 Z" />
                        </svg>
                      </div>
                    </div>

                    {/* White Bottom Half */}
                    <div className="h-[42%] bg-white p-3 flex flex-col justify-end items-center">
                      <span className="text-[7.5px] font-medium text-slate-400 font-sans tracking-wider mb-2">
                        Version 2.2
                      </span>
                      <div className="w-12 h-1 bg-slate-300 rounded-full" />
                    </div>

                  </div>
                </div>

                {/* Small Yellow Growth Plant Graphic (Bottom Left of Phone) */}
                <div className="absolute bottom-2 left-20 sm:left-28 z-10">
                  <svg className="w-8 h-16 text-[#F59E0B]" viewBox="0 0 30 60" fill="currentColor">
                    <path d="M12 60 Q 14 30 5 15 Q 12 25 14 60 Z" />
                    <path d="M14 60 Q 16 20 25 10 Q 18 20 16 60 Z" />
                  </svg>
                </div>

                {/* Ground Shadow Line */}
                <div className="absolute bottom-1 inset-x-4 h-0.5 bg-slate-300 rounded-full z-0" />

              </div>
            </div>

          </div>
        </Container>

        {/* Floating Fixed Call & WhatsApp Buttons on Right Screen Edge */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-2">
          <a
            href="tel:+919429709662"
            className="w-10 sm:w-11 h-10 sm:h-11 bg-[#005D95] hover:bg-[#004A75] text-white flex items-center justify-center rounded-l-md shadow-lg transition-transform hover:-translate-x-1"
            title="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/919429709662"
            target="_blank"
            rel="noreferrer"
            className="w-10 sm:w-11 h-10 sm:h-11 bg-[#005D95] hover:bg-[#004A75] text-white flex items-center justify-center rounded-l-md shadow-lg transition-transform hover:-translate-x-1"
            title="WhatsApp Chat"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* 2ND COMPONENT: INFINITE BRAND LOGO MARQUEE */}
      <BrandLogoMarquee />

      {/* 3RD COMPONENT: ABOUT PRODUCT FINDER APP */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-md flex items-center justify-center py-4">
                <div className="w-[200px] sm:w-[220px] bg-slate-900 p-2.5 rounded-[34px] shadow-xl border-4 border-slate-700">
                  <div className="bg-[#EFF6FA] rounded-[26px] p-4 text-center h-[290px] flex flex-col items-center justify-center border border-slate-200">
                    <div className="w-14 h-14 bg-[#005D95] rounded-2xl flex items-center justify-center text-white mb-3 shadow-md">
                      <Search className="w-7 h-7" />
                    </div>
                    <span className="text-base font-[900] text-slate-900 font-sans block mb-1">
                      Product Search
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      WooCommerce & Multi-Vendor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight font-sans">
                About Product Finder App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Online shoppers face choice fatigue when browsing through tens of thousands of catalog SKUs. Our custom product finder application combines real-time parametric filtering, intelligent recommendation quizzes, and seamless WooCommerce / Shopify catalog synchronization. We help brands convert hesitant visitors into satisfied buyers by serving exact product matches in under 3 clicks.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#005D95] hover:bg-[#004A75] text-white font-[700] text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg font-sans"
                >
                  Talk To An Expert Now
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4TH COMPONENT: CLUTCH TOP RATED COMPANY BANNER */}
      <ClutchTopRatedCompanyBanner />

      {/* 5TH COMPONENT: PRINCIPAL FEATURES WITH STICKY DUAL MOBILE MOCKUPS */}
      <section ref={principalSectionRef} className="py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-950 tracking-tight font-sans">
              Principal Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Left 6 Features */}
            <div className="lg:col-span-4 space-y-4 text-left">
              {leftFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                const cardId = `left-${idx}`;
                const isSelected = activeCard === cardId;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(cardId)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(cardId)}
                    className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#005D95] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#005D95] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-sky-100 text-[#005D95] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold leading-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p
                        className={`text-xs mt-1.5 leading-relaxed transition-colors ${
                          isSelected ? 'text-sky-100' : 'text-slate-600 group-hover:text-sky-100'
                        }`}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Mobile Mockup */}
            <div className="lg:col-span-4 sticky top-36 self-start py-1 flex items-center justify-center z-20">
              <motion.div
                style={{ y: phoneY }}
                className="relative flex items-center justify-center scale-95 sm:scale-100 transition-transform duration-300"
              >
                <div className="relative z-20 w-[195px] sm:w-[215px] bg-slate-950 p-2 rounded-[34px] shadow-2xl border-4 border-slate-800">
                  <div className="bg-white rounded-[26px] overflow-hidden text-left border border-slate-200 p-3 space-y-2">
                    <div className="bg-[#005D95] p-2.5 rounded-xl text-white text-center">
                      <span className="text-xs font-black block">Find Your Product</span>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-xs text-slate-800 font-bold space-y-1">
                      <div>🔍 Filter by Category</div>
                      <div>⚡ Real-Time Stock</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right 6 Features */}
            <div className="lg:col-span-4 space-y-4 text-left">
              {rightFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                const cardId = `right-${idx}`;
                const isSelected = activeCard === cardId;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCard(cardId)}
                    onMouseLeave={() => setActiveCard(null)}
                    onClick={() => setActiveCard(cardId)}
                    className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                      isSelected
                        ? 'bg-[#005D95] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#005D95] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-sky-100 text-[#005D95] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                      }`}
                    >
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-bold leading-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p
                        className={`text-xs mt-1.5 leading-relaxed transition-colors ${
                          isSelected ? 'text-sky-100' : 'text-slate-600 group-hover:text-sky-100'
                        }`}
                      >
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* 6TH COMPONENT: PREMIUM SERVICES GRID */}
      <PremiumServicesGrid />

      {/* 7TH COMPONENT: CASE STUDIES SLIDER */}
      <DigitalTransformationCaseStudies />

      {/* 8TH COMPONENT: VIDEO SLIDER */}
      <UnveilingInnovativeSolutionsVideoSlider />

      {/* 9TH COMPONENT: PROCESS WE FOLLOW */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="End-to-end product discovery architecture, custom algorithm development, API integration, and continuous UX optimization."
      />

      {/* 10TH COMPONENT: WHAT OUR CLIENTS SAY */}
      <WhatOurClientsSayClutchSlider />

      {/* 11TH COMPONENT: SUCCESS MATRIX */}
      <SuccessMatrix />

      {/* 12TH COMPONENT: OUR STORY THEIR WORDS */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* 13TH COMPONENT: FAQ */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We engineer high-performance eCommerce product finder mobile apps and WooCommerce search tools."
        faqs={faqs}
      />

      {/* 14TH COMPONENT: WE HAVE BEEN FEATURED IN GRID */}
      <WeHaveBeenFeaturedInGrid />

      {/* 15TH COMPONENT: WORK TOGETHER & NEWSLETTER */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default ProductFinderAppDevelopmentService;
