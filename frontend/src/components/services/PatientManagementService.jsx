import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Container from '../common/Container';
import SEO from '../common/SEO';

// Reusable Components matching Data Annotation & Data Cleansing
import BrandLogoMarquee from '../common/BrandLogoMarquee';
import ClutchTopRatedBanner from '../common/ClutchTopRatedBanner';
import PremiumServicesGrid from '../common/PremiumServicesGrid';
import SuccessStoriesSection from '../common/SuccessStoriesSection';
import ProcessWeFollow from '../common/ProcessWeFollow';
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
import SapphireFaqSection from '../common/SapphireFaqSection';

export const PatientManagementService = () => {
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

  // 6 Why Choose Us Cards (Exact 1:1 Match to Reference Screenshot)
  const whyChoosePatientManagement = [
    {
      title: 'HIPAA-Compliant Security',
      desc: 'Our solutions are compliant with international compliance standards such as HIPAA, GDPR, and HL7 standards to secure patient data.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8a2 2 0 0 1 2-2h14l8 8v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8z" />
          <polyline points="28 6 28 16 36 16" />
          <line x1="18" y1="22" x2="24" y2="22" />
          <line x1="18" y1="28" x2="22" y2="28" />
          <path d="M26 24c0 6 6 10 6 10s6-4 6-10v-4l-6-2-6 2v4z" fill="#E0F2FE" />
          <path d="M29 27l2 2 4-4" stroke="#0084D1" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      title: 'Cloud-Based Scalability',
      desc: 'Scale your Patient Management System effortlessly across departments and geographies without performance constraints.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="19" y="19" width="10" height="10" rx="2" fill="#E0F2FE" stroke="#0084D1" />
          <circle cx="24" cy="24" r="2" fill="#0084D1" />
          <path d="M24 19V10" />
          <path d="M20 12l4-4 4 4" />
          <path d="M24 29v9" />
          <path d="M20 36l4 4 4-4" />
          <path d="M19 24h-9" />
          <path d="M12 20l-4 4 4 4" />
          <path d="M29 24h9" />
          <path d="M36 20l4 4-4 4" />
          <circle cx="14" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="34" cy="14" r="1.5" fill="#0084D1" />
          <circle cx="14" cy="34" r="1.5" fill="#0084D1" />
          <circle cx="34" cy="34" r="1.5" fill="#0084D1" />
        </svg>
      )
    },
    {
      title: 'Real-Time Data Access',
      desc: 'Physicians, nurses, and staff can view and update patient data in real-time, ensuring smooth coordination.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="26" height="20" rx="2.5" />
          <line x1="8" y1="24" x2="34" y2="24" />
          <circle cx="13" cy="17" r="1.5" fill="#0084D1" />
          <rect x="26" y="22" width="14" height="11" rx="2" fill="#E0F2FE" stroke="#0084D1" />
          <path d="M29 22v-3a4 4 0 0 1 8 0v3" />
          <circle cx="33" cy="27" r="1.5" fill="#0084D1" />
          <path d="M20 33l-3 4-2-2" />
          <line x1="16" y1="30" x2="22" y2="30" />
          <path d="M18 30v6" />
          <line x1="14" y1="36" x2="22" y2="36" />
        </svg>
      )
    },
    {
      title: 'Improved Patient Engagement',
      desc: 'Engage patients with easy-to-use portals for appointments, prescriptions, and communication with providers.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="12" r="6" fill="#E0F2FE" stroke="#0084D1" />
          <path d="M24 9v6M21 12h6" stroke="#0084D1" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="24" cy="26" r="3.5" />
          <path d="M18 38c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="13" cy="28" r="2.8" />
          <path d="M8 38c0-2.8 2.2-5 5-5 1.2 0 2.3.4 3.1 1.2" />
          <circle cx="35" cy="28" r="2.8" />
          <path d="M32 34.2c.8-.8 1.9-1.2 3.1-1.2 2.8 0 5 2.2 5 5" />
        </svg>
      )
    },
    {
      title: 'Advanced Analytics & Reporting',
      desc: 'Create actionable insights from patient information using integrated analytics for enhanced decision-making and treatment planning.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="7" y="8" width="28" height="24" rx="2.5" />
          <path d="M13 24l4-5 4 3 6-7" stroke="#0084D1" strokeWidth="1.8" />
          <rect x="11" y="21" width="3" height="6" fill="#E0F2FE" stroke="#0084D1" />
          <rect x="18" y="17" width="3" height="10" fill="#E0F2FE" stroke="#0084D1" />
          <rect x="25" y="13" width="3" height="14" fill="#E0F2FE" stroke="#0084D1" />
          <circle cx="33" cy="31" r="7" fill="white" stroke="#0084D1" strokeWidth="2" />
          <path d="M38 36l5 5" stroke="#0084D1" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 31h6M33 28v6" stroke="#0084D1" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Personalized Modules for Each Facility',
      desc: 'From major hospitals to specialty clinics, our system is modular and designed to address particular operational requirements.',
      icon: (
        <svg viewBox="0 0 48 48" className="w-12 h-12 text-[#0084D1]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="18" r="10" fill="#E0F2FE" stroke="#0084D1" />
          <circle cx="16" cy="15" r="3.5" />
          <path d="M10 24c0-2.8 2.7-4 6-4s6 1.2 6 4" />
          <line x1="30" y1="14" x2="42" y2="14" />
          <circle cx="34" cy="14" r="2.5" fill="#0084D1" />
          <line x1="30" y1="22" x2="42" y2="22" />
          <circle cx="39" cy="22" r="2.5" fill="#0084D1" />
          <line x1="30" y1="30" x2="42" y2="30" />
          <circle cx="33" cy="30" r="2.5" fill="#0084D1" />
          <rect x="6" y="32" width="20" height="7" rx="2" fill="white" stroke="#0084D1" />
          <line x1="10" y1="35.5" x2="22" y2="35.5" />
        </svg>
      )
    }
  ];

  // Success Stories (Exact 1:1 Match to Reference Screenshot)
  const patientSuccessCards = [
    {
      id: 1,
      title: 'Document Quality Analyzer Website Development',
      image: '/images/success_stories/redetect.svg',
      badge: 'Case Study'
    },
    {
      id: 2,
      title: 'File Sharing App Development',
      image: '/images/success_stories/file_sharing_application.svg'
    },
    {
      id: 3,
      title: 'Data Analytics Website Development',
      image: '/images/success_stories/data_analytics.svg'
    }
  ];

  // FAQs matching reference screenshot 1:1
  const patientFaqs = [
    {
      question: '1. What is a Patient Management System?',
      answer: 'A Patient Management System is a software platform that helps healthcare providers manage patient information, appointments, medical histories, billing, and communication in a centralized system.'
    },
    {
      question: '2. What makes your Patient Record Management System secure?',
      answer: 'Our solutions implement AES-256 encryption at rest and TLS 1.3 in transit, role-based access control, multi-factor authentication, audit logging, and strict compliance with HIPAA, HITECH, and GDPR mandates.'
    },
    {
      question: '3. Can your system be integrated with existing hospital software?',
      answer: 'Yes, we support HL7 and FHIR standards to integrate seamlessly with legacy hospital information systems, EHRs, laboratory equipment, and third-party diagnostic tools.'
    },
    {
      question: '4. How scalable is your Patient Data Management System?',
      answer: 'Built on cloud-native microservices architecture, our platform effortlessly scales to support high-volume patient intake, multiple hospital departments, and distributed multi-clinic networks.'
    },
    {
      question: '5. What platforms do you support — web or mobile?',
      answer: 'We provide responsive web applications for clinical workstations along with native and cross-platform mobile apps for iOS and Android for doctors, nurses, and patients.'
    },
    {
      question: '6. Can patients access their health records online?',
      answer: 'Yes, patients have access to secure 24/7 self-service patient portals to view medical records, lab reports, schedule appointments, request prescription refills, and communicate with healthcare providers.'
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
      {/* 7. OUR PREMIUM SERVICES (MATCHING REFERENCE SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <PremiumServicesGrid companyName="Firevy.co" />

      {/* ========================================================================= */}
      {/* 8. SUCCESS STORIES (MATCHING REFERENCE SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <SuccessStoriesSection
        cards={patientSuccessCards}
        subtitle="Know Firevy.co journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients."
      />

      {/* ========================================================================= */}
      {/* 9. PROUD AWARDS MARQUEE BANNER                                            */}
      {/* ========================================================================= */}
      <ProudAwardsBanner />

      {/* ========================================================================= */}
      {/* 10. WHY CHOOSE US FOR PATIENT MANAGEMENT SYSTEM (1:1 MATCH TO REFERENCE)  */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] font-sans text-left overflow-hidden border-t border-slate-200/70">
        <Container className="max-w-6xl">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-[800] text-[#0B0F19] tracking-tight leading-tight mb-3 font-sans">
              Why Choose Us for Patient Management System
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-relaxed max-w-3xl mx-auto font-sans">
              When it comes to developing an industry-leading Patient Data Management System, our strength is strategic thinking, profound domain knowledge, and steady delivery of outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChoosePatientManagement.map((item, index) => (
              <div
                key={index}
                className="rounded-[16px] bg-white p-6 sm:p-7 border border-slate-200/70 shadow-xs hover:shadow-lg hover:border-[#CCE8FA] transition-all duration-300 flex flex-col justify-start group cursor-pointer text-left"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="font-[800] text-[17px] sm:text-[18px] text-[#0B0F19] mb-2 leading-snug tracking-tight font-sans">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-[13px] sm:text-[13.5px] leading-[1.68] font-normal font-sans">
                  {item.desc}
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
      {/* 14. PROCESS WE FOLLOW (1:1 MATCH TO REFERENCE COMPONENT)                  */}
      {/* ========================================================================= */}
      <ProcessWeFollow />

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
      {/* 17. FREQUENTLY ASKED QUESTIONS (SapphireFaqSection 1:1 Match)              */}
      {/* ========================================================================= */}
      <SapphireFaqSection
        title="Frequently Asked Questions"
        subtitle="We listen to query and provide solutions that captivate users. Feel free to contact us in case of any query which is not mention below."
        faqs={patientFaqs}
      />

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
