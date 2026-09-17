import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import {
  Check,
  ChevronDown,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Layers,
  ArrowRight,
  Code2,
  Clock
} from 'lucide-react';

export const MagentoDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Magento / Adobe Commerce Development',
    budget: '$15,000 - $35,000',
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
        serviceType: 'Magento / Adobe Commerce Development',
        budget: '$15,000 - $35,000',
        message: ''
      });
    }, 6000);
  };

  const techStack = {
    cms: [
      { name: 'Adobe Commerce (Magento 2.4.x)', desc: 'Enterprise Headless E-Commerce Suite', icon: '🛍️' },
      { name: 'Magento Open Source', desc: 'Customizable Self-Hosted Multi-Store Platform', icon: '📦' },
      { name: 'Adobe Commerce Cloud', desc: 'Managed High-Availability AWS/Azure Cloud PaaS', icon: '☁️' },
      { name: 'Magento PWA Studio', desc: 'Progressive Web App Fast Mobile Storefronts', icon: '📱' },
      { name: 'Adobe Sensei AI', desc: 'Intelligent Product Recommendations & Search', icon: '🧠' },
      { name: 'B2B Commerce Suite', desc: 'Custom Catalogs, Tier Pricing & Quoting', icon: '🏢' }
    ],
    languages: [
      { name: 'PHP 8.2 / 8.3 & Zend/Laminas', desc: 'Modern High-Speed Object-Oriented Backend', icon: '🐘' },
      { name: 'GraphQL & REST APIs', desc: 'High-Throughput Headless Commerce Endpoints', icon: '🔄' },
      { name: 'React / Next.js & Alpine.js', desc: 'Dynamic PWA & Hyvä Storefront Themes', icon: '⚛️' },
      { name: 'Hyvä Themes & Tailwind', desc: 'Ultra-Fast Lightweight Modern Magento Theme', icon: '⚡' },
      { name: 'Knockout.js & RequireJS', desc: 'Legacy Modular Frontend Support & Refactoring', icon: '📜' },
      { name: 'Node.js & Microservices', desc: 'Middleware Integrations & Real-Time Sync', icon: '🚀' }
    ],
    database: [
      { name: 'MySQL 8.0 / MariaDB', desc: 'Enterprise Relational Database with Read Replicas', icon: '🗄️' },
      { name: 'Elasticsearch / OpenSearch', desc: 'Blazing Fast Catalog Search & Faceted Filters', icon: '🔍' },
      { name: 'Redis Sentinel / Cluster', desc: 'Session, Object & Full-Page Cache Accelerator', icon: '⚡' },
      { name: 'Varnish Cache 7', desc: 'High-Throughput Reverse Proxy Page Caching', icon: '🚀' },
      { name: 'RabbitMQ Message Broker', desc: 'Asynchronous Queue & Event Stream Processing', icon: '🐇' },
      { name: 'AWS S3 / Fastly CDN', desc: 'Global Media Assets Caching & DDoS Shield', icon: '🌐' }
    ],
    infrastructure: [
      { name: 'AWS / Google Cloud / Azure', desc: 'Elastic Auto-Scaling Multi-Zone Infrastructure', icon: '☁️' },
      { name: 'Docker & Kubernetes', desc: 'Containerized CI/CD Deployment Orchestration', icon: '🐳' },
      { name: 'Fastly VCL & WAF', desc: 'Edge Cloud Security, Image Optimizer & Shield', icon: '🛡️' },
      { name: 'New Relic APM', desc: 'Full-Stack Performance Bottleneck Diagnostics', icon: '📊' },
      { name: 'GitHub Actions / GitLab CI', desc: 'Automated Deployment, Linting & Unit Testing', icon: '🚀' },
      { name: 'PCI-DSS Level 1 Compliance', desc: 'Strict Payment Security & Data Protection', icon: '🔒' }
    ]
  };

  const faqs = [
    {
      q: "1. Why choose Magento (Adobe Commerce) for enterprise e-commerce?",
      a: "Magento (Adobe Commerce) is the undisputed industry standard for complex, high-volume e-commerce. It features native multi-store, multi-currency, and multi-language capabilities, advanced B2B quoting, headless PWA architecture, and infinite customization potential without licensing lock-in."
    },
    {
      q: "2. How does Firevy.co optimize Magento 2 performance and page speed?",
      a: "We implement Hyvä Themes or Headless PWA Studio to reduce JS payload by over 80%. We also fine-tune Varnish Cache, configure Redis session clustering, optimize OpenSearch queries, and utilize Fastly CDN edge image optimization to achieve sub-second load times and 90+ Google Core Web Vitals."
    },
    {
      q: "3. What is Hyvä Themes and why is it transforming Magento development?",
      a: "Hyvä Themes replaces Magento’s legacy heavy Knockout.js/RequireJS stack with modern Tailwind CSS and Alpine.js. This slashes page weight, eliminates JavaScript render-blocking bugs, cuts development time in half, and dramatically improves mobile conversion rates."
    },
    {
      q: "4. Can Magento integrate with our enterprise ERP, CRM, and 3PL fulfillment systems?",
      a: "Yes. Our team develops bi-directional, high-throughput integration middleware using GraphQL, REST, and RabbitMQ message queues to sync inventory, orders, customer accounts, and shipping tracking with SAP, NetSuite, Microsoft Dynamics, Salesforce, and Klaviyo in real time."
    },
    {
      q: "5. How do you manage Magento version upgrades and security patches?",
      a: "We apply official Adobe Quality Patches and security updates within 48 hours of release. For major version upgrades (e.g. to Magento 2.4.7), we run automated PHPStan/code-sniff audits, staging regressions, and database migration checks to guarantee zero downtime."
    },
    {
      q: "6. Do you support B2B e-commerce features on Magento?",
      a: "Absolutely. We build customized B2B portals featuring corporate account hierarchies, negotiated custom pricing tiers, quick bulk order forms, requisition lists, credit limits, and custom quote approval workflows."
    },
    {
      q: "7. What engagement models are available for hiring Magento developers?",
      a: "We offer dedicated Magento certified full-stack developers, fixed-price milestone delivery, agile Time & Material allocations, and 24/7 managed SLA support."
    },
    {
      q: "8. How do you guarantee PCI-DSS compliance and payment security?",
      a: "We adhere strictly to OWASP and PCI-DSS Level 1 guidelines. We implement secure tokenized payment gateways (Stripe, Adyen, Authorize.Net, PayPal), two-factor authentication, database encryption, and Fastly WAF edge security."
    },
    {
      q: "9. How quickly can we onboard a dedicated Magento team from Firevy.co?",
      a: "We can onboard certified Adobe Commerce / Magento developers to your project within 3 to 5 business days."
    }
  ];

  return (
    <div className="bg-white text-slate-800 font-sans antialiased overflow-hidden">
      <SEO
        title="Magento Development Company in USA | Certified Adobe Commerce Experts"
        description="Firevy.co is a top Magento development company in USA. Certified Adobe Commerce architects specializing in Magento 2, Hyvä themes, PWA Studio, B2B commerce, and ERP integrations."
      />


      {/* 1. HERO SECTION: Hire Magento Developers */}
      <section className="pt-32 pb-20 bg-[#F0F6FB] text-slate-900 relative overflow-hidden font-sans border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Magento Developers
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                Magento 1 and Magento 2 are included in the Magento development services we provide. If you need to hire Magento developers, you can depend on our knowledgeable Magento 2 developers.
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

              {/* Call-to-action Pill */}
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
                  <Link
                    to="/contact"
                    className="bg-white text-[#006095] hover:bg-slate-50 font-[700] px-6 py-2.5 rounded-[10px] text-[15px] transition-all shadow-sm flex items-center justify-center cursor-pointer"
                  >
                    Hire Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <img
                src="/images/magento_hero_monitor.svg"
                alt="Hire Magento Developers"
                className="w-full max-w-[520px] h-auto object-contain mx-auto drop-shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. BRAND LOGO MARQUEE */}
      <BrandLogoMarquee />

      {/* 3. SECTION 2: Hire Dedicated Magento Programmers At Affordable Prices */}
      <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic Illustration */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <img
                src="/images/magento_dedicated_illustration.svg"
                alt="Hire Dedicated Magento Programmers"
                className="w-full max-w-[540px] h-auto object-contain mx-auto drop-shadow-md"
              />
            </div>

            {/* Right Text Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Dedicated Magento Programmers At Affordable Prices
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                They can assist you with the Magento Community version and the Magento Enterprise edition. Hire a Magento programmer with expertise in delivering various Magento development services, from creating themes to integrating third-party components. We are your one-stop option if you are looking to Hire Dedicated Magento Developers. You may Hire Magento Certified Developer to help you with your online business. We have a team of qualified Magento developers in India that work hard to provide Adobe Commerce development services that our competitors unmatch.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Connect With Magento Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. COMPARISON MATRIX TABLE */}
      <section className="py-16 md:py-20 bg-white font-sans text-slate-900 border-b border-slate-100 text-center">
        <Container>
          <div className="max-w-4xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
              Hire Dedicated Developers To Empower Your Business with our Development Proficiency
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
              Hire Magento Developers to meet your business perks by leveraging our technical elegance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#006095] text-white">
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4">Range of Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-white/20">Junior Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-white/20">Mid-Level Developers</th>
                  <th className="p-4 sm:p-4.5 font-[800] text-sm sm:text-[15px] w-1/4 border-l border-white/20">Senior Developers</th>
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

      {/* 5. BRIEF ABOUT OUR MAGENTO DEVELOPERS */}
      <section className="py-16 md:py-24 bg-[#F9FBFC] font-sans text-slate-900 border-b border-slate-100 text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-[900] text-slate-900 tracking-tight leading-tight">
                Brief About Our Magento Developers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Our developers are not obliged to have any training in any kind of sector or technology. All that is needed of you is to provide them with an explanation of your project, and they will carry out the necessary tasks.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                To guarantee that the procedure runs well, we allocate a senior developer. If you hire Magento developers in UAE, you can rest confident that they will be reliable and responsible since the administration of the project will fall on our shoulders.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Connect With Magento Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Illustration */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <img
                src="/images/magento_brief_developers_illustration.svg"
                alt="Brief About Our Magento Developers"
                className="w-full max-w-[540px] h-auto object-contain mx-auto drop-shadow-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Top Rated Banner */}
      <ClutchTopRatedBanner
        quote="Scalability, Performance And Global Commerce"
        subtext="Empowering omnichannel retailers and high-growth brands with robust Adobe Commerce stores."
      />

      {/* 10 Premium Pill Tags */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Comprehensive Magento Capabilities</h3>
            <p className="text-sm text-slate-500 mt-1">Full-suite engineering across Magento 2 Open Source, Adobe Commerce Cloud, and Hyvä themes.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { title: 'Magento 2.4.x', icon: '🛍️' },
              { title: 'Adobe Commerce Cloud', icon: '☁️' },
              { title: 'Hyvä Themes', icon: '⚡' },
              { title: 'PWA Studio', icon: '📱' },
              { title: 'B2B Commerce Suite', icon: '🏢' },
              { title: 'Custom Modules', icon: '🧱' },
              { title: 'ERP & CRM Sync', icon: '🔄' },
              { title: 'Varnish & Redis Cache', icon: '🚀' },
              { title: 'OpenSearch Indexing', icon: '🔍' },
              { title: '24/7 SLA Support', icon: '🛡️' }
            ].map((tag, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-3 rounded-xl border border-slate-200/80 shadow-sm flex items-center gap-2.5 hover:border-[#006699] hover:shadow-md transition-all duration-200"
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{tag.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Cutting Edge Services with Diagonal Hover Animation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Tailored Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Enterprise Magento Development Services
            </h2>
            <p className="text-slate-600 text-base">
              Engineered to handle high order volumes, complex catalogs, and lightning-fast checkout experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Magento 2 Store Development',
                desc: 'Tailored e-commerce stores designed for high conversion, responsive mobile shopping, and bespoke business workflows.',
                icon: '🛍️',
                features: ['Custom UI/UX Theme Design', 'Multi-Store Architecture', 'Conversion-Optimized Checkout']
              },
              {
                title: 'Adobe Commerce Cloud Setup',
                desc: 'PaaS deployment on Adobe Commerce Cloud with automated deployment scripts, Fastly CDN caching, and high availability.',
                icon: '☁️',
                features: ['Cloud Auto-Scaling', 'Fastly VCL & WAF Shield', 'Continuous Integration / CD']
              },
              {
                title: 'Hyvä Themes & PWA Studio',
                desc: 'Transform sluggish stores into blazing fast storefronts with sub-second page loads and 95+ Google Lighthouse scores.',
                icon: '⚡',
                features: ['Hyvä Theme Implementation', 'PWA Offline Shopping', 'Eliminate JS Bloat']
              },
              {
                title: 'Version Upgrade & Migration',
                desc: 'Seamless migration from Magento 1.x or legacy 2.x to the latest Magento 2.4 with complete data, order, and SEO preservation.',
                icon: '🚀',
                features: ['Zero Data Loss Migration', 'Extension Modernization', 'SEO Ranking Protection']
              },
              {
                title: 'Custom Module & ERP Integration',
                desc: 'Bespoke Magento extensions and bi-directional connectors for NetSuite, SAP, Salesforce, and custom warehouse APIs.',
                icon: '🔄',
                features: ['Bi-Directional ERP Sync', 'Custom Payment Gateways', 'Automated Inventory Queues']
              },
              {
                title: 'Performance Audit & 24/7 SLA Support',
                desc: 'Full-stack bottleneck profiling, database index optimization, security patch installation, and 24/7 emergency response.',
                icon: '🛡️',
                features: ['Guaranteed SLA Response', 'New Relic Performance Audits', 'Zero-Day Patching']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-[14px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,95,150,0.15)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Light Sky/Ice Blue Diagonal Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6F5FD] via-[#F0F9FF] to-[#D4EEFD] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 pointer-events-none rounded-[14px]" />

                {/* Top Accent Gradient Line (Dark Blue -> Sky Blue) */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 ease-out z-10" />
                {/* Bottom Accent Gradient Line (Sky Blue -> Dark Blue) */}
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

                <div className="relative z-10 space-y-5">
                  <div className="w-14 h-14 bg-slate-50 group-hover:bg-white rounded-xl shadow-xs border border-slate-200/80 group-hover:border-[#BAE6FD] flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0F19] group-hover:text-[#005F96] leading-snug transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#556987] group-hover:text-slate-700 leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 pt-2 border-t border-slate-200/80 group-hover:border-[#BAE6FD]/80 transition-colors">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 group-hover:text-slate-800 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005F96] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/60 group-hover:border-[#BAE6FD]/80 transition-colors">
                  <a
                    href="#discuss-project"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005F96] group-hover:text-[#004A75] transition-colors"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Key Business Benefits */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Magento / Adobe Commerce?
            </h2>
            <p className="text-slate-600 text-base">
              The platform of choice for the world's most demanding high-volume retailers and B2B manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Unlimited Customizability',
                desc: 'Full open-source architecture allowing limitless tailoring of checkout flows, custom pricing logic, and product configurations.',
                icon: <Zap className="w-6 h-6 text-[#005F96]" />
              },
              {
                title: 'Multi-Store & Global Expansion',
                desc: 'Manage multiple storefronts, languages, currencies, and tax rules across regions from a single centralized admin panel.',
                icon: <Layers className="w-6 h-6 text-[#006699]" />
              },
              {
                title: 'Advanced B2B Commerce Features',
                desc: 'Native corporate accounts, custom catalog pricing, quick requisition lists, RFQ quoting, and credit payment terms.',
                icon: <Users className="w-6 h-6 text-blue-600" />
              },
              {
                title: 'Lightning-Fast Hyvä Storefronts',
                desc: 'Sub-second page speeds, superior mobile conversion rates, and perfect Core Web Vitals with cutting-edge Hyvä themes.',
                icon: <Star className="w-6 h-6 text-indigo-600" />
              },
              {
                title: 'Seamless ERP & Warehouse Sync',
                desc: 'Bi-directional real-time connectors for SAP, NetSuite, Dynamics 365, and major 3PL logistics networks.',
                icon: <Code2 className="w-6 h-6 text-sky-600" />
              },
              {
                title: 'PCI-DSS Compliant Security',
                desc: 'Strict role-based permissions, two-factor authentication, Fastly web application firewall, and tokenized payments.',
                icon: <ShieldCheck className="w-6 h-6 text-[#005F96]" />
              }
            ].map((ben, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 border border-slate-100">
                  {ben.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{ben.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Column-Locked Responsive Pipeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              8-Step Magento Development Lifecycle
            </h2>
            <p className="text-slate-600 text-base">
              A disciplined e-commerce engineering framework ensuring high performance, security, and smooth store launches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Store Strategy', desc: 'Catalog structure, ERP integration mapping, and hosting sizing.' },
              { step: '02', title: 'UI/UX & Mobile Design', desc: 'Conversion-focused wireframes, mobile-first design, and checkout UX.' },
              { step: '03', title: 'Hyvä / Frontend Coding', desc: 'Fast Hyvä theme integration, Tailwind styling, and micro-interactions.' },
              { step: '04', title: 'Backend & Module Dev', desc: 'Custom extension architecture, custom pricing logic, and cron queues.' },
              { step: '05', title: 'ERP & Payment Sync', desc: 'Connecting SAP, NetSuite, Stripe, Adyen, and shipping carrier APIs.' },
              { step: '06', title: 'Catalog & Data Migration', desc: 'Secure transfer of customers, order history, products, and SEO 301s.' },
              { step: '07', title: 'Load & Security Testing', desc: 'High-concurrency black-friday load tests and PCI-DSS vulnerability scans.' },
              { step: '08', title: 'Launch & 24/7 SLA Support', desc: 'Zero-downtime DNS cutover, Varnish cache warm-up, and monitoring.' }
            ].map((st, idx) => (
              <div key={idx} className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 relative hover:border-[#005F96] transition-colors">
                <div className="text-2xl font-black text-[#005F96] mb-2">{st.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Flexible Hiring Models */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Flexible Engagement & Hiring Models
            </h2>
            <p className="text-slate-400 text-base">
              Hire certified Magento developers or partner with us for turnkey e-commerce store execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Dedicated Team',
                badge: 'Most Popular',
                desc: 'Full-time dedicated Magento engineers integrated directly into your sprint rituals.',
                points: ['100% Dedicated Developers', 'Direct Daily Communication', 'Flexible Monthly Scaling']
              },
              {
                title: 'Fixed Price',
                badge: 'Guaranteed Scope',
                desc: 'Milestone-based store builds with agreed specifications and locked budgets.',
                points: ['Strict Budget Certainty', 'Detailed Scope of Work', 'Clear Milestone Sign-offs']
              },
              {
                title: 'Time & Material',
                badge: 'Maximum Agility',
                desc: 'Pay-as-you-go model for continuous feature enhancement and evolving roadmaps.',
                points: ['Pay Only for Hours Used', 'Rapid Pivot Flexibility', 'Bi-Weekly Invoicing']
              },
              {
                title: '24/7 Managed SLA',
                badge: 'Enterprise Uptime',
                desc: 'Round-the-clock incident response, security patches, and peak-season standby.',
                points: ['Guaranteed Response SLAs', 'Proactive Threat Patching', 'Dedicated Account Lead']
              }
            ].map((model, idx) => (
              <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block px-2.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full">
                    {model.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white">{model.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{model.desc}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-700">
                    {model.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="#discuss-project"
                    className="block text-center py-2.5 px-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 rounded-lg text-xs font-bold transition-all"
                  >
                    Hire Developers
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Stack (Exact 1:1 Match) */}
      <TechnologyStackGrid />

      {/* 6. We Have Been Featured In (Exact 1:1 Match) */}
      <FeaturedInLogosGrid />

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Get answers to common queries regarding our enterprise Magento / Adobe Commerce development services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart & Contact Discuss Form Card */}
      <section id="discuss-project" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: What Sets Us Apart */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#005F96] text-xs font-bold uppercase tracking-widest rounded-full">
                Why Firevy.co
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                What Sets Us Apart As Magento Development Company?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                We combine deep technical mastery of Adobe Commerce with conversion-rate optimization and lightning-fast frontend engineering to maximize store revenue.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Certified Adobe Commerce Experts', desc: 'Our developers hold official Adobe Certified Expert and Master credentials.' },
                  { title: 'Hyvä Themes Pioneer', desc: 'Proven track record building ultra-fast Hyvä stores with 90+ Core Web Vitals.' },
                  { title: 'Complex ERP & 3PL Integration Mastery', desc: 'Flawless bi-directional real-time connectors with enterprise backends.' },
                  { title: 'Peak-Season 24/7 Standby Support', desc: 'Dedicated engineering support ensuring zero downtime during BFCM sales.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div className="w-8 h-8 rounded-lg bg-[#005F96] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Let's Discuss Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#005F96] via-[#006699] to-[#005F96]" />
                
                <h3 className="text-2xl font-black text-slate-900 mb-2">Let's Discuss Your Magento Project</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and our certified Adobe Commerce architect will respond within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-[#005F96] mx-auto" />
                    <h4 className="text-base font-bold text-slate-900">Thank You!</h4>
                    <p className="text-xs text-slate-600">
                      Your inquiry has been received. Our Magento lead will reach out to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Required</label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>Custom Magento 2 Store Development</option>
                          <option>Adobe Commerce Cloud Setup</option>
                          <option>Hyvä Themes Implementation</option>
                          <option>Magento Version Upgrade & Migration</option>
                          <option>Custom Module & ERP Integration</option>
                          <option>Dedicated Magento Developers</option>
                          <option>24/7 Managed Support & SLA</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                        >
                          <option>$10,000 - $25,000</option>
                          <option>$25,000 - $50,000</option>
                          <option>$50,000 - $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, catalog size, and ERP systems..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-[#005F96] focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#005F96] hover:bg-[#082d49] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <span>Submit Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagentoDevelopmentService;
