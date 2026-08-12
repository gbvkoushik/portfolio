import React, { useState } from 'react';
import { Cpu, Code, Code2, Terminal, Atom, Globe, Palette, Zap, Server, Layers, Network, Database, Flame, Brain, Eye, Sparkles, Box, Cloud, GitBranch } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const CATEGORIES = ['All', 'Programming Languages', 'Frontend', 'Databases', 'Tools'];

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Box: <Box className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Languages, frameworks, databases, and core software tools I build with.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-card text-slate-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3.5">
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-md"
                    style={{ backgroundColor: `${skill.color || '#06b6d4'}20`, color: skill.color || '#06b6d4' }}
                  >
                    {ICON_MAP[skill.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">{skill.category}</span>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-cyan-300">{skill.level}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-900/90 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
