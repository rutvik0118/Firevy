import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

const defaultVideos = [
  {
    title: 'National Water Supply Corporation :...',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'NutriPlan: Your Ultimate Meal Planning...',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Terraform Timesheet App with Microsoft...',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI-Powered Language Learning App...',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Challenges of AI in Recruitment...',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Leading Trading App Development...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Top React JS Development Company I...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Top AI Avatar Generator App...',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  }
];

export const InnovativeSolutionVideo = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const title = data?.title || 'Unveiling Our Innovative Solution';
  const description = data?.description || 'From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.';
  const buttonText = data?.buttonText || 'View Insightful Videos';
  const buttonLink = data?.buttonLink || '/portfolio';

  const videos = (data?.videos && Array.isArray(data.videos) && data.videos.filter(v => v.isActive !== false).length > 0)
    ? data.videos.filter(v => v.isActive !== false)
    : defaultVideos;

  // 2-Second Auto-Scroll Interval
  useEffect(() => {
    if (videos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  // Duplicate items for continuous seamless loop
  const displayItems = [...videos, ...videos, ...videos];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 leading-relaxed font-sans max-w-4xl mx-auto">
            {description}
          </p>
        </div>
      </Container>

      {/* Full Bleed Sliding Carousel Track with Left/Right Arrow Overlays */}
      <div className="relative w-full overflow-hidden my-4 group">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-[#006B8F] hover:text-white transition-all duration-300 opacity-80 group-hover:opacity-100"
          aria-label="Previous videos"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 shadow-xl border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-[#006B8F] hover:text-white transition-all duration-300 opacity-80 group-hover:opacity-100"
          aria-label="Next videos"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Dynamic Offset Carousel Track */}
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out px-4 sm:px-8"
          style={{
            transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 640 ? 1.2 : window.innerWidth < 1024 ? 2.5 : 4.2))}%)`
          }}
        >
          {displayItems.map((video, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 bg-white rounded-[24px] overflow-hidden shadow-[0px_10px_35px_rgba(0,0,0,0.06)] border border-slate-200/80 hover:shadow-2xl transition-all duration-300 group/card cursor-pointer"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover/card:bg-slate-950/40 transition-colors" />

                {/* Central Cyan/Red Play Button with Pulse Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 shadow-2xl flex items-center justify-center text-[#006B8F] group-hover/card:scale-110 group-hover/card:bg-[#006B8F] group-hover/card:text-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Video Headline Banner */}
              <div className="p-5 text-center bg-white">
                <h3 className="text-[15px] font-[800] text-slate-900 leading-snug font-sans truncate">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <Container className="mt-14 text-center">
        <Link
          to={buttonLink}
          className="inline-block px-10 py-3 rounded-lg bg-[#006B8F] text-white font-[800] text-sm hover:bg-[#005578] transition-all shadow-md font-sans hover:scale-105 active:scale-95"
        >
          {buttonText}
        </Link>
      </Container>
    </section>
  );
};

export default InnovativeSolutionVideo;
