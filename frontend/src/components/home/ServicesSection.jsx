import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultServices = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'We offer a broad spectrum of web development services to fully tap into the capabilities offered by modern web technologies.',
    iconKey: 'web'
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'End-to-end mobile apps development, from business analysis, design to testing and deployment or online market publication.',
    iconKey: 'mobile'
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Comprehensive UI/UX services that include idea to the wireframes, web and mobile app design, consulting, and branding using the latest tools and technologies.',
    iconKey: 'design'
  },
  {
    title: 'Product Development',
    slug: 'product-development',
    description: 'Full-spectrum product development ideation to deployment. Product consultation, Product enhancement, MVP (Minimum Viable Product) and support services with an NDA.',
    iconKey: 'product'
  },
  {
    title: 'Software Testing',
    slug: 'software-testing-qa',
    description: 'Quality Assurance (QA) and software testing services ensuring top-notch stability, automated validation, and zero-defect performance.',
    iconKey: 'testing'
  },
  {
    title: 'Hire Dedicated Developers',
    slug: 'dedicated-developers',
    description: 'Hire a dedicated developer team to scale your tech capabilities with flexible engagement models and proven senior engineers.',
    iconKey: 'users'
  },
  {
    title: 'API Integration & Development',
    slug: 'api-integration-development',
    description: 'Integrate third-party APIs and build robust custom microservices for seamless enterprise interoperability and data sync.',
    iconKey: 'api'
  },
  {
    title: 'Cloud Development',
    slug: 'cloud-solutions',
    description: 'Cloud development and infrastructure management on AWS, Azure, and Google Cloud with high availability architectures.',
    iconKey: 'cloud'
  }
];

const renderServiceIcon = (key) => {
  switch (key) {
    case 'mobile':
      return (
        <svg className="w-14 h-14 text-[#10B981] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="4" />
          <line x1="20" y1="10" x2="28" y2="10" />
          <rect x="16" y="15" width="6" height="6" rx="1.5" />
          <rect x="26" y="15" width="6" height="6" rx="1.5" />
          <rect x="16" y="24" width="6" height="6" rx="1.5" />
          <rect x="26" y="24" width="6" height="6" rx="1.5" />
          <circle cx="24" cy="37" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'design':
      return (
        <svg className="w-14 h-14 text-[#F97316] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14" cy="14" r="3" />
          <circle cx="34" cy="14" r="3" />
          <circle cx="24" cy="34" r="3" />
          <path d="M14 17c0 8 10 17 10 17s10-9 10-17" />
          <path d="M21 21l3-7 3 7" />
          <line x1="20" y1="27" x2="28" y2="27" />
          <line x1="17" y1="14" x2="31" y2="14" />
        </svg>
      );
    case 'product':
      return (
        <svg className="w-14 h-14 text-[#0284C7] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          <circle cx="17" cy="13" r="1.5" fill="currentColor" />
          <circle cx="22" cy="13" r="1.5" fill="currentColor" />
          <rect x="12" y="24" width="6" height="10" rx="1" />
          <rect x="21" y="24" width="6" height="10" rx="1" />
          <rect x="30" y="24" width="6" height="10" rx="1" />
        </svg>
      );
    case 'testing':
      return (
        <svg className="w-14 h-14 text-[#EC4899] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="22" height="32" rx="3" />
          <line x1="13" y1="17" x2="25" y2="17" />
          <line x1="13" y1="23" x2="25" y2="23" />
          <line x1="13" y1="29" x2="20" y2="29" />
          <path d="M28 24l9-9 4 4-9 9h-4v-4z" />
        </svg>
      );
    case 'users':
      return (
        <svg className="w-14 h-14 text-[#EAB308] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="16" r="5" />
          <path d="M14 34c0-5.5 4.5-9 10-9s10 3.5 10 9" />
          <rect x="16" y="30" width="16" height="10" rx="1.5" />
          <polyline points="35 15 38 18 35 21" strokeWidth="2" />
          <line x1="31" y1="22" x2="33" y2="14" strokeWidth="2" />
        </svg>
      );
    case 'api':
      return (
        <svg className="w-14 h-14 text-[#EA580C] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26a8 8 0 0 1 15-4 6 6 0 0 1 7 7H14z" />
          <circle cx="24" cy="34" r="8" />
          <circle cx="24" cy="34" r="3" />
          <text x="24" y="22" textAnchor="middle" fontSize="6" fontWeight="900" fill="currentColor" stroke="none">API</text>
        </svg>
      );
    case 'cloud':
      return (
        <svg className="w-14 h-14 text-[#10B981] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="28" height="32" rx="3" />
          <path d="M24 16v12" />
          <path d="M19 21l5-5 5 5" />
          <line x1="16" y1="32" x2="32" y2="32" />
        </svg>
      );
    case 'web':
    default:
      return (
        <svg className="w-14 h-14 text-[#7C3AED] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <line x1="6" y1="18" x2="42" y2="18" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          <circle cx="17" cy="13" r="1.5" fill="currentColor" />
          <circle cx="22" cy="13" r="1.5" fill="currentColor" />
          <polyline points="18 26 14 30 18 34" strokeWidth="2.5" />
          <polyline points="30 26 34 30 30 34" strokeWidth="2.5" />
          <line x1="26" y1="24" x2="22" y2="36" strokeWidth="2.5" />
        </svg>
      );
  }
};

export const ServicesSection = ({ data }) => {
  const title = data?.title || 'Our Services';
  const description = data?.description || "We offer comprehensive services to develop digital solutions & manage complete product lifecycle.\nWe’ve robust work history with diverse business services.";

  const rawServices = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultServices;

  const services = rawServices.slice(0, 8);

  return (
    <section className="py-20 bg-[#F7FAFD] border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <Container className="relative z-10 max-w-[1240px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] sm:text-[40px] font-[900] text-slate-900 tracking-tight mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[15px] sm:text-[16px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto whitespace-pre-line font-sans">
            {description}
          </p>
        </div>

        {/* 8-Card Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const titleText = service.title || (service.titleLine1 ? `${service.titleLine1} ${service.titleLine2 || ''}` : defaultServices[idx % defaultServices.length].title);
            const slug = service.slug || service.link?.replace('/services/', '') || defaultServices[idx % defaultServices.length].slug;
            const desc = service.description || service.desc || defaultServices[idx % defaultServices.length].description;
            const iconKey = service.iconKey || service.icon || defaultServices[idx % defaultServices.length].iconKey;

            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-7 shadow-[0px_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between hover:shadow-[0px_16px_35px_rgba(0,107,143,0.15)] hover:border-cyan-200 hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Top Section: Icon + Title + Description */}
                <div>
                  {/* Icon */}
                  <div className="mb-5">
                    {service.image ? (
                      <img src={service.image} alt={titleText} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300" />
                    ) : (
                      renderServiceIcon(iconKey)
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-[800] text-slate-900 leading-tight mb-3 font-sans group-hover:text-[#006B8F] transition-colors">
                    {titleText}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] font-[400] text-slate-600 leading-relaxed font-sans mb-8">
                    {desc}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div>
                  <Link
                    to={`/services/${slug}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[13px] sm:text-[13.5px] shadow-sm transition-all duration-200 self-start font-sans group/btn"
                  >
                    <span>Explore Service</span>
                    <span className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Hover Bottom Glowing Light & Accent Bar */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#006B8F] via-[#00B4D8] to-[#006B8F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[20px]" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
