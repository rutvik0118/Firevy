import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedCompanyBanner from '../common/ClutchTopRatedCompanyBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import { DigitalTransformationCaseStudies } from '../home/DigitalTransformationCaseStudies';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import OurStoryTheirWordsVideoTestimonialsSlider from '../home/OurStoryTheirWordsVideoTestimonialsSlider';
import SapphireFaqWithStatBadges from '../home/SapphireFaqWithStatBadges';
import WeHaveBeenFeaturedInGrid from '../home/WeHaveBeenFeaturedInGrid';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sliders,
  Smartphone,
  Sparkles,
  Globe,
  ClipboardCheck,
  CheckSquare,
  Award,
  Users,
  Scissors,
  Calendar,
  Clock,
  CreditCard,
  UserCheck,
  Truck,
  ShoppingBag,
  HeartPulse,
  Utensils,
  MapPin
} from 'lucide-react';

export const OnDemandAppDevelopmentService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const principalSectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start center', 'end center']
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  const faqs = [
    {
      q: "1. What is an on-demand app and how does it benefit businesses?",
      a: "An on-demand application connects users directly with service providers or delivery partners in real time, streamlining bookings, instant dispatching, digital payments, and live GPS tracking."
    },
    {
      q: "2. Which industries can benefit from on-demand app development?",
      a: "On-demand apps span food & grocery delivery, ride-hailing & taxi dispatch, home healthcare, courier & logistics, salon & beauty, and handyman repair services."
    },
    {
      q: "3. What key panels are included in an on-demand solution?",
      a: "Our complete solution includes a Customer App (iOS & Android), Provider / Driver App, Merchant Dashboard, and a centralized Super Admin Management Panel."
    },
    {
      q: "4. Does the application support real-time GPS tracking and push notifications?",
      a: "Yes, we integrate Google Maps API, Mapbox, and Firebase Push Messaging for live turn-by-turn tracking, instant status alerts, and automated SMS reminders."
    },
    {
      q: "5. How long does it take to build a custom on-demand smartphone app?",
      a: "A turnkey MVP on-demand application takes 6 to 8 weeks, while an enterprise platform with custom microservices takes 10 to 14 weeks."
    }
  ];

  const onDemandFeaturesList = {
    left: [
      {
        title: 'Instant Service Booking',
        desc: 'Enable customers to request on-demand services or order items with real-time availability and slot confirmation.',
        icon: Smartphone
      },
      {
        title: 'Real-Time GPS Tracking',
        desc: 'Provide live turn-by-turn map tracking for delivery drivers, service technicians, or ride drivers on interactive maps.',
        icon: MapPin
      },
      {
        title: 'Multi-Payment Gateway',
        desc: 'Support credit cards, Apple Pay, Google Pay, UPI, and digital wallet transactions backed by SSL encryption.',
        icon: CreditCard
      },
      {
        title: 'Automated Push Alerts',
        desc: 'Keep users updated with instant order status changes, driver arrival alerts, and promotional discount notifications.',
        icon: Zap
      },
      {
        title: 'Ratings & Feedback System',
        desc: 'Allow users to rate service providers, submit detailed feedback, and review past service history records.',
        icon: Award
      }
    ],
    right: [
      {
        title: 'Provider & Driver App',
        desc: 'Equip service providers with shift toggles, trip acceptance screens, earnings summaries, and map navigation.',
        icon: Users
      },
      {
        title: 'Centralized Admin Panel',
        desc: 'Manage users, service categories, commission rates, refund requests, and real-time fleet dispatching.',
        icon: Sliders
      },
      {
        title: 'Route Optimization AI',
        desc: 'Optimize delivery routes with intelligent traffic algorithms to reduce travel time and operational costs.',
        icon: Sparkles
      },
      {
        title: 'In-App Chat & Calling',
        desc: 'Secure masked phone calling and instant messaging between clients and service delivery partners.',
        icon: Globe
      },
      {
        title: 'Analytics & Revenue CRM',
        desc: 'Track daily transactions, peak booking hours, active service areas, and customer retention metrics.',
        icon: CheckSquare
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="On Demand App Development Company | Custom On-Demand Solutions | Firevy.co"
        description="We are a global on-demand app development company offering custom mobile app solutions for food delivery, taxi booking, courier, healthcare, and home services."
        keywords="On Demand App Development, On Demand App Development Company, Custom Mobile App Development, On Demand Delivery App, Taxi Booking App, Food Delivery App"
        url="https://firevy.co/services/on-demand-app-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (1:1 EXACT MATCH TO USER SCREENSHOT)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-10 sm:py-12 lg:py-16 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & 4 Key Stat Metrics */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                On Demand App Development Company
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                We're a worldwide on-demand app development company that offers endless mobility options. Avail our custom on-demand app development services if you want to brace your clients with an on-demand smartphone app.
              </p>

              {/* 4 Stat Metrics Row (1:1 Match to Screenshot) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 border-t border-slate-200/80 max-w-xl">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#006587] font-sans tracking-tight">
                    80+
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-tight font-sans mt-0.5">
                    Mobile App Developers
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#006587] font-sans tracking-tight">
                    20+
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-tight font-sans mt-0.5">
                    Fortunes 500 Companies
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#006587] font-sans tracking-tight">
                    800+
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-tight font-sans mt-0.5">
                    Project Completed in Mobile Technology
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#006587] font-sans tracking-tight">
                    320+
                  </h3>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-tight font-sans mt-0.5">
                    5-Star Clutch Reviews
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-md bg-[#006587] hover:bg-[#00526E] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md font-sans group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Clean, High-Resolution Transparent PNG Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/ondemand_app_hero.png"
                  alt="On Demand App Development Company Illustration"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300 drop-shadow-sm"
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
          3RD COMPONENT: ABOUT ON-DEMAND APP DEVELOPMENT
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/ondemand_app_hero.png"
                  alt="About On Demand App Development"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & CTA Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Custom On-Demand App Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Our <span className="text-[#006587] font-semibold">on-demand app development services</span> empower businesses to deliver goods, services, and digital experiences at the touch of a button. From food delivery and taxi dispatching to home logistics and beauty services, we build scalable platforms with real-time tracking, automated dispatching, and secure payment processing.
              </p>

              <div className="pt-2">
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

      {/* 5TH COMPONENT: FEATURES OF ON-DEMAND APP DEVELOPMENT */}
      <section ref={principalSectionRef} className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Features of On-Demand App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative">
            
            {/* Left 5 Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {onDemandFeaturesList.left.map((feat, idx) => {
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
                      className={`text-sm sm:text-[15px] leading-relaxed font-normal transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-600 group-hover:text-white'
                      }`}
                    >
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Center Double Mobile Phones Graphic with Parallax Scroll Animation */}
            <div className="lg:col-span-4 self-start lg:sticky lg:top-28 py-2 flex items-center justify-center z-20 overflow-visible">
              <motion.div
                style={{ y: phoneY }}
                className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] flex items-center justify-center overflow-visible"
              >
                <img
                  src="/images/barber_features_phones.png"
                  alt="Features of On Demand App Development Mobile Mockups"
                  className="w-full h-auto max-h-[540px] object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-xl"
                />
              </motion.div>
            </div>

            {/* Right 5 Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {onDemandFeaturesList.right.map((feat, idx) => {
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
                      className={`text-sm sm:text-[15px] leading-relaxed font-normal transition-colors ${
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

      {/* 7TH COMPONENT: DIGITAL TRANSFORMATION CASE STUDIES */}
      <DigitalTransformationCaseStudies />

      {/* 8TH COMPONENT: WORK PROCESS GRID */}
      <WorkProcessGrid />

      {/* 9TH COMPONENT: CLIENT REVIEWS */}
      <ClientReviewsDarkSection />

      {/* 10TH COMPONENT: SUCCESS MATRIX GRID */}
      <SuccessMatrixGrid />

      {/* 11TH COMPONENT: VIDEO TESTIMONIALS */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* 12TH COMPONENT: SAPPHIRE FAQ WITH STAT BADGES */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We provide tailored, robust, scalable and secure Android & iOS on-demand app solutions that delight users."
        faqs={faqs}
      />

      {/* 13TH COMPONENT: FEATURED IN GRID */}
      <WeHaveBeenFeaturedInGrid />

      {/* 14TH COMPONENT: WORK TOGETHER NEWSLETTER */}
      <WorkTogetherNewsletterSection />

    </div>
  );
};

export default OnDemandAppDevelopmentService;
