
import React, { useState, useMemo, useEffect } from 'react';
import { Search, ShieldAlert, Trophy, LayoutDashboard, Info, RefreshCw, AlertTriangle, Scale, Gavel } from 'lucide-react';
import { Misdeed, CEOStats } from './types';
import { INITIAL_MISDEEDS, CEO_INFO, APP_NAME, SUBTITLE } from './constants';
import MisdeedCard from './components/MisdeedCard';
import Leaderboard from './components/Leaderboard';
import SearchAudit from './components/SearchAudit';
import { auditCEO } from './geminiService';

const App: React.FC = () => {
  const [misdeeds, setMisdeeds] = useState<Misdeed[]>(INITIAL_MISDEEDS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'audit'>('feed');
  const [isAuditing, setIsAuditing] = useState(false);

  // Calculate CEO Statistics for Leaderboard
  const ceoStats = useMemo(() => {
    const statsMap: Record<string, CEOStats> = {};

    misdeeds.forEach((m) => {
      const canonicalName = m.ceoName.trim();
      if (!statsMap[canonicalName]) {
        const info = CEO_INFO.find(i => i.name === canonicalName);
        statsMap[canonicalName] = {
          name: canonicalName,
          company: m.company,
          totalVillainy: 0,
          averageScore: 0,
          incidentCount: 0,
          avatar: info?.avatar || `https://picsum.photos/seed/${canonicalName}/200`
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
      .filter(m => 
        m.ceoName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [misdeeds, searchQuery]);

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
    <div className="min-h-screen bg-slate-950 flex flex-col items-center text-slate-200">
      {/* European Union Decorative Bar */}
      <div className="w-full bg-blue-700 h-2 flex items-center justify-center space-x-2">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
        ))}
      </div>

      <header className="w-full max-w-5xl px-6 py-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
            <div className="relative bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl">
              <ShieldAlert size={56} className="text-blue-500" />
            </div>
          </div>
        </div>
        <h1 className="text-6xl font-black tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          {APP_NAME}
        </h1>
        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto flex items-center justify-center gap-3">
          <Gavel size={24} className="text-yellow-500" />
          {SUBTITLE}
        </p>
      </header>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 mb-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('feed')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'feed' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 translate-y-[-2px]' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
            >
              <LayoutDashboard size={20} />
              <span>The Dossier</span>
            </button>
            <button 
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'leaderboard' ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/40 translate-y-[-2px]' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
            >
              <Trophy size={20} />
              <span>Scoreboard</span>
            </button>
            <button 
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === 'audit' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 translate-y-[-2px]' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
            >
              <RefreshCw size={20} className={isAuditing ? 'animate-spin' : ''} />
              <span>Audit Center</span>
            </button>
          </div>

          <div className="relative group hidden lg:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by CEO or Infraction..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-72 transition-all hover:border-slate-700"
            />
          </div>
        </div>
      </nav>

      <main className="w-full max-w-3xl px-6 pb-32">
        {activeTab === 'feed' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Scale className="text-blue-500" size={20} />
                <h2 className="text-2xl font-black text-white">Registry Feed</h2>
              </div>
              <div className="flex items-center gap-2">
                 <span className="text-[10px] font-black bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 uppercase tracking-widest">
                  {filteredMisdeeds.length} Files Audited
                </span>
              </div>
            </div>
            
            <div className="grid gap-6">
              {filteredMisdeeds.length > 0 ? (
                filteredMisdeeds.map(m => (
                  <MisdeedCard key={m.id} misdeed={m} />
                ))
              ) : (
                <div className="text-center py-32 bg-slate-900/50 rounded-[2.5rem] border-2 border-dashed border-slate-800 flex flex-col items-center">
                  <AlertTriangle className="text-slate-700 mb-6" size={64} />
                  <h3 className="text-xl font-bold text-slate-400 mb-2">No Misdeeds Located</h3>
                  <p className="text-slate-500 text-sm max-w-xs">It's possible this CEO hasn't been audited by the Commission yet. Try a manual audit.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <Leaderboard stats={ceoStats} />
        )}

        {activeTab === 'audit' && (
          <SearchAudit onAudit={handleAudit} isLoading={isAuditing} />
        )}
      </main>

      {/* Bureaucratic Footer */}
      <footer className="w-full bg-slate-900/80 border-t border-slate-800/50 py-16 px-6 mt-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-900/40">
                <ShieldAlert size={24} className="text-white" />
              </div>
              <p className="text-white text-xl font-black tracking-tighter">The Registry</p>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Established under Article 0.1 of the Bureaucratic Humor Directive. We monitor the monitors so you can sleep better in your non-billionaire beds.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Compliance Status</h4>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-slate-400 text-xs">AI Systems Operational</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <p className="text-slate-400 text-xs">Vat-Exempt Satirical Entity</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <p className="text-slate-400 text-xs">GDPR Compliant Processing</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">The Commission</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              This application is a satirical tool. All "Villainy Scores" are calculated using generative logic. For real legal advice, please contact a real lawyer who lives in a house, not a bunker.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
