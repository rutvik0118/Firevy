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
    clientName: 'Christina',
    image: '/images/clienttestimonial1.webp',
    caption: "Peer Into Satisfaction: Client Testimonial Video Shines Bright!",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    clientName: 'Elena Rostova',
    image: '/images/clienttestimonial2.webp',
    caption: "From Vision to Education | Client's Success Story with Sapphire Solutions",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    clientName: 'Senior Partner',
    image: '/images/clienttestimonial3.webp',
    caption: 'Top Rated Web & Mobile App Development Company in USA',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    clientName: 'Vision Client',
    image: '/images/vision_client.webp',
    caption: "From Vision to Growth | Client's Success Story with Sapphire Solutions",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const OurStoryTheirWordsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 340; // card width + gap
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
      className="py-8 sm:py-10 bg-[#EAF4FA] border-b border-slate-200/80 font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-6 sm:mb-8">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-tight mb-2"
          style={{ fontSize: '28px' }}
        >
          Our Story, Their Words
        </h2>
        <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </div>

      {/* Full-width Carousel */}
      <div className="w-full relative mb-4">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-1.5 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveVideo(card)}
              className="w-[280px] sm:w-[310px] lg:w-[325px] shrink-0 bg-white rounded-[14px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group select-none border border-slate-100"
            >
              {/* Top Blue Video Frame with Real Client Portrait */}
              <div className="relative w-full h-[145px] sm:h-[158px] bg-[#0082C8] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.clientName}
                  className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/images/clienttestimonial1.webp';
                  }}
                />
              </div>

              {/* Bottom White Caption Strip + Play Button */}
              <div className="bg-white p-3 sm:p-3.5 flex items-center justify-between gap-3 border-t border-slate-100 min-h-[62px]">
                <p className="text-[11.5px] sm:text-[12px] font-[500] text-[#1E293B] leading-snug line-clamp-2 text-left group-hover:text-[#005F96] transition-colors flex-1">
                  {card.caption}
                </p>

                <div className="w-7 h-7 rounded-full bg-[#005F96] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#004A75] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 mt-5">
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

      {/* Video Popup Modal */}
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
