import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Users, Activity, ShieldCheck } from 'lucide-react';

const dataset: Record<
  string,
  { mrr: string; users: string; growth: string; points: string }
> = {
  '24H': {
    mrr: '$4,120',
    users: '840',
    growth: '+4.2%',
    points: '0,50 30,45 60,48 90,35 120,40 150,25 180,20 210,12 240,5',
  },
  '7D': {
    mrr: '$28,450',
    users: '2,910',
    growth: '+18.6%',
    points: '0,55 30,50 60,42 90,38 120,30 150,22 180,18 210,10 240,4',
  },
  '30D': {
    mrr: '$118,900',
    users: '14,350',
    growth: '+32.4%',
    points: '0,58 30,52 60,44 90,32 120,28 150,19 180,14 210,8 240,2',
  },
};

export const SaasDashboardSimulator: React.FC = () => {
  const [range, setRange] = useState<'24H' | '7D' | '30D'>('7D');
  const [role, setRole] = useState<'Owner' | 'Developer'>('Owner');

  const current = dataset[range];

  return (
    <div className="rounded-xl border border-white/10 bg-surface/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
      {/* Top Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/40">
            <Layers className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-semibold text-ink-primary">
            SaaS Multitenant Hub
          </span>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center rounded border border-white/10 bg-surface-elevated p-0.5 text-[10px]">
          <button
            type="button"
            onClick={() => setRole('Owner')}
            className={`px-2 py-0.5 rounded transition-colors ${
              role === 'Owner'
                ? 'bg-accent-emerald/20 text-accent-emerald font-semibold'
                : 'text-ink-tertiary hover:text-ink-secondary'
            }`}
          >
            Owner
          </button>
          <button
            type="button"
            onClick={() => setRole('Developer')}
            className={`px-2 py-0.5 rounded transition-colors ${
              role === 'Developer'
                ? 'bg-accent-cyan/20 text-accent-cyan font-semibold'
                : 'text-ink-tertiary hover:text-ink-secondary'
            }`}
          >
            Developer
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-lg border border-white/5 bg-surface-elevated/60 p-2.5">
          <div className="flex items-center justify-between text-[10px] text-ink-tertiary">
            <span>Recurring MRR</span>
            <span className="flex items-center text-accent-emerald font-semibold">
              <TrendingUp className="h-2.5 w-2.5 mr-0.5" /> {current.growth}
            </span>
          </div>
          <motion.p
            key={current.mrr}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base font-bold font-mono text-ink-primary mt-0.5"
          >
            {current.mrr}
          </motion.p>
        </div>

        <div className="rounded-lg border border-white/5 bg-surface-elevated/60 p-2.5">
          <div className="flex items-center justify-between text-[10px] text-ink-tertiary">
            <span>Active Tenants</span>
            <Users className="h-2.5 w-2.5 text-accent-cyan" />
          </div>
          <motion.p
            key={current.users}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base font-bold font-mono text-ink-primary mt-0.5"
          >
            {current.users}
          </motion.p>
        </div>
      </div>

      {/* SVG Sparkline Curve */}
      <div className="rounded-lg border border-white/5 bg-black/40 p-2.5 mb-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono text-ink-tertiary flex items-center gap-1">
            <Activity className="h-2.5 w-2.5 text-accent-emerald" /> Real-Time Telemetry
          </span>
          {/* Timeframe Buttons */}
          <div className="flex gap-1">
            {(['24H', '7D', '30D'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setRange(t)}
                className={`rounded px-1.5 py-0.5 text-[10px] font-mono transition-colors ${
                  range === t
                    ? 'bg-accent-emerald text-black font-bold'
                    : 'text-ink-tertiary hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Animated Curve */}
        <div className="h-14 w-full relative">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 240 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00f59b" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00f59b" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Fill */}
            <motion.path
              key={`fill-${range}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              d={`M ${current.points} L 240,60 L 0,60 Z`}
              fill="url(#chartGradient)"
            />
            {/* Stroke */}
            <motion.path
              key={`stroke-${range}`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              d={`M ${current.points}`}
              fill="none"
              stroke="#00f59b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-ink-tertiary">
        <span className="flex items-center gap-1 text-accent-emerald">
          <ShieldCheck className="h-3 w-3" /> Supabase RLS Active
        </span>
        <span>Stripe Webhooks: 100% OK</span>
      </div>
    </div>
  );
};
