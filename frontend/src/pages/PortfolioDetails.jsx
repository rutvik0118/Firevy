import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import portfolioApi from '../services/portfolioApi';
import BRAND from '../constants/brand';
import { CheckCircle2, ArrowRight, TrendingUp, Layers, Code2, ChevronRight, Check } from 'lucide-react';

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
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <LoadingSpinner fullPage message="Loading case study metrics..." />;
  if (error || !project) return <Container className="py-20"><ErrorState message={error || 'Case study not found.'} onRetry={fetchProjectDetails} /></Container>;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`${project.title} - Case Study | ${BRAND.name}`}
        description={project.shortDescription}
        canonical={`/portfolio/${project.slug}`}
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <Link to="/portfolio" className="hover:text-white transition-colors">Our Work</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                  {project.category}
                </span>
                {project.industry && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 border border-cyan-300/30 text-cyan-200">
                    {project.industry}
                  </span>
                )}
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                {project.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Build A Similar Solution</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[16px] overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <img src={project.image} alt={project.title} className="w-full h-64 sm:h-72 object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Measured Business Results Banner */}
      {project.results && project.results.length > 0 && (
        <section className="py-12 bg-[#EDF5F9] border-b border-slate-200">
          <Container>
            <div className="flex items-center space-x-2 text-[#006B8F] font-[700] uppercase tracking-wider text-xs mb-6 text-center justify-center">
              <TrendingUp className="w-4 h-4" />
              <span>MEASURED BUSINESS OUTCOMES & ROI</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-6 rounded-[12px] bg-white border border-slate-200/80 shadow-sm text-center font-[700] text-[16px] text-slate-900">
                  ✨ {res}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Challenge vs Solution Comparison */}
      <section className="py-16 bg-white border-b border-slate-100 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-[16px] bg-[#FFF8F8] border border-rose-200/80 space-y-4">
              <span className="text-xs font-mono font-[700] text-rose-600 uppercase tracking-wider">THE CHALLENGE</span>
              <h3 className="text-[20px] font-[700] text-slate-900">Operational Bottlenecks</h3>
              <p className="text-[14px] text-slate-700 leading-relaxed font-[400]">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-[16px] bg-[#F0FDF4] border border-emerald-200/80 space-y-4">
              <span className="text-xs font-mono font-[700] text-emerald-600 uppercase tracking-wider">THE SOLUTION</span>
              <h3 className="text-[20px] font-[700] text-slate-900">Engineered Architecture</h3>
              <p className="text-[14px] text-slate-700 leading-relaxed font-[400]">{project.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Used */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="py-16 bg-[#F4F8FA] border-b border-slate-200">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-[28px] font-[800] text-slate-900 tracking-tight">
                Technologies & Architecture Stack
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-[8px] bg-white border border-slate-200 text-slate-800 text-[13px] font-[600] font-sans shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default PortfolioDetails;
