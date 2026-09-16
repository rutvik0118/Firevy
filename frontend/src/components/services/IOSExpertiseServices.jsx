import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'Custom iPhone App Development',
    desc: 'Our expert iOS app developers build tailored, scalable iPhone applications that handle large datasets and complex requirements within your budget.'
  },
  {
    title: 'iOS Enterprise App Development',
    desc: 'Firevy, a leading iOS app development company has an expert team of iPhone app developers working on latest technologies.'
  },
  {
    title: 'iPhone App UI/UX Design App Development',
    desc: 'Our team has extensive experience of developing and delivering enterprise iPhone applications for Fortune 500 companies.'
  },
  {
    title: 'iOS App Support And Maintenance',
    desc: 'Our creative iPhone UI/UX designer have knowledge and expertise to design visually beautiful UI/UX for your applications.'
  },
  {
    title: 'iOS App Migration & Upgrades',
    desc: 'We modernize legacy applications to Swift, SwiftUI, and the latest iOS SDKs with zero data loss and seamless App Store transitions.'
  },
  {
    title: 'iOS App Testing & QA',
    desc: 'We perform comprehensive manual and automated testing on real Apple devices to ensure high performance, security, and flawless user experience.'
  }
];

export const IOSExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Smooth scroll sync
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardStep = 410; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="py-10 sm:py-14 bg-white font-sans w-full overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-10 sm:mb-12">
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
          Our Expertise in iOS App Development
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          Years of expertise, skilled crew, and dedication to iOS app development. Our expertise in iOS mobile app development services include:
        </p>
      </div>

      {/* Edge-to-edge Carousel with Cards */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[360px] lg:w-[390px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#D0EBFB] select-none min-h-[230px] sm:min-h-[240px] transition-all duration-300 hover:shadow-md"
            >
              <div>
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-3 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.62] text-left font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 text-left">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-[5px] bg-[#007AB8] hover:bg-[#006294] text-white font-[700] text-[13px] transition-all shadow-xs cursor-pointer"
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

export default IOSExpertiseServices;
