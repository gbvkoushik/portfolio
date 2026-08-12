import React from 'react';
import { PackageCheck, CheckCircle2, ShieldAlert, Sparkles, Percent } from 'lucide-react';
import { HEALTH_PACKAGES } from '../../data/sinaiData';

interface HealthPackagesProps {
  onBookPackage: (packageName: string) => void;
}

export const HealthPackages: React.FC<HealthPackagesProps> = ({ onBookPackage }) => {
  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <PackageCheck className="w-4 h-4 text-cyan-400" />
            <span>Preventive Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Full Body <span className="text-gradient">Health Packages</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Curated health screening packages with up to 63% savings. Includes doctor consultation & free home sample collection.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative group ${
                pkg.popular
                  ? 'border-emerald-500/50 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-emerald-950/20 shadow-2xl shadow-emerald-500/10'
                  : 'border-slate-800/80 hover:border-emerald-500/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                  Most Popular Package
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {pkg.targetGroup}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-extrabold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    <Percent className="w-3 h-3" />
                    Save {pkg.discountPercentage}%
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{pkg.title}</h3>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-950/80 text-emerald-400 text-xs font-bold mb-6 border border-slate-800">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Includes {pkg.testsIncludedCount} Lab Parameters</span>
                </div>

                {/* Included Test Parameters */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tests Included:</span>
                  {pkg.includedCategories.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-3xl font-black text-white">₹{pkg.price}</span>
                    <span className="text-xs text-slate-500 line-through ml-2">₹{pkg.originalPrice}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">Free Home Visit</span>
                </div>

                <button
                  onClick={() => onBookPackage(pkg.title)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs shadow-lg transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 hover:scale-[1.02]'
                      : 'glass-card text-emerald-300 hover:bg-emerald-500 hover:text-slate-950'
                  }`}
                >
                  Book Package Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
