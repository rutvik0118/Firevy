import React, { useState } from 'react';
import Container from '../common/Container';

export const DataCleansingCuttingEdgeTechSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Progressive Web App Development',
      desc: 'Using HTML, CSS, and modern JavaScript engines hosted on scalable cloud servers, we create high-speed Progressive Web Apps for instantaneous data exploration and scrubbing.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="13" y="6" width="22" height="28" rx="4" />
          <path d="M20 30h8M13 11h22M13 28h22" />
          <circle cx="10" cy="18" r="4" strokeDasharray="3 2" />
          <circle cx="10" cy="18" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'MEAN Stack App Development',
      desc: 'When it comes to MEAN Stack development services, we are a reliable partner. Our team is skilled in using frameworks like AngularJS and Mongoose to create web apps that have several features and perform very well.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="3" />
          <line x1="5" y1="13" x2="35" y2="13" />
          <path d="M12 21l-3 3 3 3M20 21l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="25" y="25" fill="#0084D1" fontSize="7" fontWeight="900" fontFamily="monospace">API</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Fast API Development',
      desc: 'Our group specializes in creating dynamic, high-performing online apps by using the FastAPI framework. Utilizing the newest Python frameworks, we guarantee that your project shines in terms of functionality, user experience, and smooth integration thanks to our knowledge of tools like Pydantic and Starlette.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 5 L34 13 L34 27 L20 35 L6 27 L6 13 Z" />
          <path d="M20 5 L20 35 M6 13 L20 21 L34 13" />
          <circle cx="20" cy="21" r="2.5" fill="#0084D1" />
          <circle cx="20" cy="5" r="1.5" fill="#0084D1" />
          <circle cx="34" cy="13" r="1.5" fill="#0084D1" />
          <circle cx="34" cy="27" r="1.5" fill="#0084D1" />
          <circle cx="20" cy="35" r="1.5" fill="#0084D1" />
          <circle cx="6" cy="27" r="1.5" fill="#0084D1" />
          <circle cx="6" cy="13" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Django App Development',
      desc: 'View our Django development services, where we create robust, effective online applications using the Django framework. Our services are made to improve your online solutions, making them more dependable and speedier from the ground up.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <line x1="6" y1="24" x2="34" y2="24" />
          <circle cx="14" cy="16" r="3.5" />
          <path d="M14 12v1M14 19v1M10 16h1M17 16h1" strokeLinecap="round" />
          <path d="M23 13l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 32h8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Laravel App Development',
      desc: 'With Laravel development services that trace back to 2011, we are a top web development company. Our technology offerings include bespoke, scalable, and powerful web solutions built by experts who possess deep Laravel knowledge, designed for optimal security and high-performance.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="3" />
          <path d="M12 14h16M12 20h16M12 26h10" strokeLinecap="round" />
          <circle cx="28" cy="26" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Python & Pandas Data Pipeline',
      desc: 'We engineer high-speed automated data validation pipelines using Python, NumPy, and Pandas to cleanse, standardize, and reconcile millions of complex records with flawless accuracy.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="20" cy="10" rx="14" ry="5" />
          <path d="M6 10v10c0 2.8 6.3 5 14 5s14-2.2 14-5V10" />
          <path d="M6 20v10c0 2.8 6.3 5 14 5s14-2.2 14-5V20" />
          <circle cx="20" cy="25" r="2" fill="#0084D1" />
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
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden w-full border-t border-slate-100">
      {/* Centered Heading */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies {companyName} Use For Data Cleansing<br className="hidden sm:inline" /> App Development
        </h2>
      </div>

      {/* Full-Width Slider / Carousel Track */}
      <div className="relative overflow-hidden w-full select-none py-2">
        <div
          className="flex space-x-6 sm:space-x-8 px-4 sm:px-8 lg:px-12 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${carouselIndex * 460}px)`
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="w-[360px] sm:w-[420px] lg:w-[450px] shrink-0 rounded-[14px] bg-[#E1F3FD] p-6 sm:p-7 min-h-[175px] sm:min-h-[185px] flex flex-col justify-start text-left select-none transition-all duration-300 hover:shadow-lg hover:bg-[#D7EFFC] border border-[#CCE8FA] group cursor-pointer"
            >
              {/* Top Icon */}
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>

              {/* Tech Title */}
              <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                {tech.title}
              </h3>

              {/* Tech Description */}
              <p className="font-normal text-[#334155] text-[12.5px] sm:text-[13px] leading-[1.65]">
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

export default DataCleansingCuttingEdgeTechSection;
