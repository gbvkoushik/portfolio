import React, { useState, useEffect } from 'react';
import { Activity, Search, Clock, Droplets, AlertCircle, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { DIAGNOSTIC_TESTS } from '../../data/sinaiData';
import { DiagnosticTest } from '../../types/sinai';

const CATEGORIES = ['All', 'Pathology', 'Radiology', 'Cardiology', 'Diabetes', 'Wellness'];

interface TestDirectoryProps {
  initialSearchQuery?: string;
  onBookTest: (testName: string) => void;
}

export const TestDirectory: React.FC<TestDirectoryProps> = ({ initialSearchQuery = '', onBookTest }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedTestModal, setSelectedTestModal] = useState<DiagnosticTest | null>(null);

  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  const filteredTests = DIAGNOSTIC_TESTS.filter((test) => {
    const matchesCategory = activeCategory === 'All' || test.category === activeCategory;
    const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          test.sampleType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tests" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Comprehensive Lab Directory</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Diagnostic <span className="text-gradient">Lab Tests</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Search 50+ accredited pathology & radiology tests with transparent pricing and same-day electronic reports.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                    : 'glass-card text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search test by name or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/60"
            />
          </div>

        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between group relative"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {test.category}
                  </span>
                  {test.popular && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Popular Test
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-emerald-300 transition-colors">
                  {test.name}
                </h3>
                <p className="text-slate-300 text-xs line-clamp-2 mb-4 leading-relaxed">
                  {test.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Sample: <strong className="text-slate-200">{test.sampleType}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Report Time: <strong className="text-slate-200">{test.turnaroundTime}</strong></span>
                  </div>
                  {test.fastingRequired && (
                    <div className="flex items-center gap-2 text-amber-300">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Fasting Required (10-12 Hours)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xl font-black text-white">₹{test.price}</span>
                  {test.originalPrice && (
                    <span className="text-xs text-slate-500 line-through ml-2">₹{test.originalPrice}</span>
                  )}
                </div>

                <button
                  onClick={() => { setSelectedTestModal(test); onBookTest(test.name); }}
                  className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-all shadow-sm"
                >
                  Book Test
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Test Detail Popup */}
      {selectedTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card w-full max-w-lg rounded-3xl border border-slate-700/80 p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedTestModal(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-3 inline-block">
              {selectedTestModal.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{selectedTestModal.name}</h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">{selectedTestModal.description}</p>

            <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Sample Required:</span>
                <span className="font-semibold text-white">{selectedTestModal.sampleType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Report Turnaround:</span>
                <span className="font-semibold text-emerald-400">{selectedTestModal.turnaroundTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fasting Requirement:</span>
                <span className="font-semibold text-amber-300">{selectedTestModal.fastingRequired ? "10-12 Hours Fasting Required" : "No Fasting Required"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div>
                <span className="text-2xl font-black text-white">₹{selectedTestModal.price}</span>
                {selectedTestModal.originalPrice && <span className="text-xs text-slate-500 line-through ml-2">₹{selectedTestModal.originalPrice}</span>}
              </div>
              <button
                onClick={() => { setSelectedTestModal(null); onBookTest(selectedTestModal.name); }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg"
              >
                Confirm Booking
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
