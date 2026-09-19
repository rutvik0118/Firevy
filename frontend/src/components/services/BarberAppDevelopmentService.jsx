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
  CheckSquare,
  BookOpen,
  Volume2,
  Award,
  Users,
  LogIn,
  Play,
  Scissors,
  Calendar,
  Clock,
  CreditCard,
  UserCheck
} from 'lucide-react';

export const BarberAppDevelopmentService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const principalSectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start center', 'end center']
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  const faqs = [
    {
      q: "1. How does a custom barber booking app benefit salon owners?",
      a: "A barber booking app automates scheduling, eliminates double bookings, manages seat availability in real time, reduces no-shows via automated SMS/Push reminders, and boosts client retention."
    },
    {
      q: "2. Can customers choose their preferred barber or stylist?",
      a: "Yes! Customers can view detailed barber profiles, experience tags, working hours, customer ratings, and portfolio pictures before selecting their preferred barber for a slot."
    },
    {
      q: "3. What features are included in the Barber / Admin Panel?",
      a: "The panel includes real-time appointment calendar management, staff shift scheduling, service pricing configuration, revenue analytics dashboards, and customer CRM tools."
    },
    {
      q: "4. Does the app support integrated online payments and tips?",
      a: "Yes, we integrate secure payment gateways (Stripe, Razorpay, Apple Pay, Google Pay) enabling upfront booking deposits, full digital payments, and voluntary barber tips."
    },
    {
      q: "5. How long does it take to develop a custom barber booking application?",
      a: "An MVP barber appointment booking app takes approximately 6 to 8 weeks, while a full-featured multi-location salon management platform takes 10 to 14 weeks."
    }
  ];

  const barberFeaturesList = {
    left: [
      {
        title: 'Portfolio Of Barber',
        desc: 'Barbers may use this salon appointment app for marketing their portfolio, highlight their specializations, prices, and expertise, and connect with customers',
        icon: Scissors
      },
      {
        title: 'Catalog Of Photographs And Videos',
        desc: 'This beard maker app enables you to post images of haircuts and hair color treatments and videos that demonstrate how these treatments are done. It serves as a catalog and assists your customer in selecting a service',
        icon: Play
      },
      {
        title: 'Integration Of Social Media',
        desc: 'Clients will be able to register more simply with social media integration. If users are permitted to register using one of their social media accounts, they will rapidly connect with the on-demand barber app',
        icon: Globe
      },
      {
        title: 'Online Appointments And Booking',
        desc: "This app enables your clients to schedule appointments more easily and efficiently. Customers may check each barber's availability to plan an appointment for service",
        icon: Calendar
      },
      {
        title: 'Notifications And Deals Through Push',
        desc: "You may give your clients reminders about their appointments or cancellations through push notifications to ensure they don't forget. Push notifications may also tell clients about discounts or expert visits",
        icon: Zap
      }
    ],
    right: [
      {
        title: 'Geolocation',
        desc: "Barber applications may be integrated with GPS technologies that direct customers to your store's precise location. It will assist your customer in locating your whereabouts without having to phone you hundreds of times",
        icon: Globe
      },
      {
        title: 'Simple And Straightforward',
        desc: "A basic dashboard lets you maintain tabs on the app's status. You may modify your software at any time. Things become more comprehensible",
        icon: Sliders
      },
      {
        title: 'Loyalty Rewards Scheme',
        desc: 'You may show your appreciation for your valued customers with loyalty programs and schemes. Offering an exceptional client experience and satisfaction may encourage repeat business and brand loyalty',
        icon: Sparkles
      },
      {
        title: 'Payment Gateway',
        desc: 'This feature enables you to make payments securely without worrying about your credentials being compromised and provide your consumer with various payment choices',
        icon: CreditCard
      },
      {
        title: 'Facilitates Bookings',
        desc: "The software enables you to efficiently manage your customers' reservations and arrange appointments for them. You will not need the services of a manager to oversee your appointments",
        icon: CheckSquare
      }
    ]
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Barber App Development Company | Custom Salon Booking Apps | Firevy.co"
        description="Build custom on-demand barber and salon booking mobile applications for iOS & Android. Empower clients with instant appointment booking, stylist selection, digital payments, and queue management."
        keywords="Barber App Development, Salon Booking App Development, Barber Appointment App, On-Demand Haircut App, Barber Shop App Developer, Hair Salon App"
        url="https://firevy.co/services/barber-app-development"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (1:1 EXACT MATCH TO USER SCREENSHOT)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-10 sm:py-12 lg:py-16 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                Barber App Development Company
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                An on-demand Barber Salon App Development Company minimizes the need for vacant barbershop seats, allowing consumers to bypass the waiting area. Our barber app development helps businesses offer an easy-to-use platform for booking their services.
              </p>

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
                  src="/images/barber_app_hero.png"
                  alt="Barber App Development Company Illustration"
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
          3RD COMPONENT: ABOUT BARBER BOOKING APP DEVELOPMENT
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Barber Salon Interior Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/barber_salon_about_illustration.png"
                  alt="About Barber Booking App Development - Salon Interior"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & CTA Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Barber Booking App Development
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Our <span className="text-[#006587] font-semibold">salon app development</span> is always experimenting with new technologies and bringing state-of-the-art solutions to increase client engagement and salon owner app growth for an extended period. We incorporate easy appointment scheduling, secure payment, various user panels, and high responsiveness in a Salon appointment app. Our elegant salon app development allows clients to Barber appointment booking app from the comfort of their own homes will be developed our team for you.
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

      {/* 5TH COMPONENT: FEATURES OF BARBER SALON APP DEVELOPMENT WITH SCROLLING MOBILE GRAPHIC */}
      <section ref={principalSectionRef} className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Features of Barber Salon App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative">
            
            {/* Left 5 Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {barberFeaturesList.left.map((feat, idx) => {
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
                  alt="Features of Barber Salon App Development Mobile Mockups"
                  className="w-full h-auto max-h-[540px] object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-xl"
                />
              </motion.div>
            </div>

            {/* Right 5 Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {barberFeaturesList.right.map((feat, idx) => {
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

      {/* 6.7TH COMPONENT: SUCCESS STORIES SECTION */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#E5F7FF] text-slate-900 border-b border-sky-100 font-sans relative overflow-hidden">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
            <Link to="/portfolio" className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/beauty_success_card1.png"
                  alt="Appointment Schedule App Development"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Appointment Schedule App Development
              </h3>
            </Link>

            <Link to="/portfolio" className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/beauty_success_card2.png"
                  alt="Beauty Parlour Classes App Development"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Beauty Parlour Classes App Development
              </h3>
            </Link>

            <Link to="/portfolio" className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/beauty_success_card3.png"
                  alt="Salon App Development"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Salon App Development
              </h3>
            </Link>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#006587] hover:bg-[#00526E] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            <div className="p-6 rounded-[20px] bg-[#E2D8FD] border border-purple-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                23+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                Years Experience
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#ABF0D4] border border-emerald-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                320+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                5-Star Clutch Reviews
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#FFC5C5] border border-pink-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                2800+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                Satisfied Clients
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-[#006587] text-white text-center flex flex-col items-center justify-center space-y-3 min-h-[125px] shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                Want to start Projects
              </h4>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-md bg-white hover:bg-sky-50 text-[#006587] font-bold text-xs sm:text-sm transition-all shadow-sm font-sans"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7TH COMPONENT: CASE STUDIES */}
      <DigitalTransformationCaseStudies />

      {/* 8TH COMPONENT: INNOVATIVE SOLUTION VIDEO */}
      <InnovativeSolutionVideo />

      {/* 9TH COMPONENT: WORK PROCESS GRID */}
      <WorkProcessGrid />

      {/* 10TH COMPONENT: CLIENT REVIEWS */}
      <ClientReviewsDarkSection />

      {/* 11TH COMPONENT: SUCCESS MATRIX GRID */}
      <SuccessMatrixGrid />

      {/* 12TH COMPONENT: VIDEO TESTIMONIALS */}
      <OurStoryTheirWordsVideoTestimonialsSlider />

      {/* 13TH COMPONENT: SAPPHIRE FAQ WITH STAT BADGES */}
      <SapphireFaqWithStatBadges
        title="Frequently Asked Questions"
        subtitle="We provide tailored, robust, scalable and secure Android mobile app solutions that delight users and deliver engagement."
        faqs={faqs}
      />

      {/* 14TH COMPONENT: FEATURED IN GRID */}
      <WeHaveBeenFeaturedInGrid />

      {/* 15TH COMPONENT: WORK TOGETHER NEWSLETTER */}
      <WorkTogetherNewsletterSection />

    </div>
  );
};

export default BarberAppDevelopmentService;
