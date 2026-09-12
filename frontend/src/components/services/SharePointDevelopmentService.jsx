import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
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
  FileText
} from 'lucide-react';

export const SharePointDevelopmentService = () => {
  const heroMetrics = [
    { number: '80+', label: 'Web Developers' },
    { number: '20+', label: 'Fortunes 500 Companies' },
    { number: '600+', label: 'Project Completed in Web Technology' },
    { number: '320+', label: '5-Star Clutch Reviews' }
  ];

  const sharepointServices = [
    {
      id: 1,
      title: 'Custom SharePoint Intranet Portals',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Design and engineer centralized, interactive digital workplace intranet portals that boost enterprise employee engagement and productivity.',
      bullets: [
        'Modern Communication Sites',
        'Enterprise Hub Sites',
        'Multi-Departmental Portals',
        'Custom SPFx Web Parts'
      ]
    },
    {
      id: 2,
      title: 'SharePoint Document & Content Management (DMS)',
      icon: <FolderLock className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Architect secure, structured document management systems with automated metadata tagging, version control, and compliance governance.',
      bullets: [
        'Automated Metadata & Taxonomy',
        'Granular Permission Control',
        'Regulatory Compliance (HIPAA/GDPR)',
        'Enterprise Search & Copilot Integration'
      ]
    },
    {
      id: 3,
      title: 'SharePoint Framework (SPFx) Development',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Develop custom client-side web parts and extensions utilizing modern SPFx, React, TypeScript, and Microsoft Graph APIs.',
      bullets: [
        'Custom SPFx Client Web Parts',
        'Application Customizers & Extensions',
        'Microsoft Teams Integration',
        'TypeScript & React SPFx'
      ]
    },
    {
      id: 4,
      title: 'Power Platform & Workflow Automation',
      icon: <Workflow className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Automate complex cross-departmental approval workflows, forms, and business logic using Power Automate, Power Apps, and Power BI.',
      bullets: [
        'Power Automate Robotic Flows',
        'Custom Power Apps Form Portals',
        'Power BI Embedded Analytics',
        'Multi-Tier Approval Automation'
      ]
    },
    {
      id: 5,
      title: 'SharePoint Migration & Microsoft 365 Upgrade',
      icon: <RefreshCw className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Seamlessly migrate legacy SharePoint On-Premises (2013/2016/2019) or file shares to SharePoint Online & Microsoft 365 with zero data loss.',
      bullets: [
        'Pre-Migration Content Audit',
        'ShareGate & SPMT Tools',
        'Hybrid Architecture Setup',
        'Zero-Downtime Cutover'
      ]
    },
    {
      id: 6,
      title: 'SharePoint API & Enterprise System Integration',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Integrate SharePoint seamlessly with ERPs (SAP, Oracle), CRMs (Salesforce, Dynamics 365), and custom line-of-business applications.',
      bullets: [
        'Microsoft Graph API Pipelines',
        'Dynamics 365 & SAP Connectors',
        'Azure AD Single Sign-On (SSO)',
        'Custom REST Webhook Endpoints'
      ]
    },
    {
      id: 7,
      title: 'SharePoint Security & Compliance Governance',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Enforce stringent data loss prevention (DLP), sensitivity labels, retention policies, and enterprise identity security across all sites.',
      bullets: [
        'Data Loss Prevention (DLP)',
        'Sensitivity & Retention Labels',
        'External Sharing Governance',
        'Audit Logging & Threat Protection'
      ]
    },
    {
      id: 8,
      title: '24/7 SharePoint Maintenance & SLA Support',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Continuous site health monitoring, user provisioning management, bug fixes, capacity scaling, and guaranteed SLA incident resolution.',
      bullets: [
        '24/7 SLA Uptime Guarantee',
        'Proactive Farm & Cloud Health Checks',
        'Dedicated On-Demand Engineers',
        'Monthly Governance Reviews'
      ]
    }
  ];

  const keyBenefits = [
    {
      title: 'Centralized Digital Workplace',
      desc: 'Connect globally distributed teams with unified company news, team collaboration workspaces, and streamlined departmental resources.',
      icon: <Globe className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Bank-Grade Microsoft Security',
      desc: 'Protected by Microsoft 365 enterprise zero-trust security, multi-factor authentication, Azure AD governance, and automated DLP policies.',
      icon: <ShieldCheck className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'No-Code / Low-Code Automation',
      desc: 'Empower business users and automate tedious manual document approval workflows with native Power Automate & Power Apps integration.',
      icon: <Workflow className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Seamless Microsoft Ecosystem Sync',
      desc: 'Native interoperability with Microsoft Teams, OneDrive, Outlook, Azure, and Microsoft Copilot for AI-assisted productivity.',
      icon: <Layers className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Intelligent Enterprise Search',
      desc: 'AI-driven semantic search powered by Microsoft Graph surface relevant files, conversations, and experts instantaneously across millions of files.',
      icon: <Search className="w-7 h-7 text-[#006B8F]" />
    },
    {
      title: 'Scalable Cloud Architecture',
      desc: 'Eliminate expensive on-premises server infrastructure overhead by scaling effortlessly with SharePoint Online and cloud storage tiers.',
      icon: <Cloud className="w-7 h-7 text-[#006B8F]" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Microsoft Certified SharePoint Architects',
      desc: 'Access senior Microsoft-certified consultants and SPFx developers with 6+ years delivering complex enterprise migrations and custom portals.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Code & Solution Ownership',
      desc: 'You receive complete source code ownership, SPFx packages, automation scripts, and comprehensive administrator handbooks.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Strict NDA & Data Security Protocols',
      desc: 'We enforce strict confidentiality agreements, GDPR/HIPAA compliance, and least-privilege administrative access policies.',
      icon: <CheckCircle2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Transparent Bi-Weekly Sprints',
      desc: 'Collaborate directly with our engineering squad via Teams, Slack, and Azure DevOps with transparent demos and progress reporting.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Choose between Dedicated Full-Time Teams, Time & Material hourly consulting, or Fixed Milestone deliverables tailored to your scope.',
      icon: <DollarSign className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Proven Enterprise Track Record',
      desc: 'Over 600+ web and enterprise portal projects delivered successfully with 95% client retention and 320+ 5-star reviews.',
      icon: <TrendingUp className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery & Architecture Scoping',
      desc: 'We assess your current content infrastructure, user roles, security governance, and workflow requirements to build an implementation plan.'
    },
    {
      step: '02',
      title: 'Information Architecture & UI/UX',
      desc: 'Our designers map out site taxonomies, navigation hierarchies, permission models, and brand-aligned intranet wireframes.'
    },
    {
      step: '03',
      title: 'SPFx Engineering & Automation',
      desc: 'Certified developers build custom SPFx components, Power Automate flows, and API integrations in structured 2-week sprints.'
    },
    {
      step: '04',
      title: 'Data Migration & User Testing',
      desc: 'We execute automated content migration using ShareGate/SPMT, followed by extensive UAT testing and permission validation.'
    },
    {
      step: '05',
      title: 'Deployment & Staff Training',
      desc: 'Zero-downtime production rollout, comprehensive user onboarding sessions, and detailed administrative handbook handoff.'
    },
    {
      step: '06',
      title: '24/7 SLA & Maintenance Support',
      desc: 'Ongoing proactive health checks, Microsoft 365 roadmap updates, security audits, and continuous workflow enhancements.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Global Manufacturing Digital Workplace Intranet',
      category: 'Enterprise Intranet & SPFx',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Healthcare HIPAA-Compliant Document Management System',
      category: 'DMS & Automated Taxonomy',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'FinTech Multi-Tier Loan Approval & Power Automate Flow',
      category: 'Workflow Automation',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Legal Firm Document Retention & Case Archive Portal',
      category: 'Compliance & Governance',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'On-Premises SharePoint 2013 to SharePoint Online Migration',
      category: 'Cloud Migration & Modernization',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Corporate Employee Directory & Microsoft Teams Hub',
      category: 'Custom SPFx Extensions',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    }
  ];

  const sharepointFaqList = [
    {
      id: 1,
      question: '1. What are the key business benefits of SharePoint development?',
      answer: 'SharePoint provides a unified digital workplace that combines centralized document management, enterprise-wide search, automated business workflows, secure internal communications, and seamless integration with Microsoft 365 and Microsoft Teams.'
    },
    {
      id: 2,
      question: '2. Can you migrate our on-premises SharePoint farm to SharePoint Online?',
      answer: 'Yes! We specialize in end-to-end migrations from legacy SharePoint 2010, 2013, 2016, and 2019 to SharePoint Online / Microsoft 365. We utilize proven tools like ShareGate, SPMT, and custom migration scripts to guarantee zero data loss, preserved permissions, and updated modern site architectures.'
    },
    {
      id: 3,
      question: '3. What is SharePoint Framework (SPFx) and when is it needed?',
      answer: 'SharePoint Framework (SPFx) is a modern page and web part extension model that uses client-side JavaScript frameworks (like React and TypeScript). It is used when out-of-the-box SharePoint web parts cannot satisfy your custom business logic, external API integrations, or brand-specific UI requirements.'
    },
    {
      id: 4,
      question: '4. How do you automate business processes in SharePoint?',
      answer: 'We leverage Microsoft Power Platform—including Power Automate for complex multi-level approval workflows and background data synchronization, Power Apps for customized form user interfaces, and Power BI for interactive visual reporting embedded directly in SharePoint pages.'
    },
    {
      id: 5,
      question: '5. How secure is our data in SharePoint Online?',
      answer: 'SharePoint Online adheres to global enterprise security standards (SOC 1/2/3, ISO 27001, HIPAA, GDPR). We configure advanced Data Loss Prevention (DLP) rules, Azure Information Protection, sensitivity labels, external sharing restrictions, and conditional access policies to safeguard your confidential files.'
    },
    {
      id: 6,
      question: '6. How much does custom SharePoint development cost?',
      answer: 'Development cost depends on whether you require an out-of-the-box modern intranet configuration, custom SPFx component engineering, complex data migrations, or third-party ERP/CRM integrations. We offer transparent Fixed-Price milestone projects and flexible Dedicated Developer models.'
    },
    {
      id: 7,
      question: '7. What post-launch maintenance and support options do you offer?',
      answer: 'We provide 24/7 SLA maintenance, ongoing site performance monitoring, user access management, Microsoft 365 roadmap feature updates, and on-demand workflow improvements to ensure uninterrupted business continuity.'
    },
    {
      id: 8,
      question: '8. Why choose Firevy / Sapphire Solutions for SharePoint development?',
      answer: 'We bring 23+ years of enterprise IT leadership, 320+ 5-star Clutch reviews, 600+ web/portal projects, certified Microsoft SharePoint architects, 100% code ownership, strict NDA agreements, and guaranteed timezone alignment with USA, UK, and global enterprises.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Best Sharepoint Development Services | SharePoint Development Company"
        description="Sapphire is a top-rated AI SharePoint development company. We develop and customize applications like content management, document management, intranet portals, and workflow automation."
        canonical="/services/sharepoint"
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
                Best Sharepoint Development Services
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal font-sans max-w-2xl">
                As a Top-Rated AI SharePoint development company, we develop and customize various applications like content management, document management, enterprise search, and the internet. Using .Net and custom coding, we offer Affordable SharePoint automation services for small businesses solutions in a customized way as per business challenges
              </p>

              {/* 4 Counter Metrics (80+, 20+, 600+, 320+) */}
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

              {/* 2 CTA Buttons (Discuss Your Project & Hire Sharepoint Developers) */}
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
                  <span>Hire Sharepoint Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Laptop Mockup Displaying SharePoint Modern Intranet Portal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md group">
                {/* Mockup Frame */}
                <div className="bg-slate-900 p-2.5 sm:p-3.5 rounded-[18px] shadow-[0_20px_50px_rgba(0,95,150,0.22)] border border-slate-700">
                  <div className="bg-white rounded-[12px] overflow-hidden border border-slate-200">
                    {/* Mock Browser Header */}
                    <div className="bg-[#0078D4] px-3 py-2 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
                        <span className="text-[11px] font-bold tracking-wide">SharePoint Intranet Portal</span>
                      </div>
                      <div className="text-[10px] text-blue-100 font-mono">Microsoft 365</div>
                    </div>

                    {/* Dashboard News / Intranet Grid */}
                    <div className="p-3.5 space-y-3 text-left bg-slate-50">
                      {/* Top Banner News */}
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-[#0078D4]/10 flex items-center justify-center shrink-0">
                          <FileText className="w-6 h-6 text-[#0078D4]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9.5px] font-bold text-[#0078D4] uppercase tracking-wider">Company News</span>
                          <h4 className="text-[11.5px] font-[800] text-slate-900 truncate leading-snug">
                            Global Digital Transformation Roadmap 2026
                          </h4>
                          <p className="text-[10px] text-slate-500">Corporate Strategy • Updated Today</p>
                        </div>
                      </div>

                      {/* 2 Side-by-Side Content Blocks */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-left space-y-1">
                          <div className="text-[10px] font-bold text-slate-700 flex items-center space-x-1">
                            <FolderLock className="w-3.5 h-3.5 text-[#0078D4]" />
                            <span>Document Hub</span>
                          </div>
                          <p className="text-[9.5px] text-slate-500">2,450 Verified Files</p>
                          <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Synced</span>
                        </div>

                        <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-left space-y-1">
                          <div className="text-[10px] font-bold text-slate-700 flex items-center space-x-1">
                            <Workflow className="w-3.5 h-3.5 text-[#0078D4]" />
                            <span>Power Automate</span>
                          </div>
                          <p className="text-[9.5px] text-slate-500">14 Active Flows</p>
                          <span className="inline-block text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Running</span>
                        </div>
                      </div>

                      {/* Quick Department Launchpad */}
                      <div className="bg-[#0078D4] text-white p-2.5 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-blue-100">Enterprise Search</div>
                          <div className="text-[12px] font-[800]">Microsoft Graph Copilot</div>
                        </div>
                        <Search className="w-4 h-4 text-blue-200" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="w-full h-3 bg-slate-400 rounded-b-xl mx-auto opacity-70 shadow-md" />
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
          3. WEB DEVELOPMENT MARKET STATS SECTION (Matching Screenshot Section 2)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Visual Market Stats Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-[20px] p-6 sm:p-8 shadow-md text-left space-y-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-[13px] font-[800] text-slate-900">Global Web Development & Enterprise Collaboration Market</span>
                  <span className="text-[11px] font-bold text-[#005F96] bg-blue-50 px-2 py-0.5 rounded">2020 - 2031</span>
                </div>

                {/* Growth Bars */}
                <div className="space-y-3.5 pt-2">
                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-slate-700 mb-1">
                      <span>Enterprise SharePoint & Intranet Solutions</span>
                      <span className="text-[#005F96]">+18.5% CAGR</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-[#005F96] h-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-slate-700 mb-1">
                      <span>Cloud Document Management & Governance</span>
                      <span className="text-emerald-600">+24.2% Growth</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[94%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[12px] font-bold text-slate-700 mb-1">
                      <span>Power Platform & Automated Robotic Flows</span>
                      <span className="text-cyan-600">+31.0% Expansion</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full w-[78%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 flex items-center space-x-3 text-[12.5px] text-[#475569]">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Over 85% of Fortune 500 enterprises rely on SharePoint for internal collaboration and content security.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight font-sans">
                Web Development Market Stats
              </h2>

              <p className="text-[14.5px] text-[#475569] leading-relaxed font-normal">
                Modern enterprise web collaboration requires scalable, compliant, and centralized digital infrastructure. Our custom SharePoint development services bridge the gap between complex document taxonomies and frictionless employee experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Custom SPFx & React Web Parts</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Automated Power Platform Workflows</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Zero-Loss Cloud Migration</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[13.5px] font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#005F96] shrink-0" />
                  <span>Enterprise Security & DLP Governance</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Get Free SharePoint Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COMPREHENSIVE SHAREPOINT SERVICES (8 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 font-sans text-left border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our SharePoint Development Services
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We engineer secure, modern, and high-performance SharePoint intranet portals, DMS solutions, and automated business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sharepointServices.map((service) => (
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
          5. KEY BENEFITS OF SHAREPOINT (6 Cards Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Why Choose SharePoint for Enterprise Collaboration?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              SharePoint empowers organizations with centralized content, automated compliance, and seamless Microsoft 365 synergy.
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
              Our SharePoint Implementation Lifecycle
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
              Why Choose Firevy for SharePoint Development?
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              A trusted global Microsoft partner with deep full-stack proficiency and certified SharePoint architects.
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
              Our Recent SharePoint Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore custom SharePoint intranet portals and DMS automation systems successfully delivered for our enterprise clients.
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
      <SapphireFaqSection faqList={sharepointFaqList} />

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
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} SharePoint Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire SharePoint Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SharePointDevelopmentService;
