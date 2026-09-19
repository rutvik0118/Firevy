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

export const HireLlmEngineersService = () => {
  const [leverageTab, setLeverageTab] = useState('In Demand');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const llmFaqs = [
    {
      q: '1. What does an LLM Engineer do?',
      a: 'An LLM (Large Language Model) Engineer designs, fine-tunes, deploys, and integrates foundational AI models such as GPT-4, LLaMA 3, Claude 3, and Mistral into enterprise software using techniques like RAG (Retrieval-Augmented Generation), vector databases, and custom prompt pipelines.'
    },
    {
      q: '2. Why should I hire an LLM engineer for my business?',
      a: 'Hiring an LLM engineer allows your company to build custom proprietary AI assistants, automate document intelligence, enhance customer support, and extract actionable insights from unstructured enterprise data securely.'
    },
    {
      q: '3. Can you fine-tune open-source LLMs on our internal company data?',
      a: 'Yes, our LLM engineers specialize in fine-tuning open-source models (LLaMA 3, Mistral, Falcon) using LoRA, QLoRA, and custom datasets, ensuring total data privacy with zero data leakage to public clouds.'
    },
    {
      q: '4. What is RAG (Retrieval-Augmented Generation) and why is it needed?',
      a: 'RAG connects LLMs to your private vector database (Pinecone, Qdrant, ChromaDB) so the model answers queries using your latest real-time enterprise documents with 100% factual accuracy and zero hallucinations.'
    },
    {
      q: '5. How secure is LLM integration for enterprise compliance?',
      a: 'We implement strict OWASP for LLMs security guidelines, SOC-2 readiness, HIPAA compliance, end-to-end data encryption, and local on-premise or private VPC model deployments.'
    },
    {
      q: '6. What LLM frameworks and toolchains do your engineers use?',
      a: 'Our engineers master LangChain, LlamaIndex, vLLM, Hugging Face, Ollama, DeepSpeed, PyTorch, Pinecone, Weaviate, and OpenAI Assistant APIs.'
    },
    {
      q: '7. Can LLM engineers integrate models into existing SaaS or mobile apps?',
      a: 'Yes! We seamlessly integrate LLM APIs and microservices into Web, iOS, Android, Salesforce, HubSpot, and custom enterprise ERPs via REST and gRPC APIs.'
    },
    {
      q: '8. What is the cost to hire a dedicated LLM engineer from Firevy.co?',
      a: 'Our dedicated LLM engineer pricing starts at $21/hour. We also offer flexible monthly ($2,850/mo) and quarterly engagement models with zero upfront recruitment costs.'
    },
    {
      q: '9. Do you sign non-disclosure agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before any project discussion, ensuring 100% intellectual property (IP) ownership and data confidentiality.'
    },
    {
      q: '10. How quickly can we onboard an LLM engineering team?',
      a: 'You can screen vetted candidate profiles, interview selected LLM engineers, and start your trial within 48 to 72 hours.'
    },
    {
      q: '11. Which company offers top LLM developers for hire in USA & India?',
      a: 'Firevy.co is a top-rated AI development company in India and USA with 23+ years of IT experience, 320+ 5-star Clutch reviews, and certified AI/LLM engineers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire LLM Engineers for AI Development | Large Language Model Experts"
        description="Hire dedicated LLM engineers from Firevy.co. Expert Large Language Model, GPT-4, LLaMA, Claude, RAG, and fine-tuning AI developers."
        keywords="Hire LLM Engineers, Hire LLM Developers, Hire Large Language Model Engineers, RAG Developers, Fine Tuning AI Engineers"
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
                  Hire LLM Engineers for AI Development
                </h1>
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7] max-w-3xl">
                  Engage Firevy.co's LLM Engineers to integrate Large Language Models (LLMs) into your products, processes, and services. From developing conversational AI, document processing automation, or internal GPT-like model customization, our engineers provide scalable, enterprise-level solutions. We are experts in open-source model fine-tuning and LLM deployment for real-world business use cases. Our LLM engineers are hands-on with GPT-4, LLaMA, Claude, Mistral, and other transformer-based models. From retrieval-augmented generation (RAG) to prompt engineering, we help you go to market faster, smarter AI apps.
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
                alt="Hire LLM Engineers for AI Development"
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
          SECTION 3: HIRE DEDICATED LLM ENGINEERS AT COMPETITIVE RATES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="/images/software_dev_laptop_hero.svg"
                  alt="Hire LLM Engineers At Competitive Rates"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Hire LLM Engineers At Competitive Rates
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Hire LLM Engineers at Competitive Rates to build custom Large Language Models, RAG vector pipelines, and domain-specific AI agents. With <strong>Hire dedicated AI engineering team</strong> services from Firevy.co, you can deploy enterprise-grade AI assistants that are fully configurable, secure, and seamlessly integrated into your cloud environment.
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
                Hire LLM Engineers from Firevy.co Starts from,
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
                Hire LLM Engineers to meet your business perks by leveraging our technical elegance.
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
          SECTION 4: LLM CONSULTANTS FOR ENTERPRISE AI PROJECTS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-[1.15]">
                LLM Consultants For Enterprise AI Projects
              </h2>
              <div className="space-y-4 text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                <p>
                  Firevy.co is a reputable AI development organization assisting businesses in the USA, UK, Canada, UAE, Australia, and India. Our LLM Prompt Engineer become part of your team—taking care of everything from model selection and training to deployment and scaling. We have flexible hiring models available so you can scale engineering capability on demand with full transparency, sprint planning, and quantifiable outcomes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/llm_consultants_robot_head.svg"
                  alt="LLM Consultants For Enterprise AI Projects"
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
      <ClutchTopRatedBanner title="World Wide Top Rated LLM Development Company on Clutch" />

      {/* ============================================================
          SECTION 5B: WHAT DOES AN LLM ENGINEER DO?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight text-center">
              What Does an LLM Engineer Do?
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
              <div className="lg:col-span-7 space-y-6 text-left">
                <p className="text-sm sm:text-[15px] lg:text-[16px] text-slate-600 font-normal leading-[1.7]">
                  An LLM Engineer develops, modifies, and optimizes large language models for particular functions such as summarization, Q&A, search, and generating content. They handle model architecture, prompt creation, dataset organization, performance optimization, and secure deployment. Hire LLM Engineer for AI Development from Firevy.co to integrate cutting-edge AI into your product—be it through comprehensive AI development, smart automation, or bespoke in-house LLMs designed for your business
                </p>

                <div>
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
          SECTION 6B: MEET FIREVY'S EXCEPTIONAL TEAM OF SEASONED EXPERTS
          ============================================================ */}
      <SapphireSeasonedExpertsSection />

      {/* =========================================================================
          SECTION 7: LEVERAGE THE EXPERTISE OF FIREVY.CO DEDICATED DEVELOPERS
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
          SECTION 8: INDUSTRY-FOCUSED INSIGHTS
          ============================================================ */}
      <IndustryFocusedInsightsSection title="Industry-Focused Insights To Elevate Your Business" subtitle="Trending Industries that Use Dedicated Developers" />

      {/* ============================================================
          SECTION 9: ABOUT US STATS BANNER
          ============================================================ */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ============================================================
          SECTION 10: SECTORS THRIVING SECTION
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke LLM Engineers" />

      {/* ============================================================
          SECTION 10B: EMPLOY THE ADVANCED PROFICIENCY SECTION
          ============================================================ */}
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
          SECTION 11: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ?
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
          SECTION 12: TECH STACK PROFICIENT GRID
          ============================================================ */}
      <TechStackProficientGrid />

      {/* ============================================================
          SECTION 13: OUR LLM ENGINEERING EXPERTISE INCLUDES
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight">
                Our LLM Engineering Expertise Includes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'LLM Fine-tuning & Customization',
                  desc: 'Tailored training using proprietary or domain-specific datasets for better accuracy and relevance.',
                  IconComp: Code,
                  bgClass: 'bg-purple-100/80 text-purple-600'
                },
                {
                  title: 'Prompt Engineering & Optimization',
                  desc: 'Crafting, testing, and refining prompts for precise, cost-effective AI interactions.',
                  IconComp: Bot,
                  bgClass: 'bg-emerald-100/80 text-emerald-600'
                },
                {
                  title: 'Model Integration via APIs',
                  desc: 'Integrate GPT-4, Claude, LLaMA, or open-source models into your product using scalable APIs.',
                  IconComp: Cpu,
                  bgClass: 'bg-orange-100/80 text-orange-600'
                },
                {
                  title: 'Retrieval-Augmented Generation (RAG)',
                  desc: 'Combine LLMs with vector search for contextual answers and private data retrieval.',
                  IconComp: Sparkles,
                  bgClass: 'bg-amber-100/80 text-amber-600'
                },
                {
                  title: 'Cloud/On-prem Deployment with MLOps',
                  desc: 'Deploy and monitor AI models with CI/CD, versioning, and GPU optimization.',
                  IconComp: Layers,
                  bgClass: 'bg-rose-100/80 text-rose-600'
                },
                {
                  title: 'Enterprise AI Compliance & Security',
                  desc: 'Implement robust data governance, privacy, and usage control for your AI workflows.',
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
          SECTION 14B: BENEFITS OF HIRING DEDICATED DEVELOPERS
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
          SECTION 15: 4 STEPS TO HIRE DEVELOPERS
          ============================================================ */}
      <HireDeveloper4Steps techName="LLM Engineers" />

      {/* ============================================================
          SECTION 16: VIDEO TESTIMONIALS & STORY (OUR STORY, THEIR WORDS)
          ============================================================ */}
      <VideoTestimonialsStory />

      {/* ============================================================
          SECTION 17: BUSINESS FRIENDLY HIRING MODELS
          ============================================================ */}
      <EngagementModelsSection isLight={true} />

      {/* ============================================================
          SECTION 17: SUCCESS MATRIX GRID
          ============================================================ */}
      <SuccessMatrixGrid />

      {/* ============================================================
          SECTION 18: INNOVATIVE SOLUTION VIDEO
          ============================================================ */}
      <InnovativeSolutionVideo />

      {/* ============================================================
          SECTION 19: WORK PROCESS GRID
          ============================================================ */}
      <WorkProcessGrid />

      {/* ============================================================
          SECTION 20: CLIENT REVIEWS DARK SECTION
          ============================================================ */}
      <ClientReviewsDarkSection />

      {/* ============================================================
          SECTION 21: DIGITAL TRANSFORMATION CASE STUDIES
          ============================================================ */}
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          SECTION 22: SAPPHIRE FAQ SECTION
          ============================================================ */}
      <SapphireFaqSection faqs={llmFaqs} initialOpenIndex={0} />

      {/* ============================================================
          SECTION 23: SOCIAL MEDIA SECTION
          ============================================================ */}
      <SocialMediaSection />

      {/* ============================================================
          SECTION 24: RECENT BLOGS SECTION
          ============================================================ */}
      <RecentBlogsSection />

      {/* ============================================================
          SECTION 25: WHAT SETS US APART SECTION
          ============================================================ */}
      <WhatSetsUsApartSection title="What Sets Us Apart As LLM Development Company?" />

      {/* ============================================================
          SECTION 26: SUBSCRIBE NEWSLETTER SECTION
          ============================================================ */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireLlmEngineersService;
