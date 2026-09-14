import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import {
  Check,
  ChevronDown,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Layers,
  ArrowRight,
  Code2
} from 'lucide-react';

export const SitecoreDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Sitecore Experience Platform',
    budget: '$15,000 - $35,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Sitecore Experience Platform',
        budget: '$15,000 - $35,000',
        message: ''
      });
    }, 6000);
  };

  const techStack = {
    cms: [
      { name: 'Sitecore XM Cloud', desc: 'Enterprise SaaS Headless CMS with Edge Delivery', icon: '☁️' },
      { name: 'Sitecore XP 10.3 / 10.4', desc: 'Full Experience Platform with Marketing Automation', icon: '⚡' },
      { name: 'Sitecore CDP & Personalize', desc: 'Real-Time Customer Data Platform & Decisioning', icon: '🎯' },
      { name: 'Sitecore OrderCloud', desc: 'Headless B2B/B2C Composable Commerce Engine', icon: '🛍️' },
      { name: 'Sitecore Content Hub', desc: 'Digital Asset Management (DAM) & Operations', icon: '📦' },
      { name: 'Sitecore Search', desc: 'AI-Powered Intelligent Enterprise Search', icon: '🔍' }
    ],
    languages: [
      { name: 'C# 12 & .NET Core / 8', desc: 'High-Performance Enterprise Managed Backend', icon: '💻' },
      { name: 'Sitecore JSS & Headless', desc: 'JavaScript SDK for Next.js, React, and Vue', icon: '⚛️' },
      { name: 'Next.js 14 & React', desc: 'Modern Hybrid SSR / Static Edge Experience', icon: '🚀' },
      { name: 'GraphQL & REST APIs', desc: 'Unified Experience Edge & Delivery Layer', icon: '🔄' },
      { name: 'TypeScript & Tailwind', desc: 'Modular Enterprise Design System Architecture', icon: '🎨' },
      { name: 'ASP.NET MVC & Helix', desc: 'Standardized Clean Architecture Principles', icon: '📐' }
    ],
    database: [
      { name: 'Microsoft SQL Server', desc: 'High-Availability Core & Master Database', icon: '🗄️' },
      { name: 'Azure SQL Database', desc: 'Elastic Managed Cloud Data Tier with Failover', icon: '☁️' },
      { name: 'MongoDB / Cosmos DB', desc: 'Scalable Experience Analytics & Sharding', icon: '🍃' },
      { name: 'Redis Enterprise', desc: 'High-Throughput Session & Content Cache', icon: '⚡' },
      { name: 'Solr / Azure Search', desc: 'High-Speed Enterprise Indexing Cluster', icon: '🔍' },
      { name: 'Azure Blob Storage', desc: 'Secure Cloud CDN Media Asset Delivery', icon: '🌐' }
    ],
    infrastructure: [
      { name: 'Microsoft Azure', desc: 'App Services, Kubernetes Service & Front Door', icon: '🔷' },
      { name: 'Sitecore Experience Edge', desc: 'Globally Distributed GraphQL Edge Endpoints', icon: '🌐' },
      { name: 'Docker & Kubernetes (AKS)', desc: 'Containerized Enterprise Cluster Orchestration', icon: '🐳' },
      { name: 'Azure DevOps CI/CD', desc: 'Automated Deployment & Infrastructure-as-Code', icon: '🚀' },
      { name: 'Dynatrace / App Insights', desc: 'Full-Stack Performance Monitoring & Telemetry', icon: '📊' },
      { name: 'OWASP & SOC2 Compliant', desc: 'Zero-Trust Enterprise Data Security Hardening', icon: '🔒' }
    ]
  };

  const faqs = [
    {
      q: "1. What is Sitecore and why do global enterprises choose it?",
      a: "Sitecore is a leading enterprise-grade Digital Experience Platform (DXP) combining scalable Content Management (CMS) with built-in AI personalization, Customer Data Platform (CDP), headless delivery, and commerce capabilities. Global enterprises choose Sitecore because it delivers personalized 1:1 omni-channel customer journeys at high scale with enterprise security."
    },
    {
      q: "2. What is Sitecore XM Cloud and how does it compare to traditional Sitecore XP?",
      a: "Sitecore XM Cloud is Sitecore's next-generation cloud-native SaaS CMS. It decouples content authoring from rendering via modern headless frameworks like Next.js and Sitecore Experience Edge. Compared to on-premises XP, XM Cloud eliminates server management, delivers automatic updates, provides near-instant edge page speeds, and significantly lowers total cost of ownership."
    },
    {
      q: "3. How does Firevy.co approach Sitecore migration and version upgrades?",
      a: "Our certified Sitecore architects follow the Sitecore Helix architecture standards and a phased migration methodology. We audit your existing codebase, templates, and analytics, plan automated data migration scripts, decouple legacy layouts into modular Next.js / JSS components, and conduct thorough UAT and SEO continuity testing to ensure zero downtime."
    },
    {
      q: "4. Can Sitecore integrate with our existing CRM, ERP, and marketing tech stack?",
      a: "Yes. Sitecore connects natively and via custom REST / GraphQL middleware with platforms like Salesforce, Microsoft Dynamics 365, SAP, Marketo, HubSpot, Segment, and enterprise payment gateways. We build robust, bidirectional integration pipelines with automated queue retry mechanisms."
    },
    {
      q: "5. What are the flexible hiring and engagement models available at Firevy.co?",
      a: "We offer 4 tailored models: Dedicated Sitecore Architects & Developers (full-time monthly allocation), Fixed Price Milestone delivery (for well-defined scopes), Time & Material (for agile feature evolution), and 24/7 Managed SLA & Support (for enterprise uptime, security patches, and ongoing optimization)."
    },
    {
      q: "6. How do you ensure high performance and sub-second page load times on Sitecore?",
      a: "We utilize Sitecore Experience Edge with global Edge CDN caching, Next.js incremental static regeneration (ISR), optimized Solr search queries, distributed Redis caching, lazy asset loading, and serverless compute to consistently achieve 95+ Google Lighthouse speed scores."
    },
    {
      q: "7. Do you provide ongoing maintenance, security patching, and SLA support?",
      a: "Yes. We offer 24/7/365 proactive monitoring, zero-day security patching, Solr and database performance optimization, regular backup verification, and dedicated Level 1 to Level 3 technical support with guaranteed response times under strict SLAs."
    },
    {
      q: "8. How does Sitecore CDP & Personalize drive business conversions?",
      a: "Sitecore CDP aggregates customer interactions across web, mobile, email, and in-store touchpoints into a unified customer profile. Sitecore Personalize then uses predictive machine learning to deliver tailored content, product recommendations, and promotional offers in real-time, boosting conversion rates by 25-40%."
    },
    {
      q: "9. How quickly can Firevy.co onboard a certified Sitecore development team?",
      a: "Depending on your project requirements, we can mobilize certified Sitecore developers, architects, and QA engineers within 3 to 5 business days, complete with NDA execution, code repository onboarding, and sprint planning kickoff."
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans antialiased overflow-hidden">
      <SEO
        title="Sitecore Development Company in USA | Certified Sitecore DXP & XM Cloud Services"
        description="Firevy.co provides enterprise Sitecore development services. Certified Sitecore architects specializing in XM Cloud, Sitecore XP, Headless JSS, Next.js, and CDP integrations."
      />


      {/* Hero Section */}
      <section className="relative bg-[#F0F7FB] pt-16 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-['Poppins',sans-serif] font-[800] text-[34px] leading-[41px] text-black tracking-tight">
                Sitecore Development Services in USA
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Firevy.co delivers enterprise-grade Sitecore DXP and XM Cloud development services to Fortune 500s and ambitious brands worldwide. Our certified Sitecore architects create personalized, high-performance digital experiences that convert.
              </p>
              <div className="pt-2">
                <a
                  href="#discuss-project"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#005F96] hover:bg-[#082d49] text-white font-medium text-base rounded-md shadow-sm transition-all duration-200 transform hover:translate-y-[-1px]"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Realistic Laptop Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[480px] drop-shadow-2xl">
                {/* Laptop Body Outer */}
                <div className="bg-[#1E293B] rounded-t-2xl p-3 pb-2 border-t border-x border-slate-700 shadow-2xl relative">
                  {/* Camera Dot */}
                  <div className="w-2 h-2 bg-slate-500 rounded-full mx-auto mb-2 opacity-80" />
                  {/* Screen Content */}
                  <div className="bg-white rounded-lg overflow-hidden border border-slate-200 relative aspect-[16/10] flex flex-col shadow-inner">
                    {/* Fake Browser Nav */}
                    <div className="bg-slate-100 border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-[10px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                      </div>
                      <div className="bg-white px-3 py-0.5 rounded text-[9px] border border-slate-200 text-slate-600 font-mono">
                        experience.sitecore.com
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Webpage Canvas */}
                    <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
                      <div className="space-y-2">
                        <div className="inline-block px-2 py-0.5 bg-blue-50 text-[#005F96] text-[9px] font-semibold rounded">
                          Sitecore Experience Platform
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Intelligent Personalization <br /> Built for Enterprise Scale
                        </h4>
                        <p className="text-[10px] text-slate-600 line-clamp-2">
                          Deliver seamless, contextual digital experiences across all touchpoints with XM Cloud & AI Decisioning.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">99.99%</div>
                          <div className="text-[8px] text-slate-500">Cloud Uptime</div>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">2.8x</div>
                          <div className="text-[8px] text-slate-500">ROI Growth</div>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">&lt; 300ms</div>
                          <div className="text-[8px] text-slate-500">Edge Latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Keyboard Base */}
                <div className="h-4 bg-[#0F172A] rounded-b-xl relative shadow-lg">
                  <div className="w-16 h-1 bg-slate-600 mx-auto rounded-b" />
                </div>
                {/* Desk Reflection */}
                <div className="w-4/5 h-2 bg-slate-400/20 blur-md mx-auto mt-1 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Marquee */}
      <BrandLogoMarquee />

      {/* Wireframe Showcase Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Wireframe Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-tr from-blue-50 to-sky-50/40 p-8 rounded-3xl border border-blue-100 shadow-sm">
                <div className="bg-white rounded-2xl p-5 border border-blue-200 shadow-lg relative">
                  {/* Wireframe Tablet Screen */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="w-16 h-4 bg-[#005F96] rounded" />
                      <div className="flex gap-1.5">
                        <div className="w-8 h-2 bg-slate-200 rounded" />
                        <div className="w-8 h-2 bg-slate-200 rounded" />
                      </div>
                    </div>
                    <div className="w-full h-24 bg-gradient-to-br from-[#005F96] to-[#005F96] rounded-lg flex items-center justify-center text-white font-bold text-xs p-3 text-center shadow-inner">
                      Composable Digital Experience & XM Cloud
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded p-2">
                        <div className="w-8 h-2 bg-blue-500 rounded mb-1" />
                        <div className="w-12 h-1.5 bg-slate-200 rounded" />
                      </div>
                      <div className="h-12 bg-slate-50 border border-slate-200 rounded p-2">
                        <div className="w-8 h-2 bg-[#006699] rounded mb-1" />
                        <div className="w-12 h-1.5 bg-slate-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200 text-xs font-semibold text-[#005F96] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#006699]" />
                  Sitecore Certified
                </div>
              </div>
            </div>

            {/* Right Detailed Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Acquire Sitecore Digital Experience Development Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                With deep domain expertise in building enterprise Sitecore solutions, Firevy.co provides end-to-end consulting, architecture, development, and support for the Sitecore ecosystem. From modernizing legacy XP installations to architecting headless XM Cloud storefronts, our certified developers ensure enterprise agility and maximum return on investment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Certified Sitecore Architects & Developers',
                  'SaaS Headless XM Cloud & Next.js JSS',
                  'Omnichannel AI-Powered Personalization',
                  'Enterprise CRM, ERP & Commerce Integrations',
                  'Rigorous Helix Architecture Standards',
                  '24/7 SLA-Backed Maintenance & Uptime'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Banner */}
      <ClutchTopRatedBanner
        quote="Reliability, Security And Personalization"
        subtext="Empowering Fortune 500 enterprises and hyper-growth brands with resilient Sitecore DXP platforms."
      />

      {/* 10 Premium Pill Tags */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Sitecore Capabilities</h3>
            <p className="text-sm text-slate-500 mt-1">Full-lifecycle technology stack delivering headless and composable digital ecosystems.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { title: 'Sitecore XM Cloud', icon: '☁️' },
              { title: 'Sitecore XP & XM', icon: '⚡' },
              { title: 'Sitecore OrderCloud', icon: '🛍️' },
              { title: 'Sitecore CDP', icon: '🎯' },
              { title: 'Personalize Engine', icon: '🧠' },
              { title: 'Content Hub DAM', icon: '📦' },
              { title: 'Headless Next.js JSS', icon: '⚛️' },
              { title: 'Helix Architecture', icon: '📐' },
              { title: 'Search & Discovery', icon: '🔍' },
              { title: '24/7 Managed SLA', icon: '🛡️' }
            ].map((tag, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-2.5 hover:border-[#006699] hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{tag.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Cutting Edge Services with Diagonal Hover Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Tailored Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Sitecore Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Accelerate your digital maturity with composable architecture, headless speed, and automated personalization workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sitecore XM Cloud Implementation',
                desc: 'Transition to modern cloud-native SaaS CMS architecture with decoupled Next.js frontends and Sitecore Experience Edge delivery.',
                icon: '☁️',
                features: ['SaaS Edge CDN Deployment', 'Headless Next.js SSR / ISR', 'Zero Infrastructure Maintenance']
              },
              {
                title: 'Sitecore XP & DXP Customization',
                desc: 'End-to-end implementation of Sitecore Experience Platform with Helix architecture, custom layouts, pipelines, and workflows.',
                icon: '⚡',
                features: ['Helix-Compliant Architecture', 'Custom Pipeline Processors', 'Multi-Site & Multi-Lingual Hubs']
              },
              {
                title: 'Sitecore CDP & Personalize',
                desc: 'Harness customer data platforms and machine learning predictive engines for real-time segmentation and 1:1 tailored experiences.',
                icon: '🎯',
                features: ['Real-Time Omnichannel CDP', 'AI Decisioning Models', 'Interactive A/B/n Experiments']
              },
              {
                title: 'Sitecore Content Hub & DAM',
                desc: 'Centralize enterprise digital asset management, MRM workflows, and product content orchestration into a unified hub.',
                icon: '📦',
                features: ['Enterprise Asset Taxonomy', 'Automated Content Ops', 'Global Rights Management']
              },
              {
                title: 'Version Upgrade & Cloud Migration',
                desc: 'Seamless migration from legacy Sitecore 8.x/9.x on-premise to Sitecore 10.3+ or XM Cloud with zero data loss.',
                icon: '🚀',
                features: ['Zero-Downtime Data Migration', 'Helix Code Refactoring', 'Content Serialization (SCS)']
              },
              {
                title: '24/7 Managed Services & SLA Support',
                desc: 'Proactive infrastructure monitoring, performance profiling, continuous security patches, and emergency engineering.',
                icon: '🛡️',
                features: ['Guaranteed SLA Response', 'Proactive Threat Audits', 'Continuous DevOps Deployment']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-[14px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,95,150,0.15)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Light Sky/Ice Blue Diagonal Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5FD] via-[#F0F9FF] to-[#D4EEFD] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 pointer-events-none rounded-[14px]" />

                {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 ease-out z-10" />
                {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 bg-slate-50 group-hover:bg-white rounded-xl shadow-xs border border-slate-200/80 group-hover:border-[#BAE6FD] flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-[#005F96] leading-snug transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#556987] group-hover:text-slate-700 leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80 group-hover:border-[#BAE6FD]/80 transition-colors">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005F96] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/60 group-hover:border-[#BAE6FD]/80 transition-colors">
                  <a
                    href="#discuss-project"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005F96] group-hover:text-[#004A75] transition-colors"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Key Business Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Sitecore for Your Enterprise?
            </h2>
            <p className="text-slate-600 text-base">
              Harness the power of a premier Digital Experience Platform built to withstand the rigorous demands of global business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time 1:1 Personalization',
                desc: 'Harness Sitecore’s contextual intelligence engine to serve dynamic content based on real-time visitor behavior, location, and past history.',
                icon: <Zap className="w-6 h-6 text-[#005F96]" />
              },
              {
                title: 'Composable Headless Architecture',
                desc: 'Separate content authoring from frontend presentation with Next.js and GraphQL for lightning-fast speeds and omni-channel reach.',
                icon: <Layers className="w-6 h-6 text-[#006699]" />
              },
              {
                title: 'Robust Enterprise Security & Governance',
                desc: 'Enterprise role-based access control, workflow approvals, zero-trust security standards, and automated compliance auditing.',
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
              },
              {
                title: 'Global Multi-Site & Multi-Language',
                desc: 'Effortlessly manage hundreds of regional brand websites with shared content trees, localized workflows, and unified taxonomy.',
                icon: <Star className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'Seamless Enterprise Integrations',
                desc: 'Pre-built and custom bi-directional connectors for Salesforce CRM, Marketo, SAP ERP, Dynamics 365, and payment systems.',
                icon: <Code2 className="w-6 h-6 text-sky-600" />
              },
              {
                title: 'Scalable Cloud Elasticity',
                desc: 'Deploy on Microsoft Azure or Sitecore Managed Cloud to scale effortlessly during high-traffic spikes without performance degradation.',
                icon: <Users className="w-6 h-6 text-[#005F96]" />
              }
            ].map((ben, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 border border-slate-100">
                  {ben.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{ben.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Column-Locked Responsive Pipeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              8-Step Sitecore Development Lifecycle
            </h2>
            <p className="text-slate-600 text-base">
              A battle-tested Helix-compliant methodology delivering zero-defect digital experiences on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Architecture', desc: 'Requirements analysis, Helix solution structuring, and cloud capacity planning.' },
              { step: '02', title: 'Information Architecture', desc: 'Data modeling, template inheritance hierarchy, and workflow specification.' },
              { step: '03', title: 'Headless Frontend Design', desc: 'Design system creation, Next.js / JSS component modularization, and UX prototyping.' },
              { step: '04', title: 'Helix Core Development', desc: 'Feature, Foundation, and Project layer coding with clean enterprise C# .NET.' },
              { step: '05', title: 'Personalization & CDP', desc: 'Audience segment creation, predictive AI rule setups, and analytics tracking.' },
              { step: '06', title: 'Enterprise Integration', desc: 'Connecting CRM, ERP, commerce, and third-party APIs via secure middleware.' },
              { step: '07', title: 'Automated QA & Security', desc: 'Automated regression testing, load simulations, and OWASP vulnerability scans.' },
              { step: '08', title: 'Deployment & SLA Support', desc: 'Zero-downtime CI/CD deployment, Experience Edge publishing, and 24/7 monitoring.' }
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative hover:border-[#005F96] transition-colors">
                <div className="text-2xl font-black text-[#005F96] mb-2">{st.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Flexible Hiring Models */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Flexible Engagement & Hiring Models
            </h2>
            <p className="text-slate-400 text-base">
              Hire certified Sitecore developers or leverage turnkey project delivery tailored to your governance and budgetary needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Dedicated Team',
                badge: 'Most Popular',
                desc: 'Full-time dedicated Sitecore engineers integrated directly into your sprint rituals.',
                points: ['100% Dedicated Developers', 'Direct Daily Communication', 'Flexible Monthly Scaling']
              },
              {
                title: 'Fixed Price',
                badge: 'Guaranteed Scope',
                desc: 'Milestone-based project execution with defined deliverables and locked budgets.',
                points: ['Strict Budget Certainty', 'Detailed Scope of Work', 'Clear Milestone Sign-offs']
              },
              {
                title: 'Time & Material',
                badge: 'Maximum Agility',
                desc: 'Pay-as-you-go model for continuous feature enhancement and evolving roadmaps.',
                points: ['Pay Only for Hours Used', 'Rapid Pivot Flexibility', 'Bi-Weekly Invoicing']
              },
              {
                title: '24/7 Managed SLA',
                badge: 'Enterprise Uptime',
                desc: 'Round-the-clock incident response, security updates, and performance tuning.',
                points: ['Guaranteed Response SLAs', 'Proactive Threat Patching', 'Dedicated Account Lead']
              }
            ].map((model, idx) => (
              <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full">
                    {model.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white">{model.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{model.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-700">
                    {model.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="#discuss-project"
                    className="block text-center py-2.5 px-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-lg text-xs font-bold transition-all"
                  >
                    Hire Developers
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Stack (Exact 1:1 Match) */}
      <TechnologyStackGrid />

      {/* 6. We Have Been Featured In (Exact 1:1 Match) */}
      <FeaturedInLogosGrid />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Get answers to common queries regarding our enterprise Sitecore development, upgrades, and support services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart & Contact Discuss Form Card */}
      <section id="discuss-project" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: What Sets Us Apart */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
                Why Firevy.co
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                What Sets Us Apart As Sitecore Development Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine deep technical mastery of Microsoft .NET and the Sitecore composable ecosystem with user-centric digital strategy to deliver measurable business ROI.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: '100% Certified Sitecore Talent', desc: 'Our team comprises certified Sitecore 10 architects and XM Cloud specialists.' },
                  { title: 'Helix Architectural Integrity', desc: 'Clean, modular, and maintainable codebase adhering to official Sitecore best practices.' },
                  { title: 'Proven Fortune 500 Track Record', desc: 'Successfully delivered complex multi-brand digital transformations across the globe.' },
                  { title: 'End-to-End Composable Strategy', desc: 'Seamless orchestration of CDP, Personalize, OrderCloud, Content Hub, and Next.js.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-[#005F96] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Let's Discuss Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005F96] via-[#006699] to-[#005F96]" />
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Discuss Your Sitecore Project</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and our certified Sitecore solutions architect will respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-[#005F96] mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">Thank You!</h4>
                    <p className="text-xs text-slate-600">
                      Your inquiry has been received. Our Sitecore lead will reach out to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>Sitecore XM Cloud Development</option>
                          <option>Sitecore XP Customization</option>
                          <option>Sitecore Upgrade & Migration</option>
                          <option>Sitecore CDP & Personalize</option>
                          <option>OrderCloud Headless Commerce</option>
                          <option>Dedicated Sitecore Developers</option>
                          <option>24/7 Managed Support & SLA</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000 - $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, timeline, and existing systems..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#005F96] hover:bg-[#082d49] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitecoreDevelopmentService;
