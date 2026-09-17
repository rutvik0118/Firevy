import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import IconRenderer from '../components/common/IconRenderer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorState from '../components/common/ErrorState';
import CTASection from '../components/home/CTASection';
import serviceApi from '../services/serviceApi';
import BRAND from '../constants/brand';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronRight, ShieldCheck, Zap, Sparkles, Star } from 'lucide-react';

import HealthcareAppDevelopmentService from '../components/services/HealthcareAppDevelopmentService';
import EducationAppDevelopmentService from '../components/services/EducationAppDevelopmentService';
import UberLikeAppDevelopmentService from '../components/services/UberLikeAppDevelopmentService';
import SpotifyLikeAppDevelopmentService from '../components/services/SpotifyLikeAppDevelopmentService';
import ZomatoLikeAppDevelopmentService from '../components/services/ZomatoLikeAppDevelopmentService';
import AmazonLikeAppDevelopmentService from '../components/services/AmazonLikeAppDevelopmentService';
import VisitorManagementSystemService from '../components/services/VisitorManagementSystemService';
import WarehouseManagementSystemService from '../components/services/WarehouseManagementSystemService';
import CloverAppDevelopmentService from '../components/services/CloverAppDevelopmentService';
import AndroidAppDevelopmentService from '../components/services/AndroidAppDevelopmentService';
import ReactNativeAppDevelopmentService from '../components/services/ReactNativeAppDevelopmentService';
import FlutterAppDevelopmentService from '../components/services/FlutterAppDevelopmentService';
import HireCSharpDevelopersService from '../components/services/HireCSharpDevelopersService';
import HireBootstrapDevelopersService from '../components/services/HireBootstrapDevelopersService';
import HireCodeIgniterDevelopersService from '../components/services/HireCodeIgniterDevelopersService';
import IWatchAppDevelopmentService from '../components/services/IWatchAppDevelopmentService';
import CovidTrackerAppDevelopmentService from '../components/services/CovidTrackerAppDevelopmentService';
import EcommerceMobileAppDevelopmentService from '../components/services/EcommerceMobileAppDevelopmentService';
import IPadAppDevelopmentService from '../components/services/IPadAppDevelopmentService';
import CrossPlatformAppDevelopmentService from '../components/services/CrossPlatformAppDevelopmentService';
import IOSAppDevelopmentService from '../components/services/IOSAppDevelopmentService';
import MobileAppDevelopmentService from '../components/services/MobileAppDevelopmentService';
import XamarinAppDevelopmentService from '../components/services/XamarinAppDevelopmentService';
import WordPressDevelopmentService from '../components/services/WordPressDevelopmentService';
import DrupalDevelopmentService from '../components/services/DrupalDevelopmentService';
import UmbracoDevelopmentService from '../components/services/UmbracoDevelopmentService';
import SitecoreDevelopmentService from '../components/services/SitecoreDevelopmentService';
import SitefinityDevelopmentService from '../components/services/SitefinityDevelopmentService';
import MagentoDevelopmentService from '../components/services/MagentoDevelopmentService';
import ShopifyDevelopmentService from '../components/services/ShopifyDevelopmentService';
import DotNetDevelopmentService from '../components/services/DotNetDevelopmentService';
import PhpDevelopmentService from '../components/services/PhpDevelopmentService';
import JavaDevelopmentService from '../components/services/JavaDevelopmentService';
import NodeJsDevelopmentService from '../components/services/NodeJsDevelopmentService';
import GenerativeAiDevelopmentService from '../components/services/GenerativeAiDevelopmentService';
import ArtificialIntelligenceDevelopmentService from '../components/services/ArtificialIntelligenceDevelopmentService';
import BlockchainDevelopmentService from '../components/services/BlockchainDevelopmentService';
import FullStackDevelopmentService from '../components/services/FullStackDevelopmentService';
import VirtualRealityDevelopmentService from '../components/services/VirtualRealityDevelopmentService';
import IotDevelopmentService from '../components/services/IotDevelopmentService';
import PwaDevelopmentService from '../components/services/PwaDevelopmentService';
import RpaDevelopmentService from '../components/services/RpaDevelopmentService';
import HireAngularDevelopersService from '../components/services/HireAngularDevelopersService';
import HireReactDevelopersService from '../components/services/HireReactDevelopersService';
import HireVueDevelopersService from '../components/services/HireVueDevelopersService';
import HireEmberDevelopersService from '../components/services/HireEmberDevelopersService';
import HireAlexaSkillsDevelopersService from '../components/services/HireAlexaSkillsDevelopersService';
import HireEmbeddedSoftwareDevelopersService from '../components/services/HireEmbeddedSoftwareDevelopersService';
import HireLaravelDevelopersService from '../components/services/HireLaravelDevelopersService';
import HireExpressJsDevelopersService from '../components/services/HireExpressJsDevelopersService';
import HireNextJsDevelopersService from '../components/services/HireNextJsDevelopersService';
import HireDataScientistDevelopersService from '../components/services/HireDataScientistDevelopersService';
import SharePointDevelopmentService from '../components/services/SharePointDevelopmentService';
import PowerAppsDevelopmentService from '../components/services/PowerAppsDevelopmentService';
import KotlinAppDevelopmentService from '../components/services/KotlinAppDevelopmentService';
import HybridAppDevelopmentService from '../components/services/HybridAppDevelopmentService';
import PersonalFitnessAppService from '../components/services/PersonalFitnessAppService';
import UsedCarAppDevelopmentService from '../components/services/UsedCarAppDevelopmentService';
import EnneagramTestAppService from '../components/services/EnneagramTestAppService';
import CreditCardAppDevelopmentService from '../components/services/CreditCardAppDevelopmentService';
import ItConsultingServices from '../components/services/ItConsultingServices';
import AppDevelopmentConsultingService from '../components/services/AppDevelopmentConsultingService';
import StartupConsultingServices from '../components/services/StartupConsultingServices';
import EpicorErpConsultingServices from '../components/services/EpicorErpConsultingServices';
import DevOpsConsultingServices from '../components/services/DevOpsConsultingServices';
import GenerativeAiConsultingCompany from '../components/services/GenerativeAiConsultingCompany';
import MicroservicesConsultingServices from '../components/services/MicroservicesConsultingServices';
import AiConsultingServices from '../components/services/AiConsultingServices';
import UiUxDesignService from '../components/services/UiUxDesignService';
import DigitalMarketingService from '../components/services/DigitalMarketingService';
import TestingQaService from '../components/services/TestingQaService';
import NintexDevelopmentService from '../components/services/NintexDevelopmentService';
import HireKotlinDevelopersService from '../components/services/HireKotlinDevelopersService';
import HireTechDevelopersService from '../components/services/HireTechDevelopersService';
import HireMetaverseDevelopersService from '../components/services/HireMetaverseDevelopersService';
import HireDedicatedDevelopersService from '../components/services/HireDedicatedDevelopersService';
import HireBlackberryDevelopersService from '../components/services/HireBlackberryDevelopersService';
import HireSoftwareDevelopersService from '../components/services/HireSoftwareDevelopersService';
import HireChatGptDevelopersService from '../components/services/HireChatGptDevelopersService';

export const ServiceDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const pathSegments = location.pathname.toLowerCase().split('/').filter(Boolean);
  const pathSlug = pathSegments.length > 1 ? pathSegments[pathSegments.length - 1] : pathSegments[0] || '';
  const rawSlug = slug || pathSlug || '';
  const currentSlug = decodeURIComponent(rawSlug).toLowerCase();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const isHireAndroid = currentSlug.includes('hire-android');
  const isHireIonic = currentSlug.includes('ionic') || currentSlug.includes('hire-ionic');
  const isHireFlutter = currentSlug.includes('hire-flutter');
  const isHireIOS = currentSlug.includes('hire-ios');
  const isHireSwift = currentSlug.includes('hire-swift') || currentSlug === 'swift' || currentSlug === 'services/swift';
  const isHireMobile = currentSlug.includes('hire-mobile');
  const isHireBlackberry = currentSlug.includes('hire-blackberry') || currentSlug.includes('blackberry');
  const isHireFreelance = currentSlug.includes('hire-freelance');
  const isHireAiApp = currentSlug.includes('hire-ai-application') || currentSlug.includes('hire-ai-app');
  const isHireIphone = currentSlug.includes('hire-iphone');
  const isHireWooCommerce = currentSlug.includes('woocommerce') || currentSlug.includes('woo-commerce');
  const isHirePrestashop = currentSlug.includes('prestashop') || currentSlug.includes('presta-shop');
  const isHireWordpress = currentSlug.includes('hire-wordpress') || currentSlug.includes('wordpress-developers') || currentSlug.includes('hire-wp');
  const isHireKotlin = currentSlug.includes('hire-kotlin');
  const isAnyDedicatedHire = isHireAndroid || isHireIonic || isHireFlutter || isHireIOS || isHireSwift || isHireMobile || isHireBlackberry || isHireFreelance || isHireAiApp || isHireIphone || isHireWooCommerce || isHirePrestashop || isHireWordpress || isHireKotlin;

  const isXamarin = currentSlug.includes('xamarin');
  const isReactNative = currentSlug.includes('react-native') || currentSlug.includes('reactnative');
  const isFlutter = !isHireFlutter && currentSlug.includes('flutter');
  const isSitecore = currentSlug.includes('sitecore') || currentSlug.includes('hire-sitecore');
  const isSitefinity = currentSlug.includes('sitefinity') || currentSlug.includes('hire-sitefinity');

  const isMagento = currentSlug.includes('magento') ||
    currentSlug.includes('adobe-commerce') ||
    currentSlug.includes('hire-magento');

  const isShopify = currentSlug.includes('shopify') ||
    currentSlug.includes('shopify-plus') ||
    currentSlug.includes('hire-shopify');

  const isUmbraco = currentSlug.includes('umbraco') ||
    currentSlug.includes('hire-umbraco');

  const isDrupal = currentSlug.includes('drupal') ||
    currentSlug.includes('hire-drupal');

  const isWordpress = currentSlug.includes('wordpress') ||
    currentSlug.includes('word-press') ||
    currentSlug.includes('wp-development') ||
    currentSlug.includes('hire-wordpress');

  const isAndroid = !isHireAndroid && currentSlug.includes('android');

  const isHealthcare = currentSlug.includes('health-care') ||
    currentSlug.includes('healthcare');

  const isEducation = currentSlug.includes('education') ||
    currentSlug.includes('elearning');

  const isUber = currentSlug.includes('uber') ||
    currentSlug.includes('taxi-booking');

  const isSpotify = currentSlug.includes('spotify') ||
    currentSlug.includes('audio-streaming') ||
    currentSlug.includes('music-streaming');

  const isZomato = currentSlug.includes('zomato') ||
    currentSlug.includes('food-delivery');

  const isAmazon = currentSlug.includes('amazon') ||
    currentSlug.includes('ecommerce') ||
    currentSlug.includes('e-commerce');

  const isVisitor = currentSlug.includes('visitor');

  const isWarehouse = currentSlug.includes('warehouse') ||
    currentSlug.includes('wms');

  const isClover = currentSlug.includes('clover');

  const isCSharp = currentSlug.includes('c-sharp') ||
    currentSlug.includes('csharp') ||
    currentSlug.includes('hire-c-sharp');

  const isBootstrap = currentSlug.includes('bootstrap') ||
    currentSlug.includes('hire-bootstrap');

  const isCodeIgniter = currentSlug.includes('codeigniter') ||
    currentSlug.includes('code-igniter') ||
    currentSlug.includes('hire-codeigniter');

  const isIWatch = currentSlug.includes('iwatch') ||
    currentSlug.includes('apple-watch') ||
    currentSlug.includes('watchos');

  const isIPad = currentSlug.includes('ipad');

  const isKotlin = !isHireKotlin && currentSlug.includes('kotlin');

  const isHybrid = currentSlug.includes('hybrid');

  const isPersonalFitness = currentSlug === 'personal-fitness-app' ||
    currentSlug.includes('personal-fitness') ||
    currentSlug.includes('fitness-app') ||
    currentSlug === 'services/personal-fitness-app';

  const isUsedCar = currentSlug === 'used-car-app-development' ||
    currentSlug === 'used-car-app' ||
    currentSlug.includes('used-car') ||
    currentSlug.includes('used-cars') ||
    currentSlug === 'services/used-car-app-development';

  const isEnneagram = currentSlug === 'enneagram-test-app' ||
    currentSlug === 'enneagram-test' ||
    currentSlug.includes('enneagram') ||
    currentSlug === 'services/enneagram-test-app';

  const isCreditCard = currentSlug === 'credit-card-app-development' ||
    currentSlug === 'credit-card-app' ||
    currentSlug.includes('credit-card') ||
    currentSlug === 'services/credit-card-app-development';

  const isCrossPlatform = currentSlug.includes('cross-platform') ||
    currentSlug.includes('crossplatform') ||
    currentSlug.includes('multi-platform');

  const isIOS = !isHireIOS && !isHireIphone && !isHireSwift && (currentSlug.includes('ios') || currentSlug.includes('iphone')) && !isIPad;

  const isMobileApp = !isHireMobile && (
    currentSlug === 'mobile-app-development' ||
    currentSlug === 'mobile-app' ||
    currentSlug === 'mobile-application' ||
    currentSlug === 'mobile-application-development' ||
    (currentSlug.includes('mobile-app') && !isReactNative && !isFlutter && !isIOS && !isAndroid && !isXamarin && !isIWatch && !isCrossPlatform && !isKotlin && !isHybrid && !isIPad && !isPersonalFitness && !isUsedCar && !isEnneagram && !isCreditCard)
  );

  const isNet = currentSlug === 'net' ||
    currentSlug.includes('dot-net') ||
    currentSlug.includes('dotnet') ||
    currentSlug.includes('net-development') ||
    currentSlug.includes('microsoft-development');

  const isPhp = currentSlug === 'php' ||
    currentSlug.includes('php-development') ||
    currentSlug.includes('hire-php');

  const isJava = currentSlug === 'java' ||
    currentSlug.includes('java-development') ||
    currentSlug.includes('hire-java') ||
    currentSlug.includes('java-software') ||
    currentSlug.includes('java-web');

  const isNodeJs = currentSlug === 'nodejs' ||
    currentSlug === 'node-js' ||
    currentSlug.includes('node-js') ||
    currentSlug.includes('nodejs') ||
    currentSlug.includes('hire-node') ||
    currentSlug.includes('node-developer');

  const isGenerativeAi = currentSlug.includes('generative-ai') ||
    currentSlug.includes('generativeai') ||
    currentSlug.includes('genai') ||
    currentSlug.includes('gen-ai');

  const isArtificialIntelligence = !isHireAiApp && !isGenerativeAi && (
    currentSlug.includes('artificial-intelligence') ||
    currentSlug.includes('ai-ml') ||
    currentSlug.includes('ai-development') ||
    currentSlug === 'ai' ||
    currentSlug === 'ai-services' ||
    currentSlug.includes('hire-ai-developers')
  );

  const isBlockchain = currentSlug.includes('blockchain') ||
    currentSlug.includes('crypto') ||
    currentSlug.includes('dapp') ||
    currentSlug.includes('hire-blockchain');

  const isFullStack = currentSlug.includes('full-stack') ||
    currentSlug.includes('fullstack') ||
    currentSlug.includes('hire-full-stack');

  const isVR = currentSlug.includes('vr') ||
    currentSlug.includes('virtual-reality') ||
    currentSlug.includes('vr-ar') ||
    currentSlug.includes('ar-vr') ||
    currentSlug.includes('augmented-reality');

  const isIot = currentSlug.includes('iot') ||
    currentSlug.includes('internet-of-things') ||
    currentSlug.includes('smart-devices');

  const isPwa = currentSlug.includes('pwd') ||
    currentSlug.includes('pwa') ||
    currentSlug.includes('progressive-web') ||
    currentSlug.includes('progressive-app');

  const isRpa = currentSlug.includes('rpa') ||
    currentSlug.includes('robotic-process') ||
    currentSlug.includes('process-automation') ||
    currentSlug.includes('robotic');

  const isAngular = currentSlug.includes('angular');

  const isNext = currentSlug.includes('next') ||
    currentSlug.includes('nextjs') ||
    currentSlug.includes('next-js') ||
    currentSlug.includes('hire-next');

  const isReact = !isReactNative && !isNext && (
    currentSlug.includes('react-js') ||
    currentSlug.includes('reactjs') ||
    currentSlug.includes('react-development') ||
    currentSlug.includes('hire-react') ||
    currentSlug === 'react' ||
    currentSlug === 'services/react'
  );

  const isVue = currentSlug.includes('vue') ||
    currentSlug.includes('vuejs') ||
    currentSlug.includes('vue-js') ||
    currentSlug.includes('hire-vue') ||
    currentSlug.includes('nuxt');

  const isEmber = currentSlug.includes('ember') ||
    currentSlug.includes('emberjs') ||
    currentSlug.includes('ember-js') ||
    currentSlug.includes('hire-ember');

  const isAlexaSkills = currentSlug.includes('alexa') ||
    currentSlug.includes('alexa-skills') ||
    currentSlug.includes('hire-alexa');

  const isEmbeddedSoftware = currentSlug.includes('embedded') ||
    currentSlug.includes('embedded-software') ||
    currentSlug.includes('hire-embedded');

  const isLaravel = currentSlug.includes('laravel') ||
    currentSlug.includes('hire-laravel');

  const isExpress = (currentSlug.includes('express') ||
    currentSlug.includes('expressjs') ||
    currentSlug.includes('express-js') ||
    currentSlug.includes('hire-express')) &&
    !currentSlug.includes('node');

  const isSharePoint = currentSlug.includes('sharepoint') ||
    currentSlug.includes('share-point') ||
    currentSlug.includes('hire-sharepoint');

  const isPowerApps = (currentSlug.includes('powerapps') ||
    currentSlug.includes('power-apps') ||
    currentSlug.includes('power-platform') ||
    currentSlug.includes('hire-powerapps') ||
    currentSlug.includes('hire-power-apps')) &&
    !currentSlug.includes('automate');

  const isPowerAutomate = currentSlug.includes('power-automate') ||
    currentSlug.includes('powerautomate') ||
    currentSlug.includes('hire-power-automate') ||
    currentSlug.includes('hire-powerautomate');

  const isItConsulting = currentSlug === 'it-consulting-services' ||
    currentSlug.includes('it-consulting') ||
    currentSlug === 'tech-consulting-services' ||
    currentSlug === 'services/it-consulting-services';

  const isAppConsulting = currentSlug === 'app-development-consulting' ||
    currentSlug === 'app-development-consulting-services' ||
    currentSlug.includes('app-development-consulting') ||
    currentSlug === 'services/app-development-consulting';

  const isCovid = (slug || currentSlug) && (
    (slug && slug.toLowerCase().includes('covid')) ||
    currentSlug.includes('covid-tracker') ||
    currentSlug.includes('covid-tracking')
  );

  const isEcommerceApp = (slug || currentSlug) && (
    (slug && slug.toLowerCase().includes('ecommerce')) ||
    currentSlug.includes('e-commerce') ||
    currentSlug.includes('clown-polska')
  );

  const isStartupConsulting = currentSlug === 'startup-consulting-services' ||
    currentSlug === 'startup-consulting' ||
    currentSlug.includes('startup-consulting') ||
    currentSlug === 'services/startup-consulting-services';

  const isEpicorErpConsulting = currentSlug === 'epicor-erp-consulting-services' ||
    currentSlug === 'epicor-erp-consulting' ||
    currentSlug.includes('epicor-erp') ||
    currentSlug.includes('epicor') ||
    currentSlug === 'services/epicor-erp-consulting-services';

  const isDevOpsConsulting = currentSlug === 'devops-consulting-service' ||
    currentSlug === 'devops-consulting-services' ||
    currentSlug === 'devops-consulting' ||
    currentSlug.includes('devops-consulting') ||
    currentSlug === 'services/devops-consulting-service' ||
    currentSlug === 'services/devops-consulting-services' ||
    currentSlug === 'services/devops-consulting';

  const isGenerativeAiConsulting = currentSlug === 'generative-ai-consulting-company' ||
    currentSlug === 'generative-ai-consulting' ||
    currentSlug === 'generative-ai-consulting-services' ||
    currentSlug === 'generative-ai-consulting-service' ||
    currentSlug.includes('generative-ai-consulting') ||
    currentSlug === 'services/generative-ai-consulting-company' ||
    currentSlug === 'services/generative-ai-consulting';

  const isMicroservicesConsulting = currentSlug === 'microservices-consulting-services' ||
    currentSlug === 'microservices-consulting-service' ||
    currentSlug === 'microservices-consulting' ||
    currentSlug.includes('microservices-consulting') ||
    currentSlug === 'services/microservices-consulting-services' ||
    currentSlug === 'services/microservices-consulting';

  const isAiConsulting = (currentSlug === 'ai-consulting-services' ||
    currentSlug === 'ai-consulting-service' ||
    currentSlug === 'ai-consulting' ||
    currentSlug.includes('ai-consulting') ||
    currentSlug === 'services/ai-consulting-services' ||
    currentSlug === 'services/ai-consulting') && !currentSlug.includes('generative');

  const isUiUxDesign = currentSlug === 'ui-ux-design' ||
    currentSlug === 'ui-ux-design-services' ||
    currentSlug === 'ui-ux-design-service' ||
    currentSlug === 'ui-ux' ||
    currentSlug === 'ui-ux-services' ||
    currentSlug.includes('ui-ux-design') ||
    currentSlug === 'services/ui-ux-design' ||
    currentSlug === 'services/ui-ux-design-services';

  const isDigitalMarketing = currentSlug === 'digital-marketing' ||
    currentSlug === 'digital-marketing-services' ||
    currentSlug === 'digital-marketing-service' ||
    currentSlug.includes('digital-marketing') ||
    currentSlug === 'services/digital-marketing' ||
    currentSlug === 'services/digital-marketing-services';

  const isTestingQa = currentSlug === 'testing-qa' ||
    currentSlug === 'testing-and-qa' ||
    currentSlug === 'software-testing-qa' ||
    currentSlug === 'qa-testing' ||
    currentSlug === 'software-qa-testing' ||
    currentSlug === 'software-testing' ||
    currentSlug.includes('testing-qa') ||
    currentSlug.includes('qa-testing') ||
    currentSlug === 'services/testing-qa' ||
    currentSlug === 'services/software-testing-qa' ||
    (currentSlug.includes('testing') && !currentSlug.includes('podcast') && !currentSlug.includes('methodolog'));

  const isNintex = currentSlug === 'nintex-development-services' ||
    currentSlug === 'nintex-development-service' ||
    currentSlug === 'nintex-development' ||
    currentSlug === 'nintex' ||
    currentSlug.includes('nintex') ||
    currentSlug === 'services/nintex-development-services' ||
    currentSlug === 'services/nintex-development';

  const unslugify = (str) => {
    if (!str) return 'Enterprise Tech Solution';
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const generateFallbackService = (serviceSlug) => {
    const formattedTitle = unslugify(serviceSlug);
    const isHire = serviceSlug.toLowerCase().includes('hire');

    return {
      title: formattedTitle,
      slug: serviceSlug,
      icon: 'Code2',
      description: isHire
        ? `Empower your engineering organization by hiring world-class dedicated ${formattedTitle} specialists from Firevy.co. Access top 1% vetted developers with deep industry expertise, agile workflows, and zero onboarding overhead.`
        : `Drive innovation and scale your business with enterprise-grade ${formattedTitle} services from Firevy.co. Designed for security, high-throughput scalability, and seamless integration into modern cloud environments.`,
      shortDescription: `Top-tier ${formattedTitle} solutions engineered by Firevy.co. High performance, security, and enterprise scalability.`,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      features: [
        {
          title: "Enterprise Architecture & Security",
          description: `Custom ${formattedTitle} implementation built with microservices architecture, OWASP compliance, and zero-trust security standards.`
        },
        {
          title: "High Performance & Scalability",
          description: `Engineered for high concurrent load, low latency API responses, and fault-tolerant cloud auto-scaling.`
        },
        {
          title: "Continuous CI/CD & Integration",
          description: "Automated testing, continuous deployment pipelines, and seamless API integration into your existing tech stack."
        },
        {
          title: "Dedicated Squad & Agile Sprints",
          description: "Collaborate directly with senior architects, product managers, and QA specialists using transparent bi-weekly Agile sprints."
        },
        {
          title: "24/7 SLA & Infrastructure Monitoring",
          description: "Proactive log tracking, zero-downtime maintenance, and 99.99% uptime guarantees backed by strict enterprise SLAs."
        },
        {
          title: "Analytics & Measurable ROI",
          description: "Real-time metrics dashboards, bottleneck analysis, and continuous performance optimization."
        }
      ],
      process: [
        { title: "Discovery & Strategy", description: "Architecture scoping, technology stack validation, and feasibility mapping." },
        { title: "Sprint Engineering", description: "Bi-weekly sprint deliverables with clean code, unit test coverage, and documentation." },
        { title: "Quality Assurance", description: "Automated vulnerability scanning, load testing, and cross-platform verification." },
        { title: "Global Cloud Deployment", description: "Zero-downtime orchestration, Kubernetes rollout, and continuous monitoring." }
      ],
      technologies: ["React", "Node.js", "TypeScript", "Python", "Docker", "AWS Cloud", "Kubernetes", "GraphQL", "PostgreSQL", "Redis"],
      faqs: [
        {
          q: `How do Firevy.co's ${formattedTitle} services accelerate time-to-market?`,
          a: "Our pre-built architectural blueprints, vetted domain architects, and DevOps automation allow us to deliver production-ready features up to 40% faster than traditional agencies."
        },
        {
          q: "What security compliance frameworks do you adhere to?",
          a: "All deliverables undergo rigorous static code analysis, SOC-2 readiness checks, GDPR / HIPAA compliant architecture design, and automated vulnerability scanning."
        },
        {
          q: "Can you seamlessly augment our existing engineering team?",
          a: "Yes. Our engineers integrate directly into your Jira, Slack, GitHub workflows with daily standups and transparent reporting."
        },
        {
          q: "What post-launch maintenance SLA options are provided?",
          a: "We offer 24/7/365 infrastructure monitoring, automated security patch rollouts, performance tuning, and guaranteed < 15 minute emergency incident responses."
        }
      ]
    };
  };

  const fetchServiceDetails = async () => {
    try {
      setLoading(true);
      const data = await serviceApi.getServiceBySlug(currentSlug);
      if (data && data.success && data.data) {
        setService(data.data);
      } else if (data && data.title) {
        setService(data);
      } else {
        setService(generateFallbackService(currentSlug));
      }
    } catch (err) {
      console.warn("Backend unavailable or service not found in DB. Falling back to static enterprise content.", err);
      setService(generateFallbackService(currentSlug));
    } finally {
      setLoading(false);
    }
  };

  const isDataScientist = currentSlug.includes('data-scientist') || currentSlug.includes('data-science');
  const isMetaverse = currentSlug.includes('metaverse') || currentSlug.includes('hire-metaverse');
  const isDedicatedDevelopers = currentSlug.includes('hire-dedicated-developer') || currentSlug.includes('hire-dedicated-developers') || currentSlug === 'hire-dedicated' || currentSlug === 'services/hire-dedicated-developers';
  const isSoftwareDevelopers = currentSlug.includes('hire-software-developer') || currentSlug.includes('hire-software-developers') || currentSlug.includes('hire-software') || currentSlug === 'software-developers' || currentSlug === 'services/hire-software-developers';
  const isChatGpt = currentSlug.includes('chatgpt') || currentSlug.includes('chat-gpt') || currentSlug.includes('hire-chatgpt');

  useEffect(() => {
    if (!isNintex && !isTestingQa && !isDigitalMarketing && !isUiUxDesign && !isChatGpt && !isSoftwareDevelopers && !isDedicatedDevelopers && !isMetaverse && !isEmbeddedSoftware && !isAlexaSkills && !isDataScientist && !isAnyDedicatedHire && !isKotlin && !isHybrid && !isPersonalFitness && !isUsedCar && !isEnneagram && !isCreditCard && !isIPad && !isCrossPlatform && !isItConsulting && !isNext && !isExpress && !isMobileApp && !isBootstrap && !isCodeIgniter && !isEmber && !isLaravel && !isPowerAutomate && !isPowerApps && !isSharePoint && !isVue && !isReact && !isAngular && !isIot && !isPwa && !isRpa && !isVR && !isFullStack && !isBlockchain && !isArtificialIntelligence && !isGenerativeAi && !isNodeJs && !isJava && !isPhp && !isNet && !isXamarin && !isAndroid && !isReactNative && !isFlutter && !isIOS && !isHealthcare && !isEducation && !isUber && !isSpotify && !isZomato && !isAmazon && !isVisitor && !isWarehouse && !isClover && !isCSharp && !isIWatch && !isWordpress && !isDrupal && !isUmbraco && !isSitecore && !isSitefinity && !isMagento && !isShopify && !isCovid && !isEcommerceApp) {
      fetchServiceDetails();
    } else {
      setLoading(false);
    }
    window.scrollTo(0, 0);
  }, [currentSlug]);

  if (isChatGpt) {
    return <HireChatGptDevelopersService />;
  }

  if (isSoftwareDevelopers) {
    return <HireSoftwareDevelopersService />;
  }

  if (isDedicatedDevelopers) {
    return <HireDedicatedDevelopersService />;
  }

  if (isMetaverse) {
    return <HireMetaverseDevelopersService />;
  }

  if (isEmbeddedSoftware) {
    return <HireEmbeddedSoftwareDevelopersService />;
  }

  if (isAlexaSkills) {
    return <HireAlexaSkillsDevelopersService />;
  }

  if (isDataScientist) {
    return <HireDataScientistDevelopersService />;
  }

  if (isExpress) {
    return <HireExpressJsDevelopersService />;
  }

  if (isHireAndroid) {
    return <HireTechDevelopersService techKey="hire-android-developers" />;
  }

  if (isHireIonic) {
    return <HireTechDevelopersService techKey="hire-ionic-developers" />;
  }

  if (isHireFlutter) {
    return <HireTechDevelopersService techKey="hire-flutter-developers" />;
  }

  if (isHireIOS) {
    return <HireTechDevelopersService techKey="hire-ios-developers" />;
  }

  if (isHireSwift) {
    return <HireTechDevelopersService techKey="hire-swift-developer" />;
  }

  if (isHireMobile) {
    return <HireTechDevelopersService techKey="hire-mobile-app-developers" />;
  }

  if (isHireBlackberry) {
    return <HireBlackberryDevelopersService />;
  }

  if (isHireFreelance) {
    return <HireTechDevelopersService techKey="hire-freelance-app-developers" />;
  }

  if (isHireAiApp) {
    return <HireTechDevelopersService techKey="hire-ai-application-developers" />;
  }

  if (isHireIphone) {
    return <HireTechDevelopersService techKey="hire-iphone-app-developers" />;
  }

  if (isHireWooCommerce) {
    return <HireTechDevelopersService techKey="hire-woocommerce-developers" />;
  }

  if (isHirePrestashop) {
    return <HireTechDevelopersService techKey="hire-prestashop-developers" />;
  }

  if (isHireWordpress) {
    return <HireTechDevelopersService techKey="hire-wordpress-developers" />;
  }

  if (isHireKotlin) {
    return <HireKotlinDevelopersService />;
  }

  if (isKotlin) {
    return <KotlinAppDevelopmentService />;
  }

  if (isIPad) {
    return <IPadAppDevelopmentService />;
  }

  if (isHybrid) {
    return <HybridAppDevelopmentService />;
  }

  if (isPersonalFitness) {
    return <PersonalFitnessAppService />;
  }

  if (isUsedCar) {
    return <UsedCarAppDevelopmentService />;
  }

  if (isEnneagram) {
    return <EnneagramTestAppService />;
  }

  if (isCreditCard) {
    return <CreditCardAppDevelopmentService />;
  }

  if (isCrossPlatform) {
    return <CrossPlatformAppDevelopmentService />;
  }

  if (isIWatch) {
    return <IWatchAppDevelopmentService />;
  }

  if (isMobileApp) {
    return <MobileAppDevelopmentService />;
  }

  if (isBootstrap) {
    return <HireBootstrapDevelopersService />;
  }

  if (isCodeIgniter) {
    return <HireCodeIgniterDevelopersService />;
  }

  if (isEmber) {
    return <HireEmberDevelopersService />;
  }

  if (isLaravel) {
    return <HireLaravelDevelopersService />;
  }

  if (isNodeJs) {
    return <NodeJsDevelopmentService />;
  }

  if (isJava) {
    return <JavaDevelopmentService />;
  }

  if (isPhp) {
    return <PhpDevelopmentService />;
  }

  if (isNet) {
    return <DotNetDevelopmentService />;
  }

  if (isItConsulting) {
    return <ItConsultingServices />;
  }

  if (isAppConsulting) {
    return <AppDevelopmentConsultingService />;
  }

  if (isStartupConsulting) {
    return <StartupConsultingServices />;
  }

  if (isEpicorErpConsulting) {
    return <EpicorErpConsultingServices />;
  }

  if (isDevOpsConsulting) {
    return <DevOpsConsultingServices />;
  }

  if (isGenerativeAiConsulting) {
    return <GenerativeAiConsultingCompany />;
  }

  if (isMicroservicesConsulting) {
    return <MicroservicesConsultingServices />;
  }

  if (isAiConsulting) {
    return <AiConsultingServices />;
  }

  if (isUiUxDesign) {
    return <UiUxDesignService />;
  }

  if (isDigitalMarketing) {
    return <DigitalMarketingService />;
  }

  if (isTestingQa) {
    return <TestingQaService />;
  }

  if (isNintex) {
    return <NintexDevelopmentService />;
  }

  if (isPowerAutomate) {
    return <PowerAutomateDevelopmentService />;
  }

  if (isPowerApps) {
    return <PowerAppsDevelopmentService />;
  }

  if (isSharePoint) {
    return <SharePointDevelopmentService />;
  }

  if (isNext) {
    return <HireNextJsDevelopersService />;
  }

  if (isExpress) {
    return <HireExpressJsDevelopersService />;
  }

  if (isLaravel) {
    return <HireLaravelDevelopersService />;
  }

  if (isEmber) {
    return <HireEmberDevelopersService />;
  }

  if (isVue) {
    return <HireVueDevelopersService />;
  }

  if (isReact) {
    return <HireReactDevelopersService />;
  }

  if (isAngular) {
    return <HireAngularDevelopersService />;
  }

  if (isIot) {
    return <IotDevelopmentService />;
  }

  if (isPwa) {
    return <PwaDevelopmentService />;
  }

  if (isRpa) {
    return <RpaDevelopmentService />;
  }

  if (isVR) {
    return <VirtualRealityDevelopmentService />;
  }

  if (isFullStack) {
    return <FullStackDevelopmentService />;
  }

  if (isBlockchain) {
    return <BlockchainDevelopmentService />;
  }

  if (isArtificialIntelligence) {
    return <ArtificialIntelligenceDevelopmentService />;
  }

  if (isGenerativeAi) {
    return <GenerativeAiDevelopmentService />;
  }

  if (isSitecore) {
    return <SitecoreDevelopmentService />;
  }

  if (isSitefinity) {
    return <SitefinityDevelopmentService />;
  }

  if (isMagento) {
    return <MagentoDevelopmentService />;
  }

  if (isShopify) {
    return <ShopifyDevelopmentService />;
  }

  if (isUmbraco) {
    return <UmbracoDevelopmentService />;
  }

  if (isDrupal) {
    return <DrupalDevelopmentService />;
  }

  if (isWordpress) {
    return <WordPressDevelopmentService />;
  }

  if (isXamarin) {
    return <XamarinAppDevelopmentService />;
  }

  if (isIOS) {
    return <IOSAppDevelopmentService />;
  }

  if (isAndroid) {
    return <AndroidAppDevelopmentService />;
  }

  if (isReactNative) {
    return <ReactNativeAppDevelopmentService />;
  }

  if (isFlutter) {
    return <FlutterAppDevelopmentService />;
  }

  if (isEcommerceApp) {
    return <EcommerceMobileAppDevelopmentService />;
  }

  if (isHealthcare) {
    return <HealthcareAppDevelopmentService />;
  }

  if (isEducation) {
    return <EducationAppDevelopmentService />;
  }

  if (isUber) {
    return <UberLikeAppDevelopmentService />;
  }

  if (isSpotify) {
    return <SpotifyLikeAppDevelopmentService />;
  }

  if (isZomato) {
    return <ZomatoLikeAppDevelopmentService />;
  }

  if (isAmazon) {
    return <AmazonLikeAppDevelopmentService />;
  }

  if (isVisitor) {
    return <VisitorManagementSystemService />;
  }

  if (isWarehouse) {
    return <WarehouseManagementSystemService />;
  }

  if (isClover) {
    return <CloverAppDevelopmentService />;
  }

  if (isCSharp) {
    return <HireCSharpDevelopersService />;
  }



  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (isCovid) {
    return <CovidTrackerAppDevelopmentService />;
  }

  if (loading) return <LoadingSpinner fullPage message="Loading service details..." />;
  if (error || !service) return <Container className="py-20"><ErrorState message={error || 'Service not found.'} onRetry={fetchServiceDetails} /></Container>;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title={`${currentService.title} Services | ${BRAND.name}`}
        description={currentService.shortDescription || currentService.description}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,95,150,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005F96]/10 border border-[#005F96]/30 text-xs font-semibold text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Grade Solution</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {currentService.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {currentService.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[#005F96] hover:bg-[#004D7A] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2 group"
              >
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-sm tracking-wide transition-all"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities / Features Section */}
      {currentService.features && currentService.features.length > 0 && (
        <section id="features" className="py-20 bg-slate-950 border-b border-slate-900">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold text-[#005F96] tracking-wider uppercase">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Key Architecture Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentService.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-[#005F96]/60 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#005F96]/10 text-cyan-400 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Tech Stack Pills */}
      {currentService.technologies && currentService.technologies.length > 0 && (
        <section className="py-16 bg-slate-900/40 border-b border-slate-900">
          <Container>
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                CORE TECHNOLOGIES & TOOLCHAINS
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
              {currentService.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold hover:border-cyan-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQs Section */}
      {currentService.faqs && currentService.faqs.length > 0 && (
        <section className="py-20 bg-slate-950 border-b border-slate-900">
          <Container className="max-w-4xl">
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl font-black text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {currentService.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </div>
  );
};

export default ServiceDetails;
