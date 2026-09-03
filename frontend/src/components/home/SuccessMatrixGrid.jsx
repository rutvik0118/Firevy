import React from 'react';
import Container from '../common/Container';

const defaultCards = [
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
    title: 'Flexible Payment Term',
    icon: (
      <svg className="w-12 h-12 text-[#3B82F6]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="28" height="20" rx="3" fill="#DBEAFE" />
        <circle cx="20" cy="20" r="5" fill="white" stroke="#3B82F6" strokeWidth="2" />
        <path d="M6 16h28" stroke="#3B82F6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Comprehensive in-depth chart reporting',
    icon: (
      <svg className="w-12 h-12 text-[#EC4899]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14" fill="#FCE7F3" stroke="#EC4899" strokeWidth="2" />
        <path d="M20 6a14 14 0 0 1 14 14H20V6z" fill="#EC4899" />
      </svg>
    )
  },
  {
    title: 'Annual Maintenance Contracts (AMC)',
    icon: (
      <svg className="w-12 h-12 text-[#10B981]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 8h20v24H10z" fill="#D1FAE5" stroke="#10B981" strokeWidth="2" />
        <path d="M15 14h10" stroke="#10B981" strokeWidth="2" />
        <path d="M15 20h10" stroke="#10B981" strokeWidth="2" />
        <path d="M15 26h6" stroke="#10B981" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Software Quality Assurance',
    icon: (
      <svg className="w-12 h-12 text-[#6366F1]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" />
        <path d="M14 20l4 4 8-8" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: 'Security and IP protection',
    icon: (
      <svg className="w-12 h-12 text-[#14B8A6]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6l12 4v8c0 8-6 14-12 16-6-2-12-8-12-16v-8l12-4z" fill="#CCFBF1" stroke="#14B8A6" strokeWidth="2" />
        <circle cx="20" cy="18" r="3" fill="#14B8A6" />
        <path d="M20 21v4" stroke="#14B8A6" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Analytics and Insights',
    icon: (
      <svg className="w-12 h-12 text-[#F43F5E]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="28" height="24" rx="2" fill="#FFE4E6" stroke="#F43F5E" strokeWidth="2" />
        <line x1="12" y1="26" x2="12" y2="20" stroke="#F43F5E" strokeWidth="2.5" />
        <line x1="18" y1="26" x2="18" y2="16" stroke="#F43F5E" strokeWidth="2.5" />
        <line x1="24" y1="26" x2="24" y2="12" stroke="#F43F5E" strokeWidth="2.5" />
        <line x1="30" y1="26" x2="30" y2="18" stroke="#F43F5E" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    title: 'Explainer Videos',
    icon: (
      <svg className="w-12 h-12 text-[#8B5CF6]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="28" height="24" rx="4" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M17 15l10 5-10 5V15z" fill="#8B5CF6" />
      </svg>
    )
  }
];

export const SuccessMatrixGrid = ({ data }) => {
  const title = data?.title || 'Success Matrix';
  const description = data?.description || "We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We’ve robust work history with diverse business services.";

  const cards = (data?.items && Array.isArray(data.items) && data.items.filter(i => i.isActive !== false).length > 0)
    ? data.items.filter(i => i.isActive !== false)
    : (data?.cards && Array.isArray(data.cards) && data.cards.filter(c => c.isActive !== false).length > 0)
    ? data.cards.filter(c => c.isActive !== false)
    : defaultCards;

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative font-sans">
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

        {/* 6x2 Grid of 12 Square Rounded Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] p-5 shadow-[0px_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/80 hover:border-[#006B8F] flex flex-col items-center justify-center text-center space-y-3.5 h-[190px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {card.image ? (
                  <img src={card.image} alt={card.title} className="w-12 h-12 object-contain" />
                ) : (
                  card.icon || defaultCards[idx % defaultCards.length]?.icon || <span className="text-3xl">✨</span>
                )}
              </div>
              <span className="text-[14px] font-[800] text-slate-900 leading-snug font-sans tracking-tight">
                {card.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrixGrid;
