import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import BRAND from '../../constants/brand';

const defaultHeroSlides = [
  {
    tag: 'AI Innovation',
    titleLine1: 'Your Vision,',
    titleLine2: 'Our Technology',
    subTag: '(Limitless Possibilities)',
    bullets: [
      'Recognized as #1 Web Development Company in India and USA.',
      'Trusted by 20+ Fortune 500 Companies and a Clutch Leader.',
      "We've been Redefining Excellence for over Two Decades."
    ],
    rightBoxTitle: 'Redefined Learning Experiences',
    rightBoxSub: 'With Intelligent AI Innovation',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    secondaryCtaText: 'Get in Touch',
    secondaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4'
  },
  {
    tag: 'Enterprise Engineering',
    titleLine1: 'Scalable Systems,',
    titleLine2: 'Global Performance',
    subTag: '(Engineered for Growth)',
    bullets: [
      'Top 1% Senior React, Node & Cloud Architects.',
      'ISO 9001:2015 & Enterprise SOC2 Ready Infrastructure.',
      'Sub-50ms API Latency with 99.99% Guaranteed Uptime.'
    ],
    rightBoxTitle: 'Cloud & AI Microservices',
    rightBoxSub: 'Driven by Next-Gen Innovation',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    secondaryCtaText: 'Get in Touch',
    secondaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4'
  },
  {
    tag: 'Custom App Solutions',
    titleLine1: 'Transforming Ideas,',
    titleLine2: 'Empowering Brands',
    subTag: '(Native & Cross-Platform)',
    bullets: [
      '500+ High-Impact Digital Products Delivered Worldwide.',
      'Seamless Multi-Device Web & Mobile UX Engineering.',
      'Agile 2-Week Sprint Delivery with Full Transparency.'
    ],
    rightBoxTitle: 'Immersive Product Design',
    rightBoxSub: 'Crafted for Modern Enterprise',
    primaryCtaText: "Let's Talk",
    primaryCtaLink: '/contact',
    secondaryCtaText: 'Get in Touch',
    secondaryCtaLink: '/contact',
    backgroundVideoUrl: '/Best Software Development Company in USA - Sapphire Software Sol.mp4'
  }
];

export const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlides = (data?.slides && Array.isArray(data.slides) && data.slides.filter(s => s.isActive !== false).length > 0)
    ? data.slides.filter(s => s.isActive !== false)
    : defaultHeroSlides;

  useEffect(() => {
    if (activeSlides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeSlides.length]);

  const slide = activeSlides[currentSlide] || activeSlides[0] || defaultHeroSlides[0];
  const videoUrl = slide.backgroundVideoUrl || '/Best Software Development Company in USA - Sapphire Software Sol.mp4';

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-slate-950 font-sans text-left">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key={videoUrl}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.7]"
        />
        {/* Dark Blue / Purple Gradient Overlay matching reference image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031120]/90 via-[#071D35]/80 to-[#0A071E]/85 backdrop-blur-[2px]" />
        
        {/* 3D Wireframe Mesh Graphic Overlay */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none bg-[radial-gradient(#005F96_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* 3. Hero Main Content Container */}
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                {/* Category Tag (AI Innovation) */}
                <div className="inline-block">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {slide.tag}
                  </h3>
                </div>

                {/* Main Heading with Gradient Text */}
                <h1 className="text-[34px] font-[800] tracking-tight leading-[1.25]">
                  <span className="text-[#005F96] text-white block">{slide.titleLine1}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-500 font-[800]">
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Subtag Paragraph under Main Heading */}
                {slide.subTag && (
                  <p className="text-[18px] font-[400] text-slate-300 tracking-wide">
                    {slide.subTag}
                  </p>
                )}

                {/* Bullet Points List matching reference screenshot */}
                {slide.bullets && slide.bullets.length > 0 && (
                  <ul className="space-y-3 pt-2 max-w-2xl text-slate-200 text-sm sm:text-base font-medium">
                    {slide.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-cyan-400 font-bold text-lg leading-none mt-0.5">•</span>
                        <span className="leading-snug">
                          {typeof bullet === 'string' && bullet.includes('Recognized') ? (
                            <>Recognized as <strong className="text-white font-extrabold">#1 Web Development</strong> Company in India and USA.</>
                          ) : typeof bullet === 'string' && bullet.includes('Trusted') ? (
                            <>Trusted by <strong className="text-white font-extrabold">20+ Fortune 500 Companies</strong> and a Clutch Leader.</>
                          ) : typeof bullet === 'string' && bullet.includes('Redefining') ? (
                            <>We've been Redefining Excellence for over <strong className="text-white font-extrabold">Two Decades.</strong></>
                          ) : (
                            bullet
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Primary CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={slide.primaryCtaLink || "/contact"}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-extrabold text-base hover:opacity-95 transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 group"
                  >
                    <span>{slide.primaryCtaText || "Let's Talk"}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to={slide.secondaryCtaLink || "/contact"}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-900/80 border-2 border-cyan-500/50 text-white font-extrabold text-base hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    <span>{slide.secondaryCtaText || "Get in Touch"}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Bottom Highlight Box */}
          <div className="lg:col-span-4 flex flex-col justify-end items-end relative">
            {/* Slide Navigation Dots */}
            {activeSlides.length > 1 && (
              <div className="flex items-center space-x-2 mb-8">
                {activeSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-8 bg-[#005F96]' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Floating Highlight Banner */}
            {(slide.rightBoxTitle || slide.rightBoxSub) && (
              <motion.div
                key={`right-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-right max-w-sm space-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
                {slide.rightBoxTitle && (
                  <h4 className="text-base font-extrabold text-white">
                    {slide.rightBoxTitle}
                  </h4>
                )}
                {slide.rightBoxSub && (
                  <p className="text-base font-black text-pink-400">
                    {slide.rightBoxSub}
                  </p>
                )}
              </motion.div>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
