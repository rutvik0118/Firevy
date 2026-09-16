import React from 'react';
import Container from '../common/Container';

const benefitsData = [
  {
    id: 1,
    title: 'Cross-platform',
    desc: 'It is a cross-platform language for designing web apps that work on several devices and operating systems. Without platform-specific coding, JavaScript Application allows organizations to access a large audience on desktops, laptops, tablets, and mobile devices.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="22" height="18" rx="2.5" />
        <line x1="19" y1="26" x2="19" y2="32" />
        <line x1="14" y1="32" x2="24" y2="32" />
        <rect x="26" y="16" width="14" height="24" rx="2.5" />
        <circle cx="33" cy="35" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Interfaces rich',
    desc: 'JavaScript allows Rich and Interactive User Interfaces to improve user experience. We create real-time UI components, animations, and transitions using React, Angular, and Vue.js, delivering a more immersive and intuitive user experience.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <circle cx="11" cy="14" r="1.2" fill="currentColor" />
        <circle cx="15" cy="14" r="1.2" fill="currentColor" />
        <circle cx="19" cy="14" r="1.2" fill="currentColor" />
        <rect x="11" y="23" width="10" height="10" rx="1.5" />
        <line x1="25" y1="24" x2="37" y2="24" strokeWidth="2" />
        <line x1="25" y1="28" x2="37" y2="28" strokeWidth="2" />
        <line x1="25" y1="32" x2="33" y2="32" strokeWidth="2" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Development of Server and Client',
    desc: 'JavaScript-based server-side applications may be built using frameworks like Node.js, employing the same language and tools across the development stack. Unity simplifies development, speeding time-to-market and simplifying maintenance.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="6" width="16" height="12" rx="2.5" />
        <circle cx="24" cy="11" r="2.5" />
        <path d="M19 16 C19 14, 29 14, 29 16" />
        <line x1="24" y1="18" x2="24" y2="26" />
        <line x1="12" y1="26" x2="36" y2="26" />
        <line x1="12" y1="26" x2="12" y2="32" />
        <line x1="24" y1="26" x2="24" y2="32" />
        <line x1="36" y1="26" x2="36" y2="32" />
        <rect x="7" y="32" width="10" height="10" rx="2" />
        <rect x="19" y="32" width="10" height="10" rx="2" />
        <rect x="31" y="32" width="10" height="10" rx="2" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Large Ecosystem',
    desc: 'JavaScript provides several frameworks for developing applications of varying sizes and complexity, from front-end to back-end. We offer hundreds of open-source packages and modules to speed development and improve functionality.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="7" ry="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <path d="M11 16 Q 24 20, 37 16" />
        <path d="M11 32 Q 24 28, 37 32" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Fast Growth',
    desc: 'Web application developers can experiment, iterate, and deploy new features quickly. Arrow functions, template literals, and restructuring in JavaScript speed up development and decrease boilerplate code.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="28" width="6" height="12" rx="1.5" />
        <rect x="18" y="20" width="6" height="20" rx="1.5" />
        <rect x="28" y="14" width="6" height="26" rx="1.5" />
        <path d="M10 22 L22 12 L32 17 L40 6" strokeWidth="2.4" />
        <polyline points="33,6 40,6 40,13" strokeWidth="2.4" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Community Support',
    desc: 'From online forums and communities to conferences and meetings, it helps organizations keep up with web development trends and best practices. Community support encourages JavaScript ecosystem cooperation, innovation, and progress.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="5" />
        <circle cx="13" cy="22" r="3.8" />
        <circle cx="35" cy="22" r="3.8" />
        <path d="M16 38 C16 31, 32 31, 32 38" />
        <path d="M7 40 C7 35, 17 35, 17 38" />
        <path d="M41 40 C41 35, 31 35, 31 38" />
      </svg>
    )
  }
];

export const NodeJsBenefitsSection = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white font-sans text-left border-b border-slate-100 select-none">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Benefits of NodeJs Application Development Services
          </h2>
          <p className="text-[13px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            NodeJs Application Development Services allows for flexible and dynamic web application development. Benefits of NodeJs Application Development:
          </p>
        </div>

        {/* 3x2 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {benefitsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
            >
              {/* Top Vector Icon */}
              <div className="mb-4">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-[800] text-[17.5px] sm:text-[19px] text-[#0B0F19] mb-3 leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-[1.7] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NodeJsBenefitsSection;
