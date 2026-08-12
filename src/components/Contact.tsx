import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sanitizeInput } from '../utils/sanitize';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfNAbrUWtpJXiZoPHMHygeRN8y7zYvrlgwGC68vmIwP8mqPGQ/formResponse";

const GOOGLE_FORM_ENTRIES = {
  name: "entry.1549035373",
  email: "entry.1497401609",
  subject: "entry.1373503129",
  message: "entry.781676410"
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    const sanitized = sanitizeInput(value);
    if (field === 'message' && sanitized.length > 150) {
      setFormData((prev) => ({ ...prev, [field]: sanitized.substring(0, 150) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: sanitized }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Hidden iframe target for background form submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (status === 'submitting') {
            setStatus('success');
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Send a <span className="text-gradient">Message</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Feel free to reach out for opportunities, questions, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location</h4>
                    <span className="text-base font-bold text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-3 rounded-xl glass-card text-xs sm:text-sm font-bold text-slate-200 hover:text-blue-400 flex items-center justify-center gap-1.5 border border-slate-800"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-3 rounded-xl glass-card text-xs sm:text-sm font-bold text-slate-200 hover:text-cyan-400 flex items-center justify-center gap-1.5 border border-slate-800"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-3 rounded-xl glass-card text-xs sm:text-sm font-bold text-slate-200 hover:text-pink-400 flex items-center justify-center gap-1.5 border border-slate-800"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              action={GOOGLE_FORM_ACTION_URL}
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6"
            >
              
              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Thank you! Your message has been submitted.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>Please fill out all required fields before submitting.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    name={GOOGLE_FORM_ENTRIES.name}
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    name={GOOGLE_FORM_ENTRIES.email}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name={GOOGLE_FORM_ENTRIES.subject}
                  placeholder="Inquiry / Opportunity"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Message *
                  </label>
                  <span className={`text-xs font-mono font-bold ${formData.message.length >= 140 ? 'text-amber-400' : 'text-slate-400'}`}>
                    {formData.message.length} / 150
                  </span>
                </div>
                <textarea
                  rows={5}
                  required
                  maxLength={150}
                  name={GOOGLE_FORM_ENTRIES.message}
                  placeholder="Your message (max 150 characters)..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
