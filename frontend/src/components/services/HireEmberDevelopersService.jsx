import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';
import {
  Clock,
  Calendar,
  ArrowLeft,
  PieChart,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Server,
  Cloud,
  Database,
  Users,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Laptop,
  LineChart,
  Globe,
  Coins,
  Award,
  RotateCw,
  Sliders,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Lock,
  MessageSquare,
  Flag,
  Milestone,
  RefreshCw,
  Building2,
  Sprout,
  GraduationCap,
  ShoppingBag,
  Scale
} from 'lucide-react';

export const HireEmberDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);
  const [leverageTab, setLeverageTab] = useState(0);
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 6 Flexible Hiring Model Cards matching Sapphire reference (Part-time, Full-time, Hourly, Monthly, Quarterly, Yearly)
  const hiringModelCards = [
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '4 hours a day, 5 days a week',
      price: '80 hours/month',
      IconComp: Briefcase,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '8 hours a day, 5 days a week',
      price: '160 hours/month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months',
        'Hire Dedicated Ember.js Developers that exclusively works for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 22.00/Hour',
      IconComp: Clock,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Payment based on hours worked',
        '4 hours a day, 5 days a week',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2550.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: 'Starting From',
      price: '$ 7500.00/ Month',
      IconComp: PieChart,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: 'Starting From',
      price: '$24000',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Save Up TO 20%',
      badgeText: 'Best Deal',
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        '4 hours a day, 5 days a week',
        'Minimum: 2 months'
      ]
    }
  ];

  // Automatic 1-by-1 continuous card scrolling
  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setEnableTransition(true);
      setCardSlideIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(cardSlideIndex % hiringModelCards.length);
    }
  };

  const handlePrevCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev > 0 ? prev - 1 : hiringModelCards.length - 1));
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => prev + 1);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team ($21/hr)',
    appType: 'Ember.js Responsive App',
    budget: '$10,000 - $25,000',
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

  // Ember.js FAQs (Exact Match to Sapphire Reference Site Image 1)
  const emberFaqs = [
    {
      id: 1,
      question: '1. Why is Ember.js used?',
      answer: 'Ember.js helps designers and developers to create websites that are fully responsive rapidly. It is the most popular CSS framework for designing mobile-first and responsive apps.'
    },
    {
      id: 2,
      question: '2. Is Ember.js Necessary For Web Development?',
      answer: 'While not strictly necessary, Ember.js significantly speeds up front-end development by providing pre-built responsive grid systems, components, and utilities.'
    },
    {
      id: 3,
      question: '3. What is Ember.js?',
      answer: 'Ember.js is an open-source front-end framework containing HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.'
    },
    {
      id: 4,
      question: '4. What are Ember.js Components?',
      answer: 'Ember.js components include navigation bars, modals, carousels, accordions, dropdowns, tooltips, cards, buttons, and alert badges designed for rapid web assembly.'
    },
    {
      id: 5,
      question: '5. Why is Ember.js Preferred For Website Development?',
      answer: 'Ember.js is preferred for its mobile-first responsive grid system, cross-browser compatibility, extensive documentation, customizable SCSS variables, and strong community support.'
    },
    {
      id: 6,
      question: '6. Why should I hire a Ember.js developer from Sapphire Solutions?',
      answer: 'Our dedicated Ember.js developers have 5+ years of experience refactoring legacy UI, building custom responsive themes, optimizing web speed, and adhering to W3C standards.'
    },
    {
      id: 7,
      question: '7. Can I hire Ember.js developers for an existing web project redesign?',
      answer: 'Yes, our Ember.js engineers specialize in modernizing legacy websites to Ember 5, implementing clean responsive layouts, and improving lighthouse performance scores.'
    },
    {
      id: 8,
      question: '8. Are your Ember.js developers experienced in working with other front-end frameworks?',
      answer: 'Yes, our Ember.js developers are proficient in HTML5, CSS3, SCSS, JavaScript, React.js, Vue.js, and modern build tools like Vite and Webpack.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Ember.js Developer | Dedicated Ember.js Web Developers at $21/Hr"
        description="Hire dedicated Ember.js developers from Firevy.co. We are among the leading providers of ember development services tailored for responsive web & mobile apps."
        canonical="/services/hire-ember-developers"
      />

      {/* ============================================================
          HERO SECTION (Matching Sapphire Screenshot 1 Design 100%)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Ember.js Developer
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                We are among the leading providers of ember development services. As a reputable Ember.js Web Development Company, we have tailored our services to satisfy the demands of companies seeking creative mobile applications.
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 pb-2">
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">200+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">20+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">2800+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">320+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box */}
              <div className="space-y-3 pt-3">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[16px] p-2 pl-3.5 pr-2 w-full max-w-[410px] shadow-lg shadow-[#0089a8]/25">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-[#0089a8] stroke-[2.5]" />
                    </div>
                    <span className="text-xl sm:text-[22px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Image Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/react_hero_illustration.jpg"
                  alt="Hire Ember.js Developer Illustration"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-slate-200/80 hover:shadow-indigo-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 2: Ember.js Developers Are Available For Hire (Screenshot 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Illustration Image */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[550px]">
                <img
                  src="/images/react_section2_illustration.jpg"
                  alt="Ember.js Developers Available For Hire"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-cyan-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Ember.js Developers Are Available For Hire
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Hire Dedicated Ember.js Developers with extensive expertise in the Ember.js framework. We assist you in developing scalable applications that promote growth. Our team of ember developers can create attractive web and mobile apps regardless of the kind of company or sector. With us, adaptation and flexibility will never be a concern since the applications developed by our ember web developer are highly configurable. Using a single codebase, Ember.js reduces development time and costs, assuring the implementation of scalable business solutions. In addition, the framework includes templates that may be used to construct site components such as forms and buttons.
              </p>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 bg-[#0083B0] hover:bg-[#006095] text-white font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  <span>Hire Dedicated Ember.js Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>



      {/* ============================================================
          SECTION 5: BRIEF ABOUT OUR BOOTSTRAP DEVELOPMENT SERVICES (Screenshot 1 Copy to Copy)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Brief About Our Ember.js Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Hire Our Ember.js Developers To Get App and Web Development Services. Benefits of Hiring them include:Our developers will produce your Ember.js project in real-time and with 100 percent correctness.Our Ember.js developers must have a history of completing all project deadlines on time and providing complete customer satisfaction.
                </p>
                <p>
                  Experience well-structured code and construct a next-generation solution with our safe, scalable, dependable, and high-quality software development services at an accessible price. Our Ember.js developers have the most extraordinary communication abilities, so working with us will be effortless.
                </p>
              </div>
            </div>

            {/* Right Column: Graphic Illustration Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/react_section8_illustration.jpg"
                  alt="Who Exactly Is A Ember.js Developer & Why Hire Them"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-blue-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: WORLD WIDE TOP RATED BOOTSTRAP DEVELOPMENT COMPANY ON CLUTCH (Auto-scroll Marquee Awards Banner)
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Ember.js Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: WHO EXACTLY IS A BOOTSTRAP DEVELOPER? (Screenshot 1 Copy to Copy)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Who Exactly Is A Ember.js Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Box with Quote & Bold Text */}
            <div className="lg:col-span-5 bg-[#F0F7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              {/* Background Wavy Subtle Pattern */}
              <svg className="absolute inset-0 w-full h-full text-cyan-200/20 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M 0 100 C 100 50, 200 150, 300 100 C 400 50, 500 150, 600 100" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 200 C 100 150, 200 250, 300 200 C 400 150, 500 250, 600 200" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 300 C 100 250, 200 350, 300 300 C 400 250, 500 350, 600 300" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="relative z-10 space-y-6">
                {/* Large Quote Icon */}
                <div className="text-[#0083B0]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-[#006095] leading-[1.2] tracking-tight">
                  Dedicated and<br />
                  Talented<br />
                  Developers
                </h3>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Whether for Ember.js UI design or ember web applications, businesses need to hire ember programmers with a high level of expertise who can provide high-quality work. The latter should align with the company's strategic objectives and customer needs. This is why front-end developers, particularly Ember.js developers, constantly find it difficult to provide an appealing experience. Testing and debugging are crucial steps in the front-end development process, and we have Ember.js Developers for Hire.
                </p>
                <p>
                  To minimize functional misunderstanding, testing and debugging tools exist in frameworks, which must be used with care. Hire Ember.js Developers in India to increase web speed, such as compressing pictures and deleting extraneous code characters, without affecting the website's functionality. These factors may make a substantial impact when selecting a ember programmer. Hire Ember.js Developers in USA to develop a website that is both feature-rich and instantly deployable since it includes a variety of layouts and pre-built templates. Ember.js is an open-source framework that allows developers to alter and tailor applications easily.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
                >
                  Let's Discuss Your Project
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 8: OUR PREMIUM SERVICES (Screenshot 1 Match)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SECTION 9: MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (Screenshot 2 Match)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Meet Sapphire's Exceptional Team of Seasoned Experts
              </h2>
            </div>

            {/* Filter Pills Bar */}
            <div className="flex items-center justify-center flex-wrap gap-2 max-w-5xl mx-auto">
              {[
                'Trending',
                'Product Development',
                'SaaS',
                'AI/ML',
                'Data Engineering',
                'Design',
                'Marketing',
                'IoT App Dev',
                'Blockchain Dev'
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setExpertActiveCategory(cat);
                    setExpertCarouselIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    expertActiveCategory === cat
                      ? 'bg-[#006095] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 3 Team Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
              {[
                {
                  id: 1,
                  category: 'Trending',
                  title: 'Mobile Application Team',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                  composition: ['1 Tech Lead', '3 Senior Mobile Devs', '1 UI/UX Specialist', '1 QA Engineer'],
                  summary: 'High-performing mobile development squad building native and cross-platform mobile apps.'
                },
                {
                  id: 2,
                  category: 'Product Development',
                  title: 'Saas Product Dev. Team',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                  composition: ['1 Product Manager', '4 Full-Stack Engineers', '1 DevOps Specialist', '1 UI/UX Lead'],
                  summary: 'Specialized SaaS product squad engineering cloud-native microservices.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Microsoft Dev. Team',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                  composition: ['1 Solution Architect', '3 Senior .NET Engineers', '1 Power Platform Lead'],
                  summary: 'Certified Microsoft developers delivering robust .NET Core APIs and Azure infrastructure.'
                }
              ].map((team) => {
                const currentTab = expertTabs[team.id] || 'tech';
                return (
                  <div
                    key={team.id}
                    className="bg-[#EBF4FA] rounded-2xl p-6 border border-cyan-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative">
                        <img src={team.image} alt={team.title} className="w-full h-full object-cover" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-3">{team.title}</h3>

                      <div className="flex items-center space-x-2 mb-4">
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'tech' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentTab === 'tech' ? 'bg-[#006095] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200/60'
                          }`}
                        >
                          Technologies
                        </button>
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'composition' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentTab === 'composition' ? 'bg-[#006095] text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200/60'
                          }`}
                        >
                          Team Composition
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 min-h-[70px]">
                        {currentTab === 'tech'
                          ? team.techs.map((t, idx) => (
                              <span key={idx} className="bg-white text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                                {t}
                              </span>
                            ))
                          : team.composition.map((c, idx) => (
                              <span key={idx} className="bg-white text-[#006095] text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                                • {c}
                              </span>
                            ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedTeamModal(team)}
                      className="bg-[#006095] hover:bg-[#0083B0] text-white px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-all shadow-xs cursor-pointer"
                    >
                      <span>Get Details</span>
                      <span>→</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Centered Navigation Controls (←  →) */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              <button
                onClick={() => setExpertCarouselIndex((prev) => (prev <= 0 ? 1 : prev - 1))}
                className="text-slate-400 hover:text-[#006095] p-2 transition-all cursor-pointer"
                aria-label="Previous team slide"
              >
                <span className="text-2xl font-bold">←</span>
              </button>
              <button
                onClick={() => setExpertCarouselIndex((prev) => (prev >= 1 ? 0 : prev + 1))}
                className="text-slate-400 hover:text-[#006095] p-2 transition-all cursor-pointer"
                aria-label="Next team slide"
              >
                <span className="text-2xl font-bold">→</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Team Interactive Detail Modal */}
      {selectedTeamModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col">
            <div className="relative h-44 sm:h-48 w-full bg-slate-900">
              <img src={selectedTeamModal.image} alt={selectedTeamModal.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#00D8FF] text-[11px] font-extrabold uppercase tracking-widest mb-1">
                  Verified Sapphire Squad • {selectedTeamModal.experience}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">{selectedTeamModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedTeamModal(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 text-sm backdrop-blur-xs cursor-pointer transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Squad Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedTeamModal.summary}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SECTION 10: LEVERAGE THE EXPERTISE OF SAPPHIRE DEDICATED DEVELOPERS (Screenshot 3 & 4 Match)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Leverage The Expertise of Sapphire Dedicated Developers
              </h2>

              <div className="flex justify-center space-x-2 bg-slate-200/60 p-1.5 rounded-full max-w-md mx-auto">
                {['In Demand', 'Mobile', 'Web', 'AI'].map((tabName, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLeverageTab(idx)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      leverageTab === idx ? 'bg-[#006095] text-white shadow-md' : 'text-slate-700 hover:text-[#006095]'
                    }`}
                  >
                    {tabName}
                  </button>
                ))}
              </div>
            </div>

            {/* Pink Highlighted Active Tab Description Banner */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#FFDEE9]/80 border border-pink-200/80 rounded-2xl p-6 sm:p-8 text-left">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center space-x-2">
                  <span>{['In Demand ↗', 'Mobile ↗', 'Web ↗', 'AI ↗'][leverageTab]}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.
                </p>
              </div>
            </div>

            {/* 2-Column Role Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'AI Developers ↗',
                  desc: 'Employ our team\'s best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!'
                },
                {
                  title: 'UI/UX Designers ↗',
                  desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!'
                },
                {
                  title: 'API Developers ↗',
                  desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.'
                },
                {
                  title: 'Next JS Developers ↗',
                  desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
                },
                {
                  title: 'Machine Learning Developers ↗',
                  desc: 'Employ our team\'s best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!'
                },
                {
                  title: 'Data Scientists ↗',
                  desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 text-left border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center justify-between">
                    <span>{card.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="text-center pt-4">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md"
              >
                View All Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 11: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (Screenshot 1 Match)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Industry-Focused Insights To Elevate Your Business
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Trending Industries that Use Dedicated Developers
              </p>
            </div>

            {/* 2-Row Category Filter Bar (1:1 Match to Sapphire Screenshot 1) */}
            <div className="bg-[#F0F7FC] p-4 rounded-2xl max-w-5xl mx-auto border border-cyan-100 space-y-3">
              <div className="flex items-center justify-center flex-wrap gap-2">
                {['Automotive', 'Ecommerce', 'Education', 'Entertainment', 'Finance', 'Food and Beverage', 'Healthcare'].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveInsightIndustry(ind)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      activeInsightIndustry === ind ? 'bg-[#005C8A] text-white font-bold shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center flex-wrap gap-2">
                {['Information Technology', 'Logistics', 'Travel & Tourism', 'Utility Services'].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveInsightIndustry(ind)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      activeInsightIndustry === ind ? 'bg-[#005C8A] text-white font-bold shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Industry Project Cards with SVG Mockup Banners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pt-2">
              {[
                {
                  id: 'vehicle-data',
                  title: 'Vehicle Data Logging Software',
                  image: '/images/enterprise_app_mockup.jpg'
                },
                {
                  id: 'car-wash',
                  title: 'Car Wash App Development',
                  image: '/images/car_wash_app_mockup.jpg'
                },
                {
                  id: 'taxi-booking',
                  title: 'Taxi Booking-App Development',
                  image: '/images/taxi_booking_app_mockup.jpg'
                }
              ].map((proj) => (
                <div key={proj.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="h-52 w-full bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900">{proj.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Centered View All Portfolio Button (1:1 Match to Sapphire Screenshot 1) */}
            <div className="text-center pt-4">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-[#005C8A] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                View All Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 12: ABOUT US (Screenshot 1 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#005C8A] text-white font-sans overflow-hidden border-b border-cyan-900">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-white tracking-tight leading-tight">
                About Us
              </h2>
              <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed">
                Sapphire delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
              </p>
            </div>

            {/* 8 Stats Metric Cards (4 Columns x 2 Rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  value: '23+',
                  label: 'Years of Experience',
                  img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '320+',
                  label: '5-Star Clutch Reviews',
                  img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '20+',
                  label: 'Fortunes 500 Companies',
                  img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '200+',
                  label: 'IT Professional',
                  img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '95%',
                  label: 'Client Retention',
                  img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '18+',
                  label: 'Industry Served',
                  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '2800+',
                  label: 'Satisfied Clients',
                  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  value: '1500+',
                  label: 'Completed Projects',
                  img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80'
                }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 flex items-center space-x-4 shadow-lg text-slate-900 border border-slate-100 hover:scale-[1.02] transition-all"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img src={stat.img} alt={stat.label} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <div className="text-2xl sm:text-3xl font-[900] text-[#005C8A] leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 13: SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE DEDICATED DEVELOPERS (Screenshot 2 Match)
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire's Bespoke Dedicated Developers" />

      {/* ============================================================
          SECTION 14: EMPLOY THE ADVANCED PROFICIENCY OF SAPPHIRE'S DEDICATED DEVELOPMENT TEAM (Screenshot 3 Match)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-200/80">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Employ the Advanced Proficiency of Sapphire’s Dedicated Development Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
              At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { title: 'On-Time Progress Monitoring', IconComp: LineChart },
              { title: 'Time-Zone Compatibility', IconComp: Globe },
              { title: 'Cost-Effective Development', IconComp: Coins },
              { title: 'World Class Expertise', IconComp: Award },
              { title: 'Least Turnaround Time', IconComp: RotateCw },
              { title: 'Best Management Standards', IconComp: Sliders },
              { title: '500+ Seasons Experts', IconComp: Lightbulb },
              { title: '24x7 Support Team', IconComp: Headphones },
              { title: 'Efficient Project Management', IconComp: Handshake },
              { title: 'Dedicated Delivery Management', IconComp: UserCheck }
            ].map((item, idx) => {
              const Icon = item.IconComp;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl py-4 px-3 border border-blue-100/60 shadow-xs flex flex-col items-center justify-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all h-[120px] sm:h-[130px]"
                >
                  <div className="w-8 h-8 text-[#005F96] flex items-center justify-center mb-2 shrink-0">
                    <Icon className="w-7 h-7 stroke-[1.6]" />
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#005F96] transition-colors max-w-[130px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 15: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ? (Screenshot 4 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              How We Divide Your Project Responsibilities ?
            </h2>

            <div className="inline-flex items-center bg-[#EBF4FA] rounded-xl p-1.5 border border-blue-100 shadow-xs">
              <button
                onClick={() => setResponsibilityTab('sapphire')}
                className={`px-8 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  responsibilityTab === 'sapphire' ? 'bg-[#005F96] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Firevy.co
              </button>
              <button
                onClick={() => setResponsibilityTab('client')}
                className={`px-8 py-2 rounded-lg font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  responsibilityTab === 'client' ? 'bg-[#005F96] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Client
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {(responsibilityTab === 'sapphire'
              ? [
                  { title: 'Create a dedicated team', IconComp: Users },
                  { title: 'Gather required access', IconComp: Lock },
                  { title: 'Plan project resources', IconComp: Sliders },
                  { title: 'Create a standard delivery practice', IconComp: Clock },
                  { title: 'Regular communication between stakeholders', IconComp: MessageSquare },
                  { title: 'Research on competitors', IconComp: Flag }
                ]
              : [
                  { title: 'End-to-end ownership', IconComp: Handshake },
                  { title: 'Manage the project roadmap', IconComp: Milestone },
                  { title: 'Streamline feedback & review', IconComp: Star },
                  { title: 'System for feedback & changes', IconComp: RefreshCw },
                  { title: 'Project life cycle tracking', IconComp: RotateCw },
                  { title: 'Ensure on-time delivery', IconComp: Calendar }
                ]
            ).map((card, cIdx) => {
              const CardIcon = card.IconComp;
              return (
                <div
                  key={cIdx}
                  className="bg-[#F0F6FB] rounded-2xl py-6 px-6 border border-blue-100/60 shadow-xs flex flex-col items-center justify-center text-center group hover:shadow-md hover:-translate-y-0.5 transition-all h-[135px] sm:h-[145px]"
                >
                  <div className="w-10 h-10 text-[#005F96] flex items-center justify-center mb-3 shrink-0">
                    <CardIcon className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug max-w-[240px]">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 16: TECHNOLOGY STACK THAT SAPPHIRE DEDICATED DEVELOPERS USE PROFICIENTLY
          ============================================================ */}
      <TechStackProficientGrid title="Technology Stack That Sapphire Dedicated Developers Use Proficiently" />

      {/* ============================================================
          SECTION 17: THE EXPERTISE OF OUR BOOTSTRAP DEVELOPMENT SERVICES (Screenshot 1 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our Ember.js Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Our Ember.js Developers Are Available On An Hourly Basis At Very Affordable Rates. Their Expertise Includes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Ember.js Consultation',
                  desc: 'Hire Ember.js Developers in UK who will assist you in mastering Ember.js. Our professionals will guide you through the process and assist you in making more intelligent decisions.',
                  bgColor: 'bg-purple-50',
                  iconColor: 'text-purple-600',
                  IconComp: Laptop
                },
                {
                  title: 'App Designing',
                  desc: 'If you have a concept and have chosen to go forward with ember development, our expert designers will assist you in creating a visual representation. This signifies that our front-end developers will develop a prototype of your application.',
                  bgColor: 'bg-emerald-50',
                  iconColor: 'text-emerald-600',
                  IconComp: LayoutGrid
                },
                {
                  title: 'App Development',
                  desc: 'Hire Ember.js Developers in Australia to create responsive apps with ease. Our developers are well-versed in widgets and templates, ensuring optimal implementation.',
                  bgColor: 'bg-orange-50',
                  iconColor: 'text-orange-600',
                  IconComp: Code2
                },
                {
                  title: 'App Customization',
                  desc: 'We can alter an old solution, including contemporary features, and enhance its efficacy. Hire Ember.js Developers in Canada if you seek professional assistance to improve and optimize the application.',
                  bgColor: 'bg-amber-50',
                  iconColor: 'text-amber-600',
                  IconComp: Sliders
                },
                {
                  title: 'Application Recording',
                  desc: 'Whether a tiny start-up or a well-established business, Hire Ember.js Developers in UAE who will assist you with website re-coding at affordable prices.',
                  bgColor: 'bg-pink-50',
                  iconColor: 'text-pink-600',
                  IconComp: Cpu
                },
                {
                  title: 'Theme Implementation',
                  desc: 'We facilitate the incorporation of visually attractive themes into your current application. If necessary, we can adapt themes to match the existing color scheme of the website.',
                  bgColor: 'bg-cyan-50',
                  iconColor: 'text-cyan-600',
                  IconComp: Layers
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.iconColor} flex items-center justify-center`}>
                        <CardIcon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-[#005C8A] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Get A Free Quote For Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 18: PROUD TO HAVE PICKED THESE UP ALONG THE WAY (Screenshot 2 Match)
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          SECTION 19: BENEFITS OF HIRING DEDICATED DEVELOPERS (Screenshot 2 & 3 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Cost Efficiency',
                  desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool. We provide access to global talent, frequently from low-cost locations, lowering labour costs without sacrificing quality.',
                  IconComp: Coins
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time and without errors.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time employment. They can swiftly adapt to project needs and market circumstances, assuring timely delivery and resource optimisation.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated developers are more productive and committed since they only work on their tasks. This dedication generally improves code quality, turnaround times, and development process cohesion.',
                  IconComp: ShieldCheck
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers can speed up project development by using their experience and attention. Businesses can optimize operations, eliminate bottlenecks, and finish projects quickly by hiring dedicated developers.',
                  IconComp: Zap
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and external talent merge their expertise.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#F0F7FC] rounded-2xl p-7 border border-blue-100/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 text-[#005F96] flex items-center justify-center shrink-0">
                        <CardIcon className="w-8 h-8 stroke-[1.6]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <HireDeveloper4Steps
        title="Hire Ember.js Developer In 4 Easy Steps"
        subtitle="Ember.js Developer Offers a number of advantages over another platform. Some of them are:"
      />

      {/* ============================================================
          STANDARD HOME PAGE SECTIONS
          ============================================================ */}
      <VideoTestimonialsStory />
      <EngagementModelsSection
        data={{
          title: "Business Friendly Hiring Models : Building Greater Futures Through Innovation",
          description: "We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:"
        }}
      />
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />
      <WorkProcessGrid />
      <ClientReviewsDarkSection />
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          FAQ SECTION (Matching Sapphire Reference Site Image 1)
          ============================================================ */}
      <SapphireFaqSection
        faqList={emberFaqs}
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
      />

      {/* ============================================================
          SOCIAL MEDIA & RECENT BLOGS
          ============================================================ */}
      <SocialMediaSection />
      <RecentBlogsSection />

      {/* ============================================================
          WHAT SETS US APART, CHALLENGE CTA & NEWSLETTER (1:1 Match to Sapphire Reference)
          ============================================================ */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Ember.js Development Company?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      <IWatchChallengeCtaBanner
        title="Have Ember.js Development Challenge To Address ?"
        subtitle="Get access to top Ember.js developers to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireEmberDevelopersService;
