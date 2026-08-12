import React from 'react';
import { UserCheck, Award } from 'lucide-react';
import { DOCTORS_TEAM } from '../../data/sinaiData';

export const DoctorsTeam: React.FC = () => {
  return (
    <section id="doctors" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-4 h-4 text-purple-400" />
            <span>Pathology & Radiology Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Our Consultant <span className="text-gradient">Specialists</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Every report is verified and signed off by senior MD Pathologists and Radiologists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DOCTORS_TEAM.map((doc) => (
            <div
              key={doc.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col sm:flex-row items-center gap-6"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-28 h-28 rounded-2xl object-cover border-2 border-emerald-500/40 shrink-0 shadow-lg"
              />
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-2 inline-block">
                  {doc.experienceYears}+ Years Experience
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{doc.name}</h3>
                <p className="text-xs text-emerald-400 font-semibold mb-2">{doc.designation}</p>
                <p className="text-xs text-slate-400 mb-2">{doc.qualification}</p>
                <span className="text-xs text-slate-300 font-medium block">Specialization: <strong>{doc.specialization}</strong></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
