import React from 'react';
import Container from '../common/Container';

export const BrandLogoGrid = () => {
  const brandLogos = [
    // Row 1
    { name: 'AMERICAN EXPRESS', color: 'text-[#006B8F]', font: 'font-black tracking-tighter text-sm sm:text-base', symbol: '💳' },
    { name: 'LARSEN & TOUBRO', color: 'text-blue-900', font: 'font-extrabold italic text-xs sm:text-sm', symbol: '⚙️' },
    { name: 'LafargeHolcim', color: 'text-slate-800', font: 'font-black text-xs sm:text-sm', symbol: '🏢' },
    { name: 'CLP INDIA', color: 'text-amber-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '⚡' },
    { name: 'adani', color: 'text-blue-600', font: 'font-extrabold text-base sm:text-lg', symbol: '🌱' },
    { name: 'GFL', color: 'text-cyan-700', font: 'font-black text-base sm:text-lg', symbol: '🧪' },

    // Row 2
    { name: 'TOYOTA', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '🚗' },
    { name: 'ACC LIMITED', color: 'text-red-700', font: 'font-black italic text-xs sm:text-sm', symbol: '🏗️' },
    { name: 'Ambuja Cement', color: 'text-blue-900', font: 'font-black text-xs sm:text-sm', symbol: '🏛️' },
    { name: 'MORRIS GARAGES', color: 'text-red-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '🚘' },
    { name: 'JSW Energy', color: 'text-blue-800', font: 'font-black text-xs sm:text-sm', symbol: '⚡' },
    { name: 'vedanta', color: 'text-emerald-700', font: 'font-extrabold text-xs sm:text-sm', symbol: '⛏️' },

    // Row 3
    { name: 'HONDA', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '🏎️' },
    { name: "Dr.Reddy's", color: 'text-purple-700', font: 'font-black text-xs sm:text-sm', symbol: '💊' },
    { name: 'Chevron Oronite', color: 'text-blue-600', font: 'font-extrabold text-xs sm:text-sm', symbol: '🛢️' },
    { name: 'ORIENT CEMENT', color: 'text-slate-800', font: 'font-black text-xs sm:text-sm', symbol: '🏗️' },
    { name: 'Almarai', color: 'text-blue-800', font: 'font-extrabold text-xs sm:text-sm', symbol: '🌾' },
    { name: 'Cummins', color: 'text-red-600', font: 'font-black text-sm sm:text-base', symbol: '⚙️' },

    // Row 4
    { name: 'TDSG', color: 'text-red-700 border-2 border-red-600 px-2 py-0.5 rounded', font: 'font-black text-xs sm:text-sm', symbol: '🛡️' },
    { name: "L'ORÉAL", color: 'text-slate-900', font: 'font-black text-sm sm:text-base tracking-widest', symbol: '✨' },
    { name: 'ASTRAL PIPES', color: 'text-amber-700', font: 'font-black text-xs sm:text-sm', symbol: '🔧' },
    { name: 'TITAN COMPANY', color: 'text-teal-700', font: 'font-extrabold text-xs sm:text-sm', symbol: '⌚' },
    { name: 'BANK NOTE PAPER MILL', color: 'text-emerald-800', font: 'font-black text-[10px] sm:text-xs', symbol: '💵' },
    { name: 'Alembic', color: 'text-blue-700', font: 'font-black text-xs sm:text-sm', symbol: '🧪' }
  ];

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 relative text-slate-900 font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3">
            Trusted By The World’s Leading Brands
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
            We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
          </p>
        </div>

        {/* 6x4 Grid of 24 Cards - Copy to Copy with Image 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {brandLogos.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[22px] p-5 h-28 sm:h-32 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-slate-200/80 hover:border-[#006B8F] flex flex-col items-center justify-center text-center space-y-1.5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{brand.symbol}</span>
              <span className={`${brand.color} ${brand.font} font-sans uppercase leading-tight`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BrandLogoGrid;
