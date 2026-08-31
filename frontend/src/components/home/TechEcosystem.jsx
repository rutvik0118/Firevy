import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import IconRenderer from '../common/IconRenderer';
import technologyApi from '../../services/technologyApi';

export const TechEcosystem = () => {
  const [techList, setTechList] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'DevOps', 'AI'];

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await technologyApi.getTechnologies();
        setTechList(res.data || []);
      } catch (err) {
        console.error('[Tech Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTech();
  }, []);

  const filteredTech = activeCategory === 'All'
    ? techList
    : techList.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 bg-brand-dark relative">
      <Container>
        <SectionHeading
          badge="OUR TECHNOLOGY ECOSYSTEM"
          title="Battle-Tested Tech Stack & Modern Frameworks"
          subtitle="We leverage enterprise-proven technologies and cutting-edge frameworks to build high-performance software systems that scale with confidence."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-glow-primary'
                  : 'bg-brand-card/80 text-slate-400 hover:text-white border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech._id || idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-brand-card/60 border border-gray-800/80 hover:border-blue-500/40 hover:bg-brand-card transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-800 group-hover:bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 transition-colors">
                <IconRenderer name={tech.icon} className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                {tech.name}
              </h4>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechEcosystem;
