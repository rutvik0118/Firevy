import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import VideoTestimonialsStory from '../components/home/VideoTestimonialsStory';
import PremiumServicesGrid from '../components/home/PremiumServicesGrid';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import AboutKeyMetrics from '../components/home/AboutKeyMetrics';
import SuccessMatrixGrid from '../components/home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../components/home/InnovativeSolutionVideo';
import BrandLogoGrid from '../components/home/BrandLogoGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Clock, 
  Activity, 
  FileText, 
  Users, 
  Pill
} from 'lucide-react';
import BRAND from '../constants/brand';

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(15);
  const scrollContainerRef = useRef(null);

  const industryFilters = {
    row1: [
      'All',
      'Information Technology',
      'Utility Services',
      'Personal Care & Cosmetic',
      'Food and Beverage',
      'Sports',
      'Ecommerce',
      'Education',
      'Media',
      'Social Networking',
      'Marketplace',
      'Retail',
      'Others'
    ],
    row2: [
      'Human Resources',
      'Healthcare',
      'Real Estate',
      'Logistics',
      'Finance',
      'Legal Services',
      'Gaming',
      'Entertainment',
      'Travel and Tourism',
      'Automotive Technology',
      'Home Service',
      'Agriculture'
    ]
  };

  const technologyFilters = {
    row1: [
      'All',
      'Power Automate',
      'PHP',
      'MySQL',
      'React Native',
      'AI/ML',
      'React JS',
      'Flutter',
      'MSSQL',
      'Power BI',
      'iOS',
      'Oracle',
      'Swift',
      'Python',
      'Magento',
      'Angular',
      'Native'
    ],
    row2: [
      'SharePoint',
      'Power Apps',
      'Wordpress',
      'Laravel',
      'Java',
      'Node.js',
      'MongoDB',
      '.Net Core',
      'Firebase',
      'Android',
      'PostgreSQL',
      '.Net Angular',
      'HTML',
      '.Net MVC',
      'Blockchain',
      'Shopify',
      'Microsoft .NET core'
    ]
  };

  const currentFilters = activeTab === 'Industry' ? industryFilters : technologyFilters;

  const scrollPills = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const portfolioProjects = [
    {
      id: 1,
      title: "Terraform Timesheet Application",
      description: "Increase efficiency with our simple timesheets application that offers powerful reporting and automated workflow management.",
      category: "Information Technology",
      bgGradient: "from-emerald-400 to-teal-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-lg">
            <div className="flex items-center justify-between border-b border-white/20 pb-2 mb-2">
              <span className="font-bold text-xs tracking-wide uppercase">Timesheet Application</span>
              <span className="text-[10px] bg-emerald-700/60 px-2 py-0.5 rounded">v2.4 Active</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-semibold">
              <div className="bg-teal-700/70 p-2 rounded flex flex-col items-center">
                <Clock className="w-3.5 h-3.5 mb-1 text-cyan-200" />
                <span>Initiate Timesheet</span>
              </div>
              <div className="bg-teal-700/70 p-2 rounded flex flex-col items-center">
                <FileText className="w-3.5 h-3.5 mb-1 text-cyan-200" />
                <span>Timesheet Entry</span>
              </div>
              <div className="bg-teal-700/70 p-2 rounded flex flex-col items-center">
                <Activity className="w-3.5 h-3.5 mb-1 text-cyan-200" />
                <span>Pending Timesheet</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center font-semibold">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/20">Verify Timesheet</div>
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/20">Consolidate</div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Job Portal Website Development",
      description: "In the recent past, job portal website development companies have evolved due to high recruitment demand.",
      category: "Human Resources",
      bgGradient: "from-sky-400 to-blue-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
            <h4 className="font-extrabold text-sm mb-1 leading-tight">Want To Get Hired? We Got Opportunities.</h4>
            <p className="text-[10px] text-sky-100">Find top enterprise jobs worldwide.</p>
            <div className="mt-3 inline-block px-3 py-1 bg-white text-blue-700 font-bold text-[10px] rounded-full shadow">
              Get Started →
            </div>
          </div>
          <div className="flex justify-between items-center bg-blue-900/40 p-2 rounded-lg backdrop-blur-sm text-[10px]">
            <div><span className="font-bold text-cyan-200">25K+</span> Hirings</div>
            <div><span className="font-bold text-cyan-200">98%</span> Success</div>
            <div><span className="font-bold text-cyan-200">75K+</span> Reviews</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Career Counseling Portal",
      description: "Although Career Counselling has always been crucial, it has only recently received widespread adoption across institutions.",
      category: "Human Resources",
      bgGradient: "from-amber-400 to-orange-500",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-100">Mentorship</span>
            <h4 className="font-extrabold text-sm leading-tight mt-1">We explore ability and employment solutions</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-slate-900 font-bold">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="text-xs text-orange-600">185+</div>
              <div className="text-[8px] text-slate-500 uppercase">Coaches</div>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="text-xs text-orange-600">85%</div>
              <div className="text-[8px] text-slate-500 uppercase">Growth</div>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="text-xs text-orange-600">85M</div>
              <div className="text-[8px] text-slate-500 uppercase">Impact</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Performance Appraisal System",
      description: "The Performance Appraisal System Website Development replaces workers' strategic evaluation with automated insights.",
      category: "Information Technology",
      bgGradient: "from-blue-600 to-indigo-800",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold tracking-wider">Humanridge HRMS</span>
              <span className="text-[9px] bg-cyan-400 text-slate-900 px-1.5 py-0.5 font-bold rounded">Dashboard</span>
            </div>
            <div className="h-16 flex items-end space-x-2 pt-2 border-b border-white/10 pb-2">
              <div className="bg-cyan-300 w-1/5 h-[40%] rounded-t"></div>
              <div className="bg-cyan-300 w-1/5 h-[85%] rounded-t"></div>
              <div className="bg-cyan-300 w-1/5 h-[65%] rounded-t"></div>
              <div className="bg-cyan-300 w-1/5 h-[100%] rounded-t"></div>
              <div className="bg-cyan-300 w-1/5 h-[75%] rounded-t"></div>
            </div>
          </div>
          <div className="text-[10px] text-blue-100 flex justify-between px-1">
            <span>Average Score: 94.2%</span>
            <span className="text-cyan-300">★ High Performer</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Job Finder App Development",
      description: "If you would like to design your own job search mobile application at a reasonable cost, look no further.",
      category: "Human Resources",
      bgGradient: "from-indigo-300 to-purple-400",
      renderMockup: () => (
        <div className="w-full h-full p-3 flex items-center justify-center space-x-3 text-slate-800 font-sans">
          <div className="w-24 bg-white rounded-xl shadow-lg border border-indigo-100 p-2 text-[9px] space-y-1">
            <div className="bg-indigo-600 text-white p-1.5 rounded font-bold text-center">Nearby Jobs</div>
            <div className="p-1 bg-slate-50 rounded">Developer</div>
            <div className="p-1 bg-slate-50 rounded">Healthcare</div>
            <div className="p-1 bg-slate-50 rounded">Marketing</div>
          </div>
          <div className="w-24 bg-white rounded-xl shadow-lg border border-indigo-100 p-2 text-[9px] space-y-1">
            <div className="bg-purple-600 text-white p-1 rounded font-bold text-center">Apply Now</div>
            <div className="h-6 bg-purple-50 rounded p-1 text-[8px] text-purple-700 font-semibold">Senior Frontend</div>
            <div className="h-6 bg-purple-50 rounded p-1 text-[8px] text-purple-700 font-semibold">UI UX Lead</div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Data And Analytics Website",
      description: "Our data analytics website design Company has expertise in building and optimizing scalable analytical tools.",
      category: "Information Technology",
      bgGradient: "from-slate-900 via-indigo-950 to-slate-900",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="border border-indigo-500/30 bg-indigo-950/60 rounded-xl p-3 backdrop-blur-md">
            <h4 className="text-xs font-bold text-cyan-300 mb-1">We can make your big data project a big success</h4>
            <p className="text-[10px] text-slate-300">Real-time metrics, automated ETL pipelines & AI telemetry.</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
            <div className="p-2 bg-indigo-900/50 rounded border border-indigo-400/20">
              <div className="text-cyan-400 font-bold text-xs">99.99%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
            <div className="p-2 bg-indigo-900/50 rounded border border-indigo-400/20">
              <div className="text-cyan-400 font-bold text-xs">10M+</div>
              <div className="text-slate-400">Events/sec</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Hrms App Development Services",
      description: "The Human Resource Management App, often known as HRMS, makes it possible for teams to stay connected seamlessly.",
      category: "Human Resources",
      bgGradient: "from-cyan-200 to-blue-300",
      renderMockup: () => (
        <div className="w-full h-full p-3 flex items-center justify-center space-x-3 text-slate-800 font-sans">
          <div className="w-28 bg-white rounded-2xl shadow-md p-2.5 text-[9px] space-y-1.5 border border-sky-100">
            <div className="flex items-center space-x-1.5 text-blue-600 font-extrabold text-xs">
              <Users className="w-3.5 h-3.5" />
              <span>HR PORT</span>
            </div>
            <div className="bg-sky-50 p-1.5 rounded flex justify-between text-slate-600 font-semibold">
              <span>Tasks</span>
              <span className="text-blue-600">06</span>
            </div>
            <div className="bg-sky-50 p-1.5 rounded flex justify-between text-slate-600 font-semibold">
              <span>Leave</span>
              <span className="text-blue-600">15</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Team Collaboration App",
      description: "Every small business proprietor has a common objective: to expand their team efficiency and daily operational output.",
      category: "Information Technology",
      bgGradient: "from-slate-300 to-slate-500",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-slate-900 font-sans">
          <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              <span>WORK LINK</span>
              <span className="text-[9px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">Team Workspace</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[9px] font-semibold text-center text-slate-700">
              <div className="bg-slate-100 p-1.5 rounded">Sales Dept</div>
              <div className="bg-slate-100 p-1.5 rounded">Managers</div>
              <div className="bg-slate-100 p-1.5 rounded">Marketing</div>
              <div className="bg-slate-100 p-1.5 rounded">Engineering</div>
            </div>
          </div>
          <div className="text-[10px] text-slate-700 text-center font-bold">
            100% Sync Across All Desktop & Mobile Clients
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Sharepoint Migration",
      description: "It's time to modernize your business to achieve your wider cloud goals. We provide seamless cloud migration services.",
      category: "Utility Services",
      bgGradient: "from-cyan-500 to-blue-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 text-center">
            <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center text-blue-600 font-black text-sm mb-1 shadow">
              S
            </div>
            <h4 className="font-extrabold text-sm">SharePoint</h4>
            <p className="text-[10px] text-cyan-100 font-semibold tracking-wider uppercase mt-1">Enterprise Cloud Migrations</p>
          </div>
          <div className="bg-blue-950/40 backdrop-blur-sm p-2 rounded-lg text-center text-[10px] font-bold text-cyan-200">
            Zero Downtime Data Transfer Guaranteed
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Sharepoint Powerplatform",
      description: "We help you quickly build data-driven solutions with the Microsoft Power Platform suite for maximum automation.",
      category: "Utility Services",
      bgGradient: "from-indigo-400 to-blue-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
            <div className="text-xs font-bold mb-2 text-indigo-100">PowerApps Data Grid</div>
            <div className="space-y-1">
              <div className="h-3 bg-emerald-400/80 rounded w-full"></div>
              <div className="h-3 bg-amber-400/80 rounded w-4/5"></div>
              <div className="h-3 bg-blue-400/80 rounded w-11/12"></div>
            </div>
          </div>
          <div className="text-[10px] font-semibold text-indigo-100 text-center">
            Low-code Workflow Automation Solutions
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Fitness App Development",
      description: "Sapphire Software Solutions is a fitness app development company that provides cutting-edge wearable integrations.",
      category: "Personal Care & Cosmetic",
      bgGradient: "from-violet-400 to-purple-600",
      renderMockup: () => (
        <div className="w-full h-full p-3 flex items-center justify-center space-x-3 text-slate-900 font-sans">
          <div className="w-24 bg-white rounded-xl shadow-md p-2 text-[9px] space-y-1 border border-purple-100">
            <div className="font-bold text-purple-700 text-center">FitPulse AI</div>
            <div className="p-1 bg-purple-50 rounded text-center text-purple-900 font-bold">780 kcal</div>
            <div className="p-1 bg-purple-50 rounded text-center text-purple-900 font-bold">12,450 steps</div>
          </div>
          <div className="w-24 bg-white rounded-xl shadow-md p-2 text-[9px] space-y-1 border border-purple-100">
            <div className="font-bold text-purple-700 text-center">Heart Rate</div>
            <div className="p-1 bg-rose-50 rounded text-center text-rose-600 font-bold">72 BPM</div>
            <div className="p-1 bg-emerald-50 rounded text-center text-emerald-600 font-bold">8h Sleep</div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "COVID Tracking App",
      description: "The Covid tracker software that we provide is cutting-edge, and it comes with several safety features & real-time telemetry.",
      category: "Healthcare",
      bgGradient: "from-cyan-400 to-teal-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold">Health Tracker</span>
              <span className="text-[9px] bg-emerald-400 text-slate-900 font-bold px-1.5 rounded">Verified</span>
            </div>
            <p className="text-[10px] text-cyan-100">Real-time symptom logging & diagnostic dashboard.</p>
          </div>
          <div className="flex justify-around text-center text-[10px] font-bold bg-teal-900/40 p-2 rounded-lg backdrop-blur-sm">
            <div>QR Scanner</div>
            <div>Health Passport</div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Health Mobile App Development",
      description: "We are a leading healthcare app development company that offers customized digital health applications for clinics.",
      category: "Healthcare",
      bgGradient: "from-teal-400 to-emerald-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white text-teal-600 font-extrabold rounded-lg flex items-center justify-center text-base shadow">
              H
            </div>
            <div>
              <h4 className="font-extrabold text-xs">LafargeHolcim</h4>
              <span className="text-[9px] text-teal-100 font-medium">OPD Healthcare Portal</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center font-bold">
            <div className="bg-white text-teal-800 p-2 rounded-lg shadow-sm">Doctor Consultation</div>
            <div className="bg-white text-teal-800 p-2 rounded-lg shadow-sm">E-Prescription</div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "Adani Health And Safety-App",
      description: "We build health and safety apps to help employees report hazards, file health audits & maintain safe workplace environments.",
      category: "Healthcare",
      bgGradient: "from-pink-400 to-rose-600",
      renderMockup: () => (
        <div className="w-full h-full p-4 flex flex-col justify-between text-white font-sans">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
            <div className="text-xs font-black tracking-wider uppercase text-pink-100">Adani Emcare</div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] text-center font-bold">
              <div className="bg-white/30 p-1.5 rounded">BP: 120/80</div>
              <div className="bg-white/30 p-1.5 rounded">Sugar: 100</div>
            </div>
          </div>
          <div className="bg-rose-950/40 p-2 rounded-lg text-[10px] text-center font-bold text-pink-100">
            Industrial Workplace Hazard Reporting
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "Medicine Delivery App",
      description: "As a medicine app development company, we help businesses take their pharmacy services online with instant ordering.",
      category: "Ecommerce",
      bgGradient: "from-emerald-500 to-teal-700",
      renderMockup: () => (
        <div className="w-full h-full p-3 flex items-center justify-center space-x-3 text-slate-800 font-sans">
          <div className="w-24 bg-white rounded-xl shadow-md p-2 text-[9px] space-y-1 border border-emerald-100">
            <div className="font-bold text-emerald-700 text-center flex items-center justify-center space-x-1">
              <Pill className="w-3 h-3 text-emerald-600" />
              <span>Pharma Cart</span>
            </div>
            <div className="p-1 bg-emerald-50 rounded flex justify-between font-bold text-[8px]">
              <span>Multivitamins</span>
              <span className="text-emerald-700">$15</span>
            </div>
            <div className="p-1 bg-emerald-50 rounded flex justify-between font-bold text-[8px]">
              <span>Probiotics</span>
              <span className="text-emerald-700">$25</span>
            </div>
          </div>
          <div className="w-24 bg-white rounded-xl shadow-md p-2 text-[9px] flex flex-col justify-between border border-emerald-100">
            <div className="font-bold text-emerald-700 text-center">Express Delivery</div>
            <div className="bg-emerald-600 text-white p-1.5 rounded font-bold text-center text-[8px]">Checkout →</div>
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = portfolioProjects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans relative">
      <SEO
        title={`Portfolio & Case Studies | ${BRAND.name}`}
        description="As a top-notch software development company, explore our diverse portfolio of custom web, mobile, cloud, and AI solutions."
        canonical="/portfolio"
      />

      {/* 1. Hero Section (Light Theme matching Screenshot 1) */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl font-[800] text-slate-900 tracking-tight leading-tight">
                Portfolio
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                As a top-notch software development company, we have served thousands of customers in past few years and helped them increase their profitability. Take a look at our diverse portfolio of services to get an idea of why we do what we do. Feel free to reach out to us in case of queries!
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#0B658A] text-white font-semibold text-sm hover:bg-[#084E6B] transition-all shadow-md group"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Column: Sleek Laptop & Mobile Mockup with Leaves */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-60"></div>
              
              <div className="relative w-full max-w-lg p-6 bg-white rounded-3xl shadow-xl border border-slate-200/80 flex items-center justify-center space-x-4">
                <div className="w-2/3 bg-slate-900 rounded-xl p-2 shadow-2xl border border-slate-700">
                  <div className="bg-slate-800 rounded-lg p-3 text-white space-y-2">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                      <div className="flex space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">analytics-dashboard</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[9px]">
                      <div className="bg-indigo-600/40 p-2 rounded border border-indigo-500/30">
                        <div className="text-cyan-300 font-bold">350+ Projects</div>
                        <div className="text-slate-300">Active Delivery</div>
                      </div>
                      <div className="bg-emerald-600/40 p-2 rounded border border-emerald-500/30">
                        <div className="text-emerald-300 font-bold">100% Quality</div>
                        <div className="text-slate-300">Verified Code</div>
                      </div>
                    </div>
                    <div className="h-12 bg-slate-900/80 rounded p-2 flex items-end space-x-1">
                      <div className="bg-cyan-400 w-1/4 h-[40%] rounded-t"></div>
                      <div className="bg-indigo-400 w-1/4 h-[80%] rounded-t"></div>
                      <div className="bg-emerald-400 w-1/4 h-[60%] rounded-t"></div>
                      <div className="bg-purple-400 w-1/4 h-[100%] rounded-t"></div>
                    </div>
                  </div>
                </div>

                <div className="w-1/3 bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-700 -ml-6 -mb-4 z-10">
                  <div className="bg-slate-800 rounded-xl p-2.5 text-white space-y-2 text-[9px]">
                    <div className="w-6 h-1 bg-slate-600 rounded-full mx-auto mb-1"></div>
                    <div className="bg-indigo-600 text-white p-1.5 rounded font-bold text-center">
                      Mobile App UI
                    </div>
                    <div className="space-y-1">
                      <div className="bg-slate-700 p-1 rounded text-slate-200 text-[8px]">★ 4.9 App Rating</div>
                      <div className="bg-slate-700 p-1 rounded text-slate-200 text-[8px]">⚡ High Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Content: Filterable Showcase Section */}
      <section className="py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-[800] text-slate-900 tracking-tight">
              Industry-focused Insights to elevate your business
            </h2>

            <div className="relative flex items-center justify-center space-x-8 pt-2">
              <button
                onClick={() => { setActiveTab('Industry'); setActiveFilter('All'); }}
                className={`text-xl font-bold transition-all relative pb-2 cursor-pointer ${
                  activeTab === 'Industry'
                    ? 'text-[#0B658A]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Industry
              </button>
              <button
                onClick={() => { setActiveTab('Technology'); setActiveFilter('All'); }}
                className={`text-xl font-bold transition-all relative pb-2 cursor-pointer ${
                  activeTab === 'Technology'
                    ? 'text-[#0B658A]'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Technology
              </button>
            </div>
          </div>

          {/* 2-Row Filter Pills Container Box matching User Screenshot */}
          <div className="relative max-w-6xl mx-auto flex items-center justify-center space-x-3 mb-14">
            {/* Left Chevron Button */}
            <button
              onClick={() => scrollPills('left')}
              className="p-2 text-slate-800 hover:text-[#0B658A] transition-all shrink-0 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8 stroke-[2.5]" />
            </button>

            {/* Pill Container Box with Active Tab Triangle Caret Notch */}
            <div className="relative flex-1 max-w-5xl bg-[#F0F5F9] rounded-2xl p-4 border border-slate-200/80 shadow-xs overflow-hidden">
              {/* Caret Triangle Notch pointing up to active tab */}
              <div
                className={`absolute -top-1.5 transition-all duration-300 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#F0F5F9] ${
                  activeTab === 'Industry' ? 'left-[46%]' : 'left-[54%]'
                }`}
              />

              {/* 2 Horizontal Rows Scroll Container */}
              <div
                ref={scrollContainerRef}
                className="flex flex-col space-y-2.5 overflow-x-auto scrollbar-none py-1 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Row 1 */}
                <div className="flex items-center space-x-2.5 shrink-0">
                  {currentFilters.row1.map((filterName, index) => {
                    const isActive = activeFilter === filterName;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveFilter(filterName)}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-[5px] text-[12.5px] font-semibold transition-all shrink-0 cursor-pointer ${
                          isActive
                            ? 'bg-[#0B658A] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:text-[#0B658A] shadow-2xs border border-slate-100'
                        }`}
                      >
                        {filterName}
                      </button>
                    );
                  })}
                </div>

                {/* Row 2 */}
                <div className="flex items-center space-x-2.5 shrink-0">
                  {currentFilters.row2.map((filterName, index) => {
                    const isActive = activeFilter === filterName;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveFilter(filterName)}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-[5px] text-[12.5px] font-semibold transition-all shrink-0 cursor-pointer ${
                          isActive
                            ? 'bg-[#0B658A] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:text-[#0B658A] shadow-2xs border border-slate-100'
                        }`}
                      >
                        {filterName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Chevron Button */}
            <button
              onClick={() => scrollPills('right')}
              className="p-2 text-slate-800 hover:text-[#0B658A] transition-all shrink-0 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-8 h-8 stroke-[2.5]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className={`h-64 bg-gradient-to-br ${project.bgGradient} p-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                  {project.renderMockup()}
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div className="space-y-3">
                    <h3 className="text-lg font-[700] text-slate-900 group-hover:text-[#0B658A] transition-colors leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredProjects.length && (
            <div className="mt-14 text-center">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="px-8 py-3.5 rounded-lg bg-[#0B658A] text-white font-bold text-sm hover:bg-[#084E6B] transition-all shadow-md"
              >
                Load More Portfolio
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* 3. Our Story, Their Words (Video Testimonial Slider matching Screenshot 1) */}
      <VideoTestimonialsStory />

      {/* 4. Our Premium Services (Tech Services Grid matching Screenshot 2) */}
      <PremiumServicesGrid />

      {/* 5. Process We Follow (01, 02, 03, 04 Workflow Cards matching Screenshot 2) */}
      <WorkProcessGrid />

      {/* 6. About Us (8 Key Metrics Cards matching Screenshot 3) */}
      <AboutKeyMetrics />

      {/* 7. Success Matrix (Product Lifecycle Services Grid matching Screenshot 3) */}
      <SuccessMatrixGrid />

      {/* 8. Unveiling Our Innovative Solution (Video Showcase Slider matching Screenshot 4) */}
      <InnovativeSolutionVideo />

      {/* 9. Trusted By The World's Leading Brands (Logos Grid matching Screenshot 4) */}
      <BrandLogoGrid />

      {/* 10. What Our Clients Say (Clutch 5.0 Rating Reviews Slider matching Screenshot 5) */}
      <ClientReviewsDarkSection />

      {/* 11. We Have Been Featured In (Media Press Logos Grid matching Screenshot 5) */}
      <FeaturedInLogosGrid />

      {/* 12. Convert Ideas Into Reality Banner & Subscribe Newsletter Section (Matching Reference Screenshot) */}
      <WorkTogetherNewsletterSection
        title="Let's Convert Your Ideas Into Reality"
        subtitle="We have stood the test of time, and built some of the finest solutions for hundreds of clients around the world."
        buttonText="Request A Free Quote"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Portfolio;
