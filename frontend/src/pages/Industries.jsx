import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IndustriesGrid from '../components/home/IndustriesGrid';
import CTASection from '../components/home/CTASection';
import BRAND from '../constants/brand';

export const Industries = () => {
  return (
    <>
      <SEO
        title="Industries Served - Specialized Domain Software Solutions"
        description={`Explore how ${BRAND.name} delivers compliant, domain-specific software solutions for Healthcare, Finance, E-commerce, Logistics, Real Estate and more.`}
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="INDUSTRIES & DOMAIN EXPERTISE"
            title="Industry-Specific Software Solutions"
            subtitle="We blend technical software engineering with deep domain understanding across major global industry sectors."
          />
        </Container>
      </section>

      <IndustriesGrid />
      <CTASection />
    </>
  );
};

export default Industries;
