import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ServicesSection from '../components/home/ServicesSection';
import EngagementModels from '../components/home/EngagementModels';
import CTASection from '../components/home/CTASection';

export const Services = () => {
  return (
    <>
      <SEO
        title="Services - Web, Mobile, AI, Cloud & Software Engineering"
        description="Explore our full spectrum of software services: Web Development, Mobile Apps, AI & Machine Learning, Cloud Infrastructure, DevOps & QA."
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="OUR SOFTWARE SERVICES"
            title="Comprehensive IT & Digital Solutions"
            subtitle="We provide end-to-end software product development, from initial architecture discovery to cloud deployment and ongoing optimization."
          />
        </Container>
      </section>

      <ServicesSection />
      <EngagementModels />
      <CTASection />
    </>
  );
};

export default Services;
