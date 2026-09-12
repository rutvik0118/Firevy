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
  Eye,
  Glasses,
  Box,
  Gamepad2,
  Compass,
  MonitorSmartphone,
  Globe
} from 'lucide-react';

export const VirtualRealityDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const vrCapabilities = [
    {
      title: 'AI-Driven Virtual Environments',
      desc: 'Generates adaptive and responsive VR settings and procedural 3D environments based on user preferences and real-time interaction behavior.',
      icon: <Brain className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Real-Time Interaction and Personalization',
      desc: 'Uses AI and low-latency physics engines to customize virtual experiences dynamically, enhancing user immersion and realistic engagement.',
      icon: <Eye className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Natural Language Processing Integration',
      desc: 'Enables voice-controlled interactions and intelligent non-player characters (NPCs), allowing users to communicate naturally within VR.',
      icon: <MessageCircle className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Enhanced Graphics and Realism',
      desc: 'Utilizes AI-powered rendering, ray tracing, and photorealistic spatial textures to improve graphical details and lifelike simulations.',
      icon: <Box className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Cross-Industry Applications',
      desc: 'Engineers custom VR apps for diverse sectors such as gaming, medical surgical training, education, real estate 3D tours, and industrial telematics.',
      icon: <Compass className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Seamless Hardware Compatibility',
      desc: 'Ensures flawless integration across major consumer headsets including Meta Quest 3/Pro, Apple Vision Pro, HTC Vive, and PlayStation VR2.',
      icon: <Glasses className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const vrBenefits = [
    {
      title: 'Enhanced Customer Engagement',
      desc: 'Virtual Reality gives businesses the power to provide users with 360-degree immersive storytelling, boosting engagement time by over 400%.'
    },
    {
      title: 'Increased Brand Visibility',
      desc: 'Stand out from competitors by launching futuristic metaverse showrooms, interactive product demos, and virtual events.'
    },
    {
      title: 'Improve Retention & Training Efficiency',
      desc: 'VR corporate training simulations improve skill retention by up to 75% while dramatically reducing physical training hazards and costs.'
    },
    {
      title: 'Spatial Telemetry & Data Insights',
      desc: 'Gain deep spatial analytics into user gaze tracking, interaction heatmaps, and movement patterns to optimize product designs.'
    },
    {
      title: 'High-ROI Competitive Advantage',
      desc: 'Early adoption of enterprise VR and spatial computing establishes market leadership across engineering, healthcare, and retail.'
    },
    {
      title: 'Enterprise Security & Compliance',
      desc: 'Our VR solutions implement end-to-end encryption, local device caching, and enterprise IAM authentication protocols.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Medical Surgical VR Simulation',
      category: 'Healthcare & MedTech',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Real Estate 3D Virtual Walkthrough',
      category: 'PropTech Spatial App',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Industrial Heavy Equipment VR Training',
      category: 'Enterprise Metaverse',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Multiplayer VR Metaverse Hub',
      category: 'Gaming & Web3',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Automotive Digital Twin Showroom',
      category: 'Automotive Mobility',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Interactive Virtual Classroom VR',
      category: 'EdTech Spatial App',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. Which VR platforms and headsets do you develop for?',
      a: 'We develop native and cross-platform VR applications for Apple Vision Pro (visionOS), Meta Quest 3 / Quest Pro, HTC Vive, Valve Index, PlayStation VR2, and WebXR browser experiences.'
    },
    {
      q: '2. Which game engines and frameworks do you use for VR app development?',
      a: 'We specialize in Unity3D (C#), Unreal Engine 5 (C++/Blueprints), WebXR (Three.js/Babylon.js), and OpenXR standards for cross-device compatibility.'
    },
    {
      q: '3. What is the difference between Virtual Reality (VR) and Augmented Reality (AR)?',
      a: 'Virtual Reality completely immerses users in a digital 3D environment using a headset, while Augmented Reality overlays digital holographic elements onto the real-world view via smartphones or smart glasses.'
    },
    {
      q: '4. Can you integrate AI and multi-user networking into VR applications?',
      a: 'Yes, we integrate conversational AI avatars, computer vision hand tracking, and scalable multi-user networking using Photon Engine or custom WebSockets backend servers.'
    },
    {
      q: '5. How much does custom VR app development cost?',
      a: 'VR development costs depend on 3D asset complexity, physics simulations, multi-platform deployment requirements, and backend multiplayer infrastructure.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Virtual Reality App Development Company in USA | VR App Development"
        description="Sapphire is a top virtual reality app development company in USA. We specialize in custom VR app development, AI in virtual reality, 3D simulations, and spatial computing."
        canonical="/virtual-reality-app-development-company"
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
          1. HERO SECTION (1:1 Exact Match with Screenshot)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Virtual Reality App Development Company in USA
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                VR apps for iPhone and Android devices signified the transition to a consumer headgear that would foster the next generation of VR goods.
              </p>

              {/* 1 CTA Action Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/vr_hero_illustration.jpg"
                  alt="Virtual Reality App Development Company in USA"
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
          3. BEST VIRTUAL REALITY APP DEVELOPMENT COMPANY (1:1 Screenshot Match)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: VR People in Space Vector Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg">
                <img
                  src="/images/vr_best_company_illustration.jpg"
                  alt="Best Virtual Reality App Development Company"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Heading & Detailed Description */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Best Virtual Reality App Development Company
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                The competitive advantage of Custom virtual reality app development is the ability to create immersive experiences on the move. As a result of our exposure to the technology stack and our ability to keep up with the times, we serve customers from all over the world, providing Affordable VR development services. Our agile approach to Virtual Reality allows us to quickly develop high-grade, scalable, and cross-platform VR environments.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                Our team has developed an innovative AI-driven VR platform that dynamically adapts to user interactions, providing intelligent and responsive VR App Development Services with the best spatial environments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. KEY VR CAPABILITIES & FEATURES
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200/70 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Key Capabilities of Our VR Development
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Discover how our virtual reality solutions combine cutting-edge hardware integrations with intelligent spatial AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vrCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF4FA] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-slate-900 group-hover:text-[#006B8F] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. VR BENEFITS FOR BUSINESS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-b border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Benefits of Virtual Reality for Enterprises
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore the measurable impact of deploying custom VR applications across your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {vrBenefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center space-x-2.5 text-[#006B8F]">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-[16px] font-[800] text-slate-900">
                    {b.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. OUR RECENT PROJECTS
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
          8. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          9. TECHNOLOGY STACK
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (Accordion)
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
          11. WE HAVE BEEN FEATURED IN (Exact 18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          12. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Virtual Reality App Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire VR Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default VirtualRealityDevelopmentService;
