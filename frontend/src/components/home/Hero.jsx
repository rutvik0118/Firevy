import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const defaultSlide = {
  tag: 'AI Innovation',
  titleLine1: 'Your Vision,',
  titleLine2: 'Our Technology',
  subTag: '(Limitless Possibilities)',
  bullets: [
    'Recognized as #1 Web Development Company in India and USA.',
    'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
    "We've been Redefining Excellence for over Two Decades."
  ],
  primaryCtaText: "Let's Talk",
  primaryCtaLink: '/contact',
  backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4',
  backgroundImageUrl: '',
  bgType: 'video',
  isActive: true
};

export const Hero = ({ data }) => {
  // Normalize slides array from data.slides, top-level data fields, or defaultSlide
  const slides = (data?.slides && Array.isArray(data.slides) && data.slides.filter(s => s.isActive !== false).length > 0)
    ? data.slides.filter(s => s.isActive !== false)
    : (data && (data.tag || data.titleLine1 || data.titleLine2 || data.title || data.bullets)
      ? [{
        tag: data.tag,
        titleLine1: data.titleLine1,
        titleLine2: data.titleLine2,
        title: data.title,
        subTag: data.subTag || data.subtitle,
        bullets: data.bullets,
        primaryCtaText: data.primaryCtaText,
        primaryCtaLink: data.primaryCtaLink,
        backgroundVideoUrl: data.backgroundVideoUrl,
        backgroundImageUrl: data.backgroundImageUrl,
        bgType: data.bgType,
        isActive: true
      }]
      : [defaultSlide]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Keep index within bounds if slide count changes
  useEffect(() => {
    if (currentSlideIndex >= slides.length) {
      setCurrentSlideIndex(0);
    }
  }, [slides.length, currentSlideIndex]);

  // Auto-rotate if multiple slides
  useEffect(() => {
    if (slides.length <= 1) return;
    const current = slides[currentSlideIndex] || {};
    if (current.autoRotate === false) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, currentSlideIndex, slides]);

  const currentSlide = slides[currentSlideIndex] || slides[0] || defaultSlide;

  const tag = currentSlide.tag ?? data?.tag ?? defaultSlide.tag;
  const titleLine1 = currentSlide.titleLine1 ?? data?.titleLine1 ?? (currentSlide.title || data?.title ? (currentSlide.title || data?.title) : defaultSlide.titleLine1);
  const titleLine2 = currentSlide.titleLine2 ?? data?.titleLine2 ?? (currentSlide.title || data?.title ? '' : defaultSlide.titleLine2);
  const subTag = currentSlide.subTag ?? data?.subTag ?? currentSlide.subtitle ?? data?.subtitle ?? defaultSlide.subTag;
  const bullets = (Array.isArray(currentSlide.bullets) && currentSlide.bullets.length > 0)
    ? currentSlide.bullets
    : (Array.isArray(data?.bullets) && data.bullets.length > 0 ? data.bullets : defaultSlide.bullets);
  const primaryCtaText = currentSlide.primaryCtaText ?? data?.primaryCtaText ?? defaultSlide.primaryCtaText;
  const primaryCtaLink = currentSlide.primaryCtaLink ?? data?.primaryCtaLink ?? defaultSlide.primaryCtaLink;
  const getVideoUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:') || url.startsWith('data:')) {
      return url;
    }
    if (url.startsWith('/uploads/') || url.startsWith('uploads/')) {
      const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const cleanUrl = url.startsWith('/') ? url : `/${url}`;
      return `${backendBase.replace(/\/$/, '')}${cleanUrl}`;
    }
    return url;
  };

  const bgType = currentSlide.bgType || data?.bgType || (currentSlide.backgroundImageUrl ? 'image' : 'video');
  const backgroundVideoUrl = currentSlide.backgroundVideoUrl || data?.backgroundVideoUrl || defaultSlide.backgroundVideoUrl;
  const backgroundImageUrl = currentSlide.backgroundImageUrl || data?.backgroundImageUrl || '';

  const resolvedVideoUrl = getVideoUrl(backgroundVideoUrl);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[95vh] flex items-end pt-40 sm:pt-48 pb-12 sm:pb-16 overflow-hidden bg-[#011120] font-sans text-left">
      {/* 1. Background Video / Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgType === 'image' && backgroundImageUrl ? (
          <img
            src={backgroundImageUrl}
            alt={tag || 'Hero Banner'}
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
          />
        ) : (
          <video
            key={resolvedVideoUrl}
            src={resolvedVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
          />
        )}
        {/* Dark Blue Gradient Overlay for High Contrast Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011120] via-[#011627]/80 to-transparent pointer-events-none" />
      </div>


      {/* 3. Hero Main Content Container - Aligns directly to left matching Header padding */}
      <div className="relative z-10 w-full px-6 lg:px-10">
        <div className="max-w-3xl space-y-4">

          {/* Tag / Badge */}
          {tag && (
            <h2 className="text-[28px] sm:text-[34px] font-[800] text-white tracking-wide font-sans">
              {tag}
            </h2>
          )}

          {/* Main Title: Heading Line 1 + Heading Line 2 */}
          {(titleLine1 || titleLine2) && (
            <h1 className="text-[36px] sm:text-[46px] lg:text-[50px] font-[900] tracking-tight leading-[1.12] font-sans">
              {titleLine1 && <span className="text-[#0088CC]">{titleLine1} </span>}
              {titleLine2 && <span className="text-[#E83D98]">{titleLine2}</span>}
            </h1>
          )}

          {/* Subtitle */}
          {subTag && (
            <p className="text-[17px] sm:text-[19px] font-[400] text-white/95 tracking-normal font-sans mb-4">
              {subTag}
            </p>
          )}

          {/* Dynamic Bullet Points List */}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-3 pt-2 max-w-2xl text-slate-100 text-[15px] sm:text-[16px] font-[400] font-sans leading-relaxed">
              {bullets.map((bullet, idx) => {
                if (!bullet) return null;
                return (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <span className="text-white text-lg font-bold leading-none mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Primary CTA Button */}
          {primaryCtaText && (
            <div className="pt-4">
              <Link
                to={primaryCtaLink || '/contact'}
                className="inline-flex items-center justify-center px-7 py-3 rounded-[4px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
              >
                <span>{primaryCtaText}</span>
              </Link>
            </div>
          )}

          {/* Slide Indicator Dots (if multiple slides exist) */}
          {slides.length > 1 && (
            <div className="flex items-center space-x-2 pt-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlideIndex ? 'w-8 bg-[#0088CC]' : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
