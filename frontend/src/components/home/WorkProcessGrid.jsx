import React from 'react';

const defaultTopRowSteps = [
  {
    step: '01',
    title: 'Requirement Gathering',
    desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
    bg: 'bg-[#ECE7FE] border-[#DDD8FE]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#8B5CF6]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10a11 11 0 0 0-8 18.5v4.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4.5A11 11 0 0 0 24 10z" />
        <line x1="19" y1="41" x2="29" y2="41" />
        <line x1="24" y1="3" x2="24" y2="6" />
        <line x1="9" y1="9" x2="12" y2="12" />
        <line x1="39" y1="9" x2="36" y2="12" />
        <line x1="3" y1="24" x2="6" y2="24" />
        <line x1="45" y1="24" x2="42" y2="24" />
      </svg>
    )
  },
  {
    step: '02',
    title: 'Designs, Wireframes, & Mockups',
    desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
    bg: 'bg-[#E5F7E8] border-[#C8EED0]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#06B6D4]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="7" height="7" rx="1.5" fill="#06B6D4" />
        <rect x="35" y="6" width="7" height="7" rx="1.5" fill="#06B6D4" />
        <rect x="20.5" y="35" width="7" height="7" rx="1.5" fill="#06B6D4" />
        <path d="M9.5 13c0 12 14.5 22 14.5 22s14.5-10 14.5-22" />
        <line x1="13" y1="9.5" x2="35" y2="9.5" />
        <path d="M20 20l5 5-2.5 7.5-7.5-2.5 5-10z" fill="#06B6D4" />
      </svg>
    )
  },
  {
    step: '03',
    title: 'Prototype Demo',
    desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
    bg: 'bg-[#FDF0E7] border-[#FADCD0]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#F97316]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="12" width="18" height="28" rx="4" />
        <rect x="24" y="8" width="18" height="28" rx="4" />
        <line x1="12" y1="18" x2="18" y2="18" />
        <line x1="30" y1="14" x2="36" y2="14" />
        <circle cx="15" cy="34" r="1.5" fill="currentColor" />
        <circle cx="33" cy="30" r="1.5" fill="currentColor" />
        <path d="M15 24h6a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h6" strokeDasharray="3 3" />
      </svg>
    )
  },
  {
    step: '04',
    title: 'Changes And Confirmation',
    desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
    bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#EAB308]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 8a16 16 0 1 1-11.3 4.7" />
        <path d="M12.5 7v6h6" />
        <circle cx="24" cy="24" r="7" />
        <path d="M24 13v4" />
        <path d="M24 31v4" />
        <path d="M13 24h4" />
        <path d="M31 24h4" />
      </svg>
    )
  }
];

const defaultBottomRowSteps = [
  {
    step: '08',
    title: 'SEO',
    desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.',
    bg: 'bg-[#F6FBDD] border-[#E5F2A8]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#84CC16]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="13" fill="#F7FEE7" />
        <line x1="30" y1="30" x2="42" y2="42" strokeWidth="4" />
        <text x="20" y="24" textAnchor="middle" fontSize="10" fontWeight="900" fill="currentColor" stroke="none" fontFamily="sans-serif">SEO</text>
      </svg>
    )
  },
  {
    step: '07',
    title: 'Support And Maintenance',
    desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement',
    bg: 'bg-[#F6E8FD] border-[#E9D5FF]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#A855F7]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="28" rx="4" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <circle cx="11" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="21" cy="12" r="1.5" fill="currentColor" />
        <path d="M20 26l6 6a3 3 0 0 0 4.2-4.2l-6-6" />
        <path d="M28 20a4 4 0 0 0-4-4 4 4 0 0 0-1 2l3 3z" />
      </svg>
    )
  },
  {
    step: '06',
    title: 'Deployment',
    desc: "We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.",
    bg: 'bg-[#E2F7F8] border-[#BAE6FD]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#10B981]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="28" rx="4" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <path d="M24 13c4 0 7 3 7 7v4h-14v-4c0-4 3-7 7-7z" />
        <path d="M20 28l4 4 4-4" />
        <circle cx="24" cy="20" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    step: '05',
    title: 'Development',
    desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.',
    bg: 'bg-[#FDE7EE] border-[#FBCFE8]',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 text-[#EC4899]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="8" width="36" height="28" rx="4" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <circle cx="11" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="21" cy="12" r="1.5" fill="currentColor" />
        <path d="M17 22l-4 4 4 4" />
        <path d="M31 22l4 4-4 4" />
        <path d="M26 21l-4 10" />
      </svg>
    )
  }
];

export const WorkProcessGrid = ({ data }) => {
  const title = data?.title || 'Process We Follow';

  let topRow = defaultTopRowSteps;
  let bottomRow = defaultBottomRowSteps;

  if (data?.steps && Array.isArray(data.steps) && data.steps.filter(s => s.isActive !== false).length >= 8) {
    const activeSteps = data.steps.filter(s => s.isActive !== false);
    topRow = activeSteps.slice(0, 4);
    bottomRow = [activeSteps[7], activeSteps[6], activeSteps[5], activeSteps[4]];
  }

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 relative font-sans overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-[800] tracking-tight text-slate-950 font-sans">
            {title}
          </h2>
        </div>

        {/* Top Row Cards (01 -> 02 -> 03 -> 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRow.map((stepItem, idx) => {
            const stepNum = stepItem.step || `0${idx + 1}`;
            const cardTitle = stepItem.title || (stepItem.titleLine1 ? `${stepItem.titleLine1} ${stepItem.titleLine2 || ''}` : 'Phase');
            const desc = stepItem.desc || stepItem.description || '';
            const bgClass = stepItem.bg || defaultTopRowSteps[idx % defaultTopRowSteps.length].bg;

            return (
              <div
                key={idx}
                className={`rounded-[16px] p-6 sm:p-7 border ${bgClass} flex flex-col justify-between min-h-[300px] shadow-xs hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-start">
                    {stepItem.icon || defaultTopRowSteps[idx % defaultTopRowSteps.length].icon}
                  </div>
                  <span className="text-[36px] font-[900] text-slate-700/90 font-sans tracking-tight leading-none">
                    {stepNum}
                  </span>
                </div>

                <div className="space-y-2 mt-auto">
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-950 leading-tight font-sans">
                    {cardTitle}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-700 font-[400] leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Middle Process Connector Track SVG (Visible on Desktop) */}
        <div className="hidden lg:block w-full my-4 px-2">
          <img
            src="/images/process_we_follow_arrow.cb4604ab.svg"
            alt="Process Workflow Pipeline"
            className="w-full max-w-[1280px] mx-auto object-contain pointer-events-none select-none"
          />
        </div>

        {/* Bottom Row Cards (08 <- 07 <- 06 <- 05) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 lg:mt-0">
          {bottomRow.map((stepItem, idx) => {
            const stepNum = stepItem.step || (idx === 0 ? '08' : idx === 1 ? '07' : idx === 2 ? '06' : '05');
            const cardTitle = stepItem.title || (stepItem.titleLine1 ? `${stepItem.titleLine1} ${stepItem.titleLine2 || ''}` : 'Phase');
            const desc = stepItem.desc || stepItem.description || '';
            const bgClass = stepItem.bg || defaultBottomRowSteps[idx % defaultBottomRowSteps.length].bg;

            return (
              <div
                key={idx}
                className={`rounded-[16px] p-6 sm:p-7 border ${bgClass} flex flex-col justify-between min-h-[300px] shadow-xs hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-start">
                    {stepItem.icon || defaultBottomRowSteps[idx % defaultBottomRowSteps.length].icon}
                  </div>
                  <span className="text-[36px] font-[900] text-slate-700/90 font-sans tracking-tight leading-none">
                    {stepNum}
                  </span>
                </div>

                <div className="space-y-2 mt-auto">
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-950 leading-tight font-sans">
                    {cardTitle}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-700 font-[400] leading-relaxed font-sans">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessGrid;
