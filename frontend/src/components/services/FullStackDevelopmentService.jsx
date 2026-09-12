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
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Brain,
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
  Database,
  Globe,
  Server,
  Layers3,
  Box,
  Binary,
  CloudLightning
} from 'lucide-react';

export const FullStackDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const heroMetrics = [
    { number: '47+', label: 'Web Developers' },
    { number: '11+', label: 'Fortunes 500 Companies' },
    { number: '354+', label: 'Project Completed in Web Technology' },
    { number: '189+', label: '5-Star Clutch Reviews' }
  ];

  const cuttingEdgeTech = [
    {
      title: 'Node.js',
      desc: 'We use Node.js to create high-performing, non-blocking back-end systems. Its event-driven architecture, ideal for microservices and real-time data processing, allows us to build scalable systems.',
      icon: <Server className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Deno',
      desc: 'With Deno, we provide secure, cutting-edge TypeScript and JavaScript solutions. Thanks to Deno integrated TypeScript support and secure default settings, we deliver maintainable back-end systems.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Spring Boot',
      desc: 'We utilize Spring Boot to develop Java-based enterprise-level apps. Because of its broad ecosystem and microservices capabilities, it is perfect for creating intricate, distributed systems.',
      icon: <Cpu className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Django',
      desc: 'Our group creates safe and scalable Python apps with Django. Because of its built-in tools and rapid development capabilities, we can quickly deliver reliable web solutions.',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Docker',
      desc: 'We utilize Docker for containerization to provide seamless deployment and consistent performance across many environments. This guarantees faster growth and simpler application management.',
      icon: <Box className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'TensorFlow.js',
      desc: 'We use TensorFlow.js to integrate machine learning models directly into your web applications, providing clients with client-side inference, real-time statistics, and smart predictions.',
      icon: <Brain className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Edge Computing',
      desc: 'We create edge computing solutions to handle data closer to its source. This method lowers latency, boosts real-time replies, and improves performance for low-latency web apps.',
      icon: <CloudLightning className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const techStacks = [
    {
      title: 'MEAN Stack',
      desc: 'Our full-stack developers create scalable, interactive, and effective online apps that rock in terms of responsiveness and performance by combining Node.js and Angular dynamic front-end capabilities with Express.js and MongoDB for the backend.'
    },
    {
      title: 'JAM Stack',
      desc: 'Our teams employ JAM Stack, a modern web development methodology combining JavaScript, reusable APIs, and pre-rendered Markup to create fast, secure, and auto-scaling websites.'
    },
    {
      title: 'Flask Stack',
      desc: 'With the help of frontend technologies like React or Angular and Python Flask framework, our developers create web apps that are nimble, lightweight, and engineered for high-throughput APIs.'
    },
    {
      title: 'Next.js + Node.js',
      desc: 'Our full-stack engineers create scalable, quick, and search engine-friendly online apps by utilizing Next.js for server-side rendering (SSR), static generation, and Node.js for reliable server-side microservices.'
    },
    {
      title: 'Express.js + Node.js',
      desc: 'Express.js is a lightweight web application framework for Node.js offering high-throughput performance for RESTful microservices, WebSocket gateways, and cloud API endpoints.'
    },
    {
      title: 'JavaScript + HTML/CSS/PHP',
      desc: 'Modern web architectures combining robust PHP backend processing with dynamic client-side interactions driven by modern vanilla JavaScript, HTML5, and CSS3.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Enterprise SaaS Web Platform',
      category: 'Cloud Full Stack',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'AI Traffic Management Dashboard',
      category: 'Real-Time Analytics',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Real Estate Portal & Mobile App',
      category: 'PropTech Web App',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Smart Booking & Reservation Hub',
      category: 'On-Demand System',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'On Demand Recruitment Portal',
      category: 'HR Tech Solution',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'AI Conversational Assistant Web',
      category: 'Next.js & AI API',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. Why should our business hire Full Stack developers?',
      a: 'Full stack developers handle frontend UI/UX, backend API architectures, database management, and cloud deployment, reducing team overhead and speeding up time-to-market.'
    },
    {
      q: '2. Which frontend and backend technology stacks do you support?',
      a: 'We support React, Next.js, Angular, Vue on the frontend, combined with Node.js, Express, Python (Django/FastAPI), Java (Spring Boot), PHP (Laravel), and .NET Core on the backend.'
    },
    {
      q: '3. How do you handle database design and cloud scalability?',
      a: 'We architect hybrid SQL and NoSQL database schemas (PostgreSQL, MySQL, MongoDB, Redis) with automated containerization on Docker and Kubernetes hosted on AWS, Azure, or GCP.'
    },
    {
      q: '4. Do you provide ongoing maintenance and support after launch?',
      a: 'Yes, we provide 24/7 SLA-backed monitoring, bug fixes, security patch updates, performance tuning, and agile sprint feature additions.'
    },
    {
      q: '5. What is the hiring model for dedicated Full Stack developers?',
      a: 'We offer flexible engagement models including Dedicated Full-Time Squads, Time & Material, and Fixed Milestone contracts with immediate 48-hour onboarding.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Full Stack Development Services | Full Stack Development Company"
        description="Sapphire provides the best full stack development services having expertise in website development, mobile app development, software development, frontend & backend development."
        canonical="/services/full-stack"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Screenshot)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext, Metrics & 2 CTA Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Full Stack Development Services
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Every business needs affordable AI Full Stack Development Services to thrive online and achieve better results. Our Full Stack Web Development Services ensure you stay ahead of the competition by leveraging the best technologies and practices.
              </p>

              {/* 4 Counter Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[24px] sm:text-[28px] font-[900] text-[#0B0F19] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[12px] sm:text-[13px] text-[#64748B] font-medium leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Hire Full Stack Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="Full Stack Development Services"
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
          3. WEB DEVELOPMENT MARKET STATS (1:1 Match with Screenshot)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bar Chart Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-[16px] overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/images/blockchain_market_stats_chart.jpg"
                  alt="Global Web Development Market Size from 2020 to 2031"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Heading, Text & Button */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Web Development Market Stats
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Connect with an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. COST-EFFECTIVELY SMARTER FULL STACK DEVELOPERS
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/70 font-sans text-left">
        <Container>
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
              Cost-Effectively Smarter Full Stack Developers for Entrepreneurs
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              Hire Full Stack Web Development Company to launch your web and mobile applications using a variety of frontend and backend technology stacks. Our best AI-Enabled Full Stack Development Company makes it even more affordable and dependable for entrepreneurs to hire a full-stack web developer company. You can achieve excellent results at friendly costs to your wallet if you use our Affordable Full Stack Development Services.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              Ruby, PHP, Node.js, and Python are all well-known programming languages used by our engineers to build and maintain the backend of your product. As a top AI-Powered Full Stack Web Development Company, we have a team of full-stack engineers who are best in talent, results-driven, and motivated to deliver enterprise-grade web stack development services.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. CUTTING EDGE TECHNOLOGY SAPPHIRE USE FOR FULL STACK DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Cutting Edge Technology {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Use For Full Stack Development
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              At {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name}, we provide our clients with complete full-stack app development services utilizing a wide range of frontend and backend technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cuttingEdgeTech.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. FULL STACK TECHNOLOGY COMBINATIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Full Stack Frameworks & Technology Combinations
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We design and implement strong and scalable full-stack web solutions using a variety of front-end and back-end combinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStacks.map((stack, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center space-x-2.5 text-[#006B8F]">
                  <Layers3 className="w-5 h-5" />
                  <h3 className="text-[16px] font-[800] text-slate-900">
                    {stack.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {stack.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          8. OUR RECENT PROJECTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Presenting the wide range of solutions that we have successfully delivered to our clients with high-quality standards
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
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
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
          10. TECHNOLOGY STACK
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us For Any Query.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between font-[700] text-[15px] sm:text-[16px] text-slate-900 hover:text-[#006B8F] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${
                      openFaq === idx ? 'rotate-180 text-[#006B8F]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          12. WE HAVE BEEN FEATURED IN (Exact 18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          13. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Full Stack Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Full Stack Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FullStackDevelopmentService;
