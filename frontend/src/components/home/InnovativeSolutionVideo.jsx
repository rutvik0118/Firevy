import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const InnovativeSolutionVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
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

  // 2-Second Auto-Scroll Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  // Duplicate items for continuous seamless loop
  const extendedVideos = [...videos, ...videos, ...videos];

  return (
    <section className="py-20 bg-[#006B8F] text-white relative font-sans overflow-hidden">
      <Container>
        {/* Section Header - Exactly 100% Copy-to-Copy with Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-white mb-3 font-sans">
            Unveiling Our Innovative Solution
          </h2>
          <p className="text-[18px] font-[400] text-white/90 leading-relaxed font-sans max-w-4xl mx-auto">
            From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it’s a glimpse into the future of innovation.
          </p>
        </div>
      </Container>

      {/* Full-Bleed 2-Second Auto-Scrolling Horizontal Slider Track */}
      <div className="w-full overflow-hidden mb-8 py-2">
        <div className="w-[125%] -ml-[12.5%] px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out -mx-3"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 4}%)`
            }}
          >
            {extendedVideos.map((vid, idx) => (
              <div key={idx} className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-3">
                <div className="bg-white rounded-[16px] overflow-hidden text-slate-900 shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-md transition-all duration-300 text-left cursor-pointer h-full">
                  {/* Top Banner Image + Bottom-Right Circular Play Button */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                    <img
                      src={vid.image}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    {/* Bottom-Right Circular White Play Button */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom White Card Title */}
                  <div className="px-4 py-3 bg-white rounded-b-[16px] h-16 flex items-center">
                    <h3 className="text-xs sm:text-sm font-[600] text-slate-800 font-sans leading-snug line-clamp-2">
                      {vid.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container>
        {/* Center Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-6 text-white mb-10">
          <button
            onClick={handlePrev}
            className="p-2 text-white hover:text-slate-200 transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-white hover:text-slate-200 transition-colors"
            aria-label="Next"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Center CTA Button - Solid White Pill Button */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block bg-white text-[#006B8F] hover:bg-slate-100 font-[600] text-[16px] py-3.5 px-9 rounded-[8px] shadow-sm transition-all font-sans"
          >
            View Insightful Videos
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default InnovativeSolutionVideo;
