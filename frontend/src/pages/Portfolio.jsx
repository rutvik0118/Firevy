import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import DigitalTransformationCaseStudies from '../components/home/DigitalTransformationCaseStudies';
import CTASection from '../components/home/CTASection';
import { ChevronRight, ArrowRight, Trophy, Star, CheckCircle2 } from 'lucide-react';
import BRAND from '../constants/brand';

export const Portfolio = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Our Work & Case Studies | ${BRAND.name}`}
        description="Explore our enterprise software case studies across AI recruitment, automotive telematics, healthcare, e-commerce, real estate, and IoT logistics."
        canonical="/portfolio"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Our Work</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">SUCCESS STORIES & CASE STUDIES</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Engineered Digital Solutions That Deliver Measurable ROI
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                Explore our featured web, mobile, cloud, and AI engineering projects across Fortune 500 enterprises, tech unicorns, and high-growth startups.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">300+</div>
                <div className="text-[11px] text-blue-200">Projects Delivered</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">98%</div>
                <div className="text-[11px] text-blue-200">Client Retention</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">15+</div>
                <div className="text-[11px] text-blue-200">Years Experience</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">4.9★</div>
                <div className="text-[11px] text-blue-200">Clutch Rating</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sapphire Signature Digital Transformation Slider */}
      <DigitalTransformationCaseStudies />

      {/* Main Filterable Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Portfolio;
