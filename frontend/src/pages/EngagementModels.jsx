import React, { useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustMarquee from '../components/home/TrustMarquee';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import {
  ArrowRight, Users, CheckCircle2, Clock, DollarSign, ShieldCheck, Zap, Layers, RefreshCw, Send, FileSearch, UserCheck, Handshake, Check,
  Lightbulb, PenTool, Smartphone, Settings, Code, Rocket, Wrench, Search, Target, Award, Compass, Calculator, FileText, ClipboardList, User
} from 'lucide-react';

import companyPublicService from '../services/companyPublicService';

export const EngagementModels = () => {
  const isPreview = typeof window !== 'undefined' && window.location.search.includes('preview=true');
  const [dynamicSection, setDynamicSection] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    companyPublicService.getSection('engagement-models', isPreview).then((data) => {
      if (data) setDynamicSection(data);
    }).catch(console.error);
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={dynamicSection?.seo?.metaTitle || `Engagement Models | Flexible Pricing & Collaboration | ${BRAND.name}`}
        description={dynamicSection?.seo?.metaDescription || "Our engagement models connect the dots and ensure price and quality relationship is maintained. Choose Dedicated Team, Time & Material, or Fixed Price."}
        canonical="/company/engagement-models"
      />

      {/* ============================================================
          1. HERO SECTION ("Engagement Models")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-[800] text-slate-900 leading-[1.18] tracking-tight font-sans">
                {dynamicSection?.title || 'Engagement Models'}
              </h1>
              
              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-slate-600 leading-relaxed font-[400] max-w-2xl font-sans">
                {dynamicSection?.subtitle || 'Our Engagement Models Connect The Dots And Ensures Price And Quality Relationship Is Maintained'}
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

            {/* Right Column: 3D Isometric Team Table Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-[480px] h-[340px] md:h-[380px] flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full bg-blue-400/10 blur-2xl animate-pulse" />

                {/* Vector SVG Team Table Collaboration Illustration */}
                <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="tableGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <filter id="shadowCollab" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.12" />
                    </filter>
                  </defs>

                  {/* Isometric Conference Table */}
                  <g filter="url(#shadowCollab)">
                    <polygon points="120,200 250,140 380,200 250,260" fill="url(#tableGradient)" stroke="#2563EB" strokeWidth="3" />
                    <polygon points="120,200 250,260 250,272 120,212" fill="#1D4ED8" />
                    <polygon points="250,260 380,200 380,212 250,272" fill="#1E40AF" />
                    
                    {/* Laptops & Papers on table */}
                    <polygon points="160,195 190,180 210,190 180,205" fill="#FFFFFF" opacity="0.9" />
                    <polygon points="290,195 320,180 340,190 310,205" fill="#FFFFFF" opacity="0.9" />
                  </g>

                  {/* 6 Seated Characters around Table */}
                  <g transform="translate(140, 110)">
                    <circle cx="15" cy="15" r="10" fill="#0284C7" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#38BDF8" />
                  </g>

                  <g transform="translate(235, 80)">
                    <circle cx="15" cy="15" r="10" fill="#1E40AF" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#2563EB" />
                  </g>

                  <g transform="translate(330, 110)">
                    <circle cx="15" cy="15" r="10" fill="#334155" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#475569" />
                  </g>

                  <g transform="translate(130, 210)">
                    <circle cx="15" cy="15" r="10" fill="#0284C7" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#0369A1" />
                  </g>

                  <g transform="translate(210, 230)">
                    <circle cx="15" cy="15" r="10" fill="#EA580C" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#F97316" />
                  </g>

                  <g transform="translate(340, 210)">
                    <circle cx="15" cy="15" r="10" fill="#DB2777" />
                    <path d="M 5,45 C 5,30 25,30 25,45 Z" fill="#EC4899" />
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. LOGOS MARQUEE STRIP (HOME PAGE COMPONENT MATCH)
          ============================================================ */}
      <TrustMarquee />

      {/* ============================================================
          3. "firevy.co Engagement Models"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              {BRAND.name} Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Diagram: 4-Node Interactive Cloud Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
                
                {/* Center Main Dark Blue Cloud */}
                <div className="absolute w-44 h-44 rounded-full bg-[#006B8F] text-white flex flex-col items-center justify-center p-3 shadow-2xl z-10">
                  <span className="text-3xl font-[900] tracking-widest text-white font-serif">{BRAND.name.charAt(0).toUpperCase()}</span>
                </div>

                {/* Left Node: Software Product Development */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-xl border-4 border-white">
                    <Clock className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-[800] text-slate-900 mt-2 text-center max-w-[110px] leading-tight font-sans">
                    Software Product Development
                  </span>
                </div>

                {/* Right Node: Dedicated Team */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-xl border-4 border-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-[800] text-slate-900 mt-2 text-center max-w-[110px] leading-tight font-sans">
                    Dedicated Team
                  </span>
                </div>

                {/* Bottom Node: Developers on Demand */}
                <div className="absolute bottom-2 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shadow-xl border-4 border-white">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-[800] text-slate-900 mt-2 text-center max-w-[110px] leading-tight font-sans">
                    Developers on Demand
                  </span>
                </div>

              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                {BRAND.name} Engagement models are designed so thoughtfully that they bridge the gap between our customers and us. At the same time, we ensure that client is fully satisfied with the product delivered. Our pricing models serve the mutual interest. Pricing strategies will help the customer success journey to be smooth and progressive.
              </p>

              <h3 className="text-xl font-[800] text-slate-900 font-sans">
                What is Client engagement model?
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                Client and software development partner collaboration starts with fixing the engagement model. This model varies with project size, project duration, strategies providing optimal needs are fulfilled. The engagement model describes the way of engagement of participated entities in terms of payment terms, timelines, key responsibilities, etc.
              </p>

              <div className="pt-2">
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
          4. "firevy.co's Engagement models for customer success"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F4F8FA] text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                {BRAND.name}’s Engagement models for customer success
              </h2>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                Our efficient engagement model is designed by considering all relative aspects such that it will help us to shape the engagement with customer and the relationship between us and our prestigious client. Things before you ask before deciding the engagement model:
              </p>

              {/* 6 Checkmark Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Type of project</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Budget predictability</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Time-to-market</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Scope flexibility</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Setting timelines</span>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-xs border border-slate-200/60">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm font-[700] text-slate-800 font-sans">Management</span>
                </div>

              </div>
            </div>

            {/* Right Petal Flower Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Top Petal: Fixed Quote */}
                <div className="absolute top-0 w-44 h-44 rounded-full bg-[#1E40AF] text-white flex flex-col items-center justify-start pt-6 shadow-xl">
                  <DollarSign className="w-7 h-7 mb-1" />
                  <span className="text-base font-[800] tracking-tight font-sans">Fixed Quote</span>
                </div>

                {/* Left Petal: Time & Material */}
                <div className="absolute left-0 w-44 h-44 rounded-full bg-[#0284C7] text-white flex flex-col items-start justify-center pl-6 shadow-xl">
                  <Clock className="w-7 h-7 mb-1" />
                  <span className="text-sm font-[800] tracking-tight font-sans leading-tight">Time &<br />Material</span>
                </div>

                {/* Right Petal: Offshore Team */}
                <div className="absolute right-0 w-44 h-44 rounded-full bg-[#2563EB] text-white flex flex-col items-end justify-center pr-6 shadow-xl text-right">
                  <Users className="w-7 h-7 mb-1" />
                  <span className="text-sm font-[800] tracking-tight font-sans leading-tight">Offshore<br />Team</span>
                </div>

                {/* Bottom Petal: Partnership */}
                <div className="absolute bottom-0 w-44 h-44 rounded-full bg-[#1D4ED8] text-white flex flex-col items-center justify-end pb-6 shadow-xl">
                  <Handshake className="w-7 h-7 mb-1" />
                  <span className="text-base font-[800] tracking-tight font-sans">Partnership</span>
                </div>

                {/* Center Core Circle */}
                <div className="relative z-10 w-36 h-36 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-slate-100">
                  <span className="text-base font-[900] text-slate-900 leading-tight font-sans">
                    Engagement<br />Model
                  </span>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          5. "Our Engagement Model" -> 1. Dedicated Team
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
              Our Engagement Model
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-[400] font-sans">
              {BRAND.name} works with these four engagement models ensuring the success is delivered to the client!
            </p>
          </div>

          {/* Dedicated Team Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left font-sans">
              <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Dedicated Team
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                A dedicated team engagement model offers substantial control over the project along with significant flexibility. The best suitable model for the vast and complex projects requires effective communication and collaboration.
              </p>

              {/* 5 Checkmarks */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Best for long-run big projects that need to develop from scratch.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Dedicated team of developers is assigned.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Economical as billing on an hourly basis or fixed rates.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Flexible in terms of adding or improving new functionality.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Mostly used in fintech and blockchain technology projects.
                  </span>
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

            {/* Right Graphic: Circular Process Ring Workflow */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Outer Ring Circle */}
                <div className="absolute inset-4 rounded-full border-4 border-dashed border-cyan-500/40 animate-spin" style={{ animationDuration: '40s' }} />

                {/* Center Core Node */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-blue-500">
                  <Users className="w-8 h-8 text-[#006B8F] mb-1" />
                  <span className="text-xs font-[900] text-slate-900 leading-tight">Dedicated Team<br />Model</span>
                </div>

                {/* 6 Surrounding Process Nodes */}
                <div className="absolute top-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><Send className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">You Send Inquiry</span>
                </div>

                <div className="absolute top-1/4 right-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><FileSearch className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Analyze Requirements</span>
                </div>

                <div className="absolute bottom-1/4 right-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><UserCheck className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Suggest Dedicated</span>
                </div>

                <div className="absolute bottom-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><Handshake className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">You Agree & Award</span>
                </div>

                <div className="absolute bottom-1/4 left-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><Zap className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Assign Resource</span>
                </div>

                <div className="absolute top-1/4 left-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#006B8F] text-white flex items-center justify-center shadow-md"><RefreshCw className="w-5 h-5" /></div>
                  <span className="text-[10px] font-bold text-slate-700 mt-1">Daily Updates</span>
                </div>

              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* ============================================================
          6. "The Time & Materials" SECTION (Reference Screenshot 1)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F4F8FA] text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Graphic: Interactive Circular Clock Workflow Diagram (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                
                {/* Outer Dashed Orbit Line */}
                <div className="absolute inset-2 rounded-full border-4 border-dashed border-sky-400/40" />

                {/* Central Clock Face */}
                <div className="relative z-10 w-48 h-48 rounded-full bg-white shadow-2xl border-8 border-[#006B8F] flex items-center justify-center">
                  {/* Outer Clock Arc Accent */}
                  <div className="absolute inset-1 rounded-full border-4 border-sky-200 border-t-[#006B8F] border-r-[#006B8F]" />
                  
                  {/* Clock Hands */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Hour Hand */}
                    <div className="absolute w-1.5 h-12 bg-slate-800 rounded-full origin-bottom -translate-y-6 rotate-[300deg]" />
                    {/* Minute Hand */}
                    <div className="absolute w-1 h-16 bg-[#006B8F] rounded-full origin-bottom -translate-y-8 rotate-[40deg]" />
                    {/* Center Pin */}
                    <div className="w-4 h-4 rounded-full bg-[#006B8F] border-2 border-white shadow-md z-20" />
                  </div>
                </div>

                {/* 7 Clock Radial Step Nodes */}
                {/* 1. Audit Your Requirements (Top 12 o'clock) */}
                <div className="absolute top-0 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[130px] leading-tight font-sans">
                    Audit Your Requirements
                  </span>
                </div>

                {/* 2. Determine Requirements & Prepare Plan (Top Right 2 o'clock) */}
                <div className="absolute top-[18%] right-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[130px] leading-tight font-sans">
                    Determine Requirements & Prepare Plan
                  </span>
                </div>

                {/* 3. Assemble a Team (Right 4 o'clock) */}
                <div className="absolute bottom-[20%] right-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[120px] leading-tight font-sans">
                    Assemble a Team
                  </span>
                </div>

                {/* 4. Agree on Date & Sign Agreement (Bottom 6 o'clock) */}
                <div className="absolute -bottom-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[150px] leading-tight font-sans">
                    Agree on Delivery Date & Sign Agreement
                  </span>
                </div>

                {/* 5. Start Development (Bottom Left 7:30 o'clock) */}
                <div className="absolute bottom-[20%] left-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Code className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[120px] leading-tight font-sans">
                    Start Development
                  </span>
                </div>

                {/* 6. Deployment (Left 9 o'clock) */}
                <div className="absolute top-[45%] left-0 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[110px] leading-tight font-sans">
                    Deployment
                  </span>
                </div>

                {/* 7. Release Project (Top Left 10:30 o'clock) */}
                <div className="absolute top-[15%] left-4 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1.5 text-center max-w-[120px] leading-tight font-sans">
                    Release the Project
                  </span>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6 text-left font-sans">
              <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                The Time & Materials
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                The time and materials model provides great suitability for agile-based frameworks like scrum. This model offers flexibility and pay for the work nature gives the faster ROI.
              </p>

              {/* 5 Checkmarks */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Best for long-run big projects that need to develop from scratch.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Dedicated team of developers is assigned.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Economical as billing on an hourly basis or fixed rates.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Flexible in terms of adding or improving new functionality.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Mostly used in fintech and blockchain technology projects.
                  </span>
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

          </div>
        </Container>
      </section>

      {/* ============================================================
          7. "Fixed Price" SECTION (Reference Screenshot 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left font-sans">
              <h3 className="text-[28px] sm:text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                Fixed Price
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                The best predictable engagement model ascertains the price of flexibility and transparency. The fixed price model is the best model for short-term web development projects with limited and well-defined scope.
              </p>

              {/* 5 Checkmarks */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    It gives an exact figure for the budget planning.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Timelines, scope are well-defined.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Pay the bills as per milestone completion ensuring minimum loss.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    Client approval in case of change in scope ensuring no extension in budget.
                  </span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#006B8F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-[700] text-slate-800 font-sans">
                    As all parameters are well-defined in the initial stage, minimum or zero client involvement.
                  </span>
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

            {/* Right Graphic: Teardrop Loop Process Diagram (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                
                {/* Curved Teardrop SVG Path Ribbon */}
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl overflow-visible">
                  <defs>
                    <linearGradient id="teardropGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#006B8F" />
                    </linearGradient>
                    <linearGradient id="teardropGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4D3800" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                  </defs>

                  {/* Teardrop Loop Ribbon Sections */}
                  <path
                    d="M 200,60 C 270,60 320,130 320,220 C 320,300 270,340 200,340 C 130,340 80,300 80,220 C 80,130 130,60 200,60 Z"
                    fill="none"
                    stroke="url(#teardropGrad1)"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 200,340 C 270,340 320,300 320,220 C 320,170 290,120 250,90"
                    fill="none"
                    stroke="url(#teardropGrad2)"
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                </svg>

                {/* 7 Surrounding Teardrop Node Cards */}
                {/* 1. Your Requirements (Top 12 o'clock - with Human Icon) */}
                <div className="absolute top-0 flex flex-col items-center z-20">
                  <div className="w-8 h-8 rounded-full bg-[#006B8F] text-white flex items-center justify-center mb-1">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[120px] leading-tight font-sans">
                    Your Requirements
                  </span>
                </div>

                {/* 2. Discovery Phase (Top Right 2 o'clock) */}
                <div className="absolute top-[20%] right-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[120px] leading-tight font-sans">
                    Discovery Phase
                  </span>
                </div>

                {/* 3. Requirements Specification (Right 4 o'clock) */}
                <div className="absolute top-[50%] -right-4 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[140px] leading-tight font-sans">
                    Requirements Specification
                  </span>
                </div>

                {/* 4. Project Estimation (Bottom Right 5:30 o'clock) */}
                <div className="absolute bottom-[8%] right-8 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[120px] leading-tight font-sans">
                    Project Estimation
                  </span>
                </div>

                {/* 5. Sign Agreement (Bottom 6:30 o'clock) */}
                <div className="absolute -bottom-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[120px] leading-tight font-sans">
                    Sign Agreement
                  </span>
                </div>

                {/* 6. Start Product Development (Left Bottom 8 o'clock) */}
                <div className="absolute bottom-[25%] left-0 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[140px] leading-tight font-sans">
                    Start Product Development
                  </span>
                </div>

                {/* 7. Release the Product (Left Top 10 o'clock) */}
                <div className="absolute top-[20%] left-2 flex flex-col items-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white text-[#006B8F] shadow-lg border-2 border-[#006B8F] flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-[800] text-slate-800 mt-1 text-center max-w-[120px] leading-tight font-sans">
                    Release the Product
                  </span>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          8. "Process We Follow" SECTION (Reference Screenshot 3)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-slate-50 text-slate-900 font-sans border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              Process We Follow
            </h2>
          </div>

          {/* 8 Process Cards Grid with Connecting Timeline (1:1 Reference Match) */}
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Top Row: Cards 01 - 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 01: Requirement Gathering */}
              <div className="bg-[#F3E8FF] rounded-[16px] p-6 shadow-sm border border-purple-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-200/60 text-purple-700 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">01</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Requirement Gathering
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.
                  </p>
                </div>
              </div>

              {/* Card 02: Designs, Wireframes, & Mockups */}
              <div className="bg-[#DCFCE7] rounded-[16px] p-6 shadow-sm border border-emerald-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-200/60 text-emerald-700 flex items-center justify-center">
                      <PenTool className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">02</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Designs, Wireframes, & Mockups
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.
                  </p>
                </div>
              </div>

              {/* Card 03: Prototype Demo */}
              <div className="bg-[#FFEDD5] rounded-[16px] p-6 shadow-sm border border-orange-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-200/60 text-orange-700 flex items-center justify-center">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">03</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Prototype Demo
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.
                  </p>
                </div>
              </div>

              {/* Card 04: Changes And Confirmation */}
              <div className="bg-[#FEF3C7] rounded-[16px] p-6 shadow-sm border border-amber-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-200/60 text-amber-700 flex items-center justify-center">
                      <Settings className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">04</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Changes And Confirmation
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row: Cards 05 - 08 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 08: SEO */}
              <div className="bg-[#FEF9C3] rounded-[16px] p-6 shadow-sm border border-yellow-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-200/60 text-yellow-700 flex items-center justify-center">
                      <Search className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">08</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    SEO
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.
                  </p>
                </div>
              </div>

              {/* Card 07: Support And Maintenance */}
              <div className="bg-[#F3E8FF] rounded-[16px] p-6 shadow-sm border border-purple-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-200/60 text-purple-700 flex items-center justify-center">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">07</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Support And Maintenance
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement.
                  </p>
                </div>
              </div>

              {/* Card 06: Deployment */}
              <div className="bg-[#E0F2FE] rounded-[16px] p-6 shadow-sm border border-sky-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-200/60 text-sky-700 flex items-center justify-center">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">06</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Deployment
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.
                  </p>
                </div>
              </div>

              {/* Card 05: Development */}
              <div className="bg-[#FCE7F3] rounded-[16px] p-6 shadow-sm border border-pink-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-200/60 text-pink-700 flex items-center justify-center">
                      <Code className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-800/80 font-sans">05</span>
                  </div>
                  <h3 className="text-lg font-[800] text-slate-900 mb-3 font-sans">
                    Development
                  </h3>
                  <p className="text-[13px] text-slate-600 leading-relaxed font-sans font-[400]">
                    With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          9. CTA BANNER & NEWSLETTER SECTION (Reference Screenshot 4)
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Have Any Query Or Confusion Related To These Engagement Models?"
        subtitle="Get in touch with us."
        buttonText="Request A Free Quote"
      />

    </div>
  );
};

export default EngagementModels;
