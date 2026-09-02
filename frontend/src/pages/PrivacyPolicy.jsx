import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO title={`Privacy Policy | ${BRAND.name}`} description={`Privacy policy and data protection standards for ${BRAND.name}.`} canonical="/privacy-policy" />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-14 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-4 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Privacy Policy</span>
          </div>

          <h1 className="text-[32px] sm:text-[40px] font-[800] text-white tracking-tight leading-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="text-[14px] text-blue-100 mt-2 font-normal">
            Last updated: January 2026 • Effective for all global operations
          </p>
        </Container>
      </section>

      <section className="py-16 bg-[#F4F8FA] text-left font-sans">
        <Container className="max-w-4xl">
          <div className="p-8 sm:p-12 rounded-[16px] bg-white border border-slate-200 shadow-sm space-y-6 text-slate-700 text-[14px] leading-relaxed">
            <p className="text-[16px] text-slate-900 font-medium leading-relaxed">
              At {BRAND.name}, we take your privacy and corporate data confidentiality with the highest level of rigor. This Privacy Policy details how we collect, safeguard, and process your personal and enterprise information.
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">1. Data We Collect</h2>
              <p>
                We collect technical and contact information provided directly by you when submitting project inquiries, job applications, or scheduling technical consultations (such as your full name, business email, phone number, company name, and project scope documents).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">2. How We Use Data</h2>
              <p>
                We use your contact data solely to communicate regarding project inquiries, execute Non-Disclosure Agreements (NDAs), prepare software proposals, and send administrative updates. We never rent, share, or sell your personal or business data to third parties.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">3. Bank-Grade Security & Non-Disclosure</h2>
              <p>
                All submitted project details, technical documentation, and intellectual property are protected under bank-grade TLS encryption protocols and strict Non-Disclosure Agreements (NDA).
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h2 className="text-[20px] font-[700] text-slate-900">4. Contact Our Data Protection Officer</h2>
              <p>
                If you have questions regarding our data privacy compliance, please email our legal team at{' '}
                <a href={`mailto:${BRAND.contact.email}`} className="text-[#006B8F] font-[600] underline">
                  {BRAND.contact.email}
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
