import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import {
  ArrowRight, CheckCircle2, Check, RefreshCw, FileText, Calendar, Search, Users, Cpu, Layers, Zap, Code, ShieldCheck, Monitor, Wrench
} from 'lucide-react';

import companyPublicService from '../services/companyPublicService';

export const DevelopmentMethodology = () => {
  const isPreview = typeof window !== 'undefined' && window.location.search.includes('preview=true');
  const [dynamicSection, setDynamicSection] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    companyPublicService.getSection('development-methodology', isPreview).then((data) => {
      if (data) setDynamicSection(data);
    }).catch(console.error);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={dynamicSection?.seo?.metaTitle || `Development Methodologies | Agile, Scrum, DevOps, Waterfall & Iterative | ${BRAND.name}`}
        description={dynamicSection?.seo?.metaDescription || `Every project starts with deciding the perfect development methodology. ${BRAND.name} implements Agile, Scrum, DevOps, Waterfall, and Iterative frameworks to ensure project success.`}
        canonical="/company/development-methodology"
      />

      {/* ============================================================
          1. HERO SECTION ("Development Methodologies")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[36px] sm:text-[46px] md:text-[52px] font-[800] text-slate-900 leading-[1.15] tracking-tight font-sans">
                {dynamicSection?.title || 'Development Methodologies'}
              </h1>
              
              <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-[400] max-w-xl font-sans">
                {dynamicSection?.subtitle || 'Every Project Starts With Deciding The Perfect Development Methodology For It'}
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg group font-sans"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Isometric Laptop & Development Workspace Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-[500px] h-[320px] sm:h-[360px] flex items-center justify-center">
                
                <svg viewBox="0 0 550 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="chartBarPink" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#BE185D" />
                    </linearGradient>
                    <linearGradient id="chartBarYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>

                  <circle cx="420" cy="110" r="30" fill="none" stroke="#60A5FA" strokeWidth="4" strokeDasharray="8 6" opacity="0.6" />
                  <circle cx="450" cy="80" r="18" fill="none" stroke="#93C5FD" strokeWidth="3" strokeDasharray="6 4" opacity="0.5" />

                  <rect x="70" y="150" width="22" height="70" rx="4" fill="#67E8F9" />
                  <rect x="100" y="120" width="22" height="100" rx="4" fill="url(#chartBarYellow)" />
                  <rect x="130" y="160" width="22" height="60" rx="4" fill="#38BDF8" />

                  <g transform="translate(160, 80)">
                    <polygon points="40,20 220,20 250,170 10,170" fill="#2563EB" stroke="#1D4ED8" strokeWidth="3" />
                    <polygon points="50,30 210,30 238,160 22,160" fill="#F8FAFC" />
                    
                    <rect x="65" y="45" width="130" height="10" rx="3" fill="#3B82F6" opacity="0.8" />
                    <rect x="65" y="65" width="90" height="7" rx="2" fill="#94A3B8" />
                    <rect x="65" y="80" width="120" height="7" rx="2" fill="#94A3B8" />
                    <rect x="65" y="95" width="70" height="7" rx="2" fill="#60A5FA" />
                    
                    <rect x="145" y="70" width="70" height="50" rx="4" fill="#1E293B" opacity="0.9" />
                    <circle cx="153" cy="77" r="2.5" fill="#EF4444" />
                    <circle cx="160" cy="77" r="2.5" fill="#F59E0B" />
                    <circle cx="167" cy="77" r="2.5" fill="#10B981" />

                    <polygon points="10,170 250,170 290,220 -30,220" fill="#0F172A" />
                    <polygon points="0,173 240,173 275,215 -18,215" fill="#334155" />
                  </g>

                  <g transform="translate(420, 110)">
                    <circle cx="20" cy="20" r="32" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="4" />
                    <line x1="20" y1="20" x2="20" y2="4" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                    <line x1="20" y1="20" x2="34" y2="20" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  <g transform="translate(410, 200)">
                    <rect x="0" y="0" width="55" height="50" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                    <rect x="0" y="0" width="55" height="15" rx="6" fill="#2563EB" />
                    <circle cx="12" cy="7" r="2" fill="#FFFFFF" />
                    <circle cx="43" cy="7" r="2" fill="#FFFFFF" />
                    <circle cx="15" cy="26" r="3" fill="#0284C7" />
                    <circle cx="28" cy="26" r="3" fill="#0284C7" />
                    <circle cx="40" cy="26" r="3" fill="#0284C7" />
                    <circle cx="15" cy="38" r="3" fill="#0284C7" />
                    <circle cx="28" cy="38" r="3" fill="#EC4899" />
                  </g>

                  <g transform="translate(110, 150)">
                    <circle cx="20" cy="18" r="14" fill="#F43F5E" />
                    <path d="M 5,55 C 5,35 35,35 35,55 Z" fill="#E11D48" />
                    <rect x="12" y="55" width="6" height="40" fill="#1E293B" />
                    <rect x="22" y="55" width="6" height="40" fill="#1E293B" />
                  </g>

                  <g transform="translate(145, 175)">
                    <circle cx="20" cy="18" r="14" fill="#0284C7" />
                    <path d="M 5,55 C 5,35 35,35 35,55 Z" fill="#1D4ED8" />
                    <rect x="12" y="55" width="6" height="40" fill="#0F172A" />
                    <rect x="22" y="55" width="6" height="40" fill="#0F172A" />
                  </g>

                  <g transform="translate(360, 220)">
                    <circle cx="20" cy="18" r="14" fill="#F43F5E" />
                    <path d="M 5,50 C 5,35 35,35 35,50 Z" fill="#0284C7" />
                    <rect x="10" y="50" width="20" height="20" fill="#1E293B" />
                  </g>

                  <g transform="translate(55, 230)">
                    <path d="M 10,25 L 30,25 L 35,50 L 5,50 Z" fill="#0D9488" />
                    <path d="M 20,25 C 5,5 5,-10 20,-5 Z" fill="#10B981" />
                    <path d="M 20,25 C 35,5 35,-10 20,-5 Z" fill="#059669" />
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. LOGOS MARQUEE STRIP
          ============================================================ */}
      <section className="py-6 bg-white border-b border-slate-100 overflow-hidden">
        <TrustMarquee />
      </section>

      {/* ============================================================
          3. "What is development methodology?"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              What is development methodology?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Diagram: 6-Stage SDLC Pie Chart */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl">
                  <path d="M 200,200 L 200,20 A 180,180 0 0,1 355,110 Z" fill="#3B82F6" />
                  <text x="260" y="95" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 1</text>
                  <text x="255" y="115" fill="#FFFFFF" fontSize="14" fontWeight="900">Planning</text>

                  <path d="M 200,200 L 355,110 A 180,180 0 0,1 355,290 Z" fill="#2563EB" />
                  <text x="290" y="195" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 2</text>
                  <text x="285" y="215" fill="#FFFFFF" fontSize="14" fontWeight="900">Analysis</text>

                  <path d="M 200,200 L 355,290 A 180,180 0 0,1 200,380 Z" fill="#3B82F6" />
                  <text x="255" y="300" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 3</text>
                  <text x="255" y="320" fill="#FFFFFF" fontSize="14" fontWeight="900">Design</text>

                  <path d="M 200,200 L 200,380 A 180,180 0 0,1 45,290 Z" fill="#1D4ED8" />
                  <text x="110" y="300" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 4</text>
                  <text x="90" y="320" fill="#FFFFFF" fontSize="14" fontWeight="900">Implementation</text>

                  <path d="M 200,200 L 45,290 A 180,180 0 0,1 45,110 Z" fill="#2563EB" />
                  <text x="75" y="185" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 5</text>
                  <text x="60" y="205" fill="#FFFFFF" fontSize="13" fontWeight="900">Testing &</text>
                  <text x="55" y="222" fill="#FFFFFF" fontSize="13" fontWeight="900">Integration</text>

                  <path d="M 200,200 L 45,110 A 180,180 0 0,1 200,20 Z" fill="#3B82F6" />
                  <text x="110" y="95" fill="#FFFFFF" fontSize="12" fontWeight="800">Stage 6</text>
                  <text x="90" y="115" fill="#FFFFFF" fontSize="14" fontWeight="900">Maintenance</text>

                  <circle cx="200" cy="200" r="72" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="4" />
                  <text x="200" y="178" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800">The Software</text>
                  <text x="200" y="198" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="900">Development</text>
                  <text x="200" y="218" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800">Life Cycle</text>
                </svg>

              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-base sm:text-lg font-[800] text-slate-900 leading-snug font-sans italic">
                '{BRAND.name} make sure that the best development methodology is applied to meet business goals and only success is delivered.'
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                Every project goes through a strategic process to achieve the ultimate goals like timely project completion, cost-effectiveness, optimum quality. The development methodology is the process or sequence of the processes that are used in software development. Every software development methodologies works in the following phases.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Implementation / coding</span>
                </div>
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Testing and Integration</span>
                </div>
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Planning</span>
                </div>
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Design</span>
                </div>
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Requirement Analysis</span>
                </div>
                <div className="flex items-center space-x-2 text-[14.5px] font-[700] text-slate-800">
                  <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                  <span>Maintenance</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
                >
                  <span>Connect Now</span>
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          4. "Criteria For Choosing Best Development Methodology"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F4F8FA] text-slate-900 font-sans relative border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Criteria For Choosing Best Development Methodology
              </h2>
              
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400]">
                Let us define the various criteria for choosing the best development methodology for the project. We have a customer-centric approach in the entire development process so we focus on understanding the customer requirement and offering the best solutions.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-[15px] font-[800] text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0" />
                  <span>Project Requirement</span>
                </div>
                <div className="flex items-center space-x-3 text-[15px] font-[800] text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0" />
                  <span>Prior Experience Of The Team</span>
                </div>
                <div className="flex items-center space-x-3 text-[15px] font-[800] text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0" />
                  <span>Project Size</span>
                </div>
                <div className="flex items-center space-x-3 text-[15px] font-[800] text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0" />
                  <span>Frequency Of Change Request Or Enhancements</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
                >
                  <span>Get Free Quote</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] h-[340px] flex items-center justify-center">
                
                <svg viewBox="0 0 500 380" className="w-full h-full drop-shadow-xl overflow-visible">
                  <circle cx="150" cy="130" r="55" fill="none" stroke="#38BDF8" strokeWidth="16" />
                  <circle cx="250" cy="120" r="22" fill="none" stroke="#38BDF8" strokeWidth="6" />
                  <circle cx="310" cy="120" r="22" fill="none" stroke="#38BDF8" strokeWidth="6" />

                  <g transform="translate(320, 100)">
                    <rect x="0" y="0" width="130" height="120" rx="12" fill="#FFFFFF" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" />
                    <line x1="20" y1="90" x2="110" y2="30" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                    <rect x="25" y="60" width="16" height="40" fill="#38BDF8" rx="2" />
                    <rect x="50" y="45" width="16" height="55" fill="#0284C7" rx="2" />
                    <rect x="75" y="30" width="16" height="70" fill="#0369A1" rx="2" />
                  </g>

                  <g transform="translate(240, 220)">
                    <circle cx="45" cy="45" r="40" fill="#FFFFFF" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" />
                    <circle cx="45" cy="45" r="32" fill="none" stroke="#0284C7" strokeWidth="5" />
                    <circle cx="45" cy="45" r="20" fill="none" stroke="#38BDF8" strokeWidth="5" />
                    <circle cx="45" cy="45" r="8" fill="#0284C7" />
                    <line x1="75" y1="15" x2="45" y2="45" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
                  </g>

                  <g transform="translate(340, 230)">
                    <circle cx="38" cy="38" r="34" fill="#38BDF8" opacity="0.9" />
                    <line x1="38" y1="38" x2="38" y2="18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    <line x1="38" y1="38" x2="50" y2="38" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                  </g>

                  <g transform="translate(260, 160)">
                    <circle cx="30" cy="22" r="16" fill="#451A03" />
                    <circle cx="30" cy="20" r="14" fill="#334155" />
                    <path d="M 12,65 C 12,42 48,42 48,65 L 52,140 L 8,140 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="15" y="140" width="12" height="100" fill="#1E293B" />
                    <rect x="33" y="140" width="12" height="100" fill="#1E293B" />
                    <rect x="12" y="235" width="18" height="12" rx="4" fill="#451A03" />
                    <rect x="30" y="235" width="18" height="12" rx="4" fill="#451A03" />
                    <path d="M 45,55 L 20,-10" stroke="#334155" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="16" cy="-18" r="14" fill="none" stroke="#0284C7" strokeWidth="4" />
                    <line x1="26" y1="-8" x2="38" y2="4" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
                  </g>
                </svg>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          5. "Our Engagement Model" (Agile, Scrum, DevOps)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans relative border-b border-slate-200/80">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              Our Engagement Model
            </h2>
            <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              We, {BRAND.name}, work on the leading development methodologies like Agile, Scrum, DevOps as well as Waterfall and iterative.
            </p>
          </div>

          {/* 5A. AGILE METHODOLOGY */}
          <div className="max-w-6xl mx-auto mb-24">
            <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 mb-4 text-left font-sans">
              Agile Methodology
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed text-left font-sans font-[400] mb-6">
              As the name suggests itself, the agile methodology works perfectly for rapid and flexible response. Our Agile implementation process is based on the following manifesto:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Individual Interactions</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Working Software</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Customer Collaboration</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Responding To Change</span>
              </div>
            </div>

            {/* Agile Loop Diagram SVG */}
            <div className="py-8 flex justify-center items-center mb-16">
              <div className="relative w-full max-w-[650px] h-[280px] sm:h-[340px] flex items-center justify-center">
                
                <svg viewBox="0 0 700 360" className="w-full h-full drop-shadow-xl overflow-visible">
                  <g transform="translate(350, 140)">
                    <circle cx="0" cy="0" r="48" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="3" />
                    <circle cx="0" cy="0" r="28" fill="#FFFFFF" />
                    <text x="0" y="6" textAnchor="middle" fill="#1E293B" fontSize="15" fontWeight="900" letterSpacing="1">AGILE</text>

                    <path d="M -100,0 A 100,100 0 1,1 100,0 A 100,100 0 0,1 -100,0" fill="none" stroke="url(#agileLoopGrad)" strokeWidth="28" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="agileLoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0284C7" />
                        <stop offset="50%" stopColor="#453215" />
                        <stop offset="100%" stopColor="#0284C7" />
                      </linearGradient>
                    </defs>

                    <g transform="translate(-10, -95)">
                      <circle cx="0" cy="0" r="16" fill="#453215" />
                      <text x="0" y="-22" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Deploy</text>
                    </g>
                    <g transform="translate(85, -55)">
                      <circle cx="0" cy="0" r="16" fill="#0284C7" />
                      <text x="25" y="4" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Test</text>
                    </g>
                    <g transform="translate(100, 30)">
                      <circle cx="0" cy="0" r="16" fill="#0284C7" />
                      <text x="32" y="4" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Develop</text>
                    </g>
                    <g transform="translate(-100, 30)">
                      <circle cx="0" cy="0" r="16" fill="#453215" />
                      <text x="-32" y="4" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Review</text>
                    </g>
                  </g>

                  <g transform="translate(60, 240)">
                    <path d="M 0,15 L 260,15 L 290,30 L 260,45 L 0,45 Z" fill="#0284C7" />
                    <circle cx="40" cy="30" r="14" fill="#FFFFFF" />
                    <text x="40" y="62" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800">Plan</text>

                    <circle cx="300" cy="30" r="14" fill="#0284C7" />
                    <text x="300" y="62" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800">Design</text>

                    <path d="M 280,15 L 530,15 L 560,30 L 530,45 L 280,45 Z" fill="#453215" />
                    <circle cx="530" cy="30" r="14" fill="#FFFFFF" />
                    <text x="530" y="62" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800">Launch</text>
                  </g>
                </svg>

              </div>
            </div>

            {/* Benefits of Agile Methodology */}
            <div className="pt-4 text-left">
              <h4 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 mb-8 font-sans">
                Benefits of Agile Methodology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    High-quality outputs in small iterations
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Adaptive approach
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Open for creative improvements &modifications
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Well planned costing & budget before each iteration
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Regular interaction b/w the client and the development team
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Superior quality product and customer satisfaction
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 5B. SCRUM METHODOLOGY */}
          <div className="max-w-6xl mx-auto mb-24 pt-16 border-t border-slate-100">
            <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 mb-4 text-left font-sans">
              Scrum Methodology
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed text-left font-sans font-[400] mb-6">
              Best for high or small-scale projects with frequently changing project requirements. Scrum manifesto, we follow:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Product Backlog</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Sprint Planning</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Sprint Backlog</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Sprint Review</span>
              </div>
            </div>

            {/* Scrum Workflow Diagram SVG */}
            <div className="py-8 flex justify-center items-center mb-14">
              <div className="relative w-full max-w-[680px] h-[240px] sm:h-[280px] flex items-center justify-center">
                
                <svg viewBox="0 0 750 300" className="w-full h-full drop-shadow-md overflow-visible">
                  <g transform="translate(80, 170)">
                    <path d="M 10,-35 A 22,22 0 1,0 35,-10" fill="none" stroke="#453215" strokeWidth="4" strokeLinecap="round" />
                    <polygon points="35,-10 40,-20 28,-18" fill="#453215" />
                    
                    <rect x="10" y="0" width="30" height="40" rx="4" fill="#FFFFFF" stroke="#453215" strokeWidth="3" />
                    <line x1="16" y1="10" x2="34" y2="10" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                    <line x1="16" y1="20" x2="34" y2="20" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                    <line x1="16" y1="30" x2="26" y2="30" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                    
                    <text x="25" y="62" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Product</text>
                    <text x="25" y="78" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Backlog</text>
                  </g>

                  <path d="M 135,190 L 195,190" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="205,190 190,182 190,198" fill="#0284C7" />

                  <g transform="translate(220, 170)">
                    <rect x="5" y="0" width="40" height="40" rx="6" fill="#FFFFFF" stroke="#453215" strokeWidth="3" />
                    <rect x="5" y="0" width="40" height="12" rx="4" fill="#453215" />
                    <circle cx="15" cy="26" r="8" fill="none" stroke="#453215" strokeWidth="2.5" />
                    <line x1="15" y1="26" x2="15" y2="21" stroke="#453215" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="15" y1="26" x2="19" y2="26" stroke="#453215" strokeWidth="2.5" strokeLinecap="round" />
                    
                    <text x="25" y="62" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Sprint</text>
                    <text x="25" y="78" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Planning</text>
                  </g>

                  <path d="M 275,190 L 335,190" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="345,190 330,182 330,198" fill="#0284C7" />

                  <g transform="translate(360, 170)">
                    <rect x="10" y="0" width="30" height="40" rx="4" fill="#FFFFFF" stroke="#453215" strokeWidth="3" />
                    <line x1="16" y1="10" x2="34" y2="10" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                    <line x1="16" y1="20" x2="34" y2="20" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                    <line x1="16" y1="30" x2="26" y2="30" stroke="#453215" strokeWidth="3" strokeLinecap="round" />

                    <text x="25" y="62" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Sprint</text>
                    <text x="25" y="78" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Backlog</text>
                  </g>

                  <g transform="translate(470, 140)">
                    <path d="M -50,50 A 60,60 0 1,1 60,30" fill="none" stroke="#0284C7" strokeWidth="18" strokeLinecap="round" />
                    <polygon points="68,45 55,25 50,45" fill="#0284C7" />

                    <g transform="translate(0, -60)">
                      <path d="M -25,0 A 20,20 0 1,1 20,0" fill="none" stroke="#453215" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="0" cy="-10" r="10" fill="#FFFFFF" stroke="#453215" strokeWidth="2.5" />
                      <text x="0" y="22" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="800">Sprint Retrospective</text>
                    </g>

                    <g transform="translate(60, -20)">
                      <circle cx="0" cy="0" r="22" fill="#0284C7" />
                      <text x="0" y="-3" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Daily</text>
                      <text x="0" y="8" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Scrum</text>
                    </g>

                    <circle cx="0" cy="40" r="12" fill="#453215" />
                    <text x="0" y="68" textAnchor="middle" fill="#1E293B" fontSize="11" fontWeight="900">1 Scrum</text>
                    <text x="0" y="80" textAnchor="middle" fill="#1E293B" fontSize="11" fontWeight="900">Team</text>
                  </g>

                  <path d="M 540,190 L 610,190" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
                  <polygon points="620,190 605,182 605,198" fill="#0284C7" />

                  <g transform="translate(630, 170)">
                    <circle cx="20" cy="20" r="16" fill="#FFFFFF" stroke="#453215" strokeWidth="3" />
                    <line x1="32" y1="32" x2="44" y2="44" stroke="#453215" strokeWidth="4" strokeLinecap="round" />

                    <text x="20" y="62" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Sprint</text>
                    <text x="20" y="78" textAnchor="middle" fill="#1E293B" fontSize="12" fontWeight="800">Review</text>
                  </g>
                </svg>

              </div>
            </div>

            {/* Benefits Of Scrum Methodology */}
            <div className="pt-4 text-left">
              <h4 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 mb-8 font-sans">
                Benefits Of Scrum Methodology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Development in a series of sprints
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Fast discovery of problems
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Client participation in the production cycle
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Fast feedback cycle
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Daily team meeting
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Business engagement
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 5C. DEVOPS METHODOLOGY */}
          <div className="max-w-6xl mx-auto pt-16 border-t border-slate-100">
            <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 mb-4 text-left font-sans">
              DevOps Methodology
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed text-left font-sans font-[400] mb-6">
              Best suitable for faster and rapid delivery of applications. DevOps Manifesto, we follow:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Planning</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Automate Testing</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Small Size Releases</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Automate Deployment</span>
              </div>
            </div>

            {/* DevOps Infinity Loop Diagram SVG */}
            <div className="py-8 flex justify-center items-center mb-14">
              <div className="relative w-full max-w-[620px] h-[260px] sm:h-[300px] flex items-center justify-center">
                
                <svg viewBox="0 0 650 320" className="w-full h-full drop-shadow-xl overflow-visible">
                  <g transform="translate(220, 160)">
                    <path d="M -110,-10 C -110,-100 0,-100 30,0" fill="none" stroke="#453215" strokeWidth="36" strokeLinecap="round" />
                    <text x="-70" y="-55" fill="#FFFFFF" fontSize="15" fontWeight="900" transform="rotate(-30, -70, -55)">code</text>

                    <path d="M -110,-10 C -110,90 0,90 30,0" fill="none" stroke="#0284C7" strokeWidth="36" strokeLinecap="round" />
                    <text x="-70" y="65" fill="#FFFFFF" fontSize="15" fontWeight="900" transform="rotate(30, -70, 65)">build</text>
                    <text x="-15" y="70" fill="#FFFFFF" fontSize="14" fontWeight="900">test</text>

                    <text x="-45" y="10" textAnchor="middle" fill="#1E293B" fontSize="26" fontWeight="900">Dev</text>
                  </g>

                  <g transform="translate(430, 160)">
                    <path d="M -30,0 C 0,-100 110,-100 110,-10" fill="none" stroke="#453215" strokeWidth="36" strokeLinecap="round" />
                    <text x="50" y="-55" fill="#FFFFFF" fontSize="15" fontWeight="900" transform="rotate(30, 50, -55)">deploy</text>

                    <path d="M -30,0 C 0,90 110,90 110,-10" fill="none" stroke="#453215" strokeWidth="36" strokeLinecap="round" />
                    <text x="65" y="65" fill="#FFFFFF" fontSize="14" fontWeight="900" transform="rotate(-30, 65, 65)">operate</text>
                    <text x="10" y="70" fill="#FFFFFF" fontSize="14" fontWeight="900">monitor</text>

                    <text x="45" y="10" textAnchor="middle" fill="#1E293B" fontSize="26" fontWeight="900">Ops</text>
                  </g>

                  <g transform="translate(325, 160)">
                    <path d="M -40,40 L 40,-40" stroke="#0284C7" strokeWidth="32" strokeLinecap="round" />
                    <text x="-25" y="10" fill="#FFFFFF" fontSize="14" fontWeight="900" transform="rotate(-45, -25, 10)">plan</text>

                    <path d="M -40,-40 L 40,40" stroke="#0284C7" strokeWidth="32" strokeLinecap="round" />
                    <text x="0" y="5" fill="#FFFFFF" fontSize="14" fontWeight="900" transform="rotate(45, 0, 5)">release</text>
                  </g>
                </svg>

              </div>
            </div>

            {/* Benefits Of DevOps Methodology (Exact Screenshot 1 Match) */}
            <div className="pt-4 text-left">
              <h4 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 mb-8 font-sans">
                Benefits Of DevOps Methodology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Faster delivery cycle
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Improved operational support and quick fixes
                  </span>
                </div>
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Quality and Reliability
                  </span>
                </div>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* ============================================================
          6. OUR PREMIUM SERVICES (Exact Screenshot 1 Match)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          7. WATERFALL METHODOLOGY & BENEFITS (Exact Screenshot 2 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 mb-4 text-left font-sans">
              Waterfall Methodology
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed text-left font-sans font-[400] mb-6">
              The traditional methodology best suited for projects with fixed requirements. The waterfall manifesto we follow:
            </p>

            {/* 4 Manifesto Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 text-left">
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Requirement Analysis At Primary Stage</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Planning At The Early Stage</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Check On The Design Phase</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Comparatively Easy Implementation</span>
              </div>
            </div>

            {/* Waterfall Staircase Diagram SVG (6 Cascading Blue Boxes) */}
            <div className="py-8 flex justify-center items-center mb-16">
              <div className="relative w-full max-w-[720px] h-[260px] sm:h-[300px] flex items-center justify-center">
                
                <svg viewBox="0 0 800 320" className="w-full h-full drop-shadow-lg overflow-visible">
                  {/* Step 1: Requirements */}
                  <g transform="translate(60, 20)">
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#1D4ED8" />
                    <Search className="w-6 h-6 text-white transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Requirements</text>
                  </g>

                  {/* Step 2: Design */}
                  <g transform="translate(170, 60)">
                    <line x1="-10" y1="0" x2="-10" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#2563EB" />
                    <Wrench className="w-6 h-6 text-white transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Design</text>
                  </g>

                  {/* Step 3: Implement */}
                  <g transform="translate(280, 100)">
                    <line x1="-10" y1="0" x2="-10" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#3B82F6" />
                    <Code className="w-6 h-6 text-white transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Implement</text>
                  </g>

                  {/* Step 4: Test */}
                  <g transform="translate(390, 140)">
                    <line x1="-10" y1="0" x2="-10" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#60A5FA" />
                    <FileText className="w-6 h-6 text-white transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Test</text>
                  </g>

                  {/* Step 5: Deploy */}
                  <g transform="translate(500, 180)">
                    <line x1="-10" y1="0" x2="-10" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#93C5FD" />
                    <Monitor className="w-6 h-6 text-white transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">Deploy</text>
                  </g>

                  {/* Step 6: Maintenance */}
                  <g transform="translate(610, 220)">
                    <line x1="-10" y1="0" x2="-10" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                    <rect x="0" y="0" width="100" height="70" rx="12" fill="#BFDBFE" />
                    <Wrench className="w-6 h-6 text-[#1E3A8A] transform translate-x-[38px] translate-y-[12px]" />
                    <text x="50" y="54" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="800">Maintenance</text>
                  </g>
                </svg>

              </div>
            </div>

            {/* Benefits Of Waterfall Methodology (Exact Screenshot 2 Match) */}
            <div className="pt-4 text-left">
              <h4 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 mb-8 font-sans">
                Benefits Of Waterfall Methodology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Effective model for small-scale projects with well-defined requirements.
                  </span>
                </div>

                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Fixed deadline
                  </span>
                </div>

                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Great quality control
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          8. ITERATIVE METHODOLOGY & BENEFITS (Exact Screenshot 3 Match)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 mb-4 text-left font-sans">
              Iterative Methodology
            </h3>

            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed text-left font-sans font-[400] mb-6">
              The iterative model works best with the project is big scale but requirements are clearly defined. Our manifesto of iterative model:
            </p>

            {/* 4 Manifesto Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 text-left">
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Create High-Level Design Before Application</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Validation Of System Feasibility</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Planning And Requirement Analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-[15px] font-[800] text-slate-800">
                <span className="w-2.5 h-2.5 bg-[#006B8F] rounded-xs shrink-0" />
                <span>Implementation</span>
              </div>
            </div>

            {/* Iterative & Incremental Cycle Diagram SVG */}
            <div className="py-8 flex justify-center items-center mb-16">
              <div className="relative w-full max-w-[620px] h-[280px] sm:h-[320px] flex items-center justify-center">
                
                <svg viewBox="0 0 650 360" className="w-full h-full drop-shadow-xl overflow-visible">
                  {/* Center Dotted Circle */}
                  <circle cx="325" cy="180" r="95" fill="none" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 6" />
                  <text x="325" y="172" textAnchor="middle" fill="#0284C7" fontSize="17" fontWeight="900">Iterative &</text>
                  <text x="325" y="195" textAnchor="middle" fill="#0284C7" fontSize="17" fontWeight="900">Incremental</text>

                  {/* Outer Circular Curved Blue Arrows */}
                  <path d="M 230,180 A 105,105 0 0,1 325,75" fill="none" stroke="#0284C7" strokeWidth="12" />
                  <polygon points="325,75 310,65 315,85" fill="#0284C7" />

                  <path d="M 325,75 A 105,105 0 0,1 420,180" fill="none" stroke="#0284C7" strokeWidth="12" />
                  <polygon points="420,180 430,165 410,170" fill="#0284C7" />

                  <path d="M 420,180 A 105,105 0 0,1 325,285" fill="none" stroke="#0284C7" strokeWidth="12" />
                  <polygon points="325,285 340,295 335,275" fill="#0284C7" />

                  <path d="M 325,285 A 105,105 0 0,1 230,180" fill="none" stroke="#0284C7" strokeWidth="12" />
                  <polygon points="230,180 220,195 240,190" fill="#0284C7" />

                  {/* Outer Process Labels */}
                  {/* Top Left: Initial Planning -> Planning */}
                  <g transform="translate(140, 160)">
                    <path d="M -30,-60 L 45,15" stroke="#453215" strokeWidth="6" strokeLinecap="round" />
                    <polygon points="45,15 32,5 42,-5" fill="#453215" />
                    <text x="-40" y="-70" fill="#1E293B" fontSize="12" fontWeight="800">Initial Planning</text>
                    <text x="25" y="-10" fill="#1E293B" fontSize="12" fontWeight="800">Planning</text>
                  </g>

                  {/* Top Right: Requirements -> Analysis & Design */}
                  <text x="260" y="50" fill="#1E293B" fontSize="12" fontWeight="800">Requirements</text>
                  <text x="390" y="50" fill="#1E293B" fontSize="12" fontWeight="800">Analysis & Design</text>

                  {/* Middle Right: Implementation -> Deployment */}
                  <g transform="translate(450, 180)">
                    <text x="20" y="-20" fill="#1E293B" fontSize="12" fontWeight="800">Implementation</text>
                    <text x="80" y="45" fill="#1E293B" fontSize="12" fontWeight="800">Deployment</text>
                    <path d="M 0,25 L 80,75" stroke="#453215" strokeWidth="6" strokeLinecap="round" />
                    <polygon points="80,75 75,60 62,72" fill="#453215" />
                  </g>

                  {/* Bottom: Testing -> Evaluation */}
                  <text x="380" y="315" fill="#1E293B" fontSize="12" fontWeight="800">Testing</text>
                  <text x="250" y="315" fill="#1E293B" fontSize="12" fontWeight="800">Evaluation</text>
                </svg>

              </div>
            </div>

            {/* Benefits Of Iterative Methodology (Exact Screenshot 3 & 4 Match) */}
            <div className="pt-4 text-left">
              <h4 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 mb-8 font-sans">
                Benefits Of Iterative Methodology
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Early defect tracking
                  </span>
                </div>

                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Reliable user feedback
                  </span>
                </div>

                <div className="bg-white rounded-[16px] p-6 border border-slate-200/90 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <span className="text-[15px] font-[700] text-slate-800 leading-snug font-sans">
                    Less time on documentation
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          9. CONTACT CTA & NEWSLETTER SUBSCRIBE SECTION (Exact Screenshot Match)
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Have Any Query Or Confusion Related To These Engagement Models?"
        subtitle="Get in touch with us. Our delivery models and methodologies are customized to achieve maximum business growth."
        buttonText="Request A Free Quote"
      />

    </div>
  );
};

export default DevelopmentMethodology;
