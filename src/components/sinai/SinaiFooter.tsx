import React from 'react';
import { Activity, ShieldCheck, ArrowUp, Phone, Mail } from 'lucide-react';
import { LAB_INFO } from '../../data/sinaiData';

export const SinaiFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-slate-800/80 bg-slate-950 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white">
                SINAI <span className="text-emerald-400">DIAGNOSTICS</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-3">
              {LAB_INFO.tagline}
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>NABL & ISO 15189 Certified</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Diagnostic Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#tests" className="hover:text-emerald-400">Pathology & Hematology</a></li>
              <li><a href="#tests" className="hover:text-emerald-400">Digital Radiology & USG</a></li>
              <li><a href="#tests" className="hover:text-emerald-400">12-Lead ECG & Cardiology</a></li>
              <li><a href="#tests" className="hover:text-emerald-400">Diabetes & Thyroid Profile</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Health Packages</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#packages" className="hover:text-emerald-400">Full Body Checkup</a></li>
              <li><a href="#packages" className="hover:text-emerald-400">Master Executive Wellness</a></li>
              <li><a href="#packages" className="hover:text-emerald-400">Senior Citizen Care Package</a></li>
              <li><a href="#home-collection" className="hover:text-emerald-400">Home Sample Collection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs">Helpline & Location</h4>
            <p className="text-slate-400 mb-2">{LAB_INFO.address}</p>
            <p className="text-emerald-400 font-bold mb-2">24/7 Helpline: {LAB_INFO.emergencyPhone}</p>
            <p className="text-slate-400">{LAB_INFO.email}</p>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <span>© {new Date().getFullYear()} {LAB_INFO.name} ({LAB_INFO.domain}). All Rights Reserved.</span>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-md hover:scale-105 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
