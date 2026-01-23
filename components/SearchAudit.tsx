
import React, { useState } from 'react';
import { Loader2, ShieldAlert, Gavel, UserSearch, AlertCircle, Coffee } from 'lucide-react';

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

  const suggestions = ["Mark Zuckerberg", "Elon Musk", "Sam Altman", "Jensen Huang", "Larry Page", "Tim Cook"];

  return (
    <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-14 border-4 border-blue-900 text-center relative overflow-hidden shadow-[0_0_50px_-12px_rgba(29,78,216,0.3)]">
      {/* Stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700"></div>
      
      <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-blue-900/20 rounded-[1.5rem] md:rounded-[2rem] mb-8 md:mb-10 border-4 border-blue-600/40 rotate-3 shadow-inner">
        <UserSearch className="text-blue-500" size={48} />
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter italic leading-tight">Bro-vestigation Centre</h2>
      <p className="text-slate-400 mb-8 md:mb-14 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed px-2">
        Initiate a cross-jurisdictional review. Enter a Silicon Valley 'visionary' to interrogate their history of illegal business, labor ethics, and anti-democratic chicanery. We'll find something. We always do.
      </p>

      <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto mb-8 md:mb-12 group px-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input 
              type="text"
              placeholder="Subject for Interrogation..."
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-slate-950 border-4 border-slate-800 rounded-2xl md:rounded-3xl py-4 md:py-6 pl-6 md:pl-10 pr-6 text-lg md:text-xl focus:outline-none focus:border-blue-700 focus:ring-8 focus:ring-blue-700/10 transition-all text-white placeholder:text-slate-800 font-bold"
            />
          </div>
          <button 
            disabled={isLoading || !target}
            className="bg-blue-700 hover:bg-blue-600 disabled:bg-slate-800 text-white px-8 md:px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all disabled:cursor-not-allowed group shadow-xl active:scale-95 uppercase tracking-widest text-xs md:text-sm"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Gavel size={20} className="group-hover:-rotate-12 transition-transform" />}
            Initiate Review
          </button>
        </div>
      </form>

      <div className="max-w-xl mx-auto text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
           <AlertCircle size={14} className="text-blue-500" />
           <span className="text-[10px] md:text-[12px] text-slate-500 font-black uppercase tracking-[0.3em]">Subjects of Interest</span>
           <AlertCircle size={14} className="text-blue-500" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {suggestions.map(s => (
            <button 
              key={s} 
              onClick={() => setTarget(s)}
              className="text-[9px] md:text-[11px] bg-slate-950 hover:bg-blue-900/40 text-slate-500 hover:text-blue-400 px-4 md:px-6 py-2 md:py-3 rounded-full border-2 border-slate-800 hover:border-blue-700 transition-all font-black uppercase tracking-widest shadow-md"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="mt-16 md:mt-20 space-y-8 animate-pulse px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-blue-500 font-black text-xs md:text-sm uppercase tracking-[0.4em] text-center">
            <ShieldAlert size={24} className="animate-bounce" /> Scanning European Databases...
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">Querying Bureau Database 11...</p>
            <div className="flex items-center gap-3">
                 <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-600 animate-ping"></div>
                 <p className="text-blue-600 text-[9px] md:text-[11px] uppercase font-black tracking-widest">Active Bureau Session</p>
            </div>
            <div className="mt-4 p-4 bg-blue-900/10 rounded-xl border border-blue-900/20 flex items-center gap-2">
              <Coffee size={16} className="text-blue-500" />
              <span className="text-[9px] text-slate-500 uppercase font-mono italic">Waiting for the fax machine...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAudit;
