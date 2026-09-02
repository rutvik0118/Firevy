import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import ProcessWeFollow from '../common/ProcessWeFollow';
import SuccessMatrix from '../common/SuccessMatrix';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SapphireTechStackGrid from '../common/SapphireTechStackGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import {
  CreditCard,
  ShoppingBag,
  Sliders,
  Printer,
  Users,
  Gift,
  Clock,
  ShieldCheck,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Smartphone,
  Check,
  Zap
} from 'lucide-react';

export const CloverAppDevelopmentService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Clover POS Custom Application',
    budget: '$25,000 - $50,000',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // 12 Key Clover POS Features
  const cloverFeatures = [
    {
      title: 'Custom Clover POS Application',
      desc: 'Bespoke applications designed specifically for Clover Station Duo, Station Solo, Mini, and Flex hardware devices.',
      icon: CreditCard
    },
    {
      title: 'Real-Time Inventory & Barcode Sync',
      desc: 'Synchronize inventory stock levels between Clover POS devices and online e-commerce stores in real time.',
      icon: ShoppingBag
    },
    {
      title: 'Custom Loyalty & Rewards Engine',
      desc: 'Engage customers with custom points, rewards tiers, and 1-tap checkout point redemption.',
      icon: Gift
    },
    {
      title: 'Kitchen Display System (KDS)',
      desc: 'Fire orders directly from Clover Mini POS to kitchen bump screens and line printers with custom tickets.',
      icon: Printer
    },
    {
      title: 'Employee Clock-In & Shift Manager',
      desc: 'Track employee shift hours, clock-in/clock-out, tip distribution, and role-based device permissions.',
      icon: Clock
    },
    {
      title: 'Custom Payment & Gift Cards',
      desc: 'Accept multi-card processing, branded digital gift cards, split bills, and NFC contactless payments.',
      icon: Zap
    },
    {
      title: 'Customer Relationship Management (CRM)',
      desc: 'Capture customer emails, order history, and send automated SMS promotional discounts.',
      icon: Users
    },
    {
      title: 'Offline Transaction Mode',
      desc: 'Process credit transactions during internet outages with automatic batch sync upon reconnection.',
      icon: ShieldCheck
    },
    {
      title: 'Interactive Table Management',
      desc: 'Restaurant floor plan layouts, reservation sync, seat assignment, and itemized bill splitting.',
      icon: Sliders
    },
    {
      title: 'Clover REST API & SDK Sync',
      desc: 'Deep Clover Android SDK and REST API integration extending core POS capabilities.',
      icon: Smartphone
    },
    {
      title: 'Live Sales Analytics & Reports',
      desc: 'Access real-time sales dashboards, hourly revenue trends, top-selling products, and tax summaries.',
      icon: Star
    },
    {
      title: 'Multi-Store POS Management',
      desc: 'Manage menus, prices, and employee roles across multiple retail locations from one central admin.',
      icon: CheckCircle2
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: 'Clover REST API', desc: 'Deep integration with official Clover POS APIs for inventory, orders, and payment processing.' },
      { name: 'Node.js & Python', desc: 'Scalable backend server connecting Clover POS devices with third-party web apps and ERPs.' },
      { name: 'Java & Android SDK', desc: 'Native Clover Android SDK app development for Clover Station, Mini, and Flex.' }
    ],
    frontend: [
      { name: 'Clover Android SDK', desc: 'Native Android apps optimized for Clover Station Duo 14" screen and Clover Flex 6" handheld.' },
      { name: 'React & React Native', desc: 'Cross-platform customer Web portals and mobile companion apps.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'Secure database storing multi-store inventory ledgers, transactions, and CRM data.' }
    ],
    devops: [
      { name: 'AWS Cloud', desc: 'High-availability AWS infrastructure ensuring 99.99% uptime for Clover REST webhooks.' }
    ],
    testing: [
      { name: 'Clover Sandbox Testing', desc: 'Rigorous testing on official Clover hardware sandboxes before App Market submission.' }
    ],
    pm: [
      { name: 'Jira & Slack', desc: 'Agile project management and communication with senior Clover POS developers.' }
    ]
  };

  // Official FAQs
  const sapphireFaqs = [
    {
      q: '1. What is Clover app development?',
      a: 'Clover app development involves creating custom software applications tailored for Clover POS hardware (Station, Mini, Flex) to add custom features like loyalty programs, custom inventory sync, and KDS.'
    },
    {
      q: '2. Can you submit our app to the official Clover App Market?',
      a: 'Yes! We handle the complete development, security compliance audit, and official Clover App Market submission process.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership and complete technical documentation.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before project initiation to guarantee complete confidentiality.'
    },
    {
      q: '5. Which Clover hardware devices do you support?',
      a: 'We support all Clover POS devices including Clover Station Duo, Station Solo, Clover Mini, and Clover Flex handheld terminals.'
    },
    {
      q: '6. What post-launch SLA support do you offer?',
      a: 'We offer 24/7 API health monitoring, Clover OS update compatibility fixes, and SLA maintenance.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Clover App Development Company | Custom Clover POS Solutions"
        description="Top Clover App Development Company in USA. Build custom Clover POS apps for Station, Mini, & Flex devices with custom inventory, loyalty, and payment integrations."
        canonical="/services/clover-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Clover App Development Services in USA"
        subtitle="Rapidly revolutionizing point-of-sale systems, Custom Clover POS App Development Services empower retail stores and restaurants with custom Android Clover apps for Station, Mini, and Flex hardware with instant inventory sync, loyalty rewards, and custom payment rules."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="clover"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Review Bar */}
      <section className="py-6 bg-[#F8FAFC] border-b border-slate-200 text-slate-900 font-sans">
        <Container>
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>900+ GOOGLE REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">4.9 / 5.0 Rating</p>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>320+ CLUTCH REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Top Clover POS Developer</p>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified POS IT Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features-section" className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              CLOVER POS CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Custom Clover App Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Extend Clover POS hardware with custom inventory sync, loyalty rewards, kitchen display systems, and automated payouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloverFeatures.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold mb-4 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>100% Customizable</span>
                    <span className="text-[#005F96] font-bold">Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <SuccessStoriesSection category="general" />
      <PremiumServicesGrid />
      <SuccessMatrix />
      <SapphireTechStackGrid domainName="clover pos" richTechCategories={techCategories} />
      <ProcessWeFollow title="Process We Follow" subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance." />
      <TrustedBrandsGrid />

      {/* FAQs Section */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Clover App Development FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#005F96]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <CreditCard className="w-3.5 h-3.5 text-cyan-300" />
                <span>EXPAND YOUR CLOVER POS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior Clover POS Engineers
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our architects today to design your custom Clover App Market solution.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <button onClick={() => setFormSubmitted(false)} className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs">
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Alex Turner" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="alex@retailpos.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief</label>
                      <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Tell us about Clover Station, Mini, Flex, loyalty, inventory sync..." className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none" />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>Submit Project Brief & Get Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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

export default CloverAppDevelopmentService;
