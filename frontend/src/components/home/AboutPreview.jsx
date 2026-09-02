import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import BRAND from '../../constants/brand';

export const AboutPreview = () => {
  const points = [
    'Digital Transformation & Legacy System Modernization',
    'Enterprise Cloud-Native Microservices Architecture',
    'Custom RAG Generative AI & Autonomous Agent Engineering',
    'Agile Product Delivery with 2-Week Sprint Cadence',
    'Strict SOC2 & ISO-27001 Security Standards'
  ];

  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt={`${BRAND.name} Engineering Team Collaboration`}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />

              {/* Floating Stat Card Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-brand-card/90 border border-gray-700/80 backdrop-blur-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Engineering Excellence</div>
                  <div className="text-xs text-slate-400">95% Long-term Client Retention Rate</div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">
                  TOP 1% TALENT
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <SectionHeading
              align="left"
              badge="WHO WE ARE"
              title="Technology Expertise. Business Thinking. Real Results."
              subtitle={`At ${BRAND.name}, we bridge the gap between complex software engineering and strategic business growth. We help enterprises and high-growth scale-ups turn technological vision into high-throughput realities.`}
              className="mb-6"
            />

            {/* Checklist */}
            <div className="space-y-3 pt-1">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <Button to="/about" variant="primary" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
