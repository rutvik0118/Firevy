import React from 'react';

export const BrandLogoMarquee = () => {
  const brandLogos = [
    // 1. AMERICAN EXPRESS
    {
      id: 'amex',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <div className="text-[#006FCF] font-[900] text-[15px] sm:text-[16px] tracking-tight leading-[1.05] text-left uppercase font-sans">
            AMERICAN<br />EXPRESS
          </div>
        </div>
      )
    },
    // 2. Alembic
    {
      id: 'alembic',
      node: (
        <div className="flex flex-col items-center justify-center px-5 h-14 select-none">
          <div className="flex items-center space-x-1.5">
            <span className="text-[20px] sm:text-[22px] font-[800] italic text-[#0066B3] tracking-tight font-serif">
              Alembic
            </span>
            <svg viewBox="0 0 24 16" className="w-5 h-3.5 text-[#00A86B]" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 14 L12 2 L22 14" stroke="#0066B3" />
              <path d="M6 14 L12 6 L18 14" stroke="#00A86B" />
            </svg>
          </div>
          <span className="text-[8px] sm:text-[8.5px] font-[700] text-[#00A86B] tracking-tight leading-none mt-0.5">
            Touching Lives over 100 years
          </span>
        </div>
      )
    },
    // 3. HONDA
    {
      id: 'honda',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <span className="text-[19px] sm:text-[21px] font-[900] tracking-[0.14em] text-[#E52020] uppercase font-sans">
            HONDA
          </span>
        </div>
      )
    },
    // 4. LafargeHolcim
    {
      id: 'lafarge',
      node: (
        <div className="flex flex-col items-center justify-center px-5 h-14 select-none">
          <div className="w-8 h-8 rounded-[3px] bg-[#4A4A4A] text-white flex items-center justify-center font-[900] text-[13px] tracking-tighter leading-none">
            LH
          </div>
          <span className="text-[10px] sm:text-[10.5px] font-[700] text-[#4A4A4A] tracking-tight leading-none mt-1">
            LafargeHolcim
          </span>
        </div>
      )
    },
    // 5. Cummins
    {
      id: 'cummins',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#DE1424] rounded-[4px] flex items-center justify-center relative shadow-xs">
            {/* Bold stylized C */}
            <span className="text-white font-black text-[22px] sm:text-[24px] font-sans -ml-0.5">
              C
            </span>
            <span className="absolute bottom-1 right-1 text-[5px] text-white/90 font-bold uppercase tracking-tighter">
              cummins
            </span>
          </div>
        </div>
      )
    },
    // 6. L'ORÉAL
    {
      id: 'loreal',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <span className="text-[21px] sm:text-[23px] font-sans font-normal tracking-[0.16em] text-[#0A0A0A]">
            L'ORÉAL
          </span>
        </div>
      )
    },
    // 7. +TDSG-
    {
      id: 'tdsg',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <div className="border-[2.5px] border-[#DE1424] rounded-[5px] px-3 py-0.5 flex items-center justify-center bg-white shadow-xs">
            <span className="text-[17px] sm:text-[18px] font-[900] tracking-wider text-[#DE1424] font-mono">
              +TDSG-
            </span>
          </div>
        </div>
      )
    },
    // 8. ASTRAL PIPES
    {
      id: 'astral',
      node: (
        <div className="flex items-center space-x-2 px-5 h-14 select-none">
          <svg viewBox="0 0 40 40" className="w-8 h-8 text-[#D97706]" fill="none">
            <polygon points="20,3 37,35 3,35" stroke="#D97706" strokeWidth="2.8" />
            <polygon points="20,11 31,31 9,31" stroke="#F59E0B" strokeWidth="2.2" />
            <polygon points="20,18 26,28 14,28" stroke="#B45309" strokeWidth="1.6" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[16px] sm:text-[17px] font-[900] tracking-wider text-[#0066B3] leading-none">ASTRAL</span>
            <span className="text-[9.5px] sm:text-[10px] font-[800] tracking-widest text-[#0066B3] leading-tight mt-0.5">PIPES</span>
          </div>
        </div>
      )
    },
    // 9. CLP INDIA
    {
      id: 'clp',
      node: (
        <div className="flex flex-col items-center justify-center px-5 h-14 select-none">
          <div className="flex items-center space-x-1">
            <span className="text-[16px] sm:text-[17px] font-[800] tracking-wider text-[#4B5563] font-mono">CLP</span>
            <div className="w-4 h-4 rounded-full bg-[#F59E0B] flex items-center justify-center text-white text-[9px] font-bold shadow-xs">
              ☀
            </div>
            <span className="text-[16px] sm:text-[17px] font-[800] tracking-wider text-[#4B5563] font-mono">InDIA</span>
          </div>
          <span className="text-[8.5px] font-[600] text-[#6B7280] tracking-tight leading-none mt-0.5">The power of new standards</span>
        </div>
      )
    },
    // 10. adani
    {
      id: 'adani',
      node: (
        <div className="flex items-center justify-center px-5 h-14 select-none">
          <span 
            className="text-[28px] sm:text-[30px] font-[700] tracking-tight lowercase"
            style={{
              background: 'linear-gradient(90deg, #0077B6 0%, #0096C7 40%, #7209B7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            adani
          </span>
        </div>
      )
    },
    // 11. TOYOTA
    {
      id: 'toyota',
      node: (
        <div className="flex flex-col items-center justify-center px-5 h-14 select-none">
          <svg viewBox="0 0 50 32" className="w-9 h-5.5 sm:w-10 sm:h-6" fill="none">
            <ellipse cx="25" cy="16" rx="23" ry="14" stroke="#94A3B8" strokeWidth="2.5" />
            <ellipse cx="25" cy="11" rx="14" ry="7.5" stroke="#94A3B8" strokeWidth="2.2" />
            <ellipse cx="25" cy="17" rx="6" ry="11" stroke="#94A3B8" strokeWidth="2.2" />
          </svg>
          <span className="text-[10.5px] sm:text-[11px] font-[900] tracking-[0.2em] text-[#DE1424] leading-none mt-0.5">
            TOYOTA
          </span>
        </div>
      )
    },
    // 12. Almarai
    {
      id: 'almarai',
      node: (
        <div className="flex flex-col items-center justify-center px-5 h-14 select-none">
          <svg viewBox="0 0 40 14" className="w-7 h-2.5 sm:w-8 sm:h-3 text-[#00A86B]" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 12 Q20 2 36 12" stroke="#008080" />
            <path d="M8 9 Q20 0 32 9" stroke="#00A86B" />
          </svg>
          <div className="text-[12px] sm:text-[13px] font-[900] text-[#002D62] tracking-wider leading-none">
            المراعي
          </div>
          <span className="text-[13px] sm:text-[14px] font-[800] text-[#002D62] tracking-normal leading-none mt-0.5">
            Almarai
          </span>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/80 py-8 sm:py-9 overflow-hidden select-none flex items-center">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {/* Track 1 */}
        <div className="flex items-center space-x-10 sm:space-x-14 pr-10 sm:pr-14 shrink-0">
          {brandLogos.map((item, idx) => (
            <div key={`logo-1-${item.id}-${idx}`} className="shrink-0 flex items-center justify-center">
              {item.node}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
        <div className="flex items-center space-x-10 sm:space-x-14 pr-10 sm:pr-14 shrink-0" aria-hidden="true">
          {brandLogos.map((item, idx) => (
            <div key={`logo-2-${item.id}-${idx}`} className="shrink-0 flex items-center justify-center">
              {item.node}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoMarquee;
