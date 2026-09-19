import React, { useState } from 'react';
import Container from '../common/Container';

export const DataAnnotationCuttingEdgeTechSection = ({ companyName = 'Firevy.co' }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const technologies = [
    {
      id: 1,
      title: 'Computer Vision & Bounding Box Tooling',
      desc: 'We utilize enterprise-grade CV annotation platforms like CVAT, Label Studio, and Roboflow to produce 2D bounding boxes, polygon masks, and keypoint tracking for object detection.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="7" width="26" height="26" rx="4" />
          <path d="M14 14h12v12H14z" strokeDasharray="3 2" />
          <circle cx="14" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="26" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="14" cy="26" r="1.5" fill="#0084D1" />
          <circle cx="26" cy="26" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: '3D LiDAR Point Cloud & Cuboids',
      desc: 'Our specialized annotators tag multi-sensor fusion point clouds and 3D cuboids with roll, pitch, and yaw attributes to power autonomous vehicle navigation and robotics.',
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
      title: 'Semantic & Panoptic Segmentation',
      desc: 'Pixel-level annotation for complex scene understanding. We segment microscopic medical imagery, satellite geoscapes, and urban roadways with sub-pixel edge fidelity.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 28 C 12 18, 18 12, 28 10 C 34 16, 36 24, 30 30 C 22 34, 14 34, 10 28 Z" />
          <path d="M16 22 Q 22 18, 26 24 T 22 30" strokeDasharray="2 2" />
          <circle cx="28" cy="10" r="1.5" fill="#0084D1" />
          <circle cx="30" cy="30" r="1.5" fill="#0084D1" />
          <circle cx="10" cy="28" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'NLP & Named Entity Recognition (NER)',
      desc: 'Structured labeling for natural language processing, entity classification, intent parsing, sentiment labeling, and linguistic tree tagging across 50+ global languages.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <line x1="12" y1="15" x2="24" y2="15" />
          <line x1="12" y1="21" x2="28" y2="21" />
          <line x1="12" y1="27" x2="20" y2="27" />
          <rect x="23" y="13" width="9" height="4" fill="#0084D1" opacity="0.2" rx="1" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Generative AI & LLM RLHF',
      desc: 'Reinforcement Learning from Human Feedback (RLHF), prompt-response ranking, red-teaming, and factual verification to align LLMs for safety, quality, and domain precision.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 12h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4l-6 4v-4h-2a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4z" />
          <path d="M16 19l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Audio Transcription & Waveform Tagging',
      desc: 'Phonetic labeling, speaker diarization, background noise classification, and multilingual audio timestamping to train speech recognition and acoustic AI models.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 20v0M14 15v10M18 10v20M22 6v28M26 12v16M30 16v8M34 20v0" strokeLinecap="round" />
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
          Cutting Edge Technologies {companyName} Use For Data Annotation<br className="hidden sm:inline" /> App Development
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

export default DataAnnotationCuttingEdgeTechSection;
