import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import TechEcosystem from '../components/home/TechEcosystem';
import CTASection from '../components/home/CTASection';

export const Technologies = () => {
  return (
    <>
      <SEO
        title="Technologies & Frameworks - Enterprise Tech Ecosystem"
        description="Discover the battle-tested technologies, frameworks, databases, cloud platforms, and AI models we utilize."
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="TECHNOLOGY ARCHITECTURE"
            title="Modern Frameworks & Enterprise Stack"
            subtitle="We continuously evaluate and adopt top-tier frameworks to build software systems that deliver speed, resilience, and security."
          />
        </Container>
      </section>

      <TechEcosystem />
      <CTASection />
    </>
  );
};

export default Technologies;
