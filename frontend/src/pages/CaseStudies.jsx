import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import VideoTestimonialsStory from '../components/home/VideoTestimonialsStory';
import PremiumServicesGrid from '../components/common/PremiumServicesGrid';
import WorkProcessGrid from '../components/home/WorkProcessGrid';
import SuccessMatrixGrid from '../components/home/SuccessMatrixGrid';
import InnovativeVideoSlider from '../components/common/InnovativeVideoSlider';
import TrustedBrandsGrid from '../components/common/TrustedBrandsGrid';
import ClientReviewsDarkSection from '../components/home/ClientReviewsDarkSection';
import FeaturedInMedia from '../components/common/FeaturedInMedia';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  X,
  Sparkles,
  Gavel,
  Laptop,
  Gem,
  Heart,
  Music,
  Award,
  Activity,
  MapPin,
  Clock,
  CheckCircle2,
  Search,
  ChevronRight
} from 'lucide-react';
import BRAND from '../constants/brand';

// =============================================================================
// VECTOR MOCKUP GRAPHIC COMPONENTS (100% Copy to Copy Match to Image 1 & Reference)
// =============================================================================

// 1. TagXchange Mockup (100% Copy to Copy Image 1)
const TagXchangeMockup = () => (
  <div className="w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs text-left font-sans">
    
    {/* Top Brand & Auction Badge Header */}
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-emerald-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-[#006B4D] text-white flex items-center justify-center font-black text-[11px]">
          TĀG
        </div>
        <span className="text-lg font-black text-[#006B4D] tracking-tight">
          TagXchange
        </span>
      </div>

      <div className="bg-amber-50/90 border border-amber-200 px-3 py-1 rounded-xl flex items-center space-x-1.5 shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-[10px] font-extrabold text-amber-900 uppercase tracking-wider">Ending Soon • 03:56</span>
      </div>
    </div>

    {/* Center Laptop & Auction Graphic Area */}
    <div className="relative z-10 my-3 flex items-center justify-center">
      {/* Floating Live Bid Tag Left */}
      <div className="absolute left-1 top-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md z-20 flex items-center space-x-1.5 animate-bounce-subtle">
        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">A</span>
        <span className="text-xs font-black text-slate-800">Live Bid: ₹1,20,000</span>
      </div>

      {/* Floating Gavel Icon Left */}
      <div className="absolute left-4 bottom-2 bg-gradient-to-br from-amber-600 to-amber-800 text-white p-3 rounded-2xl shadow-lg z-20 transform -rotate-12 border border-amber-400/40">
        <Gavel className="w-6 h-6" />
      </div>

      {/* Laptop Main Display Frame */}
      <div className="w-full max-w-[320px] bg-slate-900 p-2 sm:p-2.5 rounded-2xl shadow-xl border border-slate-700">
        <div className="bg-white rounded-xl p-3 text-slate-900 space-y-2 text-center">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TagXchange Auction Portal</div>
          <div className="text-xs font-black text-slate-900 leading-tight">Find Your Perfect Private Number Plate</div>
          
          <div className="bg-slate-100 rounded-lg p-2 flex items-center justify-between text-[10px] border border-slate-200">
            <span className="font-extrabold text-[#006B4D]">HD 77</span>
            <span className="bg-[#006B4D] text-white px-2 py-0.5 rounded font-bold">Search</span>
          </div>

          <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-100 flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-700">Highest Offer</span>
            <span className="font-black text-[#006B4D]">₹1,22,000</span>
          </div>
        </div>
      </div>

      {/* Floating Price Badge Right */}
      <div className="absolute right-2 bottom-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md z-20 text-xs font-black text-slate-800">
        ₹90,000
      </div>
    </div>

    {/* Bottom Verified Status */}
    <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5">
      <span className="flex items-center space-x-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        <span>Automated Escrow Lock</span>
      </span>
      <span className="text-[#006B4D] font-black">100% Verified Sellers</span>
    </div>

    {/* Background Decorative Circles */}
    <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />
    <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-teal-400/10 blur-2xl pointer-events-none" />
  </div>
);

// 2. Glamora Mockup (100% Copy to Copy Screenshot 2)
const GlamoraMockup = () => (
  <div className="w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs text-left font-sans">
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 text-white flex items-center justify-center shadow-xs">
          <Gem className="w-4 h-4" />
        </div>
        <span className="text-lg font-black text-slate-900 tracking-tight">
          Glamora
        </span>
      </div>
      <span className="text-[10px] font-extrabold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg uppercase tracking-wider">
        3D Customizer
      </span>
    </div>

    <div className="relative z-10 my-3 flex items-center justify-center">
      <div className="w-full max-w-[320px] bg-slate-900 p-2 sm:p-2.5 rounded-2xl shadow-xl border border-slate-700">
        <div className="bg-amber-50/30 rounded-xl p-3 text-slate-900 space-y-2 text-center bg-white">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Every Piece Of Jewelry Tells A Story</div>
          
          <div className="w-full h-24 rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center p-2 border border-amber-200 relative overflow-hidden">
            <Gem className="w-12 h-12 text-amber-600 animate-pulse" />
            <div className="absolute bottom-1 right-2 text-[9px] font-bold bg-white/90 px-2 py-0.5 rounded shadow-2xs">AR Try-On Active</div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 pt-1">
            <span>Custom Solitaire Ring</span>
            <span className="text-amber-700 font-black">$4,250</span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5">
      <span>Personalized Sales Uplift</span>
      <span className="text-amber-700 font-black">+2.9X Growth</span>
    </div>
  </div>
);

// 3. LoveLink Mockup (100% Copy to Copy Screenshot 3)
const LoveLinkMockup = () => (
  <div className="w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-pink-50/80 via-white to-rose-50/50 rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs text-left font-sans">
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-pink-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-xs">
          <Heart className="w-4 h-4 fill-white" />
        </div>
        <span className="text-lg font-black text-rose-600 tracking-tight">
          LOVE LINK
        </span>
      </div>
      <span className="text-[10px] font-extrabold bg-rose-100 text-rose-900 px-2.5 py-1 rounded-lg uppercase tracking-wider">
        AI Match Suite
      </span>
    </div>

    <div className="relative z-10 my-3 flex items-center justify-center">
      <div className="w-full max-w-[320px] bg-slate-900 p-2.5 rounded-3xl shadow-xl border border-slate-700">
        <div className="bg-white rounded-2xl p-3 text-slate-900 space-y-2 text-center">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-black text-rose-600">Ethan H., 23</span>
            <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">✓ Verified Profile</span>
          </div>

          <div className="w-full h-24 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center relative overflow-hidden">
            <Heart className="w-10 h-10 fill-white/80 animate-bounce" />
            <div className="absolute bottom-2 left-2 bg-slate-950/70 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded">
              98% Match Rate
            </div>
          </div>

          <div className="flex justify-center space-x-3 pt-1">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">✕</div>
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs shadow-md">♥</div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5">
      <span>Match Conversion</span>
      <span className="text-rose-600 font-black">66%+ Rate</span>
    </div>
  </div>
);

// 4. StreamBridge Mockup (100% Copy to Copy Screenshot 4)
const StreamBridgeMockup = () => (
  <div className="w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-cyan-50/80 via-white to-teal-50/50 rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs text-left font-sans">
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-cyan-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-[#005F96] text-white flex items-center justify-center shadow-xs">
          <Music className="w-4 h-4" />
        </div>
        <span className="text-lg font-black text-slate-900 tracking-tight">
          StreamBridge
        </span>
      </div>
      <span className="text-[10px] font-extrabold bg-cyan-100 text-cyan-900 px-2.5 py-1 rounded-lg uppercase tracking-wider">
        HD Music App
      </span>
    </div>

    <div className="relative z-10 my-3 flex items-center justify-center">
      <div className="w-full max-w-[320px] bg-slate-900 p-2.5 rounded-3xl shadow-xl border border-slate-700">
        <div className="bg-slate-950 rounded-2xl p-3 text-white space-y-2 text-center">
          <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Now Playing • Wandering Of You</div>

          <div className="w-full h-24 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-700 flex items-center justify-center relative overflow-hidden">
            <Music className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '8s' }} />
          </div>

          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full w-3/4" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5">
      <span>Distribution Reach</span>
      <span className="text-[#005F96] font-black">3.1X Growth</span>
    </div>
  </div>
);

// 5. Generic Mockup fallback for remaining cards
const GenericMockup = ({ brand, category }) => (
  <div className="w-full h-full min-h-[300px] sm:min-h-[350px] bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs text-left font-sans">
    <div className="flex items-center justify-between z-10">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-blue-200/80 shadow-xs">
        <div className="w-7 h-7 rounded-lg bg-[#005F96] text-white flex items-center justify-center font-black text-xs">
          {brand.substring(0, 2).toUpperCase()}
        </div>
        <span className="text-lg font-black text-slate-900 tracking-tight">
          {brand}
        </span>
      </div>
      <span className="text-[10px] font-extrabold bg-blue-100 text-[#005F96] px-2.5 py-1 rounded-lg uppercase tracking-wider">
        {category}
      </span>
    </div>

    <div className="relative z-10 my-3 flex items-center justify-center">
      <div className="w-full max-w-[320px] bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-700 text-white text-center space-y-2">
        <div className="w-10 h-10 rounded-xl bg-[#005F96] text-white flex items-center justify-center mx-auto shadow-md">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="text-sm font-black">{brand} Live Enterprise Suite</div>
        <div className="text-[10px] text-slate-300">Verified Architecture Platform</div>
      </div>
    </div>

    <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-600 border-t border-slate-200/60 pt-2.5">
      <span>Verified Enterprise Outcome</span>
      <span className="text-[#005F96] font-black">100% Delivered</span>
    </div>
  </div>
);

// Map Mockup components by case study ID
const renderMockupComponent = (id, brand, category) => {
  switch (id) {
    case 'number-plate-auction-system':
      return <TagXchangeMockup />;
    case 'jewellery-ecommerce-development':
      return <GlamoraMockup />;
    case 'hire-dating-app-developer':
      return <LoveLinkMockup />;
    case 'music-streaming-app-development':
      return <StreamBridgeMockup />;
    default:
      return <GenericMockup brand={brand} category={category} />;
  }
};

const caseStudiesData = [
  {
    id: 'number-plate-auction-system',
    title: 'Number Plate Auction System Development',
    category: 'Ecommerce',
    mockupBrand: 'TagXchange',
    client: 'Premier Auto License Exchange Network',
    duration: '4 Months',
    teamSize: '8 Developers & QA Specialists',
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Stripe Connect'],
    cardBg: 'bg-[#EBEBEB]',
    layoutReverse: false, // Text Left, Image Right (Copy to Copy Image 1)
    summary: 'TagXchange is an exciting new online marketplace that provides a revolutionary experience for buying and trading number plates, by connecting buyers and sellers in a secure and transparent auction environment. Number Plate Auction Platform...',
    metrics: [
      { value: '3.3X', label: 'Bid Participation Growth' },
      { value: '58%+', label: 'Auction Conversion Rate' }
    ],
    detailedMetrics: [
      { value: '15,000+', label: 'Auction Bids / Sec' },
      { value: '$45M+', label: 'Platform Volume' },
      { value: '<50ms', label: 'Bid Latency' },
      { value: '+340%', label: 'Conversion Boost' }
    ],
    challenge: 'High latency during peak auction bidding led to skipped bids, payment dispute delays, and unverified buyers attempting high-value transactions.',
    solution: 'Engineered an in-memory Redis pub/sub WebSocket bidding engine paired with automated Stripe escrow holds and identity verification microservices.',
    impact: 'Increased live auction concurrency by 12x, reduced bid processing latency to under 50ms, and facilitated over $45M in successful plate auctions.'
  },
  {
    id: 'jewellery-ecommerce-development',
    title: 'Jewellery Ecommerce Development Services',
    category: 'Ecommerce',
    mockupBrand: 'Glamora',
    client: 'Luxury Fine Jewelry Retail Chain',
    duration: '5 Months',
    teamSize: '9 Full-Stack Specialists',
    techStack: ['Next.js', 'Shopify Plus API', 'Three.js 3D', 'Node.js', 'TailwindCSS'],
    cardBg: 'bg-[#FFF4ED]',
    layoutReverse: true, // Image Left, Text Right (Copy to Copy Screenshot 2)
    summary: 'We have created a full jewelry e-commerce system for Glamora that includes a customer-facing website and an admin panel. The customers can browse, customize and buy jewelry products (rings, necklaces, bracelets, and earrings) without friction...',
    metrics: [
      { value: '2.9X', label: 'Personalized Sales Uplift' },
      { value: '63%+', label: 'Product Customization Usage' }
    ],
    detailedMetrics: [
      { value: '3D AR View', label: 'Ring Try-On' },
      { value: '+180%', label: 'Cart Conversion' },
      { value: '$12M+', label: 'Annual Revenue' },
      { value: '4.9★', label: 'Customer Score' }
    ],
    challenge: 'High product return rates due to customers unable to visualize ring dimensions and metal gemstone custom combinations online.',
    solution: 'Built a WebGL 3D customizer allowing real-time gemstone swaps, engraving previews, and AR hand virtual try-on.',
    impact: 'Increased personalized sales uplift by 2.9x and reduced e-commerce return rates by 42%.'
  },
  {
    id: 'hire-dating-app-developer',
    title: 'Hire Dating App Developer',
    category: 'Social',
    mockupBrand: 'LoveLink',
    client: 'Global Social Discovery Startup',
    duration: '6 Months',
    teamSize: '10 Mobile Developers',
    techStack: ['Flutter', 'Python AI', 'Neo4j Graph DB', 'WebRTC Video', 'AWS Lambda'],
    cardBg: 'bg-[#FDF2F8]',
    layoutReverse: false, // Text Left, Image Right (Copy to Copy Screenshot 3)
    summary: 'LoveLink App is a comprehensive geolocation-based social and dating platform that prioritizes authentic connections and meaningful engagements. The project encompasses a native mobile application for Android and iOS, an end-user website, and an...',
    metrics: [
      { value: '66%+', label: 'Match-to-Date Conversion' },
      { value: '3.1X', label: 'Verified Meetup Rate' }
    ],
    detailedMetrics: [
      { value: '3.5M+', label: 'Active Users' },
      { value: '<150ms', label: 'Match Recommendation' },
      { value: '99.2%', label: 'Fake Profile Block' },
      { value: '4.8★', label: 'App Rating' }
    ],
    challenge: 'Bots and unverified profiles eroded user trust and lowered active match-to-date conversion rates.',
    solution: 'Integrated AI facial verification, graph database interest matching, and encrypted video speed-dating rooms.',
    impact: 'Increased verified meetup rate by 3.1x and scaled daily active users to 3.5 Million.'
  },
  {
    id: 'music-streaming-app-development',
    title: 'Music Streaming App Development Company',
    category: 'Media',
    mockupBrand: 'StreamBridge',
    client: 'International Music Distribution Network',
    duration: '7 Months',
    teamSize: '12 Streaming Engineers',
    techStack: ['Flutter', 'PHP Laravel API', 'AWS CloudFront CDN', 'FFmpeg', 'HLS Stream'],
    cardBg: 'bg-[#F0FDFA]',
    layoutReverse: true, // Image Left, Text Right (Copy to Copy Screenshot 4)
    summary: 'Stream Bridge is a comprehensive music distribution and management platform featuring a Flutter mobile application and PHP Laravel web solution. The platform serves multiple user types including Artists, A&R professionals, Beat Makers, and...',
    metrics: [
      { value: '3.1X', label: 'Music Distribution Reach' },
      { value: '62%+', label: 'Artist Revenue Growth' }
    ],
    detailedMetrics: [
      { value: '10M+', label: 'Tracks Streamed' },
      { value: '<0.04%', label: 'Buffer Loss' },
      { value: '$8.2M', label: 'Payout Volume' },
      { value: '100k+', label: 'Indie Artists' }
    ],
    challenge: 'High latency during global track uploads and complex royalty splits among multiple co-producers.',
    solution: 'Engineered a low-latency FFmpeg audio transcoding cloud pipeline with automated smart contract royalty payouts.',
    impact: 'Boosted artist revenue growth by 62% and expanded global music distribution reach across 80+ countries.'
  },
  {
    id: 'beauty-pageant-platform',
    title: 'Beauty Pageant Platform Development Company',
    category: 'Social',
    mockupBrand: 'Pageantrix',
    client: 'Global Beauty & Entertainment Consortium',
    duration: '5 Months',
    teamSize: '8 Full-Stack Developers',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS CloudFront'],
    cardBg: 'bg-[#FFF1F2]',
    layoutReverse: false, // Text Left, Image Right
    summary: 'We deployed Pageantrix, a unified beauty pageant platform that is designed to make it easier for directors, contestants, businesses, and audiences to interact more seamlessly. Pageant Makeup...',
    metrics: [
      { value: '4.5X', label: 'Audience Engagement' },
      { value: '88%+', label: 'Live Voting Accuracy' }
    ],
    detailedMetrics: [
      { value: '1.8M+', label: 'Live Voters' },
      { value: '<80ms', label: 'Vote Processing' },
      { value: '100%', label: 'Fraud Shield' },
      { value: '4.9★', label: 'User Feedback' }
    ],
    challenge: 'High concurrency spikes during live finals caused voting server timeouts and fraud vulnerability.',
    solution: 'Deployed a WebSocket live voting queue backed by Redis and device fingerprint fraud prevention.',
    impact: 'Processed 1.8M+ live votes with zero downtime and increased audience engagement by 4.5x.'
  },
  {
    id: 'ai-telehealth-ehr-portal',
    title: 'AI-Powered Remote Patient Telehealth & HIPAA EHR Suite',
    category: 'Healthcare',
    mockupBrand: 'MEDiCare AI Suite',
    client: 'National Health Care Network (USA)',
    duration: '6 Months',
    teamSize: '12 HealthTech Engineers',
    techStack: ['React Native', 'Python', 'FastAPI', 'HIPAA AWS', 'WebRTC', 'FHIR/HL7'],
    cardBg: 'bg-[#F0F9FF]',
    layoutReverse: true, // Image Left, Text Right
    summary: 'MEDiCare AI Suite is a comprehensive healthcare platform enabling seamless remote virtual appointments, AI-driven diagnostic assistance, and automated HIPAA-compliant medical record synchronization.',
    metrics: [
      { value: '4.9★', label: 'Patient Satisfaction Rating' },
      { value: '60%', label: 'Wait Time Reduction' }
    ],
    detailedMetrics: [
      { value: '2.4M+', label: 'Active Patients' },
      { value: '-60%', label: 'Wait Time Drop' },
      { value: '100%', label: 'HIPAA Compliance' },
      { value: '50k/Mo', label: 'Consultations' }
    ],
    challenge: 'Legacy patient portals caused 45+ minute queue delays and disconnected clinical records across hospital departments.',
    solution: 'Architected a zero-trust WebRTC video consultation suite integrated directly with hospital EHR databases and automated SMS reminders.',
    impact: 'Cut average patient wait time from 45 mins to 8 mins while serving over 2.4 Million patients.'
  },
  {
    id: 'ai-generative-suite-llm',
    title: 'Enterprise Generative AI & Knowledge Base Copilot',
    category: 'AI/ML',
    mockupBrand: 'Aura Intelligence LLM',
    client: 'Global SaaS Tech Enterprise',
    duration: '5 Months',
    teamSize: '10 AI/ML Researchers & Engineers',
    techStack: ['Python', 'LangChain', 'Pinecone Vector DB', 'OpenAI GPT-4 API', 'React', 'FastAPI'],
    cardBg: 'bg-[#F5F3FF]',
    layoutReverse: false, // Text Left, Image Right
    summary: 'Aura Intelligence is a next-gen enterprise AI copilot that ingests massive corporate knowledge bases to provide real-time automated customer resolution and contextual code intelligence.',
    metrics: [
      { value: '10X', label: 'Resolution Speed Boost' },
      { value: '82%', label: 'Ticket Automation Rate' }
    ],
    detailedMetrics: [
      { value: '10x Faster', label: 'Resolution Speed' },
      { value: '99.4%', label: 'Accuracy Score' },
      { value: '82%', label: 'Support Automation' },
      { value: '$2.8M', label: 'Annual Savings' }
    ],
    challenge: 'Support agents spent over 25 minutes per inquiry searching across fragmented Jira, Confluence, and SharePoint databases.',
    solution: 'Integrated Pinecone vector embeddings with fine-tuned LLM agents providing instant, cited answers to internal staff and external clients.',
    impact: 'Automated 82% of tier-1 support tickets and reduced average query response time from 25 minutes to 3 seconds.'
  }
];

const categories = [
  'All',
  'Ecommerce',
  'Social',
  'Media',
  'AI/ML',
  'On-Demand',
  'Healthcare',
  'Gaming',
  'Education'
];

const statBoxes = [
  { value: '23+', label: 'Years of Experience', bg: 'bg-[#F3E8FF] border-[#E9D5FF]', textColor: 'text-purple-950' },
  { value: '300+', label: '5-Star Clutch Reviews', bg: 'bg-[#FFEDD5] border-[#FED7AA]', textColor: 'text-amber-950' },
  { value: '15+', label: 'Fortunes 500 Companies', bg: 'bg-[#DCFCE7] border-[#BBF7D0]', textColor: 'text-emerald-950' },
  { value: '200+', label: 'IT Professional', bg: 'bg-[#FEF9C3] border-[#FEF08A]', textColor: 'text-yellow-950' },
  { value: '95%', label: 'Client Retention', bg: 'bg-[#FCE7F3] border-[#FBCFE8]', textColor: 'text-pink-950' },
  { value: '18+', label: 'Industry Served', bg: 'bg-[#E0F2FE] border-[#BAE6FD]', textColor: 'text-sky-950' },
  { value: '2800+', label: 'Satisfied Clients', bg: 'bg-[#FFEDD5] border-[#FED7AA]', textColor: 'text-orange-950' },
  { value: '1500+', label: 'Completed Projects', bg: 'bg-[#F3E8FF] border-[#E9D5FF]', textColor: 'text-purple-950' }
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredCaseStudies = activeCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={`Our Case Study - Transform. Evolve. Revolutionize. | ${BRAND.name}`}
        description="Explore Firevy's engineering case studies across Ecommerce, Healthcare, AI/ML, Media, On-Demand, Gaming, Social, and Education."
      />

      {/* =========================================================================
          HERO SECTION (Matching Reference Website 100%)
          ========================================================================= */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-r from-slate-50/90 via-blue-50/30 to-purple-50/20 border-b border-slate-200/60 overflow-hidden font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <div>
                <h3
                  className="text-slate-900 mb-2 tracking-tight"
                  style={{ fontSize: '30px', fontWeight: 800, lineHeight: '36px' }}
                >
                  Our Case Study
                </h3>
                <h1
                  className="tracking-tight"
                  style={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}
                >
                  <span className="text-[#005F96]">
                    Transform. Evolve.
                  </span>
                  <br />
                  <span className="text-[#7E22CE]">Revolutionize.</span>
                </h1>
              </div>

              <p
                className="text-slate-600 max-w-xl"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: '30px' }}
              >
                Delivering tech-led innovations that drive success. Tailored solutions for startups, global leaders, and diverse industries.
              </p>
            </div>

            {/* Right Column: 8 Pastel Colored Stat Cards (4x2 Grid) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                {statBoxes.map((box, idx) => (
                  <div
                    key={idx}
                    className={`${box.bg} border ${box.textColor} rounded-2xl p-4 text-center flex flex-col justify-center items-center shadow-xs hover:shadow-md transition-all duration-300 min-h-[105px]`}
                  >
                    <span className="text-2xl sm:text-3xl font-black tracking-tight leading-none mb-1 font-sans">
                      {box.value}
                    </span>
                    <span className="text-[11px] font-bold leading-tight opacity-90 font-sans">
                      {box.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =========================================================================
          INDUSTRIES SECTION & FILTER TABS (100% Single Row Matching Reference Screenshot 1)
          ========================================================================= */}
      <section id="case-studies-grid" className="py-10 lg:py-12 bg-white font-sans">
        <Container className="max-w-7xl">
          {/* Centered Heading with Blue Accent Underline */}
          <div className="text-center mb-7">
            <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#005F96] tracking-tight relative inline-block">
              Industries
              <span className="block h-1 w-16 bg-[#005F96] rounded-full mx-auto mt-2"></span>
            </h2>
          </div>

          {/* Industry Filter Pills Bar (Fits 100% on 1 Single Line on Desktop!) */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 max-w-full mx-auto overflow-x-auto pb-2">
              {categories.map((cat) => {
                const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#005F96] text-white shadow-md scale-105'
                        : 'bg-[#E2E8F0] text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              CASE STUDY LARGE FEATURE CARDS (Alternating Left/Right - Copy to Copy!)
              ========================================================================= */}
          <div className="space-y-10 max-w-6xl mx-auto">
            {filteredCaseStudies.map((cs, index) => {
              const isReversed = cs.layoutReverse !== undefined ? cs.layoutReverse : index % 2 !== 0;

              return (
                <div
                  key={cs.id}
                  className={`${cs.cardBg} rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 font-sans`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Text Column (50% Width) */}
                    <div className={`lg:col-span-6 space-y-4 text-left ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <span className="text-[#005F96] font-extrabold text-sm sm:text-base tracking-wide block">
                        {cs.category}
                      </span>

                      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 leading-tight tracking-tight font-sans">
                        {cs.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-normal">
                        {cs.summary}
                      </p>

                      <div className="pt-2 pb-4">
                        <button
                          onClick={() => setSelectedCaseStudy(cs)}
                          className="bg-[#005F96] hover:bg-[#004A75] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all inline-flex items-center space-x-2 shadow-md cursor-pointer group"
                        >
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Metrics Row (Copy to Copy Reference Images) */}
                      <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-300/60">
                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
                            {cs.metrics[0].value}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-600 font-sans mt-0.5">
                            {cs.metrics[0].label}
                          </div>
                        </div>

                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
                            {cs.metrics[1].value}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-slate-600 font-sans mt-0.5">
                            {cs.metrics[1].label}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vector Mockup Showcase Column (100% Copy to Copy Image 1) */}
                    <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div onClick={() => setSelectedCaseStudy(cs)} className="cursor-pointer">
                        {renderMockupComponent(cs.id, cs.mockupBrand, cs.category)}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Our Story, Their Words (Video Testimonials Slider) */}
      <VideoTestimonialsStory />

      {/* Our Premium Services */}
      <PremiumServicesGrid />

      {/* Process We Follow (Agile 8-Step Work Process) */}
      <WorkProcessGrid />

      {/* About Us & Success Matrix */}
      <SuccessMatrixGrid />

      {/* Unveiling Our Innovative Solution Video Slider */}
      <InnovativeVideoSlider />

      {/* Trusted By The World's Leading Brands */}
      <TrustedBrandsGrid />

      {/* What Our Clients Say (Home Page Dark Client Reviews Section) */}
      <ClientReviewsDarkSection />

      {/* We Have Been Featured In */}
      <FeaturedInMedia />

      {/* Let's Convert Your Ideas Into Reality & Subscribe Newsletter Banners (1:1 Reference Match) */}
      <WorkTogetherNewsletterSection
        title="Let's Convert Your Ideas Into Reality"
        subtitle="We have stood the test of time, and built some of the finest solutions for hundreds of clients around the world."
        buttonText="Request A Free Quote"
        buttonLink="/contact"
      />

      {/* =========================================================================
          INTERACTIVE CASE STUDY DETAIL MODAL
          ========================================================================= */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in text-left font-sans">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative my-8">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 sm:px-8 py-5 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider bg-[#005F96] text-white">
                  {selectedCaseStudy.category}
                </span>
                <span className="text-xs font-bold text-slate-500 hidden sm:inline">
                  {selectedCaseStudy.client}
                </span>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                  {selectedCaseStudy.title}
                </h2>
                <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden relative shadow-md bg-slate-900 flex items-center justify-center p-6 text-white text-center">
                  <div className="space-y-3 max-w-lg">
                    <div className="w-12 h-12 rounded-2xl bg-[#005F96] text-white flex items-center justify-center mx-auto shadow-lg">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black">{selectedCaseStudy.mockupBrand} Architecture Suite</h3>
                    <p className="text-xs text-slate-300">{selectedCaseStudy.summary}</p>
                  </div>
                </div>
              </div>

              {/* 4 Stat Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                {selectedCaseStudy.detailedMetrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#005F96]">{m.value}</div>
                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <h4 className="text-sm font-extrabold text-amber-950 uppercase tracking-wider flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>The Business Challenge</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                  <h4 className="text-sm font-extrabold text-emerald-950 uppercase tracking-wider flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Engineered Solution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Impact */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
                <h4 className="text-sm font-extrabold text-cyan-300 uppercase tracking-wider flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-300" />
                  <span>Quantifiable Business Impact</span>
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedCaseStudy.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-3">
                  Technologies & Architecture Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 rounded-b-3xl flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">
                Project Duration: {selectedCaseStudy.duration}
              </span>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="bg-[#005F96] hover:bg-[#004A75] text-white font-extrabold text-xs px-6 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;
