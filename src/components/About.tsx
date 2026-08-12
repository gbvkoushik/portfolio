import React from 'react';
import { User, Target, Users, Zap, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <User className="w-4 h-4 text-purple-400" />
            <span>Personal Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-between glass-card p-8 rounded-3xl border border-slate-800/80">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Career Objective
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                {PERSONAL_INFO.careerObjective}
              </p>

              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Core Background & Strengths</h4>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Good CS Fundamentals:</strong> Good foundation in Data Structures, Algorithms, OOP in C & Java, and Relational Databases (MySQL).</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Web Application Development:</strong> Experience building responsive HTML, CSS, JavaScript, and Tailwind CSS interfaces.</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Featured Vibe-Coded Project:</strong> Built the medical diagnostic web application <em>sinaimedicaldiagnostics.in</em>.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm text-slate-400">
              <span>Location: <strong className="text-slate-200">{PERSONAL_INFO.location}</strong></span>
              <span>Status: <strong className="text-cyan-400">Open to Internships & Work</strong></span>
            </div>

          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">Problem Solving</h4>
                <p className="text-sm text-slate-400 leading-relaxed">DSA challenges in C & Java.</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">Teamwork</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Collaborative project execution and peer coding.</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">Quick Learner</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Fast adaptation to new frameworks and tools.</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">Web Development</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Building modern HTML, CSS, & JavaScript UIs.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
