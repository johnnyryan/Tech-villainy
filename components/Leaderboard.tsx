
import React, { useState } from 'react';
import { CEOStats, Misdeed } from '../types';
import { CEO_INFO } from '../constants';
import { Info, Gavel, Scale, ChevronDown, ChevronUp, ShieldAlert, ExternalLink, Quote, MailWarning, FileWarning } from 'lucide-react';

interface Props { 
  stats: CEOStats[];
  misdeeds: Misdeed[];
}

const Leaderboard: React.FC<Props> = ({ stats, misdeeds }) => {
  const [expandedCeo, setExpandedCeo] = useState<string | null>(null);
  const [expandedMisdeed, setExpandedMisdeed] = useState<string | null>(null);

  const toggleCeo = (name: string) => {
    setExpandedCeo(expandedCeo === name ? null : name);
    setExpandedMisdeed(null);
  };

  const toggleMisdeed = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMisdeed(expandedMisdeed === id ? null : id);
  };

  return (
    <div className="space-y-6 md:space-y-10 animate-in fade-in slide-in-from-top-10 duration-700">
      <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border-4 border-blue-900 shadow-2xl relative overflow-hidden p-4 sm:p-6 md:p-12">
        {/* Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 p-4">
            {[...Array(24)].map((_, i) => <Scale key={i} size={80} />)}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6 mb-8 md:mb-12 relative z-10 text-center sm:text-left">
          <div className="p-4 md:p-6 bg-blue-700 rounded-2xl shadow-xl">
            <Gavel className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-tight">Priority List</h2>
            <p className="text-[9px] md:text-[12px] text-blue-500 font-mono uppercase tracking-[0.4em] mt-1 font-bold">Documented Admin Infractions</p>
          </div>
        </div>

        <div className="grid gap-3 md:gap-4 relative z-10">
          {stats.map((ceo, index) => {
            const ceoMisdeeds = misdeeds.filter(m => m.ceoName === ceo.name);
            const ceoData = CEO_INFO.find(c => c.name === ceo.name);
            const isExpanded = expandedCeo === ceo.name;

            // Simple curve calculation
            const maxVillainy = stats[0].totalVillainy;
            const curveScore = (ceo.totalVillainy / maxVillainy) * 100;

            return (
              <div key={ceo.name} className="flex flex-col gap-2">
                <button 
                  onClick={() => toggleCeo(ceo.name)}
                  className={`group flex items-center justify-between p-3 sm:p-4 md:p-6 rounded-2xl border-4 transition-all text-left ${isExpanded ? 'bg-blue-900/20 border-blue-600 shadow-2xl scale-[1.01]' : 'bg-slate-950 border-slate-800 hover:border-slate-600 shadow-lg'}`}
                >
                  <div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-1 min-w-0">
                    <span className={`font-mono font-black text-xl sm:text-2xl md:text-4xl w-6 sm:w-10 md:w-14 text-center italic shrink-0 ${index === 0 ? 'text-red-600 animate-pulse' : 'text-slate-800'}`}>
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-black text-white uppercase text-base sm:text-lg md:text-2xl leading-tight tracking-tighter group-hover:text-blue-400 transition-colors truncate">{ceo.name}</h4>
                      <p className="text-[8px] sm:text-[9px] md:text-[11px] text-slate-500 font-black uppercase tracking-[0.2em] mt-0.5 truncate">{ceo.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
                    <div className={`px-2 sm:px-4 md:px-5 py-1.5 md:py-3 rounded-xl border-4 font-mono flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] ${index === 0 ? 'text-red-500 border-red-600/50 bg-red-600/10' : 'text-slate-400 border-slate-800 bg-slate-900'}`}>
                      <span className="text-lg md:text-2xl font-black">{Math.round(curveScore)}</span>
                      <span className="text-[6px] md:text-[8px] uppercase font-black tracking-widest leading-none mt-1">Harm %</span>
                    </div>
                    {isExpanded ? <ChevronUp className="text-blue-500" size={18} /> : <ChevronDown className="text-slate-700 group-hover:text-blue-500 transition-all" size={18} />}
                  </div>
                </button>

                {/* Profile */}
                {isExpanded && (
                  <div className="mt-2 ml-4 sm:ml-10 md:ml-14 space-y-3 animate-in slide-in-from-top-4 duration-300">
                    <div className="bg-slate-900 p-4 md:p-6 rounded-2xl border-2 border-blue-900 shadow-lg relative">
                      <Quote className="absolute -top-3 left-4 text-blue-600 bg-slate-900 rounded-full p-1" size={24} />
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed italic font-medium">
                        {ceoData?.summary || "No summary found in the registry archives."}
                      </p>
                    </div>

                    <div className="bg-slate-900/50 border-2 border-blue-900 rounded-2xl overflow-hidden">
                      <div className="bg-blue-900/20 px-4 md:px-6 py-3 border-b border-blue-900 flex items-center justify-between">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
                          <ShieldAlert size={14} /> Registered Exhibits:
                        </span>
                        <span className="text-[8px] md:text-[10px] font-mono text-slate-600">{ceoMisdeeds.length} Folders</span>
                      </div>
                      <div className="divide-y divide-slate-800">
                        {ceoMisdeeds.map(m => {
                          const misdeedOpen = expandedMisdeed === m.id;
                          return (
                            <div key={m.id} className="flex flex-col">
                              <button 
                                onClick={(e) => toggleMisdeed(m.id, e)}
                                className="w-full text-left px-4 md:px-6 py-4 flex items-center justify-between hover:bg-slate-800 transition-all group/scandal"
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                   <span className="text-[10px] sm:text-xs md:text-sm font-black text-slate-200 uppercase tracking-tight group-hover/scandal:text-white truncate">{m.title}</span>
                                   {!m.isEUDecision && (
                                     <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 bg-yellow-900/20 border border-yellow-700/30 rounded text-[7px] font-black text-yellow-500 uppercase tracking-tighter">
                                        <MailWarning size={8} /> Strongly worded letter sent
                                     </div>
                                   )}
                                </div>
                                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                   <span className="hidden sm:inline text-[8px] md:text-[10px] font-mono text-slate-600 font-bold">{m.date}</span>
                                   {misdeedOpen ? <ChevronUp size={14} className="text-blue-400" /> : <ChevronDown size={14} className="text-slate-700" />}
                                </div>
                              </button>
                              {misdeedOpen && (
                                <div className="px-4 md:px-6 py-4 bg-slate-950/50 text-[10px] md:text-xs leading-relaxed text-slate-400 animate-in fade-in duration-200">
                                  {!m.isEUDecision && (
                                    <div className="sm:hidden flex items-center gap-1.5 mb-3 px-2 py-1 bg-yellow-900/20 border border-yellow-700/30 rounded text-[8px] font-black text-yellow-500 uppercase tracking-tighter">
                                       <MailWarning size={10} /> Europe sent a strongly worded letter
                                    </div>
                                  )}
                                  <p className="mb-4 italic">{m.description}</p>
                                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                    <a 
                                      href={m.sourceUrl} 
                                      target="_blank" 
                                      rel="noreferrer" 
                                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-black uppercase tracking-widest text-[8px] md:text-[9px]"
                                    >
                                      Open Archive Link <ExternalLink size={10} />
                                    </a>
                                    <div className="flex gap-1">
                                      {m.tags.slice(0, 2).map(t => (
                                        <span key={t} className="text-[7px] md:text-[8px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-slate-600 uppercase font-black">{t}</span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-600/5 border-4 border-blue-900/40 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
        <div className="p-4 md:p-5 bg-blue-900/30 rounded-2xl shrink-0">
          <Info className="text-blue-500" size={24} />
        </div>
        <div className="min-w-0">
           <p className="text-[10px] md:text-[12px] text-blue-400 font-black uppercase tracking-[0.3em] mb-1 md:mb-2">Administrative Methodology</p>
           <p className="text-[10px] md:text-sm text-slate-400 font-medium leading-relaxed italic">
            Villainy percentages are curved relative to the leading administrative offender. Scores incorporate regulatory fines, environmental friction, labor malpractice, and personal hubris. Cases without a direct EU decision include a mandatory 'Strongly Worded Letter' badge as per Sector 11 guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
