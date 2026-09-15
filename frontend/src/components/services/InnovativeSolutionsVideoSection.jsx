import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Container from '../common/Container';

const videoSolutions = [
  {
    id: 1,
    title: 'Enterprise Power Apps Solutions',
    bottomText: 'Enhance safety and efficiency with Firevy innovative business solutions.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#0C1E38] via-[#102A4E] to-[#0A182E] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[38%] flex justify-center items-center z-10">
          <div className="w-16 h-20 bg-white rounded-[5px] p-1 shadow-md text-slate-800 flex flex-col justify-between">
            <div className="w-full h-2 bg-blue-100 rounded-2xs" />
            <div className="grid grid-cols-2 gap-0.5 my-0.5">
              <div className="w-full h-5 bg-blue-50 rounded-2xs flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full border border-blue-500" />
              </div>
              <div className="w-full h-5 bg-sky-50 rounded-2xs" />
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-2xs" />
          </div>
        </div>

        <div className="w-[58%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[12px] sm:text-[13px] text-white">Solutions</h4>
          <ul className="text-[8.5px] sm:text-[9px] text-slate-300 space-y-0.5 font-normal">
            <li>• Developed Power Apps application</li>
            <li>• Integrated MS-Form via Power Automate</li>
            <li>• Enabled data filtering options</li>
          </ul>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Talenti Qube Recruitment AI',
    bottomText: 'Revolutionizing Recruitment through AI analytics and automated assessments.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#0E1726] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[46%] z-10 text-left space-y-1">
          <h4 className="font-[800] text-[13px] leading-tight text-indigo-300">
            Talenti Qube
          </h4>
          <p className="text-[8.5px] sm:text-[9px] text-slate-300 leading-tight font-normal">
            Revolutionizing Recruitment through AI analytics and automated assessments.
          </p>
        </div>

        <div className="w-[50%] flex justify-center items-center z-10">
          <div className="w-22 h-16 bg-white rounded-[5px] p-1 shadow-lg text-slate-800 flex flex-col justify-between">
            <div className="w-full h-2 bg-indigo-100 rounded-2xs" />
            <div className="space-y-0.5 my-0.5">
              <div className="w-full h-1 bg-slate-100 rounded-2xs" />
              <div className="w-3/4 h-1 bg-slate-100 rounded-2xs" />
            </div>
            <div className="w-full h-1.5 bg-indigo-600 rounded-2xs" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'FinPay : Smart Neo-Banking',
    bottomText: 'Next-gen biometric mobile banking, crypto payments, and global remittances.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#022C22] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[58%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[12px] sm:text-[13px] text-emerald-200">
            FinPay : Smart Neo-Banking
          </h4>
          <ul className="text-[8.5px] sm:text-[9px] text-emerald-100/90 space-y-0.5 font-normal">
            <li>• Biometric Secure Payments</li>
            <li>• Multi-currency Crypto Wallet</li>
            <li>• Instant P2P Settlements</li>
          </ul>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-14 h-20 bg-[#064E3B] rounded-[7px] border border-emerald-400/40 p-1 shadow-lg text-white flex flex-col justify-between">
            <div className="w-full bg-emerald-500/30 rounded p-0.5 text-[5px] font-bold text-center">
              Balance: $48,750
            </div>
            <div className="w-full h-7 bg-emerald-900/60 rounded my-0.5" />
            <div className="w-full h-2 bg-emerald-400 rounded-2xs" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'MediCare : 24/7 Virtual Health',
    bottomText: 'Seamless virtual consultations, smart e-prescriptions, and EHR synchronization.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#083344] via-[#0E7490] to-[#164E63] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[58%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[12px] sm:text-[13px] text-cyan-200">
            MediCare : 24/7 Virtual Health
          </h4>
          <ul className="text-[8.5px] sm:text-[9px] text-cyan-100/90 space-y-0.5 font-normal">
            <li>• HD Video Doctor Consultations</li>
            <li>• Automated EHR Sync & Vitals</li>
            <li>• Smart Pill Reminders</li>
          </ul>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-14 h-20 bg-white rounded-[7px] p-1 shadow-md text-slate-800 flex flex-col justify-between">
            <div className="w-5 h-5 rounded-full bg-cyan-100 mx-auto flex items-center justify-center">
              <span className="text-[8px]">🩺</span>
            </div>
            <div className="text-[5px] font-bold text-center text-slate-700 leading-tight">Dr. Sarah<br />Cardiologist</div>
            <div className="w-full py-0.5 bg-cyan-600 text-white rounded text-[5px] font-bold text-center">CONNECT</div>
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: 'SwiftLogix : Smart Fleet AI',
    bottomText: 'Real-time GPS fleet routing, automated dispatching, and fuel telemetry.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#111827] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[58%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[12px] sm:text-[13px] text-amber-300">
            SwiftLogix : Smart Fleet AI
          </h4>
          <p className="text-[8.5px] sm:text-[9px] text-slate-300 font-normal leading-tight">
            Dynamic AI dispatching, fuel optimization, and live GPS map tracking.
          </p>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-15 h-18 bg-slate-900 border border-amber-400/40 rounded-[6px] p-1 shadow-md flex flex-col justify-between">
            <div className="w-full h-2 bg-amber-400/80 rounded-3xs" />
            <div className="grid grid-cols-2 gap-0.5 my-0.5">
              <div className="w-full h-5 bg-slate-800 rounded-3xs" />
              <div className="w-full h-5 bg-slate-800 rounded-3xs" />
            </div>
            <div className="w-full h-1 bg-amber-500 rounded-3xs" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: 'BeautyBee: Discover Your Beauty Essentials',
    bottomText: 'Explore beauty products, cosmetics, and expert tips with BeautyBee.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#181109] via-[#2A1D11] to-[#120C06] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center opacity-95">
          <img src="/firevy_logo_white.png" alt="firevy.co" className="h-3.5 sm:h-4 w-auto object-contain drop-shadow-xs" />
        </div>

        <div className="w-[58%] z-10 text-left space-y-1">
          <h4 className="font-[800] text-[12px] sm:text-[13px] leading-tight text-amber-200 tracking-tight">
            BEAUTYBEE: Discover Your Beauty Essentials
          </h4>
          <p className="text-[9px] sm:text-[9.5px] text-slate-300 leading-tight font-normal line-clamp-2">
            Where beauty meets convenience, explore cosmetics and skincare.
          </p>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-14 h-20 bg-gradient-to-b from-[#FFFDF9] to-[#F7EEDD] rounded-[7px] p-0.5 shadow-md border border-amber-300/40 flex flex-col justify-between">
            <div className="w-full h-1.5 bg-amber-200/80 rounded-2xs" />
            <div className="grid grid-cols-2 gap-0.5 my-0.5">
              <div className="w-full h-5 bg-amber-100/60 rounded-2xs" />
              <div className="w-full h-5 bg-pink-100/60 rounded-2xs" />
            </div>
            <div className="w-full h-2 bg-amber-500 rounded-2xs" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  }
];

export const InnovativeSolutionsVideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  // Exact 2-Second Auto-Scroll Interval (Pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoSolutions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Smooth scroll synchronization
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 640 ? 290 : window.innerWidth < 1024 ? 325 : 345;
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoSolutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videoSolutions.length);
  };

  return (
    <section
      className="py-10 sm:py-12 bg-[#005F96] text-white font-sans w-full overflow-hidden text-left border-b border-[#004d7a]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-6 sm:mb-8">
        <h2 className="font-[800] text-white tracking-tight leading-tight text-[24px] sm:text-[28px] lg:text-[32px] mb-2 font-sans">
          Unveiling Our Innovative Solution
        </h2>
        <p className="text-[12.5px] sm:text-[14px] text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
          From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
        </p>
      </div>

      {/* Full-width Edge-to-Edge Video Cards Carousel */}
      <div className="w-full relative mb-6">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-2 px-4 sm:px-8 md:px-12 lg:px-16 scroll-smooth select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videoSolutions.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className={`w-[280px] sm:w-[315px] lg:w-[335px] shrink-0 bg-white rounded-[14px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                idx === currentIndex ? 'ring-2 ring-white shadow-2xl' : 'opacity-95'
              }`}
            >
              {/* Compact Thumbnail Image */}
              <div className="w-full overflow-hidden">
                {item.renderThumb()}
              </div>

              {/* Compact Bottom White Label Strip */}
              <div className="bg-white px-3.5 py-2.5 border-t border-slate-100 text-left min-h-[46px] flex items-center">
                <p className="text-[11px] sm:text-[12px] text-[#334155] font-semibold leading-snug truncate group-hover:text-[#005F96] transition-colors">
                  {item.bottomText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-4 mt-5 mb-1">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-8 h-8 rounded-full border border-white/50 text-white hover:bg-white hover:text-[#005F96] hover:border-white transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer text-sm font-bold"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-8 h-8 rounded-full border border-white/50 text-white hover:bg-white hover:text-[#005F96] hover:border-white transition-all flex items-center justify-center shadow-sm active:scale-95 cursor-pointer text-sm font-bold"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Compact CTA Button */}
      <div className="text-center">
        <Link
          to="/company/insightful-videos"
          className="inline-flex items-center justify-center px-6 py-2 rounded-[4px] bg-white text-[#005F96] hover:bg-slate-100 font-[700] text-[13px] sm:text-[13.5px] transition-all shadow-md hover:shadow-lg cursor-pointer font-sans"
        >
          View Insightful Videos
        </Link>
      </div>

      {/* Interactive Video Popup Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <div className="p-4 bg-slate-800 flex items-center justify-between border-b border-slate-700">
                <h3 className="font-bold text-white text-base">{activeVideo.title}</h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-slate-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  src={`${activeVideo.videoUrl}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InnovativeSolutionsVideoSection;

