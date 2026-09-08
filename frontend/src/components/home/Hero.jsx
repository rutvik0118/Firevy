import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const Hero = ({ data }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-slate-950 font-sans text-left">
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/images/home-banner/opt_3.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Subtle Dark Blue Gradient Overlay for High Contrast Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031120]/85 via-[#071D35]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Floating Quick Contact Side Bar (Phone & WhatsApp on Right Edge) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-2 pr-2 sm:pr-4 pointer-events-auto">
        <a
          href="tel:+18005927410"
          className="w-10 h-10 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="Call Us"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.69 3.48.69a1 1 0 011 1v3.5a1 1 0 01-1 1A17.93 17.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.15.24 2.36.69 3.48a1 1 0 01-.21 1.11l-2.36 2.2z"/>
          </svg>
        </a>
        <a
          href="https://wa.me/18005927410"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.17-.47-.29z"/>
          </svg>
        </a>
      </div>

      {/* 3. Hero Main Content Container */}
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column (Exact match with Image 1) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Tag */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-white tracking-wide font-sans">
              AI Innovation
            </h2>

            {/* Main Title: "Your Vision, Our Technology" */}
            <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-[900] tracking-tight leading-[1.15] font-sans">
              <span className="text-[#0088CC]">Your Vision, </span>
              <span className="text-[#FF2A8D]">Our Technology</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[19px] font-[500] text-slate-200 tracking-wide font-sans mb-3">
              (Limitless Possibilities)
            </p>

            {/* Bullet Points List (Exact matching text & formatting) */}
            <ul className="space-y-3 pt-1 max-w-2xl text-slate-200 text-[14.5px] sm:text-[15.5px] font-[500] font-sans leading-relaxed">
              <li className="flex items-start space-x-2.5">
                <span className="text-white text-lg font-bold leading-none mt-0.5">•</span>
                <span>
                  Named by <strong className="text-white font-[800]">Clutch</strong> as the <strong className="text-white font-[800]">Top AI (Artificial Intelligence)</strong> Company in India and USA.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="text-white text-lg font-bold leading-none mt-0.5">•</span>
                <span>
                  Trusted by <strong className="text-white font-[800]">20+ Fortune 500 Companies and a Clutch Leader.</strong>
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="text-white text-lg font-bold leading-none mt-0.5">•</span>
                <span>
                  We’ve been Redefining Excellence for over <strong className="text-white font-[800]">Two Decades.</strong>
                </span>
              </li>
            </ul>

            {/* Primary CTA Button: "Let's Talk" */}
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[5px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
              >
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* 4. Bottom Right Floating Text & Logo Badge (Exact match with Image 1) */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 flex items-center space-x-4 pointer-events-none">
        <div className="text-right font-sans">
          <p className="text-[17px] sm:text-[21px] font-[800] text-white leading-tight">
            Streamlining Success With
          </p>
          <p className="text-[18px] sm:text-[22px] font-[900] text-[#FF2A8D] leading-tight mt-0.5">
            Intelligent AI Solutions
          </p>
        </div>

        {/* Sapphire Brand Icon Badge */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[6px] bg-white flex items-center justify-center shadow-2xl p-1.5 shrink-0">
          <img
            src="/images/sapphire_logo_dark.svg"
            alt="Sapphire Software Solutions"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
