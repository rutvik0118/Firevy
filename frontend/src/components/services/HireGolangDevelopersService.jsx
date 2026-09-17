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
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SeasonedExpertsTeamSection from '../common/SeasonedExpertsTeamSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutKeyMetrics from '../home/AboutKeyMetrics';
import SapphireFaqSection from '../common/SapphireFaqSection';
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
  Scale,
  Sparkles,
  Smartphone,
  CheckCircle,
  Terminal,
  Activity,
  Box,
  Share2
} from 'lucide-react';

export const HireGolangDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // States for tabs
  const [leverageTab, setLeverageTab] = useState(0);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10,000 - $25,000',
    model: 'Dedicated Golang Team ($21/hr)',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$10,000 - $25,000',
        model: 'Dedicated Golang Team ($21/hr)',
        message: ''
      });
    }, 4000);
  };

  // 6 Flexible Hiring Model Cards
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
        '8 hours a day, 5 days a week',
        'Minimum: 2 months',
        'Dedicated Golang backend engineers working exclusively for you'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Developer',
      subtitle: 'Starting From',
      price: '$21/Hour',
      IconComp: Clock,
      isFeatured: true,
      saveText: 'POPULAR CHOICE',
      badgeText: 'Most Flexible',
      features: [
        'Pay as you go pricing',
        'Direct communication via Slack/Teams',
        'Weekly timesheets & git commit logs',
        'Zero long-term lock-in'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly Dedicated Squad',
      subtitle: 'Full Squad with Tech Lead',
      price: 'Custom Monthly',
      IconComp: Users,
      isFeatured: false,
      saveText: 'SAVE 15%',
      badgeText: 'High Velocity',
      features: [
        'Senior Go developers + QA engineer',
        'Agile 2-week sprint deliverables',
        'Daily standups & CI/CD automation',
        'Guaranteed 99.9% sprint velocity'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly Dedicated Pod',
      subtitle: '3 Months Committed Sprint',
      price: 'Custom Quarterly',
      IconComp: Layers,
      isFeatured: false,
      saveText: 'SAVE 20%',
      badgeText: 'Scalable',
      features: [
        'Dedicated microservices architecture pod',
        'Free DevOps & Kubernetes orchestration',
        'gRPC & high-concurrency API tuning',
        'Full IP ownership & strict NDA'
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Custom Squad',
      subtitle: 'Long Term Strategic Scale',
      price: 'Custom Retainer',
      IconComp: ShieldCheck,
      isFeatured: false,
      saveText: 'SAVE 25%',
      badgeText: 'Enterprise',
      features: [
        'End-to-end distributed systems architecture',
        '24/7 SRE & cloud infrastructure support',
        'Custom benchmark load testing (100k+ RPS)',
        'Executive sprint reports & SLA guarantees'
      ]
    }
  ];

  // Infinite carousel handlers
  const handlePrevCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev <= 0 ? hiringModelCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setEnableTransition(true);
    setCardSlideIndex((prev) => (prev >= hiringModelCards.length - 1 ? 0 : prev + 1));
  };

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(0);
    }
  };

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      handleNextCard();
    }, 3500);
    return () => clearInterval(interval);
  }, [cardSlideIndex, isCarouselHovered]);

  // Golang FAQs
  const faqs = [
    {
      q: '1. Why should I hire Golang developers from Firevy.co?',
      a: 'Our Golang developers are top 1% vetted distributed systems engineers with extensive experience in Go microservices, Gin, Fiber, Echo, gRPC, Docker, Kubernetes, and high-throughput concurrent architecture.'
    },
    {
      q: '2. What kind of applications can your Go developers build?',
      a: 'Our Go engineers build ultra-fast microservices, cloud-native backend APIs, high-frequency trading platforms, IoT streaming pipelines, real-time messaging systems, and enterprise data processing engines.'
    },
    {
      q: '3. What is the hourly rate to hire dedicated Golang developers?',
      a: 'Our dedicated Golang developer rates start from $21/Hourly* on flexible part-time, full-time, or hourly engagement models.'
    },
    {
      q: '4. How quickly can your Golang developers join our existing project?',
      a: 'We can onboard skilled Golang engineers within 24 to 48 hours after understanding your project requirements, architecture, and technology stack.'
    },
    {
      q: '5. Do you provide 100% intellectual property (IP) and NDA protection?',
      a: 'Yes, we sign strict non-disclosure agreements (NDAs) prior to onboarding and transfer 100% source code and intellectual property ownership to you.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Dedicated Golang Developers | Expert Go Programmers at $21/Hr"
        description="Hire dedicated Golang developers from Firevy.co. Expert Go programmers for high-concurrency microservices, cloud-native APIs, and distributed systems. Flexible models, 100% IP ownership, and instant onboarding."
        canonical="/services/hire-golang-developers"
      />

      {/* ============================================================
          HERO SECTION (Matching Reference Design 100%)
          ============================================================ */}
      <section className="pt-28 pb-16 bg-white text-slate-900 relative overflow-hidden font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column Text & Action */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Golang Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When you employ skilled Golang developers from us, we will collaborate with you throughout all phases to create high-performance.
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 pb-1">
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">200+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">20+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">2800+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-[32px] font-[900] text-slate-900 tracking-tight leading-none mb-1.5">320+</div>
                  <div className="text-xs sm:text-[13px] font-[500] text-slate-600 leading-tight">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box (Matching Screenshot 1:1) */}
              <div className="space-y-2.5 pt-2">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[14px] p-2 pl-4 pr-2 w-full max-w-[390px] shadow-md shadow-[#0089a8]/20">
                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-5 h-5 text-white stroke-[2.5]" />
                    <span className="text-lg sm:text-[20px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-slate-800 hover:bg-slate-50 font-[700] px-5 py-2.5 rounded-[10px] text-sm transition-all shadow-sm flex items-center justify-center font-sans"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Golang Monitor Vector Graphic */}
            <div className="lg:col-span-6 relative flex items-center justify-center p-2">
              <div className="relative w-full max-w-[540px] select-none">
                <svg viewBox="0 0 600 480" className="w-full h-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background Delicate Cyan Gears & Dashed Rings */}
                  <g opacity="0.35">
                    {/* Top Right Gear */}
                    <circle cx="410" cy="90" r="48" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M410 32v14M410 134v14M352 90h14M454 90h14M369 49l10 10M441 121l10 10M369 131l10-10M441 59l10-10" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Bottom Left Gear */}
                    <circle cx="110" cy="320" r="42" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M110 268v12M110 360v12M58 320h12M150 320h12" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Far Right Gear */}
                    <circle cx="525" cy="200" r="32" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>

                  {/* Connecting dashed line accents */}
                  <path d="M140 190 L 175 190" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M490 110 L 525 110" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <path d="M485 300 L 520 300" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Monitor Stand */}
                  <path d="M300 340 L 300 375" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
                  <path d="M250 375 L 350 375" stroke="#64748B" strokeWidth="7" strokeLinecap="round" />
                  <ellipse cx="300" cy="377" rx="55" ry="6" fill="#94A3B8" />

                  {/* Desktop Monitor Outer Bezel */}
                  <rect x="155" y="105" width="345" height="235" rx="14" fill="#0F172A" />
                  <rect x="160" y="110" width="335" height="220" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
                  <rect x="160" y="110" width="335" height="24" rx="10" fill="#00ADD8" />
                  <rect x="160" y="122" width="335" height="12" fill="#00ADD8" />

                  {/* 3 Window Control Dots (White/Yellow/White) */}
                  <circle cx="174" cy="122" r="3.5" fill="#FFFFFF" />
                  <circle cx="186" cy="122" r="3.5" fill="#FEF08A" />
                  <circle cx="198" cy="122" r="3.5" fill="#FFFFFF" />

                  {/* Code Lines inside Editor on Left Side */}
                  <g opacity="0.65">
                    <rect x="175" y="146" width="90" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="156" width="130" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="166" width="70" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="176" width="110" height="4" rx="2" fill="#CBD5E1" />
                    
                    <rect x="175" y="196" width="120" height="4" rx="2" fill="#94A3B8" />
                    <rect x="185" y="206" width="80" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="185" y="216" width="100" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="226" width="60" height="4" rx="2" fill="#CBD5E1" />
                    
                    <rect x="175" y="246" width="140" height="4" rx="2" fill="#94A3B8" />
                    <rect x="175" y="256" width="95" height="4" rx="2" fill="#CBD5E1" />
                    <rect x="175" y="266" width="125" height="4" rx="2" fill="#94A3B8" />
                    <rect x="185" y="276" width="75" height="4" rx="2" fill="#CBD5E1" />
                  </g>

                  {/* Cyan Golang Gopher Mascot + =GO on Right Side of Screen */}
                  <g transform="translate(345, 160)">
                    {/* Gopher Body / Head */}
                    <ellipse cx="28" cy="40" rx="20" ry="24" fill="#00ADD8" />
                    {/* Gopher Ears */}
                    <circle cx="12" cy="22" r="5" fill="#00ADD8" />
                    <circle cx="12" cy="22" r="2.5" fill="#BAE6FD" />
                    <circle cx="44" cy="22" r="5" fill="#00ADD8" />
                    <circle cx="44" cy="22" r="2.5" fill="#BAE6FD" />
                    {/* Gopher Big Round Eyes */}
                    <circle cx="21" cy="35" r="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
                    <circle cx="23" cy="35" r="3" fill="#0F172A" />
                    <circle cx="35" cy="35" r="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
                    <circle cx="33" cy="35" r="3" fill="#0F172A" />
                    {/* Snout & Nose */}
                    <ellipse cx="28" cy="45" rx="5" ry="3.5" fill="#FFFFFF" />
                    <circle cx="28" cy="43" r="2" fill="#0F172A" />
                    {/* Two Front Teeth */}
                    <rect x="25" y="47" width="2.5" height="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.5" />
                    <rect x="28.5" y="47" width="2.5" height="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="0.5" />

                    {/* =GO Text Banner */}
                    <g transform="translate(56, 26)">
                      <text x="0" y="22" fill="#00ADD8" fontSize="28" fontWeight="900" fontFamily="sans-serif" letterSpacing="-1">=GO</text>
                    </g>
                  </g>

                  {/* Surrounding Tech Badges (Matching Screenshot 1:1) */}
                  {/* 1. Top Right: SQL Badge */}
                  <g transform="translate(488, 82)">
                    <rect x="0" y="0" width="50" height="50" rx="12" fill="#BAE6FD" opacity="0.85" />
                    <rect x="8" y="8" width="34" height="34" rx="8" fill="#0284C7" />
                    <text x="25" y="27" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">SQL</text>
                    <text x="25" y="36" fill="#FFFFFF" fontSize="5.5" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">RDBMS</text>
                  </g>

                  {/* 2. Left: Git Badge */}
                  <g transform="translate(85, 160)">
                    <rect x="0" y="0" width="52" height="52" rx="12" fill="#BAE6FD" opacity="0.85" />
                    <circle cx="26" cy="26" r="17" fill="#0284C7" />
                    <text x="26" y="30" fill="#FFFFFF" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">git</text>
                    <text x="26" y="49" fill="#0284C7" fontSize="6.5" fontWeight="700" textAnchor="middle">v2.4</text>
                  </g>

                  {/* 3. Bottom Left: Jaeger / Tool Badge */}
                  <g transform="translate(118, 300)">
                    <rect x="0" y="0" width="48" height="48" rx="12" fill="#BAE6FD" opacity="0.85" />
                    <circle cx="24" cy="21" r="10" fill="#0284C7" />
                    <path d="M20 18 L 28 24 M 20 24 L 28 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    <text x="24" y="42" fill="#0284C7" fontSize="6.5" fontWeight="800" textAnchor="middle">Jaeger</text>
                  </g>

                  {/* 4. Bottom Right: HTTP Badge */}
                  <g transform="translate(485, 252)">
                    <rect x="0" y="0" width="52" height="52" rx="12" fill="#BAE6FD" opacity="0.85" />
                    <circle cx="26" cy="22" r="12" fill="#0284C7" />
                    <text x="26" y="24" fill="#FFFFFF" fontSize="6" fontWeight="900" textAnchor="middle">http://</text>
                    <text x="26" y="43" fill="#0284C7" fontSize="7.5" fontWeight="800" textAnchor="middle">HTTP</text>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          BRAND LOGO MARQUEE (Matching User Screenshot Row 2)
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION 2: Well-Vetted Golang Developers Available With Us (Matching Screenshot 100%)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Graphic Illustration: 3 Developers around Go desk (Matching Screenshot 1:1) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[540px] select-none">
                <svg viewBox="0 0 580 440" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Soft Light-Blue Background Oval / Blob */}
                  <path d="M50 260 C50 140 160 80 290 80 C420 80 530 140 530 260 C530 370 420 400 290 400 C160 400 50 370 50 260 Z" fill="#E0F2FE" opacity="0.55" />

                  {/* Floor Line */}
                  <line x1="45" y1="410" x2="535" y2="410" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Floating Cyan/Blue Gears above desk */}
                  <g>
                    {/* Large Center Gear */}
                    <g transform="translate(285, 125)">
                      <circle cx="0" cy="0" r="36" stroke="#0284C7" strokeWidth="12" fill="none" opacity="0.8" />
                      <circle cx="0" cy="0" r="16" fill="#FFFFFF" />
                      {/* Cogs */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <rect
                          key={deg}
                          x="-5"
                          y="-46"
                          width="10"
                          height="12"
                          rx="2"
                          fill="#0284C7"
                          opacity="0.8"
                          transform={`rotate(${deg})`}
                        />
                      ))}
                    </g>

                    {/* Medium Gear Top Right */}
                    <g transform="translate(355, 175)">
                      <circle cx="0" cy="0" r="22" stroke="#38BDF8" strokeWidth="8" fill="none" opacity="0.85" />
                      <circle cx="0" cy="0" r="10" fill="#FFFFFF" />
                      {[0, 60, 120, 180, 240, 300].map((deg) => (
                        <rect
                          key={deg}
                          x="-3.5"
                          y="-28"
                          width="7"
                          height="8"
                          rx="1.5"
                          fill="#38BDF8"
                          opacity="0.85"
                          transform={`rotate(${deg})`}
                        />
                      ))}
                    </g>
                  </g>

                  {/* Minimalist Desk & Monitor in Center */}
                  <g transform="translate(230, 280)">
                    {/* Table top */}
                    <rect x="0" y="55" width="130" height="7" rx="3" fill="#334155" />
                    {/* Desk Legs */}
                    <line x1="15" y1="62" x2="5" y2="130" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                    <line x1="115" y1="62" x2="125" y2="130" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Desk Monitor */}
                    {/* Stand */}
                    <rect x="58" y="42" width="14" height="14" fill="#64748B" />
                    <rect x="50" y="53" width="30" height="3" rx="1.5" fill="#475569" />
                    {/* Screen */}
                    <rect x="25" y="0" width="80" height="44" rx="4" fill="#0F172A" />
                    <rect x="27" y="2" width="76" height="40" rx="3" fill="#FFFFFF" />
                    {/* =GO Logo inside monitor */}
                    <text x="65" y="28" fill="#00ADD8" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">=GO</text>
                  </g>

                  {/* Left Developer (Male Standing & Communicating) */}
                  <g transform="translate(90, 205)">
                    {/* Head & Hair */}
                    <circle cx="45" cy="22" r="10" fill="#FDBA74" />
                    <path d="M37 18 C37 10, 53 10, 54 18 C54 16, 50 13, 44 14 Z" fill="#0F172A" />
                    {/* Torso / Light Blue Shirt */}
                    <path d="M33 34 L 57 34 L 54 90 L 30 90 Z" fill="#93C5FD" />
                    {/* Left Arm Gesturing Forward */}
                    <path d="M33 36 L 68 55 L 75 48 L 50 36 Z" fill="#FDBA74" />
                    <path d="M33 36 L 46 45 L 38 52 Z" fill="#93C5FD" />
                    {/* Right Arm */}
                    <path d="M54 36 L 65 65 L 58 67 L 50 40 Z" fill="#93C5FD" />
                    {/* Navy Trousers */}
                    <path d="M30 90 L 54 90 L 58 185 L 47 185 L 43 120 L 35 185 L 24 185 Z" fill="#1E293B" />
                    {/* Shoes */}
                    <ellipse cx="23" cy="186" rx="10" ry="4" fill="#0F172A" />
                    <ellipse cx="60" cy="186" rx="10" ry="4" fill="#0F172A" />
                  </g>

                  {/* Center Developer (Male Standing & Thinking) */}
                  <g transform="translate(165, 195)">
                    {/* Head & Hair */}
                    <circle cx="45" cy="22" r="10" fill="#FDBA74" />
                    <path d="M36 17 C36 8, 54 8, 55 17 C55 14, 49 12, 43 13 Z" fill="#0F172A" />
                    {/* Torso / Blue Shirt */}
                    <path d="M32 34 L 58 34 L 55 95 L 29 95 Z" fill="#0284C7" />
                    {/* Left Arm raised to Head */}
                    <path d="M56 36 L 68 20 L 56 16 L 48 30 Z" fill="#0284C7" />
                    <circle cx="56" cy="16" r="4" fill="#FDBA74" />
                    {/* Right Arm hanging */}
                    <path d="M32 36 L 24 75 L 30 76 L 36 40 Z" fill="#0284C7" />
                    <circle cx="26" cy="77" r="4" fill="#FDBA74" />
                    {/* Navy Trousers */}
                    <path d="M29 95 L 55 95 L 58 195 L 46 195 L 42 125 L 32 195 L 20 195 Z" fill="#1E293B" />
                    {/* Shoes */}
                    <ellipse cx="18" cy="196" rx="11" ry="4" fill="#0F172A" />
                    <ellipse cx="60" cy="196" rx="11" ry="4" fill="#0F172A" />
                  </g>

                  {/* Right Developer (Female in Yellow Top & Ponytail) */}
                  <g transform="translate(365, 215)">
                    {/* Ponytail & Head */}
                    <path d="M52 14 C58 14, 62 25, 56 32 Z" fill="#0F172A" />
                    <circle cx="45" cy="22" r="9.5" fill="#FDBA74" />
                    <path d="M37 17 C37 10, 52 10, 53 17 Z" fill="#0F172A" />
                    {/* Yellow Top */}
                    <path d="M34 33 L 56 33 L 54 88 L 32 88 Z" fill="#FBBF24" />
                    {/* Left Arm holding Stylus Pointing to Monitor */}
                    <path d="M34 36 L 0 58 L -2 52 L 30 34 Z" fill="#FDBA74" />
                    <line x1="-2" y1="52" x2="-10" y2="46" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Right Arm */}
                    <path d="M54 36 L 62 70 L 56 71 L 49 40 Z" fill="#FBBF24" />
                    <circle cx="60" cy="72" r="3.5" fill="#FDBA74" />
                    {/* Navy Pants */}
                    <path d="M32 88 L 54 88 L 56 175 L 45 175 L 42 120 L 32 175 L 22 175 Z" fill="#1E293B" />
                    {/* Shoes */}
                    <ellipse cx="20" cy="176" rx="10" ry="3.5" fill="#0F172A" />
                    <ellipse cx="58" cy="176" rx="10" ry="3.5" fill="#0F172A" />
                  </g>

                  {/* Small Potted Plant on the Right Floor */}
                  <g transform="translate(470, 355)">
                    <polygon points="12,22 36,22 30,55 18,55" fill="#1E293B" />
                    <path d="M24 22 C14 5, 20 -8, 28 -5 C27 8, 26 15, 24 22 Z" fill="#0284C7" />
                    <path d="M18 22 C6 10, 8 0, 16 5 C17 12, 18 18, 18 22 Z" fill="#38BDF8" />
                    <path d="M30 22 C42 10, 40 0, 32 5 C31 12, 30 18, 30 22 Z" fill="#0369A1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Text Column: Exact Text from Reference Screenshot */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                Well-Vetted Golang<br className="hidden sm:inline" /> Developers Available With Us
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                You may hire Golang developers hourly or full time (dedicated monthly). In addition to receiving their undivided attention for your projects, you can save up to sixty percent on their development cost when you hire Dedicated Golang Web Developers from us. Our strength is in the fact that we have on staff a team of in-house senior golang developers that are highly skilled, knowledgeable, devoted, and professional and who consistently provide outcomes that meet your expectations. We strive golang consulting services with a perfect balance of reasonable service prices and acceptable quality. This is the most significant part of our golang engineer that sets us apart from other companies in the market.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: Developer Proficiency Comparison Table (Matching Reference 1:1)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Golang Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Hire dedicated Golang developers to meet your enterprise throughput requirements by leveraging our technical excellence.
            </p>
          </div>

          {/* Pricing & Roles Table */}
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="min-w-[640px] rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005F96] text-white">
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Range of Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Junior Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base border-r border-[#004e7c] w-1/4">
                      Mid-Level Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm sm:text-base w-1/4">
                      Senior Developers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-[15px] font-[600] text-slate-800">
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Approx Cost
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">
                      $18
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white font-[700] text-slate-900">
                      $24
                    </td>
                    <td className="py-4 px-6 bg-white font-[700] text-slate-900">
                      $32
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Years of Experience
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      1-3 Years
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      3-5 Years
                    </td>
                    <td className="py-4 px-6 bg-white">
                      5+ Years
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Project Manager
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Time Zone Flexibility
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Quality Guarantee
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      Yes
                    </td>
                    <td className="py-4 px-6 bg-white">
                      Yes
                    </td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="py-4 px-6 bg-[#005F96] text-white font-[800] border-r border-[#004e7c]">
                      Working Hours
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      40 hours/ Week
                    </td>
                    <td className="py-4 px-6 border-r border-slate-200 bg-white">
                      40 hours/ Week
                    </td>
                    <td className="py-4 px-6 bg-white">
                      40 hours/ Week
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: Brief About Our Golang Development Services
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headings & Paragraphs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Golang<br className="hidden sm:inline" /> Development Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                When developing next-generation microservices and distributed cloud infrastructure, take advantage of world-class Golang coding practices. Gain unmatched performance in building backend APIs that handle extreme throughput and scale effortlessly.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our Golang developers engineer cloud-native microservices with Docker, Kubernetes, gRPC, and high-performance databases. Benefit from compiled Go binaries running across Linux, AWS, GCP, and Azure with minimal cloud server cost and maximal uptime.
              </p>
            </div>

            {/* Right Column: Custom Developer Workstation Vector Graphic */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-[560px] select-none">
                <svg viewBox="0 0 600 480" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Floor Line */}
                  <line x1="40" y1="440" x2="560" y2="440" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Left Plant Pot & Foliage */}
                  <g transform="translate(60, 360)">
                    <ellipse cx="25" cy="76" rx="14" ry="4" fill="#64748B" opacity="0.3" />
                    <polygon points="12,40 38,40 32,76 18,76" fill="#1E3A8A" />
                    <path d="M12 40 C 0 20, 5 0, 16 2 C 18 18, 16 35, 12 40 Z" fill="#38BDF8" />
                    <path d="M25 40 C 20 15, 26 -5, 36 0 C 34 18, 30 35, 25 40 Z" fill="#0284C7" />
                    <path d="M38 40 C 48 22, 45 5, 38 8 C 36 20, 37 32, 38 40 Z" fill="#0369A1" />
                  </g>

                  {/* Right Plant Pot & Foliage */}
                  <g transform="translate(500, 380)">
                    <ellipse cx="20" cy="56" rx="12" ry="3.5" fill="#64748B" opacity="0.3" />
                    <polygon points="10,25 30,25 26,56 14,56" fill="#0F172A" />
                    <path d="M20 25 C 10 5, 15 -10, 26 -8 C 24 6, 22 18, 20 25 Z" fill="#0284C7" />
                    <path d="M10 25 C 0 10, 4 0, 12 5 C 14 14, 12 20, 10 25 Z" fill="#38BDF8" />
                  </g>

                  {/* Workstation Desk */}
                  <g transform="translate(230, 365)">
                    <rect x="0" y="0" width="200" height="10" rx="3" fill="#1E293B" />
                    <rect x="15" y="10" width="6" height="65" fill="#334155" />
                    <rect x="120" y="10" width="70" height="55" rx="3" fill="#334155" />
                    <line x1="120" y1="28" x2="190" y2="28" stroke="#1E293B" strokeWidth="1.5" />
                    <line x1="120" y1="46" x2="190" y2="46" stroke="#1E293B" strokeWidth="1.5" />
                  </g>

                  {/* Main Desktop Coding Monitors on Desk */}
                  <g transform="translate(260, 275)">
                    <rect x="15" y="55" width="30" height="5" rx="2" fill="#64748B" />
                    <rect x="28" y="45" width="4" height="12" fill="#64748B" />
                    <rect x="0" y="0" width="75" height="50" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                    <rect x="0" y="0" width="75" height="8" rx="4" fill="#00ADD8" />
                    <line x1="8" y1="16" x2="35" y2="16" stroke="#00ADD8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="22" x2="60" y2="22" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="14" y1="28" x2="45" y2="28" stroke="#00ADD8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="34" x2="55" y2="34" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  <g transform="translate(345, 275)">
                    <rect x="15" y="55" width="30" height="5" rx="2" fill="#64748B" />
                    <rect x="28" y="45" width="4" height="12" fill="#64748B" />
                    <rect x="0" y="0" width="75" height="50" rx="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                    <rect x="0" y="0" width="75" height="8" rx="4" fill="#0284C7" />
                    <line x1="8" y1="16" x2="45" y2="16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="8" y1="22" x2="60" y2="22" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                    <line x1="14" y1="28" x2="50" y2="28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Sitting Male Developer */}
                  <g transform="translate(225, 280)">
                    <circle cx="28" cy="18" r="10" fill="#FBBF24" />
                    <path d="M20 12 C 20 2, 38 -2, 38 10 C 38 10, 35 6, 28 8 C 22 10, 20 12, 20 12 Z" fill="#1E293B" />
                    <path d="M16 28 L 42 28 L 38 72 L 14 72 Z" fill="#00ADD8" />
                    <path d="M22 32 L 55 60 L 68 62 L 60 70 L 35 45 Z" fill="#FBBF24" />
                    <path d="M14 72 L 44 72 L 52 110 L 40 145 L 30 145 L 36 112 L 14 112 Z" fill="#1E293B" />
                    <ellipse cx="38" cy="148" rx="8" ry="3.5" fill="#0F172A" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: Flexible Hiring Models (Carousel)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Hire Golang Developers from Firevy.co Starts from,
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
                          ? 'border-2 border-[#00ADD8] shadow-xl ring-4 ring-[#00ADD8]/10 scale-[1.02]'
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

          {/* Bottom Center Navigation Controls */}
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

      {/* 4 Steps Hiring Process */}
      <HireDeveloper4Steps
        title="Hire Golang Developers in 4 Easy Steps"
        subtitle="Follow our streamlined onboarding process to bring senior Go engineers onto your team within 48 hours."
      />

      {/* Seasoned Experts Team */}
      <SeasonedExpertsTeamSection />

      {/* Tech Stack Proficient Grid */}
      <TechStackProficientGrid />

      {/* Leverage Expertise Grid */}
      <LeverageExpertiseGridSection
        activeTab={leverageTab}
        setActiveTab={setLeverageTab}
      />

      {/* Innovative Solution Video Section */}
      <InnovativeSolutionVideo />

      {/* Digital Transformation Case Studies */}
      <DigitalTransformationCaseStudies />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Video Testimonials Story */}
      <VideoTestimonialsStory />

      {/* Industry Focused Insights */}
      <IndustryFocusedInsightsSection />

      {/* Key Metrics / Numbers */}
      <AboutKeyMetrics />

      {/* Work Process Grid */}
      <WorkProcessGrid />

      {/* Engagement Models Section */}
      <EngagementModelsSection />

      {/* Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection
        title="Frequently Asked Questions: Hire Golang Developers"
        faqList={faqs}
      />

      {/* Recent Blogs */}
      <RecentBlogsSection />

      {/* Premium Services Grid */}
      <PremiumServicesGrid companyName="Sapphire" />

      {/* ============================================================
          SECTION: What Sets Us Apart As Golang Development? (Matching User Screenshot 1:1)
          ============================================================ */}
      <section id="quote-form" className="py-20 bg-[#f8fbfe] font-sans text-slate-900 border-t border-slate-200">
        <Container>
          {/* Centered Main Header & Subheader */}
          <div className="text-center max-w-5xl mx-auto space-y-3 mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              What Sets Us Apart As Golang Development?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column: 5 Feature Items */}
            <div className="lg:col-span-6 space-y-7">

              {/* Item 1: Flexible-Engagement-Models */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="14" r="5" />
                    <circle cx="14" cy="18" r="4" />
                    <circle cx="34" cy="18" r="4" />
                    <path d="M16 30c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    <path d="M6 34c0-3.3 2.7-6 6-6" />
                    <path d="M42 34c0-3.3-2.7-6-6-6" />
                    <path d="M8 38h32l-4 6H12z" fill="#E2E8F0" fillOpacity="0.4" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Flexible-Engagement-Models
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.
                  </p>
                </div>
              </div>

              {/* Item 2: 100% Transparency */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="20" cy="24" r="14" />
                    <circle cx="28" cy="24" r="14" strokeDasharray="3 3" />
                    <line x1="20" y1="12" x2="28" y2="36" stroke="#94A3B8" strokeWidth="1.5" />
                    <line x1="24" y1="10" x2="24" y2="38" stroke="#94A3B8" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    100% Transparency
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    100% transparency policy to keep our client and our team on the same page.
                  </p>
                </div>
              </div>

              {/* Item 3: Experienced Developers */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="16" r="6" />
                    <path d="M16 14h16M18 10h12" />
                    <path d="M12 36v-6c0-4 3-6 7-6h10c4 0 7 2 7 6v6" />
                    <rect x="18" y="32" width="12" height="8" rx="1.5" fill="#E2E8F0" fillOpacity="0.4" />
                    <path d="M21 36l-2 2 2 2M27 36l2 2-2 2" strokeWidth="1.8" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Experienced Developers
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.
                  </p>
                </div>
              </div>

              {/* Item 4: Timely Delivery */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="24" r="16" />
                    <polyline points="24 14 24 24 30 28" />
                    <path d="M24 4v4M40 8l-3 3M8 8l3 3" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Timely Delivery
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    We value the time and are particular about timely deliveries by following the highest quality standards.
                  </p>
                </div>
              </div>

              {/* Item 5: Technical Support */}
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0 p-3">
                  <svg viewBox="0 0 48 48" className="w-full h-full text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="28" cy="18" r="8" strokeDasharray="3 3" />
                    <path d="M28 14v8M24 18h8" />
                    <path d="M12 36l8-8 4 4-8 8H12z" fill="#E2E8F0" fillOpacity="0.4" />
                    <path d="M18 30l10-10 4 4-10 10" />
                    <path d="M30 12l4-4 4 4-4 4" />
                  </svg>
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-base sm:text-[17px] font-[800] text-slate-900 tracking-tight">
                    Technical Support
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: "Let's Discuss" Form Card (Matching Image 1 Exact Design) */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-xl border border-slate-300 shadow-lg p-6 sm:p-8 relative overflow-hidden">
                
                {/* Decorative Cyan Corner Triangles */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[32px] border-t-[#00709E] border-r-[32px] border-r-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[32px] border-b-[#00709E] border-l-[32px] border-l-transparent"></div>

                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-[800] text-slate-900 tracking-tight">
                    Let's Discuss
                  </h3>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold">Thank You!</h4>
                    <p className="text-sm">We have received your message. Our Golang expert will get in touch with you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    {/* Your Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your name *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors"
                      />
                    </div>

                    {/* Email ID */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="Email ID *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors"
                      />
                    </div>

                    {/* Mobile Number with country prefix */}
                    <div>
                      <div className="flex rounded-md border border-slate-300 overflow-hidden focus-within:border-[#005F96] focus-within:ring-1 focus-within:ring-[#005F96]">
                        <div className="bg-slate-50 border-r border-slate-300 px-3 py-3 text-sm text-slate-700 font-semibold flex items-center space-x-1 shrink-0">
                          <span>+91</span>
                          <span className="text-[10px] text-slate-400">▼</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="Mobile Number *"
                          className="w-full bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Tell us more about your project */}
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Tell us more about your project *"
                        className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] transition-colors resize-none"
                      />
                    </div>

                    {/* Cloudflare Captcha Box */}
                    <div className="border border-slate-200 bg-slate-50/70 rounded-md p-2.5 px-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Success!</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          </svg>
                          <span className="text-[10px] font-bold text-slate-800 tracking-wider">CLOUDFLARE</span>
                        </div>
                        <span className="text-[8px] text-slate-400">Privacy • Terms</span>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#005F96] hover:bg-[#004e7c] text-white font-[800] py-3.5 px-6 rounded-md text-base transition-all shadow-md active:scale-[0.99] tracking-wide"
                      >
                        Send
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Subscribe Newsletter Section */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireGolangDevelopersService;
