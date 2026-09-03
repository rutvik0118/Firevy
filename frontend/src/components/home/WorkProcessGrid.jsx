import React from 'react';

const defaultTopRowSteps = [
  {
    step: '01',
    titleLine1: 'Requirement',
    titleLine2: 'Gathering',
    desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
    bg: 'bg-[#EEECFE] border-[#DDD8FE]',
    icon: (
      <svg className="w-10 h-10 text-[#7C3AED]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7a9 9 0 0 0-6 15.7V26a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.3A9 9 0 0 0 20 7z" />
        <line x1="16" y1="32" x2="24" y2="32" />
        <line x1="20" y1="2" x2="20" y2="4" />
        <line x1="7" y1="7" x2="9.5" y2="9.5" />
        <line x1="33" y1="7" x2="30.5" y2="9.5" />
        <line x1="2" y1="20" x2="4" y2="20" />
        <line x1="38" y1="20" x2="36" y2="20" />
      </svg>
    )
  },
  {
    step: '02',
    titleLine1: 'Designs, Wireframes, &',
    titleLine2: 'Mockups',
    desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
    bg: 'bg-[#E3F6E7] border-[#C8EED0]',
    icon: (
      <svg className="w-10 h-10 text-[#16A34A]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="5" height="5" rx="1" fill="#16A34A" />
        <rect x="29" y="6" width="5" height="5" rx="1" fill="#16A34A" />
        <rect x="17.5" y="29" width="5" height="5" rx="1" fill="#16A34A" />
        <path d="M8.5 11c0 10 11.5 18 11.5 18s11.5-8 11.5-18" />
        <line x1="11" y1="8.5" x2="29" y2="8.5" />
        <path d="M17 17l4 4-2 6-6-2 4-8z" fill="#16A34A" />
      </svg>
    )
  },
  {
    step: '03',
    titleLine1: 'Prototype Demo',
    titleLine2: '',
    desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
    bg: 'bg-[#FDF0E8] border-[#FADCD0]',
    icon: (
      <svg className="w-10 h-10 text-[#EA580C]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="16" height="24" rx="3" fill="#FFF7ED" />
        <rect x="18" y="6" width="16" height="24" rx="3" fill="#FFF7ED" />
        <line x1="11" y1="14" x2="17" y2="14" />
        <line x1="23" y1="10" x2="29" y2="10" />
        <circle cx="14" cy="30" r="1.5" fill="currentColor" />
        <circle cx="26" cy="26" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    step: '04',
    titleLine1: 'Changes And',
    titleLine2: 'Confirmation',
    desc: "Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.",
    bg: 'bg-[#FEF8DB] border-[#F7EDB3]',
    icon: (
      <svg className="w-10 h-10 text-[#D97706]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8a12 12 0 1 1-8.5 3.5" />
        <path d="M11.5 7v5h5" />
        <circle cx="20" cy="20" r="6" />
        <path d="M20 11v3" />
        <path d="M20 26v3" />
        <path d="M11 20h3" />
        <path d="M26 20h3" />
      </svg>
    )
  }
];

const defaultBottomRowSteps = [
  {
    step: '08',
    titleLine1: 'SEO',
    titleLine2: '',
    desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing keyword strategy...',
    bg: 'bg-[#EFF6CD] border-[#E2EEA5]',
    icon: (
      <svg className="w-10 h-10 text-[#84CC16]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="11" fill="#F7FEE7" />
        <line x1="25" y1="25" x2="35" y2="35" strokeWidth="3.5" />
        <text x="17" y="21" textAnchor="middle" fontSize="9" fontWeight="900" fill="currentColor" stroke="none">SEO</text>
      </svg>
    )
  },
  {
    step: '07',
    titleLine1: 'Support And',
    titleLine2: 'Maintenance',
    desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages for maintenance...',
    bg: 'bg-[#F2E4F9] border-[#E6CDFA]',
    icon: (
      <svg className="w-10 h-10 text-[#A855F7]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="28" height="22" rx="3" fill="#FAF5FF" />
        <line x1="6" y1="12" x2="34" y2="12" />
        <circle cx="10" cy="9" r="1" fill="currentColor" />
        <circle cx="14" cy="9" r="1" fill="currentColor" />
        <circle cx="18" cy="9" r="1" fill="currentColor" />
        <path d="M16 20l4-4a2 2 0 0 1 3 3l-4 4" />
      </svg>
    )
  },
  {
    step: '06',
    titleLine1: 'Deployment',
    titleLine2: '',
    desc: 'We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in...',
    bg: 'bg-[#E1F7F9] border-[#BBEFF3]',
    icon: (
      <svg className="w-10 h-10 text-[#06B6D4]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="24" height="18" rx="2" fill="#ECFEFF" />
        <path d="M4 30h32" />
        <path d="M20 11c3 0 5 2 5 5v3h-10v-3c0-3 2-5 5-5z" />
        <path d="M17 22l3 3 3-3" />
      </svg>
    )
  },
  {
    step: '05',
    titleLine1: 'Development',
    titleLine2: '',
    desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as...',
    bg: 'bg-[#FBE4EC] border-[#F8BBD0]',
    icon: (
      <svg className="w-10 h-10 text-[#EC4899]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="28" height="22" rx="3" fill="#FDF2F8" />
        <line x1="6" y1="12" x2="34" y2="12" />
        <circle cx="10" cy="9" r="1" fill="currentColor" />
        <circle cx="14" cy="9" r="1" fill="currentColor" />
        <circle cx="18" cy="9" r="1" fill="currentColor" />
        <path d="M14 17l-3 3 3 3" />
        <path d="M26 17l3 3-3 3" />
        <path d="M21 16l-2 7" />
      </svg>
    )
  }
];

export const WorkProcessGrid = ({ data }) => {
  const title = data?.title || 'Work Process';
  const description = data?.description || 'A systematic, milestone-driven development process engineered to maximize delivery speed, quality, and business value.';

  let topRow = defaultTopRowSteps;
  let bottomRow = defaultBottomRowSteps;

  if (data?.steps && Array.isArray(data.steps) && data.steps.filter(s => s.isActive !== false).length > 0) {
    const activeSteps = data.steps.filter(s => s.isActive !== false);
    const half = Math.ceil(activeSteps.length / 2);
    topRow = activeSteps.slice(0, half);
    // Reverse bottom row for serpentine flow or keep standard
    bottomRow = activeSteps.slice(half);
  }

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative font-sans overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Top Row Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topRow.map((stepItem, idx) => {
            const stepNum = stepItem.step || `0${idx + 1}`;
            const title1 = stepItem.titleLine1 || stepItem.title?.split(' ')[0] || stepItem.title || 'Phase';
            const title2 = stepItem.titleLine2 || (stepItem.title?.split(' ').slice(1).join(' ')) || '';
            const desc = stepItem.desc || stepItem.description || '';
            const bgClass = stepItem.bg || defaultTopRowSteps[idx % defaultTopRowSteps.length].bg;

            return (
              <div
                key={idx}
                className={`rounded-[20px] p-6 border ${bgClass} flex flex-col justify-between h-[280px] shadow-sm hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/80 rounded-2xl shadow-xs">
                    {stepItem.icon || defaultTopRowSteps[idx % defaultTopRowSteps.length].icon}
                  </div>
                  <span className="text-[28px] font-[900] text-slate-900/40 font-mono tracking-tighter">
                    {stepNum}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-[18px] font-[800] text-slate-900 leading-tight">
                    {title1} {title2 && <span className="block">{title2}</span>}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomRow.map((stepItem, idx) => {
            const stepNum = stepItem.step || `0${idx + 5}`;
            const title1 = stepItem.titleLine1 || stepItem.title?.split(' ')[0] || stepItem.title || 'Phase';
            const title2 = stepItem.titleLine2 || (stepItem.title?.split(' ').slice(1).join(' ')) || '';
            const desc = stepItem.desc || stepItem.description || '';
            const bgClass = stepItem.bg || defaultBottomRowSteps[idx % defaultBottomRowSteps.length].bg;

            return (
              <div
                key={idx}
                className={`rounded-[20px] p-6 border ${bgClass} flex flex-col justify-between h-[280px] shadow-sm hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/80 rounded-2xl shadow-xs">
                    {stepItem.icon || defaultBottomRowSteps[idx % defaultBottomRowSteps.length].icon}
                  </div>
                  <span className="text-[28px] font-[900] text-slate-900/40 font-mono tracking-tighter">
                    {stepNum}
                  </span>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="text-[18px] font-[800] text-slate-900 leading-tight">
                    {title1} {title2 && <span className="block">{title2}</span>}
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed line-clamp-3">
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
