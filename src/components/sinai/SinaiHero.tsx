import React, { useState } from 'react';
import { Search, ShieldCheck, Activity, Award, ArrowRight, CheckCircle2, Home, FileCheck2 } from 'lucide-react';
import { LAB_INFO } from '../../data/sinaiData';

interface SinaiHeroProps {
  onSearch: (query: string) => void;
  onOpenHomeCollection: () => void;
}

export const SinaiHero: React.FC<SinaiHeroProps> = ({ onSearch, onOpenHomeCollection }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      const el = document.getElementById('tests');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-mesh">
      
      {/* Background Emerald Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Search */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Accreditation Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-emerald-500/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NABL & ISO 15189 Accredited Diagnostic Lab</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-none">
              Precision Diagnostics. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 -webkit-background-clip-text text-transparent">
                Trusted Results.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              Sinai Medical Diagnostics delivers high-precision pathology, advanced radiology imaging, and comprehensive health checkup packages with same-day digital reports and home sample collection.
            </p>

            {/* Quick Test Search Bar */}
            <form onSubmit={handleSearchSubmit} className="w-full max-w-xl mb-8">
              <div className="glass-card p-2 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-400 ml-3 shrink-0" />
                <input
                  type="text"
                  placeholder="Search lab tests (e.g. CBC, Thyroid, Lipid, HbA1c, USG)..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 bg-transparent px-2 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-all shrink-0"
                >
                  Search Tests
                </button>
              </div>
            </form>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#tests"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>View Lab Tests</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenHomeCollection}
                className="px-7 py-3.5 rounded-2xl glass-card text-slate-200 hover:text-emerald-400 font-bold text-sm hover:border-emerald-500/50 transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4 text-emerald-400" />
                <span>Book Home Sample Collection</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Same Day Reports
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Automated Analyzers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Phlebotomist Home Visit
              </span>
            </div>

          </div>

          {/* Right Visual Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              
              {/* Emerald Outer Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700" />

              <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-slate-700/80 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                  alt="Sinai Medical Diagnostics Laboratory"
                  className="w-full h-72 sm:h-80 object-cover rounded-2xl mb-4"
                />

                {/* Statistics Box */}
                <div className="grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-md">
                  <div>
                    <span className="text-lg font-black text-emerald-400 block leading-tight">100K+</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Reports</span>
                  </div>
                  <div className="border-x border-slate-800">
                    <span className="text-lg font-black text-cyan-400 block leading-tight">99.9%</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Accuracy</span>
                  </div>
                  <div>
                    <span className="text-lg font-black text-teal-400 block leading-tight">NABL</span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Certified</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
