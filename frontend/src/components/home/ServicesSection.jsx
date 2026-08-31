import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import IconRenderer from '../common/IconRenderer';
import Badge from '../common/Badge';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorState from '../common/ErrorState';
import serviceApi from '../../services/serviceApi';

export const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await serviceApi.getAllServices();
      setServices(res.data || []);
    } catch (err) {
      console.error('[Services Fetch Error]', err);
      setError(err.message || 'Failed to load services.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="py-24 bg-brand-card/30 relative">
      <Container>
        <SectionHeading
          badge="OUR CORE CAPABILITIES"
          title="End-to-End Enterprise Software Engineering"
          subtitle="From cloud-native web architectures to autonomous AI agents, we build tailored software solutions designed for high performance and measurable business scale."
        />

        {loading ? (
          <LoadingSpinner message="Fetching software capabilities..." />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchServices} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service._id || service.slug || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-brand-card/70 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-glow-primary text-left"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors mb-6">
                    <IconRenderer name={service.icon} className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.slice(0, 4).map((tech, tIdx) => (
                        <Badge key={tIdx} variant="slate">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Explore Action */}
                <div className="pt-4 border-t border-gray-800/80">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 group/link"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServicesSection;
