import React, { useState, useEffect, useRef } from 'react';

const clientReviews = [
  {
    id: 1,
    headline: "They were excellent at finding the right level of detail in implementation and critical thinking to give good...",
    body: "Sapphire Software Solutions impressed the client with the quality of their deliverables. They provided high-end designs, achieved the client's goals in record days, and prioritized the website's...",
    name: "Smit Shah",
    location: "Parkland, Florida",
    avatar: "/images/smit_shah.webp",
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
    headline: "The team's spirit is nice, and I've found the team cooperative at each step of the project.",
    body: "While the project is ongoing, the results thus far have met the expectations of the internal team. Sapphire Software Solutions has been prepared to accommodate requests and changes in the...",
    name: "Hesham Abdelfattah",
    location: "London, United Kingdom",
    avatar: "/images/hesham_abdelfattah.webp",
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
    headline: "Sapphire delivered flawlessly what we envisioned. We were astonished by their work.",
    body: "The product was delivered within budget and timeframe. Sapphire Software Solutions was able to work around the client's budget limitations. Their team provided excellent customer service and...",
    name: "Hamendra Shah",
    location: "Kenya",
    avatar: "/images/derrick_surratt.webp",
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
    headline: "Their communication and project management were top-notch throughout our mobile development.",
    body: "The team demonstrated stellar commitment and deep technical proficiency in building our iOS and Android mobile apps. Highly recommended for enterprise development.",
    name: "Manish Shah",
    location: "United States",
    avatar: "/images/manish_shah.webp",
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
    headline: "Reliable partner for complex software engineering and seamless integration.",
    body: "Sapphire Software Solutions has delivered phenomenal results across all project milestones on time and within budget, showing excellent agility and technical maturity.",
    name: "Bhavesh Patel",
    location: "Australia",
    avatar: "/images/bhavesh_patel.webp",
    rating: "5.0",
    metrics: {
      quality: "5.0",
      schedule: "5.0",
      cost: "5.0",
      willingToRefer: "5.0"
    }
  },
  {
    id: 6,
    headline: "Exceptional dedication to UI/UX quality and smooth performance.",
    body: "From prototype validation to production deployment, Sapphire delivered our digital vision flawlessly with outstanding post-launch support and responsiveness.",
    name: "Sandeep Sodha",
    location: "Canada",
    avatar: "/images/sandeep_sodha.webp",
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
  <div className="flex items-center justify-center space-x-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-[#F59E0B] fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const WhatOurClientsSaySection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 560; // Card width + gap
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
      className="py-10 sm:py-12 bg-[#005F96] font-sans w-full overflow-hidden text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Title */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-7 sm:mb-9">
        <h2
          className="font-[800] text-white tracking-tight leading-tight"
          style={{ fontSize: '32px' }}
        >
          What Our Clients Say
        </h2>
      </div>

      {/* Full-width Carousel */}
      <div className="w-full relative mb-4">
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-2 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientReviews.map((card) => (
            <div
              key={card.id}
              className="w-[460px] sm:w-[520px] lg:w-[540px] shrink-0 bg-[#EAF4FA] rounded-[22px] p-5 sm:p-6 shadow-md flex flex-row gap-5 justify-between items-stretch select-none border border-white/70 transition-all duration-300 hover:shadow-xl"
            >
              {/* Left Column: Clutch Logo, Headline, Quote, Client Info */}
              <div className="flex-1 flex flex-col justify-between pr-1 text-left">
                <div>
                  {/* Clutch Logo */}
                  <div className="mb-3">
                    <img
                      src="/images/clutch_new.svg"
                      alt="Clutch"
                      className="h-5 sm:h-5.5 object-contain"
                    />
                  </div>

                  {/* Headline */}
                  <h3 className="text-[13px] sm:text-[13.5px] font-[800] text-[#0B0F19] leading-snug mb-2 line-clamp-2">
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
                    className="w-9 h-9 rounded-full object-cover border border-white shrink-0 shadow-xs"
                    onError={(e) => {
                      e.target.src = '/images/smit_shah.webp';
                    }}
                  />
                  <div>
                    <h4 className="text-[12.5px] font-[800] text-[#0B0F19] leading-tight">
                      {card.name}
                    </h4>
                    <p className="text-[11px] text-[#64748B] font-normal leading-tight">
                      {card.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pure White Score Box & Metrics Breakdown */}
              <div className="w-[155px] sm:w-[172px] shrink-0 bg-white rounded-[16px] p-4 flex flex-col justify-between shadow-xs border border-slate-100 text-center">
                {/* Big Score & Stars */}
                <div>
                  <div className="text-3xl sm:text-[34px] font-[900] text-[#0B0F19] tracking-tight leading-none mb-1.5">
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
                    <span>Willing to Refer</span>
                    <span className="font-[800] text-[#0B0F19]">{card.metrics.willingToRefer}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white hover:scale-110 transition-all text-xl font-bold cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-8 h-8 flex items-center justify-center text-white/90 hover:text-white hover:scale-110 transition-all text-xl font-bold cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSaySection;
