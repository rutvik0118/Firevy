import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import AndroidHiringModels from './AndroidHiringModels';
import ProcessWeFollow from '../common/ProcessWeFollow';
import TrustRecognitionBanner from '../home/TrustRecognitionBanner';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import SuccessMatrix from '../common/SuccessMatrix';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import VideoTestimonialsStory from '../home/VideoTestimonialsStory';
import SapphireFaqSection from '../common/SapphireFaqSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import AppDevelopmentRecentBlogsSection from './AppDevelopmentRecentBlogsSection';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const GenerativeAiConsultingCompany = () => {

  // Benefits of Generative AI Consulting Services (6 cards in 3x2 grid matching theme)
  const genAiBenefitsData = [
    {
      title: '10x Enterprise Workflow Velocity',
      desc: 'Automate high-cognition tasks—such as report authoring, code generation, and complex contract review—cutting operational turnaround times from days to seconds.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      title: 'Zero-Hallucination Domain Accuracy',
      desc: 'Ground foundation LLMs with deterministic RAG pipelines, dynamic source citations, and factual verification guardrails tailored to your verified enterprise knowledge base.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Bulletproof IP & Data Sovereignty',
      desc: 'Ensure complete intellectual property ownership and strict data residency with on-premises or private VPC model hosting, eliminating training leakage to public vendors.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      )
    },
    {
      title: 'Autonomous Multi-Agent Collaboration',
      desc: 'Orchestrate specialized AI agents that collaborate across departments, trigger webhooks, query databases, and execute multi-phase tasks without manual supervision.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    },
    {
      title: 'Hyper-Personalized Customer Experiences',
      desc: 'Deliver conversational customer support and predictive sales coaching that understands tone, nuance, and historical context across 80+ global languages.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      title: 'Measurable ROI & Compute Optimization',
      desc: 'Reduce inference latency and cloud GPU costs by up to 65% through model quantization (vLLM, TensorRT-LLM), distillation, and intelligent semantic prompt caching.',
      icon: (
        <svg className="w-8 h-8 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    }
  ];

  // FAQ List tailored specifically for Generative AI Consulting Services
  const genAiConsultingFaqList = [
    {
      id: 1,
      question: 'Why should our company work with a specialized Generative AI consulting partner?',
      answer: 'A specialized Generative AI consulting partner provides strategic, algorithmic, and compliance expertise needed to move from fragile prototypes to enterprise-grade AI production. We identify high-ROI use cases, prevent costly infrastructure over-engineering, ensure strict data privacy, and eliminate hallucinations.'
    },
    {
      id: 2,
      question: 'How do you protect our sensitive corporate data from leaking into public AI models?',
      answer: 'We deploy foundation models within your private enterprise cloud (AWS, Azure, GCP) or secure on-premise clusters. Your proprietary data is never used to train external models, and all interactions pass through automated PII redaction, encryption-at-rest, and zero-trust API gateways.'
    },
    {
      id: 3,
      question: 'What is the difference between fine-tuning and Retrieval-Augmented Generation (RAG)?',
      answer: 'RAG dynamically retrieves relevant knowledge from your company databases and injects it as context into model prompts at query time—making it ideal for rapidly changing internal data. Fine-tuning adjusts the model weights directly to instill specific writing styles, domain jargon, or specialized reasoning structures.'
    },
    {
      id: 4,
      question: 'How long does it take to build and deploy an enterprise Generative AI solution?',
      answer: 'Our agile discovery and proof-of-concept (PoC) phase typically delivers a functional working prototype within 2 to 4 weeks. Full enterprise production rollout—including vector database indexing, security audits, and system integrations—ranges between 8 to 12 weeks.'
    },
    {
      id: 5,
      question: 'Which foundation models and generative frameworks do your engineers specialize in?',
      answer: 'We work across both proprietary leaders (OpenAI GPT-4o, Anthropic Claude 3.5, Google Gemini) and premier open-source models (Meta Llama 3, Mistral Large, DeepSeek, Gemma). Our framework stack includes LangChain, LlamaIndex, LangGraph, vLLM, Pinecone, and Hugging Face.'
    }
  ];

  const advancedGenAiTechnologies = [
    {
      id: 'finetuning',
      title: 'LLM Fine-Tuning & Custom Models',
      icon: '/images/cuttingedge/nodejsdevelopment.svg',
      description: 'Adapt open-weight models (Llama 3, Mistral, Gemma) or proprietary APIs using LoRA, QLoRA, and RLHF to master your company’s proprietary jargon and specialized workflows.'
    },
    {
      id: 'rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      icon: '/images/cuttingedge/mernstackappdevelopment.svg',
      description: 'Ground LLM outputs in real-time enterprise documents using hybrid vector-keyword retrieval, re-ranking models, and advanced chunking strategies for zero-hallucination precision.'
    },
    {
      id: 'agents',
      title: 'Autonomous AI Agents & Multi-Agent Swarms',
      icon: '/images/cuttingedge/meanstackappdevelopment.svg',
      description: 'Build goal-driven, multi-step autonomous agents using LangGraph and CrewAI that independently research, call external APIs, query SQL databases, and complete end-to-end workflows.'
    },
    {
      id: 'multimodal',
      title: 'Multimodal Generative AI (Vision & Audio)',
      icon: '/images/cuttingedge/fastapidevelopment.svg',
      description: 'Develop multimodal systems capable of analyzing PDFs, technical diagrams, audio streams, and video feeds simultaneously for automated underwriting and visual inspection.'
    },
    {
      id: 'vectordb',
      title: 'Vector Databases & Semantic Search',
      icon: '/images/cuttingedge/djangoappdevelopment.svg',
      description: 'Deploy high-throughput vector storage and search pipelines using Pinecone, Milvus, Qdrant, and pgvector with ultra-low latency cosine distance queries.'
    },
    {
      id: 'aisecurity',
      title: 'Enterprise AI Security & Governance',
      icon: '/images/cuttingedge/laraveldevelopment.svg',
      description: 'Safeguard proprietary data with prompt injection defense, automated PII scrubbing, guardrail validation (NeMo Guardrails), and complete compliance governance.'
    }
  ];

  const comprehensiveGenAiServices = [
    {
      id: 1,
      title: "Generative AI Feasibility & Strategy Roadmap",
      desc: "Comprehensive analysis of your operational bottlenecks, unstructured data repositories, and high-impact AI use cases with calculated ROI projections."
    },
    {
      id: 2,
      title: "Custom LLM Training & Fine-Tuning",
      desc: "Precision training of state-of-the-art open models with your proprietary data using LoRA, instruction-tuning, and direct preference optimization (DPO)."
    },
    {
      id: 3,
      title: "Enterprise RAG & Knowledge Retrieval Systems",
      desc: "Architecture of end-to-end vector search pipelines that connect foundation models directly to your SharePoint, Confluence, ERP, and relational databases."
    },
    {
      id: 4,
      title: "Autonomous AI Agent & Copilot Development",
      desc: "Custom conversational copilots and background agents embedded directly into your existing web, mobile, and SaaS enterprise tools."
    },
    {
      id: 5,
      title: "Model Evaluation, Benchmarking & Safety",
      desc: "Continuous automated red-teaming, toxicity filtering, guardrail enforcement, and latency benchmarking to ensure production reliability."
    },
    {
      id: 6,
      title: "24/7 AI Ops & Model Observability",
      desc: "Real-time monitoring of token consumption, drift, latency, and prompt accuracy with Langfuse, Arize, and dedicated ML engineering support."
    }
  ];

  const comprehensiveSliderRef = useRef(null);

  const scrollComprehensiveSlider = (direction) => {
    if (comprehensiveSliderRef.current) {
      const scrollAmount = 400;
      comprehensiveSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const techSliderRef = useRef(null);

  const scrollTechSlider = (direction) => {
    if (techSliderRef.current) {
      const scrollAmount = 400;
      techSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-[#005F96] selection:text-white">
      <SEO
        title="Generative AI Consulting Company | Enterprise LLM, RAG & Agents | Firevy.co"
        description="Transform your enterprise with Firevy's certified Generative AI Consulting Company. Specializing in custom LLM fine-tuning, RAG architecture, autonomous AI agents, and secure AI governance."
        keywords="generative ai consulting company, generative ai consulting services, enterprise llm consulting, rag architecture, ai agents development, custom gpt, fine-tuning llama, ai transformation partner"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F2F7FA] py-12 sm:py-16 lg:py-20 border-b border-slate-200/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h1
                className="text-slate-900 tracking-tight font-extrabold text-3xl sm:text-4xl lg:text-[41px] leading-[1.2]"
              >
                Real-Time Velocity & Control <br className="hidden sm:inline" />
                with Generative AI Consulting Services
              </h1>

              <p
                className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal"
              >
                Transform your enterprise with bespoke Generative AI consulting services, designed for organizations of every scale. We deliver scalable, secure, and production-ready Generative AI solutions that automate complex workflows, unlock deep data insights, and power sustainable competitive advantage. Hire certified Generative AI consultants who provide complete end-to-end AI advisory—from LLM evaluation and RAG pipeline engineering to custom model fine-tuning and ethical governance. Whether you're building intelligent multi-agent copilots or modernizing legacy decision systems, we ensure seamless deployment aligned with your business goals. Contact us today to start your AI transformation with a free strategy session and quote. Reliable Generative AI Consultants for Strategy, Architecture, and Enterprise Value.
              </p>

              {/* 4 Stats Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 pb-1">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">120+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">AI & ML Engineers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">99.8%</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">Inference Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">400+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">GenAI Models Deployed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#005F96] tracking-tight">320+</div>
                  <div className="text-xs sm:text-[13px] text-slate-700 font-medium mt-1 leading-snug">5-Star Clutch Reviews</div>
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

            {/* Right Hero Vector Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[520px] flex justify-center">
                <img
                  src="/images/epicor_erp_banner.svg"
                  alt="Real-Time Velocity & Control with Generative AI Consulting Services"
                  className="w-full h-auto object-contain max-h-[420px]"
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
      {/* 2. LEADING GENERATIVE AI CONSULTING COMPANY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex justify-center">
                <img
                  src="/images/leading_mobile_app_consulting.jpg"
                  alt="Leading Generative AI Consulting Company"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                Leading Generative AI <br />
                Consulting & Development <br />
                Company
              </h2>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                Our certified Generative AI consulting specialists combine deep machine learning foundations, cutting-edge foundation models (GPT-4o, Claude 3.5, Gemini, Llama 3, Mistral), and enterprise data engineering to help companies capture massive productivity gains. From feasibility assessment to enterprise-scale deployment, we partner with your team to safely integrate Generative AI, eliminate manual knowledge work, and build proprietary competitive moats.
              </p>

              <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-[1.75] font-normal">
                To provide Enterprise Generative AI Consulting Services with a relentless focus on data privacy, deterministic accuracy, and ROI, we conduct thorough readiness audits of your unstructured data, intellectual property safeguards, and compliance mandates before writing a single line of code.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLUTCH TOP-RATED BANNER */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner />

      {/* ========================================================================= */}
      {/* 5. GET 100% CUSTOMIZABLE GENERATIVE AI CONSULTING EXPERTS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Centered H2 Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[900] text-[#0F172A] tracking-tight leading-tight">
              Get 100% Customizable Generative AI Consulting & Development Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-4 bg-[#F0F8FC] rounded-[12px] p-8 sm:p-9 flex flex-col justify-start relative shadow-xs border border-sky-100/80 min-h-[300px]">
              {/* Subtle Topographic Background Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 60 Q 60 120, 140 40 T 300 80 T 450 30" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 120 Q 80 180, 160 100 T 320 140 T 450 90" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 180 Q 100 240, 180 160 T 340 200 T 450 150" fill="none" stroke="#005F96" strokeWidth="1" />
                <path d="M-20 240 Q 120 300, 200 220 T 360 260 T 450 210" fill="none" stroke="#005F96" strokeWidth="1" />
              </svg>

              {/* Speech Bubble Arrow on Right (Desktop Only) */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[12px] border-y-transparent border-l-[14px] border-l-[#F0F8FC] z-10" />

              {/* Quote Icon */}
              <div className="text-[#005F96] mb-4 relative z-10">
                <svg viewBox="0 0 44 34" className="w-10 h-8 fill-current">
                  <path d="M0 19.428C0 8.7 6.857 0 17.143 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H0V19.428zm25.714 0C25.714 8.7 32.571 0 42.857 0v6.857c-5.714 0-8.571 4-8.571 9.143h8.571V34H25.714V19.428z" />
                </svg>
              </div>

              {/* Heading Inside Card */}
              <h3 className="text-[24px] sm:text-[27px] lg:text-[29px] font-[900] text-[#005F96] tracking-tight leading-[1.3] relative z-10">
                Modernize, Automate, And Innovate with Generative AI
              </h3>
            </div>

            {/* Right Column: Paragraph Content */}
            <div className="lg:col-span-8 space-y-4 text-left flex flex-col justify-center">
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Adopting Generative AI is the defining digital imperative of this decade. Without seasoned technical leadership and rigorous architectural safeguards, enterprises risk hallucinated outputs, data leakage, high GPU inference bills, and failed proofs-of-concept. Our <strong className="text-[#005F96] font-semibold">Generative AI Consulting Services</strong> provide end-to-end guidance to de-risk adoption, architect high-accuracy RAG workflows, and secure total alignment with industry compliance standards.
              </p>

              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.8] font-normal">
                Utilize our specialized Generative AI engineering capabilities across custom fine-tuning, semantic vector search, LangChain/LlamaIndex orchestration, and autonomous agent swarms to automate customer service, synthesize market intelligence, and augment software engineering. Partnering with our Generative AI specialists ensures maximum velocity and quantifiable return on your AI capital.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5B. ADVANCED TECHNOLOGIES FOR TOP-TIER GENERATIVE AI SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title */}
          <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Technologies Firevy Uses for Top-Tier Generative AI Software Solutions
            </h2>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={techSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {advancedGenAiTechnologies.map((tech) => (
                <div
                  key={tech.id}
                  className="w-[280px] sm:w-[330px] lg:w-[360px] flex-shrink-0 bg-[#E5F3FC] rounded-xl p-6 sm:p-7 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mb-4 flex items-center justify-start">
                    <img
                      src={tech.icon}
                      alt={tech.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-2 tracking-tight">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollTechSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous technologies"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollTechSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next technologies"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PREMIUM SERVICES */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy" />

      {/* ========================================================================= */}
      {/* 7. SUCCESS STORIES + 4 STAT BOXES (DIRECTLY UNDER PREMIUM SERVICES) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Enterprise Legal Document Intelligence & RAG Copilot */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 z-10 bg-[#E0F2FE] text-[#0284C7] text-[11px] font-[700] px-3 py-1 rounded-md shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/redetect.svg"
                  alt="Enterprise Legal Document Intelligence & RAG Copilot"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Enterprise Legal Document Intelligence & RAG Copilot
              </h3>
            </div>

            {/* Card 2: Multimodal Medical Diagnostics & EHR Synthesis Engine */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/file_sharing_application.svg"
                  alt="Multimodal Medical Diagnostics & EHR Synthesis Engine"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Multimodal Medical Diagnostics & EHR Synthesis Engine
              </h3>
            </div>

            {/* Card 3: Autonomous Financial Research & Real-Time Portfolio Analyst */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/data_analytics.svg"
                  alt="Autonomous Financial Research & Real-Time Portfolio Analyst"
                  className="w-full h-[220px] object-cover rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans text-left">
                Autonomous Financial Research & Real-Time Portfolio Analyst
              </h3>
            </div>
          </div>

          {/* Centered "View All Portfolio" Button */}
          <div className="mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Colorful Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (320+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                320+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects -> Get Estimation) */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <a
                href="#consultation-form"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. PROUD TO HAVE PICKED THESE UP ALONG THE WAY */}
      {/* ========================================================================= */}
      <TrustRecognitionBanner />

      {/* ========================================================================= */}
      {/* 9. BENEFITS OF GENERATIVE AI CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F4F9FD] text-slate-900 font-sans text-left relative overflow-hidden border-b border-slate-100">
        <Container>
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
              Benefits of Generative AI Consulting Services
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-normal max-w-3xl mx-auto">
              Our Generative AI Consulting Services streamline enterprise workflows, automate cognitive tasks, and deliver secure, measurable innovation:
            </p>
          </div>

          {/* 6 White Cards in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
            {genAiBenefitsData.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-start text-left border border-slate-100"
              >
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="font-[800] text-[#0B0F19] text-[18px] sm:text-[19px] leading-[1.3] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] text-[13.5px] sm:text-[14px] leading-[1.7] font-[400]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. COMPREHENSIVE GENERATIVE AI CONSULTING SERVICES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 font-sans overflow-hidden border-b border-slate-100">
        <Container>
          {/* Centered Section Title & Subtitle */}
          <div className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive Generative AI Consulting Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
              We provide an end-to-end suite of Generative AI consulting services engineered to transform enterprise productivity and decision velocity
            </p>
          </div>

          {/* Cards Carousel Slider */}
          <div className="relative">
            <div
              ref={comprehensiveSliderRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-1 no-scrollbar select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {comprehensiveGenAiServices.map((service) => (
                <div
                  key={service.id}
                  className="w-[290px] sm:w-[340px] lg:w-[370px] flex-shrink-0 bg-[#E5F3FC] rounded-2xl p-7 sm:p-8 flex flex-col justify-start text-left transition-all duration-200 hover:shadow-md border border-sky-100/60"
                >
                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-[1.7] font-normal">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Centered Below) */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Previous services"
              >
                <ArrowLeft className="w-5 h-5 text-slate-800" />
              </button>
              <button
                type="button"
                onClick={() => scrollComprehensiveSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all shadow-xs cursor-pointer"
                aria-label="Next services"
              >
                <ArrowRight className="w-5 h-5 text-slate-800" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. BUSINESS FRIENDLY HIRING MODELS */}
      {/* ========================================================================= */}
      <AndroidHiringModels />

      {/* ========================================================================= */}
      {/* 12. UNVEILING OUR INNOVATIVE SOLUTION */}
      {/* ========================================================================= */}
      <InnovativeVideoSlider />

      {/* ========================================================================= */}
      {/* 13. PROCESS WE FOLLOW */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

      {/* ========================================================================= */}
      {/* 14. OUR STORY, THEIR WORDS (HOME PAGE MULTI-CARD VIDEO CAROUSEL) */}
      {/* ========================================================================= */}
      <VideoTestimonialsStory />

      {/* ========================================================================= */}
      {/* 15. TRUSTED BY THE WORLD'S LEADING BRANDS */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />

      {/* ========================================================================= */}
      {/* 16. SUCCESS MATRIX */}
      {/* ========================================================================= */}
      <SuccessMatrix />

      {/* ========================================================================= */}
      {/* 17. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <SapphireTechStackGrid domainName="Generative AI consulting" />

      {/* ========================================================================= */}
      {/* 18. WE HAVE BEEN FEATURED IN */}
      {/* ========================================================================= */}
      <FeaturedInBrandsSection />

      {/* ========================================================================= */}
      {/* 19. DIGITAL TRANSFORMATION THROUGH INNOVATION */}
      {/* ========================================================================= */}
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 20. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        faqList={genAiConsultingFaqList}
        title="Frequently Asked Questions"
        subtitle="We listen to your queries and provide solutions that captivate users. Feel free to contact us in case of any query which is not mentioned below."
      />

      {/* ========================================================================= */}
      {/* 21. OUR RECENT BLOGS */}
      {/* ========================================================================= */}
      <AppDevelopmentRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 22. WHAT SETS US APART AS GENERATIVE AI CONSULTING PARTNER? */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Generative AI Consulting Partner?"
        subtitle="Being unique is our quality! Firevy Solutions empowers forward-thinking enterprises with state-of-the-art Generative AI systems that deliver tangible ROI, airtight security, and operational excellence. We combine deep machine learning research with practical enterprise engineering to turn complex foundation models into high-performing business engines."
      />

      {/* ========================================================================= */}
      {/* 23. GET ACCESS TO TOP GENERATIVE AI CONSULTING (CTA BANNER) */}
      {/* ========================================================================= */}
      <section className="relative w-full max-w-full py-9 sm:py-11 bg-[#005D95] text-white text-center font-sans overflow-hidden border-b border-slate-200">
        {/* Background Floating Geometric Circle & Square Overlay Graphics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full border-[16px] border-white/10 opacity-70" />
          <div className="absolute top-8 left-16 w-12 h-12 rounded-full bg-white/10 opacity-40" />
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-3xl border-[20px] border-white/10 opacity-50 transform rotate-12" />
          <div className="absolute bottom-6 right-20 w-16 h-16 rounded-2xl bg-white/10 opacity-30" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 mx-auto text-center space-y-4">
          <p className="text-base sm:text-lg lg:text-[20px] font-[600] text-white leading-relaxed">
            Get access to top Generative AI consulting to automate workflows and accelerate enterprise growth.
          </p>
          <div>
            <a
              href="#consultation-form"
              className="inline-block bg-white hover:bg-slate-100 text-[#005D95] font-extrabold text-sm sm:text-base px-9 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Hire Now
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24. SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS */}
      {/* ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default GenerativeAiConsultingCompany;
