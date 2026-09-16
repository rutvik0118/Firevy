import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import Container from '../components/common/Container';
import FeaturedInLogosGrid from '../components/home/FeaturedInLogosGrid';
import WorkTogetherNewsletterSection from '../components/home/WorkTogetherNewsletterSection';
import BRAND from '../constants/brand';
import companyPublicService from '../services/companyPublicService';
import {
  Lightbulb, Users, Target, ShieldCheck, FileCheck, RefreshCw,
  ChevronLeft, ChevronRight, Heart
} from 'lucide-react';

export const CSR = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [sectionData, setSectionData] = useState(null);

  useEffect(() => {
    companyPublicService.getSection('csr').then((data) => {
      if (data) setSectionData(data);
    }).catch(console.error);
  }, []);

  const defaultCarouselItems = [
    {
      title: 'Donations to students as a part of our CSR',
      desc: 'We donated supplies to our local schools to support children in education.',
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'We believe in giving back to the community',
      desc: `At ${BRAND.name}, our CSR efforts are focused on helping more children feel happy and stay healthy.`,
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: "Together, we're cooling the summer heat and spreading joy",
      desc: `At ${BRAND.name}, we believe in the power of sharing and caring. We reached out to our community by distributing refreshing buttermilk sachets...`,
      img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const carouselItems = (sectionData?.items && sectionData.items.length > 0) ? sectionData.items : defaultCarouselItems;

  const handlePrev = () => {
    setSlideIdx((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIdx((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO
        title={`Corporate Social Responsibility (CSR) | ${BRAND.name}`}
        description={`Discover how ${BRAND.name} gives back through meaningful Corporate Social Responsibility (CSR) initiatives.`}
      />

      {/* 1. HERO HEADER SECTION (Exact Reference Screenshot 0 Match) */}
      <section className="py-16 sm:py-24 bg-[#F4F7FB] border-b border-slate-200/80 relative overflow-hidden font-sans text-left">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-[72px] sm:text-[96px] font-[900] text-[#8B5CF6] tracking-tight leading-none font-sans select-none">
                संकल्प
              </h1>
              <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-[1.85] font-sans font-[400]">
                Excellence and responsibility aren't just values we uphold, they're the foundation of everything we do. Our CSR initiatives reflect our unwavering commitment for creating meaningful impact, not as an obligation, but as a core expression of who we are. We believe that real change begins with accountability for our people, our planet, and future generations. Because for us, making a difference isn't just an ambition, it's a responsibility we proudly embrace.
              </p>
            </div>

            {/* Right Photo Collage Frame with Hearts (Exact Reference Match) */}
            <div className="lg:col-span-6 flex justify-center relative">
              {/* Cute Floating Hearts */}
              <div className="absolute -top-4 left-10 text-pink-400 animate-bounce pointer-events-none">
                <Heart className="w-8 h-8 fill-pink-400 text-pink-400 opacity-90" />
              </div>
              <div className="absolute bottom-12 left-6 text-pink-400 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center shadow-xs">
                  <Heart className="w-6 h-6 fill-pink-500 text-pink-500" />
                </div>
              </div>
              <div className="absolute bottom-6 right-8 text-pink-400 pointer-events-none">
                <Heart className="w-7 h-7 fill-pink-400 text-pink-400 opacity-80" />
              </div>

              {/* Photo Collage Container */}
              <div className="grid grid-cols-2 gap-3 max-w-[500px] bg-white p-3 rounded-[28px] shadow-xl border border-slate-200/80">
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-[18px] h-44 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                      alt="CSR School Supplies"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[18px] h-40 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
                      alt="CSR Food & Supplies Distribution"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="overflow-hidden rounded-[18px] h-52 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
                      alt="CSR Uniforms & Bags"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[18px] h-32 shadow-xs">
                    <img
                      src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
                      alt="CSR Team Group"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SECTION 2: "Our CSR principles are the backbone..." (Exact Reference Screenshot 1 Match) */}
      <section className="py-20 bg-white font-sans text-center">
        <Container>
          <h2 className="text-[30px] sm:text-[38px] font-[800] text-slate-900 max-w-4xl mx-auto mb-14 tracking-tight leading-tight font-sans">
            Our CSR principles are the backbone of initiatives that spark real change and uplift communities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <Lightbulb className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Built to Last, Guided by Vision
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                Every initiative we launch is anchored in thoughtful strategy and foresight. We don't just react to the present, we plan for the future. Each program is built with scalability, sustainability, and long-term community benefit in mind.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Opportunities for Volunteering
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                We believe that the most powerful change begins with people. That's why we foster a culture of active engagement through well-structured and impactful volunteering opportunities for our employees.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Focused on Measurable Impact
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                We measure success not just in outputs, but in outcomes. Our CSR initiatives are designed to address real-world challenges with tangible, positive results for individuals, communities, and the planet.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Uplifting the Underserved
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                Equity and inclusion are the cornerstones of our mission. We intentionally direct our resources and efforts to uplift those who are often overlooked or marginalized. By addressing systemic barriers, we help build stronger, more inclusive communities.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <FileCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Rooted in Responsibility, Not Just Regulation
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                Compliance is the starting line, not the finish line. Our commitment to corporate social responsibility goes beyond ticking boxes; it's about doing what's right, even when it's not required.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#E2F3FC] rounded-[24px] p-8 space-y-4 border border-[#D0EBF5] shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-[14px] bg-white text-[#00668C] flex items-center justify-center shadow-xs">
                <RefreshCw className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-[800] text-slate-900 font-sans">
                Listening, Learning & Evolving
              </h3>
              <p className="text-[14px] text-slate-600 leading-[1.8] font-[400] font-sans">
                We view CSR as a continuous journey. Through regular community engagement and feedback loops, we remain agile and responsive. We adapt our strategies based on evolving needs, emerging challenges, and lessons learned.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SECTION 3: "A Look at our CSR initiatives" (Exact Reference Screenshot 2 Match) */}
      <section className="py-20 bg-[#F4F7FB] font-sans text-left border-t border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 5 Photo Collage Grid */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-3.5">
              <div className="col-span-2 overflow-hidden rounded-[16px] h-48 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80"
                  alt="Street Food Help"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded-[16px] h-48 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
                  alt="Tree Saplings Planting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded-[16px] h-44 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                  alt="Children Gifts Distribution"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-[16px] h-44 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80"
                  alt="Community Footwear & Food Help"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Narrative Text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 tracking-tight leading-tight font-sans">
                A Look at our CSR initiatives
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.85] font-sans font-[400]">
                At {BRAND.name}, we strive to balance the requirements of society, the environment, and the economy. We are keen to support the beginning of initiatives that seek to reduce carbon footprint and advance safe and secure growth. We aim to reach many beneficiaries through our CSR initiatives to empower economically and socially underdeveloped communities. A few years ago, we joined hands with Andh-Apang Kalyan Kendra, distributing daily-use items and uniforms for school students. We recently distributed footwear, Mats, and food to people who are in need. We prioritize issues of top concern as in the national development agenda and seek to fund and support socially beneficial projects with sustainability as a guiding principle.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. SECTION 4: "CSR initiatives by firevy.co Team" (Exact Reference Screenshot 3 Match) */}
      <section className="py-20 bg-white font-sans text-center">
        <Container>
          <h2 className="text-[32px] sm:text-[38px] font-[800] text-slate-900 mb-12 tracking-tight font-sans">
            CSR initiatives by {BRAND.name} Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {carouselItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] sm:text-[18px] font-[800] text-slate-900 leading-snug font-sans mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed font-[400] font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center space-x-4 mt-10">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* 5. CEO QUOTE BANNER (Exact Reference Screenshot 0 Match) */}
      <section className="py-12 bg-white font-sans">
        <Container>
          <div className="bg-[#E2F3FC] rounded-[28px] p-8 sm:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between border border-[#D0EBF5] shadow-xs max-w-6xl mx-auto">
            <div className="space-y-6 max-w-2xl text-left z-10">
              <p className="text-[20px] sm:text-[25px] font-[800] text-[#00668C] leading-[1.4] font-sans">
                "I've always believed that success means more when it's shared. That's why giving back to our communities is, and always will be a core part of who we are."
              </p>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-[20px] font-[800] text-slate-900 font-sans">Kumaril Patel</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-[#0077B5] text-white flex items-center justify-center text-[11px] font-[900]">in</a>
                </div>
                <p className="text-[14px] font-[700] text-slate-600 font-sans uppercase tracking-wider">CEO</p>
              </div>
            </div>
            {/* CEO Image Cutout */}
            <div className="mt-8 lg:mt-0 shrink-0 w-64 h-64 sm:w-72 sm:h-72 relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                alt="Kumaril Patel - CEO"
                className="w-full h-full object-cover rounded-[20px] shadow-md border-2 border-white"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. "MAKING AN IMPACT" PHOTO GALLERY (Exact Reference Screenshot 1 Match) */}
      <section className="py-20 bg-white font-sans text-center">
        <Container>
          <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 mb-12 tracking-tight font-sans">
            Making an Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 1 - Booth Help"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 2 - School Books"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 3 - Clothes Distribution"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 4 - Children Group"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 5 - Uniforms Table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-[20px] h-64 shadow-xs border border-slate-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="CSR Impact 6 - Refreshing Drinks Help"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. VIDEO CSR SHOWCASE SECTION (Exact Reference Screenshot 2 Match) */}
      <section className="py-20 bg-[#F4F7FB] font-sans text-center border-t border-slate-200/80">
        <Container>
          <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 mb-12 tracking-tight font-sans">
            CSR initiatives by {BRAND.name} Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {[
              {
                title: `Transforming Purpose Into Positive Change: CSR by ${BRAND.name}`,
                img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'A small act of kindness can warm a whole community. 🙏',
                img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
              },
              {
                title: `Refreshing Responsibility: ${BRAND.name}'s CSR Journey`,
                img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80'
              }
            ].map((v, idx) => (
              <div key={idx} className="space-y-3">
                <div className="relative rounded-[20px] overflow-hidden h-56 shadow-sm group border border-slate-200/80">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#00668C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-[#00668C] ml-1" />
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-[800] text-slate-900 font-sans leading-snug">
                  {v.title}
                </h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. "TRUSTED BY THE WORLD'S LEADING BRANDS" SECTION (Exact Reference Screenshot 0 Match) */}
      <section className="py-20 bg-[#F4F7FB] font-sans text-center border-t border-slate-200/80">
        <Container>
          <div className="max-w-4xl mx-auto mb-14 space-y-3">
            <h2 className="text-[34px] sm:text-[40px] font-[800] text-slate-900 tracking-tight font-sans">
              Trusted By The World’s Leading Brands
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-[400] leading-relaxed font-sans">
              We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
            </p>
          </div>

          {/* 24 Corporate Brand Cards Grid (Exact Sapphire Logos Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-7xl mx-auto">
            {[
              { name: 'AMERICAN EXPRESS', color: 'text-[#006FCF]' },
              { name: 'LARSEN & TOUBRO', color: 'text-[#003B70]' },
              { name: 'LafargeHolcim', color: 'text-[#333333]' },
              { name: 'CLP INDIA', color: 'text-[#005596]' },
              { name: 'Adani', color: 'text-[#215CA0]' },
              { name: 'GFL', color: 'text-[#007A3D]' },
              { name: 'TOYOTA', color: 'text-[#EB0A1E]' },
              { name: 'ACC LIMITED', color: 'text-[#D0191F]' },
              { name: 'Ambuja Cement', color: 'text-[#003C71]' },
              { name: 'MORRIS GARAGES', color: 'text-[#BA0C2F]' },
              { name: 'JSW Energy', color: 'text-[#003366]' },
              { name: 'Vedanta', color: 'text-[#008080]' },
              { name: 'HONDA', color: 'text-[#E40521]' },
              { name: 'Dr. Reddy\'s', color: 'text-[#5C2D91]' },
              { name: 'Chevron Oronite', color: 'text-[#002B49]' },
              { name: 'ORIENT CEMENT', color: 'text-[#1D252C]' },
              { name: 'Almarai', color: 'text-[#00573D]' },
              { name: 'Cummins', color: 'text-[#DA291C]' },
              { name: 'TDSG', color: 'text-[#C8102E]' },
              { name: 'L\'ORÉAL', color: 'text-[#000000]' },
              { name: 'ASTRAL PIPES', color: 'text-[#004A97]' },
              { name: 'TITAN COMPANY', color: 'text-[#008B8B]' },
              { name: 'BANK NOTE PAPER MILL', color: 'text-[#006400]' },
              { name: 'Alembic 100', color: 'text-[#00529B]' }
            ].map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[18px] h-32 p-4 flex items-center justify-center border border-slate-200/80 shadow-xs hover:shadow-md transition-all group cursor-pointer"
              >
                <span className={`text-[15px] sm:text-[16px] font-[900] ${brand.color} font-sans tracking-tight text-center group-hover:scale-105 transition-transform`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. "WE HAVE BEEN FEATURED IN" LOGOS GRID (Exact Reference Screenshot 0 Match) */}
      <FeaturedInLogosGrid />

      {/* 10. BOTTOM NEWSLETTER / CTA */}
      <WorkTogetherNewsletterSection />
    </div>
  );
};

export default CSR;
