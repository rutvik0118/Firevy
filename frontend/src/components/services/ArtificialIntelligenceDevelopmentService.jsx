import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import FeaturedInLogosGrid from '../home/FeaturedInLogosGrid';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Brain,
  Zap,
  ShieldCheck,
  Clock,
  Headphones,
  Users,
  Layers,
  Star,
  ExternalLink,
  Code2,
  TrendingUp,
  DollarSign,
  Phone,
  MessageCircle,
  Search,
  Bot,
  Terminal,
  Database,
  Smartphone,
  Globe
} from 'lucide-react';

export const ArtificialIntelligenceDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { value: '$30 Billion', label: 'The expected expansion of the AI-powered automation market by 2030.' },
    { value: '60%', label: 'The percentage of global enterprises implementing AI technologies by 2024, showing its widespread adoption.' },
    { value: '$3 Trillion', label: 'Projected economic value AI will bring to industries like healthcare, finance, and manufacturing by 2025.' },
    { value: '$350 Billion', label: 'The anticipated value of the European AI market by 2027, reflecting increasing investment across regions.' },
    { value: '12% - 18%', label: 'The forecasted growth rate of the AI-driven cybersecurity market, underlining AI impact in safeguarding digital spaces.' },
    { value: '$500 Billion', label: 'The estimated value of the global AI-driven fraud detection market by 2030, demonstrating its growing importance in financial security.' }
  ];

  const tailoredSolutions = [
    {
      id: 0,
      title: 'AI Consulting',
      icon: <Brain className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Our AI consulting services are designed to accelerate your business transformation. We help optimize your operations and create a forward-thinking AI strategy that aligns perfectly with your long-term goals.',
      bullets: [
        'AI Roadmap Development',
        'AI Solution Implementation',
        'Data Strategy & Management',
        'AI Governance and Ethics',
        'AI Risk Assessment & Compliance',
        'AI-Driven Process Optimization'
      ]
    },
    {
      id: 1,
      title: 'RAG (Retrieval Augmented Generation)',
      icon: <Database className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Harness the power of continuous data flow to fuel Large Language Models (LLMs) with the latest, most accurate information. This ensures your AI systems stay relevant and capable of addressing complex queries efficiently.',
      bullets: [
        'RAG Consulting & Architecture',
        'RAG Models Customization',
        'RAG Integration Services',
        'Diverse Vector Database Support (Pinecone, Milvus, Chroma)',
        'Real-Time Data Ingestion & Processing',
        'Optimized Query Performance & Accuracy'
      ]
    },
    {
      id: 2,
      title: 'Custom LLMs for Enterprises',
      icon: <Cpu className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'We offer tailored LLMs specifically built for your business needs. By integrating these advanced AI models, we enhance operational workflows, decision-making processes, and customer experiences.',
      bullets: [
        'LLM Model Customization',
        'Enterprise AI Solutions',
        'Industry-Specific LLMs',
        'LLM Integration & Deployment',
        'LLM Security & Compliance',
        'LLM Training & Fine-Tuning'
      ]
    },
    {
      id: 3,
      title: 'AI in Mobile Apps',
      icon: <Smartphone className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Stay ahead of the curve by integrating AI into your mobile applications. Our AI-driven solutions create smarter, more responsive mobile apps that improve user experience, engagement, and overall performance.',
      bullets: [
        'AI-Driven Mobile Solutions',
        'Mobile App Automation with AI',
        'AI for Personalization in Mobile Apps',
        'Smart User Interfaces in Mobile Apps',
        'AI for Mobile Security & Fraud Detection',
        'Conversational AI & Chatbot Integration'
      ]
    },
    {
      id: 4,
      title: 'AI in Software',
      icon: <Code2 className="w-6 h-6 text-[#006B8F]" />,
      shortDesc: 'Infuse your software with AI capabilities to enhance functionality, optimize processes, and deliver superior performance. By automating complex tasks, we help you achieve faster development cycles.',
      bullets: [
        'AI-Enhanced Software Development',
        'Automation & Optimization in Software',
        'AI for Predictive Analytics',
        'Integrating AI into Existing Software Solutions',
        'AI for Software Testing & Debugging',
        'Scalable AI Architectures for Software'
      ]
    }
  ];

  const expertOfferings = [
    {
      title: 'Generative AI',
      desc: 'We use top-notch models such as GAN, Diffusion, and LLM to help construct Autonomous AI agents, multi-modal virtual assistants, customer support, automated content generation, conversation intelligence, and other unique solutions.',
      link: '/generative-ai-development-company'
    },
    {
      title: 'OpenAI’s GPT-4 & Custom LLMs',
      desc: 'The big multimodal language model GPT-4 from OpenAI creates text based on both textual and visual input. We employ it for the analysis of qualitative data, including transcripts and conversations with customer service.',
      link: '/contact'
    },
    {
      title: 'Neuro-Symbolic AI',
      desc: 'In order to overcome the shortcomings of both neural and symbolic AI architectures, neuro-symbolic AI combines both to create a strong AI that is able to reason, learn, and model cognitive processes.',
      link: '/contact'
    },
    {
      title: 'Explainable AI (XAI)',
      desc: 'It contributes to defining model correctness, fairness, transparency, and decision-making results driven by AI. When implementing AI models into production, an organization needs to be able to explain AI to gain stakeholder confidence.',
      link: '/contact'
    },
    {
      title: 'Quantum Machine Learning',
      desc: 'At the vanguard of AI research and application, quantum machine learning holds the potential to solve some of the most difficult issues across multiple high-throughput data-intensive industries.',
      link: '/contact'
    },
    {
      title: 'Multimodal AI',
      desc: 'AI systems are able to comprehend and react to users in a more instinctive and natural way because of multimodal artificial intelligence. It improves user experience, efficiency, and interactive fidelity across touchpoints.',
      link: '/contact'
    }
  ];

  const brandLogos = [
    { name: 'HONDA', image: '/images/honda_logo.png' },
    { name: 'LafargeHolcim', image: '/images/logo_lafargeHolcim.svg' },
    { name: 'Cummins', image: '/images/cummins.webp' },
    { name: "L'ORÉAL", image: '/images/logo_loreal.png' },
    { name: 'TDSG', image: '/images/logo_tdsg.png' },
    { name: 'ASTRAL PIPES', image: '/images/logo_astral.png' },
    { name: 'CLP INDIA', image: '/images/logo_clp_india.svg' },
    { name: 'adani', image: '/images/logo_adani.svg' },
    { name: 'TOYOTA', image: '/images/toyota_logo.webp' }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'AI Chatbot App Development',
      category: 'Conversational AI',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'AI Traffic Management System',
      category: 'Computer Vision & IoT',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Real Estate App Development',
      category: 'PropTech Platform',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'AI Travel App Development',
      category: 'Smart Tourism',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'On Demand AI Recruitment',
      category: 'HR Tech & Matching',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Car Rental App Development',
      category: 'Automotive Mobility',
      image: '/images/beecar.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. Why invest in Artificial Intelligence development services?',
      a: 'Investing in AI solutions empowers enterprises to automate routine tasks, analyze big data for predictive insights, reduce operational expenses, and deliver personalized user experiences that outperform competitors.'
    },
    {
      q: '2. How does your AI development company build custom AI software?',
      a: 'We evaluate your business objectives, prepare and clean datasets, select and fine-tune state-of-the-art neural architectures (like LLMs, NLP, Computer Vision, or RAG), and integrate scalable APIs into your existing enterprise infrastructure.'
    },
    {
      q: '3. What is the difference between Generative AI and traditional AI?',
      a: 'Traditional AI excels in classification, pattern matching, and rule-based prediction, while Generative AI creates net new text, images, synthetic data, voice, and code based on deep learning transformer models.'
    },
    {
      q: '4. Can you integrate AI models with our legacy ERP and CRM platforms?',
      a: 'Yes, our AI engineering squad specializes in custom middleware, secure REST/GraphQL API wrappers, and cloud container deployments ensuring zero disruption to existing legacy systems.'
    },
    {
      q: '5. How do you protect corporate proprietary data when training AI models?',
      a: 'We implement zero-trust data architectures, on-premises or private VPC deployments, strict NDAs, data anonymization pipelines, and SOC2/ISO compliant data governance practices.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Artificial Intelligence Development Company | AI Development Services"
        description="Sapphire Software Solutions is a top artificial intelligence development company in USA. We have trained AI developers expertise in machine learning, custom LLMs, RAG, and chatbot development."
        canonical="/artificial-intelligence-development-company"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Screenshot)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & 2 Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Artificial Intelligence Development Company
              </h1>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.75] font-normal font-sans">
                Are you looking to Mold the future of your company ability to thrive with Artificial Intelligence Solutions for Business? We are the industry leader as a Custom AI Development Company in Artificial intelligence development services that are more intelligent.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Hire AI Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="Artificial Intelligence Development Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. TRUSTED BRAND LOGOS STRIP (Full Width Infinite Auto-Scroll Marquee)
          ========================================================================= */}
      <section className="py-2 bg-white border-b border-slate-200/70 overflow-hidden">
        <BrandLogoMarquee />
      </section>

      {/* =========================================================================
          3. DELIVERING TOP RATED AI DEVELOPMENT SERVICES GLOBALLY
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md">
                <img
                  src="/images/ai_delivering_services_illustration.jpg"
                  alt="Delivering Top Rated AI Development Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Heading & Text */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Delivering Top Rated AI Development Services Globally
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                We guarantee Affordable AI development services and innovative AI Software Development Services, online apps, and mobile software by combining the efforts of our skilled professionals. Our best artificial intelligence development company will aid decision-makers in obtaining a better understanding of their respective business ecosystems, whether those decision-makers work for tech startups, retail companies, hospitals, or corporations. Top Rated AI app development company guarantee additional digital possibilities are made available to Best Enterprise AI Development Company by minimizing the associated risks using our cutting-edge artificial intelligence software development.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. BRIEF ABOUT CUSTOM AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/70 font-sans text-left">
        <Container>
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
              Brief About Custom AI Development Services
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              Scalable and reliable AI development services help businesses build intelligent, future-ready solutions with speed and cost efficiency. Our custom AI development services, including Generative AI development services, are thoroughly tested and guided by skilled AI and deep learning engineers to deliver secure, high-performing digital products.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              Hire Leading AI Development Agency to bring a significant breakthrough in your domain, keeping up with the wave of digitalization, and they apply to fledgling startups and large corporations. Hire AI developers for custom AI solutions for bespoke software solutions driven by AI for many businesses, including those in the financial technology, retail, education, and supply sectors.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. THE GROWING INFLUENCE OF AI (Metric Stat Cards)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              The Growing Influence of AI
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              AI is revolutionizing industries worldwide. It’s time to harness its potential and stay ahead in the competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-start space-y-3"
              >
                <div className="text-[28px] sm:text-[32px] font-[900] text-[#006B8F]">
                  {s.value}
                </div>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. AI SOLUTIONS TAILORED FOR YOUR BUSINESS (Interactive Solutions)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              AI Solutions Tailored for Your Business
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              With our innovative AI services, we are committed to driving smart, scalable, and impactful solutions across various domains of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
            {/* Left Column Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              {tailoredSolutions.map((sol, idx) => (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4.5 rounded-[12px] font-[700] text-[15px] transition-all flex items-center justify-between border cursor-pointer ${
                    activeTab === idx
                      ? 'bg-[#006B8F] text-white border-[#006B8F] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-[#006B8F]/50 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className={activeTab === idx ? 'text-white' : 'text-[#006B8F]'}>
                      {sol.icon}
                    </span>
                    <span>{sol.title}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              ))}
            </div>

            {/* Right Column Active Solution Details */}
            <div className="lg:col-span-8 bg-white rounded-[16px] p-7 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-[22px] sm:text-[24px] font-[800] text-slate-900 mb-3">
                {tailoredSolutions[activeTab].title}
              </h3>
              <p className="text-[14.5px] text-[#475569] leading-relaxed mb-6">
                {tailoredSolutions[activeTab].shortDesc}
              </p>
              <h4 className="text-[15px] font-[800] text-slate-900 mb-3.5 uppercase tracking-wider text-xs">
                Key Capabilities & Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {tailoredSolutions[activeTab].bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#006B8F] shrink-0 mt-0.5" />
                    <span className="text-[13.5px] text-slate-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14px] transition-all shadow-sm"
              >
                <span>Get Started with {tailoredSolutions[activeTab].title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. GET A 100% CUSTOMIZABLE ARTIFICIAL INTELLIGENCE DEVELOPMENT BY EXPERTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Get A 100% Customizable Artificial Intelligence Development By Experts
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We have a large pool of committed deep learning engineers working hard to reduce operating expenses, optimize efficiency, increase customer happiness, and drive company development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expertOfferings.map((off, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-[18px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-3">
                    {off.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed mb-4">
                    {off.desc}
                  </p>
                </div>
                <Link
                  to={off.link}
                  className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          9. OUR RECENT PROJECTS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Presenting the wide range of solutions that we have successfully delivered to our clients with high-quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {recentProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#006B8F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="text-[16px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-4">
                    {proj.title}
                  </h4>
                  <Link
                    to={proj.link}
                    className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          10. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          11. TECHNOLOGY STACK
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          12. FREQUENTLY ASKED QUESTIONS (Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We Listen To Queries And Provide Solutions That Captivate Users. Feel Free To Contact Us For Any Query.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[12px] border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between font-[700] text-[15px] sm:text-[16px] text-slate-900 hover:text-[#006B8F] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${
                      openFaq === idx ? 'rotate-180 text-[#006B8F]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          13. WE HAVE BEEN FEATURED IN (Exact 18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          14. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Artificial Intelligence Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire AI Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ArtificialIntelligenceDevelopmentService;
