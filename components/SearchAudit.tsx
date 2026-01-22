
import React, { useState } from 'react';
import { Search, Loader2, FileSearch, ShieldAlert, Sparkles, Gavel, UserSearch } from 'lucide-react';

interface Props {
  onAudit: (name: string) => void;
  isLoading: boolean;
}

const SearchAudit: React.FC<Props> = ({ onAudit, isLoading }) => {
  const [target, setTarget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (target.trim() && !isLoading) {
      onAudit(target);
    }
  };

  const suggestions = ["Mark Zuckerberg", "Satya Nadella", "Jensen Huang", "Larry Page", "Marc Andreessen", "Palmer Luckey"];

  return (
    <div className="bg-slate-900 rounded-[3rem] p-10 sm:p-14 border border-slate-800 text-center animate-in zoom-in-95 duration-500 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-slate-800 to-red-600"></div>
      
      <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600/10 rounded-3xl mb-8 border border-red-500/30 rotate-3">
        <UserSearch className="text-red-500" size={48} />
      </div>
      
      <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Bro-vestigation Centre</h2>
      <p className="text-slate-400 mb-12 max-w-md mx-auto text-sm font-medium leading-relaxed">
        Our agents are standing by. Enter a Silicon Valley "visionary" to cross-reference their activities with global legal databases and minor safety protocols.
      </p>

      <form onSubmit={handleSubmit} className="relative max-w-md mx-auto mb-10 group">
        <input 
          type="text"
          placeholder="Subject's Name..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl py-5 pl-8 pr-36 text-lg focus:outline-none focus:border-red-600 focus:ring-8 focus:ring-red-600/5 transition-all text-white placeholder:text-slate-800 font-bold"
        />
        <button 
          disabled={isLoading || !target}
          className="absolute right-3 top-3 bottom-3 bg-red-600 hover:bg-red-500 disabled:bg-slate-800 text-white px-8 rounded-xl font-black flex items-center gap-3 transition-all disabled:cursor-not-allowed group shadow-lg active:scale-95"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Gavel size={20} className="group-hover:-rotate-12 transition-transform" />}
          Investigate
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {suggestions.map(s => (
          <button 
            key={s} 
            onClick={() => setTarget(s)}
            className="text-[10px] bg-slate-950 hover:bg-slate-800 text-slate-500 hover:text-white px-4 py-2 rounded-full border border-slate-800 transition-all font-black uppercase tracking-widest"
          >
            {s}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="mt-16 space-y-6 animate-pulse">
          <div className="flex items-center justify-center gap-3 text-red-500 font-black text-xs uppercase tracking-[0.2em]">
            <ShieldAlert size={20} className="animate-bounce" /> Analyzing Anti-Democratic Signals...
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Searching Brazilian High Court records...</p>
            <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-600 animate-ping"></div>
                 <p className="text-slate-600 text-[9px] uppercase font-black">Brussels Tribunal Session Active</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAudit;
