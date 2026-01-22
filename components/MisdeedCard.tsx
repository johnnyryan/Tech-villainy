
import React from 'react';
import { Misdeed } from '../types';
import { ExternalLink, Calendar, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

interface Props {
  misdeed: Misdeed;
}

const MisdeedCard: React.FC<Props> = ({ misdeed }) => {
  const getScoreColor = (score: number) => {
    if (score > 90) return 'text-red-500 border-red-500 bg-red-500/10';
    if (score > 75) return 'text-orange-500 border-orange-500 bg-orange-500/10';
    return 'text-yellow-500 border-yellow-500 bg-yellow-500/10';
  };

  const isHighAlert = misdeed.villainScore > 90;

  return (
    <div className={`relative bg-slate-900 rounded-2xl border ${isHighAlert ? 'border-red-900/50' : 'border-slate-800'} overflow-hidden hover:border-slate-700 transition-all group shadow-xl`}>
      {/* Visual Indicator of High Offense */}
      {isHighAlert && (
        <div className="absolute top-4 -right-8 rotate-45 bg-red-600 text-white text-[10px] font-bold px-10 py-1 shadow-md z-10 uppercase tracking-tighter border-y border-red-400">
          DANGER TO SOCIETY
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{misdeed.company}</span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar size={12} /> {new Date(misdeed.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{misdeed.title}</h3>
          </div>
          <div className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 font-mono shrink-0 ${getScoreColor(misdeed.villainScore)}`}>
            <span className="text-2xl font-black">{misdeed.villainScore}</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">V-Score</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-slate-800 pl-4">
          "{misdeed.description}"
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {misdeed.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700 uppercase font-semibold">
              #{tag.replace(/\s+/g, '')}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 overflow-hidden ring-2 ring-slate-800">
               <img src={`https://picsum.photos/seed/${misdeed.ceoName}/100`} alt={misdeed.ceoName} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-slate-300">{misdeed.ceoName}</span>
          </div>
          
          {misdeed.sourceUrl ? (
            <a 
              href={misdeed.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-lg border border-blue-500/20 flex items-center gap-2 text-xs font-bold transition-all"
            >
              <FileText size={14} />
              Verify Evidence
              <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-xs text-slate-600 flex items-center gap-1 italic">
              <AlertCircle size={14} /> Sourcing Pending
            </span>
          )}
        </div>
      </div>
      
      {/* Animated warning for the truly egregious */}
      {isHighAlert && (
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 animate-[pulse_2s_ease-in-out_infinite]" />
      )}
    </div>
  );
};

export default MisdeedCard;
