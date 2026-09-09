import React from 'react';
import Container from '../common/Container';

const defaultBrandLogos = [
  // Row 1
  { name: 'AMERICAN EXPRESS', image: '/images/logo_american_express.svg' },
  { name: 'LARSEN & TOUBRO', image: '/images/logo_larsen_toubro.svg' },
  { name: 'LafargeHolcim', image: '/images/logo_lafargeHolcim.svg' },
  { name: 'CLP INDIA', image: '/images/logo_clp_india.svg' },
  { name: 'adani', image: '/images/logo_adani.svg' },
  { name: 'GFL', image: '/images/logo_gfl.svg' },

  // Row 2
  { name: 'TOYOTA', image: '/images/toyota_logo.webp' },
  { name: 'ACC LIMITED', image: '/images/logo_acc.svg' },
  { name: 'Ambuja Cement', image: '/images/logo_ambuja.svg' },
  { name: 'MORRIS GARAGES', image: '/images/logo_mg_motors.svg' },
  { name: 'JSW Energy', image: '/images/logo_jswenergy.svg' },
  { name: 'vedanta', image: '/images/logo_vedanta.svg' },

  // Row 3
  { name: 'HONDA', image: '/images/honda_logo.png' },
  { name: "Dr.Reddy's", image: '/images/logo_drreddy.png' },
  { name: 'Chevron Oronite', image: '/images/logo_chevron_oronite.svg' },
  { name: 'ORIENT CEMENT', image: '/images/orient_logo.svg' },
  { name: 'Almarai', image: '/images/almarai_corporate_logo.png' },
  { name: 'Cummins', image: '/images/ncummins.png' },

  // Row 4
  { name: 'TDSG', image: '/images/logo_tdsg.png' },
  { name: "L'ORÉAL", image: '/images/logo_loreal.png' },
  { name: 'ASTRAL PIPES', image: '/images/logo_astral.png' },
  { name: 'TITAN COMPANY', image: '/images/logo_titan.webp' },
  { name: 'BANK NOTE PAPER MILL', image: '/images/logo_bnpl_india.svg' },
  { name: 'Alembic', image: '/images/alembic_logo.svg' }
];

export const BrandLogoGrid = ({ data }) => {
  const title = data?.title || 'Trusted By The World’s Leading Brands';
  const description = data?.description || 'We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.';

  const brandLogos = (data?.brands && Array.isArray(data.brands) && data.brands.filter(b => b.isActive !== false).length > 0)
    ? data.brands.filter(b => b.isActive !== false)
    : defaultBrandLogos;

  return (
    <section className="py-20 bg-[#F4F8FA] border-b border-slate-200 relative text-slate-900 font-sans overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-[34px] font-[800] tracking-tight text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-[18px] font-[400] text-slate-600 text-center leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* 6x4 Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {brandLogos.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[22px] p-5 h-28 sm:h-32 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] border border-slate-200/80 hover:border-[#006B8F] flex flex-col items-center justify-center text-center space-y-1.5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group cursor-pointer"
            >
              {brand.image ? (
                <img src={brand.image} alt={brand.name} className="h-8 w-auto object-contain max-w-[90%]" />
              ) : (
                <span className="text-2xl group-hover:scale-110 transition-transform">{brand.symbol || '🏢'}</span>
              )}
              <span className={`${brand.color || 'text-slate-900'} ${brand.font || 'font-extrabold text-xs sm:text-sm'} font-sans uppercase leading-tight`}>
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
