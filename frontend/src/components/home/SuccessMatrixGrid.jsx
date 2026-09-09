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
    title: 'Quality Assurance and Unit Test Case',
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
    <section className="py-12 sm:py-16 bg-[#f0f8ff] text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[800] tracking-tight text-[#000000] mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] font-[400] text-[#333333] leading-relaxed font-sans max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        {/* 6x2 Grid of 12 Square Rounded Benefit Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5 max-w-[1340px] mx-auto">
          {cards.map((card, idx) => {
            const fallbackCard = defaultCards[idx % defaultCards.length];
            const imgSrc = card.image || fallbackCard.image;

            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,93,137,0.12)] flex flex-col items-center justify-center text-center h-[170px] sm:h-[185px] transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative overflow-hidden border border-slate-100/60"
              >
                {/* Image Icon */}
                <div className="w-[50px] h-[50px] shrink-0 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {imgSrc ? (
                    <img src={imgSrc} alt={card.title} className="w-full h-full object-contain" />
                  ) : (
                    card.icon || <span className="text-3xl">✨</span>
                  )}
                </div>

                {/* Card Title */}
                <span className="text-[12.5px] sm:text-[13.5px] font-[700] text-[#000000] leading-[1.35] font-sans text-center px-0.5 group-hover:text-[#005d89] transition-colors">
                  {card.title}
                </span>

                {/* Bottom Blue Accent Line on Hover */}
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#005d89] to-[#0488c4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-left pointer-events-none" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrixGrid;
