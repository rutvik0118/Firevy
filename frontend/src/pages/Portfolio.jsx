import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import PortfolioShowcase from '../components/home/PortfolioShowcase';
import CTASection from '../components/home/CTASection';

export const Portfolio = () => {
  return (
    <>
      <SEO
        title="Our Work & Case Studies - Software Solutions Portfolio"
        description="Explore our enterprise software case studies across AI recruitment, telemedicine, e-commerce, real estate, and IoT logistics."
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="PORTFOLIO & CASE STUDIES"
            title="Engineered Products That Create Impact"
            subtitle="Deep dive into our real-world software engineering projects and measured client results."
          />
        </Container>
      </section>

      <PortfolioShowcase />
      <CTASection />
    </>
  );
};

export default Portfolio;
