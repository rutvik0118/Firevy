import React, { useState } from 'react';
import Container from '../common/Container';

export const DigitalTwinCuttingEdgeTechSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'IoT Sensors & Edge Computing',
      desc: 'High-throughput edge gateways, MQTT, OPC-UA, and Modbus protocols streaming real-time operational telemetry from physical assets directly into digital twin engines.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="20" cy="20" r="4" fill="#0084D1" />
          <path d="M12 12a11.3 11.3 0 0 1 16 0M8 8a17 17 0 0 1 24 0M12 28a11.3 11.3 0 0 0 16 0M8 32a17 17 0 0 0 24 0" />
        </svg>
      )
    },
    {
      id: 2,
      title: '3D Spatial, CAD & BIM Modeling',
      desc: 'Precision 3D modeling and point cloud ingestion utilizing Autodesk Revit, IFC standards, and photogrammetry for photo-realistic, spatially accurate digital replicas.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="20,6 34,14 34,28 20,36 6,28 6,14" />
          <line x1="20" y1="6" x2="20" y2="36" />
          <line x1="6" y1="14" x2="20" y2="21" />
          <line x1="34" y1="14" x2="20" y2="21" />
          <circle cx="20" cy="21" r="2" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Real-Time Physics & Simulation Engines',
      desc: 'Powered by Unreal Engine 5, Unity 3D, and NVIDIA Omniverse for ultra-realistic physics simulations, fluid dynamics, stress analysis, and synthetic data testing.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="7" width="26" height="26" rx="4" />
          <circle cx="20" cy="20" r="6" />
          <path d="M14 20h12M20 14v12" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Time-Series Data Lakes & Cloud Pipelines',
      desc: 'Resilient data infrastructure leveraging InfluxDB, TimescaleDB, Apache Kafka, AWS IoT SiteWise, and Azure Digital Twins for petabyte-scale telemetry ingestion.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="20" cy="10" rx="13" ry="5" />
          <path d="M7 10v10c0 2.8 5.8 5 13 5s13-2.2 13-5V10" />
          <path d="M7 20v10c0 2.8 5.8 5 13 5s13-2.2 13-5V20" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Predictive AI & Anomaly Detection',
      desc: 'Machine learning algorithms trained on historical and real-time sensor streams to forecast equipment wear, detect operational anomalies, and predict component lifespan.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 28 C 12 18, 18 12, 28 10 C 34 16, 36 24, 30 30 C 22 34, 14 34, 10 28 Z" />
          <path d="M16 22 Q 22 18, 26 24 T 22 30" strokeDasharray="2 2" />
          <circle cx="28" cy="10" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'WebXR, AR & Immersive Cockpits',
      desc: 'Cross-platform interactive dashboards built with Three.js, WebGL, and Apple Vision Pro / Meta Quest AR headsets for hands-free industrial inspection and remote operations.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="5" y="12" width="30" height="16" rx="5" />
          <circle cx="14" cy="20" r="4" />
          <circle cx="26" cy="20" r="4" />
          <path d="M18 20h4" />
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
          Cutting Edge Technologies {companyName} Use For Digital Twin<br className="hidden sm:inline" /> Solutions Development
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

export default DigitalTwinCuttingEdgeTechSection;
