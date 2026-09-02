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
  Boxes,
  Package,
  Barcode,
  Truck,
  Layers,
  Brain,
  Sliders,
  TrendingUp,
  RefreshCw,
  Printer,
  ShieldCheck,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Smartphone,
  Check
} from 'lucide-react';

export const WarehouseManagementSystemService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Warehouse Management & WMS System',
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

  // 12 Key Warehouse Management Features
  const wmsFeatures = [
    {
      title: 'Real-Time Barcode & RFID Stock Tracking',
      desc: 'Sub-second inventory stock updates across multiple warehouses using handheld barcode scanners and RFID readers.',
      icon: Barcode
    },
    {
      title: 'AI Demand Forecasting & Re-Order',
      desc: 'Machine learning algorithms predicting seasonal stock demand and auto-generating purchase order triggers.',
      icon: Brain
    },
    {
      title: 'Pick & Pack Route Optimization',
      desc: 'Automated pick-list generation guiding warehouse workers along the shortest bin navigation paths.',
      icon: Package
    },
    {
      title: 'Inbound Receiving & Putaway',
      desc: 'Dock-to-stock receiving with automated bin location recommendations based on SKU weight and velocity.',
      icon: Boxes
    },
    {
      title: 'Carrier Shipping Integrations',
      desc: 'Direct integrations with FedEx, UPS, DHL, USPS, and freight dispatchers for automated shipping labels.',
      icon: Truck
    },
    {
      title: 'Low Stock & Expiry Date Alerts',
      desc: 'Instant notifications for items reaching minimum safety stock thresholds or batch expiration dates.',
      icon: TrendingUp
    },
    {
      title: 'Cycle Counting & Mobile Audits',
      desc: 'Conduct continuous mobile cycle counts eliminating costly annual inventory shutdown days.',
      icon: RefreshCw
    },
    {
      title: 'Barcode & QR Code Printing',
      desc: 'Wireless thermal label printing for pallets, master cartons, and individual SKU packaging.',
      icon: Printer
    },
    {
      title: 'Multi-Warehouse Transfer Management',
      desc: 'Manage inter-warehouse transfer requests, transit tracking, and receiving verification.',
      icon: Layers
    },
    {
      title: '3PL Vendor & Client Portals',
      desc: 'Dedicated portals for third-party logistics (3PL) vendors to manage multi-client inventory ledgers.',
      icon: Sliders
    },
    {
      title: 'SAP, Oracle & NetSuite ERP Sync',
      desc: 'Bi-directional real-time sync with SAP, Oracle, NetSuite, Dynamics 365, and QuickBooks ERP systems.',
      icon: ShieldCheck
    },
    {
      title: 'Custom WMS Analytics & KPIs',
      desc: 'Real-time KPI dashboards tracking order accuracy rates, inventory turnover, and worker productivity.',
      icon: CheckCircle2
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: '.NET Core & Java', desc: 'Enterprise microservices engine executing high-volume SKU scans and ERP sync.' },
      { name: 'Python (Django)', desc: 'AI demand forecasting models and predictive inventory replenishment algorithms.' },
      { name: 'Node.js', desc: 'Real-time WebSockets server powering handheld barcode scanner communications.' }
    ],
    frontend: [
      { name: 'Android Native & Kotlin', desc: 'Industrial rugged barcode scanner handheld terminal application development (Zebra/Honeywell).' },
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile apps for tablet warehouse managers and truck drivers.' },
      { name: 'React & Next.js', desc: 'Enterprise WMS Web dashboard for logistics directors and supply chain managers.' }
    ],
    database: [
      { name: 'PostgreSQL & PostGIS', desc: 'Scalable relational database storing multi-warehouse bin locations and SKU logs.' },
      { name: 'Redis Cache', desc: 'In-memory cache delivering sub-second stock availability lookups.' }
    ],
    devops: [
      { name: 'AWS Cloud & Kubernetes', desc: 'Auto-scaling cloud infrastructure handling millions of daily barcode transactions.' }
    ],
    testing: [
      { name: 'Appium & Katalon Studio', desc: 'Automated barcode scanner workflow and ERP API security testing.' }
    ],
    pm: [
      { name: 'Jira & Slack', desc: 'Agile project tracking and communication with senior supply chain architects.' }
    ]
  };

  // Official FAQs
  const sapphireFaqs = [
    {
      q: '1. What is a Warehouse Management System (WMS)?',
      a: 'A Warehouse Management System (WMS) is enterprise software that controls and optimizes daily warehouse operations, including receiving, putaway, picking, packing, inventory tracking, and shipping.'
    },
    {
      q: '2. Does the WMS support industrial barcode scanners (Zebra / Honeywell)?',
      a: 'Yes, we build native applications optimized for industrial Android handheld scanners (Zebra, Honeywell, Datalogic) with dedicated hardware laser scanner SDKs.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership and technical documentation upon project completion.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before project kickoff to guarantee full data privacy.'
    },
    {
      q: '5. Can your WMS integrate with our existing ERP (SAP, Oracle, NetSuite)?',
      a: 'Yes, we build custom bi-directional API connectors for SAP, Oracle, NetSuite, Microsoft Dynamics 365, and QuickBooks.'
    },
    {
      q: '6. What post-launch SLA support do you offer?',
      a: 'We provide 24/7 server health monitoring, ERP integration updates, and SLA maintenance.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Warehouse Management System Development Company | WMS Software"
        description="Top Warehouse Management System (WMS) development company in USA. Build custom AI-driven WMS software, barcode stock tracking, RFID, and ERP integrations."
        canonical="/services/warehouse-management-system"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Warehouse Management System (WMS) Development Services in USA"
        subtitle="Rapidly optimizing supply chain operations, Custom Warehouse Management System Development Services empower logistics providers and manufacturers with real-time barcode/RFID inventory tracking, AI pick-and-pack routing, and SAP/Oracle ERP sync."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="warehouse"
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
              <p className="text-xs text-slate-500 font-medium">Top WMS Developer</p>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified Logistics Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features-section" className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              ENTERPRISE WAREHOUSE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Warehouse Management System Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Transform warehouse operations with automated barcode tracking, AI pick-and-pack routing, and SAP/Oracle ERP integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wmsFeatures.map((item, idx) => {
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
      <SapphireTechStackGrid domainName="warehouse management" richTechCategories={techCategories} />
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
              Warehouse Management System FAQs
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
                <Boxes className="w-3.5 h-3.5 text-cyan-300" />
                <span>OPTIMIZE YOUR SUPPLY CHAIN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior Supply Chain Architects
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our architects today to design your custom WMS software or ERP integration.
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
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Robert Vance" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="robert@logistics.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief</label>
                      <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Tell us about barcode scanners, SKU tracking, SAP sync..." className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none" />
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

export default WarehouseManagementSystemService;
