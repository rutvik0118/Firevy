import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';

const testimonialVideos = [
  {
    id: 1,
    title: 'Client who has scaled business using Sapphire...',
    clientName: 'Robert Vance',
    designation: 'CTO, HealthTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 2,
    title: 'Hear what Pravin has got to say about working with Sapphire...',
    clientName: 'Pravin Patel',
    designation: 'Managing Director, MedCare',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 3,
    title: 'Sapphire Successfully Delivered Web & Mobile App Solutions -...',
    clientName: 'Michael Johnson',
    designation: 'Founder, TeleDoc Pro',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 4,
    title: 'Sapphire Software Solutions - Top iOS App Development...',
    clientName: 'David Miller',
    designation: 'VP of Product, CarePulse',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 5,
    title: 'Peer into Satisfaction: Testimonial Video Showcase...',
    clientName: 'Sarah Jenkins',
    designation: 'Head of Digital, WellnessApp',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  }
];

export const ClientStoryVideoSlider = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Automatic Smooth Rotation towards Right Side (Every 2.8 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        } else {
          sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
          setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialVideos.length);
  };

  return (
    <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#ECF5FA] text-slate-900 relative overflow-hidden text-left border-b border-slate-200">
      {/* Centered Full Width Heading & Subtitle */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-6 sm:mb-8 space-y-2.5">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
          Our Story, Their Words
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-5xl mx-auto font-sans">
          From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.
        </p>
      </div>

      {/* Full Width Edge-to-Edge Cards Slider Track */}
      <div
        className="relative w-full overflow-hidden pb-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex items-center space-x-5 sm:space-x-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-4 sm:px-8 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialVideos.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`min-w-[280px] sm:min-w-[320px] max-w-[320px] rounded-2xl bg-white text-slate-900 shadow-lg border border-slate-100 overflow-hidden cursor-pointer transform transition-all duration-500 shrink-0 group ${
                idx === currentIndex ? 'scale-105 shadow-xl ring-2 ring-[#005D95]/40' : 'hover:scale-[1.02]'
              }`}
            >
              {/* Top Wavy Blue Graphic Box with Centered Client Photo */}
              <div className="relative h-44 sm:h-48 bg-gradient-to-br from-[#005282] via-[#005F96] to-[#0073B5] flex items-center justify-center overflow-hidden">
                {/* Wavy Yellow & White Contour Lines SVG Background */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 300 180" fill="none">
                  <path d="M -20 40 Q 60 140 180 30 T 320 120" stroke="#F59E0B" strokeWidth="2.5" />
                  <path d="M -10 120 Q 80 20 200 140 T 330 60" stroke="white" strokeWidth="2" />
                  <circle cx="250" cy="40" r="20" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="40" cy="140" r="15" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 2" />
                </svg>

                {/* Centered Circular Client Avatar Photo */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={video.avatar}
                    alt={video.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom White Bar with Title & Solid Blue Play Button (▶) */}
              <div className="p-4 sm:p-5 bg-white flex items-center justify-between gap-3 h-24 text-left font-sans">
                <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#005D95] transition-colors">
                  {video.title}
                </p>

                {/* Solid Blue Circular Play Button */}
                <div className="w-10 h-10 rounded-full bg-[#005D95] text-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#004b78] transition-all duration-300">
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev (←) & Next (→) Navigation Arrows */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-slate-400 text-slate-800 hover:border-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-all duration-200"
          aria-label="Previous Testimonial"
        >
          <span className="text-lg font-bold">←</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-slate-400 text-slate-800 hover:border-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-all duration-200"
          aria-label="Next Testimonial"
        >
          <span className="text-lg font-bold">→</span>
        </button>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
              <div>
                <h3 className="font-bold text-base sm:text-lg">{activeVideo.clientName}</h3>
                <p className="text-xs text-slate-400">{activeVideo.designation}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Responsive Video Embed */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
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

export default ClientStoryVideoSlider;
