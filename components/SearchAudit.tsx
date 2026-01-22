
import React, { useState } from 'react';
import { Search, Loader2, FileSearch, ShieldAlert, Sparkles } from 'lucide-react';

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

  const suggestions = ["Mark Zuckerberg", "Satya Nadella", "Jensen Huang", "Larry Page", "Marc Andreessen"];

  return (
    <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 text-center animate-in zoom-in-95 duration-500">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/10 rounded-full mb-6 border border-red-500/30">
        <FileSearch className="text-red-500" size={40} />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4">Request New Audit</h2>
      <p className="text-slate-400 mb-10 max-w-md mx-auto">
        Have you spotted a billionaire acting suspiciously? Enter their name to trigger a real-time regulatory compliance check.
      </p>

      <form onSubmit={handleSubmit} className="relative max-w-md mx-auto mb-8">
        <input 
          type="text"
          placeholder="Enter CEO Name..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl py-4 pl-6 pr-32 text-lg focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all text-white"
        />
        <button 
          disabled={isLoading || !target}
          className="absolute right-2 top-2 bottom-2 bg-red-600 hover:bg-red-500 disabled:bg-slate-800 text-white px-6 rounded-xl font-bold flex items-center gap-2 transition-all disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Sparkles size={20} />}
          Audit
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3">
        {suggestions.map(s => (
          <button 
            key={s} 
            onClick={() => setTarget(s)}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="mt-12 space-y-4 animate-pulse">
          <div className="flex items-center justify-center gap-2 text-red-400 font-mono text-xs uppercase tracking-widest">
            <ShieldAlert size={16} /> Contacting Brussels Bureaucrats...
          </div>
          <p className="text-slate-500 text-sm">Searching global archives for unmitigated greed...</p>
        </div>
      )}
    </div>
  );
};

export default SearchAudit;
