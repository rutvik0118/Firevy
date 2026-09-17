import React, { useState } from 'react';
import Container from '../common/Container';

export const PatientManagementCuttingEdgeTechSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'HL7 & FHIR Interoperability Protocols',
      desc: 'Seamless data exchange across disparate EHR systems (Epic, Cerner, Allscripts) using Fast Healthcare Interoperability Resources (FHIR) and HL7 messaging standards.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="14" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
          <circle cx="20" cy="9" r="2" fill="#0084D1" />
          <circle cx="31" cy="20" r="2" fill="#0084D1" />
          <circle cx="20" cy="31" r="2" fill="#0084D1" />
          <circle cx="9" cy="20" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'HIPAA & GDPR Compliant Cloud Core',
      desc: 'End-to-end zero-trust architecture leveraging AWS HealthLake, Google Cloud Healthcare API, and Azure Health with AES-256 encryption at rest and in transit.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M20 6L9 11v8c0 8 4.7 13.8 11 15 6.3-1.2 11-7 11-15v-8L20 6z" />
          <path d="M16 20l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'AI Clinical Triage & Predictive Scheduling',
      desc: 'Machine learning models predicting patient appointment no-shows, balancing practitioner workloads, and prioritizing urgent triage cases in outpatient queues.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="9" width="26" height="24" rx="3" />
          <path d="M7 16h26" />
          <path d="M14 7v4M26 7v4" strokeLinecap="round" />
          <path d="M13 24l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="27" cy="25" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'WebRTC Telehealth & Virtual Consults',
      desc: 'Ultra-low latency, peer-to-peer encrypted HD video consultations, digital whiteboards, in-call file transfers, and instant e-prescription routing.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="10" width="20" height="18" rx="3" />
          <path d="M26 15l8-4v16l-8-4v-8z" />
          <circle cx="16" cy="19" r="3" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'IoMT & Wearable Vitals Sync',
      desc: 'Real-time telemetry integrating IoT medical devices, Bluetooth pulse oximeters, ECG monitors, and Apple HealthKit / Google Fit for continuous remote monitoring.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="14" y="6" width="12" height="28" rx="4" />
          <path d="M16 19h2l2-4 3 8 2-4h2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="20" cy="10" r="1.5" fill="#0084D1" />
          <circle cx="20" cy="29" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Automated EDI 837/835 Insurance Billing',
      desc: 'Direct clearinghouse connectivity, automated ANSI claim filing, real-time insurance eligibility checks, and instant patient copay payment gateway processing.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="8" y="10" width="24" height="20" rx="3" />
          <path d="M8 17h24" />
          <circle cx="14" cy="23" r="1.5" fill="#0084D1" />
          <path d="M22 23h5" strokeLinecap="round" />
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
          Cutting Edge Technologies {companyName} Use For Patient Management<br className="hidden sm:inline" /> System Development
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

export default PatientManagementCuttingEdgeTechSection;
