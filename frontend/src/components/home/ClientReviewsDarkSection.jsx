import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../common/Container';

export const ClientReviewsDarkSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "Communication was smooth, and the deliverables were done on time...",
      comment: "Firevy delivered high quality mobile & cloud solutions with zero friction. Their engineers maintained transparent sprint updates throughout.",
      author: "Lino Barahona",
      location: "Portugal",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    },
    {
      id: 2,
      title: "Their technical expertise and commitment exceeded our expectations...",
      comment: "Working with Firevy allowed our SaaS platform to scale to 500k+ active users effortlessly. Outstanding microservice architecture design.",
      author: "Julius John",
      location: "Tanzania",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    },
    {
      id: 3,
      title: "Exceptional UI design and AI integration delivered ahead of deadline...",
      comment: "The team implemented automated RAG search into our enterprise application seamlessly, driving 40% efficiency gains in support operations.",
      author: "Marios C.",
      location: "Limassol, Cyprus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    },
    {
      id: 4,
      title: "Extremely reliable full stack development team with deep domain knowledge...",
      comment: "They handled our legacy database refactoring with zero downtime. Highly recommended for complex multi-cloud deployments.",
      author: "Elena Rostova",
      location: "Tallinn, Estonia",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      score: "5.0",
      ratings: { quality: "5.0", schedule: "5.0", cost: "5.0", refer: "5.0" }
    }
  ];

  const visibleCards = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - visibleCards : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= testimonials.length - visibleCards ? 0 : prev + 1));
  };

  // Slice visible items
  const currentItems = testimonials.slice(startIndex, startIndex + visibleCards);
  if (currentItems.length < visibleCards) {
    currentItems.push(...testimonials.slice(0, visibleCards - currentItems.length));
  }

  return (
    <section className="py-20 bg-[#005F80] text-white relative overflow-hidden font-sans border-b border-cyan-900">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] text-white tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Horizontal Multi-Card Grid (3 Visible Side-by-Side Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-slate-900">
          {currentItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-[20px] p-6 shadow-2xl border border-slate-100 flex flex-col justify-between hover:shadow-cyan-900/30 transition-all duration-300 text-left group"
            >
              {/* Card Main Body: Left Content + Right Rating Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start mb-4">
                {/* Left Content Area (Col 7/12) */}
                <div className="sm:col-span-8 flex flex-col justify-between space-y-3">
                  {/* Clutch Logo Header */}
                  <div className="flex items-center space-x-1 font-[800] text-xl tracking-tight text-slate-900">
                    <span>Clutch</span>
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block ml-0.5" />
                  </div>

                  {/* Headline Quote Title */}
                  <h3 className="text-[18px] font-[600] text-slate-900 leading-snug line-clamp-2 group-hover:text-[#006B8F] transition-colors">
                    "{item.title}"
                  </h3>

                  {/* Detailed Review Text */}
                  <p className="text-[15px] font-[400] text-slate-600 leading-relaxed line-clamp-3">
                    {item.comment}
                  </p>
                </div>

                {/* Right Rating Badge (Inner Light-Grey Box #F4F7F9, Col 4/12) */}
                <div className="sm:col-span-4 bg-[#F4F7F9] rounded-xl p-3 border border-slate-200/80 flex flex-col items-center justify-center text-center shrink-0">
                  <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                    {item.score}
                  </div>

                  {/* 5 Yellow Stars */}
                  <div className="flex items-center space-x-0.5 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  {/* Score Breakdown List */}
                  <div className="w-full border-t border-slate-200/80 pt-2 space-y-1 text-[10px] font-bold text-slate-600">
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500">Quality:</span>
                      <span className="text-slate-900">{item.ratings.quality}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500">Schedule:</span>
                      <span className="text-slate-900">{item.ratings.schedule}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500">Cost:</span>
                      <span className="text-slate-900">{item.ratings.cost}</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-slate-500">Willing to Refer:</span>
                      <span className="text-slate-900">{item.ratings.refer}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Info (Bottom Left) */}
              <div className="pt-3 border-t border-slate-100 flex items-center space-x-3 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-extrabold text-slate-900">
                    {item.author}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered White Outline Arrow Navigation Buttons Below Grid */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border-2 border-white/80 hover:bg-white hover:text-[#005F80] text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border-2 border-white/80 hover:bg-white hover:text-[#005F80] text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ClientReviewsDarkSection;
