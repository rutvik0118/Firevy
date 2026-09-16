import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react';

export const OurStoryTheirWordsVideoTestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState('');

  // 11 Client Video Testimonials collected from user's 4 uploaded screenshots
  const testimonials = [
    {
      id: 1,
      title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 2,
      title: "From Vision to Education | Client's Success Story with Sapphire...",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 3,
      title: 'Discover why Andrew trusted Sapphire Software Solutions with...',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 4,
      title: 'From Vision to Healthcare Innovation | Client Success With...',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 5,
      title: "From Idea to Reality | Client's Success Story with Sapphire -...",
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 6,
      title: "From Vision to Wellness | Client's Success Story with Sapphire - To...",
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 7,
      title: 'Hear out Tim got to say about working with Team Sapphire on...',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 8,
      title: 'Testimonial from client who has expanded their business using...',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 9,
      title: 'Hear what Pravin has got to say about working with Sapphire...',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 10,
      title: 'Sapphire Successfully Delivered Web & Mobile App Solutions -...',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      id: 11,
      title: 'Sapphire Software Solutions - Top iOS App Development Company...',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    }
  ];

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // 2.5-Second Auto Scroll
  useEffect(() => {
    const timer = setInterval(goNext, 2500);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleOpenVideo = (item) => {
    setActiveVideoTitle(item.title);
    setActiveVideoUrl(item.videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideoUrl(null);
    setActiveVideoTitle('');
  };

  return (
    <section className="py-16 bg-[#E5F3FA] text-slate-900 relative font-sans w-full overflow-hidden border-b border-slate-200">
      {/* Title & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[950] tracking-tight text-slate-950 leading-tight font-sans">
          Our Story, Their Words
        </h2>
        <p className="text-xs sm:text-sm lg:text-base font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </div>

      {/* Multi-Card Video Testimonial Carousel */}
      <div className="w-full px-4 sm:px-8 max-w-[1440px] mx-auto mb-8">
        <div className="relative overflow-hidden w-full">
          <div
            className="flex gap-5 transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 280}px)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenVideo(item)}
                className="w-[260px] sm:w-[290px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-md border border-slate-200/80 group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Blue Wave Pattern Area with Centered Avatar */}
                <div className="relative h-[150px] sm:h-[165px] bg-gradient-to-br from-[#0080B0] via-[#006080] to-[#004B6E] p-4 flex items-center justify-center overflow-hidden">
                  
                  {/* Decorative Wavy Lines SVG Vector */}
                  <svg className="absolute inset-0 w-full h-full text-yellow-400/30 pointer-events-none" viewBox="0 0 300 160" fill="none">
                    <path d="M -20 30 Q 100 10 200 60 T 320 40" stroke="#FFC107" strokeWidth="3" fill="none" opacity="0.4" />
                    <path d="M -20 120 Q 100 90 200 140 T 320 100" stroke="#00D2FF" strokeWidth="2" fill="none" opacity="0.3" />
                  </svg>

                  {/* Circular Avatar Graphic (Exact Screenshot 1:1 Match) */}
                  <div className="relative z-10 w-22 h-22 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                    <img
                      src={item.avatar}
                      alt="Client Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

                {/* Bottom Label Box with Title & Dark Blue Play Icon */}
                <div className="p-4 bg-white text-left font-sans flex items-center justify-between space-x-3 min-h-[75px]">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#0080B0] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-[#005F96] text-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          className="p-2.5 rounded-full border border-slate-400 hover:bg-slate-200/60 text-slate-800 transition-colors shadow-xs"
          aria-label="Previous Testimonials"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="p-2.5 rounded-full border border-slate-400 hover:bg-slate-200/60 text-slate-800 transition-colors shadow-xs"
          aria-label="Next Testimonials"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Video Modal Popup Overlay */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 bg-slate-900 border-b border-slate-800 text-white">
              <h4 className="font-bold text-sm sm:text-base line-clamp-1">{activeVideoTitle}</h4>
              <button
                onClick={handleCloseVideo}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center font-bold text-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={activeVideoUrl}
                title={activeVideoTitle}
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

export default OurStoryTheirWordsVideoTestimonialsSlider;
