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
  Brain,
  Binary,
  Activity
} from 'lucide-react';

export const HireDataScientistDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);
  const [leverageTab, setLeverageTab] = useState(0);
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // 3 Flexible Hiring Model Cards matching reference
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

  // Data Scientist FAQs matching reference structure
  const faqs = [
    {
      q: 'How much does it cost to hire a Data Scientist developer?',
      a: 'Our pricing is straightforward and transparent. You can hire a dedicated Data Scientist from us starting at $21/hour or on flexible monthly dedicated contracts based on experience level and project complexity.'
    },
    {
      q: 'What skills do your Data Scientist developers possess?',
      a: 'Our data scientists excel in Python, R, PyTorch, TensorFlow, Scikit-Learn, Predictive Analytics, NLP, Computer Vision, LLM Fine-Tuning, Big Data processing (Spark, Hadoop), SQL/NoSQL databases, and Cloud AI platforms (AWS SageMaker, Azure ML, GCP Vertex AI).'
    },
    {
      q: 'Which company is best for hiring Data Scientist developers?',
      a: 'Firevy.co is a top-rated AI & Data Science engineering company with over 20 years of technical leadership, serving startups and Fortune 500 enterprises with vetted, high-performing data science specialists.'
    },
    {
      q: 'Do you offer ongoing support and model monitoring after deployment?',
      a: 'Yes, we provide post-launch model monitoring, continuous retraining pipelines, data drift mitigation, performance optimization, and 24/7 SLA infrastructure support.'
    },
    {
      q: 'How quickly can I onboard a dedicated Data Scientist?',
      a: 'We can match you with pre-vetted, ready-to-deploy Data Science experts within 48 hours to 1 week, allowing zero onboarding friction and immediate productivity.'
    },
    {
      q: 'Why should I hire Data Scientist developers from Firevy.co?',
      a: 'Our dedicated Data Scientists bring deep domain expertise, bi-weekly agile velocity, 100% IP & code ownership, direct communication, and a 15-day risk-free trial period to guarantee success.'
    },
    {
      q: 'Do you offer Data Science development services for global clients like the USA, UK, Canada, and Australia?',
      a: 'Yes, we serve clients globally across North America, Europe, UK, Australia, UAE, and Asia, seamlessly aligning with your local time zone and engineering workflows.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire Data Scientist Developers | Dedicated Data Science & AI Experts"
        description="Hire dedicated Data Scientist developers from Firevy.co. Top 1% vetted Data Science, Machine Learning, Deep Learning, and AI model engineers for enterprise predictive analytics."
        keywords="Hire Data Scientist Developers, Hire Data Scientist, Data Science Development Company, Machine Learning Engineers, AI Specialists"
      />

      {/* ============================================================
          SECTION 1: HERO SECTION (Exact Match to Sapphire Reference)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Data Scientist
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                The data scientists at our company can efficiently use your data to solve various business difficulties and make processes run more smoothly.
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
                {/* Floating SQL Badge middle-left */}
                <div className="absolute top-1/4 -left-6 z-20 bg-[#38BDF8] text-white p-2.5 px-3.5 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  SQL
                </div>

                {/* Floating Python Badge top-right */}
                <div className="absolute -top-3 -right-2 z-20 bg-[#3776AB] text-white p-2.5 px-3.5 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  Python
                </div>

                {/* Floating Java Badge bottom-left */}
                <div className="absolute bottom-6 left-4 z-20 bg-[#5382A1] text-white p-2.5 px-3.5 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  Java
                </div>

                {/* Floating C++ Badge bottom-right */}
                <div className="absolute bottom-12 -right-4 z-20 bg-[#00599C] text-white p-2.5 px-3.5 rounded-xl shadow-lg font-extrabold text-xs flex items-center justify-center border-2 border-white">
                  C++
                </div>

                {/* Monitor Graphic */}
                <div className="relative z-10 drop-shadow-2xl">
                  <svg viewBox="0 0 540 360" className="w-full h-auto">
                    <defs>
                      <linearGradient id="dsBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1E293B" />
                        <stop offset="100%" stopColor="#0F172A" />
                      </linearGradient>
                    </defs>

                    {/* Gears background artwork */}
                    <circle cx="430" cy="80" r="45" fill="none" stroke="#CBD5E1" strokeWidth="5" strokeDasharray="12 8" />
                    <circle cx="90" cy="280" r="35" fill="none" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="10 6" />

                    <rect x="50" y="20" width="440" height="260" rx="12" fill="url(#dsBezel)" stroke="#334155" strokeWidth="2" />
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

                    {/* Data Science Orbit / Node Graphic on Right Side of Screen */}
                    <g transform="translate(370, 150)">
                      <circle cx="0" cy="0" r="32" fill="none" stroke="#006095" strokeWidth="2.5" strokeDasharray="6 4" />
                      <circle cx="0" cy="0" r="18" fill="#006095" />
                      <circle cx="-24" cy="-20" r="7" fill="#38BDF8" />
                      <circle cx="24" cy="20" r="7" fill="#38BDF8" />
                      <circle cx="24" cy="-20" r="7" fill="#0284C7" />
                      <line x1="-24" y1="-20" x2="0" y2="0" stroke="#006095" strokeWidth="2" />
                      <line x1="24" y1="20" x2="0" y2="0" stroke="#006095" strokeWidth="2" />
                      <line x1="24" y1="-20" x2="0" y2="0" stroke="#006095" strokeWidth="2" />
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

      {/* ============================================================
          SECTION 2: BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          SECTION: HIRE DEDICATED DATA SCIENTIST DEVELOPERS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic Illustration Column */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px]">
                <img
                  src="/images/react_section2_illustration.jpg"
                  alt="Hire Dedicated Data Scientist Developers"
                  className="w-full h-auto object-contain rounded-2xl shadow-xl border border-slate-200/80 hover:shadow-blue-500/10 transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight leading-[1.2]">
                Hire Dedicated Data Scientist Developers For Predictive Analytics & Machine Learning
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                By hiring Data Scientist development professionals from Firevy.co, you gain access to specialists skilled in building custom predictive models, neural networks, computer vision algorithms, and natural language processing solutions. Hire Data Scientist Developers that deliver actionable insight extraction, automated machine learning pipelines, feature engineering, and robust LLM integrations while ensuring performance, accuracy, and security are prioritized. From developing custom Python & R models to deploying scalable cloud AI microservices on AWS, Azure, or GCP, our team streamlines your data workflows effortlessly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3: FLEXIBLE HIRING MODELS
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#F4F8FC] font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Our Flexible Hiring Models: Find the Perfect Fit For Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium max-w-3xl mx-auto">
              Hire Data Scientist Developers from Firevy.co Starts from
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {hiringModelCards.map((card) => {
              const Icon = card.IconComp;
              return (
                <div
                  key={card.id}
                  className={`relative bg-white rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    card.isFeatured
                      ? 'border-[3px] border-[#006095] shadow-xl'
                      : 'border border-slate-200/70 shadow-xs hover:shadow-md'
                  }`}
                >
                  {card.saveText ? (
                    <div className="text-center mb-2">
                      <span className="text-xs font-bold text-[#006095] tracking-wide">
                        {card.saveText}
                      </span>
                    </div>
                  ) : (
                    <div className="h-6 mb-2"></div>
                  )}

                  <div>
                    <div className="w-14 h-14 rounded-full bg-cyan-50 text-[#006095] flex items-center justify-center mx-auto mb-4 border border-cyan-100/80">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>

                    <div className="text-center space-y-1 mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                        {card.badgeText && (
                          <span className="bg-[#E3F2FD] text-[#006095] font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                            {card.badgeText}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{card.subtitle}</p>
                      <div className="pt-2">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                          {card.price}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3.5 my-6 text-left border-t border-slate-100 pt-6">
                      {card.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm font-normal text-slate-600 leading-snug">
                          <Check className="w-4 h-4 text-[#006095] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-2 text-center">
                    <a
                      href="#quote-form"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full bg-[#006095] hover:bg-[#004d77] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-xs text-sm cursor-pointer"
                    >
                      Hire Now
                    </a>
                    <div className="bg-[#EAF4FB] text-[#006095] text-[11px] font-semibold py-1.5 px-4 rounded-full inline-block text-center max-w-full">
                      We sign NDA for all our projects.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: COMPARISON TABLE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button className="text-slate-400 hover:text-slate-700 transition-colors text-2xl font-light px-2 cursor-pointer" aria-label="Previous">
              ←
            </button>
            <button className="text-[#006095] hover:text-slate-900 transition-colors text-2xl font-light px-2 cursor-pointer" aria-label="Next">
              →
            </button>
          </div>

          <div className="text-center max-w-4xl mx-auto space-y-2 mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Hire Data Scientist Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#005C8A] text-white font-bold text-xs sm:text-sm">
                    <th className="py-3.5 px-6 border-r border-cyan-800/40 w-1/4">Range of Developers</th>
                    <th className="py-3.5 px-6 border-r border-cyan-800/40 w-1/4">Junior Developers</th>
                    <th className="py-3.5 px-6 border-r border-cyan-800/40 w-1/4">Mid-Level Developers</th>
                    <th className="py-3.5 px-6 w-1/4">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Approx Cost</td>
                    <td className="py-3.5 px-6 font-bold text-slate-900 border-r border-slate-200">$17</td>
                    <td className="py-3.5 px-6 font-bold text-slate-900 border-r border-slate-200">$22</td>
                    <td className="py-3.5 px-6 font-bold text-slate-900">$29</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Years of Experience</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">1-3 Years</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">3-5 Years</td>
                    <td className="py-3.5 px-6">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Project Manager</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Time Zone Flexibility</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Quality Guarantee</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">Yes</td>
                    <td className="py-3.5 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-white bg-[#005C8A] border-r border-cyan-800/40">Working Hours</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6 border-r border-slate-200">40 hours/ Week</td>
                    <td className="py-3.5 px-6">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: HIRE EXPERT DATA SCIENTIST DEVELOPERS FOR GLOBAL NEEDS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Expert Data Scientist Developers For Global Needs
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We provide flexible employment models aligned with the complexity, timeline, and budget of your AI and data science initiatives. Whether you are building an AI team from scratch or supplementing an existing data engineering unit, our data scientists integrate smoothly into your team. Firevy.co serves clients globally across the USA, UK, Canada, Australia, India, and the UAE with engineers accustomed to time-zone flexibility and remote agile workflows. Our emphasis on model accuracy, rapid iteration, and secure deployment makes us a preferred AI partner.
              </p>
            </div>

            {/* Right Column Illustration */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-[480px]">
                <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-sm" fill="none">
                  <path d="M 60 170 C 60 90, 130 50, 210 70 C 280 30, 390 50, 430 110 C 480 160, 470 260, 410 310 C 350 360, 130 360, 80 310 C 40 260, 60 210, 60 170 Z" fill="#D4ECF9" />

                  <rect x="220" y="310" width="60" height="25" rx="4" fill="#94A3B8" />
                  <ellipse cx="250" cy="335" rx="55" ry="10" fill="#64748B" />

                  <rect x="95" y="115" width="310" height="200" rx="16" fill="#006095" />
                  <rect x="105" y="125" width="290" height="180" rx="10" fill="#38BDF8" />

                  <circle cx="120" cy="138" r="4" fill="#EF4444" />
                  <circle cx="132" cy="138" r="4" fill="#F59E0B" />
                  <circle cx="144" cy="138" r="4" fill="#10B981" />

                  <rect x="120" y="152" width="80" height="60" rx="6" fill="#FFFFFF" opacity="0.9" />
                  <rect x="210" y="152" width="80" height="60" rx="6" fill="#006095" />
                  <rect x="300" y="152" width="85" height="60" rx="6" fill="#FFFFFF" opacity="0.9" />
                  <rect x="120" y="222" width="170" height="12" rx="4" fill="#FFFFFF" opacity="0.8" />
                  <rect x="120" y="242" width="120" height="10" rx="4" fill="#006095" />
                  <rect x="120" y="260" width="245" height="12" rx="4" fill="#FFFFFF" opacity="0.9" />

                  <circle cx="250" cy="285" r="18" fill="#006095" stroke="#FFFFFF" strokeWidth="2.5" />
                  <text x="250" y="291" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">DS</text>

                  <circle cx="365" cy="140" r="22" fill="#38BDF8" />
                  <path d="M 365 147 C 362 144, 355 137, 355 133 C 355 129, 358 126, 362 126 C 364 126, 365 127, 365 128 C 365 127, 366 126, 368 126 C 372 126, 375 129, 375 133 C 375 137, 368 144, 365 147 Z" fill="#FFFFFF" />

                  <rect x="305" y="80" width="40" height="30" rx="6" fill="#38BDF8" />
                  <path d="M 315 98 L 325 88 L 335 98 Z" fill="#FFFFFF" />

                  <circle cx="140" cy="165" r="14" fill="#FDBA74" />
                  <path d="M 128 165 C 128 150, 152 150, 152 165 Z" fill="#0F172A" />
                  <path d="M 125 185 L 155 185 L 150 290 L 130 290 Z" fill="#006095" />
                  <rect x="132" y="290" width="8" height="35" fill="#1E293B" />
                  <rect x="142" y="290" width="8" height="35" fill="#1E293B" />

                  <circle cx="390" cy="165" r="14" fill="#FDBA74" />
                  <path d="M 378 165 C 378 145, 402 145, 402 165 Z" fill="#0F172A" />
                  <path d="M 375 185 L 405 185 L 400 290 L 380 290 Z" fill="#006095" />
                  <rect x="382" y="290" width="8" height="35" fill="#1E293B" />
                  <rect x="392" y="290" width="8" height="35" fill="#1E293B" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Data Scientist Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: DATA SCIENTIST DEVELOPMENT TEAM FOR ENTERPRISE PROJECTS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Data Scientist Development Team for Enterprise Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 bg-[#F0F7FC] rounded-2xl p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden border border-cyan-100/60 shadow-xs">
              <div className="relative z-10 space-y-6">
                <div className="text-[#0083B0]">
                  <svg viewBox="0 0 48 48" className="w-14 h-14 fill-current">
                    <path d="M12 28 C 12 18, 20 12, 28 10 L 26 14 C 21 16, 17 20, 17 25 L 23 25 L 23 38 L 12 38 Z M 28 28 C 28 18, 36 12, 44 10 L 42 14 C 37 16, 33 20, 33 25 L 39 25 L 39 38 L 28 38 Z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-[#006095] leading-[1.2] tracking-tight">
                  Instant Access To<br />
                  Top Talent With<br />
                  Hard-To-Find Skills
                </h3>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Whether you are building a predictive model MVP or scaling a global AI platform, our Data Scientist engineering team will assist you in designing secure, modular, high-accuracy machine learning architectures. Our full-cycle data science services include data cleaning, feature engineering, model training, validation, cloud deployment, and continuous monitoring. If you're looking to hire Data Scientist developers proficient in Python, PyTorch, TensorFlow, Scikit-Learn, and cloud MLOps, we bring the expertise and reliability you need.
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
          SECTION 9: MEET FIREVY.CO'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
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
                  title: 'Data Science & Predictive AI Squad',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas'],
                  composition: ['1 Lead Data Scientist', '3 ML Engineers', '1 Computer Vision Specialist', '1 Data Ops Lead'],
                  summary: 'High-performing data science team engineering predictive AI models and enterprise data analytics.'
                },
                {
                  id: 2,
                  category: 'Product Development',
                  title: 'LLM & Gen AI Engineering Team',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['LangChain', 'LlamaIndex', 'OpenAI', 'Pinecone', 'Python'],
                  composition: ['1 AI Architect', '4 AI/ML Engineers', '1 Prompt Engineer', '1 Data Scientist'],
                  summary: 'Specialized Generative AI squad building custom RAG systems, LLM fine-tuning, and neural search.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Big Data & ML Pipelines Squad',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Apache Spark', 'Airflow', 'Databricks', 'AWS SageMaker', 'SQL'],
                  composition: ['1 Principal Data Engineer', '3 Data Scientists', '1 MLOps Engineer'],
                  summary: 'Dedicated Big Data & MLOps team building automated ETL pipelines and real-time inference models.'
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
          SECTION 9A: LEVERAGE THE EXPERTISE OF FIREVY.CO DEDICATED DEVELOPERS
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
                  desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.'
                },
                {
                  title: 'Data Scientists ↗',
                  desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                },
                {
                  title: 'Machine Learning Developers',
                  desc: "Employ our team's best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!"
                },
                {
                  title: 'Python Developers',
                  desc: 'Hire senior Python developers for AI/ML modeling, backend REST APIs, data processing pipelines, web scraping, and serverless cloud backend automation. Collaborate with our Python experts for robust data science applications.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F0F7FC] rounded-2xl p-6 sm:p-7 border border-blue-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center space-x-1">
                      <span>{item.title}</span>
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
                  title: 'Predictive Vehicle Analytics Software',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80'
                },
                {
                  title: 'Automated Fraud Detection Platform',
                  image: '/images/car_wash_app_mockup.jpg'
                },
                {
                  title: 'AI Patient Health Monitoring App',
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
          SECTION 9E: EMPLOY THE ADVANCED PROFICIENCY OF FIREVY.CO'S DEDICATED DEV TEAM
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
          SECTION 10B: THE EXPERTISE OF OUR DATA SCIENTIST DEVELOPERS SERVICES
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                The Expertise Of Our Data Scientist Developers Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl mx-auto">
                We have a pool of dedicated Data Scientist developers available for hire. Take a look at the expertise of our developers:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Custom Predictive AI Modeling',
                  desc: 'Unlock the power of your enterprise data by hiring our devoted Data Scientists who engineer high-accuracy predictive machine learning models.',
                  iconBg: 'bg-purple-100 text-purple-600',
                  IconComp: Brain
                },
                {
                  title: 'Deep Learning & Neural Networks',
                  desc: 'Hire our Data Scientist developers to construct deep neural networks, computer vision algorithms, and custom NLP transformers tailored to your industry.',
                  iconBg: 'bg-emerald-100 text-emerald-600',
                  IconComp: Cpu
                },
                {
                  title: 'Enterprise Big Data Pipelines',
                  desc: 'You can now hire Data Scientist developers to design scalable data processing pipelines, ETL workflows, and real-time streaming architectures.',
                  iconBg: 'bg-orange-100 text-orange-600',
                  IconComp: Database
                },
                {
                  title: 'LLM Fine-Tuning & Gen AI',
                  desc: 'Looking for specialized engineers to fine-tune open-source LLMs, build RAG applications, and integrate generative AI? Hire our data science experts.',
                  iconBg: 'bg-amber-100 text-amber-600',
                  IconComp: Layers
                },
                {
                  title: 'Model Monitoring & MLOps',
                  desc: 'Employing our remote Data Scientists ensures your deployed machine learning models are continuously monitored, retrained, and maintained.',
                  iconBg: 'bg-pink-100 text-pink-600',
                  IconComp: Activity
                },
                {
                  title: 'AI Integration & Infrastructure',
                  desc: 'Integrate data science models smoothly with your existing frontend and backend web applications using RESTful APIs and cloud MLOps platforms.',
                  iconBg: 'bg-cyan-100 text-cyan-600',
                  IconComp: Binary
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
          SECTION 11: PROUD AWARDS BANNER & BENEFITS
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
                  desc: 'One of the most significant advantages of hiring dedicated developers is access to a global talent pool. We lower labor costs without sacrificing model quality or precision.',
                  IconComp: Coins
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated data scientists are experts in AI/ML engineering. You can swiftly overcome talent shortages by employing dedicated developers for specialized tasks.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time employment overhead. They swiftly adapt to project needs and data complexity.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated data scientists focus exclusively on your data products, ensuring higher model accuracy, cleaner code, and faster iteration cycles.',
                  IconComp: ShieldCheck
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers accelerate AI deployment by using pre-built pipelines and experienced workflows, bringing your data products to market fast.',
                  IconComp: Zap
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated data scientists bring cutting-edge research and algorithm insights to your business, transforming raw data into competitive advantages.',
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
        title="Hire Data Scientist Developer In 4 Easy Steps"
        subtitle="Data Scientist Developer offers a number of advantages over traditional setups. Some of them are:"
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
          SECTION 16: FAQ SECTION & FOOTER SECTIONS
          ============================================================ */}
      <SapphireFaqSection faqs={faqs} />
      <SocialMediaSection />
      <RecentBlogsSection />
      <WhatSetsUsApartSection />
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireDataScientistDevelopersService;
