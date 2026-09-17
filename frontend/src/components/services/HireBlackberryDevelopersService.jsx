import React, { useState } from 'react';
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
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock,
  Calendar,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Check,
  Server,
  Users,
  LineChart,
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
  Milestone,
  RefreshCw,
  Building2,
  Database,
  PieChart,
  Smartphone,
  ShieldAlert
} from 'lucide-react';

export const HireBlackberryDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);
  const [leverageTab, setLeverageTab] = useState(0);
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 3 Flexible Hiring Model Cards matching Sapphire reference
  const hiringModelCards = [
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
      IconComp: Sliders,
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
      price: '$24000.0',
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

  // BlackBerry FAQs matching Sapphire reference page style
  const faqs = [
    {
      q: 'How much does it cost to hire a BlackBerry app developer from Firevy.co?',
      a: 'Our pricing is straightforward to understand. You may hire a dedicated BlackBerry app developer from us starting at $21/hour or on flexible monthly dedicated contracts based on experience level.'
    },
    {
      q: 'What technologies are used in BlackBerry app development?',
      a: 'We build enterprise BlackBerry solutions using BlackBerry Dynamics SDK, BlackBerry WebWorks, C/C++ NDK, Qt, Java/Android Enterprise APIs, and secure containerization protocols.'
    },
    {
      q: 'Which company is best for enterprise mobile & BlackBerry app development?',
      a: 'Firevy.co is a top-rated mobile & security engineering company with 20+ years of industry leadership and a team of senior engineers delivering containerized enterprise mobile applications globally.'
    },
    {
      q: 'Do you offer support and SLA maintenance for BlackBerry enterprise solutions?',
      a: 'Yes, we offer comprehensive post-launch support and SLA maintenance packages including security patch rollouts, OS compatibility upgrades, container management, and 24/7 incident monitoring.'
    },
    {
      q: 'Can your BlackBerry developers integrate with existing enterprise MDM/MAM systems?',
      a: 'Yes, our BlackBerry developers specialize in integrating mobile apps with BlackBerry UEM (Unified Endpoint Management), Microsoft Intune, AirWatch, and custom enterprise container solutions.'
    },
    {
      q: 'Why should I hire BlackBerry app developers from Firevy.co?',
      a: 'Our dedicated BlackBerry app developers bring deep mobile security expertise, bi-weekly agile velocity, 100% IP & code ownership, direct communication, and 15-day risk-free trials to guarantee project success.'
    },
    {
      q: 'Can you migrate legacy BlackBerry applications to modern enterprise platforms?',
      a: 'Absolutely. We provide full-cycle legacy BlackBerry app migration to modern Android Enterprise, iOS Enterprise, and cross-platform frameworks while preserving military-grade security compliance.'
    },
    {
      q: 'Do you offer BlackBerry app development services for global clients like the USA, UK, Canada, and Australia?',
      a: 'Yes, we serve clients globally across the USA, UK, Canada, Australia, UAE, and Europe, adapting seamlessly to your time zone and workflow requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire BlackBerry App Developers | Enterprise Mobile Security Engineers"
        description="Hire dedicated BlackBerry app developers from Firevy.co. Top 1% vetted enterprise mobile security, BlackBerry Dynamics SDK, containerized apps, and C++/Java developers."
        keywords="Hire BlackBerry App Developers, Hire Blackberry Developer, BlackBerry Mobile Development Company, Enterprise MDM Developers, Secure Mobile Application Development"
      />

      {/* ============================================================
          SECTION 1: HERO SECTION (Exact Sapphire Reference Match)
          ============================================================ */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                  Hire BlackBerry App Developer
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                  We are renowned for our innovative blackberry app development company, with qualified and experienced BlackBerry app developers that offer superior blackberry app development services
                </p>
              </div>

              {/* 4 Metric Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2">
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">200+</span>
                  <span className="text-xs font-semibold text-slate-600 leading-tight block mt-1">Dedicated Developers</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">20+</span>
                  <span className="text-xs font-semibold text-slate-600 leading-tight block mt-1">Fortunes 500 Companies</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">2800+</span>
                  <span className="text-xs font-semibold text-slate-600 leading-tight block mt-1">Project Completed</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900">320+</span>
                  <span className="text-xs font-semibold text-slate-600 leading-tight block mt-1">5-Star Clutch Reviews</span>
                </div>
              </div>

              {/* CTA Button: Hire Team → */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center space-x-2 bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-7 py-3 rounded-lg text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Hire Team</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>

            {/* Right Hero Graphic Banner (Image Form) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <img
                src="/images/blackberry_hero_illustration.svg"
                alt="Hire BlackBerry App Developer"
                className="w-full max-w-[520px] h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 2: BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION: HIRE DEDICATED BLACKBERRY DEVELOPERS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic Illustration Column */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px]">
                <img
                  src="/images/react_section2_illustration.jpg"
                  alt="Hire Dedicated BlackBerry App Developers"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-blue-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-[1.2]">
                Hire Dedicated BlackBerry App Developers For Enterprise Security & MDM Solutions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                By hiring BlackBerry app development professionals from Firevy.co, you gain immediate access to top 1% vetted developers who excel in enterprise mobile security, BlackBerry Dynamics SDK, containerized apps, encryption protocols, and BlackBerry UEM integrations. Hire BlackBerry Developers that deliver secure, compliant, high-availability mobile solutions while ensuring enterprise data protection is prioritized. From building secure corporate communication tools to managing legacy mobile app modernizations, our BlackBerry development team enhances mobile security seamlessly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: BRIEF ABOUT OUR BLACKBERRY APP DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our BlackBerry App Development Services
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                <p>
                  Our blackberry developers are pretty efficient and hold years of expertise. Other perks of hiring our developers include: We enable you to communicate with your development team in real-time and directly using Skype, Slack, or Teams. You are free to receive demonstrations whenever it is convenient for you. Stop wishing things are going according to plan and start realizing they are. From the initial conception to the final invoicing of your projects, you will have the ability to see the whole process personally. Hire Dedicated Blackberry Mobile App Developers who have received instruction in efficient communication and are always accessible to speak with you in real-time. Without mutual trust, there can be no successful collaboration. Trust is the foundation upon which Firevy.co was formed, and we are aware that it is something that must be gained, appreciated, and maintained.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Vector SVG Illustration matching Sapphire Reference */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <svg viewBox="0 0 550 400" className="w-full h-auto drop-shadow-sm" fill="none">
                  {/* Background Wall Shelves */}
                  <line x1="280" y1="120" x2="480" y2="120" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
                  <rect x="300" y="80" width="30" height="40" fill="#93C5FD" rx="2" />
                  <rect x="335" y="85" width="25" height="35" fill="#3B82F6" rx="2" />
                  <rect x="365" y="90" width="20" height="30" fill="#60A5FA" rx="2" />

                  {/* Right Wall Shelf */}
                  <line x1="420" y1="180" x2="520" y2="180" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
                  <rect x="435" y="150" width="25" height="30" fill="#93C5FD" rx="2" />
                  <rect x="465" y="155" width="20" height="25" fill="#3B82F6" rx="2" />

                  {/* Desk Surface */}
                  <rect x="260" y="270" width="270" height="12" rx="4" fill="#0F172A" />
                  <rect x="380" y="282" width="16" height="70" fill="#475569" />
                  <rect x="420" y="282" width="16" height="70" fill="#475569" />

                  {/* Computer Monitor on Desk */}
                  <rect x="330" y="200" width="90" height="65" rx="6" fill="#0F172A" />
                  <rect x="335" y="205" width="80" height="55" rx="4" fill="#006095" />
                  <text x="375" y="238" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">&lt;/&gt;</text>
                  <rect x="367" y="265" width="16" height="8" fill="#475569" />
                  <ellipse cx="375" cy="273" rx="20" ry="4" fill="#334155" />

                  {/* Floating Chat Bubble */}
                  <path d="M 320 160 C 320 148, 335 140, 350 140 C 365 140, 380 148, 380 160 C 380 168, 370 174, 360 176 L 362 185 L 350 177 C 330 177, 320 170, 320 160 Z" fill="#0284C7" />
                  <line x1="335" y1="155" x2="365" y2="155" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="335" y1="162" x2="355" y2="162" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Left Developer Sitting on Stool */}
                  <circle cx="310" cy="215" r="14" fill="#FDBA74" />
                  <path d="M 300 215 C 300 195, 320 195, 320 215 Z" fill="#0F172A" />
                  <path d="M 295 235 L 325 235 L 320 300 L 305 300 Z" fill="#0284C7" />
                  <rect x="303" y="300" width="6" height="40" fill="#1E293B" />
                  <rect x="311" y="300" width="6" height="40" fill="#1E293B" />
                  <ellipse cx="310" cy="310" rx="16" ry="4" fill="#64748B" />
                  <rect x="308" y="314" width="4" height="26" fill="#475569" />

                  {/* Right Developer Sitting on Office Chair */}
                  <circle cx="430" cy="210" r="14" fill="#FDBA74" />
                  <path d="M 420 210 C 420 190, 440 190, 440 210 Z" fill="#0F172A" />
                  <path d="M 415 230 L 445 230 L 440 300 L 420 300 Z" fill="#0F172A" />
                  {/* Office Chair Backrest */}
                  <rect x="435" y="230" width="30" height="50" rx="8" fill="#006095" />
                  <rect x="440" y="280" width="10" height="30" fill="#334155" />
                  <ellipse cx="445" cy="310" rx="20" ry="5" fill="#1E293B" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated BlackBerry App Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: WHO EXACTLY IS A BLACKBERRY APP DEVELOPER?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Who Exactly Is A BlackBerry App Developer?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 bg-[#F0F7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              <div className="relative z-10 space-y-6">
                <div className="text-[#006095]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[36px] font-[900] text-[#006095] leading-[1.25] tracking-tight">
                  Feature-Rich And<br />
                  User-Friendly<br />
                  Applications
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  We are well-versed in BlackBerry Mobile App Development. Our developers provide our worldwide customers with unique, adaptable, feature-rich, and cost-effective BlackBerry app development services. Hire BlackBerry Apps Developers who can streamline your company's operations and a design that will match some of the top apps on the market. We will optimize the creation of the Blackberry application based on your specifications so that the user experience is individualized and the learning curve is short.
                </p>
                <p>
                  Hire Dedicated Blackberry Mobile App Developers who leave no stone unturned and ensure regular contact with the customer right from the start of the Blackberry applications development project until it is finished. If you want to get the most out of your Blackberry applications and build them by industry leaders, you have come to the right BlackBerry Application Development Company.
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
          SECTION 8: PREMIUM SERVICES GRID
          ============================================================ */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SECTION 9: MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8">
            <div className="text-center max-w-6xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                Meet Firevy.co's Exceptional Team of Seasoned Experts
              </h2>
            </div>

            <div className="flex justify-center w-full overflow-x-auto py-1">
              <div className="bg-[#DDECF5] p-1 rounded-full inline-flex items-center justify-center gap-1 md:gap-1.5 lg:gap-2 max-w-6xl border border-cyan-100/60 shadow-2xs">
                {[
                  'Trending',
                  'Product Development',
                  'Saas',
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
                    className={`px-3.5 py-1.5 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                      expertActiveCategory === cat
                        ? 'bg-[#006095] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-4">
              {[
                {
                  id: 1,
                  category: 'Trending',
                  title: 'BlackBerry Enterprise Squad',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['BlackBerry SDK', 'Dynamics API', 'C++', 'Java Enterprise', 'MDM'],
                  composition: ['1 Security Architect', '3 Senior BlackBerry Devs', '1 Mobile QA Specialist'],
                  summary: 'High-performing dedicated squad building secure BlackBerry enterprise applications.'
                },
                {
                  id: 2,
                  category: 'Product Development',
                  title: 'Mobile Security Dev Team',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['AES Encryption', 'BlackBerry UEM', 'Android Enterprise', 'Intune'],
                  composition: ['1 Security Lead', '4 Mobile Engineers', '1 QA Specialist', '1 Compliance Lead'],
                  summary: 'Specialized enterprise mobile security team engineering containerized applications.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Cross-Platform Mobile Squad',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Qt / C++', 'Android Enterprise', 'iOS Enterprise', 'REST APIs'],
                  composition: ['1 Solution Architect', '3 Senior Mobile Developers', '1 Security Lead'],
                  summary: 'Dedicated mobile engineers delivering secure, high-availability corporate applications.'
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

                      <div className="bg-white rounded-full p-1 inline-flex items-center space-x-1 mb-4 shadow-2xs border border-slate-100">
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'tech' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentTab === 'tech' ? 'bg-[#006095] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          Technologies
                        </button>
                        <button
                          onClick={() => setExpertTabs((prev) => ({ ...prev, [team.id]: 'composition' }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            currentTab === 'composition' ? 'bg-[#006095] text-white shadow-xs' : 'text-slate-700 hover:text-slate-900'
                          }`}
                        >
                          Team Composition
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 min-h-[70px]">
                        {currentTab === 'tech'
                          ? team.techs.map((t, idx) => (
                              <span key={idx} className="bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                                {t}
                              </span>
                            ))
                          : team.composition.map((c, idx) => (
                              <span key={idx} className="bg-white text-[#006095] text-xs font-bold px-3 py-1.5 rounded-full border border-slate-100 shadow-2xs">
                                • {c}
                              </span>
                            ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedTeamModal(team)}
                      className="bg-[#006095] hover:bg-[#0083B0] text-white px-4 py-2.5 rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition-all shadow-xs cursor-pointer w-fit"
                    >
                      <span>Get Details</span>
                      <span>→</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center space-x-4 pt-4">
              <button className="text-slate-400 hover:text-slate-700 transition-colors text-2xl font-light px-2 cursor-pointer">
                ←
              </button>
              <button className="text-slate-800 hover:text-black transition-colors text-2xl font-light px-2 cursor-pointer">
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9A: LEVERAGE THE EXPERTISE OF SAPPHIRE DEDICATED DEVELOPERS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Leverage The Expertise of Firevy.co Dedicated Developers
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 border border-cyan-100/60 shadow-xs">
                {['In Demand', 'Mobile', 'Web', 'AI'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setLeverageTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      (leverageTab === tab || (leverageTab === 0 && tab === 'In Demand'))
                        ? 'bg-[#006095] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#FCE4EC] rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-1.5">
                <span>In Demand</span>
                <span className="text-base">↗</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {[
                {
                  title: 'AI Developers',
                  desc: "Employ our team's best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!"
                },
                {
                  title: 'UI/UX Designers',
                  desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!'
                },
                {
                  title: 'API Developers',
                  desc: 'Use modern frameworks to your advantage by hiring our skilled full-stack engineers who are proficient in API development. Utilizing technologies such as RESTful, GraphQL, and gRPC, their knowledge allows them to develop dynamic web apps optimized for smooth integration.'
                },
                {
                  title: 'BlackBerry App Developers',
                  desc: 'Employ our passionate BlackBerry app developers to build secure mobile solutions; they possess a thorough grasp of BlackBerry Dynamics, enterprise containerization, and mobile encryption. Has proficiency in developing sophisticated mobile solutions that provide unified user experience and secure mobile architecture. Collaborate with our engineers to improve your corporate mobile platforms.'
                },
                {
                  title: 'Machine Learning Developers',
                  desc: "Employ our team's best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!"
                },
                {
                  title: 'Data Scientists',
                  desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F7FC] rounded-2xl p-6 sm:p-7 border border-blue-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-1">
                      <span>{item.title}</span>
                      <span className="text-base text-slate-700">↗</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button className="bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-xs cursor-pointer">
                View All Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9B: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center space-y-2 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Industry-Focused Insights To Elevate Your Business
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Trending Industries that Use Dedicated Developers
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#EBF4FA] p-5 rounded-2xl max-w-5xl w-full border border-cyan-100/70 shadow-2xs space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    'Automotive',
                    'Ecommerce',
                    'Education',
                    'Entertainment',
                    'Finance',
                    'Food and Beverage',
                    'Healthcare'
                  ].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${
                        activeInsightIndustry === ind
                          ? 'bg-[#006095] text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 font-semibold hover:text-slate-900 border border-slate-100 shadow-2xs'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    'Information Technology',
                    'Logistics',
                    'Travel & Tourism',
                    'Utility Services'
                  ].map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveInsightIndustry(ind)}
                      className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${
                        activeInsightIndustry === ind
                          ? 'bg-[#006095] text-white font-bold shadow-xs'
                          : 'bg-white text-slate-700 font-semibold hover:text-slate-900 border border-slate-100 shadow-2xs'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                {
                  title: 'Vehicle Data Logging Software',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
                },
                {
                  title: 'Car Wash App Development',
                  image: '/images/car_wash_app_mockup.jpg'
                },
                {
                  title: 'Taxi Booking-App Development',
                  image: '/images/taxi_booking_app_mockup.jpg'
                }
              ].map((card, idx) => (
                <div key={idx} className="space-y-3 group">
                  <div className="bg-[#EBF4FA] rounded-2xl p-4 border border-cyan-100/60 shadow-xs hover:shadow-md transition-all overflow-hidden h-64 flex items-center justify-center">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center font-bold text-slate-900 text-sm md:text-base">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button className="bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-7 py-2.5 rounded-lg text-xs sm:text-sm transition-all shadow-xs cursor-pointer">
                View All Portfolio
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9C: ABOUT US (8 STATS CARDS)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#006095] text-white font-sans border-b border-cyan-800">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-[900] text-white tracking-tight leading-tight">
                About Us
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-cyan-100 font-medium">
                Firevy.co delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  number: '23+',
                  label: 'Years of Experience',
                  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '320+',
                  label: '5-Star Clutch Reviews',
                  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '20+',
                  label: 'Fortunes 500 Companies',
                  image: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '200+',
                  label: 'IT Professional',
                  image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '95%',
                  label: 'Client Retention',
                  image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '18+',
                  label: 'Industry Served',
                  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '2800+',
                  label: 'Satisfied Clients',
                  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop&q=80'
                },
                {
                  number: '1500+',
                  label: 'Completed Projects',
                  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80'
                }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white text-slate-900 rounded-2xl p-4 shadow-md flex items-center space-x-4 border border-slate-100 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img src={stat.image} alt={stat.label} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#006095] leading-none mb-1">
                      {stat.number}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9D: SECTORS THRIVING
          ========================================================================= */}
      <SectorsThrivingSection />

      {/* =========================================================================
          SECTION 9E: EMPLOY THE ADVANCED PROFICIENCY OF SAPPHIRE'S DEDICATED DEV TEAM
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
              </p>
            </div>

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

      {/* =========================================================================
          SECTION 9F: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ?
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Firevy.co
                </button>
                <button
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'client'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>

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
                      <CardIcon className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 10: TECH STACK PROFICIENT GRID
          ============================================================ */}
      <TechStackProficientGrid />

      {/* =========================================================================
          SECTION 10B: THE EXPERTISE OF OUR BLACKBERRY APP DEVELOPERS SERVICES
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our BlackBerry App Developers Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                We have a pool of dedicated BlackBerry app developers available for hire. Take a look at the expertise of our developers:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom BlackBerry App Dev',
                  desc: 'Your mobile product vision can be brought to life by hiring our devoted mobile engineers who build secure enterprise BlackBerry applications.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Smartphone
                },
                {
                  title: 'BlackBerry Dynamics & SDK',
                  desc: 'Hire our dedicated developers to construct modern containerized mobile apps, secure file sync, and custom enterprise APIs for companies of any size.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Server
                },
                {
                  title: 'Enterprise Security & MDM',
                  desc: 'You can now hire BlackBerry app developers in UAE or anywhere else in the world to create military-grade encrypted mobile platforms for corporate businesses.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: ShieldAlert
                },
                {
                  title: 'Native & Cross-Platform Dev',
                  desc: 'Are you looking for efficient solutions for C++, Qt, Android Enterprise, or iOS containerized apps? Hire BlackBerry app developers to construct them for you.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Layers
                },
                {
                  title: 'Mobile App Maintenance & QA',
                  desc: 'Employing our remote dedicated BlackBerry developers will ensure that your mobile applications are handled and maintained according to security standards.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Sliders
                },
                {
                  title: 'Legacy BlackBerry Migration',
                  desc: 'Are you interested in updating your legacy BlackBerry apps to modern enterprise platforms? We combine the latest mobile security frameworks seamlessly.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: Cpu
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-md border border-slate-100/90 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`}>
                        <CardIcon className="w-6 h-6 stroke-[1.8]" />
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
          SECTION 11: PROUD AWARDS BANNER & BENEFITS OF HIRING DEDICATED DEVELOPERS
          ============================================================ */}
      <ProudAwardsBanner />

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
                      <div className="w-10 h-10 text-[#006095] flex items-center justify-center shrink-0">
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
          SECTION 12: HIRE DEVELOPER 4 STEPS
          ============================================================ */}
      <HireDeveloper4Steps
        title="Hire BlackBerry App Developer In 4 Easy Steps"
        subtitle="BlackBerry App Developer offers a number of advantages over another platform. Some of them are:"
      />

      {/* ============================================================
          SECTION 13: VIDEO TESTIMONIALS & ENGAGEMENT MODELS
          ============================================================ */}
      <VideoTestimonialsStory />
      <EngagementModelsSection />

      {/* ============================================================
          SECTION 14: SUCCESS MATRIX & WORK PROCESS GRID
          ============================================================ */}
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />
      <WorkProcessGrid />
      <ClientReviewsDarkSection />

      {/* ============================================================
          SECTION 15: DIGITAL TRANSFORMATION CASE STUDIES
          ============================================================ */}
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          SECTION 16: SAPPHIRE FAQ SECTION & FOOTER SECTIONS
          ============================================================ */}
      <SapphireFaqSection faqs={faqs} />
      <SocialMediaSection />
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireBlackberryDevelopersService;
