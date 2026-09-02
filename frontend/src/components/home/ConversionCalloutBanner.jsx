import React from 'react';
import { Link } from 'react-router-dom';

export const ConversionCalloutBanner = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#006B8F] text-white relative overflow-hidden font-sans border-b border-cyan-900">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side Grayscale Photo with Rounded Right Edge */}
          <div className="hidden lg:block shrink-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
              alt="Business Partners"
              className="w-72 xl:w-80 h-72 xl:h-80 rounded-r-[70px] xl:rounded-r-[90px] object-cover shadow-2xl filter grayscale contrast-125 border-r-4 border-white/20"
            />
          </div>

          {/* Center Content Column */}
          <div className="text-center max-w-2xl mx-auto py-4">
            <h2 className="text-[34px] font-[800] text-white tracking-tight leading-tight mb-4">
              Let’s Start Something <span className="inline-block">Together</span>
            </h2>

            <p className="text-[18px] font-[400] text-cyan-100 leading-relaxed max-w-xl mx-auto mb-8">
              Book a meeting with our specialists today to learn more about how Firevy can help you unlock technology visions and drive your product strategy.
            </p>

            <div>
              <Link
                to="/contact"
                className="inline-block px-8 py-3.5 rounded-lg bg-white text-[#006B8F] hover:bg-slate-100 font-extrabold text-sm border-2 border-white shadow-xl transition-all hover:scale-105 active:scale-95 font-sans"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Side Grayscale Photo with Rounded Left Edge */}
          <div className="hidden lg:block shrink-0">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Corporate Leadership Team"
              className="w-72 xl:w-80 h-72 xl:h-80 rounded-l-[70px] xl:rounded-l-[90px] object-cover shadow-2xl filter grayscale contrast-125 border-l-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCalloutBanner;
