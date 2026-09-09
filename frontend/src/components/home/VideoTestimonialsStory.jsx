import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const defaultTestimonials = [
  {
    id: 1,
    clientName: 'Andrew',
    company: 'Mobile Digital Diary',
    title: "Discover why Andrew trusted firevy.co with his mobile digital diary project : A Client's Honest Experience.",
    img: '/images/awards/hdimages/client_shay.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 2,
    clientName: 'Bruno',
    company: 'Healthcare Innovation Brazil',
    title: 'From Vision to Healthcare Innovation | Client Success With firevy.co - Top IT Company in Brazil',
    img: '/images/awards/hdimages/bruno.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 3,
    clientName: 'Enterprise Client',
    company: 'Mobile App Development',
    title: "From Idea to Reality | Client's Success Story with firevy.co - Best Mobile App Development Company",
    img: '/images/awards/hdimages/client_seven.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 4,
    clientName: 'Wellness Founder',
    company: 'Digital Wellness App',
    title: "From Vision to Wellness | Client's Success Story with firevy.co - Top Mobile App Development Company",
    img: '/images/awards/hdimages/client_eight.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 5,
    clientName: 'Tim',
    company: 'Complex Web Application',
    title: 'Hear out Tim got to say about working with Team firevy.co on building a complex and unique web application.',
    img: '/images/awards/hdimages/clienttestimonial3.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 6,
    clientName: 'Business Expansion Client',
    company: 'Global Enterprise Services',
    title: 'Testimonial from client who has expanded their business using firevy.co Services',
    img: '/images/awards/hdimages/clienttestimonial2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 7,
    clientName: 'Pravin',
    company: 'Software Solutions Partner',
    title: 'Hear what Pravin has got to say about working with firevy.co',
    img: '/images/awards/hdimages/clienttestimonial1.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 8,
    clientName: 'Canadian Enterprise Partner',
    company: 'Web & Mobile Solutions Canada',
    title: 'firevy.co Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada',
    img: '/images/awards/hdimages/img_client2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true
  },
  {
    id: 9,
    clientName: 'Christina',
    company: 'Zetteli',
    title: "Peer into Satisfaction: Christina's Testimonial Video Shines Bright!",
    img: '/images/awards/hdimages/zetteli_client.webp',
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
  const [startIndex, setStartIndex] = useState(0);

  const title = data?.title || 'What Our Clients Have To Say';
  const description = data?.description || "From satisfied clients to enthusiastic users, each testimonial shares a unique perspective on the impact and value of our solution. Get inspired as you listen to authentic voices that showcase the true essence of our project's impact.";

  const rawTestimonials = (data?.testimonials && Array.isArray(data.testimonials) && data.testimonials.length > 0)
    ? data.testimonials
    : defaultTestimonials;

  const testimonials = rawTestimonials.filter((item) => item.isActive !== false);
  const total = testimonials.length;

  const goNext = useCallback(() => {
    if (total <= 1) return;
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, total]);

  if (total === 0) {
    return null;
  }

  // Show up to 4 visible cards in a multi-card row
  const countToShow = Math.min(total, 4);
  const visibleCards = [];
  for (let i = 0; i < countToShow; i++) {
    visibleCards.push(testimonials[(startIndex + i) % total]);
  }

  return (
    <section className="py-14 sm:py-18 bg-[#edf5f9] text-slate-900 relative font-sans overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1550px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[800] tracking-tight text-[#000000] mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] font-[400] text-[#4b5563] leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Multi-Card Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8">
          {visibleCards.map((item, idx) => {
            const cardImg = item.img || item.avatar || '/images/awards/hdimages/client_shay.webp';
            const cardTitle = item.title || item.clientName || item.name || 'Client Testimonial';

            return (
              <div
                key={`${item.id || item.clientName || startIndex}-${idx}`}
                onClick={() => {
                  if (item.videoUrl) {
                    window.open(item.videoUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="bg-white rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer border border-slate-100/80"
              >
                {/* Upper: Video Portrait Thumbnail */}
                <div className="relative w-full aspect-[2/1] overflow-hidden bg-[#005d89]">
                  <img
                    src={cardImg}
                    alt={cardTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Lower: Title Text & Blue Play Button */}
                <div className="p-4 sm:p-5 bg-white flex items-center justify-between gap-3 min-h-[96px]">
                  <p className="text-[13px] sm:text-[13.5px] font-[600] text-[#1f2937] leading-[1.4] line-clamp-3 font-sans group-hover:text-[#005d89] transition-colors flex-1 text-left">
                    {cardTitle}
                  </p>
                  <div className="shrink-0">
                    <img
                      src="/images/ic_video_blue.svg"
                      alt="Play Video"
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Navigation Arrows at the Bottom */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-800 hover:text-black flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialsStory;

