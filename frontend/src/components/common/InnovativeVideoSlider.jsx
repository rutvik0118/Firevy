import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const videoList = [
  {
    id: 1,
    title: 'Top AI Avatar Generator App Development Company | Sapphire Solutions',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'PersonaFX',
    subText: 'AI-Powered Healthcare Diagnostic & Virtual Assistant'
  },
  {
    id: 2,
    title: 'Navigate effortlessly with Waymark: Guide Nearby Hospitals & Clinics',
    thumbnail: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'Locate & Explore',
    subText: 'Real-Time Hospital, Pharmacy & ER GPS Guidance'
  },
  {
    id: 3,
    title: 'Explore trends, essential products, and wellness with BEAUTYBEE App',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'BEAUTYBEE',
    subText: 'BEAUTYBEE: Discover Your Beauty & Health Essentials'
  },
  {
    id: 4,
    title: 'BREATHCRAFT : Unleash Your Potential through Mindful Breathing',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'BREATHCRAFT',
    subText: 'Improve mental clarity & wellness with BreathCraft App'
  },
  {
    id: 5,
    title: 'Telemedicine App Development & Virtual Consultations | Sapphire Solutions',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'HealthConnect',
    subText: 'Remote Doctor Booking & EHR Health Record Management'
  },
  {
    id: 6,
    title: 'Personalized Health & Remote Fitness Training App Development',
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso',
    brand: 'Sapphire',
    tag: 'FitTrack AI',
    subText: 'Real-Time Fitness Analytics & Virtual Trainer Consultations'
  }
];

export const InnovativeVideoSlider = () => {
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
          setCurrentIndex((prev) => (prev + 1) % videoList.length);
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#005D95] text-white relative overflow-hidden text-left border-t border-blue-900/40">
      {/* Centered Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-10 space-y-2.5">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white tracking-tight font-sans">
          Unveiling Our Innovative Solution
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-100/90 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
          From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
        </p>
      </div>

      {/* Full Width Video Cards Continuous Auto-Rotating Slider Track (Edge-to-Edge) */}
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
          {videoList.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`min-w-[280px] sm:min-w-[320px] max-w-[320px] rounded-2xl bg-white text-slate-900 shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 shrink-0 group ${
                idx === currentIndex ? 'scale-105 shadow-2xl ring-2 ring-white/60' : 'hover:scale-[1.02] opacity-95'
              }`}
            >
              {/* Thumbnail Image Container */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                />
                
                {/* Dark Gradient Overlay & Brand Watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
                
                {/* Top Right Sapphire Brand Stamp */}
                <div className="absolute top-3 right-3 text-[10px] font-black uppercase text-white tracking-widest bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                  {video.brand}
                </div>

                {/* Top Left Tag */}
                <div className="absolute top-3 left-3 text-xs font-bold text-amber-400">
                  {video.tag}
                </div>

                {/* Circular White & Blue Play Button (▶) */}
                <div className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-white text-[#005D95] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#005D95] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* White Bottom Text Bar */}
              <div className="p-4 sm:p-5 bg-white text-left font-sans flex flex-col justify-between h-24">
                <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#005D95] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 font-normal">
                  {video.subText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev (←) & Next (→) Navigation Arrows */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          aria-label="Previous Video"
        >
          <span className="text-lg font-bold">←</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
          aria-label="Next Video"
        >
          <span className="text-lg font-bold">→</span>
        </button>
      </div>

      {/* Centered White Button (View Insightful Videos) */}
      <div className="mt-6 text-center">
        <Link
          to="/company/insightful-videos"
          className="px-8 py-3.5 bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base rounded-md shadow-md hover:shadow-xl transition-all duration-300 inline-block font-sans transform hover:-translate-y-0.5 cursor-pointer"
        >
          View Insightful Videos
        </Link>
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
              <h3 className="font-bold text-base sm:text-lg">{activeVideo.title}</h3>
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

export default InnovativeVideoSlider;
