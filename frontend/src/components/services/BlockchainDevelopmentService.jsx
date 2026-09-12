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
  Database,
  Globe,
  Coins,
  Link as LinkIcon,
  Fingerprint,
  Wallet,
  Activity
} from 'lucide-react';

export const BlockchainDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const heroMetrics = [
    { number: '47+', label: 'Web Developers' },
    { number: '11+', label: 'Fortunes 500 Companies' },
    { number: '354+', label: 'Project Completed in Web Technology' },
    { number: '189+', label: '5-Star Clutch Reviews' }
  ];

  const brandLogos = [
    { name: 'TDSG', image: '/images/logo_tdsg.png' },
    { name: 'ASTRAL PIPES', image: '/images/logo_astral.png' },
    { name: 'CLP INDIA', image: '/images/logo_clp_india.svg' },
    { name: 'adani', image: '/images/logo_adani.svg' },
    { name: 'TOYOTA', image: '/images/toyota_logo.webp' },
    { name: 'Almarai', image: '/images/almarai_corporate_logo.png' },
    { name: 'ORIENT CEMENT', image: '/images/orient_logo.svg' },
    { name: 'AMERICAN EXPRESS', image: '/images/logo_american_express.svg' },
    { name: 'Alembic', image: '/images/alembic_logo.svg' }
  ];

  const cuttingEdgeTech = [
    {
      title: 'Polkadot',
      desc: 'Polkadot, a scalable multi-chain network, lets blockchains smoothly interchange data. Polkadot ensures cross-chain compatibility for apps and services using its relay chain, making solutions suited for complex decentralized ecosystems.',
      icon: <Globe className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Cosmos',
      desc: 'Cosmos lets blockchains communicate data using Tendermint consensus and IBC. This architecture speeds the construction of highly interconnected blockchain networks, improving performance and fostering decentralized data sharing.',
      icon: <Layers className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Self-Sovereign Identity (SSI)',
      desc: 'SSI technology lets consumers control their digital identities without central authorities. Blockchain-based SSI systems protect privacy, data integrity, and user autonomy while decreasing identity theft and fraud.',
      icon: <Fingerprint className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Decentralized Finance (DeFi)',
      desc: 'DeFi offers intermediary-free lending, borrowing, trading, and investment, revolutionizing financial systems. This permissionless technology promotes innovation and inclusivity while eliminating traditional banking inefficiencies.',
      icon: <Coins className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Proof-of-Stake (PoS)',
      desc: 'Validators in PoS are chosen by the number of tokens they stake as collateral. PoS is popular for scalable blockchain applications focusing on sustainability, high TPS, and low energy consumption.',
      icon: <Activity className="w-6 h-6 text-[#006B8F]" />
    },
    {
      title: 'Interoperable NFTs',
      desc: 'NFTs enable cross-platform, game, and ecosystem use of digital assets. Interoperability is essential for a more connected digital economy, where virtual products and artwork retain their worth across applications.',
      icon: <Wallet className="w-6 h-6 text-[#006B8F]" />
    }
  ];

  const blockchainCombinations = [
    {
      title: 'Blockchain + Artificial Intelligence (AI)',
      desc: 'Integrating AI with blockchain enhances data processing and autonomous decision-making in decentralized networks. AI algorithms analyze ledger transactions in real-time, improving fraud detection and predictive analytics.'
    },
    {
      title: 'Blockchain + Internet of Things (IoT)',
      desc: 'For supply chain management, smart homes, and industrial telematics, blockchain offers a trustless cryptographic framework for controlling data and machine-to-machine interactions between IoT hardware.'
    },
    {
      title: 'Blockchain + Cloud Computing',
      desc: 'Blockchain gives an additional layer of decentralized data integrity, while cloud computing offers scalable computing power. We combine them to deploy dApps globally with ultra-low latency.'
    },
    {
      title: 'Blockchain + Decentralized Finance (DeFi)',
      desc: 'DeFi platforms built on smart contracts automate collateralized lending, decentralized liquidity pools, automated market makers (AMMs), and programmable yield generation.'
    },
    {
      title: 'Blockchain + Smart Contracts',
      desc: 'Self-executing Solidity and Rust smart contracts automate complex multi-party agreements without intermediaries, guaranteeing tamper-proof deterministic execution.'
    },
    {
      title: 'Blockchain + Interoperability Protocols',
      desc: 'Cross-chain bridging protocols enable assets and state transitions to flow seamlessly between Ethereum, Solana, Binance Smart Chain, Avalanche, and Polygon.'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Crypto Wallet & Exchange Platform',
      category: 'DeFi & Fintech',
      image: '/images/beecar.png',
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Supply Chain Provenance dApp',
      category: 'Enterprise Ledger',
      image: '/images/traffic_mgt_ai.png',
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Real Estate Tokenization System',
      category: 'PropTech Web3',
      image: '/images/waymark_map_app.webp',
      link: '/portfolio'
    },
    {
      id: 4,
      title: 'NFT Marketplace & Staking Hub',
      category: 'Digital Assets',
      image: '/images/ai_travel_app.png',
      link: '/portfolio'
    },
    {
      id: 5,
      title: 'Decentralized Identity (DID) Gateway',
      category: 'Security & Auth',
      image: '/images/talenti_qube.png',
      link: '/portfolio'
    },
    {
      id: 6,
      title: 'Cross-Chain Payment Settlement Network',
      category: 'Micropayments',
      image: '/images/ai_chatbot.png',
      link: '/portfolio'
    }
  ];

  const faqs = [
    {
      q: '1. Why should our business invest in Blockchain development services?',
      a: 'Blockchain establishes trustless transparency, eliminates intermediary costs, provides immutable audit trails, and unlocks new decentralized revenue streams through smart contracts and tokenization.'
    },
    {
      q: '2. Which blockchain platforms do you specialize in?',
      a: 'Our engineering squad builds production systems across Ethereum, Solana, Hyperledger Fabric, Polygon, Binance Smart Chain, Avalanche, Polkadot, and Cosmos.'
    },
    {
      q: '3. How secure are your custom smart contracts?',
      a: 'We conduct multi-tier static analysis, fuzz testing, formal verification, and full-scale third-party security audits to ensure zero vulnerabilities before mainnet deployment.'
    },
    {
      q: '4. Can you integrate blockchain solutions with our existing Web2 infrastructure?',
      a: 'Yes, we architect high-throughput Web3 RPC nodes, indexers, and REST/GraphQL API bridges that seamlessly connect your existing databases, ERPs, and cloud workloads to on-chain networks.'
    },
    {
      q: '5. What is the expected timeline and cost for developing a dApp?',
      a: 'Project timelines range from 4 to 12 weeks depending on smart contract complexity, user interface requirements, cross-chain bridging, and security audit scopes.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="#1 Blockchain Development Company in USA | Blockchain Development Services"
        description="Sapphire is a first-choice blockchain development company in USA. We offer various blockchain development services like blockchain technology consulting, dApps, tokenization, private blockchain networks, and more."
        canonical="/blockchain-development-company"
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
            {/* Left Column: Heading, Subtext, Metrics & 2 CTA Buttons */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[900] text-[#0B0F19] tracking-tight leading-[1.15] font-sans">
                Trusted Blockchain Development Company
              </h1>
              
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] font-normal font-sans">
                Our best AI-powered blockchain development company creates quick, efficient, and safe apps for use cases such as micropayments, cryptocurrency exchanges and wallets, cryptocurrencies, crowdsourcing, payment reconciliation, and other use cases.
              </p>

              {/* 4 Counter Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[24px] sm:text-[28px] font-[900] text-[#0B0F19] tracking-tight">
                      {m.number}
                    </div>
                    <div className="text-[12px] sm:text-[13px] text-[#64748B] font-medium leading-snug">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
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
                  <span>Hire Blockchain Developers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Vector Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden">
                <img
                  src="/images/ai_hero_illustration.jpg"
                  alt="Trusted Blockchain Development Company"
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
          3. WEB DEVELOPMENT MARKET STATS (1:1 Match with Screenshot)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bar Chart Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg rounded-[16px] overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/images/blockchain_market_stats_chart.jpg"
                  alt="Global Web Development Market Size from 2020 to 2031"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Column: Heading, Text & Button */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-[28px] sm:text-[36px] font-[900] text-[#0B0F19] tracking-tight leading-tight">
                Web Development Market Stats
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
                The global web development market size was roughly USD 55500.0 million in 2021. As per our research, the market is expected to reach USD 89015.19 million by 2027, exhibiting a CAGR of 8.03% during the forecast period.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md"
                >
                  <span>Connect with an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. AFFORDABLE BLOCKCHAIN DEVELOPMENT SERVICES
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/70 font-sans text-left">
        <Container>
          <div className="max-w-5xl mx-auto space-y-4">
            <h2 className="text-[26px] sm:text-[32px] font-[800] text-[#0B0F19] tracking-tight">
              Affordable Blockchain Development Services
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              We provide regulatory-compliant Custom AI blockchain development solutions that include various blockchain-powered features for businesses of all sizes, from large corporations to fledgling startups. As a leading AI integrated blockchain development Company, we provide solutions tailored to your company's needs. First, our blockchain development agency determines what you need and chooses the appropriate instruments.
            </p>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.8] font-normal">
              We develop blockchain development solutions that identify and solve the essential features of a cross-industry standard for shared and distributed ledgers while simultaneously revolutionizing how organizations conduct transactions on a global scale. We create open, decentralized public blockchains and private blockchains customized for businesses processing high transaction volumes.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. CUTTING EDGE TECHNOLOGY SAPPHIRE USE FOR BLOCKCHAIN DEVELOPMENT
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Cutting Edge Technology {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Use For Blockchain Development
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Our experience makes your blockchain projects future-ready and optimized for growth, from secure identity management to energy-efficient PoS techniques and interoperable NFTs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cuttingEdgeTech.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
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
          6. BLOCKCHAIN SYNERGIES & COMBINATIONS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F4F8FA] border-y border-slate-200/80 font-sans text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-[28px] sm:text-[36px] font-[800] text-slate-950 tracking-tight">
              Blockchain Technology Combinations
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              Explore how combining blockchain with next-generation technologies creates unmatched enterprise value and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blockchainCombinations.map((comb, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center space-x-2.5 text-[#006B8F]">
                  <LinkIcon className="w-5 h-5" />
                  <h3 className="text-[16px] font-[800] text-slate-900">
                    {comb.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#475569] leading-relaxed">
                  {comb.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. OUR PREMIUM SERVICES (Exact 10 White Cards Grid)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          8. OUR RECENT PROJECTS
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
          9. VIDEO TESTIMONIALS STORY
          ========================================================================= */}
      <VideoTestimonialsStory />

      {/* =========================================================================
          10. TECHNOLOGY STACK
          ========================================================================= */}
      <TechnologyStackGrid />

      {/* =========================================================================
          11. FREQUENTLY ASKED QUESTIONS (2-Column Sapphire Layout)
          ========================================================================= */}
      <SapphireFaqSection faqList={faqs} />

      {/* =========================================================================
          12. WE HAVE BEEN FEATURED IN (Exact 18 Brand Logos Grid)
          ========================================================================= */}
      <FeaturedInLogosGrid />

      {/* =========================================================================
          13. HIRE NOW CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white text-center font-sans">
        <Container>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-[26px] sm:text-[34px] font-[900] tracking-tight text-white leading-tight">
              Get access to top {BRAND.name === 'Firevy' ? 'Sapphire' : BRAND.name} Blockchain Development Company to transform your ideas into a robust application.
            </h2>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-9 py-4 rounded-[8px] bg-white hover:bg-slate-100 text-[#005F96] font-[800] text-[15px] transition-all shadow-xl hover:scale-105"
              >
                <span>Hire Blockchain Developers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlockchainDevelopmentService;
