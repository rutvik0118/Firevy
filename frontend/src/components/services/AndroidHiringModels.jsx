import React from 'react';
import Container from '../common/Container';

const hiringModelsData = [
  {
    id: 'fixed-price',
    title: 'Fixed Price',
    desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    icon: (
      <img
        src="/images/ic_fixed_price.svg"
        alt="Fixed Price"
        className="w-10 h-10 object-contain select-none"
      />
    ),
    features: [
      'Optimal flexibility',
      'Agile team',
      'Small projects',
      'Complete control over budget'
    ]
  },
  {
    id: 'time-material',
    title: 'Time Material',
    desc: "If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.",
    icon: (
      <img
        src="/images/ic_time_material.svg"
        alt="Time Material"
        className="w-10 h-10 object-contain select-none"
      />
    ),
    features: [
      'No hidden costs',
      'Working based hours',
      'Monthly billing',
      'Pay only for measurable work'
    ]
  },
  {
    id: 'dedicated-team',
    title: 'Dedicated Team',
    desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    icon: (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 text-[#FF7A59]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Center Main Person */}
        <circle cx="20" cy="13" r="4.2" />
        <path d="M13 27 C13 21.5 16 20 20 20 C24 20 27 21.5 27 27" />
        {/* Left Person Behind */}
        <circle cx="11" cy="16" r="3.4" />
        <path d="M5 28 C5 24 7.5 22.8 10.5 22.8 C11.5 22.8 12.4 23.1 13.2 23.6" />
        {/* Right Person Behind */}
        <circle cx="29" cy="16" r="3.4" />
        <path d="M26.8 23.6 C27.6 23.1 28.5 22.8 29.5 22.8 C32.5 22.8 35 24 35 28" />
      </svg>
    ),
    features: [
      'No hidden costs',
      '160 hours of assured work',
      'Monthly billing',
      'Pay only for measurable work'
    ]
  },
  {
    id: 'buckets-approach',
    title: 'Buckets Approach',
    desc: 'A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.',
    icon: (
      <img
        src="/images/bucketapproch.svg"
        alt="Buckets Approach"
        className="w-10 h-10 object-contain select-none"
      />
    ),
    features: [
      'Direct Resource Monitoring',
      'Less Risk',
      'Less budget',
      'Pay only for measurable work'
    ]
  }
];

export const AndroidHiringModels = () => {
  return (
    <section className="pt-7 pb-5 sm:pt-9 sm:pb-6 bg-[#F4F8FA] font-sans text-center">
      <Container className="max-w-[1280px]">
        {/* Section Heading & Subtitle */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
            style={{ fontSize: '32px' }}
          >
            Business Friendly Hiring Models : Building Greater Futures<br className="hidden sm:inline" /> Through Innovation
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {hiringModelsData.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.06)] border border-slate-100/90 flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-h-[460px]"
            >
              <div>
                {/* Centered Top Icon matching exact SVG files */}
                <div className="flex justify-center items-center h-12 mb-3.5">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] text-center mb-2.5 leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12.5px] text-[#475569] text-center leading-[1.55] mb-6 font-normal min-h-[58px]">
                  {card.desc}
                </p>

                {/* Checklist with Blue Checkmarks */}
                <div className="space-y-2.5 mb-6 text-left">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2">
                      <svg
                        viewBox="0 0 16 16"
                        className="w-3.5 h-3.5 text-[#0077B6] shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3.5 8.5 6.5 11.5 12.5 4.5" />
                      </svg>
                      <span className="text-[12.5px] text-[#334155] font-normal leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Centered "Hire Now" Button */}
              <div className="text-center pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[13px] transition-all shadow-xs hover:shadow-sm cursor-pointer"
                >
                  Hire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AndroidHiringModels;
