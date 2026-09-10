import React, { useState, useEffect, useRef } from 'react';

const defaultTestimonials = [
  {
    id: 1,
    clientName: 'Pravin',
    company: 'Software Solutions Partner',
    title: 'Hear what Pravin has got to say about working with firevy.co',
    img: '/images/awards/hdimages/clienttestimonial1.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 2,
    clientName: 'Canadian Enterprise Partner',
    company: 'Web & Mobile Solutions Canada',
    title: 'firevy.co Successfully Delivered Web & Mobile App Solutions - Top IT Company in Canada',
    img: '/images/awards/hdimages/img_client2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 3,
    clientName: 'Andrew Mitchell',
    company: 'Mobile Digital Diary',
    title: 'firevy.co Software Solutions - Top iOS App Development Company & Client Success Story',
    img: '/images/awards/hdimages/client_shay.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 4,
    clientName: 'Christina',
    company: 'Zetteli',
    title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
    img: '/images/awards/hdimages/zetteli_client.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 5,
    clientName: 'Business Expansion Client',
    company: 'Global Enterprise Services',
    title: 'Testimonial from client who has expanded their business using firevy.co Services',
    img: '/images/awards/hdimages/clienttestimonial2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 6,
    clientName: 'Bruno Silva',
    company: 'Healthcare Innovation Brazil',
    title: 'From Vision to Healthcare Innovation | Client Success With firevy.co - Top IT Company in Brazil',
    img: '/images/awards/hdimages/bruno.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 7,
    clientName: 'Enterprise Client',
    company: 'Mobile App Development',
    title: "From Idea to Reality | Client's Success Story with firevy.co - Best Mobile App Development Company",
    img: '/images/awards/hdimages/client_seven.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 8,
    clientName: 'Wellness Founder',
    company: 'Digital Wellness App',
    title: "From Vision to Wellness | Client's Success Story with firevy.co - Top Mobile App Development Company",
    img: '/images/awards/hdimages/client_eight.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 9,
    clientName: 'Tim',
    company: 'Complex Web Application',
    title: 'Hear out Tim got to say about working with Team firevy.co on building a complex and unique web application.',
    img: '/images/awards/hdimages/clienttestimonial3.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 10,
    clientName: 'Education Client',
    company: 'Vision Education Platform',
    title: "From Vision to Education | Client's Success Story with firevy.co Solutions",
    img: '/images/awards/hdimages/vision_client.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
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
  const testimonials = rawTestimonials
    .filter((item) => item.isActive !== false)
    .map((item, idx) => ({
      id: item.id || idx + 1,
      clientName: item.clientName || '',
      company: item.company || '',
      title: item.title || item.name || item.caption || `Client Testimonial ${idx + 1}`,
      img: item.img || item.avatar || item.image || defaultTestimonials[idx % defaultTestimonials.length].img,
      videoUrl: item.videoUrl || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }));

  // Auto-scroll every 2.8s towards right side (pauses on hover)
  useEffect(() => {
    if (isHovered || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const scrollDistance = 350 + 24; // card width + gap

        if (container.scrollLeft >= maxScrollLeft - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setCurrentIndex(0);
        } else {
          container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const handlePrev = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollDistance = 350 + 24;
      if (container.scrollLeft <= 10) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        setCurrentIndex(testimonials.length - 1);
      } else {
        container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      }
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollDistance = 350 + 24;
      if (container.scrollLeft >= maxScrollLeft - 15) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }
  };

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    return url;
  };

  if (testimonials.length === 0) return null;

  return (
    <section
      className="py-12 sm:py-16 bg-[#EAF4FA] text-slate-900 relative font-sans w-full overflow-hidden border-b border-slate-200/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[900] tracking-tight text-slate-950 mb-3 font-sans">
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
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-3 px-4 sm:px-8 lg:px-10 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                onClick={() => setActiveVideo(item)}
                className="w-[290px] sm:w-[330px] lg:w-[350px] shrink-0 bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group select-none border border-slate-200/80"
              >
                {/* Upper: Ocean Blue Banner with Decorative Yellow Waves & Center Avatar */}
                <div className="relative w-full h-[160px] sm:h-[175px] bg-gradient-to-br from-[#0086C6] via-[#007BB8] to-[#005E90] flex items-center justify-center overflow-hidden">
                  {/* Decorative Yellow & Cyan Graphic Curves */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
                    viewBox="0 0 320 180"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    {/* Subtle dot pattern */}
                    <g opacity="0.2">
                      <circle cx="15" cy="15" r="1.5" fill="#fff" />
                      <circle cx="30" cy="15" r="1.5" fill="#fff" />
                      <circle cx="45" cy="15" r="1.5" fill="#fff" />
                      <circle cx="15" cy="30" r="1.5" fill="#fff" />
                      <circle cx="30" cy="30" r="1.5" fill="#fff" />
                      <circle cx="45" cy="30" r="1.5" fill="#fff" />
                      <circle cx="275" cy="145" r="1.5" fill="#fff" />
                      <circle cx="290" cy="145" r="1.5" fill="#fff" />
                      <circle cx="305" cy="145" r="1.5" fill="#fff" />
                      <circle cx="275" cy="160" r="1.5" fill="#fff" />
                      <circle cx="290" cy="160" r="1.5" fill="#fff" />
                      <circle cx="305" cy="160" r="1.5" fill="#fff" />
                    </g>
                    {/* Primary yellow wavy line */}
                    <path
                      d="M -10 35 C 60 5, 130 65, 200 20 C 260 -15, 290 55, 340 15"
                      stroke="#FACC15"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Secondary yellow wavy line */}
                    <path
                      d="M -10 85 C 60 130, 140 90, 210 135 C 270 170, 300 100, 340 120"
                      stroke="#FACC15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    {/* Cyan accent wave */}
                    <path
                      d="M 10 155 C 80 105, 160 155, 240 105 C 280 75, 310 125, 340 95"
                      stroke="#67E8F9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>

                  {/* Centered Circular Portrait Headshot */}
                  <div className="relative z-10 w-26 h-26 sm:w-28 sm:h-28 rounded-full border-[3.5px] border-white overflow-hidden shadow-lg bg-white/10 shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/images/awards/hdimages/clienttestimonial1.webp';
                      }}
                    />
                  </div>
                </div>

                {/* Lower: White Caption Strip with Title & Blue Circular Play Button */}
                <div className="p-4 bg-white flex items-center justify-between gap-3 min-h-[86px] sm:min-h-[92px] border-t border-slate-100">
                  <p className="text-[13px] sm:text-[13.5px] font-[600] text-[#1E293B] leading-[1.38] line-clamp-2 font-sans group-hover:text-[#006093] transition-colors flex-1 text-left">
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
                      <polygon points="7 5 19 12 7 19 7 5" />
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
            className="text-slate-800 hover:text-black hover:scale-125 active:scale-95 transition-all text-2xl font-bold cursor-pointer select-none p-1"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="text-slate-800 hover:text-black hover:scale-125 active:scale-95 transition-all text-2xl font-bold cursor-pointer select-none p-1"
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
                src={`${getEmbedUrl(activeVideo.videoUrl)}?autoplay=1`}
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
