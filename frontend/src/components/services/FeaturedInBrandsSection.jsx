import React from 'react';
import Container from '../common/Container';

// 1. Microsoft Logo (4 squares, grey default, colorful on hover)
const MicrosoftLogo = () => (
  <svg viewBox="0 0 88 88" className="h-10 w-10 shrink-0">
    <rect x="0" y="0" width="41" height="41" className="fill-[#737373] group-hover:fill-[#F25022] transition-colors duration-300" />
    <rect x="47" y="0" width="41" height="41" className="fill-[#737373] group-hover:fill-[#7FBA00] transition-colors duration-300" />
    <rect x="0" y="47" width="41" height="41" className="fill-[#737373] group-hover:fill-[#00A4EF] transition-colors duration-300" />
    <rect x="47" y="47" width="41" height="41" className="fill-[#737373] group-hover:fill-[#FFB900] transition-colors duration-300" />
  </svg>
);

// 2. Inc. Logo (Didot/Bodoni high-contrast bold serif)
const IncLogo = () => (
  <svg viewBox="0 0 100 40" className="h-7 w-auto">
    <text
      x="50%"
      y="32"
      textAnchor="middle"
      fontFamily="'Playfair Display', Didot, 'Bodoni MT', 'Times New Roman', Georgia, serif"
      fontSize="36"
      fontWeight="900"
      letterSpacing="-1"
      className="fill-[#475569] group-hover:fill-[#000000] transition-colors duration-300"
    >
      Inc.
    </text>
  </svg>
);

// 3. Google Play Logo (Play Triangle + Google Play Typography)
const GooglePlayLogo = () => (
  <svg viewBox="0 0 148 38" className="h-7 w-auto">
    <g transform="translate(2, 2)">
      {/* Cyan Base */}
      <path
        d="M2.5 1.5C1.6 2.4 1 3.9 1 5.8V28.2C1 30.1 1.6 31.6 2.5 32.5L18 17L2.5 1.5Z"
        className="fill-[#8C8C8C] group-hover:fill-[#00C3FF] transition-colors duration-300"
      />
      {/* Red Bottom */}
      <path
        d="M23.5 22.5L18 17L2.5 32.5C4.2 33.5 6.6 33.7 9 32.3L23.5 22.5Z"
        className="fill-[#737373] group-hover:fill-[#FF3D00] transition-colors duration-300"
      />
      {/* Green Top */}
      <path
        d="M23.5 11.5L9 1.7C6.6 0.3 4.2 0.5 2.5 1.5L18 17L23.5 11.5Z"
        className="fill-[#8C8C8C] group-hover:fill-[#00E676] transition-colors duration-300"
      />
      {/* Amber Right */}
      <path
        d="M29.2 15C30.3 15.7 31 16.8 31 17C31 17.2 30.3 18.3 29.2 19L23.5 22.5L18 17L23.5 11.5L29.2 15Z"
        className="fill-[#525252] group-hover:fill-[#FFC107] transition-colors duration-300"
      />
    </g>
    <text
      x="44"
      y="26"
      fontFamily="system-ui, -apple-system, 'Google Sans', sans-serif"
      fontSize="16"
      fontWeight="600"
      className="fill-[#525252] group-hover:fill-[#01875F] transition-colors duration-300"
      letterSpacing="-0.3"
    >
      Google Play
    </text>
  </svg>
);

// 4. App Store Logo (Apple Logo + App Store Wordmark)
const AppStoreLogo = () => (
  <svg viewBox="0 0 135 38" className="h-7 w-auto">
    <g transform="translate(2, 4) scale(0.9)">
      {/* Apple Leaf */}
      <path
        d="M17.4 7.2C18.8 5.4 19.8 2.8 19.5 0.2C17.3 0.3 14.6 1.7 13.1 3.4C11.8 4.9 10.7 7.5 11.1 10C13.5 10.2 16 8.8 17.4 7.2Z"
        className="fill-[#475569] group-hover:fill-[#0071E3] transition-colors duration-300"
      />
      {/* Apple Body */}
      <path
        d="M19.5 14C16.5 14.2 14.1 12.3 12.5 12.3C10.9 12.3 8.7 14 6.7 14C3.5 14 0.6 16.1 0.6 21.2C0.6 25 2.2 29.5 4.1 32.2C5.5 34.2 7 36.4 9.2 36.3C11.3 36.2 12.1 34.9 14.6 34.9C17 34.9 17.7 36.3 19.9 36.3C22.2 36.2 23.5 34.3 24.9 32.2C26.6 29.8 27.2 27.5 27.4 27.4C27.2 27.3 22.8 25.6 22.8 20.6C22.8 16.4 26.2 14.4 26.4 14.2C24.3 11.2 21.1 10.7 20 10.7C17.5 10.5 15 12.2 13.8 12.2C12.5 12.2 10.5 10.7 8.5 10.7C5.8 10.7 3.3 12.2 1.9 14.7"
        className="fill-[#475569] group-hover:fill-[#0071E3] transition-colors duration-300"
      />
    </g>
    <text
      x="36"
      y="26"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="16.5"
      fontWeight="700"
      className="fill-[#475569] group-hover:fill-[#0071E3] transition-colors duration-300"
      letterSpacing="-0.4"
    >
      App Store
    </text>
  </svg>
);

// 5. Forbes Logo (Dark Gray Rectangle with Serif Wordmark)
const ForbesLogo = () => (
  <svg viewBox="0 0 110 38" className="h-8 w-auto">
    <rect
      x="0"
      y="2"
      width="110"
      height="34"
      rx="4"
      className="fill-[#475569] group-hover:fill-[#0A2540] transition-colors duration-300"
    />
    <text
      x="55"
      y="27"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="22"
      fontWeight="900"
      fill="#FFFFFF"
      letterSpacing="1"
    >
      Forbes
    </text>
  </svg>
);

// 6. BBB Logo (Torch Emblem with BBB and Start With Trust)
const BbbLogo = () => (
  <svg viewBox="0 0 65 52" className="h-11 w-auto">
    {/* Torch Flame & Holder */}
    <path
      d="M32.5 2C32.5 2 27 9 27 15C27 18 29.5 20.5 32.5 20.5C35.5 20.5 38 18 38 15C38 9 32.5 2 32.5 2Z"
      className="fill-[#475569] group-hover:fill-[#005A9C] transition-colors duration-300"
    />
    <path
      d="M23 21H42C43 21 44 22 44 23V25C44 26 43 27 42 27H23C22 27 21 26 21 25V23C21 22 22 21 23 21Z"
      className="fill-[#475569] group-hover:fill-[#005A9C] transition-colors duration-300"
    />
    <path
      d="M26 28L30 33H35L39 28H26Z"
      className="fill-[#475569] group-hover:fill-[#005A9C] transition-colors duration-300"
    />
    {/* BBB Text */}
    <text
      x="32.5"
      y="43"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="13"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#005A9C] transition-colors duration-300"
      letterSpacing="1"
    >
      BBB
    </text>
    <text
      x="32.5"
      y="50"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="5.5"
      fontWeight="700"
      className="fill-[#64748B] group-hover:fill-[#005A9C] transition-colors duration-300"
    >
      Start With Trust ®
    </text>
  </svg>
);

// 7. YOURSTORY Logo (Heavy Condensed Sans Uppercase)
const YourStoryLogo = () => (
  <svg viewBox="0 0 130 32" className="h-6 w-auto">
    <text
      x="65"
      y="24"
      textAnchor="middle"
      fontFamily="'Arial Black', Impact, 'Trebuchet MS', sans-serif"
      fontSize="20"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#E21B22] transition-colors duration-300"
      letterSpacing="0.8"
    >
      YOURSTORY
    </text>
  </svg>
);

// 8. Wikipedia Logo (Detailed Puzzle Sphere Vector)
const WikipediaLogo = () => (
  <svg viewBox="0 0 54 54" className="h-11 w-auto">
    <circle cx="27" cy="27" r="24" fill="none" className="stroke-[#475569] group-hover:stroke-[#3366CC] transition-colors duration-300" strokeWidth="1.6" />
    <path
      d="M27 3 C17 11, 17 43, 27 51 M27 3 C37 11, 37 43, 27 51"
      fill="none"
      className="stroke-[#475569] group-hover:stroke-[#3366CC] transition-colors duration-300"
      strokeWidth="1.2"
    />
    <path
      d="M7 16 C17 21, 37 21, 47 16 M4 27 C15 32, 39 32, 50 27 M7 38 C17 33, 37 33, 47 38"
      fill="none"
      className="stroke-[#475569] group-hover:stroke-[#3366CC] transition-colors duration-300"
      strokeWidth="1.2"
    />
    <path
      d="M22 10 Q25 7 27 10 Q29 13 32 10 M15 22 Q18 20 20 22 Q22 24 25 22 M29 22 Q32 20 34 22 Q36 24 39 22 M20 34 Q23 32 25 34 Q27 36 30 34"
      fill="none"
      className="stroke-[#475569] group-hover:stroke-[#3366CC] transition-colors duration-300"
      strokeWidth="1"
    />
    <path d="M23 4 L27 8 L31 4" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
    <text
      x="27"
      y="32"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="16"
      fontWeight="bold"
      className="fill-[#475569] group-hover:fill-[#3366CC] transition-colors duration-300"
    >
      W
    </text>
  </svg>
);

// 9. Entrepreneur Logo (Italic Serif Wordmark)
const EntrepreneurLogo = () => (
  <svg viewBox="0 0 150 34" className="h-7 w-auto">
    <text
      x="75"
      y="26"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="22"
      fontStyle="italic"
      fontWeight="800"
      className="fill-[#475569] group-hover:fill-[#111827] transition-colors duration-300"
      letterSpacing="-0.3"
    >
      Entrepreneur
    </text>
  </svg>
);

// 10. Mashable Logo (Clean Bold Sans Wordmark)
const MashableLogo = () => (
  <svg viewBox="0 0 130 34" className="h-7 w-auto">
    <text
      x="65"
      y="26"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, 'Helvetica Neue', sans-serif"
      fontSize="22"
      fontWeight="900"
      className="fill-[#64748B] group-hover:fill-[#00A3E0] transition-colors duration-300"
      letterSpacing="-0.6"
    >
      Mashable
    </text>
  </svg>
);

// 11. Capterra Logo (Origami Triangle + Capterra Wordmark)
const CapterraLogo = () => (
  <svg viewBox="0 0 130 34" className="h-7 w-auto">
    <g transform="translate(0, 5)">
      <polygon points="2,22 14,2 26,22 14,16" className="fill-[#64748B] group-hover:fill-[#FF9800] transition-colors duration-300" />
      <polygon points="14,2 26,22 14,16" className="fill-[#475569] group-hover:fill-[#003865] transition-colors duration-300" />
    </g>
    <text
      x="34"
      y="24"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="18"
      fontWeight="800"
      className="fill-[#475569] group-hover:fill-[#003865] transition-colors duration-300"
      letterSpacing="-0.3"
    >
      Capterra
    </text>
  </svg>
);

// 12. c|net Logo (Circle with 'c' + Line + 'net')
const CnetLogo = () => (
  <svg viewBox="0 0 96 38" className="h-8 w-auto">
    <circle cx="17" cy="19" r="14" className="fill-[#475569] group-hover:fill-[#CC0000] transition-colors duration-300" />
    <text
      x="17"
      y="26"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="20"
      fontWeight="900"
      fill="#FFFFFF"
    >
      c
    </text>
    <line x1="38" y1="5" x2="38" y2="33" className="stroke-[#475569] group-hover:stroke-[#CC0000] transition-colors duration-300" strokeWidth="3.2" />
    <text
      x="46"
      y="29"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="26"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#CC0000] transition-colors duration-300"
      letterSpacing="-1.2"
    >
      net
    </text>
  </svg>
);

// 13. The New York Times Logo (Old English / Blackletter Gothic)
const NytLogo = () => (
  <svg viewBox="0 0 165 32" className="h-6 w-auto">
    <text
      x="82.5"
      y="23"
      textAnchor="middle"
      fontFamily="'Old English Text MT', 'UnifrakturMaguntia', 'Chomsky', 'Times New Roman', serif"
      fontSize="18"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#000000] transition-colors duration-300"
      letterSpacing="0.2"
    >
      The New York Times
    </text>
  </svg>
);

// 14. TechCrunch Logo (Classic Block Monogram TC)
const TechCrunchLogo = () => (
  <svg viewBox="0 0 68 36" className="h-8 w-auto">
    <path
      d="M2 4 H28 V12 H18 V32 H10 V12 H2 Z"
      className="fill-[#64748B] group-hover:fill-[#00A562] transition-colors duration-300"
    />
    <path
      d="M34 4 H60 V12 H42 V24 H60 V32 H34 Z"
      className="fill-[#64748B] group-hover:fill-[#00A562] transition-colors duration-300"
    />
  </svg>
);

// 15. Clutch Logo (Clutch Typography)
const ClutchBrandLogo = () => (
  <svg viewBox="0 0 110 36" className="h-8 w-auto">
    <text
      x="55"
      y="27"
      textAnchor="middle"
      fontFamily="system-ui, -apple-system, 'Helvetica Neue', sans-serif"
      fontSize="26"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#1B2A4A] transition-colors duration-300"
      letterSpacing="-0.8"
    >
      Clutch
    </text>
    <circle
      cx="47"
      cy="7"
      r="2.5"
      className="fill-[#475569] group-hover:fill-[#FF3E2E] transition-colors duration-300"
    />
  </svg>
);

// 16. PCMag Logo (PC Badge with PCMAG.COM banner)
const PcmagLogo = () => (
  <svg viewBox="0 0 68 44" className="h-9 w-auto">
    <rect x="2" y="2" width="64" height="40" rx="4" className="fill-[#475569] group-hover:fill-[#D0202F] transition-colors duration-300" />
    <text
      x="34"
      y="26"
      textAnchor="middle"
      fontFamily="Impact, 'Arial Black', sans-serif"
      fontSize="23"
      fontWeight="900"
      fill="#FFFFFF"
      letterSpacing="1"
    >
      PC
    </text>
    <rect x="6" y="31" width="56" height="8" rx="2" fill="#FFFFFF" />
    <text
      x="34"
      y="38"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="6.5"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#D0202F] transition-colors duration-300"
      letterSpacing="0.8"
    >
      PCMAG.COM
    </text>
  </svg>
);

// 17. G2 Crowd Logo (G2 circular badge + CROWD text)
const G2CrowdLogo = () => (
  <svg viewBox="0 0 120 34" className="h-7 w-auto">
    <circle
      cx="16"
      cy="17"
      r="13"
      className="fill-[#475569] group-hover:fill-[#FF492C] transition-colors duration-300"
    />
    <text
      x="16"
      y="23"
      textAnchor="middle"
      fontFamily="system-ui, sans-serif"
      fontSize="15"
      fontWeight="900"
      fill="#FFFFFF"
    >
      G
    </text>
    <text
      x="36"
      y="23"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="15"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#FF492C] transition-colors duration-300"
      letterSpacing="0.5"
    >
      CROWD
    </text>
  </svg>
);

// 18. The Telegraph Logo (Classic English Blackletter)
const TelegraphLogo = () => (
  <svg viewBox="0 0 145 32" className="h-6 w-auto">
    <text
      x="72.5"
      y="23"
      textAnchor="middle"
      fontFamily="'Old English Text MT', 'Chomsky', 'Times New Roman', serif"
      fontSize="18"
      fontWeight="900"
      className="fill-[#475569] group-hover:fill-[#000000] transition-colors duration-300"
    >
      The Telegraph
    </text>
  </svg>
);

const featuredBrands = [
  { id: 1, name: 'Microsoft', component: MicrosoftLogo },
  { id: 2, name: 'Inc.', component: IncLogo },
  { id: 3, name: 'Google Play', component: GooglePlayLogo },
  { id: 4, name: 'App Store', component: AppStoreLogo },
  { id: 5, name: 'Forbes', component: ForbesLogo },
  { id: 6, name: 'BBB', component: BbbLogo },

  { id: 7, name: 'YOURSTORY', component: YourStoryLogo },
  { id: 8, name: 'Wikipedia', component: WikipediaLogo },
  { id: 9, name: 'Entrepreneur', component: EntrepreneurLogo },
  { id: 10, name: 'Mashable', component: MashableLogo },
  { id: 11, name: 'Capterra', component: CapterraLogo },
  { id: 12, name: 'CNET', component: CnetLogo },

  { id: 13, name: 'The New York Times', component: NytLogo },
  { id: 14, name: 'TechCrunch', component: TechCrunchLogo },
  { id: 15, name: 'Clutch', component: ClutchBrandLogo },
  { id: 16, name: 'PCMag', component: PcmagLogo },
  { id: 17, name: 'G2 Crowd', component: G2CrowdLogo },
  { id: 18, name: 'The Telegraph', component: TelegraphLogo }
];

export const FeaturedInBrandsSection = () => {
  return (
    <section className="py-7 sm:py-9 bg-[#FAFCFE] font-sans text-left">
      <Container className="max-w-7xl">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-9 sm:mb-11">
          <h2
            className="font-[800] text-[#0B0F19] tracking-tight leading-tight"
            style={{ fontSize: '32px' }}
          >
            We Have Been Featured In
          </h2>
        </div>

        {/* 18 Brand Cards Grid (6 Columns x 3 Rows on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {featuredBrands.map((brand) => {
            const LogoComponent = brand.component;
            return (
              <div
                key={brand.id}
                className="h-24 sm:h-[105px] rounded-[16px] bg-white border border-slate-100/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,95,150,0.12)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center p-4 text-center group cursor-pointer"
              >
                <div className="flex items-center justify-center w-full transform group-hover:scale-105 transition-all duration-300">
                  <LogoComponent />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedInBrandsSection;
