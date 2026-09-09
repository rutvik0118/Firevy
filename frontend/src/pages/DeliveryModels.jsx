import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import { Link } from 'react-router-dom';
import BRAND from '../constants/brand';
import TrustRecognitionBanner from '../components/home/TrustRecognitionBanner';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import {
  ArrowRight, Users, CheckCircle2, Globe, ShieldCheck, Clock, DollarSign, Award, Layers, Zap, UserCheck, MessageSquare
} from 'lucide-react';

export const DeliveryModels = () => {
  const [activeTab, setActiveTab] = useState('offshore');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Explore Our Delivery Model | Flexible Project Delivery | ${BRAND.name}`}
        description="The Delivery Model defines the way of project delivery depending on manpower resources. firevy.co offers flexible Onsite, Offshore, and Hybrid delivery models."
        canonical="/company/delivery-models"
      />

      {/* ============================================================
          1. HERO SECTION ("Explore Our Delivery Model")
          ============================================================ */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#F4F8FA] border-b border-slate-200/60 relative overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-[34px] sm:text-[44px] md:text-[50px] font-[800] text-slate-900 leading-[1.18] tracking-tight font-sans">
                Explore Our Delivery Model
              </h1>

              <p className="text-[15px] sm:text-[16px] md:text-[17px] text-slate-600 leading-relaxed font-[400] max-w-2xl font-sans">
                The Delivery Model Defines The Way Of Project Delivery Depending On The Location Of Manpower Resources. {BRAND.name} Offers Flexible And Efficient Delivery Models That Ensure Only The Success Of The Project.
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

            {/* Right Column: 3D Dashboard & Team Delivery Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-[480px] h-[340px] md:h-[380px] flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full bg-blue-400/10 blur-2xl animate-pulse" />

                {/* SVG 3D Dashboard & Team Illustration */}
                <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-2xl overflow-visible">
                  <defs>
                    <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="chartCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#0284C7" />
                    </linearGradient>
                    <linearGradient id="chartYellow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>
                  </defs>

                  {/* Screen Frame */}
                  <rect x="150" y="80" width="280" height="190" rx="16" fill="#F8FAFC" stroke="#3B82F6" strokeWidth="4" filter="drop-shadow(0 15px 15px rgba(0,0,0,0.1))" />
                  <rect x="160" y="90" width="260" height="170" rx="10" fill="url(#dashGradient)" />

                  {/* Charts inside screen */}
                  <rect x="180" y="140" width="22" height="90" rx="4" fill="url(#chartYellow)" />
                  <rect x="210" y="110" width="22" height="120" rx="4" fill="url(#chartCyan)" />
                  <rect x="240" y="160" width="22" height="70" rx="4" fill="#FFFFFF" opacity="0.8" />

                  {/* Donut Chart Circles */}
                  <circle cx="330" cy="170" r="35" fill="none" stroke="#38BDF8" strokeWidth="12" strokeDasharray="160 50" />
                  <circle cx="330" cy="170" r="35" fill="none" stroke="#FBBF24" strokeWidth="12" strokeDasharray="50 160" strokeDashoffset="-160" />

                  {/* Floating Analytics Clock */}
                  <circle cx="120" cy="110" r="26" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="3" shadow="lg" />
                  <line x1="120" y1="110" x2="120" y2="95" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
                  <line x1="120" y1="110" x2="132" y2="110" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

                  {/* 3D Character 1 (Client Lead - Male standing left) */}
                  <g transform="translate(180, 200)">
                    <circle cx="20" cy="20" r="14" fill="#0284C7" />
                    <path d="M 5,60 C 5,38 35,38 35,60 Z" fill="#1D4ED8" />
                    <rect x="12" y="60" width="6" height="40" fill="#0F172A" />
                    <rect x="22" y="60" width="6" height="40" fill="#0F172A" />
                  </g>

                  {/* 3D Character 2 (Project Manager - Standing right with briefcase) */}
                  <g transform="translate(280, 210)">
                    <circle cx="20" cy="20" r="14" fill="#475569" />
                    <path d="M 5,60 C 5,38 35,38 35,60 Z" fill="#334155" />
                    <rect x="12" y="60" width="6" height="40" fill="#0F172A" />
                    <rect x="22" y="60" width="6" height="40" fill="#0F172A" />
                    {/* Briefcase */}
                    <rect x="36" y="52" width="18" height="14" rx="2" fill="#78350F" />
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
      <section className="py-8 bg-white border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="flex items-center justify-between gap-6 opacity-70 grayscale hover:grayscale-0 transition-all flex-wrap">
            <span className="text-base font-black text-blue-900 tracking-wider">Almarai</span>
            <span className="text-base font-black text-slate-800 tracking-tight">ORIENT CEMENT</span>
            <span className="text-base font-black text-[#006B8F] tracking-tighter">AMERICAN EXPRESS</span>
            <span className="text-base font-black text-blue-700">Alembic</span>
            <span className="text-base font-black text-red-600">HONDA</span>
            <span className="text-base font-black text-slate-900">LafargeHolcim</span>
            <span className="text-base font-black text-red-700">Cummins</span>
          </div>
        </Container>
      </section>

      {/* ============================================================
          3. "To Maximize Your Business Potential And Drive Profitability!"
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
              To Maximize Your Business Potential And Drive Profitability!
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Diagram: 4-Petal Delivery Model Flower Graphic (1:1 Reference Match) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">

                {/* Top Circle: Client Side */}
                <div className="absolute top-0 w-44 h-44 rounded-full bg-[#1E40AF] text-white flex items-start justify-center pt-8 shadow-xl">
                  <span className="text-base font-[800] tracking-tight font-sans">Client Side</span>
                </div>

                {/* Left Circle: Offshore */}
                <div className="absolute left-0 w-44 h-44 rounded-full bg-[#0284C7] text-white flex items-center justify-start pl-7 shadow-xl">
                  <span className="text-base font-[800] tracking-tight font-sans">Offshore</span>
                </div>

                {/* Right Circle: Mix */}
                <div className="absolute right-0 w-44 h-44 rounded-full bg-[#2563EB] text-white flex items-center justify-end pr-9 shadow-xl">
                  <span className="text-base font-[800] tracking-tight font-sans">Mix</span>
                </div>

                {/* Bottom Circle: Partnership */}
                <div className="absolute bottom-0 w-44 h-44 rounded-full bg-[#1D4ED8] text-white flex items-end justify-center pb-8 shadow-xl">
                  <span className="text-base font-[800] tracking-tight font-sans">Partnership</span>
                </div>

                {/* Center Core Circle: Delivery Model */}
                <div className="relative z-10 w-36 h-36 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center text-center p-3 shadow-2xl border-4 border-slate-100">
                  <span className="text-lg font-[900] text-slate-900 leading-tight font-sans">
                    Delivery<br />Model
                  </span>
                </div>

              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-lg sm:text-xl font-[800] text-slate-900 leading-snug font-sans">
                'Start the success journey with our best-fit delivery model and be sure only the best product is delivered'
              </h3>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                {BRAND.name} works on three delivery models, each of the models is the best for the dedicated criteria. With our efficient models, we understand our client's diversified requirements, their fast delivery needs. Our delivery models are scalable, secure solutions for onsite, offshore, and hybrid project requirements ensuring a good return on investments. Our consistent high-end performance assures the rest!
              </p>

              <p className="text-[15px] text-slate-600 leading-relaxed font-sans font-[400]">
                Every project has its own requirements and they or the support require for it changes over time. {BRAND.name} solution provides a rational approach for all types of project requirements and fulfills the dynamic business needs.
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
          4. "Offshore Delivery Model" SECTION (Images 3 & 4)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F4F8FA] text-slate-900 font-sans relative border-b border-slate-200/80">
        <Container>

          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              Offshore Delivery Model
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              As the name suggests, project developments and milestones are achieved at our offshore development location. As this model requires less engagement of the client, all major activities like UI design, programming, testing, deployment, and support are managed from our dedicated software center. It is the best option for projects with a well-defined scope, from inception to completion.
            </p>
          </div>

          {/* Interactive Node Architecture Diagram (Image 3) */}
          <div className="max-w-4xl mx-auto mb-16 py-8">
            <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">

              {/* Top Left: Client Manager (Cyan Node) */}
              <div className="absolute top-2 left-6 sm:left-16 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0284C7] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xs font-[800] text-center px-2">Client Manager</span>
                </div>
              </div>

              {/* Top Right: Client Team (Blue Node) */}
              <div className="absolute top-2 right-6 sm:right-16 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#2563EB] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xs font-[800] text-center px-2">Client Team</span>
                </div>
              </div>

              {/* Center: Offshore Lead (Dark Brown Node) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#453215] text-white flex flex-col items-center justify-center shadow-2xl border-4 border-amber-200">
                  <Users className="w-9 h-9 sm:w-11 sm:h-11 mb-1 text-amber-300" />
                  <span className="text-xs sm:text-sm font-[900] text-center px-2 text-amber-100">Offshore Lead</span>
                </div>
              </div>

              {/* Bottom Left: Onsite Lead (Blue Node) */}
              <div className="absolute bottom-2 left-6 sm:left-16 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0284C7] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xs font-[800] text-center px-2">Onsite Lead</span>
                </div>
              </div>

              {/* Bottom Right: Offshore Team (Blue Node) */}
              <div className="absolute bottom-2 right-6 sm:right-16 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#2563EB] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xs font-[800] text-center px-2">Offshore Team</span>
                </div>
              </div>

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
                <line x1="200" y1="80" x2="600" y2="80" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="200" y1="80" x2="400" y2="200" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="600" y1="80" x2="400" y2="200" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="200" y1="80" x2="200" y2="320" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="200" y1="320" x2="400" y2="200" stroke="#0284C7" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="600" y1="320" x2="400" y2="200" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4" />
              </svg>

            </div>
          </div>

          {/* 6 Benefit Cards Grid (Image 4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 text-left font-sans">

            {/* Card 1: Low Cost */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Low Cost</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Low labor cost reduces the overall project budget significantly.
              </p>
            </div>

            {/* Card 2: Faster Response */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Faster Response</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Responsiveness to changes in client's needs is faster in the offshore delivery model.
              </p>
            </div>

            {/* Card 3: Perfect Outcomes */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Perfect Outcomes</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                The client will get almost the same outcome as that delivered by in-house staff.
              </p>
            </div>

            {/* Card 4: Round The Clock Support */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Round The Clock Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                We offer 24*7 support that stops the client from being tangled in timeline differences.
              </p>
            </div>

            {/* Card 5: Exact Estimated Cost */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Exact Estimated Cost Of The Project</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                {BRAND.name} estimation of the project is near to accurate providing economic stability.
              </p>
            </div>

            {/* Card 6: No Extra Expenses */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">No Extra Expenses</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Forget the expenses of infrastructure expansion to accommodate onsite.
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>

        </Container>
      </section>

      {/* ============================================================
          5. "Onsite Delivery Model" SECTION (Images 1 & 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans relative border-b border-slate-200/80">
        <Container>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              Onsite Delivery Model
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              In this delivery model, our expert development engineers are employed at the client's location. They interact with the client's in-house team to accomplish various software development activities. This model is best for short-term projects or the projects that need re-engineering as the client need to bear various cost overheads.
            </p>
          </div>

          {/* Connected Node Architecture Diagram (Image 1) */}
          <div className="max-w-3xl mx-auto mb-14 p-6 sm:p-10 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">

              {/* Onsite Project Manager */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0284C7] text-white flex flex-col items-center justify-center shadow-xl">
                  <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-[11px] font-[800] text-center px-1">Onsite Project Manager</span>
                </div>
              </div>

              {/* Circular Exchange Arrow */}
              <div className="text-slate-400 font-extrabold text-2xl flex items-center justify-center">
                <span className="text-3xl font-black text-[#0284C7]">⇄</span>
              </div>

              {/* Onsite Team */}
              <div className="flex flex-col items-center">
                <div className="w-26 h-26 sm:w-30 sm:h-30 rounded-full bg-[#453215] text-white flex flex-col items-center justify-center shadow-2xl border-4 border-amber-200">
                  <Users className="w-9 h-9 sm:w-11 sm:h-11 mb-1 text-amber-300" />
                  <span className="text-xs font-[900] text-center px-1 text-amber-100">Onsite Team</span>
                </div>
              </div>

              {/* Direction Arrow */}
              <div className="text-slate-400 font-extrabold text-2xl flex items-center justify-center">
                <span className="text-3xl font-black text-[#2563EB]">→</span>
              </div>

              {/* Client */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#2563EB] text-white flex flex-col items-center justify-center shadow-xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xs font-[800] text-center px-1">Client</span>
                </div>
              </div>

            </div>
          </div>

          {/* 5 Benefit Cards Grid (Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 text-left font-sans">

            {/* Card 1: Effective Communication */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Effective Communication</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                As clients can approach the development team members easily, regular face-to-face communication is possible. This avoids the miscommunication chances because of the time and distance gap.
              </p>
            </div>

            {/* Card 2: On-Hand Information */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">On-Hand Information</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Both client and vendor development teams are on the same page so both participants get first-hand information from their employees and can learn about the progress of the project.
              </p>
            </div>

            {/* Card 3: Rapid Development */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Rapid Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Time, energy, and cost is saved as both our development team and the client's in-house team are present in the same location that leads to the rapid development.
              </p>
            </div>

            {/* Card 4: Minimal Project Changes */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Minimal Project Changes</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Fewer possibilities of miscommunication lead to negligible changes required at later stages of the project.
              </p>
            </div>

            {/* Card 5: Protect IP */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Protect IP</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                When there are major security concerns, this model works best as all development happens at the client so the client's IP is secure.
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. "Hybrid Delivery Model" SECTION (Images 3 & 4)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-[#F4F8FA] text-slate-900 font-sans relative border-b border-slate-200/80">
        <Container>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
              Hybrid Delivery Model
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-sans font-[400] max-w-3xl mx-auto">
              The hybrid delivery model offers benefits of both onsite and offshore delivery models. This model ensures the application's efficient optimization and cost-effectiveness. The most popular model divides the work between offshore and onsite teams. The onsite team offers required support and solutions for business strategy-related issues and the offshore team looks into the development. Our onsite members are proficient in requirement analysis, testing and deployment whereas offshore team members handle all types of development issues.
            </p>
          </div>

          {/* Hybrid Process Flowchart Diagram (Image 3) */}
          <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-10 border border-slate-200 rounded-2xl bg-white shadow-sm">

            {/* ONSITE LEVEL */}
            <div className="border-b border-dashed border-slate-300 pb-6 mb-6">
              <span className="text-xs font-[900] text-slate-500 uppercase tracking-widest block mb-4 text-left">ONSITE LEVEL</span>
              <div className="flex flex-wrap items-center justify-around gap-4">
                <div className="px-5 py-2.5 rounded-lg bg-[#0284C7] text-white text-xs font-[800] shadow">Project Scope</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#0284C7] text-white text-xs font-[800] shadow">Analysis</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#0284C7] text-white text-xs font-[800] shadow">Acceptance Testing</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#0284C7] text-white text-xs font-[800] shadow">Deployment</div>
              </div>
            </div>

            {/* OFFSHORE LEVEL */}
            <div>
              <span className="text-xs font-[900] text-slate-500 uppercase tracking-widest block mb-4 text-left">OFFSHORE LEVEL</span>
              <div className="flex flex-wrap items-center justify-around gap-4">
                <div className="px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-[800] shadow">High Level Design</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-[800] shadow">Development / Unit Testing</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-[800] shadow">System Testing</div>
                <span className="text-slate-400">→</span>
                <div className="px-5 py-2.5 rounded-lg bg-[#453215] text-amber-100 text-xs font-[800] shadow">Maintenance</div>
              </div>
            </div>

          </div>

          {/* 6 Benefit Cards Grid (Image 4) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 text-left font-sans">

            {/* Card 1: Optimum Productivity */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Optimum Productivity</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                As resources at both ends are used at optimum scale, the result is heightened productivity.
              </p>
            </div>

            {/* Card 2: Direct Communication */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Direct Communication</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Client can have one-to-one communication with the onsite team & this communication is propagated to the offshore team.
              </p>
            </div>

            {/* Card 3: Best For Long Term Projects */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Best For Long Term Projects</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                This model works for long-term projects & in which the client doesn't want a large onsite team reducing the cost.
              </p>
            </div>

            {/* Card 4: Best Resources */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Best Resources</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                The hybrid model implements the best resources, latest technologies & can avail the offshore infrastructure within the project budget.
              </p>
            </div>

            {/* Card 5: Economically Fit */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Economically Fit</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Most of the development work is performed at our offshore center so it will help to reduce the cost significantly.
              </p>
            </div>

            {/* Card 6: Protect IP */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-[800] text-slate-900 mb-2 font-sans">Protect IP</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-[400]">
                Collaborate with us & feel the empowerment of digitalization by maximizing your business.
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
            >
              <span>Get Free Quote</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          7. OUR PREMIUM SERVICES (1:1 Reference Match for Image 1)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          8. BRAND LOGOS GRID ("Trusted By The World's Leading Brands")
          ============================================================ */}
      <BrandLogoGrid />

      {/* ============================================================
          9. AWARDS RIBBON BANNER ("Proud To Have Picked These Up Along The Way")
          ============================================================ */}
      <TrustRecognitionBanner />

      {/* ============================================================
          10. CLIENT REVIEWS CAROUSEL ("What Our Clients Say")
          ============================================================ */}
      <ClientReviewsDarkSection />

      {/* ============================================================
          11. CONTACT CTA & NEWSLETTER SUBSCRIBE SECTION
          ============================================================ */}
      <WorkTogetherNewsletterSection
        title="Need to know more about our offerings? Contact us today!"
        subtitle="Our delivery models are specific, as client managers discuss their experience, giving partners ideas to harness their full potential."
        buttonText="Contact-Us"
      />

    </div>
  );
};

export default DeliveryModels;
