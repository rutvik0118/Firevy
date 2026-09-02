import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import portfolioApi from '../services/portfolioApi';
import { CheckCircle2, ArrowRight, TrendingUp, Layers, Code2 } from 'lucide-react';

export const PortfolioDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjectDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await portfolioApi.getPortfolioBySlug(slug);
      setProject(res.data);
    } catch (err) {
      console.error('[Portfolio Details Fetch Error]', err);
      setError(err.message || 'Case study not found.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, [slug]);

  if (loading) return <LoadingSpinner fullPage message="Loading case study metrics..." />;
  if (error || !project) return <Container className="py-20"><ErrorState message={error || 'Case study not found.'} onRetry={fetchProjectDetails} /></Container>;

  return (
    <>
      <SEO
        title={`${project.title} - Case Study`}
        description={project.shortDescription}
        canonical={`/portfolio/${project.slug}`}
      />

      {/* Case Study Hero */}
      <section className="py-20 bg-tech-grid relative overflow-hidden text-left">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue">{project.category}</Badge>
              <Badge variant="purple">{project.industry}</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Featured Cover Image */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full h-[450px] object-cover" />
          </div>
        </Container>
      </section>

      {/* Measured Business Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-16 bg-blue-950/40 border-y border-blue-500/20">
          <Container>
            <div className="flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 text-center justify-center">
              <TrendingUp className="w-4 h-4" />
              <span>MEASURED BUSINESS OUTCOMES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-brand-card/80 border border-blue-500/30 text-center font-bold text-lg text-white">
                  ✨ {res}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Challenge vs Solution */}
      <section className="py-24 bg-brand-dark text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl bg-brand-card/70 border border-gray-800 space-y-4">
              <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">THE CHALLENGE</span>
              <h3 className="text-2xl font-bold text-white">Operational Bottlenecks</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-3xl bg-brand-card/70 border border-gray-800 space-y-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">OUR SOLUTION</span>
              <h3 className="text-2xl font-bold text-white">Architectural Innovation</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Technologies Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="py-16 bg-brand-card/30 text-left">
          <Container>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>SOFTWARE TECH STACK</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech, idx) => (
                <Badge key={idx} variant="blue" className="px-4 py-2 text-sm font-semibold">
                  {tech}
                </Badge>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default PortfolioDetails;
