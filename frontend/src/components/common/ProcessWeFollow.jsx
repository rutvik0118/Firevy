import React from 'react';
import Container from './Container';

// Exact Outline SVG Icons from Reference
const RequirementIcon = () => (
  <svg className="w-9 h-9 text-[#8B5CF6]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 24 8 C 16 8 11 14 11 21 C 11 26 14 30 17 32.5 V 36 H 31 V 32.5 C 34 30 37 26 37 21 C 37 14 32 8 24 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 20 40 H 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 24 3 V 5 M 10 10 L 12 12 M 38 10 L 36 12 M 7 21 H 9 M 39 21 H 41" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-9 h-9 text-[#10B981]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 14 34 L 34 14 L 28 8 L 8 28 V 34 H 14 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="34" cy="14" r="4" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="14" cy="34" r="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M 20 14 L 30 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const PrototypeIcon = () => (
  <svg className="w-9 h-9 text-[#F97316]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="14" width="16" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <rect x="23" y="10" width="16" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="31" cy="29" r="2" fill="currentColor" />
  </svg>
);

const ChangesIcon = () => (
  <svg className="w-9 h-9 text-[#F59E0B]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 24 8 A 16 16 0 1 0 40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3" />
    <path d="M 34 8 L 40 8 L 40 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg className="w-9 h-9 text-[#EC4899]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <path d="M 16 18 L 12 21 L 16 24 M 32 18 L 36 21 L 32 24 M 26 17 L 22 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 16 38 H 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const DeploymentIcon = () => (
  <svg className="w-9 h-9 text-[#06B6D4]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 24 8 L 32 20 C 32 28 28 34 24 38 C 20 34 16 28 16 20 L 24 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="21" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M 16 28 L 10 30 L 14 22 M 32 28 L 38 30 L 34 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-9 h-9 text-[#A855F7]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <path d="M 16 38 L 20 30 H 28 L 32 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 22 17 L 26 21 M 26 17 L 22 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SeoIcon = () => (
  <svg className="w-9 h-9 text-[#84CC16]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="2.5" />
    <line x1="29" y1="29" x2="39" y2="39" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M 15 20 H 25 M 20 15 V 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const topSteps = [
  {
    step: '01',
    title: 'Requirement Gathering',
    desc: 'Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.',
    icon: RequirementIcon,
    bgColor: 'bg-[#EDE9FE]',
    borderColor: 'border-[#DDD6FE]',
    ringColor: '#8B5CF6'
  },
  {
    step: '02',
    title: 'Designs, Wireframes, & Mockups',
    desc: 'We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.',
    icon: DesignIcon,
    bgColor: 'bg-[#DCFCE7]',
    borderColor: 'border-[#BBF7D0]',
    ringColor: '#10B981'
  },
  {
    step: '03',
    title: 'Prototype Demo',
    desc: 'After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.',
    icon: PrototypeIcon,
    bgColor: 'bg-[#FFEDD5]',
    borderColor: 'border-[#FED7AA]',
    ringColor: '#F97316'
  },
  {
    step: '04',
    title: 'Changes And Confirmation',
    desc: 'Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We\'ll proceed with client\'s confirmation on the same.',
    icon: ChangesIcon,
    bgColor: 'bg-[#FEF3C7]',
    borderColor: 'border-[#FDE68A]',
    ringColor: '#F59E0B'
  }
];

const bottomSteps = [
  {
    step: '08',
    title: 'SEO',
    desc: 'We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.',
    icon: SeoIcon,
    bgColor: 'bg-[#ECFCCB]',
    borderColor: 'border-[#D9F99D]',
    ringColor: '#84CC16'
  },
  {
    step: '07',
    title: 'Support And Maintenance',
    desc: 'We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement',
    icon: SupportIcon,
    bgColor: 'bg-[#F3E8FF]',
    borderColor: 'border-[#DDD6FE]',
    ringColor: '#A855F7'
  },
  {
    step: '06',
    title: 'Deployment',
    desc: 'We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client\'s platform.',
    icon: DeploymentIcon,
    bgColor: 'bg-[#E0F2FE]',
    borderColor: 'border-[#BAE6FD]',
    ringColor: '#06B6D4'
  },
  {
    step: '05',
    title: 'Development',
    desc: 'With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.',
    icon: DevelopmentIcon,
    bgColor: 'bg-[#FCE7F3]',
    borderColor: 'border-[#FBCFE8]',
    ringColor: '#EC4899'
  }
];

export const ProcessWeFollow = () => {
  return (
    <section className="pt-12 pb-6 sm:pb-8 bg-white text-slate-900 border-b border-slate-200 text-left">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            Process We Follow
          </h2>
        </div>

        {/* 8-Step Timeline Flow Grid */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          
          {/* Top Row: Steps 01, 02, 03, 04 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-2xl ${item.bgColor} border ${item.borderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group`}
                >
                  <div>
                    {/* Top Header: Icon Left & Giant Step Number Right */}
                    <div className="flex items-start justify-between mb-4">
                      <IconComp />
                      <span className="text-3xl sm:text-4xl font-black text-slate-800 font-sans tracking-tight leading-none">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-sans leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13.5px] text-slate-700 leading-[1.65] font-normal font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle Connecting Racetrack Graphic (Desktop Only) */}
          <div className="hidden lg:block relative py-2 my-1">
            <svg className="w-full h-24 overflow-visible" viewBox="0 0 1000 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Racetrack Rounded Rectangle Loop Track */}
              <rect x="25" y="20" width="950" height="40" rx="20" stroke="#CBD5E1" strokeWidth="2" fill="none" />

              {/* --- TOP ROW CONNECTORS & NODES --- */}
              {/* Step 01 Down Arrow & Node (X: 125) */}
              <line x1="125" y1="0" x2="125" y2="15" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 121 13 L 125 19 L 129 13" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="125" cy="20" r="5" fill="white" stroke="#8B5CF6" strokeWidth="3" />

              {/* Step 02 Down Arrow & Node (X: 375) */}
              <line x1="375" y1="0" x2="375" y2="15" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 371 13 L 375 19 L 379 13" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="375" cy="20" r="5" fill="white" stroke="#10B981" strokeWidth="3" />

              {/* Step 03 Down Arrow & Node (X: 625) */}
              <line x1="625" y1="0" x2="625" y2="15" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 621 13 L 625 19 L 629 13" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="625" cy="20" r="5" fill="white" stroke="#F97316" strokeWidth="3" />

              {/* Step 04 Down Arrow & Node (X: 875) */}
              <line x1="875" y1="0" x2="875" y2="15" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 871 13 L 875 19 L 879 13" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="875" cy="20" r="5" fill="white" stroke="#F59E0B" strokeWidth="3" />

              {/* Track Directional Arrowheads (Top Line Right Arrows ►) */}
              <path d="M 245 16 L 253 20 L 245 24" fill="#CBD5E1" />
              <path d="M 495 16 L 503 20 L 495 24" fill="#CBD5E1" />
              <path d="M 745 16 L 753 20 L 745 24" fill="#CBD5E1" />

              {/* --- BOTTOM ROW CONNECTORS & NODES --- */}
              {/* Step 08 Up Arrow & Node (X: 125) */}
              <line x1="125" y1="65" x2="125" y2="80" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 121 67 L 125 61 L 129 67" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="125" cy="60" r="5" fill="white" stroke="#84CC16" strokeWidth="3" />

              {/* Step 07 Up Arrow & Node (X: 375) */}
              <line x1="375" y1="65" x2="375" y2="80" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 371 67 L 375 61 L 379 67" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="375" cy="60" r="5" fill="white" stroke="#A855F7" strokeWidth="3" />

              {/* Step 06 Up Arrow & Node (X: 625) */}
              <line x1="625" y1="65" x2="625" y2="80" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 621 67 L 625 61 L 629 67" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="625" cy="60" r="5" fill="white" stroke="#06B6D4" strokeWidth="3" />

              {/* Step 05 Up Arrow & Node (X: 875) */}
              <line x1="875" y1="65" x2="875" y2="80" stroke="#CBD5E1" strokeWidth="2" />
              <path d="M 871 67 L 875 61 L 879 67" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="875" cy="60" r="5" fill="white" stroke="#EC4899" strokeWidth="3" />

              {/* Track Directional Arrowheads (Bottom Line Left Arrows ◄) */}
              <path d="M 755 56 L 747 60 L 755 64" fill="#CBD5E1" />
              <path d="M 505 56 L 497 60 L 505 64" fill="#CBD5E1" />
              <path d="M 255 56 L 247 60 L 255 64" fill="#CBD5E1" />
            </svg>
          </div>

          {/* Bottom Row: Steps 08, 07, 06, 05 (Arranged 08 under 01, 07 under 02, 06 under 03, 05 under 04) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bottomSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-2xl ${item.bgColor} border ${item.borderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group`}
                >
                  <div>
                    {/* Top Header: Icon Left & Giant Step Number Right */}
                    <div className="flex items-start justify-between mb-4">
                      <IconComp />
                      <span className="text-3xl sm:text-4xl font-black text-slate-800 font-sans tracking-tight leading-none">
                        {item.step}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-sans leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13.5px] text-slate-700 leading-[1.65] font-normal font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ProcessWeFollow;
