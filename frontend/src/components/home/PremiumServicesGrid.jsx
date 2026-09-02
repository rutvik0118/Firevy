import React from 'react';
import Container from '../common/Container';

export const PremiumServicesGrid = () => {
  const premiumServices = [
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
          <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="900" fill="white" stroke="none">php</text>
        </svg>
      )
    },
    {
      name: 'Hire Dedicated Developers',
      icon: (
        <svg className="w-9 h-9 shrink-0 text-[#0D9488]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="12" r="4" fill="#CCFBF1" />
          <path d="M10 26v-2a6 6 0 0 1 12 0v2" />
          <rect x="22" y="16" width="10" height="8" rx="1" fill="#CCFBF1" />
        </svg>
      )
    },
    {
      name: 'Mern Stack Development',
      icon: (
        <svg className="w-9 h-9 shrink-0 text-[#2563EB]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="18" r="12" fill="#DBEAFE" />
          <circle cx="18" cy="18" r="4" fill="#2563EB" />
          <path d="M10 18a8 8 0 0 1 16 0" />
        </svg>
      )
    },
    {
      name: 'Full Stack Development',
      icon: (
        <svg className="w-9 h-9 shrink-0 text-[#475569]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="6" width="26" height="18" rx="2" fill="#F1F5F9" />
          <path d="M12 15l-2 2 2 2" />
          <path d="M24 15l2 2-2 2" />
          <path d="M13 28h10" />
        </svg>
      )
    },
    {
      name: 'Laravel Development',
      icon: (
        <svg className="w-9 h-9 shrink-0 text-[#FF2D20]" viewBox="0 0 36 36" fill="currentColor">
          <path d="M18 4l12 6.9v14.2L18 32 6 25.1V10.9L18 4zm0 3.5L9.5 12v12l8.5 4.9 8.5-4.9V12L18 7.5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#006B8F] text-white relative font-sans">
      <Container>
        {/* Section Header - Exactly 100% Copy-to-Copy with Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-white mb-3 font-sans">
            Our Premium Services
          </h2>
          <p className="text-[18px] font-[400] text-white/90 leading-relaxed font-sans max-w-4xl mx-auto">
            As a certified IT company, Sapphire helps organizations thrive digitally by offering innovative solutions using cutting-edge tools and frameworks. Contact us to learn more!
          </p>
        </div>

        {/* 10 White Pill Button Cards (5 Columns x 2 Rows Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {premiumServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[14px] px-5 py-4 text-slate-900 shadow-sm border border-slate-100 flex items-center space-x-3 text-left hover:shadow-md transition-all duration-200 h-20 cursor-pointer"
            >
              {item.icon}
              <span className="text-xs sm:text-sm font-[700] text-slate-900 font-sans leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PremiumServicesGrid;
