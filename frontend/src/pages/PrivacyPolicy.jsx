import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import NewsletterSubscribeBanner from '../components/common/NewsletterSubscribeBanner';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title="Privacy Policy | Firevy.co"
        description="Privacy policy and data protection standards for Firevy.co Software Solutions."
        canonical="/privacy-policy"
      />

      {/* 1. HERO BANNER: SOFT BLUE BACKGROUND WITH TITLE, DESCRIPTION, CTA & 3D ISOMETRIC ILLUSTRATION */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#EAF4FA] text-left font-sans w-full overflow-hidden border-b border-slate-200/80">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & CTA Button */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-[800] text-slate-950 tracking-tight leading-tight font-sans">
                Privacy Policy
              </h1>
              
              <p className="text-[14px] sm:text-[15px] font-[400] text-slate-600 leading-relaxed font-sans max-w-xl">
                Firevy.co is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-[#006085] hover:bg-[#004A6B] text-white font-[600] text-[14px] px-7 py-3 rounded-[6px] shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Isometric Illustration */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
                <img
                  src="/images/privacy_policy_hero.jpg"
                  alt="Privacy Policy & Security Illustration"
                  className="w-full h-auto object-contain drop-shadow-md rounded-2xl"
                  loading="eager"
                  onError={(e) => {
                    e.target.src = '/images/c_sharp_expertise_illustration.png';
                  }}
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2. MAIN POLICY CONTENT SECTION */}
      <section className="py-12 sm:py-16 bg-white text-left font-sans">
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 text-[14px] sm:text-[14.5px] leading-relaxed">
            
            {/* Effective Dates */}
            <div className="space-y-1 font-sans text-slate-900 text-[14px] sm:text-[14.5px]">
              <div>
                <span className="font-[700]">Effective Date: </span>
                <span className="font-[600] text-slate-700">13/08/2025</span>
              </div>
              <div>
                <span className="font-[700]">Last Updated: </span>
                <span className="font-[600] text-slate-700">13/08/2025</span>
              </div>
            </div>

            {/* Introductory Statement */}
            <p className="text-[14.5px] sm:text-[15px] text-slate-800 leading-relaxed font-sans font-normal">
              Firevy.co Software Solutions (“we,” “our,” “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our website, services, and communication tools (including messaging services such as MMlite by Meta).
            </p>

            {/* Section 1 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                1. Information We Collect
              </h2>
              <p className="font-normal text-slate-700">
                We may collect the following types of information:
              </p>

              <div className="space-y-2.5 pl-1">
                <div>
                  <h3 className="text-[14.5px] font-[700] text-slate-900 font-sans">
                    1.1 Personal information you provide voluntarily
                  </h3>
                  <p className="text-slate-600 font-normal">
                    Name, email address, phone number, company name, job title. Message content sent via contact forms, proposals, or messaging services. Any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14.5px] font-[700] text-slate-900 font-sans">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-slate-600 font-normal">
                    IP address, browser type, device information, operating system, and pages visited on our website. Cookies and tracking technologies used to enhance website experience and analyze performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-[14.5px] font-[700] text-slate-900 font-sans">
                    1.3 Client & Project Data
                  </h3>
                  <p className="text-slate-600 font-normal">
                    Confidential project requirements, specifications, codebases, APIs, and design files shared under mutual Non-Disclosure Agreements (NDAs).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="font-normal text-slate-700">
                We use collected information for legitimate business purposes, including:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-slate-600 font-normal">
                <li>To respond to your project inquiries, deliver tailored software proposals, and provide technical consultations.</li>
                <li>To execute and manage software development, mobile apps, enterprise cloud systems, and dedicated team contracts.</li>
                <li>To ensure data security, prevent fraud, and comply with international legal obligations (including GDPR, HIPAA, and ISO 27001).</li>
                <li>To optimize our website performance, test functionality, and improve customer experience.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                3. Information Sharing & Third Parties
              </h2>
              <p className="font-normal text-slate-700">
                We do not sell, rent, or trade your personal or business data. We only share information under strict confidentiality:
              </p>
              <ul className="space-y-2 pl-4 list-disc text-slate-600 font-normal">
                <li><strong className="text-slate-900">Service Providers:</strong> Trusted infrastructure and cloud providers (AWS, Google Cloud, Azure) under strict Data Processing Agreements (DPAs).</li>
                <li><strong className="text-slate-900">Legal Compliance:</strong> When required by applicable law, regulatory audit, or valid legal proceedings.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                4. Bank-Grade Security & Non-Disclosure
              </h2>
              <p className="text-slate-600 font-normal">
                All submitted project details, technical documentation, and intellectual property are protected under bank-grade TLS encryption protocols, strict Non-Disclosure Agreements (NDAs), and ISO 27001-certified information security controls.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                5. Your Data Rights
              </h2>
              <p className="text-slate-600 font-normal">
                You have the right to access, rectify, delete, or restrict the processing of your personal data at any time. To exercise these rights, please contact our data protection team.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3 pt-2 pb-4">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                6. Contact Us
              </h2>
              <p className="text-slate-600 font-normal">
                If you have questions or concerns regarding this Privacy Policy, please reach out to us:
              </p>
              
              <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-[14px] p-5 space-y-2.5 max-w-xl text-[13.5px]">
                <div className="flex items-center space-x-2 text-slate-800">
                  <Mail className="w-4 h-4 text-[#006085] shrink-0" />
                  <span>Email: <a href="mailto:contact@firevy.co" className="text-[#006085] font-[600] hover:underline">contact@firevy.co</a></span>
                </div>
                <div className="flex items-center space-x-2 text-slate-800">
                  <Phone className="w-4 h-4 text-[#006085] shrink-0" />
                  <span>Phone: <a href="tel:+919429709662" className="text-[#006085] font-[600] hover:underline">+91-942-970-9662</a></span>
                </div>
                <div className="flex items-start space-x-2 text-slate-800">
                  <MapPin className="w-4 h-4 text-[#006085] shrink-0 mt-0.5" />
                  <span>Address: C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. READY TO GET STARTED BANNER */}
      <section className="py-14 sm:py-18 bg-[#006085] text-white relative font-sans overflow-hidden text-center">
        {/* Background decorative translucent shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-4 left-10 w-24 h-24 rounded-2xl bg-white/20" />
          <div className="absolute bottom-6 left-1/4 w-32 h-32 rounded-3xl bg-white/10" />
          <div className="absolute top-6 right-20 w-16 h-16 rounded-full border-4 border-white/20" />
          <div className="absolute bottom-4 right-1/3 w-28 h-28 rounded-2xl bg-white/15" />
        </div>

        <Container className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <h2 className="text-[28px] sm:text-[36px] font-[800] text-white tracking-tight font-sans">
            Ready To Get Started?
          </h2>
          <p className="text-[14px] sm:text-[15.5px] text-blue-100 max-w-3xl mx-auto leading-relaxed font-normal font-sans">
            With 18+ years of domain expertise, 700+ successful projects, & 1300+ happy customers, we have carved a niche in the software development industry.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-[6px] bg-white hover:bg-slate-100 text-[#006085] font-[700] text-[14px] sm:text-[15px] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              Request A Free Quote
            </Link>
          </div>
        </Container>
      </section>

      {/* 4. SUBSCRIBE NEWSLETTER BANNER */}
      <NewsletterSubscribeBanner />
    </div>
  );
};

export default PrivacyPolicy;
