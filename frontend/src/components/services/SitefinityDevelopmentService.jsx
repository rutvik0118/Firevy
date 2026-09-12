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

export const SitefinityDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Progress Sitefinity Web Development',
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
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Progress Sitefinity Web Development',
        budget: '$10,000 - $25,000',
        message: ''
      });
    }, 6000);
  };

  const techStack = {
    cms: [
      { name: 'Progress Sitefinity 15', desc: '.NET Core Standalone Renderer & Headless Engine', icon: '🔷' },
      { name: 'Sitefinity Cloud (PaaS)', desc: 'Automated CI/CD Azure-Backed Managed Cloud', icon: '☁️' },
      { name: 'Sitefinity Insight', desc: 'AI Customer Journey Analytics & Lead Scoring', icon: '📈' },
      { name: 'Decoupled .NET Core', desc: 'Modern High-Speed Front-End Page Builder', icon: '⚡' },
      { name: 'Multisite Management', desc: 'Centralized Multi-Domain & Multi-Brand Hub', icon: '🌐' },
      { name: 'Sitefinity Form Builder', desc: 'Dynamic Multi-Step Lead Collection Forms', icon: '📝' }
    ],
    languages: [
      { name: 'C# 12 & .NET Core / 8', desc: 'High-Performance Managed Backend Architecture', icon: '💻' },
      { name: 'ASP.NET Core MVC', desc: 'Modern Decoupled Presentation Layer', icon: '⚡' },
      { name: 'React / Next.js', desc: 'Headless Single Page Application Frontends', icon: '⚛️' },
      { name: 'OData & REST APIs', desc: 'Standardized Open Data Protocol Services', icon: '🔄' },
      { name: 'TypeScript & Tailwind', desc: 'Scalable Responsive Design System Styling', icon: '🎨' },
      { name: 'Angular / Vue.js', desc: 'Dynamic Interactive Customer Portal Components', icon: '📐' }
    ],
    database: [
      { name: 'Microsoft SQL Server', desc: 'Enterprise Relational Database with T-SQL', icon: '🗄️' },
      { name: 'Azure SQL Database', desc: 'Managed Elastic High-Availability Cloud Tier', icon: '☁️' },
      { name: 'Redis Cache', desc: 'In-Memory Output & Query Cache Acceleration', icon: '⚡' },
      { name: 'Elasticsearch / Lucene', desc: 'Enterprise Multi-Site Search & Indexing', icon: '🔍' },
      { name: 'Azure Blob Storage', desc: 'Distributed Media CDN & Asset Storage', icon: '📦' },
      { name: 'Cloudflare Enterprise', desc: 'Global CDN Caching & Web Application Firewall', icon: '🛡️' }
    ],
    infrastructure: [
      { name: 'Microsoft Azure Cloud', desc: 'App Services, Virtual Networks & Traffic Manager', icon: '🔷' },
      { name: 'Docker Containers', desc: 'Isolated Local & Production Deployment Runtimes', icon: '🐳' },
      { name: 'Azure DevOps CI/CD', desc: 'Automated Build, Test & Deployment Automation', icon: '🚀' },
      { name: 'GitHub Actions', desc: 'Automated Code Quality & Security Audits', icon: '🐙' },
      { name: 'Dynatrace / App Insights', desc: 'Real-Time APM Telemetry & Error Diagnostics', icon: '📊' },
      { name: 'OWASP Security Standards', desc: 'Enterprise Vulnerability Mitigation & SSO', icon: '🔒' }
    ]
  };

  const faqs = [
    {
      q: "1. What is Progress Sitefinity and why is it preferred by enterprises?",
      a: "Progress Sitefinity is a modern, enterprise-grade ASP.NET Core Content Management and Digital Experience Platform. It offers an intuitive drag-and-drop page builder for marketers, robust .NET Core developer extensibility, native headless content delivery, multi-site management, and integrated digital experience analytics (Sitefinity Insight)."
    },
    {
      q: "2. How does the Sitefinity .NET Core decoupled architecture work?",
      a: "Sitefinity separates the content management administration (the CMS backend) from the front-end rendering engine using ASP.NET Core. This decoupled architecture allows front-end developers to build blazing-fast, secure user interfaces with rapid compilation times and seamless upgradeability."
    },
    {
      q: "3. What are the key benefits of migrating to Sitefinity Cloud?",
      a: "Sitefinity Cloud is a fully-managed Platform-as-a-Service (PaaS) built on Microsoft Azure. It delivers 99.9% uptime SLA, automated security patching, continuous delivery pipelines via Azure DevOps, auto-scaling during traffic spikes, and built-in disaster recovery."
    },
    {
      q: "4. Can Sitefinity integrate with our CRM, ERP, and marketing automation platforms?",
      a: "Yes. Sitefinity provides native OData and REST APIs along with turnkey connectors for Salesforce, Microsoft Dynamics 365, Marketo, HubSpot, SharePoint, and custom enterprise databases."
    },
    {
      q: "5. How does Firevy.co handle Sitefinity upgrades from older versions (e.g., Sitefinity 10, 11, 12, 13)?",
      a: "Our certified Sitefinity developers follow a structured multi-stage upgrade path. We perform a code audit, upgrade database schemas, refactor obsolete widget templates to ASP.NET Core, test custom modules, and verify SEO redirects for a seamless transition with zero data loss."
    },
    {
      q: "6. How does Sitefinity Insight help optimize marketing campaigns?",
      a: "Sitefinity Insight aggregates touchpoints across web, email, and mobile channels to create holistic customer journey maps. It provides automated persona profiling, predictive lead scoring, and multivariate A/B testing to maximize conversion rates."
    },
    {
      q: "7. What engagement models do you provide for Sitefinity projects?",
      a: "We offer dedicated full-time Sitefinity developers, fixed-cost milestone deliverables, agile Time & Material allocations, and 24/7 managed SLA support tailored to your project scope."
    },
    {
      q: "8. Is Sitefinity compliant with enterprise security standards like HIPAA and GDPR?",
      a: "Yes. Sitefinity includes built-in role-based security, granular permissions, Single Sign-On (SSO) via SAML 2.0 / OpenID Connect, database encryption, and automated cookie consent management to satisfy GDPR, HIPAA, and SOC2 compliance."
    },
    {
      q: "9. How quickly can we get started with Firevy.co's Sitefinity team?",
      a: "We can assemble and deploy certified Sitefinity developers and architects within 3 to 5 business days following requirement alignment and contract execution."
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans antialiased overflow-hidden">
      <SEO
        title="Sitefinity Development Company in USA | Certified Progress Sitefinity CMS Services"
        description="Firevy.co is a top Sitefinity development company in USA. Certified Progress Sitefinity CMS architects specializing in .NET Core, Sitefinity Cloud, multi-site portals, and custom modules."
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 pr-2 pointer-events-auto">
        <a
          href="tel:+1234567890"
          className="w-11 h-11 bg-[#006699] hover:bg-[#004d73] text-white rounded-l-md flex items-center justify-center shadow-lg transition-all transform hover:-translate-x-1"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-l-md flex items-center justify-center shadow-lg transition-all transform hover:-translate-x-1"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#F0F7FB] pt-16 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-['Poppins',sans-serif] font-[800] text-[34px] leading-[41px] text-black tracking-tight">
                Sitefinity Development Services in USA
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
                Firevy.co provides expert Progress Sitefinity CMS development, migration, and cloud consulting services to enterprise businesses worldwide. Leverage .NET Core decoupled speed, intuitive content authoring, and AI-driven personalization.
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
                        sitefinity.enterprise.com
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Webpage Canvas */}
                    <div className="p-4 flex-1 flex flex-col justify-between bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
                      <div className="space-y-2">
                        <div className="inline-block px-2 py-0.5 bg-blue-50 text-[#005F96] text-[9px] font-semibold rounded">
                          Progress Sitefinity 15 DXP
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Modern Digital Experience <br /> Powered by .NET Core
                        </h4>
                        <p className="text-[10px] text-slate-600 line-clamp-2">
                          Effortlessly manage multi-channel digital experiences with intuitive drag-and-drop page builders.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60">
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">99.9%</div>
                          <div className="text-[8px] text-slate-500">PaaS SLA</div>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">3.2x</div>
                          <div className="text-[8px] text-slate-500">Publish Speed</div>
                        </div>
                        <div className="bg-white p-1.5 rounded border border-slate-200 text-center">
                          <div className="text-[11px] font-bold text-[#005F96]">100%</div>
                          <div className="text-[8px] text-slate-500">Responsive</div>
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
                      Decoupled .NET Core Architecture & Headless CMS
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
                  Sitefinity Certified
                </div>
              </div>
            </div>

            {/* Right Detailed Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Acquire Progress Sitefinity Website Development Services
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Firevy.co provides end-to-end Progress Sitefinity solutions from architectural consulting and custom widget development to version upgrades and multi-site enterprise deployments. Our certified developers ensure high performance, security compliance, and seamless marketing workflows.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Certified Sitefinity .NET Core Specialists',
                  'Turnkey Sitefinity Cloud (PaaS) Migration',
                  'Multi-Site & Multi-Language Portals',
                  'Custom ASP.NET Core Widgets & Modules',
                  'Seamless CRM, ERP & OData Integration',
                  '24/7 SLA-Backed Support & Uptime'
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
        quote="Agility, Enterprise Security And Seamless Integration"
        subtext="Empowering modern organizations with scalable Progress Sitefinity CMS and digital experience platforms."
      />

      {/* 10 Premium Pill Tags */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Sitefinity Capabilities</h3>
            <p className="text-sm text-slate-500 mt-1">Full-spectrum expertise across Progress Sitefinity CMS, Cloud, and Headless .NET Core.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { title: 'Sitefinity 15 CMS', icon: '🔷' },
              { title: 'Sitefinity Cloud PaaS', icon: '☁️' },
              { title: 'Decoupled .NET Core', icon: '⚡' },
              { title: 'Sitefinity Insight', icon: '📈' },
              { title: 'Multi-Site Management', icon: '🌐' },
              { title: 'Custom ASP.NET Widgets', icon: '🧱' },
              { title: 'OData REST APIs', icon: '🔄' },
              { title: 'Enterprise SSO & SAML', icon: '🔒' },
              { title: 'Elasticsearch Indexing', icon: '🔍' },
              { title: '24/7 Managed Support', icon: '🛡️' }
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
              Enterprise Sitefinity Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Customized solutions engineered for exceptional digital agility, enterprise security, and multichannel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Sitefinity CMS Development',
                desc: 'Bespoke web applications built on ASP.NET Core with custom content types, hierarchical taxonomies, and custom modules.',
                icon: '🔷',
                features: ['Tailored Page Templates', 'Intuitive Marketer Authoring', 'Responsive UI Frameworks']
              },
              {
                title: 'Sitefinity Cloud (PaaS) Setup',
                desc: 'Seamless migration and hosting on Microsoft Azure PaaS with automated CI/CD pipelines, 99.9% uptime, and auto-scaling.',
                icon: '☁️',
                features: ['Azure DevOps Integration', 'Automated Daily Backups', 'Zero-Downtime Deployments']
              },
              {
                title: 'Decoupled .NET Core & Headless',
                desc: 'Modern decoupled architectures with standalone .NET Core frontends and headless REST / OData content delivery endpoints.',
                icon: '⚡',
                features: ['Standalone .NET Core Renderer', 'Sub-Second Page Speeds', 'Omnichannel Content Hub']
              },
              {
                title: 'Upgrades & Version Migration',
                desc: 'Risk-free migration from legacy versions (Sitefinity 10/11/12/13) to Sitefinity 15 with automated DB migration and widget refactoring.',
                icon: '🚀',
                features: ['Database Schema Upgrades', 'Legacy Widget Modernization', 'SEO Redirect Continuity']
              },
              {
                title: 'Custom Widgets & Enterprise Portals',
                desc: 'High-performance interactive widgets, member portals, document management systems, and secure extranet hubs.',
                icon: '🧱',
                features: ['ASP.NET Core MVC Widgets', 'Role-Based Extranets', 'Single Sign-On (SSO / SAML)']
              },
              {
                title: '24/7 SLA Support & Optimization',
                desc: 'Continuous performance audits, security patching, Elasticsearch tuning, and dedicated round-the-clock technical support.',
                icon: '🛡️',
                features: ['Guaranteed SLA Response', 'Elasticsearch Optimization', 'Zero-Day Patch Management']
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
              Why Choose Progress Sitefinity?
            </h2>
            <p className="text-slate-600 text-base">
              A balanced CMS combining marketer freedom with rigorous enterprise .NET Core engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Marketer-Friendly Authoring',
                desc: 'Intuitive drag-and-drop page creation, inline editing, and asset management empower marketing teams without developer dependencies.',
                icon: <Zap className="w-6 h-6 text-[#005F96]" />
              },
              {
                title: 'Decoupled .NET Core Architecture',
                desc: 'Modern ASP.NET Core frontend rendering delivers lightning-fast compilation, superior page speeds, and independent scalability.',
                icon: <Layers className="w-6 h-6 text-[#006699]" />
              },
              {
                title: 'Centralized Multi-Site Management',
                desc: 'Control hundreds of multilingual, multi-region websites from a single backoffice with shared layouts and granular permissions.',
                icon: <Star className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'Sitefinity Insight Analytics',
                desc: 'AI-driven visitor journey mapping, predictive lead scoring, and automated persona attribution to boost conversion rates.',
                icon: <Users className="w-6 h-6 text-[#005F96]" />
              },
              {
                title: 'Enterprise Security & Compliance',
                desc: 'Built-in SAML 2.0 / OpenID Connect Single Sign-On, OWASP defense, role-based workflows, and GDPR/HIPAA compliance.',
                icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
              },
              {
                title: 'Open Data & API Extensibility',
                desc: 'Native OData and REST web services enable seamless bi-directional integrations with CRM, ERP, and marketing automation stacks.',
                icon: <Code2 className="w-6 h-6 text-sky-600" />
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
              8-Step Sitefinity Development Lifecycle
            </h2>
            <p className="text-slate-600 text-base">
              A structured delivery framework designed to guarantee clean architecture, rapid deployment, and high reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Assessment', desc: 'Architecture planning, content modeling, and migration readiness audits.' },
              { step: '02', title: 'Information Architecture', desc: 'Page tree structuring, custom taxonomy definition, and workflow mapping.' },
              { step: '03', title: 'UI/UX & Design System', desc: 'Responsive template designs, atomic UI components, and brand compliance.' },
              { step: '04', title: '.NET Core Development', desc: 'Custom widgets, layout templates, and clean C# .NET backend services.' },
              { step: '05', title: 'Enterprise Integrations', desc: 'CRM, ERP, payment gateways, and custom OData API endpoint pipelines.' },
              { step: '06', title: 'Sitefinity Insight Setup', desc: 'Persona creation, conversion goal tracking, and lead scoring setups.' },
              { step: '07', title: 'Rigorous QA & Security', desc: 'Automated functional testing, cross-browser audits, and OWASP scans.' },
              { step: '08', title: 'Deployment & SLA Support', desc: 'Azure PaaS deployment, DNS cutover, CDN caching, and 24/7 monitoring.' }
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
              Scale your team with certified Progress Sitefinity developers or leverage turnkey project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Dedicated Team',
                badge: 'Most Popular',
                desc: 'Full-time dedicated Sitefinity developers working directly in your agile sprint cycles.',
                points: ['100% Dedicated Developers', 'Direct Daily Standups', 'Flexible Monthly Scaling']
              },
              {
                title: 'Fixed Price',
                badge: 'Guaranteed Scope',
                desc: 'Milestone-based project delivery with clearly defined specifications and fixed budgets.',
                points: ['Strict Cost Certainty', 'Detailed Scope of Work', 'Clear Deliverable Sign-offs']
              },
              {
                title: 'Time & Material',
                badge: 'Maximum Agility',
                desc: 'Agile pay-as-you-go model for continuous feature delivery and dynamic scopes.',
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
              Get answers to common queries regarding our enterprise Sitefinity development, upgrades, and support services.
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
                What Sets Us Apart As Sitefinity Development Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine deep technical mastery of Progress Sitefinity and .NET Core with user-focused digital engineering to deliver scalable and intuitive digital experiences.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: '100% Certified Sitefinity Developers', desc: 'Experienced engineers certified in Progress Sitefinity 15 and Sitefinity Cloud.' },
                  { title: 'Decoupled .NET Core Mastery', desc: 'Clean, modular, and maintainable frontend architecture with sub-second load times.' },
                  { title: 'Zero-Downtime Upgrades', desc: 'Flawless database migration and widget modernizations from legacy versions.' },
                  { title: 'Full-Lifecycle Cloud Support', desc: 'End-to-end architecture, Azure PaaS deployments, and 24/7 SLA monitoring.' }
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
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Discuss Your Sitefinity Project</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and our certified Sitefinity solutions architect will respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-[#005F96] mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">Thank You!</h4>
                    <p className="text-xs text-slate-600">
                      Your inquiry has been received. Our Sitefinity lead will reach out to you shortly.
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
                          <option>Custom Sitefinity CMS Development</option>
                          <option>Sitefinity Cloud (PaaS) Migration</option>
                          <option>Sitefinity Version Upgrade</option>
                          <option>Decoupled .NET Core Frontends</option>
                          <option>Custom Widgets & Modules</option>
                          <option>Dedicated Sitefinity Developers</option>
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

export default SitefinityDevelopmentService;
