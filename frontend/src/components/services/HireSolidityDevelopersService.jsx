import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import ProcessWeFollow from '../common/ProcessWeFollow';
import { TechStackProficientGrid } from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import SapphireFaqSection from '../common/SapphireFaqSection';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import SectorsThrivingSection from './SectorsThrivingSection';
import { RecentBlogsSection } from '../common/RecentBlogsSection';
import { WhatSetsUsApartSection } from '../common/WhatSetsUsApartSection';
import { SubscribeNewsletterSection } from '../home/SubscribeNewsletterSection';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import { SuccessMatrixGrid } from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
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
  Globe,
  Coins,
  Award,
  Sliders,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Lock,
  MessageSquare,
  Flag,
  FileText,
  Rocket,
  Milestone,
  RefreshCw,
  Wallet,
  Activity,
  Fingerprint,
  LineChart
} from 'lucide-react';

export const HireSolidityDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 6 Flexible Hiring Model Cards
  const hiringModelCards = [
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
        'Hire Dedicated Solidity Developers that exclusively works for you'
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
      price: '$ 2850.00/ Month',
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
        'checked-engagement Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc',
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
    }, 2000);
    return () => clearInterval(interval);
  }, [isCarouselHovered]);

  const handleTransitionEnd = () => {
    if (cardSlideIndex >= hiringModelCards.length) {
      setEnableTransition(false);
      setCardSlideIndex(cardSlideIndex % hiringModelCards.length);
    }
  };

  // 10 Sapphire Solidity FAQs
  const solidityFaqs = [
    {
      q: '1. What is Solidity used for in blockchain development?',
      a: 'Solidity is the primary object-oriented programming language used for writing smart contracts on Ethereum and other EVM-compatible blockchain networks (BNB Chain, Polygon, Avalanche, Arbitrum, Optimism).'
    },
    {
      q: '2. Why should I hire dedicated Solidity developers?',
      a: 'Hiring dedicated Solidity developers gives you direct access to blockchain architects skilled in smart contract development, gas optimization, security auditing, DeFi protocol creation, and dApp integration.'
    },
    {
      q: '3. How much does it cost to hire a Solidity developer?',
      a: 'Our Solidity developer hiring rates start at $21/hour for dedicated full-time engagement. We also offer flexible hourly, monthly, and project-based pricing models.'
    },
    {
      q: '4. How do your developers ensure smart contract security?',
      a: 'We follow strict security standards including formal verification, static analysis using Slither/Mythril, reentrancy guards, OpenZeppelin standard contracts, and multi-signature access controls.'
    },
    {
      q: '5. Can your Solidity developers build custom dApps and DeFi protocols?',
      a: 'Yes, our developers have extensive experience constructing decentralized exchanges (DEXs), yield farming protocols, NFT marketplaces, staking platforms, and DAO governance systems.'
    },
    {
      q: '6. How long does it take to onboard a Solidity developer?',
      a: 'We can match and onboard pre-vetted senior Solidity developers to join your project within 24 to 48 hours.'
    },
    {
      q: '7. What tools and frameworks do your Solidity developers use?',
      a: 'Our engineers use Hardhat, Foundry, Truffle, Remix IDE, OpenZeppelin, Web3.js, Ethers.js, Alchemy, Infura, and MetaMask.'
    },
    {
      q: '8. Do you sign NDAs to protect our IP and project idea?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) before discussing any project details to ensure full security and IP ownership.'
    },
    {
      q: '9. Can your developers audit existing smart contracts?',
      a: 'Yes, we perform comprehensive smart contract audits to identify vulnerabilities, logic flaws, gas inefficiencies, and compliance risks.'
    },
    {
      q: '10. What timezone overlap do your developers provide?',
      a: 'Our developers offer 4 to 5 hours of daily timezone overlap for teams in the US, Europe, Asia, and Australia.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Solidity Developers | Dedicated Blockchain Smart Contract Programmers at $21/Hr"
        description="Hire dedicated Solidity developers from Firevy. Seasoned Ethereum & EVM smart contract programmers for dApps, DeFi, NFTs, and custom Web3 solutions starting at $21/hour."
        canonical="/services/hire-solidity-developers"
      />

      {/* ============================================================
          HERO SECTION (1:1 Exact Match with Sapphire Reference)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Solidity Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Regarding the creation of Blockchain-based solutions focused on delivering results, our reputation precedes us thanks to the more than five years of expertise we have managing Solidity.
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

            {/* Right Column Illustration - Monitor Display with floating tech icons */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px]">
                {/* Floating JS Badge top-left */}
                <div className="absolute -top-4 -left-3 z-20 bg-[#F7DF1E] text-black p-2.5 px-3 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  JS
                </div>

                {/* Floating Python Badge top-right */}
                <div className="absolute -top-4 -right-3 z-20 bg-[#3776AB] text-white p-2.5 px-3 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  Python
                </div>

                {/* Floating Git Badge bottom-left */}
                <div className="absolute bottom-10 -left-6 z-20 bg-[#F05032] text-white p-2.5 px-3 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  Git
                </div>

                {/* Floating C++ Badge bottom-right */}
                <div className="absolute bottom-10 -right-6 z-20 bg-[#00599C] text-white p-2.5 px-3 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  C++
                </div>

                {/* Monitor Graphic */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 360" className="w-full h-auto">
                    <defs>
                      <linearGradient id="solidityBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    <rect x="50" y="20" width="440" height="260" rx="12" fill="url(#solidityBezel)" stroke="#334155" strokeWidth="2" />
                    <rect x="62" y="32" width="416" height="236" rx="4" fill="#FFFFFF" />

                    <rect x="78" y="52" width="80" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="166" y="52" width="140" height="7" rx="3" fill="#E2E8F0" />
                    
                    <rect x="78" y="74" width="200" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="78" y="96" width="150" height="7" rx="3" fill="#E2E8F0" />
                    
                    <rect x="78" y="118" width="180" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="78" y="140" width="120" height="7" rx="3" fill="#E2E8F0" />

                    <rect x="78" y="162" width="160" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="78" y="184" width="190" height="7" rx="3" fill="#E2E8F0" />

                    <rect x="78" y="206" width="220" height="7" rx="3" fill="#CBD5E1" />
                    <rect x="78" y="228" width="110" height="7" rx="3" fill="#E2E8F0" />

                    {/* Solidity Diamond Logo on Right Side of Screen */}
                    <g transform="translate(370, 150)">
                      <polygon points="0,-45 35,-15 0,15 -35,-15" fill="#363636" />
                      <polygon points="0,15 35,-15 0,45" fill="#8C8C8C" />
                      <polygon points="0,15 -35,-15 0,45" fill="#464646" />
                      <polygon points="0,-45 35,-15 0,15" fill="#656565" />
                    </g>

                    <rect x="240" y="280" width="60" height="40" fill="#94A3B8" />
                    <ellipse cx="270" cy="320" rx="90" ry="12" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* ============================================================
          HIRE TOP-RATED SOLIDITY DEVELOPERS FROM US
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image Illustration */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/c_sharp_developer_illustration.png"
                  alt="Hire Top-Rated Solidity Developers From Us"
                  className="w-full h-auto max-w-[480px] object-contain mx-auto drop-shadow-sm"
                />
              </div>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-black tracking-tight leading-[1.15]">
                Hire Top-Rated Solidity Developers From Us
              </h2>
              <p className="text-base sm:text-[17px] text-slate-600 leading-[1.65] font-[400] max-w-xl">
                Over one hundreds of small and medium-sized businesses have used our smart contract engineering capabilities to construct robust Web3 applications, dApps, and EVM protocols. Hire our Solidity programmers to build battle-tested smart contracts, audited token standards (ERC-20, ERC-721, ERC-1155), and high-throughput DeFi ecosystems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          OUR FLEXIBLE HIRING MODELS SECTION
          ============================================================ */}
      <section className="py-20 bg-[#F0F6FB] text-slate-900 font-sans overflow-hidden">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-[400]">
              Hire Solidity Developers from Firevy.co Starts from,
            </p>
          </div>

          <div
            className="relative overflow-hidden w-full py-4"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex gap-8 ${enableTransition ? 'transition-transform duration-300 ease-in-out' : ''}`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(-${cardSlideIndex} * (100% + 32px) / 3))`
              }}
            >
              {[...hiringModelCards, ...hiringModelCards].map((item, idx) => {
                const IconComponent = item.IconComp;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`w-full md:w-[calc((100%-64px)/3)] shrink-0 bg-white rounded-[22px] p-8 transition-all flex flex-col justify-between text-center relative group ${
                      item.isFeatured
                        ? 'border-[3px] border-[#005F96] shadow-xl'
                        : 'border border-slate-200/90 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {item.saveText && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-3 py-0.5 text-[11px] font-bold text-[#005F96] tracking-wide whitespace-nowrap">
                        {item.saveText}
                      </div>
                    )}
                    <div>
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-[#006095] border border-blue-100 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <h3 className="text-xl font-[800] text-slate-900">{item.title}</h3>
                        {item.badgeText && (
                          <span className="bg-blue-50 text-[#005F96] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200/80">
                            {item.badgeText}
                          </span>
                        )}
                      </div>
                      
                      <div className="text-xs text-slate-500 font-semibold mb-3">{item.subtitle}</div>
                      <div className={`text-xl sm:text-2xl font-[900] mb-6 ${item.isFeatured ? 'text-[#005F96]' : 'text-slate-900'}`}>
                        {item.price}
                      </div>

                      <ul className="space-y-3 text-xs text-slate-700 text-left font-medium mb-8">
                        {item.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <a
                        href="#quote-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-3.5 rounded-[10px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-sm text-center transition-colors shadow-md block"
                      >
                        Hire Now
                      </a>
                      <div className="mt-4">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-600 border border-slate-200/80">
                          We sign NDA for all our projects.
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 mt-10">
            <button
              onClick={() => {
                setEnableTransition(true);
                setCardSlideIndex((prev) => (prev > 0 ? prev - 1 : hiringModelCards.length - 1));
              }}
              aria-label="Previous Model"
              className="text-[#005F96] hover:text-[#004A75] p-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-8 h-8 stroke-[2.5]" />
            </button>
            <button
              onClick={() => {
                setEnableTransition(true);
                setCardSlideIndex((prev) => prev + 1);
              }}
              aria-label="Next Model"
              className="text-[#005F96] hover:text-[#004A75] p-2 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-8 h-8 stroke-[2.5]" />
            </button>
          </div>
        </Container>
      </section>

      {/* ============================================================
          DEVELOPER PROFICIENCY COMPARISON TABLE
          ============================================================ */}
      <section className="py-20 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-[400]">
              Hire Solidity Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[16px] border border-slate-300 shadow-sm bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#005F96] text-white border-b-2 border-white">
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Range of Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Junior Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base border-r-2 border-white w-1/4">
                      Mid-Level Developers
                    </th>
                    <th className="py-4 px-6 font-[800] text-sm md:text-base w-1/4">
                      Senior Developers
                    </th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm font-[600]">
                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Approx Cost
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$17</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">$22</td>
                    <td className="py-3.5 px-6 text-slate-800">$29</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Years of Experience
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">1-3 Years</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">3-5 Years</td>
                    <td className="py-3.5 px-6 text-slate-800">5+ Years</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Project Manager
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Time Zone Flexibility
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  <tr className="border-b border-slate-200">
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white border-b-2 border-white">
                      Quality Guarantee
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 text-slate-800">Yes</td>
                  </tr>

                  <tr>
                    <td className="py-3.5 px-6 bg-[#005F96] text-white font-[800] border-r-2 border-white">
                      Working Hours
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6 text-slate-800 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6 text-slate-800">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          CANADA / AUSTRALIA SOLIDITY DEVELOPER ONBOARDING SECTION (Matching Image 1)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 font-[400] text-sm sm:text-base leading-relaxed">
                When you Hire Solidity Developers in Canada from us, they will collaborate and share their skills to facilitate more rapid and sophisticated development. Hire Solidity Developers in Australia from our Solidity Development Company, and we'll have them onboarded in only twenty-four hours. Provide us with your specifications, and we will choose the solidity developers for hire. Conduct interviews with them and collaborate with the seasoned professionals at our Solidity Development business.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[460px]">
                <img
                  src="/images/c_sharp_expertise_illustration.png"
                  alt="Hire Solidity Developers Global Onboarding"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Clutch Top Rated Banner (Matching Home Page) */}
      <ClutchTopRatedBanner title="World Wide Top Rated Solidity Development Company on Clutch" />

      {/* ============================================================
          WHO EXACTLY IS A SOLIDITY DEVELOPER? (Exact Match with Image 1)
          ============================================================ */}
      <section className="py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
        <Container className="max-w-6xl">
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Who Exactly Is A Solidity Developer?
            </h2>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Speech-Bubble Quote Card */}
            <div className="md:col-span-5 flex justify-center md:justify-start relative">
              <div className="w-full max-w-[350px] bg-[#F2F9FD] p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-sm border border-blue-50/60 md:after:content-[''] md:after:absolute md:after:-right-[12px] md:after:top-1/2 md:after:-translate-y-1/2 md:after:border-[12px] md:after:border-transparent md:after:border-l-[#F2F9FD]">
                {/* SVG Topographic Contour Lines Background */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="none">
                  <path fill="none" stroke="#005F96" strokeWidth="1.2" d="M -50 30 Q 75 130 350 30 M -50 80 Q 75 180 350 80 M -50 130 Q 75 230 350 130 M -50 180 Q 75 280 350 180 M -50 230 Q 75 330 350 230 M -50 280 Q 75 380 350 280" />
                </svg>

                {/* Double Quote Icon */}
                <div className="text-[#005F96] relative z-10 pt-1">
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Big Quote Heading */}
                <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[900] text-[#005F96] leading-[1.25] tracking-tight relative z-10 pt-4 pb-2">
                  Talented, Well-<br />
                  Vetted Developers<br />
                  For Hire
                </h3>
              </div>
            </div>

            {/* Right Column Text */}
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                A blockchain developer that specializes in working with smart contracts on apps that are built on Ethereum is called a Solidity developer. Hire certified solidity developers from us with knowledge of creating and implementing digitally signed contracts and performing audits on digital contracts. <strong className="font-bold text-[#006095]">Hire metaverse developers</strong> who are capable of streamlining all of the development activities associated with your Blockchain project. We are a trustworthy Solidity development firm, and as such, we provide prompt deployment and dependable assistance for the Blockchain development projects that you have commissioned.
              </p>
              <p>
                We are usually the companies' first option when selecting a reputable Solidity development firm because of our years of experience and access to the most excellent Solidity developers in the industry. We have efficiently completed projects on time with a wide variety of clients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Premium Services Grid (Image 1) */}
      <PremiumServicesGrid />

      {/* Meet Sapphire's Exceptional Team of Seasoned Experts (Image 2) */}
      <SapphireSeasonedExpertsSection />

      {/* Leverage The Expertise of Firevy.co Dedicated Developers (Images 3 & 4) */}
      <LeverageExpertiseGridSection brandName="Firevy.co" />

      {/* Industry-Focused Insights To Elevate Your Business (Screenshot 1) */}
      <IndustryFocusedInsightsSection
        title="Industry-Focused Insights To Elevate Your Business"
        subtitle="Trending Industries that Use Dedicated Developers"
      />

      {/* About Us Stats (Screenshot 2) */}
      <AboutUsStats />

      {/* Sectors Thriving (Screenshots 2 & 3) */}
      <SectorsThrivingSection />

      {/* Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team (Screenshot 4) */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
              </p>
            </div>

            {/* 10 White Cards Grid (2 rows of 5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: 'On-Time Progress Monitoring', IconComp: Clock },
                { title: 'Time-Zone Compatibility', IconComp: Globe },
                { title: 'Cost-Effective Development', IconComp: Coins },
                { title: 'World Class Expertise', IconComp: Award },
                { title: 'Least Turnaround Time', IconComp: Zap },
                { title: 'Best Management Standards', IconComp: ShieldCheck },
                { title: '500+ Seasons Experts', IconComp: Lightbulb },
                { title: '24x7 Support Team', IconComp: Headphones },
                { title: 'Efficient Project Management', IconComp: Handshake },
                { title: 'Dedicated Delivery Management', IconComp: UserCheck }
              ].map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-md border border-slate-100/80 transition-all flex flex-col justify-center items-center space-y-3 h-40"
                  >
                    <div className="w-10 h-10 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* How We Divide Your Project Responsibilities ? (Screenshot 4) */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Firevy.co / Client Filter Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                >
                  Firevy.co
                </button>
                <button
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${responsibilityTab === 'client'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                >
                  Client
                </button>
              </div>
            </div>

            {/* 6 Responsibilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
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
                  { title: 'Define project scope & vision', IconComp: Milestone },
                  { title: 'Provide domain context & access', IconComp: Database },
                  { title: 'Review sprint deliverables', IconComp: CheckCircle2 },
                  { title: 'Provide timely feedback & approvals', IconComp: RefreshCw },
                  { title: 'Align business priorities with roadmap', IconComp: LineChart },
                  { title: 'Co-evaluate key performance indicators', IconComp: PieChart }
                ]
              ).map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#EBF4FA] rounded-2xl p-8 text-center border border-cyan-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-center items-center space-y-4 min-h-[160px]"
                  >
                    <div className="w-12 h-12 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-9 h-9 stroke-[1.8]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Proficient Grid */}
      <TechStackProficientGrid />

      {/* ============================================================
          THE EXPERTISE OF OUR SOLIDITY DEVELOPMENT SERVICES (Matching Image 1 & 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F0F6FB] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our Solidity Development Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Our Certified Solidity Developers Have Years Of Expertise In This Field. Some Of Their Expertise Includes:
              </p>
            </div>

            {/* 6 Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Smart Contract Development',
                  desc: 'We help you build, test, and implement intelligent contracts by finding the most suitable platform for your business model. Hire Solidity developers in USA with the highest possible efficiency and skill in constructing flawless smart contracts.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Code2
                },
                {
                  title: 'App Development',
                  desc: 'Hire Solidity Developers in the UK to assist in locating components of the Dapp and constructing them promptly. Our Solidity engineers are very competent in building Blockchains and Dapps; they will create the ideal solution for you using their expertise.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Cpu
                },
                {
                  title: 'Digital Token Creation',
                  desc: 'Create tokens for the smart contract that can be mined, burned, upgraded, and transferred. These tokens should also be able to be upgraded. Hire Solidity engineers who comprehensively understand intelligent contracts based on digital tokens.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: Coins
                },
                {
                  title: 'Full Stack Development',
                  desc: 'Employing developers allows for the smooth construction of mobile applications, web apps, microservices, and APIs, among other things. Our team of Solidity programmers will shoulder the whole of the duty for constructing your Blockchain solution in the shortest amount of time possible.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Layers
                },
                {
                  title: 'Crowd Sale Contracts',
                  desc: 'You may safely and effectively manage tokens with the help of our Solidity engineers, who are as close as your fingertips. You can either request that the developers modify it to meet your requirements or create Crowd Sale contracts that you wish to implement.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Wallet
                },
                {
                  title: 'Exchange Platform',
                  desc: 'Construct trading systems that are both safe and effective with the assistance of the Solidity specialists on our team. When developing the ideal platform for your company, our Solidity coders will collaborate closely with the exchange\'s software engineers.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: RefreshCw
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100 transition-all flex flex-col justify-start space-y-4"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                      <CardIcon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Get A Free Quote Button */}
            <div className="text-center pt-2">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#005F96] hover:bg-[#004A75] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-colors shadow-sm"
              >
                Get A Free Quote For Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Clutch Top Rated Banner (Matching Image 2) */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* ============================================================
          BENEFITS OF HIRING DEDICATED DEVELOPERS (Matching Image 3)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            {/* 6 White Cards Grid (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and remote teams exchange ideas.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100/90 transition-all flex flex-col justify-start space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Hire Developer 4 Steps Ribbon */}
      <HireDeveloper4Steps title="Hire Solidity Developers In 4 Easy Steps" />

      {/* Video Testimonials / Our Story, Their Words (Matching Image 1) */}
      <VideoTestimonialsStory />

      {/* Business Friendly Hiring Models (Matching Image 2) */}
      <EngagementModelsSection
        title="Business Friendly Hiring Models : Building Greater Futures Through Innovation"
        subtitle="We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:"
      />

      {/* Success Matrix (Matching Image 3) */}
      <SuccessMatrixGrid />

      {/* Unveiling Our Innovative Solution (Matching Image 4) */}
      <InnovativeSolutionVideo />

      {/* Process We Follow */}
      <ProcessWeFollow />

      {/* Client Reviews Dark Section */}
      <ClientReviewsDarkSection />

      {/* Digital Transformation Slider */}
      <DigitalTransformationSlider />

      {/* Sapphire FAQ Section */}
      <SapphireFaqSection faqs={solidityFaqs} />

      {/* Additional Footer Sections */}
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireSolidityDevelopersService;
