
import React from 'react';
import { CEOStats } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Medal, TrendingUp, UserX, Info } from 'lucide-react';

interface Props {
  stats: CEOStats[];
}

const Leaderboard: React.FC<Props> = ({ stats }) => {
  const chartData = stats.slice(0, 5).map(s => ({
    name: s.name.split(' ').pop(),
    score: s.totalVillainy
  }));

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
        <div className="flex items-center gap-3 mb-8">
          <Medal className="text-orange-500" size={32} />
          <h2 className="text-2xl font-bold text-white">The Tech Villainy Index</h2>
        </div>
        
        <div className="h-64 w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                itemStyle={{ color: '#fb923c' }}
                cursor={{ fill: '#1e293b' }}
              />
              <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#ea580c' : '#f97316'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid gap-4">
          {stats.map((ceo, index) => (
            <div 
              key={ceo.name} 
              className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${index === 0 ? 'bg-orange-500/10 border-orange-500/50 shadow-lg shadow-orange-950/20' : 'bg-slate-950 border-slate-800'}`}
            >
              <div className="flex items-center gap-4">
                <span className={`font-mono font-bold text-lg w-6 ${index === 0 ? 'text-orange-500' : 'text-slate-600'}`}>
                  #{index + 1}
                </span>
                <img src={ceo.avatar} alt={ceo.name} className="w-12 h-12 rounded-xl border border-slate-800 shadow-inner" />
                <div>
                  <h4 className="font-bold text-white leading-tight">{ceo.name}</h4>
                  <p className="text-xs text-slate-500">{ceo.company} • {ceo.incidentCount} Audited Crimes</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-black text-white">{ceo.totalVillainy}</div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Total Villainy</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 flex gap-4">
        <Info className="text-blue-400 shrink-0" size={24} />
        <p className="text-sm text-blue-100/70">
          <strong>How are they scored?</strong> Our proprietary algorithm considers GDPR violations, the number of tax havens used, and the sheer audacity of their public statements. High scores are indicative of a potential summons to Brussels.
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
