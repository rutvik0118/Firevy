import React from 'react';
import Container from '../common/Container';

const defaultLogos = [
  // Row 1
  {
    name: 'Microsoft',
    content: (
      <div className="grid grid-cols-2 gap-1.5 w-14 h-14">
        <div className="bg-[#94A3B8] rounded-[2px]" />
        <div className="bg-[#94A3B8] rounded-[2px]" />
        <div className="bg-[#94A3B8] rounded-[2px]" />
        <div className="bg-[#94A3B8] rounded-[2px]" />
      </div>
    )
  },
  {
    name: 'Inc.',
    content: (
      <span className="text-[34px] font-[900] text-slate-900 font-serif tracking-tight">
        Inc.
      </span>
    )
  },
  {
    name: 'Google Play',
    content: (
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
          <path d="M4 3.5L14.5 12L4 20.5V3.5Z" fill="#64748B" />
          <path d="M14.5 12L18.5 8L4 3.5L14.5 12Z" fill="#94A3B8" />
          <path d="M14.5 12L18.5 16L4 20.5L14.5 12Z" fill="#475569" />
          <path d="M18.5 8L21 10.5C21.8 11.2 21.8 12.8 21 13.5L18.5 16L14.5 12L18.5 8Z" fill="#334155" />
        </svg>
        <span className="text-[15px] font-[800] text-slate-800 font-sans tracking-tight">Google Play</span>
      </div>
    )
  },
  {
    name: 'App Store',
    content: (
      <div className="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-slate-900">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.13 16.69C20.11 16.77 19.71 18.14 18.71 19.5ZM15.03 4.54C15.69 3.73 16.13 2.61 16.01 1.5C15.05 1.54 13.88 2.14 13.19 2.95C12.58 3.66 12.05 4.8 12.19 5.89C13.26 5.97 14.37 5.35 15.03 4.54Z" />
        </svg>
        <span className="text-[15px] font-[800] text-slate-900 font-sans tracking-tight">App Store</span>
      </div>
    )
  },
  {
    name: 'Forbes',
    content: (
      <div className="bg-[#475569] px-4 py-2 rounded-[4px]">
        <span className="text-[20px] font-[900] text-white font-serif tracking-wider uppercase">
          Forbes
        </span>
      </div>
    )
  },
  {
    name: 'YourStory',
    content: (
      <div className="flex items-center space-x-1">
        <span className="bg-[#E11D48] text-white font-[900] text-[18px] px-2 py-0.5 rounded-[4px] font-sans">YS</span>
        <span className="text-[17px] font-[800] text-slate-900 tracking-tight font-sans">YOURSTORY</span>
      </div>
    )
  },
  // Row 2
  {
    name: 'Product Hunt',
    content: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-[#EA532C] text-white font-[900] flex items-center justify-center text-[18px] font-sans">
          P
        </div>
        <span className="text-[14px] font-[800] text-slate-800 font-sans">Product Hunt</span>
      </div>
    )
  },
  {
    name: 'TechInAsia',
    content: (
      <div className="flex items-center space-x-1">
        <span className="text-[18px] font-[900] text-[#EA580C] tracking-tight font-sans">TECH</span>
        <span className="text-[18px] font-[900] text-slate-900 tracking-tight font-sans">INASIA</span>
      </div>
    )
  },
  {
    name: 'Crowdfunder',
    content: (
      <span className="text-[17px] font-[800] text-slate-700 tracking-tight font-sans">
        crowdfunder
      </span>
    )
  },
  {
    name: 'CIO Review',
    content: (
      <div className="text-center">
        <div className="text-[20px] font-[900] text-slate-900 font-serif leading-none">CIO</div>
        <div className="text-[9px] font-[800] tracking-widest text-[#006B8F] uppercase font-sans">Review</div>
      </div>
    )
  },
  {
    name: 'SiliconIndia',
    content: (
      <span className="text-[17px] font-[900] text-slate-900 tracking-tight font-sans">
        silicon<span className="text-[#006B8F]">india</span>
      </span>
    )
  },
  {
    name: 'The Economic Times',
    content: (
      <div className="text-center leading-tight">
        <span className="text-[8px] font-[700] text-slate-500 uppercase block font-sans">THE</span>
        <span className="text-[14px] font-[900] text-slate-900 font-serif tracking-tight block">ECONOMIC TIMES</span>
      </div>
    )
  }
];

export const FeaturedInLogosGrid = ({ data }) => {
  const title = data?.title || 'Featured In';
  const description = data?.description || 'Our technological innovations and digital achievements featured across premier global publications.';

  const logos = (data?.logos && Array.isArray(data.logos) && data.logos.filter(l => l.isActive !== false).length > 0)
    ? data.logos.filter(l => l.isActive !== false)
    : defaultLogos;

  return (
    <section className="py-16 bg-[#F4F8FA] border-b border-slate-200 text-slate-900 relative font-sans">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-2 font-sans">
            {title}
          </h2>
          {description && (
            <p className="text-[16px] font-[400] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* 6x2 Grid of 12 White Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-4 h-24 sm:h-28 shadow-xs border border-slate-200/80 flex items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center max-h-16 max-w-full">
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} className="h-8 max-h-12 w-auto object-contain" />
                ) : (
                  logo.content || defaultLogos[idx % defaultLogos.length]?.content || <span className="font-bold text-sm">{logo.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInLogosGrid;
