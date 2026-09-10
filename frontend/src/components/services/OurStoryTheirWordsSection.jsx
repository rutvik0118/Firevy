import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    id: 1,
    clientName: 'Andrew Mitchell',
    image: '/images/client_shay.webp',
    caption: 'Discover why Andrew trusted Sapphire Software Solutions with his mobile digital diary...',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    clientName: 'Dr. Hesham Abdelfattah',
    image: '/images/bruno.webp',
    caption: 'From Vision to Healthcare Innovation | Client Success With Sapphire - Top IT Company in USA',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    clientName: 'Bruno Silva',
    image: '/images/client_seven.webp',
    caption: "From Idea to Reality | Client's Success Story with Sapphire - Best Mobile App Development...",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    clientName: 'Wellness App Lead',
    image: '/images/client_eight.webp',
    caption: "From Vision to Wellness | Client's Success Story with Sapphire - Top Mobile App Development...",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    clientName: 'Tim S.',
    image: '/images/hesham_abdelfattah.webp',
    caption: 'Hear out Tim got to say about working with Team Sapphire on building a complex and...',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    clientName: 'Christina',
    image: '/images/clienttestimonial1.webp',
    caption: "Peer Into Satisfaction: Client Testimonial Video Shines Bright!",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    clientName: 'Elena Rostova',
    image: '/images/clienttestimonial2.webp',
    caption: "From Vision to Education | Client's Success Story with Sapphire Solutions",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    clientName: 'Senior Partner',
    image: '/images/clienttestimonial3.webp',
    caption: 'Top Rated Web & Mobile App Development Company in USA',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const OurStoryTheirWordsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 345;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section
      className="py-10 sm:py-14 bg-[#E8F3FA] border-b border-slate-200/80 font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
          Our Story, Their Words
        </h2>
        <p className="text-[13px] sm:text-[14.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </div>

      {/* Full-width Carousel */}
      <div className="w-full relative mb-4">
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveVideo(card)}
              className="w-[290px] sm:w-[320px] lg:w-[335px] shrink-0 bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group select-none border border-slate-200/70 hover:-translate-y-0.5"
            >
              {/* Top Blue Video Frame with Centered Avatar & Wave Art */}
              <div className="relative w-full h-[155px] sm:h-[165px] bg-gradient-to-r from-[#006EA8] via-[#0082C8] to-[#0074B3] overflow-hidden flex items-center justify-center select-none">
                {/* Wavy Yellow and Cyan Floating Curve Accents */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-85" viewBox="0 0 320 160" fill="none">
                  <path d="M-30 45 C 50 15, 130 95, 210 35 C 260 0, 300 70, 350 40" stroke="#FBBF24" strokeWidth="2.5" />
                  <path d="M-30 120 C 50 90, 130 165, 210 105 C 260 65, 300 135, 350 105" stroke="#38BDF8" strokeWidth="2" opacity="0.7" />
                  {/* Subtle cross / plus marks */}
                  <g stroke="#38BDF8" strokeWidth="1.5" opacity="0.4">
                    <line x1="40" y1="85" x2="52" y2="85" />
                    <line x1="46" y1="79" x2="46" y2="91" />
                    <line x1="260" y1="55" x2="272" y2="55" />
                    <line x1="266" y1="49" x2="266" y2="61" />
                  </g>
                </svg>

                {/* Circular Portrait in Center with Clean White Border */}
                <div className="relative z-10 w-22 h-22 rounded-full border-[3.5px] border-white overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.clientName}
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/images/clienttestimonial1.webp';
                    }}
                  />
                </div>
              </div>

              {/* Bottom White Caption Strip + Teal Circular Play Button */}
              <div className="bg-white p-3.5 sm:p-4 flex items-center justify-between gap-3 border-t border-slate-100 min-h-[66px]">
                <p className="text-[12px] sm:text-[12.5px] font-[500] text-[#1E293B] leading-snug line-clamp-2 text-left group-hover:text-[#005F96] transition-colors flex-1">
                  {card.caption}
                </p>

                <div className="w-8 h-8 rounded-full bg-[#005F96] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#004A75] group-hover:scale-105 transition-all">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current ml-0.5" stroke="none">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-[#005F96] hover:scale-110 transition-all text-xl font-bold cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-8 h-8 flex items-center justify-center text-slate-600 hover:text-[#005F96] hover:scale-110 transition-all text-xl font-bold cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Interactive Video Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="p-4 bg-slate-800 flex items-center justify-between border-b border-slate-700">
              <h3 className="font-bold text-white text-base">{activeVideo.caption}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-slate-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black flex items-center justify-center">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.caption}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurStoryTheirWordsSection;
