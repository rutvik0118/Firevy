import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const defaultProjects = [
  {
    id: 1,
    titleLine1: 'AI Chatbot App',
    titleLine2: 'Development',
    slug: 'ai-chatbot-app-development',
    cardBg: 'bg-[#351475]',
    graphic: (
      <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
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
        <div className="text-left z-10 space-y-1">
          <div className="text-xs font-black tracking-wider text-blue-600 uppercase">SMART CITY</div>
          <div className="text-xl font-black text-slate-900 leading-none">Traffic AI</div>
          <div className="text-sm font-extrabold text-blue-500">Analytics</div>
          <div className="pt-2 flex items-center space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-bold text-slate-600">LIVE FEED</span>
          </div>
        </div>

        <div className="relative z-10 w-44 h-44 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-1">
            <span className="text-[9px] font-extrabold text-slate-800">CCTV #402 INTERSECTION</span>
            <span className="text-[8px] bg-red-100 text-red-700 px-1 rounded font-bold">CONGESTION 12%</span>
          </div>
          <div className="relative w-full h-24 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent" />
            <div className="w-12 h-8 border-2 border-emerald-500 rounded bg-emerald-500/20 flex items-center justify-center text-[7px] font-black text-emerald-800">
              CAR 98%
            </div>
            <div className="ml-2 w-10 h-8 border-2 border-cyan-500 rounded bg-cyan-500/20 flex items-center justify-center text-[7px] font-black text-cyan-800">
              BUS 95%
            </div>
          </div>
          <div className="flex justify-between text-[8px] text-slate-500 font-bold pt-1">
            <span>Throughput: 1,420 v/hr</span>
            <span className="text-emerald-600">Optimal</span>
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
    cardBg: 'bg-[#0D2B45]',
    graphic: (
      <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
        <div className="text-left z-10 space-y-1">
          <div className="text-xs font-black tracking-wider text-cyan-300 uppercase">PROPTECH</div>
          <div className="text-xl font-black text-white leading-none">EstateFlow</div>
          <div className="text-sm font-extrabold text-cyan-200">Mobile Portal</div>
          <div className="pt-2 text-xs font-bold text-slate-300">
            ★ 4.9 Rating
          </div>
        </div>

        <div className="relative z-10 w-36 h-48 bg-slate-900 rounded-[20px] border-4 border-slate-800 shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
          <div className="h-20 bg-cyan-900/40 rounded-xl p-1.5 text-left border border-cyan-500/30 flex flex-col justify-between">
            <span className="text-[8px] font-black text-cyan-300">MODERN VILLA</span>
            <span className="text-[10px] font-extrabold text-white">$1,250,000</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-slate-800 p-1 rounded text-[7px] text-center text-slate-300">3 Beds</div>
            <div className="bg-slate-800 p-1 rounded text-[7px] text-center text-slate-300">2 Baths</div>
          </div>
          <div className="bg-[#006B8F] text-white rounded-lg py-1 text-[8px] font-bold text-center">
            Virtual Tour 3D
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    titleLine1: 'Bee Car Care -',
    titleLine2: 'Car Services App',
    slug: 'bee-car-care-app',
    cardBg: 'bg-[#FFF9E6]',
    graphic: (
      <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
        <div className="text-left z-10 space-y-1">
          <div className="text-xs font-black tracking-wider text-amber-700 uppercase">AUTOMOTIVE</div>
          <div className="text-xl font-black text-slate-900 leading-none">Bee Car Care</div>
          <div className="text-sm font-extrabold text-amber-600">On-Demand App</div>
          <div className="pt-2 text-xs font-bold text-slate-700">
            🚗 Doorstep Service
          </div>
        </div>

        <div className="relative z-10 w-36 h-48 bg-slate-900 rounded-[20px] border-4 border-slate-800 shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
          <div className="bg-amber-400 rounded-xl p-2 text-left">
            <div className="text-[10px] font-black text-slate-900">Book A Wash</div>
            <div className="text-[8px] font-bold text-slate-800">Arriving in 15 mins</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-1.5 text-[8px] text-slate-300 flex items-center justify-between">
            <span>Mechanic: Alex</span>
            <span className="text-amber-400">★ 5.0</span>
          </div>
          <div className="bg-amber-500 text-slate-900 rounded-lg py-1 text-[8px] font-black text-center">
            Track Van
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    titleLine1: 'Doctor & Patient App',
    titleLine2: 'Development',
    slug: 'doctor-patient-app-development',
    cardBg: 'bg-[#E8F8F5]',
    graphic: (
      <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
        <div className="text-left z-10 space-y-1">
          <div className="text-xs font-black tracking-wider text-teal-700 uppercase">HEALTHCARE</div>
          <div className="text-xl font-black text-slate-900 leading-none">MedConnect</div>
          <div className="text-sm font-extrabold text-teal-600">Telemedicine</div>
          <div className="pt-2 text-xs font-bold text-teal-800">
            🩺 HIPAA Compliant
          </div>
        </div>

        <div className="relative z-10 w-36 h-48 bg-slate-900 rounded-[20px] border-4 border-slate-800 shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
          <div className="w-10 h-1 bg-slate-700 rounded-full mx-auto mb-1" />
          <div className="bg-teal-700 text-white rounded-xl p-2 text-left space-y-1">
            <div className="text-[9px] font-extrabold">Dr. Sarah Jenkins</div>
            <div className="text-[7px] text-teal-200">Cardiologist (Online)</div>
          </div>
          <div className="bg-slate-800 p-1.5 rounded text-[8px] text-slate-300 text-center">
            Next Slot: 02:30 PM
          </div>
          <div className="bg-teal-500 text-slate-950 rounded-lg py-1 text-[8px] font-black text-center">
            Start Video Call
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    titleLine1: 'Fintech & Investment',
    titleLine2: 'Banking Platform',
    slug: 'fintech-investment-banking-platform',
    cardBg: 'bg-[#181D27]',
    graphic: (
      <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
        <div className="text-left z-10 space-y-1">
          <div className="text-xs font-black tracking-wider text-emerald-400 uppercase">FINTECH</div>
          <div className="text-xl font-black text-white leading-none">Apex Capital</div>
          <div className="text-sm font-extrabold text-slate-400">Wealth Tech</div>
          <div className="pt-2 text-xs font-bold text-emerald-400">
            ▲ +24.8% YTD
          </div>
        </div>

        <div className="relative z-10 w-44 h-44 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden p-3 flex flex-col justify-between text-left">
          <div className="flex justify-between items-center text-[9px] text-slate-400">
            <span>PORTFOLIO VALUE</span>
            <span className="text-emerald-400 font-extrabold">+8.4%</span>
          </div>
          <div className="text-base font-black text-white">$482,910.00</div>
          <div className="h-10 w-full bg-slate-800/80 rounded flex items-end p-1 space-x-1">
            <div className="w-1/6 h-3 bg-emerald-500/40 rounded-t" />
            <div className="w-1/6 h-5 bg-emerald-500/60 rounded-t" />
            <div className="w-1/6 h-4 bg-emerald-500/50 rounded-t" />
            <div className="w-1/6 h-7 bg-emerald-500/80 rounded-t" />
            <div className="w-1/6 h-6 bg-emerald-500/70 rounded-t" />
            <div className="w-1/6 h-9 bg-emerald-400 rounded-t" />
          </div>
          <div className="text-[8px] text-slate-500 flex justify-between">
            <span>SECURE 256-BIT</span>
            <span className="text-emerald-400">VERIFIED</span>
          </div>
        </div>
      </div>
    )
  }
];

export const PortfolioShowcase = ({ data }) => {
  const title = data?.title || 'Our Recent Projects';
  const description = data?.description || 'Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard';
  const viewAllText = data?.viewAllText || 'View All';
  const viewAllLink = data?.viewAllLink || '/portfolio';

  const projects = (data?.projects && Array.isArray(data.projects) && data.projects.filter(p => p.isActive !== false).length > 0)
    ? data.projects.filter(p => p.isActive !== false)
    : defaultProjects;

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto font-sans">
            {description}
          </p>
        </div>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 items-stretch mb-8">
          {projects.map((project, idx) => {
            const title1 = project.titleLine1 || project.title?.split(' ')[0] || project.title || 'Project';
            const title2 = project.titleLine2 || (project.title?.split(' ').slice(1).join(' ')) || '';
            const slug = project.slug || `project-${idx + 1}`;
            const cardBg = project.cardBg || (idx % 2 === 0 ? 'bg-[#351475]' : 'bg-[#EBF3FB]');

            return (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative"
              >
                <Link
                  to={`/portfolio/${slug}`}
                  className={`group relative block rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 h-64 sm:h-72 w-full ${cardBg}`}
                >
                  {project.image ? (
                    <img src={project.image} alt={title1} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full">
                      {project.graphic || defaultProjects[idx % defaultProjects.length].graphic}
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                </Link>

                {/* Overlapping White Pill Label Card */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-slate-900 font-[800] text-sm sm:text-base py-3.5 px-6 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.10)] border border-slate-100 text-center w-[85%] sm:w-[82%] max-w-[270px] z-20 font-sans group-hover:text-[#006B8F] transition-colors leading-snug cursor-pointer">
                  {title1}{title2 ? <><br />{title2}</> : ''}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Solid Ocean Teal View All Button */}
        <div className="mt-16 text-center">
          <Link
            to={viewAllLink}
            className="inline-block px-10 py-3 rounded-lg bg-[#006B8F] text-white font-[800] text-sm hover:bg-[#004A75] transition-all shadow-md font-sans hover:scale-105 active:scale-95"
          >
            {viewAllText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;
