import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../common/SEO';
import Container from '../common/Container';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import SapphireLightHeroBanner from '../common/SapphireLightHeroBanner';
import SectorsThrivingSection from './SectorsThrivingSection';
import SuccessStories from './SuccessStories';
import SuccessMatrixGrid from '../home/SuccessMatrixGrid';
import InnovativeVideoSlider from '../common/InnovativeVideoSlider';
import SapphireFaqSection from '../common/SapphireFaqSection';
import ClientStoryVideoSlider from '../common/ClientStoryVideoSlider';
import TransformativeImpactSection from './TransformativeImpactSection';
import ClientReviewsDarkSection from '../home/ClientReviewsDarkSection';
import HealthcareChallengeCtaBanner from '../common/HealthcareChallengeCtaBanner';
import NewsletterSubscribeBanner from '../common/NewsletterSubscribeBanner';
import {
  Utensils,
  ShoppingBag,
  Clock,
  MapPin,
  Navigation,
  ShieldCheck,
  CreditCard,
  User,
  Users,
  Building2,
  PhoneCall,
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
  Bike,
  Check,
  Search,
  ClipboardList,
  Calendar,
  Tag,
  Bell,
  Truck,
  Megaphone,
  Building,
  Layers
} from 'lucide-react';

// Mobile App Development Services Expertise List (Matching Sapphire Screenshot 1:1)
const mobileAppExpertiseList = [
  {
    title: 'React Native Apps',
    desc: 'With extensive experience in developing first-rate native apps, our React Native app development team will assist you in changing the face of your business.',
    link: '/services/react-native-app-development'
  },
  {
    title: 'Progressive Web Apps',
    desc: 'Our PWAs make it simple to connect and install them, and they give your business solutions an engaging app-like feel.',
    link: '/services/pwa-development'
  },
  {
    title: 'Android App Development',
    desc: 'Our android applications are well-known for their visually appealing User Interface (UI/UX), quick loading times, and consistent performance.',
    link: '/services/android-app-development'
  },
  {
    title: 'iPhone App Development',
    desc: 'Our iOS apps are all about a fresh concept with a straightforward GUI, and our resourceful iPhone application development team is the right option for you.',
    link: '/services/ios-app-development'
  },
  {
    title: 'Flutter App Development',
    desc: 'Our Flutter app development is best in the business to save your money, time and bring your ideas to life with visually stunning designs.',
    link: '/services/flutter-app-development'
  },
  {
    title: 'Cross Platform Apps',
    desc: 'Build versatile applications that run seamlessly across multiple OS platforms while sharing core business logic.',
  }
];

// Zomato Food Delivery App FAQs (Matching Sapphire Screenshot 1 & 2)
const zomatoAppFaqList = [
  {
    id: 1,
    question: '1. How to make an app like Zomato?',
    answer: 'To build an app like Zomato with Sapphire, use its full-stack Swift capabilities to create seamless iOS interfaces and connect to a scalable backend. Integrate features like restaurant listings, geolocation, and real-time updates with Swift macros and Vapor server support.'
  },
  {
    id: 2,
    question: '2. In light of the present business state, do you think it would be wise to build an app for food delivery?',
    answer: 'Yes! On-demand food delivery continues to grow rapidly. With expanding smartphone penetration, cloud kitchens, and daily meal subscription models, launching a feature-rich food delivery platform offers high revenue potential through commissions, delivery fees, and sponsored restaurant listings.'
  },
  {
    id: 3,
    question: '3. Can you advise me on the most up-to-date features my food delivery app should incorporate?',
    answer: 'Essential modern features include real-time live GPS driver tracking, AI-driven restaurant and meal recommendations, multi-tier payment gateway integration, instant push notifications, digital food customization, and automated order dispatch engines.'
  },
  {
    id: 4,
    question: '4. Why to hire a on demand app development company?',
    answer: 'Hiring a specialized on-demand app development company ensures expert architectural design, scalable cloud infrastructure, 100% source code ownership, pre-built domain modules, and rigorous quality assurance testing for seamless launch.'
  },
  {
    id: 5,
    question: '5. What does it take to build a delivery app?',
    answer: 'Building a food delivery app requires a multi-tier ecosystem: a User Mobile App for ordering, a Restaurant Partner Portal for menu & order management, a Driver App for live GPS navigation, and a Master Admin Dashboard for commission & analytics control.'
  },
  {
    id: 6,
    question: '6. What makes Sapphire Software Solutions a reliable partner for building a food delivery app like Zomato?',
    answer: 'With 23+ years of enterprise mobility experience, 2800+ satisfied global clients, end-to-end custom development, dedicated agile teams, and 4 months free post-launch support, Sapphire delivers robust, scalable food apps tailored to your business goals.'
  }
];

export const ZomatoLikeAppDevelopmentService = () => {
  const [activePanelTab, setActivePanelTab] = useState('userApp');
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [expertActiveCategory, setExpertActiveCategory] = useState('Trending');
  const [expertTabs, setExpertTabs] = useState({});
  const [expertCarouselIndex, setExpertCarouselIndex] = useState(0);
  const [mobileExpertiseIndex, setMobileExpertiseIndex] = useState(0);
  const [isMobileExpertiseHovered, setIsMobileExpertiseHovered] = useState(false);
  const [foodZillaVideoActive, setFoodZillaVideoActive] = useState(false);
  const [quoteFormState, setQuoteFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  // Autoscroll for Mobile App Development Services Expertise (Section 11)
  useEffect(() => {
    if (isMobileExpertiseHovered) return;
    const interval = setInterval(() => {
      setMobileExpertiseIndex((prev) => (prev >= mobileAppExpertiseList.length - 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobileExpertiseHovered, mobileAppExpertiseList.length]);

  // 3 Panel Features matching Sapphire 1:1 Reference (User App, Restaurant Owners, Admin)
  const panelFeatures = {
    userApp: [
      {
        title: 'Search',
        desc: 'Give users of your app the ability to search for various restaurants, cafés, pubs, and bars based on their location and the types of food they serve.',
        Icon: Search
      },
      {
        title: 'Order',
        desc: 'Users can place an order for a selection of meals and food with just a few simple touches on the screen, thanks to a feature that makes ordering easy.',
        Icon: ClipboardList
      },
      {
        title: 'Monitoring Of The Driver In Real Time',
        desc: 'Your users will have an easier time following delivery driver and being aware of their real-time whereabouts if you provide them with a tool that allows for real-time tracking.',
        Icon: Clock
      },
      {
        title: 'The Integration Of Payment Gateways',
        desc: "Users can pay with their credit or debit cards if you integrate your app with a payment gateway like Braintree or Stripe, as Grubhub and Uber's Eats have done.",
        Icon: CreditCard
      },
      {
        title: 'Ratings And Reviews',
        desc: "Give consumers the ability to rate the restaurant, the food, and the delivery driver's service and express their opinions about these aspects.",
        Icon: Star
      },
      {
        title: 'Real-Time Availability',
        desc: 'Make it possible for users of your app to get up-to-the-minute information on the availability of tables at various restaurants and to book reservations with just a few clicks of the mouse.',
        Icon: Calendar
      }
    ],
    restaurant: [
      {
        title: 'Profile Creation',
        desc: "When creating a profile, proprietors can include information such as their restaurant's location, an exhaustive menu, prices, delivery information, and contact information.",
        Icon: User
      },
      {
        title: 'Order Management',
        desc: 'Make it possible for owners to handle all orders in a single location, including those that are now being processed, have been sent out, are being picked up, etc.',
        Icon: ShoppingBag
      },
      {
        title: 'Menu Management',
        desc: "The restaurant owners can manage a comprehensive menu for their establishment by adding to it and amending the list, pricing, products, today's special dish, and minimum order quantity.",
        Icon: Utensils
      },
      {
        title: 'Deals And Promotions Administration',
        desc: 'Restaurant companies can design and add new discount deals and offers, which will reward their consumers with the ability to get perks while buying food.',
        Icon: Tag
      },
      {
        title: 'Monitoring Of The Driver In Real Time',
        desc: "The delivery driver's real-time whereabouts may be tracked and made available to the restaurant owner. Additionally, owners can view the entire delivery time and the route the driver uses to deliver the food.",
        Icon: Clock
      },
      {
        title: 'Push Notifications',
        desc: 'An alert or message will advise the restaurant proprietors about the new order, the status of any orders that have been received or dispatched, any online payments that have been received.',
        Icon: Bell
      }
    ],
    admin: [
      {
        title: 'Delivery Charges',
        desc: 'A restaurant with no delivery staff may find using an app like this helpful. The timely delivery of food may be taken care of for a charge by an app that delivers food.',
        Icon: Truck
      },
      {
        title: 'Commission From Restaurants And Eateries',
        desc: 'The restaurants and the online food delivery applications may agree on the commission percentage that will be charged based on the order quantity.',
        Icon: Building2
      },
      {
        title: 'Peak Hours',
        desc: 'You may create more cash by using the method of monetization known as charging premium prices during peak hours.',
        Icon: Clock
      },
      {
        title: 'Advertising',
        desc: 'Putting certain restaurants at the top of the search results in exchange for an additional payment might help you create more cash for your business.',
        Icon: Megaphone
      },
      {
        title: 'Managing Restaurants',
        desc: 'As an administrator, you can manage all restaurants by adding, updating, and deleting establishments from the list of restaurants and cafés.',
        Icon: Building
      },
      {
        title: 'Management Of Categories',
        desc: 'It is essential to properly manage restaurant categories according to the kind of food served, specific price information, delivery alternatives and offers to achieve optimal business results.',
        Icon: Layers
      }
    ]
  };

  // Cutting Edge Tech Cards (Matching Screenshot 1 Sapphire 1:1)
  const cuttingEdgeTechList = [
    {
      title: 'Machine Learning Development Service',
      desc: 'From custom AI applications to enterprise-scale automation, our developers leverage the latest machine learning Development Service and deep learning technologies to solve complex business challenges.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <circle cx="22" cy="12" r="5" />
          <circle cx="12" cy="30" r="5" />
          <circle cx="32" cy="30" r="5" />
          <path d="M19 16 L14 26 M25 16 L30 26 M17 30 L27 30" />
        </svg>
      )
    },
    {
      title: 'Augmented Reality Development Service',
      desc: 'Engage your audience with Augmented Reality Development Services overlay digital content into real world, creating interactive experiences that boost engagement and learning enhancing customer engagement.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <path d="M12 8 L22 3 L32 8 L32 20 L22 25 L12 20 Z" />
          <path d="M22 3 L22 25 M12 8 L22 13 L32 8" />
          <ellipse cx="22" cy="33" rx="14" ry="5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: 'Low-Code No-Code Development Service',
      desc: 'Accelerate app development with Low-Code No-Code Development Services a platform that empowers businesses to create scalable, robust applications quickly without extensive coding.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <rect x="6" y="8" width="32" height="28" rx="4" />
          <line x1="6" y1="16" x2="38" y2="16" />
          <path d="M14 24 L10 28 L14 32 M22 24 L26 28 L22 32 M30 24 L34 28 L30 32" />
        </svg>
      )
    },
    {
      title: 'Blockchain Development Service',
      desc: 'We provide blockchain development services that will improve your company\'s security and transparency while giving you access to a variety of decentralized alternatives.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <rect x="24" y="8" width="12" height="12" rx="2" />
          <rect x="16" y="24" width="12" height="12" rx="2" />
          <line x1="20" y1="14" x2="24" y2="14" />
          <line x1="14" y1="20" x2="18" y2="24" />
          <line x1="30" y1="20" x2="26" y2="24" />
        </svg>
      )
    },
    {
      title: 'IoT Development Service',
      desc: 'Discover personalized IoT development services that enable intelligent data analytics and remote device administration, tailored to your business needs.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <rect x="14" y="16" width="16" height="16" rx="3" />
          <circle cx="22" cy="24" r="3" />
          <path d="M22 6 A14 14 0 0 1 36 20 M22 10 A10 10 0 0 1 32 20 M22 2 M6 20 A16 16 0 0 1 22 4" />
        </svg>
      )
    },
    {
      title: 'Cloud Computing Service',
      desc: 'We use the newest developments in cloud computing, such as creating hybrid multi-cloud solutions, transferring enterprise data to the cloud, and developing next-generation apps.',
      icon: (
        <svg viewBox="0 0 44 44" className="w-11 h-11 text-[#0084D1] fill-none stroke-current stroke-[1.8]">
          <path d="M12 28 C8 28 5 25 5 21 C5 17.5 8 14.5 11.5 14.5 C12.5 10 16.5 7 21.5 7 C27.5 7 32 11.5 32.5 17 C36 17 39 20 39 24 C39 28 36 31 32 31 L12 31 Z" />
        </svg>
      )
    }
  ];

  // Sapphire Comprehensive Suite Cards (Matching Screenshot 4 1:1)
  const suiteCards = [
    {
      title: 'Mobile App UI/UX Design',
      desc: 'By considering market trends and creating best practices that provide an enhanced user experience, we can help you create a unique, sophisticated, and user-friendly mobile app user interface.'
    },
    {
      title: 'MVP Development',
      desc: 'By creating an MVP with the necessary functionality, we increase your trust in the app idea. This enables you to swiftly release a test app onto the market and attract early users before moving on to complete app development.'
    },
    {
      title: 'Custom App Development',
      desc: 'Whether you\'re developing a mobile app for a business or a community, we can help you realize your unique idea by incorporating cutting-edge features that will make it stand out from the crowd.'
    },
    {
      title: 'Startup App Development',
      desc: 'Our world-class app development solutions will help your startup take off by helping startups get the best app solution possible with the use of leading app development frameworks.'
    },
    {
      title: 'Enterprise App Development',
      desc: 'Enhance your business operations through mobility by integrating third-party integrations and industry-leading technologies into your mobile app solutions to increase revenue and business operations.'
    },
    {
      title: 'Embedded IoT App Development',
      desc: 'To control and fully exploit your IoT-enabled environment, get a highly customized embedded software solution built with cloud and AI/ML technology.'
    }
  ];

  // Rich Technology Categories for Tech Stack Grid
  const techCategories = {
    backend: [
      { name: '.NET Core', desc: 'Enterprise microservices engine processing thousands of concurrent order transactions and payments.' },
      { name: 'Node.js', desc: 'Asynchronous event-driven runtime powering real-time WebSockets driver GPS tracking.' },
      { name: 'Java & Spring Boot', desc: 'Scalable backend handling automated order dispatching algorithms and kitchen workflows.' },
      { name: 'PHP (Laravel)', desc: 'Robust server framework powering multi-restaurant admin portals and billing modules.' },
      { name: 'Python (Django)', desc: 'AI/ML algorithms predicting food preparation times and personalized restaurant recommendations.' }
    ],
    frontend: [
      { name: 'React Native & Flutter', desc: 'Cross-platform mobile frameworks delivering native 60 FPS smooth ordering experiences.' },
      { name: 'Kotlin (Android)', desc: 'Native Android app execution ensuring smooth Google Maps SDK rendering and background GPS.' },
      { name: 'Swift (iOS)', desc: 'Native iOS application development providing hardware-accelerated Apple Maps & Pay.' },
      { name: 'RxJava & RxKotlin', desc: 'Reactive extension libraries managing smooth async location streams during live delivery.' }
    ],
    database: [
      { name: 'PostgreSQL & PostGIS', desc: 'Geospatial database storing restaurant locations, delivery zones, and polygon queries.' },
      { name: 'Firebase', desc: 'Real-time database and push notification service for instant order acceptance triggers.' },
      { name: 'Redis Cache', desc: 'In-memory cache delivering instant restaurant menu loading and trending dishes.' },
      { name: 'MongoDB', desc: 'NoSQL document database storing complex food menus, customized options, and reviews.' }
    ],
    devops: [
      { name: 'AWS Cloud', desc: 'Auto-scaling AWS EC2, Elastic Load Balancers, and S3 media storage for food images.' },
      { name: 'CI/CD Pipelines', desc: 'Automated release pipelines guaranteeing zero downtime during peak lunch & dinner spikes.' },
      { name: 'Docker & Kubernetes', desc: 'Containerized orchestration managing high-traffic food ordering surges.' }
    ],
    testing: [
      { name: 'Appium', desc: 'Cross-platform mobile test automation verifying customer, driver, and restaurant workflows.' },
      { name: 'BrowserStack', desc: 'Real-device cloud matrix testing live GPS performance across 500+ mobile devices.' },
      { name: 'Katalon Studio', desc: 'Automated API and payment gateway security test suite.' }
    ],
    pm: [
      { name: 'Jira', desc: 'Agile sprint management platform tracking food delivery feature backlogs.' },
      { name: 'Slack', desc: 'Real-time client communication channel with senior mobility & food tech engineers.' },
      { name: 'Microsoft Teams', desc: 'Weekly sprint demo reviews and architectural video check-ins.' },
      { name: 'Trello', desc: 'Visual Kanban boards for UI/UX restaurant menu wireframe approvals.' }
    ]
  };

  // Official Sapphire Zomato Food Delivery FAQs
  const sapphireFaqs = [
    {
      q: '1. What is Zomato-like food delivery app development?',
      a: 'Food delivery app development like Zomato builds a multi-sided ecosystem connecting hungry customers, local restaurants/cloud kitchens, and delivery partners under one platform. It includes live GPS order tracking, dish customization, automated dispatching, and multi-channel monetization.'
    },
    {
      q: '2. How does the revenue model work for a Zomato clone app?',
      a: 'The platform generates revenue through restaurant commission fees (e.g. 15-25% per order), delivery charges paid by customers, featured restaurant advertising placements, and monthly subscription programs like free delivery passes.'
    },
    {
      q: '3. Do you provide complete source code and technical documentation?',
      a: 'Yes, we provide 100% source code ownership, complete architectural blueprints, API documentation, and database schemas upon project delivery.'
    },
    {
      q: '4. Do you sign Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, we sign strict Non-Disclosure Agreements (NDAs) before discussing any project details to ensure full confidentiality of your business concept and customer data.'
    },
    {
      q: '5. Can your food delivery solution support Cloud Kitchens & Tiffin Services?',
      a: 'Absolutely! Our solutions are custom-engineered to handle single-brand cloud kitchens, multi-brand ghost kitchens, scheduled tiffin meal boxes, and traditional restaurant aggregators.'
    },
    {
      q: '6. What post-launch maintenance and SLA support do you offer?',
      a: 'We provide 24/7 server health monitoring, OS compatibility updates, performance tuning, new feature rollouts, and third-party API update maintenance.'
    },
    {
      q: '7. How long does it take to build a custom food delivery app like Zomato?',
      a: 'We typically deliver a fully functional MVP within 10 to 12 weeks, and a complete multi-city enterprise food delivery solution within 4 to 6 months.'
    },
    {
      q: '8. What payment gateways can be integrated?',
      a: 'We integrate Stripe, PayPal, Razorpay, Apple Pay, Google Pay, credit/debit cards, digital wallets, and Cash on Delivery (COD).'
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      <SEO
        title="Food Delivery App Development Company | Zomato Like App Development"
        description="Leading Zomato-like food delivery app development company in USA. Build custom food delivery apps, Swiggy clones, cloud kitchen portals, and live GPS order dispatch engines."
        canonical="/services/zomato-like-app-development"
      />

      {/* Sapphire Light Hero Banner */}
      <SapphireLightHeroBanner
        title="Food Delivery App Development Company"
        subtitle="The food industry is booming like never before; new restaurant & food delivery apps are launching daily, and consumers are discovering easier and more accessible methods to meet their hunger needs with food delivery app development like Zomato. Because of this, there is a greater need for restaurants to avail themselves of custom food delivery app development services. It is about time that you start capitalizing on the best food application you need with on-demand food delivery app developers who specialize in creating next-gen apps. Many businesses are now opting for a restaurant delivery app like Zomato or a multi-restaurant delivery app development solution to quickly enter the market and meet growing consumer demand efficiently."
        ctaText="Discuss Your Project"
        ctaLink="#quote-form"
        serviceCategory="zomato"
      />

      {/* Brand Logo Marquee Right Below Hero Banner */}
      <BrandLogoMarquee />

      {/* Section 3: Get Zomato Like App Development Services From Us */}
      <section id="panels-section" className="py-20 bg-[#F4F8FA] border-b border-slate-200 text-left font-sans">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
            <h2
              className="text-slate-900 tracking-tight"
              style={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}
            >
              Get Zomato Like App Development Services From Us
            </h2>
            <p
              className="text-slate-600 font-sans"
              style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
            >
              Customers, restaurant owners, and delivery drivers can all benefit from Zomato-like food delivery app development company solutions. The advantages extend to all three parties, ensuring a win-win situation. Together, these three will help increase your company's reach and bring it to the list of top food apps with <span className="text-[#005F96] font-semibold hover:underline cursor-pointer">Uber like app development service</span>. With food delivery apps like Postmates & DoorDash, you may expand your business's scope and cater to diverse client needs with professional on-demand food delivery app developers.
            </p>
            <p
              className="text-slate-600 font-sans"
              style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
            >
              Before you start making one, you need to concentrate on a few crucial things, including the amount of time and money it will take to create the <span className="text-[#005F96] font-semibold hover:underline cursor-pointer">food delivery application</span>, and cost to develop Zomato-like app. To ensure the best outcome, it's wise to hire experts from the best company to develop an app similar to Zomato. Our skilled developers provide insights into app planning, designing, development, and scaling, ensuring your multi-restaurant delivery app development journey is seamless and profitable.
            </p>

            {/* 3 Main Tab Buttons matching Sapphire Reference 1:1 (Full Width Grid Alignment) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-5xl mx-auto">
              <button
                onClick={() => setActivePanelTab('userApp')}
                className={`w-full py-3.5 px-6 rounded-md text-base sm:text-lg font-extrabold text-center transition-all border-2 ${activePanelTab === 'userApp'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-sm'
                    : 'bg-white text-[#005F96] border-[#005F96] hover:bg-slate-50'
                  }`}
              >
                User App
              </button>
              <button
                onClick={() => setActivePanelTab('restaurant')}
                className={`w-full py-3.5 px-6 rounded-md text-base sm:text-lg font-extrabold text-center transition-all border-2 ${activePanelTab === 'restaurant'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-sm'
                    : 'bg-white text-[#005F96] border-[#005F96] hover:bg-slate-50'
                  }`}
              >
                Restaurant Owners
              </button>
              <button
                onClick={() => setActivePanelTab('admin')}
                className={`w-full py-3.5 px-6 rounded-md text-base sm:text-lg font-extrabold text-center transition-all border-2 ${activePanelTab === 'admin'
                    ? 'bg-[#005F96] text-white border-[#005F96] shadow-sm'
                    : 'bg-white text-[#005F96] border-[#005F96] hover:bg-slate-50'
                  }`}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Dual Phone Layout + Left 3 Cards + Right 3 Cards (1:1 Sapphire Match) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto pt-6">
            {/* Left 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-4">
              {panelFeatures[activePanelTab]?.slice(0, 3).map((item, idx) => {
                const ItemIcon = item.Icon || Smartphone;
                return (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl transition-all duration-300 hover:bg-[#005F96] hover:shadow-xl cursor-pointer text-left"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3.5 rounded-xl bg-[#E5F2F9] text-[#005F96] group-hover:bg-white group-hover:text-[#005F96] shrink-0 border border-cyan-100/60 shadow-xs transition-colors duration-300">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className="text-slate-900 group-hover:text-white mb-1 font-sans transition-colors duration-300"
                          style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-slate-600 group-hover:text-white font-sans font-normal transition-colors duration-300"
                          style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Graphic matching active tab (User App / Restaurant / Admin) */}
            <div className="lg:col-span-4 flex items-center justify-center relative py-4">
              {activePanelTab === 'admin' ? (
                /* Admin Tab Graphic: Web Portal Laptop + Smartphone (1:1 Sapphire Reference) */
                <div className="relative w-full max-w-[380px] flex items-center justify-center min-h-[460px]">
                  {/* Laptop Admin Portal Frame */}
                  <div className="w-[310px] sm:w-[340px] h-[220px] sm:h-[240px] rounded-xl bg-slate-900 border-4 border-slate-700 p-1.5 shadow-2xl relative overflow-hidden text-left bg-white z-10">
                    <div className="bg-[#FF5722] text-white p-1.5 rounded text-[8.5px] flex justify-between items-center font-bold">
                      <span className="flex items-center space-x-1">
                        <span>🍕</span>
                        <span>EasyEat Admin Portal</span>
                      </span>
                      <span>Platform Control</span>
                    </div>
                    <div className="my-2 p-2 bg-slate-50 rounded-lg border text-[8px] space-y-1.5">
                      <div className="flex justify-between font-extrabold text-slate-800">
                        <span>Managing Restaurants</span>
                        <span className="text-[#FF5722]">142 Listed</span>
                      </div>
                      <div className="flex justify-between text-[7px] text-slate-600">
                        <span>Commission From Eateries</span>
                        <span className="font-bold text-emerald-600">18.5% Avg</span>
                      </div>
                      <div className="flex justify-between text-[7px] text-slate-600">
                        <span>Delivery Charges</span>
                        <span className="font-bold text-slate-800">Dynamic Surge</span>
                      </div>
                    </div>
                    <div className="p-1.5 bg-orange-50 rounded-md border border-orange-200 text-[7.5px] text-[#FF5722] font-bold text-center">
                      Peak Hours Premium Pricing Active
                    </div>
                  </div>

                  {/* Overlapping Phone */}
                  <div className="absolute -bottom-4 -right-2 w-[165px] sm:w-[185px] h-[330px] sm:h-[360px] rounded-[32px] bg-slate-950 border-4 border-slate-800 p-1.5 shadow-2xl z-20 bg-white">
                    <div className="bg-[#005F96] text-white p-2 rounded-t-[24px] text-[8px] font-bold text-center">
                      Admin Mobile App
                    </div>
                    <div className="p-2 text-[7.5px] space-y-1 text-slate-700 font-sans">
                      <div className="p-1.5 border-b flex justify-between font-bold"><span>Managing Restaurants</span><span>›</span></div>
                      <div className="p-1.5 border-b flex justify-between font-bold"><span>Management Of Categories</span><span>›</span></div>
                      <div className="p-1.5 border-b flex justify-between font-bold"><span>Advertising & Banners</span><span>›</span></div>
                      <div className="p-1.5 border-b flex justify-between font-bold"><span>Delivery Charges</span><span>›</span></div>
                    </div>
                  </div>
                </div>
              ) : activePanelTab === 'restaurant' ? (
                /* Restaurant Tab Graphic: EasyEat Special Dish Screen + Profile Settings Screen (1:1 Sapphire Match) */
                <div className="flex items-center -space-x-10 sm:-space-x-12 py-2">
                  {/* FRONT PHONE: EasyEat Restaurant Menu Screen */}
                  <div className="w-[220px] sm:w-[245px] h-[440px] sm:h-[475px] rounded-[38px] bg-slate-950 border-4 border-slate-800 p-2.5 shadow-2xl relative overflow-hidden text-left z-20 bg-white flex flex-col justify-between">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7.5px] text-slate-400 px-2 pt-0.5 font-semibold">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <div className="w-2 h-1.5 border border-slate-400 rounded-sm" />
                        </div>
                      </div>

                      {/* Brand Logo */}
                      <div className="p-2 text-center space-y-0.5 border-b border-slate-100">
                        <div className="w-8 h-8 mx-auto rounded-lg bg-[#FF5722] text-white flex items-center justify-center font-black text-sm shadow-sm">
                          🍕
                        </div>
                        <h4 className="text-[11px] font-black text-slate-900 tracking-tight">EasyEat</h4>
                      </div>

                      {/* Today's Special Dish */}
                      <div className="p-2 space-y-1">
                        <span className="text-[8px] font-extrabold text-[#FF5722] block">Today's Special Dish</span>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-0.5 text-[7.5px]">
                          <div className="flex justify-between font-bold text-slate-800">
                            <span>Item Name</span>
                            <span>Garlic Pizza</span>
                          </div>
                          <div className="flex justify-between text-slate-500">
                            <span>Main Price</span>
                            <span>Discount Price</span>
                          </div>
                          <div className="flex justify-between font-extrabold">
                            <span className="text-slate-400 line-through">$ 19.55</span>
                            <span className="text-[#FF5722]">$ 15.00</span>
                          </div>
                          <div className="text-[7px] text-slate-400 pt-0.5">Specification: Spicy</div>
                        </div>
                      </div>

                      {/* Main Product List */}
                      <div className="p-2 space-y-1">
                        <span className="text-[8px] font-extrabold text-slate-900 block">Main Product List</span>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-0.5 text-[7.5px]">
                          <div className="flex justify-between font-bold text-slate-800">
                            <span>Item Name</span>
                            <span>Garlic Pizza</span>
                          </div>
                          <div className="flex justify-between text-slate-500">
                            <span>Main Price</span>
                            <span>Discount Price</span>
                          </div>
                          <div className="flex justify-between font-extrabold">
                            <span className="text-slate-400 line-through">$ 19.55</span>
                            <span className="text-[#FF5722]">$ 15.00</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Orange Continue CTA Button */}
                    <div className="p-2">
                      <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white font-extrabold text-[9.5px] text-center shadow-md">
                        Continue
                      </button>
                    </div>
                  </div>

                  {/* BACK PHONE: Profile & Settings Screen */}
                  <div className="w-[205px] sm:w-[225px] h-[420px] sm:h-[450px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10 bg-white flex flex-col justify-between">
                    <div>
                      {/* Red/Orange Header */}
                      <div className="bg-[#FF3B30] text-white p-2.5 rounded-t-[26px] flex justify-between items-center text-[9px] font-extrabold">
                        <span>Profile</span>
                        <span className="text-[7.5px] opacity-90 underline">Edit</span>
                      </div>

                      {/* User Info */}
                      <div className="p-2 border-b border-slate-100 flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-[9px]">
                          👤
                        </div>
                        <div>
                          <div className="text-[8.5px] font-extrabold text-slate-900">Anujak</div>
                          <div className="text-[7px] text-slate-400">anujak@gmail.com</div>
                        </div>
                      </div>

                      {/* Settings Menu Options */}
                      <div className="p-1 space-y-0.5 text-[7.5px] text-slate-700 font-sans">
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">My Orders</span>
                          <span className="text-[6.5px] text-slate-400">Already have 10 Orders ›</span>
                        </div>
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">Item Category</span>
                          <span className="text-[6.5px] text-slate-400">55 Orders ›</span>
                        </div>
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">Total Branch</span>
                          <span className="text-[6.5px] text-slate-400">3 Addresses ›</span>
                        </div>
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">Payment Methods</span>
                          <span className="text-[6.5px] text-slate-400">Visa *7134 ›</span>
                        </div>
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">My Reviews</span>
                          <span className="text-[6.5px] text-slate-400">3 Reviews for 3 Items ›</span>
                        </div>
                        <div className="p-1.5 border-b flex justify-between items-center">
                          <span className="font-bold">Settings</span>
                          <span className="text-[6.5px] text-slate-400">Notification, Password ›</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 text-center text-[7.5px] font-bold text-rose-500">
                      Logout
                    </div>
                  </div>
                </div>
              ) : (
                /* User App Tab Graphic: Dual Food App Phone Screens (1:1 Sapphire Match) */
                <div className="flex items-center -space-x-10 sm:-space-x-12 py-2">
                  {/* FRONT PHONE: User App Main Screen */}
                  <div className="w-[220px] sm:w-[245px] h-[440px] sm:h-[475px] rounded-[38px] bg-slate-950 border-4 border-slate-800 p-2.5 shadow-2xl relative overflow-hidden text-left z-20 bg-white flex flex-col justify-between">
                    <div>
                      {/* Status Bar */}
                      <div className="flex items-center justify-between text-[7.5px] text-slate-400 px-2 pt-0.5 font-semibold">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          <div className="w-2 h-1.5 border border-slate-400 rounded-sm" />
                        </div>
                      </div>

                      {/* Header Location Bar */}
                      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF7043] -mx-2.5 -mt-1 p-2.5 text-white space-y-1">
                        <div className="flex justify-between text-[8px] font-bold">
                          <span>📍 102 E Taylor St, USA</span>
                          <span>⚙️</span>
                        </div>
                        <div className="bg-white text-slate-400 rounded-md px-2 py-1 text-[7.5px] flex items-center">
                          <span className="mr-1">🔍</span>
                          <span>Search your product...</span>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="p-1.5 mt-1 space-y-1">
                        <div className="flex justify-between text-[8px] font-extrabold text-slate-900">
                          <span>Categories</span>
                          <span className="text-[7px] text-[#FF5722]">See All</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 text-center text-[6.5px]">
                          <div className="bg-orange-50 rounded p-1"><span className="block text-[9px]">🥣</span>Breakfast</div>
                          <div className="bg-amber-50 rounded p-1"><span className="block text-[9px]">🍔</span>Lunch</div>
                          <div className="bg-red-50 rounded p-1"><span className="block text-[9px]">🍟</span>Snack</div>
                          <div className="bg-yellow-50 rounded p-1"><span className="block text-[9px]">🍕</span>Dinner</div>
                        </div>
                      </div>

                      {/* Popular Products */}
                      <div className="p-1.5 space-y-1">
                        <div className="flex justify-between text-[8px] font-extrabold text-slate-900">
                          <span>Popular Products</span>
                          <span className="text-[7px] text-[#FF5722]">See All</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[6.5px]">
                          <div className="bg-slate-50 border rounded p-1 text-center">
                            <div className="text-[10px]">🍔</div>
                            <div className="font-bold truncate">Hamburger</div>
                            <div className="text-[#FF5722] font-extrabold">$12</div>
                          </div>
                          <div className="bg-slate-50 border rounded p-1 text-center">
                            <div className="text-[10px]">🥪</div>
                            <div className="font-bold truncate">Sandwich</div>
                            <div className="text-[#FF5722] font-extrabold">$15</div>
                          </div>
                          <div className="bg-slate-50 border rounded p-1 text-center">
                            <div className="text-[10px]">🍕</div>
                            <div className="font-bold truncate">Pizza</div>
                            <div className="text-[#FF5722] font-extrabold">$18</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Bar */}
                    <div className="bg-slate-900 text-white -mx-2.5 -mb-2.5 p-1.5 flex justify-around text-[7.5px] font-extrabold">
                      <span className="text-[#FF5722]">🏠 Home</span>
                      <span className="opacity-70">📂 Categories</span>
                      <span className="opacity-70">🛒 Cart</span>
                      <span className="opacity-70">👤 Profile</span>
                    </div>
                  </div>

                  {/* BACK PHONE: My Cart Screen */}
                  <div className="w-[205px] sm:w-[225px] h-[420px] sm:h-[450px] rounded-[36px] bg-slate-950 border-4 border-slate-800 p-2 shadow-xl relative overflow-hidden text-left z-10 bg-white flex flex-col justify-between">
                    <div>
                      <div className="bg-[#FF3B30] text-white p-2 rounded-t-[26px] font-extrabold text-[9px] text-center">
                        My Cart
                      </div>
                      <div className="p-2 space-y-1.5 text-[7.5px]">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 space-y-1">
                          <div className="flex justify-between font-bold text-slate-800">
                            <span>Hakka Noodles Bowl</span>
                            <span>1x</span>
                          </div>
                          <div className="text-[6.5px] text-slate-500">By Restaurant</div>
                          <div className="font-extrabold text-[#FF5722]">$ 25</div>
                        </div>
                        <div className="p-1.5 bg-slate-50 border rounded text-[7px] space-y-0.5">
                          <div className="flex justify-between"><span>Item Total</span><span>$25</span></div>
                          <div className="flex justify-between"><span>Delivery Fee</span><span>$3</span></div>
                          <div className="flex justify-between text-emerald-600 font-bold"><span>Discount</span><span>-$10</span></div>
                          <div className="flex justify-between font-extrabold text-slate-900 pt-0.5 border-t"><span>Total MRP (incl of taxes)</span><span>$25</span></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      <button className="w-full py-2 rounded-xl bg-[#FF5722] text-white font-extrabold text-[9px] text-center shadow">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right 3 Feature Cards */}
            <div className="lg:col-span-4 space-y-4">
              {panelFeatures[activePanelTab]?.slice(3, 6).map((item, idx) => {
                const ItemIcon = item.Icon || Smartphone;
                return (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl transition-all duration-300 hover:bg-[#005F96] hover:shadow-xl cursor-pointer text-left"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3.5 rounded-xl bg-[#E5F2F9] text-[#005F96] group-hover:bg-white group-hover:text-[#005F96] shrink-0 border border-cyan-100/60 shadow-xs transition-colors duration-300">
                        <ItemIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className="text-slate-900 group-hover:text-white mb-1 font-sans transition-colors duration-300"
                          style={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-slate-600 group-hover:text-white font-sans font-normal transition-colors duration-300"
                          style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: CUTTING EDGE TECHNOLOGIES SAPPHIRE USE FOR FOOD DELIVERY APP DEVELOPMENT (SCREENSHOT 1)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans overflow-hidden text-left">
        <div className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
              style={{ fontSize: '36px' }}
            >
              Cutting Edge Technologies Sapphire Use For Food Delivery App Development
            </h2>
          </div>

          <div
            className="relative overflow-hidden w-full py-2"
            onMouseEnter={() => setIsTechHovered(true)}
            onMouseLeave={() => setIsTechHovered(false)}
          >
            <div
              className="flex space-x-6 sm:space-x-7 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${techCarouselIndex * 390}px)`
              }}
            >
              {cuttingEdgeTechList.map((tech, idx) => (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[360px] lg:w-[380px] shrink-0 rounded-[16px] bg-[#EAF6FF] p-8 min-h-[300px] flex flex-col justify-start text-left select-none transition-all hover:shadow-md border border-[#D0E8FA]"
                >
                  <div className="mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="font-[800] text-[19px] sm:text-[20px] text-[#0B0F19] mb-3">
                    {tech.title}
                  </h3>
                  <p
                    className="font-normal text-[#2D3748]"
                    style={{ fontSize: '14px', lineHeight: '1.65' }}
                  >
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
            <button
              onClick={() => setTechCarouselIndex((prev) => Math.max(0, prev - 1))}
              disabled={techCarouselIndex === 0}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => setTechCarouselIndex((prev) => Math.min(prev + 1, cuttingEdgeTechList.length - 3))}
              disabled={techCarouselIndex >= cuttingEdgeTechList.length - 3}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-25 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR PREMIUM SERVICES (SCREENSHOT 2)
          ========================================================================= */}
      <PremiumServicesGrid />

      {/* =========================================================================
          SECTION 6: MEET SAPPHIRE'S EXCEPTIONAL TEAM OF SEASONED EXPERTS (SCREENSHOT 3)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white text-slate-900 font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
            <h2
              className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
              style={{ fontSize: '36px' }}
            >
              Meet Sapphire’s Exceptional Team of Seasoned Experts
            </h2>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-[#D9EFF9] rounded-full p-1.5 inline-flex flex-wrap items-center justify-center gap-1.5 shadow-xs">
              {[
                'Trending',
                'Product Development',
                'Saas',
                'AI/ML',
                'Data Engineering',
                'Design',
                'Marketing',
                'IoT App Dev',
                'Blockchain Dev'
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setExpertActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-[700] transition-all cursor-pointer ${expertActiveCategory === category
                      ? 'bg-[#005F96] text-white shadow-xs'
                      : 'text-[#334155] hover:text-[#005F96] hover:bg-white/50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1340px] mx-auto">
            {[
              {
                id: 0,
                title: 'Mobile Application Team',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                techs: ['Android', 'iOS', 'Flutter', 'React Native', 'Swift'],
                team: ['Tech Lead (1)', 'Sr. iOS Dev (2)', 'Sr. Android Dev (2)', 'Flutter Dev (2)', 'QA Engineer (1)']
              },
              {
                id: 1,
                title: 'Saas Product Dev. Team',
                image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
                techs: ['Vue.JS', 'React JS', 'DevOps', 'CRM', 'UI/UX', 'Mongo DB', 'Cloud'],
                team: ['Solution Architect (1)', 'Full Stack Lead (2)', 'Cloud DevOps (1)', 'Frontend Specialist (2)', 'Product QA (1)']
              },
              {
                id: 2,
                title: 'Microsoft Dev. Team',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
                techs: ['.Net Core', 'Share Point', 'Power Apps', 'Power Automate', 'Power BI', 'Azure'],
                team: ['.NET Architect (1)', 'SharePoint Lead (2)', 'Power Platform Eng (2)', 'Azure Cloud Eng (1)', 'BI Analyst (1)']
              }
            ].map((card, idx) => {
              const currentTab = expertTabs[idx] || 'tech';
              const activePills = currentTab === 'tech' ? card.techs : card.team;

              return (
                <div
                  key={card.id}
                  className="bg-[#EAF6FF] rounded-[18px] p-5 sm:p-6 border border-[#D0E8FA] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 text-left"
                >
                  <div>
                    <div className="w-full h-[180px] sm:h-[190px] rounded-[14px] overflow-hidden shadow-xs mb-4.5 bg-slate-900">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover select-none"
                      />
                    </div>

                    <h3 className="font-[800] text-[18px] sm:text-[19px] text-[#0B0F19] mb-3.5 text-left">
                      {card.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-3.5 text-left">
                      <button
                        onClick={() => setExpertTabs((prev) => ({ ...prev, [idx]: 'tech' }))}
                        className={`text-xs font-[800] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${currentTab === 'tech'
                            ? 'bg-[#005F96] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                      >
                        Technologies
                      </button>
                      <button
                        onClick={() => setExpertTabs((prev) => ({ ...prev, [idx]: 'team' }))}
                        className={`text-xs font-[700] rounded-[6px] px-3.5 py-1.5 transition-all cursor-pointer ${currentTab === 'team'
                            ? 'bg-[#005F96] text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                      >
                        Team Composition
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2 min-h-[66px] text-left items-start">
                      {activePills.map((pill, pillIdx) => (
                        <span
                          key={pillIdx}
                          className="bg-white text-[#1E293B] font-[600] text-xs px-3.5 py-1.5 rounded-full shadow-2xs border border-slate-100"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3.5 text-left">
                    <Link
                      to="/contact"
                      className="bg-[#005F96] hover:bg-[#004D7A] text-white text-xs font-[800] rounded-[6px] px-4 py-2.5 inline-flex items-center space-x-2 transition-all shadow-xs"
                    >
                      <span>Get Details</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-10">
            <button
              onClick={() => setExpertCarouselIndex((prev) => Math.max(0, prev - 1))}
              disabled={expertCarouselIndex === 0}
              aria-label="Previous Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() => setExpertCarouselIndex((prev) => Math.min(prev + 1, 2))}
              disabled={expertCarouselIndex >= 2}
              aria-label="Next Slide"
              className="w-10 h-10 flex items-center justify-center text-slate-800 hover:text-[#005F96] disabled:opacity-30 disabled:cursor-not-allowed transition-all text-2xl font-bold cursor-pointer"
            >
              →
            </button>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: SAPPHIRE'S COMPREHENSIVE SUITE OF MOBILE APP DEVELOPMENT SERVICES (SCREENSHOT 4)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#005F96] text-white font-sans text-left">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-4">
            <h2
              className="font-[800] text-white tracking-tight leading-tight"
              style={{ fontSize: '36px' }}
            >
              Sapphire’s Comprehensive Suite of Mobile App Development Services
            </h2>
            <p
              className="text-cyan-50 font-normal font-sans"
              style={{ fontSize: '15px', lineHeight: '26px' }}
            >
              Sapphire developers thrive at developing compelling mobile applications by utilizing our knowledge of the latest app development frameworks. Sapphire provides full-service mobile app development customized to meet your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1340px] mx-auto">
            {suiteCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] p-7 text-slate-900 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-start text-left border border-white/20"
              >
                <h3
                  className="font-[800] text-slate-900 mb-3"
                  style={{ fontSize: '20px', lineHeight: '26px' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-slate-600 font-sans font-normal"
                  style={{ fontSize: '14px', lineHeight: '24px' }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: SECTORS THRIVING THROUGH SAPPHIRE'S BESPOKE MOBILE APP DEVELOPMENT SERVICES (SCREENSHOT 5 PART 1)
          ========================================================================= */}
      <SectorsThrivingSection />

      {/* =========================================================================
          SECTION 9: INDUSTRY-FOCUSED INSIGHTS TO ELEVATE YOUR BUSINESS (SCREENSHOT 5 PART 2)
          ========================================================================= */}
      <SuccessStories />

      {/* =========================================================================
          SECTION 10: SUCCESS STORIES & 4 STAT COUNTER BLOCKS (SCREENSHOT 1)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#E5F2F9] font-sans text-left border-b border-cyan-100">
        <Container>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <h2
              className="text-[#0B0F19] tracking-tight font-sans"
              style={{ fontSize: '34px', fontWeight: 800, lineHeight: '51px' }}
            >
              Success Stories
            </h2>
            <p
              className="text-slate-600 font-sans max-w-3xl mx-auto"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '27px' }}
            >
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
            {/* Card 1: Food Delivery App Development */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-100">
              <div className="relative bg-[#FF9800]/10 p-6 flex items-center justify-center min-h-[240px]">
                <span className="absolute top-4 right-4 bg-[#64B5F6] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  Case Study
                </span>
                <div className="flex items-center space-x-3">
                  <div className="w-28 h-48 rounded-[24px] bg-slate-900 border-4 border-slate-800 p-1 overflow-hidden shadow-xl text-[6px] text-white bg-slate-800">
                    <div className="bg-[#FF5722] p-1 rounded font-bold">FoodExpress</div>
                    <div className="p-1 space-y-1">
                      <div className="h-6 bg-slate-700 rounded"></div>
                      <div className="h-4 bg-slate-700 rounded"></div>
                      <div className="h-10 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-amber-400 border-2 border-white shadow-md flex items-center justify-center text-3xl">
                      👩‍🍳
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 block mt-1">Delivery App</span>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center bg-white border-t border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#005F96] transition-colors">
                  Food Delivery App Development
                </h3>
              </div>
            </div>

            {/* Card 2: Pizza Delivery App */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-100">
              <div className="relative bg-[#FFCC80]/20 p-6 flex items-center justify-center min-h-[240px]">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-28 h-48 rounded-[24px] bg-slate-950 border-4 border-slate-800 p-1.5 overflow-hidden shadow-xl text-[6px] bg-white text-slate-800">
                    <div className="w-full h-14 bg-red-100 rounded-lg mb-1 flex items-center justify-center text-xl">🍕</div>
                    <div className="font-bold text-[7px]">Double Cheese Margherita</div>
                    <div className="text-[#FF5722] font-black">$22</div>
                    <div className="bg-[#FF5722] text-white p-1 rounded text-center font-bold mt-2">Add to Cart</div>
                  </div>
                  <div className="w-24 h-40 rounded-[20px] bg-slate-900 border-2 border-slate-700 p-1 overflow-hidden shadow-lg text-[5px] text-white bg-slate-800">
                    <div className="bg-amber-600 p-1 rounded font-bold">Pizza App</div>
                    <div className="p-1 space-y-0.5">
                      <div className="h-4 bg-slate-700 rounded"></div>
                      <div className="h-4 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center bg-white border-t border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#005F96] transition-colors">
                  Pizza Delivery App
                </h3>
              </div>
            </div>

            {/* Card 3: Tiffin Delivery App */}
            <div className="bg-white rounded-[20px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-100">
              <div className="relative bg-[#FF8A65]/20 p-6 flex items-center justify-center min-h-[240px]">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-28 h-48 rounded-[24px] bg-slate-950 border-4 border-slate-800 p-1.5 overflow-hidden shadow-xl text-[6px] bg-amber-50 text-slate-800">
                    <div className="bg-[#E65100] text-white p-1 rounded font-bold text-center">Tiffin Delivery App</div>
                    <div className="p-1 space-y-1">
                      <div className="bg-white p-1 rounded border text-[6px] font-bold">Daily Tiffin Meal</div>
                      <div className="bg-white p-1 rounded border text-[6px] font-bold">Monthly Plan</div>
                    </div>
                  </div>
                  <div className="w-24 h-40 rounded-[20px] bg-slate-900 border-2 border-slate-700 p-1 overflow-hidden shadow-lg text-[5px] text-white bg-slate-800">
                    <div className="bg-orange-600 p-1 rounded font-bold">Meal Box</div>
                  </div>
                </div>
              </div>
              <div className="p-5 text-center bg-white border-t border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-[#005F96] transition-colors">
                  Tiffin Delivery App
                </h3>
              </div>
            </div>
          </div>

          {/* View All Portfolio CTA Button */}
          <div className="text-center mb-12">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 bg-[#005F96] hover:bg-[#004D7A] text-white font-extrabold text-sm sm:text-base rounded-md shadow-md transition-all hover:scale-105"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Stat Counter Blocks (Pastel Cards Matching Screenshot 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {/* Stat 1: Pastel Purple */}
            <div className="bg-[#D8D2FF] rounded-[16px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                23+
              </span>
              <span className="text-slate-700 font-extrabold text-sm sm:text-base">
                Years Experience
              </span>
            </div>

            {/* Stat 2: Mint Green */}
            <div className="bg-[#B5F2E3] rounded-[16px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                320+
              </span>
              <span className="text-slate-700 font-extrabold text-sm sm:text-base">
                5-Star Clutch Reviews
              </span>
            </div>

            {/* Stat 3: Pastel Red/Salmon */}
            <div className="bg-[#FFC5C5] rounded-[16px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                2800+
              </span>
              <span className="text-slate-700 font-extrabold text-sm sm:text-base">
                Satisfied Clients
              </span>
            </div>

            {/* Stat 4: Dark Teal CTA */}
            <div className="bg-[#005F96] rounded-[16px] p-5 text-center flex flex-col justify-center items-center text-white shadow-md">
              <h4 className="font-extrabold text-base sm:text-lg mb-3">
                Want to start Projects
              </h4>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white text-[#005F96] hover:bg-cyan-50 font-extrabold text-xs sm:text-sm rounded-md shadow transition-all hover:scale-105"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 11: OUR MOBILE APP DEVELOPMENT SERVICES EXPERTISE (SCREENSHOT 2)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <h2
              className="text-[#0B0F19] tracking-tight font-sans"
              style={{ fontSize: '34px', fontWeight: 800, lineHeight: '41px' }}
            >
              Our Mobile App Development Services Expertise Aligned with Your Business Dynamics
            </h2>
            <p
              className="text-slate-600 font-sans max-w-3xl mx-auto"
              style={{ fontSize: '16px', fontWeight: 500, lineHeight: '26px' }}
            >
              We are a conscientious team of tech visionaries committed to transforming groundbreaking technologies concepts into realities. We deliver cutting-edge digital solutions that drive our clients to achieve unparalleled success.
            </p>
          </div>

          {/* Horizontal Card Slider Container */}
          <div
            className="relative overflow-hidden w-full max-w-[1280px] mx-auto pb-4"
            onMouseEnter={() => setIsMobileExpertiseHovered(true)}
            onMouseLeave={() => setIsMobileExpertiseHovered(false)}
          >
            <div
              className="flex space-x-6 transition-transform duration-500 ease-in-out px-1"
              style={{
                transform: `translateX(-${mobileExpertiseIndex * 395}px)`
              }}
            >
              {mobileAppExpertiseList.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[330px] sm:w-[370px] shrink-0 bg-[#EAF6FF] rounded-[16px] p-8 border border-[#D0E8FA] shadow-xs flex flex-col justify-between text-left min-h-[300px]"
                >
                  <div className="space-y-3.5">
                    <h3
                      className="text-[#0B0F19] font-sans"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#2D3748] font-sans"
                      style={{ fontSize: '15px', fontWeight: 400, lineHeight: '23px' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      to={item.link}
                      className="inline-block px-6 py-2.5 bg-[#0084D1] hover:bg-[#006BB0] text-white font-[700] text-sm rounded-[6px] transition-all shadow-xs"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Centered Navigation Controls */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <button
                onClick={() => setMobileExpertiseIndex((prev) => Math.max(0, prev - 1))}
                disabled={mobileExpertiseIndex === 0}
                aria-label="Previous Slide"
                className="text-slate-400 hover:text-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-xl font-bold cursor-pointer px-2 py-1"
              >
                ←
              </button>
              <button
                onClick={() => setMobileExpertiseIndex((prev) => Math.min(prev + 1, mobileAppExpertiseList.length - 3))}
                disabled={mobileExpertiseIndex >= mobileAppExpertiseList.length - 3}
                aria-label="Next Slide"
                className="text-slate-400 hover:text-slate-800 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-xl font-bold cursor-pointer px-2 py-1"
              >
                →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 12: FOOD DELIVERY APP DEVELOPMENT (VIDEO SHOWCASE - SCREENSHOT 3)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h2
              className="text-[#0B0F19] tracking-tight font-sans"
              style={{ fontSize: '34px', fontWeight: 800, lineHeight: '51px' }}
            >
              Food Delivery App Development
            </h2>
          </div>

          {/* Featured Video Showcase Card with Background Accent Circles */}
          <div className="relative max-w-4xl mx-auto py-6">
            {/* Background Decorative Soft Circles */}
            <div className="absolute top-0 left-4 w-44 h-44 rounded-full bg-cyan-100/60 blur-xl pointer-events-none" />
            <div className="absolute bottom-0 right-4 w-44 h-44 rounded-full bg-rose-100/60 blur-xl pointer-events-none" />

            <div
              onClick={() => setFoodZillaVideoActive(true)}
              className="relative z-10 w-full h-[320px] sm:h-[420px] md:h-[480px] bg-slate-950 rounded-[32px] overflow-hidden border-8 border-slate-100 shadow-2xl cursor-pointer group flex flex-col items-center justify-center text-center p-6"
            >
              {/* Featured Poster Branding */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950 flex flex-col items-center justify-center p-8">
                <div className="text-slate-400 font-extrabold text-sm tracking-widest uppercase mb-2">
                  Sapphire Software Solutions
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex items-center justify-center text-white text-3xl shadow-lg mb-3 group-hover:scale-110 transition-transform">
                  🍴
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2 font-sans">
                  FoodZilla
                </h3>
                <p className="text-slate-300 font-medium text-sm sm:text-lg max-w-md mb-8 font-sans">
                  Revolutionize Food Delivery with a Custom App
                </p>

                {/* Central Play Button */}
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-white group-hover:text-[#005F96] transition-all duration-300">
                  <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Video Modal Popup */}
          {foodZillaVideoActive && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setFoodZillaVideoActive(false)}
            >
              <div
                className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white border-b border-slate-700">
                  <h3 className="font-bold text-base sm:text-lg">FoodZilla - Food Delivery App Development</h3>
                  <button
                    onClick={() => setFoodZillaVideoActive(false)}
                    className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-sm"
                  >
                    ✕
                  </button>
                </div>
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1"
                    title="FoodZilla App Showcase"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* =========================================================================
          SECTION 13: UNVEILING OUR INNOVATIVE SOLUTION (SCREENSHOT 4)
          ========================================================================= */}
      <InnovativeVideoSlider />

      {/* =========================================================================
          SECTION 14: SUCCESS MATRIX (MATCHING HOME PAGE 1:1)
          ========================================================================= */}
      <SuccessMatrixGrid />

      {/* =========================================================================
          SECTION 15: FREQUENTLY ASKED QUESTIONS (SCREENSHOT 1 & 2)
          ========================================================================= */}
      <SapphireFaqSection faqList={zomatoAppFaqList} />

      {/* =========================================================================
          SECTION 16: OUR STORY, THEIR WORDS - TESTIMONIAL VIDEO SLIDER (SCREENSHOT 3)
          ========================================================================= */}
      <ClientStoryVideoSlider />

      {/* =========================================================================
          SECTION 17: EXPLORE THE TRANSFORMATIVE IMPACT OF MOBILE APP (SCREENSHOT 4)
          ========================================================================= */}
      <TransformativeImpactSection />

      {/* =========================================================================
          SECTION 18: TECHNOLOGY STACK THAT SAPPHIRE MOBILE DEVELOPERS USE PROFICIENTLY (SCREENSHOT 5)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white text-slate-900 font-sans text-left border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2
              className="text-[#0B0F19] tracking-tight font-sans"
              style={{ fontSize: '34px', fontWeight: 800, lineHeight: '51px' }}
            >
              Technology Stack That Sapphire Mobile Developers Use Proficiently
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-3.5">
            {[
              {
                category: 'iOS',
                skills: ['Swift', 'Objective-C', 'X-Code', 'SwiftUI']
              },
              {
                category: 'Android',
                skills: ['Java', 'Kotlin', 'Android Studio', 'Version control tools (Git, GitLab, Bit Bucket)']
              },
              {
                category: 'Cross Platform',
                skills: ['Flutter', 'React Native', 'Ionic', 'NativeScript']
              },
              {
                category: 'Database',
                skills: ['Firebase', 'Redis', 'PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'SQLite']
              },
              {
                category: 'Design Tool',
                skills: ['Figma', 'Sketch', 'Adobe XD', 'Zeplin', 'Photoshop', 'Illustrator', 'After Effects', 'InVision']
              }
            ].map((row, idx) => (
              <div
                key={idx}
                className="bg-[#EAF3F9] rounded-[8px] p-2 border border-[#D5E6F2] flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-3 shadow-2xs"
              >
                {/* Left Dark Blue Category Pill */}
                <div className="bg-[#005F96] text-white font-bold text-sm sm:text-base px-5 py-2.5 rounded-[6px] md:w-[240px] shrink-0 text-center flex items-center justify-center shadow-2xs">
                  {row.category}
                </div>

                {/* Right Technology Skill Pills */}
                <div className="flex flex-wrap gap-2 flex-1 p-0.5 items-center">
                  {row.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="bg-white text-slate-800 font-bold text-xs sm:text-[13.5px] px-3.5 py-1.5 rounded-[6px] shadow-2xs border border-slate-100 hover:border-[#005F96] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Centered Action Button */}
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#005F96] hover:bg-[#004D7A] text-white font-extrabold text-sm sm:text-base rounded-[6px] shadow-md transition-all hover:scale-105"
            >
              Share Your Requirement
            </Link>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 19: WHAT OUR CLIENTS SAY - CLUTCH REVIEWS DARK CAROUSEL (SCREENSHOT 1)
          ========================================================================= */}
      <ClientReviewsDarkSection />

      {/* =========================================================================
          SECTION 20: GET ZOMATO-LIKE APP DEVELOPMENT WITH 100% GUARANTEED SUCCESS (SCREENSHOT 2 & 3)
          ========================================================================= */}
      <section id="quote-form" className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left font-sans">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
            <h2
              className="text-[#0B0F19] tracking-tight font-sans"
              style={{ fontSize: '34px', fontWeight: 800, lineHeight: '41px' }}
            >
              Get Zomato-Like App Development With 100% Guaranteed Success
            </h2>
            <p
              className="text-slate-600 font-sans max-w-3xl mx-auto"
              style={{ fontSize: '15px', fontWeight: 400, lineHeight: '26px' }}
            >
              We create Zomato like apps to help you start a commission based business. The app allows cloud kitchen businesses to provide food delivery service online to a vast number of people. You can also hire on-demand app developers to create a Zomato like app in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto pt-4">
            {/* Left Column: 5 Feature Items */}
            <div className="lg:col-span-6 space-y-5">
              {[
                {
                  title: 'Flexible-Engagement-Models',
                  desc: 'Total customized and customer-centric engagement models facilitating hourly or fixed rate hiring of developers.',
                  icon: '🤝'
                },
                {
                  title: '100% Transparency',
                  desc: '100% transparency policy to keep our client and our team on the same page.',
                  icon: '🔍'
                },
                {
                  title: 'Experienced Developers',
                  desc: 'Our team of capable and experienced developers handle your unique business needs efficiently and have working experience in versatile domains.',
                  icon: '👨‍💻'
                },
                {
                  title: 'Timely Delivery',
                  desc: 'We value the time and are particular about timely deliveries by following the highest quality standards.',
                  icon: '⏱️'
                },
                {
                  title: 'Technical Support',
                  desc: 'Ask any technical query and get it solved by our expert technical support staff! With fruitful interaction, get the best possible solutions for your problems from our consultation and support team.',
                  icon: '⚙️'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] border border-cyan-100 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 font-sans">{item.title}</h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Contact Lead Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-100 shadow-xl text-left relative overflow-hidden">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900 font-sans">Let's Discuss</h3>
                </div>

                {quoteSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                    <span className="text-3xl">✅</span>
                    <h4 className="font-extrabold text-emerald-800 text-lg">Thank You!</h4>
                    <p className="text-xs text-emerald-700">Your message has been sent successfully. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name *"
                        required
                        value={quoteFormState.name}
                        onChange={(e) => setQuoteFormState({ ...quoteFormState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#005F96] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email ID *"
                        required
                        value={quoteFormState.email}
                        onChange={(e) => setQuoteFormState({ ...quoteFormState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#005F96] focus:bg-white transition-all"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <div className="px-3 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold shrink-0">
                        +91 ▾
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number *"
                        required
                        value={quoteFormState.phone}
                        onChange={(e) => setQuoteFormState({ ...quoteFormState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#005F96] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={4}
                        placeholder="Tell us more about your project *"
                        required
                        value={quoteFormState.message}
                        onChange={(e) => setQuoteFormState({ ...quoteFormState, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-[#005F96] focus:bg-white transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#005F96] hover:bg-[#004D7A] text-white font-extrabold text-sm rounded-lg shadow-md transition-all hover:scale-[1.01]"
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 21: HAVE FOOD DELIVERY APP DEVELOPMENT COMPANY CHALLENGE TO ADDRESS ? (SCREENSHOT 3)
          ========================================================================= */}
      <HealthcareChallengeCtaBanner
        title="Have Food Delivery App Development Company Challenge To Address ?"
        subtitle="Get access to top Food Delivery App Development Company to transform your ideas into a robust application."
        buttonText="Hire Now"
      />

      {/* =========================================================================
          SECTION 22: SUBSCRIBE US AND GET THE LATEST UPDATES AND NEWS (SCREENSHOT 3)
          ========================================================================= */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default ZomatoLikeAppDevelopmentService;
