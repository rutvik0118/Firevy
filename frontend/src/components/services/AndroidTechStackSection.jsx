import React from 'react';
import Container from '../common/Container';

const techStackData = [
  {
    category: 'Programming Languages',
    items: ['Kotlin', 'JAVA']
  },
  {
    category: 'Frameworks',
    items: ['React Native', 'Flutter', 'Ionic']
  },
  {
    category: 'Plugins & Libraries',
    items: [
      'Jetpack components',
      'Activity',
      'Databinding',
      'Android lifecycle',
      'Material Design Components',
      'Compose',
      'Navigation',
      'Work manager',
      'Espresso: UI test',
      'Junit: Function test',
      'Retrofit 2.0',
      'Jackson',
      'Kotlin serialization',
      'ExoPlayer'
    ]
  },
  {
    category: 'Local Database',
    items: ['SQLite Database', 'Room persistence library']
  },
  {
    category: 'Tools & Utilities',
    items: [
      'Android Studio IDE',
      'Android Emulator',
      'LeakCanary',
      'Vysor',
      'Zeplin',
      'Figma',
      'Jira'
    ]
  }
];

export const AndroidTechStackSection = () => {
  return (
    <section className="pt-7 pb-5 sm:pt-9 sm:pb-6 bg-white font-sans">
      <Container className="max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight text-center"
            style={{ fontSize: '30px' }}
          >
            Technology Stack We Use For Android Application<br className="hidden sm:inline" /> Development
          </h2>
        </div>

        {/* Tech Stack Rows Container */}
        <div className="space-y-3 sm:space-y-3.5 max-w-5xl mx-auto mb-6 sm:mb-7">
          {techStackData.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-stretch rounded-[8px] sm:rounded-[10px] overflow-hidden shadow-2xs border border-slate-200/60 transition-all hover:shadow-xs"
            >
              {/* Left Category Header Pill / Box */}
              <div className="w-full sm:w-[220px] lg:w-[240px] shrink-0 bg-[#005F96] text-white px-5 py-3.5 sm:py-4 flex items-center justify-start sm:justify-start font-[700] text-[14px] sm:text-[15px] tracking-wide leading-snug">
                <span>{row.category}</span>
              </div>

              {/* Right Badges Container */}
              <div className="flex-1 bg-[#E7F3F9] p-3 sm:p-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {row.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="bg-white text-[#1E293B] text-[12.5px] sm:text-[13px] font-[600] px-3.5 py-1.5 rounded-[5px] shadow-2xs border border-slate-100/90 hover:border-[#005F96]/30 hover:text-[#005F96] transition-all cursor-default select-none"
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
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] sm:text-[15px] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            Share Your Requirement
          </a>
        </div>
      </Container>
    </section>
  );
};

export default AndroidTechStackSection;
