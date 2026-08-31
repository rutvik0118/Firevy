import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy policy and data protection standards for ${BRAND.name}.`} />
      <section className="py-20 bg-brand-dark text-left">
        <Container className="max-w-4xl space-y-6 text-slate-300">
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last updated: January 2026</p>

          <p>
            At {BRAND.name}, we take your privacy seriously. This Privacy Policy details how we collect, use, and protect your personal and enterprise information.
          </p>

          <h3 className="text-xl font-bold text-white pt-4">1. Data We Collect</h3>
          <p>
            We collect information provided directly by you when submitting project inquiries, job applications, or scheduling technical consultations (such as your name, business email, phone number, and project details).
          </p>

          <h3 className="text-xl font-bold text-white pt-4">2. How We Use Data</h3>
          <p>
            We use your contact data solely to communicate regarding project inquiries, execute NDAs, deliver software proposals, and send administrative updates. We never sell your personal data to third parties.
          </p>

          <h3 className="text-xl font-bold text-white pt-4">3. Security & NDA</h3>
          <p>
            All submitted project details are protected under bank-grade encryption protocols and strict Non-Disclosure Agreements (NDA).
          </p>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
