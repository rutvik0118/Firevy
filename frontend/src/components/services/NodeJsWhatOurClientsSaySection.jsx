import React, { useState, useEffect, useRef } from 'react';

const clientReviews = [
  {
    id: 1,
    headline: "Were always able to deliver the results and ensured excellent communication.",
    body: "Sapphire Software Solutions drastically improved the platform and single-handedly developed all of the features in a timely manner. They also ensured project management and updated the client on...",
    name: "Julius John",
    location: "Tanzania",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  },
  {
    id: 2,
    headline: "They were always willing to make sure that we were satisfied with the final product, which was outstanding.",
    body: "Sapphire Software Solutions' support enabled the company to build a solution that automates their workflows. The team was prompt, communicative, and helpful in fulfilling deadlines and keeping everything on...",
    name: "Marios C.",
    location: "Limassol, Cyprus",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  },
  {
    id: 3,
    headline: "The team is very professional and friendly.",
    body: "Thanks to Sapphire Software Solutions, we have launched the app and my customers are happy with the tool. Currently, we have continuous work with Sapphire team to build new features and improve the product with their...",
    name: "Tim",
    location: "New Hampshire",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  },
  {
    id: 4,
    headline: "Sapphire delivered flawlessly what we envisioned. We were astonished by their work.",
    body: "The product was delivered within budget and timeframe. Sapphire Software Solutions was able to work around the client's budget limitations. Their team provided excellent customer service and...",
    name: "Hamendra Shah",
    location: "Kenya",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  },
  {
    id: 5,
    headline: "They were excellent at finding the right level of detail in implementation and critical thinking.",
    body: "Sapphire Software Solutions impressed the client with the quality of their deliverables. They provided high-end designs, achieved the client's goals in record days, and prioritized the website's...",
    name: "Smit Shah",
    location: "Parkland, Florida",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  }
];

const StarRating = () => (
  <div className="flex items-center justify-center space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 text-[#F59E0B] fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const NodeJsWhatOurClientsSaySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 550;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
  };

  return (
    <section
      className="py-12 sm:py-14 bg-[#005F96] font-sans w-full overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Title */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-[800] text-white tracking-tight leading-tight">
          What Our Clients Say
        </h2>
      </div>

      {/* Carousel Track */}
      <div className="w-full relative mb-2">
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientReviews.map((card) => (
            <div
              key={card.id}
              className="w-[440px] sm:w-[500px] lg:w-[530px] shrink-0 bg-[#EAF4FB] rounded-[24px] p-5 sm:p-6 shadow-md flex flex-row gap-4 sm:gap-5 justify-between items-stretch select-none border border-white/60 transition-all duration-300 hover:shadow-xl"
            >
              {/* Left Column: Clutch Logo, Headline, Quote, Client Info */}
              <div className="flex-1 flex flex-col justify-between pr-1 text-left min-w-0">
                <div>
                  {/* Clutch Logo with red dot */}
                  <div className="flex items-center text-[#1E293B] font-[900] text-[22px] sm:text-[24px] tracking-tight font-sans mb-3">
                    <span>Clutc</span>
                    <span className="text-[#DE281F]">h</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DE281F] ml-0.5 mb-1.5 inline-block" />
                  </div>

                  {/* Headline */}
                  <h3 className="text-[14px] sm:text-[14.5px] font-[800] text-[#0B0F19] leading-snug mb-2 line-clamp-2">
                    {card.headline}
                  </h3>

                  {/* Body Subtext */}
                  <p className="text-[11.5px] sm:text-[12px] text-[#475569] leading-relaxed line-clamp-3 font-normal">
                    {card.body}
                  </p>
                </div>

                {/* Author Details */}
                <div className="flex items-center space-x-2.5 pt-3 mt-2 border-t border-slate-200/60">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-10 h-10 rounded-full object-cover border border-white shrink-0 shadow-xs"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80';
                    }}
                  />
                  <div>
                    <h4 className="text-[13px] font-[800] text-[#0B0F19] leading-tight">
                      {card.name}
                    </h4>
                    <p className="text-[11.5px] text-[#64748B] font-normal leading-tight mt-0.5">
                      {card.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pure White Score Box & Metrics Breakdown */}
              <div className="w-[150px] sm:w-[165px] shrink-0 bg-white rounded-[20px] p-4 sm:p-5 flex flex-col justify-between shadow-xs border border-slate-100 text-center">
                {/* Big Score & Stars */}
                <div>
                  <div className="text-[34px] sm:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-none mb-1.5">
                    {card.rating}
                  </div>
                  <StarRating />
                </div>

                {/* Thin Divider Line */}
                <div className="w-full h-px bg-slate-100 my-2.5" />

                {/* 4 Score Metrics */}
                <div className="space-y-1.5 text-left text-[11px] sm:text-[11.5px]">
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span>Quality</span>
                    <span className="font-[800] text-[#0B0F19]">{card.metrics.quality}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span>Schedule</span>
                    <span className="font-[800] text-[#0B0F19]">{card.metrics.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span>Cost</span>
                    <span className="font-[800] text-[#0B0F19]">{card.metrics.cost}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span className="truncate pr-1">Willing to Refer</span>
                    <span className="font-[800] text-[#0B0F19]">{card.metrics.willingToRefer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="text-white/80 hover:text-white transition-all p-1 hover:scale-110 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="text-white/80 hover:text-white transition-all p-1 hover:scale-110 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NodeJsWhatOurClientsSaySection;
