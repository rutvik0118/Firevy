import React from 'react';
import Container from '../common/Container';

export const MobileAppMarketStatsSection = () => {
  // 6 Slices for the Donut Chart (Exact 1:1 match to screenshot)
  const donutData = [
    {
      year: '2020',
      value: '6.95',
      color: '#FF6B5B', // Coral / Red-Orange
      angleStart: 150,
      angleEnd: 210,
      labelX: -85,
      labelY: 0,
      pointerX: -92,
      pointerY: 0,
      textPos: 'end'
    },
    {
      year: '2021',
      value: '7.1',
      color: '#E684C2', // Lavender / Pink
      angleStart: -150,
      angleEnd: -90,
      labelX: -55,
      labelY: -92,
      pointerX: -45,
      pointerY: -78,
      textPos: 'end'
    },
    {
      year: '2022',
      value: '7.26',
      color: '#FBBF24', // Amber / Golden Yellow
      angleStart: -90,
      angleEnd: -30,
      labelX: 55,
      labelY: -92,
      pointerX: 45,
      pointerY: -78,
      textPos: 'start'
    },
    {
      year: '2023',
      value: '7.33',
      color: '#8B5CF6', // Purple / Violet
      angleStart: -30,
      angleEnd: 30,
      labelX: 95,
      labelY: 0,
      pointerX: 85,
      pointerY: 0,
      textPos: 'start'
    },
    {
      year: '2024',
      value: '7.41',
      color: '#FA9284', // Salmon / Peach Coral
      angleStart: 30,
      angleEnd: 90,
      labelX: 60,
      labelY: 95,
      pointerX: 48,
      pointerY: 80,
      textPos: 'start'
    },
    {
      year: '2025',
      value: '7.67',
      color: '#00C8E5', // Turquoise / Sky Cyan
      angleStart: 90,
      angleEnd: 150,
      labelX: -60,
      labelY: 95,
      pointerX: -48,
      pointerY: 80,
      textPos: 'end'
    }
  ];

  // Helper to generate SVG Annular Donut Sector path
  const createDonutSlice = (cx, cy, rOuter, rInner, startDeg, endDeg) => {
    const toRad = (deg) => (deg * Math.PI) / 180;
    const a1 = toRad(startDeg);
    const a2 = toRad(endDeg);

    const x1 = cx + rOuter * Math.cos(a1);
    const y1 = cy + rOuter * Math.sin(a1);
    const x2 = cx + rOuter * Math.cos(a2);
    const y2 = cy + rOuter * Math.sin(a2);

    const x3 = cx + rInner * Math.cos(a2);
    const y3 = cy + rInner * Math.sin(a2);
    const x4 = cx + rInner * Math.cos(a1);
    const y4 = cy + rInner * Math.sin(a1);

    return `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
  };

  return (
    <section className="py-8 sm:py-12 bg-white text-slate-900 font-sans text-left overflow-hidden">
      <Container className="max-w-6xl">
        <div className="space-y-8 sm:space-y-10">

          {/* =========================================================================
              ROW 1: Bar Chart Left + Content Right
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Stacked Bar Chart Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-[440px] bg-[#F4F8FA] rounded-xl p-4 sm:p-5 border border-slate-100 shadow-sm relative overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:border-[#005F96]/30 group cursor-pointer">
                <div className="w-full relative flex items-end justify-center transition-transform duration-500 ease-out group-hover:scale-105 sm:group-hover:scale-[1.08]">
                  <svg
                    viewBox="0 0 460 270"
                    className="w-full h-auto overflow-visible select-none"
                    fill="none"
                  >
                    <defs>
                      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.08" />
                      </filter>
                    </defs>

                    {/* 8 Stacked Bars */}
                    {[
                      { x: 28, bottomH: 14, midH: 26, topH: 12 },
                      { x: 82, bottomH: 20, midH: 36, topH: 16, hasBadge: true },
                      { x: 136, bottomH: 27, midH: 48, topH: 20 },
                      { x: 190, bottomH: 35, midH: 62, topH: 25 },
                      { x: 244, bottomH: 44, midH: 78, topH: 30 },
                      { x: 298, bottomH: 54, midH: 94, topH: 36 },
                      { x: 352, bottomH: 64, midH: 112, topH: 42 },
                      { x: 406, bottomH: 74, midH: 132, topH: 48 }
                    ].map((bar, idx) => {
                      const barW = 28;
                      const baseY = 256;
                      const yBottom = baseY - bar.bottomH;
                      const yMid = yBottom - bar.midH;
                      const yTop = yMid - bar.topH;

                      return (
                        <g key={`bar-${idx}`} className="transition-all duration-300 hover:opacity-95">
                          {/* Bottom Layer: Dark Teal Blue */}
                          <rect
                            x={bar.x}
                            y={yBottom}
                            width={barW}
                            height={bar.bottomH}
                            fill="#1E5D7A"
                            rx="1"
                          />

                          {/* Middle Layer: Bright Blue */}
                          <rect
                            x={bar.x}
                            y={yMid}
                            width={barW}
                            height={bar.midH}
                            fill="#00A8E8"
                          />

                          {/* Top Layer: Sky Ice Blue with subtle top rounded corners */}
                          <rect
                            x={bar.x}
                            y={yTop}
                            width={barW}
                            height={bar.topH}
                            fill="#67E8F9"
                            rx="1.5"
                          />

                          {/* Floating $250.75 B Badge on Bar 2 */}
                          {bar.hasBadge && (
                            <g transform={`translate(${bar.x - 22}, ${yTop - 34})`} filter="url(#cardShadow)">
                              <rect
                                x="0"
                                y="0"
                                width="72"
                                height="24"
                                rx="4"
                                fill="#FFFFFF"
                                stroke="#E2E8F0"
                                strokeWidth="1"
                              />
                              <text
                                x="36"
                                y="16"
                                fill="#0F172A"
                                fontSize="10.5"
                                fontWeight="700"
                                fontFamily="sans-serif"
                                textAnchor="middle"
                              >
                                $250.75 B
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Heading + Paragraph + Button */}
            <div className="lg:col-span-6 space-y-3.5 text-left">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                Mobile App Market Stats
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.65] max-w-lg">
                The global mobile application market size was valued at nearly USD 250.75 billion in 2023 and is projected to grow at a CAGR of 15% from 2024 to 2030.
              </p>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13px] sm:text-[13.5px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  Connect With An Expert
                </a>
              </div>
            </div>

          </div>

          {/* =========================================================================
              ROW 2: Content Left + Donut Chart Right
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Heading + Paragraph + Button */}
            <div className="lg:col-span-6 space-y-3.5 text-left order-2 lg:order-1">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] font-[800] text-[#0B0F19] tracking-tight leading-tight">
                The Mobile Application<br />Development Market Size
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] font-normal leading-[1.65] max-w-lg">
                According to one study, there will be 4.74 billion smartphone users by the end of 2024, growing at a rate of 2.2% each year. When examining the rise in smartphone users between 2020 to 2025 , we find that the average yearly growth rate is 6.2%.
              </p>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-[4px] bg-[#005F96] hover:bg-[#004B77] text-white font-[700] text-[13px] sm:text-[13.5px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  Connect With An Expert
                </a>
              </div>
            </div>

            {/* Right Column: Donut Semicircle / Circle Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
              <div className="w-full max-w-[440px] bg-[#F4F8FA] rounded-xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-col items-center justify-center transition-all duration-500 ease-out hover:shadow-xl hover:border-[#005F96]/30 group cursor-pointer">
                
                {/* Donut Header Title */}
                <h4 className="text-[11px] sm:text-[12px] font-[700] text-slate-800 text-center mb-3 max-w-xs tracking-tight group-hover:text-[#005F96] transition-colors">
                  Number of Global Smartphone Users From 2020 To 2025(In Billions)
                </h4>

                {/* SVG Donut Chart with Exact Labels & Numbers */}
                <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 sm:group-hover:scale-[1.10]">
                  <svg viewBox="0 0 320 320" className="w-full h-full overflow-visible select-none">
                    <g transform="translate(160, 160)">
                      
                      {/* Donut Slices */}
                      {donutData.map((slice, i) => {
                        const pathD = createDonutSlice(0, 0, 78, 42, slice.angleStart, slice.angleEnd);
                        const midAngle = ((slice.angleStart + slice.angleEnd) / 2 * Math.PI) / 180;
                        const textR = 60;
                        const numX = textR * Math.cos(midAngle);
                        const numY = textR * Math.sin(midAngle) + 4;

                        return (
                          <g key={`slice-${i}`} className="transition-all duration-200 hover:opacity-90">
                            {/* Slice Path */}
                            <path
                              d={pathD}
                              fill={slice.color}
                              className="transition-all duration-200 cursor-pointer"
                            />

                            {/* Inner Value Number */}
                            <text
                              x={numX}
                              y={numY}
                              fill="#1E293B"
                              fontSize="9.5"
                              fontWeight="800"
                              fontFamily="sans-serif"
                              textAnchor="middle"
                              className="pointer-events-none"
                            >
                              {slice.value}
                            </text>
                          </g>
                        );
                      })}

                      {/* Connecting Pointer Lines & Year Labels */}
                      {/* 2020 Left */}
                      <line x1="-78" y1="0" x2="-98" y2="0" stroke="#94A3B8" strokeWidth="1" />
                      <text x="-104" y="3.5" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="end">2020</text>

                      {/* 2021 Top-Left */}
                      <line x1="-39" y1="-68" x2="-52" y2="-86" stroke="#94A3B8" strokeWidth="1" />
                      <text x="-56" y="-90" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="middle">2021</text>

                      {/* 2022 Top-Right */}
                      <line x1="39" y1="-68" x2="52" y2="-86" stroke="#94A3B8" strokeWidth="1" />
                      <text x="56" y="-90" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="middle">2022</text>

                      {/* 2023 Right */}
                      <line x1="78" y1="0" x2="98" y2="0" stroke="#94A3B8" strokeWidth="1" />
                      <text x="104" y="3.5" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="start">2023</text>

                      {/* 2024 Bottom-Right */}
                      <line x1="39" y1="68" x2="52" y2="86" stroke="#94A3B8" strokeWidth="1" />
                      <text x="56" y="98" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="start">2024</text>

                      {/* 2025 Bottom-Left */}
                      <line x1="-39" y1="68" x2="-52" y2="86" stroke="#94A3B8" strokeWidth="1" />
                      <text x="-56" y="98" fill="#475569" fontSize="9.5" fontWeight="600" textAnchor="end">2025</text>

                    </g>
                  </svg>
                </div>

                {/* Subtitle Below Chart */}
                <p className="text-[10px] sm:text-[10.5px] font-[600] text-slate-600 mt-2 tracking-tight">
                  Mobile Users in Billions
                </p>

              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default MobileAppMarketStatsSection;
