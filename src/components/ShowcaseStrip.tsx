import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Send, Layers, Globe2 } from 'lucide-react';

export const ShowcaseStrip: React.FC = () => {
  const items = [
    { icon: ShieldCheck, text: '1-Month Free Maintenance' },
    { icon: Zap, text: '0ms State Latency' },
    { icon: Globe2, text: 'Next.js 15 & React 19' },
    { icon: Send, text: 'Telegram Bot Automations' },
    { icon: Layers, text: 'Multi-Tenant SaaS Architecture' },
    { icon: Cpu, text: 'Vector RAG & Neural AI Workflows' },
    { icon: ShieldCheck, text: '30-Day Zero-Cost Bug Warranty' },
  ];

  return (
    <section className="py-7 bg-black/50 border-y border-white/10 overflow-hidden relative backdrop-blur-md">
      <div className="flex w-max space-x-12 animate-scroll">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors cursor-default whitespace-nowrap"
            >
              <div className="w-7 h-7 rounded-full bg-sky-950/70 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans text-xs font-semibold tracking-wide text-white/90">
                {item.text}
              </span>
              <span className="text-sky-400/40 text-xs ml-4">✦</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
