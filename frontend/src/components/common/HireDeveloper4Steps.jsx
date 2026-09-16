import React from 'react';
import Container from './Container';
import { FileText, Contact2, HelpCircle, UserCheck } from 'lucide-react';

export const HireDeveloper4Steps = ({
  title = "Hire Kotlin Developers In 4 Easy Steps",
  subtitle = "Kotlin Development offers a number of advantages over another platform. Some of them are:"
}) => {
  const steps = [
    {
      stepNum: "Step 01",
      title: "Send Us Your Detailed Project Requirement",
      icon: FileText,
      badgeBg: "bg-[#00507a]",
      chevronBg: "bg-[#00507a]"
    },
    {
      stepNum: "Step 02",
      title: "Select Candidate for Screening Process",
      icon: Contact2,
      badgeBg: "bg-[#0084ad]",
      chevronBg: "bg-[#0084ad]"
    },
    {
      stepNum: "Step 03",
      title: "Take Interview of Selected Candidates",
      icon: HelpCircle,
      badgeBg: "bg-[#006095]",
      chevronBg: "bg-[#006095]"
    },
    {
      stepNum: "Step 04",
      title: "Initiate Project On-Boarding & Assign",
      icon: UserCheck,
      badgeBg: "bg-[#00486c]",
      chevronBg: "bg-[#00486c]"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 font-sans border-b border-slate-100 overflow-hidden">
      <Container className="max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-slate-900 tracking-tight leading-tight mb-2">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal">
            {subtitle}
          </p>
        </div>

        {/* 4 Easy Steps Looping Graphic Container */}
        <div className="relative max-w-5xl mx-auto mb-12">
          
          {/* Outer Looping Racetrack SVG (Desktop & Tablet) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 920 340" fill="none" preserveAspectRatio="none">
              {/* Top Half Track (Light Sky Blue) */}
              <path
                d="M 80 180 C 80 80, 160 50, 240 50 L 680 50 C 760 50, 840 80, 840 180"
                stroke="#BAE6FD"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow on right going down */}
              <path d="M 840 190 L 832 170 L 848 170 Z" fill="#BAE6FD" />

              {/* Bottom Half Track (Dark Ocean Blue) */}
              <path
                d="M 840 180 C 840 280, 760 290, 680 290 L 240 290 C 160 290, 80 280, 80 180"
                stroke="#006095"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              {/* Arrow on left going up */}
              <path d="M 80 170 L 72 190 L 88 190 Z" fill="#006095" />

              {/* Left arrow near bottom return track */}
              <path d="M 280 290 L 295 284 L 295 296 Z" fill="#006095" />
              <path d="M 640 290 L 655 284 L 655 296 Z" fill="#006095" />
            </svg>
          </div>

          {/* Steps Content Body */}
          <div className="relative z-10 py-6 px-4 md:px-12">
            
            {/* Top Row: 4 Circular Badges */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-3 text-center">
              {steps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Circle Icon Badge */}
                    <div className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full ${item.badgeBg} text-white flex items-center justify-center shadow-lg border-[3.5px] border-white mb-2 transition-transform hover:scale-105`}>
                      <IconComp className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>

                    {/* Upward Connector Arrow */}
                    <div className="hidden md:flex flex-col items-center text-[#006095]">
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17V3M7 3L2 8M7 3L12 8" stroke="#006095" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Row: Connected Colored Chevron Arrow Ribbon Banner */}
            <div className="my-2 hidden md:block">
              <div className="flex items-center rounded-lg overflow-visible shadow-sm">
                {steps.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 py-4 text-center relative flex items-center justify-center text-white font-[800] text-sm sm:text-[16px] tracking-wide ${item.chevronBg} ${
                      idx === 0 ? 'rounded-l-lg' : ''
                    }`}
                    style={{
                      clipPath: idx === 0
                        ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                        : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
                      marginLeft: idx > 0 ? '-14px' : '0',
                      zIndex: 10 - idx
                    }}
                  >
                    <span className={idx > 0 ? 'pl-3' : ''}>{item.stepNum}</span>
                  </div>
                ))}
                {/* Ghost End Arrow */}
                <div
                  className="w-10 h-14 bg-[#BAE6FD]/60 shrink-0"
                  style={{
                    clipPath: 'polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%, 40% 50%)',
                    marginLeft: '-10px'
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Step Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 text-center pt-2">
              {steps.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Step Num for Mobile view */}
                  <span className="md:hidden inline-block bg-[#006095] text-white font-[800] text-xs px-3 py-1 rounded-full mb-1.5">
                    {item.stepNum}
                  </span>
                  <h3 className="text-xs sm:text-[13.5px] font-[800] text-slate-800 leading-snug max-w-[190px]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Loop Bottom "NOT SATISFIED?" Pill */}
            <div className="mt-10 sm:mt-12 text-center relative z-20">
              <div className="inline-block bg-[#CBE8F6] border-2 border-[#00507a] text-[#00507a] font-[900] text-xs sm:text-[13px] px-7 py-1.5 rounded-full shadow-xs tracking-wider uppercase">
                NOT SATISFIED?
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact-quote') || document.getElementById('quote-form');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/contact';
              }
            }}
            className="inline-block bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-sm sm:text-[15px] px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Talk With Our Expert Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HireDeveloper4Steps;
