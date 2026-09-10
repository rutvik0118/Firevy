import React from 'react';

export const HealthcareChallengeCtaBanner = ({
  title = "Have Healthcare App Development Challenge To Address ?",
  subtitle = "Get access to top Healthcare app developers to transform your ideas into a robust application.",
  buttonText = "Hire Now"
}) => {
  return (
    <section className="relative w-full max-w-full py-8 sm:py-10 lg:py-11 bg-[#005D95] text-white text-center font-sans overflow-hidden text-left border-b border-slate-200">
      {/* Background Floating Geometric Circle & Square Overlay Graphics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Semi-Transparent Circle */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[16px] border-white/10 opacity-70" />
        <div className="absolute top-8 left-16 w-12 h-12 rounded-full bg-white/10 opacity-40" />

        {/* Top-Right Semi-Transparent Rounded Square Overlay */}
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-3xl border-[20px] border-white/10 opacity-50 transform rotate-12" />
        <div className="absolute bottom-6 right-20 w-16 h-16 rounded-2xl bg-white/10 opacity-30" />
      </div>

      {/* Full Width Edge-to-Edge Content Container */}
      <div className="relative z-10 w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto text-center space-y-2">
        {/* Main Title */}
        <h2
          className="text-white tracking-tight"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '41px',
            color: 'rgb(255, 255, 255)'
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-100 font-normal leading-relaxed max-w-3xl mx-auto font-sans opacity-95">
          {subtitle}
        </p>

        {/* Centered White "Hire Now" CTA Button */}
        <div className="pt-2.5">
          <a
            href="#quote-form"
            className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HealthcareChallengeCtaBanner;
