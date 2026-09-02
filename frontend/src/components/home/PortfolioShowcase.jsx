import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

export const PortfolioShowcase = () => {
  const projects = [
    {
      id: 1,
      titleLine1: 'AI Chatbot App',
      titleLine2: 'Development',
      slug: 'ai-chatbot-app-development',
      cardBg: 'bg-[#351475]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
          {/* Left Text Emblem */}
          <div className="text-left z-10 space-y-1">
            <div className="text-xs font-black tracking-wider text-purple-200 uppercase">AI</div>
            <div className="text-xl font-black text-white leading-none">ChatBot</div>
            <div className="text-sm font-extrabold text-purple-300">Application</div>
            <div className="pt-2">
              <div className="w-8 h-8 rounded-full bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-white text-xs">
                🤖
              </div>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="relative z-10 w-36 h-48 bg-slate-900 rounded-[20px] border-4 border-slate-800 shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
            <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
            <div className="bg-purple-900/60 rounded-xl p-2 text-left space-y-1.5 border border-purple-500/30">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-bold">🤖</div>
                <span className="text-[9px] font-bold text-purple-200">TalkBot</span>
              </div>
              <div className="bg-purple-800/80 text-[8px] text-purple-100 p-1.5 rounded-lg leading-tight">
                Hello! How can I assist your enterprise workflow today?
              </div>
            </div>
            <div className="bg-slate-800 rounded-full px-2 py-1 flex items-center justify-between text-[8px] text-slate-400">
              <span>Ask AI...</span>
              <span className="text-purple-400 font-bold">➔</span>
            </div>
          </div>

          {/* Right Bot Mascot */}
          <div className="absolute right-2 bottom-2 w-12 h-12 opacity-80 pointer-events-none">
            <div className="w-full h-full rounded-full bg-purple-400/20 blur-sm animate-pulse" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      titleLine1: 'AI Traffic Management',
      titleLine2: 'System',
      slug: 'ai-traffic-management-system',
      cardBg: 'bg-[#EBF3FB]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
          {/* Left Traffic Index Header */}
          <div className="text-left z-10 space-y-1">
            <div className="flex items-center space-x-1 text-xs font-black text-blue-600">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
              <span>Traffic Index</span>
            </div>
            <div className="text-lg font-black text-slate-800 leading-tight max-w-[120px]">
              Traffic Management System Using AI
            </div>
          </div>

          {/* Right Dashboard & Camera Mockup */}
          <div className="relative z-10 space-y-2">
            {/* Dashboard window */}
            <div className="w-40 h-28 bg-white rounded-xl shadow-lg border border-slate-200 p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                <span className="text-[9px] font-bold text-slate-700">Realtime Camera Telemetry</span>
                <span className="text-[8px] font-bold text-emerald-600">LIVE</span>
              </div>
              <div className="grid grid-cols-2 gap-1 my-1">
                <div className="bg-blue-50 p-1 rounded text-[8px] text-blue-700 font-bold">Signal A: 45s</div>
                <div className="bg-emerald-50 p-1 rounded text-[8px] text-emerald-700 font-bold">Signal B: 20s</div>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-3/4" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      titleLine1: 'Real Estate App',
      titleLine2: 'Development',
      slug: 'real-estate-app-development',
      cardBg: 'bg-[#E5E9FC]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-center px-6 overflow-hidden">
          {/* Center Mobile Screen showing Property search */}
          <div className="w-40 h-48 bg-white rounded-[20px] border-4 border-slate-200 shadow-xl overflow-hidden p-2 flex flex-col justify-between text-left">
            <div className="text-[9px] font-bold text-slate-800 flex items-center justify-between border-b pb-1">
              <span>Welcome to eDiyar</span>
              <span className="text-[8px] text-blue-600 font-bold">Search</span>
            </div>
            <div className="bg-blue-50 rounded-xl p-2 border border-blue-100">
              <div className="w-full h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg mb-1" />
              <div className="text-[9px] font-black text-slate-800">Downtown Dubai City</div>
              <div className="text-[7px] text-slate-500 font-bold">Property Type: Villa • Dubai</div>
            </div>
            <div className="bg-slate-50 p-1 rounded-lg text-[7px] text-slate-600 flex justify-between font-bold">
              <span>Service: 3D Virtual Tour</span>
              <span className="text-emerald-600">Available</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      titleLine1: 'AI Travel App',
      titleLine2: 'Development',
      slug: 'ai-travel-app-development',
      cardBg: 'bg-[#1C3A39]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
          {/* Left Badge */}
          <div className="text-left z-10 space-y-1">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs">
              ✈️
            </div>
            <div className="text-lg font-black text-white leading-tight">
              AI Travel App<br />Development
            </div>
          </div>

          {/* Right Mobile UI */}
          <div className="w-36 h-48 bg-slate-900 rounded-[20px] border-4 border-slate-800 shadow-2xl p-2 flex flex-col justify-between text-left">
            <div className="w-full h-20 bg-gradient-to-br from-amber-600 to-teal-700 rounded-xl p-1.5 flex flex-col justify-end text-white">
              <span className="text-[8px] font-bold">Brooklyn Bridge</span>
              <span className="text-[7px] opacity-80">New York, USA</span>
            </div>
            <div className="bg-slate-800 p-1.5 rounded-lg text-[8px] text-slate-300 space-y-1">
              <div className="font-bold text-amber-400">Smart Trip Itinerary</div>
              <div className="text-[7px] text-slate-400">Flight + Hotel Bundle</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      titleLine1: 'On Demand AI',
      titleLine2: 'Recruitment',
      slug: 'on-demand-ai-recruitment',
      cardBg: 'bg-[#EEF1FE]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
          {/* Left Talenti Logo */}
          <div className="text-left z-10 space-y-1">
            <div className="flex items-center space-x-1 text-xs font-black text-indigo-700">
              <span>👔 Talenti Qube</span>
            </div>
            <div className="text-lg font-black text-indigo-950 leading-tight max-w-[110px]">
              On Demand AI Recruitment
            </div>
          </div>

          {/* Right Recruiter Illustration Box */}
          <div className="w-40 h-32 bg-white rounded-xl border border-indigo-100 shadow-md p-2 flex flex-col justify-between text-left">
            <div className="flex items-center space-x-2 border-b border-indigo-50 pb-1">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px]">👤</div>
              <div>
                <div className="text-[9px] font-bold text-slate-800">Senior AI Recruiter</div>
                <div className="text-[7px] text-indigo-600 font-bold">100k+ Applicants</div>
              </div>
            </div>
            <div className="bg-indigo-50/70 p-1.5 rounded-lg text-[8px] text-indigo-900 space-y-0.5">
              <div className="font-bold">Automated Video Screen</div>
              <div className="text-[7px] text-emerald-600 font-bold">Match Score: 98%</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      titleLine1: 'Car Rental App',
      titleLine2: 'Development',
      slug: 'car-rental-app-development',
      cardBg: 'bg-[#E3F7F6]',
      graphic: (
        <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
          {/* Left Header */}
          <div className="text-left z-10 space-y-1">
            <div className="text-[9px] font-black text-teal-700 uppercase tracking-wider">Select Vehicle</div>
            <div className="text-lg font-black text-slate-800 leading-tight">
              TRANSPO<br />Car Rental
            </div>
          </div>

          {/* Right Mobile UI displaying cars */}
          <div className="w-36 h-48 bg-white rounded-[20px] border-4 border-slate-200 shadow-xl p-2 flex flex-col justify-between text-left">
            <div className="text-[8px] font-bold text-slate-800 border-b pb-1">Chevrolet Spark</div>
            <div className="w-full h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl flex items-center justify-center text-white text-lg">
              🚗
            </div>
            <div className="bg-teal-50 p-1 rounded-lg text-[7px] text-teal-800 flex justify-between font-bold">
              <span>Rate: $45/Day</span>
              <span className="text-cyan-700">Book Now</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header - Exactly Copy-to-Copy with Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            Our Recent Projects
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto font-sans">
            Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
          </p>
        </div>

        {/* 3x2 Grid of 6 Cards with Straddling Overlapping White Bottom Pills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-stretch mb-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative"
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className={`group relative block rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 h-64 sm:h-72 w-full ${project.cardBg}`}
              >
                {/* SVG Graphic Mockup */}
                <div className="w-full h-full">
                  {project.graphic}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none" />
              </Link>

              {/* Overlapping White Pill Label Card - Straddling the bottom border exactly like Image 1 */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 font-[800] text-sm sm:text-base py-3.5 px-6 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.10)] border border-slate-100 text-center w-[85%] sm:w-[82%] max-w-[270px] z-20 font-sans group-hover:text-[#006B8F] transition-colors leading-snug cursor-pointer">
                {project.titleLine1}<br />{project.titleLine2}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Solid Ocean Teal View All Button - Exactly Copy-to-Copy with Image 1 */}
        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-block px-10 py-3 rounded-lg bg-[#006B8F] text-white font-[800] text-sm hover:bg-[#004A75] transition-all shadow-md font-sans hover:scale-105 active:scale-95"
          >
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;
