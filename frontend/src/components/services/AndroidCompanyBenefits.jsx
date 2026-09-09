import React from 'react';
import Container from '../common/Container';

const benefitsData = [
  {
    title: 'Skills and Experience',
    desc: 'Leading Android app developers have vast experience designing strong, high-quality applications. They know the newest tools, technologies, and best practices. Our expertise guarantees that your app is well-built, offering a smooth user experience and stable performance.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* 3 Vertical Bar Columns */}
        <rect x="5" y="22" width="6" height="14" rx="1.5" />
        <rect x="15" y="15" width="6" height="21" rx="1.5" />
        <rect x="25" y="9" width="6" height="27" rx="1.5" />
        {/* Upward Growth Arrow */}
        <path d="M26 12 L35 3" />
        <path d="M28 3 H35 V10" />
      </svg>
    )
  },
  {
    title: 'Customized Options',
    desc: 'The best Android app developers customize solutions for your organization. They carefully study your objectives, audience, and needs to create an app that matches your vision. This personalized strategy makes your software stand out in the market and satisfy consumers.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield with curved header and bottom point */}
        <path d="M20 37 C10 32 6 24 6 12 L20 6 L34 12 C34 24 30 32 20 37 Z" />
        {/* Checkmark inside */}
        <path d="M13 20 L18 25 L27 15" strokeWidth="2.6" />
      </svg>
    )
  },
  {
    title: 'Exceptional Design and UX',
    desc: 'A good Android app developer and engineers collaborate to build simple, appealing, and user-friendly interfaces. Well-designed apps boost user engagement, contentment, and retention, helping your company succeed.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer Gear Teeth Outline */}
        <path d="M17 3 H23 L24 7.5 L28 9 L32 6 L36 10 L33 14 L34.5 18 L39 19 V25 L34.5 26 L33 30 L36 34 L32 38 L28 35 L24 36.5 L23 41 H17 L16 36.5 L12 35 L8 38 L4 34 L7 30 L5.5 26 L1 25 V19 L5.5 18 L7 14 L4 10 L8 6 L12 9 L16 7.5 Z" transform="scale(0.9) translate(2.2, 1.5)" />
        {/* Lightbulb in Center */}
        <path d="M16 16 C16 13.8 17.8 12 20 12 C22.2 12 24 13.8 24 16 C24 18 22.8 19.5 22 21 H18 C17.2 19.5 16 18 16 16 Z" />
        <line x1="18" y1="23.5" x2="22" y2="23.5" />
        <line x1="19" y1="26" x2="21" y2="26" />
      </svg>
    )
  },
  {
    title: 'Project Management Efficiency',
    desc: 'Leading development firms use organized project management methods to execute projects on time and under budget. Agile approaches provide flexibility and adaptation throughout development. Regular updates and timely milestones ensure an easy development path.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Person Head & Torso */}
        <circle cx="20" cy="10" r="4.5" />
        <path d="M12 22 C12 17.5 15.5 16.5 20 16.5 C24.5 16.5 28 17.5 28 22" />
        {/* Supporting Cupped Hand */}
        <path d="M5 26 C10 26 14 30 20 30 C26 30 32 27 36 24" />
        <path d="M3 21 L8 26 C12 30 17 33 22 33 C28 33 34 30 37 25" />
      </svg>
    )
  },
  {
    title: 'Scalability, Future-Proofing',
    desc: 'The best Android app developers consider scalability and growth. Flexible designs can handle new features, greater user loads, and technology advances. This proactive strategy keeps your app current and functioning as your company and market change.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* User Avatar on Left */}
        <circle cx="10" cy="12" r="4.5" />
        <path d="M3 29 C3 23.5 6.5 20.5 10 20.5 C12.2 20.5 14.2 21.6 15.5 23.2" />
        {/* Ascending 3-Bar Chart on Right */}
        <rect x="19" y="21" width="4.5" height="11" rx="1" />
        <rect x="26" y="16" width="4.5" height="16" rx="1" />
        <rect x="33" y="11" width="4.5" height="21" rx="1" />
        {/* Rising Trend Arrow */}
        <path d="M18 16 L28 8 L35 3" />
        <path d="M29 3 H35 V9" />
      </svg>
    )
  },
  {
    title: 'Complete Support and Upkeep',
    desc: 'Your app runs bug free with frequent updates, bug fixes, and performance improvements. This continual support helps resolve problems quickly and maintains your software compatible with the newest Android devices.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Application Window Frame */}
        <rect x="4" y="6" width="32" height="26" rx="3" />
        <line x1="4" y1="13" x2="36" y2="13" />
        <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
        <circle cx="12.5" cy="9.5" r="1" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
        {/* Shield with Checkmark inside Window */}
        <path d="M20 27 C15.5 25 13.5 22 13.5 18 L20 15.5 L26.5 18 C26.5 22 24.5 25 20 27 Z" />
        <path d="M17.5 21 L19.5 23 L23 19.5" strokeWidth="1.8" />
      </svg>
    )
  }
];

export const AndroidCompanyBenefits = () => {
  return (
    <section className="py-7 sm:py-9 lg:py-10 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-8">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
            style={{ fontSize: '32px' }}
          >
            Benefits of the Best Android App Development Company
          </h2>
          <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            Hire a top Android app development firm to boost your mobile app's success and quality. Six major advantages:
          </p>
        </div>

        {/* 6 White Benefit Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {benefitsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Clean Exact Blue Vector Icon (No animation) */}
                <div className="mb-4 text-[#005F96]">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-3 leading-snug tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12.8px] sm:text-[13.2px] text-[#475569] leading-[1.65] font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AndroidCompanyBenefits;
