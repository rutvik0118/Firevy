import React, { useState } from 'react';
import Container from '../common/Container';
import {
  Code2,
  LayoutGrid,
  Globe2,
  Boxes,
  Cpu,
  Radio,
  Eye,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export const MobileAppCuttingEdgeTechnologiesSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Augmented Reality Development Service',
      desc: 'Engage your audience with Augmented Reality Development Services overlay digital content into the real world, creating interactive experiences that boost engagement and learning while enhancing customer brand loyalty.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="4" />
          <circle cx="20" cy="20" r="5" />
          <path d="M12 14h.01M28 14h.01M12 26h.01M28 26h.01" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Low-Code No-Code Development Service',
      desc: 'Accelerate app development with Low-Code No-Code Development Services, a platform that empowers businesses to create scalable, robust applications quickly without extensive coding.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M11 10.5h.01M15 10.5h.01M19 10.5h.01" />
          <path d="M16 20l-3 3 3 3M24 20l3 3-3 3M21 19l-2 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Super Apps Development Service',
      desc: 'Redefine digital experiences with Super Apps Development Services, Design for seamless user experience, these super apps increase engagement, enhance convenience, and drive revenue growth.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="7" width="30" height="26" rx="4" />
          <path d="M5 14h30M13 14v19M13 22h22" />
          <rect x="8" y="17" width="3" height="3" rx="0.5" fill="#0084D1" />
          <rect x="8" y="23" width="3" height="3" rx="0.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Progressive Web App Development Service',
      desc: 'Using HTML, CSS, and JavaScript code that runs in web browser engines and is hosted on web servers, we create Progressive Web Apps (PWAs).',
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
      id: 5,
      title: 'Blockchain Development Service',
      desc: 'We provide blockchain development services to enhance security and transparency, creating decentralized alternatives and cryptographic record verification.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 7l11 6.5v13L20 33l-11-6.5v-13L20 7z" />
          <path d="M20 7v26M9 13.5l11 6.5 11-6.5" />
          <circle cx="20" cy="20" r="3" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'AI & Machine Learning Development Service',
      desc: 'Leverage cutting-edge AI and Machine Learning models to deliver predictive analytics, computer vision, natural language understanding, and automated intelligence.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="10" width="20" height="20" rx="3" />
          <path d="M16 10V5M24 10V5M16 30v5M24 30v5M10 16H5M10 24H5M30 16h5M30 24h5" strokeLinecap="round" />
          <circle cx="20" cy="20" r="3.5" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'IoT & Real-Time Sync Development Service',
      desc: 'Seamlessly connect and control smart hardware, wearable devices, and embedded sensors with robust edge communication and low latency real-time protocols.',
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
      {/* Centered Heading */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies {companyName} Use For Mobile App<br className="hidden sm:inline" /> Development
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

export default MobileAppCuttingEdgeTechnologiesSection;
