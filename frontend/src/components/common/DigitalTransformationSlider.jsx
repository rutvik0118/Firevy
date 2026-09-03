import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';

const transformItems = [
  {
    id: 1,
    title: 'Waymark Maps',
    subtitle: 'Interactive Navigation & Business Listing Platform',
    desc: 'A city map and free business listings are available on Waymark. Our city information is consistently accurate and current. With advertisements, points of interest, restaurants, hotels, malls, parking, featured locations, metro routes, tourist attractions, and much more, Waymark offers an interactive map of the Ivory Coast. There are two versions of Waymark: mobile and web.',
    bullets: [
      'Turn-by-turn voice navigation',
      'Points of Interest (POI) recommendations',
      'Real-time traffic updates and route optimization',
      'Offline map access for remote areas',
      'Augmented reality (AR) navigation features'
    ],
    leftBg: 'bg-[#F3E8FF]',
    rightBg: 'bg-[#FAF5FF]',
    textColor: 'text-[#6B21A8]',
    bulletColor: 'text-[#7E22CE]',
    image: '/images/waymark_map_app.webp'
  },
  {
    id: 2,
    title: 'BEE CARE',
    subtitle: 'On-Demand Car Wash & Automobile Services App',
    desc: 'If you provide car washing services, a custom car wash app is your best bet. Sapphire Solutions empowers people to book car wash services effortlessly on demand with real-time GPS tracking of service vans and automated payments.',
    bullets: [
      '96% customer retention rate',
      '92% Increase in service bookings',
      'Over 1,10,000 satisfied users',
      'Operating in 90+ locations',
      'User-friendly & Efficient dispatching'
    ],
    leftBg: 'bg-[#FEF9C3]',
    rightBg: 'bg-[#FEFCE8]',
    textColor: 'text-[#854D0E]',
    bulletColor: 'text-[#A16207]',
    image: '/images/opt_2.webp'
  },
  {
    id: 3,
    title: 'Adani EmCare',
    subtitle: 'Enterprise Telehealth & Emergency Care System',
    desc: 'Comprehensive healthcare emergency care management platform built for Adani Group employees and enterprise healthcare partners with real-time vitals monitoring, digital health records, and instant doctor dispatch.',
    bullets: [
      '24/7 Remote ICU & Tele-consultation',
      'Automated EHR and EMR integration',
      'Real-time patient triage & alert triggers',
      'HIPAA & GDPR compliant data security',
      'Multi-hospital enterprise dashboard'
    ],
    leftBg: 'bg-[#FFE4E6]',
    rightBg: 'bg-[#FFF1F2]',
    textColor: 'text-[#9F1239]',
    bulletColor: 'text-[#BE123C]',
    image: '/images/img_client6.webp'
  }
];

export const DigitalTransformationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Automatic Smooth Rotation (Every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformItems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll Container to Center Active Card
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children[currentIndex]) {
      const container = sliderRef.current;
      const targetCard = container.children[currentIndex];
      const scrollPosition = targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformItems.length);
  };

  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-14 bg-white text-slate-900 relative overflow-hidden text-left border-b border-slate-200 font-sans">
      {/* Centered Heading & Subtitle */}
      <div className="text-center w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto mb-6 sm:mb-8 space-y-2.5">
        <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
          Digital Transformation Through Innovation and Collective Knowledge
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed max-w-4xl mx-auto font-sans">
          At Sapphire, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
        </p>
      </div>

      {/* Full Width Edge-to-Edge Banner Slider Track */}
      <div
        className="relative w-full overflow-hidden pb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex items-stretch space-x-6 sm:space-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth px-4 sm:px-8 lg:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {transformItems.map((item, idx) => (
            <div
              key={item.id}
              className="min-w-[90vw] sm:min-w-[850px] lg:min-w-[1020px] max-w-[1080px] rounded-3xl overflow-hidden border border-slate-100/80 shadow-lg grid grid-cols-1 lg:grid-cols-12 shrink-0 snap-center group transition-all duration-300"
            >
              {/* Left Content Half (Pastel Background) */}
              <div className={`lg:col-span-6 p-7 sm:p-9 md:p-10 ${item.leftBg} flex flex-col justify-between text-left font-sans`}>
                <div className="space-y-4">
                  {/* Brand Title */}
                  <h3 className={`text-3xl sm:text-4xl font-black ${item.textColor} tracking-tight font-sans`}>
                    {item.title}
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-700 leading-[1.7] font-normal font-sans">
                    {item.desc}
                  </p>

                  {/* 5 Bullet Points with Double Chevron » Arrows */}
                  <ul className="space-y-2.5 pt-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-[13.5px] font-bold text-slate-800 font-sans">
                        <span className={`${item.bulletColor} font-black text-sm shrink-0`}>»</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons: View Case Study & View Portfolio */}
                <div className="flex flex-wrap items-center gap-3.5 pt-8 mt-4">
                  <a
                    href="#quote-form"
                    className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#1E293B] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-200"
                  >
                    View Case Study
                  </a>
                  <a
                    href="#portfolio"
                    className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full border border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white text-xs sm:text-sm font-bold transition-all duration-200"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>

              {/* Right Illustration / App Mockup Half */}
              <div className={`lg:col-span-6 ${item.rightBg} p-6 sm:p-8 flex items-center justify-center relative overflow-hidden min-h-[300px]`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-xl group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev (←) & Next (→) Navigation Controls */}
      <div className="flex items-center justify-center space-x-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-slate-400 text-slate-800 hover:border-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-all duration-200"
          aria-label="Previous Slide"
        >
          <span className="text-lg font-bold">←</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-slate-400 text-slate-800 hover:border-slate-800 hover:bg-slate-200/60 flex items-center justify-center transition-all duration-200"
          aria-label="Next Slide"
        >
          <span className="text-lg font-bold">→</span>
        </button>
      </div>
    </section>
  );
};

export default DigitalTransformationSlider;
