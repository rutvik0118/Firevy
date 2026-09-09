import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IconRenderer from '../components/common/IconRenderer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import serviceApi from '../services/serviceApi';
import BRAND from '../constants/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, ShieldCheck, Zap, Sparkles, Star } from 'lucide-react';

import HealthcareAppDevelopmentService from '../components/services/HealthcareAppDevelopmentService';
import EducationAppDevelopmentService from '../components/services/EducationAppDevelopmentService';
import UberLikeAppDevelopmentService from '../components/services/UberLikeAppDevelopmentService';
import SpotifyLikeAppDevelopmentService from '../components/services/SpotifyLikeAppDevelopmentService';
import ZomatoLikeAppDevelopmentService from '../components/services/ZomatoLikeAppDevelopmentService';
import AmazonLikeAppDevelopmentService from '../components/services/AmazonLikeAppDevelopmentService';
import VisitorManagementSystemService from '../components/services/VisitorManagementSystemService';
import WarehouseManagementSystemService from '../components/services/WarehouseManagementSystemService';
import CloverAppDevelopmentService from '../components/services/CloverAppDevelopmentService';
import AndroidAppDevelopmentService from '../components/services/AndroidAppDevelopmentService';
import HireCSharpDevelopersService from '../components/services/HireCSharpDevelopersService';
import IWatchAppDevelopmentService from '../components/services/IWatchAppDevelopmentService';
import IOSAppDevelopmentService from '../components/services/IOSAppDevelopmentService';

export const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const isAndroid = slug && (
    slug.toLowerCase().includes('android-app') ||
    slug.toLowerCase().includes('android-development') ||
    slug.toLowerCase() === 'android'
  );

  const isHealthcare = slug && (
    slug.toLowerCase().includes('health-care-app') ||
    slug.toLowerCase().includes('healthcare-app') ||
    slug.toLowerCase() === 'healthcare'
  );

  const isEducation = slug && (
    slug.toLowerCase().includes('education-app') ||
    slug.toLowerCase().includes('elearning-app') ||
    slug.toLowerCase() === 'education'
  );

  const isUber = slug && (
    slug.toLowerCase().includes('uber-like') ||
    slug.toLowerCase().includes('uber-clone') ||
    slug.toLowerCase().includes('taxi-booking') ||
    slug.toLowerCase() === 'uber'
  );

  const isSpotify = slug && (
    slug.toLowerCase().includes('spotify-like') ||
    slug.toLowerCase().includes('audio-streaming') ||
    slug.toLowerCase().includes('music-streaming') ||
    slug.toLowerCase() === 'spotify'
  );

  const isZomato = slug && (
    slug.toLowerCase().includes('zomato-like') ||
    slug.toLowerCase().includes('zomato-clone') ||
    slug.toLowerCase().includes('food-delivery') ||
    slug.toLowerCase() === 'zomato'
  );

  const isAmazon = slug && (
    slug.toLowerCase().includes('amazon-like') ||
    slug.toLowerCase().includes('amazon-clone') ||
    slug.toLowerCase().includes('ecommerce') ||
    slug.toLowerCase() === 'e-commerce' ||
    slug.toLowerCase() === 'amazon'
  );

  const isVisitor = slug && (
    slug.toLowerCase().includes('visitor-management') ||
    slug.toLowerCase().includes('visitor-app') ||
    slug.toLowerCase() === 'visitor'
  );

  const isWarehouse = slug && (
    slug.toLowerCase().includes('warehouse-management') ||
    slug.toLowerCase().includes('wms') ||
    slug.toLowerCase() === 'warehouse'
  );

  const isClover = slug && (
    slug.toLowerCase().includes('clover-app') ||
    slug.toLowerCase().includes('clover-pos') ||
    slug.toLowerCase() === 'clover'
  );

  const isCSharp = slug && (
    slug.toLowerCase().includes('c-sharp') ||
    slug.toLowerCase().includes('csharp') ||
    slug.toLowerCase().includes('hire-c-sharp') ||
    slug.toLowerCase() === 'hire-c-sharp-developers'
  );

  const isIWatch = slug && (
    slug.toLowerCase().includes('iwatch') ||
    slug.toLowerCase().includes('apple-watch') ||
    slug.toLowerCase().includes('watchos')
  );

  const isIOS = slug && (
    slug.toLowerCase().includes('ios-app') ||
    slug.toLowerCase().includes('ios-development') ||
    slug.toLowerCase().includes('iphone-app') ||
    slug.toLowerCase().includes('iphone-development') ||
    slug.toLowerCase() === 'ios' ||
    slug.toLowerCase() === 'iphone'
  );

  const unslugify = (str) => {
    if (!str) return 'Enterprise Tech Solution';
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const generateFallbackService = (serviceSlug) => {
    const formattedTitle = unslugify(serviceSlug);
    const isHire = serviceSlug.toLowerCase().includes('hire');
    
    return {
      title: formattedTitle,
      slug: serviceSlug,
      icon: 'Code2',
      description: isHire
        ? `Empower your engineering organization by hiring world-class dedicated ${formattedTitle} specialists from Firevy.co. Access top 1% vetted developers with deep industry expertise, agile workflows, and zero onboarding overhead.`
        : `Drive innovation and scale your business with enterprise-grade ${formattedTitle} services from Firevy.co. Designed for security, high-throughput scalability, and seamless integration into modern cloud environments.`,
      shortDescription: `Top-tier ${formattedTitle} solutions engineered by Firevy.co. High performance, security, and enterprise scalability.`,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      features: [
        {
          title: "Enterprise Architecture & Security",
          description: `Custom ${formattedTitle} implementation built with microservices architecture, OWASP compliance, and zero-trust security standards.`
        },
        {
          title: "High Performance & Scalability",
          description: `Engineered for high concurrent load, low latency API responses, and fault-tolerant cloud auto-scaling.`
        },
        {
          title: "Continuous CI/CD & Integration",
          description: "Automated testing, continuous deployment pipelines, and seamless API integration into your existing tech stack."
        },
        {
          title: "Dedicated Squad & Agile Sprints",
          description: "Collaborate directly with senior architects, product managers, and QA specialists using transparent bi-weekly Agile sprints."
        },
        {
          title: "24/7 SLA & Infrastructure Monitoring",
          description: "Proactive log tracking, zero-downtime maintenance, and 99.99% uptime guarantees backed by strict enterprise SLAs."
        },
        {
          title: "Analytics & Measurable ROI",
          description: "Real-time metrics dashboards, bottleneck analysis, and continuous performance optimization."
        }
      ],
      process: [
        { title: "Discovery & Strategy", description: "Architecture scoping, technology stack validation, and feasibility mapping." },
        { title: "Sprint Engineering", description: "Bi-weekly sprint deliverables with clean code, unit test coverage, and documentation." },
        { title: "Quality Assurance", description: "Automated vulnerability scanning, load testing, and cross-platform verification." },
        { title: "Global Cloud Deployment", description: "Zero-downtime orchestration, Kubernetes rollout, and continuous monitoring." }
      ],
      technologies: ["React", "Node.js", "TypeScript", "Python", "Docker", "AWS Cloud", "Kubernetes", "GraphQL", "PostgreSQL", "Redis"],
      faqs: [
        {
          q: `How do Firevy.co's ${formattedTitle} services accelerate time-to-market?`,
          a: "Our pre-built architectural blueprints, vetted domain architects, and DevOps automation allow us to deliver production-ready features up to 40% faster than traditional agencies."
        },
        {
          q: "What security compliance frameworks do you adhere to?",
          a: "All deliverables undergo rigorous static code analysis, SOC-2 readiness checks, GDPR / HIPAA compliant architecture design, and automated vulnerability scanning."
        },
        {
          q: "Can you seamlessly augment our existing engineering team?",
          a: "Yes. Our engineers integrate directly into your Jira, Slack, GitHub workflows with daily standups and transparent reporting."
        },
        {
          q: "What post-launch maintenance SLA options are provided?",
          a: "We offer 24/7/365 infrastructure monitoring, automated security patch rollouts, performance tuning, and guaranteed < 15 minute emergency incident responses."
        }
      ]
    };
  };

  const fetchServiceDetails = async () => {
    try {
      setLoading(true);
      const data = await serviceApi.getServiceBySlug(slug);
      if (data && data.success && data.data) {
        setService(data.data);
      } else if (data && data.title) {
        setService(data);
      } else {
        setService(generateFallbackService(slug));
      }
    } catch (err) {
      console.warn("Backend unavailable or service not found in DB. Falling back to static enterprise content.", err);
      setService(generateFallbackService(slug));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAndroid && !isIOS && !isHealthcare && !isEducation && !isUber && !isSpotify && !isZomato && !isAmazon && !isVisitor && !isWarehouse && !isClover && !isCSharp && !isIWatch) {
      fetchServiceDetails();
    } else {
      setLoading(false);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (isIOS) {
    return <IOSAppDevelopmentService />;
  }

  if (isAndroid) {
    return <AndroidAppDevelopmentService />;
  }

  if (isHealthcare) {
    return <HealthcareAppDevelopmentService />;
  }

  if (isEducation) {
    return <EducationAppDevelopmentService />;
  }

  if (isUber) {
    return <UberLikeAppDevelopmentService />;
  }

  if (isSpotify) {
    return <SpotifyLikeAppDevelopmentService />;
  }

  if (isZomato) {
    return <ZomatoLikeAppDevelopmentService />;
  }

  if (isAmazon) {
    return <AmazonLikeAppDevelopmentService />;
  }

  if (isVisitor) {
    return <VisitorManagementSystemService />;
  }

  if (isWarehouse) {
    return <WarehouseManagementSystemService />;
  }

  if (isClover) {
    return <CloverAppDevelopmentService />;
  }

  if (isCSharp) {
    return <HireCSharpDevelopersService />;
  }

  if (isIWatch) {
    return <IWatchAppDevelopmentService />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const currentService = service || generateFallbackService(slug);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`${currentService.title} Services | ${BRAND.name}`}
        description={currentService.shortDescription || currentService.description}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,95,150,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005F96]/10 border border-[#005F96]/30 text-xs font-semibold text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Grade Solution</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {currentService.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {currentService.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[#005F96] hover:bg-[#004D7A] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-sm tracking-wide transition-all"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities / Features Section */}
      {currentService.features && currentService.features.length > 0 && (
        <section id="features" className="py-20 bg-slate-950 border-b border-slate-900">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold text-[#005F96] tracking-wider uppercase">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Key Architecture Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-[#005F96]/60 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005F96]/10 text-cyan-400 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tech Stack Pills */}
      {currentService.technologies && currentService.technologies.length > 0 && (
        <section className="py-16 bg-slate-900/40 border-b border-slate-900">
          <Container>
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                CORE TECHNOLOGIES & TOOLCHAINS
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {currentService.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQs Section */}
      {currentService.faqs && currentService.faqs.length > 0 && (
        <section className="py-20 bg-slate-950 border-b border-slate-900">
          <Container className="max-w-4xl">
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl font-black text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {currentService.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </div>
  );
};

export default ServiceDetails;
