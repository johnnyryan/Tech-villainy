
import React from 'react';
import { Misdeed } from '../types';
import { ExternalLink, AlertCircle, FileText, Gavel, Quote, Folder } from 'lucide-react';

interface Props {
  misdeed: Misdeed;
}

const MisdeedCard: React.FC<Props> = ({ misdeed }) => {
  const getScoreColor = (score: number) => {
    if (score > 90) return 'text-red-500 border-red-500 bg-red-500/10';
    if (score > 75) return 'text-orange-500 border-orange-500 bg-orange-500/10';
    return 'text-yellow-500 border-yellow-500 bg-yellow-500/10';
  };

  const isHighAlert = misdeed.villainScore > 85;

  return (
    <div className={`relative bg-slate-900/60 rounded-[1.5rem] border-l-8 ${isHighAlert ? 'border-l-red-600 border-red-900/40' : 'border-l-blue-600 border-slate-800'} overflow-hidden transition-all group backdrop-blur-sm shadow-xl`}>
      {/* Bureaucratic Stamp */}
      <div className="absolute top-6 right-6 opacity-10 rotate-12 pointer-events-none border-4 border-white p-2 rounded-xl">
        <span className="text-3xl font-black uppercase tracking-tighter">Confidential</span>
      </div>

      <div className="p-8 sm:p-10">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-800/50 pb-6">
          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
             <Folder className="text-blue-500" size={24} />
          </div>
          <div className="flex-1">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1 block">Case Subject</span>
            <span className="text-xl font-black text-white block tracking-tighter leading-none">{misdeed.ceoName} — {misdeed.company}</span>
          </div>
          <div className={`flex flex-col items-center justify-center px-6 py-2 rounded-xl border-2 font-mono shrink-0 ${getScoreColor(misdeed.villainScore)}`}>
            <span className="text-3xl font-black">{misdeed.villainScore}</span>
            <span className="text-[8px] uppercase font-black tracking-widest">Harm Level</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase leading-tight tracking-tighter mb-4">{misdeed.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 italic border-l-2 border-slate-800 pl-4 font-medium">
            {misdeed.description}
          </p>
        </div>

        {misdeed.excerpt && (
          <div className="bg-slate-950/40 rounded-xl border border-slate-800 p-6 mb-8 relative">
            <Quote className="absolute -top-3 left-4 text-slate-700 bg-slate-950 rounded-full p-1" size={24} />
            <p className="text-xs font-mono text-slate-500 leading-relaxed italic">
              {misdeed.excerpt}
            </p>
            <div className="mt-4 flex justify-end">
              <span className="text-[8px] font-black uppercase text-slate-700 tracking-widest">— Verified Archive Link</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {misdeed.tags.map(tag => (
              <span key={tag} className="text-[9px] bg-slate-950 text-slate-600 px-3 py-1 rounded-md border border-slate-800 uppercase font-black tracking-tighter">
                {tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
          
          {misdeed.sourceUrl && (
            <a 
              href={misdeed.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white px-6 py-2.5 rounded-xl border border-blue-500/20 flex items-center justify-center gap-3 text-[10px] font-black transition-all shadow-xl active:scale-95 group/btn uppercase tracking-widest"
            >
              <FileText size={14} />
              Open Registry File
              <ExternalLink size={12} className="opacity-50 group-hover/btn:opacity-100" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MisdeedCard;
