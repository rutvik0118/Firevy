import React from 'react';
import Container from '../common/Container';

export const TrustRecognitionBanner = ({ data }) => {
  const title = data?.title || 'Proud To Have Picked These Up Along The Way';

  return (
    <section className="py-10 bg-[#006B8F] text-white font-sans relative overflow-hidden border-b border-cyan-900/40">
      {/* Background Decorative Vector Waves */}
      <svg className="absolute left-0 top-0 h-full w-48 text-cyan-500/10 pointer-events-none" viewBox="0 0 100 200" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 Q50,100 0,200 Z" />
      </svg>
      <svg className="absolute right-0 top-0 h-full w-48 text-cyan-500/10 pointer-events-none" viewBox="0 0 100 200" preserveAspectRatio="none" fill="currentColor">
        <path d="M100,0 Q50,100 100,200 Z" />
      </svg>

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Left Title */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-[800] text-white tracking-tight leading-tight font-sans">
              {title}
            </h2>
          </div>

          {/* Right 4 White Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 w-full lg:w-auto">
            
            {/* Badge 1: Clutch */}
            <div className="bg-white rounded-[16px] p-3 text-slate-900 shadow-xl flex flex-col items-center justify-center text-center h-32 w-full sm:w-32 border border-slate-100 hover:scale-105 transition-transform">
              <div className="w-20 h-20 rounded-full bg-[#1E293B] text-white flex flex-col items-center justify-center p-1 border border-slate-700 shadow-inner">
                <span className="text-[6.5px] font-[800] text-slate-300 uppercase tracking-widest leading-none">CLIENTS SAY</span>
                <span className="text-[8.5px] font-[900] text-white leading-tight">WE DELIVER ON</span>
                <span className="text-[12px] font-[900] text-[#FF3D2E] font-serif leading-none mt-0.5">Clutch</span>
              </div>
            </div>

            {/* Badge 2: Upwork Top Rated */}
            <div className="bg-white rounded-[16px] p-3 text-slate-900 shadow-xl flex flex-col items-center justify-center text-center h-32 w-full sm:w-32 border border-slate-100 hover:scale-105 transition-transform">
              <div className="text-base font-[900] text-[#14A800] font-sans leading-none mb-1.5 flex items-center justify-center gap-1">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.182 1.558-3.078 2.838-3.078 1.18 0 2.148.91 2.148 2.711 0 1.954-1.066 2.712-2.148 2.712zM18.561 6.1c-2.484 0-4.303 1.636-5.077 3.864-1.373-2.022-2.39-4.526-2.39-4.526H8.483v7.498c0 1.706-.889 2.502-2.222 2.502-1.333 0-2.222-.796-2.222-2.502V5.438H1.428v7.498c0 3.123 2.133 5.438 4.833 5.438 2.7 0 4.833-2.315 4.833-5.438V9.774c.732 1.547 1.83 3.328 3.189 4.757l-1.34 6.307h2.71l.951-4.476c.928.535 1.952.84 3.018.84 2.871 0 4.957-2.136 4.957-5.525C24.581 8.272 22.381 6.1 18.561 6.1z"/>
                </svg>
                <span>Upwork</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-[#14A800] text-white text-[9px] font-[900] tracking-wider uppercase shadow-sm">
                TOP RATED
              </div>
            </div>

            {/* Badge 3: Freelancer Preferred */}
            <div className="bg-white rounded-[16px] p-3 text-slate-900 shadow-xl flex flex-col items-center justify-center text-center h-32 w-full sm:w-32 border border-slate-100 hover:scale-105 transition-transform">
              <div className="text-sm font-[900] text-[#0284C7] font-sans leading-none mb-1.5 flex items-center justify-center gap-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M14.086 4.5L12 7.747 9.914 4.5H4.5l5.043 7.756L4.5 20h5.414l2.086-3.247L14.086 20h5.414l-5.043-7.744L19.5 4.5h-5.414z"/>
                </svg>
                <span>freelancer</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-[#0284C7] text-white text-[8px] font-[900] tracking-wider uppercase">
                PREFERRED FREELANCER
              </div>
            </div>

            {/* Badge 4: GoodFirms / Trophy Profile */}
            <div className="bg-white rounded-[16px] p-3 text-slate-900 shadow-xl flex flex-col items-center justify-center text-center h-32 w-full sm:w-32 border border-slate-100 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center mb-1 text-base shadow-sm">
                🏆
              </div>
              <div className="text-[8.5px] font-[900] text-slate-600 uppercase tracking-wider leading-tight">VIEW OUR PROFILE</div>
              <div className="text-[11px] font-[900] text-[#006B8F] tracking-tight mt-0.5">goodfirms.co</div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustRecognitionBanner;
