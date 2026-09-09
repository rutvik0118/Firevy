import React from 'react';
import Container from './Container';

const matrixItems = [
  {
    title: 'SEO and Digital Marketing',
    icon: '/images/ic_seo.svg'
  },
  {
    title: '4 months + Free Post Launch Support',
    icon: '/images/ic_support.svg'
  },
  {
    title: 'Non-Disclosure',
    icon: '/images/ic_non_disclosure.svg'
  },
  {
    title: '100% value for the money',
    icon: '/images/ic_money.svg'
  },
  {
    title: 'Professional coding and version controls',
    icon: '/images/ic_coding_version.svg'
  },
  {
    title: 'Flexible payment plans',
    icon: '/images/ic_flexible_payment.svg'
  },
  {
    title: 'Real-time project tracking tools',
    icon: '/images/ic_real_time.svg'
  },
  {
    title: 'Custom Tailored support | AMC Plans',
    icon: '/images/ic_amc.svg'
  },
  {
    title: 'Quality Asssurance and Unit Test Case',
    icon: '/images/ic_quality.svg'
  },
  {
    title: 'Penalty enforce-ment in case of Delivery Delay',
    icon: '/images/ic_penalty.svg'
  },
  {
    title: 'In-dept analysis of revenue business Models',
    icon: '/images/ic_in_dept_analysis.svg'
  },
  {
    title: 'Mind Maps and video demos',
    icon: '/images/ic_mind_maps.svg'
  }
];

export const SuccessMatrix = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#F0F7FC] font-sans text-left">
      <Container className="max-w-7xl">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-7 space-y-2">
          <h2 className="text-2xl sm:text-[30px] font-[800] text-[#0B0F19] tracking-tight font-sans">
            Success Matrix
          </h2>
          <p className="text-[12.5px] sm:text-[13px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            We offer comprehensive services to develop digital solutions & manage complete product lifecycle. We've robust work history with diverse business services.
          </p>
        </div>

        {/* 12 White Cards Grid (6 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5 max-w-6xl mx-auto">
          {matrixItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-[12px] bg-white border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center justify-center text-center h-[135px] sm:h-[148px] group cursor-pointer"
            >
              {/* Authentic SVG Vector Icon */}
              <div className="h-9 flex items-center justify-center shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="max-h-8 max-w-[38px] object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-[11px] sm:text-[11.5px] font-[700] text-[#111827] leading-snug font-sans text-center px-0.5 group-hover:text-[#005F96] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrix;

