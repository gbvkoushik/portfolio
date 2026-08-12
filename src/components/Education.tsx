import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Formal computer science engineering degree program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {EDUCATION_DATA.map((edu) => {
            const listItems = edu.coursework || (edu as any).highlights || [];
            return (
              <div
                key={edu.id}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 text-sm font-medium mt-1">{edu.institution}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-cyan-300 font-bold px-3 py-1.5 rounded-full glass-card border border-cyan-500/30 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period} (Expected)</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Relevant Coursework</h4>
                  <ul className="space-y-2">
                    {listItems.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
