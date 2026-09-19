import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import CustomItServicesSection from './CustomItServicesSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import IndustryFocusedInsightsSection from './IndustryFocusedInsightsSection';
import ExpertiseItConsultingSection from './ExpertiseItConsultingSection';
import AndroidHiringModels from './AndroidHiringModels';
import WhatOurClientsSaySection from './WhatOurClientsSaySection';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import TechStackProficientGrid from '../common/TechStackProficientGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import TransformativeImpactSection from './TransformativeImpactSection';
import AboutUsStats from './AboutUsStats';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import ItConsultingRecentBlogsSection from './ItConsultingRecentBlogsSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Lock,
  Search,
  FileText,
  Activity,
  Zap,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Server,
  Cpu,
  Radio,
  BarChart3,
  Users,
  Eye,
  Settings,
  Flame,
  Gauge,
  Check,
  Quote,
  ChevronRight
} from 'lucide-react';

export const TestingQaService = () => {
  // Cutting-Edge Tech Slider State
  const techSliderRef = useRef(null);

  // Performance Testing selected bar tab
  const [activePerfTab, setActivePerfTab] = useState(0);

  // 1. Performance Testing Bar Metrics
  const performanceTypes = [
    { name: 'Load Testing', height: '28%', desc: 'Validates system stability and responsiveness under expected normal and peak concurrent user traffic loads.' },
    { name: 'Stress Testing', height: '42%', desc: 'Identifies the extreme breaking point and failure recovery mechanisms under abnormal operational capacity.' },
    { name: 'Spike Testing', height: '56%', desc: 'Measures immediate response and recovery time when traffic suddenly surges by multiple orders of magnitude.' },
    { name: 'Endurance Testing', height: '70%', desc: 'Verifies continuous long-term throughput, detecting memory leaks and resource degradation over sustained usage.' },
    { name: 'Scalability Testing', height: '85%', desc: 'Evaluates the application ability to scale compute and memory horizontally with elastic cloud auto-scaling.' },
    { name: 'Volume Testing', height: '100%', desc: 'Monitors query performance, database latency, and storage throughput when processing massive historical datasets.' }
  ];

  // 2. Usability Testing Process Steps
  const usabilitySteps = [
    {
      step: 1,
      title: 'Planning',
      desc: 'Define testing scope, target audience profiles, key success metrics, and user task scenarios.',
      icon: <FileText className="w-6 h-6 text-[#9333EA]" />
    },
    {
      step: 2,
      title: 'Select Test Participant',
      desc: 'Screen and recruit real target users aligned with behavioral personas and target demographics.',
      icon: <Users className="w-6 h-6 text-[#0284C7]" />
    },
    {
      step: 3,
      title: 'Test Executions',
      desc: 'Conduct moderated and unmoderated user sessions with real-time screen recordings and event logging.',
      icon: <Monitor className="w-6 h-6 text-[#16A34A]" />
    },
    {
      step: 4,
      title: 'Analyze Results',
      desc: 'Evaluate heatmaps, time-on-task, user error rates, and qualitative cognitive friction feedback.',
      icon: <Search className="w-6 h-6 text-[#EA580C]" />
    },
    {
      step: 5,
      title: 'Report and Recommendations',
      desc: 'Deliver an executive usability report with UX wireframes and prioritized developer action points.',
      icon: <BarChart3 className="w-6 h-6 text-[#CA8A04]" />
    }
  ];

  // 3. Cutting Edge Technologies
  const cuttingEdgeTechList = [
    {
      id: 'data-science',
      title: 'Data Science',
      desc: 'Our services, which range from big data solutions to predictive analytics, enable you to find hidden trends, streamline processes, and make data-driven choices that advance your company.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="22" cy="22" rx="19" ry="8" transform="rotate(30 22 22)" />
          <ellipse cx="22" cy="22" rx="19" ry="8" transform="rotate(-30 22 22)" />
          <circle cx="22" cy="22" r="3.5" fill="#0084D1" />
          <circle cx="10" cy="15" r="1.5" fill="#0084D1" />
          <circle cx="34" cy="29" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      desc: 'With the help of our cloud software solutions, your company may run more adaptable and resiliently, thanks to their smooth migration, strong infrastructure, and affordable administration.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 26A8 8 0 0 1 20 12a10 10 0 0 1 18 4 6 6 0 0 1-2 10H14z" />
          <rect x="8" y="29" width="14" height="9" rx="2" />
          <rect x="25" y="29" width="14" height="9" rx="2" />
          <path d="M15 26v3M32 26v3" />
        </svg>
      )
    },
    {
      id: 'ar-vr',
      title: 'AR/VR',
      desc: 'We create software that provides a feeling of realism that spans the actual and digital worlds, whether it is used for interactive marketing, immersive training, or other purposes.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="10" width="30" height="24" rx="4" />
          <circle cx="17" cy="22" r="4.5" />
          <circle cx="27" cy="22" r="4.5" />
          <path d="M17 18v8M27 18v8" strokeLinecap="round" />
          <path d="M21 22h2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      desc: 'We provide automated visual inspection algorithms, pixel-to-pixel regression frameworks, real-time object tracking, and deep image analysis to guarantee flawless user experiences.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="32" height="22" rx="3" />
          <circle cx="22" cy="19" r="6" />
          <circle cx="22" cy="19" r="2.5" fill="#0084D1" />
          <path d="M16 35h12M22 30v5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'ai-ml',
      title: 'AI / Machine Learning',
      desc: 'Leverage self-healing test automation, intelligent defect prediction, synthetic test data generation, and LLM-powered test script synthesis for high-speed delivery pipelines.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="12" y="12" width="20" height="20" rx="3" />
          <path d="M18 12V6M26 12V6M18 38v-6M26 38v-6M12 18H6M12 26H6M38 18h-6M38 26h-6" strokeLinecap="round" />
          <circle cx="22" cy="22" r="3.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 'iot',
      title: 'IoT Testing',
      desc: 'Validate connected hardware ecosystems with stress testing across Bluetooth, MQTT, and Wi-Fi communication protocols, firmware security checks, and hardware latency simulations.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-9 h-9 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="22" cy="22" r="4" fill="#0084D1" />
          <path d="M13 13a13 13 0 0 1 18 0M8 8a20 20 0 0 1 28 0M13 31a13 13 0 0 0 18 0M8 36a20 20 0 0 0 28 0" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  // 4. QA Tech Stack
  const qaServiceTechStack = [
    {
      category: 'Test Automation Frameworks',
      pills: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'Robot Framework', 'RestAssured', 'Karate']
    },
    {
      category: 'Performance & Load Testing',
      pills: ['Apache JMeter', 'k6', 'Gatling', 'LoadRunner', 'Locust', 'ApacheBench']
    },
    {
      category: 'Security & Penetration Tools',
      pills: ['OWASP ZAP', 'Burp Suite', 'AppScan', 'HP Fortify', 'SonarQube', 'Snyk']
    },
    {
      category: 'API & Microservice Testing',
      pills: ['Postman', 'SoapUI', 'Swagger / OpenAPI', 'Newman', 'Pact (Contract Testing)']
    },
    {
      category: 'CI/CD & Cloud Device Farms',
      pills: ['BrowserStack', 'Sauce Labs', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'Docker']
    },
    {
      category: 'Defect Tracking & Test Management',
      pills: ['Jira Software', 'TestRail', 'Zephyr', 'Azure DevOps', 'Confluence', 'Bugzilla']
    },
    {
      category: 'Database & Backend Validation',
      pills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Kafka Streaming']
    }
  ];

  // 5. Custom FAQs tailored specifically for Software QA & Testing
  const testingQaFaqs = [
    {
      question: 'What types of software testing and QA services does Firevy.co provide?',
      answer: 'Firevy.co delivers end-to-end software quality assurance services covering Functional Testing, Performance & Load Testing, Security & Penetration Testing, Usability Testing, Cross-Platform Compatibility Testing, API Automation, Regression Testing, and Cloud CI/CD Integration.'
    },
    {
      question: 'Why should my business invest in professional QA testing services?',
      answer: 'Investing in dedicated QA testing protects brand reputation, prevents revenue loss from critical production downtime, cuts total defect resolution costs by up to 30%, and accelerates time-to-market by catching bugs before deployment.'
    },
    {
      question: 'What test automation frameworks and tools does your QA team specialize in?',
      answer: 'Our QA automation engineers are proficient in Cypress, Selenium, Playwright, Appium, JMeter, Postman, RestAssured, OWASP ZAP, AppScan, and HP Fortify, integrating seamlessly with GitHub Actions, Jenkins, and GitLab CI/CD.'
    },
    {
      question: 'Do you offer both manual testing and automated QA services?',
      answer: 'Yes! We follow a balanced hybrid testing strategy: automated regression suites for rapid continuous deployment, complemented by exploratory and manual usability testing to ensure exceptional human customer experience.'
    },
    {
      question: 'How do you ensure data confidentiality and intellectual property security?',
      answer: 'We sign comprehensive Non-Disclosure Agreements (NDAs) prior to project kick-off. All test environments use sanitized data, encrypted cloud repositories, and strict role-based access control complying with ISO 27001 and GDPR.'
    },
    {
      question: 'Can your QA engineers integrate with our existing in-house development team?',
      answer: 'Absolutely. Our QA engineers work as an extension of your team via Agile/Scrum ceremonies, daily standups, Jira/Azure DevOps sprint backlogs, and real-time Slack/Teams communication across your preferred timezone.'
    },
    {
      question: 'How quickly can Firevy.co onboard dedicated QA testers for our project?',
      answer: 'We can deploy vetted senior QA engineers or complete automated testing pods within 48 to 72 hours, backed by standard onboarding procedures and zero ramp-up downtime.'
    },
    {
      question: 'What deliverables do we receive at the conclusion of a testing sprint?',
      answer: 'You receive comprehensive test execution summaries, detailed bug logs with reproduction steps and video recordings, code coverage reports, performance latency benchmarks, and verified QA sign-off certificates.'
    }
  ];

  const handleScrollPrev = () => {
    if (techSliderRef.current) {
      techSliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollNext = () => {
    if (techSliderRef.current) {
      techSliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Best Software QA Testing Company | Quality Assurance Services | Firevy.co"
        description="As a top QA testing service provider, Firevy.co offers comprehensive software testing services to ensure your web and mobile applications are bug-free, secure, and fully functional."
        keywords="software qa testing company, quality assurance services, functional testing, performance testing, security testing, usability testing, compatibility testing"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 REFERENCE WITH BREADCRUMB & METRICS) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#EEF5FB] pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/60">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Other Services</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#005F96] font-semibold">Testing & QA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h1 className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]">
                Best Software QA Testing Company
              </h1>

              <p className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal">
                As a Top QA testing service providers, we offer the best software testing services to ensure that your web and mobile applications are bug-free, secure, and fully functional.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">80+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    Dedicated<br />QA Testers
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">1000+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    Project<br />Completed
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    5-Star Clutch<br />Reviews
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#005F96] text-white font-bold text-sm sm:text-base hover:bg-[#004A75] transition-all shadow-md hover:shadow-lg transform active:scale-95 group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Hero Meeting Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[580px] rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/qa-testing-hero.jpg"
                  alt="Software QA Testing Team Meeting"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200/60 bg-white"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGO MARQUEE (BELOW HERO) */}
      {/* ========================================================================= */}
      <div className="bg-white py-6 border-b border-slate-200/80">
        <Container>
          <BrandLogoMarquee />
        </Container>
      </div>


      {/* ========================================================================= */}
      {/* 4. FUNCTIONAL TESTING SECTION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[380px] sm:max-w-[420px] relative aspect-square flex items-center justify-center select-none p-2 sm:p-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="140" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="200" y1="200" x2="80" y2="100" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="200" y1="200" x2="320" y2="100" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="200" y1="200" x2="40" y2="200" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="200" y1="200" x2="360" y2="200" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="200" y1="200" x2="80" y2="300" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                  <line x1="200" y1="200" x2="320" y2="300" stroke="#0084D1" strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>

                <div className="relative z-10 w-32 sm:w-36 h-32 sm:h-36 rounded-full bg-white border-2 border-slate-300 shadow-xl flex flex-col items-center justify-center p-3 text-center">
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                    Functional <br /> Testing
                  </h3>
                </div>

                <div className="absolute top-[8%] left-[6%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[10px] sm:text-[10.5px] font-bold leading-tight">Testing on Main functions</span>
                </div>
                <div className="absolute top-[8%] right-[6%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[10px] sm:text-[10.5px] font-bold leading-tight">Execute The Test cases</span>
                </div>
                <div className="absolute top-[40%] left-[-2%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[10px] sm:text-[10.5px] font-bold leading-tight">Identify The Functions</span>
                </div>
                <div className="absolute top-[40%] right-[-2%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[10px] sm:text-[10.5px] font-bold leading-tight">Check the Error Conditions</span>
                </div>
                <div className="absolute bottom-[8%] left-[6%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[9.5px] sm:text-[10px] font-bold leading-tight">Checks the accessibility of the system</span>
                </div>
                <div className="absolute bottom-[8%] right-[6%] z-20 w-20 sm:w-22 h-20 sm:h-22 rounded-full bg-[#0084D1] text-white p-2 text-center flex items-center justify-center shadow-md">
                  <span className="text-[9.5px] sm:text-[10px] font-bold leading-tight">Compare output with Expected Results</span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Functional Testing
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Our experienced QA professionals implement functional testing to majorly focus on user interface, database, security, API's, client or server application and similar functionalities of the application. Validating the software system to conform each functional requirement of the application meets the expected output.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. PERFORMANCE TESTING SECTION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Performance Testing
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Finding out the bottlenecks in terms of usage loads impacting the quality and functioning of the product. Performance testing services are carried to determine how the components of a system perform under a certain condition. Resource usage, responsivity, scalability, and reliability of the product are validated under this testing. We ensure a reliable, scalable, robust and predictable application behaviour using tools like JMeter, RPT, and HP LR.
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs space-y-1">
                <div className="flex items-center space-x-2 text-[#005F96] font-bold text-xs sm:text-sm">
                  <Gauge className="w-4 h-4 shrink-0" />
                  <span>{performanceTypes[activePerfTab].name} Focus</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {performanceTypes[activePerfTab].desc}
                </p>
              </div>
            </div>

            {/* Right Graphic: Speedometer + Ascending Bars */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-[480px] bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-4">
                <div className="relative flex justify-center items-center py-1">
                  <svg className="w-40 sm:w-48 h-auto" viewBox="0 0 200 110">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E2E8F0" strokeWidth="16" strokeLinecap="round" />
                    <path d="M 20 100 A 80 80 0 0 1 140 32" fill="none" stroke="url(#perfGaugeGrad2)" strokeWidth="16" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="perfGaugeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#005F96" />
                        <stop offset="100%" stopColor="#00A3FF" />
                      </linearGradient>
                    </defs>
                    <line x1="100" y1="100" x2="135" y2="45" stroke="#0084D1" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="100" cy="100" r="8" fill="#1E293B" />
                  </svg>
                </div>

                <div className="grid grid-cols-6 gap-2 sm:gap-3 items-end h-28 sm:h-32 pt-2 px-2 border-b border-slate-300">
                  {performanceTypes.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActivePerfTab(idx)}
                      className="h-full flex flex-col justify-end items-center cursor-pointer"
                    >
                      <div
                        style={{ height: item.height }}
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          activePerfTab === idx ? 'bg-[#005F96] shadow-md' : 'bg-[#0084D1]/80 hover:bg-[#005F96]'
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-6 gap-1 text-center">
                  {performanceTypes.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePerfTab(idx)}
                      className={`text-[9px] sm:text-[9.5px] font-bold leading-tight ${activePerfTab === idx ? 'text-[#005F96]' : 'text-slate-600'}`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECURITY TESTING SECTION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[380px] sm:max-w-[420px] relative aspect-square flex items-center justify-center p-2 sm:p-4 select-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="145" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 6" />
                </svg>

                <div className="relative z-10 w-28 sm:w-32 h-32 sm:h-36 flex flex-col items-center justify-center text-center">
                  <div className="w-16 sm:w-20 h-20 sm:h-24 rounded-b-2xl bg-gradient-to-b from-[#78350F] via-[#92400E] to-[#451A03] flex items-center justify-center shadow-lg border-2 border-amber-300/60 text-white">
                    <Lock className="w-8 sm:w-9 h-8 sm:h-9 text-amber-300 drop-shadow" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-800 mt-2">Security Testing</span>
                </div>

                <div className="absolute top-[3%] left-[50%] -translate-x-1/2 z-20 flex flex-col items-center">
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 mb-1">Define Scope</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Search className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </div>

                <div className="absolute top-[20%] right-[3%] z-20 flex flex-col items-center">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Server className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mt-1">Information Gathering</span>
                </div>

                <div className="absolute bottom-[22%] right-[5%] z-20 flex flex-col items-center">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <FileText className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mt-1">Planning & Analysis</span>
                </div>

                <div className="absolute bottom-[2%] right-[28%] z-20 flex flex-col items-center">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Search className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mt-1">Vulnerability Detection</span>
                </div>

                <div className="absolute bottom-[20%] left-[6%] z-20 flex flex-col items-center">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mt-1">Penetration Testing</span>
                </div>

                <div className="absolute top-[36%] left-[0%] z-20 flex flex-col items-center">
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mb-1">Report & Analysis</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </div>

                <div className="absolute top-[16%] left-[8%] z-20 flex flex-col items-center">
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-800 mb-1">Remediation Testing</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Security Testing
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Security testing has become one of the most essential prerequisites for an organization. For effective security testing Firevy has implemented the latest industry standards and testing methodologies which uses the tools like AppScan, HP Fortify and so on. Our talented pool of test engineers performs risk assessment and penetration testing to shield application from hackers or malicious threats by detecting all possible security risks in the system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. USABILITY TESTING SECTION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Usability Testing
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Poor usability can affect your customer loyalty, putting a direct impact on your sales and brand reputation. Firevy team of Usability experts will help you with in-depth analysis of user behavior patterns, identifies potential usability issues with the user-experience of your application and come up with a Usability test strategy based on the type of users, demographics, key business scenarios, etc.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-2 items-center text-center">
                {usabilitySteps.map((step, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/90 shadow-xs flex flex-col items-center justify-between min-h-[125px] sm:min-h-[135px]">
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-1.5">
                      {step.icon}
                    </div>
                    <span className="text-[11px] sm:text-[11.5px] font-bold text-slate-800 leading-snug">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center font-bold text-slate-700 text-xs sm:text-sm mt-3 tracking-wide">
                Usability Testing
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. COMPATIBILITY TESTING SECTION */}
      {/* ========================================================================= */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[380px] sm:max-w-[420px] relative aspect-square flex items-center justify-center p-2 sm:p-4 select-none">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="145" fill="none" stroke="#94A3B8" strokeWidth="1.8" />
                  <line x1="200" y1="200" x2="200" y2="55" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="315" y2="95" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="345" y2="200" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="315" y2="305" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="200" y2="345" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="85" y2="305" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="55" y2="200" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="200" y1="200" x2="85" y2="95" stroke="#94A3B8" strokeWidth="1.2" />
                </svg>

                <div className="relative z-10 w-36 sm:w-40 h-32 sm:h-36 bg-white rounded-xl border border-slate-200 shadow-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                  <div className="flex items-end justify-center space-x-1.5 mb-1.5">
                    <Monitor className="w-8 sm:w-9 h-8 sm:h-9 text-slate-700" />
                    <Tablet className="w-6 sm:w-7 h-6 sm:h-7 text-slate-600" />
                    <Smartphone className="w-4 sm:w-5 h-4 sm:h-5 text-slate-500" />
                  </div>
                  <span className="text-[11.5px] sm:text-xs font-extrabold text-slate-900 leading-tight">
                    Compatibility Testing
                  </span>
                </div>

                <div className="absolute top-[8%] left-[10%] z-20 flex items-center space-x-1.5">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Browser</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Globe className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                </div>

                <div className="absolute top-[8%] right-[10%] z-20 flex items-center space-x-1.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Smartphone className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Devices</span>
                </div>

                <div className="absolute top-[42%] right-[0%] z-20 flex items-center space-x-1.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Monitor className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 max-w-[55px] leading-tight">Operating System</span>
                </div>

                <div className="absolute bottom-[18%] right-[5%] z-20 flex items-center space-x-1.5">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Radio className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Network</span>
                </div>

                <div className="absolute bottom-[0%] left-[50%] -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md mb-1">
                    <Smartphone className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Mobile</span>
                </div>

                <div className="absolute bottom-[18%] left-[5%] z-20 flex items-center space-x-1.5">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Versions</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Layers className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                </div>

                <div className="absolute top-[42%] left-[0%] z-20 flex items-center space-x-1.5">
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700">Software</span>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-[#0084D1] text-white flex items-center justify-center shadow-md">
                    <Server className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Compatibility Testing
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-normal">
                Firevy provides complete Compatibility Testing services across a variety of hardware, operating system, servers, browsers, databases, different versions, configurations, display resolutions, etc. We have compatibility lab covering the latest operating systems, platforms, peripherals and hardware to ensure that your software or application can work on wide range of technical specifications without flaws.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. CLUTCH TOP RATED BANNER (IMAGE 4 BOTTOM) */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 10. GET 100% CUSTOMIZABLE QA TESTING SERVICES (QUOTE CALLOUT) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Get 100% Customizable QA Testing Services From Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Quote Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#F0F7FD] rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-sm overflow-hidden min-h-[320px] flex flex-col justify-between text-left">
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#005F96] flex items-center justify-center shadow-md border border-blue-100">
                    <Quote className="w-7 h-7 fill-[#005F96]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#005F96] leading-[1.3] tracking-tight">
                    Affordable QA Testing Services for Customer Experience
                  </h3>
                </div>
                <div className="relative z-10 pt-6 border-t border-blue-200/50 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Firevy QA Framework</span>
                  <span className="text-[#005F96]">30% Cost Reduction</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Copy */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                According to the World Quality Report, ensuring a seamless customer experience is now a top QA priority for executive management. Our offshore software testing services focus on the role of software quality in improving the customer experience. Hire expert software testers to get reliable and proprietary tools and software testing frameworks that become industry standards.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Our QA software testing company ensures quality transformation that acknowledges your need for speed-to-market. As a software testing services company, we are a dependable partner in exceeding your own digital quality benchmarks. Clients who use our quality assurance testing services get benefit by reducing in total testing costs of up to 30% and get at least a 15% reduction in time-to-market.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. CUTTING-EDGE TECHNOLOGIES FIREVY USE (IMAGE 5 & 6) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Cutting-Edge Technologies Firevy Use for Software Development
            </h2>
          </div>

          <div
            ref={techSliderRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory text-left scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuttingEdgeTechList.map((item) => (
              <div
                key={item.id}
                className="w-[290px] sm:w-[340px] shrink-0 snap-start bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-[#E0F2FE]/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handleScrollPrev}
              aria-label="Previous technologies"
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollNext}
              aria-label="Next technologies"
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. OUR PREMIUM SERVICES (EXACT 1:1 IT CONSULTING SECTION) */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 13. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 14. SAPPHIRE CUSTOM IT SERVICE / QA TESTING */}
      {/* ========================================================================= */}
      <CustomItServicesSection companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 15. SECTORS THRIVING THROUGH BESPOKE SERVICE DEVELOPMENT */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy’s Bespoke Software Testing & QA Development" />

      {/* ========================================================================= */}
      {/* 16. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use Software QA & Testing Development" />

      {/* ========================================================================= */}
      {/* 17. EXPERTISE IN OUR QA & TESTING SERVICES */}
      {/* ========================================================================= */}
      <ExpertiseItConsultingSection />

      {/* ========================================================================= */}
      {/* 18. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 19. WHAT OUR CLIENTS SAY */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 20. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 21. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 22. TECHNOLOGY STACK THAT IT SERVICE DEVELOPERS USE PROFICIENTLY */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Firevy QA & Software Testing Engineers Use Proficiently"
        rows={qaServiceTechStack}
      />

      {/* ========================================================================= */}
      {/* 23. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 24. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 25. EXPLORE THE TRANSFORMATIVE IMPACT OF SERVICE DEVELOPMENT */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Explore The Transformative Impact Of QA & Software Testing On Your Business Success"
      />

      {/* ========================================================================= */}
      {/* 26. ABOUT US */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 27. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 28. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 29. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 30. OUR STORY, THEIR WORDS */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 31. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below"
        faqs={testingQaFaqs}
      />

      {/* ========================================================================= */}
      {/* 32. WHAT SETS US APART AS SOFTWARE TESTING & QA SERVICES DEVELOPMENT? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart In Software Testing & QA Services?"
        subtitle="Being unique is our quality! Firevy believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end QA support."
      />

      {/* ========================================================================= */}
      {/* 33. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 34. HAVE SOFTWARE TESTING & QA CHALLENGE TO ADDRESS ? */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Software Testing & QA Services Challenge To Address ?"
        subtitle="Get access to top Software Testing & QA engineers to transform your ideas into a robust, bug-free application."
        buttonText="Hire QA Now"
      />

      {/* ========================================================================= */}
      {/* 35. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />

      {/* ========================================================================= */}
      {/* CONSULTATION ANCHOR */}
      {/* ========================================================================= */}
      <div id="consultation-form" />
    </div>
  );
};

export default TestingQaService;
