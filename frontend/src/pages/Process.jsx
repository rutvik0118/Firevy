import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import ProcessTimeline from '../components/home/ProcessTimeline';
import EngagementModelsSection from '../components/home/EngagementModelsSection';
import CTASection from '../components/home/CTASection';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import BRAND from '../constants/brand';

export const Process = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Our Development Process | ${BRAND.name}`}
        description="Learn about our transparent 8-step software delivery process, sprint cadences, QA standards, and engagement models."
        canonical="/process"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Process</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">TRANSPARENT ENGINEERING LIFECYCLE</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Predictable, Agile 8-Step Software Delivery Process
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                We eliminate project risks through disciplined agile sprint cadences, automated CI/CD validation gates, and weekly transparent milestone demos.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">2-Week</div>
                <div className="text-[11px] text-blue-200">Sprint Cadence</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">100%</div>
                <div className="text-[11px] text-blue-200">Code Quality Gate</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">Daily</div>
                <div className="text-[11px] text-blue-200">Standup Updates</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">0%</div>
                <div className="text-[11px] text-blue-200">Hidden Costs</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Snake-Flow Work Process Grid (Pixel Perfect Sapphire Match) */}
      <WorkProcessGrid />

      {/* Detailed Step-by-Step Delivery Timeline */}
      <ProcessTimeline />

      {/* Flexible Engagement Models Section */}
      <EngagementModelsSection />

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Process;
