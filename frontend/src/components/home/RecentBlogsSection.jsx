import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export const RecentBlogsSection = () => {
  const blogs = [
    {
      id: 1,
      date: 'March 6, 2026',
      title: 'AI in Mobile App Development: Tools That Save Time and Money',
      desc: 'AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development,...',
      slug: 'ai-in-mobile-app-development',
      banner: (
        <div
          className="relative w-full h-[155px] p-4 text-white flex flex-col justify-between overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #311042 50%, #4C0519 100%)' }}
        >
          {/* Brand Logo on Top-Left */}
          <div className="flex items-center space-x-1.5 z-10">
            <span className="text-[12px] font-[900] tracking-wider font-sans text-white">firevy.co</span>
            <span className="text-[8px] font-[600] text-cyan-300 font-sans">Software Solutions</span>
          </div>

          {/* Banner Title & Graphic */}
          <div className="flex items-end justify-between relative z-10">
            <div className="max-w-[160px] space-y-1">
              <span className="text-[12px] font-[800] text-cyan-300 leading-tight block">
                AI in Mobile App Development:
              </span>
              <span className="text-[10px] font-[700] text-pink-300 leading-tight block">
                Tools That Save Time and Money
              </span>
            </div>

            {/* Mobile Device Mockup Graphic */}
            <div className="relative w-16 h-20 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 60 80" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="5" width="40" height="70" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                <rect x="14" y="12" width="32" height="52" rx="3" fill="#1E293B" />
                <rect x="18" y="18" width="24" height="6" rx="2" fill="#EC4899" />
                <rect x="18" y="28" width="24" height="4" rx="1" fill="#38BDF8" />
                <rect x="18" y="36" width="16" height="4" rx="1" fill="#38BDF8" />
                <circle cx="30" cy="52" r="6" fill="#38BDF8" opacity="0.8" />
                <circle cx="48" cy="22" r="5" fill="#EC4899" />
                <circle cx="6" cy="50" r="4" fill="#F59E0B" />
              </svg>
            </div>
          </div>

          {/* Decorative Dot Grid */}
          <div className="absolute bottom-2 left-2 flex space-x-1 opacity-40">
            <div className="w-1 h-1 rounded-full bg-cyan-400" />
            <div className="w-1 h-1 rounded-full bg-cyan-400" />
            <div className="w-1 h-1 rounded-full bg-cyan-400" />
            <div className="w-1 h-1 rounded-full bg-cyan-400" />
          </div>
        </div>
      )
    },
    {
      id: 2,
      date: 'March 25, 2026',
      title: 'AI in Software Development: Scale Operations Faster with...',
      desc: 'Software development has always been solving problems efficiently, but the expectations today are higher than ever...',
      slug: 'ai-in-software-development',
      banner: (
        <div
          className="relative w-full h-[155px] p-4 text-white flex flex-col justify-between overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #022C43 0%, #051923 60%, #001219 100%)' }}
        >
          {/* Brand Logo on Top-Left */}
          <div className="flex items-center space-x-1.5 z-10">
            <span className="text-[12px] font-[900] tracking-wider font-sans text-white">firevy.co</span>
            <span className="text-[8px] font-[600] text-cyan-300 font-sans">Software Solutions</span>
          </div>

          {/* Banner Title & Graphic */}
          <div className="flex items-end justify-between relative z-10">
            <div className="max-w-[155px] space-y-1">
              <span className="text-[12px] font-[800] text-cyan-400 leading-tight block">
                AI in Software Development:
              </span>
              <span className="text-[10px] font-[700] text-slate-200 leading-tight block">
                Scale Operations Faster with Intelligent Automation
              </span>
            </div>

            {/* AI Brain / Network Graphic */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="22" fill="#0369A1" opacity="0.3" />
                {/* Brain Outline / Tech circuit */}
                <path d="M28 32 C28 26, 36 24, 40 28 C44 24, 52 26, 52 32 C52 38, 48 42, 48 48 C48 54, 44 56, 40 56 C36 56, 32 54, 32 48 C32 42, 28 38, 28 32 Z" stroke="#38BDF8" strokeWidth="2" fill="#0C4A6E" />
                <circle cx="34" cy="36" r="2" fill="#38BDF8" />
                <circle cx="46" cy="36" r="2" fill="#38BDF8" />
                <circle cx="40" cy="46" r="2.5" fill="#38BDF8" />
                <line x1="34" y1="36" x2="40" y2="46" stroke="#38BDF8" strokeWidth="1" />
                <line x1="46" y1="36" x2="40" y2="46" stroke="#38BDF8" strokeWidth="1" />
                {/* Mini UI windows */}
                <rect x="12" y="24" width="12" height="8" rx="1.5" fill="#0369A1" stroke="#38BDF8" strokeWidth="1" />
                <rect x="56" y="24" width="14" height="10" rx="1.5" fill="#0369A1" stroke="#38BDF8" strokeWidth="1" />
                <rect x="54" y="48" width="14" height="10" rx="1.5" fill="#0369A1" stroke="#38BDF8" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      date: 'March 18, 2026',
      title: 'Why Startups Choose firevy.co Over TCS, Infosys, and Wipro for...',
      desc: 'Businesses evaluate software development partners, often comparing large global IT firms with agile,...',
      slug: 'why-startups-choose-firevy',
      banner: (
        <div
          className="h-48 w-full p-4 flex flex-col justify-between relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(88,28,135,0.92) 0%, rgba(59,7,100,0.95) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')"
          }}
        >
          {/* Brand Logo on Top-Left */}
          <div className="flex items-center space-x-1.5 z-10">
            <span className="text-[12px] font-[900] tracking-wider font-sans text-white">firevy.co</span>
            <span className="text-[8px] font-[600] text-purple-200 font-sans">Software Solutions</span>
          </div>

          {/* Banner Title & Graphic */}
          <div className="flex items-end justify-between relative z-10">
            <div className="max-w-[155px] space-y-1">
              <span className="text-[10px] font-[700] text-amber-300 leading-tight block">
                Why Startups Choose firevy.co Over TCS, Infosys, and Wipro for
              </span>
              <span className="text-[11px] font-[800] text-cyan-300 leading-tight block">
                Modern Software Development?
              </span>
            </div>

            {/* Developer at Work Graphic + TCS/Infosys tags */}
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="22" height="9" rx="2" fill="#FFFFFF" />
                <text x="19" y="18.5" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#2563EB" fontFamily="sans-serif">TCS</text>
                <rect x="8" y="24" width="22" height="9" rx="2" fill="#FFFFFF" />
                <text x="19" y="30.5" textAnchor="middle" fontSize="5" fontWeight="900" fill="#0284C7" fontFamily="sans-serif">Infosys</text>
                <rect x="48" y="12" width="24" height="10" rx="2" fill="#FFFFFF" />
                <text x="60" y="19" textAnchor="middle" fontSize="4.5" fontWeight="900" fill="#006B8F" fontFamily="sans-serif">firevy.co</text>

                {/* Developer sitting at desk */}
                <rect x="42" y="36" width="30" height="24" rx="3" fill="#F59E0B" />
                <rect x="46" y="40" width="12" height="8" rx="1.5" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
                <circle cx="34" cy="42" r="5" fill="#FED7AA" />
                <rect x="30" y="48" width="8" height="14" rx="2" fill="#EC4899" />
              </svg>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header - Exact Copy-to-Copy with Reference Image 1 */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3 font-sans">
            Our Recent Blogs
          </h2>
          <p className="text-[16px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[14px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group text-left"
            >
              {/* Top Graphic Banner */}
              <div className="cursor-pointer">
                {blog.banner}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[13px] font-[500] text-slate-500 mb-2 font-sans">
                    {blog.date}
                  </div>

                  <h3 className="text-[15px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-2 leading-snug font-sans">
                    {blog.title}
                  </h3>

                  <p className="text-[13px] font-[400] text-slate-600 leading-relaxed font-sans">
                    {blog.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-[13px] font-[600] text-[#006B8F] hover:text-[#005478] font-sans group/link"
                  >
                    <span>Get more details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecentBlogsSection;
