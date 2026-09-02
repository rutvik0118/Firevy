import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

export const SuccessStoriesSection = ({ category = 'general' }) => {
  const isAudio = category === 'audio' || category === 'spotify' || category === 'music';
  const isFood = category === 'food' || category === 'zomato' || category === 'restaurant';
  const isEcommerce = category === 'ecommerce' || category === 'amazon' || category === 'shopping';

  return (
    <section className="py-20 bg-[#EBF5FB] border-b border-slate-200 text-slate-900 font-sans text-left">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Success Stories
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Know Sapphire journey from concept to success. Explore how we’ve brought ideas to life and achieved remarkable results for our clients.
          </p>
        </div>

        {/* 3 Portfolio Cards */}
        {isAudio ? (
          /* Music & Audio Streaming Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Card 1: Spotify Clone Music Streaming App */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#1DB954] via-[#0F2E1B] to-[#0A0A0A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Spotify Music
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-[#1DB954] text-slate-950 shadow-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                    <span>Spotify Engine</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Spotify Music Streaming App</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-[#1DB954] flex items-center">
                      <span className="w-2 h-2 rounded-full bg-[#1DB954] mr-1" /> AI Daily Mix
                    </span>
                    <span>320 kbps Hi-Fi Audio</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Spotify Clone Music Streaming App
                </h3>
              </div>
            </div>

            {/* Card 2: Podcast & Audiobook Platform Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#7C3AED] via-[#3B0764] to-[#0F172A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Audiobook
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-purple-400/20 text-purple-200 border border-purple-400/30">
                    Podcast & Audio
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-purple-600 text-white shadow-sm">
                    Featured
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-purple-700 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Audiobook & Podcast Portal</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-purple-700">🎙️ Tech Talk Ep 42</span>
                    <span>1.5x Speed Sync</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Podcast & Audiobook Platform Development
                </h3>
              </div>
            </div>

            {/* Card 3: Hi-Fi Live Radio & Artist Marketplace App */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0F172A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Live Radio
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">
                    Hi-Fi Audio
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Live Stream
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Hi-Fi Live Radio Platform</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-[#005F96]">📻 Live DJ 24/7</span>
                    <span>Artist Tipping Hub</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Hi-Fi Live Radio & Artist Marketplace App
                </h3>
              </div>
            </div>
          </div>
        ) : isFood ? (
          /* Food Delivery Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Card 1: Tiffin Delivery App Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#CB202D] via-[#991B1B] to-[#450A0A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Food Delivery
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-rose-500 text-white shadow-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Zomato Engine</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#CB202D] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Tiffin & Meal Box Delivery App</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-[#CB202D]">🍱 Subscription Meals</span>
                    <span>Live GPS Track</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Tiffin Delivery App Development
                </h3>
              </div>
            </div>

            {/* Card 2: Nutrition Counter App Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#059669] via-[#047857] to-[#064E3B] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Nutrition App
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                    Health & Food
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-emerald-600 text-white shadow-sm">
                    Featured
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Nutrition Counter & Meal Planner</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-emerald-700">🥗 Macro Calorie Tracker</span>
                    <span>AI Menu Scan</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Nutrition Counter App Development
                </h3>
              </div>
            </div>

            {/* Card 3: Cloud Kitchen & Multi-Restaurant Ordering Platform */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#EA580C] via-[#9A3412] to-[#18181B] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Cloud Kitchen
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-orange-400/20 text-orange-200 border border-orange-400/30">
                    Aggregator
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    On-Demand
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-orange-600 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Cloud Kitchen Ordering Hub</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-orange-600">🍕 20-Min Auto Dispatch</span>
                    <span>Multi-Restaurant</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Cloud Kitchen & Restaurant Ordering Platform
                </h3>
              </div>
            </div>
          </div>
        ) : isEcommerce ? (
          /* E-Commerce & Amazon Case Studies - Sapphire Official Match */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Card 1: Fyndee Multi-Vendor Marketplace */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#4F46E5] via-[#312E81] to-[#0F172A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Marketplace
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-indigo-500 text-white shadow-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Amazon Engine</span>
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-indigo-600 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Fyndee Multi-Vendor Marketplace</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-indigo-600">🛍️ 500+ Active Vendors</span>
                    <span>Prime Shipping</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Case Study Fyndee Marketplace
                </h3>
              </div>
            </div>

            {/* Card 2: Clothing & Apparel Website Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#E11D48] via-[#881337] to-[#18181B] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Fashion Store
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-400/20 text-rose-200 border border-rose-400/30">
                    Fashion & Retail
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-rose-600 text-white shadow-sm">
                    Featured
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-rose-700 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Clothing & Apparel E-Commerce</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-rose-700">👗 AR Outfit Try-On</span>
                    <span>Flash Sales</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Clothing Website & App Development
                </h3>
              </div>
            </div>

            {/* Card 3: B2B Wholesale Toy & Electronics Marketplace (Clown Polska) */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#D97706] via-[#78350F] to-[#0F172A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Wholesale B2B
                </div>

                <div className="flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                    B2B Marketplace
                  </span>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#005F96] text-white shadow-sm">
                    Wholesale
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-amber-700 block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Clown Polska Toy Wholesale Portal</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-amber-700">🧸 Wholesale Bulk Rates</span>
                    <span>Multi-Currency</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Wholesale B2B E-Commerce Marketplace
                </h3>
              </div>
            </div>
          </div>
        ) : (
          /* General Enterprise / Mobility Case Studies */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Card 1: Cab Booking Application Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-[#FEE996] p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="text-amber-600/20 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Taxi Booking App
                </div>

                <div className="flex justify-between items-center z-10">
                  <div className="flex items-center space-x-1.5 bg-red-600 text-white px-2.5 py-1 rounded-full text-[10px] font-black shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>NGcab</span>
                  </div>
                  <span className="px-3 py-1 rounded-md text-[10px] font-extrabold bg-[#00B4D8] text-white shadow-sm">
                    Case Study
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">NGcab Taxi Dispatch Engine</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-amber-600">🚖 Live GPS Routing</span>
                    <span>Instant Booking</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Cab Booking Application Development
                </h3>
              </div>
            </div>

            {/* Card 2: Taxi Booking App Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-[#EAF2F9] p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="text-blue-600/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Quick Taxi
                </div>

                <div className="flex justify-end z-10">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
                    On-Demand
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">Quick Taxi Ride Hailing App</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-[#005F96]">Standard & Comfort</span>
                    <span>Multi-Gateway</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Taxi Booking App Development
                </h3>
              </div>
            </div>

            {/* Card 3: Cruise Booking App Development */}
            <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="h-60 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] p-5 relative overflow-hidden flex flex-col justify-between text-white">
                <div className="text-white/10 font-black text-4xl uppercase tracking-tighter absolute top-2 left-3 select-none pointer-events-none">
                  Cruise Booking
                </div>

                <div className="flex justify-end z-10">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    Travel & Cruise
                  </span>
                </div>

                <div className="relative z-10 my-auto p-4 rounded-xl bg-white/95 text-slate-900 shadow-xl border border-white/40 space-y-1 backdrop-blur-md">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#005F96] block">
                    MOBILE APP SOLUTION
                  </span>
                  <h4 className="text-sm font-black text-slate-900">CruiseNation Travel Portal</h4>
                  <div className="flex items-center justify-between pt-1 text-[10px] font-bold text-slate-500 border-t border-slate-100">
                    <span className="text-blue-700">🚢 Cabin Reservations</span>
                    <span>7-Night Tours</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-black text-slate-900 group-hover:text-[#005F96] transition-colors leading-snug">
                  Cruise Booking App Development
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* View All Portfolio Button */}
        <div className="text-center mb-16">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3.5 rounded-lg bg-[#005F96] hover:bg-[#004A75] text-white font-extrabold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Portfolio
          </Link>
        </div>

        {/* Stat Cards Row (Purple, Green, Pink, Dark Blue) 1:1 Sapphire Match */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#E2D9FF] border border-purple-200 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-slate-900 tracking-tight">23+</div>
            <div className="text-xs font-bold text-slate-700 mt-1.5">Years Experience</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#BCE8D0] border border-emerald-200 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-slate-900 tracking-tight">320+</div>
            <div className="text-xs font-bold text-slate-700 mt-1.5">5-Star Clutch Reviews</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFC5D7] border border-rose-200 text-slate-900 flex flex-col items-center justify-center text-center shadow-sm h-36 hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-slate-900 tracking-tight">2800+</div>
            <div className="text-xs font-bold text-slate-700 mt-1.5">Satisfied Clients</div>
          </div>

          <div className="p-6 rounded-2xl bg-[#005F96] text-white flex flex-col items-center justify-center text-center shadow-lg h-36 space-y-2.5">
            <div className="text-sm font-extrabold text-white">Want to start Projects</div>
            <a
              href="#quote-form"
              className="px-6 py-2 rounded-lg bg-white text-[#005F96] font-black text-xs hover:bg-slate-100 transition-colors shadow-md"
            >
              Get Estimation
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesSection;
