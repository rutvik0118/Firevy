import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import Select from '../components/common/Select';
import Button from '../components/common/Button';
import BRAND from '../constants/brand';
import contactApi from '../services/contactApi';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmitInquiry = async (data) => {
    setServerError(null);
    try {
      await contactApi.submitInquiry(data);
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      console.error('[Contact Submission Error]', err);
      setServerError(err.message || 'Failed to submit inquiry. Please try again.');
    }
  };

  const servicesList = [
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'UI/UX Design',
    'AI & Machine Learning',
    'Cloud Solutions',
    'API Development',
    'DevOps',
    'Software Testing',
    'Dedicated Developers'
  ];

  const budgetRanges = [
    'Under $15,000',
    '$15,000 - $30,000',
    '$30,000 - $60,000',
    '$60,000 - $100,000',
    '$100,000+'
  ];

  return (
    <>
      <SEO
        title="Contact Us - Start Your Software Project"
        description={`Get in touch with ${BRAND.name} solutions architects. Request a proposal for Web, Mobile, AI, or Cloud software development.`}
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge="LET'S BUILD TOGETHER"
            title="Start Your Project Conversation"
            subtitle="Have a technical inquiry, request for proposal (RFP), or software project idea? Our solutions architect will respond within 24 hours."
          />
        </Container>
      </section>

      <section className="py-24 bg-brand-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
            {/* Left Contact Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 sm:p-10 rounded-3xl bg-brand-card/80 border border-gray-800">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">DIRECT CONTACT</span>
                  <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
                  <p className="text-xs text-slate-400 mt-1">We are based in San Francisco with remote engineering hubs worldwide.</p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block uppercase">Sales & Inquiries</span>
                      <a href={`mailto:${BRAND.contact.salesEmail}`} className="text-sm font-bold text-white hover:text-blue-400 transition-colors">
                        {BRAND.contact.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block uppercase">Direct Phone</span>
                      <a href={`tel:${BRAND.contact.phone}`} className="text-sm font-bold text-white hover:text-purple-400 transition-colors">
                        {BRAND.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block uppercase">Headquarters</span>
                      <p className="text-xs text-slate-300">
                        {BRAND.contact.address.street}<br />
                        {BRAND.contact.address.city}, {BRAND.contact.address.state} {BRAND.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-semibold block uppercase">Operating Hours</span>
                      <p className="text-xs text-slate-300">{BRAND.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                🔒 Your information is confidential under strict Non-Disclosure Agreement (NDA) standards.
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-brand-card/90 border border-gray-800 shadow-2xl">
              {submitSuccess ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you! Our solutions architect will review your project requirements and email you within 24 hours to schedule an initial consultation call.
                  </p>
                  <Button onClick={() => setSubmitSuccess(false)} variant="outline" className="mt-4">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmitInquiry)} className="space-y-5">
                  <div className="border-b border-gray-800 pb-4 mb-2">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <MessageSquare className="w-6 h-6 mr-2 text-blue-400" />
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Fill out the details below to receive a customized estimate.</p>
                  </div>

                  {serverError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                      {serverError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      required
                      placeholder="e.g. Alex Mercer"
                      error={errors.name?.message}
                      {...register('name', { required: 'Name is required' })}
                    />
                    <Input
                      label="Business Email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      error={errors.email?.message}
                      {...register('email', {
                        required: 'Business email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address format' }
                      })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      error={errors.phone?.message}
                      {...register('phone', {
                        pattern: { value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, message: 'Invalid phone number format' }
                      })}
                    />
                    <Input
                      label="Company / Organization"
                      placeholder="e.g. Apex Global Inc."
                      {...register('company')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Primary Service Needed"
                      options={['Select Service', ...servicesList]}
                      {...register('service')}
                    />
                    <Select
                      label="Estimated Budget"
                      options={['Select Budget Range', ...budgetRanges]}
                      {...register('budget')}
                    />
                  </div>

                  <Textarea
                    label="Project Description & Overview"
                    required
                    rows={4}
                    placeholder="Describe your product idea, key required features, timeline expectations, or technical challenges..."
                    error={errors.message?.message}
                    {...register('message', {
                      required: 'Project description is required',
                      minLength: { value: 15, message: 'Message must be at least 15 characters long' }
                    })}
                  />

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting} icon={Send}>
                    {isSubmitting ? 'Sending Proposal Request...' : 'Send Inquiry Request'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
