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
  UserCheck,
  ShieldCheck,
  QrCode,
  Bell,
  Printer,
  FileCheck,
  Building,
  User,
  Users,
  Search,
  Star,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Lock,
  Smartphone,
  Sliders,
  DollarSign,
  AlertTriangle,
  Check
} from 'lucide-react';

export const VisitorManagementSystemService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'Visitor Management & Gate Pass System',
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

  // 12 Key Visitor Management Features
  const visitorFeatures = [
    {
      title: '1-Tap Contactless QR Check-In',
      desc: 'Visitors register quickly via self-service kiosk iPads or by scanning a entrance QR code on their smartphones.',
      icon: QrCode
    },
    {
      title: 'Digital Gate Pass Generation',
      desc: 'Instant digital pass with entry QR code sent to the visitor via WhatsApp, SMS, and email prior to arrival.',
      icon: FileCheck
    },
    {
      title: 'Real-Time Employee Host Alerts',
      desc: 'Automatic host notifications via Slack, Microsoft Teams, SMS, or phone call the instant their guest arrives.',
      icon: Bell
    },
    {
      title: 'Facial Recognition & ID OCR Scan',
      desc: 'Capture visitor photo and auto-fill details from driver licenses, passports, or business cards using OCR.',
      icon: UserCheck
    },
    {
      title: 'Wireless Thermal Badge Printing',
      desc: 'Automatic wireless printing of guest badges with visitor photo, host name, entry time, and barcode.',
      icon: Printer
    },
    {
      title: 'Emergency Evacuation Roll Call',
      desc: 'Instant 1-tap emergency safety roll call listing every visitor and employee currently inside the facility.',
      icon: AlertTriangle
    },
    {
      title: 'Security Watchlist & Blacklist Alerts',
      desc: 'Instant security desk alerts if unauthorized or blacklisted personnel attempt entry into the premises.',
      icon: ShieldCheck
    },
    {
      title: 'NDAs & Digital Signature Capture',
      desc: 'On-screen NDA, NDA agreement, and safety compliance policy signature before granting building access.',
      icon: Lock
    },
    {
      title: 'Pre-Registration Meeting Invites',
      desc: 'Hosts pre-register guests through calendar integrations, sending pre-approved entry QR passes.',
      icon: Building
    },
    {
      title: 'Multi-Location Central Dashboard',
      desc: 'Manage visitor security, gate passes, and occupancy limits across global corporate offices and factories.',
      icon: Sliders
    },
    {
      title: 'VIP Guest Custom Greetings',
      desc: 'Custom welcome messages displayed on kiosk screens for executive clients, board members, and VIPs.',
      icon: Star
    },
    {
      title: 'SOC2 & OSHA Compliance Logs',
      desc: 'Audit-ready visitor logs stored with AES-256 encryption meeting SOC2, ISO27001, and OSHA regulations.',
      icon: CheckCircle2
    }
  ];

  // Tech Categories
  const techCategories = {
    backend: [
      { name: '.NET Core & C#', desc: 'High-throughput enterprise server backend managing gate pass credentials and access control controllers.' },
      { name: 'Node.js', desc: 'Asynchronous WebSockets server sending sub-second host alerts to Slack, Teams, and mobile apps.' },
      { name: 'Python', desc: 'AI facial recognition and OCR document scanning algorithms verifying visitor identities.' }
    ],
    frontend: [
      { name: 'Swift (iOS / iPad)', desc: 'Native iPad kiosk application delivering responsive touch entry and Bluetooth badge printing.' },
      { name: 'Kotlin (Android)', desc: 'Native Android tablet kiosk app with offline check-in caching and camera QR scanning.' },
      { name: 'React & Next.js', desc: 'Enterprise web dashboard for receptionists, security leads, and facility managers.' }
    ],
    database: [
      { name: 'PostgreSQL', desc: 'Encrypted relational database storing visitor logs, NDA signatures, and host directories.' },
      { name: 'Redis Cache', desc: 'In-memory cache managing real-time building occupancy counts and active gate passes.' }
    ],
    devops: [
      { name: 'AWS Cloud & Docker', desc: 'Secure AWS EC2 and containerized infrastructure guaranteeing 99.99% uptime.' },
      { name: 'CI/CD Pipelines', desc: 'Automated release pipelines ensuring zero-downtime security software updates.' }
    ],
    testing: [
      { name: 'Appium & Selenium', desc: 'Automated kiosk touch screen testing and web security audit suites.' }
    ],
    pm: [
      { name: 'Jira & Slack', desc: 'Agile project tracking and real-time team communication during implementation.' }
    ]
  };

  // Official FAQs
  const sapphireFaqs = [
    {
      q: '1. What is a Visitor Management System (VMS)?',
      a: 'A Visitor Management System is an enterprise software solution that automates guest registration, digital gate pass issuance, host notifications, badge printing, and facility security compliance.'
    },
    {
      q: '2. Can the system integrate with access control physical turnstiles?',
      a: 'Yes, we integrate our VMS with physical access control hardware including HID readers, RFID turnstiles, smart locks, and elevator controllers.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership and technical documentation upon project delivery.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict NDAs before project initiation to protect your enterprise data.'
    },
    {
      q: '5. How does the system handle emergency evacuations?',
      a: 'In case of emergency, safety marshals can access a live real-time roll call on mobile devices showing every visitor and staff member currently inside.'
    },
    {
      q: '6. What post-launch SLA support do you provide?',
      a: 'We offer 24/7 server health monitoring, security patches, hardware printer drivers update, and SLA maintenance.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Visitor Management System Development Company | Gate Pass System"
        description="Top Visitor Management System development company in USA. Build custom kiosk visitor check-in apps, QR gate passes, facial recognition, and host alerts."
        canonical="/services/visitor-management-system"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Visitor Management System Development Services in USA"
        subtitle="Rapidly enhancing corporate security, Custom Visitor Management System Development Services empower corporate offices, factories, and residential gates with self-service iPad kiosks, digital QR gate passes, facial recognition, and automated host alerts."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="visitor"
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
              <p className="text-xs text-slate-500 font-medium">Top VMS Software Developer</p>
            </div>
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified Security IT Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features-section" className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              ENTERPRISE VISITOR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Visitor Management System Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Streamline facility entry for visitors, contractors, and staff while maintaining 100% compliance and audit readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitorFeatures.map((item, idx) => {
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
      <SapphireTechStackGrid domainName="visitor management" richTechCategories={techCategories} />
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
              Visitor Management System FAQs
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
                <UserCheck className="w-3.5 h-3.5 text-cyan-300" />
                <span>SECURE YOUR FACILITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior Security Software Engineers
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our architects today to design your custom visitor management kiosk or gate pass solution.
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
                        <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief</label>
                      <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="Tell us about iPad kiosks, gate passes, host alerts..." className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none" />
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

export default VisitorManagementSystemService;
