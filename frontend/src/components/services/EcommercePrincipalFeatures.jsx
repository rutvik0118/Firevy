import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import {
  Search,
  UserCheck,
  Star,
  User,
  Layers,
  ShoppingCart,
  CreditCard,
  Smartphone,
  Sliders,
  Share2,
  BarChart2,
  Users,
  PackagePlus,
  Image as ImageIcon,
  Truck,
  History,
  Store,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export const EcommercePrincipalFeatures = () => {
  const [activeTab, setActiveTab] = useState('android');
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate internal scroll translation for phone screen (max 180px scroll)
  const phoneScrollOffset = Math.min(180, (scrollY % 600) * 0.4);

  // Android App Features
  const androidLeftFeatures = [
    {
      icon: Search,
      title: 'Navigation Through The Products',
      desc: 'To facilitate product navigation, an internal search bar is included'
    },
    {
      icon: UserCheck,
      title: 'Onboarding Is A Breeze',
      desc: 'Assure a painless onboarding procedure to facilitate quick logins for customers'
    },
    {
      icon: Star,
      title: 'Customer Testimonials And Ratings',
      desc: 'Customers may give product reviews and ratings within the app'
    },
    {
      icon: User,
      title: 'Customer Login',
      desc: 'Our comprehensive e-commerce application development service covers all aspects of consumer apps'
    },
    {
      icon: Layers,
      title: 'Product Classifications',
      desc: 'Product classification is consistent with assisting toy shops list different category of toys'
    }
  ];

  const androidRightFeatures = [
    {
      icon: ShoppingCart,
      title: 'Shopping Cart',
      desc: 'Allow consumers to add things to shopping carts that may be checked out instantly or later'
    },
    {
      icon: CreditCard,
      title: 'Payment',
      desc: 'Numerous payment alternatives enable simple purchases through debit cards, payment portals, and so forth'
    },
    {
      icon: Smartphone,
      title: 'Native Application',
      desc: 'Native applications that extend the capabilities of the respective platform'
    },
    {
      icon: Sliders,
      title: 'Configuration Of The Profile',
      desc: 'Simple profile customization ensures a simple and customized experience'
    },
    {
      icon: Share2,
      title: 'Login To social media',
      desc: 'A social media login function has been implemented to facilitate user logins'
    }
  ];

  // Admin Panel Features
  const adminLeftFeatures = [
    {
      icon: BarChart2,
      title: 'Dashboard In Real-Time',
      desc: 'Using a real-time, interactive dashboard, you can monitor and ensure the proper running of your e-commerce application'
    },
    {
      icon: Users,
      title: 'Personnel Management',
      desc: 'The administrator will be able to manage staff effectively with the help of this function'
    },
    {
      icon: PackagePlus,
      title: 'Enhancement Of Existing Products',
      desc: 'This function enables the administrator to add or delete products from the listing'
    },
    {
      icon: ImageIcon,
      title: 'Management Of Banners And Advertisements',
      desc: 'Manage which banners and advertisements will appear in the app effectively from a single location'
    },
    {
      icon: Layers,
      title: 'Management Of Products',
      desc: 'Native applications that extend the capabilities of the respective platform'
    }
  ];

  const adminRightFeatures = [
    {
      icon: Truck,
      title: 'Order Monitoring',
      desc: 'Order tracking may help assure timely product delivery and superior customer service'
    },
    {
      icon: History,
      title: 'History Of Orders',
      desc: 'The availability of order history may be beneficial for future reference by the administrator'
    },
    {
      icon: Store,
      title: 'Management Of Stores',
      desc: 'Product classification is consistent with assisting toy shops list different category of toys'
    },
    {
      icon: UserCheck,
      title: 'Customer Information',
      desc: 'Adding this functionality enables administrators to manage product listings or catalogs'
    },
    {
      icon: FileSpreadsheet,
      title: 'Reporting',
      desc: 'Reports and analytics to track performance on a timely basis'
    }
  ];

  const currentLeft = activeTab === 'android' ? androidLeftFeatures : adminLeftFeatures;
  const currentRight = activeTab === 'android' ? androidRightFeatures : adminRightFeatures;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 text-left font-sans">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-[900] text-slate-950 tracking-tight leading-tight font-sans">
            Principal Features of Mobile eCommerce App Development
          </h2>
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex justify-center items-center space-x-4 max-w-md mx-auto mb-16">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-3 px-6 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 border ${
              activeTab === 'android'
                ? 'bg-[#008BB4] text-white border-[#008BB4] shadow-md'
                : 'bg-white text-slate-700 border-sky-300 hover:bg-sky-50'
            }`}
          >
            Android App
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`flex-1 py-3 px-6 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 border ${
              activeTab === 'admin'
                ? 'bg-[#008BB4] text-white border-[#008BB4] shadow-md'
                : 'bg-white text-slate-700 border-sky-300 hover:bg-sky-50'
            }`}
          >
            Admin Panel
          </button>
        </div>

        {/* 3-Column Layout: Left Features, Center Mockup with Page Scroll Effect, Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          
          {/* Left Column (5 Features) */}
          <div className="lg:col-span-4 space-y-4">
            {currentLeft.map((feature, idx) => {
              const IconComp = feature.icon;
              const cardId = `left-${idx}`;
              const isSelected = activeCard === cardId;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(cardId)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(cardId)}
                  className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                    isSelected
                      ? 'bg-[#008BB4] text-white shadow-xl scale-[1.02]'
                      : 'bg-white border border-transparent hover:bg-[#008BB4] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-white/20 text-white border-white/40'
                        : 'bg-[#E0F2FE] text-[#008BB4] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                    }`}
                  >
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs mt-1.5 leading-relaxed transition-colors ${
                        isSelected ? 'text-sky-100' : 'text-slate-500 group-hover:text-sky-100'
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Smartphone / Laptop Display with Scroll Sync */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start flex justify-center items-center py-4 relative">
            
            {activeTab === 'android' ? (
              /* ANDROID APP TAB: Dual Smartphone Mockup with Vertical Page Scroll Sync */
              <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md min-h-[460px]">
                
                {/* Back Smartphone Screen (Product Listing Store Page with internal page scroll animation) */}
                <div className="absolute right-2 sm:right-6 top-4 w-[190px] sm:w-[210px] h-[380px] sm:h-[410px] rounded-[36px] bg-slate-950 p-2 border-4 border-slate-800 shadow-xl overflow-hidden z-10 opacity-90">
                  <div className="bg-slate-50 w-full h-full rounded-[28px] overflow-hidden relative border border-slate-200">
                    
                    {/* Inner Scrollable Screen Container (Moving on Page Scroll) */}
                    <div
                      className="w-full transition-transform duration-100 ease-out"
                      style={{ transform: `translateY(-${phoneScrollOffset}px)` }}
                    >
                      {/* Top Header */}
                      <div className="bg-sky-500 text-white p-2.5 text-[9px] font-bold flex justify-between items-center sticky top-0 z-20">
                        <span>Toys For Boys</span>
                        <span>🛒 2</span>
                      </div>

                      {/* Search */}
                      <div className="p-2 bg-white border-b border-slate-100">
                        <div className="bg-slate-100 rounded px-2 py-1 text-[8px] text-slate-400">
                          🔍 Search by products
                        </div>
                      </div>

                      {/* Product Feed Items */}
                      <div className="p-2 space-y-2 text-[8px]">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center text-lg">🧸</div>
                          <div>
                            <span className="font-bold block text-slate-800">Primary toy for kindergarten</span>
                            <span className="text-emerald-600 font-extrabold">$48.00</span>
                          </div>
                        </div>

                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center text-lg">🚂</div>
                          <div>
                            <span className="font-bold block text-slate-800">Electric High Speed Train</span>
                            <span className="text-emerald-600 font-extrabold">$62.50</span>
                          </div>
                        </div>

                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded bg-rose-100 flex items-center justify-center text-lg">🏎️</div>
                          <div>
                            <span className="font-bold block text-slate-800">Remote Controlled Racing Car</span>
                            <span className="text-emerald-600 font-extrabold">$35.00</span>
                          </div>
                        </div>

                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-lg">🎨</div>
                          <div>
                            <span className="font-bold block text-slate-800">Creative Art & Drawing Set</span>
                            <span className="text-emerald-600 font-extrabold">$24.99</span>
                          </div>
                        </div>

                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-2">
                          <div className="w-10 h-10 rounded bg-emerald-100 flex items-center justify-center text-lg">🧩</div>
                          <div>
                            <span className="font-bold block text-slate-800">3D Wooden Puzzle Box</span>
                            <span className="text-emerald-600 font-extrabold">$19.50</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Smartphone Screen (Clown Polska Splash / Home Brand Screen) */}
                <div className="absolute left-2 sm:left-4 top-0 w-[205px] sm:w-[225px] h-[410px] sm:h-[440px] rounded-[40px] bg-slate-950 p-2.5 border-4 border-slate-800 shadow-2xl overflow-hidden z-20">
                  <div className="bg-white w-full h-full rounded-[32px] overflow-hidden flex flex-col justify-between p-4 relative border border-slate-200 text-center">
                    
                    {/* Top Decorative Green Circle */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-emerald-400 opacity-90" />
                    
                    {/* Speaker Notch */}
                    <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto mb-6 z-10" />

                    {/* Clown Polska Logo */}
                    <div className="my-auto z-10 flex flex-col items-center">
                      <div className="flex space-x-1 mb-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                      </div>
                      <h4 className="text-base font-black text-slate-900 tracking-tight">CLOWN</h4>
                      <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">POLSKA</span>
                    </div>

                    {/* Bottom Yellow Accent Shape */}
                    <div className="w-full pt-6 z-10">
                      <div className="w-24 h-24 rounded-full bg-amber-400 -ml-10 -mb-10 opacity-90" />
                    </div>

                  </div>
                </div>

              </div>
            ) : (
              /* ADMIN PANEL TAB: Smartphone + Laptop Admin Panel Graphic */
              <div className="relative flex flex-col items-center justify-center w-full max-w-md min-h-[460px]">
                
                {/* Smartphone on Left Side */}
                <div className="absolute -left-2 sm:left-2 top-6 w-[160px] sm:w-[180px] h-[360px] sm:h-[390px] rounded-[36px] bg-slate-950 p-2 border-4 border-slate-800 shadow-2xl overflow-hidden z-20">
                  <div className="bg-white w-full h-full rounded-[28px] overflow-hidden flex flex-col justify-between p-4 relative text-center">
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-emerald-400 opacity-90" />
                    <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto mb-4 z-10" />
                    <div className="my-auto z-10 flex flex-col items-center">
                      <div className="flex space-x-1 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                      <h4 className="text-sm font-black text-slate-900 tracking-tight">CLOWN</h4>
                      <span className="text-[8px] font-bold text-slate-400 tracking-widest uppercase">POLSKA</span>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-amber-400 -ml-8 -mb-8 opacity-90" />
                  </div>
                </div>

                {/* Laptop Admin Dashboard View on Right Side */}
                <div className="relative ml-16 sm:ml-20 w-[240px] sm:w-[280px] bg-slate-800 p-2 rounded-t-xl shadow-2xl z-10 border border-slate-700">
                  <div className="bg-slate-900 rounded-lg p-2 overflow-hidden border border-slate-800 text-[8px] text-white">
                    
                    {/* Admin Header */}
                    <div className="bg-sky-500 px-2 py-1 rounded flex justify-between items-center mb-2 font-bold">
                      <span>Admin Dashboard</span>
                      <span className="text-[7px] bg-white/20 px-1.5 py-0.5 rounded">Clown Polska</span>
                    </div>

                    {/* Real-time Metric Cards */}
                    <div className="grid grid-cols-3 gap-1.5 mb-2">
                      <div className="bg-sky-600/40 p-1.5 rounded border border-sky-400/30">
                        <span className="text-[6px] block opacity-80">Total Sales</span>
                        <span className="font-extrabold text-[9px] text-sky-200">$12,450</span>
                      </div>
                      <div className="bg-emerald-600/40 p-1.5 rounded border border-emerald-400/30">
                        <span className="text-[6px] block opacity-80">Orders</span>
                        <span className="font-extrabold text-[9px] text-emerald-200">1,280</span>
                      </div>
                      <div className="bg-purple-600/40 p-1.5 rounded border border-purple-400/30">
                        <span className="text-[6px] block opacity-80">Users</span>
                        <span className="font-extrabold text-[9px] text-purple-200">3,490</span>
                      </div>
                    </div>

                    {/* Analytics Chart & Donut Graph Mockup */}
                    <div className="bg-slate-800 p-2 rounded border border-slate-700 flex items-center justify-between">
                      <div className="space-y-1 flex-1">
                        <span className="text-[7px] font-bold text-sky-300 block">Revenue Performance</span>
                        <div className="h-10 flex items-end space-x-1 pt-1">
                          <div className="w-2 bg-sky-400 h-4 rounded-t" />
                          <div className="w-2 bg-sky-400 h-6 rounded-t" />
                          <div className="w-2 bg-sky-400 h-8 rounded-t" />
                          <div className="w-2 bg-sky-400 h-5 rounded-t" />
                          <div className="w-2 bg-sky-400 h-9 rounded-t" />
                          <div className="w-2 bg-sky-400 h-7 rounded-t" />
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full border-4 border-emerald-400 border-t-sky-400 border-r-amber-400 shrink-0 ml-2" />
                    </div>

                  </div>

                  {/* Laptop Base Keyboard Overlay */}
                  <div className="w-[280px] sm:w-[320px] -ml-5 sm:-ml-6 h-3 bg-slate-700 rounded-b-xl border-t border-slate-600 shadow-md" />
                </div>

              </div>
            )}

          </div>

          {/* Right Column (5 Features) */}
          <div className="lg:col-span-4 space-y-4">
            {currentRight.map((feature, idx) => {
              const IconComp = feature.icon;
              const cardId = `right-${idx}`;
              const isSelected = activeCard === cardId;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(cardId)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(cardId)}
                  className={`p-4 rounded-2xl transition-all duration-300 flex items-start space-x-3.5 cursor-pointer group ${
                    isSelected
                      ? 'bg-[#008BB4] text-white shadow-xl scale-[1.02]'
                      : 'bg-white border border-transparent hover:bg-[#008BB4] hover:text-white hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-white/20 text-white border-white/40'
                        : 'bg-[#E0F2FE] text-[#008BB4] border-sky-200 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40'
                    }`}
                  >
                    <IconComp className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm sm:text-base font-bold leading-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-900 group-hover:text-white'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-xs mt-1.5 leading-relaxed transition-colors ${
                        isSelected ? 'text-sky-100' : 'text-slate-500 group-hover:text-sky-100'
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default EcommercePrincipalFeatures;

