import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import Modal from '../components/common/Modal';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';
import LoadingSpinner from '../components/common/LoadingSpinner';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import jobApi from '../services/jobApi';
import careerApi from '../services/careerApi';
import BRAND from '../constants/brand';
import {
  MapPin, Briefcase, Clock, Send, CheckCircle2, Heart, Zap, Globe, ChevronRight,
  ArrowRight, Award, ChevronLeft, Play, Star, Facebook, Linkedin, Instagram, Youtube, Twitter, Users, ShieldCheck,
  TrendingUp, Sparkles, Calendar, BookOpen, PartyPopper, HeartPulse
} from 'lucide-react';
import { useForm } from 'react-hook-form';

const ICON_MAP = {
  Users,
  TrendingUp,
  Sparkles,
  Heart,
  PartyPopper,
  Award,
  Calendar,
  BookOpen,
  Globe,
  Briefcase,
  ShieldCheck,
  HeartPulse
};

const SOCIAL_ICON_MAP = {
  Facebook,
  Twitter,
  X: Twitter,
  Linkedin,
  Instagram,
  Youtube
};

export const Careers = () => {
  const [cmsData, setCmsData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeTab, setActiveTab] = useState('Who we are');

  // Carousel States
  const [visionSlideIdx, setVisionSlideIdx] = useState(0);
  const [videoSlideIdx, setVideoSlideIdx] = useState(0);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [careerRes, jobsRes] = await Promise.all([
          careerApi.getCareerPage(),
          jobApi.getJobs()
        ]);

        if (careerRes && careerRes.data) {
          setCmsData(careerRes.data);
          if (careerRes.data.tabs?.length > 0) {
            setActiveTab(careerRes.data.tabs[0].label);
          }
        }
        if (jobsRes && jobsRes.data) {
          setJobs(jobsRes.data || []);
        }
      } catch (err) {
        console.error('[Careers Data Fetch Error]', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
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
        position: selectedJob?.title || data.position || 'General Application'
      });
      setSubmitSuccess(true);
      reset();
    } catch (err) {
      alert(err.message || 'Failed to submit application.');
    }
  };

  // Fallbacks
  const tabs = cmsData?.tabs?.map(t => t.label) || [
    'Who we are',
    'Why firevy.co',
    'Benefits / What we offer',
    'Life at firevy.co',
    'Hiring Process',
    'Current Openings'
  ];

  const visionSlides = cmsData?.visionSection?.slides?.length ? cmsData.visionSection.slides : [
    {
      title: "Health & Wellbeing",
      quote: "We place the health and mental well-being of our associates at the core of our values. Through initiatives that promote a culture of fitness and wellness, such as yoga sessions and marathons, we encourage holistic growth and a balanced lifestyle. These programs foster a sense of community, resilience, and overall well-being, empowering our associates to lead healthier, more fulfilling lives."
    },
    {
      title: "Continuous Learning & Upskilling",
      quote: "We invest heavily in the professional expansion of our team members. Through funded tech certifications, quarterly hackathons, hands-on workshops, and dedicated mentorship programs, we ensure our associates stay at the forefront of emerging AI and enterprise technologies."
    },
    {
      title: "Diversity & Inclusive Workplace",
      quote: "We thrive on diverse perspectives and inclusive collaboration. By creating an environment of equal opportunity and psychological safety, every team member is empowered to share ideas, innovate boldly, and lead transformative client outcomes."
    }
  ];

  const peopleTestimonials = cmsData?.peopleTestimonials?.length ? cmsData.peopleTestimonials : [
    {
      name: "Ankit Morasiya",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Umang Barot",
      role: "Technical Support Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Galav Shukla",
      role: "Business Development Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Parthiv Trivedi",
      role: "Business Development Manager",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Daxesh Prajapati",
      role: "Team Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mehul Gajjar",
      role: "Team Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const benefitsList = cmsData?.benefits?.length ? cmsData.benefits : [
    { title: 'Collaborative Culture', icon: 'Users' },
    { title: 'Opportunities for Growth', icon: 'TrendingUp' },
    { title: 'Innovative Projects', icon: 'Sparkles' },
    { title: 'Work Life Balance', icon: 'Heart' },
    { title: 'Celebrations & Outing', icon: 'PartyPopper' },
    { title: 'Rewards & Recognition', icon: 'Award' },
    { title: '5 Days work week', icon: 'Calendar' },
    { title: 'Continuous learning', icon: 'BookOpen' },
    { title: 'CSR Activities', icon: 'Globe' },
    { title: 'Professional Development', icon: 'Briefcase' },
    { title: 'Competency Building', icon: 'ShieldCheck' },
    { title: 'Health Insurance', icon: 'HeartPulse' }
  ];

  const lifePhotos = cmsData?.lifeAtFirevy?.length ? cmsData.lifeAtFirevy : [
    { id: '1', title: 'Team Trophy Celebration', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', isFeatured: false },
    { id: '2', title: 'Team Outing Arch', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', isFeatured: false },
    { id: '3', title: 'Holi Festival Color Celebration', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80', isFeatured: true },
    { id: '4', title: 'Office Cake Celebration', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80', isFeatured: false },
    { id: '5', title: 'Office Reception Gathering', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', isFeatured: false },
    { id: '6', title: 'Office Corridor Team', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', isFeatured: false },
    { id: '7', title: 'Diwali Festival Group Photo', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', isFeatured: false }
  ];

  const hiringSteps = cmsData?.hiringProcess?.length ? cmsData.hiringProcess : [
    {
      title: '1. Application',
      description: 'Our intuitive career portal provides a seamless application experience, allowing you to explore and apply for opportunities that align with your expertise. Submit your updated resume and provide detailed insights into your professional experience to enhance your candidacy for the desired role.'
    },
    {
      title: '2. Screening & Shortlisting:',
      description: 'Our recruitment team, including our technical panel, will carefully review your application. If your qualifications and skills align with our requirements, we will reach out to you for further discussion.'
    },
    {
      title: '3. Technical Interview',
      description: 'The technical interview presents a valuable opportunity to showcase your expertise and problem-solving abilities. The questions will cover a range of disciplines and may include critical situation, analytical challenges, and unconventional problem-solving scenarios to assess your technical proficiency and critical thinking skills.'
    },
    {
      title: '4. HR Interview',
      description: `This is a great opportunity for us to get to know each other better. We aim to understand your career aspirations, skills, strengths, and passions. Likewise, we encourage you to engage with our recruiter and ask any questions you may have about the role or ${BRAND.name} as an organization.`
    },
    {
      title: '5. Decision & Onboarding',
      description: `Upon successfully completing the selection process, If you are successful then we will call you for joining formalities, including details of the compensation structure and employment terms at ${BRAND.name}.`
    }
  ];

  const statsList = cmsData?.stats?.length ? cmsData.stats : [
    { value: '200+', label: 'IT Professionals' },
    { value: '20+', label: 'Fortune 500 Companies' },
    { value: '95%', label: 'Client Retention' },
    { value: '2800+', label: 'Satisfied Clients' },
    { value: '23+', label: 'Years of Experience' }
  ];

  const socialLinks = cmsData?.socialMedia?.links?.length ? cmsData.socialMedia.links : [
    { platform: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    { platform: 'X', url: 'https://twitter.com', icon: 'Twitter' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { platform: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' }
  ];

  const featuredPhoto = lifePhotos.find(p => p.isFeatured) || lifePhotos[2] || lifePhotos[0];
  const otherPhotos = lifePhotos.filter(p => p !== featuredPhoto);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={cmsData?.meta?.title || `Build your Future with us | Careers at ${BRAND.name}`}
        description={cmsData?.meta?.description || `Explore open software engineering, mobile development, and UI/UX design positions at ${BRAND.name}. Build impactful global products.`}
        canonical={cmsData?.meta?.canonical || "/careers"}
      />

      {/* 1. HERO SECTION: "Build your Future with us" (Exact Reference Screenshot 0 Match) */}
      <section className="pt-32 pb-16 bg-[#F4F7FB] text-left font-sans relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[34px] sm:text-[42px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                {cmsData?.hero?.title || 'Build your Future with us'}
              </h1>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.8] font-[400] font-sans max-w-xl">
                {cmsData?.hero?.description ||
                  'Our team is the heart of everything we do. We are dedicated to empowering them to drive meaningful change and shape a brighter future for all. We believe in fostering fulfilling careers by offering inspiring opportunities, continuous development, and the encouragement to unlock their full potential and thrive both personally and professionally.'}
              </p>
            </div>

            {/* Right 3D Vector Illustration or Uploaded Image */}
            <div className="lg:col-span-6 flex justify-center items-center py-4">
              {cmsData?.hero?.image ? (
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl border border-slate-200">
                  <img
                    src={cmsData.hero.image}
                    alt={cmsData.hero.title || "Careers Hero Artwork"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full max-w-[500px] aspect-[4/3]">
                  <svg viewBox="0 0 500 380" className="w-full h-full drop-shadow-xl">
                    {/* Floating Background Elements */}
                    <circle cx="80" cy="90" r="16" fill="#E0F2FE" />
                    <circle cx="420" cy="120" r="22" fill="#E0F2FE" />
                    <rect x="380" y="160" width="30" height="40" rx="4" fill="#3B82F6" opacity="0.8" />
                    <line x1="390" y1="175" x2="400" y2="175" stroke="#FFFFFF" strokeWidth="2" />
                    <line x1="390" y1="185" x2="400" y2="185" stroke="#FFFFFF" strokeWidth="2" />

                    {/* Isometric Laptop Base & Screen */}
                    <polygon points="120,240 380,240 430,290 70,290" fill="#94A3B8" />
                    <polygon points="125,245 375,245 420,285 80,285" fill="#CBD5E1" />
                    <polygon points="150,110 350,110 375,240 125,240" fill="#3B82F6" />
                    <polygon points="155,115 345,115 368,235 132,235" fill="#EFF6FF" />

                    {/* Candidate Profiles on Screen */}
                    <rect x="160" y="130" width="45" height="55" rx="4" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="1.5" />
                    <circle cx="182" cy="148" r="10" fill="#93C5FD" />
                    <rect x="170" y="165" width="24" height="4" rx="1" fill="#3B82F6" />

                    <rect x="220" y="130" width="45" height="55" rx="4" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="1.5" />
                    <circle cx="242" cy="148" r="10" fill="#FCA5A5" />
                    <rect x="230" y="165" width="24" height="4" rx="1" fill="#EF4444" />

                    <rect x="280" y="130" width="45" height="55" rx="4" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="1.5" />
                    <circle cx="302" cy="148" r="10" fill="#86EFAC" />
                    <rect x="290" y="165" width="24" height="4" rx="1" fill="#10B981" />

                    {/* Candidate Profile Cards Grid Row 2 */}
                    <rect x="160" y="192" width="165" height="30" rx="4" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1" />
                    <circle cx="175" cy="207" r="6" fill="#FDBA74" />
                    <rect x="190" y="202" width="60" height="4" rx="1" fill="#64748B" />
                    <rect x="190" y="209" width="40" height="3" rx="1" fill="#94A3B8" />

                    {/* Shaking Hands Isometric Characters in Front */}
                    <circle cx="160" cy="270" r="12" fill="#FED7AA" />
                    <path d="M 148 285 L 172 285 L 175 320 L 145 320 Z" fill="#22C55E" />
                    <path d="M 152 320 L 145 365 M 168 320 L 175 365" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />

                    <circle cx="210" cy="260" r="12" fill="#FED7AA" />
                    <path d="M 198 275 L 222 275 L 225 315 L 195 315 Z" fill="#0284C7" />
                    <path d="M 202 315 L 195 360 M 218 315 L 225 360" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />

                    {/* Magnifying Glass Over Computer Base */}
                    <circle cx="290" cy="300" r="28" fill="none" stroke="#0284C7" strokeWidth="8" />
                    <circle cx="290" cy="300" r="24" fill="#38BDF8" opacity="0.3" />
                    <line x1="310" y1="320" x2="345" y2="355" stroke="#0284C7" strokeWidth="10" strokeLinecap="round" />

                    {/* Binary Code Stream on Ground */}
                    <text x="100" y="325" fill="#60A5FA" fontSize="11" fontWeight="700" fontFamily="monospace">0101011000100</text>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB NAVIGATION BAR & TAB CONTENT (Exact Reference Screenshots 0 & 1 Match) */}
      <section className="bg-white font-sans text-left pb-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          
          {/* Tab Header Bar */}
          <div className="bg-[#EBF7FC] rounded-[10px] p-1.5 flex flex-wrap items-center justify-between gap-1 mb-10 shadow-xs border border-[#D0EBF5]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-1 min-w-[140px] py-3.5 px-4 text-center font-[700] text-[14px] sm:text-[15px] transition-all cursor-pointer rounded-[6px] font-sans ${
                    isActive
                      ? 'bg-[#00668C] text-white shadow-md'
                      : 'text-slate-700 hover:text-[#00668C] hover:bg-white/60'
                  }`}
                >
                  {tab}
                  {/* Arrow Indicator on Active Tab */}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#00668C]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB 1: WHO WE ARE */}
          {activeTab === 'Who we are' && (
            <div className="space-y-10 font-sans">
              {/* Block 1 */}
              <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-[460px] flex items-center justify-center">
                      {cmsData?.whoWeAre?.[0]?.image ? (
                        <img src={cmsData.whoWeAre[0].image} alt="Who we are" className="w-full h-auto rounded-[16px] object-cover" />
                      ) : (
                        <svg viewBox="0 0 460 360" className="w-full h-auto drop-shadow-sm">
                          <circle cx="230" cy="180" r="150" fill="#E2F3FC" />
                          <path d="M 60 140 L 40 270 M 60 140 L 80 270 M 60 140 L 60 270" stroke="#78909C" strokeWidth="4" strokeLinecap="round" />
                          <rect x="25" y="60" width="85" height="100" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
                          <circle cx="67" cy="110" r="28" fill="#E0F2FE" />
                          <path d="M 67 110 L 67 90 A 20 20 0 0 1 87 110 Z" fill="#0284C7" />
                          <line x1="35" y1="80" x2="75" y2="80" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                          <line x1="35" y1="92" x2="55" y2="92" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                          <rect x="180" y="210" width="130" height="70" rx="4" fill="#1E293B" />
                          <rect x="185" y="215" width="120" height="60" fill="#38BDF8" />
                          <path d="M 235 275 L 255 275 L 260 295 L 230 295 Z" fill="#64748B" />
                          <rect x="210" y="295" width="70" height="8" rx="2" fill="#475569" />
                          <ellipse cx="230" cy="295" rx="190" ry="25" fill="#334155" />
                          <circle cx="110" cy="142" r="12" fill="#FDBA74" />
                          <path d="M 96 160 Q 110 155 124 160 L 128 205 L 92 205 Z" fill="#38BDF8" />
                          <circle cx="167" cy="120" r="11" fill="#FDBA74" />
                          <path d="M 154 133 L 180 133 L 184 195 L 150 195 Z" fill="#0284C7" />
                          <circle cx="245" cy="110" r="11" fill="#FDBA74" />
                          <path d="M 232 125 L 258 125 L 264 195 L 226 195 Z" fill="#0369A1" />
                          <polygon points="310,215 350,215 358,230 302,230" fill="#94A3B8" />
                          <rect x="312" y="192" width="36" height="23" rx="2" fill="#0284C7" stroke="#CBD5E1" strokeWidth="1" />
                          <circle cx="339" cy="140" r="11" fill="#FDBA74" />
                          <path d="M 326 153 L 352 153 L 356 210 L 322 210 Z" fill="#0284C7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4 text-slate-600 font-[400] text-[15px] sm:text-[15.5px] leading-[1.85] font-sans">
                    {cmsData?.whoWeAre?.[0]?.paragraphs ? (
                      cmsData.whoWeAre[0].paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))
                    ) : (
                      <>
                        <p>
                          <strong className="text-slate-900 font-[800]">{BRAND.name}</strong>, an ISO 27001:2013 certified Web and Mobile App Development Company, has been delivering cutting-edge IT solutions since 2002. We provide a comprehensive suite of IT services and domain-specific solutions tailored for enterprises, ISVs, digital agencies, and startups.
                        </p>
                        <p>
                          Driven by innovation and excellence, our highly skilled team combines industry best practices, deep technological expertise, and extensive business domain knowledge to accelerate digital transformation. With over 23+ years of experience, our diverse team engages closely with clients, offering high-end technology solutions and pioneering innovations that drive business success.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4 text-slate-600 font-[400] text-[15px] sm:text-[15.5px] leading-[1.85] font-sans">
                    {cmsData?.whoWeAre?.[1]?.paragraphs ? (
                      cmsData.whoWeAre[1].paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))
                    ) : (
                      <>
                        <p>
                          We are an award-winning, end-to-end software solutions provider and IT consulting firm with a proven track record of excellence. We have built strong, long-term partnerships with a diverse clientele, serving 2,500+ satisfied customers, from start-ups to large enterprises.
                        </p>
                        <p>
                          Our team comprises highly skilled professionals, including web designers, developers, mobile app specialists, network engineers, and QA testers, all dedicated to delivering cutting-edge solutions. With an average experience of 4+ years, our experts bring deep technical expertise and industry best practices to every project, ensuring innovation, efficiency, and success.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-[460px] flex items-center justify-center">
                      {cmsData?.whoWeAre?.[1]?.image ? (
                        <img src={cmsData.whoWeAre[1].image} alt="Who we are" className="w-full h-auto rounded-[16px] object-cover" />
                      ) : (
                        <svg viewBox="0 0 460 360" className="w-full h-auto drop-shadow-sm">
                          <rect x="20" y="20" width="420" height="320" rx="24" fill="#E2F3FC" />
                          <rect x="50" y="50" width="130" height="130" rx="8" fill="#FFFFFF" stroke="#78909C" strokeWidth="3" />
                          <line x1="115" y1="50" x2="115" y2="180" stroke="#78909C" strokeWidth="3" />
                          <line x1="50" y1="115" x2="180" y2="115" stroke="#78909C" strokeWidth="3" />
                          <circle cx="85" cy="85" r="16" fill="#FBBF24" />
                          <circle cx="390" cy="85" r="22" fill="#78909C" />
                          <circle cx="390" cy="85" r="18" fill="#E0F2FE" />
                          <rect x="190" y="240" width="180" height="65" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                          <circle cx="125" cy="110" r="11" fill="#FDBA74" />
                          <path d="M 112 125 L 138 125 L 144 190 L 106 190 Z" fill="#0369A1" />
                          <circle cx="230" cy="105" r="11" fill="#FDBA74" />
                          <path d="M 218 120 L 242 120 L 246 185 L 214 185 Z" fill="#0284C7" />
                          <circle cx="324" cy="110" r="11" fill="#FDBA74" />
                          <path d="M 312 125 L 336 125 L 340 190 L 308 190 Z" fill="#38BDF8" />
                          <rect x="325" y="143" width="32" height="22" rx="2" fill="#0284C7" stroke="#CBD5E1" strokeWidth="1" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WHY FIREVY.CO */}
          {activeTab === 'Why firevy.co' && (
            <div className="space-y-10 font-sans">
              {(cmsData?.whyFirevy?.length ? cmsData.whyFirevy : [
                {
                  title: 'Impact:',
                  quote: 'By harnessing creativity and strategic insight, we enable our teams to develop transformative solutions that foster meaningful progress and prove that with the right support, limitless possibilities can be realized.'
                },
                {
                  title: 'Development:',
                  quote: 'We equip our associates with extensive knowledge and learning opportunities, fostering innovation and adaptability. This empowers them to stay at the forefront of industry trends and drive impactful transformation.'
                },
                {
                  title: 'Support:',
                  quote: 'By fostering a culture of continuous upskilling and reskilling, along with diverse career opportunities across the organization, we enable our people—at every stage of their journey—to unlock their potential and evolve into the professionals they strive to become.'
                },
                {
                  title: 'Progress:',
                  quote: 'We see our people as lifelong partners in success, fostering relationships that grow and evolve. By continuously investing in their development, we cultivate a culture of continuous growth, empowering them to strive for new achievements at every stage of their careers.'
                }
              ]).map((pillar, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={pillar.id || idx} className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                      {isEven ? (
                        <>
                          <div className="lg:col-span-5 flex justify-center">
                            <div className="w-full max-w-[460px] flex items-center justify-center">
                              {pillar.image ? (
                                <img src={pillar.image} alt={pillar.title} className="w-full h-auto rounded-[16px] object-cover" />
                              ) : (
                                <svg viewBox="0 0 460 360" className="w-full h-auto drop-shadow-sm">
                                  <rect x="20" y="20" width="420" height="320" rx="24" fill="#E2F3FC" />
                                  <rect x="180" y="100" width="24" height="120" rx="3" fill="#90CAF9" opacity="0.7" />
                                  <rect x="212" y="75" width="24" height="145" rx="3" fill="#64B5F6" opacity="0.8" />
                                  <rect x="244" y="50" width="24" height="170" rx="3" fill="#0284C7" />
                                  <path d="M 170 120 L 210 90 L 244 60 L 285 35" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
                                  <circle cx="110" cy="140" r="12" fill="#FDBA74" />
                                  <path d="M 98 155 L 126 155 L 130 210 L 94 210 Z" fill="#38BDF8" />
                                  <circle cx="320" cy="135" r="12" fill="#FDBA74" />
                                  <path d="M 306 150 L 334 150 L 338 215 L 302 215 Z" fill="#0284C7" />
                                </svg>
                              )}
                            </div>
                          </div>

                          <div className="lg:col-span-7 space-y-4 text-slate-600 font-[400] text-[15px] sm:text-[15.5px] leading-[1.85] font-sans">
                            <h3 className="text-[30px] sm:text-[34px] font-[800] text-slate-900 font-sans tracking-tight">
                              {pillar.title}
                            </h3>
                            <p className="italic">
                              "{pillar.quote}"
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="lg:col-span-7 space-y-4 text-slate-600 font-[400] text-[15px] sm:text-[15.5px] leading-[1.85] font-sans">
                            <h3 className="text-[30px] sm:text-[34px] font-[800] text-slate-900 font-sans tracking-tight">
                              {pillar.title}
                            </h3>
                            <p className="italic">
                              "{pillar.quote}"
                            </p>
                          </div>

                          <div className="lg:col-span-5 flex justify-center">
                            <div className="w-full max-w-[460px] flex items-center justify-center">
                              {pillar.image ? (
                                <img src={pillar.image} alt={pillar.title} className="w-full h-auto rounded-[16px] object-cover" />
                              ) : (
                                <svg viewBox="0 0 460 360" className="w-full h-auto drop-shadow-sm">
                                  <rect x="20" y="20" width="420" height="320" rx="24" fill="#E2F3FC" />
                                  <rect x="180" y="60" width="135" height="90" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="3" />
                                  <line x1="190" y1="85" x2="260" y2="85" stroke="#CBD5E1" strokeWidth="2" />
                                  <line x1="190" y1="105" x2="270" y2="105" stroke="#0284C7" strokeWidth="2" />
                                  <rect x="140" y="190" width="200" height="15" rx="3" fill="#1E293B" />
                                  <circle cx="160" cy="140" r="12" fill="#FDBA74" />
                                  <path d="M 146 155 L 174 155 L 178 210 L 142 210 Z" fill="#0284C7" />
                                  <circle cx="310" cy="145" r="12" fill="#FDBA74" />
                                  <path d="M 298 160 L 324 160 L 328 210 L 294 210 Z" fill="#0369A1" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: BENEFITS / WHAT WE OFFER */}
          {activeTab === 'Benefits / What we offer' && (
            <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-14 font-sans space-y-10 text-center">
              <h3 className="text-[34px] sm:text-[38px] font-[800] text-slate-900 tracking-tight font-sans">
                Benefits
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {benefitsList.map((b, idx) => {
                  const BIcon = ICON_MAP[b.icon] || Sparkles;
                  return (
                    <div
                      key={b.id || idx}
                      className="p-8 rounded-[20px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center space-y-4 min-h-[170px] group cursor-pointer"
                    >
                      <div className="text-[#00668C] group-hover:scale-110 transition-transform">
                        <BIcon className="w-11 h-11 stroke-[1.75]" />
                      </div>
                      <h4 className="text-[16px] sm:text-[17px] font-[800] text-slate-900 font-sans leading-tight">
                        {b.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: LIFE AT FIREVY.CO */}
          {activeTab === 'Life at firevy.co' && (
            <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-14 font-sans space-y-8 text-center">
              <h3 className="text-[34px] sm:text-[38px] font-[800] text-slate-900 tracking-tight font-sans">
                Life at {BRAND.name}
              </h3>

              {/* Photo Collage Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 max-w-6xl mx-auto overflow-hidden rounded-[20px] shadow-lg border border-slate-200/80 bg-white p-2.5">
                {/* Left Column (2 Stacked Photos) */}
                <div className="md:col-span-3 space-y-3.5 flex flex-col justify-between">
                  {otherPhotos.slice(0, 2).map((photo, pIdx) => (
                    <div key={photo.id || pIdx} className="overflow-hidden rounded-[12px] h-48 sm:h-56 shadow-xs group">
                      <img
                        src={photo.image}
                        alt={photo.title || 'Team Celebration'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Center Column (Tall Featured Holi Color Festival Photo) */}
                <div className="md:col-span-4 h-full min-h-[380px] sm:min-h-[460px] overflow-hidden rounded-[12px] shadow-xs group">
                  <img
                    src={featuredPhoto.image}
                    alt={featuredPhoto.title || 'Featured Festival Celebration'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Column (4 Grid Photos) */}
                <div className="md:col-span-5 grid grid-cols-2 gap-3.5">
                  {otherPhotos.slice(2, 6).map((photo, pIdx) => (
                    <div key={photo.id || pIdx} className="overflow-hidden rounded-[12px] h-48 sm:h-56 shadow-xs group">
                      <img
                        src={photo.image}
                        alt={photo.title || 'Office Celebration'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: HIRING PROCESS */}
          {activeTab === 'Hiring Process' && (
            <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-14 font-sans space-y-10 text-center">
              <h3 className="text-[34px] sm:text-[38px] font-[800] text-slate-900 tracking-tight font-sans">
                How We Hire?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {hiringSteps.map((step, idx) => (
                  <div key={step.id || idx} className="bg-[#E2F3FC] rounded-[20px] p-8 space-y-3.5 border border-[#D0EBF5] flex flex-col justify-start">
                    <h4 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                      {step.title}
                    </h4>
                    <p className="text-[14.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CURRENT OPENINGS (Dynamic Jobs Integration) */}
          {activeTab === 'Current Openings' && (
            <div className="space-y-10 font-sans">
              <div className="bg-[#F4F7FB] rounded-[24px] p-8 sm:p-14 text-center space-y-10">
                <h3 className="text-[34px] sm:text-[38px] font-[800] text-slate-900 tracking-tight font-sans">
                  Current Job Openings
                </h3>

                <div className="space-y-4 max-w-5xl mx-auto text-left">
                  {jobs.length > 0 ? (
                    jobs.map((job) => (
                      <div
                        key={job._id || job.id}
                        className="p-6 sm:p-7 rounded-[18px] bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-[19px] sm:text-[21px] font-[800] text-slate-900 font-sans tracking-tight">
                              {job.title}
                            </h4>
                            {job.urgent && (
                              <span className="bg-red-500 text-white text-[10px] font-[800] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                URGENT
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-[13.5px] font-[700] text-[#00668C] font-sans">
                            <div>
                              <span className="text-slate-800 font-[800]">Experience : </span>
                              <span>{job.experience}</span>
                            </div>
                            <div className="border-l border-slate-300 pl-4 sm:pl-8">
                              <span className="text-slate-800 font-[800]">No. of Openings : </span>
                              <span>{job.openings || 1}</span>
                            </div>
                            {job.location && (
                              <div className="border-l border-slate-300 pl-4 sm:pl-8">
                                <span className="text-slate-800 font-[800]">Location : </span>
                                <span className="text-slate-600 font-[500]">{job.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => openApplyModal(job)}
                          className="px-8 py-3 rounded-[8px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[14px] transition-all shrink-0 shadow-sm hover:shadow-md cursor-pointer font-sans"
                        >
                          Apply Now
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-slate-500">
                      <p>No active job openings at the moment. You can submit a general application below.</p>
                    </div>
                  )}
                </div>

                {/* Sub-banner inside Current Openings */}
                <div className="bg-[#00668C] text-white p-8 sm:p-12 rounded-[20px] text-center space-y-5 shadow-lg max-w-5xl mx-auto">
                  <h4 className="text-[20px] sm:text-[23px] font-[800] text-white font-sans tracking-tight">
                    {cmsData?.generalSettings?.notFindingJobTitle || 'Not finding the right opening as per your profile & skillset?'}
                  </h4>
                  <p className="text-[14.5px] sm:text-[15px] text-slate-100 font-[400] max-w-3xl mx-auto leading-relaxed font-sans">
                    {cmsData?.generalSettings?.notFindingJobDesc ||
                      'If you are interested to work with us but are unable to find a suitable opportunity, submit your profile & we will reach out to you!!!'}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => openApplyModal({ title: 'General Application' })}
                      className="px-9 py-3 rounded-[8px] bg-white hover:bg-slate-100 text-[#00668C] font-[800] text-[14px] transition-all shadow-md cursor-pointer font-sans"
                    >
                      {cmsData?.generalSettings?.notFindingJobButtonText || 'Apply here'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. "Crafting a Vision, Shaping the Future" CAROUSEL & STATS BAR (Exact Reference Screenshot 2 Match) */}
      <section className="py-16 bg-[#E0F2FE] text-slate-900 font-sans text-center border-t border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight mb-8 font-sans">
            {cmsData?.visionSection?.title || 'Crafting a Vision, Shaping the Future'}
          </h2>

          {/* Carousel Card Box */}
          <div className="bg-white rounded-[24px] p-8 sm:p-12 shadow-xl border border-slate-200/90 max-w-4xl mx-auto relative mb-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Vector Graphic: Yoga Meditation Woman */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-md">
                    <rect x="30" y="90" width="40" height="30" rx="4" fill="#60A5FA" opacity="0.9" />
                    <line x1="40" y1="100" x2="60" y2="100" stroke="#FFF" strokeWidth="2" />
                    <line x1="40" y1="108" x2="55" y2="108" stroke="#FFF" strokeWidth="2" />
                    <circle cx="90" cy="50" r="18" fill="#FBBF24" />
                    <path d="M 82 50 Q 90 40 98 50" stroke="#B45309" strokeWidth="2" fill="none" />
                    <rect x="230" y="80" width="35" height="45" rx="4" fill="#93C5FD" />
                    <circle cx="150" cy="115" r="22" fill="#334155" />
                    <circle cx="150" cy="120" r="16" fill="#FED7AA" />
                    <path d="M 134 115 Q 150 90 166 115 Q 150 100 134 115 Z" fill="#1E293B" />
                    <path d="M 125 150 L 175 150 L 185 200 L 115 200 Z" fill="#0284C7" />
                    <path d="M 142 150 L 150 175 L 158 150 Z" fill="#FFFFFF" />
                    <path d="M 100 210 Q 150 250 200 210 Q 150 215 100 210 Z" fill="#0369A1" />
                    <ellipse cx="150" cy="220" rx="60" ry="15" fill="#0284C7" />
                  </svg>
                </div>
              </div>

              {/* Right Quote Content */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-[22px] font-[800] text-slate-900 font-sans">
                  {visionSlides[visionSlideIdx]?.title}
                </h3>
                <p className="text-[14.5px] font-[400] text-slate-600 leading-[1.8] font-sans italic">
                  "{visionSlides[visionSlideIdx]?.quote}"
                </p>
              </div>
            </div>

            {/* Left & Right Arrows */}
            <button
              type="button"
              onClick={() => setVisionSlideIdx((prev) => (prev === 0 ? visionSlides.length - 1 : prev - 1))}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#00668C] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setVisionSlideIdx((prev) => (prev === visionSlides.length - 1 ? 0 : prev + 1))}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#00668C] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {visionSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setVisionSlideIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${visionSlideIdx === i ? 'w-6 bg-[#00668C]' : 'bg-slate-300'}`}
                />
              ))}
            </div>
          </div>

          {/* Blue Stats Card Bar (Exact Reference Screenshot 2 Match) */}
          <div className="bg-[#00668C] text-white p-8 sm:p-10 rounded-[20px] shadow-xl max-w-5xl mx-auto font-sans">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center items-center">
              {statsList.map((stat, idx) => (
                <div key={stat.id || idx} className={`space-y-1 ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <span className="text-[34px] sm:text-[38px] font-[900] font-sans leading-none block">{stat.value}</span>
                  <p className="text-[13px] font-[700] text-cyan-100 font-sans">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. "Our People Our Pride" VIDEO TESTIMONIALS (Exact Reference Screenshot 3 Match) */}
      <section className="py-20 bg-white font-sans text-center">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight mb-10 font-sans">
            Our People Our Pride
          </h2>

          {/* 3 Video Cards Slider Box */}
          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {peopleTestimonials.slice(videoSlideIdx * 3, videoSlideIdx * 3 + 3).map((item, idx) => (
                <div key={idx} className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 bg-white group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                      <a
                        href={item.videoUrl || 'https://www.youtube.com'}
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 rounded-full bg-white/90 text-[#00668C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Play className="w-6 h-6 fill-[#00668C] ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5 bg-slate-900 text-white space-y-1">
                    <h4 className="text-[18px] font-[800] font-sans">{item.name}</h4>
                    <p className="text-[13px] text-cyan-200 font-[500] font-sans">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Left & Right Arrows */}
            {peopleTestimonials.length > 3 && (
              <>
                <button
                  type="button"
                  onClick={() => setVideoSlideIdx((prev) => (prev === 0 ? 1 : 0))}
                  className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#00668C] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setVideoSlideIdx((prev) => (prev === 1 ? 0 : 1))}
                  className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-[#00668C] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Dots */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  type="button"
                  onClick={() => setVideoSlideIdx(dot)}
                  className={`transition-all cursor-pointer rounded-full ${
                    videoSlideIdx === dot
                      ? 'w-8 h-2.5 bg-[#00668C]'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Social Media" SECTION (Exact Reference Screenshot 3 Match) */}
      <section className="py-16 bg-[#F4F7FB] font-sans text-left border-t border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Text */}
            <div className="lg:col-span-5 space-y-2">
              <h2 className="text-[32px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                {cmsData?.socialMedia?.title || 'Social Media'}
              </h2>
              <p className="text-[14.5px] font-[400] text-slate-600 leading-relaxed font-sans">
                {cmsData?.socialMedia?.subtitle || 'We follow a very simple, straight forward, and transparent process'}
              </p>
            </div>

            {/* Right Social Icons Row (Filled Teal Circles inside White Rounded Cards) */}
            <div className="lg:col-span-7 flex flex-wrap items-center gap-4 sm:gap-6 justify-start lg:justify-end">
              {socialLinks.map((item, idx) => {
                const SIcon = SOCIAL_ICON_MAP[item.platform] || SOCIAL_ICON_MAP[item.icon] || Globe;
                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[20px] shadow-md border border-slate-200/80 flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#008BB9] group-hover:bg-[#00668C] flex items-center justify-center text-white transition-colors">
                      <SIcon className="w-6 h-6 fill-current text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATION MODAL */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          title={`Apply for ${selectedJob?.title || 'Open Position'}`}
        >
          {submitSuccess ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Application Submitted!</h3>
              <p className="text-xs text-slate-600">Our hiring squad will review your application and respond within 3 business days.</p>
              <button
                type="button"
                onClick={() => setIsApplyModalOpen(false)}
                className="mt-4 px-6 py-2 rounded-lg bg-[#00668C] text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitApplication)} className="space-y-4 text-left font-sans">
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
                label="Cover Note / Relevant Experience"
                rows={3}
                placeholder="Tell us about your background and expertise..."
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
                  className="px-6 py-2 rounded-lg bg-[#00668C] hover:bg-[#004E6C] text-white text-xs font-bold disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}

      {/* 7. "Ready To Take Challenge?" CAREERS CTA BANNER (Exact Reference Screenshot 0 Match) */}
      <section className="py-20 bg-[#00668C] text-white font-sans text-center relative overflow-hidden">
        {/* Soft Background Geometric Shapes */}
        <div className="absolute top-6 left-10 w-24 h-24 rounded-full border-4 border-white/10 opacity-40 pointer-events-none" />
        <div className="absolute bottom-6 right-16 w-32 h-32 rounded-[20px] bg-white/5 opacity-50 pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <h2 className="text-[32px] sm:text-[42px] font-[800] tracking-tight leading-tight font-sans">
            {cmsData?.ctaBanner?.title || 'Ready To Take Challenge?'}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-100 font-[400] max-w-3xl mx-auto leading-relaxed font-sans">
            {cmsData?.ctaBanner?.description || (
              <>
                If you have a passion for planning & want to work for a rapidly growing entrepreneurial company, please send your resume to{' '}
                <a href={`mailto:${cmsData?.ctaBanner?.email || 'careers@firevy.co'}`} className="underline hover:text-cyan-200">
                  {cmsData?.ctaBanner?.email || 'careers@firevy.co'}
                </a>
              </>
            )}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openApplyModal({ title: 'General Application' })}
              className="px-10 py-3.5 rounded-[8px] bg-white hover:bg-slate-100 text-[#00668C] font-[800] text-[15px] transition-all shadow-lg hover:shadow-xl cursor-pointer font-sans"
            >
              {cmsData?.ctaBanner?.buttonText || 'Apply Here'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
