import React, { useState, useEffect, useCallback } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

const defaultTestimonials = [
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

export const VideoTestimonialsStory = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'What Our Clients Have To Say';
  const description = data?.description || 'Hear how our clients share their positive experiences of working with firevy.co team. How we’ve helped them to achieve business goals and deliver successful projects.';

  const testimonials = (data?.testimonials && Array.isArray(data.testimonials) && data.testimonials.filter(t => t.isActive !== false).length > 0)
    ? data.testimonials.filter(t => t.isActive !== false)
    : defaultTestimonials;

  const total = testimonials.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll every 3.5 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(goNext, 3500);
    return () => clearInterval(timer);
  }, [goNext, total]);

  // Show 5 items (4 full + 1 partial)
  const visibleCount = Math.min(5, total);
  const visibleCards = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(currentIndex + i) % total]
  );

  return (
    <section
      className="py-16 border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden"
      style={{ backgroundColor: '#DFEEF7' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Carousel Row with Left/Right floating arrow controls */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#006B8F] hover:text-white transition-all duration-200"
            aria-label="Previous Testimonials"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Cards Track: 4 cards visible side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 overflow-hidden py-2">
            {visibleCards.slice(0, 4).map((item, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] border border-slate-100 flex flex-col group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ height: '340px' }}
              >
                {/* Upper: Video Face Image with Play Button */}
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-800 shrink-0">
                  <img
                    src={item.avatar || item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Centered White Circle Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white text-[#006B8F] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#006B8F] group-hover:text-white transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Lower: Title Text */}
                <div className="p-4 flex-1 flex items-center bg-white text-left">
                  <p className="text-[13px] font-[700] text-slate-800 leading-snug line-clamp-3 font-sans group-hover:text-[#006B8F] transition-colors">
                    {item.name || item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#006B8F] hover:text-white transition-all duration-200"
            aria-label="Next Testimonials"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsStory;
