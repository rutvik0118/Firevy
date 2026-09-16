import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const videoList = [
  {
    id: 1,
    title: 'Revolutionizing Recruitment with AI/ML-Driven - Top AI Development Company in USA',
    image: '/images/homeinnovation/ninth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 2,
    title: 'National Water Supply Corporation : Ensure reliable water supply with National Water Supply Corporation, providing efficient and sustainable water solutions.',
    image: '/images/homeinnovation/tenth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 3,
    title: 'NutriPlan: Your Ultimate Meal Planning and Nutrition Guide - NutriPlan helps individuals make informed dietary choices, track daily food intake, and achieve health goals.',
    image: '/images/homeinnovation/eleventh.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 4,
    title: 'Terraform Timesheet App with Microsoft PowerApps & SharePoint - Best SharePoint Development Company',
    image: '/images/homeinnovation/thirteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 5,
    title: 'AI-Powered Language Learning App Development Services',
    image: '/images/homeinnovation/forteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 6,
    title: 'Navigate effortlessly with Waymark Maps, offering comprehensive guides for travel and exploration.',
    image: '/images/homeinnovation/first.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 7,
    title: 'Explore trends, essential products, and expert tips with BEAUTYBEE. Enhance your beauty routine effortlessly.',
    image: '/images/homeinnovation/third.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 8,
    title: "Improve mental clarity, reduce stress, and boost well-being with BREATHCRAFT's mindful breathing techniques.",
    image: '/images/homeinnovation/fourth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 9,
    title: 'Stream movies and TV shows in high quality with CINESTREAM for a seamless entertainment experience.',
    image: '/images/homeinnovation/fifth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 10,
    title: 'Enhance safety and efficiency with Firevy Software Solutions, experts in SharePoint app development for MNCs.',
    image: '/images/homeinnovation/sixth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    id: 11,
    title: 'Revolutionize Your Business with Firevy Software Solutions: Top AI Chatbot Development Services',
    image: '/images/homeinnovation/fifteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  }
];

export const InnovativeVideoSlider = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Automatic Smooth Rotation (Every 3.2 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoList.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
  };

  const displayItems = [...videoList, ...videoList, ...videoList];

  return (
    <section className="py-12 sm:py-16 bg-[#005d89] text-white relative overflow-hidden text-left font-sans">
      {/* Centered Heading & Subtitle */}
      <Container>
        <div className="text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-10 space-y-2.5">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[800] text-white tracking-tight font-sans">
            Unveiling Our Innovative Solution
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-white/95 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
          </p>
        </div>
      </Container>

      {/* Full Width Video Cards Continuous Slider Track */}
      <div
        className="relative w-full overflow-hidden pb-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-5 transition-transform duration-700 ease-in-out px-4 sm:px-8"
          style={{
            transform: `translateX(-${currentIndex * 345}px)`
          }}
        >
          {displayItems.map((video, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(video)}
              className="w-[280px] sm:w-[320px] lg:w-[335px] shrink-0 bg-white rounded-[16px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Thumbnail Image Container */}
              <div className="relative h-[190px] sm:h-[205px] overflow-hidden bg-slate-900">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Circular White & Blue Play Button (▶) on Bottom Right */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-[#005d89] shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-[#005d89] group-hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* White Bottom Text Bar */}
              <div className="p-3.5 sm:p-4 bg-white text-left font-sans flex items-center h-[62px]">
                <h3 className="text-[13px] sm:text-[13.5px] font-[700] text-[#333333] leading-snug line-clamp-1 group-hover:text-[#005d89] transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev (←) & Next (→) Navigation Arrows */}
      <Container className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button
            onClick={handlePrev}
            className="text-white hover:text-cyan-200 transition-all p-1 text-2xl font-bold hover:scale-125 cursor-pointer"
            aria-label="Previous Video"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-cyan-200 transition-all p-1 text-2xl font-bold hover:scale-125 cursor-pointer"
            aria-label="Next Video"
          >
            →
          </button>
        </div>

        {/* Centered White Button (View Insightful Videos) */}
        <div>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 bg-white hover:bg-cyan-50 text-[#005d89] font-[700] text-[14px] rounded-[6px] shadow-md transition-all hover:scale-105 active:scale-95"
          >
            View Insightful Videos
          </Link>
        </div>
      </Container>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
              <h3 className="font-bold text-base sm:text-lg line-clamp-1">{activeVideo.title}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Responsive Video Embed */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
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

export default InnovativeVideoSlider;
