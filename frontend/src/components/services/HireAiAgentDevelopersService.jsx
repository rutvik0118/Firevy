import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import { EngagementModelsSection } from '../home/EngagementModelsSection';
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
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import {
  Clock,
  Calendar,
  Briefcase,
  Sliders,
  Globe,
  Coins,
  Award,
  Zap,
  ShieldCheck,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Users,
  Lock,
  MessageSquare,
  Flag,
  Milestone,
  Database,
  CheckCircle2,
  RefreshCw,
  LineChart,
  PieChart,
  Smartphone,
  Code,
  Bot,
  Sparkles,
  Cpu,
  Layers,
  Timer
} from 'lucide-react';

export const HireAiAgentDevelopersService = () => {
  const [leverageTab, setLeverageTab] = useState('In Demand');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const aiAgentFaqs = [
    {
      q: '1. What does an AI Agent Developer do?',
      a: 'An AI Agent Developer designs, builds, and deploys autonomous AI agents, multi-agent workflows, and conversational assistants powered by LLMs (GPT-4, LLaMA 3, Claude), AutoGPT, CrewAI, LangGraph, and custom tool-use APIs.'
    },
    {
      q: '2. Why should I hire an AI Agent Developer for my business?',
      a: 'Hiring an AI Agent Developer enables your enterprise to automate complex multi-step workflows, handle autonomous customer interactions, streamline document processing, and connect internal databases securely.'
    },
    {
      q: '3. Can AI agents integrate with our existing enterprise software?',
      a: 'Yes, our AI agent developers seamlessly connect agents to CRMs, ERPs, Slack, Salesforce, HubSpot, database systems, and custom REST/GraphQL APIs.'
    },
    {
      q: '4. What frameworks do your AI Agent developers specialize in?',
      a: 'Our developers master LangChain, LangGraph, CrewAI, AutoGen, OpenAI Assistants API, LlamaIndex, Python, PyTorch, Vector DBs (Pinecone, Qdrant), and cloud MLOps pipelines.'
    },
    {
      q: '5. How secure are autonomous AI agents for corporate deployment?',
      a: 'We implement strict guardrails, human-in-the-loop (HITL) verification, SOC-2 readiness, HIPAA compliance, end-to-end encryption, and custom VPC/on-premise deployments.'
    },
    {
      q: '6. What is the difference between a chatbot and an autonomous AI agent?',
      a: 'While a standard chatbot only responds to single prompts, an autonomous AI agent can reason, plan, execute multi-step tool calls, call external APIs, query databases, and accomplish goals independently.'
    },
    {
      q: '7. Can you build multi-agent systems for complex operations?',
      a: 'Yes! We specialize in multi-agent orchestration where specialized agents (e.g. Researcher, Coder, Reviewer, Analyst) collaborate autonomously to solve high-complexity business tasks.'
    },
    {
      q: '8. What is the cost to hire a dedicated AI Agent Developer from Firevy.co?',
      a: 'Our dedicated AI Agent Developer pricing starts at $21/hour. We also offer flexible monthly ($2,850/mo) and quarterly engagement models with zero upfront recruitment costs.'
    },
    {
      q: '9. Do you sign non-disclosure agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before any project discussion, ensuring 100% intellectual property (IP) ownership and complete data confidentiality.'
    },
    {
      q: '10. How quickly can we onboard an AI Agent development team?',
      a: 'You can screen vetted candidate profiles, interview selected AI Agent developers, and start your trial within 48 to 72 hours.'
    },
    {
      q: '11. Which company offers top AI Agent developers for hire in USA & India?',
      a: 'Firevy.co is a top-rated AI development company in India and USA with 23+ years of IT experience, 320+ 5-star Clutch reviews, and certified AI/LLM engineers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire AI Agent Developer | Autonomous AI & Multi-Agent Experts"
        description="Hire dedicated AI Agent Developers from Firevy.co. Expert Autonomous AI Agents, Multi-Agent Systems, LangChain, CrewAI, and LLM Agent developers."
        keywords="Hire AI Agent Developer, Hire Autonomous AI Agent Developers, Multi Agent Developers, CrewAI Developers, LangGraph AI Engineers"
      />

      {/* ============================================================
          SECTION 1: HERO SECTION
          ============================================================ */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-white overflow-hidden border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[50px] font-[900] text-slate-950 tracking-tight leading-[1.12]">
                  Hire AI Agent Developer
                </h1>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7] max-w-3xl">
                  Are you in need of AI Agent developers that can build smart intelligent autonomous systems that improve user experience, minimize manual work and produce business efficiencies? You have come to the right place! At Firevy.co, you can Hire Affordable AI Agent Developers who create intelligent agents utilizing LLMs, machine learning models, intelligent workflows and privacy-preserving systems. Our AI-Agent developers can help your organization build AI assistants, autonomous AI bots, and multi-agent frameworks that are aligned with your objectives and desires for your business.
                </p>
              </div>

              {/* 4 Metric Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-3 border-y border-slate-100/80">
                <div>
                  <span className="block text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight">200+</span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-tight block mt-1">Dedicated Developers</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight">20+</span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-tight block mt-1">Fortunes 500 Companies</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight">2800+</span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-tight block mt-1">Project Completed</span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-[900] text-slate-950 tracking-tight">320+</span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-600 leading-tight block mt-1">5-Star Clutch Reviews</span>
                </div>
              </div>

              {/* CTA Section with Capsule Pill Bar */}
              <div className="space-y-2.5 pt-1">
                <p className="text-xs sm:text-sm font-bold text-[#006095]">Get Top Talent Work for you At</p>
                <div className="bg-[#0083B0] p-1.5 rounded-2xl inline-flex items-center space-x-2 shadow-xs">
                  <span className="bg-[#0083B0] text-white font-black px-6 py-3 rounded-xl text-base sm:text-lg flex items-center space-x-2">
                    <span className="text-sm">💡</span>
                    <span>$21/Hourly*</span>
                  </span>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-bold px-8 py-3 rounded-xl text-sm sm:text-base transition-all shadow-xs cursor-pointer"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Banner (Image Form) */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <img
                src="/images/llm_hero_illustration.svg"
                alt="Hire AI Agent Developer"
                className="w-full max-w-[580px] lg:max-w-[640px] h-auto object-contain mx-auto drop-shadow-xl"
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
          SECTION 3: AI AGENT DEVELOPMENT SOLUTIONS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/llm_consultants_robot_head.svg"
                  alt="AI Agent Development Solutions"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-[1.15]">
                AI Agent Development Solutions
              </h2>
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                We provide quick access to talented AI Agent software developers, making it easy to Hire Dedicated AI Agent Developers who can create custom AI solutions using OpenAI, LangChain, Microsoft Copilot, Meta's Llama, or any other LLM methods. If you want to create task-specific AI agents for customer service, workflow automation, or decision support, our engineers deliver quality AI skills and reliable system architecture with professional-level expertise.
              </p>
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                We integrate Custom AI Agent Development as a strategic component of your modern software ecosystem, interwoven into the internet using various cloud platforms, APIs, and backend services with logic built on autonomy and smart data processing. Businesses can Hire LLM AI Agent Developers from Firevy.co to build scalable, future-ready AI agent solutions. With global flexibility in hiring talent and a track record in delivering AI projects and solutions, we can help startups, SMBs, and enterprises build solutions for the future.
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
                Hire AI Agent Developers from Firevy.co Starts from,
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
                Hire AI Agent Developers to meet your business perks by leveraging our technical elegance.
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
          SECTION 4: BRIEF ABOUT AI AGENT DEVELOPMENT SERVICES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-[1.15]">
                Brief About AI Agent Development Services
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                <p>
                  At Firevy.co, we provide flexible hiring models – hire AI Agent engineer full-time, part-time or hourly to fit your development lifecycle and budget. Our teams can deliver in regions including India, USA, UK, Canada, Australia, and UAE so you'll always enjoy quality engineering support, cultural fit, and availability 24/7. We are committed to providing scalable, secure and agile AI solutions wherever you are.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/llm_consultants_robot_head.svg"
                  alt="Brief About AI Agent Development Services"
                  className="w-full h-auto object-contain mx-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 5: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="World Wide Top Rated AI Agent Development Company on Clutch" />

      {/* ============================================================
          SECTION 5B: WHO EXACTLY IS AN AI AGENT DEVELOPER?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight text-center">
              Who Exactly Is an AI Agent Developer?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Quote Box */}
              <div className="lg:col-span-5 bg-[#EAF5FB] rounded-2xl p-8 sm:p-10 border border-cyan-100/80 shadow-xs relative flex flex-col justify-center min-h-[220px]">
                <span className="block text-[#006095] text-5xl font-black leading-none mb-3">“</span>
                <h3 className="text-2xl sm:text-3xl font-[900] text-[#006095] tracking-tight leading-snug">
                  Instant Access To<br />Top Talent With<br />Hard-To-Find Skills
                </h3>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                  An AI Agent Developer is an engineer working at the intersection of artificial intelligence and intelligent automated agents including large language models (LLMs), natural-language processing (NLP), machine learning (ML), and/or multispectral sensors. OpenAI Developer Agent design and build agents that can process data, interact with APIs, and reason to decide what action to take, whether alone or as part of a larger multi-agent system. AI Agent Developers have mastered these frameworks and have further developed smart workflows, automation of complex tasks, and organization level AI insights with LLMs, NLP, and ML workflows.
                </p>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                  Best AI Agent Developer for CRM inherently leverage agile and asynchronous teams and, most likely, distributed team members across different time zones. AI Agent Developers engage in product planning and rapidly execute sprints in short product cycles targeting intelligent automated workflows and processes. They seamlessly integrate AI agents into customer relationship management (CRM) tools, and engineer fully autonomous virtual robots to deliver both agility and reliability.
                </p>

                <div className="pt-2">
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block bg-[#006095] hover:bg-[#004D7A] text-white font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
                  >
                    Let's Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 6: PREMIUM SERVICES GRID
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          SECTION 7: MEET FIREVY'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
          ============================================================ */}
      <SapphireSeasonedExpertsSection />

      {/* =========================================================================
          SECTION 8: LEVERAGE THE EXPERTISE OF FIREVY.CO DEDICATED DEVELOPERS
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
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                View All Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 9: INDUSTRY-FOCUSED INSIGHTS
          ============================================================ */}
      <IndustryFocusedInsightsSection title="Industry-Focused Insights To Elevate Your Business" subtitle="Trending Industries that Use Dedicated Developers" />

      {/* ============================================================
          SECTION 10: ABOUT US STATS BANNER
          ============================================================ */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ============================================================
          SECTION 11: SECTORS THRIVING SECTION
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke AI Agent Developers" />

      {/* =========================================================================
          SECTION 11B: EMPLOY THE ADVANCED PROFICIENCY OF FIREVY DEDICATED DEV TEAM
          ========================================================================= */}
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
                { title: '500+ Seasoned Experts', IconComp: Lightbulb },
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
          SECTION 11C: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ?
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Sapphire / Client Filter Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  type="button"
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
                  type="button"
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
                      <CardIcon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
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
          SECTION 12: TECH STACK PROFICIENT GRID
          ============================================================ */}
      <TechStackProficientGrid />

      {/* ============================================================
          SECTION 13: OUR AI AGENT DEVELOPMENT EXPERTISE INCLUDES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight">
                Our AI Agent Development Expertise Includes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Autonomous AI Agent Development',
                  desc: 'Building goal-driven agents capable of multi-step reasoning, planning, and autonomous execution.',
                  IconComp: Bot,
                  bgClass: 'bg-purple-100/80 text-purple-600'
                },
                {
                  title: 'Multi-Agent Systems & CrewAI',
                  desc: 'Orchestrating teams of specialized agents (LangGraph, CrewAI, AutoGen) collaborating on complex workflows.',
                  IconComp: Users,
                  bgClass: 'bg-emerald-100/80 text-emerald-600'
                },
                {
                  title: 'Tool-Use & API Function Calling',
                  desc: 'Equipping AI agents to execute SQL queries, send emails, query databases, and call REST APIs dynamically.',
                  IconComp: Cpu,
                  bgClass: 'bg-orange-100/80 text-orange-600'
                },
                {
                  title: 'RAG & Memory Integration',
                  desc: 'Connecting agents with vector search memory (Pinecone, Qdrant) for persistent long-term context.',
                  IconComp: Sparkles,
                  bgClass: 'bg-amber-100/80 text-amber-600'
                },
                {
                  title: 'Cloud MLOps & Agent Evaluation',
                  desc: 'Deploying agents with real-time logging, latency optimization, and human-in-the-loop (HITL) safety.',
                  IconComp: Layers,
                  bgClass: 'bg-rose-100/80 text-rose-600'
                },
                {
                  title: 'Enterprise AI Guardrails & Security',
                  desc: 'Enforcing strict prompt security, access controls, compliance, and zero data leakage.',
                  IconComp: ShieldCheck,
                  bgClass: 'bg-cyan-100/80 text-cyan-600'
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 border border-slate-100/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 text-left"
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bgClass}`}>
                        <CardIcon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
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
                className="inline-block bg-[#006095] hover:bg-[#004D7A] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Get A Free Quote For Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 14: PROUD AWARDS BANNER
          ============================================================ */}
      <ProudAwardsBanner />

      {/* ============================================================
          SECTION 15: 4 STEPS TO HIRE DEVELOPERS
          ============================================================ */}
      <HireDeveloper4Steps techName="AI Agent Developers" />

      {/* ============================================================
          SECTION 16: VIDEO TESTIMONIALS & STORY (OUR STORY, THEIR WORDS)
          ============================================================ */}
      <VideoTestimonialsStory />

      {/* ============================================================
          SECTION 17: BUSINESS FRIENDLY HIRING MODELS
          ============================================================ */}
      <EngagementModelsSection isLight={true} />

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
      <SapphireFaqSection faqs={aiAgentFaqs} initialOpenIndex={0} />

      {/* ============================================================
          SECTION 24: SOCIAL MEDIA SECTION
          ============================================================ */}
      <SocialMediaSection />

      {/* ============================================================
          SECTION 25: RECENT BLOGS SECTION
          ============================================================ */}
      <RecentBlogsSection />

      {/* ============================================================
          SECTION 26: SUBSCRIBE NEWSLETTER SECTION
          ============================================================ */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireAiAgentDevelopersService;
