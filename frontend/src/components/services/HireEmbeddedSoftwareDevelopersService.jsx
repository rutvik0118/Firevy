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
  Scale,
  HardDrive,
  Radio
} from 'lucide-react';

export const HireEmbeddedSoftwareDevelopersService = () => {
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

  // 6 Flexible Hiring Model Cards matching Ember reference
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
        'Hire Dedicated Embedded Software Developers that exclusively works for you'
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
      setCardSlideIndex(0);
    }
  };

  useEffect(() => {
    if (!enableTransition) {
      const timeout = setTimeout(() => {
        setEnableTransition(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [enableTransition]);

  const handlePrevCard = () => {
    if (cardSlideIndex === 0) {
      setEnableTransition(false);
      setCardSlideIndex(hiringModelCards.length - 1);
    } else {
      setEnableTransition(true);
      setCardSlideIndex((prev) => prev - 1);
    }
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => prev + 1);
  };

  // FAQ Accordion Data
  const embeddedFaqs = [
    {
      id: 1,
      question: '1. What is Embedded Software Development?',
      answer: 'Embedded software development involves writing low-level code, firmware, and Real-Time Operating Systems (RTOS) designed to run directly on microcontrollers, microprocessors, and SOC chips for hardware devices.'
    },
    {
      id: 2,
      question: '2. Which programming languages do your Embedded Software Developers use?',
      answer: 'Our embedded engineers specialize in Embedded C, MISRA C, Modern C++ (C++11 to C++20), Assembly, Python for edge scripting, and Rust for high-reliability memory-safe systems.'
    },
    {
      id: 3,
      question: '3. What hardware architectures and microcontrollers do you support?',
      answer: 'We have extensive experience across ARM Cortex (M0/M3/M4/M7/A-series), STM32, ESP32, Nordic Semiconductor (nRF52/nRF53), Microchip PIC/AVR, Texas Instruments, NXP i.MX, and RISC-V platforms.'
    },
    {
      id: 4,
      question: '4. What are Board Support Packages (BSPs) and Device Drivers?',
      answer: 'BSPs include low-level initialization code, bootloaders (U-Boot), and peripheral device drivers (SPI, I2C, UART, CAN Bus, USB) that allow an operating system or RTOS to interact seamlessly with custom hardware.'
    },
    {
      id: 5,
      question: '5. Why is Real-Time Operating System (RTOS) preferred for embedded systems?',
      answer: 'RTOS provides deterministic task scheduling, microsecond-level timing guarantees, minimal RAM footprint, and multi-threading capabilities essential for safety-critical hardware applications.'
    },
    {
      id: 6,
      question: '6. Why should I hire an Embedded Software Developer from Firevy.co?',
      answer: 'Our dedicated embedded engineers bring senior domain expertise in C/C++, FreeRTOS, Embedded Linux, hardware security, MISRA C compliance, zero-leak memory guarantees, and 100% IP code ownership.'
    },
    {
      id: 7,
      question: '7. Can your developers assist with Over-The-Air (OTA) firmware updates?',
      answer: 'Yes, we design secure dual-bank OTA bootloaders with cryptographic payload verification (AES/ECC), automatic rollback protection, and cloud sync via AWS IoT Core or custom backends.'
    },
    {
      id: 8,
      question: '8. How do you handle hardware testing and compliance verification?',
      answer: 'We conduct static code analysis, unit testing with Unity/CMock, and automated Hardware-in-the-Loop (HIL) testing to verify system stability under harsh operating conditions.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Dedicated Embedded Software Developers | Custom Firmware & RTOS Experts - Firevy.co"
        description="Hire dedicated Embedded Software Developers from Firevy.co. We are among the leading providers of embedded development services tailored for firmware, RTOS, & IoT hardware."
        canonical="/services/hire-embedded-software-developers"
      />

      {/* ============================================================
          SECTION 1: HERO SECTION (Matching Ember.js / Sapphire Screenshot 1 100%)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Embedded Software Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                The term 'embedded software' refers to a collection of code instructions for non-PC devices that are either a component of a microcontroller or are a part of another program that sits on top of the chip. Hire top-rated embedded software developers from Firevy.co to engineer ultra-reliable, microsecond-deterministic firmware, RTOS kernels, IoT connectivity stacks, and custom Board Support Packages.
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
                  <Link
                    to="/contact"
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center"
                  >
                    Hire Team →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column Image Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/react_hero_illustration.jpg"
                  alt="Hire Embedded Software Developers Illustration"
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-slate-200/80 hover:shadow-indigo-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 2: BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 3: Embedded Software Developers Are Available For Hire
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Illustration Image */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[550px]">
                <img
                  src="/images/react_section2_illustration.jpg"
                  alt="Embedded Software Developers Available For Hire"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-cyan-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Embedded Software Developers Are Available For Hire
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Hire Dedicated Embedded Software Developers with extensive expertise in firmware engineering, microcontroller programming, and Real-Time Operating Systems. We assist you in developing scalable hardware-software applications that promote growth. Our team of embedded developers can create custom BSPs, device drivers, and IoT connectivity stacks regardless of the industry sector. With us, reliability and real-time performance will never be a concern since the applications developed by our embedded engineers are highly optimized and deterministic.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-[#0083B0] hover:bg-[#006095] text-white font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  <span>Hire Dedicated Embedded Software Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>



      {/* ============================================================
          SECTION 6: BRIEF ABOUT OUR EMBEDDED SOFTWARE DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Brief About Our Embedded Software Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Hire Our Embedded Software Developers To Get Hardware and Firmware Development Services. Benefits of Hiring them include: Our developers will produce your embedded software project in real-time with 100 percent code accuracy and MISRA compliance. Our embedded software developers have a proven history of completing all project milestones on time with complete technical reliability.
                </p>
                <p>
                  Experience well-structured C/C++ code and construct a next-generation hardware solution with our safe, scalable, dependable, and high-quality firmware development services at an accessible price. Our embedded developers have extraordinary technical communication skills, so collaborating with your hardware engineering team will be effortless.
                </p>
              </div>
            </div>

            {/* Right Column: Graphic Illustration Image */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/react_section8_illustration.jpg"
                  alt="Who Exactly Is An Embedded Software Developer & Why Hire Them"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-blue-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 7: CLUTCH MARQUEE AWARDS BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Embedded Software Development Company on Clutch" />

      {/* ============================================================
          SECTION 8: WHO EXACTLY IS AN EMBEDDED SOFTWARE DEVELOPER?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Who Exactly Is An Embedded Software Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Box with Quote & Bold Text */}
            <div className="lg:col-span-5 bg-[#F0F7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              <svg className="absolute inset-0 w-full h-full text-cyan-200/20 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M 0 100 C 100 50, 200 150, 300 100 C 400 50, 500 150, 600 100" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 200 C 100 150, 200 250, 300 200 C 400 150, 500 250, 600 200" stroke="currentColor" strokeWidth="2" />
                <path d="M 0 300 C 100 250, 200 350, 300 300 C 400 250, 500 350, 600 300" stroke="currentColor" strokeWidth="2" />
              </svg>

              <div className="relative z-10 space-y-6">
                <div className="text-[#0083B0]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-[#006095] leading-[1.2] tracking-tight">
                  Dedicated and<br />
                  Talented<br />
                  Embedded Engineers
                </h3>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Whether for low-level microcontroller firmware or complex Embedded Linux BSPs, businesses need to hire embedded programmers with a high level of domain expertise who can deliver zero-defect work. The code must align with real-time execution constraints and hardware safety standards. Testing and Hardware-in-the-Loop (HIL) debugging are crucial steps in the firmware engineering lifecycle, which is why we offer top 1% Embedded Software Developers for Hire.
                </p>
                <p>
                  To minimize timing jitter and race conditions, real-time operating systems (RTOS) and deterministic task schedulers are implemented with precision. Hire Embedded Software Developers to optimize memory usage, power consumption, and register configurations without affecting device reliability. These factors make a substantial difference when building smart IoT gadgets, medical devices, and automotive ECUs.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg"
                >
                  Let's Discuss Your Project
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 9: PREMIUM SERVICES GRID
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          SECTION 10: MEET FIREVY.CO'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Meet Firevy.co's Exceptional Team of Seasoned Experts
              </h2>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-2 max-w-5xl mx-auto">
              {[
                'Trending',
                'Embedded Firmware',
                'RTOS & Kernel',
                'Embedded Linux',
                'IoT & Edge AI',
                'Automotive ECUs',
                'Hardware Security'
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
              {[
                {
                  id: 1,
                  category: 'Trending',
                  title: 'Embedded Systems Architecture Team',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Embedded C', 'C++', 'FreeRTOS', 'ARM Cortex', 'STM32'],
                  composition: ['1 Systems Architect', '3 Firmware Engineers', '1 QA Specialist'],
                  summary: 'High-performing embedded engineering squad specializing in RTOS kernel optimization & low-level firmware.'
                },
                {
                  id: 2,
                  category: 'Embedded Linux',
                  title: 'Embedded Linux & BSP Squad',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['Yocto', 'Buildroot', 'U-Boot', 'Device Drivers', 'Linux Kernel'],
                  composition: ['1 Linux Kernel Lead', '3 BSP Engineers', '1 Security Specialist'],
                  summary: 'Specialized Linux engineering squad customizing U-Boot bootloaders and Yocto OS images.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'IoT & Wireless Edge AI Squad',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['BLE', 'Zigbee', 'MQTT', 'ESP32', 'TinyML', 'AWS IoT'],
                  composition: ['1 IoT Lead Architect', '3 Wireless Engineers', '1 Cloud Specialist'],
                  summary: 'Senior IoT developers connecting microcontrollers to cloud backends with secure hardware encryption.'
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
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 11: LEVERAGE THE EXPERTISE OF FIREVY.CO DEDICATED DEVELOPERS (Screenshot 1 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Leverage The Expertise of Firevy.co Dedicated Developers
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

            <div className="text-center pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md"
              >
                View All Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 12: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (Screenshot 1 Match)
          ============================================================ */}
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
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center bg-[#005C8A] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                View All Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 13: ABOUT US (8 Stats Metric Cards with images)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#005C8A] text-white font-sans overflow-hidden border-b border-cyan-900">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-white tracking-tight leading-tight">
                About Us
              </h2>
              <p className="text-sm sm:text-base text-cyan-100 font-medium leading-relaxed">
                Firevy.co delivers cutting-edge digital and embedded solutions that drive our clients to achieve unparalleled hardware success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { value: '15+', label: 'Years of Experience', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80' },
                { value: '320+', label: '5-Star Clutch Reviews', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&auto=format&fit=crop&q=80' },
                { value: '20+', label: 'Fortunes 500 Companies', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80' },
                { value: '200+', label: 'IT & Embedded Engineers', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80' },
                { value: '98%', label: 'Client Retention Rate', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80' },
                { value: '18+', label: 'Industries Served', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80' },
                { value: '500+', label: 'Embedded Systems Built', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80' },
                { value: '100%', label: 'On-Time Firmware Delivery', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80' }
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
          SECTION 14: SECTORS THRIVING
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke Dedicated Developers" />

      {/* ============================================================
          SECTION 15: ADVANCED TECHNICAL PROFICIENCY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-200/80">
        <Container className="max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Employ the Advanced Proficiency of Firevy.co’s Dedicated Development Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto">
              At Firevy.co, we have a dedicated development team to deliver hardware & firmware services that surpass expectations.
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
              { title: '500+ Seasoned Experts', IconComp: Lightbulb },
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
          SECTION 16: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ?
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
          SECTION 17: TECHNOLOGY STACK THAT FIREVY.CO DEDICATED DEVELOPERS USE PROFICIENTLY
          ============================================================ */}
      <TechStackProficientGrid title="Technology Stack That Firevy.co Dedicated Developers Use Proficiently" />

      {/* ============================================================
          SECTION 18: THE EXPERTISE OF OUR EMBEDDED SOFTWARE DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our Embedded Software Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Our Embedded Software Developers Are Available On An Hourly Basis At Very Affordable Rates. Their Expertise Includes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Embedded Architecture Consultation',
                  desc: 'Hire Embedded Software Developers who will assist you in mastering SOC selection and RTOS kernels. Our professionals will guide you through firmware architecture decisions.',
                  bgColor: 'bg-purple-50',
                  iconColor: 'text-purple-600',
                  IconComp: Laptop
                },
                {
                  title: 'Custom Firmware Development',
                  desc: 'Our expert firmware engineers create bare-metal C/C++ code, FreeRTOS tasks, and low-level drivers tailored for microcontrollers.',
                  bgColor: 'bg-emerald-50',
                  iconColor: 'text-emerald-600',
                  IconComp: Cpu
                },
                {
                  title: 'Embedded Linux & BSPs',
                  desc: 'Hire Embedded Software Developers to construct Yocto distributions, device drivers, and fast bootloaders with U-Boot.',
                  bgColor: 'bg-orange-50',
                  iconColor: 'text-orange-600',
                  IconComp: HardDrive
                },
                {
                  title: 'IoT & Edge Intelligence',
                  desc: 'We integrate BLE, Wi-Fi 6, Zigbee, LoRaWAN, cellular IoT, and TinyML machine learning models directly onto hardware chips.',
                  bgColor: 'bg-amber-50',
                  iconColor: 'text-amber-600',
                  IconComp: Radio
                },
                {
                  title: 'Hardware Security & OTA',
                  desc: 'Hire Embedded Software Developers to implement cryptographic bootloaders, hardware security modules (HSM), and fail-safe dual-bank OTA updates.',
                  bgColor: 'bg-pink-50',
                  iconColor: 'text-pink-600',
                  IconComp: ShieldCheck
                },
                {
                  title: 'HIL Testing & Compliance',
                  desc: 'We facilitate automated Hardware-in-the-Loop (HIL) testing, MISRA C static code analysis, and functional safety compliance.',
                  bgColor: 'bg-cyan-50',
                  iconColor: 'text-cyan-600',
                  IconComp: CheckCircle2
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#005C8A] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Get A Free Quote For Your Project
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 19: PROUD TO HAVE PICKED THESE UP ALONG THE WAY
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          SECTION 20: BENEFITS OF HIRING DEDICATED DEVELOPERS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Hiring dedicated developers can help you save time and money so that you can focus more on core hardware business activities. Benefits include:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Cost Efficiency',
                  desc: 'One of the most significant advantages of hiring dedicated developers is access to a global hardware talent pool at fixed cost-effective rates.',
                  IconComp: Coins
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated embedded engineers are experts in RTOS, C/C++, and hardware drivers. You can swiftly overcome talent shortages.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time overhead, adapting swiftly to sprint needs.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated developers work exclusively on your hardware project, improving code quality, zero memory leaks, and sprint velocity.',
                  IconComp: ShieldCheck
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers accelerate firmware development using pre-vetted architecture blueprints and DevOps pipelines.',
                  IconComp: Zap
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated developers offer new hardware insights, merging internal talent expertise with modern embedded practices.',
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

      {/* ============================================================
          SECTION 21: 4 STEPS HIRING PROCESS
          ============================================================ */}
      <HireDeveloper4Steps
        title="Hire Embedded Software Developer In 4 Easy Steps"
        subtitle="Embedded Software Developer offers a number of advantages over traditional engineering. Some of them are:"
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
          FAQ SECTION
          ============================================================ */}
      <SapphireFaqSection
        faqList={embeddedFaqs}
        title="Frequently Asked Questions"
        subtitle="We listen to queries and provide solutions that captivate engineering leaders. Feel free to contact us in case of any query which is not mentioned below."
      />

      {/* ============================================================
          SOCIAL MEDIA & RECENT BLOGS
          ============================================================ */}
      <SocialMediaSection />
      <RecentBlogsSection />

      {/* ============================================================
          WHAT SETS US APART, CHALLENGE CTA & NEWSLETTER
          ============================================================ */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Embedded Software Development Company?"
        subtitle="Being unique is our quality! Firevy.co believes in the things that give us an edge over our competitors. We are a renowned software and embedded application organization serving customers with end-to-end support."
      />

      <IWatchChallengeCtaBanner
        title="Have Embedded Software Development Challenge To Address ?"
        subtitle="Get access to top Embedded Software developers to transform your ideas into robust hardware products."
        buttonText="Hire Now"
      />

      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireEmbeddedSoftwareDevelopersService;
