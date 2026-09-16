import React from 'react';
import Container from '../common/Container';

const benefitsData = [
  {
    title: 'Tech-savvy',
    desc: 'Our team knows many programming languages, frameworks, and tools for iOS, Android, and cross-platform app development. As a Mobile Application Development Company, Swift, Kotlin, Java, JavaScript, React Native, Flutter, and Xamarin are our expertise.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Growth Bar Chart with Arrow */}
        <rect x="6" y="24" width="7" height="18" rx="1.5" />
        <rect x="18" y="16" width="7" height="26" rx="1.5" />
        <rect x="30" y="8" width="7" height="34" rx="1.5" />
        <path d="M7 16 L22 7 L32 14 L42 4" strokeWidth="2.5" />
        <path d="M34 4 H42 V12" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    title: 'Knowledge and Skill',
    desc: "Our team includes experienced mobile app developers from many sectors. They've completed everything from consumer applications to business solutions, and their varied skills allow them to solve problems quickly and creatively for customers.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Shield with Checkmark */}
        <path d="M24 6 L38 11 C38 26 31 37 24 42 C17 37 10 26 10 11 Z" />
        <path d="M17 24 L22 29 L31 19" strokeWidth="2.6" />
      </svg>
    )
  },
  {
    title: 'Design sense',
    desc: 'Our mobile app developers are design and UX experts. They value attractive, intuitive, and easy-to-use interfaces. Using UI/UX best practices, our developers ensure that every component of the app improves user engagement and pleasure, creating a good experience.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Gear with internal flower / design shape */}
        <path d="M20.5 4 H27.5 L29 9 L33.5 10.8 L38 8 L42 12 L39.2 16.5 L41 21 L46 22.5 V29.5 L41 31 L39.2 35.5 L42 40 L38 44 L33.5 41.2 L29 43 L27.5 48 H20.5 L19 43 L14.5 41.2 L10 44 L6 40 L8.8 35.5 L7 31 L2 29.5 V22.5 L7 21 L8.8 16.5 L6 12 L10 8 L14.5 10.8 L19 9 Z" transform="scale(0.85) translate(4.5, 4.5)" />
        <circle cx="24" cy="24" r="7" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    title: 'Agile Methodologies',
    desc: 'To guarantee flexibility, transparency, and cooperation, our engineers use Scrum or Kanban. We divide the project into sprints for feedback and iteration. Iterative development allows our developers to adapt to changing needs and provide high-quality outcomes on time and within budget.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Person on top of open hands / agile cycle */}
        <circle cx="24" cy="12" r="5" />
        <path d="M16 26 C16 21.6 19.6 18 24 18 C28.4 18 32 21.6 32 26" />
        <path d="M8 32 C12 30 16 34 24 34 C32 34 36 30 40 32" />
        <path d="M10 40 C14 38 18 41 24 41 C30 41 34 38 38 40" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    title: 'Transparency',
    desc: 'We work with you from planning to implementation and support. With clear communication and frequent updates, our developers turn your idea into a successful mobile app that matches your company goals.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Person with Bar Graph */}
        <circle cx="12" cy="14" r="5" />
        <path d="M4 30 C4 24.5 7.6 21 12 21 C14.5 21 16.8 22.2 18.2 24.1" />
        <rect x="23" y="24" width="5.5" height="18" rx="1.2" />
        <rect x="31" y="16" width="5.5" height="26" rx="1.2" />
        <rect x="39" y="8" width="5.5" height="34" rx="1.2" />
        <path d="M22 17 L32 9 L44 4" strokeWidth="2" />
        <path d="M38 4 H44 V10" strokeWidth="2" />
      </svg>
    )
  },
  {
    title: 'Quality Control',
    desc: 'Quality is our priority. Our services satisfy the highest performance, reliability, and security requirements since our developers undergo rigorous quality assurance methods. Before the app is published, it undergoes functional, usability, performance, and security testing to find and fix any flaws.',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Computer Screen with Shield / Badge */}
        <rect x="5" y="8" width="38" height="26" rx="3" />
        <line x1="5" y1="16" x2="43" y2="16" strokeWidth="1.8" />
        <path d="M24 34 V42" />
        <path d="M16 42 H32" />
        {/* Shield badge inside screen */}
        <path d="M24 20 L29 22 C29 27 26.5 29.5 24 31 C21.5 29.5 19 27 19 22 Z" strokeWidth="1.8" />
        <path d="M22 25 L23.5 26.5 L26.5 23.5" strokeWidth="1.8" />
      </svg>
    )
  }
];

export const MobileAppCompanyBenefits = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle Matching Screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3.5"
            style={{ fontSize: '34px' }}
          >
            Benefits of Hiring our Mobile App Development Company
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            As the top mobile app development company, we have the required expertise and skills to create out of the box apps.
          </p>
        </div>

        {/* 6 White Benefit Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {benefitsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-7 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-start"
            >
              {/* Blue Vector Icon */}
              <div className="mb-5 text-[#0088CC]">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3 leading-snug tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.7] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MobileAppCompanyBenefits;

