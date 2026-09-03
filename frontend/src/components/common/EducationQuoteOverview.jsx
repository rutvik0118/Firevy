import React from 'react';
import Container from './Container';

export const EducationQuoteOverview = () => {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900 text-left font-sans border-b border-slate-200">
      <Container className="max-w-6xl">
        {/* Centered Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            White Label Custom Education App Development Services
          </h2>
        </div>

        {/* Split Grid Layout (Left Quote Callout Box | Right Paragraph Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Quote Callout Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#EFF7FE] rounded-xl p-8 sm:p-10 relative overflow-hidden border border-blue-100/90 shadow-sm min-h-[340px] flex flex-col justify-center font-sans">
              {/* Subtle Wavy Topographic Contour Background */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#005F96_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Giant Blue Quote Mark SVG */}
              <div className="relative z-10 mb-5">
                <svg className="w-14 h-14 text-[#005F96] fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Exact 5-Line Wrapped Headline Quote */}
              <h3 className="relative z-10 text-2xl sm:text-3xl lg:text-[30px] font-black text-[#005F96] leading-[1.25] tracking-tight font-sans">
                Get a 100% <br />
                Customizable <br />
                Education App <br />
                Developed By <br />
                Experts
              </h3>

              {/* Right Side Arrow Pointer Triangle */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-[#EFF7FE]" />
            </div>
          </div>

          {/* Right Detailed Verbatim Paragraphs */}
          <div className="lg:col-span-7 space-y-4 font-sans text-left pl-0 lg:pl-2">
            <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-[1.8] font-sans">
              Use our educational app development services we take your educational institution business online. Teachers are already transforming the lectures into mobile app based online courses. Hire EdTech app development company as they are also ensuring that kids can see things and learn more practically instead of just reading textbooks. The increasing demand for education app development services a major contributor to the application development education sector.
            </p>

            <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal leading-[1.8] font-sans">
              Create an enormous prospect for the education business to deliver various learning activities in a condensed manner through an app. Hire eLearning app developers that are known for their exceptional talent and expertise in the field. Our education app development services in USA, UK, Canada, Australia, and UAE are trustworthy and 100% genuine.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default EducationQuoteOverview;
