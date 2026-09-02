import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProcessTimeline from '../components/home/ProcessTimeline';
import EngagementModels from '../components/home/EngagementModels';
import CTASection from '../components/home/CTASection';

export const Process = () => {
  return (
    <>
      <SEO
        title="Our Development Process - 8-Step Agile Software Delivery"
        description="Learn about our transparent 8-step software delivery process, sprint cadences, QA standards, and engagement models."
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="ENGINEERING METHODOLOGY"
            title="Transparent 8-Step Software Lifecycle"
            subtitle="Discover how we transform complex software requirements into battle-tested production platforms through agile sprints."
          />
        </Container>
      </section>

      <ProcessTimeline />
      <EngagementModels />
      <CTASection />
    </>
  );
};

export default Process;
