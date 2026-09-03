import React from 'react';
import Container from './Container';

// Exact 1:1 Vector Outline Icons matching Sapphire Solutions reference screenshot 1:1
const BackendIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Top Cube */}
    <path d="M 24 6 L 31 10 L 24 14 L 17 10 Z" />
    <path d="M 17 10 V 17 L 24 21 V 14" />
    <path d="M 31 10 V 17 L 24 21" />
    {/* Bottom Left Cube */}
    <path d="M 16 20 L 23 24 L 16 28 L 9 24 Z" />
    <path d="M 9 24 V 31 L 16 35 V 28" />
    <path d="M 23 24 V 31 L 16 35" />
    {/* Bottom Right Cube */}
    <path d="M 32 20 L 39 24 L 32 28 L 25 24 Z" />
    <path d="M 25 24 V 31 L 32 35 V 28" />
    <path d="M 39 24 V 31 L 32 35" />
  </svg>
);

const FrontendIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="36" height="28" rx="4" />
    <line x1="6" y1="16" x2="42" y2="16" />
    <circle cx="11" cy="12" r="1.2" fill="currentColor" />
    <circle cx="15" cy="12" r="1.2" fill="currentColor" />
    <circle cx="19" cy="12" r="1.2" fill="currentColor" />
    <rect x="11" y="21" width="10" height="10" rx="2" />
    <line x1="25" y1="22" x2="37" y2="22" />
    <line x1="25" y1="26" x2="37" y2="26" />
    <line x1="25" y1="30" x2="33" y2="30" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="24" cy="12" rx="15" ry="6" />
    <path d="M 9 12 V 22 C 9 25.3 15.7 28 24 28 C 32.3 28 39 25.3 39 22 V 12" />
    <path d="M 9 22 V 32 C 9 35.3 15.7 38 24 38 C 32.3 38 39 35.3 39 32 V 22" />
  </svg>
);

const DevopsIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 18 L 24 12 L 36 18 L 24 24 Z" />
    <path d="M 12 18 V 34 L 24 40 V 24" />
    <path d="M 36 18 V 34 L 24 40" />
    <path d="M 12 18 L 6 12 L 18 6 L 24 12" />
    <path d="M 36 18 L 42 12 L 30 6 L 24 12" />
  </svg>
);

const TestingIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="11" />
    <path d="M 18 18 L 22 22 L 30 14" strokeWidth="2.5" />
    <path d="M 17 28 L 14 42 L 24 37 L 34 42 L 31 28" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-10 h-10 text-[#0073B5]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="7" />
    <path d="M 24 6 V 11 M 24 37 V 42 M 6 24 H 11 M 37 24 H 42 M 11.3 11.3 L 14.8 14.8 M 33.2 33.2 L 36.7 36.7 M 11.3 36.7 L 14.8 33.2 M 33.2 14.8 L 36.7 11.3" strokeWidth="2.5" />
  </svg>
);

export const SapphireTechStackGrid = ({ domainName = "healthcare" }) => {
  // 6 Overview Cards matching Sapphire Solutions screenshot 1:1
  const overviewCards = [
    {
      title: 'Backend',
      icon: BackendIcon,
      col1: ['.NET', 'Node', 'JAVA'],
      col2: ['Ruby on Rails', 'PHP']
    },
    {
      title: 'Frontend',
      icon: FrontendIcon,
      col1: ['Java', 'RxJava', 'Coroutines Kotlin'],
      col2: ['Kotlin', 'RxKotlin']
    },
    {
      title: 'Database',
      icon: DatabaseIcon,
      col1: ['SQLite', 'CoreData'],
      col2: ['Realm', 'Firebase']
    },
    {
      title: 'Devops',
      icon: DevopsIcon,
      col1: ['CI/CD'],
      col2: ['GitHub Actions']
    },
    {
      title: 'Testing',
      icon: TestingIcon,
      col1: ['Appium', 'BrowserStack', 'Katalon Test Studio'],
      col2: []
    },
    {
      title: 'Project Management Tools',
      icon: SettingsIcon,
      col1: ['Jira', 'Slack'],
      col2: ['Microsoft Teams', 'Trello']
    }
  ];

  return (
    <section className="pt-12 pb-4 sm:pb-6 bg-white text-slate-900 font-sans text-left">
      <Container>
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            We use the latest {domainName} app development technology and process to make sure we deliver the best. Have a look at our technology stack:
          </p>
        </div>

        {/* 6 Soft Blue Cards Grid (3 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {overviewCards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#EFF7FE] border border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start h-full space-y-5"
              >
                {/* Header: Icon + Title */}
                <div className="flex items-center space-x-3.5">
                  <div className="shrink-0">
                    <IconComp />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                    {card.title}
                  </h3>
                </div>

                {/* 2-Column Bullet List */}
                <div className="grid grid-cols-2 gap-x-4 text-sm sm:text-[14.5px] text-[#475569] font-normal leading-relaxed font-sans">
                  <div className="space-y-2">
                    {card.col1.map((item, i) => (
                      <div key={i} className="flex items-baseline space-x-1.5">
                        <span className="text-[#0073B5] font-semibold">-</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {card.col2.map((item, i) => (
                      <div key={i} className="flex items-baseline space-x-1.5">
                        <span className="text-[#0073B5] font-semibold">-</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SapphireTechStackGrid;
