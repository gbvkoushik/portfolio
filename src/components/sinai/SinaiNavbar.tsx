import React, { useState } from 'react';
import { Activity, PhoneCall, FileText, Home, Search, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { LAB_INFO } from '../../data/sinaiData';

interface SinaiNavbarProps {
  onOpenReportLookup: () => void;
  onOpenHomeCollection: () => void;
}

export const SinaiNavbar: React.FC<SinaiNavbarProps> = ({ onOpenReportLookup, onOpenHomeCollection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Emergency & Accreditation Bar */}
      <div className="bg-slate-950/90 border-b border-emerald-500/20 text-xs px-4 py-2 text-slate-300 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              NABL & ISO 15189 Certified Lab
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {LAB_INFO.operatingHours}
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a href={`tel:${LAB_INFO.emergencyPhone}`} className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24/7 Helpline: <strong>{LAB_INFO.emergencyPhone}</strong></span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Glass Navigation */}
      <nav className="glass-nav px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Sinai Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
                SINAI <span className="text-emerald-400 font-black">DIAGNOSTICS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 block mt-0.5">
                Medical Diagnostics Center
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#tests" className="hover:text-emerald-400 transition-colors">Lab Tests</a>
            <a href="#packages" className="hover:text-emerald-400 transition-colors">Health Packages</a>
            <a href="#why-sinai" className="hover:text-emerald-400 transition-colors">Why Sinai</a>
            <a href="#doctors" className="hover:text-emerald-400 transition-colors">Pathologists</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenReportLookup}
              className="px-4 py-2.5 rounded-xl glass-card text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 font-semibold text-xs transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Report</span>
            </button>

            <button
              onClick={onOpenHomeCollection}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Home Sample Collection</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-card text-slate-200 lg:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-800/80 px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <a href="#tests" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-emerald-400 py-1">Lab Tests</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-emerald-400 py-1">Health Packages</a>
            <a href="#why-sinai" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-emerald-400 py-1">Why Sinai</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-emerald-400 py-1">Contact</a>

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenReportLookup(); }}
                className="w-full py-2.5 rounded-xl glass-card text-cyan-300 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Report</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenHomeCollection(); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Home className="w-4 h-4" />
                <span>Book Home Collection</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
