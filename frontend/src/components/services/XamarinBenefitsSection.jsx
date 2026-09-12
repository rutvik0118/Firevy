import React from 'react';
import Container from '../common/Container';

const benefitsData = [
  {
    id: 1,
    title: 'Native User Interfaces',
    desc: 'Xamarin App development using native UI controls to create native apps for various device-specific experiences.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Smartphone Frame with top notch & bottom button */}
        <rect x="10" y="8" width="22" height="34" rx="3.5" />
        <line x1="17" y1="12" x2="25" y2="12" />
        <circle cx="21" cy="38" r="1.2" />
        
        {/* Exact Top-Right Cog/Gear */}
        <g transform="translate(32, 14)">
          <circle cx="0" cy="0" r="4.2" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
          <path d="M0 -6 v2 M0 4 v2 M-6 0 h2 M4 0 h2" />
          <path d="M-4.2 -4.2 l1.4 1.4 M2.8 2.8 l1.4 1.4 M-4.2 4.2 l1.4 -1.4 M2.8 -2.8 l1.4 -1.4" />
        </g>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Automated Testing',
    desc: "Apps developed in Xamarin can be tested using Xamarin Test Cloud which saves developers' time and effort that go into manual testing.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Isometric/Front Laptop Screen */}
        <path d="M12 12 L32 12 C33 12, 34 13, 34 14 L34 29 L10 29 L10 14 C10 13, 11 12, 12 12 Z" />
        {/* Laptop Base Tray */}
        <path d="M6 31 L42 31 C43.5 31, 43.5 35, 41 35 L7 35 C4.5 35, 4.5 31, 6 31 Z" fill="currentColor" fillOpacity="0.05" />
        
        {/* Top-Right Gear on Screen */}
        <g transform="translate(33, 13)">
          <circle cx="0" cy="0" r="4.2" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
          <path d="M0 -6 v2 M0 4 v2 M-6 0 h2 M4 0 h2" />
          <path d="M-4.2 -4.2 l1.4 1.4 M2.8 2.8 l1.4 1.4 M-4.2 4.2 l1.4 -1.4 M2.8 -2.8 l1.4 -1.4" />
        </g>
      </svg>
    )
  },
  {
    id: 3,
    title: 'High Performance',
    desc: 'A cross-platform app made with Xamarin give native like performance compare to traditional hybrid solutions.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* 3 Rising Graph Bars */}
        <rect x="8" y="27" width="6.5" height="13" rx="1" />
        <rect x="18.5" y="20" width="6.5" height="20" rx="1" />
        <rect x="29" y="12" width="6.5" height="28" rx="1" />
        
        {/* Upward Line with Pointed Arrow */}
        <polyline points="7,22 19,14 38,5" />
        <polygon points="32,5 39,4.5 38.5,11.5" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Single Codebase',
    desc: 'With Xamarin cross-platform mobile app development one code for both- Android and iOS, we can develop competitive apps faster.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Code Brackets </> */}
        <polyline points="16,15 7,24 16,33" />
        <polyline points="32,15 41,24 32,33" />
        <line x1="26" y1="12" x2="22" y2="36" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Speedy Time-To-Market',
    desc: 'Xamarin allows to build Android and iOS apps simultaneously. Bring your business ideas to action faster with Xamarin app development.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Speedometer Gauge Arc */}
        <path d="M8 32 A16 16 0 1 1 40 32" />
        
        {/* Ticks */}
        <line x1="12" y1="24" x2="15" y2="24" />
        <line x1="17" y1="16" x2="19" y2="18" />
        <line x1="24" y1="12" x2="24" y2="15" />
        <line x1="31" y1="16" x2="29" y2="18" />
        
        {/* Needle with Arrow pointing up-right */}
        <circle cx="24" cy="28" r="2.5" fill="currentColor" />
        <line x1="24" y1="28" x2="35" y2="17" strokeWidth="2.4" />
        <polygon points="31,16 36,16 36,21" fill="currentColor" />
        
        {/* Dynamic Motion Ripple Strokes */}
        <path d="M37 27 C39 29, 40 32, 40 34" strokeWidth="2" />
        <path d="M41 24 C44 27, 45 31, 45 35" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Cost-Effective',
    desc: 'Save time and money by developing just one app in Xamarin instead of separately building and testing multiple apps for each of the platforms.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Smartphone Frame */}
        <rect x="8" y="8" width="22" height="34" rx="3.5" />
        <line x1="15" y1="12" x2="23" y2="12" />
        <circle cx="19" cy="38" r="1.2" />
        
        {/* Right Vertically Centered Gear */}
        <g transform="translate(30, 25)">
          <circle cx="0" cy="0" r="4.8" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
          <path d="M0 -7 v2 M0 5 v2 M-7 0 h2 M5 0 h2" />
          <path d="M-4.9 -4.9 l1.4 1.4 M3.5 3.5 l1.4 1.4 M-4.9 4.9 l1.4 -1.4 M3.5 -3.5 l1.4 -1.4" />
        </g>
      </svg>
    )
  }
];

export const XamarinBenefitsSection = () => {
  return (
    <section className="pt-7 pb-10 sm:pt-8 sm:pb-12 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-9 space-y-2">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Xamarin Benefits
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We provide bespoke, robust and scalable Xamarin mobile app solutions that delight users and deliver engagement.
          </p>
        </div>

        {/* 6 White Reason Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {benefitsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[14px] p-7 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
            >
              {/* Exact Copy-to-Copy SVG Icon */}
              <div className="mb-5">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18.5px] text-[#0B0F19] mb-3 leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.65] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default XamarinBenefitsSection;
