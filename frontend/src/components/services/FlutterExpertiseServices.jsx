import React, { useState, useEffect, useRef } from 'react';

const flutterExpertiseCards = [
  {
    title: 'Flutter UI/UX Design',
    desc: 'Our creative UI/UX design team crafts bespoke, interactive, and responsive widget-driven Flutter interfaces that deliver the ultimate user experience of global standard.'
  },
  {
    title: 'Flutter Consultation',
    desc: 'Consult with our Flutter specialists to determine how to best integrate Flutter into your company plan. We provide startups and large businesses with excellent Flutter app consulting services.'
  },
  {
    title: 'Cross-Platform App Development',
    desc: 'Our Flutter app developers create cross-platform applications of the highest caliber that function smoothly across a range of devices, saving you both money and time.'
  },
  {
    title: 'Enterprises App Development',
    desc: 'For big businesses, our Flutter app developers design incredibly engaging, reliable, scalable, and safe mobile apps.'
  },
  {
    title: 'Maintenance & Support',
    desc: "By keeping an eye on your app's performance and offering regular updates and support, our committed Flutter app developers and support staff provides round-the-clock maintenance services."
  },
  {
    title: 'Flutter App Upgrade & Migration',
    desc: 'Our Flutter app migration team upgrades your existing native or hybrid apps to the latest Flutter version, language features, and architecture seamlessly.'
  },
  {
    title: 'Flutter App Testing & QA',
    desc: 'We perform rigorous automated unit, widget, and integration testing across real Android and iOS devices to guarantee zero downtime and smooth performance.'
  }
];

export const FlutterExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flutterExpertiseCards.length);
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
      className="pt-6 pb-8 sm:pt-8 sm:pb-10 bg-white font-sans w-full overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-6 sm:mb-8">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3"
          style={{ fontSize: '32px' }}
        >
          Flutter Application Development Services
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
          We offer end-to-end Flutter app development services everything from a{' '}
          <span className="font-bold text-[#005F96] hover:underline cursor-pointer">
            cross platform app development services
          </span>{' '}
          business idea, deployment and support.
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel with exact Card Size & Layout */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {flutterExpertiseCards.map((card, idx) => (
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

export default FlutterExpertiseServices;
