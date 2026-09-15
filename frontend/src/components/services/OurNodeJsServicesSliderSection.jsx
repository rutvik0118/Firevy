import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const OurNodeJsServicesSliderSection = () => {
  const cards = [
    {
      title: 'Node Js Application Migration',
      desc: 'Migrate any existing framework application like .Net, PHP, JAVA to Node.js and leverage the benefits of our expertise.'
    },
    {
      title: 'Node JS Maintenance And Support',
      desc: 'Complete support and maintenance services to ensure regular update, scaling and performance of Node.js applications.'
    },
    {
      title: 'Node.Js Custom Development',
      desc: 'We develop customized, high performing, scalable, secure and UI rich business apps for our clients to fit your business needs.'
    },
    {
      title: 'Node.Js Consulting Services',
      desc: 'We provide cost-effective Node.js Consulting Services all across the world based on your project specifications and requirements.'
    },
    {
      title: 'Node.Js API Integration & Microservices',
      desc: 'Build high-throughput RESTful & GraphQL APIs with lightweight microservices architecture for massive concurrent user scale.'
    },
    {
      title: 'Real-Time Application Development',
      desc: 'Develop real-time data streaming, live collaboration, WebSockets, and connected IoT telemetry solutions powered by Node.js Google V8.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, cards.length]);

  // Smooth scroll sync
  useEffect(() => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.service-slider-card');
      const cardWidth = firstCard ? firstCard.offsetWidth : 460;
      const gap = 24;
      const cardStep = cardWidth + gap;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="py-10 sm:py-14 lg:py-16 bg-white font-sans w-full overflow-hidden text-left border-b border-slate-100 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-7 sm:mb-9">
        <h2 className="font-[800] text-2xl sm:text-3xl lg:text-[34px] text-[#0B0F19] tracking-tight leading-tight mb-2.5">
          Our Node.JS Development Services
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
          We combine technology expertise to provide Node Js Application development services to accomplish business objectives.
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel with exact Card Size & Layout */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-24 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="service-slider-card w-[340px] sm:w-[420px] lg:w-[460px] shrink-0 bg-[#DDF1FC] rounded-[14px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs border border-[#CCE8F7] select-none min-h-[220px] sm:min-h-[230px] transition-all duration-300 hover:shadow-md"
            >
              <div>
                <h3 className="font-[800] text-[16px] sm:text-[17.5px] text-[#0B0F19] mb-2.5 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12px] sm:text-[12.8px] text-[#334155] leading-[1.6] text-left font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 text-left">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-1.5 sm:py-2 rounded-[4px] bg-[#0078D7] hover:bg-[#005F96] text-white font-[700] text-[12px] sm:text-[12.5px] transition-all shadow-2xs cursor-pointer active:scale-95"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurNodeJsServicesSliderSection;
