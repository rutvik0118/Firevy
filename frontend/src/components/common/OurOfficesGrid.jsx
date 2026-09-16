import React from 'react';

const offices = [
  {
    country: 'India(HQ)',
    address: 'C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
  },
  {
    country: 'USA',
    address: '5004 NW 116th Ave,Coral Springs,Florida, FL 33076',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    country: 'Canada',
    address: '111 Tarawood lane NE, unit#403 Calgary AB, T3J 0G8',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
  },
  {
    country: 'Australia',
    address: 'U 2B 305 Harborne street,Glendalough 6016 WA',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
  },
  {
    country: 'UK',
    address: '42 Audley Avenue,Gillingham,ME73AY United Kingdom',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    country: 'UAE',
    address: 'A-21, Building 21, Ghoroob Mirdif, Dubai, United Arab Emirates',
    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
  }
];

/* SVG Map Silhouettes */
const IndiaMap = () => (
  <svg viewBox="0 0 200 240" className="w-24 h-28 sm:w-28 sm:h-32 opacity-40">
    <path d="M95 10 L105 8 L112 12 L118 10 L125 14 L130 12 L138 18 L142 16 L148 22 L152 20 L155 26 L150 30 L145 28 L140 32 L142 38 L138 42 L140 48 L145 52 L150 48 L155 52 L158 58 L155 62 L150 60 L148 65 L152 70 L148 75 L145 72 L140 78 L135 82 L138 88 L135 92 L130 88 L125 92 L120 96 L115 100 L118 106 L115 112 L110 118 L108 125 L105 132 L100 140 L95 150 L92 158 L88 165 L85 172 L82 178 L78 175 L75 170 L72 165 L68 160 L65 155 L60 148 L55 142 L52 135 L48 128 L45 120 L42 115 L40 108 L38 100 L42 95 L45 88 L48 82 L50 75 L52 68 L55 62 L58 55 L55 48 L52 42 L55 35 L60 30 L65 25 L70 20 L75 18 L80 15 L85 12 L90 10 Z"
      fill="#8BC5A0" />
  </svg>
);

const USAMap = () => (
  <svg viewBox="0 0 300 180" className="w-28 h-16 sm:w-32 sm:h-20 opacity-40">
    <path d="M10 60 L18 52 L28 48 L35 50 L42 45 L50 42 L58 44 L65 40 L72 42 L80 38 L88 40 L95 36 L102 38 L110 35 L118 38 L125 36 L132 40 L140 38 L148 42 L155 40 L162 44 L170 42 L178 46 L185 44 L192 48 L200 45 L208 48 L215 50 L222 52 L228 55 L235 58 L240 62 L245 68 L248 75 L250 82 L248 88 L245 95 L240 100 L235 105 L228 108 L222 112 L215 115 L208 118 L200 120 L192 118 L185 122 L178 120 L170 124 L162 120 L155 122 L148 118 L140 120 L132 116 L125 118 L118 114 L110 116 L102 112 L95 114 L88 110 L80 112 L72 108 L65 110 L58 106 L50 108 L42 104 L35 106 L28 102 L22 98 L18 92 L14 85 L12 78 L10 70 Z"
      fill="#9EBFD4" />
  </svg>
);

const CanadaMap = () => (
  <svg viewBox="0 0 300 200" className="w-28 h-18 sm:w-32 sm:h-22 opacity-40">
    <path d="M20 80 L30 70 L40 65 L50 68 L60 60 L70 55 L80 58 L90 50 L100 48 L110 52 L120 45 L130 42 L140 45 L150 40 L160 42 L170 38 L180 42 L190 40 L200 45 L210 42 L220 48 L230 52 L240 55 L250 60 L258 65 L265 72 L270 80 L272 88 L270 95 L265 102 L258 108 L250 115 L240 118 L230 122 L220 125 L210 128 L200 130 L190 128 L180 132 L170 128 L160 130 L150 128 L140 130 L130 126 L120 128 L110 124 L100 126 L90 122 L80 118 L70 115 L60 110 L50 105 L40 98 L32 92 L25 86 Z"
      fill="#D49E9E" />
  </svg>
);

const AustraliaMap = () => (
  <svg viewBox="0 0 280 220" className="w-28 h-20 sm:w-32 sm:h-24 opacity-40">
    <path d="M40 50 L55 42 L70 38 L85 35 L100 32 L115 30 L130 28 L145 30 L160 28 L175 32 L190 35 L205 40 L218 48 L228 58 L235 70 L238 82 L240 95 L238 108 L235 118 L228 128 L220 138 L210 145 L198 150 L185 155 L172 158 L158 160 L145 158 L132 160 L118 158 L105 155 L92 150 L80 145 L68 138 L58 128 L50 118 L44 108 L40 95 L38 82 L38 68 L38 58 Z"
      fill="#8BC5A0" />
  </svg>
);

const UKMap = () => (
  <svg viewBox="0 0 140 220" className="w-16 h-24 sm:w-20 sm:h-28 opacity-40">
    <path d="M55 12 L65 8 L75 12 L82 18 L88 25 L92 35 L95 45 L92 52 L88 48 L82 52 L85 58 L90 65 L92 72 L90 80 L85 88 L88 95 L92 102 L90 110 L85 118 L80 125 L75 132 L70 140 L65 148 L60 158 L55 168 L50 175 L45 180 L40 175 L38 168 L35 160 L32 152 L30 145 L28 138 L30 130 L32 122 L28 115 L25 108 L28 100 L30 92 L28 85 L25 78 L28 70 L32 62 L30 55 L28 48 L32 40 L35 32 L40 25 L45 18 L50 14 Z"
      fill="#9EBFD4" />
  </svg>
);

const UAEMap = () => (
  <svg viewBox="0 0 200 150" className="w-24 h-16 sm:w-28 sm:h-20 opacity-40">
    <path d="M30 45 L45 38 L60 32 L75 28 L90 26 L105 28 L120 26 L135 28 L150 32 L162 38 L172 45 L178 55 L180 65 L178 75 L172 85 L162 92 L150 98 L135 102 L120 104 L105 102 L90 104 L75 100 L60 96 L48 90 L38 82 L32 72 L28 62 L28 52 Z"
      fill="#A0C58B" />
  </svg>
);

const countryMapComponents = {
  'India(HQ)': IndiaMap,
  'USA': USAMap,
  'Canada': CanadaMap,
  'Australia': AustraliaMap,
  'UK': UKMap,
  'UAE': UAEMap
};

const OurOfficesGrid = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#EDF3F8] font-sans relative overflow-hidden">
      {/* Subtle world map dot pattern background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #006085 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[30px] sm:text-[38px] font-[900] text-slate-900 tracking-tight leading-tight font-sans">
            Our Offices
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 mt-2.5 font-[400] font-sans">
            We are located at these locations
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {offices.map((office, idx) => {
            const MapComponent = countryMapComponents[office.country];
            return (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-slate-200/80 shadow-sm p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 group"
              >
                {/* Country Map Silhouette with Flag overlay */}
                <div className="mb-4 flex items-center justify-center min-h-[100px] sm:min-h-[110px] relative">
                  <div className="relative inline-flex items-center justify-center">
                    {/* SVG Map silhouette */}
                    <MapComponent />
                    
                    {/* Flag image centered on map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={office.flagUrl}
                        alt={`${office.country} flag`}
                        className="w-14 h-10 sm:w-16 sm:h-11 object-cover rounded-[3px] shadow-sm border border-slate-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Country Name */}
                <h3 className="text-[18px] sm:text-[20px] font-[800] text-slate-900 tracking-tight mb-2 font-sans group-hover:text-[#006085] transition-colors">
                  {office.country}
                </h3>

                {/* Address */}
                <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed font-[400] font-sans">
                  {office.address}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurOfficesGrid;
