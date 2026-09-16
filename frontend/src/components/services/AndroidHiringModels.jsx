import React from 'react';
import Container from '../common/Container';

const hiringModelsData = [
  {
    id: 'fixed-price',
    title: 'Fixed Price',
    desc: "If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12 C19 9 20.8 7 24 7 C27.2 7 29 9 29 12 Z" />
        <ellipse cx="24" cy="13" rx="7" ry="2" />
        <path d="M17 13 C12 18 10 24 10 32 C10 40 16 43 24 43 C32 43 38 40 38 32 C38 24 36 18 31 13 Z" />
        <text x="24" y="32" fill="currentColor" stroke="none" fontSize="13" fontWeight="bold" textAnchor="middle">$</text>
      </svg>
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
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="27" r="14" />
        <path d="M24 13 V8" />
        <path d="M20 8 H28" />
        <path d="M34 17 L37 14" />
        <path d="M24 27 L24 20" />
        <path d="M24 27 L29 30" />
      </svg>
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
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="15" r="4.5" />
        <path d="M17 29 C17 24.5 20 22.5 24 22.5 C28 22.5 31 24.5 31 29" />
        <circle cx="14" cy="19" r="3.5" />
        <path d="M8 31 C8 27 11 25.5 14 25.5 C15.2 25.5 16.3 25.9 17.2 26.6" />
        <circle cx="34" cy="19" r="3.5" />
        <path d="M30.8 26.6 C31.7 25.9 32.8 25.5 34 25.5 C37 25.5 40 27 40 31" />
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
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#06B6D4]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Main Cog */}
        <circle cx="19" cy="27" r="7" />
        <path d="M19 18 V20 M19 34 V36 M10 27 H12 M26 27 H28 M12.5 20.5 L14 22 M24 32 L25.5 33.5 M12.5 33.5 L14 32 M24 22 L25.5 20.5" strokeWidth="2.2" />
        {/* Small Cog */}
        <circle cx="31" cy="17" r="4.5" />
        <path d="M31 11 V12.5 M31 21.5 V23 M25 17 H26.5 M35.5 17 H37 M26.8 12.8 L28 14 M34 20 L35.2 21.2 M26.8 21.2 L28 20 M34 14 L35.2 12.8" strokeWidth="1.8" />
      </svg>
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
