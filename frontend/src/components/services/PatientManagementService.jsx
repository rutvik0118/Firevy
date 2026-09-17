import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Container from '../common/Container';
import SEO from '../common/SEO';

// Reusable Components matching Data Annotation & Data Cleansing
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import ProudAwardsBanner from './ProudAwardsBanner';
import AndroidHiringModels from './AndroidHiringModels';
import InnovativeSolutionsVideoSection from './InnovativeSolutionsVideoSection';
import OurStoryTheirWordsSection from './OurStoryTheirWordsSection';
import TrustedBrandsGrid from '../common/TrustedBrandsGrid';
import SuccessMatrix from '../common/SuccessMatrix';
import FeaturedInBrandsSection from './FeaturedInBrandsSection';
import DigitalTransformationSlider from '../common/DigitalTransformationSlider';
import MobileAppRecentBlogsSection from './MobileAppRecentBlogsSection';
import WhatSetsUsApartSection from '../common/WhatSetsUsApartSection';
import IWatchChallengeCtaBanner from './IWatchChallengeCtaBanner';

// Custom Sections
import PatientManagementCuttingEdgeTechSection from './PatientManagementCuttingEdgeTechSection';
import PatientManagementExpertiseServices from './PatientManagementExpertiseServices';

export const PatientManagementService = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // 6 Custom Patient Management Solutions
  const patientSolutions = [
    {
      id: 1,
      title: 'Inpatient & Outpatient Administration',
      desc: 'Complete patient journey automation from digital self-check-in and queue triage to real-time bed tracking, ward occupancy, and seamless discharge workflows.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="8" width="28" height="24" rx="3" />
          <path d="M6 16h28" />
          <path d="M14 24h6M14 28h10" strokeLinecap="round" />
          <circle cx="27" cy="25" r="2.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Electronic Health Records (EHR/EMR) Integration',
      desc: 'Centralized patient clinical records, doctor consultation notes, past medical histories, dynamic charting, and bi-directional HL7/FHIR sync with hospital systems.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 6h14l8 8v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <polyline points="24,6 24,14 32,14" />
          <path d="M16 22h8M20 18v8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Automated Billing & Revenue Cycle Management (RCM)',
      desc: 'Automated ANSI EDI 837 claim submission, real-time insurance eligibility checks, electronic remittance (EDI 835), patient copays, and integrated clearinghouses.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="7" y="10" width="26" height="20" rx="3" />
          <path d="M7 17h26" />
          <circle cx="14" cy="23" r="1.5" fill="#0084D1" />
          <path d="M21 23h6" strokeLinecap="round" />
          <path d="M20 6v4M12 6v4M28 6v4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Patient Engagement & Mobile Health Portals',
      desc: 'Empower patients with 24/7 web & mobile portals for appointment booking, digital prescriptions, lab report downloads, secure chat, and medication reminders.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="12" y="6" width="16" height="28" rx="3" />
          <circle cx="20" cy="29" r="1.5" fill="#0084D1" />
          <line x1="17" y1="10" x2="23" y2="10" strokeLinecap="round" />
          <path d="M16 18l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Laboratory & Pharmacy Information Systems (LIS/PIS)',
      desc: 'Automated lab test ordering, specimen barcode tracking, automated analyzer telemetry, e-prescriptions, and hospital pharmacy stock dispensation.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 6h8M20 6v10l-7 14a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-7-14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24h12" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Telemedicine & Remote Patient Monitoring (RPM)',
      desc: 'HIPAA-compliant WebRTC video consultations, real-time medical IoT wearable vitals sync, and automated clinician follow-up workflows for virtual care delivery.',
      icon: (
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="6" y="10" width="20" height="18" rx="3" />
          <path d="M26 15l8-4v16l-8-4v-8z" />
          <path d="M11 19h2l1.5-3 2 6 1.5-3h2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  // 6 Benefits of Patient Management Services
  const patientBenefits = [
    {
      title: 'Streamlined Patient Onboarding & Intake',
      desc: 'Digitize patient registration with touchless self-check-in kiosks and mobile intake forms, cutting lobby wait times by over 45% and eliminating duplicate records.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="6" />
          <path d="M12 36v-3a8 8 0 0 1 16 0v3" />
          <path d="M30 18l4 4 8-8" />
        </svg>
      )
    },
    {
      title: 'Real-Time Bed & Resource Optimization',
      desc: 'Live visual hospital dashboards track bed availability, operating theater schedules, nurse assignments, and medical equipment utilization to maximize facility efficiency.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="14" width="32" height="22" rx="3" />
          <path d="M12 24h6M12 30h14" />
          <circle cx="32" cy="27" r="3" />
          <path d="M14 10v4M34 10v4" />
        </svg>
      )
    },
    {
      title: 'Full HIPAA, GDPR & HL7/FHIR Compliance',
      desc: 'Bank-grade AES-256 data encryption, role-based access control, comprehensive audit trails, and strict adherence to healthcare privacy mandates give you complete security peace of mind.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 6L10 12v10c0 10 5.8 17.2 14 19 8.2-1.8 14-9 14-19V12L24 6z" />
          <path d="M18 23l4 4 8-8" />
        </svg>
      )
    },
    {
      title: 'Automated Billing & Rapid Claim Reimbursement',
      desc: 'Drastically reduce claim rejection rates with automated medical coding validation, ANSI EDI 837 claim batching, and automated patient payment gateway integration.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="9" width="26" height="32" rx="3" />
          <path d="M18 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M16 19l2 2 4-4" />
          <line x1="25" y1="19" x2="31" y2="19" />
          <path d="M16 27l2 2 4-4" />
          <line x1="25" y1="27" x2="31" y2="27" />
          <path d="M16 35l2 2 4-4" />
          <line x1="25" y1="35" x2="31" y2="35" />
        </svg>
      )
    },
    {
      title: 'Integrated Teleconsultation & Virtual Care',
      desc: 'Expand clinical reach beyond hospital walls with one-click browser and mobile video visits, digital prescription dispatches, and secure remote patient vital sync.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="12" width="22" height="20" rx="3" />
          <path d="M30 18l10-5v18l-10-5v-8z" />
          <path d="M13 22h3l2-4 3 8 2-4h3" />
        </svg>
      )
    },
    {
      title: 'Actionable Clinical Insights & Reporting',
      desc: 'Interactive BI dashboards deliver real-time metrics on patient recovery trends, clinical outcomes, physician productivity, and department-level financial performance.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-11 h-11 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="8" width="32" height="32" rx="4" />
          <line x1="16" y1="32" x2="16" y2="24" />
          <line x1="24" y1="32" x2="24" y2="16" />
          <line x1="32" y1="32" x2="32" y2="20" />
          <circle cx="32" cy="16" r="2" fill="#0084D1" />
        </svg>
      )
    }
  ];

  // Success Stories (3 Case Studies)
  const patientSuccessCards = [
    {
      id: 1,
      title: 'Multi-Specialty Hospital Enterprise Patient Flow & EHR Platform',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'Cloud-Based Dental & Outpatient Practice Management Software',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Telehealth & Remote Vitals Monitoring Mobile Application',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // 9 Complete FAQs (Firevy.co Branded)
  const patientFaqs = [
    {
      question: '1. What is a Patient Management System (PMS) and why is it essential?',
      answer: 'A Patient Management System (PMS) is an integrated healthcare software platform that coordinates patient registration, appointment scheduling, electronic health records (EHR), clinical charting, medical billing, and lab orders. It eliminates administrative bottlenecks, reduces medical errors, accelerates revenue cycles, and enhances the patient care experience.'
    },
    {
      question: '2. Is Firevy.co’s Patient Management System HIPAA and GDPR compliant?',
      answer: 'Yes, absolutely. We design healthcare architectures with zero-trust security principles. All patient data is encrypted with AES-256 at rest and TLS 1.3 in transit. Our solutions include role-based access controls (RBAC), multi-factor authentication, tamper-proof audit trails, and strict compliance with HIPAA, HITECH, and GDPR mandates.'
    },
    {
      question: '3. Can your system integrate with existing EHRs like Epic, Cerner, or Allscripts?',
      answer: 'Yes. We build interoperable systems utilizing industry standards such as HL7 (v2 & v3) and HL7 FHIR (Fast Healthcare Interoperability Resources). This enables smooth bi-directional synchronization of patient demographics, clinical notes, diagnostic test orders, and medical histories with leading hospital EHRs.'
    },
    {
      question: '4. Do you support specialized clinics like Dental, Ophthalmology, or Pediatrics?',
      answer: 'Yes. We engineer customized practice management software tailored to specific clinical specialties. For instance, our dental PMS solutions include graphical tooth charting, periodontal exams, lab cases, and tailored treatment plans alongside standard appointment and billing modules.'
    },
    {
      question: '5. Does the software include patient self-service portals and mobile apps?',
      answer: 'Yes. We build responsive web portals and native iOS/Android mobile applications that enable patients to book appointments, complete digital intake forms, view diagnostic results, conduct virtual teleconsultations, and pay copays securely.'
    },
    {
      question: '6. How does automated insurance claim billing work in your system?',
      answer: 'Our software automates the Revenue Cycle Management (RCM) workflow by validating ICD-10 and CPT codes, checking real-time patient insurance eligibility via EDI 270/271, submitting electronic ANSI 837 claims to clearinghouses, and reconciling EDI 835 payment remittances automatically.'
    },
    {
      question: '7. Can the platform support telemedicine and virtual consultations?',
      answer: 'Yes. We integrate secure WebRTC audio/video teleconsultations directly into the patient portal and doctor scheduling dashboard, complete with digital screen sharing, in-call clinical notes, and electronic prescription (eRx) generation.'
    },
    {
      question: '8. How long does it take to develop and deploy a custom Patient Management System?',
      answer: 'A modular clinic PMS MVP typically deploys within 6 to 10 weeks, while an enterprise-wide multi-facility hospital information system with custom integrations usually requires 12 to 20 weeks. We provide phased rollouts to ensure uninterrupted patient care.'
    },
    {
      question: '9. How can we get started with Firevy.co for our healthcare organization?',
      answer: 'You can reach out through our contact form to schedule an initial architecture consultation. Our healthcare software specialists will review your clinical workflows, compliance requirements, and integration needs to provide a tailored blueprint and cost estimate within 24 hours.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Dynamic SEO Meta */}
      <SEO
        title="Patient Management System Development Company | Custom Healthcare Software"
        description="Firevy.co is a premier Patient Management System Development Company. We build HIPAA-compliant hospital information systems, EHR/EMR platforms, clinic scheduling software, and telemedicine portals."
        keywords="Patient Management System, Hospital Information System, EHR EMR software, clinic management system, healthcare software development, dental practice software, telemedicine portal"
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-14 sm:pb-20 bg-gradient-to-b from-[#F0F7FC] via-[#F7FAFD] to-white overflow-hidden text-left border-b border-slate-100">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Heading, Subtext, Badges, CTA */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Rating Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                  <span className="font-bold text-[#005F96]">Clutch</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">4.9/5</span>
                </div>
                <div className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                  <span className="font-bold text-slate-700">GoodFirms</span>
                  <span className="font-bold text-slate-800">4.9/5</span>
                </div>
                <div className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                  <span className="font-bold text-slate-700">Google</span>
                  <span className="font-bold text-slate-800">4.8/5</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-[32px] sm:text-[42px] lg:text-[46px] font-[800] text-[#0B0F19] tracking-tight leading-[1.18]">
                Patient Management System Development Company
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[14px] sm:text-[15.5px] text-[#475569] font-normal leading-[1.75] max-w-2xl">
                Transform healthcare delivery with intelligent Patient Management Systems. Firevy.co engineers HIPAA-compliant, cloud-native patient management software that unifies patient registration, digital scheduling, EHR/EMR integration, automated billing, and clinical workflows for hospitals, clinics, and health networks.
              </p>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">99.9%</div>
                  <div className="text-xs text-slate-600 font-medium">HIPAA Uptime</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">200+</div>
                  <div className="text-xs text-slate-600 font-medium">Hospital Deploys</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">45%</div>
                  <div className="text-xs text-slate-600 font-medium">Faster Intake</div>
                </div>
                <div className="bg-[#F4F8FA] rounded-xl p-3.5 border border-slate-100 text-center">
                  <div className="text-xl font-extrabold text-[#005F96]">24/7</div>
                  <div className="text-xs text-slate-600 font-medium">Mission SLA</div>
                </div>
              </div>

              {/* Single "Let's Talk" CTA */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src="/images/patient_management_hero.jpg"
                  alt="Modern Patient Management System & Healthcare Software"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. BRAND LOGO MARQUEE                                                     */}
      {/* ========================================================================= */}
      <BrandLogoMarquee />

      {/* ========================================================================= */}
      {/* 3. HIGH-PRECISION PATIENT MANAGEMENT SOLUTIONS (Image Left + Text Right)  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Pipeline Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src="/images/patient_management_pipeline.jpg"
                  alt="Hospital Patient Clinical Workflow Pipeline"
                  className="w-full h-auto object-contain rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-[1.2]">
                Count on us for Intelligent Patient Management System Development
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Modern healthcare providers require robust, intuitive, and interoperable software systems to manage increasing patient volumes while upholding rigorous clinical standards. Disconnected paper charts and legacy portals lead to administrative bottlenecks, delayed diagnoses, and patient frustration.
              </p>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.8]">
                Our patient management software engineering team develops unified digital health solutions that connect patients, clinicians, laboratories, and billing departments in real-time. From touchless registration kiosks and AI-powered scheduling to comprehensive EHR integration, we empower healthcare organizations to deliver superior clinical care.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. AWARDS & TRUST RECOGNITION CLUTCH BANNER                               */}
      {/* ========================================================================= */}
      <ClutchTopRatedBanner title="World Wide Top Rated IT Company on Clutch" />

      {/* ========================================================================= */}
      {/* 5. LEADING PATIENT MANAGEMENT SYSTEM SOFTWARE (Quote Card + Narrative)    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden">
        <Container className="max-w-6xl">
          {/* Centered Main Section Heading Matching Reference Screenshot */}
          <h2 className="text-center text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-10 sm:mb-14">
            Leading Patient Management System Software
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Soft Blue Quote Card with Topographic Lines & Speech Pointer */}
            <div className="lg:col-span-5 bg-[#EFF7FE] border border-[#BAE6FD]/90 rounded-[16px] p-8 sm:p-10 flex flex-col justify-center relative shadow-xs min-h-[320px] group transition-all duration-300 hover:shadow-md">
              {/* Subtle Topographical Background Waves */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-transform duration-700 group-hover:scale-105"
                viewBox="0 0 340 340"
                fill="none"
              >
                <path d="M-20 60 C80 20, 160 100, 240 50 C290 10, 320 80, 360 40" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 180 C80 140, 160 220, 240 170 C290 140, 320 210, 360 180" stroke="#005F96" strokeWidth="2" />
                <path d="M-20 300 C80 260, 160 340, 240 290 C290 260, 320 330, 360 300" stroke="#005F96" strokeWidth="2" />
              </svg>

              {/* Speech bubble pointer arrow pointing right towards narrative */}
              <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFF7FE] z-20" />
              <div className="hidden lg:block absolute -right-[14px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[11px] border-y-transparent border-l-[14px] border-l-[#BAE6FD] z-10" />

              {/* Solid Blue Quote Glyph */}
              <div className="mb-3 relative z-10">
                <svg viewBox="0 0 40 32" className="w-10 h-8 text-[#005F96] fill-current">
                  <path d="M0 18.667C0 8.36 6.222 0 17.778 0v7.111C11.556 7.111 8.889 11.556 8 16h9.778v16H0V18.667zm22.222 0C22.222 8.36 28.444 0 40 0v7.111C33.778 7.111 31.111 11.556 30.222 16H40v16H22.222V18.667z" />
                </svg>
              </div>

              {/* Card Title */}
              <h3 className="text-[26px] sm:text-[30px] lg:text-[32px] font-[800] text-[#005F96] leading-[1.22] tracking-tight relative z-10 font-sans">
                Smart Software<br />Development for<br />Secure Applications
              </h3>
            </div>

            {/* Right Column: Detailed Narrative (Exact 1:1 Match to Reference Screenshot) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-[13.5px] sm:text-[14.5px] text-[#475569] leading-[1.78] font-normal text-left">
              <p>
                Our Patient Management Information Systems are meant to heighten operational effectiveness and patient satisfaction. Committed to strong compliance, security, and user friendliness, we create intelligent, interactive, and high-performance solutions that are specifically crafted to address the unique demands of healthcare facilities. From handling hundreds to thousands of patients on a daily basis, our solutions grow seamlessly to accommodate your expansion.
              </p>
              <p>
                We've delivered successful global Patient Management System Software projects to hospitals, research institutions, and private practices. Supported by a talented development team, we integrate with third-party APIs, EHRs, and legacy systems seamlessly. Our agile development process guarantees each module — from patient intake through to care delivery — is built to your objectives in mind.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CUTTING-EDGE TECH SECTION                                              */}
      {/* ========================================================================= */}
      <PatientManagementCuttingEdgeTechSection companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 7. CUSTOM PATIENT MANAGEMENT SOLUTIONS GRID (6 Cards)                     */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white text-slate-900 font-sans text-left overflow-hidden border-t border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Custom Patient Management Solutions for Healthcare Enterprises
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
              From standalone private clinics to nationwide multi-specialty hospital networks, our engineering team crafts tailored patient management software modules built for clinical efficacy, regulatory compliance, and rapid adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {patientSolutions.map((solution) => (
              <div
                key={solution.id}
                className="rounded-[16px] bg-[#F8FAFC] p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-lg hover:border-[#CCE8FA] hover:bg-[#F0F7FC] transition-all duration-300 flex flex-col justify-between group cursor-pointer text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-2xs border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-[#475569] text-[12.5px] sm:text-[13px] leading-[1.65] font-normal">
                    {solution.desc}
                  </p>
                </div>

                <div className="pt-4 text-left">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#005F96] hover:text-[#004B77] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. SUCCESS STORIES (3 Portfolio Cards)                                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden border-t border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Success Stories
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
              Discover how our specialized Patient Management System software helps hospitals and clinics automate care, accelerate billing, and enhance patient satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {patientSuccessCards.map((card) => (
              <div
                key={card.id}
                className="rounded-[16px] overflow-hidden bg-white border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer text-left"
              >
                <div className="relative w-full h-[210px] sm:h-[220px] bg-[#EAF5FC] flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {card.badge && (
                    <span className="absolute top-3 right-3 bg-[#005F96] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="font-[800] text-[15.5px] sm:text-[16.5px] text-[#0B0F19] leading-snug tracking-tight mb-3">
                    {card.title}
                  </h3>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#005F96] hover:text-[#004B77] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-7 py-3 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[14px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROUD AWARDS MARQUEE BANNER                                            */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 10. BENEFITS OF OUR PATIENT MANAGEMENT SYSTEM SERVICES                    */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden border-t border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Benefits of Our Patient Management System Development Services
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
              Our Patient Management Software engineering services give hospitals, clinics, and medical practices the technology to eliminate paper bottlenecks, accelerate care delivery, and improve bottom-line revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {patientBenefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-[16px] bg-[#F8FAFC] p-6 sm:p-7 border border-slate-100 shadow-2xs hover:shadow-lg hover:border-[#CCE8FA] hover:bg-[#F0F7FC] transition-all duration-300 flex flex-col justify-start group cursor-pointer text-left"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-snug tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#475569] text-[12.5px] sm:text-[13px] leading-[1.65] font-normal">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. COMPREHENSIVE EXPERTISE CAROUSEL                                      */}
      {/* ========================================================================= */}
      <PatientManagementExpertiseServices />

      {/* ========================================================================= */}
      {/* 12. HIRING MODELS                                                         */}
      {/* ========================================================================= */}
      <AndroidHiringModels title="Patient Management Software Development" />

      {/* ========================================================================= */}
      {/* 13. INNOVATIVE SOLUTIONS VIDEO SECTION                                    */}
      {/* ========================================================================= */}
      <InnovativeSolutionsVideoSection />

      {/* ========================================================================= */}
      {/* 14. PROCESS WE FOLLOW (8-Step Healthcare Software Lifecycle)             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden border-t border-slate-100">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Process We Follow
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto">
              Our proven 8-step healthcare software development lifecycle guarantees regulatory compliance, architectural integrity, clinical accuracy, and seamless hospital adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { step: '01', title: 'Clinical Discovery & Compliance', desc: 'Analyzing clinical workflows, HIPAA/GDPR constraints, hospital IT infrastructure, and HL7/FHIR requirements.' },
              { step: '02', title: 'User Experience & Clinical UI', desc: 'Designing intuitive doctor, nurse, and patient interfaces optimized for speed, clarity, and zero data entry errors.' },
              { step: '03', title: 'Cloud Architecture & Security', desc: 'Architecting zero-trust microservices on HIPAA-compliant cloud hosting with AES-256 encryption at rest and in transit.' },
              { step: '04', title: 'EHR, FHIR & API Integration', desc: 'Connecting legacy hospital databases, laboratory machines, pharmacy inventories, and third-party EHR systems.' },
              { step: '05', title: 'Clinical Testing & QA Validation', desc: 'Rigorous end-to-end testing including stress simulations, penetration audits, and patient journey validation.' },
              { step: '06', title: 'Pilot Department Deployment', desc: 'Staged departmental rollout with hands-on staff training to ensure frictionless adoption and care continuity.' },
              { step: '07', title: 'Full Hospital Go-Live', desc: 'Production deployment, secure historical data migration, and live monitoring across all clinical workstations.' },
              { step: '08', title: '24/7 SLA Support & Updates', desc: 'Continuous compliance maintenance, security patch management, performance tuning, and 24/7 technical assistance.' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[16px] p-5 sm:p-6 border border-slate-100 hover:border-[#CCE8FA] hover:bg-[#F0F7FC] transition-all duration-300 text-left shadow-2xs group cursor-pointer"
              >
                <div className="text-2xl font-[900] text-[#0084D1] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="font-[800] text-[15.5px] text-[#0B0F19] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-[12px] sm:text-[12.5px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 15. CLIENT TESTIMONIALS (Our Story, Their Words)                          */}
      {/* ========================================================================= */}
      <OurStoryTheirWordsSection />

      {/* ========================================================================= */}
      {/* 16. TRUSTED BRANDS GRID & SUCCESS MATRIX                                  */}
      {/* ========================================================================= */}
      <TrustedBrandsGrid />
      <SuccessMatrix />
      <FeaturedInBrandsSection />
      <DigitalTransformationSlider />

      {/* ========================================================================= */}
      {/* 17. 9 COMPREHENSIVE PATIENT MANAGEMENT SYSTEM FAQS                         */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white font-sans text-left overflow-hidden border-t border-slate-100">
        <Container className="max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our Patient Management System software engineering services, HIPAA compliance, and integrations.
            </p>
          </div>

          <div className="space-y-3.5">
            {patientFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-[12px] border border-slate-200 overflow-hidden bg-white transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-[700] text-[15px] sm:text-[16px] text-[#0B0F19] hover:text-[#005F96] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl font-bold text-[#005F96] ml-4 shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-[13px] sm:text-[14px] text-[#475569] leading-relaxed font-normal border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 18. RECENT HEALTHCARE BLOGS & INSIGHTS                                    */}
      {/* ========================================================================= */}
      <MobileAppRecentBlogsSection />

      {/* ========================================================================= */}
      {/* 19. WHAT SETS US APART                                                    */}
      {/* ========================================================================= */}
      <WhatSetsUsApartSection />

      {/* ========================================================================= */}
      {/* 20. CHALLENGE CTA BANNER                                                  */}
      {/* ========================================================================= */}
      <IWatchChallengeCtaBanner
        heading="Have an Incredible Patient Management Software Concept?"
        text="Our healthtech specialists are ready to architect and engineer your secure, HIPAA-compliant patient management system."
        buttonText="Get Free Healthcare Consultation"
      />
    </div>
  );
};

export default PatientManagementService;
