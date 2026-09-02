import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import Modal from '../components/common/Modal';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import LoadingSpinner from '../components/common/LoadingSpinner';
import CTASection from '../components/home/CTASection';
import jobApi from '../services/jobApi';
import BRAND from '../constants/brand';
import { MapPin, Briefcase, Clock, Send, CheckCircle2, Heart, Zap, Globe, ChevronRight, ArrowRight, DollarSign, Award } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedDept, setSelectedDept] = useState('All');

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await jobApi.getJobs();
        setJobs(res.data || []);
      } catch (err) {
        console.error('[Jobs Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const openApplyModal = (job) => {
    setSelectedJob(job);
    setSubmitSuccess(false);
    setIsApplyModalOpen(true);
  };

  const onSubmitApplication = async (data) => {
    try {
      await jobApi.submitApplication({
        ...data,
        position: selectedJob?.title || data.position
      });
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      alert(err.message || 'Failed to submit application.');
    }
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      desc: 'Work from anywhere globally with flexible scheduling and core overlap hours.'
    },
    {
      icon: Zap,
      title: 'Competitive Compensation',
      desc: 'Top-of-market salary packages, performance bonuses, and annual appraisals.'
    },
    {
      icon: Heart,
      title: 'Health & Comprehensive Wellness',
      desc: 'Full medical, dental, vision insurance coverage for you and your family members.'
    },
    {
      icon: Award,
      title: 'Learning & Growth Budget',
      desc: 'Dedicated annual budget for tech certifications, books, and global tech conferences.'
    }
  ];

  const filteredJobs = selectedDept === 'All' ? jobs : jobs.filter(j => j.department === selectedDept);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Careers at ${BRAND.name} | Join Our Engineering Team`}
        description={`Explore open software engineering, mobile development, and UI/UX design positions at ${BRAND.name}. Build impactful global products.`}
        canonical="/careers"
      />

      {/* Sapphire Signature Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#005F96] via-[#004A75] to-[#003B60] text-white relative overflow-hidden text-left font-sans">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-blue-200 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300" />
            <span className="text-white font-semibold">Careers</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-300">
                <span className="uppercase tracking-widest">JOIN OUR GLOBAL TEAM</span>
              </div>
              <h1 className="text-[32px] sm:text-[42px] font-[800] text-white tracking-tight leading-tight">
                Build The Future of Enterprise Software With Us
              </h1>
              <p className="text-[16px] text-blue-100 leading-relaxed font-normal max-w-2xl">
                We are looking for passionate full-stack engineers, cloud architects, mobile developers, and creative designers who thrive on solving complex technical challenges.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-3">
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">100%</div>
                <div className="text-[11px] text-blue-200">Remote Flexibility</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">4.8★</div>
                <div className="text-[11px] text-blue-200">Glassdoor Rating</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">30+</div>
                <div className="text-[11px] text-blue-200">Team Members</div>
              </div>
              <div className="p-4 rounded-[12px] bg-white/10 border border-white/20 backdrop-blur-sm text-center">
                <div className="text-2xl font-[900] text-cyan-300">$2k</div>
                <div className="text-[11px] text-blue-200">Learning Stipend</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Culture & Benefits Cards */}
      <section className="py-16 bg-[#F4F8FA] border-b border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
              Life & Culture at {BRAND.name}
            </h2>
            <p className="text-[18px] text-slate-600 font-[400] mt-2">
              We empower our people with autonomy, continuous learning, and great work-life harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[14px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#006B8F]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-[10px] bg-cyan-50 border border-cyan-100 text-[#006B8F] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-[17px] font-[700] text-slate-900 mb-2">{b.title}</h4>
                    <p className="text-[13px] text-slate-600 leading-relaxed font-[400]">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Job Positions List */}
      <section id="openings" className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight">
              Current Career Opportunities
            </h2>
            <p className="text-[18px] text-slate-600 font-[400] mt-2">
              Find your next high-impact role with our engineering squads.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {['All', 'Engineering', 'Mobile', 'Design', 'QA & Testing'].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-5 py-2 rounded-full text-[13px] font-[600] transition-all font-sans ${
                  selectedDept === dept
                    ? 'bg-[#006B8F] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="py-12 flex justify-center">
              <LoadingSpinner message="Fetching open opportunities..." />
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-12 p-8 rounded-[16px] bg-[#F4F8FA] border border-slate-200">
              <Briefcase className="w-12 h-12 text-[#006B8F] mx-auto mb-3" />
              <h3 className="text-[18px] font-[700] text-slate-900">No Openings In This Department Right Now</h3>
              <p className="text-[14px] text-slate-600 mt-1">Send us an open application and we will keep your profile on file.</p>
              <button
                onClick={() => openApplyModal({ title: 'General Application' })}
                className="mt-4 px-6 py-2.5 rounded-[6px] bg-[#006B8F] text-white font-[700] text-[13px]"
              >
                Submit General Application
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job._id || job.id}
                  className="p-6 rounded-[14px] bg-white border border-slate-200/90 shadow-sm hover:border-[#006B8F] hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left group"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-[700] px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#006B8F] border border-cyan-100">
                        {job.department || 'Engineering'}
                      </span>
                      <span className="text-[11px] font-[600] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {job.type || 'Full Time'}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-[13px] text-slate-600 line-clamp-2 max-w-2xl font-[400]">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location || 'Remote / Hybrid'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.experience || '3+ Years Exp'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openApplyModal(job)}
                    className="px-6 py-2.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[13px] transition-all shrink-0"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          title={`Apply for ${selectedJob?.title || 'Open Role'}`}
        >
          {submitSuccess ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Application Submitted Successfully!</h3>
              <p className="text-xs text-slate-600">Our hiring team will review your credentials and get back to you within 3 business days.</p>
              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="mt-4 px-6 py-2 rounded-lg bg-[#006B8F] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitApplication)} className="space-y-4 text-left">
              <Input
                label="Full Name *"
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
              />
              <Input
                label="Email Address *"
                type="email"
                placeholder="john@example.com"
                {...register('email', { required: 'Email is required' })}
                error={errors.email?.message}
              />
              <Input
                label="Phone Number *"
                placeholder="+1 (555) 000-0000"
                {...register('phone', { required: 'Phone is required' })}
                error={errors.phone?.message}
              />
              <Input
                label="LinkedIn or Portfolio URL"
                placeholder="https://linkedin.com/in/username"
                {...register('portfolioUrl')}
              />
              <Textarea
                label="Cover Note / Why You're a Great Fit"
                rows={3}
                placeholder="Briefly describe your experience and relevant projects..."
                {...register('coverLetter')}
              />
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg bg-[#006B8F] hover:bg-[#005478] text-white text-xs font-bold disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}

      {/* Global Consultation CTA Banner */}
      <CTASection />
    </div>
  );
};

export default Careers;
