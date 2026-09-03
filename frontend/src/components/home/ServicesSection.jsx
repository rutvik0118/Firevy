import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';

const defaultServices = [
  {
    titleLine1: 'Web',
    titleLine2: 'Development',
    slug: 'web-development',
    description: 'We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.',
    iconKey: 'web'
  },
  {
    titleLine1: 'Mobile App',
    titleLine2: 'Development',
    slug: 'mobile-app-development',
    description: 'End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.',
    iconKey: 'mobile'
  },
  {
    titleLine1: 'UI/UX',
    titleLine2: 'Design',
    slug: 'ui-ux-design',
    description: 'Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.',
    iconKey: 'design'
  },
  {
    titleLine1: 'Product',
    titleLine2: 'Development',
    slug: 'product-development',
    description: 'Full-spectrum product development ideation to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.',
    iconKey: 'product'
  },
  {
    titleLine1: 'Software',
    titleLine2: 'Testing',
    slug: 'software-testing-qa',
    description: 'End-to-end software testing services including automated QA, security audits, performance testing, and bug tracking to ensure zero-defect releases.',
    iconKey: 'testing'
  },
  {
    titleLine1: 'Hire Dedicated',
    titleLine2: 'Developers',
    slug: 'dedicated-developers',
    description: 'Hire dedicated top 1% senior full-stack developers and software engineers on-demand to scale your engineering team dynamically.',
    iconKey: 'users'
  },
  {
    titleLine1: 'API Integration',
    titleLine2: '& Development',
    slug: 'api-integration-development',
    description: 'Custom microservice API development, GraphQL implementation, and seamless third-party enterprise integrations.',
    iconKey: 'api'
  },
  {
    titleLine1: 'Cloud',
    titleLine2: 'Development',
    slug: 'cloud-solutions',
    description: 'Enterprise AWS, Azure, and GCP cloud architecture, Kubernetes containerization, and automated CI/CD DevOps pipelines.',
    iconKey: 'cloud'
  }
];

const renderServiceIcon = (key) => {
  switch (key) {
    case 'mobile':
      return (
        <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="4" />
          <line x1="20" y1="11" x2="28" y2="11" />
          <rect x="17" y="16" width="6" height="6" rx="1" />
          <rect x="25" y="16" width="6" height="6" rx="1" />
          <rect x="17" y="24" width="6" height="6" rx="1" />
          <rect x="25" y="24" width="6" height="6" rx="1" />
          <circle cx="24" cy="36" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'design':
      return (
        <svg className="w-12 h-12 text-amber-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="3" />
          <circle cx="32" cy="16" r="3" />
          <circle cx="24" cy="32" r="3" />
          <rect x="22" y="14" width="4" height="4" />
          <path d="M16 19c0 8 8 13 8 13s8-5 8-13" />
          <path d="M19 16h10" />
          <path d="M24 8v5" />
        </svg>
      );
    case 'product':
      return (
        <svg className="w-12 h-12 text-cyan-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <rect x="12" y="24" width="6" height="6" rx="1" />
          <rect x="21" y="24" width="6" height="6" rx="1" />
          <rect x="30" y="24" width="6" height="6" rx="1" />
          <line x1="12" y1="13" x2="16" y2="13" />
          <line x1="20" y1="13" x2="24" y2="13" />
          <line x1="28" y1="13" x2="32" y2="13" />
        </svg>
      );
    case 'testing':
      return (
        <svg className="w-12 h-12 text-pink-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="24" height="32" rx="3" />
          <line x1="16" y1="16" x2="28" y2="16" />
          <line x1="16" y1="22" x2="28" y2="22" />
          <line x1="16" y1="28" x2="24" y2="28" />
          <path d="M30 26l8 12-4 2-8-12" />
          <path d="M38 38l4-1" />
        </svg>
      );
    case 'users':
      return (
        <svg className="w-12 h-12 text-amber-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="6" />
          <path d="M12 36c0-6 5-10 12-10s12 4 12 10" />
          <rect x="18" y="28" width="12" height="8" rx="2" />
          <path d="M21 31l-2 2 2 2" />
          <path d="M27 31l2 2-2 2" />
        </svg>
      );
    case 'api':
      return (
        <svg className="w-12 h-12 text-red-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <rect x="16" y="18" width="16" height="12" rx="2" fill="white" />
          <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="900" fill="currentColor">API</text>
        </svg>
      );
    case 'cloud':
      return (
        <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="28" height="32" rx="3" />
          <path d="M24 16v12" />
          <path d="M19 21l5-5 5 5" />
          <line x1="16" y1="32" x2="32" y2="32" />
        </svg>
      );
    case 'web':
    default:
      return (
        <svg className="w-12 h-12 text-purple-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <path d="M16 26l-4 4 4 4" />
          <path d="M32 26l4 4-4 4" />
          <path d="M26 25l-4 10" />
        </svg>
      );
  }
};

export const ServicesSection = ({ data }) => {
  const title = data?.title || 'Our Services';
  const description = data?.description || "We offer comprehensive services to develop digital solutions & manage complete product lifecycle.\nWe’ve robust work history with diverse business services.";

  const services = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultServices;

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden">
      {/* Background Subtle World Map Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#006B8F_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* 8-Card Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const title1 = service.titleLine1 || service.title?.split(' ')[0] || service.title || 'Service';
            const title2 = service.titleLine2 || (service.title?.split(' ').slice(1).join(' ')) || '';
            const slug = service.slug || service.link?.replace('/services/', '') || 'web-development';
            const desc = service.description || service.desc || '';

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[24px] p-7 shadow-[0px_10px_35px_rgba(0,0,0,0.05)] border border-slate-200/80 hover:border-[#006B8F] flex flex-col justify-between h-[360px] relative group overflow-hidden transition-all duration-300"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-[#006B8F]/10 transition-colors" />

                {/* Top Header Row (Icon + Corner Arrow) */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-blue-50/50 transition-colors">
                    {service.image ? (
                      <img src={service.image} alt={title1} className="w-12 h-12 object-contain" />
                    ) : (
                      renderServiceIcon(service.iconKey || service.icon || (idx === 0 ? 'web' : idx === 1 ? 'mobile' : idx === 2 ? 'design' : idx === 3 ? 'product' : idx === 4 ? 'testing' : idx === 5 ? 'users' : idx === 6 ? 'api' : 'cloud'))
                    )}
                  </div>
                  <Link
                    to={`/services/${slug}`}
                    className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#006B8F] group-hover:border-[#006B8F] group-hover:bg-white transition-all shadow-sm group-hover:rotate-45"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Middle Content */}
                <div className="space-y-3">
                  <h3 className="text-[22px] font-[800] text-slate-900 leading-[1.25] tracking-tight">
                    {title1} <span className="block text-[#006B8F] font-[800]">{title2}</span>
                  </h3>
                  <p className="text-[14px] font-[400] text-slate-500 leading-relaxed line-clamp-3">
                    {desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 border-t border-slate-100">
                  <Link
                    to={`/services/${slug}`}
                    className="inline-flex items-center text-[14px] font-[800] text-[#006B8F] group-hover:text-blue-700 tracking-wide space-x-2"
                  >
                    <span>{service.ctaText || "Explore Service"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
