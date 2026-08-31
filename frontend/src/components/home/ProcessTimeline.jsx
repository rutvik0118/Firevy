import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export const ProcessTimeline = () => {
  const steps = [
    { number: '01', title: 'Discovery', desc: 'Requirements audit, technical stack definition, and goal alignment.' },
    { number: '02', title: 'Strategy', desc: 'Architecture blueprint, DB schemas, and sprint roadmap planning.' },
    { number: '03', title: 'UI/UX Design', desc: 'Human-centered wireframes, design systems, and visual mockups.' },
    { number: '04', title: 'Prototype', desc: 'Interactive clickable prototypes and user flow validation.' },
    { number: '05', title: 'Development', desc: 'Clean, modular frontend & backend microservice engineering.' },
    { number: '06', title: 'Testing', desc: 'Automated E2E suites, security vulnerability scans, and QA signoff.' },
    { number: '07', title: 'Deployment', desc: 'Zero-downtime CI/CD rollout to production cloud environments.' },
    { number: '08', title: 'Support', desc: '24/7 proactive infrastructure telemetry, SLAs, and updates.' }
  ];

  return (
    <section className="py-24 bg-brand-card/30 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="Agile 8-Step Software Delivery Lifecycle"
          subtitle="A structured, transparent engineering process designed to eliminate project friction and ensure predictable time-to-market."
        />

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative p-6 rounded-2xl bg-brand-card/80 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-extrabold text-blue-500/40 group-hover:text-blue-400 font-mono transition-colors">
                  {step.number}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden flex flex-col space-y-6 relative border-l-2 border-gray-800 ml-4 pl-6 text-left">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative p-5 rounded-2xl bg-brand-card/80 border border-gray-800"
            >
              {/* Dot on line */}
              <div className="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-brand-dark" />
              <div className="text-xs font-mono font-bold text-blue-400 mb-1">{step.number}</div>
              <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessTimeline;
