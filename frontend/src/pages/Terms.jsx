import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';

export const Terms = () => {
  return (
    <>
      <SEO title="Terms of Service" description={`Terms of service for ${BRAND.name}.`} />
      <section className="py-20 bg-brand-dark text-left">
        <Container className="max-w-4xl space-y-6 text-slate-300">
          <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs text-slate-500">Last updated: January 2026</p>

          <p>
            By accessing or using the website and software services of {BRAND.name}, you agree to comply with these terms of service.
          </p>

          <h3 className="text-xl font-bold text-white pt-4">1. Intellectual Property</h3>
          <p>
            All custom software code, designs, and artifacts produced for clients under paid agreements remain the exclusive intellectual property of the client upon final milestone payment.
          </p>

          <h3 className="text-xl font-bold text-white pt-4">2. Service Level Agreements (SLAs)</h3>
          <p>
            Specific uptime, maintenance, and support commitments are governed by individual Master Services Agreements (MSA) signed prior to project execution.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Terms;
