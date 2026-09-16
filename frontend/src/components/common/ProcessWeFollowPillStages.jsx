import React from 'react';
import Container from './Container';

export const ProcessWeFollowPillStages = ({ title = 'Process We Follow', subtitle }) => {
  const stages = [
    {
      name: 'Discover',
      titleColor: 'text-[#8B3BE2]',
      // Transparent pastel purple with mix-blend
      bgColor: 'bg-[#F4E8FD]/80',
      items: [
        'Brainstorming',
        'Hypothesis',
        'Conceptualization',
        'Assumptions',
        'Constraints',
        'NDA'
      ]
    },
    {
      name: 'Define',
      titleColor: 'text-[#0284C7]',
      // Transparent pastel sky blue
      bgColor: 'bg-[#DAF1FC]/80',
      items: [
        'Req. Definition',
        'SRS Document',
        'Project Planning',
        'Dev. Planning',
        'Milestones'
      ]
    },
    {
      name: 'Design',
      titleColor: 'text-[#16A34A]',
      // Transparent pastel light green
      bgColor: 'bg-[#DCFCE7]/80',
      items: [
        'Brainstorming',
        'Hypothesis',
        'Conceptualization',
        'Assumptions',
        'Constraints'
      ]
    },
    {
      name: 'Develop',
      titleColor: 'text-[#D97706]',
      // Transparent pastel amber/cream
      bgColor: 'bg-[#FEF0D8]/80',
      items: [
        'Coding',
        'APIs',
        'Testing / QA',
        'Debug',
        'Change Mgmt'
      ]
    },
    {
      name: 'Deliver',
      titleColor: 'text-[#E11D48]',
      // Transparent pastel rose pink
      bgColor: 'bg-[#FDE4E8]/80',
      items: [
        'Environment',
        'Deployment',
        'Migration',
        'Support',
        'Review'
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 relative font-sans border-t border-slate-100/80">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[800] text-slate-950 tracking-tight leading-tight font-sans">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] sm:text-[15px] text-slate-600 mt-2 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* 5 Overlapping Translucent Venn Pill Cards with mix-blend-multiply */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center -space-y-4 md:-space-y-0 md:-space-x-10 lg:-space-x-12 xl:-space-x-14 max-w-7xl mx-auto py-6 overflow-x-auto no-scrollbar">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className={`w-full sm:w-[280px] md:w-[245px] lg:w-[265px] xl:w-[280px] h-[315px] sm:h-[330px] rounded-[38px] sm:rounded-[44px] py-9 px-6 sm:px-7 ${stage.bgColor} mix-blend-multiply flex flex-col items-center justify-start text-center transition-all duration-300 hover:scale-105 shrink-0 select-none shadow-2xs`}
            >
              {/* Stage Title */}
              <h3 className={`text-[20px] sm:text-[22px] font-[800] ${stage.titleColor} mb-4 font-sans tracking-tight`}>
                {stage.name}
              </h3>

              {/* Stage Items */}
              <ul className="space-y-2 text-[13px] sm:text-[13.5px] font-[600] text-slate-800 font-sans leading-relaxed">
                {stage.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProcessWeFollowPillStages;
