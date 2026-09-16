import React from 'react';
import Container from '../common/Container';

export const CreatingExcellentMobileAppsSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
      <Container className="max-w-6xl">
        
        {/* Section Heading */}
        <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
          Creating Excellent Mobile Apps for Every Business
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Soft Blue Topographic Patterned Quote Card */}
          <div className="lg:col-span-5 bg-[#F0F8FF] border border-[#BAE6FD]/80 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-xs min-h-[340px] group transition-all duration-300 hover:shadow-md">
            
            {/* Subtle decorative background topography wave contour lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
              viewBox="0 0 340 340"
              fill="none"
            >
              <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
              <path d="M-20 120 C70 170, 150 90, 230 160 C280 190, 320 120, 360 150" stroke="#005F96" strokeWidth="2" />
              <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
              <path d="M-20 240 C60 290, 140 210, 220 280 C270 310, 310 240, 360 270" stroke="#005F96" strokeWidth="2" />
              <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
            </svg>

            {/* Cyan/Blue Quotation Mark Icon */}
            <div className="text-[#005F96] text-6xl sm:text-7xl font-serif font-black leading-none mb-3 select-none relative z-10">
              “
            </div>

            {/* Bold Quote Headline */}
            <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
              Smart and Reliable<br />Apps
            </h3>
          </div>

          {/* Right Column: Detailed Narrative (Exact 1:1 Match to Screenshot) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
            <p>
              Discover the potential of entirely customizable mobile app development services with reliable mobile app development company. Custom mobile apps for your company and needs are our speciality. We concentrate on flexibility and scalability to guarantee your app matches your brand identity and user expectations. As a custom mobile app development company, we collaborate with you to understand your vision and create a unique mobile app that stands out in the app market, from user interface design to backend functions. With our advanced Mobile app builder, you can turn ideas into powerful digital solutions efficiently while reducing development time and cost.
            </p>

            <p>
              Innovation and cooperation drive our development approach, with frequent feedback loops to adapt your app to your requirements and market trends. You can <a href="#contact" className="text-[#005F96] font-bold hover:underline cursor-pointer">hire mobile app developers</a> to design consumer-facing apps, corporate solutions, and more. From concept and prototyping to development, testing, and deployment, our rigorous development process ensures your app exceeds expectations. When considering the development of a mobile app, understanding the mobile app development cost is essential. Costs vary depending on factors such as app complexity, platform (iOS vs. Android), and features. As a Mobile App Design Agency, our high-quality, scalable, and feature-rich mobile solutions help your business thrive in today's competitive digital market.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default CreatingExcellentMobileAppsSection;
