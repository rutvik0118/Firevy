import React from 'react';
import Container from '../common/Container';

const customItServicesData = [
  {
    title: 'Software Development for Startups',
    desc: 'Are you going to develop software for your company that will set you apart from the competition? We can deliver you an innovative startup software development solution that puts your brand front and center if we bring a team of knowledgeable business analysts, project managers, and tech leaders on board.'
  },
  {
    title: 'Web App Development',
    desc: "Our web development services span a wide range of options focused on helping you establish high-quality, responsive, and user-friendly web apps adapted to your company's needs. From sophisticated web app development to developing brand websites, we can help you achieve this goal."
  },
  {
    title: 'Enterprise Software Development',
    desc: 'Being a leading corporate software development firm, we provide complex software solutions that assist clients in increasing productivity, streamlining processes, and expanding their businesses. Our corporate software solutions are built with the newest technology and work smoothly with current systems.'
  },
  {
    title: 'Mobile App Development',
    desc: 'We provide complete mobile app development services to build unique, captivating, and performance-optimized mobile apps for the iOS and Android platforms using native and cross-platform technologies.'
  },
  {
    title: 'Software Product Development',
    desc: 'Have an original software concept? We help you design market-ready solutions that contemporary people desire, from conception to validation, with MVP development, testing, and deployment.'
  },
  {
    title: 'Legacy Software Modernization',
    desc: 'We are renowned for providing inventive and meticulous services for modernizing legacy software, which involve evaluating the software as it is today, pinpointing places in need of modernization and migrating to modern architectures.'
  }
];

export const CustomItServicesSection = ({
  companyName = 'Sapphire',
  title,
  subtitle
}) => {
  const displayTitle = title || `${companyName} Custom IT Service`;
  const defaultSubtitle = `${companyName} developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. ${companyName} provides complete customized It Services to meet your requirements.`;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#005F96] text-white font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-white tracking-tight leading-tight">
            {displayTitle}
          </h2>
          <p className="text-[13.5px] sm:text-[15px] font-[400] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* 6 White Rectangular Cards Grid (2 rows x 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1240px] mx-auto">
          {customItServicesData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] sm:rounded-[18px] p-6 sm:p-7 text-slate-900 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-start text-left group"
            >
              <h3 className="font-[800] text-slate-900 text-[17px] sm:text-[19px] leading-[1.3] mb-3 group-hover:text-[#005F96] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#475569] text-[13px] sm:text-[13.5px] leading-[1.65] font-[400]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomItServicesSection;
