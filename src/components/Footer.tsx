import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 relative border-t border-slate-800/80 bg-slate-950">
      
      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-xl shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all duration-300 animate-in fade-in zoom-in-95"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                GBVK<span className="text-gradient">.dev</span>
              </span>
              <p className="text-xs text-slate-400 font-medium">Computer Science Student • Graduation 2028</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#github" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-all"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-8 border-t border-slate-900">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with HTML, CSS, JavaScript & Tailwind CSS.</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Last Updated: August 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
