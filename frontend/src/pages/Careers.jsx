import React, { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import LoadingSpinner from '../components/common/LoadingSpinner';
import jobApi from '../services/jobApi';
import BRAND from '../constants/brand';
import { MapPin, Briefcase, Clock, Send, CheckCircle2, Heart, Zap, Globe } from 'lucide-react';
import { useForm } from 'react-hook-form';

export const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    { icon: Globe, title: 'Remote-First Culture', desc: 'Work from anywhere with flexible schedules and core alignment hours.' },
    { icon: Zap, title: 'Competitive Compensation', desc: 'Top tier salary bands, annual performance bonuses, and equity options.' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, vision coverage and wellness stipend.' },
    { icon: Briefcase, title: 'Learning & Growth', desc: '$2,000 annual budget for tech courses, conferences, and certifications.' }
  ];

  return (
    <>
      <SEO
        title="Careers - Join Our Engineering Team"
        description={`Explore open engineering, design, and solution architect positions at ${BRAND.name}. Build impactful global products.`}
      />

      <section className="py-20 bg-tech-grid relative text-center">
        <Container>
          <SectionHeading
            badge={`CAREERS AT ${BRAND.name.toUpperCase()}`}
            title="Build The Future of Enterprise Software"
            subtitle="We are looking for passionate senior developers, AI engineers, and UI/UX designers who thrive on solving complex technical challenges."
          />
        </Container>
      </section>

      {/* Benefits & Culture */}
      <section className="py-16 bg-brand-card/30">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-brand-card/80 border border-gray-800 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{b.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions List */}
      <section className="py-24 bg-brand-dark">
        <Container className="max-w-5xl">
          <SectionHeading
            badge="OPEN ROLES"
            title="Explore Open Opportunities"
            subtitle="Join our global team and work on high-impact client products."
          />

          {loading ? (
            <LoadingSpinner message="Fetching open job positions..." />
          ) : (
            <div className="space-y-6 text-left">
              {jobs.map((job) => (
                <div
                  key={job._id || job.slug}
                  className="p-8 rounded-3xl bg-brand-card/80 border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="blue">{job.department}</Badge>
                      <Badge variant="purple">{job.type}</Badge>
                      <span className="text-xs text-slate-400 font-mono flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" /> {job.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{job.description}</p>
                  </div>

                  <Button onClick={() => openApplyModal(job)} variant="primary" icon={Send}>
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Application Form Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title={`Apply for ${selectedJob?.title || 'Position'}`}
      >
        {submitSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Application Received!</h3>
            <p className="text-sm text-slate-300">
              Thank you for applying for <span className="text-blue-400 font-semibold">{selectedJob?.title}</span>. Our engineering talent acquisition team will review your application and contact you.
            </p>
            <Button onClick={() => setIsApplyModalOpen(false)} variant="outline" className="mt-4">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmitApplication)} className="space-y-4">
            <Input
              label="Full Name"
              required
              placeholder="e.g. Sarah Jenkins"
              error={errors.name?.message}
              {...register('name', { required: 'Full name is required' })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                required
                placeholder="sarah@example.com"
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email address is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
              />
              <Input
                label="Phone Number"
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                error={errors.phone?.message}
                {...register('phone', { required: 'Phone number is required' })}
              />
            </div>

            <Input
              label="Resume Link / Portfolio URL"
              placeholder="https://linkedin.com/in/yourname or PDF link"
              {...register('resume')}
            />

            <Textarea
              label="Cover Note / Message"
              rows={3}
              placeholder="Briefly describe your relevant tech stack experience..."
              {...register('message')}
            />

            <div className="pt-4 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setIsApplyModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isSubmitting} icon={Send}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};

export default Careers;
