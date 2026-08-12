import React from 'react';
import { ShieldCheck, Cpu, Clock, Award, CheckCircle2, HeartPulse } from 'lucide-react';

export const WhySinai: React.FC = () => {
  return (
    <section id="why-sinai" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Excellence In Diagnostics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Why Choose <span className="text-gradient">Sinai Diagnostics</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Equipped with fully automated analyzers, barcoded sample tracking, and MD certified pathologists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">NABL Accredited Lab</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Compliant with ISO 15189:2012 medical laboratory quality standards ensuring 99.9% testing accuracy.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Robotic & Automated Analyzers</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Fully automated Roche and Siemens biochemistry analyzers eliminating human error in sample processing.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Express 4-Hour Turnaround</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Fastest turnaround time for emergency CBC, Troponin, and critical cardiac markers with instant WhatsApp notifications.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
