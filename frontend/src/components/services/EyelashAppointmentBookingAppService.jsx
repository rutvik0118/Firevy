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
  ShieldCheck,
  Zap,
  Sliders,
  Smartphone,
  Sparkles,
  Globe,
  ClipboardCheck,
  CheckSquare
} from 'lucide-react';

export const EyelashAppointmentBookingAppService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const principalSectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start center', 'end center']
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [-25, 85]);

  const faqs = [
    {
      q: "1. Do you have a separate team of developers for creating apps for estheticians?",
      a: "Yes, we have a dedicated team of mobile application developers experienced in developing feature-rich appointment scheduling apps. We also have a rich portfolio and examples of previous mobile app development projects."
    },
    {
      q: "2. Which kind of organizations may benefit from an online appointment booking application?",
      a: "Any service-based organization may use online appointment booking/scheduling applications. These include providers of medical treatment such as doctors and dentists, suppliers of beauty care such as spas and salons, and professional services such as business consultants."
    },
    {
      q: "3. What is the cost of developing an esthetician booking application?",
      a: "Various variables determine the cost of designing an esthetician booking application. Costs are heavily influenced by design complexity, development time, and the kind of features. We provide impeccably designed appointment booking applications at a competitive pricing range without sacrificing quality."
    },
    {
      q: "4. How long does it take to establish a booking appointment?",
      a: "We provide quick application development services to satisfy your immediate needs. The duration of development varies according to the app's features and design. The most accurate technique to get an anticipated time frame is to talk with app development specialists."
    },
    {
      q: "5. I run a salon business and provide all the salon services. I want to create a booking app for clients. How can you assist?",
      a: "You may establish a single app platform to help customers booking estheticians, follow up with them and make payments within the app. Our method is also applicable to aggregator and marketplace setups. Contact us to discuss developing an appointment scheduling application."
    }
  ];

  const leftFeatures = [
    {
      title: 'Sign Up Or Log In',
      desc: 'Clients and estheticians can login to the app and book or view appointments in a few clicks with this beauty salon and spa app',
      icon: ClipboardCheck
    },
    {
      title: 'Available Services',
      desc: 'After signing in, the user may see all available services and choose the desired ones',
      icon: Sparkles
    },
    {
      title: 'City-Based Search',
      desc: 'Customers may conduct searches for experts depending on the city they are located in',
      icon: Globe
    },
    {
      title: 'Simple Payment',
      desc: 'Consumers may pay for appointments scheduled directly via the fee gateway.',
      icon: ShieldCheck
    }
  ];

  const rightFeatures = [
    {
      title: 'Manage Availability',
      desc: 'Experts may easily manage their availability using a calendar on the website',
      icon: Sliders
    },
    {
      title: 'Notifications',
      desc: 'Receive notifications whenever an appointment is added, deleted, or cancelled',
      icon: Zap
    },
    {
      title: 'Client Management',
      desc: "View all of a customer's upcoming appointments and history of all their previous reservations",
      icon: Smartphone
    },
    {
      title: 'Check Available Slots',
      desc: 'After selecting the needed eyelash services, the user is presented with a list of available slots for the specified service',
      icon: CheckSquare
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Eyelash Appointment Booking App Development Services | Firevy.co"
        description="Build on-demand eyelash appointment booking mobile apps for salons & estheticians. Accept reservations, manage schedules, and provide seamless customer booking experiences."
        keywords="Eyelash Appointment Booking App, Salon Booking App Development, Esthetician App Development, Beauty Parlour Booking App, Lash Booking App"
        url="https://firevy.co/services/eyelash-appointment-booking-app"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (1:1 SAPPHIRE REFERENCE)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-10 sm:py-12 lg:py-14 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                Eyelash Booking App <br className="hidden sm:inline" />
                Development Services
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                We allow artificial eyelash application businesses to quickly and easily establish their own Custom Eyelash Appointment Booking App and begin accepting reservations from consumers and clients. Our appointment booking app development has altered how clients communicate with firms. Previously, clients had to wait hours for their turn to return to satisfy the consultant. Still, with appointment booking applications, lash book app users may now arrange an appointment before visiting the service provider. This spa app saves both the consumer and the service provider considerable time. Our team of expert Eyelash Extension Booking App Developers ensures a seamless booking experience.
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

            {/* Right Column: High-Resolution Vector Illustration Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/eyelash_hero_banner.png"
                  alt="Eyelash Booking App Development Services Illustration"
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
          3RD COMPONENT: ABOUT EYELASH APPOINTMENT BOOKING APP SECTION
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Vector Illustration Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/eyelash_about_banner.png"
                  alt="About Eyelash Appointment Booking App"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Eyelash Appointment Booking App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                This online booking app is always required since there is a disorganized system for scheduling an appointment after you arrive at the esthetician clinic. This mobile app development services for estheticians enables to schedule appointments using the app, eliminating the need to spend their whole time at the Salon meeting the esthetician. Additionally, as an On Demand Eyelash Booking App Development and Eyelash Salon Booking App Development Company an appointment with the beautician may be made in advance using the salon app, and the parlor can be visited at a predetermined time frame.
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

      {/* 5TH COMPONENT: PRINCIPAL FEATURES WITH SCROLL ANIMATED MOBILE GRAPHIC */}
      <section ref={principalSectionRef} className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Principal Features of Eyelash Booking App Development Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative">
            
            {/* Left Features */}
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

            {/* Center Mobile Graphic with Sticky Parallax Scroll Translation */}
            <div className="lg:col-span-4 self-start lg:sticky lg:top-28 py-2 flex items-center justify-center z-20 overflow-visible">
              <motion.div
                style={{ y: phoneY }}
                className="relative w-full max-w-[300px] sm:max-w-[340px] flex items-center justify-center overflow-visible"
              >
                <img
                  src="/images/eyelash_features_center.png"
                  alt="Principal Features of Eyelash Booking App Development Services"
                  className="w-full h-auto max-h-[420px] object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-lg"
                />
              </motion.div>
            </div>

            {/* Right Features */}
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

      {/* 8TH COMPONENT: INNOVATIVE SOLUTION VIDEO */}
      <InnovativeSolutionVideo />

      {/* 9TH COMPONENT: WORK PROCESS GRID */}
      <WorkProcessGrid />

      {/* 10TH COMPONENT: CLIENT REVIEWS DARK SECTION */}
      <ClientReviewsDarkSection />

      {/* 11TH COMPONENT: SUCCESS MATRIX GRID */}
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

export default EyelashAppointmentBookingAppService;
