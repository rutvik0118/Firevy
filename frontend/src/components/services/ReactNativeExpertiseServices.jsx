import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'React Native Consulting',
    desc: 'Our consulting helps you select right development framework and strategy to launch a perfect React Native app with the right list of features.'
  },
  {
    title: 'React Native App Development',
    desc: 'We ensure everything from UI/UX design, development, testing to validating the app for the top quality.'
  },
  {
    title: 'React Native UI/UX Design App Development',
    desc: 'Our creative React Native UI/UX designers design visually beautiful and easy to access applications with flexible user interface.'
  },
  {
    title: 'Cross-Platform App Development',
    desc: 'Our React Native experts build high-performance applications of exceptional quality running smoothly across iOS and Android, which saves time and costs.'
  },
  {
    title: 'React Native App Migration & Upgrade',
    desc: 'Upgrade existing legacy applications or migrate from native iOS/Android to React Native with zero data loss and enhanced speed.'
  },
  {
    title: 'React Native Support & Maintenance',
    desc: 'Comprehensive post-launch monitoring, OS updates, performance tuning, and 24/7 technical support for flawless uptime.'
  },
  {
    title: 'Custom SDK & Native Bridge Integration',
    desc: 'We build custom native bridge modules, third-party SDK integrations, and specialized plugins tailored to your app requirements.'
  }
];

export const ReactNativeExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Smooth scroll sync
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardStep = 475; // wider card width + gap
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="pt-6 pb-9 sm:pt-8 sm:pb-11 bg-white font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-7 sm:mb-9">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
          style={{ fontSize: '32px' }}
        >
          Our React Native App Development Services
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
          We go beyond just React Native development services and provide end-to-end mobility solutions that provide to the changing needs of ever-evolving businesses.
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel with Wider Cards */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="w-[380px] sm:w-[420px] lg:w-[450px] shrink-0 bg-[#E3F2FD] rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs border border-[#D0EBFB] select-none min-h-[220px] sm:min-h-[230px] transition-all duration-300 hover:shadow-md hover:bg-[#DBEEFA]"
            >
              <div>
                <h3 className="font-[800] text-[16.5px] sm:text-[18px] text-[#0B0F19] mb-2.5 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#334155] leading-[1.6] text-left font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3.5 text-left">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[12px] sm:text-[12.5px] transition-all shadow-2xs cursor-pointer"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactNativeExpertiseServices;
