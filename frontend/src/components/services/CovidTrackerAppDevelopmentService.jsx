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
  MapPin,
  Activity,
  Bell,
  User,
  Hospital,
  Radio,
  Users,
  Newspaper,
  ClipboardCheck,
  Sliders,
  Shield,
  Cpu,
  Lock,
  FileText,
  CheckSquare
} from 'lucide-react';

export const CovidTrackerAppDevelopmentService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const principalSectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start end', 'end start']
  });

  // phoneY starts at 0 (never negative) so initial position is exactly level with Notify Users & Privacy
  const phoneY = useTransform(scrollYProgress, [0.2, 0.85], [0, 110]);

  const sapphireFaqs = [
    {
      q: "1. What's the point of spending money on an app to track the spread of the Coronavirus?",
      a: "Said, it is a need! With healthcare sectors globally in desperate need of assistance, a Coronavirus monitoring software may assist them while also providing a feasible business opportunity for you."
    },
    {
      q: "2. Can you tell me how much it costs to develop the app?",
      a: "The cost depends on your required features, integrations, and fleet size. We offer flexible models including MVP fixed-price contracts and dedicated developer monthly buckets."
    },
    {
      q: "3. How long will it take to construct an application to monitor COVID-19?",
      a: "We typically deliver an MVP version within 8 to 12 weeks, while a full enterprise multi-city dispatch solution with iOS, Android, and Super Admin portal takes 4 to 6 months."
    },
    {
      q: "4. Is my data secure?",
      a: "You receive 100% source code ownership backed by a signed NDA. All applications feature bank-grade SSL encryption and HIPAA/GDPR compliance."
    }
  ];

  const leftFeatures = [
    {
      title: 'Notify Users',
      desc: 'When users come into contact with a COVID-19 positive person, our app uses Bluetooth to notify them.',
      icon: Users
    },
    {
      title: 'Alerts For Notifications',
      desc: 'Users receive real-time notifications of if the person who has recently visited their store, tests positive for the virus.',
      icon: Bell
    },
    {
      title: 'Look For Crowded Areas',
      desc: 'Users can use the app to find out about crowded venues nearby and avoid going there.',
      icon: MapPin
    },
    {
      title: 'Latest News',
      desc: 'The most recent and essential news updates about the coronavirus epidemic are delivered to users.',
      icon: Newspaper
    },
    {
      title: 'Instructions',
      desc: 'Users are given formal directions for staying healthy that have been approved by health specialists.',
      icon: ClipboardCheck
    },
    {
      title: 'Customizable',
      desc: 'Our goal is to make sure that each of our goods may be customized to match the specific requirements of each of our clients.',
      icon: Sliders
    }
  ];

  const rightFeatures = [
    {
      title: 'Privacy',
      desc: 'All of the information we collect complies with the most stringent health code regulations, safeguarding your privacy.',
      icon: Shield
    },
    {
      title: 'Compliant With HIPAA',
      desc: 'Our healthcare applications comply with the strictest HIPAA rules for your peace of mind.',
      icon: ShieldCheck
    },
    {
      title: 'Technology On The Cutting-Edge',
      desc: 'With our years of knowledge in the sector, we can provide you with the most cutting-edge technology, ensuring that you are set for years to come.',
      icon: Cpu
    },
    {
      title: 'Data Security',
      desc: "We make sure that important aspects of privacy aren't misused or ignored in the name of public health.",
      icon: Lock
    },
    {
      title: 'Update Test Results',
      desc: "If the user's COVID-19 test results are positive, they will be entered into the app and registered in the system.",
      icon: FileText
    },
    {
      title: 'Self-Assessment',
      desc: 'A self-assessment exam is supplied to users, which categorizes their infection risk and collects data for medical purposes.',
      icon: CheckSquare
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Covid Tracker App Development Services | Firevy.co"
        description="Cutting-edge Covid tracker software & monitoring app solutions. Real-time infection tracking, positive case alerts, hospital bed locator & health pass features."
        keywords="Covid Tracker App Development, Covid Monitoring App, Contact Tracing App, Infection Tracking Software, Health Pass App, Patient Monitoring App"
        url="https://firevy.co/services/covid-tracker-app-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (EXACT 1:1 MATCH TO SCREENSHOT)
          ========================================================================= */}
      <section className="bg-[#EEF7FC] py-16 sm:py-20 lg:py-24 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-950 tracking-tight leading-[1.15] font-sans">
                Covid Tracker App <br className="hidden sm:block" />
                Development
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                The Covid tracker software that we provide is cutting-edge, and it comes with several features that assist consumers in remaining one step ahead of the infection. With the help of our Covid monitoring app, businesses may stay informed about the most recent customers who have tested positive for the virus.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-lg bg-[#006587] hover:bg-[#00526E] text-white font-[700] text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg font-sans group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Exact 1:1 Vector Illustration & Smartphone Mockup */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-lg flex items-center justify-center py-6">
                
                {/* Background Vector Shapes (Clouds & Silhouettes) */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
                  <div className="absolute top-2 left-6 w-20 h-8 bg-sky-200 rounded-full blur-[1px]" />
                  <div className="absolute top-4 right-8 w-24 h-9 bg-sky-200 rounded-full blur-[1px]" />
                  <div className="absolute bottom-4 inset-x-0 h-28 bg-gradient-to-t from-sky-200/50 to-transparent rounded-b-3xl" />
                </div>

                {/* Street Light Lamp Left */}
                <div className="absolute bottom-6 left-4 flex flex-col items-center z-10 hidden sm:flex">
                  <div className="w-5 h-5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] border border-amber-300" />
                  <div className="w-1.5 h-36 bg-slate-700 rounded-t-sm" />
                  <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                </div>

                {/* Street Light Lamp Right */}
                <div className="absolute bottom-6 right-4 flex flex-col items-center z-10 hidden sm:flex">
                  <div className="w-5 h-5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] border border-amber-300" />
                  <div className="w-1.5 h-36 bg-slate-700 rounded-t-sm" />
                  <div className="w-4 h-2 bg-slate-800 rounded-sm" />
                </div>

                {/* Floating Virus Cells */}
                <div className="absolute top-10 left-12 w-9 h-9 text-cyan-600 animate-pulse z-10 opacity-70">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a1 1 0 0 1 1 1v1.07a8 8 0 0 1 5.93 5.93H21a1 1 0 1 1 0 2h-1.07a8 8 0 0 1-5.93 5.93V21a1 1 0 1 1-2 0v-1.07a8 8 0 0 1-5.93-5.93H3a1 1 0 1 1 0-2h1.07a8 8 0 0 1 5.93-5.93V3a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <div className="absolute bottom-20 right-16 w-8 h-8 text-sky-700 animate-pulse z-10 opacity-70">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a1 1 0 0 1 1 1v1.07a8 8 0 0 1 5.93 5.93H21a1 1 0 1 1 0 2h-1.07a8 8 0 0 1-5.93 5.93V21a1 1 0 1 1-2 0v-1.07a8 8 0 0 1-5.93-5.93H3a1 1 0 1 1 0-2h1.07a8 8 0 0 1 5.93-5.93V3a1 1 0 0 1 1-1z" />
                  </svg>
                </div>

                {/* Left Character (Man gesturing towards phone) */}
                <div className="absolute bottom-6 left-12 z-20 hidden md:block">
                  <svg className="w-20 h-44" viewBox="0 0 80 180" fill="none">
                    <circle cx="40" cy="25" r="14" fill="#FDBA74" />
                    <path d="M26 22 C26 12 34 10 44 10 C54 10 54 18 54 22 Z" fill="#1E293B" />
                    <path d="M22 45 L58 45 L54 110 L26 110 Z" fill="#1E40AF" />
                    <path d="M54 50 L75 68 L70 74 L52 58 Z" fill="#FDBA74" />
                    <path d="M26 110 L38 110 L40 175 L28 175 Z" fill="#1E3A8A" />
                    <path d="M42 110 L54 110 L52 175 L40 175 Z" fill="#1E3A8A" />
                  </svg>
                </div>

                {/* Smartphone Mockup Container */}
                <div className="relative z-30 w-[240px] sm:w-[260px] bg-slate-950 p-2.5 rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.22)] border-4 border-slate-800">
                  <div className="bg-white rounded-[28px] overflow-hidden text-left border border-slate-200">
                    <div className="bg-[#008BB4] p-4 text-white relative">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-[9px] text-sky-100 block opacity-90 font-medium">Welcome,</span>
                          <span className="text-xs font-black tracking-tight block">David Smith</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-xs font-bold">
                          DS
                        </div>
                      </div>
                      <span className="text-[8px] text-sky-100 block">Here is your latest update</span>
                    </div>

                    <div className="p-3 bg-slate-50 space-y-2.5">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2 rounded-lg border border-slate-200/80 text-center shadow-2xs">
                          <div className="w-6 h-6 rounded bg-sky-100 text-[#008BB4] flex items-center justify-center mx-auto mb-1">
                            <Radio className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[8.5px] font-bold text-slate-800 block">User Network</span>
                        </div>

                        <div className="bg-white p-2 rounded-lg border border-slate-200/80 text-center shadow-2xs">
                          <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-1">
                            <Activity className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[8.5px] font-bold text-slate-800 block">Live Stats</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-700 block">Latest update</span>
                        <div className="bg-white p-2 rounded-lg border border-slate-200/80 flex items-center justify-between shadow-2xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 rounded-full bg-sky-50 text-[#008BB4] flex items-center justify-center">
                              <MapPin className="w-3 h-3" />
                            </div>
                            <div>
                              <span className="text-[8.5px] font-bold text-slate-800 block leading-tight">Track your status</span>
                              <span className="text-[7px] text-slate-400 block">Report recent symptoms & test info</span>
                            </div>
                          </div>
                          <ChevronRight className="w-3 h-3 text-slate-400" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-bold text-slate-700 block">Preferred Hospitals</span>
                        <div className="bg-white p-2 rounded-lg border border-slate-200/80 flex items-center space-x-2 shadow-2xs">
                          <div className="w-8 h-8 rounded bg-slate-100 text-teal-600 flex items-center justify-center shrink-0">
                            <Hospital className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[8.5px] font-bold text-slate-900 block leading-tight">California Medical Center</span>
                            <span className="text-[7px] text-slate-400 block">24/7 ICU & Testing Unit Available</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border-t border-slate-200 p-2 flex items-center justify-around text-slate-400 text-[8px]">
                      <div className="flex flex-col items-center text-[#008BB4]">
                        <Activity className="w-3.5 h-3.5" />
                        <span className="text-[7px] font-bold">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Radio className="w-3.5 h-3.5" />
                        <span className="text-[7px]">Testing</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <User className="w-3.5 h-3.5" />
                        <span className="text-[7px]">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Character 1 */}
                <div className="absolute bottom-6 right-16 z-20 hidden md:block">
                  <svg className="w-16 h-40" viewBox="0 0 70 160" fill="none">
                    <circle cx="35" cy="22" r="12" fill="#FDBA74" />
                    <rect x="25" y="24" width="20" height="10" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
                    <path d="M23 18 C23 8 30 6 45 8 C47 16 45 22 45 25 Z" fill="#0284C7" />
                    <path d="M20 40 L50 40 L46 95 L24 95 Z" fill="#0284C7" />
                    <path d="M24 95 L34 95 L34 155 L24 155 Z" fill="#1E3A8A" />
                    <path d="M36 95 L46 95 L46 155 L36 155 Z" fill="#1E3A8A" />
                  </svg>
                </div>

                {/* Right Character 2 */}
                <div className="absolute bottom-6 right-4 z-20 hidden lg:block">
                  <svg className="w-16 h-40" viewBox="0 0 70 160" fill="none">
                    <circle cx="35" cy="22" r="12" fill="#FDBA74" />
                    <rect x="25" y="24" width="20" height="10" rx="3" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
                    <path d="M20 40 L50 40 L46 95 L24 95 Z" fill="#1E293B" />
                    <path d="M24 95 L34 95 L34 155 L24 155 Z" fill="#0F766E" />
                    <path d="M36 95 L46 95 L46 155 L36 155 Z" fill="#0F766E" />
                  </svg>
                </div>

                <div className="absolute bottom-4 inset-x-2 h-1 bg-slate-300 rounded-full z-0" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2ND COMPONENT: INFINITE BRAND LOGO MARQUEE */}
      <BrandLogoMarquee />

      {/* 3RD COMPONENT: ABOUT COVID TRACKER APP SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Vector Illustration & Smartphone Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-md flex items-center justify-center py-4">
                
                <div className="absolute top-2 left-4 w-10 h-10 text-cyan-400 animate-pulse z-0 opacity-80">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a1 1 0 0 1 1 1v1.07a8 8 0 0 1 5.93 5.93H21a1 1 0 1 1 0 2h-1.07a8 8 0 0 1-5.93 5.93V21a1 1 0 1 1-2 0v-1.07a8 8 0 0 1-5.93-5.93H3a1 1 0 1 1 0-2h1.07a8 8 0 0 1 5.93-5.93V3a1 1 0 0 1 1-1z" />
                  </svg>
                </div>
                <div className="absolute top-1 right-8 w-12 h-12 text-sky-400 animate-pulse z-0 opacity-80">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a1 1 0 0 1 1 1v1.07a8 8 0 0 1 5.93 5.93H21a1 1 0 1 1 0 2h-1.07a8 8 0 0 1-5.93 5.93V21a1 1 0 1 1-2 0v-1.07a8 8 0 0 1-5.93-5.93H3a1 1 0 1 1 0-2h1.07a8 8 0 0 1 5.93-5.93V3a1 1 0 0 1 1-1z" />
                  </svg>
                </div>

                <div className="absolute bottom-4 left-6 z-10 hidden sm:block">
                  <svg className="w-20 h-48" viewBox="0 0 80 190" fill="none">
                    <circle cx="40" cy="24" r="13" fill="#FDBA74" />
                    <rect x="30" y="24" width="18" height="10" rx="3" fill="#67E8F9" />
                    <path d="M26 20 C26 10 34 8 46 8 C54 10 54 18 54 20 Z" fill="#1E293B" />
                    <path d="M22 45 L58 45 L54 115 L26 115 Z" fill="#00A8E8" />
                    <path d="M24 50 L56 65 L46 75 L22 60 Z" fill="#0096D6" />
                    <path d="M26 115 L38 115 L40 180 L28 180 Z" fill="#1E293B" />
                    <path d="M42 115 L54 115 L52 180 L40 180 Z" fill="#1E293B" />
                  </svg>
                </div>

                <div className="relative z-20 w-[190px] sm:w-[210px] bg-slate-900 p-2.5 rounded-[34px] shadow-xl border-4 border-slate-700">
                  <div className="bg-white rounded-[26px] p-4 text-center h-[280px] sm:h-[310px] flex flex-col items-center justify-center border border-slate-100 relative">
                    <div className="w-16 h-18 text-[#008BB4] flex items-center justify-center mb-3">
                      <svg viewBox="0 0 100 120" className="w-full h-full fill-[#008BB4]">
                        <path d="M50 0 L90 20 V60 C90 90 50 115 50 120 C50 115 10 90 10 60 V20 Z" />
                        <circle cx="50" cy="55" r="14" fill="#FFFFFF" />
                        <circle cx="50" cy="55" r="7" fill="#008BB4" />
                        <line x1="50" y1="36" x2="50" y2="74" stroke="#FFFFFF" strokeWidth="3" />
                        <line x1="31" y1="55" x2="69" y2="55" stroke="#FFFFFF" strokeWidth="3" />
                      </svg>
                    </div>

                    <span className="text-xs sm:text-sm font-black text-[#008BB4] tracking-tight font-serif block">
                      Covid Tracker
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-6 z-10 hidden sm:block">
                  <svg className="w-20 h-48" viewBox="0 0 80 190" fill="none">
                    <circle cx="40" cy="24" r="13" fill="#FDBA74" />
                    <rect x="30" y="24" width="18" height="10" rx="3" fill="#1E293B" />
                    <path d="M24 16 C24 6 34 4 52 6 C56 16 54 35 52 45 Z" fill="#1E293B" />
                    <path d="M22 45 L58 45 L52 110 L28 110 Z" fill="#1E293B" />
                    <path d="M22 50 L12 35 L18 30 L30 46 Z" fill="#FDBA74" />
                    <path d="M28 110 L38 110 L40 180 L28 180 Z" fill="#7DD3FC" />
                    <path d="M42 110 L52 110 L50 180 L38 180 Z" fill="#7DD3FC" />
                  </svg>
                </div>

                <div className="absolute bottom-3 inset-x-0 h-1 bg-slate-700 rounded-full z-0" />
              </div>
            </div>

            {/* Right Column: Title, Content & Button */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight font-sans">
                About Covid Tracker App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Contact tracing is locating each ill individual and determining who they have recently interacted with. This way, we may successfully segregate sick individuals from the rest of the community for the duration of the infection. Our Covid tracker application is based on innovation and has features that help users keep one step ahead of the virus. We've repurposed our knowledge in Covid tracking app development to enable this service and benefit the worldwide community while also allowing entrepreneurs to profit from a good business opportunity.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#008BB4] hover:bg-[#007498] text-white font-[700] text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg font-sans"
                >
                  Talk To An Expert Now
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4TH COMPONENT (1ST IMAGE IN PROMPT): WORLD WIDE TOP RATED MOBILE APP DEVELOPMENT COMPANY ON CLUTCH BANNER */}
      <ClutchTopRatedCompanyBanner />

      {/* 5TH COMPONENT (2ND IMAGE IN PROMPT): PRINCIPAL FEATURES WITH STICKY SCROLLING DUAL MOBILE MOCKUPS (EXACT 1:1 MATCH TO SCREENSHOT) */}
      <section ref={principalSectionRef} className="py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          {/* Centered H2 Title */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-slate-950 tracking-tight font-sans">
              Principal Features
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Left 6 Feature Cards */}
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
                        ? 'bg-[#008BB4] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#008BB4] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-[#E0F2FE] text-[#008BB4] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
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

            {/* Center Sticky Dual Mobile Phone Mockup (Scrolls along with page scroll) */}
            <div className="lg:col-span-4 sticky top-36 self-start py-1 flex items-center justify-center z-20">
              <motion.div
                style={{ y: phoneY }}
                className="relative flex items-center justify-center scale-95 sm:scale-100 transition-transform duration-300"
              >
                
                {/* Front Phone */}
                <div className="relative z-20 w-[195px] sm:w-[215px] bg-slate-950 p-2 rounded-[34px] shadow-[0_20px_50px_rgba(0,0,0,0.22)] border-4 border-slate-800">
                  <div className="bg-white rounded-[26px] overflow-hidden text-left border border-slate-200">
                    <div className="bg-[#008BB4] p-3 text-white">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="text-[8px] text-sky-100 block opacity-90 font-medium">Welcome,</span>
                          <span className="text-xs font-black tracking-tight block">David Smith</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-[9px] font-bold">
                          DS
                        </div>
                      </div>
                      <span className="text-[7.5px] text-sky-100 block">Here is your latest update</span>
                    </div>

                    <div className="p-2.5 bg-slate-50 space-y-2 text-[8px]">
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-center shadow-2xs">
                          <Radio className="w-3 h-3 text-[#008BB4] mx-auto mb-0.5" />
                          <span className="font-bold text-slate-800 block text-[7.5px]">User Network</span>
                        </div>
                        <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-center shadow-2xs">
                          <Activity className="w-3 h-3 text-blue-600 mx-auto mb-0.5" />
                          <span className="font-bold text-slate-800 block text-[7.5px]">Live Stats</span>
                        </div>
                      </div>

                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 space-y-0.5 shadow-2xs">
                        <span className="font-bold text-slate-900 block text-[8px]">Track your status</span>
                        <span className="text-[7px] text-slate-400 block">Report symptoms & test info</span>
                      </div>

                      <div className="bg-white p-1.5 rounded-lg border border-slate-200 space-y-0.5 shadow-2xs">
                        <span className="font-bold text-slate-900 block text-[8px]">California Medical Center</span>
                        <span className="text-[7px] text-slate-400 block">24/7 ICU Available</span>
                      </div>
                    </div>

                    <div className="bg-white border-t border-slate-200 p-1.5 flex justify-around text-[7px] text-slate-400">
                      <div className="flex flex-col items-center text-[#008BB4]">
                        <Activity className="w-3 h-3" />
                        <span className="font-bold text-[6.5px]">Home</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Radio className="w-3 h-3" />
                        <span className="text-[6.5px]">Testing</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <User className="w-3 h-3" />
                        <span className="text-[6.5px]">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Phone */}
                <div className="relative z-10 -ml-12 w-[175px] sm:w-[190px] bg-slate-900 p-2 rounded-[28px] shadow-lg border-2 border-slate-700 opacity-95 transform translate-y-3">
                  <div className="bg-white rounded-[22px] overflow-hidden p-3 text-left border border-slate-200 h-[255px] sm:h-[280px] flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-slate-800 block mb-2 text-center">Select user type</span>
                      
                      <div className="w-full h-24 bg-sky-50 rounded-lg p-2 mb-2 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 120 70" fill="none">
                          <circle cx="30" cy="20" r="10" fill="#38BDF8" />
                          <path d="M15 45 C15 32 45 32 45 45 Z" fill="#0284C7" />
                          <circle cx="60" cy="18" r="10" fill="#F43F5E" />
                          <path d="M45 45 C45 30 75 30 75 45 Z" fill="#BE123C" />
                          <circle cx="90" cy="22" r="10" fill="#34D399" />
                          <path d="M75 45 C75 32 105 32 105 45 Z" fill="#059669" />
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="w-full py-1.5 rounded bg-[#008BB4] text-white text-[8px] font-bold text-center shadow-2xs">
                        Business
                      </div>
                      <div className="w-full py-1.5 rounded bg-sky-100 text-[#008BB4] text-[8px] font-bold text-center shadow-2xs">
                        Customer
                      </div>
                    </div>

                    {/* Bottom Circular Action Plus Button (Matching 2nd Screenshot 1:1) */}
                    <div className="flex justify-center pt-1">
                      <div className="w-5 h-5 rounded-full bg-[#008BB4] text-white flex items-center justify-center font-bold text-xs shadow-md">
                        +
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Right 6 Feature Cards */}
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
                        ? 'bg-[#008BB4] text-white shadow-xl scale-[1.02]'
                        : 'bg-white border border-transparent hover:bg-[#008BB4] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isSelected
                          ? 'bg-white/20 text-white border-white/40'
                          : 'bg-[#E0F2FE] text-[#008BB4] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
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

      {/* 6TH COMPONENT: OUR PREMIUM SERVICES 10-CARD GRID */}
      <PremiumServicesGrid />

      {/* 7TH COMPONENT: DIGITAL TRANSFORMATION THROUGH INNOVATION CASE STUDIES SLIDER (1:1 MATCH TO SCREENSHOTS) */}
      <DigitalTransformationCaseStudies />

      {/* 8TH COMPONENT: UNVEILING OUR INNOVATIVE SOLUTION VIDEO SLIDER */}
      <UnveilingInnovativeSolutionsVideoSlider />

      {/* 9TH COMPONENT: PROCESS WE FOLLOW - SAPPHIRE 8-STEP TIMELINE */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* 10TH COMPONENT: WHAT OUR CLIENTS SAY - CLUTCH CLIENT REVIEWS SLIDER */}
      <WhatOurClientsSayClutchSlider />

      {/* 11TH COMPONENT: SAPPHIRE SUCCESS MATRIX */}
      <SuccessMatrix />

      {/* 12TH COMPONENT: OUR STORY, THEIR WORDS VIDEO TESTIMONIALS SLIDER */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* 13TH COMPONENT: SAPPHIRE FAQ WITH 8 STAT BADGES */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We provide tailored, robust, scalable and secure Android mobile app solutions that delight users and deliver engagement."
        faqs={sapphireFaqs}
      />

      {/* 14TH COMPONENT: WE HAVE BEEN FEATURED IN GRID */}
      <WeHaveBeenFeaturedInGrid />

      {/* 15TH COMPONENT: WORK TOGETHER & NEWSLETTER SUBSCRIPTION SECTION */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default CovidTrackerAppDevelopmentService;

