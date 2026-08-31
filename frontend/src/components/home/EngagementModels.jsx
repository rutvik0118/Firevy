import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export const EngagementModels = () => {
  const models = [
    {
      title: 'Fixed Price',
      tagline: 'Predictable Scope & Budget',
      bestFor: 'Projects with well-defined requirements, wireframes, and clear milestones.',
      benefits: [
        'Guaranteed budget lock',
        'Defined deadline commitments',
        'Zero financial risk'
      ],
      pricing: 'Milestone-Based Payments',
      highlight: false
    },
    {
      title: 'Dedicated Team',
      tagline: 'Full Engineering Augmentation',
      bestFor: 'Growing tech companies needing full-time senior developers & DevOps.',
      benefits: [
        'Direct Slack/Jira integration',
        'Top 1% senior engineers',
        'Scale team up or down anytime'
      ],
      pricing: 'Monthly Retainer per Engineer',
      highlight: true
    },
    {
      title: 'Time & Material',
      tagline: 'Maximum Agile Flexibility',
      bestFor: 'Evolving products requiring dynamic scope adjustments and rapid iterations.',
      benefits: [
        'Pay only for actual hours worked',
        'Pivot features on demand',
        'Bi-weekly transparent invoicing'
      ],
      pricing: 'Hourly / Sprint-based Billing',
      highlight: false
    },
    {
      title: 'MVP Development',
      tagline: 'Rapid 6-Week Market Launch',
      bestFor: 'Startups & enterprises needing to test software hypotheses in record time.',
      benefits: [
        'Fixed 6 to 8 week timeline',
        'Core high-converting features',
        'Investor-ready architecture'
      ],
      pricing: 'Fixed Package Pricing',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <Container>
        <SectionHeading
          badge="ENGAGEMENT MODELS"
          title="Flexible Collaboration Built Around Your Business Needs"
          subtitle="Choose the engagement model that best aligns with your timeline, budget parameters, and technical team setup."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative flex flex-col justify-between p-7 rounded-2xl border text-left transition-all duration-300 ${
                model.highlight
                  ? 'bg-gradient-to-b from-blue-900/40 to-brand-card border-blue-500/80 shadow-glow-primary hover:-translate-y-2'
                  : 'bg-brand-card/70 border-gray-800 hover:border-gray-700 hover:-translate-y-1'
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{model.title}</h3>
                <p className="text-xs font-semibold text-blue-400 mb-4">{model.tagline}</p>
                
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Best For:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">{model.bestFor}</p>
                </div>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">Key Benefits:</span>
                  {model.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="text-xs text-slate-400 font-mono mb-4">
                  Model: <span className="text-white font-semibold">{model.pricing}</span>
                </div>
                <Button to="/contact" variant={model.highlight ? 'primary' : 'outline'} size="sm" className="w-full" icon={ArrowRight}>
                  Select Model
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EngagementModels;
