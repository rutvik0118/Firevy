import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import BRAND from '../constants/brand';
import NewsletterSubscribeBanner from '../components/common/NewsletterSubscribeBanner';

export const Terms = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title="Terms & Conditions | Firevy.co"
        description="Terms and conditions of use and service agreements for Firevy.co Software Solutions."
        canonical="/terms"
      />

      {/* 1. HERO BANNER: SOFT BLUE BACKGROUND WITH TITLE, DESCRIPTION, LET'S TALK CTA & 3D ISOMETRIC ILLUSTRATION */}
      <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#EAF4FA] text-left font-sans w-full overflow-hidden border-b border-slate-200/80">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle & CTA Button */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-[800] text-slate-950 tracking-tight leading-tight font-sans">
                Terms & Conditions
              </h1>
              
              <p className="text-[14px] sm:text-[15px] font-[400] text-slate-600 leading-relaxed font-sans max-w-xl">
                Firevy is not only a globally recognized IT company but also a family filled with talented experts that help global brands, enterprises, mid-size businesses or even startups with innovative solutions.
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
                  src="/images/terms_hero_illustration.jpg"
                  alt="Terms & Conditions Illustration"
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

      {/* 2. MAIN TERMS CONTENT SECTION */}
      <section className="py-12 sm:py-16 bg-white text-left font-sans">
        <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-slate-700 text-[14px] sm:text-[14.5px] leading-relaxed">
            
            {/* Notice */}
            <div className="space-y-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                Notice
              </h2>
              <p className="text-slate-700 font-normal leading-relaxed">
                Please Read these Terms of Use carefully. By accessing this website and its pages, you agree to be bound by these Terms of Use, as they may be modified from time to time and posted on this site by Firevy Software Solutions.
              </p>
            </div>

            {/* Copyright Notice */}
            <div className="space-y-2.5 pt-2">
              <h2 className="text-[18px] sm:text-[20px] font-[800] text-slate-950 font-sans tracking-tight">
                Copyright © Firevy Software Solutions. 2026
              </h2>
              <p className="text-slate-700 font-normal leading-relaxed">
                This site is owned by Firevy Software Solutions. All content present on this Site is the exclusive property of Firevy Software Solutions including all the software, text, images, graphics and video used on this Site. Certain screen layouts and graphics contained in this Site that are not owned by Firevy Software Solutions are exclusively licensed to Firevy Software Solutions. No material from this site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from Firevy Software Solutions.
              </p>
              <p className="font-[700] text-slate-900 pt-1">
                Unauthorized use of the materials appearing on this Site may violate copyright, trademark and other applicable laws.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-2.5 pt-3">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                1. Intellectual Property & 100% IP Ownership
              </h3>
              <p className="text-slate-600 font-normal">
                All custom software source code, UI/UX designs, architecture blueprints, database schemas, and digital assets engineered for clients under agreed Statements of Work (SOW) become the exclusive intellectual property of the client upon final milestone payment.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                2. Service Level Agreements (SLAs) & Milestones
              </h3>
              <p className="text-slate-600 font-normal">
                Specific uptime, code warranty, post-deployment support, and SLA commitments are governed by individual Master Services Agreements (MSA) signed prior to project kick-off.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                3. Non-Disclosure & Mutual Confidentiality
              </h3>
              <p className="text-slate-600 font-normal">
                Both parties agree to treat proprietary algorithms, business roadmaps, customer data, and technical requirements with strict confidentiality under bilateral NDA terms.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                4. Warranty & Bug-Fix Period
              </h3>
              <p className="text-slate-600 font-normal">
                All software delivered by Firevy comes with a comprehensive post-deployment warranty period (typically 30 to 90 days depending on contract terms) to resolve any functional discrepancies or bugs at zero additional cost.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                5. Payment Terms & Invoicing
              </h3>
              <p className="text-slate-600 font-normal">
                Invoices are issued based on mutually agreed milestone completions or bi-weekly sprint deliverables for dedicated team models. Payments are due within the timeframe specified in the project Statement of Work.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                6. Limitation of Liability & Governing Law
              </h3>
              <p className="text-slate-600 font-normal">
                Firevy shall not be held liable for indirect, incidental, or consequential damages resulting from the use or inability to use the services. These terms shall be governed by and construed in accordance with the laws of India, subject to the jurisdiction of courts in Ahmedabad, Gujarat.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-4 pb-2">
              <h3 className="text-[16px] sm:text-[18px] font-[800] text-slate-950 font-sans">
                Legal & Contractual Enquiries
              </h3>
              <p className="text-slate-600 font-normal">
                For questions regarding contracts, MSAs, or these Terms & Conditions, please contact:
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

export default Terms;
