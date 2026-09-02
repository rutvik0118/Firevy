import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IconRenderer from '../components/common/IconRenderer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import serviceApi from '../services/serviceApi';
import BRAND from '../constants/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, ShieldCheck, Zap, Sparkles, Star } from 'lucide-react';

import HealthcareAppDevelopmentService from '../components/services/HealthcareAppDevelopmentService';
import EducationAppDevelopmentService from '../components/services/EducationAppDevelopmentService';
import UberLikeAppDevelopmentService from '../components/services/UberLikeAppDevelopmentService';
import SpotifyLikeAppDevelopmentService from '../components/services/SpotifyLikeAppDevelopmentService';
import ZomatoLikeAppDevelopmentService from '../components/services/ZomatoLikeAppDevelopmentService';
import AmazonLikeAppDevelopmentService from '../components/services/AmazonLikeAppDevelopmentService';
import VisitorManagementSystemService from '../components/services/VisitorManagementSystemService';
import WarehouseManagementSystemService from '../components/services/WarehouseManagementSystemService';
import CloverAppDevelopmentService from '../components/services/CloverAppDevelopmentService';

export const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const isHealthcare = slug && (
    slug.toLowerCase().includes('health-care-app') ||
    slug.toLowerCase().includes('healthcare-app') ||
    slug.toLowerCase() === 'healthcare'
  );

  const isEducation = slug && (
    slug.toLowerCase().includes('education-app') ||
    slug.toLowerCase().includes('elearning-app') ||
    slug.toLowerCase() === 'education'
  );

  const isUber = slug && (
    slug.toLowerCase().includes('uber-like') ||
    slug.toLowerCase().includes('uber-clone') ||
    slug.toLowerCase().includes('taxi-booking') ||
    slug.toLowerCase() === 'uber'
  );

  const isSpotify = slug && (
    slug.toLowerCase().includes('spotify-like') ||
    slug.toLowerCase().includes('audio-streaming') ||
    slug.toLowerCase().includes('music-streaming') ||
    slug.toLowerCase() === 'spotify'
  );

  const isZomato = slug && (
    slug.toLowerCase().includes('zomato-like') ||
    slug.toLowerCase().includes('zomato-clone') ||
    slug.toLowerCase().includes('food-delivery') ||
    slug.toLowerCase() === 'zomato'
  );

  const isAmazon = slug && (
    slug.toLowerCase().includes('amazon-like') ||
    slug.toLowerCase().includes('amazon-clone') ||
    slug.toLowerCase().includes('ecommerce') ||
    slug.toLowerCase().includes('e-commerce') ||
    slug.toLowerCase() === 'amazon'
  );

  const isVisitor = slug && (
    slug.toLowerCase().includes('visitor-management') ||
    slug.toLowerCase().includes('visitor-app') ||
    slug.toLowerCase() === 'visitor'
  );

  const isWarehouse = slug && (
    slug.toLowerCase().includes('warehouse-management') ||
    slug.toLowerCase().includes('wms') ||
    slug.toLowerCase() === 'warehouse'
  );

  const isClover = slug && (
    slug.toLowerCase().includes('clover-app') ||
    slug.toLowerCase().includes('clover-pos') ||
    slug.toLowerCase() === 'clover'
  );

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
    if (!isHealthcare && !isEducation && !isUber && !isSpotify && !isZomato && !isAmazon && !isVisitor && !isWarehouse && !isClover) {
      fetchServiceDetails();
    } else {
      setLoading(false);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (isHealthcare) {
    return <HealthcareAppDevelopmentService />;
  }

  if (isEducation) {
    return <EducationAppDevelopmentService />;
  }

  if (isUber) {
    return <UberLikeAppDevelopmentService />;
  }

  if (isSpotify) {
    return <SpotifyLikeAppDevelopmentService />;
  }

  if (isZomato) {
    return <ZomatoLikeAppDevelopmentService />;
  }

  if (isAmazon) {
    return <AmazonLikeAppDevelopmentService />;
  }

  if (isVisitor) {
    return <VisitorManagementSystemService />;
  }

  if (isWarehouse) {
    return <WarehouseManagementSystemService />;
  }

  if (isClover) {
    return <CloverAppDevelopmentService />;
  }

  if (loading) return <LoadingSpinner fullPage message="Loading service details..." />;
  if (error || !service) return <Container className="py-20"><ErrorState message={error || 'Service not found.'} onRetry={fetchServiceDetails} /></Container>;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`${service.title} | ${BRAND.name}`}
        description={service.shortDescription}
        canonical={`/services/${service.slug}`}
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <IconRenderer name={service.icon || 'Code2'} className="w-3.5 h-3.5 text-cyan-300" />
                <span className="uppercase tracking-widest">EXPERT SERVICE CAPABILITY</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal">
                {service.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-cyan-500/20 border border-cyan-300/40 text-cyan-200 font-[700] text-[14px] hover:bg-cyan-500/30 transition-all"
                >
                  <span>View Relevant Work</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[16px] overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <img
                  src={service.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"}
                  alt={service.title}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key Features & Capabilities */}
      {service.features && service.features.length > 0 && (
        <section className="py-16 bg-[#F4F8FA] border-b border-slate-200">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
                Key Architectural Capabilities
              </h2>
              <p className="text-[18px] text-slate-600 font-[400] mt-2">
                Engineered for scalability, security, and measurable performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[14px] bg-white border border-slate-200/80 shadow-sm hover:border-[#006B8F]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[10px] bg-cyan-50 text-[#006B8F] flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-[700] text-slate-900 mb-2">{feat.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-[400]">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Technologies Used Grid */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-16 bg-white border-b border-slate-100">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
                Technologies & Tools We Utilize
              </h2>
              <p className="text-[18px] text-slate-600 font-[400] mt-2">
                Industry standard frameworks and cloud infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-[8px] bg-[#EDF5F9] border border-slate-200 text-slate-800 text-[13px] font-[600] font-sans"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ Accordion Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-[#F4F8FA] border-b border-slate-200">
          <Container className="max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[18px] text-slate-600 font-[400] mt-2">
                Common questions about our {service.title.toLowerCase()} service offerings.
              </p>
            </div>

            <div className="space-y-3 text-left">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-[12px] bg-white border border-slate-200/80 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-[700] text-[15px] text-slate-900 hover:text-[#006B8F] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-[#006B8F]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-[13px] text-slate-600 leading-relaxed font-[400] border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Global Consultation CTA */}
      <CTASection />
    </div>
  );
};

export default ServiceDetails;
