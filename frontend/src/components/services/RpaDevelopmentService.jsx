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
  Bot,
  FileCheck,
  Workflow,
  BarChart3,
  Binary,
  Cog
} from 'lucide-react';

export const RpaDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const rpaCapabilities = [
    {
      title: 'Attended & Unattended Software Bots',
      desc: 'Deploy front-office bots for human-guided workflows and back-office unattended robots that run scheduled, 24/7 high-volume transactions.',
      icon: <Bot className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Intelligent Document Processing (IDP)',
      desc: 'Extract structured information from unstructured PDFs, invoices, forms, and receipts using advanced OCR and machine learning algorithms.',
      icon: <FileCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Cognitive AI & Computer Vision',
      desc: 'Empower automation bots to navigate complex legacy Citrix, mainframe, and web applications using pixel-level computer vision.',
      icon: <Binary className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Enterprise ERP & CRM Integration',
      desc: 'Bridge legacy data silos with SAP, Oracle, Salesforce, NetSuite, and Microsoft Dynamics without requiring expensive API overhauls.',
      icon: <Workflow className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Centralized RPA Bot Orchestration',
      desc: 'Manage bot schedules, dynamic queue allocation, failover load balancing, and license optimization from centralized control dashboards.',
      icon: <Cog className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Enterprise Audit Trail & Security',
      desc: 'Role-based access control (RBAC), encrypted credential vaults, and immutable audit logs ensuring 100% regulatory compliance.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const rpaBenefits = [
    {
      title: '99.9% Elimination of Human Error',
      desc: 'Automate high-precision data entry and calculations with flawless accuracy, eliminating expensive manual rework.'
    },
    {
      title: 'Up to 70% Operating Cost Savings',
      desc: 'Free up valuable human workforce from mundane repetitive tasks, driving immense operational cost efficiencies.'
    },
    {
      title: '24/7/365 Uninterrupted Execution',
      desc: 'Software robots operate continuously without breaks or fatigue, drastically speeding up process cycle times.'
    },
    {
      title: 'Fast Deployment & Rapid ROI',
      desc: 'Deploy production-ready automation workflows in weeks rather than months, generating positive return on investment within 3-6 months.'
    },
    {
      title: 'Zero Disruption to Existing Systems',
      desc: 'RPA interacts with existing user interfaces and legacy software without requiring alterations to core database architecture.'
    },
    {
      title: 'Streamlined Compliance & Auditability',
      desc: 'Every bot keystroke, transaction, and state transition is comprehensively logged for transparent internal and external audits.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Automated Invoice & Accounts Payable Bot',
      category: 'FinTech & Accounting',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Healthcare Claims Processing Automation',
      category: 'Insurance & Healthcare',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Supply Chain Order Reconciliation Bot',
      category: 'Logistics & Supply Chain',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Customer Onboarding & KYC Automation',
      category: 'Banking & Compliance',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Automated HR Employee Provisioning',
      category: 'Enterprise IT & HR',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Multi-Channel Inventory Sync Robot',
      category: 'E-Commerce & Retail',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. Which RPA platforms and tools do you specialize in?',
      a: 'We specialize in enterprise RPA suites including UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, and custom Python / Celery automation engines.'
    },
    {
      q: '2. What is the difference between Attended and Unattended RPA?',
      a: 'Attended bots run alongside human employees to assist in live tasks (like customer support call notes), while Unattended bots execute background batch jobs independently on virtual machines without human intervention.'
    },
    {
      q: '3. How do you assess which enterprise processes are best for RPA?',
      a: 'We conduct a comprehensive Process Discovery audit. Processes that are rule-based, repetitive, use digital data, and have high volume with low exception rates are ideal candidates for RPA.'
    },
    {
      q: '4. Does RPA require changing our existing ERP or CRM software?',
      a: 'No! RPA works at the presentation (UI) and API layers, imitating human interactions on existing screens without modifying underlying database structures or core IT infrastructure.'
    },
    {
      q: '5. What is the average ROI timeline for RPA implementation?',
      a: 'Most enterprises achieve 100% return on investment within 3 to 9 months due to immediate labor savings, error reduction, and faster transaction turnarounds.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Robotic Process Automation (RPA) Services Company | RPA Development"
        description="Sapphire is a top Robotic Process Automation (RPA) company. We build intelligent software bots, UiPath workflows, automated document processing, and enterprise RPA solutions."
        canonical="/services/rpa"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Reference)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Robotic Process Automation (RPA) Services Company
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Transform repetitive enterprise workflows, eliminate manual errors, and scale productivity with intelligent AI-powered software bots.
              </p>

              {/* CTA Action Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/rpa_hero_illustration.jpg"
                  alt="Robotic Process Automation Services Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. TRUSTED BRAND LOGOS STRIP (Full Width Infinite Auto-Scroll Marquee)
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. LEADING ROBOTIC PROCESS AUTOMATION (RPA) SOLUTIONS COMPANY (Section 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Leading Robotic Process Automation (RPA) Solutions Company
              </h2>
              <div className="space-y-4 text-[14.5px] text-[#475569] leading-[1.8]">
                <p>
                  Robotic Process Automation (RPA) empowers modern businesses to automate mundane, rule-based digital processes with incredible precision. By deploying intelligent software robots, organizations can execute complex multi-system transactions, process financial documents, and manage customer records with zero errors.
                </p>
                <p>
                  As an industry-leading RPA consulting and implementation company, we partner with enterprises to design end-to-end automation roadmaps. Utilizing industry-leading platforms such as UiPath, Automation Anywhere, Blue Prism, and Microsoft Power Automate, our RPA engineers build resilient, hyper-scalable bots that deliver measurable ROI within months.
                </p>
              </div>
            </div>

            {/* Right Column: RPA Workflow Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/rpa_workflow_illustration.jpg"
                  alt="Leading Robotic Process Automation Solutions Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. KEY RPA CAPABILITIES (Grid)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Key RPA Engineering Capabilities
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Enterprise-grade robotic process automation services tailored for operational excellence and high transactional volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rpaCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-[10px] bg-[#E0F2FE] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-[#0B0F19]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. BENEFITS OF RPA DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Benefits of Enterprise RPA Implementation
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Discover how deploying intelligent software robots accelerates business processes and cuts operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rpaBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-[800] text-[#0B0F19]">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#475569] leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES (10 White Pill Cards with Arrow)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. RECENT PROJECTS SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Recent RPA Implementations
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Explore some of our enterprise automation bots successfully handling millions of transactions monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-[14px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 bg-slate-100 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-semibold text-[#006B8F]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-[17px] font-[800] text-[#0B0F19] group-hover:text-[#006B8F] transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[13px] font-[600] text-[#006B8F]">Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#006B8F] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. VIDEO TESTIMONIALS
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          9. TECHNOLOGY STACK WE USE
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (2-Column Sapphire Layout)
          ========================================================================= */}
      <SapphireFaqSection faqList={faqs} />

      {/* =========================================================================
          11. FEATURED IN LOGOS GRID (18 Recognitions)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          12. HIRE DEDICATED DEVELOPERS CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#005478] to-[#007EA7] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] tracking-tight">
                Ready to Automate Your Enterprise Workflows?
              </h2>
              <p className="text-[15px] text-blue-100 leading-relaxed max-w-2xl">
                Consult with our certified RPA solution architects to eliminate manual bottlenecks and maximize organizational efficiency.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white hover:bg-slate-100 text-[#005478] font-[800] text-[15px] rounded-[8px] shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              >
                <span>Hire RPA Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RpaDevelopmentService;
