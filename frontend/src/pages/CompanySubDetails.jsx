import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Careers from './Careers';
import CSR from './CSR';
import Podcast from './Podcast';
import DeliveryModels from './DeliveryModels';
import EngagementModels from './EngagementModels';
import DevelopmentMethodology from './DevelopmentMethodology';
import Testimonials from './Testimonials';
import ClutchTestimonial from './ClutchTestimonial';
import VideoTestimonial from './VideoTestimonial';
import InsightfulVideos from './InsightfulVideos';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import AwardsRecognitionPage from '../components/company/AwardsRecognitionPage';
import InsightfulVideosPage from '../components/company/InsightfulVideosPage';
import companyPublicService from '../services/companyPublicService';
import { getMediaUrl } from '../utils/mediaUrl';
import {
  Users, Award, Calendar, BookOpen, Heart, ShieldCheck, CheckCircle2,
  ArrowRight, FileText, Mic, Globe, Sparkles, MessageSquare, Star, Quote, ChevronRight, ChevronLeft, ChevronDown, Briefcase, Target, Linkedin, ThumbsUp, Camera
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
  },
  'brochure': {
    title: 'Download Brochure',
    badge: 'CORPORATE OVERVIEW',
    subtitle: 'Let\'s create something big together! Download firevy.co corporate digital brochure.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    content: [],
    highlights: []
  },
  'download-brochure': {
    title: 'Download Brochure',
    badge: 'CORPORATE OVERVIEW',
    subtitle: 'Let\'s create something big together! Download firevy.co corporate digital brochure.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    content: [],
    highlights: []
  },
  'great-place-to-work': {
    title: 'Great Place To Work',
    badge: 'COMPANY CULTURE',
    subtitle: 'What Makes firevy.co An Exciting Place To Work?',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    content: [],
    highlights: []
  },
  'women-empowerment': {
    title: 'Empowering The Women At firevy.co',
    badge: 'DIVERSITY & INCLUSION',
    subtitle: 'At firevy.co, we firmly believe in equality of opportunity and non-discrimination.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    content: [],
    highlights: []
  },
  'empowering-the-women-at-sapphire': {
    title: 'Empowering The Women At firevy.co',
    badge: 'DIVERSITY & INCLUSION',
    subtitle: 'At firevy.co, we firmly believe in equality of opportunity and non-discrimination.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    content: [],
    highlights: []
  }
};

export const CompanySubDetails = () => {
  const params = useParams();
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';
  const pageKey = params.slug || params.subpage || 'about-firevy';
  const pageData = companyPagesData[pageKey] || companyPagesData['about-firevy'];
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [selectedYear, setSelectedYear] = useState('2026');
  const [blogSearchQuery, setBlogSearchQuery] = useState('');
  const [selectedBlogCategory, setSelectedBlogCategory] = useState('All');
  const [blogPage, setBlogPage] = useState(1);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [dynamicSection, setDynamicSection] = useState(null);
  const [dynamicTeam, setDynamicTeam] = useState(null);
  const [dynamicBlogs, setDynamicBlogs] = useState(null);
  const [dynamicEvents, setDynamicEvents] = useState(null);
  const [dynamicBrochures, setDynamicBrochures] = useState(null);

  useEffect(() => {
    // Fetch singleton section data if available
    companyPublicService.getSection(pageKey, isPreview).then((data) => {
      if (data) setDynamicSection(data);
    }).catch(console.error);

    if (pageKey === 'our-team' || pageKey === 'about-firevy') {
      companyPublicService.getTeam().then((data) => {
        if (data && data.length > 0) setDynamicTeam(data);
      }).catch(console.error);
    }

    if (pageKey === 'events-activities') {
      companyPublicService.getEvents().then((data) => {
        if (data && data.length > 0) setDynamicEvents(data);
      }).catch(console.error);
    }

    if (pageKey === 'brochure' || pageKey === 'download-brochure') {
      companyPublicService.getBrochures().then((data) => {
        if (data && data.length > 0) setDynamicBrochures(data);
      }).catch(console.error);
    }

    if (pageKey === 'blog' || pageKey.includes('blog')) {
      companyPublicService.getBlogs().then((data) => {
        if (data && data.length > 0) setDynamicBlogs(data);
      }).catch(console.error);
    }
  }, [pageKey, isPreview]);

  const clutchScrollRef = React.useRef(null);
  const workplaceScrollRef = React.useRef(null);

  const scrollClutchLeft = () => {
    if (clutchScrollRef.current) {
      clutchScrollRef.current.scrollBy({ left: -560, behavior: 'smooth' });
    }
  };

  const scrollClutchRight = () => {
    if (clutchScrollRef.current) {
      clutchScrollRef.current.scrollBy({ left: 560, behavior: 'smooth' });
    }
  };

  const scrollWorkplaceLeft = () => {
    if (workplaceScrollRef.current) {
      workplaceScrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollWorkplaceRight = () => {
    if (workplaceScrollRef.current) {
      workplaceScrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageKey]);

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % clientReviews.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  if (pageKey === 'podcast') {
    return <Podcast />;
  }

  if (pageKey === 'delivery-models' || pageKey === 'delivery-model') {
    return <DeliveryModels />;
  }

  if (pageKey === 'engagement-models' || pageKey === 'engagement-model') {
    return <EngagementModels />;
  }

  if (pageKey === 'development-methodology' || pageKey === 'development-methodologies') {
    return <DevelopmentMethodology />;
  }

  if (pageKey === 'client-testimonials' || pageKey === 'testimonials') {
    return <Testimonials />;
  }

  if (pageKey === 'clutch-testimonial' || pageKey === 'clutch-testimonials') {
    return <ClutchTestimonial />;
  }

  if (pageKey === 'video-testimonial' || pageKey === 'video-testimonials') {
    return <VideoTestimonial />;
  }

  // If this is the "Awards & Recognition" page
  if (pageKey === 'awards-recognition' || pageKey === 'awards-and-recognition' || pageKey === 'awards') {
    return <AwardsRecognitionPage />;
  }

  if (pageKey === 'insightful-videos' || pageKey === 'videos' || pageKey === 'insightful-video') {
    return <InsightfulVideos />;
  }

  // If this is the "About firevy.co" / "about-firevy" page, render the exact Sapphire About Layout
  if (pageKey === 'about-firevy') {
    const content = dynamicSection?.content || {};

    // 1. About Company (Overview & Building)
    const aboutCompany = content.aboutCompany || {
      heading: content.aboutHeading || 'About firevy.co',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
      description: content.aboutText || "firevy.co is an ISO27001:2013 certified Web & Mobile App Development Company established in 2002. We offer a wide range of IT services and domain specific solutions to Enterprises, ISVs, Digital Agencies and Startups. Our devoted and passionate team delivers best industry practices combined with technology expertise and business domain knowledge to drive digital transformation. Our team having diverse skills with more than 23+ years of technology experience engaging with customers at deeper level to provide high-end technology solutions and innovations.",
      buttonText: 'Get In Touch',
      buttonLink: '/contact'
    };

    // 2. Vision & Mission
    const missionVision = content.missionVision || {
      heading: 'We Create, We Enhance, We Deliver',
      subheading: "More Than Expected – That's firevy.co",
      visionTitle: content.visionHeading || 'Our Vision',
      visionText: content.visionText || "It's our goal to empower our customers to achieve more and to be one of the best customer-centric company.",
      missionTitle: content.missionHeading || 'Our Mission',
      missionText: content.missionText || 'To provide our customers with the precise services and solutions the lowest possible cost.'
    };

    // 3. Metrics Section
    const metricsData = {
      title: content.metricsSection?.title || 'ABOUT US',
      description: content.metricsSection?.description || 'Glance through our creations and presence across industries and borders',
      cards: content.metricsSection?.cards || dynamicSection?.stats || undefined
    };

    // 4. Core Values
    const valuesList = (content.coreValues?.values && content.coreValues.values.length > 0)
      ? content.coreValues.values
      : (Array.isArray(dynamicSection?.items) && dynamicSection.items.length > 0 ? dynamicSection.items : coreValuesData);

    const renderDynamicValueIcon = (iconKey, idx) => {
      if (React.isValidElement(iconKey)) return iconKey;
      const colors = [
        'border-purple-500 text-purple-600',
        'border-blue-500 text-blue-600',
        'border-emerald-500 text-emerald-600',
        'border-amber-500 text-amber-600',
        'border-pink-500 text-pink-600',
        'border-indigo-500 text-indigo-600'
      ];
      const colorClass = colors[idx % colors.length];

      const iconMap = {
        ShieldCheck: <ShieldCheck className="w-6 h-6" />,
        Star: <Star className="w-6 h-6" />,
        Heart: <Heart className="w-6 h-6" />,
        Award: <Award className="w-6 h-6" />,
        Globe: <Globe className="w-6 h-6" />,
        Users: <Users className="w-6 h-6" />,
        Sparkles: <Sparkles className="w-6 h-6" />
      };

      const IconComp = iconMap[iconKey] || <ShieldCheck className="w-6 h-6" />;
      return (
        <div className={`w-12 h-12 rounded-full border-2 ${colorClass} flex items-center justify-center mb-4`}>
          {IconComp}
        </div>
      );
    };

    // 5. Culture
    const culture = content.culture || {
      heading: 'Our Culture',
      paragraphs: [
        'At firevy.co, we have nurtured a culture that inspires innovation and creativity. We believe that success of our company is directly relational to the success of each and every employee. We strive to create a young, fun-loving, open yet professional and hardworking environment.',
        'We empower our team members to move forward professionally by taking ownership and learning from every project they work on. Coming to work and building amazing digital solutions should be fun.'
      ],
      buttonText: 'Explore Careers (Jobs)',
      buttonLink: '/careers',
      images: dynamicSection?.gallery?.length >= 4 ? dynamicSection.gallery : [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
      ]
    };

    // 6. Leadership
    const leadersList = (content.leadership?.leaders && content.leadership.leaders.length > 0)
      ? content.leadership.leaders
      : (dynamicTeam && dynamicTeam.length > 0 ? dynamicTeam : [
          {
            name: 'Mr. Kumaril Patel',
            designation: 'CEO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
            linkedin: 'https://linkedin.com'
          },
          {
            name: 'Mr. Rajendra Patel',
            designation: 'CTO & Co-Founder',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
            linkedin: 'https://linkedin.com'
          }
        ]);

    // 7. Products
    const productsList = (content.products?.items && content.products.items.length > 0)
      ? content.products.items
      : [
          {
            name: 'Vidyalaya',
            tagline: 'Digitizing Schools',
            description: 'Efficient & Innovative School ERP known for its unmatched service since 22+ years. We digitalized 1600+ Schools globally.',
            link: '/products'
          },
          {
            name: 'OccuCare',
            tagline: 'a healthier, more productive workforce',
            description: 'OccuCare empower organizations to protect, maintain and promote the well-being of workers.',
            link: '/products'
          }
        ];

    // 8. Trusted Brands
    const trustedBrands = content.trustedBrands || {
      heading: 'Trusted By The World’s Leading Brands',
      subheading: 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'
    };

    // 9. Insights
    const insightsList = (content.insights?.items && content.insights.items.length > 0)
      ? content.insights.items
      : [
          { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', caption: 'Corporate Headquarters' },
          { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', caption: 'Occucon Event' },
          { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Exhibition Booth' },
          { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', caption: 'Our Team Banquet' },
          { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', caption: 'Tech Showcase' }
        ];

    // 10. CSR
    const csr = content.csr || {
      heading: 'Corporate Social Responsibility',
      subheading: 'Business is an opportunity to help humanity',
      quote: 'Our CSR Programs Accelerate Human Empowerment Among Underserved People And Their Communities Via Three Pillars: Education, Society And Conservation.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80'
    };

    // 11. Team Banner
    const teamBanner = content.teamBanner || {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80'
    };

    const heroImage = dynamicSection?.heroImage;

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title={dynamicSection?.seo?.metaTitle || `About Us | We Shape Digital Solutions | firevy.co`}
          description={dynamicSection?.seo?.metaDescription || "firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions."}
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-16 bg-white relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  {dynamicSection?.title || 'About firevy.co'}
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  {dynamicSection?.subtitle || 'firevy.co provides the solutions you need to innovate & accelerate business. We are a leading software development company with decade long expertise in creating innovative solutions.'}
                </p>
                <div className="pt-2">
                  <Link
                    to={dynamicSection?.ctaLink || '/contact'}
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>{dynamicSection?.ctaText || 'Connect Now'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center relative">
                {heroImage ? (
                  <div className="w-full max-w-[540px] h-[360px] flex items-center justify-center">
                    <img
                      src={getMediaUrl(heroImage)}
                      alt={dynamicSection?.title || 'Hero'}
                      className="w-full h-full object-contain drop-shadow-xl"
                    />
                  </div>
                ) : (
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
                )}
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
                    src={getMediaUrl(aboutCompany.image)}
                    alt={aboutCompany.heading || 'About firevy.co'}
                    className="w-full h-[330px] sm:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans section-content-title">
                  {aboutCompany.heading || 'About firevy.co'}
                </h2>
                <div className="space-y-3.5 text-[15px] text-slate-600 leading-[1.8] font-[400] font-sans section-content-desc whitespace-pre-line">
                  <p>{aboutCompany.description}</p>
                </div>
                <div className="pt-2">
                  <Link
                    to={aboutCompany.buttonLink || '/contact'}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans"
                  >
                    {aboutCompany.buttonText || 'Get In Touch'}
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
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-[1.2] font-sans section-content-title">
                {missionVision.heading || 'We Create, We Enhance, We Deliver'}<br />
                {missionVision.subheading || "More Than Expected – That's firevy.co"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3.5">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#006B8F] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 22H5V20H19V22Z" />
                    <path d="M16.5 20C16.5 17 17.5 15.5 18 14C18.5 12.5 18 11 17 9.5C16 8 14.5 7.5 14.5 6C14.5 4.5 15.5 3 15.5 3C15.5 3 13.5 3 11 5C8.5 7 7.5 9.5 7.5 12C7.5 13 8 14 8.5 15C9 16 9.5 17.5 9.5 20" />
                  </svg>
                  <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">{missionVision.visionTitle || 'Our Vision'}</h3>
                </div>
                <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  {missionVision.visionText}
                </p>
              </div>
              <div className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-9 text-left space-y-3.5 hover:shadow-lg transition-all">
                <div className="flex items-center space-x-3.5">
                  <Target className="w-10 h-10 text-[#006B8F] shrink-0" strokeWidth={2.2} />
                  <h3 className="text-[26px] font-[800] text-slate-900 font-sans tracking-tight">{missionVision.missionTitle || 'Our Mission'}</h3>
                </div>
                <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                  {missionVision.missionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. "ABOUT US (Key Metrics & Presence)" */}
        <AboutKeyMetrics data={metricsData} />

        {/* 5. "Our Core Values" */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-4 font-sans">
                {content.coreValues?.heading || 'Our Core Values'}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                {content.coreValues?.subheading || 'Our values are the guiding ethics upon which we have founded and how we strive to conduct our business on a day-to-day basis.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuesList.map((val, idx) => (
                <div key={val.id || idx} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 text-left space-y-2.5 hover:shadow-lg transition-all group">
                  {renderDynamicValueIcon(val.icon, idx)}
                  <h3 className="text-[20px] font-[800] text-slate-900 font-sans tracking-tight group-hover:text-[#006B8F] transition-colors">{val.title}</h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">{val.desc || val.description}</p>
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
                  {culture.heading || 'Our Culture'}
                </h2>
                <div className="space-y-4 text-[15px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-[400] font-sans">
                  {(culture.paragraphs || []).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="pt-2">
                  <Link to={culture.buttonLink || '/careers'} className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md font-sans">
                    {culture.buttonText || 'Explore Careers (Jobs)'}
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src={getMediaUrl(culture.images?.[0] || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80')} alt="Team 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src={getMediaUrl(culture.images?.[1] || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80')} alt="Team 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src={getMediaUrl(culture.images?.[2] || 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80')} alt="Team 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-[14px] overflow-hidden shadow-md border border-slate-200/90 h-[175px] bg-slate-100">
                  <img src={getMediaUrl(culture.images?.[3] || 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80')} alt="Team 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                {content.leadership?.heading || 'Our Leadership'}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                {content.leadership?.subheading || 'The outlook, passion and experience of our leaders guides firevy.co.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadersList.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-[16px] border border-slate-200/90 shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-md transition-all">
                  <div className="w-[160px] h-[180px] rounded-[12px] overflow-hidden shrink-0 bg-slate-200">
                    <img src={getMediaUrl(leader.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80')} alt={leader.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-2 text-left pt-2">
                    <h3 className="text-[20px] font-[800] text-slate-900 font-sans">{leader.name}</h3>
                    <p className="text-[14px] font-[600] text-slate-500 font-sans">{leader.designation}</p>
                    {leader.linkedin && (
                      <div className="pt-2">
                        <a href={leader.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077B5] hover:bg-[#005f93] text-white inline-flex items-center justify-center shadow-sm transition-transform hover:scale-110">
                          <Linkedin className="w-4 h-4 fill-current" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. "Our World Class Products" */}
        <section className="py-20 bg-[#F0F7FA] border-b border-slate-200 text-slate-900 font-sans relative overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-2 font-sans">
                {content.products?.heading || 'Our World Class Products'}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-500 font-[400] font-sans">
                {content.products?.subheading || 'Our proven excellence for product development'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {productsList.map((prod, idx) => (
                <div key={idx} className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_6px_25px_rgba(0,0,0,0.04)] p-8 sm:p-10 text-left space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#FF6600] font-[900] text-3xl font-serif tracking-tight">{prod.name?.slice(0, 2) || 'PR'}</span>
                      <div>
                        <span className="text-[#FF6600] font-[900] text-2xl tracking-tight">{prod.name}</span>
                        <span className="text-[10px] text-slate-500 align-top">®</span>
                        {prod.tagline && (
                          <div className="text-[11px] font-[700] text-amber-600 uppercase tracking-wider">{prod.tagline}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-[14.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                      {prod.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link to={prod.link || '/products'} className="inline-flex items-center text-[14.5px] font-[700] text-[#006B8F] hover:text-[#004A75] space-x-1.5 font-sans group">
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. "Trusted By The World’s Leading Brands" */}
        <section className="py-20 bg-white border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                {trustedBrands.heading || 'Trusted By The World’s Leading Brands'}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                {trustedBrands.subheading || 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.'}
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

        {/* 10. "What Our Clients Say" */}
        <ClientReviewsDarkSection data={{ title: content.reviewsSection?.title || 'What Our Clients Say' }} />

        {/* 11. "Insights" */}
        <section className="py-20 bg-white border-b border-slate-100 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[36px] sm:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                {content.insights?.heading || 'Insights'}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-3xl mx-auto font-[400] font-sans">
                {content.insights?.subheading || 'Based on boundless enthusiasm and challenging spirit, firevy.co is committed to deliver excellence.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insightsList.slice(0, 3).map((item, idx) => (
                <div key={idx} className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[280px] bg-slate-100 group relative">
                  <img
                    src={getMediaUrl(item.image)}
                    alt={item.caption || `Insight ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.caption && (
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                      {item.caption}
                    </div>
                  )}
                </div>
              ))}
              {insightsList[3] && (
                <div className="md:col-span-2 rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
                  <img
                    src={getMediaUrl(insightsList[3].image)}
                    alt={insightsList[3].caption || 'Our Team'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {insightsList[3].caption && (
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                      {insightsList[3].caption}
                    </div>
                  )}
                </div>
              )}
              {insightsList[4] && (
                <div className="rounded-[16px] overflow-hidden shadow-md border border-slate-200 h-[300px] bg-slate-100 group relative">
                  <img
                    src={getMediaUrl(insightsList[4].image)}
                    alt={insightsList[4].caption || 'Showcase'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {insightsList[4].caption && (
                    <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1 rounded-[6px] text-xs font-[700]">
                      {insightsList[4].caption}
                    </div>
                  )}
                </div>
              )}
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
                    {csr.heading || 'Corporate Social Responsibility'}
                  </h2>
                  <p className="text-[16px] text-slate-500 font-semibold font-sans">
                    {csr.subheading || 'Business is an opportunity to help humanity'}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="text-[#006B8F] text-5xl font-serif leading-none">“</div>
                  <p className="text-[20px] sm:text-[23px] font-[800] text-[#006B8F] leading-snug font-sans max-w-xl">
                    {csr.quote}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-[18px] overflow-hidden border border-slate-200 shadow-xl bg-white">
                  <img
                    src={getMediaUrl(csr.image)}
                    alt={csr.heading || 'Corporate Social Responsibility'}
                    className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Full Panoramic Team Photo Banner */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="w-full h-[360px] sm:h-[450px] rounded-[20px] overflow-hidden shadow-lg border border-slate-200 bg-slate-900 relative">
              <img
                src={getMediaUrl(teamBanner.image)}
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
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  Message From CEO
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-lg page-hero-desc">
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
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  Our Team
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-lg page-hero-desc">
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

          {/* Full-width Edge-to-Edge Blue Duotone Team Faces Wall (Exact 24-Column Portrait Aspect Ratio Match Image 1) */}
          <div className="w-full relative overflow-hidden bg-[#388BA8]">
            <div
              className="grid gap-[2px] opacity-95 grid-cols-[repeat(12,minmax(0,1fr))] sm:grid-cols-[repeat(18,minmax(0,1fr))] lg:grid-cols-[repeat(24,minmax(0,1fr))]"
            >
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                // Row 2
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                // Row 3
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                // Row 4
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                // Row 5
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                // Row 6
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80'
              ].slice(0, 144).map((src, i) => (
                <div key={i} className="aspect-[3/4] overflow-hidden bg-[#2D7392]">
                  <img
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-95 opacity-80 mix-blend-multiply hover:opacity-100 hover:grayscale-0 hover:mix-blend-normal transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Subtle Blue Tone Overlay Gradient */}
            <div className="absolute inset-0 bg-[#35829D]/20 pointer-events-none" />
          </div>

          {/* Centered Join Our Team Button */}
          <div className="mt-8">
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-2.5 rounded-[4px] bg-[#006085] hover:bg-[#004d6b] text-white font-[700] text-[14px] transition-all shadow-sm font-sans"
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
        <WorkTogetherNewsletterSection hideBanner={true} />
      </div>
    );
  }

  // If this is the "Events & Activities" / "events-activities" page, render exact Sapphire Events & Activities Layout
  if (pageKey === 'events-activities') {
    const yearsRow1 = ['2026', '2025', '2024', '2023', '2022', '2021'];
    const yearsRow2 = ['2020', '2019', '2018', '2017', '2016', '2015'];

    const eventGalleryData = {
      '2026': [
        { id: 1, title: 'Leadership Felicitation & Recognition', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Annual Tech Team Summit', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Excellence Award Ceremony', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Sports & Cricket League Winners', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Office Cultural Fest', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Birthday & Milestone Celebration', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
        { id: 7, title: 'Executive Directors Gathering', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Cake Cutting & Team Party', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
        { id: 9, title: 'Women\'s Day Celebration', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80' },
        { id: 10, title: 'Community CSR Initiative', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80' },
      ],
      '2025': [
        { id: 1, title: 'Annual Tech Team Summit', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Excellence Award Ceremony', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Sports & Cricket League Winners', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Office Cultural Fest', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
        { id: 5, title: 'Birthday & Milestone Celebration', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80' },
        { id: 6, title: 'Leadership Felicitation & Recognition', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
        { id: 7, title: 'Cake Cutting & Team Party', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80' },
        { id: 8, title: 'Executive Directors Gathering', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
      ],
      '2024': [
        { id: 1, title: 'Annual Outing & Resort Retreat', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
        { id: 2, title: 'Global AI Hackathon Champions', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
        { id: 3, title: 'Diwali & Festival Celebrations', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80' },
        { id: 4, title: 'Team Appreciation Awards', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=800&q=80' },
      ]
    };

    const currentPhotos = eventGalleryData[selectedYear] || eventGalleryData['2026'];

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Events & Celebrations | Life @ firevy.co | firevy.co"
          description="At firevy.co, we believe that celebrating success is just as important as achieving it. Have a glimpse at life and culture @ firevy.co!"
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Events & Celebrations" */}
        <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  Events & Celebrations
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  At firevy.co, we believe that celebrating success is just as important as achieving it. Our culture thrives on a balanced blend of dedication and joyful celebration.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>Let's Talk</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Isometric Graphic Vector Illustration (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center relative select-none">
                <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                  <svg viewBox="0 0 540 360" className="w-full h-full drop-shadow-xl" fill="none">
                    {/* Isometric Base Platform (Light Blue Cyan) */}
                    <polygon points="270,70 510,190 270,310 30,190" fill="#E6F2FC" opacity="0.9" />
                    <polygon points="270,310 510,190 510,205 270,325 30,205 30,190" fill="#BAE1F9" />

                    {/* Isometric Laptop Base & Screen */}
                    <polygon points="230,120 410,120 370,240 190,240" fill="#2B80C5" />
                    <polygon points="238,128 402,128 365,232 201,232" fill="#FFFFFF" />

                    {/* Laptop Screen Content / Charts & Lines */}
                    <rect x="230" y="142" width="120" height="8" rx="2" fill="#38BDF8" />
                    <path d="M220 200 Q250 160 280 180 T340 150" stroke="#0284C7" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M220 215 Q260 185 300 205 T350 175" stroke="#38BDF8" strokeWidth="3" fill="none" strokeLinecap="round" />

                    {/* Isometric Keyboard Stand */}
                    <polygon points="190,240 370,240 430,290 250,290" fill="#1E5C91" />
                    <polygon points="200,245 360,245 415,285 255,285" fill="#0F385C" />

                    {/* Isometric Floating Bar Chart Pillars (Cyan, Yellow, Purple) */}
                    {/* Pillar 1 (Yellow) */}
                    <polygon points="90,190 120,175 150,190 120,205" fill="#FBBF24" />
                    <polygon points="90,190 120,205 120,245 90,230" fill="#D97706" />
                    <polygon points="120,205 150,190 150,230 120,245" fill="#F59E0B" />

                    {/* Pillar 2 (Cyan) */}
                    <polygon points="125,160 155,145 185,160 155,175" fill="#38BDF8" />
                    <polygon points="125,160 155,175 155,225 125,210" fill="#0284C7" />
                    <polygon points="155,175 185,160 185,210 155,225" fill="#0369A1" />

                    {/* Pillar 3 (Purple/Pink) */}
                    <polygon points="160,185 190,170 220,185 190,200" fill="#C084FC" />
                    <polygon points="160,185 190,200 190,245 160,230" fill="#9333EA" />
                    <polygon points="190,200 220,185 220,230 190,245" fill="#A855F7" />

                    {/* Server Tower Unit in Front Right */}
                    <polygon points="380,260 410,245 440,260 410,275" fill="#38BDF8" />
                    <polygon points="380,260 410,275 410,315 380,300" fill="#0284C7" />
                    <polygon points="410,275 440,260 440,300 410,315" fill="#0369A1" />
                    <line x1="390" y1="275" x2="400" y2="280" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />
                    <line x1="390" y1="285" x2="400" y2="290" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />

                    {/* Character 1 (Standing near bars) */}
                    <circle cx="95" cy="140" r="10" fill="#FED7AA" />
                    <path d="M85 152 C85 148 105 148 105 152 L107 180 L83 180 Z" fill="#3B82F6" />

                    {/* Character 2 (Sitting on platform corner) */}
                    <circle cx="308" cy="195" r="10" fill="#FED7AA" />
                    <path d="M298 207 C298 203 318 203 318 207 L320 230 L296 230 Z" fill="#EF4444" />

                    {/* Character 3 (Sitting at bottom right) */}
                    <circle cx="410" cy="180" r="10" fill="#FED7AA" />
                    <path d="M400 192 C400 188 420 188 420 192 L422 220 L398 220 Z" fill="#10B981" />

                    {/* Floating Tech Widgets */}
                    <rect x="420" y="200" width="40" height="60" rx="6" fill="#60A5FA" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="426" y="210" width="28" height="40" rx="3" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "Life @firevy.co" SECTION */}
        <section className="py-20 bg-white border-t border-slate-100 text-center font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-4 font-sans section-content-title">
              Life @firevy.co
            </h2>
            <p className="text-[15px] text-slate-600 max-w-3xl mx-auto leading-relaxed font-[400] mb-12 font-sans section-content-desc">
              At firevy.co, we constantly try new ways to make our work environment, enjoyable and inspiring. From company outings to birthdays, we just need a reason to celebrate. Have a glimpse at life and culture @firevy.co!
            </p>

            {/* Year Selector Tabs (Exact 2 Rows Match Reference Screenshots 0 & 1) */}
            <div className="space-y-6 max-w-4xl mx-auto mb-14">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16">
                {yearsRow1.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-[19px] sm:text-[21px] pb-1.5 transition-all cursor-pointer font-sans ${selectedYear === year
                      ? 'border-b-[3px] border-[#0099CC] text-[#0099CC] font-[900]'
                      : 'text-slate-800 hover:text-[#0099CC] font-[700]'
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 pt-2">
                {yearsRow2.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-[19px] sm:text-[21px] pb-1.5 transition-all cursor-pointer font-sans ${selectedYear === year
                      ? 'border-b-[3px] border-[#0099CC] text-[#0099CC] font-[900]'
                      : 'text-slate-800 hover:text-[#0099CC] font-[700]'
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Grid (4 Columns - Exact Reference Screenshot 1 & 2 Match) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {currentPhotos.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/90 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="h-[210px] sm:h-[220px] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. "Ready To Get Started?" CTA BANNER (Exact Reference Screenshot 2 Match) */}
        <section className="py-16 bg-[#00668C] text-white text-center font-sans relative overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 space-y-4 relative z-10">
            <h2 className="text-[40px] font-[800] text-white tracking-tight leading-tight font-sans section-content-title">
              Ready To Get Started?
            </h2>
            <p className="text-[15px] text-blue-100 max-w-3xl mx-auto leading-relaxed font-[400] font-sans section-content-desc">
              With 23+ years of domain expertise, 700+ successful projects, & 1500+ happy customers, we have carved a niche in the software development industry.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-[6px] bg-white text-[#00668C] hover:bg-slate-100 font-[800] text-[15px] transition-all shadow-lg font-sans"
              >
                Request A Free Quote
              </Link>
            </div>
          </div>

          {/* Background subtle geometric shapes */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border-[20px] border-white/10 pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full border-[15px] border-white/10 pointer-events-none" />
        </section>
      </div>
    );
  }

  // If this is the "Download Brochure" / "brochure" / "download-brochure" page, render exact Sapphire Brochure Layout
  if (pageKey === 'brochure' || pageKey === 'download-brochure') {
    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Download Brochure | Easily & Quickly Downloadable Information | firevy.co"
          description="Download firevy.co corporate digital brochure. firevy.co is a leading software and app development company with offices worldwide."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Let's create something big together!" (Exact Reference Screenshot 0 Match) */}
        <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  Let's create something big together!
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  firevy.co is a Leading software and app development company with offices worldwide. If you want to know more about our business.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>Connect Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Isometric Illustration (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center relative select-none">
                <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                  <svg viewBox="0 0 540 360" className="w-full h-full drop-shadow-xl" fill="none">
                    {/* Isometric Base Platform (Light Sky Blue Grid) */}
                    <polygon points="270,80 510,200 270,320 30,200" fill="#E6F2FC" opacity="0.95" />
                    <polygon points="270,320 510,200 510,215 270,335 30,215 30,200" fill="#BAE1F9" />

                    {/* Checkmark Shield Badge Floating on Left */}
                    <polygon points="80,180 140,150 200,180 140,210" fill="#3B82F6" />
                    <polygon points="80,180 140,210 140,270 80,240" fill="#1D4ED8" />
                    <polygon points="140,210 200,180 200,240 140,270" fill="#2563EB" />
                    <path d="M115 210 L132 227 L168 185" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Brochure Document Card on Platform */}
                    <polygon points="220,130 400,130 360,250 180,250" fill="#2563EB" />
                    <polygon points="228,138 392,138 355,242 191,242" fill="#FFFFFF" />
                    <rect x="220" y="152" width="120" height="8" rx="2" fill="#93C5FD" />
                    <line x1="220" y1="170" x2="330" y2="170" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
                    <line x1="220" y1="185" x2="310" y2="185" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

                    {/* Team Members Interacting */}
                    {/* Character 1 (Standing Top Left) */}
                    <circle cx="210" cy="120" r="10" fill="#FED7AA" />
                    <path d="M200 132 C200 128 220 128 220 132 L222 165 L198 165 Z" fill="#DC2626" />

                    {/* Character 2 (Standing Bottom Left) */}
                    <circle cx="150" cy="220" r="10" fill="#FED7AA" />
                    <path d="M140 232 C140 228 160 228 160 232 L162 265 L138 265 Z" fill="#0284C7" />

                    {/* Character 3 (Standing Right) */}
                    <circle cx="420" cy="130" r="10" fill="#FED7AA" />
                    <path d="M410 142 C410 138 430 138 430 142 L432 175 L408 175 Z" fill="#EC4899" />

                    {/* Floating Profile Widget Top Right */}
                    <polygon points="380,80 440,50 500,80 440,110" fill="#60A5FA" />
                    <polygon points="380,80 440,110 440,160 380,130" fill="#3B82F6" />
                    <polygon points="440,110 500,80 500,130 440,160" fill="#2563EB" />
                    <circle cx="440" cy="95" r="12" fill="#FFFFFF" />

                    {/* Small Isometric Cube Front Right */}
                    <polygon points="370,270 395,255 420,270 395,285" fill="#60A5FA" />
                    <polygon points="370,270 395,285 395,315 370,300" fill="#3B82F6" />
                    <polygon points="395,285 420,270 420,300 395,315" fill="#2563EB" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "Easily & Quickly Downloadable Information" SECTION (Exact Reference Screenshot 1 & 2 Match) */}
        <section className="py-20 bg-white text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight text-center mb-14 font-sans section-content-title">
              Easily & Quickly Downloadable Information
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Fan-out 3D Stacked Digital Brochure Cards (Exact Reference Screenshot 1 & 2 Match) */}
              <div className="lg:col-span-5 flex justify-center relative select-none">
                <div className="relative w-full max-w-[460px] h-[340px] flex items-center justify-center">
                  {/* Background Oval Light Blue Shade */}
                  <div className="absolute w-[300px] h-[300px] rounded-full bg-[#D8EEF9] -top-2 left-6 -z-0" />

                  {/* Card 1 (Back rotated left: "Services") */}
                  <div className="absolute top-4 left-6 w-[240px] h-[160px] bg-[#005478] rounded-[10px] shadow-lg border border-white/20 p-4 -rotate-[28deg] text-white z-10 flex flex-col justify-between">
                    <span className="text-[15px] font-[800] tracking-wider uppercase font-sans">Services</span>
                    <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center font-bold text-xs">S</div>
                  </div>

                  {/* Card 2 (Middle rotated left: "Company Overview") */}
                  <div className="absolute top-10 left-16 w-[260px] h-[175px] bg-[#006B8F] rounded-[10px] shadow-xl border border-white/30 p-4 -rotate-[16deg] text-white z-20 flex flex-col justify-between">
                    <span className="text-[16px] font-[800] tracking-wider font-sans">Company Overview</span>
                    <div className="text-[11px] text-blue-100 font-semibold font-sans">achieve more and to be one of the best customer-centric</div>
                  </div>

                  {/* Card 3 (Front main card: Digital Brochure with Office Image) */}
                  <div className="absolute bottom-2 right-4 w-[310px] sm:w-[330px] h-[210px] bg-white rounded-[12px] shadow-2xl border border-slate-200 p-4 z-30 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[#006B8F] font-[900] text-xl font-sans">firevy</span>
                        <span className="text-slate-700 font-[700] text-sm font-sans">.co</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-semibold font-sans">ISO 27001:2013</span>
                    </div>

                    <div className="w-full h-[110px] rounded-[8px] overflow-hidden my-2 border border-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                        alt="firevy.co Office"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[18px] font-[900] text-slate-900 font-sans tracking-tight">
                        Digital Brochure
                      </span>
                      <span className="text-[11px] text-[#006B8F] font-bold font-sans">www.firevy.co</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Text Column */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-[15px] font-[400] text-slate-600 leading-[1.85] font-sans section-content-desc">
                  As a global leader in the software development market, we have 2800+ satisfied clients in 30+ countries. Established in 2002, we are a leading Mobile App Development Company in the USA with ISO 27001:2013 certification. As a Multinational company, we provide software and website development services from our cutting-edge delivery centers in Ahmedabad, India. We have experience working with several Fortune 100 companies and popular brands like American Express, Bayer, Chevron, Almarai, Adani, L&T, Vedanta, Orient Cement, Dr Reddy, and LOREAL. Additionally, we take great pride in being Clutch and Google's top-rated mobile app development company. Whether you are looking for mobile app development services, website design, or software development, firevy.co is your right destination. firevy.co can deliver 1500+ projects and assists big clients like Adani and American Express skyrocket their business by delivering top-notch services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. "Download Our Brochure To Take A Glimpse Of Our Offerings" FORM SECTION (Exact Reference Screenshot 2 & 3 Match) */}
        <section className="py-16 bg-[#EDF6FC] text-center font-sans border-t border-b border-blue-100">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-8 font-sans section-content-title">
              Download Our Brochure To Take A Glimpse Of Our Offerings
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your firevy.co digital brochure download has started.');
              }}
              className="max-w-6xl mx-auto space-y-6"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                {/* Input: Name */}
                <input
                  type="text"
                  required
                  placeholder="Your name *"
                  className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#006B8F] font-sans"
                />

                {/* Input: Email */}
                <input
                  type="email"
                  required
                  placeholder="Your Email ID *"
                  className="w-full lg:w-64 px-4 py-3 rounded-[6px] bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none focus:border-[#006B8F] font-sans"
                />

                {/* Input: Phone with Country Code */}
                <div className="w-full lg:w-72 flex items-center rounded-[6px] bg-white border border-slate-300 overflow-hidden">
                  <div className="flex items-center space-x-1 px-3 py-3 bg-slate-50 border-r border-slate-200 text-slate-700 text-[13px] font-[600] shrink-0">
                    <span>+91</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-[13.5px] focus:outline-none font-sans"
                  />
                </div>

                {/* Cloudflare Security Badge */}
                <div className="bg-white border border-slate-300 rounded-[6px] px-3.5 py-2 flex items-center space-x-2 shrink-0">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-[11px] font-[600] text-slate-700 font-sans">Success!</span>
                  <div className="border-l border-slate-200 pl-2 text-[9px] text-slate-400 font-sans leading-tight text-left">
                    <span className="font-bold text-slate-600 block">CLOUDFLARE</span>
                    <span>Privacy • Help</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-10 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[800] text-[15px] transition-all shadow-md font-sans cursor-pointer"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 4. "Trusted By The World’s Leading Brands" SECTION (Exact Reference Screenshot 3 & 4 Match) */}
        <section className="py-20 bg-white border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Trusted By The World’s Leading Brands
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] h-[115px] sm:h-[125px] flex items-center justify-center p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300">
                    {brand.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. "We Have Been Featured In" SECTION (Exact Reference Screenshot 4 Match) */}
        <FeaturedInLogosGrid />

        {/* 6. "Want to boost your business?" CTA & Subscription Banners */}
        <WorkTogetherNewsletterSection
          title="Want to boost your business?"
          subtitle="Would you like to know why choosing us is the best decision? Because we work with you to create something out of the box at a fraction of the cost."
        />
      </div>
    );
  }

  // If this is the "Why Choose Us" / "why-choose-us" page, render exact Sapphire Why Choose Us Layout
  if (pageKey === 'why-choose-us') {
    const whyChooseUsCards = [
      {
        id: 1,
        title: 'Fortune 100 clientele',
        desc: 'Effective solutions with delivering satisfactory outcomes has enabled us to add fortune 100-1000 clients to list.',
        icon: <Award className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 2,
        title: 'ISO Certified 27001',
        desc: 'We are an ISO certified company, hence you can expect genuinity with no frauds or misery.',
        icon: <Globe className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 3,
        title: '1500+ Success Stories',
        desc: 'Covered 1500+ satisfied clients for the product (education domain) across the globe.',
        icon: <Star className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 4,
        title: 'Clients Presence',
        desc: 'Clients in more than 25 countries across the globe are advocates of firevy.co\'s deliverability, quality, and production.',
        icon: <Users className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 5,
        title: 'Since',
        desc: '2002! Yes, having presence in market from more than 20 years and still counting. Choosing us benefits you to get your product deployed under expert technicians as per your expectations.',
        icon: <Calendar className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 6,
        title: 'Awards & Achievements',
        desc: 'firevy.co is an award winning and well known name in education domain with amazing ranking on google (SEO) and holding more than 15+ awards for the product.',
        icon: <Award className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 7,
        title: 'No Hidden Costs',
        desc: 'Pay for what service you get and nothing else. firevy.co has a strict policy of avoiding any additional charges and taking payments once the work is completely done (in freelancing portals).',
        icon: <FileText className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 8,
        title: 'Recommendations',
        desc: '127+ verified reviews on clutch platform, top-rated profile on Upwork (100% client retention and satisfaction noted), amongst top 1% players on freelancer portal (Preferred freelancer badge), and some other recommendation on Good firms, cafeteria , and other review platforms.',
        icon: <Sparkles className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 9,
        title: 'Free Guidance',
        desc: 'New to web development or app development? please feel free for any guidance or consultation, firevy.co provides it completely free of charge and keeps no charge for guiding or communicating with new clients in the market.',
        icon: <MessageSquare className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 10,
        title: 'One Stop Shop',
        desc: 'Tired of finding & paying for individuals with different skills? firevy.co comes up with a one roof solution, enabling you to get everything from designs to QA and support at a single stop. Allow firevy.co to minimize your efforts.',
        icon: <Briefcase className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 11,
        title: 'Trust',
        desc: 'Hire firevy.co and get secured. Handover all your worries and concerns to a 23+ years + 270001 ISO-Certified firm and get rid of any frauds or worries. Not only this, Our reputation is our shadow, hence we cannot at all afford ruining our reputation because of any fraud or misbehaves.',
        icon: <ShieldCheck className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 12,
        title: 'Enterprise Solutions',
        desc: 'Enterprise solutions quality guaranteed; covered clients with employee strength more than 500000, and their branches spread in more than 300 locations.',
        icon: <Target className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 13,
        title: 'Customer Retention',
        desc: 'Adani group has been part of firevy.co\'s client library since 2012.',
        icon: <Heart className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 14,
        title: 'Proud To Have',
        desc: '2 decades of experience in education domain and 10+ of experience in Healthcare domain.',
        icon: <Award className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 15,
        title: 'Diversified Portfolio',
        desc: 'We provide diversified services in domain industries like: Cement, power, refinery, logistics, engineering, Finance, Automotive, steel, energy, chemicals.',
        icon: <BookOpen className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 16,
        title: 'Dedicated',
        desc: 'Facing issues of unavailability from freelancers? firevy.co comes with full time availability with multiple options of developers incase the one gets unavailable.',
        icon: <Users className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 17,
        title: 'Cost And ROI',
        desc: 'firevy.co takes care of your budget and helps you to workout even in low budgets, the idea of going for a MVP comes into picture under such scenarios and we proceed with helping you with a model that helps you to generate ROI first.',
        icon: <FileText className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 18,
        title: 'Boutique Agency',
        desc: 'Services that firevy.co provides from a single roof includes: Web Development, Mobile App Development, Cloud & DevOps, Product Development, Software Testing & QA, Digital Marketing, Software Maintenance & Support.',
        icon: <Briefcase className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 19,
        title: 'Domain Expertise',
        desc: 'firevy.co comes up with attitude of learning though it has been providing its services from last 2 decades. With time we have evolved to latest technologies and languages like flutter, react-native, ML, react JS, Node JS, etc. Making it easy for you to find all under a single roof.',
        icon: <Globe className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 20,
        title: 'Secured & Safe',
        desc: 'firevy.co is bound to keep all your data private by signing NDAs We understand sensitivity of project information, and insured to work on high-security/high-safety systems. In this way we will implement essential steps to protect proprietary and personal data.',
        icon: <ShieldCheck className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 21,
        title: 'Easy Handover',
        desc: 'Honest enough to say \'Sorry, not good fit for you\'. Need to switch your preference? please don\'t hesitate at all. firevy.co provides the complete KT (Knowledge Transfer) to next party keep you updated of everything with an easy exit process.',
        icon: <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 22,
        title: 'Enterprise Apps',
        desc: 'firevy.co is not only focused on on-demand services apps development. But, also have an expert eye on providing enterprise apps and solution like ERP development, CRM development, CRMS, SaaS product development, and Sharepoint/Ninetex solutions too.',
        icon: <Target className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 23,
        title: 'Problem Solving',
        desc: 'firevy.co believes in client satisfaction, hence enables you to work or communicate with techie who would not only provide problem solving approaches, but will also help to make a road map and fulfill your requirement in best possible manner.',
        icon: <Sparkles className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 24,
        title: 'Strategy Development',
        desc: 'As we follow agile methodology you\'ll find precise and accurate development strategies, but it is not limited to development strategies, we also focus on after development and client retention strategy which has helped us alot to maintain 100% client retention in past.',
        icon: <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 25,
        title: 'Flexible Availability',
        desc: '40 hours/week, 8 hours/day. -Available on weekends as well (in case of urgent deliveries) would need to be informed before a day. -Would be working dedicatedly on your projects, reporting to you daily with updates and progress.',
        icon: <Users className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 26,
        title: 'Cost Optimization',
        desc: 'Choosing firevy.co might be beneficial for you has you can hire a team at a cost of single individual. firevy.co\'s hourly rate are having wide ranges depending upon what developers you choose. Making you comfortable to choose developers according to the complexity of your task.',
        icon: <FileText className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 27,
        title: 'Focused On UI/UX',
        desc: 'User experience is quite important and firevy.co pressures it more. We offer clients to go with an initial milestone of designs only. Finalizing it first, and then proceeding it with the final development after complete satisfaction of your on the designs.',
        icon: <Sparkles className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 28,
        title: 'Timely Delivery',
        desc: 'A proven track record of on-time delivery. We decide the deadline of the applications in the initial negotiation phases. Setting the timeframe by considering the time to be taken for debugging and training - Enabling you a get a complete road view of your project before you award.',
        icon: <Calendar className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 29,
        title: 'Digitization',
        desc: 'Expanding and working on providing modern tech solutions that can involved with help of Artificial intelligence, Machine learning, Virtual reality, and IoT as well - helping us to transform digitally and be a keen competition in the market.',
        icon: <Globe className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 30,
        title: 'Cloud Computing',
        desc: 'World is switching to cloud! Everyone is getting rid of online servers and offline storage stuff. firevy.co comes up with an updated support in cloud technologies as well like AWS, Docker, Jenkins, Oracle, DevOps, and many more.',
        icon: <Target className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 31,
        title: 'Testing Prototypes',
        desc: 'We know and understand the importance of testing, hence the testing does not come at the end of the project, but we offer you multiple testing levels like unit testing, prototype testing, UI/UX testing, and deployment testing.',
        icon: <ShieldCheck className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 32,
        title: 'English Proficiency',
        desc: 'No miscommunication or language barrier. firevy.co comes up with the best and energetic team completely trained and quoted with proficiency in English from Sales to support. Giving you a very homely feel via easy means of communication.',
        icon: <MessageSquare className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 33,
        title: 'The BRD Policy',
        desc: 'firevy.co comes up with a policy, where everything would be freezed and pre-written in a BRD (Business requirement document) Work starts only after client\'s approval on the BRD. Let\'s avoid the possible communication gaps and any possible future disputes.',
        icon: <FileText className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 34,
        title: 'Initial Design Milestone',
        desc: 'Facing trust issues? Worried about your project budgets? Start with firevy.co at just a short milestone for the rough wireframes and mockups! Essure the quality and decide, wanna proceed with us or not. Release the milestone only if satisfied by the work. No need to pay big amounts in name of advance.',
        icon: <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 35,
        title: 'On-Demand POCs',
        desc: 'Looking for someone who can provide you quickest solution for a on-demand service app (MVPs)? firevy.co is a perfect place to help you with such POCs at cost efficient rates + quickest delivery through white labeling.',
        icon: <Briefcase className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 36,
        title: 'Always In Touch',
        desc: 'Weather it\'s clients, partners, people, or prospects, firevy.co believes in staying touch with everyone and look forward for a better and strong relationship.',
        icon: <Heart className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 37,
        title: 'Innovation',
        desc: 'Innovation is birth of new Invention . firevy.co comes up with innovative techniques making your projects/products more precise and up to date with adding modern touches.',
        icon: <Sparkles className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 38,
        title: 'Support Help',
        desc: 'We do not believe in keeping relations with clients till development only. We believe in maintaining long term and positive relations with clients by providing them the support and maintenance module as well.',
        icon: <ShieldCheck className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 39,
        title: 'Flexibility',
        desc: 'firevy.co also offers to work in different timezone , hence making you comfortable by offering our flexibility.',
        icon: <Globe className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 40,
        title: 'Support & Maintenance',
        desc: 'We commit (in writing) to provide software configuration, software orientation, software customization, software maintenance and software backup services',
        icon: <Briefcase className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 41,
        title: 'Application Ownership',
        desc: 'We are a white-label service provider where we commit our clients to provide all Graphics, Source code, and related content as it\'s their property. They can utilize it even when they plan to scale or need some upgrades etc.',
        icon: <FileText className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 42,
        title: 'Clear Communication',
        desc: 'Our team does not believe in siting in a room and keeps on coding endlessly. Every developer is confident enough in his/her speech, suggestions and solutions. They are not only limited to answer to your query, but also you\'ll find a problem solving approach.',
        icon: <MessageSquare className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 43,
        title: 'Enthusiasm & Passion',
        desc: 'Good interpersonal relationship between business partners directly influences the success of both parties. So when a vendor shows genuine care about the client\'s success, it\'s a game-changer.',
        icon: <Users className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 44,
        title: 'Training Acceptance',
        desc: 'Always a yes from firevy.co side regarding any challenges that come as an hurdle in the development and other phases. Giving you a complete easy to work with environment where every detailed study would be done by firevy.co team. It\'s an honor to learn new things daily.',
        icon: <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 45,
        title: 'Platform Selection',
        desc: 'firevy.co helps you to understand the importance of using a particular technology stack with its pros and cons. Letting you to leave all your worries to us and just provide you end results as per your expectations.',
        icon: <Target className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 46,
        title: 'Quality Assurance',
        desc: 'QA personnel often perform software testing as soon as developers produce executable code, rather than waiting for the application to be completely coded.',
        icon: <ShieldCheck className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 47,
        title: 'Evolving Ideas',
        desc: 'It\'s not always limited to scope or a BRD, No scope document can bound a limit for evolution of new phases in the app. firevy.co helps you to add +1 to your visions, keeping and developing things in a realistic manner.',
        icon: <Sparkles className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 48,
        title: 'Thought Process',
        desc: 'Your project is our Responsibility; we do it with integrity; and deliver it with honesty - thought process followed by firevy.co since it\'s existence in the market.',
        icon: <Award className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 49,
        title: 'Flexible Models',
        desc: 'We offer clients 3 different models as per their comfort. They can hire developers hourly, dedicatedly, and fixed costs models',
        icon: <Users className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 50,
        title: 'Result Oriented',
        desc: 'firevy.co works behind your vision, and makes your vision as its mission and thrive hard to get the results as expected by you.',
        icon: <Target className="w-9 h-9 stroke-[1.7]" />
      },
      {
        id: 51,
        title: 'Agility',
        desc: 'No need to worry of any miscommunication or communication gaps as your project is safe - divided in phases, allocated in sprints, and acknowledged to you via daily reports.',
        icon: <CheckCircle2 className="w-9 h-9 stroke-[1.7]" />
      }
    ];

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Why Choose Us? | Reasons Why Clients Trust Us | firevy.co"
          description="Discover why leading enterprises and startups trust firevy.co as their primary tech partner. Explore our 51 reasons for client excellence."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Why Choose Us?" (Exact Reference Screenshot 0 Match) */}
        <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  {dynamicSection?.title || 'Why Choose Us?'}
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  {dynamicSection?.subtitle || 'We understand the seriousness of your project, and here are the few reasons that why should you join the firevy.co club and get added to the list of 1500+ clients who have been trusting us since 2 decades.'}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>{dynamicSection?.ctaText || 'Connect Now'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Isometric Illustration (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center relative select-none">
                <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                  <svg viewBox="0 0 540 360" className="w-full h-full drop-shadow-xl" fill="none">
                    {/* Isometric Base Platform */}
                    <polygon points="270,70 510,190 270,310 30,190" fill="#E6F2FC" opacity="0.95" />
                    <polygon points="270,310 510,190 510,205 270,325 30,205 30,190" fill="#BAE1F9" />

                    {/* Isometric Open Laptop */}
                    <polygon points="230,120 410,120 370,240 190,240" fill="#2B80C5" />
                    <polygon points="238,128 402,128 365,232 201,232" fill="#FFFFFF" />
                    <rect x="230" y="142" width="120" height="60" rx="4" fill="#38BDF8" opacity="0.2" />
                    <circle cx="360" cy="160" r="14" fill="#60A5FA" opacity="0.4" />
                    <circle cx="360" cy="190" r="10" fill="#38BDF8" opacity="0.4" />

                    {/* Keyboard Stand */}
                    <polygon points="190,240 370,240 430,290 250,290" fill="#1E5C91" />

                    {/* Floating Question Mark Badges */}
                    <text x="320" y="90" fill="#93C5FD" fontSize="32" fontWeight="900" fontFamily="sans-serif">?</text>
                    <text x="345" y="70" fill="#60A5FA" fontSize="24" fontWeight="900" fontFamily="sans-serif">?</text>
                    <text x="365" y="100" fill="#38BDF8" fontSize="20" fontWeight="900" fontFamily="sans-serif">?</text>

                    {/* Characters */}
                    {/* Person 1 Top Left */}
                    <circle cx="330" cy="130" r="12" fill="#FED7AA" />
                    <path d="M318 144 C318 138 342 138 342 144 L345 178 L315 178 Z" fill="#2563EB" />

                    {/* Person 2 Sitting Bottom Left */}
                    <circle cx="150" cy="200" r="12" fill="#FED7AA" />
                    <path d="M138 214 C138 208 162 208 162 214 L165 245 L135 245 Z" fill="#0284C7" />

                    {/* Person 3 Sitting Right */}
                    <circle cx="410" cy="220" r="12" fill="#FED7AA" />
                    <path d="M398 234 C398 228 422 228 422 234 L425 268 L395 268 Z" fill="#EC4899" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. "Why firevy.co?" CARDS GRID SECTION (Exact Reference Screenshots Match) */}
        <section className="py-20 bg-[#F4F7FB] text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans">
                Why firevy.co?
              </h2>
              <p className="text-[18px] font-[400] text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
                Reasons why our clients keep coming back to us
              </p>
            </div>

            {/* 51 Feature Cards Grid (3 Columns) - Soft Clean Shadow, Rounded Corners, No Border */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyChooseUsCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-[16px] p-8 sm:p-9 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[#00668C] mb-5">
                      {card.rawIcon ? <card.rawIcon className="w-9 h-9 stroke-[1.7]" /> : card.icon}
                    </div>
                    <h3 className="text-[18px] font-[600] text-slate-900 font-sans tracking-tight mb-3 group-hover:text-[#00668C] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[14.5px] font-[400] text-slate-600 leading-relaxed font-sans section-content-desc">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Global CTA / Newsletter Section */}
        <WorkTogetherNewsletterSection
          title="Ready To Get Started?"
          subtitle="Learn how firevy.co can help you build better relationships with your customers. Start a conversation today."
        />
      </div>
    );
  }

  // If this is the "Great Place To Work" / "great-place-to-work" page, render exact Sapphire Great Place To Work Layout
  if (pageKey === 'great-place-to-work') {
    const greatPlaceBenefits = [
      {
        id: 1,
        title: 'Sustainability',
        desc: 'For us, responsible entrepreneurship and scientific advancement go hand in hand. Because of this, a large portion of our magic is used to develop sustainable solutions.',
        icon: (
          <div className="w-12 h-12 rounded-[12px] bg-purple-50 text-purple-600 flex items-center justify-center mb-5 border border-purple-100">
            <Globe className="w-6 h-6 stroke-[1.8]" />
          </div>
        )
      },
      {
        id: 2,
        title: 'Equal Opportunity Employer',
        desc: 'firevy.co promises not to discriminate against employees because of their race, color, religion, sex, national origin, age, disability, or genetic information.',
        icon: (
          <div className="w-12 h-12 rounded-[12px] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
            <Users className="w-6 h-6 stroke-[1.8]" />
          </div>
        )
      },
      {
        id: 3,
        title: 'Are You Ready To Lead?',
        desc: 'Through our dedication to lifelong learning, we will support, encourage, and direct you to achieve your career goals.',
        icon: (
          <div className="w-12 h-12 rounded-[12px] bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
            <Award className="w-6 h-6 stroke-[1.8]" />
          </div>
        )
      }
    ];

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Great Place To Work | Life & Culture at firevy.co"
          description="What makes firevy.co an exciting place to work? Discover our culture, values, team benefits, and awards."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "What Makes firevy.co An Exciting Place To Work?" (Exact Reference Screenshot 0 Match) */}
        <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  {dynamicSection?.title || 'What Makes firevy.co An Exciting Place To Work?'}
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  {dynamicSection?.subtitle || 'Working with firevy.co is much more than doing a set of tasks daily. You can think, innovate, and tell us your ideas to improve this organization! You have exciting new opportunities to follow your curiosity wherever it takes you and pursue a career with our company.'}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>{dynamicSection?.ctaText || 'Discuss Your Project'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right 3D Isometric Illustration (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center relative select-none">
                <div className="relative w-full max-w-[540px] h-[360px] flex items-center justify-center">
                  <svg viewBox="0 0 540 360" className="w-full h-full drop-shadow-xl" fill="none">
                    {/* Isometric Base Platform Grid */}
                    <polygon points="270,70 510,190 270,310 30,190" fill="#E6F2FC" opacity="0.95" />
                    <polygon points="270,310 510,190 510,205 270,325 30,205 30,190" fill="#BAE1F9" />

                    {/* Isometric Workstations */}
                    <polygon points="120,160 220,110 300,150 200,200" fill="#2563EB" opacity="0.9" />
                    <polygon points="340,110 440,160 360,200 260,150" fill="#3B82F6" opacity="0.9" />

                    {/* Floating Speech Bubbles */}
                    <polygon points="380,70 440,50 480,70 420,90" fill="#60A5FA" />
                    <polygon points="380,70 420,90 420,115 380,95" fill="#3B82F6" />

                    {/* Team Characters */}
                    <circle cx="200" cy="110" r="10" fill="#FED7AA" />
                    <path d="M190 122 C190 118 210 118 210 122 L212 150 L188 150 Z" fill="#DC2626" />

                    <circle cx="380" cy="160" r="10" fill="#FED7AA" />
                    <path d="M370 172 C370 168 390 168 390 172 L392 200 L368 200 Z" fill="#0284C7" />

                    <circle cx="280" cy="210" r="10" fill="#FED7AA" />
                    <path d="M270 222 C270 218 290 218 290 222 L292 250 L268 250 Z" fill="#EC4899" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ENTERPRISE BRAND LOGOS BANNER (Exact Reference Screenshot 0 & 1 Match) */}
        <section className="py-12 bg-white border-b border-slate-100 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center opacity-80 hover:opacity-100 transition-opacity">
              {brandLogos.slice(0, 7).map((brand) => (
                <div key={brand.id} className="h-16 flex items-center justify-center p-2">
                  {brand.content}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. "How We Did It?" SECTION (Exact Reference Screenshot 1 Match) */}
        <section className="py-20 bg-white text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                    alt="firevy.co Corporate Building"
                    className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Right Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans section-content-title">
                  How We Did It?
                </h2>
                <p className="text-[15px] font-[400] text-slate-600 leading-[1.85] font-sans section-content-desc">
                  It was the first time we tried to offer 360-degree IT services, so getting here took a lot of work. A few years ago, we worked hard for our first client before receiving our first lead. At that very moment, firevy.co chose to group its IT services under a single umbrella. We were fortunate to receive further leads over the following few months, and they were gracious enough to provide us with as much input as we could reasonably process. Additionally, several of our clients began requesting digital marketing solutions. We started a small team for digital marketing from there and have yet to look back. All due to our incredible partners, clients, and, of course, our extraordinarily bright personnel who put in a lot of effort for us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. "What Makes firevy.co Great Place To Work" VIDEO BANNER SECTION (Exact Reference Screenshot 2 Match) */}
        <section className="py-20 bg-[#006B8F] text-white text-center font-sans relative overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-white tracking-tight leading-tight mb-2 font-sans section-content-title">
              What Makes firevy.co Great Place To Work
            </h2>
            <p className="text-[15px] font-[400] text-cyan-100 max-w-xl mx-auto mb-12 font-sans section-content-desc">
              What Makes firevy.co Great Place to work
            </p>

            {/* Video Container Box with Cyan Border */}
            <div className="relative max-w-4xl mx-auto rounded-[30px] overflow-hidden border-4 border-cyan-300/80 shadow-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="firevy.co Team Collaboration"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                {/* Play Button Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 text-[#006B8F] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "Benefits" SECTION (Exact Reference Screenshot 3 Match) */}
        <section className="py-20 bg-[#F4F7FB] text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Benefits
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                To grow and consistently improve our work, we promote transparency, conversation, and employee feedback in a demanding and exciting learning environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {greatPlaceBenefits.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[20px] p-8 border border-slate-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {item.icon}
                    <h3 className="text-[20px] font-[800] text-slate-900 font-sans tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14.5px] font-[400] text-slate-600 leading-relaxed font-sans section-content-desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. "Awards And Recognition" & "Meet Our Heroes" SECTION (Exact Reference Screenshot 4 Match) */}
        <section className="py-20 bg-white text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 space-y-20">
            {/* Top Awards Header */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Awards And Recognition
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                The world is fueled by money. However, at our organization, rewards go beyond money. We provide a variety of attractive incentives to support you in working your magic.
              </p>
            </div>

            {/* Meet Our Heroes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans section-content-title">
                  Meet Our Heroes
                </h3>
                <p className="text-[15px] font-[400] text-slate-600 leading-[1.85] font-sans section-content-desc">
                  We reward them because our team's strength grows enormously from our accomplishments. When an individual or team exemplifies your company's values, mission, or objectives, we have a culture that values and rewards their effort, successes, and contributions. Employees that take part in initiatives like these realize the significance and value of their work. Their ability to accomplish their jobs better is thereby significantly increased. At firevy.co, increasing employee productivity and recruiting and keeping top talent is done in a variety of ways, from work incentives to more freedom. We recognize the significance of feeling valued in order to succeed as a business owner or entrepreneur.
                </p>
              </div>

              {/* Right Column Photo Grid (Exact Reference Screenshot 4 Match) */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Big Left Photo */}
                  <div className="rounded-[16px] overflow-hidden shadow-lg border border-slate-200 h-full min-h-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
                      alt="firevy.co Award Ceremony"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* 2 Stacked Right Photos */}
                  <div className="space-y-4">
                    <div className="rounded-[16px] overflow-hidden shadow-lg border border-slate-200 h-[145px]">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                        alt="Employee Recognition"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-[16px] overflow-hidden shadow-lg border border-slate-200 h-[145px]">
                      <img
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
                        alt="Team Celebration"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "While There's Still A Lot To Explore In Our Workplace" PHOTO GALLERY & SLIDER SECTION (Exact Reference Screenshot 0 Match) */}
        <section className="py-20 bg-white text-center font-sans border-t border-slate-200 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
              While There's Still A Lot To Explore In Our Workplace
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-sans section-content-desc">
              From dedicated cabins to conference rooms, we have been trying to find ways to provide our team with the resources they need to stay happy at work.
            </p>

            {/* Workplace Photos Scrollable Carousel Container */}
            <div
              ref={workplaceScrollRef}
              className="flex space-x-6 overflow-x-auto py-4 snap-x snap-mandatory scroll-smooth mb-8 border-none no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px] sm:h-[340px] shrink-0 w-[85vw] sm:w-[410px] snap-center group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="firevy.co Developers at Work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px] sm:h-[340px] shrink-0 w-[85vw] sm:w-[410px] snap-center group">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                  alt="firevy.co Open Office Space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px] sm:h-[340px] shrink-0 w-[85vw] sm:w-[410px] snap-center group">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                  alt="firevy.co Festive Office Bay"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px] sm:h-[340px] shrink-0 w-[85vw] sm:w-[410px] snap-center group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                  alt="firevy.co Conference Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px] sm:h-[340px] shrink-0 w-[85vw] sm:w-[410px] snap-center group">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80"
                  alt="firevy.co Executive Lounge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Slider Arrow Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                type="button"
                onClick={scrollWorkplaceLeft}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={scrollWorkplaceRight}
                className="w-12 h-12 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 8. "firevy.co Culture" SECTION (Exact Reference Screenshot 0 Match) */}
        <section className="py-24 text-white font-sans relative overflow-hidden">
          {/* Office Background Image with Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#006B8F]/88" />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[40px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans section-content-title">
                firevy.co Culture
              </h2>
              <p className="text-[15px] font-[400] text-cyan-100 leading-relaxed max-w-2xl mx-auto font-sans section-content-desc">
                We embrace a culture that fosters an environment where workers are happy and produce better work...
              </p>
            </div>

            {/* 2x2 Grid with Side-by-Side Flex Layout (Icon Box Left, Text Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto text-left">
              {/* Item 1: Flexibility And Freedom */}
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-[12px] bg-white text-[#006B8F] flex items-center justify-center shrink-0 shadow-lg">
                  <Sparkles className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[800] text-white font-sans tracking-tight mb-2">
                    Flexibility And Freedom
                  </h3>
                  <p className="text-[14.5px] font-[400] text-cyan-100 leading-relaxed font-sans section-content-desc">
                    We work hard to allow you the freedom to advance your career while maintaining a healthy work-life balance. You can reshape the job to fit your personality.
                  </p>
                </div>
              </div>

              {/* Item 2: Innovation Everyday */}
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-[12px] bg-white text-[#006B8F] flex items-center justify-center shrink-0 shadow-lg">
                  <Globe className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[800] text-white font-sans tracking-tight mb-2">
                    Innovation Everyday
                  </h3>
                  <p className="text-[14.5px] font-[400] text-cyan-100 leading-relaxed font-sans section-content-desc">
                    We have people, strategy, leadership, management, culture and tools & processes to make sure we innovate every day and keep on improving our services.
                  </p>
                </div>
              </div>

              {/* Item 3: People First */}
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-[12px] bg-white text-[#006B8F] flex items-center justify-center shrink-0 shadow-lg">
                  <Users className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[800] text-white font-sans tracking-tight mb-2">
                    People First
                  </h3>
                  <p className="text-[14.5px] font-[400] text-cyan-100 leading-relaxed font-sans section-content-desc">
                    Meaningful employment, or a job in which one feels effective and has the potential to change the business, is one factor for hiring personnel. They ought to be moving forward, capable of expanding, growing, and advancing their career inside the organization.
                  </p>
                </div>
              </div>

              {/* Item 4: Making Impact */}
              <div className="flex items-start space-x-5">
                <div className="w-14 h-14 rounded-[12px] bg-white text-[#006B8F] flex items-center justify-center shrink-0 shadow-lg">
                  <Target className="w-7 h-7 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-[800] text-white font-sans tracking-tight mb-2">
                    Making Impact
                  </h3>
                  <p className="text-[14.5px] font-[400] text-cyan-100 leading-relaxed font-sans section-content-desc">
                    We aim to give you a chance to advance your career and alter the course of history. Our work at firevy.co significantly impacts the world we live in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. "Trusted By The World’s Leading Brands" SECTION (Exact Reference Screenshot 2 Match) */}
        <section className="py-20 bg-white border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Trusted By The World’s Leading Brands
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] h-[115px] sm:h-[125px] flex items-center justify-center p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300">
                    {brand.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. "What Our Clients Say" CLUTCH REVIEWS CAROUSEL SECTION (Exact Reference Screenshot 0 Match) */}
        <section className="py-20 bg-[#006B8F] text-white text-center font-sans overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-white tracking-tight leading-tight mb-14 font-sans section-content-title">
              What Our Clients Say
            </h2>

            {/* Scrollable Horizontal Clutch Carousel Container (3 Cards Fit Side-by-Side) */}
            <div
              ref={clutchScrollRef}
              className="flex space-x-5 sm:space-x-6 overflow-x-auto py-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Clutch Card 1 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span>
                        <span className="text-red-500">c</span>
                        <span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "They are very professional, respectful, competent, and approachable."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        The client was highly pleased with firevy.co's software development work. The team met all timeline goals and kept the cost within budget...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                        alt="Christine Ine"
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Christine Ine</h5>
                        <span className="text-[10.5px] text-slate-500 font-medium">Rockville, Maryland</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">4.5</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">4.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">4.5</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clutch Card 2 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span>
                        <span className="text-red-500">c</span>
                        <span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "firevy.co's team communicated effectively..."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        firevy.co successfully implemented all UX and design features on the app. The team has consistently delivered on schedule...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                        alt="Derrick Surratt"
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Derrick Surratt</h5>
                        <span className="text-[10.5px] text-slate-500 font-medium">Arkansas</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clutch Card 3 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span>
                        <span className="text-red-500">c</span>
                        <span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "They're able to listen to customer requests and attend..."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        firevy.co's updates improved a product's UX per the end customer's requests. The team is personable, reaches their goals...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                        alt="Hamidah Nalwoga"
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Hamidah Nalwoga</h5>
                        <span className="text-[10.5px] text-slate-500 font-medium">Massachusetts</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clutch Card 4 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span>
                        <span className="text-red-500">c</span>
                        <span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "The team exceeded our expectations in every single release."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        Communication was smooth across all timezones. They understood our complex requirements quickly and delivered high performance...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                        alt="Michael Vance"
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Michael Vance</h5>
                        <span className="text-[10.5px] text-slate-500 font-medium">Austin, Texas</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">4.8</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Arrow Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                type="button"
                onClick={scrollClutchLeft}
                className="w-12 h-12 rounded-full border border-white/40 bg-white/25 text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={scrollClutchRight}
                className="w-12 h-12 rounded-full border border-white/40 bg-white/25 text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 11. "We Have Been Featured In" SECTION (Exact Reference Screenshot 4 Match) */}
        <FeaturedInLogosGrid />

        {/* 12. Bottom CTA & Subscription Banners */}
        <WorkTogetherNewsletterSection />
      </div>
    );
  }

  // If this is the "Women Empowerment" page, render exact Sapphire Empowering The Women At Sapphire Layout
  if (pageKey === 'women-empowerment' || pageKey === 'empowering-the-women-at-sapphire') {
    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Empowering The Women At firevy.co | Life & Diversity"
          description="At firevy.co, we firmly believe in equality of opportunity, shatter the glass ceiling, and celebrate women in leadership."
          canonical={`/company/${pageKey}`}
        />

        {/* 1. HERO SECTION: "Empowering The Women At firevy.co" (Exact Reference Screenshot 0 Match) */}
        <section className="pt-32 pb-16 bg-[#F4F7FB] relative overflow-hidden text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <h1 className="text-[34px] font-[800] text-slate-900 tracking-tight leading-tight font-sans page-hero-title">
                  {dynamicSection?.title || 'Empowering The Women At firevy.co'}
                </h1>
                <p className="text-[15px] text-slate-600 leading-relaxed font-[400] font-sans max-w-xl page-hero-desc">
                  {dynamicSection?.subtitle || 'At firevy.co, we firmly believe in equality of opportunity and non-discrimination.'}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-[6px] bg-[#00668C] hover:bg-[#004E6C] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                  >
                    <span>{dynamicSection?.ctaText || 'Connect Now'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Photo Collage (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center relative select-none">
                <div className="relative w-full max-w-[500px] h-[380px] flex items-center justify-center">
                  {/* Floating decorative badges */}
                  <div className="absolute top-4 left-6 bg-white p-2.5 rounded-full shadow-lg text-amber-500 z-20 animate-bounce">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-6 left-12 bg-white p-2.5 rounded-full shadow-lg text-rose-500 z-20">
                    <Heart className="w-6 h-6 fill-rose-500" />
                  </div>
                  <div className="absolute bottom-10 right-8 bg-white p-2.5 rounded-full shadow-lg text-yellow-500 z-20">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  {/* Collage Photos */}
                  <div className="absolute top-0 right-4 w-[220px] h-[260px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white rotate-3 group hover:rotate-0 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                      alt="Women Leader Receiving Award"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-6 left-10 w-[170px] h-[150px] rounded-[20px] overflow-hidden shadow-xl border-4 border-white -rotate-6 group hover:rotate-0 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                      alt="Women Team Celebrating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-2 left-24 w-[240px] h-[160px] rounded-[22px] overflow-hidden shadow-2xl border-4 border-white rotate-2 group hover:rotate-0 transition-transform duration-500 z-10">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
                      alt="firevy.co Women Celebration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ENTERPRISE BRAND LOGOS BANNER - INFINITE AUTOSCROLL MARQUEE */}
        <section className="py-8 bg-white border-b border-slate-200 font-sans overflow-hidden select-none">
          <div className="relative w-full flex overflow-hidden">
            {/* Left/Right Subtle Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Marquee Track 1 (All 24 Logos) */}
            <div className="flex space-x-12 shrink-0 animate-marquee items-center py-2 pr-12">
              {brandLogos.map((brand, idx) => (
                <div
                  key={`brand-1-${idx}`}
                  className="h-14 w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
                >
                  {brand.content}
                </div>
              ))}
            </div>

            {/* Marquee Track 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="flex space-x-12 shrink-0 animate-marquee items-center py-2 pr-12" aria-hidden="true">
              {brandLogos.map((brand, idx) => (
                <div
                  key={`brand-2-${idx}`}
                  className="h-14 w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer transform hover:scale-110"
                >
                  {brand.content}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. "Women In Leadership" SECTION (Exact Reference Screenshot 1 Match) */}
        <section className="py-20 bg-white text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column 6 Photo Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Leadership 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" alt="Leadership 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Leadership 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=400&q=80" alt="Leadership 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" alt="Leadership 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="rounded-[16px] overflow-hidden shadow-md h-[140px]">
                    <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80" alt="Leadership 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Right Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans section-content-title">
                  Women In Leadership
                </h2>
                <p className="text-[15px] font-[400] text-slate-600 leading-[1.85] font-sans section-content-desc">
                  At firevy.co, we put a lot of effort towards demonstrating to all women that they have a place in the technology sector and are greatly needed by fostering an atmosphere that values and appreciates their contributions to our team. We help women leaders by, among other things, influencing the next generation through educational initiatives. firevy.co gives its female talent the skills, resources, and attitude they need to lead in the company. Apart from that, we strive to create mentors and role models for our future female leaders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. "Achievements Of Women At firevy.co" SECTION (Exact Reference Screenshot 1 Match) */}
        <section className="py-20 bg-[#F4F7FB] text-left font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans section-content-title">
                  Achievements Of Women At firevy.co
                </h2>
                <p className="text-[15px] font-[400] text-slate-600 leading-[1.85] font-sans section-content-desc">
                  Affirmative action and statistics alone do not define gender diversity. It is about enabling every woman to shatter the symbolic glass ceiling. Not just a small number of women have succeeded in shattering the glass ceiling. Women leaders contribute talents and views that result in significant structural and cultural changes as we continue to progress in a state of flux. Additionally, we think that having women on management teams greatly enhances the organization's social drive.
                </p>
              </div>

              {/* Right Column Photo Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200 h-[280px]">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" alt="Award 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200 h-[132px]">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Award 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-[20px] overflow-hidden shadow-lg border border-slate-200 h-[132px]">
                      <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" alt="Award 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. "Breaking The Bias" TESTIMONIAL BANNERS SECTION (Decreased Size / Compact Layout) */}
        <section className="py-16 bg-white font-sans text-left">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 space-y-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Breaking The Bias
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans section-content-desc">
                We prevent hidden bias at the workplace and identify disparities in performance management by looking at data through the right lens
              </p>
            </div>

            {/* Testimonial Banner 1 (Dark Blue #006B8F - Foram Gami) */}
            <div className="bg-[#006B8F] text-white rounded-[24px] overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-[280px] h-full">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt="Foram Gami"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center space-y-4 relative">
                  <div className="text-cyan-200 opacity-25 text-5xl font-serif leading-none absolute top-4 left-5 select-none">
                    “
                  </div>
                  <p className="text-[14px] font-[400] text-cyan-50 leading-[1.7] font-sans relative z-10">
                    Balancing office work, household responsibilities, and personal growth isn’t easy, but it’s part of my everyday life. With time management, self-discipline, and support, I continue to grow in my career while staying connected to who I am beyond the workplace. What makes this journey smoother is the support and encouragement I receive from firevy.co. A positive work culture, opportunities for learning, and the flexibility to manage personal commitments have played a key role in shaping my professional growth. I'm proud to be part of a workplace that values women not just as employees, but as individuals with ambition and potential.
                  </p>
                  <div>
                    <h3 className="text-[18px] font-[800] text-white font-sans leading-tight">Foram Gami</h3>
                    <p className="text-[13px] text-cyan-200 font-sans">Sr. Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Banner 2 (White / Light Background - Rinku Shekhawat) */}
            <div className="bg-[#F4F7FB] text-slate-900 rounded-[24px] overflow-hidden border border-slate-200/80 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center space-y-4 relative order-2 lg:order-1">
                  <div className="text-[#006B8F] opacity-20 text-5xl font-serif leading-none absolute top-4 left-5 select-none">
                    “
                  </div>
                  <p className="text-[14px] font-[400] text-slate-700 leading-[1.7] font-sans relative z-10">
                    "I'm a woman, a wife, and a passionate HR professional. What began as a trainee role has evolved into a journey of growth, resilience, and leadership, now standing proud as a Senior HR. Throughout this journey, firevy.co has played a pivotal role in nurturing my professional development by providing an environment where learning is continuous, contributions are valued, and potential is recognized. To me, women’s empowerment is a quiet fire, born of courage, fuelled by unity, and lighting the way forward.”
                  </p>
                  <div>
                    <h3 className="text-[18px] font-[800] text-[#006B8F] font-sans leading-tight">Rinku Shekhawat</h3>
                    <p className="text-[13px] text-slate-500 font-sans">Sr. HR & Admin Executive</p>
                  </div>
                </div>
                <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-[280px] h-full order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                    alt="Rinku Shekhawat"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Banner 3 (Dark Blue #006B8F - Akanksha Rai) */}
            <div className="bg-[#006B8F] text-white rounded-[24px] overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-[280px] h-full">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Akanksha Rai"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center space-y-4 relative">
                  <div className="text-cyan-200 opacity-25 text-5xl font-serif leading-none absolute top-4 left-5 select-none">
                    “
                  </div>
                  <p className="text-[14px] font-[400] text-cyan-50 leading-[1.7] font-sans relative z-10">
                    "I'm a proud wife and a dedicated professional. Relocating independently from Madhya Pradesh to Gujarat was not just a change in geography - it was a bold step toward self-growth and new possibilities. In this new chapter at firevy.co, I've learned to lead with clarity, manage with heart, and strike a powerful balance between my professional ambitions and personal responsibilities. For me, empowerment is not just about rising - it's about rising with resilience, purpose, and grace."
                  </p>
                  <div>
                    <h3 className="text-[18px] font-[800] text-white font-sans leading-tight">Akanksha Rai</h3>
                    <p className="text-[13px] text-cyan-200 font-sans">Sr. Technical Support Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Banner 4 (White / Light Background - Purvi Trivedi) */}
            <div className="bg-[#F4F7FB] text-slate-900 rounded-[24px] overflow-hidden border border-slate-200/80 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-center space-y-4 relative order-2 lg:order-1">
                  <div className="text-[#006B8F] opacity-20 text-5xl font-serif leading-none absolute top-4 left-5 select-none">
                    “
                  </div>
                  <p className="text-[14px] font-[400] text-slate-700 leading-[1.7] font-sans relative z-10">
                    "I’m proud to be part of a company like firevy.co, where women are truly valued, respected, and empowered. As an unmarried woman, I’ve often encountered assumptions about what I should be doing next in life. But at firevy.co, I’ve never been made to feel “less than” or out of place. Here, I’m appreciated for my work, encouraged to grow, and trusted with responsibilities that challenge and inspire me. It’s refreshing to work in an environment where merit speaks louder than stereotypes."
                  </p>
                  <div>
                    <h3 className="text-[18px] font-[800] text-[#006B8F] font-sans leading-tight">Purvi Trivedi</h3>
                    <p className="text-[13px] text-slate-500 font-sans">Sr. Software Engineer</p>
                  </div>
                </div>
                <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-[280px] h-full order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
                    alt="Purvi Trivedi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. "How Does firevy.co Build A Female-Friendly Work Environment?" SECTION (Exact Reference Screenshot 0 Match) */}
        <section className="py-20 bg-[#F4F7FB] text-slate-900 font-sans text-left border-t border-slate-200">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                How Does firevy.co Build A Female-Friendly Work Environment?
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                From hiring to entry level to leadership, we ensure we have policies and processes to remove gender bias underlying any circumstances
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column 4 Features List (Clean row layout with white icon box matching reference screenshot 0) */}
              <div className="lg:col-span-6 space-y-7">
                {/* Feature 1 */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-[14px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-700">
                    <ThumbsUp className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-[700] text-slate-900 mb-1 font-sans">Appreciate Your Women Workforce</h3>
                    <p className="text-[14px] font-[400] text-slate-600 leading-relaxed font-sans max-w-md">
                      We are concentrating on developing women's growth plans in our firm.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-[14px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-700">
                    <Users className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-[700] text-slate-900 mb-1 font-sans">Empowering</h3>
                    <p className="text-[14px] font-[400] text-slate-600 leading-relaxed font-sans max-w-md">
                      Women are enabled to achieve more and succeed in the workplace through access to top leaders.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-[14px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-700">
                    <Heart className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-[700] text-slate-900 mb-1 font-sans">Inclusive Culture</h3>
                    <p className="text-[14px] font-[400] text-slate-600 leading-relaxed font-sans max-w-md">
                      Everyone is allowed to be themselves and is welcomed here; in addition to respecting variety.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-[14px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/80 flex items-center justify-center shrink-0 text-slate-700">
                    <Camera className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-[700] text-slate-900 mb-1 font-sans">Photos</h3>
                    <p className="text-[14px] font-[400] text-slate-600 leading-relaxed font-sans max-w-md">
                      We're honored to recognize the outstanding contributions made by women throughout the world.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Multitasking Woman Vector Graphic Illustration (Exact Reference Screenshot 0 Match) */}
              <div className="lg:col-span-6 flex justify-center items-center relative py-4">
                <div className="relative w-full max-w-[520px] aspect-[4/3] flex items-center justify-center">
                  {/* Floating Doodle Icons in Background (Light Blue Lines) */}
                  <div className="absolute top-2 left-6 text-sky-400/80">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div className="absolute top-0 right-12 text-sky-400/80">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" /></svg>
                  </div>
                  <div className="absolute top-1/4 left-0 text-sky-400/80">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
                  </div>
                  <div className="absolute top-1/3 right-2 text-sky-400/80">
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                  </div>
                  <div className="absolute bottom-10 left-4 text-sky-400/80">
                    <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>

                  {/* Central Vector Multitasking Woman Illustration */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-end items-center">
                    <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-lg">
                      {/* Desk Base */}
                      <rect x="60" y="340" width="380" height="10" rx="4" fill="#00668C" opacity="0.9" />

                      {/* Books & Tea Cup on Desk */}
                      <rect x="360" y="300" width="65" height="12" rx="2" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="365" y="312" width="60" height="14" rx="2" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                      <rect x="355" y="326" width="75" height="14" rx="2" fill="#00668C" stroke="#004E6C" strokeWidth="2" />

                      <rect x="80" y="315" width="22" height="25" rx="3" fill="#0284C7" />
                      <path d="M 75 322 C 69 322, 69 332, 75 332" stroke="#0284C7" strokeWidth="3" fill="none" />
                      <path d="M 85 308 C 85 300, 90 300, 90 295" stroke="#94A3B8" strokeWidth="2" fill="none" strokeDasharray="2 2" />

                      {/* Laptop */}
                      <path d="M 200 340 L 320 340 L 310 290 L 210 290 Z" fill="#334155" />
                      <rect x="215" y="292" width="90" height="45" fill="#0F172A" rx="2" />
                      <rect x="220" y="296" width="80" height="37" fill="#38BDF8" opacity="0.3" rx="1" />

                      {/* Multitasking Woman Figure */}
                      {/* Hair */}
                      <path d="M 230 190 Q 260 160 290 190 Q 300 230 290 260 L 230 260 Z" fill="#1E293B" />
                      {/* Face & Neck */}
                      <circle cx="260" cy="205" r="28" fill="#FDBA74" />
                      <rect x="252" y="230" width="16" height="22" fill="#FDBA74" />
                      {/* Hair Front */}
                      <path d="M 235 195 Q 260 180 285 195 C 285 210 275 215 260 215 C 245 215 235 210 235 195 Z" fill="#0F172A" />
                      {/* Eyes & Smile */}
                      <circle cx="250" cy="205" r="2.5" fill="#1E293B" />
                      <circle cx="270" cy="205" r="2.5" fill="#1E293B" />
                      <path d="M 255 217 Q 260 222 265 217" stroke="#EA580C" strokeWidth="2" fill="none" strokeLinecap="round" />

                      {/* Torso & Blue Jacket */}
                      <path d="M 225 250 L 295 250 L 315 340 L 205 340 Z" fill="#0284C7" />
                      <path d="M 250 250 L 260 290 L 270 250" fill="#FFFFFF" />

                      {/* Multitasking 6 Arms */}
                      {/* Left Arm 1 - Up holding document */}
                      <path d="M 230 260 Q 170 220 150 180" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" fill="none" />
                      <circle cx="150" cy="180" r="8" fill="#FDBA74" />
                      <rect x="115" y="135" width="45" height="55" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                      <line x1="125" y1="150" x2="148" y2="150" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                      <line x1="125" y1="160" x2="148" y2="160" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

                      {/* Left Arm 2 - Out holding clock */}
                      <path d="M 230 270 Q 150 270 120 250" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" fill="none" />
                      <circle cx="120" cy="250" r="8" fill="#FDBA74" />

                      {/* Right Arm 1 - Up holding chart */}
                      <path d="M 290 260 Q 350 220 370 180" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" fill="none" />
                      <circle cx="370" cy="180" r="8" fill="#FDBA74" />
                      <rect x="350" y="130" width="55" height="45" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                      <path d="M 360 160 L 372 150 L 382 155 L 395 140" stroke="#0284C7" strokeWidth="3" fill="none" strokeLinecap="round" />

                      {/* Right Arm 2 - Out holding envelope */}
                      <path d="M 290 270 Q 370 270 400 250" stroke="#0284C7" strokeWidth="16" strokeLinecap="round" fill="none" />
                      <circle cx="400" cy="250" r="8" fill="#FDBA74" />
                      <rect x="390" y="235" width="35" height="25" rx="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                      <path d="M 390 237 L 407 248 L 425 237" stroke="#0284C7" strokeWidth="2" fill="none" />

                      {/* Typing Arms (At laptop) */}
                      <path d="M 240 280 Q 230 320 250 330" stroke="#0284C7" strokeWidth="14" strokeLinecap="round" fill="none" />
                      <path d="M 280 280 Q 290 320 270 330" stroke="#0284C7" strokeWidth="14" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. "Photos" WOMEN WORKFORCE PHOTO GALLERY SECTION (Exact Reference Screenshot 2 Match) */}
        <section className="py-20 bg-white text-slate-900 font-sans text-center border-t border-slate-200">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-2 font-sans section-content-title">
              Photos
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12 font-sans section-content-desc">
              Sharing a few glimpses from our talented women workforce
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px]">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Festive Celebration 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px]">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Women Team Glimpse 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/90 h-[280px]">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Stairs Group Photo 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/90 h-[300px]">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" alt="Large Group Event 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-200/90 h-[300px]">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" alt="Celebration 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. "Trusted By The World’s Leading Brands" SECTION (Exact Reference Screenshot 3 Match) */}
        <section className="py-20 bg-white border-t border-b border-slate-200 text-slate-900 font-sans">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="text-center max-w-4xl mx-auto mb-14">
              <h2 className="text-[40px] font-[800] text-slate-900 tracking-tight leading-tight mb-3 font-sans section-content-title">
                Trusted By The World’s Leading Brands
              </h2>
              <p className="text-[15px] font-[400] text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans section-content-desc">
                We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-[16px] border border-slate-200/90 shadow-[0px_4px_16px_rgba(0,0,0,0.04)] h-[115px] sm:h-[125px] flex items-center justify-center p-4 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-full flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300">
                    {brand.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. "What Our Clients Say" CLUTCH REVIEWS CAROUSEL SECTION (Exact Reference Screenshot 4 Match) */}
        <section className="py-20 bg-[#006B8F] text-white text-center font-sans overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[40px] font-[800] text-white tracking-tight leading-tight mb-14 font-sans section-content-title">
              What Our Clients Say
            </h2>

            <div
              ref={clutchScrollRef}
              className="flex space-x-5 sm:space-x-6 overflow-x-auto py-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Clutch Card 1 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span><span className="text-red-500">c</span><span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "The team is very professional and friendly."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        Thanks to firevy.co, we have launched the app and my customers are happy with the tool. currently, we have...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Tim" className="w-9 h-9 rounded-full object-cover shadow-sm" />
                      <div><h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Tim</h5><span className="text-[10.5px] text-slate-500 font-medium">New Hampshire</span></div>
                    </div>
                  </div>
                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clutch Card 2 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span><span className="text-red-500">c</span><span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "The time and effort the firevy.co team put into..."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        firevy.co uploaded the app successfully to the app stores. The team was highly responsive, delivered on time, and...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Christina Wälchli" className="w-9 h-9 rounded-full object-cover shadow-sm" />
                      <div><h5 className="font-[800] text-slate-900 text-[12px] leading-tight">Christina Wälchli</h5><span className="text-[10.5px] text-slate-500 font-medium">Germany</span></div>
                    </div>
                  </div>
                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clutch Card 3 */}
              <div className="bg-white text-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl flex flex-col justify-between shrink-0 w-[88vw] sm:w-[410px] lg:w-[420px] snap-center">
                <div className="grid grid-cols-12 gap-3.5 items-stretch">
                  <div className="col-span-7 flex flex-col justify-between space-y-2.5 text-left">
                    <div>
                      <div className="text-[19px] font-[900] text-slate-900 tracking-tight mb-1.5 flex items-center">
                        <span>Clut</span><span className="text-red-500">c</span><span>h</span>
                      </div>
                      <h4 className="text-[12.5px] font-[700] text-slate-900 leading-snug mb-1 font-sans">
                        "The technical support team was very responsive..."
                      </h4>
                      <p className="text-[11.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                        firevy.co delivered the software in a timely manner. The team was responsive to requests and feedback...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2.5 pt-1">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="AMR ELATTAR" className="w-9 h-9 rounded-full object-cover shadow-sm" />
                      <div><h5 className="font-[800] text-slate-900 text-[12px] leading-tight">AMR ELATTAR</h5><span className="text-[10.5px] text-slate-500 font-medium">Saudi Arabia</span></div>
                    </div>
                  </div>
                  <div className="col-span-5 bg-[#F4F7FB] rounded-[14px] p-3 flex flex-col justify-center items-center text-center">
                    <span className="text-[28px] font-[900] text-slate-900 leading-none mb-1">5.0</span>
                    <div className="flex space-x-0.5 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />))}
                    </div>
                    <div className="w-full text-[10px] text-slate-600 font-medium space-y-1 pt-1 border-t border-slate-200/80">
                      <div className="flex justify-between items-center"><span>Quality</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Schedule</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Cost</span><span className="font-[800] text-slate-900">5.0</span></div>
                      <div className="flex justify-between items-center"><span>Willing to Refer</span><span className="font-[800] text-slate-900">5.0</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Arrow Navigation Controls */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <button
                type="button"
                onClick={scrollClutchLeft}
                className="w-12 h-12 rounded-full border border-white/40 bg-white/25 text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={scrollClutchRight}
                className="w-12 h-12 rounded-full border border-white/40 bg-white/25 text-white flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* 10. "We Have Been Featured In" SECTION (Exact Reference Screenshot 4 Match) */}
        <FeaturedInLogosGrid />

        {/* 11. Bottom CTA & Subscription Banners */}
        <WorkTogetherNewsletterSection />
      </div>
    );
  }

  // If this is the "Careers" page, render exact Sapphire Careers Layout
  const isCareersPage = pageKey === 'careers' || pageKey === 'career';
  if (isCareersPage) {
    return <Careers />;
  }

  // If this is the "CSR" page, render exact Sapphire CSR Layout
  const isCsrPage = pageKey === 'csr' || pageKey.includes('csr') || pageKey.includes('corporate-social-responsibility');
  if (isCsrPage) {
    return <CSR />;
  }

  // If this is the "Blog" page, render exact Sapphire Blog Layout
  const isBlogPage = pageKey === 'blog' || pageKey.includes('blog');
  if (isBlogPage) {
    const featuredBlog = {
      title: "AI in Mobile App Development: Tools That Save Time and Money",
      category: "Artificial Intelligence Development",
      date: "March 6, 2026",
      readTime: "6 min read",
      excerpt: "AI is converting the way businesses accelerate and launch apps. By using AI Tools for mobile app development, companies can automate coding, testing, UI/UX design, and efficiency optimization."
    };

    const secondaryFeaturedBlogs = [
      {
        title: "Trending Tech Startup Ideas for Entrepreneurs Looking to Scale Fast",
        category: "IT Companies",
        date: "November 6, 2025 · 5 min read",
        bg: "bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900"
      },
      {
        title: "Why Investing in Legacy Modernization Services is Critical for Business Success?",
        category: "Mobile App Development",
        date: "November 4, 2025 · 6 min read",
        bg: "bg-gradient-to-r from-sky-700 via-cyan-800 to-slate-900"
      },
      {
        title: "Why Software Design Principles Matter for Successful IT Solutions?",
        category: "Software Development",
        date: "October 30, 2025 · 6 min read",
        bg: "bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950"
      },
      {
        title: "How to Scale Your IT Business with White Label Web Development Solutions?",
        category: "Web Development",
        date: "October 31, 2025 · 5 min read",
        bg: "bg-gradient-to-r from-cyan-900 via-teal-900 to-slate-900"
      }
    ];

    const allBlogPosts = [
      {
        id: 1,
        title: "What Happens When AI Agents Start Negotiating with Your Customers?",
        author: "Kumaril Patel",
        category: "Artificial Intelligence Development",
        date: "August 31, 2026",
        readTime: "5 min read",
        excerpt: '"If I increase the order to 500 units, can you give me 15% off?" That question used to go to a sales representative. Now it might go to a chatbot. But what happens when tha...',
        bg: "bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-900"
      },
      {
        id: 2,
        title: "How Composable AI Can Reduce the Cost of AI Development for Smart Businesses?",
        author: "Kumaril Patel",
        category: "Artificial Intelligence Development",
        date: "August 27, 2026",
        readTime: "5 min read",
        excerpt: "mid-sized company adds AI to its product. The pilot is doing well. Everyone is happy. Six months later, someone asks for a second AI feature. The team realizes they're...",
        bg: "bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900"
      },
      {
        id: 3,
        title: "Why the Best Business Leaders Need to Stay Ahead of Technology and How They Can Do It",
        author: "Kumaril Patel",
        category: "Software Development",
        date: "August 25, 2026",
        readTime: "5 min read",
        excerpt: "A founder can spend a decade learning how customers think, how to build a team that doesn't fall apart under pressure, how to read a balance sheet, how to time a...",
        bg: "bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"
      },
      {
        id: 4,
        title: "Beyond Chatbots and Copilots: What Happens When AI Agents Start Running Business Processes?",
        author: "Kumaril Patel",
        category: "Artificial Intelligence Development",
        date: "August 21, 2026",
        readTime: "5 min read",
        excerpt: "Imagine a customer issue that normally passes through three employees, four systems, and several manual checks before it is resolved. Now imagine an AI system handling...",
        bg: "bg-gradient-to-br from-cyan-600 via-blue-800 to-slate-950"
      },
      {
        id: 5,
        title: "What 23 Years of Web Development Can Teach Us About Building App for the Next Decade?",
        author: "Kumaril Patel",
        category: "Web Development",
        date: "August 19, 2026",
        readTime: "5 min read",
        excerpt: "The Web We Build Today Is Not the Web We Started With. Twenty-three years ago, building the web simply meant writing HTML and hoping the browser would cooperate...",
        bg: "bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950"
      },
      {
        id: 6,
        title: "Why Two Software Products with the Same Requirements Can Have Completely Different Development Costs?",
        author: "Kumaril Patel",
        category: "Software Development",
        date: "August 14, 2026",
        readTime: "5 min read",
        excerpt: "You've probably seen this happen, maybe even to you. Two agencies get the same requirements doc, and somehow one comes back at $60,000 and the other at $150,000....",
        bg: "bg-gradient-to-br from-sky-700 via-indigo-900 to-slate-900"
      },
      {
        id: 7,
        title: "Why Businesses Are Investing in AI-Driven Business Intelligence Development Services?",
        author: "Kumaril Patel",
        category: "Artificial Intelligence Development",
        date: "August 5, 2026",
        readTime: "5 min read",
        excerpt: "There is no denying the fact that modern enterprises are creating unprecedented volumes of data. However, making sense of all that data is not easy and requires special skill...",
        bg: "bg-gradient-to-br from-purple-800 via-indigo-900 to-slate-900"
      },
      {
        id: 8,
        title: "Why Every Business Needs a Smart Enterprise Strategy in the Age of AI?",
        author: "Kumaril Patel",
        category: "Artificial Intelligence Development",
        date: "July 31, 2026",
        readTime: "5 min read",
        excerpt: "AI is no longer something that we see in the far-off future and belongs to only the largest corporations. Rather, it is a technology which can help businesses become more...",
        bg: "bg-gradient-to-br from-teal-700 via-cyan-900 to-slate-950"
      }
    ];

    const topCategories = [
      { name: "Mobile App Development", count: 184, icon: Globe },
      { name: "Software Development", count: 134, icon: Briefcase },
      { name: "Web Development", count: 195, icon: Globe },
      { name: "IT Companies", count: 77, icon: Users },
      { name: "Android Development", count: 64, icon: Sparkles },
      { name: ".Net Development", count: 19, icon: FileText },
      { name: "Hire Developers", count: 34, icon: Users },
      { name: "iOS Development", count: 67, icon: Heart },
      { name: "Blockchain Development", count: 4, icon: ShieldCheck },
      { name: "Artificial Intelligence Development", count: 37, icon: Sparkles }
    ];

    const filteredPosts = allBlogPosts.filter(post => {
      const matchesSearch = blogSearchQuery === '' ||
        post.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(blogSearchQuery.toLowerCase());
      const matchesCategory = selectedBlogCategory === 'All' || post.category === selectedBlogCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <SEO
          title="Tech Insights & Blog | firevy.co"
          description="Read top tech articles, mobile app development guides, AI trends, and software strategy by firevy.co experts."
          canonical="/company/blog"
        />

        {/* 1. HERO FEATURED SECTION (Exact Reference Screenshot 0 Match) */}
        <section className="pt-32 pb-16 bg-white font-sans text-left border-b border-slate-100">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Main Featured Blog Card (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 group cursor-pointer">
                {/* Banner Graphic Box (Purple AI in Mobile App Theme) */}
                <div className="w-full h-[320px] sm:h-[380px] rounded-[16px] overflow-hidden shadow-lg relative bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA] p-6 sm:p-8 flex flex-col justify-between text-white border border-slate-200/50">
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[20px] font-[900] tracking-tight text-cyan-300 font-sans">firevy.co</span>
                    <span className="bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 text-[11px] font-[800] px-3 py-1 rounded-full uppercase tracking-wider">FEATURED ARTICLE</span>
                  </div>

                  <div className="relative z-10 my-auto max-w-lg space-y-3">
                    <div className="inline-block px-3 py-1 rounded-md bg-cyan-400 text-[#1E1B4B] font-[900] text-xs">
                      &lt;/&gt; AI TOOLS
                    </div>
                    <h2 className="text-[26px] sm:text-[32px] font-[900] text-white leading-tight font-sans tracking-tight">
                      AI in Mobile App Development: Tools That Save Time and Money
                    </h2>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-indigo-200 z-10">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Next-Gen Engineering Insights</span>
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl" />
                </div>

                {/* Below Banner Info */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-3 text-[13px] font-sans">
                    <span className="text-[#0099CC] font-[800] hover:underline">{featuredBlog.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-[400]">{featuredBlog.date} · {featuredBlog.readTime}</span>
                  </div>

                  <h1 className="text-[24px] sm:text-[28px] font-[800] text-slate-900 leading-tight font-sans hover:text-[#0099CC] transition-colors">
                    {featuredBlog.title}
                  </h1>

                  <p className="text-[14.5px] font-[400] text-slate-600 leading-relaxed font-sans">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="pt-1">
                    <span className="inline-flex items-center space-x-1.5 text-[#0099CC] font-[700] text-[14.5px] hover:underline cursor-pointer group-hover:translate-x-1 transition-transform">
                      <span>Read the full blog</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Search & 4 Secondary Cards Grid (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Search Bar */}
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search ..."
                    value={blogSearchQuery}
                    onChange={(e) => setBlogSearchQuery(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-l-[6px] px-4 py-2.5 text-[14px] text-slate-800 outline-none focus:border-[#0099CC] transition-all font-sans"
                  />
                  <button
                    type="button"
                    className="bg-[#0099CC] hover:bg-[#0088BB] text-white font-[700] px-6 py-2.5 rounded-r-[6px] text-[14px] transition-colors cursor-pointer font-sans"
                  >
                    Search
                  </button>
                </div>

                {/* 2x2 Grid of 4 Smaller Featured Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {secondaryFeaturedBlogs.map((card, idx) => (
                    <div key={idx} className="group cursor-pointer flex flex-col justify-between space-y-2">
                      <div className={`w-full h-32 rounded-[12px] overflow-hidden shadow-sm ${card.bg} p-3.5 flex flex-col justify-between text-white relative border border-slate-200/40 hover:shadow-md transition-shadow`}>
                        <span className="text-[10px] font-[800] text-cyan-300 uppercase tracking-wider">firevy.co</span>
                        <h4 className="text-[12px] font-[800] text-white line-clamp-2 leading-snug">
                          {card.title}
                        </h4>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11.5px] font-[800] text-[#0099CC] block font-sans truncate">{card.category}</span>
                        <span className="text-[11px] font-[400] text-slate-500 block font-sans">{card.date}</span>
                        <h3 className="text-[13.5px] font-[800] text-slate-900 leading-snug font-sans line-clamp-2 group-hover:text-[#0099CC] transition-colors">
                          {card.title}
                        </h3>
                        <span className="inline-flex items-center text-[12px] font-[700] text-[#0099CC] space-x-1 pt-1">
                          <span>Read the full blog</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. "All Posts" MAIN FEED + SIDEBAR SECTION (Exact Reference Screenshots 1 - 4 Match) */}
        <section className="py-16 bg-white font-sans text-left">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
            <h2 className="text-[30px] font-[800] text-slate-900 tracking-tight leading-tight border-b border-slate-200 pb-4 mb-10 font-sans">
              All Posts
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Left Main Posts Feed Grid (8 Cols) */}
              <div className="lg:col-span-8 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer bg-white rounded-[16px] border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* Top Thumbnail Banner Graphic */}
                        <div className={`w-full h-48 ${post.bg} p-5 flex flex-col justify-between text-white relative overflow-hidden`}>
                          <div className="flex justify-between items-center z-10">
                            <span className="text-[12px] font-[900] tracking-wider text-cyan-300">firevy.co</span>
                            <span className="text-[10px] font-[800] bg-white/10 backdrop-blur-xs text-cyan-100 px-2.5 py-0.5 rounded-full border border-white/20">INSIGHT</span>
                          </div>

                          <div className="relative z-10">
                            <h4 className="text-[15px] font-[800] text-white line-clamp-2 leading-tight">
                              {post.title}
                            </h4>
                          </div>

                          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl" />
                        </div>

                        {/* Text Content */}
                        <div className="p-6 space-y-3">
                          <div className="text-[12px] font-sans">
                            <span className="font-[700] text-slate-700">{post.author}</span>
                            <span className="text-slate-400 mx-1.5">in</span>
                            <span className="text-[#0099CC] font-[800]">{post.category}</span>
                          </div>

                          <div className="text-[11.5px] font-[400] text-slate-500 font-sans">
                            {post.date} · {post.readTime}
                          </div>

                          <h3 className="text-[17px] font-[800] text-slate-900 leading-snug font-sans group-hover:text-[#0099CC] transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-[13.5px] font-[400] text-slate-600 leading-relaxed font-sans line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Card Bottom Link */}
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                        <span className="inline-flex items-center space-x-1.5 text-[#0099CC] font-[700] text-[13.5px] group-hover:underline">
                          <span>Read the full blog</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls (Exact Reference Screenshot 4 Match) */}
                <div className="pt-8 flex items-center justify-start space-x-2 font-sans">
                  <button
                    type="button"
                    onClick={() => setBlogPage(1)}
                    className={`w-9 h-9 rounded-[6px] text-[14px] font-[700] transition-colors ${blogPage === 1 ? 'bg-[#0099CC] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlogPage(2)}
                    className={`w-9 h-9 rounded-[6px] text-[14px] font-[700] transition-colors ${blogPage === 2 ? 'bg-[#0099CC] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlogPage(3)}
                    className={`w-9 h-9 rounded-[6px] text-[14px] font-[700] transition-colors ${blogPage === 3 ? 'bg-[#0099CC] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    3
                  </button>
                  <span className="text-slate-400 px-1 text-sm">...</span>
                  <button
                    type="button"
                    onClick={() => setBlogPage(101)}
                    className="w-11 h-9 rounded-[6px] bg-slate-100 text-slate-700 font-[700] text-[14px] hover:bg-slate-200 transition-colors"
                  >
                    101
                  </button>
                  <button
                    type="button"
                    className="w-9 h-9 rounded-[6px] bg-slate-100 text-slate-700 font-[700] text-[14px] hover:bg-slate-200 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Right Sticky Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-8 sticky top-28">

                {/* 1. "Get in Touch" Contact Box (Exact Reference Screenshots 1 - 4 Match) */}
                <div className="bg-[#EAF6FA] border border-[#C5E7F4] rounded-[20px] p-6 sm:p-7 shadow-sm text-left font-sans">
                  <h3 className="text-[22px] font-[800] text-slate-900 text-center mb-5 font-sans">
                    Get in Touch
                  </h3>

                  {contactSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-[12px] text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <h4 className="font-[800] text-[15px]">Message Sent!</h4>
                      <p className="text-[13px]">Thank you for reaching out. Our experts will contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setContactSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-[13px] font-[700] text-slate-800 mb-1">Name:</label>
                        <input
                          type="text"
                          required
                          placeholder="Enter Your Name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[6px] px-3.5 py-2.5 text-[13.5px] text-slate-800 outline-none focus:border-[#0099CC] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-[700] text-slate-800 mb-1">Email:</label>
                        <input
                          type="email"
                          required
                          placeholder="Enter Your Email Id"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[6px] px-3.5 py-2.5 text-[13.5px] text-slate-800 outline-none focus:border-[#0099CC] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-[700] text-slate-800 mb-1">Mobile Number:</label>
                        <div className="flex space-x-2">
                          <select className="bg-white border border-slate-200 rounded-[6px] px-2 py-2.5 text-[13px] text-slate-700 outline-none">
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                          </select>
                          <input
                            type="tel"
                            required
                            placeholder="081234 56789"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="flex-1 bg-white border border-slate-200 rounded-[6px] px-3.5 py-2.5 text-[13.5px] text-slate-800 outline-none focus:border-[#0099CC] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-[700] text-slate-800 mb-1">Message:</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Enter The Message"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[6px] px-3.5 py-2.5 text-[13.5px] text-slate-800 outline-none focus:border-[#0099CC] transition-all resize-none"
                        />
                      </div>

                      {/* Security Verification Box */}
                      <div className="bg-white p-3 rounded-[8px] border border-slate-200 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span className="font-[600] text-emerald-700">Success!</span>
                        </div>
                        <span className="text-[10px] text-slate-400">CLOUDFLARE Privacy</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-[6px] bg-[#0099CC] hover:bg-[#0088BB] text-white font-[800] text-[15px] shadow-md transition-colors cursor-pointer"
                      >
                        Talk to expert
                      </button>
                    </form>
                  )}
                </div>

                {/* 2. "Top Category" List Box (Exact Reference Screenshots 1 - 4 Match) */}
                <div className="bg-white border border-slate-200/90 rounded-[20px] p-6 shadow-xs text-left font-sans">
                  <h3 className="text-[20px] font-[800] text-slate-900 mb-5 font-sans">
                    Top Category
                  </h3>

                  <div className="space-y-3">
                    {topCategories.map((cat, idx) => {
                      const CatIcon = cat.icon;
                      const isSelected = selectedBlogCategory === cat.name;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedBlogCategory(isSelected ? 'All' : cat.name)}
                          className={`flex items-center justify-between p-3.5 rounded-[12px] border transition-all cursor-pointer ${isSelected
                              ? 'bg-[#0099CC]/10 border-[#0099CC] text-[#0099CC]'
                              : 'bg-slate-50/70 border-slate-100 hover:bg-slate-100 text-slate-800'
                            }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center ${isSelected ? 'bg-[#0099CC] text-white' : 'bg-white text-[#0099CC] shadow-xs'}`}>
                              <CatIcon className="w-4 h-4" />
                            </div>
                            <span className="text-[13.5px] font-[700] font-sans">{cat.name}</span>
                          </div>
                          <span className="text-[12px] font-[600] text-slate-500 font-sans">{cat.count} Blogs</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Global Newsletter Section */}
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
              <h1 className="text-[34px] font-[800] text-white tracking-tight leading-tight page-hero-title">
                {pageData.title}
              </h1>
              <p className="text-[15px] text-blue-100 leading-relaxed font-[400] max-w-2xl page-hero-desc">
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
                  <h3 className="text-[40px] font-[800] text-slate-900 section-content-title">{block.heading}</h3>
                  <p className="text-[15px] font-[400] text-slate-600 leading-relaxed section-content-desc">{block.text}</p>
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
