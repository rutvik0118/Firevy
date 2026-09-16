import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import EngagementModelsSection from '../home/EngagementModelsSection';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import WorkProcessGrid from '../home/WorkProcessGrid';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import DigitalTransformationCaseStudies from '../home/DigitalTransformationCaseStudies';
import RecentBlogsSection from '../home/RecentBlogsSection';
import SeasonedExpertsTeamSection from '../common/SeasonedExpertsTeamSection';
import LeverageExpertiseGridSection from '../common/LeverageExpertiseGridSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import AboutKeyMetrics from '../home/AboutKeyMetrics';
import SapphireFaqSection, { kotlinFaqList } from '../common/SapphireFaqSection';
import SubscribeNewsletterSection from '../home/SubscribeNewsletterSection';
import {
  Clock,
  Calendar,
  ArrowLeft,
  PieChart,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Check,
  Server,
  Cloud,
  Database,
  Users,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Laptop,
  LineChart,
  Globe,
  Coins,
  Award,
  RotateCw,
  Sliders,
  Lightbulb,
  Headphones,
  Handshake,
  UserCheck,
  Lock,
  MessageSquare,
  Flag,
  Milestone,
  RefreshCw,
  Building2,
  Sprout,
  GraduationCap,
  ShoppingBag,
  Scale,
  Sparkles,
  Smartphone,
  CheckCircle
} from 'lucide-react';

export const HireKotlinDevelopersService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cardSlideIndex, setCardSlideIndex] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // States for Team of Seasoned Experts, Leverage Expertise, Industry Insights, & Responsibility Tabs
  const [leverageTab, setLeverageTab] = useState(0);
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10,000 - $25,000',
    model: 'Dedicated Kotlin Team ($21/hr)',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        budget: '$10,000 - $25,000',
        model: 'Dedicated Kotlin Team ($21/hr)',
        message: ''
      });
    }, 4000);
  };

  // 6 Flexible Hiring Model Cards matching Sapphire reference
  const hiringModelCards = [
    {
      id: 'fulltime',
      title: 'Full-time Developer',
      subtitle: '8 hours a day, 5 days a week',
      price: '160 hours/month',
      IconComp: Calendar,
      isFeatured: true,
      saveText: 'Most Popular',
      badgeText: 'RECOMMENDED',
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Working : 8 hours a day, 5 days a week',
        'Minimum contract : 2 months',
        'Dedicated senior Kotlin engineer',
        '100% IP & source code ownership'
      ]
    },
    {
      id: 'parttime',
      title: 'Part-time Developer',
      subtitle: '4 hours a day, 5 days a week',
      price: '80 hours/month',
      IconComp: Briefcase,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Monthly',
        'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
        'Working : 4 hours a day, 5 days a week',
        'Minimum contract : 1 month',
        'Zero upfront onboarding overhead',
        'Direct communication via Slack/Teams'
      ]
    },
    {
      id: 'hourly',
      title: 'Hourly Basis',
      subtitle: 'Pay as you go flexible billing',
      price: 'Starting at $21/hr',
      IconComp: Clock,
      isFeatured: false,
      saveText: null,
      badgeText: null,
      features: [
        'Billing cycle : Bi-weekly or Monthly',
        'Project Trackers : Time Doctor, Hubstaff, Jira',
        'Working : Flexible on-demand hours',
        'Minimum commitment : 40 hours',
        'Ideal for ad-hoc features & bug fixes',
        'Fast scale-up or ramp-down'
      ]
    },
    {
      id: 'monthly',
      title: 'Monthly Dedicated',
      subtitle: 'Extended engineering team squad',
      price: 'Custom monthly plan',
      IconComp: Users,
      isFeatured: false,
      saveText: 'Save 15%',
      badgeText: null,
      features: [
        'Billing cycle : Monthly rolling contract',
        'Full management & QA support',
        'Guaranteed 160 hrs assured productivity',
        'Sprint planning & CI/CD pipeline setup',
        'Daily standups & real-time time tracking',
        'Strict NDA & data protection'
      ]
    },
    {
      id: 'quarterly',
      title: 'Quarterly Retainer',
      subtitle: 'Long-term enterprise development',
      price: 'Quarterly discounted plan',
      IconComp: Milestone,
      isFeatured: false,
      saveText: 'Save 20%',
      badgeText: 'BEST VALUE',
      features: [
        'Billing cycle : Milestone-based / Quarterly',
        'Dedicated Project Manager + Tech Lead',
        'Enterprise architecture & security audits',
        'Continuous code reviews & refactoring',
        'Flexible resource replacement SLA',
        'Priority 24/7 incident response'
      ]
    },
    {
      id: 'yearly',
      title: 'Annual Enterprise',
      subtitle: 'Strategic offshore tech division',
      price: 'Tailored enterprise rates',
      IconComp: Building2,
      isFeatured: false,
      saveText: 'Save 25%',
      badgeText: 'ENTERPRISE',
      features: [
        'Dedicated Offshore Development Center (ODC)',
        'Fully dedicated cross-functional squad',
        'Comprehensive SLA with custom KPIs',
        'On-demand domain specialist scaling',
        'Direct IP handover with zero vendor lock-in',
        'Quarterly executive reviews'
      ]
    }
  ];

  // Infinite Seamless Loop Carousel for Hiring Model Cards
  const extendedCards = [...hiringModelCards, ...hiringModelCards, ...hiringModelCards];

  useEffect(() => {
    if (isCarouselHovered) return;
    const interval = setInterval(() => {
      setCardSlideIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= hiringModelCards.length * 2) {
          setTimeout(() => {
            setEnableTransition(false);
            setCardSlideIndex(hiringModelCards.length);
            setTimeout(() => {
              setEnableTransition(true);
            }, 50);
          }, 600);
        }
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isCarouselHovered, hiringModelCards.length]);

  const handlePrevCard = () => {
    setCardSlideIndex((prev) => (prev <= 0 ? hiringModelCards.length - 1 : prev - 1));
  };

  const handleNextCard = () => {
    setCardSlideIndex((prev) => (prev + 1) % hiringModelCards.length);
  };

  // Dedicated Teams Composition Data
  const teamCategories = [
    'Mobile Application Team',
    'SaaS Product Dev. Team',
    'Microsoft Dev. Team',
    'E-commerce Platform Team',
    'Metaverse Team',
    'Digital Transformation Team'
  ];

  const teamDetailsData = {
    'Mobile Application Team': {
      title: 'Mobile Application Team',
      desc: 'Our specialized mobile team builds enterprise-grade native Android (Kotlin), iOS, and cross-platform apps with clean architectures, Jetpack Compose, and seamless API integrations.',
      roles: ['Business Analyst', 'Business Dev Manager', 'Kotlin Senior Programmers', 'UI/UX Designer', 'Web/Mobile Designer', 'Quality Analyst', 'Project Manager'],
      link: '/services/mobile-app-development'
    },
    'SaaS Product Dev. Team': {
      title: 'SaaS Product Dev. Team',
      desc: 'Architecting multi-tenant cloud-native SaaS systems with Kotlin backend microservices (Ktor, Spring Boot), micro-frontends, and automated CI/CD pipelines.',
      roles: ['Enterprise Cloud Architect', 'Business Analyst', 'Backend Kotlin Developers', 'Frontend React/Vue Engineers', 'DevOps / Kubernetes Specialist', 'QA Automation Engineer', 'Product Manager'],
      link: '/services/full-stack-development-services'
    },
    'Microsoft Dev. Team': {
      title: 'Microsoft Dev. Team',
      desc: 'Expertise in Microsoft ecosystems, .NET Core, Azure DevOps, enterprise CRM/ERP integration, and cloud-native microservices.',
      roles: ['Solutions Architect', 'Full Stack .NET Lead', 'Azure Cloud Engineer', 'Database Administrator', 'QA Engineer', 'Delivery Manager'],
      link: '/services/net'
    },
    'E-commerce Platform Team': {
      title: 'E-commerce Platform Team',
      desc: 'High-converting omnichannel digital commerce platforms featuring real-time inventory synchronization, payment gateways, and custom loyalty workflows.',
      roles: ['E-Commerce Strategist', 'UI/UX Conversion Expert', 'Lead Full Stack Engineer', 'Payment Gateway Integration Specialist', 'QA Specialist', 'Project Manager'],
      link: '/services/shopify'
    },
    'Metaverse Team': {
      title: 'Metaverse & AR/VR Team',
      desc: 'Immersive spatial computing, WebGL, 3D modeling, Unity, and ARCore/ARKit integration for next-gen interactive mobile solutions.',
      roles: ['Metaverse Solutions Lead', '3D Technical Artist', 'AR/VR Mobile Engineer', 'Spatial Computing Architect', 'QA Analyst', 'Scrum Master'],
      link: '/services/virtual-reality'
    },
    'Digital Transformation Team': {
      title: 'Digital Transformation Team',
      desc: 'End-to-end legacy modernization, cloud migration, AI/ML operationalization, and automated data intelligence pipelines.',
      roles: ['Digital Transformation Consultant', 'Enterprise Architect', 'Senior Kotlin / Java Engineer', 'Security & Compliance Lead', 'Data Engineer', 'Program Director'],
      link: '/services/it-consulting-services'
    }
  };

  // Leverage Expertise Roles
  const leverageExpertiseList = [
    {
      title: 'In Demand',
      tag: 'Core Focus',
      desc: 'Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.',
      skills: ['Kotlin Native', 'Jetpack Compose', 'Coroutines & Flow', 'Clean Architecture', 'Ktor & Spring']
    },
    {
      title: 'AI Developers',
      tag: 'Generative AI',
      desc: "Employ our team's best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate.",
      skills: ['LLM Fine-Tuning', 'LangChain', 'TensorFlow Lite', 'On-Device AI', 'Vector DBs']
    },
    {
      title: 'UI/UX Designers',
      tag: 'Design Systems',
      desc: 'Hire top UI/UX designers from our team who are well-versed in the most recent design trends, Material Design 3, user interface theories, and user experience tactics. Our designers produce interfaces that elevate brand engagement.',
      skills: ['Figma Prototyping', 'Material You (M3)', 'Design Tokens', 'Micro-interactions', 'Accessibility (a11y)']
    },
    {
      title: 'API Developers',
      tag: 'Backend & Cloud',
      desc: 'Use high-performance Kotlin Ktor, Spring Boot, and FastAPI frameworks to your advantage by hiring our skilled backend engineers. Build resilient, scalable REST and GraphQL APIs optimized for smooth integration and sub-second response times.',
      skills: ['Ktor Microservices', 'Spring Boot Kotlin', 'GraphQL & gRPC', 'PostgreSQL / MongoDB', 'Redis Caching']
    },
    {
      title: 'Next JS Developers',
      tag: 'Modern Web',
      desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of Next.js SSR, React Server Components, and edge deployment for blazing fast web applications.',
      skills: ['Next.js 14 App Router', 'React Query', 'Tailwind CSS', 'Server Components', 'Edge Functions']
    },
    {
      title: 'Machine Learning Developers',
      tag: 'Predictive Analytics',
      desc: 'Employ our team’s best ML developers with deep practical experience dealing with LLMs like LLaMA, GPT, and custom predictive models to automate complex decision-making processes.',
      skills: ['PyTorch', 'MLOps CI/CD', 'Computer Vision', 'Predictive Modeling', 'Edge ML Deployment']
    },
    {
      title: 'Data Scientists',
      tag: 'Data Intelligence',
      desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Actionable insight extraction, predictive model building, and business process optimization.',
      skills: ['Big Data Analytics', 'Apache Spark', 'Statistical Modeling', 'Predictive Scoring', 'BI Dashboards']
    }
  ];

  // Kotlin Core Expertise 6 Cards
  const kotlinExpertiseAreas = [
    {
      title: 'Web & Backend Development',
      desc: 'Use our Kotlin web development services with Ktor and Spring Boot to develop more secure, reliable, and easy-to-maintain server architectures in less time.',
      icon: Server
    },
    {
      title: 'Java to Kotlin Upgrade & Migration',
      desc: 'Considering Kotlin community expansion and modern standard, switch from Java smoothly with 100% interoperability, zero downtime, and cleaner codebases.',
      icon: RefreshCw
    },
    {
      title: 'Extended Kotlin Team',
      desc: 'Quickly augment your existing engineering crew with vetted Kotlin developers who integrate seamlessly into your Git workflow, Jira sprints, and daily standups.',
      icon: Users
    },
    {
      title: 'SaaS Platforms',
      desc: 'Construct robust, scalable mobile SaaS applications with market-researched consumer features, multi-tenant security, and automated cloud sync.',
      icon: Cloud
    },
    {
      title: 'Edtech Applications',
      desc: 'Build engaging learning applications featuring interactive e-books, gamified quizzes, real-time live video classrooms, and offline study modes.',
      icon: GraduationCap
    },
    {
      title: 'Kotlin Multiplatform (KMP) & iOS',
      desc: 'Share common business logic, data models, and network code across Android and iOS while preserving native UI performance and platform fidelity.',
      icon: Smartphone
    }
  ];

  // Dedicated Developers Benefits
  const dedicatedBenefits = [
    {
      title: 'Cost Efficiency',
      desc: 'Access global top-tier Kotlin talent at competitive rates, lowering development expenditures without compromising on code excellence.',
      icon: Coins
    },
    {
      title: 'Access to Specialized Skills',
      desc: 'Overcome in-house talent shortages quickly with senior developers experienced in Coroutines, Jetpack Compose, KMP, and Clean Architecture.',
      icon: Award
    },
    {
      title: 'Scalability and Flexibility',
      desc: 'Effortlessly scale your development squad up or down based on release milestones, product roadmap shifts, and budget goals.',
      icon: Sliders
    },
    {
      title: 'Focused and Committed Effort',
      desc: '100% dedicated developers exclusively committed to your project, ensuring faster turnaround times, cohesive collaboration, and high code quality.',
      icon: UserCheck
    },
    {
      title: 'Reduced Time to Market',
      desc: 'Accelerate your deployment velocity using established CI/CD pipelines, reusable Kotlin component libraries, and rapid sprint execution.',
      icon: Zap
    },
    {
      title: 'Enhanced Innovation and Creativity',
      desc: 'Bring fresh industry perspectives, modern architectural paradigms, and forward-thinking mobile solutions to your core products.',
      icon: Lightbulb
    }
  ];

  // Kotlin FAQs matching Reference
  const kotlinFaqs = [
    {
      q: 'Which programming language, Kotlin or Java, is more advantageous and why?',
      a: "Java is an older programming language that has been used for a long time to power web and android applications. Because of this, Kotlin is a far more sophisticated and superior language than Java. Nevertheless, Kotlin addresses a variety of Java's flaws and deficiencies that are present in the language. If you want to construct an application that won't ever become unstable and is simple to keep up-to-date, you have no choice but to hire Kotlin developers from our company to work on your project."
    },
    {
      q: 'How can I hire developers that specialize in Kotlin from Firevy / Sapphire?',
      a: 'We make hiring Kotlin developers simple and transparent: 1) Share your project requirements and tech stack scope. 2) We provide candidate profiles matching your seniority needs. 3) Conduct technical interviews with short-listed developers. 4) Select your team and begin onboarding within 48 to 72 hours with zero upfront recruitment fees.'
    },
    {
      q: 'Is Kotlin a language used for a website’s front-end or back-end?',
      a: 'JetBrains, the industry standard bearer when it comes to the creation of IDEs, is responsible for the development of the back-end programming language known as Kotlin. In addition, it develops improved features on top of existing ones to create incredible futuristic applications for your one-of-a-kind ideas. Particularly noteworthy is that the language is seen as a potential successor to Java.'
    },
    {
      q: 'What are the benefits of hiring Kotlin developers from Sapphire Solutions?',
      a: 'Hiring Kotlin developers from Sapphire Solutions gives you access to experienced professionals who specialize in modern Android development, cross-platform integration, and clean, scalable code—all while ensuring on-time delivery and cost efficiency.'
    },
    {
      q: 'How can I hire dedicated Kotlin developers for my mobile app project?',
      a: 'You can hire Kotlin developers by simply reaching out through our contact form or consultation link. Our team will analyze your requirements and assign expert Kotlin developers accordingly, with flexible engagement models.'
    },
    {
      q: 'Do your Kotlin developers have experience with cross-platform frameworks like Kotlin Multiplatform?',
      a: 'Yes, our Kotlin developers are well-versed in Kotlin Multiplatform and can build apps that share code across Android, iOS, and web, ensuring faster development and lower costs.'
    },
    {
      q: 'Can I hire a Kotlin developer on an hourly or monthly basis?',
      a: 'Absolutely. We offer flexible hiring models—hourly, part-time, or full-time—to meet your project’s scope, budget, and timeline.'
    },
    {
      q: 'How do you ensure the quality and security of Kotlin applications?',
      a: 'We follow strict quality assurance protocols, perform code reviews, implement secure coding practices, and ensure all Kotlin-based applications meet the latest security standards and compliance requirements.'
    },
    {
      q: 'Why choose Sapphire Solutions as your Kotlin development partner?',
      a: 'Sapphire Solutions is a trusted Kotlin development company known for its proven track record, agile methodology, global clientele, and end-to-end Kotlin app development services tailored to modern business needs.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Hire Kotlin Developers in USA | Kotlin Programmer in USA"
        description="Sapphire Software Solutions / Firevy has a team of skilled & experienced Kotlin programmers. Hire Kotlin Developers in USA to resolve mission-critical business issues and complete projects on schedule."
        canonical="/services/hire-kotlin-developers"
      />

      {/* ============================================================
          1. HERO SECTION (100% Matching User Screenshot 1)
          ============================================================ */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Kotlin Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                When you employ skilled Kotlin developers from us, we will collaborate with you throughout all phases to create high-performance.
              </p>

              {/* 4 Metrics / Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 pb-2">
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">200+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">20+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">2800+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    Project Completed
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-[38px] font-[800] text-[#006095] tracking-tight leading-none mb-1">320+</div>
                  <div className="text-xs sm:text-[14px] font-[600] text-slate-800 leading-[1.3]">
                    5-Star Clutch Reviews
                  </div>
                </div>
              </div>

              {/* Call-to-action pill box */}
              <div className="space-y-3 pt-3">
                <div className="text-sm sm:text-[15px] font-[700] text-[#006095]">
                  Get Top Talent Work for you At
                </div>
                <div className="inline-flex items-center justify-between bg-[#0089a8] rounded-[16px] p-2 pl-3.5 pr-2 w-full max-w-[410px] shadow-lg shadow-[#0089a8]/25">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-4 h-4 text-[#0089a8] stroke-[2.5]" />
                    </div>
                    <span className="text-xl sm:text-[22px] font-[800] text-white tracking-tight">$21/Hourly*</span>
                  </div>
                  <a
                    href="#contact-quote"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact-quote')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center cursor-pointer"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Desktop Monitor & Kotlin Logo & Floating Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <img
                src="/images/kotlin_hero_monitor.png"
                alt="Hire Kotlin Developers"
                className="w-full max-w-[520px] h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          2. BRAND LOGO MARQUEE
          ============================================================ */}
      <BrandLogoMarquee />

      {/* ============================================================
          3. SECTION 2: Quickly Hire Remote Kotlin App Developers From Us (100% Matching User Screenshot 2)
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Graphic Illustration (1:1 Copy of Sapphire Reference Site Illustration) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <img
                src="/images/kotlin_remote_developers.png"
                alt="Quickly Hire Remote Kotlin App Developers From Us"
                className="w-full max-w-[540px] h-auto object-contain mx-auto drop-shadow-md"
              />
            </div>

            {/* Right Text Content (100% Matching Screenshot 2) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Quickly Hire Remote Kotlin App Developers From Us
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our flexible hiring methods allow you to hire Kotlin developers in India based on your budget and project specifications. We offer professional developers to resolve mission-critical business issues and complete projects on schedule. When you hire Dedicated Kotlin Experts from us, you receive access to our expertise in mobile app development across various industries.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Connect With Kotlin Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          4. OUR FLEXIBLE HIRING MODELS (Light Cards Carousel)
          ============================================================ */}
      <section id="hiring-models" className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80 text-left select-none overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <div className="text-[#006095] text-xs font-[800] tracking-widest uppercase mb-1">ENGAGEMENT MODELS</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
                Our Flexible Hiring Models: Find the Perfect Fit For Your Project
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
                Hire Kotlin Developers from Sapphire Software Solutions Starts from,
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button
                onClick={handlePrevCard}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#006095] hover:text-white hover:border-[#006095] transition-all shadow-sm cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextCard}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#006095] hover:text-white hover:border-[#006095] transition-all shadow-sm cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
          >
            <div
              className={`flex gap-6 ${enableTransition ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ transform: `translateX(-${cardSlideIndex * 340}px)` }}
            >
              {extendedCards.map((card, idx) => {
                const IconComponent = card.IconComp;
                return (
                  <div
                    key={idx}
                    className={`w-[320px] shrink-0 rounded-2xl p-6 flex flex-col justify-between border transition-all duration-300 ${
                      card.isFeatured
                        ? 'bg-[#EBF4FA] border-[#0089a8] shadow-xl shadow-[#0089a8]/10'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div>
                      {card.badgeText && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0089a8]/15 text-[#006095] font-black text-[10px] tracking-wider mb-3">
                          {card.badgeText}
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#006095]/10 text-[#006095] flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        {card.saveText && (
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                            {card.saveText}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
                      <p className="text-xs text-slate-500 mb-3">{card.subtitle}</p>
                      <div className="text-lg font-extrabold text-[#006095] mb-5 pb-3 border-b border-slate-200">
                        {card.price}
                      </div>

                      <ul className="space-y-2 text-xs text-slate-700">
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-[#006095] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-200">
                      <Link
                        to="/contact"
                        className={`w-full block py-2.5 text-center rounded-lg font-bold text-xs tracking-wide transition-all ${
                          card.isFeatured
                            ? 'bg-[#0089a8] hover:bg-[#00708a] text-white shadow-md'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        Hire Now →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          5. SECTION: Hire Dedicated Developers To Empower Your Business with our Development Proficiency
          ============================================================ */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 text-center">
        <Container>
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Hire Kotlin Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#00557e] text-white">
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4">Range of Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-cyan-800/40">Junior Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-cyan-800/40">Mid-Level Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-cyan-800/40">Senior Developers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Approx Cost</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">$17</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">$22</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">$29</td>
                </tr>
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Years of Experience</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">1-3 Years</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">3-5 Years</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">5+ Years</td>
                </tr>
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Project Manager</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Time Zone Flexibility</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Quality Guarantee</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">Yes</td>
                </tr>
                <tr>
                  <td className="p-4 font-[700] text-sm bg-[#006095] text-white">Working Hours</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">40 hours/ Week</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">40 hours/ Week</td>
                  <td className="p-4 font-[600] text-sm text-slate-800 bg-white border-l border-slate-200">40 hours/ Week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. BRIEF ABOUT OUR KOTLIN DEVELOPMENT SERVICES (With Graphic Illustration)
          ============================================================ */}
      <section className="py-20 bg-white font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Kotlin Development Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Compared to the amount of code required by Java, the amount of code needed for the identical business use case in Kotlin is much less. Because it comes with a more sophisticated and up-to-date compiler, Kotlin is rapidly becoming the language of choice for all areas of software development.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We only hire the most talented people in the field to give you excellent outcomes. Due to the nature of our interview procedure, we guarantee that only the most qualified candidates go further. When you hire Kotlin programmers from us, you can be confident that every one of your exchanges will be marked by honesty and integrity. You may rest easy knowing that competent individuals are working on your project.
              </p>
            </div>

            {/* Right Graphic Illustration */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <img
                src="/images/kotlin_developer_sitting.png"
                alt="Brief About Our Kotlin Development Services"
                className="w-full max-w-[500px] h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. OUR PREMIUM SERVICES (Component)
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          7. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (100% Matching Screenshot)
          ============================================================ */}
      <SeasonedExpertsTeamSection brandName="Sapphire’s" />

      {/* ============================================================
          8. LEVERAGE THE EXPERTISE OF SAPPHIRE DEDICATED DEVELOPERS (100% Matching Screenshot)
          ============================================================ */}
      <LeverageExpertiseGridSection brandName="Sapphire" />

      {/* ============================================================
          9. THE EXPERTISE OF OUR KOTLIN DEVELOPERS (6 Specialized Areas)
          ============================================================ */}
      <section className="py-20 bg-[#F8FAFC] font-sans text-slate-900 border-b border-slate-200/80 text-left">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#006095] text-xs font-[800] tracking-widest uppercase">TECHNICAL MASTERY</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight mt-1">
              The Expertise Of Our Kotlin Developers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Our talented Kotlin developers have decade-long expertise in this industry. Have a look at their expertise:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kotlinExpertiseAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-[#006095] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#006095]/10 text-[#006095] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">{area.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{area.desc}</p>
                  </div>
                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <Link to="/contact" className="text-xs font-bold text-[#006095] hover:text-[#004f7a] flex items-center space-x-1.5">
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================
          10. INDUSTRY-FOCUSED INSIGHTS & ABOUT US KEY METRICS (100% Matching Screenshot)
          ============================================================ */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Dedicated Developers" />
      <AboutKeyMetrics />

      {/* ============================================================
          11. BENEFITS OF HIRING DEDICATED DEVELOPERS
          ============================================================ */}
      <section className="py-20 bg-white font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#006095] text-xs font-[800] tracking-widest uppercase">STRATEGIC ADVANTAGES</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight mt-1">
              Why Hire Dedicated Kotlin Developers?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal">
              Hiring dedicated developers can help you save time and money so that you can focus more on core business activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dedicatedBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 hover:border-[#006095] hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#006095]/10 text-[#006095] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <HireDeveloper4Steps
        title="Hire Kotlin Developers In 4 Easy Steps"
        subtitle="Kotlin Development offers a number of advantages over another platform. Some of them are:"
      />

      {/* ============================================================
          13. CASE STUDIES & SUCCESS STORIES (Digital Transformation Case Studies)
          ============================================================ */}
      <DigitalTransformationCaseStudies />

      {/* ============================================================
          14. TECHNOLOGY STACK PROFICIENT GRID (Component)
          ============================================================ */}
      <TechStackProficientGrid />

      {/* ============================================================
          15. VIDEO TESTIMONIALS (Our Story, Their Words)
          ============================================================ */}
      <VideoTestimonialsStory />

      {/* ============================================================
          16. BUSINESS FRIENDLY ENGAGEMENT MODELS (Component)
          ============================================================ */}
      <EngagementModelsSection />

      {/* ============================================================
          17. SUCCESS MATRIX GRID & INNOVATIVE SOLUTION VIDEO
          ============================================================ */}
      <SuccessMatrixGrid />
      <InnovativeSolutionVideo />

      {/* ============================================================
          18. 8-STAGE WORK PROCESS GRID (Requirement to Deployment)
          ============================================================ */}
      <WorkProcessGrid />

      {/* ============================================================
          19. WHAT OUR CLIENTS SAY (Clutch Reviews Dark Section)
          ============================================================ */}
      <ClientReviewsDarkSection />

      {/* ============================================================
          20. RECENT BLOGS SECTION (Component)
          ============================================================ */}
      <RecentBlogsSection />

      {/* ============================================================
          21. FREQUENTLY ASKED QUESTIONS (100% Matching Screenshot)
          ============================================================ */}
      <SapphireFaqSection faqList={kotlinFaqList} />

      {/* ============================================================
          22. NEWSLETTER SUBSCRIBE
          ============================================================ */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default HireKotlinDevelopersService;
