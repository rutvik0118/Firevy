import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import TechShowcaseTabbed from '../components/home/TechShowcaseTabbed';
import TechEcosystem from '../components/home/TechEcosystem';
import CTASection from '../components/home/CTASection';
import { ChevronRight, ArrowRight, Layers, Cpu, Database, Cloud } from 'lucide-react';
import BRAND from '../constants/brand';

export const Technologies = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Technologies & Frameworks | ${BRAND.name}`}
        description="Discover the modern frameworks, cloud architectures, AI models, and databases we leverage to build high-performance enterprise applications."
        canonical="/technologies"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Technologies</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">ENTERPRISE TECH ECOSYSTEM</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Modern Frameworks & Cloud Architecture Stack
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                We engineer scalable, secure, and lightning-fast digital solutions by leveraging industry-leading modern programming languages, cloud providers, and AI foundations.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Discuss Your Tech Stack</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-[700] text-[14px] hover:bg-cyan-500/30 transition-all"
                >
                  <span>Explore Case Studies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <Cloud className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">Cloud Native</div>
                <div className="text-[11px] text-blue-200">AWS, GCP, Azure</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <Cpu className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">AI & ML</div>
                <div className="text-[11px] text-blue-200">OpenAI, PyTorch</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <Layers className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">Full-Stack</div>
                <div className="text-[11px] text-blue-200">React, Node, Go</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <Database className="w-6 h-6 text-cyan-300 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">Modern DB</div>
                <div className="text-[11px] text-blue-200">PostgreSQL, Redis</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Tabbed Tech Showcase (Sapphire Style) */}
      <TechShowcaseTabbed />

      {/* Tech Architecture Ecosystem Overview */}
      <TechEcosystem />

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Technologies;
