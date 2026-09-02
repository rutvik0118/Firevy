import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import IndustriesGrid from '../components/home/IndustriesGrid';
import CTASection from '../components/home/CTASection';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import BRAND from '../constants/brand';

export const Industries = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Industries & Domain Expertise | ${BRAND.name}`}
        description={`Explore how ${BRAND.name} delivers compliant, domain-specific software solutions for Healthcare, Finance, E-commerce, Logistics, Real Estate and more.`}
        canonical="/industries"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Industries</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">DOMAIN-SPECIFIC ENGINEERING</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Specialized Domain Software Solutions
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                We combine deep vertical domain expertise with modern software engineering to build compliant, high-availability platforms for regulated industries.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Request Domain Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 rounded-[16px] bg-white/10 border border-white/20 backdrop-blur-md text-white space-y-4">
                <div className="text-sm font-bold text-cyan-300 uppercase tracking-wider">REGULATORY COMPLIANCE</div>
                <ul className="space-y-2.5 text-xs text-blue-100">
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>HIPAA, HL7 & FDA Compliant Healthcare</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>PCI-DSS Level 1 Fintech Platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>SOC2 Type II Certified Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>GDPR & CCPA Data Privacy Standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <IndustriesGrid />

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Industries;
