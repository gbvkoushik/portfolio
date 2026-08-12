import React, { useState, useEffect } from 'react';
import { Trophy, Code, Award, Sparkles, FolderGit2, Clock, GitBranch, Cpu, Terminal } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

const ICON_COMPONENTS: Record<string, React.ReactNode> = {
  FolderGit2: <FolderGit2 className="w-6 h-6 text-cyan-400" />,
  Clock: <Clock className="w-6 h-6 text-blue-400" />,
  GitBranch: <GitBranch className="w-6 h-6 text-purple-400" />,
  Code: <Code className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
  Terminal: <Terminal className="w-6 h-6 text-pink-400" />,
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-purple-400" />
};

export const Achievements: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(ACHIEVEMENTS_DATA.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(
        ACHIEVEMENTS_DATA.map((item) => Math.min(item.count, Math.floor((item.count / steps) * step)))
      );
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-slate-950/60 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Key Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Key <span className="text-gradient">Highlights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-4 border border-slate-800 shadow-inner">
                {ICON_COMPONENTS[item.iconName] || <Trophy className="w-6 h-6 text-cyan-400" />}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1 tracking-tight">
                {counts[index]}<span className="text-cyan-400">{item.suffix}</span>
              </h3>
              <h4 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
