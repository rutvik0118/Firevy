import React from 'react';
import { Link } from 'react-router-dom';

export const ConversionCalloutBanner = ({ data }) => {
  const title = data?.title || "Let's Start Something Great Together";
  const description = data?.description || 'Book a meeting with our specialists today to learn more about how Firevy can help you unlock technology visions and drive your product strategy.';
  const buttonText = data?.buttonText || 'Get In Touch';
  const buttonLink = data?.buttonLink || '/contact';

  const defaultLeft = '/images/together_left.e9ba331b.webp';
  const defaultRight = '/images/together_right.5ad10a97.webp';
  const leftImg = (data?.leftImage && !data.leftImage.includes('unsplash.com/photo-1560250097')) ? data.leftImage : defaultLeft;
  const rightImg = (data?.rightImage && !data.rightImage.includes('unsplash.com/photo-1573496359142')) ? data.rightImage : defaultRight;

  const renderTitle = (titleText) => {
    if (!titleText) return null;
    if (titleText.includes('Great')) {
      const parts = titleText.split('Great');
      return (
        <>
          {parts[0]}
          <span className="text-cyan-200">Great</span>
          {parts.slice(1).join('Great')}
        </>
      );
    }
    return titleText;
  };

  return (
    <section className="w-full bg-[#006B8F] text-white relative overflow-hidden font-sans border-b border-cyan-900 select-none">
      {/* Background Decorative Rings & Squares */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-80 h-80 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-80 h-80 border border-white/20 rounded-full" />
        <div className="absolute top-6 left-[45%] w-24 h-24 border border-white/10 rounded-lg rotate-12" />
        <div className="absolute bottom-6 right-[45%] w-32 h-32 border border-white/10 rounded-lg -rotate-12" />
      </div>

      <div className="w-full flex items-center justify-between min-h-[200px] lg:min-h-[250px] xl:min-h-[270px]">
        {/* Left Flush Grayscale Photo with Rounded Right Edge */}
        {leftImg && (
          <div className="hidden lg:flex shrink-0 self-stretch items-center justify-start">
            <img
              src={leftImg}
              alt="Business Handshake"
              className="h-full max-h-[270px] xl:max-h-[300px] w-auto max-w-[200px] lg:max-w-[250px] xl:max-w-[310px] object-cover rounded-r-[50px] xl:rounded-r-[70px] shadow-2xl filter grayscale contrast-125 border-r border-white/10"
            />
          </div>
        )}

        {/* Center Content Column */}
        <div className="flex-1 text-center px-4 sm:px-6 lg:px-8 py-8 lg:py-10 max-w-5xl mx-auto z-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[38px] font-[800] text-white tracking-tight leading-tight mb-3 lg:mb-4 lg:whitespace-nowrap">
            {renderTitle(title)}
          </h2>

          <p className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] font-[400] text-cyan-50/95 leading-relaxed max-w-3xl xl:max-w-4xl mx-auto mb-6 lg:mb-8">
            {description}
          </p>

          <div>
            <Link
              to={buttonLink}
              className="inline-block px-8 sm:px-10 py-3 sm:py-3.5 rounded-[6px] bg-white text-[#006B8F] hover:bg-cyan-50 font-[700] text-[14px] sm:text-[15px] border-2 border-white shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Right Flush Grayscale Photo with Rounded Left Edge */}
        {rightImg && (
          <div className="hidden lg:flex shrink-0 self-stretch items-center justify-end">
            <img
              src={rightImg}
              alt="Corporate Team"
              className="h-full max-h-[270px] xl:max-h-[300px] w-auto max-w-[200px] lg:max-w-[250px] xl:max-w-[310px] object-cover rounded-l-[50px] xl:rounded-l-[70px] shadow-2xl filter grayscale contrast-125 border-l border-white/10"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ConversionCalloutBanner;
