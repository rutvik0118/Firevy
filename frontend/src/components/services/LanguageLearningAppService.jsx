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
  Play
} from 'lucide-react';

export const LanguageLearningAppService = () => {
  const [activeCard, setActiveCard] = React.useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const principalSectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: principalSectionRef,
    offset: ['start center', 'end center']
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [-20, 70]);

  const faqs = [
    {
      q: "1. Which language-learning apps are the most popular?",
      a: "Duolingo, Babbel, Rosetta Stone, Memrise, and Busuu are among the most popular language-learning applications globally."
    },
    {
      q: "2. How to monetize a language learning application?",
      a: "Common monetization models include freemium subscriptions, in-app purchases for advanced courses, ad integration, corporate training plans, and certification fees."
    },
    {
      q: "3. How can your app help language learners become more motivated?",
      a: "We integrate gamification elements like daily streaks, XP points, leaderboard rewards, interactive quizzes, and instant speech feedback to keep users engaged and motivated."
    },
    {
      q: "4. How much does your digital learning apps development cost?",
      a: "App development cost depends on scope, features, supported platforms, AI integration, and language catalog size. Contact our team for a detailed custom estimate."
    },
    {
      q: "5. Why should my business invest in a custom language learning app?",
      a: "A custom app lets you deliver tailored curriculum, scale to thousands of active learners, build your brand presence, and generate recurring subscription revenue."
    },
    {
      q: "6. How long does it take to build a language learning app?",
      a: "A basic MVP app takes approximately 6 to 10 weeks, while a full-featured AI-powered learning ecosystem requires 12 to 16 weeks."
    },
    {
      q: "7. How can AI enhance a language learning app?",
      a: "AI enables real-time speech recognition, pronunciation grading, personalized adaptive learning paths, automated AI tutors, and smart vocabulary recommendation."
    },
    {
      q: "8. How do you support post-launch growth and updates?",
      a: "We provide ongoing feature enhancements, analytics, user feedback integration, and marketing support to improve retention, engagement, and long-term growth."
    }
  ];

  const [principalTab, setPrincipalTab] = React.useState('android');

  const principalFeatures = {
    android: {
      left: [
        {
          title: 'Register And Signup',
          desc: 'Users can register and Signup the application to create an account and start learning.',
          icon: ClipboardCheck
        },
        {
          title: 'Language Selection',
          desc: 'Users can choose the language they want to learn from the list of languages available in the app.',
          icon: Globe
        },
        {
          title: 'Levels List',
          desc: 'The users will get levels to cross in each chapter, starting from level 1 to the top level.',
          icon: BookOpen
        },
        {
          title: 'Learning Options',
          desc: 'Users will have the option to choose from audio or video forms to learn the language.',
          icon: Sliders
        }
      ],
      right: [
        {
          title: 'Live Classes',
          desc: 'The users will access live classes led by different language experts within the app.',
          icon: Users
        },
        {
          title: 'Review',
          desc: 'Users can see their chapter-wise learning performance and review it within the app.',
          icon: Award
        },
        {
          title: 'Vocabulary Review',
          desc: 'Users will have access to all the vocabulary they have learned during their journey.',
          icon: CheckSquare
        },
        {
          title: 'Pay Guru Dakshina',
          desc: 'Learners can pay voluntarily within the app as guru Dakshina if they find it useful.',
          icon: ShieldCheck
        }
      ]
    },
    admin: {
      left: [
        {
          title: 'Login',
          desc: "The admin can log in, see all the learner's journeys, and manage credentials as per requirement.",
          icon: LogIn
        },
        {
          title: 'Dashboard For Analysis',
          desc: 'The admin will have a dashboard to see the app performance and manage registrations.',
          icon: Sliders
        },
        {
          title: 'User Management',
          desc: 'Admin can manage users and their login credentials whenever they need',
          icon: Users
        }
      ],
      right: [
        {
          title: 'Content Management',
          desc: 'The admin can manage /edit the content, courses, and other content in the app whenever needed.',
          icon: BookOpen
        },
        {
          title: 'Live Session Management',
          desc: 'Admin can manage live language classes, timing, and access to make the app more profitable.',
          icon: Zap
        }
      ]
    }
  };

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Language Learning App Development Services | Custom eLearning Apps | Firevy.co"
        description="Build custom language learning mobile applications for iOS & Android. Empower learners with AI speech recognition, interactive quizzes, multi-language support, and gamified lessons."
        keywords="Language Learning App Development, eLearning App Development, Custom Language App, Duolingo Clone App, AI Language Tutor App, Speech Recognition Learning"
        url="https://firevy.co/services/language-learning-app"
      />

      {/* =========================================================================
          1ST COMPONENT: HERO BANNER (1:1 MATCH TO USER SCREENSHOT)
          ========================================================================= */}
      <section className="bg-[#EFF6FA] py-10 sm:py-12 lg:py-16 border-b border-sky-100 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Let's Talk CTA */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.2] font-sans">
                Language Learning App Development
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl font-sans">
                Using our language learning applications, learners may swiftly become masters of not just one but several languages. We develop custom language learning apps with features that correspond to user needs. If you want to develop your e learning mobile app design, get in touch with us now!
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

            {/* Right Column: Clean Image Form Illustration Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/language_learning_hero.png"
                  alt="Language Learning App Development Illustration"
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
          3RD COMPONENT: ABOUT LEARN LANGUAGES APP SECTION (1:1 MATCH TO 2ND SCREENSHOT)
          ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Resolution Illustration Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-xl flex items-center justify-center py-1">
                <img
                  src="/images/language_learning_about.png"
                  alt="About Learn Languages App"
                  className="w-full h-auto max-h-[380px] lg:max-h-[420px] object-contain hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column: Title, Content & Button */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight font-sans">
                About Learn Languages App
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-xl">
                Learn Languages app is a platform for easy language learning, with a particular emphasis on Indian languages. The curriculum, created by appointed language experts, exposes the user to better pedagogy and an interactive gamified interface, resulting in complete user involvement while also learning about India and her culture in a fun, engaging manner. Along with carefully picked publications about India and its culture, it offers bespoke services such as translations in various Indian languages. You can contact us to get a language learning app design and e-learning app development service like Learn Languages app. As a leading e learning mobile app development company, we are the digital learning apps development leader with a proven work record and global client base.
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

      {/* 5TH COMPONENT: PRINCIPAL FEATURES WITH SCROLL ANIMATED GRAPHIC (1:1 MATCH TO 2ND SCREENSHOT) */}
      <section ref={principalSectionRef} className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans">
        <Container className="max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              Principal Features of Online education app development
            </h2>

            {/* Toggle Tabs (1:1 match to screenshot 2) */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              <button
                onClick={() => setPrincipalTab('android')}
                className={`min-w-[180px] sm:min-w-[220px] py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 border ${
                  principalTab === 'android'
                    ? 'bg-[#006587] text-white border-[#006587] shadow-md'
                    : 'bg-white text-[#006587] border-[#006587] hover:bg-sky-50'
                }`}
              >
                Android App
              </button>
              <button
                onClick={() => setPrincipalTab('admin')}
                className={`min-w-[180px] sm:min-w-[220px] py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 border ${
                  principalTab === 'admin'
                    ? 'bg-[#006587] text-white border-[#006587] shadow-md'
                    : 'bg-white text-[#006587] border-[#006587] hover:bg-sky-50'
                }`}
              >
                Admin Panel
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start relative">
            
            {/* Left Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {principalFeatures[principalTab]?.left.map((feat, idx) => {
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
                  src={
                    principalTab === 'admin'
                      ? '/images/language_learning_admin_center.png'
                      : '/images/language_learning_features_center.png'
                  }
                  alt="Principal Features of Online education app development"
                  className="w-full h-auto max-h-[460px] object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-lg"
                />
              </motion.div>
            </div>

            {/* Right Features */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 text-left">
              {principalFeatures[principalTab]?.right.map((feat, idx) => {
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

      {/* 6.5TH COMPONENT: AI-POWERED LANGUAGE LEARNING APP VIDEO BANNER (1:1 MATCH TO USER SCREENSHOT) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 font-sans relative overflow-hidden">
        <Container className="max-w-6xl">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans leading-tight">
              AI-Powered Language Learning App Development Services
            </h2>
          </div>

          {/* Video Banner Container with Pastel Circles Background */}
          <div className="relative max-w-4xl mx-auto py-4 px-2 sm:px-6">
            {/* Soft Pastel Blue Background Circle (Top-Left) */}
            <div className="absolute top-0 left-0 sm:left-4 w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-[#DDF4FF] -z-10 blur-[1px] pointer-events-none" />

            {/* Soft Pastel Pink Background Circle (Bottom-Right) */}
            <div className="absolute bottom-0 right-0 sm:right-4 w-48 h-48 sm:w-68 sm:h-68 rounded-full bg-[#FFE9E9] -z-10 blur-[1px] pointer-events-none" />

            {/* Main Video Thumbnail Card */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative w-full rounded-[24px] sm:rounded-[32px] p-2.5 sm:p-4 bg-white shadow-2xl border border-slate-100/90 group cursor-pointer transition-transform duration-300 hover:scale-[1.01] overflow-hidden"
            >
              <img
                src="/images/ai_language_learning_video_banner.png"
                alt="AI-Powered Language Learning App Development Services"
                className="w-full h-auto rounded-[18px] sm:rounded-[24px] object-cover shadow-sm group-hover:brightness-95 transition-all duration-300"
              />

              {/* Translucent Blue Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-[#006587]/75 hover:bg-[#006587] text-white shadow-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Video Player Modal Popup */}
        {isVideoModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
                <h3 className="font-bold text-base sm:text-lg">AI-Powered Language Learning App Development Services</h3>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Embed Video Player */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                  title="AI-Powered Language Learning App Development Services"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 6.7TH COMPONENT: SUCCESS STORIES SECTION (1:1 MATCH TO USER SCREENSHOT) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#E5F7FF] text-slate-900 border-b border-sky-100 font-sans relative overflow-hidden">
        <Container className="max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans max-w-3xl mx-auto">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Mockup Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
            {/* Card 1: Elearning App Development */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/edu_case_study_elearning.png"
                  alt="Elearning App Development"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Elearning App Development
              </h3>
            </div>

            {/* Card 2: Tutor Finder App Development */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/edu_case_study_tutor_finder.png"
                  alt="Tutor Finder App Development"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Tutor Finder App Development
              </h3>
            </div>

            {/* Card 3: Learning Management System */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/60 bg-white hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/edu_case_study_lms.png"
                  alt="Learning Management System"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-bold text-slate-900 text-base sm:text-lg mt-3.5 tracking-tight font-sans group-hover:text-[#006587] transition-colors">
                Learning Management System
              </h3>
            </div>
          </div>

          {/* Center Button: View All Portfolio */}
          <div className="text-center mb-12 sm:mb-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#006587] hover:bg-[#00526E] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* Bottom 4 Stat Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* Stat 1: 23+ Years Experience */}
            <div className="p-6 rounded-[20px] bg-[#E2D8FD] border border-purple-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                23+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                Years Experience
              </p>
            </div>

            {/* Stat 2: 320+ 5-Star Clutch Reviews */}
            <div className="p-6 rounded-[20px] bg-[#ABF0D4] border border-emerald-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                320+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                5-Star Clutch Reviews
              </p>
            </div>

            {/* Stat 3: 2800+ Satisfied Clients */}
            <div className="p-6 rounded-[20px] bg-[#FFC5C5] border border-pink-200/60 text-center flex flex-col items-center justify-center min-h-[125px] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mb-1">
                2800+
              </h4>
              <p className="text-sm font-bold text-slate-800 font-sans">
                Satisfied Clients
              </p>
            </div>

            {/* Stat 4: Want to start Projects */}
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

export default LanguageLearningAppService;
