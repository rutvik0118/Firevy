import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'Custom Android App Development',
    desc: 'Our expert team of Android app developers provide customizable Android app solutions as per your specific requirements.'
  },
  {
    title: 'Android Consulting',
    desc: 'We validate your business idea by in-depth market analysis and well-researched forecasts and determine best practices to meet your business needs.'
  },
  {
    title: 'Android App UX/UI Design',
    desc: 'Our creative Android UI/UX designer can create interactive UI designs that enhance the user experience for your Android applications.'
  },
  {
    title: 'Android App Support & Maintenance',
    desc: 'Our Android app maintenance services provides regular post-deployment support and maintenance service by monitoring your application and app store support.'
  },
  {
    title: 'Android App Modernization',
    desc: 'Our Android app migration team upgrades your existing Android apps to the latest OS version, language, and architecture seamlessly.'
  },
  {
    title: 'Enterprise Android App Development',
    desc: 'We create scalable, high-grade Android applications tailored for large enterprises that helps to scale operations and modernize legacy systems to meet your business goals.'
  },
  {
    title: 'Android App Testing & QA',
    desc: 'We perform rigorous automated and manual QA testing across multiple Android devices and OS versions to ensure zero defects and rock-solid stability.'
  }
];

export const AndroidExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
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
      const cardStep = 405; // card width + gap
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="pt-5 pb-7 sm:pt-6 sm:pb-9 bg-white font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-6 sm:mb-7">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
          style={{ fontSize: '32px' }}
        >
          Our Expertise in Android App Development Services
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
          With our Android app development experience, we help companies succeed and stand out. Please work with us to create successful, user-friendly Android apps based on your ideas.
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel with exact Card Size & Layout */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-5 sm:p-6 flex flex-col justify-between shadow-2xs border border-[#D0EBFB] select-none h-[210px] sm:h-[220px] transition-all duration-300"
            >
              <div>
                <h3 className="font-[800] text-[16px] sm:text-[17.5px] text-[#0B0F19] mb-2 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12px] sm:text-[12.8px] text-[#334155] leading-[1.55] text-left font-normal line-clamp-3">
                  {card.desc}
                </p>
              </div>

              <div className="pt-2 text-left">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-4 py-1.5 sm:py-2 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[12px] sm:text-[12.5px] transition-all shadow-2xs cursor-pointer"
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

export default AndroidExpertiseServices;
