import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import EcommercePrincipalFeatures from './EcommercePrincipalFeatures';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import WorkProcessGrid from '../home/WorkProcessGrid';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import OurStoryTheirWordsVideoTestimonialsSlider from '../home/OurStoryTheirWordsVideoTestimonialsSlider';
import SapphireFaqWithStatBadges from '../home/SapphireFaqWithStatBadges';
import WeHaveBeenFeaturedInGrid from '../home/WeHaveBeenFeaturedInGrid';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
import { ArrowRight, ShoppingBag, CreditCard, Tag, Search, MapPin, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';

export const EcommerceMobileAppDevelopmentService = () => {
  const ecommerceFaqs = [
    {
      q: "1. How might an e-commerce application assist me in growing my business?",
      a: "Are you wondering why your firm needs an e-commerce application? Unsurprisingly, e-commerce has grown in popularity due to the widespread usage of mobile devices. As a result, migrating your e-commerce site to an application may help you reach a broader audience and provide you a competitive advantage in today's digitally driven world."
    },
    {
      q: "2. How much does it cost to develop a mobile e-commerce application?",
      a: "The cost of developing an e-commerce mobile application depends on features, complexity, platform (iOS/Android), integrations, and backend requirements. Contact our experts for an accurate quote tailored to your budget."
    },
    {
      q: "3. How long does an ecommerce application's development take?",
      a: "Typically, an MVP e-commerce mobile app takes 8 to 12 weeks to build, while a fully featured multi-vendor marketplace or enterprise platform takes 4 to 6 months."
    },
    {
      q: "4. Why should I hire an eCommerce mobile app development company?",
      a: "Hiring an experienced eCommerce mobile app development company ensures professional UI/UX design, high performance, enterprise security, smooth payment integrations, and dedicated post-launch support."
    },
    {
      q: "5. Can an eCommerce app developer customize my online store app?",
      a: "Yes, our expert developers provide 100% custom mobile app solutions tailored to your brand, product catalog, payment options, and unique business workflows."
    },
    {
      q: "6. What sets Sapphire Software Solutions apart in eCommerce mobile app development?",
      a: "We bring 23+ years of experience, a team of 200+ IT professionals, 100% NDA protection, agile development process, and a proven track record of 1500+ successful projects."
    },
    {
      q: "7. How does Sapphire Software Solutions assure the quality, security, and scalability of the e-commerce mobile apps it develops?",
      a: "We enforce rigorous QA testing, bank-grade SSL encryption, secure API integrations, HIPAA/GDPR compliance, and cloud scalable infrastructure."
    },
    {
      q: "8. Should I go for a Native (iOS/Android) or Cross-Platform e-commerce mobile app, and how does Sapphire counsel about this?",
      a: "We analyze your target market, budget, and performance requirements. Native apps offer peak performance, while cross-platform (Flutter/React Native) speeds up time-to-market at a lower cost."
    },
    {
      q: "9. What essential features can Sapphire build into my custom e-commerce mobile application that creates a positive experience while increasing revenue?",
      a: "Essential features include real-time product search, instant checkout, personalized recommendations, loyalty rewards, push notifications, and multi-currency payment options."
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="E-Commerce Mobile App Development Company | Firevy.co"
        description="We offer a comprehensive range of best ecommerce app development company services to businesses of all types and sizes. Contact us now for mobile eCommerce app development services under budget."
        keywords="E-Commerce Mobile App Development Company, Ecommerce App Developers, Shopping App Development, Retail App Solutions, Online Store App"
        url="https://firevy.co/services/ecommerce-mobile-app-development"
      />

      {/* =========================================================================
          1ST COMPONENT: E-COMMERCE MOBILE APP HERO BANNER
          ========================================================================= */}
      <section className="bg-[#EBF2F7] py-10 sm:py-12 lg:py-14 border-b border-slate-200/80 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                E-Commerce Mobile App <br className="hidden sm:inline" />
                Development Company
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                We offer a comprehensive range of best ecommerce app development company services to businesses of all types and sizes. Contact us now for mobile eCommerce app development services under budget.
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

            {/* Right Column: Exact 1:1 High Quality E-Commerce Vector Illustration Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-lg flex items-center justify-center py-1">
                <img
                  src="/images/ecommerce_shopping_illustration_v3_clean.png"
                  alt="E-Commerce Mobile App Development Illustration"
                  className="w-full h-auto max-h-[380px] lg:max-h-[400px] object-contain hover:scale-[1.01] transition-transform duration-300"
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
          3RD COMPONENT: ABOUT CLOWN POLSKA SECTION (EXACT 1:1 MATCH TO 2ND IMAGE)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Vector Illustration matching 2nd Image 1:1 */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/ecommerce_shopping_illustration_clean.png"
                  alt="About Clown Polska E-Commerce Shopping App Illustration"
                  className="w-full h-auto max-h-[460px] lg:max-h-[500px] object-contain hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Long Description & Talk To An Expert Now Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Clown Polska
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans">
                Clown Polska is a toy warehouse application that enables customers to buy affordable toys at wholesale rates. Customers can place orders, make payments, and get product details within the app with ease of a few clicks. We offer Affordable Ecommerce Mobile App Development Services to help you increase sales and provide hassle-free shopping experiences. Hire Mobile App Developers for Ecommerce that has a team of Expert Ecommerce App Developers for Android and iOS who create best-in-class e-commerce Android app development services that complement your online business and provide a world-class user experience for your consumers. Our Top Rated Ecommerce Mobile App Development Company has built an amazing track record over the years by delivering the finest Ecommerce App Development Company for startups solutions for our renowned clients. We use our full range of talents and abilities to ensure the apps' high quality and efficacy.
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

      {/* =========================================================================
          4TH COMPONENT: CLUTCH TOP RATED COMPANY BANNER (EXACT 1:1 MATCH TO 3RD IMAGE)
          ========================================================================= */}
      <ClutchTopRatedCompanyBanner />

      {/* =========================================================================
          5TH COMPONENT: PRINCIPAL FEATURES OF MOBILE E-COMMERCE APP DEVELOPMENT
          (EXACT 1:1 MATCH TO SCREENSHOTS 1 & 2 WITH PAGE SCROLL PHONE EFFECT)
          ========================================================================= */}
      <EcommercePrincipalFeatures />

      {/* =========================================================================
          6TH COMPONENT: OUR PREMIUM SERVICES (MATCHING COVID TRACKER APP PAGE)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7TH COMPONENT: SUCCESS STORIES (EXACT 1:1 MATCH TO SCREENSHOT)
          ========================================================================= */}
      <SuccessStoriesSection category="ecommerce" />

      {/* =========================================================================
          8TH COMPONENT: DIGITAL TRANSFORMATION CASE STUDIES SLIDER
          ========================================================================= */}
      <DigitalTransformationCaseStudies />

      {/* =========================================================================
          9TH COMPONENT: UNVEILING OUR INNOVATIVE SOLUTIONS VIDEO SLIDER
          ========================================================================= */}
      <InnovativeSolutionVideo />

      {/* =========================================================================
          10TH COMPONENT: PROCESS WE FOLLOW (WORK PROCESS GRID FROM HOME)
          ========================================================================= */}
      <WorkProcessGrid />

      {/* =========================================================================
          11TH COMPONENT: WHAT OUR CLIENTS SAY - CLUTCH CLIENT REVIEWS SLIDER
          ========================================================================= */}
      <ClientReviewsDarkSection />

      {/* =========================================================================
          12TH COMPONENT: SAPPHIRE SUCCESS MATRIX (HOME PAGE GRID)
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          13TH COMPONENT: OUR STORY, THEIR WORDS VIDEO TESTIMONIALS SLIDER
          ========================================================================= */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* =========================================================================
          14TH COMPONENT: SAPPHIRE FAQ WITH 8 STAT BADGES
          ========================================================================= */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We provide tailored, robust, scalable and secure mobile app solutions that delight users and deliver engagement."
        faqs={ecommerceFaqs}
      />

      {/* =========================================================================
          15TH COMPONENT: WE HAVE BEEN FEATURED IN GRID
          ========================================================================= */}
      <WeHaveBeenFeaturedInGrid />

      {/* =========================================================================
          16TH COMPONENT: WORK TOGETHER & NEWSLETTER SUBSCRIPTION SECTION
          ========================================================================= */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default EcommerceMobileAppDevelopmentService;
