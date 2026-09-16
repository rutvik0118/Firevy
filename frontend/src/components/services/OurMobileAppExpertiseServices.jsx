import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const expertiseCards = [
  {
    title: 'Android App Development',
    desc: 'We create Android App Development company with visually compelling UI, quick response times, and consistent performance across all Android devices.'
  },
  {
    title: 'iOS App Development',
    desc: 'We create iOS App Development company with fresh concepts, a straightforward GUI and interactive elements to help users reach out to you in a convenient way.'
  },
  {
    title: 'Flutter App Development',
    desc: 'Our team can develop Flutter App Development Company for your business that will help you save money, time while providing you with visually appealing native apps to boost ROI.'
  },
  {
    title: 'Cross-Platform Mobile Apps',
    desc: 'Our team combines transparency, features, and sensitive interfaces by leveraging the best cross-platform development such as Ionic, Xamarin, and others.'
  },
  {
    title: 'React Native App Development',
    desc: 'With extensive experience in React Native app development, our developers build high-performing, fluid cross-platform mobile apps for iOS and Android.'
  },
  {
    title: 'Wearable & IoT App Development',
    desc: 'Our team develops smart connected applications for Apple Watch, WearOS, and embedded IoT devices to boost user engagement and streamline operations.'
  }
];

export const OurMobileAppExpertiseServices = () => {
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
      const firstCard = scrollContainerRef.current.querySelector('.expertise-slider-card');
      const cardStep = firstCard ? firstCard.offsetWidth + 24 : 380;
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
      {/* Header Container matching screenshot 1:1 */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-2.5"
          style={{ fontSize: '32px' }}
        >
          Our Expertise in Mobile App Development Services
        </h2>
        <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          We specialize in top mobile app development services for every industry type and size. Our expertise includes:
        </p>
      </div>

      {/* Horizontal Carousel Container matching screenshot 1:1 */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-4 sm:px-8 md:px-12 lg:px-16 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="expertise-slider-card w-[340px] sm:w-[390px] lg:w-[420px] shrink-0 bg-[#E1F3FD] rounded-[14px] sm:rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[#CEE9FA] select-none min-h-[210px] sm:min-h-[220px] transition-all duration-300 hover:shadow-md"
            >
              <div>
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2.5 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#334155] leading-[1.62] text-left font-normal">
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

export default OurMobileAppExpertiseServices;
