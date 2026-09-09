import React, { useState, useEffect, useCallback } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const defaultReviews = [
  {
    id: 1,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'I was impressed by their ability to communicate effectively.',
    comment: 'Sapphire Software Solutions delivered a user-friendly application that looked great. The client received positive feedback from users during the app\'s testing phase. The team had the technical skills to build a complex app and communicated effectively with the client, delivering work on time.',
    authorName: 'Nick',
    location: 'Australia',
    avatar: '/images/client/derrick_surratt.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  },
  {
    id: 2,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'Their mobile app skills, helpfulness, and overall problem-solving blew me away.',
    comment: 'Sapphire Software Solutions created a platform that the client was happy with. They were easy to talk to, responsive, and attentive to the client\'s needs. They also provided a result-oriented approach and proactive technical guidance throughout the project.',
    authorName: 'Vid Randjelovic',
    location: 'Phuket, Thailand',
    avatar: '/images/client/1.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  },
  {
    id: 3,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'They were excellent at finding the right level of detail in implementation and critical...',
    comment: 'Sapphire Software Solutions impressed the client with the quality of their deliverables. They provided excellent designs, achieved the client\'s goals in unique ways, and prioritized the core functionalities seamlessly.',
    authorName: 'Smit Shah',
    location: 'Parkland, Florida',
    avatar: '/images/client/smit_shah.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  },
  {
    id: 4,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'They were always willing to make sure that we were satisfied with the final product, which was outstanding.',
    comment: 'Sapphire Software Solutions\' support enabled the company to build a solution that automates their workflows. The team was prompt, communicative, and helpful in fulfilling deadlines and keeping everything on track.',
    authorName: 'Marios C.',
    location: 'Limassol, Cyprus',
    avatar: '/images/client/2.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  },
  {
    id: 5,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'The team is very professional and friendly.',
    comment: 'Thanks to Sapphire Software Solutions, we have launched the app and my customers are happy with the tool. Currently, we have continuous work with Sapphire team to build new features and improve the product with their innovative ideas.',
    authorName: 'Tim',
    location: 'New Hampshire',
    avatar: '/images/client/3.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  },
  {
    id: 6,
    clutchLogo: '/images/clutch_new.svg',
    headline: 'The time and effort the team put into my project was phenomenal!',
    comment: 'Sapphire Software Solutions uploaded the app successfully to the app stores. The team was highly responsive, delivered on time, and communicated effectively with complex technical challenges solved quickly.',
    authorName: 'Christina Wälchli',
    location: 'Germany',
    avatar: '/images/client/4.webp',
    overallRating: '5.0',
    quality: '5.0',
    schedule: '5.0',
    cost: '5.0',
    refer: '5.0'
  }
];

export const ClientReviewsDarkSection = ({ data }) => {
  const [startIndex, setStartIndex] = useState(0);

  const title = data?.title || 'What Our Clients Say';

  const reviews = (data?.reviews && Array.isArray(data.reviews) && data.reviews.length > 0)
    ? data.reviews
    : defaultReviews;

  const total = reviews.length;

  const goNext = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-scroll every 5.5 seconds
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(goNext, 5500);
    return () => clearInterval(timer);
  }, [goNext, total]);

  // Show 3 visible cards side-by-side
  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    visibleCards.push(reviews[(startIndex + i) % total]);
  }

  return (
    <section className="py-16 sm:py-20 bg-[#005d89] text-white relative font-sans overflow-hidden w-full">
      <div className="w-full px-3 sm:px-6 lg:px-8 xl:px-10 mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-[800] tracking-tight text-white font-sans">
            {title}
          </h2>
        </div>

        {/* Full-Width 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7 mb-10 w-full">
          {visibleCards.map((review, idx) => (
            <div
              key={`${review.id || startIndex}-${idx}`}
              className="bg-[#f0f8ff] rounded-[24px] p-6 sm:p-7 xl:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left min-h-[350px] w-full"
            >
              <div className="flex flex-col sm:flex-row gap-5 xl:gap-6 items-stretch h-full">
                {/* Left Column: Clutch logo, headline, comment, author */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clutch Logo */}
                    <div className="mb-3.5">
                      <img
                        src={review.clutchLogo || '/images/clutch_new.svg'}
                        alt="Clutch"
                        className="h-6 sm:h-7 object-contain"
                      />
                    </div>

                    {/* Headline */}
                    <h3 className="text-[15px] sm:text-[16px] xl:text-[17px] font-[800] text-[#111827] leading-[1.35] line-clamp-3 font-sans mb-3">
                      {review.headline || review.title}
                    </h3>

                    {/* Comment text */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.65] line-clamp-3 font-sans font-normal mb-6">
                      {review.comment || review.desc || review.description}
                    </p>
                  </div>

                  {/* Reviewer Profile */}
                  <div className="flex items-center space-x-3.5 pt-2">
                    <img
                      src={review.avatar || '/images/client/1.webp'}
                      alt={review.authorName}
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <div>
                      <div className="text-[14.5px] font-[800] text-[#111827] font-sans">
                        {review.authorName}
                      </div>
                      <div className="text-[12px] sm:text-[12.5px] text-[#6b7280] font-sans font-normal">
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Score Breakdown Inner Box */}
                <div className="bg-white rounded-[18px] p-5 sm:p-6 flex flex-col items-center justify-between text-center min-w-[145px] sm:min-w-[160px] xl:min-w-[170px] shadow-sm border border-slate-100 shrink-0">
                  <div className="flex flex-col items-center">
                    <span className="text-[38px] sm:text-[42px] font-[900] text-[#111827] leading-none mb-1.5 font-sans">
                      {review.overallRating || '5.0'}
                    </span>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center space-x-0.5 text-[#f59e0b] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="w-full space-y-1.5 text-[11.5px] text-[#4b5563] font-[500] font-sans pt-1 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                      <span>Quality</span>
                      <span className="font-[700] text-[#111827]">{review.quality || '5.0'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Schedule</span>
                      <span className="font-[700] text-[#111827]">{review.schedule || '5.0'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cost</span>
                      <span className="font-[700] text-[#111827]">{review.cost || '5.0'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Willing to Refer</span>
                      <span className="font-[700] text-[#111827]">{review.refer || '5.0'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Navigation Arrows at the Bottom */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#005d89] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
            aria-label="Previous Reviews"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          <button
            onClick={goNext}
            className="w-11 h-11 rounded-full border border-white/40 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#005d89] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-sm"
            aria-label="Next Reviews"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsDarkSection;
