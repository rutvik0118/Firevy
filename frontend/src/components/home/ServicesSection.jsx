import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';

export const ServicesSection = () => {
  const services = [
    {
      titleLine1: 'Web',
      titleLine2: 'Development',
      slug: 'web-development',
      description: 'We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <path d="M16 26l-4 4 4 4" />
          <path d="M32 26l4 4-4 4" />
          <path d="M26 25l-4 10" />
        </svg>
      )
    },
    {
      titleLine1: 'Mobile App',
      titleLine2: 'Development',
      slug: 'mobile-app-development',
      description: 'End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="4" />
          <line x1="20" y1="11" x2="28" y2="11" />
          <rect x="17" y="16" width="6" height="6" rx="1" />
          <rect x="25" y="16" width="6" height="6" rx="1" />
          <rect x="17" y="24" width="6" height="6" rx="1" />
          <rect x="25" y="24" width="6" height="6" rx="1" />
          <circle cx="24" cy="36" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      titleLine1: 'UI/UX',
      titleLine2: 'Design',
      slug: 'ui-ux-design',
      description: 'Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.',
      icon: (
        <svg className="w-12 h-12 text-amber-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="16" r="3" />
          <circle cx="32" cy="16" r="3" />
          <circle cx="24" cy="32" r="3" />
          <rect x="22" y="14" width="4" height="4" />
          <path d="M16 19c0 8 8 13 8 13s8-5 8-13" />
          <path d="M19 16h10" />
          <path d="M24 8v5" />
        </svg>
      )
    },
    {
      titleLine1: 'Product',
      titleLine2: 'Development',
      slug: 'product-development',
      description: 'Full-spectrum product development ideation to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.',
      icon: (
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
      )
    },
    {
      titleLine1: 'Software',
      titleLine2: 'Testing',
      slug: 'software-testing-qa',
      description: 'End-to-end software testing services including automated QA, security audits, performance testing, and bug tracking to ensure zero-defect releases.',
      icon: (
        <svg className="w-12 h-12 text-pink-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="24" height="32" rx="3" />
          <line x1="16" y1="16" x2="28" y2="16" />
          <line x1="16" y1="22" x2="28" y2="22" />
          <line x1="16" y1="28" x2="24" y2="28" />
          <path d="M30 26l8 12-4 2-8-12" />
          <path d="M38 38l4-1" />
        </svg>
      )
    },
    {
      titleLine1: 'Hire Dedicated',
      titleLine2: 'Developers',
      slug: 'dedicated-developers',
      description: 'Hire dedicated top 1% senior full-stack developers and software engineers on-demand to scale your engineering team dynamically.',
      icon: (
        <svg className="w-12 h-12 text-amber-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="6" />
          <path d="M12 36c0-6 5-10 12-10s12 4 12 10" />
          <rect x="18" y="28" width="12" height="8" rx="2" />
          <path d="M21 31l-2 2 2 2" />
          <path d="M27 31l2 2-2 2" />
        </svg>
      )
    },
    {
      titleLine1: 'API Integration',
      titleLine2: '& Development',
      slug: 'api-integration-development',
      description: 'Custom microservice API development, GraphQL implementation, and seamless third-party enterprise integrations.',
      icon: (
        <svg className="w-12 h-12 text-red-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="16" />
          <rect x="16" y="18" width="16" height="12" rx="2" fill="white" />
          <text x="24" y="27" textAnchor="middle" fontSize="9" fontWeight="900" fill="currentColor">API</text>
        </svg>
      )
    },
    {
      titleLine1: 'Cloud',
      titleLine2: 'Development',
      slug: 'cloud-solutions',
      description: 'Enterprise AWS, Azure, and GCP cloud architecture, Kubernetes containerization, and automated CI/CD DevOps pipelines.',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="28" height="32" rx="3" />
          <path d="M24 16v12" />
          <path d="M19 21l5-5 5 5" />
          <line x1="16" y1="32" x2="32" y2="32" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden">
      {/* Background Subtle World Map Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(#006B8F_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight mb-3">
            Our Services
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We offer comprehensive services to develop digital solutions & manage complete product lifecycle.<br className="hidden sm:inline" />
            We’ve robust work history with diverse business services.
          </p>
        </div>

        {/* 4x2 Grid of 8 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white rounded-[20px] p-8 shadow-[0px_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/90 border-b-4 border-b-transparent hover:border-b-[#006B8F] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full text-left group"
            >
              <div>
                {/* SVG Icon */}
                <div className="mb-6 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-[18px] font-[600] text-slate-900 leading-snug mb-4 group-hover:text-[#006B8F] transition-colors">
                  {service.titleLine1}<br />{service.titleLine2}
                </h3>

                {/* Card Description */}
                <p className="text-[15px] font-[400] text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Solid Teal Explore Service Button */}
              <div className="pt-2 mt-auto">
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#006B8F] hover:bg-[#004A75] text-white font-extrabold text-xs shadow-md transition-all group/btn"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
