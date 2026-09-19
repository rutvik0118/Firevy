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
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
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
          1ST COMPONENT: HERO BANNER (EXACT 1:1 MATCH TO 3RD IMAGE)
          ========================================================================= */}
      <section className="bg-[#EEF7FC] py-10 sm:py-12 lg:py-14 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                Covid Tracker App <br className="hidden sm:inline" />
                Development
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                The Covid tracker software that we provide is cutting-edge, and it comes with several features that assist consumers in remaining one step ahead of the infection. With the help of our Covid monitoring app, businesses may stay informed about the most recent customers who have tested positive for the virus.
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
                  src="/images/covid_tracker_hero_illustration.png"
                  alt="Covid Tracker App Development Illustration"
                  className="w-full h-auto max-h-[420px] lg:max-h-[460px] object-contain hover:scale-[1.01] transition-transform duration-300"
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
          3RD COMPONENT: ABOUT COVID TRACKER APP SECTION (EXACT 1:1 MATCH TO 3RD IMAGE)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Vector Illustration Artwork (1:1 Sapphire Reference) */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/covid_tracker_about_illustration.png"
                  alt="About Covid Tracker App Illustration"
                  className="w-full h-auto max-h-[420px] lg:max-h-[450px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Covid Tracker App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Contact tracing is locating each ill individual and determining who they have recently interacted with. This way, we may successfully segregate sick individuals from the rest of the community for the duration of the infection. Our Covid tracker application is based on innovation and has features that help users keep one step ahead of the virus. We've repurposed our knowledge in Covid tracking app development to enable this service and benefit the worldwide community while also allowing entrepreneurs to profit from a good business opportunity.
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

      {/* 4TH COMPONENT (1ST IMAGE IN PROMPT): WORLD WIDE TOP RATED MOBILE APP DEVELOPMENT COMPANY ON CLUTCH BANNER */}
      <ClutchTopRatedCompanyBanner />

      {/* 5TH COMPONENT: PRINCIPAL FEATURES OF COVID TRACKING APP DEVELOPMENT (MATCHING SAPPHIRE SOLUTIONS 1:1 REFERENCE) */}
      <section ref={principalSectionRef} className="py-16 sm:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          {/* Centered H2 Title */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight font-sans">
              Principal Features of COVID Tracking App Development
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

            {/* Center Sticky Dual Mobile Phone Mockup (Scrolls alongside feature cards) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start py-1 flex items-center justify-center z-20">
              <div
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
                  </div>
                </div>

              </div>
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
      <InnovativeSolutionVideo />

      {/* 9TH COMPONENT: PROCESS WE FOLLOW - WORK PROCESS GRID */}
      <WorkProcessGrid />

      {/* 10TH COMPONENT: WHAT OUR CLIENTS SAY - CLIENT REVIEWS DARK SECTION */}
      <ClientReviewsDarkSection />

      {/* 11TH COMPONENT: SAPPHIRE SUCCESS MATRIX GRID */}
      <SuccessMatrixGrid />

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

