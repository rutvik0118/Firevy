import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import ServicesSection from '../components/home/ServicesSection';
import EngagementModelsSection from '../components/home/EngagementModelsSection';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import CTASection from '../components/home/CTASection';
import { ChevronRight, ArrowRight, Code2, Smartphone, Cloud, Database, Cpu, ShieldCheck } from 'lucide-react';
import BRAND from '../constants/brand';

export const Services = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Our Software Services | ${BRAND.name}`}
        description="Explore our full spectrum of software services: Web Development, Mobile Apps, AI & Machine Learning, Cloud Infrastructure, DevOps & QA."
        canonical="/services"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">FULL-CYCLE SOFTWARE DEVELOPMENT</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Comprehensive IT & Enterprise Software Solutions
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                We deliver robust digital products tailored to your operational needs — from custom web & mobile engineering to AI integration, cloud modernization, and dedicated agile squads.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-[700] text-[14px] hover:bg-cyan-500/30 transition-all"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-6 rounded-[16px] bg-white/10 border border-white/20 backdrop-blur-md text-white space-y-4">
                <div className="text-sm font-bold text-cyan-300 uppercase tracking-wider">ENGINEERING STANDARDS</div>
                <ul className="space-y-2.5 text-xs text-blue-100">
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>100% On-Time Agile Sprint Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>SOC2 & ISO 9001:2015 Compliant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Direct Senior Developer Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Zero IP Transfer Delays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Primary Interactive Services Showcase Grid */}
      <ServicesSection />

      {/* 10-Pill Premium Services Grid (Sapphire Style) */}
      <PremiumServicesGrid />

      {/* Flexible Engagement Models Section */}
      <EngagementModelsSection />

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Services;
