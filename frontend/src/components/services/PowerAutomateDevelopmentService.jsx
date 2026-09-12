import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
  Headphones,
  Users,
  Layers,
  Star,
  ExternalLink,
  Code2,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Globe,
  Database,
  Terminal,
  Smartphone,
  RefreshCw,
  LayoutGrid,
  FileCode2,
  CheckCircle,
  FolderLock,
  Workflow,
  Search,
  Cloud,
  FileText,
  BarChart3,
  Bot,
  Laptop,
  Check,
  CheckSquare,
  Activity,
  Layers2,
  Settings,
  Cog
} from 'lucide-react';

export const PowerAutomateDevelopmentService = () => {
  const heroMetrics = [
    { number: '80+', label: 'Software Developers' },
    { number: '20+', label: 'Fortunes 500 Companies' },
    { number: '1000+', label: 'Project Completed in Software Technology' },
    { number: '320+', label: '5-Star Clutch Reviews' }
  ];

  const powerAutomateServices = [
    {
      id: 1,
      title: 'Cloud Flows & Multi-Stage Approval Workflows',
      icon: <Workflow className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Automate repetitive email triggers, cross-departmental approval workflows, file synchronization, and real-time team notifications.',
      bullets: [
        'Automated, Instant & Scheduled Flows',
        'Multi-Tier Sequential & Parallel Approvals',
        'Microsoft Teams & Outlook Interactive Cards',
        'Conditional Routing & Error Handling'
      ]
    },
    {
      id: 2,
      title: 'Desktop Flows & Robotic Process Automation (RPA)',
      icon: <Laptop className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Bridge legacy desktop systems and modern web applications with attended and unattended RPA bots that emulate human mouse and keyboard actions.',
      bullets: [
        'Unattended & Attended Desktop RPA',
        'Legacy Mainframe & Terminal Scraping',
        'Virtual Desktop (Citrix/RDP) Automation',
        'Desktop UI Recording & Error Fallbacks'
      ]
    },
    {
      id: 3,
      title: 'AI Builder & Intelligent Document Processing (IDP)',
      icon: <Bot className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Extract critical data from unstructured invoices, receipts, contracts, and IDs automatically using pre-trained and custom Microsoft AI Builder models.',
      bullets: [
        'Automated Invoice & Receipt OCR Extraction',
        'Custom Form Processing & Entity Extraction',
        'Sentiment Analysis & Email Categorization',
        'Predictive Binary Classification Models'
      ]
    },
    {
      id: 4,
      title: 'Business Process Flows (BPF) & Dataverse',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Guide enterprise employees through structured, compliance-driven multi-stage business processes with strictly enforced stage validation rules.',
      bullets: [
        'Stage-Gated Process Progression',
        'Dataverse Role-Based Access Governance',
        'Dynamics 365 Lead-to-Opportunity Flows',
        'Strict Regulatory Compliance Validation'
      ]
    },
    {
      id: 5,
      title: 'Microsoft 365, Teams & SharePoint Integration',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Deep native integration across SharePoint lists, OneDrive folders, Excel tables, and Microsoft Teams to harmonize your digital workplace.',
      bullets: [
        'SharePoint List Event Triggers',
        'Automated PDF Document Generation',
        'MS Teams Adaptive Card Notifications',
        'OneDrive Backup & Archival Pipelines'
      ]
    },
    {
      id: 6,
      title: 'Enterprise ERP & CRM Custom API Connectors',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build robust OpenAPI/Swagger-defined custom connectors to bridge SAP, Salesforce, Oracle, NetSuite, and proprietary internal databases.',
      bullets: [
        'Custom OpenAPI (Swagger) Connectors',
        'SAP, Salesforce & Oracle Integration',
        'On-Premises Data Gateway Configuration',
        'Webhook & REST API Bi-directional Sync'
      ]
    },
    {
      id: 7,
      title: 'Process Mining & Task Mining with Process Advisor',
      icon: <Activity className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Discover hidden process bottlenecks, quantify operational waste, and map out high-ROI automation candidates using Power Automate Process Advisor.',
      bullets: [
        'Process Map Visualization & Bottlenecks',
        'User Task Recording & Mining',
        'Automation ROI & Time-Savings Analysis',
        'Continuous Process Optimization'
      ]
    },
    {
      id: 8,
      title: 'Power Platform COE, Governance & 24/7 SLA Support',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Establish Microsoft Center of Excellence (COE), Data Loss Prevention (DLP) security, environment ALM pipelines, and continuous proactive monitoring.',
      bullets: [
        'COE Starter Kit Setup & Governance',
        'Strict Data Loss Prevention (DLP) Policies',
        'Azure DevOps & GitHub ALM Automation',
        '24/7 Proactive SLA Incident Response'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Over 80% Reduction in Manual Tasks',
      desc: 'Eliminate tedious manual data re-entry, invoice transcription, and repetitive email routing with automated 24/7 robotic execution.',
      icon: <Zap className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Zero Human Error & 100% Accuracy',
      desc: 'Standardized automated workflows execute business rules with 100% precision, eliminating costly human transcription errors and compliance oversights.',
      icon: <ShieldCheck className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Instant Integration with 1000+ Apps',
      desc: 'Connect seamlessly to Microsoft 365, Dynamics, Salesforce, SAP, Google Workspace, Twitter, ServiceNow, and custom on-prem databases.',
      icon: <Layers2 className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Built-in AI & Document Intelligence',
      desc: 'Empower workflows with Microsoft AI Builder to read scanned invoices, extract key-value pairs, and route tickets based on sentiment.',
      icon: <Bot className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Enterprise-Grade Zero-Trust Security',
      desc: 'Backed by Microsoft Entra ID (Azure AD), automated Data Loss Prevention (DLP) policies, encrypted credential vaults, and HIPAA/SOC compliance.',
      icon: <FolderLock className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Rapid ROI & Low Cost of Ownership',
      desc: 'Leverage your existing Microsoft 365 enterprise licenses with low-code visual workflow builders to achieve ROI within weeks.',
      icon: <DollarSign className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified Microsoft Power Automate Experts',
      desc: 'Our team includes PL-500 (RPA Developer) and PL-200/PL-600 certified senior architects with 7+ years delivering enterprise automation.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Solution & Workflow Ownership',
      desc: 'You receive complete source code, unmanaged solution packages, documented flow schemas, and administrator knowledge transfer.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Privacy Standards',
      desc: 'We enforce enterprise confidentiality agreements, least-privilege credential management, and HIPAA / GDPR regulatory compliance.',
      icon: <CheckCircle2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Agile 2-Week Sprints & Live Demos',
      desc: 'Collaborate with our developers in transparent weekly sprints with live workflow demos in Microsoft Teams and Azure DevOps.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Choose between Dedicated Full-Time Automation Squads, Time & Material hourly consulting, or Fixed Milestone deliverables.',
      icon: <DollarSign className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Proven Enterprise Track Record',
      desc: 'Over 1,000+ software & automation projects delivered with 95% client retention and 320+ 5-star Clutch reviews.',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Process Discovery & ROI Assessment',
      desc: 'We analyze manual bottlenecks, calculate hours saved, map out trigger events, and define a clear automation architecture roadmap.'
    },
    {
      step: '02',
      title: 'Workflow Architecture & Security Mapping',
      desc: 'Our architects configure DLP policies, On-Premises Data Gateways, environment ALM strategies, and error-handling mechanisms.'
    },
    {
      step: '03',
      title: 'Cloud & Desktop RPA Flow Engineering',
      desc: 'Certified developers build cloud triggers, unattended desktop UI flows, custom API connectors, and AI Builder models.'
    },
    {
      step: '04',
      title: 'Integration & Exception Handling',
      desc: 'We integrate ERP/CRM systems, test edge cases, configure timeout fallbacks, and build automated Teams/Slack failure alerts.'
    },
    {
      step: '05',
      title: 'UAT Validation & Stress Load Testing',
      desc: 'End-to-end user acceptance testing with bulk sample transactions to verify concurrency limits and SLA execution times.'
    },
    {
      step: '06',
      title: 'Production Cutover & 24/7 SLA Support',
      desc: 'Zero-downtime production deployment, comprehensive admin handbook handoff, employee training, and ongoing 24/7 monitoring.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Global Supply Chain Invoice OCR & Multi-Tier Approval Flow',
      category: 'AI Builder & Cloud Flows',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Healthcare Patient Referral & HIPAA Document Router',
      category: 'Healthcare & Dataverse',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Banking KYC Verification & Unattended Desktop RPA Bot',
      category: 'Desktop Flows & Legacy Mainframe',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Enterprise Multi-Region Release Date Sync & Teams Alerts',
      category: 'Power Automate & Slack/Teams',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'HR Employee Onboarding & Automated Credential Provisioning',
      category: 'Azure AD & Microsoft 365',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Customer Service Ticket Sentiment Analyzer & Escalation Flow',
      category: 'AI Builder & Dynamics 365',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    }
  ];

  const powerAutomateFaqList = [
    {
      id: 1,
      question: '1. What is Microsoft Power Automate and how does it help enterprises?',
      answer: 'Microsoft Power Automate (formerly Microsoft Flow) is an enterprise automation platform that allows organizations to streamline repetitive workflows, connect disparate cloud and desktop systems, extract data using AI Builder, and automate multi-level approvals across 1,000+ enterprise applications.'
    },
    {
      id: 2,
      question: '2. What is the difference between Cloud Flows and Desktop Flows (RPA)?',
      answer: 'Cloud Flows operate via modern APIs, webhooks, and scheduled triggers in the cloud without requiring a dedicated desktop. Desktop Flows (Robotic Process Automation) run on Windows machines to automate legacy desktop software, Citrix virtual desktops, or web interfaces that lack modern REST APIs.'
    },
    {
      id: 3,
      question: '3. What is the difference between Attended and Unattended RPA?',
      answer: 'Attended RPA runs alongside human workers to assist with immediate tasks (triggered by the user on their workstation). Unattended RPA runs autonomously in the background on virtual machines or servers without human intervention, scheduled or triggered by system events.'
    },
    {
      id: 4,
      question: '4. How does AI Builder enhance Power Automate workflows?',
      answer: 'AI Builder introduces pre-trained and custom machine learning models into your flows—enabling automated OCR extraction from invoices, receipts, and identity documents, sentiment analysis of incoming customer emails, and predictive classification without writing complex ML algorithms.'
    },
    {
      id: 5,
      question: '5. Can Power Automate connect to on-premises databases and legacy software?',
      answer: 'Yes! Using the Microsoft On-Premises Data Gateway, Power Automate securely communicates with local SQL databases, SharePoint On-Premises farms, SAP systems, and internal file shares without exposing your internal network to public internet threats.'
    },
    {
      id: 6,
      question: '6. How secure is our business data in Microsoft Power Automate?',
      answer: 'Power Automate is governed by Microsoft Entra ID (Azure AD), Data Loss Prevention (DLP) policies to prevent sensitive data leakage between connectors, encrypted credential storage via Azure Key Vault, and compliance certifications including HIPAA, SOC 1/2/3, and GDPR.'
    },
    {
      id: 7,
      question: '7. How much do Power Automate consulting and development services cost?',
      answer: 'Cost depends on flow complexity, the number of systems integrated, whether desktop RPA is needed, and AI Builder consumption. We offer flexible Dedicated Developer models (hourly or monthly) and transparent Fixed-Price milestone scopes.'
    },
    {
      id: 8,
      question: '8. Why choose Firevy / Sapphire Solutions for Power Automate development?',
      answer: 'We provide certified Microsoft PL-500 RPA and PL-600 Solution Architects, 100% code and unmanaged solution ownership, 1,000+ completed projects, strict NDA protection, and 24/7 proactive SLA monitoring.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Affordable Power Automate Services in USA | Power Automate Development Company"
        description="We deliver highly rated Power Automate services at the best price in less time. Expert Microsoft Power Automate consulting, desktop RPA, cloud flows, and AI Builder integration."
        canonical="/services/power-automate"
      />

      {/* Floating Action Buttons */}
      <div className="fixed right-0 top-1/4 z-40 flex flex-col items-end gap-1.5 pointer-events-auto">
        <a
          href="tel:+15551234567"
          title="Call Us Directly"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919429709662"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Floating Brand Bubble */}
      <div className="fixed right-4 bottom-5 z-40">
        <Link
          to="/contact"
          title={`Contact ${BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name}`}
          className="w-13 h-13 rounded-full bg-[#0086C6] hover:bg-[#0070A6] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <span className="font-[900] text-3xl font-serif select-none leading-none">S</span>
        </Link>
      </div>

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Screenshot)
          ========================================================================= */}
      <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, Metrics & 2 CTA Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[900] text-[#0B0F19] tracking-tight leading-[1.12] font-sans">
                Affordable Power Automate Services in USA
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal font-sans max-w-2xl">
                We deliver highly rated power automate services at the best price in less time. Get in touch with us for customized power development services delivered by experts. Get your free quote today!
              </p>

              {/* 4 Counter Metrics (80+, 20+, 1000+, 320+) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[26px] sm:text-[30px] font-[900] text-[#005F96] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[11.5px] sm:text-[12.5px] font-[600] text-[#475569] leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 CTA Buttons (Discuss Your Project & Hire PowerApps Developers) */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-[8px] bg-[#00456E] hover:bg-[#003454] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Hire PowerApps Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Multi-device Mockup with Windows + Power Automate Logos */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Floating Tech Badges */}
                <div className="absolute -top-3 left-6 z-20 w-11 h-11 rounded-xl bg-[#00ADEF] shadow-lg flex items-center justify-center text-white">
                  <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                    <div className="bg-white rounded-xs" />
                  </div>
                </div>

                <div className="absolute -top-5 right-20 z-20 w-13 h-13 rounded-2xl bg-white shadow-xl border border-slate-200 flex items-center justify-center p-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute -top-4 right-6 z-10 w-10 h-10 text-slate-300 opacity-60">
                  <Cog className="w-full h-full animate-spin-slow" />
                </div>

                {/* Laptop in Background */}
                <div className="bg-slate-900 p-3 rounded-[16px] shadow-[0_20px_50px_rgba(0,95,150,0.2)] border border-slate-700 relative z-0">
                  <div className="bg-white rounded-[10px] overflow-hidden">
                    {/* Mock Browser Header */}
                    <div className="bg-[#0066FF] px-3 py-1.5 text-white flex items-center justify-between text-[10px] font-bold">
                      <span>Power Automate Cloud Studio</span>
                      <span className="text-blue-100">Live Engine</span>
                    </div>

                    {/* Dashboard Analytics Graph */}
                    <div className="p-3 bg-slate-50 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-800">Automated Runs</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">99.8% Success</span>
                      </div>
                      {/* Flow Chart Illustration */}
                      <div className="h-16 bg-gradient-to-b from-sky-50 to-blue-100/60 rounded-lg border border-blue-200 p-2 flex items-end justify-between gap-1">
                        {[40, 65, 55, 80, 70, 95, 85, 100].map((h, i) => (
                          <div key={i} className="flex-1 bg-[#0066FF] rounded-t-xs" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smartphone Overlay on the Left */}
                <div className="absolute -bottom-4 -left-3 z-20 w-28 sm:w-32 bg-slate-900 p-1.5 rounded-[16px] shadow-2xl border-2 border-slate-700">
                  <div className="bg-white rounded-[12px] p-2 space-y-1.5 text-[9px]">
                    <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto" />
                    <div className="font-bold text-slate-800 border-b border-slate-100 pb-1">Mobile Triggers</div>
                    <div className="space-y-1">
                      <div className="bg-emerald-50 text-emerald-700 p-1 rounded font-semibold text-[8px] flex items-center justify-between">
                        <span>Invoice #890</span>
                        <span>✓</span>
                      </div>
                      <div className="bg-blue-50 text-blue-700 p-1 rounded font-semibold text-[8px] flex items-center justify-between">
                        <span>Teams Alert</span>
                        <span>✓</span>
                      </div>
                      <div className="bg-sky-50 text-sky-700 p-1 rounded font-semibold text-[8px] flex items-center justify-between">
                        <span>Sync Data</span>
                        <span>✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tablet Overlay on the Right */}
                <div className="absolute -bottom-6 -right-2 z-20 w-36 sm:w-40 bg-slate-900 p-1.5 rounded-[16px] shadow-2xl border-2 border-slate-700">
                  <div className="bg-white rounded-[12px] p-2 space-y-1.5 text-[9px]">
                    <div className="flex items-center justify-between font-bold text-slate-800 border-b border-slate-100 pb-1">
                      <span>RPA Matrix</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="space-y-1 text-[8px]">
                      <div className="flex justify-between bg-slate-50 p-1 rounded font-medium text-slate-600">
                        <span>Attended Bot</span>
                        <span className="font-bold text-emerald-600">Active</span>
                      </div>
                      <div className="flex justify-between bg-slate-50 p-1 rounded font-medium text-slate-600">
                        <span>Unattended Bot</span>
                        <span className="font-bold text-blue-600">Queued</span>
                      </div>
                      <div className="flex justify-between bg-slate-50 p-1 rounded font-medium text-slate-600">
                        <span>AI Form Reader</span>
                        <span className="font-bold text-cyan-600">Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BRAND RECOGNITION MARQUEE BANNER
          ========================================================================= */}
      <BrandLogoMarquee />

      {/* =========================================================================
          3. SECTION 2: AVAIL LEADING POWER AUTOMATE DEVELOPERS (Matching Screenshot)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Tech Graphic with Developer & CPU */}
            <div className="lg:col-span-6 relative">
              <div className="bg-gradient-to-tr from-[#F0F9FF] to-[#E0F2FE] border border-blue-100 rounded-[24px] p-6 sm:p-10 shadow-md relative overflow-hidden">
                {/* Circuit and Gear Elements */}
                <div className="absolute top-4 right-4 text-blue-200 opacity-60">
                  <Cog className="w-16 h-16 animate-spin-slow" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                  {/* CPU Chip Graphic */}
                  <div className="w-28 h-28 bg-[#005F96] rounded-2xl shadow-xl flex flex-col items-center justify-center p-3 text-white shrink-0 border-2 border-cyan-300">
                    <Cpu className="w-10 h-10 text-cyan-300" />
                    <span className="text-[10px] font-bold mt-1 tracking-wider uppercase">Auto Engine</span>
                  </div>

                  {/* Flow Automation Perks */}
                  <div className="space-y-2 text-left">
                    <div className="inline-block bg-[#005F96] text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                      Next-Gen RPA
                    </div>
                    <h4 className="text-[17px] font-[800] text-slate-900">
                      Zero-Code & Pro-Code Automation
                    </h4>
                    <p className="text-[13px] text-slate-600 leading-snug">
                      Unify desktop tasks, legacy mainframes, and modern cloud APIs with seamless failover execution.
                    </p>
                  </div>
                </div>

                {/* Sub-Card Metric */}
                <div className="mt-6 pt-5 border-t border-blue-200/80 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-xs">
                    <div className="text-[18px] font-[900] text-[#005F96]">80%</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Time Saved</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-xs">
                    <div className="text-[18px] font-[900] text-emerald-600">100%</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Accuracy</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-xs">
                    <div className="text-[18px] font-[900] text-[#0066FF]">1000+</div>
                    <div className="text-[11px] text-slate-500 font-semibold">Connectors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Subtitle & Checkmarks */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="space-y-2">
                <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
                  Avail Leading Power Automate Developers For Enterprise
                </h2>
                <h3 className="text-[16px] sm:text-[18px] font-[700] text-[#006B8F] leading-snug">
                  With Experienced Best Power Automate Development Company, overcome the obstacles in workflow automation and automate routine business tasks.
                </h3>
              </div>

              <p className="text-[14.5px] text-[#475569] leading-relaxed font-normal">
                Modern enterprise agility demands end-to-end process orchestration. Our Microsoft-certified Power Automate engineers design resilient robotic flows, eliminate repetitive data entry, and integrate legacy on-premises databases directly with Microsoft 365 and Azure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Unattended & Attended Desktop RPA</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>AI Builder Intelligent OCR</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Custom ERP/CRM Connectors</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Multi-Stage Cloud Approvals</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Get Free Automation Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE POWER AUTOMATE SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Microsoft Power Automate Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We design, build, and maintain robotic process automation, cloud workflows, and intelligent document processing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {powerAutomateServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-[16.5px] font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#475569] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2 text-[12px] font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#005F96] shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. KEY BENEFITS OF POWER AUTOMATE (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Power Automate for Business Automation?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Accelerate turnaround times, eliminate human error, and scale enterprise productivity exponentially.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {benefit.icon}
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR AGILE IMPLEMENTATION LIFECYCLE (Step-by-Step)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-white tracking-tight">
              Our Power Automate Delivery Lifecycle
            </h2>
            <p className="text-[14.5px] text-slate-300 leading-relaxed">
              Structured agile deployment sprints with continuous integration, automated testing, and comprehensive admin training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workProcess.map((proc, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-[16px] p-6 border border-slate-700/80 space-y-3 hover:border-sky-500/50 transition-colors"
              >
                <div className="text-[26px] font-[900] text-[#38BDF8]">
                  {proc.step}
                </div>
                <h3 className="text-[18px] font-[800] text-white">
                  {proc.title}
                </h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. WHY CHOOSE US (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Firevy for Power Automate Services?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              A trusted global Microsoft partner with deep RPA proficiency and certified Power Platform architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900 group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. OUR RECENT PROJECTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Power Automate Case Studies
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore robotic desktop flows, AI Builder document extraction, and approval automation systems successfully delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {recentProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#006B8F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="text-[16px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-4">
                    {proj.title}
                  </h4>
                  <Link
                    to={proj.link}
                    className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          10. TECHNOLOGY STACK GRID
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (Signature 2-Column Sapphire Section)
          ========================================================================= */}
      <SapphireFaqSection faqList={powerAutomateFaqList} />

      {/* =========================================================================
          12. WE HAVE BEEN FEATURED IN (18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          13. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Power Automate Development Company to automate your mission-critical business workflows.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Power Automate Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PowerAutomateDevelopmentService;
