import React, { useState, useEffect, useCallback } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const defaultReviews = [
  {
    id: 1,
    title: "...mobile app skills, helpfulness, overall problem-solving blew away.",
    comment: "Sapphire Software Solutions created a platform client was happy with. They were easy, responsive, and attentive to the needs. They also provided a result-oriented approach and stellar execution.",
    author: "David Randjelovic",
    location: "Phuket, Thailand",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  },
  {
    id: 2,
    title: "They were excellent at finding the right level of detail in implementation and critical...",
    comment: "Sapphire Software Solutions impressed the client with the quality of their deliverables. They provided excellent designs, achieved the client's goals in unique ways, and prioritized the...",
    author: "Smit Shah",
    location: "Parkland, Florida",
    avatar: "/images/smit_shah.webp",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  },
  {
    id: 3,
    title: "The team's spirit is nice, and I've found the team cooperative at each step of the project.",
    comment: "While the project is ongoing, the results thus far have met the expectations of the internal team. Sapphire Software Solutions has been prepared to accommodate requests and changes in the...",
    author: "Hesham Abdelfattah",
    location: "London, United Kingdom",
    avatar: "/images/hesham_abdelfattah.webp",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  },
  {
    id: 4,
    title: "Sapphire Software Solutions' team communicated effectively...",
    comment: "Sapphire Software Solutions successfully implemented all UX and design features on the app. The team has consistently delivered on...",
    author: "Derrick Surratt",
    location: "Arkansas",
    avatar: "/images/derrick_surratt.webp",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  },
  {
    id: 5,
    title: "They're able to listen to customer requests and attend to urgent matters.",
    comment: "Sapphire Software Solutions' updates improved a product's UX per the end customer's requests. The team is personable, reaches their...",
    author: "Hamidah Nalwoga",
    location: "Massachusetts",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  },
  {
    id: 6,
    title: "Our communication was very smooth, and the deliverables were done on time.",
    comment: "The client is happy with Sapphire Software Solutions. The team has met all expectations in terms of website design and feature...",
    author: "Lino Barahona",
    location: "Portugal",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    score: "5.0",
    stars: 5,
    ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
  }
];

export const ClientReviewsDarkSection = ({ data }) => {
  const title = data?.title || 'What Our Clients Say';
  const reviews = (data?.reviews && Array.isArray(data.reviews) && data.reviews.filter(r => r.isActive !== false).length > 0)
    ? data.reviews.filter(r => r.isActive !== false)
    : defaultReviews;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = reviews.length;

  // Extended array for continuous multi-card infinite sliding
  const extendedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll timer
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [goNext, isPaused, total]);

  return (
    <section className="py-16 sm:py-20 bg-[#006085] text-white relative font-sans overflow-hidden border-b border-cyan-950 select-none">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 px-4">
        <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-[900] tracking-tight text-white font-sans">
          {title}
        </h2>
      </div>

      {/* Overflowing Auto-Scrolling Track (Matching Image 1 Exact Width and Ratio) */}
      <div
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out gap-6 sm:gap-7 pl-6 sm:pl-10"
          style={{
            transform: `translateX(calc(-${currentIndex * 510}px - 140px + 10vw))`
          }}
        >
          {extendedReviews.map((review, idx) => (
            <div
              key={idx}
              className="w-[350px] sm:w-[480px] md:w-[500px] shrink-0 bg-white text-slate-900 rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-2xl flex justify-between h-[340px] sm:h-[355px] border border-slate-100 transition-all duration-300 text-left"
            >
              {/* Left Section: Clutch, Quote, Desc, Author */}
              <div className="flex-1 flex flex-col justify-between pr-4 sm:pr-5 min-w-0">
                <div>
                  {/* Clutch Logo with SVG and fallback */}
                  <div className="mb-3">
                    <img
                      src="/images/clutch_new.svg"
                      alt="Clutch"
                      className="h-6 sm:h-6.5 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center text-slate-900 font-black text-[24px] tracking-tight font-sans">
                      <span>Clutc</span>
                      <span className="text-[#DE281F]">h</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DE281F] ml-0.5 mb-2 inline-block" />
                    </div>
                  </div>

                  {/* Main Quote Title */}
                  <h4 className="text-[16px] sm:text-[17px] font-[800] text-slate-900 leading-snug font-sans mb-2.5 line-clamp-2">
                    {review.title || review.headline}
                  </h4>

                  {/* Description Comment */}
                  <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-[1.65] font-[400] font-sans line-clamp-3">
                    {review.comment || review.desc || review.description}
                  </p>
                </div>

                {/* Author Profile Row */}
                <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                  <img
                    src={review.avatar || '/images/client/1.webp'}
                    alt={review.author || review.authorName}
                    className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200 shadow-xs"
                  />
                  <div className="min-w-0">
                    <div className="text-[14px] font-[800] text-slate-900 tracking-tight font-sans truncate">
                      {review.author || review.authorName}
                    </div>
                    <div className="text-[12px] font-[500] text-slate-500 font-sans truncate">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Ice-Blue Rating Score & Breakdown Panel */}
              <div className="w-[130px] sm:w-[145px] shrink-0 bg-[#EEF7FC] rounded-[22px] p-4 sm:p-5 flex flex-col justify-between text-center border border-blue-100/70">
                {/* Rating Score & Stars */}
                <div>
                  <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 leading-none tracking-tight font-sans mb-1.5">
                    {review.score || review.overallRating || "5.0"}
                  </div>
                  <div className="flex items-center justify-center space-x-0.5 text-amber-400">
                    {[...Array(review.stars || 5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Breakdown Scores List */}
                <div className="space-y-1.5 text-[11.5px] font-[700] text-slate-700 border-t border-blue-200/70 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-[700]">Quality</span>
                    <span className="font-[900] text-slate-900">{review.ratings?.quality || review.quality || "5.0"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-[700]">Schedule</span>
                    <span className="font-[900] text-slate-900">{review.ratings?.schedule || review.schedule || "5.0"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-[700]">Cost</span>
                    <span className="font-[900] text-slate-900">{review.ratings?.cost || review.cost || "5.0"}</span>
                  </div>
                  <div className="flex justify-between items-center text-left">
                    <span className="text-slate-600 font-[700] leading-tight pr-1">Willing to Refer</span>
                    <span className="font-[900] text-slate-900">{review.ratings?.refer || review.refer || "5.0"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Bottom Navigation Arrows (Image 1 Exact Match) */}
      <div className="flex items-center justify-center space-x-6 mt-10">
        <button
          onClick={goPrev}
          type="button"
          className="text-white/80 hover:text-white transition-all p-1.5 hover:scale-110 cursor-pointer"
          aria-label="Previous Review"
        >
          <ArrowLeft className="w-7 h-7 stroke-[2.5]" />
        </button>
        <button
          onClick={goNext}
          type="button"
          className="text-white/80 hover:text-white transition-all p-1.5 hover:scale-110 cursor-pointer"
          aria-label="Next Review"
        >
          <ArrowRight className="w-7 h-7 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};

export default ClientReviewsDarkSection;
