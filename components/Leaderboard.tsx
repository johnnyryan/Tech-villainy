
import React from 'react';
import { CEOStats } from '../types';
import { Info, Gavel, Scale } from 'lucide-react';

interface Props { stats: CEOStats[]; }

const Leaderboard: React.FC<Props> = ({ stats }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-slate-900/80 rounded-[2rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Subtle watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] rotate-12 pointer-events-none">
          <Scale size={400} />
        </div>

        <div className="flex items-center gap-4 mb-10 relative z-10">
          <div className="p-4 bg-orange-600/10 rounded-2xl border border-orange-500/20 shadow-xl">
            <Gavel className="text-orange-500" size={32} />
          </div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Top Tech Villains</h2>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mt-1">Classified Priority List • Ranked by Documented Infractions</p>
          </div>
        </div>

        <div className="grid gap-3 relative z-10">
          {stats.map((ceo, index) => (
            <div 
              key={ceo.name} 
              className={`flex items-center justify-between p-5 rounded-xl border transition-all ${index === 0 ? 'bg-red-500/5 border-red-500/30' : 'bg-slate-950 border-slate-800'}`}
            >
              <div className="flex items-center gap-6">
                <span className={`font-mono font-black text-2xl w-10 text-center ${index === 0 ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-black text-white uppercase text-xl leading-tight tracking-tighter">{ceo.name}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{ceo.company}</p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${index === 0 ? 'border-red-500/50 text-red-400' : 'border-slate-800 text-slate-500'}`}>
                  {ceo.incidentCount} Verified Cases
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600/5 border border-blue-500/20 rounded-2xl p-6 flex gap-4">
        <Info className="text-blue-500 shrink-0" size={24} />
        <div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed mb-1">Methodology Note</p>
           <p className="text-xs text-slate-500 font-medium leading-relaxed italic">
            Rankings are determined by the volume of successful regulatory actions, antitrust fines, and substantiated ethics violations logged since 2000. Data verified via Section 4 Archive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
