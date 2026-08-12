import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Footer } from './components/Footer';

// Lazy load below-the-fold section components for optimal initial paint performance
const Projects = React.lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = React.lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Experience = React.lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const GitHubSection = React.lazy(() => import('./components/GitHubSection').then(m => ({ default: m.GitHubSection })));
const Education = React.lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const Achievements = React.lazy(() => import('./components/Achievements').then(m => ({ default: m.Achievements })));
const Contact = React.lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const AIChatbot = React.lazy(() => import('./components/AIChatbot').then(m => ({ default: m.AIChatbot })));

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  // High performance cursor glow using requestAnimationFrame
  useEffect(() => {
    const glowEl = document.getElementById('cursor-glow-element');
    if (!glowEl) return;

    let rafId: number;
    let mouseX = -400;
    let mouseY = -400;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          glowEl.style.left = `${mouseX}px`;
          glowEl.style.top = `${mouseY}px`;
          rafId = 0;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      <div
        id="cursor-glow-element"
        className="cursor-glow hidden md:block"
        style={{ left: '-400px', top: '-400px' }}
      />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        
        <React.Suspense fallback={
          <div className="py-20 text-center text-slate-500 flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
            <span>Loading content...</span>
          </div>
        }>
          <Projects />
          <Skills />
          <Experience />
          <GitHubSection />
          <Education />
          <Achievements />
          <Contact />
        </React.Suspense>
      </main>

      <Footer />

      <React.Suspense fallback={null}>
        <AIChatbot />
      </React.Suspense>

    </div>
  );
}

export default App;
