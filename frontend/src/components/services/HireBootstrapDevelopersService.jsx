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

export const HireBootstrapDevelopersService = () => {
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
      price: '$ 22.00/Hour',
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
      price: '$ 2550.00/ Month',
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
      price: '$24000',
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
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Bootstrap Developers from Firevy.co Starts from,
            </p>
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

          {/* Bottom Center Navigation Controls (Exact Match to Sapphire Reference Screenshot 1) */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <button
              onClick={handlePrevCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-7 h-7 stroke-[2.5] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNextCard}
              className="text-[#0083B0] hover:text-[#006095] p-2 transition-all group cursor-pointer"
              aria-label="Next card"
            >
              <ArrowRight className="w-7 h-7 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </button>
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
          SECTION 5: BRIEF ABOUT OUR BOOTSTRAP DEVELOPMENT SERVICES (Screenshot 1 Copy to Copy)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-snug">
                Brief About Our Bootstrap Development Services
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Hire Our Bootstrap Developers To Get App and Web Development Services. Benefits of Hiring them include:Our developers will produce your Bootstrap project in real-time and with 100 percent correctness.Our Bootstrap developers must have a history of completing all project deadlines on time and providing complete customer satisfaction.
                </p>
                <p>
                  Experience well-structured code and construct a next-generation solution with our safe, scalable, dependable, and high-quality software development services at an accessible price. Our Bootstrap developers have the most extraordinary communication abilities, so working with us will be effortless.
                </p>
              </div>
            </div>

            {/* Right Column: 1:1 Copy Vector Illustration (3 Team Members Collaborating Around Desk) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 540 360" className="w-full h-auto drop-shadow-sm font-sans">
                  {/* Soft light blue background shape */}
                  <path d="M 80 180 C 60 80, 200 40, 360 60 C 480 80, 520 220, 460 300 C 380 370, 160 350, 80 180 Z" fill="#D4E8F5" opacity="0.6" />

                  {/* Dashed Arc line connecting Lightbulb and React Icon */}
                  <path d="M 125 75 Q 260 -20 405 65" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="5,5" />

                  {/* 1. TOP LEFT LIGHTBULB GRAPHIC */}
                  <g transform="translate(110, 50)">
                    <line x1="15" y1="0" x2="15" y2="-8" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="0" y1="8" x2="-6" y2="4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="30" y1="8" x2="36" y2="4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="15" cy="18" r="14" fill="#38BDF8" />
                    <path d="M 8 26 L 22 26 L 20 34 L 10 34 Z" fill="#0284C7" />
                    <rect x="11" y="34" width="8" height="4" rx="1" fill="#64748B" />
                  </g>

                  {/* 2. SPEECH BUBBLE ABOVE LEFT PERSON */}
                  <g transform="translate(180, 120)">
                    <rect x="0" y="0" width="55" height="34" rx="14" fill="#0284C7" />
                    <path d="M 12 33 L 8 42 L 20 34 Z" fill="#0284C7" />
                    <circle cx="16" cy="17" r="3" fill="#FFFFFF" />
                    <circle cx="27.5" cy="17" r="3" fill="#FFFFFF" />
                    <circle cx="39" cy="17" r="3" fill="#FFFFFF" />
                  </g>

                  {/* 3. LEFT PERSON (Standing developer facing right) */}
                  <g transform="translate(110, 150)">
                    <rect x="22" y="110" width="14" height="90" rx="4" fill="#1E293B" />
                    <rect x="42" y="110" width="14" height="90" rx="4" fill="#1E293B" />
                    <ellipse cx="27" cy="200" rx="12" ry="5" fill="#0F172A" />
                    <ellipse cx="51" cy="200" rx="12" ry="5" fill="#0F172A" />
                    <path d="M 15 50 C 15 40, 60 40, 60 50 L 56 115 L 18 115 Z" fill="#38BDF8" />
                    <path d="M 55 52 L 85 85 L 105 78" stroke="#FFCC80" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M 55 52 L 85 85" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" fill="none" />
                    <path d="M 20 52 L 8 85 L 18 90" stroke="#FFCC80" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <path d="M 20 52 L 10 80" stroke="#38BDF8" strokeWidth="9" strokeLinecap="round" fill="none" />
                    <circle cx="36" cy="28" r="15" fill="#FFCC80" />
                    <path d="M 24 28 C 24 12, 40 10, 48 20 C 50 28, 44 32, 44 32 C 38 22, 28 22, 24 28 Z" fill="#1E293B" />
                  </g>

                  {/* 4. MIDDLE PERSON (Sitting developer at desk) */}
                  <g transform="translate(230, 200)">
                    <rect x="0" y="55" width="105" height="90" rx="6" fill="#0284C7" />
                    <path d="M 25 15 C 25 5, 80 5, 80 15 L 75 58 L 30 58 Z" fill="#1E293B" />
                    <rect x="35" y="32" width="45" height="28" rx="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
                    <circle cx="57.5" cy="46" r="4" fill="#0284C7" />
                    <rect x="25" y="57" width="65" height="4" rx="2" fill="#CBD5E1" />
                    <circle cx="52" cy="-4" r="14" fill="#FFCC80" />
                    <path d="M 40 -4 C 40 -18, 55 -18, 64 -10 C 66 -2, 60 2, 60 2 C 54 -6, 44 -6, 40 -4 Z" fill="#1E293B" />
                  </g>

                  {/* 5. TOP RIGHT REACT ATOM GRAPHIC */}
                  <g transform="translate(390, 40)">
                    <circle cx="25" cy="25" r="24" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="2" />
                    <ellipse cx="25" cy="25" rx="16" ry="6" fill="none" stroke="#0284C7" strokeWidth="2" transform="rotate(30 25 25)" />
                    <ellipse cx="25" cy="25" rx="16" ry="6" fill="none" stroke="#0284C7" strokeWidth="2" transform="rotate(90 25 25)" />
                    <ellipse cx="25" cy="25" rx="16" ry="6" fill="none" stroke="#0284C7" strokeWidth="2" transform="rotate(150 25 25)" />
                    <circle cx="25" cy="25" r="3.5" fill="#0284C7" />
                  </g>

                  {/* 6. RIGHT PERSON (Standing developer with arms raised) */}
                  <g transform="translate(350, 170)">
                    <rect x="22" y="90" width="13" height="90" rx="4" fill="#38BDF8" />
                    <rect x="40" y="90" width="13" height="90" rx="4" fill="#38BDF8" />
                    <ellipse cx="27" cy="180" rx="11" ry="5" fill="#0F172A" />
                    <ellipse cx="48" cy="180" rx="11" ry="5" fill="#0F172A" />
                    <path d="M 16 35 C 16 25, 58 25, 58 35 L 54 95 L 18 95 Z" fill="#FF7A59" />
                    <path d="M 20 38 L -10 20 L -25 30" stroke="#FFCC80" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <path d="M 20 38 L -8 22" stroke="#FF7A59" strokeWidth="9" strokeLinecap="round" fill="none" />
                    <path d="M 52 38 L 75 25 L 85 35" stroke="#FFCC80" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <path d="M 52 38 L 72 27" stroke="#FF7A59" strokeWidth="9" strokeLinecap="round" fill="none" />
                    <circle cx="36" cy="16" r="14" fill="#FFCC80" />
                    <path d="M 24 16 C 24 0, 42 -2, 50 8 C 52 16, 46 20, 46 20 C 38 10, 28 10, 24 16 Z" fill="#1E293B" />
                  </g>

                  {/* 7. BOOKS & PLANT ON RIGHT FLOOR */}
                  <g transform="translate(425, 305)">
                    <rect x="0" y="0" width="35" height="8" rx="2" fill="#0284C7" />
                    <rect x="3" y="-8" width="30" height="8" rx="2" fill="#F59E0B" />
                    <rect x="1" y="-16" width="33" height="8" rx="2" fill="#10B981" />
                  </g>
                  <g transform="translate(470, 280)">
                    <polygon points="5,35 30,35 25,60 10,60" fill="#1E293B" />
                    <path d="M 17 35 C 5 15, -10 25, 2 5 C 15 15, 16 28, 17 35 Z" fill="#0284C7" />
                    <path d="M 17 35 C 30 15, 45 25, 32 5 C 20 15, 18 28, 17 35 Z" fill="#38BDF8" />
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: WORLD WIDE TOP RATED BOOTSTRAP DEVELOPMENT COMPANY ON CLUTCH (Auto-scroll Marquee Awards Banner)
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Bootstrap Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: WHO EXACTLY IS A BOOTSTRAP DEVELOPER? (Screenshot 1 Copy to Copy)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Who Exactly Is A Bootstrap Developer?
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
                  Whether for Bootstrap UI design or bootstrap web applications, businesses need to hire bootstrap programmers with a high level of expertise who can provide high-quality work. The latter should align with the company's strategic objectives and customer needs. This is why front-end developers, particularly Bootstrap developers, constantly find it difficult to provide an appealing experience. Testing and debugging are crucial steps in the front-end development process, and we have Bootstrap Developers for Hire.
                </p>
                <p>
                  To minimize functional misunderstanding, testing and debugging tools exist in frameworks, which must be used with care. Hire Bootstrap Developers in India to increase web speed, such as compressing pictures and deleting extraneous code characters, without affecting the website's functionality. These factors may make a substantial impact when selecting a bootstrap programmer. Hire Bootstrap Developers in USA to develop a website that is both feature-rich and instantly deployable since it includes a variety of layouts and pre-built templates. Bootstrap is an open-source framework that allows developers to alter and tailor applications easily.
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
                  render: () => (
                    <svg viewBox="0 0 400 250" className="w-full h-full">
                      <rect x="0" y="0" width="400" height="250" rx="14" fill="#18191D" />
                      <rect x="0" y="0" width="400" height="34" rx="14" fill="#25262B" />
                      <rect x="0" y="20" width="400" height="14" fill="#25262B" />
                      <text x="200" y="22" textAnchor="middle" fill="#94A3B8" fontSize="13" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">VEHICLE-DATA-LOGGING</text>
                      <circle cx="16" cy="17" r="4" fill="#EF4444" />
                      <circle cx="28" cy="17" r="4" fill="#F59E0B" />
                      <circle cx="40" cy="17" r="4" fill="#10B981" />

                      <rect x="15" y="44" width="160" height="190" rx="8" fill="#212228" stroke="#334155" strokeWidth="1" />
                      <path d="M 25 90 C 50 70, 90 120, 130 90 C 150 75, 160 110, 165 140" fill="none" stroke="#0083B0" strokeWidth="3" />
                      <circle cx="90" cy="95" r="5" fill="#38BDF8" />
                      <rect x="25" y="160" width="140" height="12" rx="3" fill="#0083B0" opacity="0.6" />

                      <rect x="185" y="44" width="200" height="55" rx="8" fill="#212228" stroke="#334155" strokeWidth="1" />
                      <rect x="195" y="54" width="50" height="35" rx="5" fill="#EF4444" />
                      <text x="220" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">98%</text>
                      
                      <rect x="255" y="54" width="50" height="35" rx="5" fill="#F59E0B" />
                      <text x="280" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">91%</text>
                      
                      <rect x="315" y="54" width="50" height="35" rx="5" fill="#10B981" />
                      <text x="340" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">34%</text>

                      <rect x="185" y="108" width="200" height="126" rx="8" fill="#212228" stroke="#334155" strokeWidth="1" />
                      <path d="M 195 200 L 220 180 L 250 190 L 280 150 L 310 165 L 340 135 L 375 160" fill="none" stroke="#38BDF8" strokeWidth="2.5" />
                      <path d="M 195 200 L 220 180 L 250 190 L 280 150 L 310 165 L 340 135 L 375 160 L 375 220 L 195 220 Z" fill="#38BDF8" opacity="0.15" />
                    </svg>
                  )
                },
                {
                  id: 'car-wash',
                  title: 'Car Wash App Development',
                  render: () => (
                    <svg viewBox="0 0 400 250" className="w-full h-full">
                      <rect x="0" y="0" width="400" height="250" rx="14" fill="#F4F4F6" />
                      <circle cx="35" cy="30" r="14" fill="#F59E0B" />
                      <text x="35" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900">B</text>
                      <text x="56" y="28" fill="#1E293B" fontSize="9" fontWeight="900">Bee Car</text>
                      <text x="56" y="38" fill="#64748B" fontSize="7" fontWeight="700">CARE</text>

                      <rect x="190" y="60" width="180" height="36" rx="6" fill="#FDE047" opacity="0.8" />
                      <text x="280" y="84" textAnchor="middle" fill="#854D0E" fontSize="16" fontWeight="900" letterSpacing="1">CAR WASH</text>

                      <g transform="translate(130, 70)">
                        <rect x="0" y="0" width="85" height="165" rx="14" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                        <rect x="30" y="6" width="25" height="3" rx="1.5" fill="#94A3B8" />
                        <rect x="10" y="18" width="65" height="40" rx="6" fill="#FEF08A" />
                        <circle cx="24" cy="38" r="8" fill="#F59E0B" />
                        <rect x="10" y="66" width="65" height="80" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                        <rect x="18" y="74" width="49" height="6" rx="2" fill="#0284C7" />
                        <rect x="18" y="86" width="38" height="5" rx="2" fill="#94A3B8" />
                      </g>

                      <g transform="translate(230, 110)">
                        <path d="M 10 45 Q 25 20, 60 18 Q 95 18, 115 45 L 140 45 C 148 45, 150 55, 145 65 L 5 65 C 0 55, 2 45, 10 45 Z" fill="#EAB308" />
                        <path d="M 32 40 Q 42 24, 65 24 L 65 40 Z" fill="#38BDF8" opacity="0.8" />
                        <path d="M 70 24 Q 90 24, 102 40 L 70 40 Z" fill="#38BDF8" opacity="0.8" />
                        <circle cx="35" cy="65" r="14" fill="#1E293B" />
                        <circle cx="35" cy="65" r="6" fill="#94A3B8" />
                        <circle cx="115" cy="65" r="14" fill="#1E293B" />
                        <circle cx="115" cy="65" r="6" fill="#94A3B8" />
                      </g>

                      <circle cx="380" cy="140" r="3" fill="#38BDF8" />
                      <circle cx="370" cy="125" r="4" fill="#0284C7" />
                      <circle cx="385" cy="155" r="2.5" fill="#38BDF8" />

                      <text x="280" y="215" textAnchor="middle" fill="#CBD5E1" fontSize="20" fontWeight="900" opacity="0.6">Car Wash Application</text>
                    </svg>
                  )
                },
                {
                  id: 'taxi-booking',
                  title: 'Taxi Booking-App Development',
                  render: () => (
                    <svg viewBox="0 0 400 250" className="w-full h-full">
                      <rect x="0" y="0" width="400" height="250" rx="14" fill="#EBECEC" />
                      
                      <text x="30" y="70" fill="#D1D5DB" fontSize="38" fontWeight="900">Quick</text>
                      <text x="30" y="130" fill="#D1D5DB" fontSize="38" fontWeight="900">Booking</text>
                      <text x="30" y="190" fill="#D1D5DB" fontSize="38" fontWeight="900">Application</text>

                      <g transform="translate(30, 80)">
                        <circle cx="6" cy="6" r="5" fill="#F97316" />
                        <text x="18" y="10" fill="#1E293B" fontSize="16" fontWeight="900">Quick Taxi</text>
                        <text x="18" y="28" fill="#F97316" fontSize="16" fontWeight="900">Booking</text>
                        <circle cx="6" cy="42" r="5" fill="#F97316" />
                        <text x="18" y="46" fill="#1E293B" fontSize="16" fontWeight="900">Application</text>
                      </g>

                      <g transform="translate(200, 30)">
                        <rect x="0" y="0" width="90" height="185" rx="16" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                        <rect x="32" y="6" width="26" height="3" rx="1.5" fill="#94A3B8" />
                        <rect x="8" y="18" width="74" height="155" rx="8" fill="#F1F5F9" />
                        <path d="M 15 40 L 75 80 L 35 140 L 80 160" fill="none" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
                        <circle cx="45" cy="60" r="6" fill="#F97316" />
                        <rect x="20" y="135" width="50" height="24" rx="6" fill="#1E293B" />
                      </g>

                      <g transform="translate(270, 45)">
                        <rect x="0" y="0" width="92" height="185" rx="16" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3.5" />
                        <rect x="33" y="6" width="26" height="3" rx="1.5" fill="#94A3B8" />
                        <rect x="8" y="18" width="76" height="155" rx="8" fill="#F8FAFC" />
                        <rect x="26" y="55" width="40" height="30" rx="6" fill="#FFF7ED" stroke="#F97316" strokeWidth="1" />
                        <path d="M 34 72 Q 40 62, 46 62 Q 52 62, 58 72 Z" fill="#F97316" />
                        <circle cx="38" cy="76" r="3" fill="#1E293B" />
                        <circle cx="54" cy="76" r="3" fill="#1E293B" />
                        <rect x="18" y="138" width="56" height="22" rx="6" fill="#F97316" />
                        <text x="46" y="153" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900">Confirm</text>
                      </g>
                    </svg>
                  )
                }
              ].map((proj) => (
                <div key={proj.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="h-52 w-full bg-slate-50 flex items-center justify-center p-2">
                    {proj.render()}
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
                Sapphire
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
                The Expertise Of Our Bootstrap Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                Our Bootstrap Developers Are Available On An Hourly Basis At Very Affordable Rates. Their Expertise Includes:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Bootstrap Consultation',
                  desc: 'Hire Bootstrap Developers in UK who will assist you in mastering Bootstrap. Our professionals will guide you through the process and assist you in making more intelligent decisions.',
                  bgColor: 'bg-purple-50',
                  iconColor: 'text-purple-600',
                  IconComp: Laptop
                },
                {
                  title: 'App Designing',
                  desc: 'If you have a concept and have chosen to go forward with bootstrap development, our expert designers will assist you in creating a visual representation. This signifies that our front-end developers will develop a prototype of your application.',
                  bgColor: 'bg-emerald-50',
                  iconColor: 'text-emerald-600',
                  IconComp: LayoutGrid
                },
                {
                  title: 'App Development',
                  desc: 'Hire Bootstrap Developers in Australia to create responsive apps with ease. Our developers are well-versed in widgets and templates, ensuring optimal implementation.',
                  bgColor: 'bg-orange-50',
                  iconColor: 'text-orange-600',
                  IconComp: Code2
                },
                {
                  title: 'App Customization',
                  desc: 'We can alter an old solution, including contemporary features, and enhance its efficacy. Hire Bootstrap Developers in Canada if you seek professional assistance to improve and optimize the application.',
                  bgColor: 'bg-amber-50',
                  iconColor: 'text-amber-600',
                  IconComp: Sliders
                },
                {
                  title: 'Application Recording',
                  desc: 'Whether a tiny start-up or a well-established business, Hire Bootstrap Developers in UAE who will assist you with website re-coding at affordable prices.',
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
        title="Hire Bootstrap Developer In 4 Easy Steps"
        subtitle="Bootstrap Developer Offers a number of advantages over another platform. Some of them are:"
      />

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
