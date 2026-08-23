import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PackagesSectionProps { onSelectTier: (tierName: string) => void; }

const tiers = [
  { name: 'Website Launch', tagline: 'For a focused, credible digital presence.', delivery: '1–3 weeks', features: ['Custom responsive website', 'CMS or lead capture', 'Technical SEO foundation', 'Launch + analytics'], highlight: false },
  { name: 'Growth Platform', tagline: 'For commerce and operational workflows.', delivery: '3–6 weeks', features: ['Multi-page product experience', 'Accounts or commerce workflows', 'Business tool integrations', 'Performance and QA'], highlight: true },
  { name: 'SaaS / Custom System', tagline: 'For products with deeper logic and scale.', delivery: '6–12+ weeks', features: ['Product and architecture sprint', 'Roles, data and dashboards', 'Billing or workflow automation', 'Phased production releases'], highlight: false },
];

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectTier }) => (
  <section id="packages" className="overflow-hidden bg-[#0B1020] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div><span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-300">Ways to engage</span><h2 className="mt-3 max-w-4xl text-[clamp(2.2rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em]">Choose the right starting lane.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/55">Every engagement is scoped after a short technical call. No hidden template restrictions and no lock-in.</p></div>
        <div className="flex items-center gap-3 rounded-2xl border border-blue-300/15 bg-blue-400/10 p-4 backdrop-blur-xl"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15 text-blue-300"><ShieldCheck className="h-5 w-5" /></span><div><p className="text-sm font-bold">One month of launch care</p><p className="text-[11px] text-white/50">Included with every delivered build</p></div></div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <motion.article key={tier.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={`flex flex-col justify-between rounded-[2rem] border p-6 sm:p-8 ${tier.highlight ? 'border-blue-400/60 bg-blue-600 shadow-[0_28px_80px_rgba(37,99,235,0.25)]' : 'border-white/10 bg-white/[0.045]'}`}>
            <div>{tier.highlight && <span className="mb-5 inline-block rounded-full bg-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-blue-700">Recommended</span>}<p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">{tier.delivery}</p><h3 className="mt-3 text-2xl font-extrabold">{tier.name}</h3><p className={`mt-2 text-sm ${tier.highlight ? 'text-blue-50/75' : 'text-white/50'}`}>{tier.tagline}</p><div className="mt-7 space-y-3 border-t border-white/10 pt-6">{tier.features.map((feature) => <div key={feature} className={`flex items-center gap-2 text-xs font-semibold ${tier.highlight ? 'text-white/80' : 'text-white/60'}`}><CheckCircle2 className={`h-4 w-4 shrink-0 ${tier.highlight ? 'text-white' : 'text-blue-300'}`} />{feature}</div>)}</div></div>
            <button type="button" onClick={() => onSelectTier(tier.name)} className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold transition ${tier.highlight ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-white text-slate-950 hover:bg-blue-50'}`}>Scope this engagement <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
