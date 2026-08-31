import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IconRenderer from '../components/common/IconRenderer';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import serviceApi from '../services/serviceApi';
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, Zap, Sparkles, Star } from 'lucide-react';

export const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const fetchServiceDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await serviceApi.getServiceBySlug(slug);
      setService(res.data);
    } catch (err) {
      console.error('[Service Details Fetch Error]', err);
      setError(err.message || 'Service not found.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetails();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <LoadingSpinner fullPage message="Loading service architecture details..." />;
  if (error || !service) return <Container className="py-20"><ErrorState message={error || 'Service not found.'} onRetry={fetchServiceDetails} /></Container>;

  return (
    <>
      <SEO
        title={`${service.title} | firevy.co`}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
      />

      {/* Blue & White Hero Header */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <IconRenderer name={service.icon || 'Code2'} className="w-4 h-4 text-cyan-300" />
                <span className="uppercase tracking-widest">EXPERT SERVICE CAPABILITY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed font-normal">
                {service.description}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#004A75] font-extrabold text-base hover:bg-slate-100 transition-all shadow-xl group"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-bold text-base hover:bg-cyan-500/30 transition-all"
                >
                  View Relevant Work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <img
                  src={service.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative Wave */}
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full border-8 border-white/10 pointer-events-none" />
      </section>

      {/* Key Features & Capabilities (White & Blue Card Theme) */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 bg-slate-50 text-left">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005F96] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                CORE CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Key Features of Our {service.title}
              </h2>
              <p className="text-slate-600 mt-2">
                Comprehensive engineering solutions designed to meet strict enterprise standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#005F96] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-[#005F96] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tech Stack */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 bg-white border-y border-slate-200">
          <Container>
            <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-center">
              Technologies We Utilize
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((t, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#005F96] text-sm font-extrabold shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 bg-slate-50 text-left">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#005F96] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                DEVELOPMENT PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                How We Execute & Deliver
              </h2>
              <p className="text-slate-600 mt-2">
                Step-by-step sprint lifecycle tailored for predictability and speed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-[#005F96] transition-all">
                  <div className="text-3xl font-black text-[#005F96] font-mono mb-3">0{p.step || idx + 1}</div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Service FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 bg-white text-left">
          <Container className="max-w-3xl">
            <h3 className="text-2xl font-extrabold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between font-extrabold text-slate-900 focus:outline-none text-left"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#005F96] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default ServiceDetails;
