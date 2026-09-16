import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag,
  Scale,
  Car,
  Wallet,
  Stethoscope,
  GraduationCap,
  Truck,
  Building2,
  Puzzle,
  UserCheck,
  ShoppingCart,
  ClipboardList,
  Glasses,
  Search,
  PenTool,
  MonitorSmartphone,
  Code,
  Globe,
  Layout,
  Gauge,
  MessageSquare,
  Boxes,
  Store,
  Database,
  Wifi,
  Briefcase,
  CreditCard,
  Calculator,
  ShieldCheck,
  Coins,
  ShieldAlert,
  Video,
  FileText,
  Pill,
  Lock,
  Activity,
  User,
  Tv,
  HelpCircle,
  BookOpen,
  BarChart,
  Radio,
  FileDown,
  Navigation,
  Compass,
  Zap,
  Users,
  QrCode,
  Warehouse,
  View,
  FileCheck,
  Plane,
  Sprout,
  Ticket,
  Star,
  Package,
  MapPin,
  Calendar,
  Sparkles,
  Share2,
  CheckCircle2,
  HeartPulse,
  Camera
} from 'lucide-react';

export const SectorsThrivingSection = ({ title }) => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 2.5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const firstCard = container.querySelector('.sector-card');
        const cardWidth = firstCard ? firstCard.offsetWidth : 480;
        const gap = 24; // space-x-6 is 24px
        const scrollAmount = cardWidth + gap;

        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const sectors = [
    {
      id: 'agriculture',
      icon: <Sprout className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Agriculture App Development Company',
      desc: 'The progression of technology has made life a little bit simpler in recent years. Regardless of the goods or services you seek, there is almost nothing that cannot be acquired at the tip of your fingers in this day and age.',
      featuresLeft: [
        {
          name: 'Analytics',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <BarChart className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'List Of Diseases And Treatments',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <FileText className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Camera And Machine Vision',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Camera className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Payment Gateway',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <CreditCard className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Broadcast And Video Calls',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Video className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'GPS Services',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Navigation className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Education App Development Services in USA',
      desc: 'As an Education App Development Service Provider, we deliver unmatched Education App Development Services. We are an experienced Education App Development Agency with a team of professional mobile app developers.',
      featuresLeft: [
        {
          name: 'Interactive eBooks',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <BookOpen className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Worksheet Apps',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <FileText className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Skill Boosting Applications',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Sparkles className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Puzzle-Solving Apps',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Puzzle className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Classroom Apps',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Users className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Educational Application',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <GraduationCap className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Retail App Development Company',
      desc: 'The Retail App Development Market For Mobile Devices Is Growing Far More Quickly Than Anybody Could Have Anticipated. The Retail Industry Is Seeing A Meteoric Rise In Terms Of Growth Throughout Time.',
      featuresLeft: [
        {
          name: 'Integrations',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Puzzle className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Product Personalization',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <UserCheck className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'eCommerce Solutions',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <ShoppingCart className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Marketplace Solutions',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Vendor Management System',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <ClipboardList className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'VR Shopping',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Glasses className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'legal',
      icon: <Scale className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Legal Website Development',
      desc: 'Several businesses are operating at varying levels within the legal sector. To have a solid online presence, you must need a website.',
      featuresLeft: [
        {
          name: 'Search Engine Optimization',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Search className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Content Writing',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <PenTool className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Responsive Web Design',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <MonitorSmartphone className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Web Design And Development',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Code className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Wordpress Experts',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Globe className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Custom Web Design',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Layout className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'healthcare',
      icon: <Stethoscope className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Healthcare App Development Services',
      desc: 'Through custom web and mobile apps, business, health centers and clinics optimize healthcare management. The solutions streamline patient care and every aspect of medical operations so that organizations continue to grow.',
      featuresLeft: [
        {
          name: 'EHR / EMR Integration',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <FileText className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Telemedicine Video',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <Video className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Appointment Scheduling',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'HIPAA Compliance',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Lock className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Prescription Refills',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Pill className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Wearable Device Sync',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Activity className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'logistics',
      icon: <Truck className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Logistics App Development Company',
      desc: 'Enterprise mobility is the most acceptable way to deliver something distinctive compared to other businesses in the same industry as you.',
      featuresLeft: [
        {
          name: 'Last-Mile Delivery',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Truck className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'On-Demand Delivery',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <Zap className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Fleet Management',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Navigation className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'On-Field Workforce',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Users className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'On-Demand Delivery',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Delivery Management',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'agriculture',
      icon: <Sprout className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Agriculture App Development',
      desc: 'The progression of agriculture technology has been rapid in recent years. Retaining conventional methods does almost nothing to increase harvest and efficiency in this day and age.',
      featuresLeft: [
        {
          name: 'Analytics',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <BarChart className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'List Of Diseases And Treatment',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <FileText className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Camera And Machine Vision',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Camera className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Weather Forecast & Alerts',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Wifi className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Soil Health Monitoring',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Activity className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Market Price Live Index',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Coins className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'retail',
      icon: <ShoppingBag className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Retail App Development Company',
      desc: 'The Retail App Development Market For Mobile Devices Is Growing Far More Quickly Than Anybody Could Have Anticipated. The Retail Industry Is Seeing A Meteoric Rise In Terms Of Growth Throughout Time.',
      featuresLeft: [
        {
          name: 'Integrations',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Puzzle className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Product Personalization',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <UserCheck className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'eCommerce Solutions',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <ShoppingCart className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Marketplace Solutions',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Vendor Management System',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <ClipboardList className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'VR Shopping',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Glasses className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'legal',
      icon: <Scale className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Legal Website Development',
      desc: 'Several businesses are operating at varying levels within the legal sector. To have a solid online presence, you must need a website.',
      featuresLeft: [
        {
          name: 'Search Engine Optimization',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Search className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Content Writing',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <PenTool className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Responsive Web Design',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <MonitorSmartphone className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Web Design And Development',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Code className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Wordpress Experts',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Globe className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Custom Web Design',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Layout className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'automotive',
      icon: <Car className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Automotive App Development',
      desc: 'We are an industry-leading automotive software development firm offering digital solutions of the highest quality at reasonable operating expenses.',
      featuresLeft: [
        {
          name: 'Vehicle Interior Apps',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Gauge className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Chatbot Development',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <MessageSquare className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'AR And VR Apps',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Boxes className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Automotive Dealership',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Store className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Big Data Solution',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Database className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'IoT Solution For Roads',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Wifi className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'fintech',
      icon: <Wallet className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Fintech App Development',
      desc: 'Our cutting-edge fintech app development delivers secure, seamless online solutions to help modern financial businesses scale and launch successful FinTech platforms.',
      featuresLeft: [
        {
          name: 'Portfolio Management',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Briefcase className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Fintech Software Development',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <CreditCard className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Fintech Accounting',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Calculator className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Secure Payment Gateways',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Blockchain & Crypto',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Coins className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'AI Fraud Detection',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <ShieldAlert className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'healthcare',
      icon: <Stethoscope className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Healthcare App Development',
      desc: 'Custom healthcare mobile applications designed for telehealth consultations, patient electronic health records, and HIPAA-compliant medical communications.',
      featuresLeft: [
        {
          name: 'Telemedicine Video',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Video className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Electronic Health Records',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <FileText className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Pharmacy Refill System',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Pill className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'HIPAA Compliance',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Lock className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Wearable Device Sync',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Activity className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Patient Portal',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <User className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Education & E-Learning Platform',
      desc: 'Scalable educational apps and LMS platforms that empower students and teachers with interactive quizzes, live classrooms, and gamified progress tracking.',
      featuresLeft: [
        {
          name: 'Virtual Classrooms',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Tv className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Interactive Quizzes',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <HelpCircle className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Course Management',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <BookOpen className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Student Analytics',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <BarChart className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Live Video Streaming',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <Radio className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Offline Study Material',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <FileDown className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'logistics',
      icon: <Truck className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Logistics & Transportation App',
      desc: 'End-to-end supply chain logistics and fleet dispatch systems with live GPS tracking, automated freight billing, and warehouse inventory control.',
      featuresLeft: [
        {
          name: 'GPS Fleet Tracking',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <Navigation className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Route Optimization',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <Compass className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Automated Dispatch',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <Zap className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Driver Management',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Users className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Barcode & RFID Scan',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <QrCode className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Warehouse Management',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Warehouse className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    },
    {
      id: 'realestate',
      icon: <Building2 className="w-5 h-5 text-white" strokeWidth={2} />,
      title: 'Real Estate App Development',
      desc: 'Smart real estate portals and property valuation apps featuring 3D virtual home tours, mortgage calculation engines, and verified agent chats.',
      featuresLeft: [
        {
          name: '3D Virtual Tours',
          bg: 'bg-[#EDE9FE]',
          iconColor: 'text-[#7C3AED]',
          icon: <View className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Mortgage Calculator',
          bg: 'bg-[#FFEDD5]',
          iconColor: 'text-[#EA580C]',
          icon: <Calculator className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Agent Chat & Leads',
          bg: 'bg-[#FCE7F3]',
          iconColor: 'text-[#DB2777]',
          icon: <MessageSquare className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ],
      featuresRight: [
        {
          name: 'Map Property Search',
          bg: 'bg-[#DCFCE7]',
          iconColor: 'text-[#16A34A]',
          icon: <Navigation className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Document E-Signing',
          bg: 'bg-[#FEF9C3]',
          iconColor: 'text-[#CA8A04]',
          icon: <FileCheck className="w-3.5 h-3.5" strokeWidth={2} />
        },
        {
          name: 'Rental Management',
          bg: 'bg-[#CFFAFE]',
          iconColor: 'text-[#0891B2]',
          icon: <Store className="w-3.5 h-3.5" strokeWidth={2} />
        }
      ]
    }
  ];

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-white text-slate-900 font-sans text-left overflow-hidden">
      {/* Centered Heading Matching Screenshot Exactly */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-2 px-4">
        <h2
          className="font-[800] text-[#0B0F19] tracking-tight leading-[1.25]"
          style={{ fontSize: '32px' }}
        >
          {title || "Sectors Thriving Through Firevy’s Bespoke Flutter App Development Services"}
        </h2>
      </div>

      {/* Auto-scrolling Carousel Container */}
      <div
        className="relative overflow-hidden w-full select-none pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-none px-4 sm:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="sector-card w-[420px] sm:w-[460px] lg:w-[480px] min-h-[300px] sm:min-h-[310px] rounded-[18px] bg-[#F0F8FD] p-6 sm:p-7 border border-[#E2F1F8] flex flex-col justify-between shrink-0 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Top Row: Rounded Blue Icon Box + Title */}
                <div className="flex items-start space-x-3.5 mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-[#0084D1] flex items-center justify-center shrink-0 shadow-xs">
                    {sector.icon}
                  </div>
                  <h3 className="font-[800] text-[16px] sm:text-[17.5px] text-[#0B0F19] leading-tight pt-1">
                    {sector.title}
                  </h3>
                </div>

                {/* Paragraph Description */}
                <p
                  className="font-normal text-[#475569] mb-4"
                  style={{ fontSize: '12.5px', lineHeight: '1.6' }}
                >
                  {sector.desc}
                </p>
              </div>

              {/* 2-Column Feature Capabilities List (3 Left, 3 Right) */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-3.5 border-t border-[#D9EFF9]">
                {/* Left Column */}
                <div className="space-y-2.5">
                  {sector.featuresLeft.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-[4px] ${feat.bg} ${feat.iconColor} flex items-center justify-center shrink-0`}>
                        {feat.icon}
                      </div>
                      <span className="text-[11.5px] sm:text-[12px] font-[700] text-[#1E293B] leading-tight truncate">
                        {feat.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-2.5">
                  {sector.featuresRight.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <div className={`w-5 h-5 rounded-[4px] ${feat.bg} ${feat.iconColor} flex items-center justify-center shrink-0`}>
                        {feat.icon}
                      </div>
                      <span className="text-[11.5px] sm:text-[12px] font-[700] text-[#1E293B] leading-tight truncate">
                        {feat.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsThrivingSection;
