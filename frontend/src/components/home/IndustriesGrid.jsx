import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import IconRenderer from '../common/IconRenderer';
import industryApi from '../../services/industryApi';

export const IndustriesGrid = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await industryApi.getIndustries();
        setIndustries(res.data || []);
      } catch (err) {
        console.error('[Industry Fetch Error]', err);
      }
    };
    fetchIndustries();
  }, []);

  return (
    <section className="py-24 bg-brand-card/20 relative">
      <Container>
        <SectionHeading
          badge="INDUSTRIES WE TRANSFORM"
          title="Tailored Solutions for Diverse Domain Verticals"
          subtitle="We bring deep domain expertise and compliance understanding across key industries worldwide."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind._id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-brand-card/70 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  <IconRenderer name={ind.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-800/80">
                <Link
                  to="/industries"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustriesGrid;
