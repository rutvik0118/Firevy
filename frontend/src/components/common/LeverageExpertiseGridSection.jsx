import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { ArrowUpRight } from 'lucide-react';

export const LeverageExpertiseGridSection = ({ brandName = 'Sapphire' }) => {
  const [activeTab, setActiveTab] = useState('In Demand');

  const tabs = ['In Demand', 'Mobile', 'Web', 'AI'];

  const tabData = {
    'In Demand': {
      featured: {
        title: 'In Demand',
        desc: 'Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.',
        link: '/contact'
      },
      cards: [
        {
          title: 'AI Developers',
          desc: 'Employ our team’s best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!',
          link: '/services/artificial-intelligence-development'
        },
        {
          title: 'UI/UX Designers',
          desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!',
          link: '/services/ui-ux-design-services'
        },
        {
          title: 'API Developers',
          desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.',
          link: '/services/full-stack-development-services'
        },
        {
          title: 'Next JS Developers',
          desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.',
          link: '/services/react-development'
        },
        {
          title: 'Machine Learning Developers',
          desc: 'Employ our team’s best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!',
          link: '/services/artificial-intelligence-development'
        },
        {
          title: 'Data Scientists',
          desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!',
          link: '/services/artificial-intelligence-development'
        }
      ]
    },
    'Mobile': {
      featured: {
        title: 'Mobile App Developers',
        desc: 'Accelerate your smartphone footprint with dedicated Android, iOS, and cross-platform mobile squads. We craft responsive, low-latency, and crash-resilient native mobile experiences with state-of-the-art UI architectures.',
        link: '/services/mobile-app-development'
      },
      cards: [
        {
          title: 'Kotlin Developers',
          desc: 'Hire senior Kotlin developers proficient in Jetpack Compose, Coroutines, Flow, and clean Android architecture for resilient enterprise mobile apps.',
          link: '/services/hire-kotlin-developers'
        },
        {
          title: 'Swift & iOS Developers',
          desc: 'Build high-performance native iOS applications with SwiftUI, Combine, Apple CoreML, and strict App Store Human Interface Guidelines.',
          link: '/services/ios-app-development'
        },
        {
          title: 'Flutter Developers',
          desc: 'Develop multi-platform mobile apps with a single codebase using Flutter and Dart, ensuring 60fps performance across iOS and Android.',
          link: '/services/flutter-app-development'
        },
        {
          title: 'React Native Developers',
          desc: 'Leverage reusable JavaScript components and native bridging to build lightning-fast hybrid mobile apps with seamless native performance.',
          link: '/services/react-native-app-development'
        },
        {
          title: 'Android Developers',
          desc: 'Build robust Android applications with modern SDK features, background job schedulers, Room database, and Google Play billing integration.',
          link: '/services/android-app-development'
        },
        {
          title: 'Mobile QA Engineers',
          desc: 'Ensure zero-bug mobile releases with comprehensive automated testing on real device clouds using Appium, Espresso, and XCTest.',
          link: '/contact'
        }
      ]
    },
    'Web': {
      featured: {
        title: 'Full Stack Web Engineering',
        desc: 'Architect high-throughput web applications, headless SaaS platforms, and enterprise cloud microservices engineered for high security, accessibility, and sub-second load times.',
        link: '/services/full-stack-development-services'
      },
      cards: [
        {
          title: 'React.js Developers',
          desc: 'Build dynamic, reactive web frontends using modern React hooks, Redux/Zustand state management, and reusable enterprise component libraries.',
          link: '/services/react-development'
        },
        {
          title: 'Node.js Engineers',
          desc: 'Develop high-concurrency RESTful and GraphQL backend microservices using Node.js, Express, Fastify, and asynchronous event-driven architecture.',
          link: '/services/nodejs-development'
        },
        {
          title: 'Vue.js Developers',
          desc: 'Create intuitive single-page applications with Vue 3, Pinia, Vite, and Nuxt.js for optimal developer agility and runtime performance.',
          link: '/services/vue-development'
        },
        {
          title: '.NET Core Developers',
          desc: 'Build enterprise-grade web APIs and mission-critical cloud services with ASP.NET Core, C#, Azure DevOps, and Entity Framework Core.',
          link: '/services/net'
        },
        {
          title: 'PHP & Laravel Developers',
          desc: 'Rapidly construct secure, scalable web backends, custom CMSs, and e-commerce platforms with modern Laravel and PHP 8.',
          link: '/services/php-development'
        },
        {
          title: 'Cloud DevOps Engineers',
          desc: 'Automate zero-downtime CI/CD deployment pipelines on AWS, Google Cloud, and Azure with Kubernetes, Terraform, and Docker containers.',
          link: '/services/cloud-solutions'
        }
      ]
    },
    'AI': {
      featured: {
        title: 'AI & Machine Learning Innovation',
        desc: 'Incorporate cutting-edge Generative AI, custom Large Language Models, agentic workflows, and predictive analytics pipelines into your existing business software products.',
        link: '/services/generative-ai-development'
      },
      cards: [
        {
          title: 'Generative AI Engineers',
          desc: 'Develop bespoke RAG pipelines, fine-tuned foundational models, and autonomous multi-agent workflows using OpenAI, LangChain, and vector databases.',
          link: '/services/generative-ai-development'
        },
        {
          title: 'Prompt Engineers & AI Architects',
          desc: 'Optimize LLM system prompts, output structured JSON schemas, guardrails, and deterministic reasoning chains for production reliability.',
          link: '/services/generative-ai-development'
        },
        {
          title: 'NLP Specialists',
          desc: 'Build sophisticated semantic search, sentiment analysis, entity extraction, and conversational agents tailored to your industry domain.',
          link: '/services/artificial-intelligence-development'
        },
        {
          title: 'Computer Vision Engineers',
          desc: 'Implement real-time object detection, facial recognition, OCR, and automated video surveillance analysis using PyTorch and OpenCV.',
          link: '/services/artificial-intelligence-development'
        },
        {
          title: 'MLOps & Pipeline Architects',
          desc: 'Deploy, monitor, and continuously retrain machine learning models in production with automated drift detection and Kubeflow pipelines.',
          link: '/services/artificial-intelligence-development'
        },
        {
          title: 'Deep Learning Researchers',
          desc: 'Develop proprietary neural network architectures, custom embeddings, and generative diffusion algorithms for complex data sets.',
          link: '/services/artificial-intelligence-development'
        }
      ]
    }
  };

  const currentTabContent = tabData[activeTab] || tabData['In Demand'];

  return (
    <section className="py-16 md:py-24 bg-white font-sans text-slate-900 border-b border-slate-100">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[900] text-slate-900 tracking-tight">
            Leverage The Expertise of {brandName} Dedicated Developers
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-xs sm:text-[13px] font-[700] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#006095] text-white shadow-md shadow-[#006095]/20'
                    : 'bg-[#EEF4F8] text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Top Featured Full-Width Card (Pink/Rose Color) */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="bg-[#FFD9E4] rounded-[16px] p-6 sm:p-7 text-left transition-all hover:shadow-md">
            <Link
              to={currentTabContent.featured.link}
              className="inline-flex items-center space-x-1.5 text-lg sm:text-[20px] font-[800] text-slate-900 hover:text-[#006095] transition-colors mb-2.5"
            >
              <span>{currentTabContent.featured.title}</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </Link>
            <p className="text-xs sm:text-[14px] text-slate-700 leading-relaxed font-normal">
              {currentTabContent.featured.desc}
            </p>
          </div>
        </div>

        {/* 2-Column Grid of 6 Light Blue Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10 text-left">
          {currentTabContent.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F0F6FB] rounded-[16px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md border border-slate-100"
            >
              <div>
                <Link
                  to={card.link}
                  className="inline-flex items-center space-x-1.5 text-base sm:text-[18px] font-[800] text-slate-900 hover:text-[#006095] transition-colors mb-3"
                >
                  <span>{card.title}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered "View All Portfolio" Button */}
        <div className="text-center pt-2">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#006095] hover:bg-[#004f7a] text-white font-[700] text-sm sm:text-[15px] transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            View All Portfolio
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default LeverageExpertiseGridSection;
