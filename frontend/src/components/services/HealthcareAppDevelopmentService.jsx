import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Video,
  Calendar,
  Activity,
  Pill,
  Cpu,
  Lock,
  Smartphone,
  Globe,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Hospital,
  FileText,
  Zap,
  Award,
  Users,
  Star,
  MessageSquare,
  Clock,
  Phone,
  Mail,
  Sparkles,
  Building,
  Database,
  Server,
  RefreshCw,
  BarChart3,
  Radio,
  FileCode,
  Shield,
  Check,
  Flame,
  Bot,
  Compass,
  Headphones,
  CheckSquare,
  TrendingUp,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';

export const HealthcareAppDevelopmentService = () => {
  const [activeTechTab, setActiveTechTab] = useState('backend');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Healthcare Mobile App',
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

  // Sapphire Solutions - Healthcare Expertise Cards
  const expertiseList = [
    {
      title: 'Fitness App',
      icon: Activity,
      desc: 'By developing fitness healthcare apps, you can do away with expensive equipment-based training and give your users the ease of remote access to a fitness trainer.'
    },
    {
      title: 'Meditation Healthcare App',
      icon: HeartPulse,
      desc: 'By enabling customers to contact qualified professionals from the comfort of their own homes with our mobile app development services for meditation healthcare, you may promote spiritual well-being.'
    },
    {
      title: 'Exercise & Nutrition App',
      icon: Flame,
      desc: 'With our personal nutrition custom healthcare app development services, you may get guidance from health professionals wherever you are.'
    },
    {
      title: 'Quick Care Urgent App',
      icon: Stethoscope,
      desc: 'With the help of our urgent healthcare app development services, we can direct people in the event of a medical emergency and provide real-time updates on ER occupancy and journey time.'
    },
    {
      title: 'Remote Patient Monitoring (RPM)',
      icon: Video,
      desc: 'Our remote patient monitoring healthcare app developers will let patients and doctors make appointments, communicate digitally, and exchange care from a distance.'
    },
    {
      title: 'Diagnostic Test Apps',
      icon: FileText,
      desc: 'The app allows for remote sample collection, report generation, communication with doctors, and real-time lab test updates.'
    }
  ];

  // Advantages of Hiring a Healthcare App Developer
  const advantagesList = [
    {
      title: 'Improved Care and Engagement',
      desc: 'Professional healthcare app development produces user-friendly apps that improve patient engagement and care. Appointment scheduling, telemedicine consultations, and medical record access allow people to manage their health effortlessly.'
    },
    {
      title: 'Optimized Operations',
      desc: 'Apps can automate patient registration, invoicing, and appointment administration in healthcare. Operational effectiveness frees up healthcare workers to concentrate on patient care while lowering costs.'
    },
    {
      title: 'Secure Data Management',
      desc: 'Due to HIPAA compliance and superior encryption, these applications manage sensitive patient data with zero leakage risks, promoting confidence and dependability.'
    },
    {
      title: 'Customized Patient Care',
      desc: 'Health applications let clinicians tailor patient treatment. Customized health suggestions, treatment plans, and continuous communication improve patient recovery rates.'
    },
    {
      title: 'High-Tech AI & ML Resources',
      desc: 'AI, ML, and data analytics are integrated into healthcare applications for precise medical diagnostics, predictive analytics, and automated clinical insights.'
    },
    {
      title: '24/7 Updates and Support',
      desc: 'Professional healthcare app development includes regular bug patches, security vulnerability updates, feature additions, and full regulatory SLA maintenance.'
    }
  ];

  // Engagement Models (Sapphire Signature 4 Models)
  const hiringModels = [
    {
      title: 'Fixed Price',
      tagline: 'Ideal for well-defined scope & predictable budget',
      features: [
        'Optimal flexibility & set milestones',
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

  // Real Enterprise Healthcare Case Studies (Exact Sapphire Case Studies)
  const caseStudies = [
    {
      client: 'Adani Group Medical Division',
      title: 'Adani EmCare – Web & Mobile Healthcare Platform',
      desc: 'Web + Mobile App used by Adani Group’s medical officers to capture, analyze, and manage the health data of employees and workers for preventive healthcare.',
      stats: [
        '98% Employee satisfaction ratio',
        '91% reduction in appointment scheduling time',
        '24/7 real-time health monitoring',
        'Serving over 60,000 healthcare professionals'
      ],
      badge: 'Healthcare Enterprise'
    },
    {
      client: 'MG Motor Corporation',
      title: 'MG Motor Employee Health Tracker App',
      desc: 'Secure digital vault and health analytics portal protecting employee OPD and annual medical examination records for audit compliance.',
      stats: [
        'Real-time health data analytics',
        '100% HIPAA-compliant data security',
        '24/7 access to health resources & support',
        '98% improvement in employee health monitoring'
      ],
      badge: 'Corporate Telehealth'
    },
    {
      client: 'Larsen & Toubro (L&T)',
      title: 'Health and Safety Management System',
      desc: 'Enterprise safety improvement application collecting observations from organizational staff, automating safety reminders and audit closures.',
      stats: [
        '99% compliance with health and safety regulations',
        'Automated safety audits and inspections',
        '24/7 access to health & safety training',
        '97% reduction in safety incidents'
      ],
      badge: 'Health & Safety'
    }
  ];

  // Technology Stack Categories with Detailed Descriptions
  const techCategories = {
    backend: [
      { name: '.NET', desc: 'Enterprise-grade framework for building HIPAA-compliant RESTful APIs, patient health record management, and secure hospital microservices.' },
      { name: 'Node.js', desc: 'High-concurrency asynchronous runtime powering real-time WebRTC video consultation sessions and instant Messaging.' },
      { name: 'Java', desc: 'Robust enterprise backend technology with multithreading capabilities for high-volume clinical data processing.' },
      { name: 'Python', desc: 'Powering AI diagnostic models, symptom triage bots, medical image analysis, and predictive healthcare analytics.' },
      { name: 'Ruby on Rails', desc: 'Rapid MVP prototyping framework with clean MVC architecture for telemedicine patient portals.' },
      { name: 'PHP', desc: 'Reliable server-side framework for medical content management, appointment booking, and clinic scheduling systems.' }
    ],
    frontend: [
      { name: 'React.js', desc: 'High-performance component-driven web UI library for interactive doctor dashboards and patient health portals.' },
      { name: 'Next.js', desc: 'Fullstack React framework with SSR and ISR, delivering sub-second page loads and SEO optimization for medical websites.' },
      { name: 'TypeScript', desc: 'Static typing layer preventing runtime errors in critical healthcare logic and complex medical data structures.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app development using Health Connect API for seamless wearable vitals synchronization.' },
      { name: 'RxJava', desc: 'Reactive programming library for smooth async data stream handling in mobile healthcare applications.' },
      { name: 'RxKotlin', desc: 'Functional reactive extensions for Kotlin, enabling responsive mobile UI states during live video calls.' },
      { name: 'Vue.js', desc: 'Lightweight progressive frontend framework for intuitive clinic administration and patient scheduling panels.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'ACID-compliant relational database ideal for complex health records, billing data, and HIPAA compliance logs.' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document database storing unstructured clinical records, doctor notes, and diagnostic image metadata.' },
      { name: 'SQLite', desc: 'Lightweight embedded local database for offline-first patient mobile app data synchronization.' },
      { name: 'CoreData', desc: 'Apple iOS framework for persistent local storage of patient biometric vitals on iPhones and Apple Watches.' },
      { name: 'Realm', desc: 'Ultra-fast mobile database providing real-time data sync across iOS and Android health applications.' },
      { name: 'Firebase', desc: 'Real-time cloud database and push notification service for instant doctor-patient appointment alerts.' },
      { name: 'Redis', desc: 'Ultra-fast in-memory cache for quick session management, WebRTC signaling, and rate limiting.' }
    ],
    devops: [
      { name: 'CI/CD Pipelines', desc: 'Automated deployment pipelines ensuring zero-downtime releases and instant security patch rollouts.' },
      { name: 'GitHub Actions', desc: 'Continuous integration workflows conducting automated linting, security scanning, and unit test suites.' },
      { name: 'Docker', desc: 'Containerization technology providing identical dev-to-production environments and microservice isolation.' },
      { name: 'Kubernetes', desc: 'Container orchestration platform auto-scaling cloud compute during high-traffic telehealth consultation surges.' },
      { name: 'AWS MedTech', desc: 'HIPAA-eligible cloud infrastructure (S3, ECS, RDS, CloudWatch) with bank-grade encryption at rest and in transit.' },
      { name: 'Azure Health', desc: 'Microsoft enterprise health cloud with native HL7/FHIR API services and zero-trust cloud security.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation framework verifying patient flows on real iOS & Android devices.' },
      { name: 'BrowserStack', desc: 'Physical device cloud matrix testing across 500+ mobile devices, browsers, and OS versions.' },
      { name: 'Katalon Studio', desc: 'End-to-end automated testing tool for web, mobile, and API security validation.' },
      { name: 'Cypress', desc: 'Modern frontend test framework simulating end-to-end patient booking and telehealth call flows.' },
      { name: 'Playwright', desc: 'Reliable cross-browser automation suite performing regression testing on clinic admin dashboards.' },
      { name: 'Jest', desc: 'Fast JavaScript unit testing framework ensuring high code coverage across core medical calculations.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking project backlogs, developer tasks, and HIPAA compliance tickets.' },
      { name: 'Slack', desc: 'Instant team collaboration channel connecting clients, project managers, and senior developers in real time.' },
      { name: 'Microsoft Teams', desc: 'Enterprise video conferencing and document collaboration platform for weekly client sprint demos.' },
      { name: 'Trello', desc: 'Visual Kanban board system for intuitive milestone tracking and UI/UX design asset handoffs.' },
      { name: 'Confluence', desc: 'Comprehensive documentation wiki storing architectural blueprints, API specs, and security protocols.' }
    ]
  };

  // 8-Step Development Lifecycle
  const developmentLifecycle = [
    { step: '01', title: 'Requirement Gathering', desc: 'Focus on documentation first for clarity and alignment between both client and engineering teams.' },
    { step: '02', title: 'Designs, Wireframes & Mockups', desc: 'Craft interactive, user-friendly UI designs and wireframe flows for intuitive navigation.' },
    { step: '03', title: 'Prototype Demo', desc: 'Build an interactive demo prototype so clients can experience the look and feel of the platform before coding.' },
    { step: '04', title: 'Changes & Scope Confirmation', desc: 'Review client feedback, refine requirements, and freeze final technical scope for sprint development.' },
    { step: '05', title: 'Agile Development', desc: 'Execute bi-weekly sprints with clean code standards, microservices, and HIPAA security integrations.' },
    { step: '06', title: 'QA & Compliance Audit', desc: 'Execute end-to-end automated testing, load stress tests, OWASP vulnerability scans, and HIPAA audit sign-off.' },
    { step: '07', title: 'Production Deployment', desc: 'Perform zero-downtime final deployment, UAT verification, and store publication to Google Play & App Store.' },
    { step: '08', title: 'Support, Maintenance & SEO', desc: 'Provide 24/7 technical maintenance, continuous SLA monitoring, and complimentary product growth advisory.' }
  ];

  // Why Choose Us Pillars
  const whyChooseUs = [
    { title: 'Flexible Engagement Models', desc: 'Customized engagement models facilitating hourly, fixed rate, or dedicated team hiring.' },
    { title: '100% Transparency', desc: 'Transparent communication policy ensuring client and dev team remain on the exact same page.' },
    { title: 'Experienced Healthcare Engineers', desc: 'Seasoned developers with deep domain experience in HIPAA, HL7/FHIR, and medical IoT.' },
    { title: 'Timely Sprint Delivery', desc: 'Rigorous adherence to sprint timelines backed by continuous integration and automated deployments.' },
    { title: '24/7 Dedicated Technical Support', desc: 'Immediate resolution of technical queries with 24/7 SLA infrastructure support staff.' }
  ];

  // Official Sapphire FAQs
  const sapphireFaqs = [
    {
      q: '1. Should the development of a medical app for healthcare professionals begin on iOS or Android?',
      a: 'It fully depends on the purpose of your medical mobile app development procedure. If you are searching for a platform to facilitate staff communication and have a large crew, an Android application offers flexibility. However, if you require a platform for communicating encrypted medical data, EHR records, and high security, iOS is naturally suited due to its strict sandbox security model. We often recommend cross-platform (React Native or Flutter) to cover both seamlessly.'
    },
    {
      q: '2. How much do medical applications for healthcare professionals cost to develop?',
      a: 'Obtaining a cost estimate for constructing a healthcare application depends on a thorough understanding of the app features, EHR integration requirements, and compliance standards. Typically, projects range from $15,000 for specialized MVPs to $50,000+ for enterprise multi-clinic telehealth portals. We provide transparent fixed-price or dedicated team estimates after initial requirement analysis.'
    },
    {
      q: '3. What makes a health app effective?',
      a: 'A variety of factors contribute to the success of a health app. The app must be simple to use, deliver meaningful real-time information, and adhere strictly to HIPAA privacy standards. In addition, the application must integrate modern technologies like AI for symptom analysis, WebRTC for video calls, and BLE for wearable sync.'
    },
    {
      q: '4. What are Healthcare App Development Services?',
      a: 'Healthcare app development services involve building mobile and web apps for hospitals, clinics, medtech startups, and patients to streamline medical operations, enhance patient care, enable telemedicine, and automate medical billing.'
    },
    {
      q: '5. Why should businesses choose us for Healthcare App Development?',
      a: 'We are a leading IT company delivering secure, 100% HIPAA-compliant healthcare apps with advanced features like WebRTC video consultations, HL7/FHIR EHR integration, AI predictive analytics, and 24/7 SLA support.'
    },
    {
      q: '6. How do Healthcare Apps benefit hospitals and patients?',
      a: 'Healthcare apps improve patient engagement, reduce appointment waiting times by over 90%, enable instant online doctor consultations, automate medical records management, and provide 24/7 real-time health monitoring.'
    },
    {
      q: '7. Are Healthcare Apps developed by our team compliant with regulations?',
      a: 'Yes, we guarantee strict compliance with HIPAA, HITECH, HL7/FHIR, FDA SaMD guidelines, and GDPR standards, using AES-256 encryption at rest and TLS 1.3 in transit to safeguard sensitive PHI data.'
    },
    {
      q: '8. Can Healthcare Apps integrate AI and wearable devices?',
      a: 'Absolutely. We build health apps that connect directly with Apple HealthKit, Google Fit, and Bluetooth Low Energy (BLE) medical hardware to track real-time heart rate, SpO2, glucose levels, and AI predictive readmission alerts.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Healthcare App Development Services | Top Medical & Telemedicine App Company"
        description="On-Demand Healthcare App Development Services in USA. We build HIPAA-compliant telemedicine apps, doctor appointment booking systems, EHR/EMR portals, and remote patient monitoring software."
        canonical="/services/health-care-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Healthcare App Development Services in USA"
        subtitle="Rapidly becoming an important component of the business, Custom healthcare mobile app development services is now a vital industry element. The Healthcare Consultation App Development of mobile applications is now a crucial aspect of increasing patient happiness and earnings. Contact us to know more!"
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="healthcare"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Review & Ratings Bar (Google, Clutch, GoodFirms) */}
      <section className="py-6 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
        <Container>
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>900+ GOOGLE REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">4.9 / 5.0 Star Rating</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>320+ CLUTCH REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Top Healthcare App Developer</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified MedTech Leader</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Brief About & What Exactly Is Healthcare App Development */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
                INDUSTRY INSIGHTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Brief About Healthcare App Development
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As a top medical app development company, we include the best features while developing a healthcare app. Patients and physicians will be able to quickly access and modify their medical records, with user profiles acting as the most effective approach to managing this critical information.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A patient application that allows individuals to provide feedback on medical treatments inspires immense confidence. Encrypted chat becomes an integral component of the app development process due to the ability to send medical images, lab results, and documents securely to physicians. Push notifications further promote seamless doctor-patient connection.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5 bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                What Exactly Is Healthcare App Development?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Healthcare App Development Services include features like telemedicine, medical coding, and billing to improve operational management for healthcare professionals. These solutions assist patients in managing chronic conditions while guiding wellness enthusiasts toward health goals.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                As a leading Healthcare Development Company, we know what it takes to create a healthcare app using modern technologies. Healthcare mobile apps streamline clinical procedures, improve data accessibility, expand remote health care, decrease medical errors, lower operational costs, and elevate the patient experience.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Expertise Of Our Healthcare App Development (6 Cards) */}
      <section id="expertise-section" className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              OUR HEALTHCARE SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The Expertise Of Our Healthcare App Development
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              We use the latest technology and agile methods to develop custom health apps for businesses of all types and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#005F96] to-[#003452] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#005F96] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <a
                      href="#quote-form"
                      className="text-xs font-bold text-[#005F96] hover:underline inline-flex items-center"
                    >
                      <span>Explore Capability</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Advantages of Hiring a Healthcare App Developer */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              BUSINESS ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Advantages of Hiring Our Healthcare App Developers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Transform medical treatment and hospital operations with our specialized engineering capabilities.
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

      {/* Real Enterprise Case Studies (Adani EmCare, MG Motor, L&T) */}
      <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              PROVEN ENTERPRISE SUCCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Featured Healthcare Enterprise Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Explore how we delivered large-scale digital health platforms to leading global organizations.
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

      {/* Engagement Models (Sapphire Signature 4 Models) */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FLEXIBLE HIRING MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Healthcare Engagement Models
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
      <SapphireTechStackGrid domainName="healthcare" richTechCategories={techCategories} />

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
              Why Choose Us for Healthcare App Development?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Being unique is our quality! We stand one level up with end-to-end support and deep healthcare expertise.
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

      {/* Official Sapphire Healthcare FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Healthcare App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers to common questions regarding iOS/Android platforms, cost, regulations, and AI features.
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
                Get Access to Top Healthcare App Developers
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a meeting with our technical specialists today to learn how we can transform your healthcare vision into a secure, HIPAA-compliant digital application.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Free Non-Disclosure Agreement (NDA)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Comprehensive Feature & Cost Estimate</span>
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
                      Thank you for contacting Sapphire Software Solutions. Our healthcare technology architects will review your project brief and respond within 2 business hours.
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
                          placeholder="e.g. Alex Morgan"
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
                          placeholder="alex@health.com"
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
                        placeholder="Tell us about your target features, timeline, or EHR systems..."
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

export default HealthcareAppDevelopmentService;
