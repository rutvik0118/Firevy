import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SEO from '../common/SEO';
import BRAND from '../../constants/brand';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import TechnologyStackGrid from '../common/TechnologyStackGrid';
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
  MessageCircle
} from 'lucide-react';

export const GenerativeAiDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      id: 1,
      title: 'Enhanced Creativity',
      icon: <Brain className="w-8 h-8 text-[#006B8F]" />,
      desc: 'Generative AI enables authors to create unique and diversified material independently. Generators allow artists, designers, authors, and musicians to experiment with new styles, ideas, and expressions, pushing creativity beyond human limits.'
    },
    {
      id: 2,
      title: 'Personalization',
      icon: <Users className="w-8 h-8 text-[#006B8F]" />,
      desc: 'Generative AI creates customized information that meets individual interests and demands. Through Generative AI Development Solutions, generative models improve user experiences by providing valuable information.'
    },
    {
      id: 3,
      title: 'Cost Savings',
      icon: <DollarSign className="w-8 h-8 text-[#006B8F]" />,
      desc: 'Generative AI automates content development and streamlines procedures, reducing operating costs and resources needed. Marketing, advertising, and content creation, where producing high-quality content at scale is costly and time-consuming, benefit from this.'
    }
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

  const blogs = [
    {
      id: 1,
      title: 'Integrating AI into Android App Development: Possibilities and Insights',
      date: 'September 19, 2023',
      desc: 'The marriage of (AI) and Android app development is a cornerstone of innovation in a society characterized by fast technological breakthroughs. With its large user base and various apps, the Android ecosystem presents a favorable environment for AI to provide more intelligent, user-friendly, and customized Android app development services.',
      image: '/images/ai_in_mobile_app_development_tools.webp'
    },
    {
      id: 2,
      title: 'Machine Learning and AI Integration in Android Apps: Transforming User Experiences',
      date: 'November 7, 2023',
      desc: 'The smartphone revolution has changed how people use technology and the world. Android, with its enormous user base, leads this transition. Android users’ expectations have changed in this digital age. They want more intelligent, more intuitive, and tailored experiences. Machine Learning (ML) and AI underpin this change.',
      image: '/images/ai_in_software_development.webp'
    },
    {
      id: 3,
      title: 'AI-Powered Tools for Your Software Development Workflow',
      date: 'October 5, 2023',
      desc: 'New technologies and techniques help businesses develop software in less time. Artificial intelligence helps developers boost productivity and code quality. To deep dive, we’ll look at eight AI-powered solutions that help businesses speed up their software lifecycle.',
      image: '/images/case_study_images/smart_surveillance_case_study.jpg'
    }
  ];

  const faqs = [
    {
      q: '1. Why invest in Generative AI development?',
      a: 'Over the next one to three years, the technology may cause a major increase in worker productivity, which could change the direction of the economic cycle.'
    },
    {
      q: '2. How to hire a Top Generative AI development company?',
      a: 'Prioritizing generative AI development businesses based on their knowledge, portfolio, and domain competence is a good idea.'
    },
    {
      q: '3. What is the cost of Generative AI app development?',
      a: 'The complexity of the project, the features and functionalities that must be included, and the experience of the development team are some of the variables that can affect the cost of creating a generative AI application.'
    },
    {
      q: '4. What services does Sapphire Solutions offer as a generative AI development company?',
      a: 'We provide end-to-end generative AI solutions including custom AI model development, natural language processing (NLP), image and video generation, AI-powered chatbots, and automation systems tailored to your business needs.'
    },
    {
      q: '5. How can generative AI improve my business operations?',
      a: 'Generative AI enhances creativity, automates content creation, improves customer interactions through intelligent chatbots, and accelerates decision-making by generating data-driven insights, helping businesses stay competitive and innovative.'
    },
    {
      q: '6. What industries benefit the most from generative AI technologies?',
      a: 'Generative AI is transforming sectors such as healthcare, finance, marketing, entertainment, e-commerce, education, and manufacturing by enabling personalized customer experiences, predictive analytics, and efficient content generation.'
    },
    {
      q: '7. How does Sapphire Solutions ensure the quality and accuracy of generative AI models?',
      a: 'We follow rigorous training, validation, and fine-tuning processes using diverse datasets. Our expert AI engineers continuously monitor performance and update models to ensure high accuracy, reliability, and ethical AI practices.'
    },
    {
      q: '8. Can you integrate generative AI solutions with existing IT infrastructure and platforms?',
      a: 'Yes, our AI development team specializes in seamless integration of generative AI models with your current software, CRM systems, cloud platforms, and data sources to maximize operational efficiency and ROI.'
    },
    {
      q: '9. What generative AI development services offer the fastest deployment?',
      a: 'GenAI chatbots, RAG knowledge assistants, AI copilots, API-based LLM apps, and workflow automation offer the fastest deployment using pre-trained models, cloud platforms, and ready-made integrations.'
    }
  ];

  const pillars = [
    {
      title: 'Flexible Engagement Models',
      desc: 'Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.',
      icon: <Users className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: '100% Transparency',
      desc: '100% transparency policy to keep our client and our team on the same page.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Experienced Developers',
      desc: 'Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.',
      icon: <Cpu className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Timely Delivery',
      desc: 'We value the time and are particular about timely deliveries by following the highest quality standards.',
      icon: <Clock className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Technical Support',
      desc: 'Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.',
      icon: <Headphones className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title={`#1 Generative AI Development Company | Generative AI Development Services`}
        description="Transform your ideas into reality with the best generative AI development services. Our Generative AI Development Company enhances user experiences and offers incredible features. Talk to us for more!"
        canonical="/generative-ai-development-company"
      />

      {/* Floating Action Buttons (Phone & WhatsApp) - Matching User Screenshot Right Edge */}
      <div className="fixed right-0 top-1/4 z-40 flex flex-col items-end gap-1.5 pointer-events-auto">
        <a
          href="tel:+15551234567"
          title="Call Us Directly"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919429709662"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          className="w-10 h-10 rounded-l-[8px] bg-[#005F96] hover:bg-[#004A75] text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-x-1"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Floating Sapphire / Support Brand Bubble on Bottom-Right */}
      <div className="fixed right-4 bottom-5 z-40">
        <Link
          to="/contact"
          title="Contact Sapphire"
          className="w-13 h-13 rounded-full bg-[#0086C6] hover:bg-[#0070A6] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
        >
          <span className="font-[900] text-3xl font-serif select-none leading-none">S</span>
        </Link>
      </div>

      {/* =========================================================================
          1. HERO SECTION (#1 Generative AI Development Company - 1:1 Image 1 Match)
          ========================================================================= */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 bg-white text-slate-900 relative font-sans">
        <Container>
          {/* Main Title - Single Line Match */}
          <div className="text-center max-w-5xl mx-auto mb-6 sm:mb-8">
            <h1 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-[800] text-slate-950 tracking-tight leading-tight font-sans">
              #1 Generative AI Development Company
            </h1>
          </div>

          {/* Centered Large High-Tech Hero Graphic Banner (Exact Match for Image 1) */}
          <div className="max-w-4xl lg:max-w-5xl mx-auto rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-slate-200/80 mb-8 sm:mb-10 bg-black">
            <img
              src="/images/generative_ai_hero_banner.jpg"
              alt="Generative AI Development Company"
              className="w-full h-auto object-cover max-h-[500px] sm:max-h-[560px] mx-auto block"
            />
          </div>

          {/* Intro Body Paragraph (Exact Match for Live Reference Page) */}
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-left">
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.8] font-normal font-sans">
              Generative AI research is crucial for several reasons, including its revolutionary potential across sectors and applications. hire generative ai developers, which lets robots create information, visuals, and storylines, might boost creativity, efficiency, and problem solving. Top Custom generative AI development services enhance creativity by making it possible to produce unique and varied material. Enterprise Generative AI Development Company provider lets artists push limits in art, music, literature, and design. Generative models may create unique compositions from large datasets, inspiring creativity. As generative AI technologies advance, they become more accessible to a broader audience. Open-source frameworks, pre-trained models, and user-friendly interfaces make Generative AI Application Development Company creation and deployment accessible to amateurs, small enterprises, and enthusiasts for creative expression, experimentation, and innovation. Hiring the best generative AI development companies is vital because it might transform creativity, efficiency, and problem-solving across fields. Using artificial intelligence to produce material, simulate situations, and boost creativity, generative AI opens up new technical and social possibilities.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. WHY HIRE SAPPHIRE FOR GENERATIVE AI DEVELOPMENT SERVICES?
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/60 font-sans">
        <Container>
          <div className="max-w-5xl mx-auto text-left space-y-4">
            <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
              Why hire {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} for Generative AI Development Services?
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} specializes in Generative AI Development Solutions, focusing solely on this specific field. Affordable generative ai application development expertise helps to provide deeper insights, unique solutions, and better results than generic development businesses. {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} indeed maintains current knowledge of AI development service research and technology. We use cutting-edge algorithms, frameworks, and tools to create solutions using the latest approaches and capabilities. Our Generative AI Development Services for Enterprise can meet project scopes and timetables with resources and capabilities for modest proof-of-concept prototypes or significant deployments. We test, validate, and optimize to provide high-quality goods that surpass customer expectations. {BRAND.name === 'Firevy' ? 'Sapphire Software Solutions' : BRAND.name} offers knowledge, specialty, bespoke solutions, cutting-edge technology, scalability, flexibility, collaborative collaboration, quality assurance, confidentiality, and security for Generative AI development. As a Top Generative AI Development Company, {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} uses extensive quality assurance systems to verify the dependability, accuracy, and robustness of its Generative AI products.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. BENEFITS OF GENERATIVE AI DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="max-w-5xl mx-auto mb-10 text-left">
            <h2 className="text-[28px] sm:text-[34px] font-[800] text-[#0B0F19] tracking-tight mb-3">
              Benefits of Generative AI Development Services
            </h2>
            <p className="text-[15px] text-[#475569] leading-relaxed">
              From creativity and invention to efficiency and problem-solving, generative AI development has several advantages. Important benefits of GenAi Development Services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {benefits.map((b) => (
              <div
                key={b.id}
                className="bg-[#F8FAFC] rounded-[16px] p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#EAF4FA] flex items-center justify-center mb-5">
                    {b.icon}
                  </div>
                  <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 mb-3">
                    {b.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-[1.65]">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
            >
              <span>Get A Free Quote for Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          5. UNVEILING OUR INNOVATIVE SOLUTION BANNER
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F4F8FA] border-b border-slate-200/80 text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-[24px] sm:text-[28px] font-[800] text-slate-900">
              Unveiling Our Innovative Solution
            </h3>
            <p className="text-[14.5px] text-slate-600 leading-relaxed">
              From cutting-edge technology to revolutionary concepts, get ready to be inspired and intrigued. This is more than just a video - it's a glimpse into the future of innovation.
            </p>
            <div className="pt-2">
              <Link
                to="/company/insightful-videos"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-sm"
              >
                <span>View Insightful Videos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR RECENT PROJECTS (AI Showcase)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Presenting the wide range of solutions that we have successfully delivered to our clients with the high-quality standard
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
                    onError={(e) => {
                      e.target.src = '/images/generative_ai_hero_banner.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#006B8F] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
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
          7. OUR STORY, THEIR WORDS (Video Testimonials Story)
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          8. SUCCESS STORIES & ESTIMATION BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Success Stories
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Know {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-[#F0F8FC] rounded-[18px] p-7 border border-[#D8EBF7] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-bold text-[#006B8F] uppercase tracking-wider block mb-2">Case Study</span>
                <h3 className="text-[20px] font-[800] text-slate-900 mb-3">AI Avatar Video Generator Web</h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6">
                  Engineered a web-based generative AI avatar system enabling enterprise video generation, lip-sync synthesis, and multi-lingual voice cloning in real time.
                </p>
              </div>
              <Link to="/portfolio" className="inline-flex items-center text-[13.5px] font-[700] text-[#006B8F]">
                <span>Explore Full Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-[#F0F8FC] rounded-[18px] p-7 border border-[#D8EBF7] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-bold text-[#006B8F] uppercase tracking-wider block mb-2">Case Study</span>
                <h3 className="text-[20px] font-[800] text-slate-900 mb-3">AI Chatbot Development</h3>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6">
                  Developed an enterprise Retrieval-Augmented Generation (RAG) conversational agent integrated with ERP and customer databases to resolve 85% of inquiries autonomously.
                </p>
              </div>
              <Link to="/portfolio" className="inline-flex items-center text-[13.5px] font-[700] text-[#006B8F]">
                <span>Explore Full Story</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="bg-[#005F96] text-white rounded-[16px] p-6 sm:p-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-[900]">18+</div>
                <div className="text-xs text-white/80 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-[900]">320+</div>
                <div className="text-xs text-white/80 font-medium">5-Star Clutch Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-[900]">1500+</div>
                <div className="text-xs text-white/80 font-medium">Satisfied Clients</div>
              </div>
            </div>
            <div>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-[8px] bg-white text-[#005F96] hover:bg-slate-100 font-[800] text-sm transition-all shadow-md inline-block whitespace-nowrap"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          9. TECHNOLOGY STACK
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. OUR RECENT BLOGS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Our Recent Blogs
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Having exclusive experience to work with startups to corporate, we have in-depth insights about the versatile needs of diversified industry domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {blogs.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/generative_ai_hero_banner.jpg';
                    }}
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block mb-2">{b.date}</span>
                    <h4 className="text-[15.5px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors leading-snug mb-2.5">
                      {b.title}
                    </h4>
                    <p className="text-[13px] text-[#475569] leading-relaxed line-clamp-3 mb-4">
                      {b.desc}
                    </p>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center text-[13px] font-[700] text-[#006B8F] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Get more details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-[8px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (Accordion 1:1 Reference Match)
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              We Listen To Query And Provide Solutions That Captivate Users. Feel Free To Contact Us In Case Of Any Query Which Is Not Mention Below.
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
          12. WHY CHOOSE US / VALUE PILLARS ("Being unique is our quality!")
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[34px] font-[800] text-slate-950 tracking-tight">
              Being unique is our quality!
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              {BRAND.name === 'Firevy' ? 'Sapphire Solutions' : BRAND.name} believe in the things that give us an edge over our competitors. We are renowned Generative AI Development Company organization serving customers with end-to-end support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-6 border border-slate-200/80 shadow-xs flex flex-col justify-start space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-[800] text-slate-900">
                  {p.title}
                </h3>
                <p className="text-[13px] text-[#475569] leading-[1.65]">
                  {p.desc}
                </p>
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
          14. HIRE NOW / GET ACCESS CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Generative AI Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GenerativeAiDevelopmentService;
