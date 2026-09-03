import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import EducationQuoteOverview from '../common/EducationQuoteOverview';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import WhyChooseEducationShowcase from '../common/WhyChooseEducationShowcase';
import {
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Star,
  Headphones,
  Check,
  Brain,
  FileText,
  Clock,
  BookMarked,
  Gamepad2,
  Laptop,
  Flame,
  Layers,
  Search,
  MessageSquare
} from 'lucide-react';

export const EducationAppDevelopmentService = () => {
  const [activeTechTab, setActiveTechTab] = useState('backend');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'eLearning Platform / LMS',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Sapphire Solutions - Education Expertise Cards (Exact 1:1 Reference Match)
  const expertiseList = [
    {
      title: 'Interactive EBooks',
      iconColor: 'bg-[#F3E8FF] text-purple-600',
      isFirst: true,
      desc: 'In the eBooks app, you may see many instructive videos and photos, read motivational tales or themes, and explore their area of interest by taking quizzes or playing mental games.'
    },
    {
      title: 'Puzzle-Solving Apps',
      iconColor: 'bg-[#DCFCE7] text-emerald-600',
      isFirst: false,
      desc: 'Users may download and play games on their smartphones to enhance their memory, grammar, and vocabulary skills, among other vital abilities.'
    },
    {
      title: 'Worksheet Apps',
      iconColor: 'bg-[#FFEDD5] text-orange-500',
      isFirst: false,
      desc: 'Worksheet applications designed specifically for children on the brink of adulthood allow students to practice formulae, macros, etc., in the comfort of their homes.'
    },
    {
      title: 'Classroom Apps',
      iconColor: 'bg-[#FEF9C3] text-amber-600',
      isFirst: false,
      desc: 'Classroom applications are designed for all students, who may use them throughout the class to acquire new knowledge.'
    },
    {
      title: 'Skill Boosting Applications',
      iconColor: 'bg-[#FCE7F3] text-pink-600',
      isFirst: false,
      desc: 'Powered by AR/VR and IoT, our skill enhancement applications are focused on increasing learner\'s abilities via gamification.'
    },
    {
      title: 'Educational Application',
      iconColor: 'bg-[#E0F2FE] text-cyan-600',
      isFirst: false,
      desc: 'Our tuition app development services are intended to make education accessible in real-time and regardless of location.'
    }
  ];

  // Advantages of Hiring Education App Developers
  const advantagesList = [
    {
      title: 'Enhanced Student Engagement',
      desc: 'Gamification, interactive quizzes, video modules, and push notifications keep students motivated and actively engaged in course materials.'
    },
    {
      title: 'Automated School Operations',
      desc: 'Automate student admissions, fee collection, attendance management, examination report generation, and parent-teacher communication.'
    },
    {
      title: 'Personalized Adaptive Learning',
      desc: 'AI-driven algorithms evaluate student strengths and weaknesses to deliver customized learning paths and targeted practice tests.'
    },
    {
      title: '24/7 Anywhere Access',
      desc: 'Students and teachers can access course materials, live class recordings, and homework assignments anytime from iOS, Android, or web.'
    },
    {
      title: 'High-Tech AR/VR & AI Resources',
      desc: 'Leverage cutting-edge AR/VR 3D visual models and AI speech recognition for language learning and interactive science labs.'
    },
    {
      title: 'Continuous Maintenance & Updates',
      desc: 'Regular app performance optimization, OS compatibility updates, new feature additions, and round-the-clock technical SLA support.'
    }
  ];

  // Real Enterprise Education Case Studies (Exact Sapphire Case Studies)
  const caseStudies = [
    {
      client: 'Vidyalaya EdTech Enterprise',
      title: 'Vidyalaya School Management Software & App',
      desc: 'Comprehensive K-12 school ERP and mobile application empowering over 1,500 schools with digital admissions, fee gateways, online exams, and student tracking.',
      stats: [
        'Over 1.5 Million active students served',
        '95% reduction in administrative paperwork',
        'Automated online fee collection & receipt generation',
        'Real-time parent notification portal'
      ],
      badge: 'School Management ERP'
    },
    {
      client: 'LingoPulse EdTech',
      title: 'AI-Powered Language Learning Application',
      desc: 'Interactive language learning mobile platform featuring LLM speech recognition, instant accent correction, and gamified vocabulary flashcards.',
      stats: [
        '500,000+ App downloads worldwide',
        '4.8/5 App Store user rating',
        'Real-time AI pronunciation feedback engine',
        'Multi-lingual interactive courses'
      ],
      badge: 'AI eLearning'
    },
    {
      client: 'EduMatch Global',
      title: 'On-Demand Tutor Finder & Booking App',
      desc: 'On-demand tutoring marketplace connecting students with verified subject matter experts for instant 1-on-1 virtual video sessions.',
      stats: [
        'Over 25,000 verified active tutors',
        'Integrated WebRTC HD video & digital whiteboard',
        'Sub-60 second tutor matching algorithm',
        'Instant secure in-app payments'
      ],
      badge: 'Tutor Marketplace'
    }
  ];

  // Hiring Models (Sapphire Signature 4 Models)
  const hiringModels = [
    {
      title: 'Fixed Price',
      tagline: 'Ideal for well-defined scope & predictable budget',
      features: [
        'Optimal flexibility & milestone delivery',
        'Dedicated Agile squad',
        'Small to medium scope projects',
        'Complete control over budget & timeline'
      ]
    },
    {
      title: 'Time & Material',
      tagline: 'For dynamic projects requiring flexible ongoing work',
      features: [
        'No hidden costs – pay per hour worked',
        'Pay-as-you-go hourly rolling contract',
        'Monthly transparent billing',
        'Pay only for measurable delivered work'
      ]
    },
    {
      title: 'Dedicated Team',
      tagline: 'Full-time senior engineers focused solely on your app',
      features: [
        'Direct resource control & daily standups',
        '160 hours of assured monthly work per dev',
        'Agile sprint management via Slack/Jira',
        'Seamless long-term scaling capability'
      ]
    },
    {
      title: 'Buckets Approach',
      tagline: 'Flexible bucket of hours used as needed for updates',
      features: [
        'Direct resource monitoring',
        'Reduced risk & lower entry budget',
        'Use hours for maintenance, features or QA',
        'Pay only for used engineering hours'
      ]
    }
  ];

  // Technology Stack Categories with Detailed Descriptions
  const techCategories = {
    backend: [
      { name: '.NET', desc: 'Enterprise-grade backend framework building secure school ERPs, student gradebooks, and high-volume administrative microservices.' },
      { name: 'Node.js', desc: 'High-concurrency asynchronous runtime powering real-time live video classrooms, instant messaging, and interactive web sockets.' },
      { name: 'Java', desc: 'Robust enterprise backend technology with multithreading capabilities for processing high-volume automated online examination scoring.' },
      { name: 'Python', desc: 'Powering AI tutor bots, Natural Language Processing (NLP) speech recognition, automated essay grading, and student analytics.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP prototyping framework with clean MVC architecture for e-learning platforms and online course portals.' },
      { name: 'PHP', desc: 'Reliable server-side framework for educational Content Management Systems (CMS), student admission portals, and scheduling engines.' }
    ],
    frontend: [
      { name: 'React.js', desc: 'High-performance component-driven web UI library for interactive student dashboards, live whiteboards, and tutor portals.' },
      { name: 'Next.js', desc: 'Fullstack React framework with SSR and ISR, delivering sub-second page loads and SEO optimization for educational course catalogs.' },
      { name: 'TypeScript', desc: 'Static typing layer preventing runtime errors in complex grading algorithms, exam timer logic, and student progress data.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app development enabling offline study materials storage and smooth PDF textbook rendering.' },
      { name: 'RxJava', desc: 'Reactive programming library for smooth async data stream handling in mobile educational applications.' },
      { name: 'RxKotlin', desc: 'Functional reactive extensions for Kotlin, enabling responsive mobile UI states during live virtual class sessions.' },
      { name: 'Vue.js', desc: 'Lightweight progressive frontend framework for intuitive school administration and parent notification dashboards.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'ACID-compliant relational database ideal for structured student transcripts, fee ledgers, and institutional records.' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document database storing unstructured course syllabus content, quiz questions, and video metadata.' },
      { name: 'SQLite', desc: 'Lightweight embedded local database for offline study mode, allowing students to access textbooks without internet.' },
      { name: 'CoreData', desc: 'Apple iOS framework for persistent local storage of assignment files and quiz progress on iPads and iPhones.' },
      { name: 'Realm', desc: 'Ultra-fast mobile database providing real-time data sync across mobile devices during live gamified quizzes.' },
      { name: 'Firebase', desc: 'Real-time cloud database and push notification service for instant exam results, assignment alerts, and live class triggers.' }
    ],
    devops: [
      { name: 'CI/CD Pipelines', desc: 'Automated deployment pipelines ensuring zero-downtime releases and instant feature rollouts before academic terms.' },
      { name: 'GitHub Actions', desc: 'Continuous integration workflows conducting automated linting, security scanning, and unit test execution.' },
      { name: 'Docker', desc: 'Containerization technology providing identical dev-to-production environments and LMS microservice isolation.' },
      { name: 'Kubernetes', desc: 'Container orchestration platform auto-scaling cloud compute during peak online exam submission surges.' },
      { name: 'AWS EdTech', desc: 'High-availability AWS infrastructure (S3 video storage, CloudFront CDN streaming, RDS) with bank-grade security.' },
      { name: 'Azure Cloud', desc: 'Microsoft enterprise cloud with native Active Directory authentication and zero-trust university cloud security.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation framework verifying student workflows on real iOS & Android tablets and phones.' },
      { name: 'BrowserStack', desc: 'Physical device cloud matrix testing across 500+ mobile devices, browsers, and OS versions.' },
      { name: 'Katalon Studio', desc: 'End-to-end automated testing tool for web, mobile, and API security validation of online exam portals.' },
      { name: 'Cypress', desc: 'Modern frontend test framework simulating end-to-end student course enrollment and video playback.' },
      { name: 'Playwright', desc: 'Reliable cross-browser automation suite performing regression testing on school ERP admin portals.' },
      { name: 'Jest', desc: 'Fast JavaScript unit testing framework ensuring high code coverage across core grading and GPA calculation logic.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking project backlogs, developer tasks, and EdTech feature tickets.' },
      { name: 'Slack', desc: 'Instant team collaboration channel connecting clients, project managers, and senior developers in real time.' },
      { name: 'Microsoft Teams', desc: 'Enterprise video conferencing and document collaboration platform for weekly client sprint demos.' },
      { name: 'Trello', desc: 'Visual Kanban board system for intuitive milestone tracking and UI/UX design asset handoffs.' }
    ]
  };

  // 8-Step Development Lifecycle
  const developmentLifecycle = [
    { step: '01', title: 'Requirement Gathering', desc: 'Focus on documentation first for clarity and alignment between both client and engineering teams.' },
    { step: '02', title: 'Designs, Wireframes & Mockups', desc: 'Craft interactive, user-friendly UI designs and wireframe flows for intuitive student & teacher navigation.' },
    { step: '03', title: 'Prototype Demo', desc: 'Build an interactive demo prototype so clients can experience the look and feel of the platform before coding.' },
    { step: '04', title: 'Changes & Scope Confirmation', desc: 'Review client feedback, refine requirements, and freeze final technical scope for sprint development.' },
    { step: '05', title: 'Agile Development', desc: 'Execute bi-weekly sprints with clean code standards, microservices, and live video streaming integrations.' },
    { step: '06', title: 'QA & Load Stress Audit', desc: 'Execute end-to-end automated testing, load stress tests for concurrent users, and security vulnerability scans.' },
    { step: '07', title: 'Production Deployment', desc: 'Perform zero-downtime final deployment, UAT verification, and store publication to Google Play & App Store.' },
    { step: '08', title: 'Support, Maintenance & Growth', desc: 'Provide 24/7 technical maintenance, continuous SLA monitoring, and complimentary product growth advisory.' }
  ];

  // Why Choose Us Pillars
  const whyChooseUs = [
    { title: 'Flexible Engagement Models', desc: 'Customized engagement models facilitating hourly, fixed rate, or dedicated team hiring.' },
    { title: '100% Transparency', desc: 'Transparent communication policy ensuring client and dev team remain on the exact same page.' },
    { title: 'Experienced EdTech Developers', desc: 'Seasoned engineers with deep domain experience in LMS platforms, WebRTC live video, and AI tutors.' },
    { title: 'Timely Sprint Delivery', desc: 'Rigorous adherence to sprint timelines backed by continuous integration and automated deployments.' },
    { title: '24/7 Dedicated Technical Support', desc: 'Immediate resolution of technical queries with 24/7 SLA infrastructure support staff.' }
  ];

  // Official Sapphire Education FAQs
  const sapphireFaqs = [
    {
      q: '1. What characteristics should a mobile app for education possess?',
      a: 'Online live sessions, a responsive video player, a repository for session recordings, event calendars, online exams & automated results, interactive quizzes, and instant chat are the essential aspects of any modern learning and education app.'
    },
    {
      q: '2. How long does it take to design a mobile app for education?',
      a: 'The time required for education app development depends on the complexity of features, third-party integrations (video, payment gateways), and UI/UX requirements. Typical projects take 6 to 12 weeks. We offer agile 2-week sprint iterations for fast time-to-market.'
    },
    {
      q: '3. How much does an educational app cost to develop?',
      a: 'Developing an educational app depends on the tech stack, features (live video, AI tutor, offline mode), and engagement model. Project estimates range from $15,000 for specialized MVPs to $50,000+ for enterprise multi-institution LMS portals. Send us your project brief for an exact quote.'
    },
    {
      q: '4. Why should I choose your team for education app development?',
      a: 'We provide 24/7 technical support, deep EdTech domain expertise, 100% transparency, and flexible engagement models. Furthermore, our senior developers align with your timezone to eliminate communication delays.'
    },
    {
      q: '5. What types of education apps do you develop?',
      a: 'We build a comprehensive suite of EdTech apps including eLearning portals, Learning Management Systems (LMS), virtual classrooms, tutor finder marketplaces, school management ERPs, interactive eBook apps, and AI language apps.'
    },
    {
      q: '6. Do you provide custom Education App Development Services?',
      a: 'Yes, our services are 100% customizable to meet your specific requirements—whether you need an eLearning mobile app for students, a teaching tool for tutors, or an enterprise-level LMS for universities.'
    },
    {
      q: '7. How do Education Apps benefit schools and universities?',
      a: 'Educational apps improve student engagement through gamification, simplify administrative attendance and fee collection, enable remote teaching, track student progress in real time, and reduce operational overhead.'
    },
    {
      q: '8. Can startups hire dedicated developers for education app development?',
      a: 'Absolutely! We offer flexible hiring models (Fixed Price, Dedicated Team, Time & Material, Buckets Approach) allowing startups and EdTech companies to hire dedicated senior developers cost-effectively.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Education App Development Company | Custom EdTech & LMS Solutions"
        description="Top Education App Development Company. We build custom eLearning apps, virtual classrooms, Learning Management Systems (LMS), interactive eBooks, and tutor finder applications."
        canonical="/services/education-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Education App Development Services in USA"
        subtitle="As a best educational app development company, we deliver affordable education app development services. We are an experienced educational app development agency with a team of professional mobile app developers."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="education"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* White Label Custom Education App Development Services Quote Section (Exact 1:1 Reference Match) */}
      <EducationQuoteOverview />

      {/* Our Premium Services - 10 White Pill Cards Grid Section (Exact 1:1 Reference Match) */}
      <PremiumServicesGrid />

      {/* Success Stories - 3 Education Showcase Cards Section (Exact 1:1 Reference Match) */}
      <SuccessStoriesSection category="education" />

      {/* The Expertise Of Our Education App Developers (6 Cards 1:1 Reference Match) */}
      <section id="expertise-section" className="py-14 sm:py-16 bg-[#EEF5FB] border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
              The Expertise Of Our Education App Developers
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-normal leading-relaxed font-sans">
              Our comprehensive set of products makes us one of the world's top education app development firms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {expertiseList.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:bg-gradient-to-b hover:from-[#E0F2FE] hover:via-[#EAF7FF] hover:to-[#D4F1F7] hover:border-[#38BDF8] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer font-sans group"
              >
                <div className="space-y-3">
                  {/* Pastel Icon Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconColor} shadow-sm`}>
                    {idx === 0 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <path d="M9 7h6M9 11h6M9 15h4" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <path d="M9 6h6M9 10h6" />
                      </svg>
                    )}
                    {idx === 4 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                      </svg>
                    )}
                    {idx === 5 && (
                      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2" />
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-900 font-sans tracking-tight pt-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Button */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#quote-form"
              className="inline-block px-9 py-3.5 rounded-lg bg-[#005D95] hover:bg-[#004A75] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-sans"
            >
              Get A Free Quote For Your Project
            </a>
          </div>
        </Container>
      </section>

      {/* Why Choose Sapphire for? Education App Development Service (18 Circular Feature Orbit Ring 1:1 Match) */}
      <WhyChooseEducationShowcase />

      {/* Advantages of Hiring Education App Developers */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              KEY BENEFITS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Advantages of Hiring Our Education App Developers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Empower your institution with high-performance, user-friendly digital learning solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantagesList.map((adv, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#005F96]/40 hover:bg-white transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005F96] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured EdTech Case Studies */}
      <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              PROVEN SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Education Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Explore how we delivered large-scale EdTech solutions to schools, universities, and startups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#005F96] uppercase tracking-wider">{cs.client}</span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100">
                      {cs.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{cs.desc}</p>

                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">Key Metrics Achieved:</h4>
                    <ul className="space-y-2">
                      {cs.stats.map((stat, sIdx) => (
                        <li key={sIdx} className="flex items-center text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-xs font-extrabold text-[#005F96] hover:underline"
                  >
                    <span>View Detailed Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FLEXIBLE HIRING MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Education Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Select the hiring model that best suits your project scope, budget, and delivery timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringModels.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#005F96] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#005F96] text-white flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{model.title}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{model.tagline}</p>

                  <ul className="space-y-2 border-t border-slate-200/80 pt-4">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#005F96] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6">
                  <a
                    href="#quote-form"
                    className="w-full py-2.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white text-xs font-bold transition-colors inline-block text-center"
                  >
                    Hire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sapphire 6-Card Technology Stack Grid (Exact Screenshot Match) */}
      <SapphireTechStackGrid domainName="education" richTechCategories={techCategories} />

      {/* Process We Follow - Sapphire 8-Step Timeline */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* Success Matrix - Sapphire 12 Guarantees */}
      <SuccessMatrix />

      {/* Trusted By World's Leading Brands & Featured In Media */}
      <TrustedBrandsGrid />

      {/* Why Choose Us Pillars */}
      <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              THE SAPPHIRE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Us for Education App Development?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Being unique is our quality! We stand one level up with end-to-end support and deep EdTech expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Official Sapphire Education FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Education App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding app features, timelines, development cost, and custom LMS integrations.
            </p>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact & Free Proposal Form Section */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>LET'S START SOMETHING NEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Top Education App Developers
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a meeting with our EdTech specialists today to learn how we can transform your educational vision into a robust, scalable digital learning application.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Free Non-Disclosure Agreement (NDA)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Comprehensive Feature Roadmap & Cost Estimate</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Same Timezone Dedicated Senior Developers</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Sapphire Software Solutions. Our EdTech technology architects will review your project brief and respond within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Connor"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@edtech.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Hiring Model</label>
                        <select
                          name="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                        >
                          <option value="Dedicated Team">Dedicated Team</option>
                          <option value="Fixed Price">Fixed Price Contract</option>
                          <option value="Time & Material">Time & Material</option>
                          <option value="Buckets Approach">Buckets Approach</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief / Requirements</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your target features, timeline, or LMS platforms..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Submit Project Brief & Get Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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

export default EducationAppDevelopmentService;
