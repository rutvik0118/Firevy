import React from 'react';
import Container from '../common/Container';

export const IOSBenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Access to Expertise',
      desc: 'A renowned iOS app development business employs Swift, Objective-C, and other iOS experts. Their knowledge guarantees that your app is designed utilizing best practices and the current industry standards, resulting in high-quality and efficient software.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* Bar Chart Bars */}
          <rect x="6" y="24" width="6" height="18" rx="1" />
          <rect x="18" y="16" width="6" height="26" rx="1" />
          <rect x="30" y="8" width="6" height="34" rx="1" />
          {/* Trend Line with Arrow */}
          <path d="M 6 20 L 18 12 L 30 6 L 42 4" strokeWidth="2.2" />
          <path d="M 36 4 L 42 4 L 42 10" strokeWidth="2.2" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Excellent User Experience and Design',
      desc: 'iOS app developers prioritize UX and design. Their devoted designers develop intuitive, attractive, and user-friendly interfaces. Users are more satisfied and engaged with a well-designed app, which helps businesses succeed.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* Shield Outline */}
          <path d="M 24 5 C 33 9 40 8 40 19 C 40 31 29 40 24 43 C 19 40 8 31 8 19 C 8 8 15 9 24 5 Z" strokeWidth="2.2" />
          {/* Checkmark inside */}
          <path d="M 16 23 L 22 29 L 32 17" strokeWidth="2.2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Increased Security and Compliance',
      desc: "iOS app developers emphasize security to meet Apple's strict criteria. To safeguard user data and app integrity, they deploy data encryption and frequent security upgrades. Compliance with these standards builds user confidence and reduces security threats.",
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* Cog / Gear Outline */}
          <circle cx="24" cy="24" r="7" strokeWidth="2" />
          <path d="M 24 4 L 24 8 M 24 40 L 24 44 M 4 24 L 8 24 M 40 24 L 44 24 M 9.8 9.8 L 12.8 12.8 M 35.2 35.2 L 38.2 38.2 M 9.8 38.2 L 12.8 35.2 M 35.2 12.8 L 38.2 9.8" strokeWidth="2.2" />
          {/* Gear teeth contour */}
          <path d="M 21 6 L 27 6 L 28 10 L 32 11 L 35 8 L 40 13 L 37 16 L 38 20 L 42 21 L 42 27 L 38 28 L 37 32 L 40 35 L 35 40 L 32 37 L 28 38 L 27 42 L 21 42 L 20 38 L 16 37 L 13 40 L 8 35 L 11 32 L 10 28 L 6 27 L 6 21 L 10 20 L 11 16 L 8 13 L 13 8 L 16 11 L 20 10 Z" strokeWidth="1.8" />
          {/* Inner Shield / Lock */}
          <path d="M 20 22 C 20 19.8 21.8 18 24 18 C 26.2 18 28 19.8 28 22 L 28 24 M 19 24 L 29 24 L 29 30 L 19 30 Z" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Optimized Results',
      desc: 'Top iOS app developers thoroughly test and tune the software to find and fix performance problems. This meticulousness guarantees that your program functions smoothly on all iOS devices, giving a consistent and dependable user experience.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* User Head & Shoulders */}
          <circle cx="24" cy="14" r="5" strokeWidth="2.2" />
          <path d="M 16 26 C 16 23 19.5 21 24 21 C 28.5 21 32 23 32 26" strokeWidth="2.2" />
          {/* Supporting Hand */}
          <path d="M 10 33 C 12 30 15 30 19 31 L 26 33 C 28 33.5 30 33 32 31.5 L 37 28 C 38.5 27 40 28 39 30 L 34 37 C 31 41 26 42 21 42 L 10 42 C 8 42 8 36 10 33 Z" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Effective Project Management',
      desc: 'Successful iOS app development businesses use Agile or Scrum to execute projects on schedule. They communicate well, inform you, and include you in important decisions. This collaborative approach keeps the project on schedule and meets corporate goals.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* User Circle / Avatar on left */}
          <circle cx="16" cy="18" r="4.5" strokeWidth="2" />
          <path d="M 8 32 C 8 27.5 11.5 25 16 25 C 18.5 25 20.8 26 22 27.5" strokeWidth="2" />
          {/* Growth Chart on right */}
          <rect x="25" y="24" width="4.5" height="14" rx="0.8" />
          <rect x="32.5" y="17" width="4.5" height="21" rx="0.8" />
          <rect x="40" y="10" width="4.5" height="28" rx="0.8" />
          {/* Upward Line */}
          <path d="M 23 18 L 30 12 L 38 8 L 44 6" strokeWidth="2" />
          <path d="M 39 6 L 44 6 L 44 11" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Support and Upkeep After Launch',
      desc: 'The iOS app developers provide post-launch support and maintenance and frequent upgrades, bug fixes, and additions keep your app compatible with the newest iOS versions and technology. Continuous support keeps your app running smoothly and resolves problems quickly.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0088CC] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
          {/* Application Window Frame */}
          <rect x="6" y="8" width="36" height="32" rx="3" strokeWidth="2.2" />
          <line x1="6" y1="16" x2="42" y2="16" strokeWidth="2" />
          <circle cx="11" cy="12" r="1.2" fill="#0088CC" stroke="none" />
          <circle cx="15" cy="12" r="1.2" fill="#0088CC" stroke="none" />
          <circle cx="19" cy="12" r="1.2" fill="#0088CC" stroke="none" />
          {/* Center Shield Badge */}
          <path d="M 24 21 C 28 23 31 23 31 27 C 31 32 26 35 24 36 C 22 35 17 32 17 27 C 17 23 20 23 24 21 Z" strokeWidth="1.8" />
          <path d="M 21 28 L 23.5 30.5 L 27 26" strokeWidth="1.6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white text-slate-900 font-sans text-left relative overflow-hidden">
      <Container>
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3 px-4">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Benefits of iOS App Development Company
          </h2>
          <p className="text-[#475569] font-normal text-[14px] sm:text-[15px] leading-relaxed max-w-3xl mx-auto">
            Employing an iOS application development business will greatly improve your mobile app's success and quality. Six main advantages of hiring an iOS app development company:
          </p>
        </div>

        {/* 6 White Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1340px] mx-auto">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[16px] sm:rounded-[20px] p-7 sm:p-8 text-left shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-slate-100/90 flex flex-col justify-start transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="mb-5">
                {item.icon}
              </div>

              {/* Card Title */}
              <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="font-normal text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.68]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IOSBenefitsSection;

