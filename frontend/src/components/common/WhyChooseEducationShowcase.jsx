import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export const WhyChooseEducationShowcase = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="w-full py-16 sm:py-20 bg-white text-slate-900 overflow-hidden font-sans border-b border-slate-200 relative">
      {/* Full Width Edge-to-Edge Container */}
      <div className="w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto text-center">
        {/* Section Headers */}
        <div className="space-y-2 mb-10 sm:mb-14">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight font-sans">
            Why Choose Sapphire for?
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-950 tracking-tight leading-tight font-sans">
            Education App Development Service
          </h2>
        </div>

        {/* 1:1 High-Definition Graphic Showcase Container (Zero Overlapping, Pixel-Perfect) */}
        <div className="relative w-full max-w-[780px] mx-auto flex justify-center items-center">
          <div 
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* 1:1 Exact Graphic Image with 18 Features & Center Smartphone */}
            <img
              src="/images/why_choose_sapphire_education_orbit.jpg"
              alt="Why Choose Sapphire for Education App Development Service"
              className="w-full h-auto object-contain max-h-[700px] mx-auto rounded-3xl"
            />

            {/* Click to Watch Video Overlay Badge */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#005F96]/90 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform border-4 border-white/80">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                title="Sapphire Education App Development Overview"
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

export default WhyChooseEducationShowcase;
