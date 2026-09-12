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
import ProudAwardsBanner from './ProudAwardsBanner';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import SapphireFaqSection from '../common/SapphireFaqSection';
import SocialMediaSection from '../common/SocialMediaSection';
import RecentBlogsSection from '../home/RecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ConversionCalloutBanner from '../home/ConversionCalloutBanner';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
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
  Laptop
} from 'lucide-react';

export const HireBootstrapDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // 6 Flexible Hiring Model Cards matching Sapphire reference
  const hiringModelCards = [
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: 'Starting From',
      price: '$ 8100.00/ Month',
      IconComp: PieChart,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: 'Starting From',
      price: '$24999.0',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Save Up TO 20%',
      badgeText: 'Best Deal',
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
      ]
    },
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
        'hecked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
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
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months',
        'Hire Dedicated Bootstrap Developers that exclusively works for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$ 21.00/Hour',
      IconComp: Clock,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Payment based on hours worked',
        'checked-engagement 4 hours a day, 5 days a week',
        'Billing cycle: Weekly/Monthly'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly',
      subtitle: 'Starting From',
      price: '$ 2750.00/ Month',
      IconComp: Calendar,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'checked-engagement 4 hours a day, 5 days a week',
        'checked-engagement Minimum: 2 months'
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
    appType: 'Bootstrap Responsive App',
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

  // Bootstrap FAQs
  const bootstrapFaqs = [
    {
      q: '1. What hiring models do you offer for hiring Bootstrap developers?',
      a: 'We offer flexible hiring models including Dedicated Developer Squads ($21/hr), Quarterly, Yearly, and Part-time plans tailored to your web application timeline.'
    },
    {
      q: '2. How quickly can I hire and onboard a Bootstrap developer?',
      a: 'We can match and onboard pre-screened senior Bootstrap developers within 24 to 48 hours to start work on your sprint immediately.'
    },
    {
      q: '3. Do your Bootstrap developers work in my local timezone?',
      a: 'Yes, our Bootstrap developers offer minimum 4-5 hours of daily timezone overlap across EST, CST, PST, GMT, and AEST business hours.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before sharing any project files or IP to guarantee complete data security and source code ownership.'
    },
    {
      q: '5. Can your developers migrate our legacy website to Bootstrap 5?',
      a: 'Absolutely. Our senior frontend developers specialize in refactoring legacy CSS/HTML frameworks to modern, clean, mobile-first Bootstrap 5.'
    },
    {
      q: '6. What is the experience level of your Bootstrap developers?',
      a: 'Our Bootstrap engineers have an average of 5+ years of experience in responsive web design, HTML5, CSS3, SCSS, JavaScript, and modern UI frameworks.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Bootstrap Developer | Dedicated Bootstrap Web Developers at $21/Hr"
        description="Hire dedicated Bootstrap developers from Firevy.co. We are among the leading providers of bootstrap development services tailored for responsive web & mobile apps."
        canonical="/services/hire-bootstrap-developers"
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
                Hire Bootstrap Developer
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                We are among the leading providers of bootstrap development services. As a reputable Bootstrap Web Development Company, we have tailored our services to satisfy the demands of companies seeking creative mobile applications.
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

            {/* Right Column Monitor & Floating Bootstrap Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Background translucent gears & accents */}
              <div className="absolute -top-6 -left-2 w-28 h-28 bg-[#D4E8F5]/50 rounded-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-2 w-36 h-36 bg-[#D4E8F5]/60 rounded-2xl pointer-events-none" />

              <div className="relative w-full max-w-[480px]">
                {/* HTML5 Badge floating top-right */}
                <div className="absolute -top-5 -right-3 z-20 bg-[#E34F26] text-white px-3 py-1.5 rounded-xl shadow-lg font-bold text-xs flex items-center space-x-1 border-2 border-white">
                  <span className="bg-white text-[#E34F26] px-1 rounded font-extrabold text-xs">5</span>
                  <span>HTML</span>
                </div>

                {/* CSS3 Badge floating bottom-right */}
                <div className="absolute bottom-6 -right-4 z-20 bg-[#1572B6] text-white px-3 py-1.5 rounded-xl shadow-lg font-bold text-xs flex items-center space-x-1 border-2 border-white">
                  <span className="bg-white text-[#1572B6] px-1 rounded font-extrabold text-xs">3</span>
                  <span>CSS</span>
                </div>

                {/* Bootstrap Badge floating center-right */}
                <div className="absolute top-1/3 -right-6 z-20 bg-[#7952B3] text-white px-3 py-2 rounded-xl shadow-xl font-bold text-sm flex items-center space-x-1.5 border-2 border-white">
                  <span className="bg-white text-[#7952B3] w-5 h-5 rounded flex items-center justify-center font-extrabold text-xs">B</span>
                  <span>Bootstrap</span>
                </div>

                {/* JS Badge floating left */}
                <div className="absolute top-1/4 -left-6 z-20 bg-[#F7DF1E] text-slate-900 px-2.5 py-1.5 rounded-xl shadow-lg font-bold text-xs border-2 border-white">
                  <span>JS</span>
                </div>

                {/* Vector Computer Desktop Monitor */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 340" className="w-full h-auto">
                    <defs>
                      <linearGradient id="monBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    {/* Monitor Screen Frame */}
                    <rect x="50" y="20" width="440" height="250" rx="12" fill="url(#monBezel)" stroke="#334155" strokeWidth="2" />
                    {/* Screen Content Window */}
                    <rect x="65" y="35" width="410" height="220" rx="6" fill="#FFFFFF" />

                    {/* Code & Layout Wireframe preview */}
                    <rect x="80" y="50" width="380" height="18" rx="4" fill="#F1F5F9" />
                    <circle cx="92" cy="59" r="4" fill="#EF4444" />
                    <circle cx="106" cy="59" r="4" fill="#F59E0B" />
                    <circle cx="120" cy="59" r="4" fill="#10B981" />

                    <rect x="80" y="80" width="220" height="8" rx="2" fill="#0083B0" opacity="0.8" />
                    <rect x="80" y="96" width="180" height="6" rx="2" fill="#94A3B8" />
                    <rect x="80" y="108" width="240" height="6" rx="2" fill="#CBD5E1" />

                    {/* Grid Boxes simulating Bootstrap Grid */}
                    <rect x="80" y="125" width="110" height="65" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <rect x="200" y="125" width="110" height="65" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                    <rect x="320" y="125" width="140" height="65" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />

                    <rect x="90" y="140" width="60" height="8" rx="2" fill="#7952B3" />
                    <rect x="210" y="140" width="60" height="8" rx="2" fill="#0083B0" />
                    <rect x="330" y="140" width="80" height="8" rx="2" fill="#64748B" />

                    {/* Code Lines at Bottom Screen */}
                    <rect x="80" y="200" width="380" height="40" rx="4" fill="#0F172A" />
                    <text x="95" y="225" fill="#38BDF8" fontFamily="monospace" fontSize="11">&lt;div className="container font-bold"&gt;...&lt;/div&gt;</text>

                    {/* Stand & Base */}
                    <path d="M 230 270 L 310 270 L 320 310 L 220 310 Z" fill="#94A3B8" />
                    <ellipse cx="270" cy="310" rx="70" ry="10" fill="#CBD5E1" />
                  </svg>
                </div>
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
          SECTION 2: Bootstrap Developers Are Available For Hire (Screenshot 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Illustration (1:1 Copy of Sapphire Reference Site Illustration) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[550px]">
                <svg viewBox="0 0 600 380" className="w-full h-auto drop-shadow-md font-sans">
                  {/* Ground Baseline */}
                  <line x1="40" y1="350" x2="560" y2="350" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

                  {/* 1. LEFT SMARTPHONE GRAPHIC */}
                  <g transform="translate(60, 120)">
                    {/* Phone Bezel Body */}
                    <rect x="0" y="0" width="115" height="225" rx="20" fill="#FFFFFF" stroke="#1E293B" strokeWidth="4" />
                    {/* Speaker & Notch */}
                    <rect x="44" y="8" width="28" height="4" rx="2" fill="#94A3B8" />
                    {/* Blue Bird / Swift Logo Screen Container */}
                    <rect x="15" y="24" width="85" height="90" rx="10" fill="#F0F7FF" />
                    {/* Bird / Swift Icon Path */}
                    <path d="M 40 45 C 50 35, 75 42, 80 50 C 70 52, 60 55, 50 62 C 42 68, 38 78, 35 85 C 45 78, 60 75, 70 76 C 55 85, 45 88, 30 70 Z" fill="#0284C7" />
                    {/* Lower Screen Wireframe Cards */}
                    <rect x="15" y="125" width="38" height="44" rx="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />
                    <circle cx="34" cy="140" r="6" fill="#CBD5E1" />
                    <rect x="23" y="154" width="22" height="4" rx="2" fill="#E2E8F0" />
                    
                    <rect x="62" y="125" width="38" height="44" rx="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />
                    <circle cx="81" cy="140" r="6" fill="#CBD5E1" />
                    <rect x="70" y="154" width="22" height="4" rx="2" fill="#E2E8F0" />
                    {/* Home Bar */}
                    <rect x="42" y="210" width="32" height="3" rx="1.5" fill="#CBD5E1" />
                  </g>

                  {/* 2. DESK & LAPTOP */}
                  {/* Desk Top Surface */}
                  <rect x="180" y="240" width="165" height="7" rx="3" fill="#0083B0" />
                  {/* Desk Leg */}
                  <rect x="258" y="247" width="8" height="103" rx="2" fill="#475569" />
                  <rect x="235" y="348" width="54" height="4" rx="2" fill="#334155" />

                  {/* Laptop on Desk */}
                  <path d="M 195 240 L 212 202 L 254 202 L 246 240 Z" fill="#334155" /> {/* Screen lid */}
                  <polygon points="190,240 252,240 257,244 185,244" fill="#94A3B8" /> {/* Base */}

                  {/* FLOATING CODE EDITOR WINDOW ABOVE LAPTOP */}
                  <g transform="translate(195, 105)">
                    <rect x="0" y="0" width="135" height="80" rx="6" fill="#64B5F6" opacity="0.88" />
                    {/* Code Lines inside editor */}
                    <rect x="10" y="12" width="85" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="10" y="22" width="110" height="4" rx="2" fill="#E3F2FD" />
                    <rect x="18" y="32" width="75" height="4" rx="2" fill="#E3F2FD" />
                    <rect x="24" y="42" width="65" height="4" rx="2" fill="#E3F2FD" />
                    <rect x="10" y="52" width="45" height="4" rx="2" fill="#FFFFFF" />
                    <rect x="10" y="64" width="90" height="4" rx="2" fill="#E3F2FD" />
                  </g>

                  {/* FLOATING BADGES OVER CODE WINDOW */}
                  {/* Left Badge: Cyan {} */}
                  <g transform="translate(178, 95)">
                    <rect x="0" y="0" width="26" height="22" rx="6" fill="#00B4D8" />
                    <text x="13" y="15" fill="#FFFFFF" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">{'{ }'}</text>
                  </g>
                  {/* Right Badge: Blue <\> */}
                  <g transform="translate(322, 110)">
                    <rect x="0" y="0" width="32" height="22" rx="6" fill="#0083B0" />
                    <text x="16" y="15" fill="#FFFFFF" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">&lt;\&gt;</text>
                  </g>

                  {/* 3. DEVELOPER CHARACTER SEATED ON CHAIR */}
                  <g transform="translate(330, 200)">
                    {/* Backrest */}
                    <rect x="32" y="0" width="12" height="75" rx="6" fill="#0083B0" />
                    {/* Seat Cushion */}
                    <rect x="0" y="65" width="48" height="12" rx="4" fill="#0083B0" />
                    {/* Chair Support Column & Base */}
                    <rect x="20" y="77" width="6" height="73" fill="#334155" />
                    <line x1="-5" y1="350" x2="45" y2="350" stroke="#334155" strokeWidth="4" />
                    <circle cx="-5" cy="350" r="4" fill="#1E293B" />
                    <circle cx="45" cy="350" r="4" fill="#1E293B" />
                  </g>

                  {/* Developer Person Body */}
                  {/* Legs / Trousers */}
                  <path d="M 320 255 L 295 310 L 268 310" stroke="#1E293B" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Blue Shoes */}
                  <path d="M 268 310 L 248 310 C 242 310, 242 316, 250 316 L 274 316 Z" fill="#0284C7" />
                  <path d="M 315 310 L 295 310 C 290 310, 290 316, 298 316 L 320 316 Z" fill="#0284C7" />

                  {/* Torso (Blue Shirt) */}
                  <path d="M 320 190 C 295 190, 280 210, 290 255 L 340 255 C 345 220, 340 190, 320 190 Z" fill="#0284C7" />

                  {/* Arms reaching out to keyboard */}
                  <path d="M 310 205 L 250 235 L 230 238" stroke="#FFCC80" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M 310 205 L 250 235" stroke="#0284C7" strokeWidth="12" strokeLinecap="round" fill="none" />

                  {/* Head & Hair */}
                  <circle cx="322" cy="170" r="16" fill="#FFCC80" /> {/* Skin Face */}
                  <path d="M 308 170 C 308 155, 324 150, 336 160 C 339 168, 334 175, 334 175 C 326 162, 314 164, 308 170 Z" fill="#1E293B" /> {/* Dark Hair */}

                  {/* 4. PLANT POT ON THE RIGHT */}
                  <g transform="translate(435, 275)">
                    {/* Pot */}
                    <polygon points="10,40 38,40 32,75 16,75" fill="#374151" />
                    {/* Plant Leaves */}
                    <path d="M 24 40 C 10 20, -10 10, 0 0 C 15 15, 20 30, 24 40 Z" fill="#0284C7" />
                    <path d="M 24 40 C 38 15, 60 10, 48 -5 C 32 10, 27 25, 24 40 Z" fill="#0284C7" />
                    <path d="M 24 40 C 22 15, 24 -10, 24 -22 C 29 -5, 28 15, 24 40 Z" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Bootstrap Developers Are Available For Hire
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Hire Dedicated Bootstrap Developers with extensive expertise in the Bootstrap framework. We assist you in developing scalable applications that promote growth. Our team of bootstrap developers can create attractive web and mobile apps regardless of the kind of company or sector. With us, adaptation and flexibility will never be a concern since the applications developed by our bootstrap web developer are highly configurable. Using a single codebase, Bootstrap reduces development time and costs, assuring the implementation of scalable business solutions. In addition, the framework includes templates that may be used to construct site components such as forms and buttons.
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
                  <span>Hire Dedicated Bootstrap Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: Flexible Hiring Models (Screenshot 3 - Carousel)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Bootstrap Developers from Firevy.co Starts from,
            </p>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-center space-x-3 pt-2">
              <button
                onClick={handlePrevCard}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0083B0] hover:text-white flex items-center justify-center shadow-sm transition-all"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextCard}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0083B0] hover:text-white flex items-center justify-center shadow-sm transition-all"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Carousel Container */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${!enableTransition ? 'transition-none' : ''}`}
              style={{
                transform: `translateX(-${cardSlideIndex * (100 / 3)}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {[...hiringModelCards, ...hiringModelCards, ...hiringModelCards].map((card, index) => {
                const IconComp = card.IconComp;
                return (
                  <div
                    key={`${card.id}-${index}`}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 py-4"
                  >
                    <div
                      className={`h-full bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                        card.isFeatured
                          ? 'border-2 border-[#0083B0] shadow-xl ring-4 ring-[#0083B0]/10 scale-[1.02]'
                          : 'border border-slate-200/80 shadow-md hover:shadow-xl'
                      }`}
                    >
                      {/* Top Save text or badge */}
                      {card.saveText && (
                        <div className="text-center font-bold text-xs text-[#0083B0] tracking-wider uppercase mb-2">
                          {card.saveText}
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Header Icon Circle */}
                        <div className="w-12 h-12 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center text-[#0083B0] mx-auto shadow-xs">
                          <IconComp className="w-6 h-6 stroke-[2]" />
                        </div>

                        {/* Title & Badge */}
                        <div className="text-center space-y-1">
                          <div className="flex items-center justify-center space-x-2">
                            <h3 className="text-xl font-[800] text-slate-900">{card.title}</h3>
                            {card.badgeText && (
                              <span className="bg-cyan-100 text-[#0083B0] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                {card.badgeText}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{card.subtitle}</div>
                          <div className="text-2xl font-[900] text-slate-900 pt-1">{card.price}</div>
                        </div>

                        {/* Feature Bullets */}
                        <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                          {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#0083B0] shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Footer Button */}
                      <div className="pt-6 mt-6 border-t border-slate-100 text-center space-y-2">
                        <a
                          href="#quote-form"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all shadow-sm ${
                            card.isFeatured
                              ? 'bg-[#0083B0] hover:bg-[#006095] text-white shadow-md'
                              : 'bg-[#006095] hover:bg-[#0083B0] text-white'
                          }`}
                        >
                          Hire Now
                        </a>
                        <div className="text-[11px] text-slate-500 font-medium pt-1">
                          We sign NDA for all our projects.
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: Comparison Table (Screenshot 4)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Bootstrap Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005C8A] text-white font-bold text-sm sm:text-base">
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4">Range of Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Junior Developers</th>
                    <th className="py-4 px-6 border-r border-cyan-800/50 w-1/4 text-center">Mid-Level Developers</th>
                    <th className="py-4 px-6 w-1/4 text-center">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Approx Cost</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$17</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0] border-r border-slate-200">$22</td>
                    <td className="py-4 px-6 text-center font-extrabold text-[#0083B0]">$29</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Years of Experience</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">1-3 Years</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">3-5 Years</td>
                    <td className="py-4 px-6 text-center">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Project Manager</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Time Zone Flexibility</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Quality Guarantee</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600 border-r border-slate-200">Yes</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/80 border-r border-slate-200">Working Hours</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-4 px-6 text-center">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          PROPRIETARY BOOTSTRAP SERVICES & CAPABILITIES GRID
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/60">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Brief About Our Bootstrap Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Comprehensive front-end engineering solutions built with high performance, micro-interactions, and modular CSS standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#7952B3] flex items-center justify-center font-bold text-xl mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Bootstrap Web Apps</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tailored Bootstrap 5 frontend application engineering engineered with clean SCSS variables and custom component libraries.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0083B0] flex items-center justify-center font-bold text-xl mb-5">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mobile-First Responsive Layouts</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fluid grid systems and breakpoints ensuring flawless user experience on smartphones, tablets, laptops, and ultra-wide displays.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">HTML/CSS to Bootstrap Migration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless upgrade of legacy static websites or older Bootstrap versions (v3/v4) to modern, fast Bootstrap 5.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Theme & UI Component Customization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom color palettes, typography scales, dark/light modes, and custom utility classes built on top of Bootstrap.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">React / Vue Bootstrap Integration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless integration of React-Bootstrap or Bootstrap Vue components into Single Page Applications (SPAs).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0083B0]/10 text-[#0083B0] flex items-center justify-center font-bold text-xl mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Frontend Performance & QA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict W3C validation, Lighthouse 90+ speed optimization, and cross-browser testing for bug-free production releases.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          PROUD AWARDS BANNER
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          HOW TO HIRE BOOTSTRAP DEVELOPERS IN 4 STEPS
          ============================================================ */}
      <HireDeveloper4Steps title="How To Hire Bootstrap Developers From Firevy.co In 4 Simple Steps" />

      {/* ============================================================
          STANDARD HOME PAGE SECTIONS
          ============================================================ */}
      <VideoTestimonialsStory />
      <DigitalTransformationCaseStudies />
      <WorkProcessGrid />
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />
      <WhatSetsUsApartSection />
      <EngagementModelsSection />
      <ClientReviewsDarkSection />

      {/* ============================================================
          FAQ SECTION
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-200/60">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Got questions about hiring dedicated Bootstrap developers? Here are fast answers.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {bootstrapFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between space-x-4 hover:bg-slate-100/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0083B0] transition-transform duration-300 shrink-0 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SOCIAL MEDIA & RECENT BLOGS
          ============================================================ */}
      <SocialMediaSection />
      <RecentBlogsSection />

      {/* ============================================================
          QUOTE FORM & CTA
          ============================================================ */}
      <section id="quote-form" className="py-16 md:py-24 bg-[#F0F6FB] font-sans text-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
            <div className="text-center space-y-3 mb-8">
              <h2 className="text-2xl sm:text-3xl font-[900] text-slate-900">
                Hire Dedicated Bootstrap Developers Today
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Get top 1% Bootstrap talent working on your project at just <span className="font-bold text-[#0083B0]">$21/hour</span>.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold">Thank You!</h3>
                <p className="text-sm">Our technical manager will reach out within 2 hours with developer profiles and custom quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0083B0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0083B0]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0083B0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Engagement Model</label>
                    <select
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0083B0] bg-white"
                    >
                      <option value="Dedicated Team ($21/hr)">Dedicated Team ($21/hr)</option>
                      <option value="Quarterly Plan">Quarterly Plan</option>
                      <option value="Yearly Plan">Yearly Plan</option>
                      <option value="Part-time Developer">Part-time Developer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Scope / Requirements</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your Bootstrap application needs, team size, or features required..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0083B0]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0083B0] hover:bg-[#006095] text-white font-bold text-base transition-all shadow-lg shadow-[#0083B0]/20"
                >
                  Submit Quote & Get Profiles
                </button>

                <p className="text-center text-[11px] text-slate-500 font-medium">
                  🔒 We sign NDA for all our projects. 100% Confidential & Secure.
                </p>
              </form>
            )}
          </div>
        </Container>
      </section>

      <ConversionCalloutBanner />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireBootstrapDevelopersService;
