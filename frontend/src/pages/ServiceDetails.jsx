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
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

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
  }, [slug]);

  if (loading) return <LoadingSpinner fullPage message="Loading service architecture details..." />;
  if (error || !service) return <Container className="py-20"><ErrorState message={error || 'Service not found.'} onRetry={fetchServiceDetails} /></Container>;

  return (
    <>
      <SEO
        title={`${service.title} Services`}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
      />

      {/* Service Detail Hero */}
      <section className="py-20 bg-tech-grid relative overflow-hidden text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <IconRenderer name={service.icon} className="w-4 h-4" />
                <span>EXPERT SERVICE CAPABILITY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Request Consultation
                </Button>
                <Button to="/portfolio" variant="outline" size="lg">
                  View Relevant Work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Features & Capabilities */}
      {service.features && service.features.length > 0 && (
        <section className="py-20 bg-brand-card/30">
          <Container text-left>
            <SectionHeading
              badge="CORE CAPABILITIES"
              title={`Key Features of Our ${service.title}`}
              subtitle="Comprehensive engineering solutions designed to meet strict enterprise standards."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-brand-card/80 border border-gray-800 flex items-start space-x-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tech Stack */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 bg-brand-dark">
          <Container>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Technologies We Utilize</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {service.technologies.map((t, idx) => (
                <Badge key={idx} variant="blue" className="px-4 py-2 text-sm font-semibold">
                  {t}
                </Badge>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Process Steps */}
      {service.process && service.process.length > 0 && (
        <section className="py-20 bg-brand-card/20">
          <Container>
            <SectionHeading
              badge="DEVELOPMENT PROCESS"
              title="How We Execute & Deliver"
              subtitle="Step-by-step sprint lifecycle tailored for predictability."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {service.process.map((p, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-brand-card/80 border border-gray-800">
                  <div className="text-2xl font-extrabold text-blue-400 font-mono mb-2">0{p.step || idx + 1}</div>
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Service FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 bg-brand-dark">
          <Container className="max-w-3xl">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4 text-left">
              {service.faq.map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-brand-card/80 border border-gray-800 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between font-bold text-white focus:outline-none"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-gray-800/60 pt-3">
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
