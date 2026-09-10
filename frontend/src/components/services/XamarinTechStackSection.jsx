import React from 'react';
import Container from '../common/Container';

const techStackCards = [
  {
    id: 1,
    title: 'Back End',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Open Server Door Frame */}
        <path d="M12 8 L22 8 L22 40 L12 40 Z" />
        <line x1="16" y1="24" x2="16" y2="25" strokeWidth="3" />
        {/* Right Server / Terminal Module with code lines */}
        <rect x="22" y="11" width="16" height="12" rx="2" />
        <line x1="26" y1="16" x2="34" y2="16" strokeWidth="1.8" />
        <rect x="22" y="25" width="16" height="12" rx="2" />
        <line x1="26" y1="30" x2="34" y2="30" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['C#', '.NET', 'ASP.NET'],
    col2: ['.NET Core', 'Ruby on Rails']
  },
  {
    id: 2,
    title: 'Frontend',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Browser Window Frame */}
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        {/* 3 Top Dots */}
        <circle cx="12" cy="14" r="1.2" fill="currentColor" />
        <circle cx="16" cy="14" r="1.2" fill="currentColor" />
        <circle cx="20" cy="14" r="1.2" fill="currentColor" />
        {/* Left Side Content Block */}
        <rect x="11" y="23" width="9" height="10" rx="1.5" />
        {/* Right Text Lines */}
        <line x1="24" y1="24" x2="36" y2="24" strokeWidth="1.8" />
        <line x1="24" y1="28" x2="36" y2="28" strokeWidth="1.8" />
        <line x1="24" y1="32" x2="32" y2="32" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['Xaml', 'Vue', 'Bootstrap'],
    col2: ['Angular', 'JQuery']
  },
  {
    id: 3,
    title: 'Database',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Top Cylinder Disc */}
        <ellipse cx="24" cy="12" rx="14" ry="5.5" />
        {/* Middle Disc */}
        <path d="M10 12 V22 C10 25 16 27.5 24 27.5 C32 27.5 38 25 38 22 V12" />
        {/* Bottom Disc */}
        <path d="M10 22 V32 C10 35 16 37.5 24 37.5 C32 35 38 32 38 32 V22" />
      </svg>
    ),
    col1: ['Realm', 'CoreData', 'MongoDB'],
    col2: ['Firebase', 'PostgreSQL', 'Oracle']
  },
  {
    id: 4,
    title: 'Deployment',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Laptop Screen & Globe */}
        <rect x="10" y="10" width="28" height="20" rx="2" />
        <circle cx="24" cy="20" r="6" strokeWidth="1.8" />
        <ellipse cx="24" cy="20" rx="2.5" ry="6" strokeWidth="1.8" />
        <line x1="18" y1="20" x2="30" y2="20" strokeWidth="1.8" />
        {/* Laptop Base */}
        <path d="M6 30 L42 30 C43 30, 43 33, 41 33 L7 33 C5 33, 5 30, 6 30 Z" />
        {/* Upload Arrow inside screen */}
        <path d="M24 24 L24 16 M21 19 L24 16 L27 19" strokeWidth="2" />
      </svg>
    ),
    col1: ['AWS', 'CI/CD', 'Docker'],
    col2: ['Google Cloud', 'Kubernets', 'GitHub Actions']
  },
  {
    id: 5,
    title: 'Testing',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Ribbon Rosette Seal with Checkmark */}
        <circle cx="24" cy="20" r="11" />
        <path d="M19 20 L22 23 L29 16" strokeWidth="2.5" />
        <path d="M17 29 L14 41 L24 37 L34 41 L31 29" />
      </svg>
    ),
    col1: ['Selenium', 'Test Rail', 'Apache JMeter', 'BrowserStack'],
    col2: ['Postman', 'OWASP ZAP']
  },
  {
    id: 6,
    title: 'Architecture',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Gear with Infinity / Loop Inside */}
        <circle cx="24" cy="24" r="14" />
        {/* Gear Teeth */}
        <path d="M24 6 V9 M24 39 V42 M6 24 H9 M39 24 H42 M11.3 11.3 L13.5 13.5 M34.5 34.5 L36.7 36.7 M11.3 36.7 L13.5 34.5 M34.5 13.5 L36.7 11.3" strokeWidth="2.8" />
        {/* Infinity Loop Symbol */}
        <path d="M19 24 C19 21.5, 15 21.5, 15 24 C15 26.5, 19 26.5, 24 24 C29 21.5, 33 21.5, 33 24 C33 26.5, 29 26.5, 24 24" strokeWidth="2.2" />
      </svg>
    ),
    col1: ['MVC', 'MVP', 'MVVM', 'Microservices'],
    col2: []
  }
];

export const XamarinTechStackSection = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-9 space-y-2.5">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Technology Stack
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            We employ cutting-edge technologies and tools to make sure your applications are built on the latest technology. Have a look at our tech stack:
          </p>
        </div>

        {/* 6 Tech Stack Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {techStackCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F0F8FC] rounded-[12px] p-6 sm:p-7 border border-[#E0F0FA] shadow-[0_2px_12px_rgba(0,95,150,0.03)] hover:shadow-[0_8px_24px_rgba(0,95,150,0.08)] transition-all duration-300 flex flex-col justify-start"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center space-x-3.5 mb-5 pb-1 border-b border-[#E2EFF7]/60">
                <div className="shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* Technologies in 2 Columns with Dash (-) */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-left">
                {/* Column 1 */}
                <ul className="space-y-2">
                  {card.col1.map((tech, idx) => (
                    <li key={idx} className="text-[13px] sm:text-[13.5px] text-[#334155] font-[500] flex items-center">
                      <span className="text-[#64748B] mr-2">-</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {/* Column 2 */}
                <ul className="space-y-2">
                  {card.col2.map((tech, idx) => (
                    <li key={idx} className="text-[13px] sm:text-[13.5px] text-[#334155] font-[500] flex items-center">
                      <span className="text-[#64748B] mr-2">-</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default XamarinTechStackSection;
