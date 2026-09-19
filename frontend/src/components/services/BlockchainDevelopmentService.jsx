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
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import SapphireSeasonedExpertsSection from './SapphireSeasonedExpertsSection';
import SectorsThrivingSection from './SectorsThrivingSection';
import { IndustryFocusedInsightsSection } from './IndustryFocusedInsightsSection';
import { AboutUsStats } from './AboutUsStats';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import { TechStackProficientGrid } from '../common/TechStackProficientGrid';
import { AndroidHiringModels } from './AndroidHiringModels';
import { SuccessMatrixGrid } from '../home/SuccessMatrixGrid';
import InnovativeSolutionVideo from '../home/InnovativeSolutionVideo';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import { RecentBlogsSection } from '../common/RecentBlogsSection';
import { WhatSetsUsApartSection } from '../common/WhatSetsUsApartSection';
import { SubscribeNewsletterSection } from '../home/SubscribeNewsletterSection';
import HireDeveloper4Steps from '../common/HireDeveloper4Steps';
import ProcessWeFollow from '../common/ProcessWeFollow';
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
  Activity,
  Calendar,
  Sliders,
  Award,
  Lightbulb,
  Handshake,
  UserCheck,
  Lock,
  Flag,
  Milestone,
  RefreshCw,
  LineChart,
  PieChart,
  FileText
} from 'lucide-react';

export const BlockchainDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [leverageTab, setLeverageTab] = useState('In Demand');
  const [responsibilityTab, setResponsibilityTab] = useState('sapphire');

  const blockchainPortfolioCards = [
    {
      id: 1,
      title: 'Cab Booking Application Development',
      badge: 'Case Study',
      renderGraphic: () => (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A] to-[#F59E0B] p-4 flex items-center justify-center font-sans select-none">
          <div className="z-10 text-left space-y-1.5 max-w-[110px]">
            <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider block">
              Taxi Booking
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full bg-rose-600 text-white font-black text-[9px] flex items-center justify-center shadow">
                🚖
              </div>
              <span className="text-xs font-black text-slate-900">NGCab</span>
            </div>
          </div>
          <div className="relative flex items-center space-x-2 z-10 ml-2">
            <div className="w-20 h-36 bg-slate-900 rounded-xl p-1 border-2 border-slate-700 shadow-xl flex flex-col justify-between text-slate-800 text-[6.5px]">
              <div className="w-4 h-0.5 bg-slate-600 rounded-full mx-auto" />
              <div className="bg-emerald-500 text-white p-1 rounded font-bold text-center">
                ● Driver Arrived
              </div>
              <div className="bg-slate-100 p-1 rounded space-y-0.5 font-semibold">
                <div>Pickup: Main St</div>
                <div className="text-emerald-700 font-extrabold">$18.50</div>
              </div>
            </div>
            <div className="w-14 h-10 bg-amber-400 rounded-lg shadow-lg flex items-center justify-center text-xs font-black text-slate-900 border border-amber-300">
              🚕 Taxi
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'DeFi Wallet Development',
      renderGraphic: () => (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] p-4 flex items-center justify-between font-sans select-none text-white">
          <div className="z-10 text-left space-y-1 max-w-[110px]">
            <h4 className="text-lg font-black tracking-tight leading-tight">DeFi</h4>
            <p className="text-xs font-bold text-blue-100">Wallet Application</p>
          </div>
          <div className="w-24 h-38 bg-slate-900 rounded-xl p-1 border-2 border-blue-400/50 shadow-2xl flex flex-col justify-between text-white text-[7px] z-10">
            <div className="flex justify-between items-center bg-slate-800 p-1 rounded">
              <span className="font-extrabold text-blue-300">DeFi Wallet</span>
              <span>🔑</span>
            </div>
            <div className="bg-blue-600/40 p-1 rounded border border-blue-400/30 text-center space-y-0.5">
              <div className="text-[6px] text-blue-200">Total Balance</div>
              <div className="text-xs font-black text-white">$ 5,459,874</div>
              <div className="flex justify-center space-x-1 pt-0.5">
                <span className="bg-blue-500 px-1 py-0.5 rounded text-[5.5px] font-bold">Deposit</span>
                <span className="bg-slate-700 px-1 py-0.5 rounded text-[5.5px] font-bold">Withdraw</span>
              </div>
            </div>
            <div className="space-y-0.5 text-[6px]">
              <div className="bg-slate-800 p-0.5 rounded flex justify-between">
                <span>₿ Bitcoin</span>
                <span className="font-bold text-emerald-400">$64,210</span>
              </div>
              <div className="bg-slate-800 p-0.5 rounded flex justify-between">
                <span>Ξ Ethereum</span>
                <span className="font-bold text-emerald-400">$3,480</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Blockchain Application Development',
      renderGraphic: () => (
        <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#991B1B] via-[#7F1D1D] to-[#450A0A] p-4 flex items-center justify-center font-sans select-none text-white">
          <div className="w-full bg-slate-900 rounded-xl p-2.5 border border-rose-500/40 shadow-2xl space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-[9px] font-black text-rose-300 tracking-wider">BLOCKCHAIN ENGINE</span>
              </div>
              <span className="text-[7px] bg-rose-900/80 text-rose-200 px-1.5 py-0.5 rounded font-bold">
                Mainnet Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[7px] text-center font-bold">
              <div className="bg-slate-800 p-1 rounded border border-slate-700">
                <div className="text-slate-400 text-[6px]">Block Height</div>
                <div className="text-white font-extrabold">#18,492,012</div>
              </div>
              <div className="bg-slate-800 p-1 rounded border border-slate-700">
                <div className="text-slate-400 text-[6px]">Transactions</div>
                <div className="text-emerald-400 font-extrabold">2.4M / Day</div>
              </div>
              <div className="bg-slate-800 p-1 rounded border border-slate-700">
                <div className="text-slate-400 text-[6px]">Avg Gas</div>
                <div className="text-amber-400 font-extrabold">12 Gwei</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const heroMetrics = [
    { number: '200+', label: 'Dedicated Developers' },
    { number: '20+', label: 'Fortunes 500 Companies' },
    { number: '2800+', label: 'Project Completed' },
    { number: '320+', label: '5-Star Clutch Reviews' }
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
      q: '1. How is Blockchain used today?',
      a: 'Blockchain is a promising technology with growing digital trends and innovations. Blockchain has financial, IoT, and cybersecurity applications. Smart cities, autonomous cars, smart grids, smart transit, and more utilize IoT devices.'
    },
    {
      q: '2. How can you build Blockchain apps?',
      a: 'Building a Blockchain app involves defining the use case, choosing the right consensus mechanism, selecting the Blockchain platform (like Ethereum, Hyperledger, or Polygon), designing architecture, developing smart contracts, and conducting rigorous security testing before deployment.'
    },
    {
      q: '3. Why hire your developers for Blockchain?',
      a: 'Our dedicated Blockchain developers possess deep domain expertise in decentralized protocols, smart contract auditing, dApp development, and cryptography. We ensure rapid time-to-market, cost efficiency, and end-to-end support for your decentralized solutions.'
    },
    {
      q: '4. Why is Firevy the best company for hiring a Blockchain developer?',
      a: 'Firevy.co is a top-rated software development company with over 23 years of experience. We provide pre-vetted, expert Blockchain developers with flexible engagement models, strict NDA compliance, zero hidden costs, and seamless time-zone alignment.'
    },
    {
      q: '5. From which niches can we take blockchain developers for hire?',
      a: 'You can hire Blockchain developers for DeFi platforms, NFT marketplaces, Supply Chain tracking, Healthcare data systems, Smart Contract development, Web3 gaming, Enterprise private blockchains, and Tokenomics consultancy.'
    },
    {
      q: '6. Are your blockchain developers flexible to existing systems or tools?',
      a: 'Yes, our Blockchain developers seamlessly integrate decentralized protocols and Web3 APIs into your legacy Web2 architectures, ERPs, CRMs, and existing cloud infrastructures with zero friction.'
    },
    {
      q: '7. What Blockchain development platforms do Firevy work on?',
      a: 'Our developers work across Ethereum, Solana, Hyperledger, Polygon, Binance Smart Chain (BSC), Avalanche, Polkadot, Cardano, and Ripple, using tools like Solidity, Rust, Hardhat, Truffle, and Web3.js.'
    },
    {
      q: '8. In which niche do your blockchain developers have expertise?',
      a: 'Our engineers excel in Custom Smart Contract Development, Decentralized Exchanges (DEX), NFT Minting Platforms, DAO Governance, Crypto Wallets, Supply Chain Traceability, and Cross-Chain Bridges.'
    },
    {
      q: '9. What types of blockchain projects can your developers handle?',
      a: 'We handle projects of all scales—from startup MVPs and token launches to enterprise-grade private Blockchain networks, cross-chain interoperability solutions, and high-frequency Web3 trading platforms.'
    },
    {
      q: '10. What skills do your Blockchain Developers possess?',
      a: 'Key skills include Solidity, Rust, Go, C++, Python, Node.js, Web3.js, Ethers.js, Truffle/Hardhat, OpenZeppelin, IPFS, Smart Contract Auditing, Cryptography, and DevOps for Blockchain nodes.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="#1 Blockchain Development Company in USA | Blockchain Development Services"
        description="Sapphire is a first-choice blockchain development company in USA. We offer various blockchain development services like blockchain technology consulting, dApps, tokenization, private blockchain networks, and more."
        canonical="/blockchain-development-company"
      />

      {/* =========================================================================
          1. HERO SECTION (1:1 Exact Match with Sapphire Reference)
          ========================================================================= */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                  Hire BlockChain Developer
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-2xl">
                  We live in a time where the prevalence and importance of Blockchain are continuously expanding. The shared and unchangeable ledger simplifies the recording of transactions and the monitoring of assets for enterprises.
                </p>
              </div>

              {/* 4 Metric Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-2 border-y border-slate-100/80">
                {heroMetrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="block text-2xl sm:text-3xl font-black text-slate-900">{m.number}</span>
                    <span className="text-xs font-semibold text-slate-600 leading-tight block mt-1">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section with Capsule Pill Bar */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-[#006095]">Get Top Talent Work for you At</p>
                <div className="bg-[#0083B0] p-1.5 rounded-2xl inline-flex items-center space-x-2 shadow-xs">
                  <span className="bg-[#0083B0] text-white font-black px-5 py-2.5 rounded-xl text-sm sm:text-base flex items-center space-x-2">
                    <span className="text-xs">💡</span>
                    <span>$21/Hourly*</span>
                  </span>
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-[#006095] hover:bg-slate-50 font-bold px-7 py-2.5 rounded-xl text-sm transition-all shadow-xs cursor-pointer"
                  >
                    Hire Team
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic Banner */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <img
                src="/images/blockchain_hero_illustration.svg"
                alt="Hire BlockChain Developer"
                className="w-full max-w-[580px] sm:max-w-[600px] lg:max-w-[640px] h-auto object-contain mx-auto drop-shadow-xl transform lg:scale-105 transition-transform origin-center"
              />
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
          3. HIRE COMPETENT BLOCKCHAIN DEVELOPERS (1:1 Exact Match with Sapphire)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100 font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/images/blockchain_competent_developers.svg"
                  alt="Hire Competent Blockchain Developers"
                  className="w-full h-auto object-contain mx-auto drop-shadow-md"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-[1.15]">
                Hire Competent Blockchain Developers
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Do you want to work with the top blockchain developer? Hire knowledgeable and competent Blockchain developers to create safe, scalable blockchain applications for your company. Our remote teams provide blockchain technology expertise. Hire experts right away!
              </p>
            </div>
          </div>
        </Container>
      </section>



      {/* =========================================================================
          3B. OUR FLEXIBLE HIRING MODELS: FIND THE PERFECT FIT FOR YOUR PROJECT
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Our Flexible Hiring Models: Find the Perfect Fit For Your Project
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hire Blockchain Developers from Firevy.co Starts from,
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 items-stretch">
              {[
                {
                  title: 'Monthly',
                  subtitle: 'Starting From',
                  price: '$ 2850.00/ Month',
                  IconComp: Calendar,
                  isFeatured: false,
                  saveText: null,
                  badgeText: null,
                  features: [
                    'checked-engagement Billing cycle : Monthly',
                    'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
                    'checked-engagement 4 hours a day, 5 days a week',
                    'checked-engagement Minimum: 2 months'
                  ]
                },
                {
                  title: 'Quarterly',
                  subtitle: 'Starting From',
                  price: '$ 7999.00/ Month',
                  IconComp: Sliders,
                  isFeatured: false,
                  saveText: null,
                  badgeText: null,
                  features: [
                    'checked-engagement Billing cycle : Monthly',
                    'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
                    'checked-engagement 4 hours a day, 5 days a week',
                    'checked-engagement Minimum: 2 months'
                  ]
                },
                {
                  title: 'Yearly',
                  subtitle: 'Starting From',
                  price: '$31000.0',
                  IconComp: Calendar,
                  isFeatured: true,
                  saveText: 'Save Up TO 20%',
                  badgeText: 'Best Deal',
                  features: [
                    'checked-engagement Billing cycle : Monthly',
                    'Project Trackers : Daily Reports, Basecamp, Jira, Redmine etc.',
                    'checked-engagement 4 hours a day, 5 days a week',
                    'checked-engagement Minimum: 2 months'
                  ]
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                      card.isFeatured
                        ? 'border-2 border-[#006095] bg-white shadow-xl scale-105 z-10'
                        : 'border border-slate-200 bg-white shadow-xs hover:shadow-md'
                    }`}
                  >
                    {card.isFeatured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center space-x-2">
                        {card.saveText && (
                          <span className="bg-white border border-[#006095] text-[#006095] text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs">
                            {card.saveText}
                          </span>
                        )}
                        {card.badgeText && (
                          <span className="bg-[#006095] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-2xs">
                            {card.badgeText}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="space-y-6 text-center">
                      <div className="w-14 h-14 rounded-full bg-[#F0F7FC] text-[#006095] flex items-center justify-center mx-auto">
                        <CardIcon className="w-7 h-7 stroke-[1.8]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                        <p className="text-xs text-slate-600 mt-1">{card.subtitle}</p>
                        <p className="text-2xl font-black text-[#006095] mt-2">{card.price}</p>
                      </div>

                      <div className="space-y-3 text-left pt-4 border-t border-slate-100">
                        {card.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-600">
                            <span className="text-[#006095] font-bold shrink-0 mt-0.5">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 space-y-3">
                      <a
                        href="#quote-form"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="block w-full bg-[#006095] hover:bg-[#0083B0] text-white font-bold py-3 rounded-lg text-sm text-center transition-all shadow-md cursor-pointer"
                      >
                        Hire Now
                      </a>
                      <div className="bg-[#F0F7FC] rounded-full py-1.5 px-4 text-center">
                        <p className="text-[11px] font-semibold text-[#006095]">We sign NDA for all our projects.</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3C: DEVELOPMENT PROFICIENCY TABLE
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Hire Dedicated Developers To Empower Your Business with our Development Proficiency
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hire Blockchain Developer to meet your business perks by leveraging our technical elegance.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#006095] text-white">
                    <th className="py-4 px-6 font-bold text-sm bg-[#006095] text-white">Range of Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Junior Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Mid-Level Developers</th>
                    <th className="py-4 px-6 font-bold text-sm">Senior Developers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Approx Cost</td>
                    <td className="py-4 px-6 font-semibold">$17</td>
                    <td className="py-4 px-6 font-semibold">$22</td>
                    <td className="py-4 px-6 font-semibold">$29</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Years of Experience</td>
                    <td className="py-4 px-6">1-3 Years</td>
                    <td className="py-4 px-6">3-5 Years</td>
                    <td className="py-4 px-6">5+ Years</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Project Manager</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Time Zone Flexibility</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Quality Guarantee</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                    <td className="py-4 px-6">Yes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-white bg-[#006095]">Working Hours</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                    <td className="py-4 px-6">40 hours/ Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3D: BRIEF ABOUT OUR TALENTED BLOCKCHAIN DEVELOPERS
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-[1.15]">
                Brief About Our Talented Blockchain Developers
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                <p>
                  As a Blockchain Development Company in the USA, our blockchain engineers understand the basics of Blockchain, including- Distributed ledger technology shares, synchronize, and replicates digital data across several nodes. A developer should grasp DLT and how it's implemented in blockchain types.
                </p>
                <p>
                  Smart Contracts enable anybody to trade property, shares, money, or anything of value smoothly and transparently without intermediaries. Solidity is used for Ethereum and Hyperledger smart contracts.Sharding improves database performance. A shard is a horizontal database portion maintained on an independent server to share the load.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[560px]">
                <img
                  src="/images/blockchain_talented_developers.svg"
                  alt="Brief About Our Talented Blockchain Developers"
                  className="w-full h-auto object-contain mx-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3E: CLUTCH TOP RATED BANNER
          ============================================================ */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* ============================================================
          SECTION 3F: WHAT EXACTLY ARE BLOCKCHAIN DEVELOPERS?
          ============================================================ */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-[900] text-slate-950 tracking-tight leading-tight text-center">
              What Exactly Are Blockchain Developers?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Quote Box */}
              <div className="lg:col-span-5 bg-[#EAF5FB] rounded-2xl p-8 sm:p-10 border border-cyan-100/80 shadow-xs relative flex flex-col justify-center min-h-[220px]">
                <span className="block text-[#006095] text-5xl font-black leading-none mb-3">“</span>
                <h3 className="text-2xl sm:text-3xl font-[900] text-[#006095] tracking-tight leading-snug">
                  Hire A Dedicated<br />Blockchain<br />Developers
                </h3>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  We enable you to hire blockchain developer with smart contract experience depending on your organization's particular needs and transactions. Among a blockchain developer's most important functions and responsibilities are the following: seek developers capable of implementing the best AWS practices regarding platform security, privacy, and scalability; and recruit the finest engineers. As a Top Blockchain Development Agency for Startup, our blockchain developers possesses the knowledge and skills necessary to create and optimize decentralized apps (dApps) and smart contracts based on blockchain technology, as well as blockchain architecture and protocols.
                </p>

                <div className="pt-2">
                  <a
                    href="#quote-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-block bg-[#006095] hover:bg-[#004D7A] text-white font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
                  >
                    Let's Discuss Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3G: PREMIUM SERVICES GRID
          ============================================================ */}
      <PremiumServicesGrid />

      {/* ============================================================
          SECTION 3H: SEASONED EXPERTS SECTION
          ============================================================ */}
      <SapphireSeasonedExpertsSection />

      {/* =========================================================================
          SECTION 3I: LEVERAGE THE EXPERTISE OF FIREVY.CO DEDICATED DEVELOPERS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Leverage The Expertise of Firevy.co Dedicated Developers
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 border border-cyan-100/60 shadow-xs">
                {['In Demand', 'Mobile', 'Web', 'AI'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setLeverageTab(tab)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      leverageTab === tab
                        ? 'bg-[#006095] text-white shadow-xs'
                        : 'text-slate-700 hover:text-slate-900 font-semibold'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#FCE4EC] rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-xs space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-1.5">
                <span>In Demand</span>
                <span className="text-base">↗</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Employ someone to quickly establish a specialized development team from the beginning or to help you grow your team. Inform us of your needs, and you will have total control over the most suitable specialists, much like your core internal staff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {[
                {
                  title: 'AI Developers',
                  desc: "Employ our team's best AI developers, who have a wealth of expertise and practical experience with GANs, neural networks, LLMs, and other AI topics. Making use of everything, our AI developers create clever AI solutions that transform the way companies operate. Hire the perfect AI developer with only one click to save the headache!"
                },
                {
                  title: 'UI/UX Designers',
                  desc: 'Hire the top UI/UX designers from our team who are well-versed in the most recent design trends, user interface theories, and user experience tactics. Our UI/UX designers produce designs that improve user interaction and propel companies forward. Save yourself the trouble and quickly and easily find the ideal UI/UX designer with just one click!'
                },
                {
                  title: 'API Developers',
                  desc: 'Use the FastAPI framework to your advantage by hiring our skilled full-stack engineers who are proficient in FastAPI development. Utilizing technologies such as Pydantic and Starlette, their knowledge allows them to develop dynamic web apps that are optimized for smooth integration and an outstanding user experience.'
                },
                {
                  title: 'Next JS Developers',
                  desc: 'Employ our passionate Next.js developers to build websites; they possess a thorough grasp of the Next.js technology. Has proficiency in developing sophisticated online solutions that provide unified user experience and contemporary design using technologies like Styled Components and React Query. Collaborate with our Next.js programmers to improve your websites.'
                },
                {
                  title: 'Machine Learning Developers',
                  desc: "Employ our team's best ML developers; they have a wealth of expertise and practical experience dealing with LLMs like LLaMA, GPT, and others. Our machine-learning experts provide clever solutions that completely transform how companies run. With only one click, find the perfect machine learning developer!"
                },
                {
                  title: 'Data Scientists',
                  desc: 'Hire the best data scientists who have produced amazing computer vision, unique data, and AI solutions, as well as LLM-powered applications. Our data scientists can assist you with all your data science needs, including actionable insight extraction, predictive model building, and business process optimization. Hire the perfect data science specialists with just one click to save the fuss!'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F0F7FC] rounded-2xl p-6 border border-cyan-100/70 shadow-2xs space-y-3">
                  <h4 className="text-base font-bold text-slate-900 flex items-center space-x-1.5">
                    <span>{item.title}</span>
                    <span className="text-slate-700 text-sm font-semibold">↗</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#006095] hover:bg-[#0083B0] text-white font-bold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                View All Portfolio
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          SECTION 3J: INDUSTRY-FOCUSED INSIGHTS
          ============================================================ */}
      <IndustryFocusedInsightsSection title="Industry-Focused Insights To Elevate Your Business" subtitle="Trending Industries that Use Dedicated Developers" />

      {/* ============================================================
          SECTION 3K: ABOUT US STATS BANNER
          ============================================================ */}
      <AboutUsStats companyName="Firevy.co" />

      {/* ============================================================
          SECTION 3L: SECTORS THRIVING SECTION
          ============================================================ */}
      <SectorsThrivingSection title="Sectors Thriving Through Firevy.co's Bespoke Dedicated Developers" />

      {/* =========================================================================
          SECTION 3M: EMPLOY THE ADVANCED PROFICIENCY OF FIREVY DEDICATED DEV TEAM
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F0F7FC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                Employ the Advanced Proficiency of Firevy.co's Dedicated Development Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                At Firevy.co, we have a dedicated development team to deliver IT services and create solutions that surpass expectations.
              </p>
            </div>

            {/* 10 White Cards Grid (2 rows of 5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: 'On-Time Progress Monitoring', IconComp: Clock },
                { title: 'Time-Zone Compatibility', IconComp: Globe },
                { title: 'Cost-Effective Development', IconComp: Coins },
                { title: 'World Class Expertise', IconComp: Award },
                { title: 'Least Turnaround Time', IconComp: Zap },
                { title: 'Best Management Standards', IconComp: ShieldCheck },
                { title: '500+ Seasoned Experts', IconComp: Lightbulb },
                { title: '24x7 Support Team', IconComp: Headphones },
                { title: 'Efficient Project Management', IconComp: Handshake },
                { title: 'Dedicated Delivery Management', IconComp: UserCheck }
              ].map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 text-center shadow-xs hover:shadow-md border border-slate-100/80 transition-all flex flex-col justify-center items-center space-y-3 h-40"
                  >
                    <div className="w-10 h-10 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3N: HOW WE DIVIDE YOUR PROJECT RESPONSIBILITIES ?
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight">
                How We Divide Your Project Responsibilities ?
              </h2>
            </div>

            {/* Sapphire / Client Filter Capsule */}
            <div className="flex justify-center">
              <div className="bg-[#DDECF5] p-1.5 rounded-full inline-flex items-center space-x-1 border border-cyan-100/60 shadow-xs">
                <button
                  type="button"
                  onClick={() => setResponsibilityTab('sapphire')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'sapphire'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Firevy.co
                </button>
                <button
                  type="button"
                  onClick={() => setResponsibilityTab('client')}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    responsibilityTab === 'client'
                      ? 'bg-[#006095] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 font-semibold'
                  }`}
                >
                  Client
                </button>
              </div>
            </div>

            {/* 6 Responsibilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {(responsibilityTab === 'sapphire'
                ? [
                    { title: 'Create a dedicated team', IconComp: Users },
                    { title: 'Gather required access', IconComp: Lock },
                    { title: 'Plan project resources', IconComp: Sliders },
                    { title: 'Create a standard delivery practice', IconComp: Clock },
                    { title: 'Regular communication between stakeholders', IconComp: MessageCircle },
                    { title: 'Research on competitors', IconComp: Flag }
                  ]
                : [
                    { title: 'Define project scope & vision', IconComp: Milestone },
                    { title: 'Provide domain context & access', IconComp: Database },
                    { title: 'Review sprint deliverables', IconComp: CheckCircle2 },
                    { title: 'Provide timely feedback & approvals', IconComp: RefreshCw },
                    { title: 'Align business priorities with roadmap', IconComp: LineChart },
                    { title: 'Co-evaluate key performance indicators', IconComp: PieChart }
                  ]
              ).map((item, idx) => {
                const CardIcon = item.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#EBF4FA] rounded-2xl p-8 text-center border border-cyan-100/70 shadow-xs hover:shadow-md transition-all flex flex-col justify-center items-center space-y-4 min-h-[160px]"
                  >
                    <div className="w-12 h-12 text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesSection cards={blockchainPortfolioCards} />

      {/* Technology Stack Grid Section */}
      <TechStackProficientGrid />

      {/* =========================================================================
          LOOK AT THE EXPERTISE OF OUR BLOCKCHAIN DEVELOPERS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight">
                Look At The Expertise Of Our Blockchain Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                As a Blockchain Development Company in India, we have rich expertise in developing intuitive Blockchain applications:
              </p>
            </div>

            {/* 14 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Wallet Blockchain Development',
                  desc: 'Our remote Android application developers can quickly create safe and customizable android apps that meet specific company needs and suit your budget.',
                  IconComp: Wallet,
                  bgColor: 'bg-[#F3E8FF]',
                  iconColor: 'text-purple-600'
                },
                {
                  title: 'Multiple Supply Chains',
                  desc: 'Our blockchain engineers have established several multi-chain/supply chains to ensure supply chain transparency through simple and traceable solutions.',
                  IconComp: Layers,
                  bgColor: 'bg-[#DCFCE7]',
                  iconColor: 'text-emerald-600'
                },
                {
                  title: 'Crowdsale',
                  desc: 'We have a team of Blockchain developers that can develop the most optimal Crowdsale contracts to improve the administration of your crypto coins.',
                  IconComp: Users,
                  bgColor: 'bg-[#FFEDD5]',
                  iconColor: 'text-orange-600'
                },
                {
                  title: 'Ethereum',
                  desc: 'A coin trading platform is a platform that facilitates the exchange of cryptocurrencies. To assist this, our platform provides APIs for Polygon, Binance, and coinGecko, among others.',
                  IconComp: Coins,
                  bgColor: 'bg-[#FEF9C3]',
                  iconColor: 'text-amber-600'
                },
                {
                  title: 'Smart Contract',
                  desc: 'Our blockchain engineers comprehend your objectives and appropriately design smart contract management systems and eWallet applications.',
                  IconComp: Code2,
                  bgColor: 'bg-[#FCE7F3]',
                  iconColor: 'text-pink-600'
                },
                {
                  title: 'Coin Trading',
                  desc: 'You can hire our specialized Android app developers who are capable of leveraging Blockchain technology to create apps that meet your specifications.',
                  IconComp: TrendingUp,
                  bgColor: 'bg-[#E0F2FE]',
                  iconColor: 'text-sky-600'
                },
                {
                  title: 'NFT Marketplace',
                  desc: 'Our NFT marketplace is similar to several other online marketplaces in promoting trading and transactions by promoting familiarity.',
                  IconComp: Sparkles,
                  bgColor: 'bg-[#F3E8FF]',
                  iconColor: 'text-purple-600'
                },
                {
                  title: 'ICO',
                  desc: 'ICO has several parallels with Indian Stock Markets and the current IPO, allowing company owners to raise funds in the form of cryptocurrency.',
                  IconComp: Zap,
                  bgColor: 'bg-[#DCFCE7]',
                  iconColor: 'text-emerald-600'
                },
                {
                  title: 'Professional Blockchain Developer',
                  desc: 'Our team consists of over 200 qualified engineers adept at working on private and public Blockchain projects with the highest efficiency and a focus on results.',
                  IconComp: UserCheck,
                  bgColor: 'bg-[#FFEDD5]',
                  iconColor: 'text-orange-600'
                },
                {
                  title: 'Tokenization',
                  desc: 'Our suppliers and developers support a variety of tokens, including Security Tokens, Asset Tokens, and Utility Tokens, among others, to facilitate transactions between multiple parties.',
                  IconComp: Database,
                  bgColor: 'bg-[#FEF9C3]',
                  iconColor: 'text-amber-600'
                },
                {
                  title: 'Public Blockchain',
                  desc: 'Our engineers establish public blockchains where new users may join and have their non-custodial exchange wallets.',
                  IconComp: Globe,
                  bgColor: 'bg-[#FCE7F3]',
                  iconColor: 'text-pink-600'
                },
                {
                  title: 'Blockchain Banking Solution',
                  desc: 'Affordable Blockchain Developers, and we will tailor banking solutions to your cryptocurrency and blockchain endeavors. This is achieved by combining the KYC and AML standards.',
                  IconComp: ShieldCheck,
                  bgColor: 'bg-[#E0F2FE]',
                  iconColor: 'text-sky-600'
                },
                {
                  title: 'Software Mining Blockchain',
                  desc: 'You may hire our blockchain specialists to enhance security via mining designs, dashboards, and decentralized mining pool networks.',
                  IconComp: Cpu,
                  bgColor: 'bg-[#F3E8FF]',
                  iconColor: 'text-purple-600'
                },
                {
                  title: 'Private Blockchain',
                  desc: 'To manage the whole blockchain platform and the nodes, our blockchain engineers centralize the private blockchains and then install the Hyperledger fabric to handle Shared Ledger, peer nodes, component assets, and more.',
                  IconComp: Lock,
                  bgColor: 'bg-[#F3E8FF]',
                  iconColor: 'text-purple-600'
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-7 border border-slate-100/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 text-left"
                  >
                    <div className="space-y-3">
                      <div className={`w-12 h-12 rounded-xl ${card.bgColor} ${card.iconColor} flex items-center justify-center`}>
                        <CardIcon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-[#006095] hover:bg-[#004D7A] text-white font-extrabold px-8 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Get A Free Quote For Your Project
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Clutch Top Rated Banner */}
      <ClutchTopRatedBanner title="Proud To Have Picked These Up Along The Way" />

      {/* =========================================================================
          BENEFITS OF HIRING DEDICATED DEVELOPERS
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white text-slate-900 font-sans border-b border-slate-100">
        <Container>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-900 tracking-tight leading-tight">
                Benefits of Hiring Dedicated Developers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Hiring dedicated developers can help you save time and money so that you can focus more on core business activities. Benefits include:
              </p>
            </div>

            {/* 6 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cost Efficiency',
                  desc: 'One of the most significant advantages of hiring dedicated developers is the access to a global talent pool. We provide access to global talent, frequently from low-cost locations, lowering labour costs without sacrificing quality.',
                  IconComp: DollarSign
                },
                {
                  title: 'Access to Specialized Skills',
                  desc: 'Dedicated developers are experts in their fields. You can swiftly overcome talent shortages by employing dedicated developers, ensuring projects are completed on time and without errors.',
                  IconComp: Award
                },
                {
                  title: 'Scalability and Flexibility',
                  desc: 'Dedicated developers allow team size and composition changes without full-time employment. They can swiftly adapt to project needs and market circumstances, assuring timely delivery and resource optimisation.',
                  IconComp: Sliders
                },
                {
                  title: 'Focused and Committed Effort',
                  desc: 'Dedicated developers are more productive and committed since they only work on their tasks. This dedication generally improves code quality, turnaround times, and development.',
                  IconComp: CheckCircle2
                },
                {
                  title: 'Reduced Time to Market',
                  desc: 'Dedicated developers can speed up project development by using their experience and attention. Businesses can optimize operations, eliminate bottlenecks, and finish projects quickly.',
                  IconComp: Clock
                },
                {
                  title: 'Enhanced Innovation and Creativity',
                  desc: 'Dedicated developers offer new ideas and insights to projects. Dedicated developers can also encourage a collaborative atmosphere where in-house and external talent merge.',
                  IconComp: Lightbulb
                }
              ].map((card, idx) => {
                const CardIcon = card.IconComp;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] rounded-2xl p-7 border border-slate-100/90 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col space-y-4 text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#006095] flex items-center justify-center">
                      <CardIcon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          HIRE BLOCKCHAIN DEVELOPER IN 4 EASY STEPS
          ========================================================================= */}
      <HireDeveloper4Steps techName="Blockchain Developer" />

      {/* Our Story, Their Words Video Testimonials Carousel */}
      <VideoTestimonialsStory />

      {/* Business Friendly Hiring Models */}
      <AndroidHiringModels />

      {/* Success Matrix Grid */}
      <SuccessMatrixGrid />

      {/* Unveiling Our Innovative Solution */}
      <InnovativeSolutionVideo />

      {/* Process We Follow */}
      <ProcessWeFollow />

      {/* What Our Clients Say (Clutch Dark Section) */}
      <ClientReviewsDarkSection />

      {/* Digital Transformation Through Innovation Case Studies Slider */}
      <DigitalTransformationSlider />

      {/* FAQ Section */}
      <SapphireFaqSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* Our Recent Blogs Section */}
      <RecentBlogsSection />

      {/* What Sets Us Apart As Blockchain Development Company */}
      <WhatSetsUsApartSection
        title="What Sets Us Apart As Blockchain Development Company?"
        subtitle="Being unique is our quality! Firevy.co believes in the things that give us an edge over our competitors. We are renowned software and mobile application development organization serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire software development process stands us one level up the competitors."
      />

      {/* Have Blockchain Development Challenge To Address ? CTA Banner */}
      <section className="py-14 sm:py-16 bg-[#006095] text-white font-sans text-center">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-[900] tracking-tight text-white leading-tight">
              Have Blockchain Development Challenge To Address ?
            </h2>
            <p className="text-xs sm:text-sm text-cyan-100 font-medium">
              Get access to top Blockchain developers to transform your ideas into a robust application.
            </p>
            <div className="pt-2">
              <a
                href="#quote-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-white text-[#006095] hover:bg-slate-100 font-black px-8 py-3 rounded-lg text-sm sm:text-base transition-all shadow-md cursor-pointer"
              >
                Hire Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Subscribe us and Get the latest updates and news */}
      <SubscribeNewsletterSection />
    </div>
  );
};

export default BlockchainDevelopmentService;
