import React from 'react';
import Container from './Container';

const matrixItems = [
  {
    title: 'SEO and Digital Marketing',
    image: '/images/what_clientsay_icon/ic_seo.svg'
  },
  {
    title: '4 months + Free Post Launch Support',
    image: '/images/what_clientsay_icon/ic_support.svg'
  },
  {
    title: 'Non-Disclosure',
    image: '/images/what_clientsay_icon/ic_non_disclosure.svg'
  },
  {
    title: '100% value for the money',
    image: '/images/what_clientsay_icon/ic_money.svg'
  },
  {
    title: 'Professional coding and version controls',
    image: '/images/what_clientsay_icon/ic_coding_version.svg'
  },
  {
    title: 'Flexible payment plans',
    image: '/images/what_clientsay_icon/ic_flexible_payment.svg'
  },
  {
    title: 'Real-time project tracking tools',
    image: '/images/what_clientsay_icon/ic_real_time.svg'
  },
  {
    title: 'Custom Tailored support | AMC Plans',
    image: '/images/what_clientsay_icon/ic_amc.svg'
  },
  {
    title: 'Quality Assurance and Unit Test Cases',
    image: '/images/what_clientsay_icon/ic_quality.svg'
  },
  {
    title: 'Penalty enforce-ment in case of Delivery Delay',
    image: '/images/what_clientsay_icon/ic_penalty.svg'
  },
  {
    title: 'In-dept analysis of revenue business Models',
    image: '/images/what_clientsay_icon/ic_in_dept_analysis.svg'
  },
  {
    title: 'Mind Maps and video demos',
    image: '/images/what_clientsay_icon/ic_mind_maps.svg'
  }
];

export const SuccessMatrix = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#f0f8ff] text-slate-900 font-sans text-left relative">
      <Container>
        {/* Centered Heading & Full Width Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[800] text-[#000000] tracking-tight font-sans">
            Success Matrix
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#333333] font-normal leading-relaxed max-w-4xl mx-auto font-sans">
            We offer comprehensive services to develop digital solutions &amp; manage complete product lifecycle. We've robust work history with diverse business services.
          </p>
        </div>

        {/* 12 White Cards Grid (6 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5 max-w-[1340px] mx-auto">
          {matrixItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,93,137,0.12)] transition-all duration-300 flex flex-col items-center justify-center text-center h-[170px] sm:h-[185px] group cursor-pointer relative overflow-hidden border border-slate-100/60 hover:-translate-y-1"
            >
              {/* Image Icon */}
              <div className="w-[50px] h-[50px] shrink-0 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>

              {/* Card Title */}
              <span className="text-[12.5px] sm:text-[13.5px] font-[700] text-[#000000] leading-[1.35] font-sans text-center px-0.5 group-hover:text-[#005d89] transition-colors">
                {item.title}
              </span>

              {/* Bottom Blue Accent Line on Hover */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#005d89] to-[#0488c4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-left pointer-events-none" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SuccessMatrix;
