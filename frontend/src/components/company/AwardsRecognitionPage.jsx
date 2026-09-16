import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Star,
  Check
} from 'lucide-react';
import Container from '../common/Container';
import SEO from '../common/SEO';
import WorkTogetherNewsletterSection from '../home/WorkTogetherNewsletterSection';
import companyPublicService from '../../services/companyPublicService';

export const AwardsRecognitionPage = () => {
  const [selectedVideoModal, setSelectedVideoModal] = useState(null);
  const [dynamicAwards, setDynamicAwards] = useState(null);

  useEffect(() => {
    companyPublicService.getAwards().then((data) => {
      if (data && data.length > 0) {
        setDynamicAwards(data.map(item => ({
          id: item._id || item.id,
          title: item.title,
          platform: item.organization || item.platform,
          img: item.image || item.img
        })));
      }
    }).catch(console.error);
  }, []);

  // Statistics Data (Exact Match from Sapphire)
  const stats = [
    { value: '23+', label: 'Years Experience' },
    { value: '2800+', label: 'Satisfied Clients' },
    { value: '1500+', label: 'Projects Completed' },
    { value: '200+', label: 'IT Professional' },
    { value: '300+', label: 'Reviews On Clutch' }
  ];

  // Official Award Badges (Exact SVGs & PNGs from Sapphire)
  const awardBadges = [
    {
      id: 1,
      title: 'Top Web Developers',
      platform: 'GoodFirms',
      img: '/images/awards/top_web_dev_goodfirm.svg'
    },
    {
      id: 2,
      title: 'Top Mobile App Developers',
      platform: 'GoodFirms',
      img: '/images/awards/top_mobile_app_goodfirm.svg'
    },
    {
      id: 3,
      title: 'Top Web Developers',
      platform: 'Clutch',
      img: '/images/awards/top_web_clutchn.svg'
    },
    {
      id: 4,
      title: 'Top Mobile App Developers',
      platform: 'Clutch',
      img: '/images/awards/top_mobile_clutchn.svg'
    },
    {
      id: 5,
      title: 'Most Reviewed Mobile App Company',
      platform: 'The Manifest',
      img: '/images/awards/most_mobile_review_manifest.svg'
    },
    {
      id: 6,
      title: 'Most Reviewed SharePoint Company',
      platform: 'The Manifest',
      img: '/images/awards/most_sharepoint_review_manifest.svg'
    },
    {
      id: 7,
      title: 'Most Reviewed Software Company',
      platform: 'The Manifest',
      img: '/images/awards/most_review_softwarecompany_manifest.svg'
    },
    {
      id: 8,
      title: 'Most Reviewed Web Development Company',
      platform: 'The Manifest',
      img: '/images/awards/most_web_review_manifest.svg'
    },
    {
      id: 9,
      title: 'Top Rated Plus',
      platform: 'Upwork',
      img: '/images/awards/9_upwork.svg'
    },
    {
      id: 10,
      title: 'Preferred Freelancer',
      platform: 'Freelancer',
      img: '/images/awards/10_freelancer.svg'
    },
    {
      id: 11,
      title: 'Top App Development Company 2022',
      platform: 'The Manifest',
      img: '/images/awards/top_the_manifest_app_development_company_2022_award.webp'
    },
    {
      id: 12,
      title: 'Top Blockchain Company 2022',
      platform: 'The Manifest',
      img: '/images/awards/top_the_manifest_blockchain_company_2022_award.png'
    },
    {
      id: 13,
      title: 'Top Design Company 2022',
      platform: 'The Manifest',
      img: '/images/awards/top_the_manifest_design_company_2022_award.png'
    },
    {
      id: 14,
      title: 'Top E-Commerce Developers 2022',
      platform: 'The Manifest',
      img: '/images/awards/top_the_manifest_e-commerce_developers_2022_award.png'
    },
    {
      id: 15,
      title: 'Top Software Developers 2022',
      platform: 'The Manifest',
      img: '/images/awards/top_the_manifest_software_developers_2022_award.png'
    },
    {
      id: 16,
      title: 'Top Development Company India 2022',
      platform: 'Clutch',
      img: '/images/awards/top_clutch.co_development_company_india_2022_award.png'
    }
  ];

  // Exact 6 Clutch Reviews matching Reference Screenshot
  const clutchWidgetReviews = [
    {
      id: 1,
      rating: '5.0',
      quote: '"They were very responsive throughout the project and gave excellent support."',
      author: 'Admin, L.P.Savani Riverside School, Surat'
    },
    {
      id: 2,
      rating: '5.0',
      quote: '"What impressed us the most was their ability to deliver a fully branded mobile app that felt like our own product."',
      author: 'Admin, Vidyanagri campus, Himmatnagar'
    },
    {
      id: 3,
      rating: '5.0',
      quote: '"They responded promptly to our feedback and ensured that all the custom requirements were taken care of."',
      author: 'Admin, Oriental Higher Secondary School'
    },
    {
      id: 4,
      rating: '5.0',
      quote: '"Their team is always there and quick to respond to any changes or support we need."',
      author: 'Admin, AS Vidyapeeth Pvt. Ltd,'
    },
    {
      id: 5,
      rating: '5.0',
      quote: '"The Implementation process was handled professionally by the Sapphire team."',
      author: 'Admin, PRINCE ASHOKRAJE GAEKWAD SCHOOL'
    },
    {
      id: 6,
      rating: '5.0',
      quote: '"They\'re very impressive in their understanding of the academic examination workflow."',
      author: 'Admin, Vijay International School'
    }
  ];

  // Client Testimonials Videos
  const clientTestimonials = [
    {
      id: 1,
      img: '/images/awards/hdimages/clienttestimonial1.png',
      title: 'Hear out Tim got to say about working with Team Sapphire on building a complex and unique web application.',
      client: 'Tim Vance',
      tag: 'Web Application'
    },
    {
      id: 2,
      img: '/images/awards/hdimages/clienttestimonial2.png',
      title: 'Testimonial from client who has expanded their business using Sapphire Services',
      client: 'Pravin Patel',
      tag: 'Business Scaling'
    },
    {
      id: 3,
      img: '/images/awards/hdimages/clienttestimonial3.png',
      title: 'Sapphire Successfully Delivered Web & Mobile App Solutions - Leading IT Company in Canada',
      client: 'Christina Edwards',
      tag: 'Enterprise Delivery'
    },
    {
      id: 4,
      img: '/images/awards/hdimages/vision_client.png',
      title: 'Discover why Andrew trusted Sapphire Software Solutions with his mobile digital diary project : A Client’s Honest Experience.',
      client: 'Andrew Robertson',
      tag: 'Mobile App'
    },
    {
      id: 5,
      img: '/images/awards/hdimages/img_client2.png',
      title: 'From Vision to Healthcare Innovation | Client Success With Sapphire - Top IT Company',
      client: 'Dr. Marcos Santos',
      tag: 'Healthcare Platform'
    },
    {
      id: 6,
      img: '/images/awards/hdimages/img_client6.png',
      title: 'From Idea to Reality | Client\'s Success Story with Sapphire - Best Mobile App Development Company',
      client: 'Sarah Jenkins',
      tag: 'SaaS Platform'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#006B8F] selection:text-white">
      <SEO
        title="Awards & Recognition | Sapphire Software Solutions"
        description="Sapphire Software Solutions marks their presence with a proven track record. We enjoy the highest rating with verified unbiased reviews across review platforms."
        canonical="/company/awards-recognition"
      />

      {/* ============================================================
          1. HERO BANNER (Exact Copy-to-Copy Match: Light Blue Tinted BG)
          ============================================================ */}
      <section className="pt-32 pb-16 bg-[#F4F9FC] relative overflow-hidden text-left font-sans">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-[800] text-slate-900 tracking-tight leading-[1.15] font-sans">
                Proud Of Being Recognized
              </h1>

              <p className="text-[15.5px] sm:text-[16.5px] font-[400] text-slate-600 leading-relaxed max-w-xl font-sans">
                Sapphire Software Solutions marks their presence with a proven track record. We enjoy the highest rating with verified unbiased reviews across review platforms.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[15px] transition-all shadow-md group font-sans"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Graphic: Exact Official Awards Banner SVG */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[500px]">
                <img
                  src="/images/awards/awards_banner.svg"
                  alt="Proud Of Being Recognized - Sapphire Awards Banner"
                  className="w-full h-auto object-contain mx-auto select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          2. MOTIVATION & 5 STAT COUNTERS (Exact Pure White Match)
          ============================================================ */}
      <section className="py-20 bg-white text-center font-sans">
        <Container>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-[1.2] mb-5 font-sans">
              Recognition And Rewards Motivate Us To Outperform
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Since 2002, we have been going that extra mile to create exceptional digital transformations for our clients. Genuine customer reviews on review platforms are proof that Sapphire Software Solutions offer top-notch web & mobile app development services and solutions to its clients.
            </p>
          </div>

          {/* 5 Stats Counter Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 pt-2">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 text-center"
              >
                <div className="text-[38px] sm:text-[48px] font-[900] text-[#006B8F] tracking-tight leading-none mb-2 font-sans">
                  {stat.value}
                </div>
                <div className="text-[14.5px] font-[700] text-slate-800 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          3. 2019 AWARD SECTION (Exact Copy-to-Copy: Image Left, Text Right)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white text-left font-sans border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Official Award Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[540px] rounded-[16px] overflow-hidden shadow-sm border border-slate-100">
                <img
                  src="/images/awards/2019_most_innovative_erp_award.svg"
                  alt="Best Digital Transformation In Educational Sector 2019"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right Column: Exact Content */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-[24px] sm:text-[26px] font-[800] text-slate-900 font-sans leading-none">
                2019
              </h4>
              <h2 className="text-[30px] sm:text-[36px] font-[800] text-slate-900 leading-[1.25] font-sans">
                Best Digital Transformation In Educational Sector
              </h2>
              <div className="text-[15px] font-[400] text-slate-600 leading-[1.75] space-y-3 font-sans">
                <p>
                  The importance of proper and timely transformation is very high in any field and education sector is no exception. Vidyalaya team is striving hard since last 23+ years for bringing digital transformation in schools. Under the “Digital India” campaign of Indian government, Vidyalaya has digitized more than 1300 schools in rural, urban & metro cities. Vidyalaya has digitized more than 100 schools of Gujarat State Tribal Development Residential Educational Institutions Society (GSTDREIS) operated Girls residential schools (GRS), Eklavya Model Residential schools (EMRS) and Model Schools in tribal districts of the Gujarat state with the moto of “Ek Kadam Shiksha Ki Aur”.Looking at core focus of digital transformation in education sector Vidyalaya is awarded with “Best Digital Transformation in Educational Sector” at the Vibrant Technology Summit 2019 by IDEATHON and GESIA hosted in Ahmedabad.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          3B. 2021 ATMANIRBHAR AWARD SECTION (Text Left, Image Right)
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-slate-50 text-left font-sans border-t border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
              <h4 className="text-[24px] sm:text-[26px] font-[800] text-slate-900 font-sans leading-none">
                2021
              </h4>
              <h2 className="text-[30px] sm:text-[36px] font-[800] text-slate-900 leading-[1.25] font-sans">
                Indian Achievers Award in 2021
              </h2>
              <div className="text-[15px] font-[400] text-slate-600 leading-[1.75] space-y-3 font-sans">
                <p>
                  Recognition comes with achievements and same goes with Vidyalaya as it recently won the Indian Achievers Award in 2021 in the recognition of outstanding professional achievement and contribution in digitally transforming schools with an innovative school management ERP. Indian achievers Forum acknowledged the efforts of Vidyalaya for digitizing more than 1300 schools successfully and spreading the message of “Desh Badal Raha Hai” across the nation. Despite of this major achievement, the focus of Vidyalaya will always remain towards digitizing more and more schools in coming Era, contribute towards the betterment of society & nation.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[420px]">
                <img
                  src="/images/awards/2021_atmanirbhar_award.png"
                  alt="Indian Achievers Award in 2021"
                  className="w-full h-auto object-contain mx-auto select-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          4. "WE'RE PROUD TO HAVE PICKED THESE UP ALONG THE WAY"
          ============================================================ */}
      <section className="py-20 bg-[#F4F9FC] text-center font-sans border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto mb-14">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-4">
              We’re Proud To Have Picked These Up Along The Way
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-600 leading-relaxed font-sans">
              Our expertise has been recognized by all. Work with Sapphire, and we’ll do our part to make your project worthy of high praise, too.
            </p>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {(dynamicAwards && dynamicAwards.length > 0 ? dynamicAwards : awardBadges).map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-[16px] bg-white border border-slate-200 hover:border-[#006B8F] hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group"
              >
                <div className="h-28 w-full flex items-center justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-[14px] font-[700] text-slate-900 group-hover:text-[#006B8F] transition-colors font-sans">
                  {item.title}
                </h4>
                <span className="text-[12px] text-slate-500 font-sans mt-1">
                  {item.platform}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          5. "DON'T TAKE OUR WORD FOR IT, TAKE OUR CLIENTS'" (Exact Clutch Widget Layout)
          ============================================================ */}
      <section className="py-20 bg-white text-center font-sans border-t border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-[30px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Don’t Take Our Word For It, Take Our Clients’
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              Positive Clutch reviews are a clear sign of teamwork, good service, and improved project management. Our team takes pride in our ability to think beyond the box when it comes to producing cutting-edge digital solutions
            </p>
          </div>

          {/* Clutch Official Style Widget Box */}
          <div className="max-w-5xl mx-auto bg-[#F7F9FB] rounded-[14px] p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            {/* Widget Top Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-6 text-left">
              <h3 className="text-[15px] sm:text-[17px] font-[800] text-slate-900 uppercase tracking-wide font-sans">
                SAPPHIRE SOFTWARE SOLUTIONS Reviews
              </h3>

              <div className="flex items-center space-x-2 text-xs font-[700] text-slate-700 font-sans">
                <span className="text-[15px] font-[900] text-slate-900">4.9</span>
                <div className="flex items-center space-x-0.5 text-[#E63946]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                  ))}
                </div>
                <span className="text-[#006B8F] underline cursor-pointer">334 reviews</span>
                <span className="text-slate-400 font-normal">powered by</span>
                <span className="font-[900] text-slate-900 tracking-wider">Clutch</span>
              </div>
            </div>

            {/* 6 Reviews Grid (3 columns x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {clutchWidgetReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-[10px] p-5 border border-slate-200/70 shadow-2xs flex flex-col justify-between text-left hover:border-slate-300 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[14px] font-[800] text-slate-900">{rev.rating}</span>
                      <div className="flex items-center space-x-0.5 text-[#E63946]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
                        ))}
                      </div>
                    </div>

                    <p className="text-[13px] text-slate-700 leading-relaxed font-sans">
                      {rev.quote}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 space-y-1">
                    <p className="text-[11.5px] text-slate-500 font-sans leading-tight">
                      {rev.author}
                    </p>
                    <div className="flex items-center text-[11px] font-[700] text-emerald-600 space-x-1">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Verified Review</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered View All Button */}
          <div className="mt-8 text-center">
            <a
              href="https://clutch.co/profile/sapphire-software-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white text-[14px] font-[700] transition-all shadow-md font-sans"
            >
              View All
            </a>
          </div>
        </Container>
      </section>

      {/* ============================================================
          6. "SUCCESS STORIES" (Exact Match: 3 Cards, Button, 4 Color Boxes)
          ============================================================ */}
      <section className="py-20 bg-[#DDF1FB] text-center font-sans border-t border-cyan-100">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Success Stories
            </h2>
            <p className="text-[15px] sm:text-[16px] font-[400] text-slate-700 leading-relaxed font-sans">
              Know Sapphire journey from concept to success. Explore how we've brought ideas to life and achieved remarkable results for our clients.
            </p>
          </div>

          {/* 3 Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Employee Recognition Platform */}
            <div className="text-center group">
              <div className="relative rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                {/* Top Right "Case Study" Badge */}
                <div className="absolute top-4 right-4 z-10 bg-[#E0F2FE] text-[#0284C7] text-[11px] font-[700] px-3 py-1 rounded-full shadow-2xs">
                  Case Study
                </div>
                <img
                  src="/images/success_stories/award_recodnization.svg"
                  alt="Employee Recognition Platform"
                  className="w-full h-auto object-contain rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans">
                Employee Recognition Platform
              </h3>
            </div>

            {/* Card 2: Team Collaboration App */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/worklink.svg"
                  alt="Team Collaboration App"
                  className="w-full h-auto object-contain rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans">
                Team Collaboration App
              </h3>
            </div>

            {/* Card 3: Performance Appraisal System */}
            <div className="text-center group">
              <div className="rounded-[20px] overflow-hidden bg-white shadow-sm border border-slate-200/80 p-2 group-hover:shadow-md transition-all">
                <img
                  src="/images/success_stories/performance_appraisal.svg"
                  alt="Performance Appraisal System"
                  className="w-full h-auto object-contain rounded-[14px]"
                />
              </div>
              <h3 className="text-[16px] font-[800] text-slate-900 mt-4 font-sans">
                Performance Appraisal System
              </h3>
            </div>
          </div>

          {/* Centered "View All Portfolio" Button */}
          <div className="mb-14">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-9 py-3 rounded-[6px] bg-[#006B8F] hover:bg-[#005478] text-white font-[700] text-[14.5px] transition-all shadow-md font-sans"
            >
              View All Portfolio
            </Link>
          </div>

          {/* 4 Colorful Highlight Boxes (Purple, Mint Green, Peach, Deep Blue CTA) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Box 1: Purple (23+ Years Experience) */}
            <div className="bg-[#D8C7FF] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                23+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Years Experience
              </div>
            </div>

            {/* Box 2: Mint Green (320+ 5-Star Clutch Reviews) */}
            <div className="bg-[#A3E8D2] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                320+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                5-Star Clutch Reviews
              </div>
            </div>

            {/* Box 3: Peach/Coral (2800+ Satisfied Clients) */}
            <div className="bg-[#FFBCB0] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-xs">
              <div className="text-[36px] sm:text-[40px] font-[900] text-slate-900 tracking-tight leading-none mb-1 font-sans">
                2800+
              </div>
              <div className="text-[14px] font-[700] text-slate-800 font-sans">
                Satisfied Clients
              </div>
            </div>

            {/* Box 4: Deep Blue (Want to start Projects? -> Get Estimation) */}
            <div className="bg-[#005E82] rounded-[18px] p-6 text-center flex flex-col justify-center items-center shadow-md">
              <div className="text-[18px] sm:text-[19px] font-[800] text-white tracking-tight leading-tight mb-3 font-sans">
                Want to start Projects
              </div>
              <Link
                to="/contact"
                className="bg-white text-[#005E82] hover:bg-slate-100 px-6 py-2 rounded-[6px] font-[800] text-[13.5px] transition-all shadow-sm font-sans"
              >
                Get Estimation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          7. MONUMENTAL JOURNEY & CEO SECTION (Exact Copy-to-Copy Match)
          ============================================================ */}
      <section className="py-20 sm:py-24 bg-white text-left font-sans border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Quote, Message, CEO info */}
            <div className="lg:col-span-6 space-y-6">
              {/* Blue Double Quote Symbol */}
              <div className="text-[#006B8F] text-[52px] font-serif leading-none select-none">
                “
              </div>

              {/* Exact Quote Headline matching Poppins, 600, 26px, 39px line-height, rgb(0, 93, 137) */}
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '26px',
                  lineHeight: '39px',
                  color: 'rgb(0, 93, 137)'
                }}
                className="tracking-normal"
              >
                This journey Of Sapphire Has Been Monumental. To Receive This Recognition From Our Clients Is Truly The Icing On The Cake. Team Sapphire Is Now More Ready, And More Motivated, Than Ever.
              </h2>

              {/* CEO Profile Info */}
              <div className="pt-2 flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border-2 border-[#006B8F]/20 shadow-xs shrink-0">
                  <img
                    src="/images/awards/kumarilsirsmallimage.svg"
                    alt="Kumaril Patel - Chief Executive Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[16px] font-[800] text-slate-900 font-sans leading-snug">
                    Kumaril Patel
                  </h4>
                  <p className="text-[13px] font-[600] text-slate-500 font-sans">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Team Celebration Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full rounded-[20px] overflow-hidden shadow-md border border-slate-200/80">
                <img
                  src="/images/awards/ceosectionimage.svg"
                  alt="Team Sapphire Celebrating Monumental Journey"
                  className="w-full h-auto object-cover select-none"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          8. CLIENT TESTIMONIALS (VIDEOS)
          ============================================================ */}
      <section className="py-20 bg-[#F4F9FC] text-left font-sans border-t border-slate-200/80">
        <Container>
          <div className="max-w-2xl mb-12">
            <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans mb-3">
              Client Testimonials
            </h2>
            <p className="text-[15px] font-[400] text-slate-600 leading-relaxed font-sans">
              Take a closer glimpse of our success stories from our clients!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-[16px] bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Video Image Thumbnail */}
                <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div
                    onClick={() => setSelectedVideoModal(item)}
                    className="absolute w-12 h-12 rounded-full bg-white/90 group-hover:bg-[#006B8F] text-[#006B8F] group-hover:text-white flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 z-10 group-hover:scale-110"
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Video Title */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <h4 className="text-[14px] font-[700] text-slate-800 leading-snug font-sans group-hover:text-[#006B8F] transition-colors">
                    {item.title}
                  </h4>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[12px] font-[600] text-[#006B8F]">{item.client}</span>
                    <button
                      onClick={() => setSelectedVideoModal(item)}
                      className="text-[12px] font-[700] text-slate-500 hover:text-slate-900 inline-flex items-center space-x-1"
                    >
                      <span>Watch</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          9. GLOBAL NEWSLETTER & CTA
          ============================================================ */}
      <WorkTogetherNewsletterSection />

      {/* Video Modal Popup */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-[16px] max-w-lg w-full p-6 shadow-2xl space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="text-[16px] font-[800] text-slate-900">{selectedVideoModal.client}</h4>
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-slate-900 rounded-[10px] flex items-center justify-center text-white text-center p-6">
              <div className="space-y-2">
                <Play className="w-12 h-12 text-[#006B8F] mx-auto fill-current" />
                <p className="text-sm font-[600] text-slate-200">{selectedVideoModal.title}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedVideoModal(null)}
                className="px-4 py-2 rounded-[6px] bg-slate-100 text-slate-700 text-[13px] font-[600]"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-[6px] bg-[#006B8F] text-white text-[13px] font-[700]"
              >
                Contact Us Here
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsRecognitionPage;
