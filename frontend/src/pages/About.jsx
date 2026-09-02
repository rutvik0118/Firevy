import React from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';
import BRAND from '../constants/brand';
import { Target, Award, Globe2, ShieldCheck, Heart } from 'lucide-react';

export const About = () => {
  const values = [
    { icon: Target, title: 'Client Centricity', desc: 'Every line of code and architectural decision is aligned with our client business outcomes.' },
    { icon: Award, title: 'Technical Mastery', desc: 'We maintain strict engineering standards, continuous learning, and clean code practices.' },
    { icon: ShieldCheck, title: 'Transparency & Trust', desc: 'Zero hidden costs, weekly sprint demos, and direct Slack communication with developers.' },
    { icon: Heart, title: 'Passion for Innovation', desc: 'We proactively research emerging technologies like LLMs and WebAssembly to give clients a competitive edge.' }
  ];

  return (
    <>
      <SEO
        title="About Us - Digital Transformation & Software Engineering"
        description={`Learn about ${BRAND.name} vision, enterprise software engineering capabilities, leadership values, and track record.`}
      />

      {/* Hero Header */}
      <section className="py-20 bg-tech-grid relative overflow-hidden text-center">
        <Container>
          <SectionHeading
            badge={`ABOUT ${BRAND.name.toUpperCase()}`}
            title="Engineering Digital Experiences That Create Impact"
            subtitle="We are a global team of senior developers, software architects, UI/UX designers, and cloud specialists dedicated to helping businesses outpace their market competition."
          />
        </Container>
      </section>

      <StatsSection />

      {/* Vision & Mission */}
      <section className="py-24 bg-brand-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-8 rounded-3xl bg-brand-card/70 border border-gray-800 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">OUR MISSION</span>
              <h3 className="text-2xl font-bold text-white">Democratize Enterprise-Grade Technology</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To empower high-growth startups and established global enterprises with resilient, secure, and ultra-fast software platforms that turn strategic vision into sustained competitive advantage.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-card/70 border border-gray-800 space-y-4 text-left">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">OUR VISION</span>
              <h3 className="text-2xl font-bold text-white">To Be The Premier Engineering Partner</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To stand as the world's most trusted partner for full-stack software development, cloud infrastructure optimization, and artificial intelligence integration.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-card/30">
        <Container>
          <SectionHeading
            badge="OUR GUIDING PRINCIPLES"
            title="Core Values Driving Engineering Excellence"
            subtitle="The fundamental beliefs that guide our technical decisions and client partnerships every day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-brand-card/80 border border-gray-800 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
};

export default About;
