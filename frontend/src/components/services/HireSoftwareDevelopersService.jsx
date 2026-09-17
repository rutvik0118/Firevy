import React, { useState } from 'react';
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
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import { SuccessStoriesSection } from '../common/SuccessStoriesSection';
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

export const HireSoftwareDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({ 0: 'tech', 1: 'tech', 2: 'tech', 3: 'tech', 4: 'tech', 5: 'tech' });
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [selectedTeamModal, setSelectedTeamModal] = useState(null);
  const [leverageTab, setLeverageTab] = useState('In Demand');
  const [activeInsightIndustry, setActiveInsightIndustry] = useState('Automotive');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  // Software Developer FAQs
  const faqs = [
    {
      q: 'How much does it cost to hire a dedicated software developer?',
      a: 'Our pricing is straightforward to understand. You may hire a dedicated software developer from us starting at $21/hour or on flexible monthly dedicated contracts based on experience level.'
    },
    {
      q: 'What engagement models do you offer for software developers?',
      a: 'We offer full-time dedicated developers, part-time hourly contracts, or project-based fixed milestone teams tailored to your engineering roadmap.'
    },
    {
      q: 'Which company is best for software development services?',
      a: 'Firevy.co is a top-rated software engineering company with 20+ years of industry leadership and a team of senior engineers delivering enterprise software solutions globally.'
    },
    {
      q: 'Do you give support and maintenance services after Development?',
      a: 'Yes, we offer comprehensive post-launch support and SLA maintenance packages including security patch rollouts, server scaling, performance tuning, and 24/7 incident monitoring.'
    },
    {
      q: 'Is software development talent in high demand?',
      a: 'Yes, highly skilled full-stack, cloud, and backend software engineers are in high demand to power digital transformation and modern SaaS products.'
    },
    {
      q: 'Why should I hire software developers from Firevy.co?',
      a: 'Our dedicated software developers bring deep domain expertise, bi-weekly agile velocity, 100% IP & code ownership, direct communication, and 15-day risk-free trials to guarantee project success.'
    },
    {
      q: 'Do you offer software development services for global clients like the USA, UK, Canada, and Australia?',
      a: 'Yes, we serve clients globally across the USA, UK, Canada, Australia, UAE, and Europe, adapting seamlessly to your time zone and workflow requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire Software Developers | Dedicated Software Engineers & Programmers"
        description="Hire dedicated software developers from Firevy.co. Top 1% vetted full-stack, backend, frontend, and cloud software engineers for custom enterprise software development."
        keywords="Hire Software Developers, Hire Dedicated Software Engineers, Custom Software Development Company, Dedicated Programmers"
      />

      {/* ============================================================
          SECTION 1: HERO SECTION
          ============================================================ */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                  Hire Software Developers
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Hire Generative AI Developers, expertise producing bespoke software solutions with highly skilled software development services specialists of having Offshore Software Development Teams diverse range of businesses worldwide.
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

              {/* CTA Section with Capsule Pill Bar */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#006095]">Get Top Talent Work for you At</p>
                <div className="bg-[#0083B0] p-1.5 rounded-2xl inline-flex items-center space-x-2 shadow-xs">
                  <span className="bg-[#0083B0] text-white font-black px-5 py-2.5 rounded-xl text-sm sm:text-base flex items-center space-x-2">
                    <span className="text-xs">💡</span>
                    <span>$21/Hourly*</span>
                  </span>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-bold px-7 py-2.5 rounded-xl text-sm transition-all shadow-xs cursor-pointer"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Banner (Image Form) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <img
                src="/images/software_hero_illustration.svg"
                alt="Hire Software Developers"
                className="w-full max-w-[480px] h-auto object-contain mx-auto drop-shadow-xl"
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
          SECTION 3: HIRE DEDICATED SOFTWARE DEVELOPERS AT COMPETITIVE RATES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic Illustration Column (Image Form) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/software_dev_laptop_hero.svg"
                  alt="Hire Software Developers At Competitive Rates"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Hire Software Developers At Competitive Rates
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Hire Software Developers at Competitive Rates to complete software development projects more quickly and effectively. With <strong>Hire dedicated development team</strong> services, you can design technological solutions that are fully configurable, resilient, and user-friendly for your organization's digital transformation. Choose Hire AI Powered Software Developers to access top global talent and build high-quality, unique solutions consistently.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3B: OUR FLEXIBLE HIRING MODELS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Our Flexible Hiring Models: Find the Perfect Fit For Your Project
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hire Software Developers from Firevy.co Starts from,
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 items-stretch">
              {[
                {
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
                  title: 'Quarterly',
                  subtitle: 'Starting From',
                  price: '$ 7999.00/ Month',
                  IconComp: Sliders,
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
                  title: 'Yearly',
                  subtitle: 'Starting From',
                  price: '$31000.0',
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
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                      card.isFeatured
                        ? 'border-2 border-[#006095] bg-white shadow-xl scale-105 z-10'
                        : 'border border-slate-200 bg-white shadow-xs hover:shadow-md'
                    }`}
                  >
                    {card.isFeatured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                        {card.saveText && (
                          <span className="bg-white border border-[#006095] text-[#006095] text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs">
                            {card.saveText}
                          </span>
                        )}
                        {card.badgeText && (
                          <span className="bg-[#006095] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs">
                            {card.badgeText}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="space-y-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#F0F7FC] text-[#006095] flex items-center justify-center mx-auto">
                        <CardIcon className="w-7 h-7 stroke-[1.8]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                        <p className="text-xs text-slate-600 mt-1">{card.subtitle}</p>
                        <p className="text-2xl font-black text-[#006095] mt-2">{card.price}</p>
                      </div>

                      <div className="space-y-3 text-left pt-4 border-t border-slate-100">
                        {card.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                            <span className="text-[#006095] font-bold shrink-0 mt-0.5">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 space-y-3">
                      <a
                        href="#quote-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="block w-full bg-[#006095] hover:bg-[#0083B0] text-white font-bold py-3 rounded-lg text-sm text-center transition-all shadow-md cursor-pointer"
                      >
                        Hire Now
                      </a>
                      <div className="bg-[#F0F7FC] rounded-full py-1.5 px-4 text-center">
                        <p className="text-[11px] font-semibold text-[#006095]">We sign NDA for all our projects.</p>
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
          SECTION 3C: DEVELOPMENT PROFICIENCY TABLE
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Development Proficiency
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hire Software Developers to meet your business perks by leveraging our technical elegance.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#006095] text-white">
                    <th className="py-4 px-6 font-bold text-sm bg-[#006095] text-white">Range of Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Junior Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Mid-Level Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Approx Cost</td>
                    <td className="py-4 px-6 font-semibold">$17</td>
                    <td className="py-4 px-6 font-semibold">$22</td>
                    <td className="py-4 px-6 font-semibold">$29</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Years of Experience</td>
                    <td className="py-4 px-6">1-3 Years</td>
                    <td className="py-4 px-6">3-5 Years</td>
                    <td className="py-4 px-6">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Project Manager</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Time Zone Flexibility</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Quality Guarantee</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Working Hours</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 4: BRIEF ABOUT OUR SOFTWARE DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Software Development Services
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                <p>
                  Brief About Our Software Development Services: We are a reputed company filled with brilliant and experienced developers that work with front-end and backend technologies, frameworks, and languages to build the application of your dreams. When you hire dedicated software developers, Hire AI Software Developers, or choose to hire software consultant, you can be sure there will never be a problem with quality or deadline.
                </p>
              </div>
            </div>

            {/* Right Column Illustration (Image Form) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/software_dev_desk_brief.svg"
                  alt="Brief About Our Software Development Services"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated Software Development Company on Clutch" />

      {/* ============================================================
          SECTION 7: SOFTWARE DEVELOPMENT TEAM FOR ENTERPRISE PROJECTS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight text-center mb-12 sm:mb-16">
            Software Development Team for Enterprise Projects
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
                  When you're building an MVP or onboarding a global product, our software engineering team will assist you in designing secure, modular, high-performance architectures. We like to say our full-cycle development services include planning, coding, testing, deploying, and maintaining your project and ensuring your software platform is future-proof. If you're looking to hire software developers that are familiar with modern web & cloud engineering, infrastructure, and application security, we have the skills and consistency you'll need from a technology vendor.
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
                  title: 'Enterprise Software Squad',
                  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
                  techs: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'GraphQL'],
                  composition: ['1 Tech Lead', '3 Senior Fullstack Devs', '1 UI/UX Specialist', '1 QA Engineer'],
                  summary: 'High-performing software engineering squad building enterprise web applications.'
                },
                {
                  id: 2,
                  category: 'Product Development',
                  title: 'SaaS Product Dev. Team',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
                  techs: ['Java', 'Spring Boot', 'DevOps', 'Prisma', 'PostgreSQL'],
                  composition: ['1 Product Manager', '4 Full-Stack Engineers', '1 DevOps Specialist', '1 UI/UX Lead'],
                  summary: 'Specialized SaaS product squad engineering cloud-native microservices.'
                },
                {
                  id: 3,
                  category: 'Trending',
                  title: 'Fullstack Software Squad',
                  image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop&q=80',
                  techs: ['Python', 'Django', 'AWS', 'Tailwind CSS'],
                  composition: ['1 Solution Architect', '3 Senior Software Engineers', '1 Frontend Lead'],
                  summary: 'Dedicated software engineers delivering high-performance web applications.'
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
                      leverageTab === tab
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
                  title: 'Next JS Developers',
                  desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
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
                <div key={idx} className="bg-[#F0F7FC] rounded-2xl p-6 border border-cyan-100/70 shadow-2xs space-y-3">
                  <h4 className="text-base font-bold text-slate-900 flex items-center space-x-1.5">
                    <span>{item.title}</span>
                    <span className="text-slate-700 text-sm font-semibold">↗</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* View All Portfolio Button */}
            <div className="text-center pt-6">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3 rounded-lg text-sm transition-all shadow-md cursor-pointer"
              >
                View All Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 10: INDUSTRY-FOCUSED INSIGHTS
          ============================================================ */}
      <IndustryFocusedInsightsSection title="Industry-Focused Insights To Elevate Your Business" subtitle="Trending Industries that Use Dedicated Developers" />

      {/* ============================================================
          SECTION 11: ABOUT US STATS BANNER
          ============================================================ */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ============================================================
          SECTION 12: SECTORS THRIVING SECTION
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke Dedicated Developers" />

      {/* ============================================================
          SECTION 13: TECH STACK PROFICIENT GRID (EMPLOY ADVANCED PROFICIENCY)
          ============================================================ */}
      <TechStackProficientGrid />

      {/* ============================================================
          SECTION 14: ENGAGEMENT MODELS SECTION (PROJECT RESPONSIBILITIES)
          ============================================================ */}
      <EngagementModelsSection />

      {/* ============================================================
          SECTION 15: SUCCESS STORIES SECTION
          ============================================================ */}
      <SuccessStoriesSection />

      {/* ============================================================
          SECTION 15: PROUD AWARDS BANNER
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          SECTION 16: VIDEO TESTIMONIALS & STORY
          ============================================================ */}
      <VideoTestimonialsStory />

      {/* ============================================================
          SECTION 17: 4 STEPS TO HIRE DEVELOPERS
          ============================================================ */}
      <HireDeveloper4Steps />

      {/* ============================================================
          SECTION 18: SUCCESS MATRIX GRID
          ============================================================ */}
      <SuccessMatrixGrid />

      {/* ============================================================
          SECTION 19: INNOVATIVE SOLUTION VIDEO
          ============================================================ */}
      <InnovativeSolutionVideo />

      {/* ============================================================
          SECTION 20: WORK PROCESS GRID
          ============================================================ */}
      <WorkProcessGrid />

      {/* ============================================================
          SECTION 21: CLIENT REVIEWS DARK SECTION
          ============================================================ */}
      <ClientReviewsDarkSection />

      {/* ============================================================
          SECTION 22: DIGITAL TRANSFORMATION CASE STUDIES
          ============================================================ */}
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          SECTION 23: SAPPHIRE FAQ SECTION
          ============================================================ */}
      <SapphireFaqSection faqs={faqs} />

      {/* ============================================================
          SECTION 22: SOCIAL MEDIA SECTION
          ============================================================ */}
      <SocialMediaSection />

      {/* ============================================================
          SECTION 23: RECENT BLOGS SECTION
          ============================================================ */}
      <RecentBlogsSection />

      {/* ============================================================
          SECTION 24: WHAT SETS US APART SECTION
          ============================================================ */}
      <WhatSetsUsApartSection title="What Sets Us Apart As Software Development Company?" />

      {/* ============================================================
          SECTION 25: SUBSCRIBE NEWSLETTER SECTION
          ============================================================ */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireSoftwareDevelopersService;
