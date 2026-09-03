import React, { useState, useEffect, useCallback } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const defaultReviews = [
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

export const ClientReviewsDarkSection = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'What Clients Say About Us';
  const description = data?.description || "Read unfiltered reviews directly from Clutch, Upwork, and verified client testimonials worldwide.";
  const clutchScore = data?.clutchScore || '4.9';
  const clutchReviewCount = data?.clutchReviewCount || '32 REVIEWS';

  const reviews = (data?.reviews && Array.isArray(data.reviews) && data.reviews.filter(r => r.isActive !== false).length > 0)
    ? data.reviews.filter(r => r.isActive !== false)
    : defaultReviews;

  const total = reviews.length;

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, total]);

  const visibleCards = Array.from({ length: Math.min(3, total) }, (_, i) =>
    reviews[(currentIndex + i) % total]
  );

  return (
    <section className="py-20 bg-[#0B1528] text-white relative font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-white mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[17px] font-[400] text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>

          {/* Clutch Rating Pill Badge */}
          <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-700/60 px-5 py-2 rounded-full mt-6">
            <span className="text-red-500 font-black text-base">Clutch</span>
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-200">{clutchScore}</span>
            <span className="text-xs text-slate-400 font-semibold">• {clutchReviewCount}</span>
          </div>
        </div>

        {/* Carousel Row with Floating Controls */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 shadow-xl flex items-center justify-center text-white hover:bg-[#006B8F] transition-all duration-200"
            aria-label="Previous Reviews"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* 3 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleCards.map((review, idx) => (
              <div
                key={`${currentIndex}-${idx}`}
                className="bg-[#121E36] rounded-[24px] p-7 border border-slate-800 shadow-xl flex flex-col justify-between h-[360px] hover:border-cyan-500/50 transition-all duration-300 group text-left"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Score */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(review.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                      {review.score || "5.0"}
                    </span>
                  </div>

                  {/* Review Text */}
                  <h4 className="text-[16px] font-[800] text-white leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {review.title}
                  </h4>
                  <p className="text-[13.5px] text-slate-300 leading-relaxed line-clamp-4">
                    "{review.comment || review.desc || review.description}"
                  </p>
                </div>

                {/* Author Card */}
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-800">
                  <img
                    src={review.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"}
                    alt={review.author || review.name}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-white">
                      {review.author || review.name}
                    </div>
                    <div className="text-[12px] text-slate-400">
                      {review.location || review.position || "Verified Client"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 shadow-xl flex items-center justify-center text-white hover:bg-[#006B8F] transition-all duration-200"
            aria-label="Next Reviews"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsDarkSection;
