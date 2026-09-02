import React, { useState, useEffect, useCallback } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

export const ClientReviewsDarkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      title: "firevy.co's team communicated effectively...",
      comment: "firevy.co successfully implemented all UX and design features on the app. The team has consistently delivered on milestones with remarkable technical agility.",
      author: "Derrick Surratt",
      location: "Arkansas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      stars: 5,
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    },
    {
      id: 2,
      title: "The team maintained excellent communication throughout...",
      comment: "firevy.co's updates improved a product's UX per the end customer's requests. The team is personable, reaches their deliverables ahead of schedule, and maintains excellent communication.",
      author: "Hamidah Nalwoga",
      location: "Massachusetts",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      stars: 5,
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    },
    {
      id: 3,
      title: "Intuitive, sleek, and high performing solution...",
      comment: "The client was highly pleased with firevy.co's development work. The team met expectations, and the interface design was intuitive, sleek, and high performing.",
      author: "Christine Ine",
      location: "Rockville, Maryland",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      score: "4.5",
      stars: 5,
      ratings: { quality: "4.0", schedule: "4.5", cost: "5.0", refer: "5.0" }
    },
    {
      id: 4,
      title: "Exceptional mobile architecture and seamless cross-platform delivery...",
      comment: "Their engineers built an enterprise-grade mobile application that scaled seamlessly to over 350k active users in the first quarter post launch.",
      author: "David Vance",
      location: "Austin, Texas",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      stars: 5,
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    }
  ];

  const total = reviews.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext]);

  // Display 4 cards for peek effect (2-3 full + partial peek)
  const visibleCount = 4;
  const visibleCards = Array.from({ length: visibleCount }, (_, i) =>
    reviews[(currentIndex + i) % total]
  );

  return (
    <section className="py-16 bg-[#006B8F] text-white relative overflow-hidden font-sans border-b border-cyan-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <h2 className="text-[34px] font-[800] text-white tracking-tight font-sans">
          What Our Clients Say
        </h2>
      </div>

      {/* Horizontal Carousel Track with Peek */}
      <div className="w-full overflow-hidden mb-8 pl-4 sm:pl-8">
        <div className="flex gap-5 transition-all duration-500 ease-in-out">
          {visibleCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 bg-white rounded-[16px] p-6 shadow-xl border border-slate-100 flex flex-col justify-between text-left text-slate-900 transition-all duration-300 group"
              style={{
                width: '420px',
                minHeight: '270px',
                opacity: idx === visibleCount - 1 ? 0.45 : 1,
              }}
            >
              {/* Card Body: Left Review Content + Right Ratings Box */}
              <div className="grid grid-cols-12 gap-4 items-start mb-4">
                {/* Left Column (65% width) */}
                <div className="col-span-7 flex flex-col justify-between">
                  {/* Clutch Logo with red dot */}
                  <div className="flex items-center space-x-0.5 font-[900] text-[20px] tracking-tight text-slate-900 font-sans mb-2">
                    <span>Clut</span>
                    <span className="relative">
                      <span>c</span>
                      <span className="absolute -top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                    </span>
                    <span>h</span>
                  </div>

                  {/* Headline Quote Title */}
                  <h3 className="text-[14px] font-[700] text-slate-900 leading-snug line-clamp-2 mb-2 font-sans group-hover:text-[#006B8F] transition-colors">
                    {item.title}
                  </h3>

                  {/* Detailed Review Text */}
                  <p className="text-[12px] font-[400] text-slate-600 leading-relaxed line-clamp-3 font-sans">
                    {item.comment}
                  </p>
                </div>

                {/* Right Column: Rating Box with light background (35% width) */}
                <div className="col-span-5 bg-[#F4F8FA] rounded-[12px] p-3 border border-slate-200/80 flex flex-col items-center justify-center text-center shrink-0">
                  {/* Big Number Score */}
                  <div className="text-[30px] font-[800] text-slate-900 leading-none mb-1 font-sans">
                    {item.score}
                  </div>

                  {/* 5 Yellow Stars */}
                  <div className="flex items-center space-x-0.5 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  {/* Sub-ratings Breakdown */}
                  <div className="w-full border-t border-slate-200 pt-2 space-y-1 text-[10px] font-sans">
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500 font-[500]">Quality</span>
                      <span className="text-slate-900 font-[700]">{item.ratings.quality}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500 font-[500]">Schedule</span>
                      <span className="text-slate-900 font-[700]">{item.ratings.schedule}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500 font-[500]">Cost</span>
                      <span className="text-slate-900 font-[700]">{item.ratings.cost}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500 font-[500]">Willing to Refer</span>
                      <span className="text-slate-900 font-[700]">{item.ratings.refer}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Row at Bottom Left */}
              <div className="pt-3 border-t border-slate-100 flex items-center space-x-3 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-[13px] font-[700] text-slate-900 leading-tight font-sans">
                    {item.author}
                  </div>
                  <div className="text-[11px] font-[500] text-slate-500 font-sans">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Arrows — Clean White Line Style */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          className="p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goNext}
          className="p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Next"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ClientReviewsDarkSection;
