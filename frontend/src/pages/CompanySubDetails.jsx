import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import {
  Users, Award, Calendar, BookOpen, Heart, ShieldCheck, CheckCircle2,
  ArrowRight, FileText, Mic, Globe, Sparkles, MessageSquare, Star, Quote, ChevronRight, ChevronLeft, Briefcase, Target, Linkedin
} from 'lucide-react';

const coreValuesData = [
  {
    id: 1,
    title: 'Transparency & Integrity',
    desc: 'To be ethical, sincere and open in all our transactions, Trust is at the core of this responsibility.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-600 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 15c6.667-6 13.333 0 20-6" />
          <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
          <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
          <path d="M17 6l-2.5-2.5" />
          <path d="M14 8l-1-1" />
          <path d="M7 18l2.5 2.5" />
          <path d="M10 16l1 1" />
        </svg>
      </div>
    )
  },
  {
    id: 2,
    title: 'Passion For Excellence',
    desc: 'We strive to contribute our best to our customers while evoking others to do the same.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="12" cy="14" r="3" />
          <path d="M10.5 16.5L9 21l3-1.5 3 1.5-1.5-4.5" />
        </svg>
      </div>
    )
  },
  {
    id: 3,
    title: 'Customer Sovereignty',
    desc: 'We closely work with our customer to deliver better solutions with added values.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
          <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
      </div>
    )
  },
  {
    id: 4,
    title: 'Leadership By Examples',
    desc: 'We set standards in our business and transactions, and be a model for the industry.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-cyan-500 flex items-center justify-center text-cyan-600 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <polygon points="12 2 13 4 15 4 13.5 5.5 14 7.5 12 6 10 7.5 10.5 5.5 9 4 11 4" fill="currentColor" />
        </svg>
      </div>
    )
  },
  {
    id: 5,
    title: 'Responsibility',
    desc: 'We take personal responsibility for our actions and we strive to exceed your expectations.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-pink-500 flex items-center justify-center text-pink-600 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          <circle cx="18" cy="4" r="2" />
        </svg>
      </div>
    )
  },
  {
    id: 6,
    title: 'Continuous Learning',
    desc: 'We always upgrade our skills to successfully adapt to the changing technologies.',
    icon: (
      <div className="w-12 h-12 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-600 mb-4">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          <circle cx="12" cy="7" r="2" />
        </svg>
      </div>
    )
  }
];

const clientReviews = [
  {
    id: 1,
    name: 'AMR ELATTAR',
    location: 'Saudi Arabia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    headline: '...technical support was very responsive.',
    text: 'firevy.co delivered the software in a timely manner. The team was responsive to requests and feedback and...',
    rating: '4.5',
    scores: { quality: '4.5', schedule: '4.5', cost: '4.5', refer: '5.0' }
  },
  {
    id: 2,
    name: 'Nick',
    location: 'Australia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    headline: 'I was impressed by their ability to communicate effectively.',
    text: 'firevy.co delivered a user-friendly application that looked great. The client received positive feedback from...',
    rating: '5.0',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
  },
  {
    id: 3,
    name: 'Vid Randjelovic',
    location: 'Phuket, Thailand',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    headline: 'Their mobile app skills, helpfulness, and overall problem-solving blew me...',
    text: 'firevy.co created a platform that the client was happy with. They were easy to talk to, responsive, and attentive to the...',
    rating: '5.0',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
  },
  {
    id: 4,
    name: 'Christine Ine',
    location: 'Rockville, Maryland',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    headline: 'They were excellent at providing the right level of detail in implementation...',
    text: 'firevy.co impressed the client with the quality of their deliverables. They provided consistent designs, achieved the...',
    rating: '5.0',
    scores: { quality: '5.0', schedule: '5.0', cost: '5.0', refer: '5.0' }
  }
];

const brandLogos = [
  { id: 1, content: <div className="flex flex-col items-center"><span className="text-[#002663] font-[900] text-[15px] tracking-wider leading-none">AMERICAN</span><span className="text-[#002663] font-[900] text-[15px] tracking-wider leading-none">EXPRESS</span></div> },
  { id: 2, content: <div className="flex flex-col items-center"><div className="w-7 h-7 rounded-full border-2 border-[#004B87] flex items-center justify-center mb-0.5"><span className="text-[#004B87] font-[900] text-xs">L&T</span></div><span className="text-[#004B87] font-[900] text-[11px] italic tracking-tight">LARSEN & TOUBRO</span></div> },
  { id: 3, content: <div className="flex flex-col items-center"><span className="text-[#5B6770] font-[900] text-2xl leading-none">LH</span><span className="text-[#2B2B2B] font-[800] text-[12px] tracking-tight">LafargeHolcim</span></div> },
  { id: 4, content: <div className="flex flex-col items-center"><div className="flex items-center space-x-1"><span className="text-[#7A868C] font-[900] text-lg">CLP</span><div className="w-2.5 h-2.5 rounded-full bg-[#E65100]" /><span className="text-[#E65100] font-[900] text-sm">INDIA</span></div><span className="text-[9px] text-slate-500 font-semibold">The power of new standards</span></div> },
  { id: 5, content: <div className="flex items-center"><span className="text-[#0070BA] font-[900] text-3xl font-sans tracking-tight">adani</span></div> },
  { id: 6, content: <div className="flex flex-col items-center"><span className="text-[#0288D1] font-[900] text-3xl italic tracking-tighter leading-none">GFL<sup className="text-[10px]">™</sup></span><span className="text-[7.5px] font-[800] text-emerald-600 uppercase tracking-widest mt-0.5">Gujarat Fluorochemicals</span></div> },
  { id: 7, content: <div className="flex flex-col items-center"><svg viewBox="0 0 60 36" className="w-12 h-7 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2.5"><ellipse cx="30" cy="18" rx="27" ry="15" /><ellipse cx="30" cy="15" rx="14" ry="11" /><ellipse cx="30" cy="18" rx="7" ry="14" /></svg><span className="text-[#EB0A1E] font-[900] text-[13px] tracking-widest mt-0.5">TOYOTA</span></div> },
  { id: 8, content: <div className="flex flex-col items-center"><span className="text-[#D32F2F] font-[900] text-3xl italic tracking-tighter leading-none">ACC</span><span className="text-[9px] font-[700] text-slate-700 uppercase tracking-wider">ACC LIMITED</span></div> },
  { id: 9, content: <div className="flex flex-col items-center"><span className="text-[#003B70] font-[900] text-[18px] leading-tight">Ambuja</span><span className="text-[#003B70] font-[900] text-[18px] leading-tight">Cement</span></div> },
  { id: 10, content: <div className="flex flex-col items-center"><div className="w-8 h-8 rounded-full border-2 border-[#D32F2F] flex items-center justify-center mb-0.5"><span className="text-[#D32F2F] font-[900] text-xs">MG</span></div><span className="text-[#D32F2F] font-[900] text-[10px] tracking-tight">MORRIS GARAGES</span><span className="text-[8px] text-slate-500 font-semibold">Since 1924</span></div> },
  { id: 11, content: <div className="flex items-center space-x-1"><span className="text-[#004C97] font-[900] text-2xl italic tracking-tight">JSW</span><span className="text-[#004C97] font-[700] text-sm">Energy</span></div> },
  { id: 12, content: <div className="flex flex-col items-center"><div className="flex items-center space-x-1"><div className="w-3.5 h-3.5 rounded-full bg-emerald-500" /><span className="text-[#006A4E] font-[900] text-base">vedanta</span></div><span className="text-[8px] text-slate-500 font-bold">sterlite copper</span></div> },
  { id: 13, content: <div className="flex items-center"><span className="text-[#CC0000] font-[900] text-2xl font-serif tracking-widest">HONDA</span></div> },
  { id: 14, content: <div className="flex items-center space-x-1.5"><div className="w-6 h-6 rounded-full bg-[#6A1B9A] flex items-center justify-center text-white text-xs font-bold">♥</div><span className="text-[#6A1B9A] font-[900] text-lg font-sans">Dr.Reddy's</span></div> },
  { id: 15, content: <div className="flex flex-col items-center"><div className="w-7 h-5 flex flex-col items-center justify-center"><div className="w-6 h-2 bg-[#0054A6] rounded-xs" /><div className="w-6 h-2 bg-[#D32F2F] rounded-xs mt-0.5" /></div><span className="text-[#0054A6] font-[900] text-xs">Chevron</span><span className="text-[9px] text-slate-600 font-bold">Oronite</span></div> },
  { id: 16, content: <div className="flex flex-col items-center"><span className="text-slate-900 font-[900] text-base tracking-wider leading-none">ORIENT</span><span className="text-slate-700 font-[700] text-[10px] tracking-widest">CEMENT</span><span className="text-[8px] text-slate-500 font-bold mt-0.5">CK BIRLA GROUP</span></div> },
  { id: 17, content: <div className="flex flex-col items-center"><span className="text-[#004A99] font-[900] text-xl font-serif italic leading-tight">المراعي</span><span className="text-[#004A99] font-[900] text-base font-sans leading-none">Almarai</span></div> },
  { id: 18, content: <div className="flex items-center space-x-1.5"><div className="w-7 h-7 rounded-full bg-[#D32F2F] flex items-center justify-center text-white font-[900] text-sm">C</div><span className="text-slate-900 font-[900] text-lg">Cummins</span></div> },
  { id: 19, content: <div className="border-2 border-[#C62828] px-3 py-1 rounded-[4px] flex items-center"><span className="text-[#C62828] font-[900] text-base tracking-widest">+TDSG+</span></div> },
  { id: 20, content: <div className="flex items-center"><span className="text-slate-900 font-[900] text-lg tracking-[0.2em] font-sans">L'ORÉAL</span></div> },
  { id: 21, content: <div className="flex items-center space-x-1"><div className="text-[#0060AA] font-[900] text-xl">▲</div><div className="flex flex-col text-left leading-tight"><span className="text-[#0060AA] font-[900] text-xs">ASTRAL</span><span className="text-[#0060AA] font-[700] text-[9px] tracking-widest">PIPES</span></div></div> },
  { id: 22, content: <div className="flex flex-col items-center"><div className="text-[#007079] font-[900] text-base">✦</div><span className="text-[#007079] font-[900] text-xs tracking-widest">TITAN</span><span className="text-[7.5px] text-slate-500 font-bold uppercase">Company</span></div> },
  { id: 23, content: <div className="flex flex-col items-center"><div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xs font-bold mb-0.5">♣</div><span className="text-[8px] font-[900] text-slate-800 text-center leading-tight">BANK NOTE PAPER MILL</span><span className="text-[7px] text-slate-500 font-bold">INDIA PRIVATE LIMITED</span></div> },
  { id: 24, content: <div className="flex flex-col items-center"><span className="text-[#00838F] font-[900] text-xl italic tracking-tight">Alembic</span><span className="text-[8px] text-slate-500 font-bold">Touching Lives over 100 years</span></div> }
];

const companyPagesData = {
  'about-firevy': {
    title: 'About firevy.co',
    badge: 'COMPANY PROFILE',
    subtitle: 'firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    content: [
      {
        heading: 'Our Vision & Core Mission',
        text: 'At firevy.co, we partner with world-class organizations to turn ambitious ideas into digital reality. With over 15 years of technical excellence, our multi-disciplinary engineering squads design resilient web, mobile, AI, and cloud architectures.'
      },
      {
        heading: 'Global Delivery Excellence',
        text: 'Operating across San Francisco, India, Canada, and the UK, our teams follow strict SOC2 compliance standards and 2-week agile sprint cadences to deliver predictable value.'
      }
    ],
    highlights: [
      'ISO 27001:2013 Certified Security',
      '500+ Digital Products Shipped Globally',
      'Dedicated Agile Engineering Squads',
      '24/7 Global Client Support'
    ]
  },
  'ceo-message': {
    title: 'CEO Message & Vision',
    badge: 'LEADERSHIP INSIGHT',
    subtitle: 'A Message From Our Chief Executive Officer on Engineering Trust and Innovation.',
    icon: Quote,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Pioneering The Future Of Software Engineering',
        text: 'Welcome to firevy.co. When we founded this company, our goal was simple: to bring technical rigor and genuine client centricity to software engineering. Technology is best when it brings people together and solves genuine human problems.'
      },
      {
        heading: 'Our Commitment To Quality & Transparency',
        text: 'Every project we build is backed by our zero-compromise quality guarantee. We communicate openly, ship code frequently, and treat your business goals as our own.'
      }
    ],
    highlights: [
      'Focus on long-term client partnerships',
      'Investing in cutting-edge AI and RAG architectures',
      'Building sustainable, high-impact digital experiences'
    ]
  },
  'our-team': {
    title: 'Our Team & Leadership',
    badge: 'ENGINEERING TALENT',
    subtitle: 'Meet the Architects, Developers, and Visionaries Behind firevy.co.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'World-Class Technical Minds',
        text: 'Our team comprises seasoned engineers, cloud architects, AI researchers, and UX strategists who have built scalable software systems for global brands and venture-backed startups.'
      },
      {
        heading: 'Culture of Ownership & Curiosity',
        text: 'We believe that great software is built by empowered engineers. We foster a culture of continuous learning, rigorous code reviews, and proactive innovation.'
      }
    ],
    highlights: [
      'Top 3% vetted engineering talent',
      'Certified AWS, Azure, Google Cloud architects',
      'Scrum & Agile certified project managers'
    ]
  },
  'events-activities': {
    title: 'Events & Activities',
    badge: 'CULTURE & LIFE',
    subtitle: 'Celebrating Milestones, Tech Hackathons, and Team Camaraderie.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Annual Tech Summits & Global Hackathons',
        text: 'Every quarter, our engineering teams participate in internal hackathons to prototype AI-driven solutions, explore emerging paradigms, and solve challenging architectural puzzles.'
      },
      {
        heading: 'Community & CSR Initiatives',
        text: 'We are committed to giving back through code mentoring, open-source contributions, and supporting local tech education foundations.'
      }
    ],
    highlights: [
      'Quarterly engineering hackathons',
      'Open-source tool releases',
      'Tech knowledge sharing webinars'
    ]
  },
  'awards-recognition': {
    title: 'Awards & Recognition',
    badge: 'INDUSTRY HONORS',
    subtitle: 'Celebrated by Clutch, GoodFirms, G2, and Global Tech Councils.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Industry Acclaim for Engineering Quality',
        text: 'Our dedication to building high-performance software has earned us consistent recognition as a top software development company across North America, Europe, and Asia.'
      },
      {
        heading: 'ISO 27001:2013 & Security Compliance',
        text: 'We maintain the highest tier of security, data privacy, and intellectual property protection across all client enterprise engagements.'
      }
    ],
    highlights: [
      'Clutch Top Developer Award 2026',
      'SoftwareWorld Top Rated Agency',
      'GESIA & GCCI Recognized IT Member'
    ]
  },
  'why-choose-us': {
    title: 'Why Choose firevy.co',
    badge: 'VALUE PROPOSITION',
    subtitle: 'Discover Why Leading Enterprises and Startups Trust firevy.co as Their Primary Tech Partner.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        heading: 'Guaranteed Engineering Rigor',
        text: 'We do not build minimum viable prototypes that break at scale. We build battle-tested, enterprise-grade architectures capable of serving millions of concurrent requests.'
      },
      {
        heading: 'Transparent & Predictable Delivery',
        text: 'With transparent weekly sprints, automated CI/CD pipelines, and dedicated technical project leads, you are always in complete control of your product trajectory.'
      }
    ],
    highlights: [
      '99.4% On-time and within budget project delivery',
      'Direct communication with senior engineers',
      'Full IP and source code ownership from day one'
    ]
  }
};

export const CompanySubDetails = () => {
  const params = useParams();
  const pageKey = params.slug || params.subpage || 'about-firevy';
  const pageData = companyPagesData[pageKey] || companyPagesData['about-firevy'];
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageKey]);

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  // If this is the "About firevy.co" / "about-firevy" page, render the exact Sapphire About Layout
  if (pageKey === 'about-firevy') {
    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title={`About Us | We Shape Digital Solutions | firevy.co`}
          description="firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "We Shape Digital Solutions" */}
        <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[44px] sm:text-[52px] lg:text-[56px] font-[900] text-slate-900 tracking-tight leading-[1.12] font-sans">
                  We Shape Digital Solutions
                </h1>
                <p className="text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl">
                  firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>Connect Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center relative">
                <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                  <div className="absolute top-4 left-10 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-blue-600 animate-bounce">
                    JAVA
                  </div>
                  <div className="absolute top-2 left-36 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-indigo-600">
                    PHP
                  </div>
                  <div className="absolute top-8 left-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-[6px] shadow-md border border-slate-200 text-[11px] font-[800] text-slate-700">
                    C++
                  </div>
                  <div className="absolute top-20 left-0 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-[6px] shadow-md border border-slate-200 text-[10.5px] font-[800] text-amber-600">
                    JAVASCRIPT
                  </div>
                  <div className="absolute top-6 right-28 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-slate-800">
                    iOS
                  </div>
                  <div className="absolute top-14 right-12 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-emerald-600">
                    Android
                  </div>
                  <div className="absolute bottom-20 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-purple-600">
                    C#
                  </div>
                  <div className="absolute bottom-6 right-24 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-md border border-slate-200 text-xs font-[800] text-[#006B8F]">
                    .NET
                  </div>

                  <svg viewBox="0 0 500 360" className="w-full h-full drop-shadow-xl" fill="none">
                    <path d="M250 20 L450 140 L250 260 L50 140 Z" fill="#E0F2FE" opacity="0.6" />
                    <path d="M250 260 L450 140 L450 160 L250 280 L50 160 L50 140 Z" fill="#BAE6FD" opacity="0.7" />
                    <polygon points="180,80 380,80 340,220 140,220" fill="#0284C7" />
                    <polygon points="190,90 370,90 335,210 155,210" fill="#FFFFFF" />
                    <rect x="180" y="105" width="130" height="12" rx="2" fill="#E2E8F0" />
                    <rect x="180" y="125" width="80" height="8" rx="2" fill="#38BDF8" />
                    <polygon points="140,220 340,220 400,280 200,280" fill="#0369A1" />
                    <polygon points="150,225 330,225 385,275 205,275" fill="#0C4A6E" />
                    <circle cx="160" cy="180" r="10" fill="#FED7AA" />
                    <circle cx="340" cy="155" r="10" fill="#FED7AA" />
                    <circle cx="250" cy="270" r="10" fill="#FED7AA" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "About firevy.co" */}
        <section className="py-16 bg-white border-t border-slate-100 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <div className="rounded-[14px] overflow-hidden border border-slate-200/90 shadow-sm bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                    alt="firevy.co Corporate Building"
                    className="w-full h-[330px] sm:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                  About firevy.co
                </h2>
                <div className="space-y-3.5 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                  <p>
                    firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. "We Create, We Enhance, We Deliver More Than Expected" */}
        <section className="py-20 bg-white border-t border-slate-100 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.2] font-sans">
                We Create, We Enhance, We Deliver<br />
                More Than Expected – That's firevy.co
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3.5">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#006B8F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 22H5V20H19V22Z" />
                    <path d="M16.5 20C16.5 17 17.5 15.5 18 14C18.5 12.5 18 11 17 9.5C16 8 14.5 7.5 14.5 6C14.5 4.5 15.5 3 15.5 3C15.5 3 13.5 3 11 5C8.5 7 7.5 9.5 7.5 12C7.5 13 8 14 8.5 15C9 16 9.5 17.5 9.5 20" />
                  </svg>
                  <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">Our Vision</h3>
                </div>
                <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.
                </p>
              </div>
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3.5">
                  <Target className="w-10 h-10 text-[#006B8F] shrink-0" strokeWidth={2.2} />
                  <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">Our Mission</h3>
                </div>
                <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  To provide our customers with the precise services and solutions the lowest possible cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. "Glance through our creations and presence" */}
        <AboutKeyMetrics />

        {/* 5. "Our Core Values" */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
                Our Core Values
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                Our values are the guiding ethics upon which we have founded and how we strive to conduct our business on a day-to-day basis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValuesData.map((val) => (
                <div key={val.id} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 text-left space-y-2.5 hover:shadow-lg transition-all group">
                  {val.icon}
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans tracking-tight group-hover:text-[#006B8F] transition-colors">{val.title}</h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Our Culture" */}
        <section className="py-20 bg-white border-b border-slate-100 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                  Our Culture
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                  <p>
                    At firevy.co, we have nurtured a culture that inspires innovation and creativity. We believe that success of our company is directly relational to the success of each and every employee. We strive to create a young, fun-loving, open yet professional and hardworking environment.
                  </p>
                  <p>
                    We empower our team members to move forward professionally by taking ownership and learning from every project they work on. Coming to work and building amazing digital solutions should be fun.
                  </p>
                </div>
                <div className="pt-2">
                  <Link to="/careers" className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans">
                    Explore Careers (Jobs)
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team 1" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Team 2" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80" alt="Team 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Team 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "Our Leadership" */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                Our Leadership
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                The outlook, passion and experience of our leaders guides firevy.co.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-[160px] h-[180px] rounded-[12px] overflow-hidden shrink-0 bg-slate-200">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" alt="Leader 1" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-left pt-2">
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans">Mr. Kumaril Patel</h3>
                  <p className="text-[14px] font-[600] text-slate-500 font-sans">CEO & Co-Founder</p>
                  <div className="pt-2"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center shadow-sm"><Linkedin className="w-4 h-4 fill-current" /></a></div>
                </div>
              </div>
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-[160px] h-[180px] rounded-[12px] overflow-hidden shrink-0 bg-slate-200">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Leader 2" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-left pt-2">
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans">Mr. Rajendra Patel</h3>
                  <p className="text-[14px] font-[600] text-slate-500 font-sans">CTO & Co-Founder</p>
                  <div className="pt-2"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center shadow-sm"><Linkedin className="w-4 h-4 fill-current" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. "Our World Class Products" */}
        <section className="py-20 bg-[#F0F7FA] border-b border-slate-200 text-slate-900 font-sans relative overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-2 font-sans">
                Our World Class Products
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-500 font-[400] font-sans">
                Our proven excellence for product development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#FF6600] font-[900] text-3xl font-serif tracking-tight">VV</span>
                    <div>
                      <span className="text-[#FF6600] font-[900] text-2xl tracking-tight">Vidyalaya</span>
                      <span className="text-[10px] text-slate-500 align-top">®</span>
                      <div className="text-[11px] font-[700] text-amber-600 uppercase tracking-wider">Digitizing Schools</div>
                    </div>
                  </div>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                    Efficient & Innovative School ERP known for its unmatched service since 22+ years. We digitalized 1600+ Schools globally.
                  </p>
                </div>
                <div className="pt-2">
                  <Link to="/products" className="inline-flex items-center text-[14.5px] font-[700] text-[#006B8F] hover:text-[#004A75] space-x-1.5 font-sans">
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#008080] font-[900] text-3xl font-sans tracking-tight">Occu</span>
                    <span className="text-[#006699] font-[900] text-3xl font-sans tracking-tight">Care</span>
                    <span className="text-[10px] text-slate-500 align-top">™</span>
                  </div>
                  <div className="text-[11px] font-[600] text-slate-500">a healthier, more productive workforce</div>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                    OccuCare empower organizations to protect, maintain and promote the well-being of workers.
                  </p>
                </div>
                <div className="pt-2">
                  <Link to="/products" className="inline-flex items-center text-[14.5px] font-[700] text-[#006B8F] hover:text-[#004A75] space-x-1.5 font-sans">
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. "Trusted By The World’s Leading Brands" */}
        <section className="py-20 bg-white border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                Trusted By The World’s Leading Brands
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {brandLogos.map((brand) => (
                <div key={brand.id} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] h-[115px] sm:h-[125px] flex items-center justify-center p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="w-full flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300">
                    {brand.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. "What Our Clients Say" (Exact Two-Column Card Layout with Right-Side Ice-Blue Pill - Reference Screenshot 1 Match) */}
        <section className="py-20 bg-[#005F96] text-white font-sans relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-white tracking-tight leading-tight mb-2 font-sans">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientReviews.slice(0, 3).map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-[24px] p-6 sm:p-7 text-slate-900 shadow-2xl flex flex-row items-stretch justify-between space-x-4 border border-white/20 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex-1 flex flex-col justify-between text-left pr-2">
                    <div>
                      <div className="text-[26px] font-[900] text-slate-900 tracking-tight font-sans mb-4">
                        Clutc<span className="text-red-500 font-[900]">h</span>
                      </div>
                      <h3 className="text-[16px] font-[800] text-slate-900 leading-snug mb-3 line-clamp-2">
                        {rev.headline}
                      </h3>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-[400] mb-4 line-clamp-3">
                        {rev.text}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2.5 pt-2">
                      <img src={rev.avatar} alt={rev.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                      <div>
                        <div className="text-[14px] font-[800] text-slate-900 leading-tight">{rev.name}</div>
                        <div className="text-[11.5px] text-slate-500">{rev.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[135px] shrink-0 bg-[#F4F9FC] rounded-[18px] p-4 flex flex-col justify-between text-center border border-blue-50/80">
                    <div>
                      <div className="text-[34px] font-[900] text-slate-900 leading-none mb-1 font-sans">
                        {rev.rating}
                      </div>
                      <div className="flex items-center justify-center space-x-0.5 text-amber-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-[12px] text-slate-700 font-sans text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-[11.5px]">Quality</span>
                        <strong className="text-slate-900 font-[800]">{rev.scores.quality}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-[11.5px]">Schedule</span>
                        <strong className="text-slate-900 font-[800]">{rev.scores.schedule}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-[11.5px]">Cost</span>
                        <strong className="text-slate-900 font-[800]">{rev.scores.cost}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-[10.5px] leading-tight">Willing to Refer</span>
                        <strong className="text-slate-900 font-[800]">{rev.scores.refer}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4 mt-10">
              <button
                onClick={prevReview}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#005F96] flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
                aria-label="Previous Reviews"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#005F96] flex items-center justify-center transition-all cursor-pointer border border-white/20 shadow-md"
                aria-label="Next Reviews"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 11. "Insights" */}
        <section className="py-20 bg-white border-b border-slate-100 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                Insights
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                Based on boundless enthusiasm and challenging spirit, firevy.co is committed to deliver excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate Headquarters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                  alt="Occucon Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                  Occucon Event
                </div>
              </div>
              <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Exhibition Booth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:col-span-2 rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Our Team Banquet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                  Our Team
                </div>
              </div>
              <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                  alt="Tech Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 12. "Corporate Social Responsibility" */}
        <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight mb-2 font-sans">
                    Corporate Social<br />Responsibility
                  </h2>
                  <p className="text-[16px] text-slate-500 font-semibold font-sans">
                    Business is an opportunity to help humanity
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-[#006B8F] text-5xl font-serif leading-none">“</div>
                  <p className="text-[20px] sm:text-[23px] font-[800] text-[#006B8F] leading-snug font-sans max-w-xl">
                    Our CSR Programs Accelerate Human Empowerment Among Underserved People And Their Communities Via Three Pillars: Education, Society And Conservation.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[18px] overflow-hidden border border-slate-200 shadow-xl bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                    alt="Corporate Social Responsibility"
                    className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Full Panoramic Team Photo Banner with clean top & bottom spacing */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="w-full h-[360px] sm:h-[450px] rounded-[20px] overflow-hidden shadow-lg border border-slate-200 bg-slate-900 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                alt="firevy.co Whole Team"
                className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* 14. LET'S WORK TOGETHER & NEWSLETTER SUBSCRIPTION BANNER */}
        <WorkTogetherNewsletterSection />
      </div>
    );
  }

  // If this is the "CEO Message" / "ceo-message" page, render exact Sapphire CEO Message Layout
  if (pageKey === 'ceo-message') {
    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title={`Message From CEO | firevy.co`}
          description="In this message, our CEO shares insights on our mission, vision, and commitment to innovation. We are excited to continue growing with you."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Message From CEO" (Exact Reference Screenshot 1 Match) */}
        <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-[46px] sm:text-[54px] lg:text-[58px] font-[900] text-slate-900 tracking-tight leading-[1.15] font-sans">
                  Message From CEO
                </h1>
                <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] font-sans max-w-lg">
                  In this message, our CEO shares insights on our mission, vision, and commitment to innovation. We are excited to continue growing with you, and we hope you find inspiration in the path we're forging together.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right CEO Visual Portrait (Exact Reference Circle + Sticker Cutout + Trapezoid Plate) */}
              <div className="lg:col-span-5 flex justify-center relative select-none">
                <div className="relative w-[340px] sm:w-[380px] h-[400px] flex flex-col items-center justify-end">
                  {/* Floating Cyan Plus & Circle Accents */}
                  <span className="absolute top-12 left-2 text-[#60C3F2] font-black text-2xl">+</span>
                  <span className="absolute top-28 right-0 text-[#60C3F2] font-black text-2xl">+</span>
                  <div className="absolute top-8 right-8 w-5 h-5 rounded-full border-[3px] border-[#60C3F2]/60" />

                  {/* Circular Sky-Blue Backdrop */}
                  <div className="absolute top-6 w-[270px] h-[270px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#96D6F5] shadow-inner" />

                  {/* CEO Portrait Cutout with White Border Outline Effect */}
                  <div className="relative z-10 w-[280px] h-[340px] flex items-end justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
                      alt="Kumaril Patel - CEO"
                      className="w-full h-full object-cover object-top rounded-b-[40px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] [filter:drop-shadow(0_0_1px_#ffffff)_drop-shadow(0_0_3px_#ffffff)_drop-shadow(0_0_6px_#ffffff)]"
                    />
                  </div>

                  {/* White Angled Trapezoid Name Plate (Exact Reference Shape) */}
                  <div className="relative z-20 -mt-6 w-[280px] sm:w-[300px] bg-white pt-3.5 pb-3 px-6 rounded-t-[10px] rounded-b-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.12)] border border-slate-100/90 text-center">
                    <h3 className="text-[21px] font-[900] text-slate-900 font-sans tracking-tight leading-none">
                      Kumaril Patel
                    </h3>
                    <div className="inline-block mt-2 px-5 py-0.5 rounded-[4px] bg-[#006B8F] text-white text-[12px] font-[800] tracking-wider shadow-sm">
                      - CEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUOTE & CORE TENETS SECTION */}
        <section className="py-20 bg-white border-t border-slate-100 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Core Pillars with Alternating Blue / Slate Colors */}
              <div className="lg:col-span-5 space-y-1.5 select-none">
                <div className="text-[44px] sm:text-[54px] lg:text-[58px] font-[900] italic leading-[1.15] tracking-tight">
                  <div className="text-[#006B8F]">Integrity</div>
                  <div className="text-[#1E293B]">Excellence</div>
                  <div className="text-[#006B8F]">Innovation</div>
                  <div className="text-[#1E293B]">Leadership</div>
                </div>
              </div>

              {/* Right Quote Card Box */}
              <div className="lg:col-span-7">
                <div className="bg-[#F0F7FA] rounded-[28px] p-8 sm:p-12 border border-blue-100/60 shadow-sm space-y-6">
                  {/* Cyan Quote Marks SVG */}
                  <svg viewBox="0 0 48 36" className="w-12 h-9 fill-[#006B8F] shrink-0" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                  </svg>

                  <p className="text-[21px] sm:text-[23px] lg:text-[24px] font-[700] text-[#0B3B60] leading-[1.45] font-sans">
                    True leadership is not about holding power but igniting potential—in yourself, in your team, and in the world. Dream boldly, act fearlessly, and leave a legacy that inspires transformation.
                  </p>

                  <div className="flex items-center space-x-3 pt-2">
                    <div>
                      <h4 className="text-[21px] font-[800] text-[#006B8F] leading-tight font-sans">
                        Kumaril Patel
                      </h4>
                      <p className="text-[15px] font-[800] text-slate-900 font-sans">
                        CEO
                      </p>
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center transition-colors shadow-sm ml-2"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CEO DETAILED LETTER / BODY CONTENT */}
        <section className="py-16 bg-white text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="max-w-[940px] mx-auto space-y-6 text-[16px] sm:text-[16.5px] text-slate-700 leading-[1.85] font-[400]">
              <p>
                Welcome to firevy.co—a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership transcends the act of managing. It is about inspiring every individual within the organization to dream, innovate, and achieve greatness. Leadership is a responsibility to guide not just a company, but a movement—one driven by a relentless pursuit of excellence and a passion to redefine what is possible.
              </p>
              <p>
                At firevy.co, we are not mere participants in the ever-evolving tech landscape; we are architects of change. Our mission is to harness the transformative power of technology, crafting solutions that empower businesses, enrich lives, and shape the future. Every solution we build reflects a commitment to quality, creativity, and the unwavering belief that technology, when wielded wisely, can be a force for global progress.
              </p>
              <p>
                This company is more than a business—it is a beacon of possibility. Our team, fueled by curiosity and resilience, dares to envision a world where ideas are not limited by boundaries but ignited by boldness. Each challenge we face becomes an opportunity to grow, to innovate, and to lead. We don't just adapt to change; we are the change.
              </p>
              <p>
                I firmly believe that one revolutionary idea, one brilliant invention, has the potential to illuminate billions of lives. Technology has the power to bridge divides, solve pressing challenges, and transform societies. At firevy.co, we are not just creators of software—we are curators of dreams, building tools that unlock the infinite potential within every individual and organization we serve.
              </p>
              <p>
                Nothing is impossible when you dare to dream, believe in your vision, and act with unwavering conviction. Together, we will embrace challenges, seize opportunities, and continue to push the boundaries of what technology can achieve. This is our journey—a journey fueled by bold ideas, limitless ambition, and an unyielding commitment to excellence.
              </p>
              <p>
                Thank you for trusting us to be your partner in progress. Together, we are not just building software, mobile app and websites; we are creating a legacy—a legacy of innovation, impact, and transformative power that will resonate for generations to come.
              </p>

              {/* Sign-off Block */}
              <div className="pt-8 space-y-1 text-slate-800">
                <p className="text-[15px] font-[500] text-slate-600">Your's Sincerely,</p>
                <h4 className="text-[20px] font-[900] text-slate-900 tracking-tight">Kumaril Patel</h4>
                <p className="text-[15px] font-[800] text-slate-800">CEO</p>
                <p className="text-[14.5px] font-[600] text-slate-600">firevy.co</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LET'S WORK TOGETHER & NEWSLETTER SUBSCRIPTION BANNER */}
        <WorkTogetherNewsletterSection />
      </div>
    );
  }

  // If this is the "Our Team" / "our-team" page, render exact Sapphire Our Team Layout
  if (pageKey === 'our-team') {
    const businessHeads = [
      {
        name: 'Nirav Patel',
        role: 'Business Head - Product',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Parth Patel',
        role: 'Business Head - Service',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      }
    ];

    const leadershipTeam = [
      { name: 'Ankit Gokani', role: 'HR Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Ankit Morasiya', role: 'QA Lead', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Ashish Dubey', role: 'MERN Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
      { name: 'Galav Shukla', role: 'Sr. BDR - Service', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Hitarth Joshi', role: 'Module Lead - Mobile', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' },
      { name: 'Jaymin Prajapati', role: 'SEO Lead', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80' },
      { name: 'Mayur Trivedi', role: 'PHP Lead', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
      { name: 'Mehul Gajjar', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
      { name: 'Mitesh Aroda', role: 'Vidyalaya Tech Support Lead', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80' },
      { name: 'Prashant Patel', role: 'UI/UX Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Sahil Detroja', role: 'Web Development Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
      { name: 'Satish Prajapati', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80' },
      { name: 'Shrenik Shah', role: 'Mobile Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
      { name: 'Umang Barot', role: 'Project Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80' },
      { name: 'Vipul Patel', role: '.NET Lead', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80' }
    ];

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Our Team | Innovative & Passionate Minds | firevy.co"
          description="Meet the team of innovative, driven and passionate individuals at firevy.co. We cultivate diverse talents to make firevy.co the industry leader."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Our Team" (Exact Reference Screenshot 1 Match) */}
        <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[46px] sm:text-[54px] lg:text-[58px] font-[900] text-slate-900 tracking-tight leading-[1.12] font-sans">
                  Our Team
                </h1>
                <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed font-[400] font-sans max-w-lg">
                  Meet the team of innovative, driven and passionate individuals. We cultivate the diverse talents of our team and leverage their extraordinary perspectives and innovative ideas to make firevy.co the industry leader.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>Connect Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Isometric Team Illustration */}
              <div className="lg:col-span-6 flex justify-center relative">
                <div className="relative w-full max-w-[500px] h-[340px] flex items-center justify-center">
                  <svg viewBox="0 0 500 360" className="w-full h-full drop-shadow-xl" fill="none">
                    {/* Isometric Meeting Table */}
                    <polygon points="250,90 440,190 250,290 60,190" fill="#E0F2FE" />
                    <polygon points="250,290 440,190 440,205 250,305 60,205 60,190" fill="#BAE6FD" />
                    
                    {/* Laptop Screen & Charts */}
                    <rect x="220" y="150" width="60" height="35" rx="3" fill="#0284C7" transform="rotate(-15 250 167)" />
                    <rect x="225" y="155" width="50" height="25" rx="2" fill="#FFFFFF" transform="rotate(-15 250 167)" />
                    
                    {/* Whiteboard in backdrop */}
                    <rect x="340" y="50" width="90" height="65" rx="4" fill="#FFFFFF" stroke="#006B8F" strokeWidth="3" />
                    <line x1="355" y1="70" x2="415" y2="70" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                    <line x1="355" y1="85" x2="395" y2="85" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                    <line x1="355" y1="100" x2="405" y2="100" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />

                    {/* Team Characters */}
                    {/* Person 1 (Top Left) */}
                    <circle cx="150" cy="110" r="14" fill="#FED7AA" />
                    <path d="M135 125 C135 120 165 120 165 125 L168 155 L132 155 Z" fill="#0284C7" />
                    <polygon points="125,145 175,145 165,185 135,185" fill="#3B82F6" opacity="0.4" />

                    {/* Person 2 (Top Right) */}
                    <circle cx="360" cy="110" r="14" fill="#FED7AA" />
                    <path d="M345 125 C345 120 375 120 375 125 L378 155 L342 155 Z" fill="#10B981" />
                    
                    {/* Person 3 (Bottom Left) */}
                    <circle cx="130" cy="230" r="14" fill="#FED7AA" />
                    <path d="M115 245 C115 240 145 240 145 245 L148 285 L112 285 Z" fill="#F59E0B" />
                    
                    {/* Person 4 (Bottom Right) */}
                    <circle cx="370" cy="230" r="14" fill="#FED7AA" />
                    <path d="M355 245 C355 240 385 240 385 245 L388 285 L352 285 Z" fill="#EC4899" />
                    
                    {/* Person 5 (Bottom Center) */}
                    <circle cx="250" cy="260" r="15" fill="#FED7AA" />
                    <path d="M232 277 C232 272 268 272 268 277 L272 320 L228 320 Z" fill="#006B8F" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "Management Team" SECTION */}
        <section className="py-20 bg-white border-t border-slate-100 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                Management Team
              </h2>
            </div>

            {/* CEO Message Card (Kumaril Patel) - Exact Reference Screenshot 2 Match */}
            <div className="bg-[#F0F7FA] rounded-[24px] p-8 sm:p-10 border border-blue-100/70 shadow-sm max-w-5xl mx-auto mb-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Photo & Name */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="w-[180px] h-[210px] rounded-[16px] overflow-hidden shadow-md bg-slate-200 mb-3 border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                      alt="Kumaril Patel"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                    Kumaril Patel
                  </h3>
                  <p className="text-[13.5px] font-[700] text-slate-600 font-sans mb-2">
                    CEO & Co-Founder
                  </p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>

                {/* CEO Letter Text */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg viewBox="0 0 48 36" className="w-8 h-6 fill-[#006B8F] shrink-0" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                    </svg>
                    <h4 className="text-[22px] font-[800] text-slate-900 font-sans tracking-tight">
                      CEO Message
                    </h4>
                    <div className="h-[2px] w-12 bg-slate-900/80 rounded-full" />
                  </div>

                  <div className="space-y-3 text-[14.5px] text-slate-700 leading-relaxed font-[400]">
                    <p>
                      Welcome to firevy.co— a hub where ingenuity meets ambition. As the CEO, I firmly believe that leadership is not just about steering the ship but about inspiring every hand on deck to innovate, dream, and achieve. Our success stems from a shared commitment to excellence, where each solution is crafted with purpose and passion. At firevy.co, we don't merely adapt to change; we define it. By blending cutting-edge technology with human ingenuity, we create software solutions that empower businesses and individuals alike. This is not just a company; it's a vision brought to life by a team that dares to dream bigger every day.
                    </p>
                    <p>
                      Never stop believing in the power of technology that can change the world. One Revolutionary idea... One brilliant Invention can enlighten billions of the Human lives. Nothing is Impossible when you Dream it & believe it you can Do it. Together, let us embrace the challenges and opportunities. Thank you for trusting us to be your partner in progress. Together, we are not just building software —we are creating a legacy of innovation and impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTO Message Card (Mr. Rajendra Patel) - Exact Reference Screenshot 3 Match */}
            <div className="bg-[#F0F7FA] rounded-[24px] p-8 sm:p-10 border border-blue-100/70 shadow-sm max-w-5xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* CTO Letter Text */}
                <div className="md:col-span-8 space-y-4 order-2 md:order-1">
                  <div className="flex items-center space-x-3">
                    <svg viewBox="0 0 48 36" className="w-8 h-6 fill-[#006B8F] shrink-0" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                    </svg>
                    <h4 className="text-[22px] font-[800] text-slate-900 font-sans tracking-tight">
                      CTO Message
                    </h4>
                    <div className="h-[2px] w-12 bg-slate-900/80 rounded-full" />
                  </div>

                  <div className="space-y-3 text-[14.5px] text-slate-700 leading-relaxed font-[400]">
                    <p>
                      At firevy.co, technology is not just a means to an end—it's the essence of our identity and the foundation of our future. As the CTO, my mission is to push the boundaries of innovation, ensuring that every line of code we write and every solution we deliver drives meaningful impact. Our approach is simple yet profound: embrace challenges as opportunities and ideas as catalysts for change. By staying at the forefront of technological advancements and fostering a culture of continuous learning, we empower businesses to thrive in a dynamic digital landscape. Crafting success stories from startups to Fortune 500 stalwarts.
                    </p>
                    <p>
                      Our dedication to user-centric design and cutting-edge solutions has garnered prestigious accolades. Innovation is a journey, and at firevy.co, we walk that path with purpose and passion, transforming visions into reality and possibilities into achievements. Thank you for trusting us as your technology partner. Together, we are building a smarter, more connected happy world.
                    </p>
                  </div>
                </div>

                {/* Photo & Name */}
                <div className="md:col-span-4 flex flex-col items-center text-center order-1 md:order-2">
                  <div className="w-[180px] h-[210px] rounded-[16px] overflow-hidden shadow-md bg-slate-200 mb-3 border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                      alt="Mr. Rajendra Patel"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                    Mr. Rajendra Patel
                  </h3>
                  <p className="text-[13.5px] font-[700] text-slate-600 font-sans mb-2">
                    CTO & Co-Founder
                  </p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            {/* 2 Business Heads Cards - Exact Reference Screenshot 4 Match */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {businessHeads.map((head, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-[240px] sm:w-[260px] h-[260px] sm:h-[280px] rounded-[16px] overflow-hidden shadow-md border border-slate-200 bg-slate-200 mb-3.5">
                    <img
                      src={head.image}
                      alt={head.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans leading-tight">
                    {head.name}
                  </h3>
                  <p className="text-[14px] font-[600] text-slate-600 font-sans mt-0.5">
                    {head.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. "Leadership Team" SECTION (Exact Reference Screenshot 4 & 5 Match) */}
        <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                Leadership Team
              </h2>
            </div>

            {/* 15 Team Leads Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-7">
              {leadershipTeam.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-[150px] sm:w-[165px] h-[170px] sm:h-[185px] rounded-[14px] overflow-hidden shadow-sm border border-slate-200 bg-slate-200 mb-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-[15.5px] font-[800] text-slate-900 font-sans leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[12.5px] font-[600] text-slate-500 font-sans mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. "Teamwork Is The Only Way We Work" (Full-Bleed Mosaic Wall - Exact Reference Screenshot 1 Match) */}
        <section className="pt-20 pb-12 bg-white border-t border-slate-100 text-center font-sans overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 mb-10">
            <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
              Teamwork Is The Only Way We Work
            </h2>
          </div>

          {/* Full-width Edge-to-Edge Blue Duotone Team Faces Wall (Exact 24-Column Portrait Aspect Ratio Match) */}
          <div className="w-full relative overflow-hidden bg-[#2D7392]">
            <div className="grid grid-cols-12 sm:grid-cols-18 md:grid-cols-22 lg:grid-cols-24 gap-[2px] opacity-95">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                // Row 2
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                // Row 3
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                // Row 4
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                // Row 5
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                // Row 6
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
              ].map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-[#245D77]">
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Subtle Blue Tone Overlay Gradient */}
            <div className="absolute inset-0 bg-[#006B8F]/35 mix-blend-color pointer-events-none" />
          </div>

          {/* Centered Join Our Team Button */}
          <div className="mt-8">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-[6px] bg-[#004B87] hover:bg-[#003B6B] text-white font-[800] text-[15px] transition-all shadow-md font-sans"
            >
              Join Our Team
            </Link>
          </div>
        </section>

        {/* 5. "What Our Firevian Says" (Exact Reference Screenshot 2 Match) */}
        <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                What Our Firevian Says
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-[24px] p-8 sm:p-12 border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-5xl mx-auto relative flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Member Photo */}
              <div className="flex flex-col items-center shrink-0 text-center">
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-md bg-slate-200 border-4 border-white mb-3 ring-4 ring-cyan-100">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
                    alt="Vipul Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-[19px] font-[800] text-slate-900 font-sans leading-tight">
                  Vipul Patel
                </h4>
                <p className="text-[13.5px] font-[600] text-slate-500 font-sans">
                  Team Lead
                </p>
              </div>

              {/* Quote Content */}
              <div className="flex-1 space-y-4 text-left">
                {/* Top Quote Icon */}
                <svg viewBox="0 0 48 36" className="w-10 h-7 fill-[#006B8F] shrink-0 select-none" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                </svg>

                <p className="text-[15px] sm:text-[15.5px] text-slate-700 leading-[1.8] font-[400] font-sans">
                  I am proud to be working for a company like firevy.co that values honesty and a fair attitude to all which has also contributed to a very valuable and delightful experience. The work culture and the integrity of the company's management are remarkable. In firevy.co, we get all the freedom to think out-of-the-box and take complete ownership of the work we do. Being a client-focused company, firevy.co makes us understand the clients' requirements easily so that the work can be coordinated effectively. There are always opportunities to learn and no limitations to scale new heights in this organization.
                </p>

                {/* Bottom Quote Icon */}
                <div className="flex justify-end">
                  <svg viewBox="0 0 48 36" className="w-10 h-7 fill-[#006B8F] rotate-180 shrink-0 select-none" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C13.56 28.3 9.4 32 4 32v4c8.84 0 16-7.16 16-16V0H12zm28 0c-6.63 0-12 5.37-12 12 0 6.63 5.37 12 12 12 1.1 0 2.16-.16 3.17-.44C41.56 28.3 37.4 32 32 32v4c8.84 0 16-7.16 16-16V0H40z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#006B8F] text-slate-600 hover:text-[#006B8F] flex items-center justify-center transition-colors bg-white shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#006B8F] text-slate-600 hover:text-[#006B8F] flex items-center justify-center transition-colors bg-white shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 6. "Learning & Growth" SECTION (Exact Reference Screenshot 3 Match) */}
        <section className="py-20 bg-white border-t border-slate-100 text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
                  Learning & Growth
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                  <p>
                    Learning and growth go hand-in-hand fundamentally, and so is the story at firevy.co. We offer ample amounts of training to each individual and help them to improve their skills with subject matter specialists from the industry and within the company. We always believe in continuous learning culture so it gives opportunity to achieve better be it, Business interactions, Design Thinking or Technology.
                  </p>
                  <p>
                    We want our team to grow and develop at firevy.co, meet your career goals and make the most of your potential, all while embracing your own exceptional talents.
                  </p>
                  <p>
                    That's why we are committed to helping you drive your career in a dynamic environment. Across all levels of our organization, we are nurturing a culture of trust and dialogue. We offer tools to support this culture such as 360 feedback, online coaching and a mutual mentoring program.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    to="/careers"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>

              {/* Right Certificate Distribution Photos Grid */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-center">
                <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[360px] bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80"
                    alt="Certificate Ceremony"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[172px] bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                      alt="Award Distribution"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[172px] bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80"
                      alt="Team Recognition"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "Team @ firevy.co" SECTION (Exact Reference Screenshot 4 & 5 Match) */}
        <section className="py-20 bg-[#F8FAFC] border-t border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[38px] sm:text-[46px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                Team @ firevy.co
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                At firevy.co, we have a friendly, inspiring and fun loving yet professional environment. We celebrate all the good moments in terms of our growth and accomplishments. Our closeness always makes us feel strengthened and energetic to improve our actions, to go stress-free, and to work untiringly as a team.
              </p>
            </div>

            {/* 2x2 Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Milestone Celebration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Executive Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                  alt="Team Dinner"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[18px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                  alt="Team Gathering"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. "Ready To Take The Challenge?" CTA BANNER (Exact Reference Screenshot 5 Match) */}
        <section className="py-16 bg-[#005478] text-white text-center font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 space-y-4">
            <h2 className="text-[34px] sm:text-[42px] font-[900] text-white tracking-tight leading-tight">
              Ready To Take The Challenge?
            </h2>
            <p className="text-[15.5px] sm:text-[16.5px] text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our team of passionate and bright technologists. Work in a collaborative environment which will provide you ample growth opportunities and shape the leader in you.
            </p>
            <div className="pt-2">
              <Link
                to="/careers"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-white text-[#005478] hover:bg-slate-100 font-[800] text-[15px] transition-all shadow-lg"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>

        {/* 9. LET'S WORK TOGETHER & NEWSLETTER SUBSCRIPTION BANNER */}
        <WorkTogetherNewsletterSection />
      </div>
    );
  }

  // Other Sub-Pages Layout
  const IconComp = pageData.icon;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`${pageData.title} | firevy.co`}
        description={pageData.subtitle}
        canonical={`/company/${pageKey}`}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#006B8F] to-[#004A75] text-white relative overflow-hidden text-left font-sans">
        <Container>
          <div className="flex items-center space-x-2 text-xs text-blue-100 mb-6 font-sans">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-200" />
            <Link to="/about" className="hover:text-white transition-colors">Company</Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-200" />
            <span className="text-white font-bold">{pageData.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-cyan-200">
                <IconComp className="w-3.5 h-3.5 text-cyan-200" />
                <span className="uppercase tracking-widest">{pageData.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[900] text-white tracking-tight leading-tight">
                {pageData.title}
              </h1>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-2xl">
                {pageData.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-[6px] bg-white text-[#004A75] font-[700] text-[14px] hover:bg-slate-100 transition-all shadow-md group"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-[6px] bg-cyan-500/20 border border-cyan-300/40 text-cyan-100 font-[700] text-[14px] hover:bg-cyan-500/30 transition-all"
                >
                  About Company
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[16px] overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                <img
                  src={pageData.image}
                  alt={pageData.title}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-slate-50 text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              {pageData.content.map((block, idx) => (
                <div key={idx} className="p-8 rounded-[16px] bg-white border border-slate-200/90 shadow-sm space-y-3">
                  <h3 className="text-2xl font-[800] text-slate-900">{block.heading}</h3>
                  <p className="text-[15.5px] text-slate-600 leading-relaxed">{block.text}</p>
                </div>
              ))}

              <div className="p-8 rounded-[16px] bg-white border border-slate-200/90 shadow-sm space-y-5">
                <h3 className="text-xl font-[800] text-[#006B8F]">Key Highlights & Standards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pageData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3.5 rounded-[8px] bg-blue-50/60 border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-[#006B8F] shrink-0 mt-0.5" />
                      <span className="text-[13.5px] font-[700] text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[16px] bg-[#006B8F] text-white shadow-xl space-y-5 text-center">
                <h4 className="text-2xl font-[800]">Ready to Partner With firevy.co?</h4>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Let us help you build scalable digital experiences with our senior engineering squads.
                </p>
                <Link
                  to="/contact"
                  className="block w-full py-3.5 rounded-[6px] bg-white text-[#004A75] font-[700] text-sm hover:bg-slate-100 transition-colors shadow-md"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Newsletter & CTA */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default CompanySubDetails;
