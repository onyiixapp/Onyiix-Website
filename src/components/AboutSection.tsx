import React from 'react';
import { ArrowRight, Gauge, Globe2, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutSectionProps { onOpenAboutModal: () => void; }

const principles = [
  { Icon: Gauge, title: 'Fast by design', copy: 'Lean interfaces and measured Core Web Vitals—not speed claims without proof.' },
  { Icon: ShieldCheck, title: 'Yours at handover', copy: 'Source code, design assets and documentation transfer with no platform lock-in.' },
  { Icon: Globe2, title: 'Global, founder-led', copy: 'Direct collaboration from Bengaluru with working-hour overlap across India, Europe and North America.' },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => (
  <section id="studio" className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-[1440px]">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-blue-700">
            <Users className="h-3.5 w-3.5" /> About the studio
          </div>
          <h2 className="max-w-3xl text-[clamp(2.2rem,5.6vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
            Small team.<br />Senior thinking.<br /><span className="text-blue-600">Serious systems.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: 0.1 }} className="lg:pt-10">
          <p className="text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
            Meyvaro is the product studio of Maaz and Suman. We design, engineer and launch websites, SaaS products, AI workflows and internal systems for teams that value clarity and momentum.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            One senior team stays with the work from discovery to launch. Every delivery includes direct founder access, a 30-day scoped bug warranty and one month of post-launch maintenance.
          </p>
          <button type="button" onClick={onOpenAboutModal} className="group mt-7 inline-flex items-center gap-3 rounded-full bg-blue-600 py-2 pl-5 pr-2 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition hover:bg-blue-700">
            Meet the studio <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-700"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
          </button>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {principles.map(({ Icon, title, copy }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group rounded-[1.6rem] border border-slate-200/80 bg-[#F7FAFF] p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-7">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-blue-600 shadow-[0_8px_24px_rgba(37,99,235,0.12)] backdrop-blur-xl"><Icon className="h-5 w-5" /></div>
            <h3 className="text-base font-extrabold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
