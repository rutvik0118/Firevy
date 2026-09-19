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

export const HireOpenAiDevelopersService = () => {
  const [leverageTab, setLeverageTab] = useState('In Demand');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const openAiFaqs = [
    {
      q: '1. What does an OpenAI Developer do?',
      a: 'An OpenAI Developer specializes in building intelligent applications powered by OpenAI models including GPT-4, GPT-4o, DALL-E, Whisper, Embeddings, and the Assistants API. They design custom RAG pipelines, fine-tune models on enterprise data, integrate APIs into existing software, and create automated conversational workflows.'
    },
    {
      q: '2. Why should I hire an OpenAI developer for my business?',
      a: 'Hiring an OpenAI developer enables your business to automate complex tasks, build custom customer support assistants, extract automated insights from enterprise documents, improve user engagement, and create innovative AI-driven features that boost operational productivity.'
    },
    {
      q: '3. Can you integrate OpenAI APIs into our existing website or app?',
      a: 'Yes! Our OpenAI developers seamlessly integrate OpenAI REST APIs, WebSockets, and SDKs into Web, Mobile (iOS/Android), CRM, ERP, and cloud platforms with minimal friction.'
    },
    {
      q: '4. What OpenAI models and tools do your developers specialize in?',
      a: 'Our engineers master GPT-4o, GPT-4 Turbo, GPT-3.5 Turbo, DALL-E 3, Whisper, Text Embeddings 3, OpenAI Assistants API, Function Calling, LangChain, LlamaIndex, Vector DBs (Pinecone, Qdrant), and Python/Node.js backend architectures.'
    },
    {
      q: '5. How do you protect proprietary data during OpenAI API integration?',
      a: 'We implement zero data retention policies, private VPC endpoints, end-to-end encryption, strict NDAs, and ensure your proprietary data is never used by OpenAI to train public foundation models.'
    },
    {
      q: '6. What is Retrieval-Augmented Generation (RAG) and why is it useful?',
      a: 'RAG allows OpenAI models to access your company\'s real-time internal databases, PDFs, and knowledge bases without full model retraining, producing highly accurate, verifiable, and hallucination-free answers.'
    },
    {
      q: '7. Can you fine-tune custom OpenAI models on our corporate data?',
      a: 'Yes, we perform custom dataset curation, synthetic data generation, and model fine-tuning via OpenAI API to align responses perfectly with your domain jargon, brand tone, and business logic.'
    },
    {
      q: '8. How much does it cost to hire an OpenAI Developer from Firevy.co?',
      a: 'Our dedicated OpenAI Developer pricing starts at $21/hour. We also offer flexible monthly ($2,850/mo), quarterly, and dedicated team engagement models with zero recruitment overhead.'
    },
    {
      q: '9. Do you sign non-disclosure agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs prior to project discovery, guaranteeing 100% intellectual property (IP) ownership and complete confidentiality.'
    },
    {
      q: '10. How quickly can we onboard an OpenAI development team?',
      a: 'You can review pre-screened developer profiles, interview candidates, and kick off your risk-free trial within 48 to 72 hours.'
    },
    {
      q: '11. Which company offers top OpenAI developers for hire in USA & India?',
      a: 'Firevy.co is a top-rated AI development company in India and USA with 23+ years of IT excellence, 320+ 5-star Clutch reviews, and certified OpenAI engineers.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#006095] selection:text-white">
      <SEO
        title="Hire OpenAI Developer | Dedicated OpenAI API & LLM Engineers"
        description="Hire dedicated OpenAI Developers from Firevy.co. Expert GPT-4o, GPT-4, Assistants API, RAG, Fine-tuning, and OpenAI integration developers."
        keywords="Hire OpenAI Developer, Hire OpenAI Engineers, Hire GPT-4 Developers, OpenAI API Integration, Hire LLM Engineers"
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
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                  Hire OpenAI Developer
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
                  Want to create smart, next-generation applications? Employ an OpenAI Developer from our skilled team to incorporate advanced AI features into your offerings. From ChatGPT integration to natural language processing (NLP) and automated decision-making, our team excels at creating scalable, AI-driven applications designed specifically for your business requirements. We offer Open AI developer services for startups, enterprises, and businesses looking to Hire Enterprise OpenAI Developers and advance past simple automation to create intelligent, conversational, and context-sensitive systems.
                </p>
              </div>

              {/* 4 Metric Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 border-y border-slate-100/80">
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

            {/* Right Hero Graphic Banner */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <img
                src="/images/openai_hero_robot.svg"
                alt="Hire OpenAI Developer"
                className="w-full max-w-[580px] sm:max-w-[600px] lg:max-w-[640px] xl:max-w-[680px] h-auto object-contain mx-auto drop-shadow-xl transform lg:scale-110 xl:scale-115 transition-transform origin-center"
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
          SECTION 3: HIRE OPENAI DEVELOPER & ENGINEERS REMOTELY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/openai_remote_engineers.svg"
                  alt="Hire OpenAI Developer & Engineers Remotely"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Hire OpenAI Developer & Engineers Remotely
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our group of OpenAI engineers is ready to work remotely and provide quick, secure, and scalable AI integrations. From fine-tuning GPT models to creating custom AI solutions, our developers have hands-on familiarity with OpenAI's API, Whisper, DALL-E, Codex, and more advanced technologies. Whether you are creating a customer service bot, code generation engine, AI copywriter, or smart analytics tool, we have the skills to provide it with precision. Businesses can Hire Generative AI OpenAI Developers who know how to responsibly and effectively utilize generative AI for smarter business outcomes.
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
                Hire OpenAI Developers from Firevy.co Starts from,
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
                Hire OpenAI Developers to meet your business perks by leveraging our technical elegance.
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
          SECTION 4: BEST OPENAI DEVELOPER FOR BUSINESS APPLICATIONS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-[1.15]">
                Best OpenAI Developer For Business Applications
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                <p>
                  We are experts in business automation with AI powered by OpenAI's ecosystem. Our developers understand how to develop secure, compliant, and ethical AI solutions that fit seamlessly into your current infrastructure. Be it CRMs, ERPs, or in-house dashboards – we make them intelligent. From conception to post-launch maintenance, our agile, open process covers it all. Businesses can Hire Affordable OpenAI Developers through our flexible engagement models, quick onboarding, and exclusive team of exceptional OpenAI developers ready to grow with your project aspirations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/openai_business_apps_illustration.svg"
                  alt="Best OpenAI Developer For Business Applications"
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
      <ClutchTopRatedBanner title="World Wide Top Rated OpenAI Development Company on Clutch" />

      {/* ============================================================
          SECTION 5B: DEDICATED OPENAI EXPERTS FOR CUSTOM AI DEVELOPMENT
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight text-center">
              Dedicated OpenAI Experts for Custom AI Development
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
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Don't accept cookie-cutter responses. With our dedicated OpenAI developers, you receive full-stack development for creating bespoke GPT-driven apps, knowledge assistants, recommendation systems, and AI tools that serve your niche. Struggling with OpenAI token limits, prompt engineering, or API cost optimization? Our developers make sure every detail of the solution is tuned for performance, speed, and price. Businesses can Hire Dedicated OpenAI Developers who know how to turn ideas into reliable, scalable, and fully functional AI systems.
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
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke OpenAI Developers" />

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
          SECTION 13: WHY CHOOSE US TO HIRE OPENAI DEVELOPER?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight">
                Why Choose Us to Hire OpenAI Developer?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert OpenAI Developers On-Demand',
                  desc: 'Hire top-tier OpenAI developers experienced in building smart AI-driven applications.',
                  IconComp: Bot,
                  bgClass: 'bg-purple-100/80 text-purple-600'
                },
                {
                  title: 'Custom AI Solution Development',
                  desc: 'We specialize in tailoring OpenAI models to meet your specific business requirements.',
                  IconComp: Cpu,
                  bgClass: 'bg-emerald-100/80 text-emerald-600'
                },
                {
                  title: 'Seamless API Integration',
                  desc: 'Get efficient integration of OpenAI APIs into your existing systems and products.',
                  IconComp: Sparkles,
                  bgClass: 'bg-rose-100/80 text-rose-500'
                },
                {
                  title: 'Affordable Hiring Models',
                  desc: 'Flexible engagement plans to fit startups, SMBs, and enterprise budgets alike.',
                  IconComp: Lock,
                  bgClass: 'bg-amber-100/80 text-amber-600'
                },
                {
                  title: 'Quick Onboarding & Project Kick-off',
                  desc: 'Start your project in days with a streamlined hiring and onboarding process.',
                  IconComp: Users,
                  bgClass: 'bg-pink-100/80 text-pink-600'
                },
                {
                  title: 'AI Development Support',
                  desc: 'We support projects from MVP to full-scale enterprise AI deployment.',
                  IconComp: Handshake,
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
      <HireDeveloper4Steps techName="OpenAI Developers" />

      {/* ============================================================
          SECTION 16: VIDEO TESTIMONIALS & STORY
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
      <SapphireFaqSection faqs={openAiFaqs} initialOpenIndex={0} />

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

export default HireOpenAiDevelopersService;
