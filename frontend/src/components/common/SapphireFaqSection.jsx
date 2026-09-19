import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const statsList = [
  {
    value: '23+',
    label: 'Years of Experience',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '320+',
    label: '5-Star Clutch Reviews',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '20+',
    label: 'Fortunes 500 Companies',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '200+',
    label: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '95%',
    label: 'Client Retention',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '18+',
    label: 'Industry Served',
    image: '/images/6.webp',
    fallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '2800+',
    label: 'Satisfied Clients',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=200&q=80'
  },
  {
    value: '1500+',
    label: 'Completed Projects',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80',
    fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80'
  }
];

const androidFaqList = [
  {
    id: 1,
    question: '1. Do you create custom Android apps?',
    answer: 'We create Android business apps, e-commerce platforms, social networking apps, utility tools, gaming apps, and corporate solutions. We have the experience to provide a unique solution for your needs.'
  },
  {
    id: 2,
    question: '2. Do you support app updates and maintenance?',
    answer: 'Yes, we offer comprehensive post-launch SLA maintenance, Android OS compatibility updates (Android 14/15+), security patches, bug fixes, third-party API monitoring, and performance tuning.'
  },
  {
    id: 3,
    question: '3. How long does Android app development take?',
    answer: 'A standard MVP or mid-scale application typically takes 6 to 12 weeks. Complex enterprise applications with custom backend microservices and third-party integrations generally require 3 to 6 months.'
  },
  {
    id: 4,
    question: '4. Why hire an android development company?',
    answer: 'A specialized Android development company provides experienced Kotlin and Jetpack Compose architects, strict Google Play Store guidelines compliance, comprehensive multi-device testing, and scalable architecture.'
  },
  {
    id: 5,
    question: '5. What services do Android software development company offer?',
    answer: 'We provide end-to-end custom Android app development, Material Design 3 UI/UX, native Kotlin/Java development, AI & ML on-device integrations, legacy migration, API backend engineering, and Play Store release management.'
  },
  {
    id: 6,
    question: '6. How can Android app development benefit my business?',
    answer: 'Android commands over 70% of the global smartphone operating system market. A dedicated Android application unlocks access to billions of active users, strengthens customer retention, and accelerates digital revenue.'
  },
  {
    id: 7,
    question: '7. What security measures are taken during Android app development?',
    answer: 'We implement end-to-end SSL pinning, AES-256 data encryption, ProGuard and R8 code obfuscation, biometric authentication, secure EncryptedSharedPreferences, and strict OWASP mobile security standards.'
  },
  {
    id: 8,
    question: '8. Where can I find a reliable Android app development company?',
    answer: 'Firevy.co is a globally recognized, top-rated Android app development partner with 23+ years of industry experience, 320+ 5-star Clutch reviews, and 1500+ completed projects trusted by Fortune 500 enterprises.'
  }
];

export const healthcareFaqList = [
  {
    id: 1,
    question: '1. Should the development of a medical app for healthcare professionals begin on iOS or Android?',
    answer: 'It fully depends on the purpose of your medical mobile app development procedure. If you are searching for a platform to facilitate staff communication and have a large crew, use an Android application. However, if you are searching for a platform on which they may communicate encrypted data, medical records, etc., choose iOS since it is naturally more secure.'
  },
  {
    id: 2,
    question: '2. How much do medical applications for healthcare professionals cost to develop?',
    answer: 'The cost to develop a medical application for healthcare professionals depends on the app\'s complexity, features, integrations (like HIPAA compliance, EHR/EMR systems, telemedicine), and chosen platform (iOS, Android, or cross-platform).'
  },
  {
    id: 3,
    question: '3. What makes a health app effective?',
    answer: 'An effective health app requires an intuitive user interface, robust HIPAA-compliant security, real-time data synchronization, seamless EHR integration, reliable communication channels (chat/video), and accurate patient monitoring capabilities.'
  },
  {
    id: 4,
    question: '4. What are Healthcare App Development Services?',
    answer: 'Healthcare App Development Services include building digital solutions for hospitals, physicians, startups, and patients—such as telemedicine platforms, remote patient monitoring, appointment scheduling, e-prescriptions, and medical billing systems.'
  },
  {
    id: 5,
    question: '5. Why should businesses choose Firevy.co for Healthcare App Development?',
    answer: 'Firevy.co brings 23+ years of IT expertise, 320+ 5-star Clutch reviews, certified healthcare developers, HIPAA and GDPR compliance experience, and end-to-end custom healthcare app development tailored to your budget and timelines.'
  },
  {
    id: 6,
    question: '6. How do Healthcare Apps benefit hospitals and patients?',
    answer: 'Healthcare apps benefit hospitals by automating administrative workflows, reducing diagnostic errors, and cutting operating costs. For patients, they offer remote care accessibility, instant doctor consultation, easy medical record management, and improved treatment outcomes.'
  }
];

export const educationFaqList = [
  {
    id: 1,
    question: '1. What characteristics should a mobile app for education possess?',
    answer: 'Online Live sessions, a video player, a repository for session recordings, events, online exams and results, and chat are the essential aspects of any learning and education app.'
  },
  {
    id: 2,
    question: '2. How long does it take to design a mobile app for education?',
    answer: 'The time required for education app development depends on the complexity of features, third-party integrations (video, payment gateways), and UI/UX requirements. Typical projects take 6 to 12 weeks. We offer agile 2-week sprint iterations for fast time-to-market.'
  },
  {
    id: 3,
    question: '3. How much does the education of an educational app cost?',
    answer: 'Developing an educational app depends on the tech stack, features (live video, AI tutor, offline mode), and engagement model. Project estimates range from $15,000 for specialized MVPs to $50,000+ for enterprise multi-institution LMS portals. Send us your project brief for an exact quote.'
  },
  {
    id: 4,
    question: '4. Why should I choose you for education app development?',
    answer: 'We provide 24/7 technical support, deep EdTech domain expertise, 100% transparency, and flexible engagement models. Furthermore, our senior developers align with your timezone to eliminate communication delays.'
  },
  {
    id: 5,
    question: '5. Why choose Firevy.co for Education App Development Services in USA?',
    answer: 'Firevy.co brings 23+ years of IT expertise, 320+ 5-star Clutch reviews, dedicated EdTech engineers, and proven success delivering school ERPs and eLearning mobile applications.'
  },
  {
    id: 6,
    question: '6. What types of education apps do you develop in USA?',
    answer: 'We build a comprehensive suite of EdTech apps including eLearning portals, Learning Management Systems (LMS), virtual classrooms, tutor finder marketplaces, school management ERPs, interactive eBook apps, and AI language apps.'
  },
  {
    id: 7,
    question: '7. Do you provide custom Education App Development Services in USA?',
    answer: 'Yes, our services are 100% customizable to meet your specific requirements—whether you need an eLearning mobile app for students, a teaching tool for tutors, or an enterprise-level LMS for universities.'
  },
  {
    id: 8,
    question: '8. How do your Education App Development Services in USA benefit schools and universities?',
    answer: 'Educational apps improve student engagement through gamification, simplify administrative attendance and fee collection, enable remote teaching, track student progress in real time, and reduce operational overhead.'
  }
];

export const uberFaqList = [
  {
    id: 1,
    question: '1. How tailored will the app be to my business?',
    answer: 'Not by supplying generic off-the-shelf scripts, but by engineering 100% white-label custom solutions have we earned the title of top On-demand app development company. Every application we design is 100% customized to your brand image, color palette, logo, and business workflow.'
  },
  {
    id: 2,
    question: '2. What is the scope of your mobility solutions in Uber-Like App Development?',
    answer: 'Our mobility solutions cover ride-hailing taxi apps, parcel delivery dispatch, cloud kitchen food delivery, female safety rides, child safety transit, and caregiver booking platforms. We build cross-platform solutions for iOS, Android, and Web.'
  },
  {
    id: 3,
    question: '3. Do you provide complete source code and documentation?',
    answer: 'Yes, we provide 100% source code ownership and end-to-end technical documentation, architectural blueprints, and API guides for all solutions developed by our engineering team.'
  },
  {
    id: 4,
    question: '4. Can you distribute my mobile app to the Play Store and App Store?',
    answer: 'Yes! We handle the entire publication process, including Apple App Store and Google Play Store submission guidelines, review approvals, and zero-downtime deployment.'
  },
  {
    id: 5,
    question: '5. What technologies do you use for ride-sharing app development?',
    answer: 'We use Node.js, WebSockets, Flutter, React Native, Kotlin, Swift, PostGIS PostgreSQL, Firebase, and AWS Cloud to ensure sub-second GPS tracking, high scalability, and bank-grade data encryption.'
  },
  {
    id: 6,
    question: '6. What makes Firevy.co a trusted Uber-like app developer?',
    answer: 'With 23+ years of IT expertise, 1,500+ successful projects, and 2,800+ global clients across USA, UK, UAE, and Canada, we deliver robust, high-performance mobility apps backed by 24/7 SLA support.'
  },
  {
    id: 7,
    question: '7. What features are included in your Uber clone app solutions?',
    answer: 'Our Uber clone apps include rider booking, driver dispatch, real-time GPS tracking, surge pricing, fare estimation, multi-payment gateways, ratings & reviews, heat maps, and a central super admin dashboard.'
  },
  {
    id: 8,
    question: '8. How long does it take to build a custom Uber-like app?',
    answer: 'We typically deliver an MVP within 10–12 weeks, and a full enterprise multi-city dispatch solution within 4 to 6 months.'
  },
  {
    id: 9,
    question: '9. What engagement models do you offer for Uber-like app projects?',
    answer: 'We offer flexible models including Dedicated Developer Teams, Fixed Price Contracts, Time & Material hourly contracts, and SLA Maintenance Buckets.'
  }
];

export const iwatchFaqList = [
  {
    id: 1,
    question: '1. How do you make a program for Apple Watch?',
    bullets: [
      "Launch the Appy Pie App builder and choose the 'Create your app' option from the menu.",
      "To proceed, you must provide your company's name and click 'Next.'",
      "Select the category that best meets your requirements",
      "Put the finishing touches on the color scheme for your app.",
      "Make sure you are testing your app on an iPhone device.",
      "After making necessary adjustments to the app's appearance, choose to Save and Continue."
    ]
  },
  {
    id: 2,
    question: '2. What apps are built into the Apple Watch?',
    answer: 'Apple Watch includes native core applications including Activity, Workout, Heart Rate, ECG, Blood Oxygen, Noise, Messages, Phone, Mail, Maps, Calendar, Wallet, Music, Weather, and Reminders, alongside support for third-party watchOS applications.'
  },
  {
    id: 3,
    question: '3. What programming language is Apple Watch written in?',
    answer: "Apple Watch applications are predominantly written in Swift and SwiftUI, leveraging Apple's watchOS SDK, WatchKit framework, HealthKit, and Core Bluetooth to build high-performance, battery-efficient wearable experiences."
  },
  {
    id: 4,
    question: '4. What is iWatch app development, and why is it important for businesses in USA?',
    answer: 'iWatch app development involves creating custom standalone and companion wearable applications tailored for Apple Watch devices. It empowers US businesses to deliver instant on-wrist notifications, biometric health tracking, hands-free convenience, and frictionless interactions that elevate user engagement.'
  },
  {
    id: 5,
    question: '5. How can Firevy.co help with iWatch app development in the USA?',
    answer: 'Firevy.co delivers end-to-end WatchOS app development services across the USA—from wearable UI/UX wireframing and HealthKit integration to native Swift coding, companion iOS sync, BLE pairing, App Store submission, and SLA maintenance.'
  },
  {
    id: 6,
    question: '6. Does Firevy.co provide custom iWatch app development in USA?',
    answer: 'Yes, we provide 100% custom watchOS engineering tailored to your specific business model—including healthcare & fitness trackers, IoT enterprise controls, logistics dispatch, real-time alerts, and contactless NFC solutions.'
  },
  {
    id: 7,
    question: '7. How much does it cost to develop an iWatch app in USA?',
    answer: 'The cost to develop an iWatch app in the USA generally ranges from $15,000 to $45,000+ depending on whether it is an independent standalone watchOS app or paired with an iOS ecosystem, complexity of sensor integrations (HealthKit, GPS, Biometrics), and backend cloud architecture.'
  },
  {
    id: 8,
    question: '8. How long does it take to develop an iWatch app with Firevy.co in USA?',
    answer: 'A standard watchOS application typically takes 4 to 8 weeks for MVP release. Comprehensive enterprise wearable applications with custom watch complications and cloud microservices take approximately 8 to 14 weeks.'
  },
  {
    id: 9,
    question: '9. Why should I choose Firevy.co as my iWatch app development company in USA?',
    answer: 'Firevy.co brings 23+ years of IT engineering excellence, 320+ 5-star Clutch reviews, dedicated Apple-certified Swift/SwiftUI engineers, strict HIPAA & OWASP security compliance, and 1,500+ successful deployments worldwide.'
  },
  {
    id: 10,
    question: '10. Do you provide ongoing support and updates for iWatch apps in USA?',
    answer: 'Yes, we provide 24/7 post-launch SLA maintenance, new watchOS version updates (watchOS 10/11+), bug fixes, battery optimization, API monitoring, and ongoing feature enhancements.'
  }
];

export const kotlinFaqList = [
  {
    id: 1,
    question: '1. Which programming language, Kotlin or Java, is more advantageous and why?',
    answer: "Java is an older programming language that has been used for a long time to power web and android applications. Because of this, Kotlin is a far more sophisticated and superior language than Java. Nevertheless, Kotlin addresses a variety of Java's flaws and deficiencies that are present in the language. If you want to construct an application that won't ever become unstable and is simple to keep up-to-date, you have no choice but to hire Kotlin developers from our company to work on your project."
  },
  {
    id: 2,
    question: '2. How can I hire developers that specialize in Kotlin?',
    answer: 'We make hiring Kotlin developers simple and transparent: 1) Share your project requirements and tech stack scope. 2) We provide candidate profiles matching your seniority needs. 3) Conduct technical interviews with short-listed developers. 4) Select your team and begin onboarding within 48 to 72 hours with zero upfront recruitment fees.'
  },
  {
    id: 3,
    question: '3. Is Kotlin a language used for a website’s front-end or back-end?',
    answer: 'JetBrains, the industry standard bearer when it comes to the creation of IDEs, is responsible for the development of the back-end programming language known as Kotlin. In addition, it develops improved features on top of existing ones to create incredible futuristic applications for your one-of-a-kind ideas. Particularly noteworthy is that the language is seen as a potential successor to Java.'
  },
  {
    id: 4,
    question: '4. What are the benefits of hiring Kotlin developers from Sapphire Solutions?',
    answer: 'Hiring Kotlin developers from Sapphire Solutions gives you access to experienced professionals who specialize in modern Android development, cross-platform integration, and clean, scalable code—all while ensuring on-time delivery and cost efficiency.'
  },
  {
    id: 5,
    question: '5. How can I hire dedicated Kotlin developers for my mobile app project?',
    answer: 'You can hire Kotlin developers by simply reaching out through our contact form or consultation link. Our team will analyze your requirements and assign expert Kotlin developers accordingly, with flexible engagement models.'
  },
  {
    id: 6,
    question: '6. Do your Kotlin developers have experience with cross-platform frameworks like Kotlin Multiplatform?',
    answer: 'Yes, our Kotlin developers are well-versed in Kotlin Multiplatform and can build apps that share code across Android, iOS, and web, ensuring faster development and lower costs.'
  },
  {
    id: 7,
    question: '7. Can I hire a Kotlin developer on an hourly or monthly basis?',
    answer: 'Absolutely. We offer flexible hiring models—hourly, part-time, or full-time—to meet your project’s scope, budget, and timeline.'
  },
  {
    id: 8,
    question: '8. How do you ensure the quality and security of Kotlin applications?',
    answer: 'We follow strict quality assurance protocols, perform code reviews, implement secure coding practices, and ensure all Kotlin-based applications meet the latest security standards and compliance requirements.'
  },
  {
    id: 9,
    question: '9. Why choose Sapphire Solutions as your Kotlin development partner?',
    answer: 'Sapphire Solutions is a trusted Kotlin development company known for its proven track record, agile methodology, global clientele, and end-to-end Kotlin app development services tailored to modern business needs.'
  }
];

export const SapphireFaqSection = ({
  faqList,
  faqs,
  customFaqs,
  items,
  title = "Frequently Asked Questions",
  subtitle = "We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below.",
  initialOpenIndex = 0,
  showPlusIcon = false
}) => {
  const activeFaqs = customFaqs || faqList || faqs || items || kotlinFaqList;
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-9 sm:py-11 lg:py-13 bg-[#005F96] text-white text-left font-sans">
      {/* Centered White Heading & Subtitle */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 space-y-2">
        <h2
          className="font-[800] text-white tracking-tight leading-tight section-content-title"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '34px',
            lineHeight: '41px',
            color: '#FFFFFF'
          }}
        >
          {title}
        </h2>
        <p className="text-[13px] sm:text-[14px] text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto opacity-95">
          {subtitle}
        </p>
      </div>

      {/* Main Floating White Card Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-9 lg:p-11 text-slate-900 shadow-[0_15px_50px_rgba(0,0,0,0.18)] border border-slate-100/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">

            {/* Left Column: 8 Stat Pill Cards & 3 Review Laurel Badges */}
            <div className="lg:col-span-5 space-y-6">
              {/* 8 Stat Cards Grid (2 Columns x 4 Rows) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                {statsList.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-[14px] bg-[#F2F8FD] border border-blue-100/60 flex items-center space-x-2.5 hover:shadow-sm hover:border-sky-300 transition-all duration-300"
                  >
                    <img
                      src={stat.image}
                      alt={stat.label}
                      onError={(e) => {
                        if (stat.fallback && e.target.src !== stat.fallback) {
                          e.target.src = stat.fallback;
                        }
                      }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] object-cover shrink-0 shadow-xs"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1 text-left">
                      <h4 className="text-[14px] sm:text-[15px] font-[800] text-[#005F96] leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] font-[600] text-[#475569] leading-tight mt-1">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 3 Review Laurel Badges (Using authentic leaf SVGs) */}
              <div className="pt-3 flex items-center justify-between gap-1 sm:gap-2 border-t border-slate-100/80">
                {/* Google Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">Google</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">900+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>

                {/* Clutch Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">Clutch</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">320+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>

                {/* GoodFirms Laurel Badge */}
                <div className="flex items-center justify-center space-x-1 flex-1">
                  <img src="/images/left-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                  <div className="flex flex-col items-center text-center px-0.5">
                    <span className="text-[11px] sm:text-[12px] font-[800] text-[#111827] leading-tight">GoodFirms</span>
                    <div className="flex text-[#005F96] text-[9.5px] sm:text-[10.5px] tracking-tight leading-none my-0.5">★★★★★</div>
                    <span className="text-[7px] sm:text-[7.5px] font-[800] text-[#64748B] uppercase tracking-wider">200+ REVIEWS</span>
                  </div>
                  <img src="/images/right-leaf.svg" alt="" className="h-7 sm:h-8 w-auto shrink-0 opacity-80" />
                </div>
              </div>
            </div>

            {/* Right Column: Interactive FAQ Accordion List */}
            <div className="lg:col-span-7 space-y-0 text-left font-sans">
              {activeFaqs.map((faq, index) => {
                let questionText = faq.question || faq.q || faq.title || '';
                const answerText = faq.answer || faq.a || faq.desc || '';
                if (questionText && !/^\s*\d+\./.test(questionText)) {
                  questionText = `${index + 1}. ${questionText}`;
                }
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-slate-200/80 py-3.5 first:pt-0 last:border-b-0 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-4 group cursor-pointer focus:outline-none select-none py-0.5"
                    >
                      <h3
                        className={`text-[13.5px] sm:text-[14.5px] font-[700] leading-snug transition-colors flex-1 ${
                          isOpen ? 'text-[#005F96]' : 'text-[#0F172A] group-hover:text-[#005F96]'
                        }`}
                      >
                        {questionText}
                      </h3>
                      {showPlusIcon && (
                        <span
                          className={`shrink-0 text-[18px] sm:text-[20px] font-bold leading-none transition-transform duration-200 ${
                            isOpen ? 'text-[#005F96] rotate-45' : 'text-slate-400 group-hover:text-[#005F96]'
                          }`}
                        >
                          +
                        </span>
                      )}
                    </button>

                    {/* Smooth Expandable Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2.5 pb-1 text-[12.5px] sm:text-[13px] text-[#475569] font-normal leading-[1.68]">
                            {Array.isArray(faq.bullets) ? (
                              <ul className="space-y-1.5 list-disc pl-5 my-1 text-slate-700">
                                {faq.bullets.map((bulletItem, bIdx) => (
                                  <li key={bIdx} className="leading-relaxed">
                                    {bulletItem}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p>{answerText}</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SapphireFaqSection;
