import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import LoadingSpinner from '../common/LoadingSpinner';
import portfolioApi from '../../services/portfolioApi';

export const PortfolioShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'AI', 'Web', 'Mobile', 'Cloud', 'E-commerce'];

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const res = await portfolioApi.getPortfolio();
        setProjects(res.data || []);
      } catch (err) {
        console.error('[Portfolio Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-brand-dark relative">
      <Container>
        <SectionHeading
          badge="FEATURED CASE STUDIES"
          title="Engineered Products That Deliver Business Impact"
          subtitle="Explore how our software solutions solved mission-critical enterprise challenges and achieved measurable ROI."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-glow-primary'
                  : 'bg-brand-card/80 text-slate-400 hover:text-white border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <LoadingSpinner message="Loading case studies..." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  key={proj._id || proj.slug || idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between rounded-2xl bg-brand-card/70 border border-gray-800 hover:border-blue-500/40 overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left"
                >
                  {/* Image Cover */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="blue">{proj.category}</Badge>
                      <Badge variant="purple">{proj.industry}</Badge>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {proj.shortDescription}
                      </p>

                      {/* Measured Result Highlight */}
                      {proj.results && proj.results.length > 0 && (
                        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-medium">
                          ✨ {proj.results[0]}
                        </div>
                      )}
                    </div>

                    {/* View Details Link */}
                    <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies && proj.technologies.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] text-slate-500 font-mono">
                            #{t}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/portfolio/${proj.slug}`}
                        className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 group"
          >
            <span>View All Enterprise Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioShowcase;
