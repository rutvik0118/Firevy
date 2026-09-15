import React from 'react';

export const IWatchChallengeCtaBanner = ({
  title = "Have iWatch App Development Challenge To Address ?",
  subtitle = "Get access to top iWatch App Development to transform your ideas into a robust application.",
  buttonText = "Hire Now"
}) => {
  return (
    <section className="relative w-full max-w-full py-7 sm:py-8 lg:py-9 bg-[#005F96] text-white text-center font-sans overflow-hidden">
      {/* Background Floating Geometric Rounded Squares / Rectangles Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Floating Boxes */}
        <div className="absolute top-4 left-1/4 w-16 h-16 rounded-xl bg-white/[0.06] -rotate-6" />
        <div className="absolute -bottom-6 left-12 w-28 h-28 rounded-2xl bg-white/[0.05] rotate-12" />
        
        {/* Right Side Floating Rounded Rectangles */}
        <div className="absolute top-3 right-1/4 w-36 h-20 rounded-2xl bg-white/[0.06] rotate-3" />
        <div className="absolute bottom-2 right-16 w-24 h-24 rounded-2xl bg-white/[0.04] -rotate-12" />
        <div className="absolute -top-10 right-10 w-40 h-40 rounded-3xl border-8 border-white/[0.05] rotate-45" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8 mx-auto text-center space-y-3">
        {/* Main Title */}
        <h2
          className="text-white tracking-tight leading-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '32px',
            color: '#FFFFFF'
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[14.5px] text-blue-50 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
          {subtitle}
        </p>

        {/* Centered White "Hire Now" Button */}
        <div className="pt-2">
          <a
            href="#quote-form"
            className="inline-block bg-white hover:bg-slate-50 text-[#005F96] font-[800] text-xs sm:text-sm px-8 py-2.5 rounded-[5px] shadow-md hover:shadow-lg transition-all duration-200 tracking-wide cursor-pointer"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default IWatchChallengeCtaBanner;
