
import React from 'react';
import { Hash, ChevronRight } from 'lucide-react';
import { Misdeed } from '../types';

interface Props {
  misdeeds: Misdeed[];
  onTagSelect: (tag: string) => void;
}

const HashtagExplorer: React.FC<Props> = ({ misdeeds, onTagSelect }) => {
  const tagCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    misdeeds.forEach(m => {
      m.tags.forEach(t => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [misdeeds]);

  return (
    <div className="bg-slate-900/50 rounded-3xl p-10 border border-slate-800 animate-in zoom-in-95 duration-500">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-500/20">
          <Hash size={32} className="text-blue-500" />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Tag Jurisdictions</h2>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Filter the registry by infraction type</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tagCounts.map(([tag, count]) => (
          <button 
            key={tag}
            onClick={() => onTagSelect(tag)}
            className="group flex items-center justify-between p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center font-mono font-bold text-blue-500 border border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                #
              </div>
              <div>
                <span className="text-white font-black uppercase text-sm group-hover:text-blue-400 transition-colors">{tag}</span>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{count} Documented Cases</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-700 group-hover:text-blue-400 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HashtagExplorer;
