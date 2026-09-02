import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CTASection from '../components/home/CTASection';
import BRAND from '../constants/brand';
import { Target, Award, Globe2, ShieldCheck, Heart, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Client Centricity',
      desc: 'Every line of code, sprint milestone, and architectural decision is aligned with our client business outcomes and growth ROI.'
    },
    {
      icon: Award,
      title: 'Technical Rigor',
      desc: 'We maintain strict software engineering standards, continuous code review cadences, and clean scalable architecture patterns.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity & Transparency',
      desc: 'Zero hidden surprises, weekly milestone demos, direct Slack communication with senior engineers, and full IP ownership.'
    },
    {
      icon: Heart,
      title: 'Continuous Innovation',
      desc: 'We proactively research emerging technologies like AI/LLMs, WebAssembly, and edge cloud architectures to keep clients ahead.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`About Us | ${BRAND.name} Software Solutions`}
        description={`Learn about ${BRAND.name} vision, enterprise software engineering capabilities, leadership values, and global track record.`}
        canonical="/about"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">ABOUT {BRAND.name.toUpperCase()}</span>
              </div>
              <h1 className="text-[32px] sm:text-[40px] font-[800] text-white tracking-tight leading-tight">
                Engineering Digital Experiences That Create Real Impact
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal">
                We are a global software solutions and digital transformation company dedicated to engineering mission-critical web, mobile, cloud, and AI platforms for high-growth enterprises worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-[700] text-[14px] hover:bg-cyan-500/30 transition-all"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[16px] overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Numbers & Statistics */}
      <AboutKeyMetrics />

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-[#F4F8FA] border-y border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
              Our Vision & Core Mission
            </h2>
            <p className="text-[18px] text-slate-600 font-[400] mt-2">
              Transforming ambitious business ideas into resilient, scalable digital reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
            <div className="p-8 rounded-[16px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-mono font-[700] text-[#006B8F] uppercase tracking-wider block mb-3">
                  OUR MISSION
                </span>
                <h3 className="text-[22px] font-[700] text-slate-900 mb-3">
                  Democratize Enterprise Software Technology
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-[400]">
                  To empower high-growth startups and established global enterprises with resilient, secure, and ultra-fast software platforms that turn strategic vision into sustained competitive market advantage.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Client Commitment & Delivery Predictability</span>
              </div>
            </div>

            <div className="p-8 rounded-[16px] bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-mono font-[700] text-[#006B8F] uppercase tracking-wider block mb-3">
                  OUR VISION
                </span>
                <h3 className="text-[22px] font-[700] text-slate-900 mb-3">
                  To Be The Premier Global Engineering Partner
                </h3>
                <p className="text-[14px] text-slate-600 leading-relaxed font-[400]">
                  To stand as the world's most trusted partner for custom software development, mobile application engineering, cloud infrastructure modernization, and artificial intelligence integration.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center space-x-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Global Multi-Regional Engineering Excellence</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
              Core Values Driving Engineering Excellence
            </h2>
            <p className="text-[18px] text-slate-600 font-[400] mt-2">
              The fundamental beliefs that guide our technical decisions and client partnerships every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[14px] bg-[#F4F8FA] border border-slate-200/80 hover:border-[#006B8F]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-[17px] font-[700] text-slate-900 mb-2">{v.title}</h4>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-[400]">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Global Consultation CTA */}
      <CTASection />
    </div>
  );
};

export default About;
