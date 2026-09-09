import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import BRAND from '../constants/brand';
import { ArrowRight, Target, Linkedin, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const About = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const coreValues = [
    {
      id: 1,
      title: 'Transparency & Integrity',
      desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-600 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 15c6.667-6 13.333 0 20-6" />
            <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
            <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
            <path d="M17 6l-2.5-2.5" />
            <path d="M14 8l-1-1" />
            <path d="M7 18l2.5 2.5" />
            <path d="M10 16l1 1" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: 'Passion For Excellence',
      desc: 'We strive to contribute our best to our customers while evoking others to do the same.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <circle cx="12" cy="14" r="3" />
            <path d="M10.5 16.5L9 21l3-1.5 3 1.5-1.5-4.5" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: 'Customer Sovereignty',
      desc: 'We closely work with our customer to deliver better solutions with added values.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
          </svg>
        </div>
      )
    },
    {
      id: 4,
      title: 'Leadership By Examples',
      desc: 'We set standards in our business and transactions, and be a model for the industry.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-cyan-500 flex items-center justify-center text-cyan-600 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <polygon points="12 2 13 4 15 4 13.5 5.5 14 7.5 12 6 10 7.5 10.5 5.5 9 4 11 4" fill="currentColor" />
          </svg>
        </div>
      )
    },
    {
      id: 5,
      title: 'Responsibility',
      desc: 'We take personal responsibility for our actions and we strive to exceed your expectations.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center text-pink-600 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            <circle cx="18" cy="4" r="2" />
          </svg>
        </div>
      )
    },
    {
      id: 6,
      title: 'Continuous Learning',
      desc: 'We always upgrade our skills to successfully adapt to the changing technologies.',
      icon: (
        <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-600 mb-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <circle cx="12" cy="7" r="2" />
          </svg>
        </div>
      )
    }
  ];

  // Exact Clutch Client Reviews from Reference Image 1
  const clientReviews = [
    {
      id: 1,
      name: 'AMR ELATTAR',
      location: 'Saudi Arabia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      headline: '...technical support was very responsive.',
      text: 'firevy.co delivered the software in a timely manner. The team was responsive to requests and feedback and...',
      rating: '4.5',
      stars: 4.5,
      scores: { quality: '4.5', schedule: '4.5', cost: '4.5', refer: '5.0' }
    },
    {
      id: 2,
      name: 'Nick',
      location: 'Australia',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      headline: 'I was impressed by their ability to communicate effectively.',
      text: 'firevy.co delivered a user-friendly application that looked great. The client received positive feedback from...',
      rating: '5.0',
      stars: 5,
      scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
    },
    {
      id: 3,
      name: 'Vid Randjelovic',
      location: 'Phuket, Thailand',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      headline: 'Their mobile app skills, helpfulness, and overall problem-solving blew me...',
      text: 'firevy.co created a platform that the client was happy with. They were easy to talk to, responsive, and attentive to the...',
      rating: '5.0',
      stars: 5,
      scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
    },
    {
      id: 4,
      name: 'Christine Ine',
      location: 'Rockville, Maryland',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      headline: 'They were excellent at providing the right level of detail in implementation...',
      text: 'firevy.co impressed the client with the quality of their deliverables. They provided consistent designs, achieved the...',
      rating: '5.0',
      stars: 5,
      scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
    }
  ];

  // 24 Brand Logos
  const brandLogos = [
    { id: 1, content: <div className="flex flex-col items-center"><span className="text-[#002663] font-[900] text-[15px] tracking-wider leading-none">AMERICAN</span><span className="text-[#002663] font-[900] text-[15px] tracking-wider leading-none">EXPRESS</span></div> },
    { id: 2, content: <div className="flex flex-col items-center"><div className="w-7 h-7 rounded-full border-2 border-[#004B87] flex items-center justify-center mb-0.5"><span className="text-[#004B87] font-[900] text-xs">L&T</span></div><span className="text-[#004B87] font-[900] text-[11px] italic tracking-tight">LARSEN & TOUBRO</span></div> },
    { id: 3, content: <div className="flex flex-col items-center"><span className="text-[#5B6770] font-[900] text-2xl leading-none">LH</span><span className="text-[#2B2B2B] font-[800] text-[12px] tracking-tight">LafargeHolcim</span></div> },
    { id: 4, content: <div className="flex flex-col items-center"><div className="flex items-center space-x-1"><span className="text-[#7A868C] font-[900] text-lg">CLP</span><div className="w-2.5 h-2.5 rounded-full bg-[#E65100]" /><span className="text-[#E65100] font-[900] text-sm">INDIA</span></div><span className="text-[9px] text-slate-500 font-semibold">The power of new standards</span></div> },
    { id: 5, content: <div className="flex items-center"><span className="text-[#0070BA] font-[900] text-3xl font-sans tracking-tight">adani</span></div> },
    { id: 6, content: <div className="flex flex-col items-center"><span className="text-[#0288D1] font-[900] text-3xl italic tracking-tighter leading-none">GFL<sup className="text-[10px]">™</sup></span><span className="text-[7.5px] font-[800] text-emerald-600 uppercase tracking-widest mt-0.5">Gujarat Fluorochemicals</span></div> },
    { id: 7, content: <div className="flex flex-col items-center"><svg viewBox="0 0 60 36" className="w-12 h-7 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5"><ellipse cx="30" cy="18" rx="27" ry="15" /><ellipse cx="30" cy="15" rx="14" ry="11" /><ellipse cx="30" cy="18" rx="7" ry="14" /></svg><span className="text-[#EB0A1E] font-[900] text-[13px] tracking-widest mt-0.5">TOYOTA</span></div> },
    { id: 8, content: <div className="flex flex-col items-center"><span className="text-[#D32F2F] font-[900] text-3xl italic tracking-tighter leading-none">ACC</span><span className="text-[9px] font-[700] text-slate-700 uppercase tracking-wider">ACC LIMITED</span></div> },
    { id: 9, content: <div className="flex flex-col items-center"><span className="text-[#003B70] font-[900] text-[18px] leading-tight">Ambuja</span><span className="text-[#003B70] font-[900] text-[18px] leading-tight">Cement</span></div> },
    { id: 10, content: <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full border-2 border-[#D32F2F] flex items-center justify-center mb-0.5"><span className="text-[#D32F2F] font-[900] text-xs">MG</span></div><span className="text-[#D32F2F] font-[900] text-[10px] tracking-tight">MORRIS GARAGES</span><span className="text-[8px] text-slate-500 font-semibold">Since 1924</span></div> },
    { id: 11, content: <div className="flex items-center space-x-1"><span className="text-[#004C97] font-[900] text-2xl italic tracking-tight">JSW</span><span className="text-[#004C97] font-[700] text-sm">Energy</span></div> },
    { id: 12, content: <div className="flex flex-col items-center"><div className="flex items-center space-x-1"><div className="w-3.5 h-3.5 rounded-full bg-emerald-500" /><span className="text-[#006A4E] font-[900] text-base">vedanta</span></div><span className="text-[8px] text-slate-500 font-bold">sterlite copper</span></div> },
    { id: 13, content: <div className="flex items-center"><span className="text-[#CC0000] font-[900] text-2xl font-serif tracking-widest">HONDA</span></div> },
    { id: 14, content: <div className="flex items-center space-x-1.5"><div className="w-6 h-6 rounded-full bg-[#6A1B9A] flex items-center justify-center text-white text-xs font-bold">♥</div><span className="text-[#6A1B9A] font-[900] text-lg font-sans">Dr.Reddy's</span></div> },
    { id: 15, content: <div className="flex flex-col items-center"><div className="w-7 h-5 flex flex-col items-center justify-center"><div className="w-6 h-2 bg-[#0054A6] rounded-xs" /><div className="w-6 h-2 bg-[#D32F2F] rounded-xs mt-0.5" /></div><span className="text-[#0054A6] font-[900] text-xs">Chevron</span><span className="text-[9px] text-slate-600 font-bold">Oronite</span></div> },
    { id: 16, content: <div className="flex flex-col items-center"><span className="text-slate-900 font-[900] text-base tracking-wider leading-none">ORIENT</span><span className="text-slate-700 font-[700] text-[10px] tracking-widest">CEMENT</span><span className="text-[8px] text-slate-500 font-bold mt-0.5">CK BIRLA GROUP</span></div> },
    { id: 17, content: <div className="flex flex-col items-center"><span className="text-[#004A99] font-[900] text-xl font-serif italic leading-tight">المراعي</span><span className="text-[#004A99] font-[900] text-base font-sans leading-none">Almarai</span></div> },
    { id: 18, content: <div className="flex items-center space-x-1.5"><div className="w-7 h-7 rounded-full bg-[#D32F2F] flex items-center justify-center text-white font-[900] text-sm">C</div><span className="text-slate-900 font-[900] text-lg">Cummins</span></div> },
    { id: 19, content: <div className="border-2 border-[#C62828] px-3 py-1 rounded-[4px] flex items-center"><span className="text-[#C62828] font-[900] text-base tracking-widest">+TDSG+</span></div> },
    { id: 20, content: <div className="flex items-center"><span className="text-slate-900 font-[900] text-lg tracking-[0.2em] font-sans">L'ORÉAL</span></div> },
    { id: 21, content: <div className="flex items-center space-x-1"><div className="text-[#0060AA] font-[900] text-xl">▲</div><div className="flex flex-col text-left leading-tight"><span className="text-[#0060AA] font-[900] text-xs">ASTRAL</span><span className="text-[#0060AA] font-[700] text-[9px] tracking-widest">PIPES</span></div></div> },
    { id: 22, content: <div className="flex flex-col items-center"><div className="text-[#007079] font-[900] text-base">✦</div><span className="text-[#007079] font-[900] text-xs tracking-widest">TITAN</span><span className="text-[7.5px] text-slate-500 font-bold uppercase">Company</span></div> },
    { id: 23, content: <div className="flex flex-col items-center"><div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xs font-bold mb-0.5">♣</div><span className="text-[8px] font-[900] text-slate-800 text-center leading-tight">BANK NOTE PAPER MILL</span><span className="text-[7px] text-slate-500 font-bold">INDIA PRIVATE LIMITED</span></div> },
    { id: 24, content: <div className="flex flex-col items-center"><span className="text-[#00838F] font-[900] text-xl italic tracking-tight">Alembic</span><span className="text-[8px] text-slate-500 font-bold">Touching Lives over 100 years</span></div> }
  ];

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`About Us | We Shape Digital Solutions | ${BRAND.name}`}
        description="firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions."
        canonical="/about"
      />

      {/* 1. HERO SECTION: "We Shape Digital Solutions" */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[44px] sm:text-[52px] lg:text-[56px] font-[900] text-slate-900 tracking-tight leading-[1.12] font-sans">
                We Shape Digital Solutions
              </h1>
              <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl">
                firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                <div className="absolute top-4 left-10 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-blue-600 animate-bounce">
                  JAVA
                </div>
                <div className="absolute top-2 left-36 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-indigo-600">
                  PHP
                </div>
                <div className="absolute top-8 left-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-[6px] shadow-md border border-slate-200 text-[11px] font-[800] text-slate-700">
                  C++
                </div>
                <div className="absolute top-20 left-0 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-[6px] shadow-md border border-slate-200 text-[10.5px] font-[800] text-amber-600">
                  JAVASCRIPT
                </div>
                <div className="absolute top-6 right-28 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-slate-800">
                  iOS
                </div>
                <div className="absolute top-14 right-12 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-emerald-600">
                  Android
                </div>
                <div className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-purple-600">
                  C#
                </div>
                <div className="absolute bottom-6 right-24 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-[#006B8F]">
                  .NET
                </div>

                <svg viewBox="0 0 500 360" className="w-full h-full drop-shadow-xl" fill="none">
                  <path d="M250 20 L450 140 L250 260 L50 140 Z" fill="#E0F2FE" opacity="0.6" />
                  <path d="M250 260 L450 140 L450 160 L250 280 L50 160 L50 140 Z" fill="#BAE6FD" opacity="0.7" />
                  <polygon points="180,80 380,80 340,220 140,220" fill="#0284C7" />
                  <polygon points="190,90 370,90 335,210 155,210" fill="#FFFFFF" />
                  <rect x="180" y="105" width="130" height="12" rx="2" fill="#E2E8F0" />
                  <rect x="180" y="125" width="80" height="8" rx="2" fill="#38BDF8" />
                  <polygon points="140,220 340,220 400,280 200,280" fill="#0369A1" />
                  <polygon points="150,225 330,225 385,275 205,275" fill="#0C4A6E" />
                  <circle cx="160" cy="180" r="10" fill="#FED7AA" />
                  <circle cx="340" cy="155" r="10" fill="#FED7AA" />
                  <circle cx="250" cy="270" r="10" fill="#FED7AA" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "About firevy.co" */}
      <section className="py-16 bg-white border-t border-slate-100 text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-[14px] overflow-hidden border border-slate-200/90 shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="firevy.co Corporate Building"
                  className="w-full h-[330px] sm:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                About firevy.co
              </h2>
              <div className="space-y-3.5 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                <p>
                  firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "We Create, We Enhance, We Deliver More Than Expected" */}
      <section className="py-20 bg-white border-t border-slate-100 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.2] font-sans">
              We Create, We Enhance, We Deliver<br />
              More Than Expected – That's firevy.co
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3.5">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#006B8F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 22H5V20H19V22Z" />
                  <path d="M16.5 20C16.5 17 17.5 15.5 18 14C18.5 12.5 18 11 17 9.5C16 8 14.5 7.5 14.5 6C14.5 4.5 15.5 3 15.5 3C15.5 3 13.5 3 11 5C8.5 7 7.5 9.5 7.5 12C7.5 13 8 14 8.5 15C9 16 9.5 17.5 9.5 20" />
                </svg>
                <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">Our Vision</h3>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.
              </p>
            </div>
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3.5">
                <Target className="w-10 h-10 text-[#006B8F] shrink-0" strokeWidth={2.2} />
                <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">Our Mission</h3>
              </div>
              <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                To provide our customers with the precise services and solutions the lowest possible cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Glance through our creations and presence" */}
      <AboutKeyMetrics />

      {/* 5. "Our Core Values" */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              Our Core Values
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
              Our values are the guiding ethics upon which we have founded and how we strive to conduct our business on a day-to-day basis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div key={val.id} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 text-left space-y-2.5 hover:shadow-lg transition-all group">
                {val.icon}
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans tracking-tight group-hover:text-[#006B8F] transition-colors">{val.title}</h3>
                <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Our Culture" */}
      <section className="py-20 bg-white border-b border-slate-100 text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                Our Culture
              </h2>
              <div className="space-y-4 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                <p>
                  At firevy.co, we have nurtured a culture that inspires innovation and creativity. We believe that success of our company is directly relational to the success of each and every employee. We strive to create a young, fun-loving, open yet professional and hardworking environment.
                </p>
                <p>
                  We empower our team members to move forward professionally by taking ownership and learning from every project they work on. Coming to work and building amazing digital solutions should be fun.
                </p>
              </div>
              <div className="pt-2">
                <Link to="/careers" className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans">
                  Explore Careers (Jobs)
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "Our Leadership" */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Our Leadership
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
              The outlook, passion and experience of our leaders guides firevy.co.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-[160px] h-[180px] rounded-[12px] overflow-hidden shrink-0 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Leader 1" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2 text-left pt-2">
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans">Mr. Kumaril Patel</h3>
                <p className="text-[14px] font-[600] text-slate-500 font-sans">CEO & Co-Founder</p>
                <div className="pt-2"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center shadow-sm"><Linkedin className="w-4 h-4 fill-current" /></a></div>
              </div>
            </div>
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-[160px] h-[180px] rounded-[12px] overflow-hidden shrink-0 bg-slate-200">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Leader 2" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2 text-left pt-2">
                <h3 className="text-[20px] font-[800] text-slate-900 font-sans">Mr. Rajendra Patel</h3>
                <p className="text-[14px] font-[600] text-slate-500 font-sans">CTO & Co-Founder</p>
                <div className="pt-2"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center shadow-sm"><Linkedin className="w-4 h-4 fill-current" /></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Our World Class Products" */}
      <section className="py-20 bg-[#F0F7FA] border-b border-slate-200 text-slate-900 font-sans relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-2 font-sans">
              Our World Class Products
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-500 font-[400] font-sans">
              Our proven excellence for product development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[#FF6600] font-[900] text-3xl font-serif tracking-tight">VV</span>
                  <div>
                    <span className="text-[#FF6600] font-[900] text-2xl tracking-tight">Vidyalaya</span>
                    <span className="text-[10px] text-slate-500 align-top">®</span>
                    <div className="text-[11px] font-[700] text-amber-600 uppercase tracking-wider">Digitizing Schools</div>
                  </div>
                </div>
                <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  Efficient & Innovative School ERP known for its unmatched service since 22+ years. We digitalized 1600+ Schools globally.
                </p>
              </div>
              <div className="pt-2">
                <Link to="/products" className="inline-flex items-center text-[14.5px] font-[700] text-[#006B8F] hover:text-[#004A75] space-x-1.5 font-sans">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[#008080] font-[900] text-3xl font-sans tracking-tight">Occu</span>
                  <span className="text-[#006699] font-[900] text-3xl font-sans tracking-tight">Care</span>
                  <span className="text-[10px] text-slate-500 align-top">™</span>
                </div>
                <div className="text-[11px] font-[600] text-slate-500">a healthier, more productive workforce</div>
                <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  OccuCare empower organizations to protect, maintain and promote the well-being of workers.
                </p>
              </div>
              <div className="pt-2">
                <Link to="/products" className="inline-flex items-center text-[14.5px] font-[700] text-[#006B8F] hover:text-[#004A75] space-x-1.5 font-sans">
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. "Trusted By The World’s Leading Brands" */}
      <section className="py-20 bg-white border-b border-slate-200 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Trusted By The World’s Leading Brands
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
              We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {brandLogos.map((brand) => (
              <div key={brand.id} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] h-[115px] sm:h-[125px] flex items-center justify-center p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="w-full flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300">
                  {brand.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. "What Our Clients Say" (Exact Slider Carousel Matching Image 1) */}
      <ClientReviewsDarkSection />

      {/* 11. "Insights" */}
      <section className="py-20 bg-white border-b border-slate-100 text-slate-900 font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Insights
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
              Based on boundless enthusiasm and challenging spirit, firevy.co is committed to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Headquarters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                alt="Occucon Event"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                Occucon Event
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Exhibition Booth"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-2 rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Our Team Banquet"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                Our Team
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Tech Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12. "Corporate Social Responsibility" */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200 text-left font-sans">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight mb-2 font-sans">
                  Corporate Social<br />Responsibility
                </h2>
                <p className="text-[16px] text-slate-500 font-semibold font-sans">
                  Business is an opportunity to help humanity
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-[#006B8F] text-5xl font-serif leading-none">“</div>
                <p className="text-[20px] sm:text-[23px] font-[800] text-[#006B8F] leading-snug font-sans max-w-xl">
                  Our CSR Programs Accelerate Human Empowerment Among Underserved People And Their Communities Via Three Pillars: Education, Society And Conservation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[18px] overflow-hidden border border-slate-200 shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate Social Responsibility"
                  className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Full Panoramic Team Photo Banner with clean top & bottom spacing */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="w-full h-[360px] sm:h-[450px] rounded-[20px] overflow-hidden shadow-lg border border-slate-200 bg-slate-900 relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="firevy.co Whole Team"
              className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* 14. LET'S WORK TOGETHER & NEWSLETTER SUBSCRIPTION BANNER */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default About;
