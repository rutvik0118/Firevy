import React from 'react';
import Container from '../common/Container';

const defaultCards = [
  {
    title: 'SEO and Digital Marketing',
    image: '/images/ic_seo.svg'
  },
  {
    title: '4 months + Free Post Launch Support',
    image: '/images/ic_support.svg'
  },
  {
    title: 'Non-Disclosure',
    image: '/images/ic_non_disclosure.svg'
  },
  {
    title: '100% value for the money',
    image: '/images/ic_money.svg'
  },
  {
    title: 'Professional coding and version controls',
    image: '/images/ic_coding_version.svg'
  },
  {
    title: 'Flexible payment plans',
    image: '/images/ic_flexible_payment.svg'
  },
  {
    title: 'Real-time project tracking tools',
    image: '/images/ic_real_time.svg'
  },
  {
    title: 'Custom Tailored support | AMC Plans',
    image: '/images/ic_amc.svg'
  },
  {
    title: 'Quality Asssurance and Unit Test Case',
    image: '/images/ic_quality.svg'
  },
  {
    title: 'Penalty enforce-ment in case of Delivery Delay',
    image: '/images/ic_penalty.svg'
  },
  {
    title: 'In-depth analysis of revenue business Models',
    image: '/images/ic_in_dept_analysis.svg'
  },
  {
    title: 'Mind Maps and video demos',
    image: '/images/ic_mind_maps.svg'
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
