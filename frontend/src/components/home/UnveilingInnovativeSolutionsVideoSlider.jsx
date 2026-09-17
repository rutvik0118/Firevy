import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Play, X } from 'lucide-react';

export const UnveilingInnovativeSolutionsVideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState('');

  // 17 Video Cards collected from user's uploaded screenshots 1 to 5
  const videoCards = [
    {
      id: 1,
      title: 'AllyOne App Development – Service Marketplace',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-purple-600 to-indigo-700',
      badge: 'Overview',
      desc: 'AllyOne is an innovative marketplace connecting buyers with service providers.',
      mockupType: 'allyone'
    },
    {
      id: 2,
      title: 'Leading Stress Management App – Stress Relief',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-800 to-slate-950',
      badge: 'STRESS RELIEF',
      desc: 'Deep breathing & meditation app for mental wellness.',
      mockupType: 'stress'
    },
    {
      id: 3,
      title: 'Leading Trading App Development – AITradeX',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-900 via-teal-950 to-slate-950',
      badge: 'AITradeX',
      desc: 'Digital financial markets & crypto trading app.',
      mockupType: 'trading'
    },
    {
      id: 4,
      title: 'Top React JS Development Company | Enterprise Web',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-950 via-[#003B5C] to-slate-900',
      badge: 'ReactJS',
      desc: 'Introduction to ReactJS for enterprise web architectures.',
      mockupType: 'react'
    },
    {
      id: 5,
      title: 'Top AI Avatar Generator App – PersonaFX',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
      badge: 'PersonaFX',
      desc: 'AI avatar creation app powered by deep learning.',
      mockupType: 'avatar'
    },
    {
      id: 6,
      title: 'Navigate effortlessly with Waymark Maps Application',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-950 via-[#2A0845] to-slate-900',
      badge: 'Waymark Maps',
      desc: 'Locate & Explore guide nearby with turn-by-turn navigation.',
      mockupType: 'waymark'
    },
    {
      id: 7,
      title: 'Explore trends, essential products – BEAUTYBEE',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-amber-900 via-amber-950 to-slate-950',
      badge: 'BEAUTYBEE',
      desc: 'Discover your beauty essentials and skincare products.',
      mockupType: 'beauty'
    },
    {
      id: 8,
      title: 'Improve mental clarity, reduce stress – BREATHCRAFT',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-200 via-purple-100 to-slate-300',
      badge: 'BREATHCRAFT',
      desc: 'Unleash your potential through mindful breathing.',
      mockupType: 'breathcraft'
    },
    {
      id: 9,
      title: 'Stream movies and TV shows in high quality',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-950 via-purple-950 to-slate-900',
      badge: 'STREAM',
      desc: 'Detailed movie descriptions and TV streaming app.',
      mockupType: 'stream'
    },
    {
      id: 10,
      title: 'Enhance safety and efficiency with Power Apps',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-950 via-blue-950 to-slate-900',
      badge: 'Power Apps',
      desc: 'Integrated MS-Form via Power Automate solutions.',
      mockupType: 'powerapps'
    },
    {
      id: 11,
      title: 'Revolutionizing Recruitment with AI/ML – Talent',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-950 via-slate-900 to-black',
      badge: 'AI Recruitment',
      desc: 'Challenges of AI in recruitment and candidate scoring.',
      mockupType: 'recruitment'
    },
    {
      id: 12,
      title: 'National Water Supply Corporation : NWSC App',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-cyan-700 via-sky-800 to-teal-900',
      badge: 'NWSC Water',
      desc: 'Streamlining water management and utility billing.',
      mockupType: 'nwsc'
    },
    {
      id: 13,
      title: 'NutriPlan: Your Ultimate Meal Planning & Nutrition',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-emerald-900 via-teal-950 to-slate-900',
      badge: 'NutriPlan',
      desc: 'Your go-to meal planning and nutrition mobile app.',
      mockupType: 'nutriplan'
    },
    {
      id: 14,
      title: 'Terraform Timesheet App with Microsoft PowerAutomate',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-900 via-zinc-900 to-slate-950',
      badge: 'Timesheet App',
      desc: 'HR automation handles timesheet requests & invoice generation.',
      mockupType: 'timesheet'
    },
    {
      id: 15,
      title: 'AI-Powered Language Learning App – Revolutionizing',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-teal-800 via-emerald-900 to-slate-950',
      badge: 'Language App',
      desc: 'Revolutionizing language learning with AI-powered technology.',
      mockupType: 'language'
    },
    {
      id: 16,
      title: 'Revolutionize Your Business with AI Chatbot App',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-purple-900 via-indigo-950 to-slate-950',
      badge: 'AI Chatbot',
      desc: 'AI chatbot platform enhances ChatGPT with scanned documents.',
      mockupType: 'chatbot'
    },
    {
      id: 17,
      title: 'AI-Powered Document Quality & Website Inspection',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      bgGradient: 'from-slate-900 via-blue-950 to-slate-950',
      badge: 'Doc Inspection',
      desc: 'REDETECT quality analyzer & document website inspection.',
      mockupType: 'docinspection'
    }
  ];

  const totalCards = videoCards.length;

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  }, [totalCards]);

  // 3-Second Auto Scroll (Requirement: 3 seconds pachi auto scroll thai)
  useEffect(() => {
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleOpenVideo = (card) => {
    setActiveVideoTitle(card.title);
    setActiveVideoUrl(card.videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideoUrl(null);
    setActiveVideoTitle('');
  };

  return (
    <section className="py-10 sm:py-12 bg-[#005F96] text-white relative font-sans w-full overflow-hidden border-b border-white/10">
      {/* Title & Subtitle Section */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-6 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-[900] tracking-tight text-white leading-tight font-sans">
          Unveiling Our Innovative Solution
        </h2>
        <p className="text-xs sm:text-sm font-[400] text-cyan-100/90 leading-relaxed font-sans max-w-3xl mx-auto">
          From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
        </p>
      </div>

      {/* Multi-Card Video Showcase Carousel */}
      <div className="w-full px-4 sm:px-8 max-w-[1440px] mx-auto mb-6">
        <div className="relative overflow-hidden w-full">
          <div
            className="flex gap-4 transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 236}px)` }}
          >
            {videoCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleOpenVideo(card)}
                className="w-[220px] sm:w-[250px] shrink-0 rounded-xl overflow-hidden bg-white text-slate-900 shadow-lg border border-white/20 group cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Thumbnail Header Area */}
                <div className={`relative h-[135px] sm:h-[155px] bg-gradient-to-br ${card.bgGradient} p-3 flex flex-col justify-between overflow-hidden`}>
                  
                  {/* Top Row: Sapphire Logo */}
                  <div className="flex justify-between items-center z-10">
                    <span className="px-2 py-0.5 rounded-full text-[8px] font-black bg-white/20 text-white backdrop-blur-xs uppercase tracking-wider">
                      {card.badge}
                    </span>
                    <div className="flex items-center space-x-1 bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded border border-white/20">
                      <div className="w-3 h-3 rounded-full bg-[#0080B0] text-white flex items-center justify-center font-black text-[6.5px]">
                        S
                      </div>
                      <span className="text-[7.5px] font-extrabold text-white tracking-tight">Sapphire</span>
                    </div>
                  </div>

                  {/* Center Mockup Visual Content */}
                  <div className="my-auto z-10 text-center px-1">
                    <div className="text-white text-[11px] sm:text-xs font-black drop-shadow-md line-clamp-2">
                      {card.title}
                    </div>
                  </div>

                  {/* Play Icon Button (Bottom Right) */}
                  <div className="absolute bottom-2.5 right-2.5 z-20">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#005F96] shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-[#005F96]">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                </div>

                {/* Card Bottom White Title Label */}
                <div className="p-3 bg-white text-left font-sans flex-1 flex items-center">
                  <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug line-clamp-2">
                    {card.title}
                  </h3>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows & Action Button */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={goPrev}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 text-white transition-colors shadow-xs"
            aria-label="Previous Videos"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goNext}
            className="p-2 rounded-full border border-white/40 hover:bg-white/10 text-white transition-colors shadow-xs"
            aria-label="Next Videos"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* View Insightful Videos Button */}
        <div>
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#005F96] font-extrabold text-xs sm:text-sm transition-all shadow-md font-sans"
          >
            View Insightful Videos
          </a>
        </div>
      </div>

      {/* Video Modal Popup Overlay */}
      {activeVideoUrl && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 bg-slate-900 border-b border-slate-800 text-white">
              <h4 className="font-bold text-sm sm:text-base line-clamp-1">{activeVideoTitle}</h4>
              <button
                onClick={handleCloseVideo}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center font-bold text-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={activeVideoUrl}
                title={activeVideoTitle}
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

export default UnveilingInnovativeSolutionsVideoSlider;
