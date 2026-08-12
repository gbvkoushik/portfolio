import React, { useState } from 'react';
import { FolderGit2, ExternalLink, X, CheckCircle2, Sparkles, Activity, Stethoscope } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>Featured Project</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Project</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Vibe-coded web application developed for Sinai Medical Diagnostics.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/80 flex flex-col justify-between group shadow-xl"
            >
              {/* CSS Code Banner (No Image Tags) */}
              <div className="relative h-60 bg-gradient-to-tr from-slate-950 via-cyan-950 to-blue-950 p-6 flex flex-col justify-between border-b border-slate-800">
                <div className="flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <Stethoscope className="w-6 h-6 text-cyan-400" />
                </div>

                <div className="flex items-center gap-4 z-10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-lg">
                    <Activity className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{project.title}</h4>
                    <p className="text-xs font-mono text-cyan-400">sinaimedicaldiagnostics.in</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/80 text-slate-200 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                  >
                    <span>View Features</span>
                    <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-sm font-bold flex items-center gap-2 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2.5 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-3 inline-block">
              {activeModalProject.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{activeModalProject.title}</h3>

            <div className="rounded-2xl overflow-hidden mb-6 p-6 bg-gradient-to-tr from-slate-950 to-cyan-950 border border-slate-800 flex items-center gap-4">
              <Activity className="w-10 h-10 text-cyan-400 shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white">{activeModalProject.title}</h4>
                <p className="text-xs text-cyan-300 font-mono">{activeModalProject.liveUrl}</p>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">{activeModalProject.fullDescription}</p>

            <div className="mb-6">
              <h4 className="text-base font-bold text-white mb-3">Key Features</h4>
              <div className="space-y-2.5">
                {activeModalProject.modalDetails.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end pt-5 border-t border-slate-800">
              <a
                href={activeModalProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm flex items-center gap-2"
              >
                <span>Visit {activeModalProject.liveUrl}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
