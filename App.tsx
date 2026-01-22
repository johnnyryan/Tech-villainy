
import React, { useState, useMemo, useEffect } from 'react';
import { Search, ShieldAlert, Trophy, LayoutDashboard, RefreshCw, Scale, Gavel, UserSearch, ChevronLeft, ChevronRight, AlertTriangle, Calendar, Filter, Briefcase, Stamp } from 'lucide-react';
import { Misdeed, CEOStats, TagType } from './types';
import { INITIAL_MISDEEDS, APP_NAME } from './constants';
import MisdeedCard from './components/MisdeedCard';
import Leaderboard from './components/Leaderboard';
import SearchAudit from './components/SearchAudit';
import { auditCEO } from './geminiService';

const BUREAUCRATIC_MESSAGES = [
  "Hunting Silicon Valley miscreants in our databases...",
  "Applying the 30% Ego Tax to pending files...",
  "Checking for minor safety GDPR violations...",
  "Stamping 'NON-COMPLIANT' in triplicate...",
  "Consulting the Court of Justice (Civilized Edition)...",
  "Refilling the ink in our heaviest fine-stamping machine...",
  "Waiting for the printer to finish heating up...",
  "Filing Form 27-B-Stroke-6 in duplicate..."
];

type SortMode = 'recency' | 'villainy' | 'oldest';
type AppTab = 'leaderboard' | 'feed' | 'audit';

const ITEMS_PER_PAGE = 20;

const EuropeanFlagWatermark = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] flex items-center justify-center opacity-[0.03]">
    <div className="relative w-[800px] h-[800px]">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30) * (Math.PI / 180);
        const x = 400 + 300 * Math.cos(angle);
        const y = 400 + 300 * Math.sin(angle);
        return (
          <div 
            key={i} 
            className="absolute w-24 h-24 bg-blue-500"
            style={{ 
              left: `${x}px`, 
              top: `${y}px`,
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
  <div className="flex flex-col items-center justify-center mb-6">
    <div className="relative w-24 h-24 flex items-center justify-center">
      <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping" />
      <div className="relative z-10 p-5 bg-slate-900 border-4 border-blue-600 rounded-3xl rotate-3 shadow-2xl">
        <div className="relative">
          <Briefcase className="text-white mb-[-10px] ml-[-5px]" size={40} />
          <Stamp className="text-red-600 absolute -bottom-2 -right-4 rotate-12" size={32} />
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-1">Directorate-General for Mendacity</div>
      <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">The Registry</h1>
    </div>
  </div>
);

const App: React.FC = () => {
  const [misdeeds, setMisdeeds] = useState<Misdeed[]>(INITIAL_MISDEEDS);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortMode>('villainy'); 
  const [activeTab, setActiveTab] = useState<AppTab>('leaderboard');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuditing, setIsAuditing] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(BUREAUCRATIC_MESSAGES[0]);
  const [hubrisOnly, setHubrisOnly] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isAuditing) {
      interval = window.setInterval(() => {
        setLoadingMessage(BUREAUCRATIC_MESSAGES[Math.floor(Math.random() * BUREAUCRATIC_MESSAGES.length)]);
      }, 3000);
    }
    return () => window.clearInterval(interval);
  }, [isAuditing]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, hubrisOnly]);

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
          avatar: '' // Avatars removed
        };
      }
      statsMap[canonicalName].totalVillainy += m.villainScore;
      statsMap[canonicalName].incidentCount += 1;
      statsMap[canonicalName].averageScore = statsMap[canonicalName].totalVillainy / statsMap[canonicalName].incidentCount;
    });
    return Object.values(statsMap).sort((a, b) => b.totalVillainy - a.totalVillainy);
  }, [misdeeds]);

  const filteredMisdeeds = useMemo(() => {
    return misdeeds
      .filter(m => {
        const matchesSearch = m.ceoName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              m.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesHubris = hubrisOnly ? m.tags.includes(TagType.Ego) : true;
        return matchesSearch && matchesHubris;
      })
      .sort((a, b) => {
        if (sortBy === 'recency') return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
        return b.villainScore - a.villainScore;
      });
  }, [misdeeds, searchQuery, sortBy, hubrisOnly]);

  const paginatedMisdeeds = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMisdeeds.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMisdeeds, currentPage]);

  const totalPages = Math.ceil(filteredMisdeeds.length / ITEMS_PER_PAGE);

  const handleAudit = async (name: string) => {
    setIsAuditing(true);
    const results = await auditCEO(name);
    if (results.length > 0) {
      setMisdeeds(prev => [...results, ...prev]);
      setActiveTab('feed');
    }
    setIsAuditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center text-slate-200 pb-12 relative overflow-hidden">
      <EuropeanFlagWatermark />
      
      <div className="w-full bg-blue-700 h-2 flex items-center justify-center space-x-2 relative z-10">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
        ))}
      </div>

      <header className="w-full max-w-5xl px-6 pt-12 pb-6 text-center relative z-10">
        <AppLogo />
      </header>

      <nav className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 mb-12 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            <NavItem active={activeTab === 'leaderboard'} onClick={() => setActiveTab('leaderboard')} icon={<Trophy size={20}/>} label="Top Tech Villains" prominent={true} />
            <NavItem active={activeTab === 'feed'} onClick={() => setActiveTab('feed')} icon={<LayoutDashboard size={18}/>} label="The Dossiers" />
            <NavItem active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} icon={<UserSearch size={18}/>} label="Audit Office" />
          </div>

          <div className="relative group hidden lg:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="Search Archives back to 2000..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all outline-none font-mono"
            />
          </div>
        </div>
      </nav>

      <main className="w-full max-w-3xl px-6 min-h-[60vh] relative z-10">
        {isAuditing ? (
          <div className="text-center py-32 space-y-6">
            <RefreshCw size={48} className="text-blue-500 animate-spin mx-auto" />
            <h3 className="text-2xl font-mono text-white uppercase tracking-tighter">{loadingMessage}</h3>
            <p className="text-slate-600 text-xs font-black uppercase">Form 27-B In Progress</p>
          </div>
        ) : (
          <>
            {activeTab === 'leaderboard' && <Leaderboard stats={ceoStats} />}
            
            {activeTab === 'feed' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex flex-col gap-4 p-6 bg-slate-900/50 rounded-3xl border border-slate-800/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rotate-45 translate-x-16 -translate-y-16" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <h2 className="text-xl font-black text-white uppercase flex items-center gap-2">
                        <Scale size={20} className="text-blue-500"/>
                        Registry Archives
                      </h2>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-1">
                        {filteredMisdeeds.length} Dossiers Logged • 2000 - 2026 Historical Scan
                      </p>
                    </div>
                    
                    <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
                      <SortBtn active={sortBy === 'recency'} onClick={() => setSortBy('recency')} icon={<Calendar size={14} />} label="Newest" />
                      <SortBtn active={sortBy === 'oldest'} onClick={() => setSortBy('oldest')} icon={<Calendar size={14} />} label="Oldest" />
                      <SortBtn active={sortBy === 'villainy'} onClick={() => setSortBy('villainy')} icon={<Trophy size={14} />} label="Villainy" />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-t border-slate-800/50 pt-4">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest flex items-center gap-2">
                      <Filter size={14} /> Criteria Filter:
                    </span>
                    <button 
                      onClick={() => setHubrisOnly(!hubrisOnly)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all border ${hubrisOnly ? 'bg-orange-600 border-orange-400 text-white shadow-lg' : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'}`}
                    >
                      Unchecked Hubris Only
                    </button>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  {paginatedMisdeeds.map(m => <MisdeedCard key={m.id} misdeed={m} />)}
                  {paginatedMisdeeds.length === 0 && (
                    <div className="text-center py-20 text-slate-500 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
                      <AlertTriangle className="mx-auto mb-4 opacity-20" size={48} />
                      <p className="font-bold uppercase text-xs tracking-widest">No documentation found in this segment of the archive.</p>
                    </div>
                  )}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-12 py-8 border-t border-slate-900">
                    <button 
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(p => p - 1)}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <div className="flex gap-2 font-mono">
                        {[...Array(Math.min(5, totalPages))].map((_, i) => {
                            const p = i + 1;
                            return (
                                <button 
                                    key={p}
                                    onClick={() => setCurrentPage(p)}
                                    className={`w-10 h-10 rounded-xl font-bold border transition-all ${currentPage === p ? 'bg-blue-600 border-blue-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
                                >
                                    {p}
                                </button>
                            )
                        })}
                    </div>
                    <button 
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(p => p + 1)}
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'audit' && <SearchAudit onAudit={handleAudit} isLoading={isAuditing} />}
          </>
        )}
      </main>

      <footer className="mt-20 text-center opacity-30 text-[10px] font-mono uppercase tracking-widest px-6 pb-12">
        <p>© 2024 European Registry Office • Section 42 Bureaucracy Division</p>
        <p className="mt-2">Coffee Stains Mandatory on all printed documents</p>
      </footer>
    </div>
  );
};

const NavItem = ({ active, onClick, icon, label, prominent }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all text-[12px] uppercase tracking-tighter whitespace-nowrap border-2 ${active ? (prominent ? 'bg-orange-600 border-orange-400 text-white shadow-2xl scale-105' : 'bg-blue-600 border-blue-400 text-white') : 'border-transparent text-slate-500 hover:text-white hover:bg-slate-900'}`}
  >
    {icon} <span>{label}</span>
  </button>
);

const SortBtn = ({ active, onClick, label, icon }: any) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 flex-1 text-center whitespace-nowrap ${active ? 'bg-slate-800 text-blue-400 border border-blue-500/20 shadow-inner' : 'text-slate-600 hover:text-slate-400'}`}
  >
    {icon}
    {label}
  </button>
);

export default App;
