import React from 'react';
import BRAND from '../../constants/brand';

const defaultCards = [
  {
    metric: '23+',
    label: 'Years of Experience',
    image: '/images/first.webp'
  },
  {
    metric: '95+',
    label: '5-Star Clutch Reviews',
    image: '/images/homeinnovation/second.webp'
  },
  {
    metric: '20+',
    label: 'Fortunes 500 Companies',
    image: '/images/third.webp'
  },
  {
    metric: '200+',
    label: 'IT Professional',
    image: '/images/fourth.webp'
  },
  {
    metric: '95%',
    label: 'Client Retention',
    image: '/images/fifth.webp'
  },
  {
    metric: '18+',
    label: 'Industry Served',
    image: '/images/sixth.webp'
  },
  {
    metric: '2800+',
    label: 'Satisfied Clients',
    image: '/images/client_seven.webp'
  },
  {
    metric: '1500+',
    label: 'Completed Projects',
    image: '/images/clienttestimonial3.webp'
  }
];

export const AboutKeyMetrics = ({ data }) => {
  const title = data?.title || 'About Us';
  const description = data?.description || `${BRAND.name} delivers cutting-edge digital solutions that drive our clients to achieve unparalleled success`;
  const cards = defaultCards;

  return (
    <section className="py-16 sm:py-20 bg-[#006085] text-white relative font-sans overflow-hidden border-b border-cyan-900">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[32px] sm:text-[40px] font-[900] text-white tracking-tight leading-tight mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] font-[400] text-blue-100 leading-relaxed max-w-2xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 8-Card Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
          {cards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-[18px] sm:rounded-[20px] shadow-lg p-3 sm:p-3.5 flex items-center space-x-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Left Thumbnail Image */}
                <div className="w-[76px] h-[86px] sm:w-[84px] sm:h-[94px] rounded-[14px] overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Right Stat & Label */}
                <div className="flex flex-col justify-center min-w-0 pr-1 text-left">
                  <div className="text-[26px] sm:text-[28px] font-[900] text-[#005F96] tracking-tight leading-none mb-1.5 font-sans">
                    {card.metric}
                  </div>
                  <div className="text-[13px] sm:text-[13.5px] font-[600] text-slate-700 leading-tight font-sans">
                    {card.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutKeyMetrics;
