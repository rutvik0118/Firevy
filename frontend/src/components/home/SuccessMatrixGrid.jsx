import React from 'react';
import Container from '../common/Container';

export const SuccessMatrixGrid = () => {
  const cards = [
    {
      title: 'SEO and Digital Marketing',
      icon: (
        <svg className="w-12 h-12 text-[#22C55E]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 24l6-8 6 4 10-12" />
          <path d="M26 8h6v6" />
          <path d="M6 30h28" strokeWidth="2.5" />
          <path d="M12 18l-4 6" />
        </svg>
      )
    },
    {
      title: '4 months + Free Post Launch Support',
      icon: (
        <svg className="w-12 h-12 text-[#F97316]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 18a10 10 0 0 1 20 0v8a4 4 0 0 1-4 4h-2" />
          <rect x="6" y="18" width="5" height="8" rx="2" fill="#FFEDD5" />
          <rect x="29" y="18" width="5" height="8" rx="2" fill="#FFEDD5" />
          <circle cx="20" cy="30" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Non-Disclosure',
      icon: (
        <svg className="w-12 h-12 text-[#06B6D4]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          <path d="M14 20h12l3 12H11l3-12z" fill="#CFFAFE" />
          <circle cx="20" cy="26" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: '100% value for the money',
      icon: (
        <svg className="w-12 h-12 text-[#EAB308]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6c-6 0-10 4-10 10v6c0 6 4 10 10 10s10-4 10-10v-6c0-6-4-10-10-10z" fill="#FEF9C3" />
          <path d="M20 12v12" />
          <path d="M16 16h7a2.5 2.5 0 0 1 0 5h-7" />
        </svg>
      )
    },
    {
      title: 'Professional coding and version controls',
      icon: (
        <svg className="w-12 h-12 text-[#A855F7]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="28" height="22" rx="3" fill="#F3E8FF" />
          <line x1="6" y1="14" x2="34" y2="14" />
          <path d="M14 21l-3 3 3 3" />
          <path d="M26 21l3 3-3 3" />
          <path d="M21 20l-2 8" />
        </svg>
      )
    },
    {
      title: 'Flexible payment plans',
      icon: (
        <svg className="w-12 h-12 text-[#EF4444]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="28" height="22" rx="3" fill="#FEE2E2" />
          <line x1="6" y1="14" x2="34" y2="14" />
          <circle cx="27" cy="22" r="3" fill="#EF4444" />
          <text x="27" y="24" textAnchor="middle" fontSize="6" fontWeight="900" fill="white" stroke="none">$</text>
        </svg>
      )
    },
    {
      title: 'Real-time project tracking tools',
      icon: (
        <svg className="w-12 h-12 text-[#3B82F6]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="28" r="3" fill="#DBEAFE" />
          <circle cx="20" cy="14" r="3" fill="#DBEAFE" />
          <circle cx="30" cy="22" r="3" fill="#DBEAFE" />
          <path d="M12.5 26.5l5-10 7.5 6.5" />
        </svg>
      )
    },
    {
      title: 'Custom Tailored support | AMC Plans',
      icon: (
        <svg className="w-12 h-12 text-[#8B5CF6]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 26l4-4a3 3 0 0 1 4 4l-4 4" fill="#EDE9FE" />
          <path d="M26 14l-4 4a3 3 0 0 1-4-4l4-4" fill="#EDE9FE" />
        </svg>
      )
    },
    {
      title: 'Quality Asssurance and Unit Test Cases',
      icon: (
        <svg className="w-12 h-12 text-[#84CC16]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="20" cy="14" r="5" fill="#ECFCCB" />
          <path d="M12 30v-3a6 6 0 0 1 12 0v3" />
          <circle cx="26" cy="12" r="3" fill="#84CC16" />
          <path d="M24.5 12l1 1 2-2" stroke="white" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Penalty enforce-ment in case of Delivery Delay',
      icon: (
        <svg className="w-12 h-12 text-[#F97316]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="20" height="24" rx="2" fill="#FFEDD5" />
          <path d="M14 14h12" />
          <path d="M14 18h12" />
          <path d="M14 22h8" />
          <path d="M20 26l6 4-2-6" fill="#F97316" />
        </svg>
      )
    },
    {
      title: 'In-dept analysis of revenuo business Models',
      icon: (
        <svg className="w-12 h-12 text-[#06B6D4]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="16" width="4" height="14" fill="#CFFAFE" />
          <rect x="16" y="10" width="4" height="20" fill="#CFFAFE" />
          <rect x="24" y="6" width="4" height="24" fill="#CFFAFE" />
          <circle cx="24" cy="16" r="6" stroke="#06B6D4" strokeWidth="2" fill="white" />
          <line x1="28" y1="20" x2="34" y2="26" strokeWidth="2.5" />
        </svg>
      )
    },
    {
      title: 'Mind Maps and video demos',
      icon: (
        <svg className="w-12 h-12 text-[#0284C7]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6C12 6 6 12 6 20s6 14 14 14 14-6 14-14S28 6 20 6z" fill="#E0F2FE" />
          <path d="M14 20l12-7v14l-12-7z" fill="#0284C7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header - Exactly 100% Copy-to-Copy with Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            Success Matrix
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.
          </p>
        </div>

        {/* 12 Cards Grid (6 Columns x 2 Rows Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-7xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center h-48 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="mb-3 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-[700] text-slate-900 font-sans leading-snug text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrixGrid;
