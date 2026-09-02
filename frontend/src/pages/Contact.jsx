import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';
import contactApi from '../services/contactApi';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Shield, ChevronRight, ArrowRight, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [selectedServices, setSelectedServices] = useState(['Custom Software']);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const servicesList = [
    'Custom Software',
    'Mobile App Dev',
    'Web Development',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Dedicated Squads',
    'UI/UX Design',
    'QA & Testing'
  ];

  const budgetRanges = [
    'Under $15,000',
    '$15,000 - $30,000',
    '$30,000 - $60,000',
    '$60,000 - $100,000',
    '$100,000+'
  ];

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const onSubmitInquiry = async (data) => {
    setServerError(null);
    try {
      await contactApi.submitInquiry({
        ...data,
        services: selectedServices.join(', ')
      });
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      console.error('[Contact Submission Error]', err);
      setServerError(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Contact Us | Request A Software Consultation | ${BRAND.name}`}
        description={`Get in touch with ${BRAND.name} solutions architects. Request a proposal for Web, Mobile, AI, or Cloud software development.`}
        canonical="/contact"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">START YOUR SOFTWARE JOURNEY</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Let's Build Something Exceptional Together
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                Share your technical requirements or product idea. Our solutions architects will review your scope and provide a detailed feasibility & estimate proposal within 24 hours.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">&lt; 24h</div>
                <div className="text-[11px] text-blue-200">Response Time</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">100%</div>
                <div className="text-[11px] text-blue-200">NDA Protected</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">Free</div>
                <div className="text-[11px] text-blue-200">Tech Discovery</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">0%</div>
                <div className="text-[11px] text-blue-200">Obligation</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main 2-Column Contact Form & Direct Contacts */}
      <section className="py-16 bg-[#F4F8FA] border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
            {/* Left Contact Information Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-[16px] bg-white border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono font-[700] text-[#006B8F] uppercase tracking-wider block mb-2">
                    DIRECT REACH
                  </span>
                  <h3 className="text-[22px] font-[700] text-slate-900">
                    Connect With Our Global Sales & Architecture Teams
                  </h3>
                  <p className="text-[13px] text-slate-600 mt-2 font-[400]">
                    Reach our technical directors directly for enterprise inquiries, RFP submissions, or partner consultations.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-[600] text-slate-400 block uppercase">Project Inquiries</span>
                      <a href={`mailto:${BRAND.contact.salesEmail}`} className="text-[14px] font-[700] text-slate-900 hover:text-[#006B8F] transition-colors">
                        {BRAND.contact.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-[600] text-slate-400 block uppercase">Sales US Direct</span>
                      <a href={`tel:${BRAND.contact.phoneUS}`} className="text-[14px] font-[700] text-slate-900 hover:text-[#006B8F] transition-colors">
                        🇺🇸 {BRAND.contact.phoneUS}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-[600] text-slate-400 block uppercase">Sales India HQ</span>
                      <a href={`tel:${BRAND.contact.phoneIN}`} className="text-[14px] font-[700] text-slate-900 hover:text-[#006B8F] transition-colors">
                        🇮🇳 {BRAND.contact.phoneIN}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-[600] text-slate-400 block uppercase">Operating Hours</span>
                      <span className="text-[13px] font-[600] text-slate-700 block">Mon - Fri: 24-Hour Coverage</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-[12px] bg-[#EDF5F9] border border-cyan-200/60 flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-[#006B8F] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[12px] font-[700] text-slate-900">Strict NDA Guarantee</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Your project idea, source requirements, and business data are protected from day one.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Proposal Request Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-[16px] bg-white border border-slate-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-[22px] font-[700] text-slate-900">
                    Request A Formal Proposal
                  </h3>
                  <p className="text-[13px] text-slate-600 mt-1 font-[400]">
                    Select your required capabilities and tell us about your goals.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                    <h3 className="text-[22px] font-[700] text-slate-900">Inquiry Received!</h3>
                    <p className="text-[14px] text-slate-600 max-w-md mx-auto">
                      Thank you for contacting {BRAND.name}. One of our senior solutions architects will reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-8 py-3 rounded-[6px] bg-[#006B8F] text-white font-[700] text-[13px]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmitInquiry)} className="space-y-6">
                    {/* Services Multi-Select Pills */}
                    <div>
                      <label className="text-[13px] font-[700] text-slate-800 block mb-2.5">
                        What services are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesList.map((srv) => {
                          const isSelected = selectedServices.includes(srv);
                          return (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => toggleService(srv)}
                              className={`px-3.5 py-1.5 rounded-full text-[12px] font-[600] transition-all font-sans ${
                                isSelected
                                  ? 'bg-[#006B8F] text-white shadow-sm'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Personal Details Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] font-[600] text-slate-700 block mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-900 font-sans"
                        />
                        {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                      </div>

                      <div>
                        <label className="text-[12px] font-[600] text-slate-700 block mb-1.5">Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          {...register('email', { required: 'Email is required' })}
                          className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-900 font-sans"
                        />
                        {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] font-[600] text-slate-700 block mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          {...register('phone', { required: 'Phone is required' })}
                          className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-900 font-sans"
                        />
                      </div>

                      <div>
                        <label className="text-[12px] font-[600] text-slate-700 block mb-1.5">Estimated Budget</label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-900 font-sans"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[12px] font-[600] text-slate-700 block mb-1.5">Project Scope / Requirements *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your project timeline, deliverables, existing architecture, or specific goals..."
                        {...register('message', { required: 'Project description is required' })}
                        className="w-full px-4 py-3 text-[14px] rounded-[6px] border border-slate-300 focus:border-[#006B8F] focus:outline-none bg-white text-slate-900 font-sans"
                      />
                    </div>

                    {serverError && (
                      <div className="p-3 rounded-[6px] bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                        {serverError}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <div className="flex items-center space-x-2 text-[11px] text-slate-500 font-mono">
                        <span className="inline-flex items-center space-x-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Protected</span>
                        </span>
                        <span>Cloudflare Turnstile</span>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14px] transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Sending Scope...' : 'Submit Project Scope'}</span>
                        <Send className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
