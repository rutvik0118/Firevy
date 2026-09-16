import React, { useState } from 'react';
import Container from '../common/Container';

const storyTestimonials = [
  {
    id: 1,
    headline: 'Hear what Pravin has got to say about working with Sapphire Software Solutions',
    clientName: 'Pravin M.',
    avatar: '/images/anil_kumar.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 2,
    headline: 'Hear out Tim got to say about working with Team Sapphire on building a complex web application',
    clientName: 'Tim S.',
    avatar: '/images/clienttestimonial1.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 3,
    headline: 'From Vision to Healthcare Innovation | Client Success Story with Sapphire Software Solutions',
    clientName: 'Dr. Hesham Abdelfattah',
    avatar: '/images/hesham_abdelfattah.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  }
];

export const FeaturedStoryVideoSection = ({ companyName = "Sapphire" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const current = storyTestimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? storyTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % storyTestimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#D8EBF7] text-slate-900 font-sans relative overflow-hidden border-b border-slate-200">
      <Container className="max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
            Our Story, Their Words
          </h2>
          <p className="text-[13px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
            From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading + Navigation Arrows */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-[800] text-[#0B0F19] leading-snug">
              {current.headline}
            </h3>

            {/* Circular Arrow Buttons */}
            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-slate-700/80 bg-transparent hover:bg-white flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-slate-700/80 bg-transparent hover:bg-white flex items-center justify-center text-slate-800 transition-all cursor-pointer shadow-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Large Blue Wave Video Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              onClick={() => setActiveVideo(current.videoUrl)}
              className="relative w-full max-w-[500px] h-[280px] sm:h-[310px] bg-gradient-to-br from-[#0086C6] via-[#006EA8] to-[#004A75] rounded-[24px] overflow-hidden shadow-xl border-4 border-white/60 flex items-center justify-center cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Decorative Waves SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
                viewBox="0 0 500 310"
                preserveAspectRatio="none"
                fill="none"
              >
                <g opacity="0.18">
                  <circle cx="30" cy="30" r="2" fill="#fff" />
                  <circle cx="60" cy="30" r="2" fill="#fff" />
                  <circle cx="90" cy="30" r="2" fill="#fff" />
                  <circle cx="30" cy="60" r="2" fill="#fff" />
                  <circle cx="60" cy="60" r="2" fill="#fff" />
                  <circle cx="90" cy="60" r="2" fill="#fff" />
                  <circle cx="410" cy="240" r="2" fill="#fff" />
                  <circle cx="440" cy="240" r="2" fill="#fff" />
                  <circle cx="470" cy="240" r="2" fill="#fff" />
                </g>
                <path
                  d="M -20 70 C 80 10, 160 110, 260 40 C 340 -20, 420 80, 520 20"
                  stroke="#FACC15"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M -20 180 C 100 240, 200 160, 310 220 C 400 270, 460 170, 520 200"
                  stroke="#FACC15"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M 20 260 C 120 190, 240 260, 360 180 C 420 140, 470 210, 520 170"
                  stroke="#67E8F9"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>

              {/* Centered Circular Avatar */}
              <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full border-[5px] border-white overflow-hidden shadow-2xl bg-white/20 shrink-0">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bottom-Right Play Button Badge */}
              <div className="absolute bottom-5 right-5 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 text-white/80 hover:text-white bg-black/60 rounded-full p-1.5"
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={activeVideo}
              title="Client Testimonial"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedStoryVideoSection;
