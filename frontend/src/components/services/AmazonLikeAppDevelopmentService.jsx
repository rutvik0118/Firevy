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
  ShoppingBag,
  ShoppingCart,
  PackageCheck,
  Truck,
  CreditCard,
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
  Gift,
  Tag,
  Check,
  Shield,
  Layers
} from 'lucide-react';

export const AmazonLikeAppDevelopmentService = () => {
  const [activePanelTab, setActivePanelTab] = useState('buyer');
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: 'Dedicated Team',
    appType: 'E-Commerce Multi-Vendor Marketplace',
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

  // 12 Key E-Commerce Features matching Sapphire Solutions
  const ecommerceFeatures = [
    {
      title: 'Navigation Through Products',
      desc: 'To facilitate product navigation, an internal search bar is included with auto-suggestions, voice search, and instant filters.',
      icon: Search
    },
    {
      title: 'Onboarding Is A Breeze',
      desc: 'Assure a painless onboarding procedure to facilitate quick logins for customers via 1-tap social media accounts and phone OTPs.',
      icon: Smartphone
    },
    {
      title: 'Customer Testimonials & Ratings',
      desc: 'Customers may give verified product reviews, star ratings, and photo/video feedback directly within the mobile application.',
      icon: Star
    },
    {
      title: 'Comprehensive Customer Profiles',
      desc: 'Our e-commerce app covers all consumer features including saved shipping addresses, payment cards, and order histories.',
      icon: User
    },
    {
      title: 'Product Classifications & Taxonomy',
      desc: 'Multi-level product categories, flash sale banners, brand filters, and price range sorting to showcase large product catalogs.',
      icon: Tag
    },
    {
      title: 'Shopping Cart & Wishlist',
      desc: 'Allow consumers to add items to shopping carts that may be checked out instantly or saved for later reference.',
      icon: ShoppingCart
    },
    {
      title: 'Multiple Payment Gateways',
      desc: 'Numerous payment options enabling simple purchases through debit/credit cards, Apple Pay, Google Pay, Net Banking, and COD.',
      icon: CreditCard
    },
    {
      title: 'Native High-Performance Mobile App',
      desc: 'Native iOS & Android mobile applications extending the full hardware capabilities of smartphones for fluid 60 FPS scrolling.',
      icon: Shield
    },
    {
      title: 'Real-Time Admin Dashboard',
      desc: 'Using an interactive real-time dashboard, admins monitor sales revenue, vendor payouts, and store inventory.',
      icon: Sliders
    },
    {
      title: 'Staff & Personnel Management',
      desc: 'The administrator manages warehouse staff, customer support reps, and vendor access permissions effectively.',
      icon: Users
    },
    {
      title: 'Banner & Advertisement Manager',
      desc: 'Manage promotional banners, festive discount sales, and sponsored vendor product ads effectively from a single console.',
      icon: Gift
    },
    {
      title: 'Order & Shipment Tracking',
      desc: 'Real-time order status tracking with automated SMS/email alerts ensuring timely product delivery and customer satisfaction.',
      icon: Truck
    }
  ];

  // 3 Panel Features (Buyer Shopping App, Vendor Merchant Portal, Super Admin Dashboard)
  const panelFeatures = {
    buyer: [
      { title: 'AI Personalized Recommendations', desc: 'Predictive product suggestions based on user browsing history and purchase patterns.' },
      { title: '1-Click Buy Now & Fast Checkout', desc: 'Accelerated checkout saving payment tokens for frictionless 1-tap orders.' },
      { title: 'AR Product Try-On Visualizer', desc: 'Augmented reality visualizer allowing customers to preview products in 3D.' },
      { title: 'Wishlist & Cart Sync', desc: 'Cross-device instant cart synchronization across mobile apps and web portals.' },
      { title: 'Order History & Returns Engine', desc: 'Track shipment status, download tax invoices, and initiate 1-click return requests.' },
      { title: 'In-App Live Chat Support', desc: 'Instant customer service chat resolving order queries and shipping updates.' }
    ],
    vendor: [
      { title: 'Bulk Product Upload & Sync', desc: 'CSV/Excel bulk product import, variant management, and real-time stock sync.' },
      { title: 'Vendor Order Fulfillment', desc: 'Receive automated order dispatch notifications and print shipping airway bills.' },
      { title: 'Automated Payout Ledgers', desc: 'Transparent commission deductions, weekly bank payouts, and tax reports.' },
      { title: 'Storefront Customization', desc: 'Custom vendor brand storefront with custom banners, logo, and featured products.' },
      { title: 'Inventory Stock Alerts', desc: 'Low stock alerts notifying sellers before popular items run out of stock.' },
      { title: 'Promotional Discounts & Coupons', desc: 'Sellers create custom coupon codes, volume discounts, and bundle offers.' }
    ],
    admin: [
      { title: 'Multi-Vendor Commission Engine', desc: 'Set global or category-specific commission rates (e.g. 8-15%) per vendor.' },
      { title: 'Vendor Verification & Approval', desc: 'KYC background checks, business tax document verification, and store activation.' },
      { title: 'Banner & Flash Sale Manager', desc: 'Schedule homepage hero carousel banners, countdown timers, and deal of the day.' },
      { title: 'Anti-Fraud & Security Audit', desc: 'AI fraud detection monitoring suspicious bulk orders, card chargebacks, and spam reviews.' },
      { title: 'Global Multi-Currency & Tax', desc: 'Automated GST/VAT calculation, localized currencies, and multi-language support.' },
      { title: 'Comprehensive Sales Analytics', desc: 'Real-time sales graphs, top-selling categories, and customer acquisition metrics.' }
    ]
  };

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: 'Node.js & Express', desc: 'High-performance microservices backend powering real-time product search and cart checkout.' },
      { name: 'Python (Django)', desc: 'AI recommendation algorithms and machine learning data pipelines predicting user buying intent.' },
      { name: '.NET Core', desc: 'Enterprise server framework executing high-volume marketplace transactions and ERP integrations.' },
      { name: 'Java & Spring Boot', desc: 'Scalable backend language managing multi-vendor payout ledgers and order fulfillment engines.' },
      { name: 'PHP (Laravel)', desc: 'Robust server-side framework powering seller portals and catalog management.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile app frameworks delivering native 60 FPS smooth e-commerce shopping.' },
      { name: 'Kotlin (Android)', desc: 'Native Android application development providing seamless push notifications and local storage.' },
      { name: 'Swift (iOS)', desc: 'Native Apple iOS app execution providing hardware-accelerated Apple Pay and ARKit.' },
      { name: 'Next.js & React', desc: 'SEO-optimized SSR web storefront delivering sub-second page loads.' }
    ],
    database: [
      { name: 'PostgreSQL & MySQL', desc: 'Relational database managing transactional order ledgers, user accounts, and inventory.' },
      { name: 'MongoDB', desc: 'NoSQL document database storing complex product catalog attributes, variants, and reviews.' },
      { name: 'Elasticsearch', desc: 'Sub-second full-text search engine executing instant product filtering and auto-complete.' },
      { name: 'Redis Cache', desc: 'In-memory cache delivering flash-sale catalog caching and shopping session state.' }
    ],
    devops: [
      { name: 'AWS Cloud (EC2 & Lambda)', desc: 'Auto-scaling serverless infrastructure managing viral traffic surges during Black Friday sales.' },
      { name: 'AWS CloudFront CDN', desc: 'Global edge CDN delivering sub-second product image loading.' },
      { name: 'Docker & Kubernetes', desc: 'Containerized microservices auto-scaling compute capacity for high concurrency.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile automation testing cart checkout, payment gateways, and order tracking.' },
      { name: 'BrowserStack', desc: 'Real-device cloud matrix testing e-commerce UX performance across 500+ mobile devices.' },
      { name: 'Katalon Studio', desc: 'Automated API security and payment PCI-DSS compliance test suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking marketplace feature backlogs.' },
      { name: 'Slack', desc: 'Real-time client communication channel with senior e-commerce engineering leads.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX product catalog wireframe approvals.' }
    ]
  };

  // Official Sapphire E-Commerce FAQs
  const sapphireFaqs = [
    {
      q: '1. What is Amazon-like e-commerce app development?',
      a: 'Amazon-like app development involves building a multi-vendor e-commerce marketplace platform connecting multiple independent sellers with online shoppers. It includes features like product catalog management, AI recommendation engines, secure payment gateways, vendor payout ledgers, and order shipment tracking.'
    },
    {
      q: '2. How does the vendor commission model work in an Amazon clone app?',
      a: 'The platform administrator sets customized commission rates (e.g. 5% to 15%) per product category or vendor. When a buyer completes a order, the commission is automatically deducted before releasing payouts to the seller.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership, complete architectural blueprints, database schemas, and API documentation upon project delivery.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign a strict Non-Disclosure Agreement (NDA) before discussing your project to guarantee total confidentiality of your business model, catalog data, and unique app features.'
    },
    {
      q: '5. Can the app support B2B Wholesale and B2C Retail simultaneously?',
      a: 'Yes! Our custom e-commerce architecture can support dual B2B wholesale pricing tiers (bulk discounts, quote requests) alongside traditional B2C retail checkout.'
    },
    {
      q: '6. What post-launch SLA maintenance and support do you provide?',
      a: 'We offer continuous 24/7 server health monitoring, OS compatibility updates, performance tuning, new feature rollouts, and payment gateway updates.'
    },
    {
      q: '7. How long does it take to develop a custom Amazon-like e-commerce app?',
      a: 'We typically deliver a fully functional MVP within 10 to 12 weeks, and a complete multi-vendor global marketplace platform within 4 to 6 months.'
    },
    {
      q: '8. What payment gateways can be integrated?',
      a: 'We integrate Stripe, PayPal, Razorpay, Apple Pay, Google Pay, credit/debit cards, BNPL (Buy Now Pay Later), and Cash on Delivery (COD).'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="E-Commerce Mobile App Development Company | Amazon Like App Development"
        description="Top Amazon-like e-commerce app development company in USA. Build a custom multi-vendor marketplace app like Amazon with AI recommendations, seller portals, and fast checkout."
        canonical="/services/amazon-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="E-Commerce App Development Services in USA"
        subtitle="Rapidly transforming global retail, Custom Amazon-Like Multi-Vendor E-Commerce App Development Services empower marketplace owners and retail brands with AI predictive product recommendations, multi-vendor seller portals, and 1-click checkout."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="amazon"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Review & Ratings Bar */}
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
              <p className="text-xs text-slate-500 font-medium">Top E-Commerce Developer</p>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#005F96] flex items-center justify-center space-x-1">
                <span>200+ GOODFIRMS REVIEWS</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Verified Marketplace Partner</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Get Amazon-Like E-Commerce App Development Services (1:1 Sapphire Dual Phone Mockup Layout) */}
      <section id="features-section" className="py-20 bg-[#F0F8FA] border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get Amazon-Like E-Commerce App Development Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              We offer a comprehensive range of best e-commerce app development services to businesses of all types and sizes. Contact us now for mobile e-commerce app development services under budget.
            </p>
          </div>

          {/* 3-Column Layout: Left 3 Features + Center Dual "Clown Polska" E-Commerce Phone Mockup + Right 3 Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
            {/* Left 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {ecommerceFeatures.slice(0, 3).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Dual Phone Mockup (E-Commerce Storefront + Cart Checkout 1:1 Match) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              <div className="flex items-center -space-x-12">
                {/* Front Phone: Product Storefront Screen */}
                <div className="w-[200px] h-[410px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-2xl relative overflow-hidden text-left z-20">
                  <div className="bg-white w-full h-full rounded-[28px] p-3 flex flex-col justify-between text-slate-900 text-[10px]">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                        <span>9:41</span>
                        <span className="text-amber-600 font-black">AMAZON CLONE</span>
                      </div>
                      <div className="bg-slate-100 p-1.5 rounded-lg text-[8px] text-slate-400 flex items-center space-x-1">
                        <Search className="w-3 h-3 text-slate-400" />
                        <span>Search Amazon...</span>
                      </div>
                    </div>

                    <div className="my-2 space-y-1.5">
                      <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                        <div className="text-[8px] font-black text-amber-700 uppercase">PRIME DEAL 50% OFF</div>
                        <div className="font-extrabold text-slate-900 text-[10px] mt-0.5">Smart Watch Series 8</div>
                        <div className="text-[8px] text-slate-500 font-bold mt-0.5">⭐ 4.9 • 2-Day Shipping</div>
                        <div className="font-black text-slate-900 text-xs mt-1">$199.00 <span className="text-slate-400 line-through text-[9px] font-normal">$399.00</span></div>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <span className="font-bold text-slate-700 text-[9px]">Wireless Earbuds</span>
                        <span className="font-black text-slate-900 text-[10px]">$49.99</span>
                      </div>
                    </div>

                    <button className="w-full py-2 rounded-lg bg-amber-500 text-slate-950 font-black text-xs text-center shadow-md">
                      Add to Shopping Cart
                    </button>
                  </div>
                </div>

                {/* Back Phone: Cart Checkout & Track Order Screen */}
                <div className="w-[190px] h-[390px] rounded-[34px] bg-slate-950 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10">
                  <div className="bg-slate-900 w-full h-full rounded-[26px] p-3 flex flex-col justify-between text-white text-[9px]">
                    <div className="text-center space-y-1">
                      <span className="text-[9px] font-bold text-amber-400 uppercase">Order Shipment Tracker</span>
                      <div className="text-xs font-black text-white">Shipped • Out for Delivery</div>
                      <div className="text-[9px] text-emerald-400 font-bold">Arriving Tomorrow by 10 AM 🚚</div>
                    </div>

                    <div className="my-2 h-28 bg-slate-800 rounded-xl border border-slate-700 relative p-2 overflow-hidden flex flex-col justify-between">
                      <div className="text-[8px] text-slate-300 font-bold">Package Tracking ID</div>
                      <div className="font-mono text-cyan-300 text-[10px] font-bold">TBA-8492019482</div>
                      <div className="w-full bg-emerald-500/20 text-emerald-300 text-center font-bold text-[8px] py-1 rounded border border-emerald-500/30">
                        1-Click Easy Returns
                      </div>
                    </div>

                    <button className="w-full py-1.5 rounded-lg bg-[#005F96] text-white font-extrabold text-[10px] text-center shadow-sm">
                      View Order Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3 Feature Items */}
            <div className="lg:col-span-4 space-y-8">
              {ecommerceFeatures.slice(3, 6).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-xl bg-[#D6EEF8] text-[#005F96] shrink-0 border border-cyan-200/60 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Remaining 6 Features Grid Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-200/80">
            {ecommerceFeatures.slice(6).map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold mb-3 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                    <span>100% Custom Feature</span>
                    <span className="text-[#005F96] font-bold">Included</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Section 4: 3-in-1 Ecosystem Panels (Buyer App, Vendor Portal, Admin Dashboard) */}
      <section id="panels-section" className="py-20 bg-white border-b border-slate-200 text-left">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Multi-Vendor Marketplace Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Empower shoppers with intuitive mobile apps while providing merchants and admins with total control over global store operations.
            </p>

            {/* 3 Main Panel Pill Tabs */}
            <div className="flex justify-center space-x-4 pt-4 max-w-2xl mx-auto">
              <button
                onClick={() => setActivePanelTab('buyer')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'buyer'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Buyer Shopping App
              </button>
              <button
                onClick={() => setActivePanelTab('vendor')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'vendor'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Vendor Merchant Portal
              </button>
              <button
                onClick={() => setActivePanelTab('admin')}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-extrabold transition-all border ${
                  activePanelTab === 'admin'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-md'
                    : 'bg-white text-[#005F96] border-[#005F96]/40 hover:bg-slate-50'
                }`}
              >
                Super Admin Dashboard
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {panelFeatures[activePanelTab].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#005F96] transition-all space-y-3 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005F96] flex items-center justify-center font-bold text-sm mb-3 group-hover:bg-[#005F96] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#005F96] transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                  <span>100% White Label</span>
                  <span className="text-[#005F96] font-bold">Included</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories & Stat Cards (E-Commerce Category Match) */}
      <SuccessStoriesSection category="amazon" />

      {/* Our Premium Services 10-Card Section */}
      <PremiumServicesGrid />

      {/* Sapphire Success Matrix */}
      <SuccessMatrix />

      {/* Sapphire 6-Card Technology Stack Grid */}
      <SapphireTechStackGrid domainName="e-commerce" richTechCategories={techCategories} />

      {/* Process We Follow - Sapphire 8-Step Timeline */}
      <ProcessWeFollow
        title="Process We Follow"
        subtitle="Process-oriented execution from initial blueprinting to UAT, deployment, and ongoing SLA maintenance."
      />

      {/* Trusted By World's Leading Brands & Featured In Media */}
      <TrustedBrandsGrid />

      {/* Official Sapphire E-Commerce FAQs */}
      <section className="py-20 bg-white border-b border-slate-200 text-left">
        <Container className="max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#005F96]/10 text-[#005F96] uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Amazon Like App Development FAQs
            </h2>
            <p className="text-base text-slate-600">
              Clear answers regarding vendor commission models, payment gateways, NDAs, source code ownership, and 24/7 SLA maintenance.
            </p>
          </div>

          <div className="space-y-4">
            {sapphireFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-base text-slate-900 hover:text-[#005F96] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#005F96]' : ''
                    }`}
                  />
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

      {/* Free Proposal & Project Quote Form Section */}
      <section id="quote-form" className="py-20 bg-gradient-to-b from-[#005F96] via-[#004B77] to-[#003452] text-white text-left">
        <Container className="max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                <ShoppingBag className="w-3.5 h-3.5 text-cyan-300" />
                <span>BUILD YOUR MARKETPLACE PLATFORM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Get Access to Senior E-Commerce Architects
              </h2>

              <p className="text-base text-blue-100 leading-relaxed font-normal">
                Book a consultation with our e-commerce technology architects today to launch your Amazon-like multi-vendor marketplace app or retail store portal.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>100% Source Code Ownership & Signed NDA</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Automated Multi-Vendor Payout Ledgers</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Elasticsearch Sub-Second Product Search</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Inquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Sapphire Software Solutions. Our e-commerce tech leads will review your project brief and respond within 2 business hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-[#005F96] text-white font-bold text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Get A Free Project Quote</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="sarah@retailbrand.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Hiring Model</label>
                        <select
                          name="model"
                          value={formData.model}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                        >
                          <option value="Dedicated Team">Dedicated Team</option>
                          <option value="Fixed Price">Fixed Price Contract</option>
                          <option value="Time & Material">Time & Material</option>
                          <option value="Buckets Approach">Buckets Approach</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none bg-white"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Project Brief / Requirements</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about multi-vendor marketplaces, wholesale B2B pricing, mobile apps, or cart features..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#005F96] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
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

export default AmazonLikeAppDevelopmentService;
