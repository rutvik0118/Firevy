import React from 'react';
import Container from './Container';

export const TrustedBrandsGrid = () => {
  // 24 Exact Original Brand Logo Images matching Sapphire Solutions reference screenshot 1:1
  const globalBrands = [
    { name: 'AMERICAN EXPRESS', logo: '/images/logo_american_express.svg' },
    { name: 'LARSEN & TOUBRO', logo: '/images/logo_larsen_toubro.svg' },
    { name: 'LafargeHolcim', logo: '/images/logo_lafargeHolcim.svg' },
    { name: 'CLP INDIA', logo: '/images/logo_clp_india.svg' },
    { name: 'adani', logo: '/images/logo_adani.svg' },
    { name: 'GFL', logo: '/images/logo_gfl.svg' },

    { name: 'TOYOTA', logo: '/images/toyota_logo.webp' },
    { name: 'ACC LIMITED', logo: '/images/logo_acc.svg' },
    { name: 'Ambuja Cement', logo: '/images/logo_ambuja.svg' },
    { name: 'MORRIS GARAGES', logo: '/images/logo_mg_motors.svg' },
    { name: 'JSW Energy', logo: '/images/logo_jswenergy.svg' },
    { name: 'vedanta', logo: '/images/logo_vedanta.svg' },

    { name: 'HONDA', logo: '/images/honda_logo.png' },
    { name: 'Dr.Reddy\'s', logo: '/images/logo_drreddy.png' },
    { name: 'Chevron Oronite', logo: '/images/logo_chevron_oronite.svg' },
    { name: 'ORIENT CEMENT', logo: '/images/orient_logo.svg' },
    { name: 'Almarai', logo: '/images/almarai_corporate_logo.png' },
    { name: 'Cummins', logo: '/images/cummins.webp' },

    { name: 'TDSG', logo: '/images/logo_tdsg.png' },
    { name: 'L\'ORÉAL', logo: '/images/logo_loreal.png' },
    { name: 'ASTRAL PIPES', logo: '/images/logo_astral.png' },
    { name: 'TITAN', logo: '/images/logo_titan.webp' },
    { name: 'BANK NOTE PAPER MILL', logo: '/images/logo_bnpl_india.svg' },
    { name: 'Alembic', logo: '/images/alembic_logo.svg' }
  ];

  return (
    <section className="pt-12 pb-6 sm:pb-8 bg-white text-slate-900 text-left">
      <Container>
        {/* Centered Heading & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-slate-900 tracking-tight font-sans">
            Trusted By The World’s Leading Brands
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto font-sans">
            We are glad to be a digital technology and innovation partner with world’s leading brands. Building greater futures through innovation and collective knowledge.
          </p>
        </div>

        {/* 24 White Cards Grid (6 Columns x 4 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {globalBrands.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 flex items-center justify-center h-24 sm:h-28 text-center group cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 sm:max-h-14 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300 filter group-hover:brightness-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedBrandsGrid;
