import React, { useState, useEffect, useCallback } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

export const VideoTestimonialsStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'From Idea to Reality | Client\'s Success Story with firevy.co -...',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'From Vision to Wellness | Client\'s Success Story with firevy.co - To...',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Hear out Tim got to say about working with Team firevy.co on...',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Testimonial from client who has expanded their business using...',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Hear what Pravin has got to say about working with firevy.co...',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'firevy.co Successfully Delivered Web & Mobile App Solutions -...',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    }
  ];

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 3500);
    return () => clearInterval(timer);
  }, [goNext]);

  // Show 5 items (4 full + 1 partial)
  const visibleCount = 5;
  const visibleCards = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(currentIndex + i) % total]
  );

  return (
    <section
      className="py-16 border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden"
      style={{ backgroundColor: '#DFEEF7' }}
    >
      {/* Section Heading */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
          Our Story, Their Words
        </h2>
        <p className="text-[16px] font-[400] text-slate-700 leading-relaxed font-sans max-w-3xl mx-auto">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="w-full overflow-hidden mb-8 pl-4 sm:pl-8">
        <div className="flex gap-4 transition-all duration-500 ease-in-out">
          {visibleCards.map((t, i) => (
            <div
              key={`${currentIndex}-${i}`}
              className="shrink-0 rounded-[14px] bg-white border border-slate-200/80 shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow group"
              style={{
                width: '280px',
                height: '210px',
                opacity: i === visibleCount - 1 ? 0.55 : 1,
              }}
            >
              {/* Card Top: Blue area with yellow graphic wavy lines & circular portrait */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  height: '135px',
                  background: 'linear-gradient(145deg, #0284C7 0%, #0369A1 100%)',
                }}
              >
                {/* Yellow decorative wavy rings */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-20 40 Q 60 10, 140 50 T 300 20"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M-10 110 Q 80 70, 170 120 T 310 90"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="1.5"
                  />
                  <circle cx="240" cy="30" r="28" fill="none" stroke="#FCD34D" strokeWidth="1" opacity="0.6" />
                  <circle cx="40" cy="110" r="20" fill="none" stroke="#FCD34D" strokeWidth="1" opacity="0.5" />
                </svg>

                {/* Circular Portrait Image */}
                <div className="relative z-10">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-md group-hover:scale-105 transition-transform"
                  />
                </div>
              </div>

              {/* Card Bottom: White bar with title text and Navy Blue circular play button */}
              <div className="p-3.5 bg-white flex items-center justify-between gap-2.5 flex-grow">
                <p className="text-[12px] font-[600] text-slate-800 leading-snug font-sans line-clamp-2 text-left">
                  {t.name}
                </p>

                {/* Navy Blue Circular Play Button */}
                <div className="w-8 h-8 rounded-full bg-[#003853] group-hover:bg-[#005478] flex items-center justify-center shrink-0 shadow-sm text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Next"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default VideoTestimonialsStory;
