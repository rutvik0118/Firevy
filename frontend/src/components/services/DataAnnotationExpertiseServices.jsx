import React, { useState, useEffect, useRef } from 'react';

const expertiseCards = [
  {
    title: 'Image & Video Annotation Services',
    desc: 'High-accuracy object detection, bounding boxes, polygon segmentation, keypoint tracking, and frame-by-frame labeling for computer vision models.'
  },
  {
    title: '3D LiDAR Point Cloud & Cuboid Labeling',
    desc: 'Multi-sensor sensor fusion, LiDAR 3D cuboids, point cloud segmentation, and velocity vector annotation powering autonomous mobility and robotics.'
  },
  {
    title: 'Text & NLP Entity Tagging Services',
    desc: 'Named entity recognition (NER), part-of-speech tagging, intent classification, sentiment analysis, and conversational dialogue labeling in 50+ languages.'
  },
  {
    title: 'Medical & Healthcare Data Annotation',
    desc: 'HIPAA-compliant annotation for CT, MRI, X-ray scans, digital pathology, and medical records annotated by certified clinical specialists.'
  },
  {
    title: 'LLM Human-in-the-Loop & RLHF',
    desc: 'Reinforcement learning from human feedback, prompt evaluation, model output ranking, red-teaming, and ground-truth validation for foundational models.'
  },
  {
    title: 'Audio & Speech Data Transcription',
    desc: 'Acoustic waveform tagging, speaker diarization, multilingual phonetic transcription, and intent tagging for voice assistants and automated speech systems.'
  }
];

export const DataAnnotationExpertiseServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertiseCards.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardStep = 390;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardStep,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section
      className="py-14 sm:py-18 bg-white font-sans w-full overflow-hidden border-t border-slate-100 text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <h2 className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 text-[26px] sm:text-[32px] lg:text-[36px]">
          Our Expertise in Dedicated Data Annotation Services Development
        </h2>
        <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          Our Data Annotation Company specializes in creating and delivering high-accuracy training datasets for machine learning and AI teams worldwide.
        </p>
      </div>

      {/* Edge-to-edge Full-width Carousel */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseCards.map((card, idx) => (
            <div
              key={idx}
              className="w-[310px] sm:w-[350px] lg:w-[370px] shrink-0 bg-[#DDF1FC] rounded-[16px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs border border-[#D0EBFB] select-none h-[220px] sm:h-[230px] transition-all duration-300 hover:shadow-md hover:bg-[#D4EDFA]"
            >
              <div>
                <h3 className="font-[800] text-[16.5px] sm:text-[18px] text-[#0B0F19] mb-2 text-left leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#334155] leading-[1.6] text-left font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 text-left">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-[5px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[12.5px] sm:text-[13px] transition-all shadow-2xs cursor-pointer"
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

export default DataAnnotationExpertiseServices;
