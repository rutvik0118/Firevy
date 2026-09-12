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
import SapphireFaqSection from '../common/SapphireFaqSection';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Cpu,
  Wifi,
  Radio,
  Activity,
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
  Database,
  Cloud,
  Server,
  Settings,
  Sliders,
  Maximize2
} from 'lucide-react';

export const IotDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const iotCapabilities = [
    {
      title: 'Smart Sensor & Hardware Integration',
      desc: 'Connect microcontrollers (ESP32, STM32, Arduino, Raspberry Pi) and sensor arrays with precision firmware for seamless telemetry data ingestion.',
      icon: <Cpu className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Edge Computing & Real-Time Processing',
      desc: 'Process telemetry at the device edge with low-latency event filtering, threshold alerting, and offline operational continuity.',
      icon: <Zap className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Enterprise Cloud IoT Architecture',
      desc: 'Architect robust AWS IoT Core, Azure IoT Hub, and ThingsBoard infrastructure supporting millions of concurrent connected endpoints.',
      icon: <Cloud className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Industrial IoT (IIoT) & Smart Factory',
      desc: 'Deploy predictive maintenance pipelines, SCADA integration, and factory floor monitoring to reduce downtime and maximize machine OEE.',
      icon: <Activity className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Low-Power Wireless Protocols',
      desc: 'Implement power-efficient connectivity using MQTT, CoAP, BLE 5.0, LoRaWAN, Zigbee, and Cellular NB-IoT for long battery-life deployment.',
      icon: <Wifi className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'End-to-End Device Security & Encryption',
      desc: 'Safeguard your IoT perimeter with TLS/mTLS authentication, hardware secure elements, automated OTA firmware encryption, and Zero-Trust architecture.',
      icon: <ShieldCheck className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const iotBenefits = [
    {
      title: 'Real-Time Operational Visibility',
      desc: 'Monitor distributed machinery, fleet assets, and environmental conditions across global locations from unified interactive command dashboards.'
    },
    {
      title: 'Predictive Maintenance & Zero Downtime',
      desc: 'Anticipate equipment failures before they happen through AI-driven vibration, temperature, and wear telemetry analysis.'
    },
    {
      title: 'Automated Workflows & Cost Reduction',
      desc: 'Eliminate manual inspections and reduce field service expenses through automated sensor-triggered alerts and closed-loop actuation.'
    },
    {
      title: 'High-Throughput Scalability',
      desc: 'Engineered for seamless growth from 100 prototype devices to enterprise fleets with over 10,000,000 active telemetry streams.'
    },
    {
      title: 'Enhanced Customer Experience',
      desc: 'Deliver smart connected consumer products with companion iOS and Android mobile apps for remote control and live status updates.'
    },
    {
      title: 'Strict Security & Regulatory Compliance',
      desc: 'Fully compliant with industrial security standards, HIPAA for smart medical devices, and GDPR for consumer telemetry protection.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Industrial Fleet Telematics & GPS Tracking',
      category: 'Logistics & IIoT',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Smart Home Automation & Energy Gateway',
      category: 'Consumer IoT & Smart Home',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Connected Healthcare Patient Monitor',
      category: 'MedTech & Wearables',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'Smart City Traffic Telemetry Hub',
      category: 'Smart City & Edge AI',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Agricultural Soil & Climate Sensor Grid',
      category: 'AgriTech & LoRaWAN',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Smart Warehouse Inventory RFID Tracker',
      category: 'Supply Chain Automation',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. What protocols do you use for IoT device communication?',
      a: 'We implement industry-standard, lightweight protocols tailored to bandwidth and power constraints including MQTT, CoAP, HTTP/REST, WebSockets, BLE, LoRaWAN, and Zigbee.'
    },
    {
      q: '2. Which cloud platforms do you support for IoT backend development?',
      a: 'We architect enterprise backends on AWS IoT Core, Microsoft Azure IoT Hub, Google Cloud IoT, and open-source platforms like ThingsBoard and EMQX.'
    },
    {
      q: '3. How do you handle Over-The-Air (OTA) firmware updates securely?',
      a: 'We design automated cryptographic signature verification and dual-partition rollbacks into firmware, ensuring safe, zero-brick OTA updates across globally distributed device fleets.'
    },
    {
      q: '4. Can you build companion mobile apps for iOS and Android?',
      a: 'Yes, we build native iOS (Swift), Android (Kotlin), and cross-platform (Flutter/React Native) mobile apps that connect directly to IoT devices via BLE or cloud APIs.'
    },
    {
      q: '5. How much does custom IoT application development cost?',
      a: 'Cost is determined by hardware prototyping scope, firmware complexity, cloud message throughput, mobile app requirements, and regulatory compliance standards.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="IoT Application Development Company in USA | Internet of Things Services"
        description="Sapphire is a premier IoT application development company in USA. We build custom IoT solutions, smart connected devices, firmware, and cloud IoT backends."
        canonical="/services/iot"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Reference)
          ========================================================================= */}
      <section className="pt-4 pb-10 sm:pt-6 sm:pb-14 bg-white text-slate-900 relative font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                IoT Application Development Company in USA
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Connect devices, machines, and sensors into intelligent networks for real-time data gathering, predictive analytics, and automated smart operations.
              </p>

              {/* CTA Action Button */}
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
                  src="/images/iot_hero_illustration.jpg"
                  alt="IoT Application Development Company in USA"
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
          3. BEST IOT APPLICATION DEVELOPMENT COMPANY (Section 2)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-[28px] sm:text-[34px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Best IoT Application Development Company
              </h2>
              <div className="space-y-4 text-[14.5px] text-[#475569] leading-[1.8]">
                <p>
                  The competitive advantage of Custom Internet of Things (IoT) development is the ability to turn physical hardware and telemetry streams into actionable business intelligence. We provide end-to-end IoT engineering services spanning custom embedded firmware, edge intelligence, scalable cloud data lakes, and user-friendly mobile and web control dashboards.
                </p>
                <p>
                  As an industry-leading IoT software development company, we bridge the gap between complex hardware protocols and modern cloud software. Whether you are building smart home appliances, connected healthcare devices, or IIoT factory monitoring grids, our engineering team ensures high throughput, low power consumption, and bulletproof cybersecurity.
                </p>
              </div>
            </div>

            {/* Right Column: IoT Solution Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/iot_solutions_illustration.jpg"
                  alt="Best IoT Application Development Company"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. KEY IOT ARCHITECTURE CAPABILITIES (Grid)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Key IoT Engineering Capabilities
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Comprehensive full-lifecycle IoT development services engineered for robust scalability and maximum hardware interoperability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {iotCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-[10px] bg-[#E0F2FE] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-[18px] font-[800] text-[#0B0F19]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#475569] leading-[1.65]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. BENEFITS OF IOT APPLICATION DEVELOPMENT
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Benefits of Custom IoT Solutions
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Discover why modern enterprises invest in custom IoT architectures to reduce operating costs and boost automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {iotBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-[12px] border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-[#006B8F] shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="text-[17px] font-[800] text-[#0B0F19]">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#475569] leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. OUR PREMIUM SERVICES (10 White Pill Cards with Arrow)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          7. RECENT PROJECTS SECTION
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight mb-3">
              Recent IoT Projects
            </h2>
            <p className="text-[15px] text-[#64748B]">
              Explore some of our enterprise-grade IoT implementations built across logistics, smart homes, and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-[14px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 bg-slate-100 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-semibold text-[#006B8F]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-[17px] font-[800] text-[#0B0F19] group-hover:text-[#006B8F] transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[13px] font-[600] text-[#006B8F]">Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 text-[#006B8F] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          8. VIDEO TESTIMONIALS
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          9. TECHNOLOGY STACK WE USE
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (2-Column Sapphire Layout)
          ========================================================================= */}
      <SapphireFaqSection faqList={faqs} />

      {/* =========================================================================
          11. FEATURED IN LOGOS GRID (18 Recognitions)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          12. HIRE DEDICATED DEVELOPERS CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#005478] to-[#007EA7] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <h2 className="text-[28px] sm:text-[36px] font-[900] tracking-tight">
                Ready to Build Your Smart IoT Ecosystem?
              </h2>
              <p className="text-[15px] text-blue-100 leading-relaxed max-w-2xl">
                Consult with our senior IoT architects and firmware engineers to build scalable, high-security connected products.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white hover:bg-slate-100 text-[#005478] font-[800] text-[15px] rounded-[8px] shadow-xl hover:shadow-2xl transition-all inline-flex items-center space-x-2"
              >
                <span>Hire IoT Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IotDevelopmentService;
