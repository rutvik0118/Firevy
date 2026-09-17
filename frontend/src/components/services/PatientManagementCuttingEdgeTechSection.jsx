import React, { useState } from 'react';
import Container from '../common/Container';

export const PatientManagementCuttingEdgeTechSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'AR/VR',
      desc: 'We create software that provides a feeling of realism that spans the actual and digital worlds, whether it is used for interactive marketing, immersive training, or other purposes.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="24" height="36" rx="4" />
          <path d="M24 38h.01" strokeWidth="3" />
          <path d="M24 14l8 4v8l-8 4-8-4v-8l8-4z" />
          <path d="M24 14v12M32 18l-8 4M16 18l8 4" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Computer Vision',
      desc: 'We can provide your software computer vision features to improve accuracy, automate processes, and open new avenues for creativity and job efficiency, ranging from picture recognition to video analysis.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="24" rx="3" />
          <path d="M18 32l-3 8h18l-3-8" />
          <circle cx="24" cy="20" r="5" />
          <circle cx="24" cy="20" r="2" fill="#0084D1" />
          <path d="M14 20c2.5-4 6-6 10-6s7.5 2 10 6c-2.5 4-6 6-10 6s-7.5-2-10-6z" />
          <circle cx="10" cy="12" r="1.5" fill="#0084D1" />
          <path d="M10 13.5v2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'AI/ML',
      desc: 'We use AI solutions to automate software processes, provide insights, and promote more intelligent decision-making by leveraging the potential of AI/ML technology.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="13" y="13" width="22" height="22" rx="3" />
          <path d="M19 28l2.5-8 2.5 8M19.8 25.5h3.4M27 20v8M25 20h4M25 28h4" />
          <path d="M18 6v7M24 6v7M30 6v7M18 35v7M24 35v7M30 35v7" />
          <path d="M6 18h7M6 24h7M6 30h7M35 18h7M35 24h7M35 30h7" />
          <circle cx="18" cy="6" r="1.5" fill="#0084D1" />
          <circle cx="24" cy="6" r="1.5" fill="#0084D1" />
          <circle cx="30" cy="6" r="1.5" fill="#0084D1" />
          <circle cx="18" cy="42" r="1.5" fill="#0084D1" />
          <circle cx="24" cy="42" r="1.5" fill="#0084D1" />
          <circle cx="30" cy="42" r="1.5" fill="#0084D1" />
          <circle cx="6" cy="18" r="1.5" fill="#0084D1" />
          <circle cx="6" cy="24" r="1.5" fill="#0084D1" />
          <circle cx="6" cy="30" r="1.5" fill="#0084D1" />
          <circle cx="42" cy="18" r="1.5" fill="#0084D1" />
          <circle cx="42" cy="24" r="1.5" fill="#0084D1" />
          <circle cx="42" cy="30" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'IoT',
      desc: 'Our software development services include designing IoT apps to connect, manage, and automate devices and data for real-time monitoring and operational efficiency.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="15" width="18" height="18" rx="3" />
          <path d="M21 21h6v6h-6z" fill="#0084D1" opacity="0.2" />
          <path d="M21 21h6v6h-6z" />
          <path d="M24 7v8M24 33v8M7 24h8M33 24h8" />
          <circle cx="24" cy="7" r="2" fill="#0084D1" />
          <circle cx="24" cy="41" r="2" fill="#0084D1" />
          <circle cx="7" cy="24" r="2" fill="#0084D1" />
          <circle cx="41" cy="24" r="2" fill="#0084D1" />
          <path d="M12 12l4 4M32 32l4 4M12 36l4-4M32 16l4-4" />
          <circle cx="11" cy="11" r="1.5" fill="#0084D1" />
          <circle cx="37" cy="37" r="1.5" fill="#0084D1" />
          <circle cx="11" cy="37" r="1.5" fill="#0084D1" />
          <circle cx="37" cy="11" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Blockchain',
      desc: 'We build decentralized, tamper-proof blockchain solutions that ensure high security, transparency, and data integrity for enterprise transactions and smart contracts.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <rect x="28" y="8" width="12" height="12" rx="2" />
          <rect x="8" y="28" width="12" height="12" rx="2" />
          <rect x="28" y="28" width="12" height="12" rx="2" />
          <path d="M20 14h8M20 34h8M14 20v8M34 20v8" strokeDasharray="2 2" />
          <circle cx="24" cy="14" r="2" fill="#0084D1" />
          <circle cx="24" cy="34" r="2" fill="#0084D1" />
          <circle cx="14" cy="24" r="2" fill="#0084D1" />
          <circle cx="34" cy="24" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Cloud Computing',
      desc: 'We engineer scalable cloud-native architectures that provide high availability, seamless data accessibility, and robust disaster recovery across multi-cloud environments.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-10 h-10 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 34h23a9 9 0 0 0 2-17.7 13 13 0 0 0-25-3.3A8 8 0 0 0 12 34z" />
          <path d="M24 24v8M20 28l4-4 4 4" />
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
      {/* Centered Heading Matching Reference Screenshot */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.25]">
          Cutting Edge Technologies {companyName} Use For Software Development Services
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

      {/* Bottom Center Navigation Controls (Exact match to screenshot) */}
      <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          disabled={carouselIndex === 0}
          aria-label="Previous technologies"
          className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-2xl font-bold"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          disabled={carouselIndex >= maxIndex}
          aria-label="Next technologies"
          className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer select-none text-2xl font-bold"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default PatientManagementCuttingEdgeTechSection;
