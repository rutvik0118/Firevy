import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
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
  Code2
} from 'lucide-react';

export const DrupalDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState('cms');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Drupal Web Development',
    budget: '$10,000 - $25,000',
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
        serviceType: 'Drupal Web Development',
        budget: '$10,000 - $25,000',
        message: ''
      });
    }, 6000);
  };

  const techStack = {
    cms: [
      { name: 'Drupal 10 / 11', desc: 'Enterprise Headless & Monolith CMS', icon: '💧' },
      { name: 'Drush & Composer', desc: 'Automated CLI & Dependency Tools', icon: '⚙️' },
      { name: 'Acquia Cloud', desc: 'Enterprise Digital Experience Platform', icon: '☁️' },
      { name: 'Pantheon', desc: 'WebOps & High-Availability Hosting', icon: '🏛️' },
      { name: 'Twig Templating', desc: 'Secure & Modular Rendering Engine', icon: '🌿' },
      { name: 'Gatsby / Next.js', desc: 'Decoupled Frontends for Headless Drupal', icon: '⚡' }
    ],
    languages: [
      { name: 'PHP 8.2+', desc: 'Modern Object-Oriented Backend Core', icon: '🐘' },
      { name: 'Symfony Components', desc: 'Rock-solid Architectural Foundation', icon: '🎼' },
      { name: 'React.js', desc: 'Dynamic Interactive Frontend Widgets', icon: '⚛️' },
      { name: 'Tailwind / CSS3', desc: 'Responsive Semantic Styling', icon: '🎨' },
      { name: 'TypeScript', desc: 'Type-Safe Headless Integrations', icon: '🔷' },
      { name: 'GraphQL & REST API', desc: 'Decoupled Content Query Layer', icon: '🔄' }
    ],
    database: [
      { name: 'MySQL / MariaDB', desc: 'High-Performance Relational Storage', icon: '🐬' },
      { name: 'PostgreSQL', desc: 'Enterprise SQL Compliance', icon: '🐘' },
      { name: 'Redis / Memcached', desc: 'Blazing Fast In-Memory Cache', icon: '⚡' },
      { name: 'Apache Solr / Elasticsearch', desc: 'Enterprise-Grade Deep Search', icon: '🔍' },
      { name: 'Varnish HTTP Cache', desc: 'Edge Reverse-Proxy Acceleration', icon: '🛡️' },
      { name: 'Cloudflare CDN', desc: 'Global Edge Security & Caching', icon: '🌐' }
    ],
    infrastructure: [
      { name: 'AWS Cloud', desc: 'Auto-Scaling EC2, RDS & S3 Storage', icon: '☁️' },
      { name: 'Docker & DDEV', desc: 'Isolated Local & Production Stacks', icon: '🐳' },
      { name: 'Kubernetes', desc: 'Container Orchestration & Zero-Downtime', icon: '☸️' },
      { name: 'GitHub Actions / GitLab CI', desc: 'Automated Testing & Deployment', icon: '🚀' },
      { name: 'OWASP Security Suite', desc: 'Continuous Vulnerability Hardening', icon: '🔒' },
      { name: 'New Relic / Datadog', desc: 'Real-Time APM & Performance Monitoring', icon: '📊' }
    ]
  };

  const faqs = [
    {
      q: "1. What's Drupal development?",
      a: "Drupal developers design websites and web apps using the Drupal CMS. Its flexibility, scalability, and feature set make Drupal famous. Drupal's many modules and themes allow developers to create customized websites for corporate portals, e-commerce platforms, social networks, and more."
    },
    {
      q: "2. What are Drupal's web development benefits?",
      a: "The modular nature of Drupal lets developers construct customized solutions for web development. Its massive scalability and active community-supported security make it a safe solution for websites of all sizes. Numerous developers use Drupal due to its SEO-friendliness and community assistance."
    },
    {
      q: "3. What services do Drupal agencies provide?",
      a: "Drupal firms provide several services to satisfy customers' demands. Standard services include bespoke website construction, module and theme development, Drupal migration, and continuous maintenance and support to keep websites safe and up-to-date. Drupal development businesses guide customers to online success with complete solutions."
    },
    {
      q: "4. What is the Drupal website development time?",
      a: "Complexity, features, and resource availability affect Drupal website development timelines. Basic websites may be finished quickly, while complicated ones might take weeks or months. Based on project needs, working with a competent Drupal development provider may help set a realistic timetable."
    },
    {
      q: "5. What is the cost for Drupal development?",
      a: "Complexity, feature needs, and customization level affect Drupal development costs. Basic projects may cost less, while complex ones with substantial customization may cost more. Engaging with a Drupal development business and giving detailed project specs might help create a relevant pricing estimate."
    },
    {
      q: "6. How do you choose a Drupal Development Company?",
      a: "Selection of the best Drupal development firm is vital for project success. The agency's experience, knowledge, and project success should be considered. Portfolios, customer testimonials, and communication procedures might reveal their skills and client happiness. Examining their readiness to engage and provide continuing support and maintenance might help your Drupal development project succeed."
    },
    {
      q: "7. How does Firevy.co handle Drupal website security?",
      a: "We implement best-in-class security measures including secure coding, regular updates, vulnerability assessments, and configuration hardening. Our team ensures your Drupal website complies with industry standards and protects against common threats such as SQL injection, XSS, and data breaches."
    },
    {
      q: "8. Can Firevy.co help migrate existing websites to Drupal?",
      a: "Yes, we offer seamless website migration services to Drupal from platforms like WordPress, Joomla, and custom CMSs. Our migration process preserves SEO rankings, content integrity, and design aesthetics while upgrading your site's capabilities and performance."
    },
    {
      q: "9. What makes Firevy.co the best Drupal development company in USA?",
      a: "With a 23+ years of proven track record, certified Drupal developers, and a client-centric approach, Firevy.co with 320+ verified reviews stands out by offering comprehensive Drupal services—from custom development to migration, support, and enterprise maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Top Drupal Development Company in USA | Drupal Development Services | Firevy.co"
        description="Firevy.co is a top-rated Drupal Development Company in USA. Our Drupal Development services are secure, innovative, robust, and scalable. Get a Free Quote!"
      />

      {/* =========================================================================
          1. HERO SECTION: Exact 1:1 Match to Reference Screenshot (Light Theme)
          ========================================================================= */}
      <section className="relative bg-[#F0F7FB] text-slate-900 pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden font-sans border-b border-slate-200/80">
        

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Description & Single "Let's Talk" CTA */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Bold Black Main Headline */}
              <h1 className="font-['Poppins',sans-serif] font-[800] text-[34px] leading-[41px] text-black tracking-tight">
                Drupal Development Services in USA
              </h1>

              {/* Description Paragraph */}
              <p className="text-[14px] sm:text-[15px] text-[#475569] font-normal leading-[1.75] max-w-xl">
                Our expertise in Drupal design, development, Theming, and migration, as well as UI/UX design makes us a reliable Drupal website development company. Contact us to get most professional, robust and scalable Drupal CMS development services.
              </p>

              {/* Single "Let's Talk" Button Matching Screenshot */}
              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] transition-all shadow-sm group"
                >
                  <span>Let's Talk</span>
                  <span className="ml-2 text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

            </div>

            {/* Right Column: Realistic Laptop Mockup sitting on white surface */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-full max-w-[540px]">
                
                {/* Laptop Display Shell */}
                <div className="relative mx-auto bg-[#1E293B] rounded-t-[14px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t border-x border-slate-700">
                  {/* Camera hole */}
                  <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700 mx-auto mb-1.5" />
                  
                  {/* Screen Content */}
                  <div className="bg-white rounded-[6px] overflow-hidden border border-slate-200 aspect-[16/10] relative">
                    
                    {/* Simulated Top Website Navigation Bar */}
                    <div className="bg-[#0F172A] text-white px-3 py-1.5 flex items-center justify-between text-[7px]">
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-[8px] text-[#38BDF8]">Firevy.co</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-300 font-medium">
                        <span>Solutions</span>
                        <span>Products</span>
                        <span>Industries</span>
                        <span>Company</span>
                        <span>Blogs</span>
                      </div>
                      <div className="bg-[#005F96] px-2 py-0.5 rounded text-white font-bold">
                        Free Trial
                      </div>
                    </div>

                    {/* Webpage Hero Graphic inside Screen */}
                    <div className="p-3 bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] h-[calc(100%-25px)] flex items-center justify-between">
                      <div className="w-[55%] space-y-1 text-left">
                        <div className="text-[7px] font-bold text-[#005F96] uppercase tracking-wider">Enterprise Consulting</div>
                        <div className="text-[12px] font-black text-[#0B0F19] leading-tight">
                          Change Is Inevitable<br />Just Be Future Ready
                        </div>
                        <div className="text-[6.5px] text-slate-600 leading-tight">
                          Scalable Drupal enterprise cloud platforms that empower your digital business.
                        </div>
                        
                        {/* 3 mini cards */}
                        <div className="grid grid-cols-3 gap-1 pt-1.5">
                          <div className="bg-white p-1 rounded border border-slate-200 text-center">
                            <div className="text-[6px] font-bold text-slate-800">Cloud Ops</div>
                          </div>
                          <div className="bg-white p-1 rounded border border-slate-200 text-center">
                            <div className="text-[6px] font-bold text-slate-800">Decoupled API</div>
                          </div>
                          <div className="bg-white p-1 rounded border border-slate-200 text-center">
                            <div className="text-[6px] font-bold text-slate-800">AI Intelligence</div>
                          </div>
                        </div>
                      </div>

                      {/* Business Team Meeting Photo */}
                      <div className="w-[42%] h-full rounded-[6px] overflow-hidden border border-slate-200 shadow-sm">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                          alt="Enterprise Business Team"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Laptop Base & Notch */}
                <div className="relative mx-auto bg-[#CBD5E1] h-3.5 rounded-b-[10px] shadow-md border-t border-slate-300 max-w-[580px]">
                  <div className="w-16 h-1.5 bg-[#94A3B8] rounded-b-[4px] mx-auto" />
                </div>
                
                {/* Soft shadow below laptop */}
                <div className="w-[85%] h-3 bg-slate-300/50 blur-md rounded-full mx-auto" />

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. BRAND LOGOS MARQUEE / TRUST STRIP (Orient Cement, Amex, Alembic, Honda, etc.)
          ========================================================================= */}
      <section className="py-6 bg-white border-b border-slate-200">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. SECTION 2: "Quality Drupal Development Services"
             (Exact 1:1 match to reference screenshot with Tablet Wireframe Illustration)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Tablet Wireframe & Developer Vector Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Background Soft Glow & Cloud */}
                <div className="absolute inset-0 bg-[#E0F2FE]/80 rounded-full blur-2xl transform scale-90" />
                
                {/* SVG Illustration: Blue Tablet with UI Wireframe & Person Pointing */}
                <svg
                  viewBox="0 0 400 360"
                  className="relative z-10 w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Soft Background Cloud Shape */}
                  <path
                    d="M120 240 C70 240 50 190 80 150 C90 110 140 100 170 110 C200 70 260 60 300 90 C340 70 380 100 380 150 C390 200 360 240 320 240 Z"
                    fill="#BAE6FD"
                    opacity="0.55"
                  />

                  {/* Speech bubble at top right */}
                  <rect x="250" y="60" width="80" height="50" rx="8" fill="#93C5FD" opacity="0.85" />
                  <path d="M270 110 L260 120 L280 110 Z" fill="#93C5FD" opacity="0.85" />

                  {/* Gears behind screen */}
                  <g transform="translate(180, 70)" stroke="#60A5FA" strokeWidth="2.5" fill="#DBEAFE">
                    <circle cx="20" cy="20" r="10" />
                    <path d="M20 5 V10 M20 30 V35 M5 20 H10 M30 20 H35 M9 9 L13 13 M27 27 L31 31 M9 31 L13 27 M27 9 L31 13" />
                  </g>

                  {/* Blue Tablet Frame */}
                  <rect x="70" y="100" width="220" height="190" rx="16" fill="#0284C7" />
                  <rect x="76" y="106" width="208" height="178" rx="12" fill="#F8FAFC" />

                  {/* Top Bar inside Tablet */}
                  <rect x="86" y="118" width="80" height="28" rx="4" fill="#0284C7" />
                  <text x="100" y="136" fill="#fff" fontSize="10" fontWeight="bold">Text</text>
                  <circle cx="148" cy="130" r="4" fill="#fff" />
                  <path d="M140 136 L148 128 L156 136" fill="#fff" />

                  {/* Wireframe Cards inside Tablet */}
                  {/* Card 1 with cross */}
                  <rect x="86" y="156" width="36" height="34" rx="4" fill="#38BDF8" opacity="0.85" />
                  <line x1="86" y1="156" x2="122" y2="190" stroke="#fff" strokeWidth="1.5" />
                  <line x1="122" y1="156" x2="86" y2="190" stroke="#fff" strokeWidth="1.5" />

                  {/* Wireframe lines next to card */}
                  <line x1="130" y1="162" x2="180" y2="162" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="130" y1="172" x2="170" y2="172" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
                  <line x1="130" y1="182" x2="160" y2="182" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

                  {/* Bottom UI Module with Plus (+) Sign */}
                  <rect x="110" y="210" width="80" height="60" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="150" y1="230" x2="150" y2="250" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
                  <line x1="140" y1="240" x2="160" y2="240" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />

                  {/* Person Figure Pointing at Screen */}
                  <g transform="translate(230, 160)">
                    {/* Head & Hair */}
                    <circle cx="40" cy="20" r="14" fill="#FBBF24" />
                    <path d="M26 16 C26 5 54 5 54 16 C48 10 32 10 26 16 Z" fill="#0F172A" />

                    {/* Body / Blue Shirt */}
                    <path d="M24 38 L56 38 L62 100 L18 100 Z" fill="#0284C7" />

                    {/* Arm pointing left */}
                    <path d="M24 45 L-10 30" stroke="#0284C7" strokeWidth="10" strokeLinecap="round" />
                    <circle cx="-12" cy="30" r="5" fill="#FBBF24" />

                    {/* Legs */}
                    <rect x="22" y="100" width="14" height="60" fill="#0F172A" />
                    <rect x="44" y="100" width="14" height="60" fill="#0F172A" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Heading & Description Matching First Screenshot */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] leading-[1.2] tracking-tight font-sans">
                Quality Drupal Development<br />Services
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal">
                Our teams are experts in Drupal development services, combining it with a variety of other technologies to produce cutting-edge digital experiences with ease. Our skilled group of Drupal developers is adept at creating reliable Drupal-based solutions that enable companies to prosper in the digital sphere. Whether you want to create an e-commerce platform, a custom web application, or a dynamic website, we have the know-how and experience to make your idea a reality.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          WORLD WIDE TOP RATED IT COMPANY ON CLUTCH (AWARDS STRIP)
          ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* =========================================================================
          GET SECURE AND SCALABLE DRUPAL WEB DEVELOPMENT SERVICES BY EXPERTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <h2 className="text-center text-[28px] sm:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-12">
            Get Secure And Scalable Drupal Web Development Services By Experts
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Box: Soft blue patterned quote card with cyan quotation mark */}
            <div className="lg:col-span-5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-[14px] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden shadow-xs min-h-[300px] text-left">
              
              {/* Subtle decorative background topography wave lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
                viewBox="0 0 320 300"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 340 40" stroke="#0284C7" strokeWidth="1.8" />
                <path d="M-20 140 C60 190, 140 120, 220 180 C270 210, 310 150, 340 170" stroke="#0284C7" strokeWidth="1.8" />
                <path d="M-20 220 C80 180, 160 260, 240 210 C290 180, 320 250, 340 220" stroke="#0284C7" strokeWidth="1.8" />
              </svg>

              {/* Cyan Quote Mark Icon */}
              <div className="text-[#0284C7] text-6xl sm:text-7xl font-serif font-bold leading-none mb-3 select-none relative z-10">
                “
              </div>

              {/* Bold Quote Headline */}
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.25] tracking-tight relative z-10 font-sans">
                Feature-Rich &<br />Highly Scalable<br />Web Applications
              </h3>
            </div>

            {/* Right Box: In-Depth Narrative Matching Reference */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal text-left">
              <p>
                Drupal is a free and open-source CMS platform that can support a wide range of applications and websites. As a Drupal web development company, we aim to provide reliable, affordable, and tailored solutions to meet your company's specific needs. Because of our Drupal developers' experience and the talented team, we have become the chosen Drupal Development Company for businesses worldwide.
              </p>

              <p>
                We have consistently delivered top-tier Drupal development services, and our team has assisted businesses in sales, improving collaboration, and optimizing business processes. Our developers can create an application or website with Drupal, maintain an existing Drupal site, and upgrade to the most recent Drupal edition. Whatever your need is, our development team offers a wide array of services to cater to your needs.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          OUR PREMIUM SERVICES (10 White Rounded Cards on Deep Blue)
          ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* =========================================================================
          SUCCESS STORIES (3 Rich Case Study Mockups on Soft Cyan)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#EDF7FC] text-slate-900 relative font-sans border-b border-slate-200">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Success Stories
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Know Firevy journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Health and Safety Management System (L&T) */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer text-left">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#005F96] tracking-tight">Outcome</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full border border-[#005F96] flex items-center justify-center font-black text-[#005F96] text-[10px]">
                      L&T
                    </div>
                    <span className="text-[10px] font-bold bg-[#005F96] text-white px-2 py-0.5 rounded-sm uppercase">Case Study</span>
                  </div>
                </div>

                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-slate-50 relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80"
                    alt="Larsen & Toubro Engineering Portal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                    <div className="text-[12px] font-bold">High performance tech ops for 100+ years old leader</div>
                    <div className="text-[10px] text-slate-300">10,000+ Workforce • Top 10 Global EPC</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#005F96] group-hover:text-[#004A75]">
                  <span>Enterprise Portal Solution</span>
                  <span>→</span>
                </div>
              </div>
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19]">
                Health and Safety Management System
              </div>
            </div>

            {/* Card 2: Job Matchers Recruitment Platform */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer text-left">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#1D4ED8] tracking-tight">JOB Matchers</span>
                  <span className="text-[10px] font-bold bg-[#1D4ED8] text-white px-2 py-0.5 rounded-sm uppercase">Recruitment</span>
                </div>

                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-gradient-to-br from-[#1E40AF] to-[#2563EB] p-3 text-white relative aspect-[16/10] flex items-center justify-between">
                  <div className="w-1/2 space-y-1.5 z-10">
                    <div className="text-[13px] sm:text-[14px] font-black leading-tight">Want To Get Hired?</div>
                    <div className="text-[11px] text-blue-100 font-semibold">We Got Opportunities.</div>
                    <div className="inline-block bg-white text-[#1E40AF] text-[9px] font-bold px-2.5 py-1 rounded shadow-sm mt-2">
                      Explore Jobs →
                    </div>
                  </div>

                  <div className="w-1/2 h-full flex items-end justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                      alt="Job Candidate Portal"
                      className="h-[120%] object-cover object-top -mb-3 group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#1D4ED8] group-hover:text-[#1E40AF]">
                  <span>AI Talent Matching Engine</span>
                  <span>→</span>
                </div>
              </div>
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19]">
                Job Portal Website Development
              </div>
            </div>

            {/* Card 3: Live Event Website Development */}
            <div className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group cursor-pointer text-left">
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-extrabold text-[15px] text-[#E11D48] tracking-tight">Live Event</span>
                  <span className="text-[10px] font-bold bg-[#E11D48] text-white px-2 py-0.5 rounded-sm uppercase">Conferencing</span>
                </div>

                <div className="my-3 rounded-[10px] overflow-hidden border border-slate-200 bg-gradient-to-br from-[#FFE4E6] via-[#FECDD3] to-[#FDE047] p-2.5 relative aspect-[16/10] flex items-center justify-center">
                  <div className="w-[85%] bg-[#0F172A] rounded-t-md p-1 shadow-lg border border-slate-400 text-[6px] text-white text-center">
                    <div className="bg-[#881337] py-0.5 font-bold tracking-wide">IT'S TIME TO BOOST YOUR BUSINESS</div>
                    <div className="py-2 flex justify-center space-x-1.5 bg-slate-900">
                      <div className="w-5 h-5 rounded-full bg-rose-400 border border-white overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Speaker" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-5 h-5 rounded-full bg-amber-400 border border-white overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Speaker" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="bg-rose-600 text-white font-bold py-0.5 text-[6px]">REGISTER NOW</div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[12.5px] font-bold text-[#E11D48] group-hover:text-[#BE123C]">
                  <span>Virtual Event Streaming Platform</span>
                  <span>→</span>
                </div>
              </div>
              <div className="p-3 pt-0 font-bold text-[14.5px] text-[#0B0F19]">
                Live Event Website Development
              </div>
            </div>

          </div>

          {/* View All Portfolio Centered Button */}
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[700] text-[14px] transition-all shadow-sm"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Pastel Statistics & CTA Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 max-w-[1240px] mx-auto">
            <div className="bg-[#DDD6FE] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                23+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                Years Experience
              </div>
            </div>

            <div className="bg-[#99F6E4] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                320+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                5-Star Clutch Reviews
              </div>
            </div>

            <div className="bg-[#FECDD3] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-xs">
              <div className="text-[32px] sm:text-[36px] font-[900] text-[#0B0F19] leading-none mb-1">
                2800+
              </div>
              <div className="text-[13px] sm:text-[13.5px] font-[700] text-slate-800">
                Satisfied Clients
              </div>
            </div>

            <div className="bg-[#005F96] rounded-[16px] p-6 text-center flex flex-col items-center justify-center min-h-[140px] shadow-md text-white">
              <div className="text-[16px] sm:text-[17px] font-[800] leading-snug mb-3 text-white">
                Want to start Projects
              </div>
              <a
                href="#quote-form"
                className="bg-white text-[#005F96] hover:bg-slate-100 font-[800] text-[13px] px-6 py-2 rounded-[4px] shadow-sm transition-all inline-block"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. SECTION: "Our Wide Range Of Drupal Development Services Include"
             (6 Rich Cards with Bottom-Right to Top-Left Diagonal Hover Blue Overlay)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F9FD] text-slate-900 relative font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Our Wide Range Of Drupal Development Services Include
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#556987] leading-relaxed">
              We have a Drupal development team with years of experience in delivering world-class Drupal development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto items-stretch">
            
            {/* Card 1: Drupal Web Development Services */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#EDE9FE] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#9333EA]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="6" width="26" height="19" rx="2.5" />
                  <line x1="13" y1="29" x2="23" y2="29" />
                  <line x1="18" y1="25" x2="18" y2="29" />
                  <circle cx="18" cy="14" r="3.5" />
                  <path d="M18 9 V10.5 M18 17.5 V19 M13 14 H14.5 M21.5 14 H23" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Drupal Web Development Services
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                We build feature-rich, highly scalable web apps by leveraging Drupal's LAMP technology stack, which is adaptable to operate systems servers, database management systems, and programming languages.
              </p>
            </div>

            {/* Card 2: Drupal For E-Commerce */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#DCFCE7] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#16A34A]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8 H10 L13 22 H27 L30 11 H11" />
                  <circle cx="14" cy="27" r="2" />
                  <circle cx="25" cy="27" r="2" />
                  <path d="M19 14 V18 M17 16 H21" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Drupal For E-Commerce
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Using their industry-specific experience, our e-commerce software developers create custom online stores, often leveraging open-source e-commerce suites and native or third-party payment and shipment gateways.
              </p>
            </div>

            {/* Card 3: Drupal Content Management */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#FFEDD5] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#EA580C]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#EA580C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="6" width="22" height="24" rx="2" />
                  <line x1="12" y1="12" x2="24" y2="12" />
                  <line x1="12" y1="17" x2="24" y2="17" />
                  <line x1="12" y1="22" x2="19" y2="22" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Drupal Content Management
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Our Drupal content management team makes it easier to create, edit, share, schedule, and archive material. Written material, videos, surveys, podcasts, and infographics are all examples of this.
              </p>
            </div>

            {/* Card 4: Drupal Module Development */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#E0F2FE] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#0284C7]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 8 H22 V14 H28 V22 H22 V28 H14 V22 H8 V14 H14 Z" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Drupal Module Development
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                We leverage Drupal's API to develop custom Drupal modules and customize Drupal Core and community-made modules for a particular use case specific to the site they're working on.
              </p>
            </div>

            {/* Card 5: Drupal Content Migration */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#FEF9C3] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#CA8A04]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#CA8A04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12 H28 M22 6 L28 12 L22 18" />
                  <path d="M28 24 H8 M14 18 L8 24 L14 30" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Drupal Content Migration
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Our Drupal developers make it simple to migrate content, performance data, plugins, metadata, user profiles, and third-party extensions from native CMSs and legacy applications to Drupal.
              </p>
            </div>

            {/* Card 6: Intuitive Web Designs */}
            <div className="relative bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,134,198,0.22)] hover:-translate-y-1.5 transition-all duration-700 ease-out flex flex-col text-left cursor-pointer group overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_10%,#E6F5FD_45%,#BEE7FC_100%)] translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out z-0 pointer-events-none rounded-[12px]" />
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#005F96] via-[#0284C7] to-[#38BDF8] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150 ease-out z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#005F96] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

              <div className="w-12 h-12 rounded-[10px] bg-[#FCE7F3] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 relative z-10 text-[#DB2777]">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" stroke="#DB2777" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="6" width="26" height="24" rx="3" />
                  <line x1="5" y1="13" x2="31" y2="13" />
                  <circle cx="9" cy="9.5" r="1" fill="#DB2777" />
                  <circle cx="13" cy="9.5" r="1" fill="#DB2777" />
                  <rect x="9" y="17" width="7" height="9" rx="1" />
                  <rect x="19" y="17" width="8" height="4" rx="1" />
                  <rect x="19" y="23" width="8" height="3" rx="1" />
                </svg>
              </div>
              <h3 className="text-[17.5px] sm:text-[18.5px] font-[800] text-[#0B0F19] mb-3.5 leading-snug relative z-10">
                Intuitive Web Designs
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.75] flex-1 relative z-10">
                Our front-end Drupal developers create user-friendly UI/UX for agile, responsive, future-proof, mobile-first, and SEO-friendly websites, applications, and themes using the latest tools and technologies.
              </p>
            </div>

          </div>

          {/* Connect Now Centered Button */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[14px] sm:text-[15px] transition-all shadow-sm active:scale-95"
            >
              Connect Now
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. SECTION: SOME OF THE KEY BENEFITS OF USING DRUPAL
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Some Of The Key Benefits Of Using Drupal
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#556987] leading-relaxed">
              The key benefits of Drupal are the numerous management resources available, which include the advanced menu, user settings, customizable app settings, and more. Read to learn more about its advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1240px] mx-auto items-stretch">
            
            {/* Benefit 1: Flexibility */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6 H24 A2 2 0 0 1 26 8 V14 A3 3 0 0 0 29 17 A3 3 0 0 0 26 20 V26 A2 2 0 0 1 24 28 H18 A3 3 0 0 0 15 31 A3 3 0 0 0 12 28 H8 A2 2 0 0 1 6 26 V20 A3 3 0 0 1 9 17 A3 3 0 0 1 6 14 V8 A2 2 0 0 1 8 6 H12" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Flexibility
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Using Drupal, a user can also choose from several site content options, such as polls, videos, texts, blog statistics, and other helpful content.
              </p>
            </div>

            {/* Benefit 2: Versatility */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="12" />
                  <path d="M6 18 H30" />
                  <ellipse cx="18" cy="18" rx="6" ry="12" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Versatility
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Drupal's versatility has earned it the confidence of over a million websites. The platform also has a robust taxonomy, which assists users in categorizing and sorting information.
              </p>
            </div>

            {/* Benefit 3: Customizable */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 11 L5 18 L12 25" />
                  <path d="M24 11 L31 18 L24 25" />
                  <line x1="20" y1="9" x2="16" y2="27" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Customizable
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Users can easily find a range of ideas and features for designers and developers to customize the software. Drupal is on par with many enterprise-class CMS.
              </p>
            </div>

            {/* Benefit 4: Community */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="12" r="4.5" />
                  <path d="M12 28 C12 23 14.5 21 18 21 C21.5 21 24 23 24 28" />
                  <circle cx="9" cy="14" r="3.5" />
                  <path d="M5 27 C5 23.5 7 22 9.5 22 C10.8 22 11.8 22.5 12.5 23.5" />
                  <circle cx="27" cy="14" r="3.5" />
                  <path d="M31 27 C31 23.5 29 22 26.5 22 C25.2 22 24.2 22.5 23.5 23.5" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Community
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Drupal's open-source model offers continuous improvement and innovation as Drupal has a pool of diverse experts regularly working to make Drupal better and easy to use.
              </p>
            </div>

            {/* Benefit 5: User Experience */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="8" width="24" height="18" rx="2" />
                  <path d="M11 16 L16 21 L25 12" strokeWidth="2.5" />
                  <line x1="12" y1="30" x2="24" y2="30" strokeWidth="2.5" />
                  <line x1="18" y1="26" x2="18" y2="30" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                User Experience
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Drupal offers content authors and marketers an easy-to-use page-building experience that empower everyone to build powerful, unforgettable customer experiences.
              </p>
            </div>

            {/* Benefit 6: Security */}
            <div className="bg-white rounded-[14px] p-7 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col text-left group">
              <div className="w-12 h-12 flex items-center justify-start text-[#0086C6] mb-5">
                <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="#0086C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 L28 10 V18 C28 24 23 29 18 31 C13 29 8 24 8 18 V10 Z" />
                  <path d="M14 18 L17 21 L23 15" strokeWidth="2.2" />
                </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3 leading-snug">
                Security
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] leading-[1.7] flex-1">
                Our Drupal team for maintenance and security are available to identify the potential risks and threats in both Drupal core and contributed Drupal modules; keeping your website up and running.
              </p>
            </div>

          </div>

          {/* Connect Now Centered Button */}
          <div className="text-center mt-10">
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center px-8 py-3 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[14px] sm:text-[15px] transition-all shadow-sm active:scale-95"
            >
              Connect Now
            </a>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. SECTION: PROCESS WE FOLLOW (8-Step Column-Locked Loop Track)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100 overflow-hidden">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
              Process We Follow
            </h2>
          </div>

          <div className="max-w-[1240px] mx-auto relative">
            {/* Top Row: Steps 01 to 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
              
              {/* Step 01: Requirement Gathering */}
              <div className="bg-[#EDE9FE]/75 border border-[#DDD6FE] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#8B5CF6]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 A7 7 0 0 0 11 13 C11 17 14 19 14 22 H22 C22 19 25 17 25 13 A7 7 0 0 0 18 6 Z" />
                        <line x1="14" y1="25" x2="22" y2="25" />
                        <line x1="15" y1="28" x2="21" y2="28" />
                        <line x1="18" y1="2" x2="18" y2="4" />
                        <line x1="9" y1="6" x2="10.5" y2="7.5" />
                        <line x1="27" y1="6" x2="25.5" y2="7.5" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">01</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Requirement Gathering
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    Focus would be on documentation first for clarity and better understanding from both sides and come to the same page.
                  </p>
                </div>
              </div>

              {/* Step 02: Designs, Wireframes, & Mockups */}
              <div className="bg-[#DCFCE7]/75 border border-[#BBF7D0] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#06B6D4]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#06B6D4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 L23 11 L13 21 L8 22 L9 17 Z" />
                        <circle cx="18" cy="11" r="1.5" fill="#06B6D4" />
                        <path d="M6 30 C10 26 14 26 18 30" />
                        <circle cx="6" cy="30" r="1.5" />
                        <circle cx="18" cy="30" r="1.5" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">02</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Designs, Wireframes, & Mockups
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We help our clients to create an interactive and wonder to watch UI designs that describes user-friendly flow of web/app/platform.
                  </p>
                </div>
              </div>

              {/* Step 03: Prototype Demo */}
              <div className="bg-[#FFEDD5]/75 border border-[#FED7AA] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#F97316]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#F97316" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="10" width="12" height="18" rx="2" />
                        <rect x="17" y="6" width="12" height="18" rx="2" />
                        <circle cx="13" cy="24" r="1.2" fill="#F97316" />
                        <circle cx="23" cy="20" r="1.2" fill="#F97316" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">03</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Prototype Demo
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    After finalizing and designs approval, we freeze the scope and help our client with demo or prototype to have a look and feel of the app/web/platform.
                  </p>
                </div>
              </div>

              {/* Step 04: Changes And Confirmation */}
              <div className="bg-[#FEF9C3]/75 border border-[#FEF08A] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#D97706]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="18" r="4" />
                        <path d="M18 8 A10 10 0 0 1 28 18" />
                        <polyline points="24 18 28 18 28 14" />
                        <path d="M18 28 A10 10 0 0 1 8 18" />
                        <polyline points="12 18 8 18 8 22" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">04</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Changes And Confirmation
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    Clients can feel free to add and mention the required changes as per expectations they need in the existing platform. We'll proceed with client's confirmation on the same.
                  </p>
                </div>
              </div>

            </div>

            {/* Middle Connecting Loop Track (100% Column-Locked to Grid) */}
            <div className="hidden lg:block my-7 relative">
              <div className="h-14 border border-[#CBD5E1] rounded-[16px] relative px-3">
                
                {/* Top Track Rightward Flow Arrows */}
                <div className="absolute -top-[11px] left-0 right-0 flex justify-around pointer-events-none px-[12%]">
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                  <span className="text-[#94A3B8] text-[12px]">►</span>
                </div>

                {/* Bottom Track Leftward Flow Arrows */}
                <div className="absolute -bottom-[11px] left-0 right-0 flex justify-around pointer-events-none px-[12%]">
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                  <span className="text-[#94A3B8] text-[12px]">◄</span>
                </div>

                {/* 4-Column Aligned Connectors and Nodes */}
                <div className="grid grid-cols-4 gap-5 lg:gap-6 h-full items-center">
                  
                  {/* Column 1 */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#8B5CF6] -translate-y-1/2 shadow-xs" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#84CC16] translate-y-1/2 shadow-xs" />
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#10B981] -translate-y-1/2 shadow-xs" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#A855F7] translate-y-1/2 shadow-xs" />
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#F97316] -translate-y-1/2 shadow-xs" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#0284C7] translate-y-1/2 shadow-xs" />
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Column 4 */}
                  <div className="relative h-full flex flex-col justify-between items-center">
                    <div className="absolute -top-7 h-7 flex flex-col items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-t-[6px] border-t-[#94A3B8]" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#EAB308] -translate-y-1/2 shadow-xs" />
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[2px] border-[#EC4899] translate-y-1/2 shadow-xs" />
                    <div className="absolute -bottom-7 h-7 flex flex-col-reverse items-center justify-end">
                      <div className="w-[1.5px] h-4 bg-[#CBD5E1]" />
                      <div className="w-0 h-0 border-x-[3.5px] border-x-transparent border-b-[6px] border-b-[#94A3B8]" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Row: Steps 08, 07, 06, 05 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10 mt-6 lg:mt-0">
              
              {/* Step 08: SEO */}
              <div className="bg-[#FEF9C3]/75 border border-[#FEF08A] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#65A30D]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#65A30D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="16" cy="16" r="8" />
                        <line x1="22" y1="22" x2="30" y2="30" strokeWidth="2.8" />
                        <text x="10.5" y="18.5" fontSize="6" fontWeight="bold" fill="#65A30D" stroke="none">SEO</text>
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">08</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    SEO
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We are open to help our clients for promoting their businesses/products with providing complimentary SEO services, providing them a help hand to market their product/business.
                  </p>
                </div>
              </div>

              {/* Step 07: Support And Maintenance */}
              <div className="bg-[#F3E8FF]/75 border border-[#E9D5FF] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#9333EA]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#9333EA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="7" width="26" height="22" rx="2.5" />
                        <line x1="5" y1="13" x2="31" y2="13" />
                        <circle cx="9" cy="10" r="0.8" fill="#9333EA" />
                        <circle cx="12" cy="10" r="0.8" fill="#9333EA" />
                        <circle cx="15" cy="10" r="0.8" fill="#9333EA" />
                        <path d="M14 24 L22 16" />
                        <path d="M21 15 L23 17" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">07</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Support And Maintenance
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We provide free service and support as per decided terms in our agreement. We also provide packages further monthly or yearly based on your requirement
                  </p>
                </div>
              </div>

              {/* Step 06: Deployment */}
              <div className="bg-[#E0F2FE]/75 border border-[#BAE6FD] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#16A34A]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="12" width="22" height="15" rx="2" />
                        <line x1="4" y1="27" x2="32" y2="27" strokeWidth="2.5" />
                        <path d="M18 5 C15 7 14 11 14 15 L18 16 L22 15 C22 11 21 7 18 5 Z" fill="#fff" />
                        <circle cx="18" cy="10" r="1.5" fill="#16A34A" />
                        <path d="M14 15 L11 17 L12 20 L15 18" />
                        <path d="M22 15 L25 17 L24 20 L21 18" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">06</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Deployment
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    We are open to help our clients with final testing, UAT, training, and final deployment of the source code, and launching in client's platform.
                  </p>
                </div>
              </div>

              {/* Step 05: Development */}
              <div className="bg-[#FFE4E6]/75 border border-[#FECDD3] rounded-[14px] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#EC4899]">
                      <svg viewBox="0 0 36 36" className="w-11 h-11" fill="none" stroke="#EC4899" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="7" width="26" height="22" rx="2.5" />
                        <line x1="5" y1="13" x2="31" y2="13" />
                        <circle cx="8" cy="10" r="0.8" fill="#EC4899" />
                        <circle cx="11" cy="10" r="0.8" fill="#EC4899" />
                        <path d="M13 18 L10 21 L13 24" />
                        <path d="M23 18 L26 21 L23 24" />
                        <line x1="19" y1="17" x2="17" y2="25" />
                      </svg>
                    </div>
                    <span className="text-[28px] sm:text-[32px] font-[900] text-[#1E293B] leading-none">05</span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] font-[800] text-[#0B0F19] mb-2.5 leading-snug">
                    Development
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.65]">
                    With client approval, we start the development with the technologies best suited for you, and deliver you results in the timeframe as committed by our technical team.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. SECTION: BUSINESS FRIENDLY HIRING MODELS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F9FD] text-slate-900 relative font-sans border-b border-slate-200/80">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Business Friendly Hiring Models : Building Greater Futures Through Innovation
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#556987] leading-relaxed max-w-3xl mx-auto">
              We offer three different types of hiring models that are designed to suit your diverse needs and budget. Take a look at our hiring models:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-[1280px] mx-auto items-stretch">
            {/* Model 1: Fixed Price */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#8B5CF6] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 8 C14 6 16 5 18 5 C20 5 22 6 22 8 Z" />
                    <line x1="13" y1="10" x2="23" y2="10" strokeWidth="2.2" />
                    <path d="M14 10 C9 14 7 28 9 30 C11 32 25 32 27 30 C29 28 27 14 22 10 Z" />
                    <path d="M18 15 V25 M15.5 17.5 C15.5 16 17 15 18 15 C19.5 15 20.5 16 20.5 17.5 C20.5 20 15.5 19.5 15.5 22 C15.5 23.5 16.5 24.5 18 24.5 C19.5 24.5 20.5 23.5 20.5 22" strokeWidth="1.6" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Fixed Price
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'Optimal flexibility',
                    'Agile team',
                    'Small projects',
                    'Complete control over budget'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 2: Time Material */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#22C55E] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="4" x2="18" y2="7" strokeWidth="2.5" />
                    <line x1="15" y1="4" x2="21" y2="4" strokeWidth="2" />
                    <circle cx="18" cy="20" r="12" />
                    <polyline points="18 14 18 20 22 20" strokeWidth="2" />
                    <line x1="2" y1="16" x2="5" y2="16" strokeWidth="1.8" />
                    <line x1="1" y1="20" x2="4" y2="20" strokeWidth="1.8" />
                    <line x1="2" y1="24" x2="5" y2="24" strokeWidth="1.8" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Time Material
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you are represent a company with undefined projects and need ongoing work, ask about hourly. It's a pay-as-you-go hour-wise rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'No hidden costs',
                    'Working based hours',
                    'Monthly billing',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 3: Dedicated Team */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#F97316] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#F97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="12" r="4.5" />
                    <path d="M12 28 C12 23 14.5 21 18 21 C21.5 21 24 23 24 28" />
                    <circle cx="9" cy="14" r="3.5" />
                    <path d="M5 27 C5 23.5 7 22 9.5 22 C10.8 22 11.8 22.5 12.5 23.5" />
                    <circle cx="27" cy="14" r="3.5" />
                    <path d="M31 27 C31 23.5 29 22 26.5 22 C25.2 22 24.2 22.5 23.5 23.5" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Dedicated Team
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  If you represent a company with a project that needs dedicated attention, ask about dedicated teams. It's a pay-as-you-go monthly rolling contract.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'No hidden costs',
                    '160 hours of assured work',
                    'Monthly billing',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

            {/* Model 4: Buckets Approach */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col justify-between group text-left">
              <div>
                <div className="w-12 h-12 mx-auto flex items-center justify-center text-[#06B6D4] mb-3">
                  <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="15" cy="20" r="5" />
                    <path d="M15 13 V15 M15 25 V27 M8 20 H10 M20 20 H22 M10 15 L11.5 16.5 M18.5 23.5 L20 25 M10 25 L11.5 23.5 M18.5 16.5 L20 15" />
                    <circle cx="24" cy="12" r="3.5" />
                    <path d="M24 7 V8.5 M24 15.5 V17 M19 12 H20.5 M27.5 12 H29 M20.5 8.5 L21.5 9.5 M26.5 14.5 L27.5 15.5 M20.5 15.5 L21.5 14.5 M26.5 9.5 L27.5 8.5" />
                  </svg>
                </div>

                <h3 className="text-center text-[18px] sm:text-[19px] font-[800] text-[#0B0F19] mb-3">
                  Buckets Approach
                </h3>

                <p className="text-center text-[12.5px] sm:text-[13px] text-[#556987] leading-[1.65] mb-6">
                  A lot of businesses typically select our bucket approach which allow them for payment convenience once the project is finished and things are in place.
                </p>

                <ul className="space-y-2.5 mb-6 text-left">
                  {[
                    'Direct Resource Monitoring',
                    'Less Risk',
                    'Less budget',
                    'Pay only for measurable work'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-center space-x-2 text-[12.5px] sm:text-[13px] text-[#475569] font-[500]">
                      <Check className="w-4 h-4 text-[#0086C6] stroke-[2.5] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center py-2.5 px-6 rounded-[6px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[13.5px] transition-all shadow-sm active:scale-95 text-center"
                >
                  Hire Now
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. SECTION: TECHNOLOGY STACK & TOOLS (Exact 1:1 Reference Match)
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          9. SECTION: FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight leading-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Find instant answers to common questions about our Drupal development services, timelines, and security standards.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-[10px] overflow-hidden transition-all bg-white text-left"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between font-[700] text-[14.5px] sm:text-[15.5px] text-slate-900 hover:text-[#005F96] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-[13.5px] text-slate-600 leading-[1.7] border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. SECTION 9: "What Sets Us Apart As Drupal Development Company?"
              (Exact 1:1 Match to User Reference Screenshot)
          ========================================================================= */}
      <section id="quote-form" className="py-16 sm:py-20 bg-[#F0F7FB] text-slate-900 relative font-sans">
        <Container>
          {/* Section Title */}
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
              What Sets Us Apart As Drupal Development Company?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-[1240px] mx-auto">
            
            {/* Left Column: 5 Feature Items */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Feature 1: Flexible-Engagement-Models */}
              <div className="flex items-start space-x-4 group text-left">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="11" r="3.2" />
                    <circle cx="11" cy="13" r="2.5" />
                    <circle cx="25" cy="13" r="2.5" />
                    <path d="M14 18 C14 15.5 15.8 14.5 18 14.5 C20.2 14.5 22 15.5 22 18" />
                    <path d="M6 24 C10 24 14 26 18 26 C22 26 26 24 30 24" />
                    <path d="M10 24 L7 28 C7 29 8 30 9 30 L20 30 C24 30 28 27 30 25" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Flexible-Engagement-Models
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.
                  </p>
                </div>
              </div>

              {/* Feature 2: 100% Transparency */}
              <div className="flex items-start space-x-4 group text-left">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="15" cy="18" r="7.5" />
                    <circle cx="21" cy="18" r="7.5" />
                    <line x1="15" y1="11" x2="21" y2="17" strokeWidth="1.2" />
                    <line x1="17" y1="11" x2="23" y2="17" strokeWidth="1.2" />
                    <line x1="19" y1="12" x2="24" y2="17" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    100% Transparency
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    100% transparency policy to keep our client and our team on the same page.
                  </p>
                </div>
              </div>

              {/* Feature 3: Experienced Developers */}
              <div className="flex items-start space-x-4 group text-left">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="11" r="3.5" />
                    <path d="M14 9 C14 6.5 22 6.5 22 9 Z" />
                    <path d="M11 20 C11 16.5 13.5 15.5 18 15.5 C22.5 15.5 25 16.5 25 20" />
                    <rect x="10" y="20" width="16" height="11" rx="2" fill="white" />
                    <path d="M14 24 L12 25.5 L14 27" />
                    <path d="M22 24 L24 25.5 L22 27" />
                    <line x1="19" y1="23.5" x2="17" y2="27.5" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Experienced Developers
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.
                  </p>
                </div>
              </div>

              {/* Feature 4: Timely Delivery */}
              <div className="flex items-start space-x-4 group text-left">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="19" cy="19" r="8" />
                    <line x1="19" y1="15" x2="19" y2="19" strokeWidth="1.8" />
                    <line x1="19" y1="19" x2="22" y2="19" strokeWidth="1.8" />
                    <line x1="19" y1="7" x2="19" y2="9.5" strokeWidth="2" />
                    <line x1="16.5" y1="7" x2="21.5" y2="7" strokeWidth="2" />
                    <line x1="6" y1="15" x2="8.5" y2="15" strokeWidth="1.5" />
                    <line x1="5" y1="19" x2="8" y2="19" strokeWidth="1.5" />
                    <line x1="6" y1="23" x2="8.5" y2="23" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Timely Delivery
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    We value the time and are particular about timely deliveries by following the highest quality standards.
                  </p>
                </div>
              </div>

              {/* Feature 5: Technical Support */}
              <div className="flex items-start space-x-4 group text-left">
                <div className="w-14 h-14 bg-white rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="13" r="3.5" />
                    <path d="M18 7 V8.5 M18 17.5 V19 M12 13 H13.5 M22.5 13 H24" />
                    <path d="M13.8 8.8 L14.9 9.9 M21.1 16.1 L22.2 17.2 M13.8 17.2 L14.9 16.1 M21.1 9.9 L22.2 8.8" />
                    <path d="M8 26 C12 26 15 28 19 28 C23 28 26 26 29 26" />
                    <path d="M11 26 L8 30 C8 31 9 32 10 32 L21 32 C25 32 28 29 30 27" />
                  </svg>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-[800] text-[15px] sm:text-[16px] text-[#0B0F19] mb-1">
                    Technical Support
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                    Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: "Let's Discuss" Form Card */}
            <div className="lg:col-span-6 relative">
              
              <div className="bg-white rounded-[10px] border border-slate-300/80 p-7 sm:p-9 shadow-sm relative overflow-visible text-left">
                
                {/* Decorative Top-Left Accent Ribbon / Flag Badge */}
                <div className="absolute -top-[1px] -left-[1px] w-9 h-9 pointer-events-none overflow-hidden">
                  <div className="w-0 h-0 border-t-[34px] border-t-[#0284C7] border-r-[34px] border-r-transparent relative">
                    <div className="absolute top-[-34px] left-0 w-0 h-0 border-t-[38px] border-t-transparent border-l-[38px] border-l-[#FDE68A]/70" />
                  </div>
                </div>

                {/* Decorative Bottom-Right Triangle Accent */}
                <div className="absolute -bottom-1 -right-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-[#0284C7] pointer-events-none" />

                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-[22px] font-[800] text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[14px] text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting Firevy.co. Our Drupal technical lead will review your project requirements and get in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-center text-[22px] font-[800] text-[#0B0F19] mb-5 tracking-tight">
                      Let's Discuss
                    </h3>

                    {/* Your name * */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Email ID * */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Mobile Number * with +91 Country Code Box */}
                    <div className="flex">
                      <div className="px-3.5 py-3 bg-slate-50 border border-r-0 border-slate-300 rounded-l-[4px] text-[13.5px] font-semibold text-slate-700 flex items-center justify-center shrink-0 select-none">
                        <span>+91 •</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Mobile Number *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-r-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all"
                      />
                    </div>

                    {/* Tell us more about your project * */}
                    <div>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project *"
                        className="w-full px-4 py-3 text-[13.5px] rounded-[4px] border border-slate-300 text-slate-900 placeholder-slate-500 focus:outline-none focus:border-[#005F96] focus:ring-1 focus:ring-[#005F96] bg-white transition-all resize-none"
                      />
                    </div>

                    {/* Cloudflare Turnstile Mockup Badge */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-[4px] px-4 py-2.5 flex items-center justify-between select-none">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[13px] font-[600] text-slate-800">Success!</span>
                      </div>

                      <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-1.5">
                          <svg viewBox="0 0 24 16" className="w-6 h-4" fill="#F48120">
                            <path d="M19.35 6.04C18.67 2.59 15.64 0 12 0 9.11 0 6.6 1.64 5.35 4.04 2.34 4.36 0 6.91 0 10c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                          </svg>
                          <span className="text-[9px] font-black tracking-wider text-slate-800 uppercase">CLOUDFLARE</span>
                        </div>
                        <div className="text-[8px] text-slate-400 space-x-1">
                          <span className="hover:underline cursor-pointer">Privacy</span>
                          <span>•</span>
                          <span className="hover:underline cursor-pointer">Help</span>
                        </div>
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-[4px] bg-[#005F96] hover:bg-[#004A75] text-white font-[800] text-[15px] transition-all shadow-sm cursor-pointer active:scale-[0.99]"
                      >
                        Send
                      </button>
                    </div>
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

export default DrupalDevelopmentService;
