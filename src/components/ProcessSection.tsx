import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass, PenTool, Rocket, type LucideIcon } from 'lucide-react';

const stages: { step: string; title: string; desc: string; Icon: LucideIcon }[] = [
  { step: '01', title: 'Align', desc: 'Business goals, users, scope and success measures become one concise build brief.', Icon: Compass },
  { step: '02', title: 'Design', desc: 'We shape the user journey, system architecture and high-fidelity interface before build.', Icon: PenTool },
  { step: '03', title: 'Engineer', desc: 'Weekly working releases, responsive QA and performance checks keep progress visible.', Icon: Code2 },
  { step: '04', title: 'Launch', desc: 'Production rollout, technical SEO, handover and a month of post-launch care.', Icon: Rocket },
];

export const ProcessSection: React.FC = () => (
  <section id="process" className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-10 grid gap-4 lg:grid-cols-2 lg:items-end">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700">How we work</span>
          <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">Four clear moves.<br />No black box.</h2>
        </motion.div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 lg:justify-self-end">A compact, founder-led process with visible decisions and working software at every meaningful milestone.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map(({ step, title, desc, Icon }, index) => (
          <motion.article key={step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[#F8FAFF] p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between"><span className="text-xs font-black tracking-[0.18em] text-blue-700">{step}</span><span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white bg-white/[0.85] text-blue-600 shadow-[0_9px_25px_rgba(37,99,235,0.12)] backdrop-blur-xl"><Icon className="h-[18px] w-[18px]" /></span></div>
            <h3 className="mt-10 text-xl font-extrabold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            <div aria-hidden="true" className="absolute -bottom-8 -right-4 text-[6rem] font-black leading-none text-blue-600/[0.035]">{step}</div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
