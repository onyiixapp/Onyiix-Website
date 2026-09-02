import React from 'react';
import { ArrowLeft, ArrowRight, Clock3, Globe2, MessageSquareText, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface GlobalDeliveryPageProps { onBack: () => void; onOpenProject: () => void; }

const regions = [
  { name: 'India', detail: 'Direct IST collaboration with Bengaluru as the working base.' },
  { name: 'UK & Europe', detail: 'Planned afternoon overlap for reviews, decisions and handovers.' },
  { name: 'North America', detail: 'Asynchronous delivery with scheduled decision windows and written updates.' },
  { name: 'Worldwide', detail: 'Open to remote-first teams where a practical collaboration rhythm can be agreed.' },
];

export const GlobalDeliveryPage: React.FC<GlobalDeliveryPageProps> = ({ onBack, onOpenProject }) => (
  <main className="min-h-screen bg-[#F5F8FD] pt-28 text-slate-950">
    <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <button type="button" onClick={onBack} className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-700"><ArrowLeft className="h-4 w-4" />Back to ONYIIX</button>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl"><p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">Global delivery</p><h1 className="mt-4 text-[clamp(3.2rem,8vw,7.6rem)] font-medium leading-[0.9] tracking-[-0.07em]">Bengaluru base.<br /><span className="text-blue-600">Worldwide working rhythm.</span></h1><p className="mt-7 max-w-2xl text-base font-semibold leading-8 text-slate-700">ONYIIX is based in Bengaluru, India—not a network of invented offices. We work remotely with global teams through clear ownership, thoughtful overlap and visible delivery.</p></motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">{regions.map(({ name, detail }, index) => <motion.article key={name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.05 }} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Globe2 className="h-5 w-5" /></span><h2 className="text-lg font-extrabold">{name}</h2></div><p className="mt-4 text-sm leading-6 text-slate-600">{detail}</p></motion.article>)}</div>
      </div>
    </section>

    <section className="bg-[#0B1020] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px]"><p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">How remote delivery stays clear</p><div className="mt-8 grid gap-4 md:grid-cols-3">{[
        { Icon: Clock3, title: 'Agreed overlap', copy: 'Decision windows are planned before the first sprint.' },
        { Icon: MessageSquareText, title: 'Written visibility', copy: 'Progress, risks and next actions stay documented.' },
        { Icon: ShieldCheck, title: 'One accountable team', copy: 'Direct founder access from discovery through launch.' },
      ].map(({ Icon, title, copy }) => <article key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6"><Icon className="h-5 w-5 text-blue-300" /><h2 className="mt-5 text-lg font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-white/55">{copy}</p></article>)}</div><button type="button" onClick={onOpenProject} className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500">Discuss a global project <ArrowRight className="h-4 w-4" /></button></div>
    </section>
  </main>
);
