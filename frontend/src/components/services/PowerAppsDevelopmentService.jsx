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
  Layers2
} from 'lucide-react';

export const PowerAppsDevelopmentService = () => {
  const powerAppsServices = [
    {
      id: 1,
      title: 'Custom Canvas Apps Development',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Build intuitive, pixel-perfect, and highly responsive mobile and tablet applications with custom UI controls tailored specifically for task-oriented workers.',
      bullets: [
        'Pixel-Perfect UI/UX Design',
        'Mobile & Offline Mode Support',
        'Device Hardware Integration (GPS/Camera)',
        'Multi-Source Data Connectors'
      ]
    },
    {
      id: 2,
      title: 'Model-Driven Apps & Dataverse',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Architect sophisticated end-to-end business applications powered by Microsoft Dataverse with complex relational data models and automated role-based security.',
      bullets: [
        'Relational Dataverse Architecture',
        'Complex Business Process Flows',
        'Role-Based Granular Security',
        'Custom Dashboard & Form Components'
      ]
    },
    {
      id: 3,
      title: 'Power Automate & Robotic Process Automation (RPA)',
      icon: <Workflow className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Eliminate repetitive manual tasks by building unattended and attended robotic desktop flows, automated approval pipelines, and instant cloud notifications.',
      bullets: [
        'Multi-Tier Approval Workflows',
        'Cloud & Desktop UI Flows (RPA)',
        'Automated Scheduled Triggers',
        'Legacy Desktop System Integration'
      ]
    },
    {
      id: 4,
      title: 'Power BI Embedded Analytics & Dashboards',
      icon: <BarChart3 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Transform raw enterprise records into real-time interactive business intelligence reports seamlessly embedded into Power Apps and SharePoint portals.',
      bullets: [
        'Real-Time KPI Dashboards',
        'Interactive Embedded Analytics',
        'Custom DAX Measures & Data Models',
        'Automated Executive PDF Reports'
      ]
    },
    {
      id: 5,
      title: 'Power Pages & External Client Portals',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Create secure, branded, and responsive external websites that allow outside customers, vendors, and partners to interact securely with your Dataverse data.',
      bullets: [
        'Secure Vendor & Partner Portals',
        'Customer Self-Service Hubs',
        'Azure AD B2C & SAML Authentication',
        'Liquid Template & WebAPI Customization'
      ]
    },
    {
      id: 6,
      title: 'Power Virtual Agents & Copilot Studio AI',
      icon: <Bot className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Deploy intelligent generative AI conversational chatbots powered by Microsoft Copilot Studio to resolve internal employee tickets and external client queries 24/7.',
      bullets: [
        'Generative AI Copilot Chatbots',
        'Microsoft Teams Copilot Bot Integration',
        'Automated Action Calling via Power Automate',
        'Multilingual Natural Language Processing'
      ]
    },
    {
      id: 7,
      title: 'Power Platform Migration & Modernization',
      icon: <RefreshCw className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Modernize legacy Microsoft InfoPath forms, SharePoint Designer workflows, Lotus Notes, and Excel spreadsheets into scalable Microsoft Power Platform solutions.',
      bullets: [
        'InfoPath & Access Modernization',
        'SharePoint Designer Workflow Migration',
        'Legacy Excel Spreadsheets Automation',
        'Zero Data Loss Guarantee'
      ]
    },
    {
      id: 8,
      title: 'Power Platform COE, Governance & SLA Support',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Establish Microsoft Center of Excellence (COE) starter kits, strict DLP security policies, environment ALM pipelines, and ongoing 24/7 SLA maintenance.',
      bullets: [
        'Center of Excellence (COE) Setup',
        'Data Loss Prevention (DLP) Policies',
        'Azure DevOps / GitHub ALM Pipelines',
        '24/7 Proactive SLA Support'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: '10x Faster Development & Deployment',
      desc: 'Deliver fully functional enterprise applications in days rather than months using pre-built Microsoft UI controls and visual drag-and-drop canvases.',
      icon: <Zap className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Native Microsoft 365 & Azure Ecosystem Sync',
      desc: 'Seamless interoperability with Microsoft Teams, SharePoint, Outlook, Dynamics 365, Azure Functions, and Microsoft Graph APIs.',
      icon: <Layers2 className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Enterprise-Grade Security & Dataverse Compliance',
      desc: 'Governed by Microsoft Entra ID (Azure AD), zero-trust security standards, granular role-based permissions, and SOC/HIPAA/GDPR compliance.',
      icon: <ShieldCheck className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Cross-Device Responsive Mobility',
      desc: 'Apps run seamlessly out-of-the-box across iOS, Android, Windows laptops, and modern web browsers with full offline data caching capabilities.',
      icon: <Smartphone className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Built-in AI & Copilot Intelligence',
      desc: 'Incorporate AI Builder models for automated OCR invoice scanning, object detection, text sentiment analysis, and intelligent Copilot suggestions.',
      icon: <Bot className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Huge Cost Savings on IT Infrastructure',
      desc: 'Leverage your existing Microsoft 365 enterprise licenses to eliminate third-party SaaS subscription costs and costly server hosting bills.',
      icon: <DollarSign className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Microsoft Certified Power Platform Architects',
      desc: 'Work directly with certified PL-100, PL-200, PL-400, and PL-600 certified senior consultants with 7+ years of dedicated enterprise consulting experience.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Code & Solution Ownership',
      desc: 'You receive complete ownership of all unmanaged and managed Power Platform solutions, PCF custom components, automation scripts, and documentation.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Governance Protocols',
      desc: 'We enforce strict confidentiality, GDPR/HIPAA compliance, and least-privilege administrative access policies across all environments.',
      icon: <CheckCircle2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Agile 2-Week Sprints & Full Transparency',
      desc: 'Collaborate with our developers in weekly live sprint demos via Teams and Slack with transparent backlog tracking in Azure DevOps.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Choose between Dedicated Full-Time Teams, Time & Material hourly consulting, or Fixed Milestone deliverables tailored to your exact scope.',
      icon: <DollarSign className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Proven Track Record with 600+ Deliveries',
      desc: 'Over 600+ web, mobile, and Power Platform projects delivered successfully with 95% client retention and 320+ 5-star Clutch reviews.',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Business Analysis & Process Mapping',
      desc: 'We analyze your current manual bottlenecks, spreadsheet workflows, data schemas, and role hierarchies to architect an optimal solution blueprint.'
    },
    {
      step: '02',
      title: 'Dataverse Architecture & UI Wireframes',
      desc: 'Our architects construct normalized Dataverse tables, relationships, and intuitive wireframes following Microsoft Fluent Design UI guidelines.'
    },
    {
      step: '03',
      title: 'Canvas/Model-Driven App & Flow Development',
      desc: 'Certified developers build custom Power Apps, PCF custom code components, and automated Power Automate cloud & desktop flows.'
    },
    {
      step: '04',
      title: 'AI Builder & 3rd-Party API Integration',
      desc: 'We integrate custom REST APIs, ERP/CRM systems, and AI Builder models for smart document processing and predictive logic.'
    },
    {
      step: '05',
      title: 'UAT Testing, Security Audit & ALM',
      desc: 'Rigorous end-user validation, cross-device testing, DLP compliance verification, and automated solution export via Azure DevOps ALM pipelines.'
    },
    {
      step: '06',
      title: 'Production Cutover, Training & Support',
      desc: 'Seamless production deployment, administrator knowledge transfer sessions, user training guides, and 24/7 proactive SLA maintenance.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Enterprise Multi-Region Release Date Automation System',
      category: 'Power Automate & Dataverse',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Healthcare Patient Intake & Clinical Audit Canvas App',
      category: 'Healthcare & HIPAA Compliance',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Field Service Inspection & Offline GPS Mobile App',
      category: 'Power Apps Mobile & Offline Sync',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Supply Chain Vendor Onboarding & Power Pages Portal',
      category: 'External Power Pages & Azure AD B2C',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Financial Multi-Tier Loan Approval & Power BI Analytics',
      category: 'Power BI Embedded & Power Automate',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'IT Helpdesk Copilot Studio Virtual Agent & MS Teams Bot',
      category: 'Copilot Studio & AI Builder',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    }
  ];

  const powerAppsFaqList = [
    {
      id: 1,
      question: '1. What is Microsoft PowerApps and why should my business use it?',
      answer: 'Microsoft PowerApps is an enterprise-grade low-code application development platform that allows businesses to build custom mobile and web applications up to 10x faster than traditional software development. It connects directly with over 1,000 data sources including Microsoft 365, SharePoint, SQL Server, Salesforce, and custom REST APIs.'
    },
    {
      id: 2,
      question: '2. What is the difference between Canvas Apps and Model-Driven Apps?',
      answer: 'Canvas Apps provide complete drag-and-drop UI design freedom, ideal for task-specific mobile and tablet experiences with custom layouts. Model-Driven Apps are data-first applications built on Microsoft Dataverse, automatically generating responsive, component-rich dashboards and grids designed for complex, end-to-end enterprise business processes.'
    },
    {
      id: 3,
      question: '3. Can PowerApps integrate with non-Microsoft systems like SAP or Salesforce?',
      answer: 'Yes! Power Platform includes over 1,000 pre-built connectors for popular enterprise systems like Salesforce, SAP, Oracle, ServiceNow, Jira, and Zendesk. Furthermore, our certified developers build custom REST API connectors to securely bridge any proprietary database or web service.'
    },
    {
      id: 4,
      question: '4. How do Power Automate and Power BI integrate with PowerApps?',
      answer: 'They form a unified ecosystem: PowerApps provides the interactive data entry interface; Power Automate executes automated multi-stage approval workflows and data sync in the background; and Power BI visualizes embedded analytics and KPI dashboards directly within the application.'
    },
    {
      id: 5,
      question: '5. Can external users (clients, suppliers, vendors) access our PowerApps?',
      answer: 'Yes! Using Power Pages (formerly Power Apps Portals), we build secure external web portals with custom branding and authentication (via Azure AD B2C, Google, or LinkedIn) allowing external vendors, partners, or customers to submit requests and view reports securely.'
    },
    {
      id: 6,
      question: '6. How secure is company data within Microsoft Power Platform?',
      answer: 'Power Platform is backed by Microsoft Entra ID (Azure AD), zero-trust security architecture, environment isolation, role-based access control (RBAC), and Data Loss Prevention (DLP) policies. It complies with HIPAA, GDPR, SOC 1/2/3, and ISO 27001 standards.'
    },
    {
      id: 7,
      question: '7. How much does custom PowerApps development cost?',
      answer: 'Development cost depends on application complexity, data model size, custom PCF control requirements, and third-party integrations. We provide transparent Fixed-Price milestone contracts as well as flexible Dedicated Developer models (hourly or monthly).'
    },
    {
      id: 8,
      question: '8. Can you migrate our legacy Excel sheets, InfoPath forms, or Lotus Notes to PowerApps?',
      answer: 'Absolutely! We have extensive experience migrating fragile legacy spreadsheets, deprecated Microsoft InfoPath forms, and SharePoint Designer workflows to secure, automated, and mobile-ready Microsoft Power Platform solutions with zero business disruption.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="PowerApps Development Company | Power Platform Development Services"
        description="We help you quickly build data-driven solutions with the best Power Platform Development Services. Microsoft Power Apps Consulting Services, AI integration, and custom workflows."
        canonical="/services/powerapps"
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
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title, Subtitle, Industry, Tech Badges, CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[48px] font-[900] text-[#0B0F19] tracking-tight leading-[1.14] font-sans">
                PowerApps Development Company
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal font-sans max-w-2xl">
                We help you quickly build data-driven solutions with the best Power Platform Development Services. We use Microsoft Power Apps Consulting Services, AI integration with Power Apps, and Microsoft Power Platform to design custom Power Apps solutions you can count on for enhanced results.
              </p>

              {/* Industry Section */}
              <div className="space-y-1 pt-1 text-left">
                <h3 className="text-[16px] font-[800] text-[#006B8F]">
                  Industry
                </h3>
                <p className="text-[14px] text-[#475569] font-medium">
                  Healthcare
                </p>
              </div>

              {/* Technologies Icons Grid */}
              <div className="space-y-2 pt-1 text-left">
                <h3 className="text-[16px] font-[800] text-[#006B8F]">
                  Technologies
                </h3>
                <div className="flex items-center gap-3">
                  {/* SharePoint Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center p-2 hover:shadow-md transition-shadow group">
                    <div className="w-8 h-8 rounded-lg bg-[#0078D4] flex items-center justify-center text-white font-[900] text-xs">
                      S
                    </div>
                  </div>

                  {/* Power Automate Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center p-2 hover:shadow-md transition-shadow group">
                    <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center text-white font-[900]">
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Power Apps Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center p-2 hover:shadow-md transition-shadow group">
                    <div className="w-8 h-8 rounded-lg bg-[#742774] flex items-center justify-center text-white font-[900]">
                      <Layers className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Power BI Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center p-2 hover:shadow-md transition-shadow group">
                    <div className="w-8 h-8 rounded-lg bg-[#F2C811] flex items-center justify-center text-slate-900 font-[900]">
                      <BarChart3 className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Monitor Screen Mockup with 3D Spheres Background */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* 3D Decorative Sphere Elements */}
              <div className="absolute -top-6 -left-4 w-24 h-24 rounded-full bg-gradient-to-tr from-[#0086C6] to-[#60A5FA] opacity-75 blur-xs -z-0 pointer-events-none" />
              <div className="absolute -bottom-6 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-[#0086C6] to-[#93C5FD] opacity-70 blur-xs -z-0 pointer-events-none" />

              {/* Desktop Monitor Mockup */}
              <div className="relative z-10 w-full max-w-lg group">
                <div className="bg-slate-900 p-3 sm:p-4 rounded-t-[16px] rounded-b-[4px] shadow-[0_25px_60px_rgba(0,95,150,0.25)] border-4 border-slate-800">
                  <div className="bg-white rounded-[8px] overflow-hidden">
                    {/* App Header Bar */}
                    <div className="bg-[#0B4D68] px-3 py-2 text-white flex items-center justify-between text-[11px] font-semibold">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="truncate">Zapier Automate System • Release Control</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[10px] text-cyan-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Sync</span>
                      </div>
                    </div>

                    {/* Data Grid Table (Matching the screenshot matrix) */}
                    <div className="p-2.5 overflow-x-auto bg-slate-50 text-[10px]">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 text-[#475569] font-bold">
                            <th className="py-1.5 px-2">Stage #</th>
                            <th className="py-1.5 px-2">NA-01</th>
                            <th className="py-1.5 px-2">EMEA-02</th>
                            <th className="py-1.5 px-2">APAC-03</th>
                            <th className="py-1.5 px-2">LATAM</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[9.5px]">
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-slate-700">Sprint Alpha</td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">Testing</span></td>
                            <td className="py-1.5 px-2"><span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">In Review</span></td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-slate-700">Sprint Beta</td>
                            <td className="py-1.5 px-2"><span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-bold">Pending</span></td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">Testing</span></td>
                            <td className="py-1.5 px-2"><span className="bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold">In Review</span></td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-slate-700">Deploy R1</td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-cyan-100 text-cyan-800 px-1.5 py-0.5 rounded font-bold">Scheduled</span></td>
                          </tr>
                          <tr>
                            <td className="py-1.5 px-2 font-bold text-slate-700">Rollout QA</td>
                            <td className="py-1.5 px-2"><span className="bg-cyan-100 text-cyan-800 px-1.5 py-0.5 rounded font-bold">Scheduled</span></td>
                            <td className="py-1.5 px-2"><span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-bold">Pending</span></td>
                            <td className="py-1.5 px-2"><span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Approved</span></td>
                            <td className="py-1.5 px-2"><span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">Testing</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Monitor Stand Base */}
                <div className="w-16 h-4 bg-slate-700 mx-auto" />
                <div className="w-32 h-2.5 bg-slate-800 rounded-full mx-auto shadow-md" />
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
          3. FEATURED CASE STUDY (Matching Screenshot Section 2)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Dotted Matrix Accent + Visual Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Dotted Accent Pattern */}
              <div className="absolute -top-5 -left-5 grid grid-cols-5 gap-2 opacity-30 z-0">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#005F96]" />
                ))}
              </div>

              <div className="relative z-10 bg-slate-900 rounded-[20px] overflow-hidden border border-slate-800 shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                  alt="Zapier Automate System"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                  <div className="inline-block bg-[#005F96] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                    Case Study Showcase
                  </div>
                  <h3 className="text-white font-[800] text-[18px] sm:text-[20px]">
                    Global Multi-Region Automation & Tracking Matrix
                  </h3>
                  <p className="text-slate-300 text-[12.5px] mt-1">
                    99.4% Automated Delivery Compliance across 4 Continents
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Title & Description */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="space-y-2">
                <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
                  About Zapier Automate System
                </h2>
                <h3 className="text-[17px] sm:text-[19px] font-[700] text-[#006B8F] leading-snug">
                  Automation of company's product release dates for across the regions
                </h3>
              </div>

              <p className="text-[14.5px] text-[#475569] leading-relaxed font-normal">
                Enterprise release coordination across global teams often suffers from manual status spreadsheets and communication silos. Our Power Platform & Power Automate engineers designed a centralized data orchestration engine that automates scheduled releases, triggers instant Teams/Slack notifications, and updates live Dataverse tables in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Real-time Multi-Region Sync</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Automated Teams / Email Alerts</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Power BI Interactive Dashboard</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>100% Zero-Error SLA Execution</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore Solution Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE POWERAPPS SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Microsoft PowerApps Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We build custom Canvas apps, Model-Driven solutions, Power Automate robotic flows, and Power Pages portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {powerAppsServices.map((service) => (
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
          5. KEY BENEFITS OF POWERAPPS (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose Microsoft PowerApps for Your Enterprise?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Accelerate digital transformation, automate manual overhead, and unite teams under one secure low-code roof.
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
          6. OUR AGILE WORK PROCESS (Step-by-Step)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-white tracking-tight">
              Our PowerApps Implementation Lifecycle
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
              Why Choose Firevy for PowerApps Development?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              A trusted global Microsoft partner with deep low-code proficiency and certified Power Platform architects.
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
              Our Recent PowerApps & Power Platform Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore custom PowerApps, automated flows, and Power Pages portals delivered for global enterprise clients.
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
      <SapphireFaqSection faqList={powerAppsFaqList} />

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
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} PowerApps Development Company to transform your ideas into robust low-code solutions.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire PowerApps Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PowerAppsDevelopmentService;
