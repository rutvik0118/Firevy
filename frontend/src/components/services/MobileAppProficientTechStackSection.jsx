import React from 'react';
import Container from '../common/Container';

const techStackData = [
  {
    category: 'iOS',
    items: ['Swift', 'Objective-C', 'X-Code', 'SwiftUI']
  },
  {
    category: 'Android',
    items: ['Java', 'Kotlin', 'Android Studio', 'Version control tools (Git, GitLab, Bit Bucket)']
  },
  {
    category: 'Cross Platform',
    items: ['Flutter', 'React Native', 'Ionic', 'NativeScript']
  },
  {
    category: 'Database',
    items: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
  },
  {
    category: 'Design Tool',
    items: ['Figma', 'Sketch', 'Adobe XD', 'Zeplin', 'Photoshop', 'Illustrator', 'After Effects', 'InVision']
  }
];

export const MobileAppProficientTechStackSection = ({
  title = 'Technology Stack That Sapphire Mobile Developers Use Proficiently'
}) => {
  return (
    <section className="py-10 sm:py-14 bg-white font-sans text-left">
      <Container className="max-w-6xl">
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight text-center"
            style={{ fontSize: '32px' }}
          >
            {title}
          </h2>
        </div>

        {/* Tech Stack Rows Container */}
        <div className="space-y-3 sm:space-y-3.5 max-w-5xl mx-auto mb-8 sm:mb-9">
          {techStackData.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-stretch rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-2xs border border-slate-200/60 transition-all hover:shadow-xs"
            >
              {/* Left Category Header Pill / Box */}
              <div className="w-full sm:w-[200px] lg:w-[220px] shrink-0 bg-[#005F96] text-white px-5 py-3.5 sm:py-4 flex items-center justify-start sm:justify-start font-[700] text-[14.5px] sm:text-[15.5px] tracking-wide leading-snug">
                <span>{row.category}</span>
              </div>

              {/* Right Badges Container */}
              <div className="flex-1 bg-[#EAF3F7] p-2.5 sm:p-3.5 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {row.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="bg-white text-[#1E293B] text-[12.5px] sm:text-[13px] font-[600] px-3.5 py-1.5 rounded-[6px] shadow-2xs border border-slate-100/90 hover:border-[#005F96]/30 hover:text-[#005F96] transition-all cursor-default select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] sm:text-[15px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Share Your Requirement
          </a>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppProficientTechStackSection;
