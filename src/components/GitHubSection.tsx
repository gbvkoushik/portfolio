import React from 'react';
import { Github, GitBranch, MapPin, Users, BookOpen, User, Instagram, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Profile & Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            GitHub <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real open-source repository and 72 contributions in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: User Profile Sidebar Card */}
          <div className="lg:col-span-4 glass-card p-7 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
            <div>
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 p-1 mx-auto mb-4 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-12 h-12" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-white">G.B.V.Koushik</h3>
                <p className="text-sm text-slate-400 font-mono mt-0.5">gbvkoushik • he/him</p>
                
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Profile</span>
                </a>
              </div>

              <div className="space-y-3.5 text-sm text-slate-300 border-t border-slate-800/80 pt-5">
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span><strong>1</strong> follower • <strong>2</strong> following</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Student</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Hyderabad</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-300 transition-colors font-medium">
                    __gbvk__
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Repositories & Contribution Graph */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Popular Repositories Box */}
            <div className="glass-card p-7 rounded-3xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Popular Repository</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">Customize pins</span>
              </div>

              <div className="max-w-md">
                {/* Repo Card */}
                <a
                  href="https://github.com/gbvkoushik/sinaimedical"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-300 text-base group-hover:text-emerald-200">sinaimedical</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700">Public</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">Vibe-coded medical diagnostic web application.</p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
                    <span>TypeScript / React</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contribution Graph Box */}
            <div className="glass-card p-7 rounded-3xl border border-slate-800/80">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-emerald-400" />
                  <span>72 contributions in the last year (2026)</span>
                </h4>
                <span className="px-3.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-sm">
                  2026
                </span>
              </div>

              {/* Heatmap Grid matching GitHub screenshot */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 mb-6 overflow-x-auto">
                <div className="flex justify-between text-xs text-slate-400 font-mono mb-3 min-w-[340px]">
                  <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                </div>
                
                <div className="grid grid-cols-12 gap-1.5 min-w-[340px]">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const isHighMonth = i >= 24; 
                    const intensity = isHighMonth ? ((i * 3) % 4) + 1 : (i === 10 ? 2 : 0);
                    const colors = ['bg-slate-800', 'bg-emerald-950', 'bg-emerald-700', 'bg-emerald-500', 'bg-emerald-400'];
                    return (
                      <div
                        key={i}
                        className={`h-4.5 rounded-sm ${colors[intensity]} border border-emerald-500/10 hover:scale-125 transition-transform`}
                        title={`Day ${i + 1}: ${intensity * 2} contributions`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Activity Overview Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-sm">
                <div>
                  <h5 className="font-bold text-white mb-2">Activity Overview</h5>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Contributed to <a href="https://github.com/gbvkoushik/sinaimedical" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline font-semibold">gbvkoushik/sinaimedical</a>.
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-3xl font-black text-emerald-400">100%</span>
                  <span className="text-xs font-bold text-slate-300">Commits Activity</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
