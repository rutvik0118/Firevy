import React, { useState, useEffect, useRef } from 'react';

const hybridExpertiseCards = [
  {
    id: 1,
    title: 'Flutter App Development',
    desc: 'We assist in the development of sturdy flutter based mobile apps. Our developers can assist you at every stage, from ideation to product launch, and create the most significant end-user experience possible.'
  },
  {
    id: 2,
    title: 'Hybrid App Design',
    desc: 'Our team of software engineers and professional UI and UX designers create hybrid apps, and they have a wealth of experience creating engaging, user-centered designs that are aesthetically beautiful and functional.'
  },
  {
    id: 3,
    title: 'Native React App',
    desc: 'You can build intelligent, user-friendly, scalable, and feature-rich cross-platform apps using our React Native app development services. This helps you to strengthen your vision and hasten business growth.'
  },
  {
    id: 4,
    title: 'PhoneGap App Development',
    desc: 'We provide custom hybrid mobile app development services to construct feature-rich, high-performance, and scalable cross-platform mobile applications that enable you to maximize ROI and achieve your business goals.'
  },
  {
    id: 5,
    title: 'Ionic App Development',
    desc: 'Leverage the power of Ionic framework to build cross-platform mobile, web, and desktop apps with a single codebase, delivering native performance and modern UI capabilities.'
  },
  {
    id: 6,
    title: 'Hybrid App Migration & Support',
    desc: 'Seamlessly migrate your legacy mobile apps to modern hybrid frameworks with zero downtime, and get 24/7 post-launch maintenance, performance monitoring, and regular upgrades.'
  },
  {
    id: 7,
    title: 'Custom Hybrid App Integration',
    desc: 'Upgrade your current app or construct an app with any third-party integrations. Our hybrid app developers create secure, feature-rich solutions tailored for your business.'
  }
];

export const HybridAppExpertiseServices = ({
  title = "The Expertise In Our Hybrid App Development Services",
  subtitle = "As a famous hybrid app development company, we create different types of hybrid applications in less time. Their expertise includes:",
  cards = hybridExpertiseCards,
  showButton = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  const activeCards = cards || hybridExpertiseCards;

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, activeCards.length]);

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
      className="pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white font-sans w-full overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
          style={{ fontSize: '32px' }}
        >
          {title}
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          {subtitle}
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel with Light Blue Cards */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {activeCards.map((card) => (
            <div
              key={card.id}
              className="w-[310px] sm:w-[350px] lg:w-[385px] shrink-0 bg-[#DDF1FC] rounded-[10px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs border border-[#CCE8F7] select-none min-h-[220px] sm:min-h-[235px] transition-all duration-300 hover:shadow-md"
            >
              <div>
                <h3 className="font-[800] text-[16.5px] sm:text-[18px] text-[#0B0F19] mb-2.5 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#334155] leading-[1.6] text-left font-normal">
                  {card.desc}
                </p>
              </div>

              {showButton && (
                <div className="pt-4 text-left">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center px-5 py-2 rounded-[5px] bg-[#0078D7] hover:bg-[#005F96] text-white font-[700] text-[12.5px] sm:text-[13px] transition-all shadow-2xs cursor-pointer"
                  >
                    View More
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HybridAppExpertiseServices;
