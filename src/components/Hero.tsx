import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, ChevronDown, Terminal, Sparkles, Instagram, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-mesh">
      
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-bold uppercase tracking-wide shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span>{PERSONAL_INFO.statusBadge}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-medium text-slate-300 mb-2 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>

            <div className="h-16 flex items-center mb-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gradient flex items-center gap-2">
                <Terminal className="w-8 h-8 text-cyan-400 inline" />
                {displayText}
                <span className="w-1 h-9 bg-cyan-400 inline-block animate-pulse" />
              </span>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              {PERSONAL_INFO.heroSummary}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Socials:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column Code Badge Terminal Box (GBVK.dev) */}
          <div className="lg:col-span-5 flex justify-center">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="relative group block w-full max-w-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700" />

              <div className="relative rounded-2xl overflow-hidden glass-card p-6 border border-slate-700/60 shadow-2xl flex flex-col justify-between h-96">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">gbvk.dev</span>
                </div>

                <div className="my-auto space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold">class Developer &#123;</span>
                  </div>
                  <div className="pl-6 text-slate-300 space-y-1">
                    <p><span className="text-cyan-400">name</span>: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,</p>
                    <p><span className="text-cyan-400">role</span>: <span className="text-emerald-300">"CS Student"</span>,</p>
                    <p><span className="text-cyan-400">languages</span>: [<span className="text-amber-300">"C"</span>, <span className="text-amber-300">"Java"</span>],</p>
                    <p><span className="text-cyan-400">web</span>: [<span className="text-amber-300">"HTML/CSS"</span>, <span className="text-amber-300">"JS"</span>],</p>
                    <p><span className="text-cyan-400">graduation</span>: <span className="text-cyan-300">2028</span></p>
                  </div>
                  <div className="text-purple-300 font-bold">&#125;</div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>View LinkedIn Profile</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </a>
          </div>

        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
