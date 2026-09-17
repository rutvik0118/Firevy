import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { DigitalTransformationCaseStudies } from '../home/DigitalTransformationCaseStudies';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
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
  MessageCircle,
  ClipboardCheck,
  CheckSquare
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
      q: "1. How does this product finder app work?",
      a: "Anyone can use the app to look for products simply by entering an address or zip code. It's simple to search product information such as photos, features, reviews, contact information, and services with the product finder application."
    },
    {
      q: "2. How much does it cost to develop a product finder application?",
      a: "The cost to develop a product finder application depends on various factors such as key features, complexity, platforms (iOS/Android), API integrations, and design requirements. Contact our experts for a detailed timeline and cost estimate tailored to your project."
    },
    {
      q: "3. How much time will you take to develop a product finder app?",
      a: "Typically, a standard product finder mobile app takes around 4 to 8 weeks for an MVP build, while an enterprise-level app with custom AI recommendations and catalog integrations may take 10 to 14 weeks."
    }
  ];

  const leftFeatures = [
    {
      title: 'Login',
      desc: 'The user will open the app and signup with the application with email and password and then use it',
      icon: ClipboardCheck
    },
    {
      title: 'Add Request',
      desc: 'Users can select categories, subcategories, markets, and additional product requests within the app',
      icon: Globe
    }
  ];

  const rightFeatures = [
    {
      title: 'Check Request',
      desc: "App owners can also check the customers' requests for a particular market",
      icon: CheckSquare
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
          1ST COMPONENT: HERO BANNER (EXACT 1:1 MATCH TO 2ND IMAGE)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-10 sm:py-12 lg:py-14 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                Product Finder App <br className="hidden sm:inline" />
                Development
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                Product finder apps enable eCommerce enterprises to provide clients with a hassle-free and interactive online buying experience. By linking companies to consumers in the market in real-time, our product finder app and product search woocommerce helps address the challenge of discovering a product or service.
              </p>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-md bg-[#006587] hover:bg-[#00526E] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md font-sans group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: High-Resolution Vector Illustration Artwork (1:1 Sapphire Reference) */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/product_finder_hero_illustration.png"
                  alt="Product Finder App Development Illustration"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2ND COMPONENT: INFINITE BRAND LOGO MARQUEE
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3RD COMPONENT: ABOUT PRODUCT FINDER APP SECTION (EXACT 1:1 MATCH TO 4TH IMAGE)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Vector Illustration Artwork (1:1 Sapphire Reference) */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/product_finder_about_illustration.png"
                  alt="About Product Finder App Illustration"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Product Finder App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Online shoppers face choice fatigue when browsing through tens of thousands of catalog SKUs. Our custom product finder application combines real-time parametric filtering, intelligent recommendation quizzes, and seamless WooCommerce / Shopify catalog synchronization. We help brands convert hesitant visitors into satisfied buyers by serving exact product matches in under 3 clicks.
              </p>

              <div className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#006587] hover:bg-[#00526E] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md font-sans"
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

      {/* 5TH COMPONENT: PRINCIPAL FEATURES WITH DUAL MOBILE MOCKUPS (1:1 MATCH TO 2ND IMAGE) */}
      <section ref={principalSectionRef} className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Principal Features of Product Finder App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative">
            
            {/* Left Features (Login & Add Request) */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
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
                    className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer group space-y-2.5 ${
                      isSelected
                        ? 'bg-[#006587] text-white shadow-xl scale-[1.01]'
                        : 'bg-transparent border border-transparent hover:bg-[#006587] hover:text-white hover:shadow-xl hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-white text-[#006587] border-white'
                            : 'bg-[#E0F2FE] text-[#006587] border-[#BAE6FD]/60 group-hover:bg-white group-hover:text-[#006587] group-hover:border-white'
                        }`}
                      >
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {feat.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm sm:text-[15px] leading-relaxed font-normal max-w-sm transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-600 group-hover:text-white'
                      }`}
                    >
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Mobile Mockup (1:1 Reference to Maloom Dual Phone Mockup) */}
            <div className="lg:col-span-4 self-center py-2 flex items-center justify-center z-20">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] h-[450px] sm:h-[480px] flex items-center justify-center">
                
                {/* Back Phone (Right Shifted Dashboard Mockup) */}
                <div className="absolute right-0 sm:right-2 top-8 w-[165px] sm:w-[185px] h-[370px] sm:h-[405px] bg-slate-950 p-[7px] rounded-[34px] shadow-xl border-2 border-slate-700 transform translate-x-3 sm:translate-x-5">
                  <div className="w-full h-full bg-slate-100 rounded-[27px] overflow-hidden flex flex-col border border-slate-300 relative text-slate-800">
                    {/* Notch */}
                    <div className="w-20 h-3.5 bg-slate-950 mx-auto rounded-b-xl mb-0.5 z-10 shrink-0"></div>
                    {/* Top Bar */}
                    <div className="px-3 py-1.5 flex items-center justify-end border-b border-slate-200 bg-white">
                      <div className="text-[12px] font-bold text-slate-700">☰</div>
                    </div>
                    {/* Grid items */}
                    <div className="p-2.5 grid grid-cols-2 gap-2 flex-1 bg-slate-50">
                      {/* Market */}
                      <div className="bg-white p-2 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-2xs">
                        <div className="w-7 h-7 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center text-xs mb-1">🏪</div>
                        <span className="text-[9px] font-bold text-slate-700">Market</span>
                      </div>
                      {/* Inbox */}
                      <div className="bg-white p-2 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-2xs relative">
                        <div className="absolute top-1 right-1 bg-slate-800 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</div>
                        <div className="w-7 h-7 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center text-xs mb-1">✉️</div>
                        <span className="text-[9px] font-bold text-slate-700">Inbox</span>
                      </div>
                      {/* Mode */}
                      <div className="bg-white p-2 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-2xs">
                        <div className="w-7 h-7 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center text-xs mb-1">🛍️</div>
                        <span className="text-[9px] font-bold text-slate-700">Mode</span>
                      </div>
                      {/* Wallet */}
                      <div className="bg-white p-2 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-2xs relative">
                        <div className="absolute top-1 right-1 bg-slate-800 text-white text-[7px] px-1 h-3.5 rounded-full flex items-center justify-center font-bold">656</div>
                        <div className="w-7 h-7 bg-amber-400 text-slate-900 rounded-md flex items-center justify-center text-[9px] mb-1 font-black">Cr</div>
                        <span className="text-[9px] font-bold text-slate-700">Wallet</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Phone (Maloom Yellow Splash Screen) */}
                <div className="absolute left-0 sm:left-2 top-0 w-[175px] sm:w-[195px] h-[390px] sm:h-[430px] bg-slate-950 p-[8px] rounded-[36px] shadow-2xl border-2 border-slate-800 z-10">
                  <div className="w-full h-full bg-[#FFCB05] rounded-[28px] overflow-hidden flex flex-col justify-between relative p-4 text-center">
                    {/* Notch */}
                    <div className="w-20 h-4 bg-slate-950 mx-auto rounded-b-xl z-20 absolute top-0 left-1/2 -translate-x-1/2"></div>
                    
                    {/* Yellow Background & Curved Accents */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFCB05] via-[#F59E0B] to-[#EAB308]"></div>
                    <div className="absolute bottom-12 left-0 right-0 h-44 bg-[#F59E0B] rounded-t-[100%] transform scale-x-150 opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#EAB308] rounded-t-[100%] transform scale-x-125"></div>

                    {/* Logo & Brand Content */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-8">
                      <div className="flex items-baseline space-x-0.5">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight drop-shadow-sm font-sans">
                          maloom
                        </span>
                        <div className="w-2 h-2 rounded-full bg-white mb-2 ml-0.5"></div>
                      </div>
                    </div>

                    {/* Footer Version */}
                    <div className="relative z-10 pb-1">
                      <span className="text-[9px] font-medium text-amber-950/70 tracking-wider">
                        Version 2.2
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Features (Check Request) */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
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
                    className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer group space-y-2.5 ${
                      isSelected
                        ? 'bg-[#006587] text-white shadow-xl scale-[1.01]'
                        : 'bg-transparent border border-transparent hover:bg-[#006587] hover:text-white hover:shadow-xl hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-white text-[#006587] border-white'
                            : 'bg-[#E0F2FE] text-[#006587] border-[#BAE6FD]/60 group-hover:bg-white group-hover:text-[#006587] group-hover:border-white'
                        }`}
                      >
                        <IconComp className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3
                        className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                        }`}
                      >
                        {feat.title}
                      </h3>
                    </div>
                    <p
                      className={`text-sm sm:text-[15px] leading-relaxed font-normal max-w-sm transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-600 group-hover:text-white'
                      }`}
                    >
                      {feat.desc}
                    </p>
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

      {/* 8TH COMPONENT: INNOVATIVE SOLUTION VIDEO (SAME AS HOME PAGE) */}
      <InnovativeSolutionVideo />

      {/* 9TH COMPONENT: WORK PROCESS GRID (SAME AS HOME PAGE) */}
      <WorkProcessGrid />

      {/* 10TH COMPONENT: CLIENT REVIEWS DARK SECTION (SAME AS HOME PAGE) */}
      <ClientReviewsDarkSection />

      {/* 11TH COMPONENT: SUCCESS MATRIX GRID (SAME AS HOME PAGE) */}
      <SuccessMatrixGrid />

      {/* 12TH COMPONENT: OUR STORY THEIR WORDS */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* 13TH COMPONENT: FAQ */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We provide tailored, robust, scalable and secure Android mobile app solutions that delight users and deliver engagement."
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
