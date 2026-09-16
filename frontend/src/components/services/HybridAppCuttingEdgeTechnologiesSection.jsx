import React, { useState } from 'react';
import Container from '../common/Container';

export const HybridAppCuttingEdgeTechnologiesSection = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Progressive Web App Development Service',
      desc: 'Using HTML5, CSS3, and JavaScript frameworks that run across modern browser engines and mobile webviews, we build high-performance Progressive Web Apps with offline caching and instant load-time.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="4" />
          <path d="M12 14h.01M28 14h.01M12 26h.01M28 26h.01" strokeLinecap="round" />
          <path d="M15 20l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI Development Service',
      desc: 'Unlock the power of artificial intelligence with AI Development Services that helps businesses integrate AI into applications to automate processes, enhance decision-making, and deliver personalized user experiences.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="10" width="20" height="20" rx="3" />
          <circle cx="15" cy="5" r="1.5" fill="#0084D1" />
          <path d="M15 7v3" />
          <circle cx="25" cy="5" r="1.5" fill="#0084D1" />
          <path d="M25 7v3" />
          <circle cx="15" cy="35" r="1.5" fill="#0084D1" />
          <path d="M15 30v3" />
          <circle cx="25" cy="35" r="1.5" fill="#0084D1" />
          <path d="M25 30v3" />
          <circle cx="5" cy="15" r="1.5" fill="#0084D1" />
          <path d="M7 15h3" />
          <circle cx="5" cy="25" r="1.5" fill="#0084D1" />
          <path d="M7 25h3" />
          <circle cx="35" cy="15" r="1.5" fill="#0084D1" />
          <path d="M30 15h3" />
          <circle cx="35" cy="25" r="1.5" fill="#0084D1" />
          <path d="M30 25h3" />
          <text x="13.5" y="23" fontSize="10" fontWeight="bold" fill="#0084D1" stroke="none" fontFamily="sans-serif">AI</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Extended Reality Development Service',
      desc: 'Step into the future with Extended Reality Development Services and create immersive experiences that combine augmented reality (AR), virtual reality (VR), and mixed reality (MR) to engage users like never before.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="5" />
          <circle cx="20" cy="8" r="2" fill="#0084D1" />
          <path d="M20 10v5" />
          <circle cx="20" cy="32" r="2" fill="#0084D1" />
          <path d="M20 25v5" />
          <circle cx="8" cy="20" r="2" fill="#0084D1" />
          <path d="M10 20h5" />
          <circle cx="32" cy="20" r="2" fill="#0084D1" />
          <path d="M25 20h5" />
          <circle cx="11.5" cy="11.5" r="1.5" fill="#0084D1" />
          <path d="M13 13l3.5 3.5" />
          <circle cx="28.5" cy="11.5" r="1.5" fill="#0084D1" />
          <path d="M27 13l-3.5 3.5" />
          <circle cx="11.5" cy="28.5" r="1.5" fill="#0084D1" />
          <path d="M13 27l3.5-3.5" />
          <circle cx="28.5" cy="28.5" r="1.5" fill="#0084D1" />
          <path d="M27 27l-3.5-3.5" />
          {/* Waves inside center */}
          <path d="M17 19a3 3 0 0 1 6 0" strokeWidth="1.5" />
          <path d="M18.5 21a1.5 1.5 0 0 1 3 0" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Cross Platform Development Service',
      desc: 'With a few simple changes in code, the cross-platform frameworks enable us to create an app with one time coding and execute it on all platforms, including Windows, iOS, and Android.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M10 26 C10 18 16 12 24 12" strokeWidth="2.2" />
          <path d="M20 20 L28 12" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22 12 H28 V18" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="20" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Machine Learning Development Service',
      desc: 'From custom machine learning algorithms to neural models, our developers leverage advanced Machine Learning Development Service and deploy scalable solutions for complex business challenges.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="9" width="26" height="22" rx="3" />
          <path d="M7 16h26" />
          <circle cx="12" cy="12.5" r="1" fill="#0084D1" />
          <circle cx="16" cy="12.5" r="1" fill="#0084D1" />
          <circle cx="20" cy="12.5" r="1" fill="#0084D1" />
          {/* Head & Gear */}
          <path d="M14 27c0-3.5 2.5-6 6-6s6 2.5 6 6" />
          <circle cx="20" cy="22" r="2.5" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Blockchain Development Service',
      desc: 'We provide blockchain development services to enhance security and transparency, creating decentralized smart contracts and tamper-proof cryptographic transaction verification.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 7l11 6.5v13L20 33l-11-6.5v-13L20 7z" />
          <path d="M20 7v26M9 13.5l11 6.5 11-6.5" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'IoT & Real-Time Sync Development Service',
      desc: 'Seamlessly connect and control smart devices and wearable sensors with robust edge communication protocols and low-latency real-time data streaming.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
          <path d="M12 12a11 11 0 0116 0M8 8a17 17 0 0124 0M12 28a11 11 0 0016 0M8 32a17 17 0 0024 0" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const maxIndex = Math.max(0, technologies.length - 3);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden w-full">
      {/* Centered Heading matching reference screenshot */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies Sapphire Use For Hybrid App<br className="hidden sm:inline" /> Development
        </h2>
      </div>

      {/* Full-Width Slider / Carousel Track */}
      <div className="relative overflow-hidden w-full select-none py-2">
        <div
          className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${carouselIndex * 540}px)`
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="w-[420px] sm:w-[480px] lg:w-[530px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-5 sm:p-6 min-h-[165px] sm:min-h-[175px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-lg hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
            >
              {/* Top Icon */}
              <div className="mb-2.5 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-1.5 leading-snug tracking-tight">
                {tech.title}
              </h3>

              {/* Tech Description */}
              <p className="font-normal text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.6]">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Center Navigation Controls */}
      <div className="flex items-center justify-center space-x-5 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          disabled={carouselIndex === 0}
          aria-label="Previous technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={carouselIndex >= maxIndex}
          aria-label="Next technologies"
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-950 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-xl font-bold"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default HybridAppCuttingEdgeTechnologiesSection;
