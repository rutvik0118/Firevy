import React from 'react';
import Container from '../common/Container';

export const DeliveringImpactfulMobileServices = ({ imageSrc = "/images/delivering_impactful_mobile_services.jpg" }) => {
  return (
    <section className="py-10 sm:py-14 bg-white text-slate-900 font-sans text-left overflow-hidden">
      <Container className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vector Illustration */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] flex items-center justify-center select-none overflow-hidden rounded-2xl group">
              <img
                src={imageSrc}
                alt="Delivering Impactful Mobile Application Services"
                className="w-full h-auto object-contain max-h-[420px] transition-transform duration-500 ease-out group-hover:scale-105 cursor-pointer rounded-2xl drop-shadow-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Title & Detailed Description */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Heading */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
              Delivering Impactful Mobile<br />Application Services
            </h2>

            {/* Comprehensive Description (Exact 1:1 Match to Screenshot) */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8] text-left">
              We provide a comprehensive suite of custom mobile app development services for application design, integration, and management. From ideation and concept to delivery and continuous support, our Affordable AI mobile app development services cover the full mobile app development process, whether the app is consumer-oriented or built for enterprise needs. Hire our mobile app development team and top-rated mobile app developers for Android and iOS to create secure, scalable, and high-performing applications that meet your business requirements. Now is the time to take your business to new heights with our power-packed mobile applications. Ensure seamless end-to-end execution backed by innovation and expertise to bring your vision to life with an AI-powered mobile app development company. Contact us now to discuss your idea!
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default DeliveringImpactfulMobileServices;
