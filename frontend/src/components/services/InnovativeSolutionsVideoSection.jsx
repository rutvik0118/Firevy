import React, { useState, useEffect, useRef } from 'react';

const videoSolutions = [
  {
    id: 1,
    title: 'BeautyBee: Discover Your Beauty Essentials',
    bottomText: 'Explore beauty products, cosmetics, and expert tips with BeautyBee.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#181109] via-[#2A1D11] to-[#120C06] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-white font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[58%] z-10 text-left space-y-1">
          <h4 className="font-[800] text-[12px] sm:text-[13px] leading-tight text-amber-200 tracking-tight">
            BEAUTYBEE: Discover Your Beauty Essentials
          </h4>
          <p className="text-[9px] sm:text-[9.5px] text-slate-300 leading-tight font-normal line-clamp-2">
            Where beauty meets convenience, explore a world of cosmetics and skincare.
          </p>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-14 h-22 bg-gradient-to-b from-[#FFFDF9] to-[#F7EEDD] rounded-[7px] p-0.5 shadow-md border border-amber-300/40 flex flex-col justify-between">
            <div className="w-full h-1.5 bg-amber-200/80 rounded-2xs" />
            <div className="grid grid-cols-2 gap-0.5 my-0.5">
              <div className="w-full h-6 bg-amber-100/60 rounded-2xs" />
              <div className="w-full h-6 bg-pink-100/60 rounded-2xs" />
            </div>
            <div className="w-full h-2 bg-amber-500 rounded-2xs" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/95 text-[#005F96] flex items-center justify-center shadow-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current ml-0.5" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'BREATHCRAFT : Mindful Breathing',
    bottomText: 'Improve mental clarity, reduce stress, and boost well-being with BreathCraft.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#FFFFFF] p-3 sm:p-3.5 flex items-center justify-between text-slate-800 overflow-hidden select-none">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-[#E8EEF5] rounded-t-[40%] pointer-events-none" />

        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-[#005F96] font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[58%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[11.5px] sm:text-[12.5px] leading-tight text-[#1E3A8A] tracking-tight">
            BREATHCRAFT : Unleash Your Potential through Mindful Breathing
          </h4>
          <ul className="text-[8.5px] sm:text-[9px] text-slate-600 space-y-0.5 font-normal">
            <li>• Empower Your Wellness Journey</li>
            <li>• Reduce Stress</li>
            <li>• Enhance Focus and Calm</li>
          </ul>
        </div>

        <div className="w-[36%] flex justify-center items-center z-10">
          <div className="w-14 h-22 bg-[#1E293B] rounded-[8px] p-0.5 shadow-md flex flex-col justify-center items-center">
            <div className="w-full h-full bg-white rounded-[6px] flex flex-col items-center justify-center p-1 text-center">
              <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mb-0.5">
                <span className="text-[8px]">🧘</span>
              </div>
              <span className="text-[5.5px] font-bold text-slate-800 tracking-wider">BREATHCRAFT</span>
            </div>
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
    title: 'FIND YOUR STREAM! OTT Platform',
    bottomText: 'Stream movies and TV shows in high quality with personalized recommendations.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#0C101A] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute bottom-0 left-1/4 w-36 h-16 bg-rose-500/20 rounded-full blur-xl pointer-events-none" />

        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-cyan-400 font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[50%] z-10 text-left space-y-0.5">
          <h4 className="font-[900] text-[13.5px] sm:text-[14.5px] leading-tight text-white tracking-wide">
            FIND<br /><span className="text-rose-400">YOUR STREAM!</span>
          </h4>
          <p className="text-[8.5px] sm:text-[9px] text-slate-400 leading-tight font-normal">
            Detailed movie descriptions and streaming availability
          </p>
        </div>

        <div className="w-[46%] flex justify-center items-center z-10">
          <div className="w-24 h-16 bg-slate-900 rounded-2xs border border-slate-700 p-0.5 shadow-xl flex flex-col justify-between">
            <div className="w-full h-2 bg-rose-600 rounded-3xs" />
            <div className="grid grid-cols-3 gap-0.5 my-0.5">
              <div className="w-full h-6 bg-slate-800 rounded-3xs" />
              <div className="w-full h-6 bg-slate-800 rounded-3xs" />
              <div className="w-full h-6 bg-slate-800 rounded-3xs" />
            </div>
            <div className="w-full h-0.5 bg-slate-700 rounded-3xs" />
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
    title: 'Enterprise Power Apps Solutions',
    bottomText: 'Enhance safety and efficiency with Firevy innovative business solutions.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#0C1E38] via-[#102A4E] to-[#0A182E] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-white font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[38%] flex justify-center items-center z-10">
          <div className="w-18 h-22 bg-white rounded-[5px] p-1 shadow-md text-slate-800 flex flex-col justify-between">
            <div className="w-full h-2 bg-blue-100 rounded-2xs" />
            <div className="grid grid-cols-2 gap-0.5 my-0.5">
              <div className="w-full h-6 bg-blue-50 rounded-2xs flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border border-blue-500" />
              </div>
              <div className="w-full h-6 bg-sky-50 rounded-2xs" />
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
    id: 5,
    title: 'Talenti Qube Recruitment AI',
    bottomText: 'Revolutionizing Recruitment with automated intelligence and candidate evaluation.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#0E1726] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-white font-[800] text-[9.5px] tracking-wider">FIREVY</span>
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
          <div className="w-24 h-18 bg-white rounded-[5px] p-1 shadow-lg text-slate-800 flex flex-col justify-between">
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
    id: 6,
    title: 'FinPay: Digital Banking & Wallet',
    bottomText: 'Next-gen biometric mobile banking, crypto payments, and AI finance management.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#052E16] via-[#064E3B] to-[#022C22] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-emerald-400 font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[56%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[13px] leading-tight text-emerald-300">
            FinPay : Smart Neo-Banking
          </h4>
          <ul className="text-[8.5px] sm:text-[9px] text-emerald-100/80 space-y-0.5 font-normal">
            <li>• Biometric Secure Payments</li>
            <li>• Multi-currency Crypto Wallet</li>
            <li>• Instant P2P Settlements</li>
          </ul>
        </div>

        <div className="w-[38%] flex justify-center items-center z-10">
          <div className="w-14 h-22 bg-[#022C22] rounded-[8px] p-0.5 shadow-lg border border-emerald-500/40 flex flex-col justify-between">
            <div className="w-full h-6 bg-emerald-700/60 rounded-xs flex flex-col justify-center p-0.5">
              <span className="text-[5px] text-emerald-200">Balance</span>
              <span className="text-[7px] font-bold text-white">$48,250</span>
            </div>
            <div className="w-full h-8 bg-emerald-800/40 rounded-xs my-0.5" />
            <div className="w-full h-2 bg-emerald-500 rounded-2xs" />
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
    id: 7,
    title: 'MediCare: Smart Telehealth & Care',
    bottomText: 'Seamless virtual consultations, smart e-prescriptions, and vitals tracking.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-gradient-to-r from-[#083344] via-[#0E4A62] to-[#082F49] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-cyan-300 font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[56%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[13px] leading-tight text-cyan-200">
            MediCare : 24/7 Virtual Health
          </h4>
          <ul className="text-[8.5px] sm:text-[9px] text-cyan-100/80 space-y-0.5 font-normal">
            <li>• HD Video Doctor Consultations</li>
            <li>• Automated EHR Sync & Vitals</li>
            <li>• Smart Pill Reminders</li>
          </ul>
        </div>

        <div className="w-[38%] flex justify-center items-center z-10">
          <div className="w-14 h-22 bg-white rounded-[8px] p-0.5 shadow-lg border border-cyan-300 flex flex-col justify-between text-slate-800">
            <div className="w-full h-8 bg-cyan-100 rounded-xs flex items-center justify-center">
              <span className="text-[12px]">🩺</span>
            </div>
            <div className="w-full h-6 bg-slate-50 rounded-xs my-0.5 flex flex-col justify-center px-1">
              <span className="text-[6px] font-bold text-cyan-800">Dr. Sarah</span>
              <span className="text-[5px] text-slate-400">Cardiologist</span>
            </div>
            <div className="w-full h-2.5 bg-cyan-600 rounded-2xs text-[5.5px] text-white font-bold flex items-center justify-center">
              Connect
            </div>
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
    id: 8,
    title: 'SwiftLogix: GPS Fleet & Supply Chain',
    bottomText: 'Real-time GPS fleet routing, automated dispatching, and warehouse tracking.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    renderThumb: () => (
      <div className="relative w-full h-[145px] sm:h-[155px] bg-[#111827] p-3 sm:p-3.5 flex items-center justify-between text-white overflow-hidden select-none">
        <div className="absolute top-2.5 right-3 flex items-center space-x-1 opacity-90">
          <span className="text-amber-400 font-[800] text-[9.5px] tracking-wider">FIREVY</span>
        </div>

        <div className="w-[54%] z-10 text-left space-y-0.5">
          <h4 className="font-[800] text-[13px] leading-tight text-amber-300">
            SwiftLogix : Smart Fleet AI
          </h4>
          <p className="text-[8.5px] sm:text-[9px] text-slate-300 leading-tight font-normal">
            Dynamic AI dispatching, fuel optimization, and live GPS map tracking.
          </p>
        </div>

        <div className="w-[42%] flex justify-center items-center z-10">
          <div className="w-22 h-18 bg-slate-900 rounded-xs border border-amber-500/40 p-1 shadow-xl flex flex-col justify-between">
            <div className="w-full h-2 bg-amber-500/80 rounded-3xs flex items-center px-1">
              <span className="text-[5px] text-slate-900 font-bold">ROUTE #482</span>
            </div>
            <div className="w-full h-8 bg-slate-800 rounded-3xs my-0.5 flex items-center justify-center">
              <span className="text-[10px]">🚚 📍</span>
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
  }
];

export const InnovativeSolutionsVideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoSolutions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Sync scroll position
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 340; // card width + gap
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
      className="pt-5 pb-6 sm:pt-6 sm:pb-7 bg-[#005F96] text-white font-sans w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-4 sm:mb-5">
        <h2 className="font-[800] text-white tracking-tight leading-tight text-[22px] sm:text-[25px] lg:text-[27px] mb-1.5">
          Unveiling Our Innovative Solution
        </h2>
        <p className="text-[12px] sm:text-[12.8px] text-blue-100/90 leading-snug max-w-xl mx-auto font-normal">
          From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
        </p>
      </div>

      {/* Full-width Edge-to-Edge Video Cards Carousel */}
      <div className="w-full relative mb-4">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-none py-1 px-6 sm:px-12 md:px-16 lg:px-20 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videoSolutions.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="w-[280px] sm:w-[315px] lg:w-[335px] shrink-0 bg-white rounded-[14px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              {/* Compact Thumbnail Image */}
              <div className="w-full overflow-hidden">
                {item.renderThumb()}
              </div>

              {/* Compact Bottom White Label Strip */}
              <div className="bg-white px-3 py-2 border-t border-slate-100 text-left">
                <p className="text-[11px] sm:text-[11.5px] text-[#334155] font-normal leading-snug truncate group-hover:text-[#005F96] transition-colors">
                  {item.bottomText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Carousel Arrow Controls */}
        <div className="flex items-center justify-center space-x-5 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all text-lg font-bold cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all text-lg font-bold cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Bottom Compact CTA Button */}
      <div className="text-center">
        <a
          href="#quote-form"
          className="inline-flex items-center justify-center px-5 py-1.5 rounded-[4px] bg-white text-[#005F96] hover:bg-slate-100 font-[700] text-[12px] sm:text-[12.5px] transition-all shadow-sm cursor-pointer"
        >
          View Insightful Videos
        </a>
      </div>

      {/* Interactive Video Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="p-4 bg-slate-800 flex items-center justify-between border-b border-slate-700">
              <h3 className="font-bold text-white text-base">{activeVideo.title}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-slate-400 hover:text-white text-xl font-bold px-2 py-1 cursor-pointer"
              >
                ✕
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
    </section>
  );
};

export default InnovativeSolutionsVideoSection;
