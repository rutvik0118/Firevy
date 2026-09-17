import React, { useState } from 'react';
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
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  Star,
  ChevronDown,
  Building2,
  Server,
  Cloud,
  Cpu,
  Lock,
  RefreshCw,
  BarChart3,
  Layers,
  Users,
  Award,
  Globe,
  Database,
  Code2,
  TrendingUp,
  Clock,
  Compass,
  FileCode,
  Shield,
  Bot,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  ChevronRight,
  ExternalLink,
  Laptop,
  CheckSquare,
  ArrowLeft,
  Quote,
  Trophy
} from 'lucide-react';

export const ItConsultingServices = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cloud');
  const [activeDomainTab, setActiveDomainTab] = useState('cloud');
  const [cuttingEdgeIndex, setCuttingEdgeIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'IT Strategy & Roadmapping',
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
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: 'IT Strategy & Roadmapping',
        budget: '$25,000 - $50,000',
        message: ''
      });
    }, 4000);
  };

  // 1. Hero Highlights
  const heroStats = [
    { value: '23+', label: 'Years Experience' },
    { value: '2800+', label: 'Global Clients' },
    { value: '1500+', label: 'Projects Delivered' },
    { value: '4.9/5', label: 'Clutch & GoodFirms' }
  ];

  // 2. Core IT Consulting Services
  const coreServices = [
    {
      icon: RefreshCw,
      title: 'Digital Transformation Consulting',
      desc: 'Re-engineer core enterprise workflows, digitize customer touchpoints, and implement agile development methodologies to accelerate innovation and market agility.'
    },
    {
      icon: Cloud,
      title: 'Cloud Strategy & Migration',
      desc: 'Formulate reliable multi-cloud migration blueprints for AWS, Azure, and Google Cloud. Implement serverless architectures, multi-region failover, and FinOps cost governance.'
    },
    {
      icon: Layers,
      title: 'Enterprise Architecture Design',
      desc: 'Architect resilient, scalable microservices, event-driven data streaming pipelines, and modular API ecosystems built for high-throughput enterprise concurrency.'
    },
    {
      icon: Zap,
      title: 'DevOps & CI/CD Enablement',
      desc: 'Implement automated Infrastructure as Code (Terraform), container orchestration (Kubernetes & Docker), and automated zero-downtime deployment pipelines.'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity, Governance & Risk',
      desc: 'End-to-end vulnerability assessments, Zero-Trust network architecture, and regulatory compliance advisory across HIPAA, SOC 2, GDPR, and PCI-DSS.'
    },
    {
      icon: DollarSign,
      title: 'IT Cost & License Optimization',
      desc: 'Audit software licenses, eliminate redundant cloud spend, optimize database queries, and reduce overall infrastructure Total Cost of Ownership (TCO) by up to 40%.'
    }
  ];

  // 3. Why Choose Us Features
  const whyChooseUs = [
    {
      icon: Award,
      title: '23+ Years Domain Expertise',
      desc: 'Over two decades of proven experience delivering mission-critical technology solutions to Fortune 500s and high-growth innovators worldwide.'
    },
    {
      icon: Users,
      title: 'Principal Architects & Advisors',
      desc: 'Work directly with certified cloud architects, cybersecurity leaders, and enterprise engineers with battle-tested industry experience.'
    },
    {
      icon: Compass,
      title: '100% Vendor-Agnostic Advice',
      desc: 'We offer unbiased, objective recommendations tailored strictly to your technical requirements, security boundaries, and budgetary objectives.'
    },
    {
      icon: Zap,
      title: 'Agile & Collaborative Sprints',
      desc: 'Iterative consulting milestones with actionable documentation, clear architectural diagrams, and bi-weekly executive check-ins.'
    },
    {
      icon: Lock,
      title: 'Guaranteed IP & Strict NDA',
      desc: 'Complete intellectual property protection backed by comprehensive NDAs. All blueprints, codebases, and assets remain 100% your property.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Business ROI',
      desc: 'We focus on tangible outcomes: lowered infrastructure spend, reduced latency, improved uptime SLAs, and faster time-to-market.'
    }
  ];

  // 4. Specialized Domains
  const domainTabs = [
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'arch', label: 'Software Architecture' },
    { id: 'security', label: 'Cybersecurity & Risk' },
    { id: 'devops', label: 'DevOps & CI/CD' },
    { id: 'data', label: 'Data & AI Readiness' },
    { id: 'erp', label: 'Enterprise Systems' }
  ];

  const domainContent = {
    cloud: {
      title: 'End-to-End Cloud Strategy, FinOps & Multi-Cloud Adoption',
      desc: 'Navigate your cloud journey with certainty. We assess legacy workloads, formulate cloud migration strategies, and implement cost-effective multi-cloud infrastructure across AWS, Microsoft Azure, and Google Cloud Platform.',
      features: [
        'Cloud Readiness & Total Cost of Ownership (TCO) Assessment',
        'Multi-Cloud & Hybrid Cloud Architecture Design',
        'FinOps Governance to eliminate wasteful cloud compute spending',
        'High-Availability & Disaster Recovery (DR) Plan Formulation'
      ],
      tag: 'Cloud Advisory'
    },
    arch: {
      title: 'Modernizing Monoliths into Agile, High-Scale Microservices',
      desc: 'Our enterprise software architects decouple legacy monolithic systems into maintainable, distributed microservices, domain-driven designs, and high-performance event streams.',
      features: [
        'Domain-Driven Design (DDD) & API-First Architecture',
        'Legacy Code Modernization & Technical Debt Reduction',
        'Distributed Caching & High-Concurrency Database Sharding',
        'Performance Auditing, Bottleneck Profiling & Latency Tuning'
      ],
      tag: 'Architecture Advisory'
    },
    security: {
      title: 'Enterprise Security Posture, Compliance & Threat Mitigation',
      desc: 'Safeguard your critical enterprise data and digital assets. We audit security architectures, identify vulnerabilities, and construct Zero-Trust defenses against sophisticated cyber threats.',
      features: [
        'Zero-Trust Network Architecture & Identity Management (IAM)',
        'HIPAA, GDPR, SOC 2 Type II, and PCI-DSS Compliance Audits',
        'Vulnerability Assessment & Penetration Testing (VAPT)',
        'Proactive Incident Response & Data Recovery Protocols'
      ],
      tag: 'Security & Compliance'
    },
    devops: {
      title: 'Streamlining CI/CD Pipelines & Cloud-Native Automation',
      desc: 'Transform your software delivery lifecycle with automated deployment pipelines, container orchestration, and Infrastructure as Code for friction-free releases.',
      features: [
        'Infrastructure as Code (IaC) with Terraform & CloudFormation',
        'Kubernetes Cluster Orchestration, Helm Charts & Service Mesh',
        'Automated Testing Integration & GitOps Deployment Workflows',
        'Observability, Prometheus Monitoring & 24/7 SLA Telemetry'
      ],
      tag: 'DevOps Engineering'
    },
    data: {
      title: 'Data Infrastructure Modernization & Enterprise AI Enablement',
      desc: 'Unlock business value from your data assets. We design scalable data lakes, streaming ETL pipelines, and enterprise-grade generative AI & LLM architectures.',
      features: [
        'Modern Data Warehouse Design (Snowflake, BigQuery, Redshift)',
        'Real-time Event Streaming with Apache Kafka & Spark',
        'Enterprise LLM & RAG System Feasibility and Implementation',
        'Data Governance, Privacy & Role-Based Access Control'
      ],
      tag: 'Data & AI Advisory'
    },
    erp: {
      title: 'Enterprise ERP, CRM & Business Application Integration',
      desc: 'Unify corporate operations by integrating disparate enterprise systems, modernizing core ERPs, and engineering custom middleware to automate cross-department workflows.',
      features: [
        'ERP/CRM Modernization, Customization & Cloud Migration',
        'Bespoke Middleware & Enterprise Service Bus (ESB) Development',
        'Third-Party Payment & Supply Chain API Synchronization',
        'Workflow Automation to reduce manual operational redundancies'
      ],
      tag: 'Enterprise Systems'
    }
  };

  // 5. Featured Case Studies
  const caseStudies = [
    {
      badge: 'FINTECH & BANKING',
      title: 'Cloud Cost Optimization & Multi-Region Migration for Global FinTech',
      metric: '42% Lower OPEX',
      result: 'Reduced monthly AWS expenditure by 42% while achieving 99.999% SLA uptime and sub-50ms transaction latency.',
      tech: ['AWS FinOps', 'Kubernetes', 'Terraform', 'PostgreSQL'],
      image: '/images/case_study_images/fintech_case_study.jpg'
    },
    {
      badge: 'HEALTHCARE & MEDTECH',
      title: 'HIPAA-Compliant Microservices Overhaul for Telehealth Network',
      metric: '4x Faster Retrieval',
      result: 'Re-architected monolithic patient records database into secure microservices, achieving zero breaches and seamless EHR integration.',
      tech: ['Zero-Trust', 'FastAPI', 'Docker', 'FHIR Protocol'],
      image: '/images/case_study_images/healthcare_case_study.jpg'
    },
    {
      badge: 'LOGISTICS & SUPPLY CHAIN',
      title: 'Real-Time Fleet Telemetry & IoT Architecture for Enterprise Carrier',
      metric: '60% Latency Drop',
      result: 'Designed distributed event-streaming architecture handling 15M+ daily GPS pings with real-time route optimization.',
      tech: ['Apache Kafka', 'Go', 'Redis Cluster', 'Google Cloud'],
      image: '/images/case_study_images/logistics_case_study.jpg'
    }
  ];

  // 6. Business Benefits
  const businessBenefits = [
    {
      num: '01',
      title: 'Accelerated Time-to-Market',
      desc: 'Deploy software releases up to 40% faster by adopting standardized architectural blueprints, automated CI/CD pipelines, and agile governance.'
    },
    {
      num: '02',
      title: 'Substantial Cost Reduction',
      desc: 'Eliminate idle cloud compute resources, renegotiate expensive vendor licensing, and streamline development overhead for maximum ROI.'
    },
    {
      num: '03',
      title: 'Fortified Security & Compliance',
      desc: 'Mitigate costly data breach liabilities with Zero-Trust network segmentation, proactive vulnerability patching, and certified compliance.'
    },
    {
      num: '04',
      title: 'Elastic Scalability & Reliability',
      desc: 'Prepare your digital ecosystem to handle 10x traffic surges effortlessly with container auto-scaling and multi-zone failover redundancy.'
    },
    {
      num: '05',
      title: 'Elimination of Technical Debt',
      desc: 'Refactor brittle legacy systems into clean, well-documented microservices that empower developers rather than slowing them down.'
    },
    {
      num: '06',
      title: 'Empowered Engineering Teams',
      desc: 'Upskill your internal software teams through collaborative consulting workshops, architecture playbooks, and modern engineering standards.'
    }
  ];

  // 7. Technology Tabs
  const techCategories = {
    cloud: [
      { name: 'Amazon Web Services', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud Platform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ],
    backend: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'Go (Golang)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ],
    database: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
      { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' }
    ],
    devops: [
      { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
      { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
      { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
      { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
      { name: 'ArgoCD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg' }
    ]
  };

  // 8. Engagement Models
  const engagementModels = [
    {
      title: 'Fractional CTO & Strategic Advisory',
      badge: 'EXECUTIVE ADVISORY',
      desc: 'On-demand senior technology leadership for architecture vetting, investor due diligence, and tech roadmapping.',
      points: [
        'Dedicated Principal Architect guidance',
        'Bi-weekly strategic alignment sessions',
        'Board & stakeholder presentation support',
        'Flexible monthly retainer model'
      ],
      ideal: 'Startups & Scaleups needing executive tech guidance'
    },
    {
      title: 'Project-Based IT Consulting',
      badge: 'FIXED SCOPE & DELIVERABLES',
      desc: 'Milestone-based advisory for specific initiatives such as cloud migration, security audits, or database re-architecting.',
      points: [
        'Clear milestone-driven deliverables',
        'Comprehensive technical documentation',
        'Risk & timeline guarantees',
        'Pre-agreed transparent pricing'
      ],
      ideal: 'Companies with specific, well-defined modernization scopes'
    },
    {
      title: 'Dedicated IT Advisory Squad',
      badge: 'INTEGRATED POD',
      desc: 'A cross-functional pod of senior architects, DevOps specialists, and security engineers embedded in your team.',
      points: [
        'Full-time senior engineering specialists',
        'Direct daily collaboration in Slack/Jira',
        'Continuous sprint velocity & governance',
        'Seamless scaling of squad capacity'
      ],
      ideal: 'Enterprises undertaking multi-year digital transformation'
    },
    {
      title: 'Subject Matter Expert Augmentation',
      badge: 'ON-DEMAND SPECIALISTS',
      desc: 'Rapidly onboard specialized consultants (e.g. Kubernetes, AWS FinOps, Kafka) to solve high-impact bottlenecks.',
      points: [
        '48-hour rapid expert onboarding',
        'Deep niche technical expertise',
        'Zero long-term hiring overhead',
        'Hourly or sprint-based flex billing'
      ],
      ideal: 'Engineering teams with acute technical bottlenecks'
    }
  ];

  // 9. Process Steps
  const consultingSteps = [
    {
      step: '01',
      title: 'Discovery & Current-State Audit',
      desc: 'Deep-dive technical assessment of your current infrastructure, architecture diagrams, codebases, licensing costs, and operational bottlenecks.'
    },
    {
      step: '02',
      title: 'Gap Analysis & Risk Profiling',
      desc: 'Identifying security vulnerabilities, latency hotspots, technical debt traps, and misalignment between IT capabilities and business KPIs.'
    },
    {
      step: '03',
      title: 'Strategic Blueprint & Roadmap',
      desc: 'Formulating comprehensive, vendor-agnostic architecture recommendations, cloud topology blueprints, and phased implementation schedules.'
    },
    {
      step: '04',
      title: 'Proof of Concept (PoC) Validation',
      desc: 'Building targeted, functional prototypes to validate throughput, cost savings, and architectural feasibility before major capital commitment.'
    },
    {
      step: '05',
      title: 'Guided Execution & Change Management',
      desc: 'Hands-on architectural guidance, sprint pairing with in-house developers, and zero-downtime deployment orchestration.'
    },
    {
      step: '06',
      title: 'Ongoing Governance & FinOps Review',
      desc: 'Periodic architecture health checks, automated cost tracking, security patching oversight, and continuous SLA optimization.'
    }
  ];

  // 10. Industry Verticals
  const industries = [
    {
      name: 'Healthcare & Life Sciences',
      icon: ShieldCheck,
      desc: 'HIPAA-compliant EHR integrations, FHIR protocols, telehealth microservices, and secure patient data pipelines.'
    },
    {
      name: 'Banking, FinTech & Insurance',
      icon: DollarSign,
      desc: 'PCI-DSS compliance, ultra-low latency transaction processing, fraud detection pipelines, and open banking APIs.'
    },
    {
      name: 'Retail & E-Commerce',
      icon: BarChart3,
      desc: 'Headless commerce architecture, multi-warehouse inventory synchronization, and flash-sale auto-scaling.'
    },
    {
      name: 'Logistics & Supply Chain',
      icon: Globe,
      desc: 'Real-time GPS telemetry, route optimization algorithms, warehouse management systems, and IoT data pipelines.'
    },
    {
      name: 'Manufacturing & Industrial IoT',
      icon: Cpu,
      desc: 'Smart factory telemetrics, predictive equipment maintenance, SCADA integration, and edge-computing designs.'
    },
    {
      name: 'Education & EdTech',
      icon: Users,
      desc: 'High-concurrency virtual classroom infrastructure, dynamic LMS platforms, and AI-driven adaptive learning.'
    }
  ];

  // 11. Comparison Matrix
  const comparisonRows = [
    {
      feature: 'Senior Principal Architect Direct Access',
      firevy: true,
      traditionalAgency: 'Rarely (Junior devs assigned)',
      inHouse: 'Very costly to recruit & retain'
    },
    {
      feature: 'Strategy + Hands-on Engineering Execution',
      firevy: true,
      traditionalAgency: 'Advisory only (No execution)',
      inHouse: 'Limited by daily fire-fighting'
    },
    {
      feature: '100% Vendor-Agnostic Recommendations',
      firevy: true,
      traditionalAgency: 'Biased to vendor commission',
      inHouse: 'Constrained by familiar tools'
    },
    {
      feature: 'Transparent Fixed & Agile Pricing',
      firevy: true,
      traditionalAgency: 'Expensive hourly billing overruns',
      inHouse: 'Fixed high payroll & overhead'
    },
    {
      feature: 'Rapid 48-Hour Engagement Onboarding',
      firevy: true,
      traditionalAgency: 'Weeks of bureaucratic delays',
      inHouse: '3-6 months hiring cycle'
    },
    {
      feature: 'Post-Consulting SLAs & FinOps Governance',
      firevy: true,
      traditionalAgency: 'No post-project support',
      inHouse: 'Difficult with small teams'
    }
  ];

  // 12. Client Reviews
  const reviews = [
    {
      quote: "Firevy's IT consulting team helped us re-architect our core banking application into microservices. We reduced our AWS cloud bill by 42% while improving our 99.99% uptime guarantees. Outstanding technical depth and transparency!",
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'AeroPay Financial',
      rating: 5
    },
    {
      quote: 'We engaged Firevy for a comprehensive cybersecurity audit and HIPAA cloud migration. Their senior architects delivered actionable blueprints and guided our in-house engineering team seamlessly. Highly recommended!',
      name: 'Dr. Elena Rostova',
      role: 'VP of Digital Health',
      company: 'OmniHealth Solutions',
      rating: 5
    },
    {
      quote: 'The fractional CTO and architecture squad from Firevy was instrumental in scaling our e-commerce platform for Black Friday. Over 2.5 million concurrent visits with zero downtime. Exceptional consulting partner!',
      name: 'David Steinberg',
      role: 'Founder & CEO',
      company: 'Veloce Commerce',
      rating: 5
    }
  ];

  // 13. IT Consulting Specific FAQs matching Image 4
  const itConsultingFaqList = [
    {
      id: 1,
      question: 'Why should startups invest in professional IT consulting services?',
      answer: 'Startups benefit from IT consulting services by gaining expert guidance on infrastructure setup, cybersecurity, and scalable IT strategies without the cost of hiring full-time IT teams.'
    },
    {
      id: 2,
      question: 'How does an IT support company digital transformation initiatives?',
      answer: 'An IT consulting and support company accelerates digital transformation by modernizing legacy architectures, automating core business workflows, integrating cloud pipelines, and implementing agile delivery standards.'
    },
    {
      id: 3,
      question: 'What role do IT strategy consulting firms play in business innovation?',
      answer: 'IT strategy consulting firms identify disruptive technologies, design scalable technical roadmaps, align business goals with software capabilities, and de-risk major technology investments.'
    },
    {
      id: 4,
      question: 'Why are IT infrastructure consulting services critical for growing businesses?',
      answer: 'Infrastructure consulting ensures high availability, resilient microservices, zero-downtime scalability during high-traffic surges, enterprise compliance, and optimal cloud cost governance.'
    },
    {
      id: 5,
      question: 'How do software implementation consulting services minimize risks during deployment?',
      answer: 'Software implementation consultants establish rigorous CI/CD pipelines, automated testing suites, sandbox staging environments, rollback strategies, and comprehensive user acceptance testing (UAT).'
    }
  ];

  // 13. FAQs
  const faqs = [
    {
      q: 'What is the typical engagement duration for IT consulting services?',
      a: 'Engagement timelines vary based on organizational scope. A focused architecture audit or cloud assessment typically spans 2 to 4 weeks, while comprehensive digital transformation roadmapping and hands-on execution advisory ranges from 3 to 12 months. We also offer ongoing Fractional CTO retainers.'
    },
    {
      q: 'How does Firevy ensure vendor-agnostic technology recommendations?',
      a: 'We do not accept commissions, kickbacks, or exclusive licensing incentives from software vendors or cloud providers. Our architectural evaluations are strictly grounded in your technical throughput requirements, existing skillsets, security compliance regulations, and total cost of ownership.'
    },
    {
      q: 'Can Firevy consultants assist with actual hands-on code and cloud implementation?',
      a: 'Yes. Unlike traditional advisory firms that only deliver slide decks, Firevy pairs strategic consultants with vetted senior engineers and DevOps architects who can directly build prototypes, configure cloud infrastructure, and pair-program alongside your internal team.'
    },
    {
      q: 'How quickly can our organization begin working with your IT consultants?',
      a: 'We can typically kick off initial technical discovery within 48 to 72 hours of signing our mutual Non-Disclosure Agreement (NDA). Dedicated architecture squads can be fully mobilized within one to two weeks.'
    },
    {
      q: 'How do you safeguard our proprietary intellectual property and data?',
      a: 'Before any sensitive data or repository access is granted, we execute comprehensive mutual NDAs. All architectural diagrams, source code, and configuration scripts generated during the consulting engagement remain 100% your exclusive intellectual property.'
    },
    {
      q: 'What deliverables will we receive from an IT consulting engagement?',
      a: 'Deliverables typically include comprehensive Current-State Technical Audits, Future-State Architectural Blueprints, Cloud Topology Diagrams, Infrastructure as Code (IaC) templates, FinOps Cost Optimization Reports, and prioritized step-by-step engineering roadmaps.'
    }
  ];

  // 14. Related Blogs
  const blogs = [
    {
      title: 'Top 7 Cloud Modernization Traps and How Enterprise Architects Avoid Them',
      category: 'Cloud Architecture',
      readTime: '6 min read',
      date: 'Sep 12, 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Microservices vs. Modular Monoliths: A Practical Decision Framework',
      category: 'Enterprise Engineering',
      readTime: '8 min read',
      date: 'Aug 28, 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'FinOps in Action: How to Reduce Enterprise AWS & Azure Costs by 40%',
      category: 'IT Strategy',
      readTime: '5 min read',
      date: 'Aug 14, 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const itServiceTechStack = [
    {
      category: 'Frontend',
      pills: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Vue.js', 'Bootstrap', 'Typescript', 'Backbone.js']
    },
    {
      category: 'Full-stack Frameworks',
      pills: ['NestJS', 'Koa.js', 'Nuxt.js', 'MeteorJS', 'Next.js']
    },
    {
      category: 'Backend Frameworks',
      pills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'Django', 'Flask', 'FastAPI']
    },
    {
      category: 'Monitoring and Logging Tools',
      pills: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana']
    },
    {
      category: 'Code Management',
      pills: ['Bitbucket', 'GitHub', 'GitLab', 'SonarQube', 'maven', 'Gradle']
    },
    {
      category: 'Database',
      pills: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
    },
    {
      category: 'Cloud',
      pills: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)']
    }
  ];

  const cuttingEdgeTech = [
    {
      title: 'MEAN Stack App Development',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="26" rx="4" />
          <path d="M 12 14 H 36" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="16" cy="11" r="1" fill="currentColor" />
          <path d="M 16 26 L 20 22 L 16 18" />
          <path d="M 24 26 H 32" />
        </svg>
      ),
      desc: 'When it comes to MEAN Stack development services, we are a reliable partner. Our team is skilled in using frameworks like AngularJS and Mongoose to create web apps that have several features and perform very well.'
    },
    {
      title: 'Fast API Development',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="10" width="36" height="24" rx="4" />
          <path d="M 20 18 L 28 22 L 20 26 Z" fill="currentColor" />
          <path d="M 24 34 V 40 M 16 40 H 32" />
        </svg>
      ),
      desc: 'Our group specializes in creating dynamic, high-performing online apps by using the FastAPI framework. Utilizing the newest Python frameworks, we guarantee that your project shines in terms of functionality, user experience, and smooth integration thanks to our knowledge of tools like Pydantic and Starlette.'
    },
    {
      title: 'Django App Development',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="8" width="36" height="24" rx="4" />
          <circle cx="24" cy="20" r="5" />
          <path d="M 24 13 V 15 M 24 25 V 27 M 17 20 H 19 M 29 20 H 31" />
          <path d="M 24 32 V 40 M 14 40 H 34" />
        </svg>
      ),
      desc: 'View our Django development services, where we create robust, effective online applications using the Django framework. Our services are made to improve your online solutions, making them more dependable and speedier from the ground up.'
    },
    {
      title: 'Laravel App Development',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
          <path d="M 24 6 V 42 M 8 15 L 24 24 L 40 15" />
        </svg>
      ),
      desc: 'With our Laravel development services, take your business to 2026. We are a reliable Laravel consulting company with tech experts who use the power of the framework to build powerful web applications with modern architecture and high security.'
    },
    {
      title: 'MERN Stack Development',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="6" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(30 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-30 24 24)" />
        </svg>
      ),
      desc: 'Build scalable web applications using MongoDB, Express, React, and Node.js with high performance, dynamic user interfaces, and seamless REST/GraphQL API integration.'
    },
    {
      title: 'Spring Boot Microservices',
      icon: (
        <svg className="w-8 h-8 text-[#005F96]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="12" rx="3" />
          <rect x="8" y="24" width="32" height="12" rx="3" />
          <circle cx="14" cy="14" r="1.5" fill="currentColor" />
          <circle cx="14" cy="30" r="1.5" fill="currentColor" />
          <line x1="20" y1="14" x2="34" y2="14" />
          <line x1="20" y1="30" x2="34" y2="30" />
        </svg>
      ),
      desc: 'Enterprise Java backend architectures built for resilient distributed workloads, banking-grade security, and high-volume transaction throughput.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="IT Consulting Services | Strategic Technology Advisory | Firevy.co"
        description="Transform your business with expert IT consulting services from Firevy.co. Enterprise architecture, cloud migration, cybersecurity, DevOps, and digital transformation roadmaps."
        keywords="IT consulting services, technology consulting, cloud advisory, enterprise architecture, digital transformation, IT roadmap, cybersecurity audit, DevOps consulting"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (1:1 SAPPHIRE IT CONSULTING REFERENCE) */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#EEF5FB] pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/60">
        <Container>
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-500 mb-6 font-medium">
            <Link to="/" className="hover:text-[#005F96] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link to="/services" className="hover:text-[#005F96] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-600">Tech Consulting Services</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-[#005F96] font-semibold">IT Consulting Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2]"
              >
                IT Consulting Services in USA
              </h1>

              <p
                className="text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed font-normal"
              >
                Many firms depend on IT consulting services to stay up with today's rapidly changing IT world. Whether it's infrastructure, security, cloud, or digital transformation, having the right IT partner is critical for business success.
              </p>

              {/* Stats Bar (Exact 1:1 Sapphire Reference) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">200+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    Dedicated<br />Developers
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">20+</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-snug">
                    Fortunes 500<br />Companies
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">2800+</div>
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

            {/* Right Hero Meeting Illustration (Exact Sapphire 1:1 Scene) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[620px] rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/it_consulting_hero_meeting.jpg"
                  alt="IT Consulting Services Team Meeting"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200/60 bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/c_sharp_developer_illustration.png";
                  }}
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
      {/* 2. TOP-NOTCH IT SERVICES AND CONSULTING COMPANY (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic: Modern Office Meeting Illustration with City View */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[580px] rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/top_notch_it_consulting_office.jpg"
                  alt="Top-Notch IT Services And Consulting Company Meeting"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200/70 bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/ai_delivering_services_illustration.jpg";
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <h2
                className="text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-snug tracking-tight"
              >
                Top-Notch IT Services And Consulting Company
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                If you cannot respond fast and appropriately, you run the danger of being passed by your rivals, who are making the most of the opportunities presented by technology. Best IT consulting firms for Startups play a significant role in the strategic planning process for many businesses. Engaging the services of an IT services and consulting company, whether for a one-time project or ongoing strategic advice, such as that provided by our global IT consulting services, could be the missing piece of the puzzle if you feel your organization lacks internal expertise. Get in touch with us and set up an exploratory conversation so that we can demonstrate how our IT service company can assist you in meeting the requirements of your business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRIEF ABOUT OUR IT CONSULTING SERVICES (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2
                className="text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-snug tracking-tight"
              >
                Brief About Our IT Consulting Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Our IT experts help discover and eliminate network and system security risks. They collaborate with your team to build procedures and policies that improve ongoing security. The Best Tech Consulting Company will provide an exact estimate of the cost of the IT Consulting Services In USA in advance. Once the project is complete, you are not required to retain the expert on staff.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Engaging IT consulting services in the UK for specialized projects allows your staff to concentrate on essential business processes and goals while leveraging the expertise of a Affordable IT Consultant for App or Web Development.
              </p>
            </div>

            {/* Right Graphic: Video Conference Presentation Scene */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[580px] rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/it_consulting_brief_videocall.jpg"
                  alt="Brief About Our IT Consulting Services"
                  className="w-full h-auto object-contain rounded-xl shadow-lg border border-slate-200/70 bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/c_sharp_developer_illustration.png";
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. AWARDS & RECOGNITION RIBBON (CLUTCH TOP RATED - 1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE IT CONSULTING SERVICES (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Get 100% Customizable IT Consulting Services From Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Quote Callout Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#F0F7FD] rounded-2xl p-8 sm:p-10 border border-blue-100/80 shadow-sm overflow-hidden min-h-[320px] flex flex-col justify-between">
                {/* Background Subtle Contour Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#005F96] flex items-center justify-center shadow-md border border-blue-100">
                    <Quote className="w-7 h-7 fill-[#005F96]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#005F96] leading-[1.3] tracking-tight">
                    Build Resilience, And Create New Efficiencies.
                  </h3>
                </div>

                <div className="relative z-10 pt-6 border-t border-blue-200/50 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span>Firevy Advisory Framework</span>
                  <span className="text-[#005F96]">100% Tailored</span>
                </div>
              </div>
            </div>

            {/* Right Detailed Copy */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                As a leading IT Consulting Firm, our endeavor assists customers in selecting both cost- and time-efficient IT business solutions and avoiding the pitfalls associated with current technological trends. Because we base every solution and advice we provide on our understanding of the market, you can focus on running your company confidently, knowing that our Business Consultant Services will guide you in making the appropriate IT choices. Additionally, we offer expert digital transformation consulting services that help businesses optimize their digital investments for maximum ROI.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                Our Information Technology (IT) Consulting Services team keeps current on developing the newest frameworks and platforms by continually monitoring industry advancements. Because our Technology Consultants have certifications in a variety of platforms, you can be confident that the quality of our Top IT consulting Company for Development business will meet your expectations. Have a conversation with our IT consulting company to learn more about how our Business Consultant Services may assist you with your IT Strategy and Roadmap. We also specialize in enterprise IT consulting for businesses aiming to scale operations, improve security, and modernize IT environments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING-EDGE TECHNOLOGIES WE USE (1:1 SAPPHIRE REFERENCE) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Cutting-Edge Technologies Firevy Use for IT Service Development
            </h2>
          </div>

          {/* Slider Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cuttingEdgeTech
              .slice(cuttingEdgeIndex, cuttingEdgeIndex + 3)
              .concat(
                cuttingEdgeIndex + 3 > cuttingEdgeTech.length
                  ? cuttingEdgeTech.slice(0, (cuttingEdgeIndex + 3) % cuttingEdgeTech.length)
                  : []
              )
              .slice(0, 3)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#EBF5FB] p-7 sm:p-8 rounded-2xl border border-blue-100/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-blue-200/60">
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Arrows (← →) */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <button
              onClick={() =>
                setCuttingEdgeIndex((prev) =>
                  prev === 0 ? cuttingEdgeTech.length - 1 : prev - 1
                )
              }
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-[#005F96] hover:bg-[#005F96] hover:text-white flex items-center justify-center transition-all text-slate-700 shadow-sm active:scale-95"
              aria-label="Previous Technology"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCuttingEdgeIndex((prev) =>
                  prev >= cuttingEdgeTech.length - 1 ? 0 : prev + 1
                )
              }
              className="w-11 h-11 rounded-full border border-slate-300 bg-white hover:border-[#005F96] hover:bg-[#005F96] hover:text-white flex items-center justify-center transition-all text-slate-700 shadow-sm active:scale-95"
              aria-label="Next Technology"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 6. MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (IMAGE 1) */}
      {/* ========================================================================= */}
      <SapphireSeasonedExpertsSection />

      {/* ========================================================================= */}
      {/* 7. SAPPHIRE CUSTOM IT SERVICE (IMAGE 2) */}
      {/* ========================================================================= */}
      <CustomItServicesSection companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 8. SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE IT SERVICE DEVELOPMENT (IMAGE 3) */}
      {/* ========================================================================= */}
      <SectorsThrivingSection title="Sectors Thriving Through Sapphire’s Bespoke IT Service Development" />

      {/* ========================================================================= */}
      {/* 9. INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (IMAGE 4) */}
      {/* ========================================================================= */}
      <IndustryFocusedInsightsSection subtitle="Trending Industries that Use IT Service Development" />

      {/* ========================================================================= */}
      {/* 10. EXPERTISE IN OUR IT CONSULTING SERVICES (IMAGE 5) */}
      {/* ========================================================================= */}
      <ExpertiseItConsultingSection />

      {/* ========================================================================= */}
      {/* 11. BUSINESS FRIENDLY HIRING MODELS (IMAGE 1) */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. WHAT OUR CLIENTS SAY (IMAGE 2) */}
      {/* ========================================================================= */}
      <WhatOurClientsSaySection />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW (IMAGE 1) */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. PROUD TO HAVE PICKED THESE UP ALONG THE WAY (IMAGE 2) */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 15. TECHNOLOGY STACK THAT SAPPHIRE IT SERVICE DEVELOPERS USE PROFICIENTLY (IMAGE 3) */}
      {/* ========================================================================= */}
      <TechStackProficientGrid
        title="Technology Stack That Sapphire IT Service Developers Use Proficiently"
        rows={itServiceTechStack}
      />

      {/* ========================================================================= */}
      {/* 16. DIGITAL TRANSFORMATION THROUGH INNOVATION (IMAGE 1) */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 17. TRUSTED BY THE WORLD'S LEADING BRANDS (IMAGE 2) */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 18. EXPLORE THE TRANSFORMATIVE IMPACT OF IT SERVICE DEVELOPMENT (IMAGE 3) */}
      {/* ========================================================================= */}
      <TransformativeImpactSection
        title="Explore The Transformative Impact Of IT Service Development On Your Business Success"
      />
      {/* ========================================================================= */}
      {/* 19. ABOUT US (IMAGE 4) */}
      {/* ========================================================================= */}
      <AboutUsStats companyName="Sapphire" />

      {/* ========================================================================= */}
      {/* 20. WE HAVE BEEN FEATURED IN (IMAGE 1) */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />


      {/* ========================================================================= */}
      {/* 21. SUCCESS MATRIX (IMAGE 1) */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 22. UNVEILING OUR INNOVATIVE SOLUTION (IMAGE 2) */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 23. OUR STORY, THEIR WORDS (IMAGE 3) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 24. FREQUENTLY ASKED QUESTIONS (IMAGE 4) */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={itConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below"
      />

      {/* ========================================================================= */}
      {/* 25. WHAT SETS US APART AS IT CONSULTING SERVICES DEVELOPMENT? (IMAGE 5) */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As IT Consulting Services Development?"
        subtitle="Being unique is our quality! Sapphire Solutions believe in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* ========================================================================= */}
      {/* 26. OUR RECENT BLOGS (SCREENSHOT 1) */}
      {/* ========================================================================= */}
      <ItConsultingRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 27. HAVE IT CONSULTING SERVICES CHALLENGE TO ADDRESS (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have IT Consulting Services Development Challenge To Address ?"
        subtitle="Get access to top IT Consulting Services development to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* ========================================================================= */}
      {/* 28. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS (SCREENSHOT 2) */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />

    </div>
  );
};

export default ItConsultingServices;
