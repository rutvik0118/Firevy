import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export const WhatOurClientsSayClutchSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 9 Client Review Cards collected from user's uploaded screenshots 1 to 5
  const reviews = [
    {
      id: 1,
      clientName: 'Hesham Abdelfattah',
      location: 'London, United Kingdom',
      headline: "The team's spirit is nice, I've found the team cooperative at each step...",
      reviewText: "The project is ongoing, the results thus far have met the expectations of the internal team. Sapphire Software Solutions has...",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 2,
      clientName: 'Hamendra Shah',
      location: 'Kenya',
      headline: 'Sapphire delivered flawlessly what we envisioned. We were...',
      reviewText: "The product was delivered within budget and timeframe. Sapphire Software Solutions was able to work around the client's budget...",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 3,
      clientName: 'Ellwood G. Ivey Jr.',
      location: 'Georgia',
      headline: 'We really appreciate the time and energy that go into developing our...',
      reviewText: "The team continuous to exhibit development and collaborative skills that allow them to create end products that exceed their client's...",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 4,
      clientName: 'Travis Wilhelmsen',
      location: 'Idaho',
      headline: 'They were able to add resources and specialties when applicable.',
      reviewText: "Sapphire Software Solutions quickly developed the website and met the client's target timeline. The team also met the client's budget and...",
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '4.5'
    },
    {
      id: 5,
      clientName: 'Christine Ine',
      location: 'Rockville, Maryland',
      headline: 'They are very professional, respectful, competent, and approachable.',
      reviewText: "The client was highly pleased with Sapphire Software Solutions' development work. The team met most of the interface design...",
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      rating: '4.5',
      stars: 4,
      quality: '4.0',
      schedule: '4.5',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 6,
      clientName: 'Derrick Surratt',
      location: 'Arkansas',
      headline: "Sapphire Software Solutions' team communicated effectively...",
      reviewText: "Sapphire Software Solutions successfully implemented all UX and design features on the app. The team has consistently delivered on...",
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 7,
      clientName: 'Nick',
      location: 'Australia',
      headline: 'Was impressed by their ability to communicate effectively.',
      reviewText: 'Sapphire Software Solutions delivered a user-friendly application that looked great. The client received positive feedback from...',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 8,
      clientName: 'Vid Randjelovic',
      location: 'Phuket, Thailand',
      headline: 'Their mobile app skills, helpfulness, and overall problem-solving blew me...',
      reviewText: 'Sapphire Software Solutions created a platform that the client was happy with. They were easy to talk to, responsive, and attentive to the...',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    },
    {
      id: 9,
      clientName: 'Smit Shah',
      location: 'Parkland, Florida',
      headline: 'They were excellent at finding the right level of detail in implementation...',
      reviewText: 'Sapphire Software Solutions impressed the client with the quality of their deliverables. They provided excellent designs, achieved the...',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      rating: '5.0',
      stars: 5,
      quality: '5.0',
      schedule: '5.0',
      cost: '5.0',
      refer: '5.0'
    }
  ];

  const totalReviews = reviews.length;

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  }, [totalReviews]);

  // 2.5-Second Auto Scroll
  useEffect(() => {
    const timer = setInterval(goNext, 2500);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="py-16 bg-[#005F96] text-white relative font-sans w-full overflow-hidden border-b border-white/10">
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[950] tracking-tight text-white leading-tight font-sans">
          What Our Clients Say
        </h2>
      </div>

      {/* Multi-Card Review Carousel Container */}
      <div className="w-full px-4 sm:px-8 max-w-[1440px] mx-auto mb-8">
        <div className="relative overflow-hidden w-full">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 380}px)` }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="w-[340px] sm:w-[410px] shrink-0 rounded-[26px] bg-[#EBF7FC] text-slate-900 p-6 shadow-xl border border-white/40 flex items-center justify-between text-left transition-all duration-300 min-h-[260px]"
              >
                {/* Left Side: Clutch Logo, Headline, Paragraph, Avatar + Name */}
                <div className="w-[60%] pr-3 flex flex-col justify-between h-full space-y-3">
                  <div>
                    {/* Clutch Logo Header */}
                    <div className="flex items-center space-x-1 mb-2">
                      <span className="text-xl font-[950] text-slate-900 tracking-tighter font-sans">
                        Clutc<span className="text-[#DA291C]">h</span>
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xs sm:text-[13.5px] font-[850] text-slate-950 leading-snug line-clamp-2 font-sans mb-1.5">
                      "{rev.headline}"
                    </h3>

                    {/* Review Text */}
                    <p className="text-[11px] sm:text-xs font-[400] text-slate-600 leading-relaxed line-clamp-3 font-sans">
                      {rev.reviewText}
                    </p>
                  </div>

                  {/* Avatar + Client Name */}
                  <div className="flex items-center space-x-2.5 pt-1">
                    <img
                      src={rev.avatar}
                      alt={rev.clientName}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div>
                      <div className="text-xs font-[900] text-slate-950 leading-tight font-sans">
                        {rev.clientName}
                      </div>
                      <div className="text-[10px] font-semibold text-slate-500 font-sans">
                        {rev.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: 5.0 Rating Score Box (Matching screenshots 100%) */}
                <div className="w-[38%] bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between text-center font-sans">
                  {/* Large Score Number */}
                  <div className="text-2xl sm:text-3xl font-[950] text-slate-950 leading-none">
                    {rev.rating}
                  </div>

                  {/* 5 Golden Stars */}
                  <div className="flex justify-center space-x-0.5 my-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.stars ? 'fill-current text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Rating Breakdown Table */}
                  <div className="space-y-1 text-[9.5px] sm:text-[10.5px] font-bold text-slate-600 pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                      <span>Quality</span>
                      <span className="font-black text-slate-950">{rev.quality}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Schedule</span>
                      <span className="font-black text-slate-950">{rev.schedule}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cost</span>
                      <span className="font-black text-slate-950">{rev.cost}</span>
                    </div>
                    <div className="flex justify-between items-center text-[8.5px] sm:text-[9.5px]">
                      <span className="truncate pr-1">Willing to Refer</span>
                      <span className="font-black text-slate-950">{rev.refer}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          className="p-2.5 rounded-full border border-white/40 hover:bg-white/10 text-white transition-colors shadow-xs"
          aria-label="Previous Reviews"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="p-2.5 rounded-full border border-white/40 hover:bg-white/10 text-white transition-colors shadow-xs"
          aria-label="Next Reviews"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default WhatOurClientsSayClutchSlider;
