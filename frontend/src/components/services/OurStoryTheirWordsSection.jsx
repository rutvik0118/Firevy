import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';

const testimonialsData = [
  {
    id: 1,
    name: 'Wellness App Lead',
    image: '/images/client_eight.webp',
    caption: "Client's Success Story with Sapphire - Top Mobile App Development...",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    name: 'Tim S.',
    image: '/images/clienttestimonial3.webp',
    caption: 'Hear out Tim got to say about working with Team Sapphire on building a complex and..',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    name: 'Business Expansion Client',
    image: '/images/clienttestimonial2.webp',
    caption: 'Testimonial from client who has expanded their business using Sapphire Services',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    name: 'Pravin',
    image: '/images/clienttestimonial1.webp',
    caption: 'Hear what Pravin has got to say about working with Sapphire Software Solutions',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    name: 'Andrew Mitchell',
    image: '/images/client_shay.webp',
    caption: 'Sapphire Successfully Delivered App Solutions - Leading IT Co...',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    name: 'Elena Rostova',
    image: '/images/vision_client.webp',
    caption: "From Vision to Education | Client's Success Story with Sapphire Solutions",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    name: 'Christina',
    image: '/images/zetteli_client.webp',
    caption: 'Peer Into Satisfaction: Client Testimonial Video Shines Bright!',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    name: 'Dr. Hesham Abdelfattah',
    image: '/images/bruno.webp',
    caption: 'From Vision to Healthcare Innovation | Client Success With Sapphire',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const OurStoryTheirWordsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      className="py-12 sm:py-16 bg-[#E8F3FA] border-b border-sky-100 font-sans w-full overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
            Our Story, Their Words
          </h2>
          <p className="text-[13.5px] sm:text-[15px] text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal">
            From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
          </p>
        </div>
      </Container>

      {/* Full-Width Multi-Card Horizontal Slider Carousel (Exact 1:1 Match from Screenshot) */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex space-x-4 sm:space-x-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[310px] md:w-[325px] shrink-0 bg-white rounded-[16px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer"
            >
              {/* Top Banner Graphic (Direct HD Pre-rendered banner image with waves and centered avatar) */}
              <div className="relative w-full aspect-[16/10] bg-[#006EA8] overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover select-none group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Caption & Play Action */}
              <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between gap-3 min-h-[70px] sm:min-h-[78px] border-t border-slate-100/80">
                <p className="text-[11.5px] sm:text-[12px] font-[500] text-slate-700 leading-snug line-clamp-2 text-left">
                  {item.caption}
                </p>
                <button
                  onClick={() => setActiveVideo(item)}
                  aria-label="Play video testimonial"
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shrink-0 shadow-xs hover:scale-110 transition-all cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current ml-0.5" stroke="none">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Navigation Arrows Below Carousel (←) (→) */}
        <div className="flex items-center justify-center space-x-4 pt-7 sm:pt-9">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-700/60 bg-white hover:bg-slate-900 hover:text-white text-slate-800 flex items-center justify-center transition-all cursor-pointer font-bold shadow-xs hover:scale-105 active:scale-95 text-lg"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-700/60 bg-white hover:bg-slate-900 hover:text-white text-slate-800 flex items-center justify-center transition-all cursor-pointer font-bold shadow-xs hover:scale-105 active:scale-95 text-lg"
          >
            →
          </button>
        </div>
      </div>

      {/* Interactive Video Popup Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-800 flex items-center justify-between border-b border-slate-700">
              <h3 className="font-bold text-white text-base line-clamp-1">{activeVideo.caption}</h3>
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
