import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Container from '../common/Container';

const testimonialsData = [
  {
    id: 1,
    name: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    title: 'Sapphire Software Solutions - Top iOS App Development Company in USA!',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    name: 'Christina Vance',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    title: "From Vision to Education | Client's Success Story with Sapphire Solutions",
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    name: 'Andrew Mitchell',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    title: 'Discover why Andrew trusted Sapphire Software Solutions with his mobile digital diary project : A...',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    name: 'Michael Robert',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    title: 'Sapphire Successfully Delivered Web & Mobile App Solutions - Leading IT Co...',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    name: 'Tim S.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    title: 'Hear out Tim got to say about working with Team Sapphire on building a complex and..',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    name: 'Dr. Hesham Abdelfattah',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    title: 'From Vision to Healthcare Innovation | Client Success With Sapphire',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    name: 'Pravin M.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    title: 'Hear what Pravin has got to say about working with Sapphire Software Solutions',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const OurStoryTheirWordsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  // Exact 2-Second Auto-Scroll Interval (Pauses smoothly on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 2000); // 2 seconds auto scroll as requested

    return () => clearInterval(interval);
  }, [isHovered]);

  // Smooth scroll synchronization
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 640 ? 290 : window.innerWidth < 1024 ? 325 : 345;
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
      className="py-12 sm:py-16 bg-[#E8F4FC] border-b border-sky-200/70 font-sans w-full overflow-hidden select-none text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <Container className="max-w-5xl text-center mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
          Our Story, Their Words
        </h2>
        <p className="text-[13px] sm:text-[14.5px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </Container>

      {/* Full-Width Edge-to-Edge Multi-Card Horizontal Carousel */}
      <div className="w-full relative mb-4">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-2 px-4 sm:px-8 md:px-12 lg:px-16 scroll-smooth select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className={`w-[280px] sm:w-[315px] lg:w-[335px] shrink-0 bg-white rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group cursor-pointer ${
                idx === currentIndex ? 'ring-2 ring-[#005F96] shadow-xl' : 'opacity-95'
              }`}
            >
              {/* Top Banner Graphic (Deep Blue Banner with Gold Curved Waves & Centered Client Avatar) */}
              <div className="relative w-full h-[155px] sm:h-[165px] bg-gradient-to-r from-[#006EA8] via-[#005F96] to-[#004A75] overflow-hidden flex items-center justify-center">
                {/* Organic Gold & White Wave Background Vectors */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                  viewBox="0 0 340 165"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-20 40 C60 10, 80 120, 180 50 C260 -10, 280 130, 360 80"
                    stroke="#F59E0B"
                    strokeWidth="2"
                  />
                  <path
                    d="M-10 130 C70 90, 120 160, 220 110 C300 70, 320 140, 360 120"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="45" cy="55" r="30" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="295" cy="115" r="35" stroke="white" strokeWidth="1.5" opacity="0.4" />
                </svg>

                {/* Centered Client Round Headshot Avatar */}
                <div className="relative z-10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-22 h-22 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Bottom Caption & Circular Play Button */}
              <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between gap-3 min-h-[72px] sm:min-h-[78px] border-t border-slate-100">
                <p className="text-[11.5px] sm:text-[12px] font-[600] text-slate-800 leading-snug line-clamp-2 text-left group-hover:text-[#005F96] transition-colors">
                  {item.title}
                </p>
                <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#005F96] group-hover:bg-[#004A75] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-all">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current ml-0.5" stroke="none">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center justify-center space-x-4 mt-6 mb-1">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-8 h-8 rounded-full border border-slate-600 bg-white hover:bg-[#005F96] hover:text-white hover:border-[#005F96] text-slate-800 flex items-center justify-center transition-all cursor-pointer font-bold shadow-xs active:scale-95 text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-8 h-8 rounded-full border border-slate-600 bg-white hover:bg-[#005F96] hover:text-white hover:border-[#005F96] text-slate-800 flex items-center justify-center transition-all cursor-pointer font-bold shadow-xs active:scale-95 text-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Video Popup Lightbox Modal */}
      <AnimatePresence>
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
                <h3 className="font-bold text-white text-base line-clamp-1">{activeVideo.title}</h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-slate-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  src={`${activeVideo.videoUrl}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurStoryTheirWordsSection;

