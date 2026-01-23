
import React, { useState, useMemo, useEffect } from 'react';
import { Trophy, RefreshCw, Scale, UserSearch, ClipboardList, Stamp, Coffee } from 'lucide-react';
import { Misdeed, CEOStats } from './types';
import { INITIAL_MISDEEDS, APP_NAME } from './constants';
import Leaderboard from './components/Leaderboard';
import SearchAudit from './components/SearchAudit';
import { auditCEO } from './geminiService';

const BUREAUCRATIC_MESSAGES = [
  "Auditing Silicon Valley visionary bros...",
  "Calculating administrative hubris tax...",
  "Applying GDPR compliance filters...",
  "Verifying evidence in triplicate...",
  "Consulting the European Court of Justice...",
  "Stamping documents for review...",
  "Refilling ink in the heavy-fine-stamping machine...",
  "Searching for 'disruptive' data in the trash folder...",
  "Waiting for the printer to finish heating up...",
  "Filing Directive 42-B-67 regarding chicanery...",
  "Scanning bunkers for planning applications...",
  "Cross-referencing carbon offsets with private jet fuel..."
];

type AppTab = 'leaderboard' | 'audit';

const EuropeanFlagWatermark = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] flex items-center justify-center opacity-[0.03]">
    <div className="relative w-full max-w-[800px] aspect-square">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 50 + 40 * Math.cos(angle);
        const y = 50 + 40 * Math.sin(angle);
        return (
          <div 
            key={i} 
            className="absolute w-8 h-8 md:w-16 md:h-16 bg-blue-600"
            style={{ 
              left: `${x}%`, 
              top: `${y}%`,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              transform: 'translate(-50%, -50%)'
            }}
          />
        );
      })}
    </div>
  </div>
);

const AppLogo = () => (
  <div className="flex flex-col items-center justify-center mb-8 px-4">
    <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-4">
      <div className="absolute inset-0 bg-blue-700/20 rounded-full border-2 border-dashed border-blue-500/30 animate-spin-slow" />
      <div className="relative z-10 p-5 md:p-6 bg-slate-900 border-4 border-blue-600 rounded-lg shadow-2xl">
        <Scale className="text-white" size={40} />
      </div>
      <Stamp className="text-red-600 absolute -bottom-4 -right-4 rotate-12 drop-shadow-lg" size={40} />
      <Coffee className="text-amber-900 absolute -top-4 -left-4 -rotate-12 opacity-40" size={24} />
    </div>
    <div className="text-center max-w-lg">
      <div className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2 font-mono leading-tight">
        Europe v bros
      </div>
      <h1 className="text-3xl md:text-6xl font-black tracking-tight text-white uppercase italic border-b-4 md:border-b-8 border-blue-700 pb-2 inline-block">
        {APP_NAME}
      </h1>
      <p className="mt-4 text-[8px] md:text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] px-4">
        Registry of Unchecked Ego & illegal business
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [misdeeds, setMisdeeds] = useState<Misdeed[]>(INITIAL_MISDEEDS);
  const [activeTab, setActiveTab] = useState<AppTab>('leaderboard');
  const [isAuditing, setIsAuditing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(BUREAUCRATIC_MESSAGES[0]);

  useEffect(() => {
    let interval: number;
    if (isAuditing) {
      interval = window.setInterval(() => {
        setLoadingMessage(BUREAUCRATIC_MESSAGES[Math.floor(Math.random() * BUREAUCRATIC_MESSAGES.length)]);
      }, 3000);
    }
    return () => window.clearInterval(interval);
  }, [isAuditing]);

  const ceoStats = useMemo(() => {
    const statsMap: Record<string, CEOStats> = {};
    misdeeds.forEach((m) => {
      const canonicalName = m.ceoName.trim();
      if (!statsMap[canonicalName]) {
        statsMap[canonicalName] = {
          name: canonicalName,
          company: m.company,
          totalVillainy: 0,
          averageScore: 0,
          incidentCount: 0,
          avatar: '' 
        };
      }
      statsMap[canonicalName].totalVillainy += m.villainScore;
      statsMap[canonicalName].incidentCount += 1;
      statsMap[canonicalName].averageScore = statsMap[canonicalName].totalVillainy / statsMap[canonicalName].incidentCount;
    });
    // Limit to exactly 10 CEOs
    return Object.values(statsMap).sort((a, b) => b.totalVillainy - a.totalVillainy).slice(0, 10);
  }, [misdeeds]);

  const handleAudit = async (name: string) => {
    setIsAuditing(true);
    const results = await auditCEO(name);
    if (results.length > 0) {
      const factualResults = results.filter(r => !r.title.toLowerCase().includes('predicted') && !r.description.toLowerCase().includes('predicted'));
      setMisdeeds(prev => [...factualResults, ...prev]);
      setActiveTab('leaderboard');
    }
    setIsAuditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center text-slate-200 pb-12 relative overflow-hidden font-sans">
      <EuropeanFlagWatermark />
      
      <div className="w-full bg-blue-800 h-2 md:h-3 flex items-center justify-center space-x-1 relative z-50">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full animate-pulse" />
        ))}
      </div>

      <header className="w-full max-w-5xl px-4 pt-10 md:pt-16 pb-8 text-center relative z-10">
        <AppLogo />
      </header>

      <nav className="sticky top-0 z-[60] w-full bg-slate-950/95 backdrop-blur-2xl border-b-4 border-blue-900 mb-6 md:mb-12 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center min-h-[4rem] md:min-h-[5rem] py-2">
          <div className="flex gap-4 scroll-smooth">
            <NavItem active={activeTab === 'leaderboard'} onClick={() => setActiveTab('leaderboard')} icon={<Trophy size={18}/>} label="Top Tech Villains" prominent={true} />
            <NavItem active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} icon={<UserSearch size={18}/>} label="Bro-vestigation tool" />
          </div>
        </div>
      </nav>

      <main className="w-full max-w-4xl px-4 md:px-6 min-h-[60vh] relative z-10">
        {isAuditing ? (
          <div className="text-center py-20 md:py-32 px-6 space-y-8 bg-slate-900/40 rounded-[2rem] md:rounded-[3rem] border-4 border-dashed border-blue-900">
            <RefreshCw size={48} className="text-blue-500 animate-spin mx-auto" />
            <div className="space-y-4">
              <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter max-w-md mx-auto">{loadingMessage}</h3>
              <p className="text-blue-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">European Investigative Status: Active Interrogation</p>
            </div>
          </div>
        ) : (
          <>
            {activeTab === 'leaderboard' && <Leaderboard stats={ceoStats} misdeeds={misdeeds} />}
            {activeTab === 'audit' && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <SearchAudit onAudit={handleAudit} isLoading={isAuditing} />
              </div>
            )}
          </>
        )}
      </main>

      <footer className="mt-20 md:mt-32 w-full max-w-4xl border-t-4 border-slate-900 pt-10 text-center opacity-40 px-6 pb-20">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-blue-700 rounded-sm" />)}
          </div>
          <p className="text-[10px] md:text-[12px] font-mono uppercase tracking-[0.3em]">
            European Registry of Tech Malpractice • Bureau 11
          </p>
          <p className="text-[8px] md:text-[10px] font-medium leading-relaxed italic max-w-md">
            Transparency regarding illegal business is mandatory. Attempts to influence the registry via secret lobbying will be met with a strongly worded letter and additional administrative friction.
          </p>
        </div>
      </footer>
    </div>
  );
};

const NavItem = ({ active, onClick, icon, label, prominent }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-6 md:px-10 py-3 md:py-4 rounded-lg font-black transition-all text-[12px] md:text-[15px] uppercase tracking-tighter whitespace-nowrap border-b-4 ${active ? (prominent ? 'bg-blue-700 border-blue-400 text-white shadow-2xl' : 'bg-slate-800 border-blue-600 text-white') : 'border-transparent text-slate-500 hover:text-white hover:bg-slate-900'}`}
  >
    {icon} <span>{label}</span>
  </button>
);

export default App;
