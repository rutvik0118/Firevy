import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultVideos = [
  {
    title: 'Revolutionizing Recruitment with AI/ML-Driven - Top AI Development Company in USA',
    image: '/images/homeinnovation/ninth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'National Water Supply Corporation : Ensure reliable water supply with National Water Supply Corporation, providing efficient and sustainable water solutions.',
    image: '/images/homeinnovation/tenth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'NutriPlan: Your Ultimate Meal Planning and Nutrition Guide - NutriPlan helps individuals make informed dietary choices, track daily food intake, and achieve health goals.',
    image: '/images/homeinnovation/eleventh.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Terraform Timesheet App with Microsoft PowerApps & SharePoint - Best SharePoint Development Company',
    image: '/images/homeinnovation/thirteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'AI-Powered Language Learning App Development Services',
    image: '/images/homeinnovation/forteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Navigate effortlessly with Waymark Maps, offering comprehensive guides for travel and exploration.',
    image: '/images/homeinnovation/first.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Explore trends, essential products, and expert tips with BEAUTYBEE. Enhance your beauty routine effortlessly.',
    image: '/images/homeinnovation/third.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: "Improve mental clarity, reduce stress, and boost well-being with BREATHCRAFT's mindful breathing techniques.",
    image: '/images/homeinnovation/fourth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Stream movies and TV shows in high quality with CINESTREAM for a seamless entertainment experience.',
    image: '/images/homeinnovation/fifth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Enhance safety and efficiency with Firevy Software Solutions, experts in SharePoint app development for MNCs.',
    image: '/images/homeinnovation/sixth.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  },
  {
    title: 'Revolutionize Your Business with Firevy Software Solutions: Top AI Chatbot Development Services',
    image: '/images/homeinnovation/fifteen.webp',
    videoUrl: 'https://www.youtube.com/embed/L_LUpnjgPso'
  }
];

export const InnovativeSolutionVideo = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const title = data?.title || 'Unveiling Our Innovative Solution';
  const description = data?.description || 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.';
  const buttonText = data?.buttonText || 'View Insightful Videos';
  const buttonLink = data?.buttonLink || '/portfolio';

  const videos = (data?.videos && Array.isArray(data.videos) && data.videos.filter(v => v.isActive !== false).length > 0)
    ? data.videos.filter(v => v.isActive !== false)
    : defaultVideos;

  // Auto-scroll continuous animation
  useEffect(() => {
    if (isPaused || videos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, videos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const displayItems = [...videos, ...videos, ...videos];

  return (
    <section className="py-12 sm:py-16 bg-[#005d89] text-white relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-[800] tracking-tight text-white mb-2.5 font-sans">
            {title}
          </h2>
          <p className="text-[14px] sm:text-[15.5px] font-[400] text-white/95 leading-relaxed font-sans max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </Container>

      {/* Edge-to-Edge Sliding Carousel Track */}
      <div 
        className="relative w-full overflow-hidden my-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 transition-transform duration-700 ease-in-out px-4 sm:px-8"
          style={{
            transform: `translateX(-${currentIndex * 345}px)`
          }}
        >
          {displayItems.map((video, idx) => {
            const fallbackVideo = defaultVideos[idx % defaultVideos.length];
            const imgSrc = video.image || fallbackVideo.image;

            return (
              <div
                key={idx}
                onClick={() => setActiveVideo(video)}
                className="w-[280px] sm:w-[320px] lg:w-[335px] shrink-0 bg-white rounded-[16px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Thumbnail Image with Play Button */}
                <div className="relative h-[190px] sm:h-[205px] w-full overflow-hidden bg-slate-900">
                  <img
                    src={imgSrc}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Circular White Play Button on Bottom Right */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center text-[#005d89] group-hover:scale-110 group-hover:bg-[#005d89] group-hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Card Title Footer */}
                <div className="p-3.5 sm:p-4 bg-white h-[62px] flex items-center">
                  <h3 className="text-[13px] sm:text-[13.5px] font-[700] text-[#333333] leading-snug font-sans line-clamp-1 group-hover:text-[#005d89] transition-colors text-left">
                    {video.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls & CTA Button */}
      <Container className="mt-6 text-center">
        {/* Prev (←) & Next (→) Navigation Arrows */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          <button
            onClick={handlePrev}
            className="text-white hover:text-cyan-200 transition-all p-1 text-2xl font-bold hover:scale-125 cursor-pointer"
            aria-label="Previous Slide"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="text-white hover:text-cyan-200 transition-all p-1 text-2xl font-bold hover:scale-125 cursor-pointer"
            aria-label="Next Slide"
          >
            →
          </button>
        </div>

        {/* View Insightful Videos Button */}
        <div>
          <Link
            to={buttonLink}
            className="inline-block px-8 py-3 rounded-[6px] bg-white text-[#005d89] font-[700] text-[14px] hover:bg-cyan-50 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {buttonText}
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

            {/* Video Player */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                src={`${activeVideo.videoUrl || 'https://www.youtube.com/embed/L_LUpnjgPso'}?autoplay=1`}
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

export default InnovativeSolutionVideo;
