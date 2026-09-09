import React, { useState, useEffect, useRef } from 'react';

const defaultTestimonials = [
  {
    id: 1,
    title: "Idea to Reality | Client's Success Story\nSapphire - Best Mobile App..",
    img: '/images/awards/hdimages/client_seven.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: "From Vision to Wellness | Client's Success\nStory with Sapphire - Top Mobile App..",
    img: '/images/awards/hdimages/client_eight.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Hear out Tim got to say about working with\nTeam Sapphire on building a complex and..',
    img: '/images/awards/hdimages/clienttestimonial3.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Testimonial from client who has expanded\ntheir business using Sapphire Services',
    img: '/images/awards/hdimages/clienttestimonial2.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'Discover why Andrew trusted Sapphire Software Solutions with his mobile digital diary..',
    img: '/images/awards/hdimages/client_shay.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'From Vision to Healthcare Innovation | Client Success With Sapphire - Top IT Company..',
    img: '/images/awards/hdimages/bruno.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    title: 'Hear what Pravin has got to say about working with Sapphire Software Solutions',
    img: '/images/awards/hdimages/clienttestimonial1.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    title: 'Sapphire Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada',
    img: '/images/awards/hdimages/img_client2.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 9,
    title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
    img: '/images/awards/hdimages/zetteli_client.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 10,
    title: "From Vision to Education | Client's Success Story with Sapphire Solutions",
    img: '/images/awards/hdimages/vision_client.webp',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }
];

export const VideoTestimonialsStory = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const title = data?.title || 'Our Story, Their Words';
  const description = data?.description || "From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.";

  const rawTestimonials = (data?.testimonials && Array.isArray(data.testimonials) && data.testimonials.length > 0)
    ? data.testimonials
    : defaultTestimonials;

  // Normalize items to ensure img and title exist
  const testimonials = rawTestimonials.map((item, idx) => ({
    id: item.id || idx + 1,
    title: item.title || item.name || item.caption || `Client Testimonial ${idx + 1}`,
    img: item.img || item.avatar || item.image || defaultTestimonials[idx % defaultTestimonials.length].img,
    videoUrl: item.videoUrl || 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'
  }));

  // Auto-scroll every 3.5s when not hovered
  useEffect(() => {
    if (isHovered || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 350;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      className="py-12 sm:py-16 bg-[#EAF4FA] text-slate-900 relative font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] tracking-tight text-slate-950 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[13.5px] sm:text-[15px] font-[400] text-[#475569] leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Full Width Horizontal Carousel Track */}
        <div className="w-full relative mb-6">
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-4 sm:px-8 lg:px-10 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => setActiveVideo(item)}
                className="w-[300px] sm:w-[345px] lg:w-[370px] xl:w-[385px] shrink-0 bg-white rounded-[18px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group select-none border border-slate-200/80"
              >
                {/* Upper: Sapphire Blue Video Banner with Yellow Waves & Large Centered Client Portrait */}
                <div className="relative w-full h-[175px] sm:h-[195px] bg-gradient-to-br from-[#0086C6] via-[#007BB8] to-[#006093] flex items-center justify-center overflow-hidden">
                  {/* Decorative Yellow & Cyan Graphic Curves */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
                    viewBox="0 0 320 180"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    {/* Subtle dot pattern */}
                    <g opacity="0.18">
                      <circle cx="20" cy="20" r="1.5" fill="#fff" />
                      <circle cx="40" cy="20" r="1.5" fill="#fff" />
                      <circle cx="60" cy="20" r="1.5" fill="#fff" />
                      <circle cx="80" cy="20" r="1.5" fill="#fff" />
                      <circle cx="20" cy="40" r="1.5" fill="#fff" />
                      <circle cx="40" cy="40" r="1.5" fill="#fff" />
                      <circle cx="60" cy="40" r="1.5" fill="#fff" />
                      <circle cx="80" cy="40" r="1.5" fill="#fff" />
                      <circle cx="20" cy="60" r="1.5" fill="#fff" />
                      <circle cx="40" cy="60" r="1.5" fill="#fff" />
                      <circle cx="60" cy="60" r="1.5" fill="#fff" />
                      <circle cx="80" cy="60" r="1.5" fill="#fff" />
                      <circle cx="260" cy="110" r="1.5" fill="#fff" />
                      <circle cx="280" cy="110" r="1.5" fill="#fff" />
                      <circle cx="300" cy="110" r="1.5" fill="#fff" />
                      <circle cx="260" cy="130" r="1.5" fill="#fff" />
                      <circle cx="280" cy="130" r="1.5" fill="#fff" />
                      <circle cx="300" cy="130" r="1.5" fill="#fff" />
                      <circle cx="260" cy="150" r="1.5" fill="#fff" />
                      <circle cx="280" cy="150" r="1.5" fill="#fff" />
                      <circle cx="300" cy="150" r="1.5" fill="#fff" />
                    </g>
                    {/* Primary yellow wavy line */}
                    <path
                      d="M -10 45 C 50 15, 120 70, 190 25 C 250 -10, 280 60, 340 20"
                      stroke="#FACC15"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Secondary yellow wavy line */}
                    <path
                      d="M -10 95 C 60 140, 140 100, 210 145 C 270 180, 300 110, 340 130"
                      stroke="#FACC15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    {/* Cyan accent wave */}
                    <path
                      d="M 10 160 C 80 110, 160 160, 240 110 C 280 80, 310 130, 340 100"
                      stroke="#67E8F9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>

                  {/* Centered Circular Portrait Headshot */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[4px] border-white overflow-hidden shadow-xl bg-white/10 shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/images/awards/hdimages/clienttestimonial1.webp';
                      }}
                    />
                  </div>
                </div>

                {/* Lower: White Caption Bar with Title & Dark Blue Play Button */}
                <div className="p-4 sm:p-5 bg-white flex items-center justify-between gap-3.5 min-h-[88px] sm:min-h-[96px] border-t border-slate-100">
                  <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] font-[600] text-[#1E293B] leading-[1.4] line-clamp-2 font-sans group-hover:text-[#006093] transition-colors flex-1 text-left whitespace-pre-line">
                    {item.title}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideo(item);
                    }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#006093] hover:bg-[#004B73] text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md cursor-pointer"
                    aria-label="Play video"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white ml-0.5" stroke="none">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Navigation Arrows at the Bottom */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-black hover:scale-125 active:scale-95 transition-all text-2xl font-bold cursor-pointer select-none"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-9 h-9 flex items-center justify-center text-slate-700 hover:text-black hover:scale-125 active:scale-95 transition-all text-2xl font-bold cursor-pointer select-none"
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
              <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1">
                {activeVideo.title.replace('\n', ' ')}
              </h3>
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
                title={activeVideo.title}
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

export default VideoTestimonialsStory;
