import React from 'react';

export const WorkProcessGrid = () => {
  const topRowSteps = [
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

  const bottomRowSteps = [
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

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative font-sans">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - 34px Poppins 800 */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 font-sans">
            Process We Follow
          </h2>
        </div>

        {/* Top Row Grid (Steps 01 to 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {topRowSteps.map((item) => (
            <div
              key={item.step}
              className={`rounded-[20px] p-7 border shadow-sm transition-all duration-300 relative text-left flex flex-col justify-between h-[330px] ${item.bg}`}
            >
              <div>
                {/* Icon top-left, Step Number top-right */}
                <div className="flex items-center justify-between mb-4">
                  {item.icon}
                  <span className="text-4xl sm:text-5xl font-[800] text-slate-800/80 font-sans tracking-tight">
                    {item.step}
                  </span>
                </div>
                {/* Title: 18px Poppins 600 */}
                <h3 className="text-[18px] font-[600] text-slate-900 leading-snug mb-3 font-sans">
                  {item.titleLine1}{item.titleLine2 && <><br />{item.titleLine2}</>}
                </h3>
                {/* Description: 15px Poppins 400 */}
                <p className="text-[15px] font-[400] text-slate-700 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Process Timeline (Outer Container + Inner Capsule Path with Card Center Alignment) */}
        <div className="hidden lg:block relative z-20 my-4">
          {/* A) Outer Timeline Container */}
          <div className="w-full bg-white rounded-[20px] border border-slate-200 shadow-sm py-4 px-6 relative">
            {/* B) Inner Process Path & 4-Column Card Grid Overlay */}
            <div className="relative w-full h-16 flex items-center justify-center">
              {/* Inner Capsule Border Line */}
              <div className="absolute inset-x-[12.5%] top-2 bottom-2 border border-slate-200 rounded-[16px] pointer-events-none" />

              {/* Top Track Arrow Line (Left-to-Right --->) */}
              <div className="absolute inset-x-[14%] top-[18px] flex justify-around text-slate-300 text-[10px] pointer-events-none">
                <span>➔</span><span>➔</span><span>➔</span><span>➔</span><span>➔</span><span>➔</span><span>➔</span>
              </div>

              {/* Bottom Track Arrow Line (Right-to-Left <---) */}
              <div className="absolute inset-x-[14%] bottom-[18px] flex justify-around text-slate-300 text-[10px] pointer-events-none">
                <span>⬅</span><span>⬅</span><span>⬅</span><span>⬅</span><span>⬅</span><span>⬅</span><span>⬅</span>
              </div>

              {/* 4-Column Grid Overlay: Guarantees Nodes & Connectors match Card Centers 100%! */}
              <div className="w-full grid grid-cols-4 gap-6 relative z-10 h-full">
                {/* Column 1: Card 01 Center (Top Node) & Card 08 Center (Bottom Node) */}
                <div className="flex flex-col items-center justify-between relative">
                  <div className="absolute -top-4 bottom-1/2 w-0.5 bg-slate-200 flex flex-col justify-end items-center">
                    <span className="text-[9px] text-slate-400 translate-y-1">▼</span>
                  </div>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7C3AED] bg-white z-10 my-auto shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#84CC16] bg-white z-10 my-auto shadow-sm" />
                  <div className="absolute top-1/2 -bottom-4 w-0.5 bg-slate-200 flex flex-col justify-start items-center">
                    <span className="text-[9px] text-slate-400 -translate-y-1">▲</span>
                  </div>
                </div>

                {/* Column 2: Card 02 Center (Top Node) & Card 07 Center (Bottom Node) */}
                <div className="flex flex-col items-center justify-between relative">
                  <div className="absolute -top-4 bottom-1/2 w-0.5 bg-slate-200 flex flex-col justify-end items-center">
                    <span className="text-[9px] text-slate-400 translate-y-1">▼</span>
                  </div>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#16A34A] bg-white z-10 my-auto shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#A855F7] bg-white z-10 my-auto shadow-sm" />
                  <div className="absolute top-1/2 -bottom-4 w-0.5 bg-slate-200 flex flex-col justify-start items-center">
                    <span className="text-[9px] text-slate-400 -translate-y-1">▲</span>
                  </div>
                </div>

                {/* Column 3: Card 03 Center (Top Node) & Card 06 Center (Bottom Node) */}
                <div className="flex flex-col items-center justify-between relative">
                  <div className="absolute -top-4 bottom-1/2 w-0.5 bg-slate-200 flex flex-col justify-end items-center">
                    <span className="text-[9px] text-slate-400 translate-y-1">▼</span>
                  </div>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#EA580C] bg-white z-10 my-auto shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#06B6D4] bg-white z-10 my-auto shadow-sm" />
                  <div className="absolute top-1/2 -bottom-4 w-0.5 bg-slate-200 flex flex-col justify-start items-center">
                    <span className="text-[9px] text-slate-400 -translate-y-1">▲</span>
                  </div>
                </div>

                {/* Column 4: Card 04 Center (Top Node) & Card 05 Center (Bottom Node) */}
                <div className="flex flex-col items-center justify-between relative">
                  <div className="absolute -top-4 bottom-1/2 w-0.5 bg-slate-200 flex flex-col justify-end items-center">
                    <span className="text-[9px] text-slate-400 translate-y-1">▼</span>
                  </div>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#D97706] bg-white z-10 my-auto shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#EC4899] bg-white z-10 my-auto shadow-sm" />
                  <div className="absolute top-1/2 -bottom-4 w-0.5 bg-slate-200 flex flex-col justify-start items-center">
                    <span className="text-[9px] text-slate-400 -translate-y-1">▲</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row Grid (Steps 08, 07, 06, 05 in Col 1, Col 2, Col 3, Col 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {bottomRowSteps.map((item) => (
            <div
              key={item.step}
              className={`rounded-[20px] p-7 border shadow-sm transition-all duration-300 relative text-left flex flex-col justify-between h-[330px] ${item.bg}`}
            >
              <div>
                {/* Icon top-left, Step Number top-right */}
                <div className="flex items-center justify-between mb-4">
                  {item.icon}
                  <span className="text-4xl sm:text-5xl font-[800] text-slate-800/80 font-sans tracking-tight">
                    {item.step}
                  </span>
                </div>
                {/* Title: 18px Poppins 600 */}
                <h3 className="text-[18px] font-[600] text-slate-900 leading-snug mb-3 font-sans">
                  {item.titleLine1}{item.titleLine2 && <><br />{item.titleLine2}</>}
                </h3>
                {/* Description: 15px Poppins 400 */}
                <p className="text-[15px] font-[400] text-slate-700 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessGrid;
