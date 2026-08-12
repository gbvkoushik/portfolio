import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Professional roles, responsibilities, and technical contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-400 transition-all duration-300 shadow-md shadow-cyan-500/30">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-purple-400" />
              </div>

              <div className="hidden sm:block absolute -left-36 top-1 text-xs font-bold text-slate-400 w-28 text-right">
                <div className="inline-flex items-center gap-1 text-cyan-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-slate-300 font-medium mt-1">
                      <span className="text-purple-300 font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 self-start sm:self-center">
                    {exp.type}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
