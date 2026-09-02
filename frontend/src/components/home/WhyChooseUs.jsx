import React from 'react';
import { motion } from 'framer-motion';
import { Users, Repeat, MessageCircle, ShieldCheck, Cpu, Lock, Clock, LifeBuoy } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import BRAND from '../../constants/brand';

export const WhyChooseUs = () => {
  const pillars = [
    { icon: Users, title: 'Experienced Developers', desc: 'Top 1% pre-vetted engineers with deep expertise in modern tech stacks.' },
    { icon: Repeat, title: 'Agile Development', desc: 'Iterative 2-week sprints with full client visibility into code progress.' },
    { icon: MessageCircle, title: 'Transparent Communication', desc: 'Direct Slack, Jira, and weekly video standups with zero middleman friction.' },
    { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Automated E2E testing, code reviews, and zero-defect deployment standards.' },
    { icon: Cpu, title: 'Scalable Architecture', desc: 'Microservices designed to handle millions of queries with zero downtime.' },
    { icon: Lock, title: 'Security First', desc: 'Bank-grade encryption, OWASP audits, and SOC2 / HIPAA compliance readiness.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Strict milestone tracking and 99.4% on-time project completion record.' },
    { icon: LifeBuoy, title: 'Post-Launch Support', desc: 'Dedicated SLAs, 24/7 cloud monitoring, and continuous product updates.' }
  ];

  return (
    <section className="py-24 bg-brand-card/30 relative">
      <Container>
        <SectionHeading
          badge={`WHY ${BRAND.name.toUpperCase()}`}
          title="The Engineering Partner Built for Long-Term Growth"
          subtitle="We don't just write code—we design resilient digital infrastructure that accelerates business outcomes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-brand-card/70 border border-gray-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
