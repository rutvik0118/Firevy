import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';
import { ChevronRight } from 'lucide-react';

export const Terms = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO title={`Terms of Service | ${BRAND.name}`} description={`Terms of service for ${BRAND.name}.`} canonical="/terms" />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-14 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Terms of Service</span>
          </div>

          <h1 className="text-[32px] sm:text-[40px] font-[800] text-white tracking-tight leading-tight">
            Terms of Service & Engagement
          </h1>
          <p className="text-[14px] text-blue-100 mt-2 font-normal">
            Last updated: January 2026 • Governs all client and partner contracts
          </p>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F8FA] text-left font-sans">
        <Container className="max-w-4xl">
          <div className="p-8 sm:p-12 rounded-[16px] bg-white border border-slate-200 shadow-sm space-y-6 text-slate-700 text-[14px] leading-relaxed">
            <p className="text-[16px] text-slate-900 font-medium leading-relaxed">
              By accessing or using the website and custom software development services of {BRAND.name}, you agree to comply with and be bound by these Terms of Service.
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">1. Intellectual Property & 100% IP Ownership</h2>
              <p>
                All custom software source code, UI/UX designs, architecture blueprints, database schemas, and digital assets engineered for clients under agreed Statements of Work (SOW) become the exclusive intellectual property of the client upon final milestone payment.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">2. Service Level Agreements (SLAs) & Milestones</h2>
              <p>
                Specific uptime, code warranty, post-deployment support, and SLA commitments are governed by individual Master Services Agreements (MSA) signed prior to project kick-off.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">3. Non-Disclosure & Mutual Confidentiality</h2>
              <p>
                Both parties agree to treat proprietary algorithms, business roadmaps, customer data, and technical requirements with strict confidentiality under bilateral NDA terms.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Terms;
