import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does a typical software development project cost?",
      answer: "Project pricing depends on scope, complexity, tech stack, and timeline. Small-to-medium enterprise MVPs typically range from $15,000 to $45,000, while complex multi-platform platforms with custom AI microservices are scoped under fixed milestones or dedicated monthly retainers."
    },
    {
      question: "What is your standard development timeline?",
      answer: "Most custom web or mobile MVP applications are delivered within 6 to 12 weeks following 2-week agile sprint iterations. We provide a detailed sprint roadmap during our initial discovery phase."
    },
    {
      question: "How do you select the right technology stack for our product?",
      answer: "We analyze your target user concurrency, performance SLAs, security requirements, and long-term scalability needs. We typically recommend React/Next.js for frontend, Node.js or Python for APIs, and MongoDB or PostgreSQL for persistent databases."
    },
    {
      question: "How quickly can dedicated developers join our project?",
      answer: "Our pre-vetted senior full-stack engineers, cloud architects, and UI/UX designers can onboard into your Slack, GitHub, and daily standups within 48 to 72 hours."
    },
    {
      question: "Are your AI & Machine Learning solutions secure for private enterprise data?",
      answer: "Yes, 100%. We deploy private model instances with vector database isolation so your proprietary enterprise data is encrypted and never shared or trained publicly."
    },
    {
      question: "Do you offer post-launch maintenance and 24/7 cloud support?",
      answer: "Yes, we offer dedicated post-launch SLAs covering continuous infrastructure monitoring, automated security patch updates, feature enhancements, and 24/7 incident response."
    }
  ];

  return (
    <section className="py-24 bg-brand-card/20 relative">
      <Container className="max-w-4xl">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know Before Starting"
          subtitle="Clear, honest answers to key technical and operational questions."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-brand-card/80 border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between font-bold text-base text-white focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-gray-800/60 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
