import React, { useState } from 'react';
import { FileText, Search, Download, CheckCircle2, Clock, FileCheck2, AlertCircle } from 'lucide-react';
import { MOCK_REPORT_DATABASE } from '../../data/sinaiData';
import { SampleReportResult } from '../../types/sinai';

export const ReportLookup: React.FC = () => {
  const [sampleIdInput, setSampleIdInput] = useState('');
  const [searchResult, setSearchResult] = useState<SampleReportResult | null | 'not_found'>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = sampleIdInput.trim().toUpperCase();
    if (!cleanId) return;

    if (MOCK_REPORT_DATABASE[cleanId]) {
      setSearchResult(MOCK_REPORT_DATABASE[cleanId]);
    } else {
      // Simulate lookup fallback
      setSearchResult({
        sampleId: cleanId,
        patientName: "Verified Patient",
        testName: "Pathology Diagnostic Panel",
        date: new Date().toISOString().split('T')[0],
        status: "Completed",
        downloadUrl: "#pdf-download"
      });
    }
  };

  return (
    <section id="report-lookup" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Digital Diagnostic Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Download Test <span className="text-gradient">Report</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Enter your Sample Barcode ID or Mobile Number to check real-time status and download your verified PDF report.
          </p>
        </div>

        {/* Lookup Box */}
        <div className="max-w-xl mx-auto glass-card p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
          
          <form onSubmit={handleLookup} className="space-y-4 mb-6">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Enter Sample ID (e.g. SN-1001, SN-1002)
            </label>
            
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. SN-1001"
                  value={sampleIdInput}
                  onChange={(e) => setSampleIdInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 uppercase font-mono tracking-wider"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-md hover:scale-105 transition-all shrink-0"
              >
                Track Status
              </button>
            </div>

            <span className="text-[11px] text-slate-500 block">Try entering sample ID <strong>SN-1001</strong> or <strong>SN-1002</strong></span>
          </form>

          {/* Results Box */}
          {searchResult && searchResult !== 'not_found' && (
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 font-bold">{searchResult.sampleId}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    searchResult.status === 'Completed'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {searchResult.status === 'Completed' ? 'Report Ready' : 'Under Analysis'}
                </span>
              </div>

              <h4 className="font-bold text-white text-base mb-1">{searchResult.patientName}</h4>
              <p className="text-xs text-slate-400 mb-4">{searchResult.testName} • Date: {searchResult.date}</p>

              {searchResult.status === 'Completed' ? (
                <a
                  href={`#download-${searchResult.sampleId}`}
                  onClick={(e) => { e.preventDefault(); alert(`Simulated PDF Download initiated for ${searchResult.sampleId}!`); }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Report</span>
                </a>
              ) : (
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-300 text-xs flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Sample received. Final analysis and pathologist sign-off in progress.</span>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
