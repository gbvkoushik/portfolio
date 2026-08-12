import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-purple-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Certifications & <span className="text-gradient">Badges</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Certificates in Java, SQL Databases, and Web Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover p-7 rounded-3xl border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 shadow-lg">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-snug group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium mt-1">{cert.organization} • {cert.issueDate}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Skills Verified:</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl glass-card text-sm font-bold text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
