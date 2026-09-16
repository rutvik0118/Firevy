import React from 'react';
import Container from './Container';

const defaultTechCards = [
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Top Cube */}
        <path d="M18 6 L28 12 L28 22 L18 16 Z" />
        <path d="M18 6 L8 12 L8 22 L18 16 Z" />
        <path d="M18 6 L28 12 L18 16 L8 12 Z" />
        {/* Bottom Left Cube */}
        <path d="M16 20 L26 26 L26 36 L16 30 Z" />
        <path d="M16 20 L6 26 L6 36 L16 30 Z" />
        <path d="M16 20 L26 26 L16 30 L6 26 Z" />
        {/* Bottom Right Cube */}
        <path d="M28 20 L38 26 L38 36 L28 30 Z" />
        <path d="M28 20 L18 26 L18 36 L28 30 Z" />
        <path d="M28 20 L38 26 L28 30 L18 26 Z" />
      </svg>
    ),
    col1: ['Drupal', 'Wordpress'],
    col2: ['Shopify']
  },
  {
    id: 'frontend',
    title: 'Front End',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <circle cx="12" cy="14" r="1.2" fill="currentColor" />
        <circle cx="16" cy="14" r="1.2" fill="currentColor" />
        <circle cx="20" cy="14" r="1.2" fill="currentColor" />
        <rect x="11" y="23" width="9" height="10" rx="1.5" />
        <line x1="24" y1="24" x2="36" y2="24" strokeWidth="1.8" />
        <line x1="24" y1="28" x2="36" y2="28" strokeWidth="1.8" />
        <line x1="24" y1="32" x2="32" y2="32" strokeWidth="1.8" />
      </svg>
    ),
    col1: ['React', 'Vue', 'Bootstrap'],
    col2: ['Angular', 'JQuery', 'WPF']
  },
  {
    id: 'database',
    title: 'Database',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="12" rx="14" ry="5.5" />
        <path d="M10 12 V22 C10 25 16 27.5 24 27.5 C32 27.5 38 25 38 22 V12" />
        <path d="M10 22 V32 C10 35 16 37.5 24 37.5 C32 35 38 32 38 32 V22" />
      </svg>
    ),
    col1: ['MS-SQL', 'MariaDB', 'MongoDB'],
    col2: ['Realm', 'PostgreSQL', 'Oracle']
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="28" height="20" rx="2" />
        <circle cx="24" cy="20" r="6" strokeWidth="1.8" />
        <ellipse cx="24" cy="20" rx="2.5" ry="6" strokeWidth="1.8" />
        <line x1="18" y1="20" x2="30" y2="20" strokeWidth="1.8" />
        <path d="M6 30 L42 30 C43 30, 43 33, 41 33 L7 33 C5 33, 5 30, 6 30 Z" />
        <path d="M24 24 L24 16 M21 19 L24 16 L27 19" strokeWidth="2" />
      </svg>
    ),
    col1: ['AWS', 'Azure', 'Docker'],
    col2: ['Kubernets', 'Google Cloud']
  },
  {
    id: 'testing',
    title: 'Testing',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="11" />
        <path d="M19 20 L22 23 L29 16" strokeWidth="2.5" />
        <path d="M17 29 L14 41 L24 37 L34 41 L31 29" />
      </svg>
    ),
    col1: ['Selenium', 'Test Rail', 'Apache JMeter', 'BrowserStack'],
    col2: ['Postman', 'OWASP ZAP']
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#005F96]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="14" />
        <path d="M24 6 V9 M24 39 V42 M6 24 H9 M39 24 H42 M11.3 11.3 L13.5 13.5 M34.5 34.5 L36.7 36.7 M11.3 36.7 L13.5 34.5 M34.5 13.5 L36.7 11.3" strokeWidth="2.8" />
        <path d="M19 24 C19 21.5, 15 21.5, 15 24 C15 26.5, 19 26.5, 24 24 C29 21.5, 33 21.5, 33 24 C33 26.5, 29 26.5, 24 24" strokeWidth="2.2" />
      </svg>
    ),
    col1: ['MVC', 'MVP', 'MVVM', 'Microservices'],
    col2: []
  }
];

export const TechnologyStackGrid = ({
  title = "Technology Stack",
  subtitle = "We employ cutting-edge technologies and tools to make sure your applications are built on the latest technology. Have a look at our tech stack:",
  cards = defaultTechCards
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans text-left">
      <Container className="max-w-7xl">
        {/* Centered Heading & Subtitle (1:1 Reference Match) */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            {subtitle}
          </p>
        </div>

        {/* 6 Tech Stack Cards Grid (3 Columns x 2 Rows Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F0F8FC] rounded-[14px] sm:rounded-[16px] p-6 sm:p-7 border border-[#E0F0FA] shadow-[0_2px_12px_rgba(0,95,150,0.03)] hover:shadow-[0_8px_24px_rgba(0,95,150,0.08)] transition-all duration-300 flex flex-col justify-start"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center space-x-3.5 mb-5 pb-1">
                <div className="shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* 2-Column Item List with Dash Prefix */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px] sm:text-[14px] text-[#475569] font-medium leading-[1.7]">
                <div className="space-y-1.5">
                  {card.col1.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#64748B] font-bold">-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {card.col2.map((item, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#64748B] font-bold">-</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologyStackGrid;
