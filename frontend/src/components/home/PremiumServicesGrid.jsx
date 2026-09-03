import React from 'react';
import Container from '../common/Container';

const defaultPremiumServices = [
  {
    name: 'Mobile App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#7C3AED]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="20" height="28" rx="4" fill="#F3E8FF" />
        <rect x="12" y="8" width="12" height="16" rx="1" fill="white" />
        <circle cx="18" cy="28" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Software Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#EA580C]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="26" height="16" rx="2" fill="#FFEDD5" />
        <path d="M2 28h32" strokeWidth="2.5" />
        <circle cx="23" cy="16" r="4" fill="#EA580C" />
      </svg>
    )
  },
  {
    name: 'Web Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#0284C7]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="28" height="24" rx="3" fill="#E0F2FE" />
        <line x1="4" y1="13" x2="32" y2="13" />
        <circle cx="8" cy="9.5" r="1" fill="currentColor" />
        <circle cx="12" cy="9.5" r="1" fill="currentColor" />
        <text x="18" y="23" textAnchor="middle" fontSize="8" fontWeight="800" fill="currentColor" stroke="none">WWW</text>
      </svg>
    )
  },
  {
    name: '.NET Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#0284C7]" viewBox="0 0 36 36" fill="none">
        <path d="M6 18l6-10h6l-6 10 6 10h-6l-6-10z" fill="#0284C7" />
        <text x="24" y="22" textAnchor="middle" fontSize="10" fontWeight="900" fill="#0284C7">.NET</text>
      </svg>
    )
  },
  {
    name: 'Flutter App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#02569B]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M20 6L8 18l4 4 16-16H20z" fill="#42A5F5" />
        <path d="M20 18l-6 6 6 6h8l-6-6 6-6h-8z" fill="#01579B" />
      </svg>
    )
  },
  {
    name: 'PHP Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#777BB4]" viewBox="0 0 36 36" fill="none">
        <ellipse cx="18" cy="18" rx="14" ry="10" fill="#777BB4" />
        <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="900" fill="white" fontFamily="sans-serif">php</text>
      </svg>
    )
  },
  {
    name: 'Java Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#EA2D2E]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M14 26s-2 1 0 2c3 1 6 1 9 0 2-1 0-2 0-2-3 1-6 1-9 0zm-1-4s-2 1.5 0 2.5c4 1.5 8 1.5 12 0 2-1 0-2.5 0-2.5-4 1-8 1-12 0zm5-14c1 2-2 4-2 6 0 3 3 5 3 8-4-2-5-5-5-8 0-3 3-5 4-6z" />
      </svg>
    )
  },
  {
    name: 'Android App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#3DDC84]" viewBox="0 0 36 36" fill="currentColor">
        <path d="M12 10l-2-3.5a1 1 0 0 1 1.7-1l2 3.5a11 11 0 0 1 8.6 0l2-3.5a1 1 0 0 1 1.7 1L24 10a11 11 0 0 1 5 9H7a11 11 0 0 1 5-9z" />
        <circle cx="13" cy="14" r="1.5" fill="white" />
        <circle cx="23" cy="14" r="1.5" fill="white" />
      </svg>
    )
  },
  {
    name: 'Full Stack Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-[#006B8F]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4l14 8-14 8-14-8 14-8z" fill="#E0F2FE" />
        <path d="M4 20l14 8 14-8" />
        <path d="M4 26l14 8 14-8" />
      </svg>
    )
  },
  {
    name: 'iPhone App Development',
    icon: (
      <svg className="w-9 h-9 shrink-0 text-slate-800" viewBox="0 0 36 36" fill="currentColor">
        <path d="M22.5 18c0-3.3 2.7-5 2.8-5.1-1.5-2.2-4-2.5-4.8-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.2-1.2-2.2 0-4.2 1.3-5.3 3.3-2.3 4-0.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.2 1.6-.1 2.3-1 4.2-1s2.6 1 4.2 1c1.8 0 2.9-1.5 4-3.1 1.3-1.8 1.8-3.6 1.8-3.7-.1 0-3.5-1.3-3.5-5.2zM19.7 8.5c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.7z" />
      </svg>
    )
  }
];

export const PremiumServicesGrid = ({ data }) => {
  const title = data?.title || 'Our Premium Services';
  const description = data?.description || 'As a certified IT company, firevy.co helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks.';

  const services = (data?.services && Array.isArray(data.services) && data.services.filter(s => s.isActive !== false).length > 0)
    ? data.services.filter(s => s.isActive !== false)
    : defaultPremiumServices;

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* 5x2 Grid of 10 Solid White Cards with Rounded Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-5 shadow-sm hover:shadow-lg border border-slate-200/80 hover:border-[#006B8F] flex flex-col items-center justify-center text-center space-y-3 h-36 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {service.image ? (
                  <img src={service.image} alt={service.name} className="w-9 h-9 object-contain" />
                ) : (
                  service.icon || defaultPremiumServices[idx % defaultPremiumServices.length]?.icon || <span className="text-3xl">⚙️</span>
                )}
              </div>
              <span className="text-[14px] font-[800] text-slate-900 leading-tight font-sans tracking-tight group-hover:text-[#006B8F] transition-colors">
                {service.name || service.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
